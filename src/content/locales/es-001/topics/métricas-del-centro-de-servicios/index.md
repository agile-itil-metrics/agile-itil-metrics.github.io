# Métricas del centro de servicios

**Mide el centro de servicios por lo bien que ayuda a las personas a volver al trabajo y por lo mucho que enseña al resto de la organización, porque los recuentos de llamadas y los minutos al teléfono premian la velocidad y el volumen a expensas de ambas cosas.**

## Resumen y motivación

Para la mayoría de los usuarios, el centro de servicios es el servicio. Rara vez conocen a los ingenieros ni ven la canalización; conocen a quien responde cuando algo sale mal. Un [servicio de asistencia](https://en.wikipedia.org/wiki/Help_desk) (help desk) es el departamento o la persona que presta ayuda e información, normalmente sobre problemas informáticos. En el uso de la [gestión de servicios de TI (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), el centro de servicios es el punto único de contacto entre el proveedor y sus usuarios, y maneja tanto incidentes (interrupciones no planificadas o posibles interrupciones de un servicio) como solicitudes de servicio (peticiones rutinarias de algo que el servicio normalmente ofrece). En [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la práctica del centro de servicios se sitúa junto a la gestión de incidentes y la gestión de solicitudes de servicio, y se describe por su propósito y sus resultados, no por una lista fija de medidas. Este tema ofrece, por tanto, orientación práctica, no un requisito del marco.

Las medidas que han crecido en torno al centro provienen en gran parte de la tradición del [centro de llamadas](https://en.wikipedia.org/wiki/Call_centre): cuántos contactos llegaron, cuánto esperó la gente, cuántos se rindieron, cuánto duró cada contacto y cuántos se resolvieron al primer intento. Esas medidas son útiles y baratas, y también son las más fáciles del libro de convertir en metas que dañan el servicio. Las llamadas cortas parecen eficientes hasta que el mismo usuario vuelve a llamar tres veces. Un abandono bajo parece atento hasta que los agentes responden rápido y no resuelven nada. La tarea del tema es describir cada medida, indicar sus relojes y decir qué premia y qué oculta.

La visión ágil añade un segundo propósito. Cada contacto es evidencia de lo que los usuarios encuentran confuso, de lo que se rompe y de lo que desearían que hiciera el servicio. Un equipo ágil que libera a menudo necesita esa evidencia rápido y a nivel de servicio, no de ticket. Por eso el centro se mide dos veces: como una operación que atiende bien a las personas y como un sensor que alimenta la lista de pendientes. El volumen es el puente entre ambas. Un recuento creciente puede significar crecimiento, una mala versión, un artículo que falta o un canal nuevo, y la métrica por sí sola no puede decir cuál (véase el tema 3.2, Volumen y prioridad de incidentes, para saber cómo leer los recuentos por categoría y prioridad).

Términos clave: la [resolución en la primera llamada](https://en.wikipedia.org/wiki/First_call_resolution) es la proporción de contactos resueltos en el primer contacto; un [distribuidor automático de llamadas](https://en.wikipedia.org/wiki/Automatic_call_distributor) encamina las llamadas entrantes al personal disponible; un [acuerdo de nivel de servicio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) es un compromiso entre proveedor y cliente; un [percentil](https://en.wikipedia.org/wiki/Percentile) es el valor por debajo del cual cae una proporción dada de las observaciones, así que el percentil 85 del tiempo de atención es la duración dentro de la cual termina el 85 por ciento de los contactos; y la [satisfacción del cliente](https://en.wikipedia.org/wiki/Customer_satisfaction) (véase el tema 6.1, Métricas de satisfacción del cliente) es lo bien que un servicio cumple las expectativas de los usuarios.

Los términos "contacto" y "ticket" no son lo mismo. Un contacto es un intento de una persona de comunicarse con el centro por un canal como teléfono, chat, correo, portal, atención presencial o mensajería. Un ticket (también llamado registro) es lo que la herramienta ITSM crea para seguir el trabajo. Un ticket puede involucrar muchos contactos, y algunos contactos, como un restablecimiento de contraseña atendido en el acto, pueden crear un ticket solo por constancia. Mezclar ambos es la fuente más común de confusión en los informes del centro, por lo que las definiciones siguientes los cuentan por separado.

## Principios clave

- **Cuenta por separado los contactos y los tickets, y define ambos.** Un contacto es un intento de comunicarse con el centro; un ticket es un registro de trabajo. Los informes que los mezclan no pueden conciliarse.
- **Informa los tiempos como distribuciones.** Muestra la mediana y un percentil alto como el 85 o el 95, nunca solo un promedio, porque unos pocos contactos muy largos o muy cortos distorsionan la media.
- **Empareja cada medida de velocidad con una medida de resultado.** La velocidad de respuesta, el abandono y el tiempo de atención describen esfuerzo. La resolución y el recontacto describen si se ayudó al usuario.
- **Normaliza el volumen frente al uso.** Un recuento que sube porque creció la base de usuarios es una historia distinta de uno que sube por usuario.
- **Mide canales y servicios, no personas.** Estas métricas describen un centro, una cola, un servicio y un canal. Nunca se usan para clasificar ni sancionar a agentes individuales.
- **Trata el centro como un sensor.** Cada métrica debe conducir a una pregunta para los equipos de entrega sobre qué corregir, documentar o automatizar aguas arriba.

## Definiciones de métricas

La tabla enumera siete medidas que la mayoría de los centros de servicios pueden recoger de su plataforma de telefonía y de su herramienta ITSM. Los umbrales y las metas son para que cada centro los fije y los escriba; este tema no da valores de referencia.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volumen de contactos | Número de contactos recibidos por el centro, por canal y periodo | recuento de contactos creados en el periodo, por canal; se excluyen los contactos de prueba internos, las respuestas automáticas duplicadas de correo y las llamadas salientes que hizo el centro | recuento | Registro de la plataforma de telefonía o de chat; registros de contactos de la herramienta ITSM | Centro de servicios | Señal de demanda en el refinamiento de la lista de pendientes | Semanal |
| Tasa de contactos | Contactos en relación con el tamaño de la población atendida, para que el crecimiento no se confunda con un problema | contactos del periodo / usuarios activos o cuentas activas del periodo, escalado a 100 usuarios; el recuento de usuarios se toma del mismo periodo y la definición de "activo" está escrita | contactos por 100 usuarios | Registros de contactos y el sistema de identidad o de licencias | Centro de servicios; gestión de niveles de servicio | Demanda ajustada por uso en la revisión del producto | Mensual |
| Tiempo de respuesta | Espera desde el momento en que un contacto entra en la cola hasta que una persona o un motor automatizado interviene | el reloj arranca cuando el contacto entra en la cola y se detiene en la primera respuesta humana; los contactos abandonados se excluyen de esta medida y se cuentan en el abandono; informa la mediana y el percentil 85 | segundos (teléfono, chat); minutos u horas (correo, portal) | Plataforma de telefonía; plataforma de chat; marcas de tiempo de la herramienta ITSM | Centro de servicios | Acuerdo de trabajo sobre la capacidad de respuesta | Diaria durante las ventanas de revisión, semanal en la tendencia |
| Tasa de abandono | Proporción de contactos que terminan antes de que nadie intervenga, por decisión del usuario | contactos terminados por el usuario antes de la primera respuesta humana / contactos en cola; los contactos terminados dentro de un breve periodo de gracia (indicado en la definición, por ejemplo cinco segundos) se excluyen por accidentales | porcentaje | Plataforma de telefonía; plataforma de chat | Centro de servicios | Señal del costo del retraso en la revisión del servicio | Semanal |
| Tiempo de atención | Tiempo que el centro dedica a un contacto | el reloj arranca cuando una persona interviene y se detiene cuando termina el contacto, incluido el trabajo de documentación posterior al contacto; la espera del usuario se incluye solo si la definición lo dice; informa la mediana y el percentil 85, divididos por tipo de contacto | minutos | Plataforma de telefonía; plataforma de chat; registro de trabajo de la herramienta ITSM | Centro de servicios; gestión de incidentes | Señal de esfuerzo en el refinamiento y la planificación de la capacidad | Semanal |
| Tasa de resolución en el primer contacto | Proporción de contactos resueltos en el primer contacto sin ningún contacto posterior sobre el mismo asunto | contactos resueltos durante el contacto y no seguidos de un recontacto sobre el mismo asunto por el mismo usuario dentro de la ventana de recontacto / contactos elegibles; se excluyen las llamadas en que solo se requiere una derivación y las que no se espera que el centro resuelva | porcentaje | Campos de resolución y vinculación de la herramienta ITSM; confirmación del usuario cuando se recoge | Centro de servicios; gestión de incidentes | Comprobación de la definición de terminado, resuelto al primer contacto | Mensual |
| Tasa de recontacto | Proporción de contactos resueltos seguidos de otro contacto sobre el mismo asunto | contactos seguidos dentro de la ventana de recontacto (por ejemplo siete días, fijada en la definición) de otro contacto del mismo usuario sobre el mismo servicio o asunto / contactos resueltos en el periodo anterior; los contactos sobre un asunto nuevo se excluyen | porcentaje | Historial de vinculación y reaperturas de la herramienta ITSM; registros de contactos | Centro de servicios; gestión de incidentes | Tasa de defectos escapados | Mensual |

La resolución en el primer contacto tiene más de una definición defendible, por lo que la definición forma parte de la métrica. Algunos centros cuentan un contacto como resuelto cuando el agente cierra el ticket durante la llamada. Otros cuentan solo cuando el usuario no vuelve dentro de una ventana. La segunda es más difícil de recoger y más difícil de manipular, y es la que se usa aquí. Indica la ventana, indica qué cuenta como "el mismo asunto" y aplica ambas de la misma manera cada periodo.

## Recomendaciones

### Separa desde el principio los contactos de los tickets

**Da a los contactos y a los tickets sus propias definiciones, identificadores y recuentos.** Un contacto es un registro de un intento de comunicarse con el centro, y un ticket es un registro de trabajo. Vincúlalos en la herramienta para que un recontacto sobre el mismo asunto sea visible. Los informes que mezclan ambos dan una cifra de volumen que nadie puede conciliar con la plataforma de telefonía.

### Informa el volumen por canal, categoría y tasa normalizada

**Muestra el volumen total, el volumen por canal, el volumen por categoría y la tasa de contactos por 100 usuarios.** Los totales por sí solos confunden el crecimiento con los problemas. Una caída del volumen telefónico puede ser un traslado al chat, y una subida de los contactos del portal puede ser un éxito deliberado del autoservicio. Traza la serie durante al menos un año para que la estacionalidad, como el inicio de curso o el cierre del ejercicio fiscal, sea visible.

### Usa distribuciones para toda medida de tiempo

**Informa la mediana y un percentil alto para el tiempo de respuesta y el tiempo de atención.** El promedio de una distribución asimétrica no describe la experiencia de casi nadie. La mediana muestra el contacto típico, y el percentil 85 o 95 muestra lo mala que es la cola lenta. Indica en cuántos contactos se basa la cifra y marca la lectura como poco fiable cuando una cola atiende solo un puñado de contactos en el periodo (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

### Trata el abandono como una señal de la demanda y de la dotación

**Lee el abandono junto con el tiempo de respuesta y los patrones de llegada.** La gente abandona cuando la espera es mayor de lo que espera, por lo que la tasa sube con la espera, y la espera sube cuando las llegadas superan la capacidad. La [teoría de colas](https://en.wikipedia.org/wiki/Queueing_theory) explica por qué la espera crece bruscamente cuando una cola se acerca a la utilización total, razón por la cual un centro que opera casi al 100 por ciento de ocupación siempre tiene esperas largas y un abandono alto. Dota de personal según los patrones de llegada por hora y día, en lugar de según un promedio mensual, y muestra el abandono por hora del día (véase el tema 2.3, Trabajo en curso y teoría de colas).

### Define con cuidado la resolución en el primer contacto y mídela desde el lado del usuario

**Usa una definición basada en el recontacto y confírmala con una pregunta breve a los usuarios.** Contar solo los contactos que no vuelven dentro de una ventana indicada es más difícil de inflar que una marca del agente puesta al cerrar. Añade una comprobación de una pregunta, como "¿se resolvió tu asunto?", y compárala con la cifra de recontacto. Cuando ambas discrepan, la respuesta del usuario es la mejor guía, y la brecha señala dónde el cierre es prematuro.

### Usa el tiempo de atención para planificar, no para fijar metas

**Trata el tiempo de atención como un insumo de capacidad y un diagnóstico, y no fijes nunca una meta que los agentes deban superar.** Una meta de tiempo de atención paga por las prisas, los traslados tempranos y la documentación escasa. Usa la distribución por tipo de contacto para planificar la dotación y para encontrar contactos que tardan mucho más que otros similares, lo que a menudo señala un artículo que falta, una herramienta torpe o un proceso poco claro. Apunta a las causas del sistema, no a los agentes.

### Ata las métricas del centro al trabajo de entrega

**Revisa las categorías de contactos principales con los equipos que poseen los servicios.** Cada mes, toma las cinco categorías que generaron más contactos por 100 usuarios y pregunta qué cambio aguas arriba las eliminaría: una corrección, un artículo, un mensaje de error mejor o una vía de autoservicio. Anota las respuestas en la lista de pendientes del equipo propietario. Esto convierte los números del centro en trabajo de mejora y es el uso ágil más claro de los datos (véanse el tema 3.6, Métricas de gestión del conocimiento, y el tema 3.7, Métricas de autoservicio y automatización).

### Incluye todos los canales en las mismas definiciones

**Aplica las mismas reglas de reloj y de recuento al teléfono, el chat, el correo, el portal, la atención presencial y la mensajería.** Los canales asíncronos no tienen una cola en vivo, de modo que el tiempo de respuesta significa algo distinto en cada uno. Define el reloj por canal e informa cada uno por separado antes de combinarlos. Un centro que publica solo su mejor canal esconde la experiencia de todos los demás.

### Vincula las métricas a la experiencia del usuario

**Empareja las medidas operativas con una pregunta de satisfacción posterior al contacto y un espacio de texto libre.** Una respuesta rápida a un contacto grosero o inútil es un mal resultado, y los relojes no pueden verlo. Muestra la tasa de respuesta y la composición de los encuestados junto a la puntuación, porque solo responde una parte autoseleccionada de los usuarios (véase el tema 1.5, Fuentes de datos e instrumentación). Lee los comentarios con las personas que atienden los contactos, en un entorno de equipo.

### Mantén las métricas a nivel de equipo y de cola

**Informa por cola, canal, servicio y equipo, y reserva los datos a nivel de agente para conversaciones de acompañamiento en las que el propio agente participe.** Clasificar a los agentes individuales por tiempo de atención o tasa de resolución empuja a elegir los contactos fáciles y a evitar los difíciles. También daña la confianza en los datos, y los usuarios sienten el resultado en la calidad de la ayuda. Usa los números a nivel de equipo para preguntar qué necesita el sistema.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Volumen de contactos | Los agentes desalientan el registro redirigiendo a los usuarios a canales que no se cuentan, o dividen un contacto en varios para que una cola parezca ocupada; los gerentes fijan como meta un volumen menor | Tasa de contactos por 100 usuarios y una conciliación periódica de los recuentos de telefonía con los de tickets; una regla fija de que se cuente todo canal |
| Tasa de contactos | El denominador se elige a posteriori (por ejemplo una definición amplia de "activo") para que la tasa parezca mejor | Una definición escrita y fechada de "usuarios activos" y los recuentos en bruto mostrados junto a la tasa |
| Tiempo de respuesta | Los contactos se atienden con un saludo automático o con un traslado a una cola tranquila, o se contesta la llamada y se pone en espera; el correo recibe una respuesta automática que cuenta como respuesta | Definir el reloj como la primera respuesta humana, y seguir el abandono y el recontacto a su lado |
| Tasa de abandono | Se cuelga a quienes llaman antes de ponerlos en cola, se alarga el periodo de gracia o una oferta de devolución de llamada se cuenta como un contacto atendido | Percentiles del tiempo de respuesta, tasa de finalización de devoluciones de llamada y un periodo de gracia publicado |
| Tiempo de atención | Las llamadas se apresuran, se trasladan pronto o se terminan antes de resolver el problema; las notas quedan escasas; el trabajo se traslada al tiempo posterior al contacto que el reloj excluye | Resolución en el primer contacto, tasa de recontacto y una revisión por muestreo de la calidad de la documentación por el equipo |
| Tasa de resolución en el primer contacto | Los tickets se cierran durante la llamada sea cual sea el resultado, "el mismo asunto" se interpreta de forma estrecha o los contactos difíciles se clasifican como "no se espera que se resuelvan" | Tasa de recontacto, una confirmación del usuario de una pregunta y auditorías periódicas de las exclusiones por el equipo |
| Tasa de recontacto | Se pide a los usuarios que abran un ticket nuevo para un seguimiento, o los seguimientos se registran en otra categoría para que no se vinculen | Reglas de vinculación en la herramienta, una auditoría por muestreo de contactos repetidos sin vincular y la resolución informada por el usuario |

Una lectura sana es un conjunto de cifras que concuerdan entre sí. El tiempo de respuesta y el abandono se mueven juntos, el tiempo de atención varía con el tipo de contacto y no con la meta del día, la resolución en el primer contacto y el recontacto son imágenes especulares que suman cerca de su techo, y la respuesta del usuario a "¿se resolvió tu asunto?" concuerda con la cifra de recontacto. Una sola cifra que mejora bruscamente mientras las demás se mantienen planas es motivo para mirar cómo se recoge antes de celebrar. Un centro manipulado suele mostrar los síntomas en el recontacto, en categorías repetidas del volumen y en quejas crecientes.

## Compensaciones: ventajas e inconvenientes

| Elección | Ventaja | Costo o riesgo |
| --- | --- | --- |
| Tiempo medio de atención como titular | Sencillo, disponible en toda plataforma, fácil de explicar | Premia las prisas, oculta la cola e invita a metas que dañan la resolución |
| Mediana y percentil 85 para los tiempos | Describe el caso típico y la cola lenta | Necesita suficientes contactos para ser estable y algo más de explicación |
| Resolución en el primer contacto por marca de cierre del agente | Fácil de recoger | Fácil de inflar y difícil de comparar entre centros |
| Resolución en el primer contacto por ventana de recontacto | Difícil de manipular y más cercana a la experiencia del usuario | Necesita una buena vinculación en la herramienta y espera a que pase la ventana antes de poder informarse |
| Abandono con periodo de gracia | Elimina los cuelgues accidentales | El periodo de gracia puede alargarse para halagar la cifra |
| Tasa de contactos por 100 usuarios | Separa el crecimiento de los problemas | Depende de un recuento de usuarios fiable y de una definición clara de "activo" |
| Encuesta posterior al contacto | Capta lo que los relojes no pueden | Tasas de respuesta bajas y desiguales, y un sesgo hacia usuarios con sentimientos fuertes |
| Informar solo por equipo y cola | Protege la confianza y se centra en el sistema | Da menos detalle para el acompañamiento individual, que necesita un proceso distinto y privado |

Ningún conjunto de medidas elimina la tensión entre la velocidad y el cuidado. Un centro que responde cada contacto en segundos y resuelve poco tiene una buena cola y un mal servicio, y un centro que se toma el tiempo de resolver bien mostrará tiempos de atención y de espera más largos. El camino es acordar qué resultado importa más este trimestre, hacer explícito el equilibrio y revisar el par de métricas que lo mantiene. Más rápido es mejor solo mientras la resolución se mantenga.

## Preguntas para conversar con tu equipo

**1. ¿Qué significa "contacto" aquí, y coincide nuestro recuento con lo que informan por separado la plataforma de telefonía y la herramienta ITSM?**
Pide al grupo que siga un día de contactos por todos los canales y compare los recuentos de los dos sistemas. Anota los contactos que nunca se convierten en tickets y los tickets que nunca empiezan como contactos. Un facilitador debe esperar una brecha al principio y tratarla como un hallazgo sobre las definiciones, no como un fallo de las personas. Acordad una regla para el próximo informe y quién la posee.

**2. Cuando decimos que un contacto se resolvió en el primer contacto, ¿cómo sabemos que el usuario estaría de acuerdo?**
Revisa diez contactos recientes marcados como resoluciones en el primer contacto y comprueba si alguno de los usuarios volvió sobre el mismo asunto. Pregunta qué podría haber hecho de otro modo el agente en los que sí volvieron. La conversación suele mostrar dónde se cierra antes de que el usuario esté listo. Decidid si añadir una confirmación de una pregunta y cuál debe ser la ventana de recontacto.

**3. ¿Qué le pasa a la persona en espera, y cuándo se rinde?**
Mira la curva de abandono por tiempo esperado. La mayoría de los centros encuentra un punto a partir del cual la gente se va en gran número, y ese punto es el límite práctico de la cola. Pregunta qué devoluciones de llamada, chats o respuestas automáticas se ofrecen y si alguna se cuenta como atendida cuando el asunto no se resuelve. El facilitador puede usar esto para abrir una conversación sobre dotar de personal por hora, no por mes.

**4. ¿Cuáles de nuestros números de tiempo de atención cambiarían si prestáramos atención al trabajo posterior al contacto y a la espera?**
Enumera lo que incluye el reloj y lo que deja fuera. Pregunta si alguien ha sentido presión para acortar las llamadas y qué hizo. Esta pregunta es más fácil de responder en un equipo que en un informe, así que da a las personas la oportunidad de hablar sin atribución. Acordad una definición y si el tiempo de atención se usará solo para planificar.

**5. ¿Qué cinco categorías generaron más contactos por 100 usuarios el trimestre pasado, y quién es responsable de la corrección de cada una?**
Lleva los datos de las categorías y a los responsables de los servicios subyacentes a la misma mesa. Para cada categoría, pregunta si la mejor respuesta es una corrección, un artículo, un mensaje mejor o una vía de autoservicio. El objetivo es salir con elementos en una lista de pendientes y responsables con nombre. Revisad la lista el próximo trimestre para ver cuáles se movieron.

**6. ¿Estamos informando esto a nivel de equipo y de cola, y alguien lo usa para comparar a individuos?**
Pregunta directamente al grupo si alguna de estas cifras se ha usado para juzgar a una persona y qué efecto tuvo. Discutid qué dejaría de hacer el centro si terminara la comparación individual y qué empezaría a hacer. El facilitador debe anotar cualquier ejemplo y llevarlo al responsable de las métricas para una decisión sobre la política. El objetivo es un compromiso escrito de que los datos describen el sistema.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega obtienen del centro la mejor vista de su propio servicio. Los contactos por 100 usuarios tras una versión muestran rápido si un cambio confundió a la gente, y las categorías muestran qué corregir a continuación. Los equipos deben esperar una revisión mensual de las categorías principales y tratarlas como insumo de la lista de pendientes, sin culpar al centro por informar de lo que le dicen los usuarios. Pide al centro muestras de contactos además de recuentos, porque las palabras que usan los usuarios suelen revelar un problema de etiquetado o de diseño.

### Equipos de servicio y operaciones

El personal del centro y sus responsables necesitan cifras que les ayuden a planificar y mejorar sin convertirse en metas. La dotación por hora a partir de los patrones de llegada, las revisiones de recontactos y las peticiones de artículos son los productos más útiles. El personal debe opinar sobre cómo se definen las métricas, porque sabe dónde los relojes engañan. Debe ver primero las cifras de su propio equipo y poder cuestionarlas.

### Liderazgo y gobernanza

Los líderes necesitan un conjunto corto de cifras que concuerden entre sí: volumen y tasa de contactos, tiempo de respuesta y abandono, resolución en el primer contacto y recontacto, y una puntuación de satisfacción del usuario con su tasa de respuesta. Deben pedir distribuciones y notas sobre los cambios de definición, y deben resistirse a fijar una única meta sobre el tiempo de atención o el volumen. Las metas sobre la velocidad por sí sola invitan a la manipulación descrita arriba. La gobernanza debe registrar quién posee cada definición (véase el tema 1.4, Gobernanza y propiedad de las métricas).

### Clientes y usuarios

A los usuarios les importa si lograron comunicarse, si los trataron bien y si el problema se mantuvo resuelto. No les importa el tiempo de atención. Contarles lo que mide el centro y actuar sobre sus comentarios genera confianza, y también lo hace asegurar que los canales que prefieren se miden y cuentan con personal. Los clientes que compran el servicio se benefician de compromisos claros en un SLA o en un acuerdo de experiencia (véanse el tema 5.1, Métricas de SLA, OLA y XLA, y el tema 6.2, Acuerdos de nivel de experiencia).

## En la práctica: un ejemplo de ITIL ágil

El departamento de TI de un hospital regional opera un centro de servicios con una docena de personas para unos 4.000 usuarios clínicos y administrativos. Los números siguientes son ilustrativos y no provienen de ninguna organización real.

La vista semanal del equipo muestra 1.900 contactos (ilustrativo), lo que supone una tasa de contactos de 47,5 contactos por 100 usuarios (ilustrativo). El tiempo de respuesta telefónico tiene una mediana de 40 segundos y un percentil 85 de 6 minutos (ilustrativo). El abandono es del 14 por ciento (ilustrativo) y sube con fuerza las mañanas de los días laborables entre las 08:00 y las 09:30. La mediana del tiempo de atención es de 7 minutos, y el percentil 85 es de 22 minutos (ilustrativo). La resolución en el primer contacto por ventana de recontacto es del 61 por ciento (ilustrativo), y la tasa de recontacto a siete días es del 19 por ciento (ilustrativo).

En la revisión mensual, el responsable del centro y el equipo de aplicaciones clínicas miran las categorías. Los problemas de inicio de sesión y de credencial explican una gran parte de los contactos de la mañana, y un cambio reciente en el inicio de sesión de la aplicación clínica produjo un pico de contactos sobre el mismo mensaje de error. El centro y el equipo de aplicaciones deciden hacer tres cosas. Cambiarán el mensaje de error y añadirán un enlace al artículo, añadirán una opción de devolución de llamada para el pico de la mañana y adelantarán una hora el inicio de un turno para cubrir el patrón de llegada de las 08:00. Revisarán el abandono, el recontacto y la tasa de contactos de esa categoría pasadas cuatro semanas.

A mitad del trimestre un gerente propone una meta de tiempo de atención de 5 minutos para reducir la cola. El equipo muestra que los contactos del percentil 85 son los lentos que más importan y que una meta empujaría a los agentes a terminar las llamadas antes de tiempo. También notan que la cifra de resolución en el primer contacto ha subido al 78 por ciento (ilustrativo) en una semana mientras la tasa de recontacto subía al 27 por ciento (ilustrativo). Una revisión descubre que algunos turnos habían empezado a cerrar los tickets durante la llamada con una nota al usuario para que volviera a llamar, lo que contaba como una resolución en el primer contacto. El equipo restablece la definición basada en el recontacto, añade la pregunta de confirmación del usuario y abandona la meta de tiempo de atención. A partir de entonces se informan juntos el abandono, el tiempo de respuesta y el recontacto.

## Perspectiva por sector

**Startup.** El centro suele ser una bandeja compartida o un canal de chat atendido por quien esté libre. Cuenta los contactos por canal, etiqueta la categoría y mira las cinco principales cada mes con las personas que construyen el producto. No compres una plataforma de centro de llamadas antes de que el volumen la justifique, y no fijes metas de velocidad cuando dos personas atienden todos los contactos.

**Pequeña empresa.** Una persona o un proveedor externo suele operar un centro de servicios alojado. Usa los informes estándar de la herramienta, pide por escrito al proveedor sus definiciones de contacto, resolución y abandono, y exporta de vez en cuando los datos en bruto. Una pregunta breve y recurrente a los usuarios, como "¿se resolvió tu asunto?", da más información que un panel largo.

**Gran empresa.** Muchas colas, idiomas, herramientas y proveedores llevan a definiciones distintas de la misma palabra. Acordad una definición compartida de contacto, resolución en el primer contacto y recontacto, y un conjunto común de canales. Informa por cola y servicio, con una vista estándar para la dirección, y usa los datos de gestión de la fuerza laboral para dotar de personal según los patrones de llegada. Compara colas solo después de comprobar que usan las mismas definiciones.

**Gobierno y sector público.** Los registros pueden tener obligaciones de conservación, acceso, auditoría y privacidad, y un contrato puede fijar las métricas y metas de un centro externalizado. Lee con espíritu crítico las métricas del contrato y añade al informe las medidas de barrera de protección aunque no se exijan. Conserva el rastro de auditoría de los cambios de definición y evita recoger datos personales que no hagan falta. Los servicios públicos suelen atender a usuarios con poca capacidad de elegir canal, por lo que la accesibilidad de cada canal forma parte del panorama (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación para mejores métricas del centro es un servicio más barato y mejor, y el retorno llega en tres lugares. Primero, menos contactos repetidos: cada recontacto es trabajo que el centro no necesitaba hacer y tiempo que el usuario no quería gastar. Segundo, correcciones aguas arriba: los datos de categorías del centro pueden eliminar clases enteras de contacto cuando los equipos de entrega actúan sobre ellos. Tercero, mejor dotación de personal: los datos de patrones de llegada permiten a los gerentes colocar a las personas cuando los usuarios las necesitan, lo que reduce a la vez el abandono y el tiempo ocioso.

El costo de la recogida es modesto cuando la plataforma de telefonía y la herramienta ITSM ya registran los eventos. Los costos principales son el tiempo para acordar definiciones, arreglar la vinculación entre contactos y tickets, añadir una breve pregunta posterior al contacto y revisar los datos con los equipos de entrega.

Aquí no se ofrece ninguna cifra de retorno, porque las cifras publicadas varían con la organización y su método, y ninguna se ha verificado para este tema. Estima el retorno a partir de tus propios datos. Toma el recuento de recontactos y un tiempo de atención medido, multiplícalos por el costo de una hora de agente y compáralo con el costo de la corrección. Describe el resultado como una estimación con sus supuestos y revísalo después del cambio (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Fijar metas sobre el tiempo medio de atención.** Premia las prisas y los traslados tempranos. Usa la distribución por tipo de contacto para planificar y empareja con la resolución en el primer contacto y el recontacto.
- **Contar una marca de cierre puesta por el agente como resolución en el primer contacto.** Puede ponerse sea cual sea el resultado. Usa una ventana de recontacto y una confirmación del usuario.
- **Clasificar a agentes individuales.** Empuja a elegir lo fácil y a comportamientos defensivos. Informa por equipo y cola, y mantén las conversaciones individuales privadas y de apoyo.
- **Informar un promedio de todos los canales que oculta el canal más débil.** El teléfono, el chat y el correo se comportan de forma distinta. Informa cada canal por separado antes de combinar.
- **Leer el volumen sin un denominador.** Una subida puede ser crecimiento. Muestra los contactos por 100 usuarios y la mezcla de categorías.
- **Dejar al centro fuera de las decisiones de entrega.** Los recuentos que se informan a un panel y nunca se discuten con el equipo de producto se desperdician. Celebra una revisión mensual de las categorías principales con sus responsables.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Cada persona cuenta los contactos de forma distinta | Se escriben unas pocas definiciones para algunas colas | Una definición escrita por métrica, con el inicio y el fin del reloj y las exclusiones | Los cambios de definición se registran y se revisan según un calendario | Definiciones compartidas con proveedores y clientes y revisadas cuando dejan de informar decisiones |
| Captura y calidad de los datos | Recuentos reunidos a mano a partir de exportaciones | Datos de telefonía y de ITSM informados por separado | Contactos y tickets vinculados, con captura automatizada entre canales | Vinculación, integridad y conciliación medidas y con seguimiento de su tendencia | Datos de contactos compartidos entre equipos y proveedores mediante interfaces acordadas |
| Uso en la mejora | Números informados pero rara vez discutidos | Revisión ocasional de los periodos de más actividad | Revisión mensual de las categorías principales con los responsables del servicio | Mejoras planificadas, financiadas y comprobadas frente al recontacto y el volumen | Los datos del centro orientan las prioridades de la lista de pendientes de los equipos de producto y proveedores |
| Barreras de protección y confianza | Metas de velocidad aplicadas a individuos | Cierta conciencia de la manipulación | Medidas emparejadas informadas juntas y ninguna clasificación individual | Comprobaciones de manipulación auditadas por el equipo y confirmación del usuario en uso | Usuarios y personal ayudan a fijar las medidas y ven los resultados |

## Lista de verificación

- [ ] Los contactos y los tickets se definen y se cuentan por separado, y los recuentos concilian.
- [ ] Cada canal tiene un reloj escrito para el tiempo de respuesta y una forma declarada de tratar las respuestas automáticas.
- [ ] Las medidas de tiempo se informan como la mediana y un percentil alto con el tamaño de la muestra.
- [ ] El abandono tiene un periodo de gracia escrito y se muestra con el tiempo de respuesta.
- [ ] La resolución en el primer contacto usa una ventana de recontacto y un significado declarado de "el mismo asunto".
- [ ] Se recoge una confirmación del usuario de una pregunta, con su tasa de respuesta mostrada.
- [ ] La tasa de contactos por 100 usuarios se informa, con una definición escrita de "usuario activo".
- [ ] No se fija ninguna meta de tiempo de atención para los agentes, y ninguna métrica clasifica a individuos.
- [ ] Las categorías de contactos principales se revisan cada mes con los equipos propietarios, y las acciones van a una lista de pendientes.
- [ ] Las definiciones están bajo control de versiones y cada cambio está fechado.

## Prompts de IA

**Redacta definiciones precisas para las medidas básicas del centro.**

```text
Estoy escribiendo definiciones para estas medidas del centro de servicios:
[list of measures, for example contact volume, time to answer, abandonment,
handle time, first contact resolution, recontact]. Nuestros canales son [list
channels] y nuestras herramientas son [telephony or chat platform and ITSM
tool]. Para cada medida, redacta la definición, la fórmula, el inicio y el fin
del reloj, las inclusiones y exclusiones, la unidad y la fuente de datos. Usa
los mismos términos en todo momento y no inventes valores de referencia ni
metas. Enumera tus supuestos y las preguntas que debería responder para
terminar.
```

**Revisa un conjunto de cifras del centro en busca de señales de manipulación.**

```text
Estas son las cifras de nuestro centro de servicios para [period]: [paste
figures such as volume, time to answer percentiles, abandonment, handle time
percentiles, first contact resolution, recontact]. Nuestras definiciones son
[paste definitions]. Busca patrones que sugieran que una cifra mejoró por cómo
se recoge y no porque el servicio mejorara, y sugiere qué comprobar en los
datos para cada una. No acuses a individuos ni inventes umbrales. Enumera tus
supuestos y lo que no pudiste determinar con los datos dados.
```

**Prepara una revisión mensual de las categorías de contactos principales.**

```text
Estoy preparando una revisión mensual de las categorías de contactos del centro
de servicios para [service or team]. Tengo [category counts and contacts per 100
users for the last three months]. Redacta un orden del día, una plantilla de
tabla breve y una lista de preguntas para hacer a cada responsable de servicio
sobre causas, correcciones, artículos y opciones de autoservicio. Sugiere cómo
registrar las acciones en una lista de pendientes. No inventes números ni
causas. Enumera tus supuestos y los datos que debería llevar.
```

**Diseña una encuesta breve posterior al contacto.**

```text
Quiero medir si los usuarios se sintieron ayudados tras contactar con el
[service desk name] por [channel]. Redacta [number] preguntas neutrales,
incluida una sobre si se resolvió el asunto, un plan de cuándo enviarlas y cómo
informar de la tasa de respuesta y de la composición de los encuestados. Señala
la redacción que pueda sesgar las respuestas y anota las consideraciones de
privacidad dado que los datos se guardarán en [tool]. No inventes tasas de
respuesta de referencia. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar qué tema define una métrica relacionada y la barrera de protección que debe acompañar a una medida del centro.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen cada métrica emparejada con un vector de manipulación y una barrera de protección.

## Puntos clave

- Cuenta por separado los contactos y los tickets, defínelos ambos y normaliza el volumen frente al tamaño de la base de usuarios.
- Informa los tiempos como la mediana y un percentil alto, e indica en cuántos contactos se basa cada cifra.
- Lee la velocidad de respuesta, el abandono y el tiempo de atención como signos de esfuerzo, y empareja con la resolución en el primer contacto y el recontacto como signos de resultado.
- Define la resolución en el primer contacto según si el usuario vuelve, y confírmala con una comprobación de una pregunta.
- Usa el centro como un sensor: revisa las categorías principales cada mes con los equipos que poseen los servicios.
- Mide colas, canales y servicios, y no clasifiques nunca a agentes individuales.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
