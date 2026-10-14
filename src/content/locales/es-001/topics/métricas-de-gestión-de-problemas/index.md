# Métricas de gestión de problemas

**Las métricas de gestión de problemas muestran si un equipo está eliminando las causas de sus incidentes o solo reparando sus síntomas, así que mide cuántas causas se encuentran, con qué rapidez se corrigen definitivamente y si los mismos incidentes vuelven.**

## Resumen y motivación

Un equipo que restablece el servicio con rapidez puede seguir atrapado en una cinta de correr. El mismo fallo vuelve cada pocas semanas, se avisa a las mismas personas y las cifras de incidentes parecen sanas porque cada reparación es rápida. La gestión de problemas es la práctica que se baja de la cinta. Mira a través de los incidentes, encuentra la causa subyacente y consigue que esa causa se elimine o se contenga. Este tema cubre los números que dicen si ese trabajo se está haciendo y si funciona.

Cuatro términos sostienen el tema. Un **incidente** es una interrupción no planificada de un servicio o una reducción de su calidad, tal como usa la palabra el marco [ITIL](https://en.wikipedia.org/wiki/ITIL) (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes). Un **problema** es la causa subyacente, o sospechada, de uno o más incidentes. Un **error conocido** es un problema cuya causa se entiende y para el cual se registra una solución provisional, guardado en una [base de datos de errores conocidos](https://en.wikipedia.org/wiki/Known_error_database) para que la siguiente persona que se encuentre con el síntoma pueda hallarlo. Una [solución provisional](https://en.wikipedia.org/wiki/Workaround) (workaround) reduce o evita el impacto de un incidente o problema sin eliminar su causa. La corrección permanente es el cambio que elimina la causa.

Encontrar la causa es el trabajo del [análisis de causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis). Las técnicas comunes incluyen los [cinco porqués](https://en.wikipedia.org/wiki/Five_whys), el [diagrama de Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram) y el [diagrama de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), que ordena las causas según la frecuencia con que ocurren o el daño que hacen. Los sistemas complejos suelen tener varias causas contribuyentes y ningún culpable único, así que un buen registro de problema nombra los factores que, una vez eliminados, detienen la repetición, y dice cuánta confianza tiene el equipo.

Las métricas importan porque la gestión de problemas tiene una trampa de información integrada. Abrir un registro de problema es fácil y parece productivo. Cerrar uno también es fácil, ya que un registro puede cerrarse con una nota. Ninguno de los dos hechos demuestra que algo mejorara para los usuarios. Las medidas que vale la pena vigilar están más aguas abajo: si los incidentes vinculados a un problema dejan de repetirse, si las personas de guardia usan realmente los errores conocidos y cuánto espera su corrección una causa diagnosticada.

Las visiones de ITIL y ágil se encuentran aquí sin mucha fricción. En ITIL 4, la gestión de problemas es una práctica dentro del sistema de valor del servicio, cercana a la gestión de incidentes, la habilitación de cambios y la gestión del conocimiento. Su equivalente ágil es el flujo de correcciones pequeñas y basadas en evidencia que pasan por la [lista de pendientes](https://en.wikipedia.org/wiki/Backlog) de un equipo, la retrospectiva que detecta un patrón y el hábito de tratar el trabajo de fiabilidad como trabajo de producto ordinario. Donde la visión de ITIL subraya los registros, la propiedad y el error conocido, la visión ágil subraya los lotes pequeños y la retroalimentación rápida. Ambas quieren menos incidentes repetidos, y ese resultado es la medida que mantener delante de todos.

Este tema no repite los relojes de incidentes (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes) ni las medidas de incidentes graves (véase el tema 3.4, Métricas de incidentes graves), y trata el seguimiento de las revisiones solo donde alimenta a los problemas (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje). La lista de pendientes de errores conocidos y la idea más amplia de [deuda técnica](https://en.wikipedia.org/wiki/Technical_debt) se tratan en el tema 4.6, Deuda técnica y errores conocidos. Aquí el foco es el registro de problema y los resultados que produce. Las medidas de recuperación y fallo basadas en despliegues viven en el tema 2.8, Métricas DORA.

## Principios clave

- **Mide la repetición, no el papeleo.** La prueba de la gestión de problemas es que los incidentes vinculados dejan de volver. Los recuentos de registros abiertos y cerrados describen actividad y dicen poco del resultado.
- **Separa tres momentos.** Detectar que existe un patrón, identificar su causa y eliminar la causa son eventos distintos con relojes y responsables distintos. Fusionarlos oculta dónde está el retraso.
- **Una solución provisional es una etapa, no un final.** Regístrala, úsala y sigue cuánto tiempo sigue siendo la única protección. Una solución provisional que vive años es deuda con un responsable que nadie sabe nombrar.
- **Pon la corrección donde está el trabajo.** Una corrección permanente suele llegar como un cambio o un elemento de la lista de pendientes cuyo propietario es un equipo de producto. Mídela en el propio flujo del equipo y muéstrasela al equipo que posee el servicio.
- **Vincula los incidentes con los problemas en el origen.** Cada medida aquí depende del vínculo entre un incidente y un problema. Si el vínculo es débil, los números son débiles.
- **Prefiere las distribuciones y las cohortes a los promedios.** Las duraciones de los problemas son largas y asimétricas, y unos pocos registros antiguos dominan cualquier media (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- **Describe equipos y servicios, nunca personas.** Los problemas son propiedades del sistema. Una tabla de problemas cerrados por analista convierte una investigación en una cuota.

## Definiciones de métricas

Todos los relojes usan las marcas de tiempo del registro del problema, de los registros de incidentes vinculados y del cambio o elemento de la lista de pendientes vinculado. Salvo que una fila diga otra cosa, los problemas se cuentan por servicio y por equipo propietario, y los registros fusionados o duplicados se excluyen. Se prefieren los percentiles a las medias para toda duración. Los números del ejemplo de este tema son ilustrativos.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Problemas abiertos y cerrados | Flujo de registros de problema que entran y salen del estado abierto, por servicio | Recuento de abiertos en el periodo y recuento de cerrados en el periodo, cada uno por código de cierre (corregido, riesgo aceptado, duplicado, no se pudo reproducir); los duplicados se muestran pero se excluyen del recuento de "corregidos" | recuento por periodo | Registros de problemas de ITSM | Gestión de problemas | Entrada y rendimiento de la lista de pendientes | Mensual |
| Antigüedad de la lista de pendientes de problemas | Cuánto tiempo llevan esperando los problemas abiertos | Para cada problema abierto, fecha de la instantánea menos la fecha de creación del registro; informa la mediana y el percentil 85 de los problemas abiertos y el más antiguo, por prioridad | días | Registros de problemas de ITSM | Gestión de problemas | Antigüedad del elemento de trabajo en el tablero | Mensual |
| Tasa de vínculos de incidentes con problemas | Proporción de incidentes que apuntan a un problema o error conocido cuando se espera uno | Incidentes del periodo con un problema o error conocido vinculado / incidentes del periodo con prioridad alta o superior, o reabiertos, o de una categoría repetida; se excluyen los incidentes cerrados como error del usuario o duplicados | porcentaje | Registros de incidentes y problemas de ITSM | Gestión de incidentes; gestión de problemas | Detección de patrones en la retrospectiva | Mensual |
| Tiempo hasta la causa raíz | Cuánto tarda un problema diagnosticado en llegar a una causa registrada | El reloj arranca cuando se crea el registro del problema y se detiene cuando se registra la causa y la revisa una segunda persona; los problemas cerrados sin causa se excluyen y se cuentan por separado; informa la mediana y el percentil 85 | días | Registros de problemas de ITSM y su rastro de auditoría | Gestión de problemas | Tiempo acotado de exploración o de investigación | Mensual |
| Tasa de reutilización de errores conocidos | Con qué frecuencia se usa un error conocido cuando llega un incidente | Incidentes resueltos con un error conocido vinculado o su solución provisional / incidentes del periodo cuyo síntoma coincide con un error conocido que existía en ese momento; se excluyen los incidentes sin error conocido coincidente | porcentaje | Vínculos de incidentes de ITSM; uso de artículos de conocimiento | Gestión del conocimiento; gestión de problemas | Uso del manual de procedimiento o guía del equipo | Mensual |
| Tiempo hasta la corrección permanente | Cuánto tiempo está expuesto un problema desde el diagnóstico hasta que la corrección funciona en producción | El reloj arranca cuando se registra la causa y se detiene cuando el cambio de corrección vinculado se implementa y se confirma; los problemas cerrados como riesgo aceptado se excluyen y se cuentan por separado; informa la mediana y el percentil 85 | días | Registros de problemas; registros de cambios o eventos de despliegue de la canalización | Gestión de problemas; habilitación de cambios | Tiempo de ciclo del elemento de corrección | Mensual |
| Tasa de repetición tras la corrección | Proporción de problemas corregidos cuyos síntomas vinculados volvieron | Problemas cerrados como corregidos en un trimestre de cohorte con un nuevo incidente coincidente en los 90 días siguientes a que la corrección entrara en producción / problemas cerrados como corregidos en ese trimestre; la ventana de 90 días es un ejemplo y se indica en el gráfico | porcentaje | Registros de incidentes y problemas de ITSM; eventos de despliegue | Gestión de problemas; mejora continua | Defecto escapado o tasa de regresión | Trimestral |
| Proporción solo con solución provisional | Proporción de problemas conocidos protegidos solo por una solución provisional | Problemas abiertos en estado de error conocido sin corrección programada / problemas abiertos en estado de error conocido; los problemas de riesgo aceptado con un responsable con nombre y una fecha de revisión se muestran como un grupo aparte | porcentaje | Registros de problemas de ITSM | Gestión de problemas; gestión de riesgos | Registro de deuda técnica | Mensual |

La ventana de 90 días, la regla de coincidencia de síntomas y la definición de "esperado" en la tasa de vínculos son ejemplos. Un equipo elige valores que se ajusten a sus servicios y los escribe en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas). Contar los problemas cerrados como "corregidos" por separado de los demás códigos de cierre mantiene honesto el par de abiertos y cerrados.

## Recomendaciones

### Decide qué cuenta como problema

**1. Abre un problema con evidencia y di cuál es la evidencia.** Los buenos desencadenantes son incidentes repetidos del mismo síntoma, un incidente grave de causa desconocida, una tendencia hallada en una revisión o un riesgo detectado antes de cualquier incidente. Escribe el desencadenante en el registro, por ejemplo "cinco incidentes en seis semanas vinculados al mismo servicio". Si cada incidente inusual se convierte en un registro de problema, la lista de pendientes se llena de ruido y nadie la lee.

**2. Usa un conjunto pequeño y compartido de códigos de cierre.** Corregido, riesgo aceptado, duplicado, no se pudo reproducir y fusionado bastan para la mayoría de los equipos. Cada código tiene un significado de una frase y un responsable que puede usarlo. La mezcla de códigos de cierre es más informativa que el recuento de cerrados, porque muestra cuánto trabajo eliminó una causa y cuánto terminó sin un cambio.

### Vincula los incidentes y los problemas en el origen

**3. Haz del vínculo un paso del cierre del incidente.** Pide a quien resuelve que vincule el incidente con un problema, un error conocido o "ninguno encontrado" antes de cerrarlo. Ofrece sugerencias de coincidencia desde la herramienta cuando pueda, y deja que decida una persona. Un vínculo hecho semanas después en un ejercicio masivo es poco fiable (véase el tema 1.5, Fuentes de datos e instrumentación).

**4. Acuerda cómo se emparejan los síntomas.** La repetición depende de decidir cuándo dos incidentes son "el mismo". Una taxonomía breve de causas y síntomas, con definiciones y ejemplos, es mejor que el texto libre. Revisa cada trimestre una muestra de coincidencias, ya que las discrepancias en ambos sentidos sesgan la tasa de repetición.

**5. Deja que la revisión de patrones alimente la lista de problemas.** Una revisión mensual de las categorías de incidentes, por servicio y mediante un [diagrama de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), muestra qué pocas causas producen la mayor parte del dolor. Usa la revisión para abrir problemas y para priorizarlos, y envía a la misma lista las causas repetidas de las revisiones de incidentes graves (véase el tema 3.2, Volumen y prioridad de incidentes).

### Mide los tres retrasos

**6. Cronometra las etapas por separado.** Mide desde la creación del registro hasta la causa registrada, y desde la causa registrada hasta la corrección funcionando en producción. El primer retraso apunta a la capacidad de investigación, al acceso a los datos y a la habilidad. El segundo apunta a la priorización, al proceso de cambios y al trabajo de funcionalidades que compite. Un solo "tiempo de cierre de un problema" los mezcla y no da a nadie una acción clara.

**7. Informa de los antiguos.** Muestra la mediana y el percentil 85 de la antigüedad de los problemas abiertos y enumera los más antiguos por servicio. Unos pocos registros de años de antigüedad moverán una media y dirán poco, mientras que la lista de los más antiguos invita a una decisión: corregir, aceptar el riesgo con un responsable con nombre y una fecha de revisión, o cerrar con un motivo.

### Pon la corrección en el flujo normal

**8. Trata una corrección permanente como un elemento de la lista de pendientes con un responsable y una fecha.** Vincula el problema al cambio o elemento de trabajo que lleva la corrección y muestra la corrección en el mismo tablero que el trabajo de funcionalidades. Prioriza con una regla acordada, como ponderar el costo de los incidentes repetidos frente al esfuerzo de corregir. Donde una corrección necesite un cambio, la vía de cambios estándar debe ser rápida para las correcciones de bajo riesgo (véase el tema 4.3, Métricas de habilitación de cambios).

**9. Pide la solución provisional y la fecha de salida juntas.** Una solución provisional compra tiempo. Regístrala como un error conocido, comprueba que el equipo de guardia puede encontrarla y ejecutarla, y fija una fecha de revisión para la corrección. La proporción solo con solución provisional se convierte entonces en una lista de decisiones, no en un montón silencioso de deuda (véase el tema 4.6, Deuda técnica y errores conocidos).

### Comprueba que las correcciones funcionaron

**10. Sigue cada corrección con una ventana de repetición.** Una vez que una corrección está en producción, vigila los incidentes coincidentes durante una ventana indicada e informa la proporción de correcciones que se sostuvieron por cohorte trimestral. La repetición es lo más parecido a una medida de resultado que tiene esta práctica. Si es alta, pregunta si se encontró la causa o solo una contribuyente, y reabre el análisis.

**11. Mide la reutilización de errores conocidos donde trabajan quienes responden.** Cuenta con qué frecuencia se usa un error conocido o su solución provisional cuando llega un incidente coincidente. Una tasa de reutilización baja con muchos errores conocidos suele significar que las entradas son difíciles de encontrar, están desactualizadas o se escribieron para el analista y no para quien responde. Corrige el artículo y su ubicación antes de añadir más (véase el tema 3.6, Métricas de gestión del conocimiento).

### Mantén honestos los números

**12. Muestra cohortes y salvedades junto a cada gráfico.** Registra las definiciones, la mezcla de códigos de cierre y cualquier cambio de regla en el propio gráfico. Las cohortes trimestrales de problemas corregidos muestran la repetición sin mezclar trabajo antiguo y nuevo. Empareja cada recuento con una medida de resultado para que ningún número esté solo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Problemas abiertos y cerrados | Abrir muchos registros triviales; dividir un problema en varios; cerrar registros como duplicados o "no se pudo reproducir" para despejar la lista | Mezcla de códigos de cierre; tasa de repetición tras la corrección; una muestra de registros cerrados leída cada trimestre |
| Antigüedad de la lista de pendientes de problemas | Cerrar los registros más antiguos sin una corrección; reabrir como un registro nuevo para reiniciar el reloj; reclasificar un problema como una solicitud | Vincular los registros nuevos con sus originales e informar la antigüedad desde el primer registro; lista de cierres por motivo; revisión de los riesgos aceptados |
| Tasa de vínculos de incidentes con problemas | Vincular cada incidente a un problema comodín vago para subir la tasa | Proporción de vínculos que apuntan a los cinco mayores problemas; muestra de vínculos comprobados en busca de una coincidencia real; repetición de los síntomas vinculados |
| Tiempo hasta la causa raíz | Registrar una causa rápida y superficial para detener el reloj; nombrar el "error humano"; saltarse a la segunda persona revisora | Tasa de repetición tras la corrección; la taxonomía de causas con el "error humano" no aceptado por sí solo; revisión de una muestra de causas frente a la evidencia |
| Tasa de reutilización de errores conocidos | Contar un vínculo añadido después de cerrado el incidente; añadir un error conocido a cada incidente de un servicio | Tiempo entre el cierre del incidente y el vínculo; opinión de quienes responden sobre si la entrada ayudó; revisión de las entradas no usadas en 90 días |
| Tiempo hasta la corrección permanente | Marcar el cambio como implementado antes de verificar la corrección; cerrar como riesgo aceptado para evitar el trabajo | Tasa de repetición tras la corrección; lista de riesgos aceptados con responsable y fecha de revisión; paso de verificación antes de detener el reloj |
| Tasa de repetición tras la corrección | Definir los síntomas de forma estrecha para que las repeticiones no coincidan; ampliar la ventana de cierre para que las correcciones caigan en cohortes anteriores; retrasar el vínculo | Taxonomía de causas revisada por alguien ajeno al equipo propietario; tasa de vínculos de incidentes; ventana fija indicada de antemano |
| Proporción solo con solución provisional | Programar una corrección provisional sin fecha real; mover problemas a riesgo aceptado; bajar la prioridad del problema | Antigüedad de las correcciones programadas que se han retrasado; lista de riesgos aceptados revisada con un responsable ejecutivo con nombre; costo de los incidentes repetidos por problema |

Una lectura sana parece tranquila y algo aburrida. Los recuentos de abiertos y cerrados van más o menos al mismo paso, los problemas abiertos más antiguos tienen cada uno una decisión registrada, la proporción de correcciones que se sostuvieron es alta y las líneas de cohorte son estables, y los errores conocidos los usan las personas que se encuentran con los síntomas. El patrón de alarma es un recuento de cerrados largo y ordenado junto a incidentes que siguen volviendo. Cuando las cifras de actividad parezcan excelentes y los usuarios sigan topándose con el mismo fallo, confía en los usuarios.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Registros de problema formales para incidentes repetidos y graves | Responsable claro, historial y vínculo con las correcciones; respalda la auditoría | Sobrecarga de proceso; los registros pueden quedar obsoletos |
| Corregir causas dentro de la lista de pendientes del equipo sin registro de problema | Rápido, ligero, cercano al trabajo | Los patrones entre equipos pasan inadvertidos; sin error conocido compartido |
| Códigos de cierre estrictos y cohortes trimestrales | Vista honesta del resultado; resiste los recuentos ordenados | Más lento de leer; exige disciplina en la entrada de datos |
| Contar problemas cerrados como meta | Fácil de explicar y de graficar | Invita a cerrar por el recuento; premia los problemas pequeños |
| Seguimiento de la repetición de problemas corregidos | La medida disponible más cercana a si funcionó | Necesita una buena coincidencia de síntomas y una ventana suficientemente larga |
| Seguimiento de la reutilización de errores conocidos | Muestra si el conocimiento ayuda a quienes responden | Depende de que quienes responden vinculen la entrada; puede manipularse |

Los equipos que corrigen causas rápido dentro de su propia lista de pendientes deben seguir registrando la causa donde la organización más amplia pueda verla, para que otro equipo que se encuentre con el mismo síntoma se beneficie. Invierte primero en el vínculo entre incidentes y problemas y en la ventana de repetición. Esas dos piezas hacen interpretable cualquier otra medida.

## Preguntas para conversar con tu equipo

**1. ¿Qué tres incidentes reparamos más a menudo el trimestre pasado, y qué nos impidió corregir su causa?**
Enumera los incidentes repetidos del centro de servicios o de la herramienta de incidentes y ordénalos por número de ocurrencias. Para cada uno, pregunta cuál fue el obstáculo: falta de tiempo de investigación, ausencia de una causa acordada, una corrección que compite con las funcionalidades o una corrección que necesita a otro equipo. El facilitador debe buscar obstáculos que se repitan entre los tres, porque apuntan a una corrección del sistema más que a una técnica.

**2. Cuando vinculamos un incidente con un problema, ¿quién lo hace, cuándo, y cómo sabemos que es el problema correcto?**
Recorre un incidente reciente desde el cierre hasta el vínculo. Anota si el vínculo se hace durante el incidente, al cerrar o en una limpieza posterior. Revisad juntos una pequeña muestra de vínculos en busca de coincidencias reales. Acordad un cambio que haga el vínculo más fácil o más fiable.

**3. ¿Cuánto espera su corrección una causa diagnosticada, y quién decide el orden?**
Toma los problemas con una causa registrada y mira el tiempo transcurrido desde el diagnóstico. Pregunta quién los prioriza y qué regla usa. La conversación suele mostrar que el retraso es una cola delante de la lista de pendientes del producto y no una dificultad técnica. Acordad cómo se comparan las correcciones de problemas con el trabajo de funcionalidades.

**4. ¿Cuáles son nuestras soluciones provisionales más antiguas, y qué perderíamos si las mantuviéramos otro año?**
Nombra las tres soluciones provisionales más longevas y lo que cuestan en esfuerzo manual, riesgo y conocimiento de las personas que aún las recuerdan. Pregunta qué pasaría si la persona que conoce la solución provisional estuviera ausente. Decidid para cada una si corregirla, aceptar el riesgo con un responsable y una fecha de revisión, o retirar el servicio.

**5. Si un problema corregido vuelve, ¿nos enteramos, y con qué rapidez?**
Pregunta cómo se notaría un síntoma que vuelve y quién reabriría el análisis. Discutid si la ventana de repetición es lo bastante larga para el tipo de fallo implicado. El facilitador debe ayudar al grupo a acordar una ventana y una regla de coincidencia, y a decidir qué equipo revisa las coincidencias para que el equipo propietario no califique su propio trabajo.

**6. ¿Usan nuestros errores conocidos las personas de guardia, y qué haría que echaran mano de uno?**
Pregunta a quienes responden cuándo buscaron por última vez un error conocido y qué encontraron. Mira dónde viven las entradas, cómo se titulan y si dicen qué hacer primero. Elegid una entrada para reescribirla con alguien que responde y probarla en la próxima semana de guardia.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen la mayoría de las correcciones permanentes y sienten el tirón del trabajo de funcionalidades. Ganan al ver el costo en incidentes de un fallo recurrente junto al esfuerzo de corregirlo, y al tener un lugar claro para los elementos de corrección en la lista de pendientes. Deben resistir tratar el trabajo de problemas como una interrupción y reservar en su lugar una proporción visible de capacidad para él. La retrospectiva es un lugar natural para detectar patrones y abrir problemas (véase el tema 2.1, Medidas de flujo).

### Equipos de servicio y operaciones

Los equipos de operaciones ven primero los síntomas repetidos y cargan con el costo en avisos y trabajo manual. Mantienen los registros de problemas y de errores conocidos, dirigen la revisión de patrones y comprueban que se hacen los vínculos. Su riesgo es gastar esfuerzo en registros en lugar de eliminar causas. Deben mantener pequeños los códigos de cierre, hacer del error conocido lo primero que ve quien responde y entregar las correcciones al equipo propietario con la evidencia adjunta.

### Liderazgo y gobernanza

Los líderes deciden si el trabajo de fiabilidad gana frente a las funcionalidades, y fijan los incentivos de lo que se registra. Deben pedir la repetición por cohorte y los problemas abiertos más antiguos antes de pedir recuentos, y tratar el riesgo aceptado como una decisión que necesita un responsable con nombre y una fecha de revisión. Informar de una lista de pendientes decreciente sin repetición premia el cierre. La gobernanza debe mirar tendencias y decisiones, no una tabla de clasificación de equipos (véase el tema 4.6, Deuda técnica y errores conocidos).

### Clientes y usuarios

Los usuarios juzgan la gestión de problemas por una sola cosa: si la misma cosa sigue yendo mal. No ven los registros de problemas, y no les importa cuántos se cerraron. Donde los acuerdos lo permitan, informa a los clientes de un problema conocido, de la solución provisional y de la fecha en que se espera una corrección, y avisa luego cuando llegue. Una corrección anunciada y entregada genera más confianza que una silenciosa.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional da soporte a una aplicación de programación clínica usada por plantas y clínicas ambulatorias. Un equipo de producto construye y opera la aplicación, un equipo de infraestructura opera la plataforma y un centro de servicios atiende las llamadas. Todos los números de este ejemplo son ilustrativos.

En una revisión trimestral el jefe del departamento nota que el panel de problemas parece excelente: 46 problemas cerrados frente a 31 abiertos, y el problema abierto más antiguo tiene 140 días. Los jefes de planta siguen quejándose de que la pantalla de programación se congela en el cambio de turno. La responsable del servicio pide la tasa de vínculos de incidentes con problemas y la tasa de repetición tras la corrección, que aún no están en el panel.

Los datos cuentan una historia distinta. La mezcla de códigos de cierre muestra que 22 de los 46 cierres fueron "no se pudo reproducir" o "duplicado". La tasa de vínculos de los incidentes de prioridad alta es del 38 por ciento. Los incidentes de congelación se registraron en cuatro categorías, así que no era visible ningún patrón. Una vez revinculada a mano una muestra de 30 incidentes, 17 apuntaban a una sola causa: un bloqueo de base de datos mantenido por un trabajo nocturno que se alargaba hasta el turno de la mañana. La repetición de los problemas corregidos el trimestre anterior fue del 27 por ciento, más de lo que nadie esperaba.

El equipo toma tres decisiones. Primero, la taxonomía de causas y síntomas gana una entrada de "congelación de la programación", y vincular un problema o "ninguno encontrado" pasa a ser un paso obligatorio en el cierre del incidente. Segundo, el problema del trabajo nocturno pasa de la lista de pendientes de infraestructura al tablero del equipo de producto con un responsable y una fecha objetivo, y una solución provisional (un reinicio programado tras el trabajo) se registra como error conocido y se prueba con el centro de servicios. Tercero, el panel sustituye el recuento de cerrados por tres números: la proporción de correcciones que se sostuvieron a los 90 días, la mediana y el percentil 85 del tiempo desde la causa registrada hasta la corrección, y los problemas abiertos más antiguos con sus decisiones.

Ocho semanas después el bloqueo se elimina con un cambio en el trabajo. Los incidentes de la categoría de congelación bajan de unos nueve al mes a dos, y la reutilización de errores conocidos sube al 71 por ciento para los síntomas que quedan, sobre todo porque el centro de servicios ahora encuentra la entrada del reinicio. El riesgo de manipulación que detectó el equipo estaba en su propio hábito anterior: cerrar registros como "no se pudo reproducir" cuando un incidente caía fuera del horario laboral. La mezcla de códigos de cierre, la muestra de registros cerrados leída cada trimestre y la cohorte de repetición actúan ahora como barreras de protección. Nadie se clasifica, y la revisión enumera servicios y decisiones, no analistas.

## Perspectiva por sector

**Startup.** Rara vez existe un proceso de problemas aparte. El equipo corrige las causas directamente, y el riesgo es que nadie recuerde por qué. Mantén una lista de una página de incidentes recurrentes y sus causas, vincula las correcciones al gestor de incidencias y revisa la lista cada mes. Mide la repetición y la antigüedad de los elementos más antiguos; omite los códigos de cierre formales hasta que el equipo crezca.

**Pequeña empresa.** Una persona de TI o un proveedor de servicios gestionados pueden dirigirlo todo. Pide al proveedor sus registros de problemas y las categorías de incidentes que hay detrás, y la definición escrita de "resuelto". Una lista corta de los cinco problemas repetidos principales, con un responsable con nombre y una fecha para cada uno, supera a una herramienta pesada. Exporta los registros periódicamente para evitar quedar atado.

**Gran empresa.** Muchos servicios y proveedores crean la mayor necesidad de definiciones compartidas. Acordad la taxonomía de causas, los códigos de cierre y la ventana de repetición entre equipos, nombrad responsables de problemas por servicio e informad por servicio y cohorte. Donde un proveedor tenga una corrección, sigue la respuesta del proveedor frente al acuerdo (véase el tema 8.4, Métricas de proveedores y contratos) y escala por una vía documentada.

**Gobierno y sector público.** La auditoría, el control de cambios y la contratación pueden alargar el camino de la causa a la corrección, así que el reloj del tiempo hasta la corrección debe mostrar dónde está el retraso: investigación, aprobación, contratación o programación. Los riesgos aceptados necesitan responsables y fechas de revisión registrados que resistan una auditoría. Las normas de conservación y de privacidad se aplican a los registros de incidentes y problemas, en particular donde aparecen datos clínicos o de ciudadanos.

## Caso de negocio: motivaciones, ROI y TCO

El costo tiene tres partes. La primera es el tiempo de investigación: personas con las habilidades y el acceso para analizar incidentes, lo que compite con su otro trabajo. La segunda es la propia corrección, entregada mediante la lista de pendientes y el proceso de cambios. La tercera es el costo de registrar e informar: vincular incidentes, mantener taxonomías, dirigir la revisión de patrones y mantener la base de datos de errores conocidos. Estos costos son sobre todo tiempo de las personas, así que cuenta las horas.

El retorno aparece como incidentes que dejan de repetirse, menos avisos y menos esfuerzo de soluciones provisionales manuales, una atención de incidentes más corta porque quienes responden encuentran errores conocidos, y menos escalados a los ingenieros. No existe una cifra universal, así que estima la tuya. Para un incidente recurrente, multiplica las ocurrencias por año por el esfuerzo medio de atención y una estimación del impacto en el negocio por ocurrencia, y compáralo luego con el esfuerzo de corregirlo. Revisa la estimación con el responsable del servicio, indícala como estimación y vuelve a ella cuando la ventana de repetición muestre qué ocurrió. La gestión de problemas se amortiza mejor en las pocas causas que producen la mayor parte de la carga de incidentes, que la vista de Pareto encuentra rápido.

## Antipatrones y trampas

- **Cerrar como meta.** Una meta de problemas cerrados premia los registros triviales y el cierre prematuro. Informa primero medidas de resultado y muestra la mezcla de códigos de cierre.
- **Registros de problema como cementerio.** Los registros quedan abiertos sin responsable, fecha ni decisión. Revisa la lista de los más antiguos con una cadencia y exige una decisión para cada elemento.
- **Detenerse en el "error humano".** Nombra quién tocó el sistema y no por qué el sistema permitió el fallo. Acepta una causa solo cuando nombre una condición que pueda cambiarse.
- **No corregir nada hasta que la causa raíz sea segura.** Los fallos complejos pueden no tener una causa única. Aplica una solución provisional y la corrección mejor respaldada, y vigila luego la repetición.
- **Soluciones provisionales sin salida.** Una solución provisional sin fecha de revisión se vuelve permanente. Registra un responsable y una fecha cuando se cree el error conocido.
- **Vínculos débiles de incidentes.** Los vínculos ausentes o descuidados vuelven invisible la repetición. Haz del vínculo parte del cierre del incidente y muestrea los vínculos.
- **Trabajo de problemas fuera de la lista de pendientes.** Las correcciones que viven en una cola aparte esperan para siempre. Pon el elemento de corrección en el tablero del equipo propietario y priorízalo frente a las funcionalidades.
- **Comparar analistas o equipos por registros cerrados.** Premia los servicios fáciles e invita a la manipulación. Compara los servicios a lo largo del tiempo con su propio historial y lee las cohortes.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Identificación y vinculación de problemas | Problemas abiertos solo tras grandes caídas; sin vínculos de incidentes | Algunos equipos vinculan incidentes; las categorías difieren por equipo | Taxonomía y códigos de cierre compartidos; vínculo hecho al cerrar el incidente | Tasa de vínculos y calidad de las coincidencias muestreadas y revisadas | Patrones detectados entre equipos y proveedores, con errores conocidos compartidos |
| Causa raíz y errores conocidos | Causa registrada en texto libre, si acaso | Errores conocidos guardados por algunos equipos en lugares distintos | Una base de datos de errores conocidos; revisión de las causas por una segunda persona | Tiempo hasta la causa raíz y reutilización de errores conocidos con seguimiento de su tendencia y acción | Quienes responden, los proveedores y los clientes aportan y usan entradas compartidas |
| Entrega de la corrección | Las correcciones ocurren cuando alguien tiene tiempo | Correcciones seguidas en la lista propia de un equipo | Corrección vinculada a un elemento de la lista de pendientes o a un cambio con responsable y fecha | Tiempo hasta la corrección permanente revisado, con capacidad reservada para ello | Prioridad de las correcciones fijada conjuntamente con las hojas de ruta de producto y de proveedores |
| Resultado y aprendizaje | Se informan recuentos de registros | Antigüedad de la lista de pendientes informada en algunas revisiones | Repetición tras la corrección y proporción solo con solución provisional informadas con definiciones | Cohortes emparejadas con barreras de protección y usadas en decisiones de financiación | Definiciones revisadas cuando dejan de informar decisiones; la mejora es rutinaria |

## Lista de verificación

- [ ] El registro de métricas define un problema, un error conocido y cada código de cierre.
- [ ] El cierre del incidente incluye un vínculo con un problema, un error conocido o "ninguno encontrado".
- [ ] Existe una taxonomía de causas y síntomas, con definiciones y ejemplos.
- [ ] Cada problema tiene un responsable, un desencadenante y una fecha de decisión.
- [ ] El tiempo hasta la causa raíz y el tiempo hasta la corrección permanente se miden por separado, con percentiles.
- [ ] Cada corrección permanente está vinculada a un elemento de la lista de pendientes o a un cambio con un responsable.
- [ ] Cada solución provisional tiene un responsable y una fecha de revisión.
- [ ] La repetición tras la corrección se sigue por cohorte trimestral con una ventana indicada.
- [ ] La reutilización de errores conocidos se mide donde trabajan quienes responden.
- [ ] Los problemas abiertos más antiguos se revisan con una cadencia y cada decisión se registra.
- [ ] Se lee cada trimestre una muestra de registros cerrados para comprobar los códigos de cierre y las causas.
- [ ] Los informes describen servicios y equipos, y ninguna tabla clasifica a individuos.

## Prompts de IA

**Encuentra problemas candidatos en un conjunto de incidentes.**

```text
Esta es una exportación de incidentes de [service or team] desde [start date]
hasta [end date]: [paste incident fields such as id, opened time, category,
short description, resolution note]. Agrupa los incidentes que puedan compartir
una causa subyacente, explica la evidencia de cada grupo y ordena los grupos por
recuento de ocurrencias y por [impact measure, for example hours of user
impact]. Marca los grupos con evidencia débil. No inventes causas, recuentos ni
valores de referencia. Enumera tus supuestos y los datos adicionales que
aumentarían tu confianza.
```

**Revisa los códigos de cierre y los registros de problemas.**

```text
A continuación hay [number] registros de problemas cerrados de [service or
team]: [paste id, closing code, recorded cause, fix reference, closing date].
Comprueba en cada registro si hay un código de cierre que no coincide con su
texto, una causa que nombra a una persona en lugar de una condición y una
corrección sin vínculo. Resume los patrones y sugiere tres preguntas para un
revisor. No clasifiques a personas ni inventes hechos sobre los registros.
Enumera tus supuestos.
```

**Diseña una medida de repetición.**

```text
Queremos medir si los problemas corregidos siguen corregidos en [service or
team]. Nuestras herramientas son [ITSM tool, deployment tool], nuestras
categorías de incidentes son [list] y nuestros códigos de cierre son [list].
Propón una definición, fórmula, inicio y fin del reloj, regla de coincidencia de
síntomas, ventana de repetición y exclusiones, con un diseño de gráfico que
muestre cohortes trimestrales. Sugiere cómo podría manipularse y una barrera de
protección para cada caso. Pídeme los umbrales que necesites en lugar de
inventarlos. Enumera tus supuestos.
```

**Prepara una revisión de decisiones de los problemas antiguos.**

```text
Estos son los problemas abiertos de más de [number] días de [service or team]:
[paste id, age, priority, owner, last update, workaround status]. Redacta un
orden del día para una revisión de [length] minutos en la que cada elemento
reciba una de tres decisiones: corregir con una fecha, aceptar el riesgo con un
responsable con nombre y una fecha de revisión, o cerrar con un motivo. Sugiere
la evidencia que llevar para cada decisión. No inventes costos ni resultados.
Enumera tus supuestos y las preguntas que debería responder primero.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas que definen las medidas de incidentes, cambios y conocimiento de las que dependen las métricas de problemas, y la barrera de protección que emparejar con cada una.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de problemas nueva o editada indica sus relojes, exclusiones, vector de manipulación y barrera de protección.

## Puntos clave

- La medida de la gestión de problemas es la repetición: si los incidentes vinculados a un problema dejan de volver.
- Cronometra las etapas por separado, desde el registro hasta la causa registrada y desde la causa hasta la corrección funcionando en producción.
- Vincula los incidentes con los problemas al cerrar, acuerda cómo se emparejan los síntomas y muestrea los vínculos.
- Una solución provisional es una etapa con un responsable y una fecha de revisión, y la proporción solo con solución provisional muestra cuánto riesgo se está cargando.
- Pon las correcciones permanentes en la lista de pendientes del equipo propietario e informa medidas de resultado antes que recuentos de registros.
- Describe servicios, cohortes y decisiones. No clasifiques nunca a analistas ni a equipos por problemas cerrados.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
