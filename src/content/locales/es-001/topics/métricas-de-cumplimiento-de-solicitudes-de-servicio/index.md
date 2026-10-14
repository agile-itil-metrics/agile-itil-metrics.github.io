# Métricas de cumplimiento de solicitudes de servicio

**Mide cuánto tardan las solicitudes rutinarias desde el punto de vista del usuario, cuánto de ese tiempo es espera, qué elementos del catálogo impulsan la demanda y cuánto del trabajo está automatizado, y usa el panorama para rediseñar las solicitudes comunes en lugar de presionar a las personas que las atienden.**

## Resumen y motivación

Una **solicitud de servicio** es una petición rutinaria de un usuario de algo que un servicio está diseñado para ofrecer: una cuenta, el acceso a una carpeta, un portátil, una licencia de software, una información. Se diferencia de un **incidente**, que es una interrupción no planificada de un servicio (véase el tema 3.2, Volumen y prioridad de incidentes), y de un **cambio**, que modifica un servicio y necesita un nuevo juicio sobre el riesgo (véase el tema 4.3, Métricas de habilitación de cambios). En [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 el trabajo lo cubre la práctica de gestión de solicitudes de servicio, y suele describirse como un **modelo de solicitud** repetible: la información necesaria, las aprobaciones, los pasos y el tiempo esperado. ITIL escribe la palabra inglesa "fulfilment" con una sola ele; el cuerpo del original usa "fulfillment" según la ortografía del libro; en español este tema usa "cumplimiento" en ambos casos.

Las solicitudes importan para las métricas porque son demanda predecible. Un incidente es una sorpresa; la solicitud del portátil de un nuevo empleado llega todos los meses y sigue los mismos pasos. Esa previsibilidad hace de las solicitudes el mejor candidato para el diseño, la estandarización y la [automatización de procesos](https://en.wikipedia.org/wiki/Process_automation). También significa que los retrasos rara vez los causa la dificultad. Los causan las colas, las aprobaciones y los traspasos, por lo que la pregunta útil es dónde espera la solicitud, no con qué rapidez teclea nadie.

La unidad de análisis es el **elemento del catálogo**: una cosa con nombre que un usuario puede pedir en el [catálogo de servicios](https://en.wikipedia.org/wiki/Service_catalog). Las medidas por elemento son mucho más útiles que un único número combinado, porque una solicitud de restablecimiento de contraseña y una solicitud de construcción de un servidor tienen relojes distintos, responsables distintos y metas razonables distintas. Un promedio combinado oculta ambos.

Las visiones ágil y de ITIL se encuentran aquí con poca fricción. ITIL pregunta si el servicio entrega el resultado acordado dentro del tiempo acordado. La práctica ágil de flujo pregunta cuánto tarda el trabajo en fluir de la solicitud a hecho, cuánto se queda en colas y cuánto trabajo hay en curso a la vez. Una solicitud es un elemento de trabajo que se mueve por un flujo de trabajo, así que las herramientas de la medición del flujo, como el tiempo de ciclo y la antigüedad del elemento de trabajo, se aplican directamente (véase el tema 2.1, Medidas de flujo). El vocabulario difiere. La aritmética es la misma.

Tres términos se repiten. El **tiempo de cumplimiento** es el tiempo transcurrido desde el momento en que el usuario envía la solicitud hasta el momento en que el usuario confirma, o el sistema registra, que la cosa se entregó. El **tiempo de trabajo efectivo** es el tiempo en que alguien trabaja activamente en la solicitud, y el **tiempo de espera** es todo lo demás, incluidas las aprobaciones y la espera al usuario. La diferencia entre ambos es lo que debe reducir un modelo de solicitud. La **proporción de automatización** es la parte de las solicitudes cumplidas sin que ninguna persona las toque después del envío.

Las medidas de tiempo requieren cuidado. Los tiempos de cumplimiento son asimétricos: la mayoría de las solicitudes terminan rápido y unas pocas tardan mucho. Una media la mueven esas pocas, así que informa la mediana y un [percentil](https://en.wikipedia.org/wiki/Percentile) alto como el 85 o el 95 (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Las metas acordadas con los clientes, como las de un [acuerdo de nivel de servicio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), deben expresarse de la misma manera: "el 85 por ciento de las solicitudes de portátil cumplidas en 5 días laborables" dice más que "promedio de 3 días".

Por último, una advertencia de la psicología de la medición. Cuando se juzga a un equipo por cerrar solicitudes rápido, la forma más barata de mejorar el número es cambiar lo que cuenta como cerrado, o pausar el reloj. La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica plenamente (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Por eso cada métrica siguiente va emparejada con una barrera de protección, y ninguna describe a un agente individual.

## Principios clave

- **Mide por elemento del catálogo.** Cada elemento tiene su propio modelo de solicitud, responsable y meta razonable, por lo que los números combinados engañan.
- **Arranca el reloj cuando el usuario pide y deténlo cuando el usuario tiene la cosa.** Los hitos internos son diagnósticos útiles, pero no son la experiencia del cliente.
- **Separa el tiempo de espera del tiempo de trabajo efectivo.** La brecha entre ambos muestra dónde rinde el rediseño, y rara vez está en el trabajo en sí.
- **Informa distribuciones, no promedios.** Una mediana y un percentil 95 describen lo que viven los usuarios.
- **Trata la demanda como una señal.** El volumen por elemento muestra lo que los usuarios necesitan, lo que es confuso y lo que merece automatización o autoservicio.
- **Automatiza primero lo estable y frecuente.** La proporción de automatización es un resultado de un buen diseño de solicitudes, no una meta que perseguir por sí misma.
- **Mide al equipo y al servicio, nunca a la persona.** Las solicitudes fluyen por sistemas, y la variación entre agentes refleja sobre todo la mezcla de trabajo.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo de cumplimiento de solicitudes | Tiempo transcurrido para entregar una solicitud, mostrado como una mediana y un percentil 95 por elemento del catálogo | el reloj arranca cuando el usuario envía la solicitud y se detiene cuando el usuario confirma la entrega o esta queda registrada; las solicitudes canceladas por el usuario se excluyen; el tiempo de espera al usuario se informa por separado, no se elimina | días laborables u horas | Historial de solicitudes de la herramienta ITSM | Gestión de solicitudes de servicio | Tiempo de ciclo en el tablero del equipo (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Semanal, con tendencia mensual |
| Cumplimiento dentro de la meta | Proporción de solicitudes entregadas dentro de la meta acordada para su elemento del catálogo | solicitudes cumplidas dentro de la meta / solicitudes cumplidas en el periodo; reloj como arriba, los elementos aún abiertos se excluyen y se cuentan en la antigüedad de la lista de pendientes | porcentaje | Historial de solicitudes de la herramienta ITSM; tabla de metas por elemento del catálogo | Gestión de niveles de servicio | Expectativa de nivel de servicio | Mensual |
| Lista de pendientes de solicitudes y su antigüedad | Número de solicitudes abiertas y cuán antiguas son las más antiguas, por elemento del catálogo | solicitudes abiertas al final del periodo (recuento); antigüedad de cada solicitud abierta = fecha del informe menos fecha de envío; informa el recuento, la mediana de la antigüedad y la antigüedad máxima | recuento y días | Cola de solicitudes abiertas de la herramienta ITSM | Gestión de solicitudes de servicio | Trabajo en curso y elementos de trabajo envejecidos (véase el tema 2.3, Trabajo en curso y teoría de colas) | Semanal |
| Tiempo de espera de aprobación | Tiempo que una solicitud pasa esperando una aprobación | el reloj arranca cuando se pide la aprobación y se detiene cuando se concede o se rechaza; las solicitudes sin paso de aprobación se excluyen | horas | Registro de aprobaciones de la herramienta ITSM | Gestión de solicitudes de servicio; habilitación de cambios | Tiempo bloqueado o una columna de "espera" en el tablero | Mensual |
| Volumen de solicitudes por elemento del catálogo | Número de solicitudes enviadas para cada elemento, con su proporción del total de solicitudes | solicitudes enviadas por elemento en el periodo; las solicitudes reenviadas como duplicadas, si se identifican, se excluyen; informa el recuento y la proporción del total | recuento y porcentaje | Registros de solicitudes de la herramienta ITSM | Gestión del catálogo de servicios | Análisis de la demanda para dar forma a la lista de pendientes | Mensual |
| Proporción de automatización | Parte de las solicitudes cumplidas sin ningún paso manual tras el envío | solicitudes cumplidas de extremo a extremo por automatización / solicitudes cumplidas en el periodo; una solicitud tocada por una persona en cualquier paso de cumplimiento se cuenta como manual; las aprobaciones por una persona no cuentan como pasos manuales de cumplimiento si la política las exige | porcentaje | Registros de cumplimiento de la herramienta ITSM y registros de la plataforma de automatización | Gestión de solicitudes de servicio; automatización dentro de la cadena de valor del servicio | Automatización en la definición de terminado | Mensual |
| Tasa de reapertura de solicitudes | Proporción de solicitudes cumplidas que el usuario reabre o vuelve a plantear porque el resultado era erróneo o incompleto | solicitudes reabiertas o replanteadas para el mismo elemento por el mismo usuario dentro de los 7 días siguientes al cumplimiento / solicitudes cumplidas en el periodo; la ventana de 7 días es un ejemplo que el equipo escribe | porcentaje | Historial de solicitudes de la herramienta ITSM | Gestión de solicitudes de servicio | Tasa de retrabajo; escape de defectos | Mensual |

El tiempo de cumplimiento cuenta tiempo laboral solo si el equipo ha acordado un calendario y lo ha registrado; en caso contrario usa horas transcurridas y dilo. La métrica de la lista de pendientes lleva tres números a propósito, porque un recuento solo no dice nada sobre la espera. La definición de la proporción de automatización deja las aprobaciones humanas fuera del recuento "manual" porque muchas aprobaciones son una decisión de política, no un costo de cumplimiento; el tiempo de espera de aprobación se mide por separado para que el retraso siga siendo visible.

## Recomendaciones

### Define los relojes y la unidad

**1. Mide por elemento del catálogo y publica la lista de elementos.** Empieza con los diez elementos principales por volumen, que suelen cubrir una gran parte de las solicitudes, y añade elementos a medida que los datos lo permitan. Da a cada elemento un responsable, una meta declarada y una definición de una línea de "entregado". La lista de elementos es el denominador de todo lo demás, así que guárdala en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**2. Escribe el inicio y el final del reloj de cada elemento.** Para la mayoría de los elementos el reloj arranca en el envío y se detiene cuando el usuario puede usar lo que pidió, no cuando se cierra un ticket. Un portátil se entrega cuando está en manos del usuario, no cuando se reserva el mensajero.

**3. Decide una sola vez cómo se trata la espera al usuario.** Algunas solicitudes se detienen porque el usuario no ha respondido a una pregunta. Pausar el reloj por eso es razonable, pero también es la palanca más fácil de usar mal. Registra la pausa como un estado separado con un motivo, informa el tiempo pausado como su propio número y revisa la tasa de pausas por elemento (véase el tema 1.5, Fuentes de datos e instrumentación).

### Informa de lo que viven los usuarios

**4. Muestra la mediana y el percentil 95, con un recuento.** Pon ambos en un gráfico por elemento, con el número de solicitudes detrás de cada punto. Una mediana de dos días con un percentil 95 de veinte te dice que la mayoría de los usuarios están bien atendidos y que una cola necesita investigación, algo que un promedio de cuatro días oculta. Cuando el recuento sea pequeño, dilo y muestra las solicitudes individuales en lugar de un percentil.

**5. Haz visible la antigüedad de las solicitudes abiertas.** El tiempo de cumplimiento solo se conoce cuando una solicitud termina, así que va por detrás. Una lista de las solicitudes abiertas más antiguas por elemento, ordenada por antigüedad, dice a un equipo dónde mirar hoy. En términos de flujo, es la antigüedad del elemento de trabajo frente al tiempo de ciclo habitual del elemento, y es la vista más accionable que puede tener una cola de solicitudes.

**6. Divide el tiempo transcurrido en tiempo de trabajo efectivo, de aprobación y de espera al usuario.** Toma una muestra de solicitudes cumplidas de un elemento y divide cada una en el tiempo pasado en cada estado. La mayoría de los equipos descubre que el trabajo activo es una parte pequeña del tiempo transcurrido. El hallazgo traslada la conversación de mejora de "trabajar más rápido" a "eliminar la cola entre pasos", que es la idea central del estudio de las colas y del flujo (véase el tema 2.3, Trabajo en curso y teoría de colas).

### Usa la demanda para dar forma al servicio

**7. Lee el volumen por elemento como un mensaje de los usuarios.** Un volumen creciente de un elemento puede significar una necesidad creciente, un producto confuso o un fallo en otro lugar, como un proceso roto que hace que la gente vuelva a preguntar. Un elemento de muy poco volumen puede ser candidato a retirarse del catálogo. Compara el volumen con los datos de adopción (véase el tema 6.3, Métricas de adopción y catálogo de servicios).

**8. Ordena los candidatos a automatización por volumen, estabilidad y tiempo de trabajo efectivo.** Los mejores primeros candidatos son de alto volumen, rara vez varían y llevan un tiempo de trabajo efectivo apreciable. Empieza por el elemento cuyos pasos ya son idénticos cada vez, como el acceso a un grupo estándar, y automatiza los pasos antes de tocar las excepciones. Sigue la proporción de automatización por elemento para que el avance sea visible, y lleva las cuestiones de autoservicio y desvío a su propio tema (véase el tema 3.7, Métricas de autoservicio y automatización).

**9. Rediseña las aprobaciones antes de añadir personal.** La espera de aprobación suele dominar el tiempo transcurrido. Pregunta de cada aprobación si la exige la política, si bastaría una solicitud estándar preaprobada y si el aprobador puede ser un rol con un suplente en lugar de una persona. Preaprobar solicitudes de bajo riesgo y bien entendidas refleja la idea de los cambios estándar en la habilitación de cambios, y elimina colas sin eliminar el control.

### Mantén honestos los números

**10. Empareja siempre la velocidad con la calidad.** Informa el tiempo de cumplimiento junto a la tasa de reapertura y una señal de satisfacción del usuario del mismo elemento (véase el tema 6.1, Métricas de satisfacción del cliente). Una solicitud más rápida que vuelve reabierta es más lenta de lo que parece. Si la velocidad mejora y la tasa de reapertura sube con ella, trata la mejora de velocidad como no demostrada.

**11. Mantén separadas en los datos las solicitudes, los incidentes y los cambios.** Mezclarlos distorsiona los tres. Un restablecimiento de contraseña que en realidad es síntoma de un servicio de inicio de sesión defectuoso es un incidente, y una solicitud para alterar cómo funciona un servicio es un cambio. Clasifica en la entrada con una regla breve, muestrea trimestralmente los elementos mal clasificados y compara lado a lado los volúmenes de solicitudes e incidentes (véase el tema 3.1, Métricas del centro de servicios).

**12. Revisa la tabla de elementos con el equipo que hace el trabajo.** Reuníos cada mes durante treinta minutos en torno a la tabla por elemento: volumen, mediana y percentil 95, solicitud abierta más antigua, proporción de automatización, tasa de reapertura. Elegid un elemento y un cambio que probar, y mirad la misma tabla el mes siguiente para ver qué ocurrió.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tiempo de cumplimiento de solicitudes | Pausar el reloj por "a la espera del usuario" sea o no el usuario la causa; cerrar solicitudes antes de la entrega y reabrirlas como nuevas; dividir una solicitud en varias pequeñas | Proporción de tiempo pausado por elemento, con una auditoría por muestreo de los motivos de pausa; tasa de reapertura; confirmación de la entrega por el usuario antes del cierre |
| Cumplimiento dentro de la meta | Redefinir la meta para que sea más fácil; contar solo las solicitudes que terminan e ignorar las abiertas antiguas; elegir a dedo elementos rápidos para el conjunto de metas | Antigüedad de la lista de pendientes para las solicitudes abiertas; cambios de metas registrados en el registro de métricas con un motivo; el conjunto de metas cubre todos los elementos por volumen |
| Lista de pendientes de solicitudes y su antigüedad | Cerrar solicitudes antiguas como "sin respuesta" u "obsoletas"; mover solicitudes a otra cola o categoría para que salgan de la cola contada | Recuento de solicitudes cerradas sin entrega, por motivo; traslados de categoría y de cola revisados en la reunión mensual |
| Tiempo de espera de aprobación | Los aprobadores aprueban sin leer para ahorrar su tiempo; los solicitantes persiguen a los aprobadores fuera del sistema para que la espera registrada sea corta | Revisión por muestreo de solicitudes aprobadas frente a la política; tasa de reapertura y excepciones de seguridad de los elementos aprobados; número de pasos de aprobación por elemento |
| Volumen de solicitudes por elemento del catálogo | Reducir el volumen dificultando el hallazgo del catálogo o desalentando las solicitudes; reclasificar solicitudes como incidentes o como "consultas generales" | Satisfacción de los usuarios con el catálogo; proporción de contactos clasificados como "otros"; datos de adopción del servicio (véase el tema 6.3, Métricas de adopción y catálogo de servicios) |
| Proporción de automatización | Automatizar los elementos triviales para subir el porcentaje; contar como automatizada una solicitud con guion que una persona sigue revisando a mano; esconder pasos manuales en un ticket aparte | Proporción ponderada por volumen de solicitudes y por tiempo de trabajo efectivo eliminado; tasa de automatizaciones fallidas y de vuelta a manual; muestra de solicitudes "automatizadas" seguidas de extremo a extremo |
| Tasa de reapertura de solicitudes | Desalentar la reapertura dificultándola; decir a los usuarios que abran una solicitud nueva, lo que reinicia el contador | Solicitudes repetidas del mismo usuario para el mismo elemento dentro de la ventana; satisfacción de los usuarios por elemento; reapertura permitida desde la notificación |

Una lectura sana es esta. La mediana y el percentil 95 bajan juntos, o el percentil 95 baja mientras la mediana se mantiene. La solicitud abierta más antigua no es mucho más antigua que el percentil 95 de las cumplidas. La tasa de reapertura y la satisfacción se mantienen planas o mejoran mientras mejora la velocidad. La proporción de automatización sube en los elementos que importan por volumen, y el propio volumen cambia por razones que el equipo sabe explicar. Si un número mejora bruscamente mientras su barrera de protección deriva en sentido contrario, ve y mira las solicitudes que hay detrás.

## Compensaciones: ventajas e inconvenientes

| Elección | Ventajas | Inconvenientes |
| --- | --- | --- |
| Medición por elemento | Las metas se ajustan al trabajo; muestra dónde rinde el rediseño | Más datos que mantener; los elementos pequeños tienen pocos puntos de datos |
| Mediana y percentil 95 en lugar de la media | Describe lo que viven los usuarios; resiste los valores atípicos | Más difícil de explicar a ejecutivos acostumbrados a un número; inestable para elementos de poco volumen |
| Pausar el reloj mientras se espera al usuario | Justo con el equipo cuando el usuario causa el retraso | Fácil de abusar; oculta el efecto de formularios poco claros y de mala comunicación |
| Contar la proporción de automatización | Hace visible el avance de la automatización y lo ata al costo | Premia las automatizaciones fáciles; no dice nada sobre la calidad si no se empareja con la tasa de fallos |
| Medir desde el envío del usuario hasta la confirmación del usuario | Coincide con la experiencia del cliente | Depende de la confirmación del usuario, que a menudo falta; necesita una regla por defecto |
| Separación estricta de solicitudes e incidentes | Datos más limpios y mejores metas | Exige disciplina en la entrada y discusiones sobre los casos límite |

La compensación central es entre un número limpio y uno justo. Un reloj estricto que nunca se pausa es sencillo y difícil de manipular, pero penaliza al equipo cuando el usuario es lento. Un reloj flexible es más justo pero necesita auditoría. A la mayoría de los equipos les conviene empezar con un reloj estricto, añadir un estado de pausa explícito con un motivo e informar con apertura la proporción pausada.

## Preguntas para conversar con tu equipo

**1. ¿Qué tres elementos del catálogo provocan más espera a nuestros usuarios, y cómo lo sabemos?**
Lleva la tabla por elemento de volumen, mediana y percentil 95 del tiempo de cumplimiento. Pide al grupo que elija los elementos por espera total (volumen por espera típica), no por lo molestos que parecen. Compara la respuesta con el primer instinto de la gente. El facilitador debe anotar dónde difieren los datos y el instinto.

**2. ¿Dónde arranca y se detiene nuestro reloj, y estaría de acuerdo un usuario?**
Elige un elemento común y recorre su viaje como lo ve el usuario, desde el primer clic hasta el momento en que puede usar el resultado. Marca dónde dice "hecho" el estado de nuestro ticket y dónde diría "hecho" el usuario. Cualquier brecha entre ambos es espera invisible. Acordad un cambio en el evento de fin y escribidlo en el registro de métricas.

**3. ¿Cuánto de nuestro tiempo transcurrido es gente trabajando, y cuánto es espera?**
Muestrea diez solicitudes cumplidas de un elemento y divide cada una en tiempo de trabajo efectivo, de aprobación y de espera al usuario. Muestra el resultado como una barra apilada. Pregunta qué tendría que ser cierto para que la espera se redujera a la mitad. Esta pregunta suele mover a la sala de "necesitamos más personal" a "necesitamos menos traspasos".

**4. ¿Qué aprobaciones podrían sustituirse por una regla pactada de antemano?**
Enumera las aprobaciones de los elementos principales y el motivo de política de cada una. Donde nadie recuerde el último rechazo, la aprobación puede ser un ritual.

**5. Si automatizáramos el siguiente elemento del catálogo, ¿subiría el número por la razón correcta?**
Discutid cómo la proporción de automatización puede subir por elementos fáciles o de poco volumen mientras los usuarios no ven ninguna diferencia. Preguntad qué mediría el equipo para confirmar que una automatización ayudó: tiempo de trabajo efectivo eliminado, tasa de fallos, tasa de reapertura y satisfacción. Decidid qué elemento automatizar a continuación según el volumen y el tiempo de trabajo efectivo, no solo la facilidad.

**6. ¿Qué haríamos si un número de esta página empeorara, y a quién se culparía?**
Haz el experimento mental abiertamente. Pregunta qué se sentiría tentado a cambiar el equipo en los datos antes de cambiar el servicio. Acordad que la primera respuesta a un número que empeora es mirar las solicitudes que hay detrás.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de producto generan solicitudes sobre sus propios servicios: acceso a entornos, canalizaciones nuevas, datos de prueba, claves de licencia. Los tiempos de cumplimiento largos de estas aparecen como trabajo ocioso en el propio flujo del equipo, por lo que la medida pertenece a su tablero como un estado bloqueado. Los equipos que poseen un servicio deben publicar sus propios elementos de solicitud y metas, y tratar las solicitudes repetidas como candidatos a la lista de pendientes (véase el tema 2.6, Métricas de la lista de pendientes y su refinamiento). Cuando una solicitud es en realidad una capacidad de plataforma que falta, la demanda repetida es el argumento para construirla.

### Equipos de servicio y operaciones

Para las personas que cumplen las solicitudes, la tabla por elemento es un mapa de adónde va el esfuerzo. Saben qué pasos son manuales, qué aprobaciones se atascan y qué formularios producen entradas vagas. Deben poseer los modelos de solicitud, la lista de pendientes de automatización y la revisión mensual, y deben ser la primera audiencia de los datos. Los números describen la cola y el proceso, así que deja explícito que nadie se clasifica y que la variación entre personas refleja sobre todo la mezcla de solicitudes que toman.

### Liderazgo y gobernanza

Los líderes necesitan una vista breve: mediana y percentil 95 de los elementos principales, la proporción cumplida dentro de la meta, las solicitudes abiertas más antiguas y la tendencia de la proporción de automatización y del costo por solicitud (véase el tema 7.5, Costo del servicio y economía unitaria). La tarea de la gobernanza es preguntar qué cambió, no quién es lento. Los líderes también aprueban el lado de política de las aprobaciones, así que tienen la palanca que más reduce la espera.

### Clientes y usuarios

A los usuarios les importan tres cosas: cuánto tiempo, cuán predecible y cuánto esfuerzo. Rara vez les importan los estados internos. Muéstrales una meta clara por elemento ("portátiles en cinco días laborables"), diles dónde está su solicitud y pídeles que confirmen la entrega. Recoge una señal de satisfacción de una pregunta al cerrar y lee los comentarios.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de una universidad regional (una organización ficticia) opera un centro de servicios y un pequeño equipo de plataforma. Los números siguientes son ilustrativos, no de ninguna organización real.

En la revisión mensual el equipo mira la tabla por elemento. En todas las solicitudes, el tiempo medio de cumplimiento es de 3,1 días laborables, lo que parece aceptable y apenas se ha movido en un año. Por elemento, el panorama es distinto. "Acceso a unidad compartida" tiene una mediana de 0,4 días y un percentil 95 de 2 días. "Licencia de software departamental" tiene una mediana de 2 días y un percentil 95 de 11 días. "Portátil para nuevo empleado" tiene una mediana de 6 días y un percentil 95 de 15 días. Los tres elementos principales por volumen son el acceso a unidades compartidas, las solicitudes de licencia y los portátiles para nuevos empleados, con proporciones ilustrativas del 32, 21 y 9 por ciento de todas las solicitudes.

El equipo muestrea diez solicitudes de portátil y divide el tiempo. Resultado ilustrativo: alrededor de 0,5 días de trabajo efectivo, 2,5 días esperando la aprobación de un jefe directo, 1,5 días esperando la confirmación de existencias y el resto en una cola de mensajería. La espera de aprobación es la pieza mayor.

La decisión se desprende de los datos. El equipo propone, con la responsable de finanzas y el responsable de seguridad, que los portátiles del catálogo estándar queden preaprobados cuando recursos humanos confirme el puesto del nuevo empleado, con el jefe notificado en lugar de consultado. También conectan la comprobación de existencias con el sistema de inventario. Fijan el experimento para un trimestre y acuerdan qué contaría como éxito: el percentil 95 de los portátiles baja, y la tasa de reapertura y la puntuación de satisfacción se mantienen niveladas.

Un riesgo de manipulación aparece en el segundo mes. La mediana de las licencias cae bruscamente, de 2 días a menos de 1. La revisión nota que la proporción de tiempo pausado por "a la espera del usuario" del elemento ha saltado de un 5 por ciento ilustrativo al 40 por ciento, y que la tasa de reapertura ha subido. Una muestra muestra que los agentes pausaban las solicitudes con un mensaje genérico en cuanto una licencia necesitaba cualquier comprobación, lo que detenía el reloj. El equipo no culpa a los agentes. Ven que la meta hacía atractiva la pausa y que el campo del motivo de pausa era texto libre. Cambian el motivo de pausa a una lista corta, exigen una pregunta concreta al usuario y añaden la proporción de tiempo pausado como columna permanente junto a la mediana. La mediana de las licencias vuelve cerca de su nivel anterior, la tasa de reapertura baja y el equipo usa el tiempo de discusión ahorrado para rediseñar el formulario de licencias, que producía las solicitudes poco claras.

Tras el trimestre (ilustrativo), el percentil 95 de los portátiles baja de 15 a 9 días y la proporción de automatización del acceso a unidades compartidas alcanza el 70 por ciento. El equipo registra ambos cambios y elige el formulario de licencias como el siguiente experimento.

## Perspectiva por sector

**Startup.** Una startup tiene pocos tipos de solicitud y ningún catálogo formal, y las mismas personas atienden las solicitudes y construyen el producto. Mide las tres o cuatro solicitudes que bloquean a los recién llegados, como las cuentas y el equipamiento, y sigue la solicitud abierta más antigua. Automatiza pronto la incorporación, porque cada contratación la repite.

**Pequeña empresa.** Una pequeña empresa suele depender de una persona de TI o de un proveedor externo. Usa un tablero compartido sencillo con una columna para cada estado y sigue la antigüedad y el volumen de las solicitudes por tipo. Pide al proveedor el volumen mensual por elemento y la solicitud abierta más antigua.

**Gran empresa.** Una gran empresa tiene cientos de elementos de catálogo, muchos grupos de cumplimiento y aprobaciones en capas. Concéntrate en los elementos principales por volumen y en los de mayor espera por espera total. Estandariza la definición del reloj entre los grupos de cumplimiento antes de compararlos, e informa por separado los traspasos entre grupos (véase el tema 9.3, Métricas de colaboración y traspasos). Los tiempos de cumplimiento de los proveedores pertenecen a la misma vista, medidos desde la solicitud del cliente, no desde la recepción del proveedor.

**Gobierno y sector público.** Los organismos públicos añaden aprobaciones obligatorias, normas de contratación y obligaciones de registros, así que parte del tiempo de espera es política y debe etiquetarse como tal en lugar de contarse como un retraso que eliminar. Publica las metas por elemento en lenguaje llano donde los compromisos de servicio sean públicos. Informa de un modo que un regulador o un órgano de supervisión pueda reproducir, con las definiciones escritas.

## Caso de negocio: motivaciones, ROI y TCO

Las solicitudes son una parte grande y repetitiva del trabajo que llega a un centro de servicios, así que incluso un rediseño modesto tiene un efecto amplio. Las motivaciones principales son esperas más cortas y predecibles para los usuarios, menos esfuerzo de atención por solicitud, menos contactos repetidos y capacidad liberada para el trabajo de problemas y de mejora.

El lado del costo es sobre todo puntual y modesto. Definir los elementos del catálogo, acordar los relojes y asegurarse de que la herramienta registra los estados necesarios son unos días de trabajo por grupo, más un pequeño esfuerzo continuo para mantener correcta la canalización (véase el tema 1.5, Fuentes de datos e instrumentación). La automatización tiene su propio costo de construcción y mantenimiento, que incluye monitorizar las automatizaciones, manejar los fallos y actualizarlas cuando cambian los sistemas de destino. Cuéntalo en el costo total de propiedad más allá de la licencia o del tiempo de construcción.

El retorno debe estimarse a partir de tus propios datos y no de una referencia general. Para un elemento, multiplica el volumen mensual por el tiempo de trabajo efectivo ahorrado y por el costo cargado del tiempo, y resta luego el costo de construcción y operación del cambio. Añade el valor del tiempo de espera eliminado para los usuarios, con un método que puedas defender, y muéstralo por separado porque es una estimación de otro tipo. Ninguna cifra de este tema es una referencia, y los números de ejemplo son ilustrativos. Vincula el caso de negocio al costo unitario por solicitud donde existan los datos de finanzas (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Un promedio combinado para todas las solicitudes.** Oculta tanto las victorias rápidas como la cola larga. Informa por elemento, con una mediana y un percentil 95.
- **Cerrar el ticket y llamarlo entregado.** El usuario puede seguir sin nada. Define la entrega desde el lado del usuario y pide confirmación.
- **Estados de pausa de forma libre.** Un estado de "espera" sin motivo permite detener el reloj por cualquier causa. Usa una lista corta de motivos e informa la proporción pausada.
- **Contar la automatización por número de elementos.** Diez elementos raros automatizados pueden subir el porcentaje sin ayudar a nadie. Pondera por volumen y tiempo de trabajo efectivo.
- **Clasificar agentes por solicitudes cerradas.** Premia la selección de tickets fáciles y castiga a quienes toman los difíciles. Informa solo a nivel de equipo y de elemento.
- **Ocultar la demanda para parecer eficiente.** Dificultar el uso del catálogo reduce el volumen y aumenta la frustración. Empareja el volumen con datos de satisfacción y de adopción.
- **Tratar las aprobaciones como intocables.** Las aprobaciones suelen ser el mayor retraso y rara vez se revisan. Pregunta qué protege cada una y si una regla puede hacer el trabajo.
- **Mezclar solicitudes con incidentes.** Distorsiona ambos conjuntos de números. Clasifica en la entrada y muestrea la clasificación.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Las solicitudes se cuentan como tickets; el final del reloj es lo que signifique "cerrado" | Algunos equipos definen el inicio y el fin por elemento; las definiciones difieren | Una definición escrita del reloj por elemento del catálogo, compartida entre equipos | Definiciones revisadas con una cadencia y cambios registrados con motivos | Definiciones que siguen la visión del cliente entre proveedores y se revisan cuando dejan de informar decisiones |
| Datos e informes | Recuentos extraídos a mano de la herramienta | Informes de algunos elementos de la herramienta ITSM; tiempos medios | Mediana y percentil 95 por elemento de una sola fuente de datos | Tendencias, antigüedad de la lista de pendientes y proporción de tiempo pausado revisadas con sus barreras de protección | Datos de cumplimiento de equipos internos y proveedores combinados y vinculados a los resultados para el usuario |
| Demanda y automatización | Solicitudes atendidas una a una; sin vista de la demanda repetida | Elementos principales identificados de manera informal; unos pocos guiones | Modelos de solicitud documentados para los elementos principales; lista de pendientes de automatización ordenada por volumen y tiempo de trabajo efectivo | Proporción de automatización y tasa de fallos con seguimiento; aprobaciones rediseñadas con evidencia | Demanda, autoservicio y automatización planificados juntos en toda la organización y adaptados continuamente |
| Uso en la mejora | Los números se informan hacia arriba, no se usan | Correcciones ocasionales tras las quejas | Revisión mensual por el equipo que hace el trabajo | Mejoras financiadas ligadas a los resultados por elemento | Las ideas de mejora llegan de los equipos, los usuarios y los proveedores, y los resultados alimentan el diseño del catálogo |

## Lista de verificación

- [ ] Cada elemento del catálogo incluido tiene un responsable, una definición de una línea de "entregado" y una meta declarada.
- [ ] Los eventos de inicio y fin del reloj de cumplimiento están escritos para cada elemento.
- [ ] La espera al usuario es un estado separado con una lista corta de motivos, y se informa el tiempo pausado.
- [ ] Los informes muestran la mediana y el percentil 95 por elemento, con el número de solicitudes detrás de cada uno.
- [ ] Las solicitudes abiertas más antiguas son visibles para el equipo cada semana.
- [ ] El tiempo de trabajo efectivo, de aprobación y de espera se ha muestreado para los elementos principales.
- [ ] El volumen por elemento se revisa cada mes y se compara con datos de adopción o de satisfacción.
- [ ] La proporción de automatización se pondera por volumen y se empareja con las tasas de fallos y de vuelta a manual.
- [ ] Cada métrica de velocidad se empareja con la tasa de reapertura y una señal de satisfacción del usuario.
- [ ] Las solicitudes, los incidentes y los cambios se clasifican en la entrada, y la clasificación se muestrea.
- [ ] Ningún informe clasifica a agentes individuales.

## Prompts de IA

**Redacta un modelo de solicitud y una definición de reloj para un elemento del catálogo.**

```text
Estoy definiendo la medición de este elemento del catálogo: [catalog item name].
Los pasos actuales son [list steps and who does each], las aprobaciones son
[list approvals] y nuestra herramienta es [ITSM tool]. Redacta un modelo de
solicitud con la información requerida, los eventos de inicio y fin del reloj de
cumplimiento, los estados en que el reloj puede pausarse y los motivos
permitidos, y una lista de marcas de tiempo que necesito que la herramienta
registre. No inventes valores de referencia ni funciones de la herramienta.
Enumera tus supuestos y las preguntas que debería responder para terminar la
definición.
```

**Divide el tiempo transcurrido en tiempo de trabajo efectivo y de espera.**

```text
Esta es una muestra de [number] solicitudes cumplidas de [catalog item] con las
horas de cambio de estado: [paste anonymized state history, no names]. Calcula,
para cada solicitud y para la muestra, el tiempo de trabajo efectivo, la espera
de aprobación y el tiempo de espera al usuario, y muestra la mediana y el rango.
Señala qué estado acumula más tiempo y qué preguntas debería hacer al equipo
sobre él. No infieras causas sin evidencia ni compares a personas
individuales. Enumera tus supuestos.
```

**Ordena los candidatos a automatización.**

```text
Esta es una tabla de elementos del catálogo con volumen mensual, mediana del
tiempo de trabajo efectivo, variación de los pasos y los sistemas que toca cada
uno: [paste table]. Sugiere una forma de ordenar los candidatos a automatización
usando volumen, estabilidad y tiempo de trabajo efectivo, y explica el orden de
los [number] primeros elementos. Señala los elementos donde la automatización
podría crear riesgos de seguridad o de calidad, y enumera qué debería verificar
primero con [control owner role]. No inventes cifras de ahorro ni valores de
referencia. Enumera tus supuestos.
```

**Revisa un panel de cumplimiento en busca de riesgos de manipulación.**

```text
Este es nuestro panel de cumplimiento de solicitudes: [describe metrics,
definitions, and targets]. Para cada métrica, enumera cómo podría manipularse o
malinterpretarse, la señal observable en los datos y una métrica o práctica de
barrera de protección emparejada. Comprueba que nada clasifique a individuos y
sugiere cambios de redacción que reduzcan la presión sobre el equipo. No
inventes umbrales; pídeme los que necesites. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la definición, el vector de manipulación y la barrera de protección de una métrica de solicitudes, y los temas vecinos que se emparejan con ella.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen intactos la plantilla, los relojes y los emparejamientos de barreras de protección.

## Puntos clave

- Mide el cumplimiento por elemento del catálogo, desde el envío del usuario hasta la confirmación del usuario, e informa la mediana y un percentil alto.
- La mayor parte del tiempo transcurrido es espera, así que divide el tiempo de trabajo efectivo, de aprobación y de espera al usuario antes de decidir qué corregir.
- Lee el volumen por elemento como un mensaje de los usuarios y automatiza primero los elementos frecuentes y estables.
- Empareja cada número de velocidad con la tasa de reapertura y una señal de satisfacción, e informa con apertura el tiempo pausado.
- Describe la cola y el proceso, nunca a la persona.

## Referencias y lecturas complementarias

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
