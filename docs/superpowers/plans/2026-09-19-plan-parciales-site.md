# Plan de implementación — Plan de parciales

**Goal:** integrar y publicar el plan aprobado y toda su ejercitación.
**Architecture:** sitio estático, datos públicos y capítulos editoriales separados del controlador; almacenamiento independiente. Sin build ni nuevas dependencias de producción.
**Tech Stack:** HTML, CSS editorial existente, ES modules, Node test runner, GitHub Pages.

Trabajar en checkout actual por pedido de publicación en main, con staging selectivo: los insumos aún no rastreados no se incluyen en bloque. El buscador pasó 21 pruebas en el baseline 2fce401.

## Tareas
- [x] 1. Datos y contenido público (agente acotado). Primero pruebas de calendario, guías y enlaces en `scripts/test-plan-data.mjs`; ejecutar RED. Crear `js/plan-data.js` y `js/plan-content.js`, conservando detalle de PLAN.md y sanitizando rutas/auditorías privadas. Ejecutar GREEN y revisar contra fuente.
- [x] 2. Progreso y página (controlador). Primero `scripts/test-plan-progress.mjs`, ejecutar RED. Implementar `js/plan-progress.js`, `js/plan-parciales.js`, `plan-parciales.html`, `css/plan-parciales.css`. Copiar cuadernillo a `pdfs/planes/`. Integrar enlaces en inicio y materias sin tocar exámenes anteriores.
- [x] 3. Revisión de especificación y luego calidad, aplicar correcciones. `node --test scripts/test-plan-*.mjs`, `node scripts/test-buscador.mjs`, `git diff --check`. Verificar enlaces locales, IDs, 148+5, 13 fechas, carga horaria y privacidad.
- [x] 4. Navegador: calendario, capítulos, matemática, enlaces PDF y secciones, checklist/reload, teclado, móvil y consola. No modificar Blackboard. Servidor temporal propio.
- [ ] 5. Commit de archivos específicos, push origin main, comprobar despliegue y URL pública. Guardar memoria y devolver enlace.
