# Métriques des incidents majeurs

**Mesurez les incidents majeurs comme des événements rares et coûteux dont il faut apprendre, non comme un tableau de classement : comptez-les, chronométrez-les honnêtement, évaluez leur impact sur les clients, vérifiez que les gens ont été prévenus et prouvez que les actions de suivi ont été menées.**

## Résumé et motivation

Un incident majeur est un incident assez grave pour exiger une réponse allant au-delà de la routine normale. [ITIL](https://en.wikipedia.org/wiki/ITIL), le cadre le plus connu de gestion des services informatiques, décrit la [gestion des incidents](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) comme le rétablissement du fonctionnement normal du service aussi vite que possible, et il attend des organisations qu'elles traitent leurs incidents les plus graves par un chemin distinct et plus coordonné. La manière dont une organisation trace cette ligne est sa propre décision. Un choix courant est un incident qui touche de nombreux utilisateurs ou un service critique et qui exige que plusieurs équipes travaillent ensemble sous un seul coordinateur. Écrivez votre propre définition, car chaque métrique de ce sujet en dépend.

Les incidents majeurs sont rares. Une équipe peut voir des dizaines d'incidents ordinaires par semaine et deux ou trois majeurs par trimestre. Cela change la façon de mesurer. Les statistiques ordinaires du volume d'incidents et du temps de résolution (voir le sujet 3.2, Volume et priorité des incidents, et le sujet 3.3, Temps de réponse et de résolution des incidents) supposent beaucoup d'événements et récompensent les moyennes. Avec une poignée d'incidents majeurs par période, une moyenne est dominée par une mauvaise nuit, une courbe de tendance est surtout du bruit, et un [percentile](https://en.wikipedia.org/wiki/Percentile) n'a aucun sens sur cinq points de données (voir le sujet 1.6, Culture statistique pour les métriques de service). L'approche honnête consiste à montrer chaque incident majeur comme sa propre ligne, avec sa propre chronologie, et à ne résumer que sur de plus longues fenêtres.

Les visions agile et ITIL se rencontrent ici plus directement que partout ailleurs dans le livre. ITIL apporte la structure : un incident majeur déclaré, un coordinateur nommé, une communication définie aux parties touchées et une revue ensuite. Les traditions [agile](https://en.wikipedia.org/wiki/Agile_software_development) et d'[ingénierie de la fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) apportent les habitudes : un [commandant d'incident](https://en.wikipedia.org/wiki/Incident_commander) qui dirige la réponse, une revue sans reproche de ce qui s'est passé et un accent sur l'apprentissage qui alimente l'amélioration continue. Le livre *Site Reliability Engineering* de Google décrit à la fois le schéma du commandement d'incident et la pratique de la revue post-incident (voir les références). Une [analyse post-incident](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem) au sens employé ici est un compte rendu écrit d'un incident, de ses causes et des actions qui suivent, et le terme est employé ici de façon interchangeable avec « revue post-incident ».

Ce sujet couvre cinq questions. À quelle fréquence les incidents majeurs se produisent-ils ? Combien de temps durent-ils, et quelle part de ce temps se passe avant que quiconque en déclare un ? Combien d'utilisateurs, et lesquels, l'ont ressenti ? Les gens ont-ils entendu parler de nous à temps et à un rythme régulier ? Et le suivi promis a-t-il eu lieu ? Les sujets apparentés couvrent ce qui les entoure : la disponibilité (voir le sujet 5.3, Métriques de disponibilité), la qualité de la revue écrite (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage), les causes sous-jacentes (voir le sujet 4.1, Métriques de gestion des problèmes) et le changement qui les déclenche souvent (voir le sujet 4.4, Échecs de changement et reprises).

Termes employés dans ce sujet :

- **Incident majeur :** un incident qui répond à vos critères de déclaration écrits et déclenche le processus d'incident majeur.
- **Déclaration :** le moment où quelqu'un ayant l'autorité invoque formellement le processus d'incident majeur.
- **Temps de rétablissement :** le temps entre le début de l'impact sur les clients et le moment où le service est rétabli pour les utilisateurs. Le moment du rétablissement du service n'est pas le même que celui où l'on trouve la [cause profonde](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Commandant d'incident :** le rôle qui coordonne la réponse, répartit les tâches et décide. C'est un rôle pour la durée de l'incident, non un titre de poste.
- **Revue post-incident :** l'examen structuré et sans reproche d'un incident après le rétablissement du service.
- **Action :** un changement précis, attribué et daté qui découle d'une revue.

## Principes clés

- **Montrer les événements, puis résumer.** Les événements rares méritent des chronologies individuelles. Rapportez chaque incident majeur séparément et n'employez des statistiques de synthèse que sur une longue fenêtre, avec le comptage à côté.
- **Démarrer l'horloge à l'impact, non à la prise de conscience.** Une durée qui commence quand quelqu'un remarque cache l'écart de détection, qui est souvent la plus grande part de l'histoire.
- **Mesurer l'expérience de l'utilisateur, non l'effort de l'équipe.** L'impact sur les clients est la raison d'être du processus. Les heures d'effort des intervenants sont un coût à suivre, jamais un score.
- **La communication fait partie du rétablissement.** Un service rétabli pendant que les utilisateurs en sont encore à deviner n'est réparé qu'à moitié. Traitez la ponctualité des mises à jour comme une mesure de la réponse.
- **La revue n'est pas finie tant que les actions ne le sont pas.** Un document terminé avec des actions ouvertes n'a rien changé. Mesurez le suivi, pas seulement l'existence d'une revue.
- **Ne jamais classer les personnes, et ne jamais punir la déclaration.** Si déclarer un incident majeur pénalise l'équipe du déclarant dans un rapport, moins d'incidents seront déclarés et les métriques s'amélioreront tandis que le service empirera.
- **Garder stables les critères de déclaration.** Déplacer le seuil change chaque métrique de ce sujet. Consignez chaque changement avec son motif et sa date.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nombre d'incidents majeurs | Incidents majeurs déclarés dans une période, par service | Nombre d'incidents qui ont répondu aux critères de déclaration et ont été déclarés dans la période, par heure de déclaration ; les incidents déclassés dans la première heure sont listés séparément et exclus | nombre par trimestre | Enregistrements d'incidents de l'outil ITSM avec l'indicateur d'incident majeur | Gestion des incidents | Revue de santé de l'équipe ou du service | Rapport mensuel, tendance trimestrielle |
| Durée de l'incident majeur | Temps pendant lequel les clients ont été touchés | Heure de rétablissement du service moins heure de début d'impact, par incident. Le début d'impact est la plus ancienne preuve dans la supervision ou le premier signalement d'utilisateur, selon le plus précoce. Un rétablissement partiel est consigné comme son propre événement, et le rétablissement complet arrête l'horloge | minutes, par incident | Chronologie de supervision, chronologie de l'incident dans l'outil ITSM | Gestion des incidents ; gestion des niveaux de service | Temps de rétablissement dans les métriques de livraison (voir le sujet 2.8, Métriques DORA) | Par incident ; médiane et maximum sur longue fenêtre chaque trimestre |
| Temps jusqu'à la déclaration | Délai entre le début de l'impact et la déclaration d'un incident majeur | Heure de déclaration moins heure de début d'impact, par incident. Les incidents jamais déclarés sont trouvés par une revue trimestrielle des incidents ordinaires à fort impact et sont inclus avec un temps de déclaration sans objet (jamais déclaré) | minutes, par incident | Chronologie de supervision, piste d'audit de l'outil ITSM | Gestion des incidents ; supervision et gestion des événements | Définition de prêt pour l'escalade dans les accords de travail des équipes | Par incident |
| Impact sur les clients | Combien d'utilisateurs et quelle part d'usage ont été touchés | Utilisateurs touchés (ou requêtes échouées) multipliés par les minutes touchées, par incident. Ne comptez que les utilisateurs qui ont tenté d'employer le service pendant la fenêtre d'impact. La maintenance planifiée est exclue | utilisateurs-minutes, ou requêtes échouées | Télémétrie du service, enregistrements de contacts du support | Gestion des niveaux de service ; gestion des incidents | Indicateurs de niveau de service orientés utilisateur (voir le sujet 5.2, SLI, SLO et budgets d'erreur) | Par incident |
| Ponctualité de la communication | Si les parties touchées ont été informées à temps | Part des incidents majeurs où le premier avis destiné aux clients est parti dans la cible après la déclaration, et part des mises à jour programmées envoyées dans l'intervalle convenu. L'horloge démarre à la déclaration. Les messages purement internes sont exclus | pourcentage d'incidents ; pourcentage de mises à jour | Historique de la page d'état, journal de communication de l'outil ITSM | Gestion des incidents ; gestion des niveaux de service | Communication avec les parties prenantes dans l'accord de travail de l'équipe | Par incident ; synthèse trimestrielle |
| Ponctualité de l'achèvement de la revue | Si une revue a eu lieu assez tôt pour être utile | Part des incidents majeurs ayant une revue publiée dans le nombre convenu de jours ouvrés après le rétablissement. L'horloge s'arrête à la publication, non au premier brouillon. Les incidents encore dans la fenêtre sont exclus | pourcentage | Dépôt des revues, outil ITSM | Amélioration continue ; gestion des problèmes | Suivi d'amélioration | Trimestrielle |
| Suivi des actions | Si les actions de la revue sont accomplies | Actions de revue accomplies à leur échéance / actions de revue échues dans la période. Les actions closes comme « ne sera pas fait » sont comptées séparément avec un motif, non cachées | pourcentage ; nombre en retard | Gestionnaire de tickets lié à la revue | Amélioration continue ; gestion des problèmes | Éléments de backlog issus des rétrospectives | Mensuelle |
| Taux d'incidents majeurs répétés | Récurrence de la même cause | Incidents majeurs de la période dont la cause consignée correspond à celle d'un incident majeur antérieur des douze mois précédents / incidents majeurs de la période. La correspondance se fait par le champ de cause, revu à la main | pourcentage, avec le comptage affiché | Comptes rendus de revue, enregistrements de problèmes | Gestion des problèmes | Travail de prévention dans le backlog | Trimestrielle |

Chaque ligne a besoin d'une règle d'horloge écrite avant qu'on s'y fie. Les disputes sur le début d'impact et le temps de rétablissement sont courantes et se règlent mieux à l'avance (voir le sujet 1.5, Sources de données et instrumentation).

## Recommandations

### Écrire ce qui rend un incident majeur

**Publiez des critères de déclaration que n'importe qui d'astreinte peut appliquer.** Les critères combinent généralement l'impact (utilisateurs touchés, service critique dégradé, risque pour la sécurité ou juridique) et un besoin de coordination (plus d'une équipe requise). Une courte liste avec des exemples vaut mieux qu'une longue matrice. Indiquez qui peut déclarer, et précisez que déclarer de bonne foi n'est jamais une erreur, même si l'incident se révèle mineur.

**Consignez la version des critères dans chaque enregistrement d'incident.** Quand le seuil bouge, les tendances bougent avec lui. Un numéro de version ou une date sur chaque enregistrement permet de comparer ce qui est comparable et d'expliquer un saut du compte venu d'un changement de règle.

### Compter et classer sans faire du compte un objectif

**Rapportez le compte avec son contexte.** Montrez le nombre d'incidents majeurs par trimestre à côté du service, du déclencheur (changement, capacité, dépendance, sécurité, autre) et de la version des critères. Un compte sans contexte invite à des objectifs comme « moins de trois par trimestre », qui apprennent aux gens à ne pas déclarer. Ne traitez un compte en baisse comme une bonne nouvelle que si le temps jusqu'à la déclaration et l'impact sur les clients sont stables.

**Séparez déclarés, déclassés et manqués.** Suivez les incidents qui ont été déclarés puis déclassés, car ils montrent si les critères sont raisonnables. Passez chaque trimestre en revue un échantillon d'incidents ordinaires à la recherche de ceux qui auraient dû être déclarés. Les manqués sont les plus instructifs.

### Chronométrer l'incident du côté de l'utilisateur

**Démarrez l'horloge quand les clients sont touchés.** Employez la plus ancienne preuve fiable, qui est souvent un signal de supervision antérieur au premier ticket. Quand le début est incertain, consignez l'estimation et sa source plutôt que l'heure à laquelle quelqu'un a remarqué. L'écart entre le début d'impact et la déclaration est une métrique en soi et généralement la moins coûteuse à améliorer.

**Découpez la chronologie en phases.** La détection, la déclaration, le diagnostic, l'atténuation et le rétablissement complet ont chacun des causes de retard et des responsables différents. Une ventilation par phase pour chaque incident montre où est passé le temps sans avoir besoin d'une moyenne. Rétablir le service par un contournement et corriger la cause sont deux événements séparés, et le second relève de la gestion des problèmes.

**Employez la médiane et le pire cas sur de longues fenêtres, avec le comptage.** Pour une année de données, rapportez la médiane et la plus longue durée, et dites de combien d'incidents elles proviennent. Évitez un temps moyen de rétablissement unique pour les incidents majeurs. Avec peu d'événements, il est instable, et il est faussé par une seule longue panne (voir le sujet 1.6, Culture statistique pour les métriques de service).

### Évaluer l'impact sur les clients en termes que les utilisateurs reconnaîtraient

**Préférez l'impact côté utilisateur à l'impact côté serveur.** Les requêtes échouées, les utilisateurs touchés ou les transactions touchées décrivent ce qui est arrivé aux gens. Les minutes de service dégradé sur un composant décrivent ce qui est arrivé à une machine. Là où vous avez des indicateurs de niveau de service, employez-les (voir le sujet 5.2, SLI, SLO et budgets d'erreur) et reliez l'incident au tableau de la disponibilité (voir le sujet 5.3, Métriques de disponibilité).

**Ajoutez à chaque enregistrement un énoncé d'impact en langage clair.** Une ou deux phrases nommant qui a été touché et ce qu'il ne pouvait pas faire. Les contacts du support, les mentions sur les réseaux sociaux et les escalades de clients sont des preuves de l'énoncé, non des métriques à maximiser.

### Mesurer la communication comme partie de la réponse

**Fixez des cibles de communication par public.** Les clients touchés, les parties prenantes internes et les dirigeants ont besoin de messages différents à des moments différents. Convenez d'une cible pour le premier avis après la déclaration et d'un rythme régulier de mises à jour, et mesurez le respect par incident. Le rythme compte plus que le contenu : une mise à jour qui dit « pas de changement, prochaine mise à jour dans trente minutes » et arrive à l'heure bâtit plus de confiance que le silence.

**Gardez la réponse et la communication en des mains séparées.** Un responsable de la communication libère le commandant d'incident pour se concentrer sur le diagnostic. Une petite équipe peut employer une liste de contrôle et un modèle préécrit à la place.

### Boucler l'apprentissage

**Tenez la revue tôt, et publiez-la.** La mémoire s'efface ; fixez donc une fenêtre pour la revue et mesurez si elle a été respectée. L'achèvement de la revue compte moins que ce que la revue change ; associez-le donc au suivi. Le livre *Site Reliability Engineering* de Google plaide pour la revue sans reproche et pour sa mise par écrit (voir les références), et le sujet 4.2 (Métriques des analyses post-incident et de l'apprentissage) couvre la qualité de la revue.

**Suivez les actions jusqu'au bout, et autorisez un honnête « ne sera pas fait ».** Placez chaque action dans le backlog que l'équipe responsable emploie déjà, avec un responsable et une date. Consignez les actions déclinées, avec le motif, plutôt que de les laisser pourrir. Passez en revue les actions en retard lors d'une revue d'exploitation ou de service, et demandez ce qui les bloque. Plafonnez le nombre d'actions par revue pour que celles qui restent soient celles qui comptent.

**Cherchez des schémas entre incidents, et envoyez-les à la gestion des problèmes.** Les causes répétées, les déclencheurs communs et les lacunes de détection récurrentes sont des signaux que les revues isolées manquent. Alimentez-en le processus de gestion des problèmes et des erreurs connues (voir le sujet 4.1, Métriques de gestion des problèmes) et la planification des équipes qui détiennent les services. Traitez un taux de répétition en hausse comme une invitation à enquêter, non comme un verdict.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Nombre d'incidents majeurs | Relever le seuil de déclaration, garder des incidents en priorité « haute » pour qu'ils ne soient jamais déclarés, scinder un événement en plusieurs enregistrements, ou en fusionner plusieurs en un | Critères fixes et versionnés ; échantillon trimestriel d'incidents ordinaires à fort impact ; impact sur les clients et temps jusqu'à la déclaration suivis à côté du compte |
| Durée de l'incident majeur | Repousser l'horloge à un début d'impact plus tardif, déclarer « rétabli » alors que les utilisateurs échouent encore, ou clore puis rouvrir un nouvel enregistrement | Début d'impact tiré de la supervision ; rétablissement confirmé par un indicateur orienté utilisateur ; enregistrements rouverts et liés comptés comme un seul incident |
| Temps jusqu'à la déclaration | Déclarer tôt pour tout afin de paraître rapide, ou antidater la déclaration au début d'impact | Part des incidents déclarés plus tard déclassés ; piste d'audit de l'heure de déclaration ; échantillon de chronologies au regard de la supervision brute |
| Impact sur les clients | Rétrécir la définition de « touché », ne compter que les utilisateurs qui ont ouvert un ticket, ou mesurer une dépendance qui est restée en service | Impact dérivé de la télémétrie autant que des contacts ; énoncé d'impact en langage clair revu à la revue de l'incident |
| Ponctualité de la communication | Poster un avis vague pour démarrer l'horloge, envoyer des mises à jour sans contenu, ou compter les messages internes | Contrôle du contenu d'un échantillon de mises à jour ; retours des clients sur la clarté ; seuls les avis destinés aux clients comptent |
| Ponctualité de l'achèvement de la revue | Publier un document mince pour respecter la date, ou déclarer une revue « non nécessaire » | Qualité de la revue lue par un pair sur un échantillon (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage) ; part des revues dispensées affichée |
| Suivi des actions | Écrire des actions vagues ou triviales faciles à clore, clore des actions sans faire le travail, ou les requalifier en « ne sera pas fait » | Qualité des actions échantillonnée ; actions closes vérifiées au regard du changement du système ; part de « ne sera pas fait » et motifs revus |
| Taux d'incidents majeurs répétés | Consigner chaque cause comme nouvelle en choisissant une autre formulation, ou tout attribuer à une « erreur humaine » | Courte taxonomie de causes avec définitions ; champs de cause revus par quelqu'un d'extérieur à l'incident ; « erreur humaine » non acceptée comme cause sans explication par le système |

Une lecture saine est un compte modéré et assez stable d'incidents déclarés, avec un déclassement occasionnel et un incident manqué occasionnel trouvé en revue. Le temps jusqu'à la déclaration est court et en baisse, l'impact sur les clients par incident est compris et baisse là où un travail de prévention a été fait, et presque toutes les mises à jour destinées aux clients sont à l'heure. Les revues sont publiées à temps et leurs actions sont pour la plupart terminées, avec un petit ensemble honnête d'actions déclinées. Si tout paraît parfait, demandez si les critères ont dérivé ou si les gens ont cessé de déclarer (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). La [loi qui porte le nom de Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est ici la plus facile à voir, parce que le coût d'un mauvais chiffre est une moindre volonté de donner l'alerte.

## Compromis : avantages et inconvénients

| Choix | Force | Faiblesse |
| --- | --- | --- |
| Montrer chaque incident comme une ligne | Garde le contexte, évite les moyennes trompeuses sur de petits comptes | Plus difficile à résumer pour les dirigeants ; demande un court récit par incident |
| Rapporter un compte d'incidents majeurs | Simple, familier, visible de la direction | Facile à transformer en objectif ; réagit aux changements de critères |
| Temps depuis le début d'impact | Reflète l'expérience de l'utilisateur, expose l'écart de détection | Le début d'impact est parfois incertain et demande du jugement |
| Temps depuis la déclaration | Facile à capturer et à comparer | Cache la détection lente et la déclaration lente |
| Utilisateurs-minutes d'impact | Comparable entre incidents et services | Exige de la télémétrie ; traite tous les utilisateurs et toutes les minutes comme égaux |
| Taux d'achèvement des revues | Facile à collecter, encourage l'habitude | Récompense le document, non l'apprentissage |
| Taux de suivi des actions | Relie la revue au changement | Peut être détourné par des actions triviales ; exige un responsable et un backlog |

Employez un petit ensemble de mesures qui couvrent tout le cycle (déclarer, rétablir, informer, apprendre, finir) au lieu d'en optimiser une. N'ajoutez des mesures d'impact que lorsque la télémétrie existe. Là où la télémétrie manque, un énoncé d'impact écrit avec soin sert mieux qu'un chiffre inventé.

## Questions à discuter avec votre équipe

**1. Qu'est-ce qui rend exactement un incident majeur ici, et tous ceux qui sont d'astreinte sont-ils d'accord ?**
La définition est le fondement de tous les autres chiffres. Demandez à trois personnes de classer le même incident récent et comparez les réponses. Le désaccord montre où les critères sont vagues. L'animateur doit noter des exemples à ajouter aux critères écrits et convenir de qui peut déclarer. Concluez en confirmant que déclarer de bonne foi est toujours acceptable, même si l'incident est déclassé plus tard.

**2. Dans notre dernier incident majeur, combien de temps s'est écoulé entre le début de l'impact et la déclaration ?**
Reconstituez la chronologie à partir de la supervision, non de la mémoire. L'écart est souvent plus grand que prévu et est parfois la plus longue phase. Demandez quel signal existait et qui l'a vu, et si l'écart venait de critères flous, d'une alerte manquante ou d'une réticence à déclarer. Choisissez un changement qui le raccourcirait, et décidez comment vous saurez.

**3. Qui a été touché, et comment le savons-nous ?**
Comparez ce que l'équipe croyait sur le moment avec ce que montrent plus tard la télémétrie et les contacts du support. Demandez quels clients, le cas échéant, ont été plus touchés que d'autres, et s'il s'agissait de ceux qui comptent le plus pour l'entreprise ou de ceux qui sont le moins à même de s'en sortir. Discutez de la question de savoir si l'énoncé d'impact est quelque chose qu'un client reconnaîtrait. Convenez d'une mesure d'impact que vous pourrez recueillir de façon fiable la prochaine fois.

**4. Les gens ont-ils entendu parler de nous quand ils en avaient besoin, et le message était-il utile ?**
Vérifiez le premier avis et chaque mise à jour au regard du rythme convenu. Lisez les messages réels comme le ferait un client. Demandez s'ils disaient ce qui était connu, ce qui ne l'était pas et quand viendrait la prochaine mise à jour. Discutez de qui détient la communication pendant un incident et si cette personne est libre de la faire.

**5. Qu'est-il arrivé aux actions de nos trois dernières revues ?**
Réunissez les actions dans une seule liste et marquez chacune comme faite, en cours, en retard ou déclinée. Pour celles en retard, demandez ce qui les bloque : capacité, responsabilité, priorité ou périmètre flou. Décidez comment les actions en retard seront remontées à la prochaine réunion d'exploitation ou de planification.

**6. Si nous étions mesurés sur le nombre d'incidents majeurs, que ferions-nous différemment, et les clients s'en trouveraient-ils mieux ?**
Cette question fait émerger les vecteurs de détournement avant qu'ils se produisent. Demandez au groupe d'être franc sur ce qu'il pourrait changer : seuils, étiquettes, qui déclare. Demandez ensuite quel est le meilleur objectif. Une bonne réponse va vers l'impact sur les clients, le temps jusqu'à la déclaration et le suivi, qui sont plus difficiles à détourner sans aider les utilisateurs. Consignez la réponse comme un garde-fou.

## Quatre perspectives

### Équipes produit et livraison

Les équipes produit rencontrent les incidents majeurs comme des interruptions du travail planifié et comme une rétroaction sur leurs propres changements. Elles gagnent le plus avec des chiffres d'impact clairs, un accès rapide aux chronologies de leurs propres incidents et des actions de revue qui atterrissent dans leur backlog avec de la place pour les faire. Réservez de la capacité au suivi d'incident, et traitez les actions comme du travail ayant le même statut que les fonctions. Partagez les catégories de causes pour qu'un déclencheur récurrent mène à un changement de pratique (voir le sujet 2.9, Travail opérationnel et travail non planifié).

### Équipes de service et d'exploitation

Les équipes d'exploitation mènent la réponse et portent le coût du travail de nuit. Elles ont besoin de critères applicables à 3 heures du matin, d'un rôle de commandant et de communication qu'elles peuvent doter, et d'outils qui capturent la chronologie à mesure que les événements se produisent plutôt que de mémoire après coup. Elles devraient surveiller la charge que les incidents majeurs font peser sur un petit groupe de personnes (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte) et se servir des métriques de ce sujet pour demander du travail de prévention, non pour comparer les intervenants.

### Direction et gouvernance

Les dirigeants fixent le climat qui décide si les gens déclarent rapidement et rapportent honnêtement. Ils devraient demander l'histoire de chaque incident majeur et la tendance sur un an, éviter les objectifs sur le compte et s'enquérir de l'impact sur les clients, des lacunes de détection et des actions terminées. Financez le travail de prévention que recommandent les revues, et revoyez-le au même forum que les plans de livraison. La gouvernance peut alors voir si les leçons se transforment en changement (voir le sujet 5.2, SLI, SLO et budgets d'erreur, pour un moyen de relier fiabilité et investissement).

### Clients et utilisateurs

Les clients jugent un incident majeur à la durée pendant laquelle ils ont été touchés, au fait d'avoir été informés et à la probabilité qu'il se reproduise. Des avis précoces et honnêtes les servent mieux que des avis tardifs et soignés. Donnez-leur un canal d'état, un rythme sur lequel ils peuvent compter et un compte rendu clair ensuite de ce qui s'est passé et de ce qui va changer. Là où des contrats s'appliquent, rapportez dans les termes convenus dans l'accord de niveau de service (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA). La satisfaction après un incident vaut d'être demandée (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite une vitrine, un service de paiement et un service de gestion des commandes, chacun détenu par une équipe produit, avec une équipe de plateforme partagée d'astreinte. Un petit groupe de gestion des services mène le processus d'incident majeur. Tous les chiffres de cet exemple sont illustratifs.

Au cours des deux derniers trimestres, le détaillant a déclaré cinq incidents majeurs (illustratif). Le groupe de gestion des services montre chacun comme une ligne avec le début d'impact, l'heure de déclaration, l'heure de rétablissement, le nombre estimé de commandes échouées, l'heure du premier avis aux clients et l'état de la revue. Il remarque que l'écart médian entre le début d'impact et la déclaration est de 38 minutes (illustratif), presque aussi long que le temps médian entre la déclaration et le rétablissement, qui est de 52 minutes (illustratif). Avec cinq incidents, il traite les deux chiffres comme approximatifs et lit plutôt les chronologies. Trois des cinq montrent une alerte de supervision déclenchée tôt et restée sans accusé de réception dans un canal partagé.

L'équipe décide d'acheminer cette classe d'alerte vers le téléavertisseur d'astreinte et d'ajouter aux critères une ligne disant qu'un signal soutenu d'échec du paiement suffit pour déclarer, sans attendre les tickets. Elle fixe aussi une cible de premier avis aux clients dans les 20 minutes suivant la déclaration (illustratif), et la vérifie par incident. Deux sur cinq l'ont respectée. L'équipe de déploiement ajoute un modèle de page d'état qu'un responsable de la communication peut remplir sous pression.

Pendant la même revue, elle découvre un risque de détournement. Un responsable d'une équipe produit avait proposé un objectif trimestriel de « pas plus de deux incidents majeurs ». Le groupe de gestion des services fait remarquer que le trimestre précédent avait vu un incident rester en priorité haute pendant quatre heures avec des clients qui échouaient au paiement, et qui n'a jamais été déclaré parce que l'équipe était proche de la limite. Ils remplacent l'objectif par trois mesures : le temps jusqu'à la déclaration, les commandes échouées par incident et la part des actions de revue terminées à temps. Ils ajoutent le garde-fou d'un échantillon trimestriel d'incidents de haute priorité lu par quelqu'un d'extérieur à l'équipe responsable. Le trimestre suivant, le compte des déclarés monte à quatre (illustratif), le temps médian jusqu'à la déclaration baisse, et la revue par échantillon ne trouve aucune déclaration manquée.

## Perspective sectorielle

**Startup.** Une startup peut n'avoir aucun processus formel d'incident majeur, seulement celui ou celle qui est réveillé. Commencez par une définition d'un paragraphe, un coordinateur nommé pour chaque événement et un document partagé qui consigne la chronologie. Comptez les incidents et notez l'impact en une phrase. La revue peut être une note d'une demi-page, et le suivi un élément du backlog de l'équipe.

**Petite entreprise.** Une petite entreprise dépend souvent de fournisseurs pour une grande part de son service ; la chronologie inclut donc l'attente d'un fournisseur. Consignez dans la chronologie de l'incident les contacts et les temps de réponse du fournisseur, car ils expliquent une grande part de la durée et donnent des éléments pour les conversations contractuelles. Gardez simple la communication avec les clients : un canal, une personne et un intervalle de mise à jour indiqué.

**Grande entreprise.** Les grandes entreprises exploitent de nombreux services et ont de nombreux incidents à chaque période ; un compte par service et une consolidation sont donc tous deux utiles. Les risques sont des critères incohérents entre divisions et un processus assez lourd pour ralentir la déclaration. Alignez les définitions, gardez le processus léger pendant les quinze premières minutes et employez un format d'enregistrement commun afin que l'impact et la communication puissent être comparés.

**Gouvernement et secteur public.** Les organismes publics ont souvent des obligations légales, comme notifier un régulateur ou le public, et un coût d'échec plus élevé pour des citoyens qui n'ont pas d'alternative. Ajoutez des mesures du respect des obligations de notification et de l'impact sur les groupes vulnérables, et tenez des enregistrements qui résistent à l'audit et aux demandes d'information du public. Les cycles de marchés peuvent retarder les actions ; suivez donc les actions bloquées et remontez-les.

## Dossier d'affaires : motivations, ROI et TCO

Le motif est de réduire le coût des incidents qui font le plus mal : revenus ou service perdus, confiance abîmée, épuisement du personnel et exposition réglementaire. Un petit ensemble cohérent de mesures d'incidents majeurs montre d'où vient ce coût, si la détection et la communication s'améliorent et si l'investissement dans la prévention porte. Des mesures qui ne montrent qu'un compte poussent le coût vers la dissimulation des incidents.

Les coûts de collecte sont modestes si les données vivent déjà dans l'outil ITSM, le système de supervision et le gestionnaire de tickets. Les principaux coûts sont de convenir des définitions, de relier l'enregistrement d'incident à la supervision et au backlog d'actions, et le temps passé à écrire chaque revue. Les métriques coûtent peu au-delà de la cohérence de l'enregistrement.

Le retour se voit dans un temps plus court jusqu'à la déclaration, une communication plus claire, moins d'incidents répétés et moins de reprises. Aucun chiffre universel ne s'applique ; estimez donc le vôtre : prenez votre dernière année d'incidents majeurs, estimez avec la finance le coût d'une heure d'impact pour chaque service et comparez-le au coût du travail de suivi dont vous auriez besoin pour prévenir les causes répétées. Le coût total de possession inclut le temps des relecteurs, l'outillage des chronologies et des pages d'état, et la capacité réservée aux actions de suivi, là où la plupart des programmes sous-investissent.

## Antimodèles et pièges

- **Un objectif sur le nombre d'incidents majeurs.** Il apprend aux gens à éviter de déclarer. Suivez plutôt le temps jusqu'à la déclaration, l'impact et le suivi, et échantillonnez pour trouver les déclarations manquées.
- **Un temps moyen de rétablissement unique pour les incidents majeurs.** Avec peu d'événements, une seule longue panne domine. Montrez plutôt chaque incident, puis la médiane et le plus long sur un an avec le comptage.
- **Démarrer l'horloge à la déclaration.** Cela cache le retard de détection et de déclaration. Démarrez plutôt à la plus ancienne preuve d'impact sur les clients, et rapportez l'écart séparément.
- **Classer les intervenants ou les équipes par métriques d'incidents.** Cela détruit la franchise et brise la revue. Rapportez plutôt par service et par système, et gardez les noms hors des données.
- **Traiter la revue comme terminée quand le document est publié.** Le changement est le but. Mesurez plutôt le suivi des actions et regardez chaque mois les actions en retard.
- **Des changements de seuil silencieux.** Les tendances perdent leur sens. Versionnez plutôt les critères et notez les changements dans le rapport.
- **Ne compter que les tickets comme impact.** Beaucoup d'utilisateurs touchés n'appellent jamais. Employez plutôt la télémétrie et ajoutez un énoncé d'impact en langage clair.
- **Employer les métriques pour attribuer des reproches.** Les gens cachent alors des faits. Gardez plutôt les revues sans reproche, concentrez-vous sur les conditions et les décisions, et cherchez des causes dans le système.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition et horloges | Majeur veut dire ce que dit la personne la plus bruyante ; les temps viennent de la mémoire | Certaines équipes ont des critères et écrivent les heures de début et de fin | Une définition écrite et versionnée, avec des règles d'horloge pour le début d'impact, la déclaration et le rétablissement | Définition et horloges auditées au regard de la supervision ; changements consignés avec leurs motifs | Critères et horloges convenus avec les fournisseurs et les clients, révisés quand ils cessent d'éclairer les décisions |
| Impact et communication | Impact décrit par des anecdotes ; mises à jour envoyées quand quelqu'un s'en souvient | Impact estimé pour certains incidents ; certaines équipes emploient une page d'état | Impact mesuré par la télémétrie pour les services clés ; cibles de mise à jour fixées et suivies | Impact et communication suivis dans le temps et reliés aux retours des clients | Impact partagé avec les clients et les fournisseurs dans un format commun, avec des actions d'amélioration conjointes |
| Revue et suivi | Revues rares et non écrites ; actions oubliées | Revues écrites par certaines équipes ; actions consignées mais non suivies | Chaque incident majeur revu à temps ; actions suivies dans le backlog de l'équipe | Actions en retard et causes répétées revues selon un rythme, avec un travail de prévention financé | Schémas partagés entre équipes et fournisseurs ; l'apprentissage change couramment la conception et la planification |
| Usage dans les décisions | Chiffres cités après coup | Comptes montrés aux dirigeants sans contexte | Chronologies et tendances montrées aux équipes qui détiennent les services | Métriques associées à des garde-fous et employées pour prioriser le travail de fiabilité | Investissement dans la fiabilité décidé conjointement à l'aide de preuves d'impact et de récurrence entre services |

## Liste de vérification

- [ ] Les critères de déclaration sont écrits, versionnés et connus de tous ceux qui sont d'astreinte.
- [ ] Déclarer de bonne foi est explicitement sans danger, et aucun objectif n'existe sur le compte.
- [ ] Les heures de début d'impact, de déclaration et de rétablissement sont définies et tirées de la supervision ou d'une piste d'audit.
- [ ] Chaque incident majeur est montré comme sa propre ligne avec une chronologie par phase.
- [ ] L'impact sur les clients est dérivé de la télémétrie là où elle existe et décrit par un énoncé en langage clair.
- [ ] Les cibles du premier avis et du rythme de mise à jour sont fixées et vérifiées par incident.
- [ ] Une revue est publiée dans la fenêtre convenue et ses actions sont dans le backlog de l'équipe responsable.
- [ ] Les actions en retard et les causes répétées sont revues selon un calendrier.
- [ ] Un échantillon trimestriel d'incidents ordinaires à fort impact vérifie l'absence de déclarations manquées.
- [ ] Chaque métrique a un garde-fou nommé et aucune métrique n'est employée pour classer des individus.

## Prompts d'IA

**Rédigez des critères de déclaration pour revue.**

```text
Je rédige des critères pour déclarer un incident majeur dans [organization
type]. Nos services sont [list of services] et nos équipes sont [list of
teams]. Les utilisateurs sont [description of users]. Proposez un court
ensemble de critères de déclaration avec deux ou trois exemples pour chacun, une
liste d'ambiguïtés sur lesquelles une équipe pourrait se disputer et des
questions que je devrais régler avec [stakeholders]. N'inventez ni seuils ni
valeurs de référence ; utilisez des [placeholders] là où un nombre est
nécessaire. Énumérez vos hypothèses.
```

**Reconstituez et critiquez la chronologie d'un incident.**

```text
Voici la chronologie d'un incident majeur : [paste timeline with timestamps and
sources]. Identifiez le début d'impact, la déclaration, l'atténuation et le
rétablissement complet, et dites quels horodatages sont incertains et pourquoi.
Découpez la durée en phases et notez où se sont produits les plus grands
retards. Suggérez des questions à poser aux intervenants et des preuves de
supervision à chercher. N'inventez pas de faits absents de la chronologie.
Énumérez vos hypothèses.
```

**Passez en revue un ensemble d'actions post-incident.**

```text
Ci-dessous figurent les actions de [number] revues post-incident pour
[service] : [paste actions with owner, due date, and status]. Regroupez-les par
thème, signalez celles qui sont vagues, triviales ou sans responsable, et
repérez les schémas qui suggèrent un enregistrement de problème ou un élément de
backlog pour [owning team]. Ne classez ni individus ni équipes par performance.
N'inventez pas de causes. Énumérez vos hypothèses et les informations dont vous
auriez besoin pour améliorer l'analyse.
```

**Testez une métrique proposée à la recherche de détournements.**

```text
Nous prévoyons de suivre [metric name], définie comme [definition] et mesurée à
partir de [data source]. Décrivez comment cette métrique pourrait être détournée
par [role], quel comportement honnête elle pourrait décourager, et quelle
métrique ou pratique de garde-fou associée attraperait chaque cas. Gardez les
suggestions pratiques pour une équipe de [team size]. N'inventez ni valeurs de
référence ni sources. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets apparentés et le garde-fou qui doit se trouver à côté de chaque métrique d'incident majeur.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une version modifiée de ce sujet suit toujours le gabarit et les conventions.

## Points clés à retenir

- Les incidents majeurs sont rares ; montrez donc chacun avec sa chronologie et ne résumez que sur de longues fenêtres avec le comptage à côté du chiffre.
- Démarrez l'horloge à l'impact sur les clients, et rapportez l'écart avant la déclaration comme sa propre mesure.
- Mesurez l'impact en termes d'utilisateurs et d'usage, et ajoutez un énoncé en langage clair pour ce que les chiffres manquent.
- Traitez la ponctualité de la communication comme une partie de la réponse, avec des cibles par public et un rythme de mise à jour régulier.
- Une revue est terminée quand ses actions le sont ; suivez donc le suivi et les causes répétées.
- Ne fixez jamais d'objectif sur le compte, ne classez jamais les gens et gardez la déclaration sans danger.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
