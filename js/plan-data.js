// Public, trusted study content adapted from the approved September 2026 plan.
// IDs are persistence keys: do not rename them when editing wording.
export const WORKBOOK = 'pdfs/planes/cuadernillo-analisis-parcial-2026-10-01.pdf';

const section = (id, subject = 'analisis-matematico-2') => `<a href="seccion.html?subject=${subject}&amp;id=${id}">S${id}</a>`;
const math = (...ids) => ids.map(id => section(id)).join(' · ');
const java = (...ids) => ids.map(id => section(id, 'laboratorio-1')).join(' · ');
const guide = (id, label) => `<a href="#guia-${id}">${label || id}</a>`;
const task = (date, subject, minutes, title, html) => ({ id: `${date}-${subject}`, subject, minutes, title, html });
const day = (date, label, title, breaks, note, tasks, optional = false) => ({ date, label, title, breaks, optional, note, tasks });

export const DAYS = [
  day('2026-09-19', 'Sáb 19', 'Empezar por estudio completo', 20,
    'Hacé Análisis primero. El 17 y el 18 no tienen tareas ni deuda. El tiempo incluye lectura, intento y corrección.', [
      task('2026-09-19', 'math', 90, 'D2 · estudio completo, ejercicio 1', `<ol><li><strong>10 min:</strong> ${math(6, 7)} y mapa de los pasos.</li><li><strong>60 min:</strong> ${guide('D2', 'D2 1, apartados a–g completos')}, desde la página 8 del cuadernillo: dominio, cortes, límites/asíntotas, continuidad, crecimiento, extremos, concavidad, gráfico, extremos restringidos y tangente/normal.</li><li><strong>20 min:</strong> corregir con ${math(13)} y registrar la dificultad principal.</li></ol><p>No leer todas las unidades previas antes de intentar. Consultá <a href="#refuerzo">solo la rama de refuerzo necesaria</a>; si no entra, dejá anotados los apartados pendientes.</p>`),
      task('2026-09-19', 'java', 70, 'A · bases y referencias (J1/J2)', `<ol><li><strong>10 min:</strong> diagnóstico sin apuntes: clase/objeto, primitivo/referencia, if/for y método. Consultar ${java(10, 11, 12, 13, 14)} solo en lo que falle.</li><li><strong>25 min:</strong> reconstruir Motor mínimo y Auto que lo contenga, siguiendo ${java(26)}. Dos instancias, arrancar/detener y consultar estado. No rehacer Rueda y Caja completas.</li><li><strong>20 min:</strong> abrir la PC de ${java(27)}, dibujar dos computadoras compartiendo un disco, predecir una modificación y comprobarla ejecutando. No reescribir todo el proyecto.</li><li><strong>15 min:</strong> ${java(44)}, preguntas 1–2: responder antes de ejecutar y corregir. Registrar un error prioritario.</li></ol><p><strong>Salida mínima:</strong> compila y corre; distinguís un objeto compartido de dos objetos con iguales datos. Si no sale, el rescate del 20 empieza por eso, no por patrones. <a href="#java">Fichas ampliadas J1/J2</a>.</p>`),
    ]),
  day('2026-09-20', 'Dom 20', 'Descanso · rescate opcional', 0,
    'Descanso por defecto. Rescate opcional hasta 3 h: 80 min Java + 80 min Análisis + 20 min de pausas, ajustando el reparto. Terminar/corregir D2 1 y reparar solo la base detectada; en Java, priorizar el programa que no compiló o las referencias. No es deuda obligatoria.', [], true),
  day('2026-09-21', 'Lun 21', 'Contratos e integrales inmediatas', 20,
    'Si la base de D2 sigue roja, reparala y marcá lo pendiente de I0. Si D2 1 quedó incompleto y descansaste el domingo: usar 20 min de Análisis para terminar, hacer solo I0 1a/1d y mover I0 3 al rescate opcional del 27.', [
      task('2026-09-21', 'java', 110, 'B · herencia, contratos y diseño (J2/J3)', `<ol><li><strong>20 min:</strong> ${java(15, 16, 17, 28, 29, 30, 31, 32, 33, 34)}, guiadas por errores del sábado: ES-UN/TIENE-UN, sobrecarga/sobrescritura, tipo declarado/real e instanceof.</li><li><strong>20 min:</strong> ${java(44)}, preguntas 3–4: clasificar «no compila», «falla al ejecutar» o «corre»; corregir justificando.</li><li><strong>20 min:</strong> ${java(35, 36, 37, 38, 39, 40, 41, 42, 43)}: abstracta frente a interfaz, composición e intención de patrones.</li><li><strong>35 min:</strong> práctica propia: Personaje + FormaDeAtacar + dos implementaciones; cambiar estrategia sin recrear el personaje. Compilar y probar.</li><li><strong>15 min:</strong> responder las cuatro preguntas de ${java(45)} seleccionadas en <a href="#java">J3</a>; reconocer Strategy/State y dar ejemplos breves de Template Method/Singleton. No implementar cuatro patrones completos.</li></ol>`),
      task('2026-09-21', 'math', 50, 'I0 · inmediatas y diferencial', `<p>Recuperar el error principal de D2. Leer U3 de forma dirigida y ${math(23)}; enlaces de diferencial e integrales en <a href="#lecturas">Lecturas</a>.</p><p>Resolver ${guide('I0', 'I0 1a, 1d y 3')} (p11) y los diagnósticos propios <a href="#lecturas">DF1/DF2</a>. I0 va antes de I1; al reconstruir una función, determinar las constantes usando las condiciones.</p><p>1e/1g son variantes si sobra tiempo, no deuda automática. Corregir derivando y registrar lo que no entró.</p>`),
    ]),
  day('2026-09-22', 'Mar 22', 'Colecciones y sustitución', 20,
    'Autoevaluación de Colecciones: vence hoy, 22/9, a las 20:00. Si decidís hacerla, revisar condiciones y reemplazar práctica dentro del tope; los 10 min previstos no estiman la duración del intento.', [
      task('2026-09-22', 'java', 110, 'C · colecciones y tipos (J4/J5)', `<ol><li><strong>30 min:</strong> lectura dirigida de los enlaces U7 de <a href="#java">J4/J5</a>: List/Set/Map/Iterator, genéricos y contratos de igualdad/orden. No leer tres PDFs enteros de corrido.</li><li><strong>35 min:</strong> reutilizar Auto para List y Map; Set de marcas. Agregar, buscar, recorrer, quitar y probar repetidos. Crear Balde&lt;T&gt; con llenar/obtener y explicar una asignación rechazada por el compilador.</li><li><strong>20 min:</strong> Libro con identidad por código: implementar/probar equals y hashCode, comparar con == y verificar duplicados en HashSet.</li><li><strong>15 min:</strong> Comparable por código y Comparator por título con desempate por código. Explicar el signo del resultado; casos límite el miércoles.</li><li><strong>10 min:</strong> revisar condiciones de la autoevaluación oficial si querés hacerla; vence <strong>22/9 a las 20:00</strong>. No es su duración estimada.</li></ol><p>Primera vuelta compacta, no dominio garantizado de U7. Si igualdad/orden no entran, retomarlos el miércoles recortando variantes de validadores; no marcarlos terminados.</p>`),
      task('2026-09-22', 'math', 50, 'I1 · sustitución', `<p>Rehacer de memoria la tabla básica antes de empezar. Consultar ${math(14)} y resolver ${guide('I1', 'I1 1a, 1c, 1f y 1g')} (p12), por sustitución.</p><p>Identificar la función interna y su diferencial, ajustar coeficientes y volver a la variable original. Verificar cada primitiva derivando, conservando constante y dominio. Corregir recién después con ${math(18)} y revisar sus erratas.</p>`),
    ]),
  day('2026-09-23', 'Mié 23', 'Excepciones e integración por partes', 20, 'Las variantes se recortan antes que los temas nuevos o la corrección.', [
    task('2026-09-23', 'java', 110, 'D · orden y excepciones (J5/J6)', `<ol><li><strong>15 min:</strong> explicar igualdad frente a orden y rehacer una ordenación de Libro sin mirar. Probar empate, lista vacía y un elemento. Reparar el error principal del martes.</li><li><strong>15 min:</strong> ${java(46, 47, 48, 49)}: throw/throws, checked/unchecked, catch y finally.</li><li><strong>60 min:</strong> validadores de texto, rango y alfanumérico de <a href="#java">J6</a>, con excepciones descriptivas. Probar válido, vacío, null, bordes y fuera de rango. Si queda pendiente U7, recortar la tercera variante, no toda la práctica de excepciones.</li><li><strong>20 min:</strong> corregir y ejecutar de nuevo; explicar qué se lanza, quién lo captura y por qué. No pegar el código ilustrativo erróneo de ${java(49)}.</li></ol>`),
    task('2026-09-23', 'math', 50, 'I1 · integración por partes', `<p>Leer ${math(15)}. Resolver ${guide('I1', 'I1 2a, 2c y 2f')} (p12), por partes. Escribir explícitamente <strong>U, dU, dV, V</strong> y explicar la elección.</p><p>Verificar cada primitiva derivando; atender a signos y coeficientes antes de comparar con ${math(18)}. Registrar la primera línea incorrecta y reservar un intento posterior sin ayuda.</p>`),
  ]),
  day('2026-09-24', 'Jue 24', 'Simulacro Java y fracciones simples', 20, 'No empezar una aplicación grande. Si solo hay 2 h, conservar J7 completo y mover fracciones simples al 25, reemplazando 3e/4d.', [
    task('2026-09-24', 'java', 120, 'E · simulacro propio (J7 completo)', `<ol><li><strong>20 min:</strong> logística: revisar en Blackboard las actividades previas, Respondus/LockDown Browser, normas y segunda cámara; confirmar horario del 25 y entorno permitido. Una instalación puede necesitar más tiempo: esta es una revisión preventiva, no una promesa de completarla en 20 min.</li><li><strong>70 min sin apuntes ni IA:</strong> 15 min para ${java(44)}, preguntas 1–4, clasificando y justificando antes del IDE; 15 min para dos preguntas de ${java(45)}; 40 min para un catálogo propio con Map por código, búsqueda, excepción por título inválido y listado por título. Al menos tres libros, explicar duplicados y probar un dato inválido.</li><li><strong>30 min:</strong> compilar, ejecutar pruebas, corregir y registrar errores. Programa ejecutable, modelo coherente y decisiones explicables. Objetivo propio: 80% sin ayuda; no es nota oficial ni garantía.</li></ol><p><a href="#java">J7 ampliado</a>. No comprimir esta sesión para terminar proyectos pendientes.</p>`),
    task('2026-09-24', 'math', 40, 'I1 · fracciones simples', `<p>Consultar ${math(16)} y resolver ${guide('I1', 'I1 3a y 3c')} (p12). Plantear la descomposición según los factores del denominador, incluidos los repetidos cuando corresponda.</p><p>Repetir una sustitución o una integración por partes que haya fallado. Corregir y verificar derivando; no sumar variantes fuera del bloque.</p>`),
  ]),
  day('2026-09-25', 'Vie 25', 'Parcial de Laboratorio I', 10, 'Horario de Laboratorio a confirmar. Jornada liviana, sin contar el examen. Si terminás agotado, descansar: las tres cuentas de Análisis pasan al inicio del sábado reemplazando ID 7e/8.', [
    task('2026-09-25', 'java', 20, 'Repaso liviano antes del parcial', `<p><strong>20 min máximo</strong> antes de rendir: explicar cinco conceptos y repasar errores. Por ejemplo, referencia compartida, sobrescritura, igualdad/orden, colección adecuada y recorrido de una excepción.</p><p>No resolver un TP nuevo. Confirmar el horario y seguir la logística de la cátedra; el tiempo del examen no está incluido en este plan de estudio.</p>`),
    task('2026-09-25', 'math', 70, 'Cerrar métodos y empezar definidas', `<p>Solo en un momento tranquilo compatible con el examen: ${guide('I1', 'I1 3e y 4d')} y ${guide('ID', 'ID 1d')}. Consultas: ${math(16, 19)}.</p><p>Elegir método, justificarlo y comprobar el resultado. Si llegan fracciones simples del jueves, reemplazan 3e/4d, no se agregan. Si hay agotamiento, mover estas tres al sábado en lugar de sus variantes 7e/8.</p>`),
  ]),
  day('2026-09-26', 'Sáb 26', 'Definidas, propiedades y áreas', 20, 'Segundo sábado recomendado. Los pendientes del 25 reemplazan ID 7e/8; esos dos quedan para recuperación, no se suman.', [
    task('2026-09-26', 'math', 160, 'ID · cálculo, dibujos y áreas', `<p>Leer dirigido ${math(19, 20)}. Resolver ${guide('ID', 'ID 1a, 1c, 1f, 2, 4, 5b, 5c, 5d, 6, 7e, 7f y 8')} (pp14–16).</p><p>Orden: primero cálculo y propiedades, luego dibujos y áreas. Usar las figuras originales de ${math(21)} para 5 y 6. Dibujar recinto, intersecciones y cada corte; distinguir integral con signo de área no negativa. Corregir al final con ${math(22)}.</p><p>Si integración sigue roja, el rescate opcional del 27 empieza por I0 y un caso de cada método, antes de volver a definidas.</p>`),
  ]),
  day('2026-09-27', 'Dom 27', 'Descanso · recuperación opcional', 0, 'Descanso por defecto. Rescate opcional de hasta 3 h totales, con pausas: errores de I0/I1/ID y luego complementos. Si integración sigue roja: I0 → una sustitución → una por partes → una fracción simple; después definidas. Si ya dominás los métodos, A1–A5 (p20) son extras de áreas; no desplazan impropias ni dos variables.', [], true),
  day('2026-09-28', 'Lun 28', 'Impropias y control de bases', 20, 'En el control de bases elegí una sola rama, no ambas. Conservar la corrección si una impropia lleva más de lo previsto.', [
    task('2026-09-28', 'math', 160, 'IM completo + una rama de control', `<ol><li><strong>20 min:</strong> ${math(30, 31)}.</li><li><strong>85 min:</strong> ${guide('IM', 'IM completo: 1a–g, 2a–b y 3a')} (p17). Localizar puntos problemáticos, incluidos los interiores, clasificar, separar y decidir convergencia usando límites.</li><li><strong>35 min:</strong> si fallan límites, ${guide('P0', 'P0 2 y 1k')}; si están verdes, ${guide('D2', 'D2 5c')} y ${guide('D1', 'D1 6')} de optimización. No hacer las dos ramas.</li><li><strong>20 min:</strong> corrección con ${math(33)} y registro. No compensar divergencias ni tratar infinito como número en Barrow.</li></ol>`),
  ]),
  day('2026-09-29', 'Mar 29', 'Dominios y curvas de nivel', 20, 'En V2 2a usar el gráfico original de S37 o del PDF, no solo su descripción. U7 no incluye derivadas parciales de U9.', [
    task('2026-09-29', 'math', 160, 'V2 · dominio analítico y gráfico', `<ol><li><strong>25 min:</strong> ${math(34, 35, 36)}.</li><li><strong>110 min:</strong> ${guide('V2', 'V2 1a, 1b, 1d, 1e, 1f, 1g, 1j, 2a, 3a, 3b, 3e y 4a')} (pp18–19). Cruzar todas las restricciones, dibujar fronteras incluidas/excluidas. En 3, tres curvas por función; en 4a, tres puntos de la curva k = 1.</li><li><strong>25 min:</strong> corregir con ${math(38)}, atendiendo la desigualdad errónea de V2 1g indicada en <a href="#erratas">Erratas</a>. Mirar las figuras originales de ${math(37)}.</li></ol>`),
  ]),
  day('2026-09-30', 'Mié 30', 'Simulacro de Análisis', 20, 'Las pausas van después de los 120 min continuos. Preparar hojas y método de PDF; no convertir la tarde en una maratón.', [
    task('2026-09-30', 'math', 160, 'Simulacro 120 min + corrección 40 min', `<p><strong>120 min continuos</strong>, sin apuntes, soluciones ni IA: ${guide('P0', 'P0 1m')}, ${guide('D2', 'D2 2b')}, ${guide('I1', 'I1 2b')}, ${guide('ID', 'ID 7a')}, ${guide('IM', 'IM 1g')}, ${guide('V2', 'V2 1h y 3c')}.</p><p><a href="#simulacro">Ver tiempos, puntaje propio y criterios</a>. No es un parcial oficial ni una predicción. Si un apartado se bloquea, dejar planteo y avanzar.</p><p><strong>40 min:</strong> corregir y repetir el error principal. Ensayar un PDF único, legible, completo y ordenado, sin subirlo al parcial real. El objetivo 75/100 es propio y no garantiza una nota.</p>`),
  ]),
  day('2026-10-01', 'Jue 1', 'Parcial de Análisis · 18:45', 0, 'Horarios de Argentina. El repaso se cuenta aparte de las 28 h 40 min anteriores. Examen supervisado: 120 min; vencimiento 21:00 no extiende el temporizador. Luego PDF único: 15 min, vencimiento 21:15, según plataforma.', [
    task('2026-10-01', 'math', 40, 'Repaso breve, ningún tema nuevo', `<p><strong>40 min máximo</strong>, lejos del inicio: repasar condiciones, decisiones de método y dos errores del registro. Ningún tema nuevo ni variantes difíciles.</p><p>Prepararse con anticipación para <strong>18:45</strong>. Comprobar supervisión, segunda cámara y flujo de entrega de un PDF único siguiendo Blackboard. Revisar <a href="#pendientes">logística y confirmaciones</a>; no confundir vencimiento con tiempo disponible.</p>`),
  ]),
];

const item = (guideId, id, label, detail) => ({ id: `${guideId}-${id}`, label, detail });
const letters = (guideId, exercise, sequence, detail) => [...sequence].map(letter => item(guideId, `${exercise}${letter}`, `${exercise}${letter}`, detail));

export const GUIDES = [
  { id: 'D2', title: 'Estudio completo de funciones', count: 16, page: 8, section: 8, readings: [6, 7], solution: 13,
    description: 'Ruta principal · pp8–10. Empezar por 1 el 19; 5c en la rama de optimización del 28 y 2b en el simulacro. 1 a–g cuenta como un ítem, 4 a–c como un problema gráfico y 6 a–b como un problema: no todos requieren el mismo esfuerzo.',
    items: [item('D2', '1', '1 · apartados a–g', 'Completar dominio, asíntotas, continuidad, crecimiento, concavidad, gráfico, extremos restringidos y tangente/normal; corregir todos los apartados.'),
      ...letters('D2', 2, 'abcdefgh', 'Estudio completo y gráfico: no solo cálculo de derivadas.'),
      item('D2', '3', '3 · gráfico de f′', 'Completar todas las afirmaciones sobre el gráfico de la derivada.'),
      item('D2', '4', '4 · apartados a–c', 'Dar intervalos que cumplan las tres condiciones; completar a, b y c antes de marcar.'),
      ...letters('D2', 5, 'abc', 'Problema de extremos restringidos: evaluar también los extremos del intervalo.'),
      item('D2', '6', '6 · apartados a–b', 'Resolver extremos libres y restringidos de la misma función.'),
      item('D2', '7', '7 · edad y reacción', 'Edad y tiempo de reacción; evaluar también los extremos del intervalo.')],
  },
  { id: 'I0', title: 'Inmediatas y descomposición', count: 11, page: 11, section: 62, readings: [23], solution: null,
    description: 'Ruta principal · p11. Selección el 21, variantes en rescate del 27. I0 va antes de I1. Teoría de diferencial/integrales y resolución U3 en los enlaces de Lecturas; al reconstruir funciones hay que determinar constantes.',
    items: [...letters('I0', 1, 'abcdefgh', 'Integral inmediata: reescribir raíces como potencias y expandir lo necesario. Verificar derivando.'),
      item('I0', '2', '2 · f″ y dos puntos', 'Reconstruir f desde f″ y dos puntos; determinar constantes.'),
      item('I0', '3', '3 · f″ y tangente', 'Reconstruir f usando f″ y la recta tangente; determinar constantes.'),
      item('I0', '4', '4 · f″ y máximo', 'Reconstruir f desde f″ y el dato de un máximo; usar todas las condiciones.')],
  },
  { id: 'I1', title: 'Métodos de integración', count: 25, page: 12, section: 17, readings: [23, 14, 15, 16], solution: 18,
    description: 'Ruta principal · pp12–13. Sustitución el 22; partes el 23; fracciones simples 24–25; elección de método desde el 25. 1f, 2f y 3c figuran como entrega obligatoria histórica: practicar no significa reenviar ni confirma un vencimiento actual. Corregir atendiendo las erratas.',
    items: [...letters('I1', 1, 'abcdefg', 'Resolver por sustitución, volver a la variable original y verificar derivando.'),
      ...letters('I1', 2, 'abcdefg', 'Resolver por partes: escribir U, dU, dV, V; verificar derivando.'),
      ...letters('I1', 3, 'abcdefg', 'Resolver por fracciones simples; atender factores repetidos y verificar derivando.'),
      ...letters('I1', 4, 'abcd', 'Elegir y justificar el método sin recibirlo de antemano; verificar derivando.')],
  },
  { id: 'ID', title: 'Integrales definidas y áreas', count: 23, page: 14, section: 21, readings: [19, 20], solution: 22,
    description: 'Ruta principal · pp14–16. 1d el 25, núcleo el 26 y 7a reservado para el simulacro. Usar dibujos originales en 5/6. En 7b/7c explicitar la interpretación de los bordes respecto del eje x usada en el material.',
    items: [...letters('ID', 1, 'abcdef', 'Calcular la integral definida, justificando el método y la evaluación.'),
      ...['2', '3', '4'].map(id => item('ID', id, id, 'Resolver el problema usando y justificando propiedades de integrales definidas.')),
      ...letters('ID', 5, 'abcd', 'Plantear y calcular la región sombreada usando el dibujo original de S21 o el PDF.'),
      item('ID', '6', '6 · elegir integral de área', 'Elegir y justificar la integral del área entre x⁵ y x; usar el gráfico original.'),
      ...letters('ID', 7, 'abcdefg', 'Dibujar bordes, hallar intersecciones y calcular el área, explicitando cada corte.'),
      item('ID', '8', '8 · parámetro k', 'Determinar k a partir del área dada.'),
      item('ID', '9', '9 · corredor', 'Calcular la distancia del corredor en los dos tiempos solicitados.')],
  },
  { id: 'IM', title: 'Integrales impropias', count: 10, page: 17, section: 32, readings: [30, 31], solution: 33,
    description: 'Ruta principal · p17. Completa el 28. Localizar todos los puntos problemáticos, incluidos los interiores. No compensar divergencias ni usar infinito como número en Barrow. 1g vuelve en el simulacro.',
    items: [...letters('IM', 1, 'abcdefg', 'Clasificar, escribir cada límite necesario y decidir convergencia.'),
      ...letters('IM', 2, 'ab', 'Explicar por qué el cálculo presentado es incorrecto.'),
      item('IM', '3a', '3a · verdadero/falso', 'Decidir verdadero o falso y justificar.')],
  },
  { id: 'V2', title: 'Dominios y curvas de nivel', count: 19, page: 18, section: 37, readings: [34, 35, 36], solution: 38,
    description: 'Ruta principal · pp18–19. Núcleo el 29; 1h y 3c en simulacro. 1e/1f aparecen como obligatorios históricos. Cada función de 3 requiere tres curvas, no una. Mirar figuras originales de 2 y errata de la resolución 1g.',
    items: [...letters('V2', 1, 'abcdefghij', 'Obtener el dominio analítico y dibujarlo, cruzando todas las restricciones y precisando fronteras.'),
      ...letters('V2', 2, 'ab', 'Proponer una función para la región dibujada; consultar obligatoriamente la figura original.'),
      ...letters('V2', 3, 'abcde', 'Dibujar tres curvas de nivel de esta función.'),
      ...letters('V2', 4, 'ab', 'Encontrar tres puntos de la curva de nivel k = 1.')],
  },
  { id: 'P0', title: 'L’Hôpital · banco de refuerzo', count: 24, page: 2, section: 11, readings: [10], solution: null,
    description: 'Refuerzo, no requisito previo a D2 · pp2–4. Usar solo si fallan límites/asíntotas o en el control del 28. 1m en simulacro. No hay resolución local completa separada: verificar hipótesis y resultado; pedir corrección con el desarrollo si hay dudas. Lo no trabajado sigue pendiente.',
    items: [...letters('P0', 1, 'abcdefg', 'Calcular el límite comprobando primero si se cumplen las hipótesis de L’Hôpital.'),
      ...letters('P0', 1, 'hij', 'Producto o diferencia indeterminada: transformar antes de aplicar la regla.'),
      ...letters('P0', 1, 'klm', 'Potencia indeterminada: trabajar con logaritmos y recuperar el límite original.'),
      ...letters('P0', 1, 'nopqr', 'Límite restante: atender dominio y función por tramos cuando corresponda.'),
      item('P0', '2', '2 · detectar error', 'Encontrar y explicar el uso incorrecto de L’Hôpital.'),
      item('P0', '3', '3 · parámetros a y b', 'Determinar a y b usando las condiciones del enunciado.'),
      item('P0', '4', '4 · parámetro n', 'Determinar n justificando el límite.'),
      item('P0', '5', '5 · información sobre f y f′', 'Calcular el límite usando la información dada sobre f y f′.'),
      item('P0', '6', '6 · x = 5', 'Estudiar continuidad y derivabilidad en x = 5.'),
      item('P0', '7', '7 · dominio y asíntotas', 'Hallar dominio y asíntotas justificando los límites.')],
  },
  { id: 'D1', title: 'Extremos y concavidad · refuerzo', count: 20, page: 5, section: 5, readings: [1, 2, 3, 4], solution: 12,
    description: 'Refuerzo selectivo desde D2, no una jornada inicial de derivadas · pp5–7. Tanque (6) en la rama de optimización del 28 si límites están verdes. Saber derivar no equivale a dominar optimización. Revisar erratas de 1d y 1g.',
    items: [...letters('D1', 1, 'abcdefgh', 'Estudiar crecimiento y extremos de la función; justificar con signos de f′.'),
      item('D1', '2', '2 · función racional', 'Hallar dominio, intersecciones con ejes y extremos.'),
      item('D1', '3', '3 · parámetro y extremo', 'Determinar el parámetro y clasificar el tipo de extremo.'),
      item('D1', '4', '4 · gimnasio', 'Resolver y traducir el resultado al precio de la cuota.'),
      item('D1', '5', '5 · gráfico de f′', 'Interpretar el gráfico original de la derivada, no de f.'),
      item('D1', '6', '6 · tanque', 'Plantear restricción de volumen y función de costo antes de optimizar.'),
      ...letters('D1', 7, 'abcdef', 'Estudiar concavidad e inflexión justificando con signos de f″.'),
      item('D1', '8', '8 · segunda lectura gráfica', 'Interpretar el gráfico de f′ y deducir la concavidad de f.')],
  },
  { id: 'A', title: 'Cinco extras de áreas', count: 5, page: 20, section: 20, readings: [19, 20], solution: null,
    description: 'Extras · p20. S20 los llama ejercicios de final: no son un modelo confirmado del parcial. Reservar para el 27 si vas bien o reemplazar un área ya dominada. No desplazan impropias ni dos variables.',
    items: [item('A', '1', 'A1 · recta y parábola', 'Región entre y = x e y = x².'),
      item('A', '2', 'A2 · parábola y eje x', 'Área de y = x² − 6x + 8 respecto del eje x en [0, 6].'),
      item('A', '3', 'A3 · exponencial y eje x', 'Área de y = x·eˣ respecto del eje x en [−1, 2].'),
      item('A', '4', 'A4 · triángulo', 'Triángulo delimitado por y = 2x, y = x e y = 4−x.'),
      item('A', '5', 'A5 · franjas horizontales', 'Región de y = ln x, y = −1, y = 1 y x = 0; probar franjas horizontales.')],
  },
];
