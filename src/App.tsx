import {useEffect,useRef,useState} from 'react';
import {ArrowRight,Play,SlidersHorizontal,Volume2,VolumeX,BookOpen,Clock3,UsersRound,Check,ChevronRight,Download,Upload,Network,Pause,TriangleAlert,CheckCircle2,RotateCcw,X} from 'lucide-react';
import type {Config,Game,Archive,Question} from './schema';
import {THEMES} from './schema';
import {defaultConfig} from './data';
import {startGame,reducer,tick,currentAttempt,currentQuestion,fairness,planQuestions,leaders,type Action} from './engine';
import {load,save,download,exportCSV,validateArchive} from './persistence';
import {validateConfig} from './validation';
import {fixedConfig,fixedGame} from './scoring';
import {remaining,formatTime} from './timers';
import {audio} from './audio';
import {Button,Modal,Avatar,ThemeIcon,FullscreenButton,fullscreen,ImageViewer} from './components';
import {Configuration} from './Config';
import {Guide} from './Guide';
import {ExerciseView} from './Exercise';
import {Stage,Presenter,ConsultationView,HistoryView,Awards,HelperIcon} from './Game';

type Dialog='guide'|'start'|'exercise'|'presenter'|'bounce'|'history'|'tie'|'image'|null;
type Confirmation={title:string;body:string;onConfirm:()=>void};
const initial=load();
export default function App(){
  const [config,setConfig]=useState<Config>(initial.archive.config);
  const [game,setGame]=useState<Game|null>(initial.archive.game);
  const gameRef=useRef(game);gameRef.current=game;
  const [view,setView]=useState<'welcome'|'config'|'game'>('welcome');
  const [dialog,setDialog]=useState<Dialog>(null);
  const [confirmation,setConfirmation]=useState<Confirmation|null>(null);
  const [toast,setToast]=useState('');
  const [warning,setWarning]=useState(initial.warning);
  const [now,setNow]=useState(Date.now());
  const [muted,setMuted]=useState(false);
  const [bounceGroup,setBounceGroup]=useState('');
  const [image,setImage]=useState<Question|null>(null);
  const [startErrors,setStartErrors]=useState<string[]>([]);
  const [demoConsent,setDemoConsent]=useState(false);
  const [unbalancedConsent,setUnbalancedConsent]=useState(false);
  const [returnedFromGame,setReturnedFromGame]=useState(false);
  const restoreInput=useRef<HTMLInputElement>(null);
  const pendingReveal=useRef(false);
  const timers=useRef<ReturnType<typeof setTimeout>[]>([]);
  const lastAudio=useRef<Game|null>(null);
  const alerted=useRef({minute:false,questionId:'',second:-1,allyId:''});
  const notify=(s:string)=>setToast(s);
  const confirm=(title:string,body:string,onConfirm:()=>void)=>setConfirmation({title,body,onConfirm});
  useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),6500);return()=>clearTimeout(t);},[toast]);
  useEffect(()=>{const message=save(config,game);if(message)setWarning(message);},[config,game]);
  useEffect(()=>{
    const interval=setInterval(()=>{const t=Date.now();setNow(t);setGame(g=>g?tick(g,t):g);},200);
    return()=>{clearInterval(interval);timers.current.forEach(clearTimeout);audio.stop();};
  },[]);
  useEffect(()=>{
    const c=view==='game'&&game?game.config:config;
    audio.enabled=c.sound&&!muted;audio.effectVolume=c.effectVolume;audio.musicVolume=c.musicVolume;
    if(!audio.enabled)audio.stopEffects();
    audio.music(view==='game'&&!!game&&!['pausa','tiempo','premiacion'].includes(game.phase)&&c.music);
    return()=>audio.stopMusic();
  },[view,game?.phase,config.sound,config.effectVolume,config.musicVolume,game?.config.sound,game?.config.effectVolume,game?.config.musicVolume,game?.config.music,muted]);
  useEffect(()=>{
    if(!game||view!=='game'){lastAudio.current=game;return;}
    const old=lastAudio.current;lastAudio.current=game;
    if(!old||old.startedAt!==game.startedAt){audio.cue('inicio');return;}
    if(game.phase==='premiacion'&&old.phase!=='premiacion'){audio.cue('premio');return;}
    if(game.phase==='tiempo'&&old.phase!=='tiempo'){audio.cue('fin');return;}
    if(game.history.at(-1)?.id!==old.history.at(-1)?.id&&game.history.at(-1)?.type==='comodin'){audio.cue('comodin');return;}
    if(game.phase==='revelada'&&old.phase!=='revelada'){audio.cue(game.results.some(r=>r.questionId===currentQuestion(game).id&&r.correct)?'correcta':'incorrecta');return;}
    if(game.phase==='confirmada'&&old.phase!=='confirmada'){audio.cue(currentAttempt(game).timedOut?'fin':'confirmar');return;}
    if(game.phase==='activa'&&old.phase==='preparada'){audio.cue('pregunta');return;}
    if(currentAttempt(game).selection!==currentAttempt(old).selection&&currentAttempt(game).selection)audio.cue('seleccion');
  },[game,view]);
  useEffect(()=>{
    if(!game||view!=='game'||['pausa','premiacion','tiempo'].includes(game.phase))return;
    const general=remaining(game.clock,now),qs=Math.ceil(remaining(game.questionClock,now)/1000);
    if(general<=60000&&!alerted.current.minute){alerted.current.minute=true;audio.cue('cuenta');}
    const key=`${game.index}:${game.attempts.length}`;
    if(alerted.current.questionId!==key){alerted.current.questionId=key;alerted.current.second=-1;}
    if(game.questionClock.running&&qs<=10&&qs>0&&qs!==alerted.current.second){alerted.current.second=qs;audio.cue('cuenta');}
    if(game.consultation?.kind==='aliado'&&remaining(game.consultation.clock,now)===0&&alerted.current.allyId!==`${game.index}:${currentAttempt(game).groupId}`){alerted.current.allyId=`${game.index}:${currentAttempt(game).groupId}`;audio.cue('fin');}
  },[now,game,view]);
  const dispatch=(a:Action)=>{
    if(a.type==='REVEAL'){
      if(pendingReveal.current||gameRef.current?.phase!=='confirmada')return;
      pendingReveal.current=true;audio.cue('suspenso');
      timers.current.push(setTimeout(()=>{pendingReveal.current=false;setGame(g=>g?reducer(g,a):g);},480));
    }else setGame(g=>g?reducer(g,a):g);
  };
  const backup=()=>download('respaldo-taller-redes.json',JSON.stringify({version:1,config,game},null,2));
  const showStart=()=>{setStartErrors(validateConfig(config));setDemoConsent(false);setUnbalancedConsent(false);setDialog('start');};
  const launch=async()=>{
    const errors=validateConfig(config);if(errors.length){setStartErrors(errors);return;}
    if(config.questions.some(q=>q.demo)&&!demoConsent)return;
    if(planQuestions(config).questions.length%5!==0&&!unbalancedConsent)return;
    await audio.unlock();alerted.current={minute:false,questionId:'',second:-1,allyId:''};
    setGame(startGame(config));setView('game');setDialog(null);setReturnedFromGame(false);audio.cue('inicio');
  };
  const finish=()=>{
    if(!game)return;
    const fair=fairness(game);
    const unresolved=!game.resolved&&game.phase!=='tiempo';
    const body=`${fair.unequal?'ADVERTENCIA: los grupos tuvieron distinta cantidad de preguntas o distintos puntos máximos disponibles. ':''}${unresolved?'La pregunta actual no está resuelta y no sumará puntos. ':''}Se detendrán los cronómetros y se abrirá la premiación. Puedes exportar el historial completo.`;
    confirm('Finalizar actividad',body,()=>{dispatch({type:'FINISH'});setDialog(null);});
  };
  const reset=()=>confirm('Comenzar una nueva partida','Se reemplazará la partida guardada, incluidos puntajes, comodines e historial. La configuración y los grupos se conservarán. Exporta un respaldo si lo necesitas.',()=>{audio.stop();setGame(null);setView('welcome');setDialog(null);setReturnedFromGame(false);});
  const goHome=()=>{
    if(view==='game'&&game&&game.phase!=='premiacion'){
      confirm('Volver al inicio','La actividad quedará pausada y guardada. Puedes retomarla con «Continuar partida».',()=>{if(!['pausa','tiempo'].includes(game.phase))dispatch({type:'PAUSE'});setView('welcome');setDialog(null);audio.stop();});
    }else {setView('welcome');setDialog(null);audio.stop();}
  };
  const bounce=()=>{if(!game)return;setBounceGroup(game.config.groups.find(x=>x.id!==currentAttempt(game).groupId)!.id);setDialog('bounce');};
  const concede=()=>{
    if(!game)return;
    const next=reducer(game,{type:'BOUNCE',id:bounceGroup});
    if(next===game||next.attempts.length===game.attempts.length){notify('El rebote no procede: solo tras un fallo o tiempo agotado, una vez y antes de revelar. Usa «Revelar solución» para resolver.');setDialog(null);return;}
    setGame(next);setDialog(null);audio.cue('pregunta');
  };
  const configure=()=>{
    setDialog(null);
    if(view==='game'){
      if(game?.phase!=='pausa'){notify('Primero pausa la actividad para editar.');return;}
      confirm('Editar configuración para la próxima partida','La partida actual mantiene una copia de su banco y de sus reglas para no alterar la competencia. Los cambios no afectan los resultados actuales.',()=>{setReturnedFromGame(true);setView('config');});
    }else{setReturnedFromGame(false);setView('config');}
  };
  const restore=async(file?:File)=>{
    if(!file)return;
    try{
      if(file.size>15*1024*1024)throw new Error('El respaldo supera 15 MB.');
      const value=JSON.parse((await file.text()).replace(/^\uFEFF/,''));
      validateArchive(value);
      confirm('Importar respaldo completo','Se reemplazarán la configuración y la partida actual. Se aplicarán 100 puntos por acierto a cada grupo conservando los ajustes manuales y la puntuación anterior. Los cronómetros en marcha descontarán el tiempo transcurrido desde el respaldo.',()=>{setConfig(fixedConfig(value.config));setGame(value.game?tick(fixedGame(value.game)):null);setView('welcome');setDialog(null);notify('Respaldo validado y recuperado. Cada acierto suma 100 al grupo correspondiente.');});
    }catch(e){notify(`No se importó el respaldo: ${e instanceof Error?e.message:'JSON no válido.'}`);}
    if(restoreInput.current)restoreInput.current.value='';
  };
  useEffect(()=>{
    const keydown=(e:KeyboardEvent)=>{
      if(e.repeat||e.ctrlKey||e.altKey||e.metaKey||['INPUT','TEXTAREA','SELECT'].includes((e.target as HTMLElement)?.tagName)||(e.target as HTMLElement)?.isContentEditable||dialog||confirmation||game?.consultation)return;
      const key=e.key.toLowerCase();
      if(key==='f'){e.preventDefault();fullscreen(notify);return;}
      if(key==='m'){setMuted(m=>!m);return;}
      if(view!=='game'||!game||game.phase==='premiacion')return;
      if(key==='p'){setDialog('presenter');return;}
      if(key===' '){e.preventDefault();dispatch({type:'PAUSE'});return;}
      if('abcd'.includes(key)&&key.length===1){dispatch({type:'SELECT',id:currentQuestion(game).options['abcd'.indexOf(key)].id});return;}
      if(key==='enter'&&['seleccionada','rebote'].includes(game.phase)&&currentAttempt(game).selection){e.preventDefault();dispatch({type:'CONFIRM'});}
      if(key==='n')dispatch({type:'NEXT'});
    };
    window.addEventListener('keydown',keydown);return()=>window.removeEventListener('keydown',keydown);
  },[game,view,dialog,confirmation]);
  const clockMs=view==='game'&&game?remaining(game.clock,now):config.minutes*60000;
  const inPlay=view==='game'&&game;
  return <div className={`app-shell ${inPlay?'is-game':''}`} onPointerDown={()=>{void audio.unlock();}}>
    <a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();document.querySelector('main')?.focus();}}>Saltar al contenido</a>
    <header className="topbar">
      <button className="wordmark" aria-label="Volver al inicio" onClick={goHome}><Network size={24}/><span>REDES<span className="wordmark-divider"/>EL TALLER</span></button>
      {!inPlay&&<nav className="topnav" aria-label="Navegación principal"><button className={view==='welcome'?'active':''} onClick={goHome}>El escenario</button><button className={view==='config'?'active':''} onClick={configure}>Configuración</button><button onClick={()=>setDialog('guide')}>Cómo jugar</button></nav>}
      {inPlay&&<span className="topbar-activity">Técnicas de Planeación de Redes</span>}
      <div className="top-actions">{inPlay&&<div className={`global-clock ${clockMs<=300000?'urgent':clockMs<=600000?'warning':''}`} role="timer" aria-label="Tiempo restante del taller"><Clock3 size={20}/><div><span>{game.phase==='pausa'?'TALLER EN PAUSA':game.phase==='tiempo'?'TIEMPO FINALIZADO':'TIEMPO DEL TALLER'}</span><strong data-testid="general-clock">{formatTime(clockMs)}</strong></div><Button className="icon-btn" aria-label={game.phase==='pausa'?'Reanudar actividad':'Pausar actividad'} disabled={['tiempo','premiacion'].includes(game.phase)} onClick={()=>dispatch({type:'PAUSE'})}>{game.phase==='pausa'?<Play size={17}/>:<Pause size={17}/>}</Button></div>}
        <Button className="icon-btn" title={muted?'Activar sonido (M)':'Silenciar (M)'} aria-label={muted?'Activar sonido':'Silenciar'} onClick={()=>setMuted(!muted)}>{muted||!(game&&view==='game'?game.config.sound:config.sound)?<VolumeX size={19}/>:<Volume2 size={19}/>}</Button><FullscreenButton onError={notify}/></div>
    </header>
    {warning&&<div className="storage-warning" role="alert"><TriangleAlert size={18}/><p>{warning}</p><Button onClick={backup}>Exportar respaldo</Button><Button className="icon-btn" aria-label="Ocultar advertencia de almacenamiento" onClick={()=>setWarning('')}><X size={17}/></Button></div>}
    {view==='welcome'&&<main className="welcome-page" id="main-content" tabIndex={-1}>
      <div className="welcome-eyebrow"><span className="live-dot"/>UNA CLASE. CINCO GRUPOS. UN GRAN DESAFÍO.</div>
      <div className="welcome-layout"><section className="welcome-copy"><div className="season-label">TÉCNICAS DE PLANEACIÓN DE REDES<span>EDICIÓN UNIVERSITARIA</span></div><h1>¿Quién quiere ser<br/>experto en<br/><span>Planeación de Redes?</span></h1><p className="welcome-subtitle">Taller interactivo de estructura, tiempos,<br className="desktop-break"/> costos y recursos.</p><p className="welcome-desc">Conecta las ideas. Piensa en equipo.<br/>Y lleva tu conocimiento hasta la cima.</p>
        <div className="welcome-primary"><Button variant="primary hero-button" onClick={game?()=>confirm('Iniciar una nueva actividad','Existe una partida guardada. Iniciar una nueva la reemplazará. Puedes continuarla o exportar un respaldo antes.',showStart):showStart}><Play size={19} fill="currentColor"/>Iniciar actividad<ArrowRight size={20}/></Button>{game&&<Button onClick={async()=>{await audio.unlock();setView('game');}}><RotateCcw size={17}/>Continuar partida</Button>}</div>
        <div className="welcome-secondary"><Button onClick={configure}><SlidersHorizontal size={17}/>Configurar taller</Button><Button variant="text" onClick={()=>setDialog('guide')}><BookOpen size={17}/>Cómo jugar</Button></div>
        <div className="ready-indicator"><span className="status-dot"/><span>El tiempo empieza cuando tú lo decidas.</span></div>
      </section>
      <aside className="welcome-stage"><div className="stage-beam one"/><div className="stage-beam two"/><div className="stage-orbit orbit-one"/><div className="stage-orbit orbit-two"/><div className="stage-orbit orbit-three"/>
        <div className="welcome-stage-card"><div className="stage-card-top"><span className="eyebrow">TU PRÓXIMO DESAFÍO</span><span className="tag">Modo {config.questions.some(q=>q.demo)?'demostración':'definitivo'}</span></div>
          <div className="lobby-time"><span className="clock-decoration"><Clock3 size={28}/></span><div><strong>{formatTime(config.minutes*60000)}</strong><span>MINUTOS PARA CONECTAR IDEAS</span></div></div>
          <div className="stage-divider"/><div className="lobby-stat"><div><strong>{config.groups.length.toString().padStart(2,'0')}</strong><span>grupos participantes</span></div><span className="stat-slash"/><div><strong>{config.questions.filter(q=>!q.tiebreak).length.toString().padStart(2,'0')}</strong><span>preguntas en juego</span></div></div>
          <div className="lobby-topics">{THEMES.map((t,i)=><div key={t}><ThemeIcon theme={t} size={19}/><span>{t}</span><small>{String(config.questions.filter(q=>q.theme===t&&!q.tiebreak).length).padStart(2,'0')}</small></div>)}</div>
          <div className="stage-card-bottom"><span className="status-dot"/>{config.mode==='rotativo'?'Turnos rotativos':'Selección manual'}<span>Sin dinero real</span></div>
        </div><div className="stage-floor"/><div className="stage-caption">EL CONOCIMIENTO SE CONSTRUYE EN EQUIPO</div>
      </aside></div>
      <section className="lobby-groups"><div className="row between"><h2>Los protagonistas del taller</h2><button onClick={configure}>Personalizar grupos<ArrowRight size={16}/></button></div><div className="lobby-group-grid">{config.groups.map((g,i)=><article key={g.id} style={{'--group-color':g.color} as React.CSSProperties}><span className="group-avatar"><Avatar name={g.avatar} size={27}/></span><div><h3>{g.name}</h3><span>{i===0?'Abre la competencia':`Turno ${i+1}`}</span></div><span className="group-number">{String(i+1).padStart(2,'0')}</span></article>)}</div></section>
      <section className="lobby-bottom"><div><span className="tag"><BookOpen size={14}/>Antes de empezar</span><p>{config.questions.some(q=>q.demo)?'El banco contiene preguntas de demostración. Reemplázalas por las del ejercicio de tu clase.':'Revisa el ejercicio base y la distribución de preguntas antes de comenzar.'}</p></div><div className="row wrap"><Button variant="text" onClick={async()=>{await audio.unlock();audio.enabled=true;audio.effectVolume=config.effectVolume;audio.cue('inicio');notify('Prueba de sonido reproducida.');}}><Volume2 size={17}/>Probar sonido</Button><Button variant="text" onClick={()=>fullscreen(notify)}>Activar pantalla completa</Button></div></section>
      <footer className="welcome-footer"><span>Hecho para aprender, pensado para compartir.</span><div className="row wrap"><Button variant="text" onClick={backup}><Download size={14}/>Respaldo JSON</Button><Button variant="text" onClick={()=>restoreInput.current?.click()}><Upload size={14}/>Importar respaldo</Button></div><span>100 % local · Sin cuentas ni servicios externos</span></footer>
    </main>}
    {view==='config'&&<Configuration config={config} onChange={setConfig} confirm={confirm} notify={notify} onBack={()=>{if(returnedFromGame)setView('game');else setView('welcome');}} onStart={game?()=>confirm('Reemplazar la partida guardada','La nueva actividad reemplazará el progreso guardado. Exporta un respaldo antes si deseas conservarlo.',showStart):showStart} locked={returnedFromGame}/>}
    {inPlay&&game.phase!=='premiacion'&&<Stage game={game} now={now} dispatch={dispatch} onExercise={()=>setDialog('exercise')} onPresenter={()=>setDialog('presenter')} onBounce={bounce} onImage={q=>{setImage(q);setDialog('image');}} onFinish={finish}/>}
    {inPlay&&game.phase==='premiacion'&&<Awards game={game} onCSV={()=>exportCSV(game)} onBackup={backup} onHome={goHome} onNew={()=>{setConfig({...game.config});reset();}} onTie={()=>setDialog('tie')} onShared={()=>dispatch({type:'SHARED'})}/>}
    <input hidden ref={restoreInput} type="file" accept=".json,application/json" aria-label="Importar respaldo JSON" onChange={e=>restore(e.target.files?.[0])}/>
    {dialog==='guide'&&<Modal title="Cómo jugar" wide onClose={()=>setDialog(null)}><Guide onConfigure={()=>{setDialog(null);configure();}}/></Modal>}
    {dialog==='start'&&<Modal title="Todo listo para el desafío" onClose={()=>setDialog(null)}>
      {startErrors.length>0?<><div className="error-box" role="alert"><h3>La configuración necesita unos ajustes</h3><ul>{startErrors.slice(0,16).map((s,i)=><li key={i}>{s}</li>)}</ul></div><Button variant="primary" onClick={()=>{setDialog(null);setView('config');}}>Volver a la configuración</Button></>:<>
        <div className="start-summary"><div><Clock3 size={23}/><strong>{config.minutes} min</strong><span>Taller completo</span></div><div><UsersRound size={23}/><strong>5 grupos</strong><span>{config.mode==='rotativo'?'Turnos rotativos':'Turnos manuales'}</span></div><div><BookOpen size={23}/><strong>{config.questions.filter(q=>!q.tiebreak).length} preguntas</strong><span>{config.questionTimer?`${config.seconds} s por pregunta`:'Sin límite por pregunta'}</span></div></div>
        <ul className="rules-summary"><li>Una selección, una confirmación definitiva. La solución se revela manualmente.</li><li>Cada acierto suma 100 puntos solo al grupo que respondió. Cada grupo acumula su puntaje por separado; la dificultad no cambia el valor.</li><li>{config.helperCount} uso(s) de cada comodín por grupo. {config.rebound?'Un rebote disponible por pregunta: 100 puntos si acierta.':'Rebotes desactivados.'}</li><li>El cronómetro del taller comienza al presionar el botón inferior. La pregunta comienza por separado.</li></ul>
        <div className="info-box">Distribución temática: {THEMES.map(t=>`${config.questions.filter(q=>q.theme===t&&!q.tiebreak).length} de ${t.toLowerCase()}`).join(' · ')}. No se garantiza una pregunta de cada tema por grupo.</div>
        <div className="small distribution">{config.groups.map((g,i)=><span key={g.id}>{g.name}: {planQuestions(config).assignments.filter(id=>id===g.id).length} preguntas · {planQuestions(config).totals[i]} pts posibles</span>)}</div>
        {new Set(planQuestions(config).totals).size>1&&<div className="warning-box">Los puntajes máximos disponibles no son iguales. Ajusta la cantidad de preguntas para repartir las mismas oportunidades entre los cinco grupos. Cada acierto vale 100.</div>}
        {config.questions.filter(q=>!q.tiebreak).length%5!==0&&<label className="check warning-box"><input type="checkbox" checked={unbalancedConsent} onChange={e=>setUnbalancedConsent(e.target.checked)}/>Acepto iniciar con oportunidades desiguales; el banco no es múltiplo de cinco.</label>}
        {config.questions.some(q=>q.demo)&&<label className="check warning-box"><input type="checkbox" checked={demoConsent} onChange={e=>setDemoConsent(e.target.checked)}/>Entiendo que estoy iniciando una demostración, no el taller definitivo.</label>}
        {!config.exercise.description&&!config.exercise.activities.length&&!config.exercise.image&&<p className="small muted">No hay ejercicio base cargado. Puedes practicar con las preguntas conceptuales de demostración.</p>}
        <Button variant="primary full" disabled={config.questions.some(q=>q.demo)&&!demoConsent||config.questions.filter(q=>!q.tiebreak).length%5!==0&&!unbalancedConsent} onClick={launch}><Play size={18}/>Iniciar actividad<ArrowRight size={18}/></Button>
      </>}
    </Modal>}
    {dialog==='exercise'&&game&&<Modal title="Ejercicio base" wide onClose={()=>setDialog(null)}><ExerciseView exercise={game.config.exercise}/></Modal>}
    {dialog==='image'&&image&&<Modal title="Apoyo visual de la pregunta" wide onClose={()=>setDialog(null)}><ImageViewer src={image.image} alt="Imagen o diagrama de la pregunta"/></Modal>}
    {dialog==='presenter'&&game&&<Presenter game={game} dispatch={dispatch} onClose={()=>setDialog(null)} onBounce={bounce} onFinish={finish} onReset={reset} onHistory={()=>setDialog('history')} onConfigure={configure} onBackup={backup} notify={notify}/>}
    {dialog==='history'&&game&&<Modal title="Historial de la actividad" wide onClose={()=>setDialog('presenter')}><HistoryView game={game}/></Modal>}
    {dialog==='bounce'&&game&&<Modal title="Conceder un rebote" onClose={()=>setDialog(null)}><div className="form-stack"><div className="info-box">Solo tras un fallo o tiempo agotado, antes de revelar la solución. Una oportunidad adicional por pregunta. Un acierto suma 100 exclusivamente al grupo del rebote; el grupo original no suma.</div><label>Grupo participante<select value={bounceGroup} onChange={e=>setBounceGroup(e.target.value)}>{game.config.groups.filter(x=>x.id!==game.attempts[0].groupId).map(x=><option key={x.id} value={x.id}>{x.name}</option>)}</select></label><p>No se mostrará la solución hasta que finalice el rebote. El temporizador de pregunta se reinicia para el nuevo grupo.</p><Button variant="primary" onClick={concede}>Comenzar rebote<RotateCcw size={17}/></Button></div></Modal>}
    {dialog==='tie'&&game&&<TieBreaker game={game} dispatch={dispatch} onClose={()=>setDialog(null)}/>}
    {inPlay&&game.consultation&&<ConsultationView game={game} now={now} dispatch={dispatch}/>}
    {confirmation&&<Modal title={confirmation.title} onClose={()=>setConfirmation(null)}><p>{confirmation.body}</p><div className="modal-actions"><Button onClick={()=>setConfirmation(null)}>Cancelar</Button><Button variant="primary" onClick={()=>{const f=confirmation.onConfirm;setConfirmation(null);f();}}>Confirmar</Button></div></Modal>}
    {toast&&<div className="toast" role="status"><CheckCircle2 size={19}/><p>{toast}</p><button aria-label="Cerrar aviso" onClick={()=>setToast('')}><X size={17}/></button></div>}
  </div>;
}
function TieBreaker({game:g,dispatch,onClose}:{game:Game;dispatch:(a:Action)=>void;onClose:()=>void}){
  const [contenders]=useState(()=>leaders(g));
  const [qid,setQid]=useState(g.config.questions.find(q=>q.tiebreak&&!g.tieUsed.includes(q.id))?.id||'');
  const [answers,setAnswers]=useState<Record<string,string>>({});
  const [selected,setSelected]=useState('');
  const [turn,setTurn]=useState(0);
  const [revealed,setRevealed]=useState(false);
  const q=g.config.questions.find(q=>q.id===qid);
  if(!q)return <Modal title="Desempate" onClose={onClose}><p>No hay preguntas de desempate disponibles.</p></Modal>;
  return <Modal title="Pregunta de desempate" wide onClose={onClose}>
    <div className="form-stack"><div className="info-box">Ronda especial sin puntos adicionales. Cada grupo fija su respuesta; no se muestran las selecciones anteriores. Solo se define ganador único si un solo grupo acierta. Si varios aciertan, continúan empatados; si ninguno acierta, se conserva el empate.</div>
      {turn===0&&!revealed&&<label>Pregunta cargada por el organizador<select value={qid} onChange={e=>setQid(e.target.value)}>{g.config.questions.filter(q=>q.tiebreak&&!g.tieUsed.includes(q.id)).map(q=><option key={q.id} value={q.id}>{q.text}</option>)}</select></label>}
      <h2>{q.text}</h2>
      {q.image&&<ImageViewer src={q.image} alt="Apoyo visual de la pregunta de desempate"/>}
      {turn<contenders.length&&!revealed?<><h3>Responde: {contenders[turn].name}</h3><div className="answers">{q.options.map((o,i)=><button key={o.id} className={`answer ${selected===o.id?'selected':''}`} onClick={()=>setSelected(o.id)}><span className="letter">{'ABCD'[i]}</span>{o.text}</button>)}</div><Button variant="primary" disabled={!selected} onClick={()=>{setAnswers({...answers,[contenders[turn].id]:selected});setSelected('');setTurn(turn+1);}}>Confirmar respuesta definitiva<LockIcon/></Button></>:!revealed?<><p>Todos los grupos fijaron sus respuestas. El presentador puede revelar ahora.</p><Button variant="primary" onClick={()=>{dispatch({type:'TIE',questionId:q.id,answers});setRevealed(true);audio.cue('premio');}}>Revelar el desempate</Button></>:<><div className="solution-panel"><h3>Respuesta correcta: {q.options.find(o=>o.id===q.correctId)?.text}</h3><p>{q.explanation}</p>{q.extra&&<p className="pre-line">{q.extra}</p>}<p className="small">{q.reference}</p></div>{contenders.map(x=><p key={x.id}>{x.name}: {answers[x.id]===q.correctId?'Acierto':'Error'}.</p>)}<Button variant="primary" onClick={onClose}>Volver a la premiación</Button></>}
    </div>
  </Modal>;
}
function LockIcon(){return <Check size={17}/>;}
