import {THEMES,DIFFICULTIES, type Config, type Question} from './schema';
export function validateQuestions(value: unknown): string[] {
  const errors: string[] = [];
  if(!Array.isArray(value) || value.length === 0) return ['El banco debe ser una lista con al menos una pregunta.'];
  if(value.length > 500) return ['Máximo 500 preguntas por banco.'];
  const ids = new Set();
  value.forEach((q,i)=>{
    const p = `Pregunta ${i+1}`;
    if(!q || typeof q !== 'object') {errors.push(`${p}: formato no válido.`);return;}
    if(typeof q.id !== 'string' || !q.id.trim() || ids.has(q.id)) errors.push(`${p}: ID vacío o duplicado.`);
    ids.add(q.id);
    if(![6,7,8,9,10].includes(q.team)) errors.push(`${p}: equipo organizador no válido (6 a 10).`);
    if(!THEMES.includes(q.theme)) errors.push(`${p}: tema no válido.`);
    const teamTheme = ({6:'Estructura',7:'Tiempos',8:'Costos',9:'Recursos',10:'Recursos'} as Record<number,string>)[q.team];
    if(teamTheme && q.theme !== teamTheme) errors.push(`${p}: el tema no corresponde al equipo organizador.`);
    if(!DIFFICULTIES.includes(q.difficulty)) errors.push(`${p}: dificultad no válida.`);
    if(typeof q.points !== 'number' || !Number.isFinite(q.points) || q.points < 0 || q.points > 1000000) errors.push(`${p}: puntaje numérico entre 0 y 1 000 000 requerido.`);
    for(const field of ['text','explanation','reference']) if(typeof q[field] !== 'string' || !q[field].trim()) errors.push(`${p}: falta ${({text:'enunciado',explanation:'explicación',reference:'referencia al ejercicio'} as Record<string,string>)[field]}.`);
    if(!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${p}: se requieren exactamente cuatro opciones.`);
    else {
      const optionIds = q.options.map((o: any)=>o?.id);
      if(new Set(optionIds).size !== 4 || q.options.some((o:any)=>!o || typeof o.id!=='string' || !o.id.trim() || typeof o.text!=='string' || !o.text.trim())) errors.push(`${p}: opciones incompletas o IDs de opción duplicados.`);
      if(!optionIds.includes(q.correctId)) errors.push(`${p}: respuesta correcta no válida.`);
    }
    if(typeof q.demo !== 'boolean') errors.push(`${p}: el indicador demo debe ser verdadero o falso.`);
    if(q.image && (typeof q.image !== 'string' || !/^data:image\/(png|jpeg|webp);base64,/.test(q.image))) errors.push(`${p}: solo se admiten imágenes locales PNG, JPEG o WebP.`);
    for(const key of ['hint','extra','image']) if(q[key] !== undefined && typeof q[key] !== 'string') errors.push(`${p}: ${key} debe ser texto.`);
    if(q.tiebreak !== undefined && typeof q.tiebreak !== 'boolean') errors.push(`${p}: desempate debe ser verdadero o falso.`);
  });
  return errors;
}
export function normalizeQuestions(q: Question[]): Question[] {
  return q.map(x=>({id:x.id,team:x.team,theme:x.theme,difficulty:x.difficulty,points:100,text:x.text,options:x.options.map(o=>({id:o.id,text:o.text})),correctId:x.correctId,explanation:x.explanation,hint:x.hint||'',reference:x.reference,extra:x.extra||'',image:x.image||'',demo:x.demo,tiebreak:!!x.tiebreak}));
}
export function validateConfig(c: Config) {
  if(!c||typeof c!=='object'||!Array.isArray(c.groups)||!c.values||!c.exercise||!Array.isArray(c.exercise.activities))return ['La configuración está incompleta o no tiene el formato esperado.'];
  const errors = validateQuestions(c.questions);
  if(c.groups.length!==5 || c.groups.some(g=>!g||typeof g.name!=='string'||!g.name.trim())) errors.push('Configura los nombres de los cinco grupos.');
  if(new Set(c.groups.map(g=>String(g?.name||'').trim().toLowerCase())).size!==5) errors.push('Los nombres de los grupos deben ser distintos.');
  if(new Set(c.groups.map(g=>g?.id)).size!==5||c.groups.some(g=>!g||typeof g.id!=='string'||!/^g[1-5]$/.test(g.id)||typeof g.color!=='string'||!/^#[0-9a-f]{6}$/i.test(g.color)||typeof g.avatar!=='string'))errors.push('Los identificadores, colores o íconos de los grupos no son válidos.');
  if(!Number.isFinite(c.minutes)||c.minutes<1||c.minutes>600) errors.push('La duración del taller debe estar entre 1 y 600 minutos.');
  if(!Number.isFinite(c.seconds)||c.seconds<5||c.seconds>3600) errors.push('El tiempo por pregunta debe estar entre 5 y 3600 segundos.');
  if(!Number.isInteger(c.helperCount)||c.helperCount<0||c.helperCount>10) errors.push('La cantidad de cada comodín debe ser un entero entre 0 y 10.');
  if(DIFFICULTIES.some(d=>!Number.isFinite(c.values[d])||c.values[d]<0||c.values[d]>1000000)) errors.push('Revisa los valores de puntuación.');
  if(!Array.isArray(c.questions)||!c.questions.some(q=>q&&!q.tiebreak)) errors.push('Agrega al menos una pregunta que no sea de desempate.');
  if(!['rotativo','manual'].includes(c.mode))errors.push('Modo de turnos no válido.');
  for(const k of ['sound','music','questionTimer','random','rebound','pauseConsult'] as const)if(typeof c[k]!=='boolean')errors.push(`Configuración de ${k} no válida.`);
  for(const k of ['effectVolume','musicVolume'] as const)if(!Number.isFinite(c[k])||c[k]<0||c[k]>1)errors.push('Los volúmenes deben estar entre 0 y 1.');
  if(typeof c.exercise.description!=='string'||typeof c.exercise.image!=='string'||c.exercise.image&&!/^data:image\/(png|jpeg|webp);base64,/.test(c.exercise.image))errors.push('La descripción o la imagen del ejercicio no es válida.');
  if(c.exercise.activities.some(a=>!a||['id','name','predecessors','duration','cost','resources'].some(k=>typeof a[k as keyof typeof a]!=='string')))errors.push('La tabla de actividades debe contener campos de texto.');
  return errors;
}
