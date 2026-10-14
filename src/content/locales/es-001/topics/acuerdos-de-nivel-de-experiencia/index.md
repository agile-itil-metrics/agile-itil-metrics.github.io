# Acuerdos de nivel de experiencia

**Un acuerdo de nivel de experiencia añade la pregunta "¿cómo se sintió usarlo?" a la pregunta "¿cumplió el servicio su meta?", y solo funciona cuando las medidas de experiencia se eligen con los usuarios y se mantienen junto a las operativas.**

## Resumen y motivación

Un [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) registra lo que un proveedor se compromete a entregar, normalmente en términos que el proveedor puede contar: disponibilidad, tiempo de respuesta, tiempo de resolución. Esas medidas son útiles y también incompletas. Un equipo puede cumplir cada meta del panel mientras los usuarios pasan la semana sorteando inicios de sesión lentos, repitiéndose ante un centro de servicios y esperando aprobaciones. Esta brecha entre los informes en verde y los usuarios descontentos se llama a veces el efecto sandía: verde por fuera, rojo por dentro (véase el tema 5.1, Métricas de SLA, OLA y XLA).

Un **acuerdo de nivel de experiencia (XLA)** es un acuerdo, entre un proveedor y las personas que usan un servicio, sobre la experiencia que el servicio debe dar. Declara resultados y sensaciones deseados, como "puedo ponerme a trabajar a los pocos minutos de llegar" o "confío en que mi solicitud será atendida", y nombra las medidas que mostrarán si se cumplen. El término se usa en toda la comunidad de gestión de servicios de TI (ITSM), y su definición exacta varía entre autores y proveedores. Comprueba las publicaciones vigentes del propietario del marco antes de describir un XLA como parte de ITIL, e indica qué uso sigues. Este tema trata el XLA como una idea práctica: un acuerdo que sitúa las medidas de experiencia junto a las operativas.

La idea tiene raíces fuera de TI. La [experiencia de usuario](https://en.wikipedia.org/wiki/User_experience) es la experiencia global de una persona que usa un producto, un sistema o un servicio, y la [experiencia del cliente](https://en.wikipedia.org/wiki/Customer_experience) es la suma de las interacciones de un cliente con una organización a lo largo del tiempo. La [usabilidad](https://en.wikipedia.org/wiki/Usability) concierne a cuán eficaz, eficiente y satisfactoriamente pueden las personas alcanzar sus metas. Los equipos ágiles conocen este terreno por el pensamiento de diseño y la investigación de usuarios, y por las revisiones con las partes interesadas donde los usuarios reaccionan ante el software que funciona. Un XLA lleva la misma atención al servicio en tiempo de ejecución.

La experiencia es difícil de medir y fácil de distorsionar. Una encuesta que solo llega a usuarios contentos, una puntuación de sentimiento ajustada para que suba o un único "índice de experiencia" que nadie puede explicar engañarán tanto como un tiempo de ticket manipulado. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica por completo: las medidas de experiencia son iniciadores de conversación, no cuotas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema se apoya en las medidas de encuesta del tema anterior (véase el tema 6.1, Métricas de satisfacción del cliente) y añade medidas de comportamiento y de recorrido que no dependen de preguntar.

## Principios clave

- **Empieza por los resultados que le importan a la gente.** Pregunta a los usuarios cómo es un buen día y escribe los acuerdos con sus palabras.
- **Empareja la experiencia con las operaciones.** Un XLA se sitúa junto a un SLA, no en su lugar.
- **Usa unas pocas medidas desde ángulos distintos.** Combina lo que la gente dice, lo que hace y lo que registra el sistema.
- **Mide los recorridos además de los puntos de contacto.** Una experiencia es el camino completo desde la necesidad hasta el resultado.
- **Sé honesto sobre la incertidumbre.** Los datos de experiencia son ruidosos, y los grupos pequeños necesitan protección.
- **Acuerda las metas con los usuarios y revísalas.** Un XLA es un acuerdo vivo, revisado con las personas a quienes describe.
- **No uses nunca los datos de experiencia para clasificar a individuos.**

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Puntuación de experiencia | Valoración media de una declaración de experiencia acordada, para un servicio y una audiencia | valoración media de las respuestas válidas a una declaración en una escala fija | puntos de escala | Encuesta de pulso breve, enviada según un calendario | Gestión de niveles de servicio; mejora continua | Retroalimentación de la revisión con las partes interesadas; revisión de resultados del producto | Mensual |
| Tendencia de sentimiento | Dirección del tono en los comentarios de texto libre de un servicio | proporción de comentarios codificados como positivos menos proporción codificada como negativos, por periodo | puntos porcentuales | Comentarios de encuestas y de tickets codificados | Mejora continua | Temas de la retrospectiva | Mensual |
| Eventos de fricción por usuario | Recuento de señales de que un usuario tuvo problemas, normalizado por usuarios activos | (contactos repetidos + elementos reabiertos + inicios de sesión fallidos por encima de un número fijado + solicitudes abandonadas) / usuarios activos | eventos por usuario | Sistema de tickets, registros de identidad, portal de solicitudes | Centro de servicios; gestión de incidentes | Defectos hallados en el uso | Mensual |
| Tiempo perdido por problemas de TI | Tiempo estimado que los usuarios pierden por problemas de servicio en un periodo | minutos perdidos autoinformados por usuario, o tiempo medido en estado degradado ponderado por los usuarios afectados | minutos por usuario | Encuesta de pulso; monitorización unida a recuentos de usuarios | Gestión de la disponibilidad; gestión de incidentes | Tiempo de ciclo perdido por bloqueos | Trimestral |
| Tasa de finalización del recorrido | Proporción de usuarios que terminan un recorrido definido sin abandonarlo ni buscar ayuda | usuarios que completan el recorrido sin un contacto de ayuda / usuarios que inician el recorrido | porcentaje | Analítica del portal; vínculos con tickets | Gestión de solicitudes de servicio; gestión del catálogo de servicios | Éxito de tareas en pruebas de usabilidad | Mensual |
| Cumplimiento del XLA | Proporción de metas de experiencia acordadas que se cumplieron en el periodo | metas cumplidas / metas acordadas | porcentaje | El registro del XLA | Gestión de niveles de servicio | Logro de las metas de entrega | Trimestral |
| Brecha de experiencia | Diferencia entre el cumplimiento del SLA y la puntuación de experiencia del mismo servicio | posición del cumplimiento del SLA menos posición de la puntuación de experiencia entre servicios, o una comparación escrita | diferencia de posición o nota | Informes del SLA y encuesta de pulso | Gestión de niveles de servicio | Definición de terminado frente a la retroalimentación de los usuarios | Trimestral |

Define la audiencia y el periodo de cada medida. Indica cómo se protegen los grupos pequeños: por ejemplo, no se muestra ningún resultado de un grupo de menos de diez personas. Los eventos de fricción cuentan señales, no culpas, así que un evento se adjunta a un servicio y a un grupo de usuarios, nunca a la evaluación de desempeño de una persona con nombre.

## Recomendaciones

### Diseña el acuerdo con los usuarios

**1. Entrevista antes de medir.** Dedica tiempo a una muestra de usuarios de cada grupo importante y pregunta: ¿Cómo es un buen día con este servicio? ¿Dónde le hace perder tiempo? ¿Qué dejaría de hacer si funcionara? Usa los hábitos del [diseño centrado en las personas](https://en.wikipedia.org/wiki/Human-centered_design): observa trabajo real y escribe lo que oyes con las palabras del usuario. Las declaraciones resultantes se convierten en los objetivos de experiencia del acuerdo.

**2. Escribe las declaraciones de experiencia como resultados.** "Puedo hacer productiva a una persona recién llegada en su primera mañana" dice más que "solicitud de acceso de nuevo empleado resuelta en dos días". Mantén cada declaración breve, en primera persona y atada a un solo servicio. Apunta a entre tres y cinco declaraciones por servicio para que la gente pueda recordarlas.

**3. Elige medidas desde tres ángulos.** Para cada declaración, elige una medida de lo que la gente dice (una pregunta de pulso o un tema de comentarios), una de lo que la gente hace (finalización del recorrido, contactos repetidos, solicitudes abandonadas) y, cuando sea posible, una de lo que registra el sistema (latencia de los pasos del recorrido). Cuando las tres discrepan, has encontrado algo que investigar.

**4. Acuerda las metas con ligereza.** Al principio, fija una dirección ("reducir el tiempo perdido") y una fecha de revisión en lugar de un número duro. Las metas duras para medidas de experiencia nuevas invitan a la manipulación antes de que se entienda la medida. Cuando aparezca una meta, hazla un rango y di quién la acordó.

### Recoge y lee los datos

**5. Usa preguntas de pulso breves y regulares.** Una pregunta sobre una declaración, formulada a intervalos regulares, es más fácil de responder que una larga encuesta anual. Rota las declaraciones, mantén estable la redacción y evita preguntar a la misma persona más de una vez en un periodo fijado. Vincula el diseño del pulso con los principios de encuesta del tema anterior (véase el tema 6.1, Métricas de satisfacción del cliente).

**6. Lee los comentarios con un método.** Las herramientas de [análisis de sentimiento](https://en.wikipedia.org/wiki/Sentiment_analysis) pueden ordenar grandes volúmenes de texto, y malinterpretan el sarcasmo, la jerga y el contexto. Trata el resultado de la herramienta como una primera pasada, haz que una persona compruebe una muestra cada mes y mantén una lista breve de temas que codifiques a mano. El objetivo del análisis es encontrar asuntos de los que hablar con los usuarios, no producir una puntuación.

**7. Añade señales de comportamiento del recorrido.** Instrumenta los recorridos que importan a los usuarios, con su conocimiento: ¿dónde empiezan, dónde abandonan y dónde piden ayuda? La [monitorización de usuarios reales](https://en.wikipedia.org/wiki/Real_user_monitoring) de los tiempos de carga de páginas, los errores y los pasos da una visión que las encuestas no pueden. Dile a los usuarios qué recoges, limítalo a lo que necesites y agrégalo antes de compartirlo.

**8. Protege a los grupos pequeños y a los individuos.** Los datos de experiencia pueden revelar quién lo está pasando mal. Agrega los resultados, suprime los grupos por debajo de un tamaño acordado y no uses nunca los datos en evaluaciones de desempeño. Decide quién puede ver los comentarios en bruto y guárdalos en consecuencia. En entornos regulados, consulta a especialistas en privacidad antes de recoger datos de comportamiento.

### Usa el acuerdo

**9. Muestra SLA y XLA lado a lado.** En la misma página, muestra el cumplimiento operativo y las medidas de experiencia de cada servicio. El emparejamiento es el punto: un SLA en verde con una puntuación de experiencia en descenso es un pretexto para una conversación, y una puntuación de experiencia en verde con SLA que fallan merece una mirada a lo que no se les dice a los usuarios.

**10. Celebra una revisión regular de la experiencia con los usuarios.** Reúnete cada trimestre con representantes de los grupos de usuarios, muestra los datos, pregunta qué significan y acordad una o dos mejoras que probar. Incluye al centro de servicios y al equipo de producto, ya que la causa de una mala experiencia suele estar en el producto, no en el soporte.

**11. Financia las correcciones.** Un acuerdo que identifica la fricción y luego la deja en su sitio enseña a los usuarios que las medidas son teatro. Pon los dos o tres principales problemas de experiencia en la lista de pendientes con responsables y fechas, e infórmalos en la revisión siguiente. Véanse las métricas de mejora continua más adelante en este libro (véase el tema 9.5, Métricas de mejora continua).

**12. Revisa el acuerdo a medida que cambian los servicios y los usuarios.** Retira las declaraciones que ya no importan y añade otras nuevas. Registra los cambios y márcalos en los gráficos de tendencia, como harías con cualquier definición de métrica.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Puntuación de experiencia | Encuestar solo a usuarios satisfechos; programar la encuesta tras buenos eventos; reformular la declaración para que sea más fácil estar de acuerdo | Tasa de respuesta y composición de quienes responden; registro de redacción estable; leer los comentarios |
| Tendencia de sentimiento | Ajustar la herramienta o la lista de temas hasta que suba la tendencia; excluir los canales negativos | Comprobación humana de una muestra mensual; mantener una guía de codificación fija y registrar los cambios |
| Eventos de fricción por usuario | Redefinir los eventos para que cuenten menos; desalentar los contactos repetidos dificultando el acceso al centro de servicios | Volumen de contactos por canal; tasa de abandono en el centro de servicios (véase el tema 3.1, Métricas del centro de servicios) |
| Tiempo perdido por problemas de TI | Preguntar de un modo que ancle estimaciones bajas; contar solo los incidentes graves | Comparar el tiempo autoinformado con el tiempo degradado medido; revisión de la redacción de la encuesta |
| Tasa de finalización del recorrido | Definir el recorrido de forma tan estrecha que el fallo quede fuera de alcance; desviar los casos difíciles a otro canal | Definición del recorrido en el registro; tasa de contactos de ayuda y escalados |
| Cumplimiento del XLA | Fijar metas que ya se cumplen; definir un conjunto muy pequeño de metas | Revisar la fijación de metas con los usuarios; mostrar el cumplimiento con la tendencia y el historial de metas |
| Brecha de experiencia | Elegir los servicios o periodos que mejor se ven; cambiar qué SLA se comparan | Conjunto de comparación fijo acordado de antemano; mostrar todos los servicios |

Una lectura sana es un cuadro de experiencia que coincide con los comentarios y con la conversación de revisión con los usuarios, un conjunto pequeño de medidas que cambian despacio y por razones que el equipo sabe explicar, y una lista de pendientes de correcciones de experiencia que se acorta.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Solo SLA | Claro, contable, contractual | Pasa por alto lo que sienten los usuarios; puede estar en verde mientras los usuarios están descontentos |
| Solo XLA | Cercano a lo que valoran los usuarios | Más difícil de medir y comparar; débil como base de contratos con proveedores |
| SLA con XLA | Da ambas visiones y expone la brecha | Más trabajo; necesita confianza y criterio para leer los desacuerdos |
| Medidas de experiencia basadas en encuestas | Voz directa de los usuarios | Sesgo de respuesta; carga para quienes responden |
| Medidas de comportamiento | Sin carga de encuesta; objetivas | Necesitan instrumentación y cuidado con la privacidad; muestran lo que ocurrió, no por qué |
| Índice de experiencia único | Titular fácil | Oculta el detalle; fácil de manipular y difícil de explicar |

La respuesta en prosa es usar el XLA como un añadido, introducido para unos pocos servicios donde la brecha entre las operaciones y la experiencia ya es visible. No sustituyas los SLA contractuales por medidas de experiencia que los proveedores no pueden controlar. Mantén los compromisos legales y comerciales en el SLA, y usa el XLA para impulsar la mejora y la conversación.

## Preguntas para conversar con tu equipo

**1. Para nuestro servicio más importante, ¿cómo es un buen día para los usuarios, con sus palabras?**
Reúne a dos o tres usuarios, o reutiliza entrevistas recientes, y escribe sus declaraciones. El facilitador debe resistirse a reformularlas en términos operativos. Compara las declaraciones con el SLA actual y pregunta cuáles cubre y cuáles ignora. Las brechas son candidatas a medidas de experiencia.

**2. ¿Dónde discrepan nuestros paneles en verde y las historias de nuestros usuarios?**
Pide al equipo un caso reciente en que un servicio cumplió sus metas y los usuarios se quejaron. Sigue el caso a través de los datos: ¿qué medimos y qué pasamos por alto? La conversación suele sacar a la luz un paso que falta, un traspaso o un reloj que se detuvo pronto. Registra el caso como ejemplo para la próxima revisión con los usuarios.

**3. ¿Qué tres medidas usaríamos para saber si esta declaración de experiencia es cierta?**
Elige una declaración y escoge una medida de lo que la gente dice, una de lo que hace y una de lo que registra el sistema. Pregunta qué podría pasar por alto cada una y cómo podría manipularse. Acordad el conjunto más pequeño que convencería a un usuario escéptico.

**4. ¿Qué recogemos sobre los usuarios que quizá no esperen, y estarían cómodos con ello?**
Enumera las fuentes de datos de comportamiento y el propósito de cada una. Pide a un representante de los usuarios que reaccione. El facilitador debe tratar la incomodidad como información sobre el diseño, no como un obstáculo. Decidid qué dejar de recoger, qué agregar y quién puede ver los datos en bruto.

**5. ¿Qué haríamos si la puntuación de experiencia cayera mientras todos los SLA siguen en verde?**
Ensaya la respuesta. ¿Quién mira primero, qué comprueba y con quién habla? Decide si el equipo confiaría en la puntuación de experiencia o buscaría formas de descartarla. La respuesta muestra cuán en serio se toma el equipo el acuerdo.

**6. ¿Qué correcciones de experiencia hemos prometido, y qué pasó con ellas?**
Revisa las dos últimas reuniones de revisión con los usuarios. Para cada compromiso, muestra la fecha, el responsable y el resultado. Si la lista está vacía o anticuada, discutid por qué. Acordad una corrección que entregar antes de la próxima revisión y una forma de decir a los usuarios que ocurrió.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de producto tienen buena parte de la causa de una mala experiencia: pantallas confusas, pasos lentos, errores poco claros. Las medidas de experiencia les dan evidencia del uso real, y alimentan directamente el refinamiento. Los equipos deben leer los temas de los comentarios antes de cada sesión de planificación y conectar las medidas de recorrido con la lista de pendientes. No deben tratar la puntuación de experiencia como una meta del equipo. Es información sobre el servicio que comparten con operaciones.

### Equipos de servicio y operaciones

Los equipos de operaciones ven primero la fricción: contactos repetidos, soluciones provisionales y personas enfadadas al teléfono. Las medidas de experiencia les dan una forma de mostrar lo que el SLA oculta, y una razón para corregir causas en lugar de cerrar tickets más deprisa. Deben mantener firmes las definiciones y el muestreo, evitar desviar a los usuarios a canales que se ven mejor y leer completos los comentarios descontentos (véase el tema 3.1, Métricas del centro de servicios).

### Liderazgo y gobernanza

Los líderes eligen si un XLA es una conversación o un marcador. Deben preguntar qué dicen los datos de experiencia sobre dónde invertir, evitar vincular la retribución a un índice de experiencia y proteger la privacidad de los datos del personal. La gobernanza debe pedir las definiciones, el muestreo y el historial de cambios, y debe tratar un salto inexplicado en una medida de experiencia como un motivo para revisar el método.

### Clientes y usuarios

Los usuarios son los autores del acuerdo. Deben ser invitados a describir cómo es lo bueno, ver los resultados y saber qué cambió. Deben saber qué se recoge sobre ellos y por qué, y tener una forma de decir que no. Los usuarios a quienes se pregunta a menudo y que no ven mejorar nada dejarán de responder, y el silencio hará que los datos parezcan mejores que la realidad.

## En la práctica: un ejemplo de ITIL ágil

Una firma de servicios profesionales de tamaño medio opera un servicio de TI interno para 1.800 empleados. Los números siguientes son ilustrativos.

El informe mensual del SLA muestra una disponibilidad del 99,8 por ciento para la plataforma de colaboración y el 96 por ciento de los incidentes resueltos dentro de la meta. El director de TI está satisfecho, pero los consultores en las sedes de los clientes siguen quejándose del inicio de sesión lento. La responsable del servicio propone un piloto de XLA para la plataforma de colaboración.

En entrevistas con 12 consultores surgen tres declaraciones: "puedo unirme a una llamada con un cliente a los dos minutos de decidirlo", "no tengo que llamar a TI para volver a entrar en mi cuenta" y "cuando algo se rompe, sé qué está pasando". El equipo elige medidas para cada una. Para la primera, toman la valoración de pulso de la declaración y el tiempo medido desde el inicio de sesión hasta la unión a la llamada a partir de la monitorización de usuarios reales del cliente, agregado por región. Para la segunda, cuentan los contactos de restablecimiento de contraseña por usuario activo al mes. Para la tercera, siguen la proporción de incidentes en que el mensaje de estado se actualizó en 30 minutos, y hacen la pregunta de pulso sobre ello.

Los dos primeros meses de datos muestran que la mediana del tiempo desde el inicio de sesión hasta la unión a la llamada es buena en la región de la sede central pero larga en otras dos, y que los contactos de restablecimiento de contraseña por usuario son tres veces mayores para el personal con portátiles gestionados que para el resto. La puntuación de experiencia de la primera declaración es de 3,1 sobre 5 frente a 4,2 del personal de oficina. El SLA está en verde en ambos casos. La responsable del servicio lleva el hallazgo a la revisión con los usuarios. El equipo acuerda dos mejoras: ajustar la configuración del inicio de sesión único para las regiones remotas y cambiar los ajustes de renovación de tokens en los portátiles gestionados. Tres meses después, la mediana del tiempo baja, los contactos de restablecimiento por usuario bajan y la puntuación de experiencia sube a 3,8. El director acuerda mantener el XLA para este servicio, añadirlo a uno más y no fijar ninguna meta numérica hasta la próxima revisión.

## Perspectiva por sector

**Startup.** El contacto estrecho con los usuarios hace fáciles las entrevistas. Resiste la tentación de construir un marco: escribe tres declaraciones de experiencia para el servicio principal, pregunta a los usuarios por ellas cada mes y añade una medida de comportamiento. Los acuerdos formales vendrán después.

**Pequeña empresa.** El personal es poco y a menudo comparte responsable con TI. Usa conversaciones y un pulso mensual muy breve. Ten cuidado con los datos de comportamiento, ya que los grupos pequeños son fácilmente identificables.

**Gran empresa.** La escala trae muchos grupos de usuarios y proveedores. Define declaraciones de experiencia por servicio y perfil, mantén paneles por servicio y evita un índice de experiencia único para toda la empresa. Alinea el XLA con los contratos de proveedores para que los proveedores aporten datos sin que se les exija cumplir medidas que no pueden influir.

**Gobierno y sector público.** Los servicios suelen dirigirse al público además de al personal, con deberes de accesibilidad, de lenguaje claro y de igualdad de acceso. Incluye la accesibilidad en las declaraciones y las medidas de experiencia, prueba con usuarios que dependen de tecnología de apoyo y protege los datos personales conforme a la ley. Donde se exijan informes públicos, informa los métodos junto con los resultados (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es moderado. Las entrevistas con usuarios llevan unos días por servicio. Una encuesta de pulso mensual necesita una herramienta de encuestas, que muchas organizaciones ya tienen. Las medidas de comportamiento necesitan cierta instrumentación, que puede provenir de la monitorización existente y de la analítica del portal. La revisión con los usuarios lleva unas horas cada trimestre. Codificar los comentarios lleva una o dos horas al mes.

El retorno está en encontrar problemas que los SLA no muestran, como recorridos lentos en regiones o dispositivos concretos, y en dirigir el dinero de mejora a lo que valoran los usuarios. El tiempo perdido por problemas de TI puede convertirse en un costo con las tarifas de tu propio personal si lo mides con cuidado. Evita las afirmaciones genéricas sobre ganancias de productividad. Construye el caso a partir de tu propia línea base: tiempo perdido por usuario, eventos de fricción por usuario y contactos repetidos, antes y después de una corrección. Cuenta también el costo evitado de las soluciones provisionales, como las herramientas en la sombra adoptadas porque el servicio oficial es incómodo.

## Antipatrones y trampas

- **Sustituir los SLA por XLA.** Los contratos necesitan compromisos contables. Mantén ambos y muéstralos juntos.
- **Un índice compuesto de experiencia.** Oculta la causa e invita a la manipulación. Muestra unas pocas medidas separadas.
- **Definir la experiencia sin los usuarios.** Las declaraciones escritas en una sala de reuniones describen la visión del proveedor. Entrevista y prueba con los usuarios.
- **Encuestar hasta que la gente deje de responder.** Mantén breves los pulsos y rota los temas.
- **Recoger datos de comportamiento sin decírselo a nadie.** Rompe la confianza y puede romper la ley. Sé abierto sobre qué se recoge y por qué.
- **Usar los datos de experiencia en las evaluaciones de desempeño.** Convierte una herramienta de aprendizaje en vigilancia y destruye la información honesta.
- **Corregir la medida, no la causa.** No redirijas a los usuarios a un canal más amable para mejorar un número. Corrige el recorrido.
- **Dejar los hallazgos en una diapositiva.** Financia y sigue las correcciones de experiencia.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Objetivos de experiencia | Implícitos o ausentes | Escritos por el proveedor para algunos servicios | Declaraciones escritas con los usuarios para los servicios clave | Declaraciones revisadas y corregidas cada trimestre con los grupos de usuarios | Compartidos entre servicios y proveedores, con propiedad conjunta con los usuarios |
| Medición | Encuestas ocasionales | Encuesta de pulso para un servicio | Medidas desde tres ángulos (decir, hacer, sistema) para cada declaración | Medidas con seguimiento de su tendencia, protegidas para grupos pequeños y comparadas con los SLA | Datos combinados entre proveedores, con opciones de privacidad controladas por el usuario |
| Acción | Quejas atendidas una a una | Correcciones hechas ad hoc | Principales problemas de experiencia en la lista de pendientes con responsables | Correcciones financiadas, con seguimiento e informadas a los usuarios | Mejora coordinada entre equipos, proveedores y usuarios, con el aprendizaje compartido |

## Lista de verificación

- [ ] Cada servicio con XLA tiene de tres a cinco declaraciones de experiencia escritas con los usuarios.
- [ ] Cada declaración tiene medidas de al menos dos ángulos (decir, hacer, sistema).
- [ ] El SLA y las medidas de experiencia aparecen en la misma página para cada servicio.
- [ ] Las encuestas de pulso son breves, regulares y estables en su redacción.
- [ ] Los comentarios se codifican con una guía estable y una persona comprueba una muestra mensual.
- [ ] Los grupos por debajo de un tamaño acordado se suprimen en los informes.
- [ ] Los datos de comportamiento recogidos se comunican a los usuarios y se limitan a lo necesario.
- [ ] Ninguna medida de experiencia se usa en evaluaciones de desempeño individuales.
- [ ] Una revisión trimestral con representantes de los usuarios está en el calendario.
- [ ] Los principales problemas de experiencia tienen responsables y fechas en la lista de pendientes.

## Prompts de IA

**Redacta declaraciones de experiencia a partir de notas de entrevistas.**

```text
Aquí hay notas anonimizadas de [number] entrevistas con usuarios de [service] en
[type of organization]: [paste notes]. Propón de tres a cinco declaraciones de
experiencia en primera persona, cada una atada a un resultado que importa a los
usuarios, usando sus palabras donde sea posible. Para cada una, sugiere una
medida de lo que la gente dice, una de lo que hace y una de lo que registra el
sistema. No inventes cifras. Enumera tus supuestos y todo lo que no pudiste
saber a partir de las notas.
```

**Encuentra la brecha entre el SLA y la experiencia.**

```text
Para [service] en [period], nuestros resultados del SLA fueron: [paste results].
Nuestros datos de experiencia (puntuaciones de pulso, temas de comentarios,
recuentos de fricción) fueron: [paste data]. Describe dónde discrepan ambos,
ofrece tres posibles explicaciones para cada discrepancia y sugiere qué
comprobar a continuación. No supongas una causa que los datos no puedan
respaldar. Enumera tus supuestos y qué datos adicionales ayudarían.
```

**Revisa un enfoque de privacidad para medidas de comportamiento.**

```text
Planeamos recoger estas señales de comportamiento para medir la experiencia:
[list]. Los usuarios son [staff, public, or both] en [jurisdiction or sector].
Revisa el plan en busca de riesgos para la privacidad, la confianza y la
equidad, y sugiere prácticas mínimas de agregación, retención y comunicación.
Señala todo lo que debería llevar a un especialista en privacidad. No des
conclusiones legales. Enumera tus supuestos.
```

**Prepara una revisión trimestral de la experiencia con los usuarios.**

```text
Redacta una agenda y un resumen de una página para una revisión trimestral de la
experiencia de [service] con representantes de [user groups]. Incluye los
resultados del SLA y de la experiencia lado a lado, los principales temas de los
comentarios, los compromisos del trimestre pasado y su estado, y dos preguntas
para los usuarios. Los datos: [paste data]. Mantén un tono llano y evita la
jerga. Enumera tus supuestos y marca toda afirmación que necesite comprobarse.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección de una medida de experiencia antes de añadirla a un panel.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de XLA lleva su vector de manipulación y su barrera de protección.

## Puntos clave

- Un XLA añade objetivos y medidas de experiencia a las metas operativas, y complementa al SLA.
- Escribe las declaraciones de experiencia con los usuarios, con sus palabras, y ata cada una a medidas de lo que la gente dice, lo que hace y lo que registra el sistema.
- Muestra juntos los resultados del SLA y de la experiencia, y trata el desacuerdo como un pretexto para investigar.
- Protege a los usuarios: comunica lo que recoges, agrégalo, suprime los grupos pequeños y mantenlo fuera de las evaluaciones de desempeño.
- Evita un índice de experiencia único y evita las metas duras antes de entender las medidas.
- Financia las correcciones que revelan los datos y di a los usuarios qué cambió.

## Referencias y lecturas complementarias

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
