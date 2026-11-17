# Plazo de entrega, tiempo de ciclo y eficiencia del flujo

**El plazo de entrega, el tiempo de ciclo y la eficiencia del flujo solo significan algo cuando cada uno tiene un inicio y un final escritos, una distribución en lugar de un promedio y una visión de la espera que ocupa la mayor parte del tiempo transcurrido.**

## Resumen y motivación

Casi todos los equipos quieren saber cuánto tarda el trabajo. La pregunta parece simple y provoca discusiones, porque "cuánto" depende de quién pregunta y de dónde arranca el cronómetro. Un cliente cuenta desde el momento en que lo pidió. Un desarrollador cuenta desde el momento en que tomó el trabajo. Un gerente de operaciones cuenta desde el momento en que el ticket se asignó a una cola. Los tres tienen razón sobre su propio reloj, y los tres dan números distintos para la misma pieza de trabajo.

El [plazo de entrega](https://en.wikipedia.org/wiki/Lead_time) es el tiempo transcurrido entre la llegada de una solicitud y su satisfacción, visto desde el lado de quien la hizo. El [tiempo de ciclo](https://en.wikipedia.org/wiki/Cycle_time) es el tiempo transcurrido entre el momento en que el equipo se compromete con una pieza de trabajo y el momento en que la termina, visto desde el lado del equipo que la realiza. La diferencia entre ambos es el tiempo que la solicitud esperó antes de que el equipo empezara. La eficiencia del flujo es la proporción del tiempo transcurrido en la que alguien estuvo realmente trabajando en el elemento, frente al tiempo en que el elemento esperaba. Si un elemento tardó 10 días de principio a fin y se trabajó en él durante 1 día, su eficiencia del flujo es del 10 por ciento. El tiempo de contacto es la parte de trabajo. El tiempo de espera es todo lo demás.

El [desarrollo de software lean](https://en.wikipedia.org/wiki/Lean_software_development) y la Guía Kanban trasladaron estas ideas de la manufactura al trabajo del conocimiento. Las prácticas de ITIL hablan de tiempo de resolución, tiempo de cumplimiento y metas de nivel de servicio, y los equipos ágiles hablan de tiempo de ciclo y elementos de trabajo. Este tema ofrece un único conjunto de definiciones que resiste cuando un incidente, una solicitud, un cambio y una historia comparten una reunión.

El tiempo transcurrido tiene una propiedad que sorprende a la gente la primera vez que lo mide. En la mayor parte del trabajo del conocimiento y del trabajo de servicio, el elemento pasa la mayor parte de su vida esperando: una decisión, un revisor, un entorno, un proveedor, una ventana de mantenimiento o, sencillamente, una persona ocupada con otra cosa. Hacer visible esa espera es lo más útil que hacen estas métricas. Un equipo que no ve su tiempo de espera tiende a intentar mejorar trabajando más rápido, lo que tiene poco efecto en un sistema donde el 90 por ciento del tiempo transcurrido se pasa en colas. El comportamiento de las colas se trata en profundidad en el tema 2.3, Trabajo en curso y teoría de colas, y la vista completa del flujo de valor está en el tema 2.4, Métricas del flujo de valor.

Las medidas de tiempo se informan como percentiles, como la mediana y el [percentil](https://en.wikipedia.org/wiki/Percentile) 85 o 95, por las razones del tema 1.6, Alfabetización estadística para métricas de servicio. Las marcas de tiempo en bruto provienen de las fuentes del tema 1.5, Fuentes de datos e instrumentación. Las medidas de flujo de trabajo en curso, rendimiento y antigüedad del elemento de trabajo están en el tema 2.1, Medidas de flujo, y la medida DORA del plazo de entrega de cambios está en el tema 2.8, Métricas DORA. Este tema cubre las propias medidas de tiempo: cómo definirlas para que sean comparables, dónde arrancan y se detienen sus relojes y cómo dejar al descubierto la espera que contienen.

## Principios clave

- **Nombra el reloj antes de leer el número.** Toda medida de tiempo tiene un evento de inicio, un evento de fin y una lista de exclusiones. Una cifra sin ellos es una opinión.
- **El plazo de entrega pertenece al cliente, el tiempo de ciclo pertenece al equipo.** Conserva ambos y etiqueta siempre cuál muestra un gráfico, porque la brecha entre ellos es en sí misma una señal.
- **Informa distribuciones, nunca solo una media.** La mediana describe el elemento típico. Un percentil alto describe el riesgo que el cliente realmente asume.
- **La espera es el hallazgo principal.** La eficiencia del flujo suele ser baja, y la respuesta es eliminar colas y traspasos, no pedir a la gente que se apresure.
- **Los estados de pausa son decisiones de diseño.** Si el reloj puede detenerse moviendo un elemento a un estado de "espera", ese estado se usará, así que cuenta con qué frecuencia se usa y quién lo usa.
- **Compara un elemento con los de su misma clase.** Un incidente, una solicitud estándar, un cambio y una funcionalidad tienen formas distintas. Segmenta por tipo de trabajo antes de comparar nada.
- **Mide sistemas, no personas.** Las medidas de tiempo describen cómo fluye el trabajo por un equipo o servicio. Nunca son una clasificación de individuos.

## Definiciones de métricas

La tabla siguiente usa un único vocabulario para los elementos de trabajo ágiles y los registros de ITIL. "Elemento de trabajo" significa cualquier registro que se mueve por un flujo de trabajo: una historia, una tarea, un incidente, una solicitud de servicio, un cambio o un registro de problema. Todas las duraciones son tiempo natural transcurrido salvo que se indique otra cosa, y cada una se informa como la mediana y un percentil alto.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Plazo de entrega | Tiempo transcurrido desde la llegada de una solicitud hasta su entrega al solicitante | marca de tiempo de entrega menos marca de tiempo de llegada de la solicitud, por elemento de trabajo; el reloj arranca cuando se registra la solicitud y se detiene cuando el solicitante puede usar el resultado; los elementos aún abiertos y los cancelados antes de la entrega se excluyen y se cuentan por separado | días u horas | Historial de la herramienta ITSM o del gestor de incidencias | Gestión de solicitudes de servicio; gestión de incidentes; habilitación de cambios | Plazo de entrega en el tablero del equipo; tiempo de solicitud a versión | Semanal, revisado mensualmente |
| Tiempo de ciclo | Tiempo transcurrido desde el momento en que el equipo empieza el trabajo hasta el momento en que lo termina | marca de tiempo de fin menos marca de tiempo de inicio, por elemento de trabajo; el reloj arranca en el primer paso a un estado de trabajo activo y se detiene en el primer paso a un estado de hecho; se excluye el tiempo anterior al inicio y posterior al estado de hecho | días u horas | Historial de estados del gestor o del tablero | Gestión de incidentes; gestión de solicitudes de servicio; habilitación de cambios | Tiempo de ciclo (véase el tema 2.1, Medidas de flujo) | Semanal |
| Tiempo de contacto | Tiempo en que una persona o una automatización trabaja activamente en el elemento | suma de los intervalos que el elemento pasa en estados clasificados como trabajo activo; se excluyen los estados de espera, de bloqueo y de cola | horas | Historial de estados del gestor, con cada estado clasificado como activo o de espera | Gestión de incidentes; gestión de solicitudes de servicio | Tiempo de proceso en un mapa del flujo de valor | Muestra mensual |
| Tiempo de espera | Tiempo en que el elemento está en una cola, bloqueado o en pausa | tiempo de ciclo menos tiempo de contacto, por elemento de trabajo; no aplicable a elementos sin un inicio registrado | días u horas | Historial de estados del gestor | Gestión de incidentes; gestión de niveles de servicio | Tiempo de espera o tiempo bloqueado en un tablero | Mensual |
| Eficiencia del flujo | Proporción del tiempo de ciclo dedicada a trabajo activo | suma del tiempo de contacto / suma del tiempo de ciclo, de los elementos terminados en el periodo; los elementos con un historial de estados incompleto se excluyen y se cuentan por separado | porcentaje | Historial de estados del gestor | Mejora continua; gestión de solicitudes de servicio | Eficiencia del flujo de la práctica lean | Mensual |
| Proporción de pausa del reloj | Proporción del tiempo de ciclo durante la cual el reloj formal del servicio estuvo en pausa | suma de las duraciones de pausa / suma del tiempo de ciclo, de los elementos terminados en el periodo; las pausas son los estados definidos en las reglas de reloj escritas | porcentaje | Historial de estados de la herramienta ITSM | Gestión de niveles de servicio; gestión de incidentes | Tiempo de columna bloqueada o en espera | Mensual |

El inicio del reloj del tiempo de ciclo es una decisión del equipo que debe quedar escrita. El reloj formal de un acuerdo de nivel de servicio (SLA) suele pausarse mientras un elemento espera al cliente, por lo que este tema informa la proporción de pausa en lugar de descartar ese tiempo. El tiempo de contacto se infiere de los estados, así que su exactitud depende de lo bien que los estados describan el trabajo.

## Recomendaciones

### Define los relojes

**1. Escribe el inicio y el final de cada reloj.** Para el plazo de entrega, el inicio es la llegada de la solicitud, tal como la registra el primer sistema que toca el solicitante, y el final es el momento en que el solicitante puede usar el resultado. Para el tiempo de ciclo, el inicio es el primer paso a un estado activo y el final es el primer paso a un estado de hecho. Pon ambos en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) y muestra la definición bajo cada gráfico.

**2. Acuerda qué significa "hecho" para cada tipo de trabajo.** Un cambio está hecho cuando se ejecuta en producción y está verificado, no cuando se fusiona el código. Un incidente está hecho cuando se restablece el servicio para el usuario, no cuando un trabajo masivo cierra el ticket el viernes. Una solicitud está hecha cuando el solicitante tiene lo que pidió. Si "hecho" difiere entre equipos, los tiempos de ciclo no pueden compararse entre ellos.

**3. Conserva tanto el plazo de entrega como el tiempo de ciclo, y vigila la brecha.** La diferencia entre ambos es la espera de compromiso: el tiempo que una solicitud permanece antes de que el equipo empiece. Un tiempo de ciclo corto junto a un plazo de entrega largo dice que el equipo trabaja con eficiencia en lo que empieza y que la entrada es el cuello de botella. Un tiempo de ciclo largo junto a un plazo de entrega corto dice que las solicitudes se aceptan rápido y luego se estancan dentro del equipo.

### Informa el tiempo con honestidad

**4. Usa percentiles y di cuáles.** Informa la mediana y el percentil 85 o 95, por ejemplo "la mitad de los elementos terminó en 4 días y el 85 por ciento en 11 días". Ese enunciado es también un pronóstico: un elemento nuevo tiene alrededor de un 85 por ciento de probabilidad de terminar en 11 días si el sistema se mantiene igual. Una media no puede darte esa frase, y se mueve mucho cuando aparece un solo valor atípico (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**5. Traza cada elemento, y no solo el resumen.** Un diagrama de dispersión del tiempo de ciclo frente a la fecha de fin muestra la forma del sistema de un vistazo: grupos, una deriva lenta al alza, un salto repentino tras un cambio de proceso. Los números de resumen van junto al gráfico. Una herramienta que solo ofrece una línea de promedio elimina la información que más necesita el equipo.

**6. Segmenta por tipo de trabajo y por clase de servicio.** Un incidente urgente, una solicitud estándar, un cambio planificado y una historia de investigación tienen tiempos esperados distintos. Divide los datos por tipo, y por prioridad cuando la prioridad cambie el modo de tratar el trabajo, antes de buscar patrones. Las poblaciones mixtas producen una distribución amplia que no describe la experiencia de nadie.

### Deja al descubierto la espera

**7. Clasifica cada estado como activo, de espera o hecho.** Es el trabajo que hace posible la eficiencia del flujo. "En desarrollo" y "en revisión con un revisor trabajando" son activos. "A la espera de revisión", "a la espera de aprobación", "bloqueado" y "a la espera del cliente" son de espera. Revisa la clasificación con el equipo, porque las etiquetas de un flujo de trabajo rara vez cuentan toda la verdad, y un estado llamado "en curso" suele esconder un elemento que nadie ha tocado en una semana.

**8. Calcula la eficiencia del flujo como diagnóstico, no como meta.** Calcúlala sobre una muestra o sobre todos los elementos terminados, y úsala para encontrar dónde vive la espera: qué estado retiene más tiempo los elementos y qué traspaso lo precede. Espera números bajos y no fijes un objetivo como "llegar al 40 por ciento". Subir el número reetiquetando estados de espera como activos es fácil e inútil, y las ganancias reales vienen de eliminar la propia cola (véase el tema 2.4, Métricas del flujo de valor).

**9. Cuenta por separado el tiempo bloqueado y el pausado.** Sigue con qué frecuencia entran los elementos en un estado bloqueado o pausado, cuánto permanecen y cuál fue el motivo. Una lista corta de motivos de bloqueo recurrentes, como esperar una aprobación, un entorno o un proveedor, te dice qué arreglar y con quién hablar. Informa la proporción de pausa junto a cualquier resultado de nivel de servicio que excluya el tiempo pausado (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

### Usa bien los números

**10. Controla la cola para controlar el tiempo.** El tiempo que se tarda en atravesar un sistema crece cuando crece el trabajo en curso, una relación expuesta en la [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law), que relaciona el número medio de elementos en el sistema, la tasa de llegada o de finalización y el tiempo medio que cada elemento pasa en él. Limitar el trabajo en curso es, por tanto, la palanca más directa sobre el tiempo de ciclo (véase el tema 2.3, Trabajo en curso y teoría de colas). Cambiar la meta de la métrica sin cambiar la cola solo cambia el incentivo para informar mal.

**11. Usa las distribuciones del tiempo de ciclo para los pronósticos y para las metas de nivel de servicio.** Si el tiempo de ciclo en el percentil 85 de las solicitudes estándar es de 6 días, un compromiso de 5 días se incumplirá a menudo, y un compromiso de 8 días se cumplirá con holgura. Basa una meta interna en lo que el sistema ha hecho y luego trabaja sobre el sistema para mover la distribución (véanse el tema 3.5, Métricas de cumplimiento de solicitudes de servicio, y el tema 4.3, Métricas de habilitación de cambios).

**12. Trata una definición cambiada como un evento.** Si cambia el inicio o el final de un reloj, márcalo en cada gráfico y reexpresa el historial a partir de los eventos en bruto cuando sea posible. Sin esa disciplina, una línea de tendencia muestra el efecto de un cambio de definición como si fuera una mejora o un empeoramiento (véase el tema 1.5, Fuentes de datos e instrumentación).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Plazo de entrega | Retrasar la creación del registro de la solicitud para que el reloj arranque tarde; cerrar y reabrir elementos para reiniciar el reloj; dividir una solicitud en muchas diminutas | Comparar los registros de solicitudes con el primer contacto por correo o chat en una muestra; seguir la tasa de reaperturas; seguir el tamaño y el número de elementos por solicitud |
| Tiempo de ciclo | Arrancar el reloj tarde moviendo los elementos a "en curso" solo al final; dejar elementos fuera del tablero hasta que estén casi hechos; cortar el trabajo en piezas que no aportan valor por sí solas | Antigüedad del elemento de trabajo de los elementos abiertos (véase el tema 2.1, Medidas de flujo); comprobar que los elementos hechos son utilizables por el solicitante; comparar el plazo de entrega con el tiempo de ciclo |
| Tiempo de contacto | Clasificar estados de espera como activos o registrar actividad para parecer ocupado | Revisar cada trimestre la clasificación de estados con el equipo; muestrear elementos y comparar la actividad registrada con commits, comentarios y calendarios |
| Tiempo de espera | Crear estados nuevos para que el tiempo de espera caiga en un hueco sin medir; mover elementos en espera a un estado fuera del flujo de trabajo | Contar los estados y transiciones sin documentar (véase el tema 1.5, Fuentes de datos e instrumentación); confirmar en una muestra que el tiempo de ciclo es igual al tiempo de contacto más el de espera |
| Eficiencia del flujo | Reclasificar la espera como activa; seleccionar solo elementos rápidos para la muestra; terminar primero los elementos fáciles para elevar la proporción | Clasificación de estados fija con un registro de cambios; calcularla sobre todos los elementos terminados; informarla con el tiempo de ciclo en el percentil 85 y la antigüedad de los elementos abiertos |
| Proporción de pausa del reloj | Pausar el reloj formal del servicio por motivos que no dependen del cliente, como los traspasos internos, para cumplir el SLA | Auditar los motivos de pausa en una muestra; informar lado a lado el tiempo transcurrido y el tiempo de SLA; revisar la visión propia del cliente sobre el tiempo de resolución (véase el tema 5.1, Métricas de SLA, OLA y XLA) |

Una lectura sana muestra un plazo de entrega y un tiempo de ciclo que se mueven juntos, una brecha entre ellos que el equipo sabe explicar, un percentil 85 que es un múltiplo estable de la mediana y una eficiencia del flujo baja pero creciente a medida que se eliminan colas concretas. Las señales de alarma son una mediana que mejora mientras el percentil alto empeora, una proporción de pausa que crece al final de cada mes y una eficiencia del flujo que salta sin ningún cambio en el modo de trabajar. Cuando un número mejora, alguien debería poder señalar el cambio en el trabajo que lo explica. Una mejora impulsada por la manipulación normalmente no superará esa prueba. La psicología más amplia se trata en el tema 1.2, Ley de Goodhart y psicología de las métricas.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Plazo de entrega desde la vista del solicitante | Coincide con lo que siente el cliente; difícil de mejorar cambiando etiquetas internas | El evento de inicio está fuera del control del equipo y puede estar mal registrado |
| Tiempo de ciclo desde el compromiso del equipo | Bajo el control del equipo; fácil de calcular a partir del historial del tablero | Ignora el retraso de entrada; un equipo puede parecer rápido mientras las solicitudes esperan |
| Tiempo transcurrido (reloj natural) | Sencillo, comparable y coincide con la experiencia del cliente | Incluye noches y fines de semana, lo que puede confundir a equipos con horarios distintos |
| Reloj de horario laboral | Encaja con niveles de servicio con personal y patrones de guardia | Necesita un calendario por equipo; oculta la espera real que vive el cliente |
| Eficiencia del flujo como proporción | Muestra cuánto del tiempo es espera en un único número intuitivo | Depende de la clasificación de estados; fácil de inflar; puede malinterpretarse como una meta |
| Informes por percentiles | Muestran el riesgo y respaldan los pronósticos | Necesitan suficientes elementos por periodo; más difíciles de leer para algunas audiencias que un promedio |

El consejo práctico es empezar con el tiempo transcurrido, añadir una vista de horario laboral solo donde un nivel de servicio lo exija e informar tanto el plazo de entrega como el tiempo de ciclo en un percentil alto. Usa la eficiencia del flujo como punto de partida de una conversación en una revisión, con la clasificación de estados sobre la mesa, y evita ponerla en un cuadro de mando.

## Preguntas para conversar con tu equipo

**1. ¿Dónde arranca nuestro reloj del plazo de entrega, y dónde cree el cliente que arranca?**
Toma tres solicitudes recientes y síguelas desde el primer contacto hasta la entrega. Marca el momento en que la solicitud se registró en el sistema de registro. Compara la brecha entre el primer contacto y la creación del registro. El facilitador debe buscar colas ocultas en el correo, el chat o una bandeja compartida que nunca aparecen en una métrica.

**2. ¿Qué significa "hecho" para cada tipo de trabajo que manejamos?**
Enumera los tipos de trabajo, como incidentes, solicitudes, cambios e historias, y pide el evento de fin de cada uno. Pregunta si el solicitante estaría de acuerdo en que el trabajo estaba terminado en ese momento. Las diferencias de opinión señalan un reloj que se detiene demasiado pronto. Acordad un evento de fin por tipo y escribidlo.

**3. ¿Cuáles de nuestros estados son de espera, y cuánto tiempo permanecen en ellos los elementos?**
Pon el flujo de trabajo en una pared y marca cada estado como activo o de espera. Pide el tiempo típico en cada estado de espera con los datos del último mes. El mayor estado de espera suele ser una sorpresa para alguien. Elegid una cola para examinarla más de cerca el mes próximo.

**4. ¿Qué percentil prometemos, y qué ha hecho realmente el sistema?**
Muestra la distribución de los tiempos de ciclo del último trimestre con la mediana, el percentil 85 y el percentil 95. Pregunta qué compromiso asume actualmente el equipo con los clientes y dónde cae en la distribución. Discutid el costo de prometer un tiempo más rápido del que el sistema ha entregado. Decidid un compromiso que el equipo pueda cumplir por sus propios motivos.

**5. ¿Quién puede pausar el reloj, y por qué?**
Enumera los estados de pausa y de espera, las personas que pueden usarlos y los motivos declarados. Lee una muestra de elementos pausados y pregunta si el cliente era realmente la causa. Discutid qué ocurriría si la proporción de pausa se mostrara en el mismo gráfico que el resultado del SLA. El facilitador debe mantener un tono de curiosidad, ya que los estados de pausa suelen existir por motivos legítimos que nunca se escribieron.

**6. Si la eficiencia del flujo se duplicara el próximo trimestre, ¿qué habríamos cambiado en cómo se mueve el trabajo?**
Pide al grupo que nombre colas, traspasos, aprobaciones o tamaños de lote concretos que tendrían que cambiar. Si las respuestas son generales, como "trabajar más" o "comunicarnos mejor", el número aún no está conectado con ninguna acción. Elegid un cambio concreto, predecid su efecto en el tiempo de espera de un estado con nombre y acordad cuándo comprobarlo.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen el reloj del tiempo de ciclo y ven su detalle en el tablero. Ganan más clasificando los estados con honestidad, limitando el trabajo en curso y leyendo el diagrama de dispersión en sus propias retrospectivas. Deben resistir la presión de dividir el trabajo en piezas artificialmente pequeñas que terminan rápido y no entregan nada, y deben mostrar la antigüedad de los elementos abiertos junto a los tiempos de ciclo completados (véase el tema 2.1, Medidas de flujo).

### Equipos de servicio y operaciones

Los equipos de servicio trabajan con registros que llevan relojes formales de nivel de servicio, y sus estados de pausa son donde el tiempo transcurrido y el tiempo de SLA divergen. Deben informar ambos relojes, segmentar por tipo y prioridad, y registrar el motivo de cada pausa. Los equipos de operaciones son también los propietarios naturales de las colas de aprobaciones, ventanas de mantenimiento y respuestas de proveedores, que a menudo dominan el tiempo de espera que ven los equipos de producto (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio).

### Liderazgo y gobernanza

Los líderes piden el plazo de entrega porque es el número más cercano a lo que vive el cliente. Deben esperar una definición, una distribución y una segmentación con cada cifra, y deben preguntar dónde está la espera antes de preguntar por qué la gente es lenta. Las metas para estas medidas funcionan mejor cuando se aplican a un servicio o a un flujo de valor con un responsable con nombre, y cuando se fijan a partir de lo que el sistema ha entregado. Una meta aplicada a un promedio invita a la reclasificación y a los juegos con el reloj.

### Clientes y usuarios

Los clientes viven el plazo de entrega, incluida toda la espera antes de que empiece el trabajo y toda la espera después de que el equipo cree haber terminado. Necesitan una estimación honesta expresada como un rango, como "la mayoría de las solicitudes de este tipo se resuelven en una semana, y casi todas en dos", y necesitan saber cuándo se aplicó una pausa porque el equipo los estaba esperando. Los informes a los clientes deben indicar qué reloj usan (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional gestiona un centro de servicios, un equipo de infraestructura y un equipo de aplicaciones que da soporte al personal clínico. Todos los números de este ejemplo son ilustrativos.

El centro de servicios informa de que las solicitudes de acceso estándar cumplen su meta de 5 días laborables el 94 por ciento de las veces, y sin embargo los jefes de planta siguen quejándose de que el acceso tarda "unas dos semanas". El jefe de operaciones de servicio pide al equipo que mida el plazo de entrega y el tiempo de ciclo de estas solicitudes durante un trimestre, usando días naturales transcurridos del historial de estados en bruto en lugar del temporizador del SLA.

El resultado para 400 solicitudes (ilustrativo) es una mediana del tiempo de ciclo de 3 días y un percentil 85 de 9 días. El plazo de entrega, medido desde el momento en que el jefe envió el primer correo al buzón compartido, tiene una mediana de 8 días y un percentil 85 de 16 días. Dos hallazgos explican la brecha. Primero, las solicitudes esperan una media de 3 días en el buzón antes de que alguien cree un ticket, lo cual es invisible para el SLA. Segundo, el estado "pendiente de aprobación" explica la mayor parte del tiempo de ciclo: de los 9 días del percentil 85, unos 6 días se pasan esperando a que un jefe de departamento apruebe. El tiempo de contacto en una muestra de 30 solicitudes es de aproximadamente media jornada, de modo que la eficiencia del flujo es de alrededor del 8 por ciento (ilustrativo). El resultado del SLA es alto porque el temporizador se detiene durante "pendiente de aprobación" y "a la espera del cliente", así que la proporción de pausa del reloj es del 52 por ciento del tiempo de ciclo.

El equipo toma tres decisiones. Añade un formulario web que crea el ticket en el primer contacto, de modo que el reloj del plazo de entrega arranque donde arranca el del cliente. Acuerda con los jefes de departamento que las aprobaciones para una lista definida de roles estándar queden preautorizadas, con una auditoría trimestral en lugar de una aprobación por solicitud. Y añade la proporción de pausa y el plazo de entrega a la revisión mensual del servicio junto al resultado del SLA. Tras un trimestre, la mediana del plazo de entrega baja a 4 días y el percentil 85 a 8 días (ilustrativo), mientras que el resultado del SLA apenas se mueve.

Durante la revisión el equipo detecta un riesgo de manipulación. Un técnico ha empezado a mover los tickets a "a la espera del cliente" en cuanto se envía un correo de aprobación, algo para lo que no estaba pensado ese estado. La proporción de pausa de ese grupo sube, la auditoría de una muestra de tickets pausados muestra el patrón y el equipo reescribe las reglas del reloj para que solo una petición de información al solicitante pueda pausarlo. La barrera de protección que detectó el problema fue informar la proporción de pausa junto al resultado del SLA, que es el emparejamiento recomendado en este tema.

## Perspectiva por sector

**Startup.** Con un equipo pequeño y pocos traspasos, el tiempo de ciclo es fácil de medir desde el tablero y el plazo de entrega se parece mucho al tiempo de ciclo. Sigue ambos desde el primer día con una clasificación de estados sencilla y mira el diagrama de dispersión cada semana. La eficiencia del flujo suele ser ya alta para tareas pequeñas, así que el principal peligro es una entrada informal que esconde solicitudes en el chat.

**Pequeña empresa.** Una sola persona puede hacer de solicitante, aprobador y ejecutor, y el centro de servicios alojado puede ofrecer solo un temporizador de SLA. Exporta el historial de estados en bruto, calcula tú mismo el tiempo transcurrido y mantén una definición para cada reloj. El hallazgo más útil suele ser cuánto esperan las solicitudes las respuestas de proveedores.

**Gran empresa.** Muchos traspasos entre equipos, proveedores y comités de aprobación hacen que el tiempo de espera sea grande y esté repartido entre organizaciones. Acordad un vocabulario compartido para inicio, fin y pausa, clasificad los estados de forma coherente entre las herramientas ITSM y de ingeniería, y segmentad por tipo de trabajo y clase de servicio. Las comparaciones entre equipos solo tienen sentido cuando las definiciones se alinean, y una consolidación debe construirse a partir de distribuciones, no promediando los promedios de los equipos.

**Gobierno y sector público.** Los tiempos de respuesta legales, las normas de contratación y las cadenas de aprobación crean esperas que el equipo no puede eliminar por sí solo. Registra los relojes impuestos desde fuera por separado de los internos, para que se vea y pueda mejorarse la parte del retraso que la organización controla. Informar públicamente del plazo de entrega, con definiciones claras, genera confianza y deja al descubierto las colas que crea la normativa (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación principal es que las medidas de tiempo convierten una queja vaga ("tarda una eternidad") en un problema localizado ("las solicitudes esperan seis días una aprobación"). Los mismos datos dan a los equipos un pronóstico veraz, de modo que los compromisos con los clientes se basen en la distribución del trabajo pasado y no en la esperanza. También dejan al descubierto dónde acortaría el tiempo transcurrido una inversión en automatización, aprobaciones o personal, que suele ser un lugar distinto de donde la gente espera.

Los costos son modestos cuando las herramientas ya registran los cambios de estado. La puesta en marcha implica acordar las definiciones, clasificar los estados y construir una vista de la distribución y del diagrama de dispersión. Los costos de operación son el tiempo para mantener la clasificación de estados, para auditar los motivos de pausa en una muestra y para celebrar la revisión mensual. Donde falta el historial de estados o no es fiable, la primera inversión es en la instrumentación descrita en el tema 1.5, Fuentes de datos e instrumentación.

El retorno aparece en patrones que un equipo puede medir por sí mismo: un tiempo de ciclo más corto en el percentil alto para un tipo de trabajo, menos escalados por elementos tardíos, menos disputas sobre qué reloj tiene razón y una brecha menor entre el plazo de entrega y el tiempo de ciclo. No esperes una ganancia concreta de una referencia. Los autores de lean y de flujo describen la baja eficiencia del flujo como algo común, pero ninguna cifra publicada debe adoptarse como meta para tu propio trabajo sin tus propios datos. El costo total de propiedad está dominado por el tiempo de las personas, así que cuenta las horas de la persona responsable de la métrica y de los revisores.

## Antipatrones y trampas

- **Informar la media.** Un solo valor atípico largo arrastra el promedio y describe mal al elemento típico. Informa la mediana y un percentil alto, y traza los elementos.
- **Un número para todo el trabajo.** Mezclar incidentes, solicitudes y funcionalidades produce una distribución que no describe nada. Segmenta primero por tipo de trabajo y clase de servicio.
- **Medir solo el reloj del SLA.** Un temporizador que se detiene durante los estados de espera informa un resultado que el cliente nunca vive. Informa el plazo de entrega transcurrido y la proporción de pausa a su lado.
- **Fijar una meta de eficiencia del flujo.** La gente sube la proporción reetiquetando estados. Úsala como diagnóstico y juzga el éxito por el tiempo de espera de colas con nombre.
- **Arrancar el reloj en el lugar equivocado.** Un reloj que empieza en la asignación o en el primer trabajo oculta la cola de entrada. Arranca el plazo de entrega en la solicitud y el tiempo de ciclo en el compromiso, y publica ambos.
- **Comparar equipos por tiempo de ciclo.** Trabajo distinto, estados distintos y definiciones distintas vuelven absurdas las clasificaciones e invitan a la manipulación. Compara un equipo con su propio historial y compara servicios solo cuando las definiciones se alineen.
- **Ignorar los elementos abiertos.** El tiempo de ciclo cuenta solo el trabajo terminado, así que un elemento atascado es invisible hasta que acaba. Sigue la antigüedad de los elementos aún en curso (véase el tema 2.1, Medidas de flujo).
- **Cambiar las definiciones en silencio.** La tendencia registra entonces un cambio en el instrumento. Registra cada cambio y márcalo en el gráfico.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | La gente cita duraciones de memoria; cada persona arranca el reloj de forma distinta | Algunos equipos definen el tiempo de ciclo en su tablero; los equipos ITSM citan el tiempo de SLA | Una definición escrita de plazo de entrega, tiempo de ciclo y pausas usada por todos los equipos | Los cambios de definición se registran y el historial se reexpresa a partir de eventos en bruto | Las definiciones se alinean con proveedores y clientes y se revisan cuando dejan de informar decisiones |
| Informes y análisis | Promedios en una diapositiva, montados a mano | Algunos equipos muestran medianas o un gráfico de la herramienta | Mediana y un percentil alto, con un diagrama de dispersión, segmentados por tipo de trabajo | Distribuciones con seguimiento de su tendencia y revisadas con una cadencia; pronósticos extraídos de ellas | Los datos de flujo de equipos y proveedores se combinan para pronosticar compromisos de extremo a extremo |
| Espera y eficiencia del flujo | La espera no se distingue del trabajo | Existen columnas de bloqueo en algunos tableros | Cada estado clasificado como activo o de espera; eficiencia del flujo calculada sobre todos los elementos terminados | Las mayores colas se examinan y se financian para mejorar; motivos de pausa auditados | Colas, aprobaciones y traspasos rediseñados conjuntamente con los equipos y proveedores que los crean |
| Uso en las decisiones | Números mostrados en una revisión trimestral y sin actuar sobre ellos | Los equipos discuten el tiempo de ciclo en las retrospectivas | Metas de servicio fijadas a partir de la distribución observada | Metas emparejadas con barreras de protección y revisadas por manipulación | Los clientes ven rangos honestos, y las ideas de mejora vienen de todos los que tocan el trabajo |

## Lista de verificación

- [ ] Cada medida de tiempo tiene en el registro de métricas un evento de inicio, un evento de fin y una lista de exclusiones escritos.
- [ ] Se informan tanto el plazo de entrega como el tiempo de ciclo, y cada gráfico indica cuál muestra.
- [ ] "Hecho" está definido para cada tipo de trabajo y acordado con el solicitante.
- [ ] Los resultados se informan como la mediana y un percentil alto, y se trazan los elementos.
- [ ] Los datos se segmentan por tipo de trabajo y, cuando procede, por clase de servicio.
- [ ] Cada estado está clasificado como activo, de espera o hecho, y la clasificación se revisa cada trimestre.
- [ ] Los estados de pausa, quién puede usarlos y sus motivos están escritos y se auditan en una muestra.
- [ ] El tiempo transcurrido y el tiempo de SLA se muestran lado a lado, con la proporción de pausa.
- [ ] La eficiencia del flujo se usa como diagnóstico y no está en un cuadro de mando.
- [ ] Los cambios de definición se registran y se marcan en los gráficos.
- [ ] La antigüedad de los elementos abiertos se revisa junto con los tiempos de ciclo completados.

## Prompts de IA

**Redacta reglas de reloj para un tipo de trabajo.**

```text
Atendemos [work type, for example standard access requests] en [tool or tools].
Los estados del flujo de trabajo son [list of statuses]. Redacta reglas de reloj
escritas para el plazo de entrega y el tiempo de ciclo: el evento que arranca
cada reloj, el evento que lo detiene, qué estados pausan o excluyen tiempo y qué
ocurre con los elementos cancelados y reabiertos. Señala los estados cuyo
significado sea ambiguo y las preguntas que debería responder antes de que las
reglas sean definitivas. No inventes funciones de nuestra herramienta ni
valores de referencia. Enumera tus supuestos.
```

**Clasifica estados como activos o de espera.**

```text
Este es el flujo de trabajo de [team or service]: [statuses with a one-line
meaning for each]. Para cada estado, propón si es trabajo activo, espera o
hecho, y explica por qué. Señala los estados que mezclan trabajo y espera, y
sugiere cómo dividirlos con el menor cambio posible en el flujo de trabajo. Di
cómo cambiaría la clasificación el cálculo de la eficiencia del flujo. No
supongas cuánto tiempo permanecen los elementos en cada estado. Enumera tus
supuestos.
```

**Analiza un conjunto de tiempos de ciclo.**

```text
A continuación hay tiempos de ciclo en [unit] de [number] elementos terminados
de tipo [work type], con fechas de fin: [data]. Describe la distribución usando
la mediana y el percentil [percentile, for example 85th], identifica grupos o
deriva en el tiempo y sugiere preguntas para hacer al equipo sobre los
elementos lentos. Recomienda cuántos elementos necesito antes de que los
percentiles sean fiables y explica el razonamiento. No inventes valores de
referencia ni compares con otras organizaciones. Enumera tus supuestos.
```

**Revisa una métrica en busca de manipulación.**

```text
Informamos [metric, for example flow efficiency] para [team or service],
definida como [definition and clocks]. Las personas pueden influir en ella
mediante [known behaviors, if any]. Enumera formas plausibles de manipular o
malinterpretar el número, una métrica o práctica de barrera de protección
emparejada para cada una y una muestra de registros que debería leer a mano
para comprobarlo. No inventes estadísticas sobre la frecuencia de la
manipulación. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una medida de tiempo y la barrera de protección que debe acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una medida de tiempo editada indica sus relojes, exclusiones y vector de manipulación.

## Puntos clave

- El plazo de entrega es la espera del cliente y el tiempo de ciclo es la espera del equipo, así que conserva ambos y examina la brecha entre ellos.
- Escribe las reglas de inicio, fin y pausa de cada reloj, y trata un cambio de definición como un evento.
- Informa la mediana y un percentil alto, traza los elementos y segmenta por tipo de trabajo antes de comparar nada.
- La eficiencia del flujo suele ser baja porque la mayor parte del tiempo transcurrido es espera, así que úsala para localizar colas y evita convertirla en una meta.
- Muestra la proporción de pausa junto a cualquier resultado de nivel de servicio que excluya el tiempo pausado.
- Reduce el trabajo en curso y elimina traspasos para acortar el tiempo, porque decir a la gente que se apresure no cambia las colas.

## Referencias y lecturas complementarias

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
