# Métricas de pronóstico y planificación de entregas

**Los equipos que entregan software de forma continua y además operan servicios en vivo necesitan pronósticos honestos, no compromisos arrancados a las estimaciones, así que planifica a partir del flujo del trabajo terminado, da rangos en lugar de fechas y mantén cualquier número de planificación local de un equipo fuera de las comparaciones y de las metas.**

## Resumen y motivación

Las partes interesadas hacen dos preguntas a todo equipo de entrega: "¿Cuándo estará hecho?" y "¿Cuánto puedes asumir?" La respuesta ágil parte de los objetivos de los principios del Manifiesto Ágil: entregar software valioso de forma continua, colaborar a diario con las partes interesadas, reflexionar y mejorar con regularidad y construir el trabajo en torno a personas motivadas en las que se confía para que lo hagan. Un pronóstico que sirva a esos objetivos es una conversación entre las partes interesadas sobre los resultados probables y el riesgo. No es una promesa arrancada bajo presión.

Los equipos que operan servicios en vivo tienen una dificultad adicional. Su capacidad se comparte entre el cambio planificado, el trabajo de incidentes no planificado, las solicitudes de servicio y la mejora. Un plan que ignora la carga operativa fallará por razones que nadie planificó (véase el tema 2.9, Trabajo operativo y trabajo no planificado). La gestión de servicios de TI (ITSM), tal como la codifica ITIL, trata esto como una cuestión de capacidad y demanda. La [planificación de la capacidad](https://en.wikipedia.org/wiki/Capacity_planning) es el proceso de determinar la capacidad que una organización necesita para atender una demanda cambiante. La práctica ágil de planificar según lo que el equipo puede terminar realmente es la misma idea a nivel de equipo.

Hay dos grandes maneras de pronosticar la entrega:

- **A partir de estimaciones.** El equipo dimensiona los elementos en alguna unidad, suma los tamaños y divide por una tasa. Muchos equipos usan un dimensionamiento relativo como los [puntos de historia](https://en.wikipedia.org/wiki/Story_point), y la tasa se llama [velocidad](https://en.wikipedia.org/wiki/Velocity_(software_development)). Es rápido de empezar, depende de los hábitos de estimación del equipo y solo tiene significado dentro de un equipo.
- **A partir de datos de flujo.** El equipo usa su propio registro de trabajo terminado: cuántos elementos completa por semana (rendimiento) y cuánto tardan los elementos de principio a fin (tiempo de ciclo). Como son recuentos y tiempos transcurridos, no opiniones, resisten la deriva y pueden combinarse con simulación para dar un rango de resultados. Este enfoque proviene de la tradición del flujo, que incluye la Guía Kanban, y funciona con cualquier forma de organizar el trabajo, incluidos los equipos que entregan de forma continua sin ningún periodo de planificación fijo.

Este tema se inclina por el segundo enfoque, porque la entrega continua de software produce un flujo constante de elementos terminados que los datos de flujo describen directamente (véanse el tema 2.1, Medidas de flujo, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). Aun así cubre el primero, porque muchos equipos usan estimaciones y porque el mal uso de la velocidad es una de las formas más comunes en que fallan las métricas de entrega.

Los pronósticos son un [pronóstico](https://en.wikipedia.org/wiki/Forecasting) de un futuro incierto, y la incertidumbre es el punto. La idea del [cono de incertidumbre](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) dice que las estimaciones tempranas son las menos ciertas. La [falacia de la planificación](https://en.wikipedia.org/wiki/Planning_fallacy) dice que la gente subestima cuánto tardarán sus propios planes aunque sepa que planes similares se retrasaron. Una buena medición del pronóstico nombra esto y mide con qué frecuencia aciertan los pronósticos.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) importa aquí, porque los pronósticos y los planes se convierten fácilmente en promesas y luego en metas. Cuando se juzga a un equipo por cumplir una fecha, este esconde riesgos, recorta calidad o se queda corto a propósito en la estimación (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Pronostica a partir del trabajo terminado.** Lo que el equipo ha entregado es mejor evidencia que lo que nadie cree que entregará.
- **Da un rango con una probabilidad.** "Probablemente a finales del mes próximo, muy probablemente a finales del siguiente" supera a una fecha única.
- **Planifica según la capacidad real.** Incluye el trabajo operativo, deja tiempo para la mejora y no planifiques a plena utilización.
- **Mantén las estimaciones locales.** Cualquier unidad de dimensionamiento es una herramienta de planificación privada de un equipo, nunca una base de comparación.
- **Mide la calidad del pronóstico, no solo la entrega.** Un pronóstico acertado por las razones equivocadas es suerte.
- **Trata el pronóstico como compartido.** Las partes interesadas y el equipo lo construyen juntos y lo revisan cuando cambian los hechos.
- **Confía en el equipo.** Las personas en las que se confía y a las que se apoya dan pronósticos honestos.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de aciertos del pronóstico | Proporción de pronósticos en los que el resultado real cayó dentro del rango indicado | pronósticos cuyo resultado real estuvo dentro del rango indicado / pronósticos realizados | porcentaje | Registro de pronósticos y registros de entrega | Gestión de la capacidad y el desempeño; mejora continua | Precisión del pronóstico en las conversaciones de planificación | Mensual |
| Anchura del rango del pronóstico | Cuán ancho fue el rango indicado, en relación con el pronóstico mediano | (límite superior menos límite inferior) / pronóstico mediano | razón | Registro de pronósticos | Gestión de la capacidad y el desempeño | Estrechamiento del cono de incertidumbre | Mensual |
| Éxito de la meta de entrega | Proporción de las metas de entrega declaradas que se cumplieron en el periodo, juzgadas por el resultado | metas cumplidas / metas fijadas | porcentaje | Registros de metas acordados con las partes interesadas | Gestión de niveles de servicio; mejora continua | Revisión de resultados con las partes interesadas | Mensual o por versión de una meta |
| Tasa de cambio de alcance | Proporción del trabajo comprometido que se añadió, eliminó o redimensionó después de hacer el pronóstico | elementos añadidos o eliminados tras el pronóstico / elementos del pronóstico original | porcentaje | Historial de cambios del gestor de trabajo | Habilitación de cambios; gestión de niveles de servicio | Adaptación de la lista de pendientes a la retroalimentación | Mensual |
| Asignación de capacidad | Proporción de la capacidad del equipo dedicada a cambio, trabajo operativo y mejora | elementos u horas completados en cada categoría / todos los elementos u horas completados | porcentaje | Gestor de trabajo con tipo de trabajo | Gestión de la capacidad y el desempeño; gestión de incidentes | Distribución por tipo de trabajo | Mensual |
| Estabilidad del rendimiento | Variación del rendimiento semanal | desviación estándar del rendimiento semanal / media del rendimiento semanal | razón | Gestor de trabajo | Gestión de la capacidad y el desempeño | Previsibilidad del flujo | Mensual |
| Velocidad local | El trabajo terminado de un solo equipo en su propia unidad de dimensionamiento por periodo de planificación | suma de las estimaciones de los elementos que cumplen la definición de terminado en el periodo | puntos definidos por el equipo | Gestor de trabajo | Gestión de la capacidad y el desempeño | Ayuda de planificación de la capacidad del equipo | Por periodo de planificación |

Define los relojes. Un pronóstico se "hace" cuando se registra y se comparte con las partes interesadas, y se "cumple" cuando el resultado se libera y está en uso, no cuando se fusiona el código. El rendimiento cuenta los elementos que cumplen la definición de terminado, y los elementos de tipos distintos se cuentan en series separadas si su tamaño difiere mucho. La velocidad local solo se muestra al equipo que la posee.

## Recomendaciones

### Pronostica a partir del flujo

**1. Construye el pronóstico a partir del rendimiento y el tiempo de ciclo.** Cuenta los elementos terminados cada semana durante las últimas 12 a 26 semanas. Usa ese historial para pronosticar cuántos elementos terminarán en una fecha dada, o cuándo es probable que termine un conjunto de elementos. Una simulación con el [método de Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), que toma muestras del propio historial del equipo miles de veces, convierte el historial en un rango de probabilidades. Hojas de cálculo sencillas o pequeños scripts lo hacen bien. Indica la ventana del historial y la fecha del pronóstico.

**2. Informa percentiles de los resultados.** Di "50 por ciento de probabilidad para el 14 de marzo, 85 por ciento de probabilidad para el 4 de abril, 95 por ciento de probabilidad para el 18 de abril". Cada percentil es un enunciado honesto de riesgo, y las partes interesadas pueden elegir cuánto margen necesitan. Una sola fecha oculta esa elección (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**3. Usa los percentiles del tiempo de ciclo para elementos individuales.** Para un elemento, el percentil 85 de los tiempos de ciclo pasados responde a "¿cuánto podría tardar esto?" mejor que cualquier estimación. Muéstralo en el tablero, como una línea con la que comparar la antigüedad de los elementos en curso (véase el tema 2.1, Medidas de flujo).

**4. Mantén los tamaños de los elementos más o menos uniformes.** El pronóstico basado en rendimiento funciona mejor cuando los elementos son pequeños y lo bastante parecidos para contarse. Los equipos llegan ahí dividiendo el trabajo en la pieza más pequeña que aún aporte valor, un hábito de la entrega continua de software en sí mismo. Si los elementos varían mucho, sigue series separadas para distintos tipos de trabajo.

**5. Actualiza el pronóstico siempre que cambien los hechos.** Un pronóstico es una vista viva. Cuando cambia el alcance, cambia el tamaño del equipo o un incidente grande consume una semana, vuelve a ejecutarlo e informa a las partes interesadas. Versiona los pronósticos para poder juzgarlos después.

### Planifica según la capacidad real

**6. Asigna la capacidad por tipo de trabajo.** Registra qué proporción del trabajo terminado del equipo fue cambio planificado, trabajo operativo no planificado, solicitudes de servicio y mejora. Planifica según la proporción que muestra la experiencia, no según un ideal. Los equipos que operan servicios en vivo suelen descubrir que un tercio o más de su capacidad se va en trabajo operativo, y la cifra es suya para medirla, no para tomarla prestada (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

**7. Reserva capacidad para la mejora.** La mejora continua es una parte permanente del trabajo, así que planifica tiempo para ella en la asignación y protégela. Los equipos que la recortan en cada periodo ajetreado ven subir su carga operativa, lo que la recorta aún más. Sigue la proporción de mejora y el efecto de las mejoras sobre la proporción operativa.

**8. No planifiques a plena utilización.** Un equipo planificado al 100 por ciento no tiene margen para la variación, y las colas crecen a medida que la utilización se acerca al límite (véase el tema 2.3, Trabajo en curso y teoría de colas). Deja holgura para lo inesperado y trátala como una decisión de diseño y no como un desperdicio.

### Usa las estimaciones con cuidado si las usas

**9. Trata la velocidad como una ayuda de planificación local.** Si un equipo dimensiona el trabajo en puntos de historia, su velocidad puede ayudarle a decidir cuánto asumir en su próxima conversación de planificación, y debe compararse solo con el pasado reciente de ese mismo equipo. Nunca compares equipos, fijes una meta de velocidad ni informes la velocidad hacia arriba como medida de productividad. Los puntos no tienen una unidad común entre equipos, y la presión por subir el número infla las estimaciones sin entregar más.

**10. Compara de vez en cuando las estimaciones con los tiempos de ciclo reales.** Traza las estimaciones frente al tiempo que tardaron los elementos. Si las estimaciones grandes no tardan más que las pequeñas, el esfuerzo de estimar no está comprando mucho, y contar elementos puede servir igual de bien al equipo. Si correlacionan, las estimaciones llevan información que vale la pena conservar. Deja que el equipo decida con los datos.

### Mide si funciona

**11. Registra cada pronóstico y puntúalo.** Anota el pronóstico, el rango y el resultado real, y calcula la tasa de aciertos. Un pronóstico bien calibrado del percentil 85 debería cumplirse alrededor del 85 por ciento de las veces. Si los aciertos están muy por encima o por debajo, ajusta el método. Comparte el registro con las partes interesadas, porque la confianza en el pronóstico se construye con el historial.

**12. Juzga las metas de entrega por el resultado.** Una meta como "los clientes pueden pagar con factura" se cumple cuando los clientes pueden hacerlo, no cuando se cierran las tareas. Acordad las metas con las partes interesadas en palabras sencillas, revisadlas juntos y registrad el resultado. Esto mantiene la planificación atada a la colaboración continua y desalienta la entrega de trabajo que nadie usa (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Tasa de aciertos del pronóstico | Indicar rangos muy anchos para que todos los pronósticos acierten; repronosticar a posteriori | Anchura del rango del pronóstico; conservar el pronóstico original en el registro; comparar los rangos con el historial de los pares |
| Anchura del rango del pronóstico | Estrechar los rangos para parecer seguro | Tasa de aciertos del pronóstico; exigir que el rango se construya a partir del historial registrado |
| Éxito de la meta de entrega | Fijar metas fáciles; redefinir una meta a posteriori; contar la producción como resultado | Las partes interesadas juzgan el resultado; redacción de la meta conservada en un registro; comprobar los datos de uso del cambio entregado |
| Tasa de cambio de alcance | Congelar el alcance rechazando cambios válidos; esconder el cambio de alcance redimensionando los elementos | Satisfacción de las partes interesadas con la capacidad de respuesta; motivos de los cambios registrados |
| Asignación de capacidad | Etiquetar mal el trabajo operativo como mejora; esconder la carga operativa trabajando fuera del tablero | Conciliar con los registros de incidentes y solicitudes; muestrear elementos para verificar su tipo |
| Estabilidad del rendimiento | Dividir los elementos en piezas triviales para subir el recuento; cerrar elementos sin terminarlos | Distribución de tamaños de los elementos; tasa de reaperturas; muestra para verificar el valor entregado |
| Velocidad local | Inflar las estimaciones; dividir historias para reclamar puntos; comparar equipos | Mantenerla privada del equipo; comparar con el rendimiento y el tiempo de ciclo; no fijar nunca una meta |

Una lectura sana son pronósticos que se cumplen aproximadamente a la tasa indicada, metas que las partes interesadas coinciden en que se cumplieron, un panorama de capacidad que coincide con lo que vive el equipo y un número de velocidad que, si existe, lo usa el equipo y nadie más.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Pronóstico basado en el flujo | Usa datos reales, resiste la inflación, da rangos | Necesita un historial estable y elementos de tamaño parecido |
| Pronóstico basado en estimaciones | Rápido de empezar, fomenta la conversación sobre el trabajo | Subjetivo, se infla bajo presión, no comparable entre equipos |
| Compromiso con una fecha única | Sencillo de comunicar | Oculta el riesgo; castiga la honestidad |
| Rango con probabilidad | Honesto sobre la incertidumbre | Al principio, más difícil de leer para algunas partes interesadas |
| Planificación a plena utilización | Parece eficiente | Las colas crecen; no hay margen para incidentes ni aprendizaje |
| Holgura planificada | Absorbe la variación y respalda la mejora | Parece capacidad ociosa a los no convencidos |

La respuesta en prosa es partir de los datos de flujo, añadir estimaciones solo donde ayuden al equipo y hablar en rangos. Cuando un contrato exija una fecha, da la fecha que respalda el percentil 85 o 95 y di qué la cambiaría.

## Preguntas para conversar con tu equipo

**1. ¿Qué diríamos si una parte interesada preguntara "cuándo estará hecho" y quisiera una respuesta honesta?**
Pide al equipo que responda para una pieza de trabajo real, primero con una fecha única y luego con un rango. Fijaos en la diferencia de comodidad de cada respuesta. El facilitador debe recoger lo que el equipo necesitaría saber para dar el rango con honestidad, como el historial, el tamaño de los elementos y los riesgos conocidos.

**2. ¿Cuánta de nuestra capacidad se va realmente en cambio planificado, y cómo lo sabemos?**
Mira los últimos tres meses de trabajo terminado por tipo. Compara con el plan que hizo el equipo. La conversación suele revelar que el trabajo operativo es mayor de lo planificado y que el trabajo de mejora es menor. Acordad cuál debería ser la asignación y qué decisión la cambiaría.

**3. ¿Dónde nos ayudan las estimaciones, y dónde solo nos cuestan tiempo?**
Traza una muestra de estimaciones frente a los tiempos de ciclo reales. Discutid si las estimaciones mayores fueron realmente más lentas. Si el vínculo es débil, preguntad qué haría el equipo de otro modo si solo contara elementos. Decidid si continuar, simplificar o dejar de estimar durante un periodo de prueba.

**4. ¿Quién ve los números de planificación de nuestro equipo, y qué ocurre con ellos?**
Sigue cada número de planificación desde el equipo hasta su audiencia. Pregunta si alguien compara equipos con él o fija metas. Si es así, discutid cómo detenerlo y qué ofrecer en su lugar. El facilitador debe estar listo para explicar que los números locales pierden valor cuando viajan.

**5. ¿Cuándo falló un pronóstico nuestro, y qué aprendimos?**
Elige un fallo y síguelo. ¿Fue un cambio de alcance, un incidente grande, una dependencia o un supuesto equivocado? ¿Qué lo habría señalado antes? Acordad un cambio en la práctica de pronóstico, como registrar las dependencias o actualizar el pronóstico cada semana.

**6. ¿Qué metas cumplimos el trimestre pasado, y quién lo dijo?**
Enumera las metas de entrega y quién juzgó cada una. Si el equipo juzgó sus propias metas, discutid cómo incorporar a las partes interesadas. La conversación respalda la colaboración continua y muestra si las metas tratan de resultados o de tareas.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega poseen el pronóstico y los datos de flujo que lo respaldan. Deben publicar rangos, mantener los elementos pequeños y repronosticar cuando cambien los hechos. Los equipos que decidan dimensionar el trabajo en puntos deben mantener los números dentro del equipo. El objetivo es un flujo constante de trabajo terminado y valioso, y un pronóstico en el que las partes interesadas confíen porque tiene historial.

### Equipos de servicio y operaciones

Los equipos de operaciones cargan con la demanda que desbarata los planes. Deben compartir la carga de incidentes y solicitudes con los equipos de entrega, para que los planes de capacidad partan de números reales. Los equipos de operaciones que además entregan cambios pueden usar el mismo pronóstico basado en el flujo para su propio trabajo. La planificación conjunta del trabajo de cambio y de operación es un buen lugar para la colaboración continua entre ambos grupos.

### Liderazgo y gobernanza

Los líderes deciden si un pronóstico es un enunciado de riesgo o una promesa. Deben pedir rangos, financiar la holgura y la mejora, y resistirse a usar la velocidad o el rendimiento para comparar equipos. Los órganos de gobernanza deben mirar la tasa de aciertos del pronóstico a lo largo del tiempo y los resultados de las metas, y tratar los fallos repetidos como una señal sobre el sistema, como las dependencias y la carga operativa, no sobre las personas.

### Clientes y usuarios

A los usuarios les importa cuándo verán el cambio y si les ayudará. Un rango con una confianza indicada les sirve mejor que una fecha que se retrasa. Deben participar en juzgar si se cumplieron las metas, ya que son quienes sienten el resultado. Informar a los usuarios cuando un pronóstico cambia, y por qué, forma parte de tratarlos como colaboradores.

## En la práctica: un ejemplo de ITIL ágil

El equipo digital de una compañía regional de energía construye un portal de facturación para clientes y lo opera en producción. Los números siguientes son ilustrativos.

Las partes interesadas han pedido al equipo una fecha para una nueva funcionalidad de planes de pago compuesta por 22 elementos. El trimestre pasado el equipo dio una fecha firme basada en sus estimaciones, la incumplió por cinco semanas debido a dos incidentes graves y perdió la confianza de las partes interesadas. Esta vez la responsable de entrega extrae el rendimiento de las últimas 20 semanas, que va de 3 a 9 elementos por semana con una mediana de 6, y anota que el trabajo operativo supuso alrededor del 35 por ciento de los elementos terminados.

Ejecuta una simulación a partir del historial. Muestra que 22 elementos terminan en 4 semanas aproximadamente la mitad de las veces, en 6 semanas alrededor del 85 por ciento de las veces y en 8 semanas alrededor del 95 por ciento de las veces. Presenta estas tres fechas a las partes interesadas, junto con los supuestos: tamaño del equipo sin cambios, carga operativa como en las últimas 20 semanas y ningún alcance nuevo. Un responsable de producto pregunta por un lanzamiento para una fecha de facturación concreta dentro de ocho semanas. El equipo y las partes interesadas acuerdan planificar para la fecha del 85 por ciento, reservar las dos últimas semanas como margen y fijar un punto de control cada dos semanas para repronosticar.

En el primer punto de control, un fallo en la pasarela de pagos se ha llevado tres días y la simulación mueve una semana la fecha del 85 por ciento. El equipo informa a las partes interesadas el mismo día, con el motivo, y acuerdan sacar un elemento de poco valor. La funcionalidad sale en producción en la fecha del margen. La meta de entrega, "los clientes pueden configurar un plan de pago sin llamar", la juzgan el responsable de producto y un panel de clientes tras tres semanas. Se cumple para la mayoría de los clientes, y un tema recurrente en los comentarios muestra confusión con una pantalla, que pasa a la lista de pendientes. El equipo registra que su tasa de aciertos del pronóstico del trimestre es de cuatro de cinco. Las partes interesadas piden a la responsable de entrega que lleve rangos de pronóstico a la próxima sesión de planificación, y el equipo abandona los puntos de historia porque contar elementos daba la misma respuesta.

## Perspectiva por sector

**Startup.** Las prioridades cambian deprisa, así que mantén los pronósticos cortos y aproximados. Sigue el rendimiento desde el principio, ya que no cuesta nada, y da rangos a los fundadores. Resiste la tentación de importar un sistema de planificación pensado para equipos grandes.

**Pequeña empresa.** Una o dos personas pueden hacer juntas el trabajo de cambio y de operación, sin capacidad de reserva. Sé explícito sobre la división e informa al dueño cuando un incidente vaya a empujar una fecha. Basta un recuento semanal sencillo de elementos terminados.

**Gran empresa.** Muchos equipos y dependencias hacen que los pronósticos dependan del flujo de otros equipos. Pronostica cada equipo con sus propios datos, haz visibles las dependencias y combina los rangos con cuidado, ya que sumar los mejores casos da un total engañoso. Evita las consolidaciones que comparan equipos por velocidad.

**Gobierno y sector público.** Los presupuestos fijos, la contratación y las fechas legales crean presión por compromisos con una fecha única. Indica la fecha que respalda el percentil elegido, explica los supuestos y registra con apertura las compensaciones de alcance. Donde exista una fecha obligatoria, planifica el alcance para ajustarse a ella (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es bajo. Los datos de rendimiento y tiempo de ciclo suelen existir en el gestor de trabajo del equipo. Una hoja de cálculo de pronóstico o un pequeño script se construye en un día, y un pronóstico se actualiza en minutos. El costo recurrente es el tiempo para registrar los pronósticos y los resultados y para mantener una breve conversación de punto de control con las partes interesadas.

El retorno viene de menos sorpresas y mejores decisiones. Las partes interesadas que entienden el riesgo pueden elegir un margen, ajustar el alcance o reordenar el trabajo pronto. Los equipos dedican menos tiempo a ceremonias de estimación si contar elementos sirve igual. Bajan los conflictos por fechas incumplidas y los atajos de calidad que provocan. Construye el caso a partir de tu propio historial: la proporción de pronósticos que se cumplieron, el tiempo dedicado a estimar y los cambios de alcance hechos pronto y no tarde. No tomes prestadas cifras de previsibilidad de otras organizaciones.

## Antipatrones y trampas

- **Tratar un pronóstico como un compromiso.** Convierte el pronóstico en una meta, y la honestidad se vuelve costosa. Presenta rangos y revísalos.
- **Comparar equipos por velocidad.** Los puntos son locales, y la comparación los infla. Compara un equipo solo con su propio pasado.
- **Planificar a plena utilización.** La variación se convierte en retraso. Deja holgura.
- **Ignorar el trabajo operativo.** Los planes fallan por la carga que nadie planificó. Mide y planifica la asignación.
- **Usar una fecha única para todo.** Usa percentiles y di cuál elegiste.
- **Estimar con más precisión de la que respaldan los datos.** Las estimaciones detalladas del trabajo lejano son las menos fiables. Pronostica el trabajo lejano de forma gruesa.
- **Fijar una meta de velocidad o de rendimiento.** El número subirá y el valor no.
- **No puntuar nunca los pronósticos.** Sin un historial, la confianza no puede crecer.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Método de pronóstico | Conjeturas de fecha única | Estimaciones sumadas a mano | Rangos basados en el flujo con percentiles | Pronósticos registrados y puntuados; método afinado a partir de la tasa de aciertos | Pronósticos combinados entre equipos y dependencias, compartidos en vivo con las partes interesadas |
| Planificación de la capacidad | Los planes ignoran el trabajo operativo | Carga operativa conocida de forma aproximada | Capacidad asignada por tipo de trabajo a partir de datos | Asignación revisada frente a los resultados; tiempo de mejora protegido | Capacidad planificada conjuntamente con proveedores y operaciones entre servicios |
| Metas y uso de los números | Las metas son listas de tareas | Metas escritas | Metas juzgadas por el resultado con las partes interesadas | Fallos analizados como señales del sistema; números locales mantenidos en privado | Metas fijadas y juzgadas de forma colaborativa con los usuarios; aprendizaje compartido entre equipos |

## Lista de verificación

- [ ] Los pronósticos se construyen a partir del historial propio de rendimiento y tiempo de ciclo del equipo.
- [ ] Los pronósticos se dan como rangos con percentiles, con los supuestos indicados.
- [ ] Cada pronóstico se registra con su rango y su resultado real.
- [ ] La tasa de aciertos del pronóstico y la anchura del rango se revisan cada mes.
- [ ] La capacidad se asigna por tipo de trabajo, incluidos el trabajo operativo y la mejora.
- [ ] La utilización planificada deja holgura para la variación y los incidentes.
- [ ] Cualquier unidad de dimensionamiento o velocidad es privada del equipo y no lleva meta.
- [ ] Las metas de entrega se escriben como resultados y se juzgan con las partes interesadas.
- [ ] Los cambios de alcance se registran con sus motivos.
- [ ] Los pronósticos se actualizan cuando cambian los hechos, y se informa a las partes interesadas.

## Prompts de IA

**Construye un pronóstico basado en el rendimiento.**

```text
Nuestro equipo terminó estos números de elementos en cada una de las últimas
[number] semanas: [paste weekly counts]. Queremos saber cuándo es probable que
estén terminados [number] elementos. Explica cómo producir un rango de
probabilidad usando nuestro propio historial, da un ejemplo resuelto de un
método de simulación sencillo y describe qué supuestos hace. No inventes
historial ni valores de referencia. Enumera tus supuestos y las condiciones en
las que el pronóstico no se aplicaría.
```

**Revisa cómo usamos las estimaciones.**

```text
Dimensionamos los elementos en [unit] y usamos [practice] para planificar. Esta
es una muestra de [number] elementos terminados con estimaciones y tiempos de
ciclo reales en días: [paste data]. Describe si las estimaciones predicen el
tiempo de ciclo en esta muestra, qué implica eso sobre cuánto esfuerzo merece
estimar y qué podríamos probar en su lugar. No afirmes resultados más allá de
los datos. Enumera tus supuestos.
```

**Planifica la capacidad entre el trabajo de cambio y el de operación.**

```text
Durante los últimos [period], nuestro equipo terminó [counts] elementos de estos
tipos: [planned change, incidents, requests, improvement]. Propón una asignación
de capacidad para los próximos [period] que deje holgura y describe cómo
explicarla a las partes interesadas. Sugiere cómo detectar si el trabajo
operativo se está etiquetando mal. No inventes proporciones del sector. Enumera
tus supuestos.
```

**Redacta una revisión de pronóstico con las partes interesadas.**

```text
Redacta un orden del día y un resumen de una página para un punto de control de
pronóstico sobre [piece of work]. Datos: pronóstico original [range], estado
actual [description], cambios desde el último punto de control [list]. Incluye
el rango actualizado, qué lo cambió, opciones de alcance o de plazo y las
preguntas que necesitamos que respondan las partes interesadas. Usa lenguaje
llano. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de pronóstico o de planificación.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que la entrada revisada de una métrica de planificación conserva su vector de manipulación y su barrera de protección.

## Puntos clave

- Pronostica a partir del flujo del trabajo terminado y da rangos con probabilidades en lugar de fechas únicas.
- Planifica según la capacidad real, incluidos el trabajo operativo, el tiempo de mejora y la holgura.
- Trata cualquier unidad de estimación o velocidad como una ayuda privada de un equipo, nunca como una meta ni una comparación.
- Puntúa tus pronósticos: la tasa de aciertos genera confianza.
- Juzga las metas de entrega por el resultado, junto con las partes interesadas y los usuarios.
- Confía en el equipo y apóyalo: los pronósticos honestos vienen de personas a las que no se castiga por la incertidumbre.

## Referencias y lecturas complementarias

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
