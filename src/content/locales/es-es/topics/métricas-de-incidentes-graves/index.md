# Métricas de incidentes graves

**Mide los incidentes graves como eventos raros y costosos de los que aprender, no como una tabla de clasificación: cuéntalos, cronométralos con honestidad, dimensiona su impacto en los clientes, comprueba que se informó a la gente y demuestra que las acciones de seguimiento se llevaron a cabo.**

## Resumen y motivación

Un incidente grave es un incidente lo bastante serio como para necesitar una respuesta más allá de la rutina normal. [ITIL](https://en.wikipedia.org/wiki/ITIL), el marco más conocido de gestión de servicios de TI, describe la [gestión de incidentes](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) como el restablecimiento del funcionamiento normal del servicio lo más rápido posible, y espera que las organizaciones manejen sus incidentes más serios por una vía distinta y más coordinada. Cómo traza una organización esa línea es decisión suya. Una elección común es un incidente que afecta a muchos usuarios o a un servicio crítico y necesita que varios equipos trabajen juntos bajo un coordinador. Escribe tu propia definición, porque toda métrica de este tema depende de ella.

Los incidentes graves son pocos. Un equipo puede ver decenas de incidentes ordinarios a la semana y dos o tres graves por trimestre. Eso cambia la forma de medir. Las estadísticas ordinarias del volumen de incidentes y del tiempo de resolución (véanse el tema 3.2, Volumen y prioridad de incidentes, y el tema 3.3, Tiempo de respuesta y resolución de incidentes) suponen muchos eventos y premian los promedios. Con un puñado de incidentes graves por periodo, un promedio lo domina una mala noche, una línea de tendencia es sobre todo ruido y un [percentil](https://en.wikipedia.org/wiki/Percentile) carece de sentido con cinco puntos de datos (véase el tema 1.6, Alfabetización estadística para métricas de servicio). El enfoque honesto es mostrar cada incidente grave como su propia fila, con su propia cronología, y resumir solo sobre ventanas más largas.

Las visiones ágil y de ITIL se encuentran aquí más directamente que en cualquier otro punto del libro. ITIL aporta la estructura: un incidente grave declarado, un coordinador con nombre, una comunicación definida a las partes afectadas y una revisión posterior. Las tradiciones [ágil](https://en.wikipedia.org/wiki/Agile_software_development) y de [ingeniería de fiabilidad de sitios (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) aportan los hábitos: un [comandante del incidente](https://en.wikipedia.org/wiki/Incident_commander) que dirige la respuesta, la revisión sin culpa de lo ocurrido y un enfoque en el aprendizaje que alimenta la mejora continua. El libro *Site Reliability Engineering* de Google describe tanto el patrón de comando del incidente como la práctica de la revisión posterior (véanse las Referencias). Un [análisis posterior](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem) en este sentido es un relato escrito de un incidente, de sus causas y de las acciones que siguen, y el término se usa aquí indistintamente con "revisión posterior al incidente".

Este tema cubre cinco preguntas. ¿Con qué frecuencia ocurren los incidentes graves? ¿Cuánto duran y cuánto de ese tiempo se pasa antes de que alguien declare uno? ¿Cuántos usuarios, y cuáles, lo sintieron? ¿Supo la gente de nosotros a tiempo y con un ritmo constante? ¿Y ocurrió el seguimiento prometido? Los temas relacionados cubren lo que los rodea: la disponibilidad (véase el tema 5.3, Métricas de disponibilidad), la calidad de la revisión escrita (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje), las causas subyacentes (véase el tema 4.1, Métricas de gestión de problemas) y el cambio que a menudo los desencadena (véase el tema 4.4, Fallos de cambio y retrabajo).

Términos usados en este tema:

- **Incidente grave:** un incidente que cumple tus criterios de declaración escritos y activa el proceso de incidentes graves.
- **Declaración:** el momento en que alguien con autoridad invoca formalmente el proceso de incidentes graves.
- **Tiempo de restablecimiento:** el tiempo desde el inicio del impacto en los clientes hasta el momento en que se restablece el servicio para los usuarios. El momento de restablecer el servicio no es lo mismo que encontrar la [causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Comandante del incidente:** el rol que coordina la respuesta, asigna tareas y decide. Es un rol por la duración del incidente, no un cargo.
- **Revisión posterior al incidente:** el examen estructurado y sin culpa de un incidente después de restablecido el servicio.
- **Acción de seguimiento:** un cambio específico, con responsable y fecha, que se desprende de una revisión.

## Principios clave

- **Muestra los eventos y luego resume.** Los eventos raros merecen cronologías individuales. Informa cada incidente grave por separado y usa estadísticas de resumen solo sobre una ventana larga, con el recuento a su lado.
- **Arranca el reloj en el impacto, no en la toma de conciencia.** Una duración que empieza cuando alguien se da cuenta oculta la brecha de detección, que suele ser la mayor parte de la historia.
- **Mide la experiencia del usuario, no el esfuerzo del equipo.** El impacto en los clientes es la razón de ser del proceso. Las horas de esfuerzo de quienes responden son un costo que seguir, nunca una puntuación.
- **La comunicación forma parte del restablecimiento.** Un servicio que se restablece mientras los usuarios siguen adivinando solo se ha arreglado a medias. Trata la puntualidad de las actualizaciones como una medida de la respuesta.
- **La revisión no ha terminado hasta que terminan las acciones.** Un documento completo con acciones abiertas no ha cambiado nada. Mide el seguimiento, no solo la existencia de una revisión.
- **No clasifiques nunca a las personas y no castigues nunca el declarar.** Si declarar un incidente grave perjudica en un informe al equipo de quien declara, se declararán menos incidentes y las métricas mejorarán mientras el servicio empeora.
- **Mantén estables los criterios de declaración.** Mover el umbral cambia todas las métricas de este tema. Registra cada cambio con su motivo y su fecha.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Número de incidentes graves | Incidentes graves declarados en un periodo, por servicio | Recuento de incidentes que cumplieron los criterios de declaración y se declararon en el periodo, por hora de declaración; los incidentes rebajados en la primera hora se enumeran por separado y se excluyen | recuento por trimestre | Registros de incidentes de la herramienta ITSM con la marca de incidente grave | Gestión de incidentes | Revisión de la salud del equipo o del servicio | Informe mensual, tendencia trimestral |
| Duración del incidente grave | Tiempo que los clientes se vieron afectados | Hora de servicio restablecido menos hora de inicio del impacto, por incidente. El inicio del impacto es la evidencia más temprana en la monitorización o el primer informe de un usuario, lo que ocurra antes. El restablecimiento parcial se registra como un evento propio, y el restablecimiento completo detiene el reloj | minutos, por incidente | Cronología de la monitorización, cronología del incidente en la herramienta ITSM | Gestión de incidentes; gestión de niveles de servicio | Tiempo de recuperación en las métricas de entrega (véase el tema 2.8, Métricas DORA) | Por incidente; mediana y máximo de ventana larga cada trimestre |
| Tiempo hasta la declaración | Retraso entre el inicio del impacto y la declaración de un incidente grave | Hora de declaración menos hora de inicio del impacto, por incidente. Los incidentes nunca declarados se encuentran mediante una revisión trimestral de incidentes ordinarios de alto impacto y se incluyen con una hora de declaración de n/a (nunca declarado) | minutos, por incidente | Cronología de la monitorización, rastro de auditoría de la herramienta ITSM | Gestión de incidentes; monitorización y gestión de eventos | Definición de listo para el escalado en los acuerdos de trabajo del equipo | Por incidente |
| Impacto en los clientes | Cuántos usuarios y cuánto uso se vieron afectados | Usuarios afectados (o solicitudes fallidas) multiplicados por los minutos afectados, por incidente. Cuenta solo los usuarios que intentaron usar el servicio durante la ventana de impacto. Se excluye el mantenimiento planificado | minutos-usuario, o solicitudes fallidas | Telemetría del servicio, registros de contactos de soporte | Gestión de niveles de servicio; gestión de incidentes | Indicadores de nivel de servicio de cara al usuario (véase el tema 5.2, SLI, SLO y presupuestos de errores) | Por incidente |
| Puntualidad de la comunicación | Si se informó a tiempo a las partes afectadas | Proporción de incidentes graves en que el primer aviso de cara al cliente salió dentro de la meta tras la declaración, y proporción de actualizaciones programadas enviadas dentro del intervalo acordado. El reloj arranca en la declaración. Se excluyen los mensajes solo internos | porcentaje de incidentes; porcentaje de actualizaciones | Historial de la página de estado, registro de comunicaciones de la herramienta ITSM | Gestión de incidentes; gestión de niveles de servicio | Comunicación con las partes interesadas en el acuerdo de trabajo del equipo | Por incidente; resumen trimestral |
| Puntualidad de la finalización de la revisión | Si la revisión se realizó lo bastante pronto como para ser útil | Proporción de incidentes graves con una revisión publicada dentro del número acordado de días laborables tras el restablecimiento. El reloj se detiene en la publicación, no en el primer borrador. Se excluyen los incidentes que aún están dentro de la ventana | porcentaje | Repositorio de revisiones, herramienta ITSM | Mejora continua; gestión de problemas | Seguimiento de la mejora | Trimestral |
| Seguimiento de las acciones | Si se completan las acciones de la revisión | Acciones de revisión completadas en su fecha límite / acciones de revisión con vencimiento en el periodo. Las acciones cerradas como "no se hará" se cuentan por separado con un motivo, no se ocultan | porcentaje; recuento de vencidas | Gestor de incidencias vinculado a la revisión | Mejora continua; gestión de problemas | Elementos de la lista de pendientes procedentes de retrospectivas | Mensual |
| Tasa de incidentes graves repetidos | Repetición de la misma causa | Incidentes graves del periodo cuya causa registrada coincide con la de un incidente grave anterior de los doce meses previos / incidentes graves del periodo. La coincidencia se determina por el campo de causa, revisado a mano | porcentaje, con el recuento mostrado | Registros de revisiones, registros de problemas | Gestión de problemas | Trabajo de prevención en la lista de pendientes | Trimestral |

Cada fila necesita una regla de reloj escrita antes de que se confíe en ella. Las disputas sobre el inicio del impacto y la hora de restablecimiento son comunes y es mejor zanjarlas de antemano (véase el tema 1.5, Fuentes de datos e instrumentación).

## Recomendaciones

### Escribe qué hace que un incidente sea grave

**Publica criterios de declaración que cualquier persona de guardia pueda aplicar.** Los criterios suelen combinar el impacto (usuarios afectados, un servicio crítico degradado, un riesgo de seguridad o legal) con una necesidad de coordinación (se requiere más de un equipo). Una lista corta con ejemplos supera a una matriz larga. Indica quién puede declarar y deja claro que declarar de buena fe nunca es un error, aunque el incidente resulte ser menor.

**Registra la versión de los criterios en cada registro de incidente.** Cuando el umbral se mueve, las tendencias se mueven con él. Un número de versión o una fecha en cada registro permite comparar lo comparable y explicar un salto en el recuento que provino de un cambio de regla.

### Cuenta y clasifica sin convertir el recuento en una meta

**Informa el recuento con su contexto.** Muestra el número de incidentes graves por trimestre junto al servicio, el desencadenante (cambio, capacidad, dependencia, seguridad, otro) y la versión de los criterios. Un recuento sin contexto invita a metas como "menos de tres por trimestre", que enseñan a la gente a no declarar. Trata un recuento decreciente como una buena noticia solo cuando el tiempo hasta la declaración y el impacto en los clientes son estables.

**Separa declarados, rebajados y omitidos.** Sigue los incidentes que se declararon y se rebajaron, porque muestran si los criterios son sensatos. Revisa cada trimestre una muestra de incidentes ordinarios en busca de los que deberían haberse declarado. Los omitidos son los más informativos.

### Cronometra el incidente desde el lado del usuario

**Arranca el reloj cuando los clientes se ven afectados.** Usa la evidencia fiable más temprana, que suele ser una señal de monitorización anterior al primer ticket. Cuando el inicio sea incierto, registra la estimación y su fuente en lugar de la hora en que alguien se dio cuenta. La brecha entre el inicio del impacto y la declaración es una métrica por sí misma y suele ser la más barata de mejorar.

**Divide la cronología en fases.** La detección, la declaración, el diagnóstico, la mitigación y el restablecimiento completo tienen cada uno causas de retraso y responsables distintos. Un desglose por fases de cada incidente muestra adónde fue el tiempo sin necesidad de un promedio. Restablecer el servicio con una solución provisional y corregir la causa son eventos distintos, y el segundo pertenece a la gestión de problemas.

**Usa la mediana y el peor caso sobre ventanas largas, con el recuento.** Para un año de datos, informa la mediana y la duración más larga, e indica de cuántos incidentes provienen. Evita un único tiempo medio de restablecimiento para los incidentes graves. Con pocos eventos es inestable y una sola caída larga lo distorsiona (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

### Dimensiona el impacto en los clientes en términos que los usuarios reconocerían

**Prefiere el impacto basado en usuarios al impacto basado en servidores.** Las solicitudes fallidas, los usuarios afectados o las transacciones afectadas describen lo que les pasó a las personas. Los minutos de servicio degradado en un componente describen lo que le pasó a una máquina. Donde tengas indicadores de nivel de servicio, úsalos (véase el tema 5.2, SLI, SLO y presupuestos de errores) y conecta el incidente con el panorama de la disponibilidad (véase el tema 5.3, Métricas de disponibilidad).

**Añade una declaración de impacto en lenguaje llano a cada registro.** Una o dos frases que nombren quién se vio afectado y qué no pudo hacer. Los contactos de soporte, las menciones en redes sociales y los escalados de clientes son evidencia para la declaración, no métricas que maximizar.

### Mide la comunicación como parte de la respuesta

**Fija metas de comunicación por audiencia.** Los clientes afectados, las partes interesadas internas y los directivos necesitan mensajes distintos en momentos distintos. Acuerda una meta para el primer aviso tras la declaración y un ritmo constante de actualizaciones, y mide el cumplimiento por incidente. El ritmo importa más que el contenido: una actualización que dice "sin cambios, próxima actualización en treinta minutos" y llega a tiempo genera más confianza que el silencio.

**Mantén separadas en manos distintas la respuesta y la comunicación.** Un responsable de comunicaciones libera al comandante del incidente para centrarse en el diagnóstico. Un equipo pequeño puede usar una lista de verificación y una plantilla redactada de antemano.

### Cierra el ciclo del aprendizaje

**Celebra pronto la revisión y publícala.** La memoria se desvanece, así que fija una ventana para la revisión y mide si se cumplió. La finalización de la revisión importa menos que lo que la revisión cambia, así que empareja con el seguimiento. El libro *Site Reliability Engineering* de Google defiende la revisión sin culpa y su redacción por escrito (véanse las Referencias), y el tema 4.2 (Métricas de análisis posteriores y aprendizaje) cubre la calidad de la revisión.

**Sigue las acciones hasta el final y permite un "no se hará" honesto.** Pon cada acción en la lista de pendientes que el equipo propietario ya usa, con un responsable y una fecha. Registra las acciones que se rechazan, con el motivo, en lugar de dejar que se pudran. Revisa las acciones vencidas en una revisión de operaciones o de servicio y pregunta qué las bloquea. Limita el número de acciones por revisión para que las que queden sean las que importan.

**Busca patrones entre incidentes y envíalos a la gestión de problemas.** Las causas repetidas, los desencadenantes comunes y las brechas de detección recurrentes son señales que las revisiones individuales pasan por alto. Aliméntalos al proceso de problemas y errores conocidos (véase el tema 4.1, Métricas de gestión de problemas) y a la planificación de los equipos que poseen los servicios. Trata una tasa de repetición creciente como un aviso para investigar, no como un veredicto.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Número de incidentes graves | Subir el umbral de declaración, mantener los incidentes en prioridad "alta" para que nunca se declaren, dividir un suceso en varios registros o fusionar varios en uno | Criterios fijos y versionados; muestra trimestral de incidentes ordinarios de alto impacto; impacto en los clientes y tiempo hasta la declaración seguidos junto al recuento |
| Duración del incidente grave | Mover el reloj a un inicio de impacto posterior, declarar "restablecido" mientras los usuarios siguen fallando o cerrar y reabrir un registro nuevo | Inicio del impacto tomado de la monitorización; restablecimiento confirmado por un indicador de cara al usuario; registros reabiertos y vinculados contados como un solo incidente |
| Tiempo hasta la declaración | Declarar pronto todo para parecer rápido, o fechar retroactivamente la declaración en el inicio del impacto | Proporción de incidentes declarados rebajados después; rastro de auditoría de la hora de declaración; muestra de cronologías frente a la monitorización en bruto |
| Impacto en los clientes | Estrechar la definición de "afectado", contar solo los usuarios que plantearon un ticket o medir una dependencia que siguió funcionando | Impacto derivado de la telemetría además de los contactos; una declaración de impacto en lenguaje llano revisada en la revisión del incidente |
| Puntualidad de la comunicación | Publicar un aviso vago para arrancar el reloj, enviar actualizaciones sin contenido o contar los mensajes internos | Comprobación del contenido de una muestra de actualizaciones; opinión de los clientes sobre la claridad; contar solo los avisos de cara al cliente |
| Puntualidad de la finalización de la revisión | Publicar un documento escaso para cumplir la fecha, o declarar una revisión "no necesaria" | Calidad de la revisión leída por un par en una muestra (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje); se muestra la proporción de revisiones dispensadas |
| Seguimiento de las acciones | Escribir acciones vagas o triviales fáciles de cerrar, cerrar acciones sin hacer el trabajo o reetiquetar como "no se hará" | Calidad de las acciones muestreada; acciones cerradas verificadas frente al cambio en el sistema; proporción y motivos de "no se hará" revisados |
| Tasa de incidentes graves repetidos | Registrar cada causa como nueva eligiendo otra redacción, o atribuirlo todo a "error humano" | Una taxonomía de causas corta con definiciones; campos de causa revisados por alguien ajeno al incidente; "error humano" como causa no aceptada sin una explicación del sistema |

Una lectura sana es un recuento moderado y bastante estable de incidentes declarados, con alguna rebaja ocasional y algún caso omitido hallado en la revisión. El tiempo hasta la declaración es corto y decreciente, el impacto en los clientes por incidente se entiende y baja donde se hizo trabajo de prevención, y casi todas las actualizaciones de cara al cliente salen según lo programado. Las revisiones se publican a tiempo y sus acciones están en su mayoría terminadas, con un conjunto pequeño y honesto de acciones rechazadas. Si todo parece perfecto, pregunta si los criterios han derivado o si la gente ha dejado de declarar (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). La [ley que lleva el nombre de Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se ve aquí con mayor facilidad, porque el costo de un mal número es una menor disposición a dar la alarma.

## Compensaciones: ventajas e inconvenientes

| Elección | Fortaleza | Debilidad |
| --- | --- | --- |
| Mostrar cada incidente como una fila | Conserva el contexto, evita promedios engañosos con recuentos pequeños | Más difícil de resumir para los líderes; necesita una breve narración por incidente |
| Informar un recuento de incidentes graves | Sencillo, familiar, visible para la dirección | Fácil de convertir en una meta; reacciona a los cambios en los criterios |
| Tiempo desde el inicio del impacto | Refleja la experiencia del usuario, deja al descubierto la brecha de detección | El inicio del impacto a veces es incierto y requiere juicio |
| Tiempo desde la declaración | Fácil de capturar y comparar | Oculta la detección lenta y la declaración lenta |
| Minutos-usuario de impacto | Comparable entre incidentes y servicios | Necesita telemetría; trata a todos los usuarios y minutos como iguales |
| Tasa de finalización de la revisión | Fácil de recoger, anima el hábito | Premia el documento, no el aprendizaje |
| Tasa de seguimiento de las acciones | Conecta la revisión con el cambio | Puede manipularse con acciones triviales; necesita un responsable y una lista de pendientes |

Usa un conjunto pequeño de medidas que cubran todo el ciclo (declarar, restablecer, informar, aprender, terminar) en lugar de optimizar una. Añade medidas de impacto solo cuando exista la telemetría. Donde falte telemetría, una declaración de impacto escrita con cuidado sirve mejor que un número inventado.

## Preguntas para conversar con tu equipo

**1. ¿Qué hace exactamente que un incidente sea grave aquí, y todos los de guardia están de acuerdo?**
La definición es el cimiento de todos los demás números. Pide a tres personas que clasifiquen el mismo incidente reciente y compara las respuestas. El desacuerdo muestra dónde los criterios son vagos. El facilitador debe anotar ejemplos para añadir a los criterios escritos y acordar quién puede declarar. Cierra confirmando que declarar de buena fe es siempre aceptable, aunque el incidente se rebaje después.

**2. En nuestro último incidente grave, ¿cuánto pasó entre el inicio del impacto y la declaración?**
Reconstruye la cronología a partir de la monitorización, no de la memoria. La brecha suele ser mayor de lo esperado y a veces es la fase más larga. Pregunta qué señal existía y quién la vio, y si la brecha vino de criterios poco claros, de una alerta que faltaba o de reticencia a declarar. Elige un cambio que la acortaría y decide cómo sabrás que funcionó.

**3. ¿Quién se vio afectado, y cómo lo sabemos?**
Compara lo que el equipo creía en el momento con lo que muestran después la telemetría y los contactos de soporte. Pregunta qué clientes, si los hubo, se vieron más afectados que otros, y si eran los que más importan al negocio o los que menos capacidad tenían de afrontarlo. Discutid si la declaración de impacto es algo que un cliente reconocería. Acordad una medida de impacto que podáis recoger con fiabilidad la próxima vez.

**4. ¿Supo la gente de nosotros cuando lo necesitaba, y fue útil el mensaje?**
Comprueba el primer aviso y cada actualización frente al ritmo acordado. Lee los mensajes reales como lo haría un cliente. Pregunta si decían lo que se sabía, lo que no se sabía y cuándo llegaría la siguiente actualización. Discutid quién posee la comunicación durante un incidente y si esa persona está libre para hacerla.

**5. ¿Qué pasó con las acciones de nuestras tres últimas revisiones?**
Reúne las acciones en una lista y marca cada una como hecha, en curso, vencida o rechazada. Para las vencidas, pregunta qué las bloquea: capacidad, propiedad, prioridad o alcance poco claro. Decidid cómo se plantearán las acciones vencidas en la próxima reunión de operaciones o de planificación.

**6. Si nos midieran por el número de incidentes graves, ¿qué haríamos de otro modo, y estarían mejor los clientes?**
Esta pregunta saca a la luz los vectores de manipulación antes de que ocurran. Pide al grupo que sea sincero sobre lo que podría cambiar: los umbrales, las etiquetas, quién declara. Pregunta luego cuál es la mejor meta. Una buena respuesta se mueve hacia el impacto en los clientes, el tiempo hasta la declaración y el seguimiento, que son más difíciles de manipular sin ayudar a los usuarios. Registra la respuesta como una barrera de protección.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de producto se encuentran con los incidentes graves como interrupciones del trabajo planificado y como retroalimentación sobre sus propios cambios. Ganan más con números de impacto claros, con acceso rápido a sus propias cronologías de incidentes y con acciones de revisión que llegan a su lista de pendientes con margen para hacerlas. Reserva capacidad para el seguimiento de incidentes y trata las acciones como trabajo con el mismo rango que las funcionalidades. Comparte las categorías de causa para que un desencadenante recurrente conduzca a un cambio de práctica (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

### Equipos de servicio y operaciones

Los equipos de operaciones dirigen la respuesta y cargan con el costo del trabajo nocturno. Necesitan criterios que puedan aplicar a las 3 de la madrugada, un rol de comandante y de comunicaciones que puedan cubrir y herramientas que capturen la cronología a medida que ocurren los hechos y no de memoria después. Deben vigilar la carga que los incidentes graves ponen sobre un grupo pequeño de personas (véase el tema 5.7, Métricas de trabajo repetitivo y guardias) y usar las métricas de este tema para pedir trabajo de prevención, no para comparar a quienes responden.

### Liderazgo y gobernanza

Los líderes crean el clima que decide si la gente declara rápido e informa con honestidad. Deben pedir la historia de cada incidente grave y la tendencia a lo largo de un año, evitar metas sobre el recuento y preguntar por el impacto en los clientes, las brechas de detección y las acciones terminadas. Financia el trabajo de prevención que recomiendan las revisiones y revísalo en el mismo foro que los planes de entrega. La gobernanza puede entonces ver si las lecciones se convierten en cambio (véase el tema 5.2, SLI, SLO y presupuestos de errores, para una forma de vincular fiabilidad e inversión).

### Clientes y usuarios

Los clientes juzgan un incidente grave por cuánto tiempo se vieron afectados, por si se les informó y por si vuelve a ocurrir. Les sirven mejor los avisos honestos tempranos que los pulidos tardíos. Dales un canal de estado, un ritmo en el que puedan confiar y, después, un relato claro de lo ocurrido y de lo que cambiará. Donde existan contratos, informa en los términos acordados en el acuerdo de nivel de servicio (véase el tema 5.1, Métricas de SLA, OLA y XLA). Vale la pena preguntar por la satisfacción tras un incidente (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio opera una tienda, un servicio de pagos y un servicio de gestión de pedidos, cada uno propiedad de un equipo de producto, con un equipo de plataforma compartido de guardia. Un pequeño grupo de gestión de servicios dirige el proceso de incidentes graves. Todos los números de este ejemplo son ilustrativos.

En los dos últimos trimestres el minorista declaró cinco incidentes graves (ilustrativo). El grupo de gestión de servicios muestra cada uno como una fila con el inicio del impacto, la hora de declaración, la hora de restablecimiento, los pedidos fallidos estimados, la hora del primer aviso a los clientes y el estado de la revisión. Notan que la mediana de la brecha entre el inicio del impacto y la declaración es de 38 minutos (ilustrativo), casi tan larga como la mediana del tiempo desde la declaración hasta el restablecimiento, de 52 minutos (ilustrativo). Con cinco incidentes tratan ambos números como aproximados y leen las cronologías. Tres de los cinco muestran una alerta de monitorización que se disparó pronto y se quedó sin acusar recibo en un canal compartido.

El equipo decide encaminar esa clase de alerta al buscapersonas de guardia y añadir una línea a los criterios que diga que una señal sostenida de fallo en el pago es suficiente para declarar, sin esperar a los tickets. También fijan una meta de primer aviso a los clientes dentro de los 20 minutos siguientes a la declaración (ilustrativo), y la comprueban por incidente. Dos de cinco la cumplieron. El equipo de despliegue añade una plantilla de página de estado que un responsable de comunicaciones puede rellenar bajo presión.

Durante la misma revisión encuentran un riesgo de manipulación. Un gerente de un equipo de producto había propuesto una meta trimestral de "no más de dos incidentes graves". El grupo de gestión de servicios señala que el trimestre anterior hubo un incidente que se mantuvo en prioridad alta durante cuatro horas con clientes fallando al pagar, y que nunca se declaró porque el equipo estaba cerca del límite. Sustituyen la meta por tres medidas: el tiempo hasta la declaración, los pedidos fallidos por incidente y la proporción de acciones de revisión completadas a tiempo. Añaden como barrera de protección una muestra trimestral de incidentes de prioridad alta leída por alguien ajeno al equipo propietario. El trimestre siguiente el recuento de declarados sube a cuatro (ilustrativo), la mediana del tiempo hasta la declaración baja y la revisión muestreada no encuentra declaraciones omitidas.

## Perspectiva por sector

**Startup.** Una startup puede no tener un proceso formal de incidentes graves, solo quien esté despierto. Empieza con una definición de un párrafo, un coordinador con nombre para cada evento y un documento compartido que registre la cronología. Cuenta los incidentes y anota el impacto en una frase. La revisión puede ser una nota de media página, y el seguimiento, un elemento en la lista de pendientes del equipo.

**Pequeña empresa.** Una pequeña empresa suele depender de proveedores para gran parte de su servicio, así que la cronología incluye la espera a un proveedor. Registra en la cronología del incidente los tiempos de contacto y de respuesta del proveedor, porque explican gran parte de la duración y dan evidencia para las conversaciones contractuales. Mantén sencilla la comunicación con los clientes: un canal, una persona y un intervalo de actualización declarado.

**Gran empresa.** Las grandes empresas operan muchos servicios y tienen muchos incidentes en cada periodo, así que son útiles tanto un recuento por servicio como una consolidación. Los riesgos son criterios incoherentes entre divisiones y un proceso lo bastante pesado como para frenar la declaración. Alinea las definiciones, mantén ligero el proceso durante los primeros quince minutos y usa un formato de registro común para poder comparar el impacto y la comunicación.

**Gobierno y sector público.** Los organismos públicos suelen tener obligaciones legales, como notificar a un regulador o al público, y un mayor costo del fallo para los ciudadanos que no tienen alternativa. Añade medidas del cumplimiento de las obligaciones de notificación y del impacto en grupos vulnerables, y conserva registros que resistan una auditoría y las solicitudes de información pública. Los ciclos de contratación pueden retrasar las acciones de seguimiento, así que sigue las acciones bloqueadas y escálalas.

## Caso de negocio: motivaciones, ROI y TCO

El motivo es reducir el costo de los incidentes que más duelen: ingresos o servicio perdidos, confianza dañada, agotamiento del personal y exposición regulatoria. Un conjunto pequeño y coherente de medidas de incidentes graves muestra de dónde viene ese costo, si mejoran la detección y la comunicación y si la inversión en prevención está dando fruto. Las medidas que no muestran más que un recuento empujan el costo hacia la ocultación de incidentes.

Los costos de recogida son modestos si los datos ya viven en la herramienta ITSM, el sistema de monitorización y el gestor de incidencias. Los costos principales son acordar definiciones, vincular el registro del incidente con la monitorización y con la lista de pendientes de acciones, y el tiempo que lleva redactar cada revisión. Las métricas cuestan poco más allá de hacer coherente el registro.

El retorno aparece como un tiempo hasta la declaración más corto, una comunicación más clara, menos incidentes repetidos y menos retrabajo. No hay una cifra universal, así que estima la tuya: toma tu último año de incidentes graves, estima con finanzas el costo de una hora de impacto de cada servicio y compáralo con el costo del trabajo de seguimiento que necesitarías para prevenir las causas repetidas. El costo total de propiedad incluye el tiempo de los revisores, las herramientas para cronologías y páginas de estado, y la capacidad reservada para las acciones de seguimiento, que es donde la mayoría de los programas invierte poco.

## Antipatrones y trampas

- **Una meta para el número de incidentes graves.** Enseña a la gente a evitar declarar. En su lugar, sigue el tiempo hasta la declaración, el impacto y el seguimiento, y muestrea en busca de declaraciones omitidas.
- **Un único tiempo medio de restablecimiento para los incidentes graves.** Con pocos eventos, una sola caída larga lo domina. En su lugar, muestra cada incidente y luego la mediana y el más largo de un año con el recuento.
- **Arrancar el reloj en la declaración.** Oculta el retraso de detección y de declaración. En su lugar, arráncalo en la evidencia más temprana del impacto en los clientes e informa la brecha por separado.
- **Clasificar a quienes responden o a los equipos por métricas de incidentes.** Destruye la sinceridad y rompe la revisión. En su lugar, informa por servicio y sistema, y mantén los nombres fuera de los datos.
- **Tratar la revisión como terminada cuando se publica el documento.** El cambio es el punto. En su lugar, mide el seguimiento de las acciones y mira cada mes las acciones vencidas.
- **Cambios silenciosos de umbral.** Las tendencias pierden sentido. En su lugar, versiona los criterios y anota los cambios en el informe.
- **Contar solo los tickets como impacto.** Muchos usuarios afectados nunca llaman. En su lugar, usa la telemetría y añade una declaración de impacto en lenguaje llano.
- **Usar las métricas para asignar culpas.** La gente oculta entonces los hechos. En su lugar, mantén las revisiones sin culpa, céntrate en las condiciones y las decisiones, y busca causas del sistema.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definición y relojes | Grave significa lo que diga la persona que habla más alto; los tiempos vienen de la memoria | Algunos equipos tienen criterios y escriben las horas de inicio y fin | Una definición escrita y versionada, con reglas de reloj para el inicio del impacto, la declaración y el restablecimiento | Definición y relojes auditados frente a la monitorización; cambios registrados con motivos | Criterios y relojes acordados con proveedores y clientes, revisados cuando dejan de informar decisiones |
| Impacto y comunicación | Impacto descrito con anécdotas; actualizaciones enviadas cuando alguien se acuerda | Impacto estimado para algunos incidentes; algunos equipos usan una página de estado | Impacto medido a partir de la telemetría para los servicios clave; metas de actualización fijadas y seguidas | Impacto y comunicación con seguimiento de su tendencia y vinculados a la opinión de los clientes | Impacto compartido con clientes y proveedores en un formato común, con acciones de mejora conjuntas |
| Revisión y seguimiento | Revisiones raras y sin escribir; acciones olvidadas | Revisiones escritas por algunos equipos; acciones registradas pero sin seguimiento | Cada incidente grave revisado a tiempo; acciones seguidas en la lista de pendientes del equipo | Acciones vencidas y causas repetidas revisadas con una cadencia, con trabajo de prevención financiado | Patrones compartidos entre equipos y proveedores; el aprendizaje cambia de forma rutinaria el diseño y la planificación |
| Uso en las decisiones | Números citados a posteriori | Recuentos mostrados a los líderes sin contexto | Cronologías y tendencias mostradas a los equipos que poseen los servicios | Métricas emparejadas con barreras de protección y usadas para priorizar el trabajo de fiabilidad | Inversión en fiabilidad decidida conjuntamente con evidencia de impacto y repetición entre servicios |

## Lista de verificación

- [ ] Los criterios de declaración están escritos, versionados y son conocidos por todos los de guardia.
- [ ] Declarar de buena fe es explícitamente seguro, y no existe ninguna meta sobre el recuento.
- [ ] El inicio del impacto, la declaración y las horas de restablecimiento están definidos y tomados de la monitorización o de un rastro de auditoría.
- [ ] Cada incidente grave se muestra como su propia fila con una cronología por fases.
- [ ] El impacto en los clientes se deriva de la telemetría donde existe y se describe en una declaración en lenguaje llano.
- [ ] Las metas del primer aviso y del ritmo de actualización están fijadas y se comprueban por incidente.
- [ ] Una revisión se publica dentro de la ventana acordada y sus acciones están en la lista de pendientes del equipo propietario.
- [ ] Las acciones vencidas y las causas repetidas se revisan según un calendario.
- [ ] Una muestra trimestral de incidentes ordinarios de alto impacto comprueba si hay declaraciones omitidas.
- [ ] Cada métrica tiene una barrera de protección con nombre y ninguna métrica se usa para clasificar individuos.

## Prompts de IA

**Redacta criterios de declaración para su revisión.**

```text
Estoy redactando criterios para declarar un incidente grave en [organization
type]. Nuestros servicios son [list of services] y nuestros equipos son [list
of teams]. Los usuarios son [description of users]. Propón un conjunto breve de
criterios de declaración con dos o tres ejemplos para cada uno, una lista de
ambigüedades sobre las que un equipo podría discutir y preguntas que debería
zanjar con [stakeholders]. No inventes umbrales ni valores de referencia; usa
[placeholders] donde haga falta un número. Enumera tus supuestos.
```

**Reconstruye y critica la cronología de un incidente.**

```text
Esta es la cronología de un incidente grave: [paste timeline with timestamps and
sources]. Identifica el inicio del impacto, la declaración, la mitigación y el
restablecimiento completo, y di qué marcas de tiempo son inciertas y por qué.
Divide la duración en fases y anota dónde ocurrieron los mayores retrasos.
Sugiere preguntas para hacer a quienes respondieron y evidencia de monitorización
que buscar. No inventes hechos que no estén en la cronología. Enumera tus
supuestos.
```

**Revisa un conjunto de acciones posteriores al incidente.**

```text
A continuación están las acciones de [number] revisiones posteriores al incidente
de [service]: [paste actions with owner, due date, and status]. Agrúpalas por
tema, señala las que sean vagas, triviales o sin responsable, e identifica
patrones que sugieran un registro de problema o un elemento de la lista de
pendientes para [owning team]. No clasifiques a individuos ni a equipos por
desempeño. No inventes causas. Enumera tus supuestos y la información que
necesitarías para mejorar el análisis.
```

**Pon a prueba una métrica propuesta frente a la manipulación.**

```text
Planeamos seguir [metric name], definida como [definition] y medida a partir de
[data source]. Describe cómo podría manipularla [role], qué comportamiento
honesto podría desalentar y qué métrica o práctica de barrera de protección
emparejada detectaría cada caso. Mantén las sugerencias prácticas para un equipo
de [team size]. No inventes valores de referencia ni fuentes. Enumera tus
supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados y la barrera de protección que debe acompañar a cada métrica de incidentes graves.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una versión editada de este tema sigue la plantilla y las convenciones.

## Puntos clave

- Los incidentes graves son raros, así que muestra cada uno con su cronología y resume solo sobre ventanas largas con el recuento junto a la cifra.
- Arranca el reloj en el impacto en los clientes e informa como medida propia la brecha previa a la declaración.
- Mide el impacto en términos de usuarios y de uso, y añade una declaración en lenguaje llano para lo que los números omiten.
- Trata la puntualidad de la comunicación como parte de la respuesta, con metas por audiencia y un ritmo de actualización constante.
- Una revisión está terminada cuando terminan sus acciones, así que sigue el seguimiento y las causas repetidas.
- No fijes nunca una meta sobre el recuento, no clasifiques nunca a las personas y mantén seguro el declarar.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
