# Gouvernance et responsabilité des métriques

**Une métrique que personne ne détient, ne définit, ne revoit ni ne retire s'éloignera du travail qu'elle décrit ; donnez donc à chaque métrique rapportée un responsable nommé, une définition écrite, une date de revue et une sortie.**

## Résumé et motivation

La gouvernance des métriques est l'ensemble des décisions légères sur qui détient une mesure, ce qu'elle signifie, qui peut la voir, à quelle fréquence elle est revue et quand elle est retirée. C'est un proche cousin de la [gouvernance des données](https://en.wikipedia.org/wiki/Data_governance), qui couvre la gestion plus large de la disponibilité, de la qualité et de la sécurité des données dans une organisation. La gouvernance des métriques applique la même discipline au petit ensemble, très visible, de chiffres que les équipes et les dirigeants utilisent pour piloter le travail de service et de livraison.

Le besoin se manifeste par de petites frictions répétées. Deux équipes calculent le « temps de résolution » différemment et passent une réunion à rapprocher les chiffres. Une tuile de tableau de bord reste périmée pendant des mois parce que la personne qui l'a construite a changé de poste. Une mesure conçue pour aider une équipe à diagnostiquer son flux est adoptée par un comité de pilotage comme objectif de performance, ce qui est la situation contre laquelle met en garde le sujet précédent (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Aucun de ces cas n'est un problème statistique. Chacun est un problème de responsabilité, et chacun est peu coûteux à prévenir.

Les points de vue agile et ITIL diffèrent par leur accent, et cette différence est utile. Dans la vision agile, une équipe détient ses mesures de travail et les négocie dans les rétrospectives, les accords de travail et les revues. La vision ITIL, telle que documentée dans ITIL 4 (l'édition de 2019 d'AXELOS, désormais publiée par PeopleCert), traite la mesure et le reporting comme une pratique générale de gestion et l'amélioration continue comme une pratique dotée de ses propres rôles, enregistrements et revues. ITIL attend aussi des responsables de service et des responsables de pratique qu'ils répondent des résultats. Les deux visions s'accordent : l'équipe détient la vue de travail, un responsable de service ou de pratique nommé détient la vue rapportée, et un petit registre relie les deux.

Quelques termes employés ici. Un **responsable de métrique** est la seule personne qui répond de la définition, de la qualité des données et de l'usage d'une métrique. Un **registre des métriques** est un court catalogue des métriques en usage, avec le responsable, la définition, la source de données, le garde-fou et la date de revue de chacune. Une **charte de métriques** est un énoncé d'une page du but, du périmètre, des rôles et du rythme de revue d'un ensemble de métriques. Une **[source unique de vérité](https://en.wikipedia.org/wiki/Single_source_of_truth)** est le système ou le jeu de données faisant autorité à partir duquel un chiffre donné est calculé. Un **[intendant des données](https://en.wikipedia.org/wiki/Data_steward)** veille à la qualité et à la définition d'un domaine de données, et dans une petite organisation le responsable de métrique tient souvent ce rôle. Une **[matrice RACI](https://en.wikipedia.org/wiki/RACI_matrix)** consigne qui est responsable, qui répond, qui est consulté et qui est informé pour chaque activité. Un **[dictionnaire de données](https://en.wikipedia.org/wiki/Data_dictionary)** est un catalogue d'éléments de données et de leur signification, ce que devient la colonne de définition du registre à plus grande échelle. Le **[principe du moindre privilège](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** dit que les personnes et les systèmes obtiennent l'accès dont ils ont besoin pour leur tâche et rien de plus. L'**[amélioration continue](https://en.wikipedia.org/wiki/Continual_improvement_process)** est l'effort constant pour améliorer les services, les pratiques et les façons de travailler, et c'est à la fois une pratique ITIL et une habitude agile. SLA signifie accord de niveau de service (service level agreement), et ITSM signifie gestion des services informatiques.

## Principes clés

- **Chaque métrique rapportée a un seul responsable nommé.** Un rôle ou une personne, jamais « l'équipe ». Une responsabilité partagée laisse la définition sans entretien.
- **Une définition, une source unique de vérité.** Écrivez la définition une fois, en précisant où l'horloge démarre et s'arrête, et calculez le chiffre à un seul endroit.
- **Gouverner en proportion des conséquences.** Une métrique qu'une équipe emploie pour déboguer son propre tableau demande une phrase. Une métrique dans un contrat, un rapport public ou un dossier de conseil demande une entrée de charte, une revue et une piste d'audit.
- **L'accès suit le but.** Décidez qui voit quelle vue et pourquoi. Le public par défaut de la vue de travail d'une équipe est l'équipe.
- **Revoir selon un rythme et retirer sur preuve.** Les métriques ont un cycle de vie. Adoptez-les, revoyez-les, révisez-les et retirez-les délibérément.
- **L'écrire et le garder petit.** Un registre qui tient sur une page est lu. Un manuel de politique ne l'est pas.
- **La gouvernance sert les personnes mesurées.** Les détenteurs d'une métrique incluent les personnes dont elle décrit le travail.

## Définitions des métriques

Ce sont des mesures de la santé d'une pratique de métriques, non d'un service. Elles sont volontairement peu nombreuses et peu coûteuses à collecter à partir du registre lui-même. Chaque période est un trimestre civil sauf indication contraire.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des responsables | Part des métriques rapportées ayant un responsable nommé et à jour | métriques rapportées avec un responsable qui tient encore le rôle en fin de période / métriques rapportées en fin de période ; exclut les métriques utilisées uniquement dans le tableau privé d'une équipe | pourcentage | Registre des métriques | Mesure et reporting | Accords de travail | Trimestrielle |
| Actualité des définitions | Part des métriques rapportées dont la définition a été revue dans l'intervalle convenu | métriques avec une date de revue dans les 6 derniers mois / métriques rapportées ; l'horloge démarre à la dernière revue consignée et s'arrête en fin de période | pourcentage | Journal des changements du registre des métriques | Mesure et reporting ; amélioration continue | Actions de rétrospective | Trimestrielle |
| Conformité des sources | Part des métriques rapportées calculées à partir d'exactement une source nommée | métriques avec une source faisant autorité et aucun calcul parallèle connu / métriques rapportées ; les calculs parallèles se découvrent en échantillonnant les tableaux de bord et les rapports | pourcentage | Registre plus un échantillon de tableaux de bord et de rapports | Mesure et reporting ; gestion des niveaux de service | Définition de terminé pour une métrique | Trimestrielle |
| Taux de retrait | Nombre de métriques retirées ou fusionnées dans une période par rapport à celles rapportées | métriques retirées ou fusionnées dans la période / métriques rapportées en début de période ; une métrique déplacée vers une vue privée d'équipe compte comme retirée de l'ensemble rapporté | pourcentage | Journal des changements du registre des métriques | Amélioration continue | Actions de rétrospective | Trimestrielle |
| Actualité de la revue des accès | Part des vues de métriques restreintes dont la liste de public a été revue dans l'intervalle | vues restreintes avec une revue de public dans les 6 derniers mois / vues restreintes ; les vues ouvertes à toute l'organisation sont exclues | pourcentage | Liste d'accès ou export des permissions de l'outil de BI | Gestion de la sécurité de l'information ; mesure et reporting | Accords de travail | Semestrielle |
| Lien avec les décisions | Part des métriques rapportées reliées dans le registre à une décision qu'elles éclairent | métriques avec une décision ou une question consignée / métriques rapportées ; un lien ne compte que si la décision a été prise au cours des 12 derniers mois | pourcentage | Registre des métriques et journal des décisions | Amélioration continue | Revue par les parties prenantes et résultats d'amélioration | Trimestrielle |

Aucune de ces métriques n'est un objectif. Un registre peut afficher une couverture complète des responsables et décrire malgré tout des métriques inutiles ; lisez donc le tableau avec celui du détournement ci-dessous.

## Recommandations

### Établir les responsabilités et le registre

**1. Tenez un registre des métriques d'une page.** Énumérez chaque métrique rapportée avec sa question, son responsable, sa définition, sa formule et ses horloges, son unité, sa source de données, son public, son garde-fou, sa date de dernière revue et sa date de revue prévue. Un tableur ou un fichier Markdown sous contrôle de version suffit. Le registre est l'artefact le plus utile de ce sujet, et le sujet précédent suppose déjà qu'il existe (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

**2. Nommez un responsable par métrique, et consignez le rôle.** Le responsable répond de la définition, de la qualité des données et de l'explication des résultats étranges. Choisissez quelqu'un proche des données et des décisions, souvent le responsable de service, un responsable de pratique ou un chef d'équipe. Consignez le rôle autant que la personne, pour que l'entrée survive à un changement de poste et qu'une vacance apparaisse dans le chiffre de couverture.

**3. Séparez détenir une métrique de détenir le travail qu'elle mesure.** Le responsable d'une métrique l'explique et l'entretient, mais l'équipe qui fait le travail reste responsable du résultat. Cela évite deux pièges : le responsable à qui l'on reproche un chiffre qu'il ne peut influencer, et l'équipe qui désavoue un chiffre parce que quelqu'un d'autre l'entretient. Un court tableau RACI dans la charte rend cela explicite.

**4. Écrivez la définition avec ses horloges, une seule fois.** Le registre contient la définition faisant autorité : ce qui est compté, où l'horloge démarre et s'arrête, quels états la suspendent et ce qui est exclu. Renvoyez-y depuis chaque tableau de bord qui montre la métrique. Quand une définition doit changer, changez-la d'abord dans le registre et marquez le changement sur le graphique (voir le sujet 1.6, Culture statistique pour les métriques de service, pour la façon de montrer une rupture dans une tendance).

**5. Calculez chaque métrique à un seul endroit.** Choisissez la source faisant autorité, comme l'outil ITSM, le gestionnaire de tickets ou le système de supervision, et dites-le dans le registre. Les tableurs parallèles qui reproduisent le chiffre devraient être retirés ou renommés pour que personne ne les prenne pour le chiffre officiel. La traçabilité des données et l'outillage relèvent du sujet suivant (voir le sujet 1.5, Sources de données et instrumentation).

### Fixer le rythme et la maîtrise des changements

**6. Revoyez les définitions selon un calendrier proportionné aux conséquences.** Pour les métriques des contrats, des rapports réglementés ou des dossiers de direction, revoyez-les deux fois par an et à chaque changement du flux de travail sous-jacent. Pour les mesures de travail au niveau de l'équipe, la rétrospective est la revue. Chaque revue pose trois questions : la définition est-elle encore exacte, les données sont-elles encore saines et quelqu'un a-t-il utilisé le chiffre pour décider quelque chose ?

**7. Traitez les changements de définition comme des changements de service.** Consignez qui a demandé le changement, pourquoi, qui a été consulté et la date d'effet. Un petit changement dans un flux de statuts peut déplacer silencieusement une mesure de temps de façon importante. Une maîtrise légère des changements de définition emprunte l'idée à la maîtrise des changements, sans la cérémonie (voir le sujet 4.3, Métriques de maîtrise des changements, pour la contrepartie du changement de service).

**8. Reliez la revue à l'amélioration continue.** Les revues de métriques devraient produire un travail d'amélioration, ou une décision explicite de ne pas agir. ITIL traite l'amélioration continue comme une pratique dotée d'un registre des opportunités d'amélioration, et les équipes agiles obtiennent le même effet par les actions de rétrospective. Si une revue se termine sans action ni retrait, demandez si la métrique fait un travail quelconque (voir le sujet 9.5, Métriques d'amélioration continue).

**9. Retirez les métriques délibérément.** Définissez un test de retrait, par exemple « non citée dans une décision pendant deux cycles de revue », et appliquez-le. Archivez la définition et les dernières valeurs, dites ce qui a remplacé la métrique le cas échéant et prévenez le public. Un journal des retraits est une preuve pour les auditeurs et un soulagement pour les personnes qui entretenaient les données à la main.

### Maîtriser les vues et les accès

**10. Décidez du public de chaque vue.** La plupart des métriques ont une vue de travail pour l'équipe, une vue rapportée pour le responsable de service ou le programme, et parfois une vue externe pour les clients, un régulateur ou un fournisseur. Consignez quel public reçoit quelle vue et pourquoi. En vous guidant sur le principe du moindre privilège, restreignez les vues qui contiennent des données personnelles, des détails de sécurité ou des chiffres de fournisseurs commercialement sensibles, et laissez le reste ouvert pour que la transparence soit la règle par défaut.

**11. Gardez les données individuelles hors du reporting.** La règle stricte de ce livre est que les métriques décrivent des équipes, des services et des systèmes, non des personnes. La gouvernance l'appuie en fixant le grain rapporté, par exemple l'équipe et le service, et en restreignant toute extraction au niveau de la personne à l'intendant des données. Si une demande de ventilation par personne arrive, consignez-la, demandez quelle décision elle sert et proposez une alternative au niveau de l'équipe ou du système (voir le sujet 11.3, Déployer les métriques sans semer la peur).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des responsables | Nommer un directeur ou une liste de diffusion comme responsable pour atteindre 100 pour cent, sans personne qui puisse expliquer ou changer la métrique | Demander à chaque responsable d'expliquer un mouvement récent du chiffre ; suivre les questions restées sans réponse plus d'une semaine |
| Actualité des définitions | Toucher la date de revue sans lire la définition | Échantillonner trois entrées chaque trimestre et comparer la définition écrite avec la configuration réelle de l'outil |
| Conformité des sources | Déclarer une source faisant autorité alors que des tableurs circulent encore et divergent | Compter les chiffres distincts pour la même métrique trouvés dans un échantillon de rapports ; rapprocher les écarts lors de la revue |
| Taux de retrait | Retirer des métriques triviales ou inutilisées pour paraître discipliné, ou renommer une métrique pour qu'elle compte comme nouvelle | Passer en revue le journal des retraits pour voir ce qui a été supprimé ; suivre à côté le nombre total de métriques rapportées et le chiffre de lien avec les décisions |
| Actualité de la revue des accès | Approuver la liste de public existante sans la lire | Comparer la liste avec la composition et les rôles actuels des équipes ; rapporter le nombre de retraits trouvés |
| Lien avec les décisions | Écrire une décision vague comme « améliorer le service » pour satisfaire le champ | Exiger une décision ou une question datée, et échantillonner le journal des décisions pour voir si la métrique a réellement été consultée |

Une lecture saine est un registre qui change. Les entrées ont des responsables qui répondent aux questions, des dates de revue tombant dans les six derniers mois, un journal des retraits avec motifs et une courte liste de métriques toujours voulues parce que les gens peuvent nommer la décision qu'elles éclairent. Un registre dont chaque champ est rempli et où rien ne change jamais est un signal d'alerte.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Bureau central des métriques | Définitions cohérentes et outillage partagé ; audit plus facile | Lent, éloigné du travail, et tenté de standardiser des mesures qui devraient différer d'une équipe à l'autre |
| Responsabilité fédérée avec un registre partagé | Les responsables sont proches des données ; le registre maintient un minimum commun | Demande un encouragement constant pour éviter la dérive de qualité entre équipes |
| Mesures détenues par les seules équipes | Rapide et adaptée au travail | Les définitions divergent ; les consolidations deviennent peu fiables ; la connaissance part avec les personnes |
| Accès ouvert par défaut | Construit la confiance et la compréhension partagée | Risque d'exposition de détails sensibles ou individuels |
| Accès restreint | Protège les données sensibles | Cache le contexte aux personnes qui pourraient aider, et invite au soupçon |

L'équilibre consiste à centraliser la fine couche qui doit s'accorder, c'est-à-dire le registre, les définitions communes et les règles d'accès, et à fédérer tout le reste.

## Questions à discuter avec votre équipe

**1. Qui répondrait si le chiffre le plus cité de notre tableau de bord paraissait faux demain ?**
Demandez au groupe de nommer une personne, non un groupe. Si plusieurs noms sortent, ou aucun, la métrique n'a pas de responsable dans les faits. L'animateur doit noter la métrique, le responsable candidat et ce dont il aurait besoin pour faire le travail, comme un accès en lecture aux données ou du temps en revue. Concluez en convenant de qui confirmera le responsable et consignera le rôle dans le registre.

**2. Où existe-t-il aujourd'hui deux versions d'un même chiffre ?**
Cherchez des rapports qui montrent la même métrique avec des valeurs différentes : une diapositive hebdomadaire face à un tableau de bord en direct, ou un rapport de fournisseur face au rapport interne. Pour chacun, demandez d'où vient la différence, par exemple le périmètre, l'horloge ou les exclusions. Décidez quelle source fait autorité et ce que devient l'autre version. Attendez-vous à ce que la conversation fasse apparaître des définitions de travail différentes de mots que tout le monde croyait partagés.

**3. Quelle métrique retirerions-nous ce trimestre si nous devions en retirer une ?**
Commencez par la métrique que personne n'a citée récemment dans une décision. Demandez ce qui arriverait si elle disparaissait, et qui le remarquerait. Si la réponse est « personne », sortez-la de l'ensemble rapporté pour une période d'essai. L'animateur doit traiter le retrait comme normal et sain, et consigner le résultat dans le journal des retraits.

**4. Qui voit lesquelles de nos métriques, et est-ce voulu ?**
Dessinez une grille simple de métriques en regard des publics : équipe, responsable de service, direction, clients, fournisseurs, régulateurs. Marquez où l'accès a été une décision et où il est simplement arrivé. Cherchez toute vue qui pourrait servir à comparer des individus. Convenez d'un changement à au moins une liste de public, et de qui la revoit ensuite.

**5. Comment changer une définition sans casser la tendance ?**
Parcourez un changement récent d'un flux de statuts ou d'une échelle de priorité. Demandez qui a été prévenu, si le graphique a été annoté et si quelqu'un a comparé les anciennes et les nouvelles valeurs. Rédigez une entrée de changement légère que l'équipe remplirait réellement. Convenez de qui approuve les changements des métriques qui figurent dans des contrats ou des rapports externes.

**6. Qu'arrêterions-nous de faire si la gouvernance devenait un fardeau ?**
La gouvernance peut se transformer en rituel. Demandez quelles parties de l'approche actuelle les gens sauteraient si personne ne vérifiait, et pourquoi. Traitez les réponses comme un retour de conception plutôt que comme de la résistance. L'animateur doit chercher les étapes qui font double emploi, les champs que personne ne lit et les revues qui ne produisent jamais de décision.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent des mesures de travail comme l'ancienneté des éléments de travail et le temps de cycle, et devraient convenir des définitions dans leurs accords de travail. Quand une métrique monte dans un rapport de portefeuille, l'équipe devrait connaître le responsable, la définition et le public. Les équipes tirent le plus de valeur d'une courte entrée de registre pour chaque mesure rapportée, et du droit de contester une définition qui ne correspond plus à la manière dont le travail circule (voir le sujet 2.1, Mesures de flux).

### Équipes de service et d'exploitation

Les équipes de service et d'exploitation portent les métriques qui figurent dans les SLA et les revues opérationnelles ; les définitions, les horloges et les exclusions y ont donc un poids contractuel. Les responsables y sont généralement des responsables de service et de pratique. Ils devraient conserver une piste de preuves pour les changements de définition, rapprocher régulièrement les chiffres rapportés de l'outil ITSM et être les premiers à retirer une mesure qui a cessé d'éclairer les décisions opérationnelles (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

### Direction et gouvernance

Les dirigeants fixent les conditions : qui détient les métriques, quelles vues atteignent le dossier de direction et comment les chiffres sont utilisés. Ils devraient demander le registre et le journal des retraits, lire les définitions derrière les chiffres phares et résister aux demandes de classements au niveau des personnes. Les instances de gouvernance ont besoin d'un petit point permanent qui passe en revue le registre et consigne les décisions, conformément aux attentes d'ISO/IEC 20000-1 pour les systèmes de management des services (dans son édition de 2018), sans transformer la revue en exercice de conformité (voir le sujet 8.3, Métriques de conformité et d'audit).

### Clients et utilisateurs

Les clients et les utilisateurs voient rarement le registre, mais ils en ressentent l'absence quand un chiffre d'une revue de service diffère de leur expérience. Lorsqu'une métrique figure dans un rapport destiné aux clients ou dans un SLA, la définition devrait être disponible en langage clair, avec ce qui est exclu. Les clients devraient avoir un moyen de contester un chiffre, et le responsable devrait y répondre (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite un centre de services, trois équipes produit et un groupe d'exploitation. Tous les chiffres ci-dessous sont illustratifs.

La revue de service mensuelle montre un temps de résolution des incidents de 5,1 heures en médiane. Le tableau de bord propre aux équipes produit, construit à partir du même outil ITSM, montre 6,4 heures. Les deux chiffres circulent depuis un an. Un nouveau responsable de service demande qui détient la métrique et reçoit trois réponses différentes.

Le responsable, avec les chefs d'équipe et l'intendant des données, consacre deux séances à un premier registre de 14 métriques rapportées. Parmi elles, 5 n'avaient pas de responsable et 4 avaient deux sources. Le temps de résolution fait partie des métriques à double source. La différence tient à un état de suspension : la revue de service exclut le temps passé en « en attente du client », et le tableau de bord de l'équipe ne l'exclut pas. Le groupe convient d'une définition unique, nomme le responsable de service comme responsable de la métrique et publie les deux valeurs sur la même page pendant un trimestre, étiquetées par définition, pour que personne ne perde l'historique. Ils annotent le graphique là où la définition change.

Lors de la première revue trimestrielle, le groupe applique un test de retrait et supprime 3 des 14 métriques, dont un graphique mensuel de nombre de tickets qu'aucune décision récente n'avait cité. Il restreint aussi la vue qui ventile le temps de résolution par analyste, en gardant l'intendant des données comme seul détenteur, et propose à la place une ventilation au niveau de l'équipe.

Un risque de détournement apparaît à la deuxième revue. La couverture des responsables atteint 100 pour cent, mais un échantillon montre que deux des responsables sont une liste de diffusion et un chef de département qui n'a jamais ouvert les données. Le groupe les remplace par des responsables de service nommés et ajoute la question de garde-fou à la revue : « Le responsable peut-il expliquer le dernier mouvement de ce chiffre ? » La couverture tombe à 86 pour cent pendant un trimestre, ce que le groupe consigne comme un résultat honnête. La décision consignée est de maintenir l'objectif de couverture jusqu'à ce que le garde-fou ait fonctionné pendant deux cycles.

## Perspective sectorielle

**Startup.** Un fondateur ou un ingénieur principal détient souvent chaque métrique par défaut. Le risque est que les définitions vivent dans une seule tête. Tenez un registre de cinq à huit métriques dans un document partagé, nommez un responsable pour chacune et écrivez les définitions le jour où une métrique apparaît pour la première fois dans une communication aux investisseurs ou aux clients.

**Petite entreprise.** La personne qui gère l'informatique est généralement le responsable, l'intendant et le lecteur des rapports. Limitez la gouvernance à une seule page, revoyez deux fois par an et redoublez d'attention lorsqu'un rapport fourni par un éditeur définit une métrique différemment de la vôtre. Nommez la personne de l'entreprise qui détient chaque chiffre destiné aux clients.

**Grande entreprise.** L'échelle rend la couche partagée indispensable. Utilisez un registre avec flux de travail, un conseil léger qui se réunit chaque trimestre et un rôle d'intendant des données pour chaque domaine majeur. Préservez l'autonomie des équipes pour les mesures de travail et gardez-vous de standardiser des métriques qui devraient différer selon les types de services. S'aligner sur la gouvernance des données déjà présente dans l'organisation économise de l'effort.

**Gouvernement et secteur public.** Le reporting légal, l'audit et les marchés publics font des définitions écrites et des enregistrements de changements une obligation. Traitez le registre comme un artefact d'audit et gardez un lien clair entre chaque chiffre publié et son responsable et sa source. Les décisions d'accès impliquent souvent un examen juridique et de protection de la vie privée ; consignez donc le fondement de chaque vue restreinte (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est modeste et surtout en temps. Comptez quelques heures pour construire un premier registre, une heure ou deux par trimestre pour la revue et un peu d'effort de l'intendant des données pour résoudre les sources contradictoires. Les coûts d'outillage sont faibles, car un tableur ou un fichier sous contrôle de version suffit pour commencer.

Le retour est surtout du gaspillage évité. Les réunions passées à rapprocher des chiffres disparaissent, les audits trouvent une piste claire et l'intégration d'un nouveau responsable de service est plus rapide parce que les définitions sont écrites. Les décisions sont meilleures parce qu'elles reposent sur des chiffres qui signifient la même chose chaque mois. Ne citez pas de pourcentage pour ces bénéfices sans vos propres données. Si vous avez besoin de chiffres pour un dossier d'affaires, comptez les heures passées le trimestre dernier à rapprocher des chiffres contradictoires et le nombre de métriques sans responsable consigné, puis recomptez-les après deux cycles de revue.

## Antimodèles et pièges

- **La responsabilité par comité.** Un groupe détient la métrique et personne ne répond aux questions. Nommez un rôle responsable et un suppléant.
- **Le registre comme cimetière.** Il est construit une fois et jamais retouché. Inscrivez les dates de revue au calendrier et affichez la date sur chaque tableau de bord.
- **Tout standardiser.** Une définition unique imposée à des équipes dont le travail diffère produit des chiffres qui ne signifient rien nulle part. Ne partagez que la couche qui doit s'accorder.
- **Les changements de définition silencieux.** Les tendances se rompent et la confiance suit. Consignez chaque changement avec son motif et annotez le graphique.
- **Une gouvernance sans retrait.** L'ensemble ne fait que croître et l'attention s'amincit. Appliquez un test de retrait à chaque revue.
- **Le secret par défaut.** Cacher les vues de travail aux personnes mesurées engendre le soupçon. Ne restreignez que ce qui porte un risque réel et expliquez pourquoi.
- **L'accès ouvert aux données individuelles.** Une seule extraction peut devenir un classement en quelques jours. Fixez le grain rapporté à l'équipe et au service, et gardez toute donnée individuelle sous l'intendant.
- **Le théâtre de conformité.** Des champs sont remplis pour satisfaire une liste de vérification. Échantillonnez les entrées pour vérifier leur vérité et demandez aux responsables d'expliquer les mouvements récents.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Responsabilité et registre | Responsables flous ; les métriques vivent dans des tableurs individuels | Certaines équipes tiennent une liste avec des responsables | Un registre pour toutes les métriques rapportées, chacune avec un responsable et un rôle nommés | Couverture et actualité suivies dans le temps ; les écarts mènent à des corrections dotées de ressources | Registre partagé avec les fournisseurs et les clients là où les chiffres franchissent les frontières |
| Définitions et maîtrise des changements | Les définitions diffèrent selon les personnes | Écrites pour certaines métriques contractuelles | Définition écrite avec horloges et journal des changements pour chaque métrique rapportée | Changements examinés pour leur effet sur les tendances avant publication | Définitions révisées conjointement entre équipes et fournisseurs quand elles cessent d'éclairer les décisions |
| Revue et retrait | Métriques ajoutées, jamais retirées | Nettoyage occasionnel | Rythme de revue et test de retrait écrits | Résultats des revues suivis comme travail d'amélioration | Retrait et renouvellement routiniers, guidés par les preuves des utilisateurs et des équipes |
| Accès et public | Accès par accident | Vues restreintes pour les données sensibles | Public listé par métrique, avec une raison | Accès revu selon un rythme ; données individuelles tenues par l'intendant | Public conçu avec les personnes mesurées et avec les clients |

## Liste de vérification

- [ ] Un registre des métriques existe et énumère chaque métrique rapportée.
- [ ] Chaque métrique rapportée a un responsable nommé et un rôle consigné.
- [ ] Chaque métrique rapportée a une définition écrite avec des règles de démarrage, d'arrêt et d'exclusion.
- [ ] Chaque métrique a une source faisant autorité nommée dans le registre.
- [ ] Une date de revue et un intervalle sont consignés pour chaque métrique.
- [ ] Les changements de définition sont consignés avec un motif et marqués sur le graphique.
- [ ] Un test de retrait est écrit et appliqué à chaque revue.
- [ ] Le public de chaque vue est consigné, avec une raison pour toute restriction.
- [ ] Aucune vue rapportée ne classe des individus, et les données individuelles sont chez l'intendant des données.
- [ ] Le registre a été échantillonné pour sa véracité au cours du dernier trimestre.

## Prompts d'IA

**Rédigez une charte de métriques pour un ensemble de métriques.**

```text
Rédigez une charte de métriques d'une page pour [team or service name], qui
fournit [type of service or delivery work]. L'ensemble de métriques est : [list
of metrics]. Les publics sont [audiences]. Incluez le but, des non-objectifs
explicites, un tableau RACI pour le responsable, l'intendant des données et les
réviseurs en utilisant ces rôles : [roles], un rythme de revue et un test de
retrait. Fondez le brouillon uniquement sur ce que j'ai écrit. N'inventez ni
métriques, ni objectifs, ni valeurs de référence. Énumérez vos hypothèses et
les questions auxquelles je dois répondre pour compléter la charte.
```

**Trouvez les conflits entre deux versions d'une métrique.**

```text
Voici deux descriptions de ce qui devrait être la même métrique, [metric name].
Version A, issue de [source A] : [description and formula]. Version B, issue de
[source B] : [description and formula]. Comparez-les sur ce qui est compté, où
l'horloge démarre et s'arrête, quels états la suspendent et ce qui est exclu.
Expliquez quelles différences pourraient rendre compte de l'écart entre [value
A] et [value B], et suggérez des questions pour le responsable. Ne devinez pas
de valeurs que je n'ai pas données. Énumérez vos hypothèses et ce que vous
n'avez pas pu déterminer.
```

**Passez en revue un registre de métriques pour y repérer des lacunes.**

```text
Ci-dessous figure un extrait de notre registre de métriques avec les champs
[list fields]. Examinez-le pour y trouver les responsables manquants, les
entrées sans date de revue ou avec une date plus ancienne que [interval], les
métriques ayant plus d'une source, les métriques sans décision liée et les vues
qui pourraient exposer des données au niveau des personnes. Rapportez des
schémas par métrique, non par individu. N'inventez pas de faits sur nos
métriques. Dites-moi quels constats sont certains d'après le texte et lesquels
sont des suppositions, et énumérez vos hypothèses.

[paste register extract, with personal data removed]
```

**Planifiez une revue de retrait.**

```text
Nous passons en revue les métriques tous les [interval]. Notre test de retrait
est : [test]. Pour chacune des métriques ci-dessous, à partir des notes que je
fournis, proposez retirer, conserver, fusionner ou repenser, avec une raison
d'une ligne et une question à poser au responsable : [metrics with last-cited
date and owner role]. Suggérez aussi comment annoncer chaque retrait à
[audience]. N'inventez pas de données d'usage. Énumérez vos hypothèses et toute
information qui changerait votre recommandation.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet et le garde-fou associé d'une métrique avant de l'ajouter au registre.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique porte un responsable, un vecteur de détournement et un garde-fou.

## Points clés à retenir

- La gouvernance garde aux chiffres le même sens dans le temps, et un registre d'une page en est le cœur.
- Nommez un responsable unique pour chaque métrique rapportée, et consignez le rôle autant que la personne.
- Écrivez une définition avec ses horloges, calculez-la à un seul endroit et consignez chaque changement.
- Proportionnez le poids de la gouvernance aux conséquences de la métrique.
- Décidez à dessein qui voit quelle vue, gardez les données individuelles hors du reporting et retirez les métriques sur preuve.

## Références et lectures complémentaires

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
