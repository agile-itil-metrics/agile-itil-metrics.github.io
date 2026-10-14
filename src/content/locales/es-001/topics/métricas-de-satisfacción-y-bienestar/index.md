# Métricas de satisfacción y bienestar

**Las personas que se sienten seguras, con confianza y capaces de mantener su ritmo trabajan mejor durante más tiempo, así que pregunta por el bienestar con cuidado, mantén las respuestas anónimas y agregadas y trata lo que aprendas como una llamada a cambiar el trabajo, nunca como un juicio sobre la persona.**

## Resumen y motivación

Los principios del Manifiesto Ágil dicen que los procesos ágiles promueven el desarrollo sostenible: los patrocinadores, los desarrolladores y los usuarios deben poder mantener un ritmo constante de forma indefinida. También dicen que se construyan los proyectos en torno a individuos motivados y que se confíe en que harán el trabajo. Una organización de servicio que depende de las personas para mantener en marcha sistemas complejos durante noches, fines de semana y crisis necesita preguntarse si su forma de trabajar puede sostenerse de verdad. Las medidas de satisfacción y bienestar son la forma de preguntarlo.

Estas medidas son más delicadas que cualquier otra de este libro. Tocan cómo se sienten las personas respecto a su trabajo, sus colegas y su salud. Mal hechas, invaden la privacidad, crean miedo y producen respuestas falsas. Bien hechas, dan a los equipos y a los líderes un aviso temprano de problemas que de otro modo aflorarían como dimisiones, errores e incidentes. Este tema trata, por tanto, tanto de ética y método como de métricas, y sigue al tema anterior sobre las condiciones del equipo (véase el tema 9.1, Salud del equipo y experiencia de desarrollo).

Tres ideas lo enmarcan.

- **La satisfacción no es bienestar, y tampoco lo es el compromiso.** La [satisfacción laboral](https://en.wikipedia.org/wiki/Job_satisfaction) es el sentimiento de una persona sobre su empleo, el [compromiso del empleado](https://en.wikipedia.org/wiki/Employee_engagement) es una implicación enérgica en el trabajo, y el bienestar es un estado más amplio de salud y de plenitud. Una persona puede estar satisfecha con un empleo que la está desgastando. Medir una cosa no te dice nada sobre las otras.
- **La motivación proviene de condiciones que pueden construirse.** La [teoría de la autodeterminación](https://en.wikipedia.org/wiki/Self-determination_theory), desarrollada por Edward Deci y Richard Ryan, propone que la [motivación intrínseca](https://en.wikipedia.org/wiki/Intrinsic_motivation) de las personas se respalda cuando se satisfacen tres necesidades: la autonomía, un sentido de control sobre el propio trabajo; la competencia, un sentido de eficacia y de crecimiento; y la afiliación, un sentido de conexión con los demás. Coinciden con la llamada ágil a individuos motivados a quienes se da el entorno y la confianza que necesitan.
- **La seguridad para hablar es una condición previa.** La [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety), un concepto desarrollado por Amy Edmondson, es la creencia compartida de que un equipo es seguro para asumir riesgos interpersonales. Sin ella, la gente oculta errores, inquietudes y agotamiento, y toda encuesta mide lo que la gente se atreve a decir, no lo que siente.

Las medidas de bienestar tienen peligros particulares. Quienes responden pueden dar las respuestas que creen esperadas, un patrón conocido como [sesgo de deseabilidad social](https://en.wikipedia.org/wiki/Social_desirability_bias). El agotamiento es un asunto serio, y la clasificación de la Organización Mundial de la Salud describe el síndrome de desgaste profesional (burn-out) como un fenómeno ocupacional resultante del estrés crónico en el lugar de trabajo que no se ha gestionado con éxito. No es un diagnóstico médico hecho por una encuesta. Los investigadores describen el agotamiento mediante el cansancio, el cinismo y la menor eficacia (el [desgaste profesional](https://en.wikipedia.org/wiki/Occupational_burnout) es el término general), y los empleadores deben ofrecer apoyo y corregir las condiciones, no diagnosticar a individuos. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) tiene aquí un rostro humano: cuando una puntuación de bienestar se convierte en una meta para un responsable, la gente aprende a decir que está bien (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Una última cautela: este tema describe la práctica de medición y no da asesoramiento médico, psicológico ni jurídico. Implica a profesionales cualificados, como la salud laboral, los recursos humanos y los representantes de los empleados, y sigue la ley de privacidad y de empleo que se aplique donde trabajen tus personas.

## Principios clave

- **La participación es voluntaria y las respuestas son anónimas.** Nadie debe sentirse obligado a revelar cómo se siente.
- **Informa solo en grupos.** Usa un tamaño mínimo de grupo y suprime todo lo que pudiera identificar a una persona.
- **No uses nunca estas medidas para evaluar a individuos.** Describen el trabajo y el equipo.
- **No diagnostiques nunca.** Las encuestas pueden mostrar condiciones, y el juicio clínico pertenece a profesionales cualificados.
- **Corrige las condiciones.** La respuesta a un mal resultado es cambiar la carga de trabajo, el proceso o las prioridades.
- **Apunta a un ritmo que el equipo pueda sostener.** Las ráfagas cortas están bien, y la urgencia permanente no.
- **Actúa donde la gente pueda verlo.** El cambio visible genera la confianza que necesitan las respuestas honestas.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Valoración del ritmo sostenible | Valoración del equipo de si el ritmo actual podría mantenerse indefinidamente | valoración media y dispersión en una escala acordada de la afirmación "podríamos seguir trabajando a este ritmo indefinidamente" | puntos de escala | Pulso anónimo del equipo | Mejora continua; gestión de la fuerza laboral y del talento | Ritmo constante de forma indefinida | Mensual |
| Valoración de la seguridad psicológica | Valoración del equipo de cuán seguro es plantear problemas y asumir riesgos interpersonales | valoración media de un breve conjunto validado de afirmaciones, por equipo | puntos de escala | Pulso anónimo del equipo | Mejora continua; gestión de la fuerza laboral y del talento | Confianza y reflexión abierta | Trimestral |
| Valoración del apoyo a las necesidades | Valoración del equipo de la autonomía, la competencia y la afiliación en el trabajo | valoración media de cada una de tres afirmaciones, por equipo | puntos de escala | Pulso anónimo del equipo | Gestión de la fuerza laboral y del talento; mejora continua | Individuos motivados con el entorno que necesitan | Trimestral |
| Valoración de la tensión de la carga de trabajo | Valoración del equipo de cuán exigente es la carga de trabajo en relación con la capacidad | valoración media y proporción que califica la carga de trabajo como insostenible | puntos de escala; porcentaje | Pulso anónimo del equipo | Gestión de la capacidad y el desempeño; gestión de la fuerza laboral y del talento | Desarrollo sostenible | Mensual |
| Semanas de horario ampliado sostenido | Proporción de semanas en que la rotación o el equipo trabajó muy por encima de su horario normal, contadas a nivel de rotación o de equipo | semanas del periodo con horario ampliado a nivel de equipo / semanas del periodo | porcentaje | Registros de rotación y de guardias agregados por equipo; informado por el equipo, voluntario | Gestión de incidentes; gestión de la capacidad y el desempeño | Las horas extra como señal de sobrecarga | Mensual |
| Rotación voluntaria y temas de salida | Proporción de miembros del equipo que se van voluntariamente en un periodo, con temas de las conversaciones de salida | personas que se van voluntariamente / plantilla media; recuentos de temas de quienes consienten | porcentaje; recuentos | Registros de recursos humanos, conversaciones de salida | Gestión de la fuerza laboral y del talento | Retención de personas con experiencia | Trimestral |
| Tiempo para actuar sobre la retroalimentación de bienestar | Tiempo desde que un equipo plantea una inquietud de bienestar hasta una respuesta registrada | mediana y percentil 85 de días desde la inquietud hasta la decisión o acción registrada | días | Registro de retroalimentación del equipo | Mejora continua | Respuesta pronta a la reflexión del equipo | Trimestral |

Define en el registro el tamaño mínimo del grupo de informe, por ejemplo ningún resultado para un grupo de menos de siete personas, y aplícalo a cada tabla, gráfico y comentario. Las valoraciones provienen de pulsos breves y anónimos, con participación voluntaria. Las semanas de horario ampliado se calculan a partir de los registros de rotación y de guardias del equipo en su conjunto, y nunca se recogen con este fin datos de horas a nivel individual. La rotación de personal se informa solo donde el grupo es lo bastante grande, y los temas de salida solo de personas que consienten. Ninguna de estas métricas forma parte de la evaluación de ningún individuo.

## Recomendaciones

### Fija primero las reglas básicas

**1. Escribe las reglas antes de preguntar.** Declara el propósito, qué se recoge, quién ve qué, el tamaño mínimo de grupo, cuánto tiempo se conservan los datos y qué no se hará nunca con ellos, incluido que ninguna respuesta individual se usará en evaluaciones, promociones ni sanciones. Comparte el borrador con los representantes de los empleados, donde existan, y con tus especialistas en privacidad y en recursos humanos. Publica las reglas finales donde todos puedan leerlas.

**2. Haz voluntaria la participación y anónimas las respuestas.** No persigas a quienes no han respondido. No exijas campos de identificación. Usa un método de encuesta que no pueda rastrearse hasta una persona, y pon a prueba esa afirmación con honestidad: en un equipo pequeño, las preguntas demográficas pueden identificar a las personas. Di a la gente qué haces para protegerla, y que sea de verdad.

**3. Implica a la salud laboral y al apoyo a los empleados.** Las encuestas no sustituyen al apoyo. Asegúrate de que existe un programa de asistencia al empleado o equivalente, de que la gente sabe cómo acceder a él y de que los responsables saben responder con amabilidad si alguien revela un problema. Un programa de bienestar que identifica angustia y no ofrece nada es peor que ninguno.

### Pregunta bien

**4. Usa pocas preguntas, claras y validadas.** Un breve conjunto de afirmaciones, valoradas en una escala coherente, sirve mejor que un formulario largo. Usa redacciones establecidas de la literatura de investigación para la seguridad psicológica y para las tres necesidades de la teoría de la autodeterminación, y mantén estable tu propia redacción para que las tendencias signifiquen algo. Añade un comentario abierto, y lee los comentarios completos.

**5. Pregunta por las condiciones más que por los sentimientos.** "Puedo mantener este ritmo durante un año" y "tengo lo que necesito para hacer mi mejor trabajo" apuntan al trabajo. "¿Cuánto estrés tienes?" apunta a la persona. Ambas tienen su lugar, y las preguntas sobre condiciones son más fáciles de responder con honestidad y más fáciles de actuar.

**6. Mantén ligera la cadencia.** Un pulso mensual de tres preguntas sobre ritmo y carga de trabajo y un pulso trimestral sobre seguridad y necesidades bastan para la mayoría de los equipos. La fatiga de encuestas es real, y una larga encuesta anual es lenta de actuar. Varía las preguntas con moderación para que la gente no responda en piloto automático, y mantén estable el núcleo.

**7. Lee los resultados primero con el equipo.** Comparte los resultados propios del equipo con el equipo antes que con nadie más, y deja que los interprete. Los líderes ven tendencias entre equipos y los obstáculos en los que los equipos piden ayuda, no una clasificación. Este enfoque es más exacto, ya que los equipos conocen el contexto, y más respetuoso.

### Mira el trabajo además de los sentimientos

**8. Empareja la percepción con hechos de carga de trabajo a nivel de equipo.** Compara las valoraciones de ritmo y de tensión con la carga de rotación y de guardias, la proporción de trabajo no planificado y la lista de obstáculos pendientes (véanse el tema 5.7, Métricas de trabajo repetitivo y guardias, y el tema 2.9, Trabajo operativo y trabajo no planificado). Cuando las valoraciones bajan al subir el trabajo no planificado, has encontrado una causa que puedes corregir. Agrega los datos de horas a nivel de equipo o de rotación, y no hagas nunca seguimiento de individuos.

**9. Trata la sobrecarga sostenida como un problema del sistema.** Una racha de semanas de horario ampliado significa que el plan, la dotación o las prioridades no coinciden con la realidad. Responde reduciendo el alcance, añadiendo personas, quitando trabajo o corrigiendo las causas de los incidentes, no pidiendo a los individuos que sean más resilientes. Las ráfagas cortas y elegidas son distintas de la urgencia sin fin, y el equipo puede decir cuál es.

**10. Vigila los patrones de la rotación de personal, con cuidado.** La rotación voluntaria es una señal rezagada. Mírala por equipo y durante un periodo largo, y combínala con temas de las conversaciones de salida a las que los que se van acceden. Los números pequeños oscilan mucho y pueden identificar a las personas, así que suprime los grupos pequeños y evita leer salidas aisladas como prueba.

### Actúa y aprende

**11. Responde en un plazo indicado y di a la gente qué pasó.** Comprométete a responder a las inquietudes de bienestar en un plazo corto, e informa de las acciones y de sus resultados. El tiempo para actuar mide esto. Una respuesta visible, aunque sea "no podemos cambiar esto ahora, y aquí está el porqué", mantiene viva la confianza.

**12. Aprende de lo que no funciona.** Si las puntuaciones no mejoran tras una intervención, pregunta por qué. Escucha al equipo antes de intentarlo de nuevo. Evita los añadidos de bienestar, como una aplicación de meditación o un evento social, como sustituto de cambiar una carga de trabajo demasiado alta. El bienestar es en gran medida una propiedad de cómo se organiza el trabajo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Valoración del ritmo sostenible | Los responsables presionan por buenas puntuaciones; los equipos informan lo que se espera | Reglas de anonimato y de tamaño de grupo; comparar con hechos de carga de trabajo; leer los comentarios |
| Valoración de la seguridad psicológica | Encuestar solo a equipos seguros; cambios de redacción que elevan las puntuaciones | Registro de redacción fija; tasa de respuesta y composición; comparar con las tasas de informe de incidentes y errores |
| Valoración del apoyo a las necesidades | Redefinir las afirmaciones; aleccionar las respuestas | Redacción estable; interpretación propiedad del equipo; comentarios |
| Valoración de la tensión de la carga de trabajo | Rebajar la tensión informada para evitar el escrutinio; ajustar el alcance sobre el papel | Comparar con el trabajo no planificado y la carga de rotación; comprobar si hay trabajo oculto |
| Semanas de horario ampliado sostenido | No registrar las horas; sacar el trabajo de los registros de rotación | Comparar con los registros de incidentes y los comentarios del equipo; permitir informar sin penalización |
| Rotación voluntaria y temas de salida | Reclasificar dimisiones como involuntarias; dirigir las conversaciones de salida | Reglas de clasificación claras; conversaciones de salida independientes; mirar periodos largos |
| Tiempo para actuar sobre la retroalimentación de bienestar | Registrar una respuesta sin acción; cerrar rápido las inquietudes | El equipo confirma que la respuesta es significativa; seguir si cambian las valoraciones |

Una lectura sana es una valoración del ritmo estable o en mejora que coincide con los hechos de la carga de trabajo, una seguridad psicológica lo bastante alta como para que las malas noticias viajen, una tensión de la carga de trabajo que baja tras cambiar las condiciones, semanas de horario ampliado raras y explicadas, y equipos que dicen ver usada su retroalimentación.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Encuestas de pulso anónimas | Honestas, baratas, oportunas | No permiten dar seguimiento a individuos; los grupos pequeños limitan el anonimato |
| Encuestas identificadas | Permiten el seguimiento | La gente se reprime; riesgo para la privacidad |
| Preguntas centradas en las condiciones | Señalan causas corregibles | Pasan por alto las circunstancias personales |
| Preguntas centradas en los sentimientos | Captan la experiencia vivida | Más fáciles de usar mal; más difíciles de actuar |
| Datos de carga de trabajo a nivel de equipo | Objetivos, vinculan con las causas | Pueden deslizarse hacia la vigilancia sin reglas firmes |
| Conversaciones individuales con el responsable | Personales, pueden responder a necesidades individuales | Dependen del responsable; no agregables |
| Encuesta anual de compromiso | Comparable en el tiempo | Lenta; baja tasa de acción |
| Pulsos breves frecuentes | Oportunos | Fatiga si se usan mal |

La respuesta en prosa es usar pulsos anónimos centrados en las condiciones con reglas estrictas de tamaño de grupo, combinarlos con hechos de carga de trabajo a nivel de equipo y confiar en los responsables y en los profesionales para el apoyo individual. Trata cualquier dato de bienestar a nivel individual como fuera del alcance de las métricas.

## Preguntas para conversar con tu equipo

**1. ¿Podríamos seguir trabajando al ritmo actual durante un año, y qué tendría que cambiar si no?**
Pide respuestas honestas. El facilitador debe registrar las causas sin asignar culpas: alcance, dotación, interrupciones, incidentes. Acordad un cambio en el trabajo que reduciría la tensión. Si la respuesta es sí, pregunta qué protege el ritmo.

**2. ¿Cuándo planteó alguien aquí por última vez un problema o un error, y cómo se recibió?**
Recoge historias. Observa si la respuesta fue de curiosidad o de culpa. Discutid qué lo hace seguro o inseguro. Acordad un hábito que facilitaría plantear un problema, como dar las gracias a quien lo hizo.

**3. ¿Qué reglas nos harían confiar en una encuesta de bienestar?**
Redactad juntos las reglas: quién ve qué, el tamaño mínimo de grupo y qué no se hará nunca. Pregunta qué te haría dudar de la promesa. El resultado es el primer borrador de las reglas del programa para revisarlas con los representantes.

**4. ¿Cuáles de nuestras prácticas dependen de que la gente trabaje horas extra, y por qué?**
Enuméralas: versiones, traspasos, guardias. Pregunta si cada una es realmente necesaria y qué la eliminaría. Elige una que corregir con automatización, proceso o dotación.

**5. ¿Qué hacemos cuando un colega parece estar pasándolo mal?**
Discutid el apoyo que existe, cómo acceder a él y qué puede hacer cada persona. El facilitador debe estar preparado con información sobre la asistencia a los empleados y dejar claro que el equipo no sustituye a la ayuda profesional.

**6. ¿Qué cambiamos como respuesta a la última ronda de retroalimentación?**
Comprueba el registro. Si no cambió nada, discutid por qué: falta de propiedad, falta de autoridad o miedo. Acordad una acción con un responsable y una fecha, y cómo se informará de ella.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega cargan con la presión de los plazos y de la demanda. Deben fijar sus propias preguntas de pulso, discutir juntos los resultados y plantear abiertamente el ritmo y la carga de trabajo en la planificación. Son los mejor situados para decir qué compromisos son sostenibles, y merecen líderes que escuchen.

### Equipos de servicio y operaciones

Los equipos de operaciones cargan con las guardias, los incidentes y el trabajo nocturno. Deben seguir la carga de rotación a nivel de equipo, empujar para corregir las causas recurrentes y usar las reglas de descanso y de cobertura como protecciones. Necesitan culturas que traten el agotamiento como un riesgo para el servicio, no como una señal de dedicación.

### Liderazgo y gobernanza

Los líderes fijan las expectativas y aprueban los planes que crean la carga. Deben proteger las reglas de privacidad, responder a las señales a nivel de equipo con cambios de alcance, de dotación o de prioridades y resistir la tentación de clasificar a los equipos. La gobernanza debe comprobar que existen servicios de apoyo, que se cumplen los deberes legales sobre el tiempo de trabajo y la salud y que no se usan datos individuales para la evaluación.

### Clientes y usuarios

Los usuarios se benefician de equipos descansados, que aprenden y son estables, porque de ellos dependen la calidad del servicio, la paciencia y la continuidad. También les afecta que los equipos estén desbordados: respuestas más lentas, más errores, pérdida de personal con experiencia. La comunicación honesta sobre la capacidad y las prioridades forma parte de tratar con respeto a las personas que los sirven.

## En la práctica: un ejemplo de ITIL ágil

El grupo de operaciones de servicio de un operador regional de telecomunicaciones tiene ocho equipos que operan redes, facturación y sistemas de atención al cliente las 24 horas. Los números siguientes son ilustrativos.

Tras tres dimisiones en un equipo, la directora pide un panel de moral que enumere la puntuación de cada equipo. La jefa de personas y cultura propone un enfoque distinto y trabaja con los representantes de los empleados para redactar las reglas del programa: pulsos voluntarios y anónimos, un grupo mínimo de informe de siete, ningún dato individual y ningún uso en evaluaciones. Los equipos reciben un pulso mensual de tres preguntas sobre el ritmo, la carga de trabajo y la sensación de tener lo que necesitan, y un pulso trimestral sobre la seguridad psicológica y las tres necesidades de la teoría de la autodeterminación. Los resultados van primero a cada equipo.

El primer trimestre muestra que el equipo de operaciones de plataforma valora el ritmo sostenible en 2,3 sobre 5, con un 62 por ciento que califica la carga de trabajo como insostenible. Los registros de rotación muestran que el equipo trabajó horario ampliado en 9 de las últimas 13 semanas, impulsado por incidentes repetidos de un componente de facturación envejecido, y que una cuarta parte de su capacidad se va en trabajo no planificado. La valoración de seguridad psicológica del equipo es menor que la de los demás, y los comentarios dicen que plantear inquietudes sobre el componente ha llevado a que se les diga que tengan paciencia. Los demás equipos valoran el ritmo entre 3,4 y 4,1.

La directora y el equipo acuerdan cuatro acciones. La sustitución del componente de facturación sube en la lista de prioridades, y el equipo recibe dos ingenieros temporales de un equipo con capacidad de sobra. La rotación añade un día de descanso tras cualquier incidente nocturno, con los responsables encargados de protegerlo. Las inquietudes sobre el componente se registran y se responden en dos semanas, con razones. Los líderes dejan de pedir clasificaciones de equipos. En dos trimestres, la valoración del ritmo del equipo sube a 3,6, las semanas de horario ampliado bajan a 2 de 13 y la seguridad psicológica sube. El tiempo para actuar sobre la retroalimentación tiene una mediana de 11 días. La directora pide una puntuación de bienestar de toda la empresa para publicarla a la junta. La jefa de personas y cultura explica que una sola puntuación invita a los responsables a gestionar el número, y ofrece en su lugar un informe de las acciones realizadas y de las condiciones cambiadas, con el consentimiento de los equipos. La decisión se registra. Un equipo pide que sus resultados no se compartan fuera del equipo, y se concede la petición.

## Perspectiva por sector

**Startup.** La intensidad es común, y también el riesgo de que las ráfagas se conviertan en la norma. Los fundadores pueden dar ejemplo de ritmo sostenible y notar cuándo el equipo funciona al rojo vivo. Apóyate en la conversación y en un pulso anónimo muy breve una vez que el equipo sea lo bastante grande para proteger el anonimato.

**Pequeña empresa.** Los equipos son tan pequeños que nada es anónimo. No hagas encuestas de bienestar que pretendan lo contrario. Usa conversaciones individuales regulares y honestas, ofrece acceso a apoyo y vigila la sobrecarga en el patrón de trabajo, como los incidentes crónicos fuera de horario.

**Gran empresa.** La escala permite medidas anónimas y análisis de tendencias. También trae presión para comparar. Ofrece un conjunto común de preguntas básicas, deja que los equipos añadan las suyas, protege las reglas de tamaño de grupo e implica a los representantes de los empleados. Haz visibles y fáciles de usar los servicios de apoyo.

**Gobierno y sector público.** Las protecciones laborales, los comités de empresa y los sindicatos suelen tener funciones formales en las encuestas y en la monitorización. Implícalos desde el principio, sigue las reglas sobre el tiempo de trabajo y la salud y trata con gran cuidado los datos sensibles. Los servidores públicos suelen estar motivados por el propósito, y las organizaciones no deben aprovecharse de esa buena voluntad aceptando una sobrecarga permanente (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son modestos: el tiempo de los equipos para pulsos breves, herramientas de encuestas que preserven el anonimato, tiempo de especialistas para la revisión de privacidad y para interpretar los resultados, y el costo real de actuar, que puede significar dotación, reducción del alcance o inversión en corregir causas recurrentes. Los servicios de apoyo, como la asistencia al empleado, también cuestan dinero y vale la pena tenerlos.

El retorno llega mediante la retención, menos errores, un mejor servicio y menos crisis. Sustituir a un ingeniero con experiencia cuesta contratación, incorporación y conocimiento perdido. Los equipos bajo sobrecarga crónica cometen más errores y causan más incidentes. Construye el caso con tus propios datos: la rotación voluntaria por equipo durante varios años, el costo de contratar e incorporar a los sustitutos y los patrones de incidentes en los equipos sobrecargados. Evita citar estudios sobre el costo del agotamiento salvo que puedas rastrear la fuente y la relevancia. Sé honesto en que los beneficios son reales y difíciles de aislar, y en que el argumento ético no depende del financiero (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Clasificar a los equipos por sus puntuaciones de bienestar.** Los responsables entonces gestionan el número. Informa de condiciones y acciones.
- **Encuestas identificadas.** La gente se reprime. Usa el anonimato y las reglas de tamaño de grupo.
- **Diagnosticar a individuos a partir de datos de encuestas.** Es poco ético y poco fiable. Ofrece apoyo y deja el diagnóstico a los profesionales.
- **Añadidos de bienestar en lugar de cambiar la carga de trabajo.** Tratan el síntoma. Corrige la carga.
- **Recoger horas por persona.** Es vigilancia. Usa hechos de rotación y de equipo.
- **Encuestas sin acción.** La gente deja de responder. Responde de forma visible y rápida.
- **Usar los resultados en evaluaciones de desempeño.** Acaba con la honestidad. Prohíbelo por escrito.
- **Tratar la sobrecarga como formación en resiliencia.** Pone la carga en los individuos. Cambia el sistema.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Ética y privacidad | Sin reglas | Cuidado informal | Reglas escritas, anonimato, tamaño mínimo de grupo, ningún uso individual | Reglas revisadas con representantes; cumplimiento comprobado | Reglas y práctica auditadas de forma independiente; los equipos controlan el intercambio |
| Medidas | Encuesta anual, si la hay | Revisiones ocasionales del equipo | Pulsos breves mensuales y trimestrales sobre ritmo, carga, seguridad y necesidades | Percepción combinada con hechos de carga de trabajo a nivel de equipo; tendencias vigiladas | Cuadro entre equipos con socios; el aviso temprano impulsa la planificación |
| Acción | Quejas sin atender | Correcciones ad hoc | Respuestas registradas y con plazo; cambios visibles | Condiciones cambiadas, con seguimiento y vinculadas a resultados | Carga de trabajo y ritmo incorporados a la planificación y la financiación en toda la organización |

## Lista de verificación

- [ ] Reglas escritas declaran propósito, acceso, tamaño de grupo, retención y una prohibición del uso individual.
- [ ] Los representantes de los empleados y los especialistas en privacidad han revisado las reglas.
- [ ] La participación es voluntaria y las respuestas son anónimas.
- [ ] Un tamaño mínimo de grupo de informe se aplica a todas las salidas.
- [ ] Hay servicios de apoyo y son conocidos por todo el personal.
- [ ] Los pulsos usan unas pocas preguntas estables y claras y un comentario abierto.
- [ ] Los equipos leen primero sus propios resultados.
- [ ] Los hechos de carga de trabajo a nivel de equipo se comparan con la percepción, nunca las horas individuales.
- [ ] Las respuestas a las inquietudes tienen un plazo indicado y se informan.
- [ ] Ningún dato de bienestar se usa en evaluaciones de desempeño, promociones ni sanciones.

## Prompts de IA

**Redacta reglas para un programa de bienestar.**

```text
Redacta reglas en lenguaje llano para un programa de pulso de bienestar del
personal en [type of organization] en [jurisdiction or sector]. Cubre el
propósito, la participación voluntaria, el anonimato, el tamaño mínimo de grupo
de informe [number], quién ve los resultados, la retención, una prohibición
clara de uso en evaluaciones, el apoyo disponible y cómo puede el personal
plantear inquietudes. Señala los puntos que revisar con especialistas en
privacidad, representantes de los empleados y salud laboral. No des
conclusiones jurídicas. Enumera tus supuestos.
```

**Revisa las preguntas del pulso.**

```text
Estas son nuestras preguntas de pulso sobre ritmo, carga de trabajo, seguridad
psicológica y motivación: [paste]. Revísalas en busca de redacción sugestiva o
de doble cañón, sensibilidad y riesgo de identificar a individuos en grupos
pequeños. Sugiere un conjunto más corto que se centre en condiciones que
podamos cambiar. No afirmes la validación de ninguna redacción salvo que cites
con exactitud la fuente publicada. Enumera tus supuestos y cautelas.
```

**Analiza los comentarios de forma segura.**

```text
Aquí hay [number] comentarios anonimizados de un pulso de [team type]: [paste
with any identifying details removed]. Agrúpalos en temas sobre las condiciones
del trabajo, cuenta cada tema y sugiere qué condiciones podría cambiar el
equipo, sus líderes u otros grupos. No infieras la salud de nadie ni identifiques
a individuos. Dime qué debería comprobar una persona antes de actuar. Enumera
tus supuestos.
```

**Planifica la respuesta a una señal de sobrecarga.**

```text
La valoración del ritmo de un equipo es [value], las semanas de horario ampliado
son [number] de [number] y el trabajo no planificado es [share]. Causas en los
comentarios: [summary]. Propón una respuesta que cambie el trabajo (alcance,
dotación, rotación, correcciones de causa raíz), qué decir al equipo y cómo
medir si ayudó sin hacer seguimiento de individuos. Enumera tus supuestos y las
compensaciones para el liderazgo.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada y las reglas de privacidad de una métrica de bienestar.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de bienestar lleva su vector de manipulación, su barrera de protección y su regla de anonimato.

## Puntos clave

- Pregunta por las condiciones, como el ritmo, la carga de trabajo, la seguridad y el apoyo, más que por los sentimientos, y mantén las respuestas anónimas y agregadas.
- Escribe y publica primero las reglas, incluida una prohibición de usar los resultados para juzgar a individuos.
- Trata la sobrecarga sostenida como un problema del sistema que corregir con alcance, dotación y causas, no con resiliencia.
- Compara la percepción con hechos de carga de trabajo a nivel de equipo, nunca con horas individuales.
- Responde de forma visible y en un plazo indicado, y di a la gente qué cambió.
- Ofrece servicios de apoyo reales, y deja el diagnóstico a los profesionales.

## Referencias y lecturas complementarias

1. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
2. Deci, E. L., and Ryan, R. M., "The 'what' and 'why' of goal pursuits: Human needs and the self-determination of behavior," *Psychological Inquiry*, 11(4), 2000.
3. Maslach, C., and Leiter, M. P., "Understanding the burnout experience: recent research and its implications for psychiatry," *World Psychiatry*, 15(2), 2016.
4. World Health Organization, *International Classification of Diseases, 11th Revision (ICD-11)*, entry on burn-out as an occupational phenomenon.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Job satisfaction](https://en.wikipedia.org/wiki/Job_satisfaction).
8. Wikipedia, [Employee engagement](https://en.wikipedia.org/wiki/Employee_engagement).
9. Wikipedia, [Self-determination theory](https://en.wikipedia.org/wiki/Self-determination_theory).
10. Wikipedia, [Intrinsic motivation](https://en.wikipedia.org/wiki/Intrinsic_motivation).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Social desirability bias](https://en.wikipedia.org/wiki/Social_desirability_bias).
13. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
