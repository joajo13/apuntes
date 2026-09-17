/**
 * Banco NUEVO (anti-spoiler) — analisis-matematico-2
 *
 * Mapa { [sectionId]: { quiz2: { tf, mc, ms }, flashcards2: [...] } }.
 * content.js mergea esto sobre las secciones por id (sec.quiz2 / sec.flashcards2).
 * Generado para autoevaluación: opciones homogéneas, sin pistas de forma.
 */
export default {
  "62": {
    "quiz2": {
      "tf": [
        { "id": "tf2-62-1", "q": "En el ejercicio 2, se conocen valores de f en dos abscisas distintas.", "a": true, "explain": "Los puntos dados son $(1;-1)$ y $(2;-7)$, ambos del gráfico de $f$." },
        { "id": "tf2-62-2", "q": "La recta tangente del ejercicio 3 determina únicamente un valor de f, pero no de su derivada.", "a": false, "explain": "El punto de tangencia determina $f(1)=3$ y la pendiente de la recta determina $f'(1)=1$." },
        { "id": "tf2-62-3", "q": "Para comprobar la reconstrucción del ejercicio 4 alcanza con verificar la derivada segunda.", "a": false, "explain": "También hay que verificar el punto $(1;1)$ y la condición de máximo indicada por la consigna." }
      ],
      "mc": [
        {
          "id": "mc2-62-1",
          "q": "¿Qué consigna proporciona datos sobre una recta tangente?",
          "options": ["Ejercicio 1", "Ejercicio 2", "Ejercicio 3", "Ejercicio 4"],
          "correctIndex": 2,
          "explain": "El ejercicio 3 da la tangente $y=x+2$ en $(1;3)$."
        },
        {
          "id": "mc2-62-2",
          "q": "¿Cuál de estas condiciones corresponde al ejercicio 2?",
          "options": ["$f(2)=-7$", "$f'(2)=-7$", "$f''(2)=-7$", "$f(-7)=2$"],
          "correctIndex": 0,
          "explain": "El par $(2;-7)$ pertenece al gráfico de $f$, no al de sus derivadas."
        },
        {
          "id": "mc2-62-3",
          "q": "¿Qué dato distingue al ejercicio 4 del ejercicio 2?",
          "options": ["Una integral con dos límites numéricos", "Dos puntos de abscisas distintas", "Una recta tangente especificada", "Un punto que además es un máximo"],
          "correctIndex": 3,
          "explain": "En el ejercicio 4, $(1;1)$ no es solo un punto del gráfico, también es un máximo."
        }
      ],
      "ms": [
        {
          "id": "ms2-62-1",
          "q": "Seleccioná los datos que corresponden al ejercicio 3.",
          "options": ["$f(1)=3$", "$f'(1)=1$", "$f''(x)=6x$", "$f'(1)=2$"],
          "correctIndexes": [0, 1, 2],
          "explain": "El punto da el valor 3, la tangente tiene pendiente 1 y la derivada segunda está indicada explícitamente."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-62-1", "front": "¿Por qué no se pueden omitir las constantes al reconstruir f?", "back": "Porque deben ajustarse a los datos de puntos, tangentes o extremos dados en los ejercicios 2 a 4." },
      { "id": "fc2-62-2", "front": "En esta guía, ¿qué diferencia hay entre el ejercicio 1 y los ejercicios 2 a 4?", "back": "El 1 pide primitivas. Los demás piden definir una función concreta a partir de su derivada segunda y condiciones adicionales." },
      { "id": "fc2-62-3", "front": "En el ejercicio 3, ¿qué representan 1 y 2 en y=x+2?", "back": "1 es la pendiente de la tangente y 2 su ordenada al origen. La pendiente determina la derivada en el punto de tangencia." },
      { "id": "fc2-62-4", "front": "¿Qué condiciones de valor se usan en el ejercicio 2?", "back": "$f(1)=-1$ y $f(2)=-7$, porque ambos puntos pertenecen al gráfico de $f$." },
      { "id": "fc2-62-5", "front": "¿Qué condición de derivada aporta el máximo del ejercicio 4?", "back": "$f'(1)=0$. Además hay que satisfacer $f(1)=1$ y comprobar que el punto es un máximo." }
    ]
  },
  "10": {
    "quiz2": {
      "tf": [
        { "id": "tf2-10-1", "q": "La regla de L'Hôpital exige que el cociente de las derivadas tenga límite finito.", "a": true, "explain": "La tercera condición pide que exista $\\lim \\frac{f'(x)}{g'(x)} = l$ y que ese $l$ sea finito." },
        { "id": "tf2-10-2", "q": "Al aplicar la regla se deriva el cociente $\\frac{f}{g}$ usando la regla del cociente.", "a": false, "explain": "Se derivan numerador y denominador por separado. Usar la regla del cociente es el error más común del tema." },
        { "id": "tf2-10-3", "q": "El entorno donde se piden las hipótesis es un entorno reducido del punto $a$.", "a": true, "explain": "Reducido significa que se excluye el propio punto $a$: por eso no hace falta que $f$ y $g$ estén definidas ahí." },
        { "id": "tf2-10-4", "q": "Una indeterminación del tipo diferencia de infinitos se ataca sacando común denominador.", "a": true, "explain": "O bien sacando factor común y transformándola en producto de cero por infinito. Ambas rutas figuran en el apunte." },
        { "id": "tf2-10-5", "q": "El logaritmo aplicado a un límite exponencial devuelve directamente el valor buscado.", "a": false, "explain": "Devuelve el logaritmo del valor buscado: hay que exponenciar al final para recuperar $l$." }
      ],
      "mc": [
        {
          "id": "mc2-10-1",
          "q": "¿Qué transformación propone el apunte para un producto que tiende a cero por infinito?",
          "options": [
            "Aplicar logaritmo natural a los dos miembros",
            "Escribirlo como cociente invirtiendo uno de los factores",
            "Derivar los dos factores y multiplicar los resultados",
            "Sacar factor común y simplificar el numerador"
          ],
          "correctIndex": 1,
          "explain": "Se pasa a $\\frac{f(x)}{1/g(x)}$, que queda cero sobre cero, o a la variante que queda infinito sobre infinito."
        },
        {
          "id": "mc2-10-2",
          "q": "¿Cuántas veces autoriza el apunte a reiterar la derivación?",
          "options": [
            "Hasta dos veces como máximo, siempre",
            "Solo una vez, por definición del teorema",
            "Hasta el orden que haga falta si siguen las condiciones",
            "Tantas como el grado del denominador original"
          ],
          "correctIndex": 2,
          "explain": "La observación dice que se puede aplicar hasta el orden $n$ mientras se sigan cumpliendo las condiciones establecidas."
        },
        {
          "id": "mc2-10-3",
          "q": "¿Qué condición se pide sobre la derivada del denominador?",
          "options": [
            "Que sea distinta de cero en el entorno reducido",
            "Que sea positiva en todo el intervalo cerrado",
            "Que coincida con la derivada del numerador",
            "Que tenga límite igual a uno en el punto"
          ],
          "correctIndex": 0,
          "explain": "Es parte de la primera condición: $g'(x) \\neq 0$ en todo punto del entorno reducido de $a$."
        }
      ],
      "ms": [
        {
          "id": "ms2-10-1",
          "q": "¿Qué situaciones el apunte lleva a la forma de cociente antes de derivar?",
          "options": [
            "El producto de un infinitésimo por un infinito",
            "La diferencia entre dos infinitos del mismo signo",
            "Una potencia con base y exponente variables",
            "El cociente de dos infinitésimos en el punto",
            "La suma de dos funciones acotadas cualesquiera"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "El cociente de infinitésimos ya está en la forma buscada, no hay que transformarlo. Una suma de acotadas no genera indeterminación."
        },
        {
          "id": "ms2-10-2",
          "q": "¿Qué afirmaciones sobre el recíproco y los límites son correctas según el apunte?",
          "options": [
            "El recíproco del teorema no es válido en general",
            "Puede existir el límite del cociente de funciones",
            "Puede no existir el límite del cociente de derivadas",
            "El valor $l$ debe ser finito para aplicar la regla",
            "Si el cociente de derivadas no existe, tampoco el original"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "La última invierte la implicación: justamente el ejemplo del recíproco muestra que el original puede existir igual."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-10-1", "front": "Las tres hipótesis, en orden", "back": "Derivabilidad en entorno reducido con $g'(x) \\neq 0$; ambas funciones infinitésimas en $a$; existencia y finitud de $\\lim \\frac{f'(x)}{g'(x)}$." },
      { "id": "fc2-10-2", "front": "Error clásico al aplicar la regla", "back": "Derivar el cociente completo en lugar de derivar numerador y denominador por separado." },
      { "id": "fc2-10-3", "front": "Cero por infinito: la maniobra", "back": "Convertir el producto en cociente invirtiendo uno de los factores, para caer en cero sobre cero o infinito sobre infinito." },
      { "id": "fc2-10-4", "front": "Infinito menos infinito: las dos salidas", "back": "Sacar común denominador y transformar en cociente, o sacar factor común y transformar en cero por infinito." },
      { "id": "fc2-10-5", "front": "Formas exponenciales indeterminadas", "back": "$0^0$, $\\infty^0$ y $1^\\infty$: se toma logaritmo, queda $\\ln l = \\lim g(x)\\ln[f(x)]$, y al final hay que exponenciar." },
      { "id": "fc2-10-6", "front": "¿Qué significa entorno reducido?", "back": "El entorno del punto excluyendo el propio punto: por eso el valor de las funciones en $a$ es irrelevante para el límite." }
    ]
  },
  "11": {
    "quiz2": {
      "tf": [
        { "id": "tf2-11-1", "q": "El práctico incluye un ejercicio donde hay que detectar una aplicación incorrecta de la regla.", "a": true, "explain": "Es el ejercicio 2: se muestra una cadena de igualdades y hay que encontrar dónde se rompe la hipótesis." },
        { "id": "tf2-11-2", "q": "Hay una consigna que pide hallar dos parámetros reales para que un límite se anule.", "a": true, "explain": "El ejercicio 3 pide $a$ y $b$ tales que el cociente con seno de tres equis tienda a cero." },
        { "id": "tf2-11-3", "q": "Todos los límites del ejercicio 1 son de la forma cero sobre cero.", "a": false, "explain": "Hay productos, diferencias y potencias: los ítems h), i), j), k), l), m) y r) no son cocientes indeterminados directos." },
        { "id": "tf2-11-4", "q": "Una de las consignas involucra una función definida por dos ramas.", "a": true, "explain": "En realidad son dos: el ítem o) del ejercicio 1 y el ejercicio 6, ambos con función partida." },
        { "id": "tf2-11-5", "q": "El práctico termina pidiendo el gráfico completo de una función racional.", "a": false, "explain": "La última consigna pide únicamente dominio y asíntotas de un cociente con logaritmo en el denominador." }
      ],
      "mc": [
        {
          "id": "mc2-11-1",
          "q": "¿Qué datos adicionales aporta el enunciado del ejercicio 5?",
          "options": [
            "El dominio de la función y su conjunto imagen",
            "La continuidad de la función y dos valores puntuales",
            "Las asíntotas verticales y horizontales de la función",
            "La derivada segunda evaluada en el origen"
          ],
          "correctIndex": 1,
          "explain": "Se sabe que la función es continua y se conocen su valor y el de su derivada en menos uno."
        },
        {
          "id": "mc2-11-2",
          "q": "¿Qué se pide decidir en la anteúltima consigna del práctico?",
          "options": [
            "Si la función es continua y derivable en un punto",
            "Si la función tiene extremos en un intervalo cerrado",
            "Si el límite existe y coincide con el valor asignado",
            "Si la función es creciente en todo su dominio"
          ],
          "correctIndex": 0,
          "explain": "El ejercicio 6 pide analizar continuidad y derivabilidad de una función partida en el punto donde cambia de rama."
        },
        {
          "id": "mc2-11-3",
          "q": "¿Qué tipo de expresión aparece en el ejercicio 4 del práctico?",
          "options": [
            "Un cociente de polinomios de igual grado",
            "Una potencia cuyo exponente es la variable",
            "Una diferencia entre logaritmo y fracción",
            "Un producto entre seno y variable independiente"
          ],
          "correctIndex": 1,
          "explain": "Es una base racional elevada a la variable, con la incógnita adentro de la base: un caso de uno elevado a infinito."
        }
      ],
      "ms": [
        {
          "id": "ms2-11-1",
          "q": "¿Qué operaciones podés necesitar para resolver los ítems del ejercicio 1?",
          "options": [
            "Tomar logaritmo antes de derivar",
            "Convertir un producto en un cociente",
            "Sacar común denominador en una diferencia",
            "Derivar numerador y denominador varias veces",
            "Calcular la integral definida del integrando"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Todas menos la última: las integrales no intervienen en ningún ítem de este práctico."
        },
        {
          "id": "ms2-11-2",
          "q": "¿Qué consignas del práctico piden un número como respuesta final?",
          "options": [
            "La que pide los dos parámetros reales del cociente cúbico",
            "La que pide el valor de la base para que el límite valga nueve",
            "La que pide el límite con datos de una función continua",
            "La que pide dominio y asíntotas de un cociente con logaritmo",
            "La que pide detectar el error de una cadena de igualdades"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "Dominio y asíntotas son conjuntos y ecuaciones de rectas, y el ejercicio del error pide una explicación, no un valor."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-11-1", "front": "Ítems del ejercicio 1 que son cocientes directos", "back": "Del a) al g), más el n), p) y q): todos indeterminados cero sobre cero al reemplazar." },
      { "id": "fc2-11-2", "front": "Ítems del ejercicio 1 de tipo exponencial", "back": "El k), el l) y el m): base y exponente variables, hay que tomar logaritmo antes de derivar." },
      { "id": "fc2-11-3", "front": "Los dos ítems con función partida", "back": "El o) del ejercicio 1 y el ejercicio 6: en ambos hay que comparar el límite con el valor asignado en el punto." },
      { "id": "fc2-11-4", "front": "Qué pide el ejercicio del error", "back": "Detectar en qué paso de la cadena de igualdades se aplicó la regla sin que hubiera indeterminación." },
      { "id": "fc2-11-5", "front": "Datos del ejercicio con función genérica", "back": "Que la función es continua, y los valores de la función y de su derivada en menos uno." },
      { "id": "fc2-11-6", "front": "Última consigna del práctico", "back": "Hallar dominio y asíntotas de un cociente cuyo denominador es el logaritmo de un binomio lineal." }
    ]
  },
  "12": {
    "quiz2": {
      "tf": [
        { "id": "tf2-12-1", "q": "El documento de la cátedra desarrolla paso a paso el procedimiento de cada ejercicio.", "a": false, "explain": "Es una clave de resultados: entrega la respuesta final de cada ítem, sin desarrollo." },
        { "id": "tf2-12-2", "q": "La función racional del segundo ejercicio tiene un máximo relativo en abscisa cuatro.", "a": true, "explain": "La clave da el punto de abscisa cuatro y ordenada un cuarto como máximo relativo." },
        { "id": "tf2-12-3", "q": "Una de las funciones del primer ejercicio no tiene ningún extremo relativo.", "a": true, "explain": "La del ítem h) es decreciente en todo su dominio, por eso no presenta extremos." },
        { "id": "tf2-12-4", "q": "En el problema de optimización del envase la respuesta pide tres medidas.", "a": true, "explain": "La clave entrega tres dimensiones en metros para el tanque más económico." },
        { "id": "tf2-12-5", "q": "En el último ejercicio la función resulta cóncava negativa en todo el eje real.", "a": false, "explain": "Es cóncava negativa solo en un intervalo acotado y positiva en los dos rayos exteriores." }
      ],
      "mc": [
        {
          "id": "mc2-12-1",
          "q": "¿Qué relación cumplen las dimensiones halladas en el problema del tanque?",
          "options": [
            "El largo de la base duplica al ancho de la base",
            "La altura duplica al largo de la base",
            "Las tres dimensiones resultan iguales entre sí",
            "El ancho supera a la altura del recipiente"
          ],
          "correctIndex": 0,
          "explain": "Era la restricción del enunciado y la clave la respeta: seis y tres metros para largo y ancho."
        },
        {
          "id": "mc2-12-2",
          "q": "En el ejercicio del gimnasio, ¿qué representa el número que da la clave?",
          "options": [
            "El aumento en pesos sobre la cuota vigente",
            "La cantidad de socios que conserva el gimnasio",
            "El precio final de la cuota mensual",
            "El beneficio máximo obtenido por el gimnasio"
          ],
          "correctIndex": 2,
          "explain": "La respuesta es el precio de la cuota; el aumento óptimo es la diferencia con la cuota original de doscientos pesos."
        },
        {
          "id": "mc2-12-3",
          "q": "¿Qué clasificación da la clave para el extremo del tercer ejercicio?",
          "options": [
            "Un punto de inflexión con tangente horizontal",
            "Un máximo relativo estricto",
            "Un punto donde la derivada no existe",
            "Un mínimo relativo estricto"
          ],
          "correctIndex": 3,
          "explain": "La respuesta textual es el valor del parámetro seguido de la aclaración de que se trata de un mínimo."
        },
        {
          "id": "mc2-12-4",
          "q": "¿Cuántas abscisas de puntos de inflexión reporta la clave en el último ejercicio?",
          "options": ["Ninguna", "Una sola", "Dos", "Tres"],
          "correctIndex": 2,
          "explain": "Se informan dos abscisas, coherentes con los extremos del intervalo de concavidad negativa."
        }
      ],
      "ms": [
        {
          "id": "ms2-12-1",
          "q": "¿Qué información entrega la clave para la función racional del segundo ejercicio?",
          "options": [
            "Los dos puntos de intersección con los ejes",
            "La ecuación de la asíntota vertical",
            "La ecuación de la asíntota horizontal",
            "El máximo relativo con sus coordenadas",
            "Los puntos de inflexión de la curva"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El enunciado de ese ejercicio no pedía concavidad ni inflexiones, así que la clave tampoco los informa."
        },
        {
          "id": "ms2-12-2",
          "q": "¿Qué funciones del primer ejercicio presentan, según la clave, dos extremos relativos?",
          "options": [
            "La polinómica de cuarto grado",
            "La que multiplica la variable por una raíz cuadrada",
            "La racional con ocho en el numerador",
            "La exponencial con exponente cuadrático negativo",
            "El cociente de dos binomios lineales"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "Los ítems a), c) y e) tienen máximo y mínimo. La exponencial gaussiana tiene uno solo y el cociente lineal ninguno."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-12-1", "front": "Naturaleza del documento", "back": "Clave de resultados finales de la cátedra, sin desarrollo: sirve para verificar, no para aprender el procedimiento." },
      { "id": "fc2-12-2", "front": "Función racional del ejercicio dos", "back": "Corta al eje horizontal en abscisa tres, tiene asíntota vertical en dos, asíntota horizontal en el eje y máximo relativo en abscisa cuatro." },
      { "id": "fc2-12-3", "front": "Respuesta del problema del gimnasio", "back": "El precio de la cuota, no el aumento: el enunciado define la variable como incremento sobre la cuota vigente." },
      { "id": "fc2-12-4", "front": "Problema del tanque", "back": "Tres dimensiones en metros, con el largo de la base igual al doble del ancho, tal como exigía la restricción." },
      { "id": "fc2-12-5", "front": "Errata detectada en la clave", "back": "En la exponencial de exponente cuadrático negativo se informa mínimo donde en realidad hay máximo, y los intervalos de monotonía están invertidos." },
      { "id": "fc2-12-6", "front": "Ejercicio de lectura del gráfico de la derivada", "back": "La clave informa monotonía en tres intervalos, los intervalos que contienen cada extremo, la concavidad y las dos abscisas de inflexión." }
    ]
  },
  "13": {
    "quiz2": {
      "tf": [
        { "id": "tf2-13-1", "q": "La clave presenta el estudio completo de las ocho funciones en forma de listado de ítems.", "a": true, "explain": "Cada función lleva dominio, cortes, asíntotas, monotonía, extremos, concavidad, inflexiones y conjunto imagen." },
        { "id": "tf2-13-2", "q": "Ninguna de las ocho funciones del segundo ejercicio tiene asíntota oblicua.", "a": false, "explain": "La que suma la variable con su recíproca tiene asíntota oblicua coincidente con la bisectriz." },
        { "id": "tf2-13-3", "q": "En el ejercicio de intervalos la propia clave aclara que las respuestas no son únicas.", "a": true, "explain": "Hay una nota al pie explícita, porque se pedía proponer intervalos con cierta propiedad." },
        { "id": "tf2-13-4", "q": "El problema de recursos humanos se resuelve evaluando solo el punto crítico interior.", "a": false, "explain": "Es un extremo condicionado: hay que comparar el crítico interior con los dos bordes del intervalo de edades." },
        { "id": "tf2-13-5", "q": "La función exponencial con exponente racional resulta decreciente en todo su dominio.", "a": true, "explain": "La clave anota un guion en crecimiento y consigna que decrece en todo el dominio." }
      ],
      "mc": [
        {
          "id": "mc2-13-1",
          "q": "¿Qué patrón se repite en las asíntotas de las ocho funciones estudiadas?",
          "options": [
            "Todas tienen al menos una asíntota vertical",
            "Cuando hay horizontal no aparece oblicua, y viceversa",
            "Las polinómicas tienen asíntota oblicua siempre",
            "Ninguna función presenta más de una asíntota"
          ],
          "correctIndex": 1,
          "explain": "Es una consecuencia general: si el límite en infinito es finito no puede haber pendiente oblicua no nula."
        },
        {
          "id": "mc2-13-2",
          "q": "En el primer ejercicio, ¿qué relación tienen las pendientes de las rectas pedidas?",
          "options": [
            "Son iguales entre sí",
            "Son inversas pero del mismo signo",
            "Son opuestas e inversas entre sí",
            "Su producto es igual a la unidad"
          ],
          "correctIndex": 2,
          "explain": "Tangente y normal son perpendiculares, así que sus pendientes cumplen esa relación y su producto vale menos uno."
        },
        {
          "id": "mc2-13-3",
          "q": "En el ejercicio de la cúbica con restricción, ¿dónde cae el máximo condicionado?",
          "options": [
            "En el borde derecho del intervalo",
            "En el punto crítico interior",
            "En el borde izquierdo del intervalo",
            "En el punto de inflexión de la curva"
          ],
          "correctIndex": 0,
          "explain": "El máximo relativo queda fuera de la restricción, así que el mayor valor se alcanza en el extremo superior."
        },
        {
          "id": "mc2-13-4",
          "q": "¿Qué tipo de discontinuidad reporta la clave para la racional del primer ejercicio?",
          "options": ["Evitable", "De salto finito", "Esencial", "No hay discontinuidad"],
          "correctIndex": 2,
          "explain": "Es esencial porque hay asíntota vertical en ese punto: los límites laterales son infinitos."
        }
      ],
      "ms": [
        {
          "id": "ms2-13-1",
          "q": "¿Qué ítems informa la clave para cada una de las ocho funciones?",
          "options": [
            "Dominio y conjunto imagen",
            "Intersecciones con ambos ejes",
            "Intervalos de monotonía y extremos relativos",
            "Concavidad y puntos de inflexión",
            "Derivada tercera evaluada en el origen"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "La derivada tercera no aparece en ninguna de las tablas: el estudio completo no la incluye."
        },
        {
          "id": "ms2-13-2",
          "q": "¿Qué conclusiones se obtienen del gráfico de la derivada en el tercer ejercicio?",
          "options": [
            "Los intervalos de crecimiento y decrecimiento de la función",
            "La ubicación y el tipo de los dos extremos relativos",
            "Los intervalos de concavidad y convexidad",
            "La abscisa del punto de inflexión",
            "El conjunto imagen de la función original"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El conjunto imagen no se puede deducir del gráfico de la derivada: haría falta conocer los valores de la función."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-13-1", "front": "Estructura de la clave del segundo trabajo práctico", "back": "Ocho estudios completos en forma de lista, más lectura de gráfico, propuesta de intervalos, tres extremos condicionados y un problema aplicado." },
      { "id": "fc2-13-2", "front": "Regla de asíntotas que se repite", "back": "Si la función tiene asíntota horizontal no tiene oblicua, y si tiene oblicua no tiene horizontal." },
      { "id": "fc2-13-3", "front": "Rectas tangente y normal", "back": "Pasan por el mismo punto de la curva y sus pendientes son opuestas e inversas, con producto igual a menos uno." },
      { "id": "fc2-13-4", "front": "Extremo condicionado: qué hay que comparar", "back": "El valor en los puntos críticos interiores contra el valor en los dos extremos del intervalo de restricción." },
      { "id": "fc2-13-5", "front": "Errata detectada en la clave", "back": "El conjunto imagen de la función que suma la variable con su recíproca está copiado de otro ítem y menciona el número $e$, que ahí no interviene." },
      { "id": "fc2-13-6", "front": "Discontinuidad esencial", "back": "La que aparece cuando hay asíntota vertical: los límites laterales son infinitos y no se puede redefinir la función para salvarla." },
      { "id": "fc2-13-7", "front": "Problema del tiempo de reacción", "back": "Se busca el mínimo de una raíz cuadrada de trinomio en un intervalo cerrado de edades; el mínimo cae en el interior, no en los bordes." }
    ]
  },
  "14": {
    "quiz2": {
      "tf": [
        { "id": "tf2-14-1", "q": "La sustitución es la regla de la cadena leída en sentido inverso.", "a": true, "explain": "Se busca reconocer una función compuesta multiplicada por la derivada de la función interior." },
        { "id": "tf2-14-2", "q": "Después de integrar en la variable auxiliar se puede dejar el resultado sin deshacer el cambio.", "a": false, "explain": "Hay que volver a la variable original: el resultado debe estar expresado en función de la variable del enunciado." },
        { "id": "tf2-14-3", "q": "Cuando la función de tabla está compuesta con una lineal, la constante que aparece se saca fuera de la integral.", "a": true, "explain": "La derivada de una lineal es constante, y por propiedad las constantes salen del signo integral." },
        { "id": "tf2-14-4", "q": "El método sirve cuando el integrando se puede descomponer en una suma de términos inmediatos.", "a": false, "explain": "En ese caso no hace falta ningún método: se integra término a término directamente." },
        { "id": "tf2-14-5", "q": "El diferencial de la variable auxiliar se obtiene multiplicando la derivada por el diferencial original.", "a": true, "explain": "Es la definición de diferencial de una función que el apunte destaca en negrita." }
      ],
      "mc": [
        {
          "id": "mc2-14-1",
          "q": "¿Qué señal indica que conviene intentar sustitución?",
          "options": [
            "Que el integrando sea un cociente de polinomios",
            "Que aparezca una compuesta junto a la derivada de su interior",
            "Que haya un producto de exponencial por trigonométrica",
            "Que el numerador tenga grado mayor que el denominador"
          ],
          "correctIndex": 1,
          "explain": "Las otras tres señales apuntan a fracciones simples, a partes y a la división previa de polinomios."
        },
        {
          "id": "mc2-14-2",
          "q": "En el ejemplo con paréntesis elevado a la quinta, ¿qué queda tras el cambio de variable?",
          "options": [
            "Una potencia simple de la variable auxiliar",
            "Un cociente de dos polinomios en la variable auxiliar",
            "Un producto de logaritmo por potencia",
            "Una función trigonométrica compuesta"
          ],
          "correctIndex": 0,
          "explain": "Queda la variable auxiliar elevada a la quinta, que se integra por la regla de la potencia."
        },
        {
          "id": "mc2-14-3",
          "q": "¿Por qué en el ejemplo del coseno aparece un tercio multiplicando el resultado?",
          "options": [
            "Porque la primitiva del coseno lleva ese factor",
            "Porque el argumento tiene término independiente igual a cuatro",
            "Porque el diferencial original queda dividido por la pendiente",
            "Porque se aplicó el método dos veces seguidas"
          ],
          "correctIndex": 2,
          "explain": "Al derivar el argumento lineal aparece un tres, y al despejar el diferencial original queda dividiendo."
        }
      ],
      "ms": [
        {
          "id": "ms2-14-1",
          "q": "¿Qué pasos incluye una resolución por sustitución?",
          "options": [
            "Elegir la función interior como variable auxiliar",
            "Calcular el diferencial de esa variable auxiliar",
            "Reescribir toda la integral en la nueva variable",
            "Deshacer el cambio al final del cálculo",
            "Igualar coeficientes entre dos numeradores"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Igualar coeficientes entre numeradores es un paso del método de fracciones simples."
        },
        {
          "id": "ms2-14-2",
          "q": "¿Qué integrandos son buenos candidatos para este método?",
          "options": [
            "Una compuesta multiplicada por la derivada de su interior",
            "Un cociente donde el numerador es la derivada del denominador",
            "Una función de tabla compuesta con una lineal",
            "Una potencia de binomio multiplicada por la derivada del binomio",
            "Un producto de polinomio por exponencial sin relación entre ellos"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El último caso es el típico de integración por partes: ninguno de los factores es derivada del otro."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-14-1", "front": "Idea central del método", "back": "Reconocer una función compuesta acompañada de la derivada de su interior, y llamar variable auxiliar a esa función interior." },
      { "id": "fc2-14-2", "front": "Los cuatro pasos", "back": "Elegir la variable auxiliar, calcular su diferencial, reescribir toda la integral en la nueva variable, y deshacer el cambio al terminar." },
      { "id": "fc2-14-3", "front": "Caso de la compuesta con una lineal", "back": "Se sustituye la lineal; su derivada es constante y queda dividiendo, así que se saca fuera del signo integral." },
      { "id": "fc2-14-4", "front": "Señal de que la sustitución no sirve", "back": "Que el producto tenga dos factores sin ninguna relación de derivada entre ellos: ahí corresponde integrar por partes." },
      { "id": "fc2-14-5", "front": "Cociente con numerador igual a la derivada del denominador", "back": "Sale por sustitución y da un logaritmo del denominador, eventualmente con una constante multiplicando." },
      { "id": "fc2-14-6", "front": "Verificación de cualquier integral indefinida", "back": "Derivar el resultado obtenido: tiene que reaparecer exactamente el integrando de partida." }
    ]
  },
  "15": {
    "quiz2": {
      "tf": [
        { "id": "tf2-15-1", "q": "En la fórmula del método aparece una resta entre un producto y una nueva integral.", "a": true, "explain": "El producto de los dos factores elegidos menos la integral del segundo por el diferencial del primero." },
        { "id": "tf2-15-2", "q": "Conviene elegir los factores de modo que la nueva integral resulte más complicada.", "a": false, "explain": "Todo lo contrario: la nueva integral debe ser más simple, o al menos de complejidad equivalente." },
        { "id": "tf2-15-3", "q": "Una integral con un solo factor visible nunca se puede resolver por este método.", "a": false, "explain": "Se toma el diferencial de la variable como segundo factor: así se integran el logaritmo y el arco tangente." },
        { "id": "tf2-15-4", "q": "Cuando la integral original reaparece en el desarrollo, se agrupan los términos y se despeja.", "a": true, "explain": "Es la maniobra de las integrales cíclicas: aparece dos veces y se pasa todo al primer miembro." },
        { "id": "tf2-15-5", "q": "Con un polinomio de segundo grado alcanza con aplicar el método una sola vez.", "a": false, "explain": "Cada aplicación baja el grado en una unidad, así que hacen falta dos pasadas para eliminarlo." }
      ],
      "mc": [
        {
          "id": "mc2-15-1",
          "q": "¿Qué caracteriza a los integrandos que piden este método?",
          "options": [
            "Ser un cociente de polinomios factorizable",
            "Ser una compuesta con su derivada al lado",
            "Ser un producto donde ninguno es derivada del otro",
            "Ser una suma de términos de tabla"
          ],
          "correctIndex": 2,
          "explain": "Justamente esa ausencia de relación de derivada es lo que descarta el método de sustitución."
        },
        {
          "id": "mc2-15-2",
          "q": "En el caso de exponencial multiplicada por trigonométrica, ¿qué ocurre?",
          "options": [
            "La nueva integral coincide con la original y se despeja",
            "El grado del polinomio se reduce en cada paso",
            "El integrando se descompone en fracciones simples",
            "La sustitución lineal resuelve el problema"
          ],
          "correctIndex": 0,
          "explain": "Tras dos aplicaciones reaparece la integral de partida, se agrupa y se despeja dividiendo por dos."
        },
        {
          "id": "mc2-15-3",
          "q": "Para integrar un logaritmo solo, ¿qué elección se hace?",
          "options": [
            "El logaritmo como segundo factor y la unidad como primero",
            "El logaritmo como primer factor y el diferencial como segundo",
            "Se sustituye el argumento del logaritmo por una variable auxiliar",
            "Se descompone el logaritmo en suma de logaritmos simples"
          ],
          "correctIndex": 1,
          "explain": "Al derivar el logaritmo aparece un cociente que se simplifica con la primitiva del diferencial."
        },
        {
          "id": "mc2-15-4",
          "q": "En el ejemplo del arco tangente, ¿cómo se resuelve la integral que queda?",
          "options": [
            "Aplicando otra vez integración por partes",
            "Descomponiendo en fracciones simples",
            "Mediante una sustitución que da un logaritmo",
            "Reconociéndola directamente en la tabla"
          ],
          "correctIndex": 2,
          "explain": "Se sustituye el denominador y aparece un logaritmo con coeficiente un medio."
        }
      ],
      "ms": [
        {
          "id": "ms2-15-1",
          "q": "¿Qué patrones de integrando resuelve este método?",
          "options": [
            "Polinomio multiplicado por exponencial",
            "Polinomio multiplicado por función trigonométrica",
            "Logaritmo o función arco en soledad",
            "Exponencial multiplicada por función trigonométrica",
            "Cociente con numerador igual a la derivada del denominador"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El último patrón es el caso más limpio de sustitución y no requiere partes."
        },
        {
          "id": "ms2-15-2",
          "q": "¿Qué es cierto sobre la elección de los dos factores?",
          "options": [
            "El que se deriva conviene que se simplifique al derivarlo",
            "El que se integra conviene que tenga primitiva conocida",
            "La nueva integral debe ser más simple que la original",
            "Un polinomio suele ser buen candidato a derivarse",
            "La exponencial siempre debe ser el factor que se deriva"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "La exponencial suele ir del lado que se integra, porque su primitiva es igual de simple que ella misma."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-15-1", "front": "Cuándo aplicar integración por partes", "back": "Cuando el integrando es un producto de dos funciones y ninguna de ellas es la derivada de la otra." },
      { "id": "fc2-15-2", "front": "Criterio de elección de los factores", "back": "Que la integral resultante sea más simple de resolver, o al menos de la misma complejidad que la de partida." },
      { "id": "fc2-15-3", "front": "Truco del diferencial como segundo factor", "back": "Permite integrar funciones solitarias como el logaritmo natural y el arco tangente, tomándolas como el factor que se deriva." },
      { "id": "fc2-15-4", "front": "Integrales cíclicas", "back": "Exponencial por trigonométrica: tras dos aplicaciones reaparece la integral original, se agrupa en el primer miembro y se despeja." },
      { "id": "fc2-15-5", "front": "Cuántas veces aplicar con un polinomio", "back": "Tantas veces como indique el grado del polinomio, porque cada pasada lo reduce en una unidad." },
      { "id": "fc2-15-6", "front": "Método mixto", "back": "Es habitual que la integral que queda tras aplicar partes se resuelva por sustitución, como en el caso del arco tangente." }
    ]
  },
  "16": {
    "quiz2": {
      "tf": [
        { "id": "tf2-16-1", "q": "Antes de descomponer hay que comparar los grados del numerador y del denominador.", "a": true, "explain": "Si el de arriba es mayor o igual, primero se divide y se separa el cociente del resto." },
        { "id": "tf2-16-2", "q": "El curso trabaja también con denominadores de raíces complejas.", "a": false, "explain": "El apunte aclara que solo se analizan denominadores con raíces reales, simples o múltiples." },
        { "id": "tf2-16-3", "q": "Un factor elevado al cuadrado aporta dos fracciones a la descomposición.", "a": true, "explain": "Tantos términos como indique el grado del factor, con el mismo factor elevado a potencias sucesivas." },
        { "id": "tf2-16-4", "q": "Los coeficientes se obtienen evaluando la igualdad de numeradores en las raíces del denominador.", "a": true, "explain": "Cada raíz anula casi todos los términos y deja despejado un coeficiente por vez." },
        { "id": "tf2-16-5", "q": "Todas las fracciones simples se integran dando logaritmos.", "a": false, "explain": "Las que tienen denominador elevado a una potencia mayor que uno dan potencias negativas, no logaritmos." }
      ],
      "mc": [
        {
          "id": "mc2-16-1",
          "q": "¿Cuál es el primer paso del método en el caso de raíces simples?",
          "options": [
            "Factorizar el denominador del integrando",
            "Derivar numerador y denominador por separado",
            "Sustituir el denominador por una variable auxiliar",
            "Dividir el numerador entre el denominador"
          ],
          "correctIndex": 0,
          "explain": "Sin la factorización no se sabe cuántas fracciones simples hay que plantear ni con qué denominadores."
        },
        {
          "id": "mc2-16-2",
          "q": "Si el grado de arriba supera al de abajo, ¿qué se obtiene tras dividir?",
          "options": [
            "Un producto de dos polinomios de menor grado",
            "Un cociente polinómico más un resto sobre el denominador",
            "Una suma de fracciones con denominador de grado uno",
            "Una función compuesta con su derivada al lado"
          ],
          "correctIndex": 1,
          "explain": "Después se integra el polinomio término a término y el resto se trata como el caso anterior."
        },
        {
          "id": "mc2-16-3",
          "q": "¿Por qué conviene evaluar en las raíces del denominador?",
          "options": [
            "Porque así se simplifica el integrando original",
            "Porque el numerador se anula automáticamente",
            "Porque se cancelan casi todos los coeficientes desconocidos",
            "Porque permite verificar el resultado final"
          ],
          "correctIndex": 2,
          "explain": "Cada raíz anula los términos que la contienen como factor y deja una ecuación con una sola incógnita."
        },
        {
          "id": "mc2-16-4",
          "q": "Cuando un factor está al cuadrado, ¿por qué a veces hace falta un valor auxiliar?",
          "options": [
            "Porque hay más incógnitas que raíces distintas",
            "Porque las raíces múltiples no anulan ningún término",
            "Porque el numerador tiene grado demasiado alto",
            "Porque la integral resultante no es de tabla"
          ],
          "correctIndex": 0,
          "explain": "Con dos raíces distintas y tres incógnitas hace falta una ecuación más, que se consigue evaluando en cualquier otro valor."
        }
      ],
      "ms": [
        {
          "id": "ms2-16-1",
          "q": "¿Qué formas pueden tomar los términos del resultado final?",
          "options": [
            "Logaritmos naturales del valor absoluto de binomios lineales",
            "Potencias negativas de binomios lineales",
            "Términos polinómicos si hubo división previa",
            "Constantes multiplicando cada logaritmo",
            "Funciones trigonométricas inversas"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Las trigonométricas inversas aparecen con denominadores irreducibles de segundo grado, caso excluido de este curso."
        },
        {
          "id": "ms2-16-2",
          "q": "¿Qué erratas presenta el apunte en este tema?",
          "options": [
            "Dice radicando donde corresponde decir integrando",
            "Repite los valores de reemplazo del ejemplo anterior",
            "Escribe un denominador incompleto en un paso intermedio",
            "Omite el divisor dos en la primitiva de la variable",
            "Confunde el signo de todos los logaritmos"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Los signos de los logaritmos están bien; el error del último ejemplo es haber escrito la primitiva de la variable sin dividir por dos."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-16-1", "front": "Chequeo previo obligatorio", "back": "Comparar grados: si el numerador tiene grado mayor o igual que el denominador, primero se divide." },
      { "id": "fc2-16-2", "front": "Cuántas fracciones plantear", "back": "Una por cada factor del denominador, y si un factor está elevado, tantas como indique su exponente." },
      { "id": "fc2-16-3", "front": "Cómo hallar los coeficientes", "back": "Igualando numeradores y evaluando en las raíces del denominador; si faltan ecuaciones, se evalúa en un valor auxiliar cualquiera." },
      { "id": "fc2-16-4", "front": "Qué da cada tipo de fracción al integrar", "back": "Denominador de grado uno da logaritmo del valor absoluto; denominador elevado da potencia negativa." },
      { "id": "fc2-16-5", "front": "Alcance del método en el curso", "back": "Solo denominadores con raíces reales, simples o múltiples: los factores cuadráticos irreducibles quedan fuera." },
      { "id": "fc2-16-6", "front": "Estructura tras la división de polinomios", "back": "El integrando queda como cociente polinómico más resto sobre denominador, y se integra por la propiedad de la suma." }
    ]
  },
  "17": {
    "quiz2": {
      "tf": [
        { "id": "tf2-17-1", "q": "El práctico organiza las integrales por método, salvo el último ejercicio.", "a": true, "explain": "Los tres primeros ejercicios asignan método; el cuarto pide elegir el más conveniente." },
        { "id": "tf2-17-2", "q": "La entrega obligatoria abarca un ítem de cada uno de los tres primeros ejercicios.", "a": true, "explain": "Uno de sustitución, uno de partes y uno de fracciones simples." },
        { "id": "tf2-17-3", "q": "Los tres primeros ejercicios tienen distinta cantidad de ítems entre sí.", "a": false, "explain": "Los tres tienen siete ítems cada uno; el cuarto tiene cuatro." },
        { "id": "tf2-17-4", "q": "En el ejercicio de partes hay al menos un integrando con un único factor visible.", "a": true, "explain": "Aparecen tanto el logaritmo de un binomio cuadrático como el arco tangente, ambos solos." },
        { "id": "tf2-17-5", "q": "Ninguno de los denominadores del tercer ejercicio tiene factores repetidos.", "a": false, "explain": "Varios ítems llevan un binomio elevado al cuadrado en el denominador." }
      ],
      "mc": [
        {
          "id": "mc2-17-1",
          "q": "¿Qué tienen en común los tres ítems de entrega obligatoria?",
          "options": [
            "Todos son cocientes de polinomios",
            "Todos aparecen sin respuesta en la clave de la cátedra",
            "Todos se resuelven por el mismo método",
            "Todos son los primeros ítems de su ejercicio"
          ],
          "correctIndex": 1,
          "explain": "La clave los deja con una línea de guiones, precisamente porque hay que entregarlos resueltos."
        },
        {
          "id": "mc2-17-2",
          "q": "¿Cuántas integrales trae el práctico en total?",
          "options": ["Dieciocho", "Veintiuna", "Veinticinco", "Veintiocho"],
          "correctIndex": 2,
          "explain": "Siete más siete más siete de los ejercicios con método asignado, más cuatro del ejercicio libre."
        },
        {
          "id": "mc2-17-3",
          "q": "En el último ejercicio, ¿cuál es la dificultad agregada?",
          "options": [
            "Los integrandos son más largos que en el resto",
            "Hay que justificar cada paso por escrito",
            "Hay que decidir qué método corresponde a cada uno",
            "Hay que resolverlos sin usar tabla de primitivas"
          ],
          "correctIndex": 2,
          "explain": "La consigna dice explícitamente por el método más conveniente, sin indicar cuál es."
        }
      ],
      "ms": [
        {
          "id": "ms2-17-1",
          "q": "¿Qué señales del ejercicio de sustitución conviene buscar?",
          "options": [
            "Un numerador proporcional a la derivada del denominador",
            "Una raíz cuadrada cuyo radicando tiene derivada presente",
            "Un logaritmo acompañado del recíproco de la variable",
            "Una potencia de binomio junto a la derivada del binomio",
            "Un producto de polinomio por función trigonométrica"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El último patrón corresponde al ejercicio de integración por partes."
        },
        {
          "id": "ms2-17-2",
          "q": "¿Qué estrategias sirven para los ítems del ejercicio de método libre?",
          "options": [
            "Sustituir cuando aparece coseno junto a logaritmo de seno",
            "Separar una fracción en dos integrales de tabla",
            "Sustituir la exponencial y luego descomponer en fracciones simples",
            "Reescribir un cociente trigonométrico como suma de dos términos",
            "Descomponer un polinomio de grado uno en fracciones simples"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Un polinomio de grado uno no es un cociente: no hay nada que descomponer en fracciones simples."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-17-1", "front": "Organización del práctico", "back": "Tres ejercicios de siete integrales con método asignado (sustitución, partes y fracciones simples) más uno de cuatro integrales de método libre." },
      { "id": "fc2-17-2", "front": "Cómo identificar la entrega obligatoria", "back": "Son los tres ítems que la clave de resultados deja con guiones en lugar de respuesta: uno de cada uno de los tres primeros ejercicios." },
      { "id": "fc2-17-3", "front": "Pistas para el ejercicio de sustitución", "back": "Buscar si la derivada de lo que está dentro de la raíz, del paréntesis o del logaritmo aparece multiplicando." },
      { "id": "fc2-17-4", "front": "Pistas para el ejercicio de partes", "back": "Polinomio por exponencial o por trigonométrica, y funciones solitarias como logaritmo o arco tangente." },
      { "id": "fc2-17-5", "front": "Pistas para el ejercicio de fracciones simples", "back": "Factorizar siempre el denominador primero y fijarse si hay factores repetidos, que exigen términos adicionales." },
      { "id": "fc2-17-6", "front": "Ejercicio de método libre: la clave", "back": "Antes de calcular, clasificar: si hay compuesta con derivada al lado va sustitución, si es cociente de polinomios van fracciones simples, y si es producto sin relación va partes." }
    ]
  },
  "18": {
    "quiz2": {
      "tf": [
        { "id": "tf2-18-1", "q": "Toda primitiva de la clave se puede verificar derivándola.", "a": true, "explain": "Es la ventaja de las integrales indefinidas: la verificación es mecánica y no depende de la clave." },
        { "id": "tf2-18-2", "q": "Los resultados del ejercicio de fracciones simples son todos combinaciones de logaritmos.", "a": false, "explain": "Tres de ellos incluyen además un término racional, aporte de los factores repetidos del denominador." },
        { "id": "tf2-18-3", "q": "El resultado del arco tangente coincide con el ejemplo desarrollado en el apunte.", "a": true, "explain": "Es la misma integral, así que la primitiva es idéntica en ambos documentos." },
        { "id": "tf2-18-4", "q": "La clave resuelve todos los ítems del práctico sin excepción.", "a": false, "explain": "Deja tres en blanco a propósito: son los de entrega obligatoria." },
        { "id": "tf2-18-5", "q": "Un resultado con logaritmo de una diferencia de exponenciales sale de sustituir la exponencial.", "a": true, "explain": "Al llamar variable auxiliar a la exponencial, el denominador queda como trinomio factorizable." }
      ],
      "mc": [
        {
          "id": "mc2-18-1",
          "q": "¿Qué origina el término racional en algunos resultados de fracciones simples?",
          "options": [
            "La presencia de un factor repetido en el denominador",
            "Que el numerador tenga grado mayor al denominador",
            "Que se haya aplicado integración por partes",
            "Que el denominador tenga raíces complejas"
          ],
          "correctIndex": 0,
          "explain": "La fracción con denominador elevado al cuadrado integra dando una potencia negativa, no un logaritmo."
        },
        {
          "id": "mc2-18-2",
          "q": "En el resultado del cociente con potencia sexta en el denominador, ¿de dónde sale el coeficiente fraccionario?",
          "options": [
            "De aplicar dos veces integración por partes",
            "De que la derivada del denominador es múltiplo del numerador",
            "De descomponer el denominador en fracciones simples",
            "De la constante de integración del método"
          ],
          "correctIndex": 1,
          "explain": "El numerador entra un número entero de veces en la derivada del denominador, y ese factor queda invertido delante del logaritmo."
        },
        {
          "id": "mc2-18-3",
          "q": "¿Qué forma tiene el resultado de integrar una potencia por un logaritmo?",
          "options": [
            "Un único logaritmo con coeficiente fraccionario",
            "Una potencia por logaritmo menos otra potencia sola",
            "Una suma de dos logaritmos de distinto argumento",
            "Un producto de exponencial por polinomio"
          ],
          "correctIndex": 1,
          "explain": "Sale de aplicar partes tomando el logaritmo como factor a derivar: queda el producto menos la integral de una potencia simple."
        },
        {
          "id": "mc2-18-4",
          "q": "¿Qué conviene hacer con un resultado de la clave que parece dudoso?",
          "options": [
            "Aceptarlo porque es material oficial de la cátedra",
            "Descartar el ejercicio y pasar al siguiente",
            "Derivarlo y comparar con el integrando original",
            "Consultar el resultado en otro trabajo práctico"
          ],
          "correctIndex": 2,
          "explain": "La derivación es la verificación definitiva y no requiere ninguna fuente externa."
        }
      ],
      "ms": [
        {
          "id": "ms2-18-1",
          "q": "¿Qué métodos se reconocen en los resultados del ejercicio de método libre?",
          "options": [
            "Sustitución seguida de integración por partes",
            "Separación de una fracción en dos integrales inmediatas",
            "Reescritura de un cociente trigonométrico como suma",
            "Sustitución seguida de descomposición en fracciones simples",
            "División de polinomios previa a la integración"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Ningún ítem de ese ejercicio requiere dividir polinomios: no hay cocientes con numerador de grado mayor."
        },
        {
          "id": "ms2-18-2",
          "q": "¿Qué observaciones vale la pena tener presentes sobre esta clave?",
          "options": [
            "Hay signos que conviene verificar derivando",
            "Hay un coeficiente que no coincide con la sustitución natural",
            "Hay un argumento de arco tangente que resulta sospechoso",
            "Los tres ítems obligatorios están sin resolver",
            "Todos los resultados omiten la constante de integración"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "La constante aparece explícitamente en todos los resultados publicados."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-18-1", "front": "Verificación de una primitiva", "back": "Derivar el resultado: si reaparece el integrando original, la primitiva es correcta, sin importar qué diga la clave." },
      { "id": "fc2-18-2", "front": "Cuándo aparece un término racional", "back": "Cuando el denominador tenía un factor elevado al cuadrado: esa fracción integra dando potencia negativa." },
      { "id": "fc2-18-3", "front": "Cociente con derivada del denominador en el numerador", "back": "Da el logaritmo del denominador multiplicado por el recíproco del factor de proporcionalidad." },
      { "id": "fc2-18-4", "front": "Potencia por logaritmo", "back": "Se integra por partes derivando el logaritmo: queda potencia por logaritmo menos una potencia sola con denominador mayor." },
      { "id": "fc2-18-5", "front": "Cociente con exponenciales en el denominador", "back": "Se sustituye la exponencial, queda un trinomio de segundo grado y se descompone en fracciones simples." },
      { "id": "fc2-18-6", "front": "Ítems que la clave deja en blanco", "back": "Los tres de entrega obligatoria, uno por cada uno de los tres primeros ejercicios." }
    ]
  },
  "19": {
    "quiz2": {
      "tf": [
        { "id": "tf2-19-1", "q": "El resultado de una integral definida es un número, no una familia de funciones.", "a": true, "explain": "A diferencia de la indefinida, la definida devuelve un valor real cuya interpretación depende de la función." },
        { "id": "tf2-19-2", "q": "La constante de integración influye en el valor de una integral definida.", "a": false, "explain": "Se cancela al restar la primitiva en los dos extremos, así que no afecta el resultado." },
        { "id": "tf2-19-3", "q": "La aproximación por rectángulos mejora al aumentar la cantidad de subdivisiones.", "a": true, "explain": "El apunte lo señala explícitamente antes de introducir el paso al límite." },
        { "id": "tf2-19-4", "q": "La regla de Barrow exige que la función sea continua en el intervalo cerrado.", "a": true, "explain": "Es la hipótesis del enunciado, junto con disponer de una primitiva de la función." },
        { "id": "tf2-19-5", "q": "El concepto de integral definida nació para calcular derivadas de funciones compuestas.", "a": false, "explain": "Nació para calcular áreas de recintos limitados por contornos curvos, donde base por altura no alcanza." }
      ],
      "mc": [
        {
          "id": "mc2-19-1",
          "q": "¿Qué operación convierte la suma de áreas de rectángulos en una integral?",
          "options": [
            "Derivar respecto de la cantidad de rectángulos",
            "Tomar límite cuando las bases tienden a cero",
            "Multiplicar por la longitud total del intervalo",
            "Promediar las alturas de todos los rectángulos"
          ],
          "correctIndex": 1,
          "explain": "Ese paso al límite es lo que hace que la aproximación se vuelva exactamente igual al área."
        },
        {
          "id": "mc2-19-2",
          "q": "¿Cómo se llama el intervalo que separa los dos límites de una integral definida?",
          "options": [
            "Intervalo de integración",
            "Entorno reducido del integrando",
            "Dominio de la primitiva",
            "Recorrido de la variable auxiliar"
          ],
          "correctIndex": 0,
          "explain": "El extremo izquierdo es el límite inferior y el derecho el superior, y ambos delimitan el intervalo de integración."
        },
        {
          "id": "mc2-19-3",
          "q": "¿Qué magnitudes menciona el apunte como posibles interpretaciones de una integral?",
          "options": [
            "Solamente áreas de figuras planas",
            "Áreas y volúmenes de cuerpos de revolución",
            "Energía calórica, velocidad, masa y bits, entre otras",
            "Pendientes de rectas tangentes y normales"
          ],
          "correctIndex": 2,
          "explain": "El apunte insiste en que reducirla al área bajo la curva da muy poca idea de su utilidad real."
        },
        {
          "id": "mc2-19-4",
          "q": "Según la regla de Barrow, ¿en qué orden se restan los valores de la primitiva?",
          "options": [
            "Extremo inferior menos extremo superior",
            "Extremo superior menos extremo inferior",
            "Se suman ambos y se divide por dos",
            "Se toma el valor absoluto de la diferencia"
          ],
          "correctIndex": 1,
          "explain": "Invertir el orden cambia el signo del resultado, que es justamente lo que dice la propiedad de intercambio de límites."
        }
      ],
      "ms": [
        {
          "id": "ms2-19-1",
          "q": "¿Qué elementos intervienen en la construcción de la integral como límite de sumas?",
          "options": [
            "Una partición del intervalo en subintervalos",
            "Un punto interior elegido en cada subintervalo",
            "La imagen de la función en cada punto elegido",
            "El producto de cada base por su altura correspondiente",
            "La derivada de la función en cada subintervalo"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "La derivada no interviene en la definición: aparece recién con la regla de Barrow, al buscar una primitiva."
        },
        {
          "id": "ms2-19-2",
          "q": "¿Qué aplicaciones de la integral definida enumera el apunte?",
          "options": [
            "Volumen sanguíneo bombeado en cierto tiempo",
            "Distancia recorrida a partir de la velocidad",
            "Cálculo de probabilidades como la de extinción de una especie",
            "Excedentes del consumidor y del productor",
            "Clasificación de puntos críticos de una función"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Clasificar puntos críticos es una aplicación de las derivadas, no de la integral definida."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-19-1", "front": "Diferencia esencial con la integral indefinida", "back": "La indefinida devuelve una familia de funciones; la definida devuelve un número real." },
      { "id": "fc2-19-2", "front": "Construcción del concepto en tres pasos", "back": "Aproximar el recinto con rectángulos, sumar sus áreas, y tomar límite cuando las bases tienden a cero." },
      { "id": "fc2-19-3", "front": "Nombres de los elementos", "back": "Límite inferior, límite superior, intervalo de integración e integrando; la variable de integración la indica el diferencial." },
      { "id": "fc2-19-4", "front": "Enunciado de la regla de Barrow", "back": "Con la función continua en el intervalo cerrado y conocida una primitiva, la integral vale la primitiva en el extremo superior menos la primitiva en el inferior." },
      { "id": "fc2-19-5", "front": "Qué pasa con la constante de integración", "back": "Se cancela al restar, así que no hace falta arrastrarla en el cálculo de una integral definida." },
      { "id": "fc2-19-6", "front": "Por qué la integral no es sinónimo de área", "back": "El área es una interpretación posible y solo vale cuando la función es positiva; en general el número puede representar distancia, masa, energía u otras magnitudes." }
    ]
  },
  "20": {
    "quiz2": {
      "tf": [
        { "id": "tf2-20-1", "q": "Una constante multiplicativa puede salir fuera del signo integral.", "a": true, "explain": "Es la primera propiedad enunciada, análoga a la que vale para integrales indefinidas." },
        { "id": "tf2-20-2", "q": "La integral de un producto es igual al producto de las integrales.", "a": false, "explain": "No existe tal propiedad: solo valen la del múltiplo constante y la de la suma." },
        { "id": "tf2-20-3", "q": "Un área calculada correctamente nunca puede dar un valor negativo.", "a": true, "explain": "Por eso cuando la función está por debajo del eje se toma el opuesto o el valor absoluto de la integral." },
        { "id": "tf2-20-4", "q": "Para el área entre dos curvas hay que hallar antes sus puntos de intersección.", "a": true, "explain": "Esos puntos son los límites de integración del recinto encerrado entre ambas." },
        { "id": "tf2-20-5", "q": "Si una función cambia de signo dentro del intervalo, alcanza con integrar de extremo a extremo.", "a": false, "explain": "Los tramos de distinto signo se cancelan parcialmente: hay que partir en los ceros y tratarlos por separado." }
      ],
      "mc": [
        {
          "id": "mc2-20-1",
          "q": "¿Qué propiedad habilita a partir el intervalo en los ceros de la función?",
          "options": [
            "La que anula la integral cuando ambos límites coinciden",
            "La que permite sacar constantes fuera del signo",
            "La aditividad respecto de un punto interior del intervalo",
            "La que invierte el signo al permutar los límites"
          ],
          "correctIndex": 2,
          "explain": "Es la que descompone la integral en la suma de dos integrales usando un punto intermedio."
        },
        {
          "id": "mc2-20-2",
          "q": "Al calcular el área entre dos curvas, ¿en qué orden se restan?",
          "options": [
            "La de menor ordenada menos la de mayor ordenada",
            "La de mayor ordenada menos la de menor ordenada",
            "Siempre en el orden en que aparecen en el enunciado",
            "En cualquier orden, porque el resultado no cambia"
          ],
          "correctIndex": 1,
          "explain": "Si se hace al revés el resultado sale negativo, señal inequívoca de que hay que permutarlas."
        },
        {
          "id": "mc2-20-3",
          "q": "¿Qué representa el opuesto de una integral cuando la función es negativa?",
          "options": [
            "El área del recinto entre la curva y el eje horizontal",
            "El perímetro del recinto sombreado",
            "La longitud del intervalo de integración",
            "El valor medio de la función en el intervalo"
          ],
          "correctIndex": 0,
          "explain": "También se puede escribir como el valor absoluto de la integral: ambas expresiones dan lo mismo."
        },
        {
          "id": "mc2-20-4",
          "q": "¿Cuánto vale la integral cuando los dos límites son iguales?",
          "options": ["Uno", "Cero", "El valor de la función en ese punto", "No está definida"],
          "correctIndex": 1,
          "explain": "El intervalo tiene longitud nula, así que no hay área que acumular."
        }
      ],
      "ms": [
        {
          "id": "ms2-20-1",
          "q": "¿Qué pasos hay que dar para calcular el área de una región que cruza el eje horizontal?",
          "options": [
            "Hallar los ceros de la función dentro del intervalo",
            "Partir la integral en esos puntos de corte",
            "Cambiar de signo los tramos donde la función es negativa",
            "Sumar los valores obtenidos en cada tramo",
            "Promediar los resultados parciales de cada tramo"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Los aportes se suman, nunca se promedian: cada tramo aporta su área completa."
        },
        {
          "id": "ms2-20-2",
          "q": "¿Qué casos de cálculo de área distingue el apunte?",
          "options": [
            "Función positiva en todo el intervalo",
            "Función negativa en todo el intervalo",
            "Función que toma valores de ambos signos",
            "Región encerrada entre dos curvas",
            "Región con uno de los límites infinito"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Los límites infinitos corresponden a integrales impropias, que son tema de otra unidad."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-20-1", "front": "Las cinco propiedades, en una línea", "back": "Múltiplo constante, suma de funciones, integral nula con límites iguales, cambio de signo al permutar límites, y aditividad respecto de un punto interior." },
      { "id": "fc2-20-2", "front": "Regla de oro del cálculo de áreas", "back": "El área nunca es negativa: si la función está debajo del eje se toma el opuesto o el valor absoluto de la integral." },
      { "id": "fc2-20-3", "front": "Procedimiento cuando la función cambia de signo", "back": "Hallar los ceros dentro del intervalo, partir la integral ahí, cambiar de signo los tramos negativos y sumar todo." },
      { "id": "fc2-20-4", "front": "Área entre dos curvas: los dos pasos previos", "back": "Hallar los puntos de intersección, que son los límites de integración, y decidir cuál de las dos funciones va arriba." },
      { "id": "fc2-20-5", "front": "Señal de que invertiste el orden entre curvas", "back": "Que el resultado del área salga negativo: hay que restar la de arriba menos la de abajo." },
      { "id": "fc2-20-6", "front": "Qué propiedad usa el caso de cambio de signo", "back": "La aditividad respecto de un punto interior, que permite descomponer la integral en la suma de las integrales de cada tramo." }
    ]
  },
  "21": {
    "quiz2": {
      "tf": [
        { "id": "tf2-21-1", "q": "Hay consignas del práctico que se resuelven sin conocer la expresión de la función.", "a": true, "explain": "Tres ejercicios dan integrales conocidas sobre ciertos intervalos y piden otra usando solo las propiedades." },
        { "id": "tf2-21-2", "q": "El práctico incluye un problema donde el área es el dato y hay una constante por hallar.", "a": true, "explain": "Se pide el valor del parámetro de una recta para que el recinto tenga área conocida." },
        { "id": "tf2-21-3", "q": "En una de las consignas hay que elegir la integral correcta entre varias opciones.", "a": true, "explain": "Se dan tres planteos posibles para el área entre dos curvas y hay que decidir cuál corresponde." },
        { "id": "tf2-21-4", "q": "El problema del corredor pide calcular su velocidad máxima.", "a": false, "explain": "Pide la distancia recorrida en dos instantes distintos, integrando la función velocidad." },
        { "id": "tf2-21-5", "q": "La primera consigna del práctico está correctamente titulada en el enunciado original.", "a": false, "explain": "Dice integrales indefinidas cuando todas llevan límites de integración: es una errata del PDF." }
      ],
      "mc": [
        {
          "id": "mc2-21-1",
          "q": "¿Qué propiedad hay que usar cuando un dato viene con los límites invertidos?",
          "options": [
            "La del múltiplo constante",
            "La del cambio de signo al permutar límites",
            "La de la integral nula con límites iguales",
            "La aditividad respecto de un punto interior"
          ],
          "correctIndex": 1,
          "explain": "Permutar los extremos cambia el signo, y recién ahí el dato se puede encadenar con los demás."
        },
        {
          "id": "mc2-21-2",
          "q": "En la consigna que resta una constante dentro del integrando, ¿qué hay que calcular aparte?",
          "options": [
            "La integral de la constante sobre el intervalo",
            "El valor medio de la función original",
            "La derivada de la función en los extremos",
            "El área encerrada bajo la constante y la curva"
          ],
          "correctIndex": 0,
          "explain": "Esa integral vale la constante multiplicada por la longitud del intervalo."
        },
        {
          "id": "mc2-21-3",
          "q": "En la consigna de las regiones sombreadas, ¿por qué el enunciado reescribe las funciones debajo de cada gráfico?",
          "options": [
            "Porque las funciones cambian según el intervalo",
            "Porque algunos signos no se ven claramente en las figuras",
            "Porque se pide graficarlas de nuevo a mano",
            "Porque las fórmulas son distintas de las del gráfico"
          ],
          "correctIndex": 1,
          "explain": "Hay una nota explícita del PDF aclarando ese punto."
        }
      ],
      "ms": [
        {
          "id": "ms2-21-1",
          "q": "¿Qué tipos de consigna aparecen en este práctico?",
          "options": [
            "Cálculo directo de integrales definidas",
            "Cálculo con propiedades sin conocer la función",
            "Determinación de áreas a partir de gráficos",
            "Problema inverso donde el área es el dato",
            "Estudio completo de una función racional"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El estudio completo pertenece a otra unidad: acá no se pide dominio, asíntotas ni concavidad."
        },
        {
          "id": "ms2-21-2",
          "q": "¿Qué métodos de integración se necesitan en la primera consigna?",
          "options": [
            "Integración por partes",
            "Descomposición en fracciones simples",
            "Sustitución con una potencia en el denominador",
            "Sustitución con el recíproco de la variable",
            "Descomposición en series de potencias"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Las series de potencias no forman parte del programa de la materia."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-21-1", "front": "Ejercicios que se resuelven solo con propiedades", "back": "Los tres que dan integrales conocidas en ciertos intervalos y piden otra: no hace falta conocer la función ni integrar nada." },
      { "id": "fc2-21-2", "front": "Cómo tratar un dato con límites invertidos", "back": "Aplicar la propiedad de permutación: al dar vuelta los extremos, el valor cambia de signo." },
      { "id": "fc2-21-3", "front": "Integrando con una constante restada", "back": "Se separa en dos integrales; la de la constante vale esa constante por la longitud del intervalo." },
      { "id": "fc2-21-4", "front": "Consigna de opción múltiple del práctico", "back": "Se da el gráfico de dos curvas y hay que elegir cuál de tres integrales calcula el área encerrada entre ellas." },
      { "id": "fc2-21-5", "front": "Problema inverso del práctico", "back": "Se conoce el área del recinto entre una recta con parámetro y una parábola, y hay que despejar el valor del parámetro." },
      { "id": "fc2-21-6", "front": "Problema aplicado del corredor", "back": "Se da la velocidad como función exponencial del tiempo y se pide la distancia recorrida en dos instantes, integrando la velocidad." }
    ]
  },
  "22": {
    "quiz2": {
      "tf": [
        { "id": "tf2-22-1", "q": "Una integral que da cero indica necesariamente que el área encerrada es nula.", "a": false, "explain": "Puede haber tramos positivos y negativos que se cancelan: el área sigue siendo positiva." },
        { "id": "tf2-22-2", "q": "La clave deja sin resolver tres puntos del práctico.", "a": true, "explain": "Un ítem de la primera consigna, un ejercicio completo de propiedades y un ítem de las regiones sombreadas." },
        { "id": "tf2-22-3", "q": "En la consigna de opción múltiple la respuesta correcta parte la integral en dos tramos.", "a": true, "explain": "Porque en el origen cambia cuál de las dos curvas queda por encima de la otra." },
        { "id": "tf2-22-4", "q": "Según el modelo del corredor, a los nueve coma seis segundos ya superó los cien metros.", "a": false, "explain": "El modelo da poco más de noventa y dos metros: todavía no completó la distancia." },
        { "id": "tf2-22-5", "q": "El parámetro hallado en el problema inverso resulta positivo.", "a": false, "explain": "La clave informa un valor negativo, lo que ubica la recta por debajo del vértice de la parábola." }
      ],
      "mc": [
        {
          "id": "mc2-22-1",
          "q": "¿Por qué la integral de la tercera consigna del primer ejercicio da cero?",
          "options": [
            "Porque el integrando es idénticamente nulo",
            "Porque los dos límites de integración coinciden",
            "Porque el integrando es impar y el intervalo simétrico",
            "Porque la primitiva es una constante"
          ],
          "correctIndex": 2,
          "explain": "Los aportes de los dos semiintervalos tienen igual magnitud y signo opuesto, y se cancelan."
        },
        {
          "id": "mc2-22-2",
          "q": "¿Qué error se evita al partir la integral en la consigna de opción múltiple?",
          "options": [
            "Obtener cero por cancelación de los dos lóbulos",
            "Integrar fuera del dominio de las funciones",
            "Usar límites de integración equivocados",
            "Confundir el método de integración necesario"
          ],
          "correctIndex": 0,
          "explain": "Es la misma trampa que en el ítem de integrando impar: la simetría hace que los aportes se anulen."
        },
        {
          "id": "mc2-22-3",
          "q": "¿Cómo se puede verificar el resultado de la consigna que resta una constante?",
          "options": [
            "Derivando la función original en los extremos",
            "Sumando los dos datos, triplicando y restando la longitud del intervalo",
            "Calculando el área encerrada bajo la constante",
            "Comparando con el resultado de la consigna anterior"
          ],
          "correctIndex": 1,
          "explain": "Los dos datos se encadenan por aditividad, el múltiplo sale fuera y la constante aporta la longitud del intervalo."
        },
        {
          "id": "mc2-22-4",
          "q": "¿Qué muestra la comparación entre el resultado del corredor y el récord real?",
          "options": [
            "Que el modelo exagera la velocidad del corredor",
            "Que el modelo describe a un corredor algo más lento que el récord",
            "Que el modelo coincide exactamente con el récord mundial",
            "Que el modelo es válido solo para tiempos muy cortos"
          ],
          "correctIndex": 1,
          "explain": "El modelo no llega a los cien metros en el tiempo del récord, lo que recuerda que toda modelización es una aproximación."
        }
      ],
      "ms": [
        {
          "id": "ms2-22-1",
          "q": "¿Qué resultados de la clave se pueden verificar sin integrar?",
          "options": [
            "El de la consigna que resta una constante al integrando",
            "El que se anula por simetría del integrando",
            "El de la opción múltiple sobre el planteo del área",
            "Los que se obtienen encadenando datos por aditividad",
            "El área entre una recta y una parábola separadas"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El área entre recta y parábola exige calcular efectivamente la integral tras hallar las intersecciones."
        },
        {
          "id": "ms2-22-2",
          "q": "¿Qué conclusiones se desprenden de esta clave?",
          "options": [
            "Un resultado nulo puede convivir con un área positiva",
            "Partir la integral es imprescindible cuando cambia el orden de las curvas",
            "Los ejercicios de propiedades se verifican en dos líneas",
            "El modelo del corredor subestima el rendimiento real del récord",
            "Todos los resultados del práctico son números racionales"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Varios resultados incluyen logaritmos y el número $e$, así que no todos son racionales."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-22-1", "front": "Integral nula por simetría", "back": "Integrando impar sobre intervalo simétrico respecto del origen: los dos tramos se cancelan y la integral vale cero, aunque el área no lo sea." },
      { "id": "fc2-22-2", "front": "Por qué hay que partir la integral entre dos curvas", "back": "Porque en los puntos de cruce cambia cuál de las dos queda por encima, y sin partir los aportes se cancelan." },
      { "id": "fc2-22-3", "front": "Verificación del ejercicio con constante restada", "back": "Encadenar los dos datos por aditividad, sacar el múltiplo fuera y restar la constante multiplicada por la longitud del intervalo." },
      { "id": "fc2-22-4", "front": "Ítems sin resolver en esta clave", "back": "Un ítem de la primera consigna, un ejercicio completo de propiedades y un ítem de las regiones sombreadas." },
      { "id": "fc2-22-5", "front": "Signo del parámetro en el problema inverso", "back": "Resulta negativo, lo que ubica la recta por debajo de la parábola y agranda el recinto encerrado." },
      { "id": "fc2-22-6", "front": "Lectura crítica del problema del corredor", "back": "Con ese modelo el corredor no completa los cien metros en el tiempo del récord: la modelización siempre es una aproximación." }
    ]
  },
  "30": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-30-1",
          "q": "Una integral sobre un intervalo de longitud infinita siempre encierra un área infinita.",
          "a": false,
          "explain": "El propio ejemplo del apunte lo desmiente: $\\int_{-\\infty}^{1} e^x\\,dx$ tiene una región infinitamente larga y su área vale $e$."
        },
        {
          "id": "tf2-30-2",
          "q": "En la definición de $\\int_a^{+\\infty} f(x)$ el infinito se reemplaza por una letra y recién después se toma el límite.",
          "a": true,
          "explain": "Primero se resuelve $\\int_a^b f(x)\\,dx$ como integral definida común y luego se hace $b \\to +\\infty$."
        },
        {
          "id": "tf2-30-3",
          "q": "Que una integral impropia sea oscilante significa que su límite existe pero vale infinito.",
          "a": false,
          "explain": "Oscilante quiere decir que el límite no existe. Que el límite no sea finito corresponde al caso divergente."
        },
        {
          "id": "tf2-30-4",
          "q": "La integral impropia sobre toda la recta real se define eligiendo un punto intermedio y sumando dos integrales impropias.",
          "a": true,
          "explain": "Se toma un $c$ cualquiera y se escribe $\\int_{-\\infty}^{c} + \\int_{c}^{+\\infty}$."
        },
        {
          "id": "tf2-30-5",
          "q": "Para que una integral definida común sea válida alcanza con que los límites sean finitos, sin importar la continuidad.",
          "a": false,
          "explain": "La definición pide las dos cosas a la vez: límites finitos y función continua en el intervalo."
        }
      ],
      "mc": [
        {
          "id": "mc2-30-1",
          "q": "¿Qué condición hace que una integral impropia reciba el nombre de convergente?",
          "options": [
            "Que el integrando tienda a cero en el infinito",
            "Que el límite involucrado dé un número real",
            "Que el intervalo de integración sea acotado",
            "Que la primitiva del integrando sea continua"
          ],
          "correctIndex": 1,
          "explain": "Converge cuando el límite existe y vale un real $L$. Que el integrando tienda a cero no alcanza como garantía."
        },
        {
          "id": "mc2-30-2",
          "q": "Al resolver $\\int_{-\\infty}^{1} e^x\\,dx$, ¿a qué tiende el término $e^a$ cuando $a$ se va a menos infinito?",
          "options": [
            "Tiende a menos infinito sin freno",
            "Tiende al número $e$ por izquierda",
            "Se acerca a cero por valores positivos",
            "Se mantiene constante en el valor uno"
          ],
          "correctIndex": 2,
          "explain": "La exponencial se aplasta contra el eje: $e^a \\to 0^+$. Por eso el resultado final queda en $e - 0 = e$."
        },
        {
          "id": "mc2-30-3",
          "q": "¿Qué se altera respecto de la integral definida para llegar a la primera clase de integral impropia?",
          "options": [
            "Se pierde la continuidad del integrando",
            "Se cambia la variable de integración",
            "Se invierten los límites de integración",
            "Se hace infinita una punta del intervalo"
          ],
          "correctIndex": 3,
          "explain": "En la primera clase la función sigue siendo continua; lo que se rompe es que el intervalo deja de ser acotado."
        },
        {
          "id": "mc2-30-4",
          "q": "Si el límite de una integral impropia no llega a existir, ¿cómo se la clasifica?",
          "options": [
            "Como una integral oscilante",
            "Como una integral convergente",
            "Como una integral acotada",
            "Como una integral definida"
          ],
          "correctIndex": 0,
          "explain": "El apunte distingue tres casos: converge, diverge (límite no finito) y oscila (límite inexistente)."
        }
      ],
      "ms": [
        {
          "id": "ms2-30-1",
          "q": "¿Qué elementos forman parte de la definición de integral impropia de primera clase?",
          "options": [
            "Un intervalo de longitud infinita",
            "Un límite tomado sobre uno de los extremos",
            "Una integral definida resuelta previamente",
            "Una discontinuidad esencial del integrando",
            "Una derivada segunda del integrando"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "La discontinuidad esencial pertenece a la segunda clase y la derivada segunda no interviene en ningún momento."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-30-1", "front": "¿Qué se hace primero al resolver una impropia de primera clase?", "back": "Se cambia el infinito por una letra, se resuelve la integral definida con la regla de Barrow y recién al final se toma el límite." },
      { "id": "fc2-30-2", "front": "¿Qué significa que el área sea finita sobre un intervalo infinito?", "back": "Que el integrando decae lo bastante rápido como para que cada tramo nuevo aporte cada vez menos: el límite se estabiliza en un real." },
      { "id": "fc2-30-3", "front": "Los tres desenlaces posibles de una impropia", "back": "Converge (límite real), diverge (límite no finito) u oscila (el límite no existe)." },
      { "id": "fc2-30-4", "front": "¿Por qué la integral sobre toda la recta se parte en dos?", "back": "Porque hay dos extremos infinitos y cada uno necesita su propio límite; se elige un $c$ intermedio y se suman las dos impropias." }
    ]
  },
  "31": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-31-1",
          "q": "Una discontinuidad evitable en el interior del intervalo convierte a la integral en impropia de segunda clase.",
          "a": false,
          "explain": "El apunte pide una discontinuidad esencial con salto infinito; las evitables no rompen la integral definida."
        },
        {
          "id": "tf2-31-2",
          "q": "Si el punto conflictivo es el extremo derecho del intervalo, el límite que se toma es lateral por izquierda.",
          "a": true,
          "explain": "Nos acercamos desde adentro del intervalo, así que el límite es $b \\to c^-$."
        },
        {
          "id": "tf2-31-3",
          "q": "Cuando el integrando explota en un punto interior, alcanza con evaluar la primitiva en las dos puntas del intervalo.",
          "a": false,
          "explain": "Hay que partir la integral en ese punto y resolver cada mitad con su límite lateral; aplicar Barrow de punta a punta da un número sin sentido."
        },
        {
          "id": "tf2-31-4",
          "q": "El ejemplo del apunte muestra un caso de segunda clase que termina divergiendo.",
          "a": true,
          "explain": "$\\int_0^1 \\frac{2}{x}\\,dx$ lleva a $\\lim_{a \\to 0^+}(\\ln 1 - \\ln a) = \\infty$."
        },
        {
          "id": "tf2-31-5",
          "q": "En las impropias de segunda clase los límites de integración son números finitos.",
          "a": true,
          "explain": "Lo que se rompe acá es la continuidad del integrando, no la finitud del intervalo."
        }
      ],
      "mc": [
        {
          "id": "mc2-31-1",
          "q": "¿Qué caracteriza al integrando de una impropia de segunda clase?",
          "options": [
            "Tiene una asíntota horizontal en el intervalo",
            "Cambia de signo dentro del intervalo",
            "Presenta una discontinuidad con salto infinito",
            "Carece de primitiva expresable en forma elemental"
          ],
          "correctIndex": 2,
          "explain": "Es la definición del apunte: discontinuidad esencial con salto infinito, en una punta o en un punto interior."
        },
        {
          "id": "mc2-31-2",
          "q": "Si $f$ es discontinua en el extremo izquierdo del intervalo, ¿qué límite corresponde tomar?",
          "options": [
            "Un límite lateral por derecha sobre ese extremo",
            "Un límite lateral por izquierda sobre ese extremo",
            "Un límite con la variable tendiendo a infinito",
            "Un límite doble sobre los dos extremos a la vez"
          ],
          "correctIndex": 0,
          "explain": "El intervalo existe a la derecha de $c$, así que el acercamiento es $a \\to c^+$."
        },
        {
          "id": "mc2-31-3",
          "q": "En el ejemplo resuelto del apunte, ¿cuál es la primitiva que se utiliza?",
          "options": [
            "Una función racional del tipo $-1/x$",
            "Un logaritmo natural del argumento",
            "Una exponencial de base natural",
            "Una raíz cúbica de la variable"
          ],
          "correctIndex": 1,
          "explain": "Al integrar $\\frac{2}{x}$ aparece un logaritmo, y por eso el límite termina en $\\ln 1 - \\ln a$."
        },
        {
          "id": "mc2-31-4",
          "q": "¿Cuántos límites laterales se necesitan cuando la discontinuidad cae en un punto interior?",
          "options": [
            "Ninguno, se aplica Barrow directamente",
            "Uno solo, tomado sobre el punto malo",
            "Tres, uno por cada tramo más el total",
            "Dos, uno por izquierda y otro por derecha"
          ],
          "correctIndex": 3,
          "explain": "La integral se parte en el punto conflictivo y cada mitad exige su propio límite lateral."
        }
      ],
      "ms": [
        {
          "id": "ms2-31-1",
          "q": "¿Qué ubicaciones puede tener la discontinuidad que genera una impropia de segunda clase?",
          "options": [
            "El extremo derecho del intervalo",
            "El extremo izquierdo del intervalo",
            "Un punto interior del intervalo",
            "Un punto exterior al intervalo",
            "El infinito positivo del eje"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "Una discontinuidad fuera del intervalo no afecta a la integral, y el infinito corresponde a la primera clase."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-31-1", "front": "Señal de alarma antes de integrar", "back": "Revisar si el integrando se indefine en algún punto de $[a;b]$: si pasa, la integral es impropia y hay que partirla ahí." },
      { "id": "fc2-31-2", "front": "¿De qué lado se toma el límite lateral?", "back": "Siempre desde adentro del intervalo: si el punto malo es el extremo derecho, por izquierda; si es el izquierdo, por derecha." },
      { "id": "fc2-31-3", "front": "Comparación entre las dos clases", "back": "Primera clase: región infinitamente larga, el área puede ser finita. Segunda clase: región infinitamente alta, el área también puede serlo o no. Siempre decide el límite." },
      { "id": "fc2-31-4", "front": "Consecuencia de ignorar una discontinuidad interior", "back": "Se obtiene un número que no representa ningún área; es el error que el TP hace explicar en el ejercicio 2." }
    ]
  },
  "32": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-32-1",
          "q": "El TP de integrales impropias consta de tres consignas.",
          "a": true,
          "explain": "Analizar convergencia, explicar dos evaluaciones incorrectas y decidir un verdadero o falso justificando."
        },
        {
          "id": "tf2-32-2",
          "q": "Todos los ítems del ejercicio 1 son impropias por tener un límite de integración infinito.",
          "a": false,
          "explain": "Varios lo son por discontinuidad del integrando: en el d), el f) y el g) el problema está en el integrando, no en el intervalo."
        },
        {
          "id": "tf2-32-3",
          "q": "El ejercicio 2 muestra dos resoluciones ya hechas y pide detectar el error de cada una.",
          "a": true,
          "explain": "No hay que calcular nada nuevo: hay que explicar por qué la evaluación presentada es incorrecta."
        },
        {
          "id": "tf2-32-4",
          "q": "El ejercicio 3 se responde con un simple verdadero o falso, sin necesidad de argumentar.",
          "a": false,
          "explain": "El enunciado pide explícitamente justificar la respuesta."
        }
      ],
      "mc": [
        {
          "id": "mc2-32-1",
          "q": "En el ítem f) del ejercicio 1, ¿dónde se anula el denominador dentro del intervalo?",
          "options": [
            "En el extremo superior del intervalo",
            "En el extremo inferior del intervalo",
            "En el punto medio del intervalo",
            "En ningún punto del intervalo"
          ],
          "correctIndex": 0,
          "explain": "$4 - x^2$ se anula en $x = 2$, que es justo la punta derecha de $[0;2]$."
        },
        {
          "id": "mc2-32-2",
          "q": "¿Qué tienen en común los ítems a) y e) del ejercicio 1?",
          "options": [
            "Comparten el mismo intervalo de integración",
            "Comparten el mismo integrando del producto",
            "Ambos tienen el integrando indefinido en cero",
            "Ambos se resuelven por sustitución simple"
          ],
          "correctIndex": 1,
          "explain": "Los dos integran $x \\cdot e^x$; lo que cambia es el intervalo, que en el e) llega al infinito por los dos lados."
        },
        {
          "id": "mc2-32-3",
          "q": "Sin hacer la cuenta, ¿qué detalle del resultado propuesto en el ejercicio 2.a) ya lo delata como incorrecto?",
          "options": [
            "El intervalo elegido resulta demasiado corto",
            "La primitiva utilizada no está bien elegida",
            "Da un valor negativo con integrando positivo",
            "El valor obtenido es un número irracional"
          ],
          "correctIndex": 2,
          "explain": "$\\frac{1}{x^2}$ es siempre positiva, así que ninguna integral suya sobre un intervalo puede dar $-2$."
        }
      ],
      "ms": [
        {
          "id": "ms2-32-1",
          "q": "¿Qué chequeos previos conviene hacer sobre cada ítem del ejercicio 1?",
          "options": [
            "Si alguno de los límites es infinito",
            "Si el denominador se anula en el intervalo",
            "Si el integrando queda indefinido en alguna punta",
            "Si el integrando es una función par",
            "Si el intervalo tiene longitud entera"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "La paridad y la longitud del intervalo no determinan si la integral es impropia."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-32-1", "front": "Estructura del TP de integrales impropias", "back": "Ejercicio 1: siete integrales para analizar convergencia. Ejercicio 2: dos evaluaciones mal hechas para criticar. Ejercicio 3: una igualdad para decidir con justificación." },
      { "id": "fc2-32-2", "front": "Puntos conflictivos del ejercicio 1", "back": "En el d) el integrando se indefine en $x = 0$; en el f) el denominador se anula en $x = 2$; en el g) se anula en $x = 1$, que cae adentro del intervalo." },
      { "id": "fc2-32-3", "front": "Qué evalúa realmente el ejercicio 2", "back": "La capacidad de reconocer cuándo la regla de Barrow no es aplicable y cuándo se evalúa mal la primitiva en un extremo." },
      { "id": "fc2-32-4", "front": "Rutina de dos segundos antes de integrar", "back": "Preguntarse si hay algún infinito en los límites y si el integrando se indefine adentro del intervalo. Con eso ya sabés de qué clase es la impropia." }
    ]
  },
  "33": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-33-1",
          "q": "El PDF de resolución de la cátedra deja dos ítems del ejercicio 1 sin respuesta.",
          "a": true,
          "explain": "Los ítems c) y f) figuran con rayitas, sin resolver."
        },
        {
          "id": "tf2-33-2",
          "q": "Todas las integrales del ejercicio 1 resultan divergentes.",
          "a": false,
          "explain": "El b) converge a $\\frac{1}{2}e^2$ y el d) converge a $\\frac{3}{2}$."
        },
        {
          "id": "tf2-33-3",
          "q": "El resultado correcto de $\\int_0^{+\\infty} e^{-x}\\,dx$ es $1$ y no $0$.",
          "a": true,
          "explain": "Al evaluar la primitiva $-e^{-x}$ en el límite inferior queda $-1$, y $0 - (-1) = 1$."
        },
        {
          "id": "tf2-33-4",
          "q": "La igualdad del ejercicio 3 se acepta como verdadera porque el resultado numérico coincide.",
          "a": false,
          "explain": "Es falsa: la función no está definida en $x = 1$ y resuelta como impropia diverge."
        },
        {
          "id": "tf2-33-5",
          "q": "En el ítem e) la resolución muestra que una de las dos mitades da cero.",
          "a": true,
          "explain": "$\\int_{-\\infty}^{0} x e^x dx = 0$, pero la otra mitad da $+\\infty$ y por eso el total diverge."
        }
      ],
      "mc": [
        {
          "id": "mc2-33-1",
          "q": "¿Qué justificación da la cátedra para descartar la evaluación del ejercicio 2.a)?",
          "options": [
            "El intervalo elegido resulta ser demasiado amplio",
            "La primitiva elegida no corresponde al integrando",
            "El integrando no está definido en un punto del intervalo",
            "Los límites de integración figuran invertidos"
          ],
          "correctIndex": 2,
          "explain": "El cero pertenece a $[-1;1]$ y ahí el integrando explota: hay que descomponer y resolver como impropia."
        },
        {
          "id": "mc2-33-2",
          "q": "Según la resolución, ¿qué valor alcanza la integral del ítem d)?",
          "options": [
            "Un valor de tres medios",
            "Un valor de medio por $e$ al cuadrado",
            "Un valor infinitamente grande",
            "Un valor exactamente igual a cero"
          ],
          "correctIndex": 0,
          "explain": "$\\int_0^1 \\frac{1}{\\sqrt[3]{x}}\\,dx$ converge a $\\frac{3}{2}$; el $\\frac{1}{2}e^2$ pertenece al ítem b)."
        },
        {
          "id": "mc2-33-3",
          "q": "¿Cuál es el hilo conductor de las tres consignas del TP según sus resoluciones?",
          "options": [
            "Elegir bien el método de integración por partes",
            "Reconocer cuándo el integrando se indefine adentro",
            "Comparar el crecimiento de las exponenciales",
            "Calcular correctamente primitivas de raíces"
          ],
          "correctIndex": 1,
          "explain": "En 1.g), en 2.a) y en 3 el problema es siempre el mismo: una discontinuidad dentro del intervalo de integración."
        }
      ],
      "ms": [
        {
          "id": "ms2-33-1",
          "q": "¿Qué observaciones sobre el PDF de resolución son correctas?",
          "options": [
            "Faltan las respuestas de los ítems c) y f)",
            "La justificación del ítem g) repite un integrando ajeno",
            "El texto escribe mal el apellido de la regla de Barrow",
            "El ejercicio 3 aparece sin ninguna justificación",
            "El ejercicio 2 tiene tres ítems en lugar de dos"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "El ejercicio 3 sí trae su justificación y el ejercicio 2 tiene exactamente dos ítems."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-33-1", "front": "Resultados que sí figuran en la resolución del ejercicio 1", "back": "a) diverge; b) converge a $\\frac{1}{2}e^2$; d) converge a $\\frac{3}{2}$; e) diverge; g) diverge. Los ítems c) y f) quedaron sin resolver." },
      { "id": "fc2-33-2", "front": "Error del ejercicio 2.b) explicado en detalle", "back": "La primitiva es $-e^{-x}$: al evaluar en $x = 0$ da $-1$, no $0$. La cuenta correcta da $1$." },
      { "id": "fc2-33-3", "front": "Criterio para justificar el ejercicio 3", "back": "Alcanza con señalar que el integrando no está definido en $x = 1$, que pertenece al intervalo, y que al resolverla como impropia diverge." },
      { "id": "fc2-33-4", "front": "Erratas a tener en cuenta en el PDF de la cátedra", "back": "En las justificaciones de e) y g) se repite el integrando $x e^x$ aunque el g) es otro, y se escribe \"regla de Borrow\" en lugar de Barrow." }
    ]
  },
  "34": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-34-1",
          "q": "En un campo escalar la entrada es un par ordenado y la salida sigue siendo un número real.",
          "a": true,
          "explain": "Por eso se lo llama escalar: la imagen es un escalar, aunque el dominio viva en el plano."
        },
        {
          "id": "tf2-34-2",
          "q": "El dominio de una función de dos variables es siempre todo el plano.",
          "a": false,
          "explain": "Depende de las restricciones de las operaciones de la fórmula: solo las polinómicas tienen dominio $R^2$."
        },
        {
          "id": "tf2-34-3",
          "q": "La condición de unicidad exige que un mismo par no pueda tener dos imágenes distintas.",
          "a": true,
          "explain": "Es el segundo renglón de la definición formal, el que dice que si $z$ y $w$ son imágenes del mismo par entonces $z = w$."
        },
        {
          "id": "tf2-34-4",
          "q": "La ecuación $x = ay^2 + by + c$ describe una parábola de eje vertical.",
          "a": false,
          "explain": "Con la $x$ despejada en función de $y^2$, la parábola queda acostada: su eje es horizontal."
        },
        {
          "id": "tf2-34-5",
          "q": "Al cambiar el igual por una desigualdad, la curva pasa a delimitar una región del plano.",
          "a": true,
          "explain": "Queda la parte interior o exterior a la curva, según el sentido de la desigualdad."
        }
      ],
      "mc": [
        {
          "id": "mc2-34-1",
          "q": "¿Qué distingue a la hipérbola $\\frac{y^2}{b^2} - \\frac{x^2}{a^2} = 1$ de la otra forma vista?",
          "options": [
            "Corta al eje vertical y no al horizontal",
            "Corta al eje horizontal y no al vertical",
            "Corta a los dos ejes en cuatro puntos",
            "No corta a ninguno de los dos ejes"
          ],
          "correctIndex": 0,
          "explain": "Con el término positivo en $y$, los vértices quedan en $(0; \\pm b)$ y la curva nunca toca al eje $x$."
        },
        {
          "id": "mc2-34-2",
          "q": "En la elipse centrada en el origen, ¿qué información aportan los valores $a$ y $b$?",
          "options": [
            "La inclinación de los ejes de simetría",
            "La distancia entre los dos focos",
            "El área total encerrada por la curva",
            "Los puntos donde la curva corta los ejes"
          ],
          "correctIndex": 3,
          "explain": "$|x| = a$ da los cortes con el eje $x$ y $|y| = b$ los cortes con el eje $y$."
        },
        {
          "id": "mc2-34-3",
          "q": "¿Por qué el apunte repasa rectas, parábolas, circunferencias, elipses e hipérbolas?",
          "options": [
            "Porque son las superficies del espacio tridimensional",
            "Porque son las fronteras de los dominios en el plano",
            "Porque son las únicas funciones continuas conocidas",
            "Porque permiten calcular derivadas parciales luego"
          ],
          "correctIndex": 1,
          "explain": "Las restricciones del dominio se traducen en inecuaciones y esas curvas son los bordes de las regiones que quedan."
        },
        {
          "id": "mc2-34-4",
          "q": "En una circunferencia con centro en el origen, ¿qué papel cumple el número que aparece a la derecha del igual?",
          "options": [
            "Corresponde al radio de la curva",
            "Corresponde al diámetro de la curva",
            "Corresponde al radio elevado al cuadrado",
            "Corresponde al perímetro de la curva"
          ],
          "correctIndex": 2,
          "explain": "La ecuación es $x^2 + y^2 = r^2$, así que hay que sacarle raíz para obtener el radio."
        }
      ],
      "ms": [
        {
          "id": "ms2-34-1",
          "q": "¿Qué afirmaciones sobre el dominio de un campo escalar son correctas?",
          "options": [
            "Está incluido en el plano real de dos dimensiones",
            "Se representa gráficamente como una región plana",
            "Se determina mirando las restricciones de la fórmula",
            "Coincide siempre con el conjunto imagen",
            "Está formado por ternas ordenadas de reales"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "El conjunto imagen vive en la recta real y el dominio está formado por pares, no por ternas."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-34-1", "front": "Por qué se llama campo escalar", "back": "Porque a cada punto del plano le asigna un escalar, un número real. La entrada es un par y la salida es un solo valor." },
      { "id": "fc2-34-2", "front": "Los dos renglones de la definición formal", "back": "Existencia: todo par del dominio tiene alguna imagen. Unicidad: esa imagen es una sola. Es la definición de función de siempre con entrada doble." },
      { "id": "fc2-34-3", "front": "Cómo distinguir las dos hipérbolas", "back": "El término que va con signo positivo indica el eje que la curva corta. Con $x^2$ positivo corta al eje $x$; con $y^2$ positivo corta al eje $y$." },
      { "id": "fc2-34-4", "front": "Para qué sirve el repaso de curvas planas", "back": "Cada restricción del dominio se convierte en una inecuación, y hay que reconocer al toque qué región dibuja: semiplano, disco, interior de elipse, etc." }
    ]
  },
  "35": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-35-1",
          "q": "Una función polinómica de dos variables puede tener restricciones de dominio.",
          "a": false,
          "explain": "No hay denominadores, raíces ni logaritmos: su dominio es todo el plano."
        },
        {
          "id": "tf2-35-2",
          "q": "El denominador $x^2 + y^2$ solo se anula en el origen de coordenadas.",
          "a": true,
          "explain": "Es una suma de cuadrados: para que dé cero, ambos sumandos deben ser cero."
        },
        {
          "id": "tf2-35-3",
          "q": "Un logaritmo ubicado en el denominador aporta una única restricción al dominio.",
          "a": false,
          "explain": "Aporta dos: el argumento tiene que ser positivo y el logaritmo entero distinto de cero."
        },
        {
          "id": "tf2-35-4",
          "q": "Cuando un denominador se anula sobre una recta, esa recta se excluye entera del dominio.",
          "a": true,
          "explain": "Es el caso de $x - y$: se saca toda la recta $y = x$ y se la dibuja punteada."
        },
        {
          "id": "tf2-35-5",
          "q": "El dominio del último ejemplo del apunte es la unión de las tres regiones que salen de las restricciones.",
          "a": false,
          "explain": "Es la intersección: las restricciones se unen con conjunción, deben cumplirse todas a la vez."
        }
      ],
      "mc": [
        {
          "id": "mc2-35-1",
          "q": "¿Por qué la condición $\\ln(u) \\neq 0$ se traduce en $u \\neq 1$?",
          "options": [
            "Porque el logaritmo se anula en su base",
            "Porque el logaritmo de uno vale cero",
            "Porque el logaritmo nunca alcanza el cero",
            "Porque el logaritmo cambia de signo en cero"
          ],
          "correctIndex": 1,
          "explain": "$\\ln 1 = 0$, así que hay que excluir el valor del argumento que lo hace valer uno."
        },
        {
          "id": "mc2-35-2",
          "q": "En una raíz de índice par ubicada en el denominador, ¿qué desigualdad corresponde?",
          "options": [
            "El radicando debe ser mayor o igual a cero",
            "El radicando debe ser distinto de cero nomás",
            "El radicando debe ser estrictamente positivo",
            "El radicando debe ser menor o igual a cero"
          ],
          "correctIndex": 2,
          "explain": "Se combinan dos cosas: la raíz exige radicando no negativo y el denominador exige que no se anule, así que queda estricta."
        },
        {
          "id": "mc2-35-3",
          "q": "¿Qué región gráfica corresponde a la condición $x^2 + y^2 < 16$?",
          "options": [
            "El interior de un círculo de radio cuatro",
            "El exterior de un círculo de radio cuatro",
            "El interior de un círculo de radio dieciséis",
            "La circunferencia de radio cuatro solamente"
          ],
          "correctIndex": 0,
          "explain": "El radio sale de la raíz de $16$, o sea $4$, y el sentido menor indica la parte interior con borde excluido."
        },
        {
          "id": "mc2-35-4",
          "q": "¿Cuál es el orden de trabajo recomendable para hallar un dominio?",
          "options": [
            "Dibujar primero y escribir las condiciones después",
            "Escribir las condiciones y recién después dibujar",
            "Calcular la imagen y deducir el dominio de ahí",
            "Derivar la función y ver dónde existe la derivada"
          ],
          "correctIndex": 1,
          "explain": "Dibujar de memoria antes de listar las restricciones es el error más típico del práctico."
        }
      ],
      "ms": [
        {
          "id": "ms2-35-1",
          "q": "¿Qué operaciones generan restricciones al armar un dominio?",
          "options": [
            "La división por una expresión variable",
            "La raíz cuadrada de una expresión",
            "El logaritmo de una expresión",
            "La suma de dos términos cualesquiera",
            "El producto por una constante"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "Sumar y multiplicar por constantes no restringe nada: se puede hacer con cualquier par de reales."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-35-1", "front": "Checklist de restricciones", "back": "Denominador distinto de cero; radicando de índice par no negativo (estricto si va en el denominador); argumento del logaritmo positivo; logaritmo del denominador distinto de cero." },
      { "id": "fc2-35-2", "front": "Traducción de $\\ln(u) \\neq 0$", "back": "Equivale a $u \\neq 1$, porque el logaritmo natural se anula justo cuando su argumento vale uno." },
      { "id": "fc2-35-3", "front": "Cómo se combinan varias restricciones", "back": "Con conjunción: el dominio es la intersección de todas las regiones, no la unión. Todas tienen que cumplirse a la vez." },
      { "id": "fc2-35-4", "front": "Borde incluido o excluido", "back": "Si la desigualdad es no estricta el borde se dibuja lleno y pertenece al dominio; si es estricta va punteado y queda afuera." }
    ]
  },
  "36": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-36-1",
          "q": "Una curva de nivel junta puntos del dominio que comparten la misma imagen.",
          "a": true,
          "explain": "Esa es exactamente la idea: todos los pares cuya imagen vale la cota $k$."
        },
        {
          "id": "tf2-36-2",
          "q": "Las curvas de nivel se obtienen cortando la superficie con planos verticales.",
          "a": false,
          "explain": "Se corta con planos horizontales de ecuación $z = k$, paralelos al plano $xy$."
        },
        {
          "id": "tf2-36-3",
          "q": "La cota $k$ debe pertenecer al conjunto imagen de la función.",
          "a": true,
          "explain": "Si $k$ no es imagen de ningún par, no hay puntos que formen esa curva de nivel."
        },
        {
          "id": "tf2-36-4",
          "q": "Dos curvas de nivel de cotas distintas pueden tocarse en un punto aislado.",
          "a": false,
          "explain": "Ese punto tendría dos imágenes a la vez, lo que rompe la unicidad y por lo tanto la condición de función."
        },
        {
          "id": "tf2-36-5",
          "q": "En un mapa topográfico, curvas muy separadas señalan un terreno que se eleva lentamente.",
          "a": true,
          "explain": "El espaciado entre curvas mide qué tan rápido cambia $z$: más separación, cambio más suave."
        }
      ],
      "mc": [
        {
          "id": "mc2-36-1",
          "q": "¿Cómo se recupera mentalmente la forma de la superficie a partir del mapa de contorno?",
          "options": [
            "Elevando cada curva a su altura correspondiente",
            "Girando cada curva alrededor del eje vertical",
            "Estirando cada curva hasta que se toquen entre sí",
            "Inclinando cada curva según su pendiente media"
          ],
          "correctIndex": 0,
          "explain": "El apunte lo dice textual: se eleva cada curva a la altura apropiada, sin estirarla ni inclinarla."
        },
        {
          "id": "mc2-36-2",
          "q": "En física, ¿qué nombre reciben las curvas de nivel del potencial eléctrico?",
          "options": [
            "Se las conoce como curvas isotermas",
            "Se las conoce como curvas equipotenciales",
            "Se las conoce como curvas de indiferencia",
            "Se las conoce como curvas isohietas"
          ],
          "correctIndex": 1,
          "explain": "En todos los puntos de esa curva el potencial eléctrico toma el mismo valor."
        },
        {
          "id": "mc2-36-3",
          "q": "Para el paraboloide del ejemplo, ¿qué figura da la curva de nivel de cota cero?",
          "options": [
            "Un par de rectas que se cruzan",
            "Una circunferencia de radio unitario",
            "Un único punto del plano",
            "El conjunto vacío del plano"
          ],
          "correctIndex": 2,
          "explain": "$x^2 + y^2 = 0$ obliga a que ambas variables sean cero: queda solo el origen."
        },
        {
          "id": "mc2-36-4",
          "q": "¿Qué muestran las curvas de indiferencia en economía?",
          "options": [
            "El costo mínimo de producir dos bienes",
            "La cantidad máxima de bienes disponibles",
            "El precio relativo entre dos bienes dados",
            "Las combinaciones de igual satisfacción"
          ],
          "correctIndex": 3,
          "explain": "Son las combinaciones de cantidades de dos bienes que producen el mismo nivel de satisfacción al consumidor."
        }
      ],
      "ms": [
        {
          "id": "ms2-36-1",
          "q": "¿Qué es correcto sobre el conjunto de curvas de nivel de una función?",
          "options": [
            "Siempre está incluido en el dominio de la función",
            "Funciona como un mapa de contorno de la función",
            "Cada cota determina una única curva de nivel",
            "Distintas cotas pueden compartir algún punto",
            "Cada curva es siempre una circunferencia"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "Las curvas de cotas distintas nunca se cortan, y la forma depende de la función: pueden ser rectas, parábolas o hipérbolas."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-36-1", "front": "Analogía para entender las curvas de nivel", "back": "Cortar una montaña con rebanadas horizontales y apoyar cada rebanada sobre la mesa: eso es un mapa topográfico." },
      { "id": "fc2-36-2", "front": "Por qué no pueden cruzarse dos curvas de nivel", "back": "El punto de cruce tendría dos imágenes distintas a la vez y la relación dejaría de ser función." },
      { "id": "fc2-36-3", "front": "Qué se lee del espaciado entre curvas", "back": "Curvas muy juntas indican que $z$ cambia deprisa; curvas separadas indican una variación lenta." },
      { "id": "fc2-36-4", "front": "Nombres que reciben según el área", "back": "Isobaras, isotermas e isohietas en meteorología; curvas de indiferencia en economía; equipotenciales en física; mapas de contorno en topografía." }
    ]
  },
  "37": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-37-1",
          "q": "El TP pide el dominio de las diez funciones solo en forma analítica.",
          "a": false,
          "explain": "La consigna pide determinarlo analítica y gráficamente."
        },
        {
          "id": "tf2-37-2",
          "q": "Hay un ejercicio que va al revés: parte de la región dibujada para llegar a la fórmula.",
          "a": true,
          "explain": "Es el ejercicio 2, que pide escribir la ecuación de una función cuyo dominio sea la región representada."
        },
        {
          "id": "tf2-37-3",
          "q": "El práctico marca dos ítems como de entrega obligatoria.",
          "a": true,
          "explain": "Son el 1.e. y el 1.f., destacados en negrita en el enunciado original."
        },
        {
          "id": "tf2-37-4",
          "q": "El último ejercicio pide graficar completa la curva de nivel de cota uno.",
          "a": false,
          "explain": "Pide escribir tres puntos que pertenezcan a esa curva, nada más."
        }
      ],
      "mc": [
        {
          "id": "mc2-37-1",
          "q": "¿Cuántas curvas de nivel pide determinar el ejercicio 3 por cada función?",
          "options": [
            "Pide determinar exactamente tres curvas",
            "Pide determinar exactamente cinco curvas",
            "Pide determinar exactamente dos curvas",
            "Pide determinar todas las curvas posibles"
          ],
          "correctIndex": 0,
          "explain": "Tres curvas de nivel por función, de forma gráfica y analítica."
        },
        {
          "id": "mc2-37-2",
          "q": "¿Qué operación aparece en el ítem obligatorio que tiene un producto de dos factores?",
          "options": [
            "Un cociente entre dos logaritmos naturales",
            "Una raíz cuadrada por un logaritmo natural",
            "Una exponencial por una raíz cuadrada",
            "Un logaritmo dividido por una raíz cuadrada"
          ],
          "correctIndex": 1,
          "explain": "El ítem 1.f. es $\\sqrt{x^2-9} \\cdot \\ln(1-x^2)$: raíz por logaritmo."
        },
        {
          "id": "mc2-37-3",
          "q": "Para resolver el ejercicio 4, ¿cuál es el camino más directo?",
          "options": [
            "Derivar la función y buscar sus puntos críticos",
            "Graficar la superficie y cortarla con un plano",
            "Igualar la función a uno y despejar una variable",
            "Calcular el dominio y elegir puntos del borde"
          ],
          "correctIndex": 2,
          "explain": "Se iguala a la cota, se despeja $y$ y se eligen tres valores cualesquiera de $x$, verificando después."
        }
      ],
      "ms": [
        {
          "id": "ms2-37-1",
          "q": "¿Qué tipos de operación aparecen en las funciones del ejercicio 1?",
          "options": [
            "Raíces cuadradas de expresiones en dos variables",
            "Logaritmos naturales de expresiones variables",
            "Cocientes con denominadores variables",
            "Exponenciales con exponente irracional",
            "Funciones trigonométricas de las variables"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El ítem j) es una exponencial con exponente una raíz. No hay ninguna función trigonométrica en el práctico."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-37-1", "front": "Las cuatro consignas del TP en una línea cada una", "back": "1) Dominios analíticos y gráficos de diez funciones. 2) De la región a la fórmula. 3) Tres curvas de nivel de cinco funciones. 4) Tres puntos de la curva de nivel de cota uno." },
      { "id": "fc2-37-2", "front": "Qué hay que entregar sí o sí", "back": "Los ítems 1.e. y 1.f., que combinan logaritmo en el denominador y raíz por logaritmo respectivamente." },
      { "id": "fc2-37-3", "front": "Cómo encarar el ejercicio 2", "back": "Asociar cada borde con la operación que lo genera: borde recto punteado sale de un logaritmo; borde curvo punteado sale de una raíz en el denominador." },
      { "id": "fc2-37-4", "front": "Receta para el ejercicio 4", "back": "Igualar la función a la cota, despejar una variable y elegir tres valores libres de la otra. Verificar reemplazando en la función original." }
    ]
  },
  "38": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-38-1",
          "q": "La resolución de la cátedra deja sin hacer justamente los dos ítems de entrega obligatoria.",
          "a": true,
          "explain": "Los ítems e) y f) del ejercicio 1 aparecen con rayitas, sin respuesta."
        },
        {
          "id": "tf2-38-2",
          "q": "El dominio del ítem i) es un círculo de radio uno centrado en el origen.",
          "a": false,
          "explain": "Son dos condiciones independientes, $x^2 \\leq 1$ e $y^2 \\leq 1$: la región resultante es un cuadrado, no un círculo."
        },
        {
          "id": "tf2-38-3",
          "q": "En el ítem j) la exponencial no agrega ninguna restricción propia al dominio.",
          "a": true,
          "explain": "La exponencial acepta cualquier real; la única restricción viene de la raíz del exponente."
        },
        {
          "id": "tf2-38-4",
          "q": "Para la función producto de dos variables, la curva de nivel de cota cero es una hipérbola.",
          "a": false,
          "explain": "Con cota cero queda $xy = 0$, es decir los dos ejes coordenados."
        },
        {
          "id": "tf2-38-5",
          "q": "Las curvas de nivel del logaritmo de una diferencia resultan ser rectas paralelas.",
          "a": true,
          "explain": "Todas tienen pendiente uno y solo cambia la ordenada al origen."
        }
      ],
      "mc": [
        {
          "id": "mc2-38-1",
          "q": "¿Por qué el dominio del ítem g) usa desigualdad estricta en la condición del círculo?",
          "options": [
            "Porque el logaritmo exige argumento positivo",
            "Porque el círculo tiene radio no entero",
            "Porque la raíz está ubicada en el denominador",
            "Porque el numerador cambia de signo ahí"
          ],
          "correctIndex": 2,
          "explain": "La raíz no puede anularse porque divide, así que el radicando debe ser estrictamente positivo y el borde queda afuera."
        },
        {
          "id": "mc2-38-2",
          "q": "¿Cuántas condiciones tiene el dominio del ítem h) y por qué?",
          "options": [
            "Dos, por la raíz y por el logaritmo",
            "Tres, por la raíz y las dos del logaritmo",
            "Una, por el radicando del numerador",
            "Cuatro, una por cada término presente"
          ],
          "correctIndex": 1,
          "explain": "El radicando no negativo, el argumento del logaritmo positivo y el logaritmo distinto de cero por estar en el denominador."
        },
        {
          "id": "mc2-38-3",
          "q": "Las tres curvas de nivel del primer ítem del ejercicio 3 son parábolas que se diferencian en:",
          "options": [
            "La orientación de su eje de simetría",
            "El ancho de apertura de sus ramas",
            "La posición vertical de su vértice",
            "El sentido en que abren sus ramas"
          ],
          "correctIndex": 2,
          "explain": "Todas llevan el mismo coeficiente $\\frac{1}{2}$ en $x^2$: solo cambia el término independiente, o sea la altura."
        },
        {
          "id": "mc2-38-4",
          "q": "En la función que divide $x$ por $y^2+1$, ¿qué tipo de curva dan las cotas distintas de cero?",
          "options": [
            "Parábolas de eje horizontal",
            "Parábolas de eje vertical",
            "Hipérbolas equiláteras",
            "Circunferencias concéntricas"
          ],
          "correctIndex": 0,
          "explain": "Al despejar queda $x$ en función de $y^2$, así que las parábolas abren hacia la derecha."
        }
      ],
      "ms": [
        {
          "id": "ms2-38-1",
          "q": "¿Qué características de las respuestas del ejercicio 2 conviene retener?",
          "options": [
            "El logaritmo genera el borde recto excluido",
            "La raíz en el denominador genera el borde curvo excluido",
            "Ambas respuestas son cocientes de logaritmo sobre raíz",
            "Ambas respuestas incluyen una función exponencial",
            "Ambas respuestas tienen dominio igual a todo el plano"
          ],
          "correctIndexes": [0, 1, 2],
          "explain": "No hay exponenciales en las respuestas y, por definición del ejercicio, el dominio es una región acotada y no todo el plano."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-38-1", "front": "Cómo se refleja en el dominio que la raíz esté en el denominador", "back": "La desigualdad pasa de no estricta a estricta: el borde deja de pertenecer al dominio y se dibuja punteado." },
      { "id": "fc2-38-2", "front": "Por qué el ítem i) da un cuadrado y no un círculo", "back": "Porque las dos condiciones son independientes ($x^2 \\leq 1$ e $y^2 \\leq 1$) en lugar de estar sumadas en una sola." },
      { "id": "fc2-38-3", "front": "Mecánica general del ejercicio 3", "back": "Escribir $F(x;y) = k$, despejar la variable que salga más limpia y reconocer la curva. Las cotas $0$, $1$ y $-1$ suelen ser las más cómodas." },
      { "id": "fc2-38-4", "front": "Qué suele pasar con la cota cero", "back": "Muchas veces degenera la curva: en el producto $xy$ da los ejes, en la diferencia de cuadrados da dos rectas y en el paraboloide da un punto." },
      { "id": "fc2-38-5", "front": "Lógica detrás de las respuestas del ejercicio 2", "back": "El logaritmo aporta el semiplano abierto limitado por una recta y la raíz del denominador aporta el interior de la curva con borde excluido." }
    ]
  },
  "50": {
    "quiz2": {
      "tf": [
        { "id": "tf2-50-1", "q": "Al calcular $F'_y$ la variable $x$ se trata como una constante durante toda la derivación.", "a": true, "explain": "Es la regla práctica del apunte: se congela la variable que no interviene y se deriva como si fuera una función de una sola variable." },
        { "id": "tf2-50-2", "q": "El cociente incremental respecto de $x$ se construye dividiendo el incremento de la función por el incremento de $y$.", "a": false, "explain": "Se divide por $\\Delta x$: el cociente incremental respecto de $x$ es $\\dfrac{\\Delta_x z}{\\Delta x}$." },
        { "id": "tf2-50-3", "q": "El punto $(x_0; y_0)$ debe ser interior al dominio de la función para plantear la derivada parcial.", "a": true, "explain": "El apunte lo pide expresamente al enunciar el planteo: $(x_0; y_0)$ es un punto interior al dominio de $F$." },
        { "id": "tf2-50-4", "q": "Derivar $x^y$ respecto de $x$ y respecto de $y$ requiere aplicar exactamente la misma regla en ambos casos.", "a": false, "explain": "Respecto de $x$ es una potencia y respecto de $y$ es una exponencial: dos reglas distintas para la misma expresión." },
        { "id": "tf2-50-5", "q": "La curva que se obtiene al cortar la superficie con el plano $y = y_0$ está contenida en ese mismo plano.", "a": true, "explain": "Por eso la recta tangente a esa curva también vive en el plano $y = y_0$, y su pendiente es la derivada parcial respecto de $x$." }
      ],
      "mc": [
        {
          "id": "mc2-50-1",
          "q": "¿Qué se obtiene al intersecar la superficie de la silla de montar con el plano $y = 0$?",
          "options": [
            "Una recta que pasa por el origen del sistema",
            "Una parábola contenida en ese mismo plano",
            "Una circunferencia centrada en el origen",
            "Una hipérbola de dos ramas separadas"
          ],
          "correctIndex": 1,
          "explain": "El apunte señala que la intersección es una parábola, y la pendiente de su tangente en el origen es la derivada parcial respecto de $x$."
        },
        {
          "id": "mc2-50-2",
          "q": "Para $F(x; y) = x^3 + y^3 - 3xy$, ¿cuál es la derivada parcial respecto de $y$?",
          "options": [
            "$3y^2 - 3x$",
            "$3x^2 - 3y$",
            "$3y^2 - 3xy$",
            "$3x^2 + 3y^2$"
          ],
          "correctIndex": 0,
          "explain": "Con $x$ fija: la derivada de $y^3$ es $3y^2$, la de $x^3$ es cero y la de $-3xy$ es $-3x$."
        },
        {
          "id": "mc2-50-3",
          "q": "¿Qué interpretación física propone el apunte para las derivadas parciales?",
          "options": [
            "El área encerrada bajo la superficie estudiada",
            "El valor máximo que alcanza la función",
            "La distancia entre dos puntos de la superficie",
            "Razones de cambio o coeficientes de variación"
          ],
          "correctIndex": 3,
          "explain": "Se interpretan como razones de cambio, variaciones instantáneas o coeficientes de variación respecto de la variable que se deriva."
        }
      ],
      "ms": [
        {
          "id": "ms2-50-1",
          "q": "¿Qué condiciones y elementos requiere el planteo de la derivada parcial respecto de $x$?",
          "options": [
            "Dejar constante la variable $y$ en el valor $y_0$",
            "Incrementar $x_0$ en un valor $\\Delta x$",
            "Que el punto incrementado siga perteneciendo al dominio",
            "Tomar el límite del cociente incremental con $\\Delta x \\to 0$",
            "Que la función sea continua en todo el plano"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "La continuidad en todo el plano no se exige en ningún momento: el planteo es local y solo pide que el punto incrementado esté en el dominio."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-50-1", "front": "¿Qué papel cumple el plano $y = y_0$ en la interpretación geométrica?", "back": "Corta la superficie y genera una curva; la derivada parcial respecto de $x$ es la pendiente de la recta tangente a esa curva en el punto." },
      { "id": "fc2-50-2", "front": "¿Cómo se escribe el incremento de la función respecto de $x$?", "back": "$\\Delta_x z = F(x_0 + \\Delta x; y_0) - F(x_0; y_0)$, con $y$ fija en $y_0$." },
      { "id": "fc2-50-3", "front": "¿Por qué la silla de montar sirve de ejemplo?", "back": "Porque las dos secciones por los planos coordenados son parábolas que abren en sentidos opuestos, así que las dos derivadas parciales se leen sobre curvas de forma distinta." },
      { "id": "fc2-50-4", "front": "Regla práctica en una frase", "back": "Derivar respecto de una variable equivale a tratar a la otra como si fuera un número fijo." }
    ]
  },

  "51": {
    "quiz2": {
      "tf": [
        { "id": "tf2-51-1", "q": "Las derivadas parciales de segundo orden se obtienen derivando las derivadas primeras respecto de cada una de las variables.", "a": true, "explain": "De $F'_x$ salen $F''_{xx}$ y $F''_{xy}$; de $F'_y$ salen $F''_{yx}$ y $F''_{yy}$." },
        { "id": "tf2-51-2", "q": "El proceso de derivación sucesiva se detiene obligatoriamente en el segundo orden.", "a": false, "explain": "Si las derivadas segundas siguen siendo funciones de $x$ e $y$, pueden derivarse para obtener las de tercer orden y así sucesivamente." },
        { "id": "tf2-51-3", "q": "El teorema de Schwarz exige hipótesis de continuidad en un entorno del punto considerado.", "a": true, "explain": "Pide que $F'_x$, $F'_y$ y $F''_{xy}$ sean continuas en un entorno de $(a; b)$, punto interior al dominio." },
        { "id": "tf2-51-4", "q": "En la notación $F''_{yx}$ la última letra del subíndice indica la primera variable respecto de la cual se derivó.", "a": false, "explain": "Se lee de izquierda a derecha: en $F''_{yx}$ primero se derivó respecto de $y$ y después respecto de $x$." },
        { "id": "tf2-51-5", "q": "El teorema de Schwarz afirma la existencia de una de las derivadas cruzadas, además de su igualdad con la otra.", "a": true, "explain": "La conclusión es doble: existe $F''_{yx}$ y además coincide con $F''_{xy}$." }
      ],
      "mc": [
        {
          "id": "mc2-51-1",
          "q": "Al derivar $F'_x = 8xy^3$ respecto de $y$, ¿qué expresión se obtiene?",
          "options": [
            "$8y^3$",
            "$24x^2y$",
            "$24xy^2$",
            "$12x^2y^2$"
          ],
          "correctIndex": 2,
          "explain": "Con $x$ fija, la derivada de $y^3$ es $3y^2$, y multiplicando por el $8x$ que estaba delante queda $24xy^2$."
        },
        {
          "id": "mc2-51-2",
          "q": "Para $F(x; y) = e^x y + e^y x$, ¿qué resultado da la derivada parcial primera respecto de $x$?",
          "options": [
            "$e^x y + e^y$",
            "$e^x + e^y x$",
            "$e^x y + e^y x$",
            "$e^x + e^y$"
          ],
          "correctIndex": 0,
          "explain": "Con $y$ constante: la derivada de $e^x y$ es $e^x y$ y la de $e^y x$ es $e^y$."
        },
        {
          "id": "mc2-51-3",
          "q": "¿Cuál es la utilidad práctica de que las derivadas cruzadas coincidan?",
          "options": [
            "Permite prescindir de calcular las derivadas primeras",
            "Garantiza que la función tenga un extremo relativo",
            "Sirve como control del cálculo por dos caminos distintos",
            "Asegura que la función sea derivable en todo el plano"
          ],
          "correctIndex": 2,
          "explain": "Si llegás a la misma expresión derivando en los dos órdenes, es una verificación de que no te equivocaste en el camino."
        }
      ],
      "ms": [
        {
          "id": "ms2-51-1",
          "q": "¿Qué afirmaciones sobre las derivadas sucesivas se desprenden del apunte?",
          "options": [
            "Una función de dos variables tiene cuatro derivadas de segundo orden",
            "Dos de esas cuatro reciben el nombre de cruzadas",
            "Las derivadas primeras son a su vez funciones de dos variables",
            "El proceso puede continuar hacia el tercer orden y siguientes",
            "Las cuatro derivadas segundas siempre coinciden entre sí"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Schwarz iguala solo las dos cruzadas; $F''_{xx}$ y $F''_{yy}$ en general son distintas entre sí y distintas de las cruzadas."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-51-1", "front": "¿De dónde salen las cuatro derivadas segundas?", "back": "De derivar cada una de las dos derivadas primeras respecto de cada una de las dos variables: dos por dos." },
      { "id": "fc2-51-2", "front": "Hipótesis del teorema de Schwarz", "back": "Continuidad de $F'_x$, $F'_y$ y $F''_{xy}$ en un entorno de un punto $(a; b)$ interior al dominio." },
      { "id": "fc2-51-3", "front": "Conclusión del teorema de Schwarz", "back": "Existe $F''_{yx}$ y es igual a $F''_{xy}$." },
      { "id": "fc2-51-4", "front": "¿Cómo se lee el orden de los subíndices?", "back": "De izquierda a derecha, en el mismo orden en que se fue derivando." }
    ]
  },

  "52": {
    "quiz2": {
      "tf": [
        { "id": "tf2-52-1", "q": "El trabajo práctico de derivadas parciales se organiza en cinco consignas numeradas.", "a": true, "explain": "Van del 1 al 5: cálculo por regla, una verificación, dos demostraciones, la verificación de Schwarz y una última identidad." },
        { "id": "tf2-52-2", "q": "El ejercicio 4 propone funciones para las cuales hay que hallar sus extremos relativos.", "a": false, "explain": "El ejercicio 4 pide verificar que las derivadas segundas cruzadas son iguales; los extremos son tema de otra unidad." },
        { "id": "tf2-52-3", "q": "Uno de los ítems del ejercicio 1 tiene un exponente que depende de las dos variables a la vez.", "a": true, "explain": "El ítem h) es $(2x^3+1)^{xy}$, con el producto $xy$ en el exponente." },
        { "id": "tf2-52-4", "q": "Las dos consignas de entrega obligatoria pertenecen al mismo ejercicio del trabajo práctico.", "a": false, "explain": "Una es del ejercicio 1 y la otra del ejercicio 4: son los ítems 1.e. y 4.e." },
        { "id": "tf2-52-5", "q": "El ejercicio 3 pide demostrar identidades que combinan las dos derivadas parciales primeras.", "a": true, "explain": "Ambas identidades tienen la forma $x \\cdot z'_x + y \\cdot z'_y$ igualada a una expresión dada." }
      ],
      "mc": [
        {
          "id": "mc2-52-1",
          "q": "¿Qué expresión aparece en el ejercicio 2 del trabajo práctico?",
          "options": [
            "El logaritmo de una raíz cuadrada",
            "Un arco tangente de un cociente",
            "Una raíz de una diferencia de cuadrados",
            "Una potencia de exponente variable"
          ],
          "correctIndex": 1,
          "explain": "El ejercicio 2 propone $F(x; y) = \\operatorname{arctg}\\left(\\dfrac{x}{y}\\right)$ para verificar que la suma de las derivadas segundas puras se anula."
        },
        {
          "id": "mc2-52-2",
          "q": "¿Qué identidad hay que verificar en el ejercicio 5?",
          "options": [
            "Que la suma de las derivadas segundas puras se anula",
            "Que las derivadas segundas cruzadas coinciden",
            "Que la suma de las derivadas segundas puras vale $\\dfrac{2}{\\sqrt{x^2+y^2}}$",
            "Que las derivadas primeras suman una constante"
          ],
          "correctIndex": 2,
          "explain": "Para $F(x;y) = \\ln\\left(\\sqrt{x^2+y^2}\\right)$ hay que llegar a $F''_{xx} + F''_{yy} = \\dfrac{2}{\\sqrt{x^2+y^2}}$."
        },
        {
          "id": "mc2-52-3",
          "q": "El ítem de entrega obligatoria del ejercicio 4 es una función que combina:",
          "options": [
            "Una raíz cuadrada de una diferencia de cuadrados",
            "Un logaritmo natural de una resta de variables",
            "Un producto de un polinomio por un coseno",
            "Dos exponenciales multiplicadas por variables cruzadas"
          ],
          "correctIndex": 3,
          "explain": "El 4.e. es $F(x; y) = y \\cdot e^x + x \\cdot e^y$: cada exponencial aparece multiplicada por la otra variable."
        }
      ],
      "ms": [
        {
          "id": "ms2-52-1",
          "q": "¿Qué tipos de tareas plantea el trabajo práctico de derivadas parciales?",
          "options": [
            "Calcular derivadas parciales aplicando reglas de derivación",
            "Verificar que una combinación de derivadas segundas se anula",
            "Demostrar identidades que involucran las derivadas primeras",
            "Comprobar la igualdad de las derivadas segundas cruzadas",
            "Determinar los intervalos de crecimiento de una superficie"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El crecimiento por intervalos es un tema de funciones de una variable y no aparece en este trabajo práctico."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-52-1", "front": "¿Cuáles son las dos consignas de entrega obligatoria?", "back": "El ítem e) del ejercicio 1 y el ítem e) del ejercicio 4." },
      { "id": "fc2-52-2", "front": "¿Qué se pide en el ejercicio 2?", "back": "Verificar que $F''_{xx} + F''_{yy} = 0$ para el arco tangente de $x/y$." },
      { "id": "fc2-52-3", "front": "¿Qué forma tienen las dos demostraciones del ejercicio 3?", "back": "Ambas piden probar una igualdad del tipo $x \\cdot z'_x + y \\cdot z'_y = \\ldots$, una con una exponencial y otra con un logaritmo." },
      { "id": "fc2-52-4", "front": "¿Cuántas funciones hay que verificar en el ejercicio 4?", "back": "Seis, etiquetadas de la a) a la f)." }
    ]
  },

  "53": {
    "quiz2": {
      "tf": [
        { "id": "tf2-53-1", "q": "La resolución oficial desarrolla por escrito el procedimiento completo de cada ejercicio del trabajo práctico.", "a": false, "explain": "En varios casos solo informa el resultado, y en el ejercicio 3 se limita a decir que la identidad se verifica." },
        { "id": "tf2-53-2", "q": "Uno de los ejercicios remite al material audiovisual de la cátedra en lugar de resolverse en el PDF.", "a": true, "explain": "El ejercicio 2 dice textualmente que está desarrollado en la infografía." },
        { "id": "tf2-53-3", "q": "En el ítem donde la función es un cociente de diferencias, las derivadas cruzadas resultan nulas.", "a": true, "explain": "La expresión se separa en un término que depende solo de $x$ y otro solo de $y$, así que las cruzadas se anulan." },
        { "id": "tf2-53-4", "q": "Todos los resultados publicados en la resolución coinciden exactamente con el cálculo correcto.", "a": false, "explain": "Hay al menos dos erratas: un signo y un exponente en un ítem del ejercicio 1, y un término faltante en un ítem del ejercicio 4." },
        { "id": "tf2-53-5", "q": "El ítem cuya función es un polinomio simple tiene una derivada parcial que resulta ser una constante.", "a": true, "explain": "Para $4x^4 + 2y - 6$ la derivada respecto de $y$ vale $2$, una constante." }
      ],
      "mc": [
        {
          "id": "mc2-53-1",
          "q": "¿Cuál es la derivada respecto de $y$ de la función $\\dfrac{x-3}{y+2}$ según la resolución?",
          "options": [
            "$\\dfrac{-x+3}{(y+2)^2}$",
            "$\\dfrac{x-3}{(y+2)^2}$",
            "$\\dfrac{1}{(y+2)^2}$",
            "$\\dfrac{-1}{y+2}$"
          ],
          "correctIndex": 0,
          "explain": "Tratando $x-3$ como constante y derivando $(y+2)^{-1}$ queda $-(x-3)(y+2)^{-2}$, o sea $\\dfrac{-x+3}{(y+2)^2}$."
        },
        {
          "id": "mc2-53-2",
          "q": "En la función $5x^{y-1}$, ¿qué derivada parcial incluye un logaritmo natural en su expresión?",
          "options": [
            "Ninguna de las dos derivadas parciales",
            "La derivada respecto de $x$",
            "Las dos derivadas parciales por igual",
            "La derivada respecto de $y$"
          ],
          "correctIndex": 3,
          "explain": "Al derivar respecto de $y$ la base queda fija y aparece la regla de la exponencial, que introduce el $\\ln x$."
        },
        {
          "id": "mc2-53-3",
          "q": "Para $F(x; y) = \\ln(x-y)$, ¿qué relación hay entre las dos derivadas parciales primeras?",
          "options": [
            "Son iguales entre sí",
            "Son opuestas entre sí",
            "Una es el cuadrado de la otra",
            "Una de ellas es nula"
          ],
          "correctIndex": 1,
          "explain": "Resultan $\\dfrac{1}{x-y}$ y $-\\dfrac{1}{x-y}$, que difieren solo en el signo."
        }
      ],
      "ms": [
        {
          "id": "ms2-53-1",
          "q": "¿Qué situaciones se presentan en el PDF de resolución del trabajo práctico?",
          "options": [
            "Ítems reemplazados por una línea de guiones",
            "Una consigna remitida al material audiovisual",
            "Respuestas limitadas a la frase de que la identidad se verifica",
            "Resultados publicados con alguna errata de signo o exponente",
            "Gráficos de las superficies correspondientes a cada función"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El PDF de resolución no incluye ningún gráfico: es puramente algebraico."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-53-1", "front": "¿Por qué aparecen líneas de guiones en la resolución?", "back": "Marcan los ítems de entrega obligatoria, que la cátedra deliberadamente no resuelve." },
      { "id": "fc2-53-2", "front": "¿Qué pasa con las cruzadas cuando la función se separa en términos de una sola variable?", "back": "Se anulan: si cada sumando depende de una sola variable, derivar respecto de la otra da cero." },
      { "id": "fc2-53-3", "front": "Erratas a tener en cuenta en la resolución", "back": "En el ítem f) del ejercicio 1 faltan el signo menos y el exponente 3/2 en la derivada respecto de $y$; en el ítem b) del ejercicio 4 falta un factor $y$ en la derivada respecto de $x$." },
      { "id": "fc2-53-4", "front": "¿Qué significa la respuesta 'se verifica'?", "back": "Que la identidad pedida es cierta, pero el desarrollo queda a cargo de quien resuelve el ejercicio." }
    ]
  },

  "54": {
    "quiz2": {
      "tf": [
        { "id": "tf2-54-1", "q": "Las definiciones de máximo y mínimo relativo se apoyan en la existencia de un entorno del punto.", "a": true, "explain": "En ambos casos se pide que exista un entorno donde la comparación de imágenes se cumpla." },
        { "id": "tf2-54-2", "q": "Un punto de ensilladura es aquel donde la función deja de estar definida.", "a": false, "explain": "La función está perfectamente definida ahí: lo que ocurre es que el plano tangente atraviesa la superficie." },
        { "id": "tf2-54-3", "q": "La comparación de imágenes en la definición de extremo relativo se hace sobre un entorno reducido del punto.", "a": true, "explain": "Se excluye el propio punto, y por eso las desigualdades pueden escribirse en forma estricta." },
        { "id": "tf2-54-4", "q": "El punto de ensilladura se identifica dando únicamente sus dos coordenadas en el plano.", "a": false, "explain": "El apunte lo escribe como una terna que incluye la imagen de la función en ese punto." },
        { "id": "tf2-54-5", "q": "Las definiciones de extremo relativo son de carácter local.", "a": true, "explain": "Solo comparan con los puntos de un entorno, no con todo el dominio de la función." }
      ],
      "mc": [
        {
          "id": "mc2-54-1",
          "q": "¿Qué comportamiento del plano tangente caracteriza a un punto de ensilladura?",
          "options": [
            "Se apoya sobre la superficie sin tocarla",
            "Coincide punto a punto con la superficie",
            "Atraviesa la superficie en ese punto",
            "Resulta perpendicular a la superficie"
          ],
          "correctIndex": 2,
          "explain": "Esa es exactamente la definición del apunte: el plano tangente atraviesa a la superficie en dicho punto."
        },
        {
          "id": "mc2-54-2",
          "q": "En la definición de mínimo relativo, ¿cómo se compara la imagen del punto con las del entorno?",
          "options": [
            "La imagen del punto resulta menor que las demás",
            "La imagen del punto resulta mayor que las demás",
            "La imagen del punto es igual al promedio de las demás",
            "La imagen del punto no admite comparación"
          ],
          "correctIndex": 0,
          "explain": "El mínimo relativo se define porque la imagen del punto es menor a las imágenes de todos los puntos del entorno."
        },
        {
          "id": "mc2-54-3",
          "q": "¿Qué tipo de superficie ilustra el máximo relativo en el apunte?",
          "options": [
            "Un paraboloide que abre hacia arriba",
            "Una silla de montar",
            "Un plano inclinado sin curvatura",
            "Una cúpula que abre hacia abajo"
          ],
          "correctIndex": 3,
          "explain": "La gráfica del máximo relativo es una superficie con forma de cúpula cuyo punto más alto se señala con una flecha."
        }
      ],
      "ms": [
        {
          "id": "ms2-54-1",
          "q": "¿Qué conceptos introduce esta sección del apunte?",
          "options": [
            "La noción de máximo relativo de una función de dos variables",
            "La noción de mínimo relativo de una función de dos variables",
            "La noción de punto de ensilladura",
            "El criterio geométrico del plano tangente",
            "El cálculo del determinante Hessiano"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El Hessiano aparece recién en la sección siguiente, al enunciar la condición suficiente."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-54-1", "front": "¿Qué distingue a un punto silla de un extremo relativo?", "back": "En el extremo el plano tangente deja a la superficie de un solo lado; en la silla la atraviesa." },
      { "id": "fc2-54-2", "front": "¿Por qué las definiciones hablan de entorno reducido?", "back": "Para excluir el propio punto de la comparación y poder escribir las desigualdades en forma estricta." },
      { "id": "fc2-54-3", "front": "¿Son locales o globales los extremos relativos?", "back": "Locales: la comparación se limita a un entorno del punto, no a todo el dominio." },
      { "id": "fc2-54-4", "front": "¿Cómo se nombra un punto de ensilladura?", "back": "Como una terna formada por las dos coordenadas del plano y la imagen de la función en ese punto." }
    ]
  },

  "55": {
    "quiz2": {
      "tf": [
        { "id": "tf2-55-1", "q": "La condición necesaria admite también el caso en que las derivadas parciales no existan en el punto.", "a": true, "explain": "El enunciado es una disyunción: o ambas parciales valen cero, o ambas no existen." },
        { "id": "tf2-55-2", "q": "El determinante Hessiano se construye con las derivadas parciales primeras de la función.", "a": false, "explain": "Se construye con las cuatro derivadas parciales de segundo orden, evaluadas en el punto crítico." },
        { "id": "tf2-55-3", "q": "Un Hessiano nulo deja indeterminada la naturaleza del punto crítico.", "a": true, "explain": "El apunte aclara que en ese caso el criterio no sirve y hay que buscar otro camino." },
        { "id": "tf2-55-4", "q": "Basta con que el Hessiano sea positivo para saber si el punto es máximo o mínimo.", "a": false, "explain": "El Hessiano positivo asegura que hay extremo, pero hace falta el signo de la derivada segunda pura para saber de cuál se trata." },
        { "id": "tf2-55-5", "q": "El método completo se organiza en cuatro pasos, empezando por las derivadas parciales primeras.", "a": true, "explain": "Primeras igualadas a cero, resolver el sistema, calcular las segundas y armar el Hessiano, evaluar y concluir." }
      ],
      "mc": [
        {
          "id": "mc2-55-1",
          "q": "¿Qué forma desarrollada tiene el determinante Hessiano?",
          "options": [
            "La suma de las dos derivadas segundas puras",
            "El producto de las derivadas segundas puras menos el cuadrado de la cruzada",
            "El producto de las cuatro derivadas segundas",
            "La diferencia entre las dos derivadas cruzadas"
          ],
          "correctIndex": 1,
          "explain": "Desarrollando el determinante de $2 \\times 2$ queda $f''_{xx} \\cdot f''_{yy} - (f''_{xy})^2$."
        },
        {
          "id": "mc2-55-2",
          "q": "En el ejemplo del apunte, ¿qué característica tiene el sistema de la condición necesaria?",
          "options": [
            "Es un sistema lineal con solución única",
            "Es un sistema sin solución posible",
            "Es un sistema con infinitas soluciones",
            "Es un sistema cuadrático de cuatro soluciones"
          ],
          "correctIndex": 0,
          "explain": "Las dos ecuaciones son lineales y se cruzan en un solo punto, de ahí que haya un único punto crítico."
        },
        {
          "id": "mc2-55-3",
          "q": "Un punto crítico con Hessiano negativo se clasifica como:",
          "options": [
            "Máximo relativo de la función",
            "Mínimo relativo de la función",
            "Punto de ensilladura",
            "Caso indeterminado por el criterio"
          ],
          "correctIndex": 2,
          "explain": "Con Hessiano negativo el criterio concluye directamente que se trata de un punto silla."
        }
      ],
      "ms": [
        {
          "id": "ms2-55-1",
          "q": "¿Qué información aporta cada elemento del criterio de clasificación?",
          "options": [
            "El signo del Hessiano distingue entre extremo y silla",
            "El signo de la derivada segunda pura distingue máximo de mínimo",
            "Un Hessiano nulo obliga a descartar el criterio",
            "Las derivadas primeras nulas solo dan candidatos",
            "La derivada cruzada por sí sola determina la naturaleza"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "La derivada cruzada interviene únicamente dentro del determinante; aislada no clasifica nada."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-55-1", "front": "¿Qué significa que la condición sea 'necesaria' y no 'suficiente'?", "back": "Que todo extremo cumple la condición, pero cumplirla no garantiza ser extremo: puede tratarse de un punto silla." },
      { "id": "fc2-55-2", "front": "¿Qué papel juega cada signo en el criterio?", "back": "El del Hessiano decide si hay extremo o silla; el de la derivada segunda pura decide si el extremo es máximo o mínimo." },
      { "id": "fc2-55-3", "front": "¿Qué se hace si el Hessiano da cero?", "back": "El criterio no concluye nada y hay que analizar el punto por otros medios." },
      { "id": "fc2-55-4", "front": "Los cuatro pasos del procedimiento", "back": "Parciales primeras a cero; resolver el sistema; calcular las segundas y armar el determinante; evaluar en cada punto crítico y concluir." }
    ]
  },

  "56": {
    "quiz2": {
      "tf": [
        { "id": "tf2-56-1", "q": "El trabajo práctico incluye problemas de aplicación económica además del cálculo puro.", "a": true, "explain": "Hay un problema de asignación de hectáreas y otro de precios y demandas de dos bienes." },
        { "id": "tf2-56-2", "q": "Todos los ítems del primer ejercicio son polinomios de segundo grado.", "a": false, "explain": "Hay dos cúbicas y una exponencial entre las seis funciones propuestas." },
        { "id": "tf2-56-3", "q": "El último ejercicio del trabajo práctico es de tipo conceptual, para completar espacios en blanco.", "a": true, "explain": "Pide identificar la naturaleza de un punto a partir de datos numéricos y proponer valores compatibles con un máximo." },
        { "id": "tf2-56-4", "q": "En el problema de la granja las dos variables representan cantidades de dinero invertido.", "a": false, "explain": "Representan hectáreas plantadas: $x$ de soja e $y$ de maíz." },
        { "id": "tf2-56-5", "q": "El segundo ítem del ejercicio de completar admite más de una respuesta válida.", "a": true, "explain": "Pide valores compatibles con un máximo relativo, y hay infinitas ternas que cumplen esas condiciones." }
      ],
      "mc": [
        {
          "id": "mc2-56-1",
          "q": "Con los datos del primer ítem del ejercicio de completar, ¿qué resultado se obtiene?",
          "options": [
            "Un punto silla, porque el determinante resulta negativo",
            "Un mínimo relativo, porque la derivada pura es positiva",
            "Un máximo relativo, porque la cruzada es grande",
            "Un caso indeterminado, porque el determinante se anula"
          ],
          "correctIndex": 0,
          "explain": "El determinante da $4 \\cdot 3 - 10^2 = -88$, negativo, y con eso el criterio indica punto silla."
        },
        {
          "id": "mc2-56-2",
          "q": "¿Qué tipo de función se propone en el ítem e) del primer ejercicio?",
          "options": [
            "Una cúbica con término mixto",
            "Una exponencial de exponente cuadrático",
            "Un cociente de polinomios",
            "Un logaritmo de una suma de cuadrados"
          ],
          "correctIndex": 1,
          "explain": "Es $F(x; y) = e^{x^2+y^2}$: una exponencial cuyo exponente es la suma de los cuadrados de las variables."
        },
        {
          "id": "mc2-56-3",
          "q": "En el problema de los dos bienes, ¿qué elementos hay que combinar para armar el beneficio?",
          "options": [
            "Solamente las dos funciones de demanda",
            "Solamente la función de costo conjunta",
            "Los ingresos derivados de las demandas y la función de costo",
            "Las derivadas parciales de las demandas"
          ],
          "correctIndex": 2,
          "explain": "El beneficio es la diferencia entre el ingreso total, que sale de precio por cantidad demandada, y el costo conjunto."
        }
      ],
      "ms": [
        {
          "id": "ms2-56-1",
          "q": "¿Qué habilidades pone en juego este trabajo práctico?",
          "options": [
            "Resolver sistemas para hallar puntos críticos",
            "Calcular y evaluar determinantes de derivadas segundas",
            "Traducir un enunciado económico a una función a optimizar",
            "Interpretar el signo de un determinante en términos de naturaleza del punto",
            "Aproximar numéricamente el valor de un extremo"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "No hay ningún ejercicio de aproximación numérica: todo se resuelve de forma exacta y analítica."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-56-1", "front": "¿Qué ítems del primer ejercicio son de entrega obligatoria?", "back": "El b) y el d): la cuadrática con término mixto y la cúbica con término $3xy^2$." },
      { "id": "fc2-56-2", "front": "¿Qué modela el problema de la granja?", "back": "El beneficio anual en función de las hectáreas plantadas con soja y con maíz, con términos cuadráticos y un término cruzado." },
      { "id": "fc2-56-3", "front": "¿Cómo se arma el beneficio en el problema de los dos bienes?", "back": "Multiplicando cada precio por su cantidad demandada para obtener el ingreso, y restando la función de costo conjunta." },
      { "id": "fc2-56-4", "front": "¿Por qué el ejercicio de completar puede confundir?", "back": "Porque su redacción sugiere un extremo relativo, pero los datos numéricos llevan a un punto silla." }
    ]
  },

  "57": {
    "quiz2": {
      "tf": [
        { "id": "tf2-57-1", "q": "Una misma función del trabajo práctico puede presentar a la vez un extremo relativo y un punto de ensilladura.", "a": true, "explain": "Es lo que ocurre en el último ítem del primer ejercicio, con dos puntos críticos de naturaleza distinta." },
        { "id": "tf2-57-2", "q": "La resolución oficial incluye el desarrollo completo de cada sistema de ecuaciones.", "a": false, "explain": "Solo publica los resultados finales: el punto y su naturaleza." },
        { "id": "tf2-57-3", "q": "La respuesta al problema de la granja reparte por igual la superficie entre los dos cultivos.", "a": true, "explain": "Da 200 hectáreas de soja y 200 de maíz." },
        { "id": "tf2-57-4", "q": "En el problema de los dos bienes ambos productos terminan con el mismo precio óptimo.", "a": false, "explain": "Los precios óptimos son distintos entre sí, y también lo son las cantidades resultantes." },
        { "id": "tf2-57-5", "q": "La respuesta al segundo ítem del ejercicio de completar es una única terna de valores.", "a": false, "explain": "La cátedra aclara que no hay respuesta única: alcanza con cumplir dos condiciones de signo." }
      ],
      "mc": [
        {
          "id": "mc2-57-1",
          "q": "¿Qué naturaleza tiene el punto crítico de la función exponencial del ejercicio 1?",
          "options": [
            "Punto de ensilladura en el origen",
            "Mínimo relativo en el origen",
            "Máximo relativo en el origen",
            "El criterio no permite decidir"
          ],
          "correctIndex": 1,
          "explain": "Como el exponente alcanza su valor más chico en el origen, la exponencial tiene ahí un mínimo relativo de valor 1."
        },
        {
          "id": "mc2-57-2",
          "q": "Con los precios óptimos del problema de los dos bienes, ¿qué cantidades se obtienen?",
          "options": [
            "Doce unidades del primero y ocho del segundo",
            "Ocho unidades del primero y doce del segundo",
            "Dieciséis unidades del primero y nueve del segundo",
            "Dos unidades del primero y una del segundo"
          ],
          "correctIndex": 0,
          "explain": "Reemplazando los precios en las funciones de demanda se obtienen doce y ocho unidades respectivamente."
        },
        {
          "id": "mc2-57-3",
          "q": "¿Qué condiciones debe cumplir la terna de derivadas segundas para que haya máximo relativo?",
          "options": [
            "Determinante negativo y derivada pura positiva",
            "Determinante nulo y derivada cruzada nula",
            "Determinante positivo y derivada pura negativa",
            "Determinante positivo y derivada cruzada negativa"
          ],
          "correctIndex": 2,
          "explain": "Es la respuesta oficial: el determinante debe ser positivo y la derivada segunda respecto de $xx$ negativa."
        }
      ],
      "ms": [
        {
          "id": "ms2-57-1",
          "q": "¿Qué se puede concluir a partir de la resolución del ejercicio 1?",
          "options": [
            "Hay funciones con un único punto crítico",
            "Hay funciones con más de un punto crítico",
            "Aparecen tanto extremos como puntos de ensilladura",
            "Dos de los ítems quedan sin resolver por ser entrega obligatoria",
            "Ninguna de las funciones presenta mínimos relativos"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Varios de los ítems resueltos dan justamente mínimos relativos."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-57-1", "front": "¿Qué enseña el último ítem del ejercicio 1?", "back": "Que hay que evaluar el determinante en cada punto crítico por separado, porque la naturaleza puede cambiar de uno a otro." },
      { "id": "fc2-57-2", "front": "Respuesta al problema de la granja", "back": "Doscientas hectáreas de soja y doscientas de maíz." },
      { "id": "fc2-57-3", "front": "¿Cómo se obtiene el ingreso total en el problema de los dos bienes?", "back": "Multiplicando cada precio por su demanda y sumando: queda una expresión cúbica en cada precio." },
      { "id": "fc2-57-4", "front": "¿Qué caracteriza a la respuesta abierta del ejercicio de completar?", "back": "Que cualquier terna con determinante positivo y derivada segunda pura negativa es una respuesta válida." }
    ]
  },

  "58": {
    "quiz2": {
      "tf": [
        { "id": "tf2-58-1", "q": "En un problema de extremos ligados hay siempre una función objetivo y una condición sobre las variables.", "a": true, "explain": "Esa es la estructura del problema: optimizar un campo escalar sujeto a una restricción." },
        { "id": "tf2-58-2", "q": "En el ejemplo de la caja, la superficie del cartón es la magnitud que se quiere maximizar.", "a": false, "explain": "Lo que se maximiza es el volumen; la superficie del cartón es el dato fijo que restringe las dimensiones." },
        { "id": "tf2-58-3", "q": "El método de reducción convierte el problema en uno de una sola variable.", "a": true, "explain": "Se despeja una variable de la condición y se reemplaza en la función objetivo." },
        { "id": "tf2-58-4", "q": "Una vez reducido el problema, la clasificación del punto crítico usa el determinante Hessiano.", "a": false, "explain": "Al quedar una función de una variable se usa la derivada segunda, igual que en el estudio de funciones de una variable." },
        { "id": "tf2-58-5", "q": "El resultado de un problema de extremos ligados se expresa como un par de valores, uno por cada variable.", "a": true, "explain": "Aunque se resuelva para una sola variable, la otra se recupera con la restricción y se informa el par completo." }
      ],
      "mc": [
        {
          "id": "mc2-58-1",
          "q": "En el ejemplo de la caja de cartón, ¿cuántas variables intervienen en la función objetivo?",
          "options": [
            "Una sola variable",
            "Dos variables",
            "Tres variables",
            "Cuatro variables"
          ],
          "correctIndex": 2,
          "explain": "El volumen se escribe como el producto de las tres dimensiones de la caja."
        },
        {
          "id": "mc2-58-2",
          "q": "¿Qué sigla usa el apunte para indicar el paso de la derivada primera igualada a cero?",
          "options": [
            "C.N., por condición necesaria",
            "C.S., por condición suficiente",
            "P.C., por punto crítico",
            "H., por Hessiano"
          ],
          "correctIndex": 0,
          "explain": "C.N. es la condición necesaria y C.S. la suficiente, que usa la derivada segunda."
        },
        {
          "id": "mc2-58-3",
          "q": "En el ejemplo resuelto por reducción, ¿qué valor toma la derivada segunda en el punto crítico?",
          "options": [
            "Cero, lo que impide concluir",
            "Un valor negativo, indicando máximo",
            "Un valor que depende de la variable",
            "Un valor positivo constante, indicando mínimo"
          ],
          "correctIndex": 3,
          "explain": "La derivada segunda vale 4, una constante positiva, así que el punto es un mínimo condicionado."
        }
      ],
      "ms": [
        {
          "id": "ms2-58-1",
          "q": "¿Qué pasos incluye el método de reducción a una variable?",
          "options": [
            "Despejar una variable a partir de la restricción",
            "Reemplazar esa expresión en la función objetivo",
            "Derivar la función resultante e igualar a cero",
            "Analizar la derivada segunda para clasificar el punto",
            "Construir una función auxiliar con un multiplicador"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El multiplicador pertenece al método de Lagrange, que es la alternativa cuando la reducción no es viable."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-58-1", "front": "¿Qué caracteriza a un problema de extremos ligados?", "back": "Que la optimización no es libre: las variables deben cumplir además una condición dada." },
      { "id": "fc2-58-2", "front": "¿Cuál es la función objetivo en el problema de la caja?", "back": "El volumen, escrito como el producto de las tres dimensiones." },
      { "id": "fc2-58-3", "front": "¿Cuándo conviene el método de reducción?", "back": "Cuando la restricción permite despejar cómodamente una variable en función de la otra." },
      { "id": "fc2-58-4", "front": "¿Qué herramienta clasifica el extremo tras la reducción?", "back": "La derivada segunda de la función de una variable, igual que en el estudio completo de funciones." }
    ]
  },

  "59": {
    "quiz2": {
      "tf": [
        { "id": "tf2-59-1", "q": "La restricción debe reescribirse con todos sus términos en un mismo miembro antes de armar la función auxiliar.", "a": true, "explain": "El método exige la forma $\\varphi(x; y) = 0$, así que hay que pasar todo a un lado del igual." },
        { "id": "tf2-59-2", "q": "La derivada de la función auxiliar respecto del multiplicador reproduce la restricción original.", "a": true, "explain": "Al derivar respecto de $\\lambda$ queda exactamente $\\varphi(x; y)$, e igualarla a cero es imponer la condición." },
        { "id": "tf2-59-3", "q": "El determinante que clasifica los puntos en este método tiene el mismo tamaño que el de extremos relativos.", "a": false, "explain": "El Hessiano orlado es de tres por tres, mientras que el de extremos relativos es de dos por dos." },
        { "id": "tf2-59-4", "q": "Un determinante orlado negativo indica un máximo condicionado.", "a": false, "explain": "Es al revés: el negativo indica mínimo condicionado y el positivo, máximo condicionado." },
        { "id": "tf2-59-5", "q": "El multiplicador forma parte de la solución del sistema, aunque no se informe como coordenada del extremo.", "a": true, "explain": "El punto crítico se obtiene como una terna, pero el extremo condicionado se informa con las dos primeras coordenadas." }
      ],
      "mc": [
        {
          "id": "mc2-59-1",
          "q": "¿Cómo se construye la función auxiliar del método?",
          "options": [
            "Restando la restricción a la función objetivo",
            "Sumando a la función objetivo el multiplicador por la restricción",
            "Multiplicando la función objetivo por la restricción",
            "Dividiendo la función objetivo por el multiplicador"
          ],
          "correctIndex": 1,
          "explain": "La definición es $G = F + \\lambda \\cdot \\varphi$, con la restricción escrita igualada a cero."
        },
        {
          "id": "mc2-59-2",
          "q": "¿Cuántas ecuaciones e incógnitas tiene el sistema que plantea el método?",
          "options": [
            "Dos ecuaciones con dos incógnitas",
            "Cuatro ecuaciones con tres incógnitas",
            "Tres ecuaciones con dos incógnitas",
            "Tres ecuaciones con tres incógnitas"
          ],
          "correctIndex": 3,
          "explain": "Se derivan respecto de las dos variables y del multiplicador, y las tres derivadas se igualan a cero."
        },
        {
          "id": "mc2-59-3",
          "q": "En el ejemplo de los dos números de suma cuatro, ¿qué relación se deduce de las dos primeras ecuaciones?",
          "options": [
            "Que las dos variables son iguales entre sí",
            "Que una variable es el doble de la otra",
            "Que las dos variables son opuestas",
            "Que el multiplicador es nulo"
          ],
          "correctIndex": 0,
          "explain": "De ambas ecuaciones sale el mismo multiplicador expresado con cada variable, y al igualarlas resulta que coinciden."
        }
      ],
      "ms": [
        {
          "id": "ms2-59-1",
          "q": "¿Qué elementos componen el Hessiano orlado?",
          "options": [
            "Las derivadas segundas de la función auxiliar respecto de las variables",
            "Las derivadas cruzadas entre las variables y el multiplicador",
            "Una fila y una columna asociadas al multiplicador",
            "Un determinante de tres filas por tres columnas",
            "El valor de la función objetivo en el punto crítico"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El valor de la función objetivo no entra en el determinante: se calcula aparte, si el problema lo pide."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-59-1", "front": "¿Por qué el determinante se llama 'orlado'?", "back": "Porque al bloque de las derivadas respecto de las variables se le agrega una orla, es decir una fila y una columna asociadas al multiplicador." },
      { "id": "fc2-59-2", "front": "¿Cómo debe escribirse la restricción?", "back": "Igualada a cero, con todos los términos pasados a un mismo miembro." },
      { "id": "fc2-59-3", "front": "Regla de signos del Hessiano orlado", "back": "Positivo indica máximo condicionado y negativo indica mínimo condicionado: es la convención opuesta a la del Hessiano de extremos relativos." },
      { "id": "fc2-59-4", "front": "¿Qué representa la tercera ecuación del sistema?", "back": "La restricción original, que reaparece al derivar la función auxiliar respecto del multiplicador." }
    ]
  },

  "60": {
    "quiz2": {
      "tf": [
        { "id": "tf2-60-1", "q": "Una de las restricciones del primer ejercicio es una circunferencia.", "a": true, "explain": "El ítem c) sujeta la función a $x^2 + y^2 = 13$, que es una circunferencia centrada en el origen." },
        { "id": "tf2-60-2", "q": "Todas las restricciones del primer ejercicio son ecuaciones lineales.", "a": false, "explain": "Dos son lineales, pero también hay una circunferencia y una hipérbola." },
        { "id": "tf2-60-3", "q": "En el problema de los modelos regulares y de lujo la restricción surge del total de unidades a producir.", "a": true, "explain": "La empresa decide producir doscientas unidades en total, y eso liga las dos variables." },
        { "id": "tf2-60-4", "q": "En el problema de la función de producción se busca minimizar el gasto en mano de obra.", "a": false, "explain": "Se busca maximizar la producción, con el gasto total ya fijado por el presupuesto disponible." },
        { "id": "tf2-60-5", "q": "El trabajo práctico se compone de tres consignas.", "a": true, "explain": "Un ejercicio de cálculo con cuatro ítems y dos problemas aplicados." }
      ],
      "mc": [
        {
          "id": "mc2-60-1",
          "q": "¿Qué tipo de curva describe la restricción del ítem d) del primer ejercicio?",
          "options": [
            "Una recta de pendiente negativa",
            "Una circunferencia centrada en el origen",
            "Una hipérbola con dos ramas",
            "Una parábola de eje vertical"
          ],
          "correctIndex": 2,
          "explain": "La condición es que el producto de las variables sea constante, lo que describe una hipérbola equilátera."
        },
        {
          "id": "mc2-60-2",
          "q": "En el problema de la función de producción, ¿qué representa el presupuesto disponible?",
          "options": [
            "La función a optimizar",
            "La restricción del problema",
            "El resultado buscado",
            "El multiplicador de Lagrange"
          ],
          "correctIndex": 1,
          "explain": "El presupuesto liga las cantidades de mano de obra y capital a través de sus costos unitarios: es la restricción."
        },
        {
          "id": "mc2-60-3",
          "q": "¿Cuál es la función objetivo del problema de los modelos regulares y de lujo?",
          "options": [
            "El total de unidades producidas",
            "El ingreso por ventas de ambos modelos",
            "La diferencia entre los dos tipos de modelo",
            "El costo conjunto de producción"
          ],
          "correctIndex": 3,
          "explain": "Se quiere minimizar el costo conjunto, que es la función dada en el enunciado; el total de unidades es la restricción."
        }
      ],
      "ms": [
        {
          "id": "ms2-60-1",
          "q": "¿Qué tipos de restricción aparecen a lo largo del trabajo práctico?",
          "options": [
            "Ecuaciones lineales en las dos variables",
            "Una circunferencia centrada en el origen",
            "Una condición de producto constante",
            "Una restricción presupuestaria con costos unitarios",
            "Una desigualdad que acota un intervalo cerrado"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "Todas las restricciones del trabajo práctico son igualdades; no aparece ninguna desigualdad."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-60-1", "front": "¿Qué consignas son de entrega obligatoria?", "back": "El ítem c) del primer ejercicio y el tercer ejercicio completo." },
      { "id": "fc2-60-2", "front": "¿Cómo se detecta la restricción en un problema aplicado?", "back": "Buscando frases como 'en total', 'dispone de' o 'con un presupuesto de', que fijan una relación entre las variables." },
      { "id": "fc2-60-3", "front": "¿Qué representan las variables en el problema de la función de producción?", "back": "Unidades de mano de obra y unidades de capital, cada una con su costo unitario." },
      { "id": "fc2-60-4", "front": "¿Qué tipos de restricción trae el primer ejercicio?", "back": "Dos rectas, una circunferencia y una hipérbola de producto constante." }
    ]
  },

  "61": {
    "quiz2": {
      "tf": [
        { "id": "tf2-61-1", "q": "En uno de los ítems del primer ejercicio el criterio no alcanza para clasificar todos los puntos hallados.", "a": true, "explain": "En el ítem con restricción de producto constante quedan dos puntos cuya naturaleza no puede determinarse." },
        { "id": "tf2-61-2", "q": "La resolución del trabajo práctico incluye el desarrollo del sistema de Lagrange para cada ítem.", "a": false, "explain": "Solo informa los resultados finales; el desarrollo queda a cargo de quien resuelve." },
        { "id": "tf2-61-3", "q": "Una restricción de tipo hiperbólico puede generar más de dos puntos críticos.", "a": true, "explain": "En el ítem correspondiente aparecen cuatro puntos, porque la hipérbola tiene dos ramas." },
        { "id": "tf2-61-4", "q": "En el problema de los dos modelos la producción se reparte en partes iguales.", "a": false, "explain": "El reparto óptimo es desigual: ciento veinte unidades de un tipo y ochenta del otro." },
        { "id": "tf2-61-5", "q": "Alguno de los resultados publicados aparece con una fracción sin simplificar.", "a": true, "explain": "En el primer ítem la abscisa se informa como una fracción reducible." }
      ],
      "mc": [
        {
          "id": "mc2-61-1",
          "q": "¿Cuántos puntos críticos informa la resolución para el ítem con restricción de producto constante?",
          "options": [
            "Un único punto crítico",
            "Dos puntos críticos",
            "Tres puntos críticos",
            "Cuatro puntos críticos"
          ],
          "correctIndex": 3,
          "explain": "Se informan cuatro: uno de máximo, uno de mínimo y dos de naturaleza indeterminada."
        },
        {
          "id": "mc2-61-2",
          "q": "En el problema de los modelos regulares y de lujo, ¿cómo se reparte la producción óptima?",
          "options": [
            "Más unidades del modelo regular que del de lujo",
            "Más unidades del modelo de lujo que del regular",
            "Cantidades iguales de ambos modelos",
            "Toda la producción concentrada en un solo modelo"
          ],
          "correctIndex": 0,
          "explain": "El óptimo asigna ciento veinte unidades al modelo regular y ochenta al de lujo."
        },
        {
          "id": "mc2-61-3",
          "q": "¿Qué naturaleza tienen los extremos hallados en los dos primeros ítems del ejercicio 1?",
          "options": [
            "Ambos son máximos condicionados",
            "Ambos son mínimos condicionados",
            "Uno es máximo y el otro mínimo",
            "Ninguno pudo determinarse"
          ],
          "correctIndex": 1,
          "explain": "Tanto el ítem a) como el b) dan mínimos condicionados."
        }
      ],
      "ms": [
        {
          "id": "ms2-61-1",
          "q": "¿Qué se aprende de la resolución de este trabajo práctico?",
          "options": [
            "Que una restricción curva puede generar varios puntos críticos",
            "Que el criterio puede resultar inconcluyente en algunos puntos",
            "Que los resultados a veces se publican sin simplificar",
            "Que hay ítems reservados para la entrega obligatoria",
            "Que todas las restricciones dan un único extremo condicionado"
          ],
          "correctIndexes": [0, 1, 2, 3],
          "explain": "El ítem con la hipérbola desmiente la última: da cuatro puntos críticos y dos extremos de signo opuesto."
        }
      ]
    },
    "flashcards2": [
      { "id": "fc2-61-1", "front": "¿Por qué una restricción hiperbólica da cuatro puntos críticos?", "back": "Porque la hipérbola tiene dos ramas y el sistema admite combinaciones de signos en ambas variables." },
      { "id": "fc2-61-2", "front": "¿Qué significa que no se pueda determinar la naturaleza de un punto?", "back": "Que el criterio del determinante orlado no concluye en ese punto, y hace falta otro análisis. Es un resultado válido para informar." },
      { "id": "fc2-61-3", "front": "Reparto óptimo en el problema de los dos modelos", "back": "Ciento veinte unidades del modelo regular y ochenta del de lujo, que suman las doscientas de la restricción." },
      { "id": "fc2-61-4", "front": "¿Qué ítems quedan sin resolver en el PDF?", "back": "El ítem c) del primer ejercicio y el tercer ejercicio, por ser de entrega obligatoria." }
    ]
  },
};
