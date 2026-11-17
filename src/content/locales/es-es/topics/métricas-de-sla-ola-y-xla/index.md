# Métricas de SLA, OLA y XLA

**Un acuerdo de nivel de servicio dice a un cliente lo que se prometió, un acuerdo de nivel operativo dice a los equipos internos lo que se deben entre sí, y un acuerdo de nivel de experiencia dice si las personas que usan el servicio están realmente mejor, así que necesitas los tres y necesitas informarlos con honestidad en lugar de como un muro de verde.**

## Resumen y motivación

Un [acuerdo de nivel de servicio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) es un compromiso documentado entre un proveedor de servicio y un cliente sobre lo que el servicio entregará: su horario, su disponibilidad, con qué rapidez responde y resuelve el proveedor los incidentes y con qué rapidez cumple las solicitudes. En ITIL 4 (la edición de 2019 del marco publicado por su propietario, ahora AXELOS bajo PeopleCert), la práctica de [gestión de niveles de servicio](https://en.wikipedia.org/wiki/ITIL) define estas metas, las supervisa e informa de ellas. Un [acuerdo de nivel operativo (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) es la contraparte interna: un acuerdo entre equipos de la misma organización, por ejemplo entre el centro de servicios y el equipo de redes, sobre qué hará cada uno y con qué rapidez para poder cumplir el SLA de cara al cliente. Un contrato de apoyo cumple el mismo papel para un proveedor externo (véase el tema 8.4, Métricas de proveedores y contratos).

Un acuerdo de nivel de experiencia (XLA) es el más reciente de los tres. Registra un resultado acordado en términos de cómo las personas experimentan el servicio, como con qué facilidad hicieron su trabajo, qué sintieron sobre la interacción y si el servicio les ayudó a alcanzar su objetivo. La idea ha crecido en la práctica de la gestión de servicios porque un SLA puede cumplirse mientras los usuarios están descontentos. Este tema posee los tres acuerdos y sus informes. La profundidad sobre cómo medir la experiencia pertenece al tema 6.2, Acuerdos de nivel de experiencia, y las contrapartes de ingeniería de las metas pertenecen al tema 5.2, SLI, SLO y presupuestos de errores.

Tres conceptos ágiles y de fiabilidad se sitúan junto a estos acuerdos. Un [indicador de nivel de servicio (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) es una propiedad medida de un servicio, como la proporción de solicitudes atendidas con éxito. Un [objetivo de nivel de servicio (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) es la meta interna de un SLI, normalmente más estricta que cualquier cosa prometida a un cliente. La práctica de [ingeniería de fiabilidad de sitios (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) trata el SLO, y el presupuesto de errores que se desprende de él, como una herramienta de decisión compartida entre producto y operaciones. El SLA es el contrato; el SLO es el objetivo de ingeniería; el SLI es la medición. Mantener los tres separados evita una confusión común en la que una cláusula contractual de penalización se usa para orientar las decisiones diarias de ingeniería.

La familia tiene un fallo bien conocido llamado informe sandía: un informe verde por fuera y rojo por dentro. Cada línea del SLA aparece como cumplida, y sin embargo los clientes están frustrados, porque las medidas se eligieron por lo que el proveedor podía alcanzar con fiabilidad y no por lo que le importa al cliente, o porque los promedios ocultan la mala cola, o porque el reloj se pausó durante lo peor de la espera. El remedio es en parte técnico (percentiles, relojes honestos, indicadores centrados en el usuario) y en parte social (acuerdos negociados como una conversación, revisados con una cadencia y leídos como una pregunta sobre el servicio, no como un veredicto sobre un equipo). La advertencia más amplia sobre las medidas que se convierten en metas está en el tema 1.2, Ley de Goodhart y psicología de las métricas.

Los equipos ágiles piensan en objetivos y presupuestos; los responsables de niveles de servicio de ITIL piensan en acuerdos y revisiones. Las visiones encajan: el acuerdo enuncia el resultado, los objetivos y los indicadores son cómo el equipo cumple la promesa, y las medidas de experiencia confirman que importó.

Un último término: un [percentil](https://en.wikipedia.org/wiki/Percentile) es el valor por debajo del cual cae una proporción indicada de las observaciones. El percentil 85 del tiempo de resolución es el tiempo dentro del cual se resolvió el 85 por ciento de los tickets. La mayoría de las metas de SLA se escriben como un percentil o una proporción, así que la forma de calcular el percentil y lo que se incluye en él son el núcleo del tema (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Principios clave

- **Acuerda los resultados con el cliente y mídelos luego.** Un acuerdo es un enunciado negociado de lo que necesita el cliente y puede sostener el proveedor, escrito con las palabras del cliente y revisado conjuntamente.
- **Informa distribuciones y proporciones, nunca un promedio único.** Un tiempo medio de resolución que cumple la meta puede asentarse sobre una larga cola de trabajo muy tardío. Indica el percentil, la población y el recuento.
- **Haz honesto el reloj.** Cada meta tiene un evento de inicio, un evento de fin y una lista de condiciones de pausa. Publica las reglas del reloj e informa con qué frecuencia se usa cada pausa.
- **Estratifica los acuerdos.** El SLA se construye sobre OLA y contratos con proveedores, y los objetivos fijados dentro del equipo deben ser más estrictos que las promesas hechas fuera. Una brecha en cualquier capa aparece como un incumplimiento en lo alto.
- **Empareja cada medida operativa con una medida de experiencia.** Una meta cumplida con una mala experiencia, o lo contrario, es la señal más útil del informe.
- **Cuenta los casi incumplimientos.** El trabajo que terminó justo dentro del límite te dice más sobre el riesgo que el trabajo que terminó muy por dentro.
- **Informa sobre equipos y servicios, nunca sobre personas.** Los acuerdos describen aquello con lo que se compromete un servicio o un equipo. No son una forma de clasificar a individuos.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de cumplimiento del SLA | Proporción de elementos medidos (incidentes, solicitudes o ventanas de tiempo) que cumplieron una meta de SLA indicada en el periodo | Elementos que cumplieron la meta divididos entre elementos medidos. El reloj arranca en la hora registrada definida en el acuerdo (por ejemplo la creación del ticket) y se detiene en el evento de fin definido (por ejemplo restablecimiento confirmado). Se excluyen: los elementos cancelados como duplicados y el tiempo dentro de las exclusiones acordadas, como el mantenimiento programado. Informa el recuento junto a la proporción | Porcentaje, con n | Marcas de tiempo de la herramienta ITSM; datos de monitorización para metas basadas en tiempo | Gestión de niveles de servicio; gestión de incidentes; gestión de solicitudes de servicio | Cumplimiento del objetivo de nivel de servicio sobre una ventana móvil (véase el tema 5.2, SLI, SLO y presupuestos de errores) | Mensual, con una vista interna semanal |
| Proporción de casi incumplimientos | Proporción de elementos que cumplieron la meta pero terminaron dentro de la última décima parte del tiempo permitido | Elementos terminados al 90 por ciento o más del tiempo meta y aún dentro de él, divididos entre elementos que cumplieron la meta. El mismo reloj que el SLA. No aplicable a ventanas de tiempo (se aplica solo a medidas de tiempo hasta la meta) | Porcentaje | Marcas de tiempo de la herramienta ITSM | Gestión de niveles de servicio | Proporción de trabajo cercano a la expectativa de nivel de servicio en un gráfico de flujo (véase el tema 2.1, Medidas de flujo) | Mensual |
| Proporción de pausa del reloj | Proporción del tiempo total transcurrido del ticket pasada en estados que pausan el reloj del SLA | Tiempo total de pausa dividido entre el tiempo total transcurrido desde el inicio hasta el fin, de los elementos incluidos. Se excluyen los elementos sin ningún estado de pausa usado. Informa por estado de pausa | Porcentaje | Historial de estados de la herramienta ITSM | Gestión de niveles de servicio; gestión de incidentes | Tiempo bloqueado y tiempo de espera en una vista de flujo (véase el tema 2.4, Métricas del flujo de valor) | Mensual |
| Tasa de cumplimiento del OLA | Proporción de traspasos internos que cumplieron la meta del OLA entre dos equipos | Traspasos completados dentro de la meta del OLA divididos entre traspasos recibidos. El reloj arranca cuando se asigna al equipo receptor y se detiene cuando este devuelve o cierra el elemento. Se excluyen: los elementos reasignados por error, contados por separado | Porcentaje, con n | Historial de asignaciones de la herramienta ITSM | Gestión de niveles de servicio; gestión de incidentes | Tiempo de espera de traspasos y trabajo bloqueado entre equipos (véase el tema 9.3, Métricas de colaboración y traspasos) | Mensual |
| Tiempo de espera de traspaso (percentil 85) | Tiempo que un elemento espera en la cola de un equipo receptor antes de que empiece el trabajo | Percentil 85 del tiempo entre la asignación al equipo receptor y la primera acción registrada por ese equipo. Se excluyen: los elementos que esperan al cliente | Horas o minutos | Historial de asignaciones y de actividad de la herramienta ITSM | Gestión de niveles de servicio; gestión de incidentes | Tiempo en cola en una vista de flujo (véase el tema 2.3, Trabajo en curso y teoría de colas) | Semanal |
| Puntuación de experiencia por recorrido | Valoración del cliente o usuario de cómo el servicio respaldó un recorrido definido, como conseguir un portátil nuevo o recuperarse de una caída | Media y distribución de las valoraciones de encuesta en una escala fija para los recorridos completados en el periodo. Informa la tasa de respuesta y la composición de los encuestados. Se excluyen: las encuestas parciales. No un promedio único, así que muestra la distribución | Escala de valoración, con tasa de respuesta | Breve encuesta posterior a la interacción; eventos del recorrido de la herramienta ITSM | Gestión de niveles de servicio; prácticas de satisfacción del cliente (véase el tema 6.1, Métricas de satisfacción del cliente) | Comentarios de los clientes y medidas de resultado | Mensual, con cada oleada mostrada |
| Brecha sandía | Proporción de periodos o servicios de informe en que el SLA se lee como cumplido mientras la medida de experiencia o de impacto en el usuario se lee como mala | Servicios (o periodos) con cumplimiento del SLA igual o superior a la meta y experiencia por debajo de su nivel acordado, divididos entre servicios (o periodos) con cumplimiento del SLA igual o superior a la meta. El nivel de experiencia debe acordarse antes de puntuar el periodo | Porcentaje de servicios en verde | Cumplimiento del SLA y puntuación de experiencia conjuntamente | Gestión de niveles de servicio; mejora continua | Retrospectiva de los resultados frente a los efectos | Trimestral |
| Cobertura y vigencia de los acuerdos | Proporción de servicios en vivo cuyo SLA, OLA y contratos con proveedores existen y se revisaron dentro del intervalo acordado | Servicios con las tres capas documentadas y revisadas dentro del intervalo, divididos entre servicios en vivo del catálogo de servicios. El intervalo lo fija la organización. Se excluyen: los servicios en retirada | Porcentaje | Catálogo de servicios y registro de acuerdos | Gestión de niveles de servicio; gestión del catálogo de servicios; gestión de proveedores | Acuerdos de trabajo y cartas de equipo revisados con una cadencia regular | Trimestral |

## Recomendaciones

### Prepara los acuerdos

**1. Escribe cada SLA con el lenguaje del cliente y átalo a un solo resultado.** Parte de lo que necesita el cliente, como "un empleado bloqueado vuelve a trabajar rápido", y elige luego la medida. Un acuerdo breve con un puñado de metas significativas supera a uno largo que nadie lee. Escribe el reloj de cada meta: el evento de inicio, el evento de fin y las condiciones de pausa (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

**2. Enuncia las metas como percentiles o proporciones, con una población declarada.** "El 90 por ciento de los incidentes de prioridad 2 restablecidos en cuatro horas" dice más que "restablecimiento medio inferior a dos horas". Acordad qué cuenta: qué prioridades, qué horas, qué tipos de solicitud. Muestra el recuento con cada porcentaje para que un mes con ocho incidentes no se lea como un mes con ochocientos.

**3. Deriva los OLA del SLA y da a cada uno un equipo propietario con nombre.** Trabaja hacia atrás desde la meta del cliente: si se promete al cliente el restablecimiento en cuatro horas, los OLA deben dejar margen para la detección, la clasificación, los traspasos y la corrección. Escribe cada OLA como un breve acuerdo mutuo con un equipo receptor, un tiempo de respuesta esperado y una vía para resolver disputas. Un OLA existe para ayudar a los equipos a planificar, así que mantenlo tan ligero como permita la relación.

**4. Mantén los objetivos más estrictos que la promesa.** Fija el SLO interno en un nivel más estricto que el SLA para que una mala semana se note y se corrija antes de un incumplimiento visible para el cliente (véase el tema 5.2, SLI, SLO y presupuestos de errores). Trata el SLA como un suelo que importa a finanzas y a lo legal, y el SLO como el número por el que se orientan los ingenieros. Usa el presupuesto de errores como la forma en que producto y operaciones deciden entre trabajo de funcionalidades y trabajo de fiabilidad.

### Mide con honestidad

**5. Publica las reglas del reloj e informa sobre las pausas.** La vía más común hacia un informe verde es un estado de pausa generoso, como "a la espera del cliente" usado cuando quien espera es el proveedor. Informa la proporción de pausa del reloj por estado de pausa, muestrea algunos tickets pausados cada mes y pregunta si el cliente estaría de acuerdo en que el reloj debió detenerse. Mantén corta la lista de motivos de pausa permitidos y escrita en el acuerdo.

**6. Muestra la distribución completa junto a la meta.** Coloca la mediana, el percentil 85 o 95 y el peor decil junto a la tasa de cumplimiento. Un cumplimiento plano del 95 por ciento puede ocultar una cola de trabajo que tardó días (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**7. Sigue los casi incumplimientos y las causas de los incumplimientos.** La proporción de casi incumplimientos te dice cuánta suerte hay en el número verde. Cuando ocurra un incumplimiento, registra la categoría de causa y si fue un problema de capacidad, de traspaso, de proveedor o de definición. Vincula las categorías mayores con la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas).

**8. Mide la cola del OLA, no solo el cumplimiento.** El tiempo de espera de traspaso en el percentil 85 muestra dónde se atasca el trabajo, mucho antes de que aparezca un incumplimiento del SLA. Compártelo con el equipo emisor y con el receptor, y descríbelo como una propiedad del flujo entre ellos. La conversación trata de la cola, nunca de las personas que hay en ella (véase el tema 2.3, Trabajo en curso y teoría de colas).

### Añade experiencia y cierra la brecha

**9. Empareja cada SLA con una medida de experiencia del mismo recorrido.** Pregunta a los usuarios una breve cuestión tras la interacción sobre si funcionó y cuánto costó, e informa la tasa de respuesta y la composición de los encuestados. Acuerda de antemano qué nivel cuenta como suficientemente bueno, para que un XLA sea un resultado negociado y no un número inventado a posteriori (véanse el tema 6.2, Acuerdos de nivel de experiencia, y el tema 6.1, Métricas de satisfacción del cliente).

**10. Informa la brecha sandía y trátala como un hallazgo.** Sigue con qué frecuencia se cumple un SLA mientras la experiencia es mala. Una brecha creciente te dice que las medidas del SLA se están alejando de lo que importa a los usuarios, y la respuesta correcta es revisar la medida, no explicar la discrepancia. Revísala cada trimestre con un representante del cliente presente.

**11. Revisa los acuerdos según un calendario y retira los que nadie usa.** Comprueba cada acuerdo frente al catálogo de servicios, los contratos con proveedores y el trabajo real. Un conjunto más pequeño de acuerdos vivos es más fácil de informar y más difícil de manipular.

**12. Informa cada servicio en una vista que combine las tres capas.** Muestra el cumplimiento del SLA, la distribución, las esperas de traspaso del OLA, la puntuación de experiencia y el trabajo de mejora abierto de cada servicio en una página. Deriva el estado de los datos, no de un color elegido por el responsable del servicio. Haz la página abierta al cliente y a los equipos (véase el tema 11.1, Diseño de un panel de métricas de servicio).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de cumplimiento del SLA | Elegir la meta para que sea fácil; cerrar tickets pronto y reabrirlos más tarde; reclasificar la prioridad a la baja; excluir casos difíciles como "fuera de alcance" | Tasa de reapertura y tasa de reclasificación de prioridad; muestra de tickets cerrados leída con el cliente; revisión trimestral de la lista de exclusiones |
| Proporción de casi incumplimientos | Detener el reloj un minuto antes del límite y seguir luego el trabajo fuera de registro; dividir un ticket en dos más cortos | Tiempo desde el último contacto con el cliente hasta el restablecimiento confirmado; recuento de tickets vinculados o hijos por incidente |
| Proporción de pausa del reloj | Usar estados de pausa en tickets que no esperan al cliente; mover el trabajo a un estado que no se cuenta | Motivos de pausa auditados en una muestra; proporción de pausas revertidas por el cliente; puntuación de experiencia de los tickets pausados |
| Tasa de cumplimiento del OLA | Rechazar traspasos devolviéndolos al emisor para reiniciar el reloj; marcar elementos como aceptados sin empezar el trabajo | Recuento de rebotes por elemento y tiempo total hasta el restablecimiento entre equipos; el resultado del SLA de extremo a extremo |
| Tiempo de espera de traspaso (percentil 85) | Asignar a una persona en lugar de a la cola del equipo para ocultar la espera; registrar una primera acción simbólica | Calidad de la primera acción muestreada; tiempo desde la asignación hasta la primera actualización visible para el cliente |
| Puntuación de experiencia por recorrido | Enviar encuestas solo a usuarios satisfechos; hacer preguntas tendenciosas; instruir a quienes responden para que den valoraciones altas | Composición de los encuestados frente a la población; tasa de respuesta mostrada junto a la puntuación; comentarios abiertos leídos en la revisión |
| Brecha sandía | Fijar bajo el nivel de experiencia para que la brecha siga siendo pequeña; cambiar la medida de experiencia cuando baja | Nivel de experiencia acordado de antemano y cambios registrados con motivos; tendencia de toda la distribución |
| Cobertura y vigencia de los acuerdos | Marcar un acuerdo como revisado sin una revisión real; contar un documento esbozado como un SLA | Evidencia de la revisión (asistentes, cambios, decisiones); muestra de acuerdos leída para ver su contenido real y la conformidad del cliente |

Una lectura sana muestra un cumplimiento que se mueve por razones comprensibles, casi incumplimientos pocos y explicados, pausas que se mantienen dentro de la lista acordada, esperas de traspaso que discuten los equipos que las poseen y una medida de experiencia que en gran parte concuerda con el SLA. Donde las dos discrepan, el equipo ya tiene una nota de la causa y un elemento de mejora.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| SLA contractuales con penalizaciones | Claros, exigibles, legalmente reconocidos | Fomentan juegos con el reloj y un informe defensivo; las penalizaciones pueden agriar la relación |
| SLA sin penalizaciones, con revisión regular | Genera confianza y datos honestos; se centra en el aprendizaje | Menos poder de negociación cuando un proveedor incumple de forma constante las metas |
| OLA detallados entre todos los equipos | Expectativas claras y menos disputas | Burocracia; los equipos optimizan su propio reloj en lugar del del cliente |
| OLA ligeros con una meta compartida de extremo a extremo | Fomenta la cooperación; menos papeleo | Necesita confianza y buena visibilidad de las colas para zanjar disputas |
| Añadir XLA a los SLA | Muestra si el servicio ayuda a las personas | Los datos de encuesta son más ruidosos y lentos; la atribución es más difícil |

Mantén pequeño el acuerdo, informa la distribución y usa los datos de experiencia para comprobar los datos operativos. Gasta esfuerzo en las reglas del reloj y en los traspasos, donde surge la mayor parte del desacuerdo sobre un número.

## Preguntas para conversar con tu equipo

**1. Si nuestro informe de SLA está todo en verde, ¿qué esperaríamos que dijeran los usuarios del servicio?**
Pide al grupo que nombre un servicio que lleve varios meses en verde y recoge luego lo que dicen realmente los usuarios en comentarios y quejas. Compara ambos. El facilitador debe buscar brechas entre la medida y la experiencia vivida, y anotar qué medidas se eligieron por ser fáciles de alcanzar.

**2. ¿Dónde se detiene nuestro reloj, y quién lo decidió?**
Recorre las reglas de inicio, fin y pausa de una meta importante y pregunta quién escribió cada una. Mira la proporción de tickets en un estado de pausa y pregunta si los clientes estarían de acuerdo. Acordad una regla que endurecer o aclarar.

**3. ¿Cuáles de nuestros OLA ayudan a los equipos a planificar, y cuáles solo asignan culpas?**
Enumera los acuerdos internos y pregunta quién lee cada uno y cuándo. Discutid qué ocurre tras un OLA incumplido: una conversación sobre la cola o una búsqueda de culpables. El objetivo es llevar la discusión hacia el flujo de trabajo entre equipos. Elegid un OLA que simplificar o retirar.

**4. ¿Cuánto de nuestro verde es suerte?**
Muestra la proporción de casi incumplimientos de la meta más importante. Discutid qué ocurriría si el mes siguiente tuviera unos pocos casos difíciles más o unas pocas personas disponibles menos. Pregunta si el equipo tiene holgura y dónde está.

**5. ¿Qué querría el cliente que prometiéramos y que hoy no medimos?**
Invita al representante del cliente o a un usuario a describir con sus propias palabras lo que le importa, como poder llegar a una persona o conseguir un portátil antes del primer día. Recoge dos o tres resultados. Decidid cuáles podrían ser una pregunta breve de encuesta o un evento que ya está en los datos, y cómo acordaría el grupo un buen nivel.

**6. ¿Cómo sabríamos si nuestras medidas de SLA se hubieran alejado de lo que importa a los usuarios?**
Discutid la brecha sandía como una señal y preguntad quién la mira. Considerad con qué frecuencia se revisan los acuerdos y si asiste el cliente. Acordad una fecha de revisión y la evidencia que llevar, incluida una muestra de tickets y los últimos resultados de experiencia.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega que además operan sus servicios cumplen el SLA mediante sus propios objetivos y presupuestos de errores, y sienten el costo cuando una penalización de SLA o un escalado de un cliente interrumpe el trabajo planificado. Deben mantener los SLO más estrictos que los SLA y tratar el SLA como un suelo de seguridad, no como la meta diaria (véase el tema 5.2, SLI, SLO y presupuestos de errores).

### Equipos de servicio y operaciones

Los equipos de operaciones llevan los relojes. Necesitan reglas claras de inicio, fin y pausa, OLA compartidos que nombren la cola receptora y visibilidad de las esperas de traspaso. Deben informar las causas de los incumplimientos con claridad y usarlas como insumo del trabajo de problemas y de capacidad (véase el tema 4.1, Métricas de gestión de problemas). Deben resistir la presión de explicar un resultado mediante el reloj en lugar de corregir la causa.

### Liderazgo y gobernanza

Los líderes usan los informes de SLA para ver si se cumplen los compromisos y dónde invertir. Deben pedir distribuciones, la proporción de pausa del reloj, la proporción de casi incumplimientos y la brecha sandía, y tratar con curiosidad una racha ininterrumpida de verde. Financiar el trabajo de mejora que sigue a un análisis de incumplimientos, y proteger de la culpa el informe honesto, importa más que la propia meta (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

### Clientes y usuarios

Los clientes quieren que el acuerdo describa lo que sienten: con qué rapidez se corrige el problema, con qué frecuencia se repite y si pueden llegar a alguien que ayude. Deben formar parte de la revisión de los acuerdos y tener una forma de decir cuándo un informe en verde no coincide con su experiencia. Un resumen legible de una página, con los motivos de cualquier incumplimiento y la corrección prevista, genera más confianza que una larga tabla de cumplimiento.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional da soporte a un sistema de programación clínica usado por el personal de las plantas. El responsable del servicio, el centro de servicios, el equipo de aplicaciones y el equipo de infraestructura se reúnen cada mes. Todos los números siguientes son ilustrativos.

El SLA promete que el 90 por ciento de los incidentes de prioridad 2 (pérdida parcial de función que afecta a una planta) se restablecen en cuatro horas, medidas desde la creación del ticket, en un servicio de 24 horas y siete días. El informe mensual muestra un cumplimiento del 94 por ciento sobre 36 incidentes (ilustrativo), cómodamente verde. La encuesta de experiencia, enviada tras cada cierre de prioridad 2, tiene una tasa de respuesta del 41 por ciento (ilustrativo) y una valoración mediana de 3 en una escala de cinco puntos, muy por debajo del nivel de 4 que el responsable del servicio y los jefes de planta habían acordado como XLA. La brecha sandía es visible por tercer mes consecutivo.

El equipo mira la distribución. La mediana del restablecimiento es de 1 hora 40 minutos (ilustrativo), pero el percentil 95 es de 3 horas 50 minutos (ilustrativo), y la proporción de casi incumplimientos es del 31 por ciento (ilustrativo): casi un tercio de los incidentes "cumplidos" terminó en la última décima parte del tiempo permitido. Miran la proporción de pausa del reloj y descubren que el 22 por ciento (ilustrativo) del tiempo transcurrido se pasa en el estado "a la espera del cliente". Una muestra de diez tickets pausados muestra cuatro en que la planta había respondido y el ticket siguió pausado hasta el turno siguiente, y en otros tres el equipo de aplicaciones esperaba al equipo de infraestructura. El tiempo de espera de traspaso en el percentil 85 de la cola de infraestructura es de 2 horas 10 minutos (ilustrativo) frente a un OLA de 30 minutos (ilustrativo), y la tasa de cumplimiento del OLA de ese traspaso es del 58 por ciento (ilustrativo).

La decisión es práctica. Cambian la regla del reloj para que "a la espera del cliente" pueda usarse solo tras una petición documentada al cliente, y el reloj se reanude en la siguiente respuesta. Añaden una vía de guardia para la cola de infraestructura durante el horario de las plantas y acuerdan un OLA más pequeño, con una revisión al cabo de un mes. Añaden la medida de experiencia y la brecha sandía al informe mensual de una página e invitan a un jefe de planta a la revisión. También bajan el SLO interno a un restablecimiento más estricto de cuatro horas para el 95 por ciento de los incidentes, para que el equipo note los problemas antes de que el SLA esté en riesgo.

Un riesgo de manipulación aparece en el segundo mes. Tras el cambio de la regla de pausa, el cumplimiento cae al 89 por ciento (ilustrativo), y un gerente pide al centro de servicios que "vuelva a comprobar las prioridades". El equipo detecta un pico de rebajas de prioridad 2 a prioridad 3, empareja el cumplimiento con las tasas de reclasificación y de reapertura y exige un motivo en el registro para cualquier cambio de prioridad. En el tercer mes, el cumplimiento es del 91 por ciento (ilustrativo), el percentil 95 es menor, la proporción de casi incumplimientos ha bajado y la valoración mediana de experiencia ha subido a 3,8 (ilustrativo). La brecha se estrecha porque el trabajo mejoró, y los números son creíbles.

## Perspectiva por sector

**Startup.** Una empresa pequeña a menudo no tiene ningún SLA formal, solo una promesa informal a unos pocos primeros clientes. Escribe una página que nombre el horario del servicio, una meta de respuesta y una meta de restablecimiento enunciada como un percentil, y mantén un SLO dentro del equipo. Las conversaciones con los clientes ocupan el lugar de un XLA, así que anota cada mes lo que dicen los tres clientes más importantes.

**Pequeña empresa.** Un equipo de TI pequeño suele depender mucho de proveedores externos, por lo que los contratos de apoyo importan más que los OLA internos. Comprueba que el compromiso de cada proveedor sea al menos tan estricto como el SLA que das a tus propios usuarios y sigue el desempeño real del proveedor (véase el tema 8.4, Métricas de proveedores y contratos). Una sencilla página mensual, con cumplimiento, casi incumplimientos y una breve encuesta a los usuarios, basta.

**Gran empresa.** Las grandes organizaciones necesitan un registro de acuerdos y una métrica de cobertura. Estandariza las reglas del reloj y las definiciones entre servicios para que las consolidaciones tengan sentido (véase el tema 1.4, Gobernanza y propiedad de las métricas). Cuidado con el efecto sandía en las consolidaciones de gestión, donde cientos de líneas verdes ocultan unos pocos servicios con un grave dolor para el usuario.

**Gobierno y sector público.** Los organismos públicos suelen tener normas de servicio legales, normas de contratación que fijan los SLA en contratos y el deber de publicar resultados. Mantén clara y verificable la medida publicada, conserva las reglas del reloj y la evidencia para la auditoría y trata a los ciudadanos como clientes con voz en la revisión (véase el tema 8.5, Informes regulatorios y gubernamentales). Donde el contrato sea rígido, añade una medida de experiencia a su lado sin cambiar la redacción del contrato.

## Caso de negocio: motivaciones, ROI y TCO

El argumento a favor de mejores métricas de acuerdos es un argumento de confianza y de evitar esfuerzo desperdiciado. Los informes que coinciden con lo que sienten los usuarios reducen los escalados y las disputas, acortan la discusión mensual sobre de quién es el número correcto y permiten a los líderes financiar el trabajo que importa. Unos OLA claros reducen los retrasos de traspaso, que están entre los mayores contribuyentes a los restablecimientos largos. Una brecha sandía, detectada pronto, evita el mayor costo de que una relación con un cliente o una renovación de contrato salga mal.

Los costos son modestos: tiempo para escribir y revisar los acuerdos, datos fiables de relojes y de traspasos (véase el tema 1.5, Fuentes de datos e instrumentación), una breve encuesta y una revisión mensual. El costo total crece con el número de acuerdos, así que unos pocos y sencillos son más baratos de poseer.

El retorno aparece como menos incumplimientos sorpresa, menos tiempo dedicado a explicar informes y decisiones de inversión mejor informadas. Trátalos como patrones que observar y comparar en el tiempo, no como un cálculo. Compara el esfuerzo de una revisión mensual con el costo de una disputa escalada o de una renovación perdida en tu propia organización, usando tus propios datos (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Informar solo promedios.** Un promedio oculta una larga cola de trabajo tardío. Informa percentiles, la proporción de casi incumplimientos y el recuento.
- **Escribir el SLA en torno a lo que es fácil de alcanzar.** Una meta elegida por comodidad da un informe siempre verde. Parte de lo que necesita el cliente y muestra la brecha abiertamente.
- **Pausar el reloj para mejorar el número.** Los estados de pausa generosos convierten el SLA en ficción. Publica las reglas de pausa, audita muestras e informa la proporción de pausa.
- **Los OLA como arma.** Un OLA usado para culpar al equipo siguiente enseña a los equipos a rebotar el trabajo. Trata los incumplimientos como información sobre la cola y arregla el flujo.
- **Informes guiados por penalizaciones.** Las penalizaciones fuertes fomentan la clasificación defensiva y las disputas sobre el reloj. Usa las penalizaciones con moderación y empareja con tasas de reapertura y de reclasificación.
- **Datos de experiencia sin tasa de respuesta.** Una puntuación alta de una muestra diminuta y autoseleccionada engaña. Muestra la tasa de respuesta y la composición de los encuestados junto a cada resultado.
- **Acuerdos que nadie revisa.** Los acuerdos obsoletos describen un servicio que ya no existe. Programa revisiones y retira lo que no se use.
- **Metas individuales a partir de acuerdos de equipo.** Dividir un SLA de equipo en cuotas personales lleva a cierres apresurados y a clasificaciones. Mantén el acuerdo a nivel del servicio y del equipo.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Diseño de los acuerdos | Promesas verbales o plantillas copiadas; metas elegidas por costumbre | Algunos SLA escritos; OLA raros; los relojes difieren entre equipos | Una plantilla breve con metas basadas en resultados, percentiles y reglas de reloj escritas | Acuerdos revisados con una cadencia, con el cliente y ligados a los SLO | Capas de SLA, OLA, contrato con proveedores y SLO ajustadas conjuntamente a medida que cambian las condiciones |
| Calidad de la medición | Recuentos manuales; promedios; pausas sin documentar | Cumplimiento basado en herramientas para algunos servicios; uso de pausas sin revisar | Una definición y una fuente de datos; distribuciones y proporción de pausa mostradas | Casi incumplimientos, causas de incumplimientos y esperas de traspaso con seguimiento de su tendencia y muestreados | Datos de equipos y proveedores conciliados; definiciones revisadas cuando dejan de informar decisiones |
| Vínculo con la experiencia | Sin comentarios de los usuarios ligados al SLA | Encuestas ad hoc para algunos servicios | Una breve encuesta para los recorridos clave, con la tasa de respuesta mostrada | Metas de experiencia acordadas con los clientes y brecha sandía informada | Las medidas de experiencia y operativas orientan el trabajo de mejora compartido con los clientes |
| Uso en la mejora | Informado tras una queja | Incumplimientos discutidos en reuniones de equipo | Revisión mensual con responsables y acciones | Las causas de incumplimientos alimentan el trabajo de mejora y de problemas financiado | Clientes, proveedores y equipos planifican la mejora conjuntamente desde la misma vista |

## Lista de verificación

- [ ] Cada SLA indica su resultado, su meta como percentil o proporción y su población.
- [ ] El evento de inicio, el evento de fin y las condiciones de pausa permitidas están escritos para cada meta.
- [ ] Cada SLA de cara al cliente tiene OLA o contratos con proveedores que encajan dentro de él, cada uno con un equipo propietario con nombre.
- [ ] Los objetivos internos son más estrictos que las metas de SLA prometidas.
- [ ] Los informes muestran la distribución, el recuento, la proporción de casi incumplimientos y la proporción de pausa del reloj.
- [ ] Se lee cada mes una muestra de tickets pausados y cerrados.
- [ ] Cada servicio clave tiene una medida de experiencia con un nivel acordado, y se muestra la tasa de respuesta.
- [ ] La brecha sandía se sigue y se revisa con un representante del cliente.
- [ ] Los acuerdos se revisan según un calendario y se retiran cuando no se usan.
- [ ] Ninguna métrica de acuerdos se usa para clasificar a personas individuales.

## Prompts de IA

**Revisa un SLA en busca de problemas de reloj y de redacción.**

```text
Este es el texto de nuestro SLA de [service]: [paste agreement text]. Las metas
son [list of targets], medidas en [tool]. Identifica ambigüedades en el evento
de inicio, el evento de fin y las condiciones de pausa, lugares donde un
promedio podría ocultar una larga cola y redacción que un cliente podría leer
de forma distinta a nosotros. Sugiere una redacción más clara y las preguntas
que debería hacer al cliente. No inventes valores de referencia ni conclusiones
legales. Enumera tus supuestos.
```

**Redacta un OLA entre dos equipos.**

```text
Necesito un breve acuerdo de nivel operativo entre [sending team] y [receiving
team] para respaldar nuestro SLA de [SLA target] de [service]. El traspaso típico
es [description], y la cola es [queue name or tool]. Redacta un OLA de una
página con el propósito, la respuesta esperada, las reglas del reloj, una forma
de zanjar disputas y una fecha de revisión. Mantén un tono cooperativo y no
sugieras penalizaciones salvo que te lo pida. No inventes valores meta; pídemelos.
Enumera tus supuestos.
```

**Busca una brecha sandía en nuestros datos.**

```text
Este es un resumen del cumplimiento del SLA y de una medida de experiencia de
[list of services] durante [period]: [paste the table]. Identifica los
servicios donde el SLA se lee como cumplido y la experiencia se lee como mala, y
sugiere posibles explicaciones que investigar, como pausas del reloj,
reclasificación de prioridades o una medida mal elegida. Propón preguntas y una
pequeña muestra de tickets que leer para cada uno. No supongas causas ni
inventes umbrales. Enumera tus supuestos.
```

**Diseña una breve encuesta de experiencia para un XLA.**

```text
Queremos añadir una medida de experiencia para [journey, for example getting a
new laptop] para [audience]. Redacta [number] preguntas neutrales, un plan de
cuándo y cómo enviarlas, y cómo informar la tasa de respuesta y la composición
de los encuestados. Señala la redacción que pueda sesgar las respuestas y sugiere
cómo acordar el nivel meta con [customer representative role]. No inventes
puntuaciones de referencia. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar qué tema define la métrica que hay detrás de una línea del SLA y la barrera de protección que debe acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen en sintonía la plantilla, las reglas del reloj y la tabla de manipulación.

## Puntos clave

- Un SLA es una promesa al cliente, un OLA es una promesa entre equipos y un XLA es un resultado de experiencia acordado; cada uno necesita su propia medida y responsable.
- Informa percentiles, recuentos, casi incumplimientos y la proporción de pausa del reloj, porque los promedios y las pausas silenciosas producen informes verdes sobre un mal servicio.
- Deriva los OLA del SLA y mantén los objetivos internos más estrictos que la promesa.
- Empareja cada SLA con una medida de experiencia del mismo recorrido, e informa la brecha sandía como un hallazgo sobre el que actuar.
- Revisa los acuerdos según un calendario con el cliente en la sala, y retira lo que nadie usa.
- Mantén cada métrica de acuerdos a nivel de servicios y equipos, nunca de individuos.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
