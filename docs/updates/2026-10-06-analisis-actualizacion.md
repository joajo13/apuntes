# Análisis Matemático 2: diferencial e integrales inmediatas

Se incorporan tres lecciones de elaboración original y sus dos bancos de autoevaluación. Los 44 apuntes anteriores, sus cuerpos e identificadores, los 35 bancos nuevos anteriores y los 29 PDF existentes se conservan sin cambios.

## Cobertura de las fuentes

| Sección | Fuente temática de Universidad de Palermo | Páginas revisadas | Cobertura incorporada |
|---|---|---|---|
| 63 · Diferencial de una función y aproximación lineal | Diferencial de una función | 1–2 | Incrementos, diferencial, interpretación sobre la tangente, dx, aproximación lineal y ejemplos propios |
| 64 · Integrales indefinidas: linealidad y descomposición | Integrales indefinidas | 1–3 | Linealidad, cuatro entradas complementarias de la tabla, dominios, preparación algebraica y seis ejemplos propios |
| 65 · I0: resolución comentada y verificada | Trabajo práctico. Integrales indefinidas. Inmediatas y por descomposición; Resolución del trabajo práctico. Integrales indefinidas. Inmediatas y por descomposición | Página 1 de cada documento | Contraste y desarrollo original de los once ítems del práctico existente en S62 |

El recorrido queda: S63 → S23 → S64 → S62 → S65 → S14. Se agrega la unidad «Diferencial de una función» y se mantienen los identificadores y nombres de las unidades anteriores. S64 enlaza S23 para evitar repetir la definición y su tabla; S65 enlaza las consignas ya disponibles en S62.

Cada sección tiene, en cada banco, cuatro preguntas V/F, cuatro de opción única, dos de selección múltiple y seis flashcards. Se agregan 60 preguntas y 36 tarjetas en total. Los bancos usan preguntas distintas, posiciones de respuesta distribuidas y casos válidos sin ninguna opción correcta.

## Aclaraciones matemáticas y del material de origen

- S63 distingue la igualdad exacta que define el diferencial de la aproximación del incremento real. Incluye pasos positivos y negativos, tangente horizontal y la exactitud para funciones afines. No promete un error universalmente monótono ni una cantidad fija de decimales correctos
- S64 aclara que la fórmula exponencial requiere a > 0 y a ≠ 1. La tabla anterior S23, que omite la segunda condición, se conserva; la aclaración está señalada explícitamente en la lección nueva
- S64 usa ln|x| en intervalos que evitan cero y −1 < x < 1 para los integrandos de arco seno y arco coseno. Una simplificación no amplía el dominio del integrando original
- La página 3 de «Integrales indefinidas» contiene un ejemplo de raíz cuya expresión inicial y desarrollo posterior no coinciden. No se reproduce esa ambigüedad: los ejemplos nuevos especifican sus propias expresiones y dominios
- S65 señala errores comprobados en las respuestas oficiales de 1a, 1b y 3: signo de la primitiva, potencia recíproca y pendiente de la tangente, respectivamente
- La hoja de respuestas deja 1g y 2 en blanco. Sus soluciones se identifican como independientes y se verifican por derivación y por las condiciones de S62
- Las raíces cúbicas se interpretan como raíces reales, también para argumentos negativos. La primitiva de 1h se comprueba además en cero mediante el cociente incremental
- El máximo del ejercicio 4 es local estricto. La función no tiene máximo absoluto en toda la recta real

Las explicaciones, comprobaciones, ejemplos y preguntas son originales. S65 es una guía de estudio del práctico ya existente, no una entrega calificada ni una respuesta enviada a la plataforma educativa. No se publica una copia nueva de los PDF fuente, imágenes de sus páginas, materiales de entrega ni dependencias nuevas.

## Verificación reproducible

```bash
node --check js/subjects/analisis-matematico-2.js
node --check js/quizzes2/analisis-matematico-2.js
node --check scripts/test-analisis-actualizacion.mjs
node --test scripts/test-*.mjs
node scripts/test-buscador.mjs
git diff --check
```

El test nuevo comprueba:

- Preservación de cada apunte y banco anterior mediante hashes normalizados; las funciones de gráficos se normalizan con toString() para no comparar identidades de funciones
- Preservación de los 29 mapeos y de los bytes de los PDF anteriores
- Orden de navegación, unidades, enlaces a S23/S62, esquema de contenido y renderizado de todos los bloques nuevos
- Identificadores únicos y estables, ambos bancos, agregados de materia y búsqueda
- Escrituras de progreso de las tres lecciones sin modificar las lecturas, scores, tarjetas ni estados de examen existentes, ni el progreso de otra materia
- Ejemplos numéricos de diferencial, derivadas de los ejemplos y respuestas, condiciones de dominio, las ocho primitivas de I0 en las ramas reales aplicables, derivabilidad de 1h en cero y condiciones completas de los ejercicios 2–4

Las derivadas numéricas de regresión son controles de cambios, no sustituyen las justificaciones matemáticas de las lecciones. La autoría y la revisión matemática independiente contrastaron las páginas de las fuentes y realizaron comprobaciones simbólicas exactas. Las verificaciones de navegador y de publicación pertenecen al proceso de publicación; no se afirman aquí como ejecutadas.

La cobertura se limita al material indicado. No presupone haber verificado la fecha de subida de las fuentes ni una sincronización completa de la materia.
