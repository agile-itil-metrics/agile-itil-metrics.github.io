# Fuentes de datos e instrumentación

**Una métrica es tan fiable como los eventos que la sustentan, así que nombra el sistema de registro de cada número, captura los eventos de forma automática en el momento en que ocurren y prueba la canalización con tanto cuidado como pruebas el gráfico.**

## Resumen y motivación

La mayoría de los programas de métricas dedican su esfuerzo a los paneles y casi nada a las tuberías que los alimentan. Es al revés. Un gráfico pulido construido sobre marcas de tiempo incoherentes, un campo de estado que nadie actualiza o una integración que se detuvo en silencio el mes pasado parece autorizado y está equivocado. Este tema cubre la base poco vistosa del resto del libro: de dónde provienen los datos de servicio y de entrega, qué tan fiable es cada fuente y qué fallos de calidad de los datos invalidan una métrica antes de que nadie lo note.

Las fuentes se agrupan en unas pocas familias. Una herramienta de [gestión de servicios de TI (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) registra incidentes, solicitudes, problemas y cambios, que [ITIL](https://en.wikipedia.org/wiki/ITIL) trata como los registros centrales de la operación del servicio. Un [sistema de seguimiento de incidencias](https://en.wikipedia.org/wiki/Issue_tracking_system) registra la lista de pendientes y el movimiento de los elementos de trabajo de los equipos ágiles. El [control de versiones](https://en.wikipedia.org/wiki/Version_control) registra commits, ramas y fusiones. Una canalización de [integración y entrega continuas (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) registra compilaciones, resultados de pruebas y despliegues. Las plataformas de monitorización y [observabilidad](https://en.wikipedia.org/wiki/Observability_(software)) emiten telemetría: métricas, registros y trazas de los sistemas en ejecución. Una [base de datos de gestión de la configuración (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) registra los servicios y componentes con los que se relacionan las cosas. Las encuestas registran lo que ningún sistema puede observar, como la satisfacción y el esfuerzo.

Un evento de despliegue escrito por una canalización es objetivo y difícil de falsificar, un estado de ticket cambiado horas después del trabajo es un recuerdo y la respuesta a una encuesta es una percepción. Saber qué tipo de registro hay detrás de un número te dice qué fallo buscar primero.

Las visiones ágil e ITIL se encuentran en los mismos datos: ambas son máquinas de estados con marcas de tiempo, así que registra cada cambio de estado como un evento con una hora fiable y deriva las métricas de los eventos.

Tres términos se repiten en este tema. Un **sistema de registro** (system of record) es la única fuente autorizada para un hecho, por ejemplo la canalización para "ocurrió un despliegue". La **instrumentación** es la captura deliberada de eventos, mediante código, configuración o integración de herramientas, de modo que una métrica pueda calcularse sin que nadie la teclee. Un **modelo de estados** (status model) es el conjunto de estados en que puede estar un elemento de trabajo o un registro y los movimientos permitidos entre ellos. El modelo de estados decide qué relojes pueden calcularse.

A escala empresarial y del sector público el problema se agrava. Los datos pasan por conectores, trabajos de [extracción, transformación y carga (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) y capas de informes, y cada salto es una oportunidad para que el significado se desvíe. Un campo que significa una cosa en el origen puede significar algo sutilmente distinto en el almacén, y el número sigue pareciendo plausible. El remedio es acortar la distancia entre el evento y el panel y comprobar la canalización con un calendario.


## Principios clave

- **Captura eventos, no resúmenes.** Guarda los cambios de estado en bruto con marcas de tiempo y calcula las métricas a partir de ellos, de modo que una definición pueda cambiar sin perder el historial.
- **Prefiere la observación al autoinforme.** Donde un sistema pueda ver el evento, usa eso; reserva los informes de las personas para lo que solo las personas pueden decir.
- **Nombra un sistema de registro por hecho.** Las fuentes duplicadas discrepan, y la discrepancia erosiona la confianza en ambas.
- **Diseña el modelo de estados antes que la métrica.** Un reloj no puede calcularse a partir de estados que no existen o que significan cosas distintas en equipos distintos.
- **Trata la canalización como un producto.** Tiene responsables, pruebas, monitorización y un registro de cambios, porque la calidad de los datos se degrada en silencio.
- **Muestra la procedencia.** Cada número de un panel debe conducir a sus registros de origen en uno o dos clics.
- **Recopila solo lo que vas a usar y protégelo.** Cada campo es un costo y, cuando afecta a personas, un deber de privacidad.

## Definiciones de métricas

Las métricas siguientes miden la salud del propio suministro de datos. Son el panel de instrumentos de los instrumentos. 

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de fuentes | Proporción de servicios y equipos dentro del alcance cuyos eventos llegan automáticamente al almacén de métricas | servicios o equipos con un flujo automatizado / servicios o equipos dentro del alcance; el "alcance" figura en el registro de métricas | porcentaje | Registro de métricas y configuración de la canalización | Medición e informes; gestión de la configuración de servicios | Acuerdo de trabajo del equipo sobre herramientas | Trimestral |
| Completitud de marcas de tiempo | Proporción de elementos de trabajo cerrados que llevan todas las marcas de tiempo necesarias para los relojes de la métrica | elementos cerrados con todas las marcas de tiempo de cambio de estado requeridas / elementos cerrados en el período; se excluyen los elementos aún abiertos | porcentaje | Historial de la herramienta ITSM o del gestor de incidencias | Gestión de incidentes; gestión de solicitudes de servicio | Historial del tablero o del flujo de trabajo | Mensual |
| Tasa de retrofechado | Proporción de cambios de estado registrados a posteriori, medida por el intervalo entre la hora del evento y la hora en que se introdujo | cambios de estado introducidos más de 24 horas después de la hora del evento / cambios de estado en el período; el reloj empieza en el evento y se detiene en la entrada | porcentaje | Pista de auditoría del gestor, u hora del evento de la canalización frente a hora de entrada | Habilitación de cambios; gestión de incidentes | Definición de terminado | Mensual |
| Actualidad de los datos | Qué tan antiguo es el dato más reciente de un panel cuando se consulta | hora de consulta menos la hora del evento más reciente cargado; reportar la mediana y el percentil 95 | horas | Registro de ejecución de la canalización y registro de carga del panel | Medición e informes | Preparación de la revisión con las partes interesadas | Semanal |
| Varianza de conciliación | Discrepancia entre dos fuentes para el mismo recuento | diferencia absoluta entre los dos recuentos / recuento de la fuente de registro, para un período y alcance fijos | porcentaje | Fuente de registro y capa de informes | Gestión de niveles de servicio; gestión financiera | Comprobaciones del informe de versión | Mensual |
| Deriva del modelo de estados | Número de nombres de estado o transiciones distintos en uso en comparación con el modelo documentado | estados o transiciones no documentados observados en el período (recuento); se excluyen los documentados | recuento | Configuración del flujo de trabajo del gestor e historial de eventos | Mejora continua | Acuerdos de trabajo sobre el flujo de trabajo | Trimestral |
| Tasa de respuesta a encuestas | Proporción de personas invitadas que completaron una encuesta | respuestas completadas / invitaciones entregadas; se excluyen las invitaciones rebotadas | porcentaje | Herramienta de encuestas | Gestión de niveles de servicio; experiencia del cliente | Revisión con las partes interesadas y comentarios de mejora | Por oleada de encuesta |

La completitud de marcas de tiempo cuenta solo los elementos cerrados, de modo que una acumulación de elementos antiguos abiertos no pueda ocultar una laguna. La tasa de retrofechado usa un umbral de 24 horas como ejemplo; cada equipo elige un umbral que se ajuste a su trabajo y lo escribe. 

## Recomendaciones

### Asigna cada métrica a su fuente

**1. Construye un mapa de fuentes antes de construir un panel.** Para cada métrica, registra el sistema de registro, el evento que inicia el reloj, el evento que lo detiene, el responsable de la fuente y el modo de fallo conocido. Si no puedes nombrar el sistema, todavía no sabes de dónde viene el número. Mantén el mapa en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**2. Elige un sistema de registro por hecho.** Un despliegue lo registra la canalización, un incidente la herramienta ITSM, un cambio de código el control de versiones y una relación de servicio la CMDB. Donde dos herramientas guarden el mismo hecho, decide cuál prevalece y haz que la otra lea de ella. La conciliación se convierte entonces en una comprobación, no en un debate.

### Captura los eventos en el momento en que ocurren

**3. Instrumenta el evento, no el informe.** Deja que la canalización registre el despliegue, que el alojamiento del control de versiones registre la fusión y que el sistema de monitorización registre la alerta. Los datos que dependen de que alguien se acuerde de actualizar un campo se degradan con la distancia al evento y con la carga de trabajo. Donde exista un evento automatizado, prefiérelo a un sustituto introducido por una persona para el mismo hecho (véase el tema 2.8, Métricas DORA).

**4. Haz que los cambios de estado sean un efecto secundario del trabajo.** Si una fusión de rama mueve el elemento de trabajo a "en revisión" o un despliegue lo mueve a "publicado", nadie tiene que acordarse. Las integraciones entre el control de versiones, la canalización y el gestor eliminan la mayor parte del retrofechado.

**5. Conserva los eventos en bruto y hazlos inmutables.** Guarda cada cambio de estado con la hora del evento, la hora de entrada y el tipo de actor (persona o automatización). Escribe las correcciones como eventos nuevos, no como sobrescrituras, de modo que el historial de la corrección sea en sí mismo un dato. 

### Acierta con el tiempo

**6. Registra el tiempo con un solo estándar.** Guarda las marcas de tiempo en [Tiempo Universal Coordinado (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) en un formato inequívoco, como el definido por ISO 8601 y RFC 3339, y convierte a hora local solo para mostrarla. Las zonas horarias mezcladas y los cambios de horario de verano producen en silencio duraciones negativas y relojes desfasados una hora.

**7. Escribe las reglas de los relojes donde viven los datos.** Para cada medida de tiempo, indica qué evento inicia el reloj, cuál lo detiene y qué estados lo pausan. Un estado de pausa es una decisión de diseño. Reporta con qué frecuencia se usa cada estado de pausa, porque el reloj es donde con más frecuencia se moldean los datos de servicio (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

### Diseña el modelo de estados

**8. Mantén el modelo de estados pequeño, compartido y documentado.** Cada estado adicional invita a una interpretación distinta por parte de cada equipo. Define en una frase qué significa cada estado, quién puede mover trabajo a él y qué transiciones se permiten. La antigüedad de los elementos de trabajo y las medidas de flujo dependen de este modelo (véase el tema 2.1, Medidas de flujo), y la comparación entre equipos depende de que los equipos usen las mismas palabras para los mismos estados. Cuando los datos te sorprendan, sospecha primero del flujo de trabajo: registra cada cambio en un flujo de trabajo o campo con su fecha y motivo, y cuenta los estados no documentados como una señal de deriva.

### Mantén honesta la canalización

**9. Prueba la canalización como software.** Comprueba los recuentos de filas frente al origen, comprueba que los campos obligatorios estén presentes, busca duplicados y alerta cuando un flujo se detenga. Añade un indicador de actualidad a cada panel para que quien lo vea sepa qué antigüedad tienen los datos. Un fallo silencioso de un conector que deja en pantalla los números del mes pasado es uno de los fallos más comunes y más dañinos de este ámbito (véase el tema 11.1, Diseño de un panel de métricas de servicio).

**10. Concilia con un calendario y muestrea a mano.** Compara un recuento de la capa de informes con el origen para un período fijo e investiga la diferencia. Lee después una pequeña muestra de registros en bruto. Una muestra de quince minutos suele encontrar lo que las comprobaciones automáticas no pueden, como un estado usado de forma inesperada.

### Trata con cuidado a las personas y las encuestas

**11. Reserva las encuestas para lo que solo una persona puede decirte.** La satisfacción, el esfuerzo, la confianza y el bienestar no pueden observarse a partir de datos del sistema. Pregunta directamente, mantén las encuestas breves, varía el momento y reporta la tasa de respuesta y quién respondió, ya que las personas que responden difieren de las que no, una forma de [sesgo de selección](https://en.wikipedia.org/wiki/Selection_bias). Lee íntegros los comentarios abiertos (véase el tema 6.1, Métricas de satisfacción del cliente).

**12. Protege los datos personales y mantén los datos a nivel de equipo.** Los datos de eventos sobre el trabajo pueden identificar a personas mediante la autoría de commits, los campos de asignado y los registros de chat. Recopila al nivel que necesita la métrica, agrega a equipos y servicios y aplica las normas de privacidad de tu jurisdicción y de tu organización. Los datos a nivel individual, una vez recopilados, tienden a usarse para clasificar, lo que corrompe la fuente (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura de fuentes | Contar un servicio como cubierto una vez conectado un flujo, aunque casi no transporte eventos; dejar fuera del alcance los servicios difíciles | Volumen de eventos por servicio cubierto comparado con su actividad conocida; revisar la lista del alcance frente al catálogo de servicios |
| Completitud de marcas de tiempo | Rellenar las marcas de tiempo obligatorias con la hora de cierre para satisfacer la validación | Distribución de los intervalos entre estados consecutivos; muestrear elementos cerrados para ver si los tiempos son plausibles |
| Tasa de retrofechado | Introducir los cambios justo dentro del umbral; ampliar el umbral; registrar todos los cambios mediante una sola actualización masiva | Patrón de la hora de entrada; proporción de cambios hechos por automatización frente a los hechos a mano; auditoría de las ediciones masivas |
| Actualidad de los datos | Mostrar la hora de la última actualización en lugar de la hora del evento más reciente | Hora del evento más reciente mostrada en el panel; alerta cuando un flujo no entrega eventos nuevos |
| Varianza de conciliación | Elegir el período o el alcance que concilia; ajustar la capa de informes para que coincida con el origen sin hallar la causa | Fijar el alcance y el período de antemano; registrar cada causa hallada y revisar las causas cada trimestre |
| Deriva del modelo de estados | Reutilizar un estado existente para un significado nuevo y evitar que lo detecten; añadir estados sin registrarlos | Comparar la configuración del flujo de trabajo con el registro en cada revisión; leer una muestra de elementos en estados inusuales |
| Tasa de respuesta a encuestas | Invitar solo a personas que probablemente respondan; enviar recordatorios a usuarios satisfechos; ofrecer recompensas que sesguen las respuestas | Composición de los encuestados comparada con la población de usuarios; distribución de las respuestas por oleada; comentarios abiertos leídos en la revisión |

Una lectura sana es un conjunto de números aburridos: cobertura alta, retrofechado bajo y descendente, actualidad dentro de lo prometido y una causa conocida siempre que la varianza de conciliación no sea cero. Cuando un número se mueve, alguien puede decir si cambió el trabajo o cambió el instrumento.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Captura automatizada de eventos | Objetiva, oportuna, poco esfuerzo una vez construida | Cubre solo lo instrumentado; se rompe en silencio cuando cambian las herramientas |
| Entrada manual y actualizaciones de estado | Capta contexto y juicio; funciona sin integración | Tardía, incoherente y abierta a la manipulación |
| Un almacén central de métricas | Una definición, un lugar donde probar y gobernar | Necesita financiación y responsables; puede convertirse en un cuello de botella |
| Cada equipo guarda sus propios datos | Se ajusta al trabajo local; rápido de empezar | Las definiciones divergen; las consolidaciones son poco fiables |
| Eventos en bruto conservados a largo plazo | Las definiciones pueden cambiar y el historial puede recalcularse | Costo de almacenamiento y de privacidad; más que proteger |

Automatiza lo observable, pregunta a las personas lo que no lo es y conserva el registro en bruto. Invierte primero en las fuentes que hay detrás de las dos o tres métricas que el equipo usa realmente, no en una plataforma de datos para cada número imaginable.

## Preguntas para conversar con tu equipo

**1. Para nuestra métrica más importante, ¿qué sistema es la fuente de registro y cómo lo sabemos?**
Pide al grupo que rastree el número desde el panel hasta el primer evento. Anota cada lugar donde una persona o una transformación toca los datos. El facilitador debe buscar pasos que nadie sabe explicar, porque ahí debería empezar la primera investigación.

**2. ¿Cuáles de nuestras marcas de tiempo las escribe un sistema y cuáles las teclea una persona?**
Enumera los relojes en uso, como el tiempo de respuesta, el tiempo de resolución y el tiempo de ciclo. Marca cada inicio y cada parada como automático o manual. Para los manuales, pregunta cuánto tiempo después del evento se hace normalmente la entrada. La discusión suele mostrar que la métrica más debatida descansa sobre la marca de tiempo menos fiable.

**3. ¿Qué significan nuestros estados y todos los equipos quieren decir lo mismo?**
Pon el flujo de trabajo en una pizarra y pide a personas de distintos equipos que expliquen cada estado con sus propias palabras. Compara las explicaciones. Cuenta los estados en que el reloj se pausa y pregunta quién puede usarlos y por qué. Acordad un cambio para eliminar la ambigüedad y regístralo con el motivo.

**4. ¿Cómo nos enteraríamos de que un flujo se detuvo en silencio?**
Pregunta cuándo comprobó alguien por última vez que los datos del panel están al día. Discute qué alerta o indicador de actualidad detectaría un conector detenido en el plazo de un día.  El facilitador debe insistir en un responsable con nombre y una comprobación concreta, no en una intención general de ser cuidadosos.

**5. ¿Qué recopilamos que nunca usamos y qué usamos que no recopilamos bien?**
Pon la lista de campos y la lista de métricas una al lado de la otra. Marca los campos que no alimentan ninguna decisión y las métricas que descansan en campos deficientes. Decide un campo que dejar de recopilar y uno que mejorar este trimestre.

**6. ¿Quién responde nuestras encuestas y quién no?**
Compara a los encuestados con la población de usuarios o de miembros del equipo. Mira las tasas de respuesta por grupo y por hora del día o de la semana. Discute qué podría significar el silencio y cómo llegar a los grupos callados sin presión. Acordad cómo se mostrará la tasa de respuesta junto a cada resultado de encuesta.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega generan la mayoría de los datos objetivos: commits, revisiones, compilaciones y despliegues. Se benefician de una instrumentación que convierta los cambios de estado en un efecto secundario del trabajo, de modo que el tablero se mantenga honesto sin esfuerzo adicional. Deben mantener pequeño el flujo de trabajo y desconfiar de usar la actividad del control de versiones como medida del esfuerzo (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo).

### Equipos de servicio y operaciones

Los equipos de servicio dependen de registros creados por personas bajo presión, a menudo durante un incidente. Las reglas de los relojes, los estados de pausa y los campos de prioridad son donde se produce la deriva. Los equipos de operaciones deben hacer automática la captura de los tiempos clave siempre que sea posible, como la hora de la alerta y la hora del acuse de recibo, auditar el uso de los estados de pausa y mantener los datos de monitorización separados del registro del ticket para que cada uno pueda comprobar al otro (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

### Liderazgo y gobernanza

Los líderes deciden cuánto invertir en los cimientos de datos y fijan los incentivos que determinan si los datos siguen siendo honestos. Deben preguntar de dónde viene un número antes de preguntar por qué se movió, financiar la propiedad de la canalización como trabajo continuo y esperar una fecha de actualidad y una definición en cada informe. Los órganos de gobernanza deben tratar un cambio documentado en una fuente o en una definición como un hecho normal, no como un fallo.

### Clientes y usuarios

Los usuarios aportan los datos que más importan sobre la experiencia, normalmente respondiendo encuestas, valorando interacciones o reportando problemas. Necesitan saber qué se recopila, por qué y qué cambiará como resultado. Las encuestas breves y el seguimiento visible mantienen sana la tasa de respuesta. Los informes de nivel de servicio dirigidos a clientes deben indicar sus fuentes y definiciones (véase el tema 5.2, SLI, SLO y presupuestos de errores).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio tiene un equipo de plataforma, tres equipos de producto y un centro de servicios. Todos los números de este ejemplo son ilustrativos.

La dirección pregunta por qué el plazo de entrega de los cambios en el informe mensual bajó de una mediana de 9 días a 3 días en un trimestre, mientras los equipos de producto no reportan ningún cambio en su forma de trabajar. El jefe de ingeniería de plataforma sospecha del instrumento y pide un mapa de fuentes de la métrica.

El mapa muestra que el plazo empieza cuando se crea un registro de cambio en la herramienta ITSM y se detiene cuando su estado pasa a "implementado". Dos equipos de producto habían empezado a crear el registro cuando el trabajo ya estaba listo, de modo que el reloj arrancaba tarde. Una muestra de 40 registros encuentra que 12 se crearon el mismo día del despliegue. La tasa de retrofechado, medida como el intervalo entre el evento de despliegue en la canalización y la entrada del estado "implementado", fue del 31 por ciento por encima del umbral de 24 horas que el equipo había fijado.

El equipo hace tres cambios. Primero, el inicio del reloj pasa al primer commit vinculado al cambio, tomado del control de versiones, y la parada pasa al evento de despliegue escrito por la canalización. Segundo, la herramienta ITSM recibe el estado de la canalización, de modo que "implementado" ya no se teclea. Tercero, el panel gana un indicador de actualidad y una comprobación de conciliación de los recuentos de cambios entre la canalización y la herramienta ITSM.

Con la nueva definición, la mediana del plazo es de 7 días y el percentil 95 de 21 días, y la tasa de retrofechado baja al 4 por ciento. La dirección lee primero los 7 días como un resultado peor. El jefe de plataforma explica que el número antiguo era un artefacto de la creación tardía de registros. La decisión, anotada en el registro de decisiones, es reexpresar los dos trimestres anteriores a partir de eventos en bruto y marcar el cambio de definición en el gráfico. El riesgo de manipulación que el equipo detectó fue sutil: nadie falsificó un número, pero la creación tardía de registros produjo una cifra halagadora. La varianza de conciliación actúa ahora como barrera de protección, y la muestra de registros en bruto se revisa cada trimestre.

## Perspectiva por sector

**Empresa emergente.** Los datos son escasos y la confianza es alta, lo cual ayuda. Usa la canalización y el control de versiones como fuentes principales, porque no requieren esfuerzo adicional, y mantén el modelo de estados en un puñado de estados. Escribe cada definición y su fuente en una sola página y revísala cuando el equipo se duplique.

**Pequeña empresa.** A menudo una persona dirige TI sobre un centro de servicios alojado. Usa los informes de la herramienta, pide al proveedor sus definiciones por escrito y exporta periódicamente los datos en bruto para evitar la dependencia.

**Gran empresa.** Muchas herramientas, muchos equipos y capas de integración crean el mayor riesgo de deriva de definiciones. Invierte en un modelo de eventos compartido, un almacén central de métricas con responsables con nombre y comprobaciones automatizadas de conciliación y actualidad. Acordad un pequeño vocabulario de estados común a toda la empresa y deja que los equipos añadan estados locales solo con una correspondencia declarada con él.

**Gobierno y sector público.** Los registros pueden estar sujetos a leyes de conservación, auditoría, acceso y privacidad, y la contratación pública puede atar herramientas y formatos de datos. Trátalo como entrada de diseño: mantén una pista de auditoría, documenta el linaje desde el evento hasta el informe y negocia derechos de exportación de datos en los contratos. Las obligaciones de información hacen esenciales las definiciones documentadas (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de este tema tiene tres partes. La primera es el esfuerzo de construcción: integraciones, un almacén de métricas y la depuración del modelo de estados. La segunda es el esfuerzo de operación: un responsable de la canalización, la monitorización de los flujos y una rutina trimestral de conciliación y muestreo. La tercera es el costo de los controles de privacidad y seguridad de los datos que conservas.

El retorno procede de decisiones tomadas con números que significan lo que parecen significar. Los datos deficientes conducen a inversiones equivocadas, discusiones sobre de quién es la cifra correcta y resultados reexpresados que dañan la confianza. Describe el beneficio mediante patrones que puedas medir tú mismo: el tiempo que lleva producir un informe mensual antes y después, el número de disputas de conciliación por trimestre y la tasa de retrofechado y la completitud de marcas de tiempo a lo largo del tiempo. El costo total de propiedad está dominado por las personas, así que cuenta las horas del responsable de la canalización.

## Antipatrones y trampas

- **Construir el panel antes que el mapa de fuentes.** El gráfico parece terminado mientras su significado es desconocido. Mapea primero la fuente, los relojes y el responsable.
- **Fiarse de las actualizaciones manuales de estado para medidas de tiempo.** La entrada tardía convierte los relojes en ficción. Automatiza las transiciones a partir de los eventos de la canalización y del control de versiones siempre que existan.
- **Varios sistemas de registro para un hecho.** Siguen las disputas. Elige uno y haz que los demás lean de él.
- **Cambios silenciosos de definición.** La línea de tendencia pierde sentido. Registra cada cambio con su motivo y márcalo en el gráfico.
- **Promedios de datos incompletos.** Las marcas de tiempo ausentes no son aleatorias, ya que los elementos incómodos suelen ser los omitidos. Reporta la completitud de marcas de tiempo junto al resultado.
- **Recopilarlo todo por si resulta útil.** El costo y el riesgo de privacidad suben sin servir a ninguna decisión. Recopila lo que necesita una pregunta con nombre.
- **Sin indicador de actualidad.** Un panel desactualizado se ve igual que uno al día. Muestra la antigüedad del evento más reciente en cada vista.
- **Datos a nivel individual sin propósito.** Tientan a clasificar y dañan la fuente. Agrega a nivel de equipo y servicio y restringe el acceso.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Fuentes y captura | Números reunidos a mano a partir de exportaciones | Algunas herramientas alimentan un informe automáticamente; otras no | Cada métrica tiene un sistema de registro con nombre y captura automatizada donde existe un evento | Cobertura y completitud medidas y con tendencias | Eventos compartidos entre equipos y proveedores mediante interfaces acordadas, con contratos de exportación |
| Modelos de tiempo y de estados | Cada persona registra y lee el tiempo de forma distinta | Algunos equipos documentan su flujo de trabajo | Un estándar de tiempo y un vocabulario de estados compartido con reglas de reloj escritas | Deriva y retrofechado monitorizados, y cambios registrados con sus motivos | Modelos revisados conjuntamente con proveedores y clientes cuando dejan de informar decisiones |
| Calidad de la canalización | Los fallos se descubren cuando alguien se queja | Comprobaciones manuales ocasionales | Recuentos de filas, comprobaciones de duplicados e indicador de actualidad en cada panel | Conciliación programada y causas revisadas; la canalización tiene un responsable | La salud de la canalización se reporta como un servicio, con mejoras financiadas |
| Práctica de encuestas y privacidad | Encuestas improvisadas; sin revisión de privacidad | Preguntas estándar en algunos equipos | Encuestas breves y regulares con la tasa de respuesta visible; datos a nivel de equipo | Composición de los encuestados revisada y atendida | Resultados de encuestas y práctica de privacidad compartidos abiertamente con los usuarios |

## Lista de verificación

- [ ] Cada métrica reportada tiene un sistema de registro con nombre y un responsable de la fuente con nombre.
- [ ] El mapa de fuentes se guarda en el registro de métricas.
- [ ] Cada medida de tiempo declara dónde empieza, se detiene y se pausa su reloj.
- [ ] Las marcas de tiempo se guardan en UTC en un formato inequívoco y los relojes de los servidores están sincronizados.
- [ ] Los cambios de estado los genera la automatización siempre que exista un evento.
- [ ] Los eventos en bruto se conservan con la hora del evento y la hora de entrada, y las correcciones son eventos nuevos.
- [ ] El modelo de estados está documentado y cada cambio se registra con su motivo.
- [ ] Cada panel muestra la antigüedad de sus datos más recientes.
- [ ] Los recuentos se concilian con el origen con un calendario y se registran las causas.
- [ ] Se lee una muestra de registros en bruto cada trimestre.
- [ ] La tasa de respuesta a encuestas y la composición de los encuestados se muestran con cada resultado de encuesta.
- [ ] Los datos personales se minimizan y se agregan a nivel de equipo y servicio.

## Prompts de IA

**Construye un mapa de fuentes para una métrica.**

```text
Estoy documentando los datos que hay detrás de esta métrica: [nombre de la
métrica], definida como [definición]. Nuestras herramientas son [lista de
herramientas, por ejemplo gestor de incidencias, herramienta ITSM, canalización,
monitorización]. Redacta un mapa de fuentes con estos campos: el evento que
inicia el reloj, el evento que lo detiene, el sistema de registro de cada uno,
quién o qué crea el evento (persona o automatización), modos de fallo probables
y comprobaciones que detectarían cada fallo. No inventes funciones de las
herramientas ni valores de referencia. Enumera tus supuestos y las preguntas que
debería responder para completar el mapa.
```

**Revisa la ambigüedad de un modelo de estados.**

```text
Este es el flujo de trabajo de [equipo o servicio]: [lista de estados y
transiciones permitidas, con un significado de una línea para cada uno si se
conoce]. Los relojes que calculamos a partir de él son [lista de relojes].
Identifica los estados ambiguos, los estados en los que un reloj podría
detenerse o pausarse de forma engañosa y los lugares donde dos equipos podrían
leer la misma palabra de manera distinta. Sugiere un modelo más pequeño que siga
sosteniendo los relojes y di qué se perdería. No conjetures cómo está
configurada nuestra herramienta. Enumera tus supuestos.
```

**Diseña comprobaciones de calidad de datos para un flujo.**

```text
Cargamos [tipo de datos, por ejemplo registros de cambios] desde [sistema de
origen] hacia [destino] cada [calendario]. Los campos obligatorios son [lista de
campos]. Propón un conjunto práctico de comprobaciones de completitud,
duplicados, actualidad y conciliación con el origen, con una alerta sugerida y
un rol responsable para cada una. Mantén el conjunto lo bastante pequeño para
que un equipo de [tamaño del equipo] pueda mantenerlo. No inventes umbrales;
pídeme los que necesites. Enumera tus supuestos.
```

**Redacta una encuesta breve y un plan para su tasa de respuesta.**

```text
Quiero medir [tema de experiencia, por ejemplo el esfuerzo para que se cumpla
una solicitud] para [audiencia]. Redacta [número] preguntas neutrales, un plan de
cuándo y cómo enviarlas y cómo reportar la tasa de respuesta y la composición de
los encuestados. Señala la redacción que podría sesgar las respuestas y anota
las consideraciones de privacidad dado que los datos se guardarán en [herramienta
o ubicación]. No inventes tasas de respuesta de referencia. Enumera tus
supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar qué tema define la métrica que estás instrumentando y la barrera de protección que debería acompañarla.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema de métricas nuevo o editado nombra su fuente de datos y sus relojes.

## Puntos clave

- Toda métrica depende de un sistema de registro con nombre, así que mapea la fuente antes de construir el gráfico.
- Captura los eventos automáticamente en el momento en que ocurren y conserva los eventos en bruto para que las definiciones puedan cambiar sin perder el historial.
- El tiempo también es un dato: usa un solo estándar, escribe las reglas de los relojes y vigila el retrofechado.
- Mantén el modelo de estados pequeño, compartido y documentado, y registra cada cambio.
- Trata la canalización como un producto con un responsable, pruebas, un indicador de actualidad y conciliación programada.
- Usa las encuestas para lo que solo las personas pueden decir, muestra la tasa de respuesta y mantén los datos personales a nivel de equipo.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
