# Métricas de versiones y despliegues

**Desplegar código y liberarlo a los usuarios son eventos distintos con riesgos distintos, así que mídelos por separado, cuenta cada uno según una regla escrita y lee juntos la frecuencia, el plazo de entrega, el tamaño de los lotes y la higiene de los interruptores en lugar de celebrar un recuento aislado.**

## Resumen y motivación

Muchos equipos usan las palabras "despliegue" y "versión" como si significaran lo mismo. No es así, y la diferencia es la idea más útil de este tema. Un **despliegue** es el acto de poner una versión del software en un entorno, normalmente producción, tal como describe el artículo sobre el [despliegue de software](https://en.wikipedia.org/wiki/Software_deployment). Una **versión liberada** (release) es el momento en que un cambio queda disponible para los usuarios previstos, una decisión que la [gestión de versiones](https://en.wikipedia.org/wiki/Release_management) existe para gobernar. Cuando ambos ocurren juntos, un despliegue es una versión liberada y un solo número describe los dos. Cuando se separan, el equipo puede desplegar a menudo y en silencio, y liberar de forma deliberada.

La separación importa porque los dos eventos conllevan riesgos distintos. Un despliegue conlleva riesgo técnico: la compilación nueva podría no arrancar, podría romper una dependencia o podría necesitar una reversión. Una versión liberada conlleva riesgo de negocio y de usuario: el cambio podría confundir a los clientes o podría tener que aterrizar en una fecha acordada. Los equipos que acoplan ambos eventos aceptan los dos riesgos a la vez, lo que los empuja hacia lotes grandes de cambio liberados con poca frecuencia. Los equipos que los separan asumen el riesgo técnico en pasos pequeños y el riesgo de usuario en pasos controlados.

La herramienta principal para la separación es el [interruptor de funcionalidad](https://en.wikipedia.org/wiki/Feature_toggle) (feature toggle o feature flag): un conmutador en la configuración que activa o desactiva un comportamiento sin un nuevo despliegue. Las técnicas relacionadas incluyen la [liberación canaria](https://en.wikipedia.org/wiki/Canary_release), que expone primero un cambio a una pequeña proporción del tráfico, y el [despliegue azul-verde](https://en.wikipedia.org/wiki/Blue-green_deployment), que mantiene dos entornos de producción y conmuta el tráfico entre ellos. Todas permiten responder a dos preguntas distintas: ¿se ejecuta con seguridad la versión nueva?, y ¿quién debe ver el comportamiento nuevo y cuándo?

Los términos siguientes se repiten en este tema.

- Una **versión liberada** es una versión o un conjunto de cambios puesto a disposición de los usuarios.
- Un **despliegue** es el traslado de una versión a un entorno. ITIL 4 nombra una práctica para ello, la gestión de despliegues.
- Un **lanzamiento oscuro** es un despliegue cuyo comportamiento nuevo está desactivado para los usuarios.
- Un **despliegue progresivo** es una liberación que amplía la exposición por etapas, por ejemplo 1 por ciento, 10 por ciento y luego todos.
- Un **lote** es el conjunto de cambios que se entregan juntos en un despliegue o una versión. El tamaño del lote es el número de cambios, o la cantidad de cambio, que contiene.
- El **plazo de entrega de la versión** es el tiempo transcurrido desde un punto de inicio indicado hasta que el cambio está disponible para sus usuarios. Tu equipo escribe el punto de inicio, porque hay varios de uso común.
- Un **percentil** es un valor por debajo del cual cae una proporción indicada de las observaciones. El percentil 85 del plazo de entrega de la versión es el número que el 85 por ciento de las versiones mejora.

Las visiones ágil y de ITIL se encuentran aquí. Un equipo ágil que sigue la [entrega continua](https://en.wikipedia.org/wiki/Continuous_delivery) quiere que cada cambio se pueda liberar en cualquier momento, y trata la liberación como una decisión de negocio tomada aparte del acto técnico. Un profesional de ITIL ve la gestión de versiones, la gestión de despliegues y la habilitación de cambios como prácticas que planifican, programan y controlan el paso del cambio al uso en vivo. Las dos visiones chocan cuando la gestión de versiones se entiende como un calendario de grandes eventos. Encajan cuando la práctica se entiende como la capacidad de liberar de forma segura bajo demanda, con los controles incorporados en la canalización y en los interruptores.

Este tema no repite las definiciones de las cinco medidas de desempeño de la entrega del programa de investigación DORA (véase el tema 2.8, Métricas DORA), ni las medidas de fallo y retrabajo tras una versión (véase el tema 4.4, Fallos de cambio y retrabajo), ni el volumen y la aprobación de los cambios (véase el tema 4.3, Métricas de habilitación de cambios). Añade lo que esos temas dejan abierto: cómo contar las versiones por separado de los despliegues, cuánto espera un cambio terminado antes de que lo reciban los usuarios, qué tamaño tienen los lotes y si los interruptores que hacen posible la separación se mantienen ordenados.

Por último, los recuentos de versiones y despliegues son números tentadores para un panel de la dirección, y la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica de inmediato (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Un recuento de despliegues sube cuando los cambios se dividen en piezas triviales. Un recuento de versiones sube cuando se cambia una etiqueta. Por eso cada métrica siguiente viene con la forma en que se tuerce y la barrera de protección que detecta la torsión.

## Principios clave

- **Despliegue y versión son dos eventos.** Mídelos por separado donde la arquitectura lo permita, y di con claridad dónde siguen siendo un solo evento.
- **Cuenta según una regla escrita.** Un despliegue cuenta cuando un entorno con nombre recibió una versión con nombre con un resultado exitoso. Una versión liberada cuenta cuando los usuarios previstos pueden acceder al cambio. Escribe la regla una vez y aplícala de la misma manera siempre.
- **Describe un servicio, no una persona.** Los recuentos pertenecen a un servicio y a su equipo, nunca a un individuo.
- **Mide la espera, no solo el trabajo.** El plazo de entrega de la versión suele contener días de espera por una ventana, una aprobación o una decisión. La espera es donde suele vivir la mejora.
- **Los lotes pequeños son la palanca.** La frecuencia y el tamaño son dos vistas de lo mismo. Empareja cada recuento con una medida de cuánto cambio llevó cada versión.
- **Los interruptores son inventario con un costo de mantenimiento.** Un interruptor que vive demasiado tiempo se convierte en código muerto y en una fuente de fallos, así que sigue la antigüedad de los interruptores con tanto cuidado como su cobertura.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frecuencia de despliegue | Con qué frecuencia recibe un servicio un despliegue exitoso en producción | Recuento de despliegues exitosos en producción del servicio en el periodo / días del periodo; se excluyen los despliegues en entornos de prueba o de preproducción, los despliegues fallidos o revertidos y los redespliegues de una compilación sin cambios; los despliegues solo de configuración se cuentan en una serie aparte | Despliegues por día o por semana | Registro de eventos de la canalización de despliegue | Gestión de despliegues | Entrega continua; entregar un incremento que funciona | Semanal |
| Frecuencia de versiones | Con qué frecuencia reciben los usuarios un cambio al que pueden acceder | Recuento de eventos de liberación en el periodo / días del periodo; un evento de liberación es el momento en que un cambio, o un grupo de cambios, queda al alcance de sus usuarios previstos (un interruptor activado para todos los usuarios, la etapa final de un despliegue progresivo o el despliegue de un cambio sin interruptor); se excluyen un lanzamiento oscuro, un despliegue detenido en una etapa parcial y un cambio de interruptor que solo afecta a usuarios internos | Versiones por semana o por mes | Registro de auditoría del servicio de interruptores unido al registro de la canalización y al calendario de versiones | Gestión de versiones | Liberar al final de cada incremento; un incremento potencialmente entregable puesto a disposición | Semanal, revisado mensualmente |
| Plazo de entrega de la versión | Cuánto espera un cambio terminado antes de que los usuarios puedan acceder a él | El reloj arranca cuando el cambio se fusiona en la línea principal y ha pasado sus comprobaciones automatizadas (o, si tu equipo lo escribe así, en el primer commit) y se detiene cuando el cambio se libera según se definió arriba; informa la mediana y el percentil 85 de los cambios liberados en el periodo; los cambios aún no liberados se excluyen y se informan como una antigüedad de trabajo en espera | Horas o días | Control de versiones unido a la canalización y al registro de auditoría de interruptores | Gestión de versiones; gestión de despliegues | Plazo de entrega de hecho a entregado; plazo de entrega al cliente | Semanal, revisado mensualmente |
| Brecha entre despliegue y versión | Cuánto tiempo permanece oculto el código desplegado antes de que los usuarios puedan acceder a él | El reloj arranca cuando el cambio se despliega en producción y se detiene cuando se libera; informa la mediana y el percentil 85; los cambios liberados en el momento del despliegue tienen una brecha de cero y se incluyen; los cambios desplegados y luego retirados sin liberar se excluyen y se cuentan por separado | Horas o días | Registro de la canalización unido al registro de auditoría de interruptores | Gestión de versiones; gestión de despliegues | Lanzamiento oscuro; desacoplar el despliegue de la versión | Mensual |
| Tamaño del lote de la versión | Cuánto cambio se entrega junto en una versión | Mediana y percentil 85 del número de cambios fusionados (solicitudes de incorporación o elementos de trabajo) por versión en el periodo; la unidad de cambio está escrita; cada cambio se cuenta una vez, en la versión que lo puso al alcance | Cambios por versión | Control de versiones y gestor de incidencias unidos al evento de liberación | Gestión de versiones; habilitación de cambios | Lotes pequeños; porciones verticales de trabajo | Por versión, revisado mensualmente |
| Cobertura de interruptores de funcionalidad | Proporción de cambios visibles para el usuario que se liberaron detrás de un interruptor | Cambios visibles para el usuario liberados en el periodo que tenían un interruptor en el momento de la liberación / todos los cambios visibles para el usuario liberados en el periodo; se excluyen los cambios de infraestructura y las correcciones de defectos que no pueden ponerse detrás de un interruptor, y la regla de "visible para el usuario" está escrita | Porcentaje | Servicio de interruptores unido al gestor de incidencias y al registro de versiones | Gestión de versiones; habilitación de cambios | Entrega progresiva; desarrollo guiado por experimentos | Mensual |
| Recuento de interruptores obsoletos | Cuántos interruptores han sobrevivido a su propósito | Número de interruptores de versión aún presentes en el código o la configuración más de un número indicado de días después de que el cambio que protegen llegara a todos los usuarios; los interruptores operativos permanentes (interruptores de apagado, de derechos) se etiquetan y se excluyen; el límite de edad está escrito por tipo de interruptor | Interruptores, y la antigüedad mediana de los interruptores de versión en días | Inventario del servicio de interruptores unido a la búsqueda en el código | Gestión de versiones; gestión del conocimiento | Limpieza de deuda técnica; el criterio de terminado de retirar un interruptor | Mensual |

## Recomendaciones

### Escribe qué cuenta como despliegue y como versión

**Define ambos eventos antes de contar ninguno.** Un despliegue cuenta cuando una versión con nombre llegó a un entorno con nombre y la canalización informó de éxito. Una versión liberada cuenta cuando los usuarios previstos pueden acceder al cambio, que para un cambio con interruptor es el momento en que el interruptor se activa para ellos y no el momento en que llegó el código. Indica las exclusiones en la misma frase: entornos de prueba, reversiones, redespliegues de una compilación sin cambios y exposición solo interna.

### Informa las dos series lado a lado

**Muestra la frecuencia de despliegue y la frecuencia de versiones en un mismo gráfico.** Donde las líneas coinciden, el servicio aún acopla los dos eventos. Donde los despliegues van muy por delante de las versiones, el equipo ha empezado a desacoplarlos, y la distancia entre las líneas es una señal de la capacidad. Un único número combinado oculta esto, y deja que un equipo reclame una frecuencia alta que los usuarios nunca ven.

### Mide el plazo de entrega de la versión desde un inicio declarado hasta el usuario

**Elige el inicio del reloj una vez y mantenlo.** Arrancar en el primer commit muestra el recorrido completo, y arrancar en la fusión con la línea principal aísla la canalización de versiones y sus aprobaciones. Cualquiera de los dos es aceptable si se indica en el gráfico y nunca se cambia en silencio. Termina el reloj en la versión liberada, no en el despliegue; de lo contrario la métrica deja de medir lo que el usuario esperó.

### Sigue el tamaño del lote junto a la frecuencia

**Empareja cada frecuencia con un tamaño.** Un equipo puede subir su recuento de despliegues cortando un cambio en porciones que no son útiles por sí solas, y el recuento sube mientras el flujo real se mantiene igual. La mediana y el percentil 85 del tamaño del lote muestran si las porciones son reales. Los lotes pequeños son más fáciles de revisar, probar y revertir, y ese es el beneficio del que la frecuencia es un indicador indirecto.

### Trata las etapas del despliegue progresivo como eventos

**Registra cada etapa de un despliegue progresivo con una marca de tiempo.** Un despliegue que pasa del 1 por ciento al 10 por ciento y luego a todos da tres marcas de tiempo, y cada una es una oportunidad de detenerse. Captura la etapa, la proporción de exposición y el resultado de la comprobación de salud que permitió la siguiente etapa. Esto permite separar un despliegue pausado por una señal real de uno estancado.

### Mantén un inventario de interruptores con un responsable y una fecha de caducidad

**Da a cada interruptor de versión un responsable, un propósito y una fecha prevista de retirada en el momento de su creación.** El servicio de interruptores o un registro sencillo pueden guardarlos. Revisa el registro cada mes y calcula el recuento de interruptores obsoletos. Un interruptor que sigue activado tras el despliegue completo es código muerto que aún bifurca. Trata la retirada como parte de terminado del cambio.

### Etiqueta los interruptores por tipo

**Separa los interruptores temporales de versión de los interruptores operativos permanentes.** Los interruptores de apagado y de derechos son permanentes por diseño, mientras que los de versión deben retirarse tras el despliegue completo. Mezclar los tipos vuelve ruidoso el recuento de obsoletos e invita a los equipos a eliminar un conmutador que alguien necesita durante un incidente. Exige el tipo al crear el interruptor.

### Vincula las versiones con los registros de incidentes y de cambios

**Registra el identificador de la versión en el incidente y en el cambio.** Un evento de liberación debe poder rastrearse desde la herramienta de incidentes, para que la causa de un incidente pueda vincularse con el cambio que se liberó, se hubiera desplegado la semana pasada o activado esta mañana. Sin el vínculo, las medidas de inestabilidad atribuyen los fallos a la fecha del despliegue y pasan por alto los fallos causados por un cambio de interruptor. Los cambios de interruptor en producción son cambios en el sentido de ITIL y deben ser visibles para la habilitación de cambios, aunque estén preautorizados como cambios estándar (véase el tema 4.3, Métricas de habilitación de cambios).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Frecuencia de despliegue | Dividir un cambio en despliegues triviales; redesplegar compilaciones sin cambios; contar despliegues en preproducción; contar los despliegues solo de configuración con la serie principal | Tamaño del lote de la versión y proporción de despliegues con un cambio visible para el usuario; la serie de configuración aparte; tasa de fallos de cambio a su lado |
| Frecuencia de versiones | Reetiquetar despliegues como versiones; contar como versión un interruptor activado para el personal interno; liberar cambios vacíos o cosméticos para cumplir una meta; contar cada etapa de un despliegue progresivo como una versión aparte | Una definición escrita de versión; muestra trimestral de versiones contrastada con los cambios visibles para el usuario; tamaño del lote y recuentos de cambios de cara al cliente |
| Plazo de entrega de la versión | Arrancar el reloj más tarde, por ejemplo en la aprobación en lugar de en la fusión; excluir como "bloqueados" los cambios que esperaron mucho; liberar primero un cambio trivial para bajar la mediana; terminar el reloj en el despliegue | El percentil 85 y la antigüedad del cambio en espera más antiguo; un inicio fijo escrito; una revisión trimestral del 10 por ciento más lento de los cambios |
| Brecha entre despliegue y versión | Activar un interruptor para un usuario simbólico para registrar pronto la liberación; dejar fuera de la muestra el código oscuro de larga duración llamándolo "no es una versión"; eliminar código oscuro para evitar una brecha larga | Proporción de exposición en la liberación (un umbral para lo que cuenta como liberado); recuento de cambios desplegados y retirados sin liberar; recuento de interruptores obsoletos |
| Tamaño del lote de la versión | Dividir el trabajo en solicitudes de incorporación artificiales; fusionar cambios no relacionados en uno para bajar el número de versiones; contar solo el cambio grande de un paquete | Tamaño mediano del cambio en líneas o archivos como medida de contexto; revisión de una muestra de versiones en busca de agrupaciones no relacionadas; frecuencia junto al tamaño |
| Cobertura de interruptores de funcionalidad | Añadir interruptores a cambios triviales para subir la tasa; poner interruptores solo a los cambios seguros y entregar sin ellos los arriesgados; crear un interruptor sin forma de apagarlo en la práctica | Resultados de pruebas de interruptor apagado para una muestra de interruptores; el recuento de interruptores obsoletos; causas de incidentes que no tenían interruptor |
| Recuento de interruptores obsoletos | Reetiquetar interruptores de versión como permanentes para salir del recuento de obsoletos; eliminar el registro del interruptor dejándolo en el código; ampliar las fechas de caducidad sin revisión | Una búsqueda periódica en el código frente al registro; revisión de cada cambio de tipo de interruptor; la antigüedad del interruptor de versión más antiguo |

Una lectura sana muestra los despliegues por delante de las versiones en los servicios que usan interruptores, con una brecha modesta, un tamaño de lote pequeño y estable y un percentil 85 del plazo de entrega no muy por encima de la mediana. La cobertura de interruptores es alta para los cambios arriesgados, y el recuento de interruptores obsoletos es bajo o decreciente. Una lectura que parezca demasiado buena, como una frecuencia alta junto a tamaños de lote crecientes o un recuento cero de obsoletos con un recuento creciente de interruptores permanentes, merece una auditoría por muestreo antes de celebrar nada.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Desplegar de forma continua y liberar mediante un interruptor | Poco riesgo técnico por despliegue; el momento de la liberación pasa a ser una elección de negocio; apagado rápido | Necesita disciplina y herramientas para los interruptores; añade rutas de código que deben probarse y retirarse |
| Acoplar despliegue y versión | Sencillo de explicar; un solo evento que contar; sin deuda de interruptores | Cada versión conlleva a la vez el riesgo técnico y el de usuario, lo que fomenta lotes grandes liberados con poca frecuencia |
| Tren de versiones programado | Predecible para el soporte y los reguladores | Los cambios esperan al siguiente tren; el recuento refleja el calendario, no la capacidad |
| Despliegue progresivo por porcentaje | Limita el efecto de una mala versión; produce evidencia en cada etapa | Necesita buena telemetría y una comprobación de salud; pueden ejecutarse versiones mezcladas a la vez durante un tiempo |
| Contar tanto despliegues como versiones | Muestra el desacoplamiento y la espera | Requiere unir un registro de auditoría de interruptores o registros de versiones con la canalización |

Un servicio que aún no puede desacoplar el despliegue de la versión, por ejemplo una aplicación móvil distribuida mediante la revisión de una tienda de aplicaciones, debe medir lo que pueda: frecuencia de versiones, plazo de entrega de la versión y tamaño del lote, con el tiempo de revisión de la tienda informado como una espera aparte.

## Preguntas para conversar con tu equipo

**1. ¿Usamos las palabras "despliegue" y "versión" para el mismo evento, y coincide eso con lo que ocurre?**
Pide a tres personas que describan el último cambio que salió en vivo y anota cuándo llegó el código y cuándo pudieron usarlo por primera vez los usuarios. El facilitador debe ayudar al grupo a acordar una frase para cada término y a decidir cuál de los dos eventos mide cada número existente del panel.

**2. ¿Cuál es el mayor tiempo que ha esperado un cambio terminado para su liberación, y por qué?**
Extrae el cambio fusionado más antiguo al que los usuarios aún no pueden acceder. Rastrea su camino desde la fusión hasta hoy y anota cada espera del recorrido.

**3. Si nuestro recuento de despliegues se duplicara, ¿qué comprobaríamos antes de llamarlo una buena noticia?**
Invita al grupo a nombrar las formas en que el recuento podría subir sin que llegue más valor a los usuarios. Mirad el tamaño de los lotes, la proporción de despliegues con un cambio visible para el usuario y las cifras de fallos y retrabajo. El facilitador debe anotar cuáles de estas comprobaciones ya existen en el panel y cuáles hay que añadir antes de que nadie fije una meta.

**4. ¿Cuáles de nuestros interruptores nos daría miedo eliminar, y qué nos dice eso?**
Recorre el registro de interruptores y elige los tres más antiguos. Pregunta quién posee cada uno, qué protege y qué ocurriría si se retirara. El miedo a eliminar suele significar una prueba que falta, un responsable que falta o un registro del propósito que falta. Acordad una fecha de retirada para al menos uno y la comprobación que haría segura la retirada.

**5. ¿Quién decide cuándo se libera un cambio, y tiene la información que necesita?**
Donde la liberación es una elección de negocio, quien la toma necesita ver el estado del despliegue, las señales de salud y la preparación del soporte. Pregunta dónde viven hoy esos hechos y con qué rapidez puede quien decide revertir una liberación.

**6. ¿Qué versión del último trimestre fue peor, y qué medida nos habría avisado?**
Elige una versión que causó problemas y lee juntos la cronología. Pregunta si el lote era grande, si la brecha era larga, si el despliegue tenía etapas y si un interruptor habría podido limitar el daño. Elige una medida que añadir o un umbral que endurecer como resultado.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega usan estas medidas para ver si su canalización y sus interruptores les dan realmente control sobre la exposición. Las vistas más útiles son la brecha, el tamaño del lote y la antigüedad del cambio en espera más antiguo, porque cada una apunta a algo que el equipo puede cambiar.

### Equipos de servicio y operaciones

A los equipos de operaciones y de soporte les importa qué cambia en producción y cuándo. Los eventos de liberación y los cambios de interruptores deben ser visibles para ellos, idealmente con un identificador de versión en cada incidente. Los despliegues por etapas y el apagado rápido reducen el número de incidentes que necesitan un restablecimiento completo, y las medidas ayudan a los equipos de operaciones a pedir los controles que vuelven más tranquilo su trabajo.

### Liderazgo y gobernanza

Los líderes deben pedir tendencias y dispersión por servicio, y la respuesta a una pregunta sencilla: cuánto tarda un cambio terminado en llegar a los usuarios, y con qué seguridad. Una meta de frecuencia de despliegue entre equipos invita a la división y al reetiquetado, así que prefiere metas sobre resultados como las distribuciones del plazo de entrega y la eliminación de esperas conocidas. La gobernanza puede reducir la carga de las aprobaciones de versiones preautorizando los cambios de bajo riesgo tras un interruptor, siempre que el rastro de auditoría de los interruptores esté completo (véase el tema 4.3, Métricas de habilitación de cambios).

### Clientes y usuarios

Los clientes ven versiones, no despliegues. Les importa que las correcciones lleguen pronto, que el comportamiento nuevo no los sorprenda y que un mal cambio pueda revertirse rápido. Un equipo que separa los dos eventos puede dar a los clientes acceso temprano a una funcionalidad, anunciar una fecha que puede cumplir y revertir una funcionalidad sin perder el resto. Empareja estas medidas con otras de cara al cliente (véanse el tema 5.3, Métricas de disponibilidad, y el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea regional opera un servicio de búsqueda de productos propiedad de un equipo de producto, con el apoyo de un equipo de plataforma y del centro de servicios. El servicio se despliega en producción mediante una canalización y tiene un servicio de interruptores que se introdujo hace seis meses. Todos los números siguientes son ilustrativos.

Durante el último trimestre el equipo hizo 52 despliegues en producción, unos cuatro por semana. La frecuencia de versiones, contada como los momentos en que un cambio quedó al alcance de todos los usuarios previstos, fue de 11 en el mismo trimestre, alrededor de una por semana. La mediana del plazo de entrega de la versión, desde la fusión hasta la liberación, fue de 9 días, con un percentil 85 de 21 días. La mediana de la brecha entre despliegue y versión fue de 6 días. La mediana del tamaño del lote de la versión fue de 3 cambios y el percentil 85 fue de 14. La cobertura de interruptores de los cambios visibles para el usuario fue del 58 por ciento, y 17 interruptores de versión llevaban más de 30 días desde el despliegue completo.

El riesgo de manipulación ya es visible. Algunos despliegues eran solo de configuración, y la canalización contaba cada uno como un despliegue, así que el panel muestra ahora una serie de configuración aparte y la revisión mensual muestrea 10 despliegues en busca de un cambio visible para el usuario. Un gerente regional ve el recuento de despliegues y pide al equipo que lo suba para igualar la cifra de otro equipo. El responsable del equipo se resiste a la meta y lleva en su lugar el conjunto completo de números a la revisión mensual. La revisión descubre que la brecha es larga porque las versiones esperan a una reunión semanal de marketing y soporte, que cuatro de los 17 interruptores obsoletos protegen rutas de código que nadie ha probado, y que el percentil 85 del tamaño del lote proviene de unas pocas versiones que agruparon cambios no relacionados antes de una congelación por festivos.

La decisión, registrada en el registro de decisiones, tiene cuatro partes. Soporte y marketing participarán en una reunión más corta, dos veces por semana, para que la decisión de liberar ya no espere al hueco semanal. Cada interruptor de versión recibe un responsable y una fecha de retirada, y los cuatro interruptores obsoletos sin probar se retiran en las dos semanas siguientes. Las versiones que agrupen cambios no relacionados necesitan un motivo declarado en el registro de la versión. Y el equipo rechaza la meta común de despliegues, ofreciendo en su lugar una vista compartida de la distribución del plazo de entrega de la versión de cada servicio y de la higiene de sus interruptores. El gestor de cambios acepta tratar los cambios con interruptor que pasan las comprobaciones de la canalización como cambios estándar, con una revisión el trimestre siguiente. En el trimestre siguiente (ilustrativo), la mediana del plazo de entrega de la versión baja a 5 días, el recuento de interruptores obsoletos baja a 6 y la tasa de fallos de cambio se mantiene estable, así que el experimento continúa.

## Perspectiva por sector

**Startup.** Una startup suele tener un único servicio y una biblioteca de interruptores en el código, así que el despliegue y la versión pueden separarse con poco costo. Mantén un registro sencillo de interruptores con fechas de caducidad y espera a tener suficiente volumen antes de confiar en los percentiles.

**Pequeña empresa.** Una pequeña empresa puede ejecutar software empaquetado o comprado donde el proveedor controla la versión. Las medidas útiles son el tiempo entre la versión del proveedor y la adopción por la empresa, y el lote de cambios que llegan juntos en una versión mayor. Registra las fechas de versión del proveedor y tus propias fechas de despliegue para que la espera intermedia sea visible.

**Gran empresa.** Una gran empresa afronta muchos servicios con estilos de versiones distintos, un proceso central de cambios y entornos compartidos. El trabajo principal es acordar las definiciones de despliegue y versión entre equipos y proveedores, y mantener una consolidación que respete las diferencias. Usa la dispersión y las tendencias para la gobernanza y trata la plataforma de interruptores como un servicio compartido con un responsable.

**Gobierno y sector público.** Las versiones suelen estar atadas a fechas fijas, a la legislación, a ciclos de contratación o a puertas de garantía, así que la frecuencia de versiones puede ser baja por buenas razones. La frecuencia de despliegue y la brecha entre despliegue y versión pueden aun así mostrar cuánto riesgo se ha asumido pronto y cuánto espera a la fecha. Informa por separado la espera de las puertas externas y el tiempo de canalización propio del equipo.

## Caso de negocio: motivaciones, ROI y TCO

La motivación de estas medidas es reducir el riesgo y el retraso entre terminar un cambio y entregar su valor. Los lotes grandes liberados con poca frecuencia llevan más cambio por evento, de modo que un fallo es más difícil de diagnosticar y de revertir. Separar el despliegue de la versión da al equipo una forma de asumir el riesgo técnico pronto y en pequeñas cantidades, y de asumir el riesgo de usuario de forma deliberada. Las medidas muestran si la separación es real y dónde espera el cambio.

Los costos son moderados. Recoger eventos de despliegue y de liberación exige unir el registro de la canalización y el registro de auditoría de interruptores con el control de versiones y el gestor de incidencias, que es una integración única seguida de un mantenimiento ocasional (véase el tema 1.5, Fuentes de datos e instrumentación). La propia práctica de interruptores tiene costos de operación: la plataforma o biblioteca, el registro, la prueba de ambas rutas de un cambio con interruptor y la limpieza de los interruptores caducados. El principal costo oculto es la deuda de interruptores, que el recuento de interruptores obsoletos mantiene visible.

El retorno sigue un patrón que la mayoría de los equipos puede observar en sus propios datos. Un plazo de entrega de la versión más corto significa un ciclo de retroalimentación más rápido sobre si un cambio ayuda a los usuarios. Lotes más pequeños significan un diagnóstico y una reversión más fáciles. Una brecha más corta entre despliegue y versión significa menos tiempo que el trabajo terminado pasa sin materializarse. No inventes una cifra para el valor. Usa los propios ejemplos del equipo de cambios que pasaron semanas en la oscuridad y la tendencia de sus propias medidas.

## Antipatrones y trampas

- **Fijar una meta de frecuencia de despliegue para todos los equipos.** Invita a la división y al reetiquetado. Fija metas de resultado, como una distribución más estrecha del plazo de entrega, y deja que la frecuencia las siga.
- **Tratar un tren de versiones como prueba de capacidad.** Un calendario fijo da un recuento estable y oculta la antigüedad del trabajo en espera. Sigue la antigüedad del cambio fusionado más antiguo al que los usuarios no pueden acceder.
- **Contar los cambios de configuración como despliegues en la serie principal.** Infla el número. Mantén una serie aparte y muéstrala junto a la principal.
- **No retirar nunca los interruptores.** El código acumula ramas muertas y combinaciones sin probar. Da a cada interruptor de versión un responsable y una fecha de retirada, y trata la retirada como parte de terminado.
- **Cambiar interruptores en producción sin un registro.** Un cambio de interruptor es un cambio en el comportamiento de producción. Envíalo al registro de auditoría y hazlo visible para la habilitación de cambios.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | "Despliegue" y "versión" se usan indistintamente; cada persona cuenta de forma distinta | Unos pocos equipos escriben sus propias definiciones | Una definición escrita de despliegue y versión, con relojes y exclusiones, en el registro de métricas | Cambios de definición registrados y marcados en los gráficos; muestras comprobadas cada trimestre | Definiciones revisadas conjuntamente con proveedores y gobernanza cuando dejan de informar decisiones |
| Separación de despliegue y versión | Cada despliegue es una versión | Algunos equipos usan interruptores o despliegues por etapas para los cambios arriesgados | Los interruptores y los despliegues por etapas son una opción estándar, con eventos de liberación registrados | Brecha, tamaño del lote y etapas del despliegue con seguimiento de su tendencia y revisados | El momento de la liberación se coordina entre equipos y proveedores para servicios relacionados |
| Captura de datos | Recuentos reunidos a mano a partir de tickets y chat | Datos de la canalización para algunos servicios; versiones registradas a mano | Despliegues, versiones y cambios de interruptores capturados automáticamente para la mayoría de los servicios | Calidad de los datos (tasa de vínculos, auditoría de muestras) medida y con seguimiento de su tendencia | Eventos compartidos entre equipos y proveedores mediante interfaces acordadas |
| Higiene de los interruptores | Sin inventario | Lista informal en algunos equipos | Registro con responsable, tipo y fecha de caducidad para cada interruptor de versión | Recuento de interruptores obsoletos con seguimiento de su tendencia; la retirada forma parte de terminado y se comprueba | Plataforma de interruptores gestionada como un servicio compartido con recordatorios de caducidad automatizados |
| Uso de los números | Informados hacia arriba como un único recuento | Los equipos miran de vez en cuando sus propios gráficos | Revisados cada mes por el equipo propietario junto a las cifras de fallos y retrabajo | Las tendencias alimentan una mejora financiada con una barrera de protección | La dispersión y las tendencias informan la inversión en plataforma y la política de cambios en toda la organización |

## Lista de verificación

- [ ] "Despliegue" y "versión" están definidos por escrito, con los eventos de reloj y las exclusiones de cada uno.
- [ ] Los despliegues en producción se capturan automáticamente de la canalización, con los entornos de prueba excluidos.
- [ ] Los eventos de liberación se capturan del registro de auditoría de interruptores, de las etapas del despliegue progresivo o de los registros de versiones.
- [ ] El plazo de entrega de la versión usa un inicio de reloj declarado e informa la mediana y el percentil 85.
- [ ] La brecha entre despliegue y versión y el tamaño del lote de la versión se informan junto a la frecuencia.
- [ ] Los despliegues solo de configuración aparecen en una serie aparte.
- [ ] Cada interruptor de versión tiene en un registro un responsable, un tipo y una fecha de caducidad.
- [ ] Los interruptores obsoletos se revisan cada mes y su retirada forma parte de terminado.
- [ ] Los identificadores de versión aparecen en los registros de incidentes y de cambios.
- [ ] Una muestra de despliegues y de versiones se audita cada trimestre frente a las definiciones.
- [ ] Un experimento de mejora, ligado a la espera más larga, está en marcha con una fecha de revisión.

## Prompts de IA

**Redacta definiciones de despliegue y de versión para un servicio.**

```text
Estoy definiendo métricas de versiones y despliegues para [service name].
Nuestras herramientas son [version control host, CI/CD system, flag service,
issue tracker, ITSM tool]. Nuestro estilo de versiones es [continuous, weekly
train, monthly, store-reviewed, or other]. Para la frecuencia de despliegue, la
frecuencia de versiones, el plazo de entrega de la versión, la brecha entre
despliegue y versión, el tamaño del lote de la versión, la cobertura de
interruptores de funcionalidad y el recuento de interruptores obsoletos,
redacta una definición que indique dónde arranca y se detiene el reloj, qué se
cuenta y qué se excluye, la fuente de datos y una ambigüedad por resolver. No
inventes valores de referencia ni afirmes que nuestra práctica coincide con
alguna banda de desempeño publicada. Enumera tus supuestos y las preguntas que
debería responder para terminar las definiciones.
```

**Comprueba un conjunto de métricas de versiones en busca de riesgos de manipulación.**

```text
Así calculamos e informamos nuestras métricas de versiones y despliegues:
[description of each metric, its data source, and how it is reported]. La
audiencia es [team, leadership, or governance body] y las metas, si las hay,
son [targets or none]. Para cada métrica, enumera formas plausibles de inflar,
ocultar o distorsionar el número sin una mejora real, y sugiere una métrica o
práctica de barrera de protección emparejada que la detectaría. No inventes
estadísticas. Enumera tus supuestos y la información que necesitarías para ser
más preciso.
```

**Analiza una exportación de despliegues, versiones e interruptores.**

```text
Voy a pegar una pequeña exportación con estos campos: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. Cubre [number] despliegues y [number]
interruptores de [service name] entre [start date] y [end date]. Calcula la
mediana y el percentil 85 del plazo de entrega de la versión y de la brecha
entre despliegue y versión, la distribución del tamaño del lote y la lista de
interruptores con más de [age limit] días desde el despliegue completo,
mostrando los recuentos detrás de cada uno. Señala los registros con vínculos
ausentes o marcas de tiempo sospechosas. No extrapoles más allá de los datos ni
compares el resultado con referencias externas. Enumera tus supuestos y los
problemas de calidad de datos que limitan las conclusiones.
```

**Planifica un experimento de limpieza de interruptores y de espera de versiones.**

```text
Nuestra espera de versiones más larga es [description of the wait, with date
range and counts], y nuestro registro de interruptores contiene [number]
interruptores de versión, de los cuales [number] han superado su fecha de
caducidad. Las restricciones son [constraints, for example regulated releases,
store review, shared test environment]. Propón tres experimentos pequeños de
cuatro a seis semanas, cada uno con una hipótesis, una forma de observar el
efecto, una métrica de barrera de protección y un riesgo. No inventes cifras de
mejora esperada. Enumera tus supuestos y lo que deberíamos comprobar antes de
empezar.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados de cambios, versiones e incidentes y la barrera de protección que debe acompañar a cada métrica de versiones.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una versión revisada de este tema mantiene coherentes sus relojes, sus vectores de manipulación y sus referencias cruzadas.

## Puntos clave

- Un despliegue pone una versión en un entorno y una versión liberada hace un cambio accesible para los usuarios. Mídelos por separado donde puedas.
- El plazo de entrega de la versión debe terminar en la liberación, con un inicio declarado, e informarse como una mediana y un percentil 85.
- La brecha entre despliegue y versión y el tamaño del lote muestran si el desacoplamiento es real, y protegen la frecuencia contra la división y el reetiquetado.
- Los interruptores de funcionalidad hacen posible la separación y conllevan un costo, así que sigue la cobertura y los interruptores obsoletos con responsables y fechas de caducidad.
- Cuenta según reglas escritas, vincula las versiones con incidentes y cambios, y compara un servicio con su propio historial en lugar de con otros equipos.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
