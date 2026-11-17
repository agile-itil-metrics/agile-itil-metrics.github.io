# Métricas de activos de software y licencias

**El software se compra, se suscribe, se construye y se toma prestado, y cada vía crea obligaciones y costos, así que mide a qué tienes derecho, qué usas realmente y de qué dependes, y facilita que los equipos elijan herramientas sin crear sorpresas después.**

## Resumen y motivación

El software es la clase de activo que cambia más deprisa y la más difícil de ver. Un desarrollador añade una biblioteca en minutos. Un equipo se da de alta en una herramienta de software como servicio con la tarjeta de la empresa. Un proveedor cambia su modelo de precios entre renovaciones. Un contrato permite 500 usuarios y hay 700 con cuenta. La [gestión de activos de software](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) es la práctica empresarial de gestionar y optimizar la compra, el despliegue, el mantenimiento, el uso y la baja del software dentro de una organización. Se sitúa dentro de la práctica más amplia de gestión de activos de TI (véase el tema 7.1, Métricas de gestión de activos de TI) y comparte su disciplina de registros, responsables y ciclos de vida.

La entrega continua y la gestión de activos de software tiran en direcciones distintas en cuanto a la velocidad. Los equipos que entregan de forma continua necesitan elegir y adoptar herramientas con rapidez, y construyen sobre componentes de código abierto por centenares. La gestión de activos de software quiere saber qué se usa, bajo qué condiciones, a qué costo y con qué riesgo. Ambas tienen razón. La salida es la colaboración continua entre equipos, compras, el área jurídica, seguridad y finanzas: haz rápida la vía aprobada, haz fácil de encontrar el catálogo de herramientas aprobadas y haz automáticas las comprobaciones. Frenar a los equipos con un largo proceso de aprobación produce [TI en la sombra](https://en.wikipedia.org/wiki/Shadow_IT), que es lo contrario de la visibilidad que todos quieren.

Importan cuatro tipos de software, y las métricas difieren entre ellos.

- **Software con licencia** instalado en dispositivos o servidores, regido por una [licencia de software](https://en.wikipedia.org/wiki/Software_license) que dice quién puede usarlo, cuántos pueden usarlo y en qué condiciones. Los derechos pueden ser por usuario, por dispositivo, por núcleo o por sede, y la unidad decide cómo cuentas.
- **Software como servicio.** El [software como servicio](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) se accede por red y se paga por suscripción, a menudo por puesto o por uso. Es fácil de adoptar y fácil de olvidar. Se acumulan herramientas solapadas y puestos sin usar.
- **Componentes de código abierto.** El [software de código abierto](https://en.wikipedia.org/wiki/Open-source_software) está disponible bajo licencias que conceden amplios derechos con condiciones. Algunas licencias, llamadas licencias de [copyleft](https://en.wikipedia.org/wiki/Copyleft), exigen que el trabajo derivado se comparta bajo los mismos términos. El cumplimiento depende de cómo se use y se distribuya un componente, y la interpretación de una licencia es una cuestión jurídica.
- **Software que construyes.** Tu propio código es un activo, y depende de muchos componentes. Una [lista de materiales de software](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) es una lista de los componentes de una pieza de software. Te ayuda a responder cuáles de tus servicios usan una biblioteca dada cuando aparece una vulnerabilidad o un problema de licencia.

Las métricas de activos de software están expuestas a la distorsión habitual. Una posición de licencias puede parecer sana porque el inventario está incompleto. El costo de las licencias sin uso puede parecer bajo porque los contratos se acortaron antes de la revisión. Se aplica la barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law), así que cada medida de aquí se empareja con una comprobación independiente (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Una cautela sobre la ley: las condiciones de las licencias y los derechos de auditoría son asuntos jurídicos. Este tema describe la práctica de medición. No interpreta ninguna licencia, y no sustituye el asesoramiento de un abogado cualificado para tu situación y tu jurisdicción.

## Principios clave

- **Mide el derecho frente al uso.** Saber a qué tienes derecho y qué usas es la comparación central.
- **Cuenta por la unidad que usa la licencia.** Usuarios, dispositivos, núcleos y suscripciones son distintos, y mezclarlos oculta la respuesta.
- **Haz que la vía aprobada sea la vía rápida.** Un catálogo visible y una aprobación rápida reducen la adopción en la sombra.
- **Incluye componentes además de productos.** Las bibliotecas de código abierto y sus licencias forman parte del parque.
- **Revisa antes de renovar.** El mejor momento para recortar desperdicio es antes de la fecha del contrato.
- **Mantén al área jurídica en la conversación.** La interpretación pertenece a quienes están cualificados para darla.
- **Comparte la imagen con los equipos.** Los equipos que ven su propio uso y costo toman mejores decisiones.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Posición efectiva de licencias | Comparación de los derechos que se poseen con el uso hallado, por producto, en la propia unidad de recuento de la licencia | derechos poseídos menos despliegues o usuarios hallados, por producto | unidades (excedente positivo, déficit negativo) | Registros de derechos, herramienta de descubrimiento, sistema de identidad | Gestión de activos de TI; gestión de proveedores | Catálogo visible y datos de uso para los equipos | Mensual para los productos clave; trimestral para los demás |
| Tasa de utilización de licencias | Proporción de los derechos pagados que están en uso activo | derechos con actividad en los últimos 90 días / derechos pagados | porcentaje | Informes de uso del proveedor, registros de identidad, registros de derechos | Gestión de activos de TI; gestión financiera | Retrospectiva sobre el valor de las herramientas | Mensual |
| Costo de licencias sin uso (shelfware) | Costo anual de los derechos que se pagan y no se usan | suma de (derechos sin usar multiplicados por el costo unitario) | moneda por año | Registros de derechos, datos de uso, facturas | Gestión de activos de TI; gestión financiera | Reducción del desperdicio en la cadena de herramientas | Trimestral |
| Recuento de aplicaciones no autorizadas | Número de aplicaciones de software en uso que no están en el catálogo aprobado | aplicaciones vistas en los datos de gastos, en los registros de inicio de sesión único o en los datos de red que no están en el catálogo | recuento | Informes de gastos, proveedor de identidad, datos de red y de puntos finales | Gestión de activos de TI; gestión de la seguridad de la información | Equipos que eligen herramientas con soporte visible | Mensual |
| Preparación para renovaciones | Proporción de renovaciones que tuvieron una revisión de uso antes de la fecha de preaviso | renovaciones con una revisión de uso completada al menos 90 días antes de la fecha de preaviso / renovaciones que vencen en el periodo | porcentaje | Registro de contratos y registros de revisión | Gestión de proveedores; gestión financiera | Planificar con antelación el cambio | Trimestral |
| Cobertura de SBOM | Proporción de servicios de producción con una lista de materiales de software actual | servicios con un SBOM generado en el último ciclo de versiones / servicios de producción | porcentaje | Salidas de la canalización de compilación, catálogo de servicios | Gestión de activos de TI; gestión de la seguridad de la información | La definición de terminado incluye visibilidad de las dependencias | Mensual |
| Cobertura de la revisión de código abierto | Proporción de componentes en producción con una identificación de licencia y una decisión de política registradas | componentes con la licencia y la decisión registradas / componentes hallados en los SBOM | porcentaje | Herramienta de análisis de composición de software, registro de políticas | Gestión de activos de TI; gestión de proveedores | Revisión de dependencias en la canalización | Mensual |

Indica la unidad de recuento de cada producto en el registro. La utilización cuenta la actividad desde un evento definido, como el inicio de sesión, y una ventana indicada. Excluye las cuentas de servicio y de prueba de los recuentos de usuarios solo cuando las condiciones de la licencia lo permitan, y registra la regla. El costo es el precio unitario del contrato neto de los descuentos acordados, y se registra la fecha del precio.

## Recomendaciones

### Conoce lo que posees y lo que usas

**1. Mantén un registro de derechos para cada producto que cuesta dinero o conlleva obligaciones.** El registro debe contener el proveedor, el producto, el tipo de licencia, la unidad de recuento, la cantidad, el plazo, el precio, las fechas de renovación y de preaviso, las restricciones y el responsable. Guarda el contrato o un vínculo a él. La métrica depende de este registro, y a menudo el registro no existe para las suscripciones compradas fuera de compras.

**2. Mide el uso con la unidad del proveedor.** Las licencias por puesto cuentan usuarios con nombre, y las licencias por procesador cuentan núcleos. La utilización frente a la unidad equivocada da una falsa tranquilidad. Donde las condiciones sean complejas, pide a compras y al área jurídica que describan la regla de recuento en lenguaje llano una sola vez, y regístrala.

**3. Combina tres fuentes de datos de uso.** La consola de administración del proveedor, los registros de inicio de sesión de tu proveedor de identidad y tus herramientas de descubrimiento ven cada una una parte. Donde discrepen, averigua por qué. Un puesto asignado pero nunca usado es candidato a recuperarse, y un usuario que aparece en un registro y no en otro puede ser un problema de datos.

**4. Recupera por defecto los puestos sin usar.** Fija una regla, como retirar el acceso tras 90 días sin uso y restablecerlo a petición. Haz fácil restablecerlo para que la regla no frustre a la gente. Recuperar es una práctica continua, no un proyecto, y funciona mejor cuando está automatizada y anunciada.

### Haz que el camino correcto sea el camino fácil

**5. Publica un catálogo de herramientas aprobadas.** Enumera lo que los equipos pueden usar, cuánto cuesta, quién da soporte y cómo solicitar acceso. Añade una vía rápida para proponer una herramienta nueva, con una revisión breve de seguridad, privacidad y costo. Un catálogo que ayuda a la gente a encontrar la herramienta existente evita las compras duplicadas (véase el tema 6.3, Métricas de adopción y catálogo de servicios).

**6. Vigila la proliferación sin castigarla.** Usa los datos de gastos, los registros de inicio de sesión único y los datos de red para encontrar aplicaciones que no están en el catálogo. Trata cada una como una conversación: ¿qué necesita el equipo, y podría servir una herramienta aprobada? Cuenta las aplicaciones no autorizadas y sigue la tendencia, y apunta a poner bajo gestión las útiles, no a erradicarlas.

**7. Da a los equipos visibilidad de su propio uso y costo.** Una vista mensual de puestos, uso y costo por equipo les permite limpiar sus propias suscripciones. La visibilidad funciona mejor que la vigilancia, y respeta la preferencia ágil por equipos que se autoorganizan con la información que necesitan.

### Planifica las renovaciones y gestiona la dependencia

**8. Revisa el uso antes de cada renovación significativa.** Fija una revisión entre 90 y 120 días antes de la fecha de preaviso, con el responsable, compras y finanzas. Lleva la utilización, el costo de las licencias sin uso, las alternativas y la opinión del equipo. La preparación para renovaciones es la proporción de renovaciones que llegan a esta revisión a tiempo. Una fecha de preaviso perdida es un costo con una causa.

**9. Vigila la dependencia del proveedor.** La [dependencia del proveedor](https://en.wikipedia.org/wiki/Vendor_lock-in) (vendor lock-in) hace costoso cambiar de proveedor. Registra la ruta de salida de los productos importantes: formatos de exportación de datos, condiciones del contrato en la terminación y esfuerzo de sustitución. No tienes que evitar la dependencia, pero debes conocer su precio.

**10. Genera un SBOM en cada versión.** Las herramientas de compilación pueden producir un SBOM automáticamente como parte de la canalización, de modo que la información se mantiene actual sin esfuerzo continuo. Guárdalo con la versión y hazlo consultable para poder responder qué servicios usan un componente. Esto respalda por igual el licenciamiento y la respuesta de seguridad.

**11. Revisa las licencias de código abierto en la canalización.** Las herramientas de [análisis de composición de software](https://en.wikipedia.org/wiki/Software_composition_analysis) identifican componentes y sus licencias. Acuerda con el área jurídica una política breve sobre qué licencias están aprobadas, cuáles necesitan revisión y cuáles no están permitidas para tu uso, y haz que la canalización marque las excepciones. Guarda las decisiones de política en un registro. La herramienta identifica las licencias, y una persona cualificada para interpretarlas decide los casos difíciles.

### Prepárate para las auditorías con calma

**12. Ten la evidencia lista, no una carrera.** Una [auditoría de software](https://en.wikipedia.org/wiki/Software_audit) de un proveedor o de un regulador te pide demostrar que tu uso coincide con tus derechos. Si los registros de derechos y los datos de uso ya se concilian cada mes, una auditoría es una petición rutinaria. Implica pronto al área jurídica y a compras, responde por un solo canal y no informes por tu cuenta conclusiones que no hayas revisado con ellos.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Posición efectiva de licencias | Contar en una unidad favorable; dejar fuera del descubrimiento los despliegues en la sombra | Contar en la propia unidad de la licencia; comparar con los datos de gastos y de identidad; revisión jurídica de la regla de recuento |
| Tasa de utilización de licencias | Acortar la ventana de actividad; contar como uso los inicios de sesión de bots o de cuentas de servicio | Ventana fija en el registro; excluir las cuentas no humanas; comparar con el informe de uso del proveedor |
| Costo de licencias sin uso (shelfware) | Renegociar o cancelar justo antes de la revisión para reducir el número; ignorar las suscripciones en tarjetas | Incluir todas las fuentes de gasto; seguir el costo al inicio de la ventana de preaviso |
| Recuento de aplicaciones no autorizadas | Aprobar todo en el catálogo para reducir el recuento; ocultar el uso mediante cuentas personales | Criterios de revisión del catálogo; mirar los datos de gasto y de identidad; preguntar a los equipos qué necesitan |
| Preparación para renovaciones | Celebrar una revisión de trámite; fijar más tarde la fecha de preaviso | Lista de verificación de revisión con los insumos exigidos; fechas del contrato en manos de compras |
| Cobertura de SBOM | Generar SBOM que omiten las dependencias transitivas; contar salidas de compilación que no se liberan | Definir la profundidad en el registro; comprobar por muestreo un SBOM frente al artefacto desplegado |
| Cobertura de la revisión de código abierto | Marcar componentes como revisados sin una decisión; aceptar licencias "desconocidas" | Contar los componentes con licencia desconocida; revisar una muestra de decisiones |

Una lectura sana es una posición de licencias que coincide con la evidencia independiente, una tasa de utilización que sube porque se recuperan puestos y no porque cambiara la definición, un recuento de aplicaciones no autorizadas que baja a medida que mejora el catálogo y renovaciones que llegan con una revisión.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Aprobación central de todas las herramientas | Control sólido, una sola visión | Lenta; fomenta la TI en la sombra |
| Elección del equipo dentro de unas barreras de protección | Rápida; encaja con las necesidades del equipo | Más variedad; necesita visibilidad y revisión |
| Recuperación agresiva de puestos | Ahorra costo | Puede frustrar a los usuarios si restablecer es lento |
| Provisión generosa de puestos | Poca fricción | Se acumula el desperdicio |
| Acuerdos empresariales | Menor costo unitario, más simples | Dependencia; pagar por una amplitud innecesaria |
| Pago por uso | Ajusta el costo al uso | Facturas impredecibles |
| Escaneo automatizado de licencias | Coherente y rápido | Necesita criterio humano en los casos límite |
| Revisión manual de componentes | Cuidadosa | No escala para árboles de dependencias grandes |

La respuesta en prosa es dar a los equipos libertad de elección dentro de barreras de protección claras, automatizar las comprobaciones y dedicar la atención humana a los contratos grandes y a las cuestiones difíciles de licencias. Mantén una vía rápida para las herramientas nuevas y una vía fácil para restablecer el acceso recuperado.

## Preguntas para conversar con tu equipo

**1. ¿Qué tres productos nos cuestan más, y sabemos cuánta gente los usa?**
Enumera los contratos mayores y la unidad de recuento de cada uno. Compara con los datos de uso. El facilitador debe buscar productos cuya unidad nadie conoce o para los que no existen datos de uso. Acordad recoger los datos de uno antes de la próxima renovación.

**2. ¿Cómo se adopta aquí una herramienta nueva, y cuánto tarda?**
Sigue un ejemplo reciente desde la solicitud hasta el acceso. Pregunta cuántos equipos se saltaron la vía, y por qué. La respuesta muestra si la vía aprobada es rápida. Acordad una mejora de la vía y una forma de saber si funcionó.

**3. ¿Qué ocurriría si un proveedor nos pidiera demostrar nuestra posición de licencias el mes que viene?**
Recorre quién respondería, qué registros existen y qué brechas hay. La conversación no debe aspirar a sacar conclusiones jurídicas, solo a identificar los registros que faltan. Nombra a las personas del área jurídica y de compras que intervendrían y cómo las contactaría el equipo.

**4. ¿Dónde recuperamos puestos sin usar, y dónde no?**
Revisa las reglas de recuperación de los productos principales. Pregunta qué ocurriría si se aplicara una regla al resto. Discutid cómo hacer indoloro el restablecimiento del acceso, ya que eso es lo que hace aceptable la regla.

**5. ¿Podemos decir cuáles de nuestros servicios usan una biblioteca de código abierto dada?**
Elige una biblioteca conocida e intenta responder. Si lleva más de unos pocos minutos, discutid por qué. Acordad qué paso de la canalización podría producir un SBOM y dónde podrían guardarse los resultados.

**6. ¿De qué dependemos que sería difícil abandonar?**
Enumera los productos cuyos datos o flujo de trabajo están muy atados a un proveedor. Pregunta cuánto costaría irse y cómo empezarías. El facilitador puede registrar la respuesta como un insumo para la planificación de renovaciones.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega eligen herramientas y bibliotecas a diario. Deben usar el catálogo aprobado donde les sirva, proponer añadidos con una nota breve y dejar que la canalización genere los SBOM y marque los problemas de licencia. Necesitan respuestas rápidas: una política clara sobre las licencias comunes y una vía para preguntar por las inusuales. Un equipo que ve sus propios datos de puestos y de gasto los limpiará sin que se le diga.

### Equipos de servicio y operaciones

Los equipos de operaciones ejecutan el descubrimiento, gestionan el acceso y atienden las renovaciones y las auditorías. Deben conciliar los datos de uso con los derechos, recuperar los puestos sin usar según un calendario y mantener al día el registro de contratos. También cargan con el peso del soporte de las herramientas sin gestionar, que es una buena razón para poner bajo gestión las útiles.

### Liderazgo y gobernanza

Los líderes quieren evitar costos imprevistos y exposición jurídica sin frenar a los equipos. Deben financiar la automatización, pedir la evidencia independiente detrás de las afirmaciones sobre la posición de licencias y mantener informados al área jurídica y a compras. La gobernanza debe esperar que las renovaciones se revisen a tiempo y que la política de código abierto se aplique en la canalización.

### Clientes y usuarios

Los usuarios quieren que la herramienta que necesitan funcione a la primera, sin una larga espera. Notan cuando el acceso desaparece sin aviso o cuando dos herramientas hacen el mismo trabajo. Hay que avisarles cuando se vayan a recuperar puestos, darles una vía fácil para pedir acceso y consultarles cuando se sustituya una herramienta.

## En la práctica: un ejemplo de ITIL ágil

El grupo de tecnología de una organización regional de noticias da soporte a 900 empleados y opera una plataforma de publicación con unos 40 servicios. Los números siguientes son ilustrativos.

El director financiero pregunta por qué los costos de software han crecido más deprisa que la plantilla. El responsable de activos de software reúne los datos. Los registros de derechos cubren 61 productos. Los registros de inicio de sesión y los informes de los proveedores muestran que la suite de diseño tiene 220 puestos y 140 usuarios activos en los últimos 90 días, una tasa de utilización del 64 por ciento, con puestos sin usar que cuestan aproximadamente lo mismo que el salario de un ingeniero. Los datos de gastos muestran 37 aplicaciones que no están en el catálogo, sobre todo herramientas de colaboración y de analítica compradas por equipos. Tres de las renovaciones mayores tuvieron fechas de preaviso que pasaron sin una revisión de uso.

El equipo hace cuatro cambios con los equipos de producto. Una regla de recuperación de puestos retira el acceso tras 90 días sin uso, con una solicitud de un clic para restablecerlo. Una página de catálogo enumera las herramientas aprobadas, su costo y un responsable, con una vía de dos días para proponer una herramienta nueva. Las revisiones de renovación empiezan 100 días antes de la fecha de preaviso, con una lista de verificación de utilización, alternativas y opinión del equipo. La canalización de compilación de la plataforma de publicación genera ahora un SBOM en cada versión, y un escaneo de licencias marca los componentes con licencias desconocidas o restringidas para su revisión por el área jurídica.

Tres meses después, la utilización de la suite de diseño es del 86 por ciento tras recuperar 60 puestos, y una renovación se renegocia con un número menor de puestos. El recuento de aplicaciones no autorizadas baja de 37 a 24, ya que el equipo añade cuatro herramientas útiles al catálogo y retira duplicados. La cobertura de SBOM es del 70 por ciento de los servicios de producción. El escaneo encuentra un componente con una licencia desconocida en un servicio poco usado, que el área jurídica revisa y el equipo sustituye. Un proveedor solicita una verificación de licencias de otro producto, y los registros presentados para la auditoría coinciden, con una corrección. El director pide una promesa de utilización del 100 por ciento, y la responsable explica que una cifra sana deja algo de holgura para los recién llegados y los cambios, y propone un rango como orientación, no como meta. La decisión se registra.

## Perspectiva por sector

**Startup.** Las herramientas se eligen deprisa y se pagan con tarjeta. Mantén una lista de una página de las suscripciones con responsables y fechas de renovación, revísala cada trimestre y usa los niveles gratuitos deliberadamente. Presta atención a las licencias de código abierto antes de distribuir software o de captar inversión, ya que los inversores pueden preguntar.

**Pequeña empresa.** Un puñado de productos carga con la mayor parte del costo. Lleva a mano el recuento de puestos, fija recordatorios en el calendario para las renovaciones y pide a los proveedores informes de uso. Cuidado con las suscripciones de renovación automática y con las licencias atadas a una persona que se ha ido.

**Gran empresa.** Los contratos complejos, las fusiones y las muchas unidades de negocio dificultan los registros de derechos. Invierte en un modelo de datos que guarde las unidades de recuento, automatiza los flujos de descubrimiento y de identidad, y da al área jurídica y a compras un lugar en la canalización para la política de código abierto. Espera auditorías de proveedores y prepara la evidencia con antelación.

**Gobierno y sector público.** Las reglas de contratación, el licenciamiento de beneficio público y los requisitos de soberanía moldean las elecciones. Documenta los motivos de las compras, conserva los registros de contratos durante el periodo exigido y considera los estándares abiertos y las rutas de salida como requisitos. La transparencia sobre el gasto en software puede ser un deber legal (véase el tema 8.4, Métricas de proveedores y contratos).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el tiempo para construir el registro de derechos, las herramientas de análisis de uso y de composición y el esfuerzo de revisar las renovaciones. Algunas herramientas ya están licenciadas como parte de las plataformas de identidad o de puntos finales. El costo rutinario son unas pocas horas al mes para un parque pequeño y más para uno grande. Automatizar la recuperación y la generación de SBOM lo reduce.

El retorno proviene del gasto evitado y de la sorpresa evitada. Los puestos sin usar son ahorros directos en la renovación. Las revisiones tempranas de renovación te permiten negociar con conocimiento. Conocer tus dependencias acorta la respuesta a las vulnerabilidades y a las cuestiones de licencias. Evita citar porcentajes de ahorro del sector que no puedas rastrear. Mide tu propia línea base: puestos sin usar multiplicados por el costo unitario, el número de renovaciones revisadas tarde, el tiempo para responder a "qué servicios usan este componente" y el costo de cualquier hallazgo de auditoría pasado. Incluye el costo del propio programa, y cuenta la exposición jurídica evitada solo donde puedas describir un riesgo concreto reducido. Los temas siguientes sobre costos llevan más lejos la visión financiera (véase el tema 7.5, Costo del servicio y economía unitaria).

## Antipatrones y trampas

- **Contar en la unidad equivocada.** Un recuento de puestos para una licencia vendida por núcleo engaña. Registra la unidad.
- **Tratar el informe del proveedor como toda la verdad.** Combínalo con tus propios registros.
- **Bloquear herramientas por defecto.** Los equipos rodean el bloqueo. Haz rápida la vía aprobada.
- **Recuperar sin una vía de vuelta.** Los usuarios pierden la confianza. Haz fácil y rápido el restablecimiento.
- **Revisar las renovaciones después de la fecha de preaviso.** La capacidad de negociación se ha ido. Empieza pronto.
- **Escanear licencias e ignorar los resultados.** Un escaneo sin política y sin un responsable de decisiones es ruido.
- **Interpretar licencias en el equipo de entrega.** Los casos difíciles pertenecen al área jurídica.
- **Tratar los SBOM como papeleo.** Si nadie los consulta, se deterioran. Úsalos en simulacros de respuesta.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Derechos y uso | Contratos en el correo; sin datos de uso | Registros de los productos principales; comprobaciones de uso ocasionales | Registros de derechos con unidades de recuento; uso a partir de datos de identidad y de proveedores | Posición de licencias y utilización revisadas mensualmente; puestos recuperados automáticamente | Uso y gasto compartidos con los equipos; datos de compras y de uso fluyen entre los proveedores y la organización |
| Vía de adopción | Los equipos compran lo que les gusta | Una lista de herramientas aprobadas | Vía rápida del catálogo con responsables y criterios de revisión | Aplicaciones no autorizadas con seguimiento y absorbidas o retiradas | Elección de herramientas codiseñada con los equipos; servicios comunes reutilizados en toda la organización |
| Componentes y dependencias | Desconocidos | Listas manuales de componentes de algunos servicios | SBOM generado en la versión; política de licencias acordada con el área jurídica | Cobertura con seguimiento; excepciones revisadas; simulacros de respuesta realizados | SBOM y política compartidos con proveedores y clientes; rutas de salida planificadas |

## Lista de verificación

- [ ] Todo producto de pago o que conlleve obligaciones tiene un registro de derechos con unidad, cantidad, plazo y responsable.
- [ ] El uso proviene de al menos dos fuentes, comparadas mensualmente para los productos clave.
- [ ] La recuperación de puestos tiene una regla, un aviso y una vía fácil de vuelta.
- [ ] Existe un catálogo de herramientas aprobadas con una vía rápida para proponer una herramienta nueva.
- [ ] Los datos de gastos y de identidad se comprueban en busca de aplicaciones no autorizadas.
- [ ] Las revisiones de renovación empiezan al menos 90 días antes de la fecha de preaviso.
- [ ] Los SBOM se generan y se guardan para cada versión de los servicios de producción.
- [ ] Una política de licencias acordada con el área jurídica marca las excepciones en la canalización.
- [ ] Las rutas de salida de los proveedores se registran para los productos importantes.
- [ ] Los contactos del área jurídica y de compras para las auditorías están nombrados y son conocidos por los equipos.

## Prompts de IA

**Construye una plantilla de registro de derechos.**

```text
Redacta una plantilla para registrar los derechos de software de [type of
organization], que cubra estos tipos de producto: [licensed, SaaS, open-source,
built]. Los campos deben incluir unidad de recuento, cantidad, plazo, precio,
fecha de preaviso, restricciones, responsable, fuente de uso y notas de salida.
Sugiere cómo rellenar cada campo a partir de las fuentes existentes: [list]. No
interpretes ninguna condición de licencia. Enumera tus supuestos y los campos
que necesitan la aportación del área jurídica o de compras.
```

**Prepara una revisión de renovación.**

```text
Tenemos una renovación de [product] con una fecha de preaviso de [date]. Datos:
derechos [number] [units], uso activo [number] en los últimos 90 días, costo
anual [amount] y opinión del equipo [summary]. Redacta una revisión de
renovación de una página con preguntas que hacer, opciones (renovar tal cual,
reducir, sustituir, renegociar) y la información que aún necesitamos. No
inventes precios de mercado. Enumera tus supuestos.
```

**Diseña una regla de recuperación de puestos.**

```text
Propón una política de recuperación de puestos para [product] usado por [number]
personas en [type of organization]. Incluye la ventana de inactividad, el aviso
a los usuarios, cómo restablecer el acceso, las excepciones (por ejemplo
permisos o uso estacional) y cómo medir si ayuda sin molestar a los usuarios.
Contexto: [tools available]. Enumera tus supuestos y riesgos.
```

**Clasifica el resultado de un escaneo de licencias.**

```text
Nuestro escaneo de [service] encontró estos componentes y licencias: [paste list
with license identifiers]. Nuestra política: aprobadas [list], necesitan
revisión [list], no permitidas [list]. Ordena los componentes en esos tres
grupos, señala los casos desconocidos o ambiguos y sugiere qué preguntar al
área jurídica por cada elemento señalado. No des conclusiones jurídicas.
Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de activos de software o de licencias.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de software indica su unidad de recuento, su vector de manipulación y su barrera de protección.

## Puntos clave

- Compara los derechos con el uso real, contado en la propia unidad de la licencia.
- Haz que la vía aprobada sea la vía rápida, para que los equipos no necesiten ocultar lo que usan.
- Revisa el uso antes de las fechas de preaviso de renovación y recupera los puestos sin usar mediante una regla visible.
- Genera SBOM en la canalización y marca las licencias frente a una política acordada con el área jurídica.
- Mantén implicados al área jurídica y a compras en la interpretación y en las auditorías.
- Da a los equipos visibilidad de su propio uso y costo.

## Referencias y lecturas complementarias

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
