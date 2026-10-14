# Costo del servicio y economía unitaria

**Saber cuánto cuesta un servicio, y cuánto cuesta por unidad de algo que los usuarios valoran, permite a un equipo tomar decisiones honestas sobre calidad, rapidez y gasto, siempre que las reglas de asignación sean justas, visibles y nunca se usen para castigar a las personas que operan el servicio.**

## Resumen y motivación

Todo servicio de TI cuesta dinero: personas, nube y alojamiento, licencias, hardware, proveedores y la parte de las plataformas compartidas que usa. Los líderes preguntan cuánto cuesta un servicio, si vale la pena y qué cambia si la demanda se duplica. Los equipos hacen las mismas preguntas desde el otro lado: qué podemos permitirnos hacer y a qué renunciamos. Sin números, estas conversaciones se convierten en discusiones sobre de quién es cada presupuesto.

La [contabilidad de costos](https://en.wikipedia.org/wiki/Cost_accounting) es la práctica de medir, registrar y analizar costos. Para una organización de servicio, las tareas centrales son atribuir los costos a los servicios, expresar el costo por unidad de algo significativo y pronosticar cómo cambia el costo con el volumen. La práctica de gestión financiera del servicio de ITIL cubre el mismo terreno, y la práctica de FinOps para el gasto en la nube lo lleva más lejos (véase el tema 7.6, Métricas de FinOps y costos en la nube).

Las visiones ágil y de ITIL del costo difieren, y la diferencia es útil.

- **La visión de proyecto** financia un esfuerzo temporal con un presupuesto y una fecha de entrega. El costo es lo que gastó el proyecto, y el éxito es entregar a tiempo y dentro del presupuesto. El proyecto termina, el equipo se dispersa y el servicio que creó pasa a manos de otra persona.
- **La visión de producto o de servicio** financia un equipo permanente para construir y operar un servicio a lo largo de su vida. El costo es el costo estable del equipo y de sus plataformas, y la pregunta es si el valor entregado justifica ese gasto. Esto encaja con los objetivos ágiles de entrega continua y de construir en torno a personas motivadas que conocen el servicio. También encaja con la preocupación de ITIL por el costo de un servicio a lo largo de su ciclo de vida.

Las medidas de costo pueden engañar con tanta facilidad como informar. Tres problemas se repiten.

- **La asignación es una elección.** Los costos compartidos, como las redes, la seguridad y las plataformas, deben repartirse entre los servicios mediante alguna regla, y reglas distintas dan respuestas distintas. La [asignación de costos](https://en.wikipedia.org/wiki/Cost_allocation) debe seguir un [generador de costo](https://en.wikipedia.org/wiki/Cost_driver), un factor que hace cambiar el costo, como los usuarios, las solicitudes o el almacenamiento. El [costeo basado en actividades](https://en.wikipedia.org/wiki/Activity-based_costing) lo formaliza rastreando los costos hasta las actividades que consumen recursos.
- **Los costos fijos y variables se comportan de forma distinta.** Un [costo fijo](https://en.wikipedia.org/wiki/Fixed_cost) permanece igual cuando el volumen cambia dentro de un rango, y un [costo variable](https://en.wikipedia.org/wiki/Variable_cost) sube con el volumen. El [costo unitario](https://en.wikipedia.org/wiki/Unit_cost) de un servicio baja a medida que crece el volumen cuando dominan los costos fijos, un patrón relacionado con las [economías de escala](https://en.wikipedia.org/wiki/Economies_of_scale). Mirar el costo unitario sin saber qué costos son fijos lleva a pronósticos erróneos.
- **El costo no es valor.** El servicio más barato no es el mejor. El costo por ticket baja si cierras tickets sin resolver problemas. Las medidas de costo necesitan una compañera de calidad o de resultado, que aportan las partes anteriores de este libro (véase el tema 6.5, Realización de valor y resultados de negocio).

También importan las clasificaciones contables. El [gasto de capital](https://en.wikipedia.org/wiki/Capital_expenditure) compra activos duraderos, y los gastos operativos cubren el funcionamiento diario. Los servicios en la nube y por suscripción desplazan el gasto del primer tipo al segundo, lo que cambia el aspecto de los presupuestos sin cambiar lo que cuestan los servicios. Los colegas de finanzas son dueños de estas reglas, y las métricas de aquí deben construirse con ellos.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con fuerza al dinero. Una meta de costo tiende a producir recortes donde es más fácil ocultar el daño, como el mantenimiento, la calidad y el tiempo de aprendizaje. Por eso las medidas siguientes se emparejan con indicadores de la salud del servicio y con una declaración de las reglas de asignación (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Haz explícitas las reglas de asignación y atadas a generadores de costo.** La gente acepta los números que puede seguir.
- **Separa el costo fijo del variable.** Los pronósticos dependen de cuál es cuál.
- **Informa el costo unitario con su compañera de calidad.** Más barato solo es mejor si el servicio sigue siendo bueno.
- **Usa rangos y tendencias, no precisión falsa.** La asignación implica juicio.
- **Financia equipos permanentes en torno a los servicios donde puedas.** Los equipos estables aprenden y mejoran; los temporales se disuelven.
- **Comparte los costos con las personas que pueden cambiarlos.** La visibilidad sin influencia es solo culpa.
- **No clasifiques nunca a personas ni a equipos por el costo.** Los servicios difieren, y también sus restricciones.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Costo por servicio | Costo anual totalmente cargado de un servicio con nombre, usando reglas de asignación documentadas | costos directos + costos compartidos asignados al servicio en el periodo | moneda por año | Libro mayor, datos de centros de costos, facturas de la nube y de licencias, datos de tiempo o de actividad | Gestión financiera del servicio; gestión del catálogo de servicios | Costo de un equipo de producto permanente y de sus plataformas | Trimestral |
| Costo unitario | Costo por unidad de algo que los usuarios valoran, como por usuario activo, por transacción o por solicitud resuelta | costo por servicio en el periodo / unidades entregadas en el periodo | moneda por unidad | Costo por servicio y datos de volumen | Gestión financiera del servicio; gestión de niveles de servicio | Costo de servir por resultado | Trimestral |
| Cobertura de la asignación | Proporción del gasto de TI atribuida a un servicio con nombre o declarada como gasto general compartido | gasto atribuido a servicios o declarado como gasto general / gasto total de TI | porcentaje | Libro mayor y modelo de asignación | Gestión financiera del servicio | Costo visible del trabajo de cada equipo | Trimestral |
| División entre operar, cambiar y mejorar | Proporción del gasto o de la capacidad que va a operar los servicios, a cambiarlos y a mejorarlos | gasto o capacidad de cada categoría / total | porcentaje | Etiquetas del libro mayor, tipos de trabajo del gestor de trabajo | Gestión financiera del servicio; mejora continua | Asignación de capacidad por tipo de trabajo | Trimestral |
| Varianza del pronóstico | Diferencia entre el costo pronosticado y el real, por servicio | (real menos pronóstico) / pronóstico | porcentaje | Registro de pronósticos y libro mayor | Gestión financiera del servicio | Exactitud del pronóstico | Mensual |
| Tasa de disputas del informe de costos (showback) | Proporción de líneas de informe de costos (showback) o de reparto (chargeback) que los responsables de servicio impugnaron y que se cambiaron | líneas cambiadas tras la impugnación / líneas emitidas | porcentaje | Sistema de showback y registro de disputas | Gestión financiera del servicio | Retrospectiva sobre costos compartidos | Trimestral |
| Proporción de financiación de equipos permanentes | Proporción del gasto de entrega y de operaciones financiada como capacidad estable de equipo para un servicio | gasto en equipos de servicio permanentes / gasto total de entrega y operaciones | porcentaje | Libro mayor y organigrama | Gestión financiera del servicio; cambio organizativo | Equipos construidos en torno a servicios y a personas motivadas | Anual |

Define el periodo, la moneda y los tipos de costo de cada medida, y registra las reglas de asignación en el registro de métricas: qué costos son directos, cuáles son compartidos y qué generador de costo reparte cada costo compartido. El costo unitario necesita una unidad que acepten tanto los usuarios como el equipo, y la definición de la unidad permanece fija a lo largo de la tendencia. La varianza del pronóstico compara con el pronóstico tal como estaba al inicio del periodo, no con uno revisado.

## Recomendaciones

### Construye el cuadro de costos

**1. Empieza por el libro mayor y la lista de servicios.** Toma el gasto total de TI del libro mayor, enumera los servicios del catálogo y decide qué parte de cada costo pertenece a qué servicio. Empieza por los costos directos fáciles: el equipo que opera el servicio, sus licencias, su alojamiento. Los costos compartidos vienen en segundo lugar. Un primer cuadro aproximado, compartido con las personas implicadas, supera a uno preciso construido en privado.

**2. Elige generadores de costo que la gente pueda seguir.** Para cada costo compartido, elige un generador atado a lo que realmente lo causa: usuarios para una plataforma de colaboración, almacenamiento para una plataforma de datos, solicitudes para una pasarela, dispositivos para la gestión de puntos finales. Explica la regla en una frase. Los generadores que nadie puede comprobar invitan a discusiones, y los generadores que nadie puede influir hacen inútil el informe de costos.

**3. Separa el costo fijo del variable.** Para cada servicio, marca qué costos se mueven con el volumen y cuáles no. Un servicio que es sobre todo costo fijo tiene un costo unitario que baja con el crecimiento, y uno que es sobre todo variable no. Esta división es la base de cualquier pronóstico y de cualquier conversación sobre escalar.

**4. Muestra rangos donde la asignación implique juicio.** Si dos reglas de asignación razonables dan resultados que difieren un 20 por ciento, muestra ambos o muestra el rango. Un único número preciso de una regla arbitraria inicia peleas que los datos no pueden resolver.

### Mide por unidad, con la calidad al lado

**5. Elige una unidad que refleje el valor.** El costo por usuario activo, por transacción completada, por solicitud resuelta o por despliegue pueden ser útiles. Elige la unidad que se conecte con aquello para lo que sirve el servicio, acuérdala con el responsable del servicio y mantenla estable. El costo por ticket es una unidad arriesgada, porque baja cuando los tickets se cierran antes de tiempo y sube cuando previenes tickets con un buen autoservicio.

**6. Empareja cada costo unitario con una medida de calidad.** Muestra el costo unitario junto a la disponibilidad, la satisfacción o la tasa de reapertura. Un costo unitario que baja mientras baja la calidad es una transferencia de costo a los usuarios. Un costo unitario que se mantiene mientras sube la calidad es una ganancia. Preséntalos juntos o no los presentes (véase el tema 6.1, Métricas de satisfacción del cliente).

**7. Sigue la tendencia, no solo el nivel.** El costo unitario a lo largo del tiempo, con notas sobre lo que cambió, cuenta una historia que un trimestre no puede contar. Marca en el gráfico los cambios de las reglas de asignación o de las unidades para que las tendencias no se malinterpreten. Compara un servicio con su propio historial antes de compararlo con otros.

### Comparte el costo con quienes pueden cambiarlo

**8. Usa el informe de costos (showback) antes que el reparto (chargeback).** El showback informa de los costos a los responsables de los servicios sin facturárselos, y el chargeback transfiere el costo a sus presupuestos. Empieza por el showback, que construye comprensión y confianza, y pasa al chargeback solo donde cambie decisiones y las reglas estén aceptadas. Ambos dependen de reglas que los responsables ayudan a dar forma.

**9. Deja que los responsables impugnen los números.** Un proceso de disputas es señal de salud, siempre que sea rápido y sus resultados se registren. Revisa la tasa de disputas: una tasa alta muestra reglas en las que nadie confía, y cero puede mostrar que nadie lee los informes. Corrige la regla, no solo la línea.

**10. Revisa el costo con todo el equipo del servicio.** Incluye a ingenieros y operadores además de a los gerentes en una revisión regular de costos. Las personas que operan un servicio suelen saber dónde se esconde el desperdicio: entornos inactivos, recursos sobredimensionados, herramientas duplicadas. Trata sus hallazgos como mejoras que compartir y no como críticas.

### Financia para la estabilidad y el aprendizaje

**11. Prefiere equipos permanentes financiados en torno a los servicios.** Donde sea posible, financia un equipo estable que sea responsable de un servicio a lo largo del tiempo, en lugar de montar un equipo de proyecto y disolverlo. Los equipos permanentes acumulan conocimiento, construyen mejores relaciones con los usuarios y cargan con el costo de las malas decisiones. Esto refleja el objetivo ágil de construir en torno a individuos motivados y la preocupación de ITIL por el ciclo de vida del servicio. El cambio de financiación es una decisión organizativa significativa, así que implica pronto a finanzas y al liderazgo. El libro *Project to Product* de Mik Kersten trata este cambio.

**12. Reserva capacidad para la mejora.** Los costos que reducen costos futuros, como la automatización, las correcciones de fiabilidad y la eliminación de herramientas duplicadas, necesitan financiación protegida o pierden siempre frente al trabajo de funcionalidades. Sigue la proporción de mejora en la división entre operar, cambiar y mejorar, y mira los retornos que produce (véase el tema 4.6, Deuda técnica y errores conocidos).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Costo por servicio | Desplazar costos a otros servicios mediante la regla de asignación; dejar sin asignar los costos desfavorables | Cobertura de la asignación; reglas publicadas y revisadas por los responsables; comparar los totales con el libro mayor |
| Costo unitario | Aumentar el denominador con unidades de poco valor; recortar la calidad para recortar el costo; cambiar la unidad | Medida de calidad emparejada; definición de unidad fija; comprobaciones de resultados |
| Cobertura de la asignación | Declarar grandes cantidades como gasto general compartido para evitar la atribución | Proporción de gasto general informada; revisión de lo que se declara como gasto general y por qué |
| División entre operar, cambiar y mejorar | Reetiquetar el trabajo de operación como mejora o cambio; etiquetar al final del periodo | Etiquetar en la entrada; muestrear elementos por tipo; comparar con datos de incidentes y solicitudes |
| Varianza del pronóstico | Inflar los pronósticos; revisar el pronóstico tarde en el periodo | Pronóstico registrado al inicio; comparar con el tiempo los rangos de pronóstico con los reales |
| Tasa de disputas del informe de costos (showback) | Desalentar las disputas; cambiar líneas sin un cambio de regla | Revisar las disputas y sus resultados; comprobar si las reglas cambiaron tras disputas repetidas |
| Proporción de financiación de equipos permanentes | Rebautizar proyectos como equipos permanentes sin cambiar la financiación ni la propiedad | Comprobar con el tiempo la estabilidad de los equipos y la propiedad; medidas de salud del servicio |

Una lectura sana es un cuadro de costos que los responsables de los servicios reconocen, costos unitarios que se mueven por causas explicadas mientras la calidad se mantiene, errores de pronóstico que se reducen y trabajo de mejora que aparece en los números.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Financiación por proyectos | Alcance y final claros | Los equipos se disuelven; se pierde conocimiento; el servicio se entrega a otros |
| Financiación de equipos permanentes | Aprendizaje, propiedad, costo estable | Necesita confianza y un proceso de planificación maduro; el alcance puede derivar |
| Showback | Crea comprensión con poca fricción | Puede ignorarse si nadie rinde cuentas |
| Chargeback | Crea rendición de cuentas y señales de precio | Disputas; incentivos para evitar los servicios compartidos |
| Reglas de asignación sencillas | Fáciles de explicar | Pueden ser toscas |
| Asignación basada en actividades | Más exacta | Cara de mantener; falsa precisión |
| Costo por unidad | Vincula el costo con el valor | Sensible a la elección de la unidad y al volumen |
| Solo costo total | Sencillo | Oculta tendencias y eficiencia |

La respuesta en prosa es empezar con reglas sencillas y showback, añadir precisión donde las decisiones dependan de ella y avanzar hacia la financiación de equipos permanentes a medida que crecen la confianza y la madurez de la planificación. Mantén una medida de calidad junto a cada medida de costo.

## Preguntas para conversar con tu equipo

**1. ¿Cuánto cuesta al año nuestro servicio principal, y quién estaría de acuerdo con el número?**
Pide a finanzas y al responsable del servicio que produzcan estimaciones independientes. Compáralas. El facilitador debe anotar dónde difieren y por qué: reglas de asignación, alcance o costos que faltan. Acordad una única regla documentada para el trimestre siguiente.

**2. ¿Cuál es la unidad que reconocerían nuestros usuarios, y cuánto cuesta?**
Enumera las unidades posibles para el servicio y elige una. Calcula su costo y discutid qué haría que subiera o bajara. Pregunta qué oculta la unidad. Añade una medida de calidad que la acompañe.

**3. ¿Cuáles de nuestros costos compartidos se reparten con una regla que nadie sabe explicar?**
Enumera los costos compartidos y sus generadores. Para cada uno, pregunta si el generador se relaciona con lo que causa el costo. Sustituye uno que no lo haga. Discutid quién puede influir en el generador, ya que los datos de costos sin influencia son solo culpa.

**4. ¿Cuánta de nuestra capacidad va a operar, cambiar y mejorar el servicio?**
Revisa un trimestre de trabajo terminado por tipo, como en el tema de planificación (véase el tema 2.5, Métricas de pronóstico y planificación de entregas). Compara con lo que creen los líderes. Decidid cuál debería ser la proporción de mejora y qué la protegería.

**5. ¿Qué cambiaría si financiáramos un equipo permanente para este servicio?**
Imagina la financiación, la propiedad y las medidas. Pregunta qué riesgos y beneficios verían finanzas, el equipo y los usuarios. Identifica un paso hacia ello, como una lista de equipo estable y una vista compartida del presupuesto del servicio.

**6. ¿Cuándo causó por última vez un número de costos una discusión, y qué aprendimos?**
Recuerda una disputa de showback o de presupuesto. ¿Era sobre el número o sobre la regla? Discutid cómo habrían ayudado una regla más clara o un mejor proceso de disputas.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega ven el costo como el precio de su tiempo, de sus plataformas y de sus herramientas. Deben conocer el costo y el costo unitario de su servicio, detectar pronto el desperdicio y usar los números para defender el trabajo de mejora y una financiación estable. Deben evitar optimizar el número recortando la calidad, y deben impugnar las reglas de asignación que no puedan seguir.

### Equipos de servicio y operaciones

Los equipos de operaciones cargan con el costo de operar los servicios y a menudo tienen las plataformas compartidas. Deben publicar cómo se generan los costos compartidos, responder a las preguntas del showback y compartir ideas de ahorro surgidas de la experiencia. Deben esperar presión para recortar los costos de operación, y deben mostrar el lado de calidad y de riesgo de cualquier recorte.

### Liderazgo y gobernanza

Los líderes preguntan por el costo y el valor y fijan el modelo de financiación. Deben pedir costos unitarios con compañeras de calidad, apoyar la financiación de equipos permanentes donde encaje y evitar clasificar a los equipos por el costo. La gobernanza debe esperar que las reglas de asignación estén documentadas, revisadas y aplicadas de forma coherente, y debe mirar la proporción de mejora.

### Clientes y usuarios

Los usuarios que pagan mediante chargeback quieren entender la factura y poder influir en ella. Los demás ven el costo en la calidad y en la gama de servicios ofrecidos. Unos costos unitarios claros y voz en la compensación entre precio y servicio hacen más sana la relación, y su retroalimentación es parte de la compañera de calidad de cada costo unitario.

## En la práctica: un ejemplo de ITIL ágil

El departamento central de TI de una universidad de tamaño medio presta unos 25 servicios a 18.000 estudiantes y empleados. Los números siguientes son ilustrativos.

La oficina de finanzas quiere saber por qué el presupuesto de TI creció más deprisa que la matrícula. La socia financiera de TI construye un cuadro de costos con los responsables de los servicios. Del gasto total de TI, el 72 por ciento es directo a servicios con nombre, el 18 por ciento son plataformas compartidas (red, identidad, herramientas de seguridad) que se asignan mediante generadores de costo y el 10 por ciento se declara gasto general. La cobertura de la asignación es, por tanto, del 90 por ciento. La plataforma de aprendizaje cuesta el equivalente de 41 dólares estadounidenses por usuario activo al año, frente a 36, mientras que la satisfacción y la disponibilidad se mantienen estables. El centro de servicios muestra un costo por solicitud resuelta que ha bajado un 12 por ciento en dos años. El responsable del servicio señala que la bajada coincidió con un aumento de los tickets reabiertos del 4 al 9 por ciento, y la compañera de calidad muestra que el ahorro es en parte una transferencia de esfuerzo a los usuarios.

El equipo hace cuatro cambios. Publica las reglas de asignación en una página, con generadores de costo para cada costo compartido y la fecha de la última revisión. Sustituye el costo por solicitud por el costo por solicitud resuelta en el primer contacto, mostrado junto a la tasa de reapertura. Traslada la plataforma de aprendizaje y el servicio de identidad a una financiación como equipos permanentes con una plantilla estable. Reserva el 15 por ciento de la capacidad para trabajo de mejora en cada uno de los dos servicios mayores, y sigue lo que devuelve ese trabajo.

Un año después, el costo unitario de la plataforma de aprendizaje es de 38 dólares a medida que creció el uso, la tasa de reapertura ha bajado al 5 por ciento y la varianza del pronóstico de los dos servicios con equipo permanente está dentro del 4 por ciento, frente al 11 por ciento del trabajo financiado por proyectos. La tasa de disputas del showback ha bajado del 22 por ciento al 8 por ciento tras cambiar dos reglas. La oficina de finanzas pide una meta anual de reducción del 5 por ciento del costo unitario para todos los servicios. La socia financiera de TI propone metas solo donde un servicio tenga una palanca de eficiencia clara, mostrada con la compañera de calidad, y explica que una meta general premiaría recortar el mantenimiento. La decisión se registra, con una revisión de las reglas cada año.

## Perspectiva por sector

**Startup.** El costo es sobre todo nube, herramientas y salarios. Sigue desde el principio el gasto principal en nube y herramientas por servicio, etiqueta los recursos y calcula pronto el costo por cliente activo. Resiste la asignación elaborada, ya que el equipo es pequeño.

**Pequeña empresa.** Un puñado de proveedores y una o dos personas componen la mayor parte de los costos. Mantén un cuadro anual sencillo, el costo por usuario de las herramientas principales y una vista de lo que se paga y no se usa. Pide a los proveedores facturas detalladas.

**Gran empresa.** La escala trae plataformas compartidas y muchas unidades de negocio. Usa un modelo de asignación documentado con generadores de costo, un proceso de disputas y una socia financiera integrada en TI. Cuidado con un chargeback que desaliente el uso de servicios compartidos que benefician a todos.

**Gobierno y sector público.** Los presupuestos son anuales y están asignados por ley, con reglas sobre el gasto de capital y el operativo, y puede exigirse transparencia de costos. Alinea el costeo de servicios con las normas de finanzas públicas, documenta los métodos de asignación para la auditoría y considera la financiación plurianual de equipos de servicio permanentes donde la ley lo permita. Informa los costos unitarios con medidas de resultados (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de construir el modelo de asignación, el tiempo de finanzas y de los responsables de los servicios para acordar las reglas y el trabajo rutinario del informe mensual y la gestión de disputas. La mayoría de las organizaciones ya tienen el libro mayor y los datos de facturación de la nube. Un pequeño modelo en una hoja de cálculo puede iniciar el trabajo, y las herramientas vienen después.

Los retornos son mejores decisiones y menos discusiones. Los equipos que ven sus costos encuentran desperdicio: entornos inactivos, licencias sin usar y herramientas duplicadas. Los líderes pueden comparar opciones conociendo los generadores de costo, planificar el crecimiento con los costos fijos y variables separados y financiar la mejora con evidencia de su retorno. Construye el caso con tus propios números: el desperdicio encontrado en la primera revisión, el tiempo dedicado a disputas presupuestarias y la varianza del pronóstico antes y después. Evita las afirmaciones externas sobre el gasto medio de TI como porcentaje de los ingresos salvo que puedas rastrear la fuente y el método, ya que las definiciones varían ampliamente. El último tema de esta parte reúne el caso financiero en un solo lugar (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Repartir el costo compartido por igual.** Castiga a los pequeños usuarios y oculta los verdaderos generadores. Usa generadores que reflejen el consumo.
- **El costo por ticket como meta.** Premia cerrar tickets antes de tiempo. Usa el costo por solicitud resuelta con una compañera de calidad.
- **Precisión sin confianza.** Un modelo precioso en el que los responsables no creen no vale nada. Construye las reglas con ellos.
- **Chargeback primero.** Inicia peleas antes de que haya comprensión. Empieza por el showback.
- **Recortar lo que es difícil de ver.** El mantenimiento, el aprendizaje y el trabajo de fiabilidad se recortan primero y cuestan más después. Protege la capacidad de mejora.
- **Comparar equipos por el costo.** Los servicios difieren en restricciones y riesgo. Compara cada uno con su propio historial.
- **Cambiar a la vez las reglas y la tendencia.** Marca los cambios de regla en los gráficos y restablece el historial donde sea posible.
- **Tratar el costo como propiedad de finanzas.** Las personas que operan el servicio saben de dónde viene el costo. Inclúyelas.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Cuadro de costos | Presupuesto solo por departamento | Costo por servicio de unos pocos servicios, asignación aproximada | Reglas de asignación documentadas con generadores de costo; cobertura con seguimiento | Costos unitarios con compañeras de calidad; división entre fijo y variable | Costos compartidos con transparencia con los socios de negocio; generadores de costo influidos conjuntamente |
| Uso del costo | Recortes de costos por porcentaje | Showback para algunos responsables | Showback para todos los servicios; proceso de disputas | La varianza del pronóstico y las tendencias del costo unitario guían las decisiones | Costo, calidad y valor sopesados abiertamente en todo el portafolio |
| Modelo de financiación | Presupuestos anuales por proyecto | Algunos equipos estables | Equipos permanentes para los servicios clave | La financiación sigue los resultados del servicio y el aprendizaje | Financiación flexible entre servicios con inversión en plataformas compartidas |

## Lista de verificación

- [ ] El gasto total de TI se atribuye a servicios o se declara como gasto general, con la cobertura con seguimiento.
- [ ] Las reglas de asignación y los generadores de costo están escritos y revisados con los responsables de los servicios.
- [ ] Los costos fijos y variables están separados en cada servicio importante.
- [ ] Los costos unitarios usan unidades acordadas y estables y se sitúan junto a medidas de calidad.
- [ ] Los pronósticos se registran al inicio del periodo y se comparan con los reales.
- [ ] El showback está disponible para todos los responsables de servicios, con un proceso de disputas.
- [ ] Se informa del gasto o de la capacidad de operar, cambiar y mejorar.
- [ ] Una parte de la capacidad está protegida para la mejora.
- [ ] Los cambios de regla y de unidad se marcan en los gráficos de tendencia.
- [ ] Ningún equipo ni persona se clasifica por el costo.

## Prompts de IA

**Propón generadores de costo para servicios compartidos.**

```text
Nuestros servicios compartidos y sus costos anuales son: [list]. Los servicios
que los usan son: [list], con datos de uso disponibles para: [list of drivers
like users, requests, storage]. Propón un generador de costo para cada servicio
compartido, explica cómo comprobar que el generador refleja lo que causa el
costo y describe las limitaciones. No inventes costos. Enumera tus supuestos y
lo que finanzas debería confirmar.
```

**Diseña un costo unitario y su compañera de calidad.**

```text
Para el servicio [name] en [type of organization], sugiere tres unidades
posibles para el costo unitario (por ejemplo por usuario activo, por
transacción, por solicitud resuelta) y, para cada una, una medida de calidad
que mostrar a su lado y una forma en que el par podría manipularse. Recomienda
una con razones. No inventes cifras. Enumera tus supuestos y preguntas para el
responsable del servicio.
```

**Prepara una revisión de showback.**

```text
Redacta una agenda y un resumen de una página para una revisión trimestral de
showback con el responsable de [service]. Datos: costo de este trimestre
[figures], del trimestre anterior [figures], volumen [figures], medidas de
calidad [figures] y disputas [list]. Incluye preguntas que ayuden al
responsable a encontrar desperdicio y a impugnar la asignación. Usa lenguaje
llano. Enumera tus supuestos y marca toda afirmación que necesite comprobarse.
```

**Planifica el paso a la financiación de equipos permanentes.**

```text
Actualmente financiamos el trabajo como proyectos: [describe]. Estamos
considerando financiar equipos permanentes para [services]. Esboza los pasos, la
información que querrán finanzas y el liderazgo, los riesgos y las medidas para
seguir si el cambio ayuda (por ejemplo varianza del pronóstico, estabilidad del
equipo, proporción de mejora y salud del servicio). No afirmes resultados de
otras organizaciones. Enumera tus supuestos y las decisiones que necesitan la
aportación del liderazgo.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de costo o de economía unitaria.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de costo indica su regla de asignación, su vector de manipulación y su compañera de calidad.

## Puntos clave

- Atribuye el costo a los servicios con generadores de costo que la gente pueda seguir, y muestra las reglas.
- Separa el costo fijo del variable, y empareja cada costo unitario con una medida de calidad.
- Empieza con showback y un proceso de disputas, y añade chargeback solo si cambia decisiones.
- Financia equipos permanentes en torno a los servicios donde puedas, y protege la capacidad de mejora.
- Informa rangos y tendencias, y marca en los gráficos los cambios de regla.
- No clasifiques nunca a personas ni a equipos por el costo.

## Referencias y lecturas complementarias

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
