# Laboratorio 1: JDBC, DAO y diseño en capas

Actualización de contenido del 6 de octubre de 2026. Se agregan ocho secciones, sin cambiar las 49 anteriores ni los cinco parciales de práctica existentes.

## Alcance y fuentes

Los materiales se consultaron como fuentes de estudio. El contenido agregado es una síntesis original con ejemplos y preguntas propios. No se incorporan copias de los PDFs, capturas ni diagramas de la cátedra.

| Secciones | Tema | Fuente y páginas |
|---|---|---|
| 50 | Contratos, drivers y conexión | `0114_APU_JDBCQueEsParaQueSirve_201Q_v1-0.pdf`, pp. 2–7 |
| 51 | Métodos de ejecución | Mismo PDF, pp. 7–8 |
| 52 | ResultSet y SQLException | Mismo PDF, pp. 8–12 |
| 53 | Transacciones y recursos | Mismo PDF, pp. 4, 8 y 12–13 |
| 54–55 | Motivación, contratos e implementaciones DAO | `0114_APU_AccesoDatosMedianteDAO_201Q_v1-0.pdf`, pp. 2–5 |
| 56–57 | Responsabilidades y excepciones entre capas | `0114_APU_DiseEnCapas_201Q_v1-0.pdf`, pp. 2–4 |

Cada sección incorpora cuatro preguntas V/F, cuatro de opción única, dos de selección múltiple y seis flashcards en cada banco. Total agregado: 160 preguntas y 96 flashcards. El segundo banco contiene preguntas diferentes, opciones de forma comparable y posiciones correctas variadas.

No se incorpora una solución de la actividad de base de datos ni se presume que los ejemplos cumplan una consigna de evaluación. Los ejemplos se limitan a los conceptos de clase y no agregan comentarios de código, bibliotecas ni patrones extra.

## Aclaraciones que acompañan al material

- La página 7 del apunte JDBC interpreta el booleano de `Statement.execute` como éxito o fracaso. Se señala la errata: ese retorno distingue si el primer resultado es un `ResultSet`; los errores se comunican mediante excepciones. Ver [API de Statement](https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html#execute(java.lang.String)).
- La carga explícita con `Class.forName` se conserva como recorrido didáctico. Se aclara que no es un requisito universal de los drivers actuales, sin incorporar otro mecanismo a los ejercicios. Ver [API de DriverManager](https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html).
- El fragmento inicial de JDBC desactiva auto-commit pero no muestra la decisión de commit o rollback; la sección 53 identifica esa omisión y explica el control descrito al final del PDF. Ver [API de Connection](https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html).
- Los fragmentos DAO alternan nombres de método y omiten retornos. La sección 55 lo advierte y presenta un contrato original coherente, sin implementar almacenamiento.
- Las recomendaciones de nombres y excepciones entre capas se presentan como convenciones del modelo del curso, sin extenderlas a una prohibición universal de excepciones de dominio.

## Verificación reproducible

```bash
node --check js/subjects/laboratorio-1.js
node --check js/quizzes2/laboratorio-1.js
node --test scripts/test-laboratorio-jdbc.mjs
node --test scripts/test-laboratorio-partials.mjs
node --test scripts/test-plan-*.mjs
node scripts/test-buscador.mjs
git diff --check
python -m http.server 8000
```

En el navegador, revisar las secciones 50–57 con `subject=laboratorio-1`, ambos bancos de quiz y flashcards, y la autoevaluación integral. El estado de lectura y progreso sigue perteneciendo al navegador; no se modifica su esquema.
