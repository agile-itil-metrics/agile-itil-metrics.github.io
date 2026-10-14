# Métricas de solicitudes de incorporación y revisión de código

**La revisión es donde el trabajo terminado espera con más frecuencia, así que mide cuánto tiempo pasa un cambio antes de que alguien lo mire, qué tamaño tiene y con qué frecuencia vuelve, y empareja cada número de velocidad con una señal de calidad para que más rápido nunca signifique descuidado.**

## Resumen y motivación

Una [solicitud de incorporación](https://en.wikipedia.org/wiki/Pull_request) (pull request) es una propuesta de fusionar un conjunto de cambios de una rama de un repositorio de [control de versiones](https://en.wikipedia.org/wiki/Version_control) en otra, junto con la conversación sobre si debe fusionarse. En muchos equipos es la puerta formal entre "la autora o el autor cree que funciona" y "el equipo acepta que puede salir". La conversación es una forma de [revisión de código](https://en.wikipedia.org/wiki/Code_review): una persona distinta de quien creó el cambio lo lee, plantea preguntas y lo aprueba o pide revisiones. Algunas plataformas llaman a lo mismo solicitud de fusión; este tema usa "solicitud de incorporación" para ambas.

Vale la pena medir la revisión por una razón sencilla. En la visión de flujo de la entrega, un elemento de trabajo pasa la mayor parte de su vida esperando, y la revisión es una de las esperas que está por completo bajo el control del equipo. Un cuello de botella compartido de la plataforma o una dependencia externa exigen que cambien otras personas. Una solicitud de incorporación que espera dos días una primera mirada solo exige que cambien los hábitos del propio equipo. Las medidas de flujo de este libro (véanse el tema 2.1, Medidas de flujo, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) dan el vocabulario general. Este tema se acerca a una etapa del ciclo y le da sus propios instrumentos.

Las visiones ágil y de ITIL se encuentran aquí de una forma útil. Desde una perspectiva ágil, la revisión es un bucle de retroalimentación y un mecanismo de enseñanza. Difunde el conocimiento del código, detecta defectos pronto y hace cumplir los acuerdos de trabajo y la Definición de Terminado del equipo. Desde una perspectiva de ITIL, la misma actividad respalda varias prácticas. En ITIL 4, la práctica de desarrollo y gestión de software cubre cómo se construye y se comprueba el software, la habilitación de cambios cubre cómo se evalúan y autorizan los cambios, y la gestión de despliegues cubre cómo llegan los cambios al entorno en vivo. Una solicitud de incorporación revisada por pares es, para muchas organizaciones, la evidencia de que un cambio estándar fue evaluado antes de su liberación. Tratar la revisión como una actividad medida y mejorable sirve a ambas visiones: el equipo ágil quiere una retroalimentación más rápida, y la práctica de ITIL quiere una garantía fiable de que los cambios se comprobaron.

El riesgo que hay que tener a la vista todo el tiempo es que la velocidad de revisión y la calidad de revisión son fáciles de separar. Un equipo puede reducir a la mitad su tiempo hasta la primera revisión aprobándolo todo a primera vista, y el panel mostrará un triunfo mientras el código empeora. La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con una fuerza inusual a esta familia de métricas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas), porque los números son baratos de recoger, visibles para todos y trivialmente fáciles de mover sin cambiar aquello que pretendían representar. Cada recomendación siguiente está escrita con eso en mente.

La **autora o el autor** abrió la solicitud de incorporación y una **persona revisora** la evalúa. Una **ronda de revisión** es un bucle de "el autor sube cambios, el revisor responde". El **retrabajo** es el cambio hecho tras un comentario de revisión, o tras la fusión, para corregir algo que la primera versión hizo mal. La **integración continua (CI)** es la práctica de fusionar el trabajo en una línea compartida con frecuencia y comprobar automáticamente cada fusión; véase [integración continua](https://en.wikipedia.org/wiki/Continuous_integration).

Todas las métricas de este tema describen equipos y repositorios. Nunca clasifican a revisores ni a autores. Los recuentos de revisión a nivel individual son fáciles de extraer y tentadores de usar, y hacerlo convierte una práctica de colaboración en una competición (véase el tema 9.1, Salud del equipo y experiencia de desarrollo).

## Principios clave

- **La espera domina sobre la revisión.** En la mayoría de los equipos, la mayor parte del tiempo de revisión es la solicitud de incorporación sin leer, no la discusión una vez que empieza un revisor. Mide la espera antes de medir la conversación.
- **Los cambios pequeños se revisan más rápido y mejor.** El tamaño es una de las pocas palancas que mejoran a la vez la velocidad y la minuciosidad, porque un revisor puede retener un cambio pequeño en la cabeza.
- **Velocidad sin escrutinio no es una mejora.** Toda métrica de velocidad de este tema necesita una contraparte de calidad, y el par se lee junto.
- **La revisión es una capacidad del equipo, no personal.** La carga debe repartirse por el equipo. Una métrica que muestra concentración apunta a un problema de diseño del equipo, nunca a una persona a la que elogiar o culpar.
- **Las distribuciones superan a los promedios.** Los tiempos de revisión tienen una cola larga de solicitudes de incorporación atascadas, así que informa la mediana y un percentil alto (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- **Define el reloj y luego déjalo en paz.** Indica cuándo arranca y se detiene el reloj, qué eventos lo pausan y qué actividad automatizada se excluye, y escríbelo donde viven los datos (véase el tema 1.5, Fuentes de datos e instrumentación).
- **Las métricas de revisión sirven al equipo que posee el trabajo.** Son un insumo para la propia retrospectiva del equipo, no un cuadro de mando para otra persona.

## Definiciones de métricas

Los relojes siguientes suponen que la plataforma de control de versiones registra las horas de los eventos de apertura, peticiones de revisión, comentarios, aprobaciones, envíos y fusiones. Los borradores, las solicitudes de incorporación abiertas por bots y las cerradas sin fusionar se excluyen salvo que una fila diga otra cosa. "Horas laborables" significa el horario laboral declarado del equipo, de modo que una solicitud de incorporación abierta el viernes por la tarde no acumule un fin de semana de espera.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo hasta la primera revisión | Espera entre que una solicitud de incorporación queda lista para revisión y la primera respuesta humana sustantiva | El reloj arranca cuando la solicitud de incorporación sale del estado de borrador o se abre ya lista, y se detiene en el primer comentario de revisión, petición de cambios o aprobación de alguien distinto del autor; se excluyen los comentarios de bots y del autor y los cambios de etiqueta puros. Informa la mediana y el percentil 85 en horas laborables | horas laborables | Historial de eventos de la plataforma de control de versiones | Desarrollo y gestión de software; habilitación de cambios | Acuerdo de trabajo sobre la capacidad de respuesta en las revisiones; flujo del trabajo en curso | Semanal |
| Tiempo de ciclo de la revisión | Tiempo total desde que está lista para revisión hasta la fusión | El reloj arranca cuando la solicitud de incorporación está lista para revisión y se detiene en la fusión; las solicitudes cerradas sin fusionar se excluyen y se cuentan por separado. Informa la mediana y el percentil 85 en horas laborables | horas laborables | Historial de eventos de la plataforma de control de versiones | Gestión de despliegues; habilitación de cambios | Tiempo de ciclo de la etapa de revisión en el tablero del equipo | Semanal |
| Tamaño de la solicitud de incorporación | Cantidad de cambio en una solicitud de incorporación | Líneas añadidas más líneas eliminadas, excluidos los archivos generados, los archivos de bloqueo, el código de terceros incorporado y los cambios de nombre puros, según las reglas de exclusión del repositorio. Informa la mediana y el percentil 85 por solicitud de incorporación fusionada | líneas cambiadas | Estadísticas de diferencias de la plataforma de control de versiones | Desarrollo y gestión de software | Tamaño de lote pequeño; división de historias | Semanal |
| Rondas de revisión | Número de bucles de envío del autor y respuesta del revisor antes de la fusión | Recuento de ciclos distintos de "cambios solicitados" o de comentario seguido de envío por solicitud de incorporación fusionada; el primer envío es la ronda cero y los fallos de comprobaciones automáticas se excluyen. Informa la mediana y el percentil 85 | recuento | Eventos de revisión y de envío de la plataforma de control de versiones | Mejora continua; desarrollo y gestión de software | Señal de retrabajo en la etapa de revisión; Definición de Terminado | Semanal |
| Concentración de la carga de revisión | Cuán desigualmente se reparte el trabajo de revisión en un equipo | Proporción de las revisiones completadas del equipo atendidas por los dos revisores más ocupados en 4 semanas móviles; se excluyen las revisiones de la propia solicitud de incorporación y las de bots. Se informa para el equipo, nunca por nombre | porcentaje | Eventos de revisión de la plataforma de control de versiones, agregados por equipo | Mejora continua; gestión del conocimiento | Propiedad compartida del código; propiedad colectiva | Mensual |
| Recuento de solicitudes de incorporación obsoletas | Solicitudes de incorporación abiertas más tiempo que el límite acordado por el equipo | Solicitudes de incorporación todavía abiertas y que no son borradores cuya antigüedad desde que quedaron listas para revisión supera el límite del equipo, contadas en el momento de la instantánea; los borradores se excluyen | recuento | Lista de solicitudes de incorporación abiertas de la plataforma de control de versiones | Habilitación de cambios; mejora continua | Antigüedad del elemento de trabajo; límite de WIP | Semanal |
| Tasa de correcciones posteriores a la fusión | Proporción de solicitudes de incorporación fusionadas seguidas poco después de un cambio correctivo | Solicitudes de incorporación fusionadas seguidas en un plazo de 14 días de una corrección, una reversión o una corrección urgente vinculada al mismo cambio / solicitudes de incorporación fusionadas en el periodo; se excluye el trabajo de seguimiento planificado etiquetado como tal | porcentaje | Historial del control de versiones, incidencias vinculadas y registros de incidentes o de cambios | Habilitación de cambios; gestión de incidentes | Calidad incorporada; Definición de Terminado | Mensual |

El tiempo hasta la primera revisión es la mayor palanca y la métrica con la que deberían empezar la mayoría de los equipos. El tiempo de ciclo de la revisión es su medida de resultado y es un componente de los plazos de entrega más largos tratados en el tema 2.2. La ventana de 14 días y el límite de obsolescencia son ejemplos; cada equipo elige valores que se ajusten a su ritmo de versiones y los escribe. Cuando los números alimentan el panorama más amplio de la entrega, toman el relevo la familia DORA (véase el tema 2.8, Métricas DORA) y las medidas de fallos de cambio (véase el tema 4.4, Fallos de cambio y retrabajo).

## Recomendaciones

### Mide la espera antes que el trabajo

**1. Empieza con el tiempo hasta la primera revisión.** Suele ser el mayor contribuyente al tiempo de revisión y el más barato de mejorar. Instrúmentalo a partir del historial de eventos de la plataforma para que nadie tenga que introducir nada. Informa la mediana y un percentil alto, porque una mediana de tres horas con un percentil 95 de cuatro días significa que se están olvidando algunos cambios.

**2. Excluye del reloj los bots y los borradores, y dilo.** Las comprobaciones automáticas, los bots de actualización de dependencias y las herramientas de formato crean comentarios en segundos, y contarlos hace que la espera parezca excelente. Arranca el reloj cuando el autor marca el cambio como listo, no cuando la rama se envía por primera vez. Publica estas reglas junto al gráfico.

**3. Usa horas laborables y escribe el calendario del equipo.** Una solicitud de incorporación abierta tarde un viernes no debe cargar con un fin de semana de espera. Un equipo repartido en varias zonas horarias necesita una regla sobre el horario de quién cuenta, y a menudo la respuesta honesta es que el costo del traspaso entre zonas es lo que vale la pena ver. Indica la elección y mantenla estable.

### Da forma al trabajo para que sea revisable

**4. Mantén pequeñas las solicitudes de incorporación y trata el tamaño como un hábito del equipo.** Sigue la mediana y el percentil 85 del tamaño, y mira las grandes como un conjunto y no como fallos individuales. Los equipos suelen descubrir que los cambios grandes vienen de pocas causas: trabajo no dividido con suficiente finura, mezclar refactorización con comportamiento nuevo o esperar demasiado para fusionar. Divide el trabajo para que cada solicitud de incorporación haga una sola cosa, lo que además coincide con el principio de lote pequeño del [desarrollo basado en el tronco](https://en.wikipedia.org/wiki/Trunk-based_development) y del despliegue frecuente.

**5. No fijes un tope duro de tamaño como meta.** Un límite como "no más de 400 líneas" invita a dividir un cambio en piezas artificiales que individualmente son ilegibles o que rompen la compilación al fusionarse solas. Usa el tamaño como inicio de conversación en la retrospectiva y da al equipo técnicas para dividir, como los interruptores de funcionalidad, la refactorización preparatoria en su propia solicitud de incorporación y la fusión detrás de una bandera.

**6. Haz explícita la petición de revisión.** Una solicitud de incorporación que no nombra a ningún revisor espera a un voluntario, y los voluntarios escasean. Acordad en el acuerdo de trabajo a quién se pide, cómo se avisa al equipo y cuál es la expectativa de respuesta. Un turno de revisión compartido o un espacio diario de revisión suele reducir la espera más que cualquier ajuste de la herramienta.

### Reparte la carga y el conocimiento

**7. Vigila la concentración de la carga como un riesgo del equipo.** Si dos personas manejan la mayoría de las revisiones, su disponibilidad limita el flujo del equipo y su ausencia lo detiene. Revisa la medida de concentración cada mes y actúa mediante el diseño del equipo: rota el revisor por defecto, empareja a los miembros nuevos con los expertos y anota las zonas del código que solo una persona puede revisar. No publiques una clasificación por persona.

**8. Usa la revisión para compartir conocimiento y protege ese propósito.** El valor a largo plazo de la revisión incluye el aprendizaje, la propiedad compartida y el estilo coherente, además de la detección de defectos. La [programación en pareja](https://en.wikipedia.org/wiki/Pair_programming) y la programación en grupo trasladan parte de ese intercambio a una fase más temprana del proceso; cuando una pareja ya ha trabajado en un cambio, una revisión más ligera es razonable. Haz de la elección una decisión del equipo, escrita en el acuerdo de trabajo, para que "en pareja, así que revisado a la ligera" sea una regla visible y no una excusa.

### Controla la propia revisión

**9. Deja que la automatización maneje lo que la automatización hace bien.** El formato, el análisis de estilo y las comprobaciones básicas pertenecen a la canalización, para que la atención humana vaya al diseño, la corrección y el riesgo. El [análisis estático de programas](https://en.wikipedia.org/wiki/Static_program_analysis) y las pruebas automatizadas reducen el número de rondas de revisión triviales. Las rondas restantes dicen entonces más sobre la conversación de diseño y menos sobre desacuerdos de estilo.

**10. Lee las rondas de revisión como una señal sobre la claridad, no como un recuento de faltas.** Muchas rondas pueden significar que el requisito no estaba claro, que el autor carecía de contexto, que el revisor pidió cambios de gusto o que el cambio era grande. Cero rondas en cada solicitud de incorporación puede significar un trabajo excelente o que nadie miró. Muestrea un puñado de solicitudes de incorporación con rondas inusualmente numerosas o inusualmente escasas y léelas juntos como equipo.

### Empareja la velocidad con la calidad y mantén visible el tiempo

**11. Muestra siempre una contraparte de calidad junto a la velocidad de revisión.** La tasa de correcciones posteriores a la fusión, los incidentes vinculados a cambios recientes y la proporción de defectos hallados tras la liberación son los socios naturales (véase el tema 4.4, Fallos de cambio y retrabajo). Si el tiempo de revisión mejora mientras empeora la tasa de correcciones, el equipo ha cambiado garantía por velocidad, y la solución es una conversación y no una meta. Muestra ambos en el mismo gráfico.

**12. Conecta la revisión con el panorama del flujo y con el trabajo no planificado.** Una revisión más rápida ayuda solo si la etapa siguiente no se limita a poner el trabajo en cola (véase el tema 2.3, Trabajo en curso y teoría de colas). Las peticiones de revisión urgentes que interrumpen el trabajo planificado tienen un costo propio (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tiempo hasta la primera revisión | Publicar un rápido "se ve bien" o un emoji como primera respuesta; asignar un bot o un revisor amigable; marcar una solicitud de incorporación como lista solo después de que alguien haya acordado mirarla | Tasa de correcciones posteriores a la fusión; muestra de aprobaciones sin comentarios; exigir en el acuerdo de trabajo que las primeras respuestas sean sustantivas |
| Tiempo de ciclo de la revisión | Fusionar sin esperar a la revisión; dividir un cambio en piezas diminutas para pasar más rápido; cerrar y reabrir una solicitud de incorporación para reiniciar el reloj | Recuento de solicitudes de incorporación cerradas y reabiertas; rondas de revisión; tasa de correcciones posteriores a la fusión; reglas de rama protegida que exijan aprobación |
| Tamaño de la solicitud de incorporación | Excluir archivos del recuento; dividir un único cambio en piezas que no se pueden entender por separado; inflar el tamaño con código generado | Revisar cada trimestre las reglas de exclusión; comprobar que las piezas divididas compilan y pasan las pruebas por sí solas; leer una muestra de las más pequeñas y las más grandes |
| Rondas de revisión | Aprobar a la primera para mantener bajo el recuento; trasladar la discusión al chat para que no deje rastro; autores que suben muchas correcciones en un solo commit para esconder las rondas | Tasa de correcciones posteriores a la fusión; muestra de solicitudes de incorporación con cero rondas; mantener la discusión en la solicitud de incorporación |
| Concentración de la carga de revisión | Dividir las revisiones en muchas aprobaciones pequeñas para repartir el recuento; asignar revisiones a quienes tienen tiempo libre pero no conocimiento | Revisar el conocimiento del revisor en las áreas de riesgo; vigilar la tasa de correcciones posteriores a la fusión por área; mantener la métrica a nivel de equipo |
| Recuento de solicitudes de incorporación obsoletas | Cerrar las solicitudes obsoletas sin fusionar; convertirlas en borradores para esconderlas; subir el límite de obsolescencia | Recuento de solicitudes de incorporación cerradas sin fusionar; recuento de borradores de larga duración; revisar el límite con el equipo cada trimestre |
| Tasa de correcciones posteriores a la fusión | Registrar las correcciones bajo un elemento de trabajo nuevo sin vínculo; etiquetar el trabajo correctivo como seguimiento planificado; evitar la métrica retrasando la corrección más allá de la ventana | Comparar con los datos de incidentes y de fallos de cambio; muestra de elementos de seguimiento; auditoría de las etiquetas usadas |

Una lectura sana es una lectura tranquila. El tiempo hasta la primera revisión es corto y la cola también, de modo que ninguna solicitud de incorporación espera días. El tamaño se sitúa en un rango que el equipo encuentra fácil de leer, con unos pocos cambios grandes que el equipo sabe explicar. Las rondas de revisión son bajas pero no cero, la concentración de la carga es moderada, el recuento de obsoletas es pequeño y la tasa de correcciones posteriores a la fusión es estable. Cuando un número mejora bruscamente, alguien debería comprobar que su barrera de protección emparejada no se haya movido en el sentido equivocado.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Revisión rápida con expectativas de respuesta estrictas | Bucles de retroalimentación cortos; menos pérdida de contexto para el autor; menor trabajo en curso | Presión para aprobar deprisa; interrumpe el trabajo concentrado |
| Revisión lenta y minuciosa | Lectura cuidadosa del diseño y del riesgo; mayor transferencia de conocimiento | Mayor tiempo de ciclo; se acumulan lotes más grandes; los autores pasan a otra cosa y pierden el contexto |
| Solicitudes de incorporación pequeñas | Más fáciles de leer y de revertir; flujo más fluido | Más sobrecarga por cambio; pueden fragmentar una funcionalidad en pasos confusos |
| Solicitudes de incorporación grandes | Menos traspasos; toda la funcionalidad visible de una vez | Las revisiones se vuelven superficiales; más difíciles de revertir; esperas largas |
| Aprobación obligatoria de un responsable con nombre | Responsabilidad clara en las áreas de riesgo; respalda la autorización de cambios | Crea un cuello de botella y un punto único de fallo |
| Comprobaciones automatizadas antes de la revisión humana | Libera a las personas para el diseño y el riesgo; coherente | Puede crear falsa confianza; requiere mantenimiento |

Ninguna política única gana. El objetivo es acortar la espera preservando el escrutinio, y el camino habitual son cambios más pequeños, expectativas de revisión claras, una automatización sólida para las comprobaciones rutinarias y un acuerdo del equipo sobre cómo es una buena revisión. Las métricas de revisión son más útiles como preguntas para una retrospectiva y menos útiles como metas.

## Preguntas para conversar con tu equipo

**1. ¿Dónde pasa una solicitud de incorporación la mayor parte de su vida, esperando o siendo revisada?**
Pide al equipo que adivine antes de mirar los datos y muestra luego el reparto entre el tiempo hasta la primera revisión y el tiempo restante hasta la fusión. La mayoría de los grupos se sorprende de cuánto es espera. El facilitador debe anotar qué conjeturas fueron erróneas y preguntar qué dice cada una sobre cómo vive el equipo la revisión. Termina con un cambio que ataque la mayor espera.

**2. ¿Cómo es una buena revisión en este equipo, y cómo lo distinguiría alguien ajeno?**
Enumera los comportamientos que valora el equipo, como preguntar por el diseño, comprobar las pruebas y explicar el motivo de una petición. Pregunta luego cuáles de ellos dejan un rastro visible en la solicitud de incorporación. Discutid cómo distinguir una primera respuesta sustantiva de una simbólica sin vigilar a individuos. Acordad una descripción escrita breve para ponerla en el acuerdo de trabajo.

**3. ¿Qué tamaño es demasiado grande para nosotros, y qué hacemos cuando el trabajo es de verdad grande?**
Mira la distribución de tamaños y elige algunas de las solicitudes de incorporación más grandes. Pregunta por qué cada una fue grande y si podría haberse dividido. Discutid técnicas como los interruptores de funcionalidad, la refactorización preparatoria y la fusión detrás de una bandera. El facilitador debe resistirse a fijar un límite numérico y acordar en su lugar un hábito que el equipo pruebe durante un mes.

**4. ¿Quién revisa nuestro código más arriesgado, y qué ocurre cuando está ausente?**
Asigna las áreas del código a las personas que pueden revisarlas bien. Mira la concentración de la carga y las áreas con un solo revisor cualificado. Discutid cómo formar un segundo revisor en cada una, mediante parejas o asignaciones rotativas. Mantén la conversación sobre la resiliencia del equipo, no sobre la clasificación de la carga de nadie.

**5. Si nuestra velocidad de revisión se duplicara mañana, ¿qué querríamos que fuera cierto sobre la calidad?**
Pide al grupo que nombre las señales de calidad que vigilaría, como las correcciones posteriores a la fusión, los incidentes vinculados a cambios recientes o el número de reversiones. Comprueba si esas señales son actualmente visibles junto al gráfico de velocidad. Discutid cuál sería una señal temprana de que la velocidad se había comprado a costa del escrutinio. Acordad qué contraparte mostrar en el panel.

**6. ¿Qué números de revisión nos tentaría mejorar de un modo que no ayuda?**
Repasa cada métrica y pregunta cómo podría una persona bajo presión hacer que pareciera mejor sin mejorar nada. Compara las respuestas con la tabla de manipulación anterior y añade las ideas propias del equipo. El objetivo es nombrar el riesgo antes de que ocurra. Acordad qué barrera de protección se revisará junto a cada métrica.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen el proceso de revisión y deben poseer sus métricas. Ganan más acortando la espera con acuerdos sencillos: un espacio diario de revisión, un proceso de petición claro y cambios pequeños. Deben usar los números en las retrospectivas, mantener bajo el trabajo en curso y resistir la tentación de optimizar un solo gráfico. La revisión es también donde los miembros nuevos aprenden el código, así que protege ese propósito.

### Equipos de servicio y operaciones

Los equipos de operaciones encuentran la revisión donde el código de infraestructura, la configuración y la automatización de los manuales de procedimiento se cambian mediante solicitudes de incorporación. Para ellos, la revisión suele formar parte de cómo se aprueba y se evidencia un cambio estándar (véase el tema 4.3, Métricas de habilitación de cambios). Deben acordar qué cambios necesitan la revisión de una segunda persona, con qué rapidez se revisan las correcciones urgentes y cómo se revisan después los cambios de emergencia, para que una corrección apresurada siga examinándose. Una revisión superficial de un cambio arriesgado aparece más tarde como un incidente.

### Liderazgo y gobernanza

Los líderes deben tratar las métricas de revisión como señales sobre la salud y el flujo del equipo, no como puntuaciones de productividad. Deben pedir la medida de calidad emparejada siempre que se informe de un número de velocidad, respaldar el tiempo que lleva una revisión cuidadosa y evitar comparar equipos por el tiempo de revisión en bruto, ya que los repositorios y los riesgos difieren. Los órganos de gobernanza pueden usar la evidencia de revisión como parte de la garantía de cambios, siempre que acepten que un proceso de revisión documentado y muestreado es más sólido que un recuento de aprobaciones.

### Clientes y usuarios

Los clientes no ven las solicitudes de incorporación, pero sienten los resultados: con qué prontitud llega una corrección y con qué frecuencia una versión trae un defecto nuevo. Esperas cortas de revisión ayudan a que las correcciones urgentes lleguen antes a ellos, y una revisión reflexiva ayuda a mantener los fallos lejos de ellos. Cuando un servicio tiene un historial publicado de versiones o de defectos, los clientes se benefician de que el equipo muestre menos reversiones y menos correcciones repetidas con el tiempo.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional opera un servicio web de citas de pacientes, construido por un equipo de producto de siete personas y operado con un pequeño grupo de ingeniería de fiabilidad de sitios. Todos los números de este ejemplo son ilustrativos.

En una revisión trimestral, el equipo descubre que su tiempo de ciclo de la revisión tiene una mediana de 26 horas laborables y un percentil 85 de 71 horas laborables (ilustrativo). Al dividir el ciclo se ve que la mediana del tiempo hasta la primera revisión es de 19 horas laborables, así que la mayor parte del retraso es espera. El tamaño de la solicitud de incorporación tiene una mediana de 180 líneas y un percentil 85 de 900 líneas (ilustrativo), y los dos revisores más ocupados manejan el 68 por ciento de las revisiones (ilustrativo). La tasa de correcciones posteriores a la fusión se sitúa en el 9 por ciento (ilustrativo).

El equipo hace tres acuerdos. Fijan un espacio diario de revisión de 30 minutos, escriben en su acuerdo de trabajo la expectativa de una primera respuesta en el plazo de una jornada laboral y rotan cada semana una tarea de "revisar primero". También adoptan el hábito de dividir el trabajo grande, usando interruptores de funcionalidad para que las funcionalidades parciales puedan fusionarse con seguridad. No fijan ningún límite de tamaño ni una meta para el tiempo hasta la primera revisión.

Tras dos meses la mediana del tiempo hasta la primera revisión baja a 6 horas laborables y el percentil 85 del tiempo de ciclo de la revisión baja a 34 horas laborables (ilustrativo). La concentración de la carga baja al 52 por ciento (ilustrativo), y la tasa de correcciones posteriores a la fusión se mantiene en el 9 por ciento.

El equipo detecta entonces un riesgo de manipulación. Una muestra de aprobaciones muestra que alrededor de un tercio de las primeras respuestas llegan en minutos y dicen solo "LGTM" en cambios que tocan la lógica de recordatorios de citas. La mejora de velocidad fue en parte real y en parte un sello de goma. La tasa de correcciones posteriores a la fusión aún no se había movido porque el código afectado se ejecuta en un ciclo mensual. El equipo cambia el acuerdo de trabajo para que una primera respuesta deba incluir una pregunta, un comentario sobre una parte concreta del cambio o una nota explícita de lo que se comprobó, y añade a su gráfico de revisión la proporción muestreada de aprobaciones sin comentarios. También acuerdan que los cambios en la lógica de recordatorios de cara al paciente necesiten dos revisores, uno de ellos del grupo de operaciones. La decisión, con sus motivos, pasa al registro de decisiones del equipo.

## Perspectiva por sector

**Startup.** Un equipo pequeño puede revisar en minutos porque todos conocen el código, y el principal riesgo es saltarse la revisión cuando falta tiempo. Mantén pocas métricas: el tiempo hasta la primera revisión y el tamaño bastan. Establece pronto el hábito de los cambios pequeños, porque es mucho más difícil de introducir cuando el código y el equipo crecen.

**Pequeña empresa.** A menudo uno o dos desarrolladores, o un proveedor externo, mantienen el software. La revisión puede ser de un único colega o del propio personal del proveedor. Pregunta a los proveedores cómo revisan y si pueden compartirse los datos de las solicitudes de incorporación, y conserva un registro sencillo de qué cambios revisó quién, porque la revisión es la principal comprobación contra los errores en un equipo pequeño.

**Gran empresa.** Muchos equipos, repositorios y reglas de aprobación crean una amplia variación. Estandariza las definiciones de los relojes y las exclusiones para que los datos de la plataforma sean comparables, pero no clasifiques a los equipos por el tiempo de revisión en bruto, ya que el riesgo y el código difieren. Vigila los requisitos de revisión impuestos por auditoría que añaden espera sin añadir escrutinio, y busca oportunidades de sustituir aprobaciones manuales por comprobaciones automatizadas y revisión por muestreo.

**Gobierno y sector público.** La separación de funciones, los rastros de auditoría y las normas de contratación suelen exigir una aprobación independiente para los cambios. Trata esas reglas como insumos de diseño: registra quién aprobó qué y cuándo, y mide la espera que crean. Cuando el código lo escriben proveedores, especifica en el contrato la evidencia de revisión y el acceso a los datos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es acortar la parte de la entrega que es a la vez lenta y controlable, manteniendo los beneficios de la revisión por pares: menos defectos, conocimiento compartido y un rastro de auditoría. Las solicitudes de incorporación en espera retienen el trabajo terminado lejos de los usuarios, aumentan el costo del cambio de contexto para los autores y hacen más probables los conflictos de fusión a medida que envejecen las ramas. Reducir la espera se amortiza, por tanto, en una entrega más rápida, menos retrabajo y menos frustración.

El costo de recoger estas métricas es bajo cuando la plataforma de control de versiones ofrece historial de eventos y una API. Los costos principales son el tiempo para definir los relojes y las exclusiones, para construir o configurar el informe y para revisar los números con regularidad. El costo mayor es de comportamiento: el tiempo que las personas dedican a revisar con prontitud, que compite con otro trabajo. Ese tiempo es la inversión real, y debe presupuestarse en lugar de tratarlo como gratuito.

El retorno aparece como un tiempo de ciclo de la revisión más corto, menos solicitudes de incorporación obsoletas y una tasa de correcciones posteriores a la fusión estable o decreciente. Evita afirmar de antemano una mejora porcentual concreta, ya que los resultados dependen del punto de partida y del equipo. Un caso creíble compara las distribuciones del propio equipo antes y después, junto con su contraparte de calidad, en lugar de citar cifras de otras organizaciones. El libro de 2018 *Accelerate* informa de investigaciones que vinculan prácticas técnicas y culturales con el desempeño de la entrega y es una fuente razonable para el argumento general, pero los números de tu equipo provienen de tus propios datos.

## Antipatrones y trampas

- **Clasificar a revisores o autores.** Las clasificaciones individuales de revisiones completadas o líneas cambiadas corrompen la colaboración. Informa a nivel de equipo y usa los números para ajustar los hábitos del equipo.
- **Fijar una meta para el tiempo hasta la primera revisión sin una contraparte de calidad.** El resultado es el sello de goma. Muestra la tasa de correcciones posteriores a la fusión y una muestra de aprobaciones sin comentarios junto a cada gráfico de velocidad.
- **Fijar un límite duro de tamaño.** Los equipos dividen el trabajo de forma artificial para cumplir. Usa el tamaño como conversación y enseña técnicas de división en su lugar.
- **Tratar cero comentarios como un éxito.** Una aprobación sin examinar puede reflejar confianza o desatención. Muestrea esas solicitudes de incorporación y léelas juntos.
- **Contar la actividad de los bots como revisión.** Los comentarios automáticos hacen que la espera parezca corta. Excluye los bots del reloj y de las medidas de carga.
- **Ignorar las zonas horarias y los calendarios.** El tiempo de reloj en bruto hace que las esperas de fin de semana y entre regiones parezcan una revisión lenta. Usa horas laborables y nombra el calendario.
- **Dejar crecer la lista de obsoletas.** Las solicitudes de incorporación antiguas acumulan conflictos de fusión y pierden contexto. Revisa la lista cada semana y fusiona, rehaz o cierra cada elemento con un motivo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definición y relojes | El tiempo de revisión se adivina o se informa a ojo | Algunos equipos exportan tiempos de la plataforma con sus propias reglas | Una definición escrita de cada reloj, con exclusiones para bots, borradores y calendarios | Definiciones revisadas con una cadencia; cambios registrados con motivos | Definiciones alineadas entre equipos y proveedores y revisadas cuando dejan de informar decisiones |
| Práctica de revisión | Las revisiones ocurren cuando alguien se da cuenta | Normas informales en algunos equipos | Acuerdo de trabajo escrito sobre las peticiones, las expectativas de respuesta y lo que cubre una revisión | Normas ajustadas a partir de los datos; seguimiento del intercambio de conocimiento y de las áreas de riesgo | Práctica de revisión coordinada entre equipos y proveedores, con la automatización a cargo de las comprobaciones rutinarias |
| Contraparte de calidad | Sin vínculo entre revisión y defectos | Vistazo ocasional a las correcciones posteriores a la fusión | Tasa de correcciones posteriores a la fusión mostrada junto a la velocidad de revisión | Barreras de protección revisadas con regularidad; aprobaciones muestreadas y leídas | Evidencia de revisión conectada con la garantía de cambios y el aprendizaje de incidentes entre servicios |
| Uso en la mejora | Números sin usar | Mostrados en algunas retrospectivas | Revisados por el equipo propietario con una cadencia fija | Las brechas conducen a trabajo de mejora planificado y con recursos | Las ideas de mejora fluyen de los equipos a la práctica compartida y de vuelta |

## Lista de verificación

- [ ] Los relojes del tiempo hasta la primera revisión y del tiempo de ciclo de la revisión están escritos, con inicio, fin y exclusiones.
- [ ] Los bots, los borradores y las solicitudes de incorporación cerradas sin fusionar se excluyen o se cuentan por separado, y las reglas son visibles.
- [ ] Los tiempos se informan como la mediana y un percentil alto en horas laborables.
- [ ] El tamaño de la solicitud de incorporación se mide con una lista de exclusión acordada para los archivos generados y de terceros.
- [ ] El equipo tiene un acuerdo escrito sobre cómo se piden las revisiones y con qué rapidez se espera una primera respuesta.
- [ ] La concentración de la carga de revisión se informa solo a nivel de equipo.
- [ ] Una tasa de correcciones posteriores a la fusión u otra contraparte de calidad se muestra en el mismo gráfico que la velocidad de revisión.
- [ ] Cada mes se lee una muestra de aprobaciones sin comentarios y muy rápidas.
- [ ] La lista de solicitudes de incorporación obsoletas se revisa cada semana.
- [ ] Los datos de revisión se usan en las retrospectivas y no en la evaluación individual.
- [ ] Las áreas de código con un único revisor cualificado están listadas y tienen un plan.

## Prompts de IA

**Redacta definiciones de reloj para las métricas de revisión.**

```text
Quiero definir métricas de revisión para [team or repository]. Nuestra
plataforma es [version control platform] y nuestro flujo de trabajo es
[describe: draft pull requests, required approvals, merge rules, bots in use].
Redacta definiciones precisas del tiempo hasta la primera revisión y del tiempo
de ciclo de la revisión, indicando el evento que arranca y detiene cada reloj,
qué se excluye (bots, borradores, cerradas sin fusionar), cómo se tratan las
horas laborables para [time zones and working calendar] y qué percentiles
informar. No inventes valores de referencia ni funciones de herramientas.
Enumera tus supuestos y las preguntas que debería responder para terminar las
definiciones.
```

**Analiza una exportación de datos de revisión.**

```text
Esta es una exportación anonimizada de solicitudes de incorporación fusionadas
de [team] durante [period], con las columnas [list columns, for example ready
time, first review time, merge time, lines changed, review rounds, linked fix
flag]: [paste data or summary]. Calcula la mediana y el percentil 85 de cada
medida de tiempo y del tamaño, divide el ciclo de revisión en espera y
revisión, y señala los patrones que merezcan una conversación. No clasifiques
a individuos ni compares con referencias externas. Enumera tus supuestos y los
problemas de calidad de datos que notes.
```

**Encuentra riesgos de manipulación en nuestras métricas de revisión.**

```text
Nuestro equipo informa estas métricas de revisión: [list metrics and how each
is calculated]. Las presiones que tenemos son [for example a release deadline,
a leadership target, a supplier contract]. Para cada métrica, describe formas
plausibles de mejorarla sin mejorar la revisión, las señales tempranas de cada
una y una métrica o práctica de barrera de protección emparejada que la
detectaría. No inventes estadísticas. Enumera tus supuestos y dime qué
necesitarías saber para ordenar los riesgos.
```

**Prepara una retrospectiva sobre el flujo de revisión.**

```text
Prepara un orden del día de retrospectiva de 45 minutos para [team] sobre el
flujo de revisión. Insumos: tiempo hasta la primera revisión [value], tiempo de
ciclo de la revisión [value], tamaño mediano [value], concentración de la carga
[value] y tasa de correcciones posteriores a la fusión [value], todos con sus
definiciones. Sugiere preguntas que saquen a la luz las causas, un pequeño
experimento que el equipo podría ejecutar durante [duration] y la señal de
calidad que vigilar durante el experimento. No inventes causas ni metas.
Enumera tus supuestos y los datos que debería llevar.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una métrica relacionada de flujo o de calidad y la barrera de protección que debe acompañar a una métrica de revisión.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen coherentes la plantilla, la tabla de manipulación y las referencias cruzadas.

## Puntos clave

- La mayor parte del retraso de revisión es espera, así que mide el tiempo hasta la primera revisión y el tiempo de ciclo de la revisión como distribuciones en horas laborables.
- Las solicitudes de incorporación más pequeñas se revisan más rápido y con más cuidado; enseña a dividir en lugar de imponer un tope de tamaño.
- Empareja cada medida de velocidad con una contraparte de calidad, como la tasa de correcciones posteriores a la fusión, y lee las dos juntas.
- Trata la carga de revisión como una capacidad del equipo e informa la concentración a nivel de equipo, nunca como una clasificación de personas.
- Las métricas de revisión son preguntas para una retrospectiva y sirven al equipo que posee el trabajo.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
