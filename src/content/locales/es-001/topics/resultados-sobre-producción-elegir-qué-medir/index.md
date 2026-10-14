# Resultados sobre producción: elegir qué medir

**Una buena métrica de servicio o de entrega describe un cambio en la vida de un cliente o en la salud de un servicio, así que elige las medidas preguntando qué cambió para alguien y trata los recuentos de actividad y de producción, como mucho, como evidencia de apoyo.**

## Resumen y motivación

La mayoría de los paneles empiezan por lo que es fácil de contar: tickets cerrados, cambios desplegados, historias terminadas, llamadas atendidas. Ya llevan marca de tiempo en alguna herramienta y están bajo el control del equipo. Ninguno dice si alguien está mejor.

Cuatro palabras ayudan a no confundirse. La **actividad** es el esfuerzo gastado: horas trabajadas, reuniones celebradas, llamadas hechas. La **producción** (output) es lo que el trabajo generó: una versión, un ticket resuelto, un artículo publicado. El **resultado** (outcome) es el cambio que esa producción hizo posible para alguien: un cliente completa una tarea en la mitad de tiempo, una clínica abre a la hora prevista, un problema repetido deja de repetirse. El **impacto** es el efecto a más largo plazo sobre los objetivos de la organización, como clientes retenidos o un menor costo de atención. En ITIL 4 (la edición de 2019 del marco publicada por AXELOS, hoy propiedad de PeopleCert), una producción es un entregable tangible o intangible de una actividad, y un resultado es un efecto para una parte interesada hecho posible por una o más producciones.

[ITIL](https://en.wikipedia.org/wiki/ITIL) añade una segunda idea que sirve como prueba para cualquier métrica: el valor es [cocreado](https://en.wikipedia.org/wiki/Co-creation) por el proveedor del servicio y el consumidor del servicio, no entregado por uno al otro. Esto sigue el pensamiento de la [lógica dominante del servicio](https://en.wikipedia.org/wiki/Service-dominant_logic), la visión de marketing según la cual el valor surge en el uso, cuando el cliente aplica las capacidades de un proveedor a sus propios objetivos. Una métrica medida enteramente del lado del proveedor no puede demostrar valor. Un equipo puede cerrar todos los tickets y entregar todas las versiones a tiempo mientras los usuarios no encuentran su trabajo más fácil.

La visión ágil llega al mismo lugar por otro camino. Los principios detrás del Manifiesto del [desarrollo ágil de software](https://en.wikipedia.org/wiki/Agile_software_development) dicen que el software que funciona es la principal medida del progreso y que la simplicidad, el arte de maximizar la cantidad de trabajo no realizado, es esencial. Ninguno premia una pila mayor de producción. Ambos apuntan a entregar algo que funcione para sus usuarios y a no construir lo que nadie necesita.

Las métricas de producción y de actividad no son erróneas. Gestionan el flujo, la capacidad y el costo, y los temas posteriores las usan mucho (véase el tema 2.1, Medidas de flujo). El error es dejar que sustituyan al valor. Una [métrica de vanidad](https://en.wikipedia.org/wiki/Vanity_metric) es un número fácil de reportar que casi siempre sube: usuarios registrados en total, tickets atendidos acumulados, funciones entregadas hasta la fecha. Hace que un equipo parezca ocupado y no dice a nadie qué hacer a continuación. La prueba: ¿podría este número subir mientras la situación del cliente empeora?

Las métricas de resultado son más difíciles. Se mueven despacio, dependen de factores fuera del control del equipo y tienen ruido. Un cambio en un flujo de restablecimiento de contraseña puede tardar semanas en notarse en el volumen de contactos, que también afecta una campaña de marketing. La respuesta es elegir los resultados con cuidado, emparejarlos con las medidas de producción por las que el equipo se guía día a día y ser honesto sobre cuánto del movimiento puede atribuirse el equipo.

Un **indicador adelantado** es una medida que se mueve antes del resultado que te importa y sobre la que se puede influir pronto, como la proporción de servicios nuevos con una guía operativa de soporte probada. Un **indicador rezagado** reporta el resultado después de los hechos, como el número de incidentes graves o la pérdida de clientes. Los economistas usan el mismo emparejamiento al clasificar un [indicador económico](https://en.wikipedia.org/wiki/Economic_indicator) como adelantado, coincidente o rezagado. Los equipos necesitan ambos: los rezagados dicen si acertaste, y los adelantados te dan algo sobre lo que actuar mientras aún hay tiempo. Un indicador adelantado es solo una hipótesis hasta que hayas comprobado, durante varios períodos, que realmente se mueve antes que el resultado.

Las medidas de resultado son un remedio parcial contra la manipulación (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Una medida cercana a lo que experimentan los clientes es más difícil de mejorar sin ayudarlos, y la distancia al resultado es donde vive la manipulación. Los marcos que ayudan a elegir se tratan por separado (véase el tema 1.7, Marcos de medición).

## Principios clave

- **Parte del resultado y trabaja hacia atrás.** Nombra el cambio que quieres para un cliente, un servicio o la organización, pregunta después qué evidencia lo mostraría y pregunta luego qué señales adelantadas aparecerían antes.
- **El valor se cocrea, así que incluye el lado del consumidor.** Al menos una medida de cada conjunto debe provenir de las personas que usan el servicio: su éxito, su esfuerzo o su experiencia, y no solo los registros del proveedor.
- **Mantén visible la cadena.** Muestra la actividad, la producción, el resultado y el impacto como una cadena. Los equipos se guían por las producciones y los indicadores adelantados, y se juzgan a sí mismos por los resultados.
- **Empareja, nunca sustituyas.** Una medida de resultado explica por qué importa una medida de producción, y una medida de producción explica qué hacer con una medida de resultado. Ninguna funciona sola.
- **Prefiere medidas que puedan bajar además de subir.** Un número que solo crece es un recuento, no una señal.
- **Trata los indicadores adelantados como hipótesis.** Comprueba que predicen el resultado y descártalos cuando no lo hagan.
- **Sé honesto sobre la atribución.** Los resultados tienen muchas causas. Di en qué influye el equipo y qué solo observa.

## Definiciones de métricas

Las cinco métricas siguientes se eligen para mover un conjunto de medidas hacia los resultados. Son ejemplos de la forma que conviene usar, y los temas posteriores definen las medidas de servicio y de entrega que las llenan. Los umbrales ilustrativos de este tema no son referencias de mercado.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de resultados | Proporción de métricas reportadas que están vinculadas en el registro de métricas a un resultado escrito para un cliente o servicio con nombre | métricas con un vínculo de resultado escrito / métricas reportadas en el período. Cuenta solo las métricas mostradas en un informe regular; excluye las medidas de la vista de trabajo que mantiene un solo equipo | porcentaje | Registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) | Medición e informes; mejora continua | Objetivo de producto y objetivo de entrega | Trimestral |
| Tasa de adopción de funciones | Proporción de usuarios elegibles que usan una capacidad nueva o modificada dentro de una ventana declarada tras su lanzamiento | usuarios elegibles distintos que usaron la capacidad en los 30 días siguientes al lanzamiento / usuarios elegibles distintos en ese período. El reloj empieza en la disponibilidad general; excluye cuentas de prueba internas y usuarios que no pudieron acceder a la capacidad | porcentaje | Analítica de producto, registros de uso del catálogo de servicios | Diseño del servicio; gestión de versiones | Comentarios de la revisión con las partes interesadas; medida de resultado de producto | Mensual durante 3 meses tras el lanzamiento y después trimestral |
| Tasa de contactos repetidos | Proporción de contactos de un usuario sobre el mismo servicio dentro de una ventana declarada tras cerrarse un contacto anterior | contactos nuevos del mismo usuario sobre el mismo servicio en los 14 días siguientes a un contacto cerrado / contactos cerrados en el período. El reloj empieza en el cierre; excluye contactos abiertos como seguimientos planificados | porcentaje | Historial de contactos y tickets de la herramienta ITSM | Centro de servicios; gestión de incidentes | Defectos escapados; definición de terminado | Mensual |
| Tasa de validación de indicadores adelantados | Proporción de indicadores adelantados en uso cuyo movimiento ha precedido al movimiento de su indicador rezagado vinculado en el período de revisión | indicadores adelantados con una anticipación confirmada sobre su indicador rezagado / indicadores adelantados en uso. Lo juzga el equipo en una revisión documentada, con al menos cuatro períodos de datos; excluye indicadores con menos de cuatro períodos | porcentaje | Registro de métricas e historial de tendencias | Mejora continua | Acciones de la retrospectiva sobre experimentos | Dos veces al año |
| Tasa de finalización de revisiones de beneficios | Proporción de cambios o mejoras financiados cuyo resultado previsto se revisó frente a su medida tras el retraso acordado | cambios con una revisión de resultados completada en los 90 días siguientes a la fecha de revisión prevista / cambios cuya fecha de revisión cayó en el período. Excluye los cambios retirados antes de su lanzamiento | porcentaje | Registro de cambios, registro de mejoras, notas de revisión | Mejora continua; habilitación de cambios | Revisión con las partes interesadas; revisión del incremento de producto | Trimestral |

La cobertura de resultados y la tasa de finalización de revisiones de beneficios miden la práctica de medición y son fáciles de satisfacer con papeleo. La tasa de adopción de funciones y la tasa de contactos repetidos están más cerca del cliente y son las más propensas a cambiar una decisión.

## Recomendaciones

### Empieza por los resultados

**1. Escribe el resultado como una frase sobre una persona o un servicio.** "El personal puede restablecer su propia contraseña sin llamar al centro de servicios" es un resultado. "Desplegar el nuevo portal de identidad" es una producción. Pon la frase al principio de la entrada de la métrica en el registro y elige después la medida. Si no puedes escribir la frase, no estás listo para elegir un número.

**2. Dibuja la cadena de la actividad al impacto.** Para cada objetivo, esboza cuatro cajas: lo que hace el equipo, lo que produce, lo que cambia para el usuario y lo que eso cambia para la organización. Coloca cada métrica candidata en una caja. Un conjunto lleno a la izquierda y vacío a la derecha es la señal para buscar evidencia de resultados.

**3. Aplica a cada métrica la prueba de la cocreación de valor.** Pregunta: ¿la visión de valor de quién muestra esto, y aparece en algún lugar del conjunto la visión del consumidor? En términos de ITIL, una relación de servicio tiene un proveedor y un consumidor, y el valor se realiza en el uso del consumidor. Una medida del tiempo de respuesta con el reloj del proveedor necesita una compañera desde el lado del consumidor, como si el usuario pudo seguir con su trabajo (véase el tema 6.2, Acuerdos de nivel de experiencia).

**4. Pide una decisión, no un informe.** Para cada métrica candidata, escribe la decisión que alguien tomaría si se moviera. Retira toda medida sin una decisión asociada. Es el filtro más rápido contra las métricas de vanidad y evita que un panel crezca por defecto.

### Empareja producciones con resultados

**5. Elige una medida de resultado por cada medida de producción importante.** Si reportas despliegues, empareja con una medida de lo que los despliegues cambiaron para el servicio, como los fallos de cambio o los incidentes visibles para los usuarios (véase el tema 2.8, Métricas DORA). Si reportas tickets resueltos, empareja con los contactos repetidos. El par debe estar en la misma página. Un equipo que solo ve producción optimizará la producción.

**6. Elige medidas de resultado sobre las que el equipo pueda influir y nombra las que solo observa.** Un equipo puede influir en los contactos repetidos de su propio servicio y en la adopción de sus propias funciones. Solo puede observar los ingresos de la empresa. Ambos pertenecen al cuadro, pero los objetivos y el trabajo de mejora se asocian a las medidas sobre las que se influye. Nombrar la diferencia evita culpar por movimientos que el equipo no pudo causar.

**7. Usa sustitutos con transparencia.** Muchos resultados no pueden medirse directamente. Elige un sustituto (proxy), di que lo es y di qué se le escapa. La tasa de contactos repetidos es un sustituto de "el problema se resolvió de verdad", y una breve encuesta o la lectura de los comentarios abiertos pueden comprobar que sigue diciendo la verdad (véase el tema 6.1, Métricas de satisfacción del cliente).

### Construye pares adelantado-rezagado

**8. Empareja cada indicador rezagado con al menos un indicador adelantado sobre el que puedas actuar.** Los incidentes graves son un indicador rezagado, y la proporción de servicios con guías operativas de recuperación probadas puede anticiparlos. El indicador adelantado da al equipo algo que hacer este mes. Elige indicadores adelantados en los que creas por una razón que puedas escribir y pon después a prueba esa creencia.

**9. Valida los indicadores adelantados mirando hacia atrás.** Dos veces al año, grafica cada indicador adelantado frente a su pareja rezagada durante al menos cuatro períodos y pregunta si el movimiento vino primero. Donde la relación sea débil, cambia o descarta el indicador adelantado. 

**10. Usa objetivos de nivel de servicio cuando el resultado tenga una medida clara de cara al usuario.** Un indicador de nivel de servicio (SLI) bien elegido es una señal adelantada de la satisfacción del usuario, y un objetivo de nivel de servicio (SLO) declara cuán bueno necesita ser (véase el tema 5.2, SLI, SLO y presupuestos de errores). Funcionan mejor cuando el indicador se elige desde el punto de vista del usuario y no desde el de la máquina.

### Mantén honesta la elección

**11. Cierra el ciclo con revisiones de resultados.** Cuando se financia un cambio o una mejora, registra el resultado que debe producir, la medida y la fecha en que alguien lo examinará. Haz la revisión aunque la respuesta sea incómoda. Sin revisiones, el lenguaje de los resultados es decoración (véase el tema 6.5, Realización de valor y resultados de negocio).

**12. Mantén las medidas de producción en la vista de trabajo y di para qué sirven.** Las medidas de flujo, de capacidad y de costo son los instrumentos del equipo, no su tabla de puntuación. El tiempo de ciclo dice dónde espera el trabajo (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). Reportadas hacia arriba sin un resultado al lado, invitan a la manipulación.

## Vectores de manipulación y barreras de protección

Avanzar hacia los resultados no elimina la manipulación. Cambia su forma: los resultados pueden redefinirse, los sustitutos pueden dirigirse y las revisiones pueden omitirse.

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura de resultados | Escribir una frase de resultado vaga ("mejorar el servicio") para cada métrica de modo que el vínculo exista en el papel | Muestrear el registro: la frase debe nombrar a una persona o servicio y un cambio; comprobar que se tomó una decisión gracias a la medida |
| Tasa de adopción de funciones | Contar como adopción un primer uso forzado o automático; reducir el grupo de usuarios elegibles; hacer que la capacidad sea la predeterminada para que se "use" sin haberla elegido | Finalización de tareas o satisfacción entre los usuarios de la capacidad; permanencia del uso a los 30 y 90 días; leer los comentarios abiertos |
| Tasa de contactos repetidos | Decir a los usuarios que abran una nueva solicitud por otro canal; cerrar el contacto como duplicado de otro no relacionado; alargar el cierre para evitar un recontacto dentro de la ventana | Contactos por canal para el mismo servicio; revisión muestreada de las notas de cierre; tasa de "problema resuelto" reportada por los usuarios |
| Tasa de validación de indicadores adelantados | Declarar válidos los indicadores adelantados tras un examen informal; elegir indicadores que se mueven trivialmente con el resultado | Registro escrito de la revisión con los datos graficados; invitar a alguien ajeno al equipo a cuestionar un resultado por ciclo |
| Tasa de finalización de revisiones de beneficios | Celebrar una revisión solo de nombre, o fijar el resultado previsto después de los hechos para que siempre se cumpla | Comparar el resultado en la revisión con la declaración hecha cuando se financió el cambio; seguir la proporción de revisiones que llevaron a un cambio de plan |

Una lectura sana muestra medidas de resultado que a veces decepcionan, revisiones que a veces ponen fin a un cambio e indicadores adelantados que a veces se descartan. Un conjunto en que todos los resultados se cumplen y todos los indicadores adelantados se confirman probablemente se ha ajustado para que así sea.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Medidas de producción y de actividad | Rápidas, baratas y bajo el control del equipo; buenas para decisiones de flujo y capacidad | Fáciles de inflar; no dicen si alguien se benefició |
| Medidas de resultado | Se mantienen cerca de lo que valoran los clientes y la organización; más difíciles de mejorar sin ayudar | Lentas, con ruido e influidas por factores ajenos al control del equipo |
| Indicadores adelantados | Dan alerta temprana y algo sobre lo que actuar | Pueden engañar si el vínculo con el resultado se supone en lugar de comprobarse |
| Indicadores rezagados | Reportan lo que realmente ocurrió | Llegan demasiado tarde para cambiar el resultado de este período |
| Sustitutos de los resultados | Hacen visibles resultados difíciles de medir | Pueden alejarse de lo que representan e invitan a la subrogación |
| Un conjunto pequeño guiado por resultados | Fácil de recordar y de discutir; concentra el esfuerzo | Puede pasar por alto un problema fuera de los resultados elegidos |
| Un conjunto amplio y equilibrado | Cubre más del servicio | Diluye la atención; cada medida recibe menos escrutinio |

Mantén un número pequeño de medidas de resultado que todo el grupo pueda recitar, respalda cada una con las medidas de producción y adelantadas que la explican y revisa el conjunto cuando cambie la estrategia. Los enfoques equilibrados asociados al [cuadro de mando integral](https://en.wikipedia.org/wiki/Balanced_scorecard) y a los [objetivos y resultados clave](https://en.wikipedia.org/wiki/Objectives_and_key_results) intentan conectar el trabajo diario con los resultados que importan. Ambos fracasan de la misma manera cuando los resultados clave se convierten en una lista de producciones con un porcentaje al lado.

## Preguntas para conversar con tu equipo

**1. De nuestras cinco métricas más destacadas, ¿cuáles pueden subir mientras nuestros clientes están peor?**
Escribe las cinco en una pizarra y haz la pregunta sobre cada una. Un recuento de tickets cerrados, por ejemplo, puede subir mientras también suben los contactos repetidos. El facilitador debe anotar los casos en que la respuesta es sí, porque esas son las métricas de vanidad. Termina preguntando qué medida de resultado se situaría junto a cada una.

**2. ¿Cómo es una buena semana para un cliente de este servicio, con sus palabras?**
Pregunta a quienes hablan con los clientes y evita el vocabulario propio del equipo. Las respuestas se convierten en frases de resultado y a menudo revelan cosas que nadie mide, como no tener que explicar un problema dos veces. Recoge tres frases y pregunta cuáles pueden medirse, aunque sea mediante un sustituto.

**3. ¿Cuáles de nuestros indicadores adelantados hemos comprobado alguna vez frente al resultado que se supone que predicen?**
Elige un indicador y grafícalo frente a su pareja rezagada durante los últimos períodos. Pregunta qué ves y con qué seguridad. Si la relación es débil, discute con qué sustituirlo. Trata un indicador descartado como un resultado normal del aprendizaje, no como un fracaso.

**4. ¿Dónde se atribuye nuestro equipo el mérito de un resultado que solo observa?**
Mira las métricas de los informes a la dirección. ¿Cuáles dependen de factores fuera del control del equipo, como la estacionalidad, una campaña o un proveedor? Acordad una forma sencilla de declarar en qué influye el equipo y qué solo observa. Esto prepara al equipo para el día en que un resultado se mueva por razones que no causó.

**5. ¿Qué entregamos o cambiamos en los dos últimos trimestres, y alguien revisó si funcionó?**
Enumera los cambios en una pizarra y marca los que tienen un registro de revisión. Para los demás, pregunta qué resultado se esperaba y cómo podrías averiguarlo ahora. Resiste la caza de culpables. El objetivo es iniciar el hábito, aunque las primeras revisiones lleguen tarde.

**6. ¿Qué medidas de producción deberían volver a nuestra vista de trabajo?**
Algunas medidas son útiles para el equipo y engañosas en un informe. Pregunta cuáles son cuáles y qué necesitaría cada una a su lado para seguir en un informe a la dirección. Acordad una medida que mover este trimestre. Mover una medida es señal de madurez, no un retroceso en la transparencia.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega sienten la tentación de la producción porque sus herramientas la reportan por defecto. El remedio es hacer que la adopción y la evidencia de resultados formen parte de la definición de terminado y de la revisión con las partes interesadas. Una función que nadie usa es una lección, y descubrirlo pronto es un beneficio de la práctica ágil. Los equipos mantienen las medidas de flujo en su vista de trabajo y las emparejan con medidas de adopción y de fallo (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

### Equipos de servicio y operaciones

Los equipos de servicio se miden por la gestión: llamadas atendidas, tickets cerrados, tiempo de resolución. Esto importa para la planificación y el costo, y dice poco sobre si el problema del usuario desapareció. Los equipos de operaciones deben añadir los contactos repetidos, la recurrencia de la misma causa y la resolución reportada por los usuarios junto a las medidas de velocidad, y deben tratar con sospecha un recuento creciente de tickets fáciles (véase el tema 3.1, Métricas del centro de servicios). Los indicadores adelantados, como el uso de artículos de conocimiento y las guías operativas probadas, dan al equipo algo sobre lo que actuar entre incidentes.

### Liderazgo y gobernanza

Lo que los líderes piden ver enseña a la organización qué importa. Pide resultados, acepta que son más lentos y ruidosos, y financia las revisiones que los comprueban. Los órganos de gobernanza deben buscar un conjunto corto y estable de medidas de resultado, cada una con un responsable declarado y un registro de las decisiones que informó (véase el tema 1.4, Gobernanza y propiedad de las métricas). Un líder que pregunta "¿qué aprendimos?" obtiene mejores datos que uno que pregunta "¿por qué esto está en rojo?".

### Clientes y usuarios

Los clientes experimentan los resultados directamente y rara vez ven recuentos de producción. Son la prueba final del conjunto: ¿el servicio les permite seguir con lo que vinieron a hacer? Las encuestas breves, los comentarios abiertos y la observación de tareas reales son mejor evidencia que cualquier medida del lado del proveedor. Los clientes también tienen un papel en la cocreación de valor, lo que significa que lo bien informados, capacitados y escuchados que estén afecta a los resultados (véase el tema 6.3, Métricas de adopción y catálogo de servicios).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio tiene un equipo de plataforma interno que ofrece un servicio de aprovisionamiento de entornos de autoservicio a unos 40 equipos de producto, con el apoyo de un pequeño centro de servicios. Todos los números de este ejemplo son ilustrativos.

El informe mensual muestra 310 solicitudes cumplidas (frente a 240), una mediana de tiempo de cumplimiento de 6 horas y 12 funciones entregadas en el trimestre. La dirección está contenta. El responsable de la plataforma nota que los contactos con el centro sobre el aprovisionamiento también han aumentado y pide al equipo que grafique las producciones frente al resultado que esperaban: que los equipos de producto obtengan un entorno sin esperar ni pedir ayuda.

El ejercicio de la cadena muestra que el equipo había medido actividad y producción y ningún resultado. Añaden tres. La primera es la tasa de contactos repetidos: el 22 por ciento de los contactos sobre aprovisionamiento van seguidos de otro contacto sobre el mismo servicio en 14 días. La segunda es la tasa de adopción de funciones para las tres funciones más nuevas, que a los 30 días está en el 9 por ciento, el 14 por ciento y el 61 por ciento de los equipos elegibles. La tercera, un indicador adelantado, es la proporción de solicitudes que se completan sin un paso humano, actualmente el 48 por ciento. Plantean la hipótesis de que esto debería hacer bajar la tasa de contactos repetidos.

Deciden pausar dos funciones planificadas que se parecen a las dos de baja adopción y dedicar el trimestre a la causa más común de contactos repetidos, un mensaje de error poco claro cuando se supera una cuota. Registran el resultado previsto, una tasa de contactos repetidos inferior al 15 por ciento, y fijan una fecha de revisión a 90 días.

El riesgo de manipulación aparece en el segundo mes. La tasa de contactos repetidos baja al 11 por ciento, lo que parece maravilloso. Una muestra de 25 contactos cerrados muestra que el centro de servicios había empezado a pedir a los usuarios que usaran un canal de chat para las preguntas de seguimiento, y el canal de chat no se cuenta en la herramienta ITSM. El equipo añade los contactos por canal al informe, incorpora las transcripciones del chat a la muestra y descubre que la tasa combinada es del 17 por ciento. Es una mejora real, menor que la primera lectura. En la revisión, el responsable reporta el 17 por ciento, señala que el indicador adelantado subió del 48 al 57 por ciento al mismo ritmo y registra que la hipótesis se ha sostenido durante dos de los cuatro períodos necesarios para darla por validada.

## Perspectiva por sector

**Empresa emergente.** Los resultados están a mano: los fundadores pueden hablar con los clientes y ver si se quedan. El riesgo es medir solo el crecimiento de usuarios y de funciones, que son métricas de vanidad hasta que la permanencia y el éxito en las tareas se hacen visibles. Elige una medida de resultado que los clientes reconocerían y revísala cada semana.

**Pequeña empresa.** Los números son demasiado pequeños para la estadística, así que prefiere las conversaciones directas, un puñado de casos con seguimiento y una lista corta de sustitutos. Desconfía de los paneles de proveedores que reportan su propia actividad como si fuera tu resultado.

**Gran empresa.** La escala invita a reportar producción, porque las producciones son comparables entre muchos equipos y los resultados no. Resiste imponer una sola definición de resultado a servicios distintos. Acordad un conjunto pequeño de frases de resultado compartidas, deja que cada servicio elija sus medidas y mantén al día el registro.

**Gobierno y sector público.** Las obligaciones legales, las reglas de financiación y los niveles de servicio fijan de antemano algunas medidas, a menudo producciones como los casos tramitados. Cúmplelas y añade al lado medidas de resultado para la ciudadanía y el personal, como si una persona obtuvo la ayuda que buscaba. Los informes públicos hacen que los datos honestos de resultados sean más valiosos y más sensibles, así que acordad de antemano cómo se explicarán las cifras corregidas (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de pasar a los resultados es sobre todo esfuerzo y paciencia: escribir frases de resultado, añadir algunas medidas como una breve encuesta o un evento de adopción y celebrar revisiones de resultados. El costo de herramientas es modesto, ya que la mayoría de los sustitutos pueden construirse con datos ya recopilados. El costo mayor es la demora, porque los datos de resultados llegan despacio y los líderes deben esperarlos.

El retorno procede de mejores decisiones sobre dónde gastar. El trabajo que nadie usa es caro, y también lo es mejorar una medida de gestión mientras la causa subyacente de los contactos repetidos sigue ahí. El patrón que cabe esperar es menos funciones construidas y sin uso, más atención a las causas recurrentes y un relato más sólido para obtener financiación. No prometas un porcentaje. Mide tus propias líneas base, como la adopción de las versiones recientes y los contactos repetidos, y compara tras unos trimestres (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar lo fácil.** Los recuentos de tickets y de despliegues están en todas las herramientas, lo que los convierte en la opción por defecto. Añade al menos una medida de resultado por servicio antes de añadir otro recuento de producción.
- **Teatro de resultados.** Escribir una frase de resultado para cada métrica sin comprobarla nunca. Revisa una muestra del registro y pregunta qué decisión informó cada medida.
- **Indicadores adelantados sin probar.** Tratar una señal plausible como una prueba. Grafícala frente al resultado rezagado al menos dos veces al año y descarta los que no se anticipan.
- **Resultados como objetivos personales.** Asignar una medida de resultado a una sola persona invita a la conducta descrita en el tema 1.2. Asocia los resultados a equipos y servicios.
- **Medir solo el lado del proveedor.** Un conjunto hecho de relojes y recuentos internos pasará por alto lo que sienten los clientes. Incluye una medida del lado del consumidor para cada servicio.
- **No revisar nunca.** Financiar cambios por beneficios prometidos y no comprobarlos jamás. Pon una fecha de revisión en el registro del cambio cuando se apruebe.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Elección de medidas | Recuentos disponibles en las herramientas | Algunos equipos escriben frases de resultado | Cada métrica reportada tiene un resultado escrito y una decisión a la que informa | Conjuntos de resultado y de producción revisados juntos cada trimestre | Frases de resultado alineadas entre equipos, proveedores y clientes, y revisadas cuando cambia la estrategia |
| Indicadores adelantados y rezagados | Solo resultados rezagados, reportados tarde | Unos pocos indicadores adelantados elegidos por intuición | Indicadores adelantados y rezagados emparejados y registrados en el registro de métricas | Indicadores adelantados validados frente a los resultados dos veces al año | Indicadores compartidos con proveedores y clientes; el conjunto evoluciona con la evidencia |
| Revisiones de resultados | Ninguna revisión de si los cambios funcionaron | Revisiones ocasionales tras cambios grandes | Fecha de revisión registrada para cada cambio financiado | Revisiones completadas, con resultados que alimentan el siguiente plan | Las revisiones son rutinarias, entre equipos e incluyen la opinión de los clientes |
| Evidencia del lado del consumidor | Anécdotas | Encuesta para algunos servicios | Una medida del lado del consumidor para cada servicio | Evidencia del consumidor con tendencias y leída junto a los datos operativos | Los clientes ayudan a definir e interpretar las medidas de resultado |

## Lista de verificación

- [ ] Cada servicio tiene al menos una frase de resultado que nombra a una persona o servicio y un cambio.
- [ ] Cada métrica reportada se sitúa en la cadena de la actividad al impacto.
- [ ] Cada métrica tiene una decisión con nombre a la que informa; las que no la tienen se retiran.
- [ ] Cada medida de producción de un informe tiene al lado una medida de resultado.
- [ ] Cada servicio tiene al menos una medida del lado del consumidor.
- [ ] Cada indicador rezagado tiene un indicador adelantado, con una razón escrita del vínculo.
- [ ] Los indicadores adelantados se comprueban frente a los resultados al menos dos veces al año.
- [ ] Los sustitutos se etiquetan como sustitutos, con lo que se les escapa.
- [ ] Cada cambio financiado tiene un resultado previsto, una medida y una fecha de revisión.
- [ ] Las medidas de resultado se asocian a equipos y servicios, nunca a personas.

## Prompts de IA

**Convierte una métrica de producción en un conjunto guiado por resultados.**

```text
Nuestro equipo es [nombre del equipo], que presta [servicio o producto] a
[clientes o usuarios]. Actualmente reportamos [lista de métricas de producción o
de actividad]. Queremos avanzar hacia los resultados. Para cada métrica, sugiere
una frase de resultado sobre un cliente o servicio a la que podría contribuir, y
propón una medida de resultado y un indicador adelantado que podríamos
considerar. Para cada sugerencia, di qué se le escaparía a la medida y cómo
podría manipularse. No inventes valores de referencia ni fuentes. Enumera tus
supuestos y los datos que necesitas de mí.
```

**Comprueba si un indicador adelantado es creíble.**

```text
Usamos [indicador adelantado] como indicador adelantado de [medida de resultado
rezagada]. Aquí hay [número] períodos de datos de ambos, pegados más abajo, con
notas sobre cualquier cosa que cambió durante ese tiempo: [datos y notas].
Describe si el indicador adelantado parece moverse antes que el rezagado y qué
otras explicaciones son coherentes con los datos. No afirmes causalidad.
Enumera tus supuestos, los límites de tan pocos datos y qué datos adicionales
ayudarían.
```

**Redacta una revisión de resultados para un cambio reciente.**

```text
Hicimos este cambio: [descripción], aprobado el [fecha], con el resultado
previsto [frase de resultado] y la medida [medida]. Datos actuales: [datos].
Redacta un orden del día para la revisión de resultados y una breve estructura
de resumen que compare el resultado previsto con lo que vemos, separe aquello en
lo que influyó el equipo de lo que solo observó y enumere preguntas para los
usuarios. No juzgues el éxito más allá de lo que respaldan los datos. Enumera
tus supuestos y las lagunas de datos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar el tema y la medida de resultado complementaria de una métrica de producción que estás a punto de reportar.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema de métricas nuevo empareja sus medidas de producción con resultados y barreras de protección.

## Puntos clave

- La actividad, la producción, el resultado y el impacto son cosas distintas, y un panel de las dos primeras no puede mostrar valor.
- En ITIL el valor se cocrea con el consumidor, así que cada conjunto necesita una medida del lado del consumidor.
- Empareja las producciones con los resultados y los indicadores rezagados con indicadores adelantados que hayas puesto a prueba.
- Sé claro sobre en qué influye el equipo y qué solo observa.
- Revisa los cambios financiados frente a sus resultados previstos y deja que los resultados cambien el plan.
- Las medidas de resultado reducen la manipulación sin acabar con ella, así que cada una sigue necesitando una barrera de protección.

## Referencias y lecturas complementarias

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
