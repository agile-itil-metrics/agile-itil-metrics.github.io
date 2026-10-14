# Métricas de riesgos y controles

**El trabajo de riesgos es una conversación continua sobre qué podría salir mal y qué estamos haciendo al respecto, así que mantén el registro corto y vivo, pon a prueba los controles que importan y desconfía de cualquier número que haga parecer ordenada la incertidumbre.**

## Resumen y motivación

Todo cambio en un servicio conlleva riesgo, y también lo conlleva dejarlo como está. La [gestión de riesgos](https://en.wikipedia.org/wiki/Risk_management) es la identificación, la evaluación y la priorización de los riesgos, seguidas de una acción coordinada para reducirlos, aceptarlos, transferirlos o evitarlos. ITIL trata el riesgo como un hilo que recorre todas las prácticas: la habilitación de cambios decide cuánto escrutinio necesita un cambio, la continuidad del servicio planifica la interrupción y la seguridad de la información protege frente a las amenazas. Las formas de trabajo ágiles y DevOps reducen el riesgo de otra manera. Los cambios pequeños entregados de forma continua, con retroalimentación rápida y capacidad de revertir, hacen menos peligroso cada cambio y hacen visibles antes los problemas.

Las dos visiones se encuentran en las métricas. Un equipo que entrega de forma continua sigue necesitando conocer sus riesgos principales, quién los posee y si funcionan los controles en los que se apoya. Una función de riesgos que insiste en una aprobación pesada sigue necesitando evidencia de que sus controles reducen el daño y no se limitan a frenar a la gente. Este tema da las medidas para ambas, y se apoya en las prácticas descritas en los temas vecinos sobre seguridad y auditoría (véanse el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades, y el tema 8.3, Métricas de cumplimiento y auditoría).

Se repiten cuatro términos.

- **Riesgo:** un evento o condición incierto que, si ocurre, afecta a los objetivos. Tiene una causa, un evento y una consecuencia, y una probabilidad y un impacto que normalmente se estiman, no se conocen.
- **Registro de riesgos:** la lista de riesgos identificados con responsables, calificaciones y respuestas. Un [registro de riesgos](https://en.wikipedia.org/wiki/Risk_register) es una herramienta de trabajo cuando está al día y se lee, y un artefacto de cumplimiento cuando no.
- **Control:** una acción o mecanismo que reduce un riesgo, como una revisión, una prueba automatizada, una aprobación, una segregación de funciones o una alerta de monitorización. El conjunto de controles en los que se apoya una organización es su sistema de [control interno](https://en.wikipedia.org/wiki/Internal_control).
- **Indicador clave de riesgo (KRI):** una medida que señala un cambio en el nivel de un riesgo antes de que ocurra la pérdida. Un [indicador clave de riesgo](https://en.wikipedia.org/wiki/Key_risk_indicator) es útil cuando se adelanta a un evento y cuando alguien actúa sobre él.

La cuantificación del riesgo tiene debilidades conocidas. Una [matriz de riesgos](https://en.wikipedia.org/wiki/Risk_matrix), que sitúa la probabilidad frente al impacto en una cuadrícula de celdas coloreadas, se usa mucho y se critica mucho: las calificaciones son subjetivas, riesgos distintos pueden caer en la misma celda por razones distintas y la aritmética de multiplicar puntuaciones ordinales no tiene una base firme. Los eventos raros y graves, descritos a veces mediante la [teoría del cisne negro](https://en.wikipedia.org/wiki/Black_swan_theory), son especialmente difíciles de calificar. La respuesta honesta es usar la matriz como ayuda para la conversación, mostrar rangos y respaldarla con evidencia sobre controles e incidentes. El marco de las tres líneas de defensa, que separa a los equipos que poseen el riesgo, los equipos que lo supervisan y el aseguramiento independiente, ofrece una estructura de roles, y funciona mejor cuando la primera línea, los equipos de entrega y de operaciones, posee de verdad sus riesgos.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica a los informes de riesgos de una manera particular. Cuando una calificación en rojo atrae escrutinio, la gente califica los riesgos como ámbar. Cuando un riesgo cerrado es un éxito, la gente cierra riesgos sin tratarlos (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Mantén el registro corto y al día.** Unos pocos riesgos bien poseídos y revisados superan a cientos que no lo están.
- **Haz que la primera línea posea sus riesgos.** Las personas más cercanas al trabajo lo conocen mejor.
- **Pon a prueba los controles en los que te apoyas.** Un control que nunca se ha probado es una esperanza.
- **Prefiere indicadores adelantados sobre los que alguien actúa.** Un indicador sin plan de respuesta es decoración.
- **Muestra rangos y evidencia, no falsa precisión.** Las calificaciones son estimaciones.
- **Reduce el riesgo haciendo el cambio pequeño y reversible.** La entrega continua con reversión rápida es un control.
- **Habla del riesgo sin culpas.** El informe honesto es la materia prima de toda la práctica.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vigencia de la revisión de riesgos | Proporción de riesgos abiertos revisados por su responsable dentro del intervalo acordado | riesgos revisados dentro del intervalo / riesgos abiertos | porcentaje | Fechas de revisión del registro de riesgos | Gestión de riesgos; mejora continua | Riesgos revisados en las conversaciones de planificación y de revisión | Mensual |
| Cobertura de responsables | Proporción de riesgos abiertos con un responsable con nombre y actual que aceptó la responsabilidad | riesgos con un responsable actual confirmado / riesgos abiertos | porcentaje | Registro de riesgos unido al directorio de personas | Gestión de riesgos | Riesgos propiedad del equipo en la lista de pendientes | Mensual |
| Cobertura de pruebas de controles | Proporción de controles clave probados en su operación dentro del ciclo exigido | controles clave probados en el ciclo / controles clave | porcentaje | Registro de controles y registros de pruebas | Gestión de riesgos; gestión de la seguridad de la información | Comprobaciones automatizadas en la canalización | Trimestral |
| Tasa de eficacia de controles | Proporción de controles probados que se comprobó que operan como se diseñaron | controles hallados eficaces / controles probados | porcentaje | Resultados de las pruebas | Gestión de riesgos; mejora continua | Pruebas automatizadas que pasan por las razones correctas | Trimestral |
| Tiempo de respuesta a incumplimientos de KRI | Tiempo desde que un indicador clave de riesgo cruza su umbral hasta una decisión registrada | mediana y percentil 85 de horas o días desde el incumplimiento hasta la decisión | horas o días | Monitorización de KRI y registro de decisiones | Gestión de riesgos; monitorización y gestión de eventos | Reacción ante una señal de producción | Mensual |
| Puntualidad de los planes de tratamiento | Proporción de tratamientos de riesgos completados en su fecha comprometida | tratamientos completados en fecha / tratamientos que vencen en el periodo | porcentaje | Registro de riesgos y seguimiento de acciones | Gestión de riesgos; mejora continua | Acciones de mejora entregadas | Trimestral |
| Proporción de cambios basados en el riesgo | Proporción de cambios aprobados por vías basadas en el riesgo con la evidencia del control adjunta | cambios aprobados por una vía basada en el riesgo con la evidencia exigida / cambios del periodo | porcentaje | Registros de cambios | Habilitación de cambios; gestión de riesgos | Cambios entregados de forma continua con comprobaciones automatizadas | Mensual |

Define en el registro el intervalo de revisión y la lista de controles clave. Un control está "probado" solo cuando la prueba examina evidencia de operación, no solo del diseño. El reloj del KRI arranca cuando el indicador cruza su umbral, según lo registra el sistema de monitorización, y se detiene en una decisión que se escribe, que puede ser actuar, aceptar o cambiar el umbral. Excluye del denominador los riesgos que se están retirando solo tras una decisión de cierre registrada.

## Recomendaciones

### Mantén viva la conversación sobre riesgos

**1. Mantén corto el registro y escribe cada riesgo en una forma estándar.** Usa una frase de la forma "Debido a [causa], puede ocurrir [evento], con la consecuencia de [consecuencia]." Limita el registro a los riesgos que cambiarían una decisión o un plan. Fusiona los duplicados, divide los vagos y retira los riesgos que han pasado. Una lista de unas pocas docenas de riesgos que la gente discute vale más que mil que nadie lee.

**2. Asigna cada riesgo a un responsable que pueda actuar.** El responsable es la persona con autoridad sobre la respuesta, normalmente en el equipo de entrega o de operaciones, no en la función de riesgos. Confirma la propiedad con la persona, y revísala cuando la gente cambie de rol. La cobertura de responsables mide esto, y un riesgo sin responsable es un hallazgo.

**3. Revisa los riesgos en las conversaciones que ya ocurren.** Plantea los riesgos principales en la planificación, en la revisión y en las revisiones de incidentes, en lugar de crear una reunión aparte. El hábito ágil de reflexionar con regularidad sobre cómo ser más eficaces es un hogar natural para la pregunta "¿qué podría perjudicarnos a continuación?" Registra el resultado en el registro.

**4. Empareja las calificaciones con evidencia y rangos.** Para cada riesgo importante, registra qué te hace pensar que es probable o grave: incidentes, casi accidentes, resultados de pruebas, historial de proveedores. Da un rango de probabilidad y de impacto donde puedas, y di cuán inseguro estás. No combines puntuaciones ordinales en un solo número ni lo trates como una medición. Si usas una matriz, úsala para iniciar una discusión (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

### Pon a prueba los controles

**5. Nombra los controles clave y para qué sirve cada uno.** Para cada riesgo importante, enumera los pocos controles en los que te apoyas y cómo sería el fallo de cada uno. Un registro de controles que enumera cientos de actividades menores oculta los que importan. Incluye los controles automatizados de la canalización, como las pruebas, las comprobaciones de política y las puertas de aprobación.

**6. Prueba la operación, no solo el diseño.** Una revisión del diseño pregunta si el control funcionaría si se operara. Una prueba de operación pregunta si se operó y funcionó en el periodo, examinando muestras de evidencia. Planifica las pruebas en un ciclo que se ajuste al riesgo, registra los resultados y da seguimiento a los fallos. Donde sea posible, automatiza la evidencia, de modo que la prueba ocurra de forma continua.

**7. Trata los fallos de controles como información.** Una prueba fallida es el sistema de controles funcionando. Registra el fallo, pregunta por qué y corrige la causa. La tasa de eficacia de controles debe leerse con el seguimiento: los fallos encontrados y corregidos con rapidez son más sanos que una tasa perfecta que proviene de pruebas débiles.

**8. Usa el aseguramiento independiente donde aporte valor.** La auditoría interna o un revisor independiente pueden probar los controles que posee la primera línea y supervisa la segunda. La independencia protege frente a corregir tu propio trabajo. Coordínate para que los equipos no sean probados por tres grupos por lo mismo.

### Usa bien los indicadores y las decisiones

**9. Elige unos pocos indicadores adelantados por riesgo importante.** Un indicador clave de riesgo debe ser barato de medir, estar vinculado a una causa y emparejarse con un umbral y una respuesta. Por ejemplo, la antigüedad de la vulnerabilidad crítica más antigua señala el riesgo de seguridad, y la proporción de cambios que necesitan un manejo de emergencia señala el riesgo de cambios. Define quién mira el indicador y qué hará al llegar al umbral (véase el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades).

**10. Registra la decisión en cada incumplimiento.** Cuando un indicador cruza un umbral, alguien decide: actuar, aceptar o ajustar el umbral. Anota la decisión y el motivo. Esto construye un historial que muestra si los umbrales están bien fijados y si la respuesta es oportuna.

**11. Haz de la aprobación basada en el riesgo la opción por defecto para el cambio.** En un entorno de entrega continua, sustituye los comités de aprobación generales por vías basadas en el riesgo: comprobaciones automatizadas y revisión entre pares para los cambios estándar de bajo riesgo, y una revisión más completa para los pocos cambios de alto riesgo (véase el tema 4.3, Métricas de habilitación de cambios). Adjunta la evidencia de que los controles se ejecutaron. Esto reduce a la vez el riesgo y el retraso, porque los cambios pequeños con evidencia automatizada son más seguros que los grandes con una firma.

**12. Aprende de las pérdidas y de los casi accidentes.** Tras los incidentes y los sustos, actualiza el registro: ¿estaba el riesgo, estaba bien calificado, funcionó el control? Usa las respuestas para mejorar ambos. El ciclo entre los eventos y el registro es lo que mantiene honesto el registro (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Vigencia de la revisión de riesgos | Marcar riesgos como revisados sin discusión; cambiar el intervalo | Muestrear las revisiones en busca de sustancia; intervalo fijo en el registro |
| Cobertura de responsables | Asignar responsables sin su conocimiento; nombrar a una persona de alto rango sin autoridad | Confirmación del responsable; comprobar que los responsables pueden actuar sobre la respuesta |
| Cobertura de pruebas de controles | Probar los controles fáciles; contar las revisiones del diseño como pruebas de operación | Lista de controles clave fijada por un tercero; tipo de prueba registrado |
| Tasa de eficacia de controles | Probar muestras pequeñas; elegir muestras que pasan | Método de muestreo independiente del responsable; tamaño de la muestra registrado |
| Tiempo de respuesta a incumplimientos de KRI | Cambiar el umbral tras un incumplimiento; registrar una decisión sin contenido | Registro de cambios de umbral; muestra del contenido de las decisiones |
| Puntualidad de los planes de tratamiento | Fijar fechas fáciles; redefinir la finalización | Fechas acordadas con el responsable en la aprobación; comprobar que la calificación del riesgo se movió |
| Proporción de cambios basados en el riesgo | Clasificar los cambios como de bajo riesgo para evitar la revisión; adjuntar evidencia que no produjeron los controles | Muestrear la clasificación frente a las reglas; evidencia automatizada de la canalización |

Una lectura sana es un registro corto sobre el que la gente discute, responsables que conocen sus riesgos, controles probados con algunos fallos encontrados y corregidos, indicadores que guían decisiones reales y menos aprobaciones pesadas para los cambios pequeños.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Matriz de riesgos | Rápida, visual, iniciadora de conversación | Subjetiva; falsa precisión; aritmética ordinal |
| Rangos cuantificados | Más honestos sobre la incertidumbre | Necesitan datos y habilidad; esfuerzo |
| Comités de aprobación pesados | Control visible | Lentos; fomentan agrupar los cambios |
| Comprobaciones automatizadas basadas en el riesgo | Rápidas y coherentes | Necesitan ingeniería; las comprobaciones automatizadas pueden fallar |
| La función central de riesgos posee los riesgos | Coherencia | Lejos del trabajo; responsables desimplicados |
| Propiedad de la primera línea | Conocimiento y rendición de cuentas | Calidad variable; necesita supervisión |
| Pruebas periódicas de controles | Eficientes para controles estables | Pasan por alto la deriva entre pruebas |
| Monitorización continua de controles | Evidencia oportuna | Esfuerzo de herramientas; ruido |

La respuesta en prosa es situar la propiedad en los equipos, aplicar una supervisión central ligera y pruebas independientes, automatizar la evidencia donde sea posible y usar las calificaciones como detonantes de la conversación.

## Preguntas para conversar con tu equipo

**1. ¿Cuáles son los tres riesgos con más probabilidad de perjudicar a este servicio en el próximo año, y quién es responsable de cada uno?**
Pide a cada miembro que escriba tres riesgos en privado, y compáralos luego. El solapamiento y las diferencias son informativos. El facilitador debe registrar quién actuaría sobre cada riesgo. Acordad los tres principales y confirmad los responsables.

**2. ¿De qué control dependemos más, y cuándo comprobamos por última vez que funciona?**
Elige un control, como una regla de revisión de código, una copia de seguridad o un paso de aprobación. Sigue la última vez que se examinó evidencia de su operación. Si nadie lo sabe, planifica una prueba. La conversación muestra la diferencia entre diseño y operación.

**3. ¿Qué nos haría cambiar una calificación de ámbar a rojo, y quién lo notaría?**
Discutid los indicadores y los umbrales. Pregunta si el equipo ha rebajado alguna vez una calificación para evitar atención, y qué presión lo causó. Acordad qué evidencia justificaría un cambio y cómo hacer que decir rojo sea algo seguro.

**4. ¿Qué aprobaciones frenan nuestros cambios sin reducir el riesgo?**
Enumera las aprobaciones que necesita un cambio típico y, para cada una, pregunta qué riesgo atiende y si alguna vez detuvo un cambio. Propón sustituir una por una comprobación automatizada. Acordad qué evidencia mostraría que el cambio es seguro.

**5. Cuando falló un control, ¿cómo nos enteramos y qué hicimos?**
Recuerda un fallo reciente. ¿Lo encontró una prueba, un incidente o un auditor? Discutid cómo sería un ciclo más sólido. Incluye cómo se trató a la persona que lo encontró.

**6. ¿Qué riesgos hemos aceptado, y cuándo revisamos esa decisión?**
Enumera los riesgos aceptados y las fechas de revisión. Comprueba que cada uno tiene un responsable y un motivo. Un riesgo aceptado sin fecha de revisión es un riesgo que nadie vigila.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen la mayor parte del riesgo operativo. Deben mantener una lista corta de sus propios riesgos, discutirlos en la planificación y en la revisión e incorporar controles a la canalización para que la evidencia sea automática. Se benefician de las vías de cambio basadas en el riesgo que dejan fluir los cambios de bajo riesgo, y deben ser honestos sobre lo que podría salir mal.

### Equipos de servicio y operaciones

Los equipos de operaciones operan los controles: copias de seguridad, monitorización, revisiones de acceso y pruebas de recuperación. Deben conservar la evidencia de operación, probar los controles en un ciclo regular y plantear pronto los incumplimientos de indicadores. Cargan con el costo de los controles pesados y deben decir cuáles aportan poco.

### Liderazgo y gobernanza

Los líderes fijan el apetito de riesgo y deciden cuánta fricción es aceptable. Deben pedir una lista corta de los riesgos principales con responsables y evidencia, acoger las calificaciones en rojo, financiar las pruebas de controles y apoyar el aseguramiento independiente. La gobernanza debe comprobar que el registro refleja los incidentes y los casi accidentes, y no debe premiar los informes de aspecto ordenado.

### Clientes y usuarios

Los usuarios soportan las consecuencias de los riesgos que se materializan, y a menudo los conocen antes que el registro. Deben tener una forma de señalar inquietudes y que se les informe de los riesgos que les afectan, dentro de los límites de la confidencialidad. Su experiencia de incidentes y de cambios es evidencia para las revisiones de riesgos.

## En la práctica: un ejemplo de ITIL ágil

El grupo digital de una empresa nacional de energía opera la facturación de clientes, una aplicación móvil e integraciones con las operaciones de la red. Los números siguientes son ilustrativos.

El registro de riesgos del grupo tiene 340 entradas, depuradas por última vez hace tres años. La vigencia de la revisión de riesgos es del 22 por ciento, y 61 riesgos tienen responsables que se han ido. La matriz muestra 85 riesgos en rojo, y nadie lee el informe. La nueva jefa de aseguramiento de servicios propone un reinicio. Con los equipos de entrega recorta el registro a los riesgos que cambiarían una decisión, y acaba con 38. Asigna cada uno a un responsable con nombre del equipo que puede actuar, y lo confirman. Elige 12 controles clave y prueba la operación de cada uno, en lugar de revisar el diseño. Cinco fallan: dos restauraciones de copias de seguridad nunca se habían probado, una revisión de accesos se había omitido y dos aprobaciones de cambios se habían firmado sin evidencia de pruebas.

El equipo corrige los fallos y sustituye el comité de aprobación de cambios para los cambios estándar por vías basadas en el riesgo. Las pruebas automatizadas y la revisión entre pares son los controles, y la canalización adjunta la evidencia al registro del cambio. Cada riesgo importante recibe uno o dos indicadores adelantados con umbrales y respuestas. Para el riesgo de una caída prolongada de la facturación, los indicadores son la antigüedad de la vulnerabilidad crítica más antigua y el número de restauraciones de copias fallidas en el trimestre. El primer trimestre muestra a los responsables confirmando los 38 riesgos, una vigencia de revisión del 91 por ciento, una tasa de eficacia de controles de 7 de 12 en la primera prueba y de 12 de 12 tras las correcciones, y una mediana del tiempo de respuesta a incumplimientos de KRI de 2 días. La proporción de cambios por vías basadas en el riesgo es del 64 por ciento.

El director de riesgos pide que el número de riesgos en rojo baje a la mitad en un año. La jefa de aseguramiento de servicios propone seguir la puntualidad de los planes de tratamiento y la eficacia de los controles, y explica que el recuento de riesgos en rojo puede bajar recalificando, y que prefiere ver calificaciones en rojo honestas. La decisión se registra, y el informe del trimestre siguiente incluye las decisiones muestreadas detrás de cada rebaja.

## Perspectiva por sector

**Startup.** Los riesgos son sobre todo quedarse sin dinero, perder a personas clave y una caída grave. Mantén una lista de una página con los cinco principales, revísala cada mes y prueba las copias de seguridad y las restauraciones. Incorpora controles a la canalización desde el principio, ya que son más baratos que adaptarlos después.

**Pequeña empresa.** Dominan un puñado de riesgos: dependencia de una persona clave, un único proveedor, el ransomware y la pérdida de datos. Mantén una lista corta con responsables, prueba las restauraciones y mantén al día los seguros y los datos de contacto. Resiste los marcos pesados, y toma de ellos lo que encaje.

**Gran empresa.** La escala pide una taxonomía común, herramientas ligeras para el registro y las tres líneas de defensa en la práctica. Haz que la primera línea posea sus riesgos, mantén pequeña y consultiva la segunda línea y haz eficientes las pruebas independientes. Evita pruebas duplicadas entre auditoría, riesgos y cumplimiento.

**Gobierno y sector público.** La gestión de riesgos suele ser un deber formal con marcos estándar, comités de auditoría e informes públicos. Alinéate con el marco exigido, documenta las declaraciones de apetito de riesgo y conserva la evidencia. La rendición de cuentas pública hace más valiosas las calificaciones en rojo honestas, y también más difíciles (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el tiempo de los responsables para revisar riesgos, el esfuerzo de definir los controles clave y probarlos, las herramientas para el registro y la monitorización de indicadores si no existen ya y el costo del aseguramiento independiente. Automatizar la recogida de evidencia lleva esfuerzo de ingeniería y luego reduce el costo recurrente.

Los retornos son menos sorpresas, una aprobación de cambios más rápida y ligera y un aseguramiento más creíble. Un registro podado y unas vías de cambio basadas en el riesgo ahorran el tiempo que consumían los grandes órganos de aprobación. Las pruebas de controles fallidas halladas antes de un incidente previenen pérdidas difíciles de valorar. Construye el caso con tus propios datos: el tiempo dedicado por aprobación de cambio antes y después, el número de fallos de controles hallados por las pruebas frente a los hallados por incidentes o auditores y el costo de incidentes pasados que un control habría prevenido. Evita citar estadísticas de pérdidas del sector sin una fuente y un método rastreables.

## Antipatrones y trampas

- **Un registro que crece para siempre.** Nadie lo lee. Pódalo hasta los riesgos que importan.
- **Calificaciones sin evidencia.** Son opiniones en color. Adjunta evidencia y rangos.
- **Responsables solo de nombre.** El riesgo recae en alguien que no puede actuar. Confirma la propiedad con las personas adecuadas.
- **Probar el diseño y llamarlo aseguramiento.** Un control que podría funcionar puede no haberlo hecho. Prueba la operación.
- **Informar solo el recuento de riesgos en rojo.** Los recuentos bajan recalificando. Mira los tratamientos y los resultados de los controles.
- **Comités de aprobación para cada cambio.** Frenan los cambios pequeños y enseñan a agrupar. Usa vías basadas en el riesgo.
- **Castigar las calificaciones en rojo.** Entonces se ocultan los riesgos. Premia el aviso temprano.
- **Culturas de riesgos y de entrega separadas.** El trabajo de riesgos hecho a los equipos, no con ellos, produce teatro de cumplimiento.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Registro y propiedad | Lista larga y obsoleta | El registro existe, en parte con responsables | Registro corto con responsables de primera línea confirmados y fechas de revisión | Revisiones en las conversaciones del equipo; evidencia y rangos adjuntos | Riesgos compartidos entre equipos y proveedores con responsables conjuntos |
| Controles | Se supone que funcionan | Diseño documentado | Controles clave con nombre; pruebas de operación en un ciclo | Fallos con seguimiento; evidencia automatizada donde sea posible | Monitorización continua de controles con supervisión humana y aseguramiento independiente |
| Decisiones y cambio | Aprobaciones por comité | Algunos cambios estándar preaprobados | Vías basadas en el riesgo con evidencia adjunta | Indicadores con umbrales y decisiones registradas; vías ajustadas a partir de los resultados | Decisiones de riesgo integradas en las canalizaciones de toda la organización y la cadena de suministro |

## Lista de verificación

- [ ] El registro es corto, con los riesgos escritos en la forma de causa, evento y consecuencia.
- [ ] Todo riesgo tiene un responsable de primera línea confirmado que puede actuar.
- [ ] Los riesgos se revisan en las conversaciones regulares del equipo.
- [ ] Los controles clave están nombrados y se prueba su operación en un ciclo indicado.
- [ ] Los fallos de controles se registran, se explican y se corrigen.
- [ ] Cada riesgo importante tiene uno o dos indicadores adelantados con umbrales y respuestas.
- [ ] Se registran las decisiones en los incumplimientos de indicadores.
- [ ] Existen vías de cambio basadas en el riesgo, con la evidencia adjunta automáticamente donde sea posible.
- [ ] Los riesgos aceptados tienen un responsable, un motivo y una fecha de revisión.
- [ ] Los incidentes y los casi accidentes actualizan el registro.

## Prompts de IA

**Reescribe riesgos en una forma estándar.**

```text
Aquí hay [number] entradas de nuestro registro de riesgos: [paste, with
sensitive details removed]. Reescribe cada una en la forma "Debido a [cause],
puede ocurrir [event], con la consecuencia de [consequence]." Señala las
entradas que sean vagas, duplicadas o que en realidad sean problemas que ya han
ocurrido. Sugiere cuáles podrían fusionarse o retirarse. No las califiques.
Enumera tus supuestos y lo que hay que confirmar con los responsables.
```

**Diseña una prueba de control.**

```text
Para el control [describe, for example quarterly access review for the billing
system], diseña una prueba de operación. Incluye qué evidencia examinar, cómo
seleccionar una muestra sin sesgo, qué cuenta como superado o fallido, cómo
registrar los resultados y cómo automatizar con el tiempo la recogida de
evidencia. No supongas herramientas concretas. Enumera tus supuestos y los
riesgos del diseño de la prueba.
```

**Propón indicadores adelantados para un riesgo.**

```text
Riesgo: [describe in cause, event, consequence form]. Propón hasta tres
indicadores adelantados baratos de medir y vinculados a la causa, con una
respuesta sugerida ante un incumplimiento del umbral y la forma en que cada
indicador podría engañar. No inventes valores de umbral; describe cómo
deberíamos calibrarlos a partir de nuestros propios datos. Enumera tus
supuestos.
```

**Revisa un proceso de aprobación de cambios.**

```text
Nuestro proceso de aprobación de cambios para [type of change] es: [describe
steps, approvers, and typical delays]. Identifica los pasos que añaden retraso
sin reducir el riesgo, propón una alternativa basada en el riesgo con
comprobaciones y evidencia automatizadas, y di qué deberíamos medir para saber
si el riesgo subió o bajó. No afirmes resultados de investigación. Enumera tus
supuestos y las decisiones que necesitan la aportación del liderazgo.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de riesgos o de controles.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de riesgos lleva su vector de manipulación, su barrera de protección y su regla de evidencia.

## Puntos clave

- Mantén corto el registro de riesgos, con responsables en los equipos que pueden actuar, y revisado en conversaciones que ya existen.
- Prueba que los controles clave operan, trata los fallos como información útil y automatiza la evidencia.
- Usa unos pocos indicadores adelantados con umbrales, respuestas y decisiones registradas.
- Sustituye la aprobación general por vías de cambio basadas en el riesgo respaldadas por evidencia automatizada.
- Muestra rangos y evidencia en lugar de falsa precisión, y usa las matrices para iniciar conversaciones.
- Haz seguro dar calificaciones en rojo, y aprende de las pérdidas y de los casi accidentes.

## Referencias y lecturas complementarias

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
