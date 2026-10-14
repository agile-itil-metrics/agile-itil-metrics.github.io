# Métricas de habilidades y aprendizaje

**Un equipo que sigue aprendiendo mantiene sanos sus servicios, así que protege tiempo para aprender dentro de un ritmo sostenible, mide si las habilidades están repartidas y se usan y trata los certificados y los recuentos de cursos como pistas, nunca como prueba de competencia.**

## Resumen y motivación

Los servicios sobreviven a las personas que los construyeron, y la tecnología que hay debajo cambia constantemente. La capacidad de un equipo para mantenerse al día depende de lo que sabe y de la rapidez con que aprende. Los principios del Manifiesto Ágil incluyen la atención continua a la excelencia técnica y la reflexión regular sobre cómo ser más eficaces. Las prácticas de mejora continua y de gestión del conocimiento de ITIL describen la misma necesidad desde el lado organizativo. Las medidas de habilidades y aprendizaje preguntan si existe la capacidad para operar y cambiar los servicios, si está repartida lo bastante como para sobrevivir a una ausencia y si la organización da a las personas el tiempo y el apoyo para crecer.

El aprendizaje es fácil de contar y difícil de medir bien. Las horas de formación, los cursos completados y los certificados son visibles, y ninguno muestra si alguien puede hacer algo nuevo en el trabajo. Una [certificación profesional](https://en.wikipedia.org/wiki/Professional_certification) muestra que una persona cumplió una norma de evaluación en un momento dado. Es una evidencia útil, sobre todo para roles regulados y puntos de entrada como las bases de ITIL o de lo ágil, y no es una medida de la habilidad ni del criterio actuales de la persona. Por eso este tema se apoya en medidas de capacidad en uso: quién puede operar y cambiar qué, con qué rapidez las personas nuevas se vuelven útiles y si el aprendizaje se nota en el trabajo.

Varias ideas dan forma al enfoque.

- **Gran parte del conocimiento valioso es [tácito](https://en.wikipedia.org/wiki/Tacit_knowledge).** Michael Polanyi observó que sabemos más de lo que podemos decir. Operar un servicio complejo implica un criterio difícil de poner por escrito, y se transmite sobre todo trabajando junto a otras personas. La documentación ayuda, y no puede sustituir a la práctica compartida, como la [programación en pareja](https://en.wikipedia.org/wiki/Pair_programming), el acompañamiento y la revisión.
- **Importan tanto la amplitud como la profundidad.** Las [habilidades en forma de T](https://en.wikipedia.org/wiki/T-shaped_skills) describen a una persona con profundidad en un área y amplitud operativa en otras. Los equipos de personas en forma de T pueden cubrir ausencias y colaborar a través de los límites. La [formación cruzada](https://en.wikipedia.org/wiki/Cross-training_(business)) construye esa amplitud deliberadamente.
- **El aprendizaje es social.** Una [comunidad de práctica](https://en.wikipedia.org/wiki/Community_of_practice) es un grupo de personas que comparten un oficio y aprenden unas de otras. La [mentoría](https://en.wikipedia.org/wiki/Mentorship) empareja a personas con menos experiencia con otras con más. Ambas reparten el conocimiento entre los límites de los equipos.
- **Las organizaciones pueden aprender.** Una [organización que aprende](https://en.wikipedia.org/wiki/Learning_organization), un término popularizado por Peter Senge, se transforma continuamente mediante el aprendizaje de su gente. Prácticas como las revisiones de incidentes sin culpas son la forma en que las organizaciones aprenden de la experiencia (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

Las medidas de aprendizaje tienen sus propias distorsiones. Los presupuestos de formación se gastan en cursos que nadie aplica. Se promete tiempo para aprender y luego lo consumen los incidentes. Se clasifica a los individuos por inventarios de habilidades, lo que les hace ocultar lo que no saben. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: cuando las horas de aprendizaje son una meta, la gente asiste a sesiones, y cuando los certificados son una meta, la gente los colecciona (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

El ritmo sostenible también importa aquí. El aprendizaje exprimido en las tardes y los fines de semana es un costo para las personas, y no es señal de una organización sana. Las medidas siguientes miran el tiempo protegido dentro de la semana laboral.

## Principios clave

- **Mide la capacidad en uso, no la asistencia a cursos.** Mira lo que la gente puede hacer y lo que hace.
- **Protege el tiempo de aprendizaje dentro de un ritmo sostenible.** No hagas del aprendizaje un extra sin pagar.
- **Reparte el conocimiento a propósito.** Los puntos únicos de conocimiento son un riesgo para el servicio y una carga para la persona.
- **Trata los certificados como evidencia, no como prueba.** Importan para algunos roles y dicen poco sobre la habilidad actual.
- **Aprende del trabajo.** Los incidentes, las revisiones y la programación en pareja enseñan más que la mayoría de los cursos.
- **Mantén los datos de habilidades a nivel de equipo.** No debe clasificarse a los individuos por un inventario.
- **Deja que las personas den forma a su propio aprendizaje.** Las personas motivadas eligen bien cuando se les da tiempo y apoyo.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Proporción de tiempo de aprendizaje protegido | Proporción de la capacidad del equipo reservada y realmente usada para aprender | horas o proporción de capacidad usadas para aprender en horario de trabajo / capacidad total de trabajo, a nivel de equipo | porcentaje | Plan de capacidad del equipo y tipo de trabajo del gestor de trabajo | Gestión de la fuerza laboral y del talento; mejora continua | Tiempo para la reflexión y la excelencia técnica | Mensual |
| Profundidad de la formación cruzada | Proporción de tareas críticas realizadas por al menos dos personas en el último periodo | tareas críticas realizadas por dos o más personas en el periodo / tareas críticas | porcentaje | Mapa de tareas y de propiedad del equipo, validado por el trabajo reciente | Gestión del conocimiento; gestión de la continuidad del servicio | Propiedad colectiva del trabajo | Trimestral |
| Tiempo hasta la primera contribución | Tiempo que tarda un nuevo miembro del equipo en completar su primer cambio real o caso resuelto | mediana y percentil 85 de días desde la fecha de incorporación hasta el primer elemento de trabajo real completado en producción | días | Seguimiento de incorporaciones y gestor de trabajo | Gestión de la fuerza laboral y del talento; gestión del conocimiento | Tiempo para que un nuevo miembro del equipo haga un primer cambio | Por contratación, revisado trimestralmente |
| Participación en comunidades | Proporción de miembros del equipo que participan en una comunidad de práctica en el periodo, según su elección | miembros que asistieron, contribuyeron o presentaron en el periodo / miembros del equipo, a nivel de equipo | porcentaje | Registros de la comunidad, voluntarios | Gestión del conocimiento; mejora continua | Comunidades de práctica | Trimestral |
| Tasa de aplicación de la formación | Proporción de experiencias de formación en que la persona o su equipo informa de que usó lo aprendido en el trabajo en 90 días | experiencias de aprendizaje informadas como aplicadas / experiencias de aprendizaje completadas | porcentaje | Breve pregunta de seguimiento a la persona, anonimizada a nivel de equipo | Gestión de la fuerza laboral y del talento; mejora continua | Aprendizaje aplicado al trabajo | Trimestral |
| Cobertura de certificaciones pertinentes | Proporción de roles que exigen una certificación por motivos legales, contractuales o de entrada en los que se cumple el requisito | roles con la certificación exigida / roles que exigen certificación | porcentaje | Registro de requisitos de los roles, registros de certificados | Gestión de la fuerza laboral y del talento; gobernanza | Cumplir los requisitos contractuales o regulatorios de entrada | Anual |
| Lecciones compartidas entre equipos | Número de lecciones de incidentes o mejoras que se compartieron fuera del equipo de origen y las usó otro equipo | lecciones compartidas con un uso registrado por otro equipo en el periodo | recuento | Registro de lecciones y notas de revisión | Gestión del conocimiento; mejora continua | Aprendizaje compartido entre equipos | Trimestral |

Define en el registro las tareas críticas, los roles y los tipos de aprendizaje. El tiempo de aprendizaje protegido cuenta solo el tiempo usado para aprender, no el ofrecido y perdido por trabajo urgente, y excluye el aprendizaje fuera de horario. La profundidad de la formación cruzada cuenta a las personas que realmente han realizado la tarea en el periodo, no a las que podrían en teoría. La tasa de aplicación de la formación usa autoinformes y se agrega por equipo, con un tamaño mínimo de grupo. La cobertura de certificaciones es solo para roles con un requisito genuino, y nunca se usa para valorar la competencia de un individuo.

## Recomendaciones

### Protege el tiempo y hazlo real

**1. Planifica el tiempo de aprendizaje dentro de la capacidad.** Reserva una parte de la capacidad de cada equipo para el aprendizaje, como un bloque regular cada semana, y escríbela en el plan de capacidad. Un plan que supone que todos trabajan a plena utilización en la entrega no deja espacio para aprender. Sigue la proporción realmente usada, y mira por qué se queda corta: incidentes, plazos o cultura. Esto se vincula con los temas de planificación y de carga de trabajo (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

**2. Deja que la gente elija, con orientación.** Las personas motivadas saben lo que necesitan aprender. Ofrece un presupuesto y tiempo, un menú de opciones y conversaciones sobre las necesidades del equipo. Pide a la gente que comparta lo que aprende con el equipo, lo que multiplica el valor. Evita el aprendizaje obligatorio irrelevante para el trabajo.

**3. Haz del aprendizaje parte del trabajo.** La programación en pareja, la rotación, el acompañamiento, la revisión de código, las charlas internas y las revisiones de incidentes sin culpas enseñan en el contexto de problemas reales. Cuéntalos como aprendizaje en el plan de capacidad. Un equipo que aprende mientras entrega necesita menos tiempo lejos de la entrega.

### Reparte el conocimiento

**4. Mapea las tareas críticas y quién las ha hecho.** Enumera las tareas que deben hacerse con fiabilidad: restaurar una base de datos, rotar una clave, manejar un incidente grave, desplegar un cambio arriesgado. Para cada una, registra quién la ha realizado recientemente. El mapa muestra los puntos únicos de conocimiento. Valídalo con evidencia de trabajo reciente, ya que un inventario de habilidades basado en la autoevaluación se aleja de la realidad (véase el tema 9.3, Métricas de colaboración y traspasos).

**5. Haz formación cruzada deliberadamente.** Planifica la programación en pareja y la rotación para que cada tarea crítica tenga al menos dos personas que la hayan hecho últimamente. Practica con simulacros y game days donde sea posible. El objetivo es la resiliencia y unas guardias sostenibles, y alivia a los expertos de ser los únicos que pueden ayudar.

**6. Apoya las comunidades de práctica y la mentoría.** Fomenta grupos voluntarios en torno a oficios como la fiabilidad, las pruebas, la seguridad o la gestión de servicios, y dedica tiempo a ellos. Ofrece mentoría entre equipos. Mide la participación de forma ligera, a nivel de equipo, y pregunta qué han producido las comunidades: prácticas compartidas, herramientas, lecciones.

### Incorpora bien

**7. Mide el tiempo hasta la primera contribución.** Sigue cuánto tardan los nuevos miembros en completar un trabajo real en producción, y qué los ralentiza: acceso, documentación, preparación del entorno o propiedad poco clara. Corrige las causas y pide la opinión a quienes se incorporaron hace poco. Un comienzo rápido y de apoyo marca el tono y reduce el riesgo (véase el tema 6.4, Experiencia de usuarios y empleados).

**8. Da pronto a las personas nuevas trabajo real con apoyo.** Empieza con tareas pequeñas y reales y un compañero asignado. Revisa el progreso con regularidad y ajusta. Aprender haciendo, con redes de seguridad, es más rápido que un largo periodo de lectura.

### Evalúa el aprendizaje con honestidad

**9. Pregunta si la formación se aplicó.** Tras un curso o un evento, pregunta a la persona y a su equipo, unas semanas después, si lo usaron y cómo. Agrega las respuestas. Los cursos que nadie aplica deben cambiarse o abandonarse. El modelo de Kirkpatrick de cuatro niveles de evaluación de la formación, de la reacción al aprendizaje, al comportamiento y a los resultados, ofrece un vocabulario para ello, aunque unas preguntas de seguimiento sencillas son un buen comienzo.

**10. Usa las certificaciones para aquello en lo que son buenas.** Donde la ley, un contrato o la norma de entrada de un rol exijan una certificación, sigue la cobertura. En otros casos, trata la certificación como una señal de esfuerzo y de conocimiento. No fijes recuentos de certificados como metas, y no pagues ni promociones solo por ellos.

**11. Comparte las lecciones entre equipos.** Mantén un registro ligero de lecciones de incidentes, revisiones y mejoras, y sigue cuáles ha usado un equipo distinto del originador. Una lección que se queda en el equipo que la aprendió solo ha sido aprendida a medias por la organización. Revisa el registro en las comunidades de práctica.

**12. Mantén los datos individuales fuera de las clasificaciones.** No publiques inventarios de habilidades por persona, y no clasifiques nunca a las personas por horas de formación, certificados ni habilidades autoevaluadas. Agrega a nivel de equipo y deja que cada persona vea sus propios datos. Los individuos ocultarán sus lagunas si las lagunas cuentan en su contra.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Proporción de tiempo de aprendizaje protegido | Registrar el trabajo ordinario como aprendizaje; programar tiempo que luego se cancela | Contar solo el tiempo usado; comparar con los registros de tipo de trabajo y los comentarios del equipo |
| Profundidad de la formación cruzada | Enumerar a personas que nunca han hecho la tarea; contar una sola observación | Evidencia de trabajo reciente; resultados de simulacros |
| Tiempo hasta la primera contribución | Contar cambios triviales; arrancar el reloj tarde | Definir trabajo "real" en el registro; preguntar al nuevo miembro y a su compañero |
| Participación en comunidades | Imponer la asistencia; contar inscripciones | Solo voluntaria; preguntar qué produjo la comunidad |
| Tasa de aplicación de la formación | Presionar a las personas para que digan que la aplicaron; preguntar solo a los entusiastas | Agregado anónimo; seguimiento a nivel de equipo; mirar cambios observables |
| Cobertura de certificaciones pertinentes | Coleccionar certificados de roles que no los necesitan; tratar la certificación como competencia | Limitar a los requisitos genuinos; comprobar la capacidad práctica con otra evidencia |
| Lecciones compartidas entre equipos | Compartir lecciones triviales; contar publicaciones | Exigir un uso registrado por otro equipo; revisar la calidad |

Una lectura sana es un tiempo de aprendizaje protegido y usado, tareas críticas conocidas por varias personas, nuevos miembros que hacen contribuciones reales con rapidez, comunidades que producen práctica compartida, formación que la gente aplica y lecciones que viajan entre equipos.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Cursos formales y certificación | Estructurados, reconocidos, útiles para la entrada y los roles regulados | Costo; puede no transferirse al trabajo |
| Aprender en el trabajo | Relevante e inmediato | Desigual; depende de mentores y de tiempo |
| Tiempo protegido | Hace real el aprendizaje | Compite con el trabajo urgente; necesita disciplina |
| Aprender en el tiempo propio | Sin costo para la entrega | Insostenible; injusto; horas extra ocultas |
| Inventario de habilidades | Muestra brechas y riesgos | Subjetivo; puede convertirse en una clasificación |
| Evidencia de trabajo reciente | Fiable | Más esfuerzo de mantener |
| Programa de formación centralizado | Coherencia | Lento; puede no encajar con los equipos |
| Aprendizaje elegido por el equipo | Relevante; motivado | Calidad variable; necesita orientación |

La respuesta en prosa es proteger el tiempo de aprendizaje en la semana laboral, aprender sobre todo mediante el trabajo con algunos cursos formales donde ayuden, mantener el mapa de habilidades basado en evidencia reciente y evitar cualquier uso de los datos para clasificar a las personas.

## Preguntas para conversar con tu equipo

**1. ¿Qué aprendió cada uno de nosotros en el trabajo el último trimestre, y cómo lo aprendió?**
Compartid brevemente. Observa si la mayor parte del aprendizaje provino de cursos, del trabajo o de colegas. El facilitador debe preguntar qué lo hizo posible y qué se interpuso. Acordad un cambio que aumentaría el aprendizaje útil.

**2. ¿Qué tareas críticas solo podrían hacer una o dos de nosotras, y qué ocurriría si estuvieran ausentes?**
Enuméralas. Elige la más arriesgada y planificad cómo repartir el conocimiento: programación en pareja, un simulacro, un manual de procedimiento, rotación. Confirma que el plan no añade horas extra ocultas para los expertos.

**3. ¿Cuánto tardó nuestro último colega nuevo en hacer algo real, y qué lo ralentizó?**
Pregúntale. Sigue los pasos desde su primer día. Discutid el acceso, el entorno, la documentación y el apoyo. Acordad dos correcciones que ayudarían a la persona siguiente.

**4. ¿Cuándo cambió nuestra forma de trabajar un curso o un certificado?**
Recuerda ejemplos. Pregunta qué marcó la diferencia. Si vienen pocos a la mente, discutid por qué. Decidid qué aprendizaje vale la pena continuar y cuál abandonar.

**5. ¿Qué lección de un incidente reciente ha usado realmente otro equipo?**
Mira el registro de lecciones. Si nada ha viajado, pregunta cómo compartir con más eficacia: una comunidad, una charla breve, un cambio en una norma. Elige una lección que compartir este mes.

**6. ¿Es real nuestro tiempo de aprendizaje, y qué lo protege?**
Compara el plan con lo ocurrido. Discutid qué lo acapara: incidentes, plazos, expectativas. Acordad una regla para protegerlo, como tratar una petición urgente como un escalado a quien decide.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega aprenden sobre todo construyendo. Deben planificar el tiempo de aprendizaje, trabajar en pareja y rotar en el trabajo crítico, compartir lo que aprenden y participar en comunidades de práctica. Deben pedir el tiempo y las herramientas que necesitan y tratar el aprendizaje como parte de entregar bien.

### Equipos de servicio y operaciones

Los equipos de operaciones necesitan amplitud, porque cubren ausencias e incidentes a cualquier hora. Deben hacer formación cruzada en las tareas críticas, usar simulacros y game days y capturar lo que aprenden en manuales de procedimiento y revisiones. Su ritmo de guardias debe dejar espacio para el descanso y el aprendizaje.

### Liderazgo y gobernanza

Los líderes deciden si el aprendizaje es una prioridad o una ocurrencia tardía. Deben proteger el tiempo de aprendizaje en los planes, financiar las correcciones que revele la incorporación, evitar metas de horas de formación o de certificados y apoyar las comunidades. La gobernanza debe seguir la certificación solo donde se exija y mirar la evidencia de capacidad en uso.

### Clientes y usuarios

Los usuarios se benefician de equipos que conocen a fondo sus servicios y se mantienen al día del cambio: correcciones más rápidas, menos errores repetidos y mejores consejos. Notan cuando las personas que les ayudan parecen nuevas en el sistema o cuando el mismo problema se repite. También pueden enseñar a los equipos sobre su propio trabajo, y su implicación es una forma de aprendizaje.

## En la práctica: un ejemplo de ITIL ágil

El grupo de operaciones de tecnología de un banco regional tiene seis equipos que operan la banca básica, los pagos y los canales digitales. Los números siguientes son ilustrativos.

El panel de formación del grupo muestra una media de 24 horas de formación por persona el año pasado y 70 certificados obtenidos, y el director de formación está satisfecho. La jefa de operaciones hace una pregunta distinta: ¿pueden los equipos arreglárselas cuando faltan las personas clave? Pide a cada equipo que mapee sus tareas críticas y quién ha realizado cada una en los últimos seis meses. De 46 tareas críticas, solo 19 las habían realizado dos o más personas, una profundidad de formación cruzada del 41 por ciento. Catorce tareas las había hecho una sola persona. El tiempo hasta la primera contribución de las últimas ocho contrataciones tiene una mediana de 41 días, con un percentil 85 de 67, dedicados sobre todo a esperar accesos y a buscar documentación. Un breve seguimiento con 38 personas que completaron cursos encontró que el 31 por ciento decía haber aplicado lo aprendido en 90 días. Los equipos informan de que el tiempo de aprendizaje suele ser lo primero que se cancela en una semana ajetreada, y el tiempo protegido realmente usado es de aproximadamente el 3 por ciento de la capacidad.

El grupo hace cuatro cambios con los equipos. Cada equipo planifica un bloque de aprendizaje permanente de aproximadamente el 8 por ciento de la capacidad, y una regla por la que una cancelación debe acordarse con el responsable del equipo y registrarse. Los planes de programación en pareja y de rotación apuntan a las 14 tareas de una sola persona, empezando por las cinco más críticas, con simulacros cada trimestre. Una lista de verificación de incorporación y un compañero asignado reducen el retraso del acceso, y el plan de la primera semana incluye un pequeño cambio real. Los cursos los eligen los equipos de una lista corta, y se envía una pregunta de seguimiento a los 60 días. Una comunidad entre equipos sobre fiabilidad se reúne cada mes, y allí se comparten las lecciones de las revisiones de incidentes con una nota de quién las usó.

Un año después, la profundidad de la formación cruzada es del 78 por ciento, la mediana del tiempo hasta la primera contribución es de 19 días, la tasa de aplicación de la formación es del 64 por ciento y el tiempo de aprendizaje protegido usado es de aproximadamente el 7 por ciento de la capacidad. Seis lecciones de las revisiones han sido adoptadas por otros equipos. El director de formación pide una meta de 40 horas de formación por persona. La jefa de operaciones ofrece en su lugar medidas de profundidad de la formación cruzada, de aplicación y de tiempo hasta la primera contribución, explicando que las horas pueden cumplirse con sesiones que nadie usa. La decisión se registra, y el panel abandona las horas medias de formación. La cobertura de certificaciones se sigue solo para los roles en los que los reguladores la exigen.

## Perspectiva por sector

**Startup.** La gente lleva muchos sombreros y aprende deprisa bajo presión. Protege algo de tiempo para aprender, haz de la programación en pareja la opción por defecto y vigila los puntos únicos de conocimiento. Contratar generalistas ayuda. No construyas demasiado pronto un departamento de formación.

**Pequeña empresa.** Los presupuestos son ajustados, y una persona puede cubrir mucho. Usa aprendizaje de bajo costo: documentación de proveedores, eventos de la comunidad, mentoría de un asesor externo de confianza y formación cruzada donde sea posible. Asegura que al menos otra persona pueda manejar las tareas críticas, aunque sea de forma aproximada.

**Gran empresa.** La escala permite programas formales, comunidades y trayectorias profesionales. También invita a requisitos uniformes que no encajan con nadie. Ofrece un presupuesto y una plataforma de aprendizaje comunes, deja que los equipos elijan, apoya las comunidades internas y mide la capacidad por equipo. Alinea la certificación con las necesidades reales.

**Gobierno y sector público.** La escasez de habilidades, las reglas de contratación y los marcos de la función pública moldean el desarrollo. La certificación puede ser un requisito formal para algunos roles. Invierte en aprendizajes y en movilidad interna, conserva el conocimiento cuando terminan los contratos y usa comunidades entre organismos para compartir la práctica (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el propio tiempo, que es el principal, más los presupuestos de cursos y eventos, el esfuerzo de mantener el mapa de habilidades, el tiempo de mentoría y algunas herramientas para las comunidades. La programación en pareja y la rotación cuestan rendimiento a corto plazo.

Los retornos son resiliencia ante la ausencia y la rotación, una incorporación más rápida, menos errores repetidos, una resolución de problemas más rápida y mejor retención entre las personas que crecen. Construye el caso con tus propios datos: el número de tareas críticas conocidas por una sola persona, los días que tardan las nuevas contrataciones en ser productivas y el costo de ese tiempo, los incidentes que se prolongaron por la ausencia de expertos y la rotación de personal entre quienes dicen no tener espacio para crecer. Evita citar estimaciones publicadas de retornos de la formación salvo que puedas rastrear su método y su encaje. El costo de no aprender aparece tarde, como habilidades obsoletas y servicios frágiles (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Horas de formación como meta.** Compra asistencia. Mide la aplicación y la capacidad.
- **Certificados como prueba de habilidad.** Muestran una evaluación en un momento dado. Usa otra evidencia.
- **Aprender en el tiempo propio.** Oculta horas extra y es injusto. Protege el tiempo en la semana laboral.
- **Inventarios de habilidades autoevaluadas usados para clasificar.** La gente infla u oculta. Basa los mapas en el trabajo reciente y mantenlos a nivel de equipo.
- **Expertos héroes.** Una persona que lo sabe todo es un riesgo y una carga. Reparte el conocimiento.
- **Cursos elegidos centralmente para todos.** Encajan con pocos. Deja que los equipos elijan con orientación.
- **Cancelar primero el aprendizaje.** Enseña que el aprendizaje es opcional. Protégelo y trata las excepciones como decisiones.
- **Lecciones que se quedan en lo local.** La organización repite los errores. Compártelas y sigue su uso.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Tiempo y apoyo | Aprendizaje en el tiempo propio | Presupuesto de formación ocasional | Tiempo protegido en el plan de capacidad; aprendizaje elegido por el equipo | Tiempo usado con seguimiento; las cancelaciones son decisiones; los presupuestos siguen las necesidades del equipo | Tiempo de aprendizaje y trayectorias de crecimiento coordinados entre equipos y socios |
| Repartir el conocimiento | Los expertos cargan con el trabajo | Existe documentación | Tareas críticas mapeadas por evidencia reciente; programación en pareja y simulacros | Profundidad de la formación cruzada gestionada; incorporación medida y mejorada | El conocimiento fluye libremente entre equipos, proveedores y comunidades |
| Evaluar el aprendizaje | Cuenta la asistencia | Valoraciones de satisfacción con los cursos | Seguimientos de aplicación; certificación donde se exija | Lecciones compartidas y usadas entre equipos; formación cambiada según los resultados | Resultados del aprendizaje vinculados con los del servicio y compartidos con los socios |

## Lista de verificación

- [ ] El tiempo de aprendizaje está planificado dentro de la capacidad del equipo y se sigue como usado.
- [ ] Las tareas críticas están enumeradas, con quién realizó cada una recientemente.
- [ ] Cada tarea crítica tiene un plan para llegar al menos a dos personas con práctica.
- [ ] El tiempo hasta la primera contribución se mide para los nuevos miembros y se actúa sobre él.
- [ ] Las comunidades de práctica y la mentoría se apoyan y son voluntarias.
- [ ] A la formación se le da seguimiento con una pregunta sobre su aplicación.
- [ ] La certificación se sigue solo para los roles con un requisito genuino.
- [ ] Un registro de lecciones anota el reparto y el uso entre equipos.
- [ ] Los datos de habilidades se mantienen a nivel de equipo y no se usan nunca para clasificar a individuos.
- [ ] El aprendizaje no depende nunca de horas sin pagar.

## Prompts de IA

**Construye un mapa de tareas críticas.**

```text
Nuestro equipo opera [services]. Enumera las tareas críticas que deben hacerse
con fiabilidad (por ejemplo restaurar desde una copia de seguridad, rotar
credenciales, coordinar un incidente grave, desplegar cambios arriesgados) y
sugiere evidencia que podamos usar para registrar quién ha hecho cada una en los
últimos seis meses. Propón una tabla sencilla y una forma de revisarla con el
equipo sin clasificar a las personas. No inventes tareas nuestras más allá de lo
que describo. Enumera tus supuestos.
```

**Diseña un plan de incorporación.**

```text
Diseña un plan de incorporación para los primeros 30 días de un nuevo [role] que
se une a un equipo que opera [services]. Incluye la preparación de accesos, un
compañero asignado, un pequeño cambio real al final de la primera semana,
revisiones periódicas y qué medir (el tiempo hasta la primera contribución y qué
lo ralentizó). Mantenlo de apoyo y realista. Enumera tus supuestos y los
elementos que adaptar a nuestro contexto.
```

**Da seguimiento a la formación.**

```text
Redacta un breve conjunto de preguntas de seguimiento para enviar a las personas
60 días después de completar [course or event]. Pregunta si lo aplicaron y cómo,
qué se interpuso y qué ayudaría, de una forma que pueda agregarse a nivel de
equipo sin identificar a individuos. Sugiere cómo leer las respuestas y qué
cambiar. Enumera tus supuestos.
```

**Planifica un esfuerzo de reparto del conocimiento.**

```text
La tarea [description] solo la hacen [one or two people] en nuestro equipo.
Propón un plan para repartirla mediante programación en pareja, un simulacro y
documentación, con plazos realistas que protejan la carga de trabajo de esas
personas. Sugiere cómo sabremos que el plan funcionó, usando evidencia de
trabajo reciente. Enumera tus supuestos y riesgos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de habilidades o de aprendizaje.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de aprendizaje mide la capacidad en uso y lleva su vector de manipulación y su barrera de protección.

## Puntos clave

- Mide la capacidad en uso: quién ha hecho últimamente las tareas críticas y con qué rapidez contribuyen las personas nuevas.
- Protege el tiempo de aprendizaje en la semana laboral, dentro de un ritmo que pueda sostenerse.
- Reparte el conocimiento a propósito mediante programación en pareja, rotación, simulacros y comunidades.
- Haz seguimiento de si la formación se aplicó, y trata los certificados como evidencia, no como prueba.
- Comparte las lecciones entre equipos y sigue su uso.
- Mantén los datos de habilidades a nivel de equipo, y no clasifiques nunca a individuos.

## Referencias y lecturas complementarias

1. Senge, P. M., *The Fifth Discipline: The Art and Practice of the Learning Organization*, Doubleday, 1990.
2. Wenger, E., *Communities of Practice: Learning, Meaning, and Identity*, Cambridge University Press, 1998.
3. Polanyi, M., *The Tacit Dimension*, Doubleday, 1966.
4. Ericsson, K. A., Krampe, R. T., and Tesch-Römer, C., "The role of deliberate practice in the acquisition of expert performance," *Psychological Review*, 100(3), 1993.
5. Kirkpatrick, D. L., and Kirkpatrick, J. D., *Evaluating Training Programs: The Four Levels*, 3rd ed., Berrett-Koehler, 2006.
6. Skelton, M., and Pais, M., *Team Topologies*, IT Revolution, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Professional certification](https://en.wikipedia.org/wiki/Professional_certification).
9. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
10. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
11. Wikipedia, [T-shaped skills](https://en.wikipedia.org/wiki/T-shaped_skills).
12. Wikipedia, [Cross-training (business)](https://en.wikipedia.org/wiki/Cross-training_(business)).
13. Wikipedia, [Community of practice](https://en.wikipedia.org/wiki/Community_of_practice).
14. Wikipedia, [Mentorship](https://en.wikipedia.org/wiki/Mentorship).
15. Wikipedia, [Learning organization](https://en.wikipedia.org/wiki/Learning_organization).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
