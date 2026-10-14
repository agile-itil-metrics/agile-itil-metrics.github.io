# Métricas de gobernanza y riesgo de la IA

**El uso de la IA necesita la misma disciplina que cualquier cambio en un servicio en vivo: saber dónde está, quién es su responsable, cuán arriesgado es, cómo se prueba y se cambia y qué ocurre cuando sale mal, con una supervisión que las personas puedan ejercer de verdad.**

## Resumen y motivación

La IA llega a una organización por muchas puertas. Un equipo adopta un asistente de programación. Un proveedor añade una funcionalidad generativa a un producto que ya se usa. Un miembro del personal pega un documento en una herramienta pública. Un departamento construye un modelo para puntuar solicitudes. Cada una es un uso de la IA con sus propios beneficios y riesgos, y pocas son visibles en un solo lugar. La gobernanza es el conjunto de estructuras, políticas y prácticas que hacen esos usos conocidos, con responsables y suficientemente seguros. Las métricas de riesgo te dicen si funciona la gobernanza.

ITIL tiene los bloques de construcción: la gobernanza del sistema de valor del servicio, la gestión de riesgos, la habilitación de cambios, la gestión de la seguridad de la información, la gestión de proveedores y la mejora continua. Las formas de trabajar ágiles y DevOps aportan el hábito del cambio pequeño, controlado y reversible, y de las comprobaciones automatizadas en la canalización. La gobernanza de la IA no necesita un universo aparte. Necesita estas prácticas aplicadas a cosas que se comportan de manera distinta del software convencional.

¿Qué es distinto en la IA?

- **El comportamiento es estadístico y puede cambiar sin un cambio de código.** Un modelo puede comportarse de otra manera tras una actualización del proveedor, un cambio en sus entradas o un cambio en el prompt. Los datos que ve en producción pueden derivar de los datos con los que se probó, un fenómeno conocido en el aprendizaje automático como deriva. Un sistema puede degradarse en silencio.
- **Las salidas no son totalmente predecibles.** Las pruebas no pueden cubrir toda entrada, así que la evaluación es por muestreo y por pruebas dirigidas, no por demostración. Los sistemas pueden fallar de maneras que sus constructores no previeron.
- **Los daños pueden ser difusos y desiguales.** El [sesgo algorítmico](https://en.wikipedia.org/wiki/Algorithmic_bias) es un error sistemático que lleva a resultados injustos para algunos grupos. Puede surgir de los datos, del diseño o del uso, y puede no aparecer en las cifras globales de exactitud.
- **Aparecen nuevas superficies de ataque.** La [inyección de prompts](https://en.wikipedia.org/wiki/Prompt_injection) es un ataque en el que instrucciones ocultas en los datos de entrada manipulan a un modelo de lenguaje para que se comporte de forma no prevista. Se puede inducir a los modelos a revelar datos o a realizar acciones que sus propietarios no pretendían.
- **La dependencia de los proveedores es profunda.** Muchas capacidades de IA provienen de proveedores externos, con visibilidad limitada de cómo se construyen o se cambian. Las medidas de proveedores importan más (véase el tema 8.4, Métricas de proveedores y contratos).
- **Las reglas están surgiendo y difieren según el lugar.** Las leyes, las normas y la orientación sobre IA se desarrollan deprisa. La [Ley de Inteligencia Artificial](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) de la Unión Europea adopta un enfoque basado en el riesgo con obligaciones que se aplican por fases, y otras jurisdicciones siguen caminos distintos. Normas como ISO/IEC 42001 sobre sistemas de gestión de IA y el Marco de Gestión de Riesgos de IA del NIST ofrecen estructuras. Las afirmaciones sobre reglas concretas en este tema están fechadas a octubre de 2026 y deben volver a comprobarse, y el asesoramiento jurídico debe guiar tus obligaciones. El campo más amplio se describe de diversas formas como [IA responsable](https://en.wikipedia.org/wiki/Responsible_AI) o IA digna de confianza, y la cuestión de cómo debe tratar la ley a la IA es el asunto de la [regulación de la inteligencia artificial](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

La gobernanza puede fallar de dos maneras opuestas. Puede ser tan pesada que los equipos la eviten, y el uso de la IA pase a la clandestinidad como [TI en la sombra](https://en.wikipedia.org/wiki/Shadow_IT). O puede ser un ejercicio de papel, con una política y un registro que no reflejan la práctica. Los objetivos ágiles sugieren el camino intermedio: implicación continua de las partes interesadas en fijar las reglas, aprobaciones pequeñas y rápidas para los usos de bajo riesgo, un escrutinio más profundo donde sea posible el daño y mejora continua de los controles a medida que crece la experiencia. Las personas motivadas con límites claros, a quienes se confía el uso del criterio dentro de ellos, informarán de los problemas. Las personas que temen el castigo no lo harán.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica a las medidas de gobernanza: cuando el "porcentaje de usos de IA registrados" es una meta, los registros se llenan de entradas que nadie lee, y los usos reales quedan fuera de la vista (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema se apoya en los temas de riesgos, cumplimiento y seguridad de la Parte 8, y en los temas anteriores de esta parte.

## Principios clave

- **Sabe dónde se usa la IA.** Un registro de usos, incluidos los incrustados en productos y los que el personal adopta por su cuenta, es el cimiento.
- **Ajusta el escrutinio al riesgo.** Ligero para los usos de bajo riesgo, más profundo para los que tienen consecuencias.
- **Trata los cambios de modelos y de prompts como cambios.** Necesitan pruebas, aprobación proporcional al riesgo y capacidad de revertir.
- **Evalúa antes y durante el uso.** Prueba con casos realistas, y sigue probando en producción.
- **Mantén una supervisión humana significativa.** Una persona debe poder entender, cuestionar y anular, y tener el tiempo y la autoridad para hacerlo.
- **Aprende de los incidentes sin culpas.** Los fallos de la IA son nuevos, y informar es la forma en que aprende la organización.
- **Haz rápida la aprobación de los casos seguros.** La gobernanza lenta empuja el uso fuera de la vista.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura del registro de usos de IA | Proporción de usos de IA hallados por medios independientes que están en el registro con un responsable y una clase de riesgo | usos en el registro con responsable y clase de riesgo / usos hallados por descubrimiento independiente (compras, gastos, identidad, red e informes del personal) | porcentaje | Registro, datos de compras y de gastos, registros de identidad, encuestas | Gobernanza; gestión de activos de TI; gestión de riesgos | Trabajo visible y propiedad clara | Trimestral |
| Vigencia de la evaluación de riesgos | Proporción de usos de riesgo medio y alto con una evaluación de riesgos dentro del ciclo exigido | usos evaluados dentro del ciclo / usos de riesgo medio y alto | porcentaje | Evaluaciones de riesgos | Gestión de riesgos; gestión de la seguridad de la información | Reflexión regular sobre los riesgos | Trimestral |
| Cobertura del control de cambios | Proporción de cambios en modelos, prompts, herramientas y fuentes de datos en producción que pasaron por el control de cambios con las pruebas exigidas | cambios con registro de cambio, pruebas y aprobación proporcional al riesgo / cambios detectados | porcentaje | Registros de cambios comparados con el historial de versiones y las notas de versión del proveedor | Habilitación de cambios; gestión de versiones y despliegues | Cambios pequeños, controlados y reversibles | Mensual |
| Vigencia de la evaluación | Proporción de usos en producción con una evaluación vigente (exactitud, seguridad y equidad donde sea pertinente) y resultados dentro de la tolerancia | usos con una evaluación dentro del ciclo y resultados aceptables / usos en producción incluidos | porcentaje | Registros de evaluaciones | Aseguramiento de la calidad; gestión de riesgos | Definición de terminado del comportamiento | Trimestral |
| Tasa de evidencia de supervisión humana | Proporción de salidas o decisiones con consecuencias muestreadas con una revisión humana sustantiva registrada | elementos muestreados con revisión documentada que podría haber cambiado el resultado / elementos muestreados | porcentaje | Registros de decisiones muestreados | Gestión de riesgos; gobernanza | Revisión antes de la versión | Mensual |
| Tasa de incidentes de IA y tiempo de contención | Incidentes que implican IA (salida dañina, exposición de datos, acción insegura) por uso y el tiempo para contenerlos | incidentes por uso en producción por trimestre; mediana y percentil 85 de horas desde la detección hasta la contención | incidentes; horas | Registros de incidentes etiquetados como IA | Gestión de incidentes; gestión de la seguridad de la información | Respuesta y aprendizaje sin culpas | Trimestral |
| Vigencia de la diligencia debida de IA de los proveedores | Proporción de proveedores que ofrecen funcionalidades de IA en servicios críticos cuya evaluación específica de IA está vigente | proveedores con una evaluación de IA vigente / proveedores críticos con funcionalidades de IA | porcentaje | Evaluaciones de proveedores | Gestión de proveedores; gestión de riesgos | Revisión regular de las dependencias | Trimestral |

Define "uso de IA" en sentido amplio en el registro: modelos que construyes, servicios que compras, funcionalidades dentro de productos y herramientas que usa el personal. Las clases de riesgo y los ciclos se fijan en la política. La cobertura del registro se mide frente al descubrimiento independiente, no frente al propio registro. La cobertura del control de cambios requiere una forma de detectar cambios: control de versiones, avisos de proveedores, monitorización de la configuración. La evidencia de supervisión humana requiere que la revisión pudiera haber cambiado el resultado, no que se haya pulsado un botón. Las tasas de incidentes describen usos y sistemas, y no se usan para valorar a personas.

## Recomendaciones

### Conoce y clasifica

**1. Construye el registro encontrando además de preguntando.** Empieza con una encuesta y una política, y comprueba luego frente a los registros de compras y de gastos, los registros de identidad y de acceso, los datos de red y de facturación de la nube y las actualizaciones de productos de los proveedores. Incluye las funcionalidades de IA incrustadas en herramientas que ya posees. Espera sorpresas: la gente usa herramientas que no aprobaste, a menudo por buenas razones. Trátalas como información (véase el tema 7.2, Métricas de activos de software y licencias).

**2. Asigna un responsable y una clase de riesgo a cada uso.** El responsable es la persona que responde del uso y de sus resultados. La clase de riesgo refleja el daño si el sistema falla: a quién afecta, si implica decisiones sobre personas, si actúa por sí solo, qué datos toca y cuán reversibles son los efectos. Usa pocas clases con reglas claras. Apóyate en marcos reconocidos, como el Marco de Gestión de Riesgos de IA del NIST, ISO/IEC 42001 y la ley aplicable, y adáptalos a tu contexto.

**3. Haz proporcional la aprobación.** Para los usos de bajo riesgo, basta un registro rápido de autoservicio con unas pocas preguntas. Para los usos con consecuencias, exige una evaluación de riesgos, resultados de evaluación, un diseño definido de supervisión humana y una aprobación. Una vía rápida para la mayoría segura mantiene a la gente dentro del sistema, y una vía más lenta para los pocos peligrosos les da el escrutinio adecuado.

### Prueba y controla el cambio

**4. Evalúa con casos realistas, antes y durante el uso.** Construye un conjunto de casos de prueba que reflejen entradas reales, incluidas las difíciles y las adversarias, y puntúa las salidas frente a criterios escritos. Incluye comprobaciones de seguridad y de equidad donde pueda haber personas afectadas. Vuelve a ejecutar las evaluaciones según un calendario y siempre que cambien el modelo, el prompt o los datos. Un equipo rojo, un grupo que ataca deliberadamente el sistema para encontrar debilidades, es una práctica útil para los usos de mayor riesgo. Véanse las prácticas de muestreo del trabajo asistido (véase el tema 10.2, Medición del trabajo asistido por IA).

**5. Pon los modelos, los prompts y las herramientas bajo control de cambios.** Versiona los prompts y las configuraciones como código. Exige pruebas y aprobación proporcional al riesgo para los cambios, regístralos y conserva la capacidad de revertir. Sigue las actualizaciones de modelos impulsadas por el proveedor, que pueden cambiar el comportamiento sin aviso, y acuerda con los proveedores cómo se te informará. Trata una actualización de modelo como un cambio que necesita control (véase el tema 4.3, Métricas de habilitación de cambios).

**6. Monitoriza en producción.** Vigila la deriva en las entradas y en las salidas, las tasas crecientes de error y de anulación y los patrones inusuales. Fija umbrales que desencadenen una revisión. Para los sistemas que realizan acciones, monitoriza los registros de acciones. La monitorización es la forma de encontrar los problemas que se le escaparon a las pruebas.

### Mantén real la supervisión humana

**7. Diseña una supervisión que pueda funcionar.** Una persona que revisa cada salida de un sistema rápido no puede seguir el ritmo, y una persona a quien se pide aprobar lo que no puede entender no está ejerciendo supervisión. Define qué hace el humano, qué información tiene, cuánto tiempo y qué autoridad para anular. Muestrea las revisiones para comprobar que son sustantivas. Está atento al sesgo de automatización, la tendencia a aceptar la salida de la máquina (véase el tema 10.1, La IA en la medición de la gestión de servicios).

**8. Conserva pistas de auditoría.** Registra entradas, salidas, versiones, decisiones y acciones de una forma que respalde la investigación, sujeta a las reglas de privacidad y a los límites de retención. Una [pista de auditoría](https://en.wikipedia.org/wiki/Audit_trail) te permite responder qué ocurrió y por qué. Para las decisiones con consecuencias sobre personas, considera qué explicación puedes dar y qué vía de apelación existe (véase el tema 8.3, Métricas de cumplimiento y auditoría).

**9. Protege los datos y resiste la manipulación.** Controla qué datos pueden ver y enviar los sistemas de IA. Prueba la inyección de prompts y la fuga de datos, sobre todo en sistemas que leen contenido externo o que tienen acceso a herramientas. Aplica los principios de mínimo privilegio usados para los agentes que actúan (véanse el tema 10.3, Métricas de agentes de IA y chatbots, y el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades). Considera la privacidad en el momento del diseño e implica a especialistas en protección de datos.

### Responde y aprende

**10. Trata los incidentes de IA como incidentes.** Define qué cuenta: salidas dañinas o sesgadas, exposición de datos, acciones inseguras, errores significativos que llegan a los usuarios. Usa tu proceso normal de incidentes con la etiqueta de IA, revisa sin culpas e incorpora las lecciones a las evaluaciones y a los controles. Facilita el informe al personal y a los usuarios. El tiempo de contención importa tanto como en cualquier incidente (véase el tema 3.4, Métricas de incidentes graves).

**11. Gestiona la IA de los proveedores.** Pregunta a los proveedores qué funcionalidades de IA usan, cómo se prueban y se cambian, cómo se manejan los datos y cómo se informa de los incidentes. Añade a los contratos términos específicos de IA donde importe, incluido el aviso de los cambios materiales de modelo. Vuelve a evaluar a los proveedores críticos según un ciclo (véase el tema 8.4, Métricas de proveedores y contratos).

**12. Revisa la propia gobernanza.** Cada trimestre, comprueba lo que muestran las medidas: dónde quedaron sin registrar los usos, qué aprobaciones fueron demasiado lentas, qué controles no detectaron problemas. Ajusta la política y las vías. Implica al personal y a los usuarios en la revisión. Mantén las reglas cortas, claras y actuales, y retira los controles que no se ganan su costo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura del registro de usos de IA | Registrar usos triviales para subir el porcentaje; denominadores limitados a lo registrado | Descubrimiento independiente para el denominador; muestrear la calidad de las entradas del registro; amnistía para los usos sin registrar |
| Vigencia de la evaluación de riesgos | Evaluaciones superficiales que siempre superan la prueba; evaluar usos de bajo riesgo | Revisar la profundidad de las evaluaciones; comprobar que la clase de riesgo coincide con los criterios |
| Cobertura del control de cambios | No detectar cambios del proveedor; registrar los cambios después de ocurridos | Detección mediante el historial de versiones y los avisos del proveedor; registros de cambios con marca de tiempo anterior a la versión |
| Vigencia de la evaluación | Evaluaciones con casos fáciles; elegir las tolerancias tras ver los resultados | Conjuntos de prueba revisados por un tercero independiente; umbrales fijados de antemano |
| Tasa de evidencia de supervisión humana | Pulsar aprobar sin leer; documentar una revisión que no podía cambiar el resultado | Muestrear las revisiones en busca de sustancia; errores conocidos sembrados; carga del revisor |
| Tasa de incidentes de IA y tiempo de contención | No informar de incidentes; estrechar la definición | Informe fácil y sin culpas; comparar con las quejas de usuarios y los hallazgos de auditoría |
| Vigencia de la diligencia debida de IA de los proveedores | Cuestionarios contestados por marketing; evaluaciones sin evidencia | Requisitos de evidencia para los proveedores críticos; verificación independiente |

Una lectura sana es un registro que confirma el descubrimiento independiente, evaluaciones que coinciden con el riesgo, cambios que pasan por el control, evaluaciones al día, una supervisión que encuentra errores reales, incidentes que se informan con facilidad y se contienen con rapidez, y proveedores que comparten lo que cambian.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Aprobación central de cada uso de IA | Control, coherencia | Lenta; empuja el uso a la clandestinidad |
| Registro de autoservicio con niveles de riesgo | Rápido para la mayoría segura | Necesita buenos criterios y comprobaciones por muestreo |
| Prohibición de herramientas públicas | Reduce la exposición de datos | Uso en la sombra; beneficios perdidos |
| Herramientas aprobadas con orientación | Uso visible y gestionable | Necesita provisión y soporte |
| Documentación pesada | Evidencia para la auditoría | Carga; puede no reflejar la práctica |
| Evaluación automatizada en la canalización | Continua, coherente | Necesita buenos conjuntos de prueba; puede pasar por alto fallos nuevos |
| Revisión humana de todo | Seguridad | No escala; fatiga |
| Muestreo basado en el riesgo | Práctico | Algunos fallos se cuelan |

La respuesta en prosa es ofrecer herramientas aprobadas y una vía rápida para los usos de bajo riesgo, concentrar el escrutinio en los que tienen consecuencias, automatizar la evaluación y la monitorización y mantener la supervisión humana donde de verdad pueda funcionar.

## Preguntas para conversar con tu equipo

**1. ¿Dónde usamos hoy IA que no está en ninguna lista?**
Pregunta al equipo con honestidad, y ofrece una amnistía. Mira las herramientas usadas para redactar, resumir, programar y analizar, incluidas las que hay dentro de productos. El facilitador debe registrar los usos sin juzgar. Acordad quién los registrará y cuáles necesitan una mirada más atenta.

**2. Si nuestro uso de IA con más consecuencias cometiera un error dañino, ¿cómo lo descubriríamos y qué haríamos?**
Recorre la detección, la contención, la comunicación y el aprendizaje. Anota las brechas en la monitorización, la propiedad y la autoridad para apagarlo. Acordad una mejora.

**3. ¿Qué puede cambiar bajo nuestros pies sin que nadie lo apruebe?**
Enumera modelos, prompts, fuentes de datos y actualizaciones del proveedor. Para cada uno, pregunta cómo sabríamos que cambió y cómo lo probaríamos. Acordad dónde añadir detección o una prueba.

**4. ¿Podría la persona que revisa la salida de IA en nuestro proceso detectar de forma realista un error grave?**
Mira el volumen, la información, el tiempo y la autoridad. Prueba con un error sembrado. Si la revisión no puede funcionar, rediseña el proceso antes de añadir más IA.

**5. ¿Cuáles de nuestras reglas le resultarían fáciles de seguir a un colega ocupado, y cuáles esquivaría?**
Enumera las reglas actuales y ponlas a prueba frente a los flujos de trabajo reales. Discutid por qué se eluden las reglas. Acordad cambios que hagan fácil el camino seguro.

**6. ¿Qué nos han dicho nuestros proveedores de su IA, y qué no hemos preguntado?**
Comprueba los cuestionarios y los contratos recientes. Identifica los proveedores críticos con funcionalidades de IA y las brechas de información. Acordad preguntas para la próxima revisión.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega construyen y adoptan funcionalidades de IA, y sienten la gobernanza como fricción o como ayuda. Deben registrar los usos pronto, probar con casos realistas, poner los prompts y los modelos bajo control de versiones y diseñar una supervisión que funcione. Se benefician de una aprobación rápida para los usos de bajo riesgo.

### Equipos de servicio y operaciones

Los equipos de operaciones ejecutan la IA en producción y responden a sus incidentes. Deben monitorizar la deriva, mantener registros de acciones, etiquetar los incidentes de IA y tener la autoridad y los medios para apagar un sistema. También usan IA ellos mismos y deben seguir las mismas reglas.

### Liderazgo y gobernanza

Los líderes fijan el apetito de riesgo y responden de los resultados. Deben financiar el registro, la evaluación y la monitorización, aceptar que algunos usos de la IA no pasarán, pedir un descubrimiento independiente de los usos y seguir los incidentes y el tiempo de contención. Los órganos de gobernanza deben mantener cortas las reglas, revisarlas con regularidad y asegurar que el personal y los usuarios tengan voz.

### Clientes y usuarios

Los usuarios resultan afectados por las decisiones y las salidas de la IA, a menudo sin saberlo. Merecen saber cuándo interviene la IA en asuntos que les afectan, poder llegar a una persona e impugnar decisiones. Las quejas y las apelaciones son evidencia esencial sobre cómo funciona la gobernanza en la práctica.

## En la práctica: un ejemplo de ITIL ágil

La división de tecnología y operaciones de un banco regional adopta una política de IA después de que un miembro del personal pegara datos de clientes en una herramienta pública. El equipo de cumplimiento publica un registro y espera que se enumere cada uso. Los números siguientes son ilustrativos.

Tres meses después, el registro enumera 38 usos de IA. El jefe de riesgos tecnológicos lo comprueba por medios independientes: datos de compras y de gastos, registros de identidad que muestran inicios de sesión en servicios de IA, datos de red y una encuesta anónima al personal. El descubrimiento encuentra 94 usos, así que la cobertura del registro es del 40 por ciento. Diecisiete son funcionalidades dentro de herramientas que el banco ya tiene licenciadas, y doce son herramientas públicas usadas por el personal. De los 38 usos registrados, solo 14 tienen una clase de riesgo, y los tres de mayor riesgo, un modelo que puntúa alertas de fraude, un chatbot para clientes y una herramienta que resume quejas, no tienen ninguna evaluación en el último año. Los cambios de configuración del modelo de fraude y los prompts del chatbot los hacen directamente los equipos, y los registros de cambios del último trimestre cubren el 21 por ciento de los cambios hallados en el historial de versiones. Una muestra de 60 alertas de fraude descartadas por el modelo muestra una revisión humana registrada en 52 de ellas, pero un conjunto sembrado de cinco omisiones conocidas fue detectado por un solo revisor, porque cada revisor gestiona varios cientos de alertas al día. Un incidente, en el que el chatbot dio a los clientes un importe de comisión obsoleto, se descubrió por una queja, y tardó seis días en contenerse porque nadie tenía autoridad para apagarlo.

El jefe de riesgos tecnológicos rediseña la gobernanza con los equipos. Un breve registro de autoservicio con cinco preguntas coloca en minutos los usos de bajo riesgo en el registro, y un periodo de amnistía anima al personal a enumerar las herramientas que usa. Las clases de riesgo se basan en el daño, los datos y la autonomía. Los usos de mayor riesgo necesitan una evaluación, una evaluación frente a casos realistas y adversarios y un diseño definido de supervisión. Los modelos, los prompts y las herramientas pasan a control de cambios con pruebas proporcionales al riesgo, y los prompts del chatbot se versionan con reversión. El proceso de alertas de fraude se rediseña para que los revisores gestionen menos alertas, mejor priorizadas, y los errores sembrados ponen a prueba su detección. Un responsable con nombre para cada uso de alto riesgo tiene la autoridad de apagarlo, y la respuesta a incidentes cubre la IA. A los proveedores de nube y de IA del banco se les pregunta qué funcionalidades de IA usan y cómo se notifican los cambios.

Dos trimestres después, la cobertura del registro por descubrimiento independiente es del 88 por ciento, todos los usos de alto riesgo están evaluados dentro del ciclo, la cobertura del control de cambios es del 84 por ciento, la detección de errores sembrados por los revisores sube a 4 de 5 y la mediana del tiempo de contención de un incidente de IA es de 3 horas. El personal usa herramientas aprobadas para la mayoría de las tareas. Un alto directivo pide una meta de cobertura del registro del 100 por ciento. El jefe de riesgos tecnológicos propone seguir la cobertura frente al descubrimiento independiente, la vigencia de las evaluaciones y el manejo de incidentes, y explica que un registro sin descubrimiento puede llegar al 100 por ciento y aun así pasar por alto el riesgo. La decisión se registra.

## Perspectiva por sector

**Startup.** La rapidez importa y los riesgos son sobre todo la exposición de datos y las salidas poco fiables. Mantén una lista corta de herramientas y usos con responsables, fija unas pocas reglas claras sobre qué datos pueden usarse dónde y versiona los prompts. Revísalo a medida que crezcan las exigencias de garantías de los clientes.

**Pequeña empresa.** El personal usará herramientas públicas. Ofrece una opción aprobada, escribe una regla de una página sobre los datos y revisa cómo se usan las herramientas. Pregunta a los proveedores por sus funcionalidades de IA y guarda un registro de dónde toma decisiones la IA sobre clientes o personal.

**Gran empresa.** La escala necesita un modelo operativo: registro, niveles de riesgo, normas de evaluación, control de cambios y proceso de incidentes, integrado con las funciones de riesgos y de seguridad existentes. Usa descubrimiento independiente, automatiza la evaluación en las canalizaciones y alinéate con las normas. Da a los equipos una vía rápida.

**Gobierno y sector público.** Las decisiones que afectan a los ciudadanos conllevan deberes de transparencia, equidad y apelación, y los marcos de contratación y jurídicos moldean lo que se permite. Mantén registros públicos de los usos de alto impacto donde se exija, evalúa el impacto en los derechos, mantén a los humanos de forma significativa en el ciclo y comprueba la ley y la orientación vigentes (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos incluyen el esfuerzo de construir y mantener el registro, las herramientas o el análisis de descubrimiento, las evaluaciones de riesgos, los conjuntos de evaluación y sus ejecuciones, el control de cambios de prompts y modelos, la monitorización, la formación y la capacidad de respuesta a incidentes. La gobernanza también añade algo de retraso a los usos de mayor riesgo. Estos costos escalan con el número y el riesgo de los usos, lo que es una razón para mantener ligera la aprobación de los de bajo riesgo.

Los retornos incluyen el daño y la exposición evitados, menos sorpresas en las auditorías y en las revisiones regulatorias, una adopción segura más rápida gracias a reglas claras y la confianza de clientes y personal. Construye el caso con tus propios datos: el número de usos hallados fuera del registro y los datos que tocan, los incidentes y su costo, el tiempo dedicado a aprobaciones ad hoc antes y después, y los hallazgos de las auditorías. Evita citar estadísticas publicadas sobre incidentes o sanciones de IA sin una fuente rastreable y relevante para tu contexto. Incluye el costo de no gobernar, que incluye la posibilidad de un daño jurídico y reputacional significativo (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Un registro que nadie comprueba.** La cobertura parece alta y se pierden los usos reales. Usa descubrimiento independiente.
- **Prohibiciones generales.** Empujan el uso a la clandestinidad. Ofrece herramientas aprobadas y una vía rápida.
- **Tratar los prompts y los modelos como una configuración sin responsable.** El comportamiento cambia sin que se note. Ponlos bajo control de cambios.
- **Evaluar una sola vez.** Los sistemas derivan y cambian. Repite según un calendario y ante cambios.
- **Supervisión solo de nombre.** Los revisores no pueden detectar lo que no pueden ver. Prueba con errores sembrados y corrige la carga.
- **Sin autoridad para apagar.** La contención lleva días. Nombra responsables con el poder de detener un sistema.
- **Ignorar la IA de los proveedores.** Tu riesgo incluye el suyo. Pregunta, contrata y vuelve a evaluar.
- **Reglas que nadie puede seguir.** Se eluden. Mantenlas cortas y haz fácil el camino seguro.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Conocer y clasificar | Sin visión del uso de la IA | Política y una lista parcial | Registro con responsable y clase de riesgo; descubrimiento independiente usado para la cobertura | Cobertura, vigencia de las evaluaciones y tiempos de aprobación gestionados | Visión de registro compartida entre unidades de negocio y proveedores; clases revisadas con reguladores y usuarios |
| Pruebas y cambio | Ad hoc | Algo de evaluación para algunos usos | Evaluación con casos realistas; prompts y modelos bajo control de cambios | Evaluación continua y monitorización de la deriva; cobertura gestionada | Evaluación y cambio automatizados y basados en el riesgo en las canalizaciones, auditados de forma independiente |
| Supervisión y aprendizaje | Confianza como único apoyo | La revisión existe en principio | Supervisión diseñada y muestreada; incidentes de IA etiquetados y revisados sin culpas | Pruebas de errores sembrados, tiempo de contención y evaluaciones de proveedores gestionados | Supervisión, aprendizaje de incidentes y política codesarrollados con el personal, los usuarios y los socios |

## Lista de verificación

- [ ] Un registro enumera los usos de IA con un responsable y una clase de riesgo, contrastado con el descubrimiento independiente.
- [ ] Existe una vía rápida para los usos de bajo riesgo y una más profunda para los que tienen consecuencias.
- [ ] Los usos de mayor riesgo tienen una evaluación de riesgos vigente y un diseño de supervisión definido.
- [ ] Las evaluaciones con casos realistas y adversarios están al día y se repiten ante cambios.
- [ ] Los prompts, los modelos, las herramientas y las fuentes de datos están versionados y bajo control de cambios.
- [ ] La monitorización de producción vigila la deriva, los errores, las anulaciones y las acciones inusuales.
- [ ] La supervisión se prueba con errores sembrados, y la carga del revisor es realista.
- [ ] Las pistas de auditoría respaldan la investigación dentro de las reglas de privacidad y de retención.
- [ ] Los incidentes de IA se etiquetan, se revisan sin culpas y los responsables pueden apagar los sistemas.
- [ ] Los proveedores con funcionalidades de IA se evalúan y se obligan a avisar de los cambios materiales.

## Prompts de IA

**Redacta una clasificación de riesgo para los usos de IA.**

```text
Propón una clasificación de riesgo sencilla (tres o cuatro niveles) para los
usos de IA en [type of organization] basada en el daño si se equivoca, a quién
afecta, la implicación de decisiones sobre personas, la autonomía de las
acciones, la sensibilidad de los datos y la reversibilidad. Para cada nivel,
indica ejemplos de usos, las aprobaciones y la evidencia exigidas y el ciclo de
revisión. No enuncies conclusiones jurídicas. Enumera tus supuestos y los puntos
que confirmar con especialistas jurídicos, de riesgos y de seguridad.
```

**Diseña un formulario de registro.**

```text
Diseña un breve formulario de registro de autoservicio para nuevos usos de IA,
con no más de ocho preguntas, que asigne automáticamente una clase de riesgo
inicial y encamine a revisión los usos de mayor riesgo. Cubre el propósito, los
datos, los usuarios afectados, la autonomía, el proveedor y el responsable.
Explica cómo mantenerlo rápido para los casos de bajo riesgo. Enumera tus
supuestos y los riesgos de una clasificación errónea.
```

**Planifica un conjunto de evaluación.**

```text
Usamos IA para [task] en [process]. Ayúdame a diseñar un conjunto de
evaluación: tipos de casos realistas, casos difíciles y adversarios, criterios
escritos de salidas correctas y seguras, comprobaciones de equidad donde haya
personas afectadas, qué tamaño de conjunto es práctico, con qué frecuencia
repetirlo y qué cambios deben desencadenar una repetición. No afirmes que un
conjunto sea suficiente. Enumera tus supuestos y límites.
```

**Revisa un incidente de IA.**

```text
Aquí hay una descripción de un incidente relacionado con la IA: [paste, without
personal data]. Redacta una revisión sin culpas: cronología, cómo se detectó,
factores que contribuyeron (datos, prompt, modelo, supervisión, proveedor,
proceso), impacto, qué lo contuvo y acciones con responsables. Sugiere cambios
en la evaluación, la monitorización y el control de cambios. No atribuyas culpa
a individuos. Enumera tus supuestos y las preguntas abiertas.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de gobernanza o de riesgo de la IA.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de gobernanza de la IA usa evidencia independiente y lleva su vector de manipulación y su barrera de protección.

## Puntos clave

- Construye el registro de IA mediante descubrimiento independiente, y ajusta el escrutinio al riesgo con una vía rápida para los usos seguros.
- Trata los modelos, los prompts, las herramientas y las fuentes de datos como cambios que necesitan pruebas, aprobación y reversión.
- Evalúa antes del uso y durante el uso, con casos realistas y adversarios.
- Diseña una supervisión humana que pueda funcionar, y pruébala con errores sembrados.
- Trata los incidentes de IA como otros incidentes, con revisión sin culpas, y da a los responsables el poder de apagar los sistemas.
- Pregunta a los proveedores por su IA, y mantén cortas las reglas y fácil el camino seguro.

## Referencias y lecturas complementarias

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
