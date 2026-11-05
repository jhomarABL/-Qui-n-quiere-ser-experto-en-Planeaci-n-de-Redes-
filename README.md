# ¿Quién quiere ser experto en Planeación de Redes?

Taller interactivo de estructura, tiempos, costos y recursos para cinco grupos participantes. Inspiración de concurso televisivo con identidad propia, puntos ficticios y audio sintetizado original.

## Inicio rápido

Requisitos de desarrollo: Node.js 20 o posterior y npm.

```bash
npm ci
npm run dev
```

Abre la dirección que muestra Vite, normalmente `http://localhost:5173`.

Para compilar y ejecutar la versión de producción:

```bash
npm run build
npm run preview
```

La carpeta `dist/` incluida ya contiene una versión compilada. Puedes servirla con cualquier servidor de archivos estáticos. No abras `index.html` con doble clic: los módulos JavaScript necesitan un servidor HTTP local.

```bash
npx serve dist
```

La instalación de dependencias necesita acceso a npm una primera vez. La aplicación compilada no consulta servicios externos: React, íconos y tipografía se incluyen localmente. No requiere backend, cuentas, claves API ni servicios pagos.

## Guía de uso

- **Cargar el ejercicio:** entra a Configurar taller → Ejercicio base. Escribe la descripción del proyecto, agrega filas de actividades y carga un diagrama PNG, JPEG o WebP. Las imágenes se optimizan a un máximo de 1600 px y se guardan como datos locales; el límite de entrada es 5 MB por imagen. Incluye las unidades en duración, costo y recursos.
- **Registrar preguntas:** abre Banco de preguntas. Agrega, edita, duplica, filtra y previsualiza el contenido. Cada pregunta requiere cuatro opciones, una correcta, explicación, referencia, autor y puntaje. La pista y el apoyo visual son opcionales. Los equipos 6, 7 y 8 trabajan estructura, tiempos y costos; los equipos 9 y 10 trabajan recursos por separado.
- **Configurar los cinco grupos:** abre Grupos participantes y personaliza nombre, color e ícono. Estos grupos compiten; no son los equipos autores.
- **Iniciar el taller:** revisa Reglas y tiempos, los puntos máximos planificados y Sonido y ambiente. Presiona Iniciar actividad, revisa el resumen y confirma la demostración si corresponde. Solo el botón final Iniciar actividad pone en marcha el cronómetro general.
- **Dirigir una pregunta:** presenta el material con Ejercicio base. Presiona Comenzar pregunta para habilitar respuestas e iniciar el temporizador individual. El grupo selecciona una opción, puede cambiarla y después confirma. La respuesta queda bloqueada. El presentador revela y luego avanza manualmente.
- **Usar comodines:** se habilitan durante una pregunta activa y antes de confirmar. 50:50 elimina dos incorrectas; Consulta al salón recibe votos reales; Consulta a un aliado abre 30 segundos para hablar presencialmente; Pista muestra el texto registrado. No hay participantes simulados ni llamadas remotas.
- **Conceder rebote:** habilítalo en configuración. Después de un fallo o tiempo agotado, selecciona otro grupo antes de revelar. Solo hay un rebote por pregunta; si acierta, suma 100 únicamente a su propio marcador.
- **Recuperar una partida:** al recargar, usa Continuar partida. Los relojes en marcha descuentan el tiempo transcurrido fuera de la página; los pausados se conservan. También puedes importar un respaldo completo desde el inicio.
- **Exportar resultados:** la premiación permite descargar CSV con clasificación, respuestas e historial, y JSON con el respaldo completo. También puedes exportar JSON durante la actividad desde el panel.

## Guardado local y visores incrustados

La configuración y la partida se guardan automáticamente en localStorage después de las acciones importantes, con manejo de errores. El guardado pertenece al navegador y al origen de la aplicación, no a una cuenta.

Algunos visores incrustados bloquean localStorage y/o la pantalla completa. La aplicación no se cae: muestra un aviso, permite seguir en memoria y exportar JSON. En ese caso, ejecuta la versión local para disponer de almacenamiento persistente en tu navegador. Exporta un respaldo antes de cerrar, cambiar de equipo o usar navegación privada.

El respaldo completo contiene configuración, ejercicio e imágenes, banco, copia inmutable del banco de la partida, relojes, puntajes, inventarios e historial. La importación valida la estructura y no evalúa código. El banco puede importarse por separado como una lista JSON o como un objeto con la propiedad `questions`.

Los ejemplos se encuentran en `examples/banco-demostracion.json` y `examples/ejemplo-pregunta.json`. Los nombres técnicos de las propiedades se conservan en inglés para estabilidad del esquema; toda la interfaz es en español.

## Reglas de reparto

El banco inicial contiene 20 preguntas de demostración, cuatro por equipo autor. Son preguntas conceptuales y ejemplos independientes, no datos del ejercicio real ausente.

Los bloques son estructura (4), tiempos (4), costos (4) y recursos (8). No existe un reparto temático idéntico por grupo. En turnos rotativos se asignan cuatro preguntas a cada grupo y se intenta equilibrar dificultad dentro de cada bloque. Con el banco inicial cada grupo dispone de 400 puntos posibles en sus cuatro turnos principales.

Cada respuesta correcta vale exactamente 100 puntos, independientemente de la dificultad, el orden y si corresponde a un rebote. Se suma exclusivamente al grupo que respondió: dos aciertos son 200 puntos para ese grupo, tres son 300. Los demás marcadores no cambian. Fallar suma 0. No hay un puntaje compartido; el progreso lateral muestra solo al grupo en turno.

Los campos de puntos de preguntas y valores por dificultad se conservan en el formato JSON por compatibilidad, pero se normalizan a 100 al crear, importar o recuperar contenido. Los guardados anteriores se adaptan a esta regla sin borrar intentos, tiempos, inventarios ni ajustes manuales. Se conserva una copia de los puntajes y resultados previos en `scoringBeforeUpdate` y se registra el cambio en el historial.

El modo manual permite elegir el grupo antes de comenzar cada pregunta. Los rebotes se registran por separado. Al finalizar se advierte si las oportunidades principales o los puntos disponibles fueron desiguales. Las anulaciones no cuentan como preguntas respondidas.

## Panel y teclado

El panel ofrece pausa, inicio, revelación, avance, grupo manual, rebote, ajustes justificados, ampliaciones de tiempo, anulación, audio, historial, respaldo, finalización y reinicio confirmado.

| Atajo | Acción |
| --- | --- |
| A, B, C, D | Seleccionar opción |
| Enter | Confirmar una respuesta seleccionada |
| Espacio | Pausar o reanudar |
| N | Siguiente pregunta después de revelar |
| M | Silenciar o reactivar |
| F | Pantalla completa |
| P | Abrir panel del presentador |

Los atajos no se ejecutan mientras se escribe en un campo, mientras hay una ventana abierta o por repetición de tecla. Los controles mantienen navegación nativa con Tab y Enter. Los modales utilizan `dialog` nativo con foco contenido y cierre mediante Escape.

El cronómetro general permanece en el encabezado fijo. Durante una consulta, por defecto se pausa la pregunta pero no el taller. La pausa global detiene ambos y también el reloj del aliado.

## Desempates y premiación

Marca preguntas como Reservar exclusivamente para desempate en el banco. Estas no forman parte de las 20 oportunidades normales.

En una igualdad de puntaje no se favorece al primer grupo. Puedes declarar ganadores compartidos o jugar una pregunta de desempate cargada. Cada grupo fija su respuesta sin mostrar las anteriores; el presentador revela cuando todos responden. Si solo uno acierta, gana. Si varios aciertan, continúan empatados esos grupos; si ninguno acierta, el empate se conserva. Los desempates no suman puntos adicionales y sus decisiones quedan en el historial.

## Arquitectura

```text
src/
  schema.ts        Modelos tipados
  data.ts          Configuración y 20 preguntas de demostración
  validation.ts    Validación del banco y configuración
  engine.ts        Máquina de estados y reglas puras
  timers.ts        Relojes por fechas límite absolutas
  ids.ts           Identificadores locales compatibles con visores restringidos
  scoring.ts       Regla fija de 100 y adaptación de guardados anteriores
  audio.ts         Web Audio API y música sintetizada
  persistence.ts   localStorage, respaldos JSON y CSV
  components.tsx   Controles, modales, avatares e imágenes
  Bank.tsx         CRUD, filtros, vista previa e importación
  Exercise.tsx     Ejercicio base y tabla
  Config.tsx       Configuración del taller
  Game.tsx         Escenario, consultas, panel y premiación
  Guide.tsx        Guía integrada
  App.tsx          Flujo principal, atajos y coordinación
  styles.css       Sistema visual y responsive
tests/
  engine.test.ts   Pruebas de reglas, relojes y validación
```

Stack: React 19, TypeScript, Vite y Lucide React. Se utiliza CSS nativo organizado por componentes en lugar de Tailwind; no se necesita un framework de estilos adicional.

## Pruebas

```bash
npm test
npm run build
```

`QA.md` contiene el inventario de verificación. Las pruebas automatizadas cubren estados, tiempos, turnos, equilibrio, comodines, bloqueos, rebotes, no duplicación, importaciones y empates. También se verificaron los flujos principales en Chromium y tamaños de escritorio/móvil.

## Límites y decisiones de seguridad

- **Sin ventana de proyección separada:** no se implementa la mejora opcional de BroadcastChannel. Si se comparte toda la pantalla, el panel y la configuración también son visibles. No se promete privacidad por un modal.
- **Edición en pausa:** solo se permite entrar al editor desde la partida después de pausar y aceptar la advertencia. Los cambios se aplican a la próxima partida; la actual mantiene su banco y reglas como una copia inmutable para preservar los resultados.
- **Sin ejercicio inventado:** el ejercicio base empieza vacío. Las fórmulas y cifras incluidas en las preguntas de demostración se etiquetan como ejemplos independientes.
- **Uso presencial:** no hay conexión entre celulares, cuentas, votación remota ni aliados generados. La aplicación se controla desde el dispositivo del presentador.
- **Sin privacidad criptográfica de las soluciones:** no se muestran en la vista principal antes de revelar, pero el banco existe en el navegador. No es un sistema de examen supervisado ni una protección frente a inspección del código.
- **Dependencias del dispositivo:** la audibilidad final y la disponibilidad de pantalla completa dependen del navegador, los permisos y el equipo de proyección.
- **Reloj del sistema:** los tiempos se basan en fechas límite absolutas para recuperarse tras cambiar de pestaña o recargar. Como en cualquier aplicación local sin servidor, cambiar manualmente el reloj del dispositivo puede alterar el tiempo calculado.
