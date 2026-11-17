# Métricas de colaboración y traspasos

**El trabajo se ralentiza y la calidad baja dondequiera que cambia de manos, así que mide los traspasos, la espera entre ellos y la dependencia de personas concretas, y usa los números para reunir a las personas adecuadas en lugar de contar quién habla con quién.**

## Resumen y motivación

Los principios del Manifiesto Ágil dicen que las personas de negocio y los desarrolladores deben trabajar juntos a diario durante todo el proyecto. La observación de fondo es antigua y sólida: la mayor parte del retraso en una organización de servicio no proviene de personas que trabajan despacio. Proviene del trabajo que espera entre personas. Una solicitud pasa del centro de servicios a un equipo de segunda línea, luego a un equipo de aplicaciones y luego a un administrador de bases de datos, y en cada paso se une a una cola, pierde contexto y corre el riesgo de ser devuelta. Las personas implicadas pueden ser rápidas cada una. El sistema es lento.

La gestión de servicios de TI (ITSM), tal como la codifica ITIL, lleva tiempo organizando el soporte en niveles y equipos, con el escalado como mecanismo para pasar un problema a alguien que pueda resolverlo. Esa estructura tiene ventajas: especialización, propiedad clara y acceso controlado. También crea traspasos, y los traspasos tienen un costo. La práctica ágil y DevOps responde construyendo equipos multifuncionales que llevan más trabajo de principio a fin y fomentando la colaboración en tiempo real. Las dos tradiciones llegan a conclusiones parecidas: menos traspasos, esperas más cortas entre ellos y personas que pueden resolver el problema trabajando juntas en él.

Varias ideas ayudan con la medición.

- **Traspasos y colas.** Cada vez que el trabajo pasa de un equipo a otro, suele esperar en una cola. El tiempo dedicado a esperar suele ser mucho mayor que el tiempo dedicado a trabajar. Por eso la eficiencia del flujo, presentada antes, suele ser baja (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). Un [cuello de botella](https://en.wikipedia.org/wiki/Bottleneck_(production)) es un punto de capacidad limitada en un proceso, y determina el rendimiento del conjunto.
- **La estructura da forma a la comunicación.** La [ley de Conway](https://en.wikipedia.org/wiki/Conway%27s_law) establece que las organizaciones diseñan sistemas que reflejan sus propias estructuras de comunicación. Lo inverso también es práctico: si quieres un sistema con menos dependencias, organiza los equipos para reducir las dependencias entre ellos. Los límites de los equipos crean traspasos, y los traspasos dan forma a la arquitectura.
- **Dependencias.** Una [dependencia](https://en.wikipedia.org/wiki/Dependency_(project_management)) es una relación en la que un trabajo no puede avanzar hasta que otro termina. Las dependencias entre equipos son una fuente importante de retraso, y pueden mapearse, contarse y reducirse.
- **Los costos de coordinación crecen con las personas.** La [ley de Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), de los ensayos de Frederick Brooks sobre proyectos de software, observa que añadir personas a un proyecto retrasado puede retrasarlo más, en parte por la sobrecarga de comunicación añadida. Más personas en una conversación no es automáticamente mejor.
- **Dependencia de individuos.** El [factor autobús](https://en.wikipedia.org/wiki/Bus_factor) es el número de personas que tendrían que no estar disponibles para detener un proyecto, y suele usarse para señalar el riesgo cuando el conocimiento reside en una sola cabeza. Es una propiedad de la distribución del conocimiento, no una valoración de ninguna persona.

Las medidas de colaboración tienen un lado oscuro. Contar mensajes, reuniones o vínculos de red como medida de la colaboración es fácil y tentador, y se desliza enseguida hacia la monitorización de las comunicaciones de las personas. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica al grupo y a la privacidad: cuando la "colaboración" se convierte en una meta, la gente produce actividad visible, y cuando se convierte en vigilancia, deja de hablar abiertamente (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Por eso las medidas de aquí miran los elementos de trabajo, los traspasos y las dependencias, y los patrones a nivel de equipo. No leen mensajes ni clasifican a individuos.

Este tema se conecta con las medidas de flujo de la Parte 2, las medidas de incidentes y solicitudes de la Parte 3 y los traspasos con proveedores de la parte anterior (véase el tema 8.4, Métricas de proveedores y contratos).

## Principios clave

- **Mide el trabajo, no las conversaciones.** Los traspasos, las esperas y las dependencias son propiedades de los elementos de trabajo y de los equipos.
- **Menos traspasos superan a traspasos más rápidos.** El mejor traspaso es el que no ocurre.
- **Reúne a las personas.** La colaboración en tiempo real suele eliminar toda una cadena de espera.
- **Haz visibles las dependencias y redúcelas.** Mapéalas, cuéntalas y cambia los límites de los equipos o la arquitectura donde más duelen.
- **Reparte el conocimiento deliberadamente.** Los puntos únicos de conocimiento son riesgos, y compartir es una actividad de diseño.
- **Protege la concentración.** La colaboración que llena cada hora de reuniones destruye el tiempo para hacer el trabajo.
- **Implica continuamente a las partes interesadas.** Las preguntas respondidas en horas sirven mejor que las respuestas recogidas en reuniones semanales.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Recuento de traspasos | Número de veces que un elemento de trabajo cambia de equipo propietario antes de completarse | mediana y percentil 85 de transferencias de equipo a equipo por elemento completado, por tipo de elemento | transferencias por elemento | Historial de asignaciones del ITSM o del seguimiento, agregado por equipo | Gestión de incidentes; gestión de solicitudes de servicio; habilitación de cambios | Equipos multifuncionales que llevan el trabajo de principio a fin | Mensual |
| Proporción de espera tras el traspaso | Proporción del tiempo transcurrido de un elemento dedicada a esperar tras un traspaso antes de que se reanude el trabajo | tiempo entre el traspaso y la primera acción del equipo receptor / tiempo total transcurrido, mediana entre elementos | porcentaje | Marcas de tiempo de asignación y de actividad | Gestión de incidentes; gestión de solicitudes de servicio | Eficiencia del flujo; tiempo en cola | Mensual |
| Tasa de reasignación | Proporción de elementos pasados entre equipos más de dos veces o devueltos a un equipo anterior | elementos reasignados más de dos veces o devueltos / elementos completados | porcentaje | Historial de asignaciones | Gestión de incidentes; gestión de problemas | Retrabajo y trabajo que rebota | Mensual |
| Retraso por dependencias | Tiempo que los elementos pasan bloqueados esperando a otro equipo | mediana y percentil 85 de días en un estado de bloqueado por otro equipo, con la dependencia nombrada | días | Estado de bloqueado del seguimiento y campo de dependencia | Habilitación de cambios; gestión de versiones y despliegues | Antigüedad de los elementos de trabajo bloqueados | Mensual |
| Tasa de resolución colaborativa | Proporción de incidentes resueltos por personas de varios equipos que trabajan juntas en tiempo real sin escalado secuencial | incidentes con una colaboración en tiempo real registrada (por ejemplo un canal o llamada compartidos) que se resolvieron sin más traspasos / incidentes de prioridad elegible | porcentaje | Registros de incidentes con etiqueta de colaboración | Gestión de incidentes; gestión de incidentes graves | Enjambre (swarming) sobre los problemas | Mensual |
| Cobertura de conocimiento | Proporción de componentes críticos con al menos un número indicado de miembros del equipo capaces de operarlos y cambiarlos | componentes críticos con al menos el número objetivo de personas capaces de operarlos y cambiarlos / componentes críticos | porcentaje | Mapa de habilidades y de propiedad mantenido por el equipo | Gestión del conocimiento; gestión de la continuidad del servicio | Propiedad compartida y propiedad colectiva del código | Trimestral |
| Tiempo de respuesta de las partes interesadas | Tiempo desde una pregunta de un equipo a una parte interesada hasta una respuesta utilizable | mediana y percentil 85 de horas desde que se registra la pregunta hasta que se registra la respuesta | horas | Registro de preguntas o campo del seguimiento para las preguntas abiertas | Gestión de niveles de servicio; gestión de relaciones con el negocio | Implicación continua de las partes interesadas | Mensual |

Agrega a nivel de equipo, de cola o de servicio, y no informes nunca por individuo. El recuento de traspasos excluye las asignaciones automáticas que no cambian el equipo propietario. La proporción de espera arranca cuando el elemento se asigna al equipo receptor y termina en su primera acción registrada. La cobertura de conocimiento usa el propio juicio del equipo sobre quién puede operar un componente, revisado con el equipo, y nunca clasifica a individuos. Los datos de colaboración provienen de etiquetas y registros de los elementos, no de la lectura de mensajes.

## Recomendaciones

### Mapea los traspasos

**1. Dibuja el camino de un elemento típico.** Elige un tipo común de solicitud o de incidente y sigue su camino desde el primer contacto hasta la resolución: cada equipo, cada cola, cada espera. Usa el historial del seguimiento para ejemplos reales, no el diagrama del proceso oficial. El mapa muestra dónde espera el trabajo y dónde rebota. Compártelo con los equipos implicados y pídeles que identifiquen el desperdicio que ven.

**2. Mide los traspasos y las esperas a partir del historial de los elementos de trabajo.** Usa las marcas de tiempo de asignación y de actividad para calcular el recuento de traspasos, la proporción de espera y la tasa de reasignación de cada tipo de elemento. Mira la distribución: la mayoría de los elementos pueden pasar una vez, mientras una larga cola rebota muchas veces. La cola es donde residen los mayores retrasos y la mayor frustración.

**3. Lee los datos con las personas que hacen el trabajo.** Una tasa de reasignación alta puede reflejar una propiedad poco clara, información que falta o una clasificación legítima. Pregunta a los equipos antes de concluir. Saben por qué rebotan los elementos y qué lo detendría.

### Reduce los traspasos y la espera

**4. Traslada la capacidad al trabajo.** Donde muchos elementos van a un segundo equipo para una acción sencilla, pregunta si podría darse al primer equipo el conocimiento, el acceso o la automatización para hacerla. El autoservicio y los manuales de procedimiento pueden eliminar traspasos enteros (véase el tema 3.7, Métricas de autoservicio y automatización). Cuida de que trasladar trabajo no se limite a sobrecargar al primer equipo.

**5. Usa la colaboración en lugar del escalado secuencial.** Para incidentes complejos o urgentes, reúne en tiempo real a las personas pertinentes, con una persona que coordine, en lugar de pasar el ticket por niveles. Esta práctica, a menudo llamada enjambre (swarming), elimina las esperas y la pérdida de contexto que crea el escalado por niveles. Sigue la tasa de resolución colaborativa y mira si mejoran los resultados y la satisfacción (véase el tema 3.4, Métricas de incidentes graves).

**6. Aclara la propiedad en los límites.** Para cada servicio y componente, indica quién es su responsable, cómo contactarlo y qué necesita en un traspaso. Una breve plantilla de la información requerida, acordada con el equipo receptor, reduce las devoluciones por detalles que faltan. Revisa los casos de reasignación para encontrar brechas de propiedad.

**7. Reduce las dependencias donde más duelen.** Mapea las dependencias entre equipos, cuenta con qué frecuencia causa cada una un retraso y ataca las peores. Las opciones incluyen cambiar la arquitectura, dar a un equipo la capacidad que sigue esperando o reorganizar los equipos en torno a los servicios. Los [equipos multifuncionales](https://en.wikipedia.org/wiki/Cross-functional_team) que contienen las habilidades necesarias para entregar un servicio de principio a fin minimizan las dependencias, e incorporan la colaboración continua a la estructura. La ley de Conway sugiere que la estructura y el diseño deben cambiarse juntos.

### Reparte el conocimiento y la implicación

**8. Haz visible la cobertura de conocimiento y mejórala.** Mantén un mapa sencillo de los componentes críticos y de las personas capaces de operar y cambiar cada uno. Busca los componentes conocidos por una sola persona, y planifica la programación en pareja, la documentación y la rotación para repartirlo. Trata el resultado como un riesgo del sistema. El objetivo es la resiliencia y un ritmo sostenible para las personas que más saben, ya que una persona que es la única experta no puede tomarse vacaciones.

**9. Mantén continuamente informadas a las partes interesadas.** Acordad cómo se contactará a las partes interesadas con preguntas y con qué rapidez deben llegar las respuestas. Un equipo que espera una semana una decisión sobre un detalle está esperando a la parte interesada, y el costo es real. Registra las preguntas y las respuestas, mide el tiempo de respuesta y úsalo en las conversaciones con las partes interesadas sobre su implicación.

**10. Protege el tiempo de trabajo concentrado.** La colaboración debe tener un propósito. Revisa las reuniones que llenan el calendario y pregunta de cada una qué decisión respalda. Reduce el número de personas en conversaciones que no las necesitan, en línea con la ley de Brooks. Empareja esto con las medidas de concentración del tema anterior sobre la salud del equipo (véase el tema 9.1, Salud del equipo y experiencia de desarrollo).

### Mantenlo honesto

**11. No midas el volumen de comunicación.** Contar mensajes, reuniones o vínculos de red dice poco sobre si la gente trabaja bien junta, e invita a monitorizar a los individuos. Si tu equipo elige usar el análisis de redes sociales para entender cómo fluye la información, hazlo con consentimiento, a nivel de grupo y para el propio aprendizaje del equipo, y nunca para valorar a individuos.

**12. Revisa las medidas de traspaso con los equipos y los proveedores.** Comparte los patrones entre los equipos y los proveedores implicados y acordad una o dos mejoras conjuntas. Sigue si bajan los recuentos de traspasos y las esperas. Para los límites con proveedores, incluye las medidas en las revisiones conjuntas (véase el tema 8.4, Métricas de proveedores y contratos).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Recuento de traspasos | Mantener los elementos asignados a un equipo mientras otros hacen el trabajo; reasignar a una cola compartida para evitar el recuento | Comprobar la actividad real por equipo; contar los traspasos por actividad, no solo por asignación |
| Proporción de espera tras el traspaso | Registrar una primera acción que es un mero acuse de recibo; asignar tarde al equipo correcto | Definir "primera acción" como un paso sustantivo; comparar con la satisfacción y el tiempo de resolución |
| Tasa de reasignación | Negarse a reasignar incluso cuando es erróneo; cerrar y reabrir elementos con otro equipo | Calidad de la resolución y tasa de reapertura; muestrear los elementos que rebotan |
| Retraso por dependencias | No registrar el estado de bloqueado; nombrar la dependencia equivocada | Comparar con el tiempo de ciclo y la antigüedad de los elementos; revisar el campo de dependencia con los equipos |
| Tasa de resolución colaborativa | Etiquetar todo incidente como colaborativo; crear canales compartidos sin trabajo real | Comprobar que la llamada o el canal incluyó a las personas que resolvieron; tiempo de resolución y resultados |
| Cobertura de conocimiento | Enumerar a personas que en teoría podrían hacer el trabajo; inflar el mapa | Evidencia de programación en pareja o de simulacros; preguntar quién realizó realmente el último cambio |
| Tiempo de respuesta de las partes interesadas | Registrar las preguntas tarde; marcar una respuesta como recibida cuando no es utilizable | La parte interesada confirma que la respuesta es utilizable; muestrear las preguntas |

Una lectura sana es menos traspasos en los elementos comunes, esperas más cortas en los límites que quedan, menos elementos que rebotan, dependencias que se reducen, más incidentes resueltos por personas que trabajan juntas, componentes críticos conocidos por varias personas y partes interesadas que responden en horas.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Soporte por niveles con escalado | Especialización, control del acceso | Traspasos, espera, pérdida de contexto |
| Equipos multifuncionales | Menos traspasos, propiedad compartida | Necesita habilidades amplias; puede duplicar especialistas |
| Resolución colaborativa | Más rápida, mejor aprendizaje | Reúne a varias personas a la vez; necesita coordinación |
| Escalado secuencial | Uso eficiente de los especialistas | Más lento para problemas complejos |
| Equipos especialistas centralizados | Profundidad de experiencia, normas coherentes | Cuellos de botella, colas |
| Especialistas integrados | Acceso rápido | Aislamiento; normas desiguales |
| Cultura de muchas reuniones | Conciencia compartida | Se come la concentración; ralentiza el trabajo |
| Comunicación escrita asíncrona | Preserva la concentración; registra las decisiones | Más lenta para asuntos urgentes o ambiguos |

La respuesta en prosa es mantener a los especialistas donde importa la profundidad, reunir a las personas en tiempo real para los problemas complejos o urgentes, reducir los traspasos mediante capacidad y propiedad clara y equilibrar las reuniones con concentración protegida.

## Preguntas para conversar con tu equipo

**1. Sigue el último incidente o solicitud que rebotó entre equipos. ¿Dónde esperó, y por qué?**
Usa el historial del elemento. Marca cada traspaso y cada espera. El facilitador debe buscar información que falta, propiedad poco clara y colas que nadie vigila. Acordad un cambio que habría detenido el rebote.

**2. ¿A qué equipo esperamos con más frecuencia, y qué necesitan de nosotros para ser más rápidos?**
Enumera las dependencias y los retrasos que causan. Invita al otro equipo a la conversación, o prepara preguntas para él. Acordad un cambio en la plantilla de traspaso o en el acuerdo de trabajo.

**3. ¿Qué saben hacer solo una o dos de nosotras, y qué ocurre cuando están ausentes?**
Nombra los componentes o las tareas. Pregunta qué plan repartiría el conocimiento: programación en pareja, documentación, rotación. El facilitador debe tener cuidado de tratarlo como un riesgo para el sistema y una cuestión de carga de trabajo de las personas expertas.

**4. ¿Cuándo funcionó mejor resolver un problema juntos en tiempo real que pasarlo a otros?**
Recuerda un ejemplo. ¿Qué lo hizo funcionar: las personas adecuadas, un coordinador, una visión compartida? Discutid cuándo usar este enfoque y cómo facilitarlo, como un canal permanente y reglas sobre quién se une.

**5. ¿Cuánto esperamos las respuestas de nuestras partes interesadas, y qué cuesta?**
Mira las preguntas abiertas y sus antigüedades. Discutid qué ralentiza las respuestas: disponibilidad, preguntas poco claras o autoridad poco clara. Acordad una expectativa con las partes interesadas y una forma de seguirla.

**6. ¿Cuáles de nuestras reuniones podrían sustituirse por una nota escrita o una decisión?**
Enumera las reuniones regulares y, para cada una, pregunta qué decisión respalda y quién necesita estar. Cancela o acorta una. Acordad proteger un bloque de tiempo sin reuniones.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega tienen muchas de las dependencias y sienten la espera. Deben mapear sus dependencias, pedir las capacidades que siguen esperando, compartir conocimiento para evitar puntos únicos y mantener cerca a las partes interesadas. Una composición multifuncional suele eliminar los mayores retrasos.

### Equipos de servicio y operaciones

Los equipos de operaciones y de soporte están en el centro de los traspasos: reciben, encaminan y resuelven. Deben mantener información clara de propiedad, usar la colaboración en tiempo real para los problemas difíciles y registrar con exactitud los traspasos. Saben qué límites causan más dolor y pueden decir qué información evitaría las devoluciones.

### Liderazgo y gobernanza

Los líderes dan forma a la estructura que crea los traspasos. Deben mirar los datos de traspasos y de dependencias al diseñar equipos y financiación, apoyar los equipos multifuncionales donde ayuden y evitar las medidas de volumen de comunicación. La gobernanza debe tratar los retrasos repetidos en un mismo límite como una cuestión estructural que corregir.

### Clientes y usuarios

Los usuarios sienten los traspasos como que los pasan de uno a otro, tener que repetirse y esperar. Hay que decirles quién es responsable de su problema y mantenerlos informados. Su experiencia de rebotar es una medida directa de lo bien que funciona la colaboración, y su retroalimentación debe leerse junto a los números (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

El grupo de TI de un minorista nacional opera un centro de servicios, un equipo de infraestructura, un equipo de plataforma de aplicaciones y varios equipos de producto. Los usuarios informan de que las solicitudes sobre el sistema de punto de venta tardan demasiado. Los números siguientes son ilustrativos.

La responsable del servicio sigue 60 solicitudes recientes. La solicitud mediana pasa por 3 equipos y el percentil 85 por 6. En el caso mediano, el 71 por ciento del tiempo transcurrido se dedica a esperar tras un traspaso antes de que actúe el equipo receptor. El 22 por ciento de las solicitudes se reasigna más de dos veces, a menudo entre los equipos de infraestructura y de plataforma, que creen cada uno que el otro es responsable del asunto. El tiempo bloqueado esperando a otro equipo tiene una mediana de 3 días para las solicitudes que implican certificados, y de 8 días en el percentil 85. El conocimiento de la renovación de certificados de la plataforma reside en un ingeniero, y otros dos componentes críticos los conoce solo una persona cada uno. Las partes interesadas de operaciones de tienda tardan una mediana de 26 horas en responder a las preguntas del equipo de entrega.

El grupo acuerda cuatro cambios con los equipos. Una breve tabla de propiedad indica qué equipo es responsable de cada componente del servicio de punto de venta y qué información debe contener un traspaso. El centro de servicios recibe acceso a manuales de procedimiento y automatización para las renovaciones de certificados, lo que elimina un traspaso común. Para los incidentes prioritarios, el grupo crea un canal permanente y una regla por la que el coordinador del incidente reúne de inmediato a las personas pertinentes, en lugar de escalar por niveles. El equipo de plataforma pone a una segunda y una tercera persona en pareja en el proceso de certificados, y planifica una programación en pareja similar para los otros dos componentes, con tiempo protegido en el plan. El equipo de entrega y operaciones de tienda acuerdan una respuesta el mismo día a las preguntas bloqueantes, con seguimiento en un registro de preguntas.

Tres meses después, la solicitud mediana pasa por 2 equipos, la proporción de espera baja al 38 por ciento y la tasa de reasignación al 9 por ciento. Las solicitudes relacionadas con certificados tienen una mediana de tiempo bloqueado de menos de un día. La cobertura de conocimiento de los componentes críticos sube del 52 por ciento al 81 por ciento. La mediana del tiempo de respuesta de operaciones de tienda baja a 7 horas. Al responsable de TI le piden una medida de cuánto se comunican los equipos. La responsable del servicio explica que el volumen de mensajes dice poco sobre si fluye el trabajo, y que seguirlo podría minar la confianza, y ofrece en su lugar las medidas de traspasos y de espera. La decisión se registra, y la tabla de propiedad se añade a la descripción del servicio.

## Perspectiva por sector

**Startup.** Los equipos pequeños colaboran de forma natural, y los traspasos aparecen cuando surgen especialistas. Mantén los equipos multifuncionales el mayor tiempo posible, documenta la propiedad con ligereza y vigila el conocimiento en manos de una sola persona. No importes demasiado pronto el soporte por niveles.

**Pequeña empresa.** Una o dos personas pueden cubrirlo todo, y el mayor riesgo es la dependencia de ellas. Comparte el conocimiento mediante manuales de procedimiento sencillos y cubre las ausencias. Los traspasos a proveedores son el límite principal, así que mantén contactos y rutas de escalado claros.

**Gran empresa.** La escala crea muchos equipos, capas y proveedores, y los traspasos se multiplican. Mapea los caminos más comunes de los elementos, diseña los límites de los equipos en torno a los servicios y usa roles de coordinación para los incidentes entre equipos. Comparte los datos de traspasos entre equipos para que los límites reciban atención conjunta.

**Gobierno y sector público.** La responsabilidad suele estar dividida entre organismos, contratistas y límites legales, y los traspasos implican contratación y aprobación formal. Haz explícita la tabla de propiedad, usa revisiones conjuntas con los contratistas y canales compartidos para los incidentes que cruzan límites (véase el tema 8.4, Métricas de proveedores y contratos).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de extraer y analizar el historial de asignaciones, el tiempo de los equipos para seguir caminos y acordar la propiedad, el costo de la formación cruzada y cualquier herramienta para la colaboración en tiempo real. Reestructurar los equipos es una decisión mayor con sus propios costos.

Los retornos son tiempos de resolución y de entrega más cortos, menos retrabajo por elementos que rebotan, menor riesgo por los puntos únicos de conocimiento y un entorno de trabajo más sereno. Construye el caso con tus propios datos: la proporción del tiempo transcurrido dedicada a esperar, el número de elementos que rebotan, el costo de los retrasos en el peor límite y el efecto de las ausencias de personas clave en incidentes pasados. Evita citar cifras publicadas sobre el costo de los traspasos salvo que puedas rastrear la fuente y el contexto. Cuenta el costo de los cambios y compáralo con el retraso eliminado (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar mensajes o reuniones.** Premia el ruido e invita a la vigilancia. Mide el flujo del trabajo.
- **Optimizar la rapidez de cada traspaso.** El objetivo son menos traspasos. Elimínalos donde puedas.
- **Culpar al equipo receptor de las esperas.** La causa suele ser la cola y la estructura. Mira el sistema.
- **Escalar por defecto.** Los niveles secuenciales añaden espera. Reúne a las personas para los problemas complejos.
- **Propiedad poco clara.** Los elementos rebotan. Publica una tabla de propiedad y mantenla al día.
- **Expertos héroes.** Los puntos únicos de conocimiento son un riesgo y una carga. Reparte el conocimiento deliberadamente.
- **Las reuniones como colaboración.** Pueden desplazar el trabajo. Revísalas frente a las decisiones.
- **Tratar la cobertura de conocimiento como una valoración individual.** Se convierte en una clasificación. Mantenla como una medida del sistema.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Visibilidad de los traspasos | Anécdotas | Caminos dibujados para unos pocos servicios | Recuento de traspasos, proporción de espera y reasignaciones medidos a partir del historial | Medidas revisadas con los equipos y vinculadas a los resultados | Visión compartida entre equipos y proveedores; límites rediseñados a partir de los datos |
| Reducción de traspasos | Escalar por defecto | Algunos manuales de procedimiento y plantillas | Tablas de propiedad; capacidad trasladada al primer equipo; colaboración para los problemas difíciles | Dependencias mapeadas y reducidas; resolución colaborativa con seguimiento | Equipos organizados en torno a servicios con dependencias mínimas en toda la organización |
| Conocimiento y partes interesadas | Los expertos cargan con todo | Intercambio informal | Cobertura de conocimiento mapeada; preguntas de las partes interesadas registradas | Cobertura y tiempos de respuesta gestionados; programación en pareja planificada | El conocimiento y las decisiones fluyen libremente entre equipos, proveedores y partes interesadas |

## Lista de verificación

- [ ] El camino de un elemento típico se ha seguido a partir del historial real del seguimiento.
- [ ] El recuento de traspasos, la proporción de espera y la tasa de reasignación se miden por tipo de elemento.
- [ ] La propiedad de cada servicio y componente está publicada y al día.
- [ ] Una plantilla de traspaso indica la información que necesita el equipo receptor.
- [ ] Los incidentes complejos o urgentes usan colaboración en tiempo real con un coordinador.
- [ ] Las dependencias entre equipos están mapeadas, y se están reduciendo las peores.
- [ ] La cobertura de conocimiento de los componentes críticos está mapeada, con un plan para repartirla.
- [ ] Las preguntas de las partes interesadas se registran y se revisan los tiempos de respuesta.
- [ ] Ninguna medida cuenta mensajes, reuniones ni comunicación individual.
- [ ] Los resultados se comparten con los equipos y proveedores implicados.

## Prompts de IA

**Analiza un camino de elementos de trabajo.**

```text
Aquí hay historiales de asignación anonimizados de [number] [type of item]:
elemento, secuencia de equipos, marcas de tiempo de asignación y de primera
acción: [paste]. Calcula o describe los recuentos de traspasos y las esperas,
identifica los caminos comunes y la larga cola, y sugiere las razones probables
de la espera y los rebotes, con preguntas para hacer a los equipos. No infieras
nada sobre individuos. Enumera tus supuestos.
```

**Redacta una tabla de propiedad.**

```text
Redacta una tabla de propiedad para el servicio [name] con estos componentes y
equipos: [list]. Para cada componente incluye el equipo propietario, cómo
contactarlo, qué debe contener un traspaso y la ruta de escalado. Señala los
componentes cuya propiedad parezca poco clara o compartida. Mantenla en una
página. Enumera tus supuestos y las preguntas para los equipos.
```

**Planifica el reparto del conocimiento.**

```text
Nuestros componentes críticos y el número de personas capaces de operar cada uno
son: [paste]. Propón un plan para repartir el conocimiento de los componentes
conocidos por menos de [number] personas: programación en pareja, documentación,
simulacros y rotación. Sugiere cómo proteger la carga de trabajo de los
expertos durante el plan y cómo seguir el progreso sin clasificar a individuos.
Enumera tus supuestos y riesgos.
```

**Diseña un enfoque colaborativo para los incidentes.**

```text
Diseña un enfoque ligero para la resolución colaborativa en tiempo real de
incidentes prioritarios en [type of organization] con [teams]. Incluye cómo
abrir un espacio compartido, quién coordina, quién está invitado, qué se
registra y cómo evitar reunir a demasiadas personas. Incluye medidas para saber
si ayuda. Enumera tus supuestos y cautelas.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de traspasos o de colaboración.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de colaboración mide el trabajo y no a los individuos, con su vector de manipulación y su barrera de protección.

## Puntos clave

- La mayor parte del retraso reside en las esperas entre traspasos, así que mide el recuento de traspasos, la proporción de espera y las reasignaciones a partir del historial de los elementos de trabajo.
- Reduce los traspasos trasladando la capacidad al trabajo, aclarando la propiedad y mapeando y recortando las dependencias.
- Reúne en tiempo real a las personas adecuadas para los problemas complejos o urgentes.
- Reparte el conocimiento de los componentes críticos, y trata los puntos únicos de conocimiento como un riesgo del sistema.
- Mantén continuamente implicadas a las partes interesadas, con respuestas rápidas a las preguntas bloqueantes.
- No midas nunca el volumen de comunicación ni valores a los individuos por su colaboración.

## Referencias y lecturas complementarias

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
