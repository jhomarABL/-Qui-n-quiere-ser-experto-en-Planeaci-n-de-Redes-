import type {Archive,Config,Game} from './schema';
import {defaultConfig} from './data';
import {validateConfig,validateQuestions} from './validation';
import {HELPERS} from './schema';
import {tick,ranking,rankPosition} from './engine';
import {fixedConfig,fixedGame} from './scoring';
const KEY='experto-redes-v1';
export function load(): {archive:Archive; warning:string} {
  try {
    const raw=window.localStorage.getItem(KEY);
    if(!raw)return {archive:{version:1,config:defaultConfig(),game:null},warning:''};
    const parsed=JSON.parse(raw);
    validateArchive(parsed);
    const migrated=parsed.game&&!parsed.game.scoringRule;
    return {archive:{...parsed,config:fixedConfig(parsed.config),game:parsed.game?tick(fixedGame(parsed.game)):null},warning:migrated?'Partida recuperada con la regla corregida: 100 puntos por acierto para cada grupo. Los ajustes manuales se conservaron y la puntuación anterior está en el respaldo.':''};
  }catch(e){
    return {archive:{version:1,config:defaultConfig(),game:null},warning:`No se pudo recuperar el guardado local. Puedes seguir y exportar un respaldo JSON. ${e instanceof Error?e.message:''}`};
  }
}
export function save(config:Config,game:Game|null) {
  try {window.localStorage.setItem(KEY,JSON.stringify({version:1,config,game}));return '';}
  catch{return 'El navegador no permite guardar o el almacenamiento está lleno. La actividad sigue funcionando; exporta un respaldo JSON antes de cerrar. Para guardado local persistente, usa el proyecto descargable en tu navegador.';}
}
export function validateArchive(value:any): asserts value is Archive {
  if(!value||value.version!==1||!value.config)throw new Error('El respaldo no corresponde a la versión 1.');
  const errors=validateConfig(value.config);if(errors.length)throw new Error(errors.slice(0,4).join(' '));
  if(value.game){
    const g=value.game as Game;
    if(!g.config||!g.clock||!g.questionClock||!Array.isArray(g.questions)||!Array.isArray(g.attempts)||!g.attempts.length||!Array.isArray(g.history)||!g.scores||!g.inventories||!Array.isArray(g.results)||!Array.isArray(g.usedHelpers)||!Array.isArray(g.tieUsed)||!Array.isArray(g.hidden)||!Array.isArray(g.assignments)||!Number.isInteger(g.index)||g.index<0||g.index>=g.questions.length)throw new Error('Estado de partida incompleto.');
    const err=validateConfig(g.config); if(err.length)throw new Error('Configuración de partida inválida.');
    if(!['preparada','activa','seleccionada','confirmada','rebote','revelada','pausa','tiempo','premiacion'].includes(g.phase))throw new Error('Estado de juego no válido.');
    if(validateQuestions(g.questions).length)throw new Error('El banco de la partida no es válido.');
    const ids=g.config.groups.map(x=>x.id);
    const clocks=[g.clock,g.questionClock,...(g.consultation?[g.consultation.clock]:[])];
    if(clocks.some(c=>!c||!Number.isFinite(c.remaining)||c.remaining<0||typeof c.running!=='boolean'||c.running&&!Number.isFinite(c.deadline)))throw new Error('Cronómetro inválido.');
    for(const group of g.config.groups)if(!Number.isFinite(g.scores[group.id])||!g.inventories[group.id]||HELPERS.some(h=>!Number.isInteger(g.inventories[group.id][h])||g.inventories[group.id][h]<0))throw new Error('Puntajes o inventarios no válidos.');
    if(g.assignments.length!==g.questions.length||g.assignments.some(id=>!ids.includes(id))||g.attempts.length>2||g.attempts.some(a=>!a||!ids.includes(a.groupId)||typeof a.locked!=='boolean'||typeof a.timedOut!=='boolean'||typeof a.rebound!=='boolean'||a.selection!==null&&!g.questions[g.index].options.some(o=>o.id===a.selection)))throw new Error('Los turnos o selecciones del respaldo no son válidos.');
    if(g.consultation&&(!['salon','aliado','pista'].includes(g.consultation.kind)||!Array.isArray(g.consultation.votes)||g.consultation.votes.length!==4||g.consultation.votes.some(v=>!Number.isFinite(v)||v<0)||typeof g.consultation.ally!=='string'))throw new Error('Consulta no válida.');
    if(g.results.some(r=>!r||!ids.includes(r.groupId)||!Number.isFinite(r.points)||!g.questions.some(q=>q.id===r.questionId)))throw new Error('Resultados del respaldo no válidos.');
    if(g.history.some(e=>!e||typeof e.detail!=='string'||typeof e.type!=='string'||typeof e.time!=='string'))throw new Error('Historial del respaldo no válido.');
  }
}
export function download(name:string,text:string,type='application/json') {
  const blob=new Blob(['\uFEFF',text],{type:`${type};charset=utf-8`});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);
}
const csvCell=(v:unknown)=>{let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return `"${s.replaceAll('"','""')}"`;};
export function exportCSV(g:Game){
  const rows:unknown[][]=[['Clasificación','Grupo','Puntos','Respondidas','Aciertos','Errores','Rebotes']];
  const ordered=ranking(g);
  ordered.forEach(x=>{const r=g.results.filter(r=>r.groupId===x.id&&!r.rebound&&!r.voided);rows.push([rankPosition(g,x.id),x.name,g.scores[x.id],r.length,r.filter(r=>r.correct).length,r.filter(r=>!r.correct).length,g.results.filter(r=>r.groupId===x.id&&r.rebound).length]);});
  rows.push([],['Pregunta','Equipo autor','Tema','Grupo participante','Opción ID','Acierto','Puntos','Rebote','Anulada','Fecha']);
  g.results.forEach(r=>rows.push([r.questionId,r.team,r.theme,g.config.groups.find(x=>x.id===r.groupId)?.name,r.selection,r.correct?'Sí':'No',r.points,r.rebound?'Sí':'No',r.voided?'Sí':'No',r.time]));
  rows.push([],['Historial','Tipo','Detalle','Grupo','Pregunta','Equipo autor','Tema','Fecha']);
  g.history.forEach(e=>rows.push(['',e.type,e.detail,g.config.groups.find(x=>x.id===e.groupId)?.name,e.questionId,e.team,e.theme,e.time]));
  download('resultados-planeacion-redes.csv',rows.map(row=>row.map(csvCell).join(';')).join('\r\n'),'text/csv');
}
