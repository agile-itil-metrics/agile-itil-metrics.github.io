# Métricas de satisfacción del cliente

**Las puntuaciones de satisfacción te dicen cómo se sintió la gente ante un momento de servicio, así que haz preguntas breves y honestas en el momento adecuado, lee los comentarios antes que los números y no dejes nunca que una puntuación se convierta en una cuota.**

## Resumen y motivación

Las medidas operativas dicen qué hizo el servicio. Las medidas de satisfacción dicen cómo fue recibirlo. Un ticket puede cerrarse dentro de su tiempo objetivo y aun así dejar atascado al usuario, y un servicio restablecido puede seguir sintiéndose como una mala semana. Los equipos ágiles hacen la misma pregunta al final de cada incremento: ¿ayudó esto a las personas a quienes iba dirigido? La gestión de servicios de TI (ITSM), tal como la codifica ITIL, la hace a través del valor que un servicio cocrea con sus clientes. La medición de la satisfacción es donde se encuentran las dos preguntas.

La [satisfacción del cliente](https://en.wikipedia.org/wiki/Customer_satisfaction) es una medida de hasta qué punto los productos y servicios cumplen o superan lo que esperan los clientes. En el trabajo de servicio se recoge normalmente mediante encuestas, y adopta tres formas comunes que este tema cubre:

- **Puntuación de satisfacción del cliente (CSAT):** una valoración de una interacción o un servicio concretos, normalmente en una escala de cinco puntos, informada como la proporción de respuestas satisfechas.
- **Puntuación neta de promotores (NPS):** basada en una pregunta sobre la probabilidad de que quien responde recomiende una empresa, un producto o un servicio. Quienes responden 9 o 10 son promotores, quienes responden de 0 a 6 son detractores, y la puntuación es el porcentaje de promotores menos el porcentaje de detractores. La [puntuación neta de promotores](https://en.wikipedia.org/wiki/Net_promoter_score) fue popularizada por Fred Reichheld en un artículo de 2003 de *Harvard Business Review*.
- **Puntuación de esfuerzo del cliente (CES):** una valoración de cuánto esfuerzo costó lograr algo, o de cuán fácil fue. Sus autores sostuvieron que reducir el esfuerzo predice la lealtad mejor que deleitar a la gente. Trata esa afirmación como una hipótesis que poner a prueba en tu propio contexto, no como un hecho asentado.

En un entorno interno de TI el "cliente" es un colega, y la encuesta es una pregunta breve tras un ticket o una versión. Los principios son los mismos, y los deberes éticos son mayores, porque las personas a quienes preguntas trabajan contigo mañana.

Las encuestas son una forma de [metodología de encuestas](https://en.wikipedia.org/wiki/Survey_methodology), un campo con décadas de hallazgos sobre cómo la redacción de las preguntas, el momento y el muestreo cambian las respuestas. Los equipos que lo omiten tienden a producir puntuaciones que se mueven por razones ajenas a la calidad del servicio. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica aquí con fuerza añadida: cuando se premia al personal por una puntuación alta, aprende a pedirla (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema te da las definiciones, la higiene de datos y los hábitos que mantienen honestas las medidas de satisfacción. El tema siguiente las amplía hacia una visión más completa de la experiencia (véase el tema 6.2, Acuerdos de nivel de experiencia).

## Principios clave

- **Pregunta por un momento concreto.** Una encuesta atada a un ticket cerrado o a una versión da respuestas más nítidas que una pregunta general anual.
- **Hazla breve.** Una valoración y un comentario abierto superan a diez preguntas que la mayoría omite.
- **Lee los comentarios.** La puntuación te dice cuánto, y las palabras te dicen por qué.
- **Informa quién respondió.** Una puntuación sin tasa de respuesta ni composición de quienes respondieron es un rumor.
- **Cierra el ciclo.** Quienes informan de una mala experiencia deben recibir respuesta.
- **Compárate contigo mismo a lo largo del tiempo.** Los valores de referencia entre empresas ocultan diferencias de método, de audiencia y de cultura.
- **Protege a quienes responden.** Recoge solo lo que necesites, di cómo se usará y no clasifiques a individuos con ello.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Proporción de respuestas satisfechas, para un tipo de interacción definido | respuestas valoradas con 4 o 5 en una escala de cinco puntos / respuestas válidas | porcentaje | Encuesta posterior a la interacción atada al ticket o a la versión | Centro de servicios; gestión de incidentes; gestión de niveles de servicio | Retroalimentación de la revisión con las partes interesadas | Semanal o mensual |
| NPS | Promotores menos detractores para un servicio y una audiencia definidos | porcentaje que responde 9 o 10 menos porcentaje que responde de 0 a 6 | puntos, rango de -100 a 100 | Encuesta de relación, enviada a un intervalo fijo | Mejora continua; gestión de niveles de servicio | Revisión de resultados del producto | Trimestral |
| CES | Valoración media o proporción favorable de cuán fácil fue lograr algo | respuestas favorables / respuestas válidas, o valoración media | porcentaje o media | Encuesta posterior a la interacción atada al ticket, la solicitud o la versión | Gestión de solicitudes de servicio; centro de servicios | Retroalimentación de usabilidad en el refinamiento | Mensual |
| Tasa de respuesta a la encuesta | Proporción de usuarios invitados que respondieron | respuestas recibidas / encuestas entregadas | porcentaje | Herramienta de encuestas y sistema de tickets | Medición e informes | Participación en la retroalimentación de las revisiones | Mensual |
| Cobertura de quienes responden | Cuán de cerca coincide la composición de quienes responden con la población de usuarios en dimensiones acordadas | proporción de quienes responden en cada grupo comparada con la proporción de usuarios en ese grupo, por grupo | puntos porcentuales | Herramienta de encuestas unida al directorio de usuarios o a los datos de tickets | Medición e informes | Mapa de partes interesadas | Trimestral |
| Proporción de temas de los comentarios | Proporción de comentarios de texto libre asignados a cada tema | comentarios del tema / comentarios codificados | porcentaje | Comentarios de la encuesta codificados | Mejora continua | Temas de la retrospectiva | Mensual |
| Tiempo de seguimiento de detractores | Tiempo desde una valoración baja hasta un contacto documentado con el usuario | marca de tiempo de la nota de seguimiento menos marca de tiempo de la valoración baja, mediana y percentil 85 | horas o días | Herramienta de encuestas y sistema de tickets | Gestión de incidentes; mejora continua | Ciclo de retroalimentación en el acuerdo de trabajo | Mensual |

Los relojes y los límites importan. El CSAT y el CES cuentan solo las respuestas a la interacción concreta, nunca el estado de ánimo general. El tiempo de seguimiento de detractores arranca en el momento en que se registra la valoración baja, no cuando alguien la lee por primera vez. Excluye los registros de prueba y las respuestas de miembros del equipo que se está midiendo.

## Recomendaciones

### Diseña el instrumento

**1. Elige una pregunta por propósito.** Usa el CSAT tras una interacción para saber cómo fue esa interacción, el CES tras algo que el usuario tuvo que hacer para saber dónde está la fricción, y el NPS a intervalos regulares para conocer la relación global. Mezclar las tres en un solo formulario invita a la fatiga de encuestas y a resultados confusos. Si solo puedes permitirte una, elige la que corresponda a la decisión que necesitas tomar.

**2. Redacta con palabras neutrales y específicas.** "¿Cuán satisfecho quedó con la forma en que se trató su solicitud?" es mejor que "¿Qué tal fue nuestro estupendo servicio?" Evita las preguntas de doble cañón que preguntan por la rapidez y la amabilidad a la vez. Ofrece una escala coherente, etiqueta sus extremos y mantén el orden de las respuestas igual cada vez. Una [escala de Likert](https://en.wikipedia.org/wiki/Likert_scale) es un diseño común, y pequeños cambios en las etiquetas pueden desplazar los resultados, así que no las cambies a la ligera.

**3. Añade una pregunta abierta.** "¿Cuál es el motivo principal de su valoración?" cuesta poco a quien responde y da al equipo sus datos más ricos. Los comentarios explican la puntuación, exponen problemas que los números no pueden y dan a los agentes algo de lo que aprender. Léelos en una revisión regular, en voz alta si es posible.

**4. Sitúa la encuesta cerca del evento.** Envía la pregunta poco después de que se resuelva el ticket o llegue la versión, mientras la memoria está fresca. No la envíes en el momento del cierre por un agente que espera una nota alta. Un breve retraso, fijado por el sistema, elimina la tentación de aleccionar la respuesta.

### Haz fiables los números

**5. Informa la tasa de respuesta y la composición de quienes responden junto a cada puntuación.** Una puntuación de satisfacción del 4 por ciento de los usuarios es una afirmación sobre quienes respondieron. Compara quién respondió con quién fue invitado, usando atributos que ya tengas, como región, servicio o tipo de solicitud. Las grandes brechas significan que la puntuación necesita una etiqueta de cautela. La representatividad es un tema central de la investigación sobre el [sesgo de respuesta](https://en.wikipedia.org/wiki/Response_bias), y lo que importa a un equipo de servicio es simplemente mirar.

**6. Muestra la incertidumbre.** Las muestras pequeñas oscilan mucho. Un [margen de error](https://en.wikipedia.org/wiki/Margin_of_error) o un [intervalo de confianza](https://en.wikipedia.org/wiki/Confidence_interval) mostrado junto al CSAT mensual evita que el equipo reaccione al ruido (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Si un equipo tiene menos de unas pocas docenas de respuestas en un periodo, informa recuentos y lee los comentarios, no porcentajes.

**7. Evita seleccionar a quién se pregunta.** Si la persona que cerró el ticket decide si se envía la encuesta, las puntuaciones suben por la razón equivocada. Envía la encuesta automáticamente a cada interacción elegible, o a una muestra aleatoria si el volumen es alto. Documenta la regla, con las exclusiones, en el registro de métricas.

**8. Separa la satisfacción de una persona del desempeño de una persona.** La satisfacción depende de factores que un agente individual no controla: la calidad del producto, la cola, la política, el ánimo del usuario. No clasifiques a los agentes por CSAT. Úsalo a nivel de equipo y de servicio, y usa los comentarios para conversaciones de acompañamiento que el agente agradezca.

### Actúa sobre lo que oyes

**9. Cierra el ciclo con los usuarios descontentos.** Contacta con quienes informan de una mala experiencia, pregunta qué habría ayudado y registra lo que aprendas. Fija una meta para el tiempo de seguimiento y haz del seguimiento una conversación, no una petición de cambiar la puntuación. Cambiar una puntuación a petición es una distorsión, así que el seguimiento debe apuntar a resolver el problema y a aprender.

**10. Codifica los comentarios en temas y haz su seguimiento.** Acordad una lista breve de temas, como "tuve que repetirme", "respuesta lenta", "la solución no duró", "comunicación poco clara" y "amable y servicial". Codifica una muestra cada mes, a mano o con una herramienta, y haz que una persona compruebe los resultados. Las tendencias de los temas suelen mostrar problemas antes de que se mueva una puntuación.

**11. Vincula la satisfacción con los datos operativos.** Compara el CSAT con el tiempo de resolución, la tasa de reapertura y el número de contactos por problema. Los emparejamientos te dicen si la rapidez está comprando satisfacción o si el equipo es rápido y se equivoca. Úsalos para encontrar historias que investigar, no para demostrar una regla.

**12. Trata los valores de referencia con cuidado.** Las cifras publicadas o suministradas por proveedores para las puntuaciones de satisfacción dependen del método, de la audiencia y de la región, y tu propio historial es un mejor comparador. Si usas una comparación externa, indica su fuente, su método y su fecha, y no fijes una meta a partir de ella sin comprobar si tu método coincide. No inventes nunca un valor de referencia.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| CSAT | Los agentes aleccionan a los usuarios para que den la nota máxima; encuestas enviadas solo tras tickets fáciles; tickets difíciles cerrados sin encuesta | Encuesta automática a cada ticket elegible; tasa de respuesta y composición de quienes responden; tasa de reapertura |
| NPS | Encuestar solo a usuarios amistosos; programar la encuesta tras un buen evento; preguntar cara a cara; reetiquetar los puntos de la escala | Audiencia y calendario fijos en el registro; cobertura de quienes responden; leer los comentarios de los detractores |
| CES | Quitar pasos del formulario de modo que el trabajo se desplace a otro lugar; preguntar solo tras solicitudes sin fricción | Recuento de contactos por problema; tiempo de cumplimiento de solicitudes y retrabajo (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio) |
| Tasa de respuesta a la encuesta | Invitar solo a las personas que probablemente respondan; enviar la encuesta a una lista distinta cada vez | Regla de invitación escrita; comparar a los invitados con la población de usuarios |
| Cobertura de quienes responden | Descartar de la comparación a los grupos difíciles de alcanzar; reponderar sin decirlo | Publicar las dimensiones y el método; mostrar el resultado sin ponderar junto al ponderado |
| Proporción de temas de los comentarios | Codificar los comentarios para evitar los malos temas; fusionar temas para que ninguno parezca grande | Una segunda persona codifica una muestra; mantener estable la lista de temas y registrar los cambios |
| Tiempo de seguimiento de detractores | Registrar una nota sin contactar al usuario; contactar al usuario para pedirle una puntuación mejor | Comprobar el contenido de las notas de seguimiento; preguntar al usuario en la siguiente encuesta si alguien lo contactó |

Una lectura sana es una tasa de respuesta estable, una composición de quienes responden cercana a la de los usuarios, una puntuación que se mueve con la experiencia que los usuarios describen en los comentarios y usuarios descontentos que dicen que alguien les respondió.

## Compensaciones: ventajas e inconvenientes

| Medida | Fortaleza | Debilidad |
| --- | --- | --- |
| CSAT | Sencillo, rápido, atado a un momento concreto | Se infla con facilidad; dice poco sobre la relación global |
| NPS | Una sola pregunta, fácil de seguir en el tiempo | Oculta las razones; un número comprime una distribución amplia; las diferencias culturales afectan a la escala |
| CES | Apunta directamente a la fricción que el equipo puede eliminar | Menos ampliamente entendido; la evidencia es discutida |
| Encuesta anual larga | Rica, cubre muchos servicios | Lenta, de baja respuesta, difícil de actuar sobre ella |
| Solo comentarios | Concretos, memorables | Difíciles de comparar en el tiempo; vulnerables a las voces más fuertes |
| Señales de comportamiento | Sin carga de encuesta; objetivas | No captan los sentimientos; pueden malinterpretar la causa |

La respuesta en prosa es combinar una breve encuesta de interacción, una encuesta de relación ocasional y los comentarios, y leer las tres con los datos operativos. Las medidas de satisfacción funcionan como una conversación entre usuarios y equipo. Fracasan como marcador.

## Preguntas para conversar con tu equipo

**1. ¿Qué hacemos con una puntuación baja y con una puntuación alta?**
Pide al equipo que describa, en la práctica, la última vez que una puntuación baja llevó a un cambio. Pregunta luego lo mismo para una puntuación alta. Si las respuestas son vagas, la encuesta es un ritual. El facilitador debe buscar un vínculo concreto entre los datos y una acción, y acordar un lugar donde se registrará ese vínculo.

**2. ¿Quién responde a nuestras encuestas, y quién no?**
Pide al equipo que nombre los grupos de usuarios de los que menos oye. Compara con la lista de invitación y con el directorio de usuarios. La conversación suele revelar que los usuarios más callados tienen los problemas más difíciles. Acordad una forma de llegar a un grupo callado este trimestre, como una llamada breve o un canal distinto.

**3. ¿En qué momento de la interacción preguntamos, y quién lo decide?**
Recorre el camino desde la resolución hasta la encuesta. Encuentra cada punto en que una persona puede influir en si se envía la encuesta, cuándo y cómo. Acordad cuáles de esos puntos deben automatizarse. El facilitador puede preguntar qué podría hacer un agente para proteger una puntuación, como una pregunta de diseño y no como una acusación.

**4. ¿Qué oye de nosotros un detractor después de responder?**
Mira algunas valoraciones bajas recientes y lee las notas de seguimiento. Pregunta si el usuario se sentiría escuchado. Discutid cómo hacer útil el seguimiento sin pedir una valoración cambiada. Decidid quién es responsable del seguimiento y cuál es el tiempo objetivo.

**5. ¿Qué comentarios del último mes cambiaron lo que hicimos?**
Imprime o muestra diez comentarios al azar. Pregunta al equipo cuáles se atendieron, cuáles no y por qué. Esto mantiene el foco en las palabras y crea el hábito de leerlas. Acordad codificar los temas el mes siguiente y revisar la tendencia.

**6. ¿Con qué cifra publicada nos tienta compararnos, y es justa la comparación?**
Nombra la cifra, su fuente, su método y su audiencia, y compara cada uno con los tuyos. Pregunta si cambiaría una decisión. Si no, déjala de lado y usa tu propia tendencia. El facilitador debe registrar la respuesta en el registro de métricas.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de producto usan la retroalimentación de satisfacción para decidir qué arreglar o construir a continuación, y las encuestas breves tras una versión dan una lectura más rápida que la próxima revisión trimestral. Los equipos de entrega deben conectar los comentarios con elementos de la lista de pendientes, mostrar a los usuarios qué cambió y evitar tratar una puntuación como una meta de entrega. Un aumento de comentarios sobre esfuerzo o confusión tras una versión es una señal para mirar la versión, no la encuesta.

### Equipos de servicio y operaciones

Los centros de servicios recogen la mayor parte de los datos de interacción y sienten más la presión de la puntuación. Los equipos de operaciones deben enviar las encuestas automáticamente, publicar la regla de muestreo y usar los comentarios para el aprendizaje del equipo. Deben mantener el CSAT junto a la tasa de reapertura y los contactos repetidos, para que los cierres rápidos no parezcan buenos resultados (véase el tema 3.1, Métricas del centro de servicios).

### Liderazgo y gobernanza

Los líderes fijan el clima para la manipulación. Una petición de "95 por ciento de satisfacción a final de año" enseña al personal a proteger el número. Los líderes deben pedir la tasa de respuesta, la composición de quienes responden y los principales temas de los comentarios, financiar las correcciones que revelen los comentarios y mantener la satisfacción fuera de la retribución y la clasificación individuales. La gobernanza debe esperar un método declarado para cualquier cifra que informe externamente.

### Clientes y usuarios

Los usuarios dan su tiempo y su franqueza. Merecen una encuesta breve, una razón clara para preguntarles, una promesa sobre cómo se usarán sus respuestas y una respuesta cuando informan de un problema. Donde la encuesta no sea anónima, dilo. Los usuarios que no ven que cambie nada dejarán de responder, y el silencio parecerá satisfacción.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional opera un centro de servicios y un pequeño equipo que construye aplicaciones clínicas. Los números siguientes son ilustrativos.

El CSAT mensual del centro de servicios es del 92 por ciento, calculado a partir de 140 respuestas de unos 3.100 tickets cerrados, una tasa de respuesta del 4,5 por ciento. La dirección está satisfecha. La responsable del servicio lee los comentarios y nota que muchas respuestas positivas provienen de personal administrativo, mientras que el personal de enfermería de los turnos de noche apenas aparece. Compara la composición de quienes responden con el directorio de usuarios y encuentra que el personal del turno de noche es alrededor del 18 por ciento de los usuarios y el 3 por ciento de quienes responden.

El equipo hace tres cambios. La encuesta pasa a ser un formulario de dos preguntas con una valoración y un comentario, enviado automáticamente por el sistema de tickets cuatro horas después de la resolución, para cada ticket. Se ofrece una versión por mensaje de texto al personal por turnos. El informe mensual muestra ahora el CSAT con la tasa de respuesta, el intervalo de confianza, la composición de quienes responden frente a la de los usuarios y los cinco principales temas de los comentarios.

En dos meses la tasa de respuesta sube a cerca del 11 por ciento y el CSAT baja al 84 por ciento. Los temas de los comentarios muestran "tuve que volver a llamar" y "la solución no duró" como las dos principales quejas, concentradas en los sistemas clínicos. El responsable de TI dice a la junta que la puntuación antigua reflejaba quién respondía, y que la nueva es una mejor guía. El equipo de producto añade un elemento a la lista de pendientes para corregir el fallo recurrente detrás de las llamadas repetidas, y el centro de servicios empieza a contactar con cada usuario que da una valoración de 1 o 2 en el plazo de un día laborable. En el trimestre siguiente, la tasa de contactos repetidos de los sistemas clínicos baja, y la proporción de comentarios "tuve que volver a llamar" baja con ella. El equipo registra la decisión en su registro y no fija una meta de CSAT.

## Perspectiva por sector

**Startup.** El contacto estrecho con los usuarios hace que las conversaciones breves sean mejores que las encuestas al principio. Añade una encuesta de una pregunta cuando crezca el volumen, y sigue leyendo todos los comentarios. Resiste el impulso de publicar una puntuación antes de tener suficientes respuestas para que signifique algo.

**Pequeña empresa.** Un solo cliente descontento puede importar más que una puntuación. Usa la encuesta como un pretexto para hablar con la gente y guarda registros de los seguimientos. Los informes de satisfacción suministrados por proveedores merecen escepticismo sobre el método.

**Gran empresa.** La escala trae segmentos y la tentación de consolidar. Mantén las puntuaciones por servicio y audiencia, publica el método y evita promediar servicios distintos en un solo número. Usa una plataforma de encuestas estable con envío automático, y trata con cautela cualquier clasificación entre equipos.

**Gobierno y sector público.** Los organismos públicos suelen tener obligaciones formales de recoger la opinión de los usuarios y de publicar los resultados, además de deberes de accesibilidad y de privacidad. Ofrece canales de encuesta accesibles, protege la identidad de quienes responden y publica los métodos junto con los resultados. Donde una cifra de satisfacción aparezca en un contrato o en un informe legal, defínela con exactitud y muestra la barrera de protección a su lado (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos directos son las herramientas de encuestas, que muchos sistemas de tickets ya incluyen, una o dos horas al mes para revisar los comentarios y codificar los temas, y el tiempo para dar seguimiento a los usuarios descontentos. El costo mayor es la disciplina de actuar sobre lo que oyes. No hace falta una plataforma nueva para empezar.

El retorno se manifiesta como correcciones que los usuarios valoran y desperdicio evitado. Los comentarios te dicen dónde está la fricción, de modo que puedes eliminar las causas de los contactos repetidos y de las correcciones fallidas en lugar de añadir personal para atenderlos. Una mejor visión de quién no responde te protege de decisiones basadas en unos pocos autoseleccionados. Describe el beneficio en términos de los problemas encontrados y eliminados, y mide tus propias líneas base antes y después: tasa de contactos repetidos, tasa de reapertura y tiempo hasta la primera respuesta útil. No uses un porcentaje inventado para justificar el programa. Si necesitas cifras, constrúyelas con tus propios datos.

## Antipatrones y trampas

- **Tratar la puntuación como una meta.** Se cumplirá seleccionando a quién se pregunta o aleccionando la respuesta. Úsala como una pregunta y empárejala con comentarios y medidas operativas.
- **Encuestar solo tras tickets fáciles.** Envía a cada interacción elegible, automáticamente.
- **Clasificar a los agentes por CSAT.** Penaliza a quienes atienden los casos difíciles. Usa vistas de equipo y de servicio y aprende de los comentarios.
- **Pedir una puntuación mejor.** El seguimiento de una valoración baja debe apuntar a resolver el problema. No pidas un cambio.
- **Informar una puntuación sin tasa de respuesta.** Muestra siempre quién respondió y cuántos.
- **Cambiar la pregunta y conservar la tendencia.** Registra los cambios y marca la ruptura en el gráfico.
- **Importar un valor de referencia sin su método.** Compara primero con tu propio historial.
- **Recoger comentarios y no leerlos nunca.** Pon una revisión en el calendario y asigna un responsable.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Instrumento y muestreo | Encuesta ocasional ad hoc | Existe una encuesta para algunos servicios, enviada a mano | Encuesta breve enviada automáticamente a todas las interacciones elegibles | Regla de muestreo, cambios de redacción y exclusiones registrados y revisados | Instrumentos alineados entre equipos y proveedores, y revisados con los usuarios |
| Calidad de los datos | Solo la puntuación | Tasa de respuesta informada | Tasa de respuesta, composición de quienes responden e incertidumbre informadas | Cobertura de quienes responden gestionada; codificación comprobada por una segunda persona | Visión compartida de la experiencia entre servicios, con los usuarios implicados en la interpretación |
| Acción y seguimiento | Puntuaciones informadas, nada cambia | Correcciones ocasionales a partir de los comentarios | Seguimiento de detractores con un tiempo objetivo; temas con seguimiento | Los temas impulsan trabajo de mejora financiado y se vinculan con los datos operativos | El ciclo cerrado abarca equipos y proveedores; los usuarios ven qué cambió |

## Lista de verificación

- [ ] Cada encuesta tiene un propósito declarado y una decisión a la que informa.
- [ ] Las preguntas son breves, neutrales e incluyen un comentario abierto.
- [ ] La encuesta se envía automáticamente a cada interacción elegible o a una muestra aleatoria documentada.
- [ ] La tasa de respuesta y la composición de quienes responden se muestran junto a cada puntuación.
- [ ] Se muestra la incertidumbre, y las muestras pequeñas se informan como recuentos.
- [ ] Ningún agente individual se clasifica por satisfacción.
- [ ] Una persona con nombre da seguimiento a las valoraciones bajas dentro de un plazo acordado.
- [ ] Los comentarios se codifican en una lista estable de temas y se revisan mensualmente.
- [ ] Los cambios de redacción y de muestreo se registran y se marcan en los gráficos.
- [ ] Se dice a quienes responden cómo se usan sus respuestas, y los datos personales están protegidos.

## Prompts de IA

**Revisa un instrumento de encuesta.**

```text
Dirijo [service or team] para [type of organization]. Encuestamos a [audience]
después de [event] con esta redacción: [paste questions and scale]. Revísala en
busca de lenguaje sugestivo, preguntas de doble cañón, escalas poco claras y
carga para quien responde. Sugiere una versión más corta que conserve una
valoración y un comentario abierto. No inventes valores de referencia ni
afirmes resultados de investigación que no puedas citar. Enumera tus supuestos
y lo que no pudiste juzgar a partir del texto.
```

**Codifica los comentarios de una encuesta en temas.**

```text
Aquí hay [number] comentarios de encuesta anonimizados de [service], de
[period]: [paste comments with personal data removed]. Propón una lista breve de
temas (no más de ocho) y asigna cada comentario a un tema, con una nota de
confianza donde sea ambiguo. Informa el recuento por tema y tres citas
representativas por tema. No identifiques a individuos. Dime qué debería
comprobar una persona antes de fiarse de esta codificación, y enumera tus
supuestos.
```

**Comprueba la representatividad.**

```text
Recibimos [responses] respuestas de [invited] invitaciones. Quienes respondieron
por [dimension, for example region or shift]: [counts]. Nuestra población de
usuarios por la misma dimensión: [counts]. Compara ambas, describe dónde difiere
la composición de quienes responden y di qué cautelas deberíamos adjuntar a
nuestra puntuación de satisfacción. Sugiere dos formas prácticas de llegar a los
grupos infrarrepresentados. No infieras causas más allá de los datos, y enumera
tus supuestos.
```

**Planifica un seguimiento de ciclo cerrado.**

```text
Redacta un proceso breve para dar seguimiento a los usuarios que dan una
valoración de [threshold] o menos en [service]. Incluye quién los contacta, en
qué plazo, qué decir, qué registrar y cómo evitar pedir una valoración
cambiada. Contexto: [team size, tools, hours]. Enumera tus supuestos y todo paso
que dependa de herramientas que no he descrito.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de satisfacción antes de publicarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada revisada de métrica de encuesta conserva su vector de manipulación y su barrera de protección.

## Puntos clave

- Las puntuaciones de satisfacción describen cómo se sintió un momento de servicio, así que ata las encuestas a eventos concretos y mantenlas breves.
- Informa siempre la tasa de respuesta, la composición de quienes responden y la incertidumbre junto con la puntuación.
- Los comentarios explican los números, así que léelos cada mes y codifícalos en temas.
- Envía las encuestas automáticamente y no pidas nunca a los usuarios que cambien una valoración.
- Usa la satisfacción a nivel de equipo y de servicio, nunca para clasificar personas, y trata con cuidado los valores de referencia externos.
- Cierra el ciclo: quienes informan de una mala experiencia deben recibir respuesta y ver el cambio.

## Referencias y lecturas complementarias

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
