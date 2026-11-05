import {Plus,Trash2,ImagePlus,Network} from 'lucide-react';
import type {Exercise} from './schema';
import {Button,ImageViewer,imageFile} from './components';
const activityLabels={id:'ID',name:'Nombre',predecessors:'Predecesoras',duration:'Duración',cost:'Costo',resources:'Recursos'};
const nextActivityId=(exercise:Exercise)=>{let n=1;while(exercise.activities.some(a=>a.id===`A${n}`))n++;return `A${n}`;};
export function ExerciseView({exercise}:{exercise:Exercise}){
  if(!exercise.description&&!exercise.activities.length&&!exercise.image)return <div className="empty"><Network size={48}/><h3>El punto de partida de tu taller</h3><p>Agrega aquí el ejercicio que servirá de base para las preguntas</p><span className="muted small">Se configura en «Configurar taller» → «Ejercicio base».</span></div>;
  return <div className="form-stack">
    {exercise.description&&<p className="pre-line">{exercise.description}</p>}
    {exercise.activities.length>0&&<div className="table-wrap"><table><thead><tr>{['ID','Actividad','Predecesoras','Duración','Costo','Recursos'].map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{exercise.activities.map(a=><tr key={a.id}><td>{a.id}</td><td>{a.name}</td><td>{a.predecessors||'Sin predecesoras'}</td><td>{a.duration||'No definido'}</td><td>{a.cost||'No definido'}</td><td>{a.resources||'No definido'}</td></tr>)}</tbody></table></div>}
    {exercise.image&&<ImageViewer src={exercise.image} alt="Diagrama de red del ejercicio base"/>}
  </div>;
}
export function ExerciseEditor({exercise,onChange,notify}:{exercise:Exercise;onChange:(e:Exercise)=>void;notify:(m:string)=>void}){
  return <section className="form-stack"><div className="section-heading"><div><h2>Ejercicio base</h2><p>Un proyecto común para las preguntas de todos los equipos.</p></div><Network size={28}/></div>
    <div className="info-box">Aún no conocemos tu ejercicio real. Aquí no se incluye un diagrama ni una solución definitiva. Escribe las unidades de duración, costo y recursos en cada celda.</div>
    <label>Descripción del proyecto<textarea aria-label="Descripción del proyecto" rows={5} placeholder="Agrega aquí el ejercicio que servirá de base para las preguntas" value={exercise.description} onChange={e=>onChange({...exercise,description:e.target.value})}/></label>
    <div className="section-heading"><h3>Tabla de actividades</h3><Button onClick={()=>onChange({...exercise,activities:[...exercise.activities,{id:nextActivityId(exercise),name:'',predecessors:'',duration:'',cost:'',resources:''}]})}><Plus size={17}/>Agregar actividad</Button></div>
    {!exercise.activities.length&&<p className="muted">Todavía no hay actividades. Agrega la primera fila o carga la imagen del ejercicio.</p>}
    {exercise.activities.length>0&&<div className="table-wrap"><table className="edit-table"><thead><tr>{['ID','Actividad','Predecesoras','Duración','Costo','Recursos','Acción'].map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{exercise.activities.map((a,i)=><tr key={i}>{(['id','name','predecessors','duration','cost','resources'] as const).map(k=><td key={k}><input aria-label={`${activityLabels[k]} de actividad ${i+1}`} value={a[k]} onChange={e=>onChange({...exercise,activities:exercise.activities.map((x,j)=>i===j?{...x,[k]:e.target.value}:x)})}/></td>)}<td><Button className="icon-btn" aria-label={`Eliminar actividad ${i+1}`} onClick={()=>onChange({...exercise,activities:exercise.activities.filter((_,j)=>j!==i)})}><Trash2 size={17}/></Button></td></tr>)}</tbody></table></div>}
    <label className="file-label"><ImagePlus size={20}/>Cargar diagrama de red<input type="file" accept="image/png,image/jpeg,image/webp" onChange={async e=>{const f=e.target.files?.[0];if(f)try{onChange({...exercise,image:await imageFile(f)});}catch(err){notify(String(err));}}}/><span className="small muted">PNG, JPEG o WebP. Máximo 5 MB; se optimiza a 1600 px para el guardado local.</span></label>
    {exercise.image&&<><ImageViewer src={exercise.image} alt="Diagrama de red del ejercicio base"/><Button onClick={()=>onChange({...exercise,image:''})}>Quitar diagrama</Button></>}
  </section>;
}
