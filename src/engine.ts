import type {Config, Game, Question, Phase, Helper, Attempt, Event} from './schema';
import {HELPERS, THEMES} from './schema';
import {clock, remaining, run, stop} from './timers';
import {uniqueId} from './ids';
import {CORRECT_POINTS,fixedConfig} from './scoring';

export const currentQuestion = (g: Game) => g.questions[g.index];
export const currentAttempt = (g: Game) => g.attempts[g.attempts.length-1];
export const isPlayable = (g: Game, now=Date.now()) => ['activa','seleccionada','rebote'].includes(g.phase) && !g.consultation && remaining(g.clock,now)>0 && (!g.config.questionTimer || remaining(g.questionClock,now)>0);
const event = (g:Game,type:string,detail:string,now:number,groupId?:string): Event => {
  const q = currentQuestion(g);
  return {id:uniqueId(),time:new Date(now).toISOString(),type,detail,questionId:q?.id,team:q?.team,theme:q?.theme,groupId:groupId||currentAttempt(g)?.groupId};
};
const log = (g:Game,type:string,detail:string,now:number,groupId?:string): Game => ({...g,history:[...g.history,event(g,type,detail,now,groupId)]});
const shuffle = <T,>(a:T[]) => {const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};

export function planQuestions(config: Config) {
  config=fixedConfig(config);
  let questions = THEMES.flatMap(theme=>{
    const qs=config.questions.filter(q=>q.theme===theme&&!q.tiebreak);
    return config.random?shuffle(qs):qs;
  });
  // Keep theme blocks, rotating turns and per-group counts intact.
  // Every question is worth 100; balance difficulty within each theme.
  const totals=(qs:Question[]) => {
    const t=[0,0,0,0,0]; qs.forEach((q,i)=>t[i%5]+=q.points);return t;
  };
  const cost=(qs:Question[]) => {const t=[0,0,0,0,0];qs.forEach((q,i)=>t[i%5]+=q.difficulty==='Fácil'?1:q.difficulty==='Media'?2:3);const avg=t.reduce((a,b)=>a+b,0)/5;return t.reduce((a,b)=>a+(b-avg)**2,0);};
  for(let pass=0;pass<30;pass++){
    let improved=false;
    for(let i=0;i<questions.length;i++) for(let j=i+1;j<questions.length;j++){
      if(questions[i].theme!==questions[j].theme||i%5===j%5)continue;
      const before=cost(questions);
      [questions[i],questions[j]]=[questions[j],questions[i]];
      if(cost(questions)<before) improved=true; else [questions[i],questions[j]]=[questions[j],questions[i]];
    }
    if(!improved)break;
  }
  return {questions:structuredClone(questions),assignments:questions.map((_,i)=>config.groups[i%5].id),totals:totals(questions)};
}
export function startGame(config:Config,now=Date.now()):Game {
  config=fixedConfig(config);
  const plan=planQuestions(config);
  const scores=Object.fromEntries(config.groups.map(g=>[g.id,0]));
  const inventories=Object.fromEntries(config.groups.map(g=>[g.id,Object.fromEntries(HELPERS.map(h=>[h,config.helperCount]))])) as Game['inventories'];
  const game:Game={version:1,config:structuredClone(config),questions:plan.questions,index:0,assignments:plan.assignments,phase:'preparada',previousPhase:'preparada',clock:run(clock(config.minutes*60000),now),questionClock:clock(config.seconds*1000),attempts:[{groupId:plan.assignments[0],selection:null,locked:false,timedOut:false,rebound:false}],hidden:[],consultation:null,inventories,scores,results:[],history:[],startedAt:new Date(now).toISOString(),resolved:false,resumeQuestion:false,winners:null,tieUsed:[],usedHelpers:[]};
  return log({...game,scoringRule:'fixed100'},'inicio','Actividad iniciada. Cronómetro general en marcha. Cada acierto suma 100 al grupo que respondió.',now);
}
export type Action =
  | {type:'TICK'|'BEGIN'|'CONFIRM'|'REVEAL'|'NEXT'|'PAUSE'|'FINISH'|'CLOSE_CONSULT';now?:number}
  | {type:'SELECT';id:string;now?:number}
  | {type:'GROUP'|'BOUNCE';id:string;now?:number}
  | {type:'HELP';helper:Helper;now?:number}
  | {type:'VOTES';votes:number[];now?:number}
  | {type:'ALLY';name:string;now?:number}
  | {type:'EXTRA';minutes:number;now?:number}
  | {type:'CORRECT';groupId:string;points:number;reason:string;now?:number}
  | {type:'VOID';reason:string;now?:number}
  | {type:'TIE';questionId:string;answers:Record<string,string>;now?:number}
  | {type:'AUDIO';settings:Partial<Pick<Config,'sound'|'music'|'effectVolume'|'musicVolume'>>;now?:number}
  | {type:'SHARED';now?:number};

export function tick(g:Game,now=Date.now()):Game {
  if(['premiacion','pausa'].includes(g.phase))return g;
  if(g.phase!=='tiempo'&&remaining(g.clock,now)<=0) {
    const next={...g,previousPhase:g.phase,phase:'tiempo' as Phase,clock:stop(g.clock,now),resumeQuestion:g.questionClock.running,questionClock:stop(g.questionClock,now),consultation:g.consultation?{...g.consultation,clock:stop(g.consultation.clock,now)}:null};
    return log(next,'tiempo','Tiempo del taller finalizado.',now);
  }
  const a=currentAttempt(g);
  if(g.config.questionTimer && ['activa','seleccionada','rebote'].includes(g.phase)&&!a.locked&&remaining(g.questionClock,now)<=0){
    const attempts=g.attempts.map((x,i)=>i===g.attempts.length-1?{...x,selection:null,locked:true,timedOut:true}:x);
    return log({...g,attempts,phase:'confirmada',questionClock:stop(g.questionClock,now),consultation:null},'agotado','Tiempo de pregunta agotado. Respuesta bloqueada sin selección.',now);
  }
  return g;
}
export function reducer(state:Game,action:Action):Game {
  const now=action.now??Date.now();
  let g=tick(state,now);
  if(action.type==='TICK')return g;
  const q=currentQuestion(g), a=currentAttempt(g);
  const replaceAttempt=(attempt:Attempt)=>g.attempts.map((x,i)=>i===g.attempts.length-1?attempt:x);
  switch(action.type){
    case 'AUDIO':
      return {...g,config:{...g.config,...action.settings}};
    case 'BEGIN':
      if(g.phase!=='preparada')return g;
      return log({...g,phase:'activa',questionClock:g.config.questionTimer?run(g.questionClock,now):g.questionClock},'pregunta','Pregunta iniciada.',now);
    case 'SELECT':
      if(!isPlayable(g,now)||a.locked||g.hidden.includes(action.id)||!q.options.some(o=>o.id===action.id))return g;
      return {...g,phase:a.rebound?'rebote':'seleccionada',attempts:replaceAttempt({...a,selection:action.id})};
    case 'CONFIRM':
      if(!isPlayable(g,now)||a.locked||!a.selection)return g;
      return log({...g,phase:'confirmada',attempts:replaceAttempt({...a,locked:true}),questionClock:stop(g.questionClock,now)},'confirmacion',`Respuesta definitiva: ${q.options.find(o=>o.id===a.selection)?.text}.`,now);
    case 'REVEAL': {
      if(g.phase!=='confirmada'||g.resolved)return g;
      const results=g.attempts.map(at=>({questionId:q.id,team:q.team,theme:q.theme,groupId:at.groupId,selection:at.selection,correct:!at.timedOut&&at.selection===q.correctId,points:!at.timedOut&&at.selection===q.correctId?CORRECT_POINTS:0,rebound:at.rebound,time:new Date(now).toISOString()}));
      const scores={...g.scores};
      results.forEach(r=>scores[r.groupId]+=r.points);
      let next={...g,phase:'revelada' as Phase,resolved:true,questionClock:stop(g.questionClock,now),results:[...g.results,...results],scores};
      results.forEach(r=>{next=log(next,r.rebound?'resultado_rebote':'resultado',`${r.correct?'Acierto':'Error'} · ${r.points} puntos · Opción ${r.selection??'sin respuesta'} · Autor: equipo ${q.team} · ${q.theme}`,now,r.groupId);});
      return next;
    }
    case 'NEXT':
      if(g.phase!=='revelada'||!g.resolved||g.index>=g.questions.length-1)return g;
      return log({...g,index:g.index+1,phase:'preparada',resolved:false,hidden:[],consultation:null,questionClock:clock(g.config.seconds*1000),attempts:[{groupId:g.assignments[g.index+1],selection:null,locked:false,timedOut:false,rebound:false}]},'avance','Siguiente pregunta preparada.',now,g.assignments[g.index+1]);
    case 'GROUP':
      if(g.config.mode!=='manual'||g.phase!=='preparada'||!g.config.groups.some(x=>x.id===action.id))return g;
      return log({...g,attempts:replaceAttempt({...a,groupId:action.id})},'turno','Grupo seleccionado manualmente.',now,action.id);
    case 'BOUNCE':
      if(!g.config.rebound||g.phase!=='confirmada'||g.attempts.length!==1||g.resolved||a.groupId===action.id||!g.config.groups.some(x=>x.id===action.id)||(!a.timedOut&&a.selection===q.correctId))return g;
      return log({...g,phase:'rebote',hidden:[],questionClock:g.config.questionTimer?run(clock(g.config.seconds*1000),now):clock(g.config.seconds*1000),attempts:[...g.attempts,{groupId:action.id,selection:null,locked:false,timedOut:false,rebound:true}]},'rebote','Rebote concedido antes de revelar. Acierto: 100 puntos para el grupo que responde.',now,action.id);
    case 'HELP': {
      const usageKey=`${g.index}:${a.groupId}:${action.helper}`;
      if(!isPlayable(g,now)||a.locked||g.usedHelpers.includes(usageKey)||g.inventories[a.groupId][action.helper]<=0||(action.helper==='pista'&&!q.hint.trim()))return g;
      const inv={...g.inventories,[a.groupId]:{...g.inventories[a.groupId],[action.helper]:g.inventories[a.groupId][action.helper]-1}};
      if(action.helper==='mitad'){
        if(g.hidden.length)return g;
        const hidden=shuffle(q.options.filter(o=>o.id!==q.correctId)).slice(0,2).map(o=>o.id);
        return log({...g,inventories:inv,usedHelpers:[...g.usedHelpers,usageKey],hidden,attempts:replaceAttempt({...a,selection:hidden.includes(a.selection||'')?null:a.selection})},'comodin','50:50 utilizado. Dos alternativas incorrectas eliminadas.',now);
      }
      const resumeQuestion=g.config.pauseConsult&&g.questionClock.running;
      return log({...g,inventories:inv,usedHelpers:[...g.usedHelpers,usageKey],questionClock:resumeQuestion?stop(g.questionClock,now):g.questionClock,consultation:{kind:action.helper,votes:[0,0,0,0],ally:'',clock:action.helper==='aliado'?run(clock(30000),now):clock(30000),resumeQuestion}},'comodin',`${({salon:'Consulta al salón',aliado:'Consulta a un aliado',pista:'Pista del ejercicio'} as const)[action.helper]} utilizado.`,now);
    }
    case 'VOTES':
      if(!g.consultation||g.consultation.kind!=='salon'||g.phase==='pausa'||g.phase==='tiempo')return g;
      return {...g,consultation:{...g.consultation,votes:q.options.map((o,i)=>g.hidden.includes(o.id)?0:Math.max(0,Math.min(10000,Math.floor(action.votes[i]||0))))}};
    case 'ALLY':
      if(!g.consultation||g.consultation.kind!=='aliado'||g.phase==='pausa'||g.phase==='tiempo')return g;
      return {...g,consultation:{...g.consultation,ally:action.name}};
    case 'CLOSE_CONSULT': {
      if(!g.consultation)return g;
      const detail=g.consultation.kind==='salon'?`Votos reales A/B/C/D: ${g.consultation.votes.join('/')}.`:g.consultation.kind==='aliado'?`Aliado: ${g.consultation.ally||'sin nombre registrado'}.`:'Pista consultada.';
      return log({...g,consultation:null,questionClock:g.consultation.resumeQuestion&&g.phase!=='pausa'&&g.phase!=='tiempo'?run(g.questionClock,now):g.questionClock,resumeQuestion:['pausa','tiempo'].includes(g.phase)?g.consultation.resumeQuestion||g.resumeQuestion:g.resumeQuestion},'consulta',detail,now);
    }
    case 'PAUSE':
      if(g.phase==='premiacion'||g.phase==='tiempo')return g;
      if(g.phase==='pausa'){
        return log({...g,phase:g.previousPhase,clock:run(g.clock,now),questionClock:g.resumeQuestion&&!g.consultation?run(g.questionClock,now):g.questionClock,consultation:g.consultation?{...g.consultation,clock:g.consultation.kind==='aliado'?run(g.consultation.clock,now):g.consultation.clock}:null},'reanudar','Actividad reanudada.',now);
      }
      return log({...g,previousPhase:g.phase,phase:'pausa',resumeQuestion:g.questionClock.running,clock:stop(g.clock,now),questionClock:stop(g.questionClock,now),consultation:g.consultation?{...g.consultation,clock:stop(g.consultation.clock,now)}:null},'pausa','Actividad y temporizadores pausados.',now);
    case 'EXTRA': {
      if(!Number.isFinite(action.minutes)||action.minutes<=0||action.minutes>120||g.phase==='premiacion')return g;
      const nextClock=clock(remaining(g.clock,now)+action.minutes*60000);
      const expired=g.phase==='tiempo';
      return log({...g,phase:expired?g.previousPhase:g.phase,clock:g.phase==='pausa'?nextClock:run(nextClock,now),questionClock:expired&&g.resumeQuestion&&!g.consultation?run(g.questionClock,now):g.questionClock,consultation:expired&&g.consultation?{...g.consultation,clock:g.consultation.kind==='aliado'?run(g.consultation.clock,now):g.consultation.clock}:g.consultation},'ampliacion',`Ampliación registrada: +${action.minutes} minutos.`,now);
    }
    case 'CORRECT':
      if(!action.reason.trim()||!Number.isFinite(action.points)||Math.abs(action.points)>1000000||!Object.hasOwn(g.scores,action.groupId))return g;
      return log({...g,scores:{...g.scores,[action.groupId]:g.scores[action.groupId]+action.points}},'correccion',`Ajuste ${action.points>=0?'+':''}${action.points} puntos. Motivo: ${action.reason.trim()}`,now,action.groupId);
    case 'VOID': {
      if(!action.reason.trim()||g.resolved||['premiacion','tiempo','pausa'].includes(g.phase))return g;
      return log({...g,phase:'revelada',resolved:true,questionClock:stop(g.questionClock,now),consultation:null,results:[...g.results,{questionId:q.id,team:q.team,theme:q.theme,groupId:g.attempts[0].groupId,selection:null,correct:false,points:0,rebound:false,time:new Date(now).toISOString(),voided:true}]},'anulacion',`Pregunta anulada: ${action.reason}`,now);
    }
    case 'FINISH':
      if(g.phase==='premiacion')return g;
      return log({...g,phase:'premiacion',clock:stop(g.clock,now),questionClock:stop(g.questionClock,now),consultation:null},'final','Actividad finalizada por el presentador.',now);
    case 'SHARED':
      if(g.phase!=='premiacion')return g;
      return log({...g,winners:leaders(g).map(x=>x.id)},'ganadores','Ganadores compartidos declarados.',now);
    case 'TIE': {
      if(g.phase!=='premiacion'||g.winners)return g;
      const question=g.config.questions.find(x=>x.id===action.questionId&&x.tiebreak);
      const tied=leaders(g);
      if(!question||g.tieUsed.includes(question.id)||tied.length<2||tied.some(x=>!question.options.some(o=>o.id===action.answers[x.id])))return g;
      const correct=tied.filter(x=>action.answers[x.id]===question.correctId);
      return log({...g,winners:correct.length===1?[correct[0].id]:null,tieContenders:(correct.length?correct:tied).map(x=>x.id),tieUsed:[...g.tieUsed,question.id]},'desempate',`Pregunta ${question.id}: ${tied.map(x=>`${x.name}=${action.answers[x.id]} (${action.answers[x.id]===question.correctId?'acierto':'error'})`).join('; ')}. ${correct.length===1?'Ganador definido.':'El empate continúa.'}`,now);
    }
  }
}
const tiePriority=(g:Game,id:string)=>g.winners?(g.winners.includes(id)?0:2):g.tieContenders?(g.tieContenders.includes(id)?1:2):0;
export const ranking = (g:Game) => [...g.config.groups].sort((a,b)=>g.scores[b.id]-g.scores[a.id]||tiePriority(g,a.id)-tiePriority(g,b.id));
export const rankPosition=(g:Game,id:string)=>1+g.config.groups.filter(x=>g.scores[x.id]>g.scores[id]||g.scores[x.id]===g.scores[id]&&tiePriority(g,x.id)<tiePriority(g,id)).length;
export const leaders = (g:Game) => ranking(g).filter(x=>g.tieContenders?g.tieContenders.includes(x.id):g.scores[x.id]===Math.max(...Object.values(g.scores)));
export const stats = (g:Game,id:string) => {
  const base=g.results.filter(r=>r.groupId===id&&!r.rebound&&!r.voided),bounce=g.results.filter(r=>r.groupId===id&&r.rebound);
  return {answered:base.length,hits:base.filter(x=>x.correct).length,errors:base.filter(x=>!x.correct).length,rebounds:bounce.length,reboundsCorrect:bounce.filter(x=>x.correct).length};
};
export function fairness(g:Game) {
  const counts=g.config.groups.map(x=>stats(g,x.id).answered);
  const maxes=g.config.groups.map(x=>g.results.filter(r=>r.groupId===x.id&&!r.rebound&&!r.voided).length*CORRECT_POINTS);
  const scheduled=planQuestions(g.config);
  return {unequal:new Set(counts).size>1||new Set(maxes).size>1,counts,maxes,scheduled};
}
