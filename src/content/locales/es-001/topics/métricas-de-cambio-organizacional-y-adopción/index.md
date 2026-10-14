# Métricas de cambio organizacional y adopción

**Un cambio ha arraigado cuando la gente hace lo nuevo por las razones por las que se pretendía hacerlo y el resultado mejora, así que mide el propósito y el efecto y no la presencia de rituales, y mantén el ritmo del cambio en uno que la gente pueda sostener.**

## Resumen y motivación

Las organizaciones adoptan nuevas formas de trabajar todo el tiempo: un nuevo proceso de gestión de servicios, una canalización de entrega, una estructura de equipos distinta, un conjunto de prácticas ágiles, un marco de incidentes. Los anuncios son fáciles. Lo que cambia en el comportamiento diario es la verdadera pregunta, y si siguió el beneficio previsto es lo que importa. Muchos programas informan de éxito porque se impartió formación, se instalaron herramientas y se usa el nuevo vocabulario, mientras el trabajo se ve igual y los resultados no se han movido.

Los principios del Manifiesto Ágil dicen que las mejores arquitecturas, requisitos y diseños surgen de equipos que se autoorganizan, y que los requisitos cambiantes son bienvenidos. También dicen que se construyan los proyectos en torno a individuos motivados, que se confíe en ellos y que se mantenga un ritmo constante de forma indefinida. Estos principios son un argumento permanente contra imponer prácticas desde arriba y medir el cumplimiento. Apuntan hacia un enfoque distinto del cambio: implicar a la gente continuamente, dejar que la forma de trabajar evolucione y juzgarla por los resultados.

Una idea de advertencia de la cultura del software es el culto al cargamento (cargo cult). La [programación de culto al cargamento](https://en.wikipedia.org/wiki/Cargo_cult_programming) describe la inclusión ritual de código o de prácticas que no sirven a ningún propósito, copiados de otro lugar sin entenderlos. La charla de Richard Feynman sobre la "ciencia de culto al cargamento" usó una imagen relacionada para describir un trabajo que tiene la forma externa de lo real sin su sustancia. Aplicado a las formas de trabajar, el culto al cargamento es el equipo que celebra todas las reuniones, usa todos los términos y rellena todos los tableros, y no entrega de forma continua, no colabora con sus partes interesadas ni mejora. Un enfoque de [culto al cargamento](https://en.wikipedia.org/wiki/Cargo_cult) confunde la forma de una práctica con su objetivo. Las métricas de este tema están diseñadas para distinguir la diferencia.

Ayudan varias ideas del estudio del cambio.

- **El cambio es un problema de [cambio organizativo](https://en.wikipedia.org/wiki/Organizational_change) tanto como técnico.** La [gestión del cambio](https://en.wikipedia.org/wiki/Change_management) aborda el lado de las personas: la conciencia, el deseo, el conocimiento, la capacidad y el refuerzo son algunos de los elementos de uso común. Modelos como los ocho pasos de John Kotter y el ADKAR de Prosci ofrecen vocabularios, y ninguno es una garantía.
- **La gente suele resistirse al cambio por motivos sólidos.** La [resistencia al cambio](https://en.wikipedia.org/wiki/Resistance_to_change) puede señalar un problema real de la propuesta, una amenaza a algo que la gente valora o cansancio. Trátala como información.
- **La adopción es un proceso a lo largo del tiempo.** La teoría de la [difusión de innovaciones](https://en.wikipedia.org/wiki/Diffusion_of_innovations) describe cómo se extienden las prácticas nuevas por un sistema social, de los adoptantes tempranos a la mayoría, mediante la influencia y la observación.
- **La cultura determina lo que arraiga.** La [cultura organizacional](https://en.wikipedia.org/wiki/Organizational_culture), los supuestos y comportamientos compartidos de un grupo, determina qué cambios se sienten naturales y cuáles se rechazan.
- **La observación cambia el comportamiento.** El [efecto Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) es la tendencia de las personas a alterar su comportamiento porque se las observa. Un piloto que muestra un gran resultado bajo una atención estrecha puede no sostenerse a escala.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es especialmente pertinente para la transformación: cuando la adopción es una meta, los equipos adoptan la forma. Un panel de "equipos que usan el nuevo proceso" con un mandato detrás mostrará mucha adopción y poco cambio (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Este tema reúne las medidas anteriores de resultados (véase el tema 6.5, Realización de valor y resultados de negocio) y de mejora (véase el tema 9.5, Métricas de mejora continua) como la evidencia de que un cambio funcionó.

## Principios clave

- **Juzga un cambio por su resultado, no por sus rituales.** La prueba de la adopción es un mejor resultado.
- **Haz explícito el objetivo de cada práctica.** Si nadie sabe decir por qué, es candidata a culto al cargamento.
- **Implica continuamente a las personas afectadas.** Diseña con ellas, no para ellas.
- **Prefiere la adopción voluntaria y la evolución a los mandatos.** Los equipos adaptan las prácticas a su contexto.
- **Limita la carga de cambio.** La gente solo puede absorber hasta cierto punto, y un ritmo constante incluye el cambio.
- **Trata la resistencia como datos.** Escucha lo que dice sobre la propuesta.
- **Compara con honestidad.** Usa grupos de comparación y desconfía de los resultados que solo aparecen bajo observación.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claridad del objetivo | Proporción de miembros del equipo que pueden enunciar con sus propias palabras el objetivo de una práctica y una forma de saber si funciona | miembros que dan un objetivo y un indicador claros en una breve comprobación anónima / miembros preguntados, a nivel de equipo | porcentaje | Breve comprobación anónima, agregada por equipo | Gestión del cambio organizativo; mejora continua | Comprensión del equipo de por qué trabaja de esta manera | Trimestral |
| Amplitud de la adopción de la práctica | Proporción de equipos que usan una práctica definida, según el comportamiento observable y no la asistencia | equipos que muestran el comportamiento definido en el último periodo, confirmado por el equipo y un observador / equipos incluidos | porcentaje | Autoevaluación del equipo confirmada por observación | Gestión del cambio organizativo | Difusión de una práctica | Trimestral |
| Movimiento del resultado frente a la comparación | Cambio en una medida de resultado de los equipos que adoptan comparado con equipos similares que no adoptan en el mismo periodo | cambio en el resultado de quienes adoptan menos cambio de los equipos de comparación | unidades de resultado | Medidas de resultado por equipo (flujo, estabilidad, experiencia) | Mejora continua; medición e informes | Aprendizaje de los experimentos | Trimestral |
| Carga de cambio | Número de cambios significativos que afectan a la vez a un equipo | recuento de iniciativas de cambio significativas que piden a un equipo cambiar su forma de trabajar en el periodo, por equipo | recuento | Portafolio de cambios y aportación del equipo | Gestión del cambio organizativo; habilitación de cambios | Ritmo sostenible | Trimestral |
| Tasa de implicación de las partes interesadas | Proporción de iniciativas de cambio en que las personas afectadas participaron en el diseño y la revisión | iniciativas con implicación registrada de las personas afectadas / iniciativas | porcentaje | Registros de iniciativas y confirmación del equipo afectado | Gestión del cambio organizativo; relación con las partes interesadas | Implicación continua de las partes interesadas | Trimestral |
| Proporción de adopción voluntaria | Proporción de equipos que adoptan que eligieron la práctica, en oposición a que se les dirigiera | equipos que adoptan y que informan haber elegido la práctica / equipos que adoptan | porcentaje | Informes de los equipos | Gestión del cambio organizativo | Equipos que se autoorganizan | Anual |
| Tasa de reversión | Proporción de equipos que abandonaron una práctica en el plazo de un año desde su adopción | equipos que la dejaron en 12 meses / equipos que la adoptaron | porcentaje | Registros de los equipos a lo largo del tiempo | Gestión del cambio organizativo; mejora continua | Prácticas abandonadas por no ser útiles | Anual |

Define la práctica por lo que hacen los equipos y por lo que pretenden, no por su nombre. La amplitud de la adopción cuenta a un equipo solo cuando su comportamiento coincide con la definición y el equipo y un observador están de acuerdo. El movimiento del resultado usa equipos de comparación elegidos de antemano como similares en el tipo de servicio y en el punto de partida, e indica qué más cambió. La carga de cambio cuenta las iniciativas que piden al equipo alterar su trabajo, no las actualizaciones rutinarias. Todas las medidas son a nivel de equipo o de iniciativa, nunca individuales.

## Recomendaciones

### Empieza por el propósito y las personas

**1. Declara el objetivo y el indicador antes de la práctica.** Para cada cambio propuesto, escribe qué problema resuelve, quién lo siente, qué resultado debe mejorar y cómo lo sabrás. Si el objetivo es "ser ágiles" o "adoptar el marco", pregunta de nuevo. Los equipos seguirán una práctica con más gusto cuando vean para qué sirve. Esta es la mejor protección contra el culto al cargamento.

**2. Implica a las personas afectadas en el diseño del cambio.** Pregunta a quienes hacen el trabajo qué les duele, qué probarían y qué temen. Diseña con unas pocas de ellas, prueba con un grupo pequeño y escucha. La implicación continua de las partes interesadas es un objetivo ágil central, y se aplica a los programas de cambio tanto como a los productos. Registra quién participó.

**3. Escucha la resistencia.** Cuando la gente se oponga, pregunta qué ve que tú no ves. Las respuestas posibles incluyen un defecto de la propuesta, una capacidad que falta, un costo no reconocido o un cambio anterior que nunca se terminó. Registra las inquietudes y las respuestas, y ajusta el cambio donde tengan razón.

### Introduce el cambio de una forma de la que se pueda aprender

**4. Haz un piloto con una comparación.** Prueba el cambio con uno o dos equipos dispuestos y observa un grupo comparable que no cambie. Compara los resultados en el mismo periodo. Ten presente el efecto Hawthorne, y alarga el piloto lo suficiente para que se desvanezca la novedad. Un [proyecto piloto](https://en.wikipedia.org/wiki/Pilot_project) es una prueba a pequeña escala, y su valor está en lo que enseña antes de escalar, así que declara de antemano qué esperas aprender y qué te haría detenerlo.

**5. Prefiere la adopción voluntaria y deja que las prácticas evolucionen.** Cuando los equipos eligen una práctica porque les resuelve un problema, la adaptan y la conservan. Cuando se impone, la representan. Ofrece el objetivo, la evidencia y el apoyo, y deja que los equipos decidan cómo aplicarla. Permite la variación local y aprende de ella. Sigue la adopción voluntaria y la reversión para ver si una práctica arraiga por las razones correctas.

**6. Extiéndelo mediante el ejemplo y la conversación.** La influencia viaja a través de personas respetadas y visibles. Comparte historias de equipos que probaron algo y qué ocurrió, incluidos los reveses. Las comunidades de práctica son un buen canal (véase el tema 9.4, Métricas de habilidades y aprendizaje). Evita las tablas de clasificación de adopción.

### Vigila la carga

**7. Cuenta los cambios que caen sobre cada equipo.** Enumera las iniciativas que piden a un equipo cambiar su forma de trabajar: herramientas nuevas, procesos nuevos, reorganizaciones, requisitos de informe. Un equipo que afronta muchas a la vez no puede absorberlas, y se instala la [fatiga del cambio](https://en.wikipedia.org/wiki/Change_fatigue). Secuencia las iniciativas, descarta las de poco valor y da a los equipos espacio para terminar un cambio antes del siguiente. Esto es parte de mantener un ritmo sostenible (véase el tema 9.2, Métricas de satisfacción y bienestar).

**8. Retira lo que ya no sirve.** Por cada práctica nueva que se añade, pregunta qué puede retirarse. Las capas de proceso se acumulan, y cada capa tiene un costo. Revisa cada trimestre los rituales que ejecuta un equipo y abandona aquellos cuyo objetivo ya no se sirve.

### Mide la adopción por lo que importa

**9. Define la adopción por el comportamiento observable y el propósito.** Describe qué hace distinto un equipo cuando la práctica ha arraigado, por ejemplo "los cambios llegan a producción en pasos pequeños con comprobaciones automatizadas, y se consulta a los usuarios cada semana". Evalúa mediante la observación y la conversación, no contando artefactos como tableros o reuniones. Pide a los miembros del equipo que expliquen el objetivo.

**10. Compara resultados, no cumplimiento.** Mira las medidas de flujo, estabilidad, experiencia y costo de los equipos que adoptan frente a los equipos de comparación (véase el tema 2.8, Métricas DORA). Ten cuidado con la causalidad: los equipos que adoptan pueden ser distintos de maneras que también afectan a los resultados. Informa de la comparación con sus límites.

**11. Comprueba la experiencia de las personas.** La adopción que eleva la fricción o erosiona la autonomía puede socavarse a sí misma. Usa los pulsos de salud del equipo y de bienestar para ver cómo se siente el cambio (véase el tema 9.1, Salud del equipo y experiencia de desarrollo). Pregunta qué quitó el cambio además de qué añadió.

**12. Sé honesto al informar.** Informa juntos de la adopción, los resultados, la carga de cambio y las reversiones, con la historia de lo aprendido. Evita declarar el éxito cuando la forma se ha extendido y los resultados no se han movido. Admite cuando una práctica no encajó, y retírala. Una transformación se juzga por lo que permitió, no por lo ampliamente que se anunció.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Claridad del objetivo | Aleccionar a la gente para que recite el objetivo; hacer preguntas sugestivas | Comprobación anónima; pedir un ejemplo de cómo lo sabrían; comparar con el movimiento del resultado |
| Amplitud de la adopción de la práctica | Contar tableros y reuniones; equipos que actúan para el observador | Definir por comportamiento y propósito; observación por alguien ajeno al equipo; movimiento del resultado |
| Movimiento del resultado frente a la comparación | Elegir un grupo o un periodo de comparación favorable; dejar fuera otros cambios | Elegir la comparación y el periodo de antemano; enumerar otros cambios; mostrar la incertidumbre |
| Carga de cambio | Dividir una iniciativa en piezas pequeñas; no contar los cambios que llegan de manera informal | Contar por el efecto en el trabajo del equipo; pedir a los equipos que enumeren lo que están absorbiendo |
| Tasa de implicación de las partes interesadas | Invitar a la gente a una sesión informativa y llamarlo implicación; registrar solo la asistencia | Confirmación del equipo afectado de que influyó en el diseño; registrar los cambios hechos en respuesta |
| Proporción de adopción voluntaria | Presentar un mandato como una elección; equipos que dicen haber elegido cuando sintieron que debían hacerlo | Informe anónimo; preguntar qué habría ocurrido si hubieran declinado |
| Tasa de reversión | Hacer costoso u oculto abandonar una práctica; rebautizar la práctica abandonada | Revisar los motivos del abandono; permitir una retirada segura |

Una lectura sana es una práctica que los equipos pueden explicar y elegir, una adopción medida por el comportamiento, resultados que mejoran frente a la comparación, una carga de cambio manejable, unas pocas reversiones con buenos motivos y personas que dicen que su voz dio forma al cambio.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Despliegue por mandato | Rápido, coherente | Cumplimiento sin propósito; resentimiento; culto al cargamento |
| Adopción voluntaria | Adoptantes motivados; encaje local | Más lenta; desigual; algunos equipos nunca adoptan |
| Cambio a lo grande | Evento claro | Alto riesgo; carga pesada; difícil de aprender de él |
| Pilotos por etapas con comparación | Aprender antes de escalar | Más lentos; los pilotos pueden no generalizarse |
| Prácticas estándar entre equipos | Coordinación y soporte más fáciles | Mal encaje para algunos equipos |
| Variación local | Encaje con el contexto | Más difícil de comparar y de apoyar |
| Paneles de adopción | Progreso visible | Premian la forma de la adopción |
| Comparación de resultados | Señal honesta | Difícil de aislar; más lenta en mostrarse |

La respuesta en prosa es hacer pilotos con comparación, ofrecer prácticas con sus objetivos, dejar que los equipos elijan y adapten, contar la carga de cambio y juzgar por los resultados, usando cualquier estándar solo donde la coordinación lo exija.

## Preguntas para conversar con tu equipo

**1. ¿Qué práctica seguimos de la que nadie sabe explicar el propósito?**
Cada persona nombra una. Para cada una, discutid qué problema pretendía resolver y si aún lo resuelve. El facilitador debe registrar las respuestas sin actitud defensiva. Acordad conservar, cambiar o abandonar dos de ellas.

**2. ¿Qué cambios nos están cayendo ahora, y cuáles podrían esperar?**
Enumera todas las iniciativas que nos piden cambiar cómo trabajamos. Cuéntalas. Pregunta cuáles añaden valor y cuáles añaden carga. Propón a los patrocinadores una secuencia o una detención para una de ellas.

**3. ¿A qué dijimos que no en el último cambio, y escuchó alguien?**
Recuerda la resistencia o las inquietudes. ¿Se oyeron, y se adaptó el cambio? Discutid cómo plantear inquietudes de una forma que se reciba. Acordad cómo dará retroalimentación el equipo sobre el próximo cambio.

**4. Si este cambio funcionó, ¿qué sería distinto en nuestros resultados, y cómo lo sabríamos?**
Redacta el indicador y la comparación. Pregunta qué más está cambiando a la vez. Si nadie sabe decirlo, el cambio carece de objetivo. Acordad ahora una línea base.

**5. ¿Cómo sabríamos si una práctica nueva fuera solo de cara a la galería?**
Piensa en señales: nadie usa la salida, la reunión no tiene decisión, el tablero se actualiza para un público. Discutid cómo comprobarlas. Acordad un momento para revisar los rituales que ejecuta el equipo.

**6. ¿Qué práctica abandonamos, y qué aprendimos al abandonarla?**
Recuerda una. Discutid si fue seguro abandonarla y qué la sustituyó. Trata la respuesta como prueba de que los equipos pueden adaptarse.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega viven con los cambios. Deben pedir el objetivo, implicarse en el diseño, ejecutar pequeños experimentos y decir cuándo una práctica no encaja. Tienen derecho a hacer evolucionar su forma de trabajar, y tienen el deber de entregar resultados que justifiquen sus elecciones.

### Equipos de servicio y operaciones

Los equipos de operaciones absorben cambios de proceso desde muchas direcciones, a menudo además del trabajo no planificado. Deben registrar la carga de cambio, pedir secuenciación y unirse a los pilotos donde su visión importe. Están bien situados para notar cuándo un proceso nuevo añade pasos sin valor.

### Liderazgo y gobernanza

Los líderes patrocinan los cambios y a menudo los imponen. Deben declarar objetivos e indicadores, implicar a las personas afectadas, preferir la adopción voluntaria donde sea posible, limitar la carga de cambio y estar dispuestos a retirar lo que no funcione. La gobernanza debe mirar los resultados frente a la comparación, la carga de cambio por equipo y las tasas de reversión, y desconfiar de las cifras de adopción uniformemente altas.

### Clientes y usuarios

Los usuarios viven los efectos del cambio en la calidad del servicio, la comunicación y la estabilidad. Se les puede implicar en el diseño de los cambios que les afectan, y su retroalimentación es evidencia de si el cambio ayudó. También soportan el costo de las transformaciones que distraen a los equipos del servicio.

## En la práctica: un ejemplo de ITIL ágil

La división de tecnología de una empresa logística multinacional tiene 30 equipos. Hace dos años lanzó un programa de transformación para adoptar un conjunto estándar de formas de trabajar, y el panel del programa muestra 27 de 30 equipos "adoptados". Los números siguientes son ilustrativos.

A la nueva jefa de práctica de ingeniería le preguntan si el programa funcionó. Mira más allá del panel. Una breve comprobación anónima muestra que solo el 41 por ciento de los miembros de los equipos puede enunciar el objetivo de las prácticas principales y una forma de saber si funcionan. La observación de ocho equipos muestra que cinco celebran las reuniones prescritas y actualizan los tableros, y dos de esos cinco siguen liberando cada trimestre con aprobación manual. Al comparar los 12 equipos con el comportamiento de práctica más fuerte con 12 equipos similares que no lo tenían, la mediana del tiempo de ciclo y la tasa de fallos de cambio son similares, y la satisfacción con la forma de trabajar es menor entre los equipos bajo el cumplimiento más fuerte. El equipo medio está absorbiendo cinco iniciativas que le piden cambiar su forma de trabajar, con tres equipos que afrontan ocho o más. El 22 por ciento de los equipos adoptó de forma voluntaria. De los equipos que adoptaron una práctica de canalización hace dos años, el 30 por ciento la ha dejado en silencio.

La jefa de práctica de ingeniería replantea el programa con los equipos. El objetivo de cada práctica se escribe en lenguaje llano con un indicador, y los equipos son libres de adoptar, adaptar o declinar, con una conversación sobre el porqué. La división publica la carga de cambio por equipo y pide a los patrocinadores que secuencien sus iniciativas; cuatro se pausan y dos se fusionan. Los equipos dispuestos hacen un piloto de una práctica de versiones en pasos pequeños con comprobaciones automatizadas, con un grupo de comparación elegido de antemano, y los resultados se comparten como historias y números. Las partes interesadas de negocio y de operaciones se unen a sesiones de diseño de dos cambios de proceso. El informe pasa de los recuentos de adopción al movimiento del resultado, la carga de cambio y la reversión.

Un año después, el 71 por ciento de los miembros de los equipos puede enunciar el objetivo de las prácticas que usa. Los equipos piloto reducen la mediana del tiempo de ciclo un 30 por ciento frente a una reducción del 6 por ciento en el grupo de comparación, habiendo considerado el efecto Hawthorne al alargar el piloto dos meses más. La carga media de cambio baja a tres iniciativas por equipo. La adopción voluntaria sube al 64 por ciento, y las reversiones son del 9 por ciento, con los motivos registrados. El director de operaciones pide una meta del 100 por ciento de adopción a final de año. La jefa de práctica de ingeniería propone seguir los resultados y la carga, explicando que un 100 por ciento impuesto produjo la anterior apariencia de éxito y la anterior reversión. La decisión se registra, y el panel abandona el recuento de adopción.

## Perspectiva por sector

**Startup.** El cambio es constante y las prácticas provienen de los fundadores y de las primeras contrataciones. Mantén explícito el objetivo de cada práctica y abandona lo que no ayude. Resiste la tentación de copiar el proceso de una gran empresa antes de tener sus problemas.

**Pequeña empresa.** El dueño suele decidir, y el cambio es personal. Explica por qué, implica a las pocas personas afectadas, prueba un cambio a la vez y comprueba si el dolor al que apunta ha aliviado. Evita las compras de marcos que superen la capacidad del equipo para absorberlos.

**Gran empresa.** La escala invita a estándares, programas y consultores, y con ellos al riesgo de culto al cargamento en volumen. Ofrece prácticas compartidas con objetivos, apoya la adopción voluntaria, gestiona el portafolio de cambios por la carga de los equipos y compara los resultados con honestidad. Usa las comunidades de práctica para extender lo que funciona.

**Gobierno y sector público.** El cambio puede venir impulsado por la legislación, la reestructuración y los ciclos políticos, con poca elección. Donde la elección sea limitada, sé transparente al respecto, concéntrate en el objetivo y el resultado e implica pronto al personal y a los usuarios. Pueden aplicarse protecciones del personal y deberes de consulta, y la rendición de cuentas pública hace valioso informar con honestidad de lo que no funcionó (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de medir bien el cambio son pequeños: comprobaciones breves, datos de comparación de medidas existentes, tiempo de observación y una lista de iniciativas por equipo. El costo mayor es la disposición a oír que un programa favorito no funciona.

Los retornos provienen de no malgastar el elevadísimo costo de las transformaciones fallidas: formación, consultoría, herramientas y el tiempo de mucha gente, además del costo de la fatiga del cambio y de la confianza perdida. Construye el caso con tu propio historial: el costo de un programa pasado y qué resultados movió, el número de iniciativas que compiten por cada equipo y la proporción de prácticas adoptadas que luego se abandonaron. Evita citar estadísticas sobre tasas de fracaso de transformaciones salvo que puedas rastrear su fuente y su método. Incluye el beneficio de la corrección más temprana del rumbo mediante pilotos con comparación (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Informar la adopción como éxito.** La forma puede extenderse sin sustancia. Informa los resultados frente a la comparación.
- **Imponer prácticas por mandato.** Produce ritual y resentimiento. Ofrece objetivos y deja que los equipos elijan.
- **Copiar el proceso de otra empresa.** Importa la forma, no las condiciones que lo hicieron funcionar. Parte de tus problemas.
- **Demasiados cambios a la vez.** La carga supera la capacidad. Cuenta y secuencia.
- **Descartar la resistencia.** Pierdes información. Escucha y adapta.
- **Pilotos sin comparación.** Los efectos de novedad engañan. Usa una comparación y un periodo más largo.
- **No retirar nunca nada.** Las capas de proceso se acumulan. Retira a medida que añades.
- **Teatro del éxito.** Las historias sin números, o los números sin historias, ocultan la verdad. Informa de ambos, con honestidad.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Propósito e implicación | Prácticas anunciadas | Objetivos declarados en presentaciones | Objetivo e indicador escritos para cada cambio; personas afectadas consultadas | Implicación y claridad del objetivo medidas; resistencia registrada y respondida | Cambio codiseñado con usuarios y equipos en toda la organización y los socios |
| Introducción y evidencia | Despliegues a lo grande | Pilotos sin comparación | Pilotos con grupos de comparación; adopción definida por comportamiento | Movimiento del resultado y reversión con seguimiento; límites de la evidencia informados | Aprendizaje a nivel de portafolio sobre qué cambios funcionan, compartido abiertamente |
| Carga y sostenibilidad | Sin visión de la carga de cambio | Iniciativas enumeradas | Carga de cambio contada por equipo y secuenciada | Carga gestionada con la capacidad; prácticas retiradas | Cambio planificado conjuntamente con la capacidad, el bienestar y las metas de entrega |

## Lista de verificación

- [ ] Cada cambio tiene un objetivo escrito, un indicador con nombre y una línea base.
- [ ] Las personas afectadas participaron en el diseño, y su aportación está registrada.
- [ ] Las inquietudes y la resistencia se registran con las respuestas.
- [ ] Los pilotos tienen un grupo de comparación y un periodo lo bastante largo para que se desvanezca la novedad.
- [ ] La adopción se define por el comportamiento observable y el propósito.
- [ ] La adopción voluntaria y la reversión tienen seguimiento, con los motivos.
- [ ] La carga de cambio por equipo se cuenta, y las iniciativas se secuencian.
- [ ] Las prácticas se revisan para su retirada al menos una vez al año.
- [ ] El movimiento del resultado se informa con sus límites.
- [ ] Ninguna meta exige que un porcentaje dado de equipos adopte una práctica.

## Prompts de IA

**Redacta un objetivo y un indicador para un cambio.**

```text
Planeamos introducir [change] para [teams] en [type of organization]. Redacta un
objetivo de un párrafo en lenguaje llano (el problema, quién lo siente, el
resultado que debe mejorar), un indicador con una línea base que registrar
ahora, una forma de comparar con equipos similares que no cambian y señales de
que la práctica se ha vuelto un ritual sin propósito. No inventes evidencia.
Enumera tus supuestos y las preguntas para los equipos afectados.
```

**Cuenta y secuencia la carga de cambio.**

```text
Aquí hay una lista de iniciativas que pedirán a [team or group] cambiar su forma
de trabajar en el próximo [period]: [paste with sponsors, size, and dates].
Cuenta la carga por equipo, identifica conflictos y dependencias y propón una
secuencia que deje espacio para el trabajo y para un ritmo sostenible. Sugiere
cuáles podrían combinarse, retrasarse o abandonarse. No supongas que podemos
hacerlo todo. Enumera tus supuestos.
```

**Diseña un piloto con una comparación.**

```text
Diseña un piloto de [change] con [number] equipos dispuestos y un grupo de
comparación de [number] equipos similares. Propón las medidas de resultado y las
líneas base, la duración (incluido el tiempo para que se desvanezca la
novedad), cómo elegir de antemano el grupo de comparación, qué más podría
confundir el resultado y qué nos haría escalar, adaptar o detener. No afirmes
resultados de otras organizaciones. Enumera tus supuestos.
```

**Comprueba si hay culto al cargamento.**

```text
Aquí hay una práctica que siguen nuestros equipos: [describe, with its
artifacts and meetings]. Hazme diez preguntas que pueda plantear a los miembros
del equipo para ver si entienden el propósito, saben nombrar el resultado que
debe mejorar y la adaptarían a su contexto. Añade señales en los artefactos que
sugieran que la práctica se representa de cara a la galería. No juzgues a
individuos. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de adopción o de cambio.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de adopción mide el comportamiento y el resultado, con su vector de manipulación y su barrera de protección.

## Puntos clave

- Juzga un cambio por su resultado frente a una comparación, no por la difusión de sus rituales.
- Escribe el objetivo y el indicador antes de la práctica, y pon a prueba si la gente puede explicarlo.
- Implica continuamente a las personas afectadas, y trata la resistencia como información.
- Prefiere la adopción voluntaria, deja que las prácticas evolucionen y haz seguimiento de las reversiones.
- Cuenta la carga de cambio de cada equipo, y mantenla dentro de un ritmo sostenible.
- Informa con honestidad, incluido lo que no funcionó, y retira las prácticas que ya no sirven.

## Referencias y lecturas complementarias

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Cargo cult](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Organizational change](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Organizational culture](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Change fatigue](https://en.wikipedia.org/wiki/Change_fatigue).
