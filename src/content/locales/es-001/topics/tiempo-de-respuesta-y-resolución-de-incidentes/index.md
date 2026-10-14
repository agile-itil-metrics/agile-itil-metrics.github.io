# Tiempo de respuesta y resolución de incidentes

**Las medidas de tiempo de los incidentes describen cuánto esperan los usuarios en cada etapa, así que infórmalas como distribuciones con los relojes escritos, nunca como una media única, y empareja cada número de velocidad con una medida de si la corrección se sostuvo.**

## Resumen y motivación

Un incidente, en la gestión de servicios de TI (ITSM), es una interrupción no planificada de un servicio o una reducción de su calidad. La [gestión de incidentes](https://en.wikipedia.org/wiki/Incident_management) es la práctica que restablece el servicio normal tan rápido como es seguro. En ITIL 4, la práctica se llama gestión de incidentes y está entre las prácticas de gestión de servicios del marco [ITIL](https://en.wikipedia.org/wiki/ITIL). Sus equivalentes ágiles son el hábito del equipo de tratar el trabajo no planificado como un flujo de trabajo de primera clase, y las prácticas de guardia y de revisión sin culpa que provienen de la [ingeniería de fiabilidad de sitios](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la disciplina de operar servicios con métodos de ingeniería de software.

El tiempo es la forma más natural de describir un incidente, y la que más se usa mal. Un único incidente pasa por varias etapas. Algo se rompe, un monitor o un usuario lo nota, una persona acusa recibo de la alerta, alguien empieza a trabajar, el servicio se restablece para los usuarios y el ticket se cierra una vez que la causa se ha tratado o aplazado. Cada intervalo entre dos de estos eventos es una medida distinta, con un responsable distinto, una causa de retraso distinta y un remedio distinto. Llamar a todo ello "tiempo de resolución" oculta dónde vive el retraso.

Este tema cubre las medidas de tiempo transcurrido que siguen a un incidente de principio a fin: el **tiempo de detección**, el **tiempo de acuse de recibo**, el **tiempo hasta la primera respuesta**, el **tiempo de restablecimiento** y el **tiempo de resolución**. También cubre la antigüedad de los incidentes abiertos, el número de veces que un incidente cambia de manos y los problemas estadísticos del resumen más conocido, el tiempo medio de restablecimiento o de resolución (MTTR). Los recuentos, las categorías y la prioridad se tratan en otro lugar (véase el tema 3.2, Volumen y prioridad de incidentes). Los incidentes grandes e inusuales tienen sus propias medidas (véase el tema 3.4, Métricas de incidentes graves).

### Términos usados en este tema

- **Tiempo de detección (TTD).** Tiempo transcurrido desde que el fallo empezó a afectar a los usuarios hasta que la organización lo supo, por monitorización o por un informe de un usuario.
- **Tiempo de acuse de recibo (TTA).** Tiempo transcurrido desde que se genera la alerta o el ticket hasta que una persona o equipo con nombre acepta la responsabilidad.
- **Tiempo hasta la primera respuesta.** Tiempo transcurrido desde que se registra el incidente hasta la primera acción o mensaje significativo al usuario afectado. Una respuesta automática no cuenta.
- **Tiempo de restablecimiento.** Tiempo transcurrido desde el inicio del impacto en los usuarios hasta que estos pueden volver a usar el servicio, aunque la causa subyacente solo se haya sorteado con una solución provisional.
- **Tiempo de resolución.** Tiempo transcurrido desde que se registra el incidente hasta que se cierra porque el servicio está restablecido y el usuario lo ha confirmado o se le ha dado una oportunidad razonable de confirmarlo.
- **Tiempo medio de restablecimiento o de resolución (MTTR).** La media aritmética de una de esas duraciones sobre un conjunto de incidentes. La letra R se lee como reparación, recuperación, restablecimiento, resolución o respuesta según quién hable, lo que es el primer problema de la abreviatura. El [artículo de Wikipedia sobre el tiempo medio de reparación](https://en.wikipedia.org/wiki/Mean_time_to_repair) enumera las variantes.
- **Acuerdo de nivel de servicio (SLA).** Un [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement) es un compromiso entre un proveedor y un cliente sobre el nivel de servicio, que a menudo incluye tiempos objetivo de respuesta y de resolución por prioridad.

### Por qué la media es un mal resumen

Las duraciones de los incidentes no son simétricas. La mayoría de los incidentes son cortos, unos pocos son muy largos, y los largos dominan cualquier promedio. Las duraciones de este tipo suelen describirse bien con una forma asimétrica a la derecha como la [distribución log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution). En datos asimétricos, la media puede quedar muy por encima de lo que parece un incidente típico, y una sola caída larga puede moverla más que un mes de mejoras.

El equipo de SRE de Google ha publicado un análisis de este problema. Sostiene que, para los conjuntos de datos de incidentes que estudió, la dispersión de las duraciones de los incidentes es lo bastante amplia como para que el MTTR pueda ocultar mejoras reales o mostrar cambios que son ruido, y recomienda mirar distribuciones en su lugar (Davidovič, 2021, listado en las referencias). El razonamiento se apoya en estadísticas bien conocidas, así que puedes comprobarlo con tus propios datos sin fiarte de la conclusión de nadie: traza las duraciones de tus incidentes, calcula la media y la [mediana](https://en.wikipedia.org/wiki/Median) y mira cuánto se separan (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

La alternativa son los [percentiles](https://en.wikipedia.org/wiki/Percentile). La mediana dice cuánto esperó un usuario típico. El percentil 85 o 95 dice cuánto esperaron los menos afortunados. Los clientes recuerdan la espera larga, no el promedio, así que un compromiso por percentil como "nueve de cada diez incidentes de esta prioridad restablecidos dentro de un tiempo indicado" encaja mucho mejor con su experiencia que una media.

### En qué difieren las visiones de ITIL y ágil

La visión de ITIL tiende a partir de una prioridad y una meta. El impacto y la urgencia fijan una prioridad, la prioridad fija los tiempos objetivo de respuesta y de resolución, y un acuerdo de nivel de servicio puede asociar consecuencias a incumplirlos. Esto es ordenado y fácil de auditar, y propenso a la manipulación que invitan las metas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

La visión ágil y de SRE parte del impacto en el usuario y del flujo. Pregunta con qué rapidez limita el equipo el daño, qué parte del tiempo transcurrido de un incidente fue trabajo activo y qué parte fue espera, y qué aprendió el equipo. Prefiere medidas de impacto (usuarios afectados, minutos de servicio degradado) a medidas del estado del ticket, y trata el reloj del ticket como un indicador práctico pero imperfecto. Las dos visiones son compatibles. Usa la estructura de prioridades de ITIL para decidir qué medir y para quién, y usa el pensamiento de flujo y de impacto para decidir si el número significa algo.

## Principios clave

- **Nombra la etapa, no "resolución".** Detectar, acusar recibo, responder, restablecer y resolver son preguntas distintas con responsables distintos. Informa cada una con su propio nombre.
- **Escribe ambos relojes.** Toda medida de tiempo indica qué evento la inicia, cuál la detiene y qué estados la pausan. La mayor parte de la manipulación vive en estos límites.
- **Informa distribuciones.** Muestra la mediana, un percentil alto y la antigüedad del incidente abierto más antiguo. Evita una media sola, que los datos asimétricos vuelven poco fiable.
- **Mide el restablecimiento por separado del cierre.** A los usuarios les importa cuándo volvió el servicio. El ticket puede cerrarse más tarde, cuando se ha tratado la causa.
- **Empareja la velocidad con la durabilidad.** Un restablecimiento rápido que el mismo incidente deshace al día siguiente no es una mejora. Muestra las tasas de repetición y de reapertura junto a cada medida de tiempo.
- **Describe equipos, servicios y sistemas.** No clasifiques nunca a agentes o ingenieros individuales por el tiempo de respuesta o de resolución.
- **Segmenta antes de comparar.** Compara lo comparable, por prioridad y por servicio, porque un número combinado mezcla restablecimientos de contraseña con fallos de bases de datos.

## Definiciones de métricas

Cada fila indica sus relojes. El tiempo natural y el tiempo laboral son distintos: di cuál usas. Donde una medida usa percentiles, la tabla da los percentiles 50 y 95, y los equipos pueden añadir el 85.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo de detección | Cuánto tiempo afectó un fallo a los usuarios antes de que la organización lo supiera | El reloj arranca en el primer momento de impacto en los usuarios (tomado de los datos de monitorización o del inicio de impacto confirmado registrado en la revisión); se detiene en la primera alerta o informe de un usuario. Informado como mediana y percentil 95 por servicio. Los incidentes sin inicio conocido se cuentan y se informan por separado, no se descartan | minutos | Plataforma de monitorización y alertas; registro del incidente con un campo de inicio de impacto | Gestión de incidentes; monitorización y gestión de eventos | Trabajo de observabilidad y de calidad de alertas (véase el tema 5.5, Métricas de monitorización y calidad de las alertas) | Mensual |
| Tiempo de acuse de recibo | Cuánto espera una alerta o un ticket generados antes de que una persona los asuma | El reloj arranca cuando se dispara la alerta o se registra el ticket; se detiene cuando una persona o equipo con nombre lo acepta. La asignación automática no detiene el reloj. Informado como mediana y percentil 95 por prioridad | minutos | Herramienta de avisos; historial de asignaciones de la herramienta ITSM | Gestión de incidentes; centro de servicios | Respuesta de guardia en una rotación de SRE | Mensual |
| Tiempo hasta la primera respuesta | Cuánto espera el usuario una primera respuesta humana y útil | El reloj arranca cuando se registra el incidente; se detiene en el primer mensaje o acción humana que atienda el informe. Se excluyen los acuses automáticos y los recibos de plantilla. Se indica el reloj de horario laboral | minutos u horas laborables | Registro de comunicaciones de la herramienta ITSM | Centro de servicios; gestión de incidentes | Retroalimentación oportuna al usuario, como en un acuerdo de trabajo | Semanal |
| Tiempo de restablecimiento | Cuánto tiempo estuvieron los usuarios sin un servicio que funcionara | El reloj arranca al inicio del impacto en los usuarios; se detiene cuando los usuarios pueden volver a usar el servicio, también mediante una solución provisional o una reversión. Una causa corregida más tarde no lo alarga. Informado como mediana y percentil 95 por prioridad y servicio | minutos u horas | Registro del incidente con marcas de inicio de impacto y de restablecimiento; monitorización | Gestión de incidentes | Tiempo medio de restablecimiento en términos DORA, leído como una distribución (véase el tema 2.8, Métricas DORA) | Mensual |
| Tiempo de resolución | Cuánto tiempo estuvo abierto el registro del incidente hasta cerrarse | El reloj arranca cuando se registra el incidente; se detiene cuando se cierra tras el restablecimiento y la confirmación del usuario o una espera razonable. El tiempo en "a la espera del cliente" se muestra como una proporción separada e informada y no se resta del titular. Informado como mediana y percentil 95 por prioridad | horas u horas laborables | Historial de estados de la herramienta ITSM | Gestión de incidentes | Tiempo de ciclo del trabajo no planificado (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Mensual |
| Antigüedad del incidente abierto más antiguo | Cuánto tiempo lleva abierto el incidente abierto más antiguo | Ahora menos la hora de registro, para cada incidente abierto, enumerando los más antiguos por prioridad. Los estados de pausa no se restan | días | Lista de incidentes abiertos de la herramienta ITSM | Gestión de incidentes | Antigüedad del elemento de trabajo en el tablero del equipo (véase el tema 2.1, Medidas de flujo) | Semanal |
| Proporción de tiempo activo | La proporción del tiempo transcurrido de un incidente dedicada a trabajo activo y no a esperar | Suma del tiempo en estados activos / tiempo total desde el registro hasta el cierre, de los incidentes cerrados en el periodo. Los estados activos son aquellos en que una persona trabaja el incidente; los estados de espera se enumeran en la definición | porcentaje | Historial de estados de la herramienta ITSM | Gestión de incidentes | Eficiencia del flujo (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Trimestral |
| Recuento de reasignaciones | Cuántas veces cambia de equipo propietario un incidente antes del restablecimiento | Recuento de cambios de grupo de asignación desde el registro hasta el restablecimiento, resumido como la mediana y la proporción de incidentes con tres o más. Contado por servicio y prioridad, nunca por agente | recuento | Historial de asignaciones de la herramienta ITSM | Gestión de incidentes; centro de servicios | Número de traspasos (véase el tema 9.3, Métricas de colaboración y traspasos) | Mensual |

Dos notas sobre los datos. Primero, un tiempo de restablecimiento solo es tan bueno como su hora de inicio. Muchos registros de incidentes capturan cuándo alguien escribió el ticket, que puede ir por detrás del inicio real del impacto en horas. Si tu herramienta no tiene un campo de inicio de impacto, añade uno y trata los inicios estimados como estimaciones (véase el tema 1.5, Fuentes de datos e instrumentación). Segundo, cuando compares periodos, mantén las mismas definiciones de prioridad, o la línea de tendencia reflejará la reclasificación.

## Recomendaciones

### Define los relojes

**1. Escribe una hoja de reloj para cada medida de tiempo.** Para cada etapa, enumera el evento de inicio, el evento de fin, los estados que pausan el reloj, la base temporal (natural o laboral) y las exclusiones. Guárdala en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**2. Separa el restablecimiento del cierre.** Registra cuándo volvió el servicio para los usuarios como su propia marca de tiempo, aparte de cuándo se cerró el ticket. El restablecimiento es lo que sienten los usuarios, y el cierre incluye la verificación, la documentación y el tratamiento de la causa. Los equipos que usan una sola marca para ambos son premiados por cerrar los tickets pronto o penalizados por un seguimiento cuidadoso.

**3. Registra el inicio del impacto, no solo la hora de registro.** Pide a quienes responden que anoten cuándo sintieron los usuarios el efecto por primera vez, usando datos de monitorización cuando sea posible. Marca el campo como estimado cuando lo sea. El tiempo de detección carece de sentido sin él, y el tiempo de restablecimiento se distorsiona por su ausencia.

**4. Limita los estados de pausa e informa de su uso.** Esperar a un cliente o a un proveedor es a veces legítimo. Permite una lista corta y con nombre de estados de pausa, exige un motivo y muestra la proporción del tiempo del incidente pasada en cada uno. Una proporción creciente de tiempo en pausa es señal de deriva, no de velocidad.

### Informa con honestidad

**5. Sustituye la media por la mediana y un percentil alto.** Muestra los percentiles 50 y 95 de cada etapa, por prioridad, como una serie temporal. Muestra el número de incidentes detrás de cada punto, porque un percentil de diez incidentes es una cifra débil. Donde los recuentos sean pequeños, traza los incidentes individuales como puntos y omite la línea de resumen.

**6. Muestra la antigüedad de los incidentes abiertos más antiguos.** Un gráfico de duraciones de incidentes cerrados es ciego a los incidentes aún abiertos, que son los peores. Enumera cada semana los incidentes abiertos más antiguos por prioridad. Es difícil de mejorar sin terminar el trabajo, por lo que es un buen complemento de cualquier gráfico de tiempo de resolución.

**7. Segmenta por prioridad y por servicio.** Un tiempo de resolución combinado sube cuando la mezcla se desplaza hacia incidentes complejos, aunque cada tipo de incidente se atienda más rápido. Compara dentro de una prioridad y dentro de un servicio, y muestra la mezcla junto al tiempo (véase el tema 3.2, Volumen y prioridad de incidentes). No saques conclusiones de un mes en que cambió la mezcla.

**8. Usa límites de control para separar la señal del ruido.** Las duraciones de los incidentes varían mucho de una semana a otra sin que cambie nada. Un gráfico de control, con límites calculados a partir de un periodo estable, muestra cuándo un cambio es lo bastante grande como para merecer una explicación (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

### Empareja la velocidad con la durabilidad

**9. Muestra las tasas de reapertura y de repetición junto a cada medida de tiempo.** La tasa de reapertura es la proporción de incidentes reabiertos dentro de una ventana indicada. La repetición es el mismo servicio y síntoma reapareciendo dentro de una ventana. Si el tiempo de restablecimiento baja mientras sube la repetición, el equipo está aplicando parches rápidos. Envía los incidentes repetidos a la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas).

**10. Mide la espera y los traspasos, porque ahí se va el tiempo.** En la mayoría de los servicios, buena parte del tiempo transcurrido de un incidente es esperar a una persona, una decisión o un proveedor, más que trabajar. La proporción de tiempo activo y el recuento de reasignaciones muestran dónde mirar. La solución a un tiempo de resolución largo suele ser una regla de encaminamiento más clara o una guardia compartida, no teclear más rápido.

**11. Usa metas sobre percentiles, con una persona en el circuito.** Si necesitas una meta, enúnciala como un compromiso por percentil para una prioridad, como "nueve de cada diez incidentes de prioridad 2 restablecidos dentro de un tiempo indicado", y acuérdala con las personas que la cumplirán. Revisa los incumplimientos como preguntas sobre el sistema, no como faltas de la persona de guardia (véase el tema 5.1, Métricas de SLA, OLA y XLA).

**12. Pregunta a los usuarios por la experiencia.** Una breve encuesta sobre una muestra de incidentes cerrados y la lectura de los comentarios dirán si el número coincide con cómo se sintió la espera. A los usuarios suele importarles más la comunicación oportuna que el minuto exacto del restablecimiento (véase el tema 6.1, Métricas de satisfacción del cliente).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tiempo de detección | Fijar el inicio del impacto más tarde de lo que fue; ampliar los umbrales de las alertas para que cuenten menos fallos como incidentes; contar solo los incidentes que captó el monitor | Proporción de incidentes informados primero por usuarios y no por la monitorización; revisión periódica de las estimaciones de inicio de impacto frente a los datos de monitorización |
| Tiempo de acuse de recibo | Autoasignar o autoacusar recibo para detener el reloj; acusar recibo de la alerta y luego no hacer nada | Tiempo hasta la primera respuesta y tiempo de restablecimiento de los mismos incidentes; muestra de alertas acusadas sin actividad posterior |
| Tiempo hasta la primera respuesta | Enviar una respuesta de plantilla o de una palabra para detener el reloj | Revisar una muestra de primeras respuestas por su sustancia; contactos repetidos y comentarios de las encuestas |
| Tiempo de restablecimiento | Declarar el servicio restablecido antes de que los usuarios puedan usarlo; restablecer suprimiendo el síntoma; registrar caídas como mantenimiento planificado | Repetición dentro de una ventana; impacto informado por los usuarios después de la hora de restablecimiento; proporción de incidentes reetiquetados a posteriori |
| Tiempo de resolución | Mover tickets a "a la espera del cliente" o "en espera"; cerrar tras un solo intento de contacto; dividir un incidente en hijos para cerrar antes al padre | Proporción de tiempo en estados de pausa; tasa de reapertura; antigüedad del incidente abierto más antiguo; leer una muestra de notas de cierre |
| Antigüedad del incidente abierto más antiguo | Cerrar y volver a plantear el ticket más antiguo; reclasificarlo como un problema o una solicitud para retirarlo de la lista | Vincular los duplicados a los originales e informar la antigüedad vinculada; recuento de incidentes convertidos en problemas o solicitudes en cada periodo |
| Proporción de tiempo activo | Registrar trabajo breve y sin sentido para marcar tiempo como activo; pasar a estados activos sin esfuerzo | Comparar el tiempo activo con resultados como el tiempo de restablecimiento; muestra de notas de trabajo |
| Recuento de reasignaciones | Reabrir bajo el mismo equipo en lugar de pasar el trabajo; pasar el trabajo por un canal lateral para que la herramienta no muestre ningún traspaso | Tiempo de restablecimiento y satisfacción de los usuarios; observación periódica de cómo se mueve el trabajo entre equipos |

Una lectura sana muestra medianas y percentiles de cola que se mueven juntos, una proporción pequeña y estable de tiempo en pausa, pocos incidentes informados primero por los usuarios, una repetición decreciente y comentarios de encuesta que coinciden con los datos de los tickets. Trata una mejora de titular que llega sola como un aviso para una revisión de manipulación.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Tiempo medio de restablecimiento | Familiar; un solo número; fácil de seguir en el tiempo | Dominado por unos pocos incidentes largos; oculta el cambio real; malo para muestras pequeñas |
| Mediana más un percentil alto | Describe la experiencia típica y la de los menos afortunados; resiste los valores atípicos | Necesita suficientes incidentes; dos números que explicar |
| Trazar cada incidente | Muestra la forma completa y los valores atípicos; honesto con poco volumen | Más difícil de leer con mucho volumen; necesita un facilitador |
| Metas por prioridad | Expectativas claras; respalda contratos y escalados | Invita a la reclasificación y a la pausa del reloj; puede llevar el esfuerzo hasta el límite de la meta |
| Medidas del reloj del ticket | Baratas, disponibles en toda herramienta ITSM | Miden el ticket, no la experiencia del usuario; sensibles al flujo de estados |
| Medidas basadas en el impacto | Cercanas a lo que sienten los usuarios; resisten los trucos con tickets | Necesitan datos de monitorización y un campo de inicio de impacto; más difíciles de auditar |

La respuesta pragmática es conservar el reloj del ticket porque toda herramienta lo tiene, añadir una marca de restablecimiento basada en el impacto donde la monitorización lo permita y usar distribuciones para ambos. La media es aceptable como descripción aproximada de un conjunto único, estable y grande de incidentes similares, y nunca debe ser el único número de la página.

## Preguntas para conversar con tu equipo

**1. ¿Qué etapa de un incidente tarda más para nosotros, y cómo lo sabemos?**
Dibuja la cronología del incidente en una pizarra con las etapas desde el inicio del impacto hasta el cierre. Toma los últimos diez incidentes y marca cuánto duró cada etapa, usando los datos de la herramienta y la memoria de quienes respondieron. El facilitador debe buscar la etapa donde se agrupa el tiempo, que suele ser esperar un traspaso o una decisión, no el trabajo técnico. Acordad a qué etapa conviene prestar atención primero.

**2. ¿Dónde arranca y se detiene nuestro reloj, y quién lo decidió?**
Pide a cada persona que diga cuándo cree que "empezó" un incidente y cuándo "terminó". Las respuestas diferirán, y las diferencias son el hallazgo. Compáralas con los campos de la herramienta y el flujo de estados. Recoge las definiciones acordadas en el registro de métricas y anota dónde la herramienta aún no puede respaldarlas.

**3. ¿Qué mostrarían nuestras medianas y nuestros percentiles 95 que nuestra media oculta?**
Antes de la reunión, calcula la media, la mediana y el percentil 95 de los incidentes del último trimestre por prioridad. Muéstralos lado a lado y traza las duraciones. Pregunta qué concluiría el equipo de cada uno. El facilitador debe notar si uno o dos incidentes mueven la media y discutir si el equipo cree que la mediana representa la espera de un usuario típico.

**4. ¿Cuánto tiempo pasamos esperando en lugar de trabajando, y por qué?**
Elige tres incidentes largos y sigue su historial de estados. Cuenta las horas en estados activos y las horas en estados de espera, y anota a quién o qué se esperaba. Pregunta qué esperas podrían acortarse con una decisión, una vía de escalado más clara o una guardia compartida.

**5. Si nos pidieran recortar una cuarta parte el tiempo de resolución, ¿cómo lo haríamos sin ayudar a los usuarios?**
Es la revisión de manipulación en miniatura. Enumera todos los movimientos que mejorarían el número sin mejorar el servicio, como pausar el reloj, cerrar antes de tiempo o reetiquetar prioridades. Para cada movimiento, pregunta si una barrera de protección lo detectaría. La lista es el comienzo de tu columna de vectores de manipulación y muestra dónde hay que ajustar las definiciones.

**6. ¿Cómo sabemos que un restablecimiento más rápido fue real?**
Pide la evidencia: repetición, reapertura, comentarios de los usuarios y cualquier incidente posterior con el mismo síntoma. Mira una mejora reciente y pregunta si se sostuvo un mes después. El facilitador debe orientar al grupo hacia correcciones duraderas. Termina decidiendo qué medida de durabilidad se une al panel.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de producto que operan sus propios servicios ven el tiempo de los incidentes como un costo del trabajo no planificado que desplaza al trabajo planificado. Sigue cuánto de cada periodo de flujo se llevan los incidentes y trata los incidentes repetidos como elementos de la lista de pendientes del equipo propietario. Las prácticas de versiones que hacen rápida la reversión acortan el restablecimiento, así que el tiempo de los incidentes es en parte una medida de entrega (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

### Equipos de servicio y operaciones

Los equipos de operaciones poseen los relojes y sienten la presión de las metas. Deben publicar la hoja de reloj, auditar el uso de los estados de pausa, informar medianas y percentiles de cola por prioridad y mantener una lista semanal de los incidentes abiertos más antiguos. La carga de guardia y la calidad de las alertas dan forma a los tiempos de acuse de recibo y de detección, así que míralas juntas (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

### Liderazgo y gobernanza

Los líderes deben preguntar qué etapa es la más lenta y qué se hace al respecto, no por qué un número está en rojo. Deben esperar informes por percentiles, una medida de durabilidad junto a toda medida de velocidad y una explicación cuando cambien las definiciones. La financiación de la monitorización, los manuales de procedimiento y el trabajo sobre problemas suele rendir más que la presión sobre quienes responden, porque reduce el retraso que quienes responden no pueden controlar.

### Clientes y usuarios

Los usuarios viven la espera, la calidad de la comunicación y si el problema vuelve. Rara vez ven los nombres de las etapas. Dales una primera respuesta honesta, diles qué esperar y actualízalos según un calendario. Sus comentarios de encuesta y sus contactos repetidos son la mejor comprobación de si el reloj del ticket dice la verdad.

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio opera una plataforma de pedidos, un servicio de cuentas de clientes y un sistema interno de almacén. Los equipos de producto poseen sus servicios y comparten una rotación de guardia con un pequeño grupo de operaciones. Todos los números de este ejemplo son ilustrativos.

La dirección fija como meta un "tiempo medio de resolución inferior a cuatro horas" para los incidentes de prioridad 2. En el primer trimestre, el panel muestra una media de 3,8 horas, y la meta parece cumplida. El personal del almacén dice que algunas caídas parecen durar todo el día. La responsable de operaciones traza los 41 incidentes de prioridad 2 (ilustrativo) del trimestre y encuentra una mediana de 1,5 horas y un percentil 95 de 11 horas. Tres incidentes explican la mayor parte de la cola larga.

Ella rastrea los tres incidentes largos. Cada uno pasó la mayor parte de su tiempo en "a la espera del proveedor" o "a la espera del cliente". En dos, el ticket se había cerrado y vuelto a plantear como incidente nuevo cuando el original "incumplió", lo que reinició el reloj. Un tercero implicó cuatro reasignaciones entre equipos a lo largo de dos días. Una muestra de notas de cierre muestra que 6 de 30 tickets revisados (ilustrativo) se cerraron tras un único intento de contactar al usuario.

El equipo hace cuatro cambios. Añaden un campo de inicio de impacto y una marca de restablecimiento al formulario del incidente. Informan la mediana y los percentiles 85 y 95 por prioridad, y los incidentes abiertos más antiguos cada semana. Muestran en la misma página la proporción de tiempo en estados de pausa y la tasa de repetición. Y vinculan los tickets replanteados a sus originales para que la antigüedad se traslade.

En la siguiente revisión, la media del titular ha subido a 4,6 horas porque los tickets replanteados ahora cuentan completos. El equipo explica la subida a la dirección como una corrección. El percentil 95 y el ticket abierto más antiguo son ahora los números sobre los que trabajan, y el recuento de reasignaciones apunta a una brecha de encaminamiento entre el servicio de pedidos y el sistema del almacén. Acuerdan añadir un alias de guardia compartido y revisar el efecto durante el siguiente trimestre en lugar de fijar de inmediato una meta nueva.

## Perspectiva por sector

**Startup.** El volumen es bajo, así que los percentiles son ruidosos y es mejor un gráfico de cada incidente que un resumen. Una sola persona suele detectar, responder y restablecer, de modo que separar las etapas importa menos que una cronología escrita de cada incidente. Añade una nota de inicio de impacto a cada informe posterior al incidente y calcula medianas sencillas cuando haya suficientes incidentes.

**Pequeña empresa.** Un proveedor de servicios gestionados o un único generalista de TI pueden manejar los incidentes, y el contrato del proveedor puede definir metas de respuesta y de resolución. Lee con atención los relojes del contrato, porque a menudo difieren de la experiencia de tus usuarios. Conserva un registro breve del inicio del impacto y del restablecimiento de los incidentes que importan, y pide al proveedor los registros subyacentes, ya que una cifra de resumen oculta los relojes.

**Gran empresa.** Muchos equipos, proveedores y esquemas de prioridad hacen tentadora y engañosa la comparación. Estandariza las definiciones de reloj y el significado de las prioridades en toda la organización, publica distribuciones en lugar de medias y segmenta por servicio. Vigila la deriva de los estados de pausa y la reclasificación, que crecen con el número de capas de informe.

**Gobierno y sector público.** Los contratos, los informes legales y la auditoría pueden fijar los relojes y las definiciones de prioridad. Cumple esas obligaciones tal como están escritas y conserva una segunda vista, orientada al usuario, a su lado, para que el cumplimiento no oculte una mala experiencia. Sé abierto sobre las definiciones y sobre las correcciones cuando cambie una regla de reloj (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de este tema es sobre todo diseño y disciplina. Lleva unas horas escribir las hojas de reloj, algo de configuración para añadir un campo de inicio de impacto y una marca de restablecimiento, y un esfuerzo modesto para construir informes por percentiles. Donde la herramienta ITSM o una plataforma de monitorización ya guardan las marcas de tiempo, la extracción es una tarea única. El costo recurrente es una revisión mensual y una muestra trimestral de incidentes cerrados.

El retorno viene de mejores decisiones y menos retrabajo. El informe por distribuciones muestra si una mejora funcionó, y el informe por etapas dirige el esfuerzo al retraso real, como los traspasos, las brechas de detección o las esperas de proveedores. Las medidas de durabilidad evitan el falso ahorro de los parches rápidos que vuelven como incidentes repetidos. Mide tu propia línea base durante un trimestre, haz un cambio y compara distribuciones.

## Antipatrones y trampas

- **Un único MTTR en el panel ejecutivo.** La media de datos asimétricos engaña. Muestra la mediana, un percentil alto y el incidente abierto más antiguo, e indica cuántos incidentes hay detrás de cada punto.
- **Mezclar prioridades y servicios.** Un cambio de mezcla parece un cambio de desempeño. Segmenta por prioridad y servicio, y muestra la mezcla.
- **Detener el reloj con estados de pausa.** El tiempo desaparece en "a la espera" y "en espera". Enumera los estados permitidos, exige motivos e informa la proporción de tiempo en cada uno.
- **Cerrar y replantear tickets.** Reinicia la antigüedad y oculta el incidente largo. Vincula los tickets replanteados a sus originales e informa la antigüedad vinculada.
- **Usar una sola marca de tiempo para el restablecimiento y el cierre.** Se premia entonces a los equipos por cerrar antes de tiempo o se les penaliza por un seguimiento cuidadoso. Registra ambos e informa ambos.
- **Clasificar agentes o ingenieros por tiempo de resolución.** Premia los tickets fáciles y la selección de casos, y desalienta la ayuda y el escalado. Informa solo por equipo y servicio.
- **Metas sin medidas de durabilidad.** Un parche rápido que falla mañana parece un éxito. Muestra la repetición y la tasa de reapertura junto a cada meta.
- **Tratar muestras pequeñas como tendencias.** Un percentil 95 de un puñado de incidentes es una conjetura. Traza los incidentes individuales y espera a tener más datos antes de dibujar una línea.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Cada persona mide de forma distinta; un único "tiempo de resolución" | Relojes escritos para algunos equipos; etapas parcialmente separadas | Una hoja de reloj para todas las etapas, con los estados de pausa enumerados | Definiciones revisadas y cambios registrados con motivos | Definiciones alineadas con proveedores y clientes, revisadas cuando dejan de informar decisiones |
| Calidad de los datos | Notas manuales; inicio del impacto desconocido | Marcas de tiempo de la herramienta para ticket registrado y cerrado | Inicio del impacto y restablecimiento registrados para los incidentes prioritarios | Datos auditados por muestreo; estimaciones marcadas | Datos de monitorización y de ITSM unidos automáticamente y de confianza entre equipos |
| Práctica estadística | Solo la media | Media y mediana mostradas | Mediana y un percentil alto por prioridad y servicio | Límites de control usados; medidas de durabilidad emparejadas | Distribuciones vinculadas a la experiencia del usuario y usadas para decidir dónde invertir |
| Uso en la mejora | Números usados para perseguir a individuos | El equipo ve sus propios números | El equipo revisa cada mes los tiempos por etapa y la espera | Las etapas lentas conducen a trabajo de mejora financiado | La mejora se comparte entre equipos y proveedores y las medidas evolucionan |

## Lista de verificación

- [ ] Cada etapa (detectar, acusar recibo, responder, restablecer, resolver) tiene una regla escrita de inicio, fin y pausa.
- [ ] El inicio del impacto y la hora de restablecimiento se registran como campos separados para los incidentes prioritarios.
- [ ] Los informes muestran la mediana y un percentil alto, por prioridad y por servicio.
- [ ] Se muestra el número de incidentes detrás de cada punto informado.
- [ ] Los incidentes abiertos más antiguos se enumeran cada semana.
- [ ] Los estados de pausa son una lista corta y con nombre, y se informa su proporción de tiempo.
- [ ] La tasa de reapertura y la repetición se muestran junto a cada medida de tiempo.
- [ ] Los tickets replanteados se vinculan a sus originales para que la antigüedad se traslade.
- [ ] Ninguna medida de tiempo se usa para clasificar a agentes o ingenieros individuales.
- [ ] Se lee cada trimestre una muestra de incidentes cerrados para comprobar su honestidad.
- [ ] Los comentarios de las encuestas de clientes se leen junto a los datos de los tickets.

## Prompts de IA

**Compara la media y los percentiles de las duraciones de nuestros incidentes.**

```text
Voy a pegar registros de incidentes de [service or team] que cubren [period].
Campos: [list fields such as logged time, impact start, restore time, closed
time, priority, status history]. Calcula la mediana, el percentil 85, el
percentil 95 y la media de [stage name, for example time to restore] por
[priority], y muestra cuántos incidentes hay detrás de cada cifra. Describe
cuánto difiere la media de la mediana y qué incidentes provocan esa diferencia.
No inventes datos ni valores de referencia. Enumera tus supuestos, las filas
que excluiste y todo lo que los datos no pudieron decirte.

[paste incident data with personal data removed]
```

**Redacta una hoja de reloj para nuestras medidas de tiempo de incidentes.**

```text
Redacta una hoja de reloj para [team name] que cubra el tiempo de detección, el
tiempo de acuse de recibo, el tiempo hasta la primera respuesta, el tiempo de
restablecimiento y el tiempo de resolución. Nuestra herramienta ITSM es [tool
name], nuestra monitorización es [monitoring tool] y nuestro flujo de estados es
[list of statuses]. Para cada etapa, da el evento de inicio, el evento de fin,
los estados de pausa, la base temporal ([calendar or business hours]), las
exclusiones y un vector de manipulación con una barrera de protección. Marca
todo lo que tuviste que suponer y enumera las preguntas que debería responder
para completar la hoja. No inventes metas.
```

**Encuentra adónde va el tiempo transcurrido en unos pocos incidentes largos.**

```text
Este es el historial de estados de [number] incidentes largos de [service]. Para
cada incidente, enumera el tiempo pasado en cada estado, marca los estados
activos y de espera con esta regla: [which statuses count as active], y anota
cada reasignación entre [teams or groups]. Informa patrones entre incidentes,
no individuos, y sugiere a qué etapa conviene prestar atención primero. No
adivines causas que los datos no muestran. Enumera tus supuestos y qué campos
adicionales ayudarían.

[paste status histories with personal data removed]
```

**Ejecuta una revisión de manipulación de nuestras metas de tiempo de incidentes.**

```text
Informamos [metric name] para [priority or service], definida como [definition
with start and stop events]. La meta es [target] y la audiencia es [audience].
Enumera formas realistas de que el número mejore sin ayudar a los usuarios, como
pausar el reloj, cerrar antes de tiempo, reetiquetar o replantear tickets. Para
cada una, propón una medida o práctica de barrera de protección que la
revelaría, e indica cómo podría manipularse esa propia barrera. No inventes
referencias ni estadísticas. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados y las barreras de protección emparejadas de una medida de tiempo de incidentes que vayas a informar.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un cambio en este tema mantiene coherentes la plantilla, la tabla de manipulación y las referencias cruzadas.

## Puntos clave

- Un incidente tiene etapas, y cada etapa tiene su propio reloj, responsable y remedio. Nombra la etapa que estás midiendo.
- Las duraciones de los incidentes son asimétricas, así que la media engaña. Informa la mediana, un percentil alto y la antigüedad del incidente abierto más antiguo.
- Escribe dónde arranca y se detiene cada reloj, registra el inicio del impacto y el restablecimiento por separado del cierre del ticket, y limita los estados de pausa.
- Empareja cada medida de velocidad con una medida de durabilidad como la repetición y la tasa de reapertura.
- Describe equipos y servicios, nunca agentes individuales, y lee una muestra de incidentes cerrados para comprobar que los números son honestos.

## Referencias y lecturas complementarias

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
