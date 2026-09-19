// Trusted static HTML adapted from the approved September 2026 study plan.
// Deliberately excludes local audit paths and private browser-action history.
export const CHAPTERS = [
  {
    id: "empeza",
    title: "Empezá por acá · alcance y carga real",
    html: String.raw`
<p><strong>Del sábado 19 de septiembre al jueves 1 de octubre de 2026</strong> Laboratorio I: <strong>25/9</strong>, fecha informada; horario y formato a confirmar. Análisis Matemático II: <strong>1/10 a las 18:45</strong>, confirmado en Blackboard. Horarios de Argentina.</p>
<p><strong>Ajuste solicitado:</strong> empezás el <strong>sábado 19/9</strong> por <strong>estudio completo de funciones</strong>. El jueves 17 y el viernes 18 quedan <strong>sin estudio y sin tareas pendientes para recuperar</strong>. Límites y derivadas se repasan dentro del estudio completo, únicamente donde aparezcan dificultades; no hay dos jornadas introductorias separadas.</p>
<p><strong>Actualización posterior del 17/9:</strong> el TP U3 quedó incorporado a los apuntes como <strong><a href="seccion.html?subject=analisis-matematico-2&amp;id=62">S62</a></strong>, junto con su PDF y tarjetas de repaso. Además, se incorporaron <strong>7 figuras originales</strong> que faltaban en <a href="seccion.html?subject=analisis-matematico-2&amp;id=21">S21</a> (áreas) y <a href="seccion.html?subject=analisis-matematico-2&amp;id=37">S37</a> (dominios). El TP ya estaba incluido como <strong>I0, p11</strong> del cuadernillo: <strong>no se suman ejercicios ni horas al cronograma</strong>. La teoría y resolución completas de U3 siguen en los enlaces de Blackboard.</p>
<h3>Empezá por acá</h3>
<ol><li>El sábado empezá por <strong>Análisis: <a href="seccion.html?subject=analisis-matematico-2&amp;id=6">S6</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=7">S7</a> y D2 ejercicio 1</strong>, y después hacé el bloque compacto de Java. Desde el lunes hasta el 24 priorizá Java, manteniendo matemática. Desde el 25, el foco pasa a Análisis.</li>
<li>Para matemática, abrí el <strong>cuadernillo de 20 páginas</strong> en <a href="pdfs/planes/cuadernillo-analisis-parcial-2026-10-01.pdf#page=8">abrir cuadernillo</a> <strong>directamente en la página 8 (D2)</strong>. Conserva las ocho guías en el orden original de la materia: <strong>su índice no es el orden de arranque de este plan ajustado</strong>. No necesitás completar las páginas 2–7 antes de empezar.</li>
<li><strong>P0, D1, D2, I0, I1, ID, IM y V2</strong> son los códigos de esas guías. Por ejemplo, <strong>I1 2f</strong> significa guía de métodos de integración, ejercicio 2, inciso f. <strong>S</strong> significa sección de tus apuntes, no unidad de Blackboard.</li>
<li>El tiempo de cada día es un <strong>tope</strong>, no una promesa de que todos los ejercicios te van a salir en ese rato. Incluye lectura, intento, corrección y repaso. Si te trabás, aplicá la regla de recuperación, no extiendas la noche indefinidamente.</li></ol>
<h3>La decisión importante: abarcar todo no es lo mismo que dominar todo</h3>
<p>Se identificaron <strong>148 ítems de trabajo en ocho guías de Análisis</strong>, más cinco ejercicios de áreas de tus apuntes. Un estudio completo con varios apartados cuenta como un solo ítem, de modo que no son 148 cuentas cortitas. Además hay preguntas de autoevaluaciones oficiales que no están incluidas en este inventario.</p>
<p><strong>No sería honesto asegurarte que, estando atrasado, podés resolver y corregir todo eso, practicar Java y consolidarlo con 2–3 horas diarias y los fines de semana libres.</strong> El plan ajustado usa dos sábados, deja libres los domingos y trabaja una selección representativa, incluyendo el simulacro. P0 y D1 pasan a ser bancos de refuerzo, no requisitos para arrancar. El listado exhaustivo sigue abajo, sin omitir ninguna de las ocho guías.</p>
<p>Como estimación de planificación, no como medición de tu velocidad, las ocho guías completas pueden requerir <strong>28–40 horas con lectura y corrección</strong>, o más si varios temas son nuevos. El cronograma ajustado tiene <strong>28 h 40 min antes del 1/10</strong>: <strong>16 h 30 min de Análisis, 9 h de Java y 3 h 10 min de pausas</strong>, sin contar los exámenes. De Java, <strong>8 h 40 min son antes del 25</strong> y 20 min son el repaso del día del parcial. Dos domingos opcionales de 3 h llevan el total a <strong>34 h 40 min</strong>. El repaso de 40 min del 1/10 se cuenta aparte.</p>
<p>Para respetar el nuevo comienzo, <strong>los siete bloques largos de Java no se suman en cinco días</strong>: se reorganizaron en cinco sesiones compactas, con práctica mínima y corrección. Las fichas ampliadas J1–J7 siguen disponibles como consulta, pero no se suman al cronograma. Recortamos variantes y reescritura de proyectos, no suponemos que ya dominás los temas. Si el diagnóstico sale mal, se activa recuperación o se reconoce el pendiente.</p>
<p><strong>Prioridad de práctica:</strong> primero que puedas resolver y explicar solo un caso de cada tipo. Después completá variantes. Si completar absolutamente todas las guías antes del 1 es innegociable, probablemente haya que flexibilizar también el tope de horas, no solamente usar un sábado. No sacrifiques el simulacro ni el sueño para coleccionar tildes.</p>`,
  },
  {
    id: "cobertura",
    title: "Qué está confirmado y qué falta confirmar",
    html: String.raw`
<div class="plan-table-wrap"><table><thead><tr><th scope="col">Materia</th><th scope="col">Verificado el 17/9</th><th scope="col">Cómo afecta al plan</th></tr></thead><tbody><tr><td>Análisis II</td><td>Los apuntes y PDFs locales representan U0, U1, U2 y U4–U7 por inventario. <strong>U3 sigue incompleta en teoría y resolución</strong>, pero su TP de 11 ítems ya está agregado.</td><td>TP U3 en <strong><a href="seccion.html?subject=analisis-matematico-2&amp;id=62">S62</a></strong>, PDF de la materia y cuadernillo p11. Para diferencial e integrales indefinidas, usar los enlaces a la teoría.</td></tr>
<tr><td>Análisis II</td><td>El parcial figura el <strong>1/10 a las 18:45</strong>, supervisado, <strong>120 minutos</strong>, aprobación con 55 puntos. Vencimiento 21:00. Después hay una instancia para adjuntar <strong>un PDF único</strong>, 15 minutos, vencimiento 21:15.</td><td>Practicar con reloj y preparar el flujo de digitalización. El vencimiento no agrega tiempo al temporizador.</td></tr>
<tr><td>Análisis II</td><td>No hay anuncio que confirme el temario exacto.</td><td><strong>U0–U7 es el alcance preventivo que pediste</strong>, no un programa oficial cerrado. U7 trata dominios y curvas de nivel. Derivadas parciales está en U9, no dentro de U7.</td></tr>
<tr><td>Laboratorio I</td><td>U1–U6 tienen correspondencia temática local. <strong>U7 está liberada y falta localmente</strong>: colecciones, genéricos, igualdad y orden.</td><td>Estudiar U7 desde los enlaces de este plan.</td></tr>
<tr><td>Laboratorio I</td><td>Autoevaluación Colecciones: <strong>22/9, 20:00</strong>. El TP de U7 se indica para el <strong>segundo parcial</strong>, no para el del 25.</td><td>U7 se trabaja el 22 y 23; la autoevaluación vence el 22. Si querés realizar la autoevaluación, hacelo vos antes de ese horario y revisá condiciones. No se confirmó que sea requisito de examen.</td></tr>
<tr><td>Laboratorio I</td><td>La carpeta del parcial y U8 siguen cerradas. No hay anuncios.</td><td>El <strong>25/9 es tu fecha informada</strong>, no se confirmó horario/formato ni tope de unidades. No asumir que U8 está excluida solo por estar cerrada.</td></tr></tbody></table></div>
<p>La comprobación del 17/9 fue de <strong>inventario y cobertura temática</strong>, con lectura de recursos puntuales, no una comparación palabra por palabra de todos los materiales. No equivale a verificar cada pregunta de las autoevaluaciones ni ejercicios nuevos dados oralmente. Sus preguntas no están inventariadas en este plan. Algunos adjuntos no ofrecieron vista previa y no pudieron cotejarse íntegramente: <strong>no se certifica igualdad de todos los PDFs actuales con las copias de los apuntes</strong>. Esta es una fotografía de esa fecha; las condiciones vigentes deben confirmarse en la cátedra.</p>`,
  },
  {
    id: "refuerzo",
    title: "D2 · recuperar bases sin volver a empezar",
    html: String.raw`
<p>En <strong>D2 1</strong> anotá y justificá dominio, cortes, límites/asíntotas, continuidad, signos de f′, extremos, signos de f″, concavidad y gráfico; completá también las consignas de extremos restringidos y tangente/normal. Que te salga una derivada no equivale a haber hecho el estudio.</p>
<ul><li>Si te traban <strong>límites/asíntotas</strong>, consultá <a href="seccion.html?subject=analisis-matematico-2&amp;id=10">S10</a> cuando corresponda L’Hôpital y usá <strong>P0 1a y 2</strong> como refuerzo breve.</li>
<li>Si te traban <strong>crecimiento/extremos</strong>, consultá <a href="seccion.html?subject=analisis-matematico-2&amp;id=1">S1</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=2">S2</a> y usá <strong>D1 1a</strong>.</li>
<li>Si te traban <strong>concavidad/inflexión</strong>, consultá <a href="seccion.html?subject=analisis-matematico-2&amp;id=3">S3</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=4">S4</a> y usá <strong>D1 7a</strong>.</li>
<li>Si te traba la <strong>lectura de f′</strong>, usá <strong>D1 5</strong> con su gráfico original.</li></ul>
<p>Elegí <strong>solo la rama necesaria</strong>, dentro del bloque o del rescate opcional, no todas por obligación. El estudio completo integra las bases, pero no demuestra por sí solo que dominás toda indeterminación de L’Hôpital o todo problema de optimización: el control del 28 y el simulacro mantienen esa comprobación.</p>
<p><strong>Si D2 1 no entra el sábado:</strong> dejá escrito qué apartados faltan. Podés usar el rescate del 20; si mantenés el domingo libre, usá los primeros 20 min de Análisis del lunes y recortá I0 a 1a/1d. El ejercicio I0 3 pasa al rescate del 27. No empieces antes del sábado ni agregues horas nocturnas para compensar los días 17/18.</p>`,
  },
  {
    id: "lecturas",
    title: "Lecturas de Análisis y diagnósticos DF1/DF2",
    html: String.raw`
<p>Los enlaces S llevan a secciones de <strong>Análisis Matemático 2</strong>, no a unidades de Blackboard. No usar la materia Análisis Matemático I para este programa. Las páginas corresponden al cuadernillo combinado, no a los folios originales.</p>
<div class="plan-table-wrap"><table><thead><tr><th scope="col">Código y tema</th><th scope="col">Leer antes</th><th scope="col">Ejercitar</th><th scope="col">Corregir recién después</th></tr></thead><tbody><tr><td>D2, estudio completo</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=6">S6</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=7">S7</a></td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=8">S8</a> / pp8–10</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=13">S13</a>, Resolución TP2</td></tr>
<tr><td>I0, diferencial e inmediatas</td><td><a href="https://palermo.blackboard.com/ultra/courses/_96316_1/file/_5725041_1?courseId=_96316_1">Diferencial, 2 páginas <small>(requiere iniciar sesión)</small></a>, <a href="https://palermo.blackboard.com/ultra/courses/_96316_1/file/_5725042_1?courseId=_96316_1">Integrales indefinidas <small>(requiere iniciar sesión)</small></a> y <a href="seccion.html?subject=analisis-matematico-2&amp;id=23">S23</a></td><td><strong><a href="seccion.html?subject=analisis-matematico-2&amp;id=62">S62</a> / p11</strong></td><td><a href="https://palermo.blackboard.com/ultra/courses/_96316_1/file/_5725045_1?courseId=_96316_1">Resolución U3 en Blackboard <small>(requiere iniciar sesión)</small></a>, más comprobación derivando y usando condiciones. Algunos resultados se omiten en la clave.</td></tr>
<tr><td>I1, métodos</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=23">S23</a> → <a href="seccion.html?subject=analisis-matematico-2&amp;id=14">S14</a> → <a href="seccion.html?subject=analisis-matematico-2&amp;id=15">S15</a> → <a href="seccion.html?subject=analisis-matematico-2&amp;id=16">S16</a></td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=17">S17</a> / pp12–13</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=18">S18</a>, atendiendo las erratas</td></tr>
<tr><td>ID, definidas y áreas</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=19">S19</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=20">S20</a></td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=21">S21</a> / pp14–16</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=22">S22</a></td></tr>
<tr><td>IM, impropias</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=30">S30</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=31">S31</a></td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=32">S32</a> / p17</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=33">S33</a></td></tr>
<tr><td>V2, dos variables</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=34">S34</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=35">S35</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=36">S36</a></td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=37">S37</a> / pp18–19</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=38">S38</a>, y gráfico original del TP</td></tr>
<tr><td>P0, L’Hôpital — refuerzo si hace falta</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=10">S10</a>, Regla de L’Hôpital</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=11">S11</a> / cuadernillo pp2–4</td><td>Verificar hipótesis y límite, no hay sección local separada de resolución completa de P0. Si dudás, pedir corrección con tu desarrollo.</td></tr>
<tr><td>D1, derivadas — refuerzo si hace falta</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=1">S1</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=2">S2</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=3">S3</a> · <a href="seccion.html?subject=analisis-matematico-2&amp;id=4">S4</a></td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=5">S5</a> / pp5–7</td><td><a href="seccion.html?subject=analisis-matematico-2&amp;id=12">S12</a>, Resolución TP1</td></tr></tbody></table></div>
<h3>Dos ejercicios cortos para la parte de diferencial</h3>
<p><strong>Son agregados de diagnóstico, no ejercicios numerados por la cátedra.</strong></p>
<ul><li><strong>DF1:</strong> para f(x) = x², x₀ = 3 y Δx = 0,1, calcular el incremento real Δy y el diferencial dy. Explicar por qué no son exactamente iguales.</li>
<li><strong>DF2:</strong> aproximar √4,1 usando la tangente de f(x) = √x en x₀ = 4. Escribir la fórmula de aproximación antes de reemplazar.</li></ul>
<details><summary>Ver respuestas de DF1 y DF2, después de intentar</summary><p>Control al terminar: DF1, Δy = 0,61 y dy = 0,6. DF2, aproximación 2,025. Si no podés explicar la diferencia incremento/tangente, releé las dos páginas de diferencial. Se incluyen dentro del bloque del 21, no son horas extra.</p></details>`,
  },
  {
    id: "recorrido",
    title: "Recorrido exhaustivo · cómo usar las nueve listas",
    html: String.raw`
<p>Esta es la lista <strong>exhaustiva de las ocho guías identificadas</strong>, no solo la selección del cronograma. Tu recorrido principal ahora es <strong>D2 → I0 → I1 → ID → IM → V2</strong>. P0 y D1 se conservan más abajo como bancos de diagnóstico/refuerzo: no tenés que terminarlos antes de D2. Dentro de cada guía, seguí el orden numérico. Primero hacé los ítems seleccionados del cronograma y después, si hay tiempo, las variantes pendientes. El listado completo se conserva para que el cambio de arranque no oculte ejercicios.</p>
<p>No hace falta copiar enunciados: están juntos en el cuadernillo. Marcá un ítem como terminado <strong>solo si hiciste todos sus apartados y corregiste el desarrollo</strong>, no porque reconocés el resultado. Registrá los intentos en tu hoja de errores. Usá las casillas solo cuando completes todos los apartados y hayas corregido el desarrollo; comprobá después que podés rehacerlo sin ayuda.</p>
<h3>D2 · Estudio completo · 16 ítems · pp8–10</h3>
<ul><li>1, <strong>apartados a–g completos</strong>: dominio, asíntotas, continuidad, crecimiento, concavidad, gráfico, extremos restringidos y tangente/normal.</li>
<li>2a–2h: ocho estudios completos, no solo cálculo de derivadas.</li>
<li>3: gráfico de f′, completar todas las afirmaciones.</li>
<li>4a–4c: dar intervalos que cumplan las tres condiciones.</li>
<li>5a–5c: tres problemas de extremos restringidos.</li>
<li>6a–6b: extremos libres y restringidos de la misma función.</li>
<li>7: edad y tiempo de reacción, evaluar también extremos del intervalo.</li></ul>
<p><strong>Conteo:</strong> el 1 con siete apartados cuenta como un ítem, 4a–c cuentan como un problema gráfico y 6a–b como un problema. Esta convención explica por qué el número total no representa igual esfuerzo en todos los casos.</p>
<p><strong>Cuándo:</strong> 1 el 19, variantes en rescate del 20, 5c en la rama de optimización del control del 28 y 2b en el simulacro del 30. Si las ocho funciones del 2 te llevan media hora cada una, esa guía por sí sola necesita varias sesiones.</p>
<h3>I0 · Inmediatas y descomposición · 11 ítems · p11</h3>
<ul><li>1a–1h: ocho integrales, reescribir raíces como potencias y expandir lo necesario.</li>
<li>2: reconstruir f desde f″ y dos puntos.</li>
<li>3: reconstruir f usando f″ y la recta tangente.</li>
<li>4: reconstruir f desde f″ y el dato de un máximo.</li></ul>
<p><strong>Cuándo:</strong> selección el 21, resto al terminar ese bloque o en rescate del 27. I0 va <strong>antes</strong> de I1. En 2–4 hay que hallar constantes, no dejar simplemente «+ C».</p>
<h3>I1 · Métodos de integración · 25 ítems · pp12–13</h3>
<ul><li>1a–1g: siete por sustitución.</li>
<li>2a–2g: siete por partes.</li>
<li>3a–3g: siete por fracciones simples, incluidos factores repetidos.</li>
<li>4a–4d: cuatro eligiendo vos el método.</li></ul>
<p><strong>Cuándo:</strong> 1 el 22, 2 el 23, 3 el 24–25 y 4 desde el 25. Completar variantes en rescate del 27. <strong>1f, 2f y 3c</strong> están señalados como entrega obligatoria en el material, por eso los incluí en la selección de estudio. Eso no es una instrucción de reenviar una entrega ni confirma un vencimiento actual.</p>
<h3>ID · Definidas y áreas · 23 ítems · pp14–16</h3>
<ul><li>1a–1f: seis integrales definidas.</li>
<li>2, 3 y 4: tres problemas de propiedades.</li>
<li>5a–5d: cuatro regiones sombreadas, usar los dibujos originales.</li>
<li>6: elegir y justificar la integral de área entre x⁵ y x.</li>
<li>7a–7g: siete áreas. Dibujar siempre los bordes.</li>
<li>8: parámetro k a partir del área.</li>
<li>9: distancia del corredor en los dos tiempos solicitados.</li></ul>
<p><strong>Cuándo:</strong> 1d el 25, núcleo el 26, resto el 27 si se activa o en tiempo liberado. 7a queda reservado para el simulacro. En 7b/7c el enunciado abrevia los bordes, explicitar en el dibujo la interpretación respecto del eje x usada en el material.</p>
<h3>IM · Impropias · 10 ítems · p17</h3>
<ul><li>1a–1g: clasificar, escribir límites y decidir convergencia en los siete casos.</li>
<li>2a–2b: explicar ambos cálculos incorrectos.</li>
<li>3a: justificar verdadero/falso.</li></ul>
<p><strong>Cuándo:</strong> guía completa el 28. Es corta, pero importante para ponerte al día. Antes de integrar, localizar todos los puntos problemáticos, incluidos los interiores al intervalo. No compensar divergencias ni usar un «infinito» como número en Barrow.</p>
<h3>V2 · Dos variables · 19 ítems · pp18–19</h3>
<ul><li>1a–1j: diez dominios, forma analítica <strong>y</strong> dibujo.</li>
<li>2a–2b: proponer funciones para las dos regiones dibujadas.</li>
<li>3a–3e: cinco funciones, <strong>tres curvas de nivel por función</strong>.</li>
<li>4a–4b: tres puntos de cada curva de nivel k = 1.</li></ul>
<p><strong>Cuándo:</strong> núcleo el 29, 1h y 3c en el simulacro, demás variantes si ese día queda tiempo. La guía entera no se completa haciendo solo un nivel de cada función. <strong>1e/1f</strong> son los otros ejercicios señalados como obligatorios en la consigna histórica.</p>
<h3>P0 · L’Hôpital · 24 ítems · pp2–4</h3>
<ul><li>1a–1g: siete límites, comprobar primero si aplica la regla.</li>
<li>1h–1j: productos y diferencias, transformar antes de derivar.</li>
<li>1k–1m: potencias indeterminadas, trabajar con logaritmos.</li>
<li>1n–1r: cinco límites restantes, dominio y función por tramos incluidos.</li>
<li>2: encontrar el uso incorrecto de L’Hôpital.</li>
<li>3: determinar a y b.</li>
<li>4: determinar n.</li>
<li>5: límite usando información sobre f y f′.</li>
<li>6: continuidad y derivabilidad en x = 5.</li>
<li>7: dominio y asíntotas.</li></ul>
<p><strong>Cuándo usar este banco:</strong> si D2 muestra dificultades en límites/asíntotas, o en la rama de límites del control del 28. Variantes solo en un rescate o en tiempo liberado. No hay jornada inicial de P0; los ítems no trabajados siguen pendientes, no se consideran «cubiertos» por empezar con D2.</p>
<h3>D1 · Extremos y concavidad · 20 ítems · pp5–7</h3>
<ul><li>1a–1h: las ocho funciones, crecimiento y extremos.</li>
<li>2: función racional, dominio, ejes y extremos.</li>
<li>3: parámetro y tipo de extremo.</li>
<li>4: gimnasio, traducir el resultado al precio de la cuota.</li>
<li>5: interpretar el gráfico de <strong>f′</strong>, no de f.</li>
<li>6: tanque, restricción de volumen y función de costo.</li>
<li>7a–7f: las seis funciones, concavidad e inflexión.</li>
<li>8: segunda lectura gráfica de f′ y concavidad de f.</li></ul>
<p><strong>Cuándo usar este banco:</strong> refuerzo selectivo desde el estudio completo del 19, según el error detectado. Tanque (6) en la rama de optimización del control del 28 si los límites están verdes. No hay jornada inicial de derivadas; los modelos de optimización no se dan por dominados solo por saber derivar.</p>
<h3>A1–A5 · Cinco extras ya existentes en tus apuntes · p20</h3>
<ul><li>A1, región entre y = x e y = x².</li>
<li>A2, área de y = x² − 6x + 8 respecto del eje x en [0,6].</li>
<li>A3, área de y = x·eˣ respecto del eje x en [−1,2].</li>
<li>A4, triángulo de y = 2x, y = x e y = 4−x.</li>
<li>A5, región de y = ln x, y = −1, y = 1 y x = 0, probar franjas horizontales.</li></ul>
<p>Son práctica adicional tomada de <a href="seccion.html?subject=analisis-matematico-2&amp;id=20">S20</a>, que los llama «ejercicios de final». <strong>No significa que integren un modelo confirmado del parcial.</strong> Reservalos para el 27 si vas bien o como reemplazo de un ejercicio de área ya dominado. No desplazan impropias ni dos variables.</p>
<h3>Autoevaluaciones y material fuera de este cuadernillo</h3>
<p>Se identificaron autoevaluaciones oficiales de U1, U2, U3, U4 (dos), U6 y U7. Sus preguntas no están contabilizadas en los 148 ni reemplazadas por los quizzes de la app. Sus ubicaciones están en <a href="https://palermo.blackboard.com/ultra/courses/_96316_1/outline">Blackboard Análisis II <small>(requiere iniciar sesión)</small></a>, con acceso personal. Si decidís hacerlas, revisá intentos/temporizador y usá su tiempo <strong>en lugar de</strong> variantes, no como obligación extra invisible.</p>
<p>U9, derivadas parciales, U11, extremos en dos variables, y U12, extremos ligados, existen localmente, pero <strong>quedan fuera del alcance U0–U7 pedido</strong>. Si el profesor amplía el parcial, el plan debe cambiar, no basta con agregarles una lectura la noche anterior.</p>`,
  },
  {
    id: "java",
    title: "Java · fichas ampliadas J1–J7 y fuentes U7",
    html: String.raw`
<p>Los J son bloques de práctica preparados para este plan, <strong>no numeración de Blackboard</strong>. Cuando digo «oficial» se trata de actividades ya presentes en tus apuntes. Las extensiones y el simulacro son propios, no consignas oficiales ni predicciones del examen.</p>
<p><strong>Regla general:</strong> intentá reconstruir desde un proyecto limpio. Si pasados 10 minutos no recordás la estructura, mirá un ejemplo mínimo, cerralo y seguí. No vuelvas a entregar actividades completadas. Usá nombres claros, métodos de dominio sin impresiones innecesarias y un <code>main</code> de pruebas. Si una consigna oficial pide un proyecto por ejercicio, mantené esa separación al practicar el empaquetado.</p>
<p><strong>Las cinco sesiones A–E del calendario reemplazan los siete bloques largos.</strong> Los minutos incluyen lectura, intento y corrección; las pausas diarias van aparte. Las fichas J1–J7 de abajo son versiones ampliadas de consulta, <strong>no siete sesiones adicionales</strong>. Para saber qué hacer cada día manda la selección del calendario.</p>
<p><strong>Qué quedó fuera de la ruta base de Java:</strong> reconstruir íntegramente todos los proyectos Auto/PC, todas las variantes de colecciones y ejercicios extra de patrones. Son refuerzo si sobra tiempo o se activa el domingo; no trabajo invisible. Se mantienen los temas, pero con menos repetición que en el plan original.</p>
<h3>Fichas ampliadas de consulta J1–J7</h3>
<p>Los tiempos de estas fichas describen su versión completa. Para saber <strong>qué hacer cada día</strong>, manda la selección A–E de arriba.</p>
<h3>J1 · Base Java y Auto · ficha ampliada de 110 min</h3>
<p><strong>Leer 20 min:</strong> <a href="seccion.html?subject=laboratorio-1&amp;id=10">S10</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=11">S11</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=12">S12</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=13">S13</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=14">S14</a>, especialmente tipos primitivos/referencias, operadores, if/for/while y métodos. <a href="seccion.html?subject=laboratorio-1&amp;id=7">S7</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=8">S8</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=9">S9</a> solo para crear, importar y exportar proyecto. Repaso oral rápido de clase, objeto, estado y comportamiento, sin dedicar el bloque a copiar la historia de la POO.</p>
<p><strong>Programar 70 min, actividad oficial <a href="seccion.html?subject=laboratorio-1&amp;id=26">S26</a>, ejercicios 1–4:</strong></p>
<ol><li><code>Rueda</code>: radio, color, material y comportamiento girar. Probar dos instancias independientes.</li>
<li><code>CajaDeVelocidades</code>: fabricante, cantidad de marchas, relación y marcha actual. Cambiar de marcha y consultar el estado.</li>
<li><code>Motor</code>: marca, hp, cilindrada, arrancar y detener. Comprobar apagado → encendido → apagado.</li>
<li><code>Auto</code>: marca, modelo, puertas, aire y referencias a motor, caja y ruedas. Armar dos autos y mostrar algunos datos desde <code>main</code>.</li></ol>
<p><strong>Cerrar 20 min:</strong> explicar «Auto tiene un Motor», no «Auto es un Motor». Agregar como micropráctica propia un arreglo de tres enteros, recorrerlo con for y calcular suma/máximo. Ejecutar y exportar el proyecto una vez. La memoria de trabajo no alcanza para estudiar Java si cada día peleás con cómo correrlo.</p>
<p><strong>Salida observable:</strong> compila, corre y podés explicar qué cambia al llamar a cada método. Si los cuatro ejercicios no entran, terminar Rueda/Motor/Auto mínimo y pasar Caja al primer refuerzo, dejándola marcada pendiente.</p>
<h3>J2 · PC, referencias y herencia · ficha ampliada de 110 min</h3>
<p><strong>Leer 20 min:</strong> <a href="seccion.html?subject=laboratorio-1&amp;id=15">S15</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=16">S16</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=17">S17</a> y <a href="seccion.html?subject=laboratorio-1&amp;id=28">S28</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=29">S29</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=30">S30</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=31">S31</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=32">S32</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=33">S33</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=34">S34</a>. Encapsulación, ES-UN/TIENE-UN, sobrecarga/sobrescritura, arreglos, conversiones y <code>instanceof</code>.</p>
<p><strong>Práctica oficial <a href="seccion.html?subject=laboratorio-1&amp;id=27">S27</a>, 50 min:</strong></p>
<ol><li>Modelar <code>Computadora</code>, <code>Procesador</code> y <code>DiscoRigido</code> con los atributos de la consigna. Construir una desktop y una laptop.</li>
<li>Hacer que compartan <strong>el mismo objeto disco</strong>, modificarlo e imprimir ambas. Antes de ejecutar, dibujar las flechas y predecir qué se ve. Después probar dos discos distintos con los mismos datos.</li>
<li>Implementar encender/apagar en cascada y consultas de estado de PC/procesador/disco.</li></ol>
<p><strong>Papel primero, 25 min:</strong> rehacer <a href="seccion.html?subject=laboratorio-1&amp;id=44">S44</a> preguntas 1–4 ocultando la corrección. Para cada fragmento escribir: «no compila», «compila y falla al ejecutar» o «compila y corre». Diferenciar tipo declarado y tipo real, <code>static</code> e instancia, sobrecarga y sobrescritura. <strong>No ejecutar un fragmento antes de responderlo.</strong></p>
<p><strong>Cerrar 15 min:</strong> comparar con la devolución docente y registrar el motivo del error. Repaso de <a href="seccion.html?subject=laboratorio-1&amp;id=21">S21</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=22">S22</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=23">S23</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=24">S24</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=25">S25</a>: fuente → javac → bytecode → JVM, diferencias JDK/JRE/JVM y uso básico de jar/javadoc. No instalar otro JDK ni cambiar de IDE para estudiar.</p>
<h3>J3 · Diseño avanzado · ficha ampliada de 110 min</h3>
<p><strong>Leer 25 min:</strong> <a href="seccion.html?subject=laboratorio-1&amp;id=35">S35</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=36">S36</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=37">S37</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=38">S38</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=39">S39</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=40">S40</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=41">S41</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=42">S42</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=43">S43</a>. Priorizar contratos, constructores de abstractas, interfaces y composición. Leer los cuatro patrones para reconocer intención, sin implementar cuatro sistemas completos.</p>
<p><strong>Responder 20 min, actividad oficial <a href="seccion.html?subject=laboratorio-1&amp;id=45">S45</a>:</strong></p>
<ol><li>¿Por qué una clase abstracta puede tener constructor si no puede instanciarse directamente?</li>
<li>¿Cuándo elegir una interfaz en vez de una clase abstracta?</li>
<li>¿Cuándo componer en vez de heredar?</li>
<li>¿Qué problema resuelve State?</li></ol>
<p><strong>Programar 45 min, práctica propia:</strong> <code>Personaje</code> con <code>FormaDeAtacar</code>, dos implementaciones y un setter. El mismo personaje debe cambiar su forma de atacar sin recrearse. Después dibujar una máquina con estados apagado/encendido y sus transiciones, sin desarrollar una app. Explicar por qué el primer caso es Strategy y el segundo State. Dar un ejemplo breve de Template Method y otro de Singleton.</p>
<p><strong>Cerrar 20 min:</strong> corregir respuestas y recuperar dos errores de <a href="seccion.html?subject=laboratorio-1&amp;id=44">S44</a>. Una justificación buena incluye el problema que evitás y un costo de tu elección, no solo «es más flexible».</p>
<h3>J4 · Colecciones y genéricos · ficha ampliada de 110 min</h3>
<p><strong>Lecturas nuevas, 35 min:</strong></p>
<ul><li><a href="https://palermo.blackboard.com/ultra/courses/_95920_1/file/_5651386_1?courseId=_95920_1">Colecciones y jerarquía, 12 páginas <small>(requiere iniciar sesión)</small></a>. Foco p4 operaciones, p6 List, p8 Set, p9 Iterator, p11 Map y los diagramas intercalados.</li>
<li><a href="https://palermo.blackboard.com/ultra/courses/_95920_1/file/_5651387_1?courseId=_95920_1">Colecciones paramétricas, pp2–10 <small>(requiere iniciar sesión)</small></a>. Tipado de listas, for-each y clase <code>Balde&lt;T&gt;</code>.</li></ul>
<p><strong>Programar 55 min, práctica propia usando lo que ya hiciste:</strong></p>
<ol><li><code>List&lt;Auto&gt;</code> con tres autos, agregar, recorrer con for-each, consultar tamaño y eliminar uno. Probar también el recorrido con Iterator.</li>
<li><code>Set&lt;String&gt;</code> con marcas repetidas. Predecir cuántas quedan.</li>
<li><code>Map&lt;String, Auto&gt;</code> con patente como clave. Consultar una existente y otra inexistente, reemplazar el valor de una clave y comprobar tamaño.</li>
<li><code>Balde&lt;T&gt;</code> con <code>llenar(T)</code> y <code>obtenerContenido()</code>. Probar con String e Integer. Dejar comentada una asignación de tipo incorrecto y explicar por qué el compilador la rechaza.</li></ol>
<p><strong>Cerrar 20 min:</strong> elegir List, Set o Map para una cola de registros, marcas sin duplicar y búsqueda por patente, justificando las operaciones necesarias. No pedirle orden a HashSet/HashMap por cómo casualmente imprimieron una vez. Reservar 5 min para revisar <a href="seccion.html?subject=laboratorio-1&amp;id=1">S1</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=2">S2</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=3">S3</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=4">S4</a> y <a href="seccion.html?subject=laboratorio-1&amp;id=18">S18</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=19">S19</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=20">S20</a> con cinco preguntas orales sobre POO, IDE y paradigmas, no para leer filosofía entera.</p>
<h3>J5 · Igualdad y orden · ficha ampliada de 110 min</h3>
<p><strong>Leer 30 min:</strong> <a href="https://palermo.blackboard.com/ultra/courses/_95920_1/file/_5651388_1?courseId=_95920_1">Comparable y Comparator, pp2–13 <small>(requiere iniciar sesión)</small></a>, con atención a igualdad/identidad y contrato equals/hashCode. Terminar genéricos pp11–12 con la advertencia de errata de abajo.</p>
<p><strong>Programar 55 min, práctica propia:</strong></p>
<ol><li><code>Libro</code> con código, título y año. Dos objetos con el mismo código representan el mismo libro para <code>equals</code>, y deben tener el mismo <code>hashCode</code>.</li>
<li>Comparar <code>==</code> y <code>equals</code> para dos instancias distintas de igual código. Agregarlas a un HashSet y comprobar que queda una entrada.</li>
<li>Implementar orden natural por <strong>código</strong> con <code>Comparable&lt;Libro&gt;</code>, consistente con la identidad elegida. Agregar un <code>Comparator&lt;Libro&gt;</code> por título y, ante empate, código. Ordenar la misma lista de las dos maneras.</li>
<li>Explicar qué significan resultado negativo, cero y positivo al comparar. Probar empate, lista vacía y un solo elemento.</li></ol>
<p><strong>Cerrar 15 min:</strong> explicar la diferencia entre eliminar duplicados y ordenar. Explicar qué variable genérica permite escribir y cuál solo ofrece lectura segura de un tipo base.</p>
<p><strong>Últimos 10 min:</strong> revisar las condiciones de la autoevaluación de Colecciones si pensás realizarla. <strong>Vence el 22/9 a las 20:00.</strong> La duración del intento no está confirmada. Para realizarla, reservá tiempo antes de esa fecha y horario: esta ficha de consulta no cambia el vencimiento ni indica hacerla el 23. Si no entra, reemplazá parte de práctica repetida o usá tiempo que efectivamente tengas, no asumas que se completa en esos 10 minutos.</p>
<h3>J6 · Excepciones · ficha ampliada de 110 min</h3>
<p><strong>Leer 20 min:</strong> <a href="seccion.html?subject=laboratorio-1&amp;id=46">S46</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=47">S47</a> · <a href="seccion.html?subject=laboratorio-1&amp;id=48">S48</a> y consigna <a href="seccion.html?subject=laboratorio-1&amp;id=49">S49</a>.</p>
<p><strong>Programar 65 min, selección propia dentro de la actividad oficial de librería:</strong></p>
<ul><li>Validar texto no vacío, con política explícita para null y espacios.</li>
<li>Validar un número dentro de un rango inclusivo.</li>
<li>Validar texto alfanumérico que tenga al menos una letra y un dígito.</li>
<li>Lanzar excepciones descriptivas, no limitarse a devolver false. Crear la familia de excepciones que haga falta y explicar por qué elegiste checked/unchecked y métodos estáticos/de instancia.</li>
<li>En <code>main</code>, probar válido, vacío, null, extremos del rango, fuera de rango, solo letras, solo números y ambos. Capturar lo que corresponda sin ocultar el error.</li></ul>
<p><strong>Cerrar 25 min:</strong> explicar <code>throw</code> versus <code>throws</code>, orden de catch y recorrido de try/catch/finally. Corregir y volver a ejecutar. Los métodos de validación no tienen que imprimir todo por su cuenta. No agregar interfaz gráfica, persistencia ni frameworks, no son necesarios para esta práctica.</p>
<h3>J7 · Simulacro propio y logística · sesión del 24/9, 120 min</h3>
<p><strong>20 min antes del simulacro:</strong> revisar en Blackboard «IMPORTANTE - Actividades previas al examen (ING)», requisitos de Respondus/LockDown Browser, normas y segunda cámara. Confirmar horario del 25 y entorno permitido. Si hay que completar instalación/simulación, hacerlo con tiempo y siguiendo la cátedra. No prometo que cualquier instalación entre en 20 min, por eso es una revisión preventiva. Revisá personalmente la simulación de examen y las condiciones vigentes; este simulacro propio no la sustituye.</p>
<p><strong>70 min sin apuntes ni IA:</strong></p>
<ol><li><strong>15 min:</strong> <a href="seccion.html?subject=laboratorio-1&amp;id=44">S44</a> preguntas 1–4, clasificar y justificar antes del IDE.</li>
<li><strong>15 min:</strong> dos preguntas de <a href="seccion.html?subject=laboratorio-1&amp;id=45">S45</a> elegidas sin mirar respuestas.</li>
<li><strong>40 min:</strong> crear un catálogo de libros con Map por código, búsqueda, excepción por título inválido y listado ordenado por título. Usar al menos tres libros. Explicar duplicados y probar un dato inválido. Es una consigna propia que integra lo estudiado.</li></ol>
<p><strong>30 min de corrección:</strong> compilar, ejecutar pruebas y registrar errores. Aprobar tu chequeo exige programa ejecutable, modelo coherente y explicación de las decisiones. Objetivo propuesto: al menos 80% de los puntos de tu lista de comprobación sin ayuda. No es la nota oficial ni garantiza aprobar.</p>`,
  },
  {
    id: "metodo",
    title: "Cómo estudiar · recuperación y registro de errores",
    html: String.raw`
<h3>Cada bloque, siempre en este orden</h3>
<ol><li><strong>Recuperar, 5 min:</strong> hoja en blanco, escribir lo de ayer sin mirar. En matemática, condiciones y pasos. En Java, dibujar objetos o predecir un fragmento.</li>
<li><strong>Leer dirigido, 10–25 min:</strong> buscar la regla que necesitás. Un ejemplo trabajado, no diez. Si el tema es nuevo, este tiempo puede aumentar a costa de variantes, no de la corrección.</li>
<li><strong>Resolver o programar sin apoyo:</strong> anotar decisiones, no solo cuentas. Si usás una pista, marcar el ítem como asistido.</li>
<li><strong>Corregir, 10–20 min:</strong> comparar al terminar. Localizar la primera línea incorrecta y escribir la regla que faltó. «Me equivoqué de signo» es menos útil que «al integrar sen omití el signo negativo».</li>
<li><strong>Repetir en otro momento:</strong> rehacer el ítem asistido al día siguiente y otra vez unos tres días después, dentro de los minutos de repaso. En fin de semana libre, mover al lunes. Los intervalos 1 y 3 días son una pauta práctica para estas fechas, no una fórmula universal.</li></ol>
<p>Recuperar información sin mirar y espaciar las oportunidades de estudio tienen respaldo experimental. La aplicación concreta a estas dos materias es una propuesta de organización, no una garantía de nota. <a href="https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/">Roediger y Karpicke, 2006</a> y <a href="https://www.psychologicalscience.org/journals/psychological-science/0956797615617778/">Soderstrom, Kerr y Bjork, 2016</a>.</p>
<h3>Registro de errores, una línea por error</h3>
<div class="plan-table-wrap"><table><thead><tr><th scope="col">Fecha / ejercicio</th><th scope="col">Qué decidí mal</th><th scope="col">Regla correcta / prueba que faltó</th><th scope="col">Rehacer</th><th scope="col">¿Salió sin ayuda?</th></tr></thead><tbody><tr><td>Ejemplo, IM 1g</td><td>Apliqué Barrow atravesando x=1</td><td>Separar en x=1 y estudiar ambos límites</td><td>Próximo día de estudio</td><td>Pendiente</td></tr>
<tr><td>Ejemplo, Java cast</td><td>Confundí tipo declarado y objeto real</td><td>El cast no transforma el objeto</td><td>Próximo bloque</td><td>Pendiente</td></tr></tbody></table></div>
<p><strong>Semáforo:</strong> verde = salió sin ayuda y lo justificás. Amarillo = salió con una pista o demasiado lento. Rojo = no sabés cómo arrancar o el concepto es incorrecto. El próximo bloque empieza por un rojo, no por volver a hacer lo que ya te gusta.</p>
<p><strong>Límite para atascarte:</strong> 8–10 minutos sin progreso en una cuenta corta, 15 en una de desarrollo. Escribí dónde te trabaste, consultá solo el paso necesario y seguí. Volvé a resolverlo después desde cero. Copiar una resolución completa no cuenta como práctica autónoma.</p>
<h3>Cinco comprobaciones que valen más que releer</h3>
<ul><li>Primitiva: derivarla y recuperar el integrando, sin olvidar la constante y el dominio.</li>
<li>Estudio de función: comprobar dominio y signos antes de dibujar, distinguir f, f′ y f″.</li>
<li>Área: dibujar el recinto, encontrar intersecciones y justificar cada corte. El resultado debe ser no negativo.</li>
<li>Dominio de dos variables: cruzar <strong>todas</strong> las restricciones y marcar frontera incluida/excluida. Un dominio vacío puede ser correcto.</li>
<li>Java: predecir antes de correr y contrastar con ejecución, probar caso normal y casos límite. Que compile no demuestra que el diseño o la lógica estén bien.</li></ul>`,
  },
  {
    id: "alternativas",
    title: "Si te atrasás o solo tenés dos horas",
    html: String.raw`
<p><strong>No acumules todo al final.</strong> Conservá fecha del parcial, último simulacro y un caso de cada tema.</p>
<ul><li><strong>Sábado 19, versión de 2 h:</strong> 70 min para D2 1 (intento + corrección), 40 min Java diagnóstico/Auto y 10 min de pausa. Los apartados pendientes de D2 y el chequeo de PC van al rescate opcional del 20 o reemplazan variantes del lunes; no se consideran hechos.</li>
<li><strong>Del 21 al 23, versión de 2 h:</strong> 70 min Java, 40 min matemática, 10 min pausa. En Java hacé la práctica mínima de A–E y las preguntas que fallaste, sin reescribir todas las entregas. En matemática tomá los primeros 2–3 ítems y registrá el resto. U7 y excepciones no se eliminan por ser nuevas.</li>
<li><strong>Jueves 24, si solo tenés 2 h:</strong> conservar J7 completo. Las fracciones simples de Análisis pasan al 25 y reemplazan sus variantes 3e/4d, no se suman.</li>
<li><strong>Después del 25, versión de 2 h:</strong> 100 min de matemática, 20 de pausas/corrección distribuida. Reducí variantes, no suprimas impropias ni dos variables. El simulacro conserva 120 min continuos, la corrección se pasa a otro bloque y reemplaza ejercicios extra.</li>
<li><strong>Si el estudio completo del 19 revela bases rojas:</strong> usar solo la rama de refuerzo correspondiente de P0/D1, en el rescate opcional del 20 o recortando variantes del lunes. No volver a programar dos días enteros de temas introductorios.</li>
<li><strong>Si integración sigue roja el 26:</strong> domingo 27 de rescate. Empezar I0 → una sustitución → una por partes → una fracción simple. Después volver a definidas.</li>
<li><strong>Si al 29 hay lagunas:</strong> hacer el simulacro del 30 igual. Usar la corrección para el tipo que más puntos te costó. No empezar a estudiar U9 por las dudas antes de poder resolver U6/U7.</li>
<li><strong>Si querés completar todo:</strong> usar los rescates para pendientes del <a href="#recorrido">recorrido completo</a>, empezando por D2 y siguiendo el recorrido principal; P0/D1 entran según dificultades y luego como variantes. Al terminar cada sesión anotar cuántos ítems salieron y cuánto tardaste. Proyectar con tu ritmo real. Si no entra, la elección real es ampliar horas o aceptar menor cantidad de variantes, no fingir que están hechas.</li></ul>
<p><strong>Prioridad de recorte:</strong> primero repetición de ejercicios ya verdes, después extras A1–A5 y lectura bibliográfica larga. No recortar corrección, casos nuevos, descanso previo al examen ni simulacro.</p>`,
  },
  {
    id: "simulacro",
    title: "Simulacro de Análisis · 30/9 · 120 minutos",
    html: String.raw`
<p><strong>Es un simulacro armado con tus guías, no un parcial oficial ni una predicción.</strong> Papel, sin apuntes/soluciones/IA, <strong>120 minutos continuos</strong>. No hace falta el navegador supervisado para esta práctica personal.</p>
<div class="plan-table-wrap"><table><thead><tr><th scope="col">Parte</th><th scope="col">Ejercicio</th><th scope="col">Tiempo guía</th><th scope="col">Puntaje propio</th></tr></thead><tbody><tr><td>1</td><td><strong>P0 1m</strong>, justificar transformación y límite</td><td>10 min</td><td>10</td></tr>
<tr><td>2</td><td><strong>D2 2b</strong>, estudio completo y gráfico</td><td>30 min</td><td>25</td></tr>
<tr><td>3</td><td><strong>I1 2b</strong>, integral y verificación</td><td>15 min</td><td>15</td></tr>
<tr><td>4</td><td><strong>ID 7a</strong>, dibujo, planteo y área</td><td>20 min</td><td>15</td></tr>
<tr><td>5</td><td><strong>IM 1g</strong>, clasificar, separar y decidir convergencia</td><td>15 min</td><td>15</td></tr>
<tr><td>6</td><td><strong>V2 1h</strong>, dominio analítico y gráfico</td><td>20 min</td><td>15</td></tr>
<tr><td>7</td><td><strong>V2 3c</strong>, tres curvas de nivel</td><td>10 min</td><td>5</td></tr></tbody></table></div>
<p>Los tiempos son orientación para administrar el reloj. Si un apartado se bloquea, dejar planteo y avanzar. Para autocorregir cada parte, distribuir el puntaje entre planteo/hipótesis (40%), desarrollo (40%) y conclusión clara (20%). No es la rúbrica de la cátedra.</p>
<p>Después usar las secciones de resolución y tu registro. <strong>Objetivo de práctica: 75/100 o más, sin ayuda y sin un tema entero en blanco.</strong> Si quedás por debajo, eso identifica qué trabajar, no predice automáticamente la nota del parcial. Los 55 puntos que figuran en Blackboard son el umbral oficial, no el margen de seguridad que conviene buscar al practicar.</p>
<p>Ensayar convertir las hojas a <strong>un PDF legible y ordenado</strong>, comprobar todas las páginas y el tamaño del archivo. No subir el simulacro a la instancia del parcial real.</p>`,
  },
  {
    id: "erratas",
    title: "Advertencias y erratas del material",
    html: String.raw`
<p>Estas observaciones son para estudiar con criterio; el agregado posterior de <a href="seccion.html?subject=analisis-matematico-2&amp;id=62">S62</a> no modifica las secciones que se comentan aquí:</p>
<ul><li><strong>D1 1d</strong> aparece como <code>x.ex</code> en el original. La interpretación probable es x·eˣ, pero el enunciado es ambiguo. Está en la lista completa, no lo uses como prueba decisiva sin confirmarlo.</li>
<li><strong>D1 1g</strong>, e^(−x²), tiene un máximo en x=0, no el mínimo que figura en una clave. Comprobar signos de f′.</li>
<li>Las advertencias de <strong><a href="seccion.html?subject=analisis-matematico-2&amp;id=18">S18</a></strong> señalan errores de signo/coeficiente en sustitución y un argumento incorrecto de arctan en una resolución por partes. <strong>Derivar la respuesta</strong> es mejor que memorizar la clave.</li>
<li>En <strong>V2 2</strong>, mirar las figuras originales ahora agregadas a <a href="seccion.html?subject=analisis-matematico-2&amp;id=37">S37</a> o el PDF. La descripción por sí sola no sustituye las rectas y fronteras dibujadas. En un denominador logarítmico hay dos restricciones: argumento positivo y logaritmo distinto de cero.</li>
<li><strong><a href="seccion.html?subject=analisis-matematico-2&amp;id=38">S38</a>, resolución de V2 1g:</strong> donde aparece $x&lt;y$ por el logaritmo hay una inversión de desigualdad. Para $\ln(x-y)$ se exige $x-y&gt;0$, es decir, <strong>$x&gt;y$</strong>; además el denominador exige $x^2+y^2&lt;9$. Comprobar el argumento original, no memorizar la tabla de resolución.</li>
<li>Java <a href="seccion.html?subject=laboratorio-1&amp;id=49">S49</a> muestra código ilustrativo que no conviene pegar: String usa <code>length()</code>, no <code>length</code>, y una función declarada con retorno String necesita devolver un valor en el camino normal. Un validador también puede diseñarse como void.</li>
<li><strong>Genéricos U7 p11 invierte la explicación de inserción.</strong> Una colección de un tipo base admite sus subtipos, pero <code>? extends Base</code> representa un tipo desconocido y no permite agregar arbitrariamente objetos Base o sus subtipos a través de esa referencia. <a href="https://dev.java/learn/generics/wildcards/">Dev.java, Wildcards</a>.</li>
<li>No todo Set rechaza null, <strong>HashSet sí lo permite</strong>. <code>Map.values()</code> devuelve <strong>Collection</strong>, no necesariamente List. <a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashSet.html">API HashSet</a> y <a href="https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html">API Map</a>.</li></ul>`,
  },
  {
    id: "pendientes",
    title: "Pendientes, logística y fuentes",
    html: String.raw`
<ul><li>Confirmar con cátedra de Laboratorio horario/formato del 25 y si entra U8, que aún está cerrada.</li>
<li>Confirmar si Análisis termina efectivamente en U7. Si no hay respuesta, mantener la cobertura preventiva de este plan.</li>
<li>Revisar logística de supervisión, segunda cámara y PDF antes del último día, sin iniciar por error un parcial.</li>
<li>Decidir personalmente si hacer la autoevaluación de Colecciones antes del 22/9 a las 20:00, revisando sus condiciones.</li></ul>
<p>Este plan no activa notificaciones ni tareas automáticas. El TP U03 está integrado en <a href="seccion.html?subject=analisis-matematico-2&amp;id=62">S62</a>, con su PDF y bancos de repaso; también están las siete figuras originales de <a href="seccion.html?subject=analisis-matematico-2&amp;id=21">S21</a>/<a href="seccion.html?subject=analisis-matematico-2&amp;id=37">S37</a>. Los apuntes de Laboratorio no incorporan U7: usar los enlaces de las fichas J4/J5.</p>
<h3>Fuentes y fecha de consulta</h3>
<ul><li><a href="https://palermo.blackboard.com/ultra/courses/_96316_1/outline">Blackboard Análisis II <small>(requiere iniciar sesión)</small></a>, inventario y logística consultados el 17/9.</li>
<li><a href="https://palermo.blackboard.com/ultra/courses/_95920_1/outline">Blackboard Laboratorio I <small>(requiere iniciar sesión)</small></a>, inventario U1–U7 consultado el 17/9.</li></ul>
<ul><li><a href="pdfs/planes/cuadernillo-analisis-parcial-2026-10-01.pdf#page=8">Cuadernillo de Análisis, 20 páginas</a>: abrir en D2, página 8. El orden del cuadernillo es el de la materia; <strong>el cronograma vigente es el de este sitio</strong>, con comienzo el sábado 19/9.</li>
<li>Enlaces S de esta página: apuntes de cada materia. S no significa unidad de Blackboard.</li>
<li>Las actividades oficiales se identifican expresamente; DF1/DF2, las extensiones Java y los simulacros son propuestas propias de práctica, no predicciones del examen.</li></ul>`,
  }
];
