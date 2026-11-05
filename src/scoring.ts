import type {Config,Game,Question} from './schema';
import {uniqueId} from './ids';

export const CORRECT_POINTS=100;
export const fixedQuestion=(q:Question):Question=>({...q,points:CORRECT_POINTS});
export const fixedConfig=(config:Config):Config=>({...config,values:{'Fácil':100,Media:100,'Difícil':100},questions:config.questions.map(fixedQuestion)});

/** Upgrade old local games without discarding attempts, manual score offsets,
 * timers or the original scoring records. Idempotent on subsequent reloads. */
export function fixedGame(game:Game,now=Date.now()):Game {
  if(game.scoringRule==='fixed100')return game;
  const before=structuredClone({scores:game.scores,results:game.results,values:game.config.values,questionPoints:game.questions.map(q=>({id:q.id,points:q.points}))});
  const scores={...game.scores};
  const results=game.results.map(r=>{
    const points=r.correct&&!r.voided?CORRECT_POINTS:0;
    scores[r.groupId]+=points-r.points;
    return {...r,points};
  });
  const changed=game.results.some((r,i)=>r.points!==results[i].points);
  return {...game,scoringRule:'fixed100',scoringBeforeUpdate:before,config:fixedConfig(game.config),questions:game.questions.map(fixedQuestion),scores,results,
    winners:changed?null:game.winners,tieContenders:changed?undefined:game.tieContenders,
    history:[...game.history,{id:uniqueId(),time:new Date(now).toISOString(),type:'regla_puntuacion',detail:'Puntuación actualizada: cada acierto suma 100 exclusivamente al grupo que respondió, también en rebote. Se conservaron los ajustes manuales y una copia de la puntuación anterior.'}]};
}
