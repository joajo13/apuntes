# Verificación — Plan de parciales

## Automatizada
- `node --test scripts/test-plan-*.mjs`: 27 pruebas (calendario, inventario, fuentes, privacidad, enlaces, persistencia y estructura).
- `node scripts/test-buscador.mjs`: 21 pruebas de regresión.
- `node --check` en los cuatro módulos nuevos, y `git diff --check`.
- Cuadernillo copiado sin modificar: 20 páginas, entrada D2 página 8.

## Revisión
- Especificación cotejada con el plan acordado: 13 fechas, 17 bloques; 148 ítems de ocho guías + 5 extras; A–E y fichas J1–J7.
- 1720 minutos antes del 1/10: 990 Análisis + 540 Java + 190 pausas; domingos opcionales y repaso del 1/10 aparte.
- Revisión independiente de especificación y de calidad aprobadas tras corregir escrituras obsoletas entre pestañas y enlaces a un mismo hash.

## Navegador real
- Escritorio y viewport móvil 390 × 844: calendario y capítulos legibles, sin desbordamiento horizontal.
- Cambiar días muestra tareas y topes correctos; domingo muestra descanso, no tareas obligatorias.
- Marcar bloque y ejercicio: contadores separados; recargar conserva ambos. Desmarcar y recargar vuelve a cero.
- Dos pestañas abiertas: una marca D2-2a y otra D2-2b; al recargar se conservan ambas. Marcas de prueba retiradas.
- Anclas despejadas del masthead: cabecera 58px, destino 85px. Volver al mismo hash reabre detalles previamente cerrados.
- Fichas Java ampliadas disponibles; fórmulas de erratas renderizadas con KaTeX, cero errores.
- PDF visualizado en página 8 de 20, con enunciado de estudio completo y sus apartados.
- Consola de página sin errores JavaScript en la verificación local.

## Límites mantenidos
No se reabrieron evaluaciones de Blackboard. Material allí enlazado requiere sesión; no se promete sincronización completa ni que todas las variantes quepan en el horario. El progreso es local al navegador; no se sincroniza entre dispositivos.
