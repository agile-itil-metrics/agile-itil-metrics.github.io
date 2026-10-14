# Métricas de autoservicio y automatización

**Mide el autoservicio por si la gente obtuvo lo que necesitaba sin ayuda, y mide la automatización por el trabajo que elimina y los fallos que crea, porque un contacto que nunca llegó solo es un éxito si el problema se resolvió.**

## Resumen y motivación

El autoservicio y la automatización son las dos principales formas en que una organización de servicio quita trabajo rutinario a su gente. El [autoservicio](https://en.wikipedia.org/wiki/Self-service_software) permite a un usuario resolver un problema u obtener algo por sí solo, mediante un portal, un artículo de conocimiento, una página de restablecimiento de contraseña o un [chatbot](https://en.wikipedia.org/wiki/Chatbot). La [automatización](https://en.wikipedia.org/wiki/Automation) permite a un sistema ejecutar los pasos que antes ejecutaba una persona, como crear una cuenta, reiniciar un servicio o cerrar un ticket una vez que un monitor confirma la recuperación. Ambos apuntan al mismo resultado: menos tareas repetitivas para las personas, resultados más rápidos para los usuarios y más tiempo para el trabajo que requiere criterio.

Las ideas encajan en ambas tradiciones. En [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la práctica de gestión de solicitudes de servicio espera que las solicitudes bien entendidas y repetibles se manejen mediante flujos estándar con toda la automatización que sea sensata, y las prácticas de gestión de incidentes y de gestión del conocimiento esperan que haya buena información disponible para los usuarios y el personal de soporte en el punto útil más temprano. La práctica ágil y de DevOps llega al mismo lugar por otro camino: la [infraestructura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code), las canalizaciones y la disciplina de eliminar el trabajo repetitivo (toil), que los libros de ingeniería de fiabilidad de sitios de Google definen como trabajo manual, repetitivo y automatizable que crece con el servicio. La idea compartida suele llamarse "desplazar hacia la izquierda" (shift left): mover la resolución de un problema hacia el usuario, o hacia el punto más barato y más temprano de la cadena de soporte, y lejos de la cola de especialistas.

El lenguaje de desplazar hacia la izquierda invita a un error de medición. Los equipos ven que un contacto evitado es barato y entonces cuentan los contactos evitados como éxito. El recuento es fácil de producir, porque una visita al portal que no terminó en un ticket se ve idéntica a una visita al portal en la que el usuario se rindió. Este tema parte, por tanto, del resultado del usuario. Define qué significa el éxito del autoservicio, cómo estimar el desvío sin atribuirse el mérito del abandono, cómo medir la cobertura y la fiabilidad de la automatización y cómo ver el efecto de desplazar hacia la izquierda sobre el volumen y la complejidad. Las medidas relacionadas de volumen y prioridad están en el tema 3.2, Volumen y prioridad de incidentes, el lado de las solicitudes está en el tema 3.5, Métricas de cumplimiento de solicitudes de servicio, y el lado del conocimiento está en el tema 3.6, Métricas de gestión del conocimiento.

Términos usados en este tema:

- **Nivel 0 (o nivel de autoservicio)**: resolución por el usuario sin contactar con el personal. El nivel 1 es la primera línea de soporte, normalmente el centro de servicios, y los niveles 2 y 3 son los niveles de especialistas y de ingeniería.
- **Desvío**: un contacto que de otro modo habría llegado al personal y se resolvió en cambio en el nivel 0. No puede observarse directamente, por lo que siempre es una estimación.
- **Caída al personal (fall-through)**: un usuario que probó el autoservicio, no tuvo éxito y luego contactó con el personal por la misma necesidad.
- **Manual de procedimiento (runbook)**: un procedimiento documentado para una tarea operativa rutinaria. Un [manual de procedimiento](https://en.wikipedia.org/wiki/Runbook) es el primer paso habitual para automatizarla.
- **Trabajo repetitivo (toil)**: trabajo manual, repetitivo y automatizable sin valor duradero (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).
- **Catálogo de servicios**: la lista de servicios y solicitudes estándar ofrecidos a los usuarios.

## Principios clave

- **Cuenta resultados, no contactos evitados.** Una sesión en el portal sin ticket es un éxito solo cuando se atendió la necesidad del usuario. Define el éxito desde el lado del usuario y verifícalo con una señal de seguimiento.
- **El desvío es una estimación, así que etiquétalo como tal.** Indica el método, la comparación usada y la incertidumbre. No presentes nunca una cifra de desvío estimada como un hecho medido.
- **Mide la vía de caída al personal.** El camino desde un intento de autoservicio fallido hasta un contacto con personal es donde vive la mayor parte del fallo oculto. Infórmalo junto a cada número de éxito.
- **La automatización tiene un lado de costo.** Cada flujo automatizado necesita mantenimiento, monitorización y una forma de fallar con seguridad. Mide juntas la cobertura y la fiabilidad, y cuenta el esfuerzo dedicado a mantener viva la automatización.
- **Desplazar hacia la izquierda cambia la mezcla además del volumen.** Cuando el trabajo fácil sale de la cola, el trabajo restante es más difícil y más lento de media. Lee el tiempo de resolución y el tiempo de atención teniendo esto en cuenta (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).
- **Las métricas describen servicios y flujos.** Informa por elemento del catálogo, familia de artículos o flujo de automatización. No clasifiques nunca a los agentes por a cuántos usuarios empujaron hacia el autoservicio.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de éxito del autoservicio | Proporción de sesiones de autoservicio en que se atendió la necesidad del usuario sin contacto con el personal | Sesiones que terminaron en un resultado completado (solicitud enviada y cumplida, artículo marcado como útil, restablecimiento completado) sin contacto con el personal sobre la misma necesidad en 7 días, divididas entre todas las sesiones que iniciaron una tarea. El reloj arranca en la primera acción significativa en el portal y se detiene al completarse o al abandonarse. Excluye el tráfico de bots, las cuentas de prueba y la mera navegación | Porcentaje | Registros del portal y de identidad, sistema de tickets, analítica de sesiones | Gestión de solicitudes de servicio; gestión del conocimiento | Ciclo de retroalimentación del cliente; criterios de aceptación basados en resultados | Mensual |
| Tasa de desvío estimada | Proporción estimada de la demanda resuelta en el nivel 0 que de otro modo habría llegado al personal | Compara la tasa de contactos por 1.000 usuarios activos de un servicio antes y después de un cambio de autoservicio, o frente a un grupo de control, ajustada por cambios de demanda conocidos. Se enuncia como una estimación con el método nombrado. Excluye los contactos que pasaron a otro canal | Porcentaje (estimación) | Sistema de tickets, recuentos de población de usuarios, datos de experimentos o de cohortes | Centro de servicios; gestión de incidentes | Experimento con un grupo de control; prueba A/B | Trimestral |
| Tasa de caída al personal | Proporción de intentos de autoservicio fallidos que terminan en un contacto con personal sobre la misma necesidad | Contactos con personal abiertos en los 7 días siguientes a una sesión de autoservicio abandonada o sin éxito por el mismo usuario sobre el mismo tema, divididos entre las sesiones sin éxito. El reloj arranca al final de la sesión. Excluye los contactos no relacionados | Porcentaje | Registros del portal unidos al sistema de tickets por usuario y tema | Centro de servicios; gestión del conocimiento | Vía de escalado en una definición de terminado; comentarios del soporte | Mensual |
| Adopción del autoservicio (proporción de portal primero) | Proporción de solicitudes elegibles e informes de incidentes planteados por canales de autoservicio | Elementos creados por portal, bot o API, divididos entre todos los elementos de las entradas del catálogo que ofrecen una vía de autoservicio. Excluye los elementos para los que no existe una vía de autoservicio | Porcentaje | Campo de canal del sistema de tickets, configuración del catálogo | Gestión de solicitudes de servicio; gestión del catálogo de servicios | Seguimiento de la adopción tras una versión | Mensual |
| Cobertura de la automatización | Proporción de trabajo repetible elegible completado por automatización sin ningún paso manual | Elementos completados por un flujo automatizado de extremo a extremo, divididos entre todos los elementos de tipos juzgados automatizables. Cuenta el tipo como automatizable solo si una lista de candidatos escrita lo nombra. Excluye el trabajo puntual y los elementos que la automatización rechazó | Porcentaje | Sistema de tickets, registros de la plataforma de automatización, lista de candidatos | Gestión de solicitudes de servicio; gestión de despliegues | Automatización de la definición de terminado; canalización como código | Mensual |
| Tasa de fallos y retrabajo de la automatización | Proporción de ejecuciones automatizadas que fallaron, necesitaron reparación manual o produjeron un resultado corregido después | Ejecuciones automatizadas que dieron error, se revirtieron o fueron seguidas de una corrección manual en 7 días, divididas entre todas las ejecuciones automatizadas. El reloj arranca al comenzar la ejecución. Excluye los ensayos planificados | Porcentaje | Registros de la plataforma de automatización, sistema de tickets, registros de cambios | Habilitación de cambios; gestión de incidentes | Tasa de fallos de cambio; estabilidad de compilación y pruebas | Semanal |
| Tiempo de intervención manual por tipo de solicitud | Esfuerzo del personal dedicado a un tipo de solicitud que es candidato a la automatización | Minutos de trabajo efectivo registrados por el personal en elementos del tipo en el periodo, resumidos como mediana y percentil 85 por elemento. Estimado por muestreo donde el tiempo no se registra. Excluye el tiempo de espera | Minutos por elemento | Muestreo de tiempos, registros de trabajo de los tickets | Gestión de solicitudes de servicio | Seguimiento del trabajo repetitivo; desperdicio en el flujo de valor | Trimestral |
| Distribución por niveles (proporción desplazada a la izquierda) | En qué punto de la cadena de soporte se resuelven los elementos | Elementos resueltos en cada nivel (0, 1, 2, 3) divididos entre todos los elementos resueltos del periodo. El nivel es el nivel más alto que hizo trabajo efectivo. Excluye los elementos cancelados antes de la clasificación | Porcentaje por nivel | Grupo resolutor del sistema de tickets e historial de asignaciones | Gestión de incidentes; centro de servicios | Patrones de trabajo en grupo y de escalado; equipos multifuncionales | Mensual |

Todas se miden por servicio, elemento del catálogo o flujo, nunca por persona. Las medidas de tiempo deben mostrarse como la mediana más un percentil alto, como explica la introducción del tema sobre alfabetización estadística (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Recomendaciones

### Define el éxito desde el lado del usuario

**1. Escribe qué significa "obtuve lo que necesitaba" para cada vía de autoservicio.** Para un restablecimiento de contraseña es un restablecimiento completado y un inicio de sesión exitoso. Para una solicitud es el cumplimiento, no el envío. Para un artículo es un usuario que no volvió a contactar con el personal sobre la misma necesidad. Una definición que se detiene en "vio la página" mide tráfico.

**2. Une las sesiones de autoservicio con los contactos posteriores.** La evidencia más fuerte de fallo es un contacto con personal sobre el mismo tema poco después de una sesión. Vincula ambos por usuario y tema donde lo permitan las normas de privacidad, y donde no, usa recuentos agregados por tema y día. La unión convierte una vaga historia de satisfacción en una tasa de caída al personal que puedes mejorar.

**3. Pregunta a los usuarios con una sola pregunta en el punto de salida.** Una pregunta como "¿Esto resolvió tu problema?" da una señal directa que los registros no pueden dar. Trata las respuestas como una muestra, lee los comentarios de texto libre y compara a quienes responden con quienes no, para que los usuarios más satisfechos no definan el resultado (véase el tema 6.1, Métricas de satisfacción del cliente).

### Estima el desvío con honestidad

**4. Prefiere una comparación a un contador.** La estimación más limpia proviene de un grupo de control, de un despliegue por fases o de una vista de antes y después de los contactos por 1.000 usuarios activos del servicio afectado. Contar "sesiones que no se convirtieron en tickets" sobrestima el efecto, porque muchos de esos usuarios nunca tuvieron una necesidad que el personal habría visto. Indica el método y la incertidumbre junto a la cifra.

**5. Normaliza el volumen frente al uso.** Una caída del número de tickets puede seguir a una caída de usuarios, a un ciclo de versiones tranquilo o a un cambio estacional. Divide entre usuarios activos o entre transacciones antes de sacar conclusiones (véase el tema 3.2, Volumen y prioridad de incidentes). Anota el gráfico con versiones, campañas y cambios en el portal.

**6. Mantén el desvío fuera de las metas.** Una meta de desvío premia esconder la vía de contacto, enterrar el número de teléfono y cerrar pronto las sesiones de chat. Usa el desvío como una estimación para aprender y deja la meta en los resultados del usuario, como la tasa de éxito del autoservicio y el elemento sin resolver más antiguo.

### Mide la automatización como un producto, no como un proyecto

**7. Mantén una lista de candidatos y mide la cobertura frente a ella.** La cobertura de "todo el trabajo" es una mala medida, porque la mayor parte del trabajo no es automatizable. Mantén una lista escrita y corta de tipos de solicitud e incidente que sean repetibles, bien entendidos y frecuentes, ordénala por tiempo de intervención manual y volumen, e informa la cobertura frente a esa lista. Revisa la lista cada trimestre para que el denominador sea honesto.

**8. Empareja la cobertura con la fiabilidad.** Un flujo automatizado que falla una ejecución de cada diez, o que produce en silencio el resultado equivocado, puede costar más que la tarea manual que sustituyó. Sigue la tasa de fallos y retrabajo, el tiempo de detección de una ejecución fallida y la frecuencia con que una persona tiene que reparar el resultado. Usa las prácticas de manejo de errores que describe la comunidad de ingeniería de fiabilidad de sitios: pasos idempotentes, alertas claras y una alternativa manual segura (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

**9. Cuenta el mantenimiento.** Las automatizaciones necesitan responsables, control de versiones, pruebas y actualizaciones cuando cambian los sistemas que las rodean. Registra el tiempo dedicado a mantener cada flujo y compáralo con el tiempo de intervención manual que eliminó. Una automatización que cuesta más mantener en marcha de lo que ahorra es candidata a retirarse, lo cual es un resultado normal, no un fallo.

### Vigila el efecto de desplazar hacia la izquierda

**10. Espera que el trabajo restante sea más difícil.** Cuando los contactos rutinarios salen del centro de servicios, el tiempo medio de atención y la resolución en el primer contacto del nivel 1 suelen empeorar aunque el servicio sea mejor. Informa la distribución por niveles y la mezcla de categorías junto a esas medidas, y acuerda de antemano con la dirección que una subida del tiempo de atención tras un desvío exitoso es esperable (véase el tema 3.1, Métricas del centro de servicios).

**11. Cierra el ciclo con el conocimiento y con la gestión de problemas.** Cada caída al personal es evidencia de un artículo que falta o es deficiente, de un formulario confuso o de un defecto sin corregir. Encamina los temas principales de caída al personal a los responsables del conocimiento y, cuando la causa sea un defecto, a la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas). Revisa la lista cada mes e informa cuántos elementos se corrigieron.

**12. Comparte la capacidad que liberas.** Si la automatización y el autoservicio eliminan trabajo, decide qué compra el tiempo liberado: trabajo de mejora, correcciones proactivas o formación. Los equipos que no ven ningún beneficio de la automatización dejan de proponerla. Sigue a lo largo del tiempo la proporción planificada de capacidad para la mejora (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de éxito del autoservicio | Contar cualquier formulario completado o cualquier visita a una página como éxito; retirar la pregunta "¿esto ayudó?" cuando bajan las puntuaciones; excluir los temas difíciles del denominador | Tasa de caída al personal y una muestra de sesiones cerradas leída por una persona; informar las reglas del denominador |
| Tasa de desvío estimada | Esconder la vía de contacto; añadir pasos antes del contacto; clasificar toda disminución de tickets como desvío sea cual sea la causa | Contactos por 1.000 usuarios activos, satisfacción de los usuarios del servicio afectado y el método escrito junto al número |
| Tasa de caída al personal | Definir la ventana de coincidencia tan corta que los regresos queden fuera de ella; cerrar el contacto de seguimiento como duplicado | Tasa de contactos repetidos en todos los canales; revisión de una muestra de contactos de regreso |
| Adopción del autoservicio (proporción de portal primero) | Forzar todas las solicitudes al portal sin importar si encajan; reetiquetar los tickets creados por teléfono como tickets del portal | Tasa de éxito del autoservicio y esfuerzo del usuario; proporción de solicitudes que no tienen una vía de portal viable |
| Cobertura de la automatización | Elegir elementos fáciles para la lista de candidatos; hacer crecer el denominador con tareas triviales; contar como automatizados flujos parcialmente manuales | Lista de candidatos escrita y revisada cada trimestre; tasa de fallos y retrabajo de la automatización; tiempo de intervención manual de los elementos restantes |
| Tasa de fallos y retrabajo de la automatización | Excluir las reparaciones manuales del recuento; dejar que las ejecuciones fallidas se reintenten en silencio hasta que tengan éxito; etiquetar los fallos como "ensayos planificados" | Registros de incidentes y alertas vinculados a los flujos; tiempo de detección de una ejecución fallida; auditoría por muestreo de los resultados |
| Tiempo de intervención manual por tipo de solicitud | No registrar el tiempo de los elementos que parecen manuales; asignar el tiempo a otra categoría; muestrear solo los días tranquilos | Plan de muestreo escrito y revisado; comparar con el tiempo de ciclo y la antigüedad de la cola del mismo tipo |
| Distribución por niveles (proporción desplazada a la izquierda) | Subir la proporción resuelta en el nivel 1 reclasificando escalados, o cerrando elementos en el nivel 1 y reabriéndolos en el nivel 2 como elementos nuevos | Tasa de reapertura y tasa de tickets vinculados; muestra de calidad de la resolución; satisfacción del cliente por nivel |

Una lectura sana muestra el éxito del autoservicio subiendo junto con una tasa de caída al personal estable o decreciente, el desvío estimado enunciado con su método, la cobertura de la automatización creciendo frente a una lista de candidatos revisada mientras los fallos y el retrabajo se mantienen bajos, y una distribución por niveles que mueve el trabajo más pronto sin subir las tasas de reapertura ni bajar la satisfacción. Si un número mejora mientras su barrera de protección empeora, trata la mejora como no demostrada.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Autoservicio primero | Resultados inmediatos para los usuarios, menor costo marginal, disponible a cualquier hora | Los usuarios con necesidades complejas o inusuales pueden sentirse abandonados; un contenido débil crea más contactos de los que elimina |
| Contacto con personal primero | Ayuda personal, criterio y oportunidad de notar problemas inusuales | Más lento, costoso y dependiente de la disponibilidad del personal |
| Estimar el desvío con un grupo de control | Evidencia creíble del efecto | Requiere trabajo de diseño y tolerancia a un grupo que no recibe el cambio |
| Contar sesiones sin tickets | Barato y siempre disponible | Sobrestima el éxito; invita a la manipulación; no puede distinguir el éxito del abandono |
| Automatización amplia | Ejecución coherente y menos trabajo repetitivo | Carga de mantenimiento, modos de fallo que escalan y habilidades que pueden desvanecerse en el equipo |
| Automatización selectiva de flujos estables | Mejor retorno por el esfuerzo y menos sorpresas | Deja en su sitio algo de trabajo manual, que necesita su propia atención |

La respuesta en prosa es automatizar lo que es frecuente, estable y bien entendido, y mantener a una persona disponible donde la necesidad no sea clara o lo que está en juego sea alto. El autoservicio debe juzgarse por si se ayudó a la gente, con la vía atendida por personal visible. Los ahorros de desplazar hacia la izquierda son reales solo cuando el resultado para el usuario se sostiene, así que cuenta ambos lados.

## Preguntas para conversar con tu equipo

**1. Cuando un usuario abre el portal y se va sin plantear un ticket, ¿qué suponemos que ocurrió, y cómo lo averiguaríamos?**
Pide al grupo que enumere las historias posibles: el usuario encontró la respuesta, se rindió, llamó en su lugar o preguntó a un colega. Mira qué datos las separarían, como un contacto de seguimiento, una pregunta de salida o una muestra de sesiones. El facilitador debe anotar qué suposición está hoy en el panel y quién depende de ella. Cierra acordando un cambio que sustituya una suposición por evidencia.

**2. ¿Cómo estimamos actualmente el desvío, y defenderíamos el método ante un socio de finanzas escéptico?**
Recorre el cálculo paso a paso, incluido el grupo de comparación y los ajustes por cambios de demanda. Pregunta qué más cambió durante el periodo, como versiones, caídas o cambios de personal. Anota el rango de valores plausibles además del titular. La conversación debe terminar con una declaración llana del método que pueda situarse junto al número.

**3. ¿Cuáles de nuestras automatizaciones apagaríamos mañana si conociéramos su verdadero costo?**
Enumera los flujos automatizados con sus responsables, la fecha del último cambio, los recuentos de ejecución, las tasas de fallos y el esfuerzo de mantenimiento. Pregunta cuáles no echaría de menos nadie y cuáles dan miedo tocar. El facilitador debe tratar la retirada como un resultado legítimo. Las respuestas suelen revelar flujos sin responsable.

**4. ¿Qué le pasa a un usuario cuyo intento de autoservicio falla, y cuánto tarda en llegar a una persona?**
Pide a alguien que recorra el camino como lo haría un usuario, incluido encontrar la vía de contacto. Cronométralo y anota cada paso que podría acortarse. Compara la experiencia con la intención declarada del portal. El grupo debe decidir si la vía es tan fácil de encontrar como la de autoservicio.

**5. ¿Cómo era la mezcla de trabajo del centro de servicios hace un año, y cómo es ahora?**
Revisa la mezcla de categorías y la distribución por niveles a lo largo del tiempo. Discutid por qué se movieron el tiempo de atención o la resolución en el primer contacto, y si refleja una mezcla más difícil. Pregunta si se ha dicho a la dirección que esto es esperable. Acordad cómo presentar la tendencia para que una subida del tiempo de atención tras un desplazamiento hacia la izquierda exitoso no se lea como un declive.

**6. ¿Qué haríamos con la capacidad que libera la automatización, y quién lo decide?**
Estima las horas eliminadas del trabajo manual y nombra qué debían comprar. Pregunta si el tiempo fue a trabajo de mejora o lo absorbió la demanda nueva. Discutid cómo lo sabría el equipo. El facilitador debe insistir en un compromiso concreto, como una proporción de la capacidad reservada para corregir los temas principales de caída al personal.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen gran parte de lo que hace que el autoservicio tenga éxito: mensajes de error claros, formularios utilizables, ayuda dentro del producto y la capacidad de hacer tareas sin plantear un ticket. También poseen la automatización que vive en canalizaciones y en código de infraestructura. Sus medidas útiles son el éxito del autoservicio en sus propias funcionalidades y los pasos manuales que quedan en el trabajo de versiones y entornos, tratados como trabajo repetitivo que eliminar (véase el tema 2.8, Métricas DORA). Deben leer los temas de caída al personal como una lista de pendientes de producto.

### Equipos de servicio y operaciones

Los equipos de operaciones cargan con el patrimonio de automatización y la alternativa atendida por personal. Deben seguir la fiabilidad de la automatización, la carga de mantenimiento y el tiempo de intervención manual que queda, y deben vigilar la distribución por niveles sin ser penalizados por el trabajo más duro que permanece. Hay que consultar a los agentes sobre qué solicitudes son buenos candidatos a la automatización, porque saben dónde está la fricción real. Informa por flujo y tipo de solicitud, y nunca por agente.

### Liderazgo y gobernanza

Los líderes se sienten tentados a tratar el desvío como una cifra de ahorro. Una petición mejor es la del resultado para el usuario, el método detrás de cualquier estimación y la fiabilidad de la automatización. La gobernanza debe esperar una lista de candidatos, un responsable para cada flujo automatizado y una regla de retirada. Los líderes también deben proteger la vía atendida por personal de quedar oculta para cumplir una meta (véase el tema 11.3, Implantar métricas sin sembrar miedo).

### Clientes y usuarios

Los usuarios quieren seguir con su trabajo. Muchos prefieren el autoservicio cuando funciona, y casi todos detestan quedar atrapados en él cuando no. Su experiencia se capta mejor con preguntas de esfuerzo y resultado en el punto de salida, y con si un intento fallido condujo rápido a una persona (véase el tema 6.4, Experiencia de usuarios y empleados). Los usuarios con necesidades de accesibilidad o poca confianza son una señal de alerta temprana de portales que funcionan solo para el usuario medio.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un minorista en línea de tamaño medio opera un centro de servicios, un equipo de plataforma y varios equipos de producto. Los números de este ejemplo son ilustrativos.

El departamento lanza un portal rediseñado con restablecimiento guiado de contraseña, un flujo de solicitud de acceso a software y un chatbot para preguntas comunes. Tres meses después, el informe del portal muestra que el 62 por ciento de las sesiones termina sin ticket, y un gerente propone llamar a eso "desvío" y fijar una meta del 70 por ciento. El responsable del centro de servicios está inquieto, porque los agentes informan de que las personas que llaman dicen que "probaron primero el portal".

El equipo revisa las medidas. Definen el éxito del autoservicio como un resultado completado sin contacto con el personal sobre el mismo tema en 7 días. Con esa definición la tasa de éxito es del 48 por ciento, no del 62, y la tasa de caída al personal del flujo de solicitud de acceso es del 31 por ciento. Al leer una muestra de 40 contactos de caída al personal, descubren que la mayoría de los usuarios no sabía cuál de dos elementos de catálogo parecidos elegir y que el chatbot respondía una pregunta sobre una herramienta retirada.

El equipo toma tres decisiones. Primero, la medida del titular pasa a ser el éxito del autoservicio, con el desvío estimado mostrado solo como una estimación trimestral basada en contactos por 1.000 usuarios activos, y no se fija ninguna meta sobre el desvío. Segundo, los dos elementos de catálogo parecidos se fusionan, se corrige el contenido del chatbot y los dos principales temas de caída al personal pasan a la lista de pendientes de mejora con un responsable. Tercero, un proceso manual de creación de entornos de prueba, que lleva a los ingenieros de plataforma una mediana de 25 minutos (ilustrativo) y ocurre unas 40 veces al mes (ilustrativo), se añade a la lista de candidatos a la automatización.

El equipo de plataforma automatiza el flujo de entornos dentro del trimestre. Un riesgo de manipulación aparece enseguida: la cifra de cobertura del flujo sube, pero la tasa de fallos y retrabajo muestra que una ejecución de cada ocho (ilustrativo) necesita reparación manual y que las reparaciones se registraban como "mantenimiento planificado". El equipo añade las ejecuciones reparadas al recuento de fallos, vincula las ejecuciones al registro de incidentes y acuerda revisar el flujo cada mes. En la siguiente revisión, la tasa de éxito ha subido al 57 por ciento (ilustrativo), la tasa de caída al personal ha bajado y el tiempo de atención del centro de servicios ha subido ligeramente porque los contactos restantes son más difíciles. El responsable de TI acuerda presentar el tiempo de atención con la distribución por niveles, para evitar leer la subida como un declive.

## Perspectiva por sector

**Startup.** Los fundadores suelen poder arreglar una mala vía de autoservicio hablando con el usuario. Mide el éxito con una sola pregunta de salida y unas pocas lecturas de sesiones reales, y automatiza las dos o tres tareas que más gente interrumpen. Evita construir un bot antes de que las respuestas escritas sean buenas.

**Pequeña empresa.** Una sola persona puede dirigir TI para todos, así que el autoservicio consiste sobre todo en guías cortas y buenas y un formulario de solicitud compartido. La automatización de la creación de cuentas y de los restablecimientos de contraseña se amortiza rápido, siempre que alguien sea responsable de cada flujo. Mantén obvia la vía atendida por personal, porque de lo contrario el propio personal del dueño rodeará el sistema.

**Gran empresa.** La escala aumenta tanto el beneficio como la manipulación. Estandariza las definiciones entre unidades de negocio, mantén una lista central de candidatos y un registro de automatizaciones, e informa por servicio y elemento del catálogo. Cuidado con comparar unidades que atienden poblaciones de usuarios muy distintas.

**Gobierno y sector público.** La accesibilidad, el acceso lingüístico y la obligación de atender a las personas que no pueden usar canales digitales son insumos de diseño, no extras. Mantén disponibles y medidas las vías asistidas, documenta las decisiones automatizadas que afectan a las personas y espera preguntas de auditoría sobre quién posee cada flujo automatizado (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Las motivaciones son menos contactos repetitivos, resultados más rápidos para los usuarios, una ejecución más estable de las tareas rutinarias y más capacidad para el trabajo de mejora. El lado del costo incluye construir y mantener el portal y el contenido, el trabajo de integración y de datos para unir sesiones con tickets, la plataforma de automatización y el tiempo para escribir, probar y poseer cada flujo automatizado. Las muestras del tiempo del personal y una breve encuesta de salida cuestan poco y aportan la mayor parte de la evidencia que necesitas.

El retorno debe argumentarse a partir de tus propios datos. Usa el tiempo de intervención manual y el volumen para estimar el esfuerzo que elimina una automatización, resta el mantenimiento y el costo de los fallos, e informa el resultado como un rango con sus supuestos. Para el autoservicio, usa la tasa de caída al personal y los resultados muestreados para mostrar la proporción de contactos evitados porque se ayudó a los usuarios, no simplemente porque se les rechazó. No importes porcentajes de desvío ni de ahorro de proveedores ni de encuestas; mide primero tu propia línea base. El costo total de propiedad de una automatización incluye los cambios que necesitará a medida que evolucionen los sistemas que la rodean, así que presupuéstalos.

## Antipatrones y trampas

- **Contar sesiones sin tickets como éxito.** No puede separar la ayuda del abandono. Define el éxito por el resultado y verifícalo con la caída al personal y los comentarios de salida.
- **Metas sobre el desvío.** Premian esconder la vía de contacto. Usa el desvío como una estimación y fija las metas sobre los resultados del usuario.
- **Esconder el teléfono o el chat.** Los usuarios que no pueden llegar a una persona aumentan su esfuerzo y pierden confianza. Mantén visible la vía atendida por personal y mide cuánto se tarda en llegar a ella.
- **Automatizar antes de entender el proceso.** El flujo codifica la confusión a toda velocidad. Documenta y simplifica primero el manual de procedimiento y automatiza luego la versión estable.
- **Automatización sin responsables.** Los flujos sin dueño se deterioran en silencio y fallan en malos momentos. Da a cada flujo un responsable, una prueba, un monitor y una regla de retirada.
- **Ignorar el costo del fallo.** Una cifra de cobertura alta con retrabajo sin medir es un pasivo oculto. Informa la tasa de fallos y retrabajo junto con la cobertura.
- **Leer una subida del tiempo de atención como un declive.** Tras un desplazamiento hacia la izquierda exitoso, el trabajo restante es más difícil. Muestra la distribución por niveles y la mezcla de categorías junto a las medidas de tiempo.
- **Clasificar agentes por contactos desviados.** Produce empujar a los usuarios fuera y estropea los datos. Informa solo por servicio y flujo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Éxito del autoservicio y desvío | Se informan visitas al portal y recuentos de tickets; sin definición de resultado | Éxito definido para algunas vías; desvío citado sin método | Una definición escrita de éxito; caída al personal medida; desvío etiquetado como una estimación | Éxito y caída al personal con seguimiento de su tendencia y comentarios de salida; desvío estimado por comparación | Resultados compartidos con equipos de producto y proveedores; los temas de caída al personal impulsan correcciones financiadas |
| Cobertura y fiabilidad de la automatización | Automatización ad hoc; sin lista de candidatos | Algunos flujos automatizados por equipos individuales; fallos manejados de manera informal | Lista de candidatos, responsables y medidas de fallo definidos para cada flujo automatizado | Cobertura, tasa de fallos y esfuerzo de mantenimiento revisados y financiados con una cadencia | Automatización coordinada entre equipos y proveedores; flujos retirados y revisados de forma rutinaria |
| Efecto de desplazar hacia la izquierda y uso | Volumen informado sin contexto | Distribución por niveles seguida por unos pocos equipos | Distribución por niveles y mezcla de categorías informadas junto al tiempo de atención | Capacidad liberada planificada y seguida; la dirección lee correctamente los efectos de la mezcla | Capacidad y aprendizaje vuelven a los servicios y al diseño del catálogo en toda la organización |

## Lista de verificación

- [ ] El éxito del autoservicio se define por el resultado, con un inicio, un fin y unas exclusiones escritos.
- [ ] La tasa de caída al personal se mide para las principales vías de autoservicio.
- [ ] Cualquier cifra de desvío indica su método y se etiqueta como una estimación.
- [ ] No se fija ninguna meta sobre el desvío.
- [ ] Existe una pregunta de salida de una pregunta u otra retroalimentación equivalente para las vías clave.
- [ ] Existe una lista escrita de candidatos a la automatización y se revisa cada trimestre.
- [ ] Todo flujo automatizado tiene un responsable, un monitor y una medida de fallos y retrabajo.
- [ ] El tiempo de intervención manual se muestrea para los principales tipos de solicitud.
- [ ] La distribución por niveles se muestra junto al tiempo de atención y la resolución en el primer contacto.
- [ ] La vía atendida por personal es visible y se comprueba su tiempo de acceso.
- [ ] Los principales temas de caída al personal se revisan cada mes y se encaminan a sus responsables.
- [ ] Ninguna métrica de este tema se informa ni se fija como meta por agente.

## Prompts de IA

**Comprueba cómo estimamos el desvío.**

```text
Operamos [type of service] para [number] usuarios activos. Informamos el desvío
como [describe current calculation], usando datos de [tools]. Cambios en el
periodo: [releases, campaigns, outages, staffing changes]. Revisa el método y
explica dónde puede sobrestimar o subestimar el efecto. Sugiere una mejor
comparación, como un grupo de control o los contactos por 1.000 usuarios activos,
usando solo los datos que describo. No inventes valores de referencia ni metas.
Enumera tus supuestos y los datos que necesitarías para afianzar la estimación.
```

**Analiza los temas de caída al personal a partir de una muestra.**

```text
A continuación hay [number] contactos con personal de [service] que siguieron a
un intento de autoservicio sobre el mismo tema, con los campos [list fields] y
la descripción del usuario. Agrúpalos por causa probable (brecha de contenido,
formulario confuso, defecto, falta de acceso, preferencia del usuario) e informa
patrones, no individuos. Sugiere qué grupos de causas entregar a los
responsables del conocimiento, a los equipos de producto o a la gestión de
problemas. No adivines más allá del texto proporcionado. Enumera tus supuestos y
lo que no pudiste juzgar.

[paste contacts with personal data removed]
```

**Ordena los candidatos a la automatización.**

```text
Esta es una lista de tipos de solicitud e incidente de [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Propón un orden de
candidatos a la automatización y explica el razonamiento de cada uno, incluidos
la carga de mantenimiento y el impacto del fallo. Señala los elementos que
deberían seguir siendo manuales. Usa solo los números que te di y no inventes
cifras de ahorro. Enumera tus supuestos y las preguntas que debería responder
antes de comprometerme.
```

**Diseña las barreras de protección de un flujo automatizado.**

```text
Estamos automatizando [flow name] para [service]. Proceso manual actual:
[steps]. Herramientas: [automation platform]. Propón las métricas que seguir
(cobertura, fallos y retrabajo, tiempo de detección de una ejecución fallida,
esfuerzo de mantenimiento), una forma en que cada una podría manipularse y una
barrera de protección para cada una. Incluye una alternativa manual segura y un
criterio de retirada. No inventes umbrales ni referencias. Enumera tus supuestos
y todo lo que necesites saber sobre nuestro entorno.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema relacionado y la barrera de protección de una métrica de autoservicio o de automatización que planeas introducir.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen cada métrica emparejada con un vector de manipulación y una barrera de protección.

## Puntos clave

- El éxito del autoservicio es un resultado del usuario, así que defínelo desde el lado del usuario y verifícalo con la caída al personal y los comentarios de salida.
- El desvío es una estimación, así que indica el método y mantenlo fuera de las metas.
- La cobertura de la automatización significa poco sin fiabilidad, mantenimiento y una lista de candidatos revisada.
- Desplazar hacia la izquierda eleva la dificultad del trabajo restante, así que lee el tiempo de atención con la distribución por niveles y la mezcla de categorías.
- Mide flujos, servicios y elementos del catálogo, nunca agentes, y mantén visible la vía atendida por personal.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
