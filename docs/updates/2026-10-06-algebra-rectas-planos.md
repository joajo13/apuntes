# Álgebra Lineal: rectas y planos

Se agrega la unidad 6, con seis secciones originales (42–47), a partir del apunte «Rectas y planos» de Universidad de Palermo. La incorporación completa un vacío de cobertura comprobado; no supone que se haya verificado la fecha de publicación del material en Blackboard.

## Cobertura

| Sección | Tema | Páginas del apunte |
|---|---|---|
| 42 | Rectas: ecuaciones vectorial, paramétrica y simétrica | 1–4 |
| 43 | Planos: punto, normal y ecuación cartesiana | 4–6 |
| 44 | Plano por tres puntos y planos paralelos | 6 |
| 45 | Intersección de planos y coplanaridad | 7 |
| 46 | Distancia de un punto a una recta | 8–9 |
| 47 | Distancia de un punto a un plano | 10–11 |

Cada sección incorpora cuatro preguntas V/F, cuatro de opción única, dos de selección múltiple y seis flashcards por banco. El banco alternativo usa preguntas distintas y opciones equilibradas. Total nuevo: 120 preguntas y 72 flashcards.

Las explicaciones, ejemplos y preguntas son originales. Se conservan los contenidos previos y sus identificadores. No se agregan copias del PDF, capturas ni figuras del apunte, ni soluciones de actividades calificadas.

Se explicitan las condiciones de uso de las fórmulas: direcciones y normales no nulas, cuidado con las componentes cero en la forma simétrica y distinción entre normales proporcionales y planos coincidentes. Las erratas de sustitución y de signo de los ejemplos 6.4 y 6.5 se advierten sin reproducirlas como resultados correctos.

## Verificación

```bash
node --check js/subjects/algebra-lineal.js
node --check js/quizzes2/algebra-lineal.js
node --test scripts/test-algebra-rectas.mjs
node --test scripts/test-laboratorio-jdbc.mjs scripts/test-laboratorio-partials.mjs scripts/test-plan-*.mjs
node scripts/test-buscador.mjs
git diff --check
```

La incorporación es independiente de otros materiales aún no revisados. No declara completa la sincronización de la materia ni cambia los apuntes de Laboratorio 1 o Análisis Matemático.
