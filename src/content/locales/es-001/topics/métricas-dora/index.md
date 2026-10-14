# Métricas DORA

**Las métricas DORA describen con qué rapidez y con qué seguridad llegan a producción los cambios de software de un equipo, así que lee juntas las medidas de velocidad y las de estabilidad, calcúlalas a partir de eventos de la canalización y de incidentes, y úsalas para iniciar conversaciones sobre un sistema de entrega, nunca para clasificar equipos ni personas.**

## Resumen y motivación

Las métricas DORA provienen del programa de investigación de [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), un estudio de larga duración sobre cómo se relacionan las prácticas de entrega de software con los resultados de los equipos y de las organizaciones. Nicole Forsgren, Jez Humble y Gene Kim presentaron los primeros hallazgos en el libro [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) en 2018, y el programa ha continuado bajo Google Cloud con un informe anual. La investigación preguntó qué aspectos medibles de la entrega predicen buenos resultados, y se quedó con un conjunto pequeño de medidas del desempeño de la entrega de software que pueden calcularse a partir de la canalización de entrega y del registro de incidentes.

A octubre de 2026, el sitio web de DORA describe cinco métricas de desempeño de la entrega de software, divididas en dos grupos. Tres describen el **rendimiento**, es decir, lo rápido que se mueven los cambios: plazo de entrega de cambios, frecuencia de despliegue y tiempo de recuperación de despliegues fallidos. Dos describen la **inestabilidad**, es decir, con qué frecuencia una versión causa problemas: la tasa de fallos de cambio y la tasa de retrabajo de despliegue. Publicaciones anteriores describían cuatro métricas, con "tiempo de restablecimiento del servicio" en lugar del tiempo de recuperación de despliegues fallidos y sin la tasa de retrabajo. Las definiciones se han ido refinando con los años, así que indica siempre qué edición de la guía sigues y la fecha en que la comprobaste por última vez.

El hallazgo de la investigación que hizo famosas las métricas es que la velocidad y la estabilidad tienden a moverse juntas entre equipos. Los equipos que desplegaban con frecuencia y tenían plazos de entrega cortos no pagaban por ello, en promedio, con más fallos. Esto desmonta la vieja suposición de que ir más rápido significa romper más. Es un patrón en los datos de encuestas y de canalizaciones, no una ley, y se cumple en los equipos que han invertido en prácticas como la [entrega continua](https://en.wikipedia.org/wiki/Continuous_delivery), los lotes pequeños, las pruebas automatizadas y la retroalimentación rápida. Las métricas son señales de esas capacidades subyacentes. No son las capacidades en sí.

Los términos siguientes se repiten en este tema.

- Un **despliegue** es el acto de poner una versión del software en un entorno dado. Este tema se refiere a producción salvo que diga otra cosa.
- Un **cambio** es un conjunto de modificaciones del software, normalmente uno o más commits que se entregan juntos. En ITIL 4 la palabra tiene un significado más amplio, que abarca cualquier adición, modificación o eliminación que pueda afectar a los servicios, y la práctica de [ITIL](https://en.wikipedia.org/wiki/ITIL) que lo gobierna es la habilitación de cambios.
- Un **despliegue fallido** es un despliegue que causa un servicio degradado o una caída en producción y necesita remediación, como una corrección urgente, una reversión o un parche. Tu equipo escribe la regla exacta, porque la investigación la deja a la definición local.
- Una **reversión** es el acto de devolver producción a la versión anterior que se sabe buena.
- Un **percentil** es un valor por debajo del cual cae una proporción indicada de las observaciones. El percentil 85 del plazo de entrega es el número que el 85 por ciento de los cambios mejora.

Las visiones ágil y de ITIL se encuentran en este terreno. Un equipo ágil ve estos números como retroalimentación sobre su práctica de ingeniería y sus acuerdos de trabajo. Un profesional de ITIL los ve como evidencia de resultados para la habilitación de cambios, la gestión de versiones, la gestión de despliegues y la gestión de incidentes. La tensión suele ser sobre el control. Un comité tradicional de aprobación de cambios intenta reducir los fallos inspeccionando cada cambio antes de que salga. La investigación de DORA encontró que la aprobación externa pesada no se asociaba con una mejor estabilidad, y que la revisión por pares, las pruebas automatizadas y los cambios pequeños sí. En ITIL 4, la habilitación de cambios lo permite al separar los cambios estándar, normales y de emergencia y al dejar que los cambios de bajo riesgo estén preautorizados (véase el tema 4.3, Métricas de habilitación de cambios).

Las métricas también tienen límites que la propia investigación declara, y el consejo práctico de este tema se apoya en ellos. Describen un sistema de entrega de una aplicación o servicio, están pensadas para conversaciones de mejora y no dicen nada sobre si el trabajo que se entrega es valioso. Un equipo puede mostrar números excelentes mientras entrega lo equivocado. Por eso este tema se sitúa junto a, y no por encima de, las medidas de flujo (véase el tema 2.1, Medidas de flujo), las medidas de fiabilidad del servicio (véase el tema 5.2, SLI, SLO y presupuestos de errores) y las medidas de resultados (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

Por último, las métricas invitan a la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) en cuanto aparecen en un panel de la dirección. La frecuencia de despliegue es la más fácil de inflar y los recuentos de despliegues fallidos son los más fáciles de ocultar. Por eso cada recomendación siguiente empareja una medida con una comprobación de cómo podría torcerse (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Calcula a partir de eventos, no de la memoria.** Los despliegues provienen de la canalización, los fallos y las recuperaciones del registro de incidentes, y el plazo de entrega del control de versiones unido a la canalización (véase el tema 1.5, Fuentes de datos e instrumentación).
- **Lee la velocidad y la estabilidad como un solo panorama.** Un equipo rápido con fallos crecientes, o un equipo estable que entrega cada trimestre, te dice algo que ninguna de las dos mitades muestra por sí sola.
- **Mide un servicio o una aplicación, no a una persona.** La unidad de análisis es un sistema de entrega. Las personas no despliegan solas, y clasificarlas destruye los datos.
- **Compara un equipo con su propio pasado, no con otro equipo.** El contexto difiere mucho entre un servicio de pagos, una plataforma de datos y una aplicación móvil, y la propia investigación advierte contra usar las métricas como una tabla de clasificación.
- **Usa distribuciones para los tiempos.** El plazo de entrega y el tiempo de recuperación tienen colas largas, así que informa la mediana y un percentil alto (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- **Trata las métricas como síntomas.** Cuando un número se mueve, busca la causa en las capacidades que hay debajo, como el tamaño de los lotes, la automatización de pruebas, la práctica de revisión y la arquitectura, y luego realiza un experimento.
- **Escribe las definiciones.** El fallo, el despliegue y el "inicio del trabajo" son juicios de valor. Registra la elección y mantenla estable para que la tendencia signifique algo.

## Definiciones de métricas

Las cinco métricas siguientes siguen la guía de DORA a octubre de 2026. Las fórmulas indican los relojes y las exclusiones que tu equipo debe escribir. Donde la investigación deja abierto un límite, la tabla muestra un valor por defecto razonable y las recomendaciones explican la elección.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Plazo de entrega de cambios | Tiempo que tarda un cambio confirmado en llegar a producción | El reloj arranca en el primer commit del cambio (o en su fusión con la rama principal, si lo indica la definición) y se detiene cuando el despliegue en producción se completa con éxito; informa la mediana y el percentil 85 de los cambios desplegados en el periodo; los cambios nunca desplegados se excluyen y se informan por separado como trabajo en curso | Horas o días | Control de versiones unido a la canalización de despliegue | Gestión de despliegues; gestión de versiones; habilitación de cambios | Tiempo de ciclo; plazo de entrega hasta producción | Semanal o por versión, revisado mensualmente |
| Frecuencia de despliegue | Con qué frecuencia despliega un equipo en producción | Recuento de despliegues de producción exitosos de la aplicación en el periodo / días del periodo; los despliegues fallidos o revertidos se excluyen del recuento de éxitos; los despliegues a entornos de prueba se excluyen | Despliegues por día o por semana | Registro de eventos de la canalización de despliegue | Gestión de despliegues; gestión de versiones | Entrega continua; liberar al final de cada incremento | Semanal |
| Tiempo de recuperación de despliegues fallidos | Cuánto se tarda en recuperarse cuando un despliegue causa un fallo en producción | El reloj arranca cuando se detecta o se informa el fallo (la misma regla cada vez) y se detiene cuando se restablece el servicio para los usuarios; informa la mediana y el percentil 85 de los despliegues fallidos del periodo; los incidentes no causados por un despliegue se excluyen | Minutos u horas | Registro de incidentes unido a eventos de despliegue y alertas de monitorización | Gestión de incidentes; gestión de la continuidad del servicio | Tiempo de recuperación; trabajo de restablecimiento | Por fallo, revisado mensualmente |
| Tasa de fallos de cambio | Proporción de despliegues de producción que causan un fallo que necesita remediación | Despliegues que requirieron una corrección urgente, una reversión, un parche o una respuesta a incidente / todos los despliegues de producción del periodo; la regla que vincula un fallo con su despliegue se escribe y se aplica de la misma manera cada vez | Porcentaje | Eventos de despliegue unidos a incidentes, reversiones y despliegues de correcciones urgentes | Habilitación de cambios; gestión de incidentes | Definición de terminado; defectos escapados | Mensual |
| Tasa de retrabajo de despliegue | Proporción de despliegues de producción que no estaban planificados y se hicieron para corregir un problema de cara al usuario | Despliegues no planificados hechos en respuesta a un problema de producción / todos los despliegues de producción del periodo; los despliegues planificados que casualmente contienen una corrección se excluyen; la regla de "no planificado" se escribe | Porcentaje | Registro de la canalización etiquetado por motivo de despliegue, vinculado a registros de incidentes o de defectos | Habilitación de cambios; gestión de problemas | Trabajo no planificado; corrección de errores liberada fuera del plan | Mensual |

Dos notas sobre la tabla. Primero, la tasa de fallos de cambio y la tasa de retrabajo de despliegue se solapan y no son lo mismo: un fallo que el equipo nota y revierte sin ningún despliegue nuevo cuenta en la tasa de fallos de cambio pero no en la de retrabajo, mientras que una corrección planificada que el equipo programa no cuenta en ninguna de las dos. Segundo, la investigación trata el **despliegue** como la unidad y cuenta por aplicación, de modo que una plataforma con cincuenta servicios tiene cincuenta juegos de números, no uno.

## Recomendaciones

### Empieza con definiciones y relojes

**1. Escribe una definición de una página para cada métrica antes de graficarla.** Indica qué cuenta como un despliegue, qué entorno es producción, dónde arranca el reloj del plazo de entrega y cómo se vincula un fallo con un despliegue. Pon la página en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas). Una definición que vive solo en la cabeza de alguien derivará la primera vez que cambie la herramienta o el equipo.

**2. Elige un inicio del plazo de entrega y mantenlo.** Las elecciones más comunes son el primer commit del cambio, la fusión con la rama principal y la creación de un ticket. El primer commit mide el sistema de entrega e ignora el tiempo que el trabajo pasó en una lista de pendientes. El inicio en el ticket mide más de la espera del cliente pero mezcla la priorización (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). Usa uno de forma coherente y di cuál en cada gráfico.

**3. Atribuye los fallos con una regla declarada.** Un fallo pertenece a un despliegue cuando, por ejemplo, se abre un incidente en una ventana indicada tras el despliegue y su análisis de causa apunta a ese cambio, o cuando una reversión o una corrección urgente se etiqueta con él. Elige una regla que la gente pueda aplicar sin discutir, revisa una muestra de casos cada trimestre y mantén la regla igual el tiempo suficiente para ver una tendencia.

### Instrumenta desde la canalización

**4. Toma los eventos de despliegue de la canalización, no de una hoja de cálculo.** Un sistema de [CI/CD](https://en.wikipedia.org/wiki/CI/CD) que registra cada despliegue de producción con una marca de tiempo, una versión y un resultado te da la frecuencia de despliegue y el final del reloj del plazo de entrega sin ninguna entrada humana. Los recuentos introducidos a mano llegan tarde y son incoherentes, e invitan a los problemas de fechas retroactivas descritos en el tema 1.5, Fuentes de datos e instrumentación. El proyecto de código abierto Four Keys del equipo de DORA es un ejemplo práctico de recogida de estos eventos, aunque sirve cualquier canalización equivalente propia.

**5. Une el registro de incidentes a los despliegues.** Las medidas de fallo y de recuperación necesitan dos fuentes: el registro de despliegues y la herramienta de incidentes. Añade al registro del incidente un campo "causado por un despliegue" y el identificador del despliegue, rellenado durante la resolución y comprobado en la revisión posterior al incidente (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje). Sin la unión, la tasa de fallos de cambio se vuelve una conjetura.

**6. Etiqueta el motivo de cada despliegue.** La tasa de retrabajo necesita separar los despliegues planificados de las correcciones no planificadas. Basta una etiqueta sencilla en la ejecución de la canalización, como "cambio planificado" o "corrección de un problema de producción". Mantén corta la lista de etiquetas, para que la gente no tenga que pensarlo bajo presión.

### Informa de los números con honestidad

**7. Informa distribuciones y recuentos, no un único promedio.** Muestra la mediana y el percentil 85 del plazo de entrega y del tiempo de recuperación, con el número de observaciones detrás de cada uno. Una semana con dos despliegues y un fallo tiene una tasa de fallos de cambio del 50 por ciento que significa muy poco, así que muestra los recuentos junto al porcentaje y prefiere una ventana más larga para las tasas (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**8. Muestra juntos los grupos de rendimiento y de inestabilidad.** Pon las tres métricas de rendimiento y las dos de inestabilidad en una sola vista, por servicio, con la tendencia de al menos un trimestre. No publiques nunca la frecuencia de despliegue sin las medidas de fallo a su lado. Si un líder pide un número, explica que no existe una puntuación DORA única y ofrece en su lugar la vista de los dos grupos.

**9. Mantén las comparaciones dentro del historial propio del equipo.** Un equipo que baja su mediana del plazo de entrega de nueve días a cinco ha aprendido algo. Compararlo con otro equipo con una arquitectura, una carga regulatoria o un tren de versiones distintos prueba poco y enseña a ambos equipos a proteger sus números. Cuando debas consolidar para la gobernanza, muestra la dispersión entre servicios y la tendencia de mejora, no una tabla de clasificación (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

### Mejora el sistema que describen los números

**10. Reduce primero el tamaño del lote.** Los cambios pequeños acortan el plazo de entrega, facilitan el diagnóstico de los fallos y reducen el costo de una reversión. Las técnicas incluyen los [interruptores de funcionalidad](https://en.wikipedia.org/wiki/Feature_toggle), el trabajo basado en el tronco y la división del trabajo para que cada incremento pueda entregarse solo (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código). Sigue la mediana del tamaño de los cambios junto al plazo de entrega para ver si el lote realmente se reduce.

**11. Invierte en detección rápida y reversión rápida.** El tiempo de recuperación baja cuando el equipo puede ver un fallo en minutos y cuando puede [revertir](https://en.wikipedia.org/wiki/Rollback_(data_management)) o desactivar un cambio sin una compilación nueva. Una [liberación canaria](https://en.wikipedia.org/wiki/Canary_release), un interruptor de funcionalidad y una reversión automatizada acortan cada uno el intervalo entre el fallo y el restablecimiento. Mide por separado el tiempo desde el despliegue hasta la detección, porque la detección lenta se esconde dentro de un número de tiempo de recuperación (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

**12. Usa los números para elegir una capacidad que mejorar.** Elige una métrica débil, pregunta por qué es débil y selecciona una práctica de la lista de capacidades de la investigación que aborde la causa, como la automatización de pruebas, la arquitectura débilmente acoplada o la aprobación ligera de cambios. Ejecuta el cambio durante un trimestre y mira la tendencia. Empareja el experimento con un tema de retrospectiva para que el equipo sea dueño de la mejora (véase el tema 9.5, Métricas de mejora continua).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Plazo de entrega de cambios | Mover más tarde el inicio del reloj, como arrancar en la fusión en lugar de en el primer commit; fusionar pronto en una rama de larga vida; excluir cambios difíciles por "no ser código"; hacer pasar cambios triviales por la canalización para bajar la mediana | Percentil y antigüedad del trabajo en curso; un inicio de reloj fijo y escrito; muestra del 10 por ciento más lento de los cambios cada trimestre; distribución del tamaño de los cambios |
| Frecuencia de despliegue | Dividir un cambio en muchos despliegues triviales; redesplegar compilaciones sin cambios; contar despliegues en preproducción o cambios de configuración vacíos | Tamaño del cambio por despliegue; proporción de despliegues que contienen un cambio visible para el usuario; tasa de fallos de cambio y tasa de retrabajo a su lado |
| Tiempo de recuperación de despliegues fallidos | Arrancar el reloj tarde o cerrar los incidentes pronto; reclasificar un fallo como un incidente nuevo tras una corrección parcial; subir el umbral de gravedad de "fallo" | Reaparición del mismo incidente en una ventana indicada; inicio del reloj tomado de las alertas de monitorización; duración del impacto informada por el cliente |
| Tasa de fallos de cambio | No vincular los incidentes a los despliegues; contar solo los fallos que causan una caída total; ampliar la ventana para que los fallos queden fuera de ella; corregir hacia delante y llamarlo cambio nuevo | Revisar cada trimestre una muestra de incidentes frente al registro de despliegues; seguir la proporción de incidentes con un vínculo de despliegue registrado; tasa de retrabajo de despliegue |
| Tasa de retrabajo de despliegue | Etiquetar las correcciones como trabajo planificado; incluir una corrección en una versión programada; evitar los despliegues de corrección retrasando la corrección | Recuentos de defectos y de defectos escapados del gestor; antigüedad de los defectos abiertos de producción; auditoría de etiquetas sobre una muestra de despliegues |

Una lectura sana muestra un plazo de entrega y un tiempo de recuperación que se reducen o se mantienen estables en un nivel bajo, una frecuencia de despliegue estable o creciente con cambios pequeños, y tasas de fallos y de retrabajo planas o decrecientes, con recuentos lo bastante grandes para confiar en ellos. Las lecturas sospechosas incluyen un salto repentino de la frecuencia de despliegue sin cambio en el trabajo, una tasa de fallos que baja a cero en un mes y un tiempo de recuperación que cae mientras las quejas de los clientes siguen igual. Cada una pide mirar el instrumento antes de celebrar.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Usar las cinco métricas DORA por servicio | Basadas en investigación, equilibran la velocidad con la estabilidad, calculadas a partir de eventos objetivos | Necesita una canalización y un registro de incidentes que se unan limpiamente; no dice si el trabajo fue valioso |
| Informar solo la frecuencia de despliegue y el plazo de entrega | Fácil de recoger de la canalización | Premia solo la velocidad e invita a la manipulación exacta que detectan las medidas de estabilidad |
| Usar definiciones locales por equipo | Se ajusta a la arquitectura y al estilo de versiones del equipo | Los equipos no pueden compararse y las consolidaciones son poco fiables |
| Usar una definición única para toda la organización | Informes coherentes; gobernanza sencilla | Encaja mal con algunos sistemas, como los mainframes con ventanas de lotes o las versiones reguladas |
| Comparar equipos con bandas de desempeño publicadas | Da a los líderes una idea rápida de su posición | Ignora el contexto, y la investigación advierte de que las bandas no son metas para cada equipo |
| Usar las métricas para la automejora del equipo | Genera propiedad; respalda datos honestos | Ofrece menos tranquilidad a los líderes que quieren una puntuación única |

La tensión central es entre la comparabilidad y la honestidad. Cuanto más se usa un número para juzgar equipos, más se tuercen los datos y menos ayudan al equipo que los posee. Usa las métricas primero para apoyar la mejora, acepta una comparabilidad imperfecta y limita las vistas a nivel de líder a las tendencias y la dispersión. Donde los informes regulados necesiten una definición estándar, documéntala y mantén aparte la vista de mejora a nivel de equipo.

## Preguntas para conversar con tu equipo

**1. ¿Cuáles de nuestros cinco números DORA provienen de eventos y cuáles del recuerdo de alguien?**
Sigue cada métrica hasta su fuente. Anota dónde una persona escribe una fecha o decide si algo cuenta como fallo. El facilitador debe ayudar al grupo a ordenar los pasos manuales según cuánto podrían distorsionar el número, y a acordar cuál automatizar primero.

**2. ¿Dónde arranca y se detiene exactamente nuestro reloj del plazo de entrega, y todos están de acuerdo?**
Pide a tres personas que describan el inicio y el fin del reloj para el último cambio que se entregó. Compara las respuestas. Las diferencias suelen aparecer en torno al primer commit, la fusión, un ticket y el paso de aprobación. Acordad una definición y escribidla, y discutid qué tiempo de espera oculta la definición elegida.

**3. ¿Qué cuenta como un despliegue fallido para nosotros, y quién lo decide?**
Repasa los últimos cinco incidentes de producción y pregunta si cada uno pertenece a un despliegue. Los desacuerdos muestran dónde la regla no está clara. Discutid qué ocurre con un fallo que se arregla con un cambio de configuración, una reversión o un parche rápido, y decidid cómo se registra cada uno.

**4. Si la frecuencia de despliegue se duplicara el próximo trimestre, ¿qué comprobaríamos antes de llamarlo una buena noticia?**
Invita al grupo a nombrar las formas en que el número podría subir sin entregar más valor. Mirad el tamaño de los cambios, la proporción de despliegues con un cambio visible para el usuario y las tasas de fallos y de retrabajo. El facilitador debe anotar qué comprobaciones ya existen en el panel y cuáles hay que añadir.

**5. ¿Cómo usan estos números las personas ajenas al equipo?**
Pregunta quién los ve, en qué forma y qué hace con ellos. Escucha si se comparan con otros equipos, si se fijan metas desde fuera o si se usan en evaluaciones individuales. Discutid qué tendría que cambiar en ese uso para que el equipo pudiera confiar en sus propios datos y quién tiene autoridad para hacer el cambio.

**6. ¿Qué capacidad mejoraría más nuestro número más débil, y cuál es un pequeño experimento que probar?**
Elige la métrica más débil y habla de sus causas probables, como lotes grandes, revisión lenta, pruebas inestables o un paso manual de versión. Elige una causa y diseña un experimento de cuatro a seis semanas con una forma de ver el efecto. Acordad una fecha para revisar el resultado y quién traerá los datos.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen las capacidades que impulsan estos números: cambios pequeños, pruebas automatizadas, una canalización rápida y el hábito de revisarse mutuamente el trabajo. Deben usar las métricas como un espejo de su propia práctica de ingeniería, fijar sus propias metas de mejora y resistir la presión de informar un número único hacia arriba. También deciden las definiciones, así que les corresponde el deber de mantenerlas honestas (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

### Equipos de servicio y operaciones

Los equipos de operaciones guardan el registro de incidentes del que dependen las medidas de fallo y de recuperación. Ayudan al equipo de entrega etiquetando los incidentes con el despliegue que los causó, aportando una monitorización que detecte los fallos rápido y participando en la revisión de cada despliegue fallido. Deben vigilar que la velocidad de entrega no compre una inestabilidad que ellos absorben como carga de guardia (véase el tema 5.7, Métricas de trabajo repetitivo y guardias), y pedir las inversiones en reversión y detección que reducen el tiempo de recuperación.

### Liderazgo y gobernanza

Los líderes deben pedir tendencias y dispersión entre servicios, los dos grupos de métricas juntos y los experimentos de mejora que hay detrás. Deben evitar metas que fijen un número, como "desplegar a diario", y evitar usar las métricas en evaluaciones individuales. Los órganos de gobernanza pueden usar los números como evidencia de que una vía de aprobación de cambios más ligera es segura, o como motivo para reconsiderarla, mostrando si la estabilidad se mantuvo al cambiar el proceso (véase el tema 4.4, Fallos de cambio y retrabajo).

### Clientes y usuarios

A los clientes rara vez les importan los recuentos de despliegues. Les importa la rapidez con que les llega una corrección o una funcionalidad, lo poco que una versión rompe algo de lo que dependen y lo rápido que vuelve el servicio cuando eso ocurre. Usa las métricas DORA como evidencia interna de que esos resultados son probables y complétalas con medidas de cara al cliente, como la disponibilidad y la satisfacción (véanse el tema 5.3, Métricas de disponibilidad, y el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio opera un servicio de pago propiedad de un equipo de producto, con el apoyo de un equipo de plataforma y del centro de servicios. Todos los números siguientes son ilustrativos.

El equipo ha desplegado en producción unas dos veces por semana, con un plazo de entrega (del primer commit a producción) de mediana 11 días y percentil 85 de 26 días. En el trimestre anterior, 6 de 24 despliegues (25 por ciento, ilustrativo) fueron seguidos de una reversión o de un incidente. La mediana del tiempo de recuperación de esos fallos fue de 3 horas. El comité de aprobación de cambios se reúne cada semana y revisa todos los cambios del servicio de pago.

El equipo propone un plan. Dividirá los cambios grandes, añadirá comprobaciones automatizadas en la canalización, pondrá el comportamiento nuevo detrás de interruptores de funcionalidad y pedirá al comité que preautorice como cambios estándar los cambios de bajo riesgo que pasen las comprobaciones. El gestor de cambios se muestra cauteloso, así que el equipo acuerda informar mensualmente las cinco métricas y detener el experimento si la tasa de fallos sube dos meses consecutivos.

Tras un trimestre, los números (ilustrativos) son 19 despliegues al mes, una mediana del plazo de entrega de 3 días con un percentil 85 de 8 días, una tasa de fallos de cambio del 8 por ciento, una mediana del tiempo de recuperación de 40 minutos y una tasa de retrabajo del 5 por ciento. El equipo está satisfecho, y un gerente regional pide comparar la frecuencia de despliegue del equipo de pago con la de los demás equipos de producto y fijar una meta común.

El responsable del equipo lleva a la revisión el desglose de retrabajo y fallos y nota un riesgo de manipulación. La frecuencia de despliegue se ha visto ayudada por varios despliegues de configuración diminutos que la canalización cuenta, y el tamaño mediano del cambio se reduce más rápido que el trabajo real. Peor aún, dos incidentes del mes pasado se arreglaron con un cambio de configuración que la canalización registró como un despliegue normal etiquetado como "planificado", de modo que la tasa de retrabajo estaba subestimada. La tasa de fallos de cambio parecía buena en parte porque esos dos incidentes no se habían vinculado a sus despliegues originales.

La decisión, registrada en el registro de decisiones, tiene cuatro partes. Los despliegues solo de configuración se cuentan por separado y se muestran junto al número principal. La etiqueta del motivo de despliegue se audita cada mes sobre una muestra de 10 despliegues. La herramienta de incidentes exige ahora el identificador del despliegue cuando la causa es un cambio. Y el equipo rechaza la meta común de frecuencia de despliegue, ofreciendo en su lugar una vista compartida que muestre la tendencia de cada servicio y su tasa de fallos. El gestor de cambios acepta mantener la preautorización de los cambios estándar, con una revisión al final del próximo trimestre.

## Perspectiva por sector

**Startup.** Un equipo pequeño suele desplegar muchas veces al día y tiene registros de incidentes escasos, así que la frecuencia de despliegue y el plazo de entrega son fáciles pero los datos de fallos son irregulares. Empieza etiquetando cada reversión y cada corrección urgente en la canalización, y llevando un registro sencillo de incidentes con el identificador del despliegue. No dejes que una frecuencia alta te convenza de que la estabilidad está bien sin comprobar la tasa de fallos.

**Pequeña empresa.** Una plataforma alojada o un desarrollador externo pueden desplegar solo una vez al mes, con pocas herramientas. Cuenta a mano lo que puedas durante unos meses, pide al proveedor por escrito las fechas de despliegues e incidentes y céntrate en el plazo de entrega y la tasa de fallos. Usa los números para decidir si cambios más pequeños entregados de forma continua reducirían el riesgo, no para perseguir una banda.

**Gran empresa.** Muchos equipos, varios estilos de versiones y una mezcla de sistemas modernos y heredados dificultan la coherencia de las definiciones. Acordad una definición mínima común para cada métrica, publicadla y permitid que un equipo añada otras locales más estrictas con un motivo declarado. Consolida mostrando la dispersión y la tendencia por servicio en lugar de un promedio, y mantén el detalle a nivel de equipo visible solo para el equipo propietario y sus grupos de apoyo.

**Gobierno y sector público.** Las ventanas de versiones, las reglas de auditoría y los contratos de adquisición dan forma a lo que es posible, y algunos sistemas los operan proveedores. Incluye en los contratos los derechos sobre los datos de entrega y de incidentes para poder calcular las métricas. Usa los números como evidencia de que un programa de modernización acorta los plazos de entrega sin aumentar las tasas de fallos, e informa todas las métricas juntas para que los resultados no sean seleccionados (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es acortar el tiempo entre una idea y su uso manteniendo estable la producción. El costo del programa tiene tres partes: la instrumentación (eventos de la canalización, etiquetas de despliegue y la unión con los incidentes), la rutina de revisión (una mirada mensual a las tendencias y una muestra trimestral de casos de fallo y de retrabajo) y el trabajo de mejora al que apuntan los números, como la automatización de pruebas o una canalización más rápida. Las dos primeras son modestas. La tercera es donde está el gasto real, y se gasta en capacidad de ingeniería, no en medición.

El retorno viene de decisiones que los números facilitan. Un equipo puede mostrar a un comité de cambios que los cambios pequeños son seguros y así retirar un paso de aprobación. Un grupo de plataforma puede ver qué servicios tienen canalizaciones lentas o mala reversión y dirigir su inversión en consecuencia. Un equipo de operaciones puede argumentar con datos a favor de una mejor herramienta de detección. Describe el retorno mediante patrones que puedas observar tú mismo, como el tiempo desde el commit hasta producción, la proporción de versiones que necesitan una corrección y la carga de guardia por versión, antes y después de un cambio. Evita citar cifras de referencia de otras organizaciones como retorno esperado, ya que tu contexto será distinto. El costo total de propiedad está dominado por el tiempo de las personas, así que mantén pequeño el conjunto de métricas y automatiza su recogida (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Tratar las métricas como un cuadro de mando de desempeño individual.** Rompe la base de la investigación y corrompe los datos. Informa solo a nivel de servicio y de equipo.
- **Fijar metas como "desplegar a diario" o "plazo de entrega inferior a un día".** La meta sustituye al objetivo. Fija una dirección de mejora y un experimento, y conserva el número como señal.
- **Clasificar a los equipos entre sí o frente a bandas publicadas.** El contexto difiere y sigue la manipulación. Compara un equipo con su propia tendencia y usa las bandas solo como orientación amplia.
- **Informar de la velocidad sin la estabilidad.** El par es el punto. Muestra siempre juntos los grupos de rendimiento e inestabilidad.
- **Dejar que las definiciones deriven.** El fallo, el despliegue y el inicio del plazo de entrega cambian en silencio con la herramienta. Registra cada cambio de definición con su motivo y márcalo en el gráfico.
- **Contar despliegues de cualquier cosa.** Los envíos de configuración, las versiones de entornos de prueba y los redespliegues de la misma compilación inflan el recuento. Define un despliegue de producción y muestra por separado los otros tipos.
- **Ignorar lo que se entrega.** Unos números sólidos pueden ocultar trabajo que no importa. Léelos junto a las medidas de flujo y de resultados (véase el tema 2.9, Trabajo operativo y trabajo no planificado).
- **Perseguir la métrica en lugar de la capacidad.** El plazo de entrega baja con más fiabilidad cuando los lotes se reducen y las pruebas se aceleran. Mejora la práctica y deja que el número la siga.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Cada persona define el despliegue y el fallo de forma distinta | Unos pocos equipos documentan sus definiciones | Una definición escrita por métrica, con relojes y exclusiones, en el registro de métricas | Cambios de definición registrados y marcados en los gráficos; muestras comprobadas cada trimestre | Definiciones revisadas conjuntamente con proveedores y gobernanza cuando dejan de informar decisiones |
| Captura de datos | Recuentos reunidos a mano a partir de tickets | Datos de la canalización para algunos servicios; incidentes vinculados a mano | Despliegues, motivos y vínculos con incidentes capturados automáticamente para la mayoría de los servicios | Calidad de los datos (tasa de vínculos, auditoría de etiquetas) medida y con seguimiento de su tendencia | Eventos compartidos entre equipos y proveedores mediante interfaces acordadas |
| Uso de los números | Informados hacia arriba como una puntuación única | Los equipos miran de vez en cuando sus propios gráficos | Los grupos de rendimiento e inestabilidad se revisan juntos cada mes por el equipo propietario | Las tendencias alimentan experimentos de mejora financiados con una barrera de protección | La dispersión y las tendencias informan la inversión en plataforma y la política de cambios en toda la organización |
| Barreras de protección contra la manipulación | Ninguna | Conciencia informal | Barreras de protección emparejadas listadas para cada métrica | Barreras de protección y muestras revisadas, con casos de manipulación registrados | Barreras de protección ajustadas continuamente a medida que cambian los equipos y las herramientas |

## Lista de verificación

- [ ] Las cinco métricas están definidas por escrito, con relojes, exclusiones y la fecha y edición de la guía de DORA seguida.
- [ ] Los despliegues de producción los registra la canalización con una marca de tiempo, una versión y un resultado.
- [ ] El inicio del plazo de entrega (primer commit, fusión u otro) está declarado y se aplica de forma coherente.
- [ ] Los incidentes llevan un campo para el despliegue que los causó, rellenado durante la resolución.
- [ ] Cada despliegue lleva una etiqueta de motivo, y se audita una muestra cada mes.
- [ ] Los tiempos se informan como la mediana y un percentil alto, con recuentos.
- [ ] Las métricas de rendimiento y de inestabilidad se muestran juntas para cada servicio.
- [ ] El tamaño de los cambios se sigue junto a la frecuencia de despliegue y el plazo de entrega.
- [ ] Los números no se usan en evaluaciones individuales ni para clasificar equipos.
- [ ] Un responsable con nombre revisa las métricas cada mes y registra cualquier cambio de definición.
- [ ] Un experimento de mejora, ligado a la métrica más débil, está en marcha con una fecha de revisión.

## Prompts de IA

**Redacta un conjunto de definiciones de una página para las cinco métricas.**

```text
Estoy definiendo las métricas DORA de entrega de software para [service or
application name]. Nuestras herramientas son [version control host, CI/CD
system, incident tool, ITSM tool]. Nuestro estilo de versiones es [continuous,
weekly, monthly, or other]. Para el plazo de entrega de cambios, la frecuencia
de despliegue, el tiempo de recuperación de despliegues fallidos, la tasa de
fallos de cambio y la tasa de retrabajo de despliegue, redacta una definición
con dónde arranca y se detiene el reloj, qué se cuenta y qué se excluye, la
fuente de datos y un riesgo de ambigüedad. No inventes valores de referencia ni
afirmes que nuestra práctica coincide con alguna banda de desempeño publicada.
Enumera tus supuestos y las preguntas que debería responder para terminar las
definiciones.
```

**Revisa un conjunto de métricas en busca de riesgos de manipulación.**

```text
Así calculamos actualmente nuestras métricas de entrega: [description of each
metric, its data source, and how it is reported]. La audiencia es [team,
leadership, or governance body]. Para cada métrica, enumera formas plausibles
de inflar, ocultar o distorsionar el número sin una mejora real, y sugiere una
métrica o práctica de barrera de protección emparejada que la detectaría. No
inventes estadísticas. Enumera tus supuestos y la información que necesitarías
para ser más preciso.
```

**Analiza una exportación de datos de despliegues e incidentes.**

```text
Voy a pegar una pequeña exportación de [number] despliegues de producción y
[number] incidentes con estos campos: [list fields, for example deployment id,
timestamp, result, reason tag, incident id, opened time, resolved time,
deployment link]. Calcula la mediana y el percentil 85 del tiempo de
recuperación, la tasa de fallos de cambio y la tasa de retrabajo, mostrando los
recuentos detrás de cada una. Señala los registros con vínculos ausentes o
marcas de tiempo sospechosas. No extrapoles más allá de los datos ni compares
el resultado con referencias externas. Enumera tus supuestos y los problemas de
calidad de datos que limitan las conclusiones.
```

**Planifica un experimento de mejora.**

```text
Nuestra métrica de entrega más débil es [metric name], actualmente [value as
reported, with date range and counts]. Las causas probables que ha discutido el
equipo son [list]. Nuestras restricciones son [constraints, for example
regulated releases, shared test environment]. Propón tres experimentos
pequeños de cuatro a seis semanas, cada uno con una hipótesis, una forma de
observar el efecto, una métrica de barrera de protección y un riesgo. No
inventes cifras de mejora esperada. Enumera tus supuestos y lo que deberíamos
comprobar antes de empezar.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados de cambios, versiones e incidentes y la barrera de protección que debe acompañar a cada métrica DORA.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una versión revisada de este tema mantiene coherentes sus relojes, sus vectores de manipulación y sus referencias cruzadas.

## Puntos clave

- Las métricas DORA son cinco medidas de la entrega de software, tres de rendimiento y dos de inestabilidad, y son más útiles leídas juntas para un servicio.
- Calcúlalas a partir de eventos de la canalización y de incidentes con definiciones escritas, porque el fallo y el inicio del plazo de entrega son juicios de valor.
- Úsalas para aprender sobre un sistema de entrega y compara un equipo con su propio historial, nunca para clasificar personas ni equipos.
- Informa medianas, percentiles altos y recuentos, y empareja cada métrica con una barrera de protección que detecte su manipulación.
- Mejora las capacidades subyacentes, como los lotes pequeños, la detección rápida y la reversión fácil, y deja que los números las sigan.
- Indica la edición y la fecha de la guía que sigues, ya que las definiciones se han ido refinando con el tiempo.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
