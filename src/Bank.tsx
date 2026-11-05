import {useRef,useState} from 'react';
import {Plus,Upload,Download,Pencil,Copy,Trash2,Eye,ImagePlus,BookOpen,Search} from 'lucide-react';
import type {Question,Config,Theme} from './schema';
import {THEMES,DIFFICULTIES} from './schema';
import {newQuestion} from './data';
import {uniqueId} from './ids';
import {validateQuestions,normalizeQuestions} from './validation';
import {download} from './persistence';
import {Button,Modal,ThemeIcon,ImageViewer,imageFile} from './components';
type Confirm=(title:string,body:string,onConfirm:()=>void)=>void;
export function Bank({config,onChange,confirm,notify}:{config:Config;onChange:(c:Config)=>void;confirm:Confirm;notify:(m:string)=>void}){
  const [theme,setTheme]=useState('');const [team,setTeam]=useState('');const [difficulty,setDifficulty]=useState('');const [search,setSearch]=useState('');
  const [editing,setEditing]=useState<Question|null>(null);const [preview,setPreview]=useState<Question|null>(null);const [errors,setErrors]=useState<string[]>([]);
  const input=useRef<HTMLInputElement>(null);
  const list=config.questions.filter(q=>(!theme||q.theme===theme)&&(!team||q.team===+team)&&(!difficulty||q.difficulty===difficulty)&&q.text.toLowerCase().includes(search.toLowerCase()));
  const update=(q:Question)=>{const errors=validateQuestions([q]);if(errors.length){setErrors(errors);return;}onChange({...config,questions:config.questions.some(x=>x.id===q.id)?config.questions.map(x=>x.id===q.id?q:x):[...config.questions,q]});setEditing(null);setErrors([]);notify('Pregunta guardada en el banco.');};
  const importBank=async(file?:File)=>{
    if(!file)return;
    try{
      if(file.size>12*1024*1024)throw new Error('El archivo supera el máximo de 12 MB.');
      const value=JSON.parse((await file.text()).replace(/^\uFEFF/,''));
      const questions=Array.isArray(value)?value:value.questions;
      const errors=validateQuestions(questions);if(errors.length){setErrors(errors);return;}
      confirm('Reemplazar banco de preguntas',`Se cargarán ${questions.length} preguntas y se reemplazará el banco actual. Todas valdrán 100 por acierto, aunque el archivo tenga otros valores. Exporta primero si deseas conservarlo.`,()=>{onChange({...config,questions:normalizeQuestions(questions)});setErrors([]);notify('Banco importado y validado: 100 puntos por acierto para el grupo que responde.');});
    }catch(e){setErrors([e instanceof Error?e.message:'El archivo no contiene JSON válido.']);}
    if(input.current)input.current.value='';
  };
  return <section>
    <div className="section-heading"><div><h2>Banco de preguntas</h2><p>Contenido de los equipos organizadores. No son los grupos que compiten.</p></div><Button variant="primary" onClick={()=>{setEditing(newQuestion());setErrors([]);}}><Plus size={18}/>Agregar pregunta</Button></div>
    <div className="info-box">Banco inicial: 4 de estructura, 4 de tiempos, 4 de costos y 8 de recursos. Los equipos 9 y 10 conservan su autoría por separado. Puedes eliminar o agregar preguntas para ajustar el reparto.</div>
    <div className="toolbar wrap">
      <Button onClick={()=>input.current?.click()}><Upload size={16}/>Importar JSON</Button>
      <input ref={input} hidden type="file" accept=".json,application/json" onChange={e=>importBank(e.target.files?.[0])}/>
      <Button onClick={()=>download('banco-planeacion-redes.json',JSON.stringify({version:1,questions:config.questions},null,2))}><Download size={16}/>Exportar banco</Button>
      <Button onClick={()=>download('ejemplo-pregunta.json',JSON.stringify({version:1,questions:[config.questions[0]||{...newQuestion(),text:'Enunciado de ejemplo',options:['a','b','c','d'].map((id,i)=>({id,text:`Opción ${i+1}`})),explanation:'Explicación académica',reference:'Referencia al ejercicio',demo:true}]},null,2))}>Ejemplo JSON</Button>
    </div>
    {errors.length>0&&<div role="alert" className="error-box"><strong>Revisa el contenido</strong><ul>{errors.slice(0,15).map((e,i)=><li key={i}>{e}</li>)}</ul></div>}
    <div className="filters"><label className="search"><Search size={17}/><input placeholder="Buscar enunciado…" aria-label="Buscar pregunta" value={search} onChange={e=>setSearch(e.target.value)}/></label>
      <select aria-label="Filtrar por tema" value={theme} onChange={e=>setTheme(e.target.value)}><option value="">Todos los temas</option>{THEMES.map(t=><option key={t}>{t}</option>)}</select>
      <select aria-label="Filtrar por equipo" value={team} onChange={e=>setTeam(e.target.value)}><option value="">Todos los equipos</option>{[6,7,8,9,10].map(t=><option key={t} value={t}>Equipo {t}</option>)}</select>
      <select aria-label="Filtrar por dificultad" value={difficulty} onChange={e=>setDifficulty(e.target.value)}><option value="">Todas las dificultades</option>{DIFFICULTIES.map(t=><option key={t}>{t}</option>)}</select>
    </div>
    <div className="bank-count">{list.length} de {config.questions.length} preguntas · {config.questions.filter(q=>q.tiebreak).length} reservadas para desempate</div>
    <div className="question-list">{list.map((q,i)=><article key={q.id} className="bank-row">
      <span className="bank-number">{String(i+1).padStart(2,'0')}</span><div className="bank-copy"><div className="row wrap small"><span className="theme-label"><ThemeIcon theme={q.theme} size={14}/>{q.theme}</span><span>Equipo {q.team}</span><span>{q.difficulty} · {q.points} pts</span>{q.demo&&<span className="tag">Demostración</span>}{q.tiebreak&&<span className="tag gold">Desempate</span>}</div><h3>{q.text||'Pregunta sin enunciado'}</h3><span className="small muted">ID: {q.id}</span></div>
      <div className="row bank-actions">
        <Button className="icon-btn" title="Previsualizar como participante" aria-label={`Previsualizar pregunta ${i+1}`} onClick={()=>setPreview(q)}><Eye size={18}/></Button>
        <Button className="icon-btn" title="Editar" aria-label={`Editar pregunta ${i+1}`} onClick={()=>{setEditing(structuredClone(q));setErrors([]);}}><Pencil size={17}/></Button>
        <Button className="icon-btn" title="Duplicar" aria-label={`Duplicar pregunta ${i+1}`} onClick={()=>{setEditing({...structuredClone(q),id:uniqueId()});setErrors([]);}}><Copy size={17}/></Button>
        <Button className="icon-btn" title="Eliminar" aria-label={`Eliminar pregunta ${i+1}`} onClick={()=>confirm('Eliminar pregunta',`¿Eliminar «${q.text}»? Esta acción modifica el banco, no los respaldos exportados.`,()=>onChange({...config,questions:config.questions.filter(x=>x.id!==q.id)}))}><Trash2 size={17}/></Button>
      </div>
    </article>)}</div>
    {!list.length&&<div className="empty"><BookOpen size={36}/><h3>No hay preguntas con estos filtros</h3><p>Cambia los filtros o agrega una pregunta al banco.</p></div>}
    {editing&&<Modal title={config.questions.some(q=>q.id===editing.id)?'Editar pregunta':'Agregar pregunta'} wide onClose={()=>setEditing(null)}>
      <QuestionForm question={editing} setQuestion={setEditing} errors={errors} onSave={()=>update({...editing,points:100})} notify={notify}/>
    </Modal>}
    {preview&&<Modal title="Vista del participante" wide onClose={()=>setPreview(null)}>
      <div className="row wrap"><span className="tag">{preview.demo?'Demostración':'Taller definitivo'}</span><span>{preview.theme} · {preview.points} puntos</span></div>
      <div className="preview-question"><h2>{preview.text}</h2></div>
      {preview.image&&<ImageViewer src={preview.image} alt="Apoyo visual de la pregunta"/>}
      <div className="answers preview">{preview.options.map((o,i)=><div className="answer" key={o.id}><span className="letter">{'ABCD'[i]}</span>{o.text}</div>)}</div>
      <p className="muted small">Previsualización: la solución no se muestra al participante.</p>
    </Modal>}
  </section>;
}
function QuestionForm({question:q,setQuestion,errors,onSave,notify}:{question:Question;setQuestion:(q:Question)=>void;errors:string[];onSave:()=>void;notify:(m:string)=>void}){
  const change=<K extends keyof Question>(key:K,value:Question[K])=>setQuestion({...q,[key]:value});
  return <form onSubmit={e=>{e.preventDefault();onSave();}} className="form-stack">
    {errors.length>0&&<div role="alert" className="error-box">{errors.map((x,i)=><div key={i}>{x}</div>)}</div>}
    <div className="form-grid">
      <label>ID único<input required value={q.id} readOnly/></label>
      <label>Equipo organizador<select value={q.team} onChange={e=>setQuestion({...q,team:+e.target.value,theme:({6:'Estructura',7:'Tiempos',8:'Costos',9:'Recursos',10:'Recursos'} as Record<number,Theme>)[+e.target.value]})}>{[6,7,8,9,10].map(t=><option value={t} key={t}>Equipo {t}</option>)}</select></label>
      <label>Tema<input value={q.theme} readOnly/></label>
      <label>Dificultad<select value={q.difficulty} onChange={e=>{const d=e.target.value as Question['difficulty'];setQuestion({...q,difficulty:d,points:100});}}>{DIFFICULTIES.map(d=><option key={d}>{d}</option>)}</select></label>
      <label>Puntos por acierto<input type="number" value={100} readOnly/><span className="small muted">Fijo para todas las dificultades. Se suma solo al grupo que responde.</span></label>
      <label className="check"><input type="checkbox" checked={q.demo} onChange={e=>change('demo',e.target.checked)}/>Pregunta de demostración</label>
    </div>
    <label>Enunciado<textarea aria-label="Enunciado" rows={3} required value={q.text} onChange={e=>change('text',e.target.value)}/></label>
    <fieldset><legend>Cuatro opciones y una respuesta correcta</legend><div className="form-grid">{q.options.map((o,i)=><label key={o.id}>Opción {'ABCD'[i]} (ID: {o.id})<div className="option-editor"><input aria-label={`Marcar ${'ABCD'[i]} como correcta`} type="radio" name="correct" checked={q.correctId===o.id} onChange={()=>change('correctId',o.id)}/><input aria-label={`Texto opción ${'ABCD'[i]}`} required value={o.text} onChange={e=>change('options',q.options.map(x=>x.id===o.id?{...x,text:e.target.value}:x))}/></div></label>)}</div></fieldset>
    <label>Explicación académica<textarea aria-label="Explicación académica" rows={3} required value={q.explanation} onChange={e=>change('explanation',e.target.value)}/></label>
    <label>Pista (opcional, sin revelar la respuesta)<textarea aria-label="Pista (opcional, sin revelar la respuesta)" rows={2} value={q.hint} onChange={e=>change('hint',e.target.value)}/></label>
    <label>Referencia al ejercicio<input required value={q.reference} onChange={e=>change('reference',e.target.value)}/></label>
    <label>Procedimiento, fórmula o datos adicionales (opcional)<textarea aria-label="Procedimiento, fórmula o datos adicionales (opcional)" rows={3} value={q.extra} onChange={e=>change('extra',e.target.value)}/></label>
    <label className="check"><input type="checkbox" checked={!!q.tiebreak} onChange={e=>change('tiebreak',e.target.checked)}/>Reservar exclusivamente para desempate</label>
    <label className="file-label"><ImagePlus size={19}/> Imagen o diagrama opcional (PNG, JPEG o WebP, máx. 5 MB)<input type="file" accept="image/png,image/jpeg,image/webp" onChange={async e=>{const file=e.target.files?.[0];if(file)try{change('image',await imageFile(file));}catch(err){notify(String(err));}}}/></label>
    {q.image&&<><ImageViewer src={q.image} alt="Imagen de la pregunta"/><Button onClick={()=>change('image','')}>Quitar imagen</Button></>}
    <Button type="submit" variant="primary">Guardar pregunta</Button>
  </form>;
}
