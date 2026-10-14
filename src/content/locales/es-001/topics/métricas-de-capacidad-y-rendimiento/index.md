# Métricas de capacidad y rendimiento

**Mide cuán lleno está un servicio, cuán lentas son sus solicitudes más lentas y cuánto margen queda antes de que los usuarios lo noten, y pronostica luego la demanda con rangos para que la capacidad llegue antes de la necesidad y no después de la queja.**

## Resumen y motivación

La disponibilidad te dice si un servicio responde. La capacidad y el rendimiento te dicen lo bien que responde y cuánto tiempo seguirá haciéndolo a medida que crece la demanda. Una página de pago que responde en ocho segundos está "activa" según la mayoría de las definiciones de disponibilidad y "rota" según la definición de todos los clientes. Una base de datos al 95 por ciento de su almacenamiento está sana hoy y es una caída el mes que viene. Este tema cubre las medidas que cierran esas brechas.

La [planificación de la capacidad](https://en.wikipedia.org/wiki/Capacity_planning) es la práctica de determinar los recursos que un servicio necesita para atender una demanda cambiante. En ITIL 4 esto se sitúa en la práctica de gestión de la capacidad y el desempeño, que busca asegurar que los servicios alcancen el desempeño acordado y esperado y satisfagan la demanda actual y futura con eficiencia de costos. La práctica lo describe en tres niveles: el negocio (lo que la organización pedirá a sus servicios), el servicio (cómo se comporta un servicio bajo carga) y el componente (cómo se comporta cada servidor, base de datos, enlace de red o cola). Las medidas de este tema funcionan sobre todo a los niveles de servicio y de componente, y necesitan insumos del nivel de negocio para pronosticar cualquier cosa.

La [ingeniería de fiabilidad de sitios (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) trata la latencia, el tráfico, los errores y la saturación como las cuatro señales que vale la pena vigilar en cualquier sistema de cara al usuario, y ata las metas de rendimiento a los objetivos de nivel de servicio (véase el tema 5.2, SLI, SLO y presupuestos de errores). Los equipos ágiles se encuentran con la capacidad como una pregunta de entrega: ¿puede la próxima versión soportar la carga esperada, y quién posee la respuesta? Tratar el rendimiento como un criterio de aceptación, comprobado en la canalización, adelanta la conversación.

Varios términos se repiten en este tema. La **utilización** es la proporción de la capacidad de un recurso que está en uso durante un intervalo, por ejemplo la proporción del tiempo de procesador ocupado. La **saturación** es la cantidad de trabajo que espera porque un recurso está totalmente usado, por ejemplo la longitud de una cola de ejecución o de una lista de solicitudes pendientes. La utilización dice cuán ocupado está un recurso. La saturación dice si el trabajo hace cola por él, y las colas son lo que sienten los usuarios. La **[latencia](https://en.wikipedia.org/wiki/Latency_(engineering))** es el tiempo entre una solicitud y su respuesta. El **[rendimiento](https://en.wikipedia.org/wiki/Throughput)** (throughput) es la tasa a la que un servicio completa trabajo, por ejemplo solicitudes por segundo. El **margen** (headroom) es la brecha entre la carga máxima actual y la carga a la que el servicio deja de cumplir sus objetivos. La **demanda** es el trabajo que los usuarios y el negocio piden al servicio, que no es lo mismo que el trabajo que completa: un servicio sobrecargado completa menos de lo que se le pidió.

Una propiedad de las líneas de espera explica por qué estas medidas se comportan como lo hacen. La [teoría de colas](https://en.wikipedia.org/wiki/Queueing_theory) muestra que, para un servicio con llegadas aleatorias, el tiempo de espera crece despacio mientras la utilización es moderada y sube luego abruptamente a medida que la utilización se acerca al uso total. La [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law) relaciona el número medio de solicitudes en un sistema con la tasa de llegada y el tiempo medio que cada una pasa en él. Un recurso con una utilización media alta está cerca de un precipicio. La forma exacta de la curva depende del servicio, así que encuéntrala poniendo a prueba tu propio sistema con [pruebas de carga](https://en.wikipedia.org/wiki/Load_testing) en lugar de tomar prestado un umbral de un artículo general.

La latencia necesita un cuidado particular porque el promedio oculta la experiencia que importa. Un [percentil](https://en.wikipedia.org/wiki/Percentile) indica el valor por debajo del cual cae una proporción dada de las observaciones: el percentil 95 (p95) es la latencia que el 95 por ciento de las solicitudes mejora. La [latencia de cola](https://en.wikipedia.org/wiki/Tail_latency) tiende a dominar en los sistemas donde una acción del usuario se ramifica en muchas llamadas internas. Informa percentiles en lugar de solo la media (véanse el tema 1.6, Alfabetización estadística para métricas de servicio, y el tema 3.3, Tiempo de respuesta y resolución de incidentes, que hace el mismo argumento para el tiempo de resolución).

Por último, la capacidad depende del [pronóstico](https://en.wikipedia.org/wiki/Forecasting) de la demanda, y la demanda tiene patrones: ciclos diarios, ciclos semanales y [estacionalidad](https://en.wikipedia.org/wiki/Seasonality) ligada al calendario, a las campañas y a los lanzamientos de productos. El [autoescalado](https://en.wikipedia.org/wiki/Autoscaling) cambia cómo se siente esto, ya que las plataformas en la nube pueden añadir recursos en minutos, pero no elimina el tema. El autoescalado tiene límites, un retraso, un costo y dependencias que no escalan, como una base de datos o una interfaz de un tercero. El lado del costo pertenece a FinOps (véase el tema 7.6, Métricas de FinOps y costos en la nube).

Los temas vecinos cubren la aritmética de la disponibilidad (véase el tema 5.3, Métricas de disponibilidad), el diseño de alertas (véase el tema 5.5, Métricas de monitorización y calidad de las alertas) y la carga de la rotación (véase el tema 5.7, Métricas de trabajo repetitivo y guardias). Aquí el asunto son los recursos propios del servicio y sus tiempos de respuesta.

## Principios clave

- **Mide la saturación además de la utilización.** La utilización muestra cuán ocupado está un recurso, y la saturación muestra si el trabajo espera. Los usuarios experimentan la espera.
- **Informa la latencia como una distribución.** Usa percentiles por operación de cara al usuario y mantén visible la cola lenta. Un promedio de una distribución asimétrica no describe a casi nadie.
- **Ata las metas a la experiencia del usuario.** Un umbral es significativo cuando se remonta a algo que importa a un usuario o al negocio, no a lo que una herramienta grafica por casualidad.
- **Planifica con rangos y revísalos.** Un pronóstico es un rango con supuestos declarados. Compáralo con lo que ocurrió y aprende del error.
- **Conoce tus límites probando.** La capacidad es una hipótesis hasta que una prueba de carga realista la confirma. Repite la prueba tras los cambios que importen.
- **Describe sistemas, nunca personas.** Estas medidas pertenecen a servicios, componentes y equipos. Nunca son un cuadro de mando de individuos.
- **Pondera el costo frente al riesgo.** La capacidad de reserva cuesta dinero, y la capacidad que falta cuesta clientes. Haz visible la compensación para que se elija y no se derive hacia ella.

## Definiciones de métricas

La tabla enumera siete medidas. Los relojes y los límites se indican en cada fórmula. Las medidas basadas en percentiles usan una ventana fija, indicada en el registro, y se calculan a partir de observaciones en bruto o de histogramas, nunca como un promedio de promedios.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Utilización de recursos | Proporción de la capacidad de un recurso en uso durante un intervalo, informada como un percentil alto de la serie de intervalos | capacidad ocupada / capacidad total, por intervalo de 1 a 5 minutos; informa la mediana y el percentil 95 de la ventana de revisión; se excluyen las ventanas de mantenimiento con el recurso drenado | porcentaje | Monitorización de infraestructura y métricas de la plataforma en la nube | Gestión de la capacidad y el desempeño; monitorización y gestión de eventos | Criterios de aceptación operativa en la definición de terminado; señales de recursos de SRE | Semanal |
| Saturación | Cantidad de trabajo que espera un recurso totalmente usado | longitud de la cola, cola de ejecución, solicitudes pendientes o solicitudes limitadas, por intervalo; informa el percentil 95 y la proporción de intervalos con alguna espera; se excluyen los intervalos sin demanda | recuento, o porcentaje de intervalos | Telemetría de aplicación y de infraestructura | Gestión de la capacidad y el desempeño; monitorización y gestión de eventos | Señal de saturación de SRE; límite de trabajo en curso en una cola de servicio | Semanal |
| Percentil de latencia | Tiempo que se tarda en responder una solicitud de una operación de cara al usuario, informado en la mediana, el p95 y el p99 | tiempo de respuesta desde que la solicitud se recibe en el borde hasta que se envía el último byte, por solicitud exitosa; las solicitudes fallidas se informan como errores, no como respuestas rápidas; mide sobre una ventana móvil | milisegundos | Registros del equilibrador de carga o la pasarela, trazado, monitorización de usuarios reales | Gestión de niveles de servicio; gestión de la capacidad y el desempeño | Indicador y objetivo de nivel de servicio de latencia de SRE | Continua, revisada semanalmente |
| Margen | Carga restante que un servicio puede soportar antes de incumplir sus objetivos | (carga de ruptura probada o modelada - carga máxima actual) / carga máxima actual; el máximo es la hora más ocupada de la ventana; la carga de ruptura es la carga a la que el objetivo de latencia se incumple por primera vez en una prueba, no el máximo del hardware | porcentaje, o días al crecimiento actual | Resultados de pruebas de carga y telemetría de tráfico | Gestión de la capacidad y el desempeño; gestión de niveles de servicio | Requisitos no funcionales y pruebas de rendimiento en la canalización | Mensual, y antes de los grandes lanzamientos |
| Error de pronóstico | Diferencia entre la demanda pronosticada y la demanda real de un periodo | absoluto (máximo pronosticado - máximo real) / máximo real, para un horizonte indicado; el pronóstico se congela al inicio del horizonte y no se revisa después; los eventos puntuales no pronosticados se enumeran, no se retiran | porcentaje | Registro de pronósticos y telemetría de tráfico | Gestión de la capacidad y el desempeño; planificación relacionada con la demanda en la gestión financiera del servicio | Pronóstico de versiones y de hoja de ruta; pronóstico de la demanda de SRE | Trimestral |
| Plazo de entrega de capacidad | Tiempo necesario para poner en servicio capacidad nueva una vez aceptada la necesidad | el reloj arranca cuando se aprueba la petición de capacidad y se detiene cuando la capacidad soporta tráfico de producción; informa la mediana y el percentil 85; las peticiones canceladas se excluyen | días | Registros de peticiones de la herramienta ITSM, registros de cambios, registros de aprovisionamiento | Gestión de la capacidad y el desempeño; gestión de solicitudes de servicio; habilitación de cambios | Plazo de entrega de un elemento de la lista de pendientes de plataforma (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Trimestral |
| Cobertura de pruebas de rendimiento | Proporción de servicios críticos con una prueba de carga reciente y realista | servicios críticos con una prueba de carga superada de menos de una antigüedad indicada, en un entorno y una carga de trabajo representativos / servicios críticos del registro; el límite de antigüedad está escrito | porcentaje | Almacén de resultados de pruebas y registro de servicios | Gestión de la capacidad y el desempeño; gestión de versiones | Pruebas no funcionales en la canalización de entrega continua | Trimestral |

Juntas, responden a cuatro preguntas: cuán lleno está, cuán lento es, cuánto margen queda y con qué rapidez podemos responder cuando cambia la respuesta.

## Recomendaciones

### Empieza por el usuario y luego por el recurso

**1. Elige las pocas operaciones que importan a los usuarios y mide esas.** Un servicio tiene cientos de puntos finales y un puñado de recorridos que importan, como iniciar sesión, buscar, pagar y descargar un extracto. Acuérdalos con los responsables de producto y con los clientes, y fija una expectativa de latencia para cada uno. Se vinculan de manera natural con los indicadores de nivel de servicio (véase el tema 5.2, SLI, SLO y presupuestos de errores).

**2. Empareja cada gráfico de recursos con un gráfico de saturación.** Mostrar solo el uso del procesador invita al falso consuelo de "solo llegó al 70 por ciento". Añade la cola, las solicitudes que esperan o el recuento de limitaciones a su lado. Cuando la saturación aparece antes de que la utilización parezca alarmante, has encontrado la restricción real, y esa restricción a menudo no es el recurso que vigilabas, como un conjunto de conexiones, un límite de hilos o un límite de tasa de una interfaz de un socio.

**3. Prefiere la cola ocupada al promedio tranquilo.** Los promedios de un día mezclan la madrugada con el pico del almuerzo. Mira el periodo más ocupado y registra la fecha y la causa de los peores intervalos. La pregunta de planificación es cómo se comporta el servicio en su peor hora esperada.

### Informa la latencia con honestidad

**4. Publica percentiles por operación y nombra la ventana.** Indica la mediana, el p95 y el p99 de cada operación importante sobre una ventana móvil, y di qué solicitudes se incluyen. No promedies nunca percentiles entre servidores ni entre operaciones, porque el resultado no corresponde a la experiencia de ningún usuario real; combina en su lugar los histogramas o las observaciones en bruto. Si la muestra es pequeña, dilo, ya que un p99 de unos cientos de solicitudes es un número ruidoso (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**5. Mide donde está el usuario, además de donde está el servidor.** Los tiempos del lado del servidor dejan fuera la red, el navegador y el dispositivo. Añade monitorización de usuarios reales o comprobaciones sintéticas para poder distinguir un servidor de fondo lento de una última milla lenta.

**6. Cuenta los errores y los tiempos agotados junto con la latencia, no en su lugar.** Un servicio que falla rápido parece veloz en un gráfico de latencia, y un servicio que agota el tiempo parece lento por la razón equivocada. Informa la tasa de errores con el percentil de latencia para que un fallo rápido no pueda halagar el resultado.

### Encuentra los límites y deja margen

**7. Prueba el punto de ruptura a propósito.** Ejecuta pruebas de carga que reproduzcan una mezcla realista de operaciones, sube la carga gradualmente y anota dónde se incumple por primera vez el objetivo de latencia y qué recurso se satura primero. Prueba en un entorno que se parezca a producción en lo que importa, y anota en qué no se parece. Una prueba fallida en un lugar seguro es el incidente más barato que tendrás (véase el tema 4.5, Métricas de versiones y despliegues, para poner comprobaciones en la canalización).

**8. Fija el margen como una política y revísalo como una compensación.** Decide cuánto margen mantiene un servicio sobre su máximo esperado, y por qué. Los servicios críticos de cara al cliente justifican más, los servicios internos por lotes menos. La cifra es una elección de negocio sobre costo y riesgo, así que registra el razonamiento y revísala cuando cambie el costo de una caída o el precio de la capacidad. No copies un número de otra organización.

### Pronostica la demanda con las personas que la conocen

**9. Pregunta al negocio qué viene y escribe el pronóstico.** Las campañas de marketing, los clientes nuevos, los plazos regulatorios y los eventos estacionales cambian la demanda mucho antes de que el tráfico lo muestre. Mantén un breve registro de pronósticos con la fecha, los supuestos, el rango, el responsable y la fuente de cada insumo. Un pronóstico dado como un rango, como un caso bajo, esperado y alto, es más honesto que un número único y más útil para decidir cuánto comprar.

**10. Puntúa el pronóstico y usa el error para mejorarlo.** Tras cada periodo, compara el pronóstico congelado con lo que ocurrió, usando el error de pronóstico, y enumera las causas de los grandes fallos. Las causas comunes son una campaña no anunciada, un cambio en el comportamiento de los usuarios y una dependencia que se movió. El objetivo no es un error cero, que no es alcanzable, sino aprender qué insumos son fiables y ampliar el rango donde no lo sean.

### Facilita añadir capacidad

**11. Acorta el plazo de entrega de capacidad antes de perseguir la precisión.** Si la capacidad nueva tarda semanas en llegar, debes pronosticar con mucha antelación y cargar con más reserva. Si tarda minutos, puedes operar más cerca de la necesidad. Mira los pasos entre "aprobado" y "soportando tráfico", como la adquisición, la aprobación, el aprovisionamiento, la configuración y las pruebas, y elimina primero las esperas más largas (véase el tema 4.3, Métricas de habilitación de cambios). En términos de ITIL esta es una elección de estrategia de capacidad, anticipar la demanda, igualarla o ir por detrás; elige conscientemente, por servicio.

**12. Trata el autoescalado como un sistema que medir.** Registra con qué frecuencia se dispara el escalado, cuánto tarda la capacidad nueva en ser útil, con qué frecuencia alcanza su máximo configurado y cuánto cuesta. Un autoescalador clavado en su límite es un plan de capacidad que ya ha fallado. Revisa esto junto con la vista de costos para que el rendimiento y el gasto se discutan juntos (véase el tema 7.5, Costo del servicio y economía unitaria).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Utilización de recursos | Promediar sobre intervalos largos para ocultar picos; contar como "usada" la capacidad reservada ociosa; informar solo los recursos más tranquilos | Percentil 95 de la hora punta junto al promedio; medida de saturación; lista de recursos incluidos revisada frente al mapa de servicios |
| Saturación | Subir los límites de cola para que nada se informe como rechazado o limitado; mover la espera a otra cola que no se mide | Percentil de latencia y tasa de errores de la misma operación; tiempo de cola de extremo a extremo, no de una etapa; revisión de todas las colas del camino |
| Percentil de latencia | Informar solo la media o la mediana; descartar de la muestra las solicitudes lentas o fallidas; medir desde una ubicación interna rápida; excluir "valores atípicos" | p95 y p99 mostrados siempre; tasa de errores y de tiempos agotados mostrada junto a la latencia; monitorización de usuarios reales comparada con los tiempos del lado del servidor; tamaño de la muestra mostrado |
| Margen | Elegir una carga de prueba suave; probar un entorno mayor que producción; definir el punto de ruptura como el máximo del hardware | Carga de prueba revisada frente a la forma del tráfico de producción; lista escrita de diferencias entre prueba y producción; margen vuelto a probar tras los cambios relevantes |
| Error de pronóstico | Revisar el pronóstico a posteriori; fijar rangos muy amplios para que todo resultado esté "dentro del rango"; retirar los meses con sorpresas como "eventos no pronosticados" | Pronóstico congelado y fechado en el registro; anchura del rango informada con el error; cada evento excluido enumerado y revisado |
| Plazo de entrega de capacidad | Arrancar el reloj más tarde retrasando los registros de aprobación; cerrar las peticiones cuando se hace el pedido en lugar de cuando la capacidad soporta tráfico; dividir las peticiones | Reloj definido desde la aprobación hasta soportar tráfico; muestra de peticiones cerradas comparada con los registros de aprovisionamiento; recuento de peticiones reabiertas |
| Cobertura de pruebas de rendimiento | Ejecutar una prueba trivial para reclamar cobertura; reducir la lista de servicios críticos; mantener en los libros una antigua prueba superada | Antigüedad de la prueba y realismo de la carga registrados; lista de servicios críticos revisada frente al catálogo de servicios y el historial de incidentes; pruebas fallidas informadas además de las superadas |

Una lectura sana muestra una utilización con ciclos diarios visibles y margen, una saturación que aparece rara vez y brevemente, percentiles de latencia estables o en mejora en las horas más ocupadas, y un error de pronóstico conocido y que se reduce lentamente. La señal sana es que las sorpresas se discuten con sus causas. Los números perfectos deben despertar sospechas, porque suelen significar que la medición es suave.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Operar con margen generoso | Absorbe las sorpresas; protege la latencia y la disponibilidad | Mayor costo; oculta la ineficiencia y un pronóstico débil |
| Operar ajustado con autoescalado rápido | Menor costo; la capacidad sigue a la demanda | Depende de la velocidad y los límites del escalado; las dependencias pueden no escalar; más difícil de razonar durante un incidente |
| Metas de latencia por percentil | Reflejan lo que sienten las solicitudes lentas; resisten los trucos de promediado | Necesitan más datos y muestras mayores; ruidosas en percentiles altos para servicios de poco tráfico |
| Solo latencia media o mediana | Sencilla y estable | Oculta la cola que provoca quejas y abandonos |
| Pruebas de carga sintéticas | Controladas, repetibles, seguras | Solo tan realistas como el modelo de carga y el entorno |
| Telemetría de producción como base | Refleja el comportamiento real y la mezcla real | Revela los límites solo después de alcanzarlos; no puede sondear más allá de la demanda actual |
| Modelos de pronóstico detallados | Captan la estacionalidad y el crecimiento | Requieren datos y habilidad; una falsa sensación de precisión cuando los insumos son débiles |
| Rangos sencillos acordados con el negocio | Fáciles de explicar y actualizar; se centran en los supuestos | Más gruesos; dependen de una aportación honesta del negocio |

Elige el método más ligero que respalde la decisión. Para la mayoría de los servicios bastan una mirada semanal a la utilización en hora punta, la saturación y los percentiles de latencia, una prueba de carga antes de los cambios importantes y una revisión trimestral del pronóstico. Añade modelado donde el costo de equivocarse sea grande.

## Preguntas para conversar con tu equipo

**1. ¿Qué tres recorridos de usuario importan más, y qué tiempo de respuesta espera el usuario para cada uno?**
Pide al grupo que nombre los recorridos y compáralos luego con lo que grafican los paneles. El facilitador debe insistir en una expectativa que se pueda remontar a un usuario o cliente, no a una preferencia de ingeniería.

**2. ¿Dónde está nuestro servicio cerca de un precipicio, y cómo lo sabemos?**
Busca recursos como conjuntos de conexiones, límites de hilos o un límite de tasa de un socio. Pregunta cuándo se probó cada uno por última vez hasta su punto de ruptura. Si nadie lo sabe, ese es el primer trabajo.

**3. ¿Cómo informamos hoy la latencia, y qué diría el uno por ciento de usuarios más lentos?**
Muestra lado a lado la media, la mediana, el p95 y el p99 de una operación y discute la brecha. Pregunta qué solicitudes se excluyen y por qué, y si se cuentan las fallidas.

**4. ¿Cuánto margen mantenemos, quién lo eligió y cuándo revisamos por última vez la elección?**
Discutid el costo del margen y el costo de una caída en el día más ocupado. Acordad una fecha de revisión y la evidencia que cambiaría el margen.

**5. ¿Qué tal fueron nuestros tres últimos pronósticos de demanda, y qué aprendimos?**
Compara los pronósticos fechados con los valores reales y las causas de los grandes fallos. Pregunta qué sabía el negocio que operaciones no recibió. Decidid un insumo que añadir al registro de pronósticos, como el calendario de marketing o un calendario de lanzamientos.

**6. Si necesitáramos el doble de capacidad el mes que viene, ¿qué nos lo impediría?**
Enumera cada paso desde la petición hasta el tráfico de producción y marca dónde espera. Incluye la adquisición, las aprobaciones, las licencias y las dependencias que no escalan. El facilitador debe buscar la espera más larga que no sea técnica, ya que suele ser una aprobación o un contrato. Acordad un paso que acortar y medid el efecto mediante el plazo de entrega de capacidad.

## Cuatro perspectivas

### Equipos de producto y entrega

Incluye una expectativa de rendimiento en los criterios de aceptación de las funcionalidades que tocan caminos ocupados, ejecuta una prueba de carga en la canalización donde sea práctico e informa pronto a operaciones de los lanzamientos. Cuidado con el hábito de tratar el rendimiento como una tarea posterior de "endurecimiento", que se convierte en trabajo no planificado (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

### Equipos de servicio y operaciones

Los equipos de operaciones poseen la telemetría, el plan de capacidad y la respuesta cuando se alcanza un límite. Necesitan la saturación y la latencia de cola en los paneles que realmente usan, un registro de pronósticos compartido con el negocio y resultados de pruebas en los que se pueda confiar. Deben registrar cada incidente relacionado con la capacidad con su causa (véanse el tema 4.1, Métricas de gestión de problemas, y el tema 3.4, Métricas de incidentes graves).

### Liderazgo y gobernanza

Los líderes deciden cuánto riesgo y costo acepta la organización, y la política de margen es donde se muestra esa decisión. Pide percentiles de latencia y margen por servicio crítico, con el error de pronóstico a su lado, y trata las peticiones de capacidad como decisiones de inversión que llevan evidencia. Los órganos de gobernanza deben resistirse a una meta única de utilización para toda la organización, que empuja a cada servicio al mismo punto del precipicio.

### Clientes y usuarios

Los clientes sienten la lentitud como falta de fiabilidad, mucho antes de que cambie ningún número de disponibilidad. Enuncia el rendimiento en términos de percentiles a una carga indicada y comparte cómo maneja el servicio los periodos de pico (véanse el tema 5.1, Métricas de SLA, OLA y XLA, y el tema 6.2, Acuerdos de nivel de experiencia).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio opera una tienda, un servicio de pagos y un servicio de pedidos, cada uno propiedad de un equipo de producto, con un equipo de plataforma que aporta infraestructura compartida. Todos los números de este ejemplo son ilustrativos.

La revisión semanal del equipo de plataforma muestra la búsqueda de la tienda con una latencia mediana de 180 milisegundos y un p95 de 420 milisegundos, ambos dentro del objetivo, y un uso del procesador en el percentil 95 de la hora punta del 58 por ciento. Tres semanas antes de una venta planificada, una responsable de soporte informa de que los clientes dicen que el sitio "se arrastra" durante las campañas de la tarde. El panel está en verde.

El equipo mira el p99 de la búsqueda en la hora más ocupada de la venta anterior y encuentra 3,1 segundos, frente a un objetivo de p99 de 1,5 segundos. La saturación cuenta el resto de la historia: el conjunto de conexiones con la base de datos de productos muestra solicitudes en espera en el 14 por ciento de los intervalos de un minuto durante el pico, mientras que el uso del procesador nunca superó el 60 por ciento. La restricción nunca fue el procesador. Era un límite del conjunto de conexiones fijado cuando el tráfico era un tercio del actual.

La responsable de producto y el responsable de plataforma ejecutan una prueba de carga a 1,5 veces el pico del año pasado, usando la mezcla de operaciones de producción. La prueba muestra que el objetivo de p99 se incumple a 1,15 veces el pico del año pasado, de modo que el margen es del 15 por ciento frente a una política del 40 por ciento para los servicios de cara al cliente. El calendario de marketing sugiere una demanda de 1,6 veces el pico del año pasado el día de apertura. El pronóstico anterior, congelado en el registro, había fijado el rango entre 1,2 y 1,4, y el error frente a la venta del año pasado fue del 22 por ciento, sobre todo por una campaña de correo no anunciada.

La decisión, registrada en el registro de decisiones, tiene cuatro partes. Primero, subir el límite del conjunto de conexiones, añadir réplicas de lectura y volver a probar. Segundo, añadir una lista de verificación de preparación de ventas al proceso de versiones para que las campañas lleguen al registro de pronósticos al menos seis semanas antes. Tercero, añadir el p99 y la saturación del conjunto de conexiones a la revisión semanal. Cuarto, acordar con finanzas el costo de la capacidad adicional para la ventana de la venta, usando escalado programado en lugar de reserva durante todo el año.

Tras los cambios, una segunda prueba muestra que el objetivo de p99 se mantiene hasta 1,8 veces el pico del año pasado. El riesgo de manipulación surgió durante la revisión. Un contratista había propuesto una "victoria rápida" consistente en excluir del informe de latencia las solicitudes más lentas de 5 segundos, con el argumento de que eran valores atípicos. El equipo se negó: las solicitudes excluidas eran exactamente los clientes que se quejaban. La barrera de protección fue mantener las tasas de errores y de tiempos agotados junto a cada percentil de latencia y registrar el tamaño de la muestra. Durante la venta el p99 alcanza un máximo de 1,2 segundos, la saturación del conjunto de conexiones se mantiene por debajo del 1 por ciento de los intervalos y el error de pronóstico es del 9 por ciento, registrado en el registro con el motivo del fallo restante.

## Perspectiva por sector

**Startup.** El tráfico es pequeño y el crecimiento incierto, así que las medidas baratas superan a las elaboradas. Sigue los percentiles de latencia de los dos o tres recorridos que generan ingresos, vigila la saturación de la base de datos y ejecuta una sencilla prueba de carga antes de los lanzamientos. Fija una alerta de gasto para que un error o un pico de tráfico no se convierta en una factura.

**Pequeña empresa.** Los servicios suelen ser alojados o comprados, así que la capacidad es un asunto del proveedor. Pide por escrito al proveedor informes de rendimiento y de capacidad, aprende qué dice el contrato sobre los periodos de pico y vigila la vista del cliente con unas pocas comprobaciones sintéticas. Sigue el margen del único sistema sin el cual el negocio no puede funcionar.

**Gran empresa.** Muchos servicios comparten infraestructura, de modo que los problemas de capacidad aparecen en el lugar equivocado. Invierte en un mapa de servicios que vincule los servicios con los componentes que usan, un proceso de pronóstico compartido con las unidades de negocio y definiciones comunes de los percentiles de latencia entre equipos. Fija la política de margen según la criticidad del servicio.

**Gobierno y sector público.** La demanda viene determinada por plazos fijados por ley, como las fechas de declaración de impuestos, las solicitudes de prestaciones y las elecciones, y fallar en esas fechas es público. Los pronósticos deben usar el calendario legal, y la capacidad para el pico puede tener que contratarse con meses de antelación. Los plazos de contratación alargan el plazo de entrega de capacidad, así que mídelos y planifica en torno a ellos. Los informes públicos del desempeño del servicio deben indicar el percentil y las condiciones de carga (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo tiene cuatro partes. La primera es la instrumentación: telemetría y su almacenamiento. La segunda son las pruebas: un entorno representativo y modelos de carga que necesitan mantenimiento. La tercera es la rutina de planificación: mantener el registro de pronósticos y revisar el error cada trimestre. La cuarta es la propia capacidad de reserva, que suele ser el costo mayor y el que más vale la pena hacer explícito.

El retorno viene de menos incidentes por causa de capacidad, mejores decisiones sobre cuándo comprar y cuándo no, y gasto evitado en capacidad que los datos muestran innecesaria. No prometas de antemano un ahorro porcentual. En su lugar, mide tu propio patrón: el número de incidentes con una causa de capacidad por trimestre, la proporción de picos que requirieron una acción de emergencia, el gasto en capacidad ociosa en relación con la política de margen acordada y la tendencia del error de pronóstico. El libro de SRE de Google trata la fiabilidad como una decisión económica.

El costo total de propiedad está dominado por las personas y el entorno de pruebas. Un equipo pequeño puede empezar con la monitorización existente, una revisión semanal y una prueba de carga para el recorrido más importante.

## Antipatrones y trampas

- **Informar la utilización media como la historia de la capacidad.** El promedio oculta el pico y el precipicio. Informa el percentil alto de la hora punta y la medida de saturación.
- **Latencia media en el panel ejecutivo.** La cola provoca las quejas. Muestra el p95 y el p99, con las tasas de errores y el tamaño de la muestra.
- **Excluir "valores atípicos" de la latencia.** Las solicitudes más lentas son usuarios reales. Consérvalas e investiga la causa en lugar de recortar los datos.
- **Promediar percentiles entre servidores.** El resultado no describe a nadie. Combina los histogramas o las observaciones en bruto antes de calcular el percentil.
- **Planes de capacidad construidos solo con el tráfico del año pasado.** La demanda depende de los eventos de negocio. Incluye el calendario de negocio y revisa el error de pronóstico.
- **Probar en un entorno distinto de producción.** Un resultado superado da falsa confianza. Registra las diferencias y corrígelas, o prueba en producción con seguridad.
- **Usar las métricas de capacidad para clasificar ingenieros o equipos.** La utilización y la latencia describen sistemas. Revísalas en términos de diseño del servicio y de demanda, y deja a los individuos fuera del cuadro.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Medición de utilización, saturación y latencia | Promedios de unos pocos servidores; alertas por uso alto del procesador | Algunos equipos grafican percentiles de latencia y colas | Definiciones compartidas: percentiles por operación clave, saturación junto a la utilización, ventanas escritas | Con seguimiento de su tendencia frente a los objetivos, emparejadas con tasas de errores, revisadas semanalmente | Definiciones revisadas conjuntamente con proveedores y clientes; vistas del lado del usuario y del servidor conciliadas |
| Límites y margen | Límites desconocidos hasta que ocurre un fallo | Pruebas de carga ocasionales antes de grandes lanzamientos | Pruebas de carga en los servicios críticos frente a una política de margen escrita | Margen con seguimiento por servicio y vuelto a probar tras los cambios relevantes | Política de margen ajustada con datos de costo, riesgo e incidentes entre equipos y proveedores |
| Pronóstico | Conjeturas ad hoc en el momento de una petición | Los equipos individuales guardan pronósticos en la cabeza o en hojas de cálculo | Un registro de pronósticos compartido con rangos y responsables, alimentado por el calendario de negocio | Error de pronóstico puntuado y revisado, con las causas de los fallos | Pronósticos construidos con el negocio y los proveedores; insumos mejorados de forma rutinaria |
| Entrega de capacidad | Capacidad añadida tras un incidente | Peticiones estándar para los casos comunes | Ruta documentada desde la aprobación hasta el tráfico de producción, con el plazo de entrega de capacidad medido | Las esperas más largas atacadas con mejora financiada | Capacidad añadida automáticamente dentro de la política; comportamiento del escalado y costo revisados conjuntamente |

## Lista de verificación

- [ ] Los recorridos críticos de usuario están nombrados, cada uno con una expectativa de latencia acordada con su responsable.
- [ ] La latencia se informa como la mediana, el p95 y el p99 por operación, con la ventana y el tamaño de la muestra indicados.
- [ ] Los percentiles se calculan a partir de histogramas u observaciones en bruto, nunca promediados entre servidores.
- [ ] Cada gráfico de utilización tiene un gráfico de saturación a su lado.
- [ ] Las tasas de errores y de tiempos agotados se muestran junto a cada percentil de latencia.
- [ ] Cada servicio crítico tiene una prueba de carga, con las diferencias de carga y de entorno escritas.
- [ ] Existe una política de margen por criticidad del servicio, con el razonamiento registrado.
- [ ] Un registro de pronósticos fechado guarda rangos, supuestos y responsables, y se alimenta del calendario de negocio.
- [ ] El error de pronóstico se revisa cada trimestre, con las causas de los grandes fallos registradas.
- [ ] El plazo de entrega de capacidad se mide desde la aprobación hasta que soporta tráfico.
- [ ] Los límites, el retraso y el costo del autoescalado se revisan con el responsable del servicio.
- [ ] Ninguna medida de capacidad o de rendimiento se informa por persona.

## Prompts de IA

**Revisa un informe de latencia en busca de distorsión oculta.**

```text
Así informamos la latencia de [operation or service]: [description of the
measurement point, the window, the statistics shown, and which requests are
included or excluded]. A nuestros usuarios les importa [user journey or
expectation]. Identifica formas en que este informe podría subestimar la
experiencia de los usuarios más lentos, como el promediado, las reglas de
exclusión, el muestreo o la ubicación de la medición. Sugiere qué mostrar en su
lugar y qué datos adicionales necesitaría. No inventes valores de referencia ni
umbrales; pídeme los que necesites. Enumera tus supuestos.
```

**Redacta un plan de prueba de carga para un servicio.**

```text
Necesito un plan de prueba de carga para [service name]. Sus principales
recorridos de usuario son [journeys], sus dependencias son [dependencies] y su
mezcla de tráfico de producción es aproximadamente [description of mix]. El
entorno de prueba difiere de producción en esto: [differences]. Propón un
modelo de carga, un patrón de subida gradual, las medidas que registrar
(percentiles de latencia, tasa de errores, utilización, saturación), las
condiciones de parada y las preguntas que deben responder los resultados. No
supongas funciones de herramientas ni inventes valores meta. Enumera tus
supuestos y los riesgos de la prueba.
```

**Estructura un pronóstico de demanda con el negocio.**

```text
Estoy preparando un pronóstico de capacidad para [service] que cubre [horizon].
Insumos conocidos: [historical traffic description], [business events and
dates] y [planned changes]. Redacta un diseño de registro de pronósticos con
casos bajo, esperado y alto, los supuestos de cada uno, el responsable de cada
insumo y una rutina de revisión que puntúe el error de pronóstico. Sugiere
preguntas para hacer a [business stakeholders]. No inventes tasas de
crecimiento ni factores estacionales. Enumera tus supuestos.
```

**Encuentra la restricción real a partir de los síntomas.**

```text
Un servicio muestra estos síntomas durante la carga máxima: [symptoms, for
example slow p99, queue growth, error types]. Datos de utilización: [summary of
resource utilization]. Datos de saturación: [summary of queues, pools,
throttling]. Notas de arquitectura: [short description]. Enumera los recursos y
límites que podrían ser la restricción, la evidencia que distinguiría entre
ellos y la prueba siguiente más barata para cada uno. No afirmes una causa que
los datos no respalden. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema que define una medida de capacidad o de rendimiento, sus relojes y la barrera de protección que debe acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema editado de capacidad o de rendimiento mantiene cada métrica emparejada con un vector de manipulación y una barrera de protección.

## Puntos clave

- Mide la saturación junto con la utilización, porque los usuarios sienten la cola, no el porcentaje.
- Informa la latencia como percentiles por operación, con tasas de errores y tamaño de la muestra, y no promedies nunca percentiles.
- Encuentra los límites probando y fija el margen como una política registrada que sopese el costo frente al riesgo.
- Pronostica la demanda como rangos con el negocio, congela el pronóstico y aprende del error.
- Acorta el plazo de entrega de capacidad y mide el autoescalado, para que la capacidad siga a la necesidad.
- Describe servicios y sistemas, nunca personas, y trata los números de aspecto perfecto como un aviso para comprobar la medición.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
