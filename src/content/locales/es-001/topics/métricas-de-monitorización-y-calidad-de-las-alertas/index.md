# Métricas de monitorización y calidad de las alertas

**Una alerta es una petición de atención de una persona, así que mide la monitorización por la frecuencia con que esa petición valió la pena, por cuánto de los problemas reales captó y por cuánto sueño y confianza costó.**

## Resumen y motivación

La monitorización es la recogida, el procesamiento y la visualización de datos en tiempo real sobre un sistema. La [monitorización de sistemas](https://en.wikipedia.org/wiki/System_monitoring) responde a la pregunta "¿funciona el servicio como lo necesitan los usuarios?" Una alerta es el punto en que esos datos piden a un humano que haga algo. La mayoría de los equipos mide mal o nada la primera actividad, y mide la segunda solo a través de las quejas. Este tema ofrece un pequeño conjunto de medidas para ambas: si la monitorización ve los fallos que importan, y si las alertas que genera merecen la atención que exigen.

Primero algunos términos. En el vocabulario de ITIL 4, un evento es un cambio de estado con significado para la gestión de un servicio, y la gestión de eventos es la práctica de detectar eventos, decidir cuáles importan y elegir la respuesta. Una alerta es una notificación a un humano, entregada como un aviso, un mensaje o un ticket. Un aviso (page) es una alerta que interrumpe a alguien de inmediato. Un falso positivo es una alerta que saltó cuando nada necesitaba atención, y un falso negativo es un fallo que ninguna alerta informó; ambos términos provienen del lenguaje de los [falsos positivos y falsos negativos](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Una alerta accionable es aquella en que una persona tuvo una acción útil que tomar, y la tomó o eligió deliberadamente no hacerlo por un motivo registrado.

Los dos lados de la monitorización tiran en sentidos opuestos. Añadir alertas tras cada incidente construye un muro de ruido; recortarlas para acallarlo arriesga el silencio durante el fallo que importa. El lenguaje de [precisión y exhaustividad](https://en.wikipedia.org/wiki/Precision_and_recall) encaja bien. La precisión pregunta qué proporción de las alertas generadas valía la pena generar. La exhaustividad pregunta qué proporción de los problemas reales captaron las alertas. La calidad de las alertas es el equilibrio entre ambas, y una métrica que vigila solo una invita al equipo a sacrificar la otra. La [relación señal-ruido](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) capta la misma tensión.

El costo humano es la razón por la que esto pertenece a un libro de métricas de servicio. La [fatiga de alarmas](https://en.wikipedia.org/wiki/Alarm_fatigue) es la tendencia bien documentada de las personas expuestas a muchas alarmas, la mayoría sin importancia, a insensibilizarse y a tardar en responder a las que importan. Se estudió primero en entornos clínicos y se aplica a cualquier rotación de [guardia](https://en.wikipedia.org/wiki/On-call) a la que se avisa con demasiada frecuencia por alertas que no llevan a ninguna parte. Quienes responden fatigados pasan por alto incidentes reales y acaban abandonando la rotación.

Las visiones difieren entre las dos tradiciones que une este libro. ITIL 4 sitúa este trabajo en la práctica de monitorización y gestión de eventos, con vínculos con la gestión de incidentes y la gestión de niveles de servicio. Su preocupación es que los eventos se detecten, se clasifiquen y se encaminen para que los incidentes se encuentren pronto y se manejen de forma coherente. La [ingeniería de fiabilidad de sitios (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) lo aborda desde el otro extremo: el libro *Site Reliability Engineering* de Google sostiene que los avisos deben ser urgentes, importantes, accionables y reales, y que todo lo demás pertenece a un ticket o a un panel. Los equipos ágiles lo encuentran como un acuerdo de trabajo: a quién se despierta, por qué, y quién arregla una alerta errónea. Las métricas siguientes toman de las tres y mantienen una regla: una métrica describe una rotación, un servicio o una regla de alerta, nunca a un individuo.

Este tema no repite a sus vecinos. Los tiempos de los incidentes pertenecen al tema 3.3, Tiempo de respuesta y resolución de incidentes, los incidentes graves al tema 3.4, Métricas de incidentes graves, los objetivos y presupuestos de errores al tema 5.2, SLI, SLO y presupuestos de errores, y la carga humana al tema 5.7, Métricas de trabajo repetitivo y guardias. Aquí el asunto es la calidad de la señal que inicia todo eso. La instrumentación se cubre en el tema 1.5, Fuentes de datos e instrumentación.

## Principios clave

- **Avisa por síntomas que sienten los usuarios; pasa el resto a un ticket o a un panel.** Una alerta sobre lo que experimentan los usuarios (errores, lentitud, indisponibilidad) sigue siendo útil a medida que cambia el sistema. Una alerta sobre una causa (un disco lleno, una CPU ocupada) es útil solo cuando predice un síntoma y una persona puede actuar antes de que llegue.
- **Toda alerta debe llevar a una acción.** Si la respuesta correcta a una alerta es no hacer nada, la alerta debe cambiarse, rebajarse a un ticket o eliminarse. Mide la proporción que lleva a una acción y trata el resto como defectos de la monitorización.
- **Mide tanto la precisión como la exhaustividad.** Contar solo el ruido premia el silencio, y contar solo la cobertura premia el volumen. Las dos juntas describen la calidad, y cada una actúa como barrera de protección de la otra.
- **Trata cada regla de alerta como un producto con un responsable.** Una regla tiene un propósito, un umbral, un manual de procedimiento y una fecha de revisión. Las reglas sin responsable se acumulan, y el ruido que producen no pertenece a nadie.
- **Informa de rotaciones y servicios, nunca de personas.** La carga de alertas es una propiedad de cómo se diseñan el sistema y la rotación. Nombrar a individuos convierte un problema de diseño en un problema de culpas y oculta la solución real.

## Definiciones de métricas

Las métricas siguientes se eligen como un conjunto. El volumen por sí solo carece de sentido, la accionabilidad dice si el volumen es un problema, y la cobertura y el tiempo de detección dicen qué esconde la calma. Todas se calculan por servicio o por rotación, y todas usan el registro de alertas de las herramientas de monitorización y de avisos unido a los registros de incidentes y de tickets.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volumen de alertas | Número de alertas que notificaron a un humano, dividido en avisos y tickets | Recuento de notificaciones distintas entregadas a una rotación o cola en el periodo; las repeticiones de la misma alerta abierta se agrupan en una; las alertas manejadas por completo por automatización sin notificación humana se excluyen; informa por rotación y semana, y la proporción fuera de horario por separado | alertas por rotación-semana | Herramienta de avisos y de encaminamiento de alertas | Monitorización y gestión de eventos | Acuerdo de trabajo del equipo sobre la guardia | Semanal |
| Tasa de alertas accionables | Proporción de alertas tras las cuales una persona tomó una acción útil | Alertas con una acción registrada (corrección, mitigación, escalado o un cambio de la regla de alerta) / alertas revisadas en el periodo; las alertas resueltas automáticamente antes de cualquier acuse de recibo se cuentan como no accionables; las alertas sin revisar se informan como un recuento aparte, no se descartan | porcentaje | Registro de alertas unido a la etiqueta de revisión, al ticket o al incidente | Monitorización y gestión de eventos; gestión de incidentes | Acción de mejora del equipo sobre las operaciones | Revisión semanal, tendencia mensual |
| Tasa de falsos positivos | Proporción de alertas que saltaron cuando no existía ningún problema | Alertas etiquetadas como falso positivo en la revisión / alertas revisadas en el periodo; "falso positivo" significa que la condición no era un fallo y nadie querría que se le avisara; un problema real demasiado menor para actuar sobre él no es un falso positivo | porcentaje | Etiquetas de revisión de alertas | Monitorización y gestión de eventos | Revisión del ruido en la retrospectiva | Mensual |
| Cobertura de detección | Proporción de servicios incluidos que tienen al menos una alerta probada sobre un síntoma de cara al usuario | Servicios con una alerta de síntoma ejercitada por una prueba o por un evento real en los últimos 12 meses / servicios incluidos en el catálogo de servicios; la lista de servicios incluidos se fija al inicio del periodo | porcentaje | Catálogo de servicios, inventario de reglas de alerta, registros de pruebas | Gestión de la configuración del servicio; monitorización y gestión de eventos | Definición de terminado de un servicio nuevo | Trimestral |
| Proporción detectada por monitorización | Proporción de incidentes que la monitorización detectó antes de que los informara un usuario o un colega | Incidentes cuya primera señal fue una alerta / incidentes del periodo; el reloj es la hora de apertura del incidente, y los incidentes sin primera señal registrada se informan como desconocidos, no como detectados | porcentaje | Registro de incidentes con un campo de primera señal, cronología de alertas | Gestión de incidentes | Revisión de incidentes (aprendizaje posterior al incidente) | Mensual |
| Tiempo de detección (TTD) | Tiempo transcurrido entre el inicio del impacto en los usuarios y la primera alerta que notificó a un humano | Hora de la primera alerta que notifica a un humano menos la hora de inicio del impacto, donde el inicio del impacto es el momento más temprano en que el indicador de nivel de servicio incumplió, según se estableció en la revisión del incidente; informa la mediana y el percentil 95; los incidentes sin alerta se excluyen y se cuentan por separado | minutos | Revisión del incidente, cronología de alertas, historial del indicador de nivel de servicio | Gestión de incidentes; monitorización y gestión de eventos | Revisión posterior al incidente | Mensual, por incidente |
| Concentración de alertas | Proporción del volumen de alertas producida por las pocas reglas más ruidosas | Alertas de las cinco reglas con más alertas / todas las alertas del periodo; la misma alerta agrupada una vez; el recuento de cinco reglas es una convención que un equipo puede cambiar si indica por qué | porcentaje | Inventario de reglas de alerta y registro de avisos | Mejora continua; monitorización y gestión de eventos | Lista de pendientes de mejora de la retrospectiva | Mensual |
| Vigencia de las reglas de alerta | Proporción de reglas de aviso que tienen un responsable, un vínculo a un manual de procedimiento y una revisión dentro del intervalo acordado | Reglas de aviso que cumplen las tres condiciones / todas las reglas de aviso; las reglas desactivadas en el periodo se excluyen | porcentaje | Inventario de reglas de alerta | Gestión del conocimiento; monitorización y gestión de eventos | Acuerdo de trabajo sobre la preparación operativa | Trimestral |

El volumen de alertas necesita contexto, así que léelo junto a la tasa de alertas accionables. El tiempo de detección usa el inicio del impacto en los usuarios, no el ticket, porque el reloj del ticket arranca después de la detección; el inicio del impacto es una estimación de la revisión del incidente y debe etiquetarse como tal. La tasa de falsos positivos y la tasa de alertas accionables no son complementarias, porque una alerta puede ser verdadera y aun así no merecer el tiempo de una persona.

## Recomendaciones

### Decide qué merece un aviso

**1. Escribe una política de avisos y mantenla corta.** Indica en un párrafo qué merece un aviso (un síntoma que los usuarios sienten ahora o sentirán pronto, sobre el cual una persona puede actuar) y qué no. Todo lo demás va a una cola de tickets o a un panel. El capítulo del libro de SRE de Google sobre la monitorización de sistemas distribuidos es un buen punto de partida (véase el tema 5.2, SLI, SLO y presupuestos de errores).

**2. Alerta sobre síntomas y guarda las causas para el diagnóstico.** Un aviso por "tasa de errores por encima del umbral acordado" es un aviso sobre los usuarios. Un aviso por "la CPU está alta" es un aviso sobre una suposición. Mantén las señales de nivel de causa en paneles donde quien responde mirará una vez que haya saltado la alerta de síntoma, y asciende una a aviso solo cuando prediga de forma fiable un síntoma con tiempo suficiente para actuar.

**3. Ata los umbrales de aviso al objetivo de nivel de servicio.** Donde un servicio tiene un [objetivo de nivel de servicio (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), alerta sobre la tasa a la que se consume el presupuesto de errores en lugar de sobre umbrales en bruto. El capítulo del SRE Workbook sobre alertas basadas en SLO describe las alertas de tasa de consumo y las compensaciones entre precisión, exhaustividad, tiempo de detección y tiempo de reinicio. Este enfoque avisa de lo que amenaza el objetivo y calla ante los altibajos breves que no lo hacen.

### Revisa cada alerta con un ritmo

**4. Etiqueta cada alerta en una revisión breve y regular.** Reserva quince minutos cada semana para que cada rotación mire lo que saltó. Para cada alerta, registra una etiqueta: accionable, falso positivo, real pero no merece un aviso o duplicada. Las etiquetas son los datos de la tasa de alertas accionables y de la tasa de falsos positivos, y la revisión es el lugar donde las reglas ruidosas se arreglan al día siguiente y no al trimestre siguiente.

**5. Haz que la revisión produzca un cambio.** Cada semana, elige al menos una regla que ajustar, rebajar, fusionar o eliminar, y registra el cambio en la lista de pendientes del equipo como trabajo ordinario.

**6. Elimina sin miedo.** Los equipos conservan alertas porque eliminar una parece arriesgado y nadie recuerda por qué existe. Exige que cada regla de aviso lleve un propósito y un responsable, y acuerda que una regla que nunca ha llevado a una acción en un periodo indicado se elimine o se rebaje, con el cambio registrado para poder revertirlo. La métrica de vigencia de las reglas hace visible la disciplina.

### Mide lo que la monitorización pasa por alto

**7. Sigue la proporción de incidentes que encontraron primero los usuarios.** Tras cada incidente, registra cómo se notó por primera vez: una alerta, un colega, un cliente, un ticket de soporte o una comprobación rutinaria. La proporción hallada por la monitorización es la medida práctica más cercana a la exhaustividad. No es completa, porque los incidentes que nadie notó nunca entran en la muestra, así que empárejala con pruebas periódicas de las propias alertas.

**8. Estima con honestidad el tiempo de detección.** Establece el inicio del impacto en los usuarios en la revisión posterior al incidente a partir del historial del indicador de nivel de servicio, no de cuándo alguien escribió el ticket. Informa la mediana y un percentil alto, y muestra los incidentes que no tuvieron ninguna alerta como un recuento aparte. Un solo promedio oculta tanto el caso típico como la mala cola (véanse el tema 1.6, Alfabetización estadística para métricas de servicio, y el tema 3.3, Tiempo de respuesta y resolución de incidentes).

**9. Prueba las alertas de las que dependes.** La cobertura de detección solo es creíble si se ha visto funcionar la alerta. Incluye una comprobación en los simulacros o en los ensayos de versiones que cause deliberadamente un síntoma y confirme que salta la alerta correcta, que llega a la rotación correcta y que enlaza con un manual de procedimiento utilizable. Una alerta que nunca se ejercitó es una esperanza, no un control (véase el tema 5.6, Métricas de continuidad del servicio).

### Mantén sana la vía de la señal

**10. Monitoriza la monitorización.** Un fallo silencioso del sistema de monitorización se ve exactamente igual que un servicio sano. Añade una comprobación de latido que avise si la canalización de alertas deja de entregar, y registra con qué frecuencia falla la propia canalización.

**11. Agrupa, deduplica y vincula antes de contar.** Agrupa las alertas relacionadas en una, suprime las repeticiones de una alerta ya abierta y encamina cada una a la rotación propietaria. Vincula cada alerta a su manual de procedimiento y al incidente o ticket que creó, porque esa unión es lo que permite calcular la tasa de alertas accionables y la proporción detectada por monitorización sin recuento manual (véase el tema 1.5, Fuentes de datos e instrumentación).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Volumen de alertas | Subir los umbrales, añadir retrasos largos o mover alertas de avisos a una cola silenciosa para que baje el recuento mientras los problemas pasan inadvertidos; dividir o fusionar alertas para cambiar el recuento | Proporción detectada por monitorización y tiempo de detección; una regla por la que toda rebaja se registra con su motivo y se revisa tras un trimestre |
| Tasa de alertas accionables | Etiquetar alertas como accionables a posteriori, o tomar una acción trivial (un comentario, un acuse de recibo) para calificar; dejar sin revisar alertas ruidosas para que nunca entren en el denominador | El recuento de alertas sin revisar mostrado junto a la tasa; una comprobación por muestreo hecha por alguien ajeno a la rotación; una definición escrita de "acción útil" |
| Tasa de falsos positivos | Definir de forma estrecha los falsos positivos para que las alertas "reales pero inútiles" cuenten como verdaderas; cerrar alertas ruidosas sin etiqueta | Tasa de alertas accionables y la etiqueta "real pero no merece un aviso" seguidas por separado; muestreo periódico de alertas cerradas |
| Cobertura de detección | Añadir una alerta trivial (un ping) a cada servicio para reclamar cobertura; contar alertas que nunca se han probado | El requisito de que la alerta vigile un síntoma de cara al usuario y se haya ejercitado en los últimos 12 meses; proporción detectada por monitorización |
| Proporción detectada por monitorización | Registrar cada incidente como "detectado por monitorización" aunque lo informara antes un usuario; crear una alerta a posteriori y citarla luego; dejar vacío el campo de primera señal para evitar un mal número | El recuento de desconocidos mostrado junto a la proporción; evidencia de la primera señal tomada de la cronología de alertas, no de la memoria; incidentes informados por clientes vinculados desde el registro de soporte |
| Tiempo de detección (TTD) | Declarar el inicio del impacto más tarde de lo que fue; excluir los incidentes sin alerta; informar la media para ocultar la cola | Inicio del impacto tomado del historial del indicador de nivel de servicio; incidentes sin alerta contados y mostrados; mediana y percentil 95 informados juntos |
| Concentración de alertas | Dividir una regla ruidosa en varias para que ninguna esté entre las cinco principales; renombrar reglas | Informar la concentración por el fallo o servicio subyacente además de por regla; seguir el volumen total y la tasa de alertas accionables a su lado |
| Vigencia de las reglas de alerta | Añadir responsables de relleno, vínculos vacíos a manuales de procedimiento o una revisión de sello de goma para cumplir la condición | Una comprobación por muestreo de que el vínculo al manual funciona y se usó en una respuesta real; la práctica de probar el manual en los simulacros |

Una lectura sana muestra varias cosas a la vez. El volumen de alertas por rotación es estable o decreciente y está dentro de un nivel que el equipo eligió como sostenible. La tasa de alertas accionables sube a lo largo de varios meses a medida que se ajustan las reglas más ruidosas. La proporción detectada por monitorización es alta y el tiempo de detección es corto y no se alarga al bajar el volumen, lo que prueba que la calma se ganó y no se compró. La cobertura de detección crece porque se prueban los servicios, no porque se añadieran alertas triviales. Si el volumen baja mientras empeoran la proporción de detección o el tiempo de detección, el equipo ha cambiado exhaustividad por tranquilidad, y las barreras de protección son lo que lo revela.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Ventajas | Inconvenientes |
| --- | --- | --- |
| Pocos avisos basados en síntomas | Noches tranquilas, mucha confianza en cada aviso, fáciles de mantener vigentes | Riesgo de detección tardía de problemas de gestación lenta; necesita buenos hábitos de tickets y de paneles para el resto |
| Muchas alertas sensibles | Aviso temprano de problemas a nivel de causa; menos incidentes omitidos | Fatiga de alarmas, acuse de recibo más lento y abandono de las rotaciones de guardia |
| Alertas de tasa de consumo del SLO | Avisos atados a lo que amenaza el objetivo; menos altibajos | Necesita buenos indicadores y un objetivo acordado; requiere ajuste para equilibrar el tiempo de detección y la precisión |
| Revisión semanal de alertas | Retroalimentación rápida; las reglas ruidosas se arreglan deprisa | Cuesta tiempo cada semana; se vuelve teatro si no sigue ningún cambio |
| Etiquetado por humanos | Capta un criterio que ninguna herramienta tiene | Subjetivo; las etiquetas derivan entre revisores y rotaciones si las definiciones no están escritas |
| Supresión y agrupación automatizadas | Reduce el ruido a escala; reduce los avisos repetidos | Puede ocultar señales reales si las reglas son erróneas; necesita su propia monitorización y revisión |

Cada elección compensa precisión frente a exhaustividad, y la compensación debe hacerse a propósito y escribirse por servicio, porque es el contexto el que permite a cualquiera leer los números con justicia. Un servicio con consecuencias graves por un fallo omitido puede aceptar una tasa accionable menor a cambio de un aviso más temprano, con una capa de clasificación que envíe las alertas adicionales a una cola de tickets por la noche.

## Preguntas para conversar con tu equipo

**1. ¿Por qué querríamos que nos despertaran, y cuáles de los avisos del mes pasado cumplieron ese criterio?** Escribe la política de avisos en una o dos frases, toma luego los avisos del mes pasado y pon a prueba cada uno frente a ella. El ejercicio vale más que el porcentaje que produce, porque los desacuerdos revelan dónde difieren las expectativas del equipo. Recoge los innecesarios como candidatos a rebajar.

**2. Si la regla de alerta más ruidosa desapareciera mañana, ¿qué perderíamos?** Haz la pregunta para cada una de las cinco reglas principales por volumen. A menudo nadie sabe nombrar un fallo concreto que la regla haya captado jamás, y es señal de que puede ajustarse o eliminarse. Donde alguien pueda, pregunta si el fallo también activaría una alerta de síntoma.

**3. ¿Cómo nos enteramos de lo que la monitorización pasó por alto?** Mira los últimos incidentes y pregunta quién lo notó primero y cuánto duró el impacto antes de eso. La respuesta te da la proporción detectada por monitorización y un tiempo de detección aproximado sin herramientas nuevas. Discutid qué señal habría captado cada uno antes.

**4. ¿Es sostenible nuestra carga de guardia, y cómo lo sabríamos?** Acordad qué significa sostenible para una rotación, como un límite de avisos fuera de horario por semana, y revisad la tendencia por rotación, no por persona. Si la carga está por encima del nivel acordado, trátala como un defecto del servicio y planificad trabajo para reducirla. Mantened las medidas coherentes con el tema 5.7, Métricas de trabajo repetitivo y guardias.

**5. ¿Cuáles de nuestras alertas nunca hemos probado, y cómo podríamos probarlas con seguridad?** Enumera los servicios que dependen de una sola alerta de síntoma y pregunta si alguien la ha visto saltar en serio o en un ensayo. Planificad una prueba y comprobad toda la vía: detección, encaminamiento, notificación, manual de procedimiento. Considerad si un fallo de la canalización de alertas sería siquiera visible.

**6. ¿Cómo podrían manipularse aquí estos números, y qué notaríamos?** Pide al equipo que describa, con honestidad, cómo podrían hacer que cada cifra parezca mejor sin mejorar nada. Acordad luego qué barrera de protección lo mostraría y quién la mira. Nombrar los trucos de antemano los hace menos tentadores (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos que construyen y operan un servicio deciden lo que informa de sí mismo, así que la calidad de las alertas empieza en la definición de terminado. Una funcionalidad nueva que se entrega con su propio indicador y su propia alerta probados evita una monitorización añadida a toro pasado tras el primer incidente. Trata el ajuste de alertas como trabajo ordinario de la lista de pendientes.

### Equipos de servicio y operaciones

Los equipos de operaciones llevan el buscapersonas y sienten primero el costo, así que poseen el ritmo de revisión, el etiquetado y el latido de la canalización. Cuando una alerta es errónea, la corrección pertenece al responsable de la regla, no a quien recibió el aviso.

### Liderazgo y gobernanza

Los líderes pueden pedir cifras de detección y de accionabilidad por servicio, financiar el tiempo de ajuste y resistirse a una meta de volumen de alertas que premie el silencio. Un volumen decreciente es una buena noticia solo si la proporción de detección y el tiempo de detección se mantienen estables. Los límites sostenibles de guardia son una decisión de dotación y de diseño, no motivacional.

### Clientes y usuarios

Los clientes nunca ven una alerta; ven si el servicio falló y cuánto se tardó en arreglarlo. Una buena monitorización se nota en incidentes corregidos antes de que ellos los noten, y en menos casos en que un cliente informa primero. Donde la organización use medidas de experiencia (véase el tema 5.1, Métricas de SLA, OLA y XLA), la proporción de incidentes informados primero por usuarios es un indicador directo de la brecha de experiencia.

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio opera una plataforma de pedidos con cuatro equipos de producto y un equipo de plataforma que da soporte a la rotación de guardia. Todos los números de este ejemplo son ilustrativos. Durante cuatro semanas (ilustrativo) la rotación recibió 240 avisos, 70 de ellos entre las 22:00 y las 07:00. El equipo revisa cada aviso con cuatro etiquetas: accionable, falso positivo, real pero no merece un aviso y duplicado.

La revisión muestra una tasa de alertas accionables del 31 por ciento (ilustrativo) y una tasa de falsos positivos del 22 por ciento (ilustrativo). Cinco reglas produjeron el 58 por ciento de los avisos (ilustrativo), y la mayor era un umbral de disco en un servidor por lotes que siempre se recuperaba solo. La proporción detectada por monitorización del trimestre anterior fue del 62 por ciento (ilustrativo), y el tiempo mediano de detección fue de 14 minutos (ilustrativo) con un percentil 95 de 51 minutos (ilustrativo).

El equipo rebaja tres reglas ruidosas a una cola de tickets, fusiona duplicados para que un fallo produzca un aviso, sustituye la alerta del recuento bruto de errores en el pago por una alerta de tasa de consumo del presupuesto de errores (véase el tema 5.2, SLI, SLO y presupuestos de errores) y añade una alerta de síntoma para los correos de confirmación de pedido, una brecha detrás de dos incidentes informados por clientes. Cada cambio es un elemento de la lista de pendientes con un responsable. Cuatro semanas después los avisos bajan a 96 (ilustrativo) y la tasa accionable sube al 64 por ciento (ilustrativo), mientras la proporción de detección sube al 71 por ciento (ilustrativo) y el tiempo mediano de detección se mantiene en 14 minutos. La calma parece ganada.

El riesgo de manipulación aparece en el tercer mes. Un gerente nuevo fija una meta informal de menos de 60 avisos por cuatro semanas, y una rotación la alcanza alargando el retraso de la alerta de errores del pago. Su proporción de detección cae al 55 por ciento (ilustrativo) y su tiempo de detección en el percentil 95 sube a 80 minutos (ilustrativo). Como las barreras de protección están junto al volumen, la revisión lo detecta. El equipo retira la meta de volumen, restablece la alerta y registra el caso en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Perspectiva por sector

**Startup.** Con un puñado de ingenieros todos de guardia, la prioridad es una política de avisos corta y unas pocas alertas de síntoma en los caminos que generan ingresos. Basta una mirada de diez minutos el lunes a lo que despertó a la gente. El principal riesgo es no tener alertas, de modo que los clientes sean la monitorización; cuenta con qué frecuencia te lo dijo primero un cliente.

**Pequeña empresa.** Las organizaciones pequeñas suelen apoyarse en la monitorización de un proveedor. Las medidas útiles son la cobertura de detección de los pocos sistemas que paralizan el negocio y la proporción de incidentes hallados por los usuarios. Pide a los proveedores los datos de alertas a los que te da derecho tu contrato.

**Gran empresa.** Las grandes organizaciones tienen muchas herramientas y rotaciones, y cada equipo puede definir "accionable" de forma distinta. Estandariza definiciones y etiquetas, revisa a nivel de equipo y agrega por servicio en lugar de por herramienta. Las plataformas de correlación de eventos reducen el volumen a escala pero necesitan sus propias comprobaciones de exhaustividad.

**Gobierno y sector público.** Algunos servicios funcionan en horario de oficina y otros, como los sistemas de emergencias o de prestaciones, funcionan de forma continua. La cobertura de detección y las alertas probadas importan más donde el fallo conlleva consecuencias legales o de seguridad, y los registros de pruebas pueden respaldar la auditoría. Informa a los órganos de supervisión de la cobertura y de la detección, no de los recuentos de alertas en bruto, que son fáciles de malinterpretar (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Las razones para invertir son prácticas. Una mejor detección acorta el tiempo que los usuarios se ven afectados. Menos avisos inútiles protegen el sueño, reducen el abandono de la rotación y reservan la atención para las alertas que importan. El costo de una mala calidad de alertas es difícil de ver porque se reparte entre sueño interrumpido, respuestas lentas y salidas de ingenieros con experiencia.

El costo de recoger estas métricas es pequeño si las herramientas de alertas, de avisos y de incidentes pueden unirse, y moderado si las etiquetas se añaden a mano. Los costos principales son el tiempo de revisión semanal, el trabajo de ajuste y eliminación, y las pruebas ocasionales de detección. Podar las reglas sin uso también recorta los costos de licencias y de almacenamiento de la monitorización, y el costo total de propiedad debe incluir el tiempo de las personas.

El retorno aparece en unos pocos meses como rotaciones más tranquilas, una proporción detectada por monitorización creciente y un tiempo de detección que no empeora. Para convertirlo en dinero, compara el costo de las horas de incidentes y de la rotación de personal con el costo de la revisión, usando tus propias cifras. No uses promedios del sector salvo que puedas citar una fuente verificada.

## Antipatrones y trampas

- **Fijar metas para el volumen de alertas.** Una meta sobre el recuento premia el silencio e invita a ocultar alertas. Fija metas sobre la tasa de alertas accionables y la proporción de detección, y usa el volumen como una cifra de contexto con un límite de sostenibilidad elegido por el equipo.
- **Alertar sobre cada causa.** Decenas de avisos de nivel de causa producen ruido y aun así pasan por alto el síntoma en que nadie pensó. Alerta en su lugar sobre síntomas de cara al usuario.
- **Añadir una alerta tras cada incidente y no eliminar nunca ninguna.** Empareja cada alerta nueva con una revisión de las que vuelve redundantes.
- **Contar alertas sin etiquetarlas.** Un recuento sin un juicio de utilidad no puede distinguir una rotación ruidosa de una ocupada. Etiqueta una muestra cada semana, aunque sea con pocos minutos.
- **Tratar la cobertura como un recuento de alertas.** Un servicio con cincuenta alertas de causa y ninguna de síntoma está mal cubierto. Define la cobertura como detección de síntomas probada.
- **Clasificar a las personas por avisos atendidos o con acuse de recibo.** Castiga a los miembros de la rotación que toman los turnos difíciles y fomenta evitar el buscapersonas. Informa por rotación y servicio y busca soluciones de diseño.
- **No probar nunca la vía de las alertas.** Una alerta que no se ha visto funcionar es una suposición. Incluye pruebas de alertas en los simulacros y monitoriza la propia canalización.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Política de avisos y propiedad de las reglas | Alertas añadidas ad hoc; nadie sabe por qué existen muchas | Algunos equipos tienen una política y responsables de sus reglas | Una política de avisos breve; cada regla de aviso tiene un responsable y un manual de procedimiento | Vigencia de las reglas con seguimiento y revisada; reglas sin uso eliminadas según un calendario | Política y propiedad adaptadas entre equipos y proveedores a medida que cambian los servicios |
| Medición de la calidad de las alertas | Quejas por el ruido; sin recuentos | Volumen contado por algunos equipos; sin etiquetado | Revisión semanal con etiquetas comunes; tasa de alertas accionables y de falsos positivos informadas por servicio | Tasas con seguimiento de su tendencia y emparejadas con medidas de detección; mejora financiada | Calidad vinculada entre servicios y proveedores; definiciones revisadas cuando dejan de informar decisiones |
| Detección y cobertura | Clientes y colegas informan de la mayoría de los problemas | Alertas de síntoma en unos pocos servicios clave | Cobertura de detección con seguimiento y alertas probadas; primera señal registrada en cada incidente | Tiempo de detección y proporción detectada por monitorización revisados con una barrera de protección; las brechas pasan a ser trabajo planificado | Detección probada de forma rutinaria entre dependencias y proveedores, incluida la canalización de alertas |
| Uso en la mejora | Las correcciones de alertas siguen a la peor noche | Las correcciones siguen a los incidentes | Cada revisión produce al menos un cambio | Cambios seguidos hasta su efecto en el volumen, la accionabilidad y la detección | Carga de rotación, detección y presupuestos de errores revisados juntos para orientar la inversión |

## Lista de verificación

- [ ] Tenemos una política de avisos escrita de unas pocas frases que dice qué merece un aviso.
- [ ] Cada regla de aviso tiene un responsable, un propósito y un vínculo a un manual de procedimiento.
- [ ] Cada rotación revisa lo que saltó al menos cada semana y etiqueta cada alerta.
- [ ] Cada revisión produce al menos un cambio registrado en una regla.
- [ ] Informamos el volumen de alertas, la tasa de alertas accionables y la tasa de falsos positivos por rotación y servicio, nunca por persona.
- [ ] Cada incidente registra cómo se detectó por primera vez, con una opción de desconocido.
- [ ] Estimamos el inicio del impacto a partir del historial del indicador de nivel de servicio e informamos la mediana y el percentil 95 del tiempo de detección.
- [ ] Cada servicio incluido tiene una alerta de síntoma que se ha probado en los últimos 12 meses.
- [ ] Una comprobación de latido nos avisa si la canalización de alertas se detiene.
- [ ] Hemos acordado una carga fuera de horario sostenible para cada rotación y la revisamos.
- [ ] No se fija ninguna meta sobre el volumen de alertas por sí solo.

## Prompts de IA

**Propósito: Redacta una política de avisos para un servicio a partir de sus indicadores y consecuencias.**

```text
Ayúdame a redactar una política de avisos para el servicio [service name].
Contexto: los usuarios son [user group]; los síntomas de cara al usuario que nos importan son [symptoms, for example errors, latency, unavailability]; las consecuencias de un fallo omitido son [consequences]; la rotación de guardia es [rotation description, for example hours and team size].
Escribe una política breve (menos de 200 palabras) que diga qué merece un aviso, qué va a una cola de tickets y qué se queda en un panel.
No inventes umbrales ni valores de referencia; deja marcadores [threshold] para que los fijemos a partir de nuestros propios datos.
Enumera las preguntas que nos harías antes de finalizarla, y enumera tus supuestos.
```

**Propósito: Analiza una revisión de alertas exportada en busca de patrones de ruido.**

```text
Voy a pegar una tabla de alertas de [period] de la rotación [rotation name] con las columnas: [column names, for example rule, time, label, action taken, service].
Calcula la tasa de alertas accionables, la tasa de falsos positivos, la proporción fuera de horario y la proporción de alertas de las cinco reglas más ruidosas, usando solo los datos que pego.
Sugiere qué reglas ajustar, fusionar, rebajar o eliminar, con un motivo para cada una, y marca cada sugerencia como una hipótesis que comprobar.
Informa por regla, servicio y rotación, nunca por persona. No inventes valores de referencia.
Enumera tus supuestos y las filas que excluiste.
```

**Propósito: Comprueba un conjunto de métricas de alertas en busca de riesgos de manipulación antes de publicarlas.**

```text
Estas son las métricas de calidad de alertas que planeamos publicar: [list of metrics with definitions and formulas].
Para cada métrica, describe dos formas en que podría manipularse o malinterpretarse en nuestro contexto de [organization type and service], y sugiere una barrera de protección emparejada de la misma lista o una práctica que podamos adoptar.
Señala cualquier métrica que se muestre sin su barrera de protección.
No inventes fuentes ni valores de referencia.
Enumera tus supuestos sobre cómo registran nuestras herramientas las alertas y los incidentes.
```

**Propósito: Planifica una prueba de detección para servicios con una cobertura débil.**

```text
Nuestros servicios son [list of services], y las alertas de síntoma que creemos que existen son [list of alerts].
Propón un plan de prueba seguro para el próximo [game day or rehearsal] que compruebe, para cada servicio, que un síntoma deliberado activa la alerta, llega a [rotation] y enlaza con un manual de procedimiento.
Di a quién hay que avisar de antemano y cómo registrar los resultados para la cobertura de detección.
No inventes funciones de herramientas; pregúntame cómo funciona [monitoring tool].
Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una medida relacionada y la barrera de protección que debe acompañar a una métrica de calidad de alertas.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen coherentes la plantilla, la tabla de manipulación y las referencias cruzadas.

## Puntos clave

- Juzga las alertas por si llevaron a una acción, y juzga la monitorización por cuántos problemas reales captó; la precisión y la exhaustividad se protegen mutuamente.
- Avisa por síntomas que sienten los usuarios, ata los umbrales al objetivo de nivel de servicio donde exista uno y guarda las causas para el diagnóstico.
- Revisa cada semana lo que saltó, etiquétalo y haz al menos un cambio cada vez.
- No fijes nunca una meta sobre el volumen de alertas por sí solo; léelo junto a la tasa de alertas accionables, la proporción detectada por monitorización y el tiempo de detección.
- Prueba las alertas y la canalización de alertas, porque una alerta sin probar es una suposición.
- Informa por rotación y servicio, nunca por persona, y trata la carga de guardia sostenible como un objetivo de diseño.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
