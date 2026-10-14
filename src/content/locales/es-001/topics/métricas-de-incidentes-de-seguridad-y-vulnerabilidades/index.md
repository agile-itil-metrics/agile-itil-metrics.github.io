# Métricas de incidentes de seguridad y vulnerabilidades

**La seguridad es parte de entregar y operar un servicio de forma continua, así que mide cuánto tiempo permanece expuesta la gente, con qué rapidez contienes lo que sale mal y cuán dispuestos están los colegas a levantar la mano, y no conviertas nunca un error en un motivo de culpa.**

## Resumen y motivación

Todo servicio carga con debilidades, y algunas se usarán en su contra. Una [vulnerabilidad](https://en.wikipedia.org/wiki/Vulnerability_(computing)) es una debilidad en el software, el hardware, la configuración o el proceso que puede explotarse para dañar la confidencialidad, la integridad o la disponibilidad de un sistema. Un incidente de seguridad es un evento en el que ese daño ocurre o se amenaza de forma creíble. Las métricas de esta área intentan responder a dos preguntas. ¿Cuán expuestos estamos, y con qué rapidez encontramos, corregimos y nos recuperamos de los problemas?

La tradición ágil y DevOps trata la seguridad como una propiedad de la entrega continua, no como una puerta al final de ella. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) amplía la idea de DevOps incorporando comprobaciones de seguridad a la canalización y compartiendo la responsabilidad entre desarrollo, seguridad y operaciones. ITIL, mediante su práctica de gestión de la seguridad de la información, aporta política, pensamiento basado en el riesgo y la conexión con la gestión de incidentes, de cambios y de activos. Las dos se encuentran en el trabajo diario: las actualizaciones de dependencias llegan como cambios ordinarios, los hallazgos de vulnerabilidades se convierten en elementos de la lista de pendientes con responsables y los incidentes se manejan con las mismas revisiones sin culpas que cualquier otro (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

Las métricas de seguridad están expuestas a distorsiones particulares.

- **Contar hallazgos premia no mirar.** Un equipo que escanea menos encuentra menos. Un recuento bruto de vulnerabilidades puede bajar porque un escáner perdió el acceso, no porque algo mejorara.
- **Las puntuaciones de gravedad son insumos, no verdades.** El [Sistema Común de Puntuación de Vulnerabilidades](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) da una puntuación de gravedad de una vulnerabilidad en abstracto, y registros como [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) les dan identificadores. Que una vulnerabilidad te importe depende de si es alcanzable en tu entorno, de si se usa un exploit y de cuánto valor tiene el activo afectado. Una puntuación de gravedad bruta usada sola dirige el esfuerzo a los lugares equivocados.
- **La culpa suprime los informes.** Si se castiga a la gente por hacer clic en un enlace o por informar de un incidente que causó, los informes se detienen y la exposición crece sin ser vista. La seguridad psicológica es un control de seguridad.
- **Las medidas de tiempo ocultan la cola.** Una mediana del tiempo de parcheo puede verse sana mientras un puñado de sistemas críticos permanece expuesto durante meses.

Este tema da las medidas principales, con sus definiciones, sus vectores de manipulación y sus barreras de protección. Se apoya en los registros de activos y de configuración de la parte anterior, porque no puedes parchear ni escanear lo que no puedes encontrar (véanse el tema 7.1, Métricas de gestión de activos de TI, y el tema 7.4, Métricas de calidad de la configuración y la CMDB). Una cautela: esto es una guía de medición, no un manual de seguridad. Elige los controles con profesionales de seguridad cualificados y sigue las normas y los deberes legales que te correspondan, como ISO/IEC 27001 y la orientación de las agencias nacionales.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con dureza a la seguridad. Cuando una métrica se convierte en una meta, la gente reclasifica hallazgos, excluye activos de los escaneos y cierra tickets sin corregir la causa (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Mide el tiempo de exposición además de los recuentos.** Cuánto tiempo permanece abierta una debilidad importa más que cuántas se encuentran.
- **Prioriza según el contexto.** Combina la gravedad, la explotabilidad, la alcanzabilidad y el valor del activo.
- **Comprueba primero la cobertura.** Un informe limpio de un escaneo que pasó por alto la mitad del parque es un falso consuelo.
- **Incorpora la seguridad a la canalización.** Haz que las elecciones seguras sean la opción fácil por defecto y da retroalimentación rápida.
- **Colabora entre disciplinas.** Seguridad, desarrollo y operaciones poseen juntos los resultados.
- **Haz seguro el informe.** El manejo sin culpas de los errores mantiene fluyendo las señales.
- **Agrega los datos de comportamiento humano.** Informa de los patrones de grupo y no nombres ni clasifiques nunca a individuos.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ventana de exposición | Tiempo que una vulnerabilidad conocida permanece abierta en los activos incluidos, por banda de prioridad | mediana y percentil 85 de días desde la fecha en que se supo que aplicaba al activo hasta la fecha en que se verifica una corrección o una mitigación aceptada | días | Escáner de vulnerabilidades, sistema de tickets, registros de cambios | Gestión de la seguridad de la información; gestión de problemas | Tiempo para corregir un defecto de la lista de pendientes | Semanal |
| Cumplimiento de parches | Proporción de activos incluidos que cumplen la ventana de la política de parches para su clase | activos parcheados dentro de la ventana de la política / activos incluidos que requerían un parche en el periodo | porcentaje | Herramientas de gestión de puntos finales y servidores, registro de activos | Gestión de la seguridad de la información; gestión de versiones y despliegues | Dependencias mantenidas al día en la canalización | Semanal |
| Hallazgos críticos vencidos | Recuento y antigüedad de los hallazgos de prioridad crítica que han superado su plazo de la política | número de hallazgos críticos fuera de plazo; antigüedad del más antiguo | recuento; días | Sistema de gestión de vulnerabilidades | Gestión de la seguridad de la información; gestión de riesgos | Defectos de seguridad que superan el límite acordado | Semanal |
| Cobertura de escaneos | Proporción de activos incluidos evaluados dentro del intervalo exigido | activos escaneados con éxito en el último intervalo / activos incluidos | porcentaje | Informes del escáner unidos al registro de activos | Gestión de la seguridad de la información; gestión de activos de TI | Comprobaciones de la canalización ejecutadas en cada compilación | Semanal |
| Tiempo de contención | Tiempo desde la detección de un incidente de seguridad confirmado hasta su contención | mediana y percentil 85 de horas desde la detección hasta la contención | horas | Registros de incidentes | Gestión de incidentes; gestión de la seguridad de la información | Tiempo para restablecer el servicio tras un fallo | Por incidente, revisado mensualmente |
| Antigüedad de las excepciones de riesgo | Antigüedad de las excepciones de riesgo aceptado, y proporción que ha superado su fecha de revisión | días desde la aprobación; excepciones con la fecha de revisión superada / excepciones abiertas | días; porcentaje | Registro de excepciones | Gestión de riesgos; gestión de la seguridad de la información | Revisión de la deuda técnica | Mensual |
| Tasa de informes de seguridad | Proporción de eventos sospechosos informados por el personal en relación con los eventos de seguridad confirmados, como indicador de la cultura de informe | informes del personal en el periodo / eventos sospechosos confirmados en el periodo, con la tendencia a nivel de grupo | razón | Buzón de seguridad, registros de incidentes | Gestión de la seguridad de la información; gestión de incidentes | Plantear impedimentos abiertamente | Mensual |

Indica en el registro las bandas de prioridad y las ventanas de la política. La ventana de exposición arranca cuando se sabe que la vulnerabilidad aplica al activo, que es lo posterior entre la divulgación y el momento en que se sabe que el activo ejecuta el componente afectado, y se detiene en la corrección verificada o en una mitigación documentada y limitada en el tiempo. El tiempo de contención arranca en la detección, no en la primera alerta que nadie leyó. Excluye los hallazgos de prueba y los falsos positivos solo tras revisarlos. La tasa de informes de seguridad describe grupos y tendencias, nunca individuos.

## Recomendaciones

### Conoce tu parque y tu exposición

**1. Parte de los registros de activos y de dependencias.** Los escaneos, el parcheo y la propiedad dependen de saber qué existe. Vincula cada hallazgo a un activo, un responsable y un servicio, y mide la cobertura de escaneos frente al registro. Donde la cobertura sea baja, corrígelo antes de leer los hallazgos. Un activo sin escanear es una incógnita, lo que es peor que una debilidad conocida.

**2. Reduce primero la [superficie de ataque](https://en.wikipedia.org/wiki/Attack_surface).** Elimina lo que no hace falta: servicios sin uso, puertos abiertos, cuentas antiguas, entornos olvidados. Todo lo que retires es algo que no tendrás que parchear. Sigue el recuento de servicios expuestos a internet y de cuentas inactivas como indicadores sencillos, y revísalos con los responsables.

**3. Incluye tu cadena de suministro de software.** Los servicios modernos dependen de muchos componentes. La [cadena de suministro de software](https://en.wikipedia.org/wiki/Software_supply_chain) incluye bibliotecas, herramientas de compilación, imágenes de contenedores y los proveedores que hay detrás. Usa las listas de materiales de software descritas antes para encontrar dónde se usa un componente vulnerable (véase el tema 7.2, Métricas de activos de software y licencias), e incluye los hallazgos de dependencias en las mismas medidas que los de infraestructura.

### Prioriza y corrige

**4. Ordena según el contexto, no solo por la puntuación de gravedad.** Combina la gravedad CVSS con si se sabe que se usa un exploit, si el componente vulnerable es alcanzable y la importancia del activo. Las listas públicas de vulnerabilidades que se sabe que se explotan ayudan con el primer factor. Escribe las reglas de ordenación, revísalas y registra el motivo cuando un elemento de gravedad alta se despriorice.

**5. Fija ventanas de política por banda e informa frente a ellas.** Para cada banda de prioridad, acuerda un tiempo objetivo para remediar o mitigar. Informa de la proporción dentro de la ventana, la mediana y el percentil 85 de la exposición y el elemento abierto más antiguo. Las ventanas son metas para la conversación, y los elementos más antiguos merecen atención porque muestran dónde falla el proceso (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**6. Trata el parcheo como un cambio ordinario y frecuente.** El proceso de parcheo más seguro es el que se ejecuta a menudo y es aburrido. Las actualizaciones pequeñas y frecuentes son más fáciles de probar y de revertir que las grandes y poco frecuentes, y las canalizaciones automatizadas pueden aplicarlas de forma continua. Usa el enfoque de habilitación de cambios para la aprobación basada en el riesgo, y mantén una vía de emergencia para las correcciones urgentes (véase el tema 4.3, Métricas de habilitación de cambios).

**7. Haz visibles y de vida corta las excepciones.** A veces una corrección no es posible. Registra una excepción con un motivo, un control compensatorio, un responsable y una fecha de revisión, e informa de la antigüedad de las excepciones. Las excepciones sin fechas de revisión se vuelven permanentes, y las excepciones permanentes se convierten en el verdadero registro de riesgos.

### Responde y aprende

**8. Practica la respuesta a incidentes.** La [gestión de incidentes de seguridad informática](https://en.wikipedia.org/wiki/Computer_security_incident_management) cubre la preparación, la detección, la contención, la erradicación, la recuperación y las lecciones aprendidas. Ensaya con ejercicios, registra el tiempo de contención desde la detección y revisa cada incidente significativo sin culpas. La estructura del manejo de incidentes de seguridad es similar a la del manejo de incidentes graves (véase el tema 3.4, Métricas de incidentes graves).

**9. Mide la contención, no solo la detección.** Las herramientas de detección producen alertas, y el valor está en lo que ocurre después. Sigue cuánto tardan en contenerse y recuperarse los incidentes confirmados, y qué proporción encontró tu propia monitorización frente a la que informaron externos. Una proporción creciente de incidentes detectados internamente es señal de una visibilidad que mejora.

**10. Aprende de los casi accidentes.** Un correo de suplantación que se informó y se bloqueó, o una vulnerabilidad que encontró un colega antes que un atacante, es una lección gratuita. Regístralos y revísalos como harías con un incidente, y da las gracias a quien informó. La tasa de informes de seguridad es un indicador de salud de esa cultura, y debe subir con la confianza.

### Construye la cultura y la canalización

**11. Pon las comprobaciones donde trabajan los desarrolladores.** Ejecuta el análisis de dependencias y el análisis estático en la compilación, da retroalimentación en la solicitud de incorporación y haz fallar las compilaciones solo por problemas que el equipo acuerde que son bloqueantes. La retroalimentación rápida y relevante se corrige. Una avalancha de hallazgos de poco valor se ignora. Sigue el tiempo de corrección de los hallazgos de la canalización y ajusta las reglas con los equipos (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

**12. Forma y pon a prueba sin avergonzar.** Los ejercicios de concienciación, como la suplantación simulada, pueden desarrollar habilidades, y también pueden dañar la confianza cuando los resultados se usan para señalar o disciplinar a individuos. Informa solo de resultados agregados, centra la atención en cuántos informan de mensajes sospechosos y explica el propósito. Si un ejercicio hace que el personal se sienta engañado, cámbialo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Ventana de exposición | Cerrar hallazgos sin verificación; cambiar la fecha de inicio; reclasificar la gravedad | Paso de verificación por alguien ajeno al equipo que corrige; regla de fecha de inicio en el registro; registro de cambios de gravedad |
| Cumplimiento de parches | Excluir del alcance los activos difíciles de parchear; contar un parche como aplicado cuando el sistema no se reinició | Cambios de alcance registrados; verificar la versión instalada en el activo, no en el ticket |
| Hallazgos críticos vencidos | Dividir los hallazgos o fusionarlos; rebajar la gravedad | Contar por vulnerabilidad y activo únicos; revisar todos los cambios de gravedad |
| Cobertura de escaneos | Escanear un conjunto más estrecho; contar un escaneo que no logró autenticarse | Cobertura frente al registro de activos; calidad del escaneo (autenticado, completo) |
| Tiempo de contención | Arrancar el reloj más tarde; declarar pronto la contención | El reloj arranca en la primera señal de detección; verificar la contención con evidencia |
| Antigüedad de las excepciones de riesgo | Renovar las excepciones automáticamente; dividir las excepciones para reducir la antigüedad | Revisar las renovaciones de excepciones con un motivo; limitar las renovaciones sin evidencia nueva |
| Tasa de informes de seguridad | Fomentar informes de poco valor; desalentar informes para mejorar otros números | Calidad de los informes; leer los comentarios; encuesta sobre si la gente se siente segura informando |

Una lectura sana es una cobertura de escaneos alta, una cola de exposición corta y que se reduce, excepciones honestas con fechas de revisión, incidentes contenidos con rapidez y encontrados internamente con más frecuencia, y personal que te cuenta los eventos sospechosos sin miedo.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Priorización solo por puntuación de gravedad | Sencilla, coherente | Ignora el contexto; dirige el esfuerzo a lugares equivocados |
| Priorización basada en el contexto | Se centra en el riesgo real | Necesita datos y criterio |
| Ventanas de parcheo fijas | Expectativas claras | Pueden forzar cambios apresurados y arriesgados |
| Ventanas basadas en el riesgo | Se ajusta a la situación | Más difíciles de auditar |
| Parcheo automatizado frecuente | Cambios pequeños, menos exposición | Necesita buenas pruebas y reversión |
| Ciclos de parcheo grandes y poco frecuentes | Familiares | Mayor exposición, mayor riesgo por cambio |
| Simulación de suplantación | Crea concienciación | Puede erosionar la confianza si se usa mal |
| Foco en la cultura de informe | Saca los problemas a la luz pronto | Difícil de medir directamente |

La respuesta en prosa es ordenar según el contexto, parchear a menudo en pasos pequeños con buena reversión, registrar las excepciones con plazos e invertir en la cultura de informe como un control.

## Preguntas para conversar con tu equipo

**1. ¿Cuánto de nuestro parque ven realmente nuestros escaneos?**
Compara los activos escaneados con el registro de activos. Pregunta qué falta y por qué. El facilitador debe buscar categorías sistemáticamente sin escanear, como contenedores, dispositivos remotos o sistemas de terceros. Acordad una brecha que cerrar este trimestre.

**2. ¿Cuál es nuestro hallazgo crítico abierto más antiguo, y por qué sigue abierto?**
Mira la cola, no el promedio. Sigue los más antiguos: quién es su responsable, qué los bloquea y cuál es el control compensatorio. El facilitador debe preguntar si la excepción está registrada. Acordad quién desbloqueará el más antiguo.

**3. ¿Cuándo causó por última vez una corrección de seguridad una caída, y qué cambió después?**
Recuerda un ejemplo. ¿La causa fue una corrección apresurada o una prueba que faltaba? Discutid cómo hacer rutinario y seguro el parcheo. Vincula la respuesta con la práctica de cambios y de versiones.

**4. Si un colega informara hoy de un correo sospechoso, ¿qué le pasaría?**
Describe el camino real desde el informe hasta la respuesta, incluido cómo se agradece a quien informa. Pregunta si alguien ha pasado vergüenza por informar o por hacer clic. La conversación trata de la confianza. Acordad un pequeño cambio que haga más fácil o más seguro informar.

**5. ¿Cuáles de nuestros números de seguridad podrían subir mientras nos volvemos menos seguros?**
Enumera las medidas y piensa en cómo podría mejorarse cada una estrechando el alcance o reetiquetando. Asigna una barrera de protección a cada una. Este ejercicio construye la entrada del registro para la próxima revisión.

**6. ¿Con qué rapidez podemos contener un incidente confirmado, y cómo lo sabemos?**
Revisa los dos últimos incidentes y sigue el camino de la detección a la contención. Anota los retrasos. Pregunta qué ejercicios hemos realizado. Acordad ejecutar uno antes de la próxima revisión.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega hacen la mayoría de las correcciones e introducen muchas de las debilidades. Deben mantener al día las dependencias como parte del flujo normal, tratar los hallazgos de seguridad como elementos de la lista de pendientes con responsables y fechas, y usar comprobaciones de canalización que den retroalimentación rápida y relevante. Necesitan prioridades claras y tiempo para actuar sobre ellas, y deben poder plantear inquietudes con libertad.

### Equipos de servicio y operaciones

Los equipos de operaciones ejecutan los escáneres, aplican los parches y responden a los incidentes. Deben mantener al día los vínculos con los activos, informar con honestidad de la cobertura y manejar las excepciones con plazos. También necesitan tiempo protegido para ensayar la respuesta a incidentes, y una cultura sin culpas cuando ocurren errores.

### Liderazgo y gobernanza

Los líderes fijan el apetito de riesgo y deciden si la seguridad se financia como una actividad continua o como un proyecto. Deben pedir ventanas de exposición y los elementos abiertos más antiguos en lugar de totales, proteger la cultura de informe y aceptar que los números subirán cuando mejore la visibilidad. La gobernanza debe exigir evidencia para las excepciones y para el aprendizaje de los incidentes.

### Clientes y usuarios

Los usuarios son a la vez beneficiarios y una línea de defensa. Quieren servicios que protejan sus datos, y quieren orientación clara y justa. Hay que avisarles con prontitud cuando un incidente les afecte, tratarlos con respeto cuando informan de problemas y darles medidas de seguridad que no les compliquen el trabajo más de lo necesario (véase el tema 6.4, Experiencia de usuarios y empleados).

## En la práctica: un ejemplo de ITIL ágil

Una cooperativa de crédito regional opera banca en línea, una aplicación móvil y sistemas de sucursales con un pequeño equipo de ingeniería y un servicio de operaciones de seguridad externalizado. Los números siguientes son ilustrativos.

La junta pide un panel de seguridad. El primer borrador del analista de seguridad muestra 4.200 vulnerabilidades abiertas y en descenso, y un 96 por ciento de cumplimiento de parches. El responsable de ingeniería pregunta por la cobertura de escaneos. Al unir la salida del escáner con el registro de activos, el analista descubre que el 31 por ciento de los servidores y casi todos los contenedores no se escanearon en los últimos 30 días, porque el escáner perdió las credenciales tras una migración. Entre los activos que sí se escanearon, la mediana de la ventana de exposición de las vulnerabilidades críticas es de 9 días, y el percentil 85 es de 41 días. El hallazgo crítico más antiguo tiene 212 días, en un sistema heredado con una excepción que caducó cuatro meses antes. El cumplimiento de parches del 96 por ciento se calculó solo sobre los activos que informó la herramienta de parcheo.

El equipo hace cuatro cambios con ingeniería y operaciones. La cobertura de escaneos pasa a ser la primera línea del panel, con la meta de alcanzar la cobertura completa del registro, y se repara y se vigila la autenticación del escaneo. La priorización añade el estado de explotación y la importancia del activo a la puntuación de gravedad, de modo que los 4.200 hallazgos se reducen a una lista corta de unos 60 que importan ahora. Las actualizaciones de dependencias pasan a la canalización como cambios pequeños y frecuentes con pruebas automatizadas. Las excepciones reciben un responsable, un control compensatorio y una fecha de revisión, y la caducada la revisa el comité de riesgos. El analista de seguridad también cambia cómo se informan los resultados de la suplantación simulada: solo se muestra la tasa de informes a nivel de grupo, y el analista da personalmente las gracias a los colegas que informan.

Dos meses después, la cobertura de escaneos es del 97 por ciento, la ventana de exposición en el percentil 85 para los elementos críticos es de 14 días y el hallazgo crítico más antiguo es una excepción mitigada a 60 días de su revisión. Una empleada de una sucursal informa a los pocos minutos de un correo sospechoso de petición de pago, y el incidente se contiene en menos de dos horas. La junta pide que el recuento de vulnerabilidades abiertas se reduzca a la mitad a final de año. El responsable de ingeniería sugiere informar en su lugar de la ventana de exposición y de los hallazgos críticos vencidos, explicando que un recuento puede bajar escaneando menos. La decisión se registra, y la junta acepta revisar las nuevas medidas en la reunión siguiente.

## Perspectiva por sector

**Startup.** Suele no haber un equipo de seguridad dedicado, así que incorpora lo básico a la canalización: actualizaciones de dependencias, escaneo de secretos, autenticación multifactor y mínimo privilegio. Sigue la ventana de exposición de una lista corta de sistemas críticos y ten un plan de incidentes sencillo. Resiste la tentación de comprar un gran conjunto de herramientas antes de conocer tu parque.

**Pequeña empresa.** Los servicios externalizados y las herramientas en la nube cargan con la mayor parte del riesgo. Mantén un inventario, activa la autenticación multifactor en todas partes, mantén los sistemas actualizados automáticamente y sabe a quién llamar en un incidente. Mide el cumplimiento de parches y el tiempo de restauración de las copias de seguridad. Evita avergonzar al personal que informa de errores.

**Gran empresa.** La escala necesita datos coherentes entre muchos equipos y herramientas. Define las bandas de prioridad y las ventanas de forma central, deja que los equipos sean dueños de sus hallazgos, informa de la exposición por servicio de negocio y ejecuta ejercicios con regularidad. Coordínate con los equipos de seguridad de los proveedores y prueba los traspasos.

**Gobierno y sector público.** Los sectores suelen afrontar directivas obligatorias con plazos para vulnerabilidades concretas, deberes formales de informe de incidentes y requisitos de auditoría. Trátalos como insumos de diseño: sigue el cumplimiento de los plazos de las directivas, conserva la evidencia e informa de los incidentes según se exija protegiendo la privacidad de las personas (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son las herramientas de escaneo y de monitorización, que pueden ya poseerse; el tiempo para mantener los vínculos con los activos; el tiempo de ingeniería para corregir hallazgos y actualizar dependencias; la preparación y los ejercicios de respuesta a incidentes; y la formación. Las comprobaciones de la canalización cuestan tiempo de preparación y algo de tiempo de compilación. La monitorización externalizada tiene una tarifa de servicio.

El retorno es una menor probabilidad y un menor impacto de los incidentes, una exposición más corta y menos cambios de emergencia apresurados. Estos beneficios son reales y difíciles de cuantificar, porque el incidente que no ocurrió no deja registro. Evita citar costos medios de brechas del sector o frecuencias de incidentes salvo que puedas rastrear la fuente y su relevancia. Construye el caso con tus propios datos: la tendencia de la ventana de exposición, el número de cambios de emergencia causados por parches tardíos, el tiempo dedicado a trabajo manual de parcheo que eliminó la automatización y el costo de tus incidentes pasados, incluidos el tiempo del personal y el impacto en los clientes. Describe la reducción del riesgo en términos de escenarios concretos, como sugiere el tema anterior sobre casos de negocio (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Informar recuentos de vulnerabilidades.** Los recuentos bajan cuando los escaneos pasan por alto cosas. Informa de la ventana de exposición, de los elementos vencidos y de la cobertura.
- **Priorizar solo por puntuación de gravedad.** Ignora la alcanzabilidad y la explotación. Añade contexto.
- **Tratar el escaneo como la verdad.** Comprueba la cobertura y la calidad del escaneo frente al registro de activos.
- **Excepciones permanentes.** Se convierten en riesgo oculto. Da a cada excepción un responsable y una fecha de revisión.
- **Avergonzar a las personas por sus errores.** Los informes se detienen. Usa la revisión sin culpas y los resultados agregados.
- **La seguridad como puerta al final.** Frena la entrega e invita a soluciones provisionales. Incorpora las comprobaciones a la canalización.
- **Ciclos de parcheo a lo grande.** Son arriesgados y lentos. Parchea a menudo en cambios pequeños.
- **Ignorar a los proveedores.** Sus debilidades son tuyas. Sigue las obligaciones de seguridad y los incidentes de los proveedores.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Visibilidad | Escaneos ocasionales de algunos sistemas | Escaneos regulares de los sistemas principales | Cobertura de escaneos con seguimiento frente al registro de activos; hallazgos vinculados a responsables | Cobertura, ventanas de exposición y excepciones gestionadas y con seguimiento de su tendencia | Visión compartida entre equipos y proveedores, incluidas las dependencias |
| Priorización y corrección | Corregir según la petición más ruidosa | Listas basadas en la gravedad | Ordenación basada en el contexto; ventanas de política por banda; parches pequeños y frecuentes | Ventanas y cola revisadas; comprobaciones de la canalización ajustadas con los equipos | Remediación automatizada y basada en el riesgo con supervisión humana |
| Respuesta y cultura | Respuesta ad hoc; culpa | Plan básico, rara vez probado | Plan ensayado; revisión sin culpas; el informe se valora | Tiempo de contención y tasa de detección interna gestionados; cultura de informe medida | Ejercicios conjuntos con proveedores y clientes; aprendizaje compartido ampliamente |

## Lista de verificación

- [ ] La cobertura de escaneos se mide frente al registro de activos.
- [ ] Los hallazgos se vinculan a un activo, un responsable y un servicio.
- [ ] Las bandas de prioridad combinan gravedad, explotación, alcanzabilidad e importancia del activo.
- [ ] Las ventanas de política por banda están acordadas, y se informa de la ventana de exposición y del elemento abierto más antiguo.
- [ ] Las comprobaciones de dependencias y de la canalización se ejecutan en cada compilación, con bloqueantes acordados.
- [ ] El parcheo se ejecuta como cambios frecuentes, pequeños y probados, con una vía de emergencia.
- [ ] Las excepciones tienen un responsable, un control compensatorio y una fecha de revisión.
- [ ] La respuesta a incidentes se ensaya, y el tiempo de contención se mide desde la detección.
- [ ] Los datos de comportamiento humano se informan solo agregados, y los informes se agradecen.
- [ ] Se siguen las obligaciones de seguridad y los incidentes de los proveedores.

## Prompts de IA

**Revisa una regla de priorización de vulnerabilidades.**

```text
Nuestra regla actual para priorizar vulnerabilidades es: [describe]. Nuestros
campos de datos incluyen: [list, for example severity score, exploit status,
asset importance, internet exposure]. Revisa la regla en busca de puntos ciegos
y de formas de manipularla, y propón una ordenación basada en el contexto con
bandas claras y ventanas de política. No enuncies números concretos como
estándares del sector. Enumera tus supuestos y lo que debería confirmar un
especialista en seguridad.
```

**Comprueba la cobertura de escaneos.**

```text
Aquí hay un resumen de nuestro registro de activos por clase y de los activos
que vio nuestro escáner en el último [interval]: [paste counts or sanitized
lists]. Identifica las clases con baja cobertura, las razones probables de las
brechas y las comprobaciones más rápidas para confirmar cada razón. Sugiere
cómo informar la cobertura para que un escaneo fallido o parcial no parezca un
éxito. Enumera tus supuestos.
```

**Planifica un ejercicio de mesa.**

```text
Diseña un ejercicio de mesa de 90 minutos para [type of organization] sobre este
escenario: [describe, for example a compromised supplier credential]. Incluye
roles, una cronología de inyecciones, decisiones que provocar, qué registrar
(incluidos el tiempo de detección y de contención) y preguntas para una
sesión posterior sin culpas. No incluyas nombres ni sistemas reales. Enumera
tus supuestos y qué adaptar a nuestro contexto.
```

**Redacta un mensaje sin culpas para un error informado.**

```text
Un colega informó de que [describe, for example clicked a link in a phishing
email]. Redacta una respuesta breve y amable del equipo de seguridad que le dé
las gracias, explique qué haremos y pida los detalles que necesitamos. Redacta
luego una nota agregada para la actualización semanal que comparta la lección
sin nombrar a nadie. Enumera tus supuestos y las decisiones de tono que debería
revisar.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de seguridad o de vulnerabilidades.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de seguridad lleva su vector de manipulación, su barrera de protección y sus reglas de privacidad.

## Puntos clave

- Mide el tiempo de exposición, los elementos abiertos más antiguos y la cobertura de escaneos, no los recuentos brutos de hallazgos.
- Prioriza según el contexto: gravedad, explotación, alcanzabilidad e importancia del activo.
- Parchea a menudo en cambios pequeños y probados, y da a cada excepción un responsable y una fecha de revisión.
- Contén los incidentes con rapidez, aprende sin culpas y sigue la detección interna.
- Trata la cultura de informe como un control: da las gracias a quienes informan y no clasifiques nunca a individuos.
- Incorpora las comprobaciones de seguridad a la canalización para que las elecciones seguras sean las fáciles.

## Referencias y lecturas complementarias

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
