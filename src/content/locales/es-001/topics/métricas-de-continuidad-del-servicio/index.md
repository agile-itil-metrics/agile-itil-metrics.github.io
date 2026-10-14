# Métricas de continuidad del servicio

**Un plan de recuperación es una hipótesis hasta que un ejercicio lo ha puesto a prueba, así que las métricas de continuidad deben contar lo que realmente se recuperó, con qué rapidez y cuántos datos volvieron, y nunca el número de planes en un estante.**

## Resumen y motivación

La mayoría de las medidas de incidentes describen el mal día ordinario: un despliegue fallido, una base de datos saturada, un vecino ruidoso. La continuidad del servicio describe el día raro y grave, cuando falla una región, se corrompe un almacén de datos, desaparece un proveedor o un ransomware cifra todo el parque. La [planificación de la continuidad del negocio](https://en.wikipedia.org/wiki/Business_continuity_planning) es la disciplina de preparar a una organización para seguir prestando servicio a niveles aceptables durante esos eventos. En ITIL 4, la práctica se llama gestión de la continuidad del servicio, y es la visión de servicios de TI de ese objetivo más amplio (véase el tema correspondiente de la *Guía de ITIL ágil* complementaria).

Dos términos cargan con la mayor parte del peso. El [objetivo de tiempo de recuperación](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) es el tiempo aceptable para restablecer un servicio tras una interrupción. El [objetivo de punto de recuperación](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) es la cantidad aceptable de pérdida de datos, expresada como un lapso de tiempo: un RPO de una hora significa que perder la última hora de escrituras es tolerable y perder más no lo es. Ambos provienen de un [análisis de impacto en el negocio](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), el método para identificar qué actividades importan más, qué depende de qué y cuánto cuesta una interrupción. Los objetivos son decisiones de negocio con un precio, porque unos objetivos más estrictos requieren más redundancia, más automatización y más tiempo de ejercicio.

La dificultad es que un objetivo es una promesa sobre un evento futuro que no ha ocurrido. La evidencia honesta es una prueba. ¿Restableció el equipo el servicio dentro del RTO en el último ejercicio? ¿Cumplieron los datos restaurados el RPO? ¿Eran los pasos del plan los que el equipo siguió realmente? Una métrica de continuidad es, por tanto, sobre todo una medición de ejercicios, y la calidad de la medición depende de lo realista que fuera el ejercicio.

Los equipos ágiles y de ingeniería de fiabilidad de sitios (SRE) aportan hábitos útiles. Sus sistemas cambian cada semana, así que un plan escrito una vez y archivado queda obsoleto en pocos meses. La respuesta ágil es mantener la recuperación como código (por ejemplo con [infraestructura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code)), ensayarla a menudo y tratar cada ensayo como una fuente de elementos de la lista de pendientes. La [ingeniería del caos](https://en.wikipedia.org/wiki/Chaos_engineering) y los simulacros (game days) aplican la misma idea a menor escala: provocar un fallo a propósito, de forma controlada, y observar qué ocurre. La visión de SRE se describe en el libro *Site Reliability Engineering* de Google, y el campo más amplio se resume en el artículo sobre la [ingeniería de fiabilidad de sitios](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### En qué difieren las visiones

- **Visión de ITIL.** La gestión de la continuidad del servicio es una práctica que fija objetivos de recuperación a partir del BIA, diseña planes y los demuestra con pruebas. Sus resultados son planes, informes de ejercicios y hallazgos registrados. La norma [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) describe un sistema de gestión de la continuidad del negocio. A octubre de 2026, comprueba directamente la edición vigente si un cliente o un regulador exige conformidad.
- **Visión ágil.** La capacidad de recuperación es una propiedad del producto dentro de la definición de terminado. Una historia que añade un almacén de datos no está terminada hasta que se ha probado su vía de restauración.
- **Visión de SRE.** El trabajo de fiabilidad se presupuesta y se mide. Las conmutaciones por error, los simulacros de restauración y los game days son trabajo programado, con responsables y hallazgos que entran en la lista de pendientes.

Este tema cubre siete medidas: la recuperación frente a los objetivos de tiempo y de datos en las pruebas, la cobertura y la actualidad de los ejercicios, las restauraciones de copias de seguridad, el cierre de hallazgos y la vigencia de los planes. Las caídas reales están en las métricas de incidentes graves (véase el tema 3.4, Métricas de incidentes graves) y en las métricas de disponibilidad (véase el tema 5.3, Métricas de disponibilidad). Los objetivos expresados como metas de cara al usuario están en el tema sobre indicadores y presupuestos (véase el tema 5.2, SLI, SLO y presupuestos de errores). El "tiempo de recuperación de un despliegue fallido" del programa de investigación DORA es un reloj mucho menor (véase el tema 2.8, Métricas DORA). Las causas raíz que revelan las pruebas pertenecen a los temas de problemas y aprendizaje (véanse el tema 4.1, Métricas de gestión de problemas, y el tema 4.2, Métricas de análisis posteriores y aprendizaje).

Un **nivel** (tier) es una clase de servicio agrupada según la rapidez con que debe volver. Un **ejercicio de mesa** (tabletop) es un ensayo basado en la discusión, sin cambios en los sistemas. Un **game day** es un ensayo práctico en el que un equipo provoca o simula un fallo y observa la respuesta. Un **hallazgo** es una brecha registrada entre el plan y lo que ocurrió. La **vigencia del plan** es cuán bien refleja un plan el servicio tal como es hoy.

## Principios clave

- **Prueba y luego afirma.** Un RTO o un RPO solo se valida con una recuperación que se realizó y se cronometró de verdad. Informa el objetivo y el último resultado demostrado lado a lado.
- **Mide el realismo, no solo el éxito.** Una restauración de una base de datos de prueba vacía que pasó en minutos dice poco de una restauración a tamaño de producción. Registra el alcance y las condiciones de cada ejercicio junto al resultado.
- **Clasifica el parque en niveles y gasta esfuerzo según el nivel.** Los servicios críticos reciben pruebas frecuentes y realistas. Los servicios de nivel bajo reciben comprobaciones más ligeras. Una sola meta de frecuencia para todo malgasta esfuerzo o pasa por alto riesgo.
- **Trata los hallazgos como el producto de un ejercicio.** El resultado valioso de un game day es una lista cerrada de brechas. Una prueba sin hallazgos es excelente o demasiado suave, y conviene averiguar cuál de las dos.
- **Describe servicios y rotaciones, nunca individuos.** Los resultados de los ejercicios describen el sistema y el plan. Nadie se clasifica por la rapidez con que recuperó un simulacro.
- **Muestra cada ejercicio como su propia fila.** Hay pocas pruebas por servicio al año, así que los promedios engañan (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Definiciones de métricas

Cada métrica indica el reloj o el recuento, qué se excluye y la fuente de datos. Cada fila necesita una regla escrita antes de poder fiarse de ella. Un "servicio de nivel 1" a continuación es un servicio del nivel de recuperación más alto definido por tu propio BIA.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de RTO cumplido | Proporción de ejercicios de recuperación en que el servicio se restableció dentro de su RTO indicado | ejercicios con tiempo de restauración <= RTO / ejercicios realizados. El reloj arranca en el inicio declarado del fallo del ejercicio (hora de inyección o declaración del escenario) y se detiene cuando el servicio pasa su comprobación de salud acordada para usuarios reales o sintéticos. Los ejercicios de mesa y los ejercicios sin restablecimiento cronometrado se excluyen y se cuentan por separado | porcentaje, con el número de ejercicios mostrado | Informe del ejercicio, cronología de la monitorización, registro de servicios con el RTO | Gestión de la continuidad del servicio; gestión de la disponibilidad | Resultado del game day; tiempo de recuperación en las métricas de entrega | Por ejercicio; consolidada trimestralmente |
| Tasa de RPO cumplido | Proporción de ejercicios de recuperación en que la pérdida de datos se mantuvo dentro del RPO indicado | ejercicios con lapso de pérdida de datos medido <= RPO / ejercicios que restauran datos. El lapso de pérdida de datos es el tiempo entre la última escritura presente tras la recuperación y el momento del fallo. Los ejercicios que no restauran estado se excluyen | porcentaje, con el número de ejercicios mostrado | Informe del ejercicio, comparación de los datos restaurados con el origen o con el registro de escrituras | Gestión de la continuidad del servicio; gestión de la seguridad de la información | Simulacro de restauración como parte de la definición de terminado | Por ejercicio; consolidada trimestralmente |
| Cobertura de recuperación probada | Proporción de servicios de nivel 1 y nivel 2 que tuvieron una prueba práctica de recuperación dentro de su intervalo de prueba acordado | servicios con una prueba calificada dentro del intervalo / servicios incluidos. Una prueba calificada es práctica (no solo de mesa) y restaura el servicio en el entorno de prueba o de producción. El intervalo se fija por nivel | porcentaje, por nivel | Registro de servicios, calendario e informes de ejercicios | Gestión de la continuidad del servicio; gestión del catálogo de servicios | Calendario de game days | Mensual |
| Días desde la última prueba de recuperación superada | Antigüedad de la prueba de recuperación superada más reciente de cada servicio crítico | fecha del informe menos fecha de la última prueba que cumplió tanto el RTO como el RPO. Una prueba fallida no reinicia el reloj. Los servicios nunca probados se muestran como "nunca" y no como cero | días, por servicio, con el más antiguo resaltado | Informes de ejercicios, registro de servicios | Gestión de la continuidad del servicio | Calendario de game days; antigüedad de los elementos de trabajo | Mensual |
| Tasa de éxito de restauración de copias de seguridad | Proporción de restauraciones intentadas desde copias de seguridad que se completaron con datos verificados y utilizables | restauraciones que se completaron y pasaron una comprobación de verificación de datos / restauraciones intentadas, sobre pruebas de restauración automatizadas y manuales. El éxito del trabajo de copia por sí solo se excluye, porque un trabajo que se ejecutó no es una restauración que funcionó | porcentaje, por nivel de datos | Registros del sistema de copias de seguridad, resultados de verificación automatizada de restauración | Gestión de la continuidad del servicio; gestión de infraestructura y plataforma | Simulacro de restauración; criterios de operabilidad en la definición de terminado | Semanal para pruebas automatizadas; mensual en la revisión |
| Tasa de cierre de hallazgos de ejercicios | Proporción de hallazgos de ejercicios de recuperación cerrados dentro de su plazo acordado, dividida por gravedad | hallazgos cerrados dentro del objetivo / hallazgos que vencieron en el periodo. El reloj arranca cuando el hallazgo se registra en el informe del ejercicio y se detiene en la corrección verificada, es decir, una nueva prueba o una revisión que la confirma. Los hallazgos aceptados como riesgos por un responsable con nombre se cuentan por separado | porcentaje, con el recuento de hallazgos vencidos | Informe del ejercicio, rastreador de incidencias | Gestión de la continuidad del servicio; mejora continua | Acciones de la retrospectiva; antigüedad de los elementos de la lista de pendientes | Mensual |
| Vigencia del plan | Proporción de planes de continuidad y manuales de procedimiento revisados después del último cambio importante de su servicio, o dentro de su intervalo de revisión | planes con una fecha de revisión posterior al último cambio importante y dentro del intervalo / planes incluidos. Cambio importante es un registro de cambio marcado como que altera la arquitectura, los almacenes de datos, las dependencias o los proveedores | porcentaje, con la antigüedad del plan sin revisar más antiguo | Repositorio de planes (control de versiones), registros de cambios, registro de servicios | Gestión de la continuidad del servicio; habilitación de cambios | La definición de terminado incluye la actualización del manual de procedimiento | Trimestral |

El reloj del RTO en un ejercicio difiere del reloj de una caída real, que arranca en el impacto (véase el tema 3.4, Métricas de incidentes graves), así que compara ejercicios con ejercicios. Un ejercicio muy guionizado mide la velocidad de ensayo, por lo que conviene registrar cuánta sorpresa contuvo.

## Recomendaciones

### Fija objetivos que se puedan probar

**1. Deriva el RTO y el RPO de un análisis de impacto en el negocio y escríbelos junto al servicio.** El BIA pregunta al negocio cuánto cuestan una hora, un día y una semana de caída y qué datos puede permitirse perder. Registra las respuestas en el registro de servicios para que cada prueba pueda compararse con un objetivo declarado. Los objetivos elegidos solo por ingenieros tienden a ser inasequibles o ajenos a lo que necesitan los clientes.

**2. Clasifica los servicios en niveles y fija los intervalos de prueba por nivel.** Un número pequeño de niveles, quizá tres o cuatro, es más fácil de operar que una regla distinta para cada servicio. Da al nivel superior las pruebas más frecuentes y más realistas, y al nivel inferior una comprobación ligera como una restauración periódica de una muestra. Escribe los intervalos y revísalos cuando cambie el BIA.

**3. Comprueba que el objetivo encaja con la arquitectura.** Un RPO de cinco minutos con una copia de seguridad nocturna es una contradicción que una prueba expondrá en el peor momento. Compara cada objetivo con el diseño de copias de seguridad, replicación y conmutación por error antes del primer ejercicio, y registra cualquier brecha como un hallazgo.

### Prueba de maneras que revelen algo

**4. Combina ejercicios de mesa, simulacros de restauración y game days.** Un ejercicio de mesa es barato y encuentra brechas en roles, contactos y decisiones. Un simulacro práctico de restauración encuentra brechas en procedimientos, permisos y datos. Un game day, que provoca un fallo y observa la respuesta, encuentra brechas en la monitorización, los manuales de procedimiento y la coordinación. Informa cada tipo por separado para que una serie de ejercicios de mesa fáciles no parezca una prueba de recuperación.

**5. Cronometra la restauración con datos de tamaño de producción.** Una restauración que funciona con una copia pequeña puede fallar con el volumen real por límites de caudal o de almacenamiento. Donde las pruebas a escala completa sean demasiado costosas para hacerlas a menudo, ejecuta una periódicamente e indica cualquier extrapolación. Registra el tamaño de los datos junto con el resultado.

**6. Verifica que los datos restaurados son utilizables.** Añade una comprobación automatizada tras la restauración, como un recuento de filas, una suma de verificación o una transacción sintética. Cuenta una restauración como exitosa solo cuando esa comprobación pasa.

**7. Añade sorpresa gradualmente.** Los primeros ejercicios pueden anunciarse y guionizarse. Los posteriores deben reservar los detalles del fallo e incluir dependencias como credenciales caducadas o un proveedor inalcanzable. Registra el nivel de sorpresa para poder leer los resultados en contexto.

### Convierte los hallazgos en cambio

**8. Registra cada hallazgo con un responsable, una gravedad y una fecha de vencimiento.** Un game day produce una lista: un permiso que falta, un paso del manual que ya no coincide con la herramienta, un monitor que nunca saltó. Pon cada uno en la lista de pendientes del equipo con la misma visibilidad que el trabajo de funcionalidades. Sigue la antigüedad de los hallazgos abiertos y la proporción cerrada a tiempo, y confirma el cierre con una nueva prueba donde sea práctico.

**9. Vincula los hallazgos con la gestión de problemas y el aprendizaje.** Un hallazgo que se repite entre ejercicios es un problema en el sentido de ITIL (véase el tema 4.1, Métricas de gestión de problemas). Revisa cada ejercicio sin culpas, como harías con un análisis posterior, y sigue las acciones hasta su cierre (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

### Mantén vivos los planes

**10. Mantén los planes y los manuales de procedimiento en control de versiones y vincúlalos con el cambio.** Cuando un registro de cambio altere la arquitectura, un almacén de datos o un proveedor, exige que el plan propietario se revise en el mismo trabajo (véase el tema 4.3, Métricas de habilitación de cambios). Mide la vigencia del plan frente al último cambio importante y no solo frente al calendario. Un plan revisado cada trimestre que ignora la migración del mes pasado solo está vigente de nombre.

**11. Mantén honesto el mapa de dependencias.** El orden de recuperación depende de servicios compartidos como la identidad, la resolución de nombres y el almacenamiento de secretos. Concilia el mapa con los registros de configuración y corrige las brechas que revelen los ejercicios (véase el tema 7.4, Métricas de calidad de la configuración y la CMDB).

**12. Incluye a los proveedores y rota el turno de ejercicios.** Pide a cada proveedor crítico su propia evidencia de pruebas y acuerda cómo ejercitar los pasos conjuntos (véase el tema 8.4, Métricas de proveedores y contratos). Los ejercicios consumen tiempo, así que reparte el turno en una rotación y cuéntalo como carga operativa (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

## Vectores de manipulación y barreras de protección

Las cifras de continuidad son fáciles de adornar porque pocas personas miran de cerca un ejercicio, y la prueba real ocurre rara vez. La tabla empareja cada métrica con una forma de manipularla y la comprobación que la detecta. Los emparejamientos siguen la forma expuesta en el tema 1.2 (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de RTO cumplido | Elegir un conjunto de datos de prueba pequeño, un escenario fácil o un guion ensayado; arrancar el reloj tarde, después de que el equipo haya empezado; relajar la comprobación de salud para que "restablecido" llegue antes; fijar un RTO generoso para que toda prueba pase | Registrar el tamaño de los datos, la sorpresa del escenario y la definición de la comprobación de salud con cada resultado; comparar el RTO con el BIA; mostrar cada ejercicio como su propia fila, incluidos los fallos |
| Tasa de RPO cumplido | Medir la pérdida solo en la tabla principal y no en todo el estado; probar una réplica que está sincronizada porque no corre carga; redefinir el RPO tras un resultado fallido | Verificar la pérdida de datos frente al registro de escrituras en todos los almacenes de datos incluidos; probar bajo una carga de escritura realista; llevar un registro de cambios de los objetivos con sus motivos |
| Cobertura de recuperación probada | Contar las discusiones de ejercicios de mesa como pruebas; probar un servicio trivialmente pequeño para subir el porcentaje; reducir la lista incluida reclasificando servicios a un nivel inferior | Exigir pruebas prácticas para el recuento de nivel 1; informar la cobertura ponderada por la criticidad del servicio; auditar los cambios de nivel frente al BIA |
| Días desde la última prueba de recuperación superada | Volver a ejecutar una prueba fácil para reiniciar la antigüedad; etiquetar una prueba parcial como superada; reiniciar la fecha tras una revisión en papel | Mostrar el alcance de la última prueba superada; mostrar la antigüedad máxima y los servicios nunca probados; exigir que se hayan cumplido tanto el RTO como el RPO |
| Tasa de éxito de restauración de copias de seguridad | Informar el éxito del trabajo de copia como éxito de restauración; probar solo las copias que se sabe que son buenas; verificar con una comprobación que no puede fallar | Seguir las restauraciones de copias elegidas al azar; exigir un resultado de verificación de datos; revisar la propia comprobación en cada auditoría |
| Tasa de cierre de hallazgos de ejercicios | Cerrar hallazgos sin corrección; rebajar la gravedad para relajar el plazo; dividir un hallazgo en muchos fáciles; registrar pocos hallazgos desde el principio | Verificar el cierre con una nueva prueba; informar los hallazgos por ejercicio junto a la tasa de cierre, ya que un recuento decreciente puede significar ejercicios más suaves; revisar los cambios de gravedad |
| Vigencia del plan | Actualizar una fecha de revisión sin leer el plan; marcar los cambios como no importantes; rellenar el plan con texto genérico que nunca queda obsoleto | Muestrear planes y recorrerlos con alguien que no los escribió; comparar la tasa de marcado de cambio importante con el historial de cambios de arquitectura; vincular la vigencia con los resultados de las pruebas |

Una lectura sana muestra un puñado de pruebas por trimestre con una variación honesta: algunas superadas al primer intento, algunas fallidas y repetidas, y los hallazgos de cada una aparecen en la lista de pendientes y se cierran dentro del plazo indicado. Las puntuaciones perfectas año tras año son un motivo para preguntar cuán difíciles son los ejercicios.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Pruebas de restauración automatizadas, pequeñas y frecuentes | Evidencia barata y continua; detecta pronto los fallos silenciosos de copias | No prueba la coordinación, las personas ni la recuperación a escala completa |
| Ejercicio anual de conmutación por error a escala completa | Realista; ejercita juntos a personas, proveedores y dependencias | Caro y poco frecuente; difícil de repetir tras una corrección; conlleva riesgo si se ejecuta en producción |
| Ejercicios de mesa | Bajo costo; encuentra brechas en roles y decisiones; buenos para formación | No prueba que la tecnología funcione; fácil de ejecutar sin aprender nada |
| Game days en producción con fallo provocado | Máximo realismo; prueba la monitorización y los manuales tal como son | Necesita salvaguardas maduras y apoyo del liderazgo; puede dañar a clientes si se ejecuta con descuido |
| Objetivos por niveles | Gasta esfuerzo donde está el riesgo | Las asignaciones de nivel pueden derivar y necesitan un responsable |

La respuesta práctica es un programa por capas: comprobaciones automatizadas baratas de restauración todo el tiempo, simulacros prácticos de cada servicio de nivel 1 a un intervalo fijo, un ejercicio mayor en un ciclo más largo y ejercicios de mesa para decisiones y comunicación. Indica los intervalos para que quien lea pueda juzgar cuán reciente es la evidencia.

## Preguntas para conversar con tu equipo

**1. ¿Cuándo restauramos por última vez nuestro servicio más importante, y qué demostramos exactamente?**
Pide la fecha, el tamaño de los datos, el escenario y el resultado, y escríbelos en una pizarra. El facilitador debe resistirse a juzgar y centrarse en la brecha entre la afirmación y la evidencia. Termina acordando una prueba que cerraría la mayor brecha.

**2. ¿Quién eligió nuestro RTO y RPO, y volvería a elegirlos hoy el negocio?**
Remonta cada objetivo a un análisis de impacto en el negocio o a una decisión. Pregunta si la arquitectura podría cumplir el objetivo sobre el papel, y si alguna vez se declaró el costo de cumplirlo. Acordad quién confirmará con el negocio los objetivos de los servicios principales y para cuándo.

**3. ¿Cuánto nos costaría en reputación un ejercicio fallido, y condiciona eso lo difíciles que son nuestros ejercicios?**
Esta pregunta saca a la luz la presión que vuelve suaves los ejercicios. Pregunta si una prueba fallida se trata como un fracaso del equipo o como un éxito del ejercicio.

**4. ¿Qué hallazgos de nuestro último ejercicio siguen abiertos, y por qué?**
Lee la lista en voz alta con antigüedades y responsables. Para cada elemento vencido, pregunta qué lo bloquea: trabajo que compite, propiedad poco clara, costo o la creencia de que el riesgo es aceptable. El objetivo es que ningún hallazgo quede sin responsable.

**5. ¿Qué supone nuestro plan que ya no es cierto?**
Elige un plan y léelo con una persona que no lo escribió. Busca herramientas retiradas, cuentas renombradas y proveedores que se fueron. Pregunta cómo se actualizaría el plan cuando cambie el servicio, y quién se da cuenta cuando no ocurre. Vincula la respuesta con el proceso de cambios.

**6. ¿Qué dependencia lo detendría todo, y alguna vez hemos probado sin ella?**
Los servicios compartidos como la identidad, la resolución de nombres, los secretos y el propio sistema de avisos son puntos únicos de fallo comunes. Pide al equipo que los nombre y que describa la última vez que cada uno estuvo indisponible a propósito.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de producto poseen el diseño que hace posible la recuperación, así que se encuentran con la continuidad como parte de la definición de terminado de los servicios críticos: una vía de copia de seguridad, un procedimiento de restauración y un manual que funcione. Deben ejecutar simulacros de restauración dentro de su propia cadencia, guardar el código de recuperación con el servicio y tratar un simulacro fallido como un elemento de la lista de pendientes.

### Equipos de servicio y operaciones

Los equipos de operaciones ejecutan la mayoría de los ejercicios y cargan con el trabajo de prepararlos. Deben llevar el calendario de ejercicios, registrar las cronologías mientras el ejercicio transcurre y escribir los hallazgos el mismo día. Los resultados describen el servicio y el plan, y nadie se clasifica por la rapidez con que un individuo recuperó un simulacro.

### Liderazgo y gobernanza

Los líderes fijan los objetivos con el negocio y deciden cuánta recuperación vale la pena comprar. Deben pedir ver el último resultado demostrado junto a cada objetivo, la antigüedad de la evidencia y los hallazgos abiertos, y evitar premiar una hoja limpia. Los órganos de gobernanza deben esperar un conjunto pequeño y estable de medidas de continuidad, vinculado al registro de riesgos y a los informes regulados donde corresponda (véanse el tema 8.2, Métricas de riesgos y controles, y el tema 8.5, Informes regulatorios y gubernamentales).

### Clientes y usuarios

Los clientes rara vez ven la continuidad hasta que importa, y entonces la juzgan enteramente por el resultado: cuánto tiempo estuvieron sin el servicio y si sus datos sobrevivieron. Se benefician de declaraciones claras de lo que se promete, en términos que puedan entender, y de una comunicación honesta cuando un incidente invoca el plan. Donde los contratos incluyan compromisos de recuperación, comparte la evidencia de los ejercicios si se solicita (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional opera un sistema de citas de pacientes, un archivo de imágenes médicas y un servicio de mensajería del personal. Un equipo de producto de ocho personas mantiene las citas, y un equipo de operaciones opera la plataforma. Todos los números de este ejemplo son ilustrativos.

El registro del departamento lista las citas como nivel 1 con un RTO de 2 horas y un RPO de 15 minutos. Su informe trimestral muestra "tasa de RTO cumplido: 100 por ciento en 4 ejercicios" y "cobertura de recuperación probada: 100 por ciento". Un nuevo jefe de operaciones lee los informes de ejercicios detrás de los números. Tres de los cuatro ejercicios fueron de mesa, y la única restauración práctica usó una copia de la base de datos con aproximadamente una décima parte de los datos de producción. Nadie había restaurado una copia de seguridad en un entorno limpio en 14 meses.

El equipo decide cambiar lo que se mide y se prueba. Redefine la cobertura de recuperación probada para contar solo pruebas prácticas, lo que baja la cifra al 33 por ciento entre los tres servicios de nivel 1. Programa una restauración a tamaño de producción para las citas, con verificación automatizada de recuentos de filas y una transacción sintética de reserva. La ejecución tarda 3 horas y 40 minutos frente a un RTO de 2 horas, y los datos restaurados van 40 minutos por detrás del punto de fallo frente a un RPO de 15 minutos, porque el envío de registros se había pausado durante una migración y nunca se reanudó. El game day produce 9 hallazgos: 2 de gravedad alta, 5 media y 2 baja.

La decisión registrada en el registro es tratar el fallo como el resultado más valioso del año. El equipo abre trabajo para reanudar el envío de registros con una alerta sobre su retraso, para paralelizar la restauración y para mover un volumen de datos a un almacenamiento más rápido. El RTO se mantiene en 2 horas, y el equipo añade una alternativa manual documentada para las citas. La tasa de cierre de hallazgos de los primeros 60 días es de 7 de 9 a tiempo, y los otros dos se aceptan como riesgos por responsables con nombre.

El riesgo de manipulación detectado aquí fue sutil. Nadie falseó un número: un recuento generoso de ejercicios de mesa y un conjunto de datos de prueba pequeño pusieron el informe en verde. Las barreras de protección que funcionaron fueron registrar el tamaño de los datos y el tipo de ejercicio con cada resultado, y la práctica de leer los informes de ejercicios subyacentes. En el informe siguiente, el equipo muestra cada ejercicio como su propia fila, con la ejecución fallida incluida.

## Perspectiva por sector

**Startup.** Suele haber un solo entorno de producción, un equipo pequeño y un proveedor de nube gestionada. La medida más valiosa es la más sencilla: restaurar cada mes la base de datos de producción desde una copia a un entorno limpio, cronometrarlo y verificar el resultado. Escribe el RTO y el RPO en una página.

**Pequeña empresa.** TI suele estar externalizada o a cargo de una o dos personas con servicios alojados. Pregunta por escrito al proveedor qué recuperación se compromete a ofrecer y qué evidencia puede mostrar, y prueba una restauración de tus propios datos cada trimestre. Guarda un plan de una página donde pueda leerse cuando los sistemas principales estén caídos.

**Gran empresa.** Muchos servicios, muchos proveedores y plataformas compartidas hacen esenciales la clasificación en niveles y un mapa de dependencias. Invierte en un registro central de servicios con objetivos, un calendario de ejercicios, verificación automatizada de restauraciones e informes coherentes para que los resultados se comparen entre equipos.

**Gobierno y sector público.** Las obligaciones de continuidad pueden surgir de la ley, la auditoría o la política, y un servicio público puede tener que seguir funcionando durante emergencias. La evidencia de las pruebas suele revisarse externamente, así que guarda los informes de ejercicios, los hallazgos y los registros de cierre en una forma que un auditor pueda leer. La contratación puede fijar los acuerdos de recuperación, así que incluye en los contratos los derechos de ejercicio y la evidencia (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Las razones para invertir son el costo de una caída grave que dura más de lo que el negocio puede soportar, la pérdida de datos que no pueden recrearse y las obligaciones con clientes, reguladores y aseguradoras que piden evidencia de preparación. El trabajo de continuidad es un seguro, así que el retorno es la pérdida evitada y la confianza de quienes toman decisiones, y es difícil expresarlo como una cifra sin inventarla. Descríbelo mediante patrones que puedas observar: la brecha entre el tiempo de recuperación declarado y el demostrado, el número de hallazgos de gravedad alta encontrados en ejercicios en lugar de en eventos reales y el tiempo para responder a la petición de evidencia de un cliente o auditor.

Los costos vienen en tres grupos: la redundancia y las herramientas que exigen los objetivos, el tiempo de las personas para planificar, ejecutar y revisar ejercicios, y el esfuerzo de mantener vigentes los planes y los mapas de dependencias.

El costo total de propiedad está dominado por las personas y por los niveles más estrictos. Pasar de un RTO de 24 horas a uno de 2 horas cambia el diseño y la factura, así que haz explícita esa compensación con el negocio. Las pruebas pequeñas, frecuentes y automatizadas tienden a costar menos que un gran evento anual porque los defectos afloran mientras son baratos de corregir.

## Antipatrones y trampas

- **El plan en el estante.** Un documento cuenta como preparación y nadie lo ha probado. En su lugar, informa la fecha y el resultado de la última prueba práctica junto a cada objetivo.
- **El éxito de la copia como éxito de la restauración.** Los trabajos informan verde mientras los datos no pueden restaurarse. En su lugar, prueba las restauraciones con regularidad y verifica los datos antes de contar un éxito.
- **Teatro ensayado.** El ejercicio está guionizado y lo ejecutan los autores del plan. En su lugar, añade sorpresa gradualmente.
- **Una sola meta para todo.** Todos los servicios tienen un RTO de cuatro horas porque lo decía la plantilla. En su lugar, clasifica los servicios en niveles a partir de un análisis de impacto en el negocio y fija objetivos que encajen.
- **Hallazgos que nunca se cierran.** El informe del ejercicio enumera brechas y la lista de pendientes nunca las ve. En su lugar, da a cada hallazgo un responsable y una fecha de vencimiento, y verifica el cierre con una nueva prueba.
- **Penalizar la prueba fallida.** Un equipo al que se culpa por un RTO incumplido dejará de ejecutar pruebas duras. En su lugar, acordad de antemano que un ejercicio fallido con buenos hallazgos es un buen resultado, y revisadlo sin culpas.
- **Planes obsoletos tras un cambio rápido.** El calendario guía la revisión y los cambios de arquitectura se cuelan. En su lugar, vincula la revisión del plan con los registros de cambios importantes y mide la vigencia del plan frente a ellos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Objetivos y niveles | RTO y RPO sin escribir o copiados de una plantilla | Objetivos escritos para algunos servicios clave | Niveles y objetivos provienen de un análisis de impacto en el negocio y están en el registro de servicios | Objetivos revisados frente a los resultados demostrados y la arquitectura | Objetivos acordados conjuntamente con el negocio y los proveedores, y ajustados a medida que cambian los servicios |
| Pruebas y evidencia | Recuperación nunca probada, o probada una vez tras un incidente | Pruebas de restauración ad hoc de algunos equipos; resultados guardados en notas personales | Intervalos de prueba por niveles con alcance, cronología y resultado registrados | Resultados con seguimiento de su tendencia, con ejercicios de mesa, simulacros y game days informados por separado | Ejercicios entre equipos y con proveedores, con sorpresa, programados según el riesgo |
| Hallazgos y aprendizaje | Brechas notadas informalmente | Hallazgos enumerados tras algunos ejercicios | Cada hallazgo tiene un responsable, una gravedad y una fecha de vencimiento | Tasa de cierre y antigüedad revisadas, con una nueva prueba que confirma el cierre | Los hallazgos alimentan las plataformas compartidas, los contratos con proveedores y los estándares de diseño |
| Vigencia del plan | Planes escritos una vez | Planes actualizados tras los incidentes | Planes en control de versiones con un intervalo de revisión | Revisión vinculada a los cambios importantes y medida | Planes y manuales probados como código y generados a partir de la definición del servicio donde sea posible |

## Lista de verificación

- [ ] Cada servicio de nivel 1 tiene un RTO y un RPO escritos que provienen de un análisis de impacto en el negocio.
- [ ] El registro de servicios muestra el nivel, los objetivos y el intervalo de prueba de cada servicio.
- [ ] Los relojes del RTO y del RPO, la comprobación de salud y las exclusiones están escritos (véase el tema 1.5, Fuentes de datos e instrumentación).
- [ ] Las pruebas prácticas de recuperación, los ejercicios de mesa y los game days se informan como tipos separados.
- [ ] Cada prueba de recuperación registra el tamaño de los datos, el escenario, el nivel de sorpresa y el tiempo de restauración y la pérdida de datos medidos.
- [ ] Las restauraciones desde copias de seguridad se prueban automáticamente, y una comprobación de verificación de datos decide el éxito.
- [ ] Cada hallazgo de ejercicio tiene un responsable, una gravedad, una fecha de vencimiento y un lugar en la lista de pendientes.
- [ ] La revisión de planes está vinculada a los registros de cambios importantes, y el plan sin revisar más antiguo es visible.
- [ ] El mapa de dependencias incluye los servicios compartidos, y al menos un escenario elimina uno de ellos.
- [ ] Cada métrica de este tema tiene una barrera de protección con nombre y un responsable en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).
- [ ] El turno de ejercicios rota, y el tiempo que lleva se cuenta como carga operativa.

## Prompts de IA

**Diseña una prueba de recuperación y las medidas que la acompañan.**

```text
Quiero probar la recuperación de [service name], un servicio de [tier] con un
RTO indicado de [RTO] y un RPO de [RPO]. Sus componentes principales son [list:
data stores, queues, compute, shared services] y sus proveedores son [list].
Redacta un plan de prueba con un escenario realista, el evento que arranca el
reloj, la comprobación de salud que lo detiene, cómo medir la pérdida de datos
frente al RPO, el tamaño de datos que usar, qué registrar y las salvaguardas
para evitar daños a producción. No inventes tiempos de referencia ni afirmes
que algún objetivo sea alcanzable. Enumera tus supuestos y las preguntas que
debería responder para terminar el plan.
```

**Revisa informes de ejercicios en busca de evidencia aduladora.**

```text
Aquí hay resúmenes de nuestros últimos [number] ejercicios de recuperación:
[paste for each: type, date, scope, data size, restore time, data loss,
findings count]. Nuestros objetivos son [RTO and RPO per tier]. Identifica
dónde los resultados informados podrían exagerar la capacidad real de
recuperación, como conjuntos de datos pequeños, escenarios guionizados,
cobertura solo de mesa o comprobaciones de salud laxas. Sugiere qué información
adicional registrar y qué métricas de barrera de protección emparejar con cada
resultado. No inventes valores de referencia ni supongas hechos que no te he
dado. Enumera tus supuestos.
```

**Convierte las notas de un game day en hallazgos y elementos de la lista de pendientes.**

```text
Aquí están las notas en bruto de un game day sobre [service]: [paste notes and
timeline]. Extrae cada brecha entre el plan y lo que ocurrió como un hallazgo
separado, con un título corto, una descripción, una gravedad sugerida usando
esta escala [severity scale], un rol candidato como responsable (no una persona
con nombre) y cómo podríamos verificar la corrección. Agrupa los hallazgos que
puedan compartir una causa raíz. No inventes eventos que no estén en las notas.
Enumera tus supuestos y todo lo que necesite aclararse.
```

**Comprueba la vigencia de un plan frente a un cambio reciente.**

```text
Aquí está el plan de continuidad de [service], revisado por última vez el
[date]: [paste plan or outline]. Estos son los cambios importantes desde
entonces: [list changes to architecture, data stores, dependencies, suppliers,
and tooling]. Identifica pasos, contactos, herramientas y dependencias del plan
que los cambios puedan haber dejado erróneos, y enumera preguntas que debería
hacer quien revise. No inventes detalles sobre nuestros sistemas. Enumera tus
supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una métrica de continuidad, de recuperación o de ejercicios, y la barrera de protección que debe emparejarse con ella.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de continuidad editada indica sus relojes, sus exclusiones y su vector de manipulación.

## Puntos clave

- Un objetivo de recuperación es una promesa, y solo un ejercicio cronometrado y realista muestra si puede cumplirse.
- Informa el último resultado demostrado y su antigüedad junto a cada RTO y RPO, y muestra cada ejercicio como su propia fila.
- Prueba las restauraciones, no las copias: una restauración cuenta solo cuando se ha verificado que los datos son utilizables.
- El producto de un ejercicio es una lista cerrada de hallazgos, así que sigue su antigüedad y confirma el cierre con una nueva prueba.
- Mantén los planes en control de versiones y ata su revisión al cambio importante, y no solo al calendario.
- Mide servicios y planes, nunca personas, y haz de un ejercicio fallido con buenos hallazgos un resultado seguro y respetado.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
