# Métricas de trabajo repetitivo y guardias

**Un servicio es tan fiable como la rotación que lo cuida, así que mide las interrupciones, la carga nocturna y la proporción de tiempo perdida en trabajo manual y repetitivo para la rotación en su conjunto, y usa los números para financiar la prevención y la automatización, nunca para comparar personas.**

## Resumen y motivación

La fiabilidad suele describirse en términos del sistema: disponibilidad, latencia, tasas de errores. Detrás de cada servicio que tiene usuarios en mitad de la noche hay un sistema humano que responde cuando el sistema falla. Ese sistema humano tiene límites. Una rotación a la que se avisa con demasiada frecuencia, que despierta a demasiadas personas o que dedica la mayor parte de su semana a tareas manuales y repetitivas se volverá más lenta, cometerá más errores y acabará perdiendo gente. Las demás métricas de la Parte 5 pueden parecer sanas hasta el momento en que se van las personas que las sostienen.

Dos ideas organizan este tema. La primera es el trabajo de [guardia](https://en.wikipedia.org/wiki/On-call): una rotación de personas localizables y listas para responder a alertas fuera de los patrones normales de trabajo. Un **aviso** (page) es una alerta que interrumpe a quien responde, normalmente mediante un buscapersonas, una llamada telefónica o una notificación push. Un **turno** es un tramo de servicio de guardia, por ejemplo un día, una semana o una noche. Una **rotación** es el grupo de personas que toman turnos por orden. La segunda idea es el **trabajo repetitivo** (toil), un término de la [ingeniería de fiabilidad de sitios](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la disciplina de operar servicios con métodos de ingeniería de software. En el libro *Site Reliability Engineering* de Google, el toil es el trabajo operativo ligado a la operación de un servicio de producción que tiende a ser manual, repetitivo, automatizable, táctico, sin valor duradero y que crece al ritmo del servicio. No es lo mismo que la sobrecarga, como las reuniones, y no es simplemente el trabajo que a alguien no le gusta.

ITIL 4 no tiene una práctica llamada "gestión del trabajo repetitivo". El material se reparte entre varias prácticas. La [gestión de incidentes](https://en.wikipedia.org/wiki/Incident_management) y la monitorización y gestión de eventos producen los avisos. La gestión de problemas elimina las causas que siguen produciéndolos. La gestión de solicitudes de servicio y la gestión de despliegues producen buena parte del trabajo manual repetitivo. La gestión de la fuerza laboral y del talento, y la mejora continua, poseen el lado de las personas. El equivalente ágil es el acuerdo de trabajo del equipo sobre el trabajo no planificado y el ritmo sostenible, y el hábito de DevOps de que el equipo que construye un servicio también lleva parte del buscapersonas.

Las medidas de aquí tratan de la carga y de la sostenibilidad. El manejo de incidentes pertenece a otros temas (véanse el tema 3.3, Tiempo de respuesta y resolución de incidentes, y el tema 3.4, Métricas de incidentes graves), como también la calidad de las alertas individuales (véase el tema 5.5, Métricas de monitorización y calidad de las alertas). Este tema pregunta qué les cuesta a las personas de la rotación mantener el servicio en marcha, y si ese costo es sostenible.

### Por qué esto pertenece a la fiabilidad

La fatiga tiene consecuencias operativas. La [privación de sueño](https://en.wikipedia.org/wiki/Sleep_deprivation) degrada el juicio y el tiempo de reacción, y quienes responden cansados al comienzo de un incidente tardan más en diagnosticarlo y es más probable que cometan un segundo error mientras arreglan el primero. La [fatiga de alarmas](https://en.wikipedia.org/wiki/Alarm_fatigue) es el efecto relacionado de demasiadas alertas: la gente deja de tratar cada una como urgente. El [agotamiento laboral](https://en.wikipedia.org/wiki/Occupational_burnout) es el resultado a largo plazo de una sobrecarga sostenida, y se manifiesta como abandono, bajas por enfermedad y desvinculación, que son lentos, costosos y difíciles de revertir. Un equipo que mide la fiabilidad del servicio sin medir la sostenibilidad de su rotación mira solo el efecto e ignora parte de la causa.

Este tema describe rotaciones, turnos y servicios, y nunca clasifica a individuos. Una visión de ITIL parte del incidente y del servicio, una visión de SRE del costo en tiempo de las personas, y una visión ágil de la capacidad para el trabajo planificado.

## Principios clave

- **Mide la rotación, no a la persona.** Informa la carga por servicio, turno y posición en la rotación. El número de avisos de una persona depende del turno que le tocó, y una tabla de clasificación enseña a la gente a ocultar interrupciones.
- **Cuenta cuándo ocurren las interrupciones además de cuánto duran.** Un aviso de cinco minutos a las 03:00 puede costar una noche de sueño.
- **Define el trabajo repetitivo de forma estrecha y deja que el equipo lo clasifique.** El toil es un tipo específico de trabajo, no un sinónimo de trabajo que a la gente le desagrada.
- **Trata la carga como una señal para invertir.** Un volumen alto de avisos o una proporción alta de toil es evidencia de que un servicio, una herramienta o un nivel de dotación necesita trabajo.
- **Empareja cada medida de carga con una medida de calidad.** Menos avisos son una buena noticia solo si los incidentes siguen detectándose.
- **Muestra distribuciones y comparte los datos primero con la rotación.** Un turno promedio oculta un puñado de noches terribles, y las personas de guardia son las mejores jueces de si los números coinciden con su experiencia.

## Definiciones de métricas

La tabla da el conjunto básico. Toda medida de tiempo o de recuento indica dónde empieza y dónde termina y qué se excluye. "Fuera de horario" debe definirse una vez por rotación como una ventana escrita en hora local, incluidos fines de semana y festivos, porque las personas de una rotación distribuida pueden tener horarios locales distintos.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Avisos por turno | Número de avisos entregados a una rotación durante un turno | Recuento de avisos entregados entre el inicio y el fin del turno, un recuento por turno, tras fusionar los avisos duplicados del mismo grupo de alertas en 5 minutos (la ventana de fusión es un ajuste del equipo). Los avisos de prueba y los enviados por error se excluyen. Informa la mediana y el percentil 90 entre turnos, más el turno más ocupado | avisos por turno | Herramienta de avisos; calendario de guardias | Gestión de incidentes; monitorización y gestión de eventos | Política de trabajo no planificado; ritmo sostenible | Revisión semanal, tendencia mensual |
| Proporción de avisos fuera de horario | Proporción de avisos que llegan fuera de la ventana laboral escrita | Avisos entregados fuera de la ventana laboral / todos los avisos entregados, en el periodo. La ventana se fija por rotación en hora local; los festivos cuentan como fuera de la ventana | porcentaje | Herramienta de avisos; calendario de la rotación | Gestión de incidentes; monitorización y gestión de eventos | Acuerdo de trabajo sobre la disponibilidad | Mensual |
| Tasa de interrupción nocturna | Con qué frecuencia un turno incluye al menos un aviso en la ventana de sueño protegida | Turnos con al menos un aviso en la ventana de sueño protegida (por ejemplo de 22:00 a 07:00 hora local, fijada por el equipo) / todos los turnos del periodo. Un aviso con acuse de recibo automático y sin respuesta humana se excluye | porcentaje de turnos | Herramienta de avisos; registro de acuses de recibo | Gestión de incidentes; gestión de la fuerza laboral y del talento | Ritmo sostenible; chequeo de salud del equipo | Mensual |
| Proporción de toil sobre el tiempo | Proporción del tiempo de trabajo de una rotación dedicada al toil | Horas que la rotación registra contra trabajo clasificado como toil / total de horas de trabajo registradas por la rotación, en un mes. Las reuniones, la formación y las vacaciones se excluyen del numerador y del denominador. La clasificación sigue las seis características del toil, aplicadas por el equipo | porcentaje del tiempo | Muestreo de tiempo o etiquetas de tarea en el gestor de trabajo; revisión de la clasificación por el equipo | Mejora continua; gestión de despliegues; gestión de solicitudes de servicio | Proporción de trabajo no planificado; asignación de capacidad al trabajo planificado | Mensual, con una revisión trimestral de la clasificación |
| Toil por origen | Distribución de las horas de toil entre orígenes con nombre, como reinicios manuales, solicitudes de acceso, renovaciones de certificados y clasificación de tickets | Horas de toil de cada origen / total de horas de toil, enumerando los cinco orígenes principales y un grupo "otros". Mismas exclusiones que la proporción de toil sobre el tiempo | porcentaje de horas de toil por origen | Muestreo de tiempo o etiquetas de tarea en el gestor de trabajo | Gestión de problemas; gestión de solicitudes de servicio | Lista de pendientes de elementos de mejora | Trimestral |
| Tasa de avisos repetidos | Proporción de avisos causados por una condición que ya avisó a la rotación antes dentro de una ventana indicada | Avisos cuyo grupo de alertas o código de causa coincide con un aviso anterior en 30 días / todos los avisos del periodo. El código de causa lo fija quien responde al cerrar; los códigos sin fijar se informan por separado | porcentaje | Herramienta de avisos; códigos de causa del registro de incidentes | Gestión de problemas; gestión de incidentes | Acciones de la retrospectiva; lista de pendientes de deuda técnica | Mensual |
| Profundidad de la rotación | Cuántas personas cualificadas comparten el buscapersonas en comparación con el número de puestos por cubrir | Número de personas que completaron la preparación para la guardia y están disponibles para turnos / número de puestos de turno por ciclo de rotación. Las vacaciones y las comisiones de servicio reducen la disponibilidad. Informa como una razón por rotación, nunca por persona | razón | Calendario de la rotación; lista de verificación de preparación | Gestión de la fuerza laboral y del talento | Equipo multifuncional; matriz de habilidades | Trimestral |
| Toil eliminado | Horas de toil recurrente retiradas del trabajo de la rotación por un cambio de automatización o de diseño | Horas mensuales estimadas de toil de un origen antes del cambio menos las mismas después del cambio, medidas durante al menos dos ciclos tras la entrega. Las horas ahorradas por una limpieza puntual se excluyen | horas por mes | Muestreo de tiempo antes y después; ticket de mejora | Mejora continua; gestión de problemas | Elemento de mejora entregado | Trimestral |

Un recuento de avisos es un recuento de interrupciones, no de incidentes: un incidente puede generar una docena de avisos. La proporción de toil sobre el tiempo depende de un registro honesto, así que trátala como una estimación acordada.

## Recomendaciones

### Define los términos antes de contar

**1. Escribe qué cuenta como un aviso, un turno y fuera de horario.** Los equipos cuentan cosas distintas bajo la misma palabra. Un aviso puede ser cualquier notificación, solo las que llegan a un humano o solo las que requieren acción. Elige una definición, indica la ventana de fusión de duplicados y registra la ventana laboral en hora local. Sin esto, los números cambiarán cuando se reconfigure una herramienta, y la tendencia engañará.

**2. Acuerda qué es el toil, con ejemplos de tu propio servicio.** Parte de las seis características del libro de SRE. Escribe una breve lista de ejemplos y de no ejemplos, como reiniciar un trabajo atascado (toil), diseñar una herramienta de recuperación nueva (ingeniería) y una reunión de planificación (sobrecarga). Revisa la lista cuando surjan desacuerdos.

**3. Elige cómo medirás la proporción de toil y acepta sus límites.** Las opciones baratas son el muestreo de tiempo, las etiquetas de tarea en el gestor de trabajo y una breve estimación quincenal. Ninguna es exacta, así que elige la de menor sobrecarga, ejecútala durante un trimestre y juzga la tendencia más que el valor absoluto.

### Mide la carga de la rotación

**4. Informa los avisos por turno como una distribución.** El turno promedio oculta lo que siente la rotación. Muestra la mediana, el percentil 90 y el turno más ocupado, y añade una nota sobre lo que ocurrió en ese turno. Una mediana tranquila con una cola terrible significa unas pocas malas noches, que es un problema distinto de una rotación constantemente ocupada. Véase el tema 1.6, Alfabetización estadística para métricas de servicio, para leer percentiles.

**5. Pon el momento junto al volumen.** La proporción de avisos fuera de horario y la tasa de interrupción nocturna muestran cuándo cae la carga. Cinco avisos en horario de oficina son una molestia; cinco entre la medianoche y las 05:00 son un costo distinto. Muestra ambos en la misma página.

**6. Mira la dispersión entre turnos, no entre personas.** Una rotación donde un turno recurrente (por ejemplo el fin de semana o el traspaso del lunes) recoge la mayoría de los avisos necesita una solución distinta de una donde la carga es pareja. Informa la proporción de avisos por posición de turno y por día. Cuando los datos se informan por persona con nombre, espera que se lean como una clasificación, así que no produzcas esa vista.

**7. Cuenta aparte la carga de los incidentes graves.** Un incidente grave puede generar más interrupciones en una noche que un mes normal. Infórmalo como su propia línea para que un solo evento no distorsione la tendencia (véase el tema 3.4, Métricas de incidentes graves).

### Conecta la carga con las causas y con las soluciones

**8. Vincula los avisos con problemas y sigue las repeticiones.** La tasa de avisos repetidos muestra cuánta de la carga proviene de causas ya conocidas. Una tasa de repetición alta es un argumento a favor de la gestión de problemas, no de una respuesta más rápida. Alimenta la lista de pendientes de problemas con las principales causas que se repiten y registra el vínculo (véanse el tema 4.1, Métricas de gestión de problemas, y el tema 4.6, Deuda técnica y errores conocidos).

**9. Ordena los orígenes de toil y ataca el mayor.** Un [diagrama de Pareto](https://en.wikipedia.org/wiki/Pareto_chart) de las horas de toil por origen suele mostrar que unos pocos orígenes son responsables de la mayor parte del tiempo. Elige el mayor, decide si puede eliminarse por diseño, automatizarse o entregarse al equipo propietario de la causa, y prográmalo como trabajo de funcionalidades. Prefiere eliminar la necesidad a automatizar el paso, porque un paso automatizado aún hay que mantenerlo.

**10. Mide el toil eliminado, no las automatizaciones escritas.** Una automatización que nadie usa no elimina nada. Mide las horas de toil antes y después, durante al menos dos ciclos, y registra el esfuerzo de construir y mantener la automatización. Este es el retorno honesto, y evita un programa de "automatización" que añade guiones sin quitar trabajo. Véase el tema 3.7, Métricas de autoservicio y automatización, para la adopción de la automatización por los usuarios.

### Mantén sostenible el sistema

**11. Fija límites de rotación en un acuerdo del equipo y vigila luego la profundidad de la rotación.** Acordad con qué frecuencia puede estar una persona de guardia, cuántas noches consecutivas son aceptables y qué descanso sigue a una mala noche. La profundidad de la rotación muestra si la rotación tiene suficientes personas cualificadas para el límite acordado. Una rotación que nominalmente es de ocho personas pero efectivamente de tres, porque las demás aún no están preparadas o están de vacaciones, no cumple el límite, diga lo que diga el calendario.

**12. Usa los números para pedir algo concreto.** Un número de carga respalda una petición: un cambio de dotación, tiempo sacado del trabajo de funcionalidades para pagar toil, un cambio en los umbrales de alerta o una retirada de funcionalidad. Indica la petición junto al número, o la gente dejará de registrar (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Avisos por turno | Subir los umbrales de alerta o silenciar alertas para que baje el recuento; fusionar alertas no relacionadas en un aviso; mover avisos a una cola de tickets que nadie vigila | Cobertura de detección e incidentes informados por clientes que la monitorización pasó por alto (véase el tema 5.5, Métricas de monitorización y calidad de las alertas); tiempo de detección (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes) |
| Proporción de avisos fuera de horario | Redefinir la ventana laboral para ensancharla; reprogramar trabajos y despliegues para que los avisos pasen al horario de oficina sin reducirse; reclasificar avisos como "baja urgencia" | Volumen total de avisos junto a la proporción; ventana laboral escrita bajo control de cambios; una revisión de lo que se movió |
| Tasa de interrupción nocturna | Retrasar el acuse de recibo hasta la mañana; dar acuse automático a los avisos; contar solo los avisos que llegaron a un humano | Tiempo hasta el acuse de recibo por hora (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes); avisos sin respuesta humana informados por separado; impacto en el cliente por la noche |
| Proporción de toil sobre el tiempo | Reclasificar el toil como "ingeniería" o "trabajo de proyecto"; registrar menos de lo dedicado; etiquetar solo lo que es fácil de describir | Una auditoría periódica de los elementos clasificados hecha por alguien ajeno a la rotación; la propia opinión del equipo sobre cómo se sintió la semana; la proporción de tiempo dedicada al trabajo de mejora planificado |
| Toil por origen | Dividir un origen grande en varios pequeños para que ninguno destaque; dejar un origen sin nombre en "otros" | Un tope para el grupo "otros" (por ejemplo menos de una quinta parte de las horas de toil, un ajuste del equipo); muestreo de los elementos de "otros" cada trimestre |
| Tasa de avisos repetidos | Cerrar avisos con un código de causa nuevo cada vez para que no haya coincidencias; ampliar los códigos de causa hasta que todo sea distinto; alargar o acortar la ventana | Auditoría de códigos de causa sobre una muestra; recurrencia del mismo grupo de alertas entre incidentes (véase el tema 4.1, Métricas de gestión de problemas) |
| Profundidad de la rotación | Contar a personas que no han completado la preparación; contar a personas rara vez disponibles; rellenar el calendario | Proporción de turnos realmente cubiertos por el grupo nominal; recuento real de turnos por posición, informado sin nombres; finalización de la lista de verificación de preparación |
| Toil eliminado | Contar limpiezas puntuales como ahorros recurrentes; ignorar el esfuerzo de construir y mantener la automatización; reclamar ahorros sin un antes y un después | Horas antes y después medidas durante dos ciclos; esfuerzo de mantenimiento de la automatización; proporción de toil sobre el tiempo en los trimestres siguientes |

Una lectura sana es una rotación cuyo turno mediano es tranquilo y cuyo peor turno es raro, con pocos avisos por la noche, una proporción decreciente de avisos repetidos y una proporción de toil que baja porque se han eliminado orígenes, no porque se hayan reclasificado. También muestra el esfuerzo para llegar ahí: trabajo de mejora que aparece en el plan, financiado y entregado. Si los recuentos de avisos bajan mientras los clientes informan de más incidentes que la monitorización no captó, los números mejoran mirando hacia otro lado.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Contar avisos desde la herramienta de avisos | Automático, barato y difícil de discutir | Cuenta interrupciones, no su costo; ajustar alertas cambia el recuento sin cambiar la carga |
| Muestreo de tiempo para el toil | Precisión razonable con un esfuerzo modesto | Necesita disciplina; las muestras pequeñas son ruidosas |
| Informes a nivel de rotación | Coincide con cómo se organiza el trabajo; seguro de compartir ampliamente | Puede ocultar a una persona que lo está pasando mal; necesita un canal de conversación de apoyo a su lado |
| Tope estricto de toil (por ejemplo el objetivo del libro de SRE de mantener el toil por debajo del 50 por ciento del tiempo) | Una señal clara que desencadena una respuesta | Un número puede cumplirse reclasificando; un tope necesita respaldo de la dirección |

La tensión central es entre aceptación e inversión. Es fácil tratar una carga alta como el precio normal de un servicio importante y pedir a la gente que la absorba, y es fácil fijar un tope que nadie tiene poder para hacer cumplir. La salida es emparejar cada medida con una decisión: un umbral en el que el equipo se detiene y actúa, un responsable con nombre para la acción y una fecha para volver a mirar. Los números a nivel de rotación son seguros y a veces demasiado gruesos. Cuando alguien lo está pasando mal, la conversación pertenece a esa persona y a su responsable, usando su propio relato de la semana.

## Preguntas para conversar con tu equipo

**1. ¿Cómo se sintió nuestro turno más ocupado del último trimestre, y qué dicen los números sobre él?**
Empieza por la historia antes que por el gráfico. Pide a las personas que estuvieron de guardia que describan el turno, y compáralo luego con los números de avisos por turno y de interrupción nocturna. Si los números subestiman la experiencia, averigua qué falta, como llamadas sin registrar o trabajo hecho después del aviso. Recoge esa lista como la siguiente mejora de la medición.

**2. ¿Qué diríamos que es toil en nuestro equipo, y qué diríamos que no lo es?**
Pon cinco o seis tareas recientes en una pizarra y pide a cada persona que las clasifique como toil, ingeniería o sobrecarga frente a las seis características. Espera desacuerdo y trátalo como útil: los desacuerdos muestran dónde es vaga la definición. Acordad una definición de trabajo para el trimestre siguiente y escribid dos ejemplos de cada una. Evita debatir si el trabajo es agradable, porque la pregunta es si es manual, repetitivo y automatizable.

**3. ¿Qué alerta o tarea eliminaríamos primero si pudiéramos?**
Pide la alerta o la tarea recurrente que todos temen, y pregunta luego qué nos impide eliminarla: el costo de arreglarla, un responsable ausente o la creencia de que es obligatoria. El facilitador debe buscar trabajo barato de eliminar y cuyo responsable no esté en la sala. Termina eligiendo un elemento para la próxima ronda de planificación.

**4. ¿Cuántas personas pueden realmente tomar un turno hoy, y qué límites estamos dispuestos a comprometer?**
Cuenta la preparación con honestidad: quién está formado, quién está disponible y quién tiene restricciones. Compara el resultado con el tamaño nominal de la rotación. Pregunta qué frecuencia de guardia y qué número de noches consecutivas considera aceptable el grupo, y comprueba luego si la práctica actual lo cumple.

**5. Si redujéramos nuestro recuento de avisos a la mitad para el próximo trimestre, ¿cómo sabríamos que no hemos dejado de escuchar?**
Esta pregunta trata de la barrera de protección. Pide al grupo que enumere formas en que el recuento de avisos podría bajar sin que el servicio mejore, como subir umbrales, fusionar alertas o ignorar un origen. Pregunta luego qué veríamos en los informes de clientes y en las medidas de detección si eso hubiera ocurrido. Acordad la barrera de protección y ponedla en la misma página que el volumen.

**6. ¿Quién ve estos números, y qué queremos que hagan con ellos?**
Traza el camino de las medidas de carga desde la rotación hasta los responsables y los líderes. Pregunta qué es probable que concluya cada audiencia, y si alguna vista podría leerse como una clasificación. Acordad la forma que sube: a nivel de rotación, con contexto, con una petición adjunta. Anota cualquier preocupación sobre individuos identificables.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega generan buena parte de la carga de guardia mediante los cambios que liberan. Los equipos que operan lo que construyen pueden ver el vínculo entre una versión y los avisos que la siguen. Deben incluir el toil y el trabajo de guardia en la planificación de capacidad, programar la eliminación de toil como trabajo ordinario de la lista de pendientes y vigilar la calidad de los cambios junto a la velocidad (véase el tema 2.8, Métricas DORA).

### Equipos de servicio y operaciones

Los equipos de operaciones llevan el buscapersonas con más frecuencia y ven primero el costo humano. Deben poseer las definiciones, ejecutar el muestreo de tiempo o el etiquetado, publicar los números a nivel de rotación y llevar los principales orígenes de toil y las causas repetidas a los equipos propietarios con evidencia. Su riesgo es absorber la carga en silencio por profesionalidad. Un registro sereno y factual de noches y semanas es una petición de ayuda más eficaz que una queja, y los registros nunca deben convertirse en una clasificación de las personas que respondieron.

### Liderazgo y gobernanza

Los líderes deciden la dotación, las prioridades y si se financia el trabajo sobre el toil. Un líder que lee una proporción alta de toil como mal desempeño enseña al equipo a reducirla reetiquetando. Un líder que la lee como la factura de un trabajo que la organización eligió no financiar obtiene datos honestos y un plan. La gobernanza debe esperar un límite a la carga de la rotación y una respuesta visible cuando se supera (véase el tema 9.2, Métricas de satisfacción y bienestar).

### Clientes y usuarios

Los usuarios no ven la rotación, pero sienten sus efectos: diagnósticos más lentos de personas cansadas, incidentes repetidos por causas sin corregir y la marcha de personas que conocían el servicio. Donde los usuarios abarcan muchas zonas horarias, sus necesidades fuera de horario moldean la rotación, y el costo de cubrirlas es un tema legítimo para una conversación de nivel de servicio (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de ITIL ágil

Un minorista en línea de tamaño medio opera una plataforma de pedidos, un servicio de cuentas de clientes y una integración con el almacén. Una rotación de seis ingenieros de dos equipos de producto y un pequeño grupo de operaciones comparte un turno semanal de guardia. Todos los números de este ejemplo son ilustrativos.

La revisión mensual muestra una mediana de 9 avisos por turno y un percentil 90 de 31. El turno más ocupado tuvo 58 avisos. Aproximadamente la mitad de los avisos llega fuera de horario, y 6 de los 8 turnos del trimestre incluyeron un aviso entre las 22:00 y las 07:00. El muestreo de tiempo sugiere que el toil ocupa el 55 por ciento del tiempo de trabajo.

El turno más ocupado coincidió con la caducidad de un certificado de la integración con el almacén que avisó a la rotación 22 veces en una noche. Una alerta de espacio en disco de un servidor por lotes explica casi una cuarta parte de los avisos, y la mayoría se cerraron vaciando a mano un directorio temporal. La tasa de avisos repetidos es del 41 por ciento. Una vista de Pareto muestra que las renovaciones manuales de certificados, la limpieza de disco y las solicitudes de acceso ocupan la mayoría de las horas de toil.

El equipo toma tres elementos para las próximas cuatro semanas: automatizar la renovación de certificados, corregir la causa del directorio temporal lleno y trasladar las solicitudes de acceso a un formulario de autoservicio cuyo responsable sea el equipo de identidad. Un acuerdo de trabajo fija un límite de un turno de cada cuatro por persona y un día de descanso tras una noche con tres o más avisos. La profundidad de la rotación es de 6 personas para una necesidad acordada de 8, así que dos ingenieros de un tercer equipo empiezan la formación de preparación.

Un riesgo de manipulación aparece en la revisión siguiente. Los avisos por turno han bajado a una mediana de 4, y el percentil 90 a 12. Un gerente está contento. Un miembro del equipo señala que el umbral de la alerta de disco se subió 20 puntos y que el servidor por lotes se llenó dos veces sin aviso. Los incidentes informados por clientes sobre pedidos por lotes retrasados aumentaron. La barrera de protección, los incidentes informados por clientes que la monitorización pasó por alto, lo detectó. El cambio de umbral se revierte, la limpieza del directorio se programa como una corrección y el equipo añade una regla por la que todo cambio de umbral se registra con su motivo y se revisa tras un mes. La proporción de toil del trimestre siguiente es del 38 por ciento (ilustrativo) y se informa con el método de muestreo a su lado.

## Perspectiva por sector

**Startup.** Un equipo pequeño suele no tener una rotación formal, así que todos están de guardia todo el tiempo y el costo es invisible. Cuenta los avisos y los despertares nocturnos en una hoja de cálculo y escribe las tres tareas repetitivas mayores. Los fundadores que llevan el buscapersonas ellos mismos son un riesgo para el negocio, no una insignia de compromiso.

**Pequeña empresa.** Una o dos personas pueden llevar todo TI. Mide lo que no necesita herramientas: llamadas fuera de horario, tareas que se repiten y vacaciones que no pueden tomarse. Un proveedor de servicios gestionados puede asumir parte de la rotación si el contrato indica tiempos de respuesta y horarios. La profundidad de la rotación suele ser uno, que es el principal riesgo.

**Gran empresa.** La escala trae rotaciones que siguen al sol, plataformas compartidas y varios proveedores. Define las medidas una sola vez, fija ventanas laborales locales por región y evita promediar entre rotaciones con servicios muy distintos. Las normas laborales de algunos países limitan el servicio de guardia y exigen periodos de descanso, y estos pertenecen a los límites de la rotación.

**Gobierno y sector público.** Los servicios pueden necesitar cobertura las 24 horas por ley o por contrato, y la dotación está sujeta a la contratación y a los grados. Los límites de rotación y las reglas de descanso suelen regirse por convenios laborales, así que mide frente a ellos e informa cuando se superan. La rendición de cuentas pública hace más valioso y más difícil un informe franco: construye un canal seguro para los datos de carga y sé explícito en que describen el sistema y la dotación, no a los individuos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es proteger la calidad del servicio y retener a las personas cualificadas. Quienes responden cansados diagnostican más despacio, y cuando se van las personas con experiencia, el conocimiento se va con ellas. Reemplazar a una persona tiene costos reales en contratación, incorporación y menor rendimiento durante el periodo de aprendizaje, y una organización puede estimar esos costos a partir de sus propios registros. El toil también quita capacidad a la mejora. Un equipo que dedica la mayor parte de su tiempo a operaciones manuales no puede reducir los incidentes que las causan.

El costo de las medidas es modesto. La herramienta de avisos ya cuenta los avisos, y el muestreo de tiempo cuesta unos minutos por persona cada quincena. El costo mayor es actuar sobre los hallazgos: tiempo de ingeniería para eliminar toil, dotación para una rotación sostenible y tiempo de revisión. Cuenta el mantenimiento de la automatización como un costo, porque un paso automatizado sin mantener se convierte en el incidente de mañana.

El retorno aparece como menos avisos por causas conocidas, menos interrupciones nocturnas, horas de toil devueltas al trabajo de mejora, menor abandono de la rotación y diagnósticos más rápidos. No hay una cifra universal, así que estima la tuya. Para un origen de toil, multiplica las horas mensuales por un costo horario cargado acordado con finanzas, compáralo con el esfuerzo de eliminarlo y revisa tras dos ciclos. Para la sostenibilidad de la rotación, registra las salidas y las ausencias largas de la rotación y compáralas con las medidas de carga a lo largo del tiempo, tratando el vínculo como una hipótesis que comprobar, no como una causa probada. Donde se necesite una cifra, indícala como una estimación y muestra los insumos (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Clasificar a las personas por avisos.** Convierte una medida del sistema en una puntuación de desempeño y enseña a quienes responden a evitar turnos y a ocultar interrupciones. Informa por rotación, posición de turno y servicio.
- **Reducir avisos silenciando alertas.** El recuento baja y la detección se debilita. Empareja el volumen con la detección y con los incidentes informados por clientes, y revisa cada cambio de umbral.
- **Llamar toil a todo.** Una definición tan amplia que incluye reuniones y problemas difíciles destruye la señal. Usa las seis características y guarda una lista de ejemplos.
- **Una meta de toil sin autoridad detrás.** Un tope que no puede desencadenar una decisión se convierte en un número sobre el que discutir. Acordad de antemano qué ocurre cuando se supera y quién decide.
- **Automatizar antes de comprender.** La automatización puede fijar un mal proceso y añadir mantenimiento. Pregunta primero si la necesidad puede eliminarse por diseño y mide después el toil eliminado.
- **Promediar entre servicios dispares.** Una media entre un servicio estable y uno frágil no describe a ninguno. Muestra cada servicio y cada rotación por separado.
- **Medir y no actuar.** Los números de carga sin respuesta enseñan a la gente que los datos no importan. Adjunta una decisión, un responsable y una fecha de revisión a cada hallazgo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y datos | Los avisos y el toil se describen a ojo; sin definición común | Algunas rotaciones cuentan avisos; el toil se discute pero no se mide | Una definición escrita de aviso, turno, fuera de horario y toil; datos de avisos recogidos por herramienta | Distribuciones y momentos con seguimiento de su tendencia; toil muestreado cada mes y auditado | Definiciones revisadas entre equipos y proveedores; esfuerzo de muestreo ajustado al valor de las respuestas |
| Sostenibilidad de la rotación | Informal; las mismas pocas personas absorben el buscapersonas | Existen calendarios; los límites se discuten pero no se escriben | Límites escritos de frecuencia y descanso; profundidad de la rotación conocida | Límites vigilados e incumplimientos revisados con acción | Rotaciones compartidas entre equipos y proveedores, y carga equilibrada a medida que cambian los servicios |
| Uso de los números | Usados para culpar o ignorados | Mostrados a los responsables | Mostrados primero a la rotación, con las decisiones que respaldan | Emparejados con barreras de protección y revisados con una cadencia que lleva a cambios financiados | Compartidos con líderes y socios para planificar la dotación y el alcance del servicio |

## Lista de verificación

- [ ] Aviso, turno, ventana de fuera de horario y ventana de fusión están definidos por escrito.
- [ ] El toil tiene una definición escrita con ejemplos y no ejemplos de nuestro propio servicio.
- [ ] Los avisos por turno se informan como una mediana, un percentil alto y el turno más ocupado.
- [ ] La proporción de avisos fuera de horario y la tasa de interrupción nocturna se informan junto al volumen.
- [ ] La carga se informa por rotación, posición de turno y servicio, nunca por persona con nombre.
- [ ] La proporción de toil sobre el tiempo se muestrea según un calendario, con el método escrito.
- [ ] Los cinco orígenes principales de toil y las principales causas de avisos repetidos están en la lista de pendientes de mejora.
- [ ] Los límites de rotación y las reglas de descanso están en un acuerdo del equipo, y la profundidad de la rotación se comprueba cada trimestre.
- [ ] Toda medida de carga tiene una barrera de protección en la misma página, incluidas la detección y los incidentes informados por clientes.
- [ ] Cada revisión termina con una decisión, un responsable y una fecha.
- [ ] Los cambios de umbrales y de alertas se registran con un motivo y se revisan tras un mes.

## Prompts de IA

**Revisa la carga de una rotación y busca patrones.**

```text
Ayudo a llevar la rotación de guardia de [service or group of services]. La
rotación tiene [number] personas y una duración de turno de [length]. Nuestra
ventana laboral es [hours and time zone], y nuestra ventana de sueño protegida
es [hours]. A continuación hay datos de avisos anonimizados de [period], con las
columnas [list columns]:

[paste data with names removed]

Describe la distribución de avisos por turno, la proporción de avisos fuera de
horario y la proporción de turnos con una interrupción nocturna. Señala los
turnos más ocupados, los grupos de alertas que se repiten y cualquier patrón por
día o posición de turno. Informa solo a nivel de rotación y de servicio, nunca
por persona. No inventes valores de referencia ni metas. Enumera tus supuestos y
lo que no pudiste determinar a partir de los datos.
```

**Clasifica tareas como toil, ingeniería o sobrecarga.**

```text
Nuestro equipo opera [service]. Definimos el toil como trabajo manual,
repetitivo, automatizable, táctico, sin valor duradero y que crece con el
servicio. Aquí hay una lista de tareas recientes con horas aproximadas: [paste
list].

Para cada tarea, di si encaja como toil, ingeniería o sobrecarga, y nombra cuál
de las seis características cumple o incumple. Señala las tareas dudosas y di
qué información adicional las resolvería. Sugiere cómo podría eliminarse cada
origen de toil por diseño, automatizarse o entregarse a un equipo propietario,
sin inventar ahorros. Enumera tus supuestos y preguntas para el equipo.
```

**Redacta vectores de manipulación y barreras de protección para nuestras métricas de carga.**

```text
Informamos estas métricas de guardia y de toil de [rotation name]: [list metrics
with definitions]. Se muestran a [audience] para respaldar [decision]. Nuestros
datos provienen de [paging tool, work tracker, survey].

Para cada métrica, enumera formas realistas en que podría mejorar sin que la
rotación esté mejor, y propón una métrica o práctica de barrera de protección
que revelaría cada una. Di luego cómo podría manipularse la propia barrera de
protección. No inventes valores de referencia. Enumera tus supuestos y las
definiciones que debería ajustar.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados y las barreras de protección cuando añadas una medida de guardia o de toil a un panel.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen cada métrica emparejada con un vector de manipulación y una barrera de protección.

## Puntos clave

- Mide la carga de la rotación, por turno, servicio y hora del día, y no clasifiques nunca a las personas que la componen.
- Cuenta cuándo ocurren las interrupciones además de cuántas son, porque los avisos nocturnos cuestan más que los de horario de oficina.
- Define el toil de forma estrecha con sus seis características, estima su proporción de tiempo con un método sencillo y juzga la tendencia.
- Vincula los avisos y los orígenes de toil con el trabajo sobre problemas y con cambios de automatización o de diseño, y mide el toil realmente eliminado.
- Empareja cada medida de carga con una barrera de protección como la detección y los incidentes informados por clientes, para que no se puedan comprar números más bajos mirando hacia otro lado.
- Trata una carga pesada como una petición de inversión, con una decisión, un responsable y una fecha de revisión.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
