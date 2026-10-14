# Una hoja de ruta de adopción incremental

**Empieza donde estás, entrega algo útil a un equipo durante el primer mes y haz crecer el programa en pasos pequeños, cada uno de los cuales gana el derecho al siguiente.**

## Resumen y motivación

La mayor parte de la orientación sobre métricas describe un estado final: un conjunto completo de medidas, un almacén de datos limpio, un panel para cada audiencia, una cultura de la evidencia. Pocas organizaciones llegan allí por plan. Llegan, cuando llegan, mediante una serie de pasos pequeños y útiles, cada uno de los cuales se pagó a sí mismo antes de que empezara el siguiente. Este tema ofrece una hoja de ruta con ese espíritu: unos primeros 30 días, los 60 siguientes y otros 90, que juntos suman aproximadamente 180 días. Los plazos son una forma aproximada y no una promesa. Un equipo pequeño puede avanzar más deprisa, y uno grande o cauteloso más despacio.

La lógica es la misma lógica de entrega continua que el resto del libro recomienda para los servicios. Entrega pronto una rebanada delgada y funcional. Ponla delante de usuarios reales. Aprende de lo que hacen con ella. Amplía lo que ayudó y abandona lo que no. Un programa de métricas que dedica seis meses al diseño y lanza un panel completo a una audiencia sorprendida repite el viejo error de la versión grande: mucho esfuerzo, retroalimentación tardía y una alta probabilidad de que el resultado encaje mal. La idea de un [producto mínimo viable](https://en.wikipedia.org/wiki/Minimum_viable_product), la versión más pequeña de algo que aporta valor y genera aprendizaje, se aplica a un programa tanto como a un producto.

Los objetivos ágiles dan forma a la hoja de ruta de varias maneras. La implicación continua de las partes interesadas significa que las primeras semanas se pasan con las personas que usarán los números y serán medidas por ellos, no en un cuarto trasero. La mejora continua significa que el propio plan se revisa y se cambia a medida que el programa aprende, con el espíritu del [kaizen](https://en.wikipedia.org/wiki/Kaizen), la práctica de la mejora pequeña y constante por parte de todos. La evolución constante significa que ninguna lista de medidas es definitiva. Un ritmo sostenible significa que la hoja de ruta pide una parte modesta del tiempo de un equipo, y que el programa no añade una carga de informes que supere su ayuda. Y construir en torno a individuos motivados significa empezar con voluntarios y con las preguntas que les importan.

La hoja de ruta respeta los demás temas de esta parte. Da por supuestas las reglas básicas de confianza del tema de implantación (véase el tema 11.3, Implantar métricas sin sembrar miedo), usa los principios de diseño de paneles (véase el tema 11.1, Diseño de un panel de métricas de servicio), mantiene delgadas las herramientas hasta que se demuestre el valor (véase el tema 11.2, Panorama de herramientas) y sigue el progreso con el perfil de madurez del programa (véase el tema 11.4, Modelo de madurez para programas de métricas).

Tres ideas ayudan a anclar el trabajo inicial. Primero, empieza con una línea base. Un [gráfico de secuencia](https://en.wikipedia.org/wiki/Run_chart) (run chart) de unos meses de datos existentes muestra cómo están las cosas y da a los cambios posteriores algo con lo que compararse. Segundo, comprueba la [calidad de los datos](https://en.wikipedia.org/wiki/Data_quality) al principio, ya que las mejoras iniciales más valiosas suelen venir de arreglar cómo se registra el trabajo y no de ningún gráfico. Tercero, haz visibles los resultados: un [radiador de información](https://en.wikipedia.org/wiki/Information_radiator), una pantalla que muestra información de un vistazo sin que nadie la pida, ayuda a un equipo a ver sus propios datos e iniciar conversaciones. Los primeros pasos suelen tomar la forma de un [proyecto piloto](https://en.wikipedia.org/wiki/Pilot_project) con participantes dispuestos, seguido de extender lo que funcionó como [gestión del cambio](https://en.wikipedia.org/wiki/Change_management) en la organización más amplia (véase el tema 9.6, Métricas de cambio organizacional y adopción).

Ninguna hoja de ruta encaja con todas las organizaciones. El plan siguiente es un punto de partida que deben adaptar las personas que lo llevarán a cabo.

## Principios clave

- **Empieza donde estás.** Usa los datos, las herramientas y los hábitos que tienes. No esperes a una plataforma nueva.
- **Haz un piloto con voluntarios.** De uno a tres equipos dispuestos, que trabajen sobre preguntas que les importan.
- **Aporta valor durante el primer mes.** Algo que ayude a un equipo, no un informe para la dirección.
- **Una rebanada delgada cada vez.** Una fuente, una vista, un puñado de medidas, y luego amplía.
- **Escribe pronto las promesas.** Una carta breve antes de compartir el primer número.
- **Revisa y ajusta.** Comprueba al final de cada etapa qué ayudó, qué dañó y qué cambiar.
- **Deja de hacer cosas.** Retira las medidas y los informes que nadie usa a medida que llegan los nuevos.
- **No te saltes la confianza.** Avanzar deprisa en las herramientas dejando atrás la confianza produce distorsión.

## Definiciones de métricas

Las medidas siguientes siguen el progreso de la propia adopción. Son para el equipo del programa y los patrocinadores, y se leen como señales, no como metas. Evitan los recuentos de paneles o de informes, que premiarían la actividad.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo hasta el primer resultado útil | Tiempo transcurrido desde el inicio del programa hasta la primera medida que un equipo piloto dice que le ayudó a hacer un cambio | días desde el arranque hasta el primer uso útil confirmado por el equipo | días | Registro del programa; confirmación del equipo | Mejora continua | Entrega temprana y continua de valor | Una vez, luego por cada equipo nuevo |
| Equipos que usan activamente las medidas | Proporción de los equipos invitados que usaron sus medidas en una revisión en el periodo, según su propia versión | equipos que usaron medidas en una revisión / equipos invitados | porcentaje | Confirmación del equipo; notas de revisión | Gestión del cambio organizacional | Implicación continua de las partes interesadas | Mensual |
| Mejoras atribuidas a las medidas | Número de cambios que los equipos hicieron y que atribuyen, con razones, a lo que mostró una medida | recuento de cambios informados por equipos con un vínculo declarado a una medida | recuento | Registro de mejoras | Mejora continua | Experimentos informados por la evidencia | Trimestral |
| Medidas e informes retirados | Medidas o informes detenidos porque dejaron de informar decisiones | recuento de retirados por trimestre | recuento | Registro de cambios del catálogo | Mejora continua | Evolución constante | Trimestral |
| Cobertura de líneas base | Proporción de las medidas acordadas que tienen una línea base registrada de al menos unos meses | medidas con una línea base / medidas acordadas | porcentaje | Catálogo de métricas | Gestión de niveles de servicio; mejora continua | Evidencia sobre opinión | Trimestral |
| Proporción de esfuerzo del programa | Proporción del tiempo de los equipos participantes dedicada a tareas de medición | horas de recopilación, informes y revisión / horas totales del equipo, por estimación | porcentaje | Estimaciones de tiempo de los equipos | Mejora continua | Ritmo sostenible | Trimestral |
| Finalización de revisiones de etapa | Proporción de las revisiones de etapa planificadas celebradas con los equipos, con los cambios registrados | revisiones celebradas con cambios registrados / revisiones planificadas | porcentaje | Registros del programa | Mejora continua | Reflexión regular | Por etapa |

El tiempo hasta el primer resultado útil se mide según la versión del propio equipo piloto y no la del programa. Los equipos que usan activamente las medidas se cuentan por lo que dicen los equipos, y no por los inicios de sesión. Las mejoras atribuidas a las medidas son un recuento de vínculos declarados y no una meta, ya que una meta produciría vínculos inventados. La proporción de esfuerzo del programa debe seguir siendo pequeña, y un aumento es una advertencia.

## Recomendaciones

### Días 1 a 30: escuchar, acordar y entregar una cosa útil

**1. Encuentra a un patrocinador y a unos pocos voluntarios.** Pide a un líder sénior que patrocine el programa y firme una carta breve. Invita a uno a tres equipos curiosos y respetados. Explica que la meta es ayudarles a ver su propio trabajo y mejorarlo, y que los datos no se usarán para clasificar ni evaluar a individuos (véase el tema 11.3, Implantar métricas sin sembrar miedo).

**2. Haz las preguntas.** Reúnete una hora con cada equipo piloto. Pregunta qué los frena, qué los sorprende y qué desearían saber. Escribe las preguntas. Elige de tres a cinco medidas de este libro que hablen de esas preguntas, cada una con su barrera de protección compañera (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

**3. Mira los datos que ya tienes.** Extrae unos meses de historial de los sistemas de registro y traza gráficos de secuencia. Comprueba con honestidad la calidad de los datos: campos que faltan, categorías cambiadas, registros creados a posteriori. Arregla la captura en el origen donde sea barato. Una hoja de cálculo sencilla basta en esta etapa (véase el tema 1.5, Fuentes de datos e instrumentación).

**4. Entrega una cosa útil.** Al final del primer mes, da a cada equipo piloto una pequeña vista de sus propios datos con una definición de cada medida, y celebra una conversación de revisión. Busca un cambio que sugieran los datos, como quitar un paso de espera, y ayuda al equipo a probarlo. El primer resultado útil importa más que una herramienta pulida.

### Días 31 a 90: aprender, ampliar y volverlo rutina

**5. Celebra la primera revisión con los equipos piloto.** Pregunta qué ayudó, qué confundió, qué pareció arriesgado y qué cambiarían. Revisa las medidas, las definiciones y la carta. Escucha especialmente las señales de miedo o de manipulación. Comparte una breve historia de lo que cambió, contada por el equipo.

**6. Automatiza el camino delgado.** Donde el trabajo manual sea pesado, automatiza los uno o dos flujos que más importan, con comprobaciones de frescura y de conciliación con el origen. Mantén las definiciones en un catálogo llano y portable. No compres aún una plataforma, salvo que la prueba haya mostrado que las herramientas existentes no pueden hacer el trabajo (véase el tema 11.2, Panorama de herramientas).

**7. Establece un ritmo de revisión.** Celebra una breve revisión mensual en cada equipo piloto que mire las tendencias, registre las decisiones y anote los eventos. Incluye la oportunidad de decir "sin acción". Añade una mirada trimestral a todo el programa con los patrocinadores, usando vistas agregadas y comentarios de los equipos.

**8. Invita a la siguiente oleada.** Ofrece el enfoque a más equipos, guiados por las historias de los equipos piloto. Deja que cada equipo nuevo elija sus medidas de un menú, con un pequeño núcleo común. Mantén sostenible el ritmo: unos pocos equipos cada vez, con el apoyo de los equipos piloto y de la responsable del programa.

### Días 91 a 180: reforzar, equilibrar y prepararse para el traspaso

**9. Diseña las vistas de audiencia.** Con la audiencia, diseña las vistas del responsable del servicio y del liderazgo descritas en el tema del panel, usando definiciones compartidas y los comentarios de los equipos (véase el tema 11.1, Diseño de un panel de métricas de servicio). Mantén pequeña cada vista. Retira los informes más antiguos a los que sustituyen.

**10. Añade equilibrio y resultados.** Amplía las medidas piloto a un conjunto equilibrado que incluya calidad, fiabilidad, experiencia y costo, con resultados junto a la actividad (véase el tema 6.5, Realización de valor y resultados de negocio). Comprueba en cada medida nueva su vector de manipulación y su barrera de protección antes de mostrarla.

**11. Evalúa el programa.** Realiza la autoevaluación del tema del modelo de madurez con cada equipo participante, informa del perfil y de los temas y elige uno o dos pasos siguientes en la dimensión que limita a las demás (véase el tema 11.4, Modelo de madurez para programas de métricas). Cuenta lo que has retirado además de lo que has añadido.

**12. Decide qué viene después.** En la revisión de los 180 días, con los equipos y los patrocinadores, decide si continuar, ajustar o parar. Escribe lo que ha hecho el programa, con qué esfuerzo y qué ha cambiado en los servicios. Elige la etapa siguiente: más equipos, herramientas más profundas, vínculos con medidas financieras o de clientes, o consolidación. Registra la decisión y las razones.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tiempo hasta el primer resultado útil | Declarar útil un cambio trivial; apresurar una pieza de exhibición | Preguntar al equipo qué cambió; comprobar que el cambio persistió |
| Equipos que usan activamente las medidas | Revisiones celebradas para marcar una casilla; afirmar un uso que no ocurrió | Pedir la decisión tomada; muestrear las notas de revisión; hablar con los equipos |
| Mejoras atribuidas a las medidas | Inventar vínculos para llegar a un recuento; reclamar mérito por cambios no relacionados | Mantenerlo descriptivo; pedir al equipo el razonamiento; aceptar los vínculos inciertos como tales |
| Medidas e informes retirados | Retirar medidas incómodas; retirar y reintroducir con nombres nuevos | Revisar la lista de retirados en busca de tendencias desfavorables; exigir un motivo declarado |
| Cobertura de líneas base | Fabricar historial; usar un periodo que favorezca los resultados posteriores | Registrar la fuente y el periodo; conservar los datos en bruto; elegir las líneas base antes de los cambios |
| Proporción de esfuerzo del programa | Subestimar el esfuerzo; trasladar el trabajo a personas fuera del recuento | Preguntar a las personas que hacen el trabajo; comparar con las horas extra de final de ciclo |
| Finalización de revisiones de etapa | Revisiones cortas y rutinarias; registrar cambios que nunca ocurren | Comprobar que los cambios se llevan a cabo; preguntar a los equipos si la revisión valió su tiempo |

Una lectura sana muestra un primer resultado útil dentro del primer mes o dos, equipos que usan las medidas porque las encuentran útiles, un puñado de cambios atribuidos, informes retirados junto a los nuevos, una proporción de esfuerzo modesta y estable y revisiones de etapa que llevan a cambios reales en el plan.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Piloto con voluntarios | Confianza; historias reales | Arranque más lento; sesgo de selección |
| Implantación en todos los equipos a la vez | Cobertura rápida | Resistencia; distorsión |
| Primero hojas de cálculo | Rápido; bajo costo; aprendizaje | Frágil; esfuerzo manual |
| Primero la plataforma | Pulido; escala | Costo; mal encaje antes de que las preguntas estén claras |
| Pocas medidas por equipo | Foco; poca carga | Puede perder áreas importantes |
| Muchas medidas a la vez | Amplitud | Sobrecarga; proliferación |
| Plan fijo de 180 días | Claridad para los patrocinadores | Rígido; ignora lo aprendido |
| Revisiones de etapa que cambian el plan | Aprendizaje; encaje | Menos predecible para los patrocinadores |

La respuesta en prosa es empezar con voluntarios y hojas de cálculo, ampliar a medida que se demuestra el valor, dar a los patrocinadores una forma clara y puntos de revisión y permitir que el plan cambie.

## Preguntas para conversar con tu equipo

**1. ¿Qué pregunta sobre nuestro trabajo desearíamos poder responder este mes?**
Reúne preguntas de todos. Elige la que más importa y podría responderse con datos que ya tenemos. Acordad cómo sería una respuesta útil.

**2. ¿Qué medimos ya, y quién lo mira?**
Enumera los informes existentes y sus audiencias. Marca los que nadie usa. Decide cuáles retirar para dejar sitio a los nuevos.

**3. ¿Qué nos haría dispuestos a probar esto durante un mes?**
Escucha las condiciones: una carta, voz en las medidas, tiempo limitado. Acordadlas con el patrocinador antes de empezar.

**4. ¿Qué pequeño cambio podrían sugerir los primeros datos?**
Mirad juntos unos meses de historial. Nombra un posible cambio y un resultado esperado. Acordad cómo sabremos si ayudó.

**5. ¿Cuánto de nuestro tiempo podemos dar a esto sin dañar el trabajo?**
Estima en horas por mes. Acordad un límite, y revisadlo en la primera revisión de etapa.

**6. ¿Cuándo deberíamos parar o cambiar el plan?**
Describe señales: ningún resultado útil, miedo creciente, esfuerzo pesado. Acordad quién decide y cómo se registrará la decisión.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos piloto cargan con el riesgo inicial y dan la prueba inicial. Deben pedir la carta, elegir sus propias medidas, usar las primeras vistas en sus propias revisiones e informar con honestidad de lo que ayudó y lo que no. Se benefician cuando el primer resultado quita un obstáculo real.

### Equipos de servicio y operaciones

Los equipos de operaciones aportan buena parte de los datos y a menudo tienen la mayor carga. Deben ayudar a evaluar la calidad de los datos, señalar dónde una medida premiaría el comportamiento equivocado y proteger el tiempo de las guardias y del trabajo de incidentes. Su ritmo sostenible es una restricción fija del plan.

### Liderazgo y gobernanza

Los líderes patrocinan, firman la carta y protegen el programa del mal uso. Deben aceptar un comienzo modesto, pedir resultados e historias en lugar de recuentos de paneles, evitar pedir clasificaciones y dejar que el plan cambie a medida que el programa aprende. Deben juzgarlo por las decisiones que mejoraron.

### Clientes y usuarios

Los clientes y los usuarios ganan cuando el programa lleva a mejores servicios. Pueden participar en la elección de medidas de experiencia y en la revisión de lo que se reúne sobre ellos. Deben ver cambios que se derivan de sus comentarios.

## En la práctica: un ejemplo de ITIL ágil

Una autoridad de transporte público de tamaño medio tiene 12 equipos repartidos entre servicios digitales, tecnología de operaciones y un centro de servicios. Un nuevo director de sistemas de información quiere "un programa de métricas en seis meses". Un intento anterior compró una plataforma y produjo paneles que pocos abrían. Las cifras siguientes son ilustrativas.

La jefa de mejora de servicios propone una hoja de ruta de 180 días con revisiones de etapa en los días 30, 90 y 180. En la primera semana se reúne con el director de sistemas de información, que firma una carta de una página, e invita a tres equipos voluntarios: el centro de servicios, un equipo de información al pasajero y un equipo de operaciones de infraestructura. En sesiones de una hora cada equipo expone sus preguntas. El centro de servicios quiere saber por qué vuelven los mismos problemas de los clientes. El equipo de información al pasajero quiere saber si sus cambios rompen cosas. El equipo de infraestructura quiere saber cuánto de su tiempo se va en trabajo no planificado.

Para cada equipo elige de tres a cinco medidas de este libro, con barreras de protección, y construye gráficos de secuencia en una hoja de cálculo compartida a partir de los cinco meses anteriores de datos. La comprobación de datos descubre que el 27 por ciento de los registros de cambios del equipo de información al pasajero se creó después del despliegue, y que las categorías del centro de servicios se habían reorganizado a mitad del periodo. Arreglar el hábito de entrada y asignar las categorías lleva dos semanas. El día 27 el centro de servicios ve que el 19 por ciento de sus contactos eran regresos en una semana, concentrados en dos categorías vinculadas a una página de horarios confusa. El equipo trabaja con el de información al pasajero para cambiar la página. El centro de servicios lo confirma como el primer resultado útil, el día 27.

En la revisión del día 30 los equipos piden definiciones más cortas y un número menor de gráficos, y uno pregunta si los datos se usarían en sus evaluaciones anuales. La carta se aclara para decir que no. Entre los días 31 y 90, la jefa automatiza dos flujos, establece una revisión mensual en cada equipo que registra decisiones e invita a cuatro equipos más apoyándose en las historias del piloto. Los equipos que usan activamente las medidas son 7 de 7 invitados. En la revisión del día 90, los equipos informan de cinco cambios que atribuyen a sus medidas. El programa ha retirado tres antiguos informes semanales. La proporción de esfuerzo se estima en el 3 por ciento del tiempo de los equipos. Entre los días 91 y 180, la jefa diseña con esas audiencias las vistas del responsable del servicio y del liderazgo, añade medidas de experiencia y de costo al conjunto equilibrado y realiza la autoevaluación: la mayoría de los equipos están en el Nivel 2 en uso en las decisiones y en el 3 en confianza y seguridad, y el paso siguiente elegido es un registro de decisiones en cada equipo. El día 180 el director de sistemas de información pide una clasificación de los 12 equipos por su madurez. La jefa ofrece el perfil agregado y los temas, explica la carta y la petición se retira. Los patrocinadores acuerdan extender el programa a los cinco equipos restantes durante los dos trimestres siguientes, todavía de forma voluntaria.

## Perspectiva por sector

**Startup.** Comprime la hoja de ruta. En dos semanas, acordad tres preguntas y dos o tres medidas, y miradlas juntos cada semana o cada quince días. Usa lo que ya tienes. Revisa tras un trimestre. Una startup que espera a construir herramientas perderá el hábito de mirar.

**Pequeña empresa.** Los primeros 30 días pueden ser una sola conversación, una lista de preguntas de una página, una hoja de cálculo y un cambio. Las etapas siguientes implican una mirada mensual regular. El principal riesgo es que la persona que lo montó se convierta en la única que lo entiende, así que escribe qué significa cada medida.

**Gran empresa.** Usa oleadas de voluntarios, un pequeño equipo central que apoye y no posea las medidas, definiciones compartidas y revisiones de etapa con los patrocinadores. Resiste una única fecha global. Espera dedicar la primera etapa a arreglar la captura de datos, y planifica la coordinación con seguridad, privacidad y comités de empresa o representantes del personal donde existan.

**Gobierno y sector público.** La consulta con los representantes del personal y una comunicación clara a los órganos de supervisión forman parte del trabajo inicial. Los ciclos de contratación suelen favorecer empezar con herramientas ya en propiedad. Mantén separados los informes obligatorios y las medidas de mejora, y documenta las decisiones para la auditoría (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de los primeros 180 días son sobre todo tiempo de las personas: la responsable del programa, un pequeño esfuerzo de análisis, una parte del tiempo de los equipos piloto y la atención del patrocinador. Los costos de herramientas pueden ser bajos o nulos en las primeras etapas. El costo mayor es el de equivocarse en los primeros pasos, por ejemplo lanzando medidas sin confianza.

Los retornos aparecen pronto si el primer paso está bien elegido: un cambio que sugirieron los datos, informes que se retiraron, menos disputas sobre los números y equipos que piden más. Construye el caso con tu propio registro: días hasta el primer resultado útil, los cambios que los equipos atribuyen a las medidas, horas ahorradas en informes retirados y esfuerzo gastado. Evita citar cifras externas sobre los retornos de la analítica sin una fuente rastreable y relevante para tu entorno. La afirmación creíble es modesta y local (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **El lanzamiento de golpe.** Meses de diseño y luego una sorpresa. Entrega pronto una rebanada delgada.
- **Primero la plataforma.** Las herramientas llegan antes que las preguntas. Empieza con lo que tienes.
- **Contar paneles.** Se mide la actividad y se ignora el valor. Sigue las decisiones y los cambios.
- **Saltarse la carta.** El miedo llena el vacío. Escribe las promesas antes de mostrar el primer número.
- **Demasiados equipos a la vez.** El apoyo se derrumba. Extiéndete en oleadas pequeñas.
- **No parar nunca nada.** Los informes viejos permanecen junto a los nuevos. Retira a medida que añades.
- **Un plan fijo defendido frente a la evidencia.** El plan debe cambiar a medida que aprendes.
- **Rendirse tras el primer fallo.** Los primeros intentos enseñan. Revisa, ajusta y vuelve a intentarlo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Arranque y piloto | Sin plan; informes ad hoc | Equipos interesados prueban medidas por su cuenta | Carta, patrocinador y pilotos voluntarios con un primer resultado útil | El aprendizaje del piloto guía los planes de oleadas; tiempo hasta el valor seguido | Los equipos extienden el enfoque entre sí; se suman patrocinadores y socios |
| Ampliación y cadencia | Esfuerzos aislados | Algunas revisiones regulares | Revisiones mensuales de equipo y trimestrales del programa | Proporción de esfuerzo, retirada y cambios atribuidos gestionados | Las revisiones se vinculan entre equipos y servicios; la cadencia se adapta a la necesidad |
| Aprendizaje y ajuste | Plan fijo o ausente | Lecciones ocasionales compartidas | Las revisiones de etapa cambian el plan | Pasos de la hoja de ruta atados al perfil de madurez | El programa mejora continuamente con las aportaciones de todos |

## Lista de verificación

- [ ] Un patrocinador ha firmado una carta breve antes de compartir el primer número.
- [ ] Uno a tres equipos voluntarios han expuesto sus preguntas con sus propias palabras.
- [ ] Existe una línea base de varios meses de datos y una comprobación de calidad de los datos para cada medida piloto.
- [ ] Cada equipo piloto tiene una vista pequeña con una definición de cada medida.
- [ ] Se entrega un primer resultado útil, confirmado por el equipo, durante el primer mes o dos.
- [ ] Existe un ritmo de revisión en cada equipo piloto que registra decisiones.
- [ ] Los informes viejos se retiran a medida que los sustituyen vistas nuevas.
- [ ] El esfuerzo que el programa pide a los equipos se estima y se mantiene pequeño.
- [ ] Las revisiones de etapa de los días 30, 90 y 180 se celebran con los equipos, y el plan cambia como resultado.
- [ ] La etapa siguiente se decide con los equipos y los patrocinadores y se registra con las razones.

## Prompts de IA

**Redacta un plan de 180 días.**

```text
Redacta una hoja de ruta de 180 días para introducir un programa de métricas de
servicio en [organization type] con [number] equipos. Usa revisiones de etapa en
los días 30, 90 y 180. Para cada etapa, enumera las metas, las actividades, las
personas implicadas, el tiempo pedido a los equipos, el primer resultado útil
esperado y los riesgos. Empieza con equipos piloto voluntarios, una carta y las
herramientas existentes. No prometas resultados. Enumera tus supuestos.
```

**Elige las primeras medidas.**

```text
Un equipo piloto describe sus problemas así: [paste]. Sugiere de tres a cinco
medidas para empezar, cada una con una definición, una fuente de datos, el
vector de manipulación más probable y una barrera de protección compañera.
Prefiere los datos que el equipo ya tiene. No inventes cifras. Enumera tus
supuestos y qué comprobar sobre la calidad de los datos.
```

**Realiza una comprobación de calidad de los datos.**

```text
Aquí hay una descripción de muestra de los campos y valores de nuestros
registros de [system]: [paste]. Identifica los probables problemas de calidad
para medir el plazo de entrega, el fallo de cambio y los contactos de retorno,
como campos que faltan, categorías cambiadas y registros creados a posteriori.
Sugiere comprobaciones sencillas y arreglos en el origen. No adivines contenidos
que no puedes ver. Enumera tus supuestos.
```

**Planifica una revisión de etapa.**

```text
Planifica una revisión de etapa de 45 minutos para el día [30, 90, or 180] con
los equipos piloto y el patrocinador. Incluye preguntas sobre qué ayudó, qué
pareció arriesgado, qué esfuerzo llevó, qué parar y qué cambiar en el plan.
Incluye cómo registrar las decisiones y compartir una breve historia de lo que
cambió. No clasifiques a los equipos. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para elegir medidas iniciales con sus barreras de protección emparejadas para un equipo piloto.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una hoja de ruta mantiene las medidas a nivel de equipo y lleva un vector de manipulación para cada medida introducida.

## Puntos clave

- Empieza donde estás, con voluntarios, una carta y los datos y las herramientas que ya tienes.
- Entrega un resultado útil a un equipo durante el primer mes o dos.
- Amplía en oleadas pequeñas, y retira informes a medida que los sustituyen vistas nuevas.
- Comprueba pronto la calidad de los datos y arregla la captura en el origen.
- Celebra revisiones de etapa que cambien el plan, y mantén pequeño el esfuerzo pedido a los equipos.
- Decide la etapa siguiente con los equipos y los patrocinadores, y registra las razones.

## Referencias y lecturas complementarias

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
