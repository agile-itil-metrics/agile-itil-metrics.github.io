# Por qué medir ITIL ágil

**Los equipos que construyen y operan servicios necesitan un pequeño conjunto de números honestos para saber si su trabajo ayuda a los usuarios y mejora, y lo ágil y ITIL aportan, cada uno, una mitad distinta de ese cuadro.**

## Resumen y motivación

Todo equipo que construye y opera un servicio toma decisiones durante todo el día: en qué trabajar a continuación, si una versión es segura, si el centro de servicios necesita una persona más, si una caída fue un hecho aislado o un patrón. Sin medición, esas decisiones se apoyan en la memoria, la anécdota y quien habló en último lugar. Con una medición equivocada pueden ser aún peores, porque un número tiene una autoridad que una opinión no tiene. Este tema explica por qué vale la pena medir, qué aporta cada tradición y cuánto cuesta equivocarse.

En este libro se encuentran dos tradiciones. El [desarrollo ágil de software](https://en.wikipedia.org/wiki/Agile_software_development) es un conjunto de valores y prácticas, enunciados en el Manifiesto Ágil de 2001, que favorece el software que funciona, la colaboración estrecha con los clientes y la respuesta al cambio. Sus hábitos de medición son empíricos y locales: un equipo inspecciona su propio flujo, examina lo que entregó y se adapta. [ITIL](https://en.wikipedia.org/wiki/ITIL), originalmente la Biblioteca de Infraestructura de Tecnologías de la Información, es un conjunto de orientaciones para la [gestión de servicios de TI](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), la práctica de diseñar, prestar y mejorar servicios de TI. Sus hábitos de medición están orientados al servicio y son compartidos: niveles de servicio acordados, un catálogo de servicios (la grafía propia de ITIL en inglés es "service catalogue") y una disciplina de mejora continua. En ITIL 4, la edición de 2019 del marco, la medición y los informes son una de las prácticas generales de gestión, y la mejora continua es a la vez una práctica y un principio rector. Consulta las publicaciones vigentes del propietario del marco antes de basarte en detalles de versión, porque el marco sigue evolucionando.

Las dos visiones difieren de maneras útiles. Lo ágil pregunta "¿estamos construyendo lo correcto y con qué fluidez avanza el trabajo?". ITIL pregunta "¿el servicio satisface las necesidades de quienes lo usan, y es fiable, soportable y asequible?". Un equipo que mide solo el flujo puede entregar con rapidez sobre un servicio que los usuarios consideran poco fiable. Un equipo que mide solo los niveles de servicio puede cumplir todos los objetivos y, al mismo tiempo, cambiar tan despacio que el servicio deje de ser relevante. El movimiento [DevOps](https://en.wikipedia.org/wiki/DevOps) nació de la observación de que construir y operar son un solo sistema, por lo que los números que lo describen deben leerse juntos. La [ingeniería de fiabilidad de sitios](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la disciplina que Google describió en sus libros publicados, añade un vínculo explícito entre los objetivos de fiabilidad y el ritmo del cambio.

Tres términos se repiten a lo largo del libro. Una **medida** describe algo sobre el trabajo o el servicio. Una **métrica** es una medida con una fórmula, una unidad y una fuente de datos definidas, de modo que dos personas que la calculen obtengan la misma respuesta. Una **barrera de protección** (guardrail) es una segunda medida o práctica, elegida de antemano, que se mueve si la primera se está manipulando. La advertencia que hay detrás de las barreras de protección es la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): cuando una medida se convierte en objetivo, la gente empieza a dirigir el número en lugar del trabajo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

### Para qué sirve la medición

La medición se gana su lugar cuando cumple una de cuatro funciones.

- **Ver.** Hacer visible el trabajo invisible: la cola que nadie mira, el patrón de incidentes que atraviesa tres equipos, el cambio que espera nueve días por un hueco.
- **Decidir.** Informar una elección entre dos opciones, como si automatizar un tipo de solicitud o corregir el defecto que lo causa.
- **Aprender.** Poner a prueba una creencia. Si el equipo piensa que una nueva práctica de revisión reducirá el retrabajo, un número puede decir si lo hizo.
- **Rendir cuentas.** Dar a los usuarios, a los clientes y a los líderes un relato honesto de lo que entrega el servicio, de modo que la confianza descanse en pruebas.

Un número que no cumple ninguna de estas cuatro funciones es un gasto superfluo. Los temas posteriores repiten esta prueba para cada familia de métricas.

### El costo de no medir nada

Un equipo que no mide nada no está libre de números. Funciona con números implícitos: la queja más sonora, la caída más reciente, la impresión del gerente sobre lo ocupada que parece la gente. De ello se derivan dos costos.

- **Retroalimentación lenta.** Los problemas que una tendencia habría mostrado a tiempo llegan como sorpresas. Un aumento gradual de los contactos repetidos parece mala suerte hasta que se convierte en una crisis.
- **Sin base para mejorar.** Un equipo no puede saber si un cambio ayudó, así que no puede aprender qué cambios repetir.

### El costo de medir lo equivocado

Medir lo equivocado suele ser peor que no medir nada, porque dirige el esfuerzo con una falsa confianza. Los recuentos de tickets cerrados, líneas de código, puntos de historia completados y horas registradas son fáciles de reunir y de graficar, y cada uno es una medida de actividad, no de valor para un usuario. La investigación en que se apoya el marco SPACE (Forsgren y colegas, 2021) sostiene que la productividad no puede captarse en una sola dimensión y que los recuentos de actividad usados por sí solos engañan.

## Principios clave

- **Mide para una decisión.** Cada métrica responde a una pregunta escrita e informa una elección con nombre. Si nadie puede decir cuál, retírala.
- **Une las dos visiones.** Lee el flujo de entrega y la salud del servicio en la misma página, para que la velocidad nunca se compre a costa de la estabilidad ni al revés.
- **Mide primero los resultados y después la actividad.** La prueba es que los usuarios estén mejor. Los recuentos de actividad apoyan el relato, pero no lo cuentan (véase el tema 1.3, Resultados sobre producción: elegir qué medir).
- **Describe equipos y servicios, nunca personas.** Las clasificaciones individuales corrompen los datos y dañan la colaboración.
- **Empieza poco a poco y crece.** Un puñado de métricas fiables supera a un muro de métricas débilmente gobernadas.
- **Enseña primero al equipo.** Las personas que hacen el trabajo son la primera audiencia y la mejor comprobación de si los datos son exactos.
- **Espera cambios.** Las definiciones, las métricas y los objetivos se revisan cuando dejan de informar decisiones.

## Definiciones de métricas

Las métricas siguientes describen la salud de la propia práctica de medición, que es donde el "por qué medir" se vuelve comprobable. Un equipo que pueda mostrarlas está midiendo por razones. Toda fórmula basada en el tiempo o en recuentos declara sus límites.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Proporción de métricas vinculadas a una decisión | Proporción de métricas reportadas que tienen una pregunta escrita y una decisión con nombre a la que informan | métricas con una pregunta y una decisión registradas / métricas reportadas en el panel al cierre del trimestre | porcentaje | Registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) | Medición e informes; mejora continua | Acciones de retrospectiva; acuerdos de trabajo | Trimestral |
| Cobertura de líneas base | Proporción de servicios y equipos dentro del alcance que tienen un valor inicial registrado para cada una de las medidas básicas acordadas | pares servicio-medida con una línea base registrada en los últimos 12 meses / todos los pares servicio-medida dentro del alcance; se excluyen los servicios fuera del catálogo | porcentaje | Catálogo de servicios y registro de métricas | Gestión de niveles de servicio; medición e informes | Revisión con las partes interesadas; paneles de equipo | Trimestral |
| Esfuerzo de medición | Tiempo del personal dedicado a recopilar, depurar y reportar métricas a mano | horas registradas en recopilación e informes manuales durante el mes, sin contar el tiempo dedicado a actuar sobre los hallazgos | horas por equipo y mes | Notas de tiempo o una breve encuesta al equipo | Medición e informes | Presupuesto de tiempo de la retrospectiva | Trimestral |
| Antigüedad de los datos en la revisión | Qué tan antiguo es el dato más reciente cuando el grupo se reúne para discutirlo | marca de tiempo de la reunión de revisión menos la marca de tiempo del último dato del panel; calculada por métrica, reportada como mediana y percentil 85 | días | Registro de actualización del panel | Medición e informes | Revisión con las partes interesadas | Por revisión |
| Seguimiento de las mejoras | Proporción de acciones de mejora surgidas de las revisiones de métricas que se completan o se cierran deliberadamente dentro del plazo acordado | acciones completadas o cerradas con un motivo en los 90 días siguientes a su creación / acciones creadas en el período, contadas desde la fecha registrada en el registro de mejoras | porcentaje | Registro de mejora continua o lista de pendientes | Mejora continua | Acciones de la retrospectiva | Trimestral |

El esfuerzo de medición cuenta deliberadamente solo el trabajo manual. El tiempo dedicado a leer los datos y a decidir qué hacer es el objetivo del ejercicio y se excluye, de modo que automatizar la recopilación se vea como progreso.

## Recomendaciones

### Empieza por el propósito

**1. Escribe la razón antes que la métrica.** Para cada medida propuesta, escribe una frase: "Medimos X para decidir Y". Si la frase no puede escribirse, la medida no está lista. Este único hábito elimina la mayoría de las métricas de vanidad antes de que entren en un panel.

**2. Nombra a la audiencia y la decisión.** El mismo número significa cosas distintas para un equipo, un responsable de servicio y un directivo. Anota quién lo leerá y qué elección respalda. La vista de trabajo de un equipo puede llevar veinte medidas. Lo que llega a la dirección debe ser un conjunto pequeño y estable (véase el tema 11.1, Diseño de un panel de métricas de servicio).

### Usa ambas tradiciones

**3. Empareja una medida de flujo con una medida de servicio.** Elige al menos una medida de cómo se mueve el trabajo, como el plazo de entrega o la antigüedad de los elementos de trabajo (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo), y al menos una medida de cómo se comporta el servicio, como la recurrencia de incidentes o un indicador de nivel de servicio (véase el tema 5.2, SLI, SLO y presupuestos de errores). Mostrarlas juntas evita el fallo habitual en que la velocidad y la estabilidad las gestionan grupos distintos que miran gráficos distintos.

**4. Trata la entrega y las operaciones como un solo sistema.** La investigación resumida en *Accelerate* (Forsgren, Humble y Kim, 2018) indica que el desempeño de la entrega de software puede describirse con cuatro medidas que equilibran el rendimiento y la estabilidad. Sea cual sea el conjunto que adopte un equipo, mantén los números relativos a cambios y los relativos a incidentes lo bastante cerca como para que un aumento en uno lleve a mirar el otro (véase el tema 2.8, Métricas DORA).

### Mide con honestidad

**5. Prefiere pocas medidas que tiren en sentidos opuestos.** Un solo número invita a la sobreoptimización, así que elige pares como velocidad con calidad, volumen con resultado y costo con experiencia. El par no necesita ser una fórmula. Necesita aparecer en la misma página.

**6. Registra una línea base antes de cambiar nada.** Sin un valor inicial, una afirmación de mejora es un cuento. Reúne unas semanas de datos primero, incluida la dispersión de los valores además del promedio (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Las líneas base también protegen a los equipos: muestran que un mal trimestre siguió a un cambio en la forma de contar el trabajo y no a una caída del desempeño.

### Crea el hábito

**7. Revisa con una cadencia que corresponda a la decisión.** Las medidas de flujo se prestan a una conversación semanal, o a una que se celebre en cada paso de la entrega continua de software. Las medidas de nivel de servicio y de costo se prestan a una mensual o trimestral. Una métrica revisada con el ritmo equivocado genera ruido o pierde el momento en que actuar habría servido.

**8. Cierra el ciclo con trabajo de mejora.** Una revisión que termina en "interesante" ha desperdiciado sus datos. Termina cada revisión con una o dos acciones con nombre, un responsable y una fecha, y haz seguimiento de su cumplimiento. La práctica de mejora continua de ITIL y la retrospectiva ágil son dos nombres para la misma disciplina (véase el tema 9.5, Métricas de mejora continua).

**9. Di para qué no usarás los números.** Declara con claridad que las métricas de equipo no se usarán para clasificar ni recompensar a personas, y que las definiciones se cambiarán abiertamente. La gente coopera con la medición cuando confía en cómo se usará (véase el tema 11.3, Implantar métricas sin sembrar miedo).

## Vectores de manipulación y barreras de protección

Incluso las métricas sobre la medición pueden manipularse. Cada fila siguiente empareja la métrica con la forma habitual de torcerla y con la comprobación que la revelaría.

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Proporción de métricas vinculadas a una decisión | Escribir una pregunta y una decisión plausibles para cada métrica después de los hechos para elevar el porcentaje | Muestrear el registro de decisiones: preguntar qué cambió gracias a la métrica y comparar la fecha en que se escribió la entrada con la fecha en que apareció la métrica por primera vez |
| Cobertura de líneas base | Registrar una línea base una vez y nunca actualizarla, o elegir un período tranquilo y conveniente | Exigir un rango de fechas y un tamaño de muestra declarados con cada línea base; revisar las líneas base tras cambios importantes en el servicio |
| Esfuerzo de medición | Sacar el trabajo de recopilación de los registros haciéndolo sin anotarlo, o trasladándolo a un proveedor | Comparar con una breve encuesta sobre cuánto dice la gente que tarda el reporte; incluir el esfuerzo del proveedor en la revisión |
| Antigüedad de los datos en la revisión | Actualizar el panel justo antes de la reunión mientras los registros subyacentes siguen desactualizados | Reportar la antigüedad del registro más reciente en el sistema de origen además de la hora de actualización |
| Seguimiento de las mejoras | Cerrar acciones con el motivo "ya no es relevante" para alcanzar el porcentaje, o dividirlas en piezas triviales | Revisar cada trimestre los motivos dados para las acciones cerradas y comprobar si se movió la medida a la que apuntaba la acción |

Una lectura sana es una práctica visiblemente viva. Las métricas entran y salen del registro por razones escritas, las líneas base están frescas, las acciones de las revisiones se terminan o se abandonan con honestidad, y el equipo dedica más tiempo a actuar sobre los datos que a recopilarlos. Una puntuación perfecta en todas las filas es una invitación a muestrear los registros subyacentes, no un motivo para celebrar.

## Compensaciones: ventajas e inconvenientes

| Elección | Fortaleza | Debilidad |
| --- | --- | --- |
| Medir poco | Bajo costo; bajo riesgo de manipulación; mucha confianza | Puntos ciegos; las decisiones descansan en la anécdota |
| Medir mucho | Amplia cobertura; alerta temprana en muchos frentes | La atención se diluye; la gobernanza es escasa; el costo de recopilación crece |
| Visión conjunta | Equilibra velocidad y estabilidad; favorece la propiedad compartida | Exige definiciones acordadas entre equipos y un lugar común donde mirar |
| Objetivos sobre las métricas | Da dirección y urgencia | Invita a la manipulación; necesita una barrera de protección emparejada |
| Métricas sin objetivos | Fomenta una discusión honesta | Puede derivar en informes sobre los que nadie actúa |

La respuesta práctica es un conjunto pequeño y conjunto, con objetivos usados con moderación para condiciones bien comprendidas y que los usuarios han pedido, como un objetivo de nivel de servicio. Todo lo demás es una pregunta que discutir. El fin no es quitar el juicio de las decisiones, sino alimentarlo con mejores pruebas.

## Preguntas para conversar con tu equipo

**1. ¿Qué decisión tomamos el trimestre pasado que un número cambió realmente?**
Pide al grupo que recuerde decisiones concretas y luego averigüe cuáles, si alguna, dependieron de datos. Si la lista es corta, es información útil: significa que gran parte de los informes actuales no justifica su existencia. El facilitador debe anotar las métricas que sí cambiaron decisiones, porque son candidatas a protegerse. Después pregunta qué decisiones se tomaron por intuición y si un número habría podido ayudar.

**2. ¿Cuáles de nuestros números actuales describen actividad y cuáles describen valor para los usuarios?**
Pon el panel actual en una pantalla y marca cada métrica como actividad (tickets cerrados, compilaciones ejecutadas, puntos completados) o resultado (usuarios que pueden trabajar, problemas que no se repiten). No discutas mucho los casos dudosos. El objetivo es ver el equilibrio. Donde solo haya actividad, pregunta qué resultado debe producir esa actividad y cómo lo sabría el equipo.

**3. ¿Dónde viven hoy los números de entrega y de operaciones, y las mismas personas miran ambos?**
Rastrea dónde se almacena cada familia de medidas y quién la revisa. Los equipos suelen sorprenderse al descubrir que un grupo revisa los datos de cambios y otro los de incidentes, sin ninguna reunión compartida. Pregunta qué patrón podría pasar inadvertido porque nunca se ven juntos. Acordad un lugar o una reunión donde se encuentren.

**4. ¿Qué no estamos midiendo que lamentaríamos no saber?**
Invita a expresar preocupaciones en lugar de métricas: "Me temo que no nos daríamos cuenta si...". Trabaja desde las respuestas hasta las medidas candidatas, y luego hasta los datos más baratos que las mostrarían. Mantén la lista corta.

**5. ¿Qué tendríamos que creer sobre nuestros números antes de mostrárselos a la dirección?**
Discute qué hace fiables los datos: definiciones estables, comprobaciones de exactitud por muestreo y acuerdo sobre las exclusiones. Enumera las dudas del equipo, incluso las pequeñas, como un estado usado de forma incoherente. Decide qué dudas deben resolverse antes de compartir más ampliamente y cuáles pueden divulgarse junto con el número.

**6. Si solo pudiéramos conservar tres métricas el próximo trimestre, ¿cuáles serían y por qué?**
La restricción obliga a priorizar. Pide a cada persona que escriba tres y luego compáralas. Busca acuerdo en los resultados y desacuerdo en las medidas de actividad. Pregunta qué barrera de protección necesita cada una de las tres.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega se benefician sobre todo de una retroalimentación rápida y local: cuánto espera el trabajo, dónde se acumula en colas, con qué frecuencia los cambios causan problemas. Deben mantener para sí una vista de trabajo rica y publicar hacia fuera un conjunto pequeño. Los equipos deben resistir la tentación de medir el volumen de producción como sustituto del valor, y deben emparejar las medidas de velocidad con medidas de calidad desde el principio (véase el tema 2.1, Medidas de flujo).

### Equipos de servicio y operaciones

Los equipos de operaciones ya conviven con números: volúmenes, tiempos de respuesta y de resolución, disponibilidad. La oportunidad está en pasar de informar lo que ocurrió a explicar por qué, mediante la recurrencia, las causas raíz y la proporción de trabajo no planificado (véase el tema 2.9, Trabajo operativo y trabajo no planificado). También deben llevar sus datos a las conversaciones de planificación con los equipos de entrega, para que el trabajo de fiabilidad se defienda con pruebas y no con quejas.

### Liderazgo y gobernanza

Los líderes fijan los incentivos, a menudo sin querer, con las preguntas que hacen. Un líder que pregunta "¿por qué esto está en rojo?" enseña a los equipos a esconder el rojo. Un líder que pregunta "¿qué aprendisteis y qué necesitáis?" enseña a los equipos a informar con honestidad. Los órganos de gobernanza deben pedir el registro, las barreras de protección y las acciones de mejora junto con los números, y deben financiar el trabajo que revela un mal número (véase el tema 1.4, Gobernanza y propiedad de las métricas).

### Clientes y usuarios

Los usuarios juzgan el servicio según si funciona y si los problemas se corrigen, no según las medidas internas. Sus propias palabras, en encuestas, quejas y comentarios, pertenecen junto a los números operativos como comprobación de que el equipo mide lo que importa (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio dirige un centro de servicios, un equipo de operaciones y tres equipos de producto que construyen los servicios de tienda, pagos y cumplimiento de pedidos. Los números siguientes son ilustrativos.

La dirección pregunta por qué los clientes se quejan de que el pago es lento cuando los equipos de entrega informan que despliegan a diario y el equipo de operaciones informa que la disponibilidad es del 99,9 por ciento. Cada grupo tiene razón según sus propias medidas, y nadie las ha mirado juntas. La responsable de gestión de servicios propone una vista conjunta de una página para el servicio de pago, construida con datos que los equipos ya recopilan.

La vista muestra cuatro cosas de las últimas doce semanas. El plazo de entrega de los cambios tiene una mediana de 2 días y un percentil 85 de 9 días. La tasa de fallo de los cambios es del 8 por ciento. Los incidentes en el pago suman 14, de los cuales 6 comparten una causa, una consulta lenta a la base de datos introducida por una versión reciente. La mediana del tiempo de restauración es de 40 minutos, pero el tiempo de carga de página en el percentil 95 ha ido subiendo durante seis semanas, un patrón que la cifra de disponibilidad no muestra porque el servicio siguió técnicamente en funcionamiento.

El grupo ve lo que estaba oculto. La disponibilidad se medía como "el pago responde", mientras que los usuarios experimentan "el pago responde con la rapidez suficiente". El equipo de producto y el de operaciones acuerdan añadir un indicador de latencia para el pago con un objetivo fijado por la responsable de producto tras leer los comentarios de los clientes, tratar la causa repetida de los incidentes como un registro de problema con un responsable, y revisar la vista conjunta cada quince días. Registran una decisión: pausar las funciones nuevas del pago durante un tramo de entrega continua de software para corregir la consulta y añadir una comprobación de rendimiento a la canalización de versiones.

Un riesgo de manipulación aparece en menos de un mes. El equipo de operaciones nota que dos de los 14 incidentes se habían abierto como "solicitudes de servicio" porque la categoría de solicitud no lleva objetivo de resolución. El equipo se da cuenta de que un objetivo sobre los incidentes había empujado a la gente a clasificar los casos dudosos como solicitudes. Añaden a la vista la proporción recategorizada y muestrean diez tickets cada mes. Tras el cambio, el tiempo de carga de página en el percentil 95 baja, los incidentes repetidos disminuyen y el equipo conserva la vista porque ha cambiado una decisión.

## Perspectiva por sector

**Empresa emergente.** Los equipos pequeños tienen poco proceso y mucha confianza, lo cual ayuda. El riesgo es importar un gran panel empresarial antes de que haga falta. Empieza con dos o tres medidas que los fundadores leerán cada semana, como el plazo de entrega de los cambios, un indicador sencillo de fiabilidad y la opinión directa de los usuarios, y escribe sus definiciones.

**Pequeña empresa.** La persona que dirige TI suele responder ante el propietario, y una sola queja de un cliente puede pesar más que cualquier gráfico. Mantén el conjunto pequeño, usa los datos que tus herramientas ya producen y prefiere las conversaciones con los usuarios. Trata con cierta cautela los informes suministrados por proveedores, ya que los proveedores tienen sus propios incentivos.

**Gran empresa.** La escala multiplica la demanda de números comparables y la presión para manipularlos. Usa un conjunto estándar pequeño con definiciones escritas, mantén las vistas de trabajo de los equipos separadas de las consolidaciones y evita comparar equipos que operan servicios muy distintos. Un registro de métricas, definiciones compartidas y una cadencia de revisión se vuelven esenciales.

**Gobierno y sector público.** Los niveles de servicio contractuales, los requisitos de auditoría y las obligaciones de información pública pueden hacer que algunas medidas no sean negociables. Trátalas como entradas de diseño: cúmplelas, muestra una barrera de protección a su lado y declara las definiciones usadas. La rendición pública de cuentas eleva el costo de ocultar las malas noticias, así que crea canales internos seguros para informar con franqueza (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación para medir son mejores decisiones a menor costo. La medición respalda la priorización, muestra dónde está el desperdicio, da alerta temprana del deterioro del servicio y aporta pruebas para las solicitudes de inversión. 

El costo tiene varias partes. Está la herramienta, que a menudo ya se posee: el sistema de tickets, el gestor de incidencias, el control de versiones y la monitorización. Está el tiempo del personal para definir métricas, construir vistas y mantener un registro. Está el costo recurrente de las reuniones de revisión, que es el mayor y el que más vale la pena. El costo total de propiedad (TCO) de una práctica de medición incluye también el costo de actuar sobre los hallazgos, ya que una idea sin presupuesto para el arreglo da poco retorno.

El retorno es difícil de expresar con una cifra universal, y este libro no inventa ninguna. Una buena manera de construir el caso es medir tus propias líneas base antes y después de un cambio: tiempo dedicado a informes manuales, contactos repetidos, decisiones revertidas porque los datos eran erróneos y sorpresas descubiertas tarde. El patrón que cabe esperar es menos sorpresas, discusiones más cortas y mejor concordancia entre los números operativos y la experiencia del usuario. Una comparación sencilla del [retorno de la inversión](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) entre el esfuerzo invertido y el esfuerzo ahorrado es un punto de partida razonable, y el tema 7.7, Retorno de la inversión y caso de negocio, cubre el método.

## Antipatrones y trampas

- **El panel de todo.** Decenas de gráficos, sin responsables, sin decisiones. Elige unos pocos, nombra la decisión que informa cada uno y retira el resto.
- **Medición unilateral.** Velocidad sin estabilidad, o estabilidad sin relevancia. Empareja una medida de flujo con una medida de servicio.
- **Medir a las personas.** Las clasificaciones individuales corrompen los datos y desalientan la ayuda. Informa a nivel de equipos y servicios.
- **Objetivos antes que líneas base.** Un objetivo sin valor inicial es una conjetura. Registra primero una línea base y fija los objetivos después de al menos un ciclo de revisión.
- **Informes sin acciones.** Una revisión que no produce cambios enseña a la gente a ignorarla. Termina cada revisión con una acción con nombre, un responsable y una fecha.
- **Cambios silenciosos de definición.** Las líneas de tendencia pierden sentido. Registra cada cambio con su motivo y márcalo en el gráfico.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Propósito y selección | Métricas elegidas porque la herramienta las ofrece | Algunas métricas tienen un propósito declarado | Cada métrica reportada tiene una pregunta y una decisión escritas | El conjunto de métricas se revisa frente a las decisiones y se retira lo que no se usa | Métricas codiseñadas con usuarios y proveedores en torno a resultados compartidos |
| Visión conjunta de lo ágil e ITIL | Datos de entrega y de servicio separados | Unos pocos equipos ven ambos juntos | Una vista común de flujo y salud del servicio por servicio | Vista conjunta con tendencias y vinculada al trabajo de mejora | Vistas entre equipos y proveedores ligadas a los resultados de los usuarios |
| Líneas base y esfuerzo | Sin líneas base; recopilación manual | Líneas base para algunos servicios; recopilación mixta | Líneas base registradas para las medidas básicas; recopilación mayormente automática | Líneas base actualizadas tras los cambios; esfuerzo medido y reducido | Líneas base y definiciones ajustadas continuamente a medida que cambian los servicios |
| Uso en la mejora | Números anotados y olvidados | Acciones ocasionales tras semanas malas | Cada revisión termina con acciones con nombre | Seguimiento de las acciones medido y financiado | La mejora fluye de todos y es visible entre equipos |

## Lista de verificación

- [ ] Cada métrica reportada tiene una pregunta escrita y una decisión con nombre a la que informa.
- [ ] Se nombra la audiencia de cada vista, y las vistas de equipo están separadas de las de la dirección.
- [ ] Al menos una medida de flujo y una medida de servicio aparecen en la misma página.
- [ ] Existe una línea base con rango de fechas y tamaño de muestra para cada medida básica.
- [ ] Toda medida de tiempo declara dónde empieza y dónde se detiene el reloj.
- [ ] Cada métrica tiene una barrera de protección mostrada a su lado.
- [ ] Se conoce el esfuerzo de recopilación manual y se ha revisado la mayor tarea manual para automatizarla.
- [ ] Los equipos ven sus propios datos antes que la dirección.
- [ ] Ninguna clasificación individual, pago o medida disciplinaria está vinculada a una métrica.
- [ ] Cada revisión termina con al menos una acción de mejora con nombre, responsable y fecha.
- [ ] Al menos una métrica se ha retirado o redefinido en el último año.

## Prompts de IA

**Redacta la declaración de propósito de cada métrica.**

```text
Somos [nombre del equipo], responsables de [servicio o producto]. Nuestro panel
actual muestra estas métricas: [lista de métricas con sus definiciones]. Para
cada una, redacta una declaración de una frase con la forma "Medimos X para
decidir Y", y marca cualquier métrica en la que no puedas inferir una decisión
a partir de lo que te he dado. Sugiere preguntas que debería responder para
completar cada declaración. No inventes valores de referencia ni objetivos.
Enumera tus supuestos.
```

**Une las vistas de entrega y de servicio.**

```text
Nuestras medidas de entrega son [lista, con definiciones y fuentes de datos] y
nuestras medidas de servicio son [lista, con definiciones y fuentes de datos]
para [nombre del servicio]. Propón una disposición de una página que muestre
ambas juntas, empareje cada medida de velocidad con una medida de estabilidad o
de calidad y señale los datos que necesita cada una. Identifica las definiciones
que entren en conflicto entre los dos conjuntos. No inventes valores ni
umbrales. Enumera tus supuestos y todo lo que no hayas podido determinar.
```

**Planifica una línea base.**

```text
Queremos registrar una línea base de [nombre de la métrica] para [servicio o
equipo] antes de cambiar [práctica o herramienta]. Los datos proceden de
[fuente]. Propón cuánto tiempo recopilar datos, qué estadísticas de resumen
registrar (incluidos los percentiles), qué excluir y por qué, y cómo anotar
cualquier cambio en la forma de contar el trabajo durante el período. No supongas
valores. Enumera tus supuestos y los riesgos de calidad de datos que veas.
```

**Prepara una revisión que conduzca a la acción.**

```text
Celebramos una revisión [semanal, mensual o trimestral] de [conjunto de
métricas] con [audiencia]. Redacta un orden del día y un breve conjunto de
preguntas de facilitación que lleven de leer los números a elegir una o dos
acciones de mejora, cada una con un responsable y una fecha. Incluye una
indicación para comprobar la manipulación frente a la barrera de protección de
cada métrica. No inventes datos. Enumera tus supuestos sobre el grupo y su
cultura.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que cubre una métrica que estás considerando y su barrera de protección emparejada.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema de métricas nuevo o revisado conserva la declaración de propósito, el vector de manipulación y la barrera de protección.

## Puntos clave

- Mide para ver, decidir, aprender y rendir cuentas; un número que no cumple ninguna de estas funciones es un gasto superfluo.
- Lo ágil aporta retroalimentación rápida y local sobre el flujo; ITIL aporta visiones compartidas, a nivel de servicio, de fiabilidad y valor. Léelas juntas.
- No medir nada deja las decisiones a la anécdota, y medir lo equivocado dirige el esfuerzo con falsa confianza.
- Empieza con pocas métricas, cada una con un propósito escrito, una línea base y una barrera de protección.
- Describe equipos y servicios, nunca personas, y deja que el equipo vea primero sus datos.
- Cierra el ciclo: una revisión que no produce ninguna acción desperdicia los datos.

## Referencias y lecturas complementarias

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
