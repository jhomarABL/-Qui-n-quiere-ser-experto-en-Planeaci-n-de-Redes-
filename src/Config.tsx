import {useState} from 'react';
import {UsersRound,SlidersHorizontal,BookOpen,Network,Volume2,ArrowLeft,Check,Play,Info} from 'lucide-react';
import type {Config} from './schema';
import {THEMES} from './schema';
import {Avatar,avatarNames,Button,ThemeIcon} from './components';
import {Bank} from './Bank';
import {ExerciseEditor} from './Exercise';
import {planQuestions} from './engine';
import {audio} from './audio';
export function Configuration({config:c,onChange,confirm,notify,onBack,onStart,locked=false}:{config:Config;onChange:(c:Config)=>void;confirm:(t:string,b:string,f:()=>void)=>void;notify:(s:string)=>void;onBack:()=>void;onStart:()=>void;locked?:boolean}){
  const [tab,setTab]=useState('grupos');
  const tabs=[['grupos','Grupos participantes',UsersRound],['reglas','Reglas y tiempos',SlidersHorizontal],['preguntas','Banco de preguntas',BookOpen],['ejercicio','Ejercicio base',Network],['sonido','Sonido y ambiente',Volume2]] as const;
  const set=<K extends keyof Config>(k:K,v:Config[K])=>onChange({...c,[k]:v});
  const plan=planQuestions(c);
  return <main className="config-page"><div className="page-heading"><div><Button variant="text" onClick={onBack}><ArrowLeft size={17}/>Volver {locked?'a la actividad':'al inicio'}</Button><h1>Prepara el escenario</h1><p>Un buen taller comienza con las reglas claras.</p></div>{!locked&&<Button variant="primary" onClick={onStart}><Play size={17}/>Revisar e iniciar</Button>}</div>
    {locked&&<div className="warning-box">Partida pausada. Los cambios se guardan para la próxima partida y no alteran las preguntas, grupos ni puntajes de la actual. Reanuda desde «Volver a la actividad».</div>}
    <div className="config-layout"><nav className="config-nav" aria-label="Secciones de configuración">{tabs.map(([id,label,Icon])=><button key={id} aria-current={tab===id?'page':undefined} className={tab===id?'active':''} onClick={()=>setTab(id)}><Icon size={19}/>{label}{tab===id&&<span className="nav-dot"/>}</button>)}<div className="config-side-note"><Info size={18}/><p>Todo se guarda en este navegador. Exporta un respaldo antes del taller.</p></div></nav>
      <div className="config-content">
        {tab==='grupos'&&<section><div className="section-heading"><div><h2>Los cinco protagonistas</h2><p>Estos grupos compiten. Los equipos 6 a 10 son autores de preguntas.</p></div></div>
          <div className="group-edit-list">{c.groups.map((g,i)=><article className="group-edit" key={g.id}><span className="group-avatar large" style={{color:g.color,background:`${g.color}18`}}><Avatar name={g.avatar} size={30}/></span><label>Nombre del grupo {i+1}<input maxLength={40} value={g.name} onChange={e=>set('groups',c.groups.map(x=>x.id===g.id?{...x,name:e.target.value}:x))}/></label><label className="color-label">Color<input type="color" value={g.color} onChange={e=>set('groups',c.groups.map(x=>x.id===g.id?{...x,color:e.target.value}:x))}/></label><label>Ícono<select value={g.avatar} onChange={e=>set('groups',c.groups.map(x=>x.id===g.id?{...x,avatar:e.target.value}:x))}>{avatarNames.map(n=><option key={n} value={n}>{n[0].toUpperCase()+n.slice(1)}</option>)}</select></label></article>)}</div>
          <div className="saved-note"><Check size={16}/>Los cambios se guardan automáticamente.</div>
        </section>}
        {tab==='reglas'&&<section className="form-stack"><div className="section-heading"><div><h2>Reglas y tiempos</h2><p>Controla el ritmo sin perder el espacio para explicar.</p></div></div>
          <div className="form-grid">
            <label>Duración del taller (minutos)<input type="number" min="1" max="600" value={c.minutes} onChange={e=>set('minutes',+e.target.value)}/></label>
            <label>Tiempo por pregunta (segundos)<input type="number" min="5" max="3600" value={c.seconds} onChange={e=>set('seconds',+e.target.value)}/></label>
            <label>Modo de turnos<select value={c.mode} onChange={e=>set('mode',e.target.value as Config['mode'])}><option value="rotativo">Turnos rotativos</option><option value="manual">Selección manual del grupo</option></select></label>
            <label>Orden de las preguntas<select value={String(c.random)} onChange={e=>set('random',e.target.value==='true')}><option value="false">Fijo por bloques temáticos, equilibrado</option><option value="true">Aleatorio dentro de cada tema, equilibrado</option></select></label>
            <label>Cantidad de cada comodín por grupo<input type="number" min="0" max="10" value={c.helperCount} onChange={e=>set('helperCount',+e.target.value)}/></label>
          </div>
          <label className="toggle-row"><div><strong>Temporizador por pregunta</strong><p>Comienza solo al presionar «Comenzar pregunta».</p></div><input type="checkbox" checked={c.questionTimer} onChange={e=>set('questionTimer',e.target.checked)}/></label>
          <label className="toggle-row"><div><strong>Habilitar rebotes</strong><p>Un grupo distinto puede responder antes de revelar. Si acierta, suma 100 a su propio marcador.</p></div><input type="checkbox" checked={c.rebound} onChange={e=>set('rebound',e.target.checked)}/></label>
          <label className="toggle-row"><div><strong>Pausar la pregunta durante consultas</strong><p>El cronómetro general continúa; también se aplica a la pista escrita.</p></div><input type="checkbox" checked={c.pauseConsult} onChange={e=>set('pauseConsult',e.target.checked)}/></label>
          <h3>Puntajes individuales por grupo</h3><div className="info-box">Cada respuesta correcta suma 100 puntos únicamente al grupo que respondió. Dos aciertos suman 200; tres, 300. Los errores suman 0. La dificultad no cambia el puntaje y no existe un marcador compartido.</div>
          <h3>Oportunidades planificadas</h3><div className="table-wrap"><table><thead><tr><th>Grupo</th><th>Preguntas</th><th>Puntaje máximo</th></tr></thead><tbody>{c.groups.map((g,i)=><tr key={g.id}><td>{g.name}</td><td>{plan.assignments.filter(id=>id===g.id).length}</td><td>{plan.totals[i]} puntos</td></tr>)}</tbody></table></div>
          <div className="warning-box">Se planifican bloques de estructura, tiempos, costos y recursos. El banco inicial no permite dar a cada grupo una pregunta de cada tema: hay 4 / 4 / 4 / 8. Se equilibran los puntos disponibles mediante intercambios dentro de cada bloque, siempre que sea posible. En modo manual el presentador administra las oportunidades.</div>
          <div className="row wrap">{THEMES.map(t=><span className="tag" key={t}><ThemeIcon theme={t} size={15}/>{t}: {c.questions.filter(q=>q.theme===t&&!q.tiebreak).length}</span>)}</div>
        </section>}
        {tab==='preguntas'&&<Bank config={c} onChange={onChange} confirm={confirm} notify={notify}/>}
        {tab==='ejercicio'&&<ExerciseEditor exercise={c.exercise} onChange={e=>set('exercise',e)} notify={notify}/>}
        {tab==='sonido'&&<section className="form-stack"><div className="section-heading"><div><h2>Sonido y ambiente</h2><p>Efectos originales sintetizados en tu navegador, sin archivos externos.</p></div></div>
          <label className="toggle-row"><div><strong>Sonidos de la actividad</strong><p>Selección, confirmación, comodines, cuenta regresiva y premiación.</p></div><input type="checkbox" checked={c.sound} onChange={e=>set('sound',e.target.checked)}/></label>
          <label>Volumen de efectos: {Math.round(c.effectVolume*100)} %<input type="range" min="0" max="1" step="0.01" value={c.effectVolume} onChange={e=>set('effectVolume',+e.target.value)}/></label>
          <label className="toggle-row"><div><strong>Música ambiental</strong><p>Ambiente armónico discreto. Desactivado por defecto.</p></div><input type="checkbox" checked={c.music} onChange={e=>set('music',e.target.checked)}/></label>
          <label>Volumen de música: {Math.round(c.musicVolume*100)} %<input type="range" min="0" max="1" step="0.01" value={c.musicVolume} onChange={e=>set('musicVolume',+e.target.value)}/></label>
          <Button onClick={async()=>{await audio.unlock();audio.enabled=true;audio.effectVolume=c.effectVolume;audio.cue('inicio');}}><Volume2 size={18}/>Probar sonido</Button>
          <div className="info-box">El audio solo se activa después de una interacción. El silencio global detiene efectos y música; al salir de la actividad no se mantiene reproducción.</div>
        </section>}
      </div>
    </div>
  </main>;
}
