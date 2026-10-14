# Métricas de habilitación de cambios

**Las métricas de habilitación de cambios muestran si tu organización deja que los cambios beneficiosos fluyan con seguridad y rapidez, así que mide cómo se clasifican los cambios, cuánto esperan una decisión y qué parte de esa decisión toma automáticamente la canalización, y empareja cada medida de velocidad con una visión del riesgo.**

## Resumen y motivación

Todo servicio cambia. Los equipos añaden funcionalidades, parchean bibliotecas, rotan certificados, redimensionan bases de datos y retiran componentes antiguos. En el marco [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la práctica que lo gobierna se llama habilitación de cambios, y su propósito declarado es maximizar el número de cambios exitosos de servicios y productos asegurando que los riesgos se evalúan correctamente, los cambios se autorizan y el calendario de cambios se gestiona. Las ediciones anteriores de ITIL llamaban a la práctica [gestión de cambios](https://en.wikipedia.org/wiki/Change_management_(ITSM)), y muchas organizaciones siguen usando ese nombre. El nombre más nuevo señala un cambio de énfasis: la práctica existe para habilitar el buen cambio, no para frenarlo.

Un **cambio** en ITIL 4 es la adición, modificación o eliminación de cualquier cosa que pudiera tener un efecto directo o indirecto en los servicios. Es un alcance más amplio que un despliegue de código. Abarca ediciones de configuración, actualizaciones de infraestructura, cambios de acceso, acciones de proveedores y la documentación de la que dependen los operadores. Un equipo ágil suele ver un cambio como una solicitud de incorporación que se entrega. Un equipo de operaciones de servicio lo ve como una entrada en un calendario. Ambas visiones son válidas, y las métricas de este tema funcionan mejor cuando describen el mismo evento desde ambos lados.

ITIL 4 describe tres tipos de cambio, y las métricas de este tema dependen de ellos. Comprueba la redacción exacta en las publicaciones vigentes del propietario del marco; este tema resume el patrón ampliamente documentado a octubre de 2026.

- Un **cambio estándar** es de bajo riesgo y bien entendido. Sigue un procedimiento documentado y está preautorizado, por lo que no necesita aprobación caso por caso.
- Un **cambio normal** necesita evaluación y autorización antes de proceder. La profundidad de la evaluación se ajusta al riesgo y al impacto.
- Un **cambio de emergencia** debe ocurrir con urgencia, a menudo para restablecer el servicio o cerrar una vulnerabilidad grave. Sigue una vía acelerada con una revisión más completa después.

Otros términos se repiten a continuación. Una **autoridad de cambios** es la persona o el grupo que tiene el derecho de aprobar un cambio de un tipo dado. Un **comité asesor de cambios (CAB)** es un grupo que revisa los cambios propuestos y aconseja o decide. El **plazo de aprobación** es el tiempo que un cambio espera una decisión de autorización. Un **percentil** es un valor por debajo del cual cae una proporción indicada de las observaciones, así que el percentil 85 es el número que el 85 por ciento de los cambios mejora.

¿Por qué medir todo esto? La evidencia publicada más sólida sobre el control de cambios proviene del programa de investigación de DevOps Research and Assessment (DORA). Su guía informa de que la aprobación externa pesada, como un CAB o la firma de un alto directivo, se asocia con un peor desempeño de la entrega de software, y que no se encontró evidencia de que una revisión externa más formal reduzca la proporción de cambios que fallan. Recomienda en su lugar la revisión por pares, las pruebas automatizadas y los cambios pequeños, con un papel estratégico para cualquier comité central. Son enunciados sobre asociación en datos de encuestas, no leyes, y las páginas de DORA no dan tamaños de efecto para la afirmación, así que trátalos como una razón sólida para mirar tus propios datos y no como un veredicto sobre un control concreto. El material de habilitación de cambios de la *Agile ITIL Guide* resume la misma investigación.

Las visiones ágil y de ITIL se encuentran en la pregunta de dónde vive el control. En una canalización de entrega, gran parte de la evaluación puede ocurrir de forma continua: un revisor aprueba el código, las pruebas automatizadas comprueban el comportamiento y la herramienta de despliegue escribe el registro. Esto satisface la intención de la [separación de funciones](https://en.wikipedia.org/wiki/Separation_of_duties) cuando la revisión queda registrada y el autor no puede aprobar su propio trabajo. Las métricas te dicen si esto ocurre realmente, o si la canalización es una vía rápida de la que la mayoría de los cambios aún salen para esperar en una cola.

Este tema cubre el lado del flujo y del control del cambio: volumen, mezcla de tipos, tiempo de espera y automatización. No cubre si los cambios tienen éxito. La tasa de fallos de cambio, la proporción de emergencias y las medidas de reversión y de correcciones urgentes pertenecen al tema 4.4, Fallos de cambio y retrabajo, y las medidas DORA de rendimiento e inestabilidad están en el tema 2.8, Métricas DORA. La frecuencia de despliegue y de versiones está en el tema 4.5, Métricas de versiones y despliegues. El lado de incidentes de un mal cambio está en el tema 3.3, Tiempo de respuesta y resolución de incidentes, y el tema 3.4, Métricas de incidentes graves.

Las métricas de cambios atraen rápidamente la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): una meta de tiempo de aprobación invita a aprobaciones rápidas y vacías, y una meta de proporción de cambios estándar invita a reclasificar como rutinario el trabajo arriesgado (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Ajusta el control al riesgo.** El objetivo es un control proporcionado: los cambios de bajo riesgo toman una vía rápida y preautorizada, y los de alto riesgo reciben un escrutinio real. Un único proceso para todo es lento para la mayoría de los cambios y superficial para los peligrosos.
- **Mide la espera, no solo el trabajo.** El plazo de aprobación suele dominar el tiempo que un cambio terminado pasa antes de llegar a producción. Es invisible a menos que alguien registre cuándo se pidió la aprobación y cuándo se concedió.
- **Cuenta los tipos antes que nada.** El volumen, la velocidad y el riesgo difieren mucho entre cambios estándar, normales y de emergencia. Un promedio único de los tres oculta toda señal útil.
- **Prefiere la evidencia automatizada y registrada a las reuniones.** La revisión por pares, las pruebas superadas y las comprobaciones de la canalización producen un registro sin ocupar un hueco del calendario. Mide qué parte de la decisión de aprobación captura la canalización.
- **Describe un servicio o un equipo, nunca a una persona.** Los aprobadores y los solicitantes trabajan dentro de un sistema. Clasificar a las personas por aprobaciones concedidas o rechazadas enseña a aprobarlo todo o nada.
- **Empareja la velocidad con la seguridad.** Una aprobación más rápida es una buena noticia solo si el panorama de fallos es estable. Lee estas métricas junto al tema 4.4, Fallos de cambio y retrabajo.
- **Escribe las reglas de clasificación.** Que un cambio sea estándar, normal o de emergencia es un juicio que debe ser reproducible. Registra los criterios y revisa una muestra cada trimestre.

## Definiciones de métricas

La tabla indica los relojes y las exclusiones que tu equipo debe escribir. Los datos provienen de la herramienta de cambios o de tickets, de los eventos del control de versiones y de la canalización, y de los registros de aprobación (véase el tema 1.5, Fuentes de datos e instrumentación).

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volumen de cambios por tipo | Número de cambios completados, dividido en estándar, normal y de emergencia | Recuento de registros de cambio que alcanzaron el estado de implementado en el periodo, agrupados por tipo en el momento de la aprobación; los cambios cancelados y retirados se excluyen y se informan por separado; informa por servicio, no por persona | Cambios por semana o mes, por tipo | Registros de cambios de la herramienta ITSM, unidos a eventos de despliegue de la canalización | Habilitación de cambios | Rendimiento de elementos de trabajo terminados; contenido de versiones por incremento | Semanal, revisado mensualmente |
| Proporción de cambios estándar | Proporción de cambios completados que tomaron la vía preautorizada | Cambios estándar completados en el periodo / todos los cambios completados en el periodo; un cambio reclasificado a posteriori cuenta bajo su tipo final y la reclasificación se registra | Porcentaje | Registros de cambios con tipo e historial de reclasificación | Habilitación de cambios | Trabajo rutinario cubierto por el acuerdo de trabajo y la definición de terminado del equipo | Mensual |
| Plazo de aprobación | Tiempo que un cambio espera una decisión de autorización | El reloj arranca cuando la solicitud se envía como lista para evaluación y se detiene cuando se registra la decisión de autorización; el tiempo de espera a que el solicitante aporte información se excluye y se muestra por separado; informa la mediana y el percentil 85 de los cambios normales del periodo; los cambios estándar sin paso de aprobación se excluyen | Horas o días laborables | Marcas de tiempo en los registros de cambios o eventos de aprobación de la canalización | Habilitación de cambios | Tiempo de espera en un flujo de trabajo; tiempo en una columna de revisión | Semanal, revisado mensualmente |
| Proporción de aprobación automatizada | Proporción de decisiones de autorización tomadas y registradas por controles de la canalización o por una política preautorizada | Cambios cuya aprobación la concedió una comprobación automatizada registrada o una revisión por pares registrada bajo una política escrita / todos los cambios completados en el periodo; la firma manual de un comité o un gerente cuenta como no automatizada | Porcentaje | Registros de la canalización, registros de revisión de código y registros de cambios | Habilitación de cambios; gestión de despliegues | Puertas de calidad automatizadas; revisión por pares como parte de la definición de terminado | Mensual |
| Antigüedad de la cola de aprobación | Cuánto tiempo llevan esperando ahora mismo las solicitudes pendientes | Antigüedad de cada cambio que espera actualmente una decisión, medida desde el envío hasta el momento de la instantánea; informa el elemento más antiguo y el percentil 85 de la cola abierta; las aprobaciones completadas se excluyen | Horas o días laborables | Registros de cambios con estado de aprobación abierto | Habilitación de cambios | Antigüedad del elemento de trabajo; trabajo en curso envejecido | Instantánea diaria, revisada semanalmente |
| Integridad del registro de cambios | Proporción de cambios completados cuyo registro puede responder quién, qué, por qué, cuándo y qué servicio | Cambios con todos los campos requeridos rellenados y vinculados al servicio o elemento de configuración afectado / todos los cambios completados en el periodo; los campos requeridos se enumeran en la definición; los registros creados después de implementar el cambio se marcan | Porcentaje | Registros de cambios, vínculos con el control de versiones, datos de configuración | Habilitación de cambios; gestión de la configuración del servicio | Trazabilidad del commit al ticket y al despliegue | Mensual |

El plazo de aprobación mira atrás a los cambios que terminaron de esperar y puede ocultar un montón de solicitudes atascadas. La antigüedad de la cola mira lo que espera hoy, que es la advertencia más temprana. La proporción de cambios estándar no es una puntuación que maximizar: un equipo que cambia la configuración mediante una canalización madura tendrá una proporción alta, y un equipo con un sistema central heredado puede razonablemente tener una baja.

## Recomendaciones

### Establece lo básico

**1. Cuenta los cambios por tipo antes de medir nada más.** Construye una vista de los cambios completados, dividida en estándar, normal y de emergencia, por servicio y por mes. Muchas organizaciones descubren en este punto que nadie se pone de acuerdo sobre el total, porque los tickets, los despliegues de la canalización y las correcciones informales se cuentan por separado. Conciliar estas fuentes es el primer resultado del programa (véase el tema 1.5, Fuentes de datos e instrumentación).

**2. Escribe las reglas de clasificación y muestréalas.** Indica qué hace estándar a un cambio: un procedimiento documentado, un riesgo conocido y un historial. Indica qué empuja un cambio a normal o de emergencia. Revisa cada trimestre una muestra al azar de unos veinte cambios y pregunta si cada uno se clasificó como dicen las reglas. La clasificación errónea es la principal amenaza para cualquier otro número de este tema.

**3. Define por escrito el reloj de aprobación.** Di que el reloj arranca cuando la solicitud se envía como lista y se detiene cuando se registra la decisión, y nombra las exclusiones, como esperar a que el solicitante responda una pregunta. Sin esto, un equipo mide desde la creación del ticket y otro desde la reunión del comité, y los números no pueden compararse ni siquiera a lo largo del tiempo.

### Acorta la espera

**4. Informa el plazo de aprobación como una distribución.** Una media oculta el patrón que importa, que son unos pocos cambios esperando mucho tiempo. Muestra la mediana y el percentil 85, y los pocos casos más lentos por nombre del cambio, no por nombre de persona (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Si el percentil 85 es muchas veces la mediana, la causa suele ser un ciclo de reuniones o un único aprobador sobrecargado, y la solución es estructural.

**5. Vigila la cola, no solo el historial.** Revisa la antigüedad de la cola de aprobación cada semana en el mismo foro que revisa las medidas de flujo. El elemento en espera más antiguo es la mejor advertencia temprana de que un comité está sobrecargado, de que unas vacaciones han detenido una firma o de que un solicitante ha dejado de dar seguimiento en silencio. Una vista de la cola también encaja con el hábito de mirar el trabajo envejecido (véase el tema 2.1, Medidas de flujo).

**6. Separa esperar información de esperar una decisión.** Cuando una solicitud vuelve al solicitante para más detalle, detén el reloj de aprobación y arranca otro distinto. Se culpa a los aprobadores de retrasos causados por el solicitante, y a los solicitantes de retrasos en la cola. Dos relojes dan a cada lado una imagen precisa y una mejora concreta, como una mejor plantilla de solicitud.

### Traslada el control a la canalización

**7. Convierte los tipos de cambio repetibles y de bajo riesgo en cambios estándar.** Elige el cambio normal más común de tu vista de volumen, como una actualización rutinaria de biblioteca o una acción de escalado. Escribe su procedimiento y sus comprobaciones, acuerda el riesgo con la autoridad de cambios y preautorízalo. Vigila luego juntos la proporción de cambios estándar y el plazo de aprobación de los cambios normales: la proporción debe subir y la cola acortarse, sin una subida paralela de fallos (véase el tema 4.4, Fallos de cambio y retrabajo).

**8. Registra la aprobación donde ocurre el trabajo.** Captura la revisión por pares en la herramienta de [revisión de código](https://en.wikipedia.org/wiki/Code_review) y deja que la canalización vincule automáticamente la revisión, el resultado de las pruebas y el despliegue al registro de cambios. El registro pasa entonces a ser un subproducto del trabajo en lugar de una tarea aparte. Mide la proporción de aprobación automatizada e inspecciona una muestra para confirmar que la revisión registrada es sustantiva y no un sello de goma (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

**9. Trata la canalización como el lugar donde codificar la política.** Reglas como "sin acceso directo a producción sin un ticket", "las pruebas deben pasar" y "el autor no puede aprobar su propio cambio" pueden imponerse con herramientas, con la configuración guardada como código según las prácticas de [infraestructura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code). Cuando la política es código, puedes mostrar a un auditor la regla y su historial en lugar del acta de una reunión. Mide cuántos cambios eluden la canalización, porque cada elusión es un agujero en el control.

### Mantén honesto el control

**10. Mantén una vía rápida para los cambios de emergencia y revisa cómo se usa.** Los cambios de emergencia necesitan velocidad, así que no los frenes con la cola normal. Revisa cada uno después y vigila una deriva al alza del volumen, ya que una vía de emergencia más fácil que la normal acaba siendo la predeterminada (las medidas para esto están en el tema 4.4, Fallos de cambio y retrabajo). Informa el volumen de emergencia junto al volumen normal en la misma vista.

**11. Audita la integridad de los registros según un calendario.** Un registro completo ayuda durante un incidente, cuando quienes responden preguntan qué cambió recientemente (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes). Mide la integridad, revisa una muestra y trata las lagunas como un defecto del formulario o de la integración, no como una falta del solicitante. Un [rastro de auditoría](https://en.wikipedia.org/wiki/Audit_trail) montado después de memoria es una evidencia débil.

**12. Revisa el modelo de autoridad de cambios al menos una vez al año.** Decide quién tiene derechos de aprobación para cada tipo y nivel de riesgo, y retira los comités que aprueban todo lo que ven. Traslada un comité central hacia un papel estratégico: coordinar entre equipos, resolver conflictos de calendario y decidir sobre las compensaciones entre el tiempo de salida al mercado y el riesgo. Registra la decisión y la evidencia en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Volumen de cambios por tipo | Dividir un cambio en muchos registros pequeños para parecer ocupado, fusionar muchos en uno para parecer tranquilo, o dejar fuera de los libros los cambios informales | Conciliar los recuentos con los eventos de despliegue de la canalización cada mes; seguir la proporción de despliegues sin registro de cambio coincidente |
| Proporción de cambios estándar | Reclasificar trabajo arriesgado como estándar para alcanzar una meta, o escribir procedimientos estándar amplios que cubran cualquier cosa | Revisión trimestral por muestreo de la clasificación; tasa de fallos de cambio por tipo (véase el tema 4.4, Fallos de cambio y retrabajo); un registro de reclasificaciones |
| Plazo de aprobación | Arrancar el reloj tarde, detenerlo pronto, pausarlo por preguntas que no hacía falta plantear o aprobar sin leer | El percentil 85 junto a la mediana; revisión por muestreo de las aprobaciones por su sustancia; tasa de fallos de cambio por grupo de aprobadores, nunca por individuo |
| Proporción de aprobación automatizada | Añadir comprobaciones automatizadas que siempre pasan, o contar como garantía una revisión por pares sin comentarios | Revisión por muestreo de aprobaciones automatizadas y por pares; defectos escapados y tasa de fallos de los cambios aprobados automáticamente; recuento de elusiones |
| Antigüedad de la cola de aprobación | Cerrar o retirar solicitudes antiguas para que la cola parezca corta, o moverlas a una solicitud nueva con una marca de tiempo nueva | Recuento de solicitudes retiradas y reenviadas; antigüedad de la solicitud medida desde el primer envío |
| Integridad del registro de cambios | Rellenar los campos requeridos con texto de relleno, o crear los registros después del cambio para satisfacer un informe | Marcar los registros creados tras la implementación; revisión de calidad por muestreo del texto libre; tasa de vínculos con commits |

Una lectura sana muestra la mezcla de tipos desplazándose lentamente hacia los cambios estándar con un panorama de fallos estable, un tiempo mediano de aprobación cercano al percentil 85, una cola sin ningún elemento mucho más antiguo que el resto y un recuento de elusiones que se mantiene cerca de cero. Desconfía de un salto repentino en cualquier número. Una reducción a la mitad del plazo de aprobación en un mes sin cambio de proceso suele significar que se movió el reloj, no el trabajo.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Cambios estándar preautorizados | Rápidos, coherentes, baratos de auditar; liberan a la autoridad de cambios para el trabajo arriesgado | Necesitan diseño previo; la clasificación puede derivar; los procedimientos amplios ocultan riesgo |
| Revisión por pares registrada en la canalización | Revisión por personas que conocen el código; produce un registro automáticamente; escala con el volumen | La calidad depende de la cultura de revisión; los equipos pequeños pueden carecer de un revisor independiente; algunos reguladores esperan un aprobador aparte |
| Comité asesor de cambios central | Visibilidad entre equipos; detecta colisiones de calendario y riesgos de dependencias compartidas | Lento cuando se usa como puerta para cada cambio; fomenta lotes de cambio mayores entregados con menos frecuencia; crea una cola |
| Plazo de aprobación como métrica de titular | Fácil de explicar; expone una fuente real de retraso | Fácil de manipular; puede empujar a los aprobadores a apresurarse; no dice nada de la calidad de la decisión |
| Proporción de aprobación automatizada como meta | Premia la inversión en herramientas y en evidencia registrada | Puede premiar comprobaciones automatizadas débiles; puede excluir cambios que realmente necesitan criterio humano |

La mejor pregunta rara vez es "comité o no comité" y suele ser "¿qué cambios necesitan qué tipo de escrutinio, y cómo lo sabemos?"

## Preguntas para conversar con tu equipo

**1. ¿Cuántos cambios hicimos el mes pasado, y concuerdan todas nuestras fuentes?**
Pide a cada grupo que produzca su propio recuento a partir de tickets, despliegues de la canalización y canales informales. Compara los totales. La brecha es en sí un hallazgo sobre el cambio no registrado. El facilitador debe acordar qué fuente es el sistema de registro y quién concilia las demás.

**2. ¿Cuáles de nuestros cambios normales son realmente rutinarios, y qué haría falta para convertirlos en estándar?**
Enumera los cinco cambios normales más frecuentes. Para cada uno, pregunta si el procedimiento está documentado, si se entiende el riesgo y si el equipo tiene un historial limpio. La conversación suele sacar uno o dos candidatos claros. Recoge las comprobaciones que harían segura la preautorización y nombra quién aprobaría el procedimiento estándar.

**3. ¿Dónde arranca y se detiene nuestro reloj de aprobación, y qué espera dentro de él?**
Toma los tres últimos cambios normales y síguelos desde el envío hasta la decisión. Anota cada traspaso, reunión y petición de información. A la gente suele sorprenderle cuánto de la espera es tiempo de calendario entre rondas de preguntas. Acordad una definición escrita del reloj y de lo que se excluye.

**4. ¿Confiamos en nuestras aprobaciones, o solo las recogemos?**
Extrae una muestra de aprobaciones recientes y lee las revisiones. Busca aprobaciones concedidas en segundos o sin comentarios. El objetivo es saber cuánta garantía da realmente el proceso, no encontrar un culpable. Discutid qué haría más sustantiva una revisión sin hacerla más lenta.

**5. ¿Para qué sirve nuestro comité de cambios, y qué perderíamos si dejara de reunirse?**
Pregunta qué decide el comité que nadie más podría decidir y qué solo confirma. Algunos comités hacen un trabajo valioso coordinando entre equipos y detectando colisiones de calendario. Otros repiten decisiones ya tomadas en la revisión de código. Acordad qué funciones vale la pena conservar y cuáles podrían pasar a la canalización o a un foro más ligero.

**6. Si redujéramos a la mitad el tiempo de aprobación, ¿qué necesitaríamos ver para saber que fue seguro?**
Nombra las señales de seguridad antes del cambio, como la tasa de fallos de los cambios por tipo, la proporción de emergencias y los incidentes vinculados a cambios recientes. Acordad los umbrales que desencadenarían una pausa. Esta conversación convierte una meta de velocidad en un experimento con una regla de parada, que es la mejor defensa contra optimizar lo equivocado.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega sienten el plazo de aprobación como tiempo ocioso entre un cambio terminado y uno en funcionamiento. Quieren ver sus propios números por tipo, con una vista de la cola, para poder decidir cuándo agrupar, cuándo dividir y cuándo pedir un nuevo cambio estándar. Sus mejores aportaciones son buenas plantillas de solicitud, cambios pequeños y vínculos limpios desde el commit hasta el registro de cambios.

### Equipos de servicio y operaciones

Los equipos de operaciones usan el registro de cambios para responder a la primera pregunta de un incidente: ¿qué cambió recientemente? Valoran la integridad, los vínculos precisos con los servicios y un calendario fiable. También cargan con el costo de un cambio que sale mal, así que tienen un interés legítimo en las reglas de clasificación y en la revisión de los cambios de emergencia. La mejor jugada es copropietar el catálogo de cambios estándar con los equipos de entrega, para que la preautorización refleje el conocimiento operativo.

### Liderazgo y gobernanza

Los líderes y los órganos de gobernanza necesitan garantía de que los cambios están controlados, y necesitan saber si el control está frenando a la organización. Estas métricas dan ambas cosas: mezcla de tipos, tiempo de espera y proporción de aprobaciones respaldadas por evidencia registrada. Pide tendencias y dispersión entre servicios, nunca una tabla de clasificación, y léelas junto a las medidas de fallos (véase el tema 4.4, Fallos de cambio y retrabajo). Financiar la automatización que traslada la aprobación a la canalización suele ser mejor inversión que añadir un revisor al comité.

### Clientes y usuarios

Los clientes rara vez ven el proceso de cambios. Ven llegar funcionalidades nuevas, correcciones entregadas con prontitud y menos caídas tras una versión. Una aprobación lenta retrasa las correcciones que pidieron, y una aprobación débil arriesga la caída que temen. Donde un servicio tenga ventanas de mantenimiento programadas, publica el calendario de cambios en lenguaje llano.

## En la práctica: un ejemplo de ITIL ágil

Una aseguradora regional ficticia opera un portal de clientes con ocho equipos de entrega y un CAB que se reúne dos veces por semana. Todos los números siguientes son ilustrativos.

El responsable de operaciones de servicio construye la primera vista completa del cambio. Para el mes, el portal muestra unos 420 cambios completados según los tickets, 610 despliegues de producción según la canalización y una brecha que resulta ser cambios hechos sin ticket. De los 420 cambios con ticket, el 18 por ciento son estándar, el 76 por ciento normales y el 6 por ciento de emergencia (ilustrativo). La mediana del plazo de aprobación de los cambios normales es de 2 días laborables, y el percentil 85 es de 7 días laborables (ilustrativo). La solicitud más antigua de la cola lleva esperando 12 días laborables.

Cuando los equipos miran la espera larga, encuentran dos causas. Muchas solicitudes esperan hasta la siguiente reunión del comité aunque sean rutinarias, y otras vuelven al solicitante varias veces por falta de información. El equipo separa los dos relojes y descubre que aproximadamente la mitad de la espera del percentil 85 es tiempo de espera al solicitante. Arreglan primero la plantilla de solicitud. Eligen luego los tres cambios normales más comunes: actualizaciones de dependencias con pruebas superadas, interruptores de configuración en una herramienta de interruptores de funcionalidad y escalado de los servidores de aplicaciones. Escriben procedimientos, acuerdan el riesgo con la autoridad de cambios y los convierten en cambios estándar con la aprobación registrada en la canalización.

Dos meses después, la proporción estándar sube al 41 por ciento (ilustrativo), el percentil 85 del plazo de aprobación de los cambios normales baja a 4 días laborables (ilustrativo) y la tasa de fallos de cambio por tipo se mantiene plana, como informan las medidas complementarias (véase el tema 4.4, Fallos de cambio y retrabajo). El comité pasa de revisar cada cambio normal a revisar los cambios de alto riesgo y el calendario mensual.

Un riesgo de manipulación aparece en la muestra trimestral. Un equipo ha clasificado una migración de esquema de base de datos como un cambio estándar porque el procedimiento anterior de "cambios de configuración" estaba redactado de forma laxa. El revisor de la muestra nota que la migración no tenía plan de reversión. El equipo ajusta las definiciones de cambios estándar, añade una regla por la que los cambios de esquema son siempre normales, y el registro de reclasificaciones pasa a ser un punto permanente del orden del día. La decisión registrada en el registro de métricas es conservar la proporción de cambios estándar como una medida de contexto y no como una meta.

## Perspectiva por sector

**Startup.** Una startup suele tener poco proceso formal y mucha automatización de la canalización. Los cambios ocurren rápido sin registro, así que importan sobre todo la integridad y el vínculo entre el commit y el despliegue. Suele bastar una definición de una página de los tres tipos, más la revisión registrada en la canalización.

**Pequeña empresa.** Una pequeña empresa suele tener una o dos personas que escriben y liberan los cambios, por lo que la revisión independiente es difícil. Usa una lista sencilla de cambios estándar para el trabajo rutinario, exige un segundo par de ojos para todo lo que toque datos de clientes o dinero y conserva un registro llano de cambios. Las medidas que vale la pena seguir son el volumen por tipo y la integridad del registro, porque son baratas y ayudan durante un incidente.

**Gran empresa.** Las grandes empresas tienen muchos equipos, plataformas compartidas y sistemas heredados con distinto riesgo. Suelen tener un CAB, y las métricas ayudan a decidir cuáles de sus tareas deben quedarse. El trabajo principal es una clasificación coherente, un catálogo compartido de cambios estándar y una canalización que registre evidencia de auditoría. Consolida por servicio y clase de riesgo, no por una clasificación de equipos.

**Gobierno y sector público.** Los organismos públicos suelen afrontar requisitos legales de aprobación, separación de funciones y conservación de registros, y pueden tener ventanas de versiones dictadas por la contratación. Las métricas deben indicar qué controles son obligatorios y cuáles son costumbre local, ya que los primeros no pueden eliminarse y los segundos sí. La revisión por pares registrada y la evidencia de la canalización suelen poder satisfacer la intención, pero confírmalo con el auditor correspondiente antes de depender de ello (véase el tema 8.3, Métricas de cumplimiento y auditoría).

## Caso de negocio: motivaciones, ROI y TCO

La motivación suele ser el tiempo que los cambios pasan esperando. Cuando el trabajo terminado hace cola para una decisión, el valor se retrasa, los lotes crecen y cada lote conlleva más riesgo. Una segunda motivación es la garantía: los líderes y los auditores quieren saber que los cambios están controlados, y la evidencia registrada en la canalización es más barata de producir y más fiable que una reconstrucción. Una tercera es la respuesta a incidentes, porque un registro de cambios completo y preciso acorta la búsqueda de una causa.

La recogida es barata si la herramienta de cambios y la canalización ya guardan marcas de tiempo y tipos, y moderada si hay que integrarlas. Actuar sobre los datos cuesta más: escribir procedimientos de cambios estándar, construir comprobaciones de la canalización y formar a aprobadores y solicitantes. Espera la mayor parte del trabajo en el primer trimestre y un costo menor y estable para el muestreo y la revisión después.

El retorno aparece como menos tiempo de espera por cambio, menos reuniones, menos esfuerzo preparando evidencia de auditoría y un diagnóstico más rápido durante los incidentes. Estímalo con tus propios datos: multiplica la reducción de horas de espera de aprobación por el número de cambios afectados y por un costo por hora de retraso que tu socio de finanzas acepte. No importes cifras de otras organizaciones. La investigación de DORA respalda la dirección del argumento, pero sus páginas no dan un costo ni un retorno, y cualquier cifra en dinero debe provenir de tus propias mediciones.

## Antipatrones y trampas

- **Tratar la proporción de cambios estándar como una meta.** Los equipos reclasifican trabajo arriesgado para alcanzar el número. Úsala como contexto, revisa la clasificación por muestreo y vigila las tasas de fallos por tipo.
- **Medir solo la velocidad de aprobación.** Un sello de goma rápido parece excelente y no entrega nada. Empareja el plazo con una revisión por muestreo de la sustancia de las aprobaciones y con el panorama de fallos.
- **Añadir aprobaciones tras cada incidente.** Cada puerta nueva ralentiza el sistema y a menudo fomenta lotes mayores. Mira primero por qué ocurrió el fallo y corrige la causa en las pruebas, la revisión o la canalización.
- **Clasificar a aprobadores o solicitantes.** Los recuentos por persona de aprobaciones o rechazos enseñan a aprobar todo o nada. Informa por servicio y por tipo de cambio.
- **Promediar entre tipos de cambio.** Una sola media mezcla el trabajo rutinario y el arriesgado y oculta ambos. Divide siempre por tipo y muestra el percentil 85.
- **Ignorar los cambios hechos fuera del proceso.** La elusión oculta volumen y riesgo reales. Concilia los despliegues de la canalización con los registros de cambios y trata las brechas como un defecto del sistema.
- **Mantener el comité por costumbre.** Un comité que aprueba todo lo que ve añade retraso sin añadir garantía. Revisa cada año qué decide que nadie más podría decidir y reorienta su foco.
- **Recoger los datos y no decidir nunca.** Asocia cada métrica a un responsable con nombre y a un foro de revisión (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Clasificación y volumen | Los tipos son informales; nadie conoce el total | Algunos equipos cuentan por tipo con reglas distintas | Una clasificación escrita, un sistema de registro | Mezcla de tipos con seguimiento de su tendencia y muestreada para comprobar su exactitud | Catálogo de cambios estándar compartido con proveedores y revisado a medida que cambia la evidencia de riesgo |
| Reloj de aprobación y cola | Las esperas de aprobación se sienten pero no se cronometran | Algunos equipos ponen marcas de tiempo a las solicitudes | Una definición del reloj, mediana y percentil mostrados | Antigüedad de la cola revisada semanalmente; los retrasos impulsan correcciones financiadas | Flujo de aprobación ajustado entre equipos y proveedores frente a los fallos y a los resultados para el cliente |
| Automatización de la aprobación | La aprobación es una reunión o un correo | Unas pocas canalizaciones registran la revisión por pares | La revisión y las comprobaciones registradas son lo habitual para los cambios de bajo riesgo | Proporción automatizada con seguimiento junto a un recuento de elusiones y comprobaciones de calidad por muestreo | Política codificada en controles de plataforma compartidos que se adaptan a medida que cambia el panorama de riesgo |
| Registros y uso | Los registros son escasos o se escriben después | Existen registros pero su calidad difiere | Campos requeridos acordados y vinculados a los servicios | Integridad auditada y usada en las revisiones de incidentes | Los datos de cambios alimentan las prácticas de incidentes, problemas y auditoría en toda la organización |

## Lista de verificación

- [ ] Los tres tipos de cambio y sus criterios están escritos y acordados.
- [ ] Existe una vista única de los cambios completados por tipo, conciliada con los despliegues de la canalización.
- [ ] El reloj de aprobación tiene un inicio, un fin y una lista de exclusiones escritos.
- [ ] El plazo de aprobación se informa como una mediana y un percentil 85.
- [ ] La antigüedad de la cola de aprobación es visible y se revisa cada semana.
- [ ] Al menos un cambio normal frecuente se ha convertido en un cambio estándar con un procedimiento documentado.
- [ ] La revisión por pares y los resultados de las pruebas se vinculan automáticamente a los registros de cambios.
- [ ] Una muestra trimestral comprueba la clasificación y la calidad de las aprobaciones.
- [ ] La elusión de la canalización se mide y se revisa.
- [ ] Cada métrica tiene en el registro de métricas un responsable con nombre, un vector de manipulación y una barrera de protección.
- [ ] Ningún informe clasifica a aprobadores o solicitantes individuales.

## Prompts de IA

**Redacta una guía de clasificación para los tres tipos de cambio.**

```text
Trabajo en [type of organization] y operamos [list of services]. Nuestra
herramienta de cambios es [tool], nuestra canalización es [pipeline tool] y
nuestro contexto regulatorio es [regulations or none]. Estos son nuestros diez
cambios más frecuentes: [list]. Redacta una guía en lenguaje llano para decidir
si cada uno es un cambio estándar, normal o de emergencia, con los criterios que
usaste y un ejemplo de caso límite. No inventes valores de referencia ni
afirmes que alguna práctica cumple un requisito de auditoría. Enumera tus
supuestos y las preguntas que debería responder antes de adoptar la guía.
```

**Encuentra en qué se va el tiempo de aprobación.**

```text
Este es un extracto de registros de cambios con marcas de tiempo de envío, de
petición de información y de decisión: [pasted data or description]. Nuestro
proceso de aprobación es [description]. Calcula la mediana y el percentil 85
del plazo de aprobación por tipo de cambio, separando el tiempo de espera al
solicitante del tiempo de espera de una decisión, y sugiere tres preguntas que
hacer sobre los casos más largos. No inventes cifras que no estén en los datos
ni clasifiques a personas individuales. Enumera tus supuestos y cualquier
problema de calidad de datos que notes.
```

**Comprueba las métricas en busca de riesgos de manipulación.**

```text
Informamos estas métricas de habilitación de cambios: [list of metrics with
definitions]. La audiencia es [team, leadership, or governance body] y las
métricas se usan para [purpose]. Para cada métrica, enumera formas plausibles de
inflarla, ocultarla o distorsionarla sin una mejora real, y sugiere una medida o
práctica de barrera de protección emparejada. No propongas metas ni valores de
referencia. Enumera tus supuestos y qué riesgos de manipulación crees que
importan más para [service name].
```

**Planifica el paso de la aprobación por comité a la aprobación por canalización.**

```text
Nuestra vía de aprobación actual para [change type] es [description], con
[number] aprobadores y una espera típica descrita como [description]. Nuestra
canalización ofrece [checks, tests, review tooling]. Propón un plan por etapas
para trasladar los cambios de bajo riesgo a una aprobación registrada basada en
la canalización, incluida la evidencia que tendríamos que conservar, las
señales de seguridad que vigilar y una regla de parada. No afirmes que el plan
satisface ninguna regulación ni norma. Enumera tus supuestos y las personas a
las que debería consultar, como [auditor, security lead, change authority].
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados de cambios, versiones e incidentes y la barrera de protección que debe acompañar a cada métrica de habilitación de cambios.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una versión revisada de este tema mantiene coherentes sus relojes, sus vectores de manipulación y sus referencias cruzadas.

## Puntos clave

- Las métricas de habilitación de cambios miden el flujo y el control del cambio: volumen por tipo, la espera de aprobación y cuánta aprobación registra automáticamente la canalización.
- Divide todo por tipo de cambio, informa los tiempos de espera como una mediana y un percentil 85, y vigila la cola en vivo además del historial.
- Trasladar el trabajo rutinario a cambios estándar y registrar la revisión en la canalización es la forma más directa de acortar la espera, y debe leerse junto a las medidas de fallos.
- La proporción de cambios estándar y la velocidad de aprobación son fáciles de manipular, así que muestrea la clasificación y la calidad de las aprobaciones y mantén los números fuera de los cuadros de mando individuales.
- Usa las métricas para decidir para qué sirve un comité de cambios, y financia la automatización que hace seguro un control más ligero.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
