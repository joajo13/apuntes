# Álgebra Lineal: combinaciones entre vectores

Se incorpora la unidad 8 en seis secciones nuevas, 48–53, a partir de «Combinaciones entre vectores» de Universidad de Palermo, archivo `0006_APU_CombinacionesEntreVectores_v1-3.pdf`.

La unidad 7, Espacios vectoriales, se incorporó en las secciones 54–57 y aparece antes de esta unidad en el recorrido de la materia. Los enlaces de prerrequisitos llevan a sus definiciones y al criterio de subespacio. Cada unidad conserva su fuente y sus identificadores.

## Cobertura

| Sección | Tema | Páginas |
|---|---|---|
| 48 | Combinaciones lineales en vectores y matrices | 1 |
| 49 | Espacio generado y pertenencia mediante sistemas | 2–3 |
| 50 | Conjuntos generadores y cómo comprobarlos | 3–4 |
| 51 | Dependencia e independencia lineal | 4–5 |
| 52 | Sistemas homogéneos e interpretación geométrica | 6–8 |
| 53 | Cantidad de vectores, determinantes y generación | 8–9 |

Cada sección tiene cuatro preguntas V/F, cuatro de opción única, dos de selección múltiple y seis flashcards en cada uno de dos bancos. Total agregado: 120 preguntas y 72 tarjetas. El segundo banco contiene preguntas distintas y distribuye las posiciones correctas.

Explicaciones, ejemplos y autoevaluaciones son originales. No se agrega el PDF de la cátedra, imágenes copiadas ni una solución de una actividad calificada. Las erratas comprobadas se señalan explícitamente para no memorizarlas como resultados válidos.

Los apuntes anteriores, las secciones de Rectas y planos y la actualización de Laboratorio 1 se conservan. La comprobación de unidad 6 identifica sus secciones por unidad, en lugar de asumir que seguirán siendo las últimas al incorporarse nuevo contenido.

## Verificación reproducible

```bash
node --check js/subjects/algebra-lineal.js
node --check js/quizzes2/algebra-lineal.js
node --test scripts/test-algebra-combinaciones.mjs scripts/test-algebra-rectas.mjs
node --test scripts/test-laboratorio-jdbc.mjs scripts/test-laboratorio-partials.mjs scripts/test-plan-*.mjs
node scripts/test-buscador.mjs
git diff --check
```

Esta incorporación documenta una cobertura comprobada del material consultado; no supone que se haya verificado su fecha de subida ni que toda la materia esté sincronizada.
