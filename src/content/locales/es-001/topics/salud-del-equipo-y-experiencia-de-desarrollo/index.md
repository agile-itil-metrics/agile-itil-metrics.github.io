# Salud del equipo y experiencia de desarrollo

**Los equipos hacen su mejor trabajo cuando la retroalimentación es rápida, la carga sobre su mente es manejable y pueden encontrar largos tramos de concentración, así que mide esas condiciones con el equipo, elimina los obstáculos que revelen y no uses nunca los números para clasificar a las personas.**

## Resumen y motivación

Los principios del Manifiesto Ágil nos piden construir los proyectos en torno a individuos motivados, darles el entorno y el apoyo que necesitan y confiar en que harán el trabajo. También piden que los patrocinadores, los desarrolladores y los usuarios puedan mantener un ritmo constante de forma indefinida, y que el equipo reflexione con regularidad sobre cómo ser más eficaz. Las medidas de salud del equipo y de experiencia de desarrollo son la forma de hacer comprobables esos principios. Preguntan cómo es hacer el trabajo aquí y qué se interpone en el camino.

La [experiencia de desarrollo](https://en.wikipedia.org/wiki/Developer_experience) es la suma de las interacciones que los desarrolladores tienen con las herramientas, los procesos y las personas con las que trabajan. La idea es más amplia que la ingeniería de software. Los operadores, el personal del centro de servicios, los analistas y cualquier otra persona que construya u opere un servicio tiene una experiencia de su entorno. Este tema usa "experiencia de desarrollo" para los ingenieros y "salud del equipo" para el grupo más amplio, y las mismas medidas se aplican a ambos.

Se citan mucho dos marcos de investigación. El marco SPACE, publicado por Nicole Forsgren y colegas en 2021, sostiene que la [productividad](https://en.wikipedia.org/wiki/Productivity) del desarrollador no puede reducirse a un solo número, y propone cinco dimensiones: satisfacción y bienestar, desempeño, actividad, comunicación y colaboración, y eficiencia y flujo. Un seguimiento de 2023 de Abi Noda, Margaret-Anne Storey, Nicole Forsgren y Michaela Greiler, titulado "DevEx: What Actually Drives Productivity", se centra en tres dimensiones que los desarrolladores pueden sentir y las organizaciones pueden cambiar: los ciclos de retroalimentación, la carga cognitiva y el estado de flujo. Ambos artículos recomiendan combinar datos de encuestas sobre percepciones con datos de los sistemas sobre los flujos de trabajo, y ambos advierten contra usar una sola medida, sobre todo un recuento de actividad, como sustituto de la productividad.

Las tres dimensiones de DevEx son un punto de partida práctico.

- **Ciclos de retroalimentación.** ¿Con qué rapidez conoce una persona el resultado de lo que hizo? Las compilaciones lentas, las pruebas lentas, las revisiones lentas y las aprobaciones lentas añaden cada una espera, y la espera rompe la concentración. La retroalimentación rápida es también un apoyo central de la entrega continua.
- **[Carga cognitiva](https://en.wikipedia.org/wiki/Cognitive_load).** ¿Cuánto tiene que retener en la mente una persona para lograr algo? Los sistemas complicados, la documentación pobre, la propiedad poco clara y muchas herramientas elevan la carga. Reducirla libera capacidad para el trabajo que importa.
- **[Estado de flujo](https://en.wikipedia.org/wiki/Flow_(psychology)).** ¿Puede una persona encontrar tramos ininterrumpidos en los que concentrarse? Las reuniones, las notificaciones, las peticiones no planificadas y el cambio de contexto la erosionan.

Las medidas en esta área son especialmente fáciles de usar mal. Los recuentos de commits, solicitudes de incorporación, tickets cerrados u horas conectadas son medidas de actividad. Son fáciles de recoger y dicen poco sobre si la gente puede hacer un buen trabajo, e invitan a la manipulación. Las medidas de percepción son subjetivas y valiosas, y pueden distorsionarse si la gente teme las consecuencias de una respuesta honesta. Cualquier medida de personas puede deslizarse hacia la vigilancia. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con un filo ético: cuando una medida de personas se convierte en una meta, la gente deja de decir la verdad sobre su trabajo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema se apoya en la experiencia de los usuarios internos descrita antes (véase el tema 6.4, Experiencia de usuarios y empleados) y continúa en los temas siguientes sobre bienestar, colaboración, habilidades y mejora.

## Principios clave

- **Mide las condiciones, no a las personas.** Pregunta por el entorno y sus obstáculos, e informa a nivel de equipo.
- **Combina la percepción con los datos de flujo de trabajo.** Lo que siente la gente y lo que registran los sistemas pasan por alto cada uno una parte del cuadro.
- **Deja que el equipo posea su chequeo de salud.** Las personas más cercanas al trabajo eligen las preguntas y leen primero los resultados.
- **No uses nunca estas medidas para clasificar ni evaluar a individuos.** Eso acabaría con las respuestas honestas.
- **Evita los recuentos de actividad como productividad.** Los recuentos de commits, tickets u horas no son resultados.
- **Actúa de forma visible sobre lo que oyes.** Corrige el obstáculo, o di por qué no.
- **Protege un ritmo sostenible.** Un equipo que funciona al rojo vivo de forma indefinida está pidiendo prestado a su futuro.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo del ciclo de retroalimentación | Tiempo que tarda una persona en obtener el resultado de una acción común, por tipo de ciclo | mediana y percentil 85 de minutos u horas de compilación, ejecución de pruebas, espera de revisión de código y despliegue, por equipo | minutos u horas | Marcas de tiempo de la canalización y de la herramienta de revisión, agregadas por equipo | Gestión de versiones y despliegues; mejora continua | Retroalimentación rápida en la entrega continua | Semanal |
| Proporción de tiempo de concentración | Proporción del tiempo de trabajo en bloques ininterrumpidos de una duración mínima acordada, según informe del equipo | horas en bloques de concentración informadas por el equipo / horas de trabajo, recogidas en un breve pulso | porcentaje | Pulso del equipo; datos de calendario solo si el equipo lo acepta y se agregan | Mejora continua; gestión del conocimiento | Tiempo protegido para el trabajo profundo | Mensual |
| Valoración de la carga cognitiva | Valoración del equipo de lo difícil que es entender y cambiar un sistema o proceso con nombre | valoración media y dispersión en una escala breve acordada, por sistema | puntos de escala | Breve pulso vinculado a un sistema o proceso | Diseño del servicio; gestión del conocimiento | Comprensión compartida del trabajo | Trimestral |
| Tiempo de resolución de obstáculos | Tiempo desde que el equipo plantea un obstáculo hasta su eliminación o una decisión registrada de no eliminarlo | mediana y percentil 85 de días desde que se plantea hasta que se resuelve o se decide | días | Lista o seguimiento de impedimentos | Mejora continua; gestión de problemas | Impedimentos eliminados | Mensual |
| Tendencia del chequeo de salud del equipo | Valoración del propio equipo en las dimensiones que eligió, con seguimiento en el tiempo | cambio en las valoraciones de las dimensiones elegidas por el equipo entre chequeos | puntos de escala | Chequeo de salud del equipo, propiedad del equipo | Mejora continua | Reflexión del equipo sobre cómo ser más eficaz | Mensual o trimestral |
| Satisfacción con herramientas y procesos | Valoración del equipo de su satisfacción con las herramientas y los procesos que usa a diario | valoración media o proporción favorable de cada herramienta o proceso con nombre | puntos de escala o porcentaje | Breve pulso | Gestión de niveles de servicio; mejora continua | Ajuste del entorno al trabajo | Trimestral |
| Cobertura de dimensiones | Número de dimensiones de SPACE cubiertas por las medidas que un equipo usa realmente | recuento de las cinco dimensiones con al menos una medida en uso | recuento (de 0 a 5) | Registro de métricas | Medición e informes; gobernanza | Medidas equilibradas | Anual |

Agrega todo a nivel de equipo y fija un tamaño mínimo de grupo, por ejemplo ningún resultado para un grupo de menos de cinco personas. El tiempo de concentración es la descripción del propio equipo, y cualquier cifra derivada del calendario es opcional, agregada y acordada por el equipo. Los tiempos de los ciclos de retroalimentación provienen de los sistemas y describen la canalización, no a las personas. La cobertura de dimensiones es una comprobación del programa de medición, pensada para evitar depender de un solo tipo de medida.

## Recomendaciones

### Parte de las condiciones en que trabaja la gente

**1. Pregunta al equipo qué lo frena.** Empieza con una conversación, no con una encuesta: ¿qué os hace perder tiempo, qué es difícil de entender y qué os interrumpe más? Anota las respuestas con las palabras del equipo. La conversación encuentra problemas que ningún panel encontraría, y construye la confianza que necesitarán las encuestas posteriores. Acordad cuáles dos o tres medir.

**2. Usa las tres dimensiones de DevEx como lente.** Para cada una de las dimensiones de ciclos de retroalimentación, carga cognitiva y estado de flujo, elige una pregunta de percepción y, donde sea posible, una medida del sistema. Para los ciclos de retroalimentación, empareja "¿cuán satisfecho estás con lo que tardan las compilaciones?" con la duración de la compilación. Para la carga cognitiva, pregunta lo difícil que es entender y cambiar un sistema con nombre. Para el flujo, pregunta con qué frecuencia puede trabajar la gente sin interrupciones. Empareja lo que dice la gente con lo que registran los sistemas, y mira los desacuerdos.

**3. Cubre varias dimensiones de SPACE.** Elige medidas de al menos tres de las cinco dimensiones para que ningún tipo de datos domine. La satisfacción y el bienestar, la colaboración y la eficiencia y el flujo suelen importar más a un equipo que opera servicios. Trata con mucho cuidado las medidas de actividad, y úsalas solo como contexto. La medida de cobertura de dimensiones mantiene esto honesto.

### Mide con cuidado

**4. Deja que el equipo posea y lea primero su chequeo de salud.** Un chequeo de salud del equipo es una breve autoevaluación sobre dimensiones que elige el equipo, como diversión, apoyo, rapidez, aprendizaje y facilidad de las versiones. El equipo lee y discute sus propios resultados antes de que nadie más vea un resumen. Los demás ven tendencias y los obstáculos en los que el equipo pide ayuda, no puntuaciones con las que comparar. Esto mantiene la herramienta como una ayuda para el aprendizaje, y depende de la [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety), la creencia compartida de que no se castigará a nadie por hablar.

**5. Cronometra los ciclos de retroalimentación que importan.** Mide la duración de los ciclos de los que se queja la gente: compilación local, conjunto de pruebas, espera de la revisión de código, despliegue en un entorno de prueba. Informa la mediana y el percentil 85, ya que una cola lenta duele más de lo que sugiere el promedio. Comparte los números con el equipo propietario de la canalización, y fija la mejora como un trabajo regular (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

**6. Protege la concentración y mídela con suavidad.** Pregunta por la concentración en el pulso, y mira qué causa las interrupciones: la carga de reuniones, las notificaciones, las peticiones no planificadas. Si un equipo desea mirar los patrones del calendario, hazlo con su acuerdo y agrega los resultados. No hagas nunca seguimiento de la actividad ni de la presencia de individuos. El objetivo es encontrar interrupciones estructurales que eliminar, como una reunión que podría ser un documento.

**7. Sigue los obstáculos hasta su resolución.** Mantén una lista visible de los obstáculos que el equipo ha planteado, y mide cuánto tardan en resolverse o en dejarse de lado conscientemente. Una lista larga que nunca se acorta enseña a la gente que plantear problemas es inútil. La decisión de no eliminar un obstáculo, con un motivo, cuenta como resolución.

### Usa los resultados para mejorar

**8. Actúa sobre una o dos cosas a la vez.** Elige el obstáculo de mayor valor, corrígelo y díselo al equipo. La acción visible hace más por la confianza que un informe largo. Resiste la tentación de lanzar muchas iniciativas a la vez.

**9. Empareja las medidas de personas con medidas de resultados.** Mira cómo se relacionan los ciclos de retroalimentación y la carga cognitiva con los resultados de entrega y de estabilidad (véase el tema 2.8, Métricas DORA). No reclames causalidad a partir de la correlación en tus propios datos. Usa el emparejamiento para encontrar preguntas que explorar, como si los equipos con revisiones más lentas también tienen tiempos de ciclo más largos.

**10. Mantén los recuentos de actividad fuera de la conversación.** No informes de commits, líneas de código ni tickets cerrados por persona. Los recuentos de salidas del equipo pueden ser útiles para el flujo, pero dicen poco sobre la salud. Si alguien pide métricas de actividad individuales, explica la investigación y ofrece en su lugar medidas de condiciones.

### Protege a las personas

**11. Fija las reglas de privacidad antes de recoger datos.** Escribe qué se recoge, por qué, quién lo ve, cuánto tiempo se conserva y qué no se hará nunca con ello. Agrega a nivel de equipo, suprime los grupos pequeños y deja que representantes de las personas implicadas revisen las reglas. No uses nada de estos datos en evaluaciones de desempeño, promociones ni sanciones.

**12. Haz del ritmo sostenible la opción por defecto.** Vigila las señales de que un equipo funciona al rojo vivo: una larga racha de incidentes fuera de horario, un estado permanente de urgencia, listas de obstáculos que crecen, satisfacción que baja. Trátalas como problemas del sistema que corregir con alcance, dotación o prioridades. Un ritmo constante que la gente pueda mantener es un objetivo de diseño, y respalda la calidad, el aprendizaje y la retención (véase el tema 9.2, Métricas de satisfacción y bienestar).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tiempo del ciclo de retroalimentación | Excluir los casos lentos; medir un camino rápido que la mayor parte del trabajo no toma | Informar el percentil 85; definir el inicio y el final de cada ciclo en el registro |
| Proporción de tiempo de concentración | Bloquear tiempo en el calendario sin concentrarse; informar una concentración inflada para complacer a los responsables | Pulso propiedad del equipo; comparar con las causas de interrupción; sin informes individuales |
| Valoración de la carga cognitiva | Valorar bajo los sistemas para evitar el escrutinio; elegir sistemas fáciles para valorar | Valorar una lista fija de sistemas; comparar con el tiempo de incorporación y los patrones de incidentes |
| Tiempo de resolución de obstáculos | Cerrar obstáculos sin corregirlos; negarse a registrar obstáculos | El equipo confirma la resolución; tasa de obstáculos reabiertos |
| Tendencia del chequeo de salud del equipo | Los responsables presionan por buenas puntuaciones; los equipos ajustan las puntuaciones para evitar atención | El equipo posee los resultados; tendencias compartidas solo con consentimiento del equipo |
| Satisfacción con herramientas y procesos | Encuestar a usuarios contentos; entrenar al personal para responder bien | Tasa de respuesta y composición; leer los comentarios; vincular con medidas del sistema |
| Cobertura de dimensiones | Contar una dimensión con una medida simbólica | Comprobar que cada medida contada se usa en una decisión |

Una lectura sana es ciclos de retroalimentación más cortos y estables, una carga cognitiva decreciente en los sistemas clave, equipos que informan de una concentración real, obstáculos que se plantean y se resuelven, chequeos de salud en los que el equipo confía y ningún uso de los datos sobre individuos.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Encuestas de percepción | Captan lo que los sistemas no pueden; bajo costo | Subjetivas; vulnerables al miedo y a la fatiga |
| Medidas de flujo de trabajo | Objetivas; continuas | Pasan por alto los sentimientos y las causas; riesgo de vigilancia |
| Chequeo de salud propiedad del equipo | Honesto y útil para el equipo | Difícil de comparar; difícil de escalar |
| Encuesta estándar de toda la empresa | Comparable entre equipos | Menos relevante; usada para clasificar |
| Recuentos de actividad | Fáciles de recoger | Malos sustitutos; fáciles de manipular |
| Medidas centradas en las condiciones | Señalan causas corregibles | Necesitan esfuerzo de seguimiento |
| Pulsos frecuentes | Oportunos | Fatiga de encuestas |
| Encuesta anual | Poca carga | Lenta; obsoleta |

La respuesta en prosa es combinar chequeos de salud propiedad del equipo y pulsos breves con medidas de flujo de trabajo de los ciclos de los que se queja la gente, evitar los recuentos de actividad y proteger la privacidad. Usa con moderación las comparaciones de toda la empresa, y nunca para clasificar equipos.

## Preguntas para conversar con tu equipo

**1. ¿Cuál es el ciclo de retroalimentación más lento de nuestra jornada, y cuánto tarda realmente?**
Elige el ciclo del que más se queja la gente. Cronométralo desde los sistemas y compáralo con lo que dice la gente. El facilitador debe anotar las sorpresas, en cualquier sentido. Acordad un cambio que lo acortaría, y quién es su responsable.

**2. ¿Qué sistema nos da miedo cambiar, y qué lo hace difícil?**
Nombra el sistema. ¿La dificultad está en el código, la documentación, las herramientas o el conocimiento que tienen unas pocas cabezas? Pregunta qué mejora reduciría más la carga. Planificad cómo saber si funcionó.

**3. ¿Cuándo tuvo cada uno de nosotros por última vez un largo bloque de tiempo ininterrumpido, y qué interrumpió los que fallaron?**
Compartid con honestidad y sin culpas. Enumera las interrupciones y clasifícalas en estructurales (reuniones, notificaciones, peticiones no planificadas) e incidentales. Elige una interrupción estructural que reducir.

**4. ¿Qué obstáculo hemos planteado más de una vez sin resultado?**
Mira la lista de obstáculos. Para cada elemento antiguo, pregunta quién podría resolverlo y qué le bloquea. Si el equipo ha dejado de plantear obstáculos, discutid por qué. Acordad uno que escalar con evidencia.

**5. ¿Qué nos haría dudar en dar una respuesta honesta en el chequeo de salud?**
Discutid los miedos sobre cómo podrían usarse los resultados. El facilitador debe registrar las inquietudes y acordar reglas: quién ve los datos, qué no se hará nunca con ellos. Si las reglas no inspiran confianza, decidlo, y decidid qué la ganaría.

**6. ¿Cuáles de nuestras medidas podrían subir mientras el trabajo empeora?**
Enumera las medidas y piensa en formas de mejorar cada una sin ayudar a nadie. Asigna una barrera de protección a cada una. Elimina cualquier medida que no tenga uso en una decisión.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega son quienes mejor saben qué los frena y son los dueños de su propio chequeo de salud. Deben nombrar los obstáculos, cronometrar los ciclos que controlan y decidir con el equipo qué corregir primero. Deben resistir la presión de informar de la actividad individual e insistir en medidas a nivel de equipo.

### Equipos de servicio y operaciones

Los equipos de operaciones cargan con guardias, interrupciones y trabajo no planificado que erosionan la concentración y el ritmo. Deben plantear la carga estructural como un problema del sistema, medir los ciclos de sus propias herramientas y mantener una rotación sostenible. Se benefician de las listas de obstáculos compartidas con los equipos de entrega, ya que muchos obstáculos cruzan la frontera.

### Liderazgo y gobernanza

Los líderes fijan las condiciones y deciden cómo se usan los datos. Deben financiar las correcciones que revelen las medidas de condiciones, proteger las reglas de privacidad y pedir tendencias y obstáculos en lugar de puntuaciones con las que comparar. La gobernanza debe tratar una petición de métricas de actividad individuales como un motivo para revisar las reglas, y debe esperar que el trabajo de mejora sea visible.

### Clientes y usuarios

Los usuarios se benefician de los equipos que pueden trabajar con calma y aprender deprisa, porque sus problemas se resuelven bien. También notan cuando un equipo está desbordado: respuestas más lentas, errores repetidos, alta rotación. Su retroalimentación es evidencia desde fuera sobre la salud del equipo, y merecen honestidad sobre cómo se priorizan las correcciones.

## En la práctica: un ejemplo de ITIL ágil

El grupo de tecnología de una aseguradora nacional tiene 14 equipos que construyen y operan servicios de pólizas y de siniestros. La dirección pide un panel de productividad de desarrolladores. La primera petición es de commits y tickets cerrados por persona. La jefa de eficacia de ingeniería propone un enfoque distinto. Los números siguientes son ilustrativos.

Empieza con conversaciones en cinco equipos. Surgen repetidamente tres obstáculos: el conjunto de pruebas tarda 70 minutos, las revisiones de código esperan mucho en los equipos que dependen de dos revisores sénior y nadie se siente capaz de cambiar el servicio heredado de cálculo de siniestros. Mide lo que puede desde los sistemas. La mediana del ciclo de compilación y pruebas es de 58 minutos con un percentil 85 de 92. La mediana de la espera de la primera revisión es de 9 horas laborables y el percentil 85 es de 31 horas. Añade un breve pulso trimestral con las tres preguntas de DevEx, con un grupo mínimo de informe de cinco. La valoración de la carga cognitiva del servicio de cálculo de siniestros es de 4,4 en una escala de cinco puntos donde 5 es muy difícil, frente a 2,6 del portal de pólizas. El tiempo de concentración informado por los equipos es de unas 3 horas al día, con las reuniones y las peticiones no planificadas como causas principales. Cada equipo hace su propio chequeo de salud en las dimensiones que eligió, y solo lee la tendencia combinada.

El grupo acuerda cuatro acciones con los equipos. El conjunto de pruebas se divide y se paraleliza, y el percentil 85 baja de 92 a 41 minutos en dos meses. Una rotación de revisión reparte la carga más allá de los dos revisores sénior, y la espera en el percentil 85 baja a 14 horas. Tres equipos acuerdan un bloque semanal sin reuniones, y un equipo rehace cómo le llegan las peticiones no planificadas. El servicio de cálculo de siniestros se convierte en un proyecto de aprendizaje compartido, con programación en pareja y documentación, y su valoración de carga cognitiva baja a 3,5 en dos trimestres. El tiempo de concentración informado sube a unas 4 horas.

Cuando un alto responsable vuelve a pedir recuentos individuales de commits, la jefa de eficacia de ingeniería explica la investigación de SPACE y DevEx y ofrece el panel de condiciones. La decisión se registra, con las reglas de privacidad que dicen que la actividad individual no se usará nunca en evaluaciones. Un equipo pide que sus resultados del chequeo de salud no se resuman para la dirección este trimestre, y se concede la petición. La rotación de personal en los equipos implicados baja durante el año siguiente, y ella anota que no puede demostrar la conexión y que no la reclamará.

## Perspectiva por sector

**Startup.** Todos conocen a todos, así que las conversaciones superan a las encuestas. Cronometra los principales ciclos de retroalimentación, mantén rápidas las compilaciones y vigila las señales de un ritmo insostenible, porque unas pocas personas cargan con mucho. No importes un gran programa de encuestas.

**Pequeña empresa.** Un equipo pequeño puede ser de una o dos personas que construyen y dan soporte. Su principal riesgo es la interrupción y la dependencia de individuos. Mantén una lista sencilla de obstáculos, asegura la cobertura de las ausencias y preguntaos con regularidad qué se interpone en el camino. Los datos a nivel individual son identificativos por naturaleza, así que apóyate en la conversación.

**Gran empresa.** La escala da variedad y tentaciones de comparación. Ofrece un conjunto común de herramientas (preguntas de pulso, cronometraje de ciclos) dejando que los equipos posean sus chequeos de salud. Agrega con cuidado, comparte los patrones entre equipos para extender las correcciones y mantén fuera las clasificaciones. Implica a los comités de empresa o a los representantes de los empleados donde existan.

**Gobierno y sector público.** La contratación, las reglas de seguridad y las cadenas de aprobación alargan los ciclos de retroalimentación, y el personal puede tener fuertes protecciones frente a la monitorización. Mide los ciclos, implica a los representantes en la fijación de las reglas de datos y usa los hallazgos para simplificar procesos. Los servidores públicos motivados por el valor del servicio se benefician de la eliminación visible de obstáculos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el tiempo de los equipos para los chequeos de salud y los pulsos, algo de instrumentación de las canalizaciones y de las herramientas de revisión, un analista o coach que ayude a interpretar los resultados y a facilitar, y el tiempo de ingeniería para eliminar obstáculos. La mayoría de estos costos son pequeños comparados con el costo de los ciclos lentos multiplicado por muchas personas.

El retorno proviene del tiempo recuperado, de menos retrabajo, de una mejor retención y de un aprendizaje más rápido. Estímalo a partir de tus propios datos: las horas por semana perdidas esperando compilaciones y revisiones en todo el grupo, el costo de contratar e incorporar para sustituir a quienes se van y los patrones de incidentes o defectos vinculados a equipos sobrecargados. Sé cauteloso al convertir minutos en dinero, y declara los supuestos. Evita las afirmaciones de estudios publicados sobre ganancias de productividad salvo que puedas rastrear su método y su encaje. Recuerda el costo de equivocarse: un programa visto como vigilancia daña la confianza y la calidad de cada encuesta posterior (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Paneles de productividad individual.** Miden actividad, invitan a la manipulación y dañan la confianza. Mide las condiciones a nivel de equipo.
- **Usar las puntuaciones del chequeo de salud para comparar equipos.** Los equipos entonces gestionan la puntuación. Deja que los equipos posean sus resultados.
- **Encuestas sin acción.** La gente deja de responder. Corrige algo visible en cada ciclo.
- **Medir el tiempo conectado o la presencia.** Premia la visibilidad y castiga la concentración. Mide los ciclos y los obstáculos.
- **Una sola medida para todo.** Pasa por alto la mayor parte del cuadro. Cubre varias dimensiones.
- **Ignorar la cola.** Las medianas ocultan los ciclos lentos que duelen. Informa percentiles.
- **Culpar a las personas de los problemas del sistema.** Los obstáculos suelen ser estructurales. Corrige la estructura.
- **Funcionar al rojo vivo como algo normal.** La urgencia permanente quema a la gente. Trata la sobrecarga sostenida como un fallo de planificación.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Comprensión de las condiciones | Anécdota | Encuesta ocasional | Conversaciones y pulsos regulares sobre ciclos de retroalimentación, carga y flujo | Datos de percepción y de flujo de trabajo combinados, con tendencias a nivel de equipo | Visión compartida de las condiciones entre equipos y proveedores; los equipos codiseñan las medidas |
| Propiedad y ética | La dirección lee todo | Cuidado informal | Chequeos de salud propiedad del equipo; reglas de privacidad escritas | Reglas revisadas con representantes; prohibición del uso individual aplicada | Reglas y prácticas auditadas de forma independiente; los equipos controlan el intercambio de datos |
| Acción | Quejas sin atender | Correcciones ad hoc | Lista de obstáculos con responsables; una o dos correcciones por ciclo | Correcciones con seguimiento y vinculadas a resultados; ritmo sostenible vigilado | Eliminación de obstáculos incorporada a la planificación; aprendizaje compartido ampliamente |

## Lista de verificación

- [ ] Los equipos han dicho con sus propias palabras qué los frena.
- [ ] Al menos una pregunta de percepción y una medida del sistema cubren cada uno de los ciclos de retroalimentación, la carga cognitiva y el flujo.
- [ ] Las medidas provienen de al menos tres dimensiones de SPACE.
- [ ] Cada equipo posee su chequeo de salud y lee primero los resultados.
- [ ] Los tiempos de los ciclos de retroalimentación se informan como mediana y percentil 85.
- [ ] Una lista visible de obstáculos tiene responsables, y se sigue el tiempo de resolución.
- [ ] Los resultados se informan a nivel de equipo con un tamaño mínimo de grupo.
- [ ] Reglas de privacidad escritas declaran que los datos individuales no se usarán en evaluaciones.
- [ ] Los recuentos de actividad no se informan como productividad.
- [ ] El equipo ve al menos una corrección por ciclo.

## Prompts de IA

**Redacta preguntas de pulso para las tres dimensiones de DevEx.**

```text
Redacta un breve pulso de no más de seis preguntas para [type of team] que cubra
los ciclos de retroalimentación, la carga cognitiva y el estado de flujo. Usa
una redacción neutral, una escala coherente y un comentario abierto. Para cada
pregunta sugiere una medida del sistema con la que podamos compararla. No
afirmes resultados de investigación. Enumera tus supuestos y las formas en que
las preguntas podrían malinterpretarse.
```

**Analiza los patrones de la lista de obstáculos.**

```text
Aquí está la lista de obstáculos del equipo del último [period] con las fechas
en que se plantearon, las fechas en que se resolvieron y breves descripciones:
[paste, sanitized]. Agrupa los obstáculos por causa, señala los elementos
antiguos y los patrones, y sugiere cuáles uno o dos abordar primero y por qué.
No infieras motivos ni nombres a individuos. Enumera tus supuestos y lo que
debería confirmar el equipo.
```

**Redacta reglas de privacidad para un programa de salud del equipo.**

```text
Redacta un conjunto de reglas de una página para un programa de salud del equipo
y de experiencia de desarrollo en [type of organization]. Cubre qué se recoge,
el propósito, quién ve qué, el tamaño mínimo de grupo, la retención, una promesa
de que los datos individuales no se usarán en evaluaciones de desempeño y cómo
puede el personal plantear inquietudes. Señala todo lo que debería revisar con
el área jurídica, de privacidad y con los representantes de los empleados. No
des conclusiones jurídicas. Enumera tus supuestos.
```

**Compara las condiciones con los resultados.**

```text
Para [number] equipos tenemos medidas de condiciones (tiempos de ciclos de
retroalimentación, valoraciones de carga cognitiva, tiempo de concentración) y
medidas de resultados (tiempo de ciclo, tasa de fallos de cambio, incidentes):
[paste table]. Describe los patrones, di dónde los datos son demasiado escasos
para concluir nada y sugiere hipótesis que poner a prueba con los equipos. No
afirmes causalidad. Enumera tus supuestos y cautelas.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de salud del equipo o de experiencia de desarrollo.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica relacionada con personas lleva su vector de manipulación, su barrera de protección y sus reglas de privacidad.

## Puntos clave

- Mide las condiciones en que trabaja la gente: ciclos de retroalimentación, carga cognitiva y flujo.
- Combina lo que dice la gente con lo que registran los sistemas, y mira los desacuerdos.
- Deja que los equipos posean sus chequeos de salud, informa a nivel de equipo y no uses nunca los datos sobre individuos.
- Evita los recuentos de actividad como sustituto de la productividad.
- Actúa de forma visible sobre uno o dos obstáculos a la vez, y sigue cuánto tardan en resolverse.
- Protege un ritmo que el equipo pueda sostener indefinidamente.

## Referencias y lecturas complementarias

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
