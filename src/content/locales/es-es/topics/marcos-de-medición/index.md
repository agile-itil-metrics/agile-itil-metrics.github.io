# Marcos de medición

**Un marco de medición es una manera de decidir qué números merecen un lugar en la página, y los mejores empiezan todos por una meta y una pregunta, así que elige el marco más ligero que mantenga cada métrica atada a una decisión.**

## Resumen y motivación

Un equipo que quiere medir su trabajo se topa pronto con un problema: hay miles de números posibles y ninguna regla para elegir entre ellos. Un marco de medición aporta la regla. Nombra un punto de partida (una meta, una estrategia, un puñado de condiciones críticas) y describe cómo llegar desde ese punto a un conjunto pequeño de medidas que la gente leerá y sobre las que actuará. Los marcos difieren en vocabulario, pero comparten un objetivo: mantener cada número conectado con una razón para tenerlo.

Este tema cubre cinco ideas que aparecen en casi toda organización que presta servicios. La primera es el enfoque Meta-Pregunta-Métrica (GQM, por sus siglas en inglés), desarrollado por el investigador de ingeniería de software [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) y sus colegas. Parte de una meta, formula las preguntas que mostrarían si la meta se está cumpliendo y solo entonces elige métricas. La segunda son los [objetivos y resultados clave](https://en.wikipedia.org/wiki/OKR) (OKR), un método de fijación de metas popularizado en Intel por Andrew Grove y más tarde en Google por John Doerr. Un objetivo dice adónde quiere llegar un equipo, y un puñado de resultados clave dicen cómo sabrá que llegó. La tercera es el [cuadro de mando integral](https://en.wikipedia.org/wiki/Balanced_scorecard), presentado por Robert Kaplan y David Norton en 1992, que pide a las organizaciones mirar juntos los resultados financieros, los clientes, los procesos internos y el aprendizaje y crecimiento, para que ninguna vista domine.

La cuarta y la quinta ideas son más antiguas y más llanas. Un [factor crítico de éxito](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) es una condición que debe cumplirse para alcanzar una meta, y un [indicador clave de desempeño](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) es una medida de lo bien que se sostiene esa condición. ITIL, el marco de gestión de servicios de TI (ITSM) publicado por Axelos y más tarde por PeopleCert, usa exactamente este emparejamiento. En ITIL 4 (la versión de uso generalizado a octubre de 2026), la guía sobre medición e informes y sobre mejora continua indica a los profesionales que definan CSF para un servicio o una práctica y luego elijan KPI que muestren el avance frente a ellos. El enfoque más amplio de [ITIL](https://en.wikipedia.org/wiki/ITIL) se resume aquí, no se reproduce.

Las visiones ágil y de ITIL se encuentran de forma provechosa en este terreno. La práctica ágil favorece ciclos cortos de aprendizaje: un equipo enuncia una hipótesis, prueba algo, inspecciona el resultado y ajusta. La práctica de ITIL favorece servicios definidos, niveles de servicio acordados y un proceso gestionado de mejora. Un marco como GQM encaja con el hábito ágil de preguntarse qué quiere aprender el equipo. Un cuadro de mando integral encaja con la necesidad de ITIL de mostrar a los líderes una imagen completa de la salud del servicio. Los OKR están entre ambos, porque se revisan en ciclos cortos pero se escriben en el lenguaje de resultados que los órganos de gobernanza entienden.

Tres términos se repiten en este tema. Una **meta** es un enunciado de un resultado buscado para una audiencia nombrada. Una **pregunta** es algo que necesitarías saber para decir si la meta se está cumpliendo. Una **métrica** es una forma definida de contar o cronometrar algo que ayuda a responder una pregunta. Los marcos difieren en cómo tratan el tercer término, pero todos insisten en que va al final, después de la meta y de la pregunta. Este orden es la mejor protección contra el fallo descrito por la ley de Goodhart (véase el tema 1.2, Ley de Goodhart y psicología de las métricas), en el que un número sustituye al propósito para el que fue elegido.

Ningún marco corrige una mala elección de meta, y ninguno elimina la necesidad de barreras de protección. Trata un marco como un andamio para una conversación y espera cambiarlo a medida que cambia el trabajo. Los KPI en particular pueden convertirse en [métricas de vanidad](https://en.wikipedia.org/wiki/Vanity_metric), recuentos que solo suben y nunca informan una decisión, como el total de tickets atendidos. Las razones más amplias para medir se exponen en otro lugar (véase el tema 1.1, Por qué medir ITIL ágil).

### Cómo difieren los marcos

Los marcos responden a preguntas ligeramente distintas, y es común mezclarlos. Usa la tabla siguiente como mapa.

| Marco | Punto de partida | Producto típico | Mejor uso | Horizonte típico |
| --- | --- | --- | --- | --- |
| Meta-Pregunta-Métrica | Una meta específica para un producto, proceso o servicio | Un árbol de metas, preguntas y métricas | Diseñar un programa de medición para un equipo o servicio | De semanas a meses |
| OKR | Un objetivo ambicioso para el próximo periodo | Unos pocos objetivos, cada uno con resultados clave medibles | Alinear a los equipos en torno a resultados y concentrar el esfuerzo | Trimestre |
| Cuadro de mando integral | La estrategia de una organización | Objetivos y medidas en cuatro perspectivas | Mostrar a los líderes una visión completa y vincular la estrategia con las operaciones | Año |
| CSF y KPI | Un servicio, una práctica o una meta | Unas pocas condiciones que deben cumplirse, cada una con indicadores | Operar una práctica definida de ITIL e informar de su salud | Continuo, revisado con regularidad |


## Principios clave

- **Parte de la meta, luego la pregunta, luego la métrica.** Una métrica elegida primero no tiene forma de juzgarse útil.
- **Haz explícitos la audiencia y la decisión.** Toda meta nombra a quién beneficia, y toda métrica nombra quién actuará sobre ella.
- **Mantén el conjunto pequeño.** Pocas medidas leídas y en las que se confía superan a una lista larga que solo se ojea.
- **Equilibra la vista.** Empareja velocidad con calidad, costo con experiencia y producción a corto plazo con aprendizaje a largo plazo, para que ningún marco premie una a expensas de otra.
- **Trata las metas como hipótesis.** Una meta y sus números son una apuesta que puede equivocarse, así que revísalos con un calendario y cámbialos con un motivo registrado.
- **Usa los marcos para describir equipos y servicios, nunca para clasificar personas.** Los cuadros de mando, los resultados clave y los KPI pertenecen a un equipo o a un servicio.
- **Combina marcos a propósito.** Di qué marco posee cada decisión, para que el mismo número no se defina de tres maneras.

## Definiciones de métricas

Las métricas siguientes miden la salud de un marco en uso, no la salud de un servicio. Muestran si las metas y las métricas siguen conectadas, y se aplican sea cual sea el marco que elija un equipo. Los recuentos son por equipo o servicio, nunca por persona.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trazabilidad de metas | Proporción de las métricas informadas que se remontan a una meta y una pregunta escritas | métricas con meta y pregunta registradas / métricas informadas | porcentaje | Registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) | Medición e informes; mejora continua | Meta de entrega; meta de producto | Trimestral |
| Distribución de puntuaciones de resultados clave | Dispersión de las puntuaciones de fin de periodo de los resultados clave, mostrada como la proporción en cada banda | resultados clave en cada banda de puntuación (por ejemplo 0,0 a 0,3, 0,4 a 0,6, 0,7 a 1,0) / resultados clave puntuados en el periodo; excluye los resultados clave descartados con un motivo registrado | porcentaje por banda | Herramienta de seguimiento de OKR o documento del equipo | Mejora continua; gestión de niveles de servicio | Planificación trimestral; revisión | Trimestral |
| Cobertura de perspectivas | Proporción de las cuatro perspectivas del cuadro de mando integral que tienen al menos una medida con un valor actual | perspectivas con una medida informada en el último periodo / cuatro | porcentaje | Cuadro de mando o panel | Medición e informes; gobernanza del sistema de valor del servicio | Revisión con las partes interesadas (vistas de cliente y de aprendizaje) | Trimestral |
| Antigüedad de la revisión de indicadores | Tiempo transcurrido desde la última revisión de la definición y la meta de cada KPI | fecha de revisión menos la fecha de la última revisión; el reloj arranca en la última revisión registrada y se detiene en la fecha del informe; informa la mediana y la más antigua | días | Historial de cambios del registro de métricas | Mejora continua; medición e informes | Acciones de la retrospectiva | Trimestral |
| Cobertura de CSF a KPI | Proporción de factores críticos de éxito con al menos un KPI que se informa actualmente | CSF con un KPI vigente / CSF definidos para el servicio o la práctica | porcentaje | Documentación de la práctica o del servicio; registro de métricas | El enfoque de CSF y KPI de las guías de práctica de ITIL | Definición de terminado; acuerdos de trabajo | Trimestral |

La trazabilidad de metas cuenta una métrica como trazada solo si están escritas tanto la meta como la pregunta y se nombra la audiencia; una meta sola no basta. La distribución de puntuaciones de resultados clave debe leerse como una dispersión, no como un promedio, porque un promedio oculta a un equipo que se quedó corto a propósito en todo y a un equipo que fracasó en todo. La antigüedad de la revisión de indicadores excluye las métricas retiradas en el periodo.

## Recomendaciones

### Elige y combina marcos

**1. Elige el marco más pequeño que cumpla la tarea.** Un único equipo de servicio con un problema de mejora rara vez necesita un cuadro de mando integral completo. GQM suele bastar, porque tiene un punto de parada claro: un árbol de una meta, unas pocas preguntas y unas pocas métricas. Añade estructura solo cuando una decisión la necesite.

**2. Escribe las metas en tres partes: propósito, sujeto y punto de vista.** Las metas de GQM se plantean tradicionalmente como mejorar una cualidad indicada de un sujeto indicado desde un punto de vista indicado, por ejemplo mejorar la claridad de las actualizaciones de incidentes para las personas que dependen del centro de servicios. La estructura obliga a decir a quién beneficia. Si una meta no tiene punto de vista, probablemente es un eslogan.

**3. Haz preguntas que una persona pueda responder con una historia breve.** "¿Con qué rapidez reciben respuesta los usuarios tras informar un problema?" es una buena pregunta, porque puedes imaginar una respuesta y la evidencia que la respalda. "¿Cuál es nuestro desempeño?" no lo es. Apunta a entre tres y cinco preguntas por meta, y espera que algunas se respondan con entrevistas o muestras, no con un número.

**4. Elige las métricas al final, y elige más de una.** Para cada pregunta, nombra las métricas candidatas, la fuente de datos y el vector de manipulación (véase el tema 1.5, Fuentes de datos e instrumentación). Incluye al menos una métrica en tensión con las demás, como el tiempo de respuesta junto a la tasa de reaperturas. Si una pregunta no tiene una métrica viable, dilo y planifica una comprobación cualitativa.

**5. Decide qué marco posee cada decisión.** Una disposición habitual es que el cuadro de mando integral o un equivalente contenga las pocas medidas que revisan los líderes, que los OKR contengan las mejoras que un equipo ha elegido este trimestre y que los CSF y KPI describan la salud en marcha de una práctica. Escribe esta disposición en el registro de métricas para que cada número tenga una única definición y un único responsable.

### Usa bien los OKR

**6. Escribe los objetivos como resultados y los resultados clave como evidencia.** Un objetivo como "Los usuarios resuelven sus problemas sin tener que perseguirnos" es un resultado. Un resultado clave como "la mediana del tiempo hasta una primera actualización útil baja de [current value] a [target value]" es evidencia. Los resultados clave que se leen como tareas ("lanzar un portal nuevo") son actividades, no resultados. Si no puedes decir qué cambiaría para un usuario, el resultado clave no está terminado.

**7. Mantén los OKR a nivel de equipo y de servicio.** Fijarlos para individuos tiende a convertirlos en listas de tareas y en insumos de la evaluación del desempeño, e invita a la manipulación que predice la ley de Goodhart. Deja que un equipo escriba sus propios resultados clave a la vista de todos, y deja que los equipos vean los de los demás. Evita las cascadas en las que cada nivel debe reformular el nivel superior.

**8. Trata la puntuación como una conversación, no como una nota.** Los equipos que consideran una puntuación perfecta como la meta escriben resultados clave tímidos. Una distribución de puntuaciones que se agrupa arriba sugiere que se quedaron cortos a propósito, y una que se agrupa abajo sugiere que las metas eran fantasía. Revisa la dispersión cada trimestre y pregunta qué aprendió el equipo de cada fallo.

### Usa bien los cuadros de mando, los CSF y los KPI

**9. Define los CSF antes que los KPI.** Un factor crítico de éxito es un enunciado de lo que debe ser cierto, como "los usuarios pueden encontrar y usar el artículo de autoservicio correcto". Un KPI muestra entonces si es cierto. Empezar por el KPI invita a contar lo que es fácil de contar. Pregunta por cada CSF: "si esto dejara de ser cierto, ¿con qué rapidez lo notaríamos y a partir de qué?" La respuesta es el KPI.

**10. Usa las perspectivas del cuadro de mando para evitar una vista unilateral.** Las cuatro perspectivas clásicas son financiera, de cliente, de procesos internos y de aprendizaje y crecimiento. Las organizaciones de servicio suelen renombrarlas, por ejemplo costo, experiencia del usuario, salud operativa y capacidad. Lo que importa es que cada perspectiva tenga al menos una medida con un valor actual y que un descenso en una se lea junto a las demás (véase el tema 6.5, Realización de valor y resultados de negocio).

**11. Vincula la estrategia con las medidas mediante un mapa sencillo.** Un [mapa estratégico](https://en.wikipedia.org/wiki/Strategy_map) dibuja flechas desde la capacidad al proceso, al cliente y a los resultados financieros. Es útil para conversar y malo como calculadora. Dibújalo, discute las flechas y luego elige unas pocas medidas. No intentes que el diagrama sea cuantitativamente exacto.

**12. Revisa los marcos según un calendario.** Fija una revisión trimestral en la que el equipo pregunte, de cada meta, resultado clave y KPI, si sigue importando y si sigue moviendo a las personas hacia la acción correcta. Retira lo que ya no sirve y registra el motivo. Las métricas que sobreviven a sus metas se convierten en métricas de vanidad.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Trazabilidad de metas | Escribir una meta y una pregunta después de que la métrica ya exista, para que el registro parezca completo; metas vagas que justifican cualquier métrica | Muestrea cinco entradas cada trimestre y pregunta si la pregunta podría haber llevado a una métrica distinta; comprueba que se nombren la audiencia y la decisión |
| Distribución de puntuaciones de resultados clave | Escribir resultados clave fáciles para que las puntuaciones se agrupen cerca de 1,0; repuntuar con generosidad; descartar los resultados clave que van mal sin registrar por qué | Recuento de resultados clave descartados con sus motivos; comparar los resultados clave con los resultados del periodo anterior; revisar la ambición mediana con la dirección |
| Cobertura de perspectivas | Añadir una medida simbólica a una perspectiva para que cuente como cubierta; elegir medidas que no pueden moverse | Comprobar que cada medida de perspectiva ha cambiado de valor en el último año y tiene una decisión escrita asociada |
| Antigüedad de la revisión de indicadores | Registrar una revisión sin leer el indicador; cambiar solo la fecha | Exigir un resultado escrito (conservado, cambiado, retirado) con cada revisión y muestrear el registro |
| Cobertura de CSF a KPI | Asignar un KPI que no guarda relación con el CSF para alcanzar la cobertura completa; elegir un KPI que no puede revelar un fallo | Preguntar, para cada par, qué lectura mostraría que el CSF está fallando; buscar KPI que nunca han estado en rojo |

Una lectura sana es aquella en la que las metas cambian cuando cambia el mundo, algunos resultados clave se incumplen por motivos declarados y el número de métricas informadas baja o se mantiene en lugar de crecer. Si todo está en verde, las puntuaciones se agrupan arriba y nadie puede nombrar una métrica que se haya retirado este año, el marco se ha convertido en decoración.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Meta-Pregunta-Métrica | Ata cada métrica a una razón; fácil de explicar; funciona a escala de equipo | Necesita una sesión facilitada; puede quedarse en un ejercicio de papel; dice poco sobre la prioridad entre metas |
| OKR | Concentra un trimestre en unos pocos resultados; visible entre equipos; encaja con ciclos de planificación cortos | Es fácil escribir resultados clave como tareas; las puntuaciones pueden manipularse; los OKR individuales se confunden con la evaluación del desempeño |
| Cuadro de mando integral | Da a los líderes una visión completa; vincula la estrategia con las operaciones | Pesado de mantener; las perspectivas pueden convertirse en casillas que rellenar; lento en reflejar el cambio |
| CSF y KPI | Familiares en la práctica de ITIL; buen ajuste para informar sobre un servicio en marcha | Es fácil derivar hacia KPI de vanidad; los indicadores se anquilosan sin revisión |
| Ningún marco | Ligero y rápido para un equipo muy pequeño | Las métricas se acumulan sin razón; se repiten las discusiones sobre qué medir |
| Varios marcos a la vez | Cada decisión recibe la herramienta que le encaja | Definiciones duplicadas; confusión sobre qué número es el oficial |

Elige el peso del marco según lo que esté en juego. Un servicio interno pequeño necesita una meta, tres preguntas y unas pocas métricas recogidas en una página. Un servicio prestado bajo contrato puede necesitar KPI definidos al nivel de un acuerdo de nivel de servicio (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## Preguntas para conversar con tu equipo

**1. ¿A qué meta sirve cada una de nuestras métricas informadas, y quién lo notaría si dejáramos de informarla?**
Enumera las métricas en un tablero y escribe la meta junto a cada una. Donde falte la meta, pregunta quién pidió la métrica y por qué. Algunas resultarán ser heredadas de un proyecto anterior y podrán retirarse. El facilitador debe tratar una métrica sin meta como un descubrimiento normal, no como un fallo.

**2. Si solo pudiéramos responder tres preguntas sobre nuestro servicio, ¿cuáles serían?**
Esto obliga a ordenar las preguntas antes que las métricas. Deja que cada persona escriba tres y luego agrúpalas. Compara el grupo con el panel que el equipo tiene actualmente. Las diferencias entre ambos suelen ser el producto más útil de la sesión.

**3. ¿Cuáles de nuestros resultados clave describen un resultado para los usuarios y cuáles describen trabajo que planeamos hacer?**
Lee cada resultado clave en voz alta y pregunta si un usuario lo notaría si se lograra. Si la respuesta es no, reescríbelo como un resultado o muévelo al plan. El facilitador puede mencionar que las tareas están bien, pero pertenecen a un backlog. Termina acordando un resultado clave que reescribir este trimestre.

**4. ¿Dónde discrepan nuestras cuatro perspectivas del cuadro de mando, y qué nos dice eso?**
Pide al grupo que busque un periodo reciente en el que una perspectiva mejoró mientras otra empeoraba, como cuando el costo bajaba y la experiencia caía. Hablad de la causa y de si alguien lo vio venir. Esto crea el hábito de leer las medidas en conjunto. Anota cualquier perspectiva que no tenga medida y decide si añadir una o decir con claridad que no está en el alcance.

**5. Para cada factor crítico de éxito, ¿qué lectura nos diría que está fallando?**
Elige dos CSF y nombra el KPI, y luego pregunta qué valor desencadenaría una conversación. Si el equipo no sabe decirlo, el KPI no cumple su función. Busca KPI que nunca han cambiado de color, lo que suele indicar un umbral demasiado laxo. El facilitador debe preguntar cuál sería el vector de manipulación del KPI.

**6. ¿Qué marco debería poseer cada decisión, y dónde definimos hoy el mismo número dos veces?**
Sigue una métrica, como el tiempo de resolución de incidentes, a través de todos los informes en los que aparece. Compara las definiciones. Las diferencias en los relojes o en las exclusiones son comunes y a menudo explican las discusiones entre equipos. Acordad un responsable y una definición, y registradlos en el registro.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega conocen los marcos sobre todo como OKR y, con suerte, como GQM. Un equipo obtiene más valor cuando escribe sus propias metas y resultados clave, ligados a lo que necesitan sus usuarios, y cuando mantiene las medidas de trabajo separadas de las que ven los líderes. Un equipo debe desconfiar de los resultados clave que premian la producción, como los puntos de historia o las versiones, porque invitan a los comportamientos que los marcos debían evitar (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

### Equipos de servicio y operaciones

Los equipos de operaciones conocen los marcos sobre todo como CSF y KPI dentro de las prácticas de ITIL, además de las metas de nivel de servicio acordadas con los clientes. Les conviene definir el CSF en lenguaje llano antes de elegir el KPI, informar percentiles en las medidas de tiempo y mantener las medidas de fiabilidad, como los indicadores y objetivos de nivel de servicio, junto a la experiencia de los usuarios (véase el tema 5.2, SLI, SLO y presupuestos de errores). También deben resistir la tentación de conservar KPI fijados hace años que ya no guardan relación con el modo en que se usa el servicio.

### Liderazgo y gobernanza

Los líderes eligen los marcos, normalmente al pedir un cuadro de mando o unos OKR, y lo que hacen con los números decide cómo se comportan los marcos. Un líder que castiga un resultado clave incumplido enseña a los equipos a escribir resultados fáciles. Un líder que pregunta qué aprendió el equipo les enseña a escribir resultados honestos. Los órganos de gobernanza deben esperar un registro de métricas, un número reducido de medidas informadas y una revisión periódica de si el propio marco funciona (véase el tema 11.4, Modelo de madurez para programas de métricas).

### Clientes y usuarios

Los clientes y usuarios rara vez ven el marco, solo sus efectos. Uno bien diseñado se nota en servicios que mejoran en el sentido que pidieron y en informes honestos sobre lo que no ha mejorado. Uno deficiente se nota en informes en verde que no coinciden con la experiencia. Incluye un punto de vista del usuario en cada meta y deja que la opinión de los usuarios figure en la perspectiva de cliente del cuadro de mando junto a los números operativos (véase el tema 6.2, Acuerdos de nivel de experiencia).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio opera una plataforma de atención al cliente y un portal de autoservicio con varios equipos de producto y un pequeño grupo de operaciones de servicio. Todos los números son ilustrativos.

La dirección pide un cuadro de mando integral y, por separado, OKR trimestrales. En un trimestre el equipo tiene 31 medidas informadas, y nadie sabe decir por qué existe la mitad. El responsable del servicio dirige una sesión de media jornada con GQM sobre una meta: "Mejorar la claridad de la ayuda para los clientes que no pueden completar un pago, desde el punto de vista del cliente".

La sesión produce cuatro preguntas. ¿Encuentran los clientes el artículo de ayuda correcto? ¿Necesitan contactar con soporte después de leerlo? ¿Cuánto tarda en resolverse un problema de pago cuando contactan con soporte? ¿Sienten que la respuesta fue clara? De las 31 medidas, nueve se corresponden con estas preguntas. Hacen falta tres nuevas: éxito de la búsqueda de artículos, tasa de contacto tras ver un artículo y una encuesta de una pregunta tras la resolución. Las 22 restantes se marcan para su retiro, con el acuerdo del responsable.

El OKR del trimestre se escribe como un resultado. El objetivo es "Los clientes resuelven los problemas de pago sin tener que perseguirnos". Los tres resultados clave son la mediana y el percentil 90 del tiempo de resolución, la tasa de contacto tras ver artículos y el resultado de la encuesta sobre la claridad. El cuadro de mando mantiene la perspectiva de cliente apuntando a las mismas medidas, de modo que haya una definición, no dos.

A mitad del trimestre aparece un riesgo de manipulación. La tasa de contacto tras ver artículos cae bruscamente, lo que parece un éxito. Un revisor muestrea 20 sesiones y descubre que un rediseño movió el enlace "contáctanos" tres pantallas más adentro. Menos personas llegan a soporte, y la encuesta muestra puntuaciones de claridad más bajas. El equipo añade el abandono de búsqueda y los comentarios de la encuesta como barreras de protección y restaura el enlace.

Al final del trimestre las puntuaciones de los resultados clave son 0,6, 0,8 y 0,5, que el equipo presenta tal cual. La dirección pregunta qué aprendió el equipo, no por qué las puntuaciones no fueron más altas. La decisión, registrada en el registro de decisiones, es mantener el objetivo un segundo trimestre, sustituir la tasa de contacto por la proporción de clientes que resuelven el problema en la primera visita y retirar seis medidas más del cuadro de mando.

## Perspectiva por sector

**Startup.** Una startup suele necesitar una meta, tres preguntas y un puñado de métricas, recogidas en una sola página. Los OKR son comunes y funcionan bien cuando los escribe el equipo que hará el trabajo. Resiste la tentación de añadir un cuadro de mando hasta que lo exijan inversores o clientes.

**Pequeña empresa.** Los recursos son escasos, así que elige un solo marco y úsalo con ligereza. Los CSF y KPI escritos para las dos o tres cosas que el negocio no puede permitirse hacer mal suelen bastar. Prefiere la opinión directa de los clientes a puntuaciones elaboradas.

**Gran empresa.** Suelen coexistir varios marcos, lo que convierte la propiedad de las definiciones en el principal desafío. Mantén un registro, designa qué marco contiene cada número y realiza una revisión anual de todo el conjunto. Cuidado con las cascadas que obligan a cada equipo a reformular con sus palabras los objetivos corporativos.

**Gobierno y sector público.** Los informes obligatorios y los niveles de servicio contractuales actúan como KPI fijos. Tómalos como dados y usa GQM o OKR para el trabajo de mejora a su alrededor. La rendición pública de cuentas eleva lo que se arriesga con un número engañoso, así que publica las definiciones y sé abierto sobre los cambios (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de un marco es sobre todo tiempo: una sesión facilitada para diseñar las medidas, una breve revisión trimestral y el mantenimiento de un registro. Hay software para OKR o cuadros de mando, pero a pequeña escala suele bastar un documento o una hoja de cálculo. El costo mayor es la atención de la dirección, ya que un marco que los líderes no usan se convierte en informes por informar.

El retorno viene de medidas menos numerosas y mejores. Los equipos que pueden decir por qué existe cada número dedican menos tiempo a producir informes que nadie lee, discuten menos sobre definiciones y notan antes cuándo una medida ha dejado de informar decisiones. En lugar de citar una cifra, mide tus propias líneas base: el número de métricas informadas, la proporción con una meta registrada y el tiempo dedicado a preparar los informes recurrentes, antes y después de adoptar el marco. Un tratamiento más completo del retorno de la inversión está en otro lugar (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Métricas antes que metas.** Partir de los datos que tienes produce un panel de lo que es fácil de contar. Escribe primero la meta y la pregunta, y luego mira qué datos encajan.
- **OKR como listas de tareas.** Los resultados clave que nombran actividades hacen que cada trimestre parezca ocupado y no dicen nada sobre los resultados. Reescribe cada uno como evidencia que un usuario notaría.
- **OKR y cuadros de mando como metas individuales.** Invitan a la manipulación y desalientan la ayuda entre personas. Mantenlos a nivel de equipo y de servicio.
- **Un cuadro de mando con perspectivas vacías o simbólicas.** Rellenar cada casilla con algo no es lo mismo que ver el conjunto. Exige un valor actual y una decisión para cada una.
- **KPI que nunca cambian.** Si un indicador lleva años en verde, su umbral probablemente es erróneo o no mide nada que pueda fallar. Pregunta qué lectura mostraría un problema y luego reajústalo.
- **Marcos apilados sin propietario.** Tres marcos que definen la misma medida de tres maneras crean discusiones. Nombra un responsable y una única definición.
- **Premiar la puntuación.** Si una puntuación perfecta de OKR recibe elogios o paga, los equipos escribirán resultados clave fáciles. Premia el aprendizaje honesto y las buenas preguntas.
- **El marco como ceremonia.** Un día de talleres que produce un póster plastificado no cambia nada. Guarda el resultado en el registro y revísalo según un calendario.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Metas y preguntas | Métricas elegidas porque existen los datos | Algunos equipos escriben las metas antes que las métricas | Un formato común de meta y pregunta; toda métrica informada se remonta a uno | La trazabilidad se revisa y las brechas conducen a trabajo financiado | Las metas se redactan con clientes y proveedores y se revisan a medida que cambian las condiciones |
| Uso del marco | Ad hoc; sin marco declarado | Los equipos adoptan marcos distintos con vocabulario distinto | Una disposición escrita dice qué marco posee cada decisión | Se revisan los resultados del marco y se descartan las partes sin uso | Los marcos se alinean entre equipos y proveedores con un único conjunto de definiciones |
| Indicadores y puntuación | KPI fijados una vez y nunca revisados | Algunos KPI tienen responsables y umbrales | Los KPI y los resultados clave tienen responsables, definiciones y barreras de protección | Las puntuaciones y los indicadores se siguen en el tiempo y se revisan cada trimestre en busca de manipulación | Los indicadores se retiran y se sustituyen de forma rutinaria, con cambios ligados a resultados |
| Uso en las decisiones | Los informes se producen y se ignoran | Los líderes piden números cuando algo sale mal | Las revisiones registran decisiones en las que influyeron los números | Las preguntas de aprendizaje son estándar; los objetivos incumplidos se discuten sin culpar | La planificación de mejoras entre equipos usa las mismas metas y medidas compartidas |

## Lista de verificación

- [ ] Toda métrica informada se remonta a una meta escrita, una pregunta y una audiencia nombrada.
- [ ] Un registro de métricas anota qué marco posee cada métrica y su única definición.
- [ ] Las metas se escriben con un propósito, un sujeto y un punto de vista.
- [ ] Cada resultado clave describe un resultado que alguien notaría, no una tarea.
- [ ] Los OKR, las medidas del cuadro de mando y los KPI pertenecen a equipos o servicios, no a individuos.
- [ ] Cada factor crítico de éxito tiene al menos un KPI vigente y una lectura declarada que mostraría el fallo.
- [ ] Cada perspectiva del cuadro de mando tiene una medida con un valor actual.
- [ ] Toda métrica tiene un vector de manipulación y una barrera de protección con nombre.
- [ ] Una revisión trimestral pregunta si cada meta, resultado clave y KPI sigue importando.
- [ ] Al menos una métrica o indicador se ha retirado o rediseñado en el último año, con el motivo registrado.

## Prompts de IA

**Convierte una meta en preguntas y métricas candidatas.**

```text
Nuestro equipo es [team name], que gestiona [type of service or delivery work]
para [audience]. Nuestra meta es: [goal stated as purpose, subject, and
viewpoint]. Usando el enfoque Meta-Pregunta-Métrica, propón de tres a cinco
preguntas que mostrarían si estamos cumpliendo esta meta. Para cada pregunta,
sugiere métricas candidatas que podríamos definir, el tipo de fuente de datos
que necesitaríamos, el vector de manipulación probable y una barrera de
protección. No inventes valores de referencia ni estadísticas. Enumera tus
supuestos y todo lo que no pudiste determinar con lo que te di.
```

**Revisa borradores de OKR.**

```text
Estos son nuestros borradores de objetivos y resultados clave para [period]:
[paste OKRs]. Nuestro equipo es [team name] y nuestros usuarios son [audience].
Revisa cada resultado clave y dime si describe un resultado o una actividad, si
podría cumplirse sin ayudar a los usuarios y qué barrera de protección lo
mostraría. Sugiere reescrituras cuando haga falta, usando [placeholders] para
cualquier número que debamos aportar nosotros. No inventes metas ni valores de
referencia. Enumera tus supuestos y las preguntas que debería responder.
```

**Asigna factores críticos de éxito a KPI.**

```text
Para la práctica de ITIL [practice name] de nuestra organización, que atiende a
[audience], estos son los factores críticos de éxito que hemos redactado: [list
CSFs]. Propón KPI para cada uno que puedan recogerse de [data sources]. Para
cada KPI, indica dónde arranca y se detiene el reloj si es una medida de
tiempo, qué lectura mostraría que el factor está fallando y cómo podría
manipularse. No indiques valores de referencia ni afirmaciones de
cumplimiento. Enumera tus supuestos.
```

**Audita un cuadro de mando en busca de equilibrio.**

```text
Nuestro cuadro de mando tiene estas medidas, agrupadas por perspectiva: [paste
measures by perspective]. Somos [type of organization]. Identifica las
perspectivas escasas, las medidas que parecen duplicarse entre sí y las
medidas que podrían moverse de un modo que oculte un problema en otra
perspectiva. Sugiere barreras de protección y medidas que retirar. No inventes
cifras ni fuentes. Enumera tus supuestos y lo que no pudiste juzgar con los
datos que te di.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar qué tema posee una métrica y su barrera de protección emparejada antes de colocarla en un marco.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que la entrada de una métrica basada en un marco lleva su definición, su vector de manipulación y su barrera de protección.

## Puntos clave

- Un marco decide qué métricas se ganan un lugar, y la regla común es partir de una meta y una pregunta, y luego elegir la métrica.
- Meta-Pregunta-Métrica sirve para diseñar medidas de un equipo, los OKR para concentrar un trimestre, los cuadros de mando para vistas completas de liderazgo, y los CSF con KPI para operar una práctica de ITIL.
- Usa el marco más ligero que funcione y di cuál posee cada número.
- Todo marco puede manipularse, así que empareja cada métrica con una barrera de protección y revisa el conjunto según un calendario.
- Mantén los marcos a nivel de equipo y de servicio, nunca como metas individuales.
- Retira las metas, los resultados clave y los indicadores que ya no informan decisiones.

## Referencias y lecturas complementarias

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
