# Álgebra Lineal: espacios vectoriales

Se incorpora el apunte «Espacios vectoriales» de Universidad de Palermo, de siete páginas, mediante cuatro secciones originales de la unidad 7.

| Sección | Tema | Páginas |
|---|---|---|
| 54 | Operaciones y axiomas de un espacio vectorial real | 1–2 |
| 55 | Ejemplos y propiedades del cero y opuestos | 3–5 |
| 56 | Subespacios y criterio de cerradura | 5–6 |
| 57 | Intersección y unión de subespacios | 6–7 |

La unidad aparece antes de Combinaciones entre vectores. Los identificadores de todas las secciones anteriores se conservan; los dos avisos de prerrequisitos pendientes en la unidad 8 ahora enlazan al contenido de la unidad 7. No se renumeran unidades ni se confunden sus fuentes.

Se agregan 80 preguntas y 48 flashcards, repartidas en dos bancos distintos. Cada sección y banco contiene cuatro V/F, cuatro preguntas de opción única, dos de selección múltiple y seis tarjetas.

La explicación y los ejemplos son propios. No se agrega el PDF ni se reproducen sus imágenes. Se distinguen los escalares del vector cero, los requisitos de no vacuidad y cerradura, y el hecho de que contener al cero es necesario pero no suficiente.

Se advierten las erratas comprobadas del apunte: pertenencia en el ejemplo 7.3, notación de cero en el teorema 7.1, parámetros y coordenadas en el ejemplo 7.6, y signo de la parametrización final del ejemplo 7.7. Las fórmulas se verifican mediante sus operaciones y ecuaciones originales.

## Verificación

```bash
node --check js/subjects/algebra-lineal.js
node --check js/quizzes2/algebra-lineal.js
node --test scripts/test-algebra-*.mjs scripts/test-laboratorio-*.mjs scripts/test-plan-*.mjs
node scripts/test-buscador.mjs
git diff --check
```
