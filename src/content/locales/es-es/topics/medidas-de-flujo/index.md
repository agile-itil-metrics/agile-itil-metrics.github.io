# Medidas de flujo

**Cuatro recuentos y relojes sencillos, trabajo en curso, rendimiento, antigüedad del elemento de trabajo y tiempo de ciclo, dicen a un equipo dónde está atascado su trabajo y qué puede prometer, siempre que cada uno se defina igual para el trabajo de proyectos y el de servicio y se lea como una distribución y no como un promedio.**

## Resumen y motivación

La mayoría de los paneles de entrega y de servicio informan de lo que terminó el mes pasado. Las medidas de flujo añaden la vista que importa mientras el trabajo aún se mueve: cuánto hay en curso ahora mismo, qué antigüedad tiene cada elemento, con qué rapidez terminan los elementos y cuánto tardan. La literatura sobre flujo da a estas cuatro medidas definiciones precisas. La Guía Kanban (kanbanguides.org, versión vigente a octubre de 2026) es una fuente clara: las nombra como las medidas que un equipo usa para inspeccionar y adaptar su flujo de trabajo, y este tema sigue esas definiciones sin exigir ningún método ni tablero en particular.

Las cuatro definiciones son breves. El **trabajo en curso (WIP)** es el número de elementos de trabajo que han empezado pero no han terminado. El **rendimiento** es el número de elementos de trabajo terminados por unidad de tiempo. La **antigüedad del elemento de trabajo** es el tiempo transcurrido entre el momento en que un elemento de trabajo empezó y el momento actual, de modo que solo se aplica a los elementos todavía en curso. El **tiempo de ciclo** es el tiempo transcurrido entre el momento en que un elemento de trabajo empezó y el momento en que terminó, contando ambos días de forma inclusiva según la redacción de la Guía. Un **elemento de trabajo** es una unidad de trabajo que el equipo ha decidido seguir como una sola cosa, como una historia de usuario, un incidente, una solicitud de servicio o un cambio. Un **flujo de trabajo** es el conjunto de estados entre "empezado" y "terminado", y la **definición del flujo de trabajo** escrita del equipo dice cuáles son esos estados.

Dos de las cuatro se refieren al sistema en su conjunto (WIP y rendimiento) y dos a los elementos individuales (antigüedad y tiempo de ciclo). La pareja de los elementos terminados es rendimiento y tiempo de ciclo. La pareja de los elementos sin terminar es WIP y antigüedad. Esta división importa porque las medidas de elementos terminados son rezagadas: dicen cómo fueron las cosas. Las medidas de elementos sin terminar son adelantadas: dicen lo que está a punto de ocurrir, cuando aún hay tiempo de actuar. La antigüedad del elemento de trabajo es la menos aprovechada de las cuatro, y suele ser la primera que vale la pena añadir a un tablero.

La relación entre las tres primeras no es casual. La [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law), un resultado de la [teoría de colas](https://en.wikipedia.org/wiki/Queueing_theory), dice que en un sistema estable el número medio de elementos en el sistema es igual a la tasa media de llegada multiplicada por el tiempo medio que cada elemento pasa en él. En términos de flujo, el WIP medio está ligado al rendimiento medio y al tiempo de ciclo medio. La ley solo se cumple bajo condiciones a las que el tema vuelve en las Recomendaciones (véase el tema 2.3, Trabajo en curso y teoría de colas, para el tratamiento completo). La consecuencia práctica es sencilla: si el rendimiento se mantiene más o menos constante, más trabajo en curso significa tiempos de ciclo más largos.

Las visiones ágil y de ITIL se encuentran aquí con vocabularios distintos. En la práctica ágil, las medidas de flujo pertenecen al tablero del equipo y se usan en una revisión periódica con las partes interesadas y en la propia reflexión del equipo sobre cómo mejorar. En ITIL 4, los mismos números describen cómo la gestión de incidentes, la gestión de solicitudes de servicio y la habilitación de cambios mueven registros a través de estados, y alimentan la práctica de medición e informes y la gestión de niveles de servicio. Un incidente es un elemento de trabajo. Una solicitud de servicio es un elemento de trabajo. Ambos tienen un inicio, un final y una antigüedad intermedia. El centro de servicios de ITIL y el equipo de entrega hacen el mismo tipo de trabajo desde el punto de vista de la medición: los elementos llegan, esperan, se trabajan y salen.

Las medidas también se conectan con el [desarrollo de software lean](https://en.wikipedia.org/wiki/Lean_software_development), que trata la espera como la principal fuente de desperdicio, y con el [diagrama de flujo acumulado](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), un gráfico de llegadas y salidas acumuladas que muestra de un vistazo el WIP, el rendimiento y el tiempo de ciclo. El gráfico es opcional. Las cuatro medidas pueden calcularse a partir de una tabla de elementos con dos fechas cada uno.

Como el tiempo de ciclo y la antigüedad son duraciones con una cola larga a la derecha, un único promedio engaña. Un [percentil](https://en.wikipedia.org/wiki/Percentile) como el 85 dice a un equipo "el 85 por ciento de los elementos termina en este número de días o menos", que es un pronóstico utilizable y una promesa utilizable (véase el tema 1.6, Alfabetización estadística para métricas de servicio). La literatura de flujo llama a esa promesa **expectativa de nivel de servicio (SLE)**: cuánto debería tardar un elemento típico, expresado como un tiempo y una probabilidad. Una SLE es el propio pronóstico de un equipo. No es un [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement), que es un compromiso negociado con un cliente (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## Principios clave

- **Cuenta elementos completos que se ajusten a una definición de empezado y terminado.** Dividir o fusionar elementos para mejorar un número destruye la comparabilidad. Acordad qué es un elemento de trabajo y mantened estable la definición.
- **Define los relojes antes de recoger los datos.** El tiempo de ciclo y la antigüedad dependen de qué estado significa "empezado" y cuál significa "terminado". Escribid ambos y registrad cada cambio en ellos (véase el tema 1.5, Fuentes de datos e instrumentación).
- **Mira primero el trabajo sin terminar.** La antigüedad y el WIP son las únicas medidas que aún pueden cambiar un resultado. El rendimiento y el tiempo de ciclo confirman lo que ya ocurrió.
- **Informa distribuciones, no promedios.** Muestra percentiles del tiempo de ciclo y de la antigüedad, y una serie de recuentos semanales del rendimiento, para que se vea la forma de la variación.
- **Usa las medidas para gestionar el flujo de trabajo, no a las personas.** La unidad de análisis es el flujo de trabajo del equipo. Nunca clasifiques a las personas por elementos terminados o por tiempo de ciclo.
- **Limita el WIP para que el flujo sea predecible.** Un límite de WIP es una política, no una meta. El límite existe para dejar al descubierto las colas y acortar el tiempo de ciclo.
- **Separa el tiempo de flujo de la precisión de la planificación.** Las medidas de flujo describen cómo se mueve el trabajo. Por sí solas no dicen nada sobre si se eligió el trabajo adecuado (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

## Definiciones de métricas

Cada fila cuenta elementos del flujo de trabajo de un solo equipo. Los elementos todavía en curso se excluyen del tiempo de ciclo y del rendimiento, y los elementos terminados se excluyen de la antigüedad y del WIP.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trabajo en curso (WIP) | Elementos de trabajo empezados pero no terminados | Recuento de elementos cuya marca de tiempo de inicio está establecida y cuya marca de tiempo de fin está vacía, en un momento indicado (por ejemplo, el final de cada día); se excluyen los elementos de la lista de pendientes aún no empezados y los elementos terminados | elementos | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; gestión de solicitudes de servicio; habilitación de cambios | Límite de WIP; lista de pendientes del equipo en curso | Instantánea diaria, revisada semanalmente |
| Rendimiento | Elementos de trabajo terminados por unidad de tiempo | Recuento de elementos cuya marca de tiempo de fin cae en el periodo (por ejemplo, una semana natural, de lunes a domingo); los elementos terminados y luego reabiertos cuentan de nuevo solo si son elementos nuevos | elementos por semana | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; cumplimiento de solicitudes de servicio | Rendimiento; elementos completados | Semanal |
| Antigüedad del elemento de trabajo | Tiempo transcurrido que lleva en curso un elemento sin terminar | Hora actual menos la marca de tiempo de inicio, para los elementos todavía en curso; el reloj corre durante el tiempo bloqueado; los elementos aún no empezados se excluyen | días | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; gestión de problemas | Antigüedad del elemento de trabajo; sincronización diaria del equipo | Diaria, revisada en cada sincronización del equipo |
| Tiempo de ciclo | Tiempo transcurrido desde el inicio hasta el fin de un elemento terminado | Marca de tiempo de fin menos marca de tiempo de inicio, en días naturales, de forma inclusiva; el reloj arranca en el primer paso a un estado de empezado y se detiene en el paso a un estado de terminado; informa la mediana y los percentiles 85 y 95 | días | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; cumplimiento de solicitudes de servicio; habilitación de cambios | Tiempo de ciclo; duración del elemento | Semanal, con una ventana móvil de 8 a 12 semanas |
| Cumplimiento de la SLE | Proporción de elementos terminados que cumplieron la expectativa de nivel de servicio del equipo | Elementos terminados con un tiempo de ciclo igual o inferior a la SLE / todos los elementos terminados en la ventana; los elementos aún abiertos se excluyen | porcentaje | Derivado del tiempo de ciclo | Gestión de niveles de servicio | Expectativa de nivel de servicio | Mensual |
| Proporción de tiempo bloqueado | Proporción de los días en curso que los elementos pasaron marcados como bloqueados | Días-elemento en estado bloqueado / días-elemento en curso, sobre la ventana; el reloj de ambos arranca en la marca de tiempo de inicio | porcentaje | Marcas del gestor de incidencias o un estado bloqueado en la herramienta ITSM | Gestión de incidentes; gestión de problemas; gestión de proveedores | Bloqueos; impedimentos planteados en las sincronizaciones diarias del equipo | Semanal |

El tiempo de ciclo aquí sigue la definición de la literatura de flujo. Difiere de la idea de ITIL del tiempo de resolución, que a menudo se mide desde el momento en que se abre un ticket y puede excluir el tiempo en espera. Un equipo que quiera comparar ambos debe etiquetarlos, y el tema 2.2 trata los relojes en detalle (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). El cumplimiento de la SLE y la proporción de tiempo bloqueado se derivan de las cuatro medidas básicas y se incluyen porque así es como un equipo usa esas medidas en el día a día.

## Recomendaciones

### Define el flujo de trabajo y los elementos

**1. Escribe la definición del flujo de trabajo antes de graficar nada.** Enumera los estados, di cuál significa "empezado" y cuál "terminado", y establece quién puede mover un elemento entre ellos. La literatura de flujo llama a esto la definición del flujo de trabajo, y toda medida de este tema depende de ella. Si dos equipos definen "empezado" de forma distinta, sus tiempos de ciclo no pueden compararse.

**2. Elige un tamaño de elemento de trabajo que el equipo pueda terminar en días, no en meses.** Un elemento de trabajo es lo que el equipo sigue como una sola unidad: una historia, un incidente, una solicitud. Los elementos muy grandes ocultan su propia antigüedad y hacen irregular el rendimiento. Usa una regla estable como "un elemento es una cosa que un cliente o usuario podría notar", y evita dividir elementos solo para mejorar un recuento.

**3. Trata el trabajo de proyecto y el de servicio como el mismo tipo de flujo, con patrones de llegada distintos.** El trabajo de proyecto llega como una lista de pendientes planificada de la que el equipo tira. El trabajo de servicio, como los incidentes y las solicitudes, llega de forma impredecible y puede adelantarse al trabajo planificado. Mide ambos en el mismo tablero o en las mismas tablas, etiquetados por tipo, para ver cómo afectan las interrupciones al trabajo planificado (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

### Mide el trabajo sin terminar

**4. Empieza con la antigüedad del elemento de trabajo en el tablero.** Marca cada tarjeta con su antigüedad en días y ordena o resalta por bandas de percentil tomadas del propio historial de tiempos de ciclo del equipo. Un elemento más antiguo que el percentil 85 de los tiempos de ciclo pasados es una señal para preguntar qué lo bloquea hoy. Esto convierte una medida rezagada en un recordatorio diario.

**5. Cuenta el WIP con honestidad y fija un límite que puedas defender.** Cuenta cada elemento empezado que no esté terminado, incluido el trabajo que espera una revisión o a un proveedor. Elige un límite inicial a partir del WIP medio actual del equipo y bájalo paso a paso, anotando qué cambia en el tiempo de ciclo y en la antigüedad. Trata el límite como una política que el equipo inspecciona, y usa la ley de Little solo como comprobación de cordura sobre los promedios (véase el tema 2.3, Trabajo en curso y teoría de colas).

**6. Muestra el trabajo bloqueado como tiempo, no como una marca.** Una marca de bloqueo que nadie cuenta se convierte en una excusa. Registra cuándo se bloqueó un elemento y cuándo se liberó, e informa la proporción de tiempo bloqueado. Mantén en marcha el reloj del elemento durante el bloqueo, porque la espera del cliente no se pausa (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes, donde los estados de espera de ITIL plantean la misma cuestión).

### Mide el trabajo terminado

**7. Informa el tiempo de ciclo como una distribución con percentiles.** Muestra la mediana, el percentil 85 y el percentil 95, y traza cada elemento terminado como un punto a lo largo del tiempo (un diagrama de dispersión) para que el equipo vea los grupos y los valores atípicos. Indica la ventana, por ejemplo las últimas 10 semanas. Un promedio oculta la cola larga que los clientes sienten.

**8. Informa el rendimiento como una serie semanal, no como un total único.** Traza el recuento de elementos terminados por semana como un [gráfico de secuencia](https://en.wikipedia.org/wiki/Run_chart) o un [gráfico de control](https://en.wikipedia.org/wiki/Control_chart). Los recuentos semanales varían de forma natural, así que lee los cambios frente a esa variación antes de reaccionar, y nunca compares el rendimiento de dos equipos como una clasificación de desempeño, porque los tamaños y las definiciones de los elementos difieren (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

**9. Fija una expectativa de nivel de servicio a partir de tus propios datos y revísala.** Toma los tiempos de ciclo del equipo de las últimas semanas, elige una probabilidad con la que el equipo pueda vivir y lee el número de días en el percentil. Publícala como "el 85 por ciento de los elementos termina en 9 días o menos", con valores reales de tus datos. Revísala cuando cambie el flujo de trabajo. Una SLE es un pronóstico que el equipo hace sobre sí mismo, así que mantenla separada de las metas contractuales.

### Usa las medidas

**10. Usa las cuatro juntas y haz las mismas cuatro preguntas en cada sincronización del equipo.** ¿Qué hay en curso, y está dentro del límite? ¿Qué elementos son los más antiguos, y qué los desbloquearía? ¿Cuántos terminamos, y está dentro del rango habitual? ¿Cuánto tardaron los recientes en comparación con nuestra expectativa? Las cuatro preguntas sustituyen a un informe de estado y llevan unos minutos.

**11. Aplica las mismas medidas a las colas de servicio, con un límite claro para el reloj.** Para incidentes y solicitudes, "empezado" puede ser la primera asignación a una persona o equipo, mientras que el reloj de resolución de ITIL arranca en el registro. Ambos son válidos y responden a preguntas distintas: qué tan receptiva es la entrada y cuánto tarda el trabajo en sí. Nombra cada reloj y no los mezcles en un mismo gráfico (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio).

**12. Cambia el flujo de trabajo, mide de nuevo y conserva el historial.** Cuando el equipo cambie un límite de WIP, un estado o una política, registra la fecha y el motivo, y marca el cambio en los gráficos. Un cambio en el tiempo de ciclo tras una modificación es evidencia de su efecto. Un cambio sin modificación registrada es motivo para sospechar del instrumento (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Trabajo en curso (WIP) | Mantener los elementos en la lista de pendientes o en una columna de "listo" hasta el último momento, para que no cuenten como empezados; cerrar y reabrir elementos; esconder trabajo fuera del tablero | Conciliar los elementos del tablero con las solicitudes recibidas; muestrear el tablero frente al trabajo real del equipo; seguir la antigüedad de los elementos de la primera columna |
| Rendimiento | Dividir los elementos en piezas minúsculas; cerrar elementos antes de que estén hechos; elegir primero los elementos fáciles | Mirar la distribución de tamaños de los elementos y la tasa de reaperturas; contar los defectos escapados y los incidentes ligados a elementos recientes; revisar la mezcla de tipos de trabajo terminados |
| Antigüedad del elemento de trabajo | Mover un elemento rancio a "hecho" o a un estado nuevo para reiniciar el reloj; cancelar elementos antiguos en silencio; crear una copia nueva de un elemento antiguo | Auditar los movimientos de estado hacia atrás y los elementos cancelados; informar los elementos cancelados y su antigüedad; comprobar los duplicados creados cerca del límite de antigüedad |
| Tiempo de ciclo | Arrancar el reloj tarde moviendo los elementos a "en curso" solo cuando el trabajo está casi hecho; terminarlo pronto marcando los elementos como hechos antes de la revisión o la versión | Comparar la hora de inicio con el primer commit o la primera actividad; informar el tiempo entre "hecho" y la versión; muestrear elementos terminados para comprobar su finalización real |
| Cumplimiento de la SLE | Fijar una SLE generosa; excluir los elementos difíciles por "especiales"; cerrar elementos para mantenerse bajo el límite | Mantener la SLE en un percentil de datos pasados y revisarla cada trimestre; informar los elementos excluidos y el motivo; leer el percentil 95 y los elementos abiertos más antiguos |
| Proporción de tiempo bloqueado | No marcar nunca los bloqueos, para que la proporción parezca baja; marcar todo como bloqueado para explicar el retraso | Comparar la proporción bloqueada con la antigüedad de los elementos en curso; revisar los motivos de bloqueo por categoría; muestrear elementos bloqueados para comprobar cada motivo |

Una lectura sana muestra el WIP en o por debajo del límite la mayoría de los días, la antigüedad casi siempre por debajo del percentil 85 de los tiempos de ciclo pasados y un rendimiento que varía dentro de un rango estable de una semana a otra. Los percentiles del tiempo de ciclo son estables o bajan, el cumplimiento de la SLE se sitúa cerca de la probabilidad que eligió el equipo y el tiempo bloqueado tiene causas con nombre en las que alguien está trabajando. Cuando un número parezca demasiado bueno, pregunta si se movió el reloj o cambió la definición antes de celebrarlo.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Medidas de flujo (WIP, rendimiento, antigüedad, tiempo de ciclo) | Sencillas, independientes de la herramienta y basadas en recuentos y fechas; respaldan el pronóstico probabilístico | Necesitan definiciones coherentes y marcas de tiempo limpias; no dicen nada sobre valor ni calidad |
| Medidas basadas en estimaciones, como los puntos de historia | Incluyen una visión del esfuerzo y la complejidad; encajan con el trabajo planificado | Subjetivas y específicas de cada equipo; no pueden compararse entre equipos |
| Métricas de servicio basadas en promedios, como el tiempo medio de resolución | Fáciles de calcular y de explicar | Distorsionadas por los valores atípicos y la asimetría; ocultan la cola larga |
| Tiempo de ciclo y SLE basados en percentiles | Reflejan lo que viven los clientes; respaldan una promesa clara | Necesitan suficiente historial; más difíciles de explicar a quienes están acostumbrados a los promedios |
| Una definición única en toda la organización de "empezado" y "terminado" | Permite consolidar y comparar | Encaja mal con algunos equipos; puede empujar a los equipos hacia estados artificiales |

Elige la medida más sencilla que sirva a la decisión en curso. Las medidas de flujo funcionan bien para un equipo que tira del trabajo y puede terminar elementos en días. Encajan peor cuando los elementos tardan meses, cuando un elemento varía enormemente de tamaño o cuando la mayor parte del valor está en el descubrimiento y no en la entrega.

## Preguntas para conversar con tu equipo

**1. ¿Qué estado significa "empezado" para nosotros, cuál significa "terminado", y todos están de acuerdo?**
Pon el tablero en pantalla y pide a cada persona que señale el primer y el último estado del reloj. Anota los desacuerdos, porque son la mayor fuente de tiempos de ciclo poco fiables. Fíjate sobre todo en los elementos que esperan en revisión, en una cola de versiones o en manos de un proveedor. Acordad una definición escrita del flujo de trabajo y una fecha en que entre en vigor.

**2. ¿Cuánto trabajo tenemos en curso ahora mismo, y qué pasaría si dejáramos de empezar elementos nuevos durante una semana?**
Cuenta las tarjetas, incluido el trabajo estancado. Pregunta qué terminaría el equipo y qué seguiría atascado. El facilitador debe orientar la conversación hacia las razones para empezar pronto, como el miedo al tiempo ocioso o la presión de las partes interesadas, y alejarla de la culpa. Proponed un primer límite de WIP y una fecha para revisarlo.

**3. ¿Qué elementos son los más antiguos del tablero, y qué detiene a cada uno?**
Ordena por antigüedad y hablad de los tres elementos más antiguos. Para cada uno, nombrad el obstáculo, la persona que puede retirarlo y la siguiente acción. Comparad las mayores antigüedades con el percentil 85 de los tiempos de ciclo pasados. Haced de esta pregunta un hábito en cada sincronización, porque la antigüedad es la única medida que aún puede cambiar un resultado.

**4. ¿Cómo es nuestra distribución del tiempo de ciclo, y qué promesa podemos hacer a partir de ella?**
Muestra el diagrama de dispersión de los elementos terminados en las últimas 8 a 12 semanas. Lee la mediana y los percentiles 85 y 95. Discutid si el equipo se siente cómodo declarando una SLE en el percentil 85 y qué tenían en común los valores atípicos. El facilitador debe comprobar que el grupo entiende la diferencia entre la mediana y la cola.

**5. ¿Cómo afectan los incidentes y las solicitudes al trabajo planificado del que tiramos de la lista de pendientes?**
Etiqueta los elementos terminados por tipo y compara tiempos de ciclo y rendimiento por tipo. Pregunta con qué frecuencia se estancó un elemento planificado porque llegó un incidente. Decidid si ayudaría una política de urgencia o una capacidad reservada, y cómo mantener visible su uso (véase el tema 2.9, Trabajo operativo y trabajo no planificado). Hablad de qué dejaría de hacer el equipo si las interrupciones se duplicaran.

**6. ¿Cuáles de estas medidas podríamos manipular, y cómo lo notaríamos?**
Repasa cada medida y pregunta cómo alguien bajo presión podría hacer que pareciera mejor sin mejorar el flujo. Empareja cada respuesta con una barrera de protección de la tabla. El facilitador debe tratarlo como un ejercicio de diseño del instrumento y no como una acusación. Elegid una barrera de protección que añadir este trimestre y nombrad un responsable.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega usan las medidas de flujo para ver su propio sistema. Sacan más partido de la antigüedad de los elementos en curso y de la distribución del tiempo de ciclo, que les dicen en qué concentrarse y qué prometer. Deben evitar convertir el rendimiento en una meta y evitar comparar sus números con los de otros equipos (véase el tema 2.8, Métricas DORA, para las medidas de nivel de entrega que se sitúan por encima del flujo del equipo).

### Equipos de servicio y operaciones

Los equipos de servicio manejan llegadas que no controlan. Las medidas de flujo muestran cómo las interrupciones, los traspasos y la espera de otros alargan el tiempo de terminar. Les beneficia tener vistas separadas para incidentes, solicitudes y cambios planificados, y el tiempo bloqueado informado por motivo. Deben conservar los relojes de ITIL que exigen los contratos mientras usan los relojes de flujo para dirigir el equipo.

### Liderazgo y gobernanza

Los líderes deben pedir la distribución y la tendencia, no una cifra única, y deben leer los cambios con los cambios de flujo de trabajo registrados al lado. Pueden usar el cumplimiento de la SLE y los perfiles de antigüedad para ver el riesgo a tiempo. Deben resistirse a consolidar el rendimiento entre equipos, porque las definiciones de los elementos difieren, y deben financiar la limpieza de los modelos de estado y de las marcas de tiempo que necesitan unos datos de flujo fiables.

### Clientes y usuarios

Los clientes sienten el tiempo de ciclo y en especial su cola. Un enunciado como "la mayoría de las solicitudes de este tipo se resuelven en un número indicado de días" les da algo en lo que apoyar su planificación, y una nota honesta cuando el equipo queda fuera de su expectativa genera confianza. No necesitan los recuentos de WIP ni de rendimiento, pero se benefician cuando esas medidas reducen la espera.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional gestiona un equipo combinado que atiende solicitudes de servicio de usuarios finales y un pequeño flujo de mejoras planificadas de los sistemas clínicos. Todos los números de este ejemplo son ilustrativos.

El equipo tiene un tablero con los estados Listo, En curso, A la espera de terceros, Revisión y Hecho. El gerente nota que el informe mensual muestra 46 elementos terminados, en línea con el mes anterior, y sin embargo el personal clínico se queja de que las solicitudes tardan "una eternidad". Una revisión del historial del gestor muestra que "empezado" se establecía cuando una tarjeta se clasificaba por primera vez, de modo que el tiempo de ciclo incluía días en una cola.

El equipo reescribe la definición del flujo de trabajo: "empezado" es el primer paso a En curso, "terminado" es el paso a Hecho, y A la espera de terceros cuenta como en curso, con su propio tiempo bloqueado. Con los nuevos relojes, la mediana del tiempo de ciclo de las últimas 10 semanas es de 4 días, el percentil 85 es de 11 días y el percentil 95 es de 24 días. El WIP medio es de 19 elementos para un equipo de 6. La antigüedad del elemento de trabajo muestra siete tarjetas de más de 11 días, y cinco de ellas esperan a un proveedor externo.

El equipo decide tres cosas. Fija una SLE de "el 85 por ciento de los elementos termina en 11 días o menos". Fija un límite de WIP de 12 y acuerda dejar de empezar nuevos elementos planificados cuando se alcance el límite. También añade una revisión semanal de diez minutos de los cinco elementos más antiguos. Los elementos del proveedor se elevan a través de la gestión de proveedores con las fechas en que llevan esperando.

Seis semanas después, el percentil 85 del tiempo de ciclo es de 8 días y el WIP promedia 12. El rendimiento es de 44 elementos por semana durante varias semanas, cerca del nivel anterior. Entonces el equipo ve un posible riesgo de manipulación: la mediana del tiempo de ciclo baja a 2 días en una semana, pero el recuento de elementos terminados por semana sube bruscamente y la proporción de elementos reabiertos en una semana aumenta. Una muestra de tarjetas muestra que se estaban dividiendo solicitudes grandes en varias tarjetas de una línea para aumentar el rendimiento y acortar el tiempo de ciclo. Las barreras de protección lo detectaron: la mezcla de tamaños de los elementos y la tasa de reaperturas. El equipo acuerda una regla sobre qué cuenta como un elemento, fusiona las tarjetas divididas en los informes y sigue publicando la SLE y la lista de antigüedad.

## Perspectiva por sector

**Startup.** Un equipo pequeño puede empezar con un tablero físico o digital y una hoja de cálculo con fechas de inicio y fin. Empieza con la antigüedad y el WIP, porque no necesitan historial, y añade los percentiles del tiempo de ciclo tras unas diez semanas de datos. Mantén un tablero para el trabajo planificado y las correcciones urgentes, etiquetados por tipo, para que las interrupciones sean visibles.

**Pequeña empresa.** El trabajo suele llegar por correo electrónico o por un centro de servicios alojado. Usa las fechas de creación, inicio y resolución de la propia herramienta, comprueba que "empezado" signifique que alguien comenzó el trabajo y exporta los datos con regularidad. Una mirada semanal sencilla a los elementos abiertos más antiguos hace más bien que un panel elaborado.

**Gran empresa.** Muchos equipos, herramientas y flujos de trabajo hacen de la coherencia en las definiciones el principal desafío. Acordad un pequeño vocabulario común para empezado y terminado, dejad que los equipos asignen sus estados locales a él y mantened los datos de flujo de cada equipo a nivel de equipo. Usa las medidas para detectar colas sistémicas, como pasos de aprobación compartidos o entornos compartidos, y no para comparar equipos.

**Gobierno y sector público.** Los plazos legales, los requisitos de auditoría y las normas de contratación dan forma a los relojes. Mantén el reloj legal separado del reloj de flujo del equipo y documenta ambos. Los pasos controlados por proveedores suelen dominar el tiempo de ciclo, así que regístralos como tiempo bloqueado y usa los datos en las conversaciones contractuales (véase el tema 8.4, Métricas de proveedores y contratos).

## Caso de negocio: motivaciones, ROI y TCO

El costo de las medidas de flujo es bajo en herramientas y moderado en disciplina. Un equipo necesita un tablero con cambios de estado fiables, unas horas para escribir la definición del flujo de trabajo, una breve revisión periódica y alguien que mantenga los gráficos. Si las marcas de tiempo provienen del gestor o de la herramienta ITSM, la recogida es casi gratuita. El costo mayor es el tiempo dedicado a alinear definiciones y a cambiar hábitos, como dejar de empezar trabajo nuevo cuando se alcanza el límite.

El retorno se nota en la previsibilidad y en menos sorpresas. Un equipo que puede declarar una SLE a partir de sus propios datos puede responder "¿cuándo estará hecho?" sin inflar las estimaciones, y puede ver pronto el trabajo estancado. Describe el beneficio con medidas que puedas observar tú mismo: la proporción de elementos más antiguos que el percentil 85, la anchura de la brecha entre la mediana y el percentil 95, y el tiempo dedicado a reuniones de estado antes y después. Aquí no se ofrece ningún valor de referencia, porque las cifras publicadas dependen del flujo de trabajo y de las definiciones de los elementos. El costo total de propiedad es sobre todo tiempo de las personas, así que cuéntalo y compáralo con el costo del trabajo que espera sin ser visto.

## Antipatrones y trampas

- **Contar elementos que nunca empezaron.** Las tarjetas de la lista de pendientes inflan el WIP y la antigüedad y hacen ilegible el tablero. Cuenta solo los elementos empezados y guarda la lista de pendientes en su propio lugar (véase el tema 2.6, Métricas de la lista de pendientes y su refinamiento).
- **Tratar un límite de WIP como una meta que alcanzar.** Un límite es un techo que deja al descubierto las colas. Revisa si el límite cumple su función y bájalo cuando el equipo pueda manejarlo.
- **Informar solo promedios.** El tiempo de ciclo medio oculta la cola larga que sienten los clientes. Informa la mediana y los percentiles 85 y 95.
- **Pausar el reloj durante la espera.** Detener el reloj cuando un elemento está bloqueado hace que el tiempo de ciclo parezca mejor y oculta el retraso. Mantén el reloj en marcha e informa el tiempo bloqueado por separado.
- **Comparar el rendimiento entre equipos.** Las definiciones y los tamaños de los elementos difieren. Compara cada equipo con su propio historial.
- **Usar las medidas de flujo para juzgar a individuos.** Los elementos terminados por persona invitan a la manipulación e ignoran el trabajo compartido. Mantén cada medida a nivel de equipo.
- **Cambiar el flujo de trabajo sin registrarlo.** Un cambio en el nombre de un estado o en una política rompe la tendencia en silencio. Registra la fecha y el motivo, y márcalo en cada gráfico.
- **Mezclar incidentes, solicitudes y trabajo planificado en una misma distribución.** Sus tiempos de ciclo difieren por naturaleza. Etiqueta por tipo y lee cada distribución por separado.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | "Empezado" y "terminado" significan cosas distintas para personas distintas | Algunos equipos escriben sus estados de flujo de trabajo | Una definición escrita del flujo de trabajo por equipo, con reglas de reloj para el tiempo bloqueado | Cambios de definición registrados y marcados en los gráficos; relojes revisados por deriva | Definiciones alineadas entre equipos y proveedores donde el trabajo cruza fronteras, y revisadas cuando dejan de informar decisiones |
| Medición del trabajo sin terminar | El estado se cuenta en reuniones | Las tarjetas muestran la antigüedad o el WIP en algunos equipos | WIP contado a diario y antigüedad mostrada en cada tarjeta, con un límite escrito | Las bandas de antigüedad tomadas de percentiles históricos impulsan la acción diaria | Colas y traspasos entre equipos seguidos conjuntamente, con la antigüedad compartida con los proveedores |
| Medición del trabajo terminado | Recuentos de tickets cerrados por mes | Promedios del tiempo de ciclo informados por algunos equipos | Percentiles del tiempo de ciclo y rendimiento semanal desde una sola fuente de datos | Tendencias revisadas frente a los cambios registrados; cumplimiento de la SLE seguido | Los pronósticos a partir de datos de flujo informan la planificación y los compromisos de servicio entre equipos |
| Uso y barreras de protección | Números usados para perseguir a las personas | Conciencia informal de la manipulación | Cada medida emparejada con una barrera de protección y revisada con el equipo | Las alertas de las barreras de protección conducen a trabajo de mejora financiado | Medidas y barreras de protección revisadas conjuntamente con clientes y proveedores |

## Lista de verificación

- [ ] La definición del flujo de trabajo está escrita, con los estados "empezado" y "terminado" nombrados.
- [ ] Un elemento de trabajo está definido, con una regla para dividir y fusionar elementos.
- [ ] El WIP se cuenta a diario a partir de los datos de la herramienta y hay un límite de WIP escrito.
- [ ] Cada tarjeta en curso muestra su antigüedad en días.
- [ ] El tiempo de ciclo se informa como la mediana, el percentil 85 y el percentil 95 sobre una ventana indicada.
- [ ] El rendimiento se informa como un gráfico de secuencia semanal con su ventana.
- [ ] Una expectativa de nivel de servicio se declara a partir de los propios datos del equipo y se revisa cada trimestre.
- [ ] El tiempo bloqueado se registra con inicio, fin y motivo, y el reloj del elemento sigue en marcha.
- [ ] Los incidentes, las solicitudes y el trabajo planificado están etiquetados para poder leer cada uno por separado.
- [ ] Cada cambio de un estado o de una política se registra con su fecha y motivo.
- [ ] Cada medida está emparejada con una barrera de protección de la tabla de manipulación.
- [ ] Ninguna medida se usa para clasificar a individuos ni para comparar equipos.

## Prompts de IA

**Revisa una definición del flujo de trabajo en busca de problemas de reloj.**

```text
Este es el flujo de trabajo de [team or service]: [list of states and
transitions, with a one-line meaning for each if known]. Queremos calcular el
trabajo en curso, el rendimiento, la antigüedad del elemento de trabajo y el
tiempo de ciclo usando las definiciones de la literatura de flujo. Identifica
qué estado debería arrancar el reloj y cuál debería detenerlo, cualquier estado
en el que el reloj pudiera pausarse o malinterpretarse y cualquier estado que
dos equipos pudieran interpretar de forma distinta. No adivines cómo está
configurada nuestra herramienta. Enumera tus supuestos y las preguntas que
debería responder para cerrar la definición.
```

**Analiza una exportación de elementos de trabajo.**

```text
Tengo una exportación de [number] elementos de trabajo terminados de [tool] con
estos campos: [field names, for example id, type, started date, finished date,
blocked periods]. Explica cómo calcular los percentiles del tiempo de ciclo, el
rendimiento semanal y el trabajo en curso diario a partir de estos campos, y
cómo tratar las fechas ausentes, los elementos reabiertos y los elementos de
tipo [types]. Da los pasos y un esquema breve de script en [language], y no
supongas ningún valor. Enumera tus supuestos y las comprobaciones de calidad de
datos que debería ejecutar primero.
```

**Redacta un enunciado de expectativa de nivel de servicio.**

```text
Nuestro equipo atiende [type of work] y tiene datos de tiempo de ciclo de las
últimas [number] semanas, con una mediana de [value], un percentil 85 de
[value] y un percentil 95 de [value]. Redacta una expectativa de nivel de
servicio de una frase y una nota breve que la explique a [audience, for example
customers or the service owner], incluido lo que no promete. No inventes
valores objetivo ni referencias. Enumera tus supuestos y las salvedades sobre el
tamaño de la muestra.
```

**Revisa los riesgos de manipulación de nuestras medidas de flujo.**

```text
Seguimos [list of flow measures] para [team or service]. El equipo está bajo
presión para [pressure, for example reduce ticket age]. Para cada medida,
enumera formas realistas de hacer que parezca mejor sin mejorar el flujo, la
señal en nuestros datos que revelaría cada una y una barrera de protección
emparejada. No inventes estadísticas ni cites estudios. Enumera tus supuestos y
los datos que necesitaría para probar cada riesgo.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una medida de flujo y la barrera de protección que debería acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen en sintonía la plantilla, la tabla de definiciones y la tabla de manipulación.

## Puntos clave

- Cuatro medidas describen el flujo: trabajo en curso, rendimiento, antigüedad del elemento de trabajo y tiempo de ciclo, cada una con una definición breve y un reloj que debe quedar escrito.
- La antigüedad del elemento de trabajo y el WIP son las medidas adelantadas; el rendimiento y el tiempo de ciclo confirman lo que ya ocurrió.
- Informa el tiempo de ciclo y la antigüedad como percentiles y declara una expectativa de nivel de servicio a partir de tus propios datos.
- Las mismas medidas encajan con el trabajo de proyecto y el de servicio, siempre que etiquetes los tipos de trabajo y nombres cada reloj.
- Toda medida puede manipularse moviendo el reloj, dividiendo elementos o escondiendo trabajo, así que empareja cada una con una barrera de protección.
- Mantén las medidas a nivel de equipo y úsalas para mejorar el flujo de trabajo, nunca para clasificar a las personas.

## Referencias y lecturas complementarias

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
