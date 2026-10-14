# Métricas de calidad de la configuración y la CMDB

**Una base de datos de configuración se gana su lugar solo cuando la gente confía en ella lo bastante como para usarla en un cambio o en un incidente, así que mide su calidad por lo bien que responde preguntas reales, y deja que los equipos propietarios de los servicios mantengan al día sus propios registros.**

## Resumen y motivación

Cuando un servidor de base de datos falla a las tres de la madrugada, alguien pregunta qué servicios dependen de él. Cuando un equipo planifica un cambio, alguien pregunta qué más podría romperse. Las respuestas deberían salir de un registro de las cosas que componen tus servicios y de cómo se conectan. Ese registro es el objeto de la gestión de la configuración, y la base de datos que hay detrás es la base de datos de gestión de la configuración, normalmente abreviada como CMDB.

Un [elemento de configuración](https://en.wikipedia.org/wiki/Configuration_item) (CI) es cualquier componente que necesita gestionarse para entregar un servicio de TI: un servidor, una aplicación, una base de datos, un dispositivo de red, una cuenta en la nube, un contrato. Una [base de datos de gestión de la configuración](https://en.wikipedia.org/wiki/Configuration_management_database) guarda información sobre los CI, sus atributos y las relaciones entre ellos. Donde la gestión de activos pregunta qué tienes, quién es su responsable y cuánto cuesta (véase el tema 7.1, Métricas de gestión de activos de TI), la gestión de la configuración pregunta cómo encajan las partes y qué depende de qué.

Las CMDB tienen una reputación desigual, y la reputación es merecida. Muchas se construyeron como mapas exhaustivos, llenas de datos que se deterioraban más deprisa de lo que nadie podía corregir, y luego se abandonaron. Las tradiciones ágil y DevOps ofrecen un punto de partida mejor. Los equipos que describen su infraestructura como código tienen una definición autorizada y versionada de lo que operan, y pueden publicarla automáticamente en el registro compartido. La [infraestructura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code) convierte el registro en un subproducto de la entrega. ITIL 4 describe la práctica como gestión de la configuración del servicio y hace hincapié en la información necesaria para respaldar decisiones, no en la completitud por sí misma.

La calidad de un registro de configuración tiene varias partes, y se corresponden con la idea más amplia de [integridad de los datos](https://en.wikipedia.org/wiki/Data_integrity):

- **Completitud:** los CI y los atributos que importan están presentes.
- **Exactitud:** lo que dice el registro coincide con la realidad.
- **Puntualidad:** los cambios aparecen en el registro con la rapidez suficiente para ser útiles.
- **Coherencia:** la misma cosa no está registrada dos veces con nombres distintos. Hacer coincidir registros que se refieren a la misma cosa es el problema de la [resolución de entidades](https://en.wikipedia.org/wiki/Entity_resolution).
- **Calidad de las relaciones:** las dependencias entre CI están presentes y son correctas. Aquí es donde reside la mayor parte del valor, y la mayor parte del deterioro.

La prueba más profunda de una CMDB es el uso. Un registro que la gente consulta durante incidentes y cambios, y corrige cuando es erróneo, está sano. Un registro que solo se audita no lo está. Por eso las medidas siguientes emparejan las medidas de calidad con medidas de uso.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con un giro: la completitud es fácil de inflar con valores por defecto, y la exactitud es fácil de afirmar sin comprobarla. Insiste en la evidencia independiente y en medidas de uso (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Empieza por las preguntas.** Decide qué necesitas que responda el registro, y construye solo eso.
- **Prefiere un registro más pequeño y fiable a uno mayor y dudoso.** El alcance crece cuando se gana la confianza.
- **Deja que la fuente de verdad alimente el registro.** Las canalizaciones, las API de la nube y el descubrimiento deben escribir en él, no personas con hojas de cálculo.
- **Deja que los equipos de servicio sean responsables de los registros de sus servicios.** Conocen sus dependencias y sienten el costo de los errores.
- **Mide por el uso además de por la calidad.** Un buen registro se consulta.
- **Comprueba con la realidad.** Pon a prueba el registro preguntando si predice lo que ocurre.
- **Corrige en el origen.** Un registro erróneo es un síntoma. Encuentra el proceso que permitió la deriva.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completitud de los CI | Proporción de CI incluidos con todos los atributos requeridos rellenados con valores válidos | CI incluidos con todos los atributos requeridos válidos / CI incluidos | porcentaje | CMDB, reglas de atributos | Gestión de la configuración del servicio; gestión de activos de TI | La definición de terminado incluye la descripción del servicio | Mensual |
| Exactitud de los CI | Proporción de CI muestreados cuyo registro coincide con la evidencia en los atributos requeridos | CI muestreados que coinciden en todos los atributos requeridos / CI muestreados | porcentaje | Muestra de auditoría comparada con el sistema en vivo | Gestión de la configuración del servicio | El estado de la infraestructura como código coincide con la realidad | Trimestral |
| Cobertura de dependencias | Proporción de servicios críticos cuyas dependencias aguas arriba y aguas abajo están mapeadas y revisadas | servicios críticos con un mapa de dependencias revisado en los últimos 90 días / servicios críticos | porcentaje | Relaciones de la CMDB y registros de revisión | Gestión de la configuración del servicio; gestión de la disponibilidad | Revisión de la arquitectura y de la propiedad del servicio | Trimestral |
| Tasa de acierto en la predicción de impacto | Proporción de incidentes y cambios en que los servicios realmente afectados estaban en el impacto previsto por la CMDB | incidentes o cambios en que todos los servicios afectados fueron previstos / incidentes o cambios revisados | porcentaje | Revisiones posteriores a incidentes y registros de cambios comparados con consultas a la CMDB | Gestión de incidentes; habilitación de cambios | Hallazgo de la revisión sin culpas sobre dependencias que faltaban | Trimestral |
| Tasa de CI duplicados | Proporción de CI que duplican a otro CI | CI señalados como duplicados por las reglas de coincidencia y confirmados en la revisión / CI incluidos | porcentaje | Informe de coincidencias de la CMDB y muestra de revisión | Gestión de la configuración del servicio | Única fuente de verdad | Mensual |
| Latencia de actualización | Retraso entre un cambio en un CI en el mundo real y su actualización en la CMDB | mediana y percentil 85 de horas o días desde el evento de cambio hasta la actualización de la CMDB | horas o días | Eventos de cambio y de canalización comparados con las marcas de tiempo de la CMDB | Gestión de la configuración del servicio; habilitación de cambios | Registro automatizado en la canalización | Mensual |
| Tasa de uso de la CMDB | Proporción de incidentes y cambios que hacen referencia a CI, y de ellos, la proporción en que los usuarios informan de que el registro ayudó | registros que hacen referencia a un CI válido / incidentes y cambios del periodo; más la proporción de registros revisados en que los datos del CI ayudaron | porcentaje | Herramienta ITSM, breve pregunta de retroalimentación | Gestión de incidentes; habilitación de cambios | Equipos que usan el registro compartido en su trabajo | Mensual |

Define el alcance de "CI incluido" por clase y por criticidad, y regístralo. Un CI es exacto solo en los atributos que nombras como requeridos. La latencia de actualización arranca en el evento real, como un despliegue o una compra, y se detiene cuando la CMDB lo refleja. La tasa de acierto en la predicción de impacto requiere un paso de revisión que registre qué servicios se vieron realmente afectados, y es tan fiable como esa revisión.

## Recomendaciones

### Decide para qué sirve el registro

**1. Escribe las preguntas que la CMDB debe responder.** Las típicas son: qué depende de este componente, quién es responsable de este servicio, qué cambió recientemente, qué afectaría un fallo aquí y qué está fuera de soporte. Para cada pregunta, nombra las clases de CI, los atributos y las relaciones necesarios. Todo lo que no se necesite para responder a una pregunta es candidato a dejarse fuera.

**2. Empieza por los servicios que más importan.** Elige el puñado de servicios críticos, mapéalos de extremo a extremo y hazlo bien antes de añadir más. Un mapa fiable de diez servicios ayuda más que un mapa dudoso de mil. Amplía a medida que crezcan la confianza y el uso.

**3. Define las clases, los atributos y los tipos de relación con sencillez.** Una lista corta de clases de CI (servicio, aplicación, base de datos, host, red, recurso en la nube) y de tipos de relación (depende de, se ejecuta en, se conecta con, es propiedad de) cubre la mayoría de las necesidades. Un modelo que intenta captarlo todo es difícil de rellenar y más difícil de consultar. Mantén un modelo escrito y cámbialo deliberadamente.

### Alimenta el registro desde el origen

**4. Publica desde las canalizaciones y el código.** Donde la infraestructura y las aplicaciones se definen como código, haz que la canalización de entrega cree, actualice y retire CI en cada cambio, incluida la información de propiedad y de dependencias declarada junto al código. Trata la declaración como parte de la definición de terminado de un servicio. Esto lleva la latencia de actualización casi a cero y mantiene el registro alineado con lo que se ejecuta.

**5. Usa el descubrimiento como segunda opinión.** El [descubrimiento de servicios](https://en.wikipedia.org/wiki/Service_discovery) de red y de nube encuentra lo que realmente se ejecuta y cómo se conecta. Compáralo con el registro declarado. Las diferencias son hallazgos: o bien a la declaración le falta algo o bien se está ejecutando algo que no debería. El descubrimiento por sí solo produce datos ruidosos sin propiedad, así que úsalo para comprobar, no para redactar.

**6. Usa identificadores estables y reglas de coincidencia.** Los duplicados surgen cuando fuentes distintas nombran de forma distinta la misma cosa. Acuerda un identificador único para cada clase de CI, registra los identificadores de origen y ejecuta reglas de coincidencia para encontrar y fusionar duplicados. Revisa a mano una muestra de coincidencias, ya que la fusión automática puede combinar cosas distintas.

**7. Da a cada equipo de servicio la propiedad de su porción.** El equipo que construye y opera un servicio es el mejor situado para conocer sus dependencias y notar los errores. Facilítaselo: una plantilla, una revisión breve en la planificación y retroalimentación cuando se usen sus datos. Los equipos centrales poseen el modelo, las herramientas y las comprobaciones, no todos los registros.

### Mide la calidad y el uso

**8. Audita la exactitud por muestreo.** Cada trimestre, extrae una muestra aleatoria de CI y compruébalos con los sistemas en vivo, y una segunda muestra de los sistemas en vivo para comprobar que aparecen en el registro. Informa la exactitud por clase y muestra las principales fuentes de error. Mantén fijo el método de muestreo para que las tendencias signifiquen algo.

**9. Pon a prueba el mapa con los incidentes.** Tras un incidente o cambio significativo, compara los servicios realmente afectados con lo que previó la CMDB. Registra los fallos y corrige las dependencias que faltan. Esta es la prueba de exactitud más significativa, porque contrasta el registro con los eventos, y la tasa de acierto mejora a medida que se corrige el mapa. Usa revisiones sin culpas para que la gente informe de los fallos con facilidad (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

**10. Sigue el uso y pregunta si ayudó.** Cuenta con qué frecuencia los incidentes y los cambios hacen referencia a CI, y haz a quienes responden y aprueban una pregunta breve sobre si el registro ayudó. Una tasa de uso creciente con respuestas positivas es la señal más clara de valor. Una tasa de uso baja significa que la gente no confía en el registro o no sabe que existe, y ambas cosas tienen arreglo.

**11. Revisa regularmente los mapas de dependencias con los responsables.** Las dependencias cambian a medida que evoluciona el software. Pide a los responsables de los servicios críticos que confirmen sus mapas cada trimestre, idealmente como parte de una conversación de planificación o de arquitectura. Usa la fecha de confirmación como atributo, y muestra los mapas vencidos.

### Mantenlo honesto y proporcionado

**12. Retira lo que nadie usa.** Elimina las clases y los atributos de CI que ninguna pregunta necesita y que nadie consulta. Menos campos y mejores elevan la exactitud. Revisa el modelo cada año y registra lo que se retiró y por qué. Un registro más pequeño es menos que mantener verdadero, y hace más fácil cumplir las medidas de calidad con honestidad.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Completitud de los CI | Rellenar los atributos requeridos con valores por defecto o marcadores de posición; estrechar la lista de requeridos | Contar los valores por defecto y los marcadores de posición; lista de requeridos fija; muestra de exactitud |
| Exactitud de los CI | Muestrear las clases fáciles; auditar tras una limpieza | Muestra aleatoria extraída de forma independiente en ambas direcciones; método fijo |
| Cobertura de dependencias | Marcar los mapas como revisados sin leerlos; mapear solo dependencias triviales | Tasa de acierto en la predicción de impacto; comprobar un mapa por muestreo frente al tráfico en vivo |
| Tasa de acierto en la predicción de impacto | Elegir los incidentes que salieron bien; registrar de forma estrecha los servicios afectados | Revisar todos los incidentes significativos; revisores ajenos al equipo propietario |
| Tasa de CI duplicados | Fusionar CI distintos para bajar la tasa; relajar las reglas de coincidencia | Muestrear las fusiones en busca de corrección; registrar las reglas de fusión |
| Latencia de actualización | Poner fecha anterior a los eventos de cambio; contar solo las actualizaciones automatizadas | Comparar las marcas de tiempo de eventos y de actualización de los sistemas de origen; pista de auditoría |
| Tasa de uso de la CMDB | Añadir referencias a CI como mera formalidad; hacer obligatorio el campo con cualquier valor | Comprobar que los CI referenciados son relevantes; la pregunta de retroalimentación sobre si ayudó |

Una lectura sana es un registro más pequeño con una exactitud medida alta, mapas de dependencias que predicen incidentes reales, latencia de actualización casi nula para las clases automatizadas y personas que dicen usar el registro porque les ayuda.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| CMDB exhaustiva | Visión amplia; respalda muchos casos de uso | Cara de mantener verdadera; se deteriora |
| CMDB mínima guiada por preguntas | Fiable y barata | Brechas; necesita disciplina de crecimiento |
| Población guiada por el descubrimiento | Encuentra lo desconocido; poco esfuerzo manual | Ruidosa; carece de propiedad y de propósito |
| Población guiada por canalizaciones | Exacta; baja latencia | Limitada a lo que se construye mediante canalizaciones |
| Propiedad central de los registros | Coherencia | Lenta; lejos del conocimiento |
| Propiedad de los registros por los equipos | Exacta y rápida | Variación; necesita plantillas y comprobaciones |
| Modelo de tipo grafo | Natural para relaciones y consultas de impacto | Necesita habilidades y herramientas |
| Modelo de tablas relacionales | Familiar y sencillo | Incómodo para consultas profundas de dependencias |

La respuesta en prosa es empezar en pequeño y guiada por preguntas, poblar desde las canalizaciones con el descubrimiento como segunda opinión y poner a los equipos de servicio al mando de sus registros. Una [base de datos de grafos](https://en.wikipedia.org/wiki/Graph_database) puede hacer natural preguntar por las dependencias, aunque una base de datos convencional funciona si se mantiene sencillo el modelo.

## Preguntas para conversar con tu equipo

**1. ¿Qué pregunta deseamos por última vez que la CMDB pudiera responder, y pudo?**
Recuerda un incidente o cambio reciente en que alguien buscó dependencias. ¿Qué encontró y qué hizo en su lugar? El facilitador debe registrar la pregunta y si se consultó el registro. El resultado es el primer candidato al propósito del registro.

**2. Si nuestro servicio más importante fallara ahora, ¿cuánta confianza tenemos en el impacto previsto?**
Pide el impacto previsto por la CMDB y compáralo con lo que creen las personas que conocen el servicio. Anota las diferencias. Acordad qué dependencia verificar primero y quién la comprobará.

**3. ¿Quién es responsable del registro de cada servicio, y lo sabe?**
Enumera los servicios críticos y los responsables de sus entradas en la CMDB. Pregunta si los responsables lo saben y las han revisado últimamente. Donde el responsable sea "el equipo de la CMDB", discutid cómo trasladar la propiedad al equipo del servicio.

**4. ¿Qué rellenamos solo para satisfacer un campo obligatorio?**
Busca valores por defecto y marcadores de posición. Muestran dónde el modelo pide más de lo que nadie sabe. Decidid si eliminar el campo, automatizarlo o encontrar la fuente real.

**5. ¿Dónde discrepa nuestro registro de lo que se está ejecutando?**
Compara el resultado del descubrimiento con el registro de un servicio. Para cada diferencia, pregunta si debería cambiar el registro o la realidad. La conversación tiende a encontrar tanto datos obsoletos como componentes no autorizados.

**6. ¿Qué dejaríamos de registrar?**
Enumera las clases, los atributos y las relaciones que nadie ha usado en seis meses. Pregunta qué ocurriría si cada uno desapareciera. Acordad retirar dos y observar si alguien lo nota.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen el conocimiento de aquello de lo que dependen sus servicios y son los mejor situados para mantener verdadero el registro. Deben declarar la propiedad y las dependencias junto a su código, revisarlas cuando cambie el diseño y usar el registro al planificar cambios. Una definición de terminado que incluya actualizar la descripción del servicio mantiene el registro cerca del trabajo.

### Equipos de servicio y operaciones

Los equipos de operaciones consultan el registro durante incidentes y cambios, así que sienten primero sus errores. Deben informar de los fallos en las revisiones, ejecutar comprobaciones de descubrimiento, mantener las reglas de coincidencia y dar retroalimentación a los responsables. También operan las herramientas y las muestras de auditoría.

### Liderazgo y gobernanza

Los líderes quieren impacto y riesgo visibles, y a menudo patrocinan grandes programas de CMDB que decepcionan. Deben pedir evidencia de uso y de exactitud en lugar de recuentos de registros, financiar la integración con las canalizaciones y aceptar un alcance menor bien hecho. La gobernanza debe esperar ver la tasa de acierto en la predicción de impacto y la lista de brechas.

### Clientes y usuarios

Los usuarios se benefician cuando los incidentes se diagnostican más deprisa y los cambios tienen menos probabilidad de romper los servicios dependientes. Rara vez ven la CMDB, aunque ven sus efectos en una comunicación que nombra correctamente los servicios afectados y en menos sorpresas tras los cambios. Su retroalimentación tras los incidentes muestra si la imagen del impacto era correcta.

## En la práctica: un ejemplo de ITIL ágil

El grupo de tecnología de una aerolínea nacional opera unas 300 aplicaciones y una plataforma de reservas para clientes. Los números siguientes son ilustrativos.

La CMDB contiene 180.000 CI y se pobló hace cinco años con una herramienta de descubrimiento. La jefa de gestión de servicios quiere saber si vale la pena conservarla. Pide a un pequeño equipo que la ponga a prueba. Para la calidad, auditan 150 CI muestreados y encuentran una exactitud del 71 por ciento en los cinco atributos requeridos. Para el mapa, revisan los últimos 20 incidentes significativos y comparan los servicios realmente afectados con lo que previó la CMDB: previó todos los servicios afectados en 6 de 20, una tasa de acierto del 30 por ciento. Para el uso, el 12 por ciento de los incidentes del último trimestre hizo referencia a un CI, y en una breve encuesta a quienes responden, la mayoría dijo apoyarse en una página wiki aparte. Los CI duplicados son el 9 por ciento del total.

El equipo toma cuatro decisiones con los responsables de los servicios. Reduce el alcance a los 40 servicios que soportan más clientes, con cinco clases de CI y cuatro tipos de relación. Pide a cada equipo de servicio que declare el responsable, las dependencias y la ubicación de ejecución en un breve archivo guardado con su código, que la canalización publica en la CMDB en cada versión. Ejecuta el descubrimiento semanalmente e informa de las diferencias a los responsables. Añade un campo a la revisión del incidente, "¿acertó la predicción de la CMDB?", y corrige cada fallo en dos semanas.

Dos trimestres después, la CMDB acotada tiene 14.000 CI, la exactitud del conjunto muestreado es del 92 por ciento, la latencia de actualización desde la versión hasta el registro es de menos de una hora para los servicios de la canalización y la tasa de acierto en los últimos 12 incidentes es del 75 por ciento. El uso de la CMDB en incidentes ha subido al 58 por ciento, y quienes responden dicen que la página wiki ya no hace falta. El director de operaciones pide un plan para incorporar de golpe las otras 260 aplicaciones. La jefa de gestión de servicios propone añadir diez servicios por trimestre, después de que cada uno obtenga una tasa de acierto por encima de un nivel acordado en un incidente de prueba, y explica que el registro amplio anterior nunca había gozado de confianza. La decisión se registra, con una revisión cada trimestre.

## Perspectiva por sector

**Startup.** Hay poca necesidad de una CMDB más allá de un catálogo de servicios y código de infraestructura. Guarda en el repositorio los responsables de los servicios y las dependencias, y genera un mapa a partir de ello. Añade una base de datos solo cuando las preguntas superen a los archivos.

**Pequeña empresa.** Un diagrama sencillo y una lista de sistemas con responsables y proveedores pueden bastar. Actualízalo tras cada cambio significativo. Resiste la tentación de comprar una plataforma para un parque pequeño, pero mantén actual el diagrama, ya que es inestimable en una caída.

**Gran empresa.** La escala necesita un modelo, propiedad federada e integración con varias fuentes, incluidas las adquisiciones. Estandariza los identificadores y el modelo básico, deja que los equipos lo amplíen dentro de unas reglas y mide el uso y la exactitud por dominio. Espera tener que mantener una función permanente de coincidencia y depuración.

**Gobierno y sector público.** Los servicios suelen descansar en sistemas de larga vida, contratistas e infraestructura compartida, y el impacto de los incidentes puede afectar al público. Mapea explícitamente las dependencias de proveedores y de plataformas compartidas, conserva los registros para las auditorías y alinéate con la planificación de la continuidad (véase el tema 5.6, Métricas de continuidad del servicio).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de modelado y de gobernanza, la integración de canalizaciones y de descubrimiento, algunas herramientas y el esfuerzo de las auditorías y las correcciones. Muchas organizaciones ya poseen la plataforma. Poblar mediante canalizaciones es barato una vez existe la plantilla. Los grandes programas para poblarlo todo de golpe han sido caros y a menudo han fracasado.

Los retornos son incidentes más cortos, cambios más seguros y menos tiempo buscando información. Construye el caso con tu propia evidencia: el tiempo que dedican quienes responden a buscar dependencias en un incidente típico, la proporción de incidentes en que la falta de información de dependencias retrasó el diagnóstico y los cambios que causaron un impacto inesperado. La tasa de acierto en la predicción de impacto es una medida directa de si el registro habría ayudado. Evita las afirmaciones publicadas sobre el porcentaje de incidentes causados por cambios o el costo de las caídas salvo que puedas rastrear su fuente. Cuenta los costos de mantener un registro grande y dudoso frente al valor de uno pequeño y fiable.

## Antipatrones y trampas

- **Poblarlo todo primero.** Un registro enorme y obsoleto destruye la confianza. Empieza por los servicios críticos.
- **El descubrimiento como única fuente.** No puede decirte por qué existe algo ni quién es su responsable. Combínalo con declaraciones.
- **Auditar la completitud y llamarlo calidad.** Completo y erróneo es peor que incompleto y correcto. Muestrea la exactitud.
- **Equipos centrales dueños de todos los datos.** No los conocen. Da la propiedad a los equipos de servicio.
- **Campos obligatorios con valores por defecto.** Parecen completos y no llevan información. Elimínalos o automatízalos.
- **Medir por el número de CI.** Más no es mejor. Mide la exactitud, la tasa de acierto y el uso.
- **Ignorar las relaciones.** Sin dependencias, una CMDB es un inventario. Invierte en el mapa de los servicios críticos.
- **Culpar a las personas por los fallos.** Dejan de informarlos. Trata una dependencia omitida como un hallazgo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Alcance y modelo | Lo que encontró el descubrimiento | Modelo definido; alcance amplio | Modelo guiado por preguntas; servicios críticos mapeados | El alcance crece cuando lo justifican la tasa de acierto y el uso | Modelo federado entre equipos y proveedores; identificadores compartidos |
| Población y calidad | Carga manual o única | Descubrimiento e importaciones programados | Las canalizaciones publican desde el código; descubrimiento como comprobación; auditorías por muestreo | Exactitud, latencia y duplicados medidos y con seguimiento de su tendencia | Flujos en tiempo real con conciliación automatizada y confirmación del responsable |
| Uso | Rara vez consultada | Usada por unos pocos equipos | Referenciada en incidentes y cambios como práctica estándar | Predicción de impacto contrastada con los incidentes; uso y utilidad con seguimiento | El registro informa decisiones automatizadas y mapas compartidos con proveedores |

## Lista de verificación

- [ ] Las preguntas que la CMDB debe responder están escritas.
- [ ] El alcance se limita a los servicios críticos, con una regla de crecimiento definida.
- [ ] El modelo tiene un conjunto pequeño de clases, atributos y tipos de relación.
- [ ] Cada servicio crítico tiene un responsable que ha confirmado su registro en el último trimestre.
- [ ] Las canalizaciones publican los cambios de CI de los servicios construidos como código.
- [ ] Los resultados del descubrimiento se comparan con el registro y las diferencias se revisan.
- [ ] Una muestra aleatoria de exactitud se audita cada trimestre en ambas direcciones.
- [ ] Las revisiones de incidentes registran si el impacto previsto era correcto.
- [ ] El uso de la CMDB en incidentes y cambios tiene seguimiento, con una pregunta sobre si ayudó.
- [ ] Las clases y los atributos sin uso se retiran según un calendario.

## Prompts de IA

**Define las preguntas y el alcance.**

```text
Operamos [type of organization and services]. Situaciones típicas en que
necesitamos información de configuración: [list incidents, changes, audits].
Redacta una lista de las preguntas que nuestra CMDB debería responder, las
clases de CI, los atributos y las relaciones necesarios para cada una, y un
alcance inicial mínimo de los servicios más críticos. No inventes herramientas.
Enumera tus supuestos y lo que hay que confirmar con los responsables de los
servicios.
```

**Analiza un fallo en la predicción de impacto.**

```text
Tras el incidente [description], la CMDB previó estos servicios afectados:
[list], y los servicios realmente afectados fueron: [list]. Explica posibles
razones de cada diferencia (dependencia que falta, relación errónea, datos
obsoletos, dependencia indirecta), sugiere cómo verificar cada una y propón una
corrección en el origen. No supongas causas que la información no pueda
respaldar. Enumera tus supuestos.
```

**Diseña un archivo de declaración para los equipos de servicio.**

```text
Propón una declaración breve y legible que un equipo de servicio guarde con su
código para describir el servicio a la CMDB: responsable, contacto de soporte,
nivel, dependencias, ubicación de ejecución y clasificación de los datos.
Incluye reglas de validación que la canalización podría aplicar y un ejemplo
mínimo para [type of service]. Limítalo a lo que exigen las preguntas de [paste
questions]. Enumera tus supuestos y los campos que revisar con seguridad.
```

**Planifica una auditoría trimestral de exactitud.**

```text
Nuestra CMDB contiene [number] CI en estas clases: [list]. Diseña una auditoría
trimestral con muestras aleatorias extraídas en ambas direcciones (de la CMDB a
la realidad y de la realidad a la CMDB), di qué comprobar en cada clase, cómo
informar la exactitud y las fuentes de error con honestidad y cómo evitar
corregir nuestros propios deberes. No exageres la precisión estadística.
Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de calidad de la configuración.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de la CMDB lleva su vector de manipulación, su barrera de protección y su regla de evidencia independiente.

## Puntos clave

- Construye la CMDB para responder preguntas con nombre sobre los servicios que más importan, y hazla crecer a medida que crece la confianza.
- Pobla desde las canalizaciones y el código, usa el descubrimiento como segunda opinión y deja que los equipos de servicio sean responsables de sus registros.
- Pon a prueba la calidad con eventos: compara el impacto previsto con lo que realmente ocurrió en los incidentes.
- Mide el uso y la utilidad, no el número de CI.
- Muestrea la exactitud a partir de evidencia independiente en ambas direcciones.
- Retira lo que nadie usa y corrige los errores en su origen.

## Referencias y lecturas complementarias

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
