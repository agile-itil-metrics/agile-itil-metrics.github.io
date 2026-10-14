# Realización de valor y resultados de negocio

**Entregar un cambio no es lo mismo que la organización se beneficie de él, así que declara el beneficio esperado antes de construir, compruébalo tras la versión con las personas que debían ganar con él y sé honesto sobre cuánto de cualquier mejora puedes atribuir a tu trabajo.**

## Resumen y motivación

Las formas de trabajo ágiles ponen primero el software que funciona y mantienen a las partes interesadas colaborando durante todo el proceso, para que lo que se entrega sea lo que la gente necesita. La gestión de servicios de TI (ITSM), tal como la codifica ITIL, enmarca la misma preocupación como valor: un servicio es valioso cuando ayuda a los clientes a lograr los resultados que quieren, con costos y riesgos que aceptan. Ambas tradiciones se encuentran en una pregunta incómoda. Dentro de un año, ¿están las personas y la organización mejor gracias a lo que este equipo construyó y operó?

Responderla es más difícil que contar lo que se entregó. Se entregan funcionalidades y nadie las usa. Los incidentes bajan por razones ajenas al trabajo del equipo. Un ahorro de costos aparece en una diapositiva, y el presupuesto de donde salió se gasta en otra parte. Este tema trata de cerrar esa brecha, y se vincula directamente con el enfoque en los resultados presentado al principio del libro (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

Cuatro ideas organizan el tema.

- **Beneficio.** Un beneficio es una mejora medible que valora una parte interesada, como menos tiempo dedicado a una tarea, menos errores, más clientes atendidos o menor riesgo. Una funcionalidad no es un beneficio. Es un medio. La [gestión de la realización de beneficios](https://en.wikipedia.org/wiki/Benefits_realisation_management) es la disciplina de identificar beneficios, asignar responsables y comprobar que llegan.
- **Hipótesis de valor.** Antes de construir, el equipo escribe qué espera que cambie, para quién, en cuánto y cómo lo sabrá. Es una afirmación comprobable, y puede ser errónea. Una [teoría del cambio](https://en.wikipedia.org/wiki/Theory_of_change) o un [modelo lógico](https://en.wikipedia.org/wiki/Logic_model) expone la cadena desde las actividades hasta las salidas y los resultados, lo que ayuda a hacer explícita la hipótesis.
- **Indicadores adelantados y rezagados.** Un [indicador adelantado](https://en.wikipedia.org/wiki/Leading_indicator) se mueve pronto y predice un resultado, como la adopción de un proceso nuevo. Un [indicador rezagado](https://en.wikipedia.org/wiki/Lagging_indicator) confirma el resultado a posteriori, como la reducción del costo por transacción. Usa ambos: los indicadores adelantados te permiten corregir el rumbo, y los rezagados te dicen si funcionó.
- **Atribución.** Muchas cosas cambian a la vez. Para decir que tu trabajo causó una mejora necesitas una comparación: una línea base, un grupo de comparación o un diseño de antes y después que tenga en cuenta otros cambios. Sin uno, las afirmaciones de valor son cuentos. La posición honesta suele ser "asociado con" y no "causado por".

Los marcos de metas como los [objetivos y resultados clave](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKR) pueden conectar el trabajo del equipo con los resultados de negocio, y el tema anterior sobre marcos de medición los cubre en detalle (véase el tema 1.7, Marcos de medición). El riesgo de todo marco es el que nombra la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): una vez que un número de beneficio se convierte en una meta, la gente encuentra formas de producir el número sin el beneficio (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

El tema también tiende un puente hacia el dinero. El tema de la parte siguiente sobre retorno de la inversión y caso de negocio adopta en profundidad la visión financiera (véase el tema 7.7, Retorno de la inversión y caso de negocio). Aquí el foco está en la evidencia de los resultados, que alimenta ese caso.

## Principios clave

- **Escribe el beneficio esperado antes de construir.** Una afirmación que no se puede comprobar después no se puede aprender de ella.
- **Nombra un responsable para cada beneficio.** El responsable es una parte interesada que verá el cambio, no el equipo de entrega.
- **Mide en los usuarios, tras la versión.** La entrega es el inicio de la comprobación, no el final.
- **Usa indicadores adelantados para orientarte y rezagados para confirmar.**
- **Sé honesto sobre la atribución.** Di qué más cambió y evita afirmaciones que la evidencia no pueda respaldar.
- **Cuenta los beneficios que no llegaron.** Aprender de una hipótesis fallida es un beneficio de trabajar así.
- **Sigue colaborando.** Las partes interesadas y el equipo revisan la evidencia juntos, con regularidad.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de realización de beneficios | Proporción de beneficios esperados que se observaron en la fecha de revisión acordada | beneficios con resultado medido igual o superior al umbral acordado / beneficios esperados con una fecha de revisión en el periodo | porcentaje | Registro de beneficios con responsables, líneas base y fechas de revisión | Mejora continua; gobernanza del sistema de valor del servicio | Revisión de resultados con las partes interesadas | Trimestral |
| Tiempo hasta el primer valor | Tiempo desde el inicio del trabajo hasta el primer beneficio medible para los usuarios | días desde que se empezó el primer trabajo hasta la primera fecha en que el indicador de beneficio se movió como se esperaba | días | Gestor de trabajo e indicador de beneficio | Diseño del servicio; gestión de versiones y despliegues | Entrega continua de valor | Por iniciativa |
| Tasa de comprobación de hipótesis | Proporción de cambios liberados cuya hipótesis de valor declarada se comprobó tras la versión | cambios con una comprobación posterior a la versión registrada / cambios liberados que llevaban una hipótesis | porcentaje | Registro de hipótesis vinculado a los registros de versiones | Mejora continua; habilitación de cambios | Aprendizaje del trabajo liberado | Mensual |
| Proporción de calidad de la evidencia | Proporción de beneficios reclamados que tienen una línea base y un método de comparación declarado | afirmaciones de beneficio con línea base y método / afirmaciones de beneficio informadas | porcentaje | Revisión del registro de beneficios | Medición e informes | Informe honesto de los resultados | Trimestral |
| Movimiento del indicador de resultado | Cambio en un indicador de resultado elegido comparado con su línea base y con una comparación donde esté disponible | (indicador después menos indicador antes) con el cambio del grupo de comparación informado al lado | unidades del indicador | Analítica de producto, datos del servicio, finanzas | Gestión de niveles de servicio; mejora continua | Progreso de los resultados clave | Mensual |
| Horas de impacto en el negocio | Horas en que un proceso de negocio estuvo degradado o detenido por problemas del servicio | horas de proceso degradado o detenido atribuidas por los responsables del proceso a causas del servicio de TI | horas | Registros de incidentes unidos a la confirmación del responsable del proceso | Gestión de incidentes; gestión de la disponibilidad | Revisión del impacto en el negocio | Mensual |
| Proporción de capacidad vinculada a resultados | Proporción de la capacidad del equipo dedicada a trabajo vinculado a un resultado declarado | capacidad en elementos vinculados a un resultado registrado / capacidad total | porcentaje | Gestor de trabajo con un campo de resultado | Sistema de valor del servicio; gobernanza del portafolio | Trabajo alineado con el objetivo del producto | Trimestral |

Define la fecha de revisión y el umbral de cada beneficio cuando se registra, no después. El tiempo hasta el primer valor arranca cuando empieza el trabajo y se detiene cuando el indicador se mueve por primera vez en la dirección esperada en una cantidad indicada, lo que puede ocurrir mucho después de la versión. La atribución de las horas de impacto en el negocio se acuerda con el responsable del proceso, y las disputas se registran.

## Recomendaciones

### Antes de construir: haz comprobable la afirmación

**1. Escribe una hipótesis de valor para cada cambio significativo.** Usa una forma sencilla: "Creemos que [cambio] ayudará a [quién] a [hacer qué] para que [mejora medible]. Lo sabremos porque [indicador] pasará de [línea base] a [esperado], revisado el [fecha]." Mantenla lo bastante corta para que quepa en una tarjeta del tablero. Los equipos que no pueden rellenar los huecos a menudo aún no han entendido el problema.

**2. Registra una línea base.** Sin un antes, no hay después. Captura el valor actual del indicador, cómo se midió y cuánto varía. Si el indicador es ruidoso, un solo número engaña, así que registra un rango durante varias semanas (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**3. Elige indicadores adelantados y rezagados.** Para una nueva solicitud de autoservicio, un indicador adelantado es cuántos usuarios elegibles la completan, y uno rezagado es la caída de las horas de gestión manual (véase el tema 6.3, Métricas de adopción y catálogo de servicios). Acordad qué indicador se comprueba y cuándo. Los indicadores adelantados permiten una corrección a mitad de camino sin esperar a que termine el trimestre.

**4. Nombra un responsable del beneficio ajeno al equipo de entrega.** El responsable es la parte interesada que verá la mejora en su ámbito y que puede juzgarla. El equipo de entrega apoya la medición pero no corrige sus propios deberes. Esto es colaboración continua en la práctica: la persona que quería el resultado sigue implicada hasta que se confirma.

### Tras la versión: compruébalo con honestidad

**5. Revisa la hipótesis en la fecha acordada.** Celebra una breve revisión con el responsable y el equipo. Mira el indicador, la línea base y la comparación. Registra el resultado en el registro: cumplido, parcialmente cumplido, no cumplido o no se puede saber. "No se puede saber" es un resultado legítimo y un pretexto para mejorar la medición.

**6. Usa una comparación donde puedas.** La comparación más sólida es un experimento controlado. Las [pruebas A/B](https://en.wikipedia.org/wiki/A/B_testing) comparan dos versiones con usuarios asignados al azar, y funcionan bien para servicios digitales con suficiente tráfico. Donde no sea posible aleatorizar, un despliegue escalonado permite comparar grupos que han recibido el cambio y grupos que no. Un enfoque de [diferencias en diferencias](https://en.wikipedia.org/wiki/Difference_in_differences) compara el cambio de un grupo tratado con el cambio de un grupo no tratado durante el mismo periodo, lo que elimina las tendencias compartidas. Usa el diseño más sencillo que encaje.

**7. Busca factores de confusión.** Un factor de [confusión](https://en.wikipedia.org/wiki/Confounding) es algo más que cambió y podría explicar el resultado: un patrón estacional, una política nueva, una mezcla distinta de solicitudes. Enumera los plausibles antes de reclamar un efecto. Si no puedes descartarlos, di lo que respalda la evidencia y nada más.

**8. Informa los resultados negativos y nulos.** Cuando un cambio no ayudó, dilo y registra lo aprendido. El [sesgo de supervivencia](https://en.wikipedia.org/wiki/Survivorship_bias), el hábito de mirar solo los éxitos, hace que los programas parezcan mejores de lo que son. Un registro que contiene solo victorias no se ha llevado con honestidad.

### Mantén honesto el programa

**9. Separa la calidad de la evidencia del beneficio.** Sigue la proporción de afirmaciones que tienen una línea base y un método declarado. Una afirmación grande con evidencia débil debe leerse como tal. Un registro sano muestra afirmaciones modestas con evidencia sólida y unas pocas entradas honestas de "no se puede saber".

**10. Vincula la capacidad con los resultados, con holgura.** Pregunta qué proporción del trabajo del equipo está atada a un resultado declarado, y mira el resto. Algún trabajo, como las correcciones de seguridad o mantener las luces encendidas, no tiene un beneficio nuevo, y eso está bien si se nombra. El objetivo es notar la deriva, no forzar cada tarea a una historia de beneficios.

**11. Conecta con el marco de metas que uses.** Si usas OKR, haz que los resultados clave sean los indicadores de resultado y revísalos con las partes interesadas. Mantén los resultados clave sobre resultados, no sobre tareas, y deja espacio para metas ambiciosas que quizá no se cumplan del todo. No conviertas los resultados clave en metas individuales (véase el tema 1.7, Marcos de medición).

**12. Revisa el portafolio además del proyecto.** Una vez por trimestre, mira entre las iniciativas qué beneficios llegaron, cuáles no y qué dice el patrón sobre cómo estima y selecciona trabajo el equipo. Úsalo para mejorar la forma de escribir las hipótesis, no para clasificar equipos.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de realización de beneficios | Fijar umbrales bajos; mover la fecha de revisión; redefinir el beneficio a posteriori | Umbral y fecha fijados en la aprobación; proporción de calidad de la evidencia; responsable ajeno al equipo de entrega |
| Tiempo hasta el primer valor | Elegir un indicador temprano que se mueve por la razón equivocada; arrancar el reloj tarde | Indicador y reloj definidos en el registro; confirmar con el responsable del beneficio |
| Tasa de comprobación de hipótesis | Escribir hipótesis vagas que siempre pasan; comprobar solo los cambios exitosos | Muestrear las hipótesis en busca de comprobabilidad; incluir los resultados nulos y fallidos en la revisión |
| Proporción de calidad de la evidencia | Rellenar líneas base a posteriori; describir cualquier comparación como un método | Línea base fechada antes del cambio; revisión por alguien ajeno al equipo |
| Movimiento del indicador de resultado | Escoger un periodo o un grupo favorable; ignorar los factores de confusión | Periodo y grupo preestablecidos; lista de factores de confusión considerados |
| Horas de impacto en el negocio | Los responsables del proceso inflan o reducen las atribuciones; incidentes reclasificados para evitar la atribución | Reglas de atribución escritas y registradas; comparar con los registros de incidentes y de disponibilidad |
| Proporción de capacidad vinculada a resultados | Etiquetar todo el trabajo con un resultado genérico; inventar resultados para el trabajo rutinario | Lista de resultados revisada con las partes interesadas; muestrear elementos en busca de calidad del vínculo |

Una lectura sana es un registro en el que algunos beneficios se cumplen, otros no, unos pocos no están claros y cada entrada tiene una línea base, un responsable y un método declarado. Un registro de éxito uniforme debe tratarse con sospecha.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Registro formal de beneficios | Rendición de cuentas, aprendizaje entre iniciativas | Burocracia si se aplica a cada cambio pequeño |
| Hipótesis ligera en cada tarjeta | Barata, crea el hábito | Fácil de escribir con vaguedad |
| Experimento controlado | Evidencia sólida de causa | Necesita tráfico, tiempo y un diseño que encaje con el servicio |
| Solo antes y después | Sencillo, rápido | Confundido por otros cambios |
| Juicio de las partes interesadas | Capta el valor que las métricas pasan por alto | Sujeto al optimismo y a la política |
| Indicadores adelantados | Corrección temprana del rumbo | Pueden no predecir el resultado real |
| Indicadores rezagados | Confirman resultados reales | Llegan tarde; muchas causas |

La respuesta en prosa es ajustar el peso de la evidencia al tamaño y al riesgo del cambio. Usa una hipótesis ligera y un sencillo antes y después para los cambios pequeños, y un experimento o un despliegue escalonado para los grandes. Registra siempre lo que esperabas, lo que ocurrió y cuán seguro estás.

## Preguntas para conversar con tu equipo

**1. ¿Qué entregamos el último trimestre, y qué cambió para las personas a quienes iba dirigido?**
Enumera los cambios principales y, para cada uno, nombra a la persona que notaría una diferencia. Pregunta qué diría. El facilitador debe anotar los cambios para los que nadie sabe responder, ya que son candidatos a una comprobación posterior a la versión. Acordad un cambio que revisar con su responsable en el plazo de un mes.

**2. Para nuestro próximo cambio significativo, ¿cuál es la hipótesis de valor y cómo lo sabremos?**
Rellenad juntos el formulario de la hipótesis. Cuestiona las palabras vagas y las líneas base que faltan. Pregunta qué resultado haría que el equipo cambiara sus planes. Si el grupo no logra ponerse de acuerdo en una medida, eso es una tarea de descubrimiento antes de construir.

**3. ¿Quién es el responsable del beneficio, y está en la sala?**
Comprueba que cada beneficio tiene un responsable ajeno al equipo de entrega. Pregunta con qué frecuencia ve la evidencia el responsable. Donde el responsable sea el propio equipo, discutid quién más debería compartir el juicio. La conversación respalda la colaboración continua entre las partes interesadas.

**4. ¿Qué más cambió cuando mejoraron los números?**
Toma una mejora reclamada reciente y enumera otros cambios en el mismo periodo: política, estacionalidad, dotación, la versión de otro equipo. Pregunta cuáles podrían explicar el resultado. Decidid si describir la mejora como causada por el cambio, asociada con él o poco clara.

**5. ¿Cuáles de nuestras hipótesis pasadas resultaron erróneas, y qué hicimos al respecto?**
Pide la historia de una expectativa fallida. Si no llega ninguna con rapidez, el equipo puede no estar comprobando, o puede no estar hablando de ello. Discutid cómo hacer que informar un resultado nulo sea seguro y útil.

**6. ¿Qué proporción de nuestra capacidad está atada a un resultado, y nos parece correcto?**
Revisa un mes de trabajo terminado y etiqueta cada elemento con un resultado o con "mantener el servicio en marcha". Pregunta si la división coincide con lo que creen los líderes. Discutid el trabajo sin resultado y si debería continuar.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen la hipótesis y el plan de medición, y deben entregar los cambios en pasos pequeños para que la evidencia llegue pronto. Deben incorporar el indicador al cambio, por ejemplo registrando los eventos que necesitan, y pedir al responsable del beneficio que confirme lo que ve. Los equipos deben acoger las hipótesis fallidas como información, ya que aprender pronto ahorra el costo de construir más de lo equivocado.

### Equipos de servicio y operaciones

Los equipos de operaciones ven el efecto real de los cambios en los incidentes, las solicitudes y la capacidad. Tienen buena parte de los datos de los indicadores rezagados, como las horas de gestión manual y los contactos repetidos, y deben ayudar a comprobar las hipótesis además de absorber el cambio. Deben alzar la voz cuando los beneficios reclamados en papel no coincidan con lo que ve el centro de servicios.

### Liderazgo y gobernanza

Los líderes eligen si los beneficios son una herramienta de aprendizaje o un argumento de venta. Deben pedir líneas base y métodos, acoger los resultados honestos de "no cumplido" y evitar exigir a los equipos números de beneficio fijados antes de conocer los hechos. La gobernanza debe revisar el registro como un portafolio, financiar la medición y estar dispuesta a detener el trabajo cuya hipótesis haya fallado.

### Clientes y usuarios

Los usuarios saben si un cambio ayudó, y son los mejores jueces de la mayoría de los beneficios. Debe preguntárseles, mostrarles los resultados y decirles cuando un cambio no entregó lo que se esperaba. Sus comentarios son evidencia por derecho propio. Un beneficio que muestran los números y que los usuarios no sienten merece una mirada más atenta.

## En la práctica: un ejemplo de ITIL ágil

El grupo de TI de una aseguradora de salud regional construye y opera un portal de reclamaciones para proveedores. Los números siguientes son ilustrativos.

El grupo planea añadir comprobaciones automáticas de elegibilidad al envío de reclamaciones. La hipótesis, escrita con el responsable de operaciones de reclamaciones, es: "Creemos que las comprobaciones automáticas de elegibilidad ayudarán al personal de facturación de los proveedores a enviar reclamaciones correctas a la primera, de modo que las reclamaciones devueltas para corrección bajen del 18 por ciento al 12 por ciento en tres meses. Lo sabremos por la tasa de reclamaciones devueltas, revisada el 1 de marzo." La línea base es la media de las últimas 12 semanas, 18 por ciento con un rango semanal de 15 a 21 por ciento. El indicador adelantado es el uso de la comprobación en el primer mes. El responsable de operaciones de reclamaciones es el responsable del beneficio.

El equipo libera en pasos pequeños, con la comprobación disponible primero en una región. Tras tres semanas, el uso de la comprobación es del 64 por ciento en esa región. En la fecha de revisión, las reclamaciones devueltas bajan al 13 por ciento en la región con la comprobación y al 17 por ciento en las regiones sin ella. El responsable de reclamaciones señala que en el periodo también entró en vigor un cambio de política sobre un código de facturación. El equipo lo enumera como factor de confusión y retira de ambos grupos las reclamaciones con ese código, lo que deja un 14 por ciento frente a un 17,5. La realización del beneficio se registra como "parcialmente cumplido": mejor que la línea base con un margen claro, por debajo de la meta del 12 por ciento. El equipo anota con honestidad en el registro que la evidencia proviene de un despliegue escalonado durante un trimestre, y que el efecto puede diferir para otros proveedores.

Luego despliegan la comprobación en todas las regiones, con un plan de volver a comprobar en tres meses, y añaden una tarea para mejorar el mensaje de error, ya que los comentarios de los proveedores dicen que el mensaje no es claro. El director financiero pide un solo número para la junta. El responsable de TI ofrece el rango y el método, y se niega a enunciar una cifra con más precisión de la que permite la evidencia. La decisión se registra, junto con la fecha de la próxima revisión.

## Perspectiva por sector

**Startup.** Los beneficios están cerca de los ingresos y la retención, y la velocidad de aprendizaje importa. Escribe hipótesis de una línea en tarjetas, compruébalas rápido y evita los registros pesados. Usa comparaciones sencillas, y acepta que las muestras pequeñas limitan lo que puedes afirmar.

**Pequeña empresa.** El dueño es el responsable del beneficio, y los efectos son visibles. Mantén una lista corta de cambios con efectos esperados y revísala cada trimestre. Evita inflar pequeñas ganancias hasta convertirlas en cifras grandes, y compara con el costo del cambio.

**Gran empresa.** Los portafolios, los ciclos de financiación y las muchas partes interesadas hacen útil un registro de beneficios. Mantenlo ligero para los cambios pequeños y riguroso para los grandes, pon responsables en las unidades de negocio y revisa entre el portafolio. Cuidado con los números que se consolidan con definiciones distintas.

**Gobierno y sector público.** Los resultados suelen ser bienes públicos, como el acceso, la equidad y la seguridad, que no se reducen a los ingresos. Define los resultados con las personas atendidas, usa evidencia mixta e informa los métodos abiertamente. Pueden exigirse casos de negocio formales y revisiones de beneficios, y los resultados nulos honestos importan para la rendición de cuentas pública (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es sobre todo atención. Escribir una hipótesis lleva minutos, una línea base lleva una hora o unas pocas, y una revisión lleva una reunión breve. Los experimentos y los despliegues escalonados necesitan esfuerzo de diseño y algo de herramientas. Un registro de beneficios puede ser una hoja de cálculo o un campo del gestor de trabajo.

El retorno son mejores decisiones de inversión. Un equipo que comprueba sus hipótesis deja de construir cosas que no ayudan, amplía las que sí y aprende cuán bien predice. Eso ahorra el costo de las funcionalidades sin uso y de los programas fallidos. Construye el caso con tus propios datos: la proporción de cambios que llevaban una hipótesis, la proporción que se comprobaron y el costo del trabajo abandonado o revertido más tarde. Evita las cifras publicadas sobre la tasa de fracaso de los proyectos de TI salvo que puedas rastrear su fuente y su método, ya que varían ampliamente y a menudo se citan sin contexto. El tratamiento financiero está en la parte siguiente (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar la entrega como valor.** Una funcionalidad entregada es un medio. Comprueba el efecto en las personas.
- **Hipótesis que no pueden fallar.** Hazlas específicas, con un número y una fecha.
- **Corregir tus propios deberes.** Haz que juzgue el resultado el responsable del beneficio ajeno al equipo.
- **Reclamar causa a partir de un antes y después.** Enumera los factores de confusión y usa una comparación donde sea posible.
- **Informar solo las victorias.** Registra los resultados nulos y negativos. Un registro de solo éxitos no es honesto.
- **Fijar metas de beneficio a individuos.** Las metas atadas a personas invitan a afirmaciones infladas. Mantén los beneficios a nivel de equipo y de iniciativa.
- **Exceso de precisión.** Informa rangos y el método, no un único número decimal.
- **Ignorar el trabajo que no tiene un beneficio nuevo.** Nómbralo, y no inventes una historia de beneficios para él.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Declarar el valor | Beneficios reclamados solo en los casos de negocio | Hipótesis escritas para algunos cambios | Una hipótesis breve, una línea base y un responsable para cada cambio significativo | Hipótesis y umbrales fijados en la aprobación; indicadores adelantados y rezagados definidos | Hipótesis compartidas entre equipos y proveedores; resultados definidos con los usuarios |
| Comprobar el valor | Sin comprobación posterior a la versión | Comprobación ocasional por el equipo de entrega | Revisión programada con un responsable independiente | Comparaciones y factores de confusión documentados; calidad de la evidencia con seguimiento | La evidencia a nivel de portafolio orienta la financiación; experimentos compartidos entre equipos |
| Aprendizaje | Se celebran las victorias, se olvidan los fracasos | Algunas lecciones registradas | Resultados nulos registrados y revisados | Los patrones en las hipótesis fallidas mejoran la selección y el dimensionamiento | El aprendizaje alimenta la planificación en toda la organización y con los socios |

## Lista de verificación

- [ ] Cada cambio significativo tiene una hipótesis de valor escrita con línea base, indicador y fecha de revisión.
- [ ] Cada beneficio tiene un responsable ajeno al equipo de entrega.
- [ ] Los indicadores adelantados y rezagados están definidos y con seguimiento.
- [ ] Las revisiones se realizan en la fecha acordada con el responsable.
- [ ] Se usan comparaciones o despliegues escalonados donde es factible.
- [ ] Los factores de confusión se enumeran para cada resultado reclamado.
- [ ] Los resultados nulos y negativos se registran y se comparten.
- [ ] La calidad de la evidencia se sigue junto a las afirmaciones de beneficio.
- [ ] Ningún individuo tiene una meta de beneficio personal.
- [ ] Una revisión trimestral del portafolio examina los patrones de hipótesis cumplidas y fallidas.

## Prompts de IA

**Escribe una hipótesis de valor.**

```text
Planeamos [describe change] para [users or stakeholders] en [type of
organization]. El problema actual: [describe]. Redacta una hipótesis de valor
con la forma "Creemos que [change] ayudará a [who] a [do what] para que
[measurable improvement]. Lo sabremos porque [indicator]..." Sugiere un
indicador adelantado y uno rezagado, qué línea base necesitamos y una lógica
para la fecha de revisión. No inventes valores meta; déjalos como marcadores
para nosotros. Enumera tus supuestos y lo que necesitamos averiguar.
```

**Enumera los factores de confusión de un resultado reclamado.**

```text
Afirmamos que [change] mejoró [indicator] de [before] a [after] entre [dates].
Otras cosas que ocurrieron en el periodo: [list]. Enumera los factores de
confusión plausibles, cómo podría cada uno explicar el resultado y qué datos o
comparación ayudarían a descartarlo. Sugiere una redacción que exprese lo que
respalda la evidencia. No supongas una causa que los datos no puedan respaldar.
Enumera tus supuestos.
```

**Diseña una comparación de despliegue escalonado.**

```text
Podemos liberar [change] a [number] grupos en momentos distintos: [describe
groups and constraints]. Propón un despliegue escalonado que nos permita
comparar grupos con y sin el cambio, di qué indicador y periodo usar, qué podría
sesgar la comparación y qué concluiríamos de distintos resultados. No inventes
tamaños de efecto. Enumera tus supuestos y riesgos.
```

**Revisa una entrada del registro de beneficios.**

```text
Revisa esta entrada del registro de beneficios de [initiative]: [paste entry
including claim, baseline, method, owner, and review date]. Señala la
información que falta, la redacción vaga, las afirmaciones que la evidencia no
respalda y las formas en que el resultado podría manipularse. Sugiere una
redacción más sólida que encaje con lo que realmente medimos. Enumera tus
supuestos y las preguntas para el responsable.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de valor o de resultado antes de informarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de beneficios lleva su vector de manipulación, su barrera de protección y su estándar de evidencia.

## Puntos clave

- Escribe una hipótesis de valor comprobable antes de construir, con una línea base, un responsable ajeno al equipo y una fecha de revisión.
- Usa indicadores adelantados para orientarte y rezagados para confirmar.
- Compara donde puedas, enumera los factores de confusión y afirma solo lo que respalda la evidencia.
- Registra los resultados nulos y negativos; un registro de éxito uniforme no es honesto.
- Sigue la calidad de la evidencia junto al tamaño de la afirmación.
- Mantén a las partes interesadas y a los usuarios colaborando hasta que se confirme el resultado.

## Referencias y lecturas complementarias

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
