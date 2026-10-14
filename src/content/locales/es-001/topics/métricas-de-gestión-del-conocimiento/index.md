# Métricas de gestión del conocimiento

**Mide el conocimiento por si se usa y se confía en él en el momento de la necesidad, no por cuánto existe: vigila juntas la tasa de vínculos, la reutilización, la vigencia y la facilidad de encontrarlo, y trata cada recuento de artículos como una pregunta sobre el trabajo y no como una puntuación.**

## Resumen y motivación

Un equipo de servicio acumula conocimiento a diario: cómo restablecer un servicio, qué significa realmente un mensaje de error confuso, qué solución provisional se sostuvo la última vez. La [gestión del conocimiento](https://en.wikipedia.org/wiki/Knowledge_management) es la disciplina de poner ese conocimiento a disposición de la siguiente persona que lo necesite. En ITIL 4 (la edición de 2019 del marco publicado por AXELOS, y la base ampliamente documentada de este libro), la gestión del conocimiento es una práctica por derecho propio, e [ITIL](https://en.wikipedia.org/wiki/ITIL) también espera que respalde el manejo de incidentes, el manejo de problemas y el centro de servicios. Este tema cubre cómo saber si ese respaldo es real.

La mayor parte de la producción utilizable de la gestión del conocimiento acaba en una [base de conocimiento](https://en.wikipedia.org/wiki/Knowledge_base): un almacén de artículos, manuales de procedimiento, registros de errores conocidos y respuestas breves de cómo hacer algo. Un [manual de procedimiento](https://en.wikipedia.org/wiki/Runbook) (runbook) es un conjunto escrito de pasos para una operación rutinaria o una recuperación. Los artículos son la parte explícita de lo que sabe un equipo. El [conocimiento tácito](https://en.wikipedia.org/wiki/Tacit_knowledge) de las personas con experiencia, como la intuición de que una alarma es ruido, no puede escribirse por completo, y ninguna métrica de este tema lo mide directamente.

En la visión de ITIL, el conocimiento es un activo gestionado con un ciclo de vida: creado, revisado, publicado, usado y retirado. En la visión ágil, la documentación debe ganarse su lugar, la conversación y el trabajo en pareja aportan muchísimo, y el conocimiento escrito es un subproducto de terminar el trabajo. Ambas visiones coinciden en la prueba: ¿ayudó el conocimiento a alguien a resolver un problema real más rápido o mejor de lo que habría podido sin él?

El método que conecta más directamente las dos visiones es el [Servicio Centrado en el Conocimiento (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), una metodología del Consortium for Service Innovation. En KCS, el conocimiento se captura y se mejora como parte de la resolución del problema, no después. Las personas trabajan en dos bucles. El bucle de resolver es el momento de la resolución: buscar un artículo existente, reutilizarlo y mejorarlo si se encuentra, crear uno si no. El bucle de evolucionar es el ciclo más largo que estudia cómo se está desempeñando el conocimiento y mejora el sistema que lo rodea. KCS propone también sus propios indicadores, como la tasa a la que los casos resueltos se vinculan a artículos. Este tema resume esas ideas de forma neutral respecto a proveedores; los equipos que adopten KCS formalmente deben leer la propia guía de prácticas del Consortium.

El número de artículos de una base de conocimiento es un inventario, no un resultado, y sube tanto con el descuido como con el cuidado. Las métricas siguientes se atan en cambio a un momento de uso: un caso cerrado, una búsqueda hecha, la reacción de un lector. Incluso esas pueden torcerse (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Las medidas de contacto y de atención viven con el [centro de servicios](https://en.wikipedia.org/wiki/Service_desk) (véase el tema 3.1, Métricas del centro de servicios). El volumen y los patrones de repetición provienen de los datos de incidentes (véase el tema 3.2, Volumen y prioridad de incidentes). El éxito del autoservicio, donde los usuarios consumen artículos sin un agente, se trata por separado (véase el tema 3.7, Métricas de autoservicio y automatización). Este tema se queda con la salud del conocimiento en sí y su uso por las personas que resuelven problemas.

## Principios clave

- **Mide el uso en el punto de trabajo.** Un artículo vinculado a un caso resuelto o hallado por una búsqueda es evidencia de valor. Un artículo que meramente existe no lo es.
- **Captura en el flujo del trabajo.** El conocimiento escrito durante la resolución es más fresco y más barato que el escrito en un empujón de documentación aparte, así que las métricas deben premiar la captura como parte de terminar el trabajo.
- **Lee la vigencia frente al uso.** Antiguo no es lo mismo que erróneo. El esfuerzo de revisión pertenece a los artículos que se usan a menudo, no repartido por igual en un catálogo de páginas casi sin leer.
- **Muestrea la relevancia.** Un vínculo entre un caso y un artículo solo prueba que alguien creó el vínculo. Una pequeña muestra humana de si el artículo realmente encajaba dice si el vínculo significa algo.
- **Describe equipos y áreas de conocimiento, nunca individuos.** Los recuentos de contribución por persona convierten un activo compartido en una competición y enseñan a la gente a escribir basura (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- **Empareja cada métrica de volumen con una señal de calidad.** Tasa de vínculos con relevancia, creación de artículos con duplicados, reutilización con opinión de los lectores.

## Definiciones de métricas

La tabla enumera siete métricas. Las ventanas de tiempo (como el periodo de revisión de la vigencia) son elecciones que un equipo hace y escribe; ningún valor aquí es una referencia. En todo momento, "caso" significa un registro de incidente o de solicitud de servicio en la herramienta ITSM (gestión de servicios de TI), y los incidentes graves se informan por separado para que no distorsionen las razones (véase el tema 3.4, Métricas de incidentes graves).

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de vínculos con el conocimiento | Proporción de casos resueltos que tienen al menos un artículo de conocimiento adjunto en el momento de la resolución | casos resueltos en el periodo con al menos un artículo vinculado / casos resueltos en el periodo. Cuenta la fecha de resolución; excluye los incidentes graves, los casos cerrados como duplicados y los casos cerrados automáticamente sin trabajo humano | porcentaje | Herramienta ITSM: tablas de vínculos entre casos y artículos | Gestión del conocimiento; gestión de incidentes | La definición de terminado incluye capturar lo aprendido | Semanal para el equipo; mensual para la revisión |
| Razón de reutilización | Proporción de vínculos a artículos que apuntan a un artículo existente y no a uno creado durante ese caso | vínculos a artículos que existían antes de que se abriera el caso / todos los vínculos a artículos hechos en casos resueltos en el periodo. Excluye los vínculos añadidos después de cerrado el caso | porcentaje | Herramienta ITSM: fecha de creación del artículo frente a fecha de apertura del caso | Gestión del conocimiento; mejora continua | Reutilizar en lugar de rehacer; propiedad compartida del código y de su documentación | Mensual |
| Vigencia de los artículos | Proporción de artículos en uso que se han revisado, o se han usado y confirmado como correctos, dentro de una ventana de revisión indicada | artículos en uso con una fecha de revisión o de uso confirmado dentro de la ventana / artículos en uso. Un artículo está en uso si se vinculó a un caso o lo vio un lector en los últimos 12 meses (una elección del equipo); los borradores y los artículos retirados se excluyen | porcentaje | Metadatos de la base de conocimiento y registro de visualizaciones | Gestión del conocimiento; centro de servicios | Refinamiento de la lista de pendientes de documentación; acciones de retrospectiva | Mensual |
| Tasa de búsquedas sin resultados | Proporción de búsquedas de conocimiento que no devuelven ningún artículo | búsquedas con cero resultados / todas las búsquedas. Excluye las búsquedas de bots y comprobaciones automáticas; cuenta cada búsqueda una sola vez aunque se repita en un minuto | porcentaje | Registro de búsquedas de la base de conocimiento o del portal | Gestión del conocimiento; centro de servicios; gestión de solicitudes de servicio | Descubrimiento de necesidades de usuario no atendidas; insumo para la lista de pendientes | Semanal |
| Tasa de utilidad | Proporción de comentarios de los lectores que dicen que el artículo ayudó, mostrada con la tasa de respuesta | votos de útil / (votos de útil + votos de no útil) de los artículos del periodo; tasa de respuesta = votos de comentarios / visualizaciones del artículo | porcentaje, con tasa de respuesta | Widget de comentarios de la base de conocimiento y registro de visualizaciones | Gestión del conocimiento; experiencia del cliente | Comentarios de la revisión con las partes interesadas sobre la documentación | Mensual |
| Tiempo hasta la publicación | Tiempo transcurrido desde que se crea el borrador de un artículo hasta que se revisa y es visible para su audiencia | el reloj arranca en la creación del borrador y se detiene en la publicación (o en el primer estado visible aprobado). Excluye el tiempo en un estado de "en espera, a la espera de una versión del producto"; informado como mediana y percentil 85 | días (mediana y percentil 85) | Historial del flujo de trabajo de la base de conocimiento | Gestión del conocimiento | Plazo de entrega de un elemento de trabajo de principio a fin (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Mensual |
| Amplitud de contribución | Reparto de la creación y la mejora de artículos entre el equipo, medido sin nombrar a personas | colaboradores distintos que crearon o mejoraron un artículo en el periodo / miembros del equipo que resolvieron casos en el periodo. Se informa solo para un equipo, nunca como una lista de nombres | porcentaje | Historial de ediciones de la base de conocimiento unido a la pertenencia al equipo | Gestión del conocimiento; mejora continua | Propiedad colectiva; trabajo en pareja y en grupo | Trimestral |

La tasa de vínculos con el conocimiento tiene un reloj fácil de pasar por alto. El vínculo debe existir cuando se resuelve el caso, no cuando alguien ordena una semana después, porque el vínculo tardío mide la limpieza y no dice nada sobre el uso durante la resolución. La razón de reutilización depende de una fecha de creación de artículo fiable. Si los artículos se migran o se importan en bloque, sus fechas de creación se reinician y la razón engañará hasta que se marque la migración.

## Recomendaciones

### Decide para qué sirve el conocimiento

**1. Ata cada métrica de conocimiento a un caso de uso.** Nombra a las personas a quienes sirve el conocimiento: analistas del centro de servicios que resuelven en el primer contacto, ingenieros de guardia que manejan una alerta o usuarios que se ayudan a sí mismos. Cada audiencia necesita medidas distintas. Un manual de procedimiento para un ingeniero de guardia se juzga por si los pasos restablecieron el servicio, mientras que un artículo de restablecimiento de contraseña se juzga por si el usuario dejó de contactar con el centro. Regístralo en tu registro (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**2. Empieza con la tasa de vínculos y la relevancia, no con recuentos de artículos.** La tasa de vínculos muestra si el conocimiento entra siquiera en el momento de la resolución. Empárejala desde el principio con una pequeña muestra mensual en la que una persona lee 20 o 30 casos vinculados y juzga si el artículo encajaba. Una tasa de vínculos del 70 por ciento con la mitad de los vínculos irrelevantes es peor que una tasa del 40 por ciento con vínculos honestos, porque la primera oculta la brecha de conocimiento que la segunda revela.

**3. Separa "no existe artículo" de "el artículo existe pero no se encontró".** Cuando un caso se cierra sin vínculo, los motivos difieren y también las soluciones. Añade una breve opción de cierre, como "no existía artículo" y "artículo no encontrado", e infórmalas como proporciones de los casos sin vincular. La primera apunta a contenido que escribir; la segunda apunta a la búsqueda, los nombres y la estructura. Mantén la opción como opcional donde ralentizaría al centro, y muestrea en su lugar.

### Captura el conocimiento a medida que termina el trabajo

**4. Haz de la captura parte de la definición de terminado.** En un equipo ágil, un elemento de trabajo que cambia el comportamiento de un servicio no está hecho hasta que se actualiza el manual de procedimiento, el registro de error conocido o el artículo de ayuda. En el centro de servicios, un caso que exigió descubrimiento no está resuelto hasta que se captura el descubrimiento o se mejora un artículo existente. Esta es la idea de KCS de trabajar en el bucle de resolver, y mantiene bajo el costo de escribir porque la persona que escribe tiene el contexto fresco.

**5. Permite un estado de borrador ligero.** Muchos equipos pierden conocimiento porque todo artículo debe pasar una revisión pesada antes de que nadie lo vea. La práctica al estilo KCS distingue un artículo en elaboración, visible para el equipo, de uno validado, visible para una audiencia más amplia. Mide por separado el tiempo hasta la publicación de ambas etapas, como medianas y percentil 85, para que las revisiones lentas aparezcan como una cola y no como una queja vaga (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**6. Prefiere mejorar a crear.** Un montón creciente de artículos casi duplicados empeora la búsqueda y dificulta mantener la vigencia. Vigila la razón de reutilización junto al recuento de creación y, cuando la creación sube mientras la reutilización baja, busca duplicados. Haz fácil y visible fusionar y retirar, y cuenta una fusión como una contribución positiva.

### Mantén el conocimiento vigente y fácil de encontrar

**7. Revisa los artículos que se usan.** Concentra el esfuerzo de revisión donde el uso es alto. Ordena los artículos en uso según la frecuencia con que se vincularon o se vieron, y fija para el grupo principal una ventana de revisión más corta que para la cola larga. Un artículo obsoleto que nadie lee cuesta poco; uno obsoleto que aparece en un tercio de las resoluciones puede engañar a cientos de casos. Informa la vigencia del grupo muy usado como su propia línea para que el promedio de toda la base no la oculte.

**8. Trata los fallos de búsqueda como elementos de la lista de pendientes.** Lee cada mes las búsquedas sin resultados más frecuentes y decide para cada una si escribir un artículo, añadir un sinónimo, renombrar un artículo o aceptar que la pregunta pertenece a otro lugar. Esto convierte una métrica en una lista corta y concreta con la que puede trabajar el equipo. También muestra el vocabulario real, ya que los usuarios y los analistas rara vez usan las palabras del catálogo de servicios.

**9. Lee las palabras detrás de los votos.** La tasa de utilidad es barata y ruidosa. Las tasas de respuesta suelen ser bajas y se inclinan hacia las opiniones fuertes. Muestra la tasa de respuesta junto a la tasa de utilidad y lee los comentarios escritos de los artículos más vistos en una revisión permanente. Un solo comentario como "el paso 4 ya no existe en la versión nueva" vale más que mil votos sin etiquetar.

**10. Conecta el conocimiento con los problemas y los análisis posteriores.** Un incidente recurrente que se resuelve repetidamente con el mismo artículo es una señal para la gestión de problemas, que busca la causa subyacente y puede eliminar la necesidad del artículo (véase el tema 4.1, Métricas de gestión de problemas). Los registros de errores conocidos y las lecciones de los análisis posteriores son activos de conocimiento con su propio ciclo de vida (véanse el tema 4.2, Métricas de análisis posteriores y aprendizaje, y el tema 4.6, Deuda técnica y errores conocidos). Mira cada trimestre los diez artículos más vinculados y pregunta cuáles deberían retirarse corrigiendo la causa.

### Gobierna sin clasificar

**11. Informa la contribución a nivel de equipo.** La amplitud de contribución te dice si el trabajo de conocimiento se comparte o se concentra en dos personas. Es un riesgo que vale la pena ver, porque es el mismo patrón que un [factor autobús](https://en.wikipedia.org/wiki/Bus_factor) de dos. Nunca debe convertirse en una clasificación de autores, que premiaría la cantidad de ediciones y enseñaría a la gente a dividir artículos o a hacer cambios triviales. Si aparece una concentración, trátala como una conversación de equipo sobre tiempo, apoyo y permiso para escribir (véase el tema 9.4, Métricas de habilidades y aprendizaje).

**12. Retira las medidas que dejen de ayudar.** Si nadie actúa sobre la tasa de vínculos, traslada la atención a la relevancia o a la vigencia del grupo muy usado. Registra cualquier cambio de definición con el motivo, porque una fórmula cambiada rompe la línea de tendencia (véase el tema 1.5, Fuentes de datos e instrumentación).

## Vectores de manipulación y barreras de protección

Cada métrica de la tabla de definiciones aparece aquí. Las métricas de conocimiento están especialmente expuestas porque el acto de vincular o de revisar es un clic rápido, mientras que el valor real está en el contenido.

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de vínculos con el conocimiento | Adjuntar un artículo cualquiera, a menudo genérico o muy popular, a cada caso antes de cerrarlo; vincular a posteriori en bloque | Muestra mensual de relevancia de los casos vinculados; proporción de vínculos que van a los mismos pocos artículos; marca de tiempo del vínculo frente a la de resolución |
| Razón de reutilización | Crear un artículo nuevo para cada caso y vincularlo de inmediato para que cuente como reutilización la próxima vez; o no crear nunca para que la razón parezca perfecta | Tasa de artículos duplicados hallada mediante una búsqueda periódica; proporción de casos cerrados con el motivo "no existía artículo" |
| Vigencia de los artículos | Marcar artículos como revisados sin comprobarlos; reiniciar la fecha de revisión con ediciones triviales; contar solo los artículos fáciles de revisar | Muestra de artículos revisados recientemente contrastada con el servicio real; tasa de utilidad y comentarios escritos de los mismos artículos |
| Tasa de búsquedas sin resultados | Añadir artículos vagos o comodín que coincidan con cualquier consulta; llenar de palabras clave; excluir del registro los términos de búsqueda incómodos | Clic seguido de un contacto sobre el mismo tema en una ventana corta; tasa de utilidad; lectura manual de los términos de búsqueda principales |
| Tasa de utilidad | Pedir votar solo a los lectores satisfechos; ocultar la opción de no útil; votar desde dentro del equipo | Tasa de respuesta y composición de los respondientes mostradas con la tasa; comentarios escritos; tasa de contactos tras leer el artículo |
| Tiempo hasta la publicación | Publicar un esbozo escaso para detener el reloj; dividir un artículo en piezas; mover borradores a un estado que el reloj excluye | Relevancia y utilidad de los artículos publicados recientemente; recuento y antigüedad de los borradores en estados excluidos |
| Amplitud de contribución | Hacer ediciones triviales para que todos aparezcan como colaboradores; pedir a la gente que añada una frase para cumplir una cuota | Tamaño y sustancia de las ediciones muestreados; reutilización y utilidad de los artículos aportados; sin nombres en el informe |

Una lectura sana muestra artículos vinculados que una muestra humana confirma como relevantes, una razón de reutilización que sube a medida que madura la base, un conjunto muy usado de artículos con revisiones recientes verificadas, una lista corta de fallos de búsqueda con la que trabaja el equipo y una contribución repartida por el equipo. Algunos casos sin artículo, porque eran genuinamente nuevos, son señales de una base honesta, no de una que falla.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Fijar una meta de tasa de vínculos alta | Empuja la captura y la reutilización a la rutina diaria; sencillo de entender | Invita a vínculos sin sentido; oculta brechas donde no existe artículo |
| Muestrear la relevancia a mano | Revela si los vínculos significan algo; construye estándares compartidos | Lleva tiempo de analista; las muestras pequeñas son ruidosas; depende del criterio de quien muestrea |
| Revisarlo todo según un calendario fijo | Fácil de planificar y auditar; aplicado por igual | Gasta esfuerzo en artículos que nadie lee; descuida los muy usados |
| Revisar según el uso | Dirige el esfuerzo adonde más duele el conocimiento erróneo | Necesita datos fiables de visualizaciones y vínculos; los artículos de la cola larga pueden pudrirse sin ser vistos |
| Adopción formal de KCS | Ofrece un conjunto coherente y probado de prácticas e indicadores | Necesita inversión sostenida, acompañamiento y apoyo de herramientas; pesado para un equipo muy pequeño |
| Conversación y trabajo en pareja en lugar de artículos | Transmite criterio y contexto; poca sobrecarga | No escala a turnos, vacaciones y rotación; el conocimiento se va con las personas |

Mide lo justo para ver si el conocimiento se usa y se confía en él, y gasta el esfuerzo ahorrado en contenido. Para un equipo pequeño, una tasa de vínculos con una muestra mensual de relevancia y una lista corta de fallos de búsqueda es un programa completo. Para un centro grande, el conjunto completo se amortiza solo si alguien posee la revisión y actúa sobre ella.

## Preguntas para conversar con tu equipo

**1. La última vez que resolvimos un caso difícil, ¿de dónde vino el conocimiento y adónde fue después?**
Elige un caso reciente que costó verdadero esfuerzo y rastrea el camino de lo aprendido. ¿Se encontró un artículo, se preguntó a un colega o se resolvió desde cero? Pregunta si la siguiente persona con el mismo problema encontraría la respuesta en menos de cinco minutos. El facilitador debe buscar la brecha entre lo que sabe el equipo y lo que contiene la base de conocimiento.

**2. Si el mes próximo subiéramos la tasa de vínculos a una meta declarada, ¿cómo podríamos hacerlo sin ayudar a nadie?**
Haz explícita la lista de manipulaciones y trátala como insumo de diseño y no como una acusación. Las respuestas comunes son vincular un artículo genérico, vincular en bloque al cerrar y elegir el artículo más popular. Para cada respuesta, pregunta qué barrera de protección de la tabla la detectaría y con qué rapidez. El facilitador debe salir con al menos una comprobación nueva, como una muestra mensual de relevancia, y un responsable de ella.

**3. ¿En qué cinco artículos confiamos más, y cuándo se verificaron por última vez frente al servicio real?**
Mira los artículos más vinculados y más vistos y lee dos de ellos en voz alta juntos. La conversación suele mostrar que los artículos de mayor impacto son los que menos cuidado reciben, que es el argumento para revisar según el uso.

**4. ¿Qué busca la gente que no tenemos?**
Lleva las búsquedas sin resultados principales y los motivos de casos sin vincular. Agrúpalos en artículos que escribir, palabras que añadir y preguntas que pertenecen a otro equipo. El facilitador debe recoger una lista corta de los tres elementos siguientes y planificar cómo se escribirán durante el trabajo normal, no en un proyecto especial.

**5. ¿Quién escribe nuestro conocimiento, y qué le cuesta hacerlo?**
Discutid la captura con honestidad. ¿Se ve escribir como parte del trabajo, o como trabajo extra después del trabajo? Pregunta qué lo ralentiza: una plantilla pesada, una revisión lenta, el miedo a equivocarse o la falta de tiempo al final de un turno difícil. El facilitador debe alejarse de perseguir a individuos y dirigirse hacia cambios en las herramientas, el tiempo y el permiso.

**6. ¿Qué artículos nuestros deberíamos dejar de necesitar?**
Toma los artículos más reutilizados y pregunta qué causa recurrente sortean. Un procedimiento de restablecimiento usado 200 veces al mes podría ser síntoma de un defecto del producto, de una pantalla confusa o de una automatización que falta. Decidid qué elementos entregar a la gestión de problemas o al equipo de producto, y cuáles automatizar (véase el tema 3.7, Métricas de autoservicio y automatización). El facilitador debe señalar que el mejor resultado del buen trabajo de conocimiento es a veces tener menos artículos.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega crean gran parte del conocimiento que necesitará un servicio: cómo se comporta una funcionalidad, qué significa un error nuevo, cómo revertir. Si ese conocimiento no se captura antes de la versión, el centro de servicios y los equipos de guardia lo aprenden por las malas. Incluye el manual de procedimiento y el artículo de ayuda en la definición de terminado, y vigila como retroalimentación la tasa de vínculos y los fallos de búsqueda de los servicios que posees. Cuando el mismo artículo se vincula muchas veces, trátalo como un informe de defecto del producto, no como un éxito de la documentación.

### Equipos de servicio y operaciones

Los equipos del centro de servicios y de operaciones son los principales productores y consumidores de la base de conocimiento, así que las métricas son sobre todo suyas para usarlas. Trabajad el bucle de resolver con honestidad: buscar primero, reutilizar y mejorar, crear cuando nada encaje. Usad la tasa de vínculos con una muestra de relevancia y leed las búsquedas sin resultados como una lista de pendientes. Evitad cualquier clasificación de autores o editores, ya que la base de conocimiento es una herramienta compartida y los recuentos personales la dañan (véase el tema 3.1, Métricas del centro de servicios).

### Liderazgo y gobernanza

Los líderes deciden si el trabajo de conocimiento recibe tiempo, así que deciden la calidad del conocimiento. Pide la muestra de relevancia y la vigencia de los artículos muy usados antes de pedir el recuento de artículos. Resiste las metas sobre la tasa de vínculos o la creación de artículos sin una barrera de protección, y espera enterarte cuando los números bajen por buenas razones, como un conjunto de duplicados fusionados. Financia la revisión de los artículos de mucho uso y las correcciones que hacen innecesarios los artículos.

### Clientes y usuarios

Los usuarios se encuentran con el conocimiento a través de la búsqueda, un portal, un chatbot o la respuesta que les da un analista. Lo que notan es si la primera respuesta es correcta y si tienen que repetirse. Sus propios comentarios sobre los artículos, sus búsquedas que no dan resultado y sus contactos repetidos son las mejores barreras de protección de todo lo de este tema. Si se pide a los usuarios que valoren los artículos, diles qué ocurre con los comentarios y actúa sobre ellos de forma visible (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

Una aseguradora de tamaño medio opera un centro de servicios de TI interno con una docena de analistas, que da soporte al personal de varias oficinas. El centro comparte una base de conocimiento con dos equipos de producto que poseen la aplicación de siniestros y el portal de documentos. Todos los números de este ejemplo son ilustrativos.

La dirección ha pedido una mejor resolución en el primer contacto (véase el tema 3.1, Métricas del centro de servicios) y fija una meta de tasa de vínculos con el conocimiento del 60 por ciento, frente a un 38 por ciento ilustrativo. En seis semanas el panel muestra el 64 por ciento. La responsable del centro no está convencida, porque los analistas siguen quejándose de que no encuentran respuestas, y una responsable de un equipo de producto menciona que tres de los artículos que posee aparecen en la mayoría de los casos cerrados.

El equipo realiza una revisión de manipulación y una muestra de relevancia. Leen 30 casos vinculados, elegidos al azar del mes anterior, y juzgan si el artículo encajaba con el caso. En un recuento ilustrativo, 11 de los 30 vínculos son a un artículo genérico "Cómo registrar un ticket" o a una descripción general de la red que no abordaba el problema. También descubren que los vínculos se hicieron a los pocos segundos de cerrar el caso, un patrón que sugiere hábito y no uso. La responsable del centro mira la razón de reutilización, que ha subido, y la proporción de casos sin vincular con el motivo "no existía artículo", que ha bajado a casi nada, porque los analistas ahora eligen el artículo más cercano. La brecha de conocimiento se ha vuelto invisible.

El equipo toma tres decisiones. Primero, se retira la meta de tasa de vínculos y se sustituye por una vista ajustada por relevancia: la tasa de vínculos se informa junto a la proporción muestreada de vínculos relevantes, y el motivo de cierre "no existía artículo" se hace fácil de elegir y no se trata como un fallo. Segundo, las búsquedas sin resultados se leen cada mes, y las cinco primeras pasan a ser las siguientes tareas de redacción, repartidas por el centro. Tercero, los 20 artículos más vinculados se revisan por su vigencia en el plazo de un mes, con el equipo de producto correspondiente como responsable, y cualquier artículo vinculado a más de una cuarta parte de los casos de un servicio pasa a la gestión de problemas como candidato a una solución permanente (véase el tema 4.1, Métricas de gestión de problemas).

Dos meses después la tasa de vínculos del titular ha vuelto a un 51 por ciento ilustrativo, lo que se siente como una mala noticia. La relevancia muestreada ha subido del 63 por ciento al 85 por ciento en términos ilustrativos, la tasa de búsquedas sin resultados ha bajado y un problema repetido de inicio de sesión del portal de documentos se ha corregido en su causa, lo que retiró tres artículos. La responsable pide a la dirección que juzgue el programa por la relevancia y las soluciones provisionales retiradas, no por la tasa de vínculos en bruto.

## Perspectiva por sector

**Startup.** El conocimiento vive en unas pocas cabezas y en el historial del chat. Escribe una lista corta de manuales de procedimiento para lo que se rompe de noche y registra la corrección tras cada incidente. Una comprobación mensual de que los manuales principales siguen funcionando basta como medición.

**Pequeña empresa.** Una sola persona suele ser el centro de servicios, el administrador y el propietario del conocimiento. El riesgo es el factor autobús, ya que el conocimiento desaparece si la persona desaparece. Usa un repositorio compartido sencillo, mantén cortos los artículos y haz que un contratista o un colega pruebe los procedimientos clave. Una lectura regular de las páginas más usadas supera a cualquier panel.

**Gran empresa.** La escala trae artículos duplicados y calidad desigual. Usa definiciones comunes para la tasa de vínculos, la vigencia y la reutilización, informa por servicio y por equipo y nombra responsables para los artículos de mucho uso. Evita comparar equipos, porque difieren la mezcla de servicios y la antigüedad de la base.

**Gobierno y sector público.** Las normas de registros, los requisitos de accesibilidad y las expectativas de auditoría pueden regir cómo se almacena, revisa y retira el conocimiento. Trátalos como insumos de diseño: conserva un rastro de aprobación para los artículos que afectan a los ciudadanos y publica contenido accesible. Los comentarios y los fallos de búsqueda de los ciudadanos son especialmente valiosos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de las métricas de conocimiento son modestos. Los datos de la herramienta suelen existir ya en la plataforma ITSM y en la base de conocimiento. Los costos principales son el tiempo para definir las medidas, la pequeña muestra mensual que comprueba la relevancia, el tiempo de revisión de los artículos de mucho uso y la disciplina de capturar el conocimiento mientras se resuelven los problemas. Si la plataforma de conocimiento carece de datos utilizables de vínculos o de búsqueda, debe incluirse el costo de instrumentarla (véase el tema 1.5, Fuentes de datos e instrumentación).

El retorno es un patrón, y el libro no cita una cifra para él. Cuando los analistas encuentran rápido un artículo correcto, la resolución es más rápida y coherente, el personal nuevo se vuelve útil antes y los ingenieros de guardia dependen menos de unos pocos expertos. Cuando los usuarios encuentran respuestas por sí mismos, el centro recibe menos contactos repetidos por preguntas conocidas. Las métricas ayudan al mostrar dónde el conocimiento falta, está obsoleto o no se usa, para que el escaso tiempo de redacción vaya a los artículos que importan.

El costo total de propiedad incluye el mantenimiento. Los artículos se deterioran cuando cambian los servicios, así que el tiempo de revisión es un costo continuo, y un programa que lo ignore sobrestimará el beneficio. Para estimar el retorno de tu propio equipo, compara una muestra de tus propios casos antes y después, y etiqueta tus supuestos.

## Antipatrones y trampas

- **Contar artículos o visualizaciones como éxito.** El volumen sube con el desorden y las visualizaciones pueden señalar confusión. Mide en su lugar el uso en la resolución, la relevancia y los comentarios.
- **Una meta de tasa de vínculos sin comprobación de relevancia.** La gente adjuntará cualquier artículo. Muestrea cada mes los casos vinculados e informa la proporción relevante junto a la tasa.
- **Clasificar autores o editores.** Los recuentos personales producen ediciones escasas y divisiones de artículos. Informa la amplitud de contribución del equipo y discútela como una cuestión de capacidad.
- **Revisar todos los artículos con un único calendario fijo.** El esfuerzo va a páginas que nadie lee. Revisa según el uso y retira lo que no se use.
- **Publicar esbozos para detener el reloj.** Un artículo rápido y escaso derrota el tiempo hasta la publicación. Empárejalo con la utilidad y la tasa de contactos posteriores.
- **Ignorar las búsquedas que fallan.** Las búsquedas fallidas son la señal más clara de una necesidad no atendida. Léelas cada mes y convierte los elementos principales en trabajo.
- **Separar el conocimiento del trabajo.** Un proyecto de documentación a fin de trimestre produce páginas obsoletas. Captura durante la resolución y en la definición de terminado.
- **Tratar la base de conocimiento como permanente.** El contenido se deteriora. Haz rutinarios y reconocidos la retirada y la fusión.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Captura y vínculos | El conocimiento vive en las cabezas y en el chat; los vínculos son raros | Algunos equipos vinculan artículos a casos, la práctica varía | Una regla escrita de vínculos y captura; motivos de cierre registrados | Tasa de vínculos y muestra de relevancia revisadas cada mes y ligadas a la mejora | La captura forma parte del flujo de trabajo en el centro, operaciones y equipos de producto; definiciones revisadas cuando dejan de informar decisiones |
| Vigencia y propiedad | Sin responsables; los artículos envejecen sin ser vistos | Responsables nombrados para los servicios clave | Ventanas de revisión fijadas, más cortas para los artículos muy usados | Vigencia de los artículos de mucho uso con seguimiento de su tendencia y financiada | Responsabilidad de revisión compartida con proveedores y equipos de producto; la retirada es rutinaria |
| Facilidad de encontrarlo y comentarios | La búsqueda es ad hoc; sin datos de búsqueda | Existe un registro de búsquedas pero no se lee | Búsquedas sin resultados y comentarios de los lectores revisados con una cadencia fijada | Los fallos de búsqueda impulsan una lista de pendientes y se emparejan con datos de contactos | Usuarios, analistas y chatbots se nutren de una sola fuente de conocimiento; los comentarios cambian visiblemente el contenido |
| Uso en la mejora | Las métricas, si las hay, son recuentos | Los recuentos se muestran al equipo | Métricas emparejadas con barreras de protección y mostradas primero al equipo | Los artículos muy vinculados alimentan decisiones de gestión de problemas y de automatización | Las listas de pendientes de conocimiento, de problemas y de producto se gestionan juntas entre equipos |

## Lista de verificación

- [ ] Cada métrica de conocimiento nombra la audiencia a la que sirve y la decisión que informa.
- [ ] La tasa de vínculos tiene una definición escrita, incluidos el reloj, las exclusiones y el tratamiento de los incidentes graves.
- [ ] Una muestra mensual comprueba que los artículos vinculados son relevantes para los casos.
- [ ] El cierre de casos registra "no existía artículo" y "artículo no encontrado" como motivos distintos.
- [ ] El tiempo hasta la publicación se informa como mediana y percentil alto, con las etapas de borrador y publicado separadas.
- [ ] Se fija una ventana de revisión para los artículos en uso, más corta para los más usados.
- [ ] Las búsquedas sin resultados principales se leen cada mes y se convierten en elementos de la lista de pendientes.
- [ ] Los comentarios de los lectores se muestran con su tasa de respuesta, y se leen los comentarios de los artículos principales.
- [ ] La contribución se informa solo para el equipo, sin listas nominales.
- [ ] Los artículos más vinculados se revisan cada trimestre como candidatos a correcciones permanentes.
- [ ] Los cambios de definición se registran con sus motivos.

## Prompts de IA

**Comprueba si los artículos vinculados encajan con sus casos.**

```text
Dirijo revisiones de conocimiento para [team name], que da soporte a [type of
service]. A continuación hay [number] casos resueltos, cada uno con su resumen,
sus notas de resolución y el título y texto del artículo vinculado. Para cada
par, juzga si el artículo encaja con el caso como una respuesta relevante, una
respuesta parcial o un vínculo sin relación, y da un motivo de una línea.
Informa patrones por artículo y por servicio. No nombres ni clasifiques a
analistas individuales. No inventes hechos sobre el servicio. Enumera tus
supuestos y todo lo que no pudiste juzgar a partir del texto.

[paste cases and articles with personal data removed]
```

**Convierte las búsquedas fallidas en una lista de pendientes de redacción.**

```text
Estas son las búsquedas más frecuentes en [knowledge base or portal name] que
no devolvieron resultados en [period]: [list of search terms with counts].
Agrúpalas en temas. Para cada tema, sugiere si necesita un artículo nuevo, un
sinónimo o un cambio de nombre de un artículo existente ([list of related
article titles]), un enlace a otro equipo o ninguna acción. No inventes
artículos ni hechos sobre nuestros sistemas. Enumera tus supuestos y las
preguntas que debería responder antes de escribir nada.
```

**Diseña un conjunto ligero de medidas de conocimiento.**

```text
Diseña un conjunto pequeño de medidas de gestión del conocimiento para [team
name], un equipo de [team size] personas que usa [ITSM tool] y [knowledge tool].
Nuestro objetivo principal es [goal, such as faster first contact resolution or
less dependence on experts]. Para cada medida da la definición, el reloj o
límite, la fuente de datos, el probable vector de manipulación y una barrera de
protección. No propongas clasificaciones individuales, inventes valores de
referencia ni cites fuentes. Enumera tus supuestos y los campos de datos que
necesitarías y que no mencioné.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados y la barrera de protección emparejada cuando añadas una métrica de conocimiento a tu panel.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de conocimiento lleva su vector de manipulación, su barrera de protección y sus referencias cruzadas en la forma correcta.

## Puntos clave

- Mide el conocimiento en el momento del uso: vinculado en la resolución, hallado por la búsqueda, confirmado por los lectores.
- Empareja la tasa de vínculos con una muestra humana de relevancia, porque un vínculo solo prueba que alguien hizo clic.
- Revisa la vigencia según el uso, poniendo el esfuerzo donde un artículo erróneo engañaría a más casos.
- Trata las búsquedas fallidas y los artículos muy vinculados como señales de contenido nuevo, mejores nombres o una corrección permanente.
- Informa la contribución del equipo y no clasifiques nunca a los autores.
- Menos artículos y mejores suelen indicar una base más sana que una más grande.

## Referencias y lecturas complementarias

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
