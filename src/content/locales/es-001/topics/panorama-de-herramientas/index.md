# Panorama de herramientas

**Elige las herramientas por las preguntas que necesitas responder y los datos en los que puedes confiar, mantén portables los datos y gasta menos en plataformas que en los hábitos que hacen que valga la pena leer los números.**

## Resumen y motivación

Las herramientas son donde los programas de métricas fallan con más frecuencia, en dos direcciones opuestas. Algunas organizaciones compran primero una gran plataforma de analítica y descubren después que no tienen definiciones acordadas, ni datos limpios, ni audiencia. Otras construyen un montón de guiones y hojas de cálculo que entiende una sola persona, y el programa termina cuando esa persona se va. Ambas empiezan por la herramienta e ignoran las preguntas que debe responder.

El panorama está abarrotado y cambia con rapidez, así que este tema es deliberadamente neutral respecto a los proveedores. Describe los tipos de herramientas, los flujos de datos entre ellas, las compensaciones entre construir y comprar y los criterios de elección. No nombra productos, porque los nombres de producto envejecen deprisa y un libro es una mala guía de las funciones y los precios actuales. Los principios de medición no cambian con el proveedor: saber qué se mide, de dónde vienen los datos, quién los posee y cómo se leerán.

La mayoría de los datos que necesita un programa de métricas de servicio ya existe en sistemas de registro. Las herramientas de [gestión de servicios de TI](https://en.wikipedia.org/wiki/IT_service_management) contienen incidentes, solicitudes, problemas, cambios y registros de configuración. Los sistemas de control de código fuente, compilación, pruebas y despliegue contienen el historial del trabajo de ingeniería. Los sistemas de monitorización y de [observabilidad](https://en.wikipedia.org/wiki/Observability_(software)) contienen datos de disponibilidad, latencia y errores. Las herramientas de encuestas, los sistemas financieros, los de recursos humanos y los repositorios de contratos contienen el resto. Un programa de métricas une estas fuentes sin perturbar el trabajo que se hace en ellas (véase el tema 1.5, Fuentes de datos e instrumentación).

El movimiento de datos desde las fuentes hasta un lugar donde puedan analizarse es una [canalización de datos](https://en.wikipedia.org/wiki/Data_pipeline), y el patrón clásico es [extraer, transformar, cargar](https://en.wikipedia.org/wiki/Extract,_transform,_load): leer de las fuentes, remodelar y depurar, y escribir en un almacén. El almacén puede ser un [almacén de datos](https://en.wikipedia.org/wiki/Data_warehouse), un repositorio integrado de datos de varios sistemas organizado para el análisis. Los programas llegan a estos sistemas mediante una [interfaz de programación de aplicaciones](https://en.wikipedia.org/wiki/Application_programming_interface), que es la forma en que un programa pide datos a otro de una manera definida. La calidad de lo que fluye determina la calidad de cada gráfico. La [calidad de los datos](https://en.wikipedia.org/wiki/Data_quality) abarca la exactitud, la completitud, la coherencia y la oportunidad, y la disciplina que la sostiene es la [gobernanza de datos](https://en.wikipedia.org/wiki/Data_governance).

El lado financiero merece cuidado. El [costo total de propiedad](https://en.wikipedia.org/wiki/Total_cost_of_ownership) de una herramienta incluye licencias, infraestructura, integración, formación, administración y el costo de abandonarla. El [bloqueo por proveedor](https://en.wikipedia.org/wiki/Vendor_lock-in) (vendor lock-in) es la situación en que cambiar de proveedor es tan costoso que el cliente queda atado en la práctica. Los programas de métricas están especialmente expuestos, porque las definiciones, el historial y los paneles se acumulan dentro de una herramienta, y extraerlos después es difícil.

Los objetivos ágiles dan forma al enfoque. La entrega continua se aplica al programa: levanta el camino funcional más delgado de una fuente a una vista para un equipo, aprende de su uso y amplía. La implicación continua de las partes interesadas significa que las personas que usarán los números participan en la elección de herramientas. La mejora continua y la evolución constante significan que se espera que las herramientas cambien, de modo que la portabilidad importa más que la perfección. Un ritmo sostenible significa que el programa no se convierte en un proyecto de ingeniería de datos que prive de recursos al trabajo que mide. Y las personas motivadas hacen mejor trabajo con herramientas que ayudaron a elegir y que entienden que con herramientas impuestas desde arriba, sobre todo las que se sienten como vigilancia (véase el tema 11.3, Implantar métricas sin sembrar miedo).

El tema se apoya en la orientación de diseño de paneles (véase el tema 11.1, Diseño de un panel de métricas de servicio) y en los temas de gobernanza de la Parte 1.

## Principios clave

- **Las preguntas antes que las herramientas.** Escribe primero las preguntas y las medidas, y mira luego qué herramientas necesitan.
- **Usa los sistemas de registro.** Toma los datos de donde se hace el trabajo y evita pedir a la gente que los introduzca dos veces.
- **Mantén las definiciones fuera de la herramienta.** Conserva las definiciones de las métricas en una forma llana y portable que sobreviva a un cambio de plataforma.
- **Prefiere los datos portables.** Guarda los datos en formatos abiertos, con interfaces documentadas, y conserva una salida.
- **Empieza delgado y crece.** Una fuente, una vista, un equipo; luego amplía.
- **Cuenta el costo completo.** Las licencias son una fracción del costo de la integración, la depuración de datos y el mantenimiento.
- **Protege a las personas.** Las herramientas deben agregar por equipos y servicios, hacer cumplir las reglas de acceso y dificultar la vigilancia.
- **Trata la canalización como un servicio.** Necesita un responsable, monitorización, pruebas y una forma de manejar los fallos.

## Definiciones de métricas

Las medidas siguientes describen la salud de las herramientas de métricas y de su suministro de datos. Son para el equipo del programa, para mantener honesta la infraestructura, y no deben usarse para valorar a las personas.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de fuentes | Proporción de los sistemas de registro necesarios para las medidas acordadas que alimentan automáticamente el almacén de métricas | fuentes conectadas y probadas / fuentes necesarias para las medidas acordadas | porcentaje | Inventario de fuentes; configuración de la canalización | Gestión de la información y la tecnología; gestión de la configuración del servicio | Entrega continua de la canalización | Trimestral |
| Fiabilidad de la canalización | Proporción de cargas de datos programadas que se completan a tiempo con comprobaciones superadas | cargas a tiempo con comprobaciones superadas / cargas programadas | porcentaje | Registros de la canalización y resultados de pruebas | Monitorización y gestión de eventos | Pruebas automatizadas y retroalimentación rápida | Semanal |
| Tiempo hasta una medida nueva | Tiempo transcurrido desde una solicitud aprobada de una medida nueva hasta su disponibilidad con una ficha de definición | días desde la aprobación hasta la publicación, mediana y percentil 85 | días | Registros de solicitudes y de versiones | Gestión de solicitudes de servicio; habilitación de cambios | Pequeños incrementos de valor | Trimestral |
| Tasa de conciliación | Proporción de cifras clave que coinciden entre el almacén de métricas y el sistema de origen en una comprobación por muestreo | cifras que coinciden dentro de la tolerancia / cifras comprobadas | porcentaje | Comprobaciones de conciliación | Gestión de la información y la tecnología | Retroalimentación digna de confianza | Mensual |
| Proporción de esfuerzo manual | Proporción del esfuerzo en informes recurrentes dedicada a la recopilación y la depuración manuales | horas en pasos manuales / horas totales en informes recurrentes | porcentaje | Estimaciones de tiempo; encuesta al equipo | Mejora continua | Eliminar el trabajo repetitivo | Trimestral |
| Preparación para la salida | Si las definiciones, el historial y los paneles pueden exportarse en una forma documentada y utilizable | exportaciones probadas y completas / pruebas de exportación planificadas | porcentaje | Registros de pruebas de exportación | Gestión de proveedores; gestión de la continuidad del servicio | Elecciones sostenibles | Anual |
| Costo de herramientas por equipo atendido | Costo anual completo de las herramientas del programa dividido por los equipos a los que sirve | (licencias + infraestructura + esfuerzo de mantenimiento) / equipos atendidos | moneda por equipo | Registros financieros y de esfuerzo | Gestión financiera del servicio | Ritmo sostenible | Anual |

Cuenta las fuentes por lo que necesitan las medidas acordadas y no por lo que existe, para que la cobertura no suba conectando sistemas irrelevantes. La conciliación requiere elegir de antemano una muestra y una tolerancia. El costo de herramientas por equipo atendido es una cifra descriptiva usada para comparar opciones, no una meta que haya que empujar a la baja. Incluye el esfuerzo de las personas que mantienen la canalización.

## Recomendaciones

### Decide qué necesitas

**1. Escribe los requisitos como preguntas y medidas.** Enumera las medidas que el programa ha acordado publicar (véase el tema 11.1, Diseño de un panel de métricas de servicio), las fuentes que necesita cada una, cuán frescas debe estar cada una, quién puede verla y cuánto tiempo debe conservarse el historial. Distingue lo imprescindible de las preferencias. Un documento corto de dos páginas es mejor que una larga solicitud de propuestas.

**2. Haz inventario de lo que ya posees.** Muchas organizaciones tienen funciones de analítica en sus herramientas de gestión de servicios, de ingeniería y de monitorización que no se usan. Muchas tienen hojas de cálculo, guiones e informes que ya responden parte de la necesidad. Empieza viendo qué pueden hacer. La herramienta más barata es la que ya está pagada y ya se entiende.

**3. Haz un balance de los datos antes que de la herramienta.** Para cada fuente, comprueba si los datos están completos, se introducen de forma coherente y son accesibles mediante una interfaz. Una herramienta no puede arreglar categorías de incidentes que nadie usa, registros de cambios creados a posteriori o marcas de tiempo sobrescritas. Parte del trabajo inicial más valioso es arreglar la captura de datos en el origen (véase el tema 7.4, Métricas de calidad de la configuración y la CMDB).

### Construir, comprar o combinar

**4. Compara construir y comprar por costo completo y por encaje.** Comprar una plataforma de analítica o un producto empaquetado de analítica de ingeniería trae conectores, gráficos y soporte ya hechos, al precio de las licencias, un modelo fijo del mundo y la dependencia. Construir una canalización y vistas trae encaje y control, al precio del tiempo de ingeniería y del mantenimiento. La mayoría de las organizaciones acaban combinando: usan los informes integrados donde son suficientemente buenos, una herramienta de análisis general para las vistas y conectores delgados construidos donde nada más encaja.

**5. Prueba un prototipo con datos reales.** Antes de comprometerte, haz una prueba con límite de tiempo con dos o tres de tus propias medidas, usando datos reales y usuarios reales. Comprueba cuánto tardaron las conexiones, cómo manejó la herramienta tus definiciones, si pudo mostrar distribuciones y percentiles y cómo controló el acceso. Las demostraciones comerciales usan datos limpios, y los tuyos no lo son.

**6. Planifica la salida antes de entrar.** Pregunta cómo pueden exportarse las definiciones, el historial y los paneles, y pruébalo. Prefiere las herramientas con interfaces abiertas y formatos estándar, y conserva tu propia copia de las definiciones de las métricas y de los datos depurados. El costo de irse forma parte del costo de quedarse, y una salida creíble mejora tu posición negociadora (véase el tema 8.4, Métricas de proveedores y contratos).

### Elige con criterios claros

**7. Usa criterios de selección neutrales respecto a los proveedores.** Los criterios útiles incluyen los siguientes. ¿Tienen las fuentes de datos que necesitas conectores mantenidos? ¿Pueden escribirse, versionarse y revisarse las definiciones? ¿Puede la herramienta mostrar distribuciones, percentiles y tendencias además de promedios y recuentos? ¿Agrega por equipos y servicios y permite restringir las vistas a nivel individual? ¿Admite acceso basado en roles y auditoría? ¿Se pueden exportar los datos en formatos abiertos? ¿Cómo maneja el proveedor los cambios, las caídas y los incidentes de seguridad? ¿Cuánto cuesta a la escala que esperas dentro de tres años?

**8. Desconfía de las puntuaciones integradas.** Algunas herramientas ofrecen de fábrica puntuaciones compuestas, clasificaciones de personas o índices de "productividad". Son fáciles de adoptar y difíciles de defender (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Comprueba si esas funciones pueden desactivarse, y fija la política antes de activar nada.

**9. Implica a las personas que la usarán.** Pide a los equipos que prueben con sus datos las opciones preseleccionadas. Sus preguntas expondrán límites que un documento de requisitos no expuso. Incluye pronto a seguridad, privacidad, finanzas y compras (véase el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades).

### Ejecuta la canalización como un servicio

**10. Automatiza, prueba y monitoriza la canalización.** Trata las cargas de datos como cualquier otro servicio de producción. Ejecuta comprobaciones automáticas de recuentos, rangos, duplicados y frescura. Alerta ante los fallos, y muestra el estado de calidad de los datos en el panel. Versiona la lógica de transformación y revisa sus cambios como código (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

**11. Mantén un catálogo de definiciones.** Mantén un catálogo compartido con la definición, la fórmula, la fuente, el responsable y los límites de cada medida. Puede ser un repositorio de archivos de texto plano, una herramienta de catálogo de datos o una wiki. Lo que importa es que sea la fuente de verdad del significado, y que los paneles lo lean o enlacen a él (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**12. Revisa las herramientas cada año.** Cada año, comprueba lo que cuestan las herramientas, qué partes usa el programa, dónde queda esfuerzo manual y qué opciones nuevas existen. Retira lo que nadie usa. Reconsidera el equilibrio entre construir y comprar a medida que madura el programa. Planifica el cambio como una parte normal del trabajo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura de fuentes | Conectar fuentes fáciles o irrelevantes; contar una conexión que no lleva datos utilizables | Contar por medidas acordadas; comprobar la completitud de los datos por fuente |
| Fiabilidad de la canalización | Aflojar las comprobaciones para que las cargas siempre pasen; programar menos cargas | Revisar la solidez de las comprobaciones; seguir la conciliación y los recuentos de filas de origen |
| Tiempo hasta una medida nueva | Publicar sin definiciones ni pruebas; estrechar lo que cuenta como medida nueva | Exigir la ficha de definición y una comprobación de conciliación para darla por completada |
| Tasa de conciliación | Elegir cifras fáciles de comprobar; ensanchar la tolerancia tras un fallo | Elegir las muestras antes de la comprobación; fijar la tolerancia de antemano; incluir cifras difíciles |
| Proporción de esfuerzo manual | Subestimar el trabajo manual; esconder esfuerzo en otros presupuestos | Preguntar a las personas que hacen el trabajo; comparar con el tiempo dedicado al final de cada ciclo de informes |
| Preparación para la salida | Probar una exportación parcial; contar un plan documentado como preparación | Ejecutar una restauración completa en otra herramienta sobre una muestra; verificar definiciones e historial |
| Costo de herramientas por equipo atendido | Excluir el esfuerzo de mantenimiento; añadir equipos sobre el papel | Incluir el tiempo del personal; contar los equipos que usan activamente sus vistas |

Una lectura sana muestra datos que llegan a tiempo y concilian con el origen, medidas nuevas que se publican con definiciones, un esfuerzo manual decreciente y una salida que se ha probado al menos una vez.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Informes integrados de cada herramienta | Barato; ya está ahí; se entiende | Silos; definiciones incoherentes entre herramientas |
| Una sola suite de un proveedor | Integrada; un solo contrato | Bloqueo; encaja con el modelo del proveedor, no con el tuyo |
| Producto empaquetado de analítica de ingeniería | Arranque rápido; conectores listos | Modelo fijo; riesgo de puntuación individual; costo a escala |
| Herramienta general de análisis y visualización | Flexible; hay muchas habilidades disponibles | Necesita un suministro de datos y habilidad de diseño |
| Almacén con una capa de transformación | Gran control; une datos de varias fuentes | Esfuerzo de ingeniería; necesita un responsable |
| Hojas de cálculo y guiones | Rápidos de empezar; sin licencia | Frágiles; dependen de individuos; difíciles de auditar |
| Pila de código abierto | Control; sin costo de licencia | Esfuerzo de mantenimiento; el soporte depende de ti |
| Métricas recogidas a mano | Funcionan sin herramientas | Lentas; propensas a errores; difíciles de sostener |

La respuesta en prosa es empezar con lo que ya tienes, añadir la conexión más delgada que responda a preguntas reales, mantener portables las definiciones y los datos y pasar a herramientas más pesadas solo cuando las más ligeras limiten demostrablemente las decisiones.

## Preguntas para conversar con tu equipo

**1. ¿Qué números producimos a mano cada mes, y qué haría falta para dejar de hacerlo?**
Enumera los informes manuales y las horas que llevan. Encuentra la fuente de cada uno y si tiene una interfaz. El facilitador debe preguntar qué informes podrían simplemente eliminarse. Acordad uno que automatizar y uno que retirar.

**2. Si nuestra herramienta de informes actual desapareciera mañana, ¿qué perderíamos?**
Nombra las definiciones, el historial y los paneles que existen solo dentro de ella. Comprueba cuáles son exportables. Acordad dónde guardar una copia.

**3. ¿En qué datos de nuestros sistemas confiamos menos, y por qué?**
Mira los hábitos de entrada, los valores por omisión y los campos sobrescritos. Estima hasta qué punto afecta cada distorsión a las medidas que publicamos. Acordad qué arreglo en el origen añadiría más confianza con el menor esfuerzo.

**4. ¿Qué deja ver la herramienta a la gente que no querríamos que viera?**
Comprueba las vistas a nivel individual, los registros de actividad y las clasificaciones. Decide qué restringir o desactivar, y escribe la regla antes de que nadie use la función.

**5. ¿Cuánto tardamos en añadir una medida nueva, y qué nos frena?**
Sigue una solicitud reciente desde la aprobación hasta la disponibilidad. Marca las esperas. Acordad qué eliminar, como aprobaciones, definiciones que faltan o depuración manual.

**6. ¿Cuál es el costo completo de esta herramienta para un equipo durante un año?**
Suma licencias, infraestructura, integración, formación y el tiempo de las personas que la mantienen. Compáralo con las decisiones que mejoró. Discutid qué dejaríamos de pagar.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos quieren datos que vengan del trabajo sin entrada adicional, y vistas que respondan a sus preguntas. Deben ayudar a elegir y probar las herramientas, poseer las definiciones de sus propias medidas y rechazar las funciones que clasifican a individuos. Su tiempo es el insumo más escaso, y las herramientas que les piden registrar el trabajo dos veces serán resistidas.

### Equipos de servicio y operaciones

Los equipos de operaciones gestionan las fuentes y a menudo la canalización. Deben tratar la canalización como un servicio con monitorización y pruebas, mantener fiables los campos de los datos de origen y avisar de los cambios en los sistemas de registro que romperán los conectores. Son los primeros en ver cuándo un número es erróneo.

### Liderazgo y gobernanza

Los líderes financian el programa y fijan las expectativas. Deben pedir el costo total, no el precio de la licencia, exigir portabilidad y una salida, resistirse a comprar una plataforma para resolver un problema de definiciones e insistir en reglas de privacidad y de acceso. Deben aceptar un comienzo modesto y juzgarlo por las decisiones que mejora.

### Clientes y usuarios

Los clientes y los usuarios rara vez ven las herramientas, y viven con sus consecuencias: los datos sobre ellos se almacenan, se combinan y se analizan. Merecen reglas claras sobre qué se recoge, cuánto tiempo se conserva, quién lo ve y cómo se protege. Donde las medidas se apoyan en sus comentarios, las herramientas deben respetar el consentimiento y el anonimato.

## En la práctica: un ejemplo de ITIL ágil

Una empresa regional de logística tiene una herramienta de gestión de servicios, un sistema de control de código fuente y despliegue, una plataforma de monitorización y una herramienta de encuestas, y cada una produce sus propios informes. La jefa de gestión de servicios quiere una vista única de la salud del servicio para 12 equipos. Un proveedor ofrece una plataforma de analítica todo en uno con un contrato de tres años. Las cifras siguientes son ilustrativas.

La jefa de gestión de servicios escribe primero las preguntas y las 14 medidas que los equipos y los líderes acordaron en las sesiones del panel. Hace inventario de lo que existe: la herramienta de gestión de servicios puede exportar datos de incidentes y de cambios mediante su interfaz, el sistema de despliegue ofrece marcas de tiempo de los despliegues y la plataforma de monitorización informa de la disponibilidad frente a los objetivos. Pide a un pequeño grupo de representantes de los equipos que prueben dos opciones con tres medidas y datos reales: la plataforma del proveedor y una combinación de una herramienta general de visualización con un pequeño almacén de datos y conectores delgados.

La prueba revela diferencias. La plataforma se conectó a todas las fuentes en dos días, pero calculaba el plazo de entrega como una media y no podía mostrar un percentil alto, tenía una "puntuación de productividad del equipo" integrada que no se podía desactivar y la exportación de las definiciones del panel producía un archivo que ninguna otra herramienta podía leer. La combinación tardó 11 días en conectarse, pero mostraba medianas y percentiles, guardaba las definiciones como texto plano en un repositorio y restringía los campos a nivel individual en el almacén de datos. El grupo descubre además que el 30 por ciento de los registros de cambios se creaba después del despliegue, de modo que el plazo de entrega era erróneo lo leyera la herramienta que lo leyera. Arreglar el hábito de entrada en el origen pasa a ser el primer trabajo.

La empresa elige la combinación. La cobertura de fuentes sube de 3 de las 8 fuentes necesarias a 7 de 8 en dos trimestres. La fiabilidad de la canalización parte del 71 por ciento de cargas a tiempo con comprobaciones superadas, y llega al 96 por ciento después de que el equipo añada pruebas y alertas de fallo. El tiempo hasta una medida nueva baja de una mediana de 31 días a 9. El esfuerzo manual del informe mensual baja de unas 40 horas a 6. Un director pregunta si podría añadirse la puntuación de productividad de la plataforma del proveedor para obtener una única clasificación de equipos. La jefa de gestión de servicios explica el análisis del tema 1.2, muestra lo que ocurrió cuando se usó una puntuación similar en otra parte de la empresa y propone la vista equilibrada actual. La decisión se registra, y la función de puntuación se desactiva en toda herramienta que la tenga.

## Perspectiva por sector

**Startup.** Usa lo que el producto y las herramientas existentes ya ofrecen. Una hoja de cálculo y los informes integrados de las herramientas que usas pueden responder a la mayoría de las preguntas iniciales. Resiste una plataforma de datos hasta que las preguntas sean estables y el esfuerzo manual duela. Mantén por escrito las definiciones de las métricas para que un cambio posterior sea fácil.

**Pequeña empresa.** Pocas medidas y pocos sistemas significan herramientas sencillas. Los informes integrados y una hoja de cálculo suelen bastar. Los principales riesgos son los datos guardados solo en la cabeza de una persona y las herramientas sin exportación. Elige productos que puedas abandonar, y escribe las definiciones.

**Gran empresa.** Muchos sistemas, muchos equipos y muchas definiciones aconsejan un almacén de datos gobernado, un catálogo de definiciones y vistas por capas. La propiedad federada funciona mejor que un equipo central que construye cada informe. Presta atención al bloqueo, al control de acceso, a la privacidad y a la evaluación de proveedores, y considera un pequeño equipo de plataforma que ofrezca la canalización como un servicio.

**Gobierno y sector público.** Las reglas de contratación, la soberanía de los datos y la accesibilidad afectan a la elección de herramientas. Los estándares abiertos y la portabilidad son valiosos porque los contratos son largos y las administraciones cambian. Planifica las evaluaciones de seguridad, la conservación de registros y las reglas de divulgación pública, y comprueba la orientación vigente sobre alojamiento y contratación (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos incluyen licencias o suscripciones, infraestructura, trabajo de integración y de conectores, depuración de datos, trabajo de definiciones y de catálogo, formación, soporte y el esfuerzo recurrente de mantener sana la canalización. Las opciones de construir conllevan costos de ingeniería fáciles de subestimar, y las de comprar conllevan tarifas que crecen con la escala y el costo de irse.

Los retornos provienen del esfuerzo de informes ahorrado, de respuestas más rápidas, de menos disputas sobre los números y de mejores decisiones basadas en datos de confianza. Construye el caso con tus propios datos: las horas dedicadas hoy a informes manuales, el número de versiones en competencia de una cifra, el retraso entre una pregunta y una respuesta y los costos de herramientas que se solapan. Evita citar cifras de analistas sobre los retornos de la analítica sin una fuente rastreable y relevante para tu contexto. Una comparación justa cuenta el costo completo de cada opción a lo largo de tres años, incluida la salida (véanse el tema 7.5, Costo del servicio y economía unitaria, y el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Primero la herramienta, las preguntas después.** Llega la plataforma y nadie sabe qué pedirle. Escribe primero las medidas.
- **Comprar para arreglar un problema de definiciones.** El desacuerdo sobre el significado persiste en cualquier herramienta. Resuelve las definiciones.
- **Puntuaciones individuales integradas.** Tientan y distorsionan. Desactívalas y fija primero la política.
- **Sin salida.** El historial y las definiciones quedan atrapados. Prueba la exportación y conserva una copia.
- **La canalización de una sola persona.** Se detiene cuando esa persona se va. Documéntala, pruébala y comparte la propiedad.
- **Doble entrada.** La gente registra el mismo trabajo dos veces, y baja la calidad de ambos. Toma los datos de los sistemas de registro.
- **Sobreingeniería temprana.** Llega una plataforma de datos antes de que una sola vista haya probado su valor. Empieza delgado.
- **Ignorar la calidad de los datos.** Los gráficos limpios sobre datos sucios engañan con más convicción. Arregla la captura en el origen.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Suministro de datos | Recopilación manual; hojas de cálculo | Algunos flujos automatizados; guiones individuales | Las fuentes acordadas alimentan un almacén compartido mediante canalizaciones probadas | Fiabilidad, conciliación y frescura gestionadas y visibles | Canalizaciones federadas con contratos compartidos entre equipos y proveedores; fuentes mejoradas a partir de la retroalimentación |
| Definiciones y catálogo | En la cabeza de la gente | Algunas documentadas | Un catálogo de definiciones con responsables, versionado y revisado | El catálogo dirige los paneles; los cambios se revisan con los usuarios | Definiciones copropiedad de equipos y proveedores; retiradas cuando dejan de informar decisiones |
| Elección y costo | Compras ad hoc | Herramientas que se solapan | Criterios escritos; salida probada; costo completo contado | Costo por equipo atendido y esfuerzo manual gestionados | Elecciones de herramientas revisadas con regularidad con los usuarios y adaptadas a medida que cambian las necesidades |

## Lista de verificación

- [ ] Las medidas acordadas y sus preguntas están escritas antes de comparar herramientas.
- [ ] Las herramientas e informes existentes se han inventariado y probado primero.
- [ ] La calidad de los datos en las fuentes principales se ha comprobado y se han arreglado las peores brechas.
- [ ] Los criterios de selección están escritos e incluyen distribuciones, control de acceso y exportación.
- [ ] Se hizo una prueba con límite de tiempo con datos reales y usuarios reales antes de cualquier compromiso.
- [ ] Las funciones de puntuación y clasificación individuales están desactivadas o restringidas por política.
- [ ] Las definiciones se guardan en un catálogo portable fuera de cualquier herramienta.
- [ ] La canalización tiene un responsable, comprobaciones automáticas, monitorización y una alerta de fallo.
- [ ] Se ha probado una exportación de definiciones y de historial.
- [ ] Se ha contado el costo completo a tres años, incluida la salida.

## Prompts de IA

**Escribe requisitos a partir de preguntas.**

```text
Aquí están las preguntas que hacen nuestras audiencias y las medidas que
planeamos publicar: [paste]. Redacta un documento de requisitos de dos páginas
para una herramienta o canalización de métricas. Cubre las fuentes de datos, la
frescura, el control de acceso, la retención, las distribuciones y los
percentiles, la exportación y la portabilidad, y una lista de imprescindibles
frente a preferencias. No nombres productos. Enumera tus supuestos y los puntos
que confirmar con los equipos.
```

**Planifica una prueba de herramientas.**

```text
Estamos comparando [options] para nuestro programa de métricas. Diseña una
prueba de dos semanas con tres de nuestras medidas y datos reales. Indica qué
probar, cómo puntuar las opciones frente a criterios escritos, quién debe
participar, cómo comprobar el control de acceso y la exportación y qué
evidencia registraremos. No afirmes resultados sobre productos concretos.
Enumera tus supuestos y riesgos.
```

**Revisa una canalización de datos.**

```text
Aquí hay una descripción de cómo fluyen los datos de [sources] a nuestros
paneles: [paste]. Identifica los puntos donde los datos podrían llegar tarde,
duplicarse, sobrescribirse o perderse, y sugiere comprobaciones automáticas
para cada uno. Propón una forma de conciliar las cifras clave con el origen. No
inventes el comportamiento de los sistemas. Enumera tus supuestos y lo que no
pudiste saber a partir de la descripción.
```

**Compara el costo completo.**

```text
Ayúdame a comparar el costo completo a tres años de construir, comprar y
combinar herramientas para nuestro programa de métricas. Enumera las categorías
de costo de cada opción, incluidas licencias, infraestructura, integración,
depuración de datos, formación, mantenimiento y salida. Proporciona una tabla
con espacios en blanco para nuestras propias cifras. No des precios. Enumera tus
supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la fuente de datos y la barrera de protección de cada medida al escribir los requisitos.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un registro de decisión sobre herramientas lleva definiciones, fuentes de datos y barreras de protección.

## Puntos clave

- Escribe primero las preguntas y las medidas, y elige las herramientas para servirlas.
- Usa los sistemas de registro, arregla la captura de datos en el origen y prueba la conciliación.
- Mantén portables las definiciones y los datos, y prueba la salida antes de comprometerte.
- Desactiva la puntuación y las clasificaciones a nivel individual, y fija la política antes de activar cualquier función.
- Ejecuta la canalización como un servicio con un responsable, pruebas y monitorización.
- Cuenta el costo completo a lo largo de varios años, y empieza por el camino más delgado que responda a preguntas reales.

## Referencias y lecturas complementarias

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
