# Deuda técnica y errores conocidos

**Trata los errores conocidos y la deuda técnica como un único libro visible de correcciones aplazadas, mide lo que cuesta cada elemento por cada mes que permanece abierto y gasta una proporción protegida de la capacidad en los elementos con mayor interés.**

## Resumen y motivación

Todo equipo aplaza alguna reparación. Un defecto se entiende pero no se corrige, se toma un atajo para cumplir una fecha, un componente se deja envejecer y se escribe una solución provisional en un manual de procedimiento. Cada aplazamiento es una decisión sensata cuando se toma. El problema empieza cuando los aplazamientos se acumulan fuera de la vista, porque el costo de cargar con ellos aparece más tarde como incidentes, entrega lenta y personas cansadas, sin ninguna línea en ningún informe que conecte el costo con la causa.

Dos vocabularios describen el mismo patrón. En [ITIL](https://en.wikipedia.org/wiki/ITIL), un **error conocido** es un problema cuya causa raíz se entiende y para el cual existe una solución provisional, o una corrección permanente aún no aplicada. Los errores conocidos se registran para que el personal del centro de servicios y de operaciones pueda resolver rápido los incidentes repetidos, y el registro permanece abierto hasta que se libera una corrección. En el trabajo de software ágil, la **[deuda técnica](https://en.wikipedia.org/wiki/Technical_debt)** es la metáfora, acuñada por [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) en 1992, para las decisiones de diseño e implementación que dificultan el cambio futuro. La metáfora lleva dos ideas que importan para la medición: el **principal**, que es el esfuerzo necesario para eliminar la deuda, y el **interés**, que es el esfuerzo extra o el riesgo que pagas cada periodo mientras la deuda permanece.

Las dos visiones difieren en dónde miran. Los errores conocidos se descubren a través de las operaciones: un incidente o una investigación de problemas encuentra una causa. La deuda técnica suele descubrirse a través de la entrega: un desarrollador nota que un cambio es más difícil de lo que debería. Un error conocido es a menudo deuda técnica que ya ha empezado a doler a los clientes. La deuda técnica es a menudo un error conocido a punto de ocurrir. Mantener listas separadas, una en la herramienta ITSM y otra en una lista de pendientes o en una wiki, oculta la conexión y produce dos argumentos que compiten por la misma capacidad escasa.

Este tema ofrece un pequeño conjunto de medidas para el libro combinado. Evita una única cifra en dinero de la deuda de toda una organización, que ningún método produce de forma fiable, y mide lo que puedes observar: elementos abiertos, tiempo esperado, incidentes causados, trabajo añadido y capacidad gastada en reparación. El libro alimenta entonces una conversación de priorización entre producto y operaciones (véase el tema 4.1, Métricas de gestión de problemas, para los registros de problemas y las correcciones permanentes, y el tema 2.9, Trabajo operativo y trabajo no planificado, para la carga de interrupciones que crea la deuda).

Términos usados en este tema:

- Una **solución provisional** (workaround) es una manera de restablecer el servicio o evitar un fallo sin eliminar la causa.
- Una **corrección permanente** elimina la causa. El [análisis de causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis) es el trabajo que la encuentra.
- La **[refactorización de código](https://en.wikipedia.org/wiki/Code_refactoring)** reestructura el código sin cambiar su comportamiento externo. Es la forma habitual de saldar la deuda de diseño.
- Un **[mal olor en el código](https://en.wikipedia.org/wiki/Code_smell)** (code smell) es una señal superficial en el código que a menudo indica un problema más profundo. Es un aviso para echar un vistazo, no un veredicto.
- El **[costo de oportunidad](https://en.wikipedia.org/wiki/Opportunity_cost)** es el valor de la mejor alternativa a la que renuncias al elegir un uso del tiempo frente a otro. Cada corrección compite con una funcionalidad, y la comparación es la decisión real.
- El **[costo del retraso](https://en.wikipedia.org/wiki/Cost_of_delay)** es la pérdida económica por posponer una pieza de trabajo. Es la idea detrás de ponerle precio al interés de un elemento de deuda.
- Un **[error de software](https://en.wikipedia.org/wiki/Software_bug)** (bug) es un defecto en el software. Un error conocido puede ser un bug, una debilidad de configuración, un límite de diseño o un defecto de un proveedor.
- El **[análisis estático de programas](https://en.wikipedia.org/wiki/Static_program_analysis)** inspecciona el código sin ejecutarlo. Sus avisos y sus puntuaciones de complejidad son indicadores de posible deuda, y son una evidencia más débil que el historial de incidentes.

No toda la deuda es un error. El cuadrante de Martin Fowler separa la deuda deliberada de la inadvertida y la temeraria de la prudente (véase la lista de referencias). Un atajo prudente con un plan de pago es un préstamo sensato, y la deuda temeraria es la que hay que prevenir. Las métricas de aquí no juzgan el origen. Muestran el saldo.

## Principios clave

- **Un libro, dos puertas.** Los errores conocidos de operaciones y los elementos de deuda de la entrega van a la misma lista visible, con un vínculo entre los registros que describen la misma causa.
- **Mide el interés, y también el principal.** El tamaño de una reparación importa menos que lo que le cuesta cada mes el elemento abierto en incidentes, soluciones provisionales y cambio ralentizado. Ordena por interés por unidad de esfuerzo de reparación.
- **Haz del aplazamiento una decisión con responsable.** Cada elemento tiene un responsable, un motivo declarado para esperar y una fecha de revisión. Un elemento que nadie eligió aplazar es descuido, y se cuenta como tal.
- **Protege la capacidad antes de necesitarla.** Una proporción declarada de la capacidad de cada equipo para el trabajo de reparación, acordada de antemano, supera a una limpieza heroica tras un mal trimestre.
- **Mantén honesta la solución provisional.** Una solución provisional es un servicio, con su propio costo, responsable y modos de fallo. Mide con qué frecuencia se usa y con qué frecuencia falla.
- **Describe sistemas, nunca personas.** La deuda pertenece a un servicio o a un componente. No la atribuyas nunca a un autor y no clasifiques nunca a los ingenieros por la deuda que tocaron.
- **Estima de forma gruesa.** Tamaños de "horas", "días" y "semanas" bastan. La precisión más allá de eso es inventada.

## Definiciones de métricas

Las métricas siguientes describen el libro de reparaciones aplazadas. Los relojes y los límites se indican en cada fórmula. Las medidas de tiempo se informan como distribuciones (la mediana y el percentil 85 o 95), no como un único promedio.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Antigüedad de la lista de pendientes de errores conocidos | Cuánto tiempo llevan esperando una corrección permanente los errores conocidos abiertos | El reloj arranca cuando el registro del problema se marca como "error conocido"; se detiene cuando la corrección permanente se libera en producción; los elementos cerrados como "riesgo aceptado" se informan por separado y se excluyen. Informa el recuento, la antigüedad mediana y la antigüedad del percentil 85, por servicio | días (distribución) | Registros de problemas y errores conocidos de la herramienta ITSM, registros de versiones | Gestión de problemas | Gráfico de elementos de trabajo envejecidos; antigüedad de la lista de pendientes de errores | Mensual |
| Cobertura de soluciones provisionales | Proporción de errores conocidos abiertos que tienen una solución provisional documentada y probada que un agente puede seguir | errores conocidos abiertos con una solución provisional revisada en los últimos 6 meses / errores conocidos abiertos; se excluyen los elementos cerrados y los de riesgo aceptado | porcentaje | Base de conocimiento vinculada a los registros de errores conocidos | Gestión de problemas; gestión del conocimiento | Manual de procedimiento o definición de terminado de operabilidad | Mensual |
| Incidentes vinculados a errores conocidos abiertos | Incidentes cuya causa es un error conocido abierto, una medida directa del interés pagado en perturbación del servicio | incidentes del periodo vinculados a un error conocido que estaba abierto cuando empezó el incidente / todos los incidentes del periodo; los incidentes sin vínculo de causa se informan como no vinculados, no se cuentan | porcentaje, más recuento | Vínculos de incidente a problema de la herramienta ITSM | Gestión de incidentes; gestión de problemas | Defectos escapados; entrada de errores en producción | Mensual |
| Existencias de deuda | Número y tamaño estimado de los elementos de deuda técnica registrados que permanecen abiertos | elementos abiertos en el registro de deuda al final del periodo; el tamaño es la suma de las bandas gruesas de esfuerzo (horas, días, semanas) asignadas al registrarlos; la deuda no registrada o sospechada se excluye | recuento, y bandas de esfuerzo | Registro de deuda en el gestor, etiquetado por servicio | Mejora continua; diseño del servicio | Elementos de la lista de pendientes del producto etiquetados como deuda | Mensual |
| Interés de la deuda | Trabajo extra causado por la deuda abierta y los errores conocidos, en tiempo del equipo | horas registradas en el periodo contra elementos de trabajo etiquetados con una referencia de deuda o de error conocido (soluciones provisionales, pasos manuales, retrabajo y esfuerzo extra en cambios afectados) / total de horas de trabajo del equipo en el periodo; el propio trabajo de reparación se excluye y se cuenta bajo la proporción de capacidad | porcentaje del tiempo de trabajo | Etiquetas de tiempo o de esfuerzo en los elementos de trabajo, guardadas a nivel de equipo | Mejora continua; gestión de problemas | Proporción de trabajo no planificado y de retrabajo | Mensual |
| Proporción de capacidad para la deuda | Proporción de la capacidad de entrega gastada en saldar deuda y errores conocidos | capacidad (recuento de elementos o esfuerzo) de los elementos de trabajo completados etiquetados como reparación de deuda o corrección de error conocido / todos los elementos de trabajo completados en el periodo; los elementos sin etiqueta se excluyen | porcentaje | Gestor, elementos completados por etiqueta | Mejora continua; habilitación de cambios | Asignación de capacidad | Por periodo de planificación, revisado mensualmente |
| Cambio neto de la deuda | Si el libro crece o se reduce | elementos de deuda y de error conocido registrados en el periodo menos elementos resueltos en el periodo; resuelto significa corrección liberada, no fusionada; los elementos cerrados como "no se corregirá" se cuentan en una línea aparte | recuento (con signo) | Registro de deuda y registros de errores conocidos | Mejora continua | Cambio de la lista de pendientes por categoría | Mensual |

El riesgo aceptado es una forma legítima de cerrar un error conocido, porque algunos problemas no valen la pena corregirse. Se enumera por separado para que cerrar elementos no mejore en silencio la cifra de antigüedad. La ventana de revisión de 6 meses de la cobertura de soluciones provisionales es un ejemplo. Un equipo fija la ventana para que coincida con la rapidez con que cambian sus sistemas y la escribe en el registro de métricas.

## Recomendaciones

### Construye el libro

**1. Fusiona la lista de errores conocidos y la lista de deuda en un solo libro.** Mantén un único registro con un campo para el origen (operaciones o entrega), el servicio, el responsable, la banda de tamaño y el vínculo con los registros relacionados. La herramienta ITSM puede guardarlo, o puede hacerlo el gestor, siempre que cada sistema enlace con el otro. Sin una vista única, un error conocido de operaciones compite con un elemento de deuda invisible de la entrega por los mismos ingenieros.

**2. Registra la deuda en el momento en que se crea o se descubre.** Un atajo tomado deliberadamente va al registro en la misma solicitud de incorporación o registro de cambios, con un motivo declarado y una fecha de revisión. La deuda hallada más tarde la registra quien la encuentra. Una regla de captura barata, de una línea, funciona mejor que una auditoría periódica, porque la gente olvida lo que sabía el trimestre pasado.

### Mide el interés

**3. Vincula siempre los incidentes con los errores conocidos.** El vínculo entre un incidente y su error conocido es el dato más fuerte que tienes sobre el interés, y cuesta unos segundos al resolver. Haz del vínculo un campo obligatorio cuando la causa se conozca, e informa la proporción no vinculada para que una laguna no parezca una buena noticia (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes). Cuando la misma causa aparece en varios incidentes, el registro del problema lleva la evidencia para la corrección.

**4. Etiqueta el trabajo que crea la deuda.** Deja que los ingenieros marquen un elemento de trabajo cuando se necesitó una solución provisional, un paso manual o retrabajo extra por una debilidad conocida, y vincúlalo al elemento del libro. La etiqueta cuesta poco y da la cifra del interés de la deuda a nivel de equipo. Trata el resultado como una estimación con amplio error, útil para ordenar elementos y para vigilar una tendencia, no para contabilizar.

**5. Pon precio a cada elemento con dos números: esfuerzo de reparación e interés mensual.** Usa bandas gruesas, como horas, días, semanas, para el esfuerzo, y un costo mensual aproximado extraído de los incidentes vinculados, del trabajo etiquetado y de cualquier costo de caída que tu organización ya estime. Dividir el interés entre el esfuerzo da un sencillo tiempo de recuperación de la inversión. No inventes precisión: una banda y un supuesto declarado bastan para separar las victorias evidentes de los elementos que pueden esperar.

### Protege la capacidad y decide

**6. Reserva una proporción permanente de la capacidad e infórmala.** Acuerda con el responsable de producto una proporción de cada ciclo para el trabajo de reparación, fijada por la tendencia del libro y revisada cada trimestre. Informa la proporción de capacidad para la deuda junto a las cifras de trabajo planificado, para que los líderes vean el trabajo de reparación como una inversión deliberada. Una proporción reservada también protege al equipo de un debate de compensaciones en cada conversación de planificación, que la lista de pendientes de funcionalidades suele ganar.

**7. Ordena la reparación frente a las funcionalidades con una moneda común.** Pon los errores conocidos y los elementos de deuda en la misma conversación de priorización que las funcionalidades, expresados como costo del retraso y tiempo de recuperación de la inversión. Una corrección que elimina un incidente semanal y recupera su esfuerzo en un trimestre compite por sus méritos. Ordenar por ruido, antigüedad del cargo o fecha de registro da malos resultados (véase el tema 4.4, Fallos de cambio y retrabajo).

**8. Cierra el ciclo de las decisiones de aplazamiento.** Para cada elemento que se deja abierto de forma consciente, registra quién aceptó el riesgo, la fecha de revisión y el desencadenante que lo subiría de prioridad, como un segundo incidente o un cambio planificado en esa zona. Revisa la lista de aceptados con su propia cadencia. Un elemento aplazado tres veces sin desencadenante es una decisión de ignorarlo, y el libro debe decirlo.

### Mantén honestos los números

**9. Libera la corrección antes de cerrar el registro.** Un error conocido permanece abierto hasta que la corrección permanente está en producción y se ha comprobado la repetición durante una ventana indicada. Cerrar en "fusionado" o "ticket hecho" halaga las cifras de antigüedad y de cambio neto y reabre el incidente más tarde (véase el tema 4.5, Métricas de versiones y despliegues). Sigue la tasa de reapertura de los errores conocidos como una comprobación de calidad de la regla de cierre.

**10. Mira la forma del libro, más allá de los totales.** Un recuento plano puede ocultar una cola larga de elementos muy antiguos, una proporción creciente de elementos en un servicio o un libro mantenido pequeño cerrando todo como "no se corregirá". Muestra en una página la distribución de antigüedad, el reparto por servicio y la lista de riesgos aceptados. Revísala con las personas que poseen los servicios, en la misma reunión que planifica el trabajo del siguiente trimestre.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Antigüedad de la lista de pendientes de errores conocidos | Cerrar registros antiguos como "riesgo aceptado" o "no se corregirá"; dividir un registro antiguo en otros nuevos y jóvenes; reiniciar el reloj registrando de nuevo | Recuento y antigüedad de los riesgos aceptados informados en la misma página; revisión de los cierres por alguien ajeno al equipo propietario; linaje de los registros conservado |
| Cobertura de soluciones provisionales | Escribir una solución provisional vaga para satisfacer el campo; contar una solución provisional que ningún agente ha probado jamás | Tasa de uso y de fallo de las soluciones provisionales en los incidentes vinculados; prueba periódica de una muestra de soluciones provisionales |
| Incidentes vinculados a errores conocidos abiertos | Dejar los incidentes sin vincular, o vincularlos a una causa distinta, para que baje la proporción | Proporción de incidentes no vinculados informada a su lado; revisión por muestreo de incidentes cerrados en busca de vínculos omitidos |
| Existencias de deuda | No registrar la deuda, para que las existencias parezcan pequeñas; fusionar muchos elementos en uno grande; registrar nimiedades para parecer diligente | Revisión del registro frente a una muestra de revisiones de código y de análisis posteriores de incidentes; comprobaciones del tamaño y la especificidad de los elementos |
| Interés de la deuda | Etiquetar de menos el trabajo para evitar el escrutinio, o de más para ganar un presupuesto de reparación; leer la cifra como una valoración de un equipo | Auditoría por muestreo de elementos etiquetados y sin etiquetar; vista solo a nivel de equipo, sin comparación entre equipos; interés leído junto con los vínculos de incidentes |
| Proporción de capacidad para la deuda | Etiquetar trabajo ordinario de funcionalidades como reparación; elegir elementos cosméticos fáciles para llenar la proporción | Comprobación de resultados: antigüedad de los elementos de mayor interés más antiguos y vínculos de incidentes en descenso; revisión de lo que se corrigió frente al orden de prioridad |
| Cambio neto de la deuda | Resolver muchos elementos diminutos para compensar unos pocos grandes; cerrar elementos como "no se corregirá" para que baje el recuento | Cambio neto mostrado por banda de tamaño y por interés; línea de "no se corregirá" informada; comprobación de repetición en los elementos resueltos |

Una lectura sana muestra un libro visible, específico y que se mueve en una dirección que el equipo eligió. Los elementos de mayor interés más antiguos van disminuyendo en número. Los incidentes vinculados a errores conocidos abiertos tienden a la baja, y la proporción no vinculada es pequeña. La proporción de capacidad para la deuda es estable en el nivel acordado en lugar de dispararse tras una crisis y desvanecerse después. La lista de riesgos aceptados es corta y revisada. Cuando un número aislado parezca excelente y los demás no se muevan, sospecha de la definición antes de celebrar.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Un libro fusionado de errores conocidos y deuda | Priorización única; operaciones y entrega ven los mismos costos | Necesita herramientas compartidas o vínculos; hay que resolver la propiedad entre dos funciones |
| Una proporción de capacidad permanente para la reparación | Predecible; protege el trabajo de reparación de la presión de las funcionalidades | Puede gastarse en elementos de poco valor si la ordenación es débil |
| Trabajo de reparación programado solo cuando gana el debate de prioridades | Flexible; responde a la prioridad actual | Las funcionalidades casi siempre ganan; el libro crece hasta una crisis |
| Interés estimado a partir de incidentes y trabajo etiquetado | Ata la deuda a un costo observable; respalda la ordenación | Números aproximados; depende de un etiquetado y unos vínculos de incidentes honestos |
| Un empujón de reparación dedicado o "semana de la deuda" | Foco y avance visible | Episódico; el libro se rellena entre eventos; interrumpe los compromisos planificados |

Elige el arreglo más ligero que mantenga en movimiento los elementos de mayor interés más antiguos. Un equipo pequeño puede llevar el libro en un tablero con una etiqueta y una revisión mensual. Las organizaciones mayores necesitan vínculos entre herramientas y un método de ordenación acordado. El objetivo es una decisión deliberada sobre cada elemento, no una lista vacía.

## Preguntas para conversar con tu equipo

**1. ¿Qué tres elementos abiertos nos cuestan más cada mes, y cómo lo sabemos?**
Pide a la gente que nombre candidatos de memoria y compruébalos luego frente a los vínculos de incidentes y al trabajo etiquetado. Compara la lista recordada con la medida y anota las diferencias. Acordad cómo se reunirá a partir de ahora la evidencia para la ordenación.

**2. Cuando aplazamos una corrección, ¿quién decide, y cuándo volvemos a mirar?**
Repasa los cinco últimos aplazamientos y pregunta quién aceptó el riesgo y qué fecha de revisión se fijó. Donde nadie decidió, el elemento se descuidó, no se aplazó. Acordad una regla por la que cada aplazamiento lleve un responsable, un motivo y un desencadenante. Discutid cómo se revisará la lista de riesgos aceptados y quién lo hará.

**3. ¿Cuánta capacidad deberíamos reservar para la reparación, y qué cambiaría la proporción?**
Muestra la tendencia del libro y la proporción actual de capacidad para la deuda. Pregunta a qué estaría dispuesto a renunciar el equipo para subirla y qué evidencia permitiría que bajara. Registra el número, el motivo y la fecha en que se revisará.

**4. ¿Son reales nuestras soluciones provisionales, y podría seguirlas un agente nuevo?**
Elige una solución provisional al azar y pide a alguien que no la escribió que la siga. Acordad una rutina de pruebas para las soluciones provisionales que cubren los errores de mayor impacto.

**5. ¿Qué cuenta como corregido, y cuánto tiempo vigilamos antes de cerrar el registro?**
Compara las reglas de cierre usadas por operaciones, entrega y el responsable de producto. Discutid una ventana de repetición que se ajuste al servicio y qué hará el equipo cuando un elemento cerrado se reabra. Acordad una definición y escribidla en el registro de métricas.

**6. ¿Dónde podrían estar contándonos nuestros números de deuda una historia cómoda?**
Pide las formas en que cada número podría halagarse: deuda no registrada, elementos fáciles corregidos primero, elementos cerrados como no se corregirá. Mira la proporción de incidentes no vinculados y la lista de riesgos aceptados. Elegid una barrera de protección que añadir este trimestre y nombrad quién la comprobará.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega ven la deuda primero, normalmente mientras cambian código. Ganan con un registro fácil de ampliar y con una proporción protegida de capacidad, para que el trabajo de reparación no dependa de ganar una discusión en cada conversación de planificación. Deben registrar los atajos cuando los toman, etiquetar el trabajo causado por puntos débiles y evitar usar la deuda como etiqueta para cualquier trabajo que prefieran no hacer (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo, para los efectos de la deuda en el plazo de entrega).

### Equipos de servicio y operaciones

Los equipos de operaciones ven el interés: incidentes repetidos, pasos manuales, soluciones provisionales frágiles y la carga de guardia que sigue. Poseen los registros de errores conocidos y los documentos de soluciones provisionales, y tienen los datos de incidentes que ponen precio al interés. Deben vincular cada incidente con su error conocido, probar las soluciones provisionales y llevar a la conversación de planificación evidencia ordenada en lugar de una lista de quejas (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

### Liderazgo y gobernanza

Los líderes deciden cuánta capacidad recibe el trabajo de reparación, y los incentivos que fijan deciden si el libro se mantiene honesto. Deben pedir la distribución de antigüedad, las cifras de interés y la lista de riesgos aceptados, no una única puntuación de deuda. Leer el libro como una valoración de un equipo castiga el registro y empuja la deuda a la clandestinidad. Un foro de gobernanza debe tratar la aceptación de riesgos como una decisión con un responsable y una fecha de revisión.

### Clientes y usuarios

Los clientes sienten la deuda como fallos repetidos y soluciones provisionales que deben seguir. Donde una solución provisional afecte a los usuarios, publícala con una nota llana de cuándo se espera una corrección, y cumple la fecha o explica el cambio. Menos incidentes repetidos y un estado honesto sobre los problemas conocidos generan más confianza que una promesa de ausencia de defectos (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional opera un servicio de programación de citas de pacientes, con el apoyo de un equipo de producto y un grupo de operaciones. Todos los números de este ejemplo son ilustrativos.

El grupo de operaciones mantiene 23 errores conocidos en la herramienta ITSM. El equipo de producto mantiene una lista aparte de 41 elementos de deuda en su tablero. Una revisión trimestral descubre que 9 de los errores conocidos y 7 de los elementos de deuda describen las mismas cinco causas. El error conocido más antiguo tiene 14 meses, la antigüedad mediana de los errores conocidos es de 5 meses y el percentil 85 es de 11 meses. La cobertura de soluciones provisionales es del 61 por ciento. Los incidentes vinculados a errores conocidos abiertos son el 18 por ciento de los incidentes del trimestre, y el 22 por ciento de los incidentes no están vinculados, así que la proporción real podría ser mayor.

El equipo fusiona las dos listas en un libro de 55 elementos distintos. Para los diez elementos con más incidentes vinculados, estima un esfuerzo de reparación en bandas y un interés mensual en horas. Un elemento destaca: un trabajo nocturno de sincronización de citas falla en silencio aproximadamente cada quince días y necesita un reinicio manual por parte del personal de guardia. Su reparación se estima en dos semanas. Su interés, a partir de los incidentes vinculados y del trabajo etiquetado, es de unas 10 horas al mes, y cada fallo retrasa las listas de las clínicas por la mañana. El tiempo de recuperación de la inversión es de unos cuatro meses, más rápido que cualquier funcionalidad entonces en el plan.

La decisión, registrada en el registro de decisiones, es reservar el 15 por ciento de la capacidad del equipo de producto para el trabajo de reparación, ordenado por interés por unidad de esfuerzo, y corregir primero el trabajo de sincronización. El jefe de operaciones también acuerda vincular cada incidente con un error conocido donde exista uno y probar las cinco soluciones provisionales más usadas.

Dos trimestres después la antigüedad mediana de los errores conocidos es de 4 meses y el percentil 85 es de 9 meses. Los incidentes vinculados a errores conocidos abiertos bajan al 11 por ciento. La proporción no vinculada baja al 8 por ciento, lo que da al equipo más confianza en la cifra. Entonces el equipo detecta un riesgo de manipulación. La línea del cambio neto de la deuda muestra 12 elementos resueltos en un trimestre, pero 6 de ellos se cerraron como no se corregirá, y dos de esos eran los elementos de mayor interés más antiguos. Un revisor ajeno al equipo lee los registros y descubre que los cierres se hicieron para mejorar la cifra de antigüedad. Los elementos se reabren, el motivo de cierre pasa a ser un campo obligatorio con un aprobador con nombre, y los elementos de riesgo aceptado aparecen ahora en la misma página que la distribución de antigüedad.

## Perspectiva por sector

**Startup.** La deuda suele ser deliberada y a menudo acertada, porque la rapidez para llegar a un primer cliente es lo que más importa. Mantén una lista en el tablero con una etiqueta, registra los atajos cuando los tomes y fija una fecha de revisión para que "más tarde" signifique algo. Sube la proporción de reparación cuando el interés empiece a notarse en los incidentes.

**Pequeña empresa.** Un único administrador o un equipo pequeño suele cargar con operaciones y entrega, por lo que las dos listas son naturalmente una. Registra los errores conocidos y sus soluciones provisionales en un documento compartido y anota de qué proveedor o contrato depende cada elemento. Un defecto propiedad de un proveedor es un error conocido que no puedes corregir tú mismo, así que sigue la fecha comprometida por el proveedor y tu solución provisional.

**Gran empresa.** Muchos equipos, muchos servicios y muchos proveedores crean varias listas que compiten y varias definiciones de "hecho". Acordad una estructura de libro, una regla de cierre y un método de ordenación, y dejad que los equipos añadan campos locales con una correspondencia declarada.

**Gobierno y sector público.** Los sistemas heredados, los largos ciclos de contratación y los presupuestos fijos hacen que parte de la deuda sea costosa de saldar y que algunas decisiones de sustitución sean lentas. Registra las restricciones legales, de conservación y de auditoría que bloquean una corrección, ya que explican el aplazamiento. Muestra el libro como parte del informe de riesgos y planifica la reparación en el ciclo presupuestario en lugar de tratarla como un costo no planificado (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es dejar de pagar un interés que no puedes ver. Los incidentes repetidos, las soluciones provisionales manuales y los cambios lentos y arriesgados son los costos visibles, y normalmente se registran como problemas separados en presupuestos separados. Un libro fusionado los convierte en una sola comparación entre el costo de la reparación y el costo de cargar con la deuda.

El costo de la práctica tiene tres partes. La primera es la puesta en marcha: un registro, vínculos entre la herramienta ITSM y el gestor, y una convención de etiquetado. La segunda es el esfuerzo de operación: unos segundos por incidente para vincularlo, unos segundos por elemento de trabajo para etiquetarlo y una revisión mensual de una o dos horas por servicio. La tercera es la propia capacidad de reparación, que es el elemento mayor y es una inversión deliberada, no un gasto general.

El retorno viene de patrones que puedes medir tú mismo. Compara los incidentes vinculados a un error conocido antes y después de su corrección, las horas de trabajo etiquetado en cambios afectados antes y después, y las interrupciones de guardia evitadas. Añade el costo de la caída si tu organización ya lo estima. No tomes prestada una cifra del sector para el costo de la deuda: la literatura de investigación sobre el tema es real, pero las cifras dependen del contexto, y tus propios datos de incidentes y de tiempo son una mejor evidencia. La investigación de *Accelerate* vincula el desempeño de la entrega con el desempeño de la organización (véase el tema 2.8, Métricas DORA), aunque no da un precio para tu libro. Para un tratamiento más amplio del costo y del retorno, véase el tema 7.7, Retorno de la inversión y caso de negocio.

## Antipatrones y trampas

- **Dos listas que nunca se encuentran.** Operaciones y entrega argumentan por la misma capacidad con evidencias distintas. Fusiona las listas o vincula cada causa compartida.
- **Una única puntuación de deuda para la organización.** Oculta dónde está el costo e invita a clasificar equipos. Informa del libro por servicio, con antigüedad, interés y propiedad.
- **La gran reescritura como única reparación.** Las grandes limpiezas se atascan, y el libro se rellena mientras duran. Retira los elementos en pasos pequeños, ordenados por el tiempo de recuperación de la inversión.
- **Deuda cero como meta.** Perseguirla premia los cierres triviales y disuade del registro honesto. Apunta a un libro cuyos elementos de mayor interés más antiguos se estén moviendo.
- **Cerrar los errores conocidos en "fusionado".** La corrección no ha llegado a los usuarios, y el incidente vuelve. Cierra en la liberación y vigila luego la repetición durante una ventana indicada.
- **Esconder el aplazamiento en "no se corregirá".** La cifra de antigüedad mejora y el riesgo permanece. Cuenta el riesgo aceptado por separado, con un responsable y una fecha de revisión.
- **Tratar el análisis estático como la verdad.** Las puntuaciones reflejan la forma del código, no el costo. Úsalas para encontrar candidatos y confirma luego con los vínculos de incidentes y el historial de cambios.
- **Atribuir la deuda a los autores.** Enseña a la gente a esconder atajos y a evitar los componentes difíciles. Mantén cada medida a nivel de servicio y de equipo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Libro y definiciones | Los errores conocidos y la deuda viven en las cabezas o en notas dispersas | Operaciones y entrega mantienen cada uno una lista, con reglas distintas | Un libro con una definición escrita, un responsable y una regla de cierre para cada elemento | Antigüedad, riesgo aceptado y cambio neto revisados frente a las definiciones escritas | Definiciones revisadas con proveedores y clientes cuando dejan de informar decisiones |
| Medición del interés | Sin vínculo entre incidentes y causas | Algunos incidentes vinculados a errores conocidos a mano | Vínculos de incidentes obligatorios donde se conoce la causa; trabajo etiquetado a nivel de equipo | Interés y tiempo de recuperación de la inversión estimados para los elementos principales y con seguimiento de su tendencia | Interés vinculado a los resultados del servicio y compartido entre equipos y proveedores |
| Capacidad y priorización | La reparación ocurre en una crisis | Tiempo apartado de manera informal por algunos equipos | Una proporción acordada de la capacidad y un método de ordenación común | Proporción ajustada según la tendencia del libro y financiada como trabajo planificado | Capacidad de reparación coordinada entre plataformas compartidas y proveedores |
| Soluciones provisionales y cierre | Soluciones provisionales sin documentar o en manos de una sola persona | Documentadas para algunos errores, sin probar | Soluciones provisionales en la base de conocimiento, con una regla de cierre en la liberación | Uso, fallo y repetición tras el cierre de las soluciones provisionales medidos | Soluciones provisionales retiradas automáticamente a medida que se liberan las correcciones, con comentarios de los usuarios |

## Lista de verificación

- [ ] Los errores conocidos y los elementos de deuda están en un solo libro, o vinculados elemento por elemento.
- [ ] Cada elemento tiene un responsable, una banda de tamaño, un servicio y una fecha de revisión.
- [ ] Los atajos deliberados se registran cuando se toman, con un motivo.
- [ ] Los incidentes se vinculan a errores conocidos donde se conoce la causa, y se informa la proporción no vinculada.
- [ ] El trabajo causado por puntos débiles se etiqueta a nivel de equipo, y el etiquetado se audita por muestreo.
- [ ] Cada uno de los elementos principales tiene una banda de esfuerzo de reparación y una estimación de interés mensual.
- [ ] Una proporción de capacidad para el trabajo de reparación se acuerda, se informa y se revisa cada trimestre.
- [ ] Los errores conocidos se cierran en la liberación de la corrección, con una ventana de repetición declarada.
- [ ] Los cierres por riesgo aceptado se enumeran por separado, con un aprobador y una fecha de revisión.
- [ ] Las soluciones provisionales de los errores de mayor impacto se prueban según un calendario.
- [ ] La distribución de antigüedad y el reparto por servicio se muestran, con los totales.
- [ ] Ninguna medida de deuda se usa para comparar o clasificar a individuos.

## Prompts de IA

**Fusiona dos listas en un solo libro.**

```text
Tengo dos listas de reparaciones aplazadas. La lista A proviene de [operations
tool or source] y contiene [number] errores conocidos. La lista B proviene de
[delivery tracker or source] y contiene [number] elementos de deuda técnica.
Estas son las entradas: [paste entries with title, service, date registered, and
a one-line description]. Agrupa las entradas que parezcan describir la misma
causa, propón una única entrada de libro para cada grupo y señala las entradas
que necesitan que una persona confirme la coincidencia. No inventes causas,
servicios ni fechas. Enumera tus supuestos y las preguntas que debería
responder antes de fusionar.
```

**Estima bandas de esfuerzo y de interés mensual para los elementos principales.**

```text
Para el elemento del libro [item title] de [service], tengo esta evidencia:
incidentes vinculados [list with dates and durations], trabajo etiquetado [hours
or item counts] y una estimación de reparación del equipo de [estimate]. Ayúdame
a escribir bandas gruesas de esfuerzo y de interés mensual, un sencillo tiempo
de recuperación de la inversión y el nivel de confianza de cada cifra. Muestra
tu aritmética. No inventes costos, valores de referencia ni cifras del sector.
Si falta una cifra, pídemela. Enumera tus supuestos.
```

**Revisa el cierre y los riesgos de manipulación.**

```text
Estas son las definiciones y los datos del último trimestre de nuestro libro de
errores conocidos y deuda: [definitions of age, workaround coverage, debt net
change, and the closure rule] y [summary of items closed, with closure reasons].
Identifica las formas en que estas medidas podrían halagarse, la evidencia en
los datos que sugiere que ha ocurrido y una barrera de protección para cada una.
Trátalo como una revisión del instrumento, no de las personas. No acuses a nadie
ni inventes datos. Enumera tus supuestos.
```

**Prepara una conversación de priorización con el responsable de producto.**

```text
Necesito proponer cómo repartir la capacidad entre funcionalidades y trabajo de
reparación para [team] el próximo trimestre. El libro muestra [summary of
ledger: counts, age distribution, top items with effort and interest bands]. El
plan de funcionalidades contiene [summary of planned features and their expected
value, as supplied by the product owner]. Redacta una propuesta de una página
que compare opciones para la proporción de reparación, indique el costo del
retraso de los principales elementos de reparación y nombre las compensaciones.
No inventes estimaciones de valor ni proporciones de referencia. Enumera tus
supuestos y las decisiones que debe tomar el responsable de producto.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una métrica relacionada, como la repetición o el fallo de cambios, y la barrera de protección que debe acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica editada nombra sus relojes, su vector de manipulación y su barrera de protección.

## Puntos clave

- Los errores conocidos y la deuda técnica son dos vistas de un mismo libro de reparaciones aplazadas, así que mantenlos juntos o vinculados.
- Mide el interés que cada elemento cuesta cada mes, en incidentes, soluciones provisionales y cambio ralentizado, y ordena la reparación por el tiempo de recuperación de la inversión.
- Haz de cada aplazamiento una decisión con un responsable, un motivo y una fecha de revisión, e informa el riesgo aceptado por separado.
- Reserva una proporción acordada de la capacidad para el trabajo de reparación e infórmala junto al trabajo planificado.
- Cierra un error conocido en la liberación de la corrección y vigila luego la repetición antes de fiarte del resultado.
- Mantén cada medida a nivel de servicio y de equipo, y usa barreras de protección para que un número mejor signifique un sistema mejor.

## Referencias y lecturas complementarias

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
