# Trabajo operativo y trabajo no planificado

**Un equipo que construye y opera un servicio tiene un único fondo de capacidad, así que haz visible el reparto entre el cambio planificado y el trabajo operativo, protégelo con reglas explícitas para las interrupciones y las urgencias, y lee la proporción de trabajo no planificado como una señal sobre el sistema y no como un veredicto sobre las personas.**

## Resumen y motivación

Todo equipo que construye y opera un servicio dedica su tiempo a dos grandes tipos de trabajo. El **trabajo de cambio** hace avanzar el servicio: funcionalidades nuevas, mejoras planificadas, migraciones y la eliminación de debilidades conocidas. El **trabajo de operación**, también llamado trabajo operativo, mantiene el servicio en marcha: atender incidentes y solicitudes, responder a alertas, aplicar parches rutinarios, restablecer accesos y manejar las tareas manuales que el servicio aún exige. Ambos son legítimos, y un servicio que tiene usuarios necesita los dos. El problema empieza cuando nadie puede decir cuánto hace el equipo de cada uno, porque el plan supone entonces en silencio una capacidad que el trabajo de operación ya ha consumido.

El trabajo también puede clasificarse según si se previó. El **trabajo planificado** se eligió antes de que comenzara el periodo, por ejemplo durante la planificación o en un compromiso trimestral. El **trabajo no planificado** llega durante el periodo y exige una atención que no se presupuestó: un incidente de producción, una petición urgente de una parte interesada de alto nivel, una corrección de seguridad o un defecto que bloquea a un cliente. Los dos ejes se solapan pero no son lo mismo. La mayor parte del trabajo de operación es no planificado en su momento, aunque su volumen sea predecible, y parte del trabajo de operación, como una renovación programada de certificados, está totalmente planificado. El trabajo de cambio también puede ser no planificado, como cuando cambia una normativa y un equipo debe responder en semanas.

Las visiones ágil y de ITIL describen la misma presión con palabras distintas. En la planificación por periodos acotados, un compromiso es un pronóstico de capacidad, y el trabajo que llega a mitad de periodo desplaza algo o se aplaza. En un tablero de flujo, el trabajo en curso tiene límites explícitos y a menudo hay un carril dedicado a los elementos urgentes, y la pregunta es cuántos elementos urgentes puede absorber el sistema antes de que el flujo se desplome (véase el tema 2.1, Medidas de flujo). En ITIL 4 (la versión publicada en 2019), la gestión de incidentes, la gestión de solicitudes de servicio y la gestión de problemas describen cómo se recibe, prioriza y resuelve el trabajo de operación, mientras que la habilitación de cambios y la práctica de desarrollo y gestión de software gobiernan el cambio planificado. Las prácticas describen flujos de trabajo. Rara vez dicen cómo debe repartir un solo equipo sus horas entre ellos, y en ese hueco trabaja este tema.

Varios términos se repiten aquí. Una **interrupción** es cualquier demanda que llega fuera del ciclo de planificación y aparta a una persona del elemento en el que trabaja. La **carga de interrupciones** es el efecto total de esas demandas sobre un equipo durante un periodo, medido por recuento, por horas o por la proporción de capacidad que consumen. Una **urgencia** (expedite) es un elemento de trabajo al que se permite saltarse la cola, normalmente porque su [costo del retraso](https://en.wikipedia.org/wiki/Cost_of_delay) es alto e inmediato. Un **carril de urgencias** es una regla, a menudo una fila dedicada en un tablero, que limita cuántas urgencias pueden estar en curso a la vez. La **asignación de capacidad** es la división explícita de la capacidad de un equipo entre tipos de trabajo, por ejemplo una proporción indicada para el cambio planificado, otra para el trabajo de operación y otra para la mejora.

El trabajo no planificado es el mayor impuesto oculto sobre la entrega planificada: cada interrupción cuesta su propio tiempo más el tiempo de recuperación perdido por el [cambio de tarea](https://en.wikipedia.org/wiki/Task_switching_(psychology)), y la investigación sobre el trabajo interrumpido (Mark, Gudith y Klocke, 2008) encontró que las personas compensan trabajando más rápido a costa de más estrés. Una nota sobre la dirección. Una proporción alta de trabajo no planificado no es en sí un defecto. Un servicio recién lanzado, una caída en curso o un evento regulado pueden consumir legítimamente la mayor parte de la capacidad de un equipo durante un tiempo. El objetivo no es llevar el trabajo no planificado a cero ni esconderlo, sino verlo, ponerle precio y decidir deliberadamente cuánto absorberá el equipo y cuánto debe arreglar la organización aguas arriba. El trabajo no planificado que se repite por la misma causa es el más útil de encontrar, porque apunta a un registro de problema, a una brecha de monitorización o a un elemento de [deuda técnica](https://en.wikipedia.org/wiki/Technical_debt) que es más barato de eliminar que de seguir pagando.

## Principios clave

- **La capacidad es finita y compartida.** Cada hora dada al trabajo de operación o a una urgencia es una hora no dada al cambio planificado, así que haz explícito y visible el reparto en lugar de dejar que surja de quien grite más fuerte.
- **Clasifica el trabajo cuando llega, no después.** Etiqueta cada elemento como planificado o no planificado y como cambio u operación en el momento en que entra en el sistema, porque la reclasificación al final del periodo es un recuerdo y no una observación.
- **Las interrupciones tienen un precio más allá de su duración.** Cuenta el costo de recuperación del cambio de tarea además de los minutos empleados, y prefiere diseños que agrupen o encaminen las interrupciones hacia una persona con nombre.
- **Urgencia por regla, no por rango.** Un carril de urgencias con un límite y una prueba de entrada protege el flujo; las urgencias ilimitadas por antigüedad lo eliminan.
- **Reserva capacidad a propósito.** Un margen planificado es más honesto que un plan que no supone ninguno.
- **Trata el trabajo no planificado repetido como un defecto del sistema.** Una repetición semanal es candidata a un registro de problema o a una automatización.
- **Mide equipos y servicios, nunca individuos.** La persona que atiende la mayoría de las interrupciones suele ser la que más sabe; clasificarla castiga lo que no debe (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Definiciones de métricas

Siete métricas describen cómo se divide y se perturba la capacidad. Cada una necesita una regla de clasificación escrita, porque todas dependen de cómo se etiquetan los elementos. El periodo de cada fórmula es la misma ventana fija del equipo, como una semana, un mes o un trimestre.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Razón de trabajo no planificado | Proporción de elementos de trabajo completados, por recuento, que no estaban en el plan al inicio del periodo | elementos completados en el periodo que entraron en el tablero o en la lista de pendientes después de empezar el periodo / todos los elementos completados en el periodo; el reloj arranca en el evento de planificación y se detiene al final del periodo; los elementos cancelados y los aún abiertos se excluyen | porcentaje | Gestor de incidencias con hora de creación del elemento y la instantánea de la planificación | Gestión de incidentes; gestión de solicitudes de servicio | Cambio de alcance; tipos de elemento de trabajo | Mensual |
| Adherencia a la asignación de capacidad | Cuán de cerca coincide el esfuerzo real con el reparto declarado entre trabajo de cambio, de operación y de mejora | para cada categoría, diferencia absoluta entre la proporción real y la acordada, sumadas y divididas entre dos; la proporción real son los elementos completados (o el esfuerzo registrado cuando el equipo lo anota) en esa categoría / todos los elementos completados; los elementos sin categoría se informan por separado y no se descartan | puntos porcentuales | Campo de tipo de trabajo del gestor y registros de tiempo donde existan | Mejora continua; gestión de la capacidad y el desempeño | Asignación de capacidad o planificación de la capacidad | Mensual |
| Tasa de interrupciones | Con qué frecuencia llegan al equipo demandas ajenas al plan y alcanzan a las personas que hacen el trabajo planificado | interrupciones recibidas por el equipo en el periodo / días laborables del periodo, donde una interrupción es cualquier ticket, aviso, petición por mensaje o solicitud registrada en el canal de entrada del equipo y que no está ya en el plan; los duplicados de la misma demanda subyacente se cuentan una vez | interrupciones por día laborable | Registro del canal de entrada, cola ITSM, sistema de alertas y registro de interrupciones del equipo | Gestión de incidentes; gestión de solicitudes de servicio; monitorización y gestión de eventos | Registro de interrupciones o acuerdo de trabajo del equipo | Semanal |
| Tasa de urgencias | Proporción de elementos completados que usaron el carril de urgencias | elementos completados en el periodo que entraron en el carril de urgencias / todos los elementos completados en el periodo; el reloj arranca cuando el elemento se marca como urgente y se detiene al completarse; los elementos rebajados fuera del carril antes de empezar el trabajo se cuentan por separado | porcentaje | Historial de carriles del tablero o historial del campo de prioridad | Gestión de incidentes; habilitación de cambios (cambio de emergencia) | Clase de servicio de urgencia | Mensual |
| Desplazamiento del trabajo planificado | Número de elementos planificados aplazados o abandonados para dejar sitio a trabajo no planificado | elementos planificados retirados del periodo, aplazados o dejados sin terminar con un motivo registrado de "desplazado por trabajo no planificado" en el periodo (recuento); los elementos retirados porque cambió la meta se excluyen | recuento de elementos | Historial de cambios del tablero, con el campo de motivo | Habilitación de cambios; mejora continua | Protección de la meta de entrega; negociación del alcance | Mensual |
| Proporción de trabajo no planificado repetido | Proporción de elementos no planificados cuya causa coincide con un elemento no planificado anterior dentro de la ventana de retrospectiva | elementos no planificados completados en el periodo que enlazan con el mismo registro de problema, regla de alerta o etiqueta de causa que un elemento anterior dentro de la ventana de retrospectiva (por ejemplo 90 días) / todos los elementos no planificados completados en el periodo; los elementos sin etiqueta de causa se informan como un recuento aparte de no clasificados | porcentaje | Registros de incidentes y problemas de ITSM, etiquetas de causa del gestor | Gestión de problemas; gestión de errores conocidos | Acciones de retrospectiva; etiquetas de defectos recurrentes | Mensual |
| Fiabilidad del compromiso planificado | Proporción de los elementos que el equipo planificó para el periodo y terminó en el periodo | elementos planificados terminados en el periodo / elementos planificados al inicio del periodo; los elementos añadidos tras el inicio se excluyen de ambos recuentos | porcentaje | Instantánea de la planificación e historial de finalización del gestor | Gestión de niveles de servicio; habilitación de cambios | Fiabilidad del pronóstico | Mensual |

Las medidas de tiempo de este tema, como la antigüedad de un elemento de urgencia, deben mostrarse como percentiles (por ejemplo la mediana y el percentil 85) y no como un promedio, ya que un solo incidente largo distorsiona una media (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Recomendaciones

### Haz visible el reparto

**1. Etiqueta cada elemento con dos campos en la entrada.** Añade un tipo de trabajo (cambio, operación, mejora) y una marca de planificado (planificado, no planificado) al formulario de entrada del gestor o de la herramienta ITSM, y haz ambos obligatorios. Las etiquetas son baratas cuando se establecen en la creación y poco fiables cuando se reconstruyen después. Escribe la definición de cada valor en una frase en el acuerdo de trabajo del equipo y revísala cuando las etiquetas dejen de describir el trabajo (véase el tema 1.5, Fuentes de datos e instrumentación).

**2. Congela una instantánea de la planificación.** "No planificado" solo tiene sentido respecto a un plan, así que captura la lista de elementos al inicio del periodo y guárdala. Compara el trabajo completado con la instantánea, no con el aspecto del tablero al final.

### Asigna la capacidad a propósito

**3. Acuerda una asignación de capacidad y trátala como una hipótesis.** Decide, como equipo y con el responsable de producto o el responsable del servicio, aproximadamente qué proporción va al cambio planificado, al trabajo de operación y a la mejora. Parte de lo que los datos muestran que el equipo ha estado haciendo realmente en los últimos periodos y elige luego un objetivo que se mueva en la dirección que quieres. Revisa el reparto en cada ciclo de planificación; un porcentaje fijo copiado de la diapositiva de otro equipo es una conjetura y no una decisión.

**4. Reserva un margen dimensionado con tu propio historial.** Usa el propio registro de interrupciones del equipo para dimensionar un margen para el trabajo no planificado, por ejemplo mirando el rango medio y alto de la proporción semanal de trabajo no planificado en periodos recientes, y planifica solo la capacidad restante. Un margen que se deja sin usar con regularidad puede reducirse; uno que se agota con regularidad necesita una asignación mayor o que se elimine una causa. La relación entre carga y retraso en una cola (véanse la [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law) y el tema 2.3, Trabajo en curso y teoría de colas) explica por qué un sistema que opera a plena utilización no tiene margen para absorber una sorpresa.

### Diseña la vía de las interrupciones

**5. Encamina las interrupciones a un rol con nombre.** Rota a una sola persona, a menudo llamada gestora de interrupciones, ingeniera de guardia o escudo, para que reciba las demandas entrantes durante un día o una semana, mientras las demás protegen su concentración. El rol tiene un alcance escrito, una nota de traspaso y un límite de duración para que la carga se reparta de forma equitativa. Los equipos con rotación deben conectarla con la práctica de guardias (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

**6. Clasifica en la puerta.** Las interrupciones difieren enormemente en urgencia. Aplica en la entrada una breve regla de [triaje](https://en.wikipedia.org/wiki/Triage) que haga tres preguntas: ¿hay un servicio caído o un usuario bloqueado?, ¿hay una fecha que no puede moverse? y ¿puede la demanda esperar al próximo evento de planificación? Los elementos que no pasen ninguna van a la lista de pendientes y se planifican como cualquier otro trabajo. En términos de ITIL 4, este es el paso de priorización de la gestión de incidentes y de la gestión de solicitudes de servicio aplicado a la propia entrada del equipo.

### Gobierna el carril de urgencias

**7. Da al carril de urgencias un límite y una prueba de entrada.** El carril contiene como máximo uno o dos elementos a la vez, y un elemento entra solo si su costo del retraso es alto e inmediato y quien lo solicita puede enunciarlo. Una prueba declarada permite al equipo decir que no a la petición que es meramente ruidosa. Si el carril está siempre lleno, ha dejado de ser una excepción, y el equipo debe revisar la prueba de entrada y las causas aguas arriba. El carril es una [clase de servicio](https://en.wikipedia.org/wiki/Class_of_service) con sus propias reglas; véase la literatura de Kanban para la idea subyacente (Anderson, 2010).

### Elimina las fuentes

**8. Vincula los elementos no planificados a una causa y revisa las repeticiones.** Añade una etiqueta de causa o un enlace a un registro de problema a cada elemento no planificado. Una vez al mes, enumera las causas que se repiten y envía las principales a la gestión de problemas, a la lista de pendientes como elementos de deuda técnica o a mejoras de monitorización (véanse el tema 4.1, Métricas de gestión de problemas, y el tema 4.6, Deuda técnica y errores conocidos). La proporción de trabajo no planificado repetido te dice si esas correcciones surten efecto. El patrón es similar a la eliminación del trabajo repetitivo descrita en el libro de SRE de Google, donde el trabajo operativo manual repetitivo se trata como algo que debe eliminarse mediante ingeniería; el libro sugiere mantenerlo por debajo de una proporción del tiempo de un ingeniero (Beyer et al., 2016), una pauta que cada equipo debe contrastar con sus propios datos en lugar de adoptarla como meta.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Razón de trabajo no planificado | Añadir elementos a la instantánea de la planificación tarde para que cuenten como planificados; dejar sin seguimiento el trabajo urgente para que nunca cuente; etiquetar elementos planificados como no planificados para excusar un plan incumplido | Instantánea de planificación congelada con marca de tiempo; recuento de no clasificados; una muestra de elementos cerrados leída cada trimestre para comparar la etiqueta con lo ocurrido |
| Adherencia a la asignación de capacidad | Mover elementos entre categorías para ajustarse al reparto acordado; dividir un elemento en varios para desplazar las proporciones; elegir un reparto que el equipo ya cumple | Definiciones de categoría fijas escritas en el acuerdo de trabajo; una muestra de descripciones de elementos frente a su categoría; fiabilidad del compromiso planificado |
| Tasa de interrupciones | Convertir las interrupciones en favores silenciosos que nunca llegan al registro; combinar varias demandas en una entrada; desalentar a la gente de pedir | Comparar el registro con el tráfico del canal de entrada y el historial de alertas; preguntar al equipo en la retrospectiva si el registro coincide con su experiencia |
| Tasa de urgencias | Mantener el trabajo urgente fuera del carril para parecer disciplinado, o meter todo en él para ganar velocidad; redefinir urgencia como "importante" | Límite del carril con una prueba de entrada; proporción de elementos de urgencia que cumplieron la prueba en la revisión; desplazamiento del trabajo planificado |
| Desplazamiento del trabajo planificado | Registrar el desplazamiento como un cambio de alcance por elección; dejar que los elementos planificados fallen en silencio sin un motivo; evitar los elementos planificados que probablemente serán desplazados | Campo de motivo obligatorio en cada elemento retirado o sin terminar; fiabilidad del compromiso planificado; revisión de los motivos en la retrospectiva |
| Proporción de trabajo no planificado repetido | Usar una etiqueta de causa gruesa para que las repeticiones queden ocultas, o una fina para que nada se repita; cerrar el registro de problema para eliminar el vínculo | Taxonomía de etiquetas de causa revisada cada trimestre; recuento de no clasificados; comprobación de reaparición tras cerrar un registro de problema |
| Fiabilidad del compromiso planificado | Planificar poco para terminarlo todo; inflar las estimaciones; contar un elemento parcial como hecho; descartar los elementos difíciles antes de que empiece el periodo | Tamaño y valor de los elementos planificados comparados a lo largo del tiempo; comprobación del resultado de la meta de entrega; razón de trabajo no planificado, para que un valor alto no se lea como salud cuando el plan fue tímido |

Una lectura sana es una razón de trabajo no planificado que el equipo sabe explicar, un carril de urgencias que rara vez está lleno y una proporción de repeticiones que baja tras las correcciones. Una lectura sospechosamente perfecta es lo que hay que investigar. Un equipo que informa de cero trabajo no planificado tiene o un servicio muy tranquilo o uno sin seguimiento, y la forma de distinguirlo es comparar el registro con el historial de alertas y tickets.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Asignación de capacidad fija (porcentajes declarados) | Fácil de explicar; protege el trabajo de mejora de quedarse sin recursos | Ignora la variación real; puede manipularse reetiquetando |
| Margen reservado dimensionado con el historial | Ajusta el plan a la carga real de interrupciones | Necesita varios periodos de datos fiables; puede ocultar una causa crónica |
| Gestor de interrupciones rotativo | Protege la concentración de la mayor parte del equipo; reparte la carga de forma equitativa | El propio trabajo planificado del gestor se detiene; el rol necesita traspaso y apoyo |
| Límite estricto de urgencias | Mantiene predecible el flujo; obliga a enunciar el costo del retraso | Los solicitantes pueden rodearlo; una emergencia real puede sentirse bloqueada |
| Contar elementos en lugar de esfuerzo | Sencillo y difícil de inflar | Trata igual tamaños muy distintos |

La postura práctica para la mayoría de los equipos es contar primero elementos, añadir esfuerzo solo donde los recuentos de elementos engañen, proteger un margen pequeño y un carril de urgencias pequeño, y usar la etiqueta de causa para atacar la mayor repetición.

## Preguntas para conversar con tu equipo

**1. ¿Qué proporción del trabajo completado el último periodo fue no planificada, y cómo lo sabemos?**
Abre la instantánea de la planificación junto a la lista de elementos completados y cuenta los elementos que no estaban en el plan. Compara el resultado con la percepción de cada persona sobre el periodo; ambos suelen diferir. El facilitador debe preguntar cuántos elementos nunca se registraron, porque la respuesta honesta da forma a todos los demás números.

**2. ¿Cuáles tres fuentes de interrupciones nos cuestan más, y quién podría eliminarlas?**
Enumera las fuentes por recuento y por el esfuerzo que absorbieron, como alertas, solicitudes repetidas, escalados y peticiones ad hoc de las partes interesadas. Marca cada una como eliminable, encaminable o inevitable. El facilitador debe insistir en un responsable con nombre fuera del equipo para cualquier fuente que el equipo no pueda arreglar por sí mismo.

**3. ¿Qué reparto entre trabajo de cambio, de operación y de mejora queremos realmente?**
Compara el reparto que muestran los datos con el que la gente cree tener y con el que espera la dirección. Discutid qué tipos de trabajo abandonaría primero el equipo bajo presión, ya que eso revela las prioridades reales. Elegid un objetivo para el próximo periodo y una forma de comprobarlo.

**4. ¿Cuál es nuestra regla para el carril de urgencias, y quién decide?**
Lee en voz alta la regla actual, o anota que no existe ninguna. Pide las tres últimas urgencias y pon a prueba cada una frente a un costo del retraso declarado. Discutid qué hace el equipo cuando una persona de alto nivel pide un salto que no pasa la prueba, y quién respalda la decisión.

**5. Cuando nos interrumpen, ¿qué nos cuesta después de que termina la interrupción?**
Pide a las personas que describan cuánto tardan en recuperar su sitio en una tarea después de una interrupción típica.

**6. ¿Qué elemento no planificado ha vuelto más de una vez, y qué lo detendría?**
Toma el último trimestre de elementos no planificados y busca repeticiones por causa. Elige la que tenga mayor esfuerzo total y rastrea por qué se repite: una alerta que falta, un defecto sin corregir, un paso manual o un problema de proveedor. Decidid si va a un registro de problema, a la lista de pendientes o a una conversación con el proveedor.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega sienten el trabajo no planificado como planes rotos y pronósticos que se deslizan. Les benefician el etiquetado en la entrada, una instantánea de la planificación congelada y un pronóstico construido con un margen basado en el historial (véase el tema 2.5, Métricas de pronóstico y planificación de entregas). El registro de desplazamientos muestra a los responsables de producto lo que costó cada petición tardía.

### Equipos de servicio y operaciones

Los equipos de operaciones cargan con la mayor parte del trabajo de operación. Necesitan un gestor de interrupciones con nombre, una regla de triaje y una vía desde las solicitudes y alertas recurrentes hasta las correcciones (véase el tema 5.5, Métricas de monitorización y calidad de las alertas). La proporción de repeticiones es su argumento más fuerte para invertir en la gestión de problemas.

### Liderazgo y gobernanza

Los líderes fijan la asignación real mediante las peticiones que hacen y los plazos que aceptan. Deben pedir la razón y sus causas, financiar el trabajo de mejora que elimina las interrupciones repetidas y evitar usar las urgencias como la forma normal de hacer las cosas.

### Clientes y usuarios

Los clientes ven el trabajo no planificado como caídas, respuestas lentas y funcionalidades retrasadas. Ganan cuando el equipo tiene margen para corregir causas, y necesitan una vía justa para plantear la urgencia. Los acuerdos de nivel de servicio (véase [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement)) deben reflejar la carga de interrupciones que soporta el equipo (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de una aseguradora de salud regional opera una plataforma de siniestros con un equipo de producto de siete personas y un centro de servicios compartido. El equipo construye funcionalidades nuevas y además da soporte a la plataforma en producción. Todos los números de este ejemplo son ilustrativos.

Durante seis semanas, la fiabilidad del compromiso planificado del equipo cayó de alrededor del 85 por ciento al 55 por ciento, y el responsable de producto empezó a cuestionar las estimaciones del equipo. El responsable del equipo extrae el historial del gestor. Con las instantáneas de planificación congeladas, la razón de trabajo no planificado es del 41 por ciento por recuento en el último periodo, frente a un recuerdo del equipo de "quizá una quinta parte". El recuento de no clasificados es del 9 por ciento, así que la razón es razonablemente fiable.

Dividir los elementos no planificados por causa muestra que 14 de 24 eran trabajo de operación, y de ellos, 9 se deben a un único trabajo por lotes de envío de siniestros que falla tras un cambio de formato de datos de un socio y se reinicia a mano cada vez. La proporción de trabajo no planificado repetido es del 58 por ciento. La tasa de interrupciones es de 6 por día laborable, y 4 de ellas llegan a los ingenieros que hacen el trabajo planificado, porque el centro de servicios escala directamente a quien responde primero. El carril de urgencias contiene dos elementos a la vez la mayoría de los días, y la tasa de urgencias es del 23 por ciento. El desplazamiento del trabajo planificado es de 7 elementos en el periodo, de los cuales 5 llevan el motivo "desplazado por trabajo no planificado".

El equipo toma cuatro decisiones con el responsable de producto y el responsable del servicio. Primero, un ingeniero a la vez pasa a ser el gestor de interrupciones con un alcance escrito y una nota de traspaso, y los escalados van solo a esa persona. Segundo, el carril de urgencias se limita a un elemento, con una prueba de entrada que exige un costo del retraso declarado, y cada urgencia registra el elemento que desplazó. Tercero, el fallo del trabajo por lotes se plantea como un registro de problema, con una corrección y una conversación con el socio colocadas en la lista de pendientes como trabajo de mejora, usando el 15 por ciento de la capacidad, que es la proporción que el equipo elige como su primera asignación a la mejora. Cuarto, el equipo planifica el siguiente periodo de trabajo con un margen dimensionado a partir del rango alto de su proporción reciente de trabajo no planificado, no con una carga completa.

Seis semanas después, la razón de trabajo no planificado es del 27 por ciento, la proporción de repeticiones es del 22 por ciento, la tasa de interrupciones que llega a quienes hacen trabajo planificado es de 1,5 por día y la fiabilidad del compromiso planificado es de alrededor del 78 por ciento (todo ilustrativo). El equipo no ha alcanzado su anterior 85 por ciento, y lo dice.

El riesgo de manipulación que detecta el equipo: en el segundo periodo con el nuevo arreglo la tasa de interrupciones cae bruscamente, y el responsable del equipo nota que la gente escribe directamente al gestor, de modo que los favores nunca llegan al registro. Comparar el registro con el canal de entrada y el historial de alertas muestra que el volumen real no había cambiado. El equipo acuerda que el gestor redirija los mensajes directos al canal de entrada. El fallo estaba en el diseño de la vía, no en ninguna persona.

## Perspectiva por sector

**Startup.** Casi todo el trabajo parece urgente y las mismas pocas personas hacen el trabajo de cambio y el de operación. Mantén la clasificación en dos etiquetas y fija un límite explícito a las urgencias. La razón de trabajo no planificado es la evidencia para decir "podemos hacer la hoja de ruta o la carga de soporte, no ambas".

**Pequeña empresa.** Un administrador o un equipo pequeño suelen atender todas las solicitudes. Usa los tipos de ticket de la herramienta como clasificación, registra las interrupciones durante un mes para aprender el patrón y reserva un bloque diario fijo para el trabajo planificado. Pide a los proveedores sus informes de volumen y de causas repetidas.

**Gran empresa.** El trabajo no planificado de un equipo suele ser trabajo planificado de otro. Acordad definiciones compartidas, informad por equipo y por servicio, y financiad las correcciones en el nivel donde vive la causa (véase el tema 9.3, Métricas de colaboración y traspasos).

**Gobierno y sector público.** La capacidad puede estar fijada por topes de plantilla, y el trabajo de operación puede venir fijado por ley o por hallazgos de auditoría. Haz que formen parte de la asignación, documenta las reglas de clasificación y conserva un rastro de auditoría (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es una entrega predecible: un plan que ignora la carga de interrupciones se incumple repetidamente, y el trabajo no planificado visible da al equipo una voz más fuerte cuando pide tiempo para eliminar causas.

El costo de recoger estas medidas es modesto cuando las etiquetas y la instantánea de la planificación forman parte del flujo de trabajo normal. Los costos principales son el tiempo para acordar definiciones, la disciplina de etiquetar en la entrada, un poco de herramientas para unir los datos del gestor y de ITSM (véase el tema 1.5, Fuentes de datos e instrumentación) y las horas del gestor de interrupciones, cuyo propio trabajo planificado se ralentiza. Añadir registros de tiempo por horas cuesta bastante más y a menudo se resiente, así que añádelos solo si los recuentos de elementos resultan engañosos. El costo total de propiedad está dominado por el tiempo de las personas, así que cuéntalo.

El retorno aparece en patrones que el equipo puede medir por sí mismo y no en una cifra supuesta. Busca una proporción de trabajo no planificado repetido que baja tras las correcciones de problemas, un aumento de la fiabilidad del compromiso planificado, menos elementos planificados desplazados y menos interrupciones que llegan a las personas con trabajo planificado. Donde se conozcan las horas, el esfuerzo recuperado al eliminar una causa recurrente puede valorarse al costo por hora del propio equipo y contrastarse con el esfuerzo de la corrección (véanse el tema 7.5, Costo del servicio y economía unitaria, y el tema 7.7, Retorno de la inversión y caso de negocio). No tomes prestados porcentajes del sector para el trabajo no planificado; ninguna cifra de otra organización sustituye a tu propio historial.

## Antipatrones y trampas

- **Tratar todo el trabajo no planificado como un fallo.** Parte de él es el servicio haciendo su trabajo, y una meta de cero saca trabajo del registro. En su lugar, pregunta qué parte es esperada, cuál es evitable y fija un margen para la primera.
- **Cultura del héroe.** La persona que rescata cada emergencia se vuelve indispensable, cansada y un punto único de fallo. En su lugar, comparte el rol de interrupciones por rotación y premia la eliminación de causas.
- **Todo es una urgencia.** Un carril siempre lleno es solo una segunda cola. En su lugar, fija un límite, exige un costo del retraso declarado y revisa la prueba de entrada cada mes.
- **Planificar a plena utilización.** Un plan sin holgura garantiza que cada sorpresa desplace algo. En su lugar, dimensiona un margen con tu propio historial de interrupciones y planifica la capacidad restante.
- **Clasificar a posteriori.** Las etiquetas añadidas al final del periodo reflejan la memoria y el estado de ánimo. En su lugar, exige las etiquetas en la entrada y congela la instantánea de la planificación.
- **Absorber la demanda en silencio.** Los favores que nunca llegan al registro vuelven invisible la carga y errónea la planificación. En su lugar, haz de una única vía de entrada la regla y redirige a ella las peticiones por canales laterales.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Clasificación y visibilidad | El trabajo no se etiqueta; el trabajo no planificado se siente, no se cuenta | Algunos equipos etiquetan el trabajo planificado y no planificado con sus propias palabras | Una definición escrita de tipos de trabajo y de la marca de planificado, aplicada en la entrada con una instantánea de la planificación | Razón de no planificado y recuento de no clasificados con seguimiento de su tendencia y revisados cada periodo | Definiciones compartidas entre equipos y proveedores y revisadas cuando dejan de informar decisiones |
| Asignación de capacidad | Se supone que la capacidad está totalmente disponible para el trabajo planificado | Algunos equipos aplican un margen aproximado | Un reparto acordado entre cambio, operación y mejora, con un margen dimensionado con el historial | Adherencia revisada y reparto ajustado con los responsables de producto y de servicio | Asignación negociada entre los equipos que comparten plataformas, servicios y personas |
| Gestión de interrupciones y urgencias | Cualquiera interrumpe a cualquiera; la urgencia la fija la antigüedad | En algunos equipos existe el hábito de una persona de guardia o una fila urgente | Un rol de interrupciones con nombre, una regla de triaje y un carril de urgencias con un límite y una prueba de entrada | Tasa de urgencias, desplazamiento y tasa de interrupciones revisados frente a una barrera de protección | Encaminamiento de interrupciones y reglas de urgencia coordinados entre equipos, con guardias y vías de escalado compartidas |
| Eliminación de causas | Los mismos problemas se repiten y se arreglan con heroicidades | Algunas repeticiones se notan y se discuten en las retrospectivas | Los elementos no planificados llevan una etiqueta de causa y las principales repeticiones van a la gestión de problemas | Proporción de repeticiones con seguimiento y correcciones financiadas como trabajo de mejora planificado | Causas rastreadas entre equipos, proveedores y clientes, y la mejora es rutinaria |

## Lista de verificación

- [ ] Cada elemento de trabajo lleva un tipo de trabajo (cambio, operación, mejora) y una marca de planificado, establecidos en la entrada.
- [ ] Las definiciones de planificado, no planificado, cambio y operación están escritas en el acuerdo de trabajo del equipo.
- [ ] Una instantánea de la planificación se congela al inicio de cada periodo y se guarda.
- [ ] La razón de trabajo no planificado se informa como tendencia, junto al recuento de no clasificados.
- [ ] El equipo y sus responsables han acordado una asignación de capacidad y la han revisado en el último trimestre.
- [ ] Existe una única vía de entrada y las peticiones por canales laterales se redirigen a ella.
- [ ] Un rol de interrupciones con un alcance escrito rota entre el equipo.
- [ ] El carril de urgencias tiene un límite, una prueba de entrada y un registro de lo que desplazó cada urgencia.
- [ ] Los elementos no planificados llevan una etiqueta de causa o un enlace a un registro de problema, y las repeticiones se revisan cada mes.
- [ ] Las medidas se informan a nivel de equipo y de servicio, y nunca se usan para clasificar a individuos.

## Prompts de IA

**Diseña una clasificación de trabajo para la entrada.**

```text
Nuestro equipo es [team description, for example a platform team of six that
builds and supports an internal service]. Usamos [tracker or ITSM tool].
Queremos etiquetar cada elemento en la entrada como cambio, operación o mejora,
y como planificado o no planificado. Redacta definiciones claras de una frase
para cada valor, tres casos límite sobre los que la gente discutirá con un
dictamen sugerido para cada uno y un formulario de entrada breve. No inventes
funciones de nuestra herramienta ni valores de referencia. Enumera tus
supuestos y las preguntas que debería responder para afinar las definiciones.
```

**Analiza un registro de interrupciones en busca de patrones.**

```text
Este es un resumen de nuestras interrupciones durante [period]: [paste
anonymized counts by source, day, and type, with no names of individuals].
Agrúpalas en fuentes que podrían eliminarse, encaminarse a una persona,
agruparse o aceptarse. Para cada grupo, sugiere un experimento y una medida de
si funcionó. No inventes valores de referencia ni nos compares con otras
organizaciones. Enumera tus supuestos y los datos que necesitarías para tener
más confianza.
```

**Redacta una política del carril de urgencias.**

```text
Trabajamos con [flow board, time-boxed planning, continuous flow, or a hybrid]
con un equipo de [team size] y un nivel de servicio de [service levels, if any].
Redacta una política de urgencias de una página con una prueba de entrada basada
en un costo del retraso declarado, un límite de elementos en el carril, una
regla sobre qué ocurre con el elemento desplazado y una lista de preguntas de
revisión mensual. Mantén el lenguaje neutral y evita nombrar a personas. No
inventes umbrales; marca los que debo elegir yo. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar qué tema posee una métrica relacionada, como el volumen de incidentes o el trabajo repetitivo, y la barrera de protección que debe acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una versión editada de este tema mantiene coherentes sus relojes, sus reglas de clasificación y su tabla de manipulación.

## Puntos clave

- El trabajo planificado y el no planificado, y el trabajo de cambio y el de operación, comparten un único fondo de capacidad, así que haz visible el reparto y acuérdalo deliberadamente.
- Etiqueta el trabajo en la entrada y congela una instantánea de la planificación, ya que "no planificado" solo significa algo frente a un plan registrado.
- Las interrupciones cuestan tiempo de recuperación además de minutos, así que encamínalas a un rol con nombre y clasifícalas en la puerta.
- Un carril de urgencias necesita un límite, una prueba de entrada y un registro de lo que desplazó cada urgencia.
- El trabajo no planificado repetido es la señal más fuerte para la gestión de problemas y el trabajo de mejora, y la proporción de repeticiones muestra si las correcciones surten efecto.
- Informa a nivel de equipo y de servicio, compara un equipo con su propio historial y nunca clasifiques a individuos.

## Referencias y lecturas complementarias

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
