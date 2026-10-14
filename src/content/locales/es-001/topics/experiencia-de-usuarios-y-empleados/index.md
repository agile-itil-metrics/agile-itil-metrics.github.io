# Experiencia de usuarios y empleados

**Las personas hacen su mejor trabajo cuando las herramientas, los dispositivos y el soporte que las rodean simplemente funcionan, así que mide la fricción que encuentran tus colegas, trata las respuestas como un motivo para quitar obstáculos y no conviertas nunca esos datos en vigilancia ni en una clasificación de personas.**

## Resumen y motivación

El quinto principio detrás del Manifiesto Ágil dice que hay que construir los proyectos en torno a individuos motivados, darles el entorno y el apoyo que necesitan y confiar en que harán el trabajo. Para las personas que usan TI interna, el entorno es el portátil, el inicio de sesión, las herramientas de colaboración, el proceso de acceso y el centro de servicios. Cuando estos son lentos o confusos, las personas motivadas pierden tiempo y buena voluntad, e inventan soluciones provisionales. Medir ese entorno es, por tanto, una forma de apoyar a las personas. No es una forma de vigilarlas.

La [experiencia del empleado](https://en.wikipedia.org/wiki/Employee_experience_management) es la suma de las interacciones de un empleado con su lugar de trabajo a lo largo de su tiempo en la organización. La parte que moldea TI se llama a veces experiencia digital del empleado, y el [lugar de trabajo digital](https://en.wikipedia.org/wiki/Digital_workplace) es el conjunto de tecnología que la gente usa para trabajar. Los temas anteriores de esta parte cubrieron las encuestas de satisfacción (véase el tema 6.1, Métricas de satisfacción del cliente) y los acuerdos de nivel de experiencia (véase el tema 6.2, Acuerdos de nivel de experiencia). Este tema vuelve esa misma atención hacia dentro, hacia los colegas que usan los servicios de TI todos los días, incluidos los ingenieros y operadores que los construyen y los operan.

Los usuarios internos difieren de los clientes externos en cuatro aspectos que importan para la medición.

- **No pueden irse.** Un empleado no tiene un competidor al que cambiarse, así que el silencio no es satisfacción. Puede significar resignación, o una solución provisional.
- **Son identificables.** En una empresa de unos cientos de personas, un pequeño grupo de respuestas de una encuesta puede señalar a una persona. El diseño de la privacidad va primero.
- **También son colegas.** Los malos datos de experiencia dañan las relaciones y la moral, y los buenos datos pueden compartirse abiertamente y actuarse en común.
- **Incluyen a los equipos de entrega y de operaciones.** Las herramientas que usan los desarrolladores y el personal del centro de servicios son parte de la experiencia, y su fricción llega a los usuarios en forma de correcciones más lentas.

Dos temas recorren este tema. El primero es la **fricción**: el esfuerzo, el retraso y la interrupción evitables que se interponen entre una persona y su trabajo. Las interrupciones y la sobrecarga mental cuestan más de lo que sugiere su tiempo de reloj. La idea de [carga cognitiva](https://en.wikipedia.org/wiki/Cognitive_load), la carga sobre la memoria de trabajo, explica por qué un formulario confuso o un reinicio forzado inesperado cuestan más que los minutos que llevan, y la idea de [flujo](https://en.wikipedia.org/wiki/Flow_(psychology)), un estado de concentración absorta, explica por qué proteger el tiempo sin interrupciones importa para el trabajo del conocimiento. El segundo tema es la **ética**: cómo aprender sobre la experiencia sin invadir la privacidad. La tecnología de [monitorización de empleados](https://en.wikipedia.org/wiki/Employee_monitoring) puede medir muchísimo, y la línea entre apoyar y vigilar es fácil de cruzar. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica aquí en forma humana: una puntuación usada para juzgar a las personas les enseña a ocultar sus problemas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Mide el entorno, no a la persona.** La unidad de análisis es un servicio, un tipo de dispositivo o un grupo, nunca un individuo.
- **Trata la fricción como el enemigo.** El tiempo perdido, la interrupción y la confusión son costos que eliminar.
- **Pregunta, observa y mide.** Combina lo que dice la gente con lo que registran los sistemas y lo que ves al observar el trabajo.
- **Haz de la privacidad un requisito de diseño.** Recoge los mínimos datos que respondan a la pregunta, agrega pronto y suprime los grupos pequeños.
- **Incluye a todos.** Las necesidades de accesibilidad, el personal remoto y por turnos y los recién llegados suelen encontrarse con la peor experiencia.
- **Protege la concentración.** Planifica cambios, actualizaciones y notificaciones en torno al trabajo de la gente.
- **Di qué recoges y por qué.** La transparencia genera la confianza de la que dependen las respuestas honestas.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de preparación el primer día | Proporción de recién llegados cuyos dispositivos, cuentas y accesos están completos y funcionando a su hora de incorporación | recién llegados con todos los elementos acordados funcionando al empezar / recién llegados del periodo | porcentaje | Solicitudes de incorporación, sistema de identidad, confirmación del recién llegado | Gestión de solicitudes de servicio; gestión del catálogo de servicios | Acuerdo de trabajo del equipo sobre la incorporación | Mensual |
| Tiempo hasta ser productivo | Tiempo transcurrido desde la fecha de incorporación hasta el punto en que un recién llegado tiene todo lo necesario para su primera tarea real | mediana y percentil 85 de días desde la fecha de incorporación hasta la confirmación del recién llegado y de su responsable | días | Seguimiento de incorporaciones; breve pregunta de confirmación | Gestión de solicitudes de servicio; mejora continua | Tiempo para que un nuevo miembro del equipo haga un primer cambio | Mensual |
| Prevalencia de soluciones provisionales | Proporción del personal encuestado que usa herramientas no aprobadas o pasos manuales para sortear un servicio oficial | encuestados que informan de una solución provisional para el servicio / encuestados válidos | porcentaje | Encuesta de pulso; informes de descubrimiento de herramientas no autorizadas | Gestión de niveles de servicio; mejora continua | Impedimentos planteados en las reuniones diarias del equipo | Trimestral |
| Minutos de interrupción forzada | Tiempo en que se interrumpe a las personas por acciones de TI planificadas, como reinicios forzados, actualizaciones e indicaciones de inicio de sesión | total de minutos de interrupción causados por acciones planificadas / usuarios activos del grupo | minutos por persona al mes | Registros de gestión de puntos finales, agregados por grupo | Habilitación de cambios; gestión de versiones y despliegues | Tiempo de trabajo sin interrupciones | Mensual |
| Tiempo de resolución de solicitudes de accesibilidad | Tiempo para resolver solicitudes relacionadas con necesidades de accesibilidad | mediana y percentil 85 de horas desde la solicitud hasta una solución confirmada que funciona | horas | Sistema de solicitudes con una etiqueta de accesibilidad | Gestión de solicitudes de servicio; gestión de incidentes | Definición de terminado inclusiva | Mensual |
| Puntuación de pulso de herramientas | Valoración de una herramienta o servicio con nombre en una pregunta breve acordada | valoración media o proporción favorable de las respuestas válidas, por herramienta | puntos de escala o porcentaje | Encuesta de pulso, con herramientas rotativas | Gestión de niveles de servicio; mejora continua | Retroalimentación de los miembros del equipo sobre sus herramientas | Trimestral |
| Cumplimiento de las salvaguardas de privacidad | Proporción de informes de experiencia que cumplen las reglas de supresión y agregación | informes que cumplen las reglas / informes publicados | porcentaje | Revisión de los informes publicados frente a las reglas de privacidad | Gestión de la seguridad de la información; medición e informes | Acuerdo de trabajo sobre el uso de datos | Trimestral |

Define el grupo y el periodo de cada medida. La preparación el primer día cuenta a un recién llegado como preparado solo cuando todos los elementos de una lista acordada funcionan, y la lista se registra en el registro de métricas. Los minutos de interrupción forzada se calculan a partir de totales de grupo, y el nivel más bajo mostrado es un grupo de al menos diez personas. El cumplimiento de las salvaguardas de privacidad se aplica al propio programa de experiencia, lo que lo convierte en una barrera de protección de las otras seis.

## Recomendaciones

### Parte de las personas y de su trabajo

**1. Recorre un día con tus colegas.** Siéntate con unas pocas personas de distintos roles, ubicaciones y turnos y obsérvalas trabajar. Anota cada espera, cada solución provisional y cada momento de confusión. Pregunta qué arreglarían primero. La observación encuentra problemas que las encuestas pasan por alto, porque la gente deja de notar la fricción con la que ha aprendido a convivir. Acordad de antemano qué registraréis y cómo lo usaréis.

**2. Traza el mapa de los momentos que importan.** Para el personal, los momentos de mayor impacto suelen ser el primer día, el fallo de un portátil, un cambio entre equipos, una solicitud de acceso y la salida de la organización. Escribe los pasos de cada uno y quién es responsable. El mapa muestra los traspasos entre equipos donde se esconde el retraso, lo que se vincula con las medidas de colaboración de una parte posterior (véase el tema 9.3, Métricas de colaboración y traspasos).

**3. Incluye a las personas de los márgenes.** El personal con necesidades de accesibilidad, los trabajadores por turnos, el personal remoto y de campo y los contratistas suelen ser invisibles en los promedios. Segmenta los resultados donde sea seguro hacerlo y revisa por separado al grupo peor atendido. Trata la accesibilidad como un requisito de primera clase. Los estándares de [accesibilidad web](https://en.wikipedia.org/wiki/Web_accessibility), como las Pautas de Accesibilidad para el Contenido Web, dan una lista de verificación concreta para las herramientas internas, y los problemas de accesibilidad son una cuestión legal y ética en muchas jurisdicciones.

### Mide con cuidado

**4. Combina tres tipos de evidencia.** Usa preguntas de pulso breves sobre herramientas y momentos con nombre, medidas del sistema como los minutos de interrupción forzada y la finalización de la incorporación, y conversaciones. Cuando dos tipos discrepan, investiga. Una herramienta con un tiempo de actividad excelente y una mala puntuación de pulso te dice algo que el tiempo de actividad no puede (véase el tema 5.3, Métricas de disponibilidad).

**5. Pregunta por una herramienta, no por TI.** "¿Cuán fácil es encontrar un documento en el sistema de archivos?" obtiene mejores respuestas que "¿Qué tal TI?" Rota las herramientas en el pulso para que a nadie se le pregunte más de una o dos veces por trimestre, y mantén estable la redacción para que las tendencias signifiquen algo.

**6. Cuenta los minutos que pierde la gente.** El tiempo perdido es más fácil de entender que una puntuación. Estímalo a partir del sistema donde puedas, por ejemplo las indicaciones de reinicio y los fallos de inicio de sesión, y pide a la gente una cifra aproximada donde no puedas. Preséntalo por persona y mes para un grupo, con el método, y evita multiplicar por el salario para obtener un número dramático salvo que también indiques los supuestos.

**7. Minimiza y agrega.** Sigue el principio de [minimización de datos](https://en.wikipedia.org/wiki/Data_minimization): recoge solo lo que necesites, consérvalo solo el tiempo que lo necesites y agrega lo antes posible. Donde los datos puedan identificar a alguien, la [seudonimización](https://en.wikipedia.org/wiki/Pseudonymization) reduce el riesgo. Reglas como la [k-anonimidad](https://en.wikipedia.org/wiki/K-anonymity), que exige que cada grupo informado contenga al menos k personas, dan una forma sencilla de suprimir las celdas pequeñas. Indica tu k en el registro.

**8. Traza una línea clara contra la vigilancia.** No uses datos de experiencia, telemetría de puntos finales ni sentimiento para evaluar a individuos, para detectar quién está "menos comprometido" ni para alimentar evaluaciones de desempeño. Dilo por escrito, y deja que los representantes del personal o un comité de empresa revisen el plan de datos donde existan. Consulta la ley local y a especialistas en privacidad antes de recoger cualquier dato de comportamiento. Una vez perdida, la confianza hace menos honesta cada encuesta posterior.

### Actúa sobre lo que aprendas

**9. Corrige primero la mayor fricción y dilo.** Ordena los problemas por tiempo perdido, número de personas y gravedad para las personas afectadas, y financia los principales. Di a la gente qué corregiste y qué elegiste no corregir, con los motivos. Una corrección visible es el mayor estímulo para seguir informando de problemas.

**10. Planifica las interrupciones en torno al trabajo.** Muchas interrupciones forzadas son evitables. Programa las actualizaciones fuera del tiempo de concentración, ofrece aplazamiento dentro de unos límites y agrupa los reinicios. Revisa los minutos de interrupción forzada junto a los objetivos de seguridad para que la compensación sea explícita, ya que algunas actualizaciones deben ocurrir con rapidez (véase el tema 4.3, Métricas de habilitación de cambios).

**11. Trata las soluciones provisionales como retroalimentación de diseño.** Cuando la gente usa una herramienta no aprobada, pregunta qué hace mejor. La respuesta es un requisito que la herramienta oficial pasó por alto. La [TI en la sombra](https://en.wikipedia.org/wiki/Shadow_IT) conlleva riesgos reales para la seguridad y el costo, y una respuesta punitiva la empuja a la clandestinidad. Prefiere adoptar la buena idea, o explicar el riesgo y ofrecer una alternativa segura.

**12. Comparte el programa con las personas a quienes sirve.** Muestra los resultados al personal, celebra una breve revisión con representantes y pregunta qué cambiar el trimestre siguiente. El programa es una forma de colaboración continua entre TI y sus usuarios, y la mejora continua del entorno es el resultado. Vincúlalo con las medidas de personas de la parte siguiente (véase el tema 9.2, Métricas de satisfacción y bienestar).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de preparación el primer día | Acortar la lista acordada; marcar elementos como listos antes de que funcionen; retrasar la fecha oficial de incorporación | Lista escrita en el registro; confirmación del recién llegado; tiempo hasta ser productivo |
| Tiempo hasta ser productivo | Arrancar el reloj más tarde; cerrar pronto el registro de incorporación | Definición del reloj en el registro; confirman tanto el responsable como el recién llegado |
| Prevalencia de soluciones provisionales | Desalentar las respuestas honestas insinuando consecuencias; preguntar solo a grupos satisfechos | Declaración de anonimato; tasa de respuesta y composición de quienes responden; cumplimiento de las salvaguardas de privacidad |
| Minutos de interrupción forzada | Contar solo algunos tipos de interrupción; trasladar las interrupciones al grupo que no se mide | Definir todos los tipos de interrupción planificada; informar por grupo, incluido el personal remoto y por turnos |
| Tiempo de resolución de solicitudes de accesibilidad | Cerrar solicitudes con una corrección parcial; etiquetar las solicitudes como otra cosa para evitar el reloj | Confirmación del solicitante de que la solución funciona; revisión de las solicitudes sin etiquetar |
| Puntuación de pulso de herramientas | Encuestar solo a usuarios contentos; cambiar la pregunta; entrenar al personal para responder bien | Registro de redacción estable; tasa de respuesta y composición; leer los comentarios |
| Cumplimiento de las salvaguardas de privacidad | Informar el cumplimiento sin revisión independiente; ampliar los grupos para ocultar problemas | Revisión periódica por alguien ajeno al equipo; publicar las reglas (el valor de k y la supresión) |

Una lectura sana son recién llegados que pueden trabajar el primer día, un recuento decreciente de interrupciones forzadas, soluciones provisionales que llevan a mejores herramientas oficiales y personal que dice confiar en el programa porque ha visto qué hace con sus respuestas.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Encuestas de pulso | Voz directa, barato, fácil de repetir | Fatiga de encuestas; sesgo de respuesta |
| Telemetría del sistema | Objetiva, continua, sin carga de encuesta | Riesgo para la privacidad; muestra eventos pero no sentimientos |
| Observación y entrevistas | Encuentra fricción oculta; construye relaciones | Consumen tiempo; muestras pequeñas |
| Datos de grano fino | Diagnóstico preciso | Identifican a personas; erosionan la confianza |
| Datos agregados con supresión | Seguros de compartir y de actuar sobre ellos | Menos detalle; ocultan grupos pequeños que pueden tener dificultades |
| Controles estrictos en los dispositivos | Seguridad y cumplimiento | Más interrupciones forzadas; más soluciones provisionales |

La respuesta en prosa es usar los tres tipos de evidencia a nivel de grupo, conservar el detalle solo el tiempo que un diagnóstico lo necesite y tratar la seguridad y la experiencia como una compensación que discutir abiertamente. El objetivo es un lugar de trabajo en el que las personas motivadas obtengan lo que necesitan con poco esfuerzo.

## Preguntas para conversar con tu equipo

**1. ¿Cómo es el primer día de un nuevo colega, y cómo lo sabemos?**
Pide al equipo que trace el camino desde la oferta hasta la primera tarea real. ¿Quién hace qué, y dónde espera? Pide a una persona recién llegada que se una a la conversación. El facilitador debe centrarse en los momentos que dejaron a la persona esperando o avergonzada, y acordar un cambio que mejore el día del próximo recién llegado.

**2. ¿Qué solución provisional usa la gente que preferiríamos que no usara, y qué nos dice?**
Enumera las herramientas no oficiales y los pasos manuales que ha visto el equipo. Para cada una, pregunta qué necesidad cubre. La conversación suele encontrar un requisito que el servicio oficial pasó por alto. Decidid qué soluciones provisionales adoptar, cuáles sustituir por una mejor opción oficial y cuáles prohibir con una explicación.

**3. ¿Cuántos minutos al mes les quitan a nuestros colegas nuestras propias acciones?**
Estima los reinicios forzados, las actualizaciones y las indicaciones para una persona típica. Compáralo con lo que diría un usuario. El facilitador puede preguntar qué cambiaría si se publicara la cifra. Acordad una interrupción que reducir o reprogramar este trimestre.

**4. ¿Qué datos sobre colegas podríamos recoger, y qué deberíamos prometer no hacer nunca con ellos?**
Haz dos listas: lo que es técnicamente posible y lo que el equipo recogerá realmente. Redactad una breve declaración de propósito y límites. Pide a un representante del personal que reaccione. La discusión muestra dónde está la línea contra la vigilancia y cómo explicarla.

**5. ¿Quién tiene más dificultades con nuestras herramientas, y está en nuestros datos?**
Piensa en las necesidades de accesibilidad, los trabajadores por turnos, el personal remoto y las personas nuevas. Comprueba si las encuestas y los registros los alcanzan y si las reglas de grupos pequeños los ocultan. Acordad una forma de escuchar directamente al grupo peor atendido.

**6. ¿Qué corregimos el trimestre pasado por lo que nos dijeron los colegas, y se enteraron?**
Enumera las correcciones y cómo se anunciaron. Si la lista es corta, discutid qué bloquea la acción: la propiedad, la financiación o el miedo. Acordad una corrección visible que entregar antes de la próxima encuesta y un mensaje que la explique.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega son a la vez usuarios y constructores de herramientas internas. Su propia fricción, como las compilaciones lentas, los entornos inestables y los retrasos de acceso, ralentiza todo lo que entregan, y las medidas de este tema también se aplican a ellos. Deben hacer de las herramientas internas parte de la lista de pendientes de producto, con un responsable y usuarios, y participar en el pulso y en las revisiones como colegas (véase el tema 9.1, Salud del equipo y experiencia de desarrollo).

### Equipos de servicio y operaciones

Operaciones y el centro de servicios moldean buena parte de la experiencia, y son personal con sus propias herramientas y carga de trabajo. Deben enviar los cambios cuidando la concentración de los usuarios, mantener ágil el canal de accesibilidad y usar las soluciones provisionales como retroalimentación. También deben proteger a sus propios colegas de ser clasificados con datos de experiencia. El personal de soporte también son individuos motivados.

### Liderazgo y gobernanza

Los líderes fijan la cultura de la medición. Deben pedir fricción eliminada, no puntuaciones elevadas, y financiar las correcciones. Deben proteger por escrito los compromisos de privacidad, resistirse a las peticiones de usar los datos sobre individuos y aceptar que los controles de seguridad tienen un costo de experiencia que sopesar. La gobernanza debe esperar las reglas de privacidad y su revisión como parte de cualquier informe de experiencia.

### Clientes y usuarios

Las personas que usan TI interna son los autores de la experiencia. Merecen un primer día que funcione, herramientas que respeten su concentración, una explicación honesta de qué se recoge sobre ellas, una forma de optar por no participar donde sea posible y evidencia de que hablar lleva al cambio. A los colegas con necesidades de accesibilidad hay que preguntarles cómo hacer que el servicio funcione para ellos, y no tratarlos como un caso especial.

## En la práctica: un ejemplo de ITIL ágil

El departamento central de TI de una universidad da soporte a 6.000 empleados y opera un centro de servicios, un equipo de plataforma y varios equipos de producto. Los números siguientes son ilustrativos.

Un nuevo responsable de TI quiere saber por qué persisten las quejas del personal sobre la incorporación cuando los tiempos de resolución del centro de servicios están dentro de la meta. Pide a la responsable del servicio que haga un piloto de un programa de experiencia para los recién llegados y para la principal herramienta de colaboración, construido con el consejo del personal. La condición del consejo es una promesa escrita de que no se usarán datos sobre individuos, y acepta revisar el plan.

El equipo mide la preparación el primer día y el tiempo hasta ser productivo de los 140 recién llegados del último trimestre, usando el seguimiento de incorporaciones y una confirmación de una pregunta del recién llegado y de su responsable. Solo el 46 por ciento de los recién llegados tenía todos los elementos acordados funcionando el primer día, y la mediana del tiempo hasta ser productivo fue de 4 días, con un percentil 85 de 9 días. Las razones, según las entrevistas, son tres solicitudes separadas que esperan cada una a un equipo distinto y un paso de creación de imágenes de portátiles que termina tarde los viernes. Un breve pulso de la herramienta de colaboración, enviado a una décima parte rotativa del personal con un tamaño mínimo de grupo de 10, muestra valoraciones más bajas entre el personal que trabaja por las tardes y los fines de semana. Los registros de puntos finales, agregados por edificio y turno, muestran una media de 38 minutos al mes de indicaciones de reinicio y actualización forzados, con una larga cola para el personal de los turnos de noche, que tiene reinicios en horas de trabajo porque sus dispositivos se actualizan cuando los demás duermen.

El equipo hace tres cambios. Una única solicitud de incorporación sustituye a las tres, con un responsable con nombre. El paso de creación de imágenes se traslada a una ventana entre semana. La programación de actualizaciones gana una ventana de aplazamiento atada al horario laboral del usuario. Publican las reglas de privacidad en el registro de métricas: un tamaño mínimo de grupo de 10, ningún dato individual en ningún informe y un límite de retención de seis meses para los registros en bruto. Tres meses después, la preparación el primer día sube al 81 por ciento, el tiempo hasta ser productivo en el percentil 85 baja a 5 días y los minutos de interrupción forzada del personal de noche bajan aproximadamente a la mitad. Un gerente pide al responsable de TI que informe de qué departamentos tienen más quejas, para nombrar equipos a los que hacer seguimiento. Él se niega a clasificar los departamentos y ofrece compartir los patrones a nivel de grupo y corregir las causas. La decisión se anota en el registro de decisiones, y el consejo pide ampliar el programa a una segunda herramienta.

## Perspectiva por sector

**Startup.** Todos hablan con todos, así que la observación y la conversación encontrarán la mayor parte de la fricción. Haz excelente la experiencia del primer día, porque marca el tono, y mantén mínima la telemetría. Escribe pronto las promesas de privacidad, aunque el equipo sea pequeño.

**Pequeña empresa.** Un solo administrador puede encargarse de la incorporación y el soporte. Usa una lista de verificación sencilla y pregunta a cada recién llegado qué faltó. Ten cuidado con los datos de grupos pequeños: con una docena de empleados, casi cualquier desglose identifica a alguien, así que apóyate en la conversación.

**Gran empresa.** Los parques grandes y variados hacen útil y arriesgada la segmentación. Segmenta por familia de roles, tipo de sede y clase de dispositivo en lugar de por equipo, aplica un tamaño mínimo de grupo e implica a los representantes del personal. Alinea el programa con las funciones de seguridad, jurídica y de privacidad desde el principio.

**Gobierno y sector público.** Los deberes de accesibilidad, igualdad y privacidad suelen ser legales, y los comités de empresa o los sindicatos pueden tener funciones formales. Trata las pruebas de accesibilidad y la consulta como partes obligatorias del programa, publica las reglas de privacidad y evita recoger datos que no sean claramente necesarios. Donde los datos del personal estén sujetos a regulación, implica al delegado de protección de datos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son modestos. Las encuestas de pulso y la observación necesitan tiempo de las personas y una herramienta de encuestas. Los datos de puntos finales suelen provenir de herramientas ya desplegadas, aunque el análisis y la revisión de privacidad exigen esfuerzo. El costo mayor es la disposición a corregir lo que se encuentre, lo que puede significar cambiar procesos de incorporación, políticas de dispositivos y prácticas de actualización entre equipos.

El retorno llega en tiempo recuperado, una puesta en marcha más rápida de los recién llegados, menos contactos de soporte causados por fricción evitable y menos TI en la sombra. Puedes construir el caso con tus propios números: los minutos de interrupción forzada por persona, los días hasta ser productivo de los recién llegados y los contactos de soporte sobre problemas que una corrección eliminó. Sé cauteloso con una única cifra de productividad derivada del salario y los minutos, porque descansa en supuestos sobre lo que vale un minuto recuperado. También hay un costo de riesgo en el otro lado del libro mayor: recoger demasiados datos sobre el personal puede crear exposición legal y dañar la confianza. Inclúyelo en el costo total de propiedad.

## Antipatrones y trampas

- **Usar los datos de experiencia para juzgar a individuos.** Convierte un programa de apoyo en vigilancia y acaba con la retroalimentación honesta. Agrega, suprime los grupos pequeños y dilo.
- **Medir solo promedios.** Se oculta a las personas con la peor experiencia. Mira la cola y los grupos peor atendidos.
- **Recoger todo porque es posible.** Más datos traen más riesgo. Recoge lo que responda a una pregunta.
- **Encuestar sin descanso.** La gente deja de responder. Rota las herramientas y mantenlo breve.
- **Castigar las soluciones provisionales.** La gente las oculta y la necesidad subyacente queda sin atender. Aprende de ellas.
- **Poner la seguridad y la experiencia en salas distintas.** Algunos controles valen su costo, y muchos no. Discute la compensación con números.
- **Contar el primer día como problema de otro.** La incorporación cruza recursos humanos, TI y el responsable. Dale un solo propietario.
- **Ignorar la accesibilidad hasta que haya una queja.** Construye y prueba con las personas afectadas desde el principio.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Comprensión de la fricción | Solo quejas | Entrevistas o una encuesta ocasionales | Observación regular y pulso para herramientas y momentos clave | Evidencia combinada de encuesta, sistema y conversación, segmentada con seguridad | Visión conjunta con recursos humanos, instalaciones y proveedores; el personal copropietario de las prioridades |
| Privacidad y ética | Sin reglas declaradas | Cuidado informal | Reglas escritas de propósito, minimización y tamaño de grupo | Reglas revisadas de forma independiente; cumplimiento medido | Reglas codiseñadas con representantes del personal y auditadas entre proveedores |
| Acción | Correcciones por queja | Correcciones ad hoc | Principales fricciones en la lista de pendientes con responsables | Correcciones financiadas, con seguimiento y anunciadas; interrupciones planificadas en torno al trabajo | Mejoras de experiencia integradas en la planificación entre equipos y proveedores |

## Lista de verificación

- [ ] Los momentos clave (primer día, fallo de dispositivo, solicitud de acceso, cambio de puesto, salida) están mapeados con responsables.
- [ ] La preparación el primer día y el tiempo hasta ser productivo se miden con una lista y relojes escritos.
- [ ] Un pulso breve cubre las herramientas con nombre en rotación.
- [ ] Los minutos de interrupción forzada se miden por grupo y se revisan con seguridad.
- [ ] Las solicitudes de accesibilidad se etiquetan, se siguen y las confirma el solicitante.
- [ ] Los informes usan un tamaño mínimo de grupo y nunca muestran individuos.
- [ ] Existe y se comparte una declaración escrita de propósito y límites de los datos de experiencia.
- [ ] Los representantes del personal han revisado el plan de datos donde existan esos órganos.
- [ ] Las soluciones provisionales se recogen y se revisan como retroalimentación.
- [ ] Los resultados y las correcciones se comparten con el personal cada trimestre.

## Prompts de IA

**Traza el mapa de un momento que importa.**

```text
Queremos mejorar [moment, for example the first day for a new starter] en [type
of organization]. Los pasos actuales son: [list steps and who owns each]. Dibuja
un mapa en texto que muestre traspasos y esperas, sugiere dónde es probable que
haya fricción y propón una medida de lo que dice la gente, una de lo que
registran los sistemas y una de la observación para cada paso importante. No
inventes cifras. Enumera tus supuestos y las preguntas que debería hacer al
personal.
```

**Redacta una declaración de privacidad para un programa de experiencia.**

```text
Redacta una declaración de una página en lenguaje llano para el personal sobre
un programa de experiencia en [organization type] en [jurisdiction]. Recogemos:
[list data]. Nuestro propósito es [purpose]. Incluye lo que no haremos (por
ejemplo usar datos sobre individuos), el tamaño mínimo de grupo [number], la
retención [period], quién puede ver los datos en bruto y cómo puede el personal
plantear inquietudes. Señala todo lo que debería revisar con un especialista en
privacidad o con los representantes del personal. No des conclusiones legales.
Enumera tus supuestos.
```

**Analiza los comentarios de pulso sobre una herramienta.**

```text
Aquí hay [number] comentarios anonimizados sobre [tool] de [period]: [paste
comments with personal data removed]. Agrúpalos en temas de fricción, cuenta
cada tema, da dos citas representativas de cada uno y sugiere qué temas pueden
apuntar a una causa corregible frente a una necesidad de formación. No
identifiques a individuos ni infieras motivos. Enumera tus supuestos y qué
debería comprobar una persona antes de actuar.
```

**Planifica una reducción de interrupciones.**

```text
Nuestros puntos finales reciben de media [number] interrupciones planificadas
por persona al mes: [list types and frequencies]. Requisitos de seguridad:
[list]. Propón un esquema que reduzca la interrupción del tiempo de
concentración (por ejemplo ventanas de aplazamiento, agrupación, programación
según el horario laboral) y cumpla los requisitos, y describe cómo medir si
funciona sin hacer seguimiento de individuos. Enumera tus supuestos y las
compensaciones que debería discutir con seguridad.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de experiencia o de fricción antes de publicarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada revisada de métrica de experiencia conserva su vector de manipulación, su barrera de protección y sus reglas de privacidad.

## Puntos clave

- El objetivo es dar a las personas motivadas el entorno y el apoyo que necesitan, así que mide la fricción y elimínala.
- Combina preguntas de pulso, medidas del sistema y observación, y mira a los grupos de los márgenes.
- Cuenta los minutos perdidos y las interrupciones causadas por las propias acciones de TI, y planifica en torno a la concentración de la gente.
- Haz de la privacidad una regla de diseño: minimiza, agrega, suprime los grupos pequeños y no juzgues nunca a individuos.
- Trata las soluciones provisionales como retroalimentación y di al personal qué corregiste.
- Incluye la accesibilidad desde el principio y revisa el programa con las personas a quienes sirve.

## Referencias y lecturas complementarias

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Employee experience management](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Digital workplace](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Data minimization](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonymity](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
