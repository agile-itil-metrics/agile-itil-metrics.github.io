# Métricas de FinOps y costos en la nube

**El gasto en la nube lo deciden a diario los ingenieros, así que da a las personas que construyen y operan los servicios los datos de costos, el contexto y la autoridad para actuar sobre ellos, y mide el desperdicio, la asignación y el costo unitario con el mismo cuidado que dedicas a la fiabilidad.**

## Resumen y motivación

En un centro de datos, el gasto se decide mediante órdenes de compra y llega en unos pocos escalones grandes. En la nube, un desarrollador puede comprometer a la organización con un cargo recurrente con unas pocas líneas de configuración, y un entorno de prueba olvidado puede costar dinero durante meses. La [computación en la nube](https://en.wikipedia.org/wiki/Cloud_computing) ofrece acceso bajo demanda a recursos de cómputo, y el modelo de [pago por uso](https://en.wikipedia.org/wiki/Pay_as_you_go) que la acompaña significa que la factura sigue al uso. Eso es poderoso y arriesgado. La misma flexibilidad que permite a un equipo escalar en minutos permite que el costo crezca más deprisa de lo que nadie nota.

FinOps, contracción de finanzas y operaciones (finance y operations), es una práctica y una cultura para gestionar el costo de la nube. La FinOps Foundation la describe como un marco operativo en el que los equipos de ingeniería, finanzas, compras y negocio colaboran en decisiones de gasto basadas en datos. Su idea central es que las personas que usan recursos en la nube deben ver y poseer sus costos, mientras que finanzas aporta la estructura, los pronósticos y los compromisos. Esto coincide con los objetivos ágiles de colaboración continua entre las partes interesadas y de equipos que poseen sus servicios, y con la preocupación de ITIL por la gestión financiera del servicio. Este tema cubre las medidas que concretan esa práctica. Se apoya en las ideas generales de costeo del tema anterior (véase el tema 7.5, Costo del servicio y economía unitaria).

El costo en la nube tiene rasgos que necesitan sus propias medidas.

- **Elasticidad.** El [autoescalado](https://en.wikipedia.org/wiki/Autoscaling) ajusta los recursos a la demanda, lo que hace variable el costo y a veces sorprendente. La [computación sin servidor](https://en.wikipedia.org/wiki/Serverless_computing) cobra por ejecución y desplaza la atención de los servidores a las solicitudes.
- **Muchas decisiones pequeñas.** Cada elección de tamaño de instancia, nivel de almacenamiento, región y arquitectura cambia el costo. El gasto se reparte entre cientos de decisiones tomadas por muchas personas, y es difícil de ver sin etiquetas y buenos informes.
- **Modelos de precios.** Los precios bajo demanda son flexibles y los más altos. Los compromisos a cambio de un [descuento por volumen](https://en.wikipedia.org/wiki/Volume_discount), como la capacidad reservada o los planes de ahorro, reducen el precio unitario a cambio de una promesa de uso. La capacidad puntual (spot) o interrumpible es barata y puede ser reclamada. Cada modelo tiene un riesgo, y la mezcla adecuada depende de cuán predecible sea la carga de trabajo. Los términos exactos difieren entre proveedores y cambian a menudo, así que comprueba la documentación vigente del proveedor antes de apoyarte en cualquier detalle.
- **Costo compartido y sin etiquetar.** Los recursos sin una etiqueta de responsable o de propósito no pueden atribuirse. Las plataformas compartidas reparten el costo entre equipos que las consumen de forma distinta.
- **Costo ambiental.** Las cargas de trabajo en la nube consumen energía y causan emisiones, y la [huella de carbono](https://en.wikipedia.org/wiki/Carbon_footprint) de una carga de trabajo es cada vez más un requisito de informe. Los métodos para estimarla aún se están desarrollando, y los números deben llevar su método.

Las medidas de costo en la nube son fáciles de mejorar con atajos. Reducir el gasto apagando la monitorización o encogiendo los recursos hasta que el servicio se cae muestra una factura menor y un peor servicio. Se aplica la barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): toda medida de costo de aquí se sitúa junto a una medida de fiabilidad o de calidad, y ningún equipo se clasifica por su factura (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **El costo es una métrica de ingeniería.** Los equipos que construyen y operan un servicio ven y poseen su costo.
- **Asigna a los responsables.** Cada dólar debe corresponder a un equipo o a un fondo compartido declarado.
- **Empareja el costo con la calidad y la fiabilidad.** Los ahorros que rompen el servicio no son ahorros.
- **Optimiza de forma continua, en pasos pequeños.** Revisa el desperdicio con regularidad y actúa como parte del trabajo normal.
- **Pronostica con rangos.** La demanda variable hace frágiles los pronósticos de un solo número.
- **Colabora entre funciones.** Ingeniería, finanzas, compras y el negocio deciden juntos.
- **No clasifiques a los equipos por su factura.** Los servicios difieren, y el crecimiento no es desperdicio.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de la asignación | Proporción del gasto en la nube atribuida a un equipo responsable o a un fondo compartido declarado | gasto con un responsable y una etiqueta de servicio válidos, o en un fondo compartido declarado / gasto total en la nube | porcentaje | Exportación de facturación de la nube, política de etiquetas | Gestión financiera del servicio; gestión de activos de TI | Propiedad del equipo sobre lo que opera | Semanal |
| Costo unitario en la nube | Costo de los recursos en la nube por unidad de algo que los usuarios valoran | costo en la nube del servicio en el periodo / unidades entregadas en el periodo | moneda por unidad | Datos de facturación unidos al volumen del servicio | Gestión financiera del servicio; gestión de niveles de servicio | Costo de servir por resultado | Mensual |
| Tasa de desperdicio | Proporción del gasto en recursos que están inactivos o claramente sobredimensionados | gasto en recursos inactivos o sobredimensionados, según las reglas acordadas / gasto total en los recursos incluidos | porcentaje | Métricas de utilización y facturación | Gestión de la capacidad y el desempeño; gestión financiera | Reducción del desperdicio en la cadena de herramientas | Semanal |
| Cobertura de compromisos | Proporción del uso estable elegible cubierta por compromisos con descuento | uso elegible cubierto por compromisos / uso elegible | porcentaje | Informes de facturación y de compromisos | Gestión financiera del servicio; gestión de proveedores | Planificar para una demanda predecible | Mensual |
| Utilización de compromisos | Proporción de los compromisos comprados que se utilizaron | horas de compromiso usadas / horas de compromiso compradas | porcentaje | Informes de compromisos | Gestión financiera del servicio; gestión de proveedores | Valor de la inversión planificada | Mensual |
| Varianza del pronóstico | Diferencia entre el gasto en la nube pronosticado y el real, por equipo y en total | (real menos pronóstico) / pronóstico | porcentaje | Registro de pronósticos y datos de facturación | Gestión financiera del servicio | Exactitud del pronóstico | Mensual |
| Tiempo de acuse de anomalías | Tiempo desde una alerta de anomalía de costo hasta una decisión registrada del responsable | mediana y percentil 85 de horas desde la alerta hasta la respuesta del responsable | horas | Alertas de anomalías y registros de tickets | Monitorización y gestión de eventos; gestión de incidentes | Capacidad de respuesta ante una señal de producción | Mensual |

Define el alcance de los recursos, las reglas de etiquetas y lo que cuenta como inactivo o sobredimensionado, y regístralo. La cobertura de compromisos se calcula solo frente al uso estable de base, no frente a los picos. El costo unitario usa una unidad acordada con el responsable del servicio y fija para la tendencia. Los datos de costos deben decir si incluyen créditos, descuentos, impuestos y cargos de soporte, y qué moneda y tipo de cambio se aplican.

## Recomendaciones

### Haz visible y con responsable el costo

**1. Exige un conjunto pequeño y obligatorio de etiquetas.** Exige que cada recurso lleve una etiqueta de responsable, de servicio y de entorno, aplicada por política en la creación, no por una limpieza posterior. La cobertura de la asignación mide lo bien que funciona esto. Los recursos que no se etiquetan pueden bloquearse, o señalarse en un día al responsable de la cuenta. Mantén pequeño el conjunto de etiquetas para que la gente lo cumpla.

**2. Da a los equipos su propia vista de costos.** Ofrece a cada equipo una vista diaria o semanal de su gasto por servicio y entorno, con tendencias y anomalías. La gente responde a los datos que puede ver y entender. Un informe que llega cada mes y solo va a finanzas cambia poco.

**3. Define fondos de costos compartidos y sus generadores.** Las plataformas compartidas, las redes y los cargos de soporte necesitan una regla de reparto (véase el tema 7.5, Costo del servicio y economía unitaria). Publica la regla, revísala con los equipos y mantén pequeño el fondo. Una regla que la gente puede seguir se gana más confianza que una justa que nadie entiende.

**4. Celebra una conversación regular y breve sobre costos.** Reúne a ingeniería, finanzas y los responsables de producto con una cadencia constante, semanal o quincenal para los grandes gastadores y mensual para los demás, durante treinta minutos. Revisa la tendencia, las anomalías y la lista de pendientes de optimización. Esto es colaboración continua en la práctica, y mantiene el costo en la agenda sin un proceso pesado.

### Mide el valor, no solo el gasto

**5. Expresa el costo por unidad.** El gasto total en la nube sube con el éxito. Lo que importa es el costo por cliente activo, por transacción o por compilación. Elige una unidad significativa para el servicio, sigue su evolución en el tiempo y anota los cambios. Un costo unitario decreciente con un gasto total creciente es un patrón sano, y un costo unitario creciente con un uso plano es un pretexto para investigar.

**6. Muestra la fiabilidad y la calidad junto al costo.** Muestra el costo con la disponibilidad, la latencia y la tasa de errores del mismo servicio (véase el tema 5.2, SLI, SLO y presupuestos de errores). Los ahorros de costo que elevan las tasas de errores son una transferencia de costo a los usuarios. Un enfoque de presupuesto de errores puede hacer explícita la compensación: gasta menos cuando el servicio es mucho mejor de lo necesario e invierte cuando no lo es.

**7. Sigue el desperdicio con reglas explícitas.** Define inactivo (por ejemplo, sin uso significativo durante un periodo) y sobredimensionado (por ejemplo, utilización constantemente muy por debajo de la capacidad aprovisionada), e informa del gasto en cada uno. Las reglas necesitan cuidado: un sistema en espera por resiliencia parece inactivo por diseño, y debe excluirse y etiquetarse. Revisa las reglas cuando produzcan falsos positivos.

### Actúa sobre lo que encuentres

**8. Ajusta el tamaño y limpia como parte del trabajo normal.** Haz de la eliminación de desperdicio un elemento permanente de la lista de pendientes del equipo, abordado en pasos pequeños como parte de la mejora continua. Programa que los entornos que no son de producción se detengan fuera del horario laboral, elimina el almacenamiento sin asociar, elige niveles de almacenamiento adecuados y revisa primero las partidas mayores. Los cambios pequeños y regulares superan a las limpiezas heroicas poco frecuentes, que tienden a olvidarse cuando aumenta la presión.

**9. Ajusta el modelo de precios a la carga de trabajo.** Usa compromisos para el uso estable de base, bajo demanda para la carga variable y capacidad interrumpible para el trabajo que tolera interrupciones. Comprométete de forma incremental, en cantidades pequeñas, y sigue tanto la cobertura como la utilización. El exceso de compromiso desperdicia dinero y el defecto paga una prima. Implica a finanzas y a compras, y vuelve a comprobar los términos con el proveedor porque cambian.

**10. Detecta anomalías y responde.** Usa la detección de anomalías sobre el gasto, que señala cambios repentinos respecto a una línea base. Las herramientas de [detección de anomalías](https://en.wikipedia.org/wiki/Anomaly_detection) van desde umbrales sencillos hasta modelos estadísticos. Alerta al equipo responsable y mide cuánto tarda en acusar recibo y decidir. Un trabajo mal configurado puede acumular una factura grande en horas, así que la rapidez importa (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

### Pronostica y planifica

**11. Pronostica con rangos y generadores.** Construye los pronósticos a partir de los generadores de la demanda, como los usuarios o transacciones esperados, junto con el costo unitario. Usa el [análisis de varianza](https://en.wikipedia.org/wiki/Variance_analysis) para explicar las diferencias entre el pronóstico y lo real, y separa las debidas al volumen, al precio y a la mezcla. Da un rango y declara los supuestos. La varianza del pronóstico debe reducirse a medida que mejora el modelo.

**12. Incluye la sostenibilidad en el cuadro.** Estima las emisiones asociadas a las cargas de trabajo principales con un método documentado, como los informes del proveedor o metodologías publicadas, y declara los límites de la estimación. Compara las elecciones de región, tipo de instancia y programación tanto por costo como por emisiones. Trata las emisiones por unidad como una compañera del costo por unidad, y no reclames una precisión que el método no puede respaldar.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura de la asignación | Etiquetarlo todo a un responsable comodín; declarar grandes cantidades como compartidas | Proporción del gasto en manos de comodines; tamaño y revisión del fondo compartido; muestra de confirmación de responsables |
| Costo unitario en la nube | Elegir una unidad que crece barata; recortar la fiabilidad para recortar el costo | Definición de unidad fija; compañeras de fiabilidad y calidad |
| Tasa de desperdicio | Estrechar la definición de inactivo; trasladar el desperdicio a una cuenta fuera de alcance | Reglas en el registro; escanear todas las cuentas; muestrear los recursos que excluyen las reglas |
| Cobertura de compromisos | Comprometerse con bases infladas para perseguir un porcentaje alto | Utilización de compromisos; comprobar la base frente al historial de uso |
| Utilización de compromisos | Añadir uso elegible que no hace falta para llenar los compromisos | Comparar con el crecimiento de la demanda real; costo unitario |
| Varianza del pronóstico | Inflar los pronósticos; revisarlos tarde | Registrar el pronóstico al inicio; seguir la anchura del rango y la tasa de acierto |
| Tiempo de acuse de anomalías | Dar acuse de recibo a las alertas sin mirarlas; cerrar las alertas automáticamente | Registrar una decisión y un resultado; muestrear las alertas en busca de calidad de la respuesta |

Una lectura sana es un gasto casi todo con responsable y visible, un costo unitario que se mueve por razones explicadas, un desperdicio que se reduce sin caídas, compromisos que se usan y pronósticos cuyo error se estrecha con el tiempo.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Un equipo central de nube controla el gasto | Coherencia y poder de negociación | Lento; lejos de las decisiones de ingeniería |
| Los equipos poseen su costo en la nube | Decisiones rápidas e informadas | Necesita datos, formación y barreras de protección |
| Solo bajo demanda | Flexible | Precio unitario más alto |
| Compromisos fuertes | Menor precio unitario | Dependencia y desperdicio si cae la demanda |
| Topes estrictos de presupuesto | Evita los excesos | Puede causar caídas o bloquear trabajo válido |
| Alertas y revisión | Preserva la rapidez | Depende de una respuesta a tiempo |
| Ajuste agresivo de tamaño | Ahorra dinero | Riesgo para el rendimiento si se exagera |
| Ajuste de tamaño medido con SLO | Equilibrado | Necesita datos de fiabilidad y cuidado |

La respuesta en prosa es dar a los equipos datos y propiedad, fijar barreras de protección como alertas y presupuestos en lugar de paradas duras donde el servicio sea crítico, comprometerse gradualmente con la base estable y emparejar siempre el costo con la fiabilidad.

## Preguntas para conversar con tu equipo

**1. ¿Cuánta de nuestra factura de la nube podemos atribuir hoy a un responsable, y de quién no se encuentra?**
Mira la proporción del gasto con etiquetas válidas y las mayores partidas sin etiquetar. Pregunta quién sería responsable de cada una. El facilitador debe anotar cuántas partidas no reclama nadie. Acordad un paso de política de etiquetas que aplicar en la creación.

**2. ¿Qué hizo nuestro costo por unidad en los últimos seis meses, y por qué?**
Traza el costo unitario y anota los cambios de arquitectura, precio y volumen. Pregunta cuáles de los cambios fueron deliberados. Si la tendencia es una sorpresa, discutid qué datos faltan. Añade una medida de calidad al gráfico.

**3. ¿Qué recursos apagaríamos mañana si nos atreviéramos?**
Enumera candidatos: entornos inactivos, bases de datos sobredimensionadas, almacenamiento olvidado. Para cada uno, pregunta cuál es el riesgo y quién decide. Acordad una forma segura de probar la retirada de uno, como programarlo o hacer una instantánea primero.

**4. ¿Cómo sabríamos en un día si un trabajo empezara a costar diez veces más?**
Recorre el camino de las alertas desde la factura hasta el responsable. Pruébalo con un ejemplo pasado. La conversación debe revelar retrasos y brechas de propiedad. Acordad un tiempo objetivo para acusar recibo y decidir, y quién está al frente.

**5. ¿Con cuánto de nuestro uso de base podríamos comprometernos con seguridad, y qué nos haría equivocarnos?**
Examina el historial de uso en busca de un suelo estable y de los riesgos para él: cambios de producto, migraciones, cambios de precio. Decidid un primer compromiso modesto y una fecha de revisión. Incluye a finanzas en la discusión.

**6. ¿Qué compensación entre costo y fiabilidad estamos haciendo por accidente?**
Revisa los ahorros recientes y los incidentes. ¿Alguno estaba relacionado? Discutid cómo hacer explícita la compensación, por ejemplo vinculando las revisiones de costos con los presupuestos de errores. Decidid quién puede aprobar un recorte que afecte a la fiabilidad.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega toman las decisiones que impulsan el costo y son los mejor situados para reducirlo. Deben etiquetar en la creación, revisar con regularidad su vista de costos, incorporar el costo a las discusiones de diseño y tratar la reducción del desperdicio como trabajo normal. Deben poder ver el efecto de un cambio en el costo poco después de hacerlo, lo que respalda el aprendizaje rápido.

### Equipos de servicio y operaciones

Los equipos de operaciones y de plataforma operan servicios compartidos, aplican la política y operan las alertas de anomalías. Deben mantener sencillo el cumplimiento de las etiquetas, ofrecer informes de autoservicio y publicar reglas claras para el costo compartido. Deben vigilar tanto el costo como la fiabilidad de las plataformas que ofrecen, y ayudar a los equipos a actuar sin convertirse en un obstáculo.

### Liderazgo y gobernanza

Los líderes y finanzas quieren un gasto predecible y buen valor. Deben financiar las herramientas y el tiempo para el trabajo de costos, aceptar rangos en los pronósticos, evitar las tablas de clasificación de equipos y pedir el costo unitario junto a la calidad. La gobernanza debe comprobar que los compromisos se toman con datos y que las afirmaciones de sostenibilidad declaran su método.

### Clientes y usuarios

Los usuarios sienten el costo de la nube de forma indirecta, a través de los precios, las funcionalidades o la estabilidad del servicio. Se benefician cuando los ahorros financian mejoras y sufren cuando los recortes reducen la calidad. Donde se cobra a los usuarios por el consumo, quieren facturas claras y la posibilidad de influir en ellas.

## En la práctica: un ejemplo de ITIL ágil

Un minorista regional en línea opera su tienda y su plataforma de pedidos en una nube pública, con seis equipos de ingeniería. Los números siguientes son ilustrativos.

El gasto en la nube subió de forma constante durante un año, y el director financiero pide un recorte. El responsable de FinOps extrae los datos de facturación. La cobertura de la asignación es del 68 por ciento, con un tercio del gasto sin etiquetar en cuentas de prueba. El costo por pedido completado es de 0,31 dólares estadounidenses, frente a 0,27 seis meses antes, mientras el volumen de pedidos creció un 15 por ciento. La tasa de desperdicio según las reglas del equipo es del 14 por ciento del gasto incluido, sobre todo entornos que no son de producción que funcionan por la noche y los fines de semana y unas pocas bases de datos sobredimensionadas. La cobertura de compromisos es del 20 por ciento de la base estable, con un 97 por ciento de utilización de lo comprado. Una varianza del pronóstico de más 18 por ciento en el último trimestre siguió a una campaña de marketing de la que nadie había avisado al equipo de plataforma. Un trabajo de datos descontrolado en una cuenta funcionó dos días antes de que nadie lo notara.

El responsable acuerda cuatro cambios con los equipos de ingeniería. Una política de etiquetas bloquea los recursos nuevos sin etiquetas de responsable y de servicio, con un periodo de gracia de dos semanas. Cada equipo recibe una vista semanal de costos y un breve espacio en la conversación quincenal sobre costos. Los entornos que no son de producción se programan para detenerse fuera del horario laboral, y las tres bases de datos sobredimensionadas se redimensionan tras comprobar su rendimiento frente a los objetivos de nivel de servicio. Un primer compromiso cubre el 60 por ciento de la base estable, con una revisión en tres meses. Una alerta de anomalías llega al equipo responsable con la expectativa de una decisión registrada en cuatro horas, y el calendario de planificación incluye ahora las campañas de marketing.

Tras un trimestre, la cobertura de la asignación es del 93 por ciento, la tasa de desperdicio baja al 6 por ciento, el costo por pedido baja a 0,26 dólares sin cambios en la latencia ni en la tasa de errores del pago, y la varianza del pronóstico es de más 5 por ciento. La cobertura de compromisos es del 55 por ciento con una utilización del 96 por ciento. La mediana del tiempo de acuse de anomalías es de 2 horas, con el percentil 85 en 6. El director financiero pide una tabla de clasificación que muestre el costo por equipo. El responsable de FinOps la rechaza, explicando que los equipos operan servicios distintos con crecimientos distintos, y ofrece en su lugar la tendencia del costo unitario de cada equipo con sus medidas de fiabilidad. La decisión se registra y se fija la fecha de la próxima revisión.

## Perspectiva por sector

**Startup.** Los créditos y las facturas bajas pueden ocultar malos hábitos que se vuelven caros a escala. Etiqueta desde el primer día, programa los recursos que no son de producción y sigue pronto el costo por cliente. Comprométete solo cuando la demanda sea predecible.

**Pequeña empresa.** Una sola cuenta y unos pocos servicios hacen sencillos el etiquetado y la revisión. Revisa la factura cada mes con la persona que construye el sistema, elimina los recursos olvidados y desconfía de los compromisos largos. Una alerta de presupuesto es el control individual más valioso.

**Gran empresa.** Muchas cuentas, equipos y proveedores piden una función central de FinOps que habilite a los equipos en lugar de controlarlos. Estandariza las etiquetas y las exportaciones de facturación entre proveedores, negocia los compromisos de forma central y da a los equipos sus datos. Planifica las diferencias de informes en entornos multinube.

**Gobierno y sector público.** Los marcos de contratación, la residencia de datos y los presupuestos anuales fijos limitan las elecciones. Documenta las decisiones de costo y de región, modela el efecto del gasto variable en las asignaciones presupuestarias y conserva pistas de auditoría. Los compromisos públicos de sostenibilidad pueden exigir emisiones informadas con sus métodos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de una práctica de FinOps son el tiempo de unas pocas personas para llevar los informes, la política de etiquetas y la conversación regular; las herramientas, que puede proporcionar la plataforma de nube o comprarse; y el tiempo de ingeniería para actuar sobre los hallazgos. Una práctica pequeña puede empezar con una exportación de facturación y una hoja de cálculo.

Los retornos provienen de un menor desperdicio, mejores precios mediante compromisos, menos sorpresas y mejores decisiones de arquitectura. Construye el caso con tus propios números: la tasa de desperdicio y su costo en la primera revisión, los ahorros de programar los entornos que no son de producción, el descuento de los compromisos sobre la parte comprometida y el costo evitado de las anomalías detectadas pronto. Evita citar porcentajes de desperdicio o cifras de ahorro de todo el sector sin una fuente y un método rastreables. Incluye el costo de la práctica y el riesgo de exceso de compromiso. El caso financiero de las mejoras en general se cubre en el tema siguiente (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Un equipo central que dice no.** Frena el trabajo y los equipos lo rodean. Habilita a los equipos con datos y barreras de protección.
- **Recortar costos sin vigilar la fiabilidad.** Los ahorros vuelven en forma de incidentes. Empareja el costo con las medidas de nivel de servicio.
- **Perseguir la cobertura de compromisos.** Un porcentaje alto con baja utilización es desperdicio. Sigue ambos.
- **Informes mensuales solo para finanzas.** Los ingenieros nunca los ven. Da a los equipos vistas diarias o semanales.
- **El etiquetado como proyecto de limpieza.** Se deteriora. Exige las etiquetas en la creación.
- **Clasificar a los equipos por gasto.** El crecimiento parece desperdicio. Muestra las tendencias del costo unitario con contexto.
- **Pronosticar un solo número.** La demanda variable lo rompe. Usa rangos y generadores.
- **Reclamar emisiones precisas.** Los métodos de estimación son inciertos. Declara el método y los límites.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Visibilidad y propiedad | Factura mensual revisada por finanzas | Etiquetas usadas por algunos equipos | Etiquetas obligatorias; los equipos ven vistas semanales de costos | Cobertura de la asignación gestionada; fondos compartidos revisados | Los datos de costos fluyen a las decisiones de producto casi en tiempo real entre proveedores |
| Optimización | Limpiezas ocasionales | Programaciones y ajuste de tamaño por algunos equipos | Reglas de desperdicio y una lista de pendientes permanente de optimizaciones | Desperdicio, compromisos y costo unitario gestionados con compañeras de fiabilidad | Optimización continua y automatizada con supervisión humana y aprendizaje compartido |
| Planificación | Presupuesto anual | Pronósticos aproximados | Pronósticos basados en generadores con rangos | Varianza analizada y retroalimentada; compromisos gestionados de forma incremental | Pronóstico conjunto con el negocio, los proveedores y las metas de sostenibilidad |

## Lista de verificación

- [ ] Un pequeño conjunto obligatorio de etiquetas (responsable, servicio, entorno) se aplica en la creación de recursos.
- [ ] La cobertura de la asignación se informa semanalmente, con las mayores partidas sin etiquetar enumeradas.
- [ ] Cada equipo tiene una vista semanal de costos con tendencias y anomalías.
- [ ] Una conversación regular entre ingeniería y finanzas sobre costos está en el calendario.
- [ ] El costo unitario en la nube se sigue junto a la disponibilidad, la latencia y la tasa de errores.
- [ ] Las reglas de desperdicio están escritas y aplicadas, con las exclusiones etiquetadas.
- [ ] Los compromisos se toman de forma incremental frente al uso estable de base, con la cobertura y la utilización con seguimiento.
- [ ] Los pronósticos usan generadores y rangos, y se analiza la varianza.
- [ ] Las alertas de anomalías llegan a los responsables con un tiempo esperado para decidir.
- [ ] Las estimaciones de emisiones, si se informan, declaran su método y sus límites.

## Prompts de IA

**Analiza una tendencia de costos.**

```text
Aquí hay un resumen de nuestro costo y uso en la nube de [service] durante
[period]: [paste monthly cost, volume, and any known changes]. Desglosa el
cambio de costo en efectos de volumen, precio y mezcla hasta donde permitan los
datos, sugiere qué comprobar a continuación y propón un costo unitario con una
compañera de calidad. No inventes precios ni descuentos. Enumera tus supuestos y
los datos que necesitarías para estar más seguro.
```

**Redacta una política de etiquetas.**

```text
Redacta una política de etiquetas para [type of organization] que usa [cloud
provider(s)]. Incluye un conjunto mínimo de etiquetas obligatorias, valores
permitidos, cómo se aplican en la creación, cómo se comunican las infracciones a
los responsables y un periodo de gracia. Mantenla lo bastante corta para que los
ingenieros la sigan. Enumera tus supuestos y todo lo que dependa de funciones
del proveedor que debería comprobar en la documentación vigente.
```

**Define reglas de desperdicio.**

```text
Propón reglas para clasificar los recursos en la nube como inactivos o
sobredimensionados en [type of environment], incluidas las métricas usadas, las
ventanas de tiempo, las exclusiones (por ejemplo sistemas en espera por
resiliencia) y un proceso de revisión de los falsos positivos. Describe cómo
evitar dañar la fiabilidad. No fijes umbrales numéricos sin decir cómo
deberíamos calibrarlos a partir de nuestros propios datos. Enumera tus
supuestos.
```

**Planifica un primer compromiso.**

```text
Nuestro uso estable de base durante los últimos [period] es [summary] y los
riesgos para la demanda son [list]. Esboza un plan cauteloso para un primer
compromiso: cómo estimar la base, cuánto comprometer, cómo revisar la
utilización y qué nos haría parar. No supongas descuentos ni términos concretos
de un proveedor. Enumera tus supuestos y las preguntas para finanzas y compras.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de costos en la nube.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de costos en la nube lleva su vector de manipulación, su barrera de protección y su compañera de fiabilidad.

## Puntos clave

- Haz visible y con responsable el costo: exige las etiquetas en la creación y da a cada equipo su propia vista semanal.
- Mide el costo por unidad junto a la fiabilidad y la calidad, nunca solo.
- Elimina el desperdicio como parte del trabajo normal, guiado por reglas escritas.
- Comprométete gradualmente con la base estable y sigue tanto la cobertura como la utilización.
- Pronostica con generadores y rangos, y vigila las anomalías con una respuesta rápida.
- No clasifiques a los equipos por gasto, y declara el método y los límites de cualquier estimación de emisiones.

## Referencias y lecturas complementarias

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
