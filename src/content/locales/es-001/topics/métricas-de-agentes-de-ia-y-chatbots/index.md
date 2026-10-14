# Métricas de agentes de IA y chatbots

**Un asistente conversacional solo ha ayudado cuando el problema del usuario se resuelve y sigue resuelto, así que mide la resolución verificada, los regresos, la calidad del traspaso a una persona y el daño de las acciones erróneas, y no premies nunca a un bot por mantener a la gente lejos de la ayuda.**

## Resumen y motivación

Muchas organizaciones ponen ahora un asistente conversacional entre los usuarios y el centro de servicios, y algunas dan a los agentes de IA la capacidad de actuar: restablecer una contraseña, pedir equipamiento, reiniciar un servicio, cambiar una configuración. Un [chatbot](https://en.wikipedia.org/wiki/Chatbot) es una aplicación de software que mantiene una conversación, y un [asistente virtual](https://en.wikipedia.org/wiki/Virtual_assistant) añade la capacidad de realizar tareas en nombre del usuario. La idea más amplia de [agente inteligente](https://en.wikipedia.org/wiki/Intelligent_agent) es un sistema que percibe un entorno y toma acciones hacia unas metas. Los modelos de lenguaje modernos hacen a estos sistemas mucho más capaces de una conversación abierta que sus predecesores basados en reglas, y el primer programa conversacional, ELIZA de Joseph Weizenbaum en los años sesenta, ya mostró con qué facilidad atribuye la gente comprensión a una máquina que se limita a producir respuestas verosímiles.

El atractivo es evidente. Los usuarios reciben ayuda a cualquier hora sin esperar. Los equipos dedican menos tiempo a solicitudes rutinarias. El [autoservicio](https://en.wikipedia.org/wiki/Self-service) lleva tiempo siendo una meta de ITSM, y el desplazamiento a la izquierda (shift-left), el traslado de la resolución a puntos más tempranos y baratos, es una idea central del centro de servicios (véase el tema 3.7, Métricas de autoservicio y automatización). El problema de medición es que los números obvios premian lo equivocado. Un bot que termina una conversación cuenta como si la hubiera "contenido", tanto si el usuario recibió ayuda como si se rindió. Un bot que nunca ofrece una persona maximiza la contención. Un bot que da con seguridad una respuesta errónea produce un fallo silencioso que aparece como un contacto airado días después.

Dos tipos de sistema necesitan medidas distintas.

- **Los asistentes conversacionales** responden preguntas, guían a los usuarios y reúnen información. Su riesgo son las respuestas erróneas o inútiles y atrapar a los usuarios en bucles. Las medidas se centran en la resolución, la exactitud y la ruta a una persona.
- **Los agentes que actúan** cambian cosas en el mundo: cuentas, sistemas, tickets, dinero. Su riesgo es una acción errónea con consecuencias reales. Las medidas se centran en la corrección de las acciones, la reversibilidad, los límites de permisos y las pistas de auditoría. Estos usos exigen una gobernanza más fuerte y, a menudo, aprobación humana para los pasos con consecuencias (véase el tema 10.5, Métricas de gobernanza y riesgo de la IA).

Varias cuestiones de diseño dan forma a lo que mides.

- **Honestidad sobre con qué está hablando el usuario.** Muchas jurisdicciones tienen o están desarrollando deberes de informar a las personas cuando interactúan con un sistema de IA, y a octubre de 2026 estas reglas están evolucionando, así que comprueba qué te aplica. La buena práctica es decirlo con claridad en cualquier caso.
- **Una salida.** Los usuarios deben poder llegar a una persona sin lucha. Un bot que esconde la ruta a un humano es un [patrón oscuro](https://en.wikipedia.org/wiki/Dark_pattern), un diseño que engaña o atrapa a los usuarios hacia resultados que no elegirían.
- **Accesibilidad.** Las interfaces conversacionales deben funcionar para personas que usan tecnología de apoyo, que tienen una capacidad lingüística limitada o que necesitan otro idioma u otro canal.
- **Decisiones automatizadas.** Cuando la salida de un asistente afecta a los derechos o al acceso de una persona, se aplican el tema de la [toma de decisiones automatizada](https://en.wikipedia.org/wiki/Automated_decision-making) y los deberes que la rodean. Mantén tales decisiones en manos de personas, o con salvaguardas sólidas.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es vívida aquí: si la contención o el desvío es la meta, la forma más barata de cumplirla es hacer más difícil llegar al humano (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Las medidas siguientes ponen primero la resolución y el resultado del usuario.

## Principios clave

- **La resolución es la medida, no la contención.** Una conversación que terminó no es un problema que se resolvió.
- **Verifica, y comprueba el regreso.** Cuenta un contacto como resuelto solo cuando el usuario lo confirma o no vuelve.
- **Ofrece siempre un camino a una persona.** Haz la ruta fácil, rápida y visible, y lleva el contexto de un lado a otro.
- **Sé honesto sobre el sistema.** Di que es una IA, qué puede hacer y qué no.
- **Limita lo que pueden hacer los agentes.** Concede el mínimo privilegio, exige aprobación para las acciones con consecuencias y mantén una pista de auditoría.
- **Mide la calidad de las respuestas por muestreo.** Las respuestas fluidas pueden ser erróneas.
- **Escucha a los usuarios y al personal que recoge los pedazos.** Ven lo que las métricas pasan por alto.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de resolución verificada | Proporción de conversaciones con el bot en que el usuario confirmó que el problema se resolvió, o no volvió en un periodo indicado | conversaciones con resolución confirmada o sin contacto de retorno en 7 días / conversaciones que empezaron con una intención resoluble | porcentaje | Registros de conversaciones, confirmación del usuario, datos de tickets y de contactos | Centro de servicios; gestión del conocimiento | Resultado funcional para el usuario | Semanal |
| Tasa de contactos de retorno | Proporción de conversaciones terminadas por el bot seguidas de un contacto sobre el mismo asunto por cualquier canal | conversaciones seguidas de un contacto relacionado en 7 días / conversaciones terminadas sin traspaso | porcentaje | Registros de conversaciones unidos a los registros de tickets y de contactos | Centro de servicios; gestión de incidentes | Defectos que escapan | Semanal |
| Completitud del contexto del traspaso | Proporción de traspasos a una persona en que la persona tuvo la información necesaria sin pedir al usuario que se repitiera | traspasos muestreados que el agente receptor juzga completos / traspasos muestreados | porcentaje | Traspasos muestreados, retroalimentación de los agentes | Centro de servicios; gestión del conocimiento | Colaboración fluida a través del límite | Mensual |
| Tiempo hasta una persona | Tiempo desde que el usuario pide una persona, o el bot decide traspasar, hasta que una persona toma el relevo | mediana y percentil 85 de minutos | minutos | Registros de conversaciones, datos de colas | Centro de servicios; gestión de incidentes | Capacidad de respuesta cuando el usuario necesita ayuda | Semanal |
| Exactitud de las respuestas | Proporción de respuestas del bot muestreadas que un revisor cualificado juzga correctas, completas y seguras | respuestas juzgadas correctas / respuestas muestreadas | porcentaje | Revisión por muestreo | Gestión del conocimiento; aseguramiento de la calidad | Definición de terminado de una respuesta | Mensual |
| Satisfacción y esfuerzo con el bot | Valoración del usuario de la satisfacción y la facilidad tras una conversación, con comentarios | valoraciones favorables / valoraciones; valoración media del esfuerzo | porcentaje; puntos de escala | Breve encuesta posterior a la conversación | Centro de servicios; experiencia del cliente | Retroalimentación sobre el software que funciona | Semanal |
| Tasa de reversión de acciones del agente | Proporción de acciones realizadas por un agente de IA que tuvieron que corregirse, deshacerse o escalarse | acciones revertidas o corregidas / acciones realizadas, por tipo de acción y clase de riesgo | porcentaje | Registro de auditoría de acciones, registros de cambios | Habilitación de cambios; gestión de incidentes | Retrabajo y reversión | Semanal |

Define las intenciones que maneja el bot, y excluye de la contención las que siempre debería traspasar. La resolución verificada cuenta una conversación solo si el asunto estaba dentro del alcance y el usuario o bien confirmó o bien no mostró contacto de retorno. El tiempo hasta una persona arranca en la petición del usuario, no al final de un menú. La exactitud de las respuestas la juzga, frente a la base de conocimiento y la política, una persona que no construyó el bot. La reversión de acciones del agente se divide por tipo de acción y clase de riesgo, y cualquier acción dañina se informa por separado como un incidente.

## Recomendaciones

### Define el éxito como resolución

**1. Define las intenciones y el resultado que quieres.** Enumera los problemas que debe manejar el asistente, como el restablecimiento de contraseñas, el estado de los accesos y las preguntas de cómo hacer algo, y el resultado de cada uno: respondido, hecho o traspasado. Decide qué intenciones deben ir siempre a una persona: quejas, cualquier cosa que implique angustia, seguridad, derechos legales o dinero. Un bot que intenta manejarlo todo falla mal en los bordes.

**2. Mide la resolución verificada y los regresos.** Pregunta a los usuarios al final si su asunto está resuelto, y busca también contactos relacionados después. Ninguna de las dos basta: los usuarios que se rinden no responden, y algunos que recibieron ayuda aun así llaman. Juntas aproximan la verdadera resolución. Trata la tasa de contactos de retorno como la barrera de protección clave de cualquier cifra de contención (véase el tema 3.1, Métricas del centro de servicios).

**3. Evita la contención como meta.** Informa de la contención solo como una cifra descriptiva y siempre junto a la resolución verificada, los regresos y la satisfacción. Una contención creciente con regresos crecientes significa que el bot está rechazando a la gente. No fijes una meta de contención ni ates a ella el desempeño de nadie.

### Haz fácil y buena la ruta a una persona

**4. Deja que los usuarios lleguen a una persona en cualquier momento.** Ofrece una forma clara y llana de pedir un humano, y respétala. Mide el tiempo hasta una persona y la proporción de conversaciones en que los usuarios lo pidieron más de una vez. Prueba tú mismo el camino con regularidad. Donde no haya una persona disponible, di cuándo la habrá y ofrece una llamada de vuelta.

**5. Traspasa con el contexto.** Cuando el bot pase una conversación a una persona, incluye el resumen, lo que se intentó, las palabras del usuario y los datos pertinentes de la cuenta para que el usuario no se repita. Pide a los agentes receptores que valoren si el traspaso fue completo, y muestrea los resultados. Los traspasos pobres hacen que los usuarios confíen menos tanto en el bot como en el servicio (véase el tema 9.3, Métricas de colaboración y traspasos).

**6. Diseña para todos los usuarios.** Prueba el asistente con usuarios que usan tecnología de apoyo, que escriben en otros idiomas, que tienen prisa o están angustiados y que no se sienten cómodos con la tecnología. Ofrece otros canales. Mide la resolución verificada y la satisfacción por grupo de usuarios donde sea seguro y lícito hacerlo. Los promedios ocultan a aquellos a quienes más falla el bot.

### Comprueba la calidad de lo que dice y hace

**7. Muestrea las respuestas en busca de exactitud y seguridad.** Cada mes, extrae una muestra aleatoria de conversaciones y haz que una persona cualificada juzgue las respuestas: correctas, completas, seguras y honestas sobre la incertidumbre. Registra los errores por tipo: obsoletos, inventados, contrarios a la política o malentendidos. Devuelve los errores a la base de conocimiento y a la configuración. Añade pruebas dirigidas para los temas sensibles y para los intentos de empujar al asistente fuera de su alcance.

**8. Mantén al día el conocimiento.** Un asistente es tan bueno como el contenido y las herramientas en que se apoya. Vincula los errores de respuesta con artículos de conocimiento y mide la frescura del conocimiento que usa (véase el tema 3.6, Métricas de gestión del conocimiento). Donde el sistema use la recuperación desde una base de conocimiento, incluye una comprobación de que cita sus fuentes y de que las fuentes son correctas.

**9. Sé honesto con los usuarios.** Declara al principio que están hablando con una IA y qué puede y qué no puede hacer. No le des un nombre ni unos modales humanos que sugieran lo contrario. Donde no esté segura, debe decirlo y ofrecer una persona. Comprueba la ley aplicable sobre divulgación.

### Gobierna los agentes que actúan

**10. Clasifica las acciones por riesgo y fija los permisos en consecuencia.** Para cada acción que puede realizar un agente, define su clase de riesgo: informativa, reversible y de bajo impacto, o con consecuencias. Concede el mínimo privilegio necesario. Exige aprobación humana para las acciones con consecuencias. Mantén una pista de auditoría de cada acción con el motivo, el usuario y el resultado. Estos controles se vinculan con las medidas de cambios y de seguridad de partes anteriores (véanse el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades, y el tema 8.2, Métricas de riesgos y controles).

**11. Mide la corrección y la reversibilidad de las acciones.** Sigue la tasa de reversión por tipo de acción, y revisa cada acción dañina como un incidente, sin culpas. Prueba a los agentes en un entorno seguro antes de concederles acceso, y vuelve a probar cuando cambien el modelo o las herramientas. Una nueva versión del modelo puede cambiar el comportamiento, así que trátala como un cambio que necesita control (véase el tema 4.3, Métricas de habilitación de cambios).

**12. Escucha a las personas que recogen los pedazos.** El personal del centro de servicios ve las consecuencias de los fallos del bot: usuarios airados, contactos repetidos y líos que limpiar. Pregúntales con regularidad qué hace mal el bot y qué lo dificulta. Su retroalimentación y los comentarios de los usuarios son evidencia que ninguna métrica capta por completo, y debe dar forma a la siguiente ronda de cambios.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de resolución verificada | Contar cualquier final de conversación como resuelto; hacer preguntas de confirmación sugestivas | Definir la confirmación de forma neutral; tasa de contactos de retorno; muestrear conversaciones |
| Tasa de contactos de retorno | Medir solo por un canal; ventanas cortas | Unir todos los canales; usar una ventana más larga como comprobación; muestrear los regresos |
| Completitud del contexto del traspaso | Pasar una transcripción larga en lugar de un resumen; muestrear traspasos fáciles | Valoración del agente receptor; muestra aleatoria; tiempo de resolución tras el traspaso |
| Tiempo hasta una persona | Arrancar el reloj tras los menús; contar un acuse de cola como relevo | El reloj arranca en la petición; relevo significa que una persona está activa en la conversación |
| Exactitud de las respuestas | Muestrear conversaciones fáciles; revisores indulgentes | Muestra aleatoria por revisores independientes; casos de prueba adversarios |
| Satisfacción y esfuerzo con el bot | Encuestar solo conversaciones completadas; colocar la encuesta donde solo llegan los usuarios contentos | Encuestar también las conversaciones abandonadas; tasa de respuesta y composición; leer los comentarios |
| Tasa de reversión de acciones del agente | No registrar las reversiones; reclasificar las correcciones como trabajo nuevo | Registro de auditoría resistente a la manipulación; vincular las reversiones con las acciones; revisión de incidentes |

Una lectura sana es una resolución verificada alta con pocos regresos, rutas fáciles y rápidas a una persona con traspasos completos, respuestas exactas en la revisión por muestreo, usuarios satisfechos entre los grupos y agentes cuyas acciones rara vez necesitan revertirse y nunca causan daño sin ser vistas.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Bot basado en reglas | Predecible, fácil de probar | Estrecho; frágil; frustrante fuera de los guiones |
| Asistente de modelo de lenguaje | Flexible, fluido | Puede errar con seguridad; más difícil de probar |
| Recuperación desde conocimiento aprobado | Respuestas fundamentadas, más fáciles de corregir | Depende de la calidad del contenido |
| Generación abierta | Amplia cobertura | Mayor riesgo de invención |
| Aprobación humana de las acciones | Seguridad | Más lenta; fatiga del revisor |
| Acciones autónomas | Rapidez | Mayor radio de impacto cuando se equivocan |
| Alcance estricto con traspaso temprano | Seguro | Menor contención |
| Alcance amplio | Mayor contención | Más errores en los bordes |

La respuesta en prosa es empezar con intenciones estrechas y bien entendidas, fundamentar las respuestas en conocimiento aprobado, hacer fácil la ayuda humana y ampliar el alcance y la autonomía solo a medida que lo justifiquen las medidas.

## Preguntas para conversar con tu equipo

**1. Si un usuario quisiera una persona ahora mismo, ¿cuántos pasos llevaría, y lo hemos probado nosotros mismos?**
Probad juntos el camino. Cuenta los pasos y la espera. El facilitador debe anotar cada barrera. Acordad cambios para que el camino sea corto, y medid el tiempo hasta una persona.

**2. ¿Qué proporción de las conversaciones que terminó nuestro bot resolvió realmente el problema?**
Comprueba los regresos y las confirmaciones de una muestra. Compara con la cifra de contención. Discutid la brecha. Decidid qué cifra deben ver los líderes.

**3. ¿Qué hace mal nuestro bot, y quién se entera?**
Pregunta al centro de servicios. Revisa conversaciones muestreadas. Busca patrones: artículos obsoletos, preguntas ambiguas, temas sensibles. Acordad una ruta de los errores a las correcciones, con un responsable.

**4. ¿Qué acciones puede realizar el agente por sí solo, y cuáles necesitan una persona?**
Enumera las acciones con sus clases de riesgo y permisos. Pregunta cuál sería el peor fallo realista de cada una. Acordad las reglas de aprobación y la pista de auditoría, y quién revisa los casos dañinos.

**5. ¿A quién está fallando el bot en silencio?**
Piensa en usuarios con prisa, angustiados, con necesidades de accesibilidad o con un idioma limitado. Mira la resolución y la satisfacción por grupo, donde sea seguro. Acordad una prueba con esos usuarios.

**6. ¿Qué nos haría apagar el bot o reducir su alcance?**
Definid la evidencia: regresos por encima de un nivel, acciones dañinas, exactitud por debajo de una norma. Decidid quién puede decidir. Tener una regla de parada de antemano facilita actuar.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos que construyen el asistente poseen su calidad. Deben definir las intenciones, fundamentar las respuestas en conocimiento aprobado, probar con casos adversarios, liberar los cambios bajo control y leer los fallos. Deben rechazar las metas de contención que premian atrapar a los usuarios.

### Equipos de servicio y operaciones

El personal del centro de servicios trabaja con el asistente y hereda sus fallos. Debe valorar los traspasos, señalar las respuestas erróneas, mantener al día el conocimiento y tomar el relevo con rapidez cuando se lo pidan. Son los mejores jueces de si el asistente ayuda a los usuarios, y su carga de trabajo y su estrés forman parte del cuadro.

### Liderazgo y gobernanza

Los líderes patrocinan el asistente y quieren ahorros. Deben pedir la resolución verificada, los regresos y la satisfacción junto a la contención, exigir una regla de parada, financiar la ruta humana y revisar las clases de riesgo de los agentes. La gobernanza debe comprobar la divulgación, la accesibilidad y los deberes legales.

### Clientes y usuarios

Los usuarios quieren ayuda con poco esfuerzo y sin engaños. Deben saber que hablan con una IA, poder llegar fácilmente a una persona y confiar en que el sistema no actuará sin buenos motivos. Su experiencia, sobre todo del fracaso, es la principal evidencia de si vale la pena tener el asistente.

## En la práctica: un ejemplo de ITIL ágil

Una universidad nacional opera un centro de servicios para estudiantes y personal que gestiona unos 30.000 contactos al mes. Lanza un chatbot para las solicitudes comunes, y el panel del proveedor informa de una tasa de contención del 74 por ciento. Los números siguientes son ilustrativos.

La jefa de servicios al estudiante lo comprueba. Entre las conversaciones terminadas por el bot en el último mes, el 29 por ciento fue seguido de un contacto relacionado por correo o teléfono en siete días. La resolución verificada, usando la confirmación del usuario y la ausencia de regreso, es del 49 por ciento para las intenciones dentro del alcance. La mediana del tiempo para llegar a una persona tras pedirlo es de 6 minutos, con un percentil 85 de 22, en parte porque la ruta exige tres pasos de menú. Una muestra de 100 conversaciones revisada por dos asesores con experiencia encuentra 88 respuestas correctas y 12 defectuosas: 7 obsoletas, 3 con detalles inventados sobre un plazo y 2 con casos sensibles mal manejados que implicaban a un estudiante en dificultades. Los agentes receptores valoran como completos el 54 por ciento de los traspasos. La satisfacción con el bot es menor para los estudiantes que usan lectores de pantalla y para quienes escriben en idiomas distintos del inglés. El equipo del centro de servicios informa de muchos contactos que empiezan con "el chatbot no pudo ayudarme".

La jefa de servicios al estudiante hace cambios con el equipo. Las intenciones sensibles, como bienestar, quejas y disputas sobre tasas, se encaminan directamente a una persona, y el bot lo dice. Aparece una opción "hablar con una persona" en cada pantalla, y se sigue el tiempo hasta una persona, con la meta de responder en pocos minutos en horario atendido. Los traspasos incluyen un resumen automático y las propias palabras del usuario. Los responsables de la base de conocimiento corrigen los artículos obsoletos, y una revisión mensual por muestreo les da retroalimentación. El asistente se limita a responder con contenido aprobado y debe decir cuando no sabe. Un segundo piloto deja que un agente restablezca contraseñas tras la verificación de identidad, con cada acción registrada y reversible dentro de un límite de tiempo, y con seguimiento de la tasa de reversión. El panel sustituye la contención por la resolución verificada, la tasa de contactos de retorno, la exactitud, el tiempo hasta una persona y la satisfacción por grupo.

Tres meses después, la resolución verificada llega al 66 por ciento para las intenciones dentro del alcance, la tasa de contactos de retorno baja al 14 por ciento, la mediana del tiempo hasta una persona baja a 2 minutos, la proporción de traspasos completos sube al 86 por ciento y la exactitud de las respuestas muestreadas sube al 95 por ciento, sin casos sensibles mal manejados en la muestra. La tasa de reversión de acciones del agente en el piloto de contraseñas es del 1,2 por ciento. El gabinete del rector pide una meta de contención del 85 por ciento. La jefa de servicios al estudiante explica que una meta de contención mayor premiaría esconder la ruta a una persona, y propone la resolución verificada y los regresos como medidas, con una revisión de qué ampliar a continuación. La decisión se registra.

## Perspectiva por sector

**Startup.** Un asistente puede cubrir el soporte a bajo costo, y una mala respuesta puede costar un cliente. Mantén estrecho el alcance, fundamenta las respuestas en tu documentación, haz obvia la opción humana y lee cada escalado. Cuidado con dejar que un agente actúe sobre cuentas o pagos.

**Pequeña empresa.** Un asistente comercial en un sitio web puede manejar las preguntas comunes. Pruébalo como lo haría un cliente, asegúrate de que un teléfono o un correo sean fáciles de encontrar y revisa las conversaciones cada semana. Comprueba qué hace el proveedor con los datos.

**Gran empresa.** La escala ofrece ahorros y riesgo. Ejecuta un proceso de gobernanza para las clases de riesgo, las aprobaciones y la auditoría, mide por intención y por grupo de usuarios y asegura que se pueda llegar a una persona en cada canal. Coordina soporte, seguridad, jurídica y accesibilidad.

**Gobierno y sector público.** Los ciudadanos pueden no tener otro proveedor, y los deberes de accesibilidad, acceso lingüístico y trato justo se aplican con fuerza. Mantén localizable a una persona, evita las decisiones automatizadas sobre derechos sin salvaguardas, publica cómo se usa el asistente y comprueba la divulgación y los deberes de derecho administrativo (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son las licencias o los cargos por uso, la integración, la preparación del contenido, el muestreo y la revisión continuos, el mantenimiento de la base de conocimiento, las pruebas y la gobernanza. Una buena ruta humana también cuesta dinero, porque debe dotarse de personal.

Los retornos potenciales son esperas más cortas para asuntos sencillos, alivio de los contactos repetitivos y cobertura fuera de horario. El lado del riesgo incluye los regresos, la confianza perdida, el daño de respuestas o acciones erróneas y la exposición jurídica. Construye el caso con tus propios números: la resolución verificada y los regresos, el costo por contacto resuelto incluidos los traspasos, el tiempo del personal dedicado a arreglar los fallos del bot y la satisfacción por grupo. Evita usar como tu estimación las afirmaciones de contención o de desvío de un proveedor. Cuenta el costo de la ruta humana y de la gobernanza (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **La contención como meta.** Premia mantener a la gente lejos de la ayuda. Informa de la resolución verificada y de los regresos.
- **Ruta a una persona escondida o lenta.** Es un patrón oscuro, y los usuarios lo notan. Hazla corta y pruébala.
- **Traspasar sin contexto.** Los usuarios se repiten y la confianza cae. Pasa un resumen.
- **Dejar que el bot maneje casos sensibles.** El bienestar, las quejas y los derechos necesitan personas. Encamínalos directamente.
- **Acciones autónomas sin auditoría ni aprobación.** Un error puede escalar. Clasifica, limita y registra.
- **Medir solo lo que muestra el panel del proveedor.** Halaga. Une tus propios datos.
- **Ignorar los grupos a los que falla el bot.** Los promedios los ocultan. Prueba y segmenta donde sea seguro.
- **Sin regla de parada.** Un bot que falla sigue en pie. Define la evidencia que lo reduciría o lo apagaría.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Resultados | Se informa de la contención | Se encuesta la satisfacción | Resolución verificada y regresos con seguimiento por intención | Segmentado por grupo de usuarios; reglas de parada definidas; exactitud muestreada cada mes | Asistente, personal y conocimiento mejorados juntos con evidencia compartida |
| Ruta a las personas | Difícil de encontrar | Opción disponible | Ruta corta; tiempo hasta una persona con seguimiento; traspasos que llevan contexto | Calidad del traspaso valorada y mejorada; dotación ajustada a la demanda | Bot y personal colaboran con fluidez entre canales, respetando la elección del usuario |
| Agentes que actúan | Automatización ad hoc | Acciones con guion | Acciones clasificadas por riesgo, mínimo privilegio, aprobación y auditoría | Tasa de reversión y daño revisados; cambios controlados | Comportamiento del agente gobernado en toda la organización y los proveedores con aseguramiento independiente |

## Lista de verificación

- [ ] Las intenciones del asistente están enumeradas, con las que deben ir siempre a una persona.
- [ ] La resolución verificada y la tasa de contactos de retorno se informan junto a la contención.
- [ ] Existe una ruta visible y corta a una persona en cada pantalla, y se mide el tiempo hasta una persona.
- [ ] Los traspasos incluyen un resumen y las palabras del usuario, y los valoran los agentes receptores.
- [ ] Las respuestas se muestrean cada mes por revisores cualificados e independientes.
- [ ] Se dice a los usuarios que hablan con una IA y qué puede hacer.
- [ ] Las pruebas de accesibilidad y de otros idiomas se hacen con usuarios reales.
- [ ] Las acciones del agente están clasificadas por riesgo, con permisos de mínimo privilegio y registradas en auditoría.
- [ ] Las tasas de reversión y las acciones dañinas se revisan sin culpas.
- [ ] Una regla de parada define cuándo reducir o apagar el asistente.

## Prompts de IA

**Define intenciones y reglas de traspaso.**

```text
Operamos un centro de servicios para [type of organization]. Los motivos de
contacto más comunes son: [list with volumes]. Propón qué intenciones debería
manejar por completo un chatbot, en cuáles solo debería ayudar y luego
traspasar, y cuáles deben ir siempre a una persona, con razones. Incluye la
información de traspaso que pasar. No inventes estadísticas. Enumera tus
supuestos y los riesgos de los casos sensibles.
```

**Comprueba una afirmación de contención.**

```text
El panel de nuestro chatbot muestra una contención de [value]. También tenemos:
contactos de retorno en siete días [value], resultados de encuestas [values] y
una muestra de conversaciones [describe]. Explica qué podría ser la resolución
verificada, cómo calcularla a partir de nuestros datos, qué sugiere la brecha
entre la contención y la resolución y qué comprobar a continuación. No afirmes
causas que los datos no puedan respaldar. Enumera tus supuestos.
```

**Diseña una clasificación de riesgo para las acciones del agente.**

```text
Un agente de IA podría realizar estas acciones: [list]. Para cada una, propón
una clase de riesgo (informativa, reversible de bajo impacto, con consecuencias),
el permiso que debería necesitar, si debe aprobarla una persona, qué registrar,
cómo revertirla y una prueba que ejecutar antes de habilitarla. No supongas
herramientas concretas. Enumera tus supuestos y las decisiones que necesitan la
aportación de seguridad y del área jurídica.
```

**Planifica una revisión de las conversaciones del bot.**

```text
Diseña una revisión mensual de las conversaciones del bot: tamaño de la muestra
y selección (incluidas algunas abandonadas y algunas de grupos de usuarios en
riesgo de mal servicio), cualificaciones de los revisores, una breve rúbrica de
corrección, seguridad y honestidad sobre la incertidumbre, cómo registrar los
errores y corregir sus fuentes, y cómo informar sin identificar a los usuarios.
Enumera tus supuestos y las cautelas de privacidad.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de chatbot o de agente de IA.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de chatbot mide la resolución y lleva su vector de manipulación y su barrera de protección.

## Puntos clave

- Mide la resolución verificada y los contactos de retorno, y trata la contención solo como una cifra descriptiva.
- Haz corta y visible la ruta a una persona, y traspasa con el contexto.
- Muestrea las respuestas en busca de exactitud y seguridad, y mantén al día el conocimiento que usa el asistente.
- Sé honesto en que los usuarios hablan con una IA, y prueba con los usuarios con más probabilidad de ser fallados.
- Para los agentes que actúan, clasifica el riesgo, limita los permisos, exige aprobación para las acciones con consecuencias y mantén una pista de auditoría.
- Define una regla de parada por adelantado.

## Referencias y lecturas complementarias

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
