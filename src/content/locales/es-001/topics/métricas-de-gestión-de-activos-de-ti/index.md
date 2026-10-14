# Métricas de gestión de activos de TI

**No puedes dar soporte, proteger ni pagar con sensatez lo que no puedes encontrar, así que mide cuán exactos, completos y actuales son tus registros de activos, y crea el hábito de registrar los activos como subproducto del trabajo cotidiano en lugar de una limpieza anual.**

## Resumen y motivación

Todo servicio descansa sobre cosas: portátiles, servidores, licencias, cuentas en la nube, dispositivos de red, y los datos y contratos asociados a ellos. La [gestión de activos de TI](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) es el conjunto de prácticas empresariales que unen las funciones financiera, contractual y de inventario para respaldar la gestión del ciclo de vida y la toma de decisiones estratégicas del entorno de TI. Responde a preguntas de las que dependen otras prácticas. ¿Qué poseemos? ¿Dónde está? ¿Quién es responsable de ello? ¿Cuánto cuesta? ¿Cuándo debe renovarse, parchearse o sustituirse?

La entrega continua e ITIL se encuentran con torpeza en este terreno. Los equipos que entregan software de forma continua crean y destruyen infraestructura todo el tiempo: contenedores, máquinas virtuales, entornos de prueba y cuentas en la nube aparecen en minutos. Una hoja de cálculo trimestral no puede seguir el ritmo. La ITAM de la tradición de ITIL insiste en registros, responsables y ciclos de vida, y esa insistencia es correcta, porque los activos sin gestionar son donde crecen las brechas de seguridad, el dinero desperdiciado y los incumplimientos normativos. La aportación ágil es la colaboración continua entre compras, finanzas, seguridad y operaciones, y el hábito práctico de registrar los activos automáticamente a medida que se crean, mediante canalizaciones e infraestructura como código, de modo que el registro sea un subproducto del trabajo.

Tres términos se repiten en este tema.

- **Activo:** un elemento de valor para la organización que se gestiona a lo largo de un ciclo de vida. En ITAM esto incluye hardware, software, recursos en la nube, suscripciones y a veces datos.
- **Registro de activo:** la entrada que describe un activo: qué es, quién es su responsable, dónde está, en qué estado se encuentra, cuánto cuesta y a qué está vinculado.
- **Ciclo de vida:** las etapas por las que pasa un activo, normalmente solicitado, adquirido, recibido, desplegado, en uso, mantenido, retirado y eliminado. El pensamiento de [ciclo de vida del producto](https://en.wikipedia.org/wiki/Product_lifecycle) se aplica a cada clase de activo, con etapas distintas para un portátil y para una suscripción en la nube.

La ITAM se solapa con la gestión de la configuración, que sigue las relaciones entre componentes para poder entender el impacto del cambio, y los temas siguientes tratan por turno el software, el hardware y la configuración (véanse el tema 7.2, Métricas de activos de software y licencias, el tema 7.3, Métricas del ciclo de vida de activos de hardware, y el tema 7.4, Métricas de calidad de la configuración y la CMDB). La diferencia es de propósito: la gestión de activos hace hincapié en la propiedad, el costo y el ciclo de vida, mientras que la gestión de la configuración hace hincapié en la estructura y la dependencia. El mismo inventario suele alimentar a ambas.

La norma que citan la mayoría de los programas de ITAM es ISO/IEC 19770, una familia de normas para sistemas de gestión de activos de TI. Cítala por su nombre y alcance, y léela en el organismo de normalización antes de apoyarte en cualquier detalle. Este tema no reproduce su texto.

Las métricas de activos son fáciles de convertir en metas, y las metas son fáciles de cumplir sobre el papel. Un inventario puede mostrar una exactitud del 100 por ciento porque registra solo lo que ya se conocía. Se aplica la barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): mide la exactitud frente a evidencia independiente, y trata un número perfecto como un motivo para mirar con más atención (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Registra en el momento del cambio.** Los activos deben entrar y salir del registro como parte del trabajo que los crea o los retira.
- **Mide frente a evidencia independiente.** Exactitud significa concordancia con la realidad, comprobada por un método distinto del propio registro.
- **Todo activo tiene un responsable.** Un activo que nadie posee no se parcheará, no se pagará con sensatez ni se retirará.
- **Mantén el registro tan pequeño como puedas.** Captura los campos que las decisiones necesitan, y no más.
- **Combina fuentes.** Las herramientas de descubrimiento, las compras, las finanzas, la identidad y la facturación de la nube ven cada una una parte del parque.
- **Colabora entre funciones.** Compras, finanzas, seguridad y operaciones comparten el registro y su calidad.
- **Trata las brechas como información.** Un activo sin localizar es un hallazgo que entender, no un fallo que ocultar.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Exactitud del inventario | Proporción de activos muestreados cuyo registro coincide con lo que se encuentra | activos muestreados cuyo registro coincide con la evidencia física o técnica en todos los campos acordados / activos muestreados | porcentaje | Muestra de auditoría comparada con el registro de activos y los datos de descubrimiento | Gestión de activos de TI; gestión de la configuración | La definición de terminado incluye registrar el activo | Trimestral |
| Cobertura del descubrimiento | Proporción de activos esperados vistos por el descubrimiento en el periodo | activos vistos por al menos una fuente de descubrimiento en los últimos 30 días / activos del registro que el descubrimiento puede ver | porcentaje | Informes de la herramienta de descubrimiento unidos al registro | Gestión de activos de TI; monitorización y gestión de eventos | El estado de la infraestructura como código coincide con la realidad | Mensual |
| Tasa de conciliación | Proporción de activos que coinciden entre fuentes independientes | activos que coinciden en el registro y en una segunda fuente (por ejemplo compras, identidad o facturación de la nube) / activos en cualquiera de las fuentes | porcentaje | Exportaciones del registro, de compras, de identidad y de la facturación de la nube | Gestión de activos de TI; gestión de proveedores | Única fuente de verdad para los entornos | Mensual |
| Proporción de activos sin responsable | Proporción de activos sin un responsable válido con nombre | activos sin responsable o con un responsable que se ha ido / activos del registro | porcentaje | Registro unido al directorio de personas | Gestión de activos de TI; gestión de la seguridad de la información | Propiedad clara de servicios y componentes | Mensual |
| Completitud de la etapa del ciclo de vida | Proporción de activos con una etapa actual del ciclo de vida y las fechas que esa etapa requiere | activos con la etapa y las fechas requeridas registradas / activos del registro | porcentaje | Registro | Gestión de activos de TI; gestión de versiones y despliegues | Ciclo de vida del entorno con seguimiento en la canalización | Mensual |
| Tiempo hasta el registro | Retraso entre un cambio de un activo y su actualización en el registro | mediana y percentil 85 de horas o días desde el evento de cambio hasta la actualización del registro | días | Eventos de cambio, de compras o de canalización comparados con las marcas de tiempo del registro | Gestión de activos de TI; habilitación de cambios | Registro automatizado en la canalización | Mensual |
| Tasa de activos sin localizar | Proporción de activos esperados que no pueden localizarse ni explicarse en una auditoría | activos esperados pero no encontrados, y no explicados por una baja aprobada / activos esperados | porcentaje | Resultados de auditoría | Gestión de activos de TI; gestión de la seguridad de la información | Hallazgo de la retrospectiva sobre elementos perdidos | Por auditoría |

Indica el alcance de "activo" para cada clase. Un portátil, una máquina virtual, una suscripción y una licencia son distintos, y los campos del registro y la evidencia difieren. El tiempo hasta el registro arranca en el evento que originó el cambio, como la recepción de mercancías, una ejecución de la canalización o el inicio de una suscripción, y se detiene cuando el registro lo refleja. Excluye los activos que están intencionadamente fuera de alcance, como los contenedores de prueba efímeros, y enuméralos como una clase de exclusión en el registro.

## Recomendaciones

### Decide qué estás gestionando

**1. Enumera las clases de activos que importan y por qué.** Empieza por las que conllevan costo, riesgo u obligación legal: dispositivos de usuario final, servidores y cuentas en la nube, equipos de red, licencias y suscripciones de software y almacenes de datos críticos. Para cada clase, escribe las decisiones que el registro debe respaldar: parcheo, renovación, auditoría, renovación de equipos, eliminación. Omite las clases que ninguna decisión necesita.

**2. Define los campos mínimos.** Para cada clase, elige los pocos campos que las decisiones requieren: identificador, tipo, responsable, ubicación o cuenta, estado, fechas de adquisición y de fin, centro de costos y vínculos con el servicio al que da soporte. Un registro corto y exacto vale más que uno largo y obsoleto. Registra la definición en el registro de métricas.

**3. Asigna un responsable a cada clase y a cada activo.** El responsable de la clase diseña el registro y el proceso. El responsable del activo es la persona o el equipo que responde del activo en uso. Usa un equipo, no un individuo, cuando un activo es compartido, y mantén al día el directorio para que las salidas de personal no dejen huérfanos a los activos.

### Captura los activos mientras ocurre el trabajo

**4. Registra los activos en la canalización.** Donde la infraestructura se crea mediante código, haz que la canalización escriba en el registro al crear y al retirar. Eso lleva el tiempo hasta el registro casi a cero y hace que el registro concuerde con el código. La práctica ágil de entregar el cambio de forma continua lo respalda: si cada despliegue actualiza el registro, el registro rara vez es erróneo.

**5. Vincula las compras y el registro.** Para el hardware y el software comprados, haz que la orden de compra o la creación de la suscripción sea el desencadenante de un registro, y que la recepción de mercancías o la activación sea el desencadenante de un cambio de estado. La práctica de [gestión de inventario](https://en.wikipedia.org/wiki/Inventory_management) para bienes físicos ofrece patrones útiles para recibir, almacenar y entregar elementos. Donde las compras ocurran fuera de compras, como las tarjetas de crédito de los equipos para suscripciones, añade una comprobación mensual de los datos de gastos.

**6. Usa el descubrimiento como comprobación, no como registro.** Las herramientas de descubrimiento escanean redes y cuentas en la nube e informan de lo que encuentran. Son buenas para decirte qué existe y malas para decirte quién es su responsable o por qué. Úsalas para detectar activos que faltan y activos desconocidos y para comparar con el registro. El paso de hacer coincidir una fuente con otra es una forma de [conciliación](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), la misma idea que usan los contables para comparar dos conjuntos de registros.

**7. Etiqueta y marca en la creación.** Exige un responsable y una etiqueta de servicio en cada recurso en la nube y una marca en cada dispositivo físico. Los métodos de [seguimiento de activos](https://en.wikipedia.org/wiki/Asset_tracking), como los códigos de barras y las etiquetas de radiofrecuencia, ayudan con los elementos físicos en almacenes y oficinas. Los recursos sin etiquetar son hallazgos para el equipo del responsable, tratados como una parte normal de las operaciones.

### Mide con honestidad

**8. Audita con una muestra aleatoria.** Cada trimestre, extrae una muestra aleatoria de activos del registro y compruébalos frente a la evidencia: encuentra el dispositivo, inspecciona el recurso, confirma el responsable. Extrae luego una muestra en sentido contrario, a partir de los resultados del descubrimiento y de los datos de compras, y comprueba que cada uno aparece en el registro. Las dos direcciones revelan brechas distintas. Informa la exactitud de cada clase por separado.

**9. Vigila la calidad de los datos a lo largo del tiempo.** La completitud, la exactitud y la puntualidad de los registros son aspectos de la [calidad de los datos](https://en.wikipedia.org/wiki/Data_quality). Sigue la tendencia por campo y por clase, y observa qué campos derivan más deprisa. La deriva en el responsable y en la ubicación es normal y te dice dónde automatizar.

**10. Informa las brechas.** Muestra los activos sin localizar, la proporción sin responsable y los elementos sin conciliar además de la exactitud del titular. Un informe que oculta sus excepciones es un informe sobre el informe. Nombra un responsable y una fecha para cada clase de brecha.

### Cierra el ciclo

**11. Retira los activos tan deliberadamente como los creas.** La baja también necesita registros: la fecha, el método y, para los dispositivos que guardaban datos, la evidencia de que se borraron. Un registro de [cadena de custodia](https://en.wikipedia.org/wiki/Chain_of_custody) muestra quién manejó un activo y cuándo. Los activos retirados que siguen en el registro inflan los costos y confunden las auditorías.

**12. Usa el registro en las decisiones cotidianas.** El parcheo, las renovaciones, la respuesta de seguridad y la elaboración de presupuestos deben leer del registro. Cuando la gente lo usa, lo corrige. Cuando el registro es solo para auditorías, se deteriora. Revisa el uso del registro con los equipos que dependen de él, y corrige primero los campos de los que se quejan.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Exactitud del inventario | Muestrear los activos fáciles; auditar solo tras una limpieza; contar una coincidencia en menos campos | Muestra aleatoria extraída por alguien ajeno al equipo; lista de campos fija; muestra en ambas direcciones |
| Cobertura del descubrimiento | Estrechar los "activos esperados" a lo que el descubrimiento puede ver; excluir las redes difíciles de escanear | Documentar las exclusiones; comparar con las compras y la facturación de la nube |
| Tasa de conciliación | Elegir una segunda fuente derivada de la primera; hacer coincidir automáticamente con claves débiles | Usar fuentes realmente independientes; comprobar las coincidencias a mano por muestreo |
| Proporción de activos sin responsable | Asignar como responsable a un equipo comodín; introducir una persona de relleno | Recuento de activos que pertenecen a equipos comodín; muestra de confirmación de responsables |
| Completitud de la etapa del ciclo de vida | Rellenar fechas por defecto; fijar todos los activos en "en uso" | Comparar la etapa con la evidencia en la auditoría; mirar la distribución de antigüedades |
| Tiempo hasta el registro | Poner fecha anterior a los eventos de cambio; registrar la hora del evento como la hora del registro | Comparar con las marcas de tiempo del sistema de origen; pista de auditoría de las ediciones |
| Tasa de activos sin localizar | Dar de baja activos sin aprobación; reclasificarlos como eliminados | Tasa de aprobación y de evidencia de las bajas; comparar las bajas con los registros de finanzas |

Una lectura sana es una cifra de exactitud que se mantiene por debajo del 100 por ciento por razones honestas, con brechas visibles que se reducen, responsables que confirman sus activos cuando se les pregunta y un registro que la gente usa para tomar decisiones.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Registro automatizado | Rápido, coherente, de poco esfuerzo | Necesita ingeniería; pasa por alto lo que está fuera de la canalización |
| Registro manual | Flexible, sirve para cualquier cosa | Lento, propenso a errores, se deteriora |
| Guiado por el descubrimiento | Encuentra lo desconocido | No puede aportar la propiedad ni el propósito |
| Guiado por las compras | Capta el costo y el contrato | Pasa por alto las compras en la sombra y los niveles gratuitos |
| Control estricto de las compras | Registro sólido | Ralentiza a los equipos; fomenta las soluciones provisionales |
| Control ligero con comprobaciones | Rápido; se basa en la confianza | Más brechas que encontrar y corregir |
| Esquema de registro grande | Informes ricos | Difícil de mantener exacto |
| Esquema de registro pequeño | Fácil de mantener | Análisis limitado |

La respuesta en prosa es automatizar el registro donde la infraestructura es código, usar los datos de descubrimiento y de facturación como comprobaciones independientes y mantener pequeño el registro. Confía en que los equipos creen lo que necesiten, pídeles que lo etiqueten y verifica mediante muestreo.

## Preguntas para conversar con tu equipo

**1. Si mañana tuviéramos que encontrar todos los activos ligados a nuestro servicio más importante, ¿cuánto tardaríamos?**
Elige un servicio y sigue sus activos desde el registro y desde otras fuentes. Cronometra el ejercicio y anota las brechas. El facilitador debe registrar qué fuentes coincidieron y cuáles no. El resultado muestra si el registro es una herramienta de trabajo o un documento.

**2. ¿Qué activos se crean sin que nadie de esta sala lo sepa?**
Piensa en cuentas en la nube, suscripciones, entornos de prueba y dispositivos comprados fuera de compras. Pregunta cómo aparecerían. La conversación encuentra las fugas. Acordad una fuente de evidencia independiente que añadir a la conciliación este trimestre.

**3. ¿Quién es responsable de los activos que tenemos hoy, y cómo sabemos que siguen ahí?**
Toma una muestra de activos y pide a los responsables con nombre que lo confirmen. Anota cuántos responsables han cambiado de rol o se han ido. Decidid cómo se mantendrán sincronizados el directorio y el registro, por ejemplo mediante una comprobación automatizada cuando alguien se va.

**4. ¿Cómo auditamos nuestro propio registro sin corregir nuestros propios deberes?**
Discutid quién extrae la muestra y quién la comprueba. Preguntad qué ocurriría si el resultado fuera malo. El facilitador debe explorar si la gente se siente segura informando de un mal número, ya que una auditoría insegura produce buenos números.

**5. ¿Qué registramos que nadie usa?**
Enumera los campos del registro y pregunta qué decisiones usa cada uno. Los campos sin usuario son candidatos a eliminarse. Los campos que se usan pero no son fiables son candidatos a automatizarse. Acordad dos cambios.

**6. ¿Qué ocurre con un activo entre "ya no hace falta" y "desaparecido"?**
Sigue un dispositivo retirado o un servicio dado de baja. ¿Quién confirma que se borraron los datos? ¿Cuándo se cierra el registro? Las brechas de este camino son donde se acumulan costos, riesgos y hallazgos de auditoría.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega crean la mayor parte de los activos nuevos, y viven el mantenimiento de registros como fricción a menos que sea automático. Deben tratar el registro de activos como parte de la definición de terminado de un entorno, dejar que las canalizaciones registren lo que crean y etiquetar los recursos con responsables. Se benefician de un registro exacto cuando necesitan encontrar costos, parchear o retirar un entorno.

### Equipos de servicio y operaciones

Los equipos de operaciones dependen del registro para el parcheo, la respuesta a incidentes y la capacidad. Deben conciliar el descubrimiento con el registro, perseguir los activos sin responsable e informar de las brechas como hallazgos. También tienen a su cargo el manejo físico: recepción, creación de imágenes, almacenamiento y baja, donde importan los registros de cadena de custodia.

### Liderazgo y gobernanza

Los líderes y los auditores se apoyan en los datos de activos para el control de costos, la garantía de seguridad y el cumplimiento. Deben pedir el método de exactitud y la lista de brechas, no solo el titular, y financiar la automatización del registro. La gobernanza debe esperar que el registro se use en las decisiones y tratar con sospecha un 100 por ciento informado.

### Clientes y usuarios

Los usuarios viven la gestión de activos cuando un dispositivo llega listo, una licencia está ahí cuando hace falta y un portátil perdido se gestiona bien. Su retroalimentación sobre la incorporación y el equipamiento es evidencia de cómo funciona el proceso en la práctica (véase el tema 6.4, Experiencia de usuarios y empleados). También tienen un papel: decir a TI cuándo el equipamiento se mueve o se va.

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de una empresa de logística de tamaño medio da soporte a unos 2.400 empleados y opera una plataforma de producto en infraestructura en la nube. Los números siguientes son ilustrativos.

Una auditoría interna pide el número de dispositivos y recursos en la nube que posee la empresa. El registro muestra 3.100 dispositivos de usuario final y 1.850 recursos en la nube. La responsable de activos decide poner a prueba las cifras antes de informarlas. Extrae una muestra aleatoria de 100 dispositivos del registro y encuentra 87 que coinciden en los cuatro campos acordados, una exactitud del 87 por ciento. En sentido contrario, extrae 100 dispositivos de la herramienta de gestión de puntos finales y encuentra 94 en el registro. La cobertura del descubrimiento del parque en la nube es del 82 por ciento, porque tres cuentas creadas por equipos de proyecto no están conectadas a la herramienta de descubrimiento. Conciliar la exportación de la facturación de la nube con el registro hace coincidir el 71 por ciento de los recursos facturados, y los que no coinciden son sobre todo entornos de prueba sin etiquetar. La proporción de activos sin responsable es del 9 por ciento, con un tercio de ellos pertenecientes a personas que se han ido.

El equipo hace cuatro cambios con los equipos de producto y finanzas. Las plantillas de la canalización registran ahora cada entorno nuevo y exigen un responsable y una etiqueta de servicio. La factura mensual de la nube se concilia con el registro, y los recursos sin etiquetar se comunican a los responsables de las cuentas. Una comprobación mensual compara el directorio de personas con los responsables de activos y envía una lista a los responsables cuando alguien se va. La recepción de mercancías en el almacén desencadena una actualización del registro el mismo día. También cambian cómo informan: el resumen de la auditoría muestra la exactitud de ambas direcciones de muestreo, la lista de brechas y la proporción sin responsable.

Tras dos trimestres, la exactitud de la muestra del registro es del 93 por ciento, la conciliación del parque en la nube es del 90 por ciento y la proporción sin responsable es del 3 por ciento. La jefa de finanzas pide un único número de "exactitud del inventario" para la junta. La responsable de activos da la cifra con el método y la lista de brechas, y se niega a informar una meta del 100 por ciento, explicando que el objetivo es mantener visibles las brechas y que se reduzcan. La decisión se registra, y el equipo anota que el número más bajo de un método mejor es más útil que la cifra anterior sin verificar.

## Perspectiva por sector

**Startup.** Puede no haber un registro formal, solo cuentas en la nube y unos pocos portátiles. Mantén una lista sencilla con responsables, etiqueta los recursos en la nube desde el principio y revisa la lista cada mes. Evita comprar una plataforma antes de saber a qué preguntas necesitas responder.

**Pequeña empresa.** Un solo administrador puede encargarse de todo. Una hoja de cálculo con unos pocos campos puede funcionar, si alguien la comprueba frente a las compras dos veces al año. Presta atención a las licencias y suscripciones, que son fáciles de perder de vista, y a la baja de los dispositivos que guardaban datos.

**Gran empresa.** La escala necesita automatización, responsables de clase claros y conciliación entre varias fuentes. Espera que las adquisiciones traigan parques desconocidos, y planifica una forma estándar de incorporarlos al mismo registro. Alinéate con finanzas en la contabilidad de activos, incluida la forma en que los [activos fijos](https://en.wikipedia.org/wiki/Fixed_asset) se capitalizan y se deprecian, y acuerda dónde deben coincidir el registro de TI y el libro mayor de finanzas.

**Gobierno y sector público.** Los organismos públicos afrontan auditorías, reglas de contratación y obligaciones sobre registros, y a menudo guardan datos sensibles en los dispositivos. Conserva la evidencia de las bajas, documenta la cadena de custodia y alinea el registro con los informes de activos exigidos. Trata el registro como parte de la evidencia para las auditorías (véase el tema 8.3, Métricas de cumplimiento y auditoría).

## Caso de negocio: motivaciones, ROI y TCO

Los costos incluyen el tiempo para diseñar el registro, las herramientas de descubrimiento y de conciliación si no las tienes, el esfuerzo de ingeniería para registrar activos en las canalizaciones y el esfuerzo rutinario de muestrear y corregir. Muchas organizaciones ya poseen herramientas de descubrimiento y de puntos finales. Un equipo modesto puede llevar un programa, y el costo continuo es bajo una vez automatizado el registro.

Los retornos son desperdicio evitado y menor riesgo. Los registros exactos reducen el pago de suscripciones y recursos sin usar, aceleran la respuesta a incidentes y el parcheo porque sabes qué existe, y recortan el esfuerzo de auditoría. Evita afirmar ahorros porcentuales concretos tomados de estudios publicados. Mide tu propia línea base: el número de recursos en la nube sin responsable y su costo mensual, el tiempo para responder a una pregunta de auditoría y las licencias pagadas pero sin usar. Cuenta también el costo del riesgo: un servidor desconocido es una exposición de seguridad, y un dispositivo perdido con datos tiene un costo de notificación. El tratamiento financiero de los costos se cubre más adelante en esta parte (véase el tema 7.5, Costo del servicio y economía unitaria).

## Antipatrones y trampas

- **La limpieza anual.** Un gran esfuerzo una vez al año se deteriora en semanas. Registra de forma continua y muestrea cada trimestre.
- **Auditar solo el registro.** Demuestra que el registro concuerda consigo mismo. Muestrea a partir de evidencia independiente en ambas direcciones.
- **Una puntuación perfecta.** Una cifra del 100 por ciento suele significar un alcance estrecho o una evidencia débil. Mira qué se excluyó.
- **Campos de responsable rellenados con un equipo comodín.** Parece completo y es inútil. Cuenta la propiedad por un comodín como una brecha.
- **Demasiados campos.** La gente los rellena con valores por defecto. Mantén el registro en lo que las decisiones necesitan.
- **Primero la herramienta, luego el proceso.** Una plataforma de descubrimiento sin reglas de propiedad y de ciclo de vida produce un desorden mayor. Decide primero las preguntas.
- **Penalizar a los equipos por las brechas.** Ocultan activos. Trata las brechas como hallazgos y corrige la causa.
- **Olvidar la baja.** Los activos retirados que siguen en el registro o salen sin un registro de borrado crean costo y riesgo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Captura | Hojas de cálculo actualizadas cuando se recuerda | Registro para las clases principales, sobre todo manual | Registro atado a las compras y a las canalizaciones | Registro automatizado; tiempo hasta el registro medido | Activos registrados entre equipos y proveedores desde un único flujo de eventos |
| Exactitud | Desconocida | Recuentos ocasionales | Muestreo independiente trimestral en ambas direcciones | Exactitud y brechas con seguimiento por clase y alimentando la mejora | Comprobaciones independientes compartidas entre TI, finanzas y seguridad |
| Uso | Registro usado solo para auditorías | Usado por unos pocos equipos | El parcheo, la renovación y los presupuestos leen del registro | Uso revisado; campos ajustados a las decisiones | El registro impulsa decisiones automatizadas con supervisión humana |

## Lista de verificación

- [ ] Las clases de activos y las decisiones que respalda cada registro están enumeradas.
- [ ] Los campos mínimos por clase están definidos y registrados en el registro de métricas.
- [ ] Cada clase y cada activo tienen un responsable con nombre, mantenido al día frente al directorio.
- [ ] Las canalizaciones registran la infraestructura nueva con un responsable y una etiqueta de servicio.
- [ ] Las compras y la creación de suscripciones desencadenan registros de activos.
- [ ] Los datos de descubrimiento y de facturación se concilian con el registro cada mes.
- [ ] Una muestra aleatoria se audita cada trimestre en ambas direcciones.
- [ ] Las listas de brechas con responsables y fechas se publican con las cifras de exactitud.
- [ ] La baja tiene un método registrado y evidencia del borrado de datos.
- [ ] Los campos sin uso se eliminan; el registro se usa en las decisiones diarias.

## Prompts de IA

**Diseña un registro mínimo de activos.**

```text
Gestionamos estas clases de activos de TI en [type of organization]: [list]. Las
decisiones que deben respaldar nuestros datos de activos son: [list, for example
patching, renewal, audit, refresh, disposal]. Para cada clase, propón los campos
mínimos del registro, qué fuente debería aportar cada campo y cómo podría
verificarse cada uno de forma independiente. No inventes requisitos
regulatorios. Enumera tus supuestos y todo lo que debería confirmar con
finanzas, seguridad o el área jurídica.
```

**Planifica una muestra de auditoría en ambas direcciones.**

```text
Nuestro registro contiene [number] activos en [classes]. También tenemos datos
de descubrimiento, de compras y de facturación de la nube. Diseña una auditoría
trimestral con muestras aleatorias extraídas del registro y de las demás
fuentes, di qué tamaño debería tener cada muestra para una lectura útil (explica
el razonamiento sin exagerar la precisión), qué registrar y cómo informar la
exactitud y las brechas con honestidad. Enumera tus supuestos.
```

**Analiza un resultado de conciliación.**

```text
Conciliamos nuestro registro con [source] y encontramos: coinciden [number], solo
en el registro [number], solo en la fuente [number]. Aquí hay ejemplos de cada
grupo con los campos que guardamos: [paste anonymized examples]. Sugiere
razones probables de cada discrepancia, cuáles son rápidas de corregir, cuáles
necesitan un cambio de proceso y qué comprobar primero. No supongas causas que
los datos no puedan respaldar. Enumera tus supuestos.
```

**Redacta una comprobación de bajas y cambios de puesto.**

```text
Redacta un proceso mensual sencillo para encontrar los activos cuyos
responsables se han ido o han cambiado de rol, usando el directorio de personas
y el registro de activos. Incluye los pasos, quién recibe la lista, el tiempo
permitido para reasignar, qué ocurre si nadie responde y cómo registrar el
resultado. Contexto: [tools and team size]. Enumera tus supuestos y las
consideraciones de privacidad que debería comprobar.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de activos antes de informarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de activos lleva su vector de manipulación, su barrera de protección y su regla de evidencia independiente.

## Puntos clave

- Registra los activos en el momento del cambio, preferiblemente mediante canalizaciones y compras, para que el registro sea un subproducto del trabajo.
- Mide la exactitud frente a evidencia independiente, muestreando en ambas direcciones.
- Todo activo necesita un responsable, y los activos sin responsable son hallazgos.
- Mantén pequeño el registro y hazlo útil en las decisiones diarias.
- Informa las brechas, no solo el titular, y desconfía de una puntuación perfecta.
- Planifica la baja con tanto cuidado como la creación.

## Referencias y lecturas complementarias

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
