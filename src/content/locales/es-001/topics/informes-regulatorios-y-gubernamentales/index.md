# Informes regulatorios y gubernamentales

**El informe obligatorio es un requisito fijo en torno al cual diseñar, así que constrúyelo a partir de los mismos registros que usas para operar el servicio, mantén separada la vista del informe de la vista del aprendizaje y protege a las personas que hacen el trabajo de metas que lo distorsionen.**

## Resumen y motivación

Muchas organizaciones deben informar sobre sus servicios lo quieran o no. Los reguladores piden notificaciones de incidentes, cifras de disponibilidad y evidencia de controles. Los gobiernos exigen a los organismos que publiquen datos de desempeño, gastos y declaraciones de accesibilidad. Los financiadores y los órganos de supervisión piden resultados frente a compromisos. Los contratos exigen informes de servicio. En estos entornos, el informe no es una elección de gestión interna. Es una obligación con una fecha de vencimiento, una definición y a veces una sanción.

El [sector público](https://en.wikipedia.org/wiki/Public_sector) tiene rasgos particulares. La [rendición de cuentas](https://en.wikipedia.org/wiki/Accountability) ante los ciudadanos y los órganos electos es un deber central, y se ejerce mediante la auditoría, la legislación, las [leyes de libertad de información](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) y los resultados publicados. Las prácticas de [gobierno abierto](https://en.wikipedia.org/wiki/Open_government) y de [datos abiertos](https://en.wikipedia.org/wiki/Open_data) ponen la información a disposición para su escrutinio y reutilización. Las reglas de [contratación pública](https://en.wikipedia.org/wiki/Public_procurement) determinan qué puede comprarse y cómo, y las obligaciones de [gestión de documentos](https://en.wikipedia.org/wiki/Records_management) rigen cuánto tiempo se conserva la información. La [relación calidad-precio](https://en.wikipedia.org/wiki/Value_for_money) es una prueba común del gasto público, y órganos independientes realizan [auditorías de desempeño](https://en.wikipedia.org/wiki/Performance_audit) para examinarla. Los detalles difieren según el país, el nivel de gobierno y el sector, y este tema describe la práctica de medición, no los requisitos legales. Trabaja con tus colegas jurídicos, de cumplimiento y de gestión de documentos.

Las organizaciones reguladas del sector privado, como las de finanzas, salud, energía y telecomunicaciones, comparten muchos de estos rasgos. Afrontan deberes de notificación de incidentes, informes de resiliencia y revisiones de supervisión. El hilo común es que alguien ajeno al equipo de entrega define lo que debe informarse y para cuándo.

La entrega continua y la práctica de ITIL tienen algo que ofrecer. El objetivo ágil de colaboración continua con las partes interesadas se extiende a los órganos de supervisión, que son partes interesadas con necesidades legítimas, y las conversaciones tempranas sobre lo que exigen pueden prevenir el retrabajo. El hábito ágil de entregar incrementos pequeños y funcionales de forma continua conviene al informe: los informes que se producen automáticamente a partir de sistemas de registro son más exactos y más baratos que los que se ensamblan a mano cada trimestre. La práctica de medición e informes de ITIL, y su gestión de niveles de servicio, dan el vocabulario para definir qué se mide y se comparte.

Las obligaciones de informe crean tres peligros bien conocidos.

- **Distorsión por las metas.** Cuando una cifra informada tiene una consecuencia, el trabajo se dobla hacia la cifra. La literatura del sector público sobre metas, incluidos los escritos de John Seddon sobre el pensamiento sistémico en el sector público y el análisis de Jerry Muller sobre la fijación con las métricas, describe muchos casos en que alcanzar la meta y servir al público divergieron. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con toda su fuerza (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- **Dos juegos de números.** La definición legal de una cifra suele diferir de la que usa internamente el equipo. Si el equipo gestiona con una e informa otra, nadie confía en ninguna. Mantén ambas visibles, concílialas y explica las diferencias.
- **El informe como carga.** Las peticiones manuales, repetidas e incoherentes consumen a personas cualificadas. Cuanto más depende el informe de un trabajo heroico en hojas de cálculo, más se cuelan el error y el retraso.

Este tema se apoya en las medidas de cumplimiento, riesgos y proveedores de esta parte (véanse el tema 8.2, Métricas de riesgos y controles, el tema 8.3, Métricas de cumplimiento y auditoría, y el tema 8.4, Métricas de proveedores y contratos) y en los cimientos de datos de la primera parte (véase el tema 1.5, Fuentes de datos e instrumentación).

## Principios clave

- **Trata las obligaciones como insumos de diseño.** Enuméralas pronto, con definiciones, fechas de vencimiento y responsables, y diseña la recogida de datos en torno a ellas.
- **Produce los informes a partir de sistemas de registro.** Automatiza la extracción y mantén visible el linaje.
- **Separa la vista del informe de la vista del aprendizaje.** Los equipos necesitan medidas de trabajo francas que no estén limitadas por lo que se informa.
- **Concilia las definiciones.** Muestra cómo se relacionan las cifras legales con las medidas propias del equipo.
- **Informa con honestidad, incluidas las malas noticias.** Las correcciones y el contexto generan confianza.
- **Protege a las personas de metas perversas.** Usa las metas legales con medidas compañeras y explica sus límites.
- **Haz utilizable la información publicada.** La accesibilidad, la claridad y el formato importan al público.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Equivalente ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de las obligaciones de informe | Proporción de obligaciones de informe con un responsable con nombre, una definición declarada, una fuente de datos y una entrada de calendario | obligaciones con los cuatro elementos / obligaciones de informe incluidas | porcentaje | Registro de obligaciones | Medición e informes; gobernanza | Acuerdo de trabajo con las partes interesadas sobre las necesidades de información | Trimestral |
| Puntualidad de los informes | Proporción de informes exigidos presentados en su fecha de vencimiento | informes presentados en la fecha de vencimiento o antes / informes que vencen en el periodo | porcentaje | Calendario de informes y registros de presentación | Medición e informes | Compromisos con las partes interesadas cumplidos | Mensual |
| Tasa de rectificación | Proporción de informes o cifras presentados que se corrigen después | informes o cifras corregidos tras la presentación / informes o cifras presentados | porcentaje | Registro de presentaciones y registro de correcciones | Medición e informes; mejora continua | Defectos que escapan | Trimestral |
| Cobertura de trazabilidad | Proporción de cifras informadas que pueden rastrearse hasta un sistema de registro mediante pasos documentados | cifras con linaje documentado hasta un sistema de registro / cifras informadas | porcentaje | Documentación del linaje, especificaciones de informes | Medición e informes; gestión del conocimiento | Compilaciones reproducibles | Trimestral |
| Alineación de definiciones | Proporción de medidas informadas para las que la definición legal y la definición interna están documentadas y conciliadas | medidas con conciliación documentada / medidas informadas con una definición legal | porcentaje | Registro de métricas | Medición e informes; gestión de niveles de servicio | Definición de terminado compartida | Trimestral |
| Esfuerzo de informe | Horas-persona dedicadas a producir un informe recurrente | horas registradas por ciclo de informe, con la proporción que es extracción y ensamblaje manuales | horas | Estimaciones de tiempo, registros de esfuerzo | Medición e informes; mejora continua | Costo del trabajo que no es de entrega | Por ciclo de informe |
| Conformidad de accesibilidad de lo publicado | Proporción de informes y conjuntos de datos publicados que cumplen la norma de accesibilidad exigida | elementos publicados que superan una comprobación de accesibilidad / elementos publicados | porcentaje | Resultados de pruebas de accesibilidad | Medición e informes; gestión del conocimiento | Definición de terminado inclusiva | Trimestral |

Escribe la definición legal, la fuente y la fecha de vencimiento junto a cada medida informada. Un informe es "puntual" cuando lo acepta el órgano receptor, no cuando se envía, si la aceptación se registra. Una rectificación cuenta cualquier corrección de una cifra ya presentada, sea voluntaria o exigida. El esfuerzo de informe es una medida de tendencia de la organización y nunca una medida de individuos. La conformidad de accesibilidad se comprueba frente a la norma que te aplique, como las Pautas de Accesibilidad para el Contenido Web.

## Recomendaciones

### Trata las obligaciones como insumos de diseño

**1. Mantén un registro de obligaciones de informe.** Para cada una, registra el requisito, la fuente legal o contractual, lo que debe informarse, la definición, la fecha de vencimiento, el órgano receptor, el responsable interno y la fuente de datos. Revísalo cuando cambien las leyes, los contratos o los reguladores. Las obligaciones conocidas pronto pueden diseñarse desde el principio, y las descubiertas tarde hay que ensamblarlas a mano.

**2. Implica pronto al órgano de supervisión.** Pregunta a reguladores, auditores y financiadores qué harán con los datos y qué necesitan. Algunos te ayudarán a dar forma a una definición o aceptarán datos en una forma que ya produces. La práctica ágil valora la colaboración con las partes interesadas, y los órganos de supervisión son partes interesadas. Guarda registros de estas conversaciones y preserva la independencia donde importe.

**3. Diseña desde el principio la recogida de datos para el informe.** Al construir un servicio, incluye los eventos y campos que necesitarán los informes exigidos: marcas de tiempo de los incidentes, impacto, categorías, recuentos de usuarios. Añadirlos después es costoso. Defínelos una sola vez y comparte la definición entre equipos, con un único responsable de la definición (véase el tema 1.4, Gobernanza y propiedad de las métricas).

### Produce los informes a partir de sistemas de registro

**4. Automatiza la canalización del registro al informe.** Extrae de los sistemas de incidentes, de cambios y de servicios mediante consultas con guion, aplica transformaciones documentadas y produce el informe con una plantilla revisada. Los informes automatizados son repetibles, más rápidos y más fáciles de auditar que los manuales. Versiona las consultas y las plantillas para poder reproducir un informe pasado.

**5. Documenta el linaje.** Para cada cifra informada, anota de dónde viene, cómo se calcula y quién la comprueba. La cobertura de trazabilidad mide lo bien que se hace esto. Un auditor o un periodista que pregunte "¿de dónde sale este número?" debería obtener una respuesta clara en minutos.

**6. Revisa antes de presentar, con un lector independiente.** Haz que alguien ajeno al equipo que produjo el informe compruebe las definiciones, la aritmética y la narración. Las revisiones detectan errores y afirmaciones sin respaldo. Registra la revisión. Una breve aprobación de la persona responsable aclara la propiedad.

**7. Corrige abiertamente.** Cuando se encuentre un error tras la presentación, corrígelo con prontitud, explica qué cambió y anota la causa. Una tasa de rectificación cercana a cero es sospechosa si los datos son complejos. Una corrección visible y rápida genera más confianza que una cifra que se deja en pie.

### Mantén separados el informe y el aprendizaje

**8. Mantén una vista de trabajo para el equipo.** Los equipos necesitan medidas que les ayuden a mejorar, como los percentiles, la antigüedad de los elementos más antiguos y las compañeras de calidad. Rara vez coinciden con las cifras legales. No restrinjas la vista de trabajo a lo que se informa, y no gestiones únicamente por la cifra informada.

**9. Concilia las definiciones legales e internas.** Donde una medida exigida difiera de la del equipo, documenta las diferencias y muestra ambas. Por ejemplo, la cifra de disponibilidad de un regulador puede excluir el mantenimiento planificado, mientras los usuarios lo viven como inactividad. Muestra la conciliación en el registro de métricas y en las notas del informe. Esto protege frente al problema de los "dos juegos de números".

**10. Empareja las metas legales con compañeras.** Si se impone una meta, añade medidas que revelen la distorsión: calidad, experiencia del usuario y el trabajo que se dejó fuera. Por ejemplo, empareja una meta de tiempo hasta la primera respuesta con una medida de la resolución y de los contactos repetidos (véase el tema 3.1, Métricas del centro de servicios). Explica en el informe cómo debe leerse la cifra.

### Publica para el público

**11. Haz utilizable la información publicada.** Publica en formatos abiertos y legibles por máquina donde la ley y la privacidad lo permitan, con descripciones, definiciones y fechas claras. Cumple las normas de accesibilidad para documentos y páginas web. Publicar datos de una forma que la gente no puede leer ni reutilizar satisface la letra y derrota el propósito. Prueba con usuarios reales, incluidos quienes usan tecnología de apoyo (véase el tema 6.4, Experiencia de usuarios y empleados).

**12. Protege la privacidad y la seguridad de lo que publicas.** Agrega y suprime los números pequeños que podrían identificar a personas, evita publicar detalles que ayuden a los atacantes y comprueba las reglas de divulgación con especialistas. Aplica el mismo cuidado a las respuestas según las leyes de libertad de información. Registra las decisiones sobre la redacción de textos protegidos y sus motivos.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de barrera de protección emparejada |
| --- | --- | --- |
| Cobertura de las obligaciones de informe | Tratar las obligaciones de forma estrecha; enumerar al responsable sin su acuerdo | Revisión del registro por cumplimiento o por la auditoría interna; confirmación de los responsables |
| Puntualidad de los informes | Presentar informes incompletos para cumplir la fecha; contar borradores como presentaciones | Comprobación de completitud al presentar; contar solo los informes aceptados; tasa de rectificación |
| Tasa de rectificación | Suprimir las correcciones; hacer las correcciones en silencio | Registro de correcciones revisado por un lector independiente; una tasa baja se lee con la trazabilidad |
| Cobertura de trazabilidad | Documentar el linaje de forma superficial; incluir solo cifras sencillas | Muestrear el linaje reejecutando un cálculo desde el origen |
| Alineación de definiciones | Declarar alineadas las definiciones sin conciliación; adoptar la definición legal solo en el informe | Documento de conciliación revisado; mostrar ambas cifras lado a lado |
| Esfuerzo de informe | No registrar las horas; trasladar el trabajo a otros equipos | Comparar con la opinión del equipo; incluir a todos los colaboradores en la estimación |
| Conformidad de accesibilidad de lo publicado | Ejecutar un comprobador que solo encuentra algunos problemas; publicar una versión accesible aparte que se retrasa | Pruebas manuales con tecnología de apoyo; comprobar la paridad entre versiones |

Una lectura sana es que cada obligación tiene responsable, los informes son puntuales y exactos con correcciones visibles, las cifras son trazables hasta los sistemas de registro, las definiciones legales e internas están conciliadas, el esfuerzo de informe baja y la información publicada puede usarla el público.

## Compensaciones: ventajas e inconvenientes

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Ensamblaje manual de informes | Flexible; sirve con cualquier dato | Lento, propenso a errores, dependiente de individuos |
| Informes automatizados | Repetibles, auditables, baratos de ejecutar | Esfuerzo de preparación; pueden afianzar una mala definición |
| Un solo conjunto de medidas para todo | Sencillo | Distorsiona el trabajo; las cifras legales rara vez encajan con las necesidades del equipo |
| Vistas de informe y de aprendizaje separadas | Aprendizaje franco; informe honesto | Necesita conciliación y disciplina |
| Metas legales duras | Rendición de cuentas clara | Efectos perversos; manipulación |
| Metas con compañeras y contexto | Revela la distorsión | Más que explicar |
| Compromiso temprano con los reguladores | Menos sorpresas | Tiempo; límites que mantener |
| Solo una relación a distancia | Independencia clara | Retroalimentación tardía; retrabajo |

La respuesta en prosa es automatizar los informes a partir de sistemas de registro, mantener una vista de trabajo del equipo separada de la vista del informe, conciliar las definiciones abiertamente y comprometerse pronto con los órganos de supervisión preservando su independencia.

## Preguntas para conversar con tu equipo

**1. ¿Qué informes debemos, a quién y para cuándo, y quién es responsable de cada uno?**
Compila la lista en la sala y compárala con el registro. A menudo aparecen brechas: informes debidos por contratos, a financiadores o por reglas que pocos conocen. El facilitador debe registrar los elementos nuevos y asignar responsables.

**2. ¿Qué cifra informada gestionaríamos de otra manera si no se informara?**
Elige una medida legal o contractual y pregunta qué haría el equipo si nadie la midiera. La respuesta revela dónde divergen la cifra y el propósito. Discutid qué medida compañera mostraría la diferencia.

**3. ¿Podemos reproducir hoy a partir del origen el informe del trimestre pasado?**
Inténtalo con un informe. Anota qué es manual, qué no está documentado o qué se ha perdido. Acordad el primer paso para automatizar o documentar, y quién lo dará.

**4. ¿Cómo manejamos un error hallado tras la presentación?**
Revisa el proceso y el último ejemplo. ¿Fue rápida y abierta la corrección? ¿Alguien tuvo miedo de plantearlo? Acordad qué hace normal la corrección.

**5. ¿Qué experimentaría una persona que usa tecnología de apoyo al leer nuestro informe publicado?**
Prueba juntos un elemento publicado, o revisa una comprobación de accesibilidad reciente. Pregunta quién es responsable de la accesibilidad de los documentos publicados. Acordad una corrección y un proceso para evitar que se repita.

**6. ¿Qué hace realmente el regulador o el órgano de supervisión con nuestros datos?**
Muchos equipos no lo saben. Planifica una conversación para averiguarlo y para preguntar si una forma distinta les serviría igual de bien. El facilitador debe anotar los límites de independencia.

## Cuatro perspectivas

### Equipos de producto y entrega

Los equipos de entrega construyen los eventos y campos de los que dependen los informes, y sienten la presión de las metas legales. Deben incluir las necesidades de informe en la definición de terminado, mantener una vista de trabajo franca y señalar cuándo una meta distorsiona el trabajo. Las conversaciones tempranas con las personas que informan ayudan a prevenir el retrabajo.

### Equipos de servicio y operaciones

Los equipos de operaciones generan la mayoría de los datos subyacentes y a menudo preparan los informes. Deben documentar el linaje, automatizar la extracción y mantener un registro de correcciones. Están bien situados para explicar cómo debe leerse una cifra y para avisar cuando engaña.

### Liderazgo y gobernanza

Los líderes responden de la exactitud y la honestidad de lo que se informa. Deben pedir trazabilidad y conciliación, resistirse a convertir las cifras legales en metas individuales, proteger a las personas que plantean errores y apoyar el compromiso con los órganos de supervisión. La gobernanza debe revisar el registro de obligaciones y el historial de rectificaciones.

### Clientes y usuarios

El público y los clientes se apoyan en la información publicada para exigir cuentas a los servicios. Necesitan datos que puedan encontrar, leer y reutilizar, en formatos accesibles, con explicaciones claras de lo que significan. También merecen un aviso rápido cuando un incidente les afecta, según puedan exigir las reglas.

## En la práctica: un ejemplo de ITIL ágil

Un organismo nacional presta servicios de licencias en línea que usan varios millones de personas al año. Debe informar mensualmente a un ministerio, publicar datos de desempeño anuales y notificar a su regulador los incidentes graves del servicio dentro de un plazo fijo. Los números siguientes son ilustrativos.

Una revisión interna descubre que el organismo debe 31 informes de distintos tipos, y que solo 22 figuran en el registro de obligaciones con un responsable con nombre y una definición, una cobertura del 71 por ciento. Las cifras mensuales se ensamblan a mano en unas 60 horas, sobre todo extrayendo datos de tres sistemas a una hoja de cálculo. La trazabilidad es mala: para la cifra principal, la disponibilidad, nadie puede reproducir el número del año pasado. La definición de disponibilidad del ministerio excluye el mantenimiento planificado, y la vista de trabajo del propio organismo lo cuenta, lo que explica por qué los usuarios y el ministerio ven cuadros distintos. El organismo cumplió cada mes su meta de tiempo hasta la primera respuesta, y el centro de servicios ha empezado a dar acuse automático a las solicitudes para alcanzarla, mientras el tiempo de resolución ha subido. Dos informes publicados fallaron una prueba de accesibilidad al comprobarlos con un lector de pantalla.

El jefe de desempeño de servicios del organismo acuerda cambios con el ministerio y con los equipos de entrega y de operaciones. El registro de obligaciones queda completo, con responsables, definiciones y fechas. Las cifras mensuales provienen de consultas con guion a los sistemas de incidentes y de monitorización, con una transformación documentada y una plantilla revisada, lo que reduce el esfuerzo a unas 8 horas. Una nota de conciliación expone las definiciones legal e interna de disponibilidad con ambas cifras mostradas en el informe. La meta de primera respuesta se empareja con el tiempo de resolución y los contactos repetidos en la vista de trabajo, y el ministerio acepta ver las medidas compañeras. El organismo también corrige una cifra de disponibilidad del trimestre anterior, explica la causa y publica la corrección. Los informes publicados se producen con una plantilla accesible, y se añade una prueba con lector de pantalla a la lista de verificación de la publicación.

Un año después, la cobertura de obligaciones es del 100 por ciento, los informes son puntuales, la tasa de rectificación es baja con cada corrección explicada, la trazabilidad cubre todas las cifras principales y el esfuerzo de informe ha bajado aproximadamente un 85 por ciento. El gabinete de la ministra pide una meta nueva de disponibilidad del 99,95 por ciento, con los líderes del organismo como responsables. El jefe de desempeño de servicios explica la diferencia entre la cifra legal y la vivida por el usuario y propone una meta con medidas compañeras y una fecha de revisión. La decisión se registra, y el ministerio acepta una revisión conjunta de la definición antes del próximo año de informes.

## Perspectiva por sector

**Startup.** Los deberes de informe pueden llegar con un primer cliente empresarial o con un regulador. Empieza con una lista corta de obligaciones, produce los informes a partir de tus propios sistemas y evita construir un proceso de informe aparte. Ten cuidado al prometer niveles de servicio en los contratos.

**Pequeña empresa.** Las obligaciones suelen ser contractuales o ligadas a un solo regulador. Lleva un calendario, usa plantillas y documenta cómo se hacen los números. Un informe pequeño y exacto supera a uno grande y apresurado.

**Gran empresa.** Las muchas obligaciones entre regiones y regímenes piden un registro central, definiciones comunes y herramientas de extracción compartidas. Cuidado con las peticiones duplicadas a los mismos equipos. Usa una única fuente de verdad para los datos de incidentes y de servicios, con vistas para cada régimen.

**Gobierno y sector público.** Este es el terreno propio del tema. Planifica para la legislación, las peticiones ministeriales, la auditoría, las solicitudes de libertad de información y el escrutinio público. Publica los datos abiertamente donde la ley lo permita, cumple los deberes de accesibilidad, conserva los registros durante el periodo exigido y documenta las decisiones. Resiste la tentación de convertir las cifras legales en metas individuales de desempeño, y considera los efectos de las metas en los ciudadanos y en el personal.

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de construir y mantener el registro de obligaciones, la ingeniería de la extracción automatizada y de las plantillas, el tiempo de revisión y las pruebas de accesibilidad. Comparada con el ensamblaje manual, la automatización desplaza el esfuerzo del trabajo repetido a una construcción única y un mantenimiento ligero.

Los retornos son menos errores y correcciones, menos tiempo del personal dedicado al ensamblaje, respuestas más rápidas a las peticiones de supervisión y más confianza con los reguladores y el público. Construye el caso con tus propios datos: las horas por informe antes y después, el número y el efecto de las rectificaciones, el tiempo para responder a una pregunta de supervisión y el costo de cualquier sanción o hallazgo de auditoría crítico evitado. Evita citar estimaciones de la carga de cumplimiento salvo que puedas rastrear la fuente y el método. Incluye el costo del compromiso continuo con los órganos de supervisión, y compáralo con el costo de las sorpresas (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Gestionar solo por la cifra legal.** Distorsiona el trabajo. Mantén una vista de trabajo con medidas compañeras.
- **Dos juegos de números sin conciliar.** La confianza se desploma. Documenta y muestra las diferencias.
- **Hojas de cálculo hechas a mano como sistema.** Se rompen y dependen de individuos. Automatiza a partir de sistemas de registro.
- **Presentar informes incompletos para cumplir una fecha.** Cambia un fallo por otro. Acuerda prórrogas o presenta con salvedades claras.
- **Correcciones en silencio.** Minan la confianza. Corrige abiertamente y explica.
- **Metas individuales a partir de cifras legales.** Premian la manipulación y castigan al personal honesto. Mantén las cifras a nivel de servicio.
- **Publicaciones ilegibles.** El cumplimiento de forma derrota el propósito. Publica datos utilizables y accesibles.
- **Ignorar la privacidad en la publicación.** Los números pequeños pueden identificar a personas. Agrega y revisa la divulgación.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Obligaciones y definiciones | Conocidas por unas pocas personas | Lista parcial | Registro con responsables, definiciones y fechas; definiciones legales e internas conciliadas | Registro revisado frente a los cambios de la ley; conciliación mantenida | Definiciones codesarrolladas con los órganos de supervisión; compartidas entre organismos |
| Producción y calidad | Ensamblaje manual | Plantillas, algunos guiones | Automatizados a partir de sistemas de registro con linaje y revisión independiente | Rectificaciones analizadas; esfuerzo y puntualidad gestionados | Informes producidos de forma continua; los órganos de supervisión acceden directamente a los datos |
| Uso y publicación | Informar para satisfacer la petición | Publicado a petición | Vista de trabajo separada de la vista del informe; publicación accesible y reutilizable | Medidas compañeras con metas; pruebas con usuarios de las publicaciones | Datos abiertos y enlazados con participación pública en el diseño |

## Lista de verificación

- [ ] Un registro enumera cada obligación de informe con responsable, definición, fuente, fecha de vencimiento y órgano receptor.
- [ ] Los campos y eventos exigidos se incorporan a los servicios desde el principio.
- [ ] Los informes se producen a partir de sistemas de registro mediante consultas y plantillas versionadas.
- [ ] Cada cifra informada tiene un linaje documentado y una persona que la comprueba, con nombre.
- [ ] Un lector independiente revisa los informes antes de presentarlos.
- [ ] Las definiciones legales e internas están conciliadas y se muestran ambas.
- [ ] Las correcciones se registran, se explican y se publican con prontitud.
- [ ] Las metas legales tienen medidas compañeras y contexto en el informe.
- [ ] Los informes y los conjuntos de datos publicados cumplen la norma de accesibilidad aplicable y la revisión de privacidad.
- [ ] Una conversación con cada órgano de supervisión importante sobre sus necesidades está en el calendario.

## Prompts de IA

**Construye un registro de obligaciones.**

```text
Aquí hay una lista de informes, notificaciones y publicaciones que creemos
deber: [paste with sources, in plain language]. Estructúralos en un registro con
campos para el requisito, la fuente, la definición, la fuente de datos, la fecha
de vencimiento, el órgano receptor y el rol responsable. Señala la información
que falta y las obligaciones que parezcan duplicadas entre equipos. No des
conclusiones jurídicas. Enumera tus supuestos y las preguntas para el área
jurídica y de cumplimiento.
```

**Concilia dos definiciones.**

```text
La definición legal de [measure] es: [text]. Nuestra definición interna es:
[text]. Nuestros campos de datos son: [list]. Explica las diferencias, describe
cómo afecta cada una al número, sugiere cómo mostrar ambas en un informe y
propón una nota breve que explique la diferencia a los lectores. No supongas
hechos que no se han dado. Enumera tus supuestos.
```

**Planifica la automatización de un informe.**

```text
Producimos [report] cada mes con estos pasos manuales y fuentes: [list with
hours]. Propón un plan para automatizarlo a partir de sistemas de registro, que
incluya consultas documentadas, un paso de transformación, notas de linaje,
revisión y reproducibilidad de los informes pasados. Sugiere qué conservar
manual y por qué. No supongas herramientas concretas. Enumera tus supuestos y
riesgos.
```

**Revisa la usabilidad de un informe publicado.**

```text
Aquí está la estructura de texto de un informe que planeamos publicar: [paste
headings and sample tables, with no sensitive content]. Revísala en busca de
lenguaje llano, definiciones, contexto para las cifras, accesibilidad de tablas
y gráficos y riesgos de privacidad por números pequeños. Sugiere mejoras.
Recuérdame probar con tecnología de apoyo y comprobar las reglas de divulgación
con especialistas. Enumera tus supuestos.
```

## Habilidades de IA

- [Habilidad de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de informes legales o regulados.
- [Habilidad de mantenimiento de Métricas de ITIL ágil](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de informes muestra su definición, su conciliación, su vector de manipulación y su barrera de protección.

## Puntos clave

- Trata las obligaciones de informe como insumos de diseño, enumeradas con responsables, definiciones y fechas de vencimiento.
- Produce los informes a partir de sistemas de registro con linaje y revisión independiente.
- Mantén una vista de trabajo franca separada de la vista del informe, y concilia las definiciones abiertamente.
- Empareja las metas legales con medidas compañeras, y no las conviertas nunca en metas individuales.
- Corrige los errores con apertura y rapidez.
- Publica información que el público pueda encontrar, leer y reutilizar, con la privacidad protegida.

## Referencias y lecturas complementarias

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
