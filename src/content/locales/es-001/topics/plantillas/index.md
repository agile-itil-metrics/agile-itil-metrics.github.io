# Plantillas

Cuatro plantillas para copiar y adaptar: una carta de métricas, una ficha de métrica, una especificación de panel y una agenda de revisión. Son puntos de partida. Sustituye el texto entre corchetes, borra lo que no encaje y mantén cada documento en una página donde puedas.

## Carta de métricas

```text
Carta de métricas de [team, service, or organization]

Propósito
Medimos [services and ways of working] para [improve ... / see ... / decide ...].
Las medidas nos ayudan a ver nuestro propio trabajo y mejorarlo. No son una
forma de juzgar a individuos.

Para qué son los datos
- Revisiones del equipo sobre cómo va el trabajo y qué probar a continuación.
- Decisiones sobre dónde invertir en servicios, herramientas y habilidades.
- Informes que exigen [regulators/customers]: [list, kept separate].

Para qué no se usarán nunca los datos
- Clasificar o comparar individuos.
- Evaluaciones de desempeño individuales, salario, ascensos o despidos.
- [Add the worries your teams raised.]

Quién ve qué
- Cada equipo ve primero sus propios datos, y posee la interpretación.
- [Role] ve las tendencias agregadas de servicios y equipos.
- Las vistas a nivel individual están desactivadas en [tools].

Datos conservados
- [What is collected, from which systems, for how long.]

Cuestionamientos
- Cualquiera puede cuestionar un número. Respondemos en [number] días hábiles.
- Contacto: [name or group].

Incumplimientos
- Informa de cualquier uso contrario a esta carta a [route]. Los resultados se
  publican sin nombres.

Revisión
- Revisamos esta carta cada [six months] con los equipos.

Firmado: [sponsor], [team representative(s)]   Fecha: [date]
```

## Ficha de métrica

```text
Ficha de métrica: [metric name]

Pregunta que responde: [the question the audience asked]
Decisión que informa: [what someone might do differently]
Definición: [plain words]
Fórmula: [how it is calculated]
Unidad: [unit]   Cadencia: [how often]
Reglas del reloj o de los límites: [when counting starts, stops, pauses]
Fuente de datos: [system and field]   Actualización: [interval]
Responsable: [role]   Persona a quien preguntar: [name or group]
Audiencia: [team, service owner, leadership]
Nivel: [team, service, or system. Never an individual.]
Presentación: [median and percentile, run chart, distribution]
Línea base: [period and value from our own data]
Límites conocidos: [gaps, changes in entry habits, sample size]
Vector de manipulación: [how it could be made to look better without being better]
Barrera de protección: [paired metric or practice]
Resultado compañero: [the outcome it should be read with]
Tema relacionado: (véase el tema [N.M], [Title])
Retirar cuando: [condition]
Última revisión: [date]   Cambios desde la última revisión: [notes]
```

## Especificación de panel

```text
Especificación de panel: [name]

Audiencia: [team, service owner, leadership]
Responsable: [role]   Cadencia de revisión: [monthly or quarterly]   Fecha de revisión: [date]
Preguntas que responde
1. [question]
2. [question]

Medidas (no más de unas nueve)
| Medida | Pregunta | Barrera de protección compañera | Presentación | Fuente | Actualización |
| [name] | [no.] | [name] | [sparkline / run chart / distribution] | [system] | [interval] |

Contexto mostrado con cada valor
- Tendencia durante [period], notas de eventos, enlace a la definición, tamaño de la muestra donde sea pequeño.

Colores de estado
- [None, or the stated rule that allows for ordinary variation.]

Acceso
- [Who may see what. Individual-level views: off.]

Comprobaciones de calidad de los datos
- [Freshness, row counts, reconciliation with the source.]

Retirada
- Informes sustituidos por este panel: [list] retirados el [date].
- Medidas que retirar cuando: [conditions].

Aprobado por la audiencia: [names or roles]   Fecha: [date]
```

## Agenda de revisión

Una revisión de equipo de 45 minutos, mensual o trimestral. Es una conversación sobre el trabajo, dirigida por el equipo.

```text
Revisión de métricas de [team], [date]

1. Apertura (5 minutos)
   ¿Cómo va el trabajo? ¿Algo que los números no mostrarán?

2. Eventos desde la última vez (5 minutos)
   Versiones, incidentes, cambios de personal, cambios de política. Añade notas a la pantalla.

3. Tendencias y distribuciones (15 minutos)
   Para cada medida: ¿Qué vemos? ¿Es variación ordinaria o una señal?
   Lee cada medida con su barrera de protección. Comprueba la frescura de los datos y las brechas conocidas.

4. Decisiones (10 minutos)
   ¿Qué probaremos, dejaremos o cambiaremos? Registra cada decisión, incluida una
   decisión de esperar y observar. Nombra un responsable y una fecha para volver a mirar.

5. Últimas decisiones (5 minutos)
   ¿Ayudaron las decisiones de la última vez? ¿Qué aprendimos?

6. Las propias medidas (5 minutos)
   ¿Qué medida nos confundió o nos engañó? ¿Cuál podríamos retirar? ¿Qué falta?

Registro: decisiones, responsables, fechas, cambios en las medidas.
Regla: sin comparación de individuos. Los números describen el sistema.
```
