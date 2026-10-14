# Modelo de madurez para programas de métricas

**Usa la escala compartida de cinco niveles para describir dónde está un programa de métricas y elegir el siguiente paso pequeño, nunca como una puntuación que exhibir, comparar o certificar.**

## Resumen y motivación

Todos los demás temas de este libro terminan con una pequeña tabla de madurez de su materia. Este tema aplica la misma escala al programa de métricas en su conjunto. La pregunta no es cuán buenos son los tiempos de incidentes de un equipo. Es cuán bien recoge la organización las medidas, las lee y actúa sobre ellas: si las definiciones son compartidas, si se confía en los datos, si los números llevan a decisiones y si las personas medidas ven el programa como una ayuda.

Un modelo de madurez es una descripción de las etapas por las que puede pasar una organización a medida que se desarrolla una práctica. El ejemplo más conocido en el software es el [Modelo de Madurez de Capacidades](https://en.wikipedia.org/wiki/Capability_Maturity_Model) (Capability Maturity Model), que surgió del trabajo del Software Engineering Institute y se difundió ampliamente. Su influencia fue grande, y también lo fueron las críticas que siguieron. Las organizaciones perseguían el nivel y no la capacidad, los auditores puntuaban papeleo y el modelo llegó a usarse como una insignia. Un uso responsable de cualquier modelo de madurez mantiene a la vista tres cautelas. La escala es una herramienta de conversación y no una certificación. Más alto no siempre es mejor, porque el nivel adecuado depende del contexto. Y el modelo no sustituye a los resultados: un programa maduro que no mejora los servicios es un fracaso muy ordenado, y un nivel exhibido como insignia se parece mucho a una [métrica de vanidad](https://en.wikipedia.org/wiki/Vanity_metric), un número que luce bien y no informa ninguna decisión.

La escala usada aquí es la compartida en todo el libro y en la *Agile ITIL Guide*: Iniciar, Desarrollar, Estandarizar, Gestionar y Orquestar (véase el modelo de madurez compartido en la especificación). Deliberadamente no es lo mismo que las escalas de madurez de procesos de ITIL, de ISO/IEC 33000 o del Modelo de Madurez de Capacidades, y un equipo no debe reclamar una puntuación en ninguno de esos marcos apoyándose en esta.

Los objetivos ágiles indican cómo usarla. La mejora continua significa que el modelo sirve para encontrar el paso siguiente, no para alcanzar un estado final. La evolución constante significa que un programa que alcanzó Orquestar el año pasado puede retroceder si la gente se va o cambian las prioridades, así que la autoevaluación se repite. La implicación continua de las partes interesadas significa que la evaluación se hace con los equipos y no sobre ellos. Un ritmo sostenible significa que el programa da un paso cada vez y no intenta saltar tres niveles en un trimestre. Y construir en torno a individuos motivados significa que las personas que hacen el trabajo juzgan si el programa las ayuda. Es la misma lógica que la práctica de mejora continua de ITIL, donde una organización comprueba el estado actual, fija una dirección y mejora en pasos pequeños, un hábito cercano al [kaizen](https://en.wikipedia.org/wiki/Kaizen), la idea japonesa de la mejora continua por parte de todos. La idea más general es el [proceso de mejora continua](https://en.wikipedia.org/wiki/Continual_improvement_process) (véase el tema 9.5, Métricas de mejora continua).

El modelo tiene una trampa particular en el contexto de las métricas. Un programa evaluado con sus propias métricas invita a la misma distorsión contra la que advierte. Si el "número de medidas con definiciones" se convierte en una meta, las definiciones se multiplican. Por ello el enfoque de este tema usa evidencia del trabajo (qué decisiones cambiaron, qué dicen los equipos) además de recuentos, y mantiene la evaluación en manos de los equipos, que son los que menos ganan inflándola (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Un formulario de evaluación complementario para los equipos aparece en los apéndices (véase el tema 12.5, Autoevaluación de madurez).

## Principios clave

- **La escala es una herramienta de conversación.** Ayuda a la gente a describir el presente y elegir un paso siguiente, y no sirve para puntuar, clasificar ni certificar.
- **Evalúa con los equipos.** La autoevaluación, discutida abiertamente, es más exacta que la puntuación externa.
- **Juzga por la evidencia.** Pregunta qué decisiones cambiaron, qué dice la gente y qué muestran los datos, además de qué documentos existen.
- **Las dimensiones pueden diferir.** Un programa puede ser fuerte en herramientas y débil en confianza. Informa del perfil, no de un solo número.
- **Avanza un paso cada vez.** Apunta al nivel siguiente en una o dos dimensiones, no a todo a la vez.
- **Más alto no siempre es mejor.** Elige el nivel que se ajuste al tamaño, al riesgo y a las necesidades de la organización.
- **Espera retrocesos.** La rotación de personal, las reorganizaciones y la presión pueden hacer retroceder a un programa. Reevalúa con regularidad.
- **No publiques nunca una tabla de clasificación de equipos.** Agrega para el programa y comparte los resultados de un equipo solo con ese equipo.

## Definiciones de métricas

Las medidas siguientes describen la salud del programa y su evaluación. Son para el equipo del programa y los patrocinadores, y se leen como señales para la discusión.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Participación en la evaluación | Proporción de los equipos participantes que completaron una autoevaluación con su propia discusión | equipos que completaron y discutieron / equipos participantes | porcentaje | Registros de evaluación | Mejora continua | Reflexión y retrospectivas | Dos veces al año |
| Perfil por dimensión | La distribución de los niveles autoevaluados de los equipos en cada dimensión, mostrada como un rango y no como una sola puntuación | recuento de equipos en cada nivel, por dimensión | equipos por nivel | Autoevaluaciones, agregadas | Mejora continua; gobernanza | Trabajo visible | Dos veces al año |
| Acciones de mejora derivadas de las evaluaciones | Proporción de los pasos siguientes acordados que se completaron, se abandonaron con una razón o siguen en marcha | acciones cerradas o razonadas / acciones acordadas | porcentaje | Registro de mejoras | Mejora continua | Pequeños experimentos | Trimestral |
| Evidencia de decisiones | Proporción de medidas muestreadas en que el equipo puede nombrar una decisión o elección deliberada que la medida informó en el último trimestre | medidas con una decisión nombrada / medidas muestreadas | porcentaje | Entrevistas con equipos; notas de revisión | Mejora continua | Evidencia sobre ceremonia | Trimestral |
| Confianza en las definiciones y los datos | Acuerdo a nivel de equipo en que las definiciones son claras y los datos correctos | porcentaje de acuerdo en una breve encuesta de equipo; tasa de respuesta mostrada | porcentaje | Encuesta anónima de equipo | Gestión del conocimiento; gestión de la información | Comprensión compartida | Dos veces al año |
| Tiempo hasta el nivel siguiente (descriptivo) | Tiempo transcurrido para que un equipo suba una dimensión un nivel cuando decidió hacerlo | mediana de meses desde el paso acordado hasta la reevaluación del equipo | meses | Historial de evaluaciones | Mejora continua | Ritmo sostenible | Anual |
| Carga de la evaluación | Horas que lleva la evaluación por equipo | mediana de horas por equipo | horas | Estimaciones de tiempo de los equipos | Mejora continua | Ritmo sostenible | Dos veces al año |

La participación se mide como finalización con discusión, porque un formulario rellenado a solas dice poco. El perfil es un rango y nunca se promedia en un único número de madurez. El tiempo hasta el nivel siguiente es descriptivo: un ascenso rápido puede reflejar una autopuntuación inflada, y uno lento puede reflejar un cuidado apropiado. La carga de la evaluación es una comprobación de la propia evaluación, que no debe llevar más de una o dos horas por equipo.

## Recomendaciones

### Usa bien la escala

**1. Define las dimensiones de un programa de métricas.** Un conjunto viable tiene seis dimensiones: (a) preguntas y propósito, si las medidas responden a preguntas que hicieron las audiencias; (b) definiciones y propiedad, si las medidas tienen definiciones escritas y responsables; (c) datos y herramientas, si los datos son exactos, oportunos y portables; (d) uso en las decisiones, si los números informan las elecciones; (e) confianza y seguridad, si la gente cree que los datos la ayudan; y (f) revisión y evolución, si el programa se recorta a sí mismo. Seis bastan para ser útil y son pocas para discutirlas en una hora.

**2. Describe cómo se ve cada nivel.** La tabla de la sección "Modelo de madurez" de más abajo da descripciones breves de cada dimensión en cada nivel. Trátalas como sugerencias. Un equipo debe adaptar la redacción a su propio contexto y escribir sus propios ejemplos.

**3. No promedies.** Una sola puntuación global oculta el patrón que importa. Un programa con alta madurez de herramientas y baja confianza está en una situación distinta de uno con lo contrario, y el paso siguiente difiere. Muestra el perfil.

### Evalúa con los equipos y no sobre ellos

**4. Hazlo una conversación de una hora.** Reúne a un equipo con la tabla. Pide a cada persona que marque, en privado, dónde cree que está el equipo en cada dimensión, y compara luego. Discutid las diferencias, porque revelan experiencias distintas del mismo programa. Acordad una visión del equipo, registrad la evidencia que la respalda y elegid uno o dos pasos siguientes.

**5. Pide evidencia.** Para cada nivel reclamado, pide un ejemplo. "Usamos los números en las decisiones" invita a la pregunta "¿Qué decisiones el último trimestre?". Usa medidas muestreadas y entrevistas para comprobarlo. Esto respeta a la gente y evita que la evaluación derive hacia el pensamiento ilusorio.

**6. Deja los resultados con el equipo.** El perfil de un equipo pertenece al equipo. El programa comparte rangos agregados y temas comunes, y no una clasificación. Deja claro que la evaluación no afecta a la financiación, a la posición ni a las evaluaciones. Si lo hace, los equipos la inflarán y se perderá el valor (véase el tema 11.3, Implantar métricas sin sembrar miedo).

### Elige los pasos siguientes

**7. Elige la dimensión que limita a las demás.** La confianza y la seguridad suelen limitar todo lo demás: sin ellas, los datos se distorsionan y las decisiones son sospechosas. Las definiciones y la propiedad suelen limitar los datos y el uso. Un patrón común es reforzar primero la confianza y las definiciones, luego los datos, luego el uso y la revisión. Busca la dimensión donde una pequeña mejora desbloquearía las demás.

**8. Fija un paso pequeño y concreto.** Un paso siguiente debe ser uno que un equipo pueda completar en un trimestre y reconocer: "acordar una carta", "escribir definiciones de nuestras cuatro medidas", "automatizar dos flujos", "celebrar una revisión mensual donde registremos decisiones". Evita pasos como "alcanzar el Nivel 4". Los niveles describen un estado, y los pasos describen trabajo.

**9. Vincula los pasos al registro de mejoras.** Pon las acciones en el mismo lugar que el resto del trabajo de mejora, con responsables y fechas, y revisa el progreso en la conversación regular de mejora (véase el tema 9.5, Métricas de mejora continua). Un paso que no está financiado ni programado no ocurrirá.

### Mantenlo honesto y ligero

**10. Calibra entre equipos sin clasificarlos.** Celebra una breve sesión donde los equipos compartan ejemplos de lo que llaman Nivel 3 en una dimensión. Discutid las diferencias de criterio. La meta es una comprensión compartida, no puntuaciones iguales. Rota al facilitador e invita a un equipo ajeno al programa a cuestionar la redacción.

**11. Reevalúa con un ritmo, y en respuesta a eventos.** Dos veces al año basta para la mayoría de los programas. Reevalúa tras una reorganización, un cambio de herramienta o un incumplimiento de la carta, ya que estos pueden mover la confianza en cualquiera de los dos sentidos. Vigila el retroceso y trátalo como información, no como fracaso.

**12. Retira o revisa el propio modelo.** Cada año, pregunta a los equipos si las dimensiones y las descripciones de nivel siguen encajando. Reformula lo que confunde y elimina lo que nadie usa. Un modelo que no ha cambiado en cinco años puede estar describiendo un programa que ya no existe.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Participación en la evaluación | Completar formularios para cumplir una cuota; una persona que rellena por el equipo | Exigir una discusión del equipo; pedir la evidencia que respalda cada afirmación |
| Perfil por dimensión | Inflar los niveles para quedar bien; subestimarse para recibir ayuda | No vincular a la financiación ni a la posición; pedir evidencia; calibrar abiertamente |
| Acciones de mejora derivadas de las evaluaciones | Elegir pasos triviales para cerrar; cerrar sin hacer | Revisar el tamaño y el valor de los pasos; comprobar los resultados en la evaluación siguiente |
| Evidencia de decisiones | Inventar decisiones a posteriori; enumerar decisiones sin consecuencias | Pedir la fecha y las personas implicadas; aceptar "elegimos no hacer nada" como una decisión |
| Confianza en las definiciones y los datos | Aleccionar a los encuestados; baja respuesta que oculta descontento | Anonimato y tamaño mínimo de grupo; mostrar las tasas de respuesta; hablar directamente con los equipos |
| Tiempo hasta el nivel siguiente (descriptivo) | Apresurar las afirmaciones de progreso; ocultar el retroceso | Mantenerlo descriptivo; leerlo con la evidencia; registrar los retrocesos sin penalización |
| Carga de la evaluación | Saltarse la discusión para recortar horas | Seguir las horas junto con la participación y la calidad de la evidencia |

Una lectura sana muestra un perfil con una mezcla de niveles, con la confianza y las definiciones subiendo antes que las herramientas y el pulido, pasos siguientes pequeños y terminados, decisiones que los equipos pueden nombrar y un registro honesto de los retrocesos ocasionales.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Autoevaluación del equipo | Honesta, propia, rápida | Subjetiva; necesita calibración |
| Evaluación externa | Coherente; independiente | Costosa; invita a actuar para el evaluador |
| Una sola puntuación global | Fácil de comunicar | Oculta el patrón; invita a las metas |
| Perfil por dimensión | Muestra dónde actuar | Más difícil de resumir |
| Evaluación anual | Ligera | Lenta para notar el retroceso |
| Dos veces al año con disparadores por eventos | Reactiva | Más esfuerzo |
| Vinculada a la financiación | Gana atención | Inflación y manipulación |
| Separada de la financiación | Datos honestos | Necesita otras formas de ganar apoyo |

La respuesta en prosa es realizar una autoevaluación ligera con evidencia, informar de perfiles y rangos, dejar los resultados con los equipos y atar los pasos siguientes al registro de mejoras, no a la financiación ni a la posición.

## Preguntas para conversar con tu equipo

**1. ¿Cuál de las seis dimensiones diríamos que es la más débil, y qué nos hace decirlo?**
Haz que cada persona elija una en privado y luego compartan. El facilitador debe pedir un ejemplo reciente. Busca patrones, y acordad qué dimensión limita a las demás.

**2. ¿Podemos nombrar una decisión del último trimestre que cambiara una medida?**
Enuméralas. Si la lista es corta, pregunta por qué. Discutid si el problema son las medidas, los datos o el hábito de mirar.

**3. ¿Dónde nos situaríamos en confianza y seguridad, y cómo lo sabemos?**
Mira los informes de casi-incidentes, los cuestionamientos y los resultados de las encuestas. Compara con cómo habla la gente en la práctica. Acordad una cosa que los líderes podrían hacer para moverlo.

**4. ¿Cómo sería un paso siguiente pequeño y concreto para nuestra dimensión más débil?**
Redáctalo en una frase, con un responsable y una fecha. Comprueba que puede terminarse en un trimestre. Acordad cómo sabremos que funcionó.

**5. ¿Qué haría que esta evaluación se sintiera como una amenaza, y cómo lo evitamos?**
Discutid usos de los resultados que la gente temería. Escribid para qué no se usarán nunca los resultados. Comprueba que la responsable del programa está de acuerdo.

**6. ¿Hay algún nivel al que no necesitemos llegar?**
Piensa en nuestro tamaño, riesgos y metas. Describe un nivel que sea suficientemente bueno por ahora y una señal que nos diría que volvamos a revisarlo.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos se evalúan a sí mismos, eligen el paso siguiente y conservan sus resultados. Deben usar la conversación para sacar a la luz las diferencias de experiencia, pedir evidencia y fijar pasos lo bastante pequeños para terminarlos. Deben oponerse a cualquier intento de convertir el perfil en una clasificación.

### Equipos de servicio y operaciones

Los equipos de operaciones cargan con grandes volúmenes de datos e incidentes y pueden ver dónde el programa los apoya o los grava. Deben anotar dónde las herramientas o las definiciones bloquean su trabajo, pedir que los datos de guardia y de incidentes se traten con cuidado y dar una opinión franca sobre la carga de la evaluación.

### Liderazgo y gobernanza

Los líderes patrocinan el programa y reciben el panorama agregado. Deben pedir perfiles y temas comunes, resistirse a pedir una sola puntuación, financiar los pasos siguientes que elijan los equipos y no atar la financiación ni la posición a la evaluación. También deben predicar con el ejemplo describiendo decisiones que las métricas informaron.

### Clientes y usuarios

Los clientes y los usuarios se benefician cuando el programa mejora los servicios y cuando sus comentarios forman parte de las medidas. Donde son socios, pueden participar en evaluar las medidas que les conciernen, por ejemplo la utilidad de las encuestas de satisfacción, y en revisar cómo se usan sus datos.

## En la práctica: un ejemplo de ITIL ágil

Un grupo asegurador nacional tiene 20 equipos de entrega y de soporte y un programa de métricas que lleva 18 meses en marcha. La patrocinadora pide "una puntuación de madurez para cada equipo" para orientar la inversión. La responsable del programa desconfía, recordando cómo una puntuación al estilo de una auditoría llevó antes a los equipos a preparar carpetas de documentos. Las cifras siguientes son ilustrativas.

La responsable del programa propone en su lugar un perfil en seis dimensiones, evaluado por los equipos en una conversación de una hora con un facilitador ajeno al equipo, con los resultados en manos del equipo. Dice a la patrocinadora que el programa informará de rangos y temas comunes, y que el perfil de ningún equipo se vinculará a la financiación. La patrocinadora está de acuerdo, y la decisión se registra.

Diecinueve de los 20 equipos completan la evaluación con una discusión, así que la participación es del 95 por ciento. El perfil muestra un rango: en preguntas y propósito, la mayoría de los equipos están en el Nivel 2 o 3; en definiciones y propiedad, hay una dispersión de 1 a 4; en datos y herramientas, sobre todo 3; en uso en las decisiones, sobre todo 2; en confianza y seguridad, un reparto entre 2 y 4; y en revisión y evolución, sobre todo 1 o 2. Las comprobaciones de evidencia son reveladoras. Once equipos reclamaron el Nivel 3 en uso en las decisiones, pero cuando se les pidió nombrar una decisión del último trimestre que una medida hubiera informado, solo seis pudieron. La responsable del programa lo anota sin juzgar, y se convierte en un tema: los equipos tienen paneles y rara vez celebran revisiones que registren decisiones.

Los pasos siguientes son pequeños. Ocho equipos eligen una revisión mensual con un registro de decisiones. Cuatro eligen escribir definiciones para sus medidas. Tres eligen acordar una carta. Seis meses después, 14 de 17 pasos acordados están hechos, uno se abandona con una razón y dos siguen en marcha. Una evaluación repetida muestra la evidencia de decisiones subiendo del 38 al 71 por ciento de las medidas muestreadas, y la encuesta de confianza pasando del 54 al 67 por ciento de acuerdo. Un equipo retrocede en confianza tras una reorganización, y el facilitador lo registra como información, no como fracaso. Un año después la patrocinadora vuelve a pedir una sola puntuación para el informe anual. La responsable del programa ofrece un perfil de una página con rangos, tres temas y los pasos de mejora completados. La patrocinadora lo acepta, y el informe declara con claridad que la escala es una herramienta de conversación.

## Perspectiva por sector

**Startup.** Una evaluación formal probablemente sea excesiva. Una breve conversación dos veces al año sobre las seis dimensiones, con uno o dos pasos pequeños, basta. Vigila el temor a que las medidas se usen para juzgar, ya que los equipos pequeños lo sienten intensamente.

**Pequeña empresa.** Usa las dimensiones como una lista de verificación para una charla con el dueño y el personal. Pregunta si las pocas medidas que conservas responden a preguntas reales, si la gente sabe qué significan y si se usan. Elige un paso. No dediques más de una hora.

**Gran empresa.** La escala necesita un proceso ligero y coherente: las mismas dimensiones, autoevaluación con un facilitador, sesiones de calibración y perfiles agregados. Resiste una oficina central de puntuación. Vincula los pasos siguientes a los registros de mejoras, e informa de rangos y temas a los patrocinadores. Protégete de que la escala se convierta en un ejercicio de cumplimiento.

**Gobierno y sector público.** Los órganos de auditoría y de supervisión pueden pedir puntuaciones de madurez. Sé claro sobre la diferencia entre esta herramienta interna de conversación y cualquier marco formal. Deja los resultados de los equipos con los equipos, proporciona agregados a la supervisión y sé transparente sobre lo que la escala es y no es (véase el tema 8.3, Métricas de cumplimiento y auditoría).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son pequeños: una o dos horas por equipo dos veces al año, un facilitador, algo de análisis y el esfuerzo de llevar a cabo los pasos de mejora. Los costos mayores llegan cuando se hace mal uso del modelo, con consultores, oficinas de puntuación y carpetas de evidencia.

Los retornos provienen de una mejor orientación del esfuerzo. En lugar de repartir la inversión entre todas las dimensiones, el programa encuentra la dimensión limitante y la aborda. Otros retornos incluyen un reconocimiento más temprano del retroceso, un lenguaje compartido entre equipos y pasos de mejora que los equipos eligieron y poseen. Construye el caso con tus propios datos: pasos de mejora completados, cambios en la evidencia de decisiones y en los resultados de la encuesta de confianza, y el esfuerzo que llevó la evaluación. Evita citar afirmaciones publicadas sobre los retornos de la mejora de la madurez sin una fuente rastreable y relevante para tu contexto (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **La insignia de madurez.** El nivel se convierte en la meta. Úsalo como una conversación, con evidencia.
- **Un único número global.** Se pierde el patrón y aparecen las metas. Muestra el perfil.
- **Puntuación por auditores.** Los equipos preparan documentos para actuar. Usa la autoevaluación con un facilitador.
- **Vincular la puntuación a la financiación.** Sigue la inflación. Mantén separada la evaluación.
- **Perseguir el nivel más alto.** No todo programa necesita Orquestar. Elige lo que encaje.
- **Evaluar y olvidar.** No sigue ningún paso. Vincula los pasos al registro de mejoras.
- **Evaluación demasiado larga.** La carga crece y baja la calidad. Mantenla en una hora.
- **Ignorar el retroceso.** Los programas se deslizan tras el cambio. Reevalúa con un ritmo y tras eventos.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Preguntas y propósito | Medidas recogidas porque existen los datos | Algunos equipos declaran las preguntas que hacen | Audiencias y preguntas escritas; medidas asignadas a ellas | Cobertura de preguntas revisada; las preguntas sin respuesta impulsan medidas nuevas | Las audiencias, incluidos clientes y proveedores, moldean las medidas; las preguntas evolucionan con los servicios |
| Definiciones y propiedad | Las definiciones varían según la persona | Algunas escritas; responsables informales | Catálogo con definición, fuente, responsable y límites de cada medida | Completitud de las definiciones y cuestionamientos gestionados | Definiciones copropiedad de equipos y proveedores; revisadas cuando dejan de informar decisiones |
| Datos y herramientas | Manual y frágil | Algunos flujos automatizados | Canalizaciones probadas, almacén compartido, datos portables | Fiabilidad, conciliación y preparación para la salida gestionadas | Canalizaciones federadas con contratos compartidos; fuentes mejoradas a partir de la retroalimentación |
| Uso en las decisiones | Números mostrados, rara vez usados | Usados en algunas revisiones | Revisiones regulares que registran decisiones | Evidencia de decisiones seguida y actuada | Decisiones vinculadas entre equipos a resultados; aprendizaje compartido |
| Confianza y seguridad | Miedo o indiferencia | Garantías verbales | Carta escrita; vistas individuales desactivadas; encuesta de seguridad | Incumplimientos revisados abiertamente; señales de franqueza gestionadas | Confianza rutinaria; programa moldeado por el personal y los socios |
| Revisión y evolución | Ninguna | Limpieza ocasional | Revisión periódica con los equipos; regla de retirada | Pasos de la evaluación financiados y completados | El programa mejora continuamente, con cambios de todos |

## Lista de verificación

- [ ] Las seis dimensiones están acordadas, y las descripciones de nivel están adaptadas a nuestro contexto.
- [ ] Cada equipo se evalúa a sí mismo en una discusión de aproximadamente una hora, con un facilitador.
- [ ] Cada nivel reclamado está respaldado por un ejemplo o una comprobación por muestreo.
- [ ] Los resultados se muestran como perfiles y rangos, y nunca como una puntuación promediada ni una clasificación.
- [ ] Los resultados de un equipo se quedan con el equipo, y el agregado se comparte con los patrocinadores.
- [ ] La evaluación no está vinculada a la financiación, a la posición ni a las evaluaciones de desempeño, y esto está escrito.
- [ ] Cada equipo acuerda uno o dos pasos siguientes pequeños, con un responsable y una fecha.
- [ ] Los pasos siguientes se siguen en el registro de mejoras.
- [ ] La reevaluación ocurre al menos dos veces al año y tras eventos importantes.
- [ ] El propio modelo se revisa cada año con los equipos.

## Prompts de IA

**Prepara una conversación de autoevaluación.**

```text
Prepara un plan de facilitación de una hora para la autoevaluación de un equipo
sobre su programa de métricas en seis dimensiones: preguntas y propósito,
definiciones y propiedad, datos y herramientas, uso en las decisiones, confianza
y seguridad, y revisión y evolución. Usa cinco niveles: Iniciar, Desarrollar,
Estandarizar, Gestionar, Orquestar. Incluye el marcado privado, la comparación,
las preguntas de evidencia y el acuerdo de uno o dos pasos siguientes pequeños.
No produzcas una puntuación. Enumera tus supuestos.
```

**Convierte una dimensión débil en pasos.**

```text
Nuestro equipo se sitúa en el Nivel [n] en [dimension] de su programa de
métricas. Evidencia: [paste]. Sugiere tres pasos pequeños, cada uno terminable
en un trimestre, que podrían acercarnos al Nivel [n+1]. Para cada paso, describe
el responsable, el esfuerzo, el beneficio probable y cómo sabríamos que
funcionó. No prometas resultados. Enumera tus supuestos y riesgos.
```

**Comprueba la evidencia de un nivel reclamado.**

```text
Un equipo reclama el Nivel [n] en [dimension] y da esta evidencia: [paste].
Actúa como un colega curioso. Enumera preguntas para comprobar si la evidencia
respalda la afirmación, qué ejemplos serían convincentes y qué señales sugerirían
que la afirmación es optimista. No juzgues al equipo. Enumera tus supuestos.
```

**Resume perfiles sin clasificar.**

```text
Aquí hay recuentos agregados de equipos en cada nivel para cada dimensión:
[paste]. Escribe un resumen de media página para los patrocinadores que describa
el rango, tres temas comunes y los pasos de mejora que eligieron los equipos. No
clasifiques a los equipos, no produzcas una sola puntuación ni afirmes causas
sin evidencia. Enumera las salvedades de la autoevaluación.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para asignar las medidas del programa a las dimensiones de madurez y a sus barreras de protección emparejadas.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una evaluación de madurez informa de perfiles, deja los resultados con los equipos y evita una sola puntuación.

## Puntos clave

- Usa la escala compartida de cinco niveles como una herramienta de conversación, nunca como una insignia, una clasificación ni una certificación.
- Informa de un perfil en seis dimensiones y no de una sola puntuación promediada.
- Evalúa con los equipos, pide evidencia y deja los resultados de cada equipo con el equipo.
- Elige pasos siguientes pequeños en la dimensión que limita a las demás, a menudo la confianza y las definiciones.
- Sigue los pasos en el registro de mejoras, y reevalúa con regularidad porque los programas retroceden.
- Más alto no siempre es mejor, y los resultados importan más que los niveles.

## Referencias y lecturas complementarias

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
