# Volumen y prioridad de incidentes

**Cuenta los incidentes frente al uso que los produjo, lee la prioridad como una mezcla y no como una puntuación, y vigila las repeticiones, porque la forma de la demanda de incidentes te dice dónde invertir mucho antes de que lo haga cualquier tiempo de resolución individual.**

## Resumen y motivación

Un incidente, en términos de [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, es una interrupción no planificada de un servicio o una reducción de su calidad. La [gestión de incidentes](https://en.wikipedia.org/wiki/Incident_management) es la práctica que restablece el funcionamiento normal del servicio tan rápido como sea factible y limita el daño al negocio. Todo incidente es también una señal: algo del servicio, de sus cambios, de sus usuarios o de su monitorización no funcionó como se esperaba. El recuento y el carácter de los incidentes es, por tanto, una de las medidas de demanda más informativas que tiene un equipo de operaciones.

El volumen por sí solo es una mala guía. Una subida de incidentes puede significar que el servicio empeoró, o que más gente lo usa, o que la monitorización mejoró y ahora ve fallos que antes pasaban sin informarse. Una bajada puede significar que el trabajo de fiabilidad dio fruto, o que los usuarios dejaron de molestarse en informar. Este tema trata de leer el volumen con el contexto suficiente para distinguir esas historias: normalizando frente al uso, dividiendo por categoría y servicio, y vigilando la mezcla de prioridades y la tasa de repeticiones.

La prioridad es la segunda mitad del tema. La práctica de ITIL suele derivar la prioridad de dos insumos: el impacto (cuánto del negocio se ve afectado) y la urgencia (con qué rapidez necesita el negocio la corrección). El par se asigna a un nivel de prioridad que fija la respuesta esperada. Los equipos ágiles tienen un equivalente cercano en cómo clasifican una lista de pendientes: etiquetas de gravedad y urgencia en los defectos, y una "clase de servicio" en un tablero de flujo que decide qué se salta la cola. Las palabras difieren; la pregunta es la misma: qué debe atenderse primero y por qué.

La visión de ITIL trata los incidentes como registros que pertenecen a un centro de servicios y a grupos resolutores, con categorías, prioridades y metas de nivel de servicio. La visión ágil trata el trabajo no planificado como una interrupción del flujo que compite con el trabajo planificado (véase el tema 2.9, Trabajo operativo y trabajo no planificado). Ambas visiones se benefician de las mismas medidas, si las medidas describen el sistema y no a las personas que hay en él. El [centro de servicios](https://en.wikipedia.org/wiki/Help_desk_software) es donde empiezan la mayoría de los registros, y sus propias métricas se tratan por separado (véase el tema 3.1, Métricas del centro de servicios). Con qué rapidez se responde a los incidentes y se resuelven se trata en el tema 3.3, Tiempo de respuesta y resolución de incidentes. Los incidentes graves tienen sus propias medidas (véase el tema 3.4, Métricas de incidentes graves).

Varios términos se repiten a continuación. Un **percentil** es el valor por debajo del cual cae una proporción indicada de las observaciones, así que el percentil 85 es el valor que el 85 por ciento de las observaciones no supera. Un **acuerdo de nivel de servicio (SLA)** es un compromiso documentado entre un proveedor y un cliente. Un **elemento de configuración (CI)** es un componente que necesita gestionarse para prestar un servicio. Un **proceso de Poisson** describe eventos que llegan de forma independiente a una tasa media, lo que es un primer modelo útil para las llegadas de incidentes (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

La advertencia del tema 1.2 (Ley de Goodhart y psicología de las métricas) se aplica aquí más que en la mayoría de los lugares. Los recuentos y las prioridades de los incidentes los introducen personas, a menudo bajo presión, y el número asociado a un registro puede cambiarse cambiando cómo se escribe el registro. Cada métrica siguiente tiene un vector de manipulación, y las barreras de protección forman parte de la definición.

## Principios clave

- **Normaliza antes de comparar.** Un recuento significa poco sin el uso, la base de usuarios o el volumen de transacciones del que proviene. Compara tasas entre periodos y servicios, y muestra a su lado el recuento en bruto.
- **Lee la mezcla, no un número único.** La distribución de prioridades, la distribución de categorías y la proporción de repeticiones dicen más juntas que cualquier total.
- **La prioridad es una regla, no un estado de ánimo.** Derívala del impacto y la urgencia mediante una matriz escrita, y mide con qué frecuencia se cambia a posteriori.
- **Separa los incidentes de las solicitudes.** Una petición de algo normal no es un fallo. Contar ambos juntos infla el volumen de incidentes y oculta en qué emplea su tiempo el centro de servicios (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio).
- **Las repeticiones son la señal más valiosa.** Un incidente que vuelve apunta a un problema que aún no está resuelto (véase el tema 4.1, Métricas de gestión de problemas).
- **Mide servicios y equipos, nunca agentes.** Los recuentos por persona invitan a clasificar, y clasificar corrompe los datos (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- **Espera que el volumen se mueva por razones ajenas a la calidad.** Las versiones, las estaciones, las campañas y los cambios en los canales de notificación desplazan los recuentos. Anota el gráfico.

## Definiciones de métricas

La tabla enumera las métricas de este tema. Los relojes y los límites se indican en la columna de la fórmula. "Cerrado" y "abierto" se refieren a marcas de tiempo del registro del incidente; la hora de apertura es cuando se crea el registro o cuando lo crea el sistema de monitorización, y la hora de cierre es cuando el incidente se confirma como resuelto y se cierra.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volumen de incidentes por servicio | Recuento de incidentes abiertos para un servicio en un periodo | incidentes con una hora de apertura dentro del periodo, atribuidos al servicio afectado; se excluyen las solicitudes de servicio, los duplicados fusionados en un registro padre y los registros cancelados por haberse planteado por error | recuento | Registros de incidentes de la herramienta ITSM | Gestión de incidentes | Defectos de producción o elementos de trabajo no planificados por equipo | Semanal, revisado mensualmente |
| Tasa normalizada de incidentes | Incidentes en relación con el uso del servicio | incidentes abiertos en el periodo / medida de uso del mismo periodo y alcance (usuarios activos, sesiones o transacciones, elegidos y registrados por servicio) x 1.000; la medida de uso debe provenir de una fuente distinta de la herramienta de incidentes | incidentes por 1.000 unidades de uso | Herramienta ITSM más datos de uso de analítica o monitorización | Gestión de incidentes; gestión de niveles de servicio | Densidad de defectos por versión o por usuario | Mensual |
| Mezcla de prioridades | Proporción de incidentes abiertos en cada nivel de prioridad | incidentes con la prioridad registrada en la apertura / todos los incidentes abiertos en el periodo, mostrada para cada nivel; los incidentes reclasificados se cuentan con la prioridad de apertura y se muestran de nuevo con la prioridad de cierre | porcentaje por nivel | Herramienta ITSM, incluido el historial de cambios de prioridad | Gestión de incidentes | Distribución de gravedad de los defectos; mezcla de clases de servicio | Mensual |
| Tasa de reclasificación de prioridad | Proporción de incidentes cuya prioridad cambió entre la apertura y el cierre | incidentes cerrados en el periodo cuya prioridad de cierre difiere de la de apertura / incidentes cerrados en el periodo | porcentaje | Rastro de auditoría de la herramienta ITSM | Gestión de incidentes | Tasa de reclasificación en la lista de pendientes de defectos | Mensual |
| Concentración de categorías | Proporción del volumen de incidentes que acumulan las mayores categorías | incidentes de las cinco categorías principales por recuento / todos los incidentes categorizados del periodo; los incidentes sin categoría se informan por separado como su propia proporción | porcentaje | Campos de categoría y servicio de la herramienta ITSM | Gestión de incidentes; gestión de problemas | Grupos de defectos por componente o épica | Mensual |
| Tasa de incidentes repetidos | Proporción de incidentes que se repiten para el mismo servicio, elemento de configuración y categoría dentro de una ventana indicada | incidentes del periodo con un incidente cerrado anterior para el mismo servicio, CI y categoría en la ventana precedente (por ejemplo 30 días, fijada una vez y registrada) / incidentes abiertos en el periodo; un registro reabierto cuenta como una reapertura, no como una repetición | porcentaje | Herramienta ITSM y vínculos de la CMDB | Gestión de incidentes; gestión de problemas | Regresión o tasa de defectos escapados | Mensual |
| Tasa de reapertura | Proporción de incidentes cerrados que se reabrieron | incidentes cerrados en el periodo que se reabrieron más tarde dentro de una ventana indicada (por ejemplo 7 días) / incidentes cerrados en el periodo | porcentaje | Historial de estados de la herramienta ITSM | Gestión de incidentes | Defectos reabiertos; retrabajo | Mensual |
| Proporción detectada por monitorización | Proporción de incidentes planteados primero por la monitorización antes de que un usuario informara | incidentes cuyo primer evento es una alerta automatizada / todos los incidentes abiertos en el periodo; los incidentes abiertos por una persona a partir de una alerta se cuentan por la hora de la alerta | porcentaje | Herramienta ITSM, integración con la monitorización | Monitorización y gestión de eventos; gestión de incidentes | Defectos detectados por alerta frente a los informados por clientes | Mensual |

Dos notas sobre las definiciones. La primera es que "prioridad" en esta tabla es la prioridad que lleva el registro, que debe provenir de la matriz de impacto y urgencia y no del orden en que la gente quiere que se haga el trabajo. La segunda es que el volumen informado para un periodo es un recuento de aperturas, no un recuento de incidentes abiertos en un día dado. El recuento de abiertos en un momento cualquiera es una medida de la lista de pendientes y pertenece a la antigüedad (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

## Recomendaciones

### Cuenta con cuidado

**1. Escribe qué es y qué no es un incidente.** Muchas herramientas guardan incidentes, solicitudes, alertas y problemas en una misma tabla. Decide qué tipos de registro cuentan, documenta el filtro y aplícalo siempre. Un cambio en el filtro cambia la tendencia, así que registra los cambios con la fecha y el motivo (véase el tema 1.5, Fuentes de datos e instrumentación).

**2. Deduplica antes de informar.** Cuando un fallo produce cincuenta tickets, el incidente padre es el suceso y los hijos son una medida de su alcance. Informa ambos números: incidentes padre para saber cuántos fallos ocurrieron, y registros vinculados para saber cuántas personas los sintieron. Mezclar ambos hace que una gran caída parezca un mes de trabajo rutinario.

**3. Atribuye los incidentes a servicios además de a equipos.** El servicio es lo que el negocio compra y entiende. Usa el catálogo de servicios para definir la lista y revisa la asignación desde los CI cuando cambien los servicios. Un incidente sin servicio es un problema de calidad de datos que corregir, y la proporción de tales registros vale la pena informarla.

### Normaliza e interpreta el volumen

**4. Normaliza frente a una medida de uso de otra fuente.** Divide entre usuarios activos, sesiones o transacciones, tomados de la analítica o de la monitorización y no de la herramienta de incidentes. Un servicio que duplicó sus usuarios y sus incidentes no ha empeorado; uno cuyos incidentes se duplicaron con un uso plano sí. Muestra el recuento en bruto junto a la tasa para que nadie crea que el denominador esconde algo.

**5. Usa un gráfico de control, no una flecha de tendencia.** Los recuentos de incidentes varían de una semana a otra aunque nada haya cambiado. Un [gráfico de control](https://en.wikipedia.org/wiki/Control_chart) muestra el rango habitual de variación, de modo que el equipo reaccione a una señal y deje en paz el ruido. Los recuentos semanales que se mueven dentro de los límites no son noticia; una racha sostenida a un lado del promedio sí. Ajusta por [estacionalidad](https://en.wikipedia.org/wiki/Seasonality), como el cierre de trimestre, las vacaciones y los ciclos de versiones, comparando periodos equivalentes.

**6. Anota el gráfico con eventos.** Marca las versiones, las migraciones, las campañas, las caídas de dependencias y los cambios en el canal de notificación. Un formulario de autoservicio nuevo o un botón de "informar de un problema" más visible pueden aumentar el volumen mientras el servicio sigue igual. La mayoría de las discusiones sobre el volumen terminan rápido cuando el gráfico muestra lo que pasó esa semana.

### Gestiona la prioridad con reglas

**7. Deriva la prioridad del impacto y la urgencia con una matriz publicada.** Define el impacto en términos de usuarios y funciones de negocio afectados, y la urgencia en términos de la rapidez con que crece el daño. Publica la matriz en la página donde los agentes eligen los valores, con dos o tres ejemplos resueltos por celda. Evita los campos de prioridad de elección libre; se convierten en negociación, y el recuento de incidentes de "prioridad 1" pasa a ser una medida de persuasión.

**8. Informa juntas la mezcla y la tasa de reclasificación.** Una mezcla sana tiene un número pequeño de incidentes de máxima prioridad y una base amplia de otros menores. Si crece el nivel superior, pregunta si creció el daño o si los clientes aprendieron que "crítico" recibe atención. La tasa de reclasificación muestra lo bien que encaja la matriz: cambios frecuentes al cerrar significan que la regla no está clara o que la primera evaluación se hace con prisa. Revisa cada mes una muestra de registros reclasificados en el grupo que posee la matriz.

**9. Mantén alineadas la prioridad y la clase de servicio ágil.** Donde los equipos de entrega reciben trabajo originado por incidentes, usa las mismas palabras y la misma matriz, o publica una correspondencia clara. Un equipo que llama "alto" a un defecto mientras operaciones llama "medio" al mismo defecto perderá tiempo en traducciones. Reserva una asignación explícita para el trabajo urgente de modo que la interrupción sea visible en las medidas de flujo (véase el tema 2.1, Medidas de flujo).

### Busca repeticiones y patrones

**10. Sigue las repeticiones y las reaperturas como señales distintas.** Una reapertura significa que la primera corrección no se sostuvo; una repetición significa que el mismo tipo de fallo volvió tras una corrección adecuada. La primera apunta a la calidad de la resolución y la segunda a una causa sin resolver. Vincula los grupos de repeticiones a registros de problemas y deja de contar un incidente como resuelto cuando es probable que vuelva (véase el tema 4.1, Métricas de gestión de problemas).

**11. Usa el [principio de Pareto](https://en.wikipedia.org/wiki/Pareto_principle) para elegir dónde mirar.** Ordena las categorías y los servicios por recuento de incidentes y comprueba qué pocos explican la mayor parte del volumen. Investiga los primeros antes de construir informes nuevos para el resto. La forma es un aviso para el [análisis de causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis), no una conclusión, porque una categoría con un recuento alto puede ser sencillamente la que es fácil de categorizar.

**12. Devuelve los hallazgos a la entrega y al centro de servicios.** Comparte las vistas de categorías y de repeticiones con los equipos que construyen y cambian los servicios, en una conversación regular y no en un informe. Empareja cada grupo recurrente con un responsable, un siguiente paso y una fecha, y coloca el trabajo en la misma lista de pendientes que las demás prioridades (véase el tema 2.6, Métricas de la lista de pendientes y su refinamiento). El volumen baja cuando se eliminan las causas, y eso requiere capacidad planificada.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Volumen de incidentes por servicio | Registrar incidentes como solicitudes, fusionar tickets no relacionados, desalentar a los usuarios de informar o cerrar duplicados como "no se encontró fallo" | Volumen de contactos informados por usuarios y volumen de solicitudes junto al volumen de incidentes; satisfacción y abandono del centro de servicios; muestra de solicitudes que parecen fallos |
| Tasa normalizada de incidentes | Elegir el denominador que da la mejor cifra, o cambiar la definición de uso entre periodos | Medida de uso fija por servicio, registrada en el registro de métricas; recuentos en bruto mostrados junto a la tasa |
| Mezcla de prioridades | Bajar las prioridades para parecer tranquilo o subirlas para conseguir atención; asignar una prioridad baja para evitar una meta de respuesta | Tasa de reclasificación de prioridad; revisión mensual de una muestra frente a la matriz de impacto y urgencia; impacto informado por el cliente |
| Tasa de reclasificación de prioridad | No cambiar la prioridad cuando debería cambiar, para que la tasa parezca estable; cambiarla solo al cierre para ajustarla a la meta | Muestra de registros donde el impacto cambió durante el incidente; revisiones de las cronologías de los incidentes |
| Concentración de categorías | Usar una categoría comodín, o dividir una categoría grande en varias para ocultar la concentración | Proporción de registros sin categoría y "otros"; revisión periódica de la lista de categorías; comprobaciones de las categorías frente a las notas de resolución |
| Tasa de incidentes repetidos | Abrir un incidente nuevo con otra redacción o CI para evitar el vínculo; cerrar pronto para evitar una reapertura | Revisión de registros casi duplicados por texto y servicio; tasa de reapertura; tasa de vínculos con registros de problemas |
| Tasa de reapertura | Pedir a los usuarios que abran un ticket nuevo en lugar de reabrir; cerrar los tickets tarde para evitar reaperturas | Recuento de tickets nuevos que hacen referencia a uno cerrado recientemente; confirmación de la resolución por el cliente; distribución del tiempo hasta el cierre |
| Proporción detectada por monitorización | Crear alertas ruidosas que abren incidentes automáticamente, o dejar que la gente reetiquete informes de usuarios como alertas | Medidas de calidad de alertas, como la proporción de alertas accionables (véase el tema 5.5, Métricas de monitorización y calidad de las alertas); auditoría del origen de los incidentes |

Una lectura sana es aburrida y explicable. Las tasas normalizadas son estables o bajan en los servicios estables y suben cuando sube el uso o el cambio por una razón que el gráfico muestra. La mezcla de prioridades es estable, la reclasificación es baja y un pequeño conjunto de categorías recibe atención deliberada. Las repeticiones y las reaperturas bajan tras el trabajo planificado de problemas, y un movimiento de cualquier métrica tiene una explicación que alguien puede dar sin defender el número.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Recuentos de incidentes en bruto | Sencillos, fáciles de explicar, siempre disponibles | Mezclan uso, calidad y comportamiento de notificación en un solo número |
| Tasas frente al uso | Permiten una comparación justa entre periodos y servicios | Necesitan una fuente de uso fiable; los denominadores pueden discutirse |
| Matriz fija de impacto y urgencia | Prioridad coherente entre equipos; auditable | Puede parecer rígida; los casos límite necesitan criterio y una vía de anulación |
| Prioridad de elección libre | Rápida y flexible para agentes con experiencia | Incoherente, abierta a presiones, difícil de comparar en el tiempo |
| Árbol de categorías detallado | Muestra de dónde viene la demanda | Difícil de usar bajo presión; la gente elige la primera coincidencia u "otros" |
| Lista de categorías corta con etiquetas | Rápida de aplicar y coherente | Menos detalle; puede ocultar patrones que necesitan análisis de texto |
| Tasa de repeticiones por CI y categoría | Apunta a causas sin resolver | Depende de buenos datos de CI; ocurren tanto vínculos falsos como omisiones |

Acepta que ninguna medida única es la correcta. Usa los recuentos en bruto para planificar la capacidad, las tasas para la salud, la mezcla de prioridades para el riesgo y las repeticiones para la mejora, y muestra cada una por lo que es. Mantén la lista de categorías lo bastante corta para que la gente la use y mejora el árbol solo cuando una decisión necesite más detalle.

## Preguntas para conversar con tu equipo

**1. ¿Qué cuenta aquí como incidente, y todos aplican la regla de la misma manera?**
Toma diez registros recientes y pide a cada persona que los etiquete como incidente, solicitud u otra cosa. Compara las respuestas y discute los desacuerdos. El facilitador debe buscar hábitos como tratar como incidente cada ticket de una persona de alto nivel, y luego acordar una regla escrita con ejemplos. Anota la fecha para que las tendencias posteriores se lean correctamente.

**2. Cuando el volumen de incidentes subió el trimestre pasado, ¿qué sabíamos del uso y del cambio en ese momento?**
Pon el gráfico junto a una cronología de versiones, campañas y cifras de uso. Pregunta qué subida estaba explicada y cuál no. La conversación tiende a mostrar lo pocas veces que el denominador está en la página. Acordad qué medida de uso llevará cada servicio a partir de ahora.

**3. ¿Cómo se decide la prioridad, y cuándo nos sorprendió por última vez?**
Recorre la matriz de impacto y urgencia con un ejemplo reciente de cada nivel de prioridad. Pregunta dónde adivinan los agentes y dónde presionan los clientes o los gerentes. Compara la prioridad de apertura y la de cierre de algunos registros. Decidid un cambio en la matriz o en sus ejemplos que reduzca la discusión.

**4. ¿Qué tres categorías se llevan la mayor parte de nuestro volumen de incidentes, y quién trabaja en eliminar la causa?**
Enumera las categorías principales y, para cada una, el responsable de la causa subyacente. Si la respuesta es "nadie", es un hallazgo. Pregunta si la categoría es un grupo real o un hábito de etiquetado. Elegid un grupo para investigarlo con el equipo de entrega este trimestre.

**5. ¿Cómo distinguimos una repetición de una reapertura, y qué hacemos con cada una?**
Muestra al equipo dos o tres pares de registros y pregunta cuáles son repeticiones. Discutid qué dice una reapertura sobre la calidad de la primera corrección y qué dice una repetición sobre la causa. El facilitador debe orientar al grupo a vincular los grupos de repeticiones a registros de problemas en lugar de cerrarlos de uno en uno. Acordad quién los revisa y con qué frecuencia.

**6. ¿Qué nos tentaría cambiar si los altos directivos revisaran cada semana nuestro recuento de incidentes?**
Pide al grupo que imagine el número en una pared. ¿Qué hábitos cambiarían: cómo se registran las cosas, cómo se fusionan los tickets, cómo se fijan las prioridades? Nombra la presión abiertamente y sin culpar. Acordad qué barrera de protección mostraría el cambio y quién la mira.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega reciben el producto de este tema como demanda. Las vistas de categorías y de repeticiones muestran qué partes del producto causan más problemas, y la mezcla de prioridades muestra cuánto trabajo de interrupción planificar. Los equipos deben tratar el trabajo originado por incidentes como parte de su capacidad, mantenerlo visible en las medidas de flujo y usar los grupos de repeticiones para justificar el trabajo de fiabilidad en la lista de pendientes (véase el tema 2.9, Trabajo operativo y trabajo no planificado). Contar incidentes por versión es una tendencia útil, aunque nunca debe convertirse en una medida de culpa para desarrolladores individuales.

### Equipos de servicio y operaciones

Los equipos de servicio y operaciones crean los registros y sienten la presión en torno a la prioridad. Les benefician una matriz clara, una lista de categorías corta y formas rápidas de vincular duplicados. Deben comprobar los datos de sus propias herramientas, como la proporción de registros sin categoría y la tasa de reclasificación, antes de que lo hagan otros. Los equipos de operaciones están bien situados para realizar la revisión mensual por muestreo y para llevar los grupos de repeticiones a la gestión de problemas.

### Liderazgo y gobernanza

Los líderes quieren saber si el servicio mejora y dónde invertir. Deben pedir tasas normalizadas, la mezcla de prioridades y la vista de repeticiones, con anotaciones, y resistirse a una cifra única de volumen. Las metas de "menos incidentes" invitan a la supresión, así que fija expectativas sobre resultados como el impacto en los clientes y la reducción de repeticiones. La gobernanza debe poseer la matriz de prioridades y aprobar sus cambios, anotando el efecto sobre las líneas de tendencia.

### Clientes y usuarios

Los clientes viven los incidentes como trabajo interrumpido, no como categorías. Necesitan una forma fácil de informar de un fallo, una prioridad justa basada en su impacto y actualizaciones honestas. Si se desalientan los informes o las prioridades parecen arbitrarias, el volumen caerá y la confianza caerá con él. Comparte los hallazgos principales en términos que los usuarios reconozcan, como los servicios mejorados y los problemas eliminados (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional da soporte a un sistema de historias clínicas, un sistema de citas y una herramienta de mensajería del personal. Todos los números de este ejemplo son ilustrativos.

El informe mensual muestra 640 incidentes en el último mes del trimestre, frente a 520 el mes anterior. La dirección pide un plan de recuperación. El responsable del servicio del sistema de citas, cuyo recuento subió más, pide mirar los datos antes de aceptar que el servicio empeoró.

Surgen tres hechos. Primero, el sistema de citas incorporó ese mes un nuevo grupo de clínicas, y los usuarios activos subieron alrededor de un 30 por ciento (ilustrativo). Normalizada, la tasa de incidentes por 1.000 sesiones era más o menos plana. Segundo, 90 de los registros adicionales estaban vinculados a un incidente padre, una interfaz fallida con un sistema de laboratorio, así que el número de fallos distintos aumentó solo en un puñado. Tercero, la mezcla de prioridades cambió: la proporción de la prioridad más alta era del 2 por ciento el mes anterior y ahora del 7 por ciento. La tasa de reclasificación también se había duplicado, y una muestra de 20 registros mostró que alrededor de la mitad de las prioridades altas se habían bajado al cierre.

El equipo toma tres decisiones. Informan por separado los incidentes padre y los registros vinculados. Añaden las sesiones activas al informe como denominador. Celebran una sesión de media hora con el centro de servicios y los responsables clínicos para aplicar la matriz de impacto y urgencia a los registros muestreados, lo que muestra que "una clínica no puede dar citas a los pacientes" había sido tratado como medio por algunos agentes y como alto por otros. La matriz recibe dos ejemplos clínicos por celda.

El riesgo de manipulación que detectan es silencioso. Un gerente había pedido a los agentes que evitaran la prioridad 1 para el sistema de citas porque cada una desencadenaba una revisión, así que los registros se abrían con una prioridad menor y se subían más tarde, o no se subían. La tasa de reclasificación y la revisión por muestreo expusieron el patrón. El equipo acuerda que las revisiones son para aprender, publica esa declaración y sigue como barrera de protección la proporción de incidentes abiertos por debajo de la prioridad de cierre. La concentración de categorías también muestra el fallo de la interfaz en lo alto de la lista, así que se abre un registro de problema y se programa una corrección con el equipo de la interfaz.

## Perspectiva por sector

**Startup.** El volumen es pequeño y el equipo conoce cada incidente, así que las tasas y las matrices pueden parecer pesadas. Mantén un recuento sencillo por servicio y una lista corta de categorías, y escribe en una página qué cuenta como incidente. Vigila las repeticiones, porque un equipo pequeño puede eliminar rápido un fallo repetido y recuperar tiempo.

**Pequeña empresa.** El centro de servicios puede ser una sola persona que usa una herramienta alojada. Usa los informes estándar de la herramienta, mantén la prioridad en pocos niveles con una regla sencilla de impacto y urgencia y comprueba que las solicitudes no se cuentan como incidentes. Compara mes con mes con notas sobre los cambios, como personal nuevo o software nuevo.

**Gran empresa.** Muchos servicios, proveedores y centros hacen de la coherencia la cuestión principal. Acordad una matriz de impacto y urgencia, un esquema de categorías de profundidad limitada y una regla de deduplicación, y dejad que los equipos locales añadan etiquetas sin cambiar el esquema compartido. Normaliza por servicio y revisa las tendencias con gráficos de control y anotaciones. Los incidentes causados por proveedores necesitan una definición compartida en los contratos (véase el tema 5.1, Métricas de SLA, OLA y XLA).

**Gobierno y sector público.** Los incidentes pueden conllevar obligaciones de notificación, necesidades de auditoría e interés público, en particular donde los servicios afectan a los derechos o a la seguridad de los ciudadanos. Documenta la matriz de prioridades y el esquema de categorías, conserva un rastro de auditoría de los cambios de prioridad y ten cuidado con cualquier recuento publicado, ya que la información pública puede crear una fuerte presión sobre cómo se escriben los registros. Los datos de uso pueden estar limitados por normas de privacidad, así que indica el denominador que puedes usar legítimamente (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es la gestión de la demanda. Los incidentes consumen tiempo cualificado, interrumpen el trabajo planificado y perturban a los usuarios. Entender el volumen, la prioridad y las repeticiones permite a una organización eliminar causas, dotar de personal según la demanda real y mostrar a los líderes dónde rendiría el trabajo de fiabilidad.

El costo tiene tres partes. La puesta en marcha abarca definir incidente y solicitud, acordar la matriz de prioridades y el esquema de categorías y vincular los datos de uso a los servicios. El costo de operación es el esfuerzo de mantener limpios los registros, una revisión mensual por muestreo y una persona que mantenga el informe. Un tercer costo es el tiempo para actuar sobre los hallazgos, que es de donde viene la mayor parte del retorno, así que planifica capacidad para ello.

El retorno se describe mejor como patrones que puedes medir tú mismo. Incluyen menos repeticiones tras el trabajo de problemas, menos tiempo dedicado a disputas de prioridad, menos escalados sorpresa y un mejor ajuste entre la dotación y la demanda. Evita prometer una reducción porcentual de incidentes; depende del servicio, del punto de partida y del trabajo realizado. El costo total de propiedad es sobre todo tiempo de las personas, así que cuéntalo y compáralo con el tiempo que consumen actualmente los incidentes repetidos.

## Antipatrones y trampas

- **Informar un recuento en bruto como una puntuación de salud.** El uso, el cambio y el comportamiento de notificación lo mueven. Muestra juntos las tasas normalizadas, los recuentos en bruto y las anotaciones.
- **Metas de menos incidentes.** Premian la supresión y el etiquetado erróneo. Fija metas de reducción de repeticiones y de impacto en los clientes, y conserva el recuento de incidentes como información.
- **Contar solicitudes como incidentes.** El volumen sube y el servicio parece peor de lo que es. Separa los tipos de registro e informa cada uno.
- **Prioridad de elección libre.** La prioridad se convierte en negociación y la mezcla pierde sentido. Usa una matriz publicada y muestrea para comprobar la coherencia.
- **Un árbol de categorías que nadie usa.** La gente elige la primera coincidencia y "otros" crece. Mantenlo corto, revisa "otros" cada mes y poda lo que no se use.
- **Contar cada ticket vinculado como un fallo distinto.** Una sola caída domina el mes. Informa los incidentes padre y el número de registros vinculados.
- **Clasificar agentes o equipos por recuentos de incidentes.** Los recuentos por persona reflejan la asignación del trabajo y los hábitos con los tickets. Agrega a servicios y revisa patrones, no personas.
- **Ignorar las repeticiones.** El mismo fallo se arregla una y otra vez y nadie es dueño de la causa. Vincula las repeticiones a registros de problemas y asigna un responsable.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y recuento | La gente discrepa sobre qué es un incidente; los recuentos provienen de exportaciones ad hoc | Algunos equipos separan las solicitudes de los incidentes; las reglas difieren | Una definición escrita, un filtro y una regla de deduplicación para todos los equipos | Cambios de definición registrados y mostrados en los gráficos de tendencia; seguimiento de la proporción de registros sin categoría | Definiciones revisadas con proveedores y clientes y revisadas cuando dejan de informar decisiones |
| Normalización e interpretación | Solo recuentos en bruto | Datos de uso usados por unos pocos servicios | Una medida de uso con nombre por servicio, de una fuente aparte | Gráficos de control con anotaciones usados en las revisiones | Datos de uso, de cambio y de incidentes vinculados entre equipos y proveedores para explicar la demanda |
| Práctica de prioridad | Prioridad elegida a ojo | Existe una matriz en algunos equipos | Una matriz con ejemplos, mostrada donde se elige la prioridad | Mezcla y tasa de reclasificación revisadas y muestreadas cada mes | Matriz ajustada con clientes y responsables clínicos o de negocio a medida que cambian las condiciones |
| Repeticiones y patrones | Repeticiones advertidas de memoria | Listas de categorías revisadas ocasionalmente | Tasas de repeticiones y de reaperturas informadas cada mes con una ventana declarada | Grupos de repeticiones vinculados a registros de problemas con responsables y fechas | Eliminación de causas entre equipos y proveedores financiada y seguida hasta una demanda reducida |

## Lista de verificación

- [ ] Una definición escrita separa los incidentes de las solicitudes, las alertas y los problemas.
- [ ] Los incidentes padre y los registros vinculados se informan por separado.
- [ ] Cada incidente se atribuye a un servicio del catálogo de servicios.
- [ ] Cada servicio tiene una medida de uso con nombre de una fuente distinta de la herramienta de incidentes.
- [ ] Los informes muestran el recuento en bruto, la tasa normalizada y las anotaciones de versiones y campañas.
- [ ] Se usa un gráfico de control antes de que nadie reaccione a un cambio en el volumen semanal.
- [ ] La prioridad se deriva de una matriz de impacto y urgencia publicada con ejemplos.
- [ ] La mezcla de prioridades y la tasa de reclasificación se revisan juntas cada mes.
- [ ] La lista de categorías es corta, y se sigue la proporción de registros "otros" y sin categoría.
- [ ] Las tasas de repeticiones y de reaperturas usan ventanas declaradas y se informan por separado.
- [ ] Los grupos de repeticiones se vinculan a registros de problemas con un responsable.
- [ ] Ningún informe clasifica a agentes individuales por recuentos de incidentes.

## Prompts de IA

**Comprueba si una definición de volumen de incidentes es ambigua.**

```text
Contamos el volumen de incidentes de [service or team] desde [ITSM tool]. Nuestro
filtro actual es [describe record types, statuses, and exclusions] y nuestro
periodo es [period]. Revisa la definición en busca de ambigüedades, incluido
cómo se tratan las solicitudes, los duplicados, los tickets fusionados y los
registros cancelados. Sugiere una regla escrita clara y una lista corta de
ejemplos que zanjen los desacuerdos. No inventes valores de referencia. Enumera
tus supuestos y las preguntas que debería responder para completar la
definición.
```

**Diseña una tasa normalizada de incidentes.**

```text
Para el servicio [service name] quiero una tasa de incidentes normalizada por
el uso. Las medidas de uso disponibles son [list, for example active users,
sessions, transactions] de [source]. Compara las opciones, di cuál encaja
mejor y por qué, y describe qué podría distorsionar cada una. Propón cómo
mostrar en un gráfico el recuento en bruto, la tasa y las anotaciones de
[events such as releases or campaigns]. No inventes cifras ni umbrales. Enumera
tus supuestos.
```

**Revisa una matriz de impacto y urgencia.**

```text
Esta es nuestra matriz de prioridades: [paste impact levels, urgency levels,
and the resulting priorities], y estos son [number] incidentes de ejemplo
anonimizados: [paste short descriptions]. Aplica la matriz a cada ejemplo,
señala dónde dos lectores podrían llegar a prioridades distintas y sugiere una
redacción o ejemplos que reduzcan el desacuerdo. Identifica formas en que la
matriz podría manipularse. No inventes metas de respuesta ni valores de
referencia. Enumera tus supuestos.
```

**Analiza categorías y repeticiones para encontrar candidatos de mejora.**

```text
Tengo registros de incidentes de [period] con estos campos: [list fields, for
example service, category, CI, opening time, closing time, reopen flag]. Describe
un método para encontrar las categorías principales, para separar las
reaperturas de las repeticiones usando una ventana de [window] y para elegir
[number] candidatos a investigación de problemas. Explica cómo comprobar la
existencia de categorías comodín y de registros casi duplicados. No inventes
patrones en datos que no te he mostrado. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una métrica relacionada y la barrera de protección que debe acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema de métricas editado mantiene completos sus relojes, sus vectores de manipulación y sus barreras de protección.

## Puntos clave

- El volumen de incidentes refleja el uso, el cambio y el comportamiento de notificación tanto como la calidad, así que normalízalo y anótalo.
- Lee la prioridad como una mezcla, derívala de una matriz de impacto y urgencia publicada y vigila la tasa de reclasificación.
- Informa por separado los incidentes padre y los registros vinculados para que una sola caída no parezca un mes de trabajo rutinario.
- Las repeticiones y las reaperturas son las señales más útiles, porque apuntan a causas y a correcciones que no se sostuvieron.
- Agrega a servicios y equipos, nunca a agentes individuales, y empareja cada métrica con una barrera de protección.
- Usa gráficos de control y vistas de Pareto para decidir dónde mirar, y da luego a cada grupo un responsable y capacidad.

## Referencias y lecturas complementarias

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
