# La IA en la medición de la gestión de servicios

**Antes de que la IA cambie el trabajo, escribe cómo es el trabajo hoy, y mide luego cada uso de la IA frente a esa línea base y frente a un trabajo comparable hecho sin ella, porque las afirmaciones serán grandes y la evidencia suele ser pequeña.**

## Resumen y motivación

La inteligencia artificial está hoy dentro de muchas de las herramientas que los equipos usan para construir y operar servicios. La [inteligencia artificial](https://en.wikipedia.org/wiki/Artificial_intelligence) (IA) es la capacidad de los sistemas computacionales de realizar tareas asociadas con la inteligencia humana. Dentro de ella, los sistemas de [aprendizaje automático](https://en.wikipedia.org/wiki/Machine_learning) aprenden patrones a partir de datos, y los sistemas de [IA generativa](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), a menudo construidos sobre [modelos de lenguaje de gran tamaño](https://en.wikipedia.org/wiki/Large_language_model), producen texto, código y otros contenidos en respuesta a instrucciones (prompts). En la gestión de servicios de TI (ITSM) estas capacidades aparecen en la clasificación de tickets, el resumen de incidentes, la redacción de artículos de conocimiento, las respuestas sugeridas para el centro de servicios, la finalización y la revisión de código en las canalizaciones de entrega, la detección de anomalías en la monitorización y los asistentes conversacionales para usuarios. [AIOps](https://en.wikipedia.org/wiki/AIOps) es el nombre que se da a menudo a la aplicación de la IA a los datos de operaciones de TI.

Las afirmaciones que se hacen sobre estas herramientas son grandes, y la evidencia en cualquier organización dada suele ser pequeña. Los proveedores informan de tiempo ahorrado. Los primeros adoptantes informan de entusiasmo. Los directivos piden la ganancia de eficiencia que se prometió. Mientras tanto, los equipos informan de que la salida necesita comprobación, de que algunas sugerencias son erróneas con total seguridad y de que el trabajo se siente distinto. La medición es la forma en que una organización averigua cuál de estas cosas es cierta para su propio trabajo. Esta parte del libro toma en serio la IA como algo que medir, con las mismas barreras de protección que cualquier otra familia de métricas.

La IA cambia el problema de la medición de cuatro maneras.

- **El volumen y la rapidez suben mientras la calidad se vuelve más difícil de ver.** La IA puede producir tickets, respuestas, código y documentos con rapidez, así que las medidas de producción suben. Si la producción es buena es una pregunta aparte (véase el tema 10.4, Inflación de métricas y dilución de la calidad).
- **Las líneas base desaparecen.** Una vez que la IA está en uso diario, no puedes recuperar cómo era el trabajo sin ella. Una línea base debe capturarse antes del cambio, o debe existir un grupo de comparación.
- **Los humanos siguen en el ciclo, con consecuencias.** Los diseños con [humano en el ciclo](https://en.wikipedia.org/wiki/Human-in-the-loop) mantienen a una persona responsable del resultado. Las personas que revisan la salida de una máquina pueden deferir a ella con demasiada facilidad, un patrón conocido como [sesgo de automatización](https://en.wikipedia.org/wiki/Automation_bias), o pueden dedicar más tiempo a comprobar que el que ahorraron.
- **Las salidas pueden ser fluidas y erróneas.** Una [alucinación](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) es una salida segura de sí misma que no está respaldada por la entrada ni por los hechos. Las medidas deben incluir una comprobación de la corrección, muestreada por una persona.

Las formas de trabajar ágiles y de ITIL dan ambas una postura ante esto. Los objetivos ágiles de la entrega continua, la mejora continua y la evolución constante sugieren tratar cada uso de la IA como un pequeño experimento: declara el beneficio esperado, pruébalo con unas pocas personas dispuestas, compara y decide. El principio rector de ITIL de progresar de forma iterativa con retroalimentación apunta en el mismo sentido, y su énfasis en el valor pregunta qué resultado mejora para los usuarios y para el negocio, no cuánto texto se produce. El objetivo de personas motivadas se sirve cuando la IA alivia el trabajo tedioso y respeta su criterio, y no se sirve cuando la IA se convierte en una forma de aumentar el ritmo o de vigilar a quienes la usan. Ritmo sostenible significa que el tiempo ahorrado no debe convertirse en silencio en más demanda.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica a la IA en su forma más aguda. Si la "adopción de la IA" o la "proporción de código generado por IA" se convierte en una meta, la gente usará la herramienta donde no ayuda, y la calidad pagará el número (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema cubre los fundamentos: dónde entra la IA en el trabajo, qué líneas base capturar y qué medidas muestran si un uso de la IA ayuda. Los temas siguientes profundizan en el trabajo asistido, en los agentes y los chatbots, en la inflación y la dilución y en la gobernanza. Los hechos sobre los productos y las reglas de IA cambian deprisa, y las afirmaciones sobre herramientas o reglamentos concretos de esta parte están fechadas a octubre de 2026 y deben volver a comprobarse.

## Principios clave

- **Captura una línea base antes de introducir la IA.** Sin una, toda afirmación de beneficio es una opinión.
- **Trata cada uso como un experimento con una comparación.** Compara con un trabajo similar hecho sin IA, en el mismo periodo.
- **Mide la calidad por muestreo, con personas.** La salida fluida no es salida correcta.
- **Cuenta el costo completo.** Incluye el tiempo de revisión, el retrabajo, las licencias y los costos de inferencia.
- **Mantén responsables e informadas a las personas.** La persona que usa la IA responde del resultado.
- **No dejes que la IA se convierta en un aumento del ritmo ni en un monitor.** El tiempo ahorrado es una elección sobre cómo usar el tiempo.
- **Empieza con personas dispuestas y problemas reales.** Los mandatos producen uso sin valor.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completitud de las líneas base | Proporción de casos de uso de IA planificados que tienen registrada una línea base previa a la adopción de sus indicadores principales | casos de uso con línea base fechada / casos de uso planificados | porcentaje | Registro de casos de uso | Mejora continua; medición e informes | Línea base antes de un experimento | Trimestral |
| Cobertura del uso de IA | Proporción de elementos de trabajo o tareas elegibles en que se usó IA, por caso de uso | elementos en que se usó asistencia de IA / elementos elegibles, a partir de registros de la herramienta o etiquetas de los usuarios, a nivel de equipo | porcentaje | Registros de uso de la herramienta, etiquetas | Centro de servicios; gestión de incidentes; gestión de versiones y despliegues | Adopción de una herramienta por equipos dispuestos | Mensual |
| Tasa de aceptación y de anulación de sugerencias | Proporción de sugerencias de la IA aceptadas tal cual, editadas o rechazadas | sugerencias de cada categoría / sugerencias ofrecidas | porcentaje | Registros de la herramienta agregados por equipo | Centro de servicios; gestión del conocimiento | Revisión de las sugerencias de la máquina | Mensual |
| Exactitud de la salida revisada | Proporción de salidas de IA muestreadas que un revisor cualificado juzga correctas y adecuadas a su propósito | salidas juzgadas correctas / salidas muestreadas | porcentaje | Registros de revisión por muestreo | Aseguramiento de la calidad; gestión del conocimiento | Definición de terminado de la salida | Mensual |
| Tiempo de tarea frente a la línea base | Tiempo para completar una tarea definida con IA comparado con la línea base o con un grupo de comparación | mediana y percentil 85 del tiempo de tarea con IA menos lo mismo para la línea base o la comparación | minutos u horas | Tareas cronometradas, marcas de tiempo de los tickets | Centro de servicios; gestión de incidentes | Tiempo de ciclo de una tarea | Trimestral |
| Costo por tarea asistida por IA | Costo total del trabajo asistido por IA por tarea, incluidos la revisión y el retrabajo | (costo de licencias y de uso + costo del tiempo de revisión y de retrabajo) / tareas completadas con IA | moneda por tarea | Facturas de proveedores, estimaciones de tiempo, gestor de trabajo | Gestión financiera del servicio | Costo de servir por resultado | Trimestral |
| Movimiento del resultado frente a la comparación | Cambio en el indicador de resultado del trabajo asistido por IA comparado con un trabajo similar no asistido | cambio en el indicador del grupo asistido por IA menos cambio del grupo de comparación | unidades del indicador | Medidas de resultado por caso de uso (calidad, satisfacción, tasa de reapertura, defectos) | Mejora continua | Aprendizaje de los experimentos | Trimestral |

Define cada caso de uso por la tarea, los usuarios y los indicadores de resultado, y regístralos en el registro. La cobertura del uso de IA es una medida descriptiva y no una meta. La exactitud de la salida revisada se juzga frente a una norma escrita por alguien cualificado que no produjo la salida. El tiempo de tarea incluye el tiempo para dar instrucciones, revisar y corregir además del de generar. El costo por tarea cuenta el tiempo de las personas dedicado a comprobar y corregir. El movimiento del resultado requiere una comparación elegida de antemano y una nota sobre otros cambios durante el periodo.

## Recomendaciones

### Decide dónde tiene cabida la IA

**1. Enumera las tareas y el problema que aborda cada uso de la IA.** Parte del dolor, no de la herramienta: redacción repetida, clasificación lenta, conocimiento disperso, revisiones largas, alertas ruidosas. Para cada uso candidato, escribe el problema, quién lo siente, el resultado que debe mejorar y los riesgos. Omite los usos sin un problema claro. Este es el registro del que cuelgan la línea base y las medidas.

**2. Clasifica el riesgo de cada uso.** Una herramienta que redacta notas internas conlleva un riesgo distinto de una que cambia sistemas de producción, responde a clientes o toma decisiones sobre personas. Clasifica los usos por el daño si la salida es errónea, por quién resulta afectado y por si una persona la revisa antes de que surta efecto. Los usos de mayor riesgo necesitan medidas, muestreo y gobernanza más sólidos (véase el tema 10.5, Métricas de gobernanza y riesgo de la IA).

**3. Empieza con personas dispuestas y tareas acotadas.** Haz el piloto con voluntarios en una tarea común y comprobable. Los voluntarios dan retroalimentación honesta y adaptan la herramienta a su trabajo. Una tarea acotada hace factibles las líneas base y las comparaciones. Evita empezar con el trabajo más sensible.

### Captura líneas base y prepara comparaciones

**4. Registra la línea base antes del primer uso.** Para cada caso de uso, captura el estado actual de los indicadores: tiempo para completar, tasa de calidad o de defectos, retrabajo, satisfacción de los usuarios y costo. Toma suficientes observaciones para ver la variación normal (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Fecha la línea base y consérvala. Una línea base tomada tras el despliegue es un registro del mundo nuevo.

**5. Construye una comparación.** Donde sea posible, mantén un grupo similar o un conjunto de tareas que no use IA durante el periodo piloto, o alterna el uso por semana o por tipo de tarea de una forma justa. La aleatorización es ideal y a menudo poco práctica. Di con claridad qué más cambió. Sin una comparación, las mejoras debidas a la estacionalidad, a la dotación o al aprendizaje se atribuirán a la herramienta.

**6. Mide el tiempo con honestidad.** El tiempo hasta un primer borrador rara vez es la medida correcta. Mide el tiempo hasta un resultado terminado y comprobado, incluidas las instrucciones, la revisión y la corrección. La gente suele informar del tiempo ahorrado a partir del paso de generación, y el paso de revisión se come parte o todo. Los estudios de tiempos sobre una muestra de tareas valen el esfuerzo.

### Mide la calidad y el costo

**7. Muestrea las salidas para que las revisen personas cualificadas.** Cada mes, extrae una muestra aleatoria de salidas asistidas por IA y haz que una persona cualificada las juzgue frente a una norma escrita. Informa de la exactitud, de los tipos de errores hallados y de las tendencias. Es la principal protección contra la propagación de errores fluidos. Mantén al revisor independiente del productor, y rota a los revisores.

**8. Vigila los patrones de aceptación y de anulación.** Una tasa de aceptación muy alta puede señalar sesgo de automatización, donde la gente acepta sin comprobar. Una muy baja puede señalar una herramienta que no es útil. Usa las tasas como detonantes de conversación con el equipo y pregunta qué significan los números en su experiencia. No fijes metas de aceptación.

**9. Cuenta el costo completo por tarea.** Incluye las cuotas de licencia, los cargos basados en el uso, el tiempo dedicado a dar instrucciones, revisar y corregir, la formación y el esfuerzo de gobernanza. Compara con el costo de la línea base. Una herramienta que hace borradores con rapidez y necesita mucha corrección puede costar más que la forma antigua. Incluye el costo de los errores que llegan a los usuarios.

### Mantén bien el lado humano

**10. Protege a las personas de la monitorización y del aumento del ritmo.** Agrega los datos de uso de la IA a nivel de equipo y no los uses para valorar a individuos. No uses el uso como medida de desempeño. Acordad de antemano que el tiempo ahorrado no se convertirá automáticamente en carga de trabajo extra, y decidid con el equipo qué hacer con él: calidad, aprendizaje, mejora u otro trabajo. Un ritmo constante es un objetivo de diseño (véase el tema 9.2, Métricas de satisfacción y bienestar).

**11. Pregunta a las personas que la usan.** Los pulsos breves y las conversaciones revelan lo que los números pasan por alto: dónde ayuda la herramienta, dónde frustra, dónde desplaza el trabajo de crear a comprobar y si cambia la satisfacción con el puesto. Trata con respeto las inquietudes sobre las habilidades, la calidad y la seguridad en el empleo.

**12. Decide, publica y revisa.** Al final de cada piloto, decide escalar, adaptar o detener, y registra la evidencia. Comparte los resultados con honestidad, incluidos los nulos y los negativos. Revisa las decisiones a medida que cambian las herramientas, lo que ocurre deprisa. Un uso que no ayudó el año pasado puede ayudar ahora, y al revés.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Completitud de las líneas base | Registrar líneas base a posteriori; usar indicadores convenientes | Líneas base con marca de fecha; revisión independiente del método de la línea base |
| Cobertura del uso de IA | Imponer el uso; contar invocaciones triviales o automáticas | Nunca una meta; comparar con el movimiento del resultado; contar el uso significativo |
| Tasa de aceptación y de anulación de sugerencias | Premiar la aceptación; hacer engorroso el rechazo | Sin metas; exactitud de la salida revisada; preguntar a los usuarios por su experiencia |
| Exactitud de la salida revisada | Muestrear salidas fáciles; revisores indulgentes | Muestra aleatoria por revisores independientes; norma escrita; rotación de revisores |
| Tiempo de tarea frente a la línea base | Cronometrar solo la generación; elegir tareas fáciles | Tiempo hasta el resultado comprobado; muestrear tareas al azar; incluir revisión y retrabajo |
| Costo por tarea asistida por IA | Omitir el tiempo de revisión o el costo de gobernanza | Lista de verificación del costo completo; comparar con estudios de tiempos |
| Movimiento del resultado frente a la comparación | Elegir grupos o periodos favorables; ignorar otros cambios | Comparación y periodo preacordados; lista de otros cambios |

Una lectura sana son líneas base para cada piloto, tiempo medido hasta resultados terminados, exactitud comprobada por personas cualificadas, costos que incluyen la revisión, resultados comparados con justicia y equipos que dicen que la herramienta sirve a su criterio.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Piloto con voluntarios | Retroalimentación honesta; bajo riesgo | Los voluntarios son entusiastas; los resultados pueden no generalizarse |
| Despliegue por mandato | Cobertura rápida | Uso sin valor; resentimiento; manipulación |
| Comparación controlada | Evidencia creíble | Esfuerzo; no siempre es posible |
| Solo antes y después | Sencillo | Confundido por otros cambios |
| Ahorros informados por el proveedor | Fáciles de obtener | Optimistas; sin contexto |
| Tareas cronometradas propias | Basadas en tu trabajo | Consumen tiempo; muestras pequeñas |
| Revisión pesada de cada salida | Segura | Elimina el beneficio |
| Revisión por muestreo | Escala | Algunos errores se cuelan |

La respuesta en prosa es hacer pequeños pilotos con líneas base y comparaciones, muestrear las salidas para comprobar la calidad, contar el costo completo y decidir con la evidencia. Usa las cifras de los proveedores como hipótesis que poner a prueba.

## Preguntas para conversar con tu equipo

**1. ¿Dónde esperamos que la IA nos ayude, y qué veríamos si lo hiciera?**
Enumera los usos candidatos y, para cada uno, el indicador y la línea base que tenemos hoy. El facilitador debe empujar hacia lo concreto: qué tarea, qué medida, qué tamaño de cambio importaría. Elegid un uso para el piloto y acordad la línea base.

**2. ¿Qué nos haría confiar o desconfiar de una sugerencia de la IA, y cómo sabríamos que nos equivocábamos?**
Discutid casos en que la salida fue errónea y cómo se detectó. Considerad cómo funciona la revisión en la práctica y si la presión lleva a omitirla. Acordad un método de muestreo que ejecutará alguien independiente.

**3. ¿Cuánto del tiempo que ahorremos se irá en comprobar?**
Cronometra una tarea real con la herramienta y sin ella, incluidas las instrucciones y la revisión. Compárala con lo que espera la gente. La conversación suele revelar dónde está la ganancia y dónde no.

**4. ¿Qué deberíamos hacer con el tiempo que ahorremos?**
Decididlo de antemano. Las opciones incluyen trabajo de calidad, aprendizaje, mejora o menos presión. Discutid cómo evitar que el tiempo sea absorbido en silencio por más demanda. Acordad con los líderes cómo lo protegerá el equipo.

**5. ¿Qué no querríamos que hiciera aquí la IA, y por qué?**
Enumera tareas que necesitan criterio humano, empatía o rendición de cuentas. Discutid los riesgos para los usuarios y para las habilidades. El facilitador debe registrar los límites como insumos para la gobernanza.

**6. ¿Cómo sabremos cuándo parar?**
Definid la evidencia que pondría fin al piloto o al uso. Acordad quién decide y cuándo. Un piloto sin criterios de salida se convierte en un elemento permanente.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega usan la IA para código, pruebas, revisiones y documentación. Deben medir el tiempo hasta un resultado revisado y funcional, vigilar la calidad y los defectos y mantener significativa la revisión humana. Deben resistir las métricas que cuentan líneas generadas o aceptación, e insistir en medidas de resultado como los defectos y la estabilidad.

### Equipos de servicio y operaciones

Los equipos de operaciones y del centro de servicios usan la IA para la clasificación, los resúmenes, las sugerencias y la monitorización. Deben comparar con las líneas base la calidad de la gestión y de la resolución, muestrear las salidas y vigilar los efectos en los usuarios y en los contactos repetidos. Hay que consultarles antes de poner la IA frente a los usuarios.

### Liderazgo y gobernanza

Los líderes patrocinan los programas de IA y afrontan presión para mostrar ganancias. Deben insistir en líneas base y comparaciones, financiar el trabajo de revisión, evitar las metas de uso y proteger a las personas de la monitorización y del aumento del ritmo. La gobernanza debe exigir clasificación del riesgo y evidencia antes de escalar.

### Clientes y usuarios

Los usuarios se encuentran con la IA en respuestas, sugerencias y acciones automatizadas. Quieren ayuda correcta y comprensible y la posibilidad de llegar a una persona. Hay que decirles cuándo interactúan con IA donde corresponda, y su retroalimentación es una evidencia clave de si ayuda (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

El grupo de tecnología de una aseguradora de tamaño medio opera un centro de servicios interno para 4.000 empleados y varios equipos de producto. La dirección compra licencias de un asistente de IA y pide un informe del tiempo ahorrado tras tres meses. Los números siguientes son ilustrativos.

La jefa de gestión de servicios insiste en una línea base. Para la tarea más común del centro de servicios, redactar respuestas a solicitudes de acceso y de contraseña, cronometra 120 tickets recientes: mediana de tiempo de gestión de 11 minutos, percentil 85 de 24, una tasa de reapertura del 6 por ciento y una puntuación de satisfacción de la encuesta que es estable. Elige dos equipos para el piloto del asistente y mantiene dos equipos similares como comparación. Los equipos del piloto son voluntarios.

Tras ocho semanas, la mediana del tiempo de gestión de los equipos del piloto es de 8 minutos y el percentil 85 es de 19, frente a 11 y 23 en los equipos de comparación. Los registros de la herramienta muestran que los agentes aceptan las sugerencias tal como están en el 52 por ciento de los casos, las editan en el 38 por ciento y las rechazan en el 10 por ciento. Una muestra aleatoria mensual de 80 respuestas, revisada por un agente sénior ajeno al piloto, encuentra un 91 por ciento totalmente correctas, con errores concentrados en un procedimiento poco usado donde el asistente dio pasos obsoletos. La tasa de reapertura de los equipos del piloto sube ligeramente al 7 por ciento, dentro de la variación normal. El costo por ticket baja modestamente una vez contados las licencias y el tiempo de revisión. Una encuesta muestra que los agentes aprecian los borradores y no les gusta la comprobación adicional de las respuestas largas. Dos agentes dicen sentir presión para gestionar más tickets por hora.

La jefa de gestión de servicios informa de un ahorro de tiempo de aproximadamente una cuarta parte en la mediana e indica las salvedades: dos equipos, ocho semanas, voluntarios y una tasa de reapertura que hay que vigilar. Acuerda con los líderes que el tiempo ahorrado irá a la base de conocimiento y a los casos complejos, y que no subirá ninguna meta de tickets. El procedimiento obsoleto se corrige en la base de conocimiento. Un alto responsable pide un uso obligatorio en toda la empresa y una meta del 80 por ciento de aceptación. Ella rechaza la meta, explicando que una meta de aceptación premiaría no comprobar, y propone ampliar el piloto a dos equipos más con las mismas medidas. La decisión se registra.

## Perspectiva por sector

**Startup.** Las herramientas se adoptan con rapidez y a menudo de manera informal. Captura una línea base sencilla de tiempo y defectos para el uso principal, mantén la revisión humana de todo lo que se dirija al cliente y evita atarte pronto a un solo proveedor. Vigila la seguridad y la exposición de datos cuando el personal use herramientas públicas.

**Pequeña empresa.** Los asistentes comerciales pueden ofrecer una ayuda real para redactar y para las tareas rutinarias. Mide a pequeña escala: el tiempo de unas pocas tareas reales y la tasa de correcciones. Ten cuidado con los datos confidenciales, y comprueba las condiciones del proveedor sobre cómo se usan los datos.

**Gran empresa.** La escala exige gobernanza, normas de contratación y un enfoque de medición común. Haz pilotos con comparación, publica los resultados internamente y comparte líneas base y métodos entre equipos. Cuidado con los programas que informan el uso como éxito.

**Gobierno y sector público.** Las decisiones que afectan a los ciudadanos pueden estar sujetas a deberes legales de transparencia, equidad y revisión humana. Clasifica los usos por riesgo, conserva registros de cómo se usó la IA en las decisiones y sé abierto al respecto. Se aplican las reglas de contratación y de protección de datos, y algunas jurisdicciones tienen leyes específicas de IA que deben comprobarse tal como están hoy (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son las licencias o los cargos por uso, la integración, la formación, el tiempo para capturar líneas base y ejecutar comparaciones, el tiempo de las personas dedicado a revisar y corregir las salidas y el esfuerzo de gobernanza. Los costos pueden escalar con el uso y cambiar con los precios de los proveedores, así que modela un rango.

Los posibles retornos son tiempo recuperado en tareas repetitivas, redacción y búsqueda más rápidas, mejor cobertura del conocimiento y alivio del trabajo tedioso para el personal. Son posibilidades que poner a prueba, no supuestos que dar por buenos. Construye el caso con tus propios pilotos: tiempo de tarea medido hasta un resultado comprobado, exactitud revisada, retrabajo y costo completo por tarea, frente a la línea base y la comparación. Evita citar porcentajes de productividad de fuentes de proveedores o de encuestas salvo que puedas rastrear el método y el encaje con tu trabajo. Incluye el riesgo de errores que llegan a los usuarios y el costo de gobernar las herramientas (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Introducir la IA sin una línea base.** No puedes saber qué cambió. Captúrala primero.
- **Medir la rapidez de generación.** El ahorro puede desaparecer en la revisión. Mide el tiempo hasta un resultado comprobado.
- **Metas de adopción.** Producen uso sin valor. Trata la cobertura como descriptiva.
- **Fiarse de las afirmaciones de los proveedores.** Son hipótesis. Ponlas a prueba con tu trabajo.
- **Revisión que no es real.** El sesgo de automatización convierte la revisión en un sello de goma. Muestrea y comprueba de forma independiente.
- **Convertir el tiempo ahorrado en más demanda.** Erosiona la confianza y el ritmo sostenible. Decide de antemano para qué es el tiempo.
- **Monitorizar el uso individual.** Genera miedo. Agrega a nivel de equipo.
- **Pilotos sin final.** Se vuelven permanentes por defecto. Fija criterios de salida.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Propósito y líneas base | Herramientas adoptadas por entusiasmo | Casos de uso enumerados | Registro con problema, clase de riesgo, línea base e indicador para cada uso | Líneas base y comparaciones exigidas antes de escalar; resultados publicados | Líneas base y métodos compartidos entre equipos y socios; usos retirados cuando la evidencia se debilita |
| Evidencia de beneficio | Anécdotas y afirmaciones de proveedores | Estimaciones informales de tiempo | Tareas cronometradas; exactitud muestreada; costo completo por tarea | Movimiento del resultado frente a la comparación informado con sus límites | Visión de portafolio de dónde ayuda la IA, con el aprendizaje compartido ampliamente |
| Personas y ritmo | Mandatos; monitorización | Cuidado informal | Solo datos a nivel de equipo; tiempo ahorrado asignado por acuerdo | Inquietudes con seguimiento; habilidades y satisfacción medidas | Codiseño del uso de la IA con usuarios y personal; ritmo sostenido protegido |

## Lista de verificación

- [ ] Cada uso de la IA tiene un problema escrito, una clase de riesgo, un responsable y criterios de salida.
- [ ] Existe una línea base fechada para cada piloto antes del primer uso.
- [ ] Se definen de antemano un grupo de comparación o tareas de comparación.
- [ ] El tiempo se mide hasta un resultado terminado y comprobado.
- [ ] Las salidas se muestrean cada mes y las revisan personas cualificadas e independientes.
- [ ] El costo completo por tarea incluye la revisión y el retrabajo.
- [ ] Los datos de uso se agregan a nivel de equipo y no se usan para individuos.
- [ ] El equipo ha acordado qué hacer con el tiempo ahorrado.
- [ ] Se pregunta a los usuarios por su experiencia con la herramienta.
- [ ] Los pilotos terminan en una decisión registrada de escalar, adaptar o detener.

## Prompts de IA

**Redacta una entrada de caso de uso.**

```text
Estamos considerando usar IA para [task] en [team and service]. Redacta una
entrada del registro de casos de uso: el problema y quién lo siente, el
resultado que debe mejorar, la clasificación del riesgo y por qué, el paso de
revisión humana, los indicadores de línea base que capturar ahora, un enfoque de
comparación, los componentes de costo que seguir, los criterios de salida y las
preguntas para el equipo. No supongas funciones concretas de proveedores ni
afirmes beneficios. Enumera tus supuestos.
```

**Diseña un estudio de tareas cronometradas.**

```text
Diseña un pequeño estudio para medir el efecto de un asistente de IA en [task].
Propón cómo seleccionar tareas, cómo comparar con la herramienta y sin ella de
forma justa, qué cronometrar (incluidas las instrucciones, la revisión y la
corrección), cómo juzgar la calidad de la salida y cómo evitar sesgos. Hazlo
práctico para un equipo de [number] personas. No enuncies resultados esperados.
Enumera tus supuestos y los límites del diseño.
```

**Planifica el muestreo de salidas.**

```text
Nuestras salidas asistidas por IA al mes son unas [number] de los tipos [list].
Diseña un proceso mensual de muestreo aleatorio y revisión: tamaño de la
muestra y método de selección (con el razonamiento, evitando exagerar la
precisión), quién revisa, la norma escrita, las categorías de error, cómo
informar y cómo usar los hallazgos. Enumera tus supuestos y riesgos.
```

**Decide qué hacer con el tiempo ahorrado.**

```text
Nuestro piloto ahorró una mediana de [value] por tarea en [number] tareas por
semana en [team]. Sugiere opciones para usar el tiempo que respalden la
calidad, el aprendizaje y un ritmo sostenible, con las compensaciones y los
riesgos de cada una, y una forma de acordar la elección con el equipo y los
líderes. No supongas que los ahorros persistirán. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica relacionada con la IA antes de informarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de IA registra su línea base, su comparación, su vector de manipulación y su barrera de protección.

## Puntos clave

- Captura una línea base fechada antes de usar la IA, y compara con un trabajo similar hecho sin ella.
- Mide el tiempo hasta un resultado terminado y comprobado, y muestrea las salidas para comprobar la exactitud con revisores independientes.
- Cuenta el costo completo, incluidos la revisión y el retrabajo.
- Trata el uso y la aceptación como descriptivos, nunca como metas.
- Decide de antemano qué hacer con el tiempo ahorrado, y mantén un ritmo sostenible.
- Mantén los datos de uso a nivel de equipo, y termina cada piloto con una decisión registrada.

## Referencias y lecturas complementarias

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
