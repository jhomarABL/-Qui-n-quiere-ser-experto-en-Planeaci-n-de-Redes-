import {test} from 'node:test';
import assert from 'node:assert/strict';
import {defaultConfig} from '../src/data';
import {startGame,reducer,currentQuestion,currentAttempt,planQuestions,leaders,tick,fairness,ranking,rankPosition} from '../src/engine';
import {remaining,formatTime} from '../src/timers';
import {validateConfig,validateQuestions,normalizeQuestions} from '../src/validation';
import {fixedGame} from '../src/scoring';
import {uniqueId} from '../src/ids';
const T=2000000000000;
const create=(rebound=false)=>{const c=defaultConfig();c.rebound=rebound;return startGame(c,T);};
test('Los identificadores locales funcionan sin crypto.randomUUID y son distintos',()=>{
  const ids=Array.from({length:1000},()=>uniqueId({}));assert.equal(new Set(ids).size,1000);assert.ok(ids.every(id=>id.startsWith('local-')));
});
test('Configuración: 20 preguntas, autores separados, cinco grupos y temporizador solo al iniciar',()=>{
  const c=defaultConfig();assert.equal(c.minutes,60);assert.equal(c.questions.length,20);
  assert.deepEqual([6,7,8,9,10].map(t=>c.questions.filter(q=>q.team===t).length),[4,4,4,4,4]);
  assert.equal(validateConfig(c).length,0);
  const g=create();assert.equal(g.clock.running,true);assert.equal(remaining(g.clock,T),3600000);assert.equal(g.questionClock.running,false);
});
test('Plan temático mantiene turnos rotativos, cuatro preguntas por grupo y equilibra máximos',()=>{
  const plan=planQuestions(defaultConfig());assert.deepEqual(['g1','g2','g3','g4','g5'].map(id=>plan.assignments.filter(x=>x===id).length),[4,4,4,4,4]);
  assert.deepEqual(plan.totals,[400,400,400,400,400]);assert.deepEqual(plan.questions.map(x=>x.theme),[...Array(4).fill('Estructura'),...Array(4).fill('Tiempos'),...Array(4).fill('Costos'),...Array(8).fill('Recursos')]);
});
test('No se responde ni confirma antes de comenzar, ni confirma sin selección',()=>{
  let g=create();assert.equal(reducer(g,{type:'SELECT',id:'a',now:T}),g);g=reducer(g,{type:'BEGIN',now:T});assert.equal(reducer(g,{type:'CONFIRM',now:T}),g);
});
test('Solo una cuenta regresiva; pausa y reanudación conservan tiempo',()=>{
  let g=reducer(create(),{type:'BEGIN',now:T+5000});const deadline=g.clock.deadline;
  assert.equal(reducer(g,{type:'BEGIN',now:T+6000}),g);
  g=reducer(g,{type:'PAUSE',now:T+15000});assert.equal(remaining(g.clock,T+90000),3585000);assert.equal(remaining(g.questionClock,T+90000),80000);
  g=reducer(g,{type:'PAUSE',now:T+90000});assert.equal(remaining(g.clock,T+90000),3585000);assert.notEqual(g.clock.deadline,deadline);assert.equal(remaining(g.questionClock,T+95000),75000);
});
test('Confirmar bloquea y revelar asigna puntos una sola vez; siguiente no reinicia general',()=>{
  let g=reducer(create(),{type:'BEGIN',now:T});g=reducer(g,{type:'SELECT',id:currentQuestion(g).correctId,now:T});
  g=reducer(g,{type:'CONFIRM',now:T});assert.equal(g.scores.g1,0);assert.equal(g.results.length,0);
  assert.equal(reducer(g,{type:'SELECT',id:'b',now:T}),g);
  const deadline=g.clock.deadline;
  g=reducer(g,{type:'REVEAL',now:T+1000});const points=g.scores.g1;assert.ok(points>0);
  assert.equal(reducer(g,{type:'REVEAL',now:T+1001}),g);assert.equal(g.scores.g1,points);assert.equal(g.results.length,1);
  g=reducer(g,{type:'NEXT',now:T+2000});assert.equal(g.index,1);assert.equal(g.clock.deadline,deadline);assert.equal(currentAttempt(g).groupId,'g2');assert.equal(g.questionClock.running,false);
});
test('No avanzar sin resolver; anulación explícita sin puntos',()=>{
  let g=create();assert.equal(reducer(g,{type:'NEXT',now:T}),g);
  assert.equal(reducer(g,{type:'VOID',reason:'',now:T}),g);
  g=reducer(g,{type:'VOID',reason:'Dato incompleto',now:T});assert.equal(g.phase,'revelada');assert.equal(g.results[0].voided,true);assert.equal(g.scores.g1,0);
});
test('50:50 conserva correcta en múltiples activaciones y no consume doble clic',()=>{
  for(let i=0;i<80;i++){let g=reducer(create(),{type:'BEGIN',now:T});g=reducer(g,{type:'HELP',helper:'mitad',now:T});assert.equal(g.hidden.length,2);assert.ok(!g.hidden.includes(currentQuestion(g).correctId));assert.equal(g.inventories.g1.mitad,0);assert.equal(g.inventories.g2.mitad,1);assert.equal(reducer(g,{type:'HELP',helper:'mitad',now:T}),g);}
});
test('Con varios usos configurados, un comodín no se consume dos veces por pregunta',()=>{
  const c=defaultConfig();c.helperCount=3;let g=reducer(startGame(c,T),{type:'BEGIN',now:T});
  g=reducer(g,{type:'HELP',helper:'pista',now:T});g=reducer(g,{type:'CLOSE_CONSULT',now:T});
  assert.equal(g.inventories.g1.pista,2);assert.equal(reducer(g,{type:'HELP',helper:'pista',now:T}),g);
});
test('La pista ausente no consume inventario; no hay comodines después de confirmar',()=>{
  let g=create();g.questions[0].hint='';g=reducer(g,{type:'BEGIN',now:T});assert.equal(reducer(g,{type:'HELP',helper:'pista',now:T}),g);
  g=reducer(g,{type:'SELECT',id:'a',now:T});g=reducer(g,{type:'CONFIRM',now:T});assert.equal(reducer(g,{type:'HELP',helper:'mitad',now:T}),g);
});
test('Consulta usa votos reales, excluye eliminadas y pausa solo reloj de pregunta',()=>{
  let g=reducer(create(),{type:'BEGIN',now:T});g=reducer(g,{type:'HELP',helper:'mitad',now:T+5000});g=reducer(g,{type:'HELP',helper:'salon',now:T+5000});
  assert.equal(g.questionClock.running,false);assert.equal(g.clock.running,true);
  assert.deepEqual(g.consultation?.votes,[0,0,0,0]);g=reducer(g,{type:'VOTES',votes:[1,2,3,4],now:T+6000});
  currentQuestion(g).options.forEach((o,i)=>assert.equal(g.consultation!.votes[i],g.hidden.includes(o.id)?0:i+1));
  g=reducer(g,{type:'CLOSE_CONSULT',now:T+20000});assert.equal(remaining(g.questionClock,T+20000),85000);assert.equal(remaining(g.clock,T+20000),3580000);
});
test('Consulta aliado tiene reloj independiente de 30 segundos y respeta pausa global',()=>{
  let g=reducer(create(),{type:'BEGIN',now:T});g=reducer(g,{type:'HELP',helper:'aliado',now:T});
  assert.equal(remaining(g.consultation!.clock,T),30000);g=reducer(g,{type:'PAUSE',now:T+10000});
  assert.equal(remaining(g.consultation!.clock,T+60000),20000);g=reducer(g,{type:'PAUSE',now:T+60000});
  assert.equal(remaining(g.consultation!.clock,T+65000),15000);assert.equal(g.questionClock.running,false);
});
test('Rebote previo a revelación, otro grupo, una vez y 100 solo al acertante',()=>{
  let g=reducer(create(true),{type:'BEGIN',now:T});const q=currentQuestion(g);
  g=reducer(g,{type:'SELECT',id:q.options.find(o=>o.id!==q.correctId)!.id,now:T});g=reducer(g,{type:'CONFIRM',now:T});
  assert.equal(reducer(g,{type:'BOUNCE',id:'g1',now:T}),g);
  g=reducer(g,{type:'BOUNCE',id:'g2',now:T});assert.equal(g.phase,'rebote');assert.equal(g.results.length,0);
  g=reducer(g,{type:'SELECT',id:q.correctId,now:T});g=reducer(g,{type:'CONFIRM',now:T});assert.equal(reducer(g,{type:'BOUNCE',id:'g3',now:T}),g);
  g=reducer(g,{type:'REVEAL',now:T});assert.equal(g.scores.g1,0);assert.equal(g.scores.g2,100);assert.equal(g.results.filter(x=>x.rebound).length,1);
  assert.equal(reducer(g,{type:'BOUNCE',id:'g3',now:T}),g);
});
test('No concede rebote sobre respuesta correcta',()=>{
  let g=reducer(create(true),{type:'BEGIN',now:T});g=reducer(g,{type:'SELECT',id:currentQuestion(g).correctId,now:T});g=reducer(g,{type:'CONFIRM',now:T});assert.equal(reducer(g,{type:'BOUNCE',id:'g2',now:T}),g);
});
test('Agotamiento de pregunta bloquea sin revelar ni duplicar resultados; admite rebote',()=>{
  let g=reducer(create(true),{type:'BEGIN',now:T});g=reducer(g,{type:'SELECT',id:currentQuestion(g).correctId,now:T});
  g=tick(g,T+90001);assert.equal(g.phase,'confirmada');assert.equal(currentAttempt(g).timedOut,true);assert.equal(currentAttempt(g).selection,null);assert.equal(g.results.length,0);
  assert.equal(tick(g,T+90002),g);g=reducer(g,{type:'BOUNCE',id:'g3',now:T+90003});assert.equal(g.phase,'rebote');
});
test('Tiempo general vence tras recarga, bloquea y ampliación se registra',()=>{
  let g=create();g=JSON.parse(JSON.stringify(g));assert.equal(remaining(g.clock,T+120000),3480000);
  g=tick(g,T+3600001);assert.equal(g.phase,'tiempo');assert.equal(remaining(g.clock,T+3600001),0);
  assert.equal(reducer(g,{type:'BEGIN',now:T+3600002}),g);
  g=reducer(g,{type:'EXTRA',minutes:5,now:T+3600002});assert.equal(g.phase,'preparada');assert.equal(remaining(g.clock,T+3600002),300000);assert.equal(g.history.at(-1)?.type,'ampliacion');
});
test('Guardado pausado mantiene tiempo al recuperar',()=>{
  let g=create();g=reducer(g,{type:'PAUSE',now:T+15000});g=JSON.parse(JSON.stringify(g));g=tick(g,T+999999);assert.equal(g.phase,'pausa');assert.equal(remaining(g.clock,T+999999),3585000);
});
test('Turno manual solo antes de comenzar; rotativo no se puede alterar',()=>{
  let g=create();assert.equal(reducer(g,{type:'GROUP',id:'g3',now:T}),g);
  const c=defaultConfig();c.mode='manual';g=startGame(c,T);g=reducer(g,{type:'GROUP',id:'g3',now:T});assert.equal(currentAttempt(g).groupId,'g3');
  g=reducer(g,{type:'BEGIN',now:T});assert.equal(reducer(g,{type:'GROUP',id:'g4',now:T}),g);
});
test('Correcciones requieren motivo y la finalización advierte desigualdad mediante fairness',()=>{
  let g=create();assert.equal(reducer(g,{type:'CORRECT',groupId:'g1',points:50,reason:'',now:T}),g);
  g=reducer(g,{type:'CORRECT',groupId:'g1',points:50,reason:'Revisión docente',now:T});assert.equal(g.scores.g1,50);assert.equal(g.history.at(-1)?.type,'correccion');
  g=reducer(g,{type:'BEGIN',now:T});g=reducer(g,{type:'SELECT',id:'a',now:T});g=reducer(g,{type:'CONFIRM',now:T});g=reducer(g,{type:'REVEAL',now:T});assert.equal(fairness(g).unequal,true);
});
test('Empate no favorece primer grupo; ganadores compartidos y desempate',()=>{
  let g=reducer(create(),{type:'FINISH',now:T});assert.equal(leaders(g).length,5);
  const shared=reducer(g,{type:'SHARED',now:T});assert.equal(shared.winners?.length,5);
  const q={...g.config.questions[0],id:'tie-1',tiebreak:true};g.config.questions.push(q);
  const answers=Object.fromEntries(g.config.groups.map((x,i)=>[x.id,i===2?q.correctId:q.options.find(o=>o.id!==q.correctId)!.id]));
  g=reducer(g,{type:'TIE',questionId:q.id,answers,now:T});assert.deepEqual(g.winners,['g3']);
});
test('Importación JSON rechaza IDs duplicados, respuestas inválidas, equipos y puntajes',()=>{
  const q=defaultConfig().questions[0];assert.ok(validateQuestions([q,q]).some(e=>e.includes('duplicado')));
  assert.ok(validateQuestions([{...q,correctId:'z'}]).some(e=>e.includes('correcta')));
  assert.ok(validateQuestions([{...q,options:q.options.slice(0,3)}]).some(e=>e.includes('cuatro')));
  assert.ok(validateQuestions([{...q,team:1}]).some(e=>e.includes('equipo')));
  assert.ok(validateQuestions([{...q,points:'100'}]).some(e=>e.includes('numérico')));
  assert.ok(validateQuestions([{...q,text:''}]).some(e=>e.includes('enunciado')));
  assert.ok(validateQuestions([{...q,image:'javascript:alert(1)'}]).length);
  assert.ok(validateQuestions({questions:[]}).length);
});
test('Formato MM:SS redondea hacia arriba sin valores negativos',()=>{
  assert.equal(formatTime(3600000),'60:00');assert.equal(formatTime(1),'00:01');assert.equal(formatTime(-1),'00:00');
});
test('La primera pintura no puede superar la duración configurada con un now ligeramente anterior',()=>{
  const g=create();assert.equal(formatTime(remaining(g.clock,T-150)),'60:00');
});
test('Ampliar tiempo después de vencer durante consulta restaura reloj de pregunta al cerrar',()=>{
  const c=defaultConfig();c.minutes=1;let g=reducer(startGame(c,T),{type:'BEGIN',now:T});
  g=reducer(g,{type:'HELP',helper:'aliado',now:T+1000});g=tick(g,T+60001);
  assert.equal(g.phase,'tiempo');g=reducer(g,{type:'CLOSE_CONSULT',now:T+60002});g=reducer(g,{type:'EXTRA',minutes:5,now:T+60003});
  assert.equal(g.questionClock.running,true);assert.equal(remaining(g.questionClock,T+60003),89000);
});
test('El ganador del desempate ocupa el primer puesto sin alterar puntos',()=>{
  let g=reducer(create(),{type:'FINISH',now:T});const q={...g.config.questions[0],id:'tie-rank',tiebreak:true};g.config.questions.push(q);
  const answers=Object.fromEntries(g.config.groups.map((x,i)=>[x.id,i===4?q.correctId:q.options.find(o=>o.id!==q.correctId)!.id]));
  g=reducer(g,{type:'TIE',questionId:q.id,answers,now:T});assert.equal(ranking(g)[0].id,'g5');assert.equal(rankPosition(g,'g5'),1);assert.equal(rankPosition(g,'g1'),2);assert.equal(g.scores.g5,0);
});
test('Acumula 100 individualmente por grupo y los fallos no modifican otros marcadores',()=>{
  let g=create();
  for(let i=0;i<6;i++){
    const q=currentQuestion(g);
    g=reducer(g,{type:'BEGIN',now:T});
    g=reducer(g,{type:'SELECT',id:i===0||i===1||i===5?q.correctId:q.options.find(o=>o.id!==q.correctId)!.id,now:T});
    g=reducer(g,{type:'CONFIRM',now:T});
    const before={...g.scores};assert.equal(g.results.length,i);
    g=reducer(g,{type:'REVEAL',now:T});
    if(i===0)assert.deepEqual(g.scores,{g1:100,g2:0,g3:0,g4:0,g5:0});
    if(i===1)assert.deepEqual(g.scores,{g1:100,g2:100,g3:0,g4:0,g5:0});
    if(i>=2&&i<=4)assert.deepEqual(g.scores,before);
    assert.equal(reducer(g,{type:'REVEAL',now:T}),g);
    if(i<5)g=reducer(g,{type:'NEXT',now:T});
  }
  assert.deepEqual(g.scores,{g1:200,g2:100,g3:0,g4:0,g5:0});
});
test('Veinte aciertos suman cuatrocientos por grupo, nunca un total compartido',()=>{
  let g=create();
  for(let i=0;i<20;i++){
    g=reducer(g,{type:'BEGIN',now:T});g=reducer(g,{type:'SELECT',id:currentQuestion(g).correctId,now:T});
    g=reducer(g,{type:'CONFIRM',now:T});g=reducer(g,{type:'REVEAL',now:T});
    if(i<19)g=reducer(g,{type:'NEXT',now:T});
  }
  assert.deepEqual(g.scores,{g1:400,g2:400,g3:400,g4:400,g5:400});
  assert.ok(g.results.every(r=>r.points===100));
});
test('Valores antiguos o editados no pueden alterar los cien puntos por acierto',()=>{
  const c=defaultConfig();c.questions=c.questions.map(q=>({...q,points:999}));c.values={'Fácil':500,Media:800,'Difícil':900};
  let g=startGame(c,T);assert.ok(g.questions.every(q=>q.points===100));
  g=reducer(g,{type:'BEGIN',now:T});g.questions[0].points=999;
  g=reducer(g,{type:'SELECT',id:currentQuestion(g).correctId,now:T});g=reducer(g,{type:'CONFIRM',now:T});g=reducer(g,{type:'REVEAL',now:T});
  assert.equal(g.scores.g1,100);assert.equal(g.scores.g2,0);
});
test('La recuperación adapta puntos antiguos sin perder ajustes ni registros originales',()=>{
  let g=create();g=reducer(g,{type:'BEGIN',now:T});g=reducer(g,{type:'SELECT',id:currentQuestion(g).correctId,now:T});g=reducer(g,{type:'CONFIRM',now:T});g=reducer(g,{type:'REVEAL',now:T});
  delete g.scoringRule;g.results[0].points=300;g.scores.g1=325;g.questions[0].points=300;
  const updated=fixedGame(g,T);assert.equal(updated.scores.g1,125);assert.equal(updated.scores.g2,0);assert.equal(updated.results[0].points,100);
  assert.equal(updated.scoringBeforeUpdate?.scores.g1,325);assert.equal(updated.scoringBeforeUpdate?.results[0].points,300);
  assert.equal(updated.history.at(-1)?.type,'regla_puntuacion');assert.equal(fixedGame(updated,T),updated);assert.equal(g.scores.g1,325);
});
test('Preguntas importadas conservan dificultad pero normalizan el valor a cien',()=>{
  const questions=defaultConfig().questions.map(q=>({...q,points:300}));
  const normalized=normalizeQuestions(questions);assert.ok(normalized.every(q=>q.points===100));assert.equal(normalized[3].difficulty,'Difícil');
});
