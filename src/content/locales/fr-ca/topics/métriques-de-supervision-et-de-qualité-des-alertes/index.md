# Métriques de supervision et de qualité des alertes

**Une alerte est une demande d'attention adressée à une personne ; mesurez donc la supervision à la fréquence à laquelle cette demande valait la peine d'être faite, à la part des vrais ennuis qu'elle a attrapée et à ce qu'elle a coûté en sommeil et en confiance.**

## Résumé et motivation

La supervision est la collecte, le traitement et l'affichage de données en temps réel sur un système. La [supervision de système](https://en.wikipedia.org/wiki/System_monitoring) répond à la question « le service fonctionne-t-il comme les utilisateurs en ont besoin ? » Une alerte est le point où ces données demandent à un humain de faire quelque chose. La plupart des équipes mesurent mal ou pas du tout la première activité, et ne mesurent la seconde que par les plaintes. Ce sujet vous donne un petit ensemble de mesures pour les deux : la supervision voit-elle les pannes qui comptent, et les alertes qu'elle lève méritent-elles l'attention qu'elles exigent.

Quelques termes d'abord. Dans le vocabulaire d'ITIL 4, un événement est un changement d'état qui a une signification pour la gestion d'un service, et la gestion des événements est la pratique qui détecte les événements, décide lesquels comptent et choisit la réponse. Une alerte est une notification à un humain, remise sous forme d'appel, de message ou de ticket. Un appel est une alerte qui interrompt quelqu'un immédiatement. Un faux positif est une alerte qui s'est déclenchée alors que rien ne demandait d'attention, et un faux négatif est une panne qu'aucune alerte n'a signalée ; les deux termes viennent du langage des [faux positifs et faux négatifs](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Une alerte actionnable est une alerte pour laquelle une personne avait une action utile à mener, et l'a menée ou a délibérément choisi de ne pas le faire pour un motif consigné.

Les deux côtés de la supervision tirent en sens contraire. Ajouter des alertes après chaque incident bâtit un mur de bruit ; les réduire pour le calmer risque le silence pendant la panne qui compte. Le langage de la [précision et du rappel](https://en.wikipedia.org/wiki/Precision_and_recall) s'y prête bien. La précision demande quelle part des alertes levées valait la peine d'être levée. Le rappel demande quelle part des vrais problèmes les alertes ont attrapée. La qualité des alertes est l'équilibre entre les deux, et une métrique qui n'en surveille qu'une invite l'équipe à sacrifier l'autre. Le [rapport signal sur bruit](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) saisit la même tension.

Le coût humain est la raison pour laquelle cela a sa place dans un livre de métriques de service. La [fatigue d'alarme](https://en.wikipedia.org/wiki/Alarm_fatigue) est la tendance bien documentée des personnes exposées à de nombreuses alarmes, dont la plupart sans importance, à se désensibiliser et à être lentes à réagir à celles qui comptent. Elle a d'abord été étudiée en milieu clinique et s'applique à toute rotation d'[astreinte](https://en.wikipedia.org/wiki/On-call) appelée trop souvent par des alertes qui ne mènent nulle part. Des intervenants fatigués manquent de vrais incidents et finissent par quitter la rotation.

Les visions diffèrent entre les deux traditions que ce livre réunit. ITIL 4 place ce travail dans la pratique de supervision et de gestion des événements, avec des liens vers la gestion des incidents et la gestion des niveaux de service. Son souci est que les événements soient détectés, classés et acheminés afin que les incidents soient trouvés tôt et traités de façon cohérente. L'[ingénierie de la fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) l'aborde par l'autre bout : le livre *Site Reliability Engineering* de Google soutient que les appels devraient être urgents, importants, actionnables et réels, et que tout le reste relève d'un ticket ou d'un tableau de bord. Les équipes agiles le rencontrent comme un accord de travail : qui est réveillé, pour quoi, et qui corrige une mauvaise alerte. Les métriques ci-dessous empruntent aux trois et gardent une seule règle : une métrique décrit une rotation, un service ou une règle d'alerte, jamais un individu.

Ce sujet ne répète pas ses voisins. Les temps des incidents relèvent du sujet 3.3, Temps de réponse et de résolution des incidents, les pires incidents du sujet 3.4, Métriques des incidents majeurs, les objectifs et budgets d'erreur du sujet 5.2, SLI, SLO et budgets d'erreur, et la charge humaine du sujet 5.7, Métriques de tâches répétitives et d'astreinte. Ici, le sujet est la qualité du signal qui déclenche tout cela. L'instrumentation est couverte au sujet 1.5, Sources de données et instrumentation.

## Principes clés

- **Appeler pour les symptômes que les utilisateurs ressentent ; mettre le reste en ticket ou sur un tableau de bord.** Une alerte sur ce que les utilisateurs vivent (erreurs, lenteur, indisponibilité) reste utile quand le système change. Une alerte sur une cause (un disque plein, un processeur occupé) n'est utile que si elle prédit un symptôme et qu'une personne peut agir avant qu'il arrive.
- **Chaque alerte doit mener à une action.** Si la bonne réponse à une alerte est de ne rien faire, l'alerte devrait être changée, rétrogradée en ticket ou supprimée. Mesurez la part de celles qui mènent à une action, et traitez le reste comme des défauts de la supervision.
- **Mesurer à la fois la précision et le rappel.** Ne compter que le bruit récompense le silence, et ne compter que la couverture récompense le volume. Les deux ensemble décrivent la qualité, et chacun sert de garde-fou à l'autre.
- **Traiter chaque règle d'alerte comme un produit avec un responsable.** Une règle a un but, un seuil, un guide d'exploitation et une date de revue. Les règles sans responsable s'accumulent, et le bruit qu'elles produisent n'appartient à personne.
- **Rapporter des rotations et des services, jamais des personnes.** La charge d'alertes est une propriété de la conception du système et de la rotation. Nommer des individus transforme un problème de conception en problème de blâme et cache la vraie correction.

## Définitions des métriques

Les métriques ci-dessous sont choisies comme un ensemble. Le volume seul n'a aucun sens, l'actionnabilité dit si le volume est un problème, et la couverture et le temps de détection disent ce que le calme cache. Toutes sont calculées par service ou par rotation, et toutes emploient l'enregistrement d'alerte des outils de supervision et d'appel joint aux enregistrements d'incidents et de tickets.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume d'alertes | Nombre d'alertes qui ont notifié un humain, réparti en appels et en tickets | Nombre de notifications distinctes remises à une rotation ou une file dans la période ; les répétitions d'une même alerte ouverte sont groupées en une ; les alertes traitées entièrement par automatisation sans notification humaine sont exclues ; rapportez par rotation et par semaine, et la part hors des heures de travail séparément | alertes par rotation-semaine | Outil d'appel et d'acheminement des alertes | Supervision et gestion des événements | Accord de travail de l'équipe sur l'astreinte | Hebdomadaire |
| Taux d'alertes actionnables | Part des alertes après lesquelles une personne a mené une action utile | Alertes avec une action consignée (correction, atténuation, escalade ou changement de la règle d'alerte) / alertes revues dans la période ; les alertes auto-résolues avant tout accusé de réception sont comptées comme non actionnables ; les alertes non revues sont rapportées comme un compte séparé, non écartées | pourcentage | Enregistrement d'alerte joint à l'étiquette de revue, au ticket ou à l'incident | Supervision et gestion des événements ; gestion des incidents | Action d'amélioration de l'équipe sur l'exploitation | Revue hebdomadaire, tendance mensuelle |
| Taux de faux positifs | Part des alertes qui se sont déclenchées alors qu'aucun problème n'existait | Alertes étiquetées faux positif en revue / alertes revues dans la période ; « faux positif » signifie que la condition n'était pas une défaillance et que personne ne voudrait en être informé ; un vrai problème trop mineur pour agir n'est pas un faux positif | pourcentage | Étiquettes de revue des alertes | Supervision et gestion des événements | Revue du bruit en rétrospective | Mensuelle |
| Couverture de détection | Part des services concernés qui ont au moins une alerte testée sur un symptôme visible des utilisateurs | Services avec une alerte de symptôme qui a été exercée par un test ou un événement réel dans les 12 derniers mois / services du périmètre du catalogue de services ; la liste des services concernés est fixée au début de la période | pourcentage | Catalogue de services, inventaire des règles d'alerte, enregistrements de tests | Gestion de la configuration des services ; supervision et gestion des événements | Définition de terminé pour un nouveau service | Trimestrielle |
| Part de détection supervisée | Part des incidents que la supervision a détectés avant qu'un utilisateur ou un collègue les signale | Incidents dont le premier signal était une alerte / incidents de la période ; l'horloge est l'heure d'ouverture de l'incident, et les incidents sans premier signal consigné sont rapportés comme inconnus, non comme détectés | pourcentage | Enregistrement d'incident avec champ de premier signal, chronologie des alertes | Gestion des incidents | Revue d'incident (apprentissage post-incident) | Mensuelle |
| Délai de détection (TTD) | Temps écoulé entre le début de l'impact sur les utilisateurs et la première alerte qui a notifié un humain | Heure de la première alerte notifiant un humain moins heure de début d'impact, où le début d'impact est le moment le plus précoce où l'indicateur de niveau de service a franchi son seuil, tel qu'établi dans la revue d'incident ; rapportez la médiane et le 95e percentile ; les incidents sans alerte sont exclus et comptés séparément | minutes | Revue d'incident, chronologie des alertes, historique de l'indicateur de niveau de service | Gestion des incidents ; supervision et gestion des événements | Revue post-incident | Mensuelle, par incident |
| Concentration des alertes | Part du volume d'alertes produite par les quelques règles les plus bruyantes | Alertes des cinq règles ayant le plus d'alertes / toutes les alertes de la période ; la même alerte groupée une fois ; le nombre de cinq règles est une convention qu'une équipe peut changer si elle dit pourquoi | pourcentage | Inventaire des règles d'alerte et enregistrement des appels | Amélioration continue ; supervision et gestion des événements | Backlog d'amélioration de rétrospective | Mensuelle |
| Actualité des règles d'alerte | Part des règles d'appel qui ont un responsable, un lien vers un guide d'exploitation et une revue dans l'intervalle convenu | Règles d'appel qui remplissent les trois conditions / toutes les règles d'appel ; les règles désactivées dans la période sont exclues | pourcentage | Inventaire des règles d'alerte | Gestion des connaissances ; supervision et gestion des événements | Accord de travail sur la préparation opérationnelle | Trimestrielle |

Le volume d'alertes a besoin de contexte ; lisez-le donc à côté du taux d'alertes actionnables. Le délai de détection emploie le début de l'impact sur les utilisateurs, non le ticket, car l'horloge du ticket démarre après la détection ; le début d'impact est une estimation tirée de la revue d'incident et devrait être étiqueté comme telle. Le taux de faux positifs et le taux d'alertes actionnables ne sont pas complémentaires, car une alerte peut être vraie et ne pas valoir le temps d'une personne.

## Recommandations

### Décider de ce qui mérite un appel

**1. Écrivez une politique d'appel et gardez-la courte.** Énoncez en un paragraphe ce qui mérite un appel (un symptôme que les utilisateurs ressentent maintenant ou ressentiront bientôt, sur lequel une personne peut agir) et ce qui n'en mérite pas. Tout le reste va dans une file de tickets ou sur un tableau de bord. Le chapitre du livre SRE de Google sur la supervision des systèmes distribués est un bon point de départ (voir le sujet 5.2, SLI, SLO et budgets d'erreur).

**2. Alertez sur les symptômes, et gardez les causes pour le diagnostic.** Un appel pour « taux d'erreur au-dessus du seuil convenu » est un appel au sujet des utilisateurs. Un appel pour « le processeur est élevé » est un appel au sujet d'une conjecture. Gardez les signaux de niveau cause sur des tableaux de bord que l'intervenant consultera une fois l'alerte de symptôme déclenchée, et ne promouvez l'un d'eux en appel que s'il prédit de façon fiable un symptôme avec assez de préavis pour agir.

**3. Reliez les seuils d'appel à l'objectif de niveau de service.** Là où un service a un [objectif de niveau de service (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), alertez sur le rythme auquel le budget d'erreur est consommé plutôt que sur des seuils bruts. Le chapitre du SRE Workbook sur l'alerte sur les SLO décrit les alertes sur le taux de consommation et les arbitrages entre précision, rappel, délai de détection et temps de remise à zéro. Cette approche appelle sur ce qui menace l'objectif et reste silencieuse sur les brefs soubresauts qui ne le menacent pas.

### Passer chaque alerte en revue selon un rythme

**4. Étiquetez chaque alerte lors d'une courte revue régulière.** Réservez quinze minutes chaque semaine à chaque rotation pour regarder ce qui s'est déclenché. Pour chaque alerte, consignez une étiquette : actionnable, faux positif, réelle mais ne valant pas un appel, ou doublon. Les étiquettes sont les données du taux d'alertes actionnables et du taux de faux positifs, et la revue est l'endroit où les règles bruyantes sont corrigées le lendemain plutôt que le trimestre suivant.

**5. Faites produire un changement à la revue.** Chaque semaine, choisissez au moins une règle à régler, rétrograder, fusionner ou supprimer, et consignez le changement dans le backlog de l'équipe comme du travail ordinaire.

**6. Supprimez sans crainte.** Les équipes gardent des alertes parce que supprimer paraît risqué et que personne ne se souvient pourquoi elles existent. Exigez que chaque règle d'appel porte un but et un responsable, et convenez qu'une règle qui n'a jamais mené à une action dans une période énoncée est retirée ou rétrogradée, le changement étant consigné pour pouvoir être inversé. La métrique d'actualité des règles rend la discipline visible.

### Mesurer ce que la supervision manque

**7. Suivez la part des incidents que les utilisateurs ont trouvés en premier.** Après chaque incident, consignez comment il a d'abord été remarqué : une alerte, un collègue, un client, un ticket du support ou un contrôle de routine. La part trouvée par la supervision est la mesure pratique la plus proche du rappel. Elle n'est pas complète, car les incidents que personne n'a remarqués n'entrent jamais dans l'échantillon ; associez-la donc à des tests périodiques des alertes elles-mêmes.

**8. Estimez honnêtement le délai de détection.** Établissez le début de l'impact sur les utilisateurs dans la revue post-incident à partir de l'historique de l'indicateur de niveau de service, non du moment où quelqu'un a saisi le ticket. Rapportez la médiane et un percentile élevé, et montrez les incidents qui n'ont eu aucune alerte comme un compte séparé. Une moyenne unique cache à la fois le cas typique et la mauvaise queue (voir le sujet 1.6, Culture statistique pour les métriques de service, et le sujet 3.3, Temps de réponse et de résolution des incidents).

**9. Testez les alertes dont vous dépendez.** La couverture de détection n'est crédible que si l'on a vu l'alerte fonctionner. Incluez dans les exercices de simulation ou les répétitions de mise en production un contrôle qui provoque délibérément un symptôme et confirme que la bonne alerte se déclenche, atteint la bonne rotation et renvoie à un guide d'exploitation utilisable. Une alerte jamais exercée est un espoir, non un contrôle (voir le sujet 5.6, Métriques de continuité de service).

### Garder sain le chemin du signal

**10. Supervisez la supervision.** Une défaillance silencieuse du système de supervision ressemble exactement à un service en bonne santé. Ajoutez un contrôle de battement de cœur qui appelle si la chaîne d'alertes cesse de livrer, et consignez la fréquence à laquelle la chaîne elle-même échoue.

**11. Groupez, dédupliquez et liez avant de compter.** Groupez les alertes apparentées en une, supprimez les répétitions d'une alerte déjà ouverte et acheminez chacune vers la rotation responsable. Liez chaque alerte à son guide d'exploitation et à l'incident ou au ticket qu'elle a créé, car cette jointure est ce qui permet de calculer le taux d'alertes actionnables et la part de détection supervisée sans comptage manuel (voir le sujet 1.5, Sources de données et instrumentation).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Volume d'alertes | Relever les seuils, ajouter de longs délais ou déplacer des alertes des appels vers une file silencieuse pour que le compte baisse alors que les problèmes passent inaperçus ; scinder ou fusionner des alertes pour changer le compte | Part de détection supervisée et délai de détection ; règle selon laquelle chaque rétrogradation est consignée avec son motif et revue après un trimestre |
| Taux d'alertes actionnables | Étiqueter des alertes comme actionnables après coup, ou mener une action triviale (un commentaire, un accusé de réception) pour se qualifier ; laisser des alertes bruyantes non revues pour qu'elles n'entrent jamais dans le dénominateur | Compte des alertes non revues montré à côté du taux ; contrôle par échantillon par quelqu'un d'extérieur à la rotation ; définition écrite d'« action utile » |
| Taux de faux positifs | Définir les faux positifs étroitement pour que les alertes « réelles mais inutiles » comptent comme vraies ; clore des alertes bruyantes sans étiquette | Taux d'alertes actionnables et étiquette « réelle mais ne valant pas un appel » suivis séparément ; échantillonnage périodique des alertes closes |
| Couverture de détection | Ajouter une alerte triviale (un ping) à chaque service pour revendiquer la couverture ; compter des alertes jamais testées | L'exigence que l'alerte surveille un symptôme visible des utilisateurs et ait été exercée dans les 12 derniers mois ; part de détection supervisée |
| Part de détection supervisée | Consigner chaque incident comme « détecté par la supervision » même quand un utilisateur l'a signalé en premier ; créer une alerte après coup puis la citer ; laisser vide le champ de premier signal pour éviter un mauvais chiffre | Compte des inconnus montré à côté de la part ; preuve du premier signal tirée de la chronologie des alertes, non de la mémoire ; incidents signalés par les clients liés depuis l'enregistrement du support |
| Délai de détection (TTD) | Déclarer le début d'impact plus tard qu'il n'a été ; exclure les incidents sans alerte ; rapporter la moyenne pour cacher la queue | Début d'impact tiré de l'historique de l'indicateur de niveau de service ; incidents sans alerte comptés et montrés ; médiane et 95e percentile rapportés ensemble |
| Concentration des alertes | Scinder une règle bruyante en plusieurs pour qu'aucune ne figure parmi les cinq premières ; renommer des règles | Rapporter la concentration par défaillance sous-jacente ou par service autant que par règle ; suivre le volume total et le taux d'alertes actionnables à côté |
| Actualité des règles d'alerte | Ajouter des responsables fictifs, des liens vides vers des guides d'exploitation ou une revue de pure forme pour remplir la condition | Contrôle par échantillon que le lien du guide d'exploitation fonctionne et a servi lors d'une vraie réponse ; pratique de tester le guide d'exploitation dans les exercices de simulation |

Une lecture saine montre plusieurs choses ensemble. Le volume d'alertes par rotation est stable ou en baisse et se situe à un niveau que l'équipe a choisi comme soutenable. Le taux d'alertes actionnables monte sur plusieurs mois à mesure que les règles les plus bruyantes sont réglées. La part de détection supervisée est élevée et le délai de détection est court et ne s'allonge pas quand le volume baisse, ce qui prouve que le calme a été mérité et non acheté. La couverture de détection croît parce que les services sont testés, non parce que des alertes triviales ont été ajoutées. Si le volume baisse alors que la part de détection ou le délai de détection empire, l'équipe a échangé du rappel contre de la paix, et les garde-fous sont ce qui le révèle.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Peu d'appels, fondés sur les symptômes | Nuits calmes, grande confiance dans chaque appel, facile à tenir à jour | Risque de détection tardive des problèmes qui s'installent lentement ; exige de bonnes habitudes de tickets et de tableaux de bord pour le reste |
| Beaucoup d'alertes sensibles | Avertissement précoce des ennuis de niveau cause ; moins d'incidents manqués | Fatigue d'alarme, accusé de réception plus lent et départs des rotations d'astreinte |
| Alertes sur le taux de consommation du SLO | Appels liés à ce qui menace l'objectif ; moins de soubresauts | Exigent de bons indicateurs et un objectif convenu ; demandent du réglage pour équilibrer délai de détection et précision |
| Revue hebdomadaire des alertes | Retour rapide ; règles bruyantes corrigées vite | Coûte du temps chaque semaine ; devient du théâtre si aucun changement ne suit |
| Étiquetage par des humains | Capture un jugement qu'aucun outil n'a | Subjectif ; les étiquettes dérivent entre relecteurs et rotations si les définitions ne sont pas écrites |
| Suppression et groupement automatisés | Réduit le bruit à grande échelle ; réduit les appels répétés | Peut cacher de vrais signaux si les règles sont fausses ; exige sa propre supervision et sa propre revue |

Chaque choix échange de la précision contre du rappel, et l'échange devrait être fait à dessein et écrit par service, car c'est le contexte qui permet à quiconque de lire équitablement les chiffres. Un service dont la défaillance manquée a de graves conséquences peut accepter un taux d'alertes actionnables plus bas pour un avertissement plus précoce, avec une couche de tri qui envoie les alertes supplémentaires vers une file de tickets la nuit.

## Questions à discuter avec votre équipe

**1. Pour quoi voudrions-nous être réveillés, et lesquels des appels du mois dernier répondaient à cette norme ?** Écrivez la politique d'appel en une ou deux phrases, puis prenez les appels du mois dernier et testez chacun au regard d'elle. L'exercice est plus précieux que le pourcentage qu'il produit, car les désaccords révèlent où les attentes de l'équipe diffèrent. Capturez les appels inutiles comme candidats à la rétrogradation.

**2. Si la règle d'alerte la plus bruyante disparaissait demain, que perdrions-nous ?** Posez la question pour chacune des cinq règles de plus fort volume. Souvent, personne ne peut nommer une panne précise que la règle ait jamais attrapée, et c'est le signe qu'elle peut être réglée ou retirée. Là où quelqu'un le peut, demandez si la panne déclencherait aussi une alerte de symptôme.

**3. Comment découvrons-nous ce que la supervision a manqué ?** Regardez les derniers incidents et demandez qui a remarqué en premier et combien de temps l'impact a duré avant cela. La réponse vous donne la part de détection supervisée et un délai de détection approximatif sans nouvel outillage. Discutez de quel signal aurait attrapé chacun plus tôt.

**4. Notre charge d'astreinte est-elle soutenable, et comment le saurions-nous ?** Convenez de ce que soutenable veut dire pour une rotation, comme une limite d'appels hors des heures de travail par semaine, et passez en revue la tendance par rotation, non par personne. Si la charge dépasse le niveau convenu, traitez-la comme un défaut du service et planifiez du travail pour la réduire. Gardez les mesures cohérentes avec le sujet 5.7, Métriques de tâches répétitives et d'astreinte.

**5. Lesquelles de nos alertes n'avons-nous jamais testées, et comment pourrions-nous les tester en sécurité ?** Listez les services qui dépendent d'une seule alerte de symptôme et demandez si quelqu'un l'a vue se déclencher pour de vrai ou lors d'une répétition. Planifiez un test et vérifiez le chemin complet : détection, acheminement, notification, guide d'exploitation. Demandez si une chaîne d'alertes défaillante serait seulement visible.

**6. Comment ces chiffres pourraient-ils être détournés ici, et que remarquerions-nous ?** Demandez à l'équipe de décrire, honnêtement, comment elle pourrait faire paraître chaque chiffre meilleur sans rien améliorer. Convenez ensuite du garde-fou qui le montrerait et de qui le regarde. Nommer les astuces à l'avance les rend moins tentantes (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Quatre perspectives

### Équipes produit et livraison

Les équipes qui construisent et exploitent un service décident de ce qu'il rapporte sur lui-même ; la qualité des alertes commence donc dans la définition de terminé. Une nouvelle fonction qui part avec son propre indicateur et sa propre alerte testés évite une supervision boulonnée après le premier incident. Traitez le réglage des alertes comme du travail ordinaire du backlog.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent le téléavertisseur et ressentent le coût les premières ; elles détiennent donc le rythme de revue, l'étiquetage et le battement de cœur de la chaîne. Quand une alerte est fausse, la correction appartient au responsable de la règle, non à celui qui a reçu l'appel.

### Direction et gouvernance

Les dirigeants peuvent demander des chiffres de détection et d'actionnabilité par service, financer le temps de réglage et résister à un objectif sur le volume d'alertes qui récompense le silence. Un volume en baisse n'est une bonne nouvelle que si la part de détection et le délai de détection tiennent. Les limites d'astreinte soutenables sont une décision de dotation et de conception, non une décision de motivation.

### Clients et utilisateurs

Les clients ne voient jamais une alerte ; ils voient si le service est tombé en panne et combien de temps il a fallu pour le réparer. Une bonne supervision se voit dans des incidents corrigés avant qu'ils les remarquent, et dans moins de cas où un client signale en premier. Là où l'organisation emploie des mesures d'expérience (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA), la part des incidents signalés d'abord par les utilisateurs est un indicateur direct de l'écart d'expérience.

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite une plateforme de commandes avec quatre équipes produit et une équipe de plateforme qui soutient la rotation d'astreinte. Tous les chiffres de cet exemple sont illustratifs. Sur quatre semaines (illustratif), la rotation a reçu 240 appels, dont 70 entre 22 h et 7 h. L'équipe passe chaque appel en revue avec quatre étiquettes : actionnable, faux positif, réelle mais ne valant pas un appel, et doublon.

La revue montre un taux d'alertes actionnables de 31 pour cent (illustratif) et un taux de faux positifs de 22 pour cent (illustratif). Cinq règles ont produit 58 pour cent des appels (illustratif), et la plus grosse était un seuil de disque sur un serveur de traitement par lots qui se rétablissait toujours seul. La part de détection supervisée du trimestre précédent était de 62 pour cent (illustratif), et le délai de détection médian de 14 minutes (illustratif) avec un 95e percentile de 51 minutes (illustratif).

L'équipe rétrograde trois règles bruyantes vers une file de tickets, fusionne les doublons pour qu'une panne produise un appel, remplace l'alerte sur le compte brut d'erreurs au paiement par une alerte sur le taux de consommation du budget d'erreur (voir le sujet 5.2, SLI, SLO et budgets d'erreur) et ajoute une alerte de symptôme pour les courriels de confirmation de commande, une lacune derrière deux incidents signalés par des clients. Chaque changement est un élément de backlog avec un responsable. Quatre semaines plus tard, les appels tombent à 96 (illustratif) et le taux d'alertes actionnables monte à 64 pour cent (illustratif), tandis que la part de détection monte à 71 pour cent (illustratif) et que le délai de détection médian tient à 14 minutes. Le calme semble mérité.

Le risque de détournement apparaît le troisième mois. Un nouveau responsable fixe un objectif informel de moins de 60 appels par quatre semaines, et une rotation l'atteint en allongeant le délai de l'alerte d'erreurs au paiement. Sa part de détection tombe à 55 pour cent (illustratif) et son 95e percentile du délai de détection monte à 80 minutes (illustratif). Comme les garde-fous se tiennent à côté du volume, la revue l'attrape. L'équipe retire l'objectif de volume, rétablit l'alerte et consigne le cas dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Perspective sectorielle

**Startup.** Avec une poignée d'ingénieurs tous d'astreinte, la priorité est une courte politique d'appel et quelques alertes de symptôme sur les chemins qui rapportent de l'argent. Un regard de dix minutes le lundi sur ce qui a réveillé les gens suffit. Le principal risque est l'absence totale d'alertes, de sorte que les clients sont la supervision ; comptez à quelle fréquence un client vous l'a dit en premier.

**Petite entreprise.** Les petites organisations s'appuient souvent sur la supervision d'un fournisseur. Les mesures utiles sont la couverture de détection des quelques systèmes qui arrêtent l'entreprise et la part des incidents trouvés par les utilisateurs. Demandez aux fournisseurs les données d'alertes auxquelles votre contrat donne droit.

**Grande entreprise.** Les grandes organisations ont de nombreux outils et rotations, et chaque équipe peut définir « actionnable » différemment. Standardisez les définitions et les étiquettes, passez en revue au niveau de l'équipe et agrégez par service plutôt que par outil. Les plateformes de corrélation d'événements réduisent le volume à grande échelle mais exigent leurs propres contrôles de rappel.

**Gouvernement et secteur public.** Certains services fonctionnent aux heures de bureau et d'autres, comme les systèmes d'urgence ou de prestations, fonctionnent en continu. La couverture de détection et les alertes testées comptent le plus là où la défaillance porte des conséquences légales ou de sécurité, et les enregistrements de tests peuvent soutenir l'audit. Rapportez la couverture et la détection aux organes de contrôle, non les comptes bruts d'alertes, faciles à mal lire (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les raisons d'investir sont pratiques. Une meilleure détection raccourcit le temps pendant lequel les utilisateurs sont touchés. Moins d'appels inutiles protègent le sommeil, réduisent les départs de la rotation et gardent l'attention pour les alertes qui comptent. Le coût d'une mauvaise qualité d'alertes est difficile à voir, car il est réparti entre sommeil interrompu, réponses lentes et départs d'ingénieurs expérimentés.

Le coût de collecte de ces métriques est faible si les outils d'alertes, d'appel et d'incidents peuvent être joints, et modéré si les étiquettes sont ajoutées à la main. Les principaux coûts sont le temps de revue hebdomadaire, le travail de réglage et de suppression, et les tests de détection occasionnels. Élaguer les règles inutilisées réduit aussi les coûts de licence et de stockage de la supervision, et le coût total de possession devrait inclure le temps des personnes.

Le retour apparaît en quelques mois sous forme de rotations plus calmes, d'une part de détection supervisée en hausse et d'un délai de détection qui ne s'aggrave pas. Pour le traduire en argent, comparez le coût des heures d'incident et du roulement de la rotation avec le coût de la revue, avec vos propres chiffres. N'employez pas de moyennes sectorielles à moins de pouvoir citer une source vérifiée.

## Antimodèles et pièges

- **Fixer un objectif sur le volume d'alertes.** Un objectif sur le compte récompense le silence et invite à cacher des alertes. Fixez des objectifs sur le taux d'alertes actionnables et la part de détection, et employez le volume comme un chiffre de contexte avec une limite de soutenabilité choisie par l'équipe.
- **Alerter sur chaque cause.** Des dizaines d'appels de niveau cause produisent du bruit et manquent quand même le symptôme auquel personne n'avait pensé. Alertez plutôt sur les symptômes visibles des utilisateurs.
- **Ajouter une alerte après chaque incident sans jamais en retirer.** Associez chaque nouvelle alerte à une revue de celles qu'elle rend redondantes.
- **Compter les alertes sans les étiqueter.** Un compte sans jugement d'utilité ne peut pas distinguer une rotation bruyante d'une rotation occupée. Étiquetez un échantillon chaque semaine, même s'il ne reste que quelques minutes.
- **Traiter la couverture comme un compte d'alertes.** Un service avec cinquante alertes de cause et aucune alerte de symptôme est mal couvert. Définissez la couverture comme une détection de symptôme testée.
- **Classer les personnes selon les appels traités ou acquittés.** Cela punit les membres de la rotation qui prennent les quarts difficiles et encourage à éviter le téléavertisseur. Rapportez par rotation et par service, et cherchez des corrections de conception.
- **Ne jamais tester le chemin des alertes.** Une alerte dont on n'a pas vu le fonctionnement est une hypothèse. Incluez des tests d'alertes dans les exercices de simulation et supervisez la chaîne elle-même.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Politique d'appel et responsabilité des règles | Alertes ajoutées ad hoc ; personne ne sait pourquoi beaucoup existent | Certaines équipes ont une politique et des responsables pour leurs règles | Une courte politique d'appel ; chaque règle d'appel a un responsable et un guide d'exploitation | Actualité des règles suivie et revue ; règles inutilisées retirées selon un calendrier | Politique et responsabilité adaptées entre équipes et fournisseurs à mesure que les services changent |
| Mesure de la qualité des alertes | Plaintes sur le bruit ; aucun compte | Volume compté par certaines équipes ; pas d'étiquetage | Revue hebdomadaire avec étiquettes communes ; taux d'alertes actionnables et de faux positifs rapportés par service | Taux suivis dans le temps et associés aux mesures de détection ; amélioration financée | Qualité reliée entre services et fournisseurs ; définitions révisées quand elles cessent d'éclairer les décisions |
| Détection et couverture | Les clients et les collègues signalent la plupart des problèmes | Alertes de symptôme sur quelques services clés | Couverture de détection suivie avec des alertes testées ; premier signal consigné pour chaque incident | Délai de détection et part de détection supervisée revus avec un garde-fou ; les lacunes deviennent du travail planifié | Détection testée couramment entre dépendances et fournisseurs, y compris la chaîne d'alertes |
| Usage dans l'amélioration | Les corrections d'alertes suivent la pire nuit | Les corrections suivent les incidents | Chaque revue produit au moins un changement | Changements suivis jusqu'à leur effet sur le volume, l'actionnabilité et la détection | Charge de rotation, détection et budgets d'erreur revus ensemble pour orienter l'investissement |

## Liste de vérification

- [ ] Nous avons une politique d'appel écrite de quelques phrases qui dit ce qui mérite un appel.
- [ ] Chaque règle d'appel a un responsable, un but et un lien vers un guide d'exploitation.
- [ ] Chaque rotation passe en revue ce qui s'est déclenché au moins chaque semaine et étiquette chaque alerte.
- [ ] Chaque revue produit au moins un changement consigné à une règle.
- [ ] Nous rapportons le volume d'alertes, le taux d'alertes actionnables et le taux de faux positifs par rotation et par service, jamais par personne.
- [ ] Chaque incident consigne comment il a d'abord été détecté, avec une option inconnue.
- [ ] Nous estimons le début d'impact à partir de l'historique de l'indicateur de niveau de service et rapportons la médiane et le 95e percentile du délai de détection.
- [ ] Chaque service concerné a une alerte de symptôme qui a été testée dans les 12 derniers mois.
- [ ] Un contrôle de battement de cœur nous appelle si la chaîne d'alertes s'arrête.
- [ ] Nous avons convenu d'une charge soutenable hors des heures de travail pour chaque rotation et nous la revoyons.
- [ ] Aucun objectif n'est fixé sur le seul volume d'alertes.

## Prompts d'IA

**Objet : rédiger une politique d'appel pour un service à partir de ses indicateurs et de ses conséquences.**

```text
Aidez-moi à rédiger une politique d'appel pour le service [service name].
Contexte : les utilisateurs sont [user group] ; les symptômes visibles des utilisateurs qui nous importent sont [symptoms, for example errors, latency, unavailability] ; les conséquences d'une défaillance manquée sont [consequences] ; la rotation d'astreinte est [rotation description, for example hours and team size].
Rédigez une courte politique (moins de 200 mots) qui dit ce qui mérite un appel, ce qui va dans une file de tickets et ce qui reste sur un tableau de bord.
N'inventez ni seuils ni valeurs de référence ; laissez des [threshold] à remplir par nous à partir de nos propres données.
Listez les questions que vous nous poseriez avant de la finaliser, et énumérez vos hypothèses.
```

**Objet : analyser un export de revue d'alertes à la recherche de schémas de bruit.**

```text
Je vais coller un tableau d'alertes de [period] pour la rotation [rotation name] avec les colonnes : [column names, for example rule, time, label, action taken, service].
Calculez le taux d'alertes actionnables, le taux de faux positifs, la part hors des heures de travail et la part des alertes issues des cinq règles les plus bruyantes, en n'employant que les données que je colle.
Suggérez quelles règles régler, fusionner, rétrograder ou supprimer, avec une raison pour chacune, et marquez chaque suggestion comme une hypothèse à vérifier.
Rapportez par règle, par service et par rotation, jamais par personne. N'inventez pas de valeurs de référence.
Énumérez vos hypothèses et toutes les lignes que vous avez exclues.
```

**Objet : vérifier un ensemble de métriques d'alertes à la recherche de risques de détournement avant publication.**

```text
Voici les métriques de qualité des alertes que nous prévoyons de publier : [list of metrics with definitions and formulas].
Pour chaque métrique, décrivez deux façons dont elle pourrait être détournée ou mal lue dans notre contexte de [organization type and service], et suggérez un garde-fou associé tiré de la même liste ou une pratique que nous pouvons adopter.
Signalez toute métrique montrée sans son garde-fou.
N'inventez ni sources ni valeurs de référence.
Énumérez vos hypothèses sur la façon dont nos outils consignent les alertes et les incidents.
```

**Objet : planifier un test de détection pour les services à faible couverture.**

```text
Nos services sont [list of services], et les alertes de symptôme que nous croyons exister sont [list of alerts].
Proposez un plan de test sûr pour le prochain [game day or rehearsal] qui vérifie, pour chaque service, qu'un symptôme délibéré déclenche l'alerte, atteint [rotation] et renvoie à un guide d'exploitation.
Dites qui devrait être prévenu à l'avance et comment consigner les résultats pour la couverture de détection.
N'inventez pas de fonctions d'outil ; demandez-moi comment fonctionne [monitoring tool].
Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une mesure apparentée et le garde-fou qui doit se trouver à côté d'une métrique de qualité des alertes.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent cohérents le gabarit, le tableau de détournement et les renvois.

## Points clés à retenir

- Jugez les alertes à ce qu'elles ont mené à une action, et jugez la supervision à la quantité de vrais ennuis qu'elle a attrapés ; la précision et le rappel se servent mutuellement de garde-fou.
- Appelez pour les symptômes que les utilisateurs ressentent, reliez les seuils à l'objectif de niveau de service là où il en existe un et gardez les causes pour le diagnostic.
- Passez en revue chaque semaine ce qui s'est déclenché, étiquetez-le et faites un changement à chaque fois.
- Ne fixez jamais d'objectif sur le seul volume d'alertes ; lisez-le à côté du taux d'alertes actionnables, de la part de détection supervisée et du délai de détection.
- Testez les alertes et la chaîne d'alertes, car une alerte non testée est une hypothèse.
- Rapportez par rotation et par service, jamais par personne, et traitez la charge d'astreinte soutenable comme un but de conception.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
