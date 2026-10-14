# Alfabetización estadística para métricas de servicio

**Los datos de tickets y de flujo son asimétricos, irregulares y a menudo escasos, así que informa medianas y percentiles altos en lugar de promedios, indica cuántos elementos respaldan cada tasa y separa la variación ordinaria del cambio real antes de que nadie reaccione.**

## Resumen y motivación

La mayoría de las métricas de servicio llegan como un único número en un panel: tiempo medio de resolución, porcentaje de incidentes resueltos dentro del objetivo, tickets cerrados esta semana. Un solo número parece preciso. Por lo general es un resumen comprimido de una colección desordenada de eventos, y la compresión decide lo que ve el lector. La alfabetización estadística, a los efectos de este libro, es el pequeño conjunto de hábitos que mantiene honesto el resumen: elegir un resumen que se ajuste a la forma de los datos, saber cuántos datos lo respaldan y distinguir un cambio real del ruido.

La forma de los datos de servicio es el primer problema. Las medidas de tiempo, como el tiempo de resolución, el tiempo de ciclo y el tiempo de espera, están acotadas en cero y tienen una cola larga a la derecha. La mayoría de los elementos terminan rápido, y unos pocos tardan mucho. Datos así son [asimétricos](https://en.wikipedia.org/wiki/Skewness), y la media aritmética se desplaza hacia la cola, de modo que un solo ticket atascado puede mover el promedio más que cien rutinarios. La [mediana](https://en.wikipedia.org/wiki/Median), el valor central cuando los elementos se ordenan, se ve mucho menos afectada. Un [percentil](https://en.wikipedia.org/wiki/Percentile) la generaliza: el percentil 85 es el valor dentro del cual termina el 85 por ciento de los elementos. Las duraciones de este tipo suelen modelarse con una [distribución log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution), en la que el logaritmo del valor es simétrico. La lección es que "típico" y "promedio" difieren cuando los datos son asimétricos.

El tamaño de la muestra es el segundo problema. Un equipo que resuelve 12 incidentes de prioridad 1 en un trimestre e informa "83 por ciento dentro del objetivo" está describiendo 10 de 12. Un fallo más movería la cifra ocho puntos. El enunciado honesto incluye el recuento, y a menudo un rango. Un [intervalo de confianza](https://en.wikipedia.org/wiki/Confidence_interval) es un rango calculado a partir de los datos que expresa a qué distancia del valor observado podría situarse de forma plausible el valor real. Los intervalos son amplios con muestras pequeñas y estrechos con muestras grandes, que es el mensaje correcto para un trimestre con 12 incidentes.

La variación es el tercer problema. Todo proceso produce números que fluctúan de una semana a otra sin que nada haya cambiado. Walter Shewhart, que trabajaba en la calidad de la fabricación en la década de 1920, separó esta fluctuación rutinaria de las señales que merecen investigación, y nos dio el [gráfico de control](https://en.wikipedia.org/wiki/Control_chart). Aplicar gráficos como este a un proceso se llama [control estadístico de procesos](https://en.wikipedia.org/wiki/Statistical_process_control). Parte de ese último error es la [regresión a la media](https://en.wikipedia.org/wiki/Regression_toward_the_mean): a un valor extremo tiende a seguirle uno menos extremo, así que la semana posterior a una semana terrible parece una recuperación, haya hecho alguien algo o no.

La práctica ágil de flujo, como el uso que hace la Guía Kanban de los percentiles del tiempo de ciclo y de la antigüedad del elemento de trabajo, ya pide distribuciones y pronósticos expresados como probabilidades (véase el tema 2.1, Medidas de flujo). En ITIL 4, la práctica de medición e informes y la práctica de mejora continua dependen de medidas que signifiquen lo que parecen significar, y la gestión de niveles de servicio depende de objetivos fijados frente a una variación realista. La alfabetización estadística es la capa compartida bajo ambas. También respalda la barrera de protección del tema 1.2, Ley de Goodhart y psicología de las métricas: un equipo que muestra toda la distribución tiene menos lugares donde esconder un promedio manipulado.

La variación por causa común está integrada en un proceso, y la variación por causa especial proviene de algo concreto que cambió o salió mal. Un acuerdo de nivel de servicio (SLA) es un compromiso documentado con un cliente, y un objetivo de nivel de servicio (SLO) es una meta para una medida.

## Principios clave

- **Ajusta el resumen a la forma.** Usa medianas y percentiles para las duraciones, y muestra la distribución completa cuando la decisión importe. Reserva la media para datos aproximadamente simétricos o para totales como el costo.
- **Toda tasa lleva su recuento.** Un porcentaje sin numerador ni denominador es una afirmación sin pruebas. Por debajo de un recuento mínimo establecido, muestra los elementos en bruto en lugar de una tasa.
- **La variación ordinaria no es noticia.** Conoce el rango normal de una medida antes de reaccionar. Responde a las señales, no a cada movimiento.
- **La incertidumbre forma parte de la respuesta.** Expresa los pronósticos como probabilidades ("el 85 por ciento de los elementos termina en 9 días") y las estimaciones como rangos, y resiste la falsa precisión.
- **Muestra las distribuciones al equipo que posee el trabajo.** Los elementos en bruto y los histogramas hacen visibles los casos inusuales y dificultan la manipulación silenciosa.
- **La correlación, la selección y el momento explican muchas "mejoras".** Pregunta qué más cambió, a quién se dejó fuera de los datos y si el punto de partida era inusualmente malo.
- **Mantén la estadística proporcionada.** Un equipo necesita un puñado de técnicas usadas de forma coherente, no un curso de estadística. Explica cada gráfico con palabras sencillas.

## Definiciones de métricas

Las métricas siguientes describen la calidad estadística de una práctica de métricas y la distribución del trabajo de servicio. Las medidas de tiempo usan los relojes indicados en cada fila, y las definiciones están pensadas para ser reutilizadas por los temas que siguen (véanse el tema 3.3, Tiempo de respuesta y resolución de incidentes, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo).

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mediana del tiempo de resolución | El tiempo de resolución central de los incidentes resueltos en el periodo | Percentil 50 de (marca de tiempo de resolución menos marca de tiempo de creación) de los incidentes resueltos en el periodo; el reloj arranca al crear el ticket y se detiene al resolverlo; las pausas se informan por separado, no se restan; los tickets cancelados y duplicados se excluyen | horas o días | Historial de estados de la herramienta ITSM | Gestión de incidentes; medición e informes | Mediana del tiempo de ciclo | Semanal o mensual |
| Tiempo de resolución en percentil alto | El tiempo dentro del cual se resuelve la mayoría de los incidentes, con el percentil indicado por nombre | Percentil 85 (o 95) del mismo tiempo transcurrido anterior; se calcula solo si se resolvieron al menos 20 elementos, y en caso contrario se enumeran los elementos en bruto | horas o días | Historial de estados de la herramienta ITSM | Gestión de incidentes; gestión de niveles de servicio | Pronóstico por percentil del tiempo de ciclo | Semanal o mensual |
| Antigüedad del elemento abierto más antiguo | Antigüedad del elemento más antiguo que sigue abierto, más el recuento de elementos más antiguos que el percentil alto | ahora menos marca de tiempo de creación de los elementos abiertos, sin restar pausas; cuenta todos los elementos abiertos de la cola del servicio, incluidos los que esperan al cliente | días | Herramienta ITSM o gestor de incidencias | Gestión de incidentes; gestión de problemas | Antigüedad del elemento de trabajo | Semanal |
| Cobertura de informe de tasas | Proporción de las tasas informadas que muestran el numerador, el denominador y una comprobación de recuento mínimo | tasas informadas con recuentos y una marca de muestra / tasas informadas; cuenta solo las tasas publicadas en el paquete de revisión del periodo | porcentaje | Registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) | Medición e informes | Acuerdos de trabajo | Trimestral |
| Tasa de señales del gráfico de control | Proporción de los puntos del gráfico de control de una medida que señalan variación por causa especial según las reglas escritas del equipo | puntos marcados según las reglas / puntos trazados, sobre los últimos 20 puntos o más; las reglas se fijan de antemano y se registran | porcentaje | Herramienta de gráficos de control u hoja de cálculo | Mejora continua | Inspección retrospectiva del proceso | Mensual |
| Anchura del intervalo | Anchura del rango de incertidumbre indicado en una tasa principal | límite superior menos límite inferior del intervalo, con el método indicado en el registro, para la tasa principal del periodo | puntos porcentuales | Calculado a partir de recuentos de ITSM | Gestión de niveles de servicio | Rango de pronóstico en la planificación | Mensual |

Cuando un contrato nombre una media, informa la cifra contractual y muestra la mediana y el percentil a su lado.

## Recomendaciones

### Resume los datos de tiempo con honestidad

**1. Usa por defecto la mediana y un percentil alto con nombre.** Para el tiempo de resolución, el tiempo de ciclo y el tiempo de cumplimiento, publica juntos la mediana y el percentil 85 o 95, y escribe el percentil en el nombre de la métrica. La mediana dice qué es típico, y el percentil alto dice qué se puede prometer razonablemente a un cliente. Si tienes que elegir un único número para un compromiso, elige el percentil.

**2. Muestra la forma además del resumen.** Un histograma o un diagrama de dispersión del tiempo de resolución por fecha de cierre muestra grupos, colas largas y cambios bruscos que ningún resumen muestra. Cuando la imagen y el número discrepen, cree en la imagen e investiga el número.

**3. Añade la antigüedad del elemento abierto más antiguo.** Los percentiles del trabajo terminado miran hacia atrás e ignoran todo lo que sigue atascado. Informa el elemento abierto más antiguo y cuántos elementos abiertos ya son más antiguos que tu percentil alto (véase el tema 2.1, Medidas de flujo). Es el correctivo más útil contra los promedios que mejoran porque los elementos difíciles se dejan envejecer.

### Respeta las muestras pequeñas y la incertidumbre

**4. Publica el recuento con cada tasa.** Escribe "10 de 12 resueltos dentro del objetivo" en lugar de "83 por ciento". Añade una regla por la que las tasas basadas en menos de un número establecido de elementos se muestren como recuentos o como los elementos subyacentes. El umbral es un juicio: escríbelo, revísalo y aplícalo en todas partes.

**5. Usa intervalos para las tasas principales y los pronósticos.** Para una proporción, como la parte de los cambios que fallan, calcula un intervalo de confianza con un método que tu equipo acuerde y anota el método en el registro. Para los pronósticos de entrega, un rango basado en muestras (por ejemplo, "probablemente entre 8 y 14 elementos por semana") informa más a quienes planifican que una única cifra de rendimiento. Si el intervalo es demasiado amplio para informar una decisión, dilo.

### Distingue la señal del ruido

**6. Dibuja gráficos de control para las medidas sobre las que actúas.** Un gráfico sencillo de individuos traza cada punto en orden temporal con una línea central y límites calculados a partir de los datos, y marca los puntos fuera de los límites o las rachas a un lado del centro. Empieza con la mediana semanal del tiempo de resolución y el volumen semanal. Escribe las reglas de señal una sola vez (por ejemplo, un punto más allá de los límites o una racha de ocho a un lado) y mantenlas fijas, para que el equipo no ajuste las reglas hasta que el gráfico concuerde con sus impresiones.

**7. Actúa sobre las señales y deja en paz la variación por causa común.** Cuando un punto esté dentro de los límites, resiste buscarle una explicación; es el proceso comportándose como de costumbre. Cuando aparezca una señal, pregunta qué cambió esa semana: una versión, una falta de personal, una caída de un proveedor, una categoría nueva. Si el proceso es estable pero insatisfactorio, la mejora es un cambio en el sistema, no una conversación con quien tuvo la semana en rojo.

**8. Espera una regresión a la media tras un periodo extremo.** Si lanzas una iniciativa en el peor mes del año, seguirá alguna mejora por azar. Compara con una línea base más larga, con un servicio similar que no cambió o con los límites de control antes de atribuir el mérito a la iniciativa. Un par de antes y después con dos puntos es la forma más débil de evidencia.

### Razona con cuidado sobre causa y selección

**9. Pregunta qué falta en los datos.** Las respuestas de una encuesta provienen de personas que decidieron responder. Los tickets cerrados excluyen los que siguen abiertos. Antes de sacar una conclusión, enumera quién o qué está ausente y cómo eso podría inclinar el resultado.

**10. Cambia las definiciones a propósito y márcalas en el gráfico.** Un nuevo modelo de estados, una nueva matriz de prioridades o una nueva lista de categorías cambian los datos sin cambiar el trabajo. Anota cada cambio en el gráfico y reinicia los límites de control después de él (véase el tema 1.5, Fuentes de datos e instrumentación).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Mediana del tiempo de resolución | Cerrar primero los tickets rápidos y dejar abiertos los difíciles; dividir un ticket en varios fáciles; pausar el reloj en un estado de espera del cliente | Tiempo de resolución en percentil alto y antigüedad del elemento abierto más antiguo; proporción de tiempo en estados de pausa; tasa de tickets vinculados |
| Tiempo de resolución en percentil alto | Elegir un percentil que favorezca el resultado, o cambiarlo entre informes; excluir los casos largos como "atípicos" o reclasificarlos | Percentil fijado en el registro; lista de elementos excluidos con sus motivos; antigüedad del elemento abierto más antiguo |
| Antigüedad del elemento abierto más antiguo | Cerrar o fusionar el elemento más antiguo sin resolverlo; moverlo a otra cola o categoría | Tasa de reaperturas; auditoría por muestreo de los elementos cerrados más antiguos; recuento de traslados entre colas |
| Cobertura de informe de tasas | Adjuntar un recuento en letra pequeña mientras los titulares siguen encabezándose con el porcentaje; fijar el recuento mínimo tan bajo que nunca se active | Revisar el panel real, no el registro; recuento mínimo revisado junto con la anchura del intervalo |
| Tasa de señales del gráfico de control | Ensanchar los límites, añadir reglas o reiniciar la línea base para que las señales desaparezcan; mover puntos cambiando la medida | Reglas y límites guardados en el registro con historial de cambios; comparar con el histograma en bruto |
| Anchura del intervalo | Elegir un método o una ventana que produzca un rango estrecho; agrupar servicios distintos para ampliar la muestra | Método indicado en el registro; desglose por servicio disponible a petición; resultados agrupados y sin agrupar comparados |

Una lectura sana muestra medianas y percentiles que se mueven en el mismo sentido que la experiencia de los usuarios, una lista corta de elementos antiguos que se reduce sin reclasificarse en silencio y tasas que aparecen con sus recuentos. La tasa de señales del gráfico de control debe ser baja y distinta de cero: un gráfico que nunca señala puede ser incapaz de hacerlo, y uno que siempre señala refleja un proceso inestable o reglas mal elegidas.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Tiempo medio de resolución | Sencillo, coincide con muchos contratos, fácil de sumar | Dominado por la cola; oculta lo que los clientes viven normalmente |
| Mediana más percentil alto | Resiste los valores atípicos; respalda las promesas a los clientes | Requiere algo de explicación; los percentiles necesitan suficientes elementos para ser estables |
| Tasas en bruto sin recuentos | Compactas y familiares | Ocultan las muestras pequeñas e invitan a una lectura excesiva |
| Tasas con recuentos e intervalos | Honestas sobre la incertidumbre; desalientan la reacción excesiva | Parecen menos decisivas; los métodos de intervalo requieren acuerdo |
| Gráficos de control | Separan la señal del ruido; orientan cuándo actuar | Necesitan suficientes puntos y definiciones estables; los límites pueden malinterpretarse o manipularse |
| Comparación de antes y después | Rápida y fácil de comunicar | Propensa a la regresión a la media y a cambios coincidentes |

Para un servicio con un puñado de incidentes al año, ninguna estadística es estable, y el método correcto es leer cada incidente. Para un centro de servicios de alto volumen, las medidas que tienen en cuenta la distribución son baratas y claramente superiores. Elige según el volumen y lo que está en juego en la decisión.

## Preguntas para conversar con tu equipo

**1. ¿Cuál de las cifras actuales de nuestro panel es un promedio de algo asimétrico, y qué mostrarían la mediana y el percentil 95?**
Elige la medida de tiempo más vigilada y calcula las tres sobre el mismo conjunto de elementos antes de la reunión. Pregunta si la historia que cuenta el promedio coincide con lo que dicen los usuarios. Cierra acordando qué resumen se convierte en el titular y dónde aparecerán los demás.

**2. ¿Cuántos elementos respaldan nuestro porcentaje más citado, y lo seguiríamos citando si escribiéramos los recuentos?**
Enumera los tres porcentajes que más lee la dirección. Junto a cada uno, escribe el numerador y el denominador del último periodo. Pregunta qué haría a la cifra un solo éxito o fallo más. Acordad un recuento mínimo por debajo del cual el equipo muestre los elementos en lugar de una tasa.

**3. ¿Cuándo atribuimos por última vez una mejora a una iniciativa, y qué más era cierto en ese momento?**
Elige una historia de éxito reciente. Pregunta cuándo estaba la medida en su peor momento, cómo es el historial más largo y si un servicio comparable también mejoró. Mantén un tono de curiosidad.

**4. ¿Cuál es el rango normal de nuestras medidas clave, y quién podría decir que una semana determinada es inusual?**
Traza los últimos 20 valores semanales o más de una medida y dibuja el centro y los límites, o calcúlalos de forma aproximada. Pregunta a qué semanas reaccionó el equipo estando dentro del rango. Acordad quién posee el gráfico y dónde se escriben las reglas de señal.

**5. ¿Quién o qué falta en nuestros datos?**
Enumera las fuentes de la medida: tickets cerrados, respuestas de encuestas, servicios monitorizados, herramientas con marcas de tiempo. Para cada una, pregunta a quién excluye y por qué. Registra cada brecha como una corrección o una salvedad.

**6. ¿Cómo explicaríamos a la dirección un rango amplio o un "todavía no lo sabemos" sin que suene a excusa?**
Ensaya la redacción con un ejemplo real: "Entre el 70 y el 95 por ciento, sobre 12 incidentes; esperamos acotarlo tras el próximo trimestre". Pregunta qué necesita decidir la audiencia y si el rango cambia la decisión. Escribid un guion breve durante la reunión.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega usan el tiempo de ciclo y el rendimiento para pronosticar, y ganan más con pronósticos basados en percentiles que con promedios (véase el tema 2.1, Medidas de flujo). Un pronóstico expresado como un rango con una probabilidad es más fácil de defender que una fecha. Resiste la tentación de leer el cambio de un periodo como una tendencia (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

### Equipos de servicio y operaciones

Los equipos de operaciones poseen los datos de tickets y los relojes de los incidentes, así que son los mejor situados para publicar medianas, percentiles y el elemento abierto más antiguo, y para explicar las reglas de pausa. Deben graficar el volumen semanal y el tiempo de resolución con límites de control para distinguir un cambio real, como una versión defectuosa, de una mala semana. Cuando un servicio tiene pocos incidentes, deben revisar cada uno en lugar de calcular tasas (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

### Liderazgo y gobernanza

Los líderes hacen las preguntas que moldean lo que muestran los equipos. Preguntar "¿por qué subió esto?" ante cada fluctuación enseña a la organización a explicar el ruido y a esconderlo. Los líderes deben preguntar si un movimiento está dentro del rango normal, cuántos elementos hay detrás de una cifra y qué ha cambiado en el proceso. Los órganos de gobernanza pueden exigir recuentos en las tasas principales.

### Clientes y usuarios

Los clientes viven casos individuales, no promedios. Recuerdan la única solicitud que tardó cinco semanas, y un promedio de dos días no repara ese recuerdo. Los compromisos por percentil ("nueve de cada diez solicitudes en tres días laborables") encajan mejor con el modelo mental del cliente que los tiempos medios. Los resultados de las encuestas deben mostrarse con el número de respuestas, y los comentarios abiertos deben leerse junto a los números (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio tiene un centro de servicios y un equipo de operaciones que da soporte a su tienda web. Las cifras siguientes son ilustrativas.

La dirección ve un titular mensual: "el tiempo medio de resolución de incidentes bajó de 9,1 horas a 7,4 horas". Se pide a la responsable de operaciones que lo confirme y que presente el plan para el siguiente objetivo, 6 horas. Antes de aceptar, pide al analista que extraiga los elementos subyacentes y los grafique. De los 240 incidentes del mes (ilustrativo), la mediana es de 2,5 horas, el percentil 85 es de 14 horas y 9 incidentes tienen más de 5 días y siguen abiertos. El mes anterior, la mediana era de 2,6 horas. El promedio bajó porque tres incidentes muy largos del mes anterior, uno de ellos de 11 días, se resolvieron casualmente antes en el periodo, y porque un lote de tickets de restablecimiento de contraseña se recategorizó a un tipo de solicitud de cierre rápido.

El equipo grafica la mediana semanal de las últimas 26 semanas. La línea central se sitúa cerca de 2,6 horas, y todos los puntos de los dos últimos meses están dentro de los límites. La caída del titular no es una señal. La recategorización de la segunda semana cambió la definición a mitad del gráfico, así que el equipo la marca y reinicia los límites desde ese punto.

Deciden tres cambios. El informe mensual mostrará la mediana, el percentil 85 y el elemento abierto más antiguo, con el número de incidentes detrás de cada uno. El objetivo propuesto de 6 horas de promedio se sustituye por una conversación sobre un objetivo por percentil, que se fijará tras un trimestre de datos con la nueva definición. El equipo también enumerará los 9 incidentes antiguos con un responsable y un siguiente paso para cada uno.

El riesgo de manipulación lo detectan en la siguiente revisión. Un gerente propone cerrar los 9 incidentes más antiguos como "ya no reproducibles" para que la cifra del elemento más antiguo parezca sana. Como el registro empareja la antigüedad del elemento abierto más antiguo con la tasa de reaperturas y una auditoría por muestreo de los cierres antiguos, el equipo lee tres de los cierres propuestos, descubre que dos siguen activos y los mantiene abiertos. La cifra del elemento más antiguo sigue siendo incómoda otro mes. Ese es el comportamiento buscado.

## Perspectiva por sector

**Startup.** Los volúmenes son pequeños, así que la mayoría de las tasas se componen de unos pocos elementos y los intervalos son amplios. Lee cada incidente en lugar de calcular estadísticas, mantén un gráfico semanal sencillo de una o dos medidas y evita declarar tendencias a partir de tres puntos. A medida que crezca el volumen, pasa pronto a medianas y percentiles para que los hábitos ya estén instaurados.

**Pequeña empresa.** La persona que dirige TI también posee los datos, y la muestra suele ser pequeña. Informa recuentos, no porcentajes, para los eventos raros, y compara con tu propio historial más largo. Comprueba qué mide realmente el reloj de "tiempo de respuesta" de un proveedor.

**Gran empresa.** El volumen hace significativas las distribuciones, y también fomenta consolidaciones que mezclan servicios distintos. Compara lo comparable, publica las definiciones y el percentil usado, y mantén una biblioteca compartida de reglas de gráficos y cálculo para que los equipos no calculen la misma medida de tres maneras.

**Gobierno y sector público.** Los contratos y los informes reglamentarios suelen fijar una media o un porcentaje umbral, y esas definiciones no son negociables. Informa la cifra exigida exactamente como se define y muestra la mediana, el percentil y los recuentos a su lado para que los órganos de supervisión vean el panorama completo. El escrutinio público hace más valiosa la incertidumbre honesta, porque una cifra demasiado segura es cara de retractar (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Se necesitan unas horas para acordar las reglas de resumen, construir un histograma y un gráfico de control a partir de una exportación y añadir recuentos a una plantilla de informe, más unos minutos en cada ciclo para mantenerlos al día. La mayoría de las herramientas ya calculan percentiles. El mayor costo es una conversación con personas acostumbradas a un único número tranquilizador.

El retorno son mejores decisiones y menos reacciones inútiles. Los equipos dejan de reorganizarse tras una mala semana, dejan de atribuir a las iniciativas mejoras casuales y dejan de prometer promedios que la mitad de sus clientes no experimenta. No tomes una cifra prestada: cuenta con qué frecuencia se revirtieron las decisiones del año pasado y cuántas "mejoras" se esfumaron al periodo siguiente, y usa esos recuentos para dimensionar el caso.

## Antipatrones y trampas

- **Promediar duraciones asimétricas.** La media la arrastra la cola y oculta lo que sienten los usuarios. Informa la mediana y un percentil alto con nombre, y muestra el elemento abierto más antiguo.
- **Porcentajes de muestras diminutas.** "100 por ciento" de tres elementos es una anécdota. Muestra los recuentos y aplica una regla de recuento mínimo.
- **Reaccionar a cada fluctuación.** Perseguir cada semana en rojo malgasta esfuerzo y enseña a los equipos a explicar el ruido. Usa límites de control y reglas de señal escritas.
- **La prueba del antes y después.** Dos puntos no pueden separar una intervención del azar o de la regresión a la media. Usa una línea base más larga y una comparación.
- **Mover los postes de la portería en el gráfico.** Cambiar los límites, las reglas o las definiciones a posteriori hace que cualquier gráfico concuerde con la historia. Fija las reglas, registra los cambios y anótalos.
- **Excluir los valores atípicos por defecto.** Los casos más largos suelen ser los que los clientes recuerdan. Excluye solo con un motivo escrito y enumera lo excluido.
- **Falsa precisión.** Informar 83,3 por ciento a partir de 12 elementos implica un conocimiento que los datos no tienen. Redondea con honestidad y muestra un rango.
- **Agrupar trabajo distinto.** Un tiempo combinado de restablecimientos de contraseña y fallos del centro de datos no describe ninguno de los dos. Segmenta primero.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Resúmenes de datos de tiempo | Solo promedios | Algunos equipos muestran medianas | La mediana más un percentil con nombre y el elemento abierto más antiguo son lo habitual | Distribuciones revisadas con una barrera de protección y con seguimiento de su tendencia | Compromisos por percentil acordados con clientes y proveedores, y revisados a medida que cambian los datos |
| Tamaño de la muestra e incertidumbre | Tasas citadas sin recuentos | Recuentos mostrados en algunos informes | Recuentos y una regla de recuento mínimo en cada tasa | Intervalos en las tasas principales, con el método en el registro | Incertidumbre compartida abiertamente con los clientes y usada en la planificación entre equipos |
| Variación y causalidad | Cada cambio se explica | Unos pocos gráficos con límites | Gráficos de control con reglas escritas para las medidas clave | Las señales desencadenan una investigación planificada; las iniciativas se comprueban frente a la línea base | Bibliotecas de gráficos compartidas entre servicios; líneas base comparadas entre equipos sin clasificarlos |

## Lista de verificación

- [ ] Toda medida de tiempo informa una mediana y un percentil alto con nombre, en lugar de solo una media.
- [ ] Se informan la antigüedad del elemento abierto más antiguo y el recuento de elementos más allá del percentil alto.
- [ ] Toda tasa informada muestra su numerador y su denominador.
- [ ] Hay una regla de recuento mínimo escrita y aplicada a todas las tasas.
- [ ] Las tasas principales y los pronósticos muestran un rango, con el método indicado en el registro.
- [ ] Existen gráficos de control para las tres medidas sobre las que actúa el equipo, con reglas de señal escritas.
- [ ] Los cambios de definición se anotan en los gráficos y se registran en el registro.
- [ ] Los elementos excluidos se enumeran con sus motivos.
- [ ] Las afirmaciones de mejora se comprueban frente a una línea base más larga antes de repetirlas.
- [ ] El vector de manipulación y la barrera de protección de cada métrica están en el registro (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Prompts de IA

**Comprueba si un resumen se ajusta a los datos.**

```text
Tengo [number] valores de [measure, such as incident resolution time] para
[service] durante [period]. El reloj arranca en [start event] y se detiene en
[stop event]. Las pausas se tratan [handled how]. Los valores están pegados
abajo.

Describe la forma de la distribución, calcula la media, la mediana y el
[percentile, such as 85th] y el [second percentile, such as 95th], y dime
qué resumen representa mejor un caso típico y cuál respalda una promesa a los
clientes. Señala los valores que parezcan errores de datos, pero no los
elimines. No inventes valores de referencia. Enumera tus supuestos y lo que no
pudiste determinar a partir de los datos.

[paste values, with personal data removed]
```

**Expresa una tasa con su incertidumbre.**

```text
Nuestro equipo informa [rate name] como [numerator] de [denominator] para
[period] y [service]. Muestra cómo presentarlo con los recuentos, explica con
palabras sencillas cuánto cambiaría con un éxito más o uno menos, y calcula un
intervalo de confianza usando [method, or "a method you recommend and name"].
Sugiere una redacción que un líder no técnico pueda entender y una regla de
recuento mínimo para saber cuándo mostrar los elementos en lugar de una tasa. No
inventes cifras de comparación. Enumera tus supuestos, incluidos el método y
las condiciones de los datos que necesita.
```

**Juzga si un cambio es señal o ruido.**

```text
Aquí hay [number] valores consecutivos [weekly or monthly] de [measure] para
[service]. Ocurrió un cambio en [period]: [describe the intervention, release,
or definition change]. Traza o describe un gráfico de control con una línea
central y límites, aplica estas reglas de señal: [list rules, such as one point
beyond the limits or a run of eight on one side], y dime qué puntos señalan.
Di si el cambio se distingue de la variación ordinaria y qué otras
explicaciones, como la regresión a la media o un cambio de definición, debo
descartar. No afirmes causalidad. Enumera tus supuestos y los datos adicionales
que ayudarían.

[paste values]
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema y la barrera de protección emparejada de una métrica de tiempo o de tasa antes de publicarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una medida estadística añadida a un tema tiene su definición, sus relojes, su vector de manipulación y su barrera de protección.

## Puntos clave

- Las duraciones de servicio son asimétricas, así que informa la mediana y un percentil alto con nombre, y añade la antigüedad del elemento abierto más antiguo.
- Toda tasa lleva su recuento, y las muestras pequeñas se muestran como elementos o con un rango, no como un porcentaje seguro.
- Conoce el rango normal de una medida con un gráfico de control antes de reaccionar a una sola semana.
- Desconfía de las mejoras medidas con dos puntos: la regresión a la media y los cambios de definición explican muchas de ellas.
- La incertidumbre honesta es una fortaleza en un informe, y es una barrera de protección contra la manipulación al estilo de Goodhart (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- Mantén la técnica proporcionada: unos pocos métodos coherentes, explicados con palabras sencillas, sirven a un equipo mejor que muchos sin explicar.

## Referencias y lecturas complementarias

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
