# Implantar métricas sin sembrar miedo

**La medición funciona cuando la gente cree que los números describen su trabajo para ayudarla, así que implántala con transparencia, propiedad del equipo, promesas escritas sobre el uso y sin tablas de clasificación de individuos.**

## Resumen y motivación

Un programa de métricas triunfa o fracasa por la confianza. El mismo conjunto de medidas puede ser un espejo útil en una organización y una fuente de temor en otra. La diferencia rara vez son las medidas. Es lo que la gente cree que le ocurrirá por los números. Si cree que los números se usarán para clasificarla, culparla o reducirla, la respuesta sensata es protegerse: elegir trabajo que puntúe bien, retrasar el informe de problemas, discutir las definiciones y ajustar en silencio lo que se registra. Los datos dejan entonces de describir el trabajo, y el programa pierde justo lo que se construyó para ofrecer.

Este patrón es antiguo y bien conocido. El [efecto Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) describe la manera en que la gente cambia de comportamiento cuando sabe que la observan. La [ley de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) dice que cuanto más se usa un indicador cuantitativo para tomar decisiones, más sujeto estará a presiones de corrupción y más distorsionará el proceso que debía vigilar. La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) plantea algo similar sobre las metas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Ninguna de estas es una razón para evitar la medición. Son razones para diseñar la implantación de modo que los incentivos a distorsionar sean bajos y las razones para decir la verdad sean altas.

La [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety) es una creencia compartida de que un equipo es seguro para asumir riesgos interpersonales, como admitir un error, hacer una pregunta o dar malas noticias. Los programas de métricas dependen de ella y pueden erosionarla. Las medidas de fallo, retrabajo y demora solo son honestas cuando la gente se siente segura al informar de ellas (véanse el tema 9.2, Métricas de satisfacción y bienestar, y el tema 4.2, Métricas de análisis posteriores y aprendizaje). La [confianza](https://en.wikipedia.org/wiki/Trust_(social_science)) entre las personas medidas y las que usan las medidas es el activo subyacente, y se construye despacio y se gasta deprisa.

La [gestión del cambio](https://en.wikipedia.org/wiki/Change_management) es la disciplina de preparar y apoyar a las personas durante el cambio. Introducir métricas es un cambio organizacional, y merece el mismo cuidado que un proceso o una herramienta nuevos (véase el tema 9.6, Métricas de cambio organizacional y adopción). El [ciclo de vida de adopción de tecnología](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) describe cómo se difunden las innovaciones desde los entusiastas hasta una mayoría, lo que recuerda que un piloto respetado con equipos dispuestos consigue más que un mandato. Un [proyecto piloto](https://en.wikipedia.org/wiki/Pilot_project) es una prueba a pequeña escala que contrasta un enfoque antes de un compromiso más amplio. Un [radiador de información](https://en.wikipedia.org/wiki/Information_radiator) es una pantalla visible de información que la gente puede leer de un vistazo sin preguntar, lo que conviene a la transparencia cuando muestra los datos del equipo al equipo que los posee.

Los objetivos ágiles dan forma a la implantación. La implicación continua de las partes interesadas significa que las personas medidas ayudan a elegir las medidas y las reglas para su uso. La mejora continua significa que el propio programa cambia en respuesta a lo que dice la gente. La evolución constante significa que se espera que las medidas cambien, lo que rebaja lo que está en juego con cualquiera de ellas. Un ritmo sostenible significa que el programa no añade informes que desplacen el trabajo. Construir en torno a individuos motivados significa tratar a las personas como adultos capaces que pueden usar datos para mejorar su propio trabajo, y no como recursos que vigilar. La postura práctica es sencilla: mide el sistema, comparte los datos con las personas que lo componen y deja que lideren la mejora.

El tema funciona con la orientación sobre paneles (véase el tema 11.1, Diseño de un panel de métricas de servicio) y con la gobernanza de las medidas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Principios clave

- **Di para qué son los datos y para qué no.** Escribe ambas cosas y cúmplelas.
- **Los equipos poseen sus medidas.** Las personas que hacen el trabajo ayudan a definir, ver e interpretar los números sobre él.
- **Mide sistemas, no individuos.** Sin tablas de clasificación, sin puntuaciones por persona, sin usar los datos en las evaluaciones de desempeño individuales.
- **Sé transparente.** Comparte las definiciones, las fuentes de datos y quién puede ver qué. Las sorpresas engendran sospechas.
- **Empieza con voluntarios.** Un piloto voluntario produce historias y arreglos antes de la implantación más amplia.
- **Muestra el uso.** Demuestra que los números llevan a ayuda, como quitar un obstáculo, y no a culpas.
- **Permite el cuestionamiento.** La gente puede cuestionar un número, y las correcciones se hacen con rapidez y de forma visible.
- **Ve a un ritmo sostenible.** Unas pocas medidas cada vez, con tiempo para aprender.

## Definiciones de métricas

Las medidas siguientes dicen al equipo del programa si la implantación está construyendo o gastando confianza. Describen equipos y el programa, no individuos. Varias se apoyan en encuestas y en la observación del comportamiento, y se leen mejor como señales sobre las que conversar.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de la carta de uso | Proporción de los equipos participantes que han acordado una declaración escrita de para qué se usan sus medidas y para qué no se usan nunca | equipos con una carta acordada / equipos participantes | porcentaje | Cartas conservadas por el programa | Gobernanza; gestión del cambio organizacional | Acuerdos de trabajo | Trimestral |
| Proporción de propiedad del equipo | Proporción de las medidas mostradas a un equipo cuyas definiciones el equipo ayudó a redactar o ha aprobado | medidas con aprobación del equipo / medidas mostradas al equipo | porcentaje | Catálogo de métricas; registros de aprobación | Mejora continua | Equipos autoorganizados | Trimestral |
| Señal de franqueza | Si el informe de problemas y de casi-incidentes se mantiene estable o aumenta tras introducir las medidas | informes de casi-incidentes o de problemas por equipo por trimestre, antes y después; tendencia | informes | Registros de incidentes, casi-incidentes y análisis posteriores | Gestión de incidentes; mejora continua | Reflexión sin culpas | Trimestral |
| Plazo de respuesta a cuestionamientos | Tiempo desde que una persona o un equipo cuestiona un número hasta una resolución visible para ellos | mediana y percentil 85 de días desde el cuestionamiento hasta la resolución | días | Registro de cuestionamientos | Mejora continua; gestión del conocimiento | Responder a la retroalimentación | Trimestral |
| Seguridad percibida de la medición (encuesta) | Acuerdo en una encuesta a nivel de equipo con afirmaciones como "los datos sobre nuestro trabajo se usan para ayudarnos" | porcentaje de acuerdo en la encuesta del equipo; tasa de respuesta mostrada | porcentaje | Encuesta anónima de equipo, agregada | Gestión del cambio organizacional | Confianza e individuos motivados | Dos veces al año |
| Incidentes de uso individual | Casos en que se mostraron o usaron datos para clasificar o evaluar a individuos, contra la carta | recuento de casos informados por trimestre, con resultados | recuento | Informes al programa; revisión de paneles y de evaluaciones | Gobernanza | Respeto por las personas | Trimestral |
| Adopción voluntaria | Proporción de los equipos elegibles que optaron por incorporarse al programa en un periodo, antes de cualquier mandato | equipos que se incorporaron voluntariamente / equipos elegibles invitados | porcentaje | Registros del programa | Gestión del cambio organizacional | Pilotos y aprendizaje | Trimestral |

La encuesta de seguridad percibida necesita un tamaño mínimo de grupo para informar, de modo que no pueda identificarse a ningún individuo, y debe ser anónima. La señal de franqueza debe leerse con cuidado: un aumento de los informes puede significar más problemas o más disposición a informar de ellos, y lo segundo es lo que suele producir al principio un programa sano. Los incidentes de uso individual no son un recuento que ocultar. La meta es que cada caso se informe, se trate y se corrija, y un número pequeño de casos informados es señal de que funciona la vía de informe, no de un fallo del programa. La adopción voluntaria solo se cuenta para el periodo anterior a cualquier mandato.

## Recomendaciones

### Fija primero las reglas básicas

**1. Escribe las promesas y publícalas.** Antes de mostrar el primer número, escribe una carta breve. Una buena dice que las medidas describen equipos, servicios y sistemas y que nunca se usan para clasificar individuos ni en las evaluaciones de desempeño individuales. Dice quién puede ver qué, cuánto tiempo se conservan los datos, cómo puede la gente cuestionar un número y qué ocurre si se rompen las reglas. Los altos líderes la firman. La carta es un compromiso que permite a la gente bajar la guardia, y debe ser fácil de encontrar y de leer.

**2. Separa la medición para mejorar de la medición para juzgar.** Los equipos usan sus medidas para mejorar su propio trabajo. Los líderes usan vistas agregadas para dirigir el apoyo y la inversión. Ninguno de los dos usos consiste en evaluar a una persona. Si una organización debe evaluar a individuos, debe hacerlo mediante conversación, evidencia y contexto, y nunca leyendo un panel (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

**3. Sé abierto sobre las compensaciones.** Di a la gente que toda medida puede manipularse, que sabes de qué maneras y que cada una trae una barrera de protección. Muestra los vectores de manipulación y las barreras de protección al estilo de este libro. Nombrar los riesgos abiertamente demuestra buena fe, e invita a la gente a señalar las formas que se te hayan escapado.

### Haz de los equipos los propietarios

**4. Deja que los equipos elijan y definan.** Ofrece un menú de medidas y deja que cada equipo escoja unas pocas para empezar, adapte las definiciones con una razón declarada y añada las suyas. Los equipos que eligieron sus medidas tienen más probabilidad de usarlas con honestidad. Mantén un pequeño núcleo común para que los servicios puedan compararse al nivel en que la comparación es válida (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**5. Muestra primero a los equipos sus datos.** Da a cada equipo sus números antes de que los vea nadie más, con tiempo para comprobarlos, corregirlos y añadir contexto. El equipo posee la historia. Cuando después se muestren los datos a los líderes, el equipo los presenta o los anota. Esto evita sorpresas y asegura que la interpretación venga de las personas más cercanas al trabajo.

**6. Mantén las vistas en el nivel adecuado.** Muestra vistas a nivel de equipo y de servicio. No muestres desgloses por persona, y desactiva las funciones de las herramientas que los muestran. Donde sea necesaria una vista detallada para una investigación, como el historial de un solo incidente, limita el acceso, explica por qué y mantenla fuera de las conversaciones de evaluación (véase el tema 11.2, Panorama de herramientas).

### Impleméntalo para ganar confianza

**7. Haz un piloto con voluntarios.** Invita a dos o tres equipos curiosos y respetados. Trabaja con ellos las medidas y las reglas. Deja que cuenten sus propias historias a sus pares. Sus arreglos y sus objeciones mejorarán el programa, y su respaldo pesa más que cualquier anuncio. Pregunta qué cambiarían antes de la implantación más amplia, y cámbialo.

**8. Aporta valor pronto y de forma visible.** En las primeras semanas, usa los datos para quitar algo que moleste al equipo: una cola que siempre espera, un paso de aprobación sin propósito, un informe que nadie lee. Cuando la gente ve que los números llevan a ayuda, ofrece datos más honestos. Cuando ve que los números llevan a preguntas sobre ella, ofrece menos.

**9. Responde rápido a los cuestionamientos.** Cuando alguien dice que un número es erróneo, tómalo en serio. Compruébalo, arregla la definición o los datos y di públicamente lo que se hizo. Una corrección rápida y respetuosa construye confianza, y una respuesta a la defensiva la gasta. Mantén un registro de cuestionamientos, y trata los cuestionamientos repetidos como señales de que la medida necesita trabajo.

### Protege la confianza con el tiempo

**10. Vigila las señales de miedo.** Las señales incluyen equipos que discuten las definiciones para evitar resultados, mejoras repentinas que no coinciden con otras señales, menos problemas informados, trabajo elegido para quedar bien y gente que pregunta quién puede ver los datos. Trátalas como información sobre el programa y no como mala conducta. Pregunta a los equipos, escucha y ajusta.

**11. Haz que los líderes cumplan la carta.** Los líderes están bajo presión para comparar, clasificar y explicar. Dales lo que pueden usar legítimamente: tendencias, distribuciones y medidas de resultados a nivel de equipo y de servicio. Facilita informar de un incumplimiento de la carta, responde a cada informe y publica el resultado, sin nombrar a los individuos que lo plantearon. Una sola violación visible puede deshacer meses de trabajo, y una corrección visible puede reconstruirlo.

**12. Revisa el programa con las personas que lo componen.** Cada trimestre, pregunta a los equipos para qué ayudan las medidas, qué distorsionan y qué dejarían. Retira las medidas que no superen la prueba. Comparte los resultados de la revisión. Un compromiso continuo y visible de mejorar el programa es la señal más fuerte de que existe para servir a los equipos (véase el tema 9.5, Métricas de mejora continua).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura de la carta de uso | Firmar las cartas por formalidad; líderes que las ignoran | Comprobar el uso de la carta en la práctica; informar de los incidentes de uso individual; revisar las cartas con los equipos |
| Proporción de propiedad del equipo | Equipos que aprueban definiciones que no leyeron; el programa que presenta definiciones terminadas para su firma | Muestrear cómo se elaboraron las definiciones; seguir los cambios que los equipos pidieron y obtuvieron |
| Señal de franqueza | Presionar a los equipos para que informen de más o de menos problemas; renombrar las categorías | Leerla con la gravedad y el contenido de los análisis posteriores; comparar con los problemas notificados por los clientes |
| Plazo de respuesta a cuestionamientos | Cerrar cuestionamientos sin una resolución visible; desalentar los cuestionamientos | Exigir una respuesta visible; encuestar a quienes cuestionan; seguir los cuestionamientos repetidos |
| Seguridad percibida de la medición (encuesta) | Aleccionar a los encuestados; bajas tasas de respuesta que ocultan equipos descontentos | Anonimato y tamaño mínimo de grupo; mostrar las tasas de respuesta; hablar directamente con los equipos |
| Incidentes de uso individual | No informar; reclasificar los incidentes como otra cosa; culpar a quienes informan | Informe anónimo y fácil; protección para quienes informan; revisión de las evaluaciones y los paneles en busca de datos individuales |
| Adopción voluntaria | Presión disfrazada de invitación; contar equipos que se incorporaron para evitar el escrutinio | Preguntar a los equipos por qué se incorporaron; comprobar el uso en la práctica; mantener el periodo libre de mandato |

Una lectura sana muestra cartas a las que los equipos recurren de verdad, medidas que los equipos ayudaron a moldear, informes de problemas estables o crecientes, cuestionamientos respondidos con rapidez, una encuesta que muestra que la gente cree que los datos la ayudan, unos pocos incumplimientos informados que se trataron abiertamente y equipos que se incorporaron porque quisieron.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Implantación obligatoria en todos los equipos a la vez | Rápida y coherente | Cumplimiento sin convicción; manipulación y resentimiento |
| Pilotos voluntarios, luego extensión | Construye historias y confianza | Más lenta; cobertura desigual |
| Los equipos eligen todas sus medidas | Mucha apropiación | Difícil de comparar; brechas de cobertura |
| Núcleo común más elección del equipo | Equilibrio entre comparación y apropiación | Necesita gobernanza |
| Paneles abiertos entre equipos | Transparencia; aprendizaje compartido | Riesgo de comparaciones y clasificaciones |
| Vistas solo del equipo, con agregados compartidos | Espacio seguro para una reflexión honesta | Los líderes pueden sentirse a ciegas |
| Carta escrita | Promesas claras; base para cuestionar | Inútil si se ignora |
| Garantías informales | Rápidas | Olvidadas; sin recurso |

La respuesta en prosa es empezar con equipos dispuestos, darles la propiedad, compartir agregados hacia arriba con el consentimiento y el contexto del equipo y respaldar las promesas con una carta que se exija cumplir a los líderes.

## Preguntas para conversar con tu equipo

**1. ¿Qué creemos que ocurrirá con estos números, y qué hemos visto ocurrir en el pasado?**
Invita a contar historias honestas de medidas bien y mal usadas. El facilitador debe registrar los temores sin discutir. Acordad qué promesas harían más diferencia.

**2. ¿Qué escribiríamos en una carta que diga para qué no se usarán nunca nuestros datos?**
Redactadla juntos con palabras llanas. Incluid las evaluaciones de desempeño individuales, las clasificaciones y los despidos, si esa es la preocupación. Llevadla a los líderes que tendrían que firmarla.

**3. ¿Cuáles de las medidas propuestas elegiríamos y cuáles descartaríamos?**
Deja que cada persona vote en privado y compara. Discutid por qué algunas parecen amenazantes. Acordad un conjunto corto para probar durante un trimestre.

**4. ¿Cómo sabríamos si la gente empieza a ocultar problemas?**
Enumera señales: menos informes, lenguaje suavizado, trabajo evitado. Acordad quién vigila y cómo lo plantearíamos sin culpas.

**5. ¿Quién debería ver los números de nuestro equipo, en qué forma y cuándo?**
Discutid las opciones de solo el equipo, agregados para el liderazgo y comparación entre equipos. Decidid qué se comparte y quién lo presenta. Escribid la regla.

**6. Si un número sobre nosotros es erróneo, ¿cómo lo haremos corregir?**
Sigue el camino desde que se nota hasta la corrección. Identifica los retrasos y quién decide. Acordad una vía sencilla de cuestionamiento y un plazo esperado.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos cargan con el riesgo de ser medidos, y tienen el conocimiento de lo que significan los números. Deben participar en la elección y la definición de las medidas, usar los datos en sus propias revisiones y alzar la voz cuando un número engaña. Se benefician cuando ven primero los datos y cuando la medición ayuda a quitar obstáculos.

### Equipos de servicio y operaciones

Los equipos de operaciones suelen tener los datos más ricos y las cargas más pesadas de guardias e incidentes. Deben desconfiar de las medidas que premian el silencio o castigan la escalada, proteger el informe de incidentes y casi-incidentes y vigilar que los datos de guardia no se usen para clasificar a las personas (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

### Liderazgo y gobernanza

Los líderes fijan la cultura de uso. Deben firmar y cumplir la carta, pedir vistas de equipo y de servicio, responder abiertamente a los incumplimientos y evitar pedir clasificaciones. Deben juzgar el programa por la mejora que permite y por la franqueza que preserva, no por el número de paneles.

### Clientes y usuarios

Los clientes y los usuarios se benefician cuando los equipos informan con honestidad de los problemas y arreglan las causas. También pueden ser objeto de recogida de datos. Merecen claridad sobre qué se reúne sobre ellos y cómo se usa, y pueden ser socios al decidir qué medidas les muestran valor (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de ITIL ágil

La división de tecnología de un proveedor de servicios de salud introduce métricas en sus 15 equipos de entrega y de soporte. Un intento anterior, tres años antes, publicó una clasificación de equipos por tickets cerrados y terminó con un pico de cierres de tickets de poco valor y una caída de los incidentes informados. Las cifras siguientes son ilustrativas.

La nueva jefa de gestión de servicios empieza preguntando a seis jefes de equipo qué recuerdan. Describen la clasificación y sus consecuencias. Redacta con ellos una carta: las medidas describen equipos y servicios, nunca individuos; las vistas individuales se desactivan en las herramientas; los datos no se usan nunca en las evaluaciones individuales; los equipos ven primero sus datos; cualquier persona puede cuestionar un número, con una respuesta en diez días hábiles; y un incumplimiento se informará al programa y se revisará abiertamente. El director de tecnología la firma, y se publica en la página del programa.

Tres equipos se ofrecen como voluntarios para el piloto. Cada uno elige cuatro medidas de un menú y reescribe dos definiciones. Un equipo insiste en que el "tiempo de resolución" excluya el tiempo de espera de un cliente, y otro en que el fallo de cambio se defina por el impacto en el usuario y no solo por la reversión. El piloto muestra su primer beneficio en la tercera semana, cuando un equipo ve su trabajo esperando en una cola de aprobación y elimina un paso que nadie podía justificar. El equipo cuenta su historia en una reunión de la división. Otros siete equipos piden incorporarse. La adopción voluntaria llega a 10 de 15 equipos en dos trimestres, y los cinco restantes se incorporan después sin un mandato.

El programa vigila el miedo. Los informes de casi-incidentes por equipo suben en el primer trimestre, lo que la jefa interpreta como más disposición a informar, y lo confirma leyendo una muestra. Una encuesta de equipos con un tamaño mínimo de grupo muestra un 58 por ciento de encuestados de acuerdo en que "los datos sobre nuestro trabajo se usan para ayudarnos" al comienzo del segundo trimestre y un 76 por ciento al comienzo del cuarto. El plazo de respuesta a cuestionamientos tiene una mediana de cuatro días hábiles. Entonces una directora, preparando un caso presupuestario, pide una tabla que clasifique los equipos por número de despliegues. La responsable del programa le dice que queda fuera de la carta, le ofrece una vista de tendencias por servicio con comentarios del equipo y registra la petición como un casi-incidente de uso individual informado, con su resultado. La directora lo acepta. Dos trimestres después, los incidentes de uso individual son uno, informado, tratado y publicado sin nombres.

## Perspectiva por sector

**Startup.** El equipo es pequeño y la confianza es personal. Di en voz alta para qué son los números, deja que todo el equipo elija las pocas medidas que seguir y mantenlas fuera de cualquier conversación individual. El riesgo es que un comentario ocasional de un fundador sobre un número remodele el comportamiento de la noche a la mañana. Escribe la promesa, aunque sea en unas pocas líneas.

**Pequeña empresa.** El personal puede sospechar que los números tratan de recortar empleos. Habla abiertamente de por qué mides, qué mirarás y qué no. Implica a la gente en elegir las medidas, comparte lo que encuentres y muestra pronto una mejora que la haya ayudado.

**Gran empresa.** La escala dificulta la confianza, porque la mayoría de los líderes están lejos de los equipos. Usa una carta firmada a un nivel alto, medidas propiedad de los equipos con un pequeño núcleo común, una configuración de las herramientas que impida las vistas individuales y una vía independiente para informar de incumplimientos. Haz pilotos, aprende y extiende mediante los pares, y evita una única fecha global de implantación.

**Gobierno y sector público.** Las normas de empleo, los sindicatos y el escrutinio público añaden restricciones y expectativas. Consulta pronto a los representantes del personal, acuerda la carta con ellos y sé claro sobre la línea entre los datos de mejora y cualquier proceso formal de desempeño. Los requisitos de informes públicos deben mantenerse aparte de las medidas internas de mejora (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son sobre todo tiempo de las personas: redactar la carta, hacer pilotos, talleres con los equipos, tratar los cuestionamientos, realizar encuestas y el tiempo de los líderes dedicado a cumplir las reglas. También hay un costo de oportunidad, porque una implantación cuidadosa es más lenta que un mandato. Esos costos son pequeños frente al costo de una implantación fallida, en la que los datos se distorsionan, la confianza se gasta y el programa se abandona.

Los retornos son datos que reflejan la realidad, informes honestos de los problemas y equipos que usan las medidas para mejorar. Se manifiestan como detección más temprana de los problemas, menos disputas sobre los números y mayor adopción sin coacción. Construye el caso con tu propia historia: qué ocurrió cuando antes se impusieron medidas, cuántos equipos las adoptaron voluntariamente esta vez y cómo cambió el informe de problemas. Evita citar cifras publicadas sobre compromiso o confianza sin una fuente rastreable y relevante para tu entorno (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **La tabla de clasificación sorpresa.** Aparecen clasificaciones en una diapositiva de dirección. La confianza termina. Mantén las clasificaciones fuera del programa.
- **Medidas en las evaluaciones de desempeño.** Incluso una mención cambia el comportamiento en todas partes. Mantenlas fuera, por escrito.
- **Mandato primero, explicación después.** Cumplimiento sin convicción. Haz un piloto con voluntarios y explica las razones.
- **Una carta que nadie hace cumplir.** Palabras sin acción son peores que nada. Exige su cumplimiento a los líderes y publica los resultados.
- **Vigilancia por defecto.** Las herramientas exponen la actividad individual porque pueden. Desactiva esas funciones.
- **Respuestas a la defensiva ante los cuestionamientos.** La gente deja de señalar errores. Responde con rapidez y respeto.
- **Precipitarse a muchas medidas.** Sobrecarga y confusión. Empieza con unas pocas y crece.
- **Leer el silencio como éxito.** Menos informes pueden significar miedo. Vigila las señales de franqueza y habla con la gente.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Promesas y uso | Sin escribir; el uso varía según el jefe | Garantías verbales; algunos acuerdos de equipo | Carta escrita firmada por los líderes; vistas individuales desactivadas | Incumplimientos informados y revisados; uso de la carta comprobado | Carta copropiedad del personal y de los socios; revisada a partir de la experiencia |
| Propiedad y transparencia | Medidas impuestas | Algunos equipos consultados | Los equipos eligen y definen las medidas y ven primero los datos | Proporción de propiedad y plazo de respuesta a cuestionamientos gestionados | Equipos, proveedores y clientes comparten vistas por acuerdo; la propiedad es rutinaria |
| Confianza y franqueza | Miedo o indiferencia | Piloto con voluntarios | Encuesta de seguridad y tendencias de casi-incidentes revisadas con los equipos | Las señales desencadenan acciones planificadas; adopción voluntaria seguida | La franqueza es rutinaria; la mejora del programa viene de todos |

## Lista de verificación

- [ ] Una carta escrita declara para qué son los datos y para qué no, y los líderes la han firmado.
- [ ] Las vistas a nivel individual y las clasificaciones están desactivadas en las herramientas o restringidas por política.
- [ ] Los equipos eligen o aprueban sus medidas y ven sus datos antes que los demás.
- [ ] Un piloto con equipos voluntarios precede a cualquier implantación más amplia.
- [ ] El primer uso de los datos ofrece ayuda visible al equipo.
- [ ] Existe una vía de cuestionamiento, con un plazo de respuesta declarado y un registro.
- [ ] Existe una vía de informe de los incumplimientos de la carta, y los resultados se publican sin nombres.
- [ ] Las señales de seguridad y de franqueza a nivel de equipo se vigilan y se discuten con los equipos.
- [ ] Los vectores de manipulación y las barreras de protección se comparten abiertamente con los equipos.
- [ ] El programa se revisa con los equipos cada trimestre, y las medidas se retiran cuando dejan de ayudar.

## Prompts de IA

**Redacta una carta de métricas.**

```text
Redacta una carta de una página para el programa de métricas de [organization
type]. Debe indicar para qué son los datos, para qué no se usarán nunca
(incluidas las clasificaciones individuales y las evaluaciones de desempeño),
quién puede ver qué, cuánto tiempo se conservan los datos, cómo puede una
persona cuestionar un número, cómo se informa de los incumplimientos y quién la
firma. Usa palabras llanas. No des asesoramiento jurídico. Enumera tus supuestos
y los puntos que confirmar con especialistas de recursos humanos y jurídicos.
```

**Planifica un piloto.**

```text
Planifica un piloto de seis semanas de un programa de métricas con dos o tres
equipos voluntarios en [context]. Incluye cómo invitar a los equipos, qué
medidas ofrecer, cómo fijar las reglas, qué ayuda temprana deben aportar los
datos, qué preguntar a los equipos al final y cómo decidir la implantación más
amplia. No des por supuesto el resultado. Enumera tus supuestos y riesgos.
```

**Revisa una medida en busca de miedo.**

```text
Aquí hay una medida propuesta y cómo se usará: [paste]. Actúa como un miembro
escéptico del equipo. Describe cómo podría vivirse como una amenaza, cómo podría
cambiar la gente su comportamiento para quedar bien y qué informes honestos
podría desalentar. Sugiere cambios en la definición, la presentación o las
reglas de uso que reduzcan el riesgo. Enumera tus supuestos.
```

**Responde a un cuestionamiento.**

```text
Un equipo ha cuestionado este número: [describe, without personal data]. Redacta
una respuesta respetuosa que reconozca la preocupación, explique cómo se calcula
el número, proponga cómo comprobarlo, fije una fecha para la respuesta e indique
qué cambiará si el número es erróneo. No seas defensivo. Enumera lo que aún no
sabes.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el vector de manipulación y la barrera de protección que compartir abiertamente con los equipos para una medida propuesta.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un plan de implantación mantiene las medidas a nivel de equipo y de servicio y nunca clasifica a individuos.

## Puntos clave

- La confianza es el activo. Escribe para qué son los datos y para qué no, y cumple la promesa.
- Mide equipos, servicios y sistemas, y desactiva las vistas que exponen a individuos.
- Deja que los equipos elijan, definan y vean primero sus datos, y posean la historia que cuentan.
- Haz un piloto con voluntarios, aporta ayuda visible pronto y extiende mediante los pares.
- Responde con rapidez a los cuestionamientos, y trata las señales de miedo como información sobre el programa.
- Exige a los líderes que cumplan la carta, y revisa el programa con las personas que lo componen.

## Referencias y lecturas complementarias

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Trust (social science)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
