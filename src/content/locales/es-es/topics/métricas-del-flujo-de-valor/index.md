# Métricas del flujo de valor

**Mide un flujo de valor de extremo a extremo, divide cada etapa en el tiempo en que se toca el trabajo y el tiempo en que espera, y cuenta cuánto llega utilizable, porque los mayores retrasos y el mayor retrabajo de una organización de servicio están entre los equipos, no dentro de ellos.**

## Resumen y motivación

La mayoría de los equipos miden su propia etapa. El centro de servicios informa de los tickets cerrados, un equipo de desarrollo informa de las historias terminadas, un comité de cambios informa de los cambios aprobados. Cada número puede parecer sano mientras la persona que pidió algo espera semanas. La razón es estructural: en una solicitud típica, la mayor parte del tiempo transcurrido se pasa en colas y traspasos, y ningún equipo es dueño de ese tiempo.

Un [flujo de valor](https://en.wikipedia.org/wiki/Value_stream) es la secuencia de pasos por los que una solicitud se convierte en valor entregado. El [mapeo del flujo de valor](https://en.wikipedia.org/wiki/Value-stream_mapping) es la técnica, desarrollada dentro de la [manufactura lean](https://en.wikipedia.org/wiki/Lean_manufacturing) y aplicada más tarde a oficinas, hospitales y software, de dibujar cada paso desde el inicio de un proceso hasta el cliente y registrar el tiempo y el volumen en cada etapa. El mapa es una imagen del estado actual, seguida de una imagen de un estado futuro mejor. Los números del mapa son el objeto de este tema.

Aquí se encuentran dos vocabularios. En ITIL 4, la cuarta edición de la Biblioteca de Infraestructura de Tecnologías de la Información, un flujo de valor es una combinación específica de actividades de la cadena de valor del servicio de [ITIL](https://en.wikipedia.org/wiki/ITIL) (planificar, mejorar, involucrar, diseñar y hacer la transición, obtener y construir, entregar y dar soporte) dispuestas para crear un producto o servicio concreto. Ejemplos son "restablecer el servicio tras un incidente" y "entregar un cambio desde la idea hasta producción". ITIL dice qué es un flujo y quién debe participar. Lean dice cómo medirlo. El equivalente ágil es el flujo de elementos de trabajo por un tablero, que los equipos que gestionan el flujo ya siguen con medidas como el tiempo de ciclo (véase el tema 2.1, Medidas de flujo).

Las medidas lean son pocas. El **plazo de entrega** es el tiempo total transcurrido desde el momento en que se hace una solicitud hasta el momento en que se entrega. El **tiempo de proceso**, a veces llamado tiempo de contacto, es el tiempo en que alguien trabaja realmente en el elemento. El **tiempo de espera** es el tiempo que el elemento permanece entre trabajos activos, en una cola, en una aprobación o en un traspaso. El **porcentaje completo y correcto (%C/A)** es la proporción de elementos que la siguiente etapa puede usar tal como los recibe, sin tener que corregirlos, completarlos o devolverlos. El **takt time** es el ritmo al que el flujo debe completar elementos para ajustarse a la demanda del cliente, calculado como el tiempo de trabajo disponible dividido por el número de elementos demandados en ese tiempo. La razón entre el tiempo de proceso y el plazo de entrega es la **eficiencia del proceso**, que este libro trata como la forma de flujo de valor de la eficiencia del flujo (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo).

Dos relaciones hacen útiles los números en conjunto. Primero, el [plazo de entrega](https://en.wikipedia.org/wiki/Lead_time) es la suma del tiempo de proceso y del tiempo de espera en todas las etapas, así que un flujo con un plazo de entrega de semanas y un tiempo de proceso de días es sobre todo cola. La [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law) vincula esa cola con el trabajo en curso y el rendimiento, por lo que el tema 2.3 (Trabajo en curso y teoría de colas) es su compañero natural. Segundo, el %C/A se compone. Un flujo de cinco etapas en el que cada etapa pasa limpio el 90 por ciento de su producción entrega un resultado limpio solo alrededor del 59 por ciento de las veces, un producto conocido en manufactura como [rendimiento acumulado de la primera pasada](https://en.wikipedia.org/wiki/Rolled_throughput_yield). Los informes de cada etapa dicen todos 90 por ciento. El flujo dice algo mucho menos cómodo.

## Principios clave

- **Empieza en la solicitud del cliente y termina en el uso del cliente.** Un flujo medido desde "trabajo iniciado" hasta "trabajo fusionado" oculta la espera en ambos extremos, que suele ser la parte más larga.
- **Separa el tiempo de contacto del tiempo de espera en cada etapa.** La duración de una sola etapa mezcla ambos y envía el esfuerzo de mejora al lugar equivocado. La espera suele ser una propiedad de diseño del flujo, no un fallo de esfuerzo.
- **Mide la calidad como integridad y corrección, además de la velocidad.** Una etapa rápida que devuelve trabajo es lenta en los términos del flujo, porque el retrabajo consume capacidad y añade espera.
- **Mapea un flujo y una clase de elemento cada vez.** Un mapa que mezcla cambios de emergencia con solicitudes rutinarias produce un promedio que no describe a ninguno.
- **Informa distribuciones y muestra la muestra.** El plazo de entrega y el tiempo de espera son asimétricos, así que muestra la mediana y un percentil alto, y di cuántos elementos y qué periodo (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- **Describe flujos, nunca personas.** Las métricas por etapa identifican dónde espera el trabajo. Nunca son una clasificación de las personas o equipos de cada etapa.

## Definiciones de métricas

Las métricas siguientes se definen para un flujo de valor con nombre y una clase de trabajo. Los recuentos de elementos excluyen los elementos cancelados salvo que se indique. El tiempo de proceso y el tiempo de espera se informan para cada etapa y se suman para el flujo.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Plazo de entrega del flujo de valor | Tiempo transcurrido desde la solicitud del cliente hasta que el cliente puede usar el resultado | hora de la confirmación de entrega menos hora en que se registró la solicitud; los elementos cancelados o retirados se excluyen; informa la mediana y los percentiles 85 y 95 | días | Registros de la herramienta ITSM unidos con eventos de entrega de la canalización o del sistema de cumplimiento | Gestión de solicitudes de servicio; habilitación de cambios | Plazo de entrega en el tablero del equipo | Mensual |
| Tiempo de proceso | Tiempo en que se trabaja activamente en un elemento, por etapa y para el flujo | suma de los intervalos en que el elemento está en un estado activo, por etapa; se excluyen los estados de cola, de espera de aprobación y de bloqueo | horas o días | Historial de estados del gestor; registros de tiempo donde los estados son demasiado gruesos | Gestión de incidentes; gestión de solicitudes de servicio | Tiempo de ciclo en las columnas "en curso" | Mensual |
| Tiempo de espera | Tiempo que un elemento permanece entre trabajos activos, por etapa y para el flujo | tiempo transcurrido de la etapa menos el tiempo de proceso de esa etapa; incluye colas, aprobaciones, traspasos y tiempo bloqueado | días | Historial de estados del gestor y cambios de estado de la herramienta ITSM | Habilitación de cambios; centro de servicios | Tiempo en columnas de cola; tiempo bloqueado | Mensual |
| Eficiencia del proceso | Proporción del plazo de entrega que es tiempo de proceso | suma del tiempo de proceso de todas las etapas / plazo de entrega del flujo de valor de los mismos elementos; los elementos aún abiertos se excluyen | porcentaje | Derivado del tiempo de proceso y del plazo de entrega | Mejora continua | Eficiencia del flujo | Trimestral |
| Porcentaje completo y correcto (etapa) | Proporción de elementos que una etapa recibe y puede usar sin corrección, compleción ni devolución | elementos aceptados tal como se recibieron / elementos recibidos en el periodo; los elementos devueltos por cualquier motivo cuentan como no aceptados | porcentaje | Eventos de devolución y reapertura en el gestor o en la herramienta ITSM; revisiones de aceptación por muestreo | Gestión de solicitudes de servicio; habilitación de cambios; gestión de problemas | Definición de listo; tasa de retrabajo | Mensual |
| Porcentaje completo y correcto acumulado | Proporción de elementos que pasan todas las etapas limpios | producto de los valores de %C/A de las etapas de un flujo y periodo (por ejemplo 0,90 x 0,85 x 0,95); se excluyen las etapas ajenas al flujo | porcentaje | Derivado de los valores por etapa | Mejora continua | Defectos escapados y tasa de retrabajo a lo largo de una canalización | Trimestral |
| Número de traspasos | Número de veces que un elemento pasa entre equipos o colas | recuento de cambios de equipo propietario o de cola desde la solicitud hasta la entrega, por elemento; informa la mediana y el percentil 85 | recuento | Historial de asignaciones de la herramienta ITSM o del gestor | Centro de servicios; gestión de solicitudes de servicio | Dependencias entre equipos | Trimestral |
| Razón del takt time | Si el ritmo del flujo coincide con la demanda | intervalo mediano observado entre finalizaciones / takt time, donde el takt time es el tiempo de trabajo disponible dividido por los elementos demandados en el mismo periodo; una razón superior a 1 significa que el flujo es más lento que la demanda | razón | Recuento de la demanda de la cola de entrada y eventos de finalización | Gestión de la capacidad y el desempeño; gestión de niveles de servicio | Rendimiento frente a la demanda; pronóstico | Trimestral |

El tiempo de proceso, el tiempo de espera y los plazos de entrega por etapa son sumas y razones sobre el mismo conjunto de elementos, por lo que se calculan a partir de registros a nivel de elemento y nunca sumando promedios de etapas medidos en muestras distintas. El takt time se aplica mejor al trabajo repetible, como las solicitudes estándar y los cambios rutinarios, y encaja mal con el trabajo en que cada elemento es único.

## Recomendaciones

### Elige el flujo

**1. Elige un flujo valioso y una clase de elemento, y nombra sus límites.** Buenos primeros candidatos son un tipo de solicitud de alto volumen, como el aprovisionamiento de accesos o de equipos, o el recorrido de un cambio normal desde la aprobación hasta su puesta en marcha. Escribe el desencadenante que arranca el reloj y el evento que confirma la entrega al cliente. Si no puedes enunciar ambos en una frase cada uno, el flujo aún no está definido (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio).

**2. Arranca el reloj en la solicitud del cliente y deténlo en el uso del cliente.** Un flujo que empieza cuando un equipo acepta el trabajo y termina cuando el equipo lo marca como hecho excluye la cola de entrada y el retraso de confirmación. Con frecuencia son las esperas más largas. Si los datos de los límites reales aún no se capturan, informa la medida más estrecha con una etiqueta honesta y planifica la instrumentación (véase el tema 1.5, Fuentes de datos e instrumentación).

### Mapea el estado actual

**3. Recorre el flujo con las personas que hacen el trabajo.** Realiza una sesión de mapeo con un representante de cada etapa, incluido el lado del cliente. Dibuja los pasos tal como ocurren realmente y compáralos luego con el proceso documentado. Las diferencias entre ambos son hallazgos en sí mismas. El método se describe en *Learning to See* de Rother y Shook y en *Value Stream Mapping* de Martin y Osterling.

**4. Registra el tiempo de proceso y el tiempo de espera de cada etapa a partir de elementos reales.** Toma una muestra de elementos recientes, 20 o más si el volumen lo permite, y sigue cada uno por el flujo con el historial del gestor y, cuando haga falta, una conversación. Registra el tiempo de contacto y la espera antes de cada etapa. Trata la muestra como una estimación y di cómo se obtuvo. Repite el mapeo cuando el flujo cambie lo suficiente como para invalidarlo.

**5. Muestra la espera como su propia barra.** En el mapa y en el panel, dibuja el tiempo de proceso y el tiempo de espera como segmentos separados de cada etapa. Una etapa con 30 minutos de tiempo de proceso y cuatro días de espera no se parece en nada a una con cuatro días de tiempo de proceso, aunque la duración de la etapa sea idéntica.

### Mide la calidad a lo largo del flujo

**6. Mide el %C/A en el traspaso, definido por la etapa receptora.** El equipo receptor decide qué significa "utilizable tal como se recibe", idealmente en una breve condición de aceptación escrita. Cuenta como no aceptada una devolución, una petición de información que falta o una corrección silenciosa. La corrección silenciosa es la fuga más común, porque el trabajo se arregla sin que nadie registre que estaba roto.

**7. Calcula el %C/A acumulado y compáralo con los valores por etapa.** Multiplica los valores de las etapas. Una brecha entre la cifra acumulada y la etapa de mejor aspecto es el efecto compuesto del retrabajo, y a menudo justifica arreglar un traspaso mejor que cualquier medida de velocidad. Conéctalo con las medidas de retrabajo y de fallos de cambio del mismo flujo (véase el tema 4.4, Fallos de cambio y retrabajo).

### Usa los números para decidir

**8. Mejora primero la mayor espera y busca su causa en la interfaz.** Ordena las etapas por tiempo de espera y pregunta qué espera el elemento que espera: una decisión, una persona, un lote, un hueco programado o un insumo que falta. Pregunta después si esa espera es necesaria. La [teoría de las restricciones](https://en.wikipedia.org/wiki/Theory_of_constraints) sostiene que el ritmo del flujo lo marca su etapa más estrecha, así que mejorar una etapa que no es la restricción cambia poco. Las esperas de aprobación en la habilitación de cambios son un caso frecuente (véase el tema 4.3, Métricas de habilitación de cambios).

**9. Reduce los traspasos antes de optimizar las etapas.** Cada traspaso añade una cola, un cambio de contexto y una oportunidad de información incompleta. Cuenta los traspasos y prueba luego si se puede combinar una etapa, delegar una decisión en el equipo que hace el trabajo o preautorizar una solicitud estándar. ITIL 4 describe los cambios estándar como cambios preautorizados de bajo riesgo, que es exactamente este movimiento aplicado al flujo de cambios.

**10. Compara la demanda y el ritmo con el takt time, solo para trabajo repetible.** Calcula el takt time a partir de datos reales de demanda del periodo y compáralo con el intervalo al que el flujo completa realmente elementos. Un flujo más lento que el takt hace crecer una cola, y la ley de Little te dice aproximadamente a qué velocidad. Un flujo mucho más rápido que el takt tiene holgura que podría redirigirse. No uses el takt time para fijar metas a individuos.

### Mantén honesta la medición

**11. Une datos entre herramientas y di qué está estimado.** El flujo suele cruzar la herramienta ITSM, el gestor de incidencias y la canalización. Une por un identificador de elemento, documenta la regla de unión y marca qué etapas provienen de eventos del sistema y cuáles de muestreo. Una estimación etiquetada como estimación es mucho más útil que un número de aspecto preciso y origen desconocido.

**12. Revisa el mapa cada trimestre y lee elementos en bruto cada vez.** Los flujos derivan a medida que los equipos se reorganizan y las herramientas cambian. Pon el mapa y una decisión en el orden del día de una revisión permanente con todas las etapas representadas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Plazo de entrega del flujo de valor | Arrancar el reloj más tarde, por ejemplo en la clasificación en lugar de en la solicitud; cerrar elementos antes de que el cliente pueda usarlos; dividir una solicitud en varias pequeñas | Reglas de reloj fijas escritas en el registro de métricas; confirmación de la entrega por el cliente; recuento de elementos reabiertos y de elementos hijos vinculados |
| Tiempo de proceso | Registrar estados ociosos o bloqueados como activos para que el tiempo de proceso suba y el flujo parezca eficiente; o registrar esperas como trabajo para parecer ocupado | Observación de una muestra de elementos; tiempo de proceso comparado con registros de tiempo cuando existen; definiciones de estados revisadas con el equipo |
| Tiempo de espera | Mover la espera a un estado sin seguimiento, como una conversación aparte, una hoja de cálculo o un estado "pendiente" que detiene el reloj | Informar el uso de los estados de pausa y bloqueo; comparar la antigüedad del ticket con las marcas de tiempo de las etapas; muestrear elementos en busca de esperas fuera del sistema |
| Eficiencia del proceso | Reducir el plazo de entrega con un trato de urgencia para los elementos medidos, o inflar el tiempo de proceso para subir la razón | Mostrar el plazo de entrega y el tiempo de proceso junto a la razón; informar la proporción de urgencias; no fijar nunca una meta para la propia razón |
| Porcentaje completo y correcto (etapa) | La etapa receptora baja su listón de aceptación para que se devuelvan menos elementos, o la etapa emisora empuja el trabajo con soluciones informales | Condición de aceptación escrita; recuentos de defectos y retrabajo aguas abajo; muestra de elementos aceptados revisada por un tercero |
| Porcentaje completo y correcto acumulado | Fusionar etapas para que las devoluciones ocurran dentro de una etapa y desaparezcan del recuento de traspasos; elegir una lista de etapas favorable | Fijar de antemano la lista de etapas; informar los cambios de etapas en el registro de decisiones; comparar con la tasa de retrabajo de todo el flujo |
| Número de traspasos | Reasignar elementos a una cola compartida o a un responsable comodín para evitar cambios de responsable contados; esconder traspasos en un único "equipo" que abarca varios | Contar por cola y por rol; leer el historial de asignaciones de elementos muestreados; seguir el número de reasignaciones por elemento |
| Razón del takt time | Contar la demanda aplazada o rechazada como no demandada; contar finalizaciones parciales como finalizaciones | Informar la demanda, la demanda rechazada y la antigüedad de la lista de pendientes junto a la razón; contar las finalizaciones solo cuando el cliente las confirma |

Una lectura sana muestra un plazo de entrega y un tiempo de proceso plausibles frente a la muestra, un tiempo de espera que es visiblemente la parte mayor y que se reduce gradualmente, valores de %C/A respaldados por una condición de aceptación escrita y traspasos que bajan solo cuando se eliminó una decisión o un paso reales. Si el plazo de entrega mejora mientras el %C/A acumulado cae, el flujo está enviando el trabajo más rápido trasladando el costo aguas abajo, que es el patrón que las barreras de protección existen para detectar (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Mapeo en taller con una muestra | Rápido, muestra todo el flujo, crea comprensión compartida entre equipos | Una instantánea que envejece deprisa; sesgo de muestra; depende de participantes honestos |
| Medición automatizada a partir de eventos de las herramientas | Continua, objetiva, respalda percentiles y tendencias | Ve solo lo que registran las herramientas; las esperas fuera del sistema y las correcciones silenciosas son invisibles |
| Límites de extremo a extremo del cliente | Refleja la experiencia; deja al descubierto los retrasos de entrada y de confirmación | Necesita datos de varios sistemas y un identificador de elemento compartido |
| Comparación de takt time y demanda | Ata el ritmo a la demanda real; hace predecible el crecimiento de la cola | Débil para trabajo único y no repetible; necesita recuentos fiables de la demanda |
| %C/A acumulado | Muestra cómo se compone el retrabajo a lo largo de los traspasos | Necesita acuerdo sobre las condiciones de aceptación; fácil de discutir las definiciones |

Usa el taller de mapeo para conocer la forma del flujo y la medición automatizada para vigilarlo. Usa las medidas de límite de equipo como insumos y las medidas de límite de cliente como veredicto. El costo del enfoque es la conversación entre equipos que obliga a tener, que es también su principal beneficio.

## Preguntas para conversar con tu equipo

**1. ¿Dónde arranca y se detiene el reloj del cliente en nuestra solicitud más común, y coincide nuestro informe?**
Elige un tipo de solicitud y síguelo en una pizarra desde el momento en que el cliente lo pide hasta el momento en que puede usar el resultado. Marca dónde empieza y deja de contar nuestro informe actual. El facilitador debe buscar la brecha en cada extremo, ya que las colas de entrada y los retrasos de confirmación se omiten de forma rutinaria. Acordad si cambiar el informe o etiquetarlo como una vista parcial.

**2. Para cada etapa de nuestro flujo, ¿qué parte del tiempo transcurrido está alguien trabajando en el elemento?**
Toma cinco elementos recientes y reconstruye el historial de cada uno. Estima el tiempo de contacto y la espera de cada etapa y compara los totales. La mayoría de los grupos se sorprende de lo poco del tiempo transcurrido que es trabajo. Pregunta qué espera cada espera larga y resiste la primera respuesta, que suele ser "la gente está ocupada". Anota qué esperas parecen decisiones de diseño y no límites de capacidad.

**3. ¿Qué necesita de nosotros la siguiente etapa, y cómo sabríamos que faltaba?**
Pide a un representante de la etapa receptora que enuncie la condición de aceptación con palabras sencillas. Compárala con lo que la etapa emisora cree que aporta. Cuenta las veces del último mes en que el trabajo se devolvió, lo completó otra persona o se arregló en silencio. La conversación suele producir una pequeña lista de verificación que elimina una devolución recurrente.

**4. ¿Qué traspasos existen por historia y no por necesidad?**
Enumera los traspasos del mapa y pregunta por qué existe cada uno. Algunos son reales: una habilidad, un control, una separación de funciones. Otros persisten porque hace años se trazó la frontera de un equipo. Elegid un traspaso que eliminar, delegar o preautorizar, y nombrad quién debe estar de acuerdo.

**5. Si mejoráramos la etapa de la que todos se quejan, ¿lo notaría el cliente?**
Compara la etapa que atrae más atención con la etapa que contiene la espera más larga. La teoría de las restricciones sugiere que mejorar una no restricción cambia poco para el cliente. Pregunta qué tendría que ser cierto para que la etapa más ruidosa fuera también la más lenta. El facilitador debe ayudar al grupo a acordar cómo comprobar la respuesta con datos.

**6. ¿Cómo haría alguien para que este flujo pareciera mejor sin serlo?**
Repasa con el grupo la tabla de vectores de manipulación. Para cada métrica, pregunta qué podría hacer una persona bajo presión y qué vería el equipo si lo hiciera. Acordad qué lectura de barrera de protección se revisará cada vez y quién la posee. El objetivo es un hábito compartido de comprobación, no una búsqueda de culpables.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega suelen ver con claridad sus propias etapas y mal el flujo. Una vista de flujo de valor les muestra cuánto espera un cambio terminado para una revisión, una aprobación, un hueco de versión o una ventana de despliegue, y cuánto de eso queda fuera de su control. Les beneficia el %C/A en sus traspasos, porque convierte quejas vagas sobre "malos requisitos" o "revisiones tardías" en eventos contados. Deben desconfiar de mejorar su propio tiempo de ciclo a expensas de la etapa receptora (véase el tema 2.8, Métricas DORA).

### Equipos de servicio y operaciones

Los equipos de operaciones poseen muchas de las colas: la entrada del centro de servicios, la aprobación de cambios, el calendario de versiones, el traspaso de guardia. Ganan con los cambios estándar preautorizados, las condiciones de aceptación claras para el trabajo entrante y una vista de qué traspasos añaden más espera. También deben esperar ser la etapa receptora en una medida de %C/A y definir cómo es un traspaso completo. Sus elementos suelen llevar relojes estrictos propios, por lo que la medida del flujo va junto a las medidas de nivel de servicio y no las sustituye.

### Liderazgo y gobernanza

Los líderes patrocinan el cambio entre equipos y deciden si un flujo tiene un responsable con nombre. Deben pedir el plazo de entrega del flujo desde el punto de vista del cliente y la mayor espera, en lugar de un cuadro de mando etapa por etapa. Los órganos de gobernanza que aprueban trabajo son en sí mismos etapas, y su tiempo de espera pertenece al mapa. Fijar metas sobre la razón entre el tiempo de proceso y el plazo de entrega invita a los vectores descritos arriba, así que úsala para dirigir la indagación (véase el tema 6.5, Realización de valor y resultados de negocio).

### Clientes y usuarios

Los clientes viven el plazo de entrega y el retrabajo, y rara vez ven las etapas. Su contribución más útil es confirmar cuándo el resultado fue utilizable y decir qué tuvieron que hacer para conseguirlo, como volver a enviar un formulario. Los informes de cara al cliente deben indicar el inicio y el fin del reloj con palabras sencillas. A los clientes también les beneficia que el flujo publique una mediana honesta y un percentil alto, porque una promesa basada solo en la mediana decepciona a una solicitud de cada varias.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de una aseguradora de tamaño medio entrega cambios normales a su plataforma de administración de pólizas. Los clientes del negocio se quejan de que "los cambios pequeños tardan más de un mes". Todos los números de este ejemplo son ilustrativos.

El departamento mapea el flujo desde el momento en que un responsable de negocio envía una solicitud de cambio hasta el momento en que el responsable confirma que el cambio está en producción. Una muestra de 20 cambios normales recientes da la tabla de etapas siguiente, con valores medianos ilustrativos por etapa.

| Etapa | Tiempo de proceso (días) | Tiempo de espera (días) | %C/A (ilustrativo) |
| --- | --- | --- | --- |
| Entrada y clasificación | 0,5 | 6 | 85 |
| Construcción | 1,5 | 5 | 90 |
| Pruebas | 0,5 | 8 | 80 |
| Aprobación del cambio | 0,25 | 9 | 70 |
| Despliegue y confirmación | 0,25 | 4 | 95 |
| Total del flujo | 3,0 | 32 | 41 (acumulado) |

El plazo de entrega del flujo en la muestra es de unos 35 días, así que la eficiencia del proceso es de aproximadamente el 9 por ciento. El %C/A acumulado es de alrededor del 41 por ciento, el producto de los cinco valores por etapa, de modo que menos de la mitad de los cambios pasan todas las etapas sin una devolución. La etapa de aprobación del cambio parece modesta solo por su %C/A, pero sus 9 días de espera son la cola individual más larga, y el 30 por ciento de los cambios llega a ella con información de riesgo incompleta, que el comité devuelve.

El equipo toma dos decisiones. Primero, clasifica los diez tipos de cambio de bajo riesgo más frecuentes como cambios estándar con procedimientos preautorizados, de modo que se salten el comité. Segundo, el formulario de entrada incorpora los campos de riesgo que el comité siempre pide, y se acuerda con el comité una breve lista de verificación de aceptación. Estas decisiones atacan la mayor espera y la mayor devolución acumulada, en lugar de la etapa de construcción, donde se había pedido al equipo que "fuera más rápido".

Tres meses después la mediana del plazo de entrega de la clase muestreada baja y la espera de aprobación se acorta, mientras el %C/A acumulado sube. El riesgo de manipulación aparece en el tercer mes. Un equipo de producto divide varias solicitudes en dos o tres más pequeñas, porque los elementos pequeños califican como cambios estándar, y el plazo de entrega por elemento cae en picado. El revisor nota que el recuento de elementos hijos vinculados subió y que la confirmación del cliente por solicitud original no ha mejorado. El departamento conserva el plazo de entrega, pero redefine el elemento como la solicitud original del cliente, de modo que las divisiones ya no ayudan. El registro de decisiones anota el cambio de definición y reexpresa el trimestre anterior con la misma regla.

## Perspectiva por sector

**Startup.** Un flujo corto con pocos traspasos tiene poco que mapear, y la medida más útil es sencillamente el tiempo transcurrido desde la solicitud del cliente hasta el uso del cliente. Dibuja el flujo en una pared, lee los elementos en bruto y vigila el primer traspaso que aparezca a medida que crece el equipo. Resiste la tentación de construir herramientas antes de que el flujo se haya estabilizado.

**Pequeña empresa.** Una o dos personas suelen cubrir varias etapas, así que los traspasos son entre roles o herramientas y no entre equipos. Los informes del gestor o del centro de servicios dan el plazo de entrega a bajo costo, y una muestra de diez elementos revela la espera. Pide a los proveedores, como un proveedor de servicios gestionados, sus tiempos por etapa, ya que la cola del proveedor suele ser la espera más larga.

**Gran empresa.** Los flujos largos con muchos equipos y puertas de aprobación son donde más rinden el %C/A acumulado y el número de traspasos. Asigna un responsable a cada flujo importante, mapéalo conjuntamente con todas las etapas representadas y usa un identificador de elemento compartido para poder unir las herramientas. Distintas divisiones usarán las mismas palabras para relojes distintos, así que publica una definición por medida y mantén un registro de cambios.

**Gobierno y sector público.** Las aprobaciones legales, los pasos de contratación y los controles de auditoría forman etapas legítimas que no pueden eliminarse, y a menudo contienen las esperas más largas. Mapéalas con honestidad, separa la espera obligatoria de la evitable y muestra la parte obligatoria a quienes fijan las reglas. Conserva un rastro de auditoría de los datos y de cualquier cambio de definición (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es que la espera suele ser la mayor parte del plazo de entrega y la más barata de reducir, porque la solución suele ser una decisión, una regla o un traspaso y no capacidad adicional. Los clientes sienten directamente el plazo de entrega, y la organización paga el retrabajo con una capacidad que nunca aparece en un informe de etapa. Reducir los traspasos y las devoluciones también reduce los modos de fallo que más tarde se convierten en incidentes.

Los costos son modestos y sobre todo humanos: unas horas del tiempo de varias personas para el taller de mapeo y la muestra, un identificador de elemento compartido entre herramientas (véase el tema 1.5, Fuentes de datos e instrumentación) y algo de tiempo de analista cada mes. El costo mayor es la conversación entre equipos y la disposición a cambiar una regla que alguien posee.

El retorno se nota en plazos de entrega más cortos y predecibles, un %C/A acumulado creciente, menos elementos devueltos y capacidad liberada del retrabajo. No pronostiques una mejora porcentual a partir de estudios de caso publicados. Estima el retorno a partir de tu propio flujo: el volumen de elementos, la espera actual, el costo del retraso para el cliente tan bien como puedas enunciarlo y las horas de retrabajo que puedas contar. El Flow Framework y la literatura lean describen el patrón, y ninguno ofrece una referencia transferible a tu flujo (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Mapear una etapa en lugar de un flujo.** Un mapa bellamente detallado del trabajo de un equipo deja fuera de la página las esperas más largas. Mapea desde la solicitud del cliente hasta el uso del cliente y añade detalle solo donde están las esperas.
- **Promediar tiempos de etapa de muestras distintas.** La suma de los promedios de las etapas no es el promedio del flujo. Calcula las medidas del flujo a partir de registros a nivel de elemento e informa medianas y percentiles.
- **Tratar el tiempo de espera como un problema de esfuerzo.** Decir a la gente que trabaje más rápido rara vez acorta una cola. Pregunta qué espera el elemento y si la espera es necesaria.
- **Optimizar la eficiencia del proceso como meta.** Cuando la razón se convierte en un objetivo, el tiempo de proceso se infla o el plazo de entrega se recorta con trucos. Úsala como aviso para indagar y empareja con el plazo de entrega confirmado por el cliente.
- **Medir el %C/A sin una condición de aceptación escrita.** Sin ella, cada devolución es una discusión. Haz que la etapa receptora escriba la condición y mantenla breve.
- **Dejar sin registrar el retrabajo silencioso.** Si una etapa arregla el trabajo entrante sin registrarlo, el %C/A queda sobrestimado y la etapa emisora nunca aprende. Registra cada corrección como una devolución.
- **Usar métricas del flujo para clasificar equipos o personas.** Describen el sistema, y la mayor espera rara vez es culpa de un equipo. Informa por etapa y por flujo y revisa los resultados con todas las etapas presentes.
- **Mapear una vez y no volver a hacerlo.** Los flujos derivan. Revisa el mapa según un calendario y después de cualquier reorganización o cambio de herramienta.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definición del flujo y relojes | Flujo sin definir; cada equipo mide su propia etapa | Un flujo mapeado por un equipo; los relojes difieren de los de otros equipos | Inicio y fin escritos para cada flujo importante, desde la solicitud del cliente hasta el uso del cliente | Reglas de reloj revisadas, cambios registrados, historial reexpresado cuando cambian las definiciones | Definiciones revisadas entre equipos y proveedores a medida que cambian el flujo y la demanda |
| Tiempo de proceso y tiempo de espera | Solo se conoce el tiempo transcurrido | Muestreado a mano para un flujo | Recogido de eventos de las herramientas con un modelo de estados documentado y estimaciones etiquetadas | Con seguimiento de su tendencia mediante percentiles, reducciones de espera financiadas y seguidas | Esperas entre proveedores y equipos gestionadas conjuntamente, con colas compartidas visibles |
| Calidad a lo largo del flujo | Retrabajo notado pero no contado | Devoluciones contadas por algunas etapas | Condiciones de aceptación escritas y %C/A por etapa mostrado a los equipos responsables | %C/A acumulado con seguimiento de su tendencia y emparejado con medidas de retrabajo y de fallos | Condiciones de aceptación copropiedad de emisor y receptor y vinculadas a resultados para el cliente |
| Uso en la mejora | Mapeo hecho una vez y luego archivado | Un taller ocasional conduce a una corrección local | Revisión trimestral con todas las etapas presentes | La mayor espera o devolución se aborda cada trimestre con un responsable | Las ideas de mejora llegan desde todas las etapas, con decisiones registradas y resultados comprobados |

## Lista de verificación

- [ ] Se nombran un flujo de valor y una clase de elemento, con un responsable del flujo.
- [ ] El inicio y el fin del reloj están escritos en términos de la solicitud del cliente y del uso del cliente.
- [ ] El mapa del estado actual se construyó con un representante de cada etapa, incluido el lado del cliente.
- [ ] El tiempo de proceso y el tiempo de espera se registran por separado para cada etapa a partir de una muestra de elementos reales.
- [ ] Los tiempos por etapa y del flujo se informan como medianas y un percentil alto, con el tamaño de la muestra mostrado.
- [ ] Cada etapa receptora tiene una condición de aceptación escrita, y se registran las devoluciones.
- [ ] El porcentaje completo y correcto acumulado se calcula a partir de los valores por etapa.
- [ ] Los traspasos se cuentan y la mayor espera tiene un responsable con nombre y un experimento planificado.
- [ ] El vector de manipulación y la barrera de protección de cada métrica se revisan con el equipo.
- [ ] El mapa y la muestra se revisan según un calendario, y los cambios de definición se registran.

## Prompts de IA

**Redacta una guía de entrevistas para un mapa del flujo de valor.**

```text
Estoy mapeando el flujo de valor de [stream name], desde [start event] hasta
[end event], para la clase de elemento [item class]. Los equipos implicados son
[list of teams]. Redacta una guía de entrevistas para un taller de mapeo:
preguntas para cada etapa sobre tiempo de proceso, tiempo de espera, traspasos,
devoluciones y condiciones de aceptación, además de preguntas para el lado del
cliente. No inventes tiempos ni valores de referencia. Enumera tus supuestos y
los datos que debería recoger para comprobar las respuestas.
```

**Calcula medidas del flujo a partir de una muestra.**

```text
Esta es una muestra de [number] elementos con horas de entrada y salida de
etapa, estados activos y de espera, y devoluciones: [paste data or describe the
columns]. Calcula el plazo de entrega, el tiempo de proceso, el tiempo de
espera, la eficiencia del proceso, el porcentaje completo y correcto por etapa
y el porcentaje completo y correcto acumulado, y muestra las fórmulas usadas.
Informa medianas y el percentil [percentile]. Señala los elementos con marcas
de tiempo ausentes y di cómo los trataste. No rellenes huecos con valores
inventados. Enumera tus supuestos.
```

**Encuentra riesgos de manipulación en un panel de un flujo.**

```text
El panel de nuestro flujo muestra [list metrics] para [stream name], y los
equipos se evalúan frente a [targets or none]. Para cada métrica, enumera
formas plausibles de que el número mejore sin que mejore el flujo, las señales
que revelarían cada una y una métrica o práctica de barrera de protección que
la detectaría. Céntrate en [stage or handoff of concern]. No sugieras clasificar
a individuos y no inventes umbrales. Enumera tus supuestos.
```

**Redacta una condición de aceptación para un traspaso.**

```text
La etapa emisora es [sender team] y la etapa receptora es [receiver team]. Los
elementos son [item type], y los motivos más comunes de devolución son
[reasons]. Redacta una condición de aceptación breve de no más de [number]
comprobaciones que el receptor pueda aplicar, y una forma de registrar las
devoluciones para poder calcular el porcentaje completo y correcto. Mantén la
redacción neutral y no asignes culpas. Enumera tus supuestos y las preguntas
que debería hacer a ambos equipos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una métrica de tu mapa del flujo y la barrera de protección que debe acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema de métricas editado indica sus relojes, vectores de manipulación y referencias cruzadas.

## Puntos clave

- Mide el flujo desde la solicitud del cliente hasta el uso del cliente, porque las medidas de límite de equipo ocultan las esperas más largas.
- Divide cada etapa en tiempo de proceso y tiempo de espera, y busca la causa de la mayor espera en la interfaz entre equipos.
- El porcentaje completo y correcto se compone a lo largo de las etapas, así que el valor acumulado suele ser menor que lo que sugiere cualquier informe de etapa.
- Reduce los traspasos y preautoriza el trabajo rutinario antes de empujar a las etapas a ir más rápido.
- Observa una muestra de elementos reales junto a los datos de las herramientas, informa percentiles y etiqueta las estimaciones.
- Empareja cada métrica del flujo con su barrera de protección y usa las medidas para describir el sistema, nunca para clasificar personas.

## Referencias y lecturas complementarias

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
