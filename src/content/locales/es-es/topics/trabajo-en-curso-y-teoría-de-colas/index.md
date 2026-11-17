# Trabajo en curso y teoría de colas

**Un equipo totalmente ocupado es un equipo cuyo trabajo espera, así que mide cuánto trabajo hay en curso, cuánto tiempo hace cola y qué tan cerca de su capacidad opera el equipo, y usa la aritmética de las colas para fijar límites antes de que lleguen los retrasos.**

## Resumen y motivación

Todo equipo de servicio tiene una cola, use o no la palabra. Los incidentes esperan la clasificación, las solicitudes esperan la aprobación, los cambios esperan un hueco de revisión y los elementos de la lista de pendientes esperan a que alguien tire de ellos. La mayor parte del tiempo transcurrido en estos sistemas se pasa esperando, no trabajando. Las medidas de este tema explican por qué crece la espera, cómo verla pronto y qué puede hacer un equipo al respecto.

La cantidad central es el [trabajo en curso](https://en.wikipedia.org/wiki/Work_in_process) (WIP), el número de elementos que se han empezado y aún no se han terminado. Los equipos ágiles que gestionan el flujo hacen visible el WIP en un tablero y lo limitan con un límite de WIP. Las operaciones de servicio bajo ITIL cuentan los incidentes, solicitudes y cambios abiertos, y llaman a la colección una cola o una lista de pendientes de registros. Las dos visiones describen lo mismo: elementos dentro de un sistema que aún no los ha entregado. Este tema usa "trabajo en curso" para ambas y establece el límite cada vez (qué estados cuentan como "en curso" y cuáles no), porque ese límite decide todos los números que siguen.

Las matemáticas provienen de la [teoría de colas](https://en.wikipedia.org/wiki/Queueing_theory), el estudio de las líneas de espera. Su resultado más útil para un equipo de servicio es la [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law), demostrada por John Little en 1961. Para un sistema estable, el número medio de elementos en el sistema es igual a la tasa media de llegada multiplicada por el tiempo medio que un elemento pasa en el sistema. En términos de entrega, el WIP medio es igual al rendimiento medio multiplicado por el tiempo de ciclo medio. La ley se cumple sea cual sea el orden en que se atiende a los elementos, lo que la convierte en una comprobación de cordura barata para cualquier conjunto de métricas de flujo (véanse el tema 2.1, Medidas de flujo, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo).

El segundo resultado es menos cómodo. A medida que un recurso compartido se acerca al uso total, el tiempo de espera crece cada vez más deprisa. Una aproximación relacionada, la [fórmula de Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), muestra que el retraso de la cola crece con la utilización en proporción al cociente entre la utilización y la fracción ociosa restante, y crece también con la variabilidad de las llegadas y de los tiempos de servicio. El trabajo de soporte y de operaciones es variable por naturaleza, ya que los incidentes llegan en ráfagas y el esfuerzo por elemento difiere mucho. Un equipo que planea estar ocupado al 100 por ciento ha planeado, por tanto, esperas largas, y el primer incidente grave convierte las esperas largas en una lista de pendientes que tarda semanas en despejarse.

Términos usados en este tema:

- La **tasa de llegada** es el número de elementos que entran en el sistema por unidad de tiempo.
- El **rendimiento** (o tasa de salida) es el número de elementos que salen del sistema como terminados, por unidad de tiempo.
- El **tiempo de ciclo** es el tiempo transcurrido desde el momento en que un elemento entra en el límite del sistema hasta el momento en que sale de él. Este tema usa el mismo reloj que el tema 2.2.
- El **tiempo de cola** es la parte del tiempo transcurrido durante la cual un elemento espera y nadie trabaja en él.
- La **utilización** es la fracción de la capacidad disponible que está en uso. Para un equipo, la capacidad se expresa en horas de trabajo o en un recuento de elementos que pueden manejarse en paralelo. La utilización es una propiedad de un equipo o de un conjunto de recursos, nunca de un individuo.
- El **límite de WIP** es un máximo acordado de elementos en una etapa o en todo el sistema. No se empieza un elemento nuevo cuando se alcanza el límite.
- Un **cuello de botella** es la etapa con menor capacidad en relación con la demanda. Marca el ritmo de toda la cadena, un punto desarrollado por la [teoría de las restricciones](https://en.wikipedia.org/wiki/Theory_of_constraints) y su idea del [cuello de botella](https://en.wikipedia.org/wiki/Bottleneck_(production)).

Las visiones ágil y de ITIL se encuentran aquí: ITIL 4 (2019) trata la gestión de la capacidad y el desempeño, la gestión de incidentes y la gestión de solicitudes de servicio como prácticas que dependen de ajustar la capacidad a la demanda, y los métodos ágiles expresan la misma idea como limitar el trabajo en curso y terminar antes de empezar. El [desarrollo de software lean](https://en.wikipedia.org/wiki/Lean_software_development) trata el trabajo sin terminar como inventario con costo de mantenimiento y riesgo.

## Principios clave

- **La espera domina el tiempo transcurrido.** En la mayoría de los sistemas de servicio y de entrega, los elementos esperan mucho más de lo que nadie trabaja en ellos, así que reducir la espera es una palanca mayor que trabajar más rápido.
- **La ley de Little vincula los tres números de flujo.** El WIP medio, el rendimiento y el tiempo de ciclo no pueden fijarse de forma independiente. Si quieres un tiempo de ciclo más corto con el mismo rendimiento, debes bajar el WIP.
- **El retraso crece abruptamente cerca de la utilización total.** La holgura es el precio de la capacidad de respuesta. Un equipo sin capacidad de reserva no puede absorber una ráfaga ni un elemento urgente sin retrasar todo lo demás.
- **La variabilidad amplifica las colas.** Las llegadas irregulares y los tamaños de elemento irregulares alargan las colas incluso cuando la carga media parece aceptable. Reduce la variabilidad donde puedas y amortíguala donde no.
- **Limita el WIP para terminar el trabajo, no para parecer ocupado.** Un límite de WIP es un detonante para conversar sobre el trabajo bloqueado y la capacidad, no una regla de cumplimiento.
- **Mide a nivel del sistema.** El WIP, la longitud de la cola y la utilización describen equipos y servicios, nunca a las personas que los integran.
- **Informa distribuciones, no promedios.** Los tiempos de cola tienen cola larga, así que muestra la mediana y un percentil alto como el 85 o el 95 (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Definiciones de métricas

Siete medidas cubren el tema. Cada una se define para un límite con nombre que el equipo escribe en su registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trabajo en curso | Número de elementos empezados y no terminados dentro del límite acordado | Recuento de elementos en estados "en curso" en el momento de la instantánea; se excluyen los elementos de la lista de pendientes o de la cola de "listo" anteriores al primer estado de trabajo y los elementos ya hechos | elementos | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; gestión de solicitudes de servicio | Recuento de WIP en el tablero | Instantánea diaria, revisada semanalmente |
| Longitud de la cola | Número de elementos que esperan a que empiece el trabajo o que esperan entre etapas | Recuento de elementos en estados de espera (por ejemplo "nuevo", "a la espera de clasificación", "a la espera de revisión") en el momento de la instantánea; los elementos bloqueados se informan por separado, no se suman | elementos | Historial de estados del gestor o de la herramienta ITSM | Gestión de incidentes; habilitación de cambios | Columna de listo y columnas de cola en un tablero | Instantánea diaria, revisada semanalmente |
| Tiempo de cola | Tiempo transcurrido que un elemento pasa esperando antes de que empiece el trabajo, por etapa | El reloj arranca cuando el elemento entra en un estado de espera y se detiene cuando entra en el siguiente estado activo; el tiempo en un estado marcado como "bloqueado por el cliente" se excluye y se informa como su propia cifra; informa la mediana y el percentil 85 | horas o días | Marcas de tiempo de transición de estados en el gestor o en la herramienta ITSM | Centro de servicios; gestión de incidentes; habilitación de cambios | Tiempo de espera en un flujo de valor; tiempo en columnas de cola | Semanal |
| Tasa de llegada y de salida | Elementos que entran y salen del sistema por periodo, y su diferencia como crecimiento neto de la cola | Llegadas = elementos que entran en el límite en el periodo; salidas = elementos que se completan en el periodo; crecimiento neto = llegadas menos salidas; los elementos reabiertos cuentan como llegadas solo si el equipo lo define así | elementos por semana | Marcas de tiempo de creación y de resolución del gestor o de la herramienta ITSM | Monitorización y gestión de eventos; gestión de incidentes | Rendimiento y diagrama de flujo acumulado | Semanal |
| Razón de carga del equipo | Proporción de la capacidad del equipo que consumiría el trabajo planificado y esperado | Horas de demanda esperadas en el periodo (llegadas por esfuerzo medio por elemento) / horas de capacidad disponibles tras permisos y compromisos fijos; el equipo indica cómo estima el esfuerzo; nunca se informan individuos | porcentaje | Plan de capacidad, historial de esfuerzo del gestor, calendario de turnos | Gestión de la capacidad y el desempeño; gestión de la fuerza laboral y el talento | Capacidad del equipo en el trabajo planificado | Mensual, y en cada evento de planificación |
| Tasa de incumplimiento del límite de WIP | Proporción de días en que una etapa o el sistema supera su límite de WIP acordado | Días con WIP por encima del límite / días laborables del periodo; los días en que el equipo registró una excepción deliberada con un motivo se informan por separado | porcentaje de días | Instantáneas diarias de WIP y el registro de excepciones | Mejora continua; gestión de incidentes | Acuerdo de trabajo sobre el límite de WIP | Semanal |
| Razón de coherencia de la ley de Little | Comprobación de que los tres números de flujo concuerdan entre sí | WIP medio del periodo / (salidas por día por tiempo de ciclo medio en días) para el mismo límite y periodo; una razón cercana a 1 significa que las definiciones son coherentes, una razón alejada de 1 significa que un límite o un reloj es incoherente | razón | Los mismos datos del gestor que las demás métricas de flujo | Medición e informes | Comprobación de cordura de métricas de flujo en una retrospectiva | Mensual |

## Recomendaciones

### Define primero el límite

**1. Escribe el límite del sistema antes de contar nada.** Indica qué estado inicia el "en curso" y cuál lo termina, y qué elementos se excluyen (por ejemplo el mantenimiento programado o los elementos que esperan a un cliente). Dos equipos que cuentan el WIP de forma distinta producirán números que no pueden compararse, y un límite que se mueve en silencio romperá la comprobación de la ley de Little. Anota el límite en el registro de métricas y cámbialo solo con un motivo registrado.

**2. Separa la espera del trabajo en el modelo de estados.** Si un solo estado cubre tanto "en cola para revisión" como "en revisión", el tiempo de cola es invisible. Da a los estados de espera sus propios nombres, como se describe en el tema 1.5, Fuentes de datos e instrumentación, para que las marcas de tiempo de transición revelen el retraso. El costo de un estado adicional es pequeño comparado con el valor de ver dónde se detienen los elementos.

### Usa la ley de Little como comprobación de coherencia

**3. Ejecuta la comprobación de la ley de Little cada mes.** Calcula el WIP medio, el rendimiento y el tiempo de ciclo medio del mismo periodo y límite, y comprueba si concuerdan aproximadamente. Un desajuste grande suele significar que entran o salen elementos del sistema sin contarse, o que hay elementos antiguos aparcados en un estado desatendido. Corrige los datos antes de interpretar cualquier tendencia. La ley es un teorema sobre sistemas estables, así que aplícala a periodos en que la cola no creció ni se redujo de forma drástica.

### Vigila la utilización y el crecimiento de la cola

**4. Planifica holgura donde la variabilidad sea alta.** Para la gestión de incidentes, el trabajo de guardia y cualquier cola alimentada por una demanda aleatoria, planifica por debajo de la capacidad total para que una ráfaga no se convierta en una lista de pendientes. Los equipos suelen descubrir que una razón de carga que parece cómoda sobre el papel ya es demasiado alta cuando se cuentan las interrupciones (véase el tema 2.9, Trabajo operativo y trabajo no planificado). Acordad el rango objetivo con las personas que hacen el trabajo y revisadlo después de cualquier incidente grave.

**5. Sigue el crecimiento neto de la cola además de su tamaño.** Una cola de 40 elementos que se reduce es sana, y una de 15 que crece 5 elementos por semana no lo es. Compara llegadas y salidas cada semana y traza la tendencia con un [diagrama de flujo acumulado](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), donde una banda que se ensancha para una etapa indica un WIP creciente en ella. Cuando las llegadas superan a las salidas durante varias semanas, la cola crece sin límite y toca decidir: añadir capacidad, reducir la demanda o cambiar lo que se acepta.

**6. Lee el tiempo de cola por etapa para encontrar el cuello de botella.** Desglosa el tiempo transcurrido en periodos de espera por etapa. La etapa con el mayor tiempo de cola y más elementos esperando es candidata a cuello de botella. Mejorar cualquier otra etapa no acortará todo el sistema, así que dirige el esfuerzo de mejora a la restricción y vuelve a comprobar después, porque la restricción se mueve.

### Limita el WIP de un modo que funcione

**7. Fija el primer límite de WIP a partir de la observación y luego ajústalo.** Empieza cerca del WIP medio actual, o ligeramente por debajo, y observa qué ocurre con el tiempo de ciclo y con los elementos bloqueados. Baja el límite paso a paso mientras el equipo pueda mantener a cada persona productiva terminando trabajo. No hay un número correcto universal, y una cifra tomada de otro equipo no aporta ninguna evidencia para el tuyo.

**8. Trata un incumplimiento como un aviso, no como una infracción.** Cuando el WIP supere el límite, pregunta qué impide terminar y quién puede unirse para resolverlo. Un incumplimiento registrado con un motivo, como una corrección urgente en producción, es información. Si los incumplimientos se vuelven rutina, el límite es erróneo o el sistema está sobrecargado, y la respuesta es una conversación sobre capacidad y no una reprimenda.

**9. Aplica los límites a todo el flujo de valor, no a una columna.** Un límite solo sobre "en curso" deja que el trabajo se acumule en las colas de revisión, pruebas y aprobación. Limita el número de elementos del sistema de extremo a extremo y añade límites por etapa donde una cola concreta siga creciendo. Las etapas compartidas, como una revisión del comité asesor de cambios o un entorno de pruebas, merecen su propio límite visible y su propio tiempo de cola.

### Maneja el trabajo urgente y variable con deliberación

**10. Dale una política al trabajo de urgencia.** Sin ella, los elementos urgentes superan en silencio todos los límites y el equipo no puede distinguir la carga planificada de la no planificada. Define qué califica, cuántos elementos de urgencia pueden estar en marcha y qué trabajo se pausa. Cuenta los elementos de urgencia y su efecto en el tiempo de cola, para que el costo de la urgencia sea visible para quienes la solicitan (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Trabajo en curso | Mover elementos a un estado "aparcado" o "en espera" para mantenerse bajo el límite; dividir elementos para que parezcan más pequeños; empezar trabajo fuera del tablero | Recuento de elementos en estados aparcados y su antigüedad; muestrear el tablero frente al trabajo real; informar el elemento en curso más antiguo |
| Longitud de la cola | Cerrar y reabrir elementos; rechazar elementos nuevos en la puerta; renombrar estados de espera para que queden fuera del recuento | Tasa de reaperturas y tasa de rechazos junto a la longitud de la cola; revisión de las definiciones de estados en cada revisión de métricas |
| Tiempo de cola | Arrancar el reloj tarde creando el registro cuando el trabajo ya está listo; pausar el reloj mediante estados de bloqueo o de espera del cliente; marcar un elemento como en curso cuando solo se ha abierto | Distribución del tiempo en estados de bloqueo y pausa; proporción de elementos creados después de haber empezado; espera informada por el solicitante mediante una encuesta breve |
| Tasa de llegada y de salida | Cerrar elementos rápido para subir las salidas; dividir una solicitud en muchas para subir ambos recuentos; contar duplicados como llegadas | Medidas de calidad y de reaperturas sobre los elementos cerrados (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes); distribución de tamaños de los elementos; comprobación del resultado para el cliente |
| Razón de carga del equipo | Subestimar el esfuerzo para mostrar capacidad libre, o exagerar la demanda para justificar plantilla; informar una razón de un periodo favorable | Comparar el esfuerzo estimado y el real por elemento; mostrar la razón con su tendencia y la proporción de interrupciones; revisión por pares del método de estimación |
| Tasa de incumplimiento del límite de WIP | Subir el límite para detener los incumplimientos; esconder incumplimientos sacando elementos del tablero; conceder excepciones con facilidad | Número y motivos de las excepciones; historial de cambios de límite con fechas; percentil del tiempo de ciclo junto a la tasa de incumplimiento |
| Razón de coherencia de la ley de Little | Ajustar el límite o el periodo hasta que la razón se acerque a 1; excluir elementos de larga vida como valores atípicos | Fijar de antemano el límite y el periodo; publicar los elementos excluidos y su número; revisar con un motivo los cambios del límite |

Una lectura sana es la de un equipo cuyo WIP es estable o baja, cuyos percentiles del tiempo de cola son planos o mejoran, cuyas llegadas y salidas se equilibran aproximadamente y cuyos incumplimientos vienen con motivos que conducen a la acción. La razón de la ley de Little ronda 1 porque los datos son coherentes, no porque alguien la haya ajustado.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Límites de WIP estrictos | Tiempo de ciclo más corto, descubrimiento más temprano de problemas, más terminación | Puede aparecer tiempo ocioso en una etapa; requiere disciplina y algo de polivalencia; puede frustrar a las partes interesadas que quieren que se empiece el trabajo |
| Límites de WIP laxos o inexistentes | Todos parecen ocupados y las solicitudes se aceptan rápido | Colas largas, entrega lenta, bloqueos ocultos, mucho cambio de contexto |
| Capacidad de holgura planificada | Absorbe ráfagas y trabajo urgente; mantiene cortos los tiempos de respuesta | Parece un desperdicio en un informe de utilización; exige que la dirección acepte una menor eficiencia aparente |
| Utilización planificada alta | Parece eficiente y barata por hora | La espera crece abruptamente cuando la carga se acerca a la capacidad; frágil ante cualquier perturbación |
| Usar la ley de Little para planificar | Sencilla, general y rápida de aplicar | Válida solo para sistemas estables y para promedios; no dice nada sobre un elemento concreto |

Limita el WIP y conserva holgura donde la variabilidad y el costo del retraso sean altos, y acepta límites más laxos donde el trabajo sea constante e independiente.

En el modelo de manual más simple de un único servidor con llegadas y tiempos de servicio aleatorios (una cola M/M/1), el tiempo medio en el sistema es el tiempo de servicio dividido por uno menos la utilización: 2 veces al 50 por ciento, 5 veces al 80 por ciento, 10 veces al 90 por ciento y 20 veces al 95 por ciento. Los equipos reales no son servidores únicos, así que trata estas cifras como la forma de la curva, no como un pronóstico.

## Preguntas para conversar con tu equipo

**1. ¿Qué cuenta como "en curso" para nosotros, y todos lo contamos igual?**
Pide a cada persona que nombre el primer y el último estado que hace que un elemento forme parte del WIP, y luego compara las respuestas. Busca estados como "en espera" o "a la espera del cliente" que unos cuentan y otros no. Acordad un límite y escribidlo. El facilitador debe anotar cómo cambiarían las respuestas el número de WIP, porque eso muestra cuán sensible es la métrica a la definición.

**2. ¿Dónde esperan más tiempo nuestros elementos, y quién posee esa cola?**
Dibuja el flujo desde la llegada hasta hecho y marca los puntos de espera. Con los datos de un mes reciente, estima la mediana y el percentil 85 de la espera en cada punto. Discutid qué cola no tiene dueño, como un paso de aprobación o un entorno de pruebas compartido. Acordad una cola que examinar en detalle y una persona que traiga los datos la próxima vez.

**3. ¿Cuánta ocupación es demasiada para el tipo de trabajo que hacemos?**
Compara la carga planificada con la proporción de tiempo que realmente se dedica a interrupciones y elementos urgentes. Pregunta qué le pasó a la cola la última vez que la demanda se disparó. Discutid la idea de que un equipo sin capacidad de reserva no puede responder con rapidez. El facilitador debe orientar hacia un rango objetivo para la razón de carga, no un número único, y hacia un plan para cuando se supere el rango.

**4. ¿Nuestra cola crece, se reduce o es estable, y cómo lo sabemos?**
Mira las llegadas y salidas de las últimas ocho semanas. Basta un gráfico sencillo. Pregunta si alguien habría notado un aumento lento antes de que se convirtiera en un problema y qué señal desencadenaría la acción. Acordad qué debe hacer un equipo cuando las salidas van por detrás de las llegadas durante tres semanas seguidas.

**5. ¿Qué pasaría si bajáramos en uno nuestro límite de WIP?**
Pide a las personas que predigan qué elementos esperarían, cuáles terminarían antes y qué harían cuando no puedan empezar algo nuevo. Saca a la luz miedos como el de que los vean ociosos.

**6. ¿Concuerdan nuestros números entre sí?**
Toma un mes de datos y calcula el WIP medio, el rendimiento y el tiempo de ciclo medio. Comprueba si el WIP es aproximadamente el rendimiento por el tiempo de ciclo. Si no, busca la causa, como elementos terminados pero no cerrados, o elementos cerrados sin haberse empezado. El facilitador debe tratar un desajuste como un regalo: señala un problema de datos o de definición que de otro modo distorsionaría todas las demás métricas de flujo.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega sienten los efectos del exceso de WIP como cambio de contexto, retroalimentación tardía y trabajo sin terminar que se deteriora. Ganan más con límites de WIP visibles, elementos pequeños y el hábito de terminar antes de empezar. Un equipo debe mirar sus propios tiempos de cola entre etapas, como la espera de revisión, porque estos retrasos suelen ser mayores que el tiempo dedicado a programar (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

### Equipos de servicio y operaciones

Los equipos de operaciones afrontan una demanda aleatoria, así que los efectos de las colas son fuertes. Un centro de servicios, una rotación de guardias y un comité de revisión de cambios se comportan cada uno como una cola con llegadas variables. Estos equipos necesitan holgura explícita, reglas de prioridad claras y una política para el trabajo de urgencia, de modo que los elementos urgentes no desplacen en silencio todo lo demás (véanse el tema 3.1, Métricas del centro de servicios, y el tema 5.7, Métricas de trabajo repetitivo y guardias). Mide el tiempo de cola en cada traspaso y vigila el trabajo que rebota entre grupos (véase el tema 9.3, Métricas de colaboración y traspasos).

### Liderazgo y gobernanza

Los líderes influyen en las colas mediante la demanda que aceptan y la utilización que premian. Deben pedir percentiles del tiempo de cola y crecimiento neto de la cola además de la utilización, y esperar que un servicio sano opere por debajo de la capacidad total. Una petición de añadir más proyectos a un equipo que ya está en su límite es una decisión de alargar el tiempo de ciclo de todos, y la gobernanza debe hacer explícita esa compensación. Financia la capacidad en la restricción en lugar de campañas generales de eficiencia (véase el tema 5.4, Métricas de capacidad y rendimiento).

### Clientes y usuarios

Los clientes viven las colas como esperar una respuesta, y rara vez les importa lo ocupado que esté el equipo. Necesitan expectativas honestas basadas en la distribución de esperas pasadas, una forma de ver el estado de su solicitud y una vía de escalado para las necesidades urgentes. Limitar el WIP puede significar aceptar más despacio las solicitudes nuevas y completar más rápido las aceptadas, y esa elección debe explicárseles (véase el tema 6.2, Acuerdos de nivel de experiencia).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional tiene un centro de servicios, un equipo de infraestructura y un equipo de aplicaciones. Todos los números de este ejemplo son ilustrativos.

El equipo de aplicaciones atiende solicitudes de servicio y pequeños cambios de los sistemas clínicos. A lo largo de un trimestre, su panel muestra una mediana del tiempo de ciclo que subió de 6 días laborables a 11, mientras el equipo dice estar "a tope". La razón de carga que el equipo calcula para el trimestre es del 98 por ciento. El percentil 85 del tiempo de cola de la etapa "a la espera de la aprobación clínica" es de 9 días laborables, y el WIP medio en el tablero es de 44 elementos frente a un rendimiento de 4 elementos por día laborable. Aplicando la ley de Little, 44 dividido entre 4 da un tiempo de ciclo medio implícito de 11 días laborables, que concuerda con la cifra medida, así que los datos son coherentes y el equipo confía en ellos.

El jefe del departamento sugiere primero contratar a un externo. El responsable del equipo señala el desglose por etapas: de los 11 días, la cola previa a la aprobación clínica y la cola previa al despliegue explican la mayor parte del tiempo transcurrido, y el trabajo activo es una parte pequeña. Las llegadas del trimestre superaron a las salidas en unos 2 elementos por semana, de modo que la cola creció de forma constante. El equipo también ha estado aceptando todas las solicitudes urgentes, y los elementos de urgencia no tienen política.

El equipo decide cuatro cambios, registrados en el registro de decisiones. Fija un límite de WIP de 30 elementos para todo el sistema, con un límite de etapa de 8 en la cola de aprobación. Planifica una razón de carga de alrededor del 80 por ciento para que quepan las interrupciones esperadas. Redacta una política de urgencia que permite como máximo dos elementos urgentes en marcha. Pide al grupo de aprobación clínica que celebre un breve espacio de revisión diario en lugar de una reunión semanal. Tras ocho semanas, el equipo informa de una mediana del tiempo de ciclo de 7 días laborables, un tiempo de cola en el percentil 85 en la aprobación de 3 días laborables y una tasa de incumplimiento del 10 por ciento de los días, con los motivos registrados.

El equipo detecta un riesgo de manipulación en el segundo mes. La tasa de incumplimiento parece excelente, pero una muestra del tablero muestra varios elementos en un estado nuevo llamado "pendiente", que queda fuera del recuento de WIP, y la barrera de protección del recuento de estados aparcados venía subiendo. El equipo elimina el estado, devuelve los elementos al recuento y exige que todo estado nuevo se añada al registro con una definición. La tasa de incumplimiento sube al 18 por ciento durante unas semanas, lo que el equipo acepta como la cifra honesta, y luego baja a medida que se resuelven los elementos bloqueados.

## Perspectiva por sector

**Startup.** La demanda es irregular y la tentación es empezarlo todo. Basta un tablero sencillo con un límite de WIP visible y una comprobación semanal del elemento en curso más antiguo. Conserva holgura para los problemas de producción, ya que una sola caída puede consumir a todo el equipo.

**Pequeña empresa.** Una o dos personas suelen encargarse del soporte, los proyectos y la administración, y la bandeja de entrada es la cola. Separa el trabajo planificado del reactivo, fija un límite diario de tareas empezadas e informa a los clientes de la espera habitual para cada tipo de solicitud.

**Gran empresa.** Muchos equipos comparten etapas como la aprobación de cambios, la revisión de seguridad y los entornos de pruebas, y las colas compartidas suelen ser las más largas. Mide el tiempo de cola en las etapas compartidas y publícalo, da a cada etapa compartida un responsable y evita informar la utilización como meta. Las herramientas pueden contar el WIP de forma distinta entre equipos, así que acordad un límite común y un vocabulario de estados común antes de consolidar (véase el tema 2.4, Métricas del flujo de valor).

**Gobierno y sector público.** Los plazos legales, los pasos de contratación y las aprobaciones formales crean colas largas que los equipos no controlan. Separa el tiempo que un equipo controla del tiempo que pasa esperando a otros organismos, e informa ambos. Donde las metas de servicio estén fijadas por ley o reglamento, documenta las reglas del reloj y las pausas, y conserva el rastro de auditoría (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es una entrega más rápida y predecible sin añadir personal, porque la espera domina el tiempo transcurrido y un recorte modesto del WIP o de una cola de aprobación larga acorta el tiempo de ciclo de cada elemento posterior. La holgura planificada también permite a un equipo absorber un incidente grave sin perder semanas de otro trabajo.

Los costos son modestos y sobre todo de personas: esfuerzo para definir límites y estados, para construir una instantánea diaria de WIP y un informe de tiempo de cola a partir de los datos existentes de las herramientas, y para celebrar una breve revisión semanal. Limitar el WIP también significa decir "todavía no" a algunas solicitudes, lo que requiere el acuerdo de las partes interesadas, y la capacidad ociosa es un costo aparente que los líderes deben entender como un seguro contra el retraso.

El retorno debe describirse mediante patrones que la organización pueda medir por sí misma y no mediante porcentajes tomados de otros. Sigue la mediana y el percentil 85 del tiempo de ciclo antes y después de los límites, el número de elementos con una antigüedad superior a un umbral acordado, la tasa de incumplimiento y sus motivos, y la proporción de tiempo dedicada a trabajo urgente. El caso de negocio es más sólido cuando vincula el tiempo de cola a algo que el negocio ya siente, como la espera por el acceso de un nuevo empleado, un cambio en un sistema clínico o una corrección para un cliente. El costo total de propiedad está dominado por el tiempo de las personas que revisan los números y actúan sobre ellos, así que cuenta ese tiempo frente al retraso que elimina. Un equipo debe construir su propia línea base, ya que aquí no se citan valores de referencia.

## Antipatrones y trampas

- **Apuntar a una utilización del 100 por ciento.** Garantiza esperas largas y una entrega frágil. Planifica una razón de carga con holgura y revísala después de las perturbaciones.
- **Limitar solo la columna "en curso".** El trabajo se acumula entonces en las colas fuera del límite. Limita el sistema de extremo a extremo y añade límites por etapa donde las colas crezcan.
- **Tratar el límite de WIP como una regla que imponer.** La gente esconde trabajo para cumplir. Usa un incumplimiento como aviso para preguntar qué está bloqueado y registra el motivo.
- **Aparcar elementos en estados sin límite.** El recuento se mantiene bajo mientras el trabajo espera sin ser visto. Incluye los estados aparcados en un recuento visible y revisa su antigüedad.
- **Medir la utilización de individuos.** Premia el parecer ocupado e invita a clasificar. Mide al equipo o al conjunto de recursos y nunca publiques una cifra por persona.
- **Ignorar el lado de las llegadas.** Los equipos trabajan sobre las salidas mientras la demanda sigue creciendo. Sigue las llegadas y, cuando superen la capacidad, toma una decisión explícita sobre qué aceptar.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y límites | Cada persona cuenta el WIP a su manera | Algunos equipos escriben un límite para su tablero | Un límite escrito y un vocabulario de estados, con los estados de espera separados de los de trabajo | Cambios del límite registrados y comprobación de la ley de Little ejecutada cada mes | Límites alineados con proveedores y equipos socios, y revisados cuando dejan de informar decisiones |
| Límites de WIP y holgura | Sin límites; todos ocupados | Límites informales en una columna | Límites de todo el sistema y por etapa, con un registro de incumplimientos y un rango de carga declarado | Límites ajustados con una cadencia a partir de evidencia de tiempo de ciclo y de cola | Límites y capacidad coordinados entre los equipos que comparten etapas |
| Visibilidad de las colas | La espera se ve solo a través de quejas | Longitud de la cola contada en algunos tableros | Percentiles del tiempo de cola por etapa mostrados al equipo responsable | Crecimiento neto de la cola con seguimiento de su tendencia, con barreras de protección y atendido con trabajo financiado | Tiempo de cola en etapas compartidas y externas informado abiertamente a clientes y proveedores |
| Uso en las decisiones | Peticiones de capacidad defendidas con anécdotas | Utilización citada para justificar plantilla | Evidencia de colas y tiempo de ciclo usada en la planificación | Compensaciones de demanda y capacidad decididas con datos en las revisiones de gobernanza | Demanda moldeada conjuntamente con los clientes mediante distribuciones de tiempo de espera |

## Lista de verificación

- [ ] El límite del sistema para el WIP está escrito, con los estados de inicio y fin y las exclusiones.
- [ ] Los estados de espera y los estados de trabajo son estados separados en el flujo de trabajo.
- [ ] Se captura y se conserva una instantánea diaria de WIP y cola.
- [ ] El tiempo de cola se informa como una mediana y un percentil alto, por etapa.
- [ ] Las llegadas y salidas se grafican cada semana, con un diagrama de flujo acumulado.
- [ ] Existe un límite de WIP para el sistema y para cualquier etapa con una cola creciente.
- [ ] Los incumplimientos del límite se registran con un motivo y se revisan cada semana.
- [ ] Una política define el trabajo de urgencia y limita el número en marcha.
- [ ] La razón de carga del equipo se estima a nivel de equipo, nunca por persona, con el método indicado.
- [ ] La comprobación de la ley de Little se ejecuta cada mes y se investigan los desajustes.
- [ ] Los estados aparcados y bloqueados se cuentan y se revisa su antigüedad.
- [ ] Todo cambio de una frontera, un estado o un límite de WIP se registra con su fecha y motivo.

## Prompts de IA

**Comprueba el límite y los estados que hay detrás de un recuento de WIP.**

```text
Quiero definir el trabajo en curso de [team or service]. Los estados de nuestro
flujo de trabajo son [list of statuses with a one-line meaning each], y estos
elementos están excluidos: [exclusions]. Identifica ambigüedades sobre qué
estados cuentan como en curso, cuáles son de espera y cuáles están bloqueados.
Sugiere un límite y una lista de estados más limpia, y di qué haría el cambio
al número de WIP. No adivines cómo está configurada nuestra herramienta ni
inventes valores de referencia. Enumera tus supuestos y las preguntas que
debería responder.
```

**Ejecuta una comprobación de coherencia de la ley de Little.**

```text
Estos son los datos de [team or service] durante [period]: WIP medio [value],
salidas por día [value] y tiempo de ciclo medio en días [value], usando el
límite [boundary description]. Calcula la razón entre el WIP medio y las
salidas por el tiempo de ciclo, y explica qué podría significar un desajuste
dado este límite, como elementos aparcados, elementos cerrados sin haberse
empezado o un periodo inestable. Sugiere comprobaciones que puedo hacer en
[tracker or ITSM tool]. No inventes cifras ni umbrales. Enumera tus supuestos.
```

**Planifica un primer experimento de límite de WIP.**

```text
Nuestro equipo es [team size and roles] y trabaja en [type of work]. El WIP
medio actual es [value], con las etapas [list of stages], y la cola más larga
es [stage]. Redacta un experimento acotado en el tiempo para introducir un
límite de WIP: una hipótesis, el límite que probar y por qué, las medidas que
vigilar (incluida al menos una barrera de protección), qué cuenta como
excepción y una fecha de revisión. No indiques un límite correcto universal ni
valores de referencia. Enumera tus supuestos y los riesgos.
```

**Encuentra el probable cuello de botella a partir de datos por etapa.**

```text
Para [team or service], este es el tiempo de cola y el WIP por etapa durante
[period]: [table of stage, median queue time, 85th percentile queue time, items
waiting, and capacity notes]. Ordena las etapas como candidatas a la
restricción, explica el razonamiento con lenguaje llano y sugiere un
experimento de bajo costo para la candidata principal y una medida que mostraría
que funcionó. No inventes datos ni referencias. Enumera tus supuestos y qué
datos adicionales cambiarían la clasificación.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar qué tema define una medida de flujo o de capacidad que estás añadiendo y la barrera de protección que debe acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica editada nombra sus relojes, su límite, su vector de manipulación y su barrera de protección.

## Puntos clave

- La espera domina el tiempo transcurrido, así que mide el WIP, la longitud de la cola y el tiempo de cola por etapa, e informa medianas y percentiles altos.
- La ley de Little une el WIP medio, el rendimiento y el tiempo de ciclo, lo que la convierte en una prueba rápida de si tus definiciones son coherentes.
- El retraso sube abruptamente a medida que la utilización se acerca a la capacidad total, así que planifica holgura donde la demanda sea variable.
- Limita el WIP de todo el sistema, trata los incumplimientos como avisos para conversar y protégete de reetiquetar el trabajo para mantenerte bajo el límite.
- Vigila las llegadas y las salidas, ya que una cola que crece semana tras semana necesita una decisión sobre la capacidad o la demanda.
- Mide equipos y servicios, nunca individuos, y acuerda un límite escrito antes de comparar números.

## Referencias y lecturas complementarias

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
