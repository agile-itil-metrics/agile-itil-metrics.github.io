# Métricas del ciclo de vida de activos de hardware

**Los dispositivos son las herramientas diarias de personas motivadas y a la vez un flujo de costo, riesgo y desperdicio, así que planifica la renovación como un flujo constante en lugar de un sobresalto periódico, mide la antigüedad y los fallos con tus propios datos y trata la baja segura y la reutilización como parte del trabajo.**

## Resumen y motivación

Detrás de cada servicio hay cosas físicas: portátiles, teléfonos, servidores, equipos de red, impresoras y los cables y bastidores que los mantienen unidos. El hardware tiene un ciclo de vida que el software no tiene. Se compra, se envía, se le crea una imagen, se reparte, se repara, se traslada, se retira, se borra y se recicla, y cada paso tiene un costo y un riesgo. Un portátil que falla durante una llamada con un cliente cuesta más que el portátil. Un servidor retirado que sale del edificio con datos en sus discos cuesta mucho más que su valor de reventa. Un cajón de teléfonos sin usar es capital que no hace nada.

El objetivo ágil de construir proyectos en torno a individuos motivados, con el entorno y el apoyo que necesitan, se aplica directamente. Las personas no pueden hacer su mejor trabajo con un dispositivo que es lento, que falla o que falta. La tradición de ITIL aporta la visión del ciclo de vida y los registros que la acompañan, cubiertos en el tema anterior sobre gestión de activos de TI (véase el tema 7.1, Métricas de gestión de activos de TI). Este tema añade las medidas específicas del equipamiento físico: cuán antiguo es, con qué frecuencia falla, cuán bien se usa y cómo sale.

La planificación del hardware suele hacerse en grandes ciclos: sustituir todo cada pocos años, en una gran compra, y vivir luego con las consecuencias. Una alternativa más constante, en el espíritu de la entrega continua, es renovar continuamente una fracción del parque. Eso suaviza el gasto, reparte la carga de trabajo de creación de imágenes y de entrega y te permite aprender de cada lote antes de comprar el siguiente. También significa que necesitas datos de antigüedad y de fallos para decidir cuándo debe irse cada dispositivo.

Tres ideas organizan las medidas.

- **Antigüedad y fallos.** La [tasa de fallos](https://en.wikipedia.org/wiki/Failure_rate) de una población de dispositivos cambia a lo largo de su vida, y el [tiempo medio entre fallos](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) es un resumen común para elementos reparables. Los promedios ocultan mucho: un lote con un componente defectuoso puede fallar pronto mientras el resto está bien. Mira los fallos por modelo, lote y tramo de antigüedad, y usa tu propio historial, no las cifras de los fabricantes, para planificar.
- **Utilización.** Un dispositivo que nadie usa es desperdicio, y un dispositivo sobrecargado es una fuente de fricción. Mide si el equipamiento se usa y si se ajusta al trabajo.
- **Salida responsable.** El equipamiento retirado puede contener datos sensibles, materiales valiosos y peligrosos y aumentar los residuos electrónicos. Los [residuos electrónicos](https://en.wikipedia.org/wiki/Electronic_waste) son una preocupación ambiental creciente, y muchas jurisdicciones regulan cómo deben manejarse. El [borrado de datos](https://en.wikipedia.org/wiki/Data_erasure) seguro y la reutilización o el reciclaje certificados son el final del ciclo de vida, no una ocurrencia tardía. Un enfoque de [economía circular](https://en.wikipedia.org/wiki/Circular_economy) mantiene productos y materiales en uso el mayor tiempo posible.

Las métricas de hardware están expuestas a una distorsión conocida. Un equipo premiado por una baja antigüedad media de los dispositivos puede renovar dispositivos que están bien. Un equipo premiado por un gasto bajo puede estirar las vidas hasta que los fallos perturban a las personas. Se aplica la barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law), así que cada medida se empareja con una comprobación de que las personas y el planeta están mejor, no solo el número (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Planifica un flujo constante.** Renueva una parte del parque cada periodo y aprende de cada lote.
- **Decide con evidencia.** Usa tus propios datos de fallos, antigüedad y uso para elegir cuándo sustituir.
- **Mira la distribución.** Los promedios ocultan la cola de dispositivos viejos, defectuosos e inactivos.
- **Cuenta el costo total.** El precio de compra es una parte del costo de un dispositivo a lo largo de su vida (véase el tema 7.5, Costo del servicio y economía unitaria).
- **Protege los datos hasta el final.** Un dispositivo no está retirado hasta que sus datos han desaparecido y la evidencia está registrada.
- **Prefiere la reutilización y la reparación.** Mantén el equipamiento en servicio mientras sirva bien a las personas.
- **Trata el equipamiento como parte del entorno de trabajo.** Las personas necesitan dispositivos que funcionen.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Perfil de antigüedad | Distribución de la antigüedad de los dispositivos por clase, y proporción que supera la vida prevista | mediana de la antigüedad y percentil 85 de la antigüedad; proporción de dispositivos más antiguos que la vida prevista para la clase | años; porcentaje | Fechas de compra y de despliegue del registro de activos | Gestión de activos de TI; gestión de la capacidad y el desempeño | Revisión de la salud técnica | Trimestral |
| Tasa de renovación a tiempo | Proporción de dispositivos que alcanzaron la sustitución prevista y que se sustituyeron dentro de la ventana prevista | dispositivos sustituidos dentro de la ventana / dispositivos que alcanzaron la sustitución prevista en el periodo | porcentaje | Registro de activos y plan de renovación | Gestión de activos de TI; gestión de solicitudes de servicio | Mantenimiento planificado del entorno de trabajo | Trimestral |
| Tasa de fallos por modelo | Fallos por cada 100 dispositivos al año, por modelo y tramo de antigüedad | fallos de hardware en el periodo / dispositivos medios en servicio, llevado a un año, por 100 | fallos por 100 al año | Registros de incidentes y de reparaciones unidos al registro | Gestión de incidentes; gestión de activos de TI | Defectos en el entorno de trabajo | Trimestral |
| Proporción de dispositivos inactivos | Proporción de dispositivos entregados sin actividad en un periodo fijado | dispositivos sin inicio de sesión ni actividad de red en 60 días / dispositivos entregados | porcentaje | Registros de gestión de puntos finales, agregados por clase | Gestión de activos de TI; gestión financiera | Reducción del desperdicio | Mensual |
| Plazo de sustitución | Tiempo para sustituir un dispositivo averiado o perdido por uno que funcione | mediana y percentil 85 de horas o días desde el aviso hasta que el usuario tiene un dispositivo que funciona | días | Registros de incidentes y de solicitudes | Gestión de incidentes; gestión de solicitudes de servicio | Tiempo para desbloquear a un miembro del equipo | Mensual |
| Finalización de la baja segura | Proporción de dispositivos retirados con evidencia registrada de borrado o destrucción de datos | dispositivos retirados con evidencia de borrado o destrucción / dispositivos retirados | porcentaje | Registros de baja y certificados de borrado | Gestión de la seguridad de la información; gestión de activos de TI | Definición de terminado para retirar equipamiento | Mensual |
| Tasa de reutilización y reciclaje | Proporción de dispositivos retirados que se reutilizaron, reacondicionaron o reciclaron por un canal aprobado | dispositivos reutilizados, reacondicionados o reciclados por un canal aprobado / dispositivos retirados | porcentaje | Registros de baja y de socios | Gestión de activos de TI; gestión de proveedores | Meta de sostenibilidad en la planificación | Trimestral |

Define las clases de dispositivos (por ejemplo portátil estándar, estación de trabajo de desarrollo, teléfono móvil, servidor, conmutador de red), cada una con su propia vida prevista. La tasa de fallos cuenta solo fallos de hardware, y excluye los fallos de software, los daños del usuario codificados por separado y la pérdida. El reloj del plazo de sustitución arranca en el aviso y se detiene cuando el usuario confirma un dispositivo que funciona, no cuando se envía uno. La proporción de dispositivos inactivos excluye los dispositivos que son repuestos a propósito, que se cuentan como una clase aparte.

## Recomendaciones

### Planifica el flujo

**1. Fija una vida prevista para cada clase y trátala como una hipótesis.** Parte de la garantía del proveedor y de tu propia experiencia, y revísala a medida que lleguen los datos. Una vida prevista de unos pocos años para los portátiles, más larga para los equipos de red y más corta para los dispositivos de uso intensivo es lo habitual, pero la cifra correcta para tu parque proviene de tus propios datos de fallos y de uso. Anota el razonamiento en el registro.

**2. Renueva de forma continua en lotes pequeños.** Sustituye una parte constante de los dispositivos cada mes o trimestre, ordenados por antigüedad, historial de fallos y necesidad. Los lotes pequeños suavizan el costo, reparten el trabajo de creación de imágenes y de entrega y te permiten probar un modelo nuevo con unos pocos usuarios antes de comprometerte. Una sola gran renovación cada pocos años concentra riesgo y esfuerzo.

**3. Mantén un colchón modesto de repuestos.** Un pequeño conjunto de dispositivos listos acorta el plazo de sustitución por fallos, pérdidas y recién llegados. Dimensiona el colchón a partir de tu propio historial de fallos y de contrataciones, y revísalo cada trimestre. Cuenta los repuestos como su propia clase para que no distorsionen la utilización.

**4. Planifica con finanzas, no frente a ellas.** Acordad cómo se capitalizan y se deprecian los dispositivos y cómo se muestra en el presupuesto una renovación constante. Las reglas de [depreciación](https://en.wikipedia.org/wiki/Depreciation) afectan a cuándo es más barata la sustitución sobre el papel, y no deben impulsar la sustitución de dispositivos que aún sirven bien a las personas. Mantened una visión compartida del plan y de sus supuestos.

### Aprende de tus propios datos

**5. Estudia los fallos por modelo, lote y antigüedad.** Une los registros de reparaciones y de incidentes con el registro de activos y mira los fallos por cada 100 dispositivos al año por modelo y tramo de antigüedad. Busca lotes que fallan pronto, modelos que fallan de una forma concreta y la antigüedad a partir de la cual empiezan a subir los fallos. Usa los hallazgos para elegir modelos y para fijar el momento de la sustitución. Ten cautela con las muestras pequeñas, y di cuándo un modelo tiene demasiados pocos dispositivos para juzgar (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**6. Usa con juicio la garantía y la reparación.** Conoce qué cubre la [garantía](https://en.wikipedia.org/wiki/Warranty) y durante cuánto tiempo, registra las reclamaciones y compara el costo de la reparación con el de la sustitución. La reparación mantiene el equipamiento en uso y fuera del flujo de residuos, y el derecho a reparar piezas e información es un tema de política activo en varios lugares. Prefiere los modelos que pueden repararse y ampliarse cuando lo demás sea igual.

**7. Mide el uso para encontrar lo que está inactivo y lo que está forzado.** Agrega los datos de actividad por clase, y busca dispositivos que nunca se usan y dispositivos que están constantemente al límite. Los dispositivos inactivos pueden reasignarse o retirarse. Los dispositivos forzados son fricción, y los usuarios la notarán (véase el tema 6.4, Experiencia de usuarios y empleados). Respeta la privacidad: informa por clase y por grupo, nunca por persona, y usa los mínimos datos.

**8. Sigue el plazo de sustitución como un servicio.** Mide cuánto tarda una persona en obtener un dispositivo que funcione tras un fallo o una pérdida, e incluye los pasos: aviso, aprobación, existencias, creación de imagen, entrega y traspaso. El percentil 85 te dice cuán malos son los casos de quienes tienen mala suerte. Corrige primero el paso más lento.

### Gestiona bien los dispositivos

**9. Gestiona los dispositivos de forma central y coherente.** La [gestión de dispositivos móviles](https://en.wikipedia.org/wiki/Mobile_device_management) y herramientas similares te permiten inscribir, configurar, actualizar y borrar dispositivos de forma remota, lo que reduce el trabajo manual y el riesgo. Úsalas para mantener exacto el registro, para enviar actualizaciones cuidando la concentración de las personas y para respaldar la respuesta ante dispositivos perdidos.

**10. Haz de la baja segura un proceso definido.** Sigue una norma reconocida para sanear los soportes, como la guía publicada por el Instituto Nacional de Normas y Tecnología de Estados Unidos, o la equivalente de tu jurisdicción. Registra el método, la fecha y la evidencia de cada dispositivo, y usa socios certificados para la destrucción y el reciclaje. Un paso de baja sin evidencia es una brecha.

**11. Prefiere la reutilización, y luego el reciclaje.** Donde los dispositivos aún funcionen, redespliégalos internamente, dónalos mediante un socio aprobado o revéndelos tras borrarlos. Usa recicladores certificados para el resto. Mide la proporción de dispositivos retirados que va a cada canal y los motivos de los que van directamente a residuos. Las normas sobre residuos electrónicos varían según la jurisdicción y se hacen cumplir, así que implica a tus colegas jurídicos y de sostenibilidad.

**12. Revisa el ciclo de vida con las personas que lo usan.** Una vez por trimestre, reúne a finanzas, seguridad, compras, el centro de servicios y unos pocos usuarios para mirar la antigüedad, los fallos, el plazo y la baja. Pregunta qué funciona y qué molesta a la gente. Esto es colaboración continua en torno al entorno de trabajo, y mantiene realista el plan.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Perfil de antigüedad | Sustituir dispositivos sanos para bajar la media; excluir los dispositivos viejos reclasificándolos como repuestos | Tasa de fallos por tramo de antigüedad; proporción de dispositivos inactivos; revisión de las reclasificaciones |
| Tasa de renovación a tiempo | Ampliar la ventana prevista; aplazar las fechas previstas editando el plan | Cambios del plan registrados con motivos; comparar con los fallos y la opinión de los usuarios |
| Tasa de fallos por modelo | Codificar los fallos como daño del usuario o fallos de software; retrasar los registros de reparación | Muestrear la codificación de fallos; comparar los registros de reparación con los de incidentes |
| Proporción de dispositivos inactivos | Contar la actividad de fondo programada como uso; reasignar los dispositivos inactivos a usuarios fantasma | Usar el inicio de sesión humano como señal de actividad; comprobar las asignaciones por muestreo |
| Plazo de sustitución | Detener el reloj en el envío; cerrar la solicitud antes de que el usuario tenga un dispositivo que funcione | El reloj termina en la confirmación del usuario; encuesta de sustituciones recientes |
| Finalización de la baja segura | Registrar el borrado sin evidencia; certificados no vinculados a los números de serie | Vincular los certificados a los números de serie; auditar una muestra con el socio de baja |
| Tasa de reutilización y reciclaje | Contar como reciclados los dispositivos enviados a un intermediario con un manejo posterior desconocido | Exigir socios certificados e informes del manejo posterior; auditorías por muestreo |

Una lectura sana es un perfil de antigüedad con una cola vieja delgada, tasas de fallos que orientan las compras, plazos de sustitución cortos, evidencia de baja completa y una proporción decreciente de equipamiento que va a residuos.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Renovación de ciclo fijo | Presupuesto predecible y reglas sencillas | Sustituye dispositivos que están bien; crea un gran pico de trabajo |
| Renovación continua en lotes | Costo y carga de trabajo suaves; se aprende entre lotes | Necesita buenos datos y disciplina |
| Funcionar hasta el fallo | Menor costo de compra | Perturba a las personas; costo imprevisto; riesgo de seguridad de los sistemas viejos |
| Vida prevista corta | Más nuevos, más rápidos, mejor soportados | Mayor costo y más residuos |
| Vida prevista larga | Menor costo y menos residuos | Más fallos y exposición de seguridad en la cola |
| Reparación y reutilización internas | Mantiene los dispositivos en uso; menos residuos | Necesita habilidades y piezas |
| Baja externalizada | Manejo especializado | Necesita supervisión de la cadena posterior |

La respuesta en prosa es renovar de forma continua en lotes pequeños, según la antigüedad, los fallos y la necesidad, reparar y reutilizar donde sirva a las personas y someter la cadena de baja a una norma que puedas evidenciar.

## Preguntas para conversar con tu equipo

**1. ¿Cómo es el cuadro de antigüedad y de fallos de nuestros dispositivos, y quién tiene los más viejos?**
Muestra la distribución de antigüedades y la tasa de fallos por tramo. Mira quién tiene los dispositivos más viejos y si son las personas que más necesitan equipamiento fiable. El facilitador debe preguntar qué cambiaría el equipo del orden de renovación a la vista del cuadro.

**2. ¿Cuánto tarda alguien en obtener un dispositivo que funcione después de que se le rompa el suyo?**
Sigue las tres últimas sustituciones desde el aviso hasta un dispositivo que funciona. Anota las esperas. Pregunta qué paso podría eliminarse o automatizarse. Acordad un cambio y una forma de medir su efecto.

**3. ¿Qué modelos nos causan más problemas, y cómo lo sabemos?**
Enumera los modelos con las tasas de fallos o de tickets más altas. Comprueba si la muestra es lo bastante grande para juzgar. Pregunta cómo influyen los hallazgos en la próxima compra. Si no influyen, decidid cómo devolverlos a compras.

**4. ¿Qué haríamos si un dispositivo retirado apareciera con datos?**
Recorre el camino de la baja y la evidencia que se guarda en cada paso. Pregunta dónde está el eslabón más débil y quién verifica al socio posterior. Acordad una comprobación por muestreo de la evidencia de baja para el próximo trimestre.

**5. ¿Dónde está inactivo nuestro equipamiento, y por qué?**
Mira los dispositivos sin uso en 60 días y los repuestos. Pregunta si deben reasignarse, retirarse o conservarse. La conversación también revela desajustes entre lo que se entregó a las personas y lo que necesitan.

**6. ¿Qué haría falta para reutilizar o reparar más de lo que retiramos?**
Enumera las barreras: habilidades, piezas, política o socios. Pregunta cómo sería un piloto con una clase de dispositivo y cómo se mediría. Incluye las perspectivas de sostenibilidad y de finanzas.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega dependen de máquinas fiables y de dispositivos de prueba, y sienten directamente las compilaciones lentas y los portátiles que fallan. Deben señalar el equipamiento que los ralentiza, participar en la elección de modelos para sus roles y esperar una vía de sustitución rápida. Los equipos que prueban en dispositivos físicos, como los teléfonos, deben tratar esos dispositivos como activos con responsables y un plan de renovación.

### Equipos de servicio y operaciones

Los equipos de operaciones llevan la cadena de suministro: comprar, recibir, crear imágenes, desplegar, reparar y dar de baja. Deben mantener actualizados los registros, vigilar los patrones de fallos, mantener un conjunto sensato de repuestos y guardar la evidencia de las bajas. Cargan con el trabajo físico, y su capacidad limita la rapidez con que puede ir la renovación.

### Liderazgo y gobernanza

Los líderes quieren costo predecible, poco riesgo y una historia de sostenibilidad. Deben financiar una renovación constante, pedir datos de antigüedad y de fallos en lugar de una simple antigüedad media y exigir evidencia de las bajas. La gobernanza debe comprobar que se cumplen las obligaciones ambientales y de protección de datos y que el plan se revisa cuando cambian las condiciones.

### Clientes y usuarios

Los usuarios quieren un dispositivo que funcione, sustituido con rapidez cuando no lo hace. También son responsables de parte del resultado: informar pronto de los problemas, devolver el equipamiento y decir a TI cuándo se mudan. Su visión del equipamiento y del proceso de sustitución es la retroalimentación más directa disponible. Implícalos en la elección de modelos para su trabajo.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un gobierno de condado da soporte a 3.800 empleados en 40 sedes, con una mezcla de dispositivos de oficina, de campo y compartidos. Los números siguientes son ilustrativos.

Cada cuatro años el condado sustituía todos los portátiles en una única contratación, y el último ciclo terminó con un pico de fallos en el año anterior a la sustitución y meses de trabajo de creación de imágenes en el año de la sustitución. El responsable de activos propone una renovación constante y construye un cuadro a partir del registro y de los registros de reparaciones. La mediana de antigüedad de los portátiles es de 3,2 años y el percentil 85 es de 5,1 años. Los fallos por cada 100 portátiles al año suben de unos 6 para los dispositivos de menos de tres años a unos 19 para los de más de cinco. Un modelo comprado en un único lote muestra 24 fallos por 100 al año a los dos años de antigüedad, causados por un defecto de la batería. La mediana del plazo de sustitución es de 5 días, con un percentil 85 de 12 días, sobre todo esperando la creación de imágenes. La proporción de dispositivos inactivos es del 7 por ciento, sobre todo repuestos y dispositivos de personal en licencias largas. De los 410 portátiles retirados el año pasado, 366 tienen un certificado de borrado registrado, una tasa de finalización del 89 por ciento, y el 12 por ciento fue a un reciclador sin informe del manejo posterior.

El equipo hace cuatro cambios. Pasa a una renovación trimestral de aproximadamente el 6 por ciento de los portátiles, ordenados por antigüedad e historial de fallos, con el personal de campo y los dispositivos más viejos primero. Negocia con el proveedor el lote defectuoso bajo garantía. Mantiene un conjunto de repuestos del 2 por ciento del parque, precargado con la imagen estándar, lo que reduce la espera de la creación de imágenes. Exige un certificado vinculado al número de serie para cada dispositivo dado de baja, y pasa a un reciclador que informa del manejo posterior. También inicia un pequeño piloto para reacondicionar y redesplegar dispositivos de menos de cuatro años.

Dos trimestres después, el plazo de sustitución en el percentil 85 es de 4 días, la proporción de dispositivos de más de cinco años ha bajado del 22 por ciento al 13 por ciento, la finalización de la evidencia de baja es del 99 por ciento y la tasa de reutilización y reciclaje por canales aprobados es del 94 por ciento. La oficina de finanzas pide una única meta para la antigüedad media de los dispositivos, y el responsable de activos propone seguir juntos el perfil de antigüedad y la tasa de fallos, explicando que una baja antigüedad media puede comprarse sustituyendo dispositivos sanos. La decisión se registra en el registro de decisiones, con una revisión en seis meses.

## Perspectiva por sector

**Startup.** Los dispositivos se compran según se necesitan y a menudo los compra la persona que los usará. Mantén una lista sencilla con las fechas de compra, borra los dispositivos al irse la persona y evita comprar de más. Usa pronto una herramienta de inscripción gestionada, ya que es más barato que adaptarla después.

**Pequeña empresa.** El costo de un dispositivo averiado recae en pocas personas. Mantén uno o dos repuestos, registra las fechas de garantía y ten una rutina de borrado y de baja. Los recicladores y reacondicionadores locales pueden ser buenos socios. Una lista de verificación de baja de tres líneas es mejor que ninguna.

**Gran empresa.** La escala hace importantes el comportamiento por lotes y la gestión de proveedores. Usa los datos de fallos para negociar con los proveedores, estandariza unos pocos modelos por clase y ejecuta una renovación continua con apoyo logístico. Alinéate con los informes de sostenibilidad, ya que el hardware suele dominar la huella de TI.

**Gobierno y sector público.** Las reglas de contratación, la conservación de registros y la estricta protección de datos moldean el ciclo de vida. Documenta el saneamiento según una norma reconocida, conserva la evidencia de baja durante el periodo exigido y considera los compromisos públicos sobre sostenibilidad y reparación. Los organismos públicos pueden estar obligados a informar de los residuos electrónicos (véase el tema 8.3, Métricas de cumplimiento y auditoría).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de unir los datos del registro, de reparaciones y de puntos finales; algunas herramientas de gestión de dispositivos si no existen ya; el conjunto de repuestos; y el trabajo de proceso de la baja con evidencia. Los ahorros y beneficios aparecen en menos fallos perturbadores, un presupuesto más suave, menos equipamiento desperdiciado y menor riesgo de un incidente de datos.

Construye el caso con tus propios datos. Compara el costo de mantener un dispositivo más allá de su vida prevista, incluido el esfuerzo de soporte y el tiempo de trabajo perdido por fallo, con el costo de sustituirlo antes. Compara el costo del conjunto de repuestos con los días de trabajo perdidos que ahorra por fallo. Cuenta el número de dispositivos retirados sin evidencia de borrado, y el costo de un incidente de datos que seguiría. Evita citar vidas medias de dispositivos o cifras de residuos electrónicos de fuentes publicadas sin comprobar su método y su fecha. El costo total de propiedad reúne estas partes (véase el tema 7.5, Costo del servicio y economía unitaria), y el [costo total de propiedad](https://en.wikipedia.org/wiki/Total_cost_of_ownership) completo de un dispositivo incluye compra, soporte, energía, perturbación y baja.

## Antipatrones y trampas

- **Sustituir todo según un calendario.** Desperdicia dispositivos que funcionan y crea un pico de carga de trabajo. Usa la antigüedad, los fallos y la necesidad.
- **Funcionar hasta el fallo.** El costo imprevisto y la perturbación superan el ahorro. Vigila la cola de antigüedad.
- **Usar la antigüedad media como meta.** Puede cumplirse sustituyendo dispositivos sanos. Muestra el perfil y la tasa de fallos.
- **Fiarse de los números de fiabilidad de los fabricantes.** Tu uso es distinto. Usa tus propios datos de fallos.
- **Dar de baja sin evidencia.** Un borrado sin registrar es un riesgo cuya gestión no puedes demostrar.
- **Enviar los dispositivos al reciclador más barato.** El manejo posterior importa. Usa socios certificados.
- **Hacer seguimiento de personas a través de sus dispositivos.** Informa por clase y por grupo, y nunca por individuo.
- **Ignorar la reparación y la reutilización.** Mantener el equipamiento en servicio es más barato y más amable con el medio ambiente.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Planificación | Comprar cuando se rompe | Renovación periódica según el calendario | Vida prevista por clase; renovación constante en lotes | Renovación fijada por antigüedad, fallos y necesidad; repuestos dimensionados con datos | Renovación coordinada con proveedores, finanzas y metas de sostenibilidad entre sedes |
| Aprendizaje a partir de los datos | Sin registros de fallos | Registros de reparaciones guardados | Tasa de fallos por modelo y antigüedad con seguimiento | Los hallazgos cambian las compras y el momento; plazo de sustitución gestionado | Datos de fallos y de uso compartidos con los proveedores para mejorar el diseño y las condiciones |
| Salida | Los dispositivos desaparecen | Borrado informal | Proceso de baja con evidencia de cada dispositivo | Evidencia auditada; reutilización y reciclaje con seguimiento | Prácticas circulares con socios certificados e informes públicos |

## Lista de verificación

- [ ] Las clases de dispositivos y las vidas previstas están definidas, con el razonamiento registrado.
- [ ] Existe un plan de renovación constante, revisado con finanzas.
- [ ] Se informan el perfil de antigüedad, la tasa de fallos por modelo y el plazo de sustitución.
- [ ] Un conjunto de repuestos está dimensionado a partir de los datos de fallos y de contratación.
- [ ] Los dispositivos inactivos se identifican por clase, con reglas de privacidad en vigor.
- [ ] Las reclamaciones de garantía y las reparaciones se registran y se usan en las decisiones de compra.
- [ ] Cada dispositivo retirado tiene un método de saneamiento y una evidencia registrados.
- [ ] Los socios de baja están certificados e informan del manejo posterior.
- [ ] Se sigue la tasa de reutilización y reciclaje.
- [ ] Una revisión trimestral incluye a finanzas, seguridad, compras, el centro de servicios y los usuarios.

## Prompts de IA

**Analiza los datos de fallos por modelo y antigüedad.**

```text
Aquí hay un resumen de los fallos de hardware de [device class] durante
[period]: modelo, número en servicio, tramo de antigüedad y número de fallos:
[paste table]. Describe los patrones por modelo y antigüedad, señala los lotes
o modelos que parezcan inusuales, di dónde la muestra es demasiado pequeña para
juzgar y sugiere qué comprobar a continuación. No apliques cifras de los
fabricantes ni inventes valores de referencia. Enumera tus supuestos.
```

**Diseña un plan de renovación continua.**

```text
Tenemos [number] dispositivos en estas clases: [list with age profile]. Datos de
fallos y de reparaciones: [summary]. Restricciones presupuestarias: [summary].
Propón un plan de renovación trimestral que sustituya una parte constante,
ordene las sustituciones por antigüedad, historial de fallos y necesidad del
usuario, y mantenga un conjunto de repuestos. Explica las compensaciones frente
a una renovación de ciclo fijo y qué medir. No inventes precios. Enumera tus
supuestos.
```

**Revisa un proceso de baja.**

```text
Nuestro proceso de baja de [device types] retirados es: [describe steps,
partners, and records]. Revísalo en busca de brechas en el saneamiento de
datos, la evidencia, la cadena de custodia y el manejo ambiental, y sugiere
mejoras y comprobaciones por muestreo. Menciona que los requisitos varían según
la jurisdicción y deben comprobarse con especialistas jurídicos y de seguridad.
No des conclusiones jurídicas. Enumera tus supuestos.
```

**Reduce el plazo de sustitución.**

```text
Sustituir un dispositivo averiado lleva actualmente estos pasos y esperas
típicas: [list]. Identifica los pasos más lentos, sugiere cambios (por ejemplo
repuestos precargados, inscripción remota o aprobación simplificada) y describe
cómo medir el efecto en la mediana y en el percentil 85. No supongas
herramientas que no hemos descrito. Enumera tus supuestos y riesgos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica del ciclo de vida del hardware.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de hardware lleva su vector de manipulación, su barrera de protección y su regla de evidencia.

## Puntos clave

- Renueva de forma continua una parte constante de los dispositivos, usando tus propios datos de antigüedad, fallos y uso.
- Mira la distribución de antigüedades y los fallos por modelo, no el promedio.
- Mantén rápida la sustitución con un conjunto de repuestos y una vía corta y medida.
- Trata la baja segura con evidencia como el final del ciclo de vida, y prefiere la reparación, la reutilización y el reciclaje certificado.
- Informa por clase de dispositivo y por grupo, y no hagas nunca seguimiento de individuos a través de su equipamiento.
- Revisa el ciclo de vida junto con finanzas, seguridad, compras y usuarios.

## Referencias y lecturas complementarias

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
