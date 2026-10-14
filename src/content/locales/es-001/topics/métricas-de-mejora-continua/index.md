# Métricas de mejora continua

**La mejora es un hábito de notar, probar y comprobar, así que mide si las ideas se convierten en cambios, si los cambios se comprueban en cuanto a su efecto y si los mismos problemas siguen volviendo, y mantén el trabajo en manos de las personas que lo hacen.**

## Resumen y motivación

Uno de los principios del Manifiesto Ágil dice que, a intervalos regulares, el equipo reflexiona sobre cómo ser más eficaz y luego ajusta y perfecciona su comportamiento en consecuencia. ITIL expresa la misma convicción en sus principios rectores y en su práctica de mejora continua: los servicios y la forma de operarlos deben mejorarse todo el tiempo, en pasos pequeños, a partir de evidencia. Ambos piden lo mismo, que es un hábito permanente de mejora y no un programa ocasional.

La mayoría de las organizaciones cree hacerlo. Muchas tienen una reunión de estilo retrospectiva que genera una lista de acciones, un registro de ideas de mejora o un plan anual de mejora. El fallo común es que la lista crece y se hace poco. Las acciones se acuerdan en una reunión y se olvidan. Las mejoras se hacen y nunca se comprueban, así que nadie sabe si ayudaron. El mismo problema vuelve con otro nombre. Las métricas de mejora continua son la forma de distinguir una organización que mejora de otra que solo habla de ello.

El [proceso de mejora continua](https://en.wikipedia.org/wiki/Continual_improvement_process) tiene hondas raíces en la gestión de la calidad. El ciclo [Planificar-Hacer-Verificar-Actuar](https://en.wikipedia.org/wiki/PDCA), asociado con W. Edwards Deming y Walter Shewhart, describe la mejora como pequeños experimentos repetidos: planifica un cambio, pruébalo, comprueba el resultado y actúa sobre lo que aprendas. [Kaizen](https://en.wikipedia.org/wiki/Kaizen) es el término japonés para la mejora continua de las prácticas de trabajo, con la implicación de todos. Ambos provienen de la [manufactura esbelta](https://en.wikipedia.org/wiki/Lean_manufacturing) y del Sistema de Producción de Toyota, y ambos son hoy vocabulario estándar en el trabajo de servicios y de software. ITIL 4 ofrece un modelo de mejora continua cuyos pasos preguntan cuál es la visión, dónde estás ahora, dónde quieres estar, cómo llegarás, que actúes, si llegaste y cómo mantener el impulso. Es un detonante de conversación, no un procedimiento que seguir mecánicamente.

Ayudan algunas ideas.

- **Mejora la restricción.** La [teoría de las restricciones](https://en.wikipedia.org/wiki/Theory_of_constraints), desarrollada por Eliyahu Goldratt, dice que el rendimiento de un sistema está limitado por su parte más lenta, así que las mejoras en otros lugares añaden poco. Encuentra la restricción con las medidas de flujo de partes anteriores del libro y mejórala primero (véase el tema 2.3, Trabajo en curso y teoría de colas).
- **Busca causas, no síntomas.** El [análisis de causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis) busca las causas subyacentes de un problema para que corregirlas detenga su regreso. El uso excesivo de métodos sencillos puede engañar cuando los problemas tienen varias causas, así que examina los factores que contribuyen.
- **Cuestiona los supuestos.** El [aprendizaje de doble bucle](https://en.wikipedia.org/wiki/Double-loop_learning), un término de Chris Argyris y Donald Schön, va más allá de corregir la acción para examinar las creencias y las reglas que llevaron a ella. Los equipos que solo corrigen síntomas (aprendizaje de bucle simple) tienden a encontrarse de nuevo con los mismos problemas.
- **La mejora necesita capacidad.** Un equipo al límite no tiene espacio para mejorar. La capacidad protegida es una condición previa, y un ritmo que pueda sostenerse es parte de lo que hace posible la mejora (véase el tema 9.2, Métricas de satisfacción y bienestar).

Las métricas de mejora invitan a su propia manipulación. Si el número de acciones completadas es una meta, los equipos acuerdan acciones triviales. Si los ahorros de las mejoras son una meta, las afirmaciones se inflan. Si el número de ideas presentadas es una meta, las ideas inundan y ninguna se atiende. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: mide si las mejoras funcionan, y no cuán ajetreado parece el programa de mejora (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **La mejora pertenece a las personas que hacen el trabajo.** Ven primero los problemas y las posibles correcciones.
- **Trabaja en pasos pequeños y comprueba cada uno.** Los experimentos pequeños reducen el riesgo y aceleran el aprendizaje.
- **Mide el seguimiento y el efecto, no la actividad.** Las acciones completadas y los efectos confirmados importan más que las ideas generadas.
- **Mejora primero la restricción.** El esfuerzo lejos del cuello de botella añade poco.
- **Corrige las causas.** Busca los factores que contribuyen y cuestiona los supuestos que hay detrás.
- **Protege la capacidad para la mejora.** No ocurrirá en un tiempo libre que no existe.
- **Celebra el aprendizaje, incluido el de los experimentos fallidos.** Una idea probada que no funcionó es información.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de seguimiento de acciones | Proporción de acciones de mejora acordadas en revisiones que se completaron en su fecha acordada | acciones completadas en fecha / acciones que vencen en el periodo | porcentaje | Registro de mejoras o lista de pendientes del equipo | Mejora continua | Acciones de reflexión entregadas | Mensual |
| Antigüedad de la lista de pendientes de mejora | Antigüedad de los elementos de mejora abiertos, con atención a los más antiguos | mediana y percentil 85 de la antigüedad en días de los elementos abiertos; antigüedad del más antiguo | días | Registro de mejoras | Mejora continua | Antigüedad de la lista de pendientes | Mensual |
| Tasa de comprobación de efectos | Proporción de mejoras completadas cuyo efecto se comprobó frente a una línea base | mejoras completadas con una comprobación de antes y después registrada / mejoras completadas | porcentaje | Registro de mejoras con campos de línea base y resultado | Mejora continua; medición e informes | Aprendizaje de los experimentos | Trimestral |
| Tiempo de la idea a la prueba | Tiempo desde que se plantea una idea de mejora hasta la primera prueba en el trabajo real | mediana y percentil 85 de días desde que se plantea hasta la primera prueba | días | Registro de mejoras | Mejora continua | Retroalimentación rápida sobre los cambios | Mensual |
| Proporción de ideas de primera línea | Proporción de ideas de mejora planteadas por las personas que hacen el trabajo, contadas a nivel de equipo | ideas planteadas por miembros del equipo que hacen el trabajo / ideas planteadas | porcentaje | Registro de mejoras | Mejora continua | Equipos que se autoorganizan | Trimestral |
| Tasa de problemas repetidos | Proporción de problemas que reaparecen tras una mejora destinada a eliminar su causa | problemas que reaparecen dentro de un periodo indicado tras cerrarse una mejora relacionada / mejoras cerradas con una causa relacionada | porcentaje | Registros de incidentes, de problemas y de mejoras vinculados por causa | Gestión de problemas; mejora continua | Defecto que escapa tras una corrección | Trimestral |
| Proporción de capacidad para la mejora | Proporción de la capacidad del equipo dedicada a trabajo de mejora | capacidad o elementos completados etiquetados como mejora / capacidad total o elementos completados | porcentaje | Tipos de trabajo del gestor de trabajo | Mejora continua; gestión de la capacidad y el desempeño | Tiempo para la reflexión y la excelencia técnica | Mensual |

Define "elemento de mejora" en el registro y mantenlo separado del trabajo ordinario de la lista de pendientes y de las reparaciones correctivas. El reloj del seguimiento arranca cuando la acción se acuerda con un responsable y una fecha. Una comprobación de efectos requiere una línea base registrada antes del cambio y un indicador definido, y el resultado puede ser "sin efecto" o "no se puede saber". La tasa de problemas repetidos depende de una causa registrada, y la regla de emparejamiento está escrita en el registro. Todas las medidas describen equipos y el sistema, no individuos.

## Recomendaciones

### Haz visible y con responsable la mejora

**1. Mantén una lista de mejora visible por equipo.** Pon los elementos de mejora donde el equipo ya mira, como su tablero o su lista de pendientes, y etiquétalos. Cada elemento tiene un responsable, un problema declarado, un efecto esperado, un indicador y una fecha. Una lista que vive en una herramienta aparte o en un documento que nadie abre se deteriorará. Muestra los elementos más antiguos para que la lista no pueda esconderse.

**2. Celebra una reflexión regular y breve.** Con una cadencia constante, el equipo pregunta qué va bien, qué se interpone en el camino y qué probar a continuación. Mantenla breve y concreta, y termínala con un número pequeño de acciones con responsables. Si tu equipo elige usar un formato con nombre para esto, como una retrospectiva, es elección del equipo. El principio es el hábito regular.

**3. Acuerda menos acciones y termínalas.** Dos o tres acciones que se completan enseñan más que una docena que no. Comprueba la tasa de seguimiento. Cuando las acciones se retrasan repetidamente, pregunta por qué: propiedad poco clara, falta de capacidad o acciones demasiado grandes. Divide las grandes en pasos pequeños.

**4. Protege la capacidad.** Reserva una parte de la capacidad para la mejora y planifícala como cualquier otro trabajo (véase el tema 2.5, Métricas de pronóstico y planificación de entregas). Cuando el equipo esté sobrecargado, reduce la entrada de trabajo nuevo en lugar de cancelar la mejora, ya que la mejora suele ser lo que reduce la sobrecarga. Sigue la proporción usada.

### Encuentra lo que importa

**5. Busca la restricción.** Usa los datos de flujo para encontrar dónde espera el trabajo y qué limita el rendimiento. Las mejoras en la restricción elevan la producción de todo el sistema. Las mejoras en otros lugares solo pueden mover el montón de trabajo. Aplica la misma visión al manejo de incidentes, a la aprobación de cambios y al cumplimiento de solicitudes.

**6. Usa evidencia para elegir.** Elige las mejoras a partir de datos y de las personas más cercanas al dolor: incidentes repetidos, largas esperas, retrabajo, quejas de usuarios, listas de obstáculos. Vincula cada mejora con un problema registrado. Esto ata el registro de mejoras a la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas).

**7. Busca causas y factores que contribuyen.** Para los problemas recurrentes, pregunta más de una vez por qué, y busca condiciones además de desencadenantes. Desconfía de detenerte en la primera causa plausible, o en una persona. Cuestiona los supuestos: ¿por qué trabajamos así, y sigue siendo necesaria la regla? Ahí es donde rinde el aprendizaje de doble bucle.

### Prueba en pequeño, y comprueba

**8. Ejecuta pequeños experimentos con una línea base.** Declara el cambio, el efecto esperado y el indicador. Registra la línea base antes del cambio. Pruébalo a pequeña escala durante un periodo corto y compara después. El ciclo Planificar-Hacer-Verificar-Actuar es un marco sencillo. Cuanto más corto sea el tiempo de la idea a la prueba, más rápido será el aprendizaje.

**9. Comprueba el efecto y regístralo con honestidad.** Tras un cambio, compara el indicador con la línea base y con lo que más cambió. Registra si el efecto se vio, no se vio o no está claro. Los equipos que nunca encuentran "sin efecto" probablemente no están comprobando con cuidado (véase el tema 6.5, Realización de valor y resultados de negocio).

**10. Conserva lo que funciona y abandona lo que no.** Extiende las mejoras que funcionan a otros equipos donde encajen, y retira los cambios que añadieron costo sin beneficio. Revisa los cambios más antiguos, ya que las condiciones cambian. Las normas deben evolucionar a medida que aprende el equipo.

### Mantén vivo el hábito

**11. Haz seguro sugerir y detener.** La gente plantea ideas cuando las anteriores se oyeron y se actuó sobre ellas. Se calla cuando las ideas se esfuman o traen trabajo extra para quien las propone. Responde a cada idea, aunque la respuesta sea "ahora no", con un motivo. Permite que los equipos detengan las mejoras que no funcionan.

**12. No conviertas la mejora en una meta.** No fijes metas para el número de ideas, el número de acciones cerradas ni los ahorros reclamados. Informa del seguimiento, de las comprobaciones de efectos, de la tasa de repetición y de algunas historias. Compara cada equipo con su propio pasado, y comparte las buenas ideas entre equipos sin clasificarlas.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de seguimiento de acciones | Acordar acciones triviales; mover las fechas de vencimiento; cerrar sin hacer | Revisar el tamaño y el valor de las acciones; cambios de fecha registrados; tasa de comprobación de efectos |
| Antigüedad de la lista de pendientes de mejora | Cerrar elementos antiguos como "no se hará" sin una decisión; dividir elementos para reiniciar la antigüedad | Registrar los motivos del cierre; seguir los elementos cerrados sin acción; revisar los más antiguos |
| Tasa de comprobación de efectos | Registrar una comprobación sin línea base; comprobar solo los éxitos | Línea base fechada antes del cambio; incluir los resultados nulos y negativos |
| Tiempo de la idea a la prueba | Llamar prueba a un plan; probar variaciones triviales | Definir una prueba como un cambio en el trabajo real; mirar la importancia de las ideas probadas |
| Proporción de ideas de primera línea | Los responsables presentan ideas con nombres del personal; cuotas obligatorias de ideas | Ideas por autor registradas a nivel de equipo; sin cuotas; preguntar al equipo |
| Tasa de problemas repetidos | Registrar causas distintas para el mismo problema; cerrar el registro anterior con otro tipo | Emparejar por causa con una regla registrada; revisión por alguien ajeno al equipo |
| Proporción de capacidad para la mejora | Etiquetar el trabajo ordinario como mejora; programar tiempo que luego se usa para la entrega | Muestrear los elementos por tipo; comparar con el tiempo realmente dedicado |

Una lectura sana es una lista corta con acciones que terminan, ideas que llegan a prueba en días o semanas, efectos que se comprueban y a veces decepcionan, problemas repetidos decrecientes y capacidad protegida que se usa.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Grandes programas de mejora | Visibles; pueden abordar grandes cuestiones | Lentos; desconectados del trabajo diario |
| Pequeños experimentos continuos | Aprendizaje rápido, bajo riesgo | Pueden pasar por alto problemas estructurales |
| Equipo central de mejora | Habilidad y coherencia | Lejos del trabajo; las ideas se estancan |
| Mejora propiedad del equipo | Relevante y motivada | Calidad variable; necesita apoyo |
| Esquemas de ideas con recompensas | Generan volumen | Cuotas y manipulación; baja calidad |
| Selección basada en evidencia | Se centra en los problemas reales | Necesita datos y tiempo |
| Comprobaciones formales de efectos | Aprendizaje honesto | Esfuerzo; pueden parecer burocráticas si son pesadas |
| Sin comprobaciones | Rápido | No se aprende qué funciona |

La respuesta en prosa es mantener la mejora cerca de los equipos, en pequeños experimentos con comprobaciones de efectos ligeras, respaldada por unas pocas personas que ayuden con los datos y el método, y por líderes que protejan la capacidad y escuchen los resultados.

## Preguntas para conversar con tu equipo

**1. ¿Qué mejora acordamos en nuestra última revisión, y ocurrió?**
Mira las acciones. Para cada una, pregunta si se completó, se abandonó o se olvidó, y por qué. El facilitador debe anotar los motivos. Acordad cuántas acciones puede terminar realmente el equipo, y recortad la próxima lista a esa cifra.

**2. ¿Qué cambio que hicimos últimamente sabemos que ayudó, y cómo lo sabemos?**
Elige un cambio reciente y busca la línea base y el resultado. Si no hay, discutid cómo comprobarlo la próxima vez. Decidid un indicador sencillo para el siguiente experimento.

**3. ¿Qué sigue volviendo por muchas veces que lo corrijamos?**
Enumera los problemas recurrentes. Para uno, pregunta por qué vuelve y qué supuesto hay detrás del enfoque actual. Considerad si la corrección trata un síntoma. Elegid un problema recurrente para mirarlo con más profundidad.

**4. ¿Dónde espera más tiempo el trabajo, y cuál es la restricción?**
Usa los datos de flujo. Pregunta si las mejoras en las que trabaja el equipo tocan la restricción. Si no, discutid si cambiar el foco.

**5. ¿Cuánto de nuestra semana va a la mejora, y qué la protege?**
Compara el plan con la realidad. Discutid qué se lleva el tiempo. Acordad una regla para proteger una pequeña parte, y qué recortar si el equipo está sobrecargado.

**6. ¿Qué pasó con la última idea que alguien sugirió, y cómo se enteró?**
Sigue una idea. ¿Se respondió, se probó o se perdió? Discutid cómo asegurar que cada idea reciba una respuesta y un motivo.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega son la principal fuente de ideas de mejora y los mejores jueces de si funcionan. Deben mantener una lista visible, terminar unas pocas acciones en cada ciclo, comprobar los efectos y compartir lo que aprenden. Necesitan capacidad protegida y líderes que respondan.

### Equipos de servicio y operaciones

Los equipos de operaciones ven a diario los incidentes repetidos, las aprobaciones lentas y el trabajo manual repetitivo. Deben vincular las mejoras con problemas registrados, seguir los problemas repetidos y dedicar tiempo a correcciones que reduzcan su propia carga. Su retroalimentación muestra si las mejoras llegan al usuario.

### Liderazgo y gobernanza

Los líderes crean las condiciones: capacidad protegida, seguridad para sugerir y para detener, y atención a los resultados. Deben pedir seguimiento y comprobaciones de efectos, aceptar hallazgos honestos de "sin efecto", evitar las cuotas y financiar las mejoras que necesitan inversión. La gobernanza debe mirar el registro de mejoras entre equipos en busca de patrones que necesiten acción estructural.

### Clientes y usuarios

Los usuarios se benefician de servicios que siguen mejorando, y son una rica fuente de ideas. Hay que preguntarles, decirles qué cambió e invitarlos a comprobar el efecto. Las quejas repetidas sobre un mismo asunto son una señal de que la mejora no está llegando a la causa.

## En la práctica: un ejemplo de ITIL ágil

El grupo de servicios digitales de una agencia tributaria nacional opera un portal de declaraciones, un sistema de pagos y una plataforma de centro de contacto con ocho equipos. Cada equipo mantiene una lista de mejora, y el grupo informa cada trimestre del número de mejoras completadas. Los números siguientes son ilustrativos.

La jefa de mejora de servicios nota que el número informado sube mientras persisten los mismos puntos de dolor. Revisa las listas. En todo el grupo hay 212 elementos de mejora abiertos, con una antigüedad mediana de 7 meses y el más antiguo con 26 meses. De las acciones acordadas en las revisiones del último trimestre, el 38 por ciento se completó en su fecha. De las 64 mejoras completadas el año pasado, solo 9 tenían una línea base y un resultado registrados, una tasa de comprobación de efectos del 14 por ciento, y 3 de esas 9 no mostraron efecto. Los problemas repetidos son comunes: de 25 incidentes vinculados con mejoras destinadas a eliminar su causa, 11 reaparecieron en seis meses, una tasa de repetición del 44 por ciento. El trabajo de mejora ocupa aproximadamente el 4 por ciento de la capacidad.

El grupo acuerda cuatro cambios con los equipos. Cada equipo recorta su lista a los elementos que puede abordar en los dos meses siguientes y declara por qué aparca o cierra el resto. Los equipos acuerdan no más de tres acciones a la vez, con responsables con nombre. Para cada mejora, se registran una línea base y un indicador antes del cambio, y el resultado se registra después, incluido "sin efecto". Una revisión trimestral mira los problemas recurrentes entre equipos y elige dos para un análisis de causa más profundo, con los equipos del centro de contacto y de pagos investigando juntos una causa compartida. Cada equipo reserva el 10 por ciento de la capacidad para la mejora, protegida por una regla por la que la cancelación necesita el acuerdo del responsable del equipo y una entrada en el registro. El informe a los líderes pasa del número de mejoras completadas al seguimiento, las comprobaciones de efectos y los problemas repetidos.

Tras dos trimestres, los elementos abiertos bajan a 74 con una antigüedad mediana de 2 meses. El seguimiento sube al 81 por ciento, la tasa de comprobación de efectos al 70 por ciento, con 9 de las 36 mejoras comprobadas sin mostrar efecto y abandonadas. La tasa de problemas repetidos baja al 20 por ciento, y el tiempo de la idea a la prueba tiene una mediana de 9 días. La subdirectora pide una meta de 100 mejoras completadas por trimestre. La jefa de mejora de servicios explica que el recuento fue la razón por la que los números anteriores engañaban, y propone seguir el seguimiento, el efecto y la tasa de repetición. La decisión se registra, y se aprueba la petición de un equipo de ejecutar un experimento de cuatro semanas sobre su proceso de aprobación.

## Perspectiva por sector

**Startup.** La mejora ocurre constantemente y de manera informal. Mantén una lista corta, anota los efectos esperados y compruébalos, y protege una pequeña porción de tiempo. Evita el proceso pesado, y vigila que el crecimiento no desplace por completo a la mejora.

**Pequeña empresa.** Una o dos personas hacen todo, y la mejora compite con apagar incendios. Elige un problema recurrente cada trimestre, corrige su causa y comprueba el efecto. Pregunta a los usuarios qué les molesta y actúa sobre una cosa.

**Gran empresa.** La escala hace desigual la mejora y difícil compartir las ideas. Ofrece un formato de registro común y un acompañamiento ligero, deja que los equipos posean sus listas y usa un foro entre equipos para extender lo que funciona y abordar las restricciones compartidas. Evita las cuotas centrales.

**Gobierno y sector público.** La mejora puede estar limitada por la contratación, la legislación y las cadenas de aprobación, y se escrutina públicamente. Documenta los experimentos y sus resultados, implica a los usuarios en la elección y la comprobación de las mejoras e informa con honestidad de los efectos, incluidos los que no funcionaron. Busca mejoras que quiten carga a los ciudadanos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son la capacidad protegida, que es el principal, el esfuerzo de registrar líneas base y resultados y algo de acompañamiento o facilitación. Las herramientas pueden ser tan sencillas como el tablero existente del equipo.

Los retornos son menos problemas repetidos, menos trabajo manual repetitivo, esperas más cortas y mejor moral en los equipos que ven sus ideas convertirse en cambio. Construye el caso con tus propios datos: el costo de los incidentes recurrentes y la proporción eliminada por las mejoras, el tiempo ahorrado por las mejoras con efectos comprobados y el costo de las mejoras que se hicieron y no funcionaron, que la comprobación evita ahora repetir. Evita citar retornos publicados de programas de mejora salvo que puedas rastrear su fuente y su método. Cuenta también el costo de oportunidad de la capacidad (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar las mejoras completadas.** Los equipos acuerdan cambios triviales. Mide el seguimiento y el efecto.
- **Cuotas de ideas.** Generan volumen y ruido. Responde a las ideas que lleguen.
- **Sin líneas base.** Nadie sabe si algo ayudó. Registra el antes y el después.
- **Solo se registran los éxitos.** Se pierde el aprendizaje del fracaso. Registra los resultados nulos.
- **Listas largas sin poda.** La lista pierde credibilidad. Recórtala a lo que el equipo hará.
- **Mejora en el tiempo libre.** No existe. Protege la capacidad.
- **Corregir síntomas.** El problema vuelve. Pregunta por qué más de una vez y cuestiona los supuestos.
- **Mejora por un equipo lejano.** Las ideas se estancan. Mantenla con las personas que hacen el trabajo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Hábito y propiedad | La mejora es ocasional | Hay reflexión; las acciones suelen perderse | Lista visible del equipo con responsables; se termina un número pequeño de acciones | Seguimiento y tiempo de la idea a la prueba gestionados; capacidad protegida | La mejora es rutina y se comparte entre equipos, proveedores y usuarios |
| Evidencia y efecto | Opiniones | Algunas medidas tras los cambios | Línea base y resultado registrados para cada mejora | Las comprobaciones de efectos incluyen resultados nulos; problemas repetidos con seguimiento por causa | El aprendizaje a nivel de portafolio guía dónde mejorar a continuación, con los socios |
| Profundidad | Correcciones de síntomas | Algún análisis de causas | Análisis de causas para los problemas recurrentes | Restricciones identificadas a partir de datos de flujo; supuestos cuestionados | Mejoras sistémicas a lo largo del flujo de valor, con gobernanza compartida |

## Lista de verificación

- [ ] Cada equipo tiene una lista de mejora visible con responsables, efectos esperados y fechas.
- [ ] Una reflexión regular y breve termina con un número pequeño de acciones con responsable.
- [ ] El seguimiento de acciones y la antigüedad de los elementos más antiguos se revisan cada mes.
- [ ] La capacidad para la mejora está planificada, protegida y con seguimiento.
- [ ] Las mejoras están vinculadas con problemas registrados o con evidencia.
- [ ] Se registran una línea base y un indicador antes de cada cambio.
- [ ] Los efectos se comprueban y se registran, incluido el de ningún efecto.
- [ ] Los problemas repetidos se siguen por causa tras las mejoras.
- [ ] Cada idea recibe una respuesta con un motivo.
- [ ] No hay cuotas ni metas para ideas, acciones ni ahorros.

## Prompts de IA

**Elige mejoras a partir de evidencia.**

```text
Aquí están nuestros problemas y obstáculos recurrentes con recuentos aproximados
e impacto: [paste]. Aquí están nuestros datos de flujo sobre dónde espera el
trabajo: [paste]. Sugiere cuáles dos o tres mejoras tienen más probabilidad de
importar, por qué y qué evidencia lo confirmaría o lo contradiría. Recomienda un
pequeño experimento para cada una, con una línea base y un indicador. No
inventes cifras. Enumera tus supuestos.
```

**Diseña un pequeño experimento.**

```text
Queremos probar [change] para abordar [problem] en [team and process]. Diseña un
pequeño experimento: el efecto esperado, la línea base que registrar ahora, el
indicador y cómo medirlo, el periodo de prueba, cómo saber si otros cambios
confundieron el resultado y qué haremos si no hay efecto. Mantenlo ligero.
Enumera tus supuestos y riesgos.
```

**Revisa una lista de mejora.**

```text
Aquí está nuestra lista de mejora con la antigüedad, el responsable y el efecto
esperado de cada elemento: [paste]. Identifica los elementos demasiado vagos,
demasiado grandes u obsoletos, sugiere una lista más corta que el equipo podría
terminar en dos meses y propón una nota que explique los elementos que
aparcamos y por qué. No juzgues a individuos. Enumera tus supuestos.
```

**Analiza un problema recurrente.**

```text
Problema: [describe]. Correcciones pasadas y cuándo reapareció: [paste].
Sugiere factores que contribuyen más allá de la primera causa plausible,
supuestos que cuestionar (aprendizaje de doble bucle) y algunas formas de poner
a prueba a bajo costo cada hipótesis. No supongas una única causa raíz. Enumera
tus supuestos y las preguntas para el equipo.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de mejora.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de mejora mide el seguimiento y el efecto, con su vector de manipulación y su barrera de protección.

## Puntos clave

- Mantén una lista de mejora visible por equipo, con unas pocas acciones con responsable a la vez, y termínalas.
- Registra una línea base antes de cada cambio, comprueba el efecto después y registra los resultados nulos.
- Sigue el seguimiento, las comprobaciones de efectos, los problemas repetidos y la antigüedad de los elementos más antiguos.
- Mejora primero la restricción, y busca las causas y los supuestos que hay detrás.
- Protege la capacidad para la mejora dentro de un ritmo sostenible.
- No fijes cuotas para ideas, acciones ni ahorros.

## Referencias y lecturas complementarias

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
