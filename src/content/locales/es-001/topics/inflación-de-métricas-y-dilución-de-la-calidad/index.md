# Inflación de métricas y dilución de la calidad

**Cuando la IA abarata el volumen y la rapidez, toda métrica que cuenta volumen y rapidez se infla, así que empareja cada una con una medida de utilidad que una persona haya comprobado, y vigila si la señal de tus datos se está ahogando.**

## Resumen y motivación

Una métrica funciona porque refleja algo que es difícil de producir. Los tickets resueltos reflejan esfuerzo. Los documentos escritos reflejan conocimiento. Las pruebas añadidas reflejan cuidado. Cuando una herramienta hace casi gratuita la producción visible, se rompe el vínculo entre la producción y el esfuerzo. Los números siguen subiendo y el significado se escurre. Esto es la inflación de métricas, y su compañera es la dilución de la calidad: baja la proporción de lo producido que es útil, y la parte útil se vuelve más difícil de encontrar.

Esto no es un problema nuevo. La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) y su pariente la [ley de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) describen cómo se corrompen las medidas usadas para el control. Una [métrica de vanidad](https://en.wikipedia.org/wiki/Vanity_metric) parece impresionante y no dice nada sobre la salud del trabajo. Lo que cambia la IA es la velocidad y la escala a la que puede generarse producción y, con ellas, la velocidad y la escala a las que pueden darse estos viejos fallos. Un equipo que antes inflaba un recuento a mano ahora puede hacerlo en minutos, a menudo sin pretenderlo.

Varios patrones se repiten en el trabajo de servicio y de entrega.

- **Inflación de volumen.** La IA redacta más tickets, más respuestas, más comentarios, más casos de prueba, más documentos y más código. Los recuentos de estos suben. También suben las cargas de trabajo de quienes deben leer, revisar y mantener todo ello.
- **Inflación de rapidez.** El tiempo hasta el primer borrador baja de forma pronunciada, y el tiempo hasta un resultado terminado y comprobado baja menos, o nada. Un panel que informa del primero cuenta una historia halagadora.
- **Ruido.** Más contenido compite por la atención. La [sobrecarga de información](https://en.wikipedia.org/wiki/Information_overload) es la condición en que una persona no puede procesar el volumen de información que se le presenta, y la [relación señal-ruido](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) de la base de conocimiento, de la cola de tickets o del flujo de alertas baja. La [fatiga de alertas](https://en.wikipedia.org/wiki/Alert_fatigue) es su forma operativa (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).
- **Contenido generado de baja calidad.** El contenido producido en masa con poca revisión, a veces llamado [bazofia de IA](https://en.wikipedia.org/wiki/AI_slop) (AI slop), es verosímil y endeble. Una base de conocimiento sembrada con esos artículos se vuelve menos fiable, y los usuarios aprenden a desconfiar de ella.
- **Costo de verificación.** El esfuerzo de comprobar una afirmación suele ser mucho mayor que el de hacerla, un patrón a veces llamado [ley de Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Cuando generar es barato, la verificación se convierte en el cuello de botella.
- **Eficiencia que aumenta el consumo.** La [paradoja de Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) describe casos en que las ganancias de eficiencia llevan a más uso de un recurso, no a menos. Si redactar un informe se abarata, se exigen más informes. El tiempo ahorrado por una herramienta puede ser consumido por más trabajo de menor valor.
- **Ciclos de retroalimentación.** Si el contenido generado alimenta la siguiente ronda de generación, los errores se acumulan. La literatura de investigación describe el [colapso de modelos](https://en.wikipedia.org/wiki/Model_collapse) en modelos entrenados con sus propias salidas. Un ciclo similar puede darse dentro de una organización cuando un asistente resume tickets escritos por un asistente a partir de artículos que resumió un asistente.
- **Líneas base a la deriva.** Si la distribución de los datos cambia a causa de la IA, las tendencias y los umbrales ya no significan lo que significaban. Esto se parece a la [deriva de concepto](https://en.wikipedia.org/wiki/Concept_drift) del aprendizaje automático, donde la relación entre las entradas y los resultados cambia con el tiempo. Un aumento del volumen de tickets puede reflejar una creación de tickets más fácil, no más problemas.

Los objetivos ágiles importan aquí. La entrega continua, la mejora continua y el ritmo sostenible dependen de que la señal sea clara. No se debe pedir a las personas motivadas que se abran paso entre ruido generado por máquinas ni que verifiquen montones de producción a un ritmo insostenible. Las partes interesadas implicadas de forma continua son también la mejor defensa: te dirán cuándo los informes dejan de ayudar.

Este tema da las medidas para notar la inflación y la dilución, y los emparejamientos que las exponen. Se apoya en los fundamentos y en las medidas del trabajo asistido (véanse el tema 10.1, La IA en la medición de la gestión de servicios, y el tema 10.2, Medición del trabajo asistido por IA).

## Principios clave

- **Empareja toda métrica de volumen o de rapidez con una comprobación de utilidad.** Una persona juzga si la salida es útil.
- **Mide hasta un resultado terminado y verificado.** La rapidez del primer borrador es una trampa.
- **Vigila la carga de verificación.** Crece en silencio y consume el tiempo ahorrado.
- **Protege la señal.** Mantén la base de conocimiento, las colas y las alertas lo bastante limpias como para fiarse de ellas.
- **Rompe los ciclos de retroalimentación.** No dejes que el contenido generado alimente la generación sin revisión.
- **Restablece las líneas base cuando cambian los datos.** Las tendencias a través de un cambio tecnológico necesitan cuidado.
- **Prefiere menos salidas y mejores.** Menos puede ser más cuando la atención es el recurso limitante.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Razón entre producción y resultado | Volumen de producción relativo al resultado que debía producir | recuento de producción (tickets, artículos, cambios) / medida de resultado (problemas resueltos, artículos usados, cambios retenidos), en el mismo periodo, con seguimiento de la tendencia | razón | Gestor de trabajo, base de conocimiento, medidas de resultado | Mejora continua; medición e informes | Software que funciona sobre el volumen de documentación | Mensual |
| Proporción de elementos útiles | Proporción de elementos muestreados que un revisor cualificado juzga útiles | elementos muestreados juzgados útiles (correctos, pertinentes, no duplicados) / elementos muestreados | porcentaje | Revisión de una muestra aleatoria | Gestión del conocimiento; aseguramiento de la calidad | Definición de terminado del contenido | Mensual |
| Carga de verificación | Tiempo humano dedicado a comprobar y corregir el trabajo generado por unidad de producción | horas de revisión y de corrección / unidades de producción, con seguimiento de la tendencia | horas por unidad | Estimaciones de tiempo, datos de la herramienta de revisión | Gestión financiera del servicio; mejora continua | La capacidad de revisión como restricción | Mensual |
| Tasa de redundancia del contenido | Proporción de elementos de conocimiento que duplican o se solapan sustancialmente con otro | elementos señalados como duplicados o solapados en la revisión o por coincidencia / elementos de la base de conocimiento | porcentaje | Revisión de la base de conocimiento, informes de coincidencias | Gestión del conocimiento | Única fuente de verdad | Trimestral |
| Proporción revisada del conocimiento generado | Proporción de elementos de conocimiento generados por IA que una persona cualificada ha revisado y aprobado antes de su publicación | elementos generados publicados con revisión aprobada / elementos generados publicados | porcentaje | Metadatos de la base de conocimiento | Gestión del conocimiento; habilitación de cambios | Revisión antes de la versión | Mensual |
| Entrada frente a resolución de la lista de pendientes | Crecimiento del trabajo que llega relativo al crecimiento del trabajo resuelto, para las colas afectadas por la IA | (cambio en los elementos creados) / (cambio en los elementos resueltos), comparado con la línea base previa a la IA | razón | Historial de tickets y del seguimiento | Gestión de incidentes; gestión de solicitudes de servicio | Equilibrio del flujo | Mensual |
| Señales de deriva de las métricas | Número de métricas cuya definición o distribución cambió de forma apreciable tras introducir la IA, revisadas y anotadas | métricas señaladas en la revisión / métricas del registro | recuento; porcentaje | Revisión del registro de métricas, comprobaciones de distribución | Medición e informes | Retrospectiva sobre la medición | Trimestral |

Define "útil" en una rúbrica escrita: correcto, pertinente a una necesidad real, no duplicado y actual. La carga de verificación cuenta el tiempo dedicado por las personas, incluido el de volver a dar instrucciones, y excluye el tiempo que es solo de espera. La proporción revisada es un control: el conocimiento generado sin revisar se sigue por separado y se mantiene visiblemente etiquetado. Las señales de deriva de las métricas son conversaciones, no sanciones: una señal significa que una persona ha decidido si ajustar la definición, anotar la tendencia o restablecer la línea base. Todas las medidas describen procesos y contenido, no individuos.

## Recomendaciones

### Empareja el volumen con la utilidad

**1. Incorpora una comprobación de utilidad a toda métrica de volumen.** Para cada medida de volumen o de rapidez de tu panel, nombra una medida de utilidad que una persona haya juzgado. Los tickets creados se emparejan con la calidad de la resolución, los artículos escritos con el uso y la exactitud de los artículos, los cambios integrados con la retención y el retrabajo (véase el tema 10.2, Medición del trabajo asistido por IA). Muéstralos juntos y discutid cuando divergen.

**2. Muestrea y juzga con regularidad.** Cada mes, extrae una muestra aleatoria de elementos de los flujos que toca la IA y haz que una persona cualificada los juzgue frente a una rúbrica escrita. Registra la proporción útil y los motivos por los que fallan los elementos. Rota a los revisores y mantenlos independientes de los productores. El muestreo es la principal defensa contra la dilución lenta.

**3. Informa de los resultados antes que de la producción.** En los informes a los líderes, empieza por los resultados: problemas resueltos, usuarios satisfechos, defectos evitados. Pon los recuentos de producción después, como contexto. Si el informe seguiría siendo valioso sin los recuentos de producción, está bien orientado.

### Controla la verificación y el ruido

**4. Mide la carga de verificación.** Estima el tiempo dedicado a comprobar y corregir el trabajo generado, y sigue su tendencia por unidad de producción. Si sube al subir la producción, la ganancia neta es menor de lo que sugieren los números de generación, y los revisores pueden estar camino de la sobrecarga. Incluye la carga en el costo por tarea (véase el tema 10.1, La IA en la medición de la gestión de servicios).

**5. Limita lo que entra en el sistema.** Decide qué contenido generado puede crearse y publicarse automáticamente y qué necesita revisión. Fija límites al tamaño y al número de cambios generados en una revisión. Facilita decir no al volumen. Una cola más pequeña con elementos más claros sirve mejor a los usuarios.

**6. Gestiona la base de conocimiento como un producto.** Etiqueta el contenido generado, exige revisión antes de la publicación, retira los duplicados y los elementos obsoletos y sigue la redundancia y el uso. Una base de conocimiento es útil en proporción a cuánto confían en ella los usuarios. Elimina los artículos que nadie usa y que nadie puede avalar (véase el tema 3.6, Métricas de gestión del conocimiento).

**7. Mantén limpios los flujos de alertas y de tickets.** Si la IA crea tickets a partir de alertas o de resúmenes, mide la proporción útil y los duplicados. Ajusta con decisión. Trata una relación señal-ruido decreciente como un incidente por derecho propio, ya que perjudica la respuesta cuando llegue un problema real.

### Rompe los ciclos y vigila la línea base

**8. Impide que el contenido generado se alimente a sí mismo sin comprobación.** Donde un asistente se apoye en una base de conocimiento, un historial de tickets o informes pasados, asegura que el material generado de esas fuentes se haya revisado, o que esté etiquetado y ponderado en consecuencia. Muestrea la cadena: elige una respuesta y rastréala hasta sus fuentes para ver de dónde viene. Los ciclos sin comprobar amplifican los errores.

**9. Restablece la línea base cuando cambian los datos.** Tras introducir la IA, anota los gráficos de tendencia y, donde haya cambiado la naturaleza de los datos, empieza una línea base nueva. Comprueba las distribuciones, no solo los totales: la longitud de los tickets, la mezcla de categorías y el tiempo de creación pueden cambiar. Las señales de deriva de las métricas provocan estas conversaciones (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**10. Busca el rebote.** Cuando una tarea se abarata, pregunta si crecerá la demanda de ella. Decide de antemano cómo usar el tiempo ahorrado, para que no lo absorba más producción de poco valor. Un equipo que produce el doble de informes con el mismo esfuerzo puede estar haciendo un trabajo menos útil.

### Mantén la atención humana en el ciclo

**11. Protege la atención de los revisores y de los usuarios.** La capacidad de revisión y la atención son escasas. Reduce el volumen de material que la gente debe leer, da a los revisores cargas realistas y pregúntales qué se está volviendo más difícil. Un ritmo sostenible incluye el ritmo de leer y juzgar (véase el tema 9.2, Métricas de satisfacción y bienestar).

**12. Pregunta a los usuarios y a las partes interesadas si la señal es clara.** La implicación continua de las personas que usan las salidas es la mejor prueba. Pregunta si la base de conocimiento es más fácil o más difícil de usar, si los informes les dicen lo que necesitan, si la cola se siente más clara. Sus respuestas y sus comentarios deben leerse junto a los números.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Razón entre producción y resultado | Elegir una medida de resultado que sube con el volumen; cambiar el periodo | Resultado fijado en el registro; comparar con la satisfacción y la tasa de reapertura |
| Proporción de elementos útiles | Muestrear elementos fáciles; rúbrica indulgente; revisores influidos por el productor | Muestra aleatoria; rúbrica escrita; revisores independientes y rotativos |
| Carga de verificación | No registrar el tiempo de revisión; trasladar la comprobación a equipos posteriores | Incluir el retrabajo posterior; preguntar a los revisores por la carga |
| Tasa de redundancia del contenido | Reglas de coincidencia estrechas que pasan por alto duplicados; fusionar elementos distintos | Muestrear duplicados a mano; registrar las reglas de fusión |
| Proporción revisada del conocimiento generado | Marcar la revisión como completa sin leer; revisar en bloque | Muestrear las revisiones en busca de sustancia; tiempo por revisión; tasa de errores en los elementos publicados |
| Entrada frente a resolución de la lista de pendientes | Cierre automático de elementos; dividir elementos | Comprobar la calidad de la resolución; tasa de reapertura; muestrear los elementos cerrados |
| Señales de deriva de las métricas | No señalar para evitar trabajo; señalarlo todo | Revisar todas las métricas cada trimestre; exigir una decisión para cada señal |

Una lectura sana es una proporción de elementos útiles estable o creciente al crecer el volumen, una carga de verificación conocida y asumible, una base de conocimiento con baja redundancia y contenido generado revisado, colas con una señal clara y una visión de los líderes que empieza por los resultados.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Contar producción | Fácil, familiar | Se infla; premia el volumen |
| Medir resultados | Refleja el valor | Más lento; más difícil de atribuir |
| Muestrear y juzgar | Detecta la dilución | Necesita revisores hábiles; esfuerzo |
| Puntuación automática de calidad | Escala | La opinión de otro modelo; puede compartir los mismos puntos ciegos |
| Revisar todo lo generado | Seguro | Elimina el beneficio; revisores sobrecargados |
| Revisar una muestra | Práctico | Algunos elementos pobres pasan |
| Permitir la generación abierta | Rápida, amplia | Ruido; la confianza se erosiona |
| Limitar la generación a usos aprobados | Señal más limpia | Adopción más lenta; beneficios perdidos |

La respuesta en prosa es medir resultados, muestrear y juzgar la utilidad con personas, limitar lo que entra en los almacenes compartidos sin revisión y revisar las líneas base. Usa la puntuación automática como ayuda y no como juez.

## Preguntas para conversar con tu equipo

**1. ¿Cuáles de nuestros números han subido desde que empezamos a usar IA, y qué han hecho por las personas a quienes servimos?**
Enumera los números. Para cada uno, mira el resultado que debía reflejar. El facilitador debe anotar dónde no se movió el resultado. Empareja esos números con una comprobación de utilidad.

**2. ¿Cuánto de lo que publicamos o creamos el mes pasado nos alegraría defender línea a línea?**
Toma una muestra aleatoria y leedla juntos. Marca lo que es útil, endeble, erróneo o duplicado. Discutid la proporción y las causas. Acordad una norma de lo que entra en los almacenes compartidos.

**3. ¿Dónde se está convirtiendo en nuestro cuello de botella la comprobación?**
Pregunta a los revisores. Mira las colas de revisiones, la profundidad de la revisión y el esfuerzo que ahora cargan. Acordad un límite al tamaño o al número de elementos generados por revisión, y una forma de medir la carga.

**4. ¿Qué contenido generado está alimentando aquí a otro contenido generado?**
Rastrea una respuesta típica hasta sus fuentes. ¿Dónde empezó la cadena? Discutid dónde debería comprobar la cadena una persona, o etiquetar el contenido.

**5. ¿Qué diría un usuario de nuestra base de conocimiento ahora, comparado con hace un año?**
Lee los comentarios recientes y mira los datos de uso. Pregunta si es más fácil o más difícil encontrar una respuesta fiable. Acordad una limpieza y una regla para el contenido nuevo.

**6. ¿Cuáles de nuestras tendencias deberíamos reiniciar con una línea base nueva?**
Enumera las métricas que dependen del volumen o de cómo se crean los elementos. Busca cambios de forma desde que llegó la IA. Anota las tendencias y decide cuáles necesitan una línea base nueva.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega generan buena parte del volumen y cargan con el mantenimiento. Deben favorecer cambios más pequeños y claros, mantener revisado y etiquetado el material generado y vigilar la retención y el retrabajo. Deben rechazar las métricas basadas en el volumen generado y pedir medidas de resultado.

### Equipos de servicio y operaciones

Los equipos de operaciones viven en las colas, las alertas y la base de conocimiento que daña la dilución. Deben ajustar los tickets y las alertas creados por IA para mantener fuerte la señal, revisar el conocimiento generado antes de publicarlo e informar cuando el flujo se vuelve ruido. Son los mejor situados para juzgar la utilidad.

### Liderazgo y gobernanza

Los líderes reciben los paneles que distorsiona la inflación. Deben pedir primero los resultados, exigir comprobaciones de utilidad junto al volumen, financiar la capacidad de revisión y aceptar que algunas medidas necesitan restablecer su línea base. La gobernanza debe comprobar que el contenido generado de los almacenes compartidos se revisa y se etiqueta.

### Clientes y usuarios

Los usuarios soportan el costo de la dilución cuando las respuestas son erróneas, los artículos se contradicen y las respuestas son largas y vacías. Quieren una ayuda corta, correcta y pertinente. Su reacción ante la calidad de lo que reciben es una prueba directa de si sobrevivió la señal.

## En la práctica: un ejemplo de ITIL ágil

El grupo de TI de una empresa farmacéutica mundial habilita un asistente de IA para redactar artículos de conocimiento, resumir tickets y preparar informes semanales de estado. En un trimestre, el panel se ve excelente. Los números siguientes son ilustrativos.

Los artículos de conocimiento creados suben de 140 a 610 al mes. Los tickets llevan resúmenes detallados escritos por IA. Los informes semanales alcanzan doce páginas. La responsable de calidad del servicio nota que la satisfacción con el autoservicio ha bajado y que el centro de servicios informa de más contactos de "el artículo no me ayudó". Muestrea 100 de los artículos nuevos con dos agentes experimentados. Solo 54 se juzgan útiles: 23 duplican artículos existentes, 15 contienen pasos obsoletos o incorrectos y 8 son demasiado vagos para actuar sobre ellos. De los artículos nuevos, el 71 por ciento se publicó sin revisión humana. La base de conocimiento contiene ahora unos 3.200 artículos, con una tasa de redundancia del contenido que ella estima en el 28 por ciento frente al 9 por ciento de hace un año. Los agentes informan de que encontrar una respuesta fiable lleva más tiempo. La carga de verificación de los editores de artículos del centro de servicios ha crecido hasta unas 40 horas por semana, desde 12. Los resúmenes de tickets escritos por IA hacen que las respuestas posteriores generadas por IA se apoyen en un texto que nadie escribió, y en un rastreo de cinco respuestas hasta sus fuentes, dos se apoyaban en un resumen que había expuesto mal el problema. Los informes semanales de estado, al leerlos, dicen poco que no estuviera en el anterior, y las partes interesadas han dejado de leer más allá de la página dos.

Propone cuatro cambios, que adoptan el equipo directivo del servicio y los responsables del conocimiento. Los artículos generados necesitan la revisión de un editor con nombre antes de su publicación, y se etiquetan hasta que se aprueban. Un límite de un artículo generado por grupo de temas evita duplicados, y un barrido fusiona o retira los elementos redundantes. Las plantillas de informes se recortan a dos páginas que empiezan por los resultados, y la IA se usa para redactar solo las secciones que luego edita una persona. Los resúmenes de tickets se marcan como generados, y cada mes se comprueba una muestra. El panel informa de la proporción de elementos útiles, la tasa de redundancia, la proporción revisada y la carga de verificación junto a los recuentos de artículos.

Tras dos trimestres, los artículos creados por mes bajan a 190, la proporción de elementos útiles sube al 91 por ciento, la tasa de redundancia baja al 11 por ciento, la proporción revisada es del 100 por ciento y la carga de verificación se estabiliza en unas 16 horas por semana. La satisfacción con el autoservicio se recupera y bajan los contactos de "el artículo no me ayudó". Las partes interesadas leen el informe de dos páginas. Un director pide una meta de 1.000 artículos al mes para mostrar el valor del programa de IA. La responsable de calidad del servicio explica que el recuento era el problema, y propone seguir la utilidad y el uso. La decisión se registra.

## Perspectiva por sector

**Startup.** Generar es barato y el tiempo de revisión es escaso. Mantén cortas la documentación y los tickets, revisa lo que leerán los clientes y borra con libertad. Un conjunto pequeño y correcto de artículos supera a uno grande y dudoso.

**Pequeña empresa.** Hay poca capacidad de revisión, así que limita lo que produce la herramienta. Prefiere un puñado de guías y plantillas verificadas. Cuidado con publicar material generado en páginas públicas sin comprobarlo.

**Gran empresa.** La escala amplifica el ruido. Establece una gobernanza del contenido con responsables, etiquetas y reglas de revisión, mide la utilidad en toda la base de conocimiento y ejecuta limpiezas periódicas. Comparte las rúbricas entre equipos y compara tendencias, no equipos.

**Gobierno y sector público.** El contenido público debe ser exacto y accesible, y los errores pueden dañar. Exige la revisión de la información pública generada, conserva registros de cómo se produjo y aplica normas de lenguaje llano y de accesibilidad. Pueden aplicarse reglas de conservación y de gestión de documentos al material generado (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de protegerse contra la inflación son modestos: tiempo de revisión para el muestreo, esfuerzo editorial para el contenido generado, herramientas de detección de duplicados y el esfuerzo de restablecer las líneas base de las tendencias. Los costos de no hacerlo son mayores pero difusos: usuarios que dejan de confiar en el autoservicio, revisores que se queman, decisiones tomadas sobre números inflados y proyectos de limpieza.

Construye el caso con tus propios datos: la proporción de elementos útiles y la carga de verificación a lo largo del tiempo, el volumen de contactos causados por contenido inútil y el costo de una limpieza de la base de conocimiento. Evita usar cifras publicadas sobre la calidad del contenido generado, que varían ampliamente según la herramienta, la tarea y el método. Incluye el costo evitado del daño reputacional por publicar información errónea (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Celebrar el volumen.** Premia el ruido. Celebra los resultados y la utilidad.
- **La rapidez del primer borrador como historia de productividad.** El ahorro puede desaparecer en la comprobación. Mide el tiempo hasta un resultado verificado.
- **Publicar contenido generado sin revisión.** La confianza se erosiona en silencio. Revisa y etiqueta.
- **Dejar que el contenido generado alimente la generación.** Los errores se acumulan. Comprueba la cadena.
- **Líneas base sin cambiar.** Las tendencias engañan tras un cambio tecnológico. Anota y restablece la línea base.
- **Sobrecargar a los revisores.** La revisión se convierte en un sello de goma. Limita el volumen y mide la carga.
- **Usar un juez de IA para todo.** Puede compartir los puntos ciegos del productor. Mantén a las personas en el ciclo.
- **Ignorar el rebote.** El trabajo más barato atrae más trabajo. Decide para qué es el tiempo ahorrado.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Emparejamiento y muestreo | El volumen se informa solo | Impresiones informales de calidad | Cada métrica de volumen emparejada con una comprobación de utilidad muestreada | Utilidad, carga y redundancia gestionadas con metas para la revisión y no para el volumen | Visión de toda la organización de la calidad de la señal; rúbricas compartidas con los socios |
| Contenido y ciclos | El contenido generado se mezcla | Algo de etiquetado | Contenido generado etiquetado y revisado antes de publicarse; cadenas muestreadas | Ciclos monitorizados; almacenes curados; duplicados retirados según un calendario | Procedencia con seguimiento de extremo a extremo entre herramientas y proveedores |
| Líneas base y atención | Tendencias leídas a través del cambio | Anotaciones en algunos gráficos | Líneas base restablecidas donde cambiaron los datos; rebote considerado | Señales de deriva revisadas cada trimestre; carga del revisor gestionada | El diseño de las métricas se adapta continuamente al cambio tecnológico con las partes interesadas |

## Lista de verificación

- [ ] Cada métrica de volumen o de rapidez tiene una compañera de utilidad juzgada por una persona.
- [ ] Una muestra aleatoria de elementos tocados por la IA se revisa cada mes frente a una rúbrica escrita.
- [ ] La carga de verificación se estima y se sigue como tendencia.
- [ ] El conocimiento generado se etiqueta y se revisa antes de su publicación.
- [ ] La redundancia de la base de conocimiento se mide y se reduce.
- [ ] Los flujos de alertas y de tickets se monitorizan en busca de la proporción útil y los duplicados.
- [ ] Se muestrean las cadenas desde las salidas generadas hasta sus fuentes.
- [ ] Las tendencias a través de la introducción de la IA se anotan o se restablecen.
- [ ] Los informes a los líderes empiezan por los resultados.
- [ ] Se pregunta a los usuarios y a las partes interesadas si la señal es más clara o más ruidosa.

## Prompts de IA

**Crea una rúbrica de utilidad.**

```text
Redacta una rúbrica breve (no más de seis criterios) para juzgar si un [knowledge
article, ticket summary, status report] es útil en [type of organization]. Incluye
corrección, pertinencia a una necesidad real, duplicación, actualidad y
claridad, con una valoración de tres niveles y ejemplos de cada nivel. No
inventes estadísticas. Enumera tus supuestos y cómo mantener la coherencia de
los revisores.
```

**Analiza una caída de la señal.**

```text
Desde que introdujimos la IA para [task], estas cifras cambiaron: [paste
volumes, resolution, satisfaction, reopen rate, reviewer hours]. Describe qué
sugiere el patrón sobre la inflación o la dilución, qué cambios pueden deberse
a una creación más fácil, qué muestrear a continuación y qué métricas pueden
necesitar una línea base nueva. No supongas causas que los datos no puedan
respaldar. Enumera tus supuestos.
```

**Planifica una limpieza de la base de conocimiento.**

```text
Nuestra base de conocimiento tiene [number] artículos, de los cuales [number] se
generaron en el último [period]. Propón un plan de limpieza: cómo detectar
duplicados y elementos obsoletos, cómo priorizar por uso, cómo revisar los
artículos generados, reglas para evitar que se repita y medidas que seguir. No
supongas herramientas concretas. Enumera tus supuestos y riesgos.
```

**Rastrea una cadena de contenido generado.**

```text
Aquí hay una respuesta generada por IA y las fuentes en que se apoyó: [paste].
Rastrea cada afirmación hasta su fuente y marca si la fuente fue escrita por
una persona, contenido generado revisado o contenido generado sin revisar.
Identifica dónde podría haber entrado un error y sugiere una comprobación. No
supongas hechos más allá del texto. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la compañera de utilidad de una métrica de volumen o de rapidez.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica afectada por la IA empareja el volumen con una utilidad muestreada y lleva su vector de manipulación y su barrera de protección.

## Puntos clave

- Cuando la IA abarata la producción, las métricas de volumen y de rapidez se inflan y la proporción que es útil puede bajar.
- Empareja toda medida de volumen o de rapidez con una comprobación de utilidad muestreada y juzgada por personas.
- Mide el tiempo hasta un resultado verificado y la carga de verificación, porque la comprobación se convierte en el cuello de botella.
- Etiqueta y revisa el contenido generado antes de que entre en los almacenes compartidos, e impide que los ciclos se alimenten a sí mismos sin comprobación.
- Restablece las líneas base de las tendencias tras un cambio tecnológico, y haz que los informes empiecen por los resultados.
- Decide de antemano para qué es el tiempo ahorrado, y protege la atención de los revisores y de los usuarios.

## Referencias y lecturas complementarias

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
