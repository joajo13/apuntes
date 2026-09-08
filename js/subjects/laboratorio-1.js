/**
 * Materia: Laboratorio 1 (UP, 0114).
 *
 * Apuntes de cátedra transcriptos, agrupados en diez unidades:
 *   'poo'         Origen de la POO (PPT "Origen de la POO. Filosofía clásica y teoría de objetos")
 *   'ides'        Introducción a los IDEs. Eclipse. IntelliJ IDEA. Otros
 *   'eclipse'     Tutorial de Eclipse (con las capturas del apunte como figures)
 *   'java'        Tutorial de código Java
 *   'diseno-clases' Diseño de clases en Java (herencia, arreglos y conversión de tipos)
 *   'relaciones'  Relaciones entre objetos (PPT: cardinalidad, direccionalidad, ordinalidad)
 *   'paradigmas'  Lenguajes imperativos y declarativos y sus derivaciones
 *   'jvm'         Funcionamiento de la JVM y el JRE
 *   'jdk'         Herramientas de la Java Development Kit (javac, java, javadoc, jar, JConsole)
 *   'diseno-avanzado' Conceptos avanzados de diseño en Java (herencia avanzada, contratos,
 *                 clases abstractas, interfaces, principios de diseño y patrones)
 *   'actividades' Actividades prácticas (programar un auto y sus partes; modelar y hacer funcionar una PC)
 *
 * Quiz (V/F + MC + MS) y flashcards por sección. Las capturas del tutorial de
 * Eclipse y los diagramas UML de cardinalidad viven en
 * images/diagrams/laboratorio-1/. Tipos: ver js/content.js.
 */

export default {
  id: 'laboratorio-1',
  title: 'Laboratorio 1',
  subtitle: 'POO, IDEs y Java — Apuntes',
  tagline: 'Origen de la POO · Qué es un IDE · Eclipse, NetBeans e IntelliJ IDEA · Tutorial de Eclipse · Fundamentos de código Java · Herencia, arreglos y conversión de tipos · Relaciones entre objetos · Paradigmas imperativo y declarativo',
  units: {
    'poo': 'Origen de la POO',
    'ides': 'Introducción a los IDEs',
    'eclipse': 'Tutorial de Eclipse',
    'java': 'Tutorial de código Java',
    'diseno-clases': 'Diseño de clases en Java',
    'relaciones': 'Relaciones entre objetos',
    'paradigmas': 'Lenguajes imperativos y declarativos',
    'jvm': 'Funcionamiento de la JVM y el JRE',
    'jdk': 'Herramientas del JDK',
    'diseno-avanzado': 'Conceptos avanzados de diseño en Java',
    'actividades': 'Actividades prácticas',
  },
  sections: [
    {
      id: '1',
      unit: 'poo',
      title: 'Origen de la POO: de los presocráticos a Java',
      criollo: 'Sí, arrancamos la materia de programación con filosofía griega, y tiene sentido. Los presocráticos se preguntaron qué son las cosas, Platón dijo que hay modelos perfectos de los que salen copias imperfectas, y Aristóteles agregó que las cosas cambian. Bueno: modelo = clase, copia = objeto, cambio = operaciones. La POO es literalmente eso con otro nombre.',
      blocks: [
        {
          type: 'h3',
          text: 'Primeros pasos: los presocráticos',
          criollo: 'La pregunta original: ¿qué tienen en común todas las cosas? Respuesta: que son cosas. Parece un chiste pero es el arranque de todo.',
        },
        {
          type: 'p',
          text: 'Los filósofos presocráticos se preguntaron: "¿Qué son las cosas? ¿Qué tienen en común todas las cosas?". La <strong>primera aproximación</strong> fueron los elementos (el agua, la tierra, el fuego...). Luego coincidieron en que todas "las cosas son cosas": tienen en común eso, "lo que son", lo que las hace ser cosas.',
        },
        {
          type: 'p',
          text: 'Los filósofos socráticos siguieron indagando en el tema:',
        },
        {
          type: 'ul',
          items: [
            '<strong>Heráclito</strong>: "Todo lo común de las cosas, es aquello que las hace diferentes". Es decir, una cosa es, porque es diferente de otra cosa.',
            '<strong>Parménides</strong>: "Lo común a todas las cosas es que son, si no fueran no serían". Pero entonces, ¿en qué consiste "ser"? Y, asimismo, ¿en qué consiste "no-ser"?',
          ],
        },
        {
          type: 'p',
          text: 'Si el ser es ser, entonces el ser es la cosa. Entonces no ser es la no cosa: es <strong>la nada misma</strong>. ¿Cómo se puede hablar de la nada si no es nada? ¿Cómo se puede hablar de algo si no es nada?',
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Ese "no-ser", esa nada de la que no se puede hablar, más adelante en Java se llama <code>null</code>. Guardátelo que vuelve.',
        },
        {
          type: 'h3',
          text: 'Platón: modelos y jerarquías',
          criollo: 'Platón inventó el molde. Vos tenés el plano perfecto y de ahí salen las copias, siempre un poco peores que la foto de la caja.',
        },
        {
          type: 'p',
          text: 'Platón dio un paso más, profundizó la visión de las cosas. No le importó si ser o no ser: a Platón le interesaron <strong>las formas de las cosas, los modelos</strong>. A partir de un modelo obtengo ítems a imagen y semejanza de esos modelos: obtengo las cosas a partir de sus planos o de plantillas.',
        },
        {
          type: 'p',
          text: 'Platón decía que el modelo, la plantilla, <strong>es perfecta</strong>. Cada nuevo ítem va perdiendo perfección, al obtener algo concreto, con materia imperfecta, a partir del modelo... ¿O alguien vio que la recreación de algo quede como en la foto de la caja?',
        },
        {
          type: 'p',
          text: 'Además, Platón diagramó <strong>jerarquías de modelos ideales</strong>, agrupando características comunes y marcando las diferencias. Según sus estudios, hay niveles de orden jerárquico superior e inferior. Los niveles están referidos a lo que las cosas tienen en común y aquello en lo que se diferencian.',
        },
        {
          type: 'table',
          caption: 'La jerarquía platónica',
          headers: ['Nivel', 'Qué representa', 'Grado'],
          rows: [
            ['Orden superior', 'Lo que las cosas tienen en común: es más genérico y, por ende, más "modelo" y menos "cosa"', 'Más perfecto'],
            ['Orden inferior', 'Aquello en lo que las cosas se diferencian: es lo más específico', 'Menos perfecto'],
          ],
        },
        {
          type: 'h3',
          text: 'Aristóteles: los objetos y el cambio',
          criollo: 'Aristóteles fue el primero en usar la palabra "objeto" y en decir que las cosas no se quedan quietas: hacen operaciones y cambian.',
        },
        {
          type: 'p',
          text: 'Aristóteles, mejorando aún más las teorías de Platón, comenzó a hablar de <strong>"objetos"</strong>. Aristóteles y sus contemporáneos introdujeron el concepto de <strong>"cambio"</strong>: el mundo está en constante movimiento, constante cambio.',
        },
        {
          type: 'p',
          text: 'Si en el mundo hay "cosas", obtenidas a partir de los modelos platónicos, entonces esas cosas "cambian" con el mundo. <strong>Las cosas realizan operaciones para cambiar.</strong>',
        },
        {
          type: 'h3',
          text: 'La POO de la edad moderna',
          criollo: 'Acá se cierra el círculo: clase = modelo platónico, objeto = la cosa, Object = el modelo supremo, herencia = la jerarquía.',
        },
        {
          type: 'p',
          text: 'La POO intenta reflejar el mundo lo más fielmente posible. El mundo consta de cosas obtenidas a partir de modelos, y estas cambian continuamente junto con el mundo.',
        },
        {
          type: 'ul',
          items: [
            'La POO habla de <strong>"clases"</strong>. Las clases son los "modelos". El modelo más genérico, el de mayor orden, es la clase <code>Object</code>.',
            'La POO habla de <strong>"objetos"</strong> que se obtienen a partir de las "clases". ¿Y qué tienen en común todos los objetos? Que son todos objetos, son cosas: tal cual pensaban los presocráticos.',
            'Las clases funcionan de <strong>manera jerárquica</strong>, como lo había estructurado Platón. Y todos "heredan" cosas en común de su modelo supremo, "el Objeto" (<code>Object</code>).',
          ],
        },
        {
          type: 'table',
          caption: 'De la filosofía a la POO',
          headers: ['Concepto filosófico', 'Quién lo aportó', 'Equivalente en POO'],
          rows: [
            ['Las cosas son cosas', 'Presocráticos', 'Todos los objetos son objetos (heredan de Object)'],
            ['Modelos o plantillas perfectas', 'Platón', 'Clases'],
            ['Ítems obtenidos del modelo', 'Platón', 'Objetos / instancias'],
            ['Jerarquía de lo genérico a lo específico', 'Platón', 'Jerarquía de clases y herencia'],
            ['Objetos que cambian mediante operaciones', 'Aristóteles', 'Métodos que cambian el estado del objeto'],
            ['La nada, el no-ser', 'Parménides', 'null'],
          ],
        },
        {
          type: 'h3',
          text: 'Lenguajes de programación orientada a objetos',
          criollo: 'Todos los lenguajes de POO manejan los mismos cinco conceptos. Cambia la sintaxis, no la idea.',
        },
        {
          type: 'p',
          text: 'Todos los lenguajes de POO refieren a estos conceptos:',
        },
        {
          type: 'ul',
          items: [
            'Plantillas o modelos.',
            'Instancias y objetos.',
            'La nada.',
            'Tienen un modelo "superior", normalmente la clase <code>Object</code>.',
            'El cambio: operaciones para cambiar el estado en el que se encuentran los objetos y el mundo.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'A lo largo de la cátedra veremos cómo estos conceptos se pueden mapear directamente a JAVA.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-1-1', q: 'Los presocráticos concluyeron que lo que todas las cosas tienen en común es que son cosas.', a: true, explain: 'Después de la primera aproximación por los elementos (agua, tierra, fuego), coincidieron en que todas "las cosas son cosas": tienen en común "lo que son".' },
          { id: 'tf-1-2', q: 'Según Platón, cada ítem obtenido a partir de un modelo es tan perfecto como el modelo mismo.', a: false, explain: 'Al revés: para Platón el modelo o plantilla es perfecto, y cada nuevo ítem va perdiendo perfección al concretarse con materia imperfecta.' },
          { id: 'tf-1-3', q: 'Aristóteles fue quien introdujo el concepto de "cambio" y comenzó a hablar de "objetos".', a: true, explain: 'Aristóteles y sus contemporáneos introdujeron el cambio: el mundo está en constante movimiento y las cosas realizan operaciones para cambiar.' },
          { id: 'tf-1-4', q: 'En la jerarquía platónica, lo más específico corresponde al orden superior.', a: false, explain: 'Es al revés: lo más específico (aquello en lo que las cosas se diferencian) es lo menos perfecto y corresponde al orden inferior. Lo común y genérico es el orden superior.' },
          { id: 'tf-1-5', q: 'En la POO, el modelo más genérico y de mayor orden es la clase Object.', a: true, explain: 'El apunte lo dice textualmente: las clases son los modelos y el más genérico, el de mayor orden, es la clase Object, de la cual todos heredan.' },
        ],
        mc: [
          {
            id: 'mc-1-1',
            q: '¿Qué afirmó Heráclito sobre las cosas?',
            options: [
              'Que todo lo común de las cosas es aquello que las hace diferentes',
              'Que lo común a todas las cosas es que son, si no fueran no serían',
              'Que las cosas se obtienen a partir de modelos perfectos',
              'Que las cosas realizan operaciones para cambiar',
            ],
            correctIndex: 0,
            explain: 'La frase de Heráclito es "Todo lo común de las cosas, es aquello que las hace diferentes": una cosa es porque es diferente de otra cosa. La segunda opción es de Parménides, la tercera de Platón y la cuarta de Aristóteles.',
          },
          {
            id: 'mc-1-2',
            q: 'Según el apunte, ¿a qué concepto de la POO corresponden los "modelos" o "plantillas" de Platón?',
            options: [
              'A las clases',
              'A los objetos',
              'A las instancias',
              'A las operaciones',
            ],
            correctIndex: 0,
            explain: 'La POO habla de "clases", y las clases son los "modelos". Los objetos e instancias son lo que se obtiene a partir de esas clases.',
          },
          {
            id: 'mc-1-3',
            q: '¿Cuál de estos NO es uno de los conceptos que el apunte enumera como comunes a todos los lenguajes de POO?',
            options: [
              'La compilación en tiempo real del código',
              'Plantillas o modelos',
              'La nada',
              'Un modelo "superior", normalmente la clase Object',
            ],
            correctIndex: 0,
            explain: 'La compilación en tiempo real es una característica de los IDEs, no un concepto de la POO. Los cinco conceptos son: plantillas o modelos, instancias y objetos, la nada, el modelo superior (Object) y el cambio.',
          },
          {
            id: 'mc-1-4',
            q: 'La pregunta de Parménides sobre el "no-ser" (la nada) se mapea en los lenguajes de POO a:',
            options: [
              'El concepto de "la nada", que en Java se expresa como null',
              'La clase Object',
              'La herencia entre clases',
              'Las operaciones que cambian el estado',
            ],
            correctIndex: 0,
            explain: 'Entre los conceptos comunes a los lenguajes de POO el apunte enumera "la nada", que es la contracara del ser que discutía Parménides.',
          },
        ],
        ms: [
          {
            id: 'ms-1-1',
            q: '¿Cuáles de los siguientes conceptos enumera el apunte como presentes en todos los lenguajes de POO?',
            options: [
              'Plantillas o modelos',
              'Instancias y objetos',
              'La nada',
              'Un modelo "superior", normalmente la clase Object',
              'El versionado del código fuente',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Los cinco conceptos son plantillas o modelos, instancias y objetos, la nada, el modelo superior (Object) y el cambio. El versionado del código es una característica de los IDEs, no de la POO.',
          },
          {
            id: 'ms-1-2',
            q: '¿Qué afirmaciones sobre Platón son correctas según el apunte?',
            options: [
              'Le interesaron las formas de las cosas, los modelos',
              'Diagramó jerarquías de modelos ideales',
              'Sostuvo que la plantilla es perfecta y las copias pierden perfección',
              'Fue quien introdujo el concepto de "cambio"',
              'Consideraba que lo más genérico corresponde al orden superior',
            ],
            correctIndexes: [0, 1, 2, 4],
            explain: 'El concepto de "cambio" lo introdujeron Aristóteles y sus contemporáneos, no Platón. Todo lo demás corresponde a Platón.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-1-1', front: 'Pregunta presocrática', back: '"¿Qué son las cosas? ¿Qué tienen en común todas las cosas?". Primero respondieron con los elementos (agua, tierra, fuego) y luego con que "las cosas son cosas".' },
        { id: 'fc-1-2', front: 'Heráclito', back: '"Todo lo común de las cosas, es aquello que las hace diferentes": una cosa es porque es diferente de otra cosa.' },
        { id: 'fc-1-3', front: 'Parménides', back: '"Lo común a todas las cosas es que son, si no fueran no serían". De ahí la pregunta por el no-ser, la nada.' },
        { id: 'fc-1-4', front: 'Aporte de Platón', back: 'Las formas o modelos: a partir de un modelo perfecto se obtienen ítems a su imagen y semejanza, que van perdiendo perfección. Además diagramó jerarquías de modelos ideales.' },
        { id: 'fc-1-5', front: 'Jerarquía platónica', back: 'Lo común es más genérico, más "modelo" y menos "cosa", por eso más perfecto: orden superior. Lo específico es lo contrario: orden inferior.' },
        { id: 'fc-1-6', front: 'Aporte de Aristóteles', back: 'Empezó a hablar de "objetos" e introdujo el "cambio": el mundo cambia constantemente y las cosas realizan operaciones para cambiar.' },
        { id: 'fc-1-7', front: 'Clase (en términos platónicos)', back: 'Es el "modelo". El modelo más genérico y de mayor orden es la clase Object, de la cual todas las demás heredan.' },
        { id: 'fc-1-8', front: 'Los 5 conceptos de todo lenguaje POO', back: 'Plantillas o modelos; instancias y objetos; la nada; un modelo superior (Object); el cambio mediante operaciones sobre el estado.' },
      ],
    },
    {
      id: '2',
      unit: 'ides',
      title: '¿Qué es un IDE?',
      criollo: 'IDE es Entorno de Desarrollo Integrado: en vez de tener el editor por un lado, el compilador por otro y el debugger por otro, tenés todo junto en una sola ventana. La gracia es la productividad: te compila mientras escribís, te marca los errores en el momento y te deja frenar el programa en el medio para ver qué está pasando.',
      blocks: [
        {
          type: 'h3',
          text: 'Definición y componentes mínimos',
          criollo: 'Editor avanzado + compilador integrado + debugger. Con eso ya sos un IDE. De ahí para arriba, extras.',
        },
        {
          type: 'p',
          text: '<strong>IDE</strong> es el acrónimo en inglés de <em>Integrated Development Environment</em> o, en castellano, <strong>Entorno de Desarrollo Integrado</strong>. Un IDE es una aplicación que provee un montón de facilidades y herramientas para programadores orientadas al desarrollo de software.',
        },
        {
          type: 'p',
          text: 'Un IDE normalmente consta de al menos:',
        },
        {
          type: 'ul',
          items: [
            'Un <strong>editor avanzado de texto</strong>.',
            'La <strong>integración con el compilador</strong> o la herramienta de construcción y/o empaquetado.',
            'Un <strong>depurador de código</strong>.',
          ],
        },
        {
          type: 'p',
          text: 'Algunos IDEs van más allá, e introducen manejo de versiones o integración con sistemas de versionado, un constructor automatizado de interfaces de usuario, herramientas de generación de código, herramientas de generación de diagramas para diseño orientado a objetos, herramientas para bases de datos, etc.',
        },
        {
          type: 'h3',
          text: 'Por qué existen: la productividad',
          criollo: 'La idea es que no tengas que pelearte con cinco herramientas distintas, cada una con su interfaz y su curva de aprendizaje.',
        },
        {
          type: 'p',
          text: 'Los IDEs están pensados para <strong>mejorar la productividad del desarrollador</strong>, integrando varias herramientas dentro de una misma interfaz gráfica. Es decir: en vez de tener un editor de código, una consola de base de datos, una consola para el manejo de versionado, etc., cada uno con su interfaz gráfica particular diseñada por diferentes proveedores, el IDE intenta tener todo bajo un mismo ambiente (integrado) de desarrollo.',
        },
        {
          type: 'p',
          text: 'Esto ayuda a <strong>reducir el tiempo</strong> necesario para configurar todas las herramientas antes de comenzar el desarrollo de un sistema, y <strong>achata la curva de aprendizaje</strong> que pueden tener múltiples herramientas, dado que se debe manejar una única herramienta apta para todas las necesidades de desarrollo.',
        },
        {
          type: 'p',
          text: 'Otra característica clave es que están <strong>continuamente analizando el código fuente a medida que se escribe</strong>, compilando en tiempo real y reportando errores y/o posibles situaciones problemáticas, informándolas automáticamente. Sin un IDE deberíamos valernos únicamente de un compilador, que se corre luego de haber escrito el código, y los errores o problemas aparecerían solo después de haberlo escrito.',
        },
        {
          type: 'p',
          text: 'Mediante un IDE también podemos <strong>empaquetar los entregables</strong> con simples operaciones, reduciendo el tiempo necesario para armarlos.',
        },
        {
          type: 'h3',
          text: 'La depuración: la capacidad estrella',
          criollo: 'Poder frenar el programa en una línea y espiar el valor de cada variable, sin salir del IDE. Antes esto era un dolor de cabeza y necesitabas herramientas aparte.',
        },
        {
          type: 'p',
          text: 'Los IDEs tienen la capacidad de <strong>"suspender" la ejecución en puntos específicos del código</strong>, ejecutar línea por línea, ejecutar código condicionalmente, analizar los valores de las variables locales y las variables miembro, tener un pantallazo del estado del sistema, etc., <strong>sin salir de la herramienta</strong>. Anteriormente no era tarea fácil y por lo general se necesitaban herramientas extras.',
        },
        {
          type: 'p',
          text: 'Aquellos IDEs <strong>dedicados específicamente a un lenguaje</strong> pueden agregar herramientas muy específicas a ese lenguaje, incrementando aún más su utilidad y la productividad del desarrollador.',
        },
        {
          type: 'h3',
          text: 'De las tarjetas perforadas a los IDEs',
          criollo: 'La evolución: tarjetas perforadas → editores de texto en terminal → editores avanzados (Vim, Emacs) → interfaces gráficas → IDEs.',
        },
        {
          type: 'p',
          text: 'Inicialmente solo se utilizaban <strong>editores de texto</strong> para escribir el código fuente mediante una consola o terminal. Y en un período anterior ni siquiera se "escribía el código", ya que no había terminal: se ingresaba todo el programa mediante <strong>tarjetas perforadas</strong>.',
        },
        {
          type: 'p',
          text: 'Luego de unos años aparecieron los primeros <strong>"editores avanzados"</strong> que, además de comandos de teclado (teclas de función para grabar, abrir un archivo, mandar a compilar, etc.), empezaban a marcar con diferente tipografía las palabras clave (no necesariamente colores, dependiendo de las capacidades gráficas de la plataforma). Los ejemplos más comunes son <strong>Vim</strong> o <strong>Emacs</strong>, aún vigentes hoy en día.',
        },
        {
          type: 'p',
          text: 'Con el advenimiento de las <strong>interfaces gráficas</strong>, los editores avanzados se volvieron muy fáciles de utilizar, agregando más funcionalidades (integración con el sistema operativo, capacidades avanzadas de entrada/salida, autocompletado básico —cerrar etiquetas/bloques de código— y otras pequeñas ayudas), y comenzaron a aparecer los primeros IDEs.',
        },
        {
          type: 'table',
          caption: 'Hitos históricos que menciona el apunte',
          headers: ['Año', 'Hito'],
          rows: [
            ['1974', 'IBM lanza algo similar a un IDE llamado Structured Programming Facility.'],
            ['1989', 'BASIC es citado como el primer lenguaje en proveer un "IDE" (más bien un editor avanzado integrado con compilador, depurador, etc.).'],
            ['1991-1998', 'Visual Basic 6.0, recordadísimo IDE para el lenguaje de igual nombre, que ayudó a construir incontables sistemas.'],
            ['2001', 'Aparece Eclipse, que comenzó como un IDE para Java apoyado por IBM y fue abriéndose para soportar múltiples lenguajes: C, C++, PHP, Perl y muchísimos más.'],
          ],
        },
        {
          type: 'p',
          text: 'En cuanto a JAVA, <strong>JBuilder</strong> (originalmente de Borland) supo ser uno de los más completos y populares. En los años más recientes aparecieron muchos IDEs para JAVA; los más notables son <strong>NetBeans</strong> (con su espectacular diseñador de interfaces gráficas Swing) e <strong>IntelliJ IDEA</strong>. Hoy en día está ganando mucho terreno <strong>Visual Studio Code</strong> (no tanto para JAVA, pero es uno de los lenguajes soportados).',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Aun así, el apunte remarca que <strong>Eclipse sigue siendo el más popular y prácticamente el estándar de mercado</strong>, especialmente porque es de código abierto —por tanto, gratis— y sin que eso imponga limitaciones en su funcionalidad, a diferencia de un IDE pago como IntelliJ IDEA, cuya versión gratuita es limitada.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-2-1', q: 'IDE significa Integrated Development Environment, o Entorno de Desarrollo Integrado.', a: true, explain: 'Es la definición literal del acrónimo que da el apunte.' },
          { id: 'tf-2-2', q: 'Un IDE consta como mínimo de un editor avanzado de texto, integración con el compilador y un depurador de código.', a: true, explain: 'Son los tres componentes mínimos que enumera el apunte. El resto (versionado, generación de código, bases de datos) son extras que agregan algunos IDEs.' },
          { id: 'tf-2-3', q: 'Sin un IDE, los errores de compilación aparecen mientras se escribe el código.', a: false, explain: 'Al contrario: sin IDE dependés únicamente del compilador, que se corre después de escribir el código, y los errores aparecen solo luego de haberlo escrito. El IDE compila en tiempo real.' },
          { id: 'tf-2-4', q: 'Antes de los editores de texto en terminal, los programas se ingresaban mediante tarjetas perforadas.', a: true, explain: 'El apunte lo menciona: en un período anterior ni siquiera se "escribía el código" porque no había terminal.' },
          { id: 'tf-2-5', q: 'Según el apunte, IntelliJ IDEA es hoy el estándar de mercado por ser de código abierto y gratuito.', a: false, explain: 'El que es de código abierto, gratuito y prácticamente el estándar de mercado es Eclipse. IntelliJ IDEA es pago y su versión gratuita es limitada.' },
        ],
        mc: [
          {
            id: 'mc-2-1',
            q: '¿Cuál es el objetivo principal por el que existen los IDEs?',
            options: [
              'Mejorar la productividad del desarrollador integrando varias herramientas en una misma interfaz gráfica',
              'Reemplazar al compilador del lenguaje',
              'Generar automáticamente la documentación del proyecto',
              'Garantizar que el código no tenga errores de lógica',
            ],
            correctIndex: 0,
            explain: 'El apunte es explícito: están pensados para mejorar la productividad integrando herramientas bajo un mismo ambiente, reduciendo el tiempo de configuración y achatando la curva de aprendizaje.',
          },
          {
            id: 'mc-2-2',
            q: '¿Qué permite hacer la capacidad de depuración integrada de un IDE?',
            options: [
              'Suspender la ejecución en puntos específicos, ejecutar línea por línea y analizar valores de variables sin salir de la herramienta',
              'Compilar el proyecto más rápido que desde la consola',
              'Corregir automáticamente los errores de sintaxis del código',
              'Convertir el código fuente a otro lenguaje de programación',
            ],
            correctIndex: 0,
            explain: 'Esa es la descripción textual del apunte, y agrega que antes esto no era tarea fácil y por lo general se necesitaban herramientas extras.',
          },
          {
            id: 'mc-2-3',
            q: 'Según el apunte, ¿qué lenguaje es citado como el primero en proveer un "IDE", allá por 1989?',
            options: [
              'BASIC',
              'Java',
              'Visual Basic',
              'C++',
            ],
            correctIndex: 0,
            explain: 'A modo anecdótico el apunte cita a BASIC como el primer lenguaje en proveer un "IDE", que era más bien un editor avanzado integrado con compilador y depurador. Antes, en 1974, IBM había lanzado el Structured Programming Facility.',
          },
          {
            id: 'mc-2-4',
            q: '¿Qué IDE para JAVA supo ser uno de los más completos y populares, originalmente de Borland?',
            options: [
              'JBuilder',
              'NetBeans',
              'Eclipse',
              'Visual Studio Code',
            ],
            correctIndex: 0,
            explain: 'El apunte menciona a JBuilder (originalmente de Borland) como uno de los más completos y populares para JAVA en su momento.',
          },
        ],
        ms: [
          {
            id: 'ms-2-1',
            q: '¿Cuáles son los componentes mínimos con los que, según el apunte, normalmente consta un IDE?',
            options: [
              'Un editor avanzado de texto',
              'Integración con el compilador o la herramienta de construcción/empaquetado',
              'Un depurador de código',
              'Un constructor automatizado de interfaces de usuario',
              'Herramientas para bases de datos',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Los mínimos son editor avanzado, integración con el compilador y depurador. El constructor de interfaces y las herramientas de bases de datos son extras que "algunos IDEs" agregan yendo más allá.',
          },
          {
            id: 'ms-2-2',
            q: '¿Qué afirmaciones sobre la evolución histórica de las herramientas de desarrollo son correctas?',
            options: [
              'Antes de las terminales, los programas se ingresaban con tarjetas perforadas',
              'Vim y Emacs son ejemplos de "editores avanzados" que siguen vigentes hoy',
              'Los primeros editores avanzados marcaban las palabras clave con distinta tipografía, no necesariamente con colores',
              'Eclipse existe desde el 2001 y comenzó como un IDE para Java apoyado por IBM',
              'Visual Basic 6.0 apareció en 2001 y sigue vigente',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Visual Basic 6.0 apareció en 1991 y duró hasta 1998, según el apunte. Las demás afirmaciones son textuales.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-2-1', front: 'IDE', back: 'Integrated Development Environment (Entorno de Desarrollo Integrado): aplicación que provee facilidades y herramientas para programadores orientadas al desarrollo de software.' },
        { id: 'fc-2-2', front: 'Componentes mínimos de un IDE', back: 'Editor avanzado de texto, integración con el compilador o herramienta de construcción/empaquetado, y un depurador de código.' },
        { id: 'fc-2-3', front: '¿Por qué achatan la curva de aprendizaje?', back: 'Porque en vez de manejar varias herramientas separadas, cada una con su interfaz de un proveedor distinto, se maneja una única herramienta apta para todas las necesidades de desarrollo.' },
        { id: 'fc-2-4', front: 'Compilación continua', back: 'El IDE analiza el código fuente a medida que se escribe, compila en tiempo real y reporta errores o situaciones problemáticas automáticamente. Sin IDE, los errores aparecen recién al correr el compilador.' },
        { id: 'fc-2-5', front: 'Qué permite el depurador integrado', back: 'Suspender la ejecución en puntos específicos, ejecutar línea por línea, ejecutar código condicionalmente y analizar variables locales y miembro, sin salir de la herramienta.' },
        { id: 'fc-2-6', front: 'Evolución hasta el IDE', back: 'Tarjetas perforadas → editores de texto en terminal → editores avanzados (Vim, Emacs) → editores con interfaz gráfica → primeros IDEs.' },
        { id: 'fc-2-7', front: 'Primeros "IDEs" de la historia', back: '1974: IBM lanza el Structured Programming Facility. 1989: BASIC es citado como el primer lenguaje en proveer un IDE.' },
        { id: 'fc-2-8', front: '¿Por qué Eclipse es el estándar de mercado?', back: 'Porque es de código abierto —por tanto gratis— y eso no le impone limitaciones de funcionalidad, a diferencia de un IDE pago como IntelliJ IDEA cuya versión gratuita es limitada.' },
      ],
    },
    {
      id: '3',
      unit: 'ides',
      title: '¿Qué hace que un IDE sea un IDE?',
      criollo: 'Acá está la checklist: las 10 características que la industria más o menos acordó que tiene que tener algo para llamarse IDE. Las primeras 9 son obligatorias y la décima (plugins) es opcional, aunque en la práctica la tienen todos.',
      blocks: [
        {
          type: 'p',
          text: 'Más o menos, el <strong>consenso general</strong> es que un IDE tenga las siguientes características:',
        },
        {
          type: 'h3',
          text: 'Las diez características',
          criollo: 'Leelas en orden que después las preguntan sueltas: edición, resaltado, análisis, autocompletado, árbol de archivos, refactoring, depuración, integración con el SO, versionado y plugins.',
        },
        {
          type: 'ol',
          items: [
            '<strong>Edición avanzada de texto</strong>: todo lo que debe tener un editor de texto (sin poder controlar el formato, ya que es irrelevante en este caso), como deshacer, rehacer, buscar, reemplazar, etc. Algunos IDEs agregan algo extra como selección múltiple, selección por columnas, búsqueda entre múltiples archivos, búsqueda con expresiones regulares, etc.',
            '<strong>Resaltado de la sintaxis</strong>: las palabras claves se remarcan de alguna manera (tipografía, colores) para indicar que están correctamente escritas o utilizadas.',
            '<strong>Análisis y/o compilación continua del código</strong>: presentando los problemas en una lista o con sobreimpresos dentro del área de escritura del código.',
            '<strong>Autocompletado</strong>: ya sea de bloques de código (por ejemplo, al abrir un bloque con una llave, automáticamente se cierra, para evitar que el programador se olvide y luego tenga un error de sintaxis) o de instrucciones o de llamadas a variables y/o funciones. En todos los casos puede ser automático o mediante alguna combinación de teclas (normalmente TAB o CTRL+espacio).',
            '<strong>Vista de los archivos del proyecto</strong>: un pantallazo del árbol de archivos y directorios que constituyen el proyecto.',
            '<strong>Refactoring</strong>: se refiere a la capacidad de cambiar partes del código y que automáticamente se cambien todas las partes dependientes dentro del proyecto (es decir, al cambiar el nombre de una función, automáticamente se cambia en todos los lugares donde es llamada).',
            '<strong>Depuración</strong>: la depuración del código debe estar integrada. El IDE debe dar la posibilidad de ejecutar el código paso a paso para poder buscar errores y depurar diferentes partes del programa.',
            '<strong>Integración con herramientas de la plataforma o el sistema operativo</strong>: el IDE debe permitir llamar a las herramientas del sistema "desde adentro". Esto incluye llamada a comandos u otras herramientas, pudiéndolas configurar y/o asignarles alguna combinación de teclas para su ejecución.',
            '<strong>Integración con un sistema de versionado de código</strong>.',
            '<strong>Opcional — estructura de plugins</strong>: prácticamente todos los IDEs pueden "extenderse" con plugins de todo tipo, ya sea para soportar lenguajes adicionales, agregar ayudas al desarrollador, integración con bases de datos, etc.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Ojo con la diferencia entre <strong>autocompletado</strong> (te escribe lo que ibas a escribir) y <strong>refactoring</strong> (cambiás algo en un lugar y se propaga a todos los lugares dependientes). Son las dos que más se confunden.',
        },
        {
          type: 'table',
          caption: 'Resumen rápido de las 10 características',
          headers: ['#', 'Característica', 'En una línea'],
          rows: [
            ['1', 'Edición avanzada de texto', 'Deshacer, rehacer, buscar, reemplazar, y extras como selección múltiple o búsqueda con regex'],
            ['2', 'Resaltado de sintaxis', 'Las palabras clave se remarcan con tipografía o colores'],
            ['3', 'Análisis / compilación continua', 'Los problemas aparecen en una lista o sobreimpresos en el área de código'],
            ['4', 'Autocompletado', 'De bloques, instrucciones, variables o funciones; automático o con TAB / CTRL+espacio'],
            ['5', 'Vista de archivos del proyecto', 'Árbol de archivos y directorios que constituyen el proyecto'],
            ['6', 'Refactoring', 'Cambiar una parte y que se actualicen automáticamente todas las dependientes'],
            ['7', 'Depuración', 'Ejecutar paso a paso para buscar errores, integrada en el IDE'],
            ['8', 'Integración con el SO', 'Llamar comandos y herramientas del sistema desde adentro del IDE'],
            ['9', 'Integración con versionado', 'Conexión con un sistema de control de versiones'],
            ['10', 'Estructura de plugins (opcional)', 'Extender el IDE con lenguajes, ayudas o integraciones adicionales'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-3-1', q: 'La estructura de plugins es la única característica que el apunte marca como opcional.', a: true, explain: 'El punto 10 de la lista aparece explícitamente como "Opcional — estructura de plugins". Las otras nueve forman el consenso general.' },
          { id: 'tf-3-2', q: 'El refactoring consiste en que el IDE complete automáticamente el nombre de las variables mientras escribís.', a: false, explain: 'Eso es autocompletado. El refactoring es cambiar partes del código y que automáticamente se cambien todas las partes dependientes del proyecto.' },
          { id: 'tf-3-3', q: 'El autocompletado puede dispararse automáticamente o mediante una combinación de teclas, normalmente TAB o CTRL+espacio.', a: true, explain: 'El apunte lo dice textualmente en el punto 4.' },
          { id: 'tf-3-4', q: 'Para la edición avanzada de texto en un IDE es importante poder controlar el formato del texto (negrita, cursiva, tamaño).', a: false, explain: 'El apunte aclara justamente lo contrario: es todo lo que debe tener un editor de texto "sin poder controlar el formato, ya que es irrelevante en este caso".' },
          { id: 'tf-3-5', q: 'El análisis continuo del código presenta los problemas en una lista o con sobreimpresos dentro del área de escritura.', a: true, explain: 'Es la descripción del punto 3 de la lista.' },
        ],
        mc: [
          {
            id: 'mc-3-1',
            q: 'Un IDE que permite llamar comandos del sistema operativo "desde adentro" y asignarles combinaciones de teclas cumple con:',
            options: [
              'La integración con herramientas de la plataforma o el sistema operativo',
              'El resaltado de sintaxis',
              'La estructura de plugins',
              'La vista de los archivos del proyecto',
            ],
            correctIndex: 0,
            explain: 'Es el punto 8 de la lista: el IDE debe permitir llamar a las herramientas del sistema desde adentro, pudiendo configurarlas y asignarles atajos.',
          },
          {
            id: 'mc-3-2',
            q: 'Que al abrir un bloque con una llave el IDE la cierre automáticamente es un ejemplo de:',
            options: [
              'Autocompletado de bloques de código',
              'Refactoring',
              'Análisis continuo del código',
              'Resaltado de sintaxis',
            ],
            correctIndex: 0,
            explain: 'El apunte usa ese mismo ejemplo dentro del autocompletado: cerrar la llave automáticamente para evitar que el programador se olvide y tenga un error de sintaxis.',
          },
          {
            id: 'mc-3-3',
            q: 'Si cambio el nombre de una función y el IDE lo actualiza en todos los lugares donde es llamada, estoy usando:',
            options: [
              'Refactoring',
              'Autocompletado',
              'Depuración',
              'Búsqueda con expresiones regulares',
            ],
            correctIndex: 0,
            explain: 'Ese es exactamente el ejemplo que da el apunte para definir refactoring.',
          },
          {
            id: 'mc-3-4',
            q: 'Según el apunte, ¿qué debe permitir la depuración integrada?',
            options: [
              'Ejecutar el código paso a paso para buscar errores y depurar diferentes partes del programa',
              'Compilar el proyecto en segundo plano',
              'Extender el IDE con plugins de terceros',
              'Mostrar el árbol de archivos y directorios del proyecto',
            ],
            correctIndex: 0,
            explain: 'Punto 7 de la lista: la depuración debe estar integrada y el IDE debe dar la posibilidad de ejecutar el código paso a paso.',
          },
        ],
        ms: [
          {
            id: 'ms-3-1',
            q: '¿Cuáles de estas son características que el apunte enumera dentro del consenso de lo que hace a un IDE?',
            options: [
              'Resaltado de la sintaxis',
              'Refactoring',
              'Integración con un sistema de versionado de código',
              'Vista de los archivos del proyecto',
              'Generación automática de casos de prueba',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La generación automática de casos de prueba no figura en la lista de diez características. Las otras cuatro sí (puntos 2, 6, 9 y 5).',
          },
          {
            id: 'ms-3-2',
            q: '¿Qué extras menciona el apunte que "algunos IDEs" agregan a la edición avanzada de texto?',
            options: [
              'Selección múltiple',
              'Selección por columnas',
              'Búsqueda entre múltiples archivos',
              'Búsqueda con expresiones regulares',
              'Traducción automática de los comentarios',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Los cuatro primeros son los extras que enumera el punto 1. La traducción de comentarios no aparece en ningún lado del apunte.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-3-1', front: 'Resaltado de sintaxis', back: 'Las palabras clave se remarcan de alguna manera (tipografía, colores) para indicar que están correctamente escritas o utilizadas.' },
        { id: 'fc-3-2', front: 'Análisis / compilación continua', back: 'El IDE va compilando y analizando mientras escribís, presentando los problemas en una lista o con sobreimpresos dentro del área de escritura del código.' },
        { id: 'fc-3-3', front: 'Autocompletado', back: 'Completar bloques de código (cerrar una llave), instrucciones o llamadas a variables y funciones. Automático o con TAB / CTRL+espacio.' },
        { id: 'fc-3-4', front: 'Refactoring', back: 'Capacidad de cambiar partes del código y que automáticamente se cambien todas las partes dependientes del proyecto (renombrar una función se propaga a todas sus llamadas).' },
        { id: 'fc-3-5', front: 'Integración con el sistema operativo', back: 'Poder llamar a las herramientas del sistema "desde adentro" del IDE, configurándolas y asignándoles combinaciones de teclas.' },
        { id: 'fc-3-6', front: 'La característica opcional', back: 'La estructura de plugins: extender el IDE para soportar lenguajes adicionales, ayudas al desarrollador, integración con bases de datos, etc. En la práctica, casi todos la tienen.' },
        { id: 'fc-3-7', front: 'Vista de archivos del proyecto', back: 'Un pantallazo del árbol de archivos y directorios que constituyen el proyecto.' },
      ],
    },
    {
      id: '4',
      unit: 'ides',
      title: 'Los IDEs más populares: Eclipse, NetBeans e IntelliJ IDEA',
      criollo: 'Los tres grandes de Java. Eclipse: gratis, políglota, el estándar, un poco pesado y recargado. NetBeans: el más simple y liviano, de la Apache Foundation, usa Maven. IDEA: pago (con versión gratuita limitada), el más "inteligente" de todos, a veces demasiado.',
      blocks: [
        {
          type: 'h3',
          text: 'Eclipse',
          criollo: 'El que vamos a usar en la materia. Open source, con IBM y varias empresas atrás, y una comunidad enorme para cuando algo se rompe.',
        },
        {
          type: 'p',
          text: 'Es hoy <strong>el más popular</strong>. Como muchos, Eclipse mantiene un <strong>"modelo" de proyecto</strong>: sabe dónde está el código fuente, dónde deben arrojarse los compilados y cómo correrlos, dónde están las librerías, qué código se ejecutó y un historial de ejecuciones, etc.',
        },
        {
          type: 'p',
          text: 'Eclipse tiene la característica de ser un <strong>IDE "políglota"</strong>: pueden obtenerse diferentes "distribuciones" preparadas para distintos lenguajes o incluso distintas tareas dentro de un mismo lenguaje (Java WEB o Java Desktop, por ejemplo). Cada distribución tiene una serie de herramientas preinstaladas, sin limitar que se puedan agregar más o reemplazarlas por otras: puedo usar la distribución para desktop y luego agregar todas las herramientas que necesite para trabajar con web.',
        },
        {
          type: 'p',
          text: 'Tiene todas las características básicas mencionadas, más otras adicionales: <strong>búsquedas indexadas</strong> de los archivos de código fuente y otros archivos, búsquedas dedicadas a diferentes tipos de archivos (si son de configuración o de código, por ejemplo), herramientas de testeo, de análisis de performance, de cobertura de código, etc. Mantiene además <strong>diferentes maneras de visualizar las cosas</strong> (código, errores, ejecuciones) según la tarea que se esté llevando a cabo: edición de código, ejecución, depuración, etc.',
        },
        {
          type: 'p',
          text: 'Es un IDE ágil, con una <strong>comunidad enorme</strong> detrás, con lo cual es fácil encontrar soluciones a errores comunes y sugerencias para problemas típicos o formas de trabajar. Tiene detrás el soporte de una megacorporación como <strong>IBM</strong> y varias otras empresas que donan tiempo y dinero para mantener el proyecto activo y a la vanguardia de las tecnologías soportadas. Sus extensiones (plugins) pueden ser propias (desarrolladas por la misma "Fundación Eclipse") o de terceros, y son fáciles de instalar porque tiene un administrador incorporado.',
        },
        {
          type: 'p',
          text: 'Como contras, el apunte señala que es <strong>un poco hambriento de recursos</strong> y con una estética un poco recargada, aunque es muy configurable, flexible y sencillo de usar. En los últimos tiempos agregó de forma nativa (antes era por medio de terceros) un <strong>"dark mode"</strong> que descansa un poco los ojos si el usuario lo desea. Usa conceptos sencillos y fáciles de asociar a un proyecto típico de software, presenta múltiples ayudas al programador —tanto para generar proyectos nuevos como para crear componentes dentro de un proyecto— y tiene grandes capacidades de refactoring y de ayuda al momento de solucionar errores de compilación y ejecución.',
        },
        {
          type: 'h3',
          text: 'NetBeans',
          criollo: 'El más viejo y el más simple. Si Eclipse te marea, este es más liviano, aunque menos configurable.',
        },
        {
          type: 'p',
          text: 'NetBeans nació en <strong>1996, antes que Eclipse</strong>, y es probablemente <strong>el IDE más sencillo de todos</strong>. Hoy forma parte de la instalación del entorno de desarrollo de JAVA (si uno lo elige). Quien lo soporta es la <strong>Apache Foundation</strong>, lo que le da también una amplia y activa comunidad. Es de código abierto, al igual que Eclipse, y por tanto gratuito.',
        },
        {
          type: 'p',
          text: 'Es un IDE <strong>más liviano que Eclipse</strong>, aunque un poco menos configurable. Tiene múltiples ayudas al programador para el desarrollo, ejecución y depuración. La estética no es su fuerte, aunque sí es posible ponerlo en "dark mode" para no causar cansancio en los ojos.',
        },
        {
          type: 'p',
          text: 'Si bien no tiene tantas herramientas como Eclipse (compilación, ejecución, empaquetado), su ventaja es que utiliza muchas de las <strong>herramientas estándar de JAVA</strong> o herramientas que son parte del ecosistema estándar: Eclipse maneja su propio motor de empaquetado, mientras que <strong>NetBeans utiliza Maven</strong>.',
        },
        {
          type: 'p',
          text: 'NetBeans <strong>no es realmente "políglota"</strong>, aunque soporta Java, C/C++ y PHP con su respectiva pata web. Al ser un IDE sencillo, es muy fácil de entender y utilizar. Posee buena potencia en lo que refiere a refactoring, búsquedas y ayudas, aunque apenas inferior a la de Eclipse.',
        },
        {
          type: 'h3',
          text: 'IntelliJ IDEA',
          criollo: 'El pago. Arrancó relegado justamente por eso, pero se puso las pilas con la performance y una versión gratuita, y hoy sorprende por lo inteligente que es. A veces, demasiado.',
        },
        {
          type: 'p',
          text: 'Nació en <strong>2001</strong>, pero estuvo relegado muchos años, especialmente porque era pago y, frente a Eclipse con todo lo que brinda, era poco preferido entre los desarrolladores. La ventaja de ser pago es que <strong>tiene soporte personal</strong> para problemas y pedidos de features. Asimismo, siempre supo ser un poco más "pesado" que Eclipse e incluso más hambriento de recursos.',
        },
        {
          type: 'p',
          text: 'En los últimos años ganó mucha tracción: la empresa que lo desarrolla decidió mejorarlo mucho en cuanto a performance y lanzó al mercado una <strong>versión gratuita limitada</strong> (tiene todas las características, pero no soporta WEB de forma nativa/directa). También cambiaron el modelo de negocio: se puede acceder a una licencia por un precio alto en un primer pago y luego una renovación anual bastante conveniente, y dan <strong>licencias gratuitas a estudiantes</strong>, organizaciones sin fines de lucro, etc.',
        },
        {
          type: 'p',
          text: 'De estética simple, tiene una potencia que enseguida sorprende:',
        },
        {
          type: 'ul',
          items: [
            'Las <strong>búsquedas</strong> en código y entre archivos están previamente indexadas, por lo que son prácticamente instantáneas.',
            'La <strong>inteligencia en las sugerencias</strong> de autocompletado y solución rápida de problemas es superior a la de Eclipse.',
            'Utiliza, como NetBeans, <strong>herramientas estándar</strong>, pero muy bien abstraídas detrás de facilidades que parecen propietarias (por ejemplo, usa Maven para build-tool automation, pero no es necesario estar familiarizado con la herramienta).',
            'Mantiene un <strong>modelo del proyecto</strong> (basado en Maven), al igual que Eclipse.',
            'Tiene algunas utilidades muy interesantes en cuanto al <strong>refactoring</strong>.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'El apunte advierte que a veces IDEA sufre de ser <strong>"demasiado inteligente"</strong> y algunas cosas sencillas se tornan un poco frustrantes, pero son las menos. Es algo similar a lo que pasa con Microsoft Word: uno quiere hacer una simple lista numerada y termina luchando con los márgenes o sangrías porque Word "decide" que queda mejor de otra manera.',
        },
        {
          type: 'p',
          text: 'En cuanto a la estética, está más alineado con los estándares de usabilidad actuales: por ejemplo, todos los comandos o el autocompletado se introducen con <strong>TAB</strong>, en vez de CTRL+espacio como en Eclipse o NetBeans. Aunque no está con lo último, como la nueva costumbre de introducir comandos por nombre mediante una consola o barra rápida de acceso (VSCode, Atom, SublimeText).',
        },
        {
          type: 'p',
          text: 'IDEA <strong>no es un IDE "políglota"</strong>, aunque IntelliJ, la compañía detrás, vende múltiples versiones de la misma "base" con herramientas específicas para cada lenguaje: <strong>IntelliJ IDEA</strong> para Java, <strong>PyCharm</strong> para Python, <strong>ReSharper</strong> para C Sharp, etc. Ofrecen una versión "ultimate" que soporta todos los lenguajes, pero admiten que no tiene lo último de cada uno de los productos específicos.',
        },
        {
          type: 'table',
          caption: 'Los tres frente a frente',
          headers: ['Criterio', 'Eclipse', 'NetBeans', 'IntelliJ IDEA'],
          rows: [
            ['Año', '2001', '1996', '2001'],
            ['Licencia', 'Código abierto, gratuito', 'Código abierto, gratuito', 'Pago, con versión gratuita limitada (sin WEB nativa)'],
            ['Quién lo respalda', 'Fundación Eclipse, IBM y otras empresas', 'Apache Foundation', 'La empresa IntelliJ'],
            ['Políglota', 'Sí, con distribuciones por lenguaje/tarea', 'No realmente (Java, C/C++ y PHP)', 'No: venden un producto por lenguaje (PyCharm, ReSharper...)'],
            ['Empaquetado', 'Motor propio', 'Maven', 'Maven (abstraído detrás del IDE)'],
            ['Autocompletado', 'CTRL+espacio', 'CTRL+espacio', 'TAB'],
            ['Puntos fuertes', 'Popularidad, comunidad, plugins, refactoring, configurabilidad', 'Simplicidad, liviano, herramientas estándar de JAVA', 'Búsquedas indexadas instantáneas, sugerencias más inteligentes, refactoring'],
            ['Puntos flojos', 'Hambriento de recursos, estética recargada', 'Menos configurable, estética, menos herramientas', 'Pesado, a veces "demasiado inteligente"'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-4-1', q: 'NetBeans nació antes que Eclipse.', a: true, explain: 'NetBeans nació en 1996 y Eclipse existe desde 2001.' },
          { id: 'tf-4-2', q: 'Eclipse utiliza Maven para el empaquetado, mientras que NetBeans maneja su propio motor.', a: false, explain: 'Es exactamente al revés: Eclipse maneja su propio motor de empaquetado y NetBeans utiliza Maven.' },
          { id: 'tf-4-3', q: 'IntelliJ IDEA es un IDE políglota, igual que Eclipse.', a: false, explain: 'IDEA no es políglota. La compañía vende versiones distintas de la misma base para cada lenguaje: IDEA para Java, PyCharm para Python, ReSharper para C Sharp. Eclipse sí es políglota, con distribuciones por lenguaje.' },
          { id: 'tf-4-4', q: 'En IntelliJ IDEA el autocompletado se introduce con TAB, a diferencia de Eclipse y NetBeans que usan CTRL+espacio.', a: true, explain: 'El apunte lo menciona como un signo de que IDEA está más alineado con los estándares de usabilidad actuales.' },
          { id: 'tf-4-5', q: 'La versión gratuita de IntelliJ IDEA tiene todas las características, pero no soporta WEB de forma nativa o directa.', a: true, explain: 'Es la limitación exacta que describe el apunte para la versión gratuita.' },
          { id: 'tf-4-6', q: 'Eclipse es un IDE liviano en consumo de recursos y de estética sobria.', a: false, explain: 'El apunte lo describe como "un poco hambriento de recursos y con una estética un poco recargada", aunque muy configurable, flexible y sencillo de usar.' },
        ],
        mc: [
          {
            id: 'mc-4-1',
            q: '¿Qué significa que Eclipse sea un IDE "políglota"?',
            options: [
              'Que pueden obtenerse distribuciones preparadas para distintos lenguajes o distintas tareas dentro de un lenguaje',
              'Que traduce automáticamente el código de un lenguaje a otro',
              'Que su interfaz está disponible en muchos idiomas',
              'Que puede compilar el mismo proyecto con varios compiladores a la vez',
            ],
            correctIndex: 0,
            explain: 'Ser políglota significa que hay distribuciones distintas (Java WEB, Java Desktop, C, PHP...), cada una con herramientas preinstaladas, y que además se les pueden agregar o reemplazar herramientas.',
          },
          {
            id: 'mc-4-2',
            q: '¿Quién soporta hoy a NetBeans?',
            options: [
              'La Apache Foundation',
              'La Fundación Eclipse',
              'IBM',
              'La empresa IntelliJ',
            ],
            correctIndex: 0,
            explain: 'NetBeans es soportado por la Apache Foundation, lo que le da una amplia y activa comunidad. IBM y la Fundación Eclipse están detrás de Eclipse.',
          },
          {
            id: 'mc-4-3',
            q: 'Según el apunte, ¿cuál es la principal ventaja de que IntelliJ IDEA sea pago?',
            options: [
              'Que tiene soporte personal para problemas y pedidos de features',
              'Que consume menos recursos que los IDEs gratuitos',
              'Que incluye todos los lenguajes en una sola instalación',
              'Que no necesita configuración inicial',
            ],
            correctIndex: 0,
            explain: 'El apunte señala que la ventaja de ser pago es el soporte personal para problemas y pedidos de features.',
          },
          {
            id: 'mc-4-4',
            q: '¿Qué IDE es descrito como "probablemente el más sencillo de todos"?',
            options: [
              'NetBeans',
              'Eclipse',
              'IntelliJ IDEA',
              'Visual Studio Code',
            ],
            correctIndex: 0,
            explain: 'El apunte describe a NetBeans como probablemente el IDE más sencillo de todos: más liviano que Eclipse, muy fácil de entender y utilizar, aunque un poco menos configurable.',
          },
        ],
        ms: [
          {
            id: 'ms-4-1',
            q: '¿Qué características adicionales (más allá de las básicas) menciona el apunte sobre Eclipse?',
            options: [
              'Búsquedas indexadas de archivos de código fuente y otros archivos',
              'Búsquedas dedicadas a diferentes tipos de archivos',
              'Herramientas de testeo, análisis de performance y cobertura de código',
              'Administrador incorporado para instalar plugins',
              'Diseñador de interfaces gráficas Swing',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El "espectacular diseñador de interfaces gráficas Swing" es de NetBeans, según el apunte de introducción a los IDEs. Las otras cuatro corresponden a Eclipse.',
          },
          {
            id: 'ms-4-2',
            q: '¿Qué afirmaciones sobre IntelliJ IDEA son correctas?',
            options: [
              'Sus búsquedas están previamente indexadas y son prácticamente instantáneas',
              'Utiliza Maven, pero abstraído detrás de facilidades que parecen propietarias',
              'Mantiene un modelo del proyecto, al igual que Eclipse',
              'Dan licencias gratuitas a estudiantes y organizaciones sin fines de lucro',
              'Es de código abierto y completamente gratuito',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'IDEA es pago; tiene una versión gratuita limitada, pero no es de código abierto ni completamente gratuito. Las demás afirmaciones son textuales del apunte.',
          },
          {
            id: 'ms-4-3',
            q: '¿Qué elementos forman parte del "modelo" de proyecto que mantiene Eclipse?',
            options: [
              'Dónde está el código fuente',
              'Dónde deben arrojarse los compilados y cómo correrlos',
              'Dónde están las librerías',
              'Qué código se ejecutó y un historial de ejecuciones',
              'Las credenciales del repositorio remoto',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Los cuatro primeros son los que enumera el apunte al describir el modelo de proyecto de Eclipse. Las credenciales del repositorio no se mencionan.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-4-1', front: 'Modelo de proyecto (Eclipse)', back: 'Eclipse sabe dónde está el código fuente, dónde arrojar los compilados y cómo correrlos, dónde están las librerías, qué código se ejecutó y el historial de ejecuciones.' },
        { id: 'fc-4-2', front: 'IDE "políglota"', back: 'El que ofrece distribuciones preparadas para distintos lenguajes o tareas (Java WEB, Java Desktop...), cada una con herramientas preinstaladas y ampliables. Eclipse lo es; NetBeans e IDEA no realmente.' },
        { id: 'fc-4-3', front: 'Contras de Eclipse', back: 'Un poco hambriento de recursos y con estética algo recargada, aunque muy configurable, flexible y sencillo de usar. Desde hace un tiempo tiene dark mode nativo.' },
        { id: 'fc-4-4', front: 'NetBeans: año y respaldo', back: 'Nació en 1996 (antes que Eclipse) y hoy lo soporta la Apache Foundation. Es de código abierto y gratuito.' },
        { id: 'fc-4-5', front: 'Empaquetado: Eclipse vs NetBeans', back: 'Eclipse maneja su propio motor de empaquetado; NetBeans utiliza Maven, herramienta estándar del ecosistema JAVA.' },
        { id: 'fc-4-6', front: 'Lenguajes que soporta NetBeans', back: 'Java, C/C++ y PHP con su respectiva pata web. No es realmente políglota.' },
        { id: 'fc-4-7', front: 'IDEA: modelo de licencias', back: 'Versión gratuita limitada (sin WEB nativa), licencia paga con primer pago alto y renovación anual conveniente, y licencias gratuitas para estudiantes y ONGs.' },
        { id: 'fc-4-8', front: 'Productos de la compañía IntelliJ', back: 'Múltiples versiones de la misma base: IntelliJ IDEA para Java, PyCharm para Python, ReSharper para C Sharp. La versión "ultimate" soporta todos, pero sin lo último de cada producto específico.' },
        { id: 'fc-4-9', front: 'La contra de ser "demasiado inteligente"', back: 'IDEA a veces vuelve frustrantes cosas sencillas, como Word cuando decide por su cuenta cómo debe quedar una lista numerada.' },
      ],
    },
    {
      id: '5',
      unit: 'eclipse',
      title: 'Requisitos, instalación y primer arranque',
      criollo: 'Antes que nada: JDK, no JRE. El JRE solo corre programas, el JDK te deja compilarlos. Con Java 8 o superior alcanza. Después bajás Eclipse (en Mac es un DMG, en Linux y Windows un comprimido que descomprimís donde quieras) y al arrancar te pide el workspace, que no es más que la carpeta donde van a vivir tus proyectos.',
      blocks: [
        {
          type: 'h3',
          text: 'Requisitos: el Java JDK',
          criollo: 'Si instalás solo el JRE te vas a comer un quilombo: no vas a poder compilar nada.',
        },
        {
          type: 'p',
          text: 'Para poder instalar Eclipse es necesario tener instalado el <strong>Java JDK</strong>. No es necesaria la versión más reciente, pero sí es necesario tener <strong>Java 8 o superior</strong>.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Para instalar Java, y para seguir la materia, es necesario instalar el <strong>Java JDK</strong> y no simplemente el <strong>JRE</strong>: necesitamos el <strong>entorno de desarrollo completo</strong>, no alcanza con el entorno de ejecución.',
        },
        {
          type: 'p',
          text: 'El apunte indica descargarlo desde el sitio de Oracle (<code>oracle.com/technetwork/java/javase/downloads/</code>), aceptar la licencia, elegir el instalador adecuado y seguir los pasos indicados por el instalador según la plataforma elegida.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/01-descarga-jdk-oracle.png',
          alt: 'Tabla de descarga del JDK en el sitio de Oracle, con los instaladores para cada sistema operativo y sus tamaños de archivo.',
          caption: 'Pantalla de descarga del Java JDK: se acepta la licencia y se elige el instalador de la plataforma.',
        },
        {
          type: 'h3',
          text: 'Instalación de Eclipse',
          criollo: 'No hay instalador propiamente dicho en Windows y Linux: descomprimís y adentro está el ejecutable. Listo.',
        },
        {
          type: 'p',
          text: 'Para la instalación del IDE Eclipse hay que acceder a <code>eclipse.org/downloads/eclipse-packages/</code> y elegir la plataforma. <strong>Para Mac es un DMG; para Linux y Windows es un archivo comprimido.</strong>',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/02-eclipse-packages.jpeg',
          alt: 'Página de paquetes de Eclipse mostrando las distintas distribuciones disponibles y el selector de plataforma.',
          caption: 'Página de descarga de Eclipse: se elige la distribución y la plataforma.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/03-eclipse-download.jpeg',
          alt: 'Botón de descarga de Eclipse con la opción de hacer una donación a la comunidad.',
          caption: 'Al seleccionar "Download" comienza la descarga y se presenta la posibilidad de hacer una donación a la comunidad Eclipse.',
        },
        {
          type: 'p',
          text: 'Una vez finalizada la descarga se puede proceder con la instalación. Para Mac, dado que es un DMG, se hace de la forma estándar. En el caso de <strong>Linux y Windows se debe descomprimir el archivo descargado a la ubicación deseada</strong>, y dentro está el ejecutable para iniciar el programa.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'El tutorial está preparado para Windows, pero <strong>la única diferencia entre plataformas es la instalación</strong>. Todas las demás funciones son independientes del sistema operativo utilizado.',
        },
        {
          type: 'h3',
          text: 'Inicio del programa y el workspace',
          criollo: 'El workspace suena a concepto místico de Eclipse pero es literalmente la carpeta donde guarda tus proyectos. Nada más.',
        },
        {
          type: 'p',
          text: 'En Mac se inicia haciendo clic sobre el ícono de Eclipse, en Linux ejecutando <code>eclipse.sh</code> y en Windows <code>eclipse.exe</code>. Luego de un momento se presenta la pantalla de selección de workspace.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/04-seleccion-workspace.png',
          alt: 'Diálogo Eclipse Launcher pidiendo seleccionar el directorio del workspace, con la opción "Use this as the default and do not ask again".',
          caption: 'Selección del workspace al iniciar Eclipse. Se puede tildar "Use this as the default..." para no volver a preguntarlo.',
        },
        {
          type: 'p',
          text: '<strong>"Workspace" es un concepto propio de Eclipse, pero es solo el directorio donde residirán todos nuestros proyectos</strong>, nada más raro que eso. Así que en esta pantalla debemos elegir dónde residirán los proyectos. De ser necesario, se puede cambiar una vez iniciado el programa. Puede preguntarse cada vez que se inicia o usar el elegido por defecto (para eso, tildar "Use this as the default...").',
        },
        {
          type: 'h3',
          text: 'Pantalla de bienvenida',
          criollo: 'La pantalla de Welcome trae ayudas básicas. Si te molesta, destildás "Always show..." y la cerrás con la X.',
        },
        {
          type: 'p',
          text: 'Cuando se inicia Eclipse aparece la pantalla de bienvenida. En ella podemos ver unas ayudas sobre las operaciones básicas que podemos realizar en el IDE. Si no se desea ver más esta pantalla se puede <strong>destildar "Always show..."</strong>. Para cerrarla, hacer clic sobre la <strong>"X" al lado de Welcome</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/05-pantalla-bienvenida.jpeg',
          alt: 'Pantalla de bienvenida (Welcome) de Eclipse con accesos a Overview, Tutorials, Samples y What\'s New.',
          caption: 'Pantalla de bienvenida de Eclipse, con ayudas sobre las operaciones básicas del IDE.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-5-1', q: 'Para seguir la materia alcanza con instalar el JRE de Java.', a: false, explain: 'Es necesario instalar el JDK, es decir el entorno de desarrollo completo. El JRE es solo el entorno de ejecución y no alcanza.' },
          { id: 'tf-5-2', q: 'Eclipse requiere Java 8 o superior, pero no necesariamente la versión más reciente.', a: true, explain: 'El apunte lo aclara textualmente en la sección de requisitos.' },
          { id: 'tf-5-3', q: 'En Windows y Linux, Eclipse se descarga como un archivo comprimido que hay que descomprimir en la ubicación deseada.', a: true, explain: 'Para Mac es un DMG; para Linux y Windows es un comprimido, y dentro está el ejecutable para iniciar el programa.' },
          { id: 'tf-5-4', q: 'El "workspace" es un modelo interno de Eclipse que guarda la configuración de compilación de cada proyecto.', a: false, explain: 'El workspace es solo el directorio donde residirán todos nuestros proyectos, "nada más raro que eso". El modelo del proyecto lo guardan .project y .settings.' },
          { id: 'tf-5-5', q: 'Una vez elegido, el workspace no se puede cambiar sin reinstalar Eclipse.', a: false, explain: 'De ser necesario, se puede cambiar una vez iniciado el programa. Además puede preguntarse en cada arranque o fijarse uno por defecto.' },
        ],
        mc: [
          {
            id: 'mc-5-1',
            q: '¿Cuál es la única diferencia entre plataformas que menciona el tutorial de Eclipse?',
            options: [
              'La instalación; todas las demás funciones son independientes del sistema operativo',
              'La forma de crear proyectos',
              'Los atajos de teclado del autocompletado',
              'La estructura de carpetas del proyecto',
            ],
            correctIndex: 0,
            explain: 'El tutorial está preparado para Windows y aclara que la única diferencia entre plataformas es la instalación.',
          },
          {
            id: 'mc-5-2',
            q: '¿Qué ejecutable inicia Eclipse en Linux?',
            options: [
              'eclipse.sh',
              'eclipse.exe',
              'eclipse.dmg',
              'eclipse.jar',
            ],
            correctIndex: 0,
            explain: 'En Mac se hace clic sobre el ícono, en Linux se ejecuta eclipse.sh y en Windows eclipse.exe.',
          },
          {
            id: 'mc-5-3',
            q: '¿Cómo se evita que Eclipse pregunte el workspace en cada arranque?',
            options: [
              'Tildando "Use this as the default..." en la pantalla de selección',
              'Destildando "Always show..." en la pantalla de bienvenida',
              'Cerrando la vista Welcome con la "X"',
              'Eligiendo la Java Perspective',
            ],
            correctIndex: 0,
            explain: 'Esa opción de la pantalla de selección de workspace fija el directorio por defecto. Destildar "Always show..." es para la pantalla de bienvenida, que es otra cosa.',
          },
        ],
        ms: [
          {
            id: 'ms-5-1',
            q: '¿Qué afirmaciones sobre la instalación de Eclipse son correctas?',
            options: [
              'Requiere tener instalado el Java JDK',
              'Alcanza con Java 8 o superior',
              'Para Mac se descarga un DMG',
              'Para Linux y Windows se descarga un archivo comprimido',
              'El instalador de Eclipse instala automáticamente el JDK si falta',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte no menciona en ningún momento que Eclipse instale el JDK: el JDK es un requisito previo que hay que instalar aparte desde el sitio de Oracle.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-5-1', front: 'JDK vs JRE', back: 'El JDK es el entorno de desarrollo completo (permite compilar); el JRE es solo el entorno de ejecución. Para la materia hay que instalar el JDK.' },
        { id: 'fc-5-2', front: 'Versión mínima de Java', back: 'Java 8 o superior. No hace falta la versión más reciente.' },
        { id: 'fc-5-3', front: 'Formato de descarga de Eclipse', back: 'Mac: un DMG que se instala de la forma estándar. Linux y Windows: un archivo comprimido que se descomprime en la ubicación deseada, con el ejecutable adentro.' },
        { id: 'fc-5-4', front: 'Workspace', back: 'Concepto propio de Eclipse: es solo el directorio donde residirán todos nuestros proyectos. Se elige al iniciar y se puede cambiar después.' },
        { id: 'fc-5-5', front: 'Ejecutable por plataforma', back: 'Mac: clic en el ícono. Linux: eclipse.sh. Windows: eclipse.exe.' },
        { id: 'fc-5-6', front: 'Pantalla de bienvenida', back: 'Muestra ayudas sobre las operaciones básicas. Se puede destildar "Always show..." para no verla más y se cierra con la "X" al lado de Welcome.' },
      ],
    },
    {
      id: '6',
      unit: 'eclipse',
      title: 'Perspectivas, vistas y editores',
      criollo: 'Eclipse tiene su propio vocabulario y conviene aprenderlo: una vista es un panelcito con información (Package Explorer, Problems, Outline), una perspectiva es un conjunto de vistas armado para una tarea, y el editor es donde escribís código. Para la materia usamos la Java Perspective. Si rompés el layout, Reset Perspective y listo.',
      blocks: [
        {
          type: 'h3',
          text: 'Perspectivas y vistas',
          criollo: 'Vista = un panel con info. Perspectiva = el conjunto de paneles armado para una tarea. Cambiás de tarea, cambiás de perspectiva.',
        },
        {
          type: 'p',
          text: 'Eclipse presenta el entorno de desarrollo (código, información, overviews, etc.) de una forma particular, aunque esta puede ser alterada o se puede elegir entre diferentes formas prediseñadas. <strong>Cada "forma de ver las cosas" Eclipse la llama "Perspectivas"</strong>.',
        },
        {
          type: 'p',
          text: 'Las perspectivas son <strong>conjuntos de "vistas"</strong>. En Eclipse, una <strong>"vista" es una porción de información</strong> acerca de nuestro código, o del estado de nuestro código, o del estado de ejecución de nuestro código, o incluso información adicional.',
        },
        {
          type: 'p',
          text: 'La primera perspectiva que nos encontramos es la <strong>"Java EE Perspective"</strong>. En ella podemos ver varias vistas, a saber: <strong>"Project Explorer"</strong>, donde se muestran los proyectos y su contenido, y <strong>"Outline"</strong>, que muestra un overview de nuestras variables, métodos, etc., que contiene el código fuente, entre otras.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/06-perspectiva-java-ee.jpeg',
          alt: 'Ventana de Eclipse con la perspectiva Java EE: vistas Project Explorer a la izquierda, Outline y Task List a la derecha.',
          caption: 'La "Java EE Perspective", primera perspectiva que se encuentra al abrir Eclipse.',
        },
        {
          type: 'h3',
          text: 'Cambiar a la Java Perspective',
          criollo: 'Es la que usamos en la materia. Se abre desde el botón de perspectivas, al lado de "Quick Access".',
        },
        {
          type: 'p',
          text: 'Hay otras perspectivas ya incorporadas. <strong>La que más se adecúa al trabajo que haremos en la materia es la "Java Perspective"</strong>. Para abrirla: al lado de "Quick Access" tenemos el botón para agregar perspectivas; al hacer clic se muestra el diálogo de selección, donde elegimos "Java" y hacemos clic en "Open".',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/07-dialogo-open-perspective.png',
          alt: 'Diálogo "Open Perspective" de Eclipse con la lista de perspectivas disponibles, entre ellas Java, Java EE y Debug.',
          caption: 'Diálogo para abrir una perspectiva: se elige "Java" y se hace clic en "Open".',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/08-perspectiva-java.jpeg',
          alt: 'Ventana de Eclipse con la Java Perspective: Package Explorer a la izquierda, editor al centro y vista Problems abajo.',
          caption: 'La "Java Perspective": aparece el "Package Explorer" en lugar del "Project Explorer" y se suma la vista "Problems".',
        },
        {
          type: 'p',
          text: 'Esta perspectiva apenas se diferencia de la anterior. Se puede ver cómo <strong>"Project Explorer" cambió por "Package Explorer"</strong>, cuya <strong>única diferencia es la forma de mostrar los proyectos</strong>, pero la funcionalidad mencionada se mantiene. También aparece la vista <strong>"Problems"</strong>: aquí iremos viendo los errores de compilación a medida que vayamos escribiendo código. Es una vista muy útil.',
        },
        {
          type: 'h3',
          text: 'Cerrar, mover y recuperar vistas',
          criollo: 'Todo se puede cerrar y mover. Y si cerraste algo sin querer, o lo volvés a agregar desde Show View, o resetéas la perspectiva entera.',
        },
        {
          type: 'p',
          text: 'Cualquier vista se puede cerrar haciendo clic sobre la <strong>"X" al lado de su nombre</strong>. Cada vista se puede mover independientemente y adosar a diferentes partes de la pantalla según la comodidad del usuario. Se pueden agregar vistas que se hayan cerrado, o vistas adicionales, desde el menú <strong>Window &gt; Show View</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/09-menu-show-view.png',
          alt: 'Menú Window > Show View de Eclipse desplegado con la lista reducida de vistas y la opción "Other...".',
          caption: 'Menú para agregar vistas. Conviene seleccionar "Other" para ver la lista completa.',
        },
        {
          type: 'p',
          text: 'Conviene seleccionar <strong>"Other"</strong>, y aparecerá la lista completa de vistas posibles, por si la que cerramos no aparece en la lista reducida. En la lista completa aparecen todas las vistas <strong>organizadas por perspectivas</strong>, pero eso <strong>no significa que una vista de una perspectiva no se pueda agregar en otra</strong>: es solo una organización.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/10-lista-completa-vistas.png',
          alt: 'Diálogo "Show View" con el árbol completo de vistas organizadas por perspectiva y el campo "type filter text".',
          caption: 'Lista completa de vistas. Con "type filter text" se puede buscar una vista por su nombre.',
        },
        {
          type: 'p',
          text: 'También podemos buscar una vista por su nombre donde dice <strong>"type filter text"</strong>. Por ejemplo, si cerramos la vista "Problems" y la queremos volver a agregar, podemos tipear "Problems" (o parte de la palabra) y se filtrará. A partir de ahí, con un clic en "Open" se agregará donde estuvo mostrándose por última vez.',
        },
        {
          type: 'p',
          text: 'En caso de querer <strong>restaurar por completo una perspectiva</strong> (si faltan vistas o cerramos alguna sin querer) podemos ir a <strong>Window &gt; Perspective &gt; Reset Perspective</strong> para volver todo a la normalidad.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/11-reset-perspective.png',
          alt: 'Menú de Eclipse con la opción "Reset Perspective..." resaltada dentro del submenú Perspective.',
          caption: 'Reset Perspective: restaura por completo la perspectiva si cerramos vistas sin querer.',
        },
        {
          type: 'h3',
          text: 'Los editores',
          criollo: 'El editor es donde escribís el código. Se comporta como una vista: se cierra con la X y se puede mover por la pantalla.',
        },
        {
          type: 'p',
          text: 'Otra de las cosas que vamos a ver en una perspectiva es el <strong>"Editor"</strong>. Como el nombre lo dice, son los editores de texto en los cuales escribiremos nuestro código fuente. Tienen un <strong>comportamiento similar a las vistas</strong>: se pueden cerrar con la "X" al lado de su nombre y se pueden mover por la perspectiva y adosar a diferentes partes de ella.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/12-editor-codigo.jpeg',
          alt: 'Editor de código de Eclipse mostrando una clase Java, con su pestaña y la "X" para cerrarlo.',
          caption: 'El editor de código: se comporta como una vista, se cierra con la "X" y se puede mover por la perspectiva.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-6-1', q: 'Una perspectiva en Eclipse es un conjunto de vistas.', a: true, explain: 'Cada "forma de ver las cosas" se llama perspectiva, y las perspectivas son conjuntos de vistas.' },
          { id: 'tf-6-2', q: 'La diferencia entre "Project Explorer" y "Package Explorer" es la forma de mostrar los proyectos.', a: true, explain: 'El apunte aclara que su única diferencia es la forma de mostrar los proyectos, pero la funcionalidad se mantiene.' },
          { id: 'tf-6-3', q: 'Una vista que aparece listada bajo una perspectiva solo puede usarse dentro de esa perspectiva.', a: false, explain: 'La organización por perspectivas en la lista completa es solo eso: una organización. No impide agregar la vista en otra perspectiva.' },
          { id: 'tf-6-4', q: 'Los editores se comportan de forma similar a las vistas: se cierran con la "X" y se pueden mover por la perspectiva.', a: true, explain: 'Es la descripción textual del apunte sobre los editores.' },
          { id: 'tf-6-5', q: 'La perspectiva recomendada para la materia es la "Java EE Perspective".', a: false, explain: 'La que más se adecúa al trabajo de la materia es la "Java Perspective". La Java EE es solo la primera que aparece al abrir Eclipse.' },
        ],
        mc: [
          {
            id: 'mc-6-1',
            q: '¿Qué es una "vista" en Eclipse?',
            options: [
              'Una porción de información sobre el código, su estado, su ejecución o información adicional',
              'Un conjunto de paneles preconfigurado para una tarea',
              'El editor de texto donde se escribe el código fuente',
              'El directorio donde residen los proyectos',
            ],
            correctIndex: 0,
            explain: 'Esa es la definición del apunte. El conjunto de paneles es la perspectiva, el editor es otra cosa y el directorio de proyectos es el workspace.',
          },
          {
            id: 'mc-6-2',
            q: '¿Qué vista nueva aparece al pasar a la "Java Perspective" y sirve para ver los errores de compilación?',
            options: [
              'Problems',
              'Outline',
              'Navigator',
              'Task List',
            ],
            correctIndex: 0,
            explain: 'En la Java Perspective aparece la vista "Problems", donde se ven los errores de compilación a medida que se escribe código.',
          },
          {
            id: 'mc-6-3',
            q: 'Cerré varias vistas sin querer y quiero dejar la perspectiva como estaba. ¿Qué hago?',
            options: [
              'Window > Perspective > Reset Perspective',
              'Window > Show View > Other',
              'Cierro y vuelvo a abrir Eclipse',
              'Cambio de workspace',
            ],
            correctIndex: 0,
            explain: 'Reset Perspective restaura por completo la perspectiva. Show View > Other sirve para agregar una vista puntual, no para restaurar todo.',
          },
          {
            id: 'mc-6-4',
            q: '¿Para qué sirve el campo "type filter text" en la lista completa de vistas?',
            options: [
              'Para buscar una vista por su nombre, o parte de él, y filtrarla',
              'Para renombrar la vista seleccionada',
              'Para filtrar los archivos que muestra el Package Explorer',
              'Para buscar texto dentro del código fuente',
            ],
            correctIndex: 0,
            explain: 'El apunte usa el ejemplo de tipear "Problems" (o parte de la palabra) para encontrarla y abrirla con un clic en "Open".',
          },
        ],
        ms: [
          {
            id: 'ms-6-1',
            q: '¿Qué vistas menciona el apunte al describir las perspectivas de Eclipse?',
            options: [
              'Project Explorer',
              'Outline',
              'Package Explorer',
              'Problems',
              'Terminal',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte menciona Project Explorer y Outline en la Java EE Perspective, y Package Explorer y Problems en la Java Perspective. La vista Terminal no aparece.',
          },
          {
            id: 'ms-6-2',
            q: '¿Qué se puede hacer con las vistas en Eclipse según el apunte?',
            options: [
              'Cerrarlas haciendo clic en la "X" al lado de su nombre',
              'Moverlas independientemente y adosarlas a distintas partes de la pantalla',
              'Volver a agregarlas desde Window > Show View',
              'Buscarlas por nombre en la lista completa con "type filter text"',
              'Duplicar la misma vista en dos perspectivas al mismo tiempo con un atajo de teclado',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte no menciona ningún atajo para duplicar vistas entre perspectivas. Las otras cuatro operaciones sí están descriptas.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-6-1', front: 'Perspectiva', back: 'Cada "forma de ver las cosas" en Eclipse: un conjunto de vistas armado para una tarea (edición, ejecución, depuración...).' },
        { id: 'fc-6-2', front: 'Vista', back: 'Una porción de información acerca del código, del estado del código o de su ejecución, o información adicional.' },
        { id: 'fc-6-3', front: 'Java EE Perspective', back: 'La primera perspectiva que aparece al abrir Eclipse. Incluye las vistas "Project Explorer" y "Outline", entre otras.' },
        { id: 'fc-6-4', front: 'Java Perspective', back: 'La perspectiva que más se adecúa al trabajo de la materia. Trae "Package Explorer" en vez de "Project Explorer" y suma la vista "Problems".' },
        { id: 'fc-6-5', front: 'Vista Outline', back: 'Muestra un overview de las variables, métodos, etc. que contiene el código fuente.' },
        { id: 'fc-6-6', front: 'Vista Problems', back: 'Muestra los errores de compilación a medida que se escribe código. Aparece en la Java Perspective.' },
        { id: 'fc-6-7', front: 'Recuperar una vista cerrada', back: 'Window > Show View, y conviene elegir "Other" para ver la lista completa. Se puede filtrar por nombre con "type filter text".' },
        { id: 'fc-6-8', front: 'Reset Perspective', back: 'Restaura por completo una perspectiva cuando faltan vistas o se cerró alguna sin querer.' },
        { id: 'fc-6-9', front: 'Editor', back: 'El área donde se escribe el código fuente. Se comporta como una vista: se cierra con la "X" y se puede mover y adosar por la perspectiva.' },
      ],
    },
    {
      id: '7',
      unit: 'eclipse',
      title: 'Proyectos y estructura de proyectos',
      criollo: 'Todo tu código vive dentro de un proyecto, y todo proyecto tiene cuatro cosas: .project, .settings, src y bin. Los dos primeros son el modelo del proyecto y no se tocan a mano. bin son los compilados, no tenés nada que hacer ahí. src es donde va tu código, y ojo: si ponés un archivo fuera de src, Eclipse lo trata como texto plano sin significado.',
      blocks: [
        {
          type: 'h3',
          text: 'Crear un proyecto',
          criollo: 'Botón derecho en el Package Explorer, New > Java Project, nombre, Finish. Nada más.',
        },
        {
          type: 'p',
          text: 'Como vimos, en la vista de "Project Explorer" aparecen nuestros proyectos de desarrollo. <strong>Cada "Project" debe crearse para contener nuestro código fuente.</strong> Para crear un nuevo proyecto hacemos <strong>clic derecho en cualquier parte libre del "Package Explorer" y seleccionamos "New &gt; Java Project"</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/13-new-java-project.png',
          alt: 'Menú contextual del Package Explorer con la opción New > Java Project resaltada.',
          caption: 'Clic derecho en el Package Explorer: New > Java Project.',
        },
        {
          type: 'p',
          text: 'Se nos presentará el diálogo para crear un proyecto: <strong>ingresamos un nombre y le damos "Finish"</strong>. A continuación, nuestro proyecto aparecerá en el "Project Explorer".',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/14-dialogo-nuevo-proyecto.png',
          alt: 'Diálogo "New Java Project" con el campo Project name, la ubicación, el JRE a utilizar y el botón Finish.',
          caption: 'Diálogo de creación del proyecto: alcanza con ingresar un nombre y dar "Finish".',
        },
        {
          type: 'h3',
          text: 'Estructura de un proyecto',
          criollo: 'Cuatro elementos: .project y .settings (el modelo, no tocar), bin (compilados, no mirar) y src (tu código).',
        },
        {
          type: 'p',
          text: 'Al igual que todos los IDEs, Eclipse maneja un <strong>"modelo" de proyecto</strong> en el que almacena la estructura de directorios, las librerías, etc. En Eclipse, un proyecto consta de:',
        },
        {
          type: 'table',
          caption: 'Los cuatro elementos de un proyecto Eclipse',
          headers: ['Elemento', 'Qué contiene', 'Se toca'],
          rows: [
            ['.project', 'Parte del modelo del proyecto', 'No: no se debe editar a mano'],
            ['.settings', 'Modelo del proyecto y su configuración', 'No: no se debe editar a mano'],
            ['bin', 'Todos los archivos compilados', 'No tiene sentido navegar esta carpeta'],
            ['src', 'Nuestros archivos de código fuente', 'Sí: es donde trabajamos'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Tanto <code>.project</code> como <code>.settings</code> almacenan el modelo del proyecto y su configuración: <strong>no se deben editar estos archivos a mano</strong>.',
        },
        {
          type: 'p',
          text: 'La vista <strong>"Package Explorer" filtra esos tres ítems</strong> (<code>.project</code>, <code>.settings</code> y <code>bin</code>) justamente por estas razones. Para ver todo podemos hacerlo mediante la vista <strong>"Navigator"</strong> (<strong>Window &gt; Show View &gt; Navigator</strong>). Esta vista es como un navegador de archivos y nada más.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/15-vista-navigator.png',
          alt: 'Vista Navigator de Eclipse mostrando la estructura real del proyecto, incluidos .settings, bin, src y .classpath.',
          caption: 'La vista "Navigator" muestra todo: es como un navegador de archivos y nada más.',
        },
        {
          type: 'p',
          text: '<strong>Para la edición de código usaremos siempre la vista "Package Explorer"</strong>, que tiene la carpeta <code>src</code>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/16-package-explorer-src.jpeg',
          alt: 'Vista Package Explorer mostrando el proyecto con la JRE System Library y la carpeta src.',
          caption: 'El "Package Explorer" filtra el modelo del proyecto y los compilados: muestra la JRE System Library y la carpeta src.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'La carpeta <code>src</code> es <strong>"especial"</strong>: Eclipse (de acuerdo con el modelo del proyecto) espera que los archivos de código fuente estén ahí dentro. <strong>Si los ponemos afuera, no serán archivos de código fuente</strong>, sino que serán tratados como archivos de texto sin ningún significado.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-7-1', q: 'Un proyecto en Eclipse consta de un archivo .project, una carpeta .settings, una carpeta src y una carpeta bin.', a: true, explain: 'Son los cuatro elementos que enumera el apunte.' },
          { id: 'tf-7-2', q: 'Los archivos .project y .settings se pueden editar a mano para ajustar la configuración del proyecto.', a: false, explain: 'El apunte es explícito: almacenan el modelo del proyecto y su configuración, y no se deben editar a mano.' },
          { id: 'tf-7-3', q: 'La carpeta bin almacena los archivos compilados y no tiene sentido navegarla.', a: true, explain: 'Es la descripción textual del apunte.' },
          { id: 'tf-7-4', q: 'Si ponemos un archivo de código fuente fuera de src, Eclipse igual lo compila normalmente.', a: false, explain: 'Si están afuera de src no serán archivos de código fuente: serán tratados como archivos de texto sin ningún significado.' },
          { id: 'tf-7-5', q: 'El "Package Explorer" muestra .project, .settings y bin, mientras que "Navigator" los oculta.', a: false, explain: 'Es al revés: el Package Explorer filtra esos tres ítems y el Navigator muestra todo, como un navegador de archivos.' },
        ],
        mc: [
          {
            id: 'mc-7-1',
            q: '¿Cómo se crea un proyecto nuevo en Eclipse según el tutorial?',
            options: [
              'Clic derecho en una parte libre del Package Explorer > New > Java Project, se ingresa el nombre y Finish',
              'Copiando una carpeta con código dentro del workspace',
              'File > Import > Existing Projects into Workspace',
              'Creando manualmente las carpetas src y bin en el disco',
            ],
            correctIndex: 0,
            explain: 'Esa es la secuencia del tutorial. Importar sirve para traer un proyecto ya exportado, y copiar carpetas a mano no funciona o funciona de forma incorrecta.',
          },
          {
            id: 'mc-7-2',
            q: '¿Qué vista hay que abrir para ver absolutamente todos los archivos del proyecto, incluidos los del modelo?',
            options: [
              'Navigator (Window > Show View > Navigator)',
              'Package Explorer',
              'Outline',
              'Problems',
            ],
            correctIndex: 0,
            explain: 'El Navigator es como un navegador de archivos y nada más: muestra todo. El Package Explorer filtra .project, .settings y bin.',
          },
          {
            id: 'mc-7-3',
            q: '¿Qué guarda el "modelo" de proyecto de Eclipse?',
            options: [
              'La estructura de directorios, las librerías y la configuración del proyecto',
              'Únicamente el código fuente',
              'El historial de versiones del código',
              'Los breakpoints de depuración',
            ],
            correctIndex: 0,
            explain: 'El apunte dice que Eclipse maneja un modelo de proyecto en el que almacena la estructura de directorios, las librerías, etc., repartido entre .project y .settings.',
          },
        ],
        ms: [
          {
            id: 'ms-7-1',
            q: '¿Qué ítems filtra la vista "Package Explorer"?',
            options: [
              '.project',
              '.settings',
              'bin',
              'src',
              'Las librerías del JRE',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Filtra los tres ítems del modelo y los compilados: .project, .settings y bin. La carpeta src sí se muestra, y las librerías del JRE también aparecen en la vista.',
          },
          {
            id: 'ms-7-2',
            q: '¿Qué afirmaciones sobre la carpeta src son correctas?',
            options: [
              'Es donde Eclipse espera que estén los archivos de código fuente',
              'Es "especial" de acuerdo con el modelo del proyecto',
              'Los archivos puestos fuera de ella se tratan como texto sin significado',
              'Es la carpeta que usamos siempre para la edición de código desde el Package Explorer',
              'Contiene también los archivos compilados del proyecto',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Los compilados van en la carpeta bin, no en src. El resto de las afirmaciones son textuales del apunte.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-7-1', front: 'Crear un proyecto en Eclipse', back: 'Clic derecho en una parte libre del Package Explorer > New > Java Project. Se ingresa un nombre y se da "Finish".' },
        { id: 'fc-7-2', front: 'Los 4 elementos de un proyecto', back: 'El archivo .project, la carpeta .settings, la carpeta src y la carpeta bin.' },
        { id: 'fc-7-3', front: '.project y .settings', back: 'Almacenan el modelo del proyecto y su configuración. No se deben editar a mano.' },
        { id: 'fc-7-4', front: 'Carpeta bin', back: 'Almacena todos los archivos compilados. No tiene sentido navegarla.' },
        { id: 'fc-7-5', front: 'Carpeta src', back: 'Almacena los archivos de código fuente. Es "especial": Eclipse espera el código ahí adentro. Lo que quede afuera se trata como texto sin significado.' },
        { id: 'fc-7-6', front: 'Vista Navigator', back: 'Window > Show View > Navigator. Muestra todo el proyecto sin filtrar; es como un navegador de archivos y nada más.' },
        { id: 'fc-7-7', front: '¿Qué vista se usa para editar código?', back: 'Siempre el "Package Explorer", que filtra .project, .settings y bin y deja a la vista lo que importa.' },
      ],
    },
    {
      id: '8',
      unit: 'eclipse',
      title: 'Clases, autocompletar y navegación del código',
      criollo: 'Acá están los truquitos que te ahorran horas: New > Class para crear un archivo fuente, CTRL+espacio para que Eclipse escriba por vos (el famoso "syso"), el asterisco al lado del nombre que te avisa que no grabaste, CTRL+S para grabar y CTRL + clic para saltar a donde se declaró algo.',
      blocks: [
        {
          type: 'h3',
          text: 'Creación de archivos de código fuente',
          criollo: 'Botón derecho sobre src, New > Class, le ponés nombre y Finish. Te abre el editor solo.',
        },
        {
          type: 'p',
          text: 'Cada vez que necesitemos un nuevo archivo de código fuente haremos <strong>botón derecho sobre "src" &gt; New</strong> y uno de los ítems mostrados; el más básico es <strong>"Class"</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/17-new-class.png',
          alt: 'Menú contextual sobre la carpeta src con New desplegado y la opción Class entre los ítems disponibles.',
          caption: 'Botón derecho sobre "src" > New > Class para crear un archivo de código fuente.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'El apunte aclara que ya veremos cómo funcionan las "Class"; por ahora asumamos que <strong>son nuestros archivos de código fuente</strong>.',
        },
        {
          type: 'p',
          text: 'Al hacer <strong>New &gt; Class</strong> obtenemos un diálogo donde ingresaremos detalles acerca de nuestra "Class", detalles que veremos luego con el correr de la cursada. <strong>Ingresando el nombre y dándole "Finish"</strong> se abrirá automáticamente el "Editor" de esa "Class" para poder empezar a editar código.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/18-dialogo-new-class.png',
          alt: 'Diálogo "New Java Class" con los campos Source folder, Package, Name, modificadores de acceso y opciones de método main.',
          caption: 'Diálogo de creación de una clase: con el nombre y "Finish" alcanza para empezar.',
        },
        {
          type: 'h3',
          text: 'Autocompletar con CTRL+espacio',
          criollo: 'El clásico: escribís "syso", hacés CTRL+espacio y te escribe System.out.println() entero. Usalo para todo: variables, métodos, clases.',
        },
        {
          type: 'p',
          text: 'En Eclipse, como en todos los IDEs, tenemos la posibilidad de <strong>autocompletar instrucciones</strong>, para no tener que escribir todo manualmente e introducir errores sin intención. Por ejemplo, en Java, para imprimir por consola tenemos que escribir <code>System.out.println("mensaje")</code>. Pero Eclipse puede escribir por nosotros todo esto con una abreviatura y la combinación <strong>CTRL+espacio</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/19-autocompletar-syso.png',
          alt: 'Editor de Eclipse con la abreviatura "syso" escrita y el desplegable de autocompletado mostrando "sysout - print to standard out" como primera opción.',
          caption: 'Se escribió "syso" y se presionó CTRL+espacio: Eclipse ofrece "print to standard out" junto con otras opciones.',
        },
        {
          type: 'p',
          text: 'En la captura se escribió <strong>"syso"</strong> y luego se ingresó la combinación CTRL+espacio. Aparecen algunas opciones para elegir (con Enter). Si bien queremos usar la instrucción <code>System.out.println</code>, Eclipse piensa que podemos querer escribir otra cosa también y nos da la posibilidad de elegirlas. Por ahora nos quedamos con la opción <strong>"print to standard out"</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/20-syso-resultado.png',
          alt: 'Editor de Eclipse mostrando la línea System.out.println() ya escrita por el autocompletado, con el cursor entre los paréntesis.',
          caption: 'Resultado del autocompletado: la instrucción System.out.println() escrita completa.',
        },
        {
          type: 'p',
          text: 'Es <strong>muy recomendable utilizar CTRL+espacio para todo</strong>: abreviaturas como esta (comúnmente llamada <strong>"syso" en la jerga</strong>), nombres de variables, de funciones, de clases... Para todo siempre hay una opción haciendo CTRL+espacio. Está ahí para <strong>escribir menos</strong>, especialmente escribir menos de aquello que se repite a menudo y en lo que no queremos perder tiempo escribiendo.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/21-autocompletar-variable.png',
          alt: 'Editor de Eclipse con el desplegable de autocompletado sugiriendo la variable "variableConValorImportante".',
          caption: 'Autocompletado de nombres: si quiero referenciar "variableConValorImportante" y no quiero escribir ese nombre tan largo (ni equivocarme), CTRL+espacio la completa por mí.',
        },
        {
          type: 'h3',
          text: 'Guardar: el asterisco y CTRL+S',
          criollo: 'Si ves un * al lado del nombre del archivo, todavía no grabaste. CTRL+S y listo. CTRL+Shift+S graba todo.',
        },
        {
          type: 'p',
          text: 'Al lado del nombre del archivo puede aparecer un <strong>"*"</strong>. Eso indica que <strong>el archivo fue modificado pero aún no ha sido grabado/salvado</strong>. Para grabarlo podemos ir al menú File, donde <strong>"Save All" grabará todos los archivos que tengamos abiertos y modificados</strong>. También podemos (debemos) usar la combinación de teclas <strong>CTRL+S</strong> o <strong>CTRL+Shift+S</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/22-menu-save.png',
          alt: 'Menú File de Eclipse desplegado con las opciones Save, Save As, Save All y sus atajos de teclado.',
          caption: 'Menú File con Save y Save All. En la práctica se usan los atajos CTRL+S y CTRL+Shift+S.',
        },
        {
          type: 'h3',
          text: 'Navegación del código',
          criollo: 'CTRL + pasar el mouse convierte cualquier nombre en un link. Clic y saltás a donde se declaró.',
        },
        {
          type: 'p',
          text: 'Un aspecto importante de los IDEs es la posibilidad de <strong>"navegar" el código</strong>: podemos desplazarnos de forma rápida de un lado al otro del código. Es muy común usar la <strong>tecla CTRL y posarse con el ratón sobre un nombre</strong> de una variable, función o tipo de variable (clase), y que esta <strong>se convierta en un enlace</strong> (se pone azul y subrayado).',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/23-navegacion-open-declaration.png',
          alt: 'Editor de Eclipse con CTRL presionado sobre un identificador, mostrando el menú flotante con "Open Declaration" y "Open Declared Type".',
          caption: 'Con CTRL + mouse el nombre se vuelve un enlace y ofrece "Open Declaration" y "Open Declared Type".',
        },
        {
          type: 'table',
          caption: 'Las dos opciones de navegación',
          headers: ['Opción', 'A dónde lleva'],
          rows: [
            ['Open Declaration', 'A la línea donde se declaró la variable'],
            ['Open Declared Type', 'Al código de la clase que define el tipo de la variable (por ejemplo, Integer)'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-8-1', q: 'Para crear un archivo de código fuente se hace botón derecho sobre "src" > New > Class.', a: true, explain: 'Es la secuencia del tutorial; "Class" es el ítem más básico de los que ofrece New sobre src.' },
          { id: 'tf-8-2', q: 'Al dar "Finish" en el diálogo de New > Class, Eclipse abre automáticamente el editor de esa clase.', a: true, explain: 'El apunte lo dice: ingresando el nombre y dándole Finish se abrirá automáticamente el Editor de esa Class.' },
          { id: 'tf-8-3', q: 'El "*" al lado del nombre del archivo indica que tiene errores de compilación.', a: false, explain: 'Indica que el archivo fue modificado pero aún no fue grabado. Los errores de compilación se ven en la vista Problems.' },
          { id: 'tf-8-4', q: 'La combinación para autocompletar en Eclipse es CTRL+espacio.', a: true, explain: 'Es el atajo de Eclipse (y de NetBeans). En IntelliJ IDEA se usa TAB.' },
          { id: 'tf-8-5', q: '"Open Declared Type" lleva a la línea donde se declaró la variable.', a: false, explain: 'Eso hace "Open Declaration". "Open Declared Type" lleva al código de la clase que define el tipo de la variable (por ejemplo, Integer).' },
        ],
        mc: [
          {
            id: 'mc-8-1',
            q: '¿Qué escribe Eclipse si tipeamos "syso" y presionamos CTRL+espacio eligiendo "print to standard out"?',
            options: [
              'System.out.println()',
              'System.out.print()',
              'public static void main(String[] args)',
              'SyncScopeHelper',
            ],
            correctIndex: 0,
            explain: 'La abreviatura "syso" completa la instrucción System.out.println(), que es la que se usa para imprimir por consola. Las demás opciones del desplegable son otras sugerencias que ofrece Eclipse.',
          },
          {
            id: 'mc-8-2',
            q: '¿Para qué recomienda el apunte usar CTRL+espacio?',
            options: [
              'Para todo: abreviaturas, nombres de variables, funciones y clases, y así escribir menos y evitar errores',
              'Solo para la abreviatura "syso"',
              'Solo para completar nombres de clases del JDK',
              'Para guardar todos los archivos abiertos',
            ],
            correctIndex: 0,
            explain: 'El apunte dice que es muy recomendable usarlo para todo, porque siempre hay una opción y está para escribir menos, especialmente de lo que se repite a menudo.',
          },
          {
            id: 'mc-8-3',
            q: '¿Qué hace "Save All" en el menú File?',
            options: [
              'Graba todos los archivos que tengamos abiertos y modificados',
              'Graba únicamente el archivo activo',
              'Exporta el proyecto completo a un zip',
              'Guarda la configuración de la perspectiva actual',
            ],
            correctIndex: 0,
            explain: 'Save All graba todos los archivos abiertos y modificados; su atajo es CTRL+Shift+S.',
          },
          {
            id: 'mc-8-4',
            q: '¿Qué pasa al mantener CTRL y posar el mouse sobre el nombre de una variable?',
            options: [
              'El nombre se convierte en un enlace (azul y subrayado) y permite saltar a su declaración',
              'Se renombra la variable en todo el proyecto',
              'Se muestra el valor actual de la variable',
              'Se agrega un breakpoint en esa línea',
            ],
            correctIndex: 0,
            explain: 'Es la navegación del código: el nombre se vuelve enlace y ofrece "Open Declaration" y "Open Declared Type".',
          },
        ],
        ms: [
          {
            id: 'ms-8-1',
            q: '¿Qué formas de grabar un archivo menciona el apunte?',
            options: [
              'La opción Save del menú File',
              '"Save All" del menú File',
              'CTRL+S',
              'CTRL+Shift+S',
              'Grabado automático al cambiar de editor',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte no menciona ningún grabado automático; de hecho el "*" existe justamente para avisar que el archivo está modificado y sin grabar.',
          },
          {
            id: 'ms-8-2',
            q: '¿Qué se puede autocompletar con CTRL+espacio según el apunte?',
            options: [
              'Abreviaturas como "syso"',
              'Nombres de variables',
              'Nombres de funciones',
              'Nombres de clases',
              'Los comentarios de documentación del proyecto',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte enumera abreviaturas, nombres de variables, de funciones y de clases. La generación de comentarios no se menciona.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-8-1', front: 'Crear un archivo de código fuente', back: 'Botón derecho sobre "src" > New > Class. Se ingresa el nombre, se da Finish y Eclipse abre el editor automáticamente.' },
        { id: 'fc-8-2', front: '"syso"', back: 'Abreviatura que, con CTRL+espacio y eligiendo "print to standard out", Eclipse expande a System.out.println().' },
        { id: 'fc-8-3', front: 'CTRL+espacio', back: 'El autocompletado de Eclipse. Sirve para abreviaturas, variables, funciones y clases. Recomendado para todo: se escribe menos y se evitan errores de tipeo.' },
        { id: 'fc-8-4', front: 'El "*" al lado del nombre', back: 'Indica que el archivo fue modificado pero aún no fue grabado.' },
        { id: 'fc-8-5', front: 'Atajos para grabar', back: 'CTRL+S graba el archivo; CTRL+Shift+S (Save All) graba todos los abiertos y modificados.' },
        { id: 'fc-8-6', front: 'Navegar el código', back: 'Mantener CTRL y posar el mouse sobre un nombre: se convierte en enlace (azul y subrayado) y permite saltar.' },
        { id: 'fc-8-7', front: 'Open Declaration vs Open Declared Type', back: 'Open Declaration lleva a la línea donde se declaró la variable; Open Declared Type lleva al código de la clase que define su tipo (por ejemplo, Integer).' },
      ],
    },
    {
      id: '9',
      unit: 'eclipse',
      title: 'Exportar e importar proyectos',
      criollo: 'Regla de oro: NO copies y pegues la carpeta del proyecto en un pendrive. Se pierde el modelo y se rompe. Exportá (General > File System o Archive File) e importá (General > Existing projects into workspace). Es lo mismo que hacés cuando entregás un TP.',
      blocks: [
        {
          type: 'h3',
          text: 'Exportar proyectos',
          criollo: 'Botón derecho sobre el proyecto > Export > General > Archive File si querés un zip, o File System si querés una carpeta.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Cuando queramos "mover" nuestro proyecto de una computadora a otra, es importante <strong>"exportar" el proyecto y no simplemente copiar/cortar y pegarlo en un pendrive</strong>. Es importante conservar "el modelo" del proyecto, y para eso se debe exportar.',
        },
        {
          type: 'p',
          text: 'Para exportar el proyecto se hace <strong>botón derecho sobre el nombre del proyecto</strong> y se selecciona <strong>"Export"</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/24-menu-export.png',
          alt: 'Menú contextual sobre el nombre del proyecto en el Package Explorer con la opción Export resaltada.',
          caption: 'Botón derecho sobre el proyecto > Export.',
        },
        {
          type: 'p',
          text: 'A continuación se despliega el diálogo de exportación. Debemos elegir siempre <strong>"General"</strong> y luego:',
        },
        {
          type: 'ul',
          items: [
            '<strong>"File System"</strong>: para exportarlo a una carpeta.',
            '<strong>"Archive File"</strong>: para exportarlo directamente a un archivo comprimido zip.',
          ],
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/25-dialogo-export-general.png',
          alt: 'Diálogo Export de Eclipse con la categoría General expandida mostrando Archive File, File System y otras opciones.',
          caption: 'Diálogo de exportación: siempre la categoría "General", y dentro "File System" o "Archive File".',
        },
        {
          type: 'p',
          text: 'Con el botón <strong>"Next"</strong> vamos al siguiente diálogo. Ahí verificamos que esté <strong>tildado nuestro proyecto</strong> y que estén <strong>tildados los archivos del modelo</strong>, ingresamos un destino y seleccionamos <strong>"Finish"</strong>. Obtendremos un zip con nuestro proyecto: <strong>todo — modelo, código fuente, librerías y todo lo que le hayamos agregado</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/26-export-destino.png',
          alt: 'Diálogo de exportación con el árbol del proyecto tildado, incluidos los archivos del modelo, y el campo de destino del archivo.',
          caption: 'Segundo diálogo: verificar que estén tildados el proyecto y los archivos del modelo, elegir destino y "Finish".',
        },
        {
          type: 'h3',
          text: 'Importar un proyecto',
          criollo: 'Del otro lado: botón derecho en el Package Explorer > Import > General > Existing projects into workspace. Ni se te ocurra descomprimir y copiar la carpeta al workspace.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Cada vez que movemos nuestro proyecto mediante la exportación, debemos cargarlo en el destino mediante una <strong>importación</strong>. <strong>Descomprimir y copiar el contenido dentro de nuestro workspace no funcionará o funcionará de forma incorrecta.</strong>',
        },
        {
          type: 'p',
          text: 'Para ello haremos <strong>botón derecho sobre cualquier parte libre de nuestro Package Explorer</strong> y seleccionaremos <strong>"Import"</strong>. A continuación elegiremos, de la categoría <strong>General</strong>, el ítem <strong>"Existing projects into workspace"</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/27-menu-import.png',
          alt: 'Menú contextual del Package Explorer con la opción Import resaltada.',
          caption: 'Botón derecho en una parte libre del Package Explorer > Import.',
        },
        {
          type: 'p',
          text: 'Se nos presentará el diálogo de importación, donde podemos seleccionar:',
        },
        {
          type: 'ul',
          items: [
            '<strong>"Select root directory"</strong>: si habíamos exportado a una carpeta; elegimos la carpeta.',
            '<strong>"Select archive file"</strong>: si habíamos exportado a un archivo comprimido; apuntamos al zip que contiene la exportación.',
          ],
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/28-dialogo-import-proyecto.png',
          alt: 'Diálogo Import Projects con las opciones "Select root directory" y "Select archive file" y la lista de proyectos detectados.',
          caption: 'Diálogo de importación: al elegir el origen aparece el proyecto en la sección "Projects", señal de que se leyó bien el modelo.',
        },
        {
          type: 'p',
          text: 'Al seleccionar una u otra opción según corresponda, <strong>aparecerá el proyecto en la sección "Projects"</strong>: eso quiere decir que <strong>se leyó correctamente el modelo del proyecto</strong> que exportamos. A continuación daremos <strong>"Finish"</strong> y debería aparecer el proyecto en nuestro Package Explorer.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-9-1', q: 'Para mover un proyecto de una computadora a otra alcanza con copiar la carpeta a un pendrive.', a: false, explain: 'El apunte lo desaconseja explícitamente: hay que exportar para conservar "el modelo" del proyecto.' },
          { id: 'tf-9-2', q: 'En el diálogo de exportación siempre se elige la categoría "General".', a: true, explain: 'Y dentro de ella "File System" (a una carpeta) o "Archive File" (a un zip).' },
          { id: 'tf-9-3', q: 'La exportación incluye el modelo, el código fuente, las librerías y todo lo agregado al proyecto.', a: true, explain: 'Es lo que aclara el apunte sobre el zip resultante.' },
          { id: 'tf-9-4', q: 'Descomprimir el zip exportado y copiarlo dentro del workspace es equivalente a importarlo.', a: false, explain: 'El apunte advierte que no funcionará o funcionará de forma incorrecta: hay que usar la importación.' },
          { id: 'tf-9-5', q: 'Si al importar el proyecto aparece listado en la sección "Projects", significa que se leyó correctamente su modelo.', a: true, explain: 'Es exactamente la señal que describe el apunte antes de dar "Finish".' },
        ],
        mc: [
          {
            id: 'mc-9-1',
            q: '¿Qué opción se elige para exportar el proyecto directamente a un archivo comprimido zip?',
            options: [
              'General > Archive File',
              'General > File System',
              'General > Existing projects into workspace',
              'General > Preferences',
            ],
            correctIndex: 0,
            explain: '"Archive File" exporta a un zip; "File System" exporta a una carpeta. "Existing projects into workspace" es una opción de importación.',
          },
          {
            id: 'mc-9-2',
            q: 'Al importar un proyecto, ¿qué ítem hay que elegir dentro de la categoría General?',
            options: [
              'Existing projects into workspace',
              'Archive File',
              'File System',
              'Projects from Folder or Archive',
            ],
            correctIndex: 0,
            explain: 'El apunte indica elegir "existing projects into workspace" dentro de la categoría General.',
          },
          {
            id: 'mc-9-3',
            q: 'Exporté el proyecto a una carpeta. ¿Qué opción uso al importarlo?',
            options: [
              '"Select root directory" y elijo la carpeta',
              '"Select archive file" y elijo la carpeta',
              'Copio la carpeta al workspace y refresco',
              'File > Open Folder',
            ],
            correctIndex: 0,
            explain: '"Select root directory" es para cuando se exportó a una carpeta; "Select archive file" es para cuando se exportó a un zip.',
          },
        ],
        ms: [
          {
            id: 'ms-9-1',
            q: '¿Qué hay que verificar en el segundo diálogo de exportación antes de dar "Finish"?',
            options: [
              'Que esté tildado nuestro proyecto',
              'Que estén tildados los archivos del modelo del proyecto',
              'Que se haya ingresado un destino',
              'Que la perspectiva activa sea la Java Perspective',
              'Que el proyecto no tenga errores en la vista Problems',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'El apunte pide verificar el proyecto tildado, los archivos del modelo tildados y el destino. La perspectiva activa y los errores de compilación no son condiciones de la exportación.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-9-1', front: '¿Por qué exportar y no copiar/pegar?', back: 'Porque hay que conservar "el modelo" del proyecto. Copiar o cortar la carpeta a un pendrive lo pierde.' },
        { id: 'fc-9-2', front: 'Exportar un proyecto', back: 'Botón derecho sobre el nombre del proyecto > Export > categoría "General" > "File System" (a carpeta) o "Archive File" (a zip).' },
        { id: 'fc-9-3', front: 'Qué incluye la exportación', back: 'Todo: el modelo, el código fuente, las librerías y todo lo que le hayamos agregado al proyecto.' },
        { id: 'fc-9-4', front: 'Importar un proyecto', back: 'Botón derecho en una parte libre del Package Explorer > Import > General > "Existing projects into workspace".' },
        { id: 'fc-9-5', front: 'Select root directory vs Select archive file', back: '"Select root directory" si se exportó a una carpeta; "Select archive file" si se exportó a un zip.' },
        { id: 'fc-9-6', front: 'Señal de que el modelo se leyó bien', back: 'Que el proyecto aparezca en la sección "Projects" del diálogo de importación. Ahí se da "Finish".' },
        { id: 'fc-9-7', front: 'Error típico al mover un proyecto', back: 'Descomprimir el zip y copiar el contenido dentro del workspace: no funcionará o funcionará de forma incorrecta.' },
      ],
    },
    {
      id: '10',
      unit: 'java',
      title: 'Fundamentos y convenciones del código Java',
      criollo: 'Las reglas que Java te obliga a cumplir (mayúsculas importan, llaves para los bloques, punto y coma al final, un main) y las que no te obliga pero más vale que cumplas (nombre del archivo igual al de la clase, PascalCase para clases, camelCase para variables y métodos). Las segundas no rompen la compilación, pero si no las seguís te van a mirar feo.',
      blocks: [
        {
          type: 'h3',
          text: 'Reglas obligatorias',
          criollo: 'Estas no son negociables: si no las cumplís, no compila.',
        },
        {
          type: 'p',
          text: 'Cada programa Java debe observar al menos las siguientes reglas:',
        },
        {
          type: 'ul',
          items: [
            '<strong>Importan las mayúsculas y minúsculas.</strong>',
            'Los <strong>bloques de código se encierran entre <code>{</code> y <code>}</code></strong>.',
            'Un programa Java debe tener al menos un <strong>método principal</strong>, comúnmente llamado <strong>"main"</strong>.',
            'Cada <strong>instrucción en Java termina con un <code>;</code></strong>.',
            'No se pueden utilizar <strong>espacios entre los denominadores</strong>, tampoco <strong>guiones medios</strong> (<code>-</code>), no se pueden utilizar <strong>acentos, eñe ni otros caracteres especiales</strong>. Si bien no se recomienda, sí se pueden usar <strong>guiones bajos</strong> (<code>_</code>).',
            'Los <strong>denominadores no pueden comenzar con un número</strong>.',
            'Los <strong>comentarios</strong> pueden ser de una línea (con <code>//</code>) o multilínea (encerrados entre <code>/*</code> y <code>*/</code>).',
          ],
        },
        {
          type: 'code',
          code: 'public class Prueba {\n    public static void main (String [] args) {\n        .....\n    }\n}',
        },
        {
          type: 'code',
          code: '// esto es un comentario de una línea\n\n/*\n   esto es un comentario\n   de varias líneas\n*/',
        },
        {
          type: 'h3',
          text: 'Reglas muy importantes (aunque no obligatorias)',
          criollo: 'Técnicamente el compilador no te las exige todas, pero el apunte te lo dice claro: respetalas.',
        },
        {
          type: 'p',
          text: 'Cada programa Java no necesariamente debe, pero <strong>es muy importante que respete</strong> las siguientes reglas:',
        },
        {
          type: 'ul',
          items: [
            'El código fuente de cada <strong>unidad de software ("clase")</strong> en Java va escrito en un <strong>archivo de texto plano de igual nombre</strong>, respetando mayúsculas y minúsculas, y tendrá la extensión <code>.java</code>.',
            'Los <strong>nombres de las clases comienzan con mayúsculas</strong>, y cada palabra nueva agrega una mayúscula. A esto se lo conoce como "camelCase" o, más estrictamente, <strong>"PascalCase"</strong>, debido a que fue introducido originalmente en el lenguaje de programación Pascal.',
            'Los <strong>nombres de las variables comienzan con minúsculas</strong>, y cada palabra nueva comienza con una mayúscula: esto se conoce como <strong>"camelCase"</strong>.',
            'Los <strong>nombres de las operaciones</strong>, al igual que las variables, comienzan con minúsculas y cada palabra nueva lleva mayúsculas. Los <strong>argumentos</strong> se nombran de igual manera que las variables.',
          ],
        },
        {
          type: 'code',
          code: 'public class AutoDeportivo {\n    …\n}',
        },
        {
          type: 'code',
          code: 'int estaEsUnaVariable = 3;',
        },
        {
          type: 'table',
          caption: 'Convenciones de nombres',
          headers: ['Elemento', 'Convención', 'Ejemplo'],
          rows: [
            ['Clase', 'PascalCase: empieza con mayúscula y cada palabra nueva agrega una mayúscula', 'AutoDeportivo'],
            ['Archivo de la clase', 'Igual nombre que la clase, respetando mayúsculas, con extensión .java', 'AutoDeportivo.java'],
            ['Variable', 'camelCase: empieza con minúscula y cada palabra nueva lleva mayúscula', 'estaEsUnaVariable'],
            ['Operación (método)', 'camelCase, igual que las variables', 'calcularTotal'],
            ['Argumento', 'Se nombra igual que las variables', 'valorInicial'],
          ],
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Truco para no confundirte: <strong>PascalCase</strong> arranca en mayúscula (clases) y <strong>camelCase</strong> arranca en minúscula (variables, métodos, argumentos). El apunte usa "camelCase" para los dos casos, pero aclara que lo estrictamente correcto para las clases es PascalCase.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-10-1', q: 'En Java las mayúsculas y minúsculas importan.', a: true, explain: 'Es la primera regla obligatoria que enumera el apunte.' },
          { id: 'tf-10-2', q: 'Los denominadores en Java pueden comenzar con un número.', a: false, explain: 'El apunte lo prohíbe expresamente: los denominadores no pueden comenzar con un número.' },
          { id: 'tf-10-3', q: 'Se pueden usar guiones bajos en los denominadores, aunque no se recomienda.', a: true, explain: 'El apunte aclara que, si bien no se recomienda, sí se pueden usar guiones bajos ("_"). Lo que no se puede es usar espacios, guiones medios, acentos, eñe u otros caracteres especiales.' },
          { id: 'tf-10-4', q: 'El archivo que contiene una clase puede llamarse de cualquier manera mientras tenga extensión .java.', a: false, explain: 'El apunte marca como muy importante que el archivo tenga igual nombre que la clase, respetando mayúsculas y minúsculas.' },
          { id: 'tf-10-5', q: 'Los comentarios de una línea se hacen con "//" y los multilínea se encierran entre "/*" y "*/".', a: true, explain: 'Es exactamente lo que indica el apunte.' },
          { id: 'tf-10-6', q: 'Un programa Java puede no tener ningún método principal.', a: false, explain: 'Un programa Java debe tener al menos un método principal, comúnmente llamado "main".' },
        ],
        mc: [
          {
            id: 'mc-10-1',
            q: '¿Cuál es la convención para nombrar clases en Java?',
            options: [
              'Comienzan con mayúscula y cada palabra nueva agrega una mayúscula (PascalCase)',
              'Comienzan con minúscula y cada palabra nueva agrega una mayúscula (camelCase)',
              'Todo en minúsculas separado por guiones bajos',
              'Todo en mayúsculas separado por guiones bajos',
            ],
            correctIndex: 0,
            explain: 'El apunte lo llama camelCase, pero aclara que más estrictamente es PascalCase, nombre que viene del lenguaje Pascal donde se introdujo. Ejemplo: AutoDeportivo.',
          },
          {
            id: 'mc-10-2',
            q: '¿Cuál de estos nombres de variable es válido según las reglas del apunte?',
            options: [
              'estaEsUnaVariable',
              '3variables',
              'mi-variable',
              'variableConÑ',
            ],
            correctIndex: 0,
            explain: 'No se puede empezar con un número, no se pueden usar guiones medios y no se pueden usar eñes ni acentos ni otros caracteres especiales.',
          },
          {
            id: 'mc-10-3',
            q: '¿Cómo se nombran los argumentos de una operación?',
            options: [
              'De igual manera que las variables: camelCase',
              'De igual manera que las clases: PascalCase',
              'Siempre en mayúsculas',
              'Con un guion bajo como prefijo',
            ],
            correctIndex: 0,
            explain: 'El apunte dice que los argumentos se nombran de igual manera que las variables, es decir en camelCase.',
          },
        ],
        ms: [
          {
            id: 'ms-10-1',
            q: '¿Qué caracteres NO se pueden usar en los denominadores de Java, según el apunte?',
            options: [
              'Espacios',
              'Guiones medios (-)',
              'Acentos',
              'La eñe',
              'Guiones bajos (_)',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Los guiones bajos sí se pueden usar, aunque el apunte aclara que no se recomienda. Todo lo demás está prohibido.',
          },
          {
            id: 'ms-10-2',
            q: '¿Cuáles de estas son reglas que "cada programa Java debe observar"?',
            options: [
              'Importan las mayúsculas y minúsculas',
              'Los bloques de código se encierran entre llaves',
              'Debe tener al menos un método principal, comúnmente llamado main',
              'Cada instrucción termina con un ";"',
              'Cada clase debe pertenecer a un package con nombre en camelCase',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Las cuatro primeras son las reglas obligatorias del apunte. La organización en packages se explica aparte y no figura como una regla que todo programa deba observar.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-10-1', front: 'Reglas obligatorias de Java', back: 'Mayúsculas/minúsculas importan; bloques entre { y }; al menos un método main; cada instrucción termina con ";"; sin espacios, guiones medios ni caracteres especiales en los denominadores; no empezar con número.' },
        { id: 'fc-10-2', front: 'Estructura mínima de un programa', back: 'public class Prueba { public static void main (String [] args) { ..... } }' },
        { id: 'fc-10-3', front: 'Comentarios en Java', back: 'De una línea con "//"; multilínea encerrados entre "/*" y "*/".' },
        { id: 'fc-10-4', front: 'Nombre del archivo de una clase', back: 'El código fuente de cada clase va en un archivo de texto plano de igual nombre, respetando mayúsculas y minúsculas, con extensión .java.' },
        { id: 'fc-10-5', front: 'PascalCase', back: 'Convención para clases: empieza con mayúscula y cada palabra nueva agrega una mayúscula (AutoDeportivo). Se llama así porque se introdujo en el lenguaje Pascal.' },
        { id: 'fc-10-6', front: 'camelCase', back: 'Convención para variables, operaciones y argumentos: empieza con minúscula y cada palabra nueva lleva mayúscula (estaEsUnaVariable).' },
        { id: 'fc-10-7', front: '¿Se puede usar guion bajo?', back: 'Sí, se puede, aunque el apunte aclara que no se recomienda. El guion medio, en cambio, está prohibido.' },
      ],
    },
    {
      id: '11',
      unit: 'java',
      title: 'Palabras reservadas, package e import',
      criollo: 'Las palabras reservadas son las 50 palabras que el lenguaje se guarda para sí y no podés usar como nombre de nada. Los packages son literalmente carpetas del disco donde organizás tus clases, y el import es para usar una clase que vive en otro paquete.',
      blocks: [
        {
          type: 'h3',
          text: 'Palabras reservadas',
          criollo: 'No las memorices de una: la mayoría las vas a ir viendo durante la cursada. Lo importante es saber que existen y que no podés usarlas como nombre.',
        },
        {
          type: 'p',
          text: 'La siguiente es la <strong>lista completa de las palabras reservadas en Java</strong>, la mayoría de las cuales estarán cubiertas en la materia. Corresponden a tipos de variables, instrucciones, etc.:',
        },
        {
          type: 'table',
          caption: 'Palabras reservadas de Java (lista completa del apunte, agrupada por letra inicial)',
          headers: ['Letra', 'Palabras reservadas'],
          rows: [
            ['A', 'abstract · assert'],
            ['B', 'boolean · break · byte'],
            ['C', 'case · catch · char · class · const · continue'],
            ['D', 'default · do · double'],
            ['E', 'else · enum · extends'],
            ['F', 'final · finally · float · for'],
            ['G', 'goto'],
            ['I', 'if · implements · import · instanceof · int · interface'],
            ['L', 'long'],
            ['N', 'native · new'],
            ['P', 'package · private · protected · public'],
            ['R', 'return'],
            ['S', 'short · static · strictfp · super · switch · synchronized'],
            ['T', 'this · throw · throws · transient · try'],
            ['V', 'void · volatile'],
            ['W', 'while'],
          ],
        },
        {
          type: 'h3',
          text: 'Package',
          criollo: 'Suena sofisticado pero es una carpeta. Nada más.',
        },
        {
          type: 'p',
          text: 'Las clases en Java pueden <strong>organizarse en carpetas o directorios</strong> dentro del programa. Sabiendo que los archivos de código fuente son archivos de texto plano, <strong>los paquetes son solo directorios en el disco</strong> que contienen esos archivos.',
        },
        {
          type: 'h3',
          text: 'Import',
          criollo: 'Si la clase que querés usar vive en otro paquete, la importás poniendo su nombre completo: paquete.subpaquete.Clase.',
        },
        {
          type: 'p',
          text: 'Cuando en la clase se usa un paquete y usamos clases que provienen de otros paquetes, debemos <strong>"importar" esas clases</strong> mediante la sentencia <code>import</code> seguida del nombre de la clase, <strong>incluyendo el paquete al que pertenece</strong>. Los nombres de los paquetes utilizan <strong>camelCase</strong>.',
        },
        {
          type: 'code',
          code: 'import paquete1.otroPaquete.ClaseA;\npublic class ClaseB {\n    ClaseA.operacion1();\n}',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-11-1', q: 'Los paquetes en Java son solo directorios en el disco que contienen los archivos de código fuente.', a: true, explain: 'El apunte lo aclara: como los archivos de código son texto plano, los paquetes son solo directorios que los contienen.' },
          { id: 'tf-11-2', q: 'Los nombres de los paquetes utilizan camelCase.', a: true, explain: 'Es lo que indica el apunte en la sección de import.' },
          { id: 'tf-11-3', q: 'La sentencia import solo lleva el nombre de la clase, sin el paquete al que pertenece.', a: false, explain: 'Debe llevar el nombre de la clase incluyendo el paquete: import paquete1.otroPaquete.ClaseA;' },
          { id: 'tf-11-4', q: '"goto" y "const" figuran en la lista de palabras reservadas de Java del apunte.', a: true, explain: 'Ambas aparecen en la lista completa de palabras reservadas.' },
          { id: 'tf-11-5', q: '"String" es una de las palabras reservadas de Java según la lista del apunte.', a: false, explain: 'String no está en la lista: es una clase (un tipo de dato referencia), no una palabra reservada del lenguaje.' },
        ],
        mc: [
          {
            id: 'mc-11-1',
            q: '¿A qué corresponden las palabras reservadas de Java según el apunte?',
            options: [
              'A tipos de variables, instrucciones, etc.',
              'Únicamente a los tipos de datos primitivos',
              'A las clases del paquete java.lang',
              'A los nombres de los operadores del lenguaje',
            ],
            correctIndex: 0,
            explain: 'El apunte introduce la lista diciendo que corresponden a tipos de variables, instrucciones, etc.',
          },
          {
            id: 'mc-11-2',
            q: '¿Cuál de estas NO es una palabra reservada según la lista del apunte?',
            options: [
              'Integer',
              'instanceof',
              'synchronized',
              'strictfp',
            ],
            correctIndex: 0,
            explain: 'Integer es una clase (el tipo referencia correspondiente a int), no una palabra reservada. Las otras tres sí figuran en la lista.',
          },
          {
            id: 'mc-11-3',
            q: '¿Cómo se escribe correctamente un import de la clase ClaseA que vive en paquete1.otroPaquete?',
            options: [
              'import paquete1.otroPaquete.ClaseA;',
              'import ClaseA;',
              'package paquete1.otroPaquete.ClaseA;',
              'import paquete1/otroPaquete/ClaseA;',
            ],
            correctIndex: 0,
            explain: 'Es el ejemplo textual del apunte: la sentencia import seguida del nombre de la clase incluyendo su paquete, separado por puntos y terminado en ";".',
          },
        ],
        ms: [
          {
            id: 'ms-11-1',
            q: '¿Cuáles de estas son palabras reservadas de Java según la lista completa del apunte?',
            options: [
              'abstract',
              'transient',
              'volatile',
              'native',
              'null',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'null no figura en la lista de palabras reservadas que da el apunte, aunque sí aparece más adelante como el valor por defecto de los tipos referencia. Las otras cuatro sí están en la lista.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-11-1', front: 'Palabras reservadas', back: 'Lista cerrada de palabras que el lenguaje se reserva; corresponden a tipos de variables, instrucciones, etc. Ejemplos: abstract, assert, synchronized, strictfp, transient, volatile.' },
        { id: 'fc-11-2', front: 'Package', back: 'Forma de organizar las clases en carpetas o directorios. Como el código fuente es texto plano, los paquetes son solo directorios en el disco que contienen esos archivos.' },
        { id: 'fc-11-3', front: 'Import', back: 'Sentencia para usar clases que provienen de otros paquetes: import seguido del nombre de la clase incluyendo el paquete. Ej: import paquete1.otroPaquete.ClaseA;' },
        { id: 'fc-11-4', front: 'Convención de nombres de paquetes', back: 'Los nombres de los paquetes utilizan camelCase.' },
      ],
    },
    {
      id: '12',
      unit: 'java',
      title: 'Tipos de datos: escalares y referencia',
      criollo: 'Java es fuertemente tipado: toda variable lleva su tipo, sí o sí. Hay dos familias: los escalares (int, double, boolean...), que son valores puros y siempre arrancan con un valor por defecto, y los de referencia (Integer, String, Auto...), que son objetos y arrancan en null. Cada escalar tiene su gemelo objeto.',
      blocks: [
        {
          type: 'h3',
          text: 'Dos grandes grupos',
          criollo: 'Primitivos (o escalares) y referencia (u objeto). El apunte prefiere decirles "escalares" para marcar más la diferencia.',
        },
        {
          type: 'p',
          text: '<strong>Java es un lenguaje fuertemente tipado</strong>: cada variable debe llevar obligatoriamente el tipo correspondiente. Sin embargo, puede haber <strong>tipos paramétricos</strong>, que ayudan a flexibilizar el contenido de las variables.',
        },
        {
          type: 'p',
          text: 'Los tipos de datos en Java se pueden dividir en dos grandes grupos: los llamados <strong>"primitivos"</strong> y los tipos de datos <strong>"Referencia"</strong>. El típico dato primitivo es el tipo de número entero: <code>int</code>. Sin embargo, el tipo de dato entero primitivo también tiene un correlato en un tipo de dato Referencia (también llamado <strong>"Objeto"</strong>) denominado <code>Integer</code> — notar el uso de mayúsculas, dado que <code>Integer</code> es una clase. <strong>Esto ocurre con todos los tipos de datos primitivos.</strong>',
        },
        {
          type: 'table',
          caption: 'Cada primitivo y su correlato de referencia',
          headers: ['Tipo primitivo', 'Tipo referencia'],
          rows: [
            ['int', 'Integer'],
            ['long', 'Long'],
            ['char', 'Character'],
            ['byte', 'Byte'],
            ['short', 'Short'],
            ['float', 'Float'],
            ['double', 'Double'],
            ['boolean', 'Boolean'],
          ],
        },
        {
          type: 'p',
          text: 'Es por esto que preferiremos, para la materia, el nombre <strong>"escalares"</strong> a los denominados "primitivos", para hacer una diferencia más marcada. Esto es porque para definir una variable de tipo <code>int</code> alcanza con una asignación directa, mientras que para usar una variable de tipo <code>Integer</code> necesito <strong>crear un objeto nuevo</strong>, y ya no es tan sencillo:',
        },
        {
          type: 'code',
          code: 'int x = 3;\n\nInteger x = new Integer(3);',
        },
        {
          type: 'p',
          text: 'El uso de uno o de otro dependerá del caso y se deberá evaluar de acuerdo con el problema a resolver. Es importante notar que, <strong>mientras los valores escalares tienen siempre un valor por defecto, los otros no</strong>:',
        },
        {
          type: 'code',
          code: 'int x;      // el valor de x es "0"\nInteger y;  // y no tiene valor, es "nulo" (null)',
        },
        {
          type: 'h3',
          text: 'Tipos de datos primitivos o escalares',
          criollo: 'Ocho tipos. Fijate en los bits, el signo y el valor por defecto — y sobre todo en los sufijos: long lleva "l", float lleva "f", double lleva "d".',
        },
        {
          type: 'p',
          text: 'A continuación enumeramos los tipos de valores "escalares", también llamados a veces <strong>"literales"</strong>, dado que necesitan de algún carácter extra para definir el tipo (<code>char</code>, <code>long</code>, <code>float</code>, <code>double</code>).',
        },
        {
          type: 'table',
          caption: 'Los ocho tipos escalares',
          headers: ['Tipo', 'Qué es', 'Bits', 'Signo', 'Valor por defecto'],
          rows: [
            ['byte', 'Número entero', '8', 'Con signo', '0'],
            ['short', 'Número entero', '16', 'Con signo', '0'],
            ['int', 'Número entero', '32', 'Con signo', '0'],
            ['long', 'Número entero', '64', 'Con signo', '0l'],
            ['float', 'Número de punto flotante', '32', 'Con signo', '0.0f'],
            ['double', 'Número de punto flotante', '64', 'Con signo', '0.0d'],
            ['boolean', 'Verdadero o falso (true / false)', '1', '—', 'false'],
            ['char', 'Valor entero (carácter)', '16', 'Sin signo', '—'],
          ],
        },
        {
          type: 'ul',
          items: [
            '<code>int</code>: cuando se define un valor entero de una variable, <strong>este se asume como int</strong>.',
            '<code>long</code>: al definirlo debe usarse la letra <strong>"l"</strong> para indicar al compilador que no se trata de un int.',
            '<code>float</code>: al definirlo debe usarse la letra <strong>"f"</strong> para indicar al compilador que el valor no debe ser interpretado como un double. Ocurre algo similar que con el int y el long: de acuerdo con el valor debe agregarse la "f".',
            '<code>double</code>: ocurre algo similar que con el int y el long, y de acuerdo con el valor debe agregarse la <strong>"d"</strong>.',
            '<code>boolean</code>: es un valor de un bit, verdadero o falso. Toma valores <code>true</code> o <code>false</code>.',
            '<code>char</code>: es un valor entero de 16 bits, sin signo. Va desde el 0 (carácter <code>\\u0000</code>) al 65535 inclusive (carácter <code>\\uffff</code>). Puede declararse directamente con <strong>comillas simples</strong>.',
          ],
        },
        {
          type: 'code',
          code: 'long f = 33344546456;   // NO es válido: un valor entero se asume como "int",\n                        // pero este número es más grande que lo que puede\n                        // almacenar un int\n\nlong g = 33344546456l;  // al agregar la "l" indico al compilador que ese\n                        // número debe ser interpretado como un long\n\nchar x = \'p\';           // char declarado con comillas simples',
        },
        {
          type: 'table',
          caption: 'Caracteres de control del tipo char',
          headers: ['Secuencia', 'Significado'],
          rows: [
            ['\\n', 'Nueva línea (0x0a)'],
            ['\\r', 'Retorno de carro (0x0d)'],
            ['\\f', 'Alimentación (0x0c)'],
            ['\\b', 'Backspace (0x08)'],
            ['\\s', 'Espacio (0x20)'],
            ['\\t', 'Tab'],
            ['\\', 'Escape'],
            ['\\ddd', 'Carácter octal con valor (ddd)'],
            ['\\uxxxx', 'Carácter hexadecimal con valor (xxxx)'],
          ],
        },
        {
          type: 'h3',
          text: 'Tipos de datos "referencia" u "objeto"',
          criollo: 'Los que salen de una clase. Se crean con un constructor (new) y si no les asignás nada valen null.',
        },
        {
          type: 'p',
          text: 'Son los <strong>obtenidos a partir de las clases</strong>. Cada variable de tipo "referencia" contendrá un objeto con el valor, obtenido mediante un <strong>constructor</strong>. Un <strong>arreglo (array)</strong> en Java es un tipo de dato en sí mismo y, dado que es un objeto, se lo puede considerar un tipo de dato "referencia". <strong>El valor por defecto es siempre <code>null</code></strong>, es decir, "nada".',
        },
        {
          type: 'p',
          text: 'Si bien hay un correlato para cada tipo primitivo, <strong>cualquier variable cuyo tipo sea un objeto es una variable de tipo "referencia"</strong>. Por ejemplo:',
        },
        {
          type: 'code',
          code: 'Integer i = new Integer(24);\nAuto a = new Auto();',
        },
        {
          type: 'h3',
          text: 'El tipo String',
          criollo: 'String es una clase como cualquier otra, pero tan usada que el lenguaje te regala un atajo: comillas dobles y listo, sin new.',
        },
        {
          type: 'p',
          text: 'El tipo referencia <code>String</code> es como cualquier otro tipo de referencia —notar que su nombre comienza con mayúscula, porque <strong>String es una clase</strong>—, pero es <strong>uno de los más utilizados</strong> para incluir cadenas de texto en el código. Los String se definen, <strong>a diferencia de los char, con comillas dobles</strong>.',
        },
        {
          type: 'code',
          code: 'String s = "esto es un texto";',
        },
        {
          type: 'p',
          text: 'Si bien <code>s</code> es una variable de tipo referencia String y almacena un objeto de tipo String, <strong>no usamos un constructor</strong> (como sí hicimos con Integer). Esto se debe a que el lenguaje incluye un <strong>"atajo"</strong> para crear nuevos objetos String de forma más sencilla. De otra manera deberíamos crear cadenas de texto a partir de secuencias de caracteres individuales (de hecho, es posible crear Strings de esta manera), pero sería muy tedioso.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: '<strong>Comillas simples para <code>char</code>, comillas dobles para <code>String</code>.</strong> Es de las confusiones más comunes al arrancar.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-12-1', q: 'Java es un lenguaje fuertemente tipado: cada variable debe llevar obligatoriamente su tipo.', a: true, explain: 'Es la primera afirmación de la sección de tipos de datos. Existen además tipos paramétricos que flexibilizan el contenido.' },
          { id: 'tf-12-2', q: 'Una variable int sin asignar vale null.', a: false, explain: 'Los escalares tienen siempre valor por defecto: int x; vale 0. El que vale null es el tipo referencia: Integer y; no tiene valor.' },
          { id: 'tf-12-3', q: 'El valor por defecto de todos los tipos referencia es null.', a: true, explain: 'El apunte lo dice textualmente: el valor por defecto es siempre null, es decir "nada".' },
          { id: 'tf-12-4', q: 'Un arreglo (array) en Java se considera un tipo de dato referencia.', a: true, explain: 'Es un tipo de dato en sí mismo y, dado que es un objeto, se lo considera de tipo referencia.' },
          { id: 'tf-12-5', q: 'Los char se declaran con comillas dobles y los String con comillas simples.', a: false, explain: 'Es al revés: char con comillas simples (char x = \'p\';) y String con comillas dobles (String s = "texto";).' },
          { id: 'tf-12-6', q: 'Para crear un String hace falta usar un constructor con new, igual que con Integer.', a: false, explain: 'El lenguaje incluye un "atajo" para crear objetos String de forma más sencilla, sin constructor, aunque también es posible crearlos a partir de secuencias de caracteres.' },
        ],
        mc: [
          {
            id: 'mc-12-1',
            q: '¿Por qué el apunte prefiere el nombre "escalares" en vez de "primitivos"?',
            options: [
              'Para marcar más la diferencia con los tipos referencia, que necesitan crear un objeto nuevo',
              'Porque "primitivo" es un término en desuso en Java',
              'Porque los escalares no ocupan memoria',
              'Porque los escalares no tienen correlato de tipo referencia',
            ],
            correctIndex: 0,
            explain: 'El apunte lo explica: para definir un int alcanza con "int x = 3;", mientras que para un Integer hay que crear un objeto nuevo, y eso ya no es tan sencillo.',
          },
          {
            id: 'mc-12-2',
            q: '¿Por qué "long f = 33344546456;" no es válido?',
            options: [
              'Porque un valor entero se asume como int, y ese número es más grande de lo que puede almacenar un int',
              'Porque los long no admiten valores negativos',
              'Porque falta declarar el tipo de la variable',
              'Porque los long deben crearse con un constructor',
            ],
            correctIndex: 0,
            explain: 'Hay que agregar la letra "l" al final (33344546456l) para indicarle al compilador que debe interpretarse como long.',
          },
          {
            id: 'mc-12-3',
            q: '¿Cuál es el rango del tipo char?',
            options: [
              'De 0 (\\u0000) a 65535 inclusive (\\uffff), 16 bits sin signo',
              'De -32768 a 32767, 16 bits con signo',
              'De 0 a 255, 8 bits sin signo',
              'De 0 a 65535, 32 bits sin signo',
            ],
            correctIndex: 0,
            explain: 'char es un valor entero de 16 bits sin signo que va del carácter \\u0000 al \\uffff.',
          },
          {
            id: 'mc-12-4',
            q: '¿Cuál es el valor por defecto del tipo double?',
            options: [
              '0.0d',
              '0.0f',
              '0l',
              'null',
            ],
            correctIndex: 0,
            explain: 'double tiene por defecto 0.0d; float tiene 0.0f y long tiene 0l. null es el valor por defecto de los tipos referencia.',
          },
        ],
        ms: [
          {
            id: 'ms-12-1',
            q: '¿Cuáles de estos pares primitivo → referencia son correctos según el apunte?',
            options: [
              'int → Integer',
              'char → Character',
              'boolean → Boolean',
              'long → Long',
              'String → Str',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'String no es un tipo primitivo: es directamente una clase, un tipo referencia. Los otros cuatro pares figuran en la tabla del apunte.',
          },
          {
            id: 'ms-12-2',
            q: '¿Qué tipos escalares son números enteros según el apunte?',
            options: [
              'byte',
              'short',
              'int',
              'long',
              'float',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'float es un número de punto flotante de 32 bits, no un entero. byte (8), short (16), int (32) y long (64) sí son enteros con signo.',
          },
          {
            id: 'ms-12-3',
            q: '¿Cuáles de estas secuencias son caracteres de control válidos del tipo char?',
            options: [
              '\\n (nueva línea)',
              '\\t (tab)',
              '\\b (backspace)',
              '\\uxxxx (carácter hexadecimal)',
              '\\q (comilla)',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: '\\q no existe en la tabla del apunte. Las otras cuatro sí figuran, junto con \\r, \\f, \\s, \\ (escape) y \\ddd (octal).',
          },
        ],
      },
      flashcards: [
        { id: 'fc-12-1', front: 'Java fuertemente tipado', back: 'Cada variable debe llevar obligatoriamente el tipo correspondiente. Existen además tipos paramétricos que flexibilizan el contenido de las variables.' },
        { id: 'fc-12-2', front: 'Los dos grupos de tipos', back: '"Primitivos" (que el apunte prefiere llamar escalares) y "Referencia" (también llamados objeto). Cada primitivo tiene su correlato referencia: int/Integer, char/Character, etc.' },
        { id: 'fc-12-3', front: 'Diferencia clave escalar vs referencia', back: 'El escalar se asigna directo (int x = 3;) y tiene siempre valor por defecto (0). El referencia necesita un constructor (Integer x = new Integer(3);) y por defecto vale null.' },
        { id: 'fc-12-4', front: 'Los 8 tipos escalares', back: 'byte (8 bits), short (16), int (32), long (64), float (32 flotante), double (64 flotante), boolean (1 bit) y char (16 bits sin signo).' },
        { id: 'fc-12-5', front: 'Sufijos de los literales', back: 'long lleva "l" (33344546456l), float lleva "f" y double lleva "d". Sin sufijo, un valor entero se asume como int.' },
        { id: 'fc-12-6', front: 'Rango de char', back: 'Valor entero de 16 bits sin signo, del 0 (\\u0000) al 65535 inclusive (\\uffff). Se declara con comillas simples: char x = \'p\';' },
        { id: 'fc-12-7', front: 'Tipos referencia', back: 'Los obtenidos a partir de las clases. Contienen un objeto obtenido mediante un constructor. Su valor por defecto es siempre null. Los arrays también son tipo referencia.' },
        { id: 'fc-12-8', front: 'String', back: 'Tipo referencia (es una clase, por eso va con mayúscula), de los más usados. Se define con comillas dobles y sin constructor, gracias a un "atajo" del lenguaje.' },
        { id: 'fc-12-9', front: 'Caracteres de control de char', back: '\\n nueva línea, \\r retorno de carro, \\f alimentación, \\b backspace, \\s espacio, \\t tab, \\ escape, \\ddd octal, \\uxxxx hexadecimal.' },
      ],
    },
    {
      id: '13',
      unit: 'java',
      title: 'Operadores',
      criollo: 'Aritméticos, relacionales, lógicos, de bit y de asignación. Dos cositas para no olvidarte: el "+" también sirve para pegar cadenas de texto, y en Java NO podés sobrecargar operadores (a diferencia de otros lenguajes).',
      blocks: [
        {
          type: 'p',
          text: 'El lenguaje Java provee varios operadores aritméticos, lógicos, de asignación, etc. <strong>En Java no es posible la sobrecarga de operadores.</strong>',
        },
        {
          type: 'h3',
          text: 'Operadores aritméticos',
          criollo: 'Los de siempre. El detalle es que el "+" con Strings concatena.',
        },
        {
          type: 'p',
          text: 'Entre los aritméticos están los típicos de suma (<code>+</code>), resta (<code>-</code>), multiplicación (<code>*</code>), división (<code>/</code>), módulo (<code>%</code>), incremento (<code>++</code>) y decremento (<code>--</code>).',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Cabe aclarar que <strong>con el operador <code>+</code> también podemos concatenar</strong> (unir) una cadena de caracteres con otra.',
        },
        {
          type: 'h3',
          text: 'Operadores relacionales o de comparación',
          criollo: 'Ojo con el clásico: "=" asigna, "==" compara. Confundirlos es el error número uno de todo principiante.',
        },
        {
          type: 'ul',
          items: [
            '<code>a == b</code>: verifica si <code>a</code> y <code>b</code> tienen igual valor.',
            '<code>a != b</code>: verifica si <code>a</code> y <code>b</code> tienen distinto valor.',
            '<code>a &gt; b</code>, <code>a &lt; b</code>: verifica si el valor de <code>a</code> es mayor / menor que el de <code>b</code>.',
            '<code>a &gt;= b</code>, <code>a &lt;= b</code>: verifica si el valor de <code>a</code> es mayor o igual / menor o igual que el de <code>b</code>.',
          ],
        },
        {
          type: 'h3',
          text: 'Operadores lógicos',
          criollo: 'AND, OR y la negación. Comparan condiciones y devuelven booleanos.',
        },
        {
          type: 'p',
          text: 'Los operadores lógicos comparan condiciones y resultan en <strong>valores booleanos</strong>:',
        },
        {
          type: 'ul',
          items: [
            '<code>&amp;&amp;</code>: es el comparador lógico <strong>AND</strong>.',
            '<code>||</code>: es el comparador lógico <strong>OR</strong>.',
            '<code>!</code>: sirve para <strong>negar</strong> una condición.',
          ],
        },
        {
          type: 'h3',
          text: 'Operadores de bit',
          criollo: 'Los mismos símbolos pero solitos (& en vez de &&) trabajan a nivel de bits. No confundir con los lógicos.',
        },
        {
          type: 'p',
          text: 'Los operadores de bit, como su nombre lo dice, hacen operaciones a nivel de bits:',
        },
        {
          type: 'table',
          caption: 'Operadores de bit',
          headers: ['Operador', 'Qué hace'],
          rows: [
            ['&amp;', 'AND bit a bit'],
            ['|', 'OR bit a bit'],
            ['^', 'XOR bit a bit'],
            ['~', 'Operador unario para invertir bits'],
            ['&lt;&lt;', 'Shift de bits a izquierda'],
            ['&gt;&gt;', 'Shift de bits a derecha'],
            ['&gt;&gt;&gt;', 'Shift a derecha, llenado de ceros'],
          ],
        },
        {
          type: 'h3',
          text: 'Operadores de asignación',
          criollo: 'El "=" de toda la vida, más los combinados que te ahorran escribir dos veces la variable.',
        },
        {
          type: 'p',
          text: 'El operador de asignación en Java es el <code>=</code>. A su vez, hay otros que <strong>combinan operaciones junto con la asignación</strong>:',
        },
        {
          type: 'table',
          caption: 'Operadores de asignación combinada',
          headers: ['Operador', 'Qué hace', 'Equivale a'],
          rows: [
            ['+=', 'Suma y asigna', 'a += 3 es igual que hacer a = a + 3;'],
            ['-=', 'Resta y asigna', 'a -= 3 es igual que a = a - 3;'],
            ['*=', 'Multiplica y asigna', 'a *= 3 es igual que a = a * 3;'],
            ['/=', 'Divide y asigna', 'a /= 3 es igual que a = a / 3;'],
            ['%=', 'Calcula el módulo y asigna', 'a %= 3 es igual que a = a % 3;'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-13-1', q: 'En Java es posible la sobrecarga de operadores.', a: false, explain: 'El apunte lo aclara expresamente: en Java no es posible la sobrecarga de operadores.' },
          { id: 'tf-13-2', q: 'El operador "+" también permite concatenar una cadena de caracteres con otra.', a: true, explain: 'El apunte lo destaca dentro de los operadores aritméticos.' },
          { id: 'tf-13-3', q: '"&&" es el operador AND a nivel de bits.', a: false, explain: '"&&" es el comparador lógico AND. El AND bit a bit es "&" (uno solo).' },
          { id: 'tf-13-4', q: '"a %= 3" es equivalente a "a = a % 3".', a: true, explain: 'Es la lógica de todos los operadores de asignación combinada: operan y asignan.' },
          { id: 'tf-13-5', q: 'El operador ">>>" hace un shift a derecha con llenado de ceros.', a: true, explain: 'Es la descripción textual del apunte para ese operador de bit.' },
        ],
        mc: [
          {
            id: 'mc-13-1',
            q: '¿Cuál es el operador de módulo en Java?',
            options: [
              '%',
              '/',
              '~',
              '^',
            ],
            correctIndex: 0,
            explain: '% es el módulo. / es la división, ~ invierte bits y ^ es el XOR bit a bit.',
          },
          {
            id: 'mc-13-2',
            q: '¿Qué operador sirve para negar una condición?',
            options: [
              '!',
              '!=',
              '~',
              '||',
            ],
            correctIndex: 0,
            explain: '! niega una condición. != compara valores distintos, ~ invierte bits y || es el OR lógico.',
          },
          {
            id: 'mc-13-3',
            q: '¿Qué hace el operador "^"?',
            options: [
              'XOR bit a bit',
              'Potenciación',
              'OR lógico',
              'Shift a izquierda',
            ],
            correctIndex: 0,
            explain: 'En la lista de operadores de bit del apunte, "^" es el XOR bit a bit. El apunte no menciona ningún operador de potenciación.',
          },
          {
            id: 'mc-13-4',
            q: '¿En qué resultan los operadores lógicos?',
            options: [
              'En valores booleanos',
              'En valores enteros',
              'En cadenas de texto',
              'En valores nulos',
            ],
            correctIndex: 0,
            explain: 'El apunte dice que los operadores lógicos comparan condiciones y resultan en valores booleanos.',
          },
        ],
        ms: [
          {
            id: 'ms-13-1',
            q: '¿Cuáles de estos son operadores aritméticos según el apunte?',
            options: [
              'Suma (+)',
              'Módulo (%)',
              'Incremento (++)',
              'Decremento (--)',
              'XOR (^)',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: '^ es un operador de bit (XOR), no aritmético. Los aritméticos son +, -, *, /, %, ++ y --.',
          },
          {
            id: 'ms-13-2',
            q: '¿Cuáles de estos son operadores de bit?',
            options: [
              '&',
              '^',
              '~',
              '>>>',
              '&&',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: '&& es el comparador lógico AND, no un operador de bit. Los de bit son &, |, ^, ~, <<, >> y >>>.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-13-1', front: 'Sobrecarga de operadores en Java', back: 'No es posible. El apunte lo aclara al presentar los operadores.' },
        { id: 'fc-13-2', front: 'Operadores aritméticos', back: 'Suma (+), resta (-), multiplicación (*), división (/), módulo (%), incremento (++) y decremento (--). El + también concatena cadenas.' },
        { id: 'fc-13-3', front: 'Operadores relacionales', back: '== (igual valor), != (distinto valor), > y < (mayor / menor), >= y <= (mayor o igual / menor o igual).' },
        { id: 'fc-13-4', front: 'Operadores lógicos', back: '&& (AND), || (OR) y ! (negación). Comparan condiciones y resultan en valores booleanos.' },
        { id: 'fc-13-5', front: 'Operadores de bit', back: '& (AND), | (OR), ^ (XOR), ~ (invertir bits, unario), << y >> (shift izquierda/derecha), >>> (shift derecha con llenado de ceros).' },
        { id: 'fc-13-6', front: 'Asignación combinada', back: '+=, -=, *=, /= y %=. Operan y asignan: a += 3 equivale a a = a + 3.' },
      ],
    },
    {
      id: '14',
      unit: 'java',
      title: 'Estructuras de control',
      criollo: 'Tres formas de repetir (while, for, do...while) y dos de controlar esa repetición (continue y break). Después los condicionales: if/else, switch y el ternario. La diferencia clave entre while y do...while: el do...while ejecuta al menos una vez porque evalúa la condición al final.',
      blocks: [
        {
          type: 'h3',
          text: 'Control de flujo: bucles',
          criollo: 'while pregunta primero, do...while pregunta después (entonces siempre ejecuta al menos una vuelta), y el for maneja solo el contador.',
        },
        {
          type: 'p',
          text: 'Hay <strong>tres maneras de repetir una tarea</strong> y <strong>dos maneras adicionales de controlar esa repetición</strong>.',
        },
        {
          type: 'p',
          text: '<strong>while</strong>: repite las instrucciones mientras que se cumpla la condición. Aquí se <strong>evalúa la condición antes</strong> de ejecutar las operaciones.',
        },
        {
          type: 'code',
          code: 'while(condición) {\n    //instrucciones a repetir\n}',
        },
        {
          type: 'p',
          text: '<strong>for</strong>: repite instrucciones mientras que se cumpla la condición y <strong>administra variables para el control del bucle</strong>.',
        },
        {
          type: 'code',
          code: 'for(condInicial; condParaBucle; accionLuegoDelBucle) {\n   //instrucciones a repetir\n}\n\nfor(int x = 0; x<10; x++) {\n    //instrucción que se repetirá 10 veces\n}',
        },
        {
          type: 'p',
          text: '<strong>do...while</strong>: es similar al while, pero la <strong>evaluación de la condición se da luego de ejecutar las operaciones</strong>.',
        },
        {
          type: 'code',
          code: 'do {\n    //instrucciones a repetir\n} while (condición);',
        },
        {
          type: 'p',
          text: 'Las dos maneras adicionales de controlar la repetición son:',
        },
        {
          type: 'ul',
          items: [
            '<strong>continue</strong>: permite "saltear" la iteración y seguir con el siguiente paso del bucle.',
            '<strong>break</strong>: permite "romper" el bucle.',
          ],
        },
        {
          type: 'table',
          caption: 'Los tres bucles frente a frente',
          headers: ['Bucle', 'Cuándo evalúa la condición', 'Particularidad'],
          rows: [
            ['while', 'Antes de ejecutar las operaciones', 'Puede no ejecutarse nunca si la condición es falsa desde el arranque'],
            ['for', 'Antes de cada repetición', 'Administra variables para el control del bucle (inicial, condición, acción posterior)'],
            ['do...while', 'Después de ejecutar las operaciones', 'Las instrucciones se ejecutan al menos una vez'],
          ],
        },
        {
          type: 'h3',
          text: 'Control de flujo: condicionales',
          criollo: 'if/else para una condición, switch cuando tenés que comparar la misma expresión contra un montón de valores, y el ternario para resolver un if/else corto en una línea.',
        },
        {
          type: 'p',
          text: '<strong>if</strong>: similar al de otros lenguajes, el <code>if</code> toma una condición y ejecuta el código indicado si se cumple. Si se desea ejecutar otra porción de código si no se cumple la condición, se utiliza la sentencia <strong>else</strong>.',
        },
        {
          type: 'code',
          code: 'if(condición) {\n    //código a ejecutar si condición es verdadera\n} else {\n    //código a ejecutar si condición es falsa\n}',
        },
        {
          type: 'p',
          text: '<strong>switch</strong>: para evaluar una expresión por múltiples y diferentes valores, en vez de usar una sucesión de <code>if...else...</code> podemos usar <code>switch</code>. La estructura es la siguiente:',
        },
        {
          type: 'code',
          code: 'switch(expresion) {\n   case expresión_vale_x:\n       //instrucciones a ejecutar si la expresión vale X\n   case expresión_vale_y:\n       //instrucciones a ejecutar si la expresión vale Y\n   …\n   default:\n       // a ejecutar si la expr no vale ni X, ni Y, ni….\n}',
        },
        {
          type: 'p',
          text: '<strong>Operador if ternario</strong>: sustituye una estructura <code>if...else</code> pero se puede escribir en una sola línea.',
        },
        {
          type: 'code',
          code: 'condición ? salidaPorVerdadero : salidaPorFalso\n\nx % 2 == 0 ? "numero par" : "numero impar";',
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'El ejemplo del ternario es el clásico par/impar: si el resto de dividir por 2 da cero, es par. Y fijate que es exactamente el mismo if/else de arriba, pero apretado en un renglón.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-14-1', q: 'El do...while evalúa la condición luego de ejecutar las operaciones.', a: true, explain: 'Es la diferencia con el while, que la evalúa antes. Por eso el do...while ejecuta las instrucciones al menos una vez.' },
          { id: 'tf-14-2', q: '"continue" rompe el bucle y sale de él.', a: false, explain: '"continue" saltea la iteración y sigue con el siguiente paso del bucle. El que rompe el bucle es "break".' },
          { id: 'tf-14-3', q: 'El for administra variables para el control del bucle.', a: true, explain: 'Su estructura es for(condInicial; condParaBucle; accionLuegoDelBucle), que justamente administra esas variables.' },
          { id: 'tf-14-4', q: 'El operador ternario sustituye una estructura if...else y se puede escribir en una sola línea.', a: true, explain: 'Es la definición del apunte: condición ? salidaPorVerdadero : salidaPorFalso.' },
          { id: 'tf-14-5', q: 'El switch sirve para evaluar una expresión por múltiples y diferentes valores.', a: true, explain: 'El apunte lo presenta como alternativa a una sucesión de if...else cuando hay que comparar la misma expresión contra varios valores.' },
        ],
        mc: [
          {
            id: 'mc-14-1',
            q: '¿Cuántas maneras de repetir una tarea menciona el apunte, y cuántas de controlar esa repetición?',
            options: [
              'Tres de repetir (while, for, do...while) y dos de controlar (continue, break)',
              'Dos de repetir (while, for) y tres de controlar (continue, break, return)',
              'Tres de repetir y tres de controlar',
              'Cuatro de repetir y dos de controlar',
            ],
            correctIndex: 0,
            explain: 'El apunte abre la sección diciendo: "Hay tres maneras de repetir una tarea y dos maneras adicionales de controlar esa repetición".',
          },
          {
            id: 'mc-14-2',
            q: '¿Qué hace "for(int x = 0; x<10; x++)"?',
            options: [
              'Repite la instrucción 10 veces',
              'Repite la instrucción mientras x sea mayor que 10',
              'Repite la instrucción una sola vez',
              'Repite la instrucción indefinidamente',
            ],
            correctIndex: 0,
            explain: 'Es el ejemplo del apunte, con el comentario "instrucción que se repetirá 10 veces".',
          },
          {
            id: 'mc-14-3',
            q: '¿Qué palabra clave del switch se ejecuta cuando la expresión no coincide con ningún case?',
            options: [
              'default',
              'else',
              'break',
              'continue',
            ],
            correctIndex: 0,
            explain: 'En la estructura del switch, "default" es lo que se ejecuta si la expresión no vale ninguno de los valores de los case.',
          },
          {
            id: 'mc-14-4',
            q: 'En el ejemplo "x % 2 == 0 ? \'numero par\' : \'numero impar\'", ¿qué se devuelve si la condición es falsa?',
            options: [
              '"numero impar"',
              '"numero par"',
              'false',
              'null',
            ],
            correctIndex: 0,
            explain: 'En el ternario, la primera salida corresponde al verdadero y la segunda al falso: condición ? salidaPorVerdadero : salidaPorFalso.',
          },
        ],
        ms: [
          {
            id: 'ms-14-1',
            q: '¿Cuáles de estas son estructuras de control de flujo mencionadas en el apunte?',
            options: [
              'while',
              'do...while',
              'switch',
              'El operador if ternario',
              'foreach',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte no menciona el foreach. Sí menciona while, for, do...while, continue, break, if/else, switch y el ternario.',
          },
          {
            id: 'ms-14-2',
            q: '¿Qué afirmaciones sobre los bucles son correctas según el apunte?',
            options: [
              'El while evalúa la condición antes de ejecutar las operaciones',
              'El do...while evalúa la condición después de ejecutar las operaciones',
              'El for administra variables para el control del bucle',
              '"break" permite romper el bucle',
              '"continue" permite romper el bucle',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: '"continue" no rompe el bucle: saltea la iteración y sigue con el siguiente paso. El que lo rompe es "break".',
          },
        ],
      },
      flashcards: [
        { id: 'fc-14-1', front: 'while', back: 'Repite las instrucciones mientras se cumpla la condición. Evalúa la condición ANTES de ejecutar las operaciones.' },
        { id: 'fc-14-2', front: 'do...while', back: 'Similar al while, pero la evaluación de la condición se da LUEGO de ejecutar las operaciones. Sintaxis: do { ... } while (condición);' },
        { id: 'fc-14-3', front: 'for', back: 'Repite mientras se cumpla la condición y administra variables para el control del bucle: for(condInicial; condParaBucle; accionLuegoDelBucle).' },
        { id: 'fc-14-4', front: 'continue vs break', back: 'continue saltea la iteración y sigue con el siguiente paso del bucle; break rompe el bucle.' },
        { id: 'fc-14-5', front: 'if / else', back: 'El if toma una condición y ejecuta el código si se cumple; con else se indica qué ejecutar si no se cumple.' },
        { id: 'fc-14-6', front: 'switch', back: 'Evalúa una expresión por múltiples y diferentes valores, en vez de una sucesión de if...else. Lleva varios case y un default.' },
        { id: 'fc-14-7', front: 'Operador if ternario', back: 'Sustituye un if...else en una sola línea: condición ? salidaPorVerdadero : salidaPorFalso. Ej: x % 2 == 0 ? "numero par" : "numero impar";' },
      ],
    },
    {
      id: '28',
      unit: 'diseno-clases',
      title: 'Responsabilidades, orden jerárquico y relación ES-UN',
      criollo: 'Cuando modelás un problema con objetos te salen mil clases y varias se parecen sospechosamente entre sí. La movida es ordenarlas: lo común arriba, lo distinto abajo. Y el criterio para saber si algo va colgado de otra clase no es qué tiene, sino qué hace: si un caniche hace todo lo que hace un perro, entonces un caniche ES UN perro. Ojo que arriba/abajo no es mejor/peor, es solo un ordenamiento.',
      blocks: [
        {
          type: 'h3',
          text: 'Responsabilidades de clases',
          criollo: 'Antes de escribir una línea de código pasás por la abstracción: qué partes hay, cómo interactúan y qué le toca hacer a cada una. Eso último son las responsabilidades.',
        },
        {
          type: 'p',
          text: 'Para empezar a resolver un problema usando el paradigma de objetos, debemos pasar por el denominado <strong>proceso de abstracción</strong>. Durante este proceso no solo identificamos las partes que integran nuestro "universo" o "dominio", sino <strong>cómo interactúan</strong> esas partes. Es así como llegamos a definir clases, con sus atributos y operaciones.',
        },
        {
          type: 'p',
          text: 'Además, definimos qué debe hacer cada parte para contribuir a la solución del problema, es decir, establecimos las <strong>responsabilidades de las clases</strong>.',
        },
        {
          type: 'h3',
          text: 'Orden jerárquico entre clases',
          criollo: 'Agrupás lo común en un lugar y dejás las diferencias separadas. Así nace la jerarquía: superior e inferior.',
        },
        {
          type: 'p',
          text: 'Cada vez que intentamos resolver un problema con el paradigma de objetos debemos modelarlo, definiendo una multitud de clases, cada una con sus atributos y operaciones. Cada clase deberá tener sus responsabilidades bien definidas, pero aun así llegaremos a detectar que <strong>algunas son demasiado parecidas entre sí</strong>, o que tienen algunas pocas similitudes pero marcadas diferencias.',
        },
        {
          type: 'p',
          text: 'Es importante dar a esta multiplicidad de partes algún tipo de orden. Según estas similitudes y diferencias podemos <strong>agrupar todos aquellos atributos y operaciones en común en un lugar</strong> y dejar separadas las diferencias. Es así como nace un <strong>orden jerárquico superior e inferior</strong>: dejaremos en la parte superior a aquellas partes comunes y en el inferior a las diferentes.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'No se trata de agrupar según mejor o peor: es <strong>solo un ordenamiento</strong>. Que una clase esté "arriba" no la hace superior en calidad, la hace más genérica.',
        },
        {
          type: 'h3',
          text: 'Relación ES-UN',
          criollo: 'Si tiene y hace todo lo que hace un perro, es un perro. Y lo que importa de verdad no es lo que tiene, es lo que hace.',
        },
        {
          type: 'p',
          text: 'Si decimos que todos los perros tienen un nombre y una edad, y todos ladran y juegan, es así como podemos decir que un perro es un perro <strong>porque tiene edad y nombre, y ladra y juega</strong>.',
        },
        {
          type: 'p',
          text: 'Si analizamos un caniche, veremos cómo juega y cómo ladra; si analizamos un Pug Carlino, también veremos cómo juega y ladra, aunque lo hace muy distinto al caniche. Entonces, tanto el caniche como el Pug ladran y juegan, y ambos tienen nombre y edad: sería razonable asumir que <strong>si tienen y hacen todo lo que hace un perro, entonces es un perro</strong>. El mismo análisis podría hacerse con cualquier otra raza.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'En este punto es importante notar que <strong>lo que las clases tienen es irrelevante</strong>: lo fundamental es <strong>lo que las clases hacen</strong>. Los atributos deberían ser siempre privados y tener operaciones para obtener o establecer sus valores. Si un perro tiene un nombre, entonces no importa el atributo nombre, sino las operaciones para nombrarlo y para obtener su nombre.',
        },
        {
          type: 'p',
          text: 'El conjunto de las cosas que la clase hace, es decir, el <strong>conjunto de operaciones públicas</strong>, se conoce con el nombre de <strong>"interfaz pública"</strong> de la clase.',
        },
        {
          type: 'p',
          text: 'Por todo esto podemos decir que un caniche ES UN perro. De la misma manera que podríamos decir que profesor ES UN empleado, y más aún: un empleado ES UNA persona, por lo tanto (por transitividad) un <strong>profesor ES UNA persona</strong>.',
        },
        {
          type: 'p',
          text: 'Nuevamente: al observar la realidad y pasar por el proceso de abstracción obtuvimos una serie de entidades que <strong>se ordenan naturalmente</strong>, y la herencia responde a ello. Podemos decir entonces que la <strong>herencia es un ordenamiento entre clases que define una relación "es un"</strong>.',
        },
        {
          type: 'table',
          caption: 'La jerarquía de perros del apunte',
          headers: ['Nivel', 'Clase', 'Qué aporta'],
          rows: [
            ['Superior', 'Perro', 'Lo común: nombre, edad, ladrar() y jugar()'],
            ['Inferior', 'Caniche', 'Es un perro: tiene y hace todo lo del perro, pero ladra distinto'],
            ['Inferior', 'Pug Carlino', 'Es un perro: ladra y juega, aunque muy distinto al caniche'],
            ['Inferior', 'Dóberman', 'Es un perro: hace lo mismo que el perro'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-28-1', q: 'El proceso de abstracción identifica las partes del dominio y también cómo interactúan entre sí.', a: true, explain: 'El apunte lo dice textual: no solo identificamos las partes que integran nuestro "universo" o "dominio", sino cómo interactúan esas partes.' },
          { id: 'tf-28-2', q: 'En el orden jerárquico entre clases, lo común va abajo y las diferencias arriba.', a: false, explain: 'Es al revés: se deja en la parte superior a aquellas partes comunes y en el inferior a las diferentes.' },
          { id: 'tf-28-3', q: 'Ordenar clases jerárquicamente implica decidir cuál es mejor y cuál es peor.', a: false, explain: 'No se trata de agrupar según mejor o peor: es solo un ordenamiento.' },
          { id: 'tf-28-4', q: 'Para la relación ES-UN, lo fundamental es lo que las clases hacen, no lo que tienen.', a: true, explain: 'Lo que las clases tienen es irrelevante; los atributos deberían ser siempre privados y accederse por operaciones. Por eso se habla del comportamiento.' },
          { id: 'tf-28-5', q: 'La interfaz pública de una clase es el conjunto de sus atributos privados.', a: false, explain: 'La interfaz pública es el conjunto de operaciones públicas: el conjunto de las cosas que la clase hace.' },
        ],
        mc: [
          {
            id: 'mc-28-1',
            q: '¿Qué son las "responsabilidades de las clases"?',
            options: [
              'Los atributos privados que cada clase declara',
              'Lo que debe hacer cada parte para contribuir a la solución del problema',
              'El orden en que se instancian los objetos en el main',
              'La cantidad de operaciones públicas que expone una clase',
            ],
            correctIndex: 1,
            explain: 'Durante la abstracción definimos qué debe hacer cada parte para contribuir a la solución del problema: eso son las responsabilidades.',
          },
          {
            id: 'mc-28-2',
            q: 'Según el apunte, ¿por qué un caniche ES UN perro?',
            options: [
              'Porque tiene los mismos atributos privados declarados',
              'Porque fue creado con la palabra clave new',
              'Porque tiene y hace todo lo que hace un perro',
              'Porque su nombre aparece en la misma jerarquía de archivos',
            ],
            correctIndex: 2,
            explain: 'Si tienen y hacen todo lo que hace un perro, entonces es un perro. La herencia es un ordenamiento entre clases que define una relación "es un".',
          },
          {
            id: 'mc-28-3',
            q: 'La interfaz pública de una clase es...',
            options: [
              'El conjunto de operaciones públicas, es decir, el conjunto de cosas que la clase hace',
              'El archivo .java donde se declara la clase',
              'La lista de clases de las que hereda',
              'El conjunto de getters y setters únicamente',
            ],
            correctIndex: 0,
            explain: 'El apunte lo define así: el conjunto de las cosas que la clase hace, es decir, el conjunto de operaciones públicas.',
          },
          {
            id: 'mc-28-4',
            q: 'Si un profesor ES UN empleado y un empleado ES UNA persona, entonces...',
            options: [
              'Un profesor no puede ser una persona porque solo se hereda un nivel',
              'Una persona ES UN profesor por simetría',
              'Un profesor ES UNA persona, por transitividad',
              'Empleado y profesor son la misma clase',
            ],
            correctIndex: 2,
            explain: 'El apunte encadena: profesor ES UN empleado, empleado ES UNA persona, por lo tanto un profesor ES UNA persona.',
          },
        ],
        ms: [
          {
            id: 'ms-28-1',
            q: '¿Cuáles de estas afirmaciones sobre el orden jerárquico entre clases están en el apunte?',
            options: [
              'Lo común va en la parte superior',
              'Lo diferente va en la parte inferior',
              'El ordenamiento indica cuál clase es mejor',
              'Se agrupa según similitudes y diferencias',
              'Cada clase debe tener sus responsabilidades bien definidas',
            ],
            correctIndexes: [0, 1, 3, 4],
            explain: 'Lo único falso es que el orden indique calidad: no se trata de agrupar según mejor o peor, es solo un ordenamiento.',
          },
          {
            id: 'ms-28-2',
            q: 'Según el apunte, ¿qué define a un perro como perro?',
            options: [
              'Tener nombre',
              'Tener edad',
              'Ladrar',
              'Jugar',
              'Tener un dueño registrado',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte dice: todos los perros tienen un nombre y una edad, y todos ladran y juegan. El dueño no aparece.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-28-1', front: 'Proceso de abstracción', back: 'Paso previo para resolver un problema con objetos: identificar las partes del universo o dominio y cómo interactúan, para definir clases con sus atributos y operaciones.' },
        { id: 'fc-28-2', front: 'Responsabilidades de una clase', back: 'Qué debe hacer cada parte para contribuir a la solución del problema.' },
        { id: 'fc-28-3', front: 'Orden jerárquico entre clases', back: 'Se agrupan atributos y operaciones en común en un lugar (parte superior) y se dejan separadas las diferencias (parte inferior). No es mejor/peor, es solo ordenamiento.' },
        { id: 'fc-28-4', front: 'Relación ES-UN', back: 'Si una clase tiene y hace todo lo que hace otra, entonces "es una" de esas. Ej: un caniche ES UN perro.' },
        { id: 'fc-28-5', front: '¿Qué importa para el ES-UN: lo que la clase tiene o lo que hace?', back: 'Lo que hace. Lo que las clases tienen es irrelevante; los atributos deberían ser siempre privados y accederse mediante operaciones.' },
        { id: 'fc-28-6', front: 'Interfaz pública', back: 'El conjunto de las cosas que la clase hace, es decir, el conjunto de sus operaciones públicas.' },
        { id: 'fc-28-7', front: 'Definición de herencia', back: 'Un ordenamiento entre clases que define una relación "es un".' },
        { id: 'fc-28-8', front: 'Transitividad del ES-UN', back: 'Profesor ES UN empleado y empleado ES UNA persona, por lo tanto profesor ES UNA persona.' },
      ],
    },
    {
      id: '29',
      unit: 'diseno-clases',
      title: 'Utilidad de la herencia: extends y reutilización de código',
      criollo: 'Si Caniche, Pug y Dóberman hacen lo mismo que Perro, ¿para qué escribir tres veces el mismo código? Ponés el ladrar() una sola vez en Perro, escribís "extends Perro" y listo: heredaste todo. La herencia apunta fundamentalmente a la reutilización de código.',
      blocks: [
        {
          type: 'h3',
          text: '¿Para qué sirve la herencia?',
          criollo: 'Escribir el comportamiento una vez arriba y que los de abajo lo "obtengan" gratis.',
        },
        {
          type: 'p',
          text: 'La herencia es uno de los <strong>pilares de la orientación a objetos</strong>. Si tanto Caniche como Pug como Dóberman hacen lo mismo que hace el perro: ¿si hacen lo mismo que el perro, para qué escribir el código de lo que hacen? ¿No sería más conveniente <strong>escribirlo una sola vez en la clase Perro</strong> y que Dóberman, Caniche, etc. "obtengan" este comportamiento desde Perro?',
        },
        {
          type: 'p',
          text: 'De hacer esto, decimos que Caniche, Pug, etc. <strong>"heredan" el comportamiento</strong> de un perro; es decir, la clase Dóberman hereda de la clase Perro todas sus operaciones.',
        },
        {
          type: 'p',
          text: 'Supongamos la clase Perro:',
        },
        {
          type: 'code',
          code: 'public class Perro {\n    \n    private int edad;\n    private String nombre;\n    \n    public String ladrar() {\n        return "GUAU";\n    }\n    public String jugar() {\n        return "JUGANDO";\n    }\n    //getters y setters de edad y nombre    \n}',
        },
        {
          type: 'p',
          text: 'Y yo quiero crear mi clase Caniche y mostrar que caniche es un perro, entonces tenemos que hacer:',
        },
        {
          type: 'code',
          code: 'public class Caniche extends Perro {\n    \n}',
        },
        {
          type: 'p',
          text: 'Con la palabra <code>extends</code> indico, en código, que un caniche es un perro, y por tanto <strong>hereda todo su comportamiento</strong>. Es por eso que a partir de este punto podemos hacer:',
        },
        {
          type: 'code',
          code: 'Perro p = new Perro();\nSystem.out.println(p.ladrar()); // < GUAU\n\nCaniche c = new Caniche(); \nSystem.out.println(c.ladrar());// < GUAU',
        },
        {
          type: 'h3',
          text: 'Cómo resuelve el compilador (y el runtime) una llamada heredada',
          criollo: 'Va escalando la jerarquía escalón por escalón hasta encontrar un método que matchee cantidad, tipo y orden de parámetros. Si no lo encuentra en ningún lado, no compila.',
        },
        {
          type: 'p',
          text: 'En la clase Caniche no se definió un método "ladrar". Para que esto compile, y luego funcione, lo que el <strong>compilador</strong> hace es pensar:',
        },
        {
          type: 'ol',
          items: [
            'La operación <code>ladrar</code> sin parámetros, ¿está definida en Caniche?',
            'Sí → entonces se compila correctamente y se puede ejecutar luego (no es el caso de este ejemplo).',
            'No → intento ir a buscarla a la clase de la que extiende Caniche, es decir, en Perro. ¿Está la operación (método) <code>ladrar</code>, que no recibe parámetros, en Perro? Sí → la sintaxis es correcta. No → intento buscarla en la clase de la que extiende Perro... y repetir hasta encontrar el método.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Si el método <strong>no se encuentra en ninguna parte de la cadena</strong> (de la jerarquía), entonces el código <strong>no puede compilarse correctamente</strong>.',
        },
        {
          type: 'p',
          text: 'Al momento de la ejecución ocurre algo similar: el <strong>runtime</strong> piensa "ladrar sin parámetros, ¿está definida en Caniche? No, pero sí está en Perro, voy a ejecutar el código que corresponde a la operación ladrar que se hereda de Perro".',
        },
        {
          type: 'p',
          text: 'Es importante que este proceso se repite <strong>en cada escalón de la jerarquía</strong>, y se va "escalando" hasta encontrar la operación que "matchea" con la <strong>cantidad, tipo y orden de parámetros</strong> de la llamada.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Acá tenemos la <strong>primera consecuencia importante de la herencia</strong>: en la clase Caniche no repetimos nada del código para hacer que un Caniche ladre ni juegue. La herencia es un mecanismo que apunta fundamentalmente a la <strong>reutilización de código</strong>.',
        },
        {
          type: 'h3',
          text: 'Operaciones. Interfaz pública',
          criollo: 'Heredar no te obliga a hacer exactamente lo mismo: podés agregar. El Labrador cuida niños y el Dóberman cuida la casa, y siguen siendo perros porque hacen al menos lo que hace un perro.',
        },
        {
          type: 'p',
          text: 'Todos sabemos que los caniches ladran, también lo hacen los labradores, los siberianos, los dóberman, etc. Con lo que hicimos hasta acá <strong>ahorramos código</strong>: para cualquiera de estas clases no deberíamos escribir nuevamente el ladrar, jugar, etc.',
        },
        {
          type: 'p',
          text: 'Lo que sí podríamos hacer es <strong>agregar operaciones</strong>: como ya heredamos ladrar y jugar, podemos agregarle al Labrador, por ejemplo, una operación <code>cuidarNiños()</code>, o al Dóberman <code>cuidarCasa()</code>. Entonces el Labrador o el Dóberman <strong>son perros, pero hacen algo más</strong>.',
        },
        {
          type: 'p',
          text: 'Es decir: Labrador es un perro porque <strong>hace al menos lo que hace un perro</strong>. También se dice que Labrador es un perro porque <strong>"cumple con la interfaz pública"</strong> de perro. Es importante esta distinción, porque la relación "es un" no se da por respetar exactamente lo que hace otra clase, sino que además puede <strong>agregar comportamiento</strong>. Por todo esto es que podemos hacer:',
        },
        {
          type: 'code',
          code: 'Perro p = new Perro();\np.ladrar();\n\nPerro x = new Doberman();// Doberman ES UN Perro\nx.ladrar();',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-29-1', q: 'La palabra clave extends indica en código que una clase hereda el comportamiento de otra.', a: true, explain: '"public class Caniche extends Perro" indica que un caniche es un perro y por tanto hereda todo su comportamiento.' },
          { id: 'tf-29-2', q: 'Si el compilador no encuentra el método en ninguna clase de la jerarquía, el código igual compila y falla recién en ejecución.', a: false, explain: 'Si no se encuentra en ninguna parte de la cadena de la jerarquía, el código no puede compilarse correctamente.' },
          { id: 'tf-29-3', q: 'La búsqueda del método se hace de un escalón por vez, hasta encontrar el que matchee cantidad, tipo y orden de parámetros.', a: true, explain: 'El proceso se repite en cada escalón de la jerarquía, "escalando" hasta encontrar la operación que matchea.' },
          { id: 'tf-29-4', q: 'Una subclase solo puede tener exactamente las mismas operaciones que su superclase.', a: false, explain: 'La relación "es un" no se da por respetar exactamente lo que hace otra clase: además puede agregar comportamiento (cuidarNiños(), cuidarCasa()).' },
          { id: 'tf-29-5', q: 'Escribir "Perro x = new Doberman();" es válido porque Doberman ES UN Perro.', a: true, explain: 'Es el ejemplo textual del apunte: Doberman cumple con la interfaz pública de Perro.' },
        ],
        mc: [
          {
            id: 'mc-29-1',
            q: 'Según el apunte, ¿a qué apunta fundamentalmente la herencia?',
            options: [
              'A ocultar los atributos de las clases',
              'A la reutilización de código',
              'A acelerar la compilación',
              'A reducir la cantidad de objetos en memoria',
            ],
            correctIndex: 1,
            explain: 'En la clase Caniche no se repite nada del código: la herencia es un mecanismo que apunta fundamentalmente a la reutilización de código.',
          },
          {
            id: 'mc-29-2',
            q: 'Si Caniche no define ladrar() y Perro sí, ¿qué imprime "System.out.println(c.ladrar());"?',
            options: [
              'null, porque Caniche no lo define',
              'Un error de compilación',
              'GUAU, el heredado de Perro',
              'Una cadena vacía',
            ],
            correctIndex: 2,
            explain: 'El runtime busca ladrar en Caniche, no lo encuentra, lo encuentra en Perro y ejecuta el código heredado: GUAU.',
          },
          {
            id: 'mc-29-3',
            q: '¿Qué significa que Labrador "cumple con la interfaz pública" de Perro?',
            options: [
              'Que declara los mismos atributos privados',
              'Que tiene exactamente la misma cantidad de métodos',
              'Que implementa una interface de Java llamada Perro',
              'Que hace al menos lo que hace un perro, pudiendo agregar más',
            ],
            correctIndex: 3,
            explain: 'Labrador es un perro porque hace al menos lo que hace un perro; además puede agregar comportamiento.',
          },
          {
            id: 'mc-29-4',
            q: '¿Con qué criterio se elige la operación que "matchea" al escalar la jerarquía?',
            options: [
              'Cantidad, tipo y orden de los parámetros',
              'El nombre del archivo donde está la clase',
              'El nivel de la jerarquía en el que está definida',
              'El tipo de retorno declarado',
            ],
            correctIndex: 0,
            explain: 'Se va escalando hasta encontrar la operación que matchea con la cantidad, tipo y orden de parámetros de la llamada.',
          },
        ],
        ms: [
          {
            id: 'ms-29-1',
            q: '¿Qué pasos hace el compilador al ver "c.ladrar()" con Caniche extends Perro?',
            options: [
              'Pregunta si ladrar sin parámetros está definida en Caniche',
              'Si no está, la busca en la clase de la que extiende Caniche',
              'Si tampoco está, sigue subiendo por la jerarquía',
              'Si no la encuentra en ninguna parte, no compila',
              'Ejecuta el método para comprobar el resultado',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El compilador analiza sintaxis, no ejecuta. El resto son los pasos que describe el apunte.',
          },
          {
            id: 'ms-29-2',
            q: '¿Cuáles de estas operaciones aparecen en la clase Perro del apunte?',
            options: [
              'ladrar()',
              'jugar()',
              'cuidarCasa()',
              'getters y setters de edad y nombre',
              'cuidarNiños()',
            ],
            correctIndexes: [0, 1, 3],
            explain: 'cuidarCasa() es la operación que se le agrega al Dóberman y cuidarNiños() la que se le agrega al Labrador; no están en Perro.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-29-1', front: 'extends', back: 'Palabra clave que indica en código que una clase es otra (Caniche extends Perro) y por tanto hereda todo su comportamiento.' },
        { id: 'fc-29-2', front: '¿Para qué sirve la herencia?', back: 'Para escribir el comportamiento una sola vez en la clase superior y que las inferiores lo "obtengan": es un mecanismo de reutilización de código.' },
        { id: 'fc-29-3', front: 'Cómo resuelve el compilador un método heredado', back: '¿Está definido en la clase? Sí → compila. No → lo busca en la clase de la que extiende, y así hasta encontrarlo. Si no está en ninguna parte de la cadena, no compila.' },
        { id: 'fc-29-4', front: 'Criterio de "matcheo" del método', back: 'Cantidad, tipo y orden de los parámetros de la llamada.' },
        { id: 'fc-29-5', front: 'Qué hace el runtime con un método heredado', back: 'Si no está definido en la clase del objeto, ejecuta el código de la operación que se hereda de la superclase.' },
        { id: 'fc-29-6', front: 'Agregar operaciones en la subclase', back: 'Además de heredar ladrar y jugar, se le puede agregar cuidarNiños() al Labrador o cuidarCasa() al Dóberman: son perros, pero hacen algo más.' },
        { id: 'fc-29-7', front: '"Cumple con la interfaz pública"', back: 'Labrador es un perro porque hace al menos lo que hace un perro. La relación "es un" no obliga a hacer exactamente lo mismo: se puede agregar comportamiento.' },
        { id: 'fc-29-8', front: 'Perro x = new Doberman();', back: 'Es válido porque Doberman ES UN Perro. Después se le puede pedir x.ladrar().' },
      ],
    },
    {
      id: '30',
      unit: 'diseno-clases',
      title: 'Sobreescritura y la keyword super',
      criollo: 'El caniche ladra distinto al labrador, así que le "pisás" el ladrar heredado reescribiéndolo con el mismo tipo, orden y cantidad de parámetros. Y si querés pisar pero además reusar lo de arriba, llamás a super.ladrar(). Sin el super te comés un loop infinito. El super también sirve para llamar al constructor del padre, y ahí aparece la trampa del constructor por default.',
      blocks: [
        {
          type: 'h3',
          text: 'Sobreescritura: alterando el comportamiento heredado',
          criollo: 'Reescribís el método respetando la firma y le pisás el comportamiento al padre.',
        },
        {
          type: 'p',
          text: 'Analizando nuevamente al caniche: cuando lo oímos ladrar, claramente ladra de forma muy distinta a un labrador. ¿Cómo se puede mostrar esa diferencia dentro de la jerarquía de perros armada hasta aquí? Se utiliza un mecanismo que se llama <strong>sobreescritura de métodos</strong>.',
        },
        {
          type: 'p',
          text: 'Para aplicar sobreescritura se debe <strong>reescribir el método respetando el tipo, orden y cantidad de parámetros</strong> suministrados. De esta forma "pisamos" el comportamiento heredado y lo reemplazamos por otro:',
        },
        {
          type: 'code',
          code: 'public class Caniche extends Perro {\n   public String ladrar() {\n      return "WIF WIF";// caniche tiene un ladrido mas agudo \n   }   \n}',
        },
        {
          type: 'p',
          text: 'Entonces, si hiciéramos en un main:',
        },
        {
          type: 'code',
          code: 'Caniche c = new Caniche(); \nSystem.out.println(c.ladrar());// < WIF WIF',
        },
        {
          type: 'p',
          text: 'Aquí la clase Caniche <strong>sí</strong> define un método "ladrar". El compilador analiza: "¿ladrar, sin parámetros, está definida en Caniche? Sí, entonces la sintaxis es correcta". Al momento de la ejecución el runtime analiza: "¿ladrar sin parámetros está definida en Caniche? <strong>Sí</strong> → la ejecuto. <strong>No</strong> → voy a ejecutar el código que corresponde a la operación ladrar que se hereda de Perro".',
        },
        {
          type: 'h3',
          text: 'Pisar pero reutilizar: super',
          criollo: 'El Dóberman ladra como perro pero le suma un gruñido. Escribís el GUAU una sola vez, en Perro.',
        },
        {
          type: 'p',
          text: 'Incluso podemos ir más allá: podemos "pisar" el método heredado pero a la vez <strong>reutilizar aquello que heredamos</strong>. Dóberman suena algo más agresivo, así que cuando ladre podemos hacer que gruña un poco también:',
        },
        {
          type: 'code',
          code: 'public class Doberman extends Perro {\n   public String ladrar() {\n      return super.ladrar() + " GRRRR"\n   }   \n}',
        },
        {
          type: 'p',
          text: 'Entonces, si hiciéramos un main:',
        },
        {
          type: 'code',
          code: 'Doberman d = new Doberman(); \nSystem.out.println(d.ladrar());// < GUAU GRRRR',
        },
        {
          type: 'p',
          text: 'Vimos aquí que podemos acceder al comportamiento de la <strong>clase padre, también llamada superclase</strong>, mediante la palabra clave <code>super</code>. De no contar con la palabra super, si hiciéramos:',
        },
        {
          type: 'code',
          code: 'public class Doberman extends Perro {\n   public String ladrar() {\n      return ladrar() + " GRRRR" // loop infinito!\n   }   \n}',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'El método <code>ladrar()</code> se llamaría a sí mismo <strong>infinitamente</strong>. En cambio, con el <code>super</code> explicitamos que queremos llamar al <code>ladrar()</code> de la superclase.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Si tenemos una jerarquía de <strong>3 o más niveles</strong>, no se pueden encadenar las llamadas a super (es decir, no se puede hacer <code>super.super.super.unMetodo()</code>): siempre se hace de <strong>a un nivel por clase</strong>.',
        },
        {
          type: 'p',
          text: '¿Qué ocurrió aquí? <strong>Reutilizamos código</strong>. El Dóberman retorna "GUAU GRRRR" cuando ladra, pero el código del ladrido que devuelve "GUAU" lo escribimos <strong>solo una vez, en un solo lugar</strong>: en la clase Perro.',
        },
        {
          type: 'h3',
          text: 'super en los constructores',
          criollo: 'Antes de darle agresividad al Dóberman tiene que existir su "parte Perro". Por eso Java mete un super() implícito, y si vos definiste otros constructores en el padre, el default se perdió y explota.',
        },
        {
          type: 'p',
          text: 'La palabra clave super no solo se utiliza en las llamadas a métodos. También se utiliza super para hacer <strong>llamadas a los constructores de la clase padre</strong>, por ejemplo:',
        },
        {
          type: 'code',
          code: 'public class Perro {\n   private Sting nombre;\n   \n   public Perro(String nombre) {\n      this.nombre = nombre;\n   }\n   public String ladrar() {\n      return super.ladrar() + " GRRRR"\n   }   \n}\n\npublic class Doberman extends Perro {\n   private int agresividad;\n\n   public Doberman(int agresividad) {\n      this.agresividad = agresividad;\n   }\n\n   // quiero un constructor que le pase el nombre\n   public Doberman(String nombre) {\n      //this.nombre = nombre;< este código ya lo escribí en Perro!\n      super(nombre);//RE-utilizo lo que ya escribi\n   }\n\n   public String ladrar() {\n      return ladrar() + " GRRRR" // loop infinito!\n   }   \n}',
        },
        {
          type: 'p',
          text: 'Aun así como está, Doberman arrojaría un <strong>error de compilación</strong>. El constructor que recibe el nivel de agresividad hace uso de la palabra <code>this</code>. Esa línea de código asume que <strong>ya existe una instancia</strong> de Doberman para darle la agresividad. Doberman es un perro, y para el momento de darle la agresividad al Doberman su <strong>"parte Perro"</strong> (aquello que hace que un dóberman sea un perro) ya debería existir, para luego asignarle la agresividad.',
        },
        {
          type: 'p',
          text: 'Para ello se agrega <strong>"implícitamente" una llamada a <code>super()</code></strong>, sin parámetros (el constructor por default). De esta manera tengo la parte de Perro de un Doberman para luego asignarle la agresividad. Como vimos en el apunte de constructores, <strong>si se definen constructores adicionales al constructor por default, este se pierde</strong>. Entonces, en este caso, es importante declararlo explícitamente.',
        },
        {
          type: 'p',
          text: 'El ejemplo con el código correcto sería:',
        },
        {
          type: 'code',
          code: 'public class Perro {\n   private Sting nombre;\n\n   public Perro() {\n      \n   }\n   \n   public Perro(String nombre) {\n      this.nombre = nombre;\n   }\n   public String ladrar() {\n      return super.ladrar() + " GRRRR"\n   }   \n}\n\npublic class Doberman extends Perro {\n   private int agresividad;\n\n   public Doberman(int agresividad) {\n      //aquí la llamada implícita a super() no tiene problemas\n      this.agresividad = agresividad;\n   }\n\n   // quiero un constructor que le pase el nombre\n   public Doberman(String nombre) {\n      //this.nombre = nombre;< este código ya lo escribí en Perro!\n      super(nombre);//RE-utilizo lo que ya escribi\n   }\n\n   public String ladrar() {\n      return ladrar() + " GRRRR" // loop infinito!\n   }   \n}',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-30-1', q: 'Para sobreescribir un método hay que respetar el tipo, orden y cantidad de parámetros.', a: true, explain: 'Es la condición para "pisar" el comportamiento heredado. Si no se respeta, se cae en una sobrecarga.' },
          { id: 'tf-30-2', q: 'Escribir "return ladrar() + \\" GRRRR\\"" dentro del propio ladrar() de Doberman produce un loop infinito.', a: true, explain: 'El método se llamaría a sí mismo infinitamente. Con super explicitamos que queremos el ladrar() de la superclase.' },
          { id: 'tf-30-3', q: 'En una jerarquía de tres niveles se puede escribir super.super.unMetodo() para saltar dos escalones.', a: false, explain: 'No se pueden encadenar las llamadas a super: siempre se hace de a un nivel por clase.' },
          { id: 'tf-30-4', q: 'La palabra super solo sirve para llamar métodos de la superclase.', a: false, explain: 'También se usa para hacer llamadas a los constructores de la clase padre, como super(nombre).' },
          { id: 'tf-30-5', q: 'Si una clase define constructores adicionales al constructor por default, este último se pierde.', a: true, explain: 'Por eso hay que declararlo explícitamente cuando la subclase depende de la llamada implícita a super().' },
        ],
        mc: [
          {
            id: 'mc-30-1',
            q: 'Con "public String ladrar() { return super.ladrar() + \\" GRRRR\\"; }" en Doberman, ¿qué imprime d.ladrar()?',
            options: [
              'GRRRR',
              'GUAU GRRRR',
              'WIF WIF GRRRR',
              'Un error de compilación',
            ],
            correctIndex: 1,
            explain: 'super.ladrar() devuelve el GUAU heredado de Perro y se le concatena " GRRRR".',
          },
          {
            id: 'mc-30-2',
            q: '¿Por qué el constructor "public Doberman(int agresividad) { this.agresividad = agresividad; }" puede fallar en compilación?',
            options: [
              'Porque el atributo agresividad es privado',
              'Porque int no puede usarse en constructores',
              'Porque falta el constructor por default en Perro para la llamada implícita a super()',
              'Porque el nombre del constructor debe coincidir con el del archivo',
            ],
            correctIndex: 2,
            explain: 'Se agrega implícitamente una llamada a super() sin parámetros; si Perro definió otros constructores, el default se perdió y hay error de compilación.',
          },
          {
            id: 'mc-30-3',
            q: '¿Qué se gana escribiendo super.ladrar() en lugar de repetir el "GUAU"?',
            options: [
              'Se acelera la ejecución del método',
              'Se evita declarar el atributo nombre',
              'Se elimina la necesidad de usar extends',
              'Se reutiliza código: el "GUAU" se escribe una sola vez, en Perro',
            ],
            correctIndex: 3,
            explain: 'El apunte lo remarca: el código del ladrido que devuelve "GUAU" se escribió solo una vez, en un solo lugar.',
          },
          {
            id: 'mc-30-4',
            q: 'Antes de asignarle la agresividad al Doberman, ¿qué debe existir?',
            options: [
              'Su "parte Perro", aquello que hace que un dóberman sea un perro',
              'El método ladrar() sobreescrito',
              'Una instancia previa de Caniche',
              'El getter del atributo agresividad',
            ],
            correctIndex: 0,
            explain: 'Doberman es un perro; para el momento de darle la agresividad su parte Perro ya debería existir, de ahí la llamada implícita a super().',
          },
        ],
        ms: [
          {
            id: 'ms-30-1',
            q: '¿Cuáles son usos válidos de la keyword super según el apunte?',
            options: [
              'Llamar a un método de la superclase',
              'Llamar a un constructor de la clase padre',
              'Encadenar varios niveles con super.super',
              'Reutilizar el código heredado dentro de un método sobreescrito',
              'Declarar atributos privados en la subclase',
            ],
            correctIndexes: [0, 1, 3],
            explain: 'No se pueden encadenar llamadas a super, y super no declara atributos.',
          },
          {
            id: 'ms-30-2',
            q: 'Sobre la sobreescritura de métodos, ¿qué es cierto?',
            options: [
              'Reemplaza ("pisa") el comportamiento heredado',
              'Exige respetar tipo, orden y cantidad de parámetros',
              'Impide reutilizar el código de la superclase',
              'Permite mostrar que el caniche ladra distinto al labrador',
              'Solo puede aplicarse al constructor',
            ],
            correctIndexes: [0, 1, 3],
            explain: 'Se puede reutilizar el código heredado con super, y la sobreescritura aplica a métodos en general.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-30-1', front: 'Sobreescritura de métodos', back: 'Mecanismo para alterar el comportamiento heredado: se reescribe el método respetando tipo, orden y cantidad de parámetros, "pisando" el de la superclase.' },
        { id: 'fc-30-2', front: 'Ladrido del Caniche', back: 'public class Caniche extends Perro { public String ladrar() { return "WIF WIF"; } } → c.ladrar() imprime WIF WIF.' },
        { id: 'fc-30-3', front: 'super (en métodos)', back: 'Palabra clave para acceder al comportamiento de la clase padre (superclase). Ej: super.ladrar() + " GRRRR" da "GUAU GRRRR".' },
        { id: 'fc-30-4', front: '¿Qué pasa si llamo a ladrar() sin super dentro del propio ladrar()?', back: 'El método se llama a sí mismo infinitamente: loop infinito.' },
        { id: 'fc-30-5', front: 'Encadenar super', back: 'No se puede: en jerarquías de 3 o más niveles no existe super.super.super.unMetodo(). Siempre de a un nivel por clase.' },
        { id: 'fc-30-6', front: 'super en constructores', back: 'super(nombre) llama al constructor de la clase padre y reutiliza el código ya escrito ahí.' },
        { id: 'fc-30-7', front: 'Llamada implícita a super()', back: 'Java agrega implícitamente super() sin parámetros para que exista la "parte Perro" antes de asignar los atributos propios con this.' },
        { id: 'fc-30-8', front: 'Trampa del constructor por default', back: 'Si se definen constructores adicionales al constructor por default, este se pierde. Hay que declararlo explícitamente o el super() implícito no compila.' },
      ],
    },
    {
      id: '31',
      unit: 'diseno-clases',
      title: 'Sobrecarga de métodos',
      criollo: 'Otra forma de reutilizar código, pero que no necesita jerarquía. En vez de inventar "ladrarConVolumen", definís otro ladrar que recibe un int. Misma semántica, distinta firma. Y ojo: si querías sobreescribir pero cambiaste el tipo de un parámetro, "caíste" en una sobrecarga sin darte cuenta.',
      blocks: [
        {
          type: 'h3',
          text: 'Reutilizar sin jerarquía',
          criollo: 'La sobrecarga usa el código de métodos que ya tenés en tu clase, o los que tenés gracias a que los heredás.',
        },
        {
          type: 'p',
          text: 'Existe otra forma de reutilizar código, pero en este caso <strong>no necesariamente se da dentro de una jerarquía</strong>. Se la denomina <strong>sobrecarga de métodos</strong>. Aquí se trata de utilizar el código de métodos que ya tenemos dentro de nuestra clase, o métodos que tenemos en nuestra clase gracias a que los estamos heredando.',
        },
        {
          type: 'p',
          text: 'Supongamos que tenemos la clase <strong>PerroRobot</strong>: por más que sea una máquina, si hace al menos lo que hace un perro (respeta su interfaz pública), entonces <strong>es un Perro</strong>. En código lo haríamos de la siguiente manera:',
        },
        {
          type: 'code',
          code: 'public class PerroRobot extends Perro {\n   public String ladrar() {\n      return super.ladrar() + " BIP BIP"; // loop infinito!\n   }   \n}',
        },
        {
          type: 'h3',
          text: 'Una nueva variante del mismo método',
          criollo: 'Un perro ladra y ya: no inventes "ladrarConVolumen". Definís otro ladrar, con un argumento de más.',
        },
        {
          type: 'p',
          text: 'Supongamos ahora que la ventaja de un perro robótico fuera <strong>controlar el volumen</strong> al que ladra. Entonces podríamos definir una operación que se llame "ladrarConVolumen". Conceptualmente un perro ladra: controlar a distancia el volumen del ladrido del perro no es algo que pueda lograrse fácilmente. Los perros ladran y ya.',
        },
        {
          type: 'p',
          text: 'Lo que se puede hacer es <strong>definir una nueva operación ladrar</strong> que, conceptual e incluso semánticamente, concuerda con las acciones de un perro, aunque tendrá una variante: <strong>un argumento adicional</strong>.',
        },
        {
          type: 'code',
          code: 'public class PerroRobot extends Perro {\n   public String ladrar() {\n      return super.ladrar() + " BIP BIP";\n   }\n   public String ladrar(int volumen) {\n      return this.ladrar() + " VOL:"+volumen;\n   }   \n}',
        },
        {
          type: 'p',
          text: 'Entonces podríamos hacer:',
        },
        {
          type: 'code',
          code: 'PerroRobot pr = new PerroRobot();\nSystem.out.println(pr.ladrar()); //ladra\n//pero está muy fuerte….\nSystem.out.println(pr.ladrar(5)); //ladra y deja dormir…',
        },
        {
          type: 'h3',
          text: 'Sobrecarga vs. sobreescritura',
          criollo: 'La regla es una sola y se usa al revés en cada caso: para sobrecargar tenés que cambiar tipo, orden o cantidad de parámetros; para sobreescribir tenés que respetarlos.',
        },
        {
          type: 'p',
          text: 'Anteriormente vimos la <strong>sobrecarga de constructores</strong>, sus restricciones y cómo se decide la ejecución de uno u otro según el tipo, orden y cantidad de parámetros. Eso es solo un <strong>caso particular de la sobrecarga en general</strong>, que es la que define esas reglas. Por lo tanto, en la sobrecarga de métodos aplican las mismas reglas: <strong>para sobrecargar un método se debe alterar tipo, orden y cantidad de parámetros</strong>.',
        },
        {
          type: 'p',
          text: 'En la <strong>sobreescritura</strong> tengo que <strong>respetar</strong> tipo, orden y cantidad de parámetros para poder lograr "pisar" el método heredado. De lo contrario estaría haciendo una <strong>simple sobrecarga</strong> entre el método que estoy escribiendo y el que estoy heredando. Por ejemplo:',
        },
        {
          type: 'code',
          code: 'public class PerroRobotV2 extends PerroRobot {\n\n   public String ladrar(int volumen) {\n      return this.ladrar() + " DECIBELES:"+volumen;//estoy pisando\n   }\n\n   public String ladrar(long volumen) {\n      //aca no piso el ladrar porque el tipo del parámetro es otro\n      //"caigo" es una sobrecarga\n      return "this.ladrar()" + " MAX:" + (volumen*100);\n   }\n}',
        },
        {
          type: 'table',
          caption: 'Sobrecarga vs. sobreescritura',
          headers: ['', 'Sobrecarga', 'Sobreescritura'],
          rows: [
            ['Parámetros', 'Se debe alterar tipo, orden y cantidad', 'Se debe respetar tipo, orden y cantidad'],
            ['¿Necesita jerarquía?', 'No necesariamente', 'Sí: hay un método heredado que se pisa'],
            ['Efecto', 'Convive otra variante del método', '"Pisa" el comportamiento heredado'],
            ['Ejemplo del apunte', 'ladrar() y ladrar(int volumen) en PerroRobot', 'ladrar() de Caniche devolviendo "WIF WIF"'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-31-1', q: 'La sobrecarga de métodos solo puede darse dentro de una jerarquía de herencia.', a: false, explain: 'La sobrecarga no necesariamente se da dentro de una jerarquía: usa métodos que ya tenemos en nuestra clase o que heredamos.' },
          { id: 'tf-31-2', q: 'Para sobrecargar un método se debe alterar tipo, orden y cantidad de parámetros.', a: true, explain: 'Son las mismas reglas que ya se vieron para la sobrecarga de constructores, que es un caso particular de la sobrecarga en general.' },
          { id: 'tf-31-3', q: 'Si al querer sobreescribir cambio el tipo de un parámetro, igual piso el método heredado.', a: false, explain: 'No: "caigo" en una sobrecarga. Para pisar hay que respetar tipo, orden y cantidad de parámetros.' },
          { id: 'tf-31-4', q: 'PerroRobot es un Perro porque respeta su interfaz pública, aunque sea una máquina.', a: true, explain: 'Por más que sea una máquina, si hace al menos lo que hace un perro entonces es un Perro.' },
          { id: 'tf-31-5', q: 'El apunte recomienda llamar "ladrarConVolumen" a la operación que controla el volumen.', a: false, explain: 'Al contrario: lo que se puede hacer es definir una nueva operación ladrar con un argumento adicional, porque semánticamente concuerda con las acciones de un perro.' },
        ],
        mc: [
          {
            id: 'mc-31-1',
            q: 'En PerroRobot, ¿qué relación tienen ladrar() y ladrar(int volumen)?',
            options: [
              'Son el mismo método con distinto tipo de retorno',
              'Son una sobrecarga: misma operación, distinta cantidad de parámetros',
              'Son una sobreescritura del ladrar de Perro',
              'El segundo anula al primero',
            ],
            correctIndex: 1,
            explain: 'Es una nueva operación ladrar con una variante: un argumento adicional. Eso es sobrecarga.',
          },
          {
            id: 'mc-31-2',
            q: 'En PerroRobotV2, ladrar(long volumen) respecto de ladrar(int volumen)...',
            options: [
              'Lo pisa, porque el nombre coincide',
              'Provoca un error de compilación',
              'Es una sobrecarga, porque el tipo del parámetro es otro',
              'Es ignorado por el compilador',
            ],
            correctIndex: 2,
            explain: 'El comentario del apunte lo dice: acá no piso el ladrar porque el tipo del parámetro es otro, "caigo" en una sobrecarga.',
          },
          {
            id: 'mc-31-3',
            q: 'La sobrecarga de constructores, según el apunte, es...',
            options: [
              'Una regla independiente de la sobrecarga de métodos',
              'Un caso particular de la sobrecarga en general',
              'Una forma de sobreescritura',
              'Algo que solo aplica a la clase Object',
            ],
            correctIndex: 1,
            explain: 'Es solo un caso particular de la sobrecarga en general, que es la que define esas reglas.',
          },
          {
            id: 'mc-31-4',
            q: '¿Qué devuelve pr.ladrar(5) con "return this.ladrar() + \\" VOL:\\"+volumen;"?',
            options: [
              'Solo " VOL:5"',
              'El resultado de ladrar() concatenado con " VOL:5"',
              'GUAU, ignorando el parámetro',
              'Un ClassCastException',
            ],
            correctIndex: 1,
            explain: 'La variante con parámetro reutiliza this.ladrar() y le concatena " VOL:" más el volumen.',
          },
        ],
        ms: [
          {
            id: 'ms-31-1',
            q: '¿Qué caracteriza a la sobrecarga de métodos?',
            options: [
              'Es otra forma de reutilizar código',
              'No necesariamente se da dentro de una jerarquía',
              'Se debe alterar tipo, orden y cantidad de parámetros',
              'Puede usar métodos heredados dentro de la clase',
              'Obliga a respetar exactamente la firma del método heredado',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Respetar exactamente la firma es la condición de la sobreescritura, no de la sobrecarga.',
          },
          {
            id: 'ms-31-2',
            q: '¿Cuáles de estas clases aparecen en el apunte de sobrecarga?',
            options: [
              'PerroRobot',
              'PerroRobotV2',
              'Perro',
              'PerroDron',
              'PerroRobotV3',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'PerroRobot extiende Perro y PerroRobotV2 extiende PerroRobot. Las otras dos no existen en el apunte.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-31-1', front: 'Sobrecarga de métodos', back: 'Otra forma de reutilizar código que no necesariamente se da dentro de una jerarquía: usar el código de métodos que ya tenemos en la clase o que heredamos.' },
        { id: 'fc-31-2', front: 'Regla para sobrecargar', back: 'Se debe alterar tipo, orden y cantidad de parámetros.' },
        { id: 'fc-31-3', front: 'Regla para sobreescribir', back: 'Se debe respetar tipo, orden y cantidad de parámetros. Si no, se "cae" en una simple sobrecarga.' },
        { id: 'fc-31-4', front: 'PerroRobot', back: 'Por más que sea una máquina, si hace al menos lo que hace un perro (respeta su interfaz pública), entonces es un Perro: extends Perro.' },
        { id: 'fc-31-5', front: '¿Por qué ladrar(int volumen) y no ladrarConVolumen()?', back: 'Porque conceptual y semánticamente un perro ladra y ya. Se define una nueva operación ladrar con una variante: un argumento adicional.' },
        { id: 'fc-31-6', front: 'Sobrecarga de constructores', back: 'Es solo un caso particular de la sobrecarga en general, que es la que define las reglas de tipo, orden y cantidad de parámetros.' },
        { id: 'fc-31-7', front: 'ladrar(long volumen) vs ladrar(int volumen)', back: 'No pisa al de int porque el tipo del parámetro es otro: "caigo" en una sobrecarga.' },
      ],
    },
    {
      id: '32',
      unit: 'diseno-clases',
      title: 'Arreglos: uso, recorridos y utilidades',
      criollo: 'Un arreglo de primitivos arranca lleno de los valores por default (0, false, 0.0); uno de objetos arranca lleno de null, porque guarda referencias, no los objetos en sí. Accedés por posición, recorrés con un for de 0 a length-1, y el length es un atributo, no un método (nada de length()).',
      blocks: [
        {
          type: 'h3',
          text: 'Qué hay adentro de un arreglo recién creado',
          criollo: 'Depende de si es de primitivos o de referencias. Primitivos: valor por default. Referencias: null.',
        },
        {
          type: 'p',
          text: 'Los arreglos de tipos de dato <strong>primitivos</strong>, como ser <code>int[]</code>, guardan en cada una de sus posiciones los <strong>valores por default</strong> de los valores primitivos. Por ejemplo, para los enteros es un 0, para los boolean son false, para los float es 0.0, etc.',
        },
        {
          type: 'ul',
          items: [
            'Cuando definimos un <strong>arreglo de enteros</strong>, cada posición se va a llenar con <strong>0</strong>, porque el valor por default de un entero es 0.',
            'Cuando se genere un arreglo con tipo de dato <strong>Referencia</strong>, como el caso del Auto, en cada posición <strong>no va a haber nada</strong>, es decir, habrá un <strong>null</strong>.',
          ],
        },
        {
          type: 'h3',
          text: '¿Cómo se llenan las posiciones de un arreglo?',
          criollo: 'Por posición, con corchetes. Y acordate que la numeración arranca en 0.',
        },
        {
          type: 'p',
          text: 'Se tiene <strong>acceso por posición</strong>. Si queremos poner un valor entero en alguna posición en un arreglo de enteros tenemos que hacer:',
        },
        {
          type: 'code',
          code: 'enteros[3] = 158;',
        },
        {
          type: 'p',
          text: 'Si el arreglo fuera de 10, el 158 quedaría ubicado en la posición 3 (las posiciones van de 0 a 9).',
        },
        {
          type: 'p',
          text: '¿Y cómo se puede hacer para <strong>ver</strong> lo que hay en una posición?',
        },
        {
          type: 'code',
          code: 'int valor = enteros[4]; // valor es 31;',
        },
        {
          type: 'p',
          text: 'Esa expresión arrojará el valor guardado en esa posición (la quinta del arreglo, porque se cuenta desde 0). Si se necesita poner un valor en un arreglo cuyo tipo de dato es una <strong>Referencia</strong>:',
        },
        {
          type: 'code',
          code: 'Autos[0] = new Auto[];',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'En cada posición, cuando usamos arreglos que son de objetos, <strong>no se guarda el valor dentro de la posición</strong>, sino que se guarda una <strong>referencia al objeto</strong>.',
        },
        {
          type: 'h3',
          text: '¿Cómo se recorre un arreglo?',
          criollo: 'Dos sintaxis válidas para declararlo, pero la recomendada es la que pone los corchetes pegados al tipo.',
        },
        {
          type: 'p',
          text: 'Hay dos formas válidas de declarar un arreglo:',
        },
        {
          type: 'code',
          code: '1. int enteros[] = new int[10];\n\n       o\n\n2. int[] enteros = new int[10];',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Ambas sintaxis son válidas, pero la <strong>forma recomendada es la nro. 2</strong>: <code>int[] enteros</code>.',
        },
        {
          type: 'p',
          text: 'En un arreglo de 10 posiciones, estas se enumerarán <strong>del 0 al 9</strong>. Para recorrer un arreglo hay que <strong>iterar posición por posición</strong>:',
        },
        {
          type: 'code',
          code: 'for(int pos = 0; pos < tamanio; pos++) { … }',
        },
        {
          type: 'p',
          text: 'Esto da la posibilidad de recorrer de 0 hasta 9. Cuando exista una <strong>posición vacía</strong>, el valor a imprimir será el valor por default: 0 en caso de que sea un entero, y <strong>null</strong> en el caso de un arreglo con tipo de dato de referencia.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Recorrer un arreglo de tipo <strong>escalar o primitivo es igual</strong> que uno de referencia: no cambia en nada. Existen otras formas de recorrer un arreglo usando <code>while(…) {…}</code> o <code>do {…} while(…)</code>.',
        },
        {
          type: 'h3',
          text: '¿Cómo saber el tamaño de un arreglo?',
          criollo: 'length, y es un atributo — sin paréntesis. Devuelve un int porque el tamaño máximo de un arreglo entra en un entero.',
        },
        {
          type: 'p',
          text: 'Existe un <strong>atributo (no es un método)</strong> que se llama <code>length</code>. El length arroja un valor que es <strong>del tipo entero</strong>, porque el valor máximo del tamaño de un arreglo es un entero. Entonces:',
        },
        {
          type: 'code',
          code: 'int tamanio = enteros.length;//el tamanio es 10, de 0 a 9',
        },
        {
          type: 'p',
          text: 'Para imprimir:',
        },
        {
          type: 'code',
          code: 'for(int pos = 0; pos < tamanio; pos++) {\n       System.out.println(enteros[pos]);\n}',
        },
        {
          type: 'p',
          text: 'Por ejemplo: la primera vez que se ejecuta este código nos va a imprimir el valor de la posición 0, la segunda vez la 1, la tercera vez la 2, y así sucesivamente.',
        },
        {
          type: 'table',
          caption: 'Valores iniciales de un arreglo recién creado',
          headers: ['Tipo del arreglo', 'Contenido de cada posición'],
          rows: [
            ['int[]', '0'],
            ['boolean[]', 'false'],
            ['float[]', '0.0'],
            ['De referencia (ej: Auto[])', 'null (no hay nada; se guardarían referencias a objetos)'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-32-1', q: 'Un arreglo de boolean recién creado tiene false en todas sus posiciones.', a: true, explain: 'Los arreglos de tipos primitivos guardan en cada posición el valor por default del tipo: 0 para int, false para boolean, 0.0 para float.' },
          { id: 'tf-32-2', q: 'Un arreglo de tipo de dato Referencia arranca con 0 en cada posición.', a: false, explain: 'Arranca con null: en cada posición no va a haber nada.' },
          { id: 'tf-32-3', q: 'length es un método que hay que invocar con paréntesis.', a: false, explain: 'El apunte lo aclara expresamente: length es un atributo, no es un método.' },
          { id: 'tf-32-4', q: 'En un arreglo de 10 posiciones, estas se enumeran del 0 al 9.', a: true, explain: 'Por eso el for va de 0 mientras pos < tamanio.' },
          { id: 'tf-32-5', q: 'Recorrer un arreglo de primitivos es distinto a recorrer uno de referencias.', a: false, explain: 'Recorrer un arreglo de tipo escalar o primitivo es igual que uno de referencia: no cambia en nada.' },
        ],
        mc: [
          {
            id: 'mc-32-1',
            q: '¿Qué guarda cada posición de un arreglo de objetos?',
            options: [
              'Una copia del objeto',
              'Una referencia al objeto',
              'El valor por default del tipo primitivo asociado',
              'El índice del objeto en memoria',
            ],
            correctIndex: 1,
            explain: 'En arreglos de objetos no se guarda el valor dentro de la posición, sino una referencia al objeto.',
          },
          {
            id: 'mc-32-2',
            q: '¿Cuál es la forma recomendada de declarar un arreglo de enteros?',
            options: [
              'int enteros[] = new int[10];',
              'int[] enteros = new int[10];',
              'new int enteros[10];',
              'Array<int> enteros = new Array(10);',
            ],
            correctIndex: 1,
            explain: 'Ambas sintaxis (1 y 2) son válidas, pero la forma recomendada es la nro. 2.',
          },
          {
            id: 'mc-32-3',
            q: '¿Por qué length devuelve un valor de tipo entero?',
            options: [
              'Porque los arreglos solo pueden ser de enteros',
              'Porque siempre devuelve 10',
              'Porque el valor máximo del tamaño de un arreglo es un entero',
              'Porque es un método heredado de Object',
            ],
            correctIndex: 2,
            explain: 'El apunte lo dice textual: el length arroja un valor del tipo entero porque el valor máximo del tamaño de un arreglo es un entero.',
          },
          {
            id: 'mc-32-4',
            q: 'Si recorremos un arreglo de referencias y una posición está vacía, ¿qué se imprime?',
            options: [
              'null',
              '0',
              'false',
              'Una cadena vacía',
            ],
            correctIndex: 0,
            explain: 'Cuando exista una posición vacía el valor a imprimir será el default: 0 si es entero, null si es un arreglo de tipo de dato de referencia.',
          },
        ],
        ms: [
          {
            id: 'ms-32-1',
            q: '¿Qué formas de recorrer un arreglo menciona el apunte?',
            options: [
              'for',
              'while',
              'do...while',
              'switch',
              'goto',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'El ejemplo principal usa for, y el apunte agrega que existen otras formas usando while(…) {…} o do {…} while(…).',
          },
          {
            id: 'ms-32-2',
            q: '¿Cuáles son valores por default correctos en un arreglo de primitivos recién creado?',
            options: [
              'int → 0',
              'boolean → false',
              'float → 0.0',
              'int → null',
              'boolean → 0',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'null es el valor de las posiciones de un arreglo de tipo de dato de referencia, no de primitivos.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-32-1', front: 'Contenido inicial de un arreglo de primitivos', back: 'Los valores por default del tipo: 0 para int, false para boolean, 0.0 para float, etc.' },
        { id: 'fc-32-2', front: 'Contenido inicial de un arreglo de referencias', back: 'null en cada posición: no hay nada guardado.' },
        { id: 'fc-32-3', front: '¿Qué guarda una posición de un arreglo de objetos?', back: 'No guarda el valor dentro de la posición: guarda una referencia al objeto.' },
        { id: 'fc-32-4', front: 'Acceso por posición', back: 'Para escribir: enteros[3] = 158; Para leer: int valor = enteros[4];' },
        { id: 'fc-32-5', front: 'Dos sintaxis de declaración', back: 'int enteros[] = new int[10]; o int[] enteros = new int[10]; Ambas válidas, pero la recomendada es la segunda.' },
        { id: 'fc-32-6', front: 'Recorrido de un arreglo', back: 'for(int pos = 0; pos < tamanio; pos++) { … } — en un arreglo de 10 posiciones, se recorren de 0 a 9.' },
        { id: 'fc-32-7', front: 'length', back: 'Atributo (NO método) que devuelve el tamaño del arreglo como entero, porque el tamaño máximo de un arreglo es un entero. Ej: int tamanio = enteros.length;' },
        { id: 'fc-32-8', front: '¿Cambia el recorrido según el tipo del arreglo?', back: 'No: recorrer un arreglo de tipo escalar o primitivo es igual que uno de referencia.' },
      ],
    },
    {
      id: '33',
      unit: 'diseno-clases',
      title: 'Conversión de tipos primitivos y promoción numérica',
      criollo: 'Meter un int en un long es gratis: el contenedor es más grande y no perdés nada. Al revés hay que castear y podés perder información feo (un long gigante puede terminar valiendo cualquier cosa como int). Los chars son el capítulo raro: para ir de byte a char pasá primero por int. Y en las operaciones aritméticas Java "promueve" todo a un tipo común antes de operar.',
      blocks: [
        {
          type: 'h3',
          text: 'De un contenedor chico a uno grande (y al revés)',
          criollo: 'Para arriba es trivial y sin pérdida. Para abajo hay que castear explícitamente y agarrate.',
        },
        {
          type: 'p',
          text: 'La conversión entre tipos primitivos es relativamente sencilla, siempre que se tengan en cuenta ciertos conceptos. Convertir desde un tipo <strong>"más chico" a uno "más grande"</strong> es la operación de conversión más sencilla:',
        },
        {
          type: 'code',
          code: 'int entero = 478;\nlong numero = entero;',
        },
        {
          type: 'p',
          text: 'Este es un caso trivial, ya que no debería haber problema en acomodar un número de <strong>32 bits (int)</strong> en un espacio de <strong>64 bits (long)</strong>. Ocurre lo mismo con los números de punto flotante. Siempre que me mueva hacia un "contenedor más grande" <strong>no habrá pérdida de información</strong>.',
        },
        {
          type: 'p',
          text: 'A su vez, es posible pasar desde un tipo entero a uno de punto flotante: la parte decimal se llenará con ceros para completar el valor.',
        },
        {
          type: 'code',
          code: 'int entero = 241;\ndouble numeroConComa = entero; // numero con coma será 241.0',
        },
        {
          type: 'p',
          text: 'El <strong>caso inverso</strong> sería pasar de un contenedor más grande a uno más pequeño. En estos casos <strong>puede haber pérdida de información</strong> de acuerdo al tamaño del valor de origen. Por ejemplo:',
        },
        {
          type: 'code',
          code: 'long entero64 = 8223372036854775807l;\nint entero32 = (int)entero64; //entero32 vale ahora: 1486618623',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Hay que tener cuidado al momento de este tipo de conversiones, dado que puede causar <strong>efectos secundarios indeseados</strong> en nuestro sistema.',
        },
        {
          type: 'h3',
          text: 'El caso de los caracteres',
          criollo: 'byte → char es un quilombo con los bits de signo. La receta del apunte: pasá primero por int.',
        },
        {
          type: 'p',
          text: 'En el caso especial de que se quiera convertir de un tipo <strong>byte</strong> a un tipo <strong>char</strong>, hay que tener en cuenta lo siguiente:',
        },
        {
          type: 'code',
          code: '// el entero 165, al pasarlo a byte vale: -91 -> 0b10100101\nbyte caracterComoByte = (byte)165; \n\n// esto da el caracter que es: 0b11111111 10100101 sin signo\nchar caracterComoChar = (char) caracterComoByte; \n\n// si voy a un "contenedor mas grande" entonces obtengo:\n// 0b11111111 10100101 que es el numero entero: 65445\nint caracterComoEntero = caracterComoChar; \n\n//y al volver 65445 a byte, se pierden los bits más significativos\n//(porque me voy a un contenedor mas chico)\n//entonces obtenemos: -91 -> 0b10100101\nbyte caracterComoByteNuevo = (byte)caracterComoEntero;',
        },
        {
          type: 'p',
          text: 'La representación binaria del número 165 es la misma que para el -91, excepto por la <strong>interpretación del bit que indica el signo</strong>. El valor en tipo char resulta en un valor de carácter <strong>UNICODE</strong>. A su vez, al pasarlo a un tipo int quedaron los 8 bits menos significativos iguales, resultando en el mismo -91.',
        },
        {
          type: 'p',
          text: 'Es importante notar que, si todo esto hubiera arrancado <strong>desde un tipo char</strong>, los resultados no hubieran sido consistentes:',
        },
        {
          type: 'code',
          code: '//aca 165 se toma como entero, no como char\n// al ponerlo en un tipo char, solo pierdo los bits de signo:\nchar caracterComoChar2 = 165; \n\n//entonces obtengo: 0b00000000 10100101, que es el mismo 165\n// si me paso a un "contenedor mas grande"\n// no pierdo ni gano información, solo se rellenan con ceros \n// los bits mas significativos => 0b00000000 10100101 \nint caracterComoEntero2 = caracterComoChar2; // este entero es 165\n\n//pero al convertirlo a byte SI pierdo información\n//porque byte es un contenedor "mas chico" que int\nbyte caracterComoByte2 = (byte)caracterComoEntero; //-91',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Es importante entender que para convertir de tipo <strong>byte a char</strong> conviene <strong>pasar primero por un int</strong> y luego convertir a char, para no perder información en el camino.',
        },
        {
          type: 'h3',
          text: 'Promoción numérica',
          criollo: 'Antes de operar, Java lleva los dos operandos a un tipo común. Por eso sumar dos bytes te da un int y tenés que castear el resultado.',
        },
        {
          type: 'p',
          text: 'Hay una serie de reglas que se aplican al momento de hacer <strong>operaciones</strong>. Se trata de utilizar un <strong>tipo en común</strong> para realizar la operación. Según la especificación del lenguaje para Java en su última versión (Java 13), Cap. 5, sección 6, punto 2, las conversiones se toman en el siguiente orden:',
        },
        {
          type: 'ol',
          items: [
            'Si alguno de los operandos es <strong>double</strong>, el otro se convierte a double.',
            'Si alguno de los operandos es <strong>float</strong>, el otro se convierte a float.',
            'Si alguno de los operandos es <strong>long</strong>, el otro se convierte a long.',
            'De lo contrario, ambos operadores son considerados <strong>int</strong>.',
          ],
        },
        {
          type: 'p',
          text: 'Para más información se puede consultar la especificación en <code>https://docs.oracle.com/javase/specs/jls/se13/html/index.html</code> o descargarla desde <code>https://docs.oracle.com/javase/specs/jls/se13/jls13.pdf</code>.',
        },
        {
          type: 'p',
          text: 'Ejemplo:',
        },
        {
          type: 'code',
          code: 'byte unByte = 7;\nbyte otroByte = 9;\n//el resultado deberá ser casteado, porque según las reglas\n//ambos se consideran int\nbyte resultado = (byte) (unByte + otroByte);',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-33-1', q: 'Pasar de int a long no requiere cast explícito y no pierde información.', a: true, explain: 'No debería haber problema en acomodar un número de 32 bits (int) en un espacio de 64 bits (long): siempre que se vaya a un contenedor más grande no hay pérdida.' },
          { id: 'tf-33-2', q: 'Convertir un long grande a int nunca causa pérdida de información.', a: false, explain: 'Puede haber pérdida de acuerdo al tamaño del valor de origen: el ejemplo pasa de 8223372036854775807l a 1486618623.' },
          { id: 'tf-33-3', q: 'Al pasar un int a double, la parte decimal se llena con ceros.', a: true, explain: 'int entero = 241; double numeroConComa = entero; da 241.0.' },
          { id: 'tf-33-4', q: 'Si uno de los operandos de una operación es float y el otro int, ambos se consideran int.', a: false, explain: 'Si alguno de los operandos es float, el otro se convierte a float. Solo si no hay double, float ni long ambos se consideran int.' },
          { id: 'tf-33-5', q: 'Para convertir de byte a char conviene pasar primero por int.', a: true, explain: 'Es la recomendación explícita del apunte, para no perder información en el camino.' },
        ],
        mc: [
          {
            id: 'mc-33-1',
            q: '¿Por qué "byte resultado = unByte + otroByte;" no compila sin cast?',
            options: [
              'Porque byte no admite el operador +',
              'Porque el resultado excede el rango del byte siempre',
              'Porque los bytes deben inicializarse en 0',
              'Porque por promoción numérica ambos operandos se consideran int',
            ],
            correctIndex: 3,
            explain: 'De lo contrario (si no hay double, float ni long) ambos operadores son considerados int, así que el resultado debe castearse a byte.',
          },
          {
            id: 'mc-33-2',
            q: 'Según las reglas de promoción numérica, ¿cuál se evalúa primero?',
            options: [
              'Si alguno de los operandos es double',
              'Si alguno de los operandos es long',
              'Si alguno de los operandos es float',
              'Si ambos son int',
            ],
            correctIndex: 0,
            explain: 'El orden es: double, float, long y, de lo contrario, int.',
          },
          {
            id: 'mc-33-3',
            q: 'En el ejemplo del apunte, "byte caracterComoByte = (byte)165;" vale...',
            options: [
              '165',
              '-91',
              '65445',
              '0',
            ],
            correctIndex: 1,
            explain: 'El entero 165 al pasarlo a byte vale -91 (0b10100101): misma representación binaria, distinta interpretación del bit de signo.',
          },
          {
            id: 'mc-33-4',
            q: 'El valor de un tipo char resulta en...',
            options: [
              'Un valor de carácter UNICODE',
              'Un valor booleano',
              'Un número de punto flotante',
              'Una cadena de un solo carácter',
            ],
            correctIndex: 0,
            explain: 'El apunte lo dice textual al explicar el caso de los caracteres.',
          },
        ],
        ms: [
          {
            id: 'ms-33-1',
            q: '¿Cuáles son conversiones "hacia un contenedor más grande" sin pérdida de información?',
            options: [
              'int a long',
              'int a double',
              'long a int',
              'char a int',
              'int a byte',
            ],
            correctIndexes: [0, 1, 3],
            explain: 'long a int e int a byte van hacia contenedores más chicos y pueden perder información.',
          },
          {
            id: 'ms-33-2',
            q: '¿Qué reglas de promoción numérica enumera el apunte?',
            options: [
              'Si alguno es double, el otro se convierte a double',
              'Si alguno es float, el otro se convierte a float',
              'Si alguno es long, el otro se convierte a long',
              'Si alguno es char, el otro se convierte a char',
              'De lo contrario, ambos se consideran int',
            ],
            correctIndexes: [0, 1, 2, 4],
            explain: 'La regla del char no existe: las cuatro reglas son double, float, long y por defecto int.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-33-1', front: 'Conversión hacia un contenedor más grande', back: 'Es la más sencilla y no hay pérdida de información. Ej: int entero = 478; long numero = entero;' },
        { id: 'fc-33-2', front: 'int a double', back: 'Es posible pasar de entero a punto flotante: la parte decimal se llena con ceros. int 241 → double 241.0.' },
        { id: 'fc-33-3', front: 'Conversión hacia un contenedor más chico', back: 'Requiere cast explícito y puede haber pérdida de información según el tamaño del valor de origen. Ej: (int) de un long enorme da 1486618623.' },
        { id: 'fc-33-4', front: '165 pasado a byte', back: 'Vale -91 (0b10100101): la representación binaria es la misma, cambia la interpretación del bit de signo.' },
        { id: 'fc-33-5', front: 'Valor de un char', back: 'Resulta en un valor de carácter UNICODE.' },
        { id: 'fc-33-6', front: 'Receta byte → char', back: 'Pasar primero por un int y después convertir a char, para no perder información en el camino.' },
        { id: 'fc-33-7', front: 'Promoción numérica', back: 'Reglas para usar un tipo común al operar: 1) si alguno es double → double; 2) si alguno es float → float; 3) si alguno es long → long; 4) de lo contrario, ambos son int.' },
        { id: 'fc-33-8', front: 'byte + byte', back: 'Ambos se consideran int por promoción numérica, así que el resultado debe castearse: byte resultado = (byte)(unByte + otroByte);' },
      ],
    },
    {
      id: '34',
      unit: 'diseno-clases',
      title: 'Conversión de tipos de referencia: upcasting, downcasting e instanceof',
      criollo: 'Ir para arriba (Empleado → Persona) es implícito y siempre seguro, pero perdés acceso a lo que es propio de la subclase. Ir para abajo hay que pedirlo con un cast explícito: le "prometés" al compilador que ahí adentro hay un Ejecutivo. Si le mentís no falla al compilar, te explota en ejecución con un ClassCastException. La red de seguridad es instanceof.',
      blocks: [
        {
          type: 'h3',
          text: 'La jerarquía de ejemplo',
          criollo: 'Ejecutivo → Empleado → Persona. Por transitividad, un Ejecutivo es una Persona.',
        },
        {
          type: 'p',
          text: 'El concepto de herencia en su más básica expresión es sencillo: una <strong>sub-clase hereda de otra super-clase</strong> sus atributos y operaciones. Por ejemplo, una clase <strong>Ejecutivo</strong> heredaría todos los atributos y operaciones de una clase <strong>Empleado</strong>, que a su vez heredaría todo de una clase <strong>Persona</strong>.',
        },
        {
          type: 'p',
          text: 'Entonces, a un Ejecutivo se lo puede considerar un Empleado (de hecho, en la realidad lo es), y a un Empleado se lo puede considerar una Persona. <strong>Por carácter transitivo</strong>, entonces, un Ejecutivo es una Persona.',
        },
        {
          type: 'h3',
          text: 'Upcasting',
          criollo: 'Hacia arriba: implícito, sin drama. Pero la variable es del tipo de arriba, así que solo ves lo que hace la superclase.',
        },
        {
          type: 'p',
          text: 'La conversión de tipos <strong>"hacia arriba"</strong> se hace de manera <strong>implícita</strong>:',
        },
        {
          type: 'code',
          code: "Empleado e = new Empleado();//'e' aquí guarda un objeto Empleado\nEmpleado e2 = new Empleado();//'e2' aquí guarda un objeto Empleado\n\nPersona p = new Persona();//'p' aquí guarda un objeto Persona\n\n//entonces, según lo dicho es razonable poder hacer:\nPersona x = e; //porque todo Empleado es Persona.\n\n//podemos hacerlo explícitamente también:\nPersona y = (Persona)e2;",
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Es importante notar que, por más que "x" e "y" sean empleados, <strong>el tipo de la variable es Persona</strong>, por lo cual solo tendremos acceso a las <strong>características y operaciones de Persona</strong>.',
        },
        {
          type: 'h3',
          text: 'Downcasting',
          criollo: 'Hacia abajo: el compilador no te lo regala, porque no toda Persona es un Ejecutivo. Se lo tenés que prometer con un cast explícito.',
        },
        {
          type: 'p',
          text: 'Se trata de la conversión de tipos <strong>"hacia abajo"</strong>: de la superclase hacia la subclase.',
        },
        {
          type: 'code',
          code: 'Persona p = new Persona(); //(*)',
        },
        {
          type: 'p',
          text: 'Esto no tiene nada de nuevo, pero si escribo:',
        },
        {
          type: 'code',
          code: 'Persona p2 = new Ejecutivo()',
        },
        {
          type: 'p',
          text: 'Esto está bien: por la estructura jerárquica descripta, el compilador es capaz de interpretarlo como correcto. Pero <strong>el camino inverso no necesariamente es cierto</strong>. Por ejemplo, si tenemos:',
        },
        {
          type: 'code',
          code: 'Ejecutivo ej = new Persona();',
        },
        {
          type: 'p',
          text: 'Todo Ejecutivo es una Persona, pero <strong>no toda Persona es necesariamente un Ejecutivo</strong>. Ahora bien, supongamos que hacemos lo siguiente:',
        },
        {
          type: 'code',
          code: 'Persona p3 = new Ejecutivo();//(**)',
        },
        {
          type: 'p',
          text: 'Que no tiene nada de malo, ya que el compilador lo entiende como correcto. Acá hay una <strong>conversión de tipos implícita</strong>, es decir, hay un <strong>cast implícito</strong>. Por otro lado, si hago:',
        },
        {
          type: 'code',
          code: 'Ejecutivo eje = p;',
        },
        {
          type: 'p',
          text: 'El compilador sabe que no necesariamente toda persona es un ejecutivo (alguna puede serlo), por lo que arrojará un <strong>error de compilación</strong>. Pero podemos decirle al compilador, <strong>"prometerle"</strong>, que efectivamente en p almacenamos una instancia de Ejecutivo mediante un <strong>downcast explícito</strong>:',
        },
        {
          type: 'code',
          code: 'Ejecutivo eje2 = (Ejecutivo)p3;',
        },
        {
          type: 'h3',
          text: 'Instanceof',
          criollo: 'Si le mentís al compilador, la promesa se cobra en ejecución: ClassCastException. instanceof es el chequeo previo para no comerte ese misil.',
        },
        {
          type: 'p',
          text: '¿Qué pasa si con esto le estoy <strong>"mintiendo"</strong> al compilador?',
        },
        {
          type: 'code',
          code: '//aca le prometo al compilador, y le estoy cumpliendo\nEjecutivo eje2 = (Ejecutivo)p3; //(ver **)\n//aca estoy "mintiendo" porque en p (ver *) guardé una persona\nEjecutivo eje = (Ejecutivo)p;',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'En este caso <strong>no obtendremos un error en momento de compilación</strong>, sino que en momento de ejecución obtendremos un error de casteo: una <strong>ClassCastException</strong>. El compilador analiza la sintaxis del código, <strong>no lo ejecuta</strong>. Lo que ocurre durante la ejecución es distinto.',
        },
        {
          type: 'p',
          text: '¿Y si fue un error involuntario? Antes de castear podemos asegurarnos de que puede hacerse correctamente. Para eso existe el operador <strong>instanceof</strong>. El operador instanceof <strong>no es un método, es un operador</strong> (como el + o el *): sirve para averiguar si una variable efectivamente está almacenando una instancia de una clase u otra. El uso de instanceof es el siguiente:',
        },
        {
          type: 'code',
          code: 'miVarible instanceof MiClase;',
        },
        {
          type: 'p',
          text: 'Si <code>miVariable</code> está almacenando un objeto de tipo <code>MiClase</code>, entonces la operación devolverá un <strong>true</strong>. De lo contrario, un <strong>false</strong>. Ejemplo:',
        },
        {
          type: 'code',
          code: 'if(p instanceof Ejecutivo) {\n//siempre puedo castear, pero aca evito un error durante la ejecucion\nEjecutivo eje = (Ejecutivo)p; \n}',
        },
        {
          type: 'table',
          caption: 'Upcasting vs. downcasting',
          headers: ['', 'Upcasting', 'Downcasting'],
          rows: [
            ['Dirección', 'De la subclase hacia la superclase', 'De la superclase hacia la subclase'],
            ['Cast', 'Implícito (puede escribirse explícito igual)', 'Explícito y obligatorio'],
            ['Riesgo', 'Ninguno, pero se pierde acceso a lo propio de la subclase', 'ClassCastException en ejecución si el objeto no era de esa clase'],
            ['Chequeo previo', 'No hace falta', 'instanceof'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-34-1', q: 'El upcasting se hace de manera implícita.', a: true, explain: 'La conversión "hacia arriba" es implícita: Persona x = e; funciona porque todo Empleado es Persona. También puede escribirse explícitamente.' },
          { id: 'tf-34-2', q: 'Con "Persona x = e;" donde e es un Empleado, se puede acceder a las operaciones propias de Empleado.', a: false, explain: 'El tipo de la variable es Persona, por lo cual solo tendremos acceso a las características y operaciones de Persona.' },
          { id: 'tf-34-3', q: '"Ejecutivo ej = new Persona();" es válido porque toda Persona es un Ejecutivo.', a: false, explain: 'Todo Ejecutivo es una Persona, pero no toda Persona es necesariamente un Ejecutivo.' },
          { id: 'tf-34-4', q: 'Un downcast que "miente" produce un error de compilación.', a: false, explain: 'No hay error de compilación: el error aparece en ejecución como ClassCastException. El compilador analiza la sintaxis, no ejecuta.' },
          { id: 'tf-34-5', q: 'instanceof es un operador, no un método.', a: true, explain: 'El apunte lo remarca: es un operador como el + o el *.' },
        ],
        mc: [
          {
            id: 'mc-34-1',
            q: '¿Qué error se produce al castear a Ejecutivo una variable que guarda una Persona común?',
            options: [
              'NullPointerException',
              'ClassCastException, en tiempo de ejecución',
              'Un error de compilación',
              'ArrayIndexOutOfBoundsException',
            ],
            correctIndex: 1,
            explain: 'No obtendremos un error en momento de compilación, sino en ejecución: un error de casteo, una ClassCastException.',
          },
          {
            id: 'mc-34-2',
            q: '¿Para qué sirve el operador instanceof?',
            options: [
              'Para crear una instancia de una clase',
              'Para convertir automáticamente entre tipos',
              'Para averiguar si una variable está almacenando una instancia de una clase u otra',
              'Para comparar el contenido de dos objetos',
            ],
            correctIndex: 2,
            explain: 'Devuelve true si miVariable está almacenando un objeto de tipo MiClase; de lo contrario, false.',
          },
          {
            id: 'mc-34-3',
            q: 'En la jerarquía Ejecutivo → Empleado → Persona, un Ejecutivo es una Persona...',
            options: [
              'Solo si se hace un cast explícito',
              'Por carácter transitivo',
              'Solo dentro de un bloque instanceof',
              'Nunca, porque son niveles distintos',
            ],
            correctIndex: 1,
            explain: 'Ejecutivo es Empleado y Empleado es Persona; por carácter transitivo, Ejecutivo es Persona.',
          },
          {
            id: 'mc-34-4',
            q: '"Persona p3 = new Ejecutivo();" es un ejemplo de...',
            options: [
              'Un cast implícito hacia arriba',
              'Un downcast explícito',
              'Una sobrecarga de constructores',
              'Un error de compilación',
            ],
            correctIndex: 0,
            explain: 'El compilador lo entiende como correcto: hay una conversión de tipos implícita, un cast implícito.',
          },
        ],
        ms: [
          {
            id: 'ms-34-1',
            q: '¿Qué afirmaciones sobre el downcasting son correctas?',
            options: [
              'Va de la superclase hacia la subclase',
              'Requiere un cast explícito para que compile',
              'Puede fallar en ejecución con ClassCastException',
              'instanceof permite chequear antes de castear',
              'Nunca compila, en ningún caso',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Compila perfectamente cuando se hace el cast explícito: el problema aparece recién en ejecución si el objeto no era de esa clase.',
          },
          {
            id: 'ms-34-2',
            q: '¿Cuáles de estas líneas provocan un error de compilación según el apunte?',
            options: [
              'Persona x = e; (e es Empleado)',
              'Ejecutivo eje = p; (p es Persona, sin cast)',
              'Persona p2 = new Ejecutivo();',
              'Ejecutivo eje2 = (Ejecutivo)p3;',
              'Persona y = (Persona)e2;',
            ],
            correctIndexes: [1],
            explain: 'Solo la asignación sin cast de una Persona a una variable Ejecutivo falla en compilación. Las demás son upcasts o downcasts explícitos válidos sintácticamente.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-34-1', front: 'Jerarquía de ejemplo del apunte', back: 'Ejecutivo hereda de Empleado, que hereda de Persona. Por carácter transitivo, un Ejecutivo es una Persona.' },
        { id: 'fc-34-2', front: 'Upcasting', back: 'Conversión "hacia arriba" (subclase → superclase). Se hace de manera implícita: Persona x = e; También puede escribirse explícito: Persona y = (Persona)e2;' },
        { id: 'fc-34-3', front: 'Limitación del upcasting', back: 'Por más que la variable guarde un Empleado, si su tipo es Persona solo tendremos acceso a las características y operaciones de Persona.' },
        { id: 'fc-34-4', front: 'Downcasting', back: 'Conversión "hacia abajo" (superclase → subclase). Requiere un cast explícito: Ejecutivo eje2 = (Ejecutivo)p3;' },
        { id: 'fc-34-5', front: '¿Por qué "Ejecutivo eje = p;" no compila?', back: 'Porque el compilador sabe que no necesariamente toda persona es un ejecutivo. Hay que "prometérselo" con un downcast explícito.' },
        { id: 'fc-34-6', front: 'ClassCastException', back: 'Error de casteo que ocurre en tiempo de ejecución cuando el downcast explícito "mintió": el objeto no era realmente de esa clase. El compilador analiza sintaxis, no ejecuta.' },
        { id: 'fc-34-7', front: 'instanceof', back: 'Operador (no método, como el + o el *) que devuelve true si la variable está almacenando un objeto de esa clase, y false en caso contrario. Uso: miVariable instanceof MiClase;' },
        { id: 'fc-34-8', front: 'Patrón seguro de downcast', back: 'if(p instanceof Ejecutivo) { Ejecutivo eje = (Ejecutivo)p; } — siempre se puede castear, pero así se evita un error durante la ejecución.' },
      ],
    },
    {
      id: '15',
      unit: 'relaciones',
      title: 'Cardinalidad: cuántos objetos hay de cada lado',
      criollo: 'Los objetos no viven solos: se mandan mensajes y de ahí salen relaciones. La primera forma de clasificarlas es contando: cuántos hay de un lado, cuántos del otro. Uno a uno, uno a muchos, muchos a uno, muchos a muchos. En el código eso se traduce en si guardás un atributo suelto o un arreglo.',
      blocks: [
        {
          type: 'h3',
          text: 'Cómo se relacionan los objetos',
          criollo: 'Uno manda un mensaje, el otro contesta con el resultado. De ese ida y vuelta salen las relaciones.',
        },
        {
          type: 'p',
          text: 'Los objetos se comunican, se relacionan entre sí, <strong>enviándose mensajes</strong>. Cuando los objetos se envían mensajes entre sí para ejecutar una operación, el objeto receptor responde con otro mensaje: el resultado de esa operación que se ejecutó.',
        },
        {
          type: 'p',
          text: 'En este intercambio de mensajes se generan relaciones, y las relaciones entre objetos se clasifican de acuerdo a diferentes criterios, basados en las siguientes <strong>3 formas fundamentales</strong>:',
        },
        {
          type: 'ol',
          items: [
            'Cardinalidad.',
            'Direccionalidad.',
            'Ordinalidad.',
          ],
        },
        {
          type: 'h3',
          text: 'Cardinalidad: concepto',
          criollo: 'Contar, nada más. Cuántos de cada lado.',
        },
        {
          type: 'p',
          text: 'Da cuenta de <strong>cuántos objetos existen de cada lado de la relación</strong>. Considerando una relación binaria entre el juego de entidades A y el B, la cardinalidad puede ser:',
        },
        {
          type: 'ul',
          items: [
            'Uno a uno.',
            'Uno a muchos o muchos a uno.',
            'Muchos a muchos.',
          ],
        },
        {
          type: 'h3',
          text: 'Uno a uno',
          criollo: 'Un Auto, un Motor. Del lado del código: un atributo suelto, sin arreglo.',
        },
        {
          type: 'p',
          text: 'Una entidad en A está asociada con cualquier número (0 o más) de entidades en B.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/cardinalidad-uno-a-uno.png',
          alt: 'Diagrama UML con dos cajas, Auto (con el atributo motor : Motor) y Motor, unidas por un rombo y una flecha, con un 1 de cada lado de la relación.',
          caption: 'Relación uno a uno: un 1 de cada lado de la línea que une Auto con Motor.',
        },
        {
          type: 'p',
          text: '<strong>Ejemplo de código:</strong> un Auto tiene un solo Motor.',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.unoAuno;\n\n/**\n * Relacion 1-a-1 de Auto con Motor\n */\npublic class Auto {\n\n    Motor motor;\n\n    int velocidadMaxima;\n    String marca;\n}',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.unoAuno;\n\npublic class Motor {\n\n    private String fabricante;\n    private String potencia;\n\n}',
        },
        {
          type: 'h3',
          text: 'Uno a muchos',
          criollo: 'Acá aparece el arreglo. Un vehículo, muchas ruedas — y el comentario del apunte se toma el trabajo de listar cuántas van según el bicho.',
        },
        {
          type: 'p',
          text: 'Una entidad en A está asociada con cualquier número (0 o más) de entidades en B.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/cardinalidad-uno-a-muchos.png',
          alt: 'Diagrama UML con la caja Vehículo (atributo rueda : Ruedas[]) unida por un rombo y una flecha a otra caja, con un 1 del lado del vehículo y una N del otro lado.',
          caption: 'Relación uno a muchos: 1 de un lado, N del otro.',
        },
        {
          type: 'p',
          text: '<strong>Ejemplo de código:</strong> un vehículo puede tener uno o más ruedas.',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.unoAmuchos;\n\n/**\n * Relacion 1-a-N\n * Ruedas puede ser un arreglo de longitud:\n * - 0 (un vehículo sin ruedas, ej. un aerodeslizador)\n * - 1 un monociclo\n * - 2 una bicilceta, una moto\n * - 3 un triciclo\n * - 4 un auto\n * - 6 un camión\n * - etc.....\n */\npublic class Vehiculo {\n\n    Rueda[] ruedas;\n\n    String fabricante;\n    float precio;\n}',
        },
        {
          type: 'h3',
          text: 'Muchos a uno',
          criollo: 'Es la misma relación mirada al revés: muchos empleados caen en un solo departamento.',
        },
        {
          type: 'p',
          text: 'Una entidad en A está asociada con cualquier número (0 o más) de entidades en B.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/cardinalidad-muchos-a-uno.png',
          alt: 'Diagrama UML con la caja Empleado (atributo departamento : Departamento) unida a la caja Departamento, con una N del lado del empleado y un 1 del lado del departamento.',
          caption: 'Relación muchos a uno: N empleados apuntan a 1 departamento.',
        },
        {
          type: 'p',
          text: '<strong>Ejemplo de código:</strong> se supone que un empleado trabaja en un departamento (si se es responsable del área de sueldos, no se puede ser responsable del área de seguridad informática).',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.muchosAUno;\n\npublic class Empleado {\n\n    String nombre;\n    Departamento departamentoActual;\n}',
        },
        {
          type: 'h3',
          text: 'Muchos a muchos',
          criollo: 'Arreglo de los dos lados. Cada uno se guarda una lista del otro.',
        },
        {
          type: 'p',
          text: 'Una entidad en A está asociada con cualquier número de entidades en B (0 o más) <strong>y viceversa</strong>.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/laboratorio-1/cardinalidad-muchos-a-muchos.png',
          alt: 'Diagrama UML con las cajas Vendedor (atributo sucursales : Sucursal[]) y Sucursal (atributo vendedores : Vendedor[]) unidas por dos flechas con rombos, marcadas N y M en ambos sentidos.',
          caption: 'Relación muchos a muchos: N y M en los dos sentidos, con un arreglo de cada lado.',
        },
        {
          type: 'p',
          text: '<strong>Ejemplo de código I:</strong> los vendedores deben rotar por una serie de sucursales, una vez por mes.',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.muchosAmuchos;\n\npublic class Vendedor {\n\n    String nombre;\n    Sucursal[] sucursalesAsignadas;\n\n}',
        },
        {
          type: 'p',
          text: '<strong>Ejemplo de código II:</strong> una sucursal tiene un equipo de vendedores. Cada uno de ellos puede tener una serie de sucursales asignadas por las que debe rotar.',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.muchosAmuchos;\n\npublic class Sucursal {\n\n    Vendedor[] equipoVendedores;\n\n}',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Ojo con la letra chica del apunte: usa la misma frase ("Una entidad en A está asociada con cualquier número (0 o más) de entidades en B") como definición de uno a uno, uno a muchos y muchos a uno. La diferencia real entre los tres casos se ve en los diagramas (1-1, 1-N, N-1) y en el código, no en esa oración.',
        },
      ],
      quiz: {
        tf: [
          {
            id: 'tf-15-1',
            q: 'Cuando un objeto recibe un mensaje para ejecutar una operación, responde con otro mensaje que contiene el resultado de esa operación.',
            a: true,
            explain: 'Es textual del apunte: el objeto receptor responde con otro mensaje, que es el resultado de la operación que se ejecutó.',
          },
          {
            id: 'tf-15-2',
            q: 'Las relaciones entre objetos se clasifican en base a cuatro formas fundamentales.',
            a: false,
            explain: 'Son tres: cardinalidad, direccionalidad y ordinalidad.',
          },
          {
            id: 'tf-15-3',
            q: 'La cardinalidad da cuenta de cuántos objetos existen de cada lado de la relación.',
            a: true,
            explain: 'Esa es la definición del apunte. Es la forma "de contar" la relación.',
          },
          {
            id: 'tf-15-4',
            q: 'En el ejemplo uno a muchos, la clase Vehiculo guarda las ruedas en un arreglo Rueda[].',
            a: true,
            explain: 'El código declara <code>Rueda[] ruedas;</code>, y el comentario aclara que el arreglo puede tener longitud 0, 1, 2, 3, 4, 6, etc.',
          },
          {
            id: 'tf-15-5',
            q: 'En la relación muchos a muchos del apunte, solo la clase Vendedor guarda una referencia al otro lado de la relación.',
            a: false,
            explain: 'Las dos guardan un arreglo: Vendedor tiene <code>Sucursal[] sucursalesAsignadas</code> y Sucursal tiene <code>Vendedor[] equipoVendedores</code>.',
          },
        ],
        mc: [
          {
            id: 'mc-15-1',
            q: '¿Cuáles son las tres formas fundamentales en las que se basan los criterios de clasificación de las relaciones entre objetos?',
            options: [
              'Herencia, polimorfismo y encapsulamiento',
              'Cardinalidad, direccionalidad y ordinalidad',
              'Agregación, composición y asociación',
              'Clase, objeto y atributo',
            ],
            correctIndex: 1,
            explain: 'El apunte las enumera así: 1. Cardinalidad. 2. Direccionalidad. 3. Ordinalidad.',
          },
          {
            id: 'mc-15-2',
            q: 'En el ejemplo de código uno a uno, ¿qué atributo tiene la clase Auto para relacionarse con Motor?',
            options: [
              'Motor[] motores;',
              'private Motor motor;',
              'Motor motor;',
              'String motor;',
            ],
            correctIndex: 2,
            explain: 'La clase Auto declara <code>Motor motor;</code> (sin modificador de visibilidad y sin arreglo, porque es uno solo).',
          },
          {
            id: 'mc-15-3',
            q: 'Según el comentario del código de Vehiculo, un arreglo de ruedas de longitud 0 corresponde a...',
            options: [
              'Un monociclo',
              'Un aerodeslizador',
              'Un triciclo',
              'Un camión',
            ],
            correctIndex: 1,
            explain: 'El comentario dice: "0 (un vehículo sin ruedas, ej. un aerodeslizador)". El monociclo es 1, el triciclo 3 y el camión 6.',
          },
          {
            id: 'mc-15-4',
            q: '¿Cuál es el ejemplo que da el apunte para la cardinalidad muchos a uno?',
            options: [
              'Un auto tiene un solo motor',
              'Un vehículo puede tener una o más ruedas',
              'Se supone que un empleado trabaja en un departamento',
              'Una sucursal tiene un equipo de vendedores',
            ],
            correctIndex: 2,
            explain: 'Muchos empleados apuntan a un mismo departamento: si sos responsable del área de sueldos, no podés ser responsable del área de seguridad informática.',
          },
        ],
        ms: [
          {
            id: 'ms-15-1',
            q: 'Según el apunte, ¿qué cardinalidades puede tener una relación binaria entre las entidades A y B?',
            options: [
              'Uno a uno',
              'Uno a muchos',
              'Muchos a uno',
              'Muchos a muchos',
              'Ninguno a ninguno',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte lista uno a uno, uno a muchos o muchos a uno, y muchos a muchos. "Ninguno a ninguno" no existe como cardinalidad.',
          },
          {
            id: 'ms-15-2',
            q: '¿Qué atributos declara la clase Motor en el ejemplo de código uno a uno?',
            options: [
              'private String fabricante;',
              'private String potencia;',
              'Auto auto;',
              'int velocidadMaxima;',
              'String marca;',
            ],
            correctIndexes: [0, 1],
            explain: 'Motor solo tiene fabricante y potencia, los dos private String. velocidadMaxima y marca son de Auto, y Motor no guarda referencia al Auto.',
          },
          {
            id: 'ms-15-3',
            q: '¿Qué clases del apunte declaran un arreglo como atributo de la relación?',
            options: [
              'Auto',
              'Vehiculo',
              'Empleado',
              'Vendedor',
              'Sucursal',
            ],
            correctIndexes: [1, 3, 4],
            explain: 'Vehiculo tiene <code>Rueda[] ruedas</code>, Vendedor tiene <code>Sucursal[] sucursalesAsignadas</code> y Sucursal tiene <code>Vendedor[] equipoVendedores</code>. Auto y Empleado guardan un objeto suelto.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-15-1', front: 'Cómo se relacionan los objetos', back: 'Comunicándose: se envían mensajes. El objeto receptor responde con otro mensaje, que es el resultado de la operación ejecutada.' },
        { id: 'fc-15-2', front: 'Las 3 formas fundamentales', back: 'Cardinalidad, direccionalidad y ordinalidad. Sobre ellas se basan los criterios que clasifican las relaciones entre objetos.' },
        { id: 'fc-15-3', front: 'Cardinalidad', back: 'Da cuenta de cuántos objetos existen de cada lado de la relación. En una relación binaria entre A y B puede ser uno a uno, uno a muchos o muchos a uno, y muchos a muchos.' },
        { id: 'fc-15-4', front: 'Uno a uno (ejemplo)', back: 'Un Auto tiene un solo Motor. En código: la clase Auto declara el atributo Motor motor;' },
        { id: 'fc-15-5', front: 'Uno a muchos (ejemplo)', back: 'Un vehículo puede tener una o más ruedas. En código: Rueda[] ruedas; el arreglo puede tener 0 (aerodeslizador), 1 (monociclo), 2 (bici o moto), 3 (triciclo), 4 (auto), 6 (camión), etc.' },
        { id: 'fc-15-6', front: 'Muchos a uno (ejemplo)', back: 'Se supone que un empleado trabaja en un departamento. En código: Empleado declara Departamento departamentoActual;' },
        { id: 'fc-15-7', front: 'Muchos a muchos (ejemplo)', back: 'Los vendedores rotan por varias sucursales y cada sucursal tiene su equipo. En código: Vendedor tiene Sucursal[] sucursalesAsignadas y Sucursal tiene Vendedor[] equipoVendedores.' },
        { id: 'fc-15-8', front: 'Muchos a muchos (definición)', back: 'Una entidad en A está asociada con cualquier número de entidades en B (0 o más) y viceversa.' },
      ],
    },
    {
      id: '16',
      unit: 'relaciones',
      title: 'Direccionalidad: unidireccional y bidireccional',
      criollo: 'Acá la pregunta es desde dónde podés navegar la relación. Si desde el empleado llegás al vehículo pero no al revés, es unidireccional. Si vas y volvés, es bidireccional. Y sí: si el negocio no necesita la vuelta, no la modelás.',
      blocks: [
        {
          type: 'h3',
          text: 'Concepto',
          criollo: 'Una flecha o dos. Eso es todo el asunto.',
        },
        {
          type: 'p',
          text: '<strong>Relación unidireccional:</strong> para cada objeto de un lado de la relación le corresponden uno o más objetos del otro lado de la relación.',
        },
        {
          type: 'p',
          text: '<strong>Relación bidireccional:</strong> para cada objeto de un lado de la relación le corresponden muchos objetos del otro lado y viceversa.',
        },
        {
          type: 'h3',
          text: 'Ejemplos de relación unidireccional',
          criollo: 'Los dos ejemplos son la misma empresa con los mismos vehículos; lo que cambia es qué necesita saber el negocio.',
        },
        {
          type: 'p',
          text: '<strong>Ejemplo 1:</strong> en una empresa, un empleado puede tener asignado una serie de vehículos que puede manejar. Se quiere saber qué vehículos tiene asignados en un determinado momento.',
        },
        {
          type: 'p',
          text: '<strong>Ejemplo 2:</strong> en una empresa, un empleado puede tener asignado una serie de vehículos que una persona puede manejar; pero el negocio puede no necesitar esa información. En cambio, únicamente, que a partir de un empleado se pueda saber qué vehículo tiene asignado en un determinado momento.',
        },
        {
          type: 'h3',
          text: 'Ejemplo de relación bidireccional',
          criollo: 'Ahora sí necesitás las dos puntas: de la persona al auto y del auto a la persona.',
        },
        {
          type: 'p',
          text: '<strong>Ejemplo:</strong> disponemos de un listado que contiene la nómina completa de una empresa y, por el otro lado, tenemos un listado de vehículos de esa misma empresa. En función de lo anterior, precisamos conocer, por un lado, qué vehículo maneja una persona "X" de esa empresa y, a su vez, quién tiene asignado un determinado vehículo.',
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'La diferencia práctica es qué preguntas te tiene que poder contestar el modelo. Si solo preguntás "¿qué vehículos maneja este empleado?", una dirección alcanza. Si también preguntás "¿quién maneja este vehículo?", necesitás la ida y la vuelta.',
        },
      ],
      quiz: {
        tf: [
          {
            id: 'tf-16-1',
            q: 'La direccionalidad es una de las tres formas fundamentales para clasificar las relaciones entre objetos.',
            a: true,
            explain: 'Sí: cardinalidad, direccionalidad y ordinalidad.',
          },
          {
            id: 'tf-16-2',
            q: 'En una relación bidireccional, para cada objeto de un lado le corresponden muchos objetos del otro lado y viceversa.',
            a: true,
            explain: 'Es la definición textual de relación bidireccional del apunte.',
          },
          {
            id: 'tf-16-3',
            q: 'En el ejemplo 2 de relación unidireccional, el negocio necesita saber qué empleado maneja un vehículo determinado.',
            a: false,
            explain: 'Justamente al revés: el negocio puede no necesitar esa información, y únicamente pide que a partir de un empleado se pueda saber qué vehículo tiene asignado.',
          },
          {
            id: 'tf-16-4',
            q: 'El ejemplo de relación bidireccional del apunte usa la nómina de empleados y el listado de vehículos de una misma empresa.',
            a: true,
            explain: 'Y precisa conocer las dos puntas: qué vehículo maneja una persona "X" y quién tiene asignado un determinado vehículo.',
          },
        ],
        mc: [
          {
            id: 'mc-16-1',
            q: '¿Qué define la direccionalidad de una relación?',
            options: [
              'Cuántos objetos hay de cada lado de la relación',
              'Desde qué lados de la relación se corresponden los objetos con el otro lado',
              'El peso o la importancia de la relación entre los objetos',
              'Si los objetos pertenecen a la misma clase',
            ],
            correctIndex: 1,
            explain: 'Contar es cardinalidad; el peso o la importancia es ordinalidad. La direccionalidad distingue entre unidireccional y bidireccional.',
          },
          {
            id: 'mc-16-2',
            q: 'En el ejemplo 1 de relación unidireccional, ¿qué se quiere saber?',
            options: [
              'Qué vehículos tiene asignados un empleado en un determinado momento',
              'Quién tiene asignado un determinado vehículo',
              'Cuántos vehículos tiene la empresa en total',
              'Qué empleados están habilitados para manejar cada modelo',
            ],
            correctIndex: 0,
            explain: 'Se navega del empleado hacia los vehículos, en un solo sentido.',
          },
          {
            id: 'mc-16-3',
            q: '¿Cuál de estas necesidades exige una relación bidireccional según el apunte?',
            options: [
              'Saber solamente qué vehículo tiene asignado un empleado',
              'Saber solamente cuántas ruedas tiene un vehículo',
              'Saber qué vehículo maneja una persona y también quién tiene asignado un vehículo',
              'Saber qué empleados trabajan en un mismo departamento',
            ],
            correctIndex: 2,
            explain: 'Cuando hay que responder desde las dos puntas, la relación tiene que ser bidireccional.',
          },
        ],
        ms: [
          {
            id: 'ms-16-1',
            q: '¿Qué afirmaciones sobre la direccionalidad están en el apunte?',
            options: [
              'En la unidireccional, a cada objeto de un lado le corresponden uno o más objetos del otro lado',
              'En la bidireccional, a cada objeto de un lado le corresponden muchos objetos del otro lado y viceversa',
              'La direccionalidad es una de las 3 formas fundamentales de las relaciones',
              'La direccionalidad indica el peso o la importancia de la relación',
              'Una relación unidireccional no puede existir si el negocio no la necesita',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'El peso o la importancia corresponde a la ordinalidad. Y el ejemplo 2 muestra lo contrario de la última opción: es el negocio el que decide qué información hace falta modelar.',
          },
          {
            id: 'ms-16-2',
            q: '¿Qué elementos aparecen en los ejemplos de direccionalidad del apunte?',
            options: [
              'Empleados de una empresa',
              'Vehículos asignados',
              'La nómina completa de la empresa',
              'Sucursales por las que rotar',
              'Televisores con su pantalla',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Las sucursales son el ejemplo de muchos a muchos (cardinalidad) y el televisor con su pantalla es el de composición (ordinalidad).',
          },
        ],
      },
      flashcards: [
        { id: 'fc-16-1', front: 'Direccionalidad', back: 'Segunda forma fundamental de las relaciones entre objetos. Distingue relaciones unidireccionales de bidireccionales.' },
        { id: 'fc-16-2', front: 'Relación unidireccional', back: 'Para cada objeto de un lado de la relación le corresponden uno o más objetos del otro lado de la relación.' },
        { id: 'fc-16-3', front: 'Relación bidireccional', back: 'Para cada objeto de un lado de la relación le corresponden muchos objetos del otro lado y viceversa.' },
        { id: 'fc-16-4', front: 'Unidireccional — ejemplo 1', back: 'Un empleado puede tener asignada una serie de vehículos que puede manejar y se quiere saber qué vehículos tiene asignados en un determinado momento.' },
        { id: 'fc-16-5', front: 'Unidireccional — ejemplo 2', back: 'Existe la información de qué vehículos puede manejar una persona, pero el negocio puede no necesitarla: únicamente pide que a partir de un empleado se sepa qué vehículo tiene asignado.' },
        { id: 'fc-16-6', front: 'Bidireccional — ejemplo', back: 'Con la nómina completa y el listado de vehículos de una empresa, se precisa conocer qué vehículo maneja una persona "X" y, a su vez, quién tiene asignado un determinado vehículo.' },
      ],
    },
    {
      id: '17',
      unit: 'relaciones',
      title: 'Ordinalidad: agregación y composición',
      criollo: 'Última forma fundamental: cuán fuerte es la relación. Si A usa a B es agregación (el auto usa el motor). Si A es dueño de B y B no tiene sentido sin A, es composición (el engranaje y sus dientes, el televisor y su pantalla). La composición es la relación más brava de las dos.',
      blocks: [
        {
          type: 'h3',
          text: 'Concepto',
          criollo: 'Cuánto pesa la relación. De ahí salen dos sabores: agregación y composición.',
        },
        {
          type: 'p',
          text: 'Es un indicador del <strong>orden, el peso y/o la importancia</strong> de la relación entre objetos. De acuerdo a esa importancia, podemos estar frente a una relación de agregación o de composición.',
        },
        {
          type: 'ul',
          items: [
            '<strong>Agregación</strong>: es el caso en el que un objeto A "usa" a un objeto B para funcionar.',
            '<strong>Composición</strong>: es el caso en el que un objeto A "es dueño de" un objeto B, y B no tiene razón de existir sin A. Esta relación es mucho más fuerte que la de agregación, ya que en este caso la parte no tiene sentido sin el todo.',
          ],
        },
        {
          type: 'h3',
          text: 'Ejemplo de agregación',
          criollo: 'El auto usa el motor, pero un motor solo, en un estante del taller, sigue siendo un motor.',
        },
        {
          type: 'ul',
          items: [
            'Un Auto tiene un Motor que le permite funcionar.',
            'Una computadora tiene un Mouse.',
          ],
        },
        {
          type: 'p',
          text: '<strong>Ejemplo de código de agregación:</strong> es la misma clase Auto de la relación uno a uno, que declara el Motor como atributo.',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.unoAuno;\n\n/**\n * Relacion 1-a-1 de Auto con Motor\n */\npublic class Auto {\n\n    Motor motor;\n\n    int velocidadMaxima;\n    String marca;\n}',
        },
        {
          type: 'h3',
          text: 'Ejemplo de composición',
          criollo: 'Un diente suelto no es nada. Y no existe la tienda que te venda un televisor sin pantalla.',
        },
        {
          type: 'ul',
          items: [
            'Un engranaje tiene dientes, los dientes por sí solos no tienen sentido, por ende, un engranaje sin dientes no tiene razón de existir.',
          ],
        },
        {
          type: 'p',
          text: '<strong>Ejemplo de código de composición:</strong> suponer una cadena de venta de electrodomésticos. Para ingresar el stock de televisores puedo definir esta clase televisor. De la forma en que está definida, desde el momento que existe un televisor, tiene su pantalla. Nunca puede haber un televisor SIN su pantalla (no hay ninguna tienda que venda televisores sin pantalla).',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.composicion;\n\npublic class Pantalla {\n\n    int amperaje;\n    int resolucion;\n\n}',
        },
        {
          type: 'code',
          code: 'package edu.up.online.relaciones.composicion;\n\npublic class Televisor {\n\n    int marca;\n    float precio;\n    int mesesGarantia;\n    Pantalla pantalla;\n\n    public Televisor() {\n        this.pantalla = new Pantalla();\n    }\n\n    public static void main(String[] args) {\n        // aqui el objeto guardado en "t", desde el momento que existe ya tiene su pantalla\n        Televisor t = new Televisor();\n    }\n}',
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'La clave del código de composición está en el constructor: <code>this.pantalla = new Pantalla();</code>. Como la pantalla se crea junto con el televisor, no existe un televisor sin pantalla ni un ratito. En la agregación, en cambio, el atributo queda ahí declarado esperando que alguien le asigne un motor.',
        },
      ],
      quiz: {
        tf: [
          {
            id: 'tf-17-1',
            q: 'La ordinalidad es un indicador del orden, el peso y/o la importancia de la relación entre objetos.',
            a: true,
            explain: 'Es la definición textual del apunte, y de esa importancia salen la agregación y la composición.',
          },
          {
            id: 'tf-17-2',
            q: 'En la agregación, un objeto A "es dueño de" un objeto B y B no tiene razón de existir sin A.',
            a: false,
            explain: 'Eso es la composición. En la agregación, A simplemente "usa" a B para funcionar.',
          },
          {
            id: 'tf-17-3',
            q: 'La composición es una relación mucho más fuerte que la agregación.',
            a: true,
            explain: 'Porque en la composición la parte no tiene sentido sin el todo.',
          },
          {
            id: 'tf-17-4',
            q: 'El apunte usa "una computadora tiene un Mouse" como ejemplo de composición.',
            a: false,
            explain: 'Es un ejemplo de agregación, junto con el Auto que tiene un Motor que le permite funcionar.',
          },
          {
            id: 'tf-17-5',
            q: 'En el código de composición, el constructor de Televisor crea la Pantalla con this.pantalla = new Pantalla();',
            a: true,
            explain: 'Por eso, desde el momento en que existe un televisor, ya tiene su pantalla.',
          },
        ],
        mc: [
          {
            id: 'mc-17-1',
            q: '¿Cuáles son los dos tipos de relación que se desprenden de la ordinalidad?',
            options: [
              'Unidireccional y bidireccional',
              'Agregación y composición',
              'Uno a uno y muchos a muchos',
              'Clase y objeto',
            ],
            correctIndex: 1,
            explain: 'Unidireccional/bidireccional es direccionalidad; uno a uno / muchos a muchos es cardinalidad.',
          },
          {
            id: 'mc-17-2',
            q: '¿Cuál es el ejemplo de composición que da el apunte además del televisor?',
            options: [
              'Un vehículo y sus ruedas',
              'Un empleado y su departamento',
              'Un engranaje y sus dientes',
              'Una computadora y su mouse',
            ],
            correctIndex: 2,
            explain: 'Los dientes por sí solos no tienen sentido y un engranaje sin dientes no tiene razón de existir: la parte no tiene sentido sin el todo.',
          },
          {
            id: 'mc-17-3',
            q: 'En el ejemplo de código de composición, ¿qué atributos declara la clase Pantalla?',
            options: [
              'int amperaje; int resolucion;',
              'int marca; float precio;',
              'String fabricante; String potencia;',
              'int mesesGarantia; Pantalla pantalla;',
            ],
            correctIndex: 0,
            explain: 'marca, precio, mesesGarantia y pantalla son de Televisor; fabricante y potencia son del Motor del ejemplo uno a uno.',
          },
          {
            id: 'mc-17-4',
            q: 'Según el apunte, ¿por qué el ejemplo del televisor es composición y no agregación?',
            options: [
              'Porque el televisor tiene más de un atributo de tipo objeto',
              'Porque la pantalla se guarda en un arreglo',
              'Porque desde el momento en que existe un televisor, tiene su pantalla, y nunca puede haber un televisor sin ella',
              'Porque la clase Televisor tiene un método main',
            ],
            correctIndex: 2,
            explain: 'No hay ninguna tienda que venda televisores sin pantalla: la parte no tiene sentido sin el todo.',
          },
        ],
        ms: [
          {
            id: 'ms-17-1',
            q: '¿Qué ejemplos usa el apunte para la agregación?',
            options: [
              'Un Auto tiene un Motor que le permite funcionar',
              'Una computadora tiene un Mouse',
              'Un engranaje tiene dientes',
              'Un televisor tiene su pantalla',
              'Una sucursal tiene un equipo de vendedores',
            ],
            correctIndexes: [0, 1],
            explain: 'El engranaje con sus dientes y el televisor con su pantalla son ejemplos de composición; la sucursal con su equipo es el ejemplo de cardinalidad muchos a muchos.',
          },
          {
            id: 'ms-17-2',
            q: '¿Qué atributos declara la clase Televisor del ejemplo de composición?',
            options: [
              'int marca;',
              'float precio;',
              'int mesesGarantia;',
              'Pantalla pantalla;',
              'int resolucion;',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'resolucion (junto con amperaje) es atributo de Pantalla, no de Televisor. Ojo con marca: acá está declarada como <code>int</code>.',
          },
          {
            id: 'ms-17-3',
            q: '¿Cuáles de estas afirmaciones sobre la ordinalidad son correctas según el apunte?',
            options: [
              'La agregación es más fuerte que la composición',
              'La ordinalidad cuenta cuántos objetos hay de cada lado',
              'En la composición la parte no tiene sentido sin el todo',
              'La ordinalidad indica el orden, el peso y/o la importancia de la relación',
              'En la agregación un objeto A usa a un objeto B para funcionar',
            ],
            correctIndexes: [2, 3, 4],
            explain: 'Es al revés: la composición es mucho más fuerte que la agregación. Y contar objetos de cada lado es cardinalidad, no ordinalidad.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-17-1', front: 'Ordinalidad', back: 'Indicador del orden, el peso y/o la importancia de la relación entre objetos. Según esa importancia, la relación es de agregación o de composición.' },
        { id: 'fc-17-2', front: 'Agregación', back: 'Un objeto A "usa" a un objeto B para funcionar. Ejemplos: un Auto tiene un Motor que le permite funcionar; una computadora tiene un Mouse.' },
        { id: 'fc-17-3', front: 'Composición', back: 'Un objeto A "es dueño de" un objeto B, y B no tiene razón de existir sin A. Es mucho más fuerte que la agregación: la parte no tiene sentido sin el todo.' },
        { id: 'fc-17-4', front: 'Engranaje y dientes', back: 'Ejemplo de composición: los dientes por sí solos no tienen sentido, por ende un engranaje sin dientes no tiene razón de existir.' },
        { id: 'fc-17-5', front: 'Televisor y Pantalla', back: 'Ejemplo de código de composición: el constructor hace this.pantalla = new Pantalla(), así que desde el momento en que existe un televisor ya tiene su pantalla.' },
        { id: 'fc-17-6', front: 'Clase Pantalla', back: 'Del ejemplo de composición: declara int amperaje; e int resolucion; en el paquete edu.up.online.relaciones.composicion.' },
        { id: 'fc-17-7', front: 'Agregación vs composición', back: 'Agregación = "usa" (el auto usa el motor). Composición = "es dueño de" y la parte no existe sin el todo (el televisor y su pantalla).' },
      ],
    },
    {
      id: '18',
      unit: 'paradigmas',
      title: 'Lenguajes imperativos y declarativos',
      criollo: 'Dos formas de pedirle cosas a la máquina. En la imperativa le dictás los pasos uno por uno; en la declarativa le decís qué querés y que se arregle. El ejemplo de la pizza del apunte lo explica mejor que cualquier definición.',
      blocks: [
        {
          type: 'h3',
          text: 'Lenguajes de programación imperativos',
          criollo: 'Es la forma más "natural" porque es como funciona el fierro: instrucciones, una atrás de la otra, cambiando el estado.',
        },
        {
          type: 'p',
          text: 'Los lenguajes imperativos definen al <strong>paradigma imperativo</strong> de programación. En este paradigma se usa el lenguaje para describir <strong>cómo cambia el estado del sistema</strong>. Típicamente, hay instrucciones (imposiciones) ordenadas en forma de líneas de texto, una debajo de la otra, que se ejecutan de forma secuencial. El lenguaje imperativo describe cómo opera el sistema.',
        },
        {
          type: 'p',
          text: 'La programación imperativa es la más "natural", dado que surge desde el mismísimo <strong>hardware</strong>, donde se ejecutan instrucciones de máquina. Estas instrucciones, en su más bajo nivel, mueven registros de datos de un lugar a otro, alteran valores, etc. Es decir, cambian el estado de los integrados de la memoria, del procesador, en fin, de nuestra computadora. A medida que subimos de nivel, los lenguajes siguen haciendo lo mismo, solo que con estructuras más complejas como variables, instrucciones complejas (como bucles, modificadores de visibilidad, e incluso cosas más complejas como las anotaciones).',
        },
        {
          type: 'h3',
          text: 'Lenguajes de programación declarativos',
          criollo: 'Describís el qué y el cómo lo resuelve el motor del lenguaje. Se define casi por descarte: es todo lo que la imperativa no es.',
        },
        {
          type: 'p',
          text: 'Los lenguajes declarativos, en el <strong>paradigma declarativo</strong> de programación, se utilizan para describir la estructura del sistema y describir <strong>qué hace</strong> el sistema. Una vez descripta "la misión" del programa, el cómo se llega al resultado depende de la implementación interna del propio lenguaje.',
        },
        {
          type: 'p',
          text: 'Generalmente, se define a la programación declarativa como "<strong>no-imperativa</strong>": es todo lo que la imperativa no es. En este sentido, la programación declarativa dice qué debe hacer el sistema, en donde la ejecución no afecte otras partes del sistema y pueda representarse como una serie de premisas matemáticas (funciones/transformaciones).',
        },
        {
          type: 'p',
          text: 'En un lenguaje imperativo, entonces, el sistema pasará de un estado a otro ejecutando una serie de pasos, un <strong>algoritmo</strong>. En un lenguaje declarativo se debe describir el <strong>estado inicial</strong>, el <strong>estado final</strong> y luego el propio motor del lenguaje hará todo lo necesario para ir de un estado al otro.',
        },
        {
          type: 'h3',
          text: 'Ejemplos de cada uno',
          criollo: 'SQL y HTML son los declarativos de manual: describís qué querés ver, no cómo se consigue.',
        },
        {
          type: 'p',
          text: 'Ejemplos de lenguajes imperativos hay muchos: <strong>C, C++, Java, Perl</strong> y un infinito etcétera. En todos estos lenguajes se escriben líneas de código que describen los pasos de un algoritmo para lograr un resultado.',
        },
        {
          type: 'p',
          text: 'El ejemplo más claro de un lenguaje declarativo es <strong>SQL</strong>. En SQL se describe qué información debe extraerse de una o más tablas, sin control sobre la forma de obtenerlo: cómo se obtiene lo maneja el motor de la base. Otro ejemplo ubicuo es <strong>HTML</strong>. En HTML se describe, por ejemplo, que debe existir cierto texto, centrado y en negrita, sin especificar ningún tipo de lógica ni control de flujo. Cómo es que veremos el texto centrado y en negrita dependerá de cada navegador.',
        },
        {
          type: 'h3',
          text: 'Cómo sería pedir una pizza según uno y otro paradigma',
          criollo: 'El mejor resumen de toda la unidad: seis pasos contra una sola frase.',
        },
        {
          type: 'table',
          caption: 'Pedir una pizza: imperativo vs declarativo',
          headers: ['Imperativo', 'Declarativo'],
          rows: [
            ['1. Entrar a la pizzería.<br>2. Esperar a quien atiende.<br>3. Pedir pizza.<br>4. Seleccionar gusto.<br>5. Pagar.<br>6. Tomar la pizza y salir del local.', '1. Quiero una pizza grande de mozzarella para llevar.'],
            ['Digo paso a paso qué hacer.', 'Digo qué quiero y dejo que el lenguaje o plataforma llegue al resultado.'],
          ],
        },
      ],
      quiz: {
        tf: [
          {
            id: 'tf-18-1',
            q: 'En el paradigma imperativo se usa el lenguaje para describir cómo cambia el estado del sistema.',
            a: true,
            explain: 'Instrucciones ordenadas una debajo de la otra que se ejecutan de forma secuencial y van cambiando el estado.',
          },
          {
            id: 'tf-18-2',
            q: 'Según el apunte, la programación declarativa es la más "natural" porque surge desde el mismísimo hardware.',
            a: false,
            explain: 'Esa es la imperativa: nace de las instrucciones de máquina que mueven registros y alteran valores.',
          },
          {
            id: 'tf-18-3',
            q: 'En un lenguaje declarativo se describe el estado inicial y el estado final, y el motor del lenguaje hace lo necesario para ir de uno al otro.',
            a: true,
            explain: 'En el imperativo, en cambio, vos escribís el algoritmo que lleva de un estado al otro.',
          },
          {
            id: 'tf-18-4',
            q: 'HTML es un ejemplo de lenguaje imperativo porque describe cómo se dibuja el texto en pantalla.',
            a: false,
            explain: 'HTML es declarativo: describís que exista cierto texto centrado y en negrita, sin lógica ni control de flujo. Cómo se ve depende de cada navegador.',
          },
          {
            id: 'tf-18-5',
            q: 'La programación declarativa se define generalmente como "no-imperativa".',
            a: true,
            explain: 'Textual del apunte: es todo lo que la imperativa no es.',
          },
        ],
        mc: [
          {
            id: 'mc-18-1',
            q: '¿Qué describe un lenguaje declarativo?',
            options: [
              'Cómo opera el sistema, paso por paso',
              'La estructura del sistema y qué hace el sistema',
              'El orden en que se mueven los registros de memoria',
              'La forma exacta en que el motor resuelve la consulta',
            ],
            correctIndex: 1,
            explain: 'El cómo se llega al resultado depende de la implementación interna del propio lenguaje.',
          },
          {
            id: 'mc-18-2',
            q: '¿Cuál de estos grupos son todos lenguajes imperativos según el apunte?',
            options: [
              'SQL, HTML y Prolog',
              'C, C++, Java y Perl',
              'Java, SQL y HTML',
              'Prolog, HTML y C',
            ],
            correctIndex: 1,
            explain: 'SQL y HTML son los ejemplos declarativos, y Prolog aparece como lenguaje lógico.',
          },
          {
            id: 'mc-18-3',
            q: 'En el ejemplo de la pizza, ¿qué corresponde al paradigma declarativo?',
            options: [
              'Entrar a la pizzería, esperar a quien atiende, pedir pizza, seleccionar gusto, pagar y salir',
              'Quiero una pizza grande de mozzarella para llevar',
              'Elegir el gusto antes de pagar',
              'Describir cómo se amasa la pizza',
            ],
            correctIndex: 1,
            explain: 'Decís qué querés y dejás que el lenguaje o plataforma llegue al resultado. Los seis pasos son el lado imperativo.',
          },
          {
            id: 'mc-18-4',
            q: 'Según el apunte, ¿por qué SQL es el ejemplo más claro de lenguaje declarativo?',
            options: [
              'Porque se escribe en mayúsculas y es fácil de leer',
              'Porque describe qué información extraer sin control sobre la forma de obtenerla',
              'Porque no tiene estructuras de control de flujo de ningún tipo',
              'Porque se ejecuta más rápido que un lenguaje imperativo',
            ],
            correctIndex: 1,
            explain: 'Cómo se obtiene la información lo maneja el motor de la base de datos.',
          },
        ],
        ms: [
          {
            id: 'ms-18-1',
            q: '¿Qué afirmaciones sobre la programación imperativa están en el apunte?',
            options: [
              'Describe cómo cambia el estado del sistema',
              'Sus instrucciones se ejecutan de forma secuencial',
              'Surge desde el mismísimo hardware',
              'A mayor nivel aparecen variables, bucles y modificadores de visibilidad',
              'Describe el estado inicial y el final y deja que el motor resuelva',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La última es la descripción de la programación declarativa.',
          },
          {
            id: 'ms-18-2',
            q: '¿Cuáles de estos lenguajes aparecen en el apunte como ejemplos de lenguajes declarativos?',
            options: [
              'SQL',
              'HTML',
              'Java',
              'C++',
              'Perl',
            ],
            correctIndexes: [0, 1],
            explain: 'Java, C++ y Perl están en la lista de imperativos junto con C.',
          },
          {
            id: 'ms-18-3',
            q: '¿Qué pasos figuran en la columna imperativa del ejemplo de la pizza?',
            options: [
              'Entrar a la pizzería',
              'Esperar a quien atiende',
              'Seleccionar gusto',
              'Pagar',
              'Llamar por teléfono al delivery',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Los pasos son: entrar, esperar a quien atiende, pedir pizza, seleccionar gusto, pagar, y tomar la pizza y salir del local. El delivery no aparece.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-18-1', front: 'Paradigma imperativo', back: 'Usa el lenguaje para describir cómo cambia el estado del sistema: instrucciones ordenadas una debajo de la otra que se ejecutan secuencialmente. Describe cómo opera el sistema.' },
        { id: 'fc-18-2', front: 'Por qué la imperativa es la más "natural"', back: 'Porque surge desde el mismísimo hardware: las instrucciones de máquina mueven registros de datos, alteran valores y cambian el estado de la memoria y el procesador.' },
        { id: 'fc-18-3', front: 'Paradigma declarativo', back: 'Describe la estructura del sistema y qué hace el sistema. Una vez descripta "la misión", el cómo se llega al resultado depende de la implementación interna del lenguaje.' },
        { id: 'fc-18-4', front: 'Declarativa = "no-imperativa"', back: 'Se la define como todo lo que la imperativa no es: dice qué debe hacer el sistema, la ejecución no afecta otras partes y puede representarse como premisas matemáticas (funciones/transformaciones).' },
        { id: 'fc-18-5', front: 'Imperativo vs declarativo (estados)', back: 'Imperativo: el sistema pasa de un estado a otro ejecutando una serie de pasos, un algoritmo. Declarativo: describís estado inicial y final, y el motor del lenguaje hace el resto.' },
        { id: 'fc-18-6', front: 'Ejemplos de lenguajes imperativos', back: 'C, C++, Java, Perl y un infinito etcétera: se escriben líneas de código que describen los pasos de un algoritmo.' },
        { id: 'fc-18-7', front: 'Ejemplos de lenguajes declarativos', back: 'SQL (describís qué información extraer, el motor de la base decide cómo) y HTML (describís que exista cierto texto centrado y en negrita, sin lógica ni control de flujo).' },
        { id: 'fc-18-8', front: 'La pizza de los paradigmas', back: 'Imperativo: entrar, esperar, pedir, elegir gusto, pagar, salir. Declarativo: "quiero una pizza grande de mozzarella para llevar".' },
      ],
    },
    {
      id: '19',
      unit: 'paradigmas',
      title: 'Derivaciones de la programación imperativa',
      criollo: 'Del tronco imperativo salen tres ramas grandes: estructurada, procedural y orientada a objetos. No son excluyentes — Java es imperativo, orientado a objetos, usa bloques y agrupa cosas en métodos, todo al mismo tiempo.',
      blocks: [
        {
          type: 'p',
          text: 'El paradigma imperativo da lugar a, al menos, <strong>tres tipos</strong> de programación imperativa (a veces llamados paradigmas, dada la extensión de su uso o su popularidad).',
        },
        {
          type: 'h3',
          text: 'Programación estructurada',
          criollo: 'Todo lo que sea if, for, while y bloques entre llaves. Estructuras, básicamente.',
        },
        {
          type: 'p',
          text: 'En ella las imposiciones se ven divididas en <strong>estructuras</strong>. Pueden ser estructura de control de flujo (if/else), de repeticiones (for/while) o pueden ser estructuras de ordenamiento (bloques de código, generalmente delimitados por TABs o por llaves o corchetes).',
        },
        {
          type: 'h3',
          text: 'Programación procedural',
          criollo: 'Agrupar instrucciones en procedimientos. Sí, son las funciones de toda la vida.',
        },
        {
          type: 'p',
          text: 'En ella las imposiciones o instrucciones se pueden agrupar en "<strong>procedimientos</strong>". Cada procedimiento es un bloque (la programación procedural es una forma de programación estructurada) que se dedica a un cambio de una parte específica del estado del sistema. Estos bloques son conocidos típicamente como "<strong>funciones</strong>" o "<strong>subrutinas</strong>".',
        },
        {
          type: 'h3',
          text: 'Programación orientada a objetos',
          criollo: 'Modelar la realidad. Pero abajo de todo siguen siendo bloques de código con sus if y sus for.',
        },
        {
          type: 'p',
          text: 'En ella las instrucciones tratan de <strong>modelar un sistema en base a la realidad</strong>, haciendo más cercanos los conceptos que vemos en ella. Es por eso que en la programación orientada a objetos aparecen conceptos de clase, objeto, atributo, método, etc., que en el fondo no dejan de ser bloques de código. Asimismo, cabe notar que también hacen uso de estructuras de control y repetición.',
        },
        {
          type: 'h3',
          text: 'Otras',
          criollo: 'La reactiva viene creciendo, pero según el lenguaje termina cayendo en procedural o en objetos.',
        },
        {
          type: 'p',
          text: 'Hay otras derivaciones, como la <strong>programación reactiva</strong>, que está ganando terreno, pero dependiendo el lenguaje que se use cae dentro de la categoría procedural u orientada a objetos. En todos los casos, un lenguaje imperativo puede hacer uso de todas las formas (Java o C++, por ejemplo, son lenguajes imperativos orientados a objetos, pero usan bloques, control de flujo y agrupan operaciones en procedimientos llamados "métodos").',
        },
      ],
      quiz: {
        tf: [
          {
            id: 'tf-19-1',
            q: 'El paradigma imperativo da lugar a, al menos, tres tipos de programación imperativa.',
            a: true,
            explain: 'Estructurada, procedural y orientada a objetos, más otras derivaciones como la reactiva.',
          },
          {
            id: 'tf-19-2',
            q: 'La programación procedural es una forma de programación estructurada.',
            a: true,
            explain: 'Lo aclara el apunte entre paréntesis: cada procedimiento es un bloque, y los bloques son estructuras.',
          },
          {
            id: 'tf-19-3',
            q: 'En la programación orientada a objetos ya no se usan estructuras de control ni de repetición.',
            a: false,
            explain: 'El apunte lo aclara expresamente: también hacen uso de estructuras de control y repetición.',
          },
          {
            id: 'tf-19-4',
            q: 'Los bloques de la programación procedural se conocen típicamente como funciones o subrutinas.',
            a: true,
            explain: 'Cada uno se dedica a un cambio de una parte específica del estado del sistema.',
          },
          {
            id: 'tf-19-5',
            q: 'Según el apunte, la programación reactiva es una derivación de la programación declarativa.',
            a: false,
            explain: 'Aparece como "otra" derivación de la imperativa y, según el lenguaje, cae dentro de procedural u orientada a objetos.',
          },
        ],
        mc: [
          {
            id: 'mc-19-1',
            q: '¿Qué caracteriza a la programación estructurada?',
            options: [
              'Las imposiciones se agrupan en procedimientos dedicados a una parte del estado',
              'Las imposiciones se dividen en estructuras de control, de repeticiones y de ordenamiento',
              'Las instrucciones modelan un sistema en base a la realidad',
              'Se declaran reglas, hechos e interrogantes',
            ],
            correctIndex: 1,
            explain: 'Control de flujo (if/else), repeticiones (for/while) y ordenamiento (bloques delimitados por TABs, llaves o corchetes).',
          },
          {
            id: 'mc-19-2',
            q: 'Según el apunte, ¿por qué en la POO aparecen los conceptos de clase, objeto, atributo y método?',
            options: [
              'Porque el hardware trabaja con esas estructuras',
              'Porque las instrucciones tratan de modelar un sistema en base a la realidad',
              'Porque son la única forma de agrupar bloques de código',
              'Porque los lenguajes declarativos los exigen',
            ],
            correctIndex: 1,
            explain: 'La idea es hacer más cercanos los conceptos que vemos en la realidad, aunque en el fondo no dejen de ser bloques de código.',
          },
          {
            id: 'mc-19-3',
            q: 'Según el apunte, ¿qué son Java y C++?',
            options: [
              'Lenguajes declarativos con soporte de objetos',
              'Lenguajes imperativos orientados a objetos que usan bloques, control de flujo y métodos',
              'Lenguajes puramente procedurales, sin estructuras de control',
              'Lenguajes lógicos derivados de Prolog',
            ],
            correctIndex: 1,
            explain: 'El apunte los usa para mostrar que un lenguaje imperativo puede hacer uso de todas las formas a la vez.',
          },
          {
            id: 'mc-19-4',
            q: '¿Por qué a estos tres tipos a veces se los llama directamente "paradigmas"?',
            options: [
              'Porque cada uno tiene su propio compilador',
              'Por la extensión de su uso o su popularidad',
              'Porque son incompatibles entre sí',
              'Porque no derivan de la programación imperativa',
            ],
            correctIndex: 1,
            explain: 'Es la misma razón que el apunte da después para las derivaciones de la programación declarativa.',
          },
        ],
        ms: [
          {
            id: 'ms-19-1',
            q: '¿Cuáles son derivaciones de la programación imperativa según el apunte?',
            options: [
              'Programación estructurada',
              'Programación procedural',
              'Programación orientada a objetos',
              'Programación reactiva',
              'Programación lógica',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La programación lógica es una derivación de la declarativa, no de la imperativa.',
          },
          {
            id: 'ms-19-2',
            q: '¿Qué tipos de estructuras menciona el apunte en la programación estructurada?',
            options: [
              'De control de flujo (if/else)',
              'De repeticiones (for/while)',
              'De ordenamiento (bloques de código)',
              'De herencia (extends/implements)',
              'De persistencia (tablas y consultas)',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Herencia y persistencia no aparecen en esa clasificación del apunte.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-19-1', front: 'Derivaciones de la imperativa', back: 'Al menos tres: programación estructurada, procedural y orientada a objetos. Se las llama paradigmas por la extensión de su uso o su popularidad. Hay otras, como la reactiva.' },
        { id: 'fc-19-2', front: 'Programación estructurada', back: 'Las imposiciones se dividen en estructuras: de control de flujo (if/else), de repeticiones (for/while) y de ordenamiento (bloques delimitados por TABs, llaves o corchetes).' },
        { id: 'fc-19-3', front: 'Programación procedural', back: 'Las instrucciones se agrupan en "procedimientos": bloques dedicados a un cambio de una parte específica del estado del sistema, conocidos como funciones o subrutinas. Es una forma de programación estructurada.' },
        { id: 'fc-19-4', front: 'Programación orientada a objetos', back: 'Las instrucciones modelan un sistema en base a la realidad. Aparecen clase, objeto, atributo, método, etc., que en el fondo son bloques de código, y también usa estructuras de control y repetición.' },
        { id: 'fc-19-5', front: 'Programación reactiva', back: 'Otra derivación de la imperativa que está ganando terreno; según el lenguaje que se use cae dentro de la categoría procedural u orientada a objetos.' },
        { id: 'fc-19-6', front: 'Java y C++ según el apunte', back: 'Son lenguajes imperativos orientados a objetos, pero usan bloques, control de flujo y agrupan operaciones en procedimientos llamados "métodos".' },
      ],
    },
    {
      id: '20',
      unit: 'paradigmas',
      title: 'Derivaciones de la programación declarativa',
      criollo: 'Del lado declarativo las dos ramas grandes son la lógica (Prolog: hechos, reglas y preguntas) y la funcional (misma entrada, misma salida, siempre). Y el apunte suma el Domain Driven Design con sus DSLs.',
      blocks: [
        {
          type: 'p',
          text: 'La programación declarativa, al igual que la imperativa, es más que nada un <strong>término general</strong>. Por eso, tiene varias derivaciones, llamados paradigmas o sub-paradigmas. Al igual que en la programación imperativa, el término "paradigma" surge de la popularidad o extensión en el uso. Las dos más importantes, aunque no las únicas, son la programación lógica y la funcional.',
        },
        {
          type: 'h3',
          text: 'Programación lógica',
          criollo: 'Cargás hechos y reglas, y después preguntás. El motor deduce solo.',
        },
        {
          type: 'p',
          text: 'En la programación lógica <strong>se definen reglas</strong>. Se basa en el uso de la lógica formal, en la que se ponen premisas, condiciones y resultados. Se expresa mediante formulaciones o transformaciones, declaración de hechos, e interrogantes. Expresiones de tipo:',
        },
        {
          type: 'ul',
          items: [
            '<strong>Hecho</strong>: "El profesor es un humano".',
            '<strong>Regla</strong>: "Todos los humanos son mortales".',
            '<strong>Interrogante</strong>: "¿Es el profesor mortal?".',
          ],
        },
        {
          type: 'p',
          text: 'Formalmente, si $p$ y $q$, entonces ¿$u$?:',
        },
        {
          type: 'math',
          latex: '(p \\land q) \\rightarrow u',
          display: true,
        },
        {
          type: 'p',
          text: 'Ejemplo en <strong>Prolog</strong> (uno de los lenguajes lógicos más populares):',
        },
        {
          type: 'code',
          code: 'humano(profesor).\nmortal(X) :- humano(X).\n?- mortal(profesor).',
        },
        {
          type: 'h3',
          text: 'Programación funcional',
          criollo: 'Funciones matemáticas de verdad: mismos argumentos, mismo resultado, siempre. Nada de andar tocando el estado de al lado.',
        },
        {
          type: 'p',
          text: 'Es también considerado un paradigma, en el cual se definen <strong>funciones matemáticas</strong> que trabajan como expresiones o declaraciones; no son imposiciones, no son pasos que van alterando el estado. En el código funcional, el resultado depende siempre de los valores de entrada o argumentos, cumpliendo con la premisa de que en la programación declarativa la ejecución de una parte del código no afecte a otras. Es decir, siempre que se llame a una misma función, con los mismos argumentos, <strong>arrojará el mismo resultado</strong>.',
        },
        {
          type: 'h3',
          text: 'Domain Driven Design',
          criollo: 'Lenguajes hechos a medida de un dominio. Las expresiones regulares y SQL son DSLs que usás todos los días sin pensarlo.',
        },
        {
          type: 'p',
          text: 'También es muy importante el <strong>Domain Driven Design</strong>, que es una programación fuertemente orientada a dominios particulares. En el diseño orientado a dominios (según su nombre correcto en castellano) se usan los lenguajes específicos de dominios o <strong>DSLs</strong>. Los DSLs son lenguajes creados específicamente para cubrir una necesidad específica, como son las <strong>expresiones regulares</strong>. Otro ejemplo típico sería <strong>SQL</strong>. Aquí ocurre algo similar que con la programación orientada a objetos, donde si bien suele considerarse un paradigma por sí mismo, toma elementos de otros.',
        },
      ],
      quiz: {
        tf: [
          {
            id: 'tf-20-1',
            q: 'Según el apunte, las dos derivaciones más importantes de la programación declarativa son la lógica y la funcional.',
            a: true,
            explain: 'Aclara que son las dos más importantes, aunque no las únicas.',
          },
          {
            id: 'tf-20-2',
            q: 'En la programación funcional, una misma función con los mismos argumentos puede arrojar resultados distintos según el estado del sistema.',
            a: false,
            explain: 'Al contrario: siempre que se llame a la misma función con los mismos argumentos, arrojará el mismo resultado.',
          },
          {
            id: 'tf-20-3',
            q: 'La programación lógica se expresa mediante formulaciones o transformaciones, declaración de hechos e interrogantes.',
            a: true,
            explain: 'Hecho ("El profesor es un humano"), regla ("Todos los humanos son mortales") e interrogante ("¿Es el profesor mortal?").',
          },
          {
            id: 'tf-20-4',
            q: 'Las expresiones regulares son un ejemplo de DSL según el apunte.',
            a: true,
            explain: 'Los DSLs son lenguajes creados específicamente para cubrir una necesidad específica; el otro ejemplo típico es SQL.',
          },
          {
            id: 'tf-20-5',
            q: 'En la programación funcional las funciones son imposiciones, es decir, pasos que van alterando el estado.',
            a: false,
            explain: 'Textualmente el apunte dice lo contrario: no son imposiciones ni pasos que alteran el estado, son expresiones o declaraciones.',
          },
        ],
        mc: [
          {
            id: 'mc-20-1',
            q: '¿En qué se basa la programación lógica?',
            options: [
              'En el uso de la lógica formal, con premisas, condiciones y resultados',
              'En funciones matemáticas que dependen solo de sus argumentos',
              'En bloques de código agrupados en procedimientos',
              'En modelar el sistema en base a la realidad',
            ],
            correctIndex: 0,
            explain: 'Las funciones matemáticas son la programación funcional; los procedimientos y el modelado de la realidad son derivaciones de la imperativa.',
          },
          {
            id: 'mc-20-2',
            q: 'En el ejemplo de Prolog del apunte, ¿qué línea representa el interrogante?',
            options: [
              'humano(profesor).',
              'mortal(X) :- humano(X).',
              '?- mortal(profesor).',
              '(p ∧ q) → u',
            ],
            correctIndex: 2,
            explain: 'La primera línea es el hecho, la segunda es la regla y la tercera es la pregunta. La fórmula es la expresión formal del razonamiento.',
          },
          {
            id: 'mc-20-3',
            q: '¿Qué es el Domain Driven Design según el apunte?',
            options: [
              'Un lenguaje declarativo derivado de SQL',
              'Una programación fuertemente orientada a dominios particulares',
              'Una técnica para agrupar instrucciones en subrutinas',
              'Un motor que traduce reglas lógicas a código imperativo',
            ],
            correctIndex: 1,
            explain: 'En castellano se llama diseño orientado a dominios y usa lenguajes específicos de dominio (DSLs).',
          },
          {
            id: 'mc-20-4',
            q: '¿Por qué el término "paradigma" se aplica a estas derivaciones?',
            options: [
              'Porque cada una tiene su propia sintaxis formal',
              'Porque surge de la popularidad o extensión en el uso',
              'Porque son las únicas formas válidas de programar',
              'Porque están definidas por un estándar internacional',
            ],
            correctIndex: 1,
            explain: 'El apunte lo dice tanto para las derivaciones de la imperativa como para las de la declarativa.',
          },
        ],
        ms: [
          {
            id: 'ms-20-1',
            q: '¿Qué tipos de expresiones usa la programación lógica según el apunte?',
            options: [
              'Hechos',
              'Reglas',
              'Interrogantes',
              'Subrutinas',
              'Bucles',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Subrutinas y bucles pertenecen al mundo imperativo (procedural y estructurada).',
          },
          {
            id: 'ms-20-2',
            q: '¿Qué ejemplos de DSL menciona el apunte?',
            options: [
              'Las expresiones regulares',
              'SQL',
              'Prolog',
              'Java',
              'HTML',
            ],
            correctIndexes: [0, 1],
            explain: 'Prolog aparece como lenguaje lógico y HTML como ejemplo de lenguaje declarativo, pero ninguno de los dos se nombra como DSL. Java es imperativo.',
          },
          {
            id: 'ms-20-3',
            q: '¿Qué afirmaciones sobre la programación funcional son correctas según el apunte?',
            options: [
              'Define funciones matemáticas que trabajan como expresiones o declaraciones',
              'El resultado depende siempre de los valores de entrada o argumentos',
              'La ejecución de una parte del código no afecta a otras',
              'Sus funciones son imposiciones que alteran el estado paso a paso',
              'Se apoya en la declaración de hechos y reglas',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Las imposiciones que alteran el estado son de la programación imperativa, y los hechos y reglas son de la programación lógica.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-20-1', front: 'Derivaciones de la declarativa', back: 'La declarativa es un término general con varias derivaciones. Las dos más importantes, aunque no las únicas, son la programación lógica y la funcional. El apunte suma también el Domain Driven Design.' },
        { id: 'fc-20-2', front: 'Programación lógica', back: 'Se definen reglas. Se basa en la lógica formal, con premisas, condiciones y resultados, y se expresa mediante formulaciones o transformaciones, declaración de hechos e interrogantes.' },
        { id: 'fc-20-3', front: 'Hecho, regla e interrogante', back: 'Hecho: "El profesor es un humano". Regla: "Todos los humanos son mortales". Interrogante: "¿Es el profesor mortal?". Formalmente: si p y q, entonces ¿u?' },
        { id: 'fc-20-4', front: 'Prolog', back: 'Uno de los lenguajes lógicos más populares. Ejemplo: humano(profesor). / mortal(X) :- humano(X). / ?- mortal(profesor).' },
        { id: 'fc-20-5', front: 'Programación funcional', back: 'Se definen funciones matemáticas que trabajan como expresiones o declaraciones; no son imposiciones ni pasos que alteran el estado. Misma función con los mismos argumentos, mismo resultado.' },
        { id: 'fc-20-6', front: 'Domain Driven Design', back: 'Programación fuertemente orientada a dominios particulares. En castellano, diseño orientado a dominios; usa lenguajes específicos de dominio (DSLs).' },
        { id: 'fc-20-7', front: 'DSL', back: 'Lenguaje específico de dominio: creado para cubrir una necesidad específica. Ejemplos del apunte: las expresiones regulares y SQL.' },
      ],
    },
    {
      id: '21',
      unit: 'jvm',
      title: 'JDK, JRE y JVM: qué es cada cosa',
      criollo: 'Tres siglas que todo el mundo mezcla. El JDK es la caja de herramientas completa para desarrollar, el JRE es lo mínimo para correr programas, y la JVM es la máquina virtual que se mete entre tu código y el sistema operativo. La gracia de todo esto es que compilás una sola vez y corrés donde quieras, porque lo que cambia según la plataforma es la máquina virtual, no tu código.',
      blocks: [
        {
          type: 'h3',
          text: 'El kit de desarrollo',
          criollo: 'Para instalar Java no instalás "Java" a secas: instalás el kit, que trae todo adentro.',
        },
        {
          type: 'p',
          text: 'Para instalar Java se necesita instalar el <strong>"kit de desarrollo"</strong>. El entorno de desarrollo se denomina <strong>JDK</strong> (<em>Java Development Kit</em>), que involucra tanto la <strong>JVM</strong> (<em>Java Virtual Machine</em>) como también el <strong>JRE</strong> (<em>Java Runtime Environment</em>).',
        },
        {
          type: 'ul',
          items: [
            '<strong>JRE</strong>: sirve para ejecutar código Java, para correr programas Java.',
            '<strong>JDK</strong>: tiene muchas herramientas de desarrollo, como ser el compilador, el motor para hacer documentación, etc.',
            '<strong>JVM</strong>: una máquina virtual corre entre el lenguaje y el SO. Cuando se escribe código Java <strong>no se compila a código de máquina</strong>.',
          ],
        },
        {
          type: 'h3',
          text: 'Compilar sin máquina virtual: el caso de C',
          criollo: 'En C compilás para un sistema operativo concreto. Cambiás de sistema, volvés a compilar.',
        },
        {
          type: 'p',
          text: 'En C, cuando se compila, se hace en <strong>lenguaje de máquina</strong>. Por ejemplo: si tengo Linux, debo compilar en C para Linux (lo mismo sucedería en caso de Windows o Mac).',
        },
        {
          type: 'h3',
          text: 'Compilar con máquina virtual: el caso de Java',
          criollo: 'Acá está el truco: el que se instala distinto en cada plataforma es el JRE con su máquina virtual. Tu .class es siempre el mismo.',
        },
        {
          type: 'p',
          text: 'Con una máquina virtual, como es en el caso de Java (o .Net para el caso), cuando se compila, se hace <strong>para el lenguaje de la máquina virtual</strong> y no para lenguaje de máquina. Lo que se instala para diferentes plataformas es <strong>la máquina virtual</strong>.',
        },
        {
          type: 'p',
          text: 'Cuando se instala Java, se instala el JRE (y la JVM). El JRE sí se instala para Linux, Windows, Mac: <strong>la máquina virtual es lo que cambia en cada plataforma</strong>. En cambio, el código se compila una vez en cualquier plataforma y luego puede correr en cualquier máquina virtual de cualquier otra. Ejemplo: escribo y compilo con un JDK en Windows, pero puedo correr el programa en un JRE para Linux.',
        },
        {
          type: 'table',
          caption: 'Las tres siglas',
          headers: ['Sigla', 'Nombre', 'Para qué sirve'],
          rows: [
            ['JDK', 'Java Development Kit', 'Entorno de desarrollo: involucra la JVM y el JRE, y suma herramientas de desarrollo (compilador, motor de documentación, etc.)'],
            ['JRE', 'Java Runtime Environment', 'Ejecutar código Java, correr programas Java. Se instala para Linux, Windows o Mac'],
            ['JVM', 'Java Virtual Machine', 'Máquina virtual que corre entre el lenguaje y el SO. Es lo que cambia en cada plataforma'],
          ],
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Regla nemotécnica: si solo querés <strong>correr</strong> programas Java, te alcanza el JRE. Si querés <strong>escribirlos</strong>, necesitás el JDK, que ya te trae el JRE y la JVM adentro.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-21-1', q: 'El JDK involucra tanto a la JVM como al JRE.', a: true, explain: 'El apunte lo dice textual: el entorno de desarrollo se denomina JDK, que involucra tanto la JVM como también el JRE.' },
          { id: 'tf-21-2', q: 'Cuando se escribe código Java, se compila directamente a código de máquina.', a: false, explain: 'Justamente no: con una máquina virtual se compila para el lenguaje de la máquina virtual y no para lenguaje de máquina.' },
          { id: 'tf-21-3', q: 'El JRE se instala igual en Linux, Windows y Mac, sin cambios entre plataformas.', a: false, explain: 'El JRE sí se instala para Linux, Windows y Mac, pero la máquina virtual es lo que cambia en cada plataforma.' },
          { id: 'tf-21-4', q: 'Se puede compilar un programa con un JDK en Windows y correrlo en un JRE para Linux.', a: true, explain: 'Es el ejemplo literal del apunte: el código se compila una vez en cualquier plataforma y luego puede correr en cualquier máquina virtual de cualquier otra.' },
          { id: 'tf-21-5', q: 'En C, cuando se compila, se hace en lenguaje de máquina y para un sistema operativo determinado.', a: true, explain: 'El apunte lo usa como contraste: si tengo Linux, debo compilar en C para Linux; lo mismo sucedería con Windows o Mac.' },
          { id: 'tf-21-6', q: '.Net también usa una máquina virtual, según el apunte.', a: true, explain: 'El apunte lo menciona expresamente: "como es en el caso de Java (o .Net para el caso)".' },
        ],
        mc: [
          {
            id: 'mc-21-1',
            q: '¿Qué significan las siglas JDK, JRE y JVM?',
            options: [
              'Java Development Kit, Java Runtime Environment, Java Virtual Machine',
              'Java Deploy Kernel, Java Reference Engine, Java Verified Machine',
              'Java Debug Kit, Java Resource Environment, Java Virtual Manager',
              'Java Default Kit, Java Running Executable, Java Value Machine',
            ],
            correctIndex: 0,
            explain: 'JDK es Java Development Kit, JRE es Java Runtime Environment y JVM es Java Virtual Machine.',
          },
          {
            id: 'mc-21-2',
            q: 'Según el apunte, ¿qué trae el JDK que no trae el JRE?',
            options: [
              'Herramientas de desarrollo como el compilador y el motor para hacer documentación',
              'Solamente la máquina virtual, que el JRE no incluye',
              'El sistema operativo sobre el que corre la máquina virtual',
              'La memoria física que reserva el programa al ejecutarse',
            ],
            correctIndex: 0,
            explain: 'El JDK tiene muchas herramientas de desarrollo, como ser el compilador, el motor para hacer documentación, etc. El JRE sirve para ejecutar código Java.',
          },
          {
            id: 'mc-21-3',
            q: '¿Dónde corre la máquina virtual, según el apunte?',
            options: [
              'Entre el lenguaje y el sistema operativo',
              'Entre el sistema operativo y el hardware de red',
              'Dentro del compilador, como un módulo suyo',
              'Entre el usuario y la interfaz gráfica',
            ],
            correctIndex: 0,
            explain: 'El apunte define la JVM así: "una máquina virtual corre entre el lenguaje y el SO".',
          },
        ],
        ms: [
          {
            id: 'ms-21-1',
            q: '¿Cuáles de estas afirmaciones sobre el modelo de compilación de Java son correctas según el apunte?',
            options: [
              'Se compila para el lenguaje de la máquina virtual, no para lenguaje de máquina',
              'Lo que se instala para diferentes plataformas es la máquina virtual',
              'El código se compila una vez y puede correr en cualquier máquina virtual de otra plataforma',
              'Cuando se instala Java, se instala el JRE (y la JVM)',
              'Hay que recompilar el código en cada sistema operativo donde se quiera correr',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Recompilar en cada plataforma es lo que pasa en C, justamente el contraejemplo que usa el apunte. En Java se compila una vez y corre en cualquier JVM.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-21-1', front: 'JDK', back: 'Java Development Kit. El entorno de desarrollo: involucra tanto la JVM como el JRE, y suma herramientas de desarrollo como el compilador y el motor para hacer documentación.' },
        { id: 'fc-21-2', front: 'JRE', back: 'Java Runtime Environment. Sirve para ejecutar código Java, para correr programas Java. Se instala para Linux, Windows o Mac.' },
        { id: 'fc-21-3', front: 'JVM', back: 'Java Virtual Machine. Una máquina virtual que corre entre el lenguaje y el SO. Cuando se escribe código Java no se compila a código de máquina.' },
        { id: 'fc-21-4', front: '¿Cómo compila C?', back: 'En lenguaje de máquina y para un SO determinado: si tengo Linux, debo compilar en C para Linux (lo mismo con Windows o Mac).' },
        { id: 'fc-21-5', front: '¿Qué cambia en cada plataforma en Java?', back: 'La máquina virtual. El JRE se instala para Linux, Windows o Mac, y la VM es lo que cambia. El código se compila una vez y corre en cualquier VM de cualquier otra plataforma.' },
        { id: 'fc-21-6', front: 'Ejemplo de portabilidad del apunte', back: 'Escribo y compilo con un JDK en Windows, pero puedo correr el programa en un JRE para Linux.' },
      ],
    },
    {
      id: '22',
      unit: 'jvm',
      title: 'Del código fuente al Bytecode: el recorrido de la ejecución',
      criollo: 'Acá se responde la pregunta trampa: ¿Java es compilado o interpretado? Ninguna de las dos. Escribís fuente, javac te lo pasa a Bytecode binario, y recién en tiempo de ejecución el JIT lo traduce a lo que la JVM entiende. Después entran en escena el ClassLoader, el Memory Manager, el Garbage Collector y el Exception Handler, que son los que hacen el laburo sucio por vos.',
      blocks: [
        {
          type: 'h3',
          text: 'Primera parte: fuente, compilador y Bytecode',
          criollo: 'De lo que escribís a un binario que todavía nadie ejecuta directo.',
        },
        {
          type: 'ul',
          items: [
            'Lo primero que se hace es <strong>escribir el archivo de código fuente</strong>. El código fuente consiste en instrucciones en lenguaje natural, en inglés.',
            'El código fuente se debe <strong>compilar</strong>. El compilador es una de las herramientas que tiene el JDK, con el cual se logra un código en <strong>Bytecode</strong>. El producto del compilador <strong>no es lo que la JVM ejecuta en forma directa</strong>. Tampoco es código de máquina.',
            'El archivo compilado que está en Bytecode es un <strong>archivo binario</strong>. La JVM <strong>no interpreta Bytecode directamente</strong>.',
          ],
        },
        {
          type: 'p',
          text: 'Hay lenguajes que son <strong>interpretados</strong> (por ejemplo: PHP, Pearl) y otros que son <strong>compilados</strong> (por ejemplo: C). <strong>Java no es un lenguaje interpretado ni compilado.</strong>',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Esta es de las que caen seguro en el parcial: Java <strong>no</strong> es interpretado ni compilado. El producto de javac no es código de máquina ni es algo que la JVM ejecute en forma directa.',
        },
        {
          type: 'h3',
          text: 'Segunda parte: el JIT y los módulos del JRE',
          criollo: 'El JIT es el traductor de último momento, y detrás vienen los cuatro módulos que administran todo.',
        },
        {
          type: 'ul',
          items: [
            'Cuando el programa corre, el <strong>JRE</strong> toma esos archivos en Bytecode y los pasa por el <strong>JIT</strong> (<em>Just In Time compiler</em>), para entonces procesarlo y enviarlo al lenguaje que entiende la <strong>JVM</strong>.',
            'Una vez procesado se utiliza el módulo <strong>ClassLoader</strong>, el cual levanta a memoria todo lo necesario para poder correr el programa. El ClassLoader levanta a memoria clases, objetos, etc., mediante el módulo de <strong>Memory Manager</strong>; este módulo habla tanto con la memoria física de la máquina como con la plataforma si es que necesita paginar, etc.',
            'El <strong>Garbage Collector</strong>, a diferencia de C, administra la memoria: cuando una variable o referencia ya no se usa más, la elimina automáticamente de la memoria.',
            'Por último está el <strong>Exception Handler</strong>, un módulo que lo que hace es manejar los posibles errores que puedan llegar a lanzarse durante la ejecución del programa.',
          ],
        },
        {
          type: 'p',
          text: 'Al haber una <strong>liberación automática de la memoria</strong> no hay que hacer una reserva previa: en Java no necesitamos <code>malloc</code> ni tampoco necesitamos liberar la memoria una vez utilizada.',
        },
        {
          type: 'table',
          caption: 'Los módulos que intervienen en la ejecución',
          headers: ['Módulo', 'Qué hace'],
          rows: [
            ['JIT (Just In Time compiler)', 'Procesa el Bytecode que le pasa el JRE y lo envía al lenguaje que entiende la JVM'],
            ['ClassLoader', 'Levanta a memoria todo lo necesario para correr el programa: clases, objetos, etc.'],
            ['Memory Manager', 'Habla con la memoria física de la máquina y con la plataforma si necesita paginar'],
            ['Garbage Collector', 'Administra la memoria: elimina automáticamente lo que ya no se usa. Por eso no hace falta malloc ni liberar memoria'],
            ['Exception Handler', 'Maneja los posibles errores que puedan lanzarse durante la ejecución'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-22-1', q: 'Java es un lenguaje interpretado, como PHP.', a: false, explain: 'El apunte es taxativo: Java no es un lenguaje interpretado ni compilado. PHP y Pearl son los ejemplos de interpretados; C, de compilado.' },
          { id: 'tf-22-2', q: 'El producto del compilador es lo que la JVM ejecuta en forma directa.', a: false, explain: 'El producto del compilador no es lo que la JVM ejecuta en forma directa, ni tampoco es código de máquina. La JVM no interpreta Bytecode directamente.' },
          { id: 'tf-22-3', q: 'El archivo compilado que está en Bytecode es un archivo binario.', a: true, explain: 'Así lo describe el apunte en la primera parte del procedimiento.' },
          { id: 'tf-22-4', q: 'En Java hay que reservar la memoria con malloc antes de usarla.', a: false, explain: 'Al haber liberación automática de la memoria por el Garbage Collector, no hay que hacer reserva previa: no necesitamos malloc ni liberar la memoria una vez utilizada.' },
          { id: 'tf-22-5', q: 'El ClassLoader levanta a memoria clases y objetos mediante el módulo de Memory Manager.', a: true, explain: 'Exactamente: el ClassLoader levanta a memoria todo lo necesario para correr el programa, valiéndose del Memory Manager.' },
          { id: 'tf-22-6', q: 'El código fuente consiste en instrucciones en lenguaje natural, en inglés.', a: true, explain: 'Es la definición que da el apunte en el primer punto del procedimiento.' },
        ],
        mc: [
          {
            id: 'mc-22-1',
            q: '¿Qué hace el JIT?',
            options: [
              'Toma el Bytecode y lo procesa para enviarlo al lenguaje que entiende la JVM',
              'Traduce el código fuente en inglés a Bytecode binario',
              'Libera de la memoria las referencias que ya no se usan',
              'Maneja los errores que se lanzan durante la ejecución',
            ],
            correctIndex: 0,
            explain: 'JIT es Just In Time compiler. El JRE toma los archivos en Bytecode y los pasa por el JIT para procesarlos y enviarlos al lenguaje que entiende la JVM. Pasar de fuente a Bytecode es tarea del compilador; liberar memoria, del Garbage Collector; los errores, del Exception Handler.',
          },
          {
            id: 'mc-22-2',
            q: '¿Cuál es la diferencia que marca el apunte entre Java y C respecto de la memoria?',
            options: [
              'En Java el Garbage Collector elimina automáticamente lo que ya no se usa',
              'En Java hay que reservar el heap antes de crear cada objeto',
              'En C la memoria la administra la máquina virtual del sistema',
              'En C no existe la posibilidad de liberar memoria manualmente',
            ],
            correctIndex: 0,
            explain: 'El Garbage Collector, a diferencia de C, administra la memoria: cuando una variable o referencia ya no se usa más, la elimina automáticamente.',
          },
          {
            id: 'mc-22-3',
            q: 'Según el apunte, ¿qué lenguajes se dan como ejemplo de interpretados?',
            options: [
              'PHP y Pearl',
              'C y C++',
              'Java y .Net',
              'Prolog y Lisp',
            ],
            correctIndex: 0,
            explain: 'El apunte menciona PHP y Pearl como interpretados y C como compilado, para concluir que Java no es ni una cosa ni la otra.',
          },
        ],
        ms: [
          {
            id: 'ms-22-1',
            q: '¿Cuáles de estos módulos intervienen en la segunda parte del procedimiento de ejecución?',
            options: [
              'JIT (Just In Time compiler)',
              'ClassLoader',
              'Memory Manager',
              'Garbage Collector',
              'Exception Handler',
            ],
            correctIndexes: [0, 1, 2, 3, 4],
            explain: 'Los cinco aparecen en la segunda parte del procedimiento: el JRE pasa el Bytecode por el JIT, el ClassLoader levanta a memoria con el Memory Manager, el Garbage Collector administra la memoria y el Exception Handler maneja los errores.',
          },
          {
            id: 'ms-22-2',
            q: '¿Cuáles de estas afirmaciones sobre el Bytecode son correctas?',
            options: [
              'Es el producto del compilador del JDK',
              'Es un archivo binario',
              'La JVM no lo interpreta directamente',
              'No es código de máquina',
              'Es texto plano legible en cualquier editor',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El Bytecode es binario, no es código de máquina y la JVM no lo interpreta directamente. Lo que es texto plano en lenguaje natural es el código fuente, no el Bytecode.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-22-1', front: '¿Java es compilado o interpretado?', back: 'Ninguno de los dos. Hay lenguajes interpretados (PHP, Pearl) y compilados (C). Java no es un lenguaje interpretado ni compilado.' },
        { id: 'fc-22-2', front: 'Bytecode', back: 'El código que produce el compilador del JDK. Es un archivo binario, no es código de máquina, y la JVM no lo interpreta ni lo ejecuta en forma directa.' },
        { id: 'fc-22-3', front: 'JIT', back: 'Just In Time compiler. El JRE toma los archivos en Bytecode y los pasa por el JIT para procesarlos y enviarlos al lenguaje que entiende la JVM.' },
        { id: 'fc-22-4', front: 'ClassLoader', back: 'Módulo que levanta a memoria todo lo necesario para correr el programa (clases, objetos, etc.), mediante el módulo de Memory Manager.' },
        { id: 'fc-22-5', front: 'Memory Manager', back: 'Módulo que habla tanto con la memoria física de la máquina como con la plataforma si es que necesita paginar, etc.' },
        { id: 'fc-22-6', front: 'Garbage Collector', back: 'Administra la memoria: cuando una variable o referencia ya no se usa más, la elimina automáticamente. Por eso en Java no necesitamos malloc ni liberar la memoria.' },
        { id: 'fc-22-7', front: 'Exception Handler', back: 'Módulo que maneja los posibles errores que puedan llegar a lanzarse durante la ejecución del programa.' },
      ],
    },
    {
      id: '23',
      unit: 'jvm',
      title: 'La memoria de la JVM y el Classpath',
      criollo: 'Tu programa nunca toca la memoria física: toca un área que la VM le administra. Esa área viene partida en tres (HEAP, STACK y CLASS) y cada una guarda algo distinto. Y el CLASSPATH es la variable de entorno que le dice al JRE dónde buscar las librerías; por suerte el IDE te la maneja solo.',
      blocks: [
        {
          type: 'h3',
          text: 'Tercera parte: la memoria',
          criollo: 'El programa le pide a la VM y la VM le pide al sistema. Nunca al revés.',
        },
        {
          type: 'p',
          text: 'El ClassLoader usa el Memory Manager para acceder a la memoria RAM de la computadora. Java es un lenguaje que utiliza una <em>Virtual Machine</em>: es esta la que usa la memoria física, pero <strong>nuestro programa no usa memoria física</strong>, sino que usa un <strong>área de memoria que la VM administra</strong>.',
        },
        {
          type: 'p',
          text: 'La JVM reserva una cantidad física de memoria para poder funcionar. Esa memoria está dividida en <strong>3 partes fundamentales</strong>:',
        },
        {
          type: 'ol',
          items: [
            '<strong>HEAP</strong>: como la palabra lo dice, es el "montón" de objetos y demás datos que están ejecutándose en un momento determinado.',
            '<strong>STACK</strong>: el área que maneja la <strong>pila de llamadas</strong>. Cuando una función llama a otra y le pasa argumentos (y llama a otra que le pasa otros argumentos y así sucesivamente), no solo se va almacenando qué función llama a qué otra función, sino también los argumentos que se van pasando entre funciones y los valores retornados por cada una.',
            '<strong>CLASS</strong>: el área que maneja los valores de variables que son "de Clase", también llamados <strong>"estáticos"</strong>.',
          ],
        },
        {
          type: 'p',
          text: 'El JRE junto con la JVM interactúan con el disco rígido (u otros recursos) o con el SO con la plataforma. <strong>El programa nunca interactuará con los recursos directamente, siempre mediante la VM.</strong>',
        },
        {
          type: 'h3',
          text: 'Classpath',
          criollo: 'El lugar donde el JRE va a buscar las librerías. Si no está bien seteado, tu programa no encuentra nada.',
        },
        {
          type: 'p',
          text: 'Es el espacio definido en el SO, accedido por el JRE, donde se encontrarán <strong>todas las librerías del lenguaje</strong> para que pueda correr la JVM, funcionar el JRE y ejecutarse nuestros programas. También cualquier librería de utilidades que necesitemos agregar a nuestras aplicaciones: frameworks web, utilidades de audio, librerías de estadísticas, frameworks de persistencia, controladores de bases de datos, etc.',
        },
        {
          type: 'p',
          text: '<code>CLASSPATH</code> es una <strong>variable de entorno del SO</strong> que tenemos que establecer para correr nuestros programas Java. Por defecto, el valor de esta variable es el <strong>"directorio actual"</strong>. Por lo tanto, podríamos hacerla apuntar a un directorio donde tenemos todas las librerías y listo. Normalmente esto no es muy práctico y existen un montón de herramientas para solucionar este problema. <strong>Los IDE, por lo general, manejan el CLASSPATH por nosotros.</strong>',
        },
        {
          type: 'table',
          caption: 'Las 3 áreas de memoria de la JVM',
          headers: ['Área', 'Qué guarda'],
          rows: [
            ['HEAP', 'El "montón" de objetos y demás datos que están ejecutándose en un momento determinado'],
            ['STACK', 'La pila de llamadas: qué función llama a qué otra, los argumentos que se pasan y los valores retornados por cada una'],
            ['CLASS', 'Los valores de las variables "de Clase", también llamados "estáticos"'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-23-1', q: 'El programa Java usa directamente la memoria física de la máquina.', a: false, explain: 'La que usa la memoria física es la VM. Nuestro programa usa un área de memoria que la VM administra.' },
          { id: 'tf-23-2', q: 'El área de STACK maneja la pila de llamadas, incluyendo los argumentos pasados y los valores retornados.', a: true, explain: 'Es la definición exacta del apunte para el área de STACK.' },
          { id: 'tf-23-3', q: 'El área de CLASS maneja los objetos que están ejecutándose en un momento determinado.', a: false, explain: 'Eso es el HEAP. El área de CLASS maneja los valores de variables que son "de Clase" o "estáticos".' },
          { id: 'tf-23-4', q: 'Por defecto, el valor de la variable CLASSPATH es el "directorio actual".', a: true, explain: 'Así lo dice el apunte; por eso podríamos hacerla apuntar a un directorio con todas las librerías, aunque no sea muy práctico.' },
          { id: 'tf-23-5', q: 'Los IDE, por lo general, manejan el CLASSPATH por nosotros.', a: true, explain: 'Es el cierre del apunte sobre el tema: existen un montón de herramientas para solucionar el problema y los IDE suelen encargarse.' },
          { id: 'tf-23-6', q: 'El programa puede interactuar directamente con el disco rígido sin pasar por la VM.', a: false, explain: 'El apunte lo remarca: el programa nunca interactuará con los recursos directamente, siempre mediante la VM.' },
        ],
        mc: [
          {
            id: 'mc-23-1',
            q: '¿Cuáles son las 3 partes fundamentales en las que se divide la memoria que reserva la JVM?',
            options: [
              'HEAP, STACK y CLASS',
              'HEAP, STACK y CACHE',
              'CLASS, POOL y STACK',
              'HEAP, BUFFER y CLASS',
            ],
            correctIndex: 0,
            explain: 'El apunte las enumera así: 1. HEAP, 2. el área de STACK, 3. el área de CLASS.',
          },
          {
            id: 'mc-23-2',
            q: '¿Qué es el HEAP según el apunte?',
            options: [
              'El "montón" de objetos y demás datos que están ejecutándose en un momento determinado',
              'La pila donde se apilan las llamadas entre funciones',
              'El área donde viven las variables estáticas o de clase',
              'El espacio del SO donde se guardan las librerías del lenguaje',
            ],
            correctIndex: 0,
            explain: 'El apunte lo dice casi literal: "como la palabra lo dice, es el montón de objetos y demás datos que están ejecutándose en un momento determinado".',
          },
          {
            id: 'mc-23-3',
            q: '¿Qué es el CLASSPATH?',
            options: [
              'Una variable de entorno del SO que indica dónde están las librerías',
              'Un área de memoria que reserva la JVM para las clases',
              'El directorio donde el compilador deja los archivos .class',
              'Un módulo del JRE que carga las clases a memoria',
            ],
            correctIndex: 0,
            explain: 'CLASSPATH es una variable de entorno del SO que hay que establecer para correr nuestros programas Java; define el espacio donde el JRE encuentra las librerías. El que carga clases a memoria es el ClassLoader.',
          },
        ],
        ms: [
          {
            id: 'ms-23-1',
            q: '¿Qué tipos de librerías menciona el apunte como ejemplos de lo que puede vivir en el classpath?',
            options: [
              'Frameworks web',
              'Utilidades de audio',
              'Librerías de estadísticas',
              'Frameworks de persistencia',
              'Controladores de bases de datos',
            ],
            correctIndexes: [0, 1, 2, 3, 4],
            explain: 'El apunte enumera los cinco: frameworks web, utilidades de audio, librerías de estadísticas, frameworks de persistencia, controladores de bases de datos, etc.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-23-1', front: 'HEAP', back: 'El "montón" de objetos y demás datos que están ejecutándose en un momento determinado.' },
        { id: 'fc-23-2', front: 'STACK', back: 'Área que maneja la pila de llamadas: qué función llama a qué otra función, los argumentos que se van pasando entre funciones y los valores retornados por cada una.' },
        { id: 'fc-23-3', front: 'Área de CLASS', back: 'Maneja los valores de variables que son "de Clase", también llamados "estáticos".' },
        { id: 'fc-23-4', front: '¿El programa usa memoria física?', back: 'No. La que usa la memoria física es la Virtual Machine; nuestro programa usa un área de memoria que la VM administra.' },
        { id: 'fc-23-5', front: 'Acceso a recursos', back: 'El JRE junto con la JVM interactúan con el disco rígido, otros recursos, el SO y la plataforma. El programa nunca interactuará con los recursos directamente, siempre mediante la VM.' },
        { id: 'fc-23-6', front: 'Classpath', back: 'Espacio definido en el SO, accedido por el JRE, donde están todas las librerías del lenguaje y las de utilidades que agreguemos, para que corra la JVM, funcione el JRE y se ejecuten nuestros programas.' },
        { id: 'fc-23-7', front: 'Valor por defecto de CLASSPATH', back: 'El "directorio actual". Se puede hacer apuntar a un directorio con todas las librerías, aunque no suele ser práctico. Los IDE por lo general manejan el CLASSPATH por nosotros.' },
      ],
    },
    {
      id: '24',
      unit: 'jdk',
      title: 'El compilador javac y el entorno de ejecución java',
      criollo: 'Las dos herramientas que usás sí o sí, aunque el IDE te las esconda. javac toma el .java y escupe el .class, resolviendo las dependencias solo. java corre el programa, pero ojo: le pasás el nombre de la clase, no el del archivo. Y si te quedás sin memoria, los culpables se llaman Xms y Xmx.',
      blocks: [
        {
          type: 'h3',
          text: 'Herramientas Java',
          criollo: 'El compilador es solo la punta del iceberg del kit.',
        },
        {
          type: 'p',
          text: 'Ya se ha abordado una de las herramientas fundamentales del kit de desarrollo incluido con Java: el compilador. Pero este, como es de esperarse, <strong>no es la única herramienta que ofrece el kit</strong>.',
        },
        {
          type: 'h3',
          text: 'Compilador: javac',
          criollo: 'javac analiza sintaxis y traduce. Lo que no hace es arreglarte el código feo.',
        },
        {
          type: 'p',
          text: 'El compilador toma los archivos de código fuente y los pasa a código que la máquina virtual puede utilizar. El <strong><code>javac</code></strong> (<em>java compiler</em>) hace lo que hacen todos los compiladores: <strong>analizar la sintaxis</strong> del código fuente y, si es correcta, pasar el código a un estado <strong>"ejecutable"</strong>. De lo contrario, muestra los errores en la sintaxis.',
        },
        {
          type: 'p',
          text: 'A diferencia de otros compiladores (siendo <strong>"jikes"</strong>, el compilador de Java creado por IBM, el mejor ejemplo), <strong>javac no hace optimizaciones sobre el código</strong>. Es decir, si repetimos variables, organizamos mal las sentencias de control, en fin, si nuestro código es ineficiente, el resultado compilado será ineficiente. Por fortuna, la máquina virtual, antes de ejecutar el código (mediante el JIT visto en el módulo anterior) <strong>sí hace optimizaciones de todo tipo</strong>.',
        },
        {
          type: 'p',
          text: 'Sin contar con un IDE, la forma de utilizar <code>javac</code> es muy sencilla. Teniendo acceso al ejecutable del compilador, se debe llamar a <code>javac</code> seguido del archivo de código fuente a compilar. Por ejemplo:',
        },
        {
          type: 'code',
          code: '>javac Auto.java',
        },
        {
          type: 'p',
          text: 'Si la clase <code>Auto</code> tiene una agregación con la clase <code>Motor</code>, por ejemplo, <code>javac</code> compilará la clase <code>Motor</code> de forma correspondiente. Es decir, <strong>javac compila las dependencias de cada clase según sea necesario</strong>. El archivo compilado resultante será <code>Auto.class</code>.',
        },
        {
          type: 'p',
          text: 'Por defecto, el compilador arroja los archivos compilados <strong>en el lugar donde se ejecuta</strong>. Alternativamente, se le puede pasar como argumentos desde dónde tomar las fuentes y dónde dejar los compilados, que es lo que generalmente hacen los IDE cuando usan el <code>javac</code>. En caso de usar librerías, es necesario pasarle al compilador la ubicación de estas para evitar errores.',
        },
        {
          type: 'p',
          text: 'El compilador <code>javac</code> tiene variedad de opciones, que pueden consultarse con:',
        },
        {
          type: 'code',
          code: '>javac -help\n\n>javac -X',
        },
        {
          type: 'p',
          text: 'La segunda, <code>-X</code>, brinda una serie <strong>"extendida"</strong> de configuraciones disponibles.',
        },
        {
          type: 'h3',
          text: 'El entorno de ejecución: java',
          criollo: 'Acá está el error clásico del principiante: escribir "java Auto.class". No. Es "java Auto".',
        },
        {
          type: 'p',
          text: 'Una vez compiladas las fuentes, vamos a querer correr el programa. Para eso se utiliza el comando <strong><code>java</code></strong>, que llama al entorno de ejecución. Contrario a lo que se puede pensar a priori, <strong>no debemos indicarle el archivo a ejecutar, sino el nombre de la clase</strong>. Por ejemplo, si tomamos el caso anterior, donde compilamos <code>Auto.java</code> y obtuvimos <code>Auto.class</code>, para "correr" el programa del auto debemos hacer:',
        },
        {
          type: 'code',
          code: '>java Auto',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Nótese cómo le pasamos el <strong>nombre de la clase</strong> a correr y <strong>no el nombre del archivo compilado</strong>. Nada de <code>java Auto.class</code>.',
        },
        {
          type: 'h3',
          text: 'Parámetros del comando java',
          criollo: 'Todos opcionales, pero classpath, Xms y Xmx son los que te van a salvar cuando algo explote.',
        },
        {
          type: 'p',
          text: 'Al igual que el compilador, el comando <code>java</code> acepta una serie de parámetros de configuración, <strong>todos opcionales</strong>, pero que sirven para tener un control más fino sobre la ejecución del programa. Los más importantes son:',
        },
        {
          type: 'ul',
          items: [
            'El parámetro <strong><code>classpath</code></strong>: mediante el cual le indicaremos dónde encontrar librerías, si el programa las necesita.',
            'Los parámetros <strong><code>Xms</code> y <code>Xmx</code></strong>: ambos controlan los límites de la memoria física que utilizará el programa al momento de ejecutarse. <code>Xms</code> indica cuánta memoria física dispondrá el <strong>"heap"</strong> y <code>Xmx</code> hasta cuánto podrá crecer (extenderse) para acomodar los objetos de los cuales necesite el programa.',
          ],
        },
        {
          type: 'p',
          text: 'Si la ejecución, por la razón que sea, excede el valor de <code>Xmx</code>, se lanza un error (<code>java.lang.OutOfMemoryError</code>). Si no se especifican estos parámetros, se establecen unos valores por defecto, de acuerdo con un algoritmo denominado <strong>"ergonómico"</strong>.',
        },
        {
          type: 'table',
          caption: 'javac vs. java',
          headers: ['Comando', 'Qué hace', 'Qué se le pasa'],
          rows: [
            ['javac', 'Analiza la sintaxis del código fuente y, si es correcta, lo pasa a un estado "ejecutable". Compila también las dependencias', 'El archivo de código fuente: <code>javac Auto.java</code>'],
            ['java', 'Llama al entorno de ejecución para correr el programa', 'El nombre de la clase, no el del archivo: <code>java Auto</code>'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-24-1', q: 'javac hace optimizaciones sobre el código que compila.', a: false, explain: 'A diferencia de otros compiladores (jikes, de IBM, es el mejor ejemplo), javac no hace optimizaciones. Si el código es ineficiente, el compilado será ineficiente. Quien sí optimiza es la máquina virtual mediante el JIT.' },
          { id: 'tf-24-2', q: 'Para ejecutar un programa hay que escribir "java Auto.class".', a: false, explain: 'Al comando java no se le indica el archivo sino el nombre de la clase: "java Auto".' },
          { id: 'tf-24-3', q: 'Si la clase Auto tiene una agregación con Motor, javac compilará también la clase Motor.', a: true, explain: 'javac compila las dependencias de cada clase según sea necesario. Es el ejemplo literal del apunte.' },
          { id: 'tf-24-4', q: 'Por defecto, el compilador deja los archivos compilados en el lugar donde se ejecuta.', a: true, explain: 'Así es. Alternativamente se le pueden pasar como argumentos desde dónde tomar las fuentes y dónde dejar los compilados, que es lo que suelen hacer los IDE.' },
          { id: 'tf-24-5', q: 'Los parámetros de configuración del comando java son obligatorios.', a: false, explain: 'El apunte aclara que son todos opcionales, pero sirven para tener un control más fino sobre la ejecución del programa.' },
          { id: 'tf-24-6', q: 'Si la ejecución excede el valor de Xmx se lanza un java.lang.OutOfMemoryError.', a: true, explain: 'Es exactamente el error que menciona el apunte.' },
        ],
        mc: [
          {
            id: 'mc-24-1',
            q: '¿Qué diferencia hay entre Xms y Xmx?',
            options: [
              'Xms indica cuánta memoria física dispondrá el heap y Xmx hasta cuánto podrá crecer',
              'Xms limita el stack y Xmx limita el heap del programa',
              'Xms fija la memoria mínima del sistema y Xmx la del compilador',
              'Xms configura el classpath de origen y Xmx el de destino',
            ],
            correctIndex: 0,
            explain: 'Ambos controlan los límites de la memoria física del programa: Xms es de cuánto dispone el heap y Xmx hasta cuánto puede extenderse para acomodar los objetos que el programa necesite.',
          },
          {
            id: 'mc-24-2',
            q: '¿Cómo se llama el compilador de Java creado por IBM que el apunte menciona como ejemplo de compilador que sí optimiza?',
            options: [
              'jikes',
              'javac',
              'jconsole',
              'javadoc',
            ],
            correctIndex: 0,
            explain: 'El apunte cita a "jikes", el compilador de Java creado por IBM, como el mejor ejemplo de compilador que hace optimizaciones, a diferencia de javac.',
          },
          {
            id: 'mc-24-3',
            q: '¿Con qué comando se consultan las configuraciones "extendidas" del compilador?',
            options: [
              'javac -X',
              'javac -help',
              'java -classpath',
              'javac -Xmx',
            ],
            correctIndex: 0,
            explain: 'javac -help muestra la variedad de opciones; javac -X brinda la serie "extendida" de configuraciones disponibles.',
          },
          {
            id: 'mc-24-4',
            q: 'Si el código fuente es ineficiente, ¿qué pasa con el resultado compilado por javac?',
            options: [
              'Será ineficiente, porque javac no optimiza; la optimización la hace la VM con el JIT',
              'Será eficiente, porque javac reordena las sentencias de control',
              'No compilará, porque javac rechaza el código ineficiente',
              'Será eficiente solo si se pasa el parámetro -X al compilar',
            ],
            correctIndex: 0,
            explain: 'javac no hace optimizaciones: si repetimos variables u organizamos mal las sentencias de control, el resultado compilado será ineficiente. Por fortuna la máquina virtual, mediante el JIT, sí hace optimizaciones de todo tipo antes de ejecutar.',
          },
        ],
        ms: [
          {
            id: 'ms-24-1',
            q: '¿Cuáles de estas afirmaciones sobre javac son correctas?',
            options: [
              'Analiza la sintaxis y, si es correcta, pasa el código a un estado "ejecutable"',
              'Si la sintaxis no es correcta, muestra los errores',
              'Compila las dependencias de cada clase según sea necesario',
              'Por defecto arroja los compilados en el lugar donde se ejecuta',
              'Optimiza el código para que el resultado sea más eficiente',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'javac no optimiza; ese es el punto en el que se lo contrasta con jikes. Todo lo demás es correcto.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-24-1', front: 'javac', back: 'Java compiler. Toma los archivos de código fuente y los pasa a código que la máquina virtual puede utilizar: analiza la sintaxis y, si es correcta, pasa el código a un estado "ejecutable"; si no, muestra los errores.' },
        { id: 'fc-24-2', front: '¿javac optimiza?', back: 'No. A diferencia de jikes (el compilador de Java de IBM), javac no hace optimizaciones: si el código es ineficiente, el compilado será ineficiente. La VM sí optimiza, mediante el JIT, antes de ejecutar.' },
        { id: 'fc-24-3', front: 'Compilar y ejecutar por línea de comandos', back: '>javac Auto.java produce Auto.class. >java Auto corre el programa. Al comando java se le pasa el nombre de la clase, no el del archivo compilado.' },
        { id: 'fc-24-4', front: 'Dependencias al compilar', back: 'javac compila las dependencias de cada clase según sea necesario: si Auto tiene una agregación con Motor, compila también Motor.' },
        { id: 'fc-24-5', front: 'Opciones de javac', back: '>javac -help lista la variedad de opciones; >javac -X brinda una serie "extendida" de configuraciones disponibles.' },
        { id: 'fc-24-6', front: 'Parámetro classpath del comando java', back: 'Le indica dónde encontrar librerías, si el programa las necesita.' },
        { id: 'fc-24-7', front: 'Xms y Xmx', back: 'Controlan los límites de la memoria física del programa. Xms: cuánta memoria dispondrá el heap. Xmx: hasta cuánto podrá crecer. Si se excede Xmx se lanza java.lang.OutOfMemoryError. Sin especificarlos, se usan valores por defecto de un algoritmo "ergonómico".' },
      ],
    },
    {
      id: '25',
      unit: 'jdk',
      title: 'Javadoc, jar y JConsole',
      criollo: 'Tres herramientas más del kit. Javadoc te arma un sitio HTML de documentación a partir de comentarios que empiezan con barra-asterisco-asterisco. Jar empaqueta clases en un archivo que en el fondo es un zip disfrazado y puede funcionar como un ejecutable. Y JConsole es la lupa para espiar cómo se está portando tu programa mientras corre.',
      blocks: [
        {
          type: 'h3',
          text: 'Documentación de código: Javadoc',
          criollo: 'Comentás bien una vez y te queda un sitio web de documentación gratis.',
        },
        {
          type: 'p',
          text: 'Otra herramienta muy común es la llamada <strong><code>javadoc</code></strong>. Javadoc <strong>analiza información incrustada en el código y genera documentación a partir de comentarios en el código fuente</strong>. Es una herramienta muy útil, ya que genera documentación en <strong>formato HTML</strong> y genera también un <strong>"sitio"</strong> con la misma, dividida en <code>&lt;frames&gt;</code> para facilitar la navegación de esta.',
        },
        {
          type: 'p',
          text: 'Como vimos en el módulo de sintaxis, los comentarios en Java pueden hacerse con la doble barra <code>//</code> o, si era un comentario de múltiples líneas, se podía encerrar entre <code>/*</code> y <code>*/</code>. Para poder disparar la generación de "javadoc", es necesario incluir <strong>"comentarios especiales"</strong>. Estos no son más que comentarios regulares, pero <strong>comienzan siempre con <code>/**</code></strong>.',
        },
        {
          type: 'code',
          code: '// comentario de código\n\n/*\n   comentario de código\n   de varias líneas\n*/\n\n/**\n * comentario especial: este SÍ lo toma javadoc\n */',
        },
        {
          type: 'p',
          text: 'El IDE "pinta" los <strong>"comentarios de javadoc"</strong> con un <strong>color distinto</strong> de los "comentarios de código".',
        },
        {
          type: 'p',
          text: 'Para poder generar la documentación, utilizaremos el comando <code>javadoc</code>. Este funciona de manera similar a <code>javac</code>, en el sentido de que le debemos pasar la clase con los comentarios y este irá recorriendo las otras clases que esta primera utiliza según sea necesario. Durante el recorrido, irá generando la documentación.',
        },
        {
          type: 'p',
          text: 'Por supuesto, generar la documentación manualmente de todo un sistema (como compilar) puede ser muy complejo o tedioso. <strong>Lo mejor, hoy en día, es utilizar un IDE para estas tareas.</strong>',
        },
        {
          type: 'p',
          text: 'En el sitio generado, en el punto marcado como <strong>"1"</strong> se puede ver cómo podemos navegar entre los <strong>paquetes</strong> (o, si se selecciona <em>All Classes</em>, se muestran todas, sin filtrar) y en el punto <strong>"2"</strong> están las <strong>clases de cada paquete</strong> (o todas las clases en su defecto). Luego, al seleccionar una clase, podemos ver cómo están todos los "comentarios especiales" que pusimos en el código.',
        },
        {
          type: 'h3',
          text: 'Herramienta de empaquetado: Jar',
          criollo: 'Un .jar es un .zip con otro nombre. Y si le decís cuál es la clase principal, te queda algo parecido a un .exe.',
        },
        {
          type: 'p',
          text: 'El comando <strong><code>jar</code></strong> sirve para <strong>empaquetar clases compiladas en forma de librerías</strong>. El archivo generado es un archivo con extensión <code>.jar</code>. El formato de empaquetado (y compresión, si se configura) es <strong>"zip" estándar</strong>, solo que cambia la extensión: de hecho, podemos abrir un jar con el "WinZip" o cualquier herramienta similar.',
        },
        {
          type: 'p',
          text: 'Asimismo, se puede utilizar el comando <code>jar</code> para <strong>empaquetar todo un programa</strong>, incluso junto con la clase principal de este, la que se utiliza para iniciar el programa. Entonces, podríamos generar un <strong>entregable</strong> con todo el programa para que pueda ejecutarse. Para hacer una analogía con Windows, sería como generar un <code>.exe</code> con todo nuestro programa. De hecho, con la herramienta <code>jar</code> se puede armar el paquete y al mismo tiempo indicar cuál es la clase para ejecutar. Con esto, y usando la misma herramienta <code>jar</code>, podemos mandar a ejecutar el paquete:',
        },
        {
          type: 'code',
          code: '// Compilar la clase\n>javac Auto.java\n\n// Empaquetar el programa Auto, generando un "ejecutable" llamado MiProgramaAuto\n>jar -cvf MiProgramaAuto.jar Auto.class\n\n// Ejecutar el programa, utilizando la herramienta "jar"\n>jar MiProgramaAuto',
        },
        {
          type: 'h3',
          text: 'Herramienta de análisis: JConsole',
          criollo: 'Se engancha a un programa Java que ya está corriendo y te muestra cómo va de memoria, procesador e hilos.',
        },
        {
          type: 'p',
          text: '<strong>JConsole</strong> es una herramienta de <strong><em>profiling</em></strong>. Con ella podemos analizar aspectos básicos de la <strong>performance</strong> de nuestro programa. Es una <strong>herramienta gráfica</strong> que se conecta a un <strong>proceso java</strong> (un programa Java en ejecución) y muestra información sobre el <strong>uso de memoria (heap)</strong>, de <strong>procesador</strong>, de <strong>hilos de ejecución</strong>, etc.',
        },
        {
          type: 'p',
          text: 'Si bien es una herramienta básica, puede ser muy útil para <strong>diagnosticar problemas</strong> con nuestra aplicación, analizando los síntomas y la información reportada. El apunte muestra la pantalla principal de JConsole analizando la ejecución de sí mismo: como es de esperarse, <strong>JConsole está programado en Java</strong>.',
        },
        {
          type: 'h3',
          text: 'Otras herramientas',
          criollo: 'La lista sigue, pero se va del alcance de la materia.',
        },
        {
          type: 'p',
          text: 'La lista de herramientas es extensa, hay varias herramientas más, aunque <strong>escapan al scope de la materia</strong>. Podemos mencionar herramientas para <strong>generar pares de claves pública/privada</strong>, <strong>firmar clases</strong>, <strong>firmar paquetes</strong> (jars generados), <strong>generar web services</strong>, etc.',
        },
        {
          type: 'table',
          caption: 'Herramientas del JDK vistas en el apunte',
          headers: ['Herramienta', 'Tipo', 'Para qué sirve'],
          rows: [
            ['javac', 'Compilador', 'Analiza la sintaxis del fuente y lo pasa a un estado "ejecutable"'],
            ['java', 'Entorno de ejecución', 'Corre el programa; se le pasa el nombre de la clase'],
            ['javadoc', 'Documentación', 'Genera documentación HTML (un sitio dividido en frames) a partir de comentarios que empiezan con /**'],
            ['jar', 'Empaquetado', 'Empaqueta clases compiladas como librerías o como programa entregable; el formato es zip estándar'],
            ['JConsole', 'Análisis (profiling)', 'Herramienta gráfica que se conecta a un proceso java y muestra uso de memoria (heap), procesador e hilos'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-25-1', q: 'Los comentarios especiales que dispara javadoc comienzan con "/**".', a: true, explain: 'Son comentarios regulares pero comienzan siempre con "/**". El IDE incluso los pinta de un color distinto de los comentarios de código.' },
          { id: 'tf-25-2', q: 'Javadoc genera documentación en formato PDF.', a: false, explain: 'Genera documentación en formato HTML, y también un "sitio" con la misma, dividida en frames para facilitar la navegación.' },
          { id: 'tf-25-3', q: 'El formato de empaquetado de un archivo .jar es "zip" estándar, solo que cambia la extensión.', a: true, explain: 'De hecho el apunte aclara que podemos abrir un jar con el "WinZip" o cualquier herramienta similar.' },
          { id: 'tf-25-4', q: 'JConsole es una herramienta de línea de comandos sin interfaz gráfica.', a: false, explain: 'Es una herramienta gráfica que se conecta a un proceso java en ejecución. El apunte muestra su pantalla principal analizándose a sí misma.' },
          { id: 'tf-25-5', q: 'Con la herramienta jar se puede armar el paquete e indicar al mismo tiempo cuál es la clase para ejecutar.', a: true, explain: 'Por eso el apunte lo compara con generar un ".exe" con todo nuestro programa en Windows.' },
          { id: 'tf-25-6', q: 'El comando javadoc solo documenta la clase que se le pasa y ninguna otra.', a: false, explain: 'Funciona de manera similar a javac: le pasamos la clase con los comentarios y va recorriendo las otras clases que esta utiliza según sea necesario, generando documentación durante el recorrido.' },
        ],
        mc: [
          {
            id: 'mc-25-1',
            q: '¿Qué tipo de herramienta es JConsole?',
            options: [
              'Una herramienta de profiling',
              'Una herramienta de empaquetado',
              'Una herramienta de documentación',
              'Un compilador alternativo a javac',
            ],
            correctIndex: 0,
            explain: 'Es una herramienta de profiling: analiza aspectos básicos de la performance del programa (memoria heap, procesador, hilos de ejecución).',
          },
          {
            id: 'mc-25-2',
            q: '¿Qué información muestra JConsole?',
            options: [
              'Uso de memoria (heap), de procesador y de hilos de ejecución',
              'Los errores de sintaxis del código fuente',
              'La estructura de paquetes y clases documentadas',
              'El contenido comprimido de los archivos .jar',
            ],
            correctIndex: 0,
            explain: 'Se conecta a un proceso java en ejecución y muestra información sobre el uso de memoria (heap), de procesador, de hilos de ejecución, etc.',
          },
          {
            id: 'mc-25-3',
            q: 'En el sitio generado por javadoc, ¿qué se ve en el punto marcado como "1"?',
            options: [
              'La navegación entre paquetes, o "All Classes" para verlas todas sin filtrar',
              'Las clases de cada paquete o todas las clases en su defecto',
              'Los comentarios especiales de la clase seleccionada',
              'La lista de errores de sintaxis encontrados al documentar',
            ],
            correctIndex: 0,
            explain: 'En el punto "1" se navega entre los paquetes (o All Classes muestra todas sin filtrar). En el punto "2" están las clases de cada paquete.',
          },
        ],
        ms: [
          {
            id: 'ms-25-1',
            q: '¿Qué otras herramientas menciona el apunte, aunque escapen al scope de la materia?',
            options: [
              'Generar pares de claves pública/privada',
              'Firmar clases',
              'Firmar paquetes (jars generados)',
              'Generar web services',
              'Reemplazar al Garbage Collector de la JVM',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte enumera las cuatro primeras. Nada dice sobre reemplazar el Garbage Collector.',
          },
          {
            id: 'ms-25-2',
            q: '¿Cuáles de estas afirmaciones sobre javadoc son correctas?',
            options: [
              'Analiza información incrustada en el código y genera documentación a partir de comentarios',
              'Genera documentación en formato HTML',
              'Genera un "sitio" dividido en frames para facilitar la navegación',
              'Requiere comentarios especiales que comienzan con "/**"',
              'Solo funciona si el proyecto fue empaquetado previamente con jar',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Nada en el apunte condiciona javadoc a empaquetar previamente con jar; de hecho javadoc funciona de manera similar a javac, partiendo del código fuente.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-25-1', front: 'javadoc', back: 'Analiza información incrustada en el código y genera documentación a partir de comentarios del código fuente. Produce documentación en formato HTML y un "sitio" dividido en frames para facilitar la navegación.' },
        { id: 'fc-25-2', front: 'Comentarios especiales de javadoc', back: 'Son comentarios regulares pero comienzan siempre con "/**". El IDE los pinta con un color distinto de los comentarios de código.' },
        { id: 'fc-25-3', front: '¿Cómo recorre javadoc el proyecto?', back: 'Similar a javac: se le pasa la clase con los comentarios y va recorriendo las otras clases que esta utiliza según sea necesario, generando la documentación durante el recorrido.' },
        { id: 'fc-25-4', front: 'jar', back: 'Comando para empaquetar clases compiladas en forma de librerías. El archivo generado tiene extensión .jar y el formato es zip estándar, así que se puede abrir con WinZip o similar.' },
        { id: 'fc-25-5', front: 'Jar como "ejecutable"', back: 'Se puede empaquetar todo un programa junto con su clase principal, generando un entregable ejecutable (análogo a un .exe en Windows). Ejemplo: >jar -cvf MiProgramaAuto.jar Auto.class y luego >jar MiProgramaAuto.' },
        { id: 'fc-25-6', front: 'JConsole', back: 'Herramienta gráfica de profiling. Se conecta a un proceso java en ejecución y muestra uso de memoria (heap), de procesador, de hilos de ejecución, etc. Útil para diagnosticar problemas.' },
        { id: 'fc-25-7', front: 'Otras herramientas del JDK', back: 'Escapan al scope de la materia: generar pares de claves pública/privada, firmar clases, firmar paquetes (jars generados), generar web services, etc.' },
      ],
    },
    {
      id: '26',
      unit: 'actividades',
      title: 'Actividad: Programar un auto y sus partes',
      criollo: 'La actividad práctica de la unidad 02. Cuatro ejercicios que van de menor a mayor: rueda, caja de velocidades, motor y por último el auto que compone todo lo anterior. Ojo con los reglamentos: si no compila, no está entregada; si no respetás las convenciones de código de los módulos teóricos, tampoco. Y cada ejercicio va en su propio Java Project, copiando y pegando las clases del anterior.',
      blocks: [
        {
          type: 'h3',
          text: 'Reglamentos generales para la actividad',
          criollo: 'Leelos antes de escribir una línea, porque varios de estos puntos te tumban la entrega.',
        },
        {
          type: 'ol',
          items: [
            'La actividad consta de una serie de ejercicios prácticos de código Java. Se espera que la entrega contenga <strong>uno o más programas que compilen y corran correctamente</strong>. De lo contrario no se considerará "entregada".',
            'La entrega consiste en un ítem paquete <strong>exportado desde Eclipse</strong>, según se explica en el tutorial. De usar otro IDE, la entrega deberá estar empaquetada según los procedimientos del IDE.',
            'Cada ejercicio debe tener su propio <strong>"Java Project"</strong> en Eclipse. Si algún ejercicio utiliza las clases del ejercicio anterior, <strong>copiarlas y pegarlas</strong>. No vimos referencias entre proyectos en Eclipse: no utilizarlos.',
            'El objetivo del ejercicio es <strong>la práctica de código</strong>. No es necesario, ni recomendado, realizar operaciones complejas ni validaciones de valores.',
            '<strong>No acoplar la salida de los métodos a la consola.</strong> No usar la salida por consola dentro de un método sin una justificación. De haberla, incluir el comentario en el código.',
            'El código debe <strong>documentarse por sí mismo</strong>: no usar nombres de métodos o variables como "x", "nom", "val", etc. Usar, en cambio, "incógnita", "nombre", "valorDeRetorno", etc.',
            'No se considerará como "entregada" la actividad si se <strong>ignoran las convenciones de código</strong> descriptas en los módulos teóricos.',
            'La actividad <strong>no estará calificada numéricamente</strong>.',
            'La actividad tendrá una valoración de <strong>"entregada" o "no entregada"</strong>.',
            'La actividad <strong>no podrá ser evaluada y reevaluada</strong> por el docente: se admitirá una sola entrega.',
            'Se dará una <strong>devolución global</strong> a los alumnos haciendo hincapié en los puntos flojos comunes mediante la plataforma de la materia y remarcando los puntos correctos.',
          ],
        },
        {
          type: 'h3',
          text: 'Ejercicio 1: la rueda',
          criollo: 'Arrancás con la clase más simple del auto.',
        },
        {
          type: 'p',
          text: 'Implementar la clase rueda para un auto. Las características de una son el <strong>radio</strong>, el <strong>color</strong> y el <strong>tipo de material</strong> que la compone (acero, aleación, etc.). Un comportamiento típico de cualquier rueda es <strong>"girar"</strong>.',
        },
        {
          type: 'p',
          text: 'Realizar una clase de prueba con un método <code>main</code> para poder construir dos o tres ruedas. Hacerlas girar. Mostrar sus datos en la consola (no hace falta todos, elijan un par).',
        },
        {
          type: 'h3',
          text: 'Ejercicio 2: la caja de velocidades',
          criollo: 'Misma idea, pero ahora con un atributo que cambia de estado cuando llamás al comportamiento.',
        },
        {
          type: 'p',
          text: 'Implementar la clase caja de velocidades. Las características de una caja de velocidades de un vehículo típico son el <strong>fabricante</strong>, la <strong>cantidad de marchas</strong> y el <strong>tipo de relación</strong> (larga-mediana-corta o L-M-C). Típicamente, a la caja de velocidades se le <strong>"cambian" las marchas</strong>: representar un comportamiento para cambiar de marcha.',
        },
        {
          type: 'p',
          text: 'Realizar un <code>main</code> que construya diferentes tipos de cajas, con diferentes características. Imprimir un par de los valores más significativos de sus componentes (fabricante y marcha actual, etc.).',
        },
        {
          type: 'h3',
          text: 'Ejercicio 3: el motor',
          criollo: 'Dos comportamientos esta vez: arrancar y detener.',
        },
        {
          type: 'p',
          text: 'Implementar la clase Motor. Cualquier motor cuenta entre sus características la <strong>marca</strong>, los <strong>hp</strong> (o caballos de fuerza) y la <strong>cilindrada</strong> (1600 o 1.6). A cualquier motor se lo debe poder hacer <strong>arrancar</strong> y <strong>detener</strong>.',
        },
        {
          type: 'p',
          text: 'Realizar un <code>main</code> que construya diferentes tipos de motores, con diferentes valores en sus características. Imprimir un par de los más significativos de sus componentes (fabricante y cilindrada, etc.).',
        },
        {
          type: 'h3',
          text: 'Ejercicio 4: el auto',
          criollo: 'Acá se junta todo: el auto se compone de las clases que ya hiciste.',
        },
        {
          type: 'p',
          text: 'Implementar la clase Auto. El auto siempre tiene una <strong>marca</strong> y un <strong>modelo</strong>. Además, un auto se encuentra <strong>compuesto por un motor, una caja de velocidades y una o varias ruedas</strong>. Posee también características como la <strong>cantidad de puertas</strong> y el opcional de <strong>aire acondicionado</strong>.',
        },
        {
          type: 'p',
          text: 'Realizar otro <code>main</code> donde podamos construir las diferentes partes de un auto, y armar autos con esas partes. Imprimir algunos de sus valores.',
        },
        {
          type: 'table',
          caption: 'Resumen de las clases pedidas',
          headers: ['Clase', 'Características', 'Comportamientos'],
          rows: [
            ['Rueda', 'Radio, color, tipo de material (acero, aleación, etc.)', 'Girar'],
            ['Caja de velocidades', 'Fabricante, cantidad de marchas, tipo de relación (larga-mediana-corta o L-M-C)', 'Cambiar de marcha'],
            ['Motor', 'Marca, hp (caballos de fuerza), cilindrada (1600 o 1.6)', 'Arrancar, detener'],
            ['Auto', 'Marca, modelo, cantidad de puertas, aire acondicionado (opcional); compuesto por un motor, una caja de velocidades y una o varias ruedas', 'Se arma con las partes'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Los dos puntos del reglamento que más entregas tumban: <strong>si no compila y corre, no está entregada</strong>, y <strong>si ignorás las convenciones de código de los módulos teóricos, tampoco</strong>. Sumale que se admite una sola entrega, sin reevaluación.',
        },
        {
          type: 'p',
          text: '<strong>Bibliografía de la unidad:</strong> Eckel, B. (2002). <em>Piensa en Java</em> (2da. ed.). Madrid: Pearson Educación (pp. 1-7).',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-26-1', q: 'Si la entrega no compila y corre correctamente, no se considera "entregada".', a: true, explain: 'Es el punto 1 del reglamento general de la actividad.' },
          { id: 'tf-26-2', q: 'Todos los ejercicios pueden vivir en un mismo Java Project de Eclipse.', a: false, explain: 'Cada ejercicio debe tener su propio "Java Project". Si un ejercicio usa clases del anterior, hay que copiarlas y pegarlas: no se vieron referencias entre proyectos.' },
          { id: 'tf-26-3', q: 'La actividad se califica numéricamente.', a: false, explain: 'No estará calificada numéricamente: tendrá una valoración de "entregada" o "no entregada".' },
          { id: 'tf-26-4', q: 'Se admite una sola entrega, sin posibilidad de reevaluación.', a: true, explain: 'El punto 10 del reglamento lo dice expresamente: la actividad no podrá ser evaluada y reevaluada por el docente.' },
          { id: 'tf-26-5', q: 'Se recomienda hacer validaciones de valores complejas en cada clase.', a: false, explain: 'El objetivo es la práctica de código: no es necesario, ni recomendado, realizar operaciones complejas ni validaciones de valores.' },
          { id: 'tf-26-6', q: 'Está permitido usar la salida por consola dentro de un método sin justificación.', a: false, explain: 'El reglamento pide no acoplar la salida de los métodos a la consola. De haber una justificación, hay que incluir el comentario en el código.' },
        ],
        mc: [
          {
            id: 'mc-26-1',
            q: '¿Cuáles son las características de la clase rueda del ejercicio 1?',
            options: [
              'Radio, color y tipo de material',
              'Radio, marca y presión de inflado',
              'Diámetro, color y cantidad de tornillos',
              'Radio, color y velocidad de giro',
            ],
            correctIndex: 0,
            explain: 'El enunciado pide radio, color y tipo de material que la compone (acero, aleación, etc.). El comportamiento típico es "girar".',
          },
          {
            id: 'mc-26-2',
            q: '¿Qué características tiene la caja de velocidades del ejercicio 2?',
            options: [
              'Fabricante, cantidad de marchas y tipo de relación',
              'Marca, cilindrada y cantidad de marchas',
              'Fabricante, modelo y año de fabricación',
              'Cantidad de marchas, color y material',
            ],
            correctIndex: 0,
            explain: 'Fabricante, cantidad de marchas y tipo de relación (larga-mediana-corta o L-M-C). El comportamiento es cambiar de marcha.',
          },
          {
            id: 'mc-26-3',
            q: 'Según el reglamento, ¿cómo deben nombrarse las variables y los métodos?',
            options: [
              'Con nombres que documenten por sí mismos, como "nombre" o "valorDeRetorno"',
              'Con nombres cortos como "x", "nom" o "val" para no ensuciar el código',
              'Con el prefijo del ejercicio al que pertenecen',
              'Todos en mayúsculas, separando palabras con guion bajo',
            ],
            correctIndex: 0,
            explain: 'El reglamento pide que el código se documente por sí mismo: nada de "x", "nom" o "val"; usar "incógnita", "nombre", "valorDeRetorno", etc.',
          },
          {
            id: 'mc-26-4',
            q: '¿De qué se encuentra compuesto el Auto del ejercicio 4?',
            options: [
              'Un motor, una caja de velocidades y una o varias ruedas',
              'Un motor, cuatro ruedas y un tablero',
              'Una caja de velocidades y una o varias ruedas solamente',
              'Un motor y un chasis con puertas',
            ],
            correctIndex: 0,
            explain: 'El auto tiene marca y modelo, está compuesto por un motor, una caja de velocidades y una o varias ruedas, y posee cantidad de puertas y el opcional de aire acondicionado.',
          },
        ],
        ms: [
          {
            id: 'ms-26-1',
            q: '¿Cuáles son características del Motor del ejercicio 3?',
            options: [
              'La marca',
              'Los hp (caballos de fuerza)',
              'La cilindrada (1600 o 1.6)',
              'El color del block',
              'La cantidad de marchas',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'El motor tiene marca, hp y cilindrada, y se lo debe poder hacer arrancar y detener. La cantidad de marchas es de la caja de velocidades.',
          },
          {
            id: 'ms-26-2',
            q: '¿Cuáles de estas condiciones figuran en el reglamento general de la actividad?',
            options: [
              'La entrega consiste en un paquete exportado desde Eclipse (o del IDE que se use)',
              'Cada ejercicio debe tener su propio "Java Project"',
              'No se considerará entregada si se ignoran las convenciones de código de los módulos teóricos',
              'Se dará una devolución global mediante la plataforma de la materia',
              'La nota final se promedia con la del parcial',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La actividad no está calificada numéricamente, así que no hay nota que promediar: la valoración es "entregada" o "no entregada".',
          },
        ],
      },
      flashcards: [
        { id: 'fc-26-1', front: 'Clase Rueda', back: 'Características: radio, color y tipo de material que la compone (acero, aleación, etc.). Comportamiento típico: girar.' },
        { id: 'fc-26-2', front: 'Clase Caja de velocidades', back: 'Características: fabricante, cantidad de marchas y tipo de relación (larga-mediana-corta o L-M-C). Comportamiento: cambiar de marcha.' },
        { id: 'fc-26-3', front: 'Clase Motor', back: 'Características: marca, hp (caballos de fuerza) y cilindrada (1600 o 1.6). Comportamientos: arrancar y detener.' },
        { id: 'fc-26-4', front: 'Clase Auto', back: 'Tiene marca y modelo, cantidad de puertas y el opcional de aire acondicionado. Está compuesto por un motor, una caja de velocidades y una o varias ruedas.' },
        { id: 'fc-26-5', front: 'Organización de la entrega', back: 'Un paquete exportado desde Eclipse (o del IDE usado). Cada ejercicio en su propio "Java Project"; si usa clases del anterior, copiarlas y pegarlas (no se usan referencias entre proyectos).' },
        { id: 'fc-26-6', front: 'Regla sobre la salida por consola', back: 'No acoplar la salida de los métodos a la consola. No usar salida por consola dentro de un método sin justificación; de haberla, incluir el comentario en el código.' },
        { id: 'fc-26-7', front: 'Criterio de aprobación de la actividad', back: 'No está calificada numéricamente: la valoración es "entregada" o "no entregada". Se admite una sola entrega, sin reevaluación, y se da una devolución global por la plataforma.' },
      ],
    },
    {
      id: '27',
      unit: 'actividades',
      title: 'Actividad: Modelar y hacer funcionar una PC',
      criollo: 'La actividad de la unidad 03, hermana de la del auto pero con computadoras. Tres ejercicios: modelar la PC con sus componentes, después compartir un mismo componente entre dos PCs para ver qué pasa cuando lo modificás (spoiler: referencias), y por último implementar encender y apagar en cascada. El ejercicio 2 es el más importante conceptualmente.',
      blocks: [
        {
          type: 'h3',
          text: 'Ejercicio 1: modelar la computadora',
          criollo: 'Una PC con tres componentes básicos y un tipo que la distingue.',
        },
        {
          type: 'p',
          text: 'Una computadora consta de una <strong>marca</strong>, un <strong>modelo</strong> y un <strong>año de fabricación</strong>. Para distinguir entre las computadoras, se les ha asignado un <strong>tipo</strong>: <strong>Tipo D</strong> para desktop, <strong>tipo A</strong> para All-in-one y <strong>tipo L</strong> para Laptop.',
        },
        {
          type: 'p',
          text: 'Cada computadora posee <strong>3 características básicas</strong>, independiente de su tipo. Todas poseen un <strong>disco rígido</strong>, un <strong>procesador</strong> y una cierta cantidad de <strong>memoria</strong>. El disco rígido tiene <strong>marca</strong>, <strong>capacidad en gigabytes</strong> y una <strong>velocidad de operación en RPM</strong>. Por su lado, los procesadores tienen <strong>marca</strong>, <strong>modelo</strong> y <strong>velocidad en gigahertz</strong>.',
        },
        {
          type: 'p',
          text: 'Cada computadora debe tener la posibilidad de <strong>mostrar los valores suyos y de sus componentes</strong>. Por ejemplo, si quiero imprimir los valores de una computadora, puedo imprimir:',
        },
        {
          type: 'code',
          code: 'Toshiba G480 -- Procesador: AMD -- Disco: 500gb -- Ram:4gb',
        },
        {
          type: 'p',
          text: 'Para completar el ejercicio se debe modelar un sistema que permita <strong>construir computadoras y armarlas con sus diferentes características</strong>. Por ejemplo, debe ser capaz de construir una Laptop Toshiba, G480, modelo 2013, con Procesador Intel de 1,5 GHz, con 4 gb de RAM y un disco de 500gb.',
        },
        {
          type: 'ul',
          items: [
            'Realizar un <code>main</code> que construya diferentes tipos de computadoras, con diferentes características. Imprimir un par de los valores más significativos de sus componentes (marca y modelo; o modelo y velocidad, etc.).',
          ],
        },
        {
          type: 'h3',
          text: 'Ejercicio 2: componentes compartidos',
          criollo: 'Acá está la posta del ejercicio: dos PCs apuntando al mismo disco. Le tocás los valores al disco y ambas computadoras "ven" el cambio. Anotá qué pasó, que es parte de la consigna.',
        },
        {
          type: 'p',
          text: 'Copiando las clases del ejercicio anterior:',
        },
        {
          type: 'ul',
          items: [
            'Hacer <strong>OTRO main</strong> para hacer que <strong>dos o más computadoras compartan un mismo componente</strong>. Es decir, si tengo un Samsung de 500gb, tanto una Laptop como una Desktop tengan el mismo disco. Luego <strong>alterarle los valores al componente</strong> en cuestión. Volver a imprimir los valores de la computadora. <strong>Anotar los resultados como comentarios en el código.</strong>',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Recordatorio de la consigna: los comentarios, tal cual en C, son con <code>//</code> o <code>/* ....... */</code>.',
        },
        {
          type: 'h3',
          text: 'Ejercicio 3: encender y apagar',
          criollo: 'Comportamiento en cascada: la PC enciende y arrastra a sus componentes. Y después hay que poder preguntarle a cada uno si está prendido.',
        },
        {
          type: 'ul',
          items: [
            'Implementar el comportamiento <strong>"encender"</strong> de la computadora. Cuando una computadora enciende, <strong>se enciende su procesador y su disco rígido</strong>.',
            'Agregar los <strong>atributos y comportamientos</strong> que consideres necesarios para poder <strong>"preguntarle"</strong> a la computadora y a sus componentes <strong>si están "encendidos"</strong>.',
            'Por otro lado, y de forma similar, implementar el comportamiento <strong>"apagar"</strong>.',
            'Realizar <strong>OTRO main</strong> donde podamos preguntarle a una computadora si está encendida y si sus componentes están encendidos.',
          ],
        },
        {
          type: 'table',
          caption: 'Modelo pedido en el ejercicio 1',
          headers: ['Clase', 'Características'],
          rows: [
            ['Computadora', 'Marca, modelo, año de fabricación y tipo (D = desktop, A = All-in-one, L = Laptop). Posee un disco rígido, un procesador y una cierta cantidad de memoria'],
            ['Disco rígido', 'Marca, capacidad en gigabytes, velocidad de operación en RPM'],
            ['Procesador', 'Marca, modelo, velocidad en gigahertz'],
          ],
        },
        {
          type: 'p',
          text: '<strong>Bibliografía de la unidad:</strong> Horstmann, C. S. y Cornell, G. (2001). <em>Core Java 2</em> (4ta. ed.). New Jersey: Upper Saddle River (pp. 140-149).',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-27-1', q: 'El tipo "A" corresponde a una computadora All-in-one.', a: true, explain: 'Los tipos asignados son: D para desktop, A para All-in-one y L para Laptop.' },
          { id: 'tf-27-2', q: 'El disco rígido tiene marca, capacidad en gigabytes y velocidad de operación en RPM.', a: true, explain: 'Son exactamente las tres características que pide el enunciado para el disco.' },
          { id: 'tf-27-3', q: 'El procesador tiene marca, modelo y capacidad en gigabytes.', a: false, explain: 'El procesador tiene marca, modelo y velocidad en gigahertz. La capacidad en gigabytes es del disco rígido.' },
          { id: 'tf-27-4', q: 'En el ejercicio 2 hay que usar el mismo main del ejercicio 1.', a: false, explain: 'La consigna pide hacer OTRO main, copiando las clases del ejercicio anterior.' },
          { id: 'tf-27-5', q: 'Cuando la computadora enciende, se encienden su procesador y su disco rígido.', a: true, explain: 'Es lo que pide el ejercicio 3 al implementar el comportamiento "encender".' },
          { id: 'tf-27-6', q: 'Los resultados del ejercicio 2 se entregan en un documento aparte.', a: false, explain: 'La consigna pide anotar los resultados como comentarios en el código, con "//" o "/* ....... */".' },
        ],
        mc: [
          {
            id: 'mc-27-1',
            q: '¿Cuáles son las 3 características básicas que posee toda computadora, independiente de su tipo?',
            options: [
              'Un disco rígido, un procesador y una cierta cantidad de memoria',
              'Una marca, un modelo y un año de fabricación',
              'Un procesador, una memoria y un tipo asignado',
              'Un disco rígido, una placa de video y un procesador',
            ],
            correctIndex: 0,
            explain: 'Marca, modelo y año de fabricación son datos de la computadora, pero las 3 características básicas que enumera el enunciado son disco rígido, procesador y memoria.',
          },
          {
            id: 'mc-27-2',
            q: '¿Qué se pide hacer en el ejercicio 2?',
            options: [
              'Que dos o más computadoras compartan un mismo componente, alterarle los valores y volver a imprimir',
              'Implementar los comportamientos encender y apagar en cascada',
              'Construir computadoras de los tres tipos con distintas características',
              'Documentar todas las clases con comentarios especiales de javadoc',
            ],
            correctIndex: 0,
            explain: 'El ejercicio 2 pide otro main donde una Laptop y una Desktop compartan, por ejemplo, un mismo Samsung de 500gb; luego alterar los valores del componente, volver a imprimir y anotar los resultados como comentarios.',
          },
          {
            id: 'mc-27-3',
            q: 'Según el ejemplo del enunciado, ¿qué configuración debe poder construir el sistema?',
            options: [
              'Una Laptop Toshiba G480, modelo 2013, con Procesador Intel de 1,5 GHz, 4 gb de RAM y un disco de 500gb',
              'Una Desktop Samsung G480, modelo 2013, con Procesador AMD de 4 GHz y un disco de 1 tb',
              'Una All-in-one Toshiba, modelo 2015, con Procesador Intel de 500 RPM y 4 gb de disco',
              'Una Laptop Intel G480, modelo 2013, con Procesador Toshiba de 1,5 gb y 4 GHz de RAM',
            ],
            correctIndex: 0,
            explain: 'Es el ejemplo textual del enunciado del ejercicio 1.',
          },
        ],
        ms: [
          {
            id: 'ms-27-1',
            q: '¿Qué se pide en el ejercicio 3?',
            options: [
              'Implementar el comportamiento "encender" de la computadora',
              'Que al encender la computadora se enciendan su procesador y su disco rígido',
              'Agregar atributos y comportamientos para poder preguntar si están encendidos',
              'Implementar de forma similar el comportamiento "apagar"',
              'Implementar un comportamiento "reiniciar" que apague y encienda en secuencia',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El enunciado pide encender, la cascada a procesador y disco, poder preguntar si están encendidos, y apagar. No menciona ningún comportamiento de reinicio.',
          },
          {
            id: 'ms-27-2',
            q: '¿Qué datos tiene la clase Computadora según el enunciado?',
            options: [
              'Marca',
              'Modelo',
              'Año de fabricación',
              'Tipo (D, A o L)',
              'Velocidad de operación en RPM',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La velocidad de operación en RPM es una característica del disco rígido, no de la computadora.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-27-1', front: 'Tipos de computadora del ejercicio', back: 'Tipo D para desktop, tipo A para All-in-one y tipo L para Laptop.' },
        { id: 'fc-27-2', front: 'Características básicas de toda computadora', back: 'Independiente de su tipo: un disco rígido, un procesador y una cierta cantidad de memoria. Además tiene marca, modelo y año de fabricación.' },
        { id: 'fc-27-3', front: 'Clase Disco rígido', back: 'Marca, capacidad en gigabytes y velocidad de operación en RPM.' },
        { id: 'fc-27-4', front: 'Clase Procesador', back: 'Marca, modelo y velocidad en gigahertz.' },
        { id: 'fc-27-5', front: 'Salida esperada al imprimir una computadora', back: 'Por ejemplo: "Toshiba G480 -- Procesador: AMD -- Disco: 500gb -- Ram:4gb".' },
        { id: 'fc-27-6', front: 'Ejercicio 2: componente compartido', back: 'Otro main donde dos o más computadoras compartan un mismo componente (un Samsung de 500gb en una Laptop y en una Desktop). Alterarle los valores al componente, volver a imprimir y anotar los resultados como comentarios en el código.' },
        { id: 'fc-27-7', front: 'Ejercicio 3: encender y apagar', back: 'Al encender la computadora se encienden su procesador y su disco rígido. Hay que agregar los atributos y comportamientos necesarios para preguntarle a la computadora y a sus componentes si están encendidos, e implementar de forma similar "apagar".' },
      ],
    },
    {
      id: '35',
      unit: 'diseno-avanzado',
      title: 'Herencia, dynamic binding y polimorfismo',
      criollo: 'Acá el apunte sube un escalón. Ya sabías que la herencia sirve para no repetir código; ahora te cuenta qué pasa realmente cuando escribís Perro d = new Doberman(). La referencia es de un tipo, el objeto es de otro, y quien decide qué método corre es la JVM en tiempo de ejecución. Eso es dynamic binding, y de ahí sale el polimorfismo: el mismo Perro ladra distinto según qué le hayas atado del otro lado.',
      blocks: [
        {
          type: 'callout',
          tone: 'info',
          text: '<strong>Antes de empezar.</strong> Si querés probar las porciones de código del apunte, acordate de que <strong>cada clase, cada clase abstracta y cada interface va en su propio archivo <code>.java</code></strong>. Y cada vez que hagas un <code>main</code> para probar algo, se recomienda hacerlo también en una clase separada.',
        },
        {
          type: 'h3',
          text: 'Repaso: qué nos daba la herencia',
          criollo: 'Reutilizar código y, de yapa, un protocolo común para hablarle a toda la familia de clases.',
        },
        {
          type: 'p',
          text: 'La principal ventaja de la herencia es <strong>reutilizar código</strong>. Se puede eliminar código duplicado "generalizando" o "abstrayendo" atributos y comportamiento en una clase más general, la <strong>clase padre</strong> o <strong>superclase</strong>. De esta manera, si hay que modificar el código, el cambio será en un solo lado y <strong>todas las subclases verán reflejada la modificación</strong>.',
        },
        {
          type: 'p',
          text: 'Mediante la herencia puedo garantizar que todas las clases "hijas" de una superclase tendrán todo el comportamiento <strong>no privado</strong> disponible. Es decir, al tener una superclase y subclases definimos <strong>"un protocolo común"</strong> para comunicarse (mediante mensajes, llamándole métodos) con la superclase y todas sus hijas. Ese protocolo se denomina <strong>"interfaz pública"</strong>. Por ejemplo: una clase <code>Animal</code> establece un protocolo común para todos los animales que yo defina (Perros, Gatos, Conejos... que son un Animal).',
        },
        {
          type: 'p',
          text: 'Todo comportamiento heredado puede "redefinirse", haciendo <strong>sobreescritura</strong> del método: reemplazando su comportamiento o alterándolo, reutilizando el heredado del padre.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'No confundir sobreescritura con <strong>sobrecarga</strong>: la sobrecarga es un mecanismo mediante el cual podemos definir <strong>"variantes" de un método, manteniendo su nombre pero alterando su firma</strong>. La sobreescritura respeta la firma y reemplaza el comportamiento.',
        },
        {
          type: 'h3',
          text: 'Empleados, ejecutivos y el ES-UN a lo largo de la jerarquía',
          criollo: 'Tres niveles: Persona, Empleado y Ejecutivo. Y como el ES-UN es transitivo, un Ejecutivo es una Persona.',
        },
        {
          type: 'p',
          text: 'Supongamos una empresa en la que hay <strong>Empleados</strong>, algunos rasos y otros <strong>Ejecutivos</strong>. Empleados y ejecutivos realizan básicamente las mismas operaciones, solo que los ejecutivos tienen algunos beneficios: por ejemplo, tienen un <strong>50 % más de vacaciones</strong> que los empleados rasos. Además tienen algunas operaciones extra, como <strong>cobrar un bono anual</strong> y, cerca de retirarse, <strong>elegir trabajar menos horas por día</strong>.',
        },
        {
          type: 'p',
          text: 'Dado que tanto empleados como ejecutivos tienen datos en común (nombre, DNI, edad), podemos poner una clase <strong>Persona</strong> por encima de Empleado y hacerlos disponibles a su clase "hija" Empleado y, por tanto, a su clase "nieta" Ejecutivo.',
        },
        {
          type: 'p',
          text: 'Dado que los objetos en una herencia se relacionan de forma <strong>ES UN</strong> (a diferencia de <strong>TIENE UN</strong>, como ocurre con la composición), es posible escribir el siguiente código:',
        },
        {
          type: 'code',
          code: 'Persona p = new Ejecutivo();',
        },
        {
          type: 'p',
          text: '¿Por qué? Porque Ejecutivo ES UN Empleado y Empleado ES UNA Persona, entonces <strong>Ejecutivo ES UNA Persona</strong>. ¿Y puedo hacerlo al revés? Dado que no todas las personas llegan a ser ejecutivos, yo tengo que <strong>asegurar</strong> que x es un ejecutivo. Para eso está el <strong>casting</strong> o casteo:',
        },
        {
          type: 'code',
          code: 'Persona x = new Persona();\nPersona y = new Ejecutivo();\n\nEjecutivo e = x;            // no compila\n\n// compila, pero no anda:\n// x no es una instancia de Ejecutivo\nEjecutivo e = (Ejecutivo)x;\n\nEjecutivo e = (Ejecutivo)y; // compila y funciona correctamente',
        },
        {
          type: 'p',
          text: 'Para asegurarme de que puedo "castear" puedo utilizar el operador <code>instanceof</code>.',
        },
        {
          type: 'h3',
          text: 'Dynamic Binding',
          criollo: 'El binding es la "atadura" entre una declaración y su tipo. Si se resuelve al compilar es estático; si se resuelve mientras el programa corre, es dinámico. Por eso podés mentirle al compilador con un casteo y que igual te explote en runtime.',
        },
        {
          type: 'p',
          text: 'El binding es un tema que escapa al alcance de la materia, pero conviene tener una noción básica. En Java, como en muchos lenguajes, hay <strong>dos formas de "atar" una declaración con su tipo</strong>. El <strong>Static Binding</strong> ocurre en tiempo de compilación: es estático en el sentido de que se analiza la atadura sin ejecutar el programa. El <strong>Dynamic Binding</strong> se realiza <strong>durante la ejecución</strong> del programa.',
        },
        {
          type: 'p',
          text: 'Por eso en algunos casos del casteo vimos que podemos "mentirle" al compilador, pero cuando se ejecuta el programa puede fallar; para eso tenemos <code>instanceof</code>. Si <code>instanceof</code> se utiliza para analizar <strong>instancias</strong>, podemos afirmar que es algo que ocurre <strong>durante la ejecución</strong>.',
        },
        {
          type: 'p',
          text: 'Entonces, ¿qué implica ejecutar la siguiente instrucción?',
        },
        {
          type: 'code',
          code: 'Perro p = new Perro();\n(1)     (3)  (2)',
        },
        {
          type: 'ol',
          items: [
            '<strong>Se declara una referencia</strong>: es una variable. Todavía no se ha creado ningún objeto. Solo se le indica a la JVM que reserve el lugar para una referencia que, eventualmente, apuntará a un objeto Perro.',
            '<strong>Se crea un objeto</strong>: se le indica a la JVM que reserve espacio para guardar un objeto Perro en la memoria.',
            '<strong>Asignación</strong>: se "ata" (bind) la referencia al objeto; hago que la referencia "apunte" a un objeto Perro.',
          ],
        },
        {
          type: 'p',
          text: 'Acá tanto la referencia como el objeto referenciado son del mismo tipo (Perro). Pero, como vimos con personas y ejecutivos, es posible que <strong>la referencia y el objeto referenciado sean de distinto tipo</strong>. Cualquier objeto que pase la prueba ES UN respecto de la referencia puede ser apuntado por esta: <strong>todo lo que extienda del tipo de la referencia puede ser asignado a esta</strong>. Todo lo que extienda de lo que está en (1) puede aparecer en (2).',
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Lo interesante ocurre en tiempo de ejecución: <strong>solo cuando el programa corre, la JVM llamará al método del objeto referenciado</strong>. La referencia dice qué métodos podés llamar; el objeto dice cómo se ejecutan.',
        },
        {
          type: 'h3',
          text: 'Polimorfismo',
          criollo: 'Un mismo Perro que ladra como dóberman, como cocker o como beagle según qué le hayas atado. Toma varias formas: poli-morfismo.',
        },
        {
          type: 'code',
          code: 'Perro d = new Doberman();\nd.ladrar(); // ladra como un doberman\n\nd = new Cocker();\nd.ladrar(); // ladra como un cocker\n\nd = new Beagle();\nd.ladrar(); // ladra como un beagle',
        },
        {
          type: 'p',
          text: 'El polimorfismo es <strong>la capacidad de un mismo objeto de comportarse como otro</strong>, o la capacidad de un objeto de funcionar de diversas formas. En el caso anterior, un Perro se puede comportar como un Doberman, como un Cocker o como un Beagle <strong>porque estos SON Perros</strong>.',
        },
        {
          type: 'p',
          text: 'Sucede lo mismo si el objeto polimórfico es el recibido por un método como <strong>parámetro</strong>:',
        },
        {
          type: 'code',
          code: 'public class Nene {\n\n    molestarPerro(Perro p) {\n        System.out.println("Voy a molestar al perro");\n        System.out.println(p.ladrar());\n    }\n\n}',
        },
        {
          type: 'code',
          code: 'Nene n = new Nene();\nPerro d = new Doberman();\nPerro c = new Cocker();\nc.molestarPerro(d); // se escuchara el ladrido de un doberman\nc.molestarPerro(c); // se escuchara el ladrido de un cocker',
        },
        {
          type: 'p',
          text: 'Si usamos <strong>código polimórfico</strong>, podemos estar seguros de que modificaciones futuras que agreguen nuevas subclases <strong>no deberían afectar el código que ya se está utilizando</strong> ni su funcionamiento. Es decir: agregar subclases <strong>no "rompe"</strong> el diseño ni el código existente. Si el código usa Perros (cualquier objeto que ES UN Perro), siempre que las nuevas razas introducidas al sistema extiendan de Perro, funcionarán correctamente.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-35-1', q: 'La sobrecarga mantiene el nombre del método pero altera su firma.', a: true, explain: 'Es la definición del apunte: la sobrecarga define "variantes" de un método manteniendo su nombre pero alterando su firma. No hay que confundirla con la sobreescritura.' },
          { id: 'tf-35-2', q: 'El Static Binding se resuelve mientras el programa se está ejecutando.', a: false, explain: 'Al revés: el Static Binding ocurre en tiempo de compilación, sin ejecutar el programa. El que se resuelve durante la ejecución es el Dynamic Binding.' },
          { id: 'tf-35-3', q: 'En Persona p = new Ejecutivo(), la referencia y el objeto referenciado son de distinto tipo y eso es válido.', a: true, explain: 'Cualquier objeto que pase la prueba ES UN respecto de la referencia puede ser apuntado por esta: Ejecutivo ES UNA Persona.' },
          { id: 'tf-35-4', q: 'La herencia relaciona objetos con un TIENE UN, mientras que la composición usa el ES UN.', a: false, explain: 'Es exactamente al revés: en la herencia los objetos se relacionan de forma ES UN, a diferencia del TIENE UN de la composición.' },
          { id: 'tf-35-5', q: 'Agregar nuevas subclases a un diseño polimórfico no debería romper el código existente.', a: true, explain: 'Si el código usa Perros, cualquier raza nueva que extienda de Perro funcionará correctamente sin tocar lo que ya estaba.' },
        ],
        mc: [
          {
            id: 'mc-35-1',
            q: '¿Qué beneficio extra tienen los ejecutivos respecto de los empleados rasos, según el apunte?',
            options: [
              'Un 50 % más de vacaciones',
              'Un 50 % más de sueldo base',
              'El doble de días de licencia por estudio',
              'Un 25 % más de vacaciones',
            ],
            correctIndex: 0,
            explain: 'El apunte dice textual: tienen un 50 % más de vacaciones que los empleados rasos, además de cobrar un bono anual y poder trabajar menos horas cerca del retiro.',
          },
          {
            id: 'mc-35-2',
            q: 'En Perro p = new Perro(), ¿qué ocurre en el paso de la declaración de la referencia?',
            options: [
              'Se reserva espacio para guardar el objeto en memoria',
              'Se ata la referencia al objeto creado',
              'Se le indica a la JVM que reserve el lugar para una referencia; todavía no hay objeto',
              'Se ejecuta el constructor de la clase Perro',
            ],
            correctIndex: 2,
            explain: 'Declarar la referencia solo reserva el lugar para una variable que eventualmente apuntará a un objeto Perro. Todavía no se ha creado ningún objeto.',
          },
          {
            id: 'mc-35-3',
            q: '¿Qué operador usa el apunte para asegurarse de que un casteo es válido?',
            options: [
              'equals',
              'instanceof',
              'getClass',
              'typeof',
            ],
            correctIndex: 1,
            explain: 'Para asegurarme de que puedo "castear" puedo utilizar el operador instanceof, que analiza instancias durante la ejecución.',
          },
          {
            id: 'mc-35-4',
            q: 'Según el apunte, el polimorfismo es...',
            options: [
              'La posibilidad de que una clase tenga varios constructores',
              'La capacidad de un mismo objeto de comportarse como otro o de funcionar de diversas formas',
              'La técnica de declarar todos los atributos como privados',
              'La capacidad de heredar de más de una superclase a la vez',
            ],
            correctIndex: 1,
            explain: 'Es la definición textual: la capacidad de un mismo objeto de comportarse como otro, o de funcionar de diversas formas.',
          },
        ],
        ms: [
          {
            id: 'ms-35-1',
            q: '¿Cuáles de estas líneas menciona el apunte como problemáticas en el ejemplo de Persona y Ejecutivo?',
            options: [
              'Ejecutivo e = x; con x declarada y creada como Persona',
              'Ejecutivo e = (Ejecutivo)x; con x creada como Persona',
              'Persona p = new Ejecutivo();',
              'Ejecutivo e = (Ejecutivo)y; con y creada como Ejecutivo',
              'Persona x = new Persona();',
            ],
            correctIndexes: [0, 1],
            explain: 'La primera no compila. La segunda compila pero no anda, porque x no es una instancia de Ejecutivo. Las otras tres son correctas.',
          },
          {
            id: 'ms-35-2',
            q: '¿Qué pasos identifica el apunte al ejecutar Perro p = new Perro()?',
            options: [
              'Declaración de una referencia',
              'Creación de un objeto en memoria',
              'Asignación o "atadura" de la referencia al objeto',
              'Liberación de la memoria del objeto anterior',
              'Compilación del método ladrar()',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'El apunte numera exactamente tres pasos: (1) declarar la referencia, (2) crear el objeto y (3) atar la referencia al objeto.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-35-1', front: 'Principal ventaja de la herencia', back: 'Reutilizar código: se elimina código duplicado generalizando atributos y comportamiento en una superclase. El cambio se hace en un solo lado y todas las subclases lo ven reflejado.' },
        { id: 'fc-35-2', front: 'Protocolo común / interfaz pública', back: 'El conjunto de comportamiento no privado que la superclase garantiza a todas sus hijas, y con el que se les habla mediante mensajes.' },
        { id: 'fc-35-3', front: 'Sobreescritura vs. sobrecarga', back: 'Sobreescritura: redefinir un método heredado respetando su firma. Sobrecarga: definir variantes de un método manteniendo el nombre pero alterando la firma.' },
        { id: 'fc-35-4', front: 'ES UN vs. TIENE UN', back: 'La herencia relaciona objetos con un ES UN. La composición los relaciona con un TIENE UN.' },
        { id: 'fc-35-5', front: 'Static Binding', back: 'La atadura entre una declaración y su tipo que ocurre en tiempo de compilación, sin ejecutar el programa.' },
        { id: 'fc-35-6', front: 'Dynamic Binding', back: 'La atadura que se resuelve durante la ejecución del programa. Por eso la JVM llama al método del objeto referenciado recién cuando el programa corre.' },
        { id: 'fc-35-7', front: 'Los tres pasos de Perro p = new Perro()', back: '(1) Se declara la referencia (variable, sin objeto todavía); (2) se crea el objeto reservando memoria; (3) se ata la referencia al objeto.' },
        { id: 'fc-35-8', front: 'Regla de qué puede apuntar una referencia', back: 'Todo lo que extienda del tipo de la referencia puede ser asignado a esta: cualquier objeto que pase la prueba ES UN.' },
        { id: 'fc-35-9', front: 'Polimorfismo', back: 'La capacidad de un mismo objeto de comportarse como otro, o de funcionar de diversas formas. Vale también cuando el objeto polimórfico llega como parámetro de un método.' },
      ],
    },
    {
      id: '36',
      unit: 'diseno-avanzado',
      title: 'Contratos y clases abstractas',
      criollo: 'El polimorfismo hasta acá dependía de la buena conducta del programador: que pise los métodos correctos, con las firmas correctas. Y la buena conducta no se puede compilar. Entonces el lenguaje necesita un mecanismo que obligue: si no cumplís el contrato, no compila. Ese mecanismo son las clases abstractas (y las interfaces, que vienen después).',
      blocks: [
        {
          type: 'h3',
          text: 'El problema: depender de la buena conducta del programador',
          criollo: 'Podés escribir la documentación más linda del mundo, pero nada obliga a nadie a leerla.',
        },
        {
          type: 'p',
          text: 'Con lo visto hasta ahora, para ver en acción el polimorfismo dependemos de <strong>"la buena conducta" del programador</strong>: quien escriba el código sabe exactamente qué métodos debe pisar y cómo pisarlos, conoce sus firmas, cómo funcionan, etc.',
        },
        {
          type: 'p',
          text: 'Si quien debe sobrescribir los métodos <strong>no conociera qué métodos pisar</strong>, sus firmas, etc., podría heredar de Perro pero no necesariamente sobrescribir los métodos correctos. Quizás decida agregar algunos, quizás decida sobrecargar los heredados, o quizás en un golpe de suerte justo pise los correctos. En ese caso <strong>no necesariamente podríamos hacer uso del polimorfismo</strong>.',
        },
        {
          type: 'p',
          text: 'Una forma de darle al programador información sobre los métodos a sobrescribir sería mediante la <strong>documentación</strong>: usar <code>javadoc</code> o entregar instrucciones específicas. Aun así, <strong>no hay nada que obligue al programador a seguir esas reglas</strong>. Podemos incluir sanciones (¿descontarle algo de sueldo?), pero aun así eso rompería el sistema, posiblemente en tiempo de ejecución.',
        },
        {
          type: 'h3',
          text: 'Qué es un contrato',
          criollo: 'Un mecanismo tan estricto que, si no lo cumplís, el código ni siquiera compila. Mucho menos llega a ejecutarse.',
        },
        {
          type: 'p',
          text: 'Debería existir algún mecanismo que <strong>obligue al programador</strong> (que es el "usuario" de los métodos heredados) a sobrescribir ciertos métodos específicos, respetando sus firmas, sin depender de tantos factores externos. Este mecanismo debería ser <strong>tan estricto que, si no se cumplen las reglas, el código ni siquiera debería compilar</strong>. Esa obligación será dada por los <strong>contratos</strong>.',
        },
        {
          type: 'p',
          text: '¿Cómo se garantiza que el polimorfismo funcione? En nuestras subclases respetaremos ese "protocolo común": si pisamos los métodos con sobreescritura, lo hacemos <strong>respetando la firma</strong>. Si respetamos la firma, respetamos el comportamiento tal cual está, respetamos <strong>el "contrato" de un objeto</strong>. Entonces, <strong>el polimorfismo es posible solo respetando los contratos</strong>.',
        },
        {
          type: 'p',
          text: '¿Cómo nos aseguramos de respetarlos? Podemos <strong>definir el comportamiento abstracto</strong> en una clase para asegurarnos de que cada subclase respete el contrato implementando "su manera" de llevar a cabo ese comportamiento. Así se garantiza que las hijas de cierta clase realicen, sí o sí, ciertas acciones, solo que pueden hacerlo "a su manera". En Java definimos contratos mediante <strong>clases abstractas</strong> y mediante <strong>interfaces</strong>.',
        },
        {
          type: 'h3',
          text: 'Clases abstractas',
          criollo: 'La clase abstracta dice QUÉ hay que hacer; las hijas concretas dicen CÓMO. Y no se puede instanciar: solo se instancian las hijas.',
        },
        {
          type: 'p',
          text: 'Con las clases abstractas podemos <strong>"declarar" solo comportamiento</strong> para asegurar un contrato entre clases y así hacer uso del polimorfismo. La intención de una clase abstracta es <strong>únicamente declarar comportamiento</strong>. De esta manera, <strong>la clase abstracta no se puede instanciar</strong>: solo las hijas de esa clase serán las que puedan instanciarse. Llamaremos <strong>clase concreta</strong> a toda clase que no es abstracta.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Las <strong>clases abstractas dictan "qué hay que hacer"</strong>; las <strong>clases hijas concretas dirán "cómo hay que hacerlo"</strong>. Así podemos usar como referencia la clase abstracta, atándole una instancia de una clase concreta, y hacer uso efectivo del polimorfismo.',
        },
        {
          type: 'p',
          text: 'Definimos las clases abstractas y el comportamiento en abstracto con la palabra clave <code>abstract</code>. Como el comportamiento es abstracto (solo decimos qué hacer), <strong>los métodos abstractos no tienen código asociado, no tienen "cuerpo"</strong>:',
        },
        {
          type: 'code',
          code: 'public abstract class Perro {\n\n    public abstract String ladrar();\n\n}\n\npublic Doberman extends Perro {\n\n}',
        },
        {
          type: 'p',
          text: 'En este caso, la clase <code>Doberman</code> <strong>arrojará un error de compilación</strong>, porque no respeta el contrato de la clase Perro. Si Perro dice qué se debe hacer, la hija Doberman debe "explicar" cómo hacerlo. A esta operación la llamaremos <strong>"implementar"</strong> el método <code>ladrar()</code>. Si Doberman quiere SER UN Perro, debe implementar un método que se llame ladrar, que devuelva un String y que no reciba parámetros: en pocas palabras, <strong>debe sobrescribir todos los métodos abstractos definidos en Perro</strong>.',
        },
        {
          type: 'code',
          code: 'public Doberman extends Perro {\n\n    public String ladrar() {\n        return "ladro como doberman";\n    }\n\n}\n\npublic Labrador extends Perro {\n\n    public String ladrar() {\n        return "ladro como labrador";\n    }\n\n}',
        },
        {
          type: 'p',
          text: 'Cuando implementamos los métodos, <strong>estos dejan de ser abstractos</strong>: por eso en Doberman ya no usamos la palabra clave <code>abstract</code>. Las reglas para la implementación son <strong>las de la sobreescritura</strong> (de hecho es lo que estamos haciendo), así que aplican las mismas reglas: <strong>respetar tipo, cantidad y orden de los parámetros</strong>. Si no lo hacemos, no respetamos el contrato, y si no respetamos el contrato la clase arrojará un error de compilación.',
        },
        {
          type: 'h3',
          text: 'Atributos, métodos concretos y constructores en una clase abstracta',
          criollo: 'Una clase abstracta es una clase como cualquier otra: puede tener atributos, métodos con cuerpo y hasta constructores. Lo único especial es que no la podés instanciar.',
        },
        {
          type: 'p',
          text: 'Una clase abstracta es una clase como cualquier otra y, por tanto, <strong>puede tener atributos y puede tener métodos concretos</strong>. Aun así, hay que tener en cuenta que <strong>solo los abstractos definen el contrato</strong>.',
        },
        {
          type: 'code',
          code: 'public abstract class Perro {\n    private String nombre;\n\n    public void setNombre(String nombre) {\n        this.nombre = nombre;\n    }\n\n    public String getNombre() {\n        return this.nombre;\n    }\n\n    public abstract String ladrar();\n\n}',
        },
        {
          type: 'p',
          text: '¿Por qué tener métodos concretos en una clase que no se puede instanciar? Porque <strong>estos métodos son susceptibles de ser reutilizados</strong>.',
        },
        {
          type: 'p',
          text: 'Por otro lado, que una clase abstracta no se pueda instanciar <strong>no significa que no pueda tener constructores</strong>. El objetivo es el mismo: <strong>puedo definir constructores para reutilizar código</strong>. Es importante recordar las reglas acerca de los constructores y su uso en herencia, junto con los posibles efectos secundarios de definir constructores adicionales al constructor por default.',
        },
        {
          type: 'p',
          text: 'Las clases abstractas son como cualquier otra clase en el sentido de que las podemos usar como veníamos haciendo hasta ahora:',
        },
        {
          type: 'code',
          code: 'Perro p = new Doberman();\nSystem.out.println(p.ladrar());\n\np = new Labrador();\nSystem.out.println(p.ladrar());',
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Esto último es la respuesta a la pregunta clásica de parcial: <strong>¿para qué una clase abstracta define constructores si no se puede instanciar?</strong> Porque los constructores de la madre igual corren cuando instanciás a la hija, y sirven para inicializar los atributos comunes en un solo lugar en vez de repetir el código en cada subclase.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-36-1', q: 'Documentar con javadoc alcanza para obligar al programador a sobrescribir los métodos correctos.', a: false, explain: 'La documentación informa, pero no hay nada que obligue al programador a seguir esas reglas. Por eso hacen falta los contratos.' },
          { id: 'tf-36-2', q: 'Una clase abstracta no se puede instanciar: solo se instancian sus hijas.', a: true, explain: 'Es la definición del apunte. A toda clase que no es abstracta la llamamos clase concreta.' },
          { id: 'tf-36-3', q: 'Los métodos abstractos tienen cuerpo, pero ese cuerpo es ignorado por el compilador.', a: false, explain: 'Los métodos abstractos no tienen código asociado, no tienen "cuerpo": solo declaran qué hacer.' },
          { id: 'tf-36-4', q: 'Una clase abstracta puede tener atributos y métodos concretos.', a: true, explain: 'Es una clase como cualquier otra. Lo que define el contrato son únicamente los métodos abstractos; los concretos están para ser reutilizados.' },
          { id: 'tf-36-5', q: 'Una clase abstracta no puede definir constructores porque nunca se instancia.', a: false, explain: 'Sí puede: el objetivo es el mismo de siempre, reutilizar código. Que no se pueda instanciar no impide definir constructores.' },
        ],
        mc: [
          {
            id: 'mc-36-1',
            q: '¿Qué le falta al mecanismo de documentación para garantizar el polimorfismo?',
            options: [
              'Ser más detallada sobre las firmas de los métodos',
              'Obligar al programador, de modo que si no cumple el código no compile',
              'Generarse automáticamente con javadoc en cada build',
              'Incluir ejemplos de uso de cada método heredado',
            ],
            correctIndex: 1,
            explain: 'El mecanismo debería ser tan estricto que, si no se cumplen las reglas, el código ni siquiera debería compilar, mucho menos ejecutarse. Esa obligación la dan los contratos.',
          },
          {
            id: 'mc-36-2',
            q: 'Las clases abstractas y las clases hijas concretas se reparten el trabajo así:',
            options: [
              'La abstracta dice qué hay que hacer y la concreta dice cómo hay que hacerlo',
              'La abstracta dice cómo hay que hacerlo y la concreta decide si lo hace',
              'Ambas dicen qué hacer, pero solo la concreta se documenta',
              'La abstracta implementa todo y la concreta solo la instancia',
            ],
            correctIndex: 0,
            explain: 'Es la frase textual del apunte: las clases abstractas dictan "qué hay que hacer", las clases hijas concretas dirán "cómo hay que hacerlo".',
          },
          {
            id: 'mc-36-3',
            q: 'Si Doberman extiende de la clase abstracta Perro y no implementa ladrar(), ¿qué pasa?',
            options: [
              'Compila y ladrar() devuelve null en tiempo de ejecución',
              'Compila pero lanza una excepción al llamar a ladrar()',
              'Arroja un error de compilación porque no respeta el contrato',
              'Compila y hereda una implementación vacía por defecto',
            ],
            correctIndex: 2,
            explain: 'La clase arroja un error de compilación: si Doberman quiere SER UN Perro debe sobrescribir todos los métodos abstractos definidos en Perro.',
          },
          {
            id: 'mc-36-4',
            q: '¿Qué reglas rigen la implementación de un método abstracto?',
            options: [
              'Las de la sobrecarga: se puede cambiar la firma libremente',
              'Las de la sobreescritura: respetar tipo, cantidad y orden de los parámetros',
              'Las del casting: hay que castear el valor de retorno',
              'Ninguna en particular, basta con que el nombre coincida',
            ],
            correctIndex: 1,
            explain: 'Implementar un método abstracto es sobrescribir comportamiento abstracto, así que aplican las reglas de la sobreescritura.',
          },
        ],
        ms: [
          {
            id: 'ms-36-1',
            q: 'Según el apunte, ¿qué puede contener una clase abstracta?',
            options: [
              'Atributos',
              'Métodos concretos',
              'Constructores',
              'Métodos abstractos',
              'Instancias de sí misma creadas con new',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Puede tener todo eso. Lo único que no puede es instanciarse: solo sus hijas concretas pueden.',
          },
          {
            id: 'ms-36-2',
            q: '¿Qué mecanismos nombra el apunte para definir contratos en Java?',
            options: [
              'Clases abstractas',
              'Interfaces',
              'Comentarios javadoc',
              'El operador instanceof',
              'Sanciones al programador',
            ],
            correctIndexes: [0, 1],
            explain: 'En Java definimos contratos mediante clases abstractas y mediante interfaces. El javadoc informa pero no obliga.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-36-1', front: '¿Por qué no alcanza la documentación para garantizar el polimorfismo?', back: 'Porque informa qué métodos pisar, pero no hay nada que obligue al programador a seguir esas reglas. Hace falta un mecanismo que impida compilar si no se cumple.' },
        { id: 'fc-36-2', front: 'Contrato', back: 'La obligación de sobrescribir ciertos métodos específicos respetando sus firmas. Es tan estricta que, si no se cumple, el código ni siquiera compila.' },
        { id: 'fc-36-3', front: '¿Cuándo es posible el polimorfismo?', back: 'Solo respetando los contratos: si se pisan los métodos respetando la firma, se respeta el comportamiento tal cual está.' },
        { id: 'fc-36-4', front: 'Clase abstracta', back: 'Clase cuya intención es únicamente declarar comportamiento. No se puede instanciar: solo sus hijas. Se declara con la palabra clave abstract.' },
        { id: 'fc-36-5', front: 'Clase concreta', back: 'Toda clase que no es abstracta, es decir, la que sí se puede instanciar y la que explica cómo hacer lo que la abstracta declaró.' },
        { id: 'fc-36-6', front: '¿Qué dice la abstracta y qué dicen las hijas?', back: 'Las clases abstractas dictan qué hay que hacer; las clases hijas concretas dicen cómo hay que hacerlo.' },
        { id: 'fc-36-7', front: 'Método abstracto', back: 'Método declarado con abstract, sin código asociado ni cuerpo. Solo declara qué hacer; la subclase concreta lo implementa.' },
        { id: 'fc-36-8', front: '¿Para qué sirven los métodos concretos dentro de una clase abstracta?', back: 'Porque son susceptibles de ser reutilizados por las subclases, aunque la clase que los contiene nunca se instancie.' },
        { id: 'fc-36-9', front: '¿Para qué puede una clase abstracta definir constructores?', back: 'Para reutilizar código, igual que cualquier otra clase. Que no se pueda instanciar no impide definir constructores; hay que recordar las reglas de constructores en herencia.' },
      ],
    },
    {
      id: '37',
      unit: 'diseno-avanzado',
      title: 'Métodos abstractos, sus reglas y la aparición de las interfaces',
      criollo: 'Las clases abstractas resuelven el contrato, pero te dejan el comportamiento atrapado adentro de una jerarquía. ¿Y si querés declarar algo que no le corresponde ni a Perro, ni a Animal, ni a SerVivo? Ahí aparecen las interfaces: comportamiento puro que se enchufa de costado, sin depender del árbol genealógico.',
      blocks: [
        {
          type: 'h3',
          text: 'Reglas de abstract',
          criollo: 'Un método abstracto obliga a que la clase sea abstracta. Pero una clase abstracta no está obligada a tener métodos abstractos.',
        },
        {
          type: 'p',
          text: 'Las clases abstractas definen comportamiento abstracto mediante métodos abstractos. <strong>Si la clase tiene al menos un método abstracto, debe ser declarada como abstracta</strong>. PERO <strong>si la clase es abstracta no es necesario definir un método abstracto</strong>: a veces interesa tener una clase abstracta con el solo hecho de contener métodos para ser reutilizados, pero no interesa tener instancias de esa clase, solo de las hijas.',
        },
        {
          type: 'p',
          text: 'A su vez, una clase abstracta puede definir <strong>algunos métodos abstractos y otros concretos</strong>, definiendo un comportamiento con "una implementación por default". <strong>La primera subclase concreta en la jerarquía deberá implementar todos los métodos abstractos.</strong> Sin embargo, si una subclase es abstracta puede <strong>diferir la implementación de algunos e implementar otros</strong>, dejando a su primera subclase concreta la implementación de todos los abstractos que resten.',
        },
        {
          type: 'table',
          caption: 'Reglas de abstract, resumidas',
          headers: ['Situación', 'Qué exige Java'],
          rows: [
            ['La clase tiene al menos un método abstracto', 'La clase debe declararse abstract'],
            ['La clase es abstracta', 'No está obligada a tener ningún método abstracto'],
            ['Subclase concreta', 'Debe implementar todos los métodos abstractos pendientes'],
            ['Subclase abstracta', 'Puede implementar algunos y diferir el resto a su primera subclase concreta'],
          ],
        },
        {
          type: 'h3',
          text: 'El problema: el comportamiento queda atrapado en la jerarquía',
          criollo: 'El caso vestir(): a algunos perros les ponen ropa y a otros no. ¿Dónde metés ese método sin ensuciar a toda la familia?',
        },
        {
          type: 'p',
          text: 'Definir comportamiento abstracto mediante clases abstractas es correcto, pero <strong>quita flexibilidad al dejar el comportamiento "atrapado" en una jerarquía</strong>. ¿Qué ocurriría si quisiera definir comportamiento abstracto pero <strong>fuera</strong> de una jerarquía? ¿Qué pasaría si quisiera definir comportamiento tan abstracto que <strong>no es parte de Perro, ni de Animal, ni siquiera de SerVivo</strong>? Por ejemplo, <code>vestir()</code>: la gente le compra ropa a sus perros.',
        },
        {
          type: 'ul',
          items: [
            '<strong>Meter <code>vestir()</code> en la clase Perro</strong>: entonces todas las subclases de perro tendrían el comportamiento "vestir"... y no a todos los perros los visten.',
            '<strong>Hacer <code>vestir()</code> abstracto</strong> e implementarlo donde corresponda: cuando llegue a la última clase concreta de la jerarquía me voy a ver obligado a implementar un método que a lo mejor un perro no debe llevar a cabo.',
            '<strong>Dejar la implementación vacía</strong>: no es lo que corresponde. <strong>Si una clase tiene una operación que no hace nada, no debería tenerla siquiera.</strong>',
            '<strong>Colocar el método solo donde corresponda</strong>: se corre el riesgo de duplicar código y, dependiendo de si se lo coloca en todos o en algunos, <strong>se pierde la ventaja del polimorfismo</strong>.',
          ],
        },
        {
          type: 'p',
          text: 'Para complicar las cosas un poco más: ¿qué ocurriría si tenemos <strong>DOS superclases</strong>? Una sería Perro y la otra Mascota; Mascota podría tener el método <code>vestir()</code> y Perro los otros. <strong>Para evitar complejidades de la herencia múltiple, los creadores de Java hicieron que solo soporte la herencia simple.</strong>',
        },
        {
          type: 'h3',
          text: 'La solución: las interfaces',
          criollo: 'Igual que una clase abstracta, pero con todos los métodos abstractos y sin ocupar el único cupo de herencia que te da Java. Se enchufa de costado.',
        },
        {
          type: 'p',
          text: 'Las interfaces son muy similares a las clases abstractas: se definen con la palabra clave <code>interface</code> en vez de <code>class</code>. <strong>Todos sus métodos son abstractos</strong>, por lo cual no es necesaria la palabra <code>abstract</code> y, al igual que en las clases abstractas, los métodos no definen un cuerpo. Para utilizar las interfaces se usa la palabra clave <code>implements</code> en lugar de <code>extends</code>.',
        },
        {
          type: 'code',
          code: 'public interface Perro {\n    String ladrar();\n}\n\n// implements me va a obligar a cumplir el contrato\npublic Doberman implements Perro {\n    public String ladrar() {\n        return "ladro como doberman";\n    }\n}',
        },
        {
          type: 'code',
          code: 'Perro p = new Doberman();\nSystem.out.println(p.ladrar());',
        },
        {
          type: 'p',
          text: 'Los <strong>métodos de una interfaz son siempre públicos y abstractos</strong>: no es necesario poner <code>public</code> ni <code>abstract</code> en la definición.',
        },
        {
          type: 'p',
          text: 'Lo que permiten las interfaces es <strong>independizarse de una jerarquía</strong>: permiten agregar comportamiento a una clase que no se obtenga desde un nivel superior en la jerarquía, se <strong>"enchufa" lateralmente</strong>. Incluso podríamos mezclar ambos mecanismos:',
        },
        {
          type: 'code',
          code: 'public Doberman extends Animal implements Perro {\n    public String ladrar() {\n        return "ladro como doberman";\n    }\n}',
        },
        {
          type: 'h3',
          text: 'Polimorfismo en Java',
          criollo: 'La conclusión del apunte es fuerte y conviene tenerla clara para el parcial: como la clase abstracta puede mezclar comportamiento abstracto con métodos concretos, no garantiza el contrato completo. Por eso la cátedra dice que en Java solo hay polimorfismo con interfaces.',
        },
        {
          type: 'p',
          text: 'Según lo visto, <strong>las clases abstractas pueden definir un contrato</strong> y por tanto se utilizan para el polimorfismo. <strong>Las interfaces representan comportamiento puro</strong>: solo definen qué hacer, incluso sin depender de ninguna jerarquía.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Conclusión textual del apunte: dado que en una clase abstracta podemos mezclar comportamiento abstracto con métodos concretos, <strong>no se puede garantizar la definición completa de un contrato</strong>. Es por eso que, en Java, <strong>solo hay polimorfismo si utilizamos interfaces</strong>.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-37-1', q: 'Si una clase tiene al menos un método abstracto, debe declararse como abstracta.', a: true, explain: 'Es la regla del apunte. La implicación inversa no vale: una clase abstracta puede no tener ningún método abstracto.' },
          { id: 'tf-37-2', q: 'Toda clase abstracta está obligada a definir al menos un método abstracto.', a: false, explain: 'No: a veces interesa tener una clase abstracta solo para contener métodos reutilizables y para que no se puedan crear instancias de ella.' },
          { id: 'tf-37-3', q: 'Una subclase abstracta puede implementar algunos métodos abstractos y diferir el resto.', a: true, explain: 'Puede diferir la implementación de algunos e implementar otros, dejando a su primera subclase concreta la implementación de los que resten.' },
          { id: 'tf-37-4', q: 'Java soporta herencia múltiple de clases.', a: false, explain: 'Para evitar complejidades de la herencia múltiple, los creadores de Java hicieron que solo soporte la herencia simple.' },
          { id: 'tf-37-5', q: 'Los métodos de una interfaz hay que declararlos explícitamente como public abstract.', a: false, explain: 'Son siempre públicos y abstractos por definición: no es necesario poner public ni abstract.' },
        ],
        mc: [
          {
            id: 'mc-37-1',
            q: 'Según el apunte, si una clase tiene una operación que no hace nada...',
            options: [
              'Conviene documentarla como no implementada',
              'Debería lanzar una excepción para avisar',
              'No debería tenerla siquiera',
              'Está bien mientras la herede de una clase abstracta',
            ],
            correctIndex: 2,
            explain: 'El apunte descarta la implementación vacía con esa frase: si una clase tiene una operación que no hace nada, no debería tenerla siquiera.',
          },
          {
            id: 'mc-37-2',
            q: '¿Cuál es el problema del método vestir() en la jerarquía de Perro?',
            options: [
              'Es un comportamiento que no le corresponde a toda la jerarquía y queda atrapado en ella',
              'Es un comportamiento que requiere devolver un tipo primitivo',
              'Es un comportamiento que ya existe en la clase SerVivo',
              'Es un comportamiento que solo puede implementarse con sobrecarga',
            ],
            correctIndex: 0,
            explain: 'Es tan abstracto que no es parte de Perro, ni de Animal, ni de SerVivo. Ponerlo en la jerarquía contamina clases que no deberían tenerlo.',
          },
          {
            id: 'mc-37-3',
            q: '¿Qué palabra clave se usa para que una clase adopte una interfaz?',
            options: [
              'extends',
              'abstract',
              'instanceof',
              'implements',
            ],
            correctIndex: 3,
            explain: 'Para utilizar las interfaces se usa implements en lugar de extends. Incluso se pueden combinar: extends Animal implements Perro.',
          },
          {
            id: 'mc-37-4',
            q: '¿Por qué el apunte concluye que en Java solo hay polimorfismo si usamos interfaces?',
            options: [
              'Porque las clases abstractas no admiten constructores',
              'Porque las clases abstractas pueden mezclar métodos abstractos y concretos, y no garantizan el contrato completo',
              'Porque las clases abstractas no pueden usarse como tipo de una referencia',
              'Porque solo las interfaces admiten herencia simple',
            ],
            correctIndex: 1,
            explain: 'Al mezclar comportamiento abstracto con métodos concretos, la clase abstracta no puede garantizar la definición completa de un contrato. Las interfaces son comportamiento puro.',
          },
        ],
        ms: [
          {
            id: 'ms-37-1',
            q: '¿Qué alternativas evalúa y descarta el apunte para ubicar el método vestir()?',
            options: [
              'Incluirlo en la clase Perro',
              'Hacerlo abstracto e implementarlo donde corresponda',
              'Dejar la implementación vacía en las clases que no lo usan',
              'Colocarlo solo en las clases donde corresponda',
              'Declararlo como static en la clase SerVivo',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El apunte evalúa esas cuatro alternativas y las descarta. La opción static no aparece en el texto.',
          },
          {
            id: 'ms-37-2',
            q: '¿Qué características tienen las interfaces según el apunte?',
            options: [
              'Se definen con la palabra clave interface',
              'Todos sus métodos son abstractos',
              'Sus métodos no definen un cuerpo',
              'Sus métodos son siempre públicos',
              'Pueden declarar atributos de instancia privados con estado',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Las cuatro primeras están textuales en el apunte. El apunte no habla de atributos de instancia con estado en interfaces.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-37-1', front: 'Regla: método abstracto y clase abstracta', back: 'Si la clase tiene al menos un método abstracto, debe declararse abstracta. Pero si la clase es abstracta, no es necesario que defina ningún método abstracto.' },
        { id: 'fc-37-2', front: '¿Quién implementa los métodos abstractos pendientes?', back: 'La primera subclase concreta de la jerarquía. Una subclase abstracta puede implementar algunos y diferir el resto.' },
        { id: 'fc-37-3', front: 'Desventaja de las clases abstractas', back: 'Quitan flexibilidad al dejar el comportamiento "atrapado" en una jerarquía: no permiten declarar comportamiento que no pertenece a ese árbol.' },
        { id: 'fc-37-4', front: 'El caso vestir()', back: 'Comportamiento tan abstracto que no es parte de Perro, ni de Animal, ni de SerVivo. Ponerlo en la jerarquía contamina clases que no lo necesitan; dejarlo vacío es peor.' },
        { id: 'fc-37-5', front: '¿Por qué Java tiene solo herencia simple?', back: 'Para evitar las complejidades de la herencia múltiple, los creadores de Java decidieron que el lenguaje solo soporte herencia simple.' },
        { id: 'fc-37-6', front: 'Interfaz', back: 'Se define con interface en vez de class. Todos sus métodos son abstractos, públicos y sin cuerpo. Se adopta con implements en lugar de extends.' },
        { id: 'fc-37-7', front: '¿Qué permiten las interfaces?', back: 'Independizarse de una jerarquía: agregar comportamiento que no se obtiene desde un nivel superior. Se enchufan lateralmente y se pueden combinar con extends.' },
        { id: 'fc-37-8', front: 'Polimorfismo en Java, según el apunte', back: 'Como la clase abstracta mezcla comportamiento abstracto con métodos concretos, no garantiza el contrato completo. Por eso, en Java solo hay polimorfismo si utilizamos interfaces.' },
      ],
    },
    {
      id: '38',
      unit: 'diseno-avanzado',
      title: 'Caso Zoo virtual: el ornitorrinco rompe la jerarquía',
      criollo: 'El caso práctico más lindo del apunte. Armás un zoológico virtual con una jerarquía prolija de mamíferos y ovíparos, y de golpe entra el ornitorrinco: es mamífero, pero pone huevos y después amamanta. Java no tiene herencia múltiple, así que la jerarquía sola no te salva. La salida son las interfaces.',
      blocks: [
        {
          type: 'h3',
          text: 'Planteo del problema',
          criollo: 'Un zoo virtual con mamíferos, ovíparos, peces, reptiles e insectos. Y un bicho raro que rompe todo.',
        },
        {
          type: 'p',
          text: 'Se quiere modelar un <strong>zoológico virtual</strong>. Como todo zoológico, se quiere simular todo tipo de animales. <strong>Cada animal tendrá un identificador, un nombre y una fecha de ingreso al sistema (edad)</strong>. Se deberá poder representar animales <strong>mamíferos</strong>, otros <strong>ovíparos</strong>, habrá <strong>peces de agua salada y dulce</strong>, <strong>reptiles</strong> e <strong>insectos</strong>.',
        },
        {
          type: 'ul',
          items: [
            '<strong>Mamíferos</strong>: por ahora hay felinos (un león, un tigre y un puma), caninos (una manada de lobos, una pareja de zorros y una pareja de todas las razas de perros del mundo), un par de elefantes, una pareja de hipopótamos y tres jirafas. Todos los mamíferos deben <strong>guardar la cantidad de crías posible</strong> y ser capaces de <strong>parir</strong> y de <strong>amamantar</strong>.',
            '<strong>Ovíparos</strong>: principalmente aves. Se esperan tortugas de mar virtuales (el equipo todavía está testeando el código) y los dragones de Cómodo están en etapa de análisis. Todas las aves, además de <strong>volar</strong>, como todos los ovíparos deben poder <strong>poner huevos</strong> y <strong>romper el cascarón</strong> al nacer.',
            '<strong>Acuario</strong>: todavía no está en condiciones de recibir peces, pero sí está listo el tanque transparente más grande con dos delfines.',
            '<strong>El animal exótico</strong>: el <strong>ornitorrinco</strong>. Si bien es un mamífero, la hembra <strong>pone huevos</strong> y luego, cuando salen las crías del cascarón, <strong>las amamanta</strong>.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Es muy importante que nuestro zoo virtual <strong>pueda soportar animales tan extraños como los ornitorrincos</strong>. Ese es el requerimiento que va a tirar abajo la primera solución.',
        },
        {
          type: 'h3',
          text: 'Una primera aproximación: la jerarquía',
          criollo: 'Lo primero que te sale con lo que sabés hasta acá: un árbol de herencia. Y funciona... hasta que llega el bicho raro.',
        },
        {
          type: 'p',
          text: 'Habiendo visto el concepto de herencia, lo primero que podemos hacer es generar una <strong>jerarquía de animales virtuales</strong> con el objetivo de reutilizar código. Mamíferos, ovíparos, etc., todos <strong>respiran, comen y se mueven</strong> de forma similar. Podemos hacer una jerarquía con métodos en común y <strong>sobrescribir las operaciones que necesitemos</strong> en cada caso.',
        },
        {
          type: 'p',
          text: 'Hasta este punto todo parece encajar; el problema será <strong>incorporar al ornitorrinco</strong>, sabiendo que debe poder <strong>poner huevos</strong> y también <strong>amamantar</strong> a sus crías (algo similar ocurre con <code>romperCascaron()</code>).',
        },
        {
          type: 'p',
          text: 'Podríamos incluir la clase Ornitorrinco en el esquema actual con todas las operaciones necesarias, pero <strong>perderíamos todo el código que tenemos para todos los animales, mamíferos, ovíparos, etc.</strong> Además tenemos la restricción de Java: <strong>no hay herencia múltiple</strong>. Por eso deberíamos resolver el problema de alguna otra manera.',
        },
        {
          type: 'h3',
          text: 'Una solución posible: herencia (y por qué no cierra)',
          criollo: 'Subir amamantar() a Ovíparo para que el ornitorrinco lo herede. Total, son cinco especies en el mundo... el tema es que te quedan todos los loros con un método amamantar que no hace nada.',
        },
        {
          type: 'p',
          text: 'Podríamos pasar el método <code>amamantar()</code> a la clase Ovíparo, que tendría cierto sentido sabiendo que hay algunos ovíparos que amamantan (muy pocos: la familia de los <strong>monotremas</strong>, 1 especie de ornitorrinco y 4 especies de equidnas). Pero eso daría lugar a que <code>amamantar()</code> deba permanecer <strong>"sin implementar"</strong> en las clases hijas de Ovíparo, dejando la implementación vacía o tirando algún error cuando se quieran ejecutar.',
        },
        {
          type: 'p',
          text: 'No es tan grave, pero de alguna forma estamos <strong>"contaminando" todas las aves</strong> con un comportamiento que en realidad no deberían tener. Pasaría algo similar si ponemos <code>ponerHuevos()</code> del lado de los mamíferos: <strong>por solo 5 especies en el mundo estamos agregando a todos los mamíferos una operación que sabemos que no realizan</strong>.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'La solución <strong>no siempre es poner en algún nivel "común" una operación</strong> que solucione "algunos" de los casos necesarios (y así complique otros).',
        },
        {
          type: 'p',
          text: 'Si lo que queremos es tener comportamiento polimórfico entre mamíferos, ovíparos y "raros", de forma tal que podamos hacer:',
        },
        {
          type: 'code',
          code: 'Oviparo o = new Ornitorrinco();\no.comer();      // todos los oviparos comen\n\n// bien: los oviparos que son ornitorrincos amamantan\no.amamantar();\n...\no = new Loro();\no.comer();      // todos los oviparos comen, loros u ornitorrincos\no.amamantar();  // algunos oviparos amamantan, pero un Loro no',
        },
        {
          type: 'p',
          text: 'Podríamos usar <code>instanceof</code> y estaría bien, pero <strong>estamos limitando seriamente el polimorfismo</strong>: no solo dependemos de ciertas instancias, sino que estamos agregando una condición.',
        },
        {
          type: 'code',
          code: 'if (o instanceof Ornitorrinco) {\n    ((Ornitorrinco)o).amamantar();\n}',
        },
        {
          type: 'p',
          text: 'Esto implica que si luego agregamos otra especie de monotrema <strong>tenemos que agregar otro <code>if</code></strong>. Y si luego hay que sacarlo, tendríamos que volver a modificar el código. Eso <strong>atenta directamente contra el propósito del polimorfismo</strong>, la reutilización de código y el diseño modular. <strong>Agregar o quitar especies no debería implicar tocar código</strong>, mucho menos lógica, que requeriría tests para comprobar si es correcta.',
        },
        {
          type: 'h3',
          text: 'Una solución mejorada: interfaces',
          criollo: 'Si Ovíparo y Mamífero son interfaces en vez de clases, el ornitorrinco puede ser las dos cosas a la vez. Y el loro no queda con un amamantar() colgado.',
        },
        {
          type: 'p',
          text: 'Si bien no tenemos herencia múltiple, ¿qué mecanismo podríamos usar para que un ornitorrinco sea <strong>mamífero y ovíparo al mismo tiempo</strong>? <strong>Las interfaces.</strong>',
        },
        {
          type: 'p',
          text: 'Si tuviéramos una <strong>interfaz Ovíparo</strong> y una <strong>interfaz Mamífero</strong>, podríamos dar los comportamientos de <code>amamantar()</code>, <code>ponerHuevos()</code>, <code>romperCascaron()</code> y <code>parir()</code> en estas interfaces y de esa manera <strong>dar selectivamente estos comportamientos a las clases que lo necesiten</strong>. Entonces, no necesariamente todos los animales son ovíparos o mamíferos, y no tendremos mamíferos que ponen huevos ni ovíparos que amamantan como en el caso anterior.',
        },
        {
          type: 'code',
          code: 'Oviparo o = new Ornitorrinco();\no.comer();      // todos los oviparos comen\n\n// bien: los oviparos que son ornitorrincos amamantan\n((Mamifero)o).amamantar();\n...\no = new Loro();\no.comer();      // todos los oviparos comen, loros u ornitorrincos\n// esto ya no es valido:\n// o.amamantar();  // un Loro no da de amamantar',
        },
        {
          type: 'p',
          text: 'Si revisamos el código veremos una <strong>operación de casteo</strong>. La mejora respecto del caso anterior es que, si bien vamos a tener que castear y preguntar <code>instanceof</code>, <strong>ya no hay que hacerlo para cada especie en particular</strong>:',
        },
        {
          type: 'code',
          code: 'if (o instanceof Mamifero) {\n    ((Ornitorrinco)o).amamantar();\n}',
        },
        {
          type: 'p',
          text: 'Si luego agregamos otra especie de monotrema <strong>ya no tenemos que agregar otro <code>if</code></strong>, porque esta será mamífera (y ovípara). Si luego hay que sacarla, no habrá que modificar el código. <strong>Mantuvimos el polimorfismo entre los mamíferos y entre los ovíparos.</strong>',
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'El propio apunte lo aclara: esta <strong>no es la solución ideal</strong>, es una solución <strong>mucho mejor</strong> que la primera. La ideal llega después, con los principios de diseño y los patrones.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-38-1', q: 'Cada animal del zoo virtual tiene identificador, nombre y fecha de ingreso al sistema.', a: true, explain: 'Es el enunciado del caso: identificador, nombre y fecha de ingreso al sistema (edad).' },
          { id: 'tf-38-2', q: 'El ornitorrinco es un ovíparo que además amamanta a sus crías.', a: true, explain: 'El apunte lo describe así: si bien es un mamífero, la hembra pone huevos y luego amamanta a las crías cuando salen del cascarón.' },
          { id: 'tf-38-3', q: 'Poner amamantar() en la clase Ovíparo resuelve el problema sin efectos colaterales.', a: false, explain: 'Contamina a todas las aves con un comportamiento que no deberían tener, y las obliga a dejar la implementación vacía o a tirar un error.' },
          { id: 'tf-38-4', q: 'Con interfaces se elimina por completo la necesidad de castear en el caso del ornitorrinco.', a: false, explain: 'Sigue habiendo casteo y sigue haciendo falta preguntar instanceof, pero ya no hay que hacerlo para cada especie en particular.' },
          { id: 'tf-38-5', q: 'El apunte presenta la solución con interfaces como la solución ideal y definitiva del problema.', a: false, explain: 'Aclara que no es la mejor de las soluciones, sino una mucho mejor. Deja para un apunte posterior las formas ideales de resolverlo.' },
        ],
        mc: [
          {
            id: 'mc-38-1',
            q: '¿Qué animales ya están listos en el acuario del zoo virtual?',
            options: [
              'Los peces de agua salada',
              'Las tortugas de mar',
              'Dos delfines en el tanque transparente más grande',
              'Los dragones de Cómodo',
            ],
            correctIndex: 2,
            explain: 'La zona del acuario todavía no puede recibir peces, pero sí está listo el tanque transparente más grande con dos delfines.',
          },
          {
            id: 'mc-38-2',
            q: '¿Cuántas especies de monotremas menciona el apunte?',
            options: [
              '1 de ornitorrinco y 4 de equidnas',
              '4 de ornitorrinco y 1 de equidnas',
              '2 de ornitorrinco y 3 de equidnas',
              '5 de ornitorrinco solamente',
            ],
            correctIndex: 0,
            explain: 'Muy, muy pocos: la familia de monotremas tiene 1 especie de ornitorrinco y 4 especies de equidnas. En total, 5 especies en el mundo.',
          },
          {
            id: 'mc-38-3',
            q: '¿Cuál es el problema de resolver el caso del ornitorrinco con un if (o instanceof Ornitorrinco)?',
            options: [
              'Que instanceof no funciona con clases abstractas',
              'Que cada especie nueva obliga a agregar otro if y tocar el código',
              'Que el casteo hace que el programa no compile',
              'Que obliga a duplicar los atributos en cada subclase',
            ],
            correctIndex: 1,
            explain: 'Agregar o quitar especies no debería implicar tocar código, mucho menos lógica. Eso atenta contra el propósito del polimorfismo.',
          },
          {
            id: 'mc-38-4',
            q: '¿Qué gana el diseño al convertir Ovíparo y Mamífero en interfaces?',
            options: [
              'Que ya no hace falta implementar los métodos en cada clase',
              'Que Java pasa a soportar herencia múltiple de clases',
              'Que los comportamientos se dan selectivamente solo a las clases que los necesitan',
              'Que desaparece la necesidad de la clase Animal',
            ],
            correctIndex: 2,
            explain: 'Con interfaces se dan selectivamente amamantar(), ponerHuevos(), parir() y romperCascaron() a las clases que lo necesiten: no hay mamíferos que pongan huevos ni ovíparos que amamanten de más.',
          },
        ],
        ms: [
          {
            id: 'ms-38-1',
            q: '¿Qué comportamientos exige el enunciado para los mamíferos del zoo?',
            options: [
              'Guardar la cantidad de crías posible',
              'Parir',
              'Amamantar',
              'Romper el cascarón al nacer',
              'Volar',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Romper el cascarón y poner huevos son de los ovíparos; volar es de las aves.',
          },
          {
            id: 'ms-38-2',
            q: '¿Qué comportamientos irían en las interfaces Ovíparo y Mamífero según la solución mejorada?',
            options: [
              'amamantar()',
              'ponerHuevos()',
              'romperCascaron()',
              'parir()',
              'comer()',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'comer() queda en la jerarquía de animales, porque todos comen. Los otros cuatro son los que se dan selectivamente por interfaz.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-38-1', front: 'Datos comunes a todo animal del zoo virtual', back: 'Un identificador, un nombre y una fecha de ingreso al sistema (edad).' },
        { id: 'fc-38-2', front: '¿Por qué el ornitorrinco rompe la jerarquía?', back: 'Porque es mamífero pero pone huevos, y cuando las crías salen del cascarón las amamanta. Necesitaría ser mamífero y ovíparo a la vez, y Java no tiene herencia múltiple.' },
        { id: 'fc-38-3', front: 'Monotremas', back: 'La familia de ovíparos que amamantan: 1 especie de ornitorrinco y 4 especies de equidnas. Cinco especies en todo el mundo.' },
        { id: 'fc-38-4', front: '¿Qué pasa si subís amamantar() a la clase Ovíparo?', back: 'Todas las aves quedan "contaminadas" con un comportamiento que no deberían tener, y el método queda sin implementar (vacío o tirando error) en las hijas.' },
        { id: 'fc-38-5', front: 'Problema del if (o instanceof Ornitorrinco)', back: 'Cada especie nueva de monotrema obliga a agregar otro if, y sacarla obliga a modificar código. Agregar o quitar especies no debería implicar tocar código ni lógica.' },
        { id: 'fc-38-6', front: 'La solución con interfaces en el zoo', back: 'Convertir Ovíparo y Mamífero en interfaces permite dar selectivamente amamantar(), ponerHuevos(), parir() y romperCascaron() solo a las clases que los necesitan.' },
        { id: 'fc-38-7', front: '¿Qué mejora aporta el if (o instanceof Mamifero)?', back: 'Que ya no hay que preguntar por cada especie en particular: cualquier monotrema nuevo será Mamífero (y Ovíparo), así que no hay que agregar ni sacar ifs.' },
        { id: 'fc-38-8', front: '¿Es ideal la solución con interfaces del zoo?', back: 'No. El apunte aclara que no es la mejor de las soluciones, pero es mucho mejor que la anterior; deja las formas ideales para un apunte posterior.' },
      ],
    },
    {
      id: '39',
      unit: 'diseno-avanzado',
      title: 'Batalla del futuro: los límites de la herencia y de las interfaces',
      criollo: 'Ahora el caso es un juego mobile de guerra en tiempo real. Ponés volar() en SistemaArmas y te queda un tanque volador. Lo sobrescribís vacío y multiplicás implementaciones vacías por todos lados. Pasás a interfaces y arreglás una cosa pero perdés la reutilización de código. Conclusión del apunte: ni la herencia ni las interfaces solas alcanzan.',
      blocks: [
        {
          type: 'h3',
          text: 'Presentación del caso',
          criollo: 'Un juego de estrategia en tiempo real donde cada actualización que liberás obliga a los usuarios a bajarse una versión nueva. Minimizar el impacto en el código no es un capricho: es plata.',
        },
        {
          type: 'p',
          text: 'Supongamos que hay que modelar un <strong>juego mobile de guerra/estrategia en tiempo real: "Batalla del futuro"</strong>. Entre las clases del juego tendremos los diferentes tipos y sus características. El primer paso es definir un <strong>robot</strong> con sus operaciones básicas.',
        },
        {
          type: 'p',
          text: 'Lo primero que podemos hacer es crear una clase <strong>SistemaArmas</strong> con las operaciones comunes: <code>atacar()</code>, <code>defender()</code> y <code>mostrarse()</code> (en pantalla, con sus datos). Supongamos que una próxima actualización del juego introducirá <strong>sistemas de armas voladores</strong>. Sería importante que se mantengan las actualizaciones de la app al mínimo y que se detenga lo menos posible el sistema.',
        },
        {
          type: 'h3',
          text: 'El tanque volador',
          criollo: 'Agregás volar() en la clase padre y de repente el tanque vuela. Un cambio local con efecto colateral generalizado.',
        },
        {
          type: 'p',
          text: 'Normalmente se incluiría la operación <code>volar()</code> en la clase SistemaArmas. Pero ¿qué pasa si entre los sistemas de armas que quiero incluir hay un <strong>tanque</strong>? ¡Los tanques no vuelan!',
        },
        {
          type: 'p',
          text: 'A simple vista, un sistema de armas puede ser un robot, un tanque, un bombardero... entonces, <strong>agregando el método <code>volar()</code> se rompe el diseño</strong>, porque de existir una clase hija tanque tendríamos un tanque volador. <strong>No todos los vehículos deberían volar</strong>: no es un buen diseño. Ni siquiera el diseño original era bueno, dado que <strong>un cambio local a una clase generó un efecto colateral generalizado</strong>.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'En lo que a mantenimiento respecta, <strong>la herencia no siempre es la mejor opción</strong>.',
        },
        {
          type: 'h3',
          text: 'Planteo de soluciones: sobrescribir con implementaciones vacías',
          criollo: 'Volvemos al problema del zoo virtual, pero peor: acá aparece el VehiculoSeñuelo, que no vuela, no ataca y no se defiende. Tres métodos vacíos de una.',
        },
        {
          type: 'p',
          text: '¿Qué tal si sobrescribimos la operación <code>volar()</code> y la dejamos <strong>"vacía" (sin implementación)</strong> en todas aquellas clases que no deban volar (tanque, submarino, etc.)?',
        },
        {
          type: 'p',
          text: 'Si sobrescribimos <code>volar()</code> para dejarle una implementación vacía, ¿qué pasa si agrego un nuevo tipo de vehículo, por ejemplo un <strong>portaaviones</strong>? Un barco no debería volar: otra vez tengo que dejar una implementación vacía.',
        },
        {
          type: 'p',
          text: 'Para empeorar las cosas, ¿qué pasa si agrego un <strong>VehiculoSeñuelo</strong>? Ese tampoco debería volar, y <strong>tampoco debería atacar ni defenderse</strong>. No se puede empezar a dejar implementaciones vacías por todos lados: además <strong>estaríamos duplicando el código</strong> y dejamos un software susceptible a errores.',
        },
        {
          type: 'p',
          text: 'Podríamos hacer <strong>clases abstractas</strong> en las cuales tengamos implementaciones vacías por defecto. Aunque, si necesitamos una clase que tenga <strong>diferentes combinaciones</strong> de <code>atacar()</code>, <code>defender()</code>, <code>volar()</code>, <code>sumergirse()</code>, etc., <strong>perderíamos mucho en lo que a polimorfismo respecta</strong>.',
        },
        {
          type: 'h3',
          text: 'Los problemas de las soluciones planteadas',
          criollo: 'Las tres desventajas que el apunte le cuelga a la herencia para este caso. Aprendételas: son la bisagra hacia los principios de diseño.',
        },
        {
          type: 'ul',
          items: [
            'Se <strong>duplica código</strong> en las hijas.',
            'Un <strong>cambio sencillo podría afectar todo el modelo</strong>.',
            '<strong>Cambiar el comportamiento de los vehículos en runtime es casi imposible.</strong>',
          ],
        },
        {
          type: 'h3',
          text: 'Y las interfaces tampoco alcanzan',
          criollo: 'Con interfaces te sacás de encima el tanque volador, pero si querés cambiar cómo vuelan 30 sistemas de armas tenés que ir método por método. Mejorás una cosa, empeorás otra.',
        },
        {
          type: 'p',
          text: 'Con interfaces solucionamos <strong>parte</strong> del problema, como habíamos hecho con el zoo virtual. Pero si en algún momento quisiéramos <strong>cambiar la forma en que vuela cada sistema de armas volador</strong>, habría que revisar cada uno de los métodos y hacerle los cambios necesarios. ¿Qué pasaría si hubiera 20 o 30 sistemas de armas diferentes?',
        },
        {
          type: 'p',
          text: 'Entonces, hasta aquí las interfaces solo resolvieron una parte: <strong>ya no habrá tanques voladores</strong> (ni señuelos que ataquen y se defiendan). Pero <strong>no podemos reutilizar código ni aprovechar al máximo el polimorfismo</strong>. De hecho, <strong>no podemos usar SistemaArmas como tipo de nuestros objetos</strong>: mejoramos una cosa, empeoramos otra.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Conclusión del apunte: <strong>no siempre la herencia y/o las interfaces solucionan todos los problemas</strong>.',
        },
        {
          type: 'h3',
          text: 'Herencia y sus desventajas',
          criollo: 'El cierre del capítulo: en software el cambio es continuo, así que lo que cambia hay que encapsularlo y aislarlo de lo que es fijo.',
        },
        {
          type: 'p',
          text: 'Como el comportamiento de cada sistema de armas <strong>varía en cada subclase</strong> y algunos subsistemas <strong>ni siquiera deberían tener algunos comportamientos</strong>, podemos afirmar que <strong>la herencia no resuelve completamente el problema</strong>.',
        },
        {
          type: 'p',
          text: 'Usar interfaces tampoco lo resuelve, ya que, al menos en Java, <strong>las operaciones definidas en las interfaces no pueden llevar código</strong> (en las últimas versiones esto está cambiando, pero escapa al scope de la materia). Entonces <strong>no se puede reusar el comportamiento</strong> a través de todos los sistemas que tienen una misma manera de atacar o de volar.',
        },
        {
          type: 'p',
          text: 'En lo que a software se refiere, <strong>el cambio es continuo</strong>: siempre hay nuevos requerimientos, nuevas necesidades, nuevas regulaciones. Lo mejor para ahorrarse problemas a futuro es <strong>"encerrar" o "englobar" aquellos aspectos que cambien</strong>, para que al cambiar no afecten el resto del sistema. Conviene <strong>encapsular todo lo que cambie y aislarlo de lo que es fijo</strong> a lo largo del tiempo. Así se logra que los cambios no afecten de forma inesperada a otras partes del sistema y se logra <strong>mayor flexibilidad</strong>.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-39-1', q: 'La clase SistemaArmas arranca con las operaciones atacar, defender y mostrarse.', a: true, explain: 'Son las operaciones comunes con las que se crea la clase antes de que aparezca el requerimiento de los sistemas voladores.' },
          { id: 'tf-39-2', q: 'Poner volar() en SistemaArmas es un buen diseño porque centraliza el comportamiento.', a: false, explain: 'Rompe el diseño: de existir una clase hija tanque tendríamos un tanque volador. Un cambio local generó un efecto colateral generalizado.' },
          { id: 'tf-39-3', q: 'El VehiculoSeñuelo tampoco debería atacar ni defenderse.', a: true, explain: 'El apunte pide atención con ese caso en particular: no debe volar, pero tampoco atacar ni defenderse.' },
          { id: 'tf-39-4', q: 'En Java, las operaciones definidas en las interfaces no pueden llevar código, al menos en el alcance de la materia.', a: true, explain: 'El apunte lo dice y aclara que en las últimas versiones esto está cambiando, pero escapa al scope de la materia.' },
          { id: 'tf-39-5', q: 'Al pasar a interfaces se puede seguir usando SistemaArmas como tipo de los objetos.', a: false, explain: 'Justamente no: de hecho, no podemos usar SistemaArmas como tipo de nuestros objetos. Mejoramos una cosa, empeoramos otra.' },
        ],
        mc: [
          {
            id: 'mc-39-1',
            q: '¿Qué género de juego es "Batalla del futuro"?',
            options: [
              'Un juego mobile de guerra y estrategia en tiempo real',
              'Un juego de rol por turnos para consola',
              'Un simulador de vuelo militar de escritorio',
              'Un juego de cartas coleccionables online',
            ],
            correctIndex: 0,
            explain: 'Es el enunciado del caso: un juego mobile de guerra/estrategia en tiempo real.',
          },
          {
            id: 'mc-39-2',
            q: '¿Por qué el apunte dice que ni siquiera el diseño original era bueno?',
            options: [
              'Porque usaba clases abstractas en vez de interfaces',
              'Porque un cambio local a una clase generó un efecto colateral generalizado',
              'Porque no separaba los atributos de las operaciones',
              'Porque no permitía instanciar la clase SistemaArmas',
            ],
            correctIndex: 1,
            explain: 'Esa es la crítica textual: el agregado de volar() en la superclase impactó en toda la jerarquía.',
          },
          {
            id: 'mc-39-3',
            q: '¿Qué pasa si dejamos implementaciones vacías por todos lados?',
            options: [
              'El compilador las optimiza y las elimina',
              'Se pierde la posibilidad de usar instanceof',
              'Se duplica código y queda un software susceptible a errores',
              'Se rompe el encapsulamiento de los atributos',
            ],
            correctIndex: 2,
            explain: 'El apunte advierte que además de no ser la solución correcta, estaríamos duplicando código por todos lados.',
          },
          {
            id: 'mc-39-4',
            q: 'Según el cierre del capítulo, ¿qué conviene hacer con lo que cambia en un sistema?',
            options: [
              'Documentarlo con javadoc y avisar en cada release',
              'Encapsularlo y aislarlo de lo que es fijo a lo largo del tiempo',
              'Moverlo siempre a la superclase para centralizarlo',
              'Marcarlo como final para que nadie lo modifique',
            ],
            correctIndex: 1,
            explain: 'Conviene encerrar o englobar los aspectos que cambian, para que al cambiar no afecten el resto del sistema.',
          },
        ],
        ms: [
          {
            id: 'ms-39-1',
            q: '¿Qué desventajas de la herencia enumera el apunte para el caso de los sistemas de armas?',
            options: [
              'Se duplica código en las hijas',
              'Un cambio sencillo podría afectar todo el modelo',
              'Cambiar el comportamiento en runtime es casi imposible',
              'Impide declarar atributos privados',
              'Obliga a usar el operador instanceof en cada método',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Son exactamente las tres desventajas listadas en "Los problemas de las soluciones planteadas".',
          },
          {
            id: 'ms-39-2',
            q: '¿Qué vehículos menciona el apunte como casos que no deberían volar?',
            options: [
              'Tanque',
              'Submarino',
              'Portaaviones',
              'VehiculoSeñuelo',
              'Bombardero',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El bombardero sí vuela: es uno de los ejemplos de sistema de armas volador.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-39-1', front: 'Caso "Batalla del futuro"', back: 'Un juego mobile de guerra/estrategia en tiempo real. Se modela una clase SistemaArmas con atacar(), defender() y mostrarse(), y luego se quiere agregar sistemas voladores.' },
        { id: 'fc-39-2', front: 'El problema del tanque volador', back: 'Si se agrega volar() a SistemaArmas, la clase hija tanque también vuela. Un cambio local a una clase generó un efecto colateral generalizado.' },
        { id: 'fc-39-3', front: '¿Por qué no sirven las implementaciones vacías?', back: 'Cada vehículo nuevo que no vuela obliga a otra implementación vacía; se duplica código y queda un software susceptible a errores. Y el VehiculoSeñuelo necesitaría tres.' },
        { id: 'fc-39-4', front: 'Tres desventajas de la herencia en este caso', back: 'Se duplica código en las hijas; un cambio sencillo puede afectar todo el modelo; cambiar el comportamiento en runtime es casi imposible.' },
        { id: 'fc-39-5', front: '¿Por qué las interfaces solas tampoco alcanzan?', back: 'Porque en Java (dentro del scope de la materia) las operaciones de una interfaz no pueden llevar código, así que no se puede reusar el comportamiento entre sistemas que atacan o vuelan igual.' },
        { id: 'fc-39-6', front: '¿Qué se pierde al pasar todo a interfaces en el caso de armas?', back: 'La reutilización de código y el aprovechamiento máximo del polimorfismo: ya no se puede usar SistemaArmas como tipo de los objetos.' },
        { id: 'fc-39-7', front: 'Conclusión sobre herencia e interfaces', back: 'No siempre la herencia y/o las interfaces solucionan todos los problemas.' },
        { id: 'fc-39-8', front: 'Qué hacer frente al cambio continuo del software', back: 'Encerrar o englobar los aspectos que cambian: encapsular todo lo que cambie y aislarlo de lo que es fijo, para lograr que los cambios no afecten de forma inesperada al resto y ganar flexibilidad.' },
      ],
    },
    {
      id: '40',
      unit: 'diseno-avanzado',
      title: 'Los tres principios de diseño',
      criollo: 'Acá está el corazón de la unidad. Tres principios: encapsulá lo que varía, programá contra una interfaz y no contra una implementación, y favorecé la composición por sobre la herencia. Con esos tres el sistema de armas pasa a poder cambiar cómo vuela y cómo ataca en pleno runtime, sin tocar una línea de código.',
      blocks: [
        {
          type: 'h3',
          text: 'Principio de diseño 1: separar lo que varía de lo que queda fijo',
          criollo: 'Agarrá las partes que cambian, metelas en una caja y dejalas afuera de lo que no cambia. Sobre eso se construyen casi todos los patrones.',
        },
        {
          type: 'p',
          text: 'Hay un principio de diseño de software que alienta a <strong>identificar los aspectos de nuestra aplicación que sean cambiantes y separarlos de aquello que queda siempre fijo</strong>. Otra forma de decirlo: hay que <strong>agarrar las partes de un sistema que varían y encapsularlas</strong> para que luego se puedan extender o cambiar <strong>sin afectar a las partes que no varían</strong>.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Este principio <strong>forma la base de casi todos los patrones de diseño</strong>: hacer que una parte del sistema varíe independientemente de las otras partes.',
        },
        {
          type: 'p',
          text: 'Volviendo a "Batalla del futuro": los comportamientos <code>atacar()</code> y <code>volar()</code> <strong>cambian</strong> de un SistemaDeArmas a otro, mientras que <code>mostrarse()</code> y <code>defender()</code> son <strong>siempre los mismos</strong> (uno muestra los datos en pantalla y el otro se interpone entre un enemigo y su objetivo). Entonces habría que hacer a un lado esos dos comportamientos variables y <strong>englobarlos en pequeñas "familias" de comportamientos similares</strong>.',
        },
        {
          type: 'p',
          text: 'Como el atributo <strong>energía</strong> y las operaciones <code>mostrarse()</code> y <code>defender()</code> están bien, dejaremos la clase SistemaArmas como está: <strong>solo sacaremos las operaciones <code>volar()</code> y <code>atacar()</code></strong>.',
        },
        {
          type: 'h3',
          text: 'Separar las familias de comportamientos',
          criollo: 'La gracia de un juego es que las cosas cambien en vivo: si el usuario paga el pase premium, sus tanques deberían poder volar sin que vos liberes una versión nueva.',
        },
        {
          type: 'p',
          text: 'De tratarse de un juego de guerra, cada misión tendría diferentes objetivos, por lo que un sistema de armas tendría que poder <strong>cambiar su forma de atacar</strong> si el objetivo está en tierra, en el aire o en el mar. Es decir, tendríamos que poder <strong>"asignar" una forma de atacar</strong>. Otro posible cambio es <strong>cambiar la forma de atacar si el usuario paga un adicional</strong> o se suscribe al pago mensual.',
        },
        {
          type: 'p',
          text: 'Dado que se trata de una batalla del futuro, algunos sistemas de armas podrían <strong>"transformarse"</strong> y convertirse de un avión a un robot que ataca por tierra. Entonces estaría bueno poder cambiar el comportamiento de <code>atacar()</code> y <code>volar()</code> <strong>estando ya el sistema de armas instanciado y corriendo</strong>: asignarle la forma en <strong>runtime</strong>, sin parar el sistema, sin cambiar el código y sin liberar una nueva versión.',
        },
        {
          type: 'p',
          text: 'Hecho esto, cada forma de atacar o volar ya <strong>no vendrá dictada por el sistema de armas</strong>, sino que <strong>el sistema de armas TIENE una forma de atacar o volar</strong>. Si pusiéramos la forma concreta dentro del sistema estaríamos <strong>acoplando</strong> una "forma de" con un sistema de armas en particular. Por eso necesitamos <strong>introducir una interfaz que dictamine la "forma de" volar y atacar</strong>, para que ya sea un avión, un tanque o un robot, cuando se le ordene volar o atacar lo haga <strong>sin conocer los detalles de implementación</strong>. Así hemos <strong>ENCAPSULADO</strong> las formas de volar y atacar.',
        },
        {
          type: 'h3',
          text: 'Principio de diseño 2: programar contra una interfaz, no contra una implementación',
          criollo: 'Del lado izquierdo del igual va siempre el tipo de la interfaz. Del derecho, la implementación que se te cante.',
        },
        {
          type: 'p',
          text: 'El segundo principio de diseño dice que <strong>debe programarse contra una interfaz y no contra una implementación</strong>. Es decir: <strong>del lado izquierdo del igual siempre debemos tener el tipo de la interfaz</strong>, y del lado derecho sí podremos usar la implementación que deseemos.',
        },
        {
          type: 'p',
          text: 'Desde este punto, la clase SistemaDeArmas <strong>ya no será quien implemente</strong> los comportamientos de <code>volar()</code> y <code>atacar()</code>. Habrá una serie de clases <strong>cuyo solo propósito sea implementar los diferentes comportamientos</strong>.',
        },
        {
          type: 'p',
          text: 'Antes, lo que hacíamos era <strong>heredar</strong> directamente el comportamiento desde la clase SistemaDeArmas o <strong>especificarlo en alguna de sus hijas</strong>: en ambos casos dependíamos de una implementación y no se podía alterar el comportamiento sin alterar el código. Ahora disponemos de <strong>una interfaz que define un comportamiento</strong> y serán las sucesivas y diferentes implementaciones de esta las que dicten cómo se lleva a cabo. <strong>A partir de ahora podemos alterar el comportamiento sin tocar código.</strong>',
        },
        {
          type: 'callout',
          tone: 'info',
          text: '<strong>Efecto secundario del approach:</strong> las clases que implementan los diferentes comportamientos <strong>pueden ser reutilizadas en otros escenarios</strong>. Si actualizáramos el juego para que las batallas sucedan también en el espacio, algunas "formas de atacar" podríamos usarlas nuevamente. Y se pueden agregar nuevas formas <strong>sin afectar el diseño ni el código existente</strong>.',
        },
        {
          type: 'h3',
          text: 'Delegación: el sistema de armas ya no ataca, le pide a otro que ataque',
          criollo: 'formaDeVolar y formaDeAtacar son atributos que apuntan a objetos que saben hacer eso. El sistema de armas solo los llama.',
        },
        {
          type: 'p',
          text: 'Las formas de atacar y volar son ahora <strong>referencias a clases que tendrán la responsabilidad de atacar y volar</strong> según corresponda. En vez de que el SistemaDeArmas sea quien maneje el ataque y el vuelo, estos comportamientos <strong>se delegan al objeto referenciado</strong> por el atributo <code>formaDeVolar</code>. No importa qué tipo de objeto sea: solo importa que ese objeto <strong>sabe cómo volar</strong> de la forma correspondiente. Pasa lo mismo con el ataque.',
        },
        {
          type: 'p',
          text: 'En tiempo de ejecución, cuando sobre un <code>RobotLiviano</code> se ejecute el método heredado <code>ejecutarAtaque()</code>, se mostrará por consola el mensaje "Lanzo rayos". Si llamo al setter de <code>formaDeAtaque</code> y cambio la forma por un <code>AtacarConMisiles</code>, <strong>el mensaje pasa a ser "Lanzo Misiles"</strong>.',
        },
        {
          type: 'code',
          code: 'public class Guerra {\n    public static void main(String[] args) {\n        SistemaDeArmas miRobot = new RobotLiviano();\n        miRobot.ejecutarVuelo();\n        miRobot.ejecutarAtaque();\n\n        miRobot.setFormaDeAtacar(new AtacarConMisiles());\n        miRobot.ejecutarAtaque();\n    }\n}',
        },
        {
          type: 'h3',
          text: 'Principio de diseño 3: favorecer la composición por sobre la herencia',
          criollo: 'Heredar te encierra en comportamientos fijos. Componer te deja cambiarlos en vivo. Este es el principio que después se convierte en el patrón Strategy.',
        },
        {
          type: 'p',
          text: 'Si generalizamos el problema, podemos pensar en las diferentes <strong>"formas de"</strong> como diferentes <strong>"algoritmos"</strong> o <strong>"familias de algoritmos"</strong>. Es decir, cada "algoritmo" representa algo que un sistema de armas puede hacer.',
        },
        {
          type: 'p',
          text: '<strong>Componer nos da mayor flexibilidad. Heredar nos "encerraba" en comportamientos fijos.</strong> Componer nos permite <strong>encapsular los comportamientos</strong>, permitiendo intercambiarlos sin afectar otras partes del sistema y, más aún, nos permite <strong>cambiar los comportamientos en RUNTIME</strong> (siempre que se respeten las interfaces). Esto da lugar a otro principio de diseño muy importante: <strong>favorecer la composición por sobre la herencia</strong>.',
        },
        {
          type: 'table',
          caption: 'Los tres principios de diseño del apunte',
          headers: ['#', 'Principio', 'Qué resuelve'],
          rows: [
            ['1', 'Identificar lo que varía y separarlo de lo que queda fijo', 'Que un cambio local no genere un efecto colateral generalizado'],
            ['2', 'Programar contra una interfaz y no contra una implementación', 'Poder alterar el comportamiento sin tocar código'],
            ['3', 'Favorecer la composición por sobre la herencia', 'Poder intercambiar comportamientos, incluso en runtime'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-40-1', q: 'El primer principio de diseño forma la base de casi todos los patrones de diseño.', a: true, explain: 'El apunte lo dice textual: hacer que una parte del sistema varíe independientemente de las otras partes es la base de casi todos los patrones.' },
          { id: 'tf-40-2', q: 'En "Batalla del futuro", defender() y mostrarse() son los comportamientos que varían de un sistema de armas a otro.', a: false, explain: 'Al revés: los que cambian son atacar() y volar(). mostrarse() y defender() son siempre los mismos y por eso se quedan en SistemaArmas.' },
          { id: 'tf-40-3', q: 'Programar contra una interfaz significa poner el tipo de la interfaz del lado izquierdo del igual.', a: true, explain: 'Del lado izquierdo va siempre el tipo de la interfaz; del lado derecho se puede usar la implementación que se desee.' },
          { id: 'tf-40-4', q: 'Al delegar el vuelo a un objeto, el sistema de armas necesita conocer los detalles de implementación de ese comportamiento.', a: false, explain: 'No importa qué tipo de objeto sea: solo importa que ese objeto sabe cómo volar de la forma correspondiente.' },
          { id: 'tf-40-5', q: 'La composición permite cambiar comportamientos en runtime siempre que se respeten las interfaces.', a: true, explain: 'Esa es la ventaja central frente a la herencia, que encerraba en comportamientos fijos.' },
        ],
        mc: [
          {
            id: 'mc-40-1',
            q: '¿Cómo enuncia el apunte el primer principio de diseño?',
            options: [
              'Identificar los aspectos cambiantes y separarlos de aquello que queda siempre fijo',
              'Declarar todos los atributos como privados y exponer getters',
              'Preferir siempre las clases abstractas por sobre las interfaces',
              'Centralizar todo el comportamiento común en la superclase',
            ],
            correctIndex: 0,
            explain: 'También se enuncia como: agarrar las partes que varían y encapsularlas para poder extenderlas o cambiarlas sin afectar a las que no varían.',
          },
          {
            id: 'mc-40-2',
            q: '¿Qué atributo y qué operaciones se quedan en la clase SistemaArmas?',
            options: [
              'El atributo energía y las operaciones volar() y atacar()',
              'El atributo energía y las operaciones mostrarse() y defender()',
              'Los atributos formaDeVolar y formaDeAtacar solamente',
              'Ningún atributo: la clase queda como interfaz pura',
            ],
            correctIndex: 1,
            explain: 'El atributo energía y las operaciones mostrarse() y defender() están bien, así que la clase se deja como está; solo se sacan volar() y atacar().',
          },
          {
            id: 'mc-40-3',
            q: 'Después de llamar a miRobot.setFormaDeAtacar(new AtacarConMisiles()), ¿qué imprime ejecutarAtaque()?',
            options: [
              'Lanzo rayos',
              'Lanzo misiles',
              'Nada, porque el método quedó vacío',
              'Un error de compilación por incompatibilidad de tipos',
            ],
            correctIndex: 1,
            explain: 'El RobotLiviano imprimía "Lanzo rayos"; al cambiar la forma de atacar por AtacarConMisiles el mensaje pasa a ser "Lanzo Misiles".',
          },
          {
            id: 'mc-40-4',
            q: '¿Qué efecto secundario positivo tiene programar contra interfaces según el apunte?',
            options: [
              'Que el compilador optimiza mejor el bytecode',
              'Que las clases de comportamiento pueden reutilizarse en otros escenarios',
              'Que desaparece la necesidad de usar constructores',
              'Que se puede usar herencia múltiple de clases',
            ],
            correctIndex: 1,
            explain: 'Si el juego se actualizara para que las batallas sucedan en el espacio, algunas "formas de atacar" podrían reutilizarse tal cual.',
          },
        ],
        ms: [
          {
            id: 'ms-40-1',
            q: '¿Cuáles son los tres principios de diseño que enuncia el apunte?',
            options: [
              'Identificar lo que varía y separarlo de lo fijo',
              'Programar contra una interfaz y no contra una implementación',
              'Favorecer la composición por sobre la herencia',
              'Preferir la herencia por sobre la composición',
              'Hacer todos los métodos final por defecto',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Los otros dos son lo contrario o directamente no aparecen en el apunte.',
          },
          {
            id: 'ms-40-2',
            q: '¿Qué ventajas atribuye el apunte a componer en lugar de heredar?',
            options: [
              'Da mayor flexibilidad',
              'Permite encapsular los comportamientos',
              'Permite intercambiar comportamientos sin afectar otras partes del sistema',
              'Permite cambiar los comportamientos en runtime',
              'Elimina la necesidad de definir interfaces',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Justamente lo contrario de la última: la composición funciona siempre que se respeten las interfaces.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-40-1', front: 'Principio de diseño 1', back: 'Identificar los aspectos de la aplicación que sean cambiantes y separarlos de aquello que queda siempre fijo, encapsulándolos para poder extenderlos o cambiarlos sin afectar al resto.' },
        { id: 'fc-40-2', front: '¿Por qué el principio 1 es tan importante?', back: 'Porque forma la base de casi todos los patrones de diseño: hacer que una parte del sistema varíe independientemente de las otras partes.' },
        { id: 'fc-40-3', front: 'En Batalla del futuro, ¿qué varía y qué no?', back: 'Varían atacar() y volar(), que cambian de un sistema de armas a otro. No varían mostrarse() (muestra datos en pantalla) ni defender() (se interpone entre el enemigo y su objetivo).' },
        { id: 'fc-40-4', front: 'Principio de diseño 2', back: 'Programar contra una interfaz y no contra una implementación: del lado izquierdo del igual siempre el tipo de la interfaz, del derecho la implementación que se desee.' },
        { id: 'fc-40-5', front: 'Delegación de comportamiento', back: 'El SistemaDeArmas ya no ataca ni vuela: delega esos comportamientos al objeto referenciado por formaDeAtacar / formaDeVolar. Solo importa que ese objeto sabe hacerlo.' },
        { id: 'fc-40-6', front: 'Principio de diseño 3', back: 'Favorecer la composición por sobre la herencia. Heredar encierra en comportamientos fijos; componer permite encapsularlos, intercambiarlos y cambiarlos en runtime.' },
        { id: 'fc-40-7', front: '"Familias de algoritmos"', back: 'Generalización de las diferentes "formas de": cada algoritmo representa algo que un sistema de armas puede hacer, encapsulado en su propia clase.' },
        { id: 'fc-40-8', front: 'Efecto secundario de programar contra interfaces', back: 'Las clases que implementan los comportamientos pueden reutilizarse en otros escenarios, y se pueden agregar formas nuevas sin afectar el diseño ni el código existente.' },
      ],
    },
    {
      id: '41',
      unit: 'diseno-avanzado',
      title: 'Patrones Strategy y Template Method',
      criollo: 'Los dos primeros patrones del apunte. Strategy encapsula familias enteras de algoritmos para poder intercambiarlos; Template Method deja fijo el esqueleto de un algoritmo y cede a las hijas solo algunos pasos. Uno compone, el otro hereda. Y el detalle fino: el template method se marca final justo para que no se convierta en un Strategy.',
      blocks: [
        {
          type: 'h3',
          text: 'De los principios al patrón Strategy',
          criollo: 'Si juntás "encapsulá lo que varía" + "programá contra interfaces" + "componé en vez de heredar", lo que te queda ya tiene nombre propio.',
        },
        {
          type: 'p',
          text: 'Anteriormente enumeramos algunos principios de diseño e introdujimos las ventajas de <strong>favorecer la composición por sobre la herencia</strong>. Esto, sumado al principio de <strong>programar contra interfaces</strong>, hizo que arribáramos a un diseño en el que <strong>separamos comportamientos en "familias"</strong> y que nos permite <strong>alternar estos comportamientos en tiempo de ejecución</strong>.',
        },
        {
          type: 'p',
          text: 'Si generalizamos el problema, podemos pensar en las diferentes "formas de" como diferentes <strong>algoritmos</strong> o <strong>familias de algoritmos</strong>: cada algoritmo representa algo que un sistema de armas puede hacer.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: '<strong>Patrón Strategy (enunciado).</strong> Strategy <strong>define una familia de algoritmos encapsulados de forma tal que puedan intercambiarse</strong>. El patrón Strategy permite <strong>variar entre diferentes algoritmos sin afectar a los clientes que los usan</strong>.',
        },
        {
          type: 'h3',
          text: 'Template Method: el problema del código duplicado',
          criollo: 'Un avión despega, va al objetivo, cumple la orden y aterriza. Un tanque sale, va al objetivo, cumple la orden y regresa. Poné los dos códigos lado a lado y la duplicación te salta a la cara.',
        },
        {
          type: 'p',
          text: 'Habiendo encapsulado algoritmos con Strategy, podemos pensar en <strong>encapsular las diferentes partes de un algoritmo complejo</strong>. De esta manera podemos proveer <strong>"hooks" (o "enganches")</strong> sobre las partes o los pasos del algoritmo, como para <strong>reemplazarlas o extenderlas sin alterar el algoritmo original</strong>.',
        },
        {
          type: 'p',
          text: 'Volviendo a los vehículos armados: cada vehículo puede ejecutar una misión de formas variadas <strong>pero similares entre sí</strong>. Un avión debería salir de la base (despegar), ir hasta el objetivo, cumplir la orden y regresar (aterrizar). Un tanque debería salir de la base, ir hasta el objetivo, cumplir la orden y regresar. Un barco, un robot... son todos bastante similares.',
        },
        {
          type: 'code',
          code: 'public class Avion {\n    ejecutarMision() {\n        despegar();\n        irAlObjetivo();\n        cumplirOrden();\n        aterrizar();\n    }\n\n    despegar() {\n        syso("Salgo del hangar");\n        syso("despego");\n    }\n    irAlObjetivo() { syso("voy al objetivo"); }\n    cumplirOrden()  { syso("cumplo orden"); }\n    aterrizar() {\n        syso("vuelvo volando");\n        syso("aterrizo");\n    }\n}',
        },
        {
          type: 'code',
          code: 'public class Tanque {\n    ejecutarMision() {\n        salir();\n        irAlObjetivo();\n        cumplirOrden();\n        regresar();\n    }\n\n    salir() { syso("Salgo de la base"); }\n    irAlObjetivo() { syso("voy al objetivo"); }\n    cumplirOrden()  { syso("cumplo orden"); }\n    regresar() { syso("me desplazo a la base"); }\n}',
        },
        {
          type: 'p',
          text: 'Viéndolo lado a lado, <strong>es evidente que se duplica código</strong>.',
        },
        {
          type: 'h3',
          text: 'La solución: abstraer el mecanismo, delegar los pasos',
          criollo: 'Salir es a despegar lo que regresar es a aterrizar. Renombrás los pasos genéricos y el algoritmo queda uno solo.',
        },
        {
          type: 'p',
          text: 'El comportamiento <code>ejecutarMision()</code> es abstracto porque cada subclase lo llevará a cabo distinto, por lo que debe implementarse. En cambio, <code>despegar()</code>, <code>aterrizar()</code>, <code>salir()</code> y <code>regresar()</code> son <strong>específicos de cada uno</strong>. A simple vista se relacionan los conceptos "salir" con "despegar" y "aterrizar" con "regresar": el <strong>MECANISMO (algoritmo) de ejecutar una misión siempre tiene los mismos pasos</strong>.',
        },
        {
          type: 'code',
          code: 'ejecutarMision() {\n    comenzarMision();\n    irAlObjetivo();\n    cumplirOrden();\n    volverABase();\n}',
        },
        {
          type: 'p',
          text: 'Y se relega a las clases hijas <strong>la decisión de cómo llevar a cabo ciertos pasos</strong>: el salir y el regresar son las únicas partes que cambian del algoritmo (un avión despega, un tanque no; un avión aterriza, un tanque no).',
        },
        {
          type: 'p',
          text: 'El método <code>ejecutarMision</code> es lo que se conoce como <strong>Template Method</strong>. Como su nombre lo indica, presenta <strong>una plantilla para un algoritmo, indicando sus pasos</strong>. Uno o más de esos pasos pueden ser <strong>redefinidos por subclases</strong>; para hacer cumplir esto <strong>se marcan como abstractos</strong>.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Redefinir <strong>todos</strong> los pasos sería como reemplazar por completo el método. Si se permitiera redefinir todo el método plantilla, <strong>estaríamos en presencia de un Strategy</strong>. Para evitar tal situación <strong>el template method se marca <code>final</code></strong>.',
        },
        {
          type: 'h3',
          text: 'Qué se logra aplicando Template Method',
          criollo: 'El algoritmo queda en un solo lugar. Cualquier cambio se hace ahí y listo.',
        },
        {
          type: 'ul',
          items: [
            'Queda <strong>encapsulado el algoritmo</strong>, mejorando su <strong>reusabilidad</strong>.',
            '<strong>Cualquier cambio se hace en un solo lugar.</strong>',
            'La clase con el Template Method <strong>concentra el conocimiento del algoritmo</strong>, dejando a las subclases la implementación concreta.',
            'El TM brinda <strong>una plantilla, un framework</strong>, que cualquier "sistemaArmas" puede tomar para funcionar implementando <strong>algunos (no todos)</strong> de los métodos del algoritmo.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: '<strong>Template Method (enunciado).</strong> Define <strong>el esqueleto, la plantilla de un algoritmo en un solo método</strong>, cediendo a las subclases las implementaciones de algunos pasos. Es decir: permite a las subclases <strong>redefinir algunos pasos de un algoritmo sin alterar la estructura de este</strong>.',
        },
        {
          type: 'table',
          caption: 'Strategy vs. Template Method',
          headers: ['', 'Strategy', 'Template Method'],
          rows: [
            ['Qué encapsula', 'Una familia de algoritmos completos', 'Los pasos variables de un único algoritmo'],
            ['Mecanismo', 'Composición: se le asigna un objeto "forma de"', 'Herencia: las subclases implementan los pasos abstractos'],
            ['Cuánto se puede cambiar', 'El algoritmo entero, incluso en runtime', 'Solo los pasos marcados como abstractos'],
            ['Marca clave', 'Interfaz para la familia de algoritmos', 'El método plantilla se marca final'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-41-1', q: 'Strategy define una familia de algoritmos encapsulados de forma tal que puedan intercambiarse.', a: true, explain: 'Es el enunciado textual del patrón. Además permite variar entre algoritmos sin afectar a los clientes que los usan.' },
          { id: 'tf-41-2', q: 'El Template Method encapsula un algoritmo completo para poder reemplazarlo entero.', a: false, explain: 'Encapsula el esqueleto y cede solo algunos pasos. Si se pudiera reemplazar todo el método, estaríamos en presencia de un Strategy.' },
          { id: 'tf-41-3', q: 'Los pasos que las subclases deben redefinir en un Template Method se marcan como abstractos.', a: true, explain: 'Para hacer cumplir que uno o más pasos sean redefinidos por subclases, esos pasos se marcan como abstractos.' },
          { id: 'tf-41-4', q: 'El método plantilla se marca final para evitar que se lo redefina por completo.', a: true, explain: 'Redefinir todos los pasos equivaldría a reemplazar el método; para evitarlo el template method se marca final.' },
          { id: 'tf-41-5', q: 'En el ejemplo, irAlObjetivo() y cumplirOrden() son los pasos que cambian entre avión y tanque.', a: false, explain: 'Esos dos son iguales en ambos. Los que cambian son salir/despegar y regresar/aterrizar.' },
        ],
        mc: [
          {
            id: 'mc-41-1',
            q: '¿Qué son los "hooks" o "enganches" de los que habla el apunte?',
            options: [
              'Los puntos del algoritmo que se pueden reemplazar o extender sin alterar el original',
              'Los métodos que conectan la clase con la base de datos',
              'Los listeners que se registran para eventos del juego',
              'Los constructores adicionales al constructor por default',
            ],
            correctIndex: 0,
            explain: 'Son enganches sobre las partes o pasos del algoritmo, para reemplazarlas o extenderlas sin alterar el algoritmo original.',
          },
          {
            id: 'mc-41-2',
            q: '¿Cuáles son los cuatro pasos del algoritmo genérico de ejecutar una misión?',
            options: [
              'despegar, irAlObjetivo, cumplirOrden, aterrizar',
              'salir, irAlObjetivo, cumplirOrden, regresar',
              'comenzarMision, irAlObjetivo, cumplirOrden, volverABase',
              'iniciar, atacar, defender, finalizar',
            ],
            correctIndex: 2,
            explain: 'El apunte generaliza salir/despegar en comenzarMision() y regresar/aterrizar en volverABase().',
          },
          {
            id: 'mc-41-3',
            q: '¿Qué logra el Template Method respecto del cambio?',
            options: [
              'Que cualquier cambio deba replicarse en cada subclase',
              'Que cualquier cambio se haga en un solo lugar',
              'Que el algoritmo se pueda cambiar en runtime sin recompilar',
              'Que el algoritmo se documente automáticamente con javadoc',
            ],
            correctIndex: 1,
            explain: 'La clase con el TM concentra el conocimiento del algoritmo; cualquier cambio se hace en un solo lugar.',
          },
          {
            id: 'mc-41-4',
            q: 'Según el apunte, ¿qué provee el Template Method a cualquier "sistemaArmas"?',
            options: [
              'Una plantilla o framework que se toma implementando algunos, no todos, los métodos',
              'Una interfaz que obliga a implementar absolutamente todos los métodos',
              'Un objeto que se le asigna por setter en tiempo de ejecución',
              'Una clase concreta lista para instanciar sin modificaciones',
            ],
            correctIndex: 0,
            explain: 'El TM brinda una plantilla, un framework, que cualquier sistemaArmas puede tomar para funcionar implementando algunos (no todos) de los métodos.',
          },
        ],
        ms: [
          {
            id: 'ms-41-1',
            q: '¿Qué se logra aplicando Template Method, según el apunte?',
            options: [
              'Encapsular el algoritmo mejorando su reusabilidad',
              'Concentrar el conocimiento del algoritmo en una sola clase',
              'Que cualquier cambio se haga en un solo lugar',
              'Brindar una plantilla que se completa implementando algunos métodos',
              'Poder cambiar el algoritmo completo en tiempo de ejecución',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Cambiar el algoritmo completo en runtime es lo propio del Strategy, no del Template Method.',
          },
          {
            id: 'ms-41-2',
            q: '¿Qué principios de diseño confluyen en el patrón Strategy según el apunte?',
            options: [
              'Favorecer la composición por sobre la herencia',
              'Programar contra interfaces',
              'Separar los comportamientos en familias',
              'Preferir siempre las clases abstractas',
              'Marcar todos los métodos como final',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'La composición, el programar contra interfaces y la separación en familias de comportamientos son los tres que el apunte encadena para llegar al Strategy.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-41-1', front: 'Patrón Strategy (enunciado)', back: 'Define una familia de algoritmos encapsulados de forma tal que puedan intercambiarse. Permite variar entre diferentes algoritmos sin afectar a los clientes que los usan.' },
        { id: 'fc-41-2', front: '"Familia de algoritmos"', back: 'Generalización de las diferentes "formas de" hacer algo: cada algoritmo representa algo que un objeto (por ejemplo, un sistema de armas) puede hacer.' },
        { id: 'fc-41-3', front: 'Hooks o enganches', back: 'Puntos sobre las partes o pasos de un algoritmo que permiten reemplazarlas o extenderlas sin alterar el algoritmo original.' },
        { id: 'fc-41-4', front: 'Template Method (enunciado)', back: 'Define el esqueleto o plantilla de un algoritmo en un solo método, cediendo a las subclases la implementación de algunos pasos, sin alterar la estructura del algoritmo.' },
        { id: 'fc-41-5', front: 'El algoritmo genérico de ejecutar una misión', back: 'comenzarMision(), irAlObjetivo(), cumplirOrden(), volverABase(). Los pasos variables son el primero y el último (despegar/salir, aterrizar/regresar).' },
        { id: 'fc-41-6', front: '¿Por qué el template method se marca final?', back: 'Porque redefinir todos los pasos equivaldría a reemplazar el método por completo, y ahí ya estaríamos en presencia de un Strategy.' },
        { id: 'fc-41-7', front: '¿Cómo se marcan los pasos que deben redefinir las subclases?', back: 'Como abstractos, para hacer cumplir su implementación en las subclases.' },
        { id: 'fc-41-8', front: 'Qué se logra con Template Method', back: 'Encapsular el algoritmo mejorando su reusabilidad, hacer cualquier cambio en un solo lugar, concentrar el conocimiento del algoritmo y ofrecer una plantilla que se completa implementando algunos métodos.' },
      ],
    },
    {
      id: '42',
      unit: 'diseno-avanzado',
      title: 'Patrón State',
      criollo: 'El sistema de tiro de un tanque: armado, desarmado, con munición, sin munición. La primera idea es un atributo estado y un if-else gigante en cada método. Anda, pero cada estado nuevo te obliga a meter mano en la lógica. State dice: cada estado es una clase, y chau condicionales.',
      blocks: [
        {
          type: 'h3',
          text: 'El problema: estados y transiciones',
          criollo: 'Un sistema de tiro cambia cada vez que alguien lo toca. Si le quedaba una bala y disparás, pasás a "sin munición".',
        },
        {
          type: 'p',
          text: 'Imaginemos uno de los sistemas de armas discutidos: un <strong>tanque</strong>. Simplificando la automatización del sistema de tiro podemos decir: <strong>se carga el arma, se dispara y vuelve a empezar</strong>. Un sistema así de simple puede pasar por diferentes situaciones: puede estar <strong>"armado"</strong> (listo para entrar en combate) o <strong>"desarmado"</strong> (en modo de espera o apagado), puede tener munición para disparar o no, puede tener la munición lista o estar sin municiones, etc.',
        },
        {
          type: 'p',
          text: 'A su vez, <strong>cada vez que alguien interactúa con el sistema de tiro, este cambia</strong>. Por ejemplo, si le quedara una sola bala, al dispararla el tanque queda vacío o "sin munición". Esta situación <strong>suena a estados y transiciones de estados</strong>: el tanque pasa por diferentes estados cada vez que "hace algo".',
        },
        {
          type: 'p',
          text: 'Si se modelara el sistema de armas como un objeto, este tendría <strong>estado interno</strong> y <strong>operaciones que invocarle para cambiar ese estado</strong>.',
        },
        {
          type: 'h3',
          text: 'El approach ingenuo: atributo estado + IF-ELSE',
          criollo: 'No está mal per se. El problema aparece el día que agregás o sacás un estado.',
        },
        {
          type: 'p',
          text: 'El approach más sencillo sería tener un <strong>atributo "estado"</strong> y después un método para cada transición; dentro de ese método, un <strong>IF-ELSE</strong> para preguntar "si está en el estado A, B o C hago una cosa u otra, pero solo si está en el estado X paso al Y". <strong>No tiene nada de malo</strong>: estamos almacenando el estado interno y escribiendo código condicional que actúe según los diferentes estados.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'El problema aparece cuando <strong>agregamos un estado o quitamos uno</strong>: hay que cambiar el if-else o, lo que es peor, <strong>puede afectar toda la lógica</strong>.',
        },
        {
          type: 'p',
          text: 'Sería interesante que el sistema <strong>se comporte distinto según el estado en el que está</strong> y que eso dependa del estado en el que se encuentra en un determinado momento, <strong>ya no de una lógica centralizada</strong>. Es decir: quiero <strong>desacoplar el estado actual del comportamiento del sistema</strong>.',
        },
        {
          type: 'h3',
          text: 'La solución: encapsular los estados en clases',
          criollo: 'Tres pasos y listo. El tercero es el más lindo: eliminar todo tipo de código condicional.',
        },
        {
          type: 'p',
          text: 'Lo que podemos hacer es <strong>encapsular los posibles estados en sus propias clases</strong> y posiblemente encapsular también a quien se encargue de cambiar los estados. Para ello:',
        },
        {
          type: 'ol',
          items: [
            'Definir <strong>una interfaz que contenga cada transición de estado</strong>, es decir, cada operación que implique un cambio de estado.',
            '<strong>Implementar cada uno de los estados posibles en una clase.</strong> Cada una tendrá la responsabilidad de actuar según el estado en que se encuentre la máquina (el problema).',
            '<strong>Eliminar todo tipo de código condicional.</strong>',
          ],
        },
        {
          type: 'p',
          text: 'Entonces, cada estado y cómo actuará la máquina en cada estado <strong>estará concentrado en clases y no disperso a través de varias sentencias IF-ELSE</strong>.',
        },
        {
          type: 'p',
          text: 'El comportamiento del sistema de armas <strong>depende del estado en el que está</strong>, y ese comportamiento <strong>puede incluir una transición a otro estado</strong>. En algunos casos puede ser mejor que los cambios de estado los administre el propio sistema.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Poner la lógica de transiciones en cada uno de los "xyzState" <strong>aporta mayor flexibilidad</strong>, dado que cada uno conoce <strong>por qué cambia, cuándo lo hace y hacia qué otro estado va</strong>. Por otro lado, <strong>se acopla un poco</strong>, al tener que hacer que un "xyzState" conozca al menos a otro "xyzState".',
        },
        {
          type: 'callout',
          tone: 'info',
          text: '<strong>Patrón State (enunciado).</strong> El patrón State <strong>permite a un objeto alterar su comportamiento de acuerdo con su estado interno</strong>.',
        },
        {
          type: 'h3',
          text: 'Conclusiones del patrón State',
          criollo: 'Ventajas: se ve clarito en qué situación está la máquina y cuándo cambia. Desventaja: te llenás de clases.',
        },
        {
          type: 'ul',
          items: [
            'Da una <strong>clara visión de qué hace la máquina en cada estado</strong>. Con constantes + IF/ELSE la lógica queda distribuida a lo largo de varios métodos, acoplando todo y siendo susceptible a errores; y complica a futuro si se quieren agregar o sacar estados.',
            'Al estar los estados encapsulados <strong>se reduce la posibilidad de errores</strong> de codificación que dejen al contexto en un estado "inconsistente".',
            'Da una <strong>clara visión de los cambios de estado</strong>. Usando constantes junto con IF/ELSE, el paso de estado <strong>se puede confundir con una asignación de valor a una variable</strong>.',
            '<strong>Desventaja innegable:</strong> a medida que crece la cantidad de estados <strong>se incrementa la cantidad de clases</strong>, por lo que hay que escribir más código y resulta en más objetos, <strong>consumiendo más memoria</strong>.',
          ],
        },
        {
          type: 'h3',
          text: 'Relación con Strategy',
          criollo: 'Son iguales en forma pero distintos en intención. Esa frase entra en el parcial.',
        },
        {
          type: 'p',
          text: '<strong>Con Strategy: son iguales en forma, pero se diferencian en intención.</strong>',
        },
        {
          type: 'ul',
          items: [
            'En el <strong>State</strong>, el estado está encapsulado en objetos. Con los cambios de estado <strong>el contexto varía su comportamiento</strong>. El encapsulamiento hace que <strong>el cliente no conozca casi nada</strong> acerca de los objetos "xyzState".',
            'En el <strong>Strategy</strong>, <strong>el cliente es quien especifica el objeto "xyzStrategy"</strong> que se va a utilizar en el contexto. Si bien se puede alterar la estrategia en runtime, normalmente <strong>hay una estrategia adecuada para cada problema</strong>.',
            'Está bueno <strong>pensar al Strategy como una herencia</strong>: una vez elegida la estrategia queda fija hasta que termina el problema; para cambiarla hay que componer el contexto con un objeto diferente.',
            'El <strong>State</strong> sirve para <strong>reemplazar varios condicionales</strong> que alteran el funcionamiento del contexto: al cambiar el contexto de estado, cambia su forma de comportarse.',
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-42-1', q: 'El patrón State permite a un objeto alterar su comportamiento de acuerdo con su estado interno.', a: true, explain: 'Es el enunciado textual del patrón.' },
          { id: 'tf-42-2', q: 'El apunte considera que usar un atributo estado con IF-ELSE está mal en sí mismo.', a: false, explain: 'Dice que no tiene nada de malo almacenar el estado interno y escribir código condicional. El problema aparece al agregar o quitar estados.' },
          { id: 'tf-42-3', q: 'Uno de los pasos del patrón State es eliminar todo tipo de código condicional.', a: true, explain: 'Es el tercero de los tres pasos, después de definir la interfaz de transiciones e implementar cada estado en una clase.' },
          { id: 'tf-42-4', q: 'Poner la lógica de transiciones en cada xyzState no genera ningún acoplamiento.', a: false, explain: 'Aporta flexibilidad, pero acopla un poco: cada xyzState tiene que conocer al menos a otro xyzState.' },
          { id: 'tf-42-5', q: 'State y Strategy son iguales en forma pero se diferencian en intención.', a: true, explain: 'Es la frase con la que el apunte abre la sección "Relaciones con otros patrones".' },
        ],
        mc: [
          {
            id: 'mc-42-1',
            q: '¿Cuál es el primer paso para aplicar el patrón State según el apunte?',
            options: [
              'Implementar cada estado posible en una clase',
              'Definir una interfaz que contenga cada transición de estado',
              'Eliminar todo el código condicional existente',
              'Crear un atributo estado de tipo entero',
            ],
            correctIndex: 1,
            explain: 'Primero se define la interfaz con cada operación que implique un cambio de estado; después se implementa cada estado en una clase y por último se eliminan los condicionales.',
          },
          {
            id: 'mc-42-2',
            q: '¿Cuál es la desventaja innegable del patrón State?',
            options: [
              'Que impide cambiar de estado en tiempo de ejecución',
              'Que obliga a usar herencia múltiple',
              'Que al crecer la cantidad de estados crece la cantidad de clases y el consumo de memoria',
              'Que deja la lógica dispersa en varios métodos',
            ],
            correctIndex: 2,
            explain: 'Más estados implican más clases, más código escrito y más objetos, consumiendo más memoria.',
          },
          {
            id: 'mc-42-3',
            q: 'En el Strategy, ¿quién especifica qué objeto de estrategia se usa en el contexto?',
            options: [
              'El cliente',
              'El propio contexto, según su estado interno',
              'El objeto de estrategia anterior',
              'La JVM en tiempo de ejecución',
            ],
            correctIndex: 0,
            explain: 'En el Strategy el cliente especifica el objeto xyzStrategy. En el State, en cambio, el cliente no conoce casi nada de los objetos xyzState.',
          },
          {
            id: 'mc-42-4',
            q: '¿Qué riesgo señala el apunte al manejar estados con constantes e IF/ELSE?',
            options: [
              'Que el compilador no permita comparar constantes',
              'Que el paso de estado se pueda confundir con una asignación de valor a una variable',
              'Que las constantes ocupen demasiada memoria',
              'Que se pierda el encapsulamiento de la clase contexto',
            ],
            correctIndex: 1,
            explain: 'Con constantes, un cambio de estado se ve igual que asignar un valor a una variable; el State da una visión clara de los cambios de estado.',
          },
        ],
        ms: [
          {
            id: 'ms-42-1',
            q: '¿En qué situaciones puede estar el sistema de tiro del tanque según el apunte?',
            options: [
              'Armado, listo para entrar en combate',
              'Desarmado, en modo de espera o apagado',
              'Con munición lista para disparar',
              'Sin municiones',
              'En reparación en la base',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El estado "en reparación" no aparece en el apunte; los otros cuatro sí.',
          },
          {
            id: 'ms-42-2',
            q: '¿Qué conclusiones favorables del patrón State enumera el apunte?',
            options: [
              'Da una clara visión de qué hace la máquina en cada estado',
              'Reduce la posibilidad de dejar al contexto en un estado inconsistente',
              'Da una clara visión de los cambios de estado',
              'Reduce el consumo de memoria del sistema',
              'Elimina la necesidad de definir interfaces',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'El consumo de memoria en realidad aumenta, y la interfaz de transiciones es justamente el primer paso del patrón.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-42-1', front: 'Patrón State (enunciado)', back: 'Permite a un objeto alterar su comportamiento de acuerdo con su estado interno.' },
        { id: 'fc-42-2', front: 'El caso del sistema de tiro', back: 'Un tanque carga el arma, dispara y vuelve a empezar. Puede estar armado o desarmado, con munición lista o sin municiones. Cada interacción lo hace cambiar de estado.' },
        { id: 'fc-42-3', front: 'El approach ingenuo de manejar estados', back: 'Un atributo "estado" y un método por transición con un IF-ELSE adentro. No está mal en sí, pero agregar o quitar un estado obliga a cambiar el if-else y puede afectar toda la lógica.' },
        { id: 'fc-42-4', front: 'Los tres pasos del patrón State', back: '1) Definir una interfaz con cada transición de estado. 2) Implementar cada estado posible en una clase. 3) Eliminar todo tipo de código condicional.' },
        { id: 'fc-42-5', front: 'Ventaja y costo de poner las transiciones en cada xyzState', back: 'Ventaja: cada estado conoce por qué cambia, cuándo lo hace y hacia dónde va, lo que aporta flexibilidad. Costo: se acopla un poco, porque un xyzState debe conocer a otro.' },
        { id: 'fc-42-6', front: 'Desventaja innegable del State', back: 'A medida que crece la cantidad de estados crece la cantidad de clases: más código escrito, más objetos y más consumo de memoria.' },
        { id: 'fc-42-7', front: 'State vs. Strategy', back: 'Son iguales en forma pero distintos en intención. En State el cliente no conoce casi nada de los xyzState y el contexto cambia solo; en Strategy el cliente especifica el xyzStrategy y normalmente hay uno adecuado por problema.' },
        { id: 'fc-42-8', front: '¿Para qué sirve el State frente a los condicionales?', back: 'Para reemplazar varios condicionales que alteran el funcionamiento del contexto: al cambiar el estado, cambia la forma de comportarse.' },
      ],
    },
    {
      id: '43',
      unit: 'diseno-avanzado',
      title: 'Patrón Singleton',
      criollo: 'Cuando necesitás una y solo una instancia de algo (el mapa del juego, las preferencias, un historial) y querés llegar a ella desde cualquier lado. Constructor privado, getInstance() y listo. Después el apunte se pone fino con los threads y aparece el double-checked locking con volatile.',
      blocks: [
        {
          type: 'h3',
          text: '¿Por qué necesitamos una sola instancia de un objeto?',
          criollo: 'Objetos caros de construir, con recursos limitados, o que simplemente no tiene sentido duplicar.',
        },
        {
          type: 'p',
          text: 'Puede tratarse de objetos que sean <strong>contenedores de preferencias</strong>, <strong>diálogos</strong>, <strong>editores</strong>, <strong>mensajes</strong>, objetos que <strong>usen recursos limitados</strong>, <strong>historiales de acciones</strong> o cuya <strong>construcción sea costosa</strong> y no varíe durante el ciclo de vida de la aplicación.',
        },
        {
          type: 'p',
          text: 'En este último caso, puede que <strong>no necesitemos ese objeto hasta cierto punto</strong> en la aplicación, y crearlo apenas arranca podría significar <strong>un tiempo de espera inaceptable para el usuario</strong>. En cualquiera de estos escenarios sería útil poder tener <strong>acceso global</strong> a ese objeto, ya que contamos con una única instancia.',
        },
        {
          type: 'h3',
          text: 'Acceso global a una variable en Java: algunas consideraciones',
          criollo: 'La tentación es una variable public static. Mala idea: rompés el encapsulamiento y no controlás cuándo se inicializa.',
        },
        {
          type: 'ul',
          items: [
            'Si lo guardado en la variable global fuera <strong>muy costoso en recursos</strong>, quedaría "atado" a la variable <strong>hasta que el programa termine</strong>, y puede que solo necesite que quede accesible <strong>después de un tiempo</strong> de usar la aplicación ("lazy initialization").',
            'Usando <strong>variables estáticas</strong> no resultaría fácil <strong>controlar cuándo o a partir de cuándo se inicializa</strong>.',
            'Si uso variables <strong><code>public static</code></strong>, <strong>rompo con cualquier concepto de encapsulamiento y ocultamiento de información</strong>, dado que esos valores pueden ser accedidos por cualquier objeto sin mayor control.',
          ],
        },
        {
          type: 'h3',
          text: 'Creando un objeto sobre demanda (Lazy Loading)',
          criollo: 'El mapa del juego: uno solo, actualizado, y creado recién cuando el jugador toca "mostrar mapa".',
        },
        {
          type: 'p',
          text: 'En nuestro juego, que se trata de un mundo futuro en guerra, podemos mostrar un <strong>"mapa"</strong> con la situación de los bandos, los ejércitos, etc. Pero <strong>necesito solo un mapa</strong> y mantener en este todo actualizado al momento de seleccionar la opción "mostrar mapa" de la pantalla. Entonces puedo implementar el <strong>patrón Singleton</strong>.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: '<strong>Patrón Singleton (enunciado).</strong> Singleton provee la certeza de que haya siempre <strong>SOLO UNA INSTANCIA</strong> de una clase determinada y, a la vez, provee <strong>un punto de acceso global</strong> a ella.',
        },
        {
          type: 'h3',
          text: 'Conclusiones: constructor privado y getInstance()',
          criollo: 'La clave es que nadie pueda hacer new desde afuera. Solo la clase Singleton crea el Singleton.',
        },
        {
          type: 'p',
          text: '<strong>Solo la clase Singleton crea el Singleton.</strong> Esto se debe a que el patrón se implementa incluyendo un <strong>constructor privado</strong>. Dado que nadie puede llamar al constructor directamente, lo único que hacen los clientes del Singleton es <strong>obtener una referencia a este mediante el método provisto <code>getInstance()</code></strong>.',
        },
        {
          type: 'p',
          text: 'Ahora el acceso es global como si fuera una variable, con la diferencia de que se trata de <strong>una clase como cualquier otra con todos los beneficios</strong>: atributos, getters y setters para cada uno, y métodos.',
        },
        {
          type: 'h3',
          text: 'El problema de los múltiples threads',
          criollo: 'Si dos hilos piden la instancia al mismo tiempo, podés terminar con dos singletons. Sincronizar arregla, pero te cuesta performance.',
        },
        {
          type: 'p',
          text: 'Un potencial problema es <strong>la creación del objeto único</strong>. Si necesita ser accedido por <strong>varios threads a la vez</strong>, ya sea para escribir, leer o incluso al momento de obtener la referencia, puede haber problemas. Típicamente agregaríamos <code>synchronized</code> al <code>getInstance()</code> y listo. Pero eso <strong>solo sería relevante la primera vez que se corra</strong>, que es cuando se instancia la clase y se asigna a la variable. A partir de ahí, sincronizar las llamadas es <strong>inútil y costoso</strong> a la vez, porque hace de esta llamada <strong>un cuello de botella</strong>.',
        },
        {
          type: 'h3',
          text: '¿Qué se puede hacer?',
          criollo: 'Tres caminos. El tercero es el famoso double-checked locking.',
        },
        {
          type: 'ol',
          items: [
            'Si <strong>la performance no es un tema importante</strong>, dejarlo con el <code>synchronized</code> en el <code>getInstance</code>. Tener en cuenta que <strong>sincronizar un método lo vuelve más lento</strong>.',
            '<strong>Eliminar el chequeo por null</strong>, haciendo que la clase no se instancie sobre demanda sino que quede ya instanciada: <code>private static Singleton = new Singleton()</code>. A esto se le llama <strong>"eager initialization"</strong>, en contraposición con el "lazy loading".',
            'Usar <strong>"double-checked locking"</strong> para reducir la sincronización: primero se verifica si la instancia está creada y, si no, solo entonces se realiza la sincronización.',
          ],
        },
        {
          type: 'code',
          code: 'public class Singleton {\n\n    private volatile static Singleton uniqueInstance;\n\n    private Singleton() {} // constructor PRIVADO!\n\n    public static Singleton getInstance() {\n        if (uniqueInstance == null) {\n            synchronized (Singleton.class) {\n                if (uniqueInstance == null) {\n                    uniqueInstance = new Singleton();\n                }\n            }\n        }\n        return uniqueInstance;\n    }\n}',
        },
        {
          type: 'p',
          text: 'En este código se pueden ver <strong>cuatro temas importantes</strong>:',
        },
        {
          type: 'ul',
          items: [
            'El uso de <strong><code>volatile</code></strong>: se asegura de que múltiples threads manejen la variable <code>instance</code> de forma correcta cuando se le esté asignando la instancia de Singleton.',
            'El <code>getInstance</code> se hace como siempre, pero <strong>solo luego del chequeo por null se sincroniza el bloque</strong> de código.',
            'El bloque de instanciación <strong>chequea por segunda vez si la variable es null</strong>. Solo entonces hace el <code>new Singleton()</code>.',
            'Después del <strong>chequeo por partida doble</strong>, se retorna la instancia.',
          ],
        },
        {
          type: 'p',
          text: 'De esta manera nos aseguramos de que <strong>el acceso por múltiples threads sea seguro</strong>, a la vez que <strong>mejoramos la performance</strong> de la opción 1.',
        },
        {
          type: 'h3',
          text: 'Los otros dos problemas del Singleton',
          criollo: 'Acopla y no se puede heredar. El apunte lo admite y dice que a veces vale la pena igual.',
        },
        {
          type: 'p',
          text: 'Otro potencial problema es que el Singleton <strong>rompe con el principio de una clase &lt;-&gt; una responsabilidad</strong> (es decir, se acopla): la clase Singleton hace lo que tiene que hacer <strong>además de gestionarse como instancia única</strong>. El caso de Singleton <strong>puede ser una excepción</strong>: a veces es mucho más simple usar Singleton que otra solución y <strong>toma precedencia por sobre el principio</strong>.',
        },
        {
          type: 'p',
          text: 'Un problema adicional se presenta si queremos <strong>reutilizar la funcionalidad del Singleton mediante la herencia</strong>: es <strong>imposible</strong>, dado que el constructor es privado. De hacerlo público rompemos con el propósito del Singleton, no solo por hacer el constructor visible, sino porque <strong>las hijas compartirán la variable</strong> y probablemente no sea lo que queramos. Habría que implementar algún tipo de contenedor, y eso <strong>complica las cosas cuando en realidad decidimos usar Singleton para simplificarlas</strong>.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-43-1', q: 'El Singleton se implementa con un constructor privado.', a: true, explain: 'Por eso solo la clase Singleton crea el Singleton: nadie puede llamar al constructor directamente desde afuera.' },
          { id: 'tf-43-2', q: 'Usar variables public static es una buena forma de dar acceso global sin perder encapsulamiento.', a: false, explain: 'Rompe con cualquier concepto de encapsulamiento y ocultamiento de información: esos valores pueden ser accedidos por cualquier objeto sin control.' },
          { id: 'tf-43-3', q: 'Sincronizar getInstance() es útil solamente la primera vez que se corre.', a: true, explain: 'Es cuando se instancia la clase y se asigna a la variable. Después, sincronizar es inútil y costoso: hace de la llamada un cuello de botella.' },
          { id: 'tf-43-4', q: 'La "eager initialization" consiste en crear la instancia recién cuando se la pide por primera vez.', a: false, explain: 'Eso es el lazy loading. La eager initialization es dejar la clase ya instanciada eliminando el chequeo por null.' },
          { id: 'tf-43-5', q: 'Se puede reutilizar la funcionalidad de un Singleton mediante herencia sin inconvenientes.', a: false, explain: 'Es imposible, porque el constructor es privado. Hacerlo público rompe el propósito del patrón y además las hijas compartirían la variable.' },
        ],
        mc: [
          {
            id: 'mc-43-1',
            q: '¿Qué provee el patrón Singleton?',
            options: [
              'Una familia de algoritmos intercambiables en runtime',
              'La certeza de que haya solo una instancia de una clase y un punto de acceso global a ella',
              'Un esqueleto de algoritmo cuyos pasos implementan las subclases',
              'La posibilidad de que un objeto altere su comportamiento según su estado interno',
            ],
            correctIndex: 1,
            explain: 'Es el enunciado textual del Singleton. Las otras tres opciones corresponden a Strategy, Template Method y State.',
          },
          {
            id: 'mc-43-2',
            q: '¿Cómo obtienen los clientes la referencia al Singleton?',
            options: [
              'Con el operador new sobre la clase Singleton',
              'Accediendo directamente a la variable public static',
              'Mediante el método provisto getInstance()',
              'Casteando cualquier instancia con instanceof',
            ],
            correctIndex: 2,
            explain: 'Como el constructor es privado, lo único que hacen los clientes es obtener una referencia mediante getInstance().',
          },
          {
            id: 'mc-43-3',
            q: '¿Para qué se usa volatile en la implementación con double-checked locking?',
            options: [
              'Para que múltiples threads manejen la variable de forma correcta al asignarle la instancia',
              'Para que la variable se libere de memoria al terminar el método',
              'Para que la instancia se cree en el arranque del programa',
              'Para que el compilador no optimice el bloque synchronized',
            ],
            correctIndex: 0,
            explain: 'volatile se asegura de que múltiples threads manejen la variable instance de forma correcta cuando se le esté asignando la instancia de Singleton.',
          },
          {
            id: 'mc-43-4',
            q: '¿Qué principio rompe el Singleton, según el apunte?',
            options: [
              'El de programar contra una interfaz',
              'El de favorecer la composición por sobre la herencia',
              'El de una clase con una única responsabilidad',
              'El de separar lo que varía de lo que queda fijo',
            ],
            correctIndex: 2,
            explain: 'La clase Singleton hace lo que tiene que hacer además de gestionarse como instancia única, es decir, se acopla. El apunte lo admite como excepción aceptable.',
          },
        ],
        ms: [
          {
            id: 'ms-43-1',
            q: '¿Qué tipos de objetos menciona el apunte como candidatos a Singleton?',
            options: [
              'Contenedores de preferencias',
              'Diálogos, editores y mensajes',
              'Objetos que usen recursos limitados',
              'Historiales de acciones',
              'Objetos que cambian de tipo en tiempo de ejecución',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'También los objetos cuya construcción sea costosa y no varíe durante el ciclo de vida de la aplicación. El último no aparece.',
          },
          {
            id: 'ms-43-2',
            q: '¿Qué opciones da el apunte frente al problema de los múltiples threads?',
            options: [
              'Dejar el synchronized en getInstance si la performance no importa',
              'Eliminar el chequeo por null y usar eager initialization',
              'Usar double-checked locking para reducir la sincronización',
              'Hacer el constructor público para evitar la sincronización',
              'Crear una instancia por cada thread',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Son las tres opciones enumeradas en "¿Qué se puede hacer?". Las otras dos rompen el patrón.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-43-1', front: 'Patrón Singleton (enunciado)', back: 'Provee la certeza de que haya siempre solo una instancia de una clase determinada y, a la vez, provee un punto de acceso global a ella.' },
        { id: 'fc-43-2', front: '¿Cuándo conviene un Singleton?', back: 'Contenedores de preferencias, diálogos, editores, mensajes, objetos que usan recursos limitados, historiales de acciones, o cuya construcción es costosa y no varía durante el ciclo de vida de la app.' },
        { id: 'fc-43-3', front: 'Problema de usar variables public static para acceso global', back: 'Rompe el encapsulamiento y el ocultamiento de información: cualquier objeto accede a esos valores sin control. Y con estáticas no es fácil controlar cuándo se inicializa.' },
        { id: 'fc-43-4', front: 'Lazy initialization vs. eager initialization', back: 'Lazy: el objeto se crea recién cuando se lo necesita (chequeo por null en getInstance). Eager: se elimina el chequeo y la clase queda ya instanciada con private static Singleton = new Singleton().' },
        { id: 'fc-43-5', front: '¿Cómo se implementa el Singleton?', back: 'Con un constructor privado, de modo que solo la clase cree la instancia, y un método público getInstance() con el que los clientes obtienen la referencia.' },
        { id: 'fc-43-6', front: 'Problema del synchronized en getInstance()', back: 'Solo es relevante la primera vez, cuando se instancia la clase. Después sincronizar es inútil y costoso: convierte la llamada en un cuello de botella.' },
        { id: 'fc-43-7', front: 'Double-checked locking', back: 'Se chequea si la instancia es null; solo entonces se sincroniza el bloque; adentro se vuelve a chequear por null antes de hacer el new; y se retorna la instancia. La variable se declara volatile.' },
        { id: 'fc-43-8', front: '¿Para qué sirve volatile en el Singleton?', back: 'Para asegurar que múltiples threads manejen correctamente la variable instance cuando se le está asignando la instancia de Singleton.' },
        { id: 'fc-43-9', front: 'Dos problemas de diseño del Singleton', back: 'Rompe el principio de una clase / una responsabilidad (se gestiona a sí mismo además de su tarea), y no se puede reutilizar por herencia porque el constructor es privado.' },
      ],
    },
    {
      id: '44',
      unit: 'actividades',
      title: 'Actividad del módulo: diseño de clases en Java (corregida)',
      criollo: 'La actividad calificada de la unidad 04: tres de opción múltiple y una de ensayo. Se entregó y volvió con 4/10, así que acá está todo: qué se contestó, qué era lo correcto y por qué. La pregunta 4 es la joya: el código no compila por un error de tipeo, y encima abajo esconde la diferencia entre sobrecarga y sobreescritura. Leela con calma.',
      blocks: [
        {
          type: 'callout',
          tone: 'info',
          text: 'Actividad de la <strong>unidad 04 (Diseño de clases en Java)</strong>. Tres preguntas de opción múltiple de 2 puntos cada una y una de ensayo de 4 puntos. <strong>Calificación obtenida: 4/10</strong> (se perdieron la 3 y la 4). Abajo va cada pregunta con la respuesta correcta y la corrección del docente.',
        },
        {
          type: 'h3',
          text: 'Pregunta 1: ¿qué aporta la herencia?',
          criollo: 'Trampa clásica: hay cuatro opciones que suenan lindas y solo una es la que el apunte sostiene.',
        },
        {
          type: 'p',
          text: '<strong>Conociendo el concepto de herencia, seleccionar la opción correcta:</strong>',
        },
        {
          type: 'ul',
          items: [
            '<strong>A. La herencia fomenta la reutilización de código.</strong> ✔ CORRECTA',
            'B. La herencia ayuda a disminuir el acoplamiento.',
            'C. La herencia facilita el testeo del sistema.',
            'D. La herencia facilita el mantenimiento del sistema.',
            'E. Todos los anteriores.',
          ],
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'La herencia apunta <strong>fundamentalmente a la reutilización de código</strong>: es lo que dice el apunte de conceptos básicos de herencia. Las otras no las sostiene: de hecho, en el apunte de uso avanzado de interfaces se muestra que la herencia puede <strong>complicar</strong> el mantenimiento (un cambio local con efecto colateral generalizado) y que <strong>acopla</strong> las hijas al comportamiento fijo del padre.',
        },
        {
          type: 'h3',
          text: 'Pregunta 2: qué líneas compilan y corren',
          criollo: 'Ejecutivo extiende de Empleado. Todo lo que sube por el ES-UN va solo; todo lo que baja necesita casteo y que el objeto real sea del tipo posta.',
        },
        {
          type: 'p',
          text: '<strong>Sabiendo que la clase Ejecutivo extiende de la clase Empleado, indicar cuál o cuáles de las siguientes líneas compilan y corren correctamente:</strong>',
        },
        {
          type: 'table',
          caption: 'Análisis línea por línea',
          headers: ['Opción', 'Código', '¿Compila y corre?'],
          rows: [
            ['A', 'Empleado e = new Ejecutivo();', 'SÍ — Ejecutivo ES UN Empleado'],
            ['B', 'Ejecutivo e = new Ejecutivo();', 'SÍ — mismo tipo en ambos lados'],
            ['C', 'Ejecutivo e = new Ejecutivo(); Empleado m = e;', 'SÍ — se asigna hacia arriba en la jerarquía'],
            ['D', 'Ejecutivo e = new Empleado();', 'NO — un Empleado no es necesariamente un Ejecutivo'],
            ['E', 'Empleado e = new Empleado(); Ejecutivo j = e;', 'NO — falta el casteo y además el objeto no es Ejecutivo'],
            ['F', 'Empleado e = new Empleado(); Ejecutivo j = (Ejecutivo)e;', 'Compila, pero falla en runtime con ClassCastException'],
            ['G', 'Ejecutivo e = new Empleado(); Empleado m = e;', 'NO — la primera línea ya no compila'],
            ['H', 'Empleado e = new Ejecutivo(); Ejecutivo j = (Ejecutivo)e;', 'SÍ — el objeto real ES UN Ejecutivo, el casteo es válido'],
            ['I', 'Ejecutivo e = new Empleado(); Empleado m = (Empleado)e;', 'NO — la primera línea ya no compila'],
            ['J', 'Todas las anteriores.', 'NO'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Las correctas son <strong>A, B, C y H</strong>. La <strong>F</strong> es el caso que el apunte de conceptos avanzados describe como "compila, pero no anda": le mentimos al compilador y el <strong>dynamic binding</strong> nos delata en tiempo de ejecución. Para evitarlo está <code>instanceof</code>.',
        },
        {
          type: 'h3',
          text: 'Pregunta 3: variables y métodos de clase (esta se perdió)',
          criollo: 'El punto es simple pero se pasa por alto: un método de instancia sí puede tocar un atributo static; un método static NO puede tocar atributos de instancia, porque no hay instancia.',
        },
        {
          type: 'p',
          text: '<strong>Sobre variables de clase y métodos de clase, indicar la opción correcta:</strong>',
        },
        {
          type: 'ul',
          items: [
            'A. La keyword <code>static</code> sirve solo para hacer constantes.',
            'B. Usar atributos de clase reduce el acoplamiento.',
            'C. Los métodos de clase pueden alterar valores de los atributos de instancia.',
            'D. Los atributos de clase rompen el encapsulamiento.',
            '<strong>E. Los métodos de instancia pueden alterar los atributos de clase.</strong> ✔ CORRECTA',
          ],
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Por qué caen las otras: <strong>A</strong>, porque <code>static</code> sirve para mucho más que constantes (atributos y métodos de clase). <strong>C</strong> es la inversa de la correcta y es justamente lo que <strong>no</strong> se puede: un método de clase no tiene un <code>this</code> al que preguntarle por los atributos de instancia. <strong>B</strong> y <strong>D</strong> son afirmaciones sobre acoplamiento y encapsulamiento que el apunte no sostiene.',
        },
        {
          type: 'h3',
          text: 'Pregunta 4: el resultado de correr main() (la de ensayo)',
          criollo: 'Acá está el oro. La consigna avisa: "conviene no tomar el camino fácil, no correr el código en el IDE". Y tenía razón, porque si lo corrés el IDE te subraya el error y no ves la trampa de abajo.',
        },
        {
          type: 'p',
          text: '<strong>Dadas las clases Vehiculo y Auto, ¿cuál es el resultado de correr <code>main()</code>? Explicar por qué.</strong> Nota de la consigna: "¡conviene no tomar el camino fácil! No correr el código en el IDE".',
        },
        {
          type: 'code',
          code: 'public class Vehiculo {\n    public int acelerar(int i) {\n        return 10;\n    }\n}\n\npublic class Auto extends Vehiculo {\n    public int acelerar(int i) {\n        return 20*i;\n    }\n    public int acelerar(String i) {\n        return 100;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vehiculo v = new Vehiculo();\n        System.out.println(v.acelerar(3));\n        Vehiculo v2 = new Auto();\n        System.out.println(a.acelerar(2));\n    }\n}',
        },
        {
          type: 'p',
          text: '<strong>Respuesta entregada (incorrecta):</strong> "10 en la primera línea de println y 40 en la segunda; recién acá se utiliza el parámetro del método".',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: '<strong>Corrección del profesor.</strong> El resultado real es que <strong>el programa NO COMPILA</strong>, porque la variable <code>a</code> <strong>no está declarada</strong>: el código escribe <code>a.acelerar(2)</code> en vez de <code>v2.acelerar(2)</code>. <strong>No imprime ni 10 ni 40.</strong> Faltó explicar la causa considerando el código <strong>tal como está escrito</strong>.',
        },
        {
          type: 'h3',
          text: 'Qué esconde la pregunta 4 abajo del error de tipeo',
          criollo: 'Sacale el typo y la pregunta se convierte en el mejor ejemplo de sobrecarga vs. sobreescritura que vas a ver.',
        },
        {
          type: 'p',
          text: 'Si el error de tipeo no estuviera y la línea fuera <code>v2.acelerar(2)</code>, <strong>la respuesta sería 40</strong>. ¿Por qué?',
        },
        {
          type: 'ol',
          items: [
            '<code>v2</code> está <strong>declarada como Vehiculo</strong> pero apunta a un objeto <strong>Auto</strong>. Eso es válido: Auto ES UN Vehiculo.',
            '<code>acelerar(int)</code> está <strong>sobreescrito</strong> en Auto: misma firma, distinto cuerpo. Como el despacho es <strong>dinámico</strong>, la JVM llama al método <strong>del objeto referenciado</strong>, es decir, al de Auto. Entonces devuelve <code>20*2 = 40</code>.',
            '<code>acelerar(String)</code> es <strong>sobrecarga</strong>, no sobreescritura: cambia la firma (recibe String en vez de int). Es un método <strong>nuevo</strong> de Auto, no una redefinición del de Vehiculo.',
            'Y como <code>v2</code> es de tipo <strong>Vehiculo</strong>, ese <code>acelerar(String)</code> <strong>ni siquiera es visible</strong> a través de esa referencia: la referencia define <strong>qué métodos podés llamar</strong>, el objeto define <strong>cómo se ejecutan</strong>.',
          ],
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Ese es el punto que la pregunta busca evaluar. La primera línea sí da <strong>10</strong>: <code>v</code> es un Vehiculo apuntando a un Vehiculo, y el <code>acelerar(int)</code> de Vehiculo devuelve 10 fijo sin usar el parámetro. Pero la respuesta correcta a la consigna, con el código tal cual está escrito, sigue siendo <strong>"no compila"</strong>.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-44-1', q: 'La respuesta correcta de la pregunta 1 es que la herencia fomenta la reutilización de código.', a: true, explain: 'Es la opción A. Las demás (menos acoplamiento, testeo más fácil, mantenimiento más fácil) no las sostiene el apunte.' },
          { id: 'tf-44-2', q: 'Empleado e = new Empleado(); Ejecutivo j = (Ejecutivo)e; compila pero falla en tiempo de ejecución.', a: true, explain: 'Es la opción F: compila porque le mentimos al compilador con el casteo, pero en runtime tira ClassCastException porque e no es una instancia de Ejecutivo.' },
          { id: 'tf-44-3', q: 'Los métodos de clase pueden alterar valores de los atributos de instancia.', a: false, explain: 'Es la opción C de la pregunta 3 y es falsa. Lo correcto es al revés: los métodos de instancia pueden alterar los atributos de clase.' },
          { id: 'tf-44-4', q: 'El main de la pregunta 4 imprime 10 y después 40.', a: false, explain: 'No imprime nada: el programa no compila porque la variable a no está declarada. El código escribe a.acelerar(2) en lugar de v2.acelerar(2).' },
          { id: 'tf-44-5', q: 'acelerar(String) en la clase Auto es una sobreescritura del método de Vehiculo.', a: false, explain: 'Es una sobrecarga: cambia la firma. Y como v2 está declarada como Vehiculo, ese método ni siquiera es visible por esa referencia.' },
        ],
        mc: [
          {
            id: 'mc-44-1',
            q: '¿Cuáles son las opciones correctas de la pregunta 2?',
            options: [
              'A, B, C y H',
              'A, B, D y F',
              'Solo B y C',
              'Todas las anteriores (opción J)',
            ],
            correctIndex: 0,
            explain: 'A, B y C asignan hacia arriba o al mismo nivel; H castea hacia abajo pero el objeto real ES UN Ejecutivo, así que funciona.',
          },
          {
            id: 'mc-44-2',
            q: '¿Por qué no compila el main de la pregunta 4?',
            options: [
              'Porque Auto no puede sobrecargar acelerar con un String',
              'Porque la variable a no está declarada',
              'Porque Vehiculo v2 = new Auto() es una asignación inválida',
              'Porque falta el return en el método main',
            ],
            correctIndex: 1,
            explain: 'Es la corrección del profesor: el código escribe a.acelerar(2) en vez de v2.acelerar(2), y a nunca fue declarada.',
          },
          {
            id: 'mc-44-3',
            q: 'Si la línea fuera v2.acelerar(2), ¿qué imprimiría?',
            options: [
              '10, porque la referencia es de tipo Vehiculo',
              '100, porque toma la sobrecarga con String',
              '40, porque acelerar(int) está sobreescrito en Auto y el despacho es dinámico',
              '2, porque devuelve el parámetro recibido',
            ],
            correctIndex: 2,
            explain: 'La JVM llama al método del objeto referenciado, que es un Auto: 20*2 = 40.',
          },
          {
            id: 'mc-44-4',
            q: '¿Qué error se le señaló a la respuesta entregada en la pregunta 4?',
            options: [
              'Haber corrido el código en el IDE en vez de razonarlo',
              'Faltó explicar la causa considerando el código tal como está escrito',
              'Haber confundido la sobrecarga con la sobreescritura en la explicación',
              'No haber indicado el valor de retorno del método main',
            ],
            correctIndex: 1,
            explain: 'La corrección dice exactamente eso: faltó explicar la causa considerando el código tal como está escrito, es decir, con la variable a sin declarar.',
          },
        ],
        ms: [
          {
            id: 'ms-44-1',
            q: '¿Cuáles de estas líneas de la pregunta 2 NO compilan?',
            options: [
              'Ejecutivo e = new Empleado();',
              'Empleado e = new Empleado(); Ejecutivo j = e;',
              'Empleado e = new Ejecutivo();',
              'Ejecutivo e = new Ejecutivo(); Empleado m = e;',
              'Empleado e = new Empleado(); Ejecutivo j = (Ejecutivo)e;',
            ],
            correctIndexes: [0, 1],
            explain: 'Las dos primeras no compilan (asignan un Empleado a una referencia Ejecutivo sin casteo). La última sí compila, aunque falle en runtime.',
          },
          {
            id: 'ms-44-2',
            q: '¿Qué conceptos evalúa realmente la pregunta 4?',
            options: [
              'Que una variable no declarada impide la compilación',
              'Que acelerar(int) está sobreescrito y se despacha dinámicamente',
              'Que acelerar(String) es una sobrecarga, no una sobreescritura',
              'Que la sobrecarga no es visible desde una referencia del tipo padre',
              'Que una clase hija no puede agregar métodos nuevos',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Una clase hija sí puede agregar métodos nuevos; el punto es que no son alcanzables desde una referencia del tipo del padre.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-44-1', front: 'Pregunta 1: ¿qué fomenta la herencia?', back: 'La reutilización de código. No se sostiene que disminuya el acoplamiento, ni que facilite el testeo o el mantenimiento.' },
        { id: 'fc-44-2', front: 'Pregunta 2: opciones correctas', back: 'A (Empleado e = new Ejecutivo()), B (Ejecutivo e = new Ejecutivo()), C (asignar el Ejecutivo a una referencia Empleado) y H (Empleado e = new Ejecutivo(); Ejecutivo j = (Ejecutivo)e).' },
        { id: 'fc-44-3', front: 'El caso F de la pregunta 2', back: 'Empleado e = new Empleado(); Ejecutivo j = (Ejecutivo)e; compila (le mentimos al compilador) pero falla en runtime con ClassCastException.' },
        { id: 'fc-44-4', front: 'Pregunta 3: la afirmación correcta', back: 'Los métodos de instancia pueden alterar los atributos de clase. La inversa (métodos de clase alterando atributos de instancia) es falsa: no hay instancia a la que preguntarle.' },
        { id: 'fc-44-5', front: 'Pregunta 4: ¿qué imprime el main?', back: 'Nada: el programa NO COMPILA, porque la variable a no está declarada (escribe a.acelerar(2) en vez de v2.acelerar(2)).' },
        { id: 'fc-44-6', front: 'Pregunta 4: ¿y si el typo no estuviera?', back: 'Imprimiría 10 y 40. El 40 sale de acelerar(int) sobreescrito en Auto (20*2), porque el despacho es dinámico sobre el objeto referenciado.' },
        { id: 'fc-44-7', front: 'Pregunta 4: el rol de acelerar(String)', back: 'Es una sobrecarga, no una sobreescritura: cambia la firma. Y como v2 está declarada como Vehiculo, ese método ni siquiera es visible desde esa referencia.' },
        { id: 'fc-44-8', front: 'Referencia vs. objeto', back: 'La referencia define qué métodos podés llamar; el objeto define cómo se ejecutan. Es la moraleja de toda la pregunta 4.' },
      ],
    },
    {
      id: '45',
      unit: 'actividades',
      title: 'Actividad: Conceptos de diseño (unidad 05)',
      criollo: 'Cuatro preguntas de ensayo de 2,5 puntos cada una sobre toda la unidad 05: constructores en clases abstractas, cuándo interfaz y cuándo clase abstracta, cuándo componer en vez de heredar, y qué resuelve el patrón State. Acá están las consignas tal cual y, abajo de cada una, una respuesta modelo armada con los apuntes de la unidad.',
      blocks: [
        {
          type: 'callout',
          tone: 'warning',
          text: '<strong>Aviso importante.</strong> Las consignas de abajo son las de la cátedra. Las <strong>respuestas modelo son elaboración de este apunte</strong>, armadas a partir de los cuatro apuntes de la unidad 05 (conceptos avanzados de herencia, interfaces / caso zoo virtual, uso avanzado de las interfaces y patrones de diseño comunes). <strong>No son la solución oficial de la cátedra</strong>: sirven como guía de estudio, no como respuesta garantizada.',
        },
        {
          type: 'p',
          text: 'Actividad de ensayo de la <strong>unidad 05</strong>, <strong>10 puntos</strong> en total: <strong>4 preguntas de 2,5 puntos cada una</strong>.',
        },
        {
          type: 'h3',
          text: 'Pregunta 1: si las clases abstractas no se pueden instanciar, ¿para qué pueden definir constructores?',
          criollo: 'La respuesta corta: porque los constructores no sirven solo para hacer new. Sirven para inicializar, y las hijas los llaman.',
        },
        {
          type: 'p',
          text: '<strong>Respuesta modelo.</strong> Porque el objetivo del constructor en una clase abstracta <strong>es el mismo que en cualquier otra clase: reutilizar código</strong>. Que una clase abstracta no se pueda instanciar directamente no significa que no participe de la construcción de sus hijas: cuando se instancia una <strong>subclase concreta</strong>, la cadena de constructores <strong>sube por la jerarquía</strong> y el constructor de la clase abstracta se ejecuta igual, inicializando los atributos que la abstracta declara.',
        },
        {
          type: 'p',
          text: 'Conviene recordar que <strong>una clase abstracta es una clase como cualquier otra</strong>: puede tener atributos y métodos concretos, además de los abstractos que definen el contrato. Si tiene atributos (por ejemplo el <code>nombre</code> de la clase abstracta <code>Perro</code> del apunte), tiene sentido tener un constructor que los reciba e inicialice <strong>una sola vez y en un solo lugar</strong>, en vez de repetir esa inicialización en cada subclase.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'El apunte agrega una advertencia que conviene mencionar: hay que <strong>recordar las reglas acerca de los constructores y su uso en herencia</strong>, junto con los <strong>posibles efectos secundarios de definir constructores adicionales al constructor por default</strong> (si definís un constructor con parámetros, dejás de tener el constructor sin argumentos gratis, y las hijas tienen que invocar explícitamente al del padre).',
        },
        {
          type: 'h3',
          text: 'Pregunta 2: ¿en qué casos deben utilizarse las interfaces por sobre las clases abstractas?',
          criollo: 'Cuando el comportamiento no pertenece a la jerarquía, cuando lo necesitás en más de un árbol, o cuando querés un contrato puro sin fisuras.',
        },
        {
          type: 'p',
          text: '<strong>Respuesta modelo.</strong> Hay cuatro situaciones típicas que salen de los apuntes de la unidad:',
        },
        {
          type: 'ol',
          items: [
            '<strong>Cuando el comportamiento no pertenece a la jerarquía.</strong> Definir comportamiento abstracto con clases abstractas <strong>quita flexibilidad al dejarlo "atrapado" en una jerarquía</strong>. El caso <code>vestir()</code>: es tan abstracto que no es parte de Perro, ni de Animal, ni de SerVivo. Meterlo en la jerarquía contamina clases que no deberían tenerlo, y dejarlo con implementación vacía es peor todavía (si una clase tiene una operación que no hace nada, no debería tenerla siquiera).',
            '<strong>Cuando una clase necesita comportamiento de más de una "familia".</strong> Java <strong>solo soporta herencia simple</strong>, así que si un objeto tiene que ser dos cosas a la vez la clase abstracta no alcanza. Es el caso del <strong>ornitorrinco</strong>: es mamífero y ovíparo al mismo tiempo. Con interfaces <code>Mamifero</code> y <code>Oviparo</code> se dan <strong>selectivamente</strong> los comportamientos <code>amamantar()</code>, <code>parir()</code>, <code>ponerHuevos()</code> y <code>romperCascaron()</code> a las clases que los necesiten.',
            '<strong>Cuando se quiere garantizar un contrato completo.</strong> Como en una clase abstracta se puede mezclar comportamiento abstracto con métodos concretos, <strong>no se puede garantizar la definición completa de un contrato</strong>. Las interfaces representan <strong>comportamiento puro</strong>: solo definen qué hacer. Por eso el apunte llega a afirmar que <strong>en Java solo hay polimorfismo si utilizamos interfaces</strong>.',
            '<strong>Cuando se quiere programar contra una interfaz y no contra una implementación.</strong> Si el tipo del lado izquierdo del igual es una interfaz, puedo cambiar la implementación del lado derecho sin tocar el código cliente. Eso es lo que habilita separar las "formas de" atacar y volar en el caso "Batalla del futuro" y poder intercambiarlas en runtime.',
          ],
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Y el contraejemplo, para redondear: la <strong>clase abstracta conviene</strong> cuando además del contrato querés <strong>compartir código</strong> (atributos, métodos concretos, constructores) entre clases que sí pertenecen a la misma jerarquía. En Java (dentro del scope de la materia) <strong>las operaciones definidas en las interfaces no pueden llevar código</strong>, así que con interfaces sola no reusás implementación.',
        },
        {
          type: 'h3',
          text: 'Pregunta 3: ¿en qué casos conviene usar composición de clases, en contraposición a herencia?',
          criollo: 'Cuando el comportamiento varía entre las hijas, cuando no todas deberían tenerlo, y sobre todo cuando querés poder cambiarlo con el programa corriendo.',
        },
        {
          type: 'p',
          text: '<strong>Respuesta modelo.</strong> El tercer principio de diseño del apunte lo dice directo: <strong>favorecer la composición por sobre la herencia</strong>. Conviene componer cuando:',
        },
        {
          type: 'ul',
          items: [
            '<strong>El comportamiento varía entre las subclases</strong> y no todas deberían tenerlo. Es el caso del <code>volar()</code> en <code>SistemaArmas</code>: si se lo pone en la superclase aparece el <strong>tanque volador</strong>, y sobrescribirlo vacío en cada clase que no vuela duplica código y deja un software susceptible a errores. El <code>VehiculoSeñuelo</code> lo lleva al extremo: no vuela, no ataca y no se defiende.',
            '<strong>Un cambio local no debe generar un efecto colateral generalizado.</strong> Con herencia, agregar una operación al padre impacta en toda la jerarquía. La composición encapsula ese comportamiento afuera.',
            '<strong>Hace falta cambiar el comportamiento en RUNTIME.</strong> Con herencia es <strong>casi imposible</strong>; componiendo, alcanza con un setter: <code>miRobot.setFormaDeAtacar(new AtacarConMisiles())</code> y el mismo objeto pasa de "Lanzo rayos" a "Lanzo Misiles" sin recompilar, sin parar el sistema y sin liberar una versión nueva.',
            '<strong>Se quiere reutilizar el comportamiento en otros escenarios.</strong> Las clases cuyo único propósito es implementar una "forma de" pueden reusarse en contextos distintos (si las batallas pasaran a suceder en el espacio, algunas formas de atacar se aprovechan tal cual), y se pueden agregar formas nuevas sin afectar el diseño ni el código existente.',
          ],
        },
        {
          type: 'p',
          text: 'La frase que resume todo: <strong>componer nos da mayor flexibilidad; heredar nos "encerraba" en comportamientos fijos</strong>. Además hay una guía semántica clásica: la herencia modela un <strong>ES UN</strong> y la composición un <strong>TIENE UN</strong>. Si el sistema de armas <strong>tiene</strong> una forma de atacar (y esa forma puede cambiar), eso es composición, no herencia.',
        },
        {
          type: 'h3',
          text: 'Pregunta 4: ¿qué intenta resolver el patrón State?',
          criollo: 'El problema de los IF-ELSE repartidos por toda la clase para preguntar en qué estado estás. State los borra: cada estado es una clase.',
        },
        {
          type: 'p',
          text: '<strong>Respuesta modelo.</strong> El patrón State <strong>permite a un objeto alterar su comportamiento de acuerdo con su estado interno</strong>. Lo que intenta resolver es el problema de <strong>desacoplar el estado actual del comportamiento del sistema</strong>.',
        },
        {
          type: 'p',
          text: 'El planteo del apunte es el sistema de tiro de un tanque: se carga el arma, se dispara y vuelve a empezar. Puede estar <strong>armado</strong> o <strong>desarmado</strong>, con la <strong>munición lista</strong> o <strong>sin municiones</strong>, y cada interacción lo hace <strong>cambiar de estado</strong>. El approach ingenuo es tener un atributo <code>estado</code> y, dentro de cada método de transición, un <strong>IF-ELSE</strong> que pregunte en qué estado está. Eso <strong>no tiene nada de malo en sí</strong>: el problema aparece cuando hay que <strong>agregar o quitar un estado</strong>, porque hay que cambiar el if-else o, peor, se puede afectar toda la lógica.',
        },
        {
          type: 'p',
          text: 'La solución del patrón son tres pasos: <strong>(1)</strong> definir una interfaz que contenga cada transición de estado; <strong>(2)</strong> implementar cada estado posible en su propia clase, con la responsabilidad de actuar según ese estado; <strong>(3)</strong> <strong>eliminar todo tipo de código condicional</strong>. Así, cada estado y cómo actúa la máquina en él queda <strong>concentrado en clases y no disperso en sentencias IF-ELSE</strong>.',
        },
        {
          type: 'p',
          text: 'Lo que se gana: una <strong>visión clara de qué hace la máquina en cada estado</strong> y de <strong>los cambios de estado</strong> (con constantes e IF/ELSE un cambio de estado se confunde con una simple asignación de valor a una variable), y <strong>menos posibilidad de dejar al contexto en un estado inconsistente</strong>. Lo que se paga: a medida que crecen los estados <strong>crece la cantidad de clases</strong>, hay que escribir más código y hay más objetos, <strong>consumiendo más memoria</strong>.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Vale sumar la comparación con Strategy, porque suele preguntarse: <strong>son iguales en forma pero se diferencian en intención</strong>. En State el estado está encapsulado en objetos y <strong>el cliente no conoce casi nada</strong> de los "xyzState"; en Strategy <strong>el cliente especifica</strong> qué "xyzStrategy" usar, y normalmente hay una estrategia adecuada por problema. El State sirve para <strong>reemplazar varios condicionales</strong> que alteran el funcionamiento del contexto.',
        },
        {
          type: 'p',
          text: '<strong>Bibliografía de la unidad:</strong> Eckel, B. (2002). <em>Piensa en Java</em>. España: Pearson Educación (pp. 223-239 y 255-265).',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-45-1', q: 'La actividad de conceptos de diseño vale 10 puntos repartidos en 4 preguntas de 2,5 cada una.', a: true, explain: 'Es el formato de la actividad de ensayo de la unidad 05.' },
          { id: 'tf-45-2', q: 'Una clase abstracta no puede definir constructores porque nunca se instancia directamente.', a: false, explain: 'Sí puede, y con el mismo objetivo de siempre: reutilizar código. La cadena de constructores se ejecuta igual cuando se instancia una subclase concreta.' },
          { id: 'tf-45-3', q: 'Las interfaces convienen cuando una clase necesita comportamiento de más de una familia, porque Java no tiene herencia múltiple.', a: true, explain: 'Es el caso del ornitorrinco: mamífero y ovíparo al mismo tiempo. Con interfaces se dan los comportamientos selectivamente.' },
          { id: 'tf-45-4', q: 'Con herencia es sencillo cambiar el comportamiento de un objeto en tiempo de ejecución.', a: false, explain: 'El apunte lo lista como desventaja: cambiar el comportamiento en runtime con herencia es casi imposible. Con composición alcanza con un setter.' },
          { id: 'tf-45-5', q: 'Uno de los pasos del patrón State es eliminar todo tipo de código condicional.', a: true, explain: 'Es el tercer paso, después de definir la interfaz de transiciones e implementar cada estado en una clase.' },
        ],
        mc: [
          {
            id: 'mc-45-1',
            q: '¿Cuál es el argumento central para que una clase abstracta defina constructores?',
            options: [
              'Permitir instanciarla con new en casos excepcionales',
              'Reutilizar código: inicializar en un solo lugar los atributos que declara',
              'Obligar a las subclases a implementar los métodos abstractos',
              'Evitar que la clase pueda ser heredada por más de una subclase',
            ],
            correctIndex: 1,
            explain: 'El objetivo es el mismo que en cualquier clase: reutilizar código. La clase abstracta puede tener atributos y conviene inicializarlos una sola vez.',
          },
          {
            id: 'mc-45-2',
            q: '¿Cuándo conviene una clase abstracta por sobre una interfaz?',
            options: [
              'Cuando además del contrato se quiere compartir código entre clases de la misma jerarquía',
              'Cuando el comportamiento no pertenece a ninguna jerarquía',
              'Cuando una clase debe pertenecer a dos familias a la vez',
              'Cuando se quiere garantizar un contrato completo sin fisuras',
            ],
            correctIndex: 0,
            explain: 'En el scope de la materia, las operaciones de una interfaz no pueden llevar código, así que la clase abstracta es la que permite reusar implementación. Las otras tres son motivos para usar interfaces.',
          },
          {
            id: 'mc-45-3',
            q: '¿Qué frase resume el tercer principio de diseño?',
            options: [
              'Heredar da flexibilidad y componer encierra en comportamientos fijos',
              'Componer da mayor flexibilidad; heredar encierra en comportamientos fijos',
              'Componer y heredar son equivalentes si se respetan las interfaces',
              'Conviene heredar siempre que la relación sea un TIENE UN',
            ],
            correctIndex: 1,
            explain: 'Es la frase textual del apunte, que da lugar al principio de favorecer la composición por sobre la herencia.',
          },
          {
            id: 'mc-45-4',
            q: '¿Qué problema concreto viene a resolver el patrón State?',
            options: [
              'La duplicación de pasos entre algoritmos parecidos',
              'La necesidad de tener una sola instancia con acceso global',
              'La lógica condicional dispersa que actúa según el estado del objeto',
              'La imposibilidad de heredar de dos clases a la vez',
            ],
            correctIndex: 2,
            explain: 'Busca desacoplar el estado actual del comportamiento del sistema, reemplazando los IF-ELSE dispersos por una clase por estado.',
          },
        ],
        ms: [
          {
            id: 'ms-45-1',
            q: '¿Qué motivos justifican elegir interfaces por sobre clases abstractas?',
            options: [
              'El comportamiento no pertenece a la jerarquía',
              'Una clase necesita comportamiento de más de una familia y Java no tiene herencia múltiple',
              'Se quiere un contrato completo, sin métodos concretos que lo debiliten',
              'Se quiere programar contra una interfaz y no contra una implementación',
              'Se quiere compartir atributos y constructores entre las clases',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Compartir atributos y constructores es justamente lo que habilita la clase abstracta, no la interfaz.',
          },
          {
            id: 'ms-45-2',
            q: '¿Qué se gana aplicando el patrón State?',
            options: [
              'Visión clara de qué hace la máquina en cada estado',
              'Visión clara de los cambios de estado',
              'Menos posibilidad de dejar al contexto en un estado inconsistente',
              'Menos clases y menos consumo de memoria',
              'Eliminación del código condicional disperso',
            ],
            correctIndexes: [0, 1, 2, 4],
            explain: 'La cantidad de clases y el consumo de memoria en realidad aumentan: es la desventaja innegable del patrón.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-45-1', front: 'Consignas de la actividad de conceptos de diseño', back: '1) ¿Para qué pueden definir constructores las clases abstractas si no se instancian? 2) ¿Cuándo usar interfaces por sobre clases abstractas? 3) ¿Cuándo conviene composición en vez de herencia? 4) ¿Qué intenta resolver el patrón State?' },
        { id: 'fc-45-2', front: 'Constructores en clases abstractas', back: 'Sirven para reutilizar código: inicializan en un solo lugar los atributos que la abstracta declara. La cadena de constructores se ejecuta igual al instanciar una subclase concreta.' },
        { id: 'fc-45-3', front: 'Interfaces por sobre clases abstractas: motivos', back: 'Comportamiento que no pertenece a la jerarquía; una clase que debe pertenecer a dos familias (Java no tiene herencia múltiple); contrato completo sin métodos concretos; y programar contra una interfaz.' },
        { id: 'fc-45-4', front: '¿Cuándo conviene la clase abstracta?', back: 'Cuando además del contrato se quiere compartir código (atributos, métodos concretos, constructores) entre clases de la misma jerarquía, porque las interfaces no pueden llevar código.' },
        { id: 'fc-45-5', front: 'Composición en vez de herencia: cuándo', back: 'Cuando el comportamiento varía entre subclases y no todas deberían tenerlo; cuando un cambio local no debe impactar todo el modelo; cuando hace falta cambiarlo en runtime; y cuando se quiere reutilizar ese comportamiento en otros escenarios.' },
        { id: 'fc-45-6', front: 'ES UN vs. TIENE UN como criterio', back: 'La herencia modela un ES UN; la composición un TIENE UN. Si el sistema de armas tiene una forma de atacar que puede cambiar, eso es composición.' },
        { id: 'fc-45-7', front: '¿Qué resuelve el patrón State?', back: 'Desacopla el estado actual del comportamiento del sistema: reemplaza la lógica condicional dispersa (IF-ELSE por estado) por una clase por estado, con una interfaz de transiciones.' },
        { id: 'fc-45-8', front: 'Costo del patrón State', back: 'A medida que crece la cantidad de estados crece la cantidad de clases: más código, más objetos y más consumo de memoria.' },
        { id: 'fc-45-9', front: 'Bibliografía obligatoria de la unidad 05', back: 'Eckel, B. (2002). Piensa en Java. España: Pearson Educación, pp. 223-239 y 255-265.' },
      ],
    },
  ],
  pdfs: [
    { key: 'origen-poo', label: 'PPT · Origen de la POO', path: 'pdfs/laboratorio-1/1-origen-poo.pdf' },
    { key: 'intro-ides', label: 'Apunte · Introducción a los IDEs', path: 'pdfs/laboratorio-1/2-intro-ides.pdf' },
    { key: 'tutorial-eclipse', label: 'Apunte · Tutorial de Eclipse', path: 'pdfs/laboratorio-1/3-tutorial-eclipse.pdf' },
    { key: 'tutorial-java', label: 'Apunte · Tutorial de código Java', path: 'pdfs/laboratorio-1/4-tutorial-codificacion-java.pdf' },
    { key: 'herencia-basica', label: 'Apunte · Conceptos básicos de herencia y sus aplicaciones', path: 'pdfs/laboratorio-1/4-conceptos-basicos-de-herencia-y-sus-aplicaciones.pdf' },
    { key: 'arreglos', label: 'PPT · Arreglos: uso, recorridos, utilidades', path: 'pdfs/laboratorio-1/4-arreglos-usos-recorrido-utilizacion.pdf' },
    { key: 'conversion-tipos', label: 'Apunte · Conversión de tipos', path: 'pdfs/laboratorio-1/4-conversion-de-tipos.pdf' },
    { key: 'relaciones-objetos', label: 'PPT · Relaciones entre objetos', path: 'pdfs/laboratorio-1/5-relaciones-entre-objetos.pdf' },
    { key: 'imperativos-declarativos', label: 'Apunte · Lenguajes imperativos y declarativos', path: 'pdfs/laboratorio-1/6-lenguajes-imperativos-declarativos.pdf' },
    { key: 'jvm-jre', label: 'Apunte · Funcionamiento de la JVM y JRE', path: 'pdfs/laboratorio-1/7-funcionamiento-jvm-jre.pdf' },
    { key: 'herramientas-jdk', label: 'Apunte · Herramientas de la Java Development Kit', path: 'pdfs/laboratorio-1/8-herramientas-jdk.pdf' },
    { key: 'herencia-avanzada', label: 'Apunte · Conceptos avanzados de herencia', path: 'pdfs/laboratorio-1/5-conceptos-avanzados-de-herencia.pdf' },
    { key: 'interfaces-zoo', label: 'Apunte · Interfaces. Caso Zoo virtual', path: 'pdfs/laboratorio-1/5-interfaces-caso-zoo-virtual.pdf' },
    { key: 'interfaces-avanzado', label: 'Apunte · Uso avanzado de las interfaces', path: 'pdfs/laboratorio-1/5-uso-avanzado-de-las-interfaces.pdf' },
    { key: 'patrones-diseno', label: 'Apunte · Patrones de diseño comunes', path: 'pdfs/laboratorio-1/5-patrones-de-diseno-comunes.pdf' },
    { key: 'actividad-auto', label: 'Actividad · Programar un auto y sus partes', path: 'pdfs/laboratorio-1/2-actividad-programar-auto.pdf' },
  ],
};
