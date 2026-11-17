# SLI, SLO y presupuestos de errores

**Un objetivo de nivel de servicio convierte "suficientemente fiable" en un número que los usuarios, los equipos de producto y los equipos de operaciones pueden ver, y el presupuesto de errores que deja atrás convierte ese número en una decisión compartida y gastable sobre el riesgo en lugar de una discusión sobre culpas.**

## Resumen y motivación

Todo servicio ya tiene un nivel de fiabilidad, lo haya medido alguien o no. Si nadie lo enuncia, los usuarios suponen un nivel, el equipo de producto supone otro y el equipo de operaciones defiende un tercero. La diferencia se descubre durante una caída. Este tema cubre las tres ideas vinculadas que usa la [ingeniería de fiabilidad de sitios (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) para cerrar esa brecha: el indicador de nivel de servicio, el objetivo de nivel de servicio y el presupuesto de errores.

Un [indicador de nivel de servicio (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) es una medición de un aspecto del servicio tal como lo experimentan los usuarios. Los aspectos típicos son si una solicitud tuvo éxito, cuánto tardó, si los datos devueltos eran recientes y si eran correctos. Un buen SLI se expresa como una razón: el número de eventos buenos dividido entre el número de eventos válidos, sobre una ventana definida. Un [objetivo de nivel de servicio (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) es la meta de esa razón durante un periodo, por ejemplo "el 99,9 por ciento de las solicitudes de pago válidas tienen éxito durante 28 días móviles". El **presupuesto de errores** es lo que el objetivo permite que salga mal: 100 por ciento menos el SLO. Con un 99,9 por ciento, el presupuesto es el 0,1 por ciento de los eventos válidos.

El presupuesto de errores cambia la conversación. Si el servicio ha gastado poco de su presupuesto, el equipo tiene margen para liberar más rápido, probar cambios arriesgados y hacer experimentos. Si el presupuesto está casi agotado, el mismo equipo frena el trabajo de funcionalidades y dedica esfuerzo a la fiabilidad hasta que el presupuesto se recupera. La decisión proviene de un número acordado de antemano, así que no depende de quién sea el más veterano o el más persuasivo en la reunión.

La **tasa de consumo** (burn rate) es la rapidez con que se está gastando el presupuesto, en relación con la tasa que lo gastaría exactamente por completo al final de la ventana. Una tasa de consumo de 1 significa que el presupuesto se agotará exactamente al final de la ventana. Una tasa de 10 significa que se agotará en una décima parte de la ventana. La tasa de consumo es el puente del SLO a las alertas, porque dice cuán urgente es un problema en términos de lo que le cuesta al objetivo.

Las visiones ágil y de ITIL se encuentran aquí, y usan vocabulario distinto para ideas relacionadas. En ITIL 4, la gestión de niveles de servicio es la práctica que fija, mide e informa los niveles de servicio, y el [acuerdo de nivel de servicio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) es el acuerdo documentado entre un proveedor y un cliente (véase el tema 5.1, Métricas de SLA, OLA y XLA). Un SLO es una meta interna normalmente más estricta que el SLA y propiedad del equipo que opera el servicio. Un SLA conlleva consecuencias, como créditos o penalizaciones. Un SLO conlleva una regla de decisión. Los equipos ágiles que poseen sus servicios ("tú lo construyes, tú lo operas") usan los SLO para hacer visible el costo de la fiabilidad en la misma lista de pendientes que las funcionalidades. Los equipos que siguen la práctica de ITIL pueden tratar los SLI como la forma medible de lo que los clientes dicen necesitar, y el SLO como la meta de trabajo que mantiene a salvo el SLA.

La [disponibilidad](https://en.wikipedia.org/wiki/Availability) es el SLI más familiar y se trata en detalle en otro lugar (véase el tema 5.3, Métricas de disponibilidad). La latencia, la corrección, la vigencia y el rendimiento también son candidatos. La habilidad está en elegir indicadores a partir de lo que importa a los usuarios, en lugar de lo que es fácil de recoger. El uso de CPU de un servidor es fácil de recoger y dice poco sobre si un cliente pudo pagar. La proporción de solicitudes de pago que se completan en menos de dos segundos dice muchísimo. Para la latencia, informa [percentiles](https://en.wikipedia.org/wiki/Percentile), no promedios, porque un promedio oculta la cola lenta que notan los usuarios (véanse el tema 1.6, Alfabetización estadística para métricas de servicio, y el tema 5.4, Métricas de capacidad y rendimiento).

## Principios clave

- **Parte del usuario, no del servidor.** Elige indicadores que describan una experiencia que una persona reconocería, como "mi pago se realizó", y trabaja hacia atrás hasta qué medir.
- **Una meta por debajo del 100 por ciento es una decisión, no una confesión.** La fiabilidad perfecta es inalcanzable e inasequible, y los usuarios por lo general no pueden notar la diferencia más allá de cierto punto. El presupuesto hace explícita esa compensación.
- **Fija el objetivo con las personas que dependen de él.** El SLO es un acuerdo negociado entre producto, operaciones y clientes, no un número elegido por un solo equipo.
- **Acuerda las consecuencias antes de que se agote el presupuesto.** Una política de presupuesto de errores escrita en una semana tranquila se cumple en una estresante. Una política inventada durante una caída se discute.
- **Alerta por consumo, no por cada altibajo.** Avisa a una persona solo cuando el presupuesto se consume lo bastante rápido como para amenazar el objetivo, y encamina el consumo más lento a tickets.
- **Los SLO describen servicios, nunca personas.** El presupuesto pertenece a un servicio y a su equipo. Nunca es una puntuación para un ingeniero.

## Definiciones de métricas

Las métricas siguientes describen el sistema de SLO de un servicio. Las cuatro primeras son el núcleo de la práctica, y las dos últimas describen la salud de la propia práctica. Cada reloj y límite se indica en la columna de la fórmula. Los "eventos válidos" son los eventos que cuentan para el SLI tras las exclusiones acordadas en el documento del SLO, como las solicitudes de las pruebas de carga del propio equipo, que se excluyen.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cumplimiento del SLI | La proporción de eventos válidos que fueron buenos, para un indicador de un servicio | eventos buenos / eventos válidos, para la ventana desde el inicio hasta el fin del periodo de informe; los eventos excluidos por el documento del SLO (pruebas de carga, mantenimiento planificado anunciado con antelación, si el SLO lo dice) se retiran tanto del numerador como del denominador | porcentaje | Telemetría del equilibrador de carga, de la aplicación o de sondas sintéticas; la plataforma de monitorización o de observabilidad | Gestión de niveles de servicio; monitorización y gestión de eventos | Definición de terminado de operabilidad; revisión con las partes interesadas de la salud del servicio | Continua, informada a diario y por ventana |
| Cumplimiento del SLO | Si el SLI cumplió el objetivo durante la ventana del SLO, y durante cuántas ventanas recientes | ventanas en que el cumplimiento del SLI estuvo en o por encima del objetivo / ventanas evaluadas, en los últimos 12 meses; una ventana aún abierta se excluye | porcentaje de ventanas | Historial de cumplimiento del SLI | Gestión de niveles de servicio; mejora continua | Meta del equipo o acuerdo de trabajo sobre fiabilidad | Mensual, con una tendencia trimestral |
| Presupuesto de errores restante | La parte del presupuesto aún no gastada en la ventana actual | 1 - (eventos malos hasta ahora / eventos malos permitidos para toda la ventana), donde eventos malos permitidos = (1 - SLO) x eventos válidos esperados para toda la ventana; el reloj arranca al inicio de la ventana y se detiene al final de la ventana | porcentaje del presupuesto | Cumplimiento del SLI y el pronóstico de volumen | Gestión de niveles de servicio; gestión de riesgos | Comprobación de preparación de versiones; insumo del trabajo planificado | Diaria, revisada semanalmente |
| Tasa de consumo | La rapidez con que se gasta el presupuesto en relación con la tasa de gasto uniforme | (eventos malos / eventos válidos durante un periodo retrospectivo) / (1 - SLO); el periodo retrospectivo está indicado, por ejemplo 1 hora o 6 horas | razón (1 significa exactamente dentro del presupuesto) | Telemetría del SLI con resolución temporal fina | Monitorización y gestión de eventos; gestión de incidentes | Reglas de alerta de guardia; detonante de trabajo en grupo | Continua, evaluada en las reglas de alerta |
| Cumplimiento de la política de presupuesto | Con qué frecuencia se aplicó la consecuencia acordada cuando se alcanzó un detonante de la política de presupuesto de errores | detonantes del periodo en que la acción de la política se tomó dentro del plazo acordado / detonantes alcanzados en el periodo; los detonantes que se dispensaron formalmente con un motivo registrado se cuentan por separado, no se retiran | porcentaje | Documento de política, registro de decisiones e historial de la lista de pendientes | Gestión de niveles de servicio; habilitación de cambios | Acuerdo de trabajo; seguimiento de la retrospectiva | Trimestral |
| Cobertura de SLO | La proporción de recorridos críticos de usuario, o de servicios incluidos, que tienen un SLO vigente y un SLI que funciona | servicios o recorridos incluidos con al menos un SLO cuyos datos de SLI llegaron en los últimos 7 días / servicios o recorridos incluidos; "incluidos" figura en el catálogo de servicios | porcentaje | Catálogo de servicios, registro de SLO y configuración de monitorización | Gestión del catálogo de servicios; gestión de niveles de servicio | Lista de propiedad de servicios del equipo | Trimestral |

El periodo retrospectivo de la tasa de consumo y la ventana del SLO son elecciones. Una ventana móvil de 28 días abarca semanas completas. Indica la elección en el documento del SLO y mantenla estable, o la tendencia engañará.

## Recomendaciones

### Elige indicadores a partir de lo que importa a los usuarios

**1. Empieza con los recorridos críticos de usuario.** Enumera las tres a seis cosas que un usuario debe poder hacer para que el servicio valga la pena, como iniciar sesión, buscar, pagar y descargar un extracto. Escribe cada una como una frase desde el lado del usuario. Elige luego el SLI que muestre si esa frase fue cierta. Esto mantiene pocos los SLO y evita un catálogo de indicadores técnicos que nadie lee.

**2. Expresa cada SLI como eventos buenos sobre eventos válidos.** Una razón es fácil de explicar, fácil de agregar y fácil de convertir en un presupuesto. Define "bueno" con un umbral que los usuarios aceptarían, y define "válido" de modo que el tráfico que no puedes atender razonablemente, como las solicitudes bloqueadas por abuso, se excluya de forma documentada. Escribe ambas definiciones en el documento del SLO, porque el denominador es donde se esconden la mayoría de los desacuerdos.

**3. Mide lo más cerca del usuario que sea práctico.** Una tasa de éxito del lado del servidor puede ser perfecta mientras un problema de red o de cliente hace inutilizable el servicio. Mide en el equilibrador de carga o en el borde, y añade una sonda sintética o una medición del lado del cliente para los recorridos que más importan. Cada punto de medición tiene un costo y un punto ciego, así que registra cuál usa cada SLI (véase el tema 1.5, Fuentes de datos e instrumentación).

**4. Usa percentiles para la latencia, con un umbral.** "El 95 por ciento de las solicitudes de búsqueda se completan en menos de 800 milisegundos" es un SLI. "Latencia media" no lo es, porque unas pocas solicitudes rápidas pueden compensar muchas lentas. Donde ayude, usa dos umbrales, como una mediana y un percentil 99, ya que la cola lenta da forma a cómo se siente el servicio (véase el tema 5.4, Métricas de capacidad y rendimiento).

### Fija objetivos que la gente pueda defender

**5. Fija el primer SLO a partir del desempeño actual y la necesidad del usuario, y endurécelo después.** Mide el SLI durante unas semanas, pregunta a los usuarios y al personal de soporte qué nivel notan y fija un objetivo que el servicio pueda cumplir hoy con algo de margen. Un objetivo fijado muy por encima del desempeño actual es un incumplimiento permanente, y la gente deja de mirarlo. Un objetivo fijado muy por debajo de lo que reciben los usuarios deja que la calidad se deteriore sin ser vista. Revísalo tras un trimestre.

**6. Mantén el SLO más estricto que el SLA, y mantenlos separados.** Si un acuerdo con un cliente promete el 99,5 por ciento, el objetivo del equipo podría ser el 99,9 por ciento, de modo que el presupuesto se agote antes de cruzar la línea contractual. No hagas que el SLO y el SLA sean el mismo número y no informes uno como el otro. El acuerdo es un documento comercial y legal, y el objetivo es una regla de decisión de ingeniería (véase el tema 5.1, Métricas de SLA, OLA y XLA).

**7. Ten en cuenta las dependencias.** Un servicio no puede ser más fiable que aquello de lo que depende, a menos que se degrade con elegancia. Enumera las dependencias clave, incluidos los proveedores, y pregunta qué implica su desempeño real para tu objetivo.

### Maneja el presupuesto como herramienta de decisión

**8. Escribe una política de presupuesto de errores antes de necesitarla.** La política dice qué ocurre en niveles definidos de consumo. Una versión sencilla tiene tres pasos: funcionamiento normal mientras quede presupuesto, revisión adicional de los cambios arriesgados y prioridad al trabajo de fiabilidad cuando se ha gastado una proporción indicada, y una pausa de las versiones de funcionalidades no esenciales cuando se agota, hasta que el presupuesto se recupere. Nombra quién puede conceder una excepción y cómo se registra. Los líderes de producto y de operaciones deben firmarla ambos, para que la política se aplique por igual a los dos lados.

**9. Gasta el presupuesto a propósito.** Un presupuesto que nunca se toca sugiere que el objetivo es demasiado estricto o que el equipo es demasiado cauteloso. Usa el presupuesto sobrante para experimentos, un ritmo de versiones más rápido, despliegues canarios e [interruptores de funcionalidad](https://en.wikipedia.org/wiki/Feature_toggle) que permitan probar en producción con una exposición limitada, y usa [liberaciones canarias](https://en.wikipedia.org/wiki/Canary_release) para detectar problemas mientras solo una pequeña proporción de usuarios está afectada. Trata un presupuesto sistemáticamente intacto como un aviso para preguntar si el objetivo coincide con lo que necesitan los usuarios (véase el tema 4.5, Métricas de versiones y despliegues).

**10. Alerta con múltiples tasas de consumo.** Un consumo rápido, como una tasa lo bastante alta como para gastar una gran parte del presupuesto en una hora, avisa a una persona. Un consumo lento, como una tasa modesta que aun así agotaría el presupuesto en días, crea un ticket para el horario laboral. Usar dos o más ventanas retrospectivas capta tanto los fallos repentinos como las fugas lentas, y reduce los avisos por altibajos breves que cuestan poco presupuesto. El capítulo de The Site Reliability Workbook sobre alertas basadas en SLO explica el patrón, y los umbrales deben ajustarse a tu servicio en lugar de copiarse (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

**11. Conecta los incidentes, los problemas y el aprendizaje con el presupuesto.** Tras un incidente, registra cuánto presupuesto consumió junto con su duración e impacto. Usa ese número para priorizar el registro del problema y las acciones de seguimiento (véanse el tema 4.1, Métricas de gestión de problemas, y el tema 4.2, Métricas de análisis posteriores y aprendizaje). El costo en presupuesto también da a las revisiones de incidentes graves una unidad común para comparar fallos muy distintos (véase el tema 3.4, Métricas de incidentes graves).

### Mantén honesta y viva la práctica

**12. Revisa los SLO frente a la realidad cada trimestre.** Compara el SLO con los contactos de soporte, las quejas y los resultados de satisfacción. Si los usuarios están descontentos mientras el SLO está en verde, el SLI es erróneo o la meta es demasiado laxa. Si el SLO está en rojo y nadie se queja, la meta puede ser demasiado estricta. Registra cada cambio y el motivo, y muestra el cambio en el gráfico de tendencia (véase el tema 6.2, Acuerdos de nivel de experiencia).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cumplimiento del SLI | Estrechar los eventos "válidos" hasta que desaparezcan los fallos, como excluir las solicitudes reintentadas o clases enteras de error; medir solo el componente más sano; sondear solo desde una ubicación favorable | Publicar la definición del SLI y las exclusiones en el documento del SLO con un registro de cambios; comparar el SLI con los contactos de soporte y las quejas de los usuarios; una revisión periódica de los eventos excluidos y su volumen |
| Cumplimiento del SLO | Fijar el objetivo lo bastante bajo como para cumplirlo siempre; cambiar la longitud de la ventana tras un mal periodo; redefinir un incumplimiento como un periodo de mantenimiento | Objetivo fijado con aportación de los usuarios y revisado según un calendario; ventana fijada en el documento; recuento de exclusiones y de cambios no planificados de la ventana informado junto al cumplimiento |
| Presupuesto de errores restante | Reclasificar eventos malos como excluidos; inflar el volumen esperado para que el recuento permitido de malos parezca mayor; reiniciar la ventana antes de tiempo | Eventos malos permitidos calculados con el volumen real al final de la ventana; volumen de eventos excluidos mostrado junto al presupuesto; fechas de la ventana fijadas de antemano |
| Tasa de consumo | Ajustar los umbrales de alerta para que el consumo nunca se dispare; usar un periodo retrospectivo tan largo que los consumos rápidos se promedien | Prueba de cobertura de alertas con incidentes pasados ("¿habría avisado esta regla?"); tasa de alertas accionables y recuento de detecciones omitidas (véase el tema 5.5, Métricas de monitorización y calidad de las alertas) |
| Cumplimiento de la política de presupuesto | Conceder excepciones de forma rutinaria; escribir una política con detonantes que nunca se alcanzan; contar un ticket simbólico de fiabilidad como la acción de la política | Excepciones contadas y revisadas por separado; proporción de excepciones en el periodo; trabajo de fiabilidad completado (véase el tema 4.1, Métricas de gestión de problemas) |
| Cobertura de SLO | Añadir un SLO trivial a cada servicio para subir el porcentaje; contar un recorrido como cubierto cuando no fluyen datos | Comprobación de la actualidad de los datos del SLI (llegaron datos en los últimos 7 días); revisión de si el SLO cubre un recorrido crítico, no un punto final secundario |

Una lectura sana muestra un SLI que sigue lo que informan los usuarios, un objetivo que a veces se incumple y a veces se cumple con holgura, y un presupuesto que se gasta a propósito. La política se aplica cuando se alcanza su detonante, las excepciones son raras y se registran, y cada cambio de definición es visible en el gráfico. Un servicio que está siempre al 100 por ciento de presupuesto restante, o uno que siempre incumple, merece una conversación sobre el objetivo, no elogios ni culpas. Recuerda que cualquier cifra aislada es un aviso para plantear una pregunta (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| SLI de recorrido de usuario | Coinciden con lo que sienten los usuarios; pocos; fáciles de explicar a quienes no son ingenieros | Necesitan esfuerzo para instrumentarlos de extremo a extremo; pueden pasar por alto fallos internos que aún no han llegado a los usuarios |
| SLI de componente o de recurso (CPU, memoria, profundidad de cola) | Baratos de recoger; útiles para el diagnóstico y la capacidad | Malos indicadores indirectos de la experiencia del usuario; producen muchas alertas que no importan |
| Ventana móvil | Suave; sin acantilado a fin de mes; siempre actual | Más difícil de explicar a los ejecutivos que un mes natural; un mal día persiste durante toda la ventana |
| Alertas por tasa de consumo | Avisan cuando el objetivo está realmente en riesgo; menos falsas alarmas | Más complejas de configurar y probar; los umbrales necesitan ajuste por servicio |

Elige pocos SLI, fíjalos con los usuarios y deja que el presupuesto decida el ritmo del cambio. La estrictez correcta es el objetivo más laxo que aún mantenga satisfechos a los usuarios, ya que cada nueve adicional cuesta más que el anterior.

## Preguntas para conversar con tu equipo

**1. ¿Qué necesita poder hacer un usuario de este servicio, y cómo sabríamos si no pudiera?**
Pide a cada persona que anote las tres cosas más importantes que hace un usuario con el servicio, sin mirar ningún panel. Compara las listas y anota las diferencias entre producto, operaciones y soporte. Pregunta luego cuál de esos recorridos tiene actualmente un SLI. El facilitador debe buscar recorridos importantes sin medición y mediciones que no describen ningún recorrido.

**2. Si nuestro SLO fuera del 99,9 por ciento y lo cumpliéramos, ¿estarían contentos los usuarios, y cómo lo sabemos?**
Pon el SLO actual junto al último trimestre de contactos de soporte, quejas y resultados de satisfacción. Pregunta si concuerdan. Si el SLO está en verde y los usuarios están descontentos, el SLI o la meta necesitan trabajo. Si los usuarios están contentos y el SLO está en rojo, la meta puede ser más estricta de lo que nadie necesita. Acordad una acción para acercar el objetivo y la experiencia.

**3. ¿Qué haríamos realmente de otro modo si se agotara el presupuesto de errores?**
Lee en voz alta la política de presupuesto de errores actual, o redactad una juntos si no existe ninguna. Pregunta quién dejaría de hacer qué y quién tiene autoridad para conceder una excepción. El facilitador debe insistir en acciones concretas, como pausar las versiones no esenciales y trasladar a personas con nombre al trabajo de fiabilidad, en lugar de intenciones generales. Una política en la que nadie cree que se vaya a seguir es peor que ninguna política.

**4. ¿Cuándo corrimos por última vez un riesgo porque nos sobraba presupuesto?**
Discutid si el equipo usa su presupuesto o solo lo custodia. Mira el último trimestre: ¿hubo un periodo en que el presupuesto estuvo casi intacto mientras las versiones eran lentas? Pregunta qué habría probado el equipo si hubiera sabido que era seguro hacerlo. Esta pregunta saca a la luz el exceso de cautela, y la respuesta suele apuntar a una liberación canaria, un interruptor o una canalización más rápida que permitiría al equipo usar bien su presupuesto.

**5. ¿Cuáles de nuestras alertas habrían saltado a tiempo para nuestro último mal incidente, y cuáles habrían saltado por nada?**
Toma el último incidente significativo y reproduce el historial de alertas frente a él. Cuenta los avisos que llegaron, cuánto tiempo después de empezar el impacto y cuántos avisos llegaron por eventos que costaron casi nada de presupuesto. Discutid si las alertas por tasa de consumo lo habrían hecho mejor. El objetivo es una lista corta de cambios de alertas, cada uno con un responsable, y no una discusión de culpas sobre quién estaba de guardia.

**6. ¿Quién posee cada SLO, y cuándo cambiamos uno a propósito por última vez?**
Enumera los SLO y escribe el responsable junto a cada uno, como equipo o rol. Pregunta cuándo se revisó cada uno y qué cambió. Un SLO que nadie ha tocado en un año es señal de que ya no informa decisiones. Acordad una fecha de revisión para cada uno y quién tiene el derecho de retirar un SLO que dejó de ser útil.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega ganan una regla clara sobre cuán rápido moverse. Cuando queda presupuesto, pueden liberar con más frecuencia y probar cambios más audaces. Cuando es bajo, ponen el trabajo de fiabilidad en la lista de pendientes sin una larga negociación. Deben ayudar a elegir los indicadores porque saben qué recorridos importan, y deben instrumentar las funcionalidades nuevas pensando desde el principio en el SLI (véase el tema 2.8, Métricas DORA). El presupuesto es un recurso del equipo con el que planificar, nunca un número que esconder.

### Equipos de servicio y operaciones

Los equipos de operaciones usan los SLO para decidir qué merece un aviso y qué puede esperar a la mañana. Las alertas por tasa de consumo reducen el ruido y atan el trabajo de guardia a lo que sienten los usuarios (véase el tema 5.7, Métricas de trabajo repetitivo y guardias). Mantienen honestas las definiciones de los SLI, mantienen la telemetría que las respalda y registran el costo en presupuesto en los registros de incidentes y de problemas.

### Liderazgo y gobernanza

Los líderes deben hacer tres preguntas: cuál es el objetivo, cuánto presupuesto queda y qué haremos si se agota. Firman la política de presupuesto de errores y respaldan al equipo cuando la política dice que hay que frenar. Evitan convertir el cumplimiento del SLO en una métrica de bonificación, lo que invita a estrechar definiciones y a fijar metas blandas.

### Clientes y usuarios

Los clientes se benefician cuando el objetivo refleja lo que necesitan y cuando pueden ver cómo se desempeña el servicio frente a él. Deben ser consultados cuando se fija el objetivo, porque su tolerancia a la lentitud o a la inactividad varía según la tarea y la hora del día. Las medidas de experiencia, como la satisfacción y el esfuerzo, comprueban si el SLO capta lo que sienten (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio tiene un equipo de pagos, un equipo de plataforma y un centro de servicios. El servicio de pagos es crítico para el negocio. Todos los números de este ejemplo son ilustrativos.

El equipo define un SLI para el recorrido "pagar un pedido": la proporción de solicitudes de pago válidas que devuelven un éxito en menos de 2 segundos, medida en el equilibrador de carga. Las solicitudes válidas excluyen las pruebas de carga del propio equipo y las solicitudes que el servicio antifraude rechaza por diseño. El SLO es del 99,9 por ciento sobre 28 días móviles. La ventana lleva 12.000.000 de solicitudes válidas esperadas, así que el presupuesto es de 12.000 solicitudes malas (0,1 por ciento). La política de presupuesto de errores, firmada por el jefe de producto y el jefe de plataforma, tiene tres niveles: con el 50 por ciento del presupuesto gastado, los cambios arriesgados necesitan un segundo revisor y un despliegue canario; con el 75 por ciento, el trabajo de fiabilidad tiene prioridad en la siguiente conversación de planificación; con el 100 por ciento, las versiones de funcionalidades no esenciales se pausan hasta que el presupuesto se recupere.

El día 10 de la ventana el equipo ve 7.800 solicitudes malas de unas 4.285.714 esperadas hasta ahora, lo que da un cumplimiento del SLI de alrededor del 99,82 por ciento, un 65 por ciento del presupuesto gastado y una ventana transcurrida solo en un 36 por ciento. La tasa de consumo del periodo es de alrededor de 1,8, de modo que a este ritmo el presupuesto se agota hacia el día 15. Un mal despliegue explicó 5.000 de los fallos. El registro del incidente muestra que el fallo duró 22 minutos, la revisión del incidente grave identifica una comprobación que faltaba en la canalización, y el costo en presupuesto del incidente se registra en el registro del problema (véase el tema 4.1, Métricas de gestión de problemas).

El equipo sigue la política. La acción del segundo nivel se aplica de inmediato, así que los cambios arriesgados necesitan un despliegue canario, y la reunión de planificación sitúa la comprobación de la canalización en lo alto de la cola de trabajo. El responsable de producto acepta una pausa en una funcionalidad de promoción no urgente. Para el día 28 el presupuesto está gastado en un 94 por ciento, y el equipo termina la ventana dentro del objetivo.

El riesgo de manipulación aparece en la revisión. Otro equipo, que opera el servicio de búsqueda del minorista, informó un 99,95 por ciento para el trimestre mientras el centro de servicios registraba un aumento de contactos de "la búsqueda no funciona". Al investigar, el equipo de plataforma descubrió que el equipo de búsqueda había redefinido "válido" para excluir las solicitudes reintentadas en menos de 5 segundos, lo que eliminaba muchos fallos reales. La revisión restableció la definición original, reexpresó el trimestre y añadió dos barreras de protección: cualquier cambio de una definición se registra en el documento del SLO con un motivo, y el cumplimiento del SLI se compara cada mes con los contactos de soporte. Nadie mintió, ya que el cambio se había hecho para reducir el ruido, así que la solución fue una definición más clara, no una reprimenda.

## Perspectiva por sector

**Startup.** Empieza con un SLO para el recorrido más importante, medido en el borde, con una política sencilla que quepa en una página. No construyas una plataforma para decenas de SLO. El presupuesto ayuda a un equipo pequeño a discutir menos sobre si entregar un viernes.

**Pequeña empresa.** Una pequeña empresa suele depender de herramientas alojadas y de proveedores, así que el SLI puede provenir de los datos de estado de un proveedor o de una sencilla sonda externa. Lee por escrito los niveles de servicio del proveedor y compáralos con tus propias necesidades.

**Gran empresa.** Muchos servicios, equipos y proveedores elevan lo que está en juego en la coherencia. Aporta una plantilla compartida para los documentos de SLO, un registro común y una forma estándar de calcular el cumplimiento y el presupuesto, para que los líderes puedan comparar y consolidar sin discutir las definiciones. Mantén el SLO como propiedad del equipo del servicio y el registro curado de forma central.

**Gobierno y sector público.** Los servicios suelen tener que cumplir metas legales o publicadas, y un fallo puede informarse públicamente. Mantén separado el compromiso contractual o legal del objetivo interno, y asegúrate de que el SLO interno sea más estricto. Documenta la definición del SLI, las exclusiones y el linaje de los datos para la auditoría, y planifica la accesibilidad y a los usuarios que no pueden elegir otro proveedor (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación son menos discusiones y mejores decisiones sobre la fiabilidad. Sin un objetivo, el trabajo de fiabilidad compite con las funcionalidades por la fuerza de quien discute más alto. Con un objetivo y un presupuesto, la compensación es visible y se acuerda de antemano, y los usuarios obtienen un servicio tan fiable como necesitan, sin que el equipo pague por una fiabilidad más allá de ese punto.

El costo tiene cuatro partes. La primera es el diseño: talleres para elegir recorridos, indicadores y objetivos, y para escribir la política. La segunda es la instrumentación: telemetría en el lugar adecuado, sondas y la canalización que convierte eventos en cumplimiento y presupuesto (véase el tema 1.5, Fuentes de datos e instrumentación). La tercera es la operación: reglas de alerta, un panel, una revisión trimestral y el tiempo para mantener vigentes las definiciones. La cuarta es el costo de oportunidad cuando la política pausa el trabajo de funcionalidades, que es el costo de honrar el acuerdo y la razón para acordarlo antes de que llegue la presión.

El retorno aparece en patrones que un equipo puede seguir por sí mismo: menos avisos que no requirieron ninguna acción, debates más cortos sobre si liberar, trabajo de fiabilidad programado antes de que se agote el presupuesto en lugar de tras un incidente grave y menos sorpresas para los clientes. Describe el beneficio comparando las propias cifras del equipo antes y después, como los avisos por rotación y la proporción de presupuesto consumida por el mayor incidente.

## Antipatrones y trampas

- **Demasiados SLO.** Decenas de objetivos diluyen la atención, y nadie puede decir cuál importa. Empieza con los recorridos críticos de usuario y retira el resto.
- **SLO igual a SLA.** Informar un número como ambos elimina el margen de seguridad y mezcla una regla de ingeniería con una promesa comercial. Mantén el objetivo más estricto que el acuerdo.
- **Una política que nunca se aplica.** Si el presupuesto se agota y no cambia nada, la práctica pierde credibilidad. Haz que los líderes firmen la política y registra cada excepción con su motivo.
- **Usar el presupuesto como cuadro de mando de personas.** Clasificar a ingenieros o al personal de guardia por el presupuesto gastado hace que la gente oculte incidentes y estreche definiciones. Atribuye el presupuesto al servicio y discute las causas a nivel del sistema (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- **Alertar por cada bajón.** Avisar por síntomas en bruto crea fatiga de alertas y enseña a la gente a ignorar los avisos. Avisa por tasa de consumo y envía los consumos lentos a tickets.
- **Fijar y olvidar.** Un SLO que nadie revisa se aleja de lo que necesitan los usuarios. Programa una revisión trimestral y registra qué cambió y por qué.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Indicadores y objetivos | La fiabilidad se describe con palabras; se informa del tiempo de actividad de los servidores | Algunos equipos definen SLI; las metas varían y rara vez se revisan | Los recorridos críticos de usuario tienen SLI y SLO documentados en una plantilla compartida | Los SLO tienen seguimiento de su tendencia, se contrastan con la opinión de los usuarios y se endurecen o relajan con evidencia | Los SLO se acuerdan con clientes y proveedores y se alinean con los servicios dependientes y los contratos |
| Presupuesto de errores y política | Sin presupuesto; fiabilidad frente a funcionalidades se decide por discusión | Se calcula un presupuesto para unos pocos servicios; sin consecuencias acordadas | Una política escrita, firmada por producto y operaciones, con detonantes definidos | Cumplimiento de la política medido, excepciones revisadas, el presupuesto informa la planificación de versiones | Decisiones de presupuesto coordinadas entre los equipos que comparten dependencias; política revisada a medida que cambian las condiciones |
| Alertas y respuesta | Alertas por umbral sobre recursos en bruto; muchos avisos | Algunas alertas por tasa de consumo; umbrales copiados de ejemplos | Alertas de tasa de consumo de varias ventanas para los SLO clave, con tickets para el consumo lento | Calidad de las alertas medida y ajustada con incidentes pasados | Alertas alineadas a lo largo de cadenas de servicio, y mejora impulsada por revisiones conjuntas |

## Lista de verificación

- [ ] Los recorridos críticos de usuario del servicio están enumerados, cada uno escrito desde el lado del usuario.
- [ ] Cada SLI se define como eventos buenos sobre eventos válidos, con las exclusiones escritas.
- [ ] Los SLI de latencia usan percentiles y un umbral declarado, no promedios.
- [ ] Cada SLO indica su meta, su ventana y dónde se mide el SLI.
- [ ] El SLO es más estricto que cualquier SLA, y ambos se informan por separado.
- [ ] Existe una política de presupuesto de errores, firmada por los líderes de producto y de operaciones, que nombra quién puede conceder excepciones.
- [ ] Las alertas de tasa de consumo usan al menos dos periodos retrospectivos, y los consumos lentos crean tickets en lugar de avisos.
- [ ] Cada registro de incidente muestra el presupuesto que consumió.
- [ ] El cumplimiento del SLI se compara cada mes con los contactos de soporte y los resultados de satisfacción.
- [ ] Cada SLO tiene un responsable (un equipo o un rol) y una fecha de revisión, y los cambios se registran con motivos.
- [ ] Ningún resultado de SLO se usa para clasificar o premiar a individuos.

## Prompts de IA

**Redacta SLI candidatos a partir de recorridos de usuario.**

```text
Opero [service name], usado por [type of users] para hacer [list of critical
user journeys]. Podemos medir en [list of measurement points, for example load
balancer, application logs, synthetic probe]. Para cada recorrido, propón uno o
dos SLI candidatos escritos como eventos buenos sobre eventos válidos, con una
definición sugerida de "bueno", "válido" y las exclusiones. Anota las fortalezas
y los puntos ciegos de cada punto de medición. No inventes valores meta ni
referencias; pregúntame qué toleran los usuarios. Enumera tus supuestos.
```

**Redacta una política de presupuesto de errores.**

```text
Ayúdame a redactar una política de presupuesto de errores para [service name]
con un SLO de [target] sobre [window]. Las partes interesadas son [product role]
y [operations role]. Propón niveles de detonante, la acción en cada uno, quién
puede conceder una excepción y cómo se registra, y cómo se revisa la política.
Mantenla en una página y señala las decisiones que necesitan un patrocinador
humano. No inventes umbrales de otras organizaciones; presenta opciones y
compensaciones. Enumera tus supuestos.
```

**Revisa un SLO en busca de riesgos de manipulación.**

```text
Este es nuestro documento de SLO de [service name]: [paste SLI definition,
exclusions, target, window, and change log]. Identifica formas en que podría
estrecharse el SLI, cambiarse la ventana o la meta, o excluirse eventos de un
modo que haga que los resultados parezcan mejores que la experiencia del
usuario. Para cada riesgo, sugiere una métrica o práctica de barrera de
protección. No supongas intención. Enumera tus supuestos y las preguntas que
debería responder.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados, como la disponibilidad, la calidad de las alertas y los incidentes graves, y la barrera de protección que debe acompañar a cada medida de SLO.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen cada métrica en la tabla de manipulación y cada referencia cruzada con su título.

## Puntos clave

- Elige pocos SLI a partir de lo que hacen los usuarios y exprésalos cada uno como eventos buenos sobre eventos válidos.
- Un SLO por debajo del 100 por ciento es una decisión sobre el riesgo, y el presupuesto de errores es el margen que esa decisión deja para el cambio.
- Escribe de antemano la política de presupuesto de errores, fírmala a nivel de liderazgo y registra cada excepción.
- Alerta por tasa de consumo con más de una ventana retrospectiva, para que los avisos reflejen un riesgo real para el objetivo.
- Protege las definiciones: registra cada cambio y compara los resultados del SLI con lo que informan los usuarios.
- Atribuye el presupuesto a servicios y equipos, nunca a individuos, y revisa cada SLO al menos cada trimestre.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
