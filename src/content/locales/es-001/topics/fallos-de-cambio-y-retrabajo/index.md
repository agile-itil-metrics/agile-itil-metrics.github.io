# Fallos de cambio y retrabajo

**Define "un cambio fallido" una sola vez, por escrito, vincula cada fallo con el cambio que lo causó y lee juntos el fallo y el retrabajo con la velocidad, para que un número menor signifique un cambio más seguro y nunca simplemente menos informes.**

## Resumen y motivación

Todo cambio en un servicio en vivo conlleva alguna probabilidad de empeorar las cosas. Las preguntas prácticas son con qué frecuencia ocurre, cuánto trabajo no planificado crea y con qué rapidez se recupera el equipo. Este tema cubre las medidas que las responden: la proporción de cambios que fallan, la proporción que necesita una vía de emergencia, las tasas de reversión y de correcciones urgentes, y el retrabajo que sigue a un mal cambio. También cubre la parte menos vistosa del asunto, que es acordar qué cuenta como fallo.

Primero algunos términos. En [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la práctica llamada habilitación de cambios cubre la adición, modificación o eliminación de cualquier cosa que pudiera afectar a un servicio. Un **cambio** es, por tanto, más amplio que un despliegue de código: incluye una edición de configuración, una renovación de certificado, una regla de cortafuegos o una migración de base de datos. Un **cambio estándar** está preautorizado y es de bajo riesgo, un **cambio normal** pasa por evaluación y un **cambio de emergencia** se hace con urgencia, normalmente para restablecer un servicio o cerrar una vulnerabilidad grave. Un **despliegue** es el acto de poner una versión del software en un entorno, mientras que una **versión** pone una capacidad a disposición de los usuarios. Los equipos que usan un [interruptor de funcionalidad](https://en.wikipedia.org/wiki/Feature_toggle) pueden desplegar código sin liberarlo (véase el tema 4.5, Métricas de versiones y despliegues).

Un **fallo de cambio** es un cambio que conduce a un servicio degradado o que necesita remediación. La remediación toma varias formas. Una [reversión](https://en.wikipedia.org/wiki/Rollback_(data_management)) devuelve el sistema a su estado anterior. Una [corrección urgente](https://en.wikipedia.org/wiki/Hotfix) (hotfix) es un parche urgente aplicado fuera del ritmo normal de versiones. Una corrección hacia delante entrega un cambio nuevo sobre el roto. El [retrabajo](https://en.wikipedia.org/wiki/Rework) es el esfuerzo no planificado dedicado a rehacer o reparar algo que se suponía terminado. En un entorno de [entrega continua](https://en.wikipedia.org/wiki/Continuous_delivery), donde cambios pequeños fluyen a producción a menudo, estas medidas son la principal evidencia de si la velocidad está costando estabilidad.

Las dos tradiciones miran el mismo evento de forma distinta. La visión de ITIL se organiza en torno al registro de cambios: ¿se autorizó el cambio, tuvo éxito y se registró el resultado? Un cambio que tiene éxito sobre el papel puede aun así causar un incidente una hora después. La visión ágil se organiza en torno al elemento de trabajo y al despliegue: ¿se sostuvo la definición de terminado del equipo y causó el cambio trabajo no planificado poco después? Ninguna visión es completa por sí sola. La investigación detrás del programa DORA trata la tasa de fallos de cambio y la tasa de retrabajo de despliegue como las dos medidas de "inestabilidad" junto a las medidas de rendimiento (véase el tema 2.8, Métricas DORA, que las define a nivel del programa). Este tema profundiza en la mecánica: cómo definir el fallo, cómo asociar incidentes a cambios, cómo se cuenta el trabajo de emergencia y cómo se manipulan los números.

Se aplica una advertencia desde el principio. Estas medidas describen un equipo, un servicio o una canalización. Nunca describen a una persona. Una tasa de fallos de cambio atribuida a un ingeniero individual enseña a la gente a evitar el trabajo arriesgado y valioso, a dividir los cambios hasta que los recuentos parezcan buenos y a dejar de informar problemas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) muerde fuerte aquí, porque "menos fallos" es fácil de conseguir registrando menos fallos.

El tiempo de los incidentes pertenece al tema 3.3, Tiempo de respuesta y resolución de incidentes, los peores incidentes al tema 3.4, Métricas de incidentes graves, el flujo de aprobación y la proporción de cambios estándar al tema 4.3, Métricas de habilitación de cambios, las causas raíz al tema 4.1, Métricas de gestión de problemas, y la revisión escrita al tema 4.2, Métricas de análisis posteriores y aprendizaje.

## Principios clave

- **El fallo necesita una definición escrita única.** Los equipos que deciden caso por caso producen números que no pueden seguirse en el tiempo ni compararse, y la discusión sobre la definición sustituye a la discusión sobre el trabajo.
- **Un fallo debe poder rastrearse hasta su cambio.** Sin un vínculo registrado entre un incidente, una reversión o una corrección urgente y el cambio que lo causó, la tasa de fallos es una conjetura.
- **Cuenta todas las vías de remediación.** Reversión, corrección urgente, corrección hacia delante y solución provisional manual son cuatro caminos hacia el mismo evento. Una métrica que cuenta uno de ellos premia a los equipos por elegir otro.
- **Lee el fallo junto a la velocidad y la recuperación.** Una tasa de fallos de cambio aislada puede mejorarse cambiando con menos frecuencia, que rara vez es el objetivo. Empareja con el plazo de entrega, la frecuencia de despliegue y el tiempo de recuperación.
- **Las muestras pequeñas necesitan recuentos, no solo porcentajes.** Un equipo con ocho cambios en un mes y un fallo tiene una tasa de fallos del 12,5 por ciento que dice casi nada, así que muestra los recuentos y usa una ventana más larga (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- **La emergencia es una señal, no un pecado.** Una proporción estable y explicada de cambios de emergencia es normal. Una proporción creciente suele apuntar a problemas aguas arriba de calidad, de planificación o de detección.

## Definiciones de métricas

Las medidas de fallo y de retrabajo dependen de unir el registro de cambios, el registro de despliegues y la herramienta de incidentes. Cada definición siguiente indica qué se cuenta, qué se excluye y dónde arrancan y se detienen los relojes. Los equipos deben copiar las definiciones en su registro de métricas y ajustarlas con un motivo declarado.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de fallos de cambio | Proporción de cambios en producción que causan un servicio degradado o necesitan remediación | cambios que requirieron una reversión, una corrección urgente, una corrección hacia delante o un incidente vinculado dentro de la ventana de fallo / todos los cambios en producción completados en el periodo; la ventana arranca al completarse el cambio y se detiene tras un número fijo de días (por ejemplo 7), escrito en el registro de métricas; los cambios aún dentro de la ventana se informan por separado y se excluyen de la tasa hasta que la ventana se cierra | porcentaje | Registros de cambios o registro de despliegues unidos a la herramienta de incidentes y a la lista de correcciones urgentes | Habilitación de cambios; gestión de incidentes | Definición de terminado; defectos escapados | Mensual, sobre una ventana móvil de 90 días |
| Proporción de cambios de emergencia | Proporción de cambios hechos por la vía de emergencia | cambios registrados como de emergencia / todos los cambios completados en el periodo; emergencia significa que la evaluación normal se eludió o se abrevió por urgencia, y los cambios estándar preautorizados se excluyen de ambos recuentos | porcentaje | Campo de tipo del registro de cambios | Habilitación de cambios | Trabajo no planificado y clase de servicio de urgencia | Mensual |
| Tasa de reversión | Proporción de cambios que se revirtieron a una versión anterior | cambios revertidos tras llegar a producción / todos los cambios en producción del periodo; una reversión hecha antes de que el cambio llegara a algún usuario (por ejemplo una versión canaria detenida en su primer paso) se cuenta por separado | porcentaje | Registro de despliegues y herramienta de versiones | Gestión de versiones; gestión de despliegues | Prácticas de canalización y de versiones | Mensual |
| Tasa de correcciones urgentes | Proporción de cambios que son parches urgentes aplicados fuera del flujo normal de versiones | cambios etiquetados o ramificados como corrección urgente / todos los cambios en producción del periodo; el denominador incluye las propias correcciones urgentes | porcentaje | Ramas o etiquetas del control de versiones y registro de despliegues | Habilitación de cambios; gestión de incidentes | Trabajo no planificado; urgencia | Mensual |
| Tasa de retrabajo de despliegue | Proporción de despliegues que fueron correcciones no planificadas de un problema de un despliegue anterior | despliegues en producción que corrigen un defecto o fallo de un despliegue anterior reciente, dentro de la misma ventana de fallo / todos los despliegues en producción del periodo; el trabajo de seguimiento planificado de la hoja de ruta se excluye | porcentaje | Registro de despliegues con un vínculo o etiqueta de "corrige", y el gestor de trabajo | Habilitación de cambios; mejora continua | Retrabajo; defectos escapados; demanda por fallo | Mensual |
| Tasa de vínculos de cambio con incidente | Proporción de incidentes resueltos que registran si un cambio los causó, y cuál | incidentes con un campo "causado por un cambio" completado (sí o no, más el identificador del cambio cuando es sí) / incidentes resueltos en el periodo; el reloj se detiene cuando se cierra el incidente | porcentaje | Herramienta de incidentes y registros de cambios | Gestión de incidentes; habilitación de cambios | Revisión posterior al incidente; definición de terminado | Mensual |
| Concordancia en la definición de fallo | Concordancia entre dos revisores sobre si una muestra de cambios falló | cambios muestreados en los que dos revisores independientes llegan al mismo veredicto de fallo usando la definición escrita / cambios muestreados; una muestra de al menos 20 cambios extraídos al azar cada trimestre | porcentaje | Hoja de revisión de la muestra guardada con el registro de métricas | Mejora continua; medición e informes | Retrospectiva | Trimestral |

Dos notas sobre la tabla. La tasa de fallos y la de retrabajo se solapan pero difieren: un fallo revertido sin ningún despliegue nuevo cuenta en la tasa de fallos y no en la de retrabajo. Y la unidad es el cambio o el despliegue, no el incidente, porque un cambio puede causar tres incidentes y un incidente puede provenir de tres cambios.

## Recomendaciones

### Escribe la definición de fallo antes de recoger ningún dato

**Acuerda qué significa "falló" y ponlo en el registro de métricas.** Una definición viable es que un cambio falló si, dentro de una ventana indicada tras su finalización, se revirtió, necesitó una corrección urgente o una corrección hacia delante, o se vinculó a un incidente de una gravedad indicada o superior. Indica la ventana (7 días es común, y el valor correcto depende de la rapidez con que tus servicios muestren problemas), el umbral de gravedad del incidente y quién decide en un caso disputado. Escribe al menos cinco ejemplos resueltos, incluidos casos incómodos como un cambio que degradó el rendimiento sin ninguna caída. Revisa la definición cada año y registra los cambios con sus motivos, para que una línea de tendencia pueda reexpresarse si la regla se mueve.

### Vincula los fallos con los cambios en el registro del incidente

**Añade un campo obligatorio al registro del incidente: causado por un cambio, sí o no, y el identificador del cambio cuando es sí.** El campo debe completarse durante la resolución y comprobarse en la revisión posterior al incidente (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje). Sigue la tasa de vínculos como su propia métrica. Si solo la mitad de los incidentes lleva el campo, la tasa de fallos subestima la verdad en una cantidad desconocida, y debes decirlo junto al número. Automatiza la primera conjetura donde puedas, por ejemplo enumerando los cambios completados en el servicio afectado en las horas anteriores al comienzo del incidente, y deja que una persona la confirme.

### Cuenta todas las vías de remediación, no solo una

**Define un fallo a partir de varias señales.** Extrae las reversiones de la herramienta de despliegue, las correcciones urgentes del control de versiones o del registro de versiones, las correcciones hacia delante del vínculo "corrige" y los incidentes de la herramienta de incidentes, y deduplica luego por cambio. Un equipo que cuenta solo las reversiones verá los fallos desvanecerse el día que pase a corregir hacia delante. Conserva también cada vía como un desglose aparte, porque la mezcla cuenta una historia: muchas correcciones urgentes y pocas reversiones sugieren que revertir es difícil, lo cual vale la pena arreglar por sí mismo.

### Trata la proporción de cambios de emergencia como una pregunta, no como una puntuación

**Revisa los cambios de emergencia como grupo, no como una meta.** Cada trimestre, léelos todos y ordena los motivos: restablecer un servicio, cerrar una vulnerabilidad, una petición tardía del negocio, un paso de planificación omitido o una vía de aprobación demasiado lenta para el trabajo ordinario. Los dos últimos son problemas del sistema que deben corregirse mejorando la vía estándar, para que la gente no necesite eludirla (véase el tema 4.3, Métricas de habilitación de cambios). Una proporción de cero es sospechosa, porque las emergencias genuinas ocurren. Una proporción que sube de forma constante merece un registro de problema (véase el tema 4.1, Métricas de gestión de problemas).

### Mide el retrabajo como demanda por fallo

**Sigue el retrabajo como el trabajo creado por el fallo anterior.** La idea de demanda por fallo proviene del diseño de servicios: demanda que existe porque algo no se hizo bien a la primera. En términos de entrega, cuenta los despliegues y los elementos de trabajo cuyo único propósito es corregir un cambio reciente. Esto se vincula directamente con la división entre planificado y no planificado (véase el tema 2.9, Trabajo operativo y trabajo no planificado). Usa la proporción de capacidad gastada en retrabajo como inicio de conversación con el responsable de producto, porque convierte una tasa abstracta en una compensación sobre en qué trabajar a continuación.

### Informa tasas con recuentos, distribuciones y una ventana

**Muestra los recuentos junto a los porcentajes y usa una ventana móvil.** Una tasa mensual de fallos de un equipo que despliega diez veces es ruidosa. Usa una ventana móvil de 90 días, muestra el número de cambios y de fallos detrás de la tasa y da una indicación aproximada de incertidumbre (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Para la recuperación, muestra la mediana y el percentil 85 del tiempo desde el fallo hasta el restablecimiento en lugar de una media. Cuando un servicio tenga muy pocos cambios, cuenta la historia con una lista de los fallos reales en lugar de una tasa.

### Empareja el fallo con la velocidad para que la mejora no pueda esconderse en ninguno

**Muestra siempre la tasa de fallos de cambio junto al plazo de entrega y la frecuencia de despliegue.** Si la tasa de fallos baja mientras la frecuencia de despliegue también cae con fuerza y el plazo de entrega crece, el equipo puede estar agrupando cambios, lo que aumenta el riesgo de cada uno. Si la velocidad sube y la tasa de fallos se mantiene estable, el sistema mejora en el cambio. El emparejamiento es la principal defensa contra la manipulación y contra la cómoda creencia de que menos despliegues significan despliegues más seguros (véase el tema 2.8, Métricas DORA).

### Usa los números para mejorar el propio cambio

**Convierte los datos de fallos en experimentos de ingeniería.** Mira las características comunes de los cambios fallidos: tamaño, hora del día, tipo, número de personas implicadas, si tocaron componentes compartidos y si la cobertura de pruebas era escasa. Prueba luego un experimento pequeño y reversible, como lotes más pequeños, [pruebas de regresión](https://en.wikipedia.org/wiki/Regression_testing) automatizadas para un área de riesgo, una [liberación canaria](https://en.wikipedia.org/wiki/Canary_release) para el siguiente cambio arriesgado o un interruptor de funcionalidad que separe el despliegue de la versión. Vuelve a medir tras una ventana completa. El objetivo es un cambio mejor, y una métrica mejorada es meramente evidencia.

### Revisa las métricas juntas en un foro sin culpa

**Celebra una revisión mensual de los cambios fallidos con las personas que los hicieron.** El orden del día tiene tres puntos: los recuentos y la tendencia, dos o tres cambios fallidos elegidos para estudiarlos y una acción de mejora con un responsable. Usa la práctica de revisión sin culpa, para que la gente describa lo que sabía en ese momento. Publica las notas de la revisión con las métricas. Si la gente duda en informar de fallos por cómo se usan los números, arregla eso antes de cambiar nada más (véase el tema 11.3, Implantar métricas sin sembrar miedo).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de fallos de cambio | Estrechar la ventana de fallo; no vincular los incidentes con los cambios; clasificar un mal cambio como "solicitud de servicio" o "mantenimiento"; corregir hacia delante y llamarlo cambio nuevo; agrupar muchas ediciones en un solo cambio para que un fallo las cubra todas | Tasa de vínculos de cambio con incidente; auditoría trimestral por muestreo frente a la lista de incidentes; concordancia en la definición de fallo; plazo de entrega y frecuencia de despliegue a su lado |
| Proporción de cambios de emergencia | Encaminar el trabajo urgente por la vía estándar con una valoración de riesgo falsa; encaminar el trabajo ordinario como emergencia para evitar la aprobación; dividir una emergencia en varios cambios normales | Lectura trimestral de todos los cambios de emergencia; motivos ordenados y revisados; proporción de cambios estándar y plazo de aprobación (véase el tema 4.3, Métricas de habilitación de cambios) |
| Tasa de reversión | Corregir hacia delante para evitar registrar una reversión; mantener en vivo una versión rota; retener cambios fuera de producción para que no haya nada que revertir | Tasa de correcciones urgentes y tasa de retrabajo a su lado; distribución del tiempo de recuperación; muestra de incidentes frente al registro de despliegues |
| Tasa de correcciones urgentes | No etiquetar las correcciones urgentes; empujarlas por la rama normal; llamar a una corrección urgente "una pequeña mejora" | Tasa de retrabajo de despliegue; auditoría de ramas y etiquetas; proporción de trabajo no planificado (véase el tema 2.9, Trabajo operativo y trabajo no planificado) |
| Tasa de retrabajo de despliegue | No vincular las correcciones con el despliegue de origen; etiquetar una corrección como "planificada"; agrupar la corrección con funcionalidades nuevas | Vínculo obligatorio de "corrige" en los despliegues correctivos; revisión por muestreo de los despliegues etiquetados como planificados; tasa de fallos de cambio a su lado |
| Tasa de vínculos de cambio con incidente | Completar el campo con "no" sin comprobarlo; dejar que el campo tome por defecto "no"; cerrar incidentes en bloque para subir el porcentaje | Comprobación por muestreo de las respuestas "no" en la revisión posterior al incidente; sin valor por defecto; comentarios del revisor sobre una muestra |
| Concordancia en la definición de fallo | Elegir ejemplos fáciles para la muestra; revisores que son las personas medidas; relajar la definición para que todos concuerden | Muestra al azar extraída por alguien ajeno al equipo; incluir a propósito casos límite; publicar los desacuerdos y corregir la definición |

Una lectura sana es esta: la tasa de fallos se sitúa en un rango que el equipo entiende y explica, la tasa de vínculos es lo bastante alta como para confiar en la tasa de fallos, los cambios de emergencia son pocos y explicados, y las reversiones y las correcciones urgentes son cortas y ensayadas. Los fallos se informan rápido y se discuten sin culpa. Una tasa de fallos anormalmente baja con una tasa de vínculos baja, una frecuencia de despliegue decreciente y tamaños de lote crecientes es una advertencia, no un éxito. Trata cualquier mejora repentina como un aviso para comprobar primero el instrumento (véase el tema 1.5, Fuentes de datos e instrumentación).

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Definición estricta y automatizada de fallo | Coherente, barata de repetir, fácil de seguir en el tiempo | Pasa por alto la degradación sutil; puede contar reversiones benignas como fallos |
| Revisión por criterio de cada cambio | Capta contexto y gravedad | Lenta, subjetiva, abierta a presiones y a la deriva |
| Ventana de fallo larga (semanas) | Capta los fallos tardíos | Desdibuja la causa y el efecto; los cambios recientes aún no pueden informarse |
| Contar todas las vías de remediación | Difícil de manipular cambiando de vía | Necesita varias fuentes de datos unidas con cuidado |

Usa una definición automatizada como base, añade una revisión humana por muestreo y mejora la unión entre cambios e incidentes antes de construir ninguna otra cosa.

## Preguntas para conversar con tu equipo

**1. ¿Qué cuenta exactamente aquí como un cambio fallido, y podríamos discrepar dos de nosotros sobre el mismo cambio?**
Toma cinco cambios recientes y pide a cada persona que vote si fallaron. Compara los votos y los motivos. Los desacuerdos muestran dónde la definición escrita es endeble. Acordad una regla para los casos incómodos, como una caída de rendimiento sin una caída del servicio, y escribidla con un ejemplo.

**2. ¿Cómo sabemos qué incidentes fueron causados por un cambio?**
Pregunta cómo se registra hoy el vínculo y quién lo rellena. Revisa diez incidentes recientes y mira cuántos tienen un cambio adjunto y cuántos deberían tenerlo. Discutid si el campo es opcional, si toma por defecto "no" y quién lo comprueba. El facilitador debe buscar una mejora concreta del registro, como un campo obligatorio sin valor por defecto.

**3. ¿Qué vías de remediación usamos, y se cuentan todas?**
Enumera reversión, corrección urgente, corrección hacia delante, solución provisional manual y desactivar un interruptor de funcionalidad. Para cada una, pregunta dónde se registra el evento y si alimenta la tasa de fallos. Fíjate en las vías que no dejan rastro. La conversación suele revelar que la vía preferida del equipo es la que la métrica no puede ver.

**4. ¿Cuándo fue nuestro último cambio de emergencia, y podría haberse evitado?**
Repasa los tres o cuatro últimos. Pregunta qué hizo urgente a cada uno, qué se sabía antes y cómo habría sido una mejor vía estándar. Separa las emergencias reales de los descubrimientos tardíos y de las aprobaciones lentas. Acordad una corrección de la vía ordinaria que elimine un motivo recurrente de emergencia.

**5. ¿Cuánto de nuestra semana se va en corregir cambios recientes?**
Estima la proporción de capacidad gastada en retrabajo en las últimas cuatro semanas, usando el gestor en lugar de la memoria. Compara la estimación con el gestor. Hablad de lo que el número cuesta en trabajo planificado y de cómo lo usaría el responsable de producto. Elegid un patrón de fallo y un experimento para reducirlo.

**6. Si nuestra tasa de fallos bajara a la mitad el próximo trimestre, ¿lo creeríamos?**
Imagina el titular y pregunta qué más tendría que ser cierto: tasa de vínculos estable, frecuencia de despliegue constante, recuperación rápida y ninguna categoría nueva de "mantenimiento". Discutid cuáles de estas comprobaciones hace ya el equipo y cuáles faltan. Acordad cómo se investigará una mejora repentina antes de celebrarla.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen los cambios, así que poseen la definición de fallo y las correcciones. Parte del trabajo: mira los cambios fallidos en la revisión, encuentra las características comunes y prueba lotes más pequeños, mejores pruebas o interruptores. Sigue el retrabajo como parte del tablero, para que las correcciones no planificadas sean visibles junto al trabajo planificado. Guarda los números para el propio aprendizaje del equipo y resiste compartir datos a nivel individual. Si una métrica se muestra a los líderes, el equipo debe poder explicar cada cambio en ella.

### Equipos de servicio y operaciones

Los equipos de operaciones ven las consecuencias del cambio en la cola de incidentes y son los mejor situados para mantener el vínculo entre incidentes y cambios. Pueden añadir el campo obligatorio, comprobarlo en el paso de resolución y devolver los resultados al equipo de entrega sin culpar. Operaciones también posee la vía de emergencia y debe revisar su uso. Compartid información sobre las vías de recuperación y ensayad las reversiones junto con los equipos de entrega, ya que la mejor manera de reducir el costo del fallo es un hábito compartido de hacer reversible el cambio (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

### Liderazgo y gobernanza

Los líderes deben pedir tendencias por servicio, los dos tipos de medida de inestabilidad junto con la velocidad y los experimentos de mejora que hay detrás. Evita metas fijas como "tasa de fallos inferior al 5 por ciento", que invitan a la redefinición, y evita usar las cifras en evaluaciones individuales. Los órganos de gobernanza pueden usar los datos como evidencia de si una vía de aprobación más ligera es segura, comprobando que el fallo y la recuperación se mantuvieron estables al relajarse los controles. Una tendencia creciente de cambios de emergencia es una señal para mirar el diseño de la planificación y de la aprobación, no para culpar a los ingenieros de guardia.

### Clientes y usuarios

A los clientes no les importa la tasa de fallos. Les importa si el servicio se rompe tras una actualización y con qué rapidez vuelve. Los datos de fallos respaldan una comunicación honesta: aviso previo de los cambios arriesgados, mensajes de estado claros cuando un cambio causa problemas y un compromiso visible de aprender. Donde los usuarios dependen de un servicio para tareas críticas, acordad de antemano con ellos las ventanas de mantenimiento y las expectativas de reversión (véase el tema 3.4, Métricas de incidentes graves).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un proveedor regional de salud opera un servicio de programación de citas de pacientes. Un equipo de producto de siete personas libera cambios varias veces por semana, y un equipo de operaciones de cinco maneja los incidentes y el proceso de cambios. Todos los números de este ejemplo son ilustrativos.

A lo largo de un trimestre, el informe mensual muestra una tasa de fallos de cambio del 4 por ciento, frente al 11 por ciento del trimestre anterior. El director de sistemas de información está satisfecho. El responsable de la plataforma no está convencido, porque el equipo de guardia dice que sus noches no han mejorado. Pide al equipo que realice la auditoría por muestreo del registro de métricas.

La auditoría toma 30 cambios al azar y dos revisores aplican la definición escrita. Coinciden en 24 de los 30 veredictos, de modo que la concordancia en la definición de fallo es del 80 por ciento (ilustrativo). Comparan luego la muestra con la lista de incidentes. De 22 incidentes resueltos en el trimestre, solo 9 llevan el campo "causado por un cambio", una tasa de vínculos del 41 por ciento. Al leer a mano los otros 13, los revisores encuentran 5 que empezaron en el día siguiente a un cambio. El recuento corregido eleva la tasa de fallos a alrededor del 9 por ciento, y la auditoría halla por qué el número parecía bueno: un nuevo hábito de desplegar correcciones bajo la etiqueta "mantenimiento", que el informe excluía tanto del denominador como del numerador.

El riesgo de manipulación es la etiqueta, y nadie lo planeó. Al equipo se le había dicho que los fallos eran una preocupación, y "mantenimiento" evitaba una conversación. El equipo toma tres decisiones. El campo "causado por un cambio" pasa a ser obligatorio sin valor por defecto, y la revisión posterior al incidente lo comprueba. La etiqueta "mantenimiento" se retira, y los despliegues correctivos deben llevar un vínculo al cambio que corrigen, lo que alimenta la tasa de retrabajo. La definición de fallo se reescribe con seis ejemplos resueltos, incluida una regresión de consulta lenta que nunca causó una caída.

El trimestre siguiente muestra una tasa de fallos reexpresada del 8 por ciento y una tasa de vínculos del 90 por ciento (ilustrativo). El informe para la dirección muestra ahora recuentos, la tasa de vínculos y la tasa de retrabajo junto al plazo de entrega, y el director de sistemas de información deja de citar un único porcentaje.

## Perspectiva por sector

**Startup.** Los cambios son pequeños y frecuentes, y el equipo suele saberse de memoria cada fallo. Mantén la definición en un párrafo, etiqueta las reversiones y las correcciones urgentes en la herramienta de despliegue y revisa los fallos en la retrospectiva semanal. Una tasa de fallos sobre 20 cambios es ruidosa, así que usa una lista de fallos como evidencia principal. El riesgo es la informalidad: sin una definición escrita, la tasa cambia con quien cuente.

**Pequeña empresa.** Las mismas personas despliegan, operan y dan soporte, de modo que el retrabajo compite directamente con el trabajo planificado. Registra los fallos en la herramienta que ya uses, añade un campo obligatorio al registro del incidente y revisa los cambios de emergencia cada trimestre. Evita una aprobación pesada solo para mejorar los números. Una lista de verificación de reversión compartida vale más que un comité de cambios.

**Gran empresa.** Muchos equipos, proveedores y herramientas significan muchas definiciones. Estandariza la definición de fallo y el campo de vínculo entre equipos, publícala en el catálogo de métricas y calcula las tasas por servicio antes de consolidar. Usa auditorías por muestreo para encontrar divergencias y trata los registros de cambios de cada proveedor como otra fuente con su propia calidad (véase el tema 1.5, Fuentes de datos e instrumentación). Cuida que las consolidaciones nunca se conviertan en tablas de clasificación de equipos.

**Gobierno y sector público.** Los registros de cambios sirven a la auditoría y a la rendición de cuentas, y las reversiones pueden estar limitadas por la ley, la contratación o plataformas compartidas. Conserva el registro formal y añade el vínculo de fallo como parte de él. Explica los números con cuidado a los órganos de supervisión, con recuentos y contexto, porque un solo fallo en un servicio crítico puede llamar la atención de forma desproporcionada. Usa los datos para justificar vías más ligeras para el cambio de bajo riesgo, con evidencia de que el fallo y la recuperación se mantuvieron estables.

## Caso de negocio: motivaciones, ROI y TCO

La motivación es el costo del cambio fallido: trabajo de incidentes, retrabajo, elementos de la hoja de ruta retrasados y pérdida de confianza de los usuarios. Muchas organizaciones no pueden decir cuánto de su esfuerzo va a reparar cambios recientes, y una medida de retrabajo da la primera respuesta honesta. Hay también un beneficio indirecto. Los equipos que pueden demostrar que el cambio es seguro pueden defender una aprobación más ligera, lo que acorta el plazo de entrega. La investigación de DORA informa de una asociación entre la aprobación externa pesada y un desempeño de entrega más débil (véase el tema 4.3, Métricas de habilitación de cambios), y los datos de fallos son la forma en que un equipo contrasta esa afirmación con su propio historial.

El costo de recogida es modesto si existe la base: un campo obligatorio en el registro del incidente, despliegues correctivos etiquetados, una unión de tres fuentes de datos y una revisión mensual. El costo mayor es la atención, porque alguien debe poseer la definición, realizar las auditorías y actuar sobre los hallazgos. Evita comprar una herramienta antes de que la definición y el vínculo funcionen a mano.

El retorno aparece como menos fallos repetidos, recuperación más corta, menos trabajo no planificado y mejores conversaciones con la gobernanza. No prometas un porcentaje. En su lugar, estima tu propia línea base: cuenta las horas dedicadas al retrabajo y a la respuesta a incidentes vinculados con cambios durante un trimestre, valóralas con tu tarifa interna normal y compara tras las mejoras. Indica los supuestos e informa el resultado como un rango en lugar de una cifra única. Compáralo con el costo del programa y con el costo de un solo fallo grave en un servicio crítico.

## Antipatrones y trampas

- **Fijar una meta para la tasa de fallos.** Invita a la redefinición y a los fallos ocultos. Fija en su lugar una meta de aprendizaje, como completar cada revisión y cerrar cada acción correctiva, y vigila la tasa en busca de tendencias.
- **Clasificar equipos o personas por fallos.** Destruye la notificación y castiga a los equipos que asumen trabajo arriesgado y valioso. Compara un equipo con su propio pasado y discute el contexto.
- **Contar solo los incidentes como fallos.** Los fallos que se detectan pronto y se revierten desaparecen. Incluye todas las vías de remediación y usa los incidentes como una señal entre varias.
- **Tratar los cambios de emergencia como malos.** La presión lleva a emergencias disfrazadas. Revísalos por sus motivos y corrige la vía ordinaria.
- **Dejar que el vínculo con el incidente tome por defecto "no".** El valor por defecto produce un número halagador y erróneo. Haz obligatorio el campo y comprueba una muestra.
- **Informar una tasa sin recuentos.** Las muestras pequeñas oscilan mucho. Muestra recuentos y una ventana móvil.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definición de fallo | Decidida caso por caso por a quien se pregunte | Algunos equipos escriben una definición; los equipos difieren | Una definición escrita con ejemplos resueltos y una ventana declarada | Definición puesta a prueba mediante auditorías por muestreo y concordancia medida | Definición revisada con proveedores y clientes cuando deja de informar decisiones |
| Vinculación de cambios e incidentes | Vínculo recordado por la gente, si acaso | Campo opcional usado por algunos equipos | Campo obligatorio sin valor por defecto, comprobado en la revisión posterior al incidente | Tasa de vínculos con seguimiento de su tendencia y revisada, con las brechas atendidas | Vínculos compartidos entre equipos y proveedores mediante interfaces acordadas |
| Remediación y manejo de emergencias | Reversiones y correcciones urgentes manejadas ad hoc y sin registrar | Reversiones y correcciones urgentes etiquetadas por algunos equipos | Todas las vías de remediación registradas; criterio de emergencia escrito | Cambios de emergencia revisados cada trimestre; reversiones ensayadas | Vías de recuperación diseñadas en los servicios y probadas conjuntamente entre equipos |
| Uso en la mejora | Números citados en informes sin seguimiento | Fallos discutidos tras incidentes graves | Revisión mensual sin culpa de los cambios fallidos con acciones | Fallo y retrabajo emparejados con la velocidad; experimentos planificados y financiados | Mejora rutinaria y compartida entre equipos, con el aprendizaje publicado |

## Lista de verificación

- [ ] Existe una definición escrita de fallo de cambio, con una ventana declarada y al menos cinco ejemplos resueltos.
- [ ] La unidad de conteo (cambio, despliegue o versión) se nombra en el registro de métricas.
- [ ] El registro del incidente tiene un campo obligatorio "causado por un cambio" sin valor por defecto.
- [ ] Las reversiones, las correcciones urgentes y las correcciones hacia delante se etiquetan en las herramientas de despliegue o de control de versiones.
- [ ] Los despliegues correctivos llevan un vínculo al cambio que corrigen.
- [ ] El cambio de emergencia tiene un criterio escrito breve, y cada cambio de emergencia se revisa dentro de un número fijado de días.
- [ ] Las tasas se muestran con recuentos y una ventana móvil, nunca como un porcentaje desnudo.
- [ ] La tasa de fallos de cambio se muestra siempre junto al plazo de entrega, la frecuencia de despliegue y el tiempo de recuperación.
- [ ] Una auditoría trimestral por muestreo comprueba los veredictos de fallo y el vínculo con el incidente.
- [ ] Se celebra una revisión mensual sin culpa de los cambios fallidos, con un responsable para cada acción.
- [ ] Ninguna métrica de este tema se usa para clasificar o evaluar a individuos.

## Prompts de IA

**Redacta una definición escrita de fallo de cambio.**

```text
Operamos [service or product type] con [team size] personas y liberamos
[frequency, for example several times a week]. Nuestras herramientas son
[change tool, deployment tool, incident tool]. Redacta una definición de una
página de "cambio fallido" que indique la unidad (cambio, despliegue o versión),
la ventana de fallo, las vías de remediación que cuentan (reversión, corrección
urgente, corrección hacia delante, incidente vinculado) y las exclusiones.
Incluye [number] ejemplos resueltos, incluidos casos límite. No inventes valores
de referencia ni umbrales; pídeme los que necesites. Enumera tus supuestos.
```

**Diseña el vínculo entre cambio e incidente.**

```text
Esta es nuestra plantilla de registro de incidentes: [fields]. Esta es nuestra
plantilla de registro de cambios: [fields]. Sugiere cómo registrar qué cambio
causó qué incidente, incluido un campo obligatorio, los valores permitidos,
quién lo completa y cómo debe comprobarlo una revisión. Propón una forma de
sugerir automáticamente cambios candidatos a partir de [available data, for
example deploy times and service names]. No adivines cómo están configuradas
nuestras herramientas. Enumera tus supuestos y las preguntas que debería
responder.
```

**Analiza una lista de cambios fallidos en busca de patrones.**

```text
A continuación hay [number] cambios fallidos de [period], con estos campos:
[list fields, for example size, type, day and time, service, remediation route,
time to restore]. Encuentra patrones y posibles factores contribuyentes, y
sugiere hasta [number] experimentos pequeños y reversibles para reducir los
fallos. Mantén el análisis al nivel de equipos y servicios y no clasifiques a
individuos. No inventes estadísticas ni valores de referencia. Indica la
confianza de cada patrón dado el tamaño de la muestra y enumera tus supuestos.
```

**Comprueba un panel de fallos en busca de riesgos de manipulación.**

```text
Nuestro panel muestra [list of metrics, for example change fail rate, emergency
share, rollback rate, hotfix rate, rework rate] con estas definiciones:
[definitions]. Para cada métrica, enumera formas plausibles de que el número
mejore sin que mejore el servicio, y una barrera de protección para cada una.
Sugiere dos comprobaciones de auditoría que un equipo de [team size] podría
realizar cada trimestre. No inventes valores de referencia ni afirmaciones de
cumplimiento. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar qué tema define una métrica relacionada, como el plazo de entrega o la duración de los incidentes, y la barrera de protección que situar junto a la tasa de fallos.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de fallos nueva o editada indica su reloj, su fuente y su vector de manipulación.

## Puntos clave

- Una tasa de fallos de cambio es tan buena como su definición, así que escribe una con una ventana, ejemplos resueltos y una unidad con nombre.
- Vincula cada fallo con su cambio mediante un campo obligatorio en el registro del incidente, y mide la tasa de vínculos.
- Cuenta juntos las reversiones, las correcciones urgentes, las correcciones hacia delante y los incidentes vinculados, para que los equipos no puedan esquivar la métrica cambiando de vía.
- Lee la proporción de cambios de emergencia y el retrabajo como señales sobre la planificación y la vía ordinaria, no como puntuaciones.
- Muestra siempre el fallo junto a la velocidad y la recuperación, con recuentos y una ventana móvil, y no clasifiques nunca a las personas.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
