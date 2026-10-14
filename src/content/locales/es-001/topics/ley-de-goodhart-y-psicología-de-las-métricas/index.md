# Ley de Goodhart y psicología de las métricas

**Cualquier número que se premie, se clasifique o se use como amenaza empezará a cambiar el trabajo que debía describir, así que cada métrica de este libro se usa como una pregunta que un equipo discute y se empareja con una barrera de protección que detecta su manipulación.**

## Resumen y motivación

La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es la advertencia más antigua de la medición. El economista Charles Goodhart observó en 1975, al escribir sobre la política monetaria británica, que una regularidad estadística tiende a derrumbarse una vez que las autoridades la presionan con fines de control. La formulación popular llegó después. La antropóloga Marilyn Strathern la expresó en 1997 así: "Cuando una medida se convierte en objetivo, deja de ser una buena medida". Las dos frases dicen lo mismo: en cuanto un número se usa para dirigir a las personas, las personas dirigen el número.

La misma idea tiene otros nombres. La [ley de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), del científico social Donald Campbell, dice que cuanto más se usa un indicador cuantitativo para tomar decisiones, más expuesto está a presiones de corrupción y más distorsiona los procesos que debía vigilar. El [efecto cobra](https://en.wikipedia.org/wiki/Cobra_effect) es la historia de una recompensa que produjo más de aquello que quería eliminar. Cada uno es un ejemplo de [incentivo perverso](https://en.wikipedia.org/wiki/Perverse_incentive): una recompensa que aparta la conducta de lo que quería quien la ofrece.

Los equipos que construyen y operan servicios de TI están especialmente expuestos. La entrega continua y la gestión de servicios de TI (ITSM), tal como la codifica [ITIL](https://en.wikipedia.org/wiki/ITIL), producen un flujo constante de marcas de tiempo, recuentos y estados. Un sistema de tickets registra cuándo se abrió un ticket, cuándo se asignó, cuándo se detuvo el reloj y cuándo se cerró. Una herramienta de entrega registra cuándo empezó y terminó el trabajo. Estos números son baratos de reunir, fáciles de graficar y fáciles de convertir en objetivos. También son fáciles de mover sin ayudar a nadie.

Tres términos se repiten en este tema y en el resto del libro. Una **medida** describe algo. Un **objetivo** es un número que se espera que alguien alcance. Una **barrera de protección** (guardrail) es una segunda medida o una práctica, elegida de antemano, que se movería si la primera medida se estuviera manipulando. El paso de medida a objetivo es donde empiezan los problemas, y la barrera de protección es la forma de notarlo.

Este tema fija la regla que gobierna todos los demás. Cada familia de métricas del libro llega con su vector de manipulación (cómo suele manipularse) y su barrera de protección. Si un tema posterior parece omitirlo, considéralo inacabado.

### Por qué la gente manipula los números

La manipulación no suele ser deshonestidad. Es la respuesta ordinaria de personas capaces a los incentivos que tienen delante. Actúan cuatro fuerzas.

- **Presión.** El bono, la evaluación, la renovación del contrato o la reputación de alguien depende del número. Incluso sin un vínculo formal, la gente deduce lo que le importa a la dirección por lo que la dirección grafica.
- **Subrogación.** La [subrogación](https://en.wikipedia.org/wiki/Surrogation) (surrogation) es la tendencia a tratar la medida como si fuera aquello que representa. Los investigadores que la estudiaron en organizaciones hallaron que la remuneración por incentivos ligada a una medida la hace más probable. Un equipo que sigue los "tickets cerrados" empieza a creer que el objetivo son los tickets cerrados y no los problemas resueltos.
- **Miedo.** Cuando un mal número trae culpa, la gente oculta las malas noticias. Los incidentes se rebajan de categoría, las caídas se reetiquetan como "mantenimiento planificado" y los defectos se registran como solicitudes de funciones.
- **Optimización local.** Un equipo mejora la parte del sistema por la que se le juzga y traslada el costo a una parte por la que no. El centro de servicios cierra rápido y el segundo nivel hereda los casos repetidos.

Comprender estas fuerzas importa porque el remedio no es una vigilancia más estricta. Es cambiar las condiciones que hacen racional la manipulación.

## Principios clave

- **Mide para aprender, no para juzgar.** Muestra los números primero al equipo que hace el trabajo y úsalos para hacer preguntas.
- **Empareja cada métrica con una barrera de protección.** Velocidad con calidad, volumen con resultado, costo con experiencia.
- **Describe equipos y sistemas, nunca clasifiques personas.** Las tablas de posiciones individuales son la forma más rápida de corromper una fuente de datos.
- **Prefiere los resultados y las tendencias a los objetivos.** Una dirección y una conversación valen más que un umbral.
- **Escribe la definición, incluidos los relojes.** Las definiciones ambiguas son donde se esconde la manipulación.
- **Espera cambios.** Retira o rediseña una métrica cuando deje de informar decisiones.
- **Haz que las malas noticias sean seguras.** Si se castiga el informe honesto, los datos mentirán.

## Definiciones de métricas

Las métricas siguientes no son medidas de servicio ni de entrega. Son medidas de la salud de la propia práctica de métricas, y muestran la forma que adopta cada tabla de métricas de este libro. Las tres primeras son ejemplos de barreras de protección que aparecen en los temas posteriores.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de barreras de protección | Proporción de métricas reportadas que tienen una barrera de protección con nombre y seguimiento | métricas con barrera de protección / métricas reportadas | porcentaje | Registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) | Medición e informes; mejora continua | Retrospectiva de los acuerdos de trabajo | Trimestral |
| Tasa de reaperturas | Proporción de tickets o elementos de trabajo cerrados que se reabren dentro de una ventana declarada | elementos reabiertos en 14 días / elementos cerrados en el período | porcentaje | Historial de estados de la herramienta ITSM o del gestor de incidencias | Gestión de incidentes; gestión de problemas | Definición de terminado; defectos escapados | Mensual |
| Recuento de cambios de definición | Número de cambios en las definiciones de métricas o en los flujos de estados en un período, con sus motivos | recuento de entradas en el registro de cambios de definición | recuento | Registro de cambios del registro de métricas | Medición e informes | Acuerdos de trabajo | Trimestral |
| Tasa de uso de métricas | Proporción de métricas reportadas que se citaron en una decisión durante el período | métricas citadas en una decisión registrada / métricas reportadas | porcentaje | Registro de decisiones o notas de revisión | Mejora continua | Acciones de la retrospectiva | Trimestral |
| Brecha de percepción | Diferencia entre el resultado de una encuesta de satisfacción y un nivel de servicio derivado de los tickets para el mismo servicio | tasa derivada de la encuesta menos tasa derivada del gestor | puntos porcentuales | Herramienta de encuestas y herramienta ITSM | Gestión de niveles de servicio | Comentarios de la revisión con las partes interesadas | Trimestral |

La tasa de reaperturas cuenta solo los elementos que se reabrieron en el mismo registro. Un elemento cerrado y luego planteado de nuevo como ticket nuevo no aparece. Parte del sentido de la sección siguiente es que la barrera de protección necesita su propia barrera de protección, como vincular los tickets duplicados con sus originales.

## Recomendaciones

### Diseña el sistema de medición

**1. Parte de una pregunta, no de un número.** Antes de añadir una métrica, escribe la pregunta que responde y la decisión que informa. "¿Los usuarios ven resueltos sus problemas a la primera?" es una pregunta. "Reducir el tiempo medio de gestión" es un objetivo que finge serlo. Una métrica sin decisión asociada es candidata a retirarse.

**2. Elige métricas en tensión.** Un solo número invita a la sobreoptimización, así que elige pares que tiren en sentidos opuestos: plazo de entrega con tasa de fallo de los cambios, velocidad de cierre de tickets con tasa de reaperturas, disponibilidad con experiencia reportada por los usuarios. El par no necesita ser una fórmula. Necesita mostrarse junto, en la misma página.

**3. Define los relojes y las exclusiones.** Para cada medida de tiempo, escribe dónde empieza el reloj, dónde se detiene y cuándo puede pausarse. Gran parte de la manipulación en los datos de servicio vive en esos límites: un ticket puesto en "en espera del cliente" detiene el reloj del nivel de servicio, y un cambio registrado solo después de aplicarse escapa al plazo de entrega de los cambios. Si existe un estado de pausa, reporta con qué frecuencia se usa.

**4. Usa distribuciones y percentiles.** Un promedio de los tiempos de resolución de tickets puede mejorar porque se cerraron deprisa unos pocos tickets fáciles mientras los difíciles envejecen. Muestra la mediana y un percentil alto (por ejemplo el 85 o el 95), y muestra los elementos abiertos más antiguos. La antigüedad de los elementos de trabajo y el ticket abierto más antiguo son difíciles de manipular sin terminar realmente el trabajo (véase el tema 2.1, Medidas de flujo).

**5. Mantén un registro de métricas.** Un registro breve enumera cada métrica, su responsable, su definición, su fuente de datos, su vector de manipulación, su barrera de protección y la fecha de su última revisión. Es aburrido y es el hábito más eficaz de este tema (véase el tema 1.4, Gobernanza y propiedad de las métricas).

### Introduce las métricas con seguridad

**6. Enseña primero al equipo, y enseña los datos en bruto.** Los equipos que ven los números antes que la dirección están más dispuestos a cuestionar su exactitud. Empieza por los elementos subyacentes, no por el gráfico. Si los datos no pueden sobrevivir a una conversación con las personas que los generaron, no pueden sobrevivir a un panel.

**7. Separa las vistas de aprendizaje de las vistas de rendición de cuentas.** La vista de trabajo de un equipo puede contener muchas medidas, incluidas las feas. Lo que llega a la dirección debe ser un conjunto pequeño y estable. Si la dirección pide la vista de trabajo, espera que la vista de trabajo cambie para verse mejor.

**8. No vincules la paga, la disciplina ni la clasificación individual a una métrica.** Se puede pedir a los equipos que expliquen sus números y que los mejoren. Los objetivos individuales sobre recuentos de tickets, puntos de historia o commits enseñan a la gente a maximizar el recuento. El enfoque del [indicador clave de desempeño](https://en.wikipedia.org/wiki/Key_performance_indicator) puede funcionar cuando los indicadores se eligen para todo el sistema y se revisan con regularidad. Fracasa cuando se convierte en un cuadro de mando por persona.

**9. Haz que el informe honesto sea seguro.** La [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety) es la creencia de que no se te castigará por hablar de un error o de una preocupación. Una revisión sin culpas de un incidente es un ejemplo práctico. Sin ella, los recuentos de incidentes bajan por la razón equivocada: la gente deja de reportar.

### Mantén honesto el sistema

**10. Haz una revisión de manipulación.** Una vez por trimestre, haz al equipo una pregunta sobre cada métrica reportada: "Si quisiéramos que este número luciera bien sin ayudar a nadie, ¿qué haríamos?". Anota las respuestas y comprueba después si la barrera de protección detectaría cada una. El ejercicio es barato, produce ideas útiles y mueve la conversación de la sospecha al diseño.

**11. Audita las definiciones frente a la realidad.** Toma una muestra pequeña de elementos cerrados y léelos. ¿Se resolvieron de verdad? ¿Era honesta la prioridad? ¿El estado "en espera del cliente" significaba que se esperaba al cliente? Una muestra de quince minutos suele decir más que un mes de paneles.

**12. Retira métricas.** Una métrica que no se ha citado en una decisión durante dos trimestres es un gasto superfluo. Retírala y dilo. Pocas métricas, cada una de confianza, valen más que muchas.

## Vectores de manipulación y barreras de protección

La tabla cubre las métricas de la sección anterior. Los temas posteriores aplican la misma forma a las medidas de servicio y de entrega.

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura de barreras de protección | Nombrar una barrera de protección sobre el papel sin darle nunca seguimiento | Revisar el registro: una barrera de protección solo cuenta si su último valor aparece en el mismo panel |
| Tasa de reaperturas | Cerrar el ticket y abrir uno nuevo en lugar de reabrir; alargar la ventana hasta que las reaperturas queden fuera de ella | Tasa de tickets duplicados y vinculados; recurrencia de la misma causa entre tickets |
| Recuento de cambios de definición | No registrar los cambios para que el recuento se mantenga bajo; cambiar un flujo de trabajo sin avisar a nadie | Comparar el modelo de estados de la herramienta con el registro en cada revisión |
| Tasa de uso de métricas | Citar todas las métricas en un registro de decisiones como mera formalidad | Preguntar qué cambió gracias a la cita; muestrear el registro |
| Brecha de percepción | Encuestar solo a usuarios satisfechos; dirigir las encuestas a momentos posteriores a una buena interacción | Tasa de respuesta de la encuesta y composición de los encuestados; comentarios abiertos leídos en voz alta en una revisión |

Una lectura sana es una práctica de métricas que cambia: las definiciones se ajustan por razones que están escritas, las métricas vienen y van, y el equipo puede contar una historia sobre una decisión que un número cambió.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Medir sin objetivos | Reduce la manipulación; invita a una discusión honesta | Puede derivar en informes sobre los que nadie actúa |
| Objetivos con barreras de protección | Da dirección y urgencia; el par limita la manipulación | Más trabajo de mantenimiento; con el tiempo también se manipula la barrera de protección |
| Métricas individuales | Fáciles de entender; parecen justas | Corrompen los datos; dañan la colaboración |
| Métricas de equipo y de servicio | Corresponden a cómo ocurre realmente el trabajo | Más difíciles de atribuir; ocultan necesidades de apoyo individuales |
| Pocas métricas | Más fáciles de confiar y de recordar | Puntos ciegos; pueden pasar por alto un problema nuevo |
| Muchas métricas | Amplia cobertura | Diluyen la atención; cada métrica está débilmente gobernada |

La respuesta en prosa es usar los objetivos con moderación, para condiciones bien comprendidas y difíciles de manipular, como un objetivo de nivel de servicio que los usuarios han pedido. Aun así, es preferible vincular el objetivo al servicio y no a la evaluación de una persona. La meta no es quitar los números de la toma de decisiones. Es mantener los números conectados con la realidad manteniendo de tu lado a las personas que los producen.

## Preguntas para conversar con tu equipo

**1. ¿Qué número de nuestro panel actual sentiríamos más tentación de mejorar sin mejorar el trabajo?**
Empieza por la métrica que la gente mira primero y pasa después a la que pregunta la dirección. Pide movimientos concretos: ¿qué haríamos con los datos si estuviéramos bajo presión? El facilitador debe anotar cada respuesta sin juzgarla, porque la lista se convierte en los vectores de manipulación del registro. Termina preguntando cuáles de esos movimientos detectarían nuestras barreras de protección y cuáles se les escaparían.

**2. ¿Dónde empieza y se detiene el reloj en nuestra medida de tiempo más importante, y quién lo decidió?**
Pide al grupo que dibuje en una pizarra el ciclo de vida del ticket o del elemento de trabajo y marque cada estado. Busca estados en los que el tiempo puede desaparecer, como la espera de un cliente o la suspensión. Cuenta con qué frecuencia se usa cada estado y quién lo usa. La conversación suele revelar que dos equipos usan la misma palabra de forma distinta.

**3. ¿Cuándo fue la última vez que un número nos hizo hacer algo poco útil?**
Invita a contar historias, no a culpar. Ejemplos habituales son cerrar tickets antes de verificarlos, dividir cambios para elevar los recuentos de despliegues o reclasificar un incidente para evitar un informe de incumplimiento. El facilitador debe preguntar qué intentaba proteger la persona. La respuesta suele mostrar el incentivo que hay que cambiar.

**4. ¿Quién ve nuestras métricas y qué ocurre con ellas allí?**
Rastrea cada métrica desde el equipo hasta su audiencia. Pregunta si alguna versión se usa para comparar equipos o personas. Pregunta qué mostraría el equipo si la audiencia fuera otra. Donde el equipo cambiaría los números que muestra, hay una brecha de confianza de la que hablar con la audiencia.

**5. ¿Cuál es la barrera de protección de cada una de nuestras cinco métricas más importantes, y está en la misma página?**
Haz una lista de dos columnas en una pizarra. Si una métrica no tiene barrera de protección, acordad una candidata y un responsable que la pruebe durante un trimestre. Si existe una barrera de protección pero rara vez se consulta, discutid por qué. Evita elegir una barrera de protección que sea meramente la inversa de la métrica, porque no aporta nada nuevo.

**6. ¿Qué métrica deberíamos retirar este trimestre?**
Pide pruebas: ¿cuándo se usó por última vez en una decisión? Si nadie lo recuerda, retírala durante un período de prueba y comprueba si alguien lo nota. El facilitador debe tratar la retirada como un hecho normal. Los equipos que nunca descartan métricas acaban con informes en los que nadie confía ni que nadie lee.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega encuentran la manipulación a través de la velocidad, el rendimiento y los recuentos de despliegues. La [velocidad](https://en.wikipedia.org/wiki/Velocity_(software_development)) (velocity) en particular es una herramienta de planificación para un equipo, no una medida de productividad, y comparar equipos con ella conduce a estimaciones infladas. Los equipos de entrega deben guardar para sí sus medidas de trabajo, publicar hacia fuera un conjunto pequeño y emparejar cada medida de velocidad con una medida de calidad (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

### Equipos de servicio y operaciones

Los equipos de servicio encuentran la manipulación a través del tiempo de resolución, la resolución en el primer contacto y el cumplimiento de los niveles de servicio. Los estados que detienen el reloj y los campos de prioridad son los puntos habituales de deriva. Los equipos de operaciones deben auditar con regularidad las transiciones de estado, reportar el uso de los estados de pausa y vigilar los contactos repetidos y la tasa de reaperturas junto a la velocidad. Los equipos de guardia deben ser especialmente cuidadosos con las medidas que premian no recibir avisos, ya que penalizan las alertas honestas (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

### Liderazgo y gobernanza

Los líderes fijan los incentivos, a menudo sin pretenderlo. Una pregunta hecha en una revisión ("¿por qué esto está en rojo?") enseña al equipo qué esconder. Los líderes deben preguntar qué aprendió el equipo de un número, mantener las tablas de posiciones fuera de la sala, proteger el informe franco y financiar el trabajo de mejora que revela un mal número. Los órganos de gobernanza deben esperar el registro de métricas y la revisión de manipulación como parte de los informes, y tratar un cambio definido en una métrica como algo normal.

### Clientes y usuarios

Los usuarios experimentan el efecto de la manipulación como un servicio que luce bien en el papel y se siente deficiente en la práctica: un ticket cerrado que no se arregló, una caída etiquetada como planificada, una encuesta que nunca les llegó. Los usuarios son también la mejor barrera de protección. Sus comentarios, en forma de encuestas, quejas y observaciones, deben situarse junto a los números operativos y leerse por completo, no reducirse a una puntuación (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional dirige un centro de servicios y varios equipos de producto que construyen aplicaciones clínicas. Los números de este ejemplo son ilustrativos.

La dirección fija el objetivo de cerrar el 90 por ciento de los incidentes dentro del plazo acordado. En dos meses el panel muestra un 94 por ciento. La jefa de operaciones de servicio está satisfecha pero inquieta, porque el personal clínico se queja más, no menos. Pide al equipo que haga una revisión de manipulación de la métrica.

El equipo esboza el ciclo de vida del ticket. Descubre que los tickets pasan a "en espera del cliente" una media de dos veces cada uno, y que el tiempo en ese estado ha crecido. Una muestra de 30 tickets cerrados muestra que 7 se cerraron con la nota "sin respuesta del usuario" tras un solo intento de llamada. También descubre que la tasa de reaperturas es plana solo porque se decía a los usuarios que "abrieran un ticket nuevo" cuando el problema volvía.

El equipo hace tres cambios. Primero, el gráfico de tiempo de resolución muestra ahora la mediana, el percentil 90 y el ticket abierto más antiguo, junto con la proporción de tiempo pasada en estados de pausa. Segundo, el panel añade una tasa de contactos repetidos, definida como la proporción de tickets nuevos del mismo usuario sobre el mismo servicio en 14 días. Tercero, una breve encuesta llega a una muestra aleatoria de tickets cerrados, y sus comentarios abiertos se leen en la revisión mensual.

Tres meses después la cifra principal de cumplimiento baja al 88 por ciento, lo que parece una mala noticia. Sin embargo, la tasa de contactos repetidos ha caído y los comentarios de la encuesta sobre problemas sin resolver son menos frecuentes. La jefa de operaciones dice a la dirección que el número antiguo estaba inflado y que el nuevo cuadro es más honesto, y les pide que acepten un objetivo de nivel de servicio basado en la definición corregida. La decisión, registrada en el registro de decisiones, es fijar el objetivo tras un trimestre más de datos en lugar de hacerlo de inmediato.

## Perspectiva por sector

**Empresa emergente.** Los equipos pequeños tienen pocas métricas y mucha confianza, lo cual ayuda. El peligro es importar demasiado pronto un gran panel empresarial. Empieza con dos o tres medidas que los fundadores usen de verdad, escribe sus definiciones y mantenlas lejos de las conversaciones sobre el desempeño individual.

**Pequeña empresa.** Los recursos son escasos y la persona que dirige TI suele responder directamente ante el propietario. Una sola queja de un cliente puede pesar más que cualquier panel. Mantén el conjunto pequeño, prefiere la opinión directa de los usuarios y trata con cierta cautela los informes suministrados por proveedores, ya que el proveedor tiene sus propios incentivos.

**Gran empresa.** La escala multiplica tanto la demanda de números comparables como la presión para manipularlos. Usa un conjunto estándar pequeño con definiciones escritas, mantén las vistas de trabajo de los equipos separadas de las consolidaciones y evita comparar equipos que trabajan en servicios de tipos distintos. Un registro de métricas y una cadencia de revisión se vuelven esenciales.

**Gobierno y sector público.** Las obligaciones de información y los niveles de servicio contractuales pueden hacer que algunos objetivos no sean negociables. Trátalos como entradas de diseño: cúmplelos, muestra la barrera de protección a su lado y reporta las definiciones usadas. La rendición pública de cuentas eleva el costo de ocultar las malas noticias, así que crea canales internos seguros y sé abierto sobre las definiciones corregidas (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de aplicar este tema es sobre todo tiempo: unas horas para escribir definiciones y un registro, una breve revisión trimestral de manipulación y un muestreo ocasional de elementos cerrados. Hay poco costo de herramientas. El costo mayor es la atención de la dirección, porque la disciplina solo funciona si quienes leen los números se comportan de manera coherente.

El retorno procede del desperdicio evitado y de mejores decisiones. Las decisiones tomadas con datos corrompidos pueden dirigir la inversión al problema equivocado, como dotar de personal un centro de servicios para cerrar tickets más deprisa cuando el verdadero problema son los contactos repetidos por un defecto. La manipulación también erosiona la confianza entre el equipo y las personas que dependen de él, lo cual es difícil de reparar. Describe el beneficio como un patrón, no con un porcentaje inventado: menos reversiones de decisiones, menos sorpresas en las auditorías y mejor concordancia entre los números operativos y la experiencia del usuario. Si necesitas cifras para un caso de negocio, mide tus propias líneas base, como la brecha de percepción y la tasa de contactos repetidos, antes y después del cambio.

## Antipatrones y trampas

- **Objetivos sin barreras de protección.** Un objetivo solitario se cumple por cualquier vía disponible. Añade una medida emparejada antes de anunciar el objetivo.
- **Tablas de posiciones de personas o equipos.** Invitan a la manipulación y desalientan la ayuda entre equipos. Muestra a cada equipo su propia tendencia, con contexto.
- **Métricas como castigo.** Un número rojo que trae culpa se pondrá en verde por ocultación. Pregunta en cambio qué necesita el equipo.
- **Promedios de datos asimétricos.** Ocultan la cola donde sufren los usuarios. Usa percentiles y la antigüedad del elemento más antiguo.
- **Cambiar las definiciones en silencio.** Las líneas de tendencia pierden sentido. Registra cada cambio con su motivo y márcalo en el gráfico.
- **Tratar la barrera de protección como el nuevo objetivo.** Entonces se manipula la barrera de protección. Revisa ambas juntas y rota las barreras de protección cuando pierdan fuerza.
- **Métricas de vanidad.** Los recuentos que solo suben, como tickets atendidos o commits realizados, no dicen nada de los resultados. Prefiere medidas que puedan bajar además de subir.
- **Ignorar la evidencia cualitativa.** Los números por sí solos no pueden mostrar que un ticket cerrado se sintió sin resolver. Lee los comentarios.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Informales; cada persona cuenta de forma distinta | Escritas para algunas métricas | Una definición escrita por métrica, con relojes y exclusiones | Definiciones revisadas y cambios registrados con sus motivos | Definiciones alineadas entre equipos y proveedores, revisadas cuando dejan de informar decisiones |
| Barreras de protección | Ninguna | Nombradas para algunas métricas | Cada métrica reportada tiene una barrera de protección en la misma página | Barreras de protección revisadas cada trimestre en busca de manipulación | Las barreras de protección rotan y se codiseñan con las personas medidas |
| Uso y seguridad | Números usados para repartir culpas | El equipo ve sus propios números | El equipo ve los datos primero; sin clasificaciones individuales | La dirección hace preguntas de aprendizaje; el informe es seguro | Clientes y proveedores comparten una visión franca de los números |

## Lista de verificación

- [ ] Cada métrica reportada tiene una pregunta escrita y una decisión a la que informa.
- [ ] Cada medida de tiempo tiene una regla escrita de inicio, parada y pausa.
- [ ] Cada métrica reportada tiene una barrera de protección con nombre mostrada a su lado.
- [ ] Las medidas de tiempo muestran percentiles y la antigüedad del elemento abierto más antiguo.
- [ ] Existe un registro de métricas con responsable, definición, vector de manipulación, barrera de protección y fecha de revisión.
- [ ] El equipo ve sus datos antes que la dirección.
- [ ] Ninguna clasificación individual, pago o medida disciplinaria está vinculada a una métrica.
- [ ] Hay una revisión trimestral de manipulación en el calendario.
- [ ] Cada trimestre se lee una muestra de elementos cerrados para comprobar su honestidad.
- [ ] Al menos una métrica se ha retirado o rediseñado en el último año.

## Prompts de IA

**Haz una revisión de manipulación de una métrica.**

```text
Dirijo [nombre del equipo], que se encarga de [tipo de servicio o trabajo de
entrega]. Reportamos esta métrica: [nombre de la métrica], definida como
[definición, incluyendo dónde empieza y se detiene el reloj]. La usa [audiencia]
para [decisión u objetivo]. Nuestros datos proceden de [herramienta].

Enumera las formas realistas en que esta métrica podría lucir mejor sin mejorar
el servicio para los usuarios. Para cada una, sugiere una métrica o práctica de
barrera de protección que la revelaría y di cuál sería el vector de manipulación
de la propia barrera de protección. No inventes valores de referencia. Enumera
tus supuestos y todo lo que no hayas podido determinar a partir de lo que te he
dado.
```

**Redacta una entrada del registro de métricas.**

```text
Redacta una entrada del registro de métricas para [nombre de la métrica] de
[nombre del equipo]. Campos: pregunta a la que responde, decisión que informa,
definición, fórmula, unidad, fuente de datos, rol responsable, cadencia de
revisión, vector de manipulación, barrera de protección y cómo notarían los
usuarios o clientes que estuviera equivocada. Basa la entrada solo en esta
descripción: [describe la métrica y el proceso actual]. Marca cada campo que
hayas tenido que suponer y enumera las preguntas que debería responder para
completar la entrada.
```

**Audita una muestra de tickets cerrados.**

```text
Aquí hay [número] tickets cerrados de [servicio], con los campos [lista de
campos] y las notas de resolución pegadas más abajo. Revisa cada uno en busca de
señales de que el ticket se cerró sin resolver el problema, de que se usó un
estado de pausa para detener el reloj o de que la prioridad o la categoría
parecen ajustadas. Informa de patrones, no de personas. No conjetures causas que
el texto no respalde. Dime qué no pudiste juzgar con los datos y qué campos
adicionales ayudarían.

[pega los tickets, sin datos personales]
```

**Planifica cómo introducir una métrica con seguridad.**

```text
Planeamos introducir [métrica] ante [audiencia]. Contexto actual: [tamaño del
equipo, cultura, experiencia previa con métricas]. Propón un plan de
implantación que cubra quién ve primero los datos, cómo explicamos el propósito,
para qué no los usaremos, qué barrera de protección mostramos con ella y cuándo
revisamos si funciona. Señala los riesgos de manipulación o de miedo y sugiere
cómo reducirlos. Enumera tus supuestos y no inventes estadísticas.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema y la barrera de protección emparejada de una métrica que estás a punto de introducir.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema de métricas nuevo lleva su vector de manipulación y su barrera de protección.

## Puntos clave

- Una medida que se convierte en objetivo deja de describir el trabajo, así que usa los números para hacer preguntas.
- La manipulación es una respuesta normal a la presión y al miedo, y se reduce cambiando las condiciones, no vigilando.
- Cada métrica necesita una definición escrita con sus relojes y una barrera de protección mostrada a su lado.
- Prefiere los percentiles y la antigüedad del elemento más antiguo a los promedios.
- Describe equipos y servicios, nunca clasifiques personas, y deja que el equipo vea primero sus datos.
- Revisa la manipulación cada trimestre y retira las métricas que ya no informan decisiones.

## Referencias y lecturas complementarias

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
