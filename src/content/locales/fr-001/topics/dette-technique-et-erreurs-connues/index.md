# Dette technique et erreurs connues

**Traitez les erreurs connues et la dette technique comme un seul registre visible de corrections différées, mesurez ce que chaque élément vous coûte chaque mois où il reste ouvert, et dépensez une part protégée de la capacité sur les éléments aux intérêts les plus élevés.**

## Résumé et motivation

Chaque équipe diffère certaines réparations. Un défaut est compris mais non corrigé, un raccourci est pris pour tenir une date, un composant est laissé vieillir et un contournement est écrit dans un guide d'exploitation. Chaque report est une décision sensée au moment où elle est prise. Les ennuis commencent quand les reports s'accumulent hors de vue, car le coût de leur portage apparaît plus tard sous forme d'incidents, de livraison lente et de gens fatigués, sans aucune ligne dans aucun rapport qui relie le coût à la cause.

Deux vocabulaires décrivent le même schéma. Dans [ITIL](https://en.wikipedia.org/wiki/ITIL), une **erreur connue** est un problème dont la cause profonde est comprise et pour lequel il existe un contournement, ou une correction permanente pas encore appliquée. Les erreurs connues sont consignées pour que le personnel du centre de services et de l'exploitation puisse résoudre rapidement les incidents répétés, et l'enregistrement reste ouvert jusqu'à la mise en production d'une correction. Dans le travail logiciel agile, la **[dette technique](https://en.wikipedia.org/wiki/Technical_debt)** est la métaphore, forgée par [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) en 1992, pour les choix de conception et de mise en œuvre qui rendent le changement futur plus difficile. La métaphore porte deux idées qui comptent pour la mesure : le **capital**, qui est l'effort nécessaire pour supprimer la dette, et les **intérêts**, qui sont l'effort ou le risque supplémentaire que vous payez à chaque période tant que la dette demeure.

Les deux visions diffèrent par l'endroit où elles regardent. Les erreurs connues sont découvertes par l'exploitation : un incident ou une enquête sur un problème trouve une cause. La dette technique est généralement découverte par la livraison : un développeur remarque qu'un changement est plus difficile qu'il ne devrait l'être. Une erreur connue est souvent de la dette technique qui a déjà commencé à faire mal aux clients. La dette technique est souvent une erreur connue en attente de se produire. Tenir des listes séparées, l'une dans l'outil ITSM et l'autre dans un backlog ou un wiki, cache le lien et produit deux arguments concurrents pour la même capacité rare.

Ce sujet vous donne un petit ensemble de mesures pour le registre combiné. Il évite un chiffre unique en dollars pour la dette de toute une organisation, qu'aucune méthode ne produit de façon fiable, et mesure ce que vous pouvez observer : éléments ouverts, temps d'attente, incidents causés, travail ajouté et capacité dépensée en réparation. Le registre alimente alors une conversation de priorisation entre le produit et l'exploitation (voir le sujet 4.1, Métriques de gestion des problèmes, pour les enregistrements de problèmes et les corrections permanentes, et le sujet 2.9, Travail opérationnel et travail non planifié, pour la charge d'interruptions que crée la dette).

Termes employés dans ce sujet :

- Un **contournement** est un moyen de rétablir le service ou d'éviter une panne sans supprimer la cause.
- Une **correction permanente** supprime la cause. L'[analyse des causes profondes](https://en.wikipedia.org/wiki/Root_cause_analysis) est le travail qui la trouve.
- Le **[remaniement de code](https://en.wikipedia.org/wiki/Code_refactoring)** restructure le code sans changer son comportement externe. C'est le moyen habituel de rembourser la dette de conception.
- Une **[odeur de code](https://en.wikipedia.org/wiki/Code_smell)** est un signe de surface dans le code qui indique souvent un problème plus profond. C'est une incitation à regarder, non un verdict.
- Le **[coût d'opportunité](https://en.wikipedia.org/wiki/Opportunity_cost)** est la valeur de la meilleure solution de rechange à laquelle vous renoncez en choisissant un usage du temps plutôt qu'un autre. Chaque correction concurrence une fonction, et la comparaison est la vraie décision.
- Le **[coût du retard](https://en.wikipedia.org/wiki/Cost_of_delay)** est la perte économique due au report d'un travail. C'est l'idée derrière la tarification des intérêts d'un élément de dette.
- Un **[bogue logiciel](https://en.wikipedia.org/wiki/Software_bug)** est un défaut dans un logiciel. Une erreur connue peut être un bogue, une faiblesse de configuration, une limite de conception ou un défaut de fournisseur.
- L'**[analyse statique de programme](https://en.wikipedia.org/wiki/Static_program_analysis)** inspecte le code sans l'exécuter. Ses avertissements et ses scores de complexité sont des indicateurs de dette possible, et ils sont une preuve plus faible que l'historique des incidents.

Toute dette n'est pas une erreur. Le quadrant de Martin Fowler sépare la dette délibérée de la dette involontaire et la dette imprudente de la dette prudente (voir la liste de références). Un raccourci prudent avec un plan de remboursement est un prêt sain, et la dette imprudente est celle qu'il faut prévenir. Les métriques ici ne jugent pas l'origine. Elles montrent le solde.

## Principes clés

- **Un registre, deux portes.** Les erreurs connues de l'exploitation et les éléments de dette de la livraison vont dans la même liste visible, avec un lien entre les enregistrements qui décrivent la même cause.
- **Mesurer les intérêts, et le capital aussi.** La taille d'une réparation compte moins que ce que l'élément ouvert vous coûte chaque mois en incidents, contournements et changements ralentis. Classez par intérêts par unité d'effort de réparation.
- **Faire du report une décision avec un responsable.** Chaque élément a un responsable, un motif énoncé d'attente et une date de revue. Un élément que personne n'a choisi de reporter est de la négligence, et il est compté comme tel.
- **Protéger la capacité avant d'en avoir besoin.** Une part énoncée de la capacité de chaque équipe pour le travail de réparation, convenue à l'avance, vaut mieux qu'un nettoyage héroïque après un mauvais trimestre.
- **Garder le contournement honnête.** Un contournement est un service, avec son propre coût, son responsable et ses modes d'échec. Mesurez à quelle fréquence il est employé et à quelle fréquence il échoue.
- **Décrire des systèmes, jamais des personnes.** La dette appartient à un service ou à un composant. Ne l'attribuez jamais à un auteur, et ne classez jamais les ingénieurs selon la dette qu'ils ont touchée.
- **Estimer grossièrement.** Des tailles en « heures », « jours » et « semaines » suffisent. Une précision au-delà est inventée.

## Définitions des métriques

Les métriques ci-dessous décrivent le registre des réparations différées. Les horloges et les frontières sont énoncées dans chaque formule. Les mesures de temps sont rapportées comme des distributions (la médiane et le 85e ou le 95e percentile), non comme une moyenne unique.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Âge du backlog d'erreurs connues | Depuis combien de temps les erreurs connues ouvertes attendent une correction permanente | L'horloge démarre quand l'enregistrement de problème est marqué « erreur connue » ; s'arrête quand la correction permanente est mise en production ; les éléments clos comme « risque accepté » sont rapportés séparément et exclus. Rapportez le nombre, l'âge médian et l'âge au 85e percentile, par service | jours (distribution) | Enregistrements de problèmes et d'erreurs connues de l'outil ITSM, enregistrements de versions | Gestion des problèmes | Graphique des éléments de travail vieillissants ; âge du backlog de bogues | Mensuelle |
| Couverture des contournements | Part des erreurs connues ouvertes qui ont un contournement documenté et testé qu'un agent peut suivre | erreurs connues ouvertes avec un contournement revu dans les 6 derniers mois / erreurs connues ouvertes ; les éléments clos et à risque accepté sont exclus | pourcentage | Base de connaissances liée aux enregistrements d'erreurs connues | Gestion des problèmes ; gestion des connaissances | Guide d'exploitation ou définition de terminé pour l'exploitabilité | Mensuelle |
| Incidents liés à des erreurs connues ouvertes | Incidents dont la cause est une erreur connue ouverte, mesure directe des intérêts payés en perturbation du service | incidents de la période liés à une erreur connue qui était ouverte quand l'incident a commencé / tous les incidents de la période ; les incidents sans lien de cause sont rapportés comme non liés, non comptés | pourcentage, plus nombre | Liens incident-problème de l'outil ITSM | Gestion des incidents ; gestion des problèmes | Défauts échappés ; flux de bogues en production | Mensuelle |
| Stock de dette | Nombre et taille estimée des éléments de dette technique enregistrés qui restent ouverts | éléments ouverts dans le registre de dette en fin de période ; la taille est la somme des tranches d'effort grossières (heures, jours, semaines) attribuées à l'enregistrement ; la dette non enregistrée ou soupçonnée est exclue | nombre, et tranches d'effort | Registre de dette dans le gestionnaire de tickets, étiqueté par service | Amélioration continue ; conception de services | Éléments du backlog produit étiquetés comme dette | Mensuelle |
| Intérêts de la dette | Travail supplémentaire causé par la dette et les erreurs connues ouvertes, en temps d'équipe | heures consignées dans la période sur des éléments de travail étiquetés avec une référence de dette ou d'erreur connue (contournements, étapes manuelles, reprise et effort supplémentaire sur les changements touchés) / total des heures de travail de l'équipe dans la période ; le travail de réparation lui-même est exclu et compté dans la part de capacité | pourcentage du temps de travail | Étiquettes de temps ou d'effort sur les éléments de travail, gardées au niveau de l'équipe | Amélioration continue ; gestion des problèmes | Part de travail non planifié et de reprise | Mensuelle |
| Part de capacité pour la dette | Part de la capacité de livraison dépensée à retirer la dette et les erreurs connues | capacité (nombre d'éléments ou effort) des éléments de travail terminés étiquetés comme réparation de dette ou correction d'erreur connue / tous les éléments de travail terminés dans la période ; les éléments sans étiquette sont exclus | pourcentage | Gestionnaire de tickets, éléments terminés par étiquette | Amélioration continue ; maîtrise des changements | Allocation de capacité | Par période de planification, revue mensuelle |
| Variation nette de la dette | Si le registre croît ou diminue | éléments de dette et d'erreurs connues enregistrés dans la période moins éléments résolus dans la période ; résolu signifie correction mise en production, non fusionnée ; les éléments clos comme « ne sera pas corrigé » sont comptés sur une ligne séparée | nombre (signé) | Registre de dette et enregistrements d'erreurs connues | Amélioration continue | Variation du backlog par catégorie | Mensuelle |

Le risque accepté est une façon légitime de clore une erreur connue, car certains problèmes ne valent pas la peine d'être corrigés. Il est listé séparément pour que clore des éléments n'améliore pas discrètement le chiffre d'âge. La fenêtre de revue de 6 mois dans la couverture des contournements est un exemple. Une équipe fixe la fenêtre pour correspondre à la vitesse à laquelle ses systèmes changent et l'écrit dans le registre des métriques.

## Recommandations

### Construire le registre

**1. Fusionnez la liste des erreurs connues et la liste de dette en un seul registre.** Tenez un registre avec un champ pour l'origine (exploitation ou livraison), le service, le responsable, la tranche de taille et le lien vers les enregistrements apparentés. L'outil ITSM peut le contenir, ou le gestionnaire de tickets, à condition que chaque système renvoie à l'autre. Sans vue unique, une erreur connue en exploitation concurrence un élément de dette invisible en livraison pour les mêmes ingénieurs.

**2. Enregistrez la dette au moment où elle est créée ou découverte.** Un raccourci pris délibérément va dans le registre dans la même demande de fusion ou le même enregistrement de changement, avec un motif énoncé et une date de revue. La dette trouvée plus tard est enregistrée par celui qui la trouve. Une règle de capture simple, d'une ligne, vaut mieux qu'un audit périodique, car les gens oublient ce qu'ils savaient le trimestre dernier.

### Mesurer les intérêts

**3. Liez chaque fois les incidents aux erreurs connues.** Le lien entre un incident et son erreur connue est la donnée la plus forte dont vous disposez sur les intérêts, et il coûte quelques secondes à la résolution. Faites du lien un champ obligatoire quand la cause est connue, et rapportez la part non liée afin qu'une lacune ne ressemble pas à une bonne nouvelle (voir le sujet 3.3, Temps de réponse et de résolution des incidents). Quand la même cause apparaît dans plusieurs incidents, l'enregistrement de problème porte les preuves pour la correction.

**4. Étiquetez le travail que la dette crée.** Laissez les ingénieurs marquer un élément de travail quand un contournement, une étape manuelle ou une reprise supplémentaire a été nécessaire à cause d'une faiblesse connue, et liez-le à l'élément du registre. L'étiquette coûte peu et donne le chiffre des intérêts de la dette au niveau de l'équipe. Traitez le résultat comme une estimation à large marge d'erreur, utile pour classer les éléments et suivre une tendance, non pour la comptabilité.

**5. Évaluez chaque élément par deux nombres : effort de réparation et intérêts mensuels.** Employez des tranches grossières, comme heures, jours, semaines, pour l'effort, et un coût mensuel approximatif tiré des incidents liés, du travail étiqueté et de tout coût d'indisponibilité que votre organisation estime déjà. Diviser les intérêts par l'effort donne un simple délai de retour. N'inventez pas de précision : une tranche et une hypothèse énoncée suffisent pour séparer les gains évidents des éléments qui peuvent attendre.

### Protéger la capacité et décider

**6. Réservez une part permanente de capacité, et rapportez-la.** Convenez avec le responsable de produit d'une part de chaque cycle pour le travail de réparation, fixée selon la tendance du registre et revue chaque trimestre. Rapportez la part de capacité pour la dette à côté des chiffres de travail planifié, afin que les dirigeants voient le travail de réparation comme un investissement délibéré. Une part réservée protège aussi l'équipe d'un débat d'arbitrage à chaque conversation de planification, que le backlog de fonctions gagne généralement.

**7. Classez la réparation face aux fonctions dans une monnaie commune.** Mettez les erreurs connues et les éléments de dette dans la même conversation de priorisation que les fonctions, exprimés en coût du retard et en délai de retour. Une correction qui supprime un incident hebdomadaire, et rend son effort en un trimestre, concourt sur ses mérites. Classer selon le bruit, l'ancienneté hiérarchique ou la date d'enregistrement donne de mauvais résultats (voir le sujet 4.4, Échecs de changement et reprises).

**8. Bouclez la boucle sur les décisions de report.** Pour chaque élément laissé ouvert consciemment, consignez qui a accepté le risque, la date de revue et le déclencheur qui le ferait monter, comme un deuxième incident ou un changement planifié dans le domaine. Passez en revue la liste des risques acceptés selon son propre rythme. Un élément reporté trois fois sans déclencheur est une décision de l'ignorer, et le registre devrait le dire.

### Garder les chiffres honnêtes

**9. Mettez la correction en production avant de clore l'enregistrement.** Une erreur connue reste ouverte jusqu'à ce que la correction permanente soit en production et que la récurrence ait été vérifiée sur une fenêtre énoncée. Clore à « fusionné » ou à « ticket terminé » flatte les chiffres d'âge et de variation nette et rouvre l'incident plus tard (voir le sujet 4.5, Métriques des versions et des déploiements). Suivez le taux de réouverture des erreurs connues comme un contrôle de qualité de la règle de clôture.

**10. Regardez la forme du registre, au-delà des totaux.** Un compte stable peut cacher une longue traîne de très vieux éléments, une part croissante d'éléments dans un service ou un registre maintenu petit en clôturant tout comme « ne sera pas corrigé ». Montrez sur une page la distribution des âges, la répartition par service et la liste des risques acceptés. Passez-la en revue avec les personnes qui détiennent les services, dans la même réunion qui planifie le travail du trimestre suivant.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Âge du backlog d'erreurs connues | Clore de vieux enregistrements comme « risque accepté » ou « ne sera pas corrigé » ; scinder un vieil enregistrement en nouveaux jeunes ; remettre l'horloge à zéro en réenregistrant | Compte et âge des risques acceptés rapportés sur la même page ; revue des clôtures par quelqu'un d'extérieur à l'équipe responsable ; filiation des enregistrements conservée |
| Couverture des contournements | Écrire un contournement vague pour satisfaire le champ ; compter un contournement qu'aucun agent n'a jamais essayé | Usage et taux d'échec des contournements dans les incidents liés ; test périodique d'un échantillon de contournements |
| Incidents liés à des erreurs connues ouvertes | Laisser des incidents non liés, ou les lier à une autre cause, pour que la part baisse | Part d'incidents non liés rapportée à côté ; revue par échantillon des incidents clos pour les liens manqués |
| Stock de dette | Ne pas enregistrer la dette, pour que le stock paraisse petit ; fusionner de nombreux éléments en un seul gros ; enregistrer des broutilles pour paraître diligent | Revue du registre au regard d'un échantillon de revues de code et d'analyses post-incident ; contrôles de taille et de précision des éléments |
| Intérêts de la dette | Sous-étiqueter le travail pour éviter l'examen, ou le sur-étiqueter pour gagner un budget de réparation ; lire le chiffre comme une note d'équipe | Audit par échantillon des éléments étiquetés et non étiquetés ; vue au niveau de l'équipe seulement, sans comparaison entre équipes ; intérêts lus avec les liens d'incidents |
| Part de capacité pour la dette | Étiqueter le travail ordinaire sur les fonctions comme réparation ; choisir des éléments cosmétiques faciles pour remplir la part | Contrôle de résultat : âge des plus anciens éléments à intérêts élevés et liens d'incidents en baisse ; revue de ce qui a été corrigé au regard du classement |
| Variation nette de la dette | Résoudre de nombreux minuscules éléments pour compenser quelques gros ; clore des éléments comme « ne sera pas corrigé » pour faire baisser le compte | Variation nette montrée par tranche de taille et par intérêts ; ligne « ne sera pas corrigé » rapportée ; contrôle de récurrence sur les éléments résolus |

Une lecture saine montre un registre visible, précis et qui se déplace dans une direction choisie par l'équipe. Les plus anciens éléments à intérêts élevés diminuent en nombre. Les incidents liés à des erreurs connues ouvertes sont en baisse, et la part non liée est petite. La part de capacité pour la dette est stable au niveau convenu au lieu de grimper après une crise et de disparaître ensuite. La liste des risques acceptés est courte et revue. Quand un seul chiffre paraît excellent et que les autres ne bougent pas, soupçonnez la définition avant de célébrer.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Un registre fusionné d'erreurs connues et de dette | Priorisation unique ; l'exploitation et la livraison voient les mêmes coûts | Exige un outillage partagé ou des liens ; la responsabilité entre deux fonctions doit être réglée |
| Une part permanente de capacité pour la réparation | Prévisible ; protège le travail de réparation de la pression des fonctions | Peut être dépensée sur des éléments de faible valeur si le classement est faible |
| Travail de réparation planifié seulement quand il gagne le débat de priorité | Souple ; répond à la priorité du moment | Les fonctions gagnent presque toujours ; le registre grossit jusqu'à une crise |
| Intérêts estimés à partir des incidents et du travail étiqueté | Relie la dette à un coût observable ; soutient le classement | Chiffres approximatifs ; dépend d'un étiquetage et de liens d'incidents honnêtes |
| Un effort de réparation dédié ou une « semaine de la dette » | Concentration et progrès visible | Épisodique ; le registre se remplit entre les événements ; interrompt les engagements planifiés |

Choisissez l'arrangement le plus léger qui garde en mouvement les plus anciens éléments à intérêts élevés. Une petite équipe peut tenir le registre sur un seul tableau avec une étiquette et une revue mensuelle. Les grandes organisations ont besoin de liens entre outils et d'une méthode de classement convenue. Le but est une décision délibérée sur chaque élément, non une liste vide.

## Questions à discuter avec votre équipe

**1. Quels trois éléments ouverts nous coûtent le plus chaque mois, et comment le savons-nous ?**
Demandez aux gens de nommer des candidats de mémoire, puis vérifiez-les au regard des liens d'incidents et du travail étiqueté. Comparez la liste retenue en mémoire avec la liste mesurée, et notez les écarts. Convenez de la façon dont les preuves du classement seront rassemblées désormais.

**2. Quand nous reportons une correction, qui décide, et quand regardons-nous de nouveau ?**
Parcourez les cinq derniers reports et demandez qui a accepté le risque et quelle date de revue a été fixée. Là où personne n'a décidé, l'élément a été négligé, non reporté. Convenez d'une règle selon laquelle chaque report porte un responsable, un motif et un déclencheur. Discutez de la façon dont la liste des risques acceptés sera revue et par qui.

**3. Quelle capacité devrions-nous réserver à la réparation, et qu'est-ce qui changerait la part ?**
Montrez la tendance du registre et la part de capacité actuelle pour la dette. Demandez à quoi l'équipe serait prête à renoncer pour la relever, et quelles preuves la laisseraient baisser. Consignez le nombre, le motif et la date de réexamen.

**4. Nos contournements sont-ils réels, et un nouvel agent pourrait-il les suivre ?**
Choisissez un contournement au hasard et demandez à quelqu'un qui ne l'a pas écrit de le suivre. Convenez d'une routine de test pour les contournements qui couvrent les erreurs au plus fort impact.

**5. Qu'est-ce qui compte comme corrigé, et combien de temps surveillons-nous avant de clore l'enregistrement ?**
Comparez les règles de clôture employées par l'exploitation, la livraison et le responsable de produit. Discutez d'une fenêtre de récurrence qui convienne au service, et de ce que l'équipe fera quand un élément clos se rouvre. Convenez d'une définition et écrivez-la dans le registre des métriques.

**6. Où nos chiffres de dette pourraient-ils nous raconter une histoire confortable ?**
Demandez les façons dont chaque chiffre pourrait être flatté : dette non enregistrée, éléments faciles corrigés d'abord, éléments clos comme ne sera pas corrigé. Regardez la part d'incidents non liés et la liste des risques acceptés. Choisissez un garde-fou à ajouter ce trimestre et nommez qui le vérifiera.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison voient la dette en premier, généralement en changeant du code. Elles gagnent à disposer d'un registre facile à alimenter et d'une part protégée de capacité, afin que le travail de réparation ne dépende pas de la victoire dans un débat à chaque conversation de planification. Elles devraient enregistrer les raccourcis quand elles les prennent, étiqueter le travail causé par des points faibles et éviter d'employer la dette comme étiquette pour tout travail qu'elles préféreraient ne pas faire (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux, pour les effets de la dette sur le délai de livraison).

### Équipes de service et d'exploitation

Les équipes d'exploitation voient les intérêts : incidents répétés, étapes manuelles, contournements fragiles et la charge d'astreinte qui s'ensuit. Elles détiennent les enregistrements d'erreurs connues et les documents de contournement, et elles ont les données d'incidents qui évaluent les intérêts. Elles devraient lier chaque incident à son erreur connue, tester les contournements et apporter à la conversation de planification des preuves classées plutôt qu'une liste de plaintes (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

### Direction et gouvernance

Les dirigeants décident de la capacité que reçoit le travail de réparation, et les incitations qu'ils fixent décident si le registre reste honnête. Ils devraient demander la distribution des âges, les chiffres d'intérêts et la liste des risques acceptés, non un score de dette unique. Lire le registre comme une note donnée à une équipe punit l'enregistrement et pousse la dette dans la clandestinité. Un forum de gouvernance devrait traiter l'acceptation du risque comme une décision avec un responsable et une date de revue.

### Clients et utilisateurs

Les clients ressentent la dette sous forme de pannes répétées et de contournements qu'ils doivent suivre. Là où un contournement touche des utilisateurs, publiez-le avec une note claire sur la date où une correction est attendue, et tenez la date ou expliquez le changement. Moins d'incidents répétés et un état honnête des problèmes connus bâtissent plus de confiance qu'une promesse d'absence de défauts (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional exploite un service de planification des patients, soutenu par une équipe produit et un groupe d'exploitation. Tous les chiffres de cet exemple sont illustratifs.

Le groupe d'exploitation tient 23 erreurs connues dans l'outil ITSM. L'équipe produit tient une liste séparée de 41 éléments de dette sur son tableau. Une revue trimestrielle constate que 9 des erreurs connues et 7 des éléments de dette décrivent les mêmes cinq causes. La plus ancienne erreur connue a 14 mois, l'âge médian des erreurs connues est de 5 mois et le 85e percentile est de 11 mois. La couverture des contournements est de 61 pour cent. Les incidents liés à des erreurs connues ouvertes représentent 18 pour cent des incidents du trimestre, et 22 pour cent des incidents ne sont pas liés ; la vraie part pourrait donc être plus élevée.

L'équipe fusionne les deux listes en un registre de 55 éléments distincts. Pour les dix éléments ayant le plus d'incidents liés, elle estime un effort de réparation en tranches et des intérêts mensuels en heures. Un élément ressort : une tâche nocturne de synchronisation des rendez-vous échoue silencieusement environ une fois par quinzaine et exige un redémarrage manuel par le personnel d'astreinte. Sa réparation est estimée à deux semaines. Ses intérêts, d'après les incidents liés et le travail étiqueté, sont d'environ 10 heures par mois, et chaque échec retarde les listes de consultations du matin. Le délai de retour est d'environ quatre mois, plus rapide que toute fonction alors dans le plan.

La décision, consignée dans le journal des décisions, est de réserver 15 pour cent de la capacité de l'équipe produit au travail de réparation, classé par intérêts par unité d'effort, et de corriger d'abord la tâche de synchronisation. Le chef de l'exploitation convient aussi de lier chaque incident à une erreur connue là où il en existe une et de tester les cinq contournements les plus employés.

Deux trimestres plus tard, l'âge médian des erreurs connues est de 4 mois et le 85e percentile de 9 mois. Les incidents liés à des erreurs connues ouvertes tombent à 11 pour cent. La part non liée tombe à 8 pour cent, ce qui donne à l'équipe plus de confiance dans le chiffre. Puis l'équipe attrape un risque de détournement. La ligne de variation nette de la dette montre 12 éléments résolus en un trimestre, mais 6 d'entre eux ont été clos comme ne sera pas corrigé, et deux de ceux-ci étaient les plus anciens éléments à intérêts élevés. Un relecteur extérieur à l'équipe lit les enregistrements et constate que les clôtures avaient été faites pour améliorer le chiffre d'âge. Les éléments sont rouverts, le motif de clôture devient un champ obligatoire avec un approbateur nommé, et les éléments à risque accepté apparaissent désormais sur la même page que la distribution des âges.

## Perspective sectorielle

**Startup.** La dette est généralement délibérée et souvent juste, car la rapidité vers un premier client compte le plus. Tenez une liste sur le tableau avec une étiquette, enregistrez les raccourcis au moment où vous les prenez et fixez une date de revue pour que « plus tard » ait un sens. Relevez la part de réparation quand les intérêts commencent à se voir dans les incidents.

**Petite entreprise.** Un seul administrateur ou une petite équipe porte souvent à la fois l'exploitation et la livraison ; les deux listes n'en font donc naturellement qu'une. Consignez les erreurs connues et leurs contournements dans un document partagé, et notez de quel fournisseur ou contrat dépend chaque élément. Un défaut détenu par un fournisseur est une erreur connue que vous ne pouvez pas corriger vous-même ; suivez donc la date d'engagement du fournisseur et votre contournement.

**Grande entreprise.** De nombreuses équipes, de nombreux services et de nombreux fournisseurs créent plusieurs listes concurrentes et plusieurs définitions de « terminé ». Réglez une structure de registre, une règle de clôture et une méthode de classement, et laissez les équipes ajouter des champs locaux avec une correspondance énoncée.

**Gouvernement et secteur public.** Les systèmes anciens, les longs cycles de marchés et les budgets fixes rendent certaines dettes coûteuses à rembourser et certaines décisions de remplacement lentes. Consignez les contraintes légales, de conservation et d'audit qui bloquent une correction, car elles expliquent le report. Montrez le registre comme une partie du rapport sur les risques, et planifiez la réparation dans le cycle budgétaire au lieu de la traiter comme un coût non planifié (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est de cesser de payer des intérêts que vous ne voyez pas. Les incidents répétés, les contournements manuels et les changements lents et risqués sont les coûts visibles, et ils sont normalement consignés comme des problèmes séparés dans des budgets séparés. Un registre fusionné les transforme en une seule comparaison entre le coût de la réparation et le coût du portage de la dette.

Le coût de la pratique a trois parties. La première est la mise en place : un registre, des liens entre l'outil ITSM et le gestionnaire de tickets, et une convention d'étiquetage. La deuxième est l'effort courant : quelques secondes par incident pour le lier, quelques secondes par élément de travail pour l'étiqueter et une revue mensuelle d'une heure ou deux par service. La troisième est la capacité de réparation elle-même, qui est le poste le plus grand et qui est un investissement délibéré, non un surcoût.

Le retour vient de schémas que vous pouvez mesurer vous-même. Comparez les incidents liés à une erreur connue avant et après sa correction, les heures de travail étiqueté sur les changements touchés avant et après, et les interruptions d'astreinte évitées. Ajoutez le coût d'indisponibilité si votre organisation l'estime déjà. N'empruntez pas de chiffre sectoriel pour le coût de la dette : la littérature de recherche sur le sujet est réelle, mais les chiffres dépendent du contexte, et vos propres données d'incidents et de temps sont une meilleure preuve. La recherche *Accelerate* relie la performance de livraison à la performance organisationnelle (voir le sujet 2.8, Métriques DORA), mais elle ne donne aucun prix pour votre registre. Pour le traitement plus large du coût et du retour, voir le sujet 7.7, Retour sur investissement et dossier d'affaires.

## Antimodèles et pièges

- **Deux listes qui ne se rencontrent jamais.** L'exploitation et la livraison plaident pour la même capacité avec des preuves différentes. Fusionnez les listes ou liez chaque cause partagée.
- **Un score de dette unique pour l'organisation.** Il cache où est le coût et invite à classer les équipes. Rapportez le registre par service, avec l'âge, les intérêts et la responsabilité.
- **La grande réécriture comme seule réparation.** Les grands nettoyages calent, et le registre se remplit pendant qu'ils se déroulent. Retirez les éléments par petites étapes, classées par délai de retour.
- **Zéro dette comme objectif.** Le poursuivre récompense les clôtures triviales et décourage l'enregistrement honnête. Visez un registre dont les plus anciens éléments à intérêts élevés bougent.
- **Clore les erreurs connues à « fusionné ».** La correction n'a pas atteint les utilisateurs, et l'incident revient. Closez à la mise en production, puis surveillez la récurrence sur une fenêtre énoncée.
- **Cacher le report dans « ne sera pas corrigé ».** Le chiffre d'âge s'améliore et le risque demeure. Comptez séparément le risque accepté, avec un responsable et une date de revue.
- **Traiter l'analyse statique comme la vérité.** Les scores reflètent la forme du code, non le coût. Employez-les pour trouver des candidats, puis confirmez avec les liens d'incidents et l'historique des changements.
- **Attribuer la dette aux auteurs.** Cela apprend aux gens à cacher les raccourcis et à éviter les composants difficiles. Gardez chaque mesure au niveau du service et de l'équipe (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Registre et définitions | Les erreurs connues et la dette vivent dans la tête des gens ou dans des notes éparses | L'exploitation et la livraison tiennent chacune une liste, avec des règles différentes | Un registre avec une définition écrite, un responsable et une règle de clôture pour chaque élément | Âge, risque accepté et variation nette revus au regard des définitions écrites | Définitions révisées avec les fournisseurs et les clients quand elles cessent d'éclairer les décisions |
| Mesure des intérêts | Aucun lien entre incidents et causes | Certains incidents liés à des erreurs connues à la main | Liens d'incidents obligatoires là où la cause est connue ; travail étiqueté au niveau de l'équipe | Intérêts et délai de retour estimés pour les principaux éléments et suivis dans le temps | Intérêts reliés aux résultats du service et partagés entre équipes et fournisseurs |
| Capacité et priorisation | La réparation se fait en cas de crise | Temps réservé de façon informelle par certaines équipes | Une part de capacité convenue et une méthode de classement commune | Part ajustée selon la tendance du registre et financée comme du travail planifié | Capacité de réparation coordonnée entre plateformes partagées et fournisseurs |
| Contournements et clôture | Contournements non documentés ou détenus par une seule personne | Documentés pour certaines erreurs, non testés | Contournements dans la base de connaissances, avec une règle de clôture à la mise en production | Usage, échec et récurrence après clôture des contournements mesurés | Contournements retirés automatiquement à mesure que les corrections sont mises en production, avec retour des utilisateurs |

## Liste de vérification

- [ ] Les erreurs connues et les éléments de dette sont dans un seul registre, ou liés élément par élément.
- [ ] Chaque élément a un responsable, une tranche de taille, un service et une date de revue.
- [ ] Les raccourcis délibérés sont enregistrés quand ils sont pris, avec un motif.
- [ ] Les incidents sont liés aux erreurs connues là où la cause est connue, et la part non liée est rapportée.
- [ ] Le travail causé par des points faibles est étiqueté au niveau de l'équipe, et l'étiquetage est audité par échantillon.
- [ ] Chacun des principaux éléments a une tranche d'effort de réparation et une estimation d'intérêts mensuels.
- [ ] Une part de capacité pour le travail de réparation est convenue, rapportée et revue chaque trimestre.
- [ ] Les erreurs connues sont closes à la mise en production de la correction, avec une fenêtre de récurrence énoncée.
- [ ] Les clôtures à risque accepté sont listées séparément, avec un approbateur et une date de revue.
- [ ] Les contournements des erreurs au plus fort impact sont testés selon un calendrier.
- [ ] La distribution des âges et la répartition par service sont montrées, avec les totaux.
- [ ] Aucune mesure de dette n'est employée pour comparer ou classer des individus.

## Prompts d'IA

**Fusionnez deux listes en un registre.**

```text
J'ai deux listes de réparations différées. La liste A vient de [operations tool
or source] et contient [number] erreurs connues. La liste B vient de [delivery
tracker or source] et contient [number] éléments de dette technique. Voici les
entrées : [paste entries with title, service, date registered, and a one-line
description]. Regroupez les entrées qui semblent décrire la même cause, proposez
une entrée unique du registre pour chaque groupe et signalez les entrées dont
l'appariement doit être confirmé par un humain. N'inventez ni causes, ni
services, ni dates. Énumérez vos hypothèses et les questions auxquelles je
devrais répondre avant de fusionner.
```

**Estimez des tranches d'effort et des intérêts mensuels pour les principaux éléments.**

```text
Pour l'élément du registre [item title] sur [service], j'ai ces preuves :
incidents liés [list with dates and durations], travail étiqueté [hours or item
counts] et une estimation de réparation de l'équipe de [estimate]. Aidez-moi à
écrire des tranches grossières d'effort et d'intérêts mensuels, un simple délai
de retour et le niveau de confiance de chaque chiffre. Montrez votre arithmétique.
N'inventez ni coûts, ni valeurs de référence, ni chiffres sectoriels. Si un
chiffre manque, demandez-le-moi. Énumérez vos hypothèses.
```

**Passez en revue les risques de clôture et de détournement.**

```text
Voici les définitions et les données du dernier trimestre de notre registre
d'erreurs connues et de dette : [definitions of age, workaround coverage, debt
net change, and the closure rule] et [summary of items closed, with closure
reasons]. Identifiez les façons dont ces mesures pourraient être flattées, les
preuves dans les données qui suggèrent que cela s'est produit et un garde-fou
pour chacune. Traitez cela comme une revue de l'instrument, non des personnes.
N'accusez personne et n'inventez pas de données. Énumérez vos hypothèses.
```

**Préparez une conversation de priorisation avec le responsable de produit.**

```text
Je dois proposer comment répartir la capacité entre fonctions et travail de
réparation pour [team] le trimestre prochain. Le registre montre [summary of
ledger: counts, age distribution, top items with effort and interest bands]. Le
plan des fonctions contient [summary of planned features and their expected
value, as supplied by the product owner]. Rédigez une proposition d'une page qui
compare des options pour la part de réparation, énonce le coût du retard des
principaux éléments de réparation et nomme les arbitrages. N'inventez ni
estimations de valeur ni parts de référence. Énumérez vos hypothèses et les
décisions que le responsable de produit doit prendre.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique apparentée, comme la récurrence ou l'échec des changements, et le garde-fou qui doit se trouver à côté.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique modifiée nomme ses horloges, son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Les erreurs connues et la dette technique sont deux vues d'un même registre de réparations différées ; gardez-les donc ensemble ou liées.
- Mesurez les intérêts que chaque élément coûte chaque mois, en incidents, contournements et changements ralentis, et classez la réparation par délai de retour.
- Faites de chaque report une décision avec un responsable, un motif et une date de revue, et rapportez séparément le risque accepté.
- Réservez une part convenue de capacité au travail de réparation, et rapportez-la à côté du travail planifié.
- Closez une erreur connue à la mise en production de la correction, puis surveillez la récurrence avant de vous fier au résultat.
- Gardez chaque mesure au niveau du service et de l'équipe, et employez des garde-fous pour qu'un meilleur chiffre signifie un meilleur système.

## Références et lectures complémentaires

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
