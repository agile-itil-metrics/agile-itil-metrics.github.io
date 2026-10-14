# Gobernanza y propiedad de las métricas

**Una métrica que nadie posee, define, revisa ni retira se alejará del trabajo que describe, así que da a cada métrica reportada un responsable con nombre, una definición escrita, una fecha de revisión y una salida.**

## Resumen y motivación

La gobernanza de métricas es el conjunto de decisiones ligeras sobre quién posee una medida, qué significa, quién puede verla, con qué frecuencia se revisa y cuándo se retira. Es una prima cercana de la [gobernanza de datos](https://en.wikipedia.org/wiki/Data_governance), que abarca la gestión más amplia de la disponibilidad, la calidad y la seguridad de los datos en una organización. La gobernanza de métricas aplica la misma disciplina al conjunto pequeño y muy visible de números que los equipos y los líderes usan para dirigir el trabajo de servicio y de entrega.

La necesidad se manifiesta en pequeñas fricciones repetidas. Dos equipos calculan el "tiempo de resolución" de forma distinta y dedican una reunión a conciliar las cifras. Un elemento de un panel queda obsoleto durante meses porque la persona que lo construyó cambió de puesto. Una medida diseñada para que un equipo diagnostique su flujo la adopta un comité directivo como objetivo de desempeño, que es la situación contra la que advierte el tema anterior (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Ninguno de estos es un problema estadístico. Cada uno es un problema de propiedad, y cada uno es barato de prevenir.

Las visiones ágil e ITIL difieren en el énfasis, y la diferencia es útil. En la visión ágil, un equipo posee sus medidas de trabajo y las negocia en retrospectivas, acuerdos de trabajo y revisiones. La visión de ITIL, tal como se documenta en ITIL 4 (la edición de 2019 de AXELOS, hoy publicada por PeopleCert), trata la medición y los informes como una práctica general de gestión y la mejora continua como una práctica con sus propios roles, registros y revisión. ITIL también espera que los propietarios de servicios y de prácticas respondan de los resultados. Las dos visiones encajan: el equipo posee la vista de trabajo, un propietario de servicio o de práctica con nombre posee la vista reportada y un registro pequeño une ambas.

Unos cuantos términos usados aquí. Un **responsable de la métrica** (metric owner) es la persona que responde de la definición, la calidad de los datos y el uso de una métrica. Un **registro de métricas** (metric register) es un catálogo breve de las métricas en uso, con el responsable, la definición, la fuente de datos, la barrera de protección y la fecha de revisión de cada una. Una **carta de métricas** (metrics charter) es una declaración de una página sobre el propósito, el alcance, los roles y la cadencia de revisión de un conjunto de métricas. Una **[fuente única de verdad](https://en.wikipedia.org/wiki/Single_source_of_truth)** es el sistema o conjunto de datos autorizado único a partir del cual se calcula una cifra dada. Un **[administrador de datos](https://en.wikipedia.org/wiki/Data_steward)** (data steward) cuida la calidad y la definición de un dominio de datos, y en una organización pequeña el responsable de la métrica suele desempeñar este papel. Una **[matriz RACI](https://en.wikipedia.org/wiki/RACI_matrix)** registra quién es responsable, quién rinde cuentas, a quién se consulta y a quién se informa en cada actividad. Un **[diccionario de datos](https://en.wikipedia.org/wiki/Data_dictionary)** es un catálogo de elementos de datos y sus significados, en lo que se convierte la columna de definición del registro a mayor escala. El **[principio de mínimo privilegio](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** dice que las personas y los sistemas reciben el acceso que necesitan para su tarea y no más. La **[mejora continua](https://en.wikipedia.org/wiki/Continual_improvement_process)** es el esfuerzo constante por mejorar servicios, prácticas y formas de trabajar, y es a la vez una práctica de ITIL y un hábito ágil. SLA significa acuerdo de nivel de servicio e ITSM significa gestión de servicios de TI.

## Principios clave

- **Cada métrica reportada tiene un responsable con nombre.** Un rol o una persona, nunca "el equipo". La propiedad compartida deja la definición sin mantenimiento.
- **Una definición, una fuente de verdad.** Escribe la definición una vez, incluido dónde empieza y se detiene el reloj, y calcula la cifra en un solo lugar.
- **Gobierna en proporción a la consecuencia.** Una métrica que un equipo usa para depurar su propio tablero necesita una frase. Una métrica en un contrato, un informe público o un paquete para el consejo necesita una entrada en la carta, una revisión y una pista de auditoría.
- **El acceso sigue al propósito.** Decide quién ve qué vista y por qué. La audiencia predeterminada de la vista de trabajo de un equipo es el equipo.
- **Revisa con una cadencia y retira con evidencia.** Las métricas tienen ciclos de vida. Adóptalas, revísalas, modifícalas y retíralas de forma deliberada.
- **Escríbelo y mantenlo pequeño.** Un registro que cabe en una página se lee. Un manual de políticas no.
- **La gobernanza sirve a las personas medidas.** Entre los responsables de una métrica están las personas cuyo trabajo describe.

## Definiciones de métricas

Estas son medidas de la salud de una práctica de métricas, no de un servicio. Son deliberadamente pocas y baratas de recopilar del propio registro. Cada período es un trimestre natural, salvo indicación en contrario.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de responsables | Proporción de métricas reportadas con un responsable con nombre y vigente | métricas reportadas con un responsable que sigue en el rol al cierre del período / métricas reportadas al cierre del período; excluye las métricas usadas solo dentro del tablero privado de un equipo | porcentaje | Registro de métricas | Medición e informes | Acuerdos de trabajo | Trimestral |
| Vigencia de la definición | Proporción de métricas reportadas cuya definición se revisó dentro del intervalo acordado | métricas con una fecha de revisión en los últimos 6 meses / métricas reportadas; el reloj empieza en la última revisión registrada y se detiene al cierre del período | porcentaje | Registro de cambios del registro de métricas | Medición e informes; mejora continua | Acciones de la retrospectiva | Trimestral |
| Conformidad de la fuente | Proporción de métricas reportadas calculadas a partir de exactamente una fuente con nombre | métricas con una fuente autorizada y sin cálculo paralelo conocido / métricas reportadas; los cálculos paralelos se detectan muestreando paneles e informes | porcentaje | Registro más una muestra de paneles e informes | Medición e informes; gestión de niveles de servicio | Definición de terminado para una métrica | Trimestral |
| Tasa de retiro | Número de métricas retiradas o fusionadas en un período en relación con las reportadas | métricas retiradas o fusionadas en el período / métricas reportadas al inicio del período; una métrica trasladada a una vista privada del equipo cuenta como retirada del conjunto reportado | porcentaje | Registro de cambios del registro de métricas | Mejora continua | Acciones de la retrospectiva | Trimestral |
| Vigencia de la revisión de accesos | Proporción de vistas de métricas restringidas cuya lista de audiencia se revisó dentro del intervalo | vistas restringidas con una revisión de audiencia en los últimos 6 meses / vistas restringidas; se excluyen las vistas abiertas a toda la organización | porcentaje | Lista de accesos o exportación de permisos de la herramienta de BI | Gestión de la seguridad de la información; medición e informes | Acuerdos de trabajo | Semestral |
| Vinculación con decisiones | Proporción de métricas reportadas vinculadas en el registro a una decisión que informan | métricas con una decisión o pregunta registrada / métricas reportadas; un vínculo cuenta solo si la decisión se tomó en los últimos 12 meses | porcentaje | Registro de métricas y registro de decisiones | Mejora continua | Revisión con las partes interesadas y resultados de las mejoras | Trimestral |

Ninguna de estas es un objetivo. Un registro puede mostrar una cobertura de responsables completa y seguir describiendo métricas inútiles, así que lee la tabla junto con la tabla de manipulación de más abajo.

## Recomendaciones

### Establece la propiedad y el registro

**1. Mantén un registro de métricas de una página.** Enumera cada métrica reportada con su pregunta, responsable, definición, fórmula y relojes, unidad, fuente de datos, audiencia, barrera de protección, última fecha de revisión y fecha de revisión prevista. Una hoja de cálculo o un archivo Markdown en control de versiones basta. El registro es el artefacto más útil de este tema, y el tema anterior ya supone que existe (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

**2. Nombra un responsable por métrica y registra el rol.** El responsable responde de la definición, de la calidad de los datos y de la explicación de los resultados extraños. Elige a alguien cercano a los datos y a las decisiones, a menudo el propietario del servicio, el propietario de una práctica o un líder de equipo. Registra el rol además de la persona, de modo que la entrada sobreviva a un cambio de puesto y una vacante aparezca en la cifra de cobertura.

**3. Separa ser responsable de una métrica de ser responsable del trabajo que mide.** El responsable de una métrica la explica y la mantiene, pero el equipo que hace el trabajo sigue siendo responsable del resultado. Así se evitan dos trampas: el responsable al que se culpa por un número en el que no puede influir y el equipo que desconoce un número porque otro lo mantiene. Una breve tabla RACI en la carta lo hace explícito.

**4. Escribe la definición con sus relojes, una sola vez.** El registro contiene la definición autorizada: qué se cuenta, dónde empieza y se detiene el reloj, qué estados lo pausan y qué se excluye. Enlázala desde cada panel que muestre la métrica. Cuando una definición deba cambiar, cámbiala primero en el registro y marca el cambio en el gráfico (véase el tema 1.6, Alfabetización estadística para métricas de servicio, sobre cómo mostrar una ruptura en una tendencia).

**5. Calcula cada métrica en un solo lugar.** Elige la fuente autorizada, como la herramienta ITSM, el gestor de incidencias o el sistema de monitorización, y dilo en el registro. Las hojas de cálculo paralelas que reproducen la cifra deben retirarse o renombrarse para que nadie las confunda con el número oficial. El linaje de datos y las herramientas corresponden al tema siguiente (véase el tema 1.5, Fuentes de datos e instrumentación).

### Fija la cadencia y el control de cambios

**6. Revisa las definiciones con un calendario proporcional a la consecuencia.** Para las métricas en contratos, informes regulados o paquetes ejecutivos, revisa dos veces al año y ante cualquier cambio en el flujo de trabajo subyacente. Para las medidas de trabajo de nivel de equipo, la retrospectiva es la revisión. Cada revisión plantea tres preguntas: ¿sigue siendo exacta la definición?, ¿siguen siendo sólidos los datos? y ¿usó alguien el número para decidir algo?

**7. Trata los cambios de definición como cambios en un servicio.** Registra quién solicitó el cambio, por qué, a quién se consultó y la fecha en que entra en vigor. Un pequeño cambio en un flujo de estados puede mover en silencio una medida de tiempo en una cantidad grande. El control de cambios ligero para las definiciones toma la idea de la habilitación de cambios sin la ceremonia (véase el tema 4.3, Métricas de habilitación de cambios, para el equivalente en cambios de servicio).

**8. Integra la revisión en la mejora continua.** Las revisiones de métricas deben producir trabajo de mejora o una decisión explícita de no actuar. ITIL trata la mejora continua como una práctica con un registro de oportunidades de mejora, y los equipos ágiles obtienen el mismo efecto mediante las acciones de la retrospectiva. Si una revisión termina sin acción y sin retiro, pregunta si la métrica hace algún trabajo (véase el tema 9.5, Métricas de mejora continua).

**9. Retira las métricas de forma deliberada.** Define una prueba de retiro, por ejemplo "no citada en una decisión durante dos ciclos de revisión", y aplícala. Archiva la definición y los valores finales, di qué sustituyó a la métrica, si algo lo hizo, y avisa a la audiencia. Un registro de retiros es evidencia para los auditores y un alivio para quienes mantenían los datos a mano.

### Controla las vistas y el acceso

**10. Decide la audiencia de cada vista.** La mayoría de las métricas tienen una vista de trabajo para el equipo, una vista reportada para el propietario del servicio o el programa y, a veces, una vista externa para clientes, un regulador o un proveedor. Registra qué audiencia recibe qué vista y por qué. Guiándote por el principio de mínimo privilegio, restringe las vistas que contengan datos personales, detalles de seguridad o cifras comerciales sensibles de proveedores, y deja abiertas las demás para que la transparencia sea la opción por defecto.

**11. Mantén los datos a nivel individual fuera de los informes.** La regla firme de este libro es que las métricas describen equipos, servicios y sistemas, no personas. La gobernanza lo respalda fijando el grano reportado, por ejemplo equipo y servicio, y restringiendo al administrador de datos cualquier extracción a nivel de persona. Si llega una petición de un desglose por persona, regístrala, pregunta qué decisión sirve y ofrece una alternativa a nivel de equipo o de sistema (véase el tema 11.3, Implantar métricas sin sembrar miedo).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura de responsables | Nombrar a un gerente o a una lista de correo como responsable para llegar al 100 por ciento, sin nadie que pueda explicar o cambiar la métrica | Pedir a cada responsable que explique un movimiento reciente del número; seguir las preguntas que quedaron sin respuesta más de una semana |
| Vigencia de la definición | Tocar la fecha de revisión sin leer la definición | Muestrear tres entradas cada trimestre y comparar la definición escrita con la configuración real de la herramienta |
| Conformidad de la fuente | Declarar autorizada una fuente mientras siguen circulando hojas de cálculo que discrepan | Contar las cifras distintas de la misma métrica halladas en una muestra de informes; conciliar las diferencias en la revisión |
| Tasa de retiro | Retirar métricas triviales o sin uso para parecer disciplinado, o renombrar una métrica para que cuente como nueva | Revisar en el registro de retiros qué se eliminó; seguir el total de métricas reportadas y la cifra de vinculación con decisiones a su lado |
| Vigencia de la revisión de accesos | Aprobar la lista de audiencia existente sin leerla | Comparar la lista con la composición y los roles actuales del equipo; reportar el número de bajas halladas |
| Vinculación con decisiones | Escribir una decisión vaga como "mejorar el servicio" para satisfacer el campo | Exigir una decisión o pregunta con fecha y muestrear el registro de decisiones para ver si la métrica se consultó realmente |

Una lectura sana es un registro que cambia. Las entradas tienen responsables que contestan preguntas, fechas de revisión dentro de los últimos seis meses, un registro de retiros con motivos y una lista corta de métricas que se siguen queriendo porque la gente puede nombrar la decisión que informan. Un registro con todos los campos llenos y que nunca cambia es una señal de alarma.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Oficina central de métricas | Definiciones coherentes y herramientas compartidas; auditoría más fácil | Lenta, distante del trabajo y tentada de estandarizar medidas que deberían diferir entre equipos |
| Propiedad federada con un registro compartido | Los responsables están cerca de los datos; el registro mantiene un mínimo común | Necesita un estímulo constante para evitar la deriva de calidad entre equipos |
| Solo medidas propiedad de los equipos | Rápidas y adaptadas al trabajo | Las definiciones divergen; las consolidaciones se vuelven poco fiables; el conocimiento se va con las personas |
| Acceso abierto por defecto | Genera confianza y comprensión compartida | Riesgo de exponer detalles sensibles o a nivel de persona |
| Acceso restringido | Protege los datos sensibles | Oculta el contexto a quienes podrían ayudar e invita a la sospecha |

El equilibrio consiste en centralizar la capa delgada que debe coincidir, que es el registro, las definiciones compartidas y las reglas de acceso, y federar todo lo demás.

## Preguntas para conversar con tu equipo

**1. ¿Quién respondería si el número más citado de nuestro panel pareciera erróneo mañana?**
Pide al grupo que nombre a una persona, no a un grupo. Si salen varios nombres, o ninguno, la métrica no tiene responsable en la práctica. El facilitador debe anotar la métrica, el candidato a responsable y lo que el responsable necesitaría para hacer el trabajo, como acceso de lectura a los datos o tiempo en la revisión. Cierra acordando quién confirmará al responsable y registrará el rol en el registro.

**2. ¿Dónde existen hoy dos versiones de la misma cifra?**
Busca informes que muestren la misma métrica con valores distintos: una diapositiva semanal frente a un panel en vivo, o un informe de un proveedor frente al interno. Para cada caso, pregunta de dónde surge la diferencia, como el alcance, el reloj o las exclusiones. Decide qué fuente es la autorizada y qué pasa con la otra versión. Espera que la conversación descubra definiciones de trabajo distintas de palabras que todos daban por compartidas.

**3. ¿Qué métrica retiraríamos este trimestre si tuviéramos que retirar una?**
Empieza por la métrica que nadie ha citado en una decisión recientemente. Pregunta qué pasaría si desapareciera y quién lo notaría. Si la respuesta es "nadie", sácala del conjunto reportado durante un período de prueba. El facilitador debe tratar el retiro como algo normal y sano y registrar el resultado en el registro de retiros.

**4. ¿Quién ve cuáles de nuestras métricas, y es a propósito?**
Dibuja una cuadrícula sencilla de métricas frente a audiencias: equipo, propietario del servicio, dirección, clientes, proveedores, reguladores. Marca dónde el acceso fue una decisión y dónde simplemente ocurrió. Busca cualquier vista que pudiera usarse para comparar personas. Acordad un cambio en al menos una lista de audiencia y quién la revisará la próxima vez.

**5. ¿Cómo cambiamos una definición sin romper la tendencia?**
Repasa un cambio reciente en un flujo de estados o en una escala de prioridad. Pregunta a quién se avisó, si se anotó el gráfico y si alguien comparó los valores antiguos y nuevos. Redacta una entrada de cambio ligera que el equipo rellenaría de verdad. Acordad quién aprueba los cambios en las métricas que aparecen en contratos o en informes externos.

**6. ¿Qué dejaríamos de hacer si la gobernanza se volviera una carga?**
La gobernanza puede convertirse en un ritual. Pregunta qué partes del enfoque actual omitiría la gente si nadie lo comprobara, y por qué. Trata las respuestas como comentarios de diseño y no como resistencia. El facilitador debe buscar pasos que se duplican, campos que nadie lee y revisiones que nunca producen una decisión.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen medidas de trabajo como la antigüedad de los elementos de trabajo y el tiempo de ciclo, y deben acordar las definiciones en sus acuerdos de trabajo. Cuando una métrica sube a un informe de cartera, el equipo debe conocer al responsable, la definición y la audiencia. Los equipos obtienen el mayor valor de una breve entrada de registro para cada medida reportada y del derecho a cuestionar una definición que ya no se ajusta a cómo fluye el trabajo (véase el tema 2.1, Medidas de flujo).

### Equipos de servicio y operaciones

Los equipos de servicio y operaciones cargan con las métricas que aparecen en los SLA y en las revisiones operativas, por lo que las definiciones, los relojes y las exclusiones tienen peso contractual. Los responsables aquí suelen ser propietarios de servicios y de prácticas. Deben conservar un rastro de evidencia de los cambios de definición, conciliar con regularidad las cifras reportadas con la herramienta ITSM y ser los primeros en retirar una medida que ha dejado de informar las decisiones operativas (véase el tema 5.1, Métricas de SLA, OLA y XLA).

### Liderazgo y gobernanza

Los líderes fijan las condiciones: quién posee las métricas, qué vistas llegan al paquete ejecutivo y cómo se usan los números. Deben pedir el registro y el registro de retiros, leer las definiciones que hay detrás de las cifras principales y resistir las peticiones de tablas de posiciones por persona. Los órganos de gobernanza necesitan un punto permanente y breve que revise el registro y anote las decisiones, de acuerdo con las expectativas de ISO/IEC 20000-1 para los sistemas de gestión de servicios (según su edición de 2018) sin convertir la revisión en un ejercicio de cumplimiento (véase el tema 8.3, Métricas de cumplimiento y auditoría).

### Clientes y usuarios

Los clientes y usuarios rara vez ven el registro, pero notan su ausencia cuando una cifra de una revisión de servicio difiere de su experiencia. Donde una métrica aparece en un informe dirigido a clientes o en un SLA, la definición debe estar disponible en lenguaje claro, con lo que se excluye. Los clientes deben tener una vía para cuestionar una cifra, y el responsable debe responder (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio tiene un centro de servicios, tres equipos de producto y un grupo de operaciones. Todos los números siguientes son ilustrativos.

La revisión mensual del servicio muestra un tiempo de resolución de incidentes de 5,1 horas en la mediana. El panel propio de los equipos de producto, construido con la misma herramienta ITSM, muestra 6,4 horas. Las dos cifras llevan un año circulando. Un nuevo propietario de servicio pregunta quién posee la métrica y recibe tres respuestas distintas.

El propietario, con los líderes de equipo y el administrador de datos, dedica dos sesiones a un primer registro de 14 métricas reportadas. De ellas, 5 no tenían responsable y 4 tenían dos fuentes. El tiempo de resolución es una de las métricas con doble fuente. La diferencia se debe a un estado de pausa: la revisión del servicio excluye el tiempo en "en espera del cliente" y el panel del equipo no. El grupo acuerda una definición, nombra al propietario del servicio como responsable de la métrica y publica ambos valores en la misma página durante un trimestre, etiquetados por definición, para que nadie pierda el historial. Anotan el gráfico donde cambia la definición.

En la primera revisión trimestral, el grupo aplica una prueba de retiro y elimina 3 de las 14 métricas, incluido un gráfico mensual de recuento de tickets que ninguna decisión reciente había citado. También restringen la vista que desglosa el tiempo de resolución por analista, dejando al administrador de datos como único titular, y ofrecen en su lugar un desglose a nivel de equipo.

Un riesgo de manipulación aparece en la segunda revisión. La cobertura de responsables llega al 100 por ciento, pero una muestra muestra que dos de los responsables son una lista de distribución y un jefe de departamento que nunca ha abierto los datos. El grupo los sustituye por propietarios de servicio con nombre y añade la pregunta de la barrera de protección a la revisión: "¿Puede el responsable explicar el último movimiento de este número?". La cobertura baja al 86 por ciento durante un trimestre, lo que el grupo registra como un resultado honesto. La decisión anotada es mantener el objetivo de cobertura hasta que la barrera de protección haya funcionado durante dos ciclos.

## Perspectiva por sector

**Empresa emergente.** Un fundador o un ingeniero principal suele poseer todas las métricas por defecto. El riesgo es que las definiciones vivan en una sola cabeza. Mantén un registro de cinco a ocho métricas en un documento compartido, nombra un responsable para cada una y escribe las definiciones el día en que una métrica aparece por primera vez en una actualización para inversores o clientes.

**Pequeña empresa.** La persona que dirige TI suele ser responsable, administradora de datos y lectora de los informes. Limita la gobernanza a una sola página, revisa dos veces al año y ten especial cuidado cuando un informe suministrado por un proveedor defina una métrica de forma distinta a la tuya. Nombra quién en el negocio posee cada cifra dirigida a clientes.

**Gran empresa.** La escala hace esencial la capa compartida. Usa un registro con flujo de trabajo, un consejo ligero que se reúna cada trimestre y un rol de administrador de datos para cada dominio importante. Conserva la autonomía de los equipos para las medidas de trabajo y evita estandarizar métricas que deberían diferir entre tipos de servicios. Alinearse con la gobernanza de datos que ya existe en la organización ahorra esfuerzo.

**Gobierno y sector público.** Los informes legales, la auditoría y la contratación pública hacen obligatorios las definiciones escritas y los registros de cambios. Trata el registro como un artefacto de auditoría y mantén una línea clara desde cada cifra publicada hasta su responsable y su fuente. Las decisiones de acceso suelen implicar revisión jurídica y de privacidad, así que registra la base de cada vista restringida (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es modesto y consiste sobre todo en tiempo. Espera unas horas para construir un primer registro, una o dos horas por trimestre para la revisión y algo de esfuerzo del administrador de datos para resolver fuentes en conflicto. El costo de herramientas es bajo porque una hoja de cálculo o un archivo con control de versiones basta para empezar.

El retorno es sobre todo desperdicio evitado. Desaparecen las reuniones dedicadas a conciliar cifras, las auditorías encuentran un rastro claro y la incorporación de un nuevo propietario de servicio es más rápida porque las definiciones están escritas. Las decisiones son mejores porque se apoyan en números que significan lo mismo cada mes. No cites un porcentaje para estos beneficios sin tus propios datos. Si necesitas cifras para un caso de negocio, cuenta las horas dedicadas el trimestre pasado a conciliar números en conflicto y el número de métricas sin responsable registrado, y cuéntalas de nuevo tras dos ciclos de revisión.

## Antipatrones y trampas

- **Propiedad por comité.** Un grupo posee la métrica y nadie contesta preguntas. Nombra un rol responsable y un suplente.
- **El registro como cementerio.** Se construye una vez y nunca se toca. Pon fechas de revisión en el calendario y muestra la fecha en cada panel.
- **Estandarizarlo todo.** Una definición impuesta a equipos cuyo trabajo difiere produce números que no significan nada en ninguna parte. Comparte solo la capa que debe coincidir.
- **Cambios silenciosos de definición.** Las tendencias se rompen y la confianza las sigue. Registra cada cambio con su motivo y anota el gráfico.
- **Gobernanza sin retiro.** El conjunto solo crece y la atención se diluye. Aplica una prueba de retiro en cada revisión.
- **Secretismo por defecto.** Ocultar las vistas de trabajo a las personas medidas genera sospecha. Restringe solo lo que conlleva un riesgo real y explica por qué.
- **Acceso abierto a datos a nivel de persona.** Una sola extracción puede convertirse en una tabla de posiciones en pocos días. Fija el grano reportado en equipo y servicio y guarda cualquier dato a nivel de persona bajo el administrador de datos.
- **Teatro de cumplimiento.** Los campos se rellenan para satisfacer una lista de verificación. Muestrea las entradas para comprobar su veracidad y pide a los responsables que expliquen los movimientos recientes.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Propiedad y registro | Responsables poco claros; las métricas viven en hojas de cálculo individuales | Algunos equipos mantienen una lista con responsables | Un registro para todas las métricas reportadas, cada una con un responsable y un rol con nombre | Cobertura y vigencia con tendencias; las brechas llevan a correcciones con recursos | Registro compartido con proveedores y clientes donde las cifras cruzan fronteras |
| Definiciones y control de cambios | Las definiciones difieren según la persona | Escritas para algunas métricas contractuales | Definición escrita con relojes y registro de cambios para cada métrica reportada | Cambios revisados por su impacto en las tendencias antes de su publicación | Definiciones revisadas conjuntamente entre equipos y proveedores cuando dejan de informar decisiones |
| Revisión y retiro | Se añaden métricas y nunca se quitan | Depuración ocasional | Cadencia de revisión y prueba de retiro por escrito | Resultados de las revisiones seguidos como trabajo de mejora | Retiro y renovación rutinarios, guiados por la evidencia de usuarios y equipos |
| Acceso y audiencia | Acceso por accidente | Vistas restringidas para datos sensibles | Audiencia indicada por métrica, con un motivo | Acceso revisado con una cadencia; datos a nivel de persona en manos del administrador | Audiencia diseñada con las personas medidas y con los clientes |

## Lista de verificación

- [ ] Existe un registro de métricas que enumera cada métrica reportada.
- [ ] Cada métrica reportada tiene un responsable con nombre y un rol registrado.
- [ ] Cada métrica reportada tiene una definición escrita con reglas de inicio, parada y exclusión.
- [ ] Cada métrica tiene una fuente autorizada única nombrada en el registro.
- [ ] Se registran una fecha de revisión y un intervalo para cada métrica.
- [ ] Los cambios de definición se registran con un motivo y se marcan en el gráfico.
- [ ] Se ha escrito una prueba de retiro y se aplica en cada revisión.
- [ ] Se registra la audiencia de cada vista, con un motivo para cada restricción.
- [ ] Ninguna vista reportada clasifica a personas, y los datos a nivel de persona están en manos del administrador de datos.
- [ ] El registro se ha muestreado para comprobar su veracidad en el último trimestre.

## Prompts de IA

**Redacta una carta de métricas para un conjunto de métricas.**

```text
Redacta una carta de métricas de una página para [nombre del equipo o servicio],
que presta [tipo de servicio o trabajo de entrega]. El conjunto de métricas es:
[lista de métricas]. Las audiencias son [audiencias]. Incluye propósito, no
objetivos explícitos, una tabla RACI para responsable, administrador de datos y
revisores con estos roles: [roles], cadencia de revisión y una prueba de retiro.
Basa el borrador solo en lo que he escrito. No inventes métricas, objetivos ni
valores de referencia. Enumera tus supuestos y las preguntas que debería
responder para completar la carta.
```

**Encuentra conflictos entre dos versiones de una métrica.**

```text
Aquí hay dos descripciones de lo que debería ser la misma métrica, [nombre de la
métrica]. Versión A, de [fuente A]: [descripción y fórmula]. Versión B, de
[fuente B]: [descripción y fórmula]. Compáralas en lo que se cuenta, dónde
empieza y se detiene el reloj, qué estados lo pausan y qué se excluye. Explica
qué diferencias podrían dar cuenta de la brecha entre [valor A] y [valor B] y
sugiere preguntas para el responsable. No conjetures valores que no te he dado.
Enumera tus supuestos y lo que no pudiste determinar.
```

**Revisa un registro de métricas en busca de lagunas.**

```text
A continuación hay un extracto de nuestro registro de métricas con los campos
[lista de campos]. Revísalo en busca de responsables ausentes, entradas sin
fecha de revisión o con una anterior a [intervalo], métricas con más de una
fuente, métricas sin decisión vinculada y vistas que podrían exponer datos a
nivel de persona. Informa de patrones por métrica, no por persona. No inventes
hechos sobre nuestras métricas. Dime qué hallazgos son seguros según el texto y
cuáles son conjeturas, y enumera tus supuestos.

[pega el extracto del registro, sin datos personales]
```

**Planifica una revisión de retiros.**

```text
Revisamos las métricas cada [intervalo]. Nuestra prueba de retiro es: [prueba].
Para cada una de las métricas siguientes, usando las notas que aporto, propón
retirar, conservar, fusionar o rediseñar, con una razón de una línea y una
pregunta para el responsable: [métricas con la última fecha de cita y el rol del
responsable]. Sugiere también cómo anunciar cada retiro a [audiencia]. No
inventes datos de uso. Enumera tus supuestos y toda información que cambiaría tu
recomendación.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema y la barrera de protección emparejada de una métrica antes de añadirla al registro.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que la entrada de una métrica lleva un responsable, un vector de manipulación y una barrera de protección.

## Puntos clave

- La gobernanza mantiene los números con el mismo significado a lo largo del tiempo, y un registro de una página es su núcleo.
- Nombra un responsable para cada métrica reportada y registra el rol además de la persona.
- Escribe una definición con sus relojes, calcúlala en un solo lugar y registra cada cambio.
- Ajusta el peso de la gobernanza a la consecuencia de la métrica.
- Decide a propósito quién ve cada vista, mantén los datos a nivel de persona fuera de los informes y retira las métricas con evidencia.

## Referencias y lecturas complementarias

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
