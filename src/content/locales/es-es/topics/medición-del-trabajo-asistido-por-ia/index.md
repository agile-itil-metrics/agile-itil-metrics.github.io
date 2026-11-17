# Medición del trabajo asistido por IA

**Juzga el trabajo asistido por IA por lo que sobrevive a la revisión, a la producción y al siguiente contacto del usuario, no por la rapidez con que apareció, y sigue vigilando si las personas que lo hacen continúan aprendiendo.**

## Resumen y motivación

Una vez que un equipo usa herramientas de IA todos los días, la pregunta central cambia de "¿deberíamos?" a "¿qué obtenemos?". El tema anterior expuso los fundamentos: líneas base, comparaciones y costo completo (véase el tema 10.1, La IA en la medición de la gestión de servicios). Este tema entra en el trabajo mismo. ¿Cómo se sabe si el código, los tickets, los documentos y las decisiones asistidos por IA son tan buenos, mejores o peores que el trabajo al que sustituyen, y qué ocurre con las personas que lo hacen?

La asistencia de la IA toca muchos tipos de trabajo. En la entrega de software, las herramientas sugieren o generan código, pruebas, mensajes de commit y comentarios de revisión. En las operaciones de servicio, resumen incidentes, proponen causas, redactan respuestas y escriben artículos de conocimiento. En el análisis, producen informes y consultas. El rasgo común es que producir una primera versión verosímil se vuelve barato. Los costos se desplazan a otros lugares: leer y juzgar la salida, corregir lo que está mal, mantener lo que se generó y aprender lo suficiente para conocer la diferencia.

Varios efectos complican la medición.

- **Los recuentos de producción engañan.** Las [líneas de código](https://en.wikipedia.org/wiki/Lines_of_code) siempre fueron una mala medida de la productividad, y el código generado la empeora. Más código es más que leer, probar y mantener. Los recuentos de líneas generadas, de sugerencias aceptadas o de borradores dicen poco sobre el valor.
- **La revisión se convierte en el cuello de botella.** La [revisión de código](https://en.wikipedia.org/wiki/Code_review) y la revisión de otro trabajo generado llevan tiempo, y un flujo de cambios mayores y más frecuentes puede sobrecargar a los revisores. Las [solicitudes de incorporación](https://en.wikipedia.org/wiki/Pull_request) grandes son más difíciles de revisar bien, y un revisor sobrecargado es más propenso a aprobar lo que no ha entendido. Las medidas de revisión y de flujo de antes siguen siendo esenciales (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).
- **Los problemas de calidad llegan tarde.** El código generado puede superar hoy las pruebas y cargar con [código duplicado](https://en.wikipedia.org/wiki/Duplicate_code), una estructura poco clara o defectos ocultos que afloran como costo de mantenimiento, una forma de [deuda técnica](https://en.wikipedia.org/wiki/Technical_debt). Las medidas tomadas en el momento de la creación lo pasan por alto. Mira lo que ocurre con el trabajo después.
- **Las habilidades pueden cambiar.** Apoyarse en una herramienta para tareas que antes uno hacía por sí mismo es una forma de [descarga cognitiva](https://en.wikipedia.org/wiki/Cognitive_offloading), que puede liberar atención para problemas más difíciles o puede llevar a la [pérdida de cualificación](https://en.wikipedia.org/wiki/Deskilling) si se desvanece la comprensión subyacente. Ambas cosas son posibles, y el resultado depende de cómo se usen las herramientas. Esto importa para las personas implicadas y para la capacidad del equipo de manejar las situaciones que la herramienta no puede.

La evidencia sobre el efecto de la asistencia de la IA en la productividad aún se está desarrollando, y varía según la tarea, la experiencia del usuario, la herramienta y el entorno. Algunos estudios controlados de tareas de programación han encontrado una finalización más rápida de tareas bien definidas, y otros estudios e informes han encontrado ganancias menores o nulas, o costos adicionales, para personas con experiencia que trabajan en sistemas complejos que conocen bien. Este libro no ofrece un número. La postura responsable para un equipo es medir su propio trabajo, con líneas base y comparación, y tratar cualquier cifra publicada como un estudio en un contexto particular.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es especialmente importante aquí, porque la presión por mostrar ganancias es fuerte y los números fáciles son los engañosos. Las medidas siguientes siguen lo que sobrevive, no lo que se produce (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Mide lo que sobrevive.** La retención, el retrabajo y los defectos que escapan dicen más que la producción.
- **Vigila la revisión.** El flujo del trabajo asistido por IA está limitado por lo bien que la gente puede leerlo.
- **Compara lo similar con lo similar.** El trabajo asistido y el no asistido deben ser similares en tipo y dificultad.
- **Mira después además de ahora.** Los problemas de calidad y los costos de mantenimiento aparecen semanas o meses después de la creación.
- **Mantén la comprensión en el ciclo.** La persona que entrega el trabajo debe poder explicarlo.
- **Protege las habilidades y el aprendizaje.** Nota lo que la gente aún puede hacer sin la herramienta.
- **Agrega; no monitorices a individuos.** Los datos sobre quién usa la IA y cómo son para mejorar el proceso, no para clasificar a las personas.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de retención | Proporción de cambios asistidos por IA que permanecen sustancialmente sin cambios tras un periodo indicado | cambios asistidos por IA con menos de una proporción fijada modificada o revertida a los 30 días / cambios asistidos por IA integrados hace 30 días | porcentaje | Historial del control de versiones unido a etiquetas de asistencia, a nivel de equipo | Gestión de versiones y despliegues; habilitación de cambios | Trabajo que se mantiene; poco retrabajo | Mensual |
| Retrabajo posterior a la integración | Proporción de cambios que necesitan una corrección posterior en un periodo corto, para cambios asistidos y de comparación | cambios con una corrección posterior vinculada en 14 días / cambios integrados, por grupo | porcentaje | Control de versiones, seguimiento de incidencias, registros de cambios | Habilitación de cambios; gestión de problemas | Defectos que escapan; retrabajo | Mensual |
| Carga de revisión | Esfuerzo del revisor por cambio, para cambios asistidos y de comparación | mediana y percentil 85 del tiempo de revisión y de las rondas de revisión por cambio, por grupo | horas; rondas | Marcas de tiempo de la herramienta de revisión, agregadas por equipo | Gestión de versiones y despliegues | La revisión como retroalimentación y aprendizaje | Mensual |
| Tasa de defectos que escapan | Defectos hallados en producción por cambio, para cambios asistidos y de comparación | defectos hallados tras la versión atribuidos a un cambio / cambios liberados, por grupo | defectos por cambio | Seguimiento de defectos vinculado a los cambios | Gestión de incidentes; gestión de problemas | Calidad de lo que se libera | Trimestral |
| Tasa de superación de la comprobación de explicación | Proporción de cambios asistidos por IA muestreados cuyo autor puede explicar en la revisión el enfoque y sus compensaciones | cambios muestreados en que el autor explicó a satisfacción del revisor / cambios muestreados | porcentaje | Notas de revisión muestreadas | Gestión del conocimiento; habilitación de cambios | Comprensión compartida del código | Trimestral |
| Calidad del soporte asistido | Tasa de reapertura y satisfacción del usuario de las respuestas de soporte asistidas por IA comparadas con las no asistidas | tickets asistidos reabiertos / tickets asistidos, y valoraciones favorables / valoraciones, por grupo | porcentaje | Herramienta ITSM, encuesta | Centro de servicios; gestión de incidentes | Calidad de los resultados del servicio | Mensual |
| Valoración de la confianza sin ayuda | Valoración del equipo de su confianza para hacer tareas clave sin la herramienta | valoración media y dispersión en una escala acordada, por equipo | puntos de escala | Pulso anónimo del equipo | Gestión de la fuerza laboral y del talento; gestión del conocimiento | Capacidad y aprendizaje del equipo | Trimestral |

Etiqueta la asistencia de la IA de forma fiable a nivel de equipo, mediante los registros de la herramienta o una convención ligera, e indica cómo se eligen los cambios de comparación: similares en tamaño, área y riesgo. La retención mide un cambio sustancial, con un umbral fijado en el registro. El retrabajo posterior a la integración vincula una corrección posterior con el cambio original mediante una regla indicada. La carga de revisión es el esfuerzo del revisor, no del autor, e incluye solo el tiempo activo de revisión donde sea medible. No se informan nunca datos a nivel individual. Las muestras para la comprobación de explicación se eligen al azar, y la comprobación es una conversación que respalda el aprendizaje, no una prueba a una persona.

## Recomendaciones

### Sigue el trabajo después de crearlo

**1. Sigue lo que ocurre con el trabajo asistido a lo largo del tiempo.** Para el código, sigue los cambios durante semanas tras la integración: ¿se quedan, se corrigen o se revierten? Para el soporte, sigue los tickets tras la respuesta: ¿se reabren o van seguidos de contactos repetidos? Para los documentos, comprueba si se usan, se corrigen o se ignoran. La retención y el retrabajo son señales sencillas y difíciles de falsear de la calidad.

**2. Compara con un trabajo similar no asistido.** Elige un trabajo de comparación de tamaño, riesgo y área similares, del mismo periodo. La dificultad importa: la gente puede usar la IA para tareas fáciles, lo que halagaría a la herramienta, o para las difíciles, lo que la castigaría. Indica cómo llegan a asistirse las tareas, y ajusta o matiza en consecuencia. Una comparación pequeña y honesta supera a una grande y confundida (véase el tema 6.5, Realización de valor y resultados de negocio).

**3. Incluye las medidas posteriores en el conjunto estándar.** Empareja cualquier medida de rapidez con la tasa de fallos de cambio, los defectos que escapan y las medidas de estabilidad ya en uso (véase el tema 2.8, Métricas DORA). Una ganancia de rapidez con una estabilidad decreciente es una transferencia de costo a operaciones y a los usuarios. Informa juntas ambas.

### Mantén significativa la revisión

**4. Vigila la carga y el tamaño de la revisión.** Mide el tiempo de revisión, las rondas de revisión y el tamaño de los cambios del trabajo asistido y del no asistido. Si los cambios asistidos son mayores o más numerosos, los revisores pueden estar sobrecargados. Fija normas para el tamaño de los cambios y limita la cantidad de material generado que puede entrar en una revisión. La capacidad de revisión es parte de la capacidad del sistema (véase el tema 2.3, Trabajo en curso y teoría de colas).

**5. Pide a los autores que expliquen.** Haz costumbre que el autor de un cambio pueda explicar qué hace, por qué este enfoque y cuáles son las compensaciones. Basta una conversación breve y de apoyo en la revisión. Muestrea cada trimestre comprobaciones de explicación para ver si la comprensión sigue el ritmo de la producción. Donde los autores no puedan explicar, trátalo como una señal para ir más despacio y aprender, no como un fallo de la persona.

**6. Protégete del sesgo de automatización.** Anima a los revisores a leer el trabajo asistido con tanto espíritu crítico como cualquier otro. Rota a los revisores, siembra de vez en cuando problemas conocidos en un cambio de prueba para comprobar la detección y mantén el muestreo de las salidas por revisores independientes. Una tasa de aceptación muy alta con un retrabajo creciente es una advertencia (véase el tema 10.1, La IA en la medición de la gestión de servicios).

### Cuida la calidad y el mantenimiento

**7. Monitoriza la estructura del código y del sistema.** Sigue la duplicación, la complejidad, la cobertura de pruebas y la tasa de cambio en las áreas donde la asistencia es intensa. Usa las medidas que ya tienes para las [pruebas de software](https://en.wikipedia.org/wiki/Software_testing) y la salud del código, y mira las tendencias. Una duplicación creciente o una eficacia decreciente de las pruebas puede señalar que el código generado se acepta sin integrarlo en el diseño. La cobertura de las [pruebas de regresión](https://en.wikipedia.org/wiki/Regression_testing) es una red de seguridad, y su solidez importa más cuando sube el volumen de cambio.

**8. Trata con cuidado las pruebas generadas.** La IA puede escribir muchas pruebas con rapidez, y las pruebas pueden pasar sin comprobar nada significativo. Muestrea las pruebas generadas en busca de valor, y mide la eficacia de las pruebas con métodos como comprobar si fallan cuando se rompe deliberadamente el comportamiento. No cuentes las pruebas escritas como una medida de calidad.

**9. Vigila la calidad del soporte asistido.** Para el centro de servicios y las operaciones, mide la tasa de reapertura, los contactos repetidos, la satisfacción y la exactitud de las respuestas muestreadas de las respuestas asistidas frente a las no asistidas. Una respuesta más rápida que devuelve al usuario es más lenta en conjunto. Lee los comentarios de los usuarios sobre las respuestas asistidas, y mira si los usuarios saben que tratan con IA donde importe (véase el tema 6.1, Métricas de satisfacción del cliente).

### Protege a las personas y las habilidades

**10. Nota lo que la gente aún puede hacer.** Pregunta a los equipos cuánta confianza tienen para hacer tareas clave sin la herramienta y sigue la tendencia. Usa de vez en cuando práctica sin ayuda, programación en pareja y revisiones del diseño subyacente para mantener vivas las habilidades. Protege en particular el aprendizaje de los miembros más nuevos del equipo, que pueden usar la herramienta antes de haber construido los modelos mentales en los que se apoyan los colegas con experiencia para juzgarla (véase el tema 9.4, Métricas de habilidades y aprendizaje).

**11. Mantén los datos sobre las personas fuera de la evaluación.** Agrega a nivel de equipo. No informes de qué individuos usan más la IA, y no uses el uso, la tasa de aceptación ni el volumen generado en evaluaciones de desempeño. Haz conocidas las reglas. Se necesita confianza para informar con honestidad de lo que funciona y de lo que no.

**12. Revisa con regularidad.** Las herramientas, los modelos y las prácticas cambian en meses. Repite la comparación cuando cambie la herramienta o la forma de trabajar. Comparte los hallazgos, incluido que una herramienta no ayudó aquí, y retira los usos que ya no se ganan su lugar.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de retención | Evitar los cambios necesarios para mantener alto el número; etiquetar como asistidos solo los cambios exitosos | Etiquetar mediante los registros de la herramienta, no por elección del autor; emparejar con los defectos que escapan y el retrabajo |
| Retrabajo posterior a la integración | Corregir en otro ticket o en un cambio nuevo no vinculado; retrasar las correcciones más allá de la ventana | Regla de vinculación en el registro; mirar una ventana más larga; defectos de producción |
| Carga de revisión | Revisiones apresuradas que reducen el tiempo medido; aprobaciones sin comentarios | Muestra de la profundidad de la revisión; defectos que escapan; encuesta a los revisores |
| Tasa de defectos que escapan | No atribuir los defectos a los cambios; reclasificar los defectos como mejoras | Regla de atribución; muestra independiente de la clasificación de defectos |
| Tasa de superación de la comprobación de explicación | Los autores ensayan para la comprobación; revisores indulgentes | Muestras aleatorias y sin aviso; rotar a los revisores; centrarse en las razones de diseño |
| Calidad del soporte asistido | Asistir solo los tickets fáciles; aleccionar a los usuarios para que valoren alto | Emparejar los tickets por tipo y dificultad; tasa de respuesta y composición; leer los comentarios |
| Valoración de la confianza sin ayuda | Valoraciones infladas para evitar el escrutinio; valoraciones bajas para defender más herramientas | Anonimato; comparar con la práctica observada en simulacros; leer los comentarios |

Una lectura sana es un trabajo asistido que se queda en su sitio tan a menudo como el no asistido, un retrabajo y unos defectos que escapan que igualan o mejoran la comparación, una revisión que sigue siendo profunda, autores que pueden explicar lo que entregan, un soporte asistido que no regresa y equipos que siguen confiando en sus propias habilidades.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Medir el volumen de producción | Fácil | Premia el volumen; no dice nada del valor |
| Medir la retención y el retrabajo | Refleja la calidad a lo largo del tiempo | Retrasada; necesita vincular registros |
| Comparación controlada | Creíble | Necesita esfuerzo; puede ser impracticable |
| Comparación observacional | Barata | Confundida por la selección de tareas |
| Comprobaciones de explicación obligatorias | Mantienen la comprensión | Pueden parecer un examen; añaden esfuerzo |
| Comprobaciones ligeras por muestreo | Poca carga | Pueden pasar por alto patrones |
| Restricciones fuertes al uso de la IA | Control del riesgo | Beneficio perdido; uso en la sombra |
| Uso abierto con medición | Aprendizaje y beneficio | Necesita confianza y disciplina |

La respuesta en prosa es permitir el uso dentro de reglas claras, medir lo que sobrevive, muestrear la comprensión, proteger la capacidad de revisión y las habilidades y mantener los datos sobre las personas fuera de la evaluación.

## Preguntas para conversar con tu equipo

**1. ¿Cuánto de lo que la IA nos ayudó a producir el último trimestre sigue en su sitio, sin cambios, y cómo lo sabemos?**
Mira la retención y el retrabajo de los cambios asistidos frente a un conjunto comparable. El facilitador debe registrar lo difícil que fue responder. Acordad cómo etiquetar y vincular los registros para que la respuesta sea fácil el trimestre siguiente.

**2. ¿Está la revisión al ritmo, y qué ocurre cuando no lo está?**
Mira los tiempos, las rondas y los tamaños de las revisiones. Pregunta a los revisores cómo se sienten con los cambios asistidos. Discutid límites de tamaño y formas de repartir la carga. Acordad una norma que probar.

**3. ¿Podría cada uno de nosotros explicar el último cambio que entregamos con ayuda de la IA, y sus compensaciones?**
Probadlo en parejas. Notad dónde fue fácil explicar y dónde fue difícil. Discutid qué nos dice eso de nuestro uso de la herramienta y cómo mantener alta la comprensión.

**4. ¿Qué podemos seguir haciendo bien sin la herramienta, y de qué estamos perdiendo la destreza?**
Enumera las tareas clave, valora con honestidad la confianza y planificad algo de práctica sin ayuda o de programación en pareja. La conversación también saca a la luz lo que la gente valora de su trabajo y quiere conservar.

**5. ¿Dónde nos ayudó más y menos la IA, y qué tienen en común esos lugares?**
Comparad ejemplos. Buscad rasgos como tareas bien definidas, buenas pruebas o dominios familiares. Usa los hallazgos para guiar dónde usar la herramienta.

**6. ¿Qué mediríamos si no confiáramos en nuestras primeras impresiones?**
Pide al grupo que nombre la evidencia que cambiaría su opinión sobre la herramienta en cualquier sentido. Usa las respuestas para definir la siguiente comparación.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega tienen la experiencia diaria y los resultados de calidad. Deben etiquetar el trabajo asistido, vigilar la retención y el retrabajo, mantener significativa la revisión y conservar su propia comprensión. Deben alzar la voz cuando el volumen de cambio generado supere su capacidad de revisarlo.

### Equipos de servicio y operaciones

Los equipos de operaciones usan la IA para resúmenes, diagnósticos y respuestas, y heredan los problemas de calidad que escapan. Deben muestrear las salidas, comparar las tasas de reapertura y de contactos repetidos y mantener una responsabilidad humana clara sobre las acciones en producción. Deben ayudar a definir dónde la IA no debe actuar sin una persona.

### Liderazgo y gobernanza

Los líderes afrontan presión para mostrar ganancias y pueden verse tentados por las métricas de uso y de producción. Deben insistir en medidas de retención, retrabajo y estabilidad junto a la rapidez, financiar la capacidad de revisión, proteger el desarrollo de habilidades y resistir la clasificación de personas. La gobernanza debe esperar comparaciones y salvedades en los informes de beneficios de la IA.

### Clientes y usuarios

Los usuarios reciben los resultados: el código que ejecuta sus servicios, las respuestas a sus solicitudes, los documentos en los que se apoyan. Se benefician cuando se mantiene la calidad y sufren cuando no. Deben poder llegar a una persona, y su retroalimentación sobre las interacciones asistidas es una evidencia clave de la calidad.

## En la práctica: un ejemplo de ITIL ágil

El grupo digital de una aerolínea europea tiene seis equipos de producto que construyen y operan software de reservas y de operaciones. Los equipos empezaron a usar un asistente de programación con IA hace un año, y el panel del grupo informa de que el 38 por ciento de las líneas integradas están generadas por IA. Los números siguientes son ilustrativos.

La jefa de excelencia de ingeniería no está tranquila con ese panel. Pide a tres equipos que etiqueten los cambios asistidos mediante los registros de la herramienta, solo a nivel de equipo, y que elijan cambios de comparación de tamaño y área similares. A lo largo de un trimestre, la mediana del tiempo desde el primer commit hasta la integración es menor para los cambios asistidos, 1,4 días frente a 2,0. La tasa de retención de los cambios asistidos a los 30 días es del 81 por ciento frente al 90 por ciento de los cambios de comparación, y el 12 por ciento de los cambios asistidos necesitó una corrección posterior en 14 días frente al 7 por ciento. La carga de revisión cuenta la misma historia: la mediana del tiempo de revisión por cambio es un 35 por ciento mayor para los cambios asistidos, y el percentil 85 del tamaño del cambio ha crecido. Los defectos que escapan por cada 100 cambios son algo mayores en los cambios asistidos, aunque la muestra es pequeña y la diferencia está dentro de la variación normal. Una muestra de 40 cambios asistidos muestra que en 31 el autor pudo explicar bien el enfoque y sus compensaciones, en 6 en parte y en 3 en absoluto, sobre todo en áreas de código nuevas para el autor. En el centro de servicios, las respuestas asistidas tuvieron una tasa de reapertura del 7 por ciento frente al 6 de las no asistidas, con una satisfacción similar. En un pulso del equipo, los ingenieros más nuevos valoran su confianza para implementar funcionalidades básicas sin la herramienta en 2,6 sobre 5, frente a 4,1 de los ingenieros con más de tres años en el grupo.

La jefa de excelencia de ingeniería lleva los resultados a los equipos y no los clasifica. Los equipos acuerdan cuatro cambios. Unos límites de tamaño de los cambios y una rotación de revisión protegen a los revisores. Los autores explican brevemente los cambios asistidos en la revisión. Los ingenieros más nuevos trabajan en pareja con los experimentados en las funcionalidades básicas, y un ejercicio mensual sin ayuda mantiene en práctica las habilidades. El panel abandona la proporción de líneas generadas y muestra la retención, el retrabajo, la carga de revisión y los defectos que escapan, asistido frente a comparación. Tres meses después, la brecha de retención se estrecha a 4 puntos, las correcciones posteriores bajan al 8 por ciento y mejora la comprobación de explicación. Un vicepresidente pide que la proporción de líneas generadas sea una meta para cada equipo. La jefa de excelencia de ingeniería explica los hallazgos y propone seguir con el seguimiento de los resultados, añadiendo que las ganancias son reales en algunas tareas y no en otras, y que el equipo decidirá dónde usar la herramienta. La decisión se registra.

## Perspectiva por sector

**Startup.** Los equipos pequeños pueden ganar mucho con la asistencia y también acumular deuda oculta rápidamente. Sigue la retención y el retrabajo desde el principio, mantén significativas las pruebas y asegura que las personas que mantendrán el sistema lo entiendan. Cuidado con entregar código que nadie puede explicar.

**Pequeña empresa.** La asistencia puede estirar a un equipo diminuto. Mide con una muestra pequeña: con qué frecuencia el trabajo asistido necesita arreglos posteriores. Mantén las copias de seguridad, las pruebas y la revisión humana de todo lo que se dirija al cliente, y protege la comprensión que tiene el dueño de los sistemas de los que depende.

**Gran empresa.** La escala amplifica tanto las ganancias como los problemas. Ofrece orientación compartida sobre etiquetado, límites de revisión y medidas, compara entre equipos con cuidado y sin clasificar e invierte en capacidad de revisión y de pruebas. Incluye en la canalización la revisión de seguridad y de licencias del código generado (véase el tema 7.2, Métricas de activos de software y licencias).

**Gobierno y sector público.** Los sistemas públicos tienen vidas largas, una rendición de cuentas estricta y altas consecuencias por los errores. Exige una responsabilidad humana rastreable, pruebas cuidadosas y documentación de cómo se usó la IA. Registra el trabajo asistido en los registros de cambios y evalúa los riesgos para la equidad y la seguridad (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son las herramientas y los cargos por uso, el esfuerzo de etiquetar y vincular registros, el tiempo de revisar y corregir, las pruebas adicionales y la formación. Un estudio de comparación lleva tiempo, pero es barato comparado con una decisión errónea de escalar o de prohibir.

Los retornos son reales donde la asistencia reduce el esfuerzo sin reducir la calidad, y se pierden donde desplaza el esfuerzo a la revisión, al retrabajo y al mantenimiento. Construye el caso con tus propias medidas: tiempo hasta un cambio integrado y retenido, retrabajo y defectos que escapan frente a la comparación, carga de revisión y satisfacción de usuarios y personal. Evita usar como tu estimación las cifras de productividad publicadas. Recuerda los costos ocultos: menor comprensión, pérdida de habilidades y deuda técnica. Sé honesto sobre la incertidumbre (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar las líneas generadas o las sugerencias aceptadas.** Premian el volumen. Mide lo que sobrevive.
- **Comparar el trabajo asistido en tareas fáciles con el no asistido en tareas difíciles.** El resultado halaga o castiga a la herramienta. Empareja las tareas.
- **Dejar que la capacidad de revisión se quede atrás.** La calidad cae en silencio. Limita el tamaño de los cambios y protege a los revisores.
- **Omitir las medidas posteriores.** El costo aparece después. Sigue el retrabajo, los defectos y la estabilidad.
- **Tratar las pruebas generadas como calidad.** Pueden pasar sin comprobar nada. Prueba las pruebas.
- **Ignorar las habilidades.** La comprensión se desvanece sin notarlo. Sigue la confianza sin ayuda y la práctica.
- **Monitorizar a los individuos.** Genera miedo y oculta problemas. Mantén los datos a nivel de equipo.
- **Declarar la victoria con un estudio corto y pequeño.** Repítelo a medida que cambian las herramientas y las prácticas.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Medir lo que sobrevive | Recuentos de producción | Impresiones informales de calidad | Trabajo asistido etiquetado; retención y retrabajo con seguimiento frente a la comparación | Defectos posteriores, estabilidad y carga de revisión gestionados juntos | La evidencia entre equipos guía dónde se usa la asistencia; resultados compartidos ampliamente |
| Revisión y comprensión | Revisión como antes | Preocupación por la sobrecarga | Normas de tamaño de los cambios; comprobaciones de explicación muestreadas | Capacidad de revisión planificada; sesgo de automatización contrarrestado | Revisión y comprensión incorporadas a cómo trabajan todos los equipos con la IA |
| Personas y habilidades | No se considera | Anécdotas | Confianza sin ayuda medida con pulsos; algo de práctica | Desarrollo de habilidades planificado; tendencias gestionadas | Aprendizaje y oficio protegidos en toda la organización; uso de la IA codiseñado con el personal |

## Lista de verificación

- [ ] El trabajo asistido por IA se etiqueta a nivel de equipo mediante los registros de la herramienta o una convención ligera.
- [ ] Se define un trabajo de comparación de tamaño, área y riesgo similares.
- [ ] La retención y el retrabajo posterior a la integración tienen seguimiento para el trabajo asistido y el de comparación.
- [ ] Los defectos que escapan y la tasa de fallos de cambio se informan junto a cualquier medida de rapidez.
- [ ] El tiempo de revisión, las rondas y el tamaño de los cambios se monitorizan, con normas de tamaño.
- [ ] Los autores pueden explicar los cambios asistidos, y se comprueba una muestra cada trimestre.
- [ ] Las pruebas generadas se muestrean en busca de valor.
- [ ] El soporte asistido se compara en tasa de reapertura, contactos repetidos y satisfacción.
- [ ] La confianza sin ayuda se mide con pulsos, y se planifica la práctica sin ayuda.
- [ ] Los datos individuales de uso y de aceptación no se usan en la evaluación.

## Prompts de IA

**Planifica una comparación de cambios asistidos y no asistidos.**

```text
Queremos comparar cambios asistidos por IA y no asistidos de [team and system].
Nuestros datos incluyen: [list fields]. Propón cómo etiquetar los cambios
asistidos sin depender de la memoria de los autores, cómo elegir cambios de
comparación de tamaño y riesgo similares, qué medidas comparar (retención,
retrabajo, carga de revisión, defectos), el periodo y cómo matizar los
hallazgos. No enuncies resultados esperados. Enumera tus supuestos y las
amenazas a la validez.
```

**Diseña una comprobación de explicación.**

```text
Diseña una comprobación de explicación breve y de apoyo para cambios asistidos
por IA muestreados en [language and domain]. Incluye cómo muestrear, las
preguntas que hace un revisor, qué cubre una buena explicación, cómo registrar
los resultados a nivel de equipo y cómo usar los hallazgos para el aprendizaje
sin calificar a las personas. Enumera tus supuestos y los riesgos de la
comprobación.
```

**Revisa las medidas posteriores.**

```text
Aquí están nuestras medidas de [period]: rapidez [values], retención [values],
retrabajo [values], carga de revisión [values], defectos que escapan [values],
para el trabajo asistido y el de comparación. Describe qué sugiere el patrón y
qué no, qué diferencias están dentro de la variación normal y qué comprobar a
continuación. No afirmes causalidad. Enumera tus supuestos y los datos que
debería añadir.
```

**Planifica la práctica sin ayuda.**

```text
Propón un programa ligero para mantener vivas las habilidades básicas de un
equipo que usa herramientas de IA a diario: ejercicios mensuales sin ayuda,
programación en pareja entre miembros nuevos y experimentados y discusiones de
diseño. Sugiere cómo encajarlo en la semana laboral sin añadir presión y cómo
seguir su efecto con el pulso de confianza sin ayuda. Enumera tus supuestos y
compensaciones.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una medida de trabajo asistido por IA.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de trabajo asistido por IA mide lo que sobrevive y lleva su vector de manipulación y su barrera de protección.

## Puntos clave

- Mide lo que sobrevive: retención, retrabajo, defectos que escapan y estabilidad, frente a un trabajo comparable no asistido.
- Protege la capacidad de revisión y mantén profunda la revisión, porque limita la rapidez con que el trabajo asistido puede fluir con seguridad.
- Comprueba que los autores pueden explicar lo que entregan, y nota si las habilidades crecen o se desvanecen.
- Muestrea las pruebas y las salidas generadas en busca de valor real.
- Lee las afirmaciones de productividad publicadas como estudios aislados, y mide tu propio trabajo.
- Mantén los datos individuales de uso fuera de la evaluación.

## Referencias y lecturas complementarias

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
