# Temps de réponse et de résolution des incidents

**Les mesures de temps des incidents décrivent combien de temps les utilisateurs attendent à chaque étape ; rapportez-les donc sous forme de distributions avec les horloges écrites, jamais comme une moyenne unique, et associez chaque chiffre de vitesse à une mesure de la tenue du correctif.**

## Résumé et motivation

Un incident, dans la gestion des services informatiques (ITSM), est une interruption non planifiée d'un service ou une réduction de sa qualité. La [gestion des incidents](https://en.wikipedia.org/wiki/Incident_management) est la pratique qui rétablit le service normal aussi vite que cela est sûr. Dans ITIL 4, la pratique s'appelle gestion des incidents et figure parmi les pratiques de gestion des services du cadre [ITIL](https://en.wikipedia.org/wiki/ITIL). Ses équivalents agiles sont l'habitude de l'équipe de traiter le travail non planifié comme un flux de travail à part entière, ainsi que les pratiques d'astreinte et de revue sans reproche issues de l'[ingénierie de la fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la discipline qui consiste à exploiter des services avec des méthodes d'ingénierie logicielle.

Le temps est la façon la plus naturelle de décrire un incident, et la plus couramment mal employée. Un même incident traverse plusieurs étapes. Quelque chose casse, une supervision ou un utilisateur le remarque, une personne accuse réception de l'alerte, quelqu'un démarre le travail, le service est rétabli pour les utilisateurs, et le ticket est clos une fois la cause traitée ou différée. Chaque écart entre deux de ces événements est une mesure distincte avec un responsable distinct, une cause de retard distincte et un remède distinct. Tout appeler « temps de résolution » cache où vit le retard.

Ce sujet couvre les mesures de temps écoulé qui suivent un incident du début à la fin : le **temps de détection**, le **temps d'accusé de réception**, le **temps jusqu'à la première réponse**, le **temps de rétablissement** et le **temps de résolution**. Il couvre aussi l'âge des incidents ouverts, le nombre de fois qu'un incident change de mains et les problèmes statistiques du résumé le plus connu, le temps moyen de rétablissement ou de résolution (MTTR). Les comptages, les catégories et la priorité sont traités ailleurs (voir le sujet 3.2, Volume et priorité des incidents). Les incidents grands et inhabituels ont leurs propres mesures (voir le sujet 3.4, Métriques des incidents majeurs).

### Termes employés dans ce sujet

- **Temps de détection (TTD).** Temps écoulé entre le moment où la panne a commencé à affecter les utilisateurs et celui où l'organisation l'a su, par la supervision ou par un signalement d'utilisateur.
- **Temps d'accusé de réception (TTA).** Temps écoulé entre le déclenchement de l'alerte ou de la création du ticket et le moment où une personne ou équipe nommée en accepte la responsabilité.
- **Temps jusqu'à la première réponse.** Temps écoulé entre l'enregistrement de l'incident et la première action ou le premier message significatif à l'utilisateur touché. Une réponse automatique ne compte pas.
- **Temps de rétablissement.** Temps écoulé entre le début de l'impact sur les utilisateurs et le moment où les utilisateurs peuvent de nouveau employer le service, même si la cause sous-jacente n'est que contournée.
- **Temps de résolution.** Temps écoulé entre l'enregistrement de l'incident et sa clôture parce que le service est rétabli et que l'utilisateur a confirmé ou a eu une chance raisonnable de confirmer.
- **Temps moyen de rétablissement ou de résolution (MTTR).** La moyenne arithmétique de l'une de ces durées sur un ensemble d'incidents. La lettre R se lit réparation, récupération, rétablissement, résolution ou réponse selon qui parle, ce qui est le premier problème de l'abréviation. L'[article de Wikipedia sur le temps moyen de réparation](https://en.wikipedia.org/wiki/Mean_time_to_repair) en liste les variantes.
- **Accord de niveau de service (SLA).** Un [accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement) est un engagement entre un fournisseur et un client sur le niveau de service, incluant souvent des temps cibles de réponse et de résolution par priorité.

### Pourquoi la moyenne est un mauvais résumé

Les durées d'incidents ne sont pas symétriques. La plupart des incidents sont courts, quelques-uns sont très longs, et les longs dominent toute moyenne. Les durées de ce genre sont souvent bien décrites par une forme asymétrique à droite comme la [loi log-normale](https://en.wikipedia.org/wiki/Log-normal_distribution). Dans des données asymétriques, la moyenne peut se situer bien au-dessus de ce à quoi ressemble un incident typique, et une seule longue panne peut la déplacer plus qu'un mois d'améliorations.

L'équipe SRE de Google a publié une analyse de ce problème. Elle soutient que, pour les jeux de données d'incidents qu'elle a étudiés, la dispersion des durées d'incidents est assez large pour que le MTTR puisse cacher de réelles améliorations ou montrer des changements qui ne sont que du bruit, et elle recommande de regarder plutôt des distributions (Davidovič, 2021, cité dans les références). Le raisonnement repose sur des statistiques bien connues ; vous pouvez donc le vérifier sur vos propres données sans vous fier à la conclusion de quiconque : tracez vos durées d'incidents, calculez la moyenne et la [médiane](https://en.wikipedia.org/wiki/Median), et voyez de combien elles diffèrent (voir le sujet 1.6, Culture statistique pour les métriques de service).

L'alternative est les [percentiles](https://en.wikipedia.org/wiki/Percentile). La médiane dit ce qu'un utilisateur typique a attendu. Le 85e ou le 95e percentile dit combien de temps ont attendu les malchanceux. Les clients se souviennent de la longue attente, non de la moyenne ; un engagement par percentile comme « neuf incidents sur dix de cette priorité rétablis dans un temps indiqué » correspond donc bien mieux à leur expérience qu'une moyenne.

### En quoi les visions ITIL et agile diffèrent

La vision ITIL tend à partir d'une priorité et d'une cible. L'impact et l'urgence fixent une priorité, la priorité fixe les temps cibles de réponse et de résolution, et un accord de niveau de service peut attacher des conséquences à leur dépassement. C'est ordonné et facile à auditer, et sujet au détournement que les cibles invitent (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

La vision agile et SRE part de l'impact sur l'utilisateur et du flux. Elle demande à quelle vitesse l'équipe limite les dégâts, quelle part du temps écoulé d'un incident était du travail actif et quelle part de l'attente, et ce que l'équipe a appris. Elle préfère les mesures d'impact (utilisateurs touchés, minutes de service dégradé) aux mesures de statut de ticket, et traite l'horloge du ticket comme un substitut commode mais imparfait. Les deux visions sont compatibles. Utilisez la structure de priorité d'ITIL pour décider quoi mesurer et pour qui, et la pensée du flux et de l'impact pour décider si le chiffre signifie quelque chose.

## Principes clés

- **Nommer l'étape, non « la résolution ».** Détecter, accuser réception, répondre, rétablir et résoudre sont des questions différentes avec des responsables différents. Rapportez chacune sous son propre nom.
- **Écrire les deux horloges.** Chaque mesure de temps indique quel événement la démarre, lequel l'arrête et quels états la suspendent. L'essentiel du détournement vit dans ces frontières.
- **Rapporter des distributions.** Montrez la médiane, un percentile élevé et l'âge du plus ancien incident ouvert. Évitez une moyenne isolée, que les données asymétriques rendent peu fiable.
- **Mesurer le rétablissement séparément de la clôture.** Les utilisateurs se soucient du moment où le service est revenu. Le ticket peut se clore plus tard, une fois la cause traitée.
- **Associer la vitesse à la durabilité.** Un rétablissement rapide que le même incident défait le lendemain n'est pas une amélioration. Montrez la récurrence et le taux de réouverture à côté de chaque mesure de temps.
- **Décrire des équipes, des services et des systèmes.** Ne classez jamais des agents ou des ingénieurs individuels par temps de réponse ou de résolution.
- **Segmenter avant de comparer.** Comparez ce qui est comparable, par priorité et par service, car un chiffre mélangé confond les réinitialisations de mot de passe et les pannes de base de données.

## Définitions des métriques

Chaque ligne énonce ses horloges. Le temps civil et le temps ouvré sont différents : dites lequel vous employez. Là où une mesure emploie des percentiles, le tableau donne les 50e et 95e, et les équipes peuvent ajouter le 85e.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Temps de détection | Combien de temps une panne a affecté les utilisateurs avant que l'organisation le sache | L'horloge démarre au premier moment d'impact sur les utilisateurs (tiré des données de supervision ou du début d'impact confirmé consigné dans la revue) ; s'arrête à la première alerte ou au premier signalement d'utilisateur. Rapporté en médiane et 95e percentile par service. Les incidents sans début connu sont comptés et rapportés séparément, non écartés | minutes | Plateforme de supervision et d'alerte ; enregistrement d'incident avec un champ de début d'impact | Gestion des incidents ; supervision et gestion des événements | Travail d'observabilité et de qualité des alertes (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) | Mensuelle |
| Temps d'accusé de réception | Combien de temps une alerte ou un ticket levé attend avant qu'une personne en soit responsable | L'horloge démarre quand l'alerte se déclenche ou que le ticket est enregistré ; s'arrête quand une personne ou équipe nommée l'accepte. L'auto-affectation n'arrête pas l'horloge. Rapporté en médiane et 95e percentile par priorité | minutes | Outil d'appel ; historique d'affectation de l'outil ITSM | Gestion des incidents ; centre de services | Réponse d'astreinte dans une rotation SRE | Mensuelle |
| Temps jusqu'à la première réponse | Combien de temps l'utilisateur attend une première réponse humaine et utile | L'horloge démarre quand l'incident est enregistré ; s'arrête au premier message ou à la première action humaine qui traite le signalement. Les accusés de réception automatiques et les reçus types sont exclus. Horloge en heures ouvrées indiquée | minutes ou heures ouvrées | Journal de communication de l'outil ITSM | Centre de services ; gestion des incidents | Rétroaction rapide à l'utilisateur, comme dans un accord de travail | Hebdomadaire |
| Temps de rétablissement | Combien de temps les utilisateurs ont été sans service fonctionnel | L'horloge démarre au début de l'impact sur les utilisateurs ; s'arrête quand les utilisateurs peuvent de nouveau employer le service, y compris par contournement ou annulation. Une cause corrigée plus tard ne l'allonge pas. Rapporté en médiane et 95e percentile par priorité et service | minutes ou heures | Enregistrement d'incident avec les horodatages de début d'impact et de rétablissement ; supervision | Gestion des incidents | Temps moyen de rétablissement au sens DORA, lu comme une distribution (voir le sujet 2.8, Métriques DORA) | Mensuelle |
| Temps de résolution | Combien de temps l'enregistrement d'incident est resté ouvert jusqu'à sa clôture | L'horloge démarre quand l'incident est enregistré ; s'arrête quand il est clos après rétablissement et confirmation de l'utilisateur ou une attente raisonnable. Le temps passé en « en attente du client » est montré comme une part distincte rapportée et n'est pas soustrait du chiffre principal. Rapporté en médiane et 95e percentile par priorité | heures ou heures ouvrées | Historique des statuts de l'outil ITSM | Gestion des incidents | Temps de cycle du travail non planifié (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Mensuelle |
| Âge du plus ancien incident ouvert | Depuis combien de temps l'incident ouvert le plus ancien est ouvert | Maintenant moins l'heure d'enregistrement, pour chaque incident ouvert, en listant les quelques plus anciens par priorité. Les états de suspension ne sont pas soustraits | jours | Liste des incidents ouverts de l'outil ITSM | Gestion des incidents | Ancienneté de l'élément de travail sur le tableau de l'équipe (voir le sujet 2.1, Mesures de flux) | Hebdomadaire |
| Part de temps actif | Proportion du temps écoulé d'un incident passée en travail actif plutôt qu'en attente | Somme du temps dans les états actifs / temps total entre l'enregistrement et la clôture, pour les incidents clos dans la période. Les états actifs sont ceux où une personne traite l'incident ; les états d'attente sont listés dans la définition | pourcentage | Historique des statuts de l'outil ITSM | Gestion des incidents | Efficacité du flux (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Trimestrielle |
| Nombre de réaffectations | Combien de fois un incident change d'équipe responsable avant le rétablissement | Nombre de changements de groupe d'affectation entre l'enregistrement et le rétablissement, résumé en médiane et en part d'incidents ayant trois changements ou plus. Compté par service et priorité, jamais par agent | nombre | Historique d'affectation de l'outil ITSM | Gestion des incidents ; centre de services | Nombre de transmissions (voir le sujet 9.3, Métriques de collaboration et de transmission) | Mensuelle |

Deux remarques sur les données. D'abord, un temps de rétablissement ne vaut que ce que vaut son heure de début. Beaucoup d'enregistrements d'incidents saisissent le moment où quelqu'un a tapé le ticket, ce qui peut accuser un retard de plusieurs heures sur le vrai début de l'impact. Si votre outil n'a pas de champ de début d'impact, ajoutez-en un, et traitez les débuts estimés comme des estimations (voir le sujet 1.5, Sources de données et instrumentation). Ensuite, quand vous comparez des périodes, gardez les mêmes définitions de priorité, sinon la courbe de tendance reflétera le reclassement.

## Recommandations

### Définir les horloges

**1. Rédigez une fiche d'horloge pour chaque mesure de temps.** Pour chaque étape, listez l'événement de départ, l'événement d'arrêt, les états qui suspendent l'horloge, la base de temps (civil ou heures ouvrées) et les exclusions. Gardez-la dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**2. Séparez le rétablissement de la clôture.** Consignez le moment où le service est revenu pour les utilisateurs comme son propre horodatage, à part du moment où le ticket s'est clos. Le rétablissement est ce que les utilisateurs ressentent, et la clôture inclut la vérification, la documentation et le traitement de la cause. Les équipes qui emploient un seul horodatage pour les deux sont récompensées pour clore tôt les tickets ou punies pour un suivi soigneux.

**3. Consignez le début de l'impact, pas seulement l'heure d'enregistrement.** Demandez aux intervenants de renseigner le moment où les utilisateurs ont d'abord ressenti l'effet, à l'aide des données de supervision quand c'est possible. Marquez le champ comme estimé quand il l'est. Le temps de détection n'a aucun sens sans lui, et le temps de rétablissement est faussé par son absence.

**4. Limitez les états de suspension et rapportez leur usage.** L'attente d'un client ou d'un fournisseur est parfois légitime. Autorisez une courte liste nommée d'états de suspension, exigez un motif et montrez la part du temps d'incident passée dans chacun. Une part croissante de temps suspendu est un signe de dérive, non de rapidité.

### Rapporter honnêtement

**5. Remplacez la moyenne par la médiane et un percentile élevé.** Montrez les 50e et 95e percentiles de chaque étape, par priorité, sous forme de série chronologique. Montrez le nombre d'incidents derrière chaque point, car un percentile de dix incidents est un chiffre faible. Là où les comptes sont petits, tracez les incidents individuels comme des points et omettez la ligne de synthèse.

**6. Montrez l'âge des plus anciens incidents ouverts.** Un graphique des durées d'incidents clos est aveugle aux incidents encore ouverts, qui sont les pires. Listez chaque semaine les plus anciens incidents ouverts par priorité. C'est difficile à améliorer sans terminer le travail, ce qui en fait un bon compagnon de tout graphique de temps de résolution.

**7. Segmentez par priorité et par service.** Un temps de résolution mélangé monte quand le mélange glisse vers des incidents complexes, même si chaque sorte d'incident est traitée plus vite. Comparez à l'intérieur d'une priorité et d'un service, et montrez le mélange à côté du temps (voir le sujet 3.2, Volume et priorité des incidents). Ne tirez pas de conclusions d'un mois où le mélange a changé.

**8. Utilisez des limites de contrôle pour séparer le signal du bruit.** Les durées d'incidents varient beaucoup d'une semaine à l'autre sans que rien ne change. Une carte de contrôle, avec des limites calculées à partir d'une période stable, montre quand un déplacement est assez grand pour valoir une explication (voir le sujet 1.6, Culture statistique pour les métriques de service).

### Associer la vitesse à la durabilité

**9. Montrez les taux de réouverture et de récurrence à côté de chaque mesure de temps.** Le taux de réouverture est la part des incidents rouverts dans une fenêtre indiquée. La récurrence est le même service et le même symptôme qui réapparaissent dans une fenêtre. Si le temps de rétablissement baisse pendant que la récurrence monte, l'équipe applique des rustines rapides. Envoyez les incidents récurrents à la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes).

**10. Mesurez l'attente et les transmissions, car c'est là que va le temps.** Pour la plupart des services, une grande part du temps écoulé d'un incident est de l'attente d'une personne, d'une décision ou d'un fournisseur, plutôt que du travail. La part de temps actif et le nombre de réaffectations montrent où regarder. Le remède à un long temps de résolution est souvent une règle d'acheminement plus claire ou une astreinte partagée, non une frappe plus rapide.

**11. Utilisez des objectifs sur des percentiles, avec un humain dans la boucle.** Si vous avez besoin d'un objectif, énoncez-le comme un engagement par percentile pour une priorité, tel que « neuf incidents de priorité 2 sur dix rétablis dans un temps indiqué », et convenez-en avec les personnes qui devront le tenir. Traitez les dépassements comme des questions sur le système, non comme des fautes de la personne d'astreinte (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

**12. Interrogez les utilisateurs sur l'expérience.** Une courte enquête sur un échantillon d'incidents clos et la lecture des commentaires diront si le chiffre correspond à la manière dont l'attente a été vécue. Les utilisateurs se soucient souvent davantage de la ponctualité de la communication que de la minute exacte du rétablissement (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Temps de détection | Fixer le début d'impact plus tard qu'il ne fut ; élargir les seuils d'alerte pour que moins de pannes comptent comme incidents ; ne compter que les incidents que la supervision a attrapés | Part des incidents d'abord signalés par les utilisateurs plutôt que par la supervision ; revue périodique des estimations de début d'impact au regard des données de supervision |
| Temps d'accusé de réception | Auto-affecter ou auto-accuser réception pour arrêter l'horloge ; accuser réception de l'alerte puis ne rien faire | Temps jusqu'à la première réponse et temps de rétablissement des mêmes incidents ; échantillon d'alertes acquittées sans activité ultérieure |
| Temps jusqu'à la première réponse | Envoyer une réponse type ou d'un mot pour arrêter l'horloge | Revoir un échantillon de premières réponses pour leur substance ; contacts répétés et commentaires d'enquête |
| Temps de rétablissement | Déclarer le service rétabli avant que les utilisateurs puissent l'employer ; rétablir en supprimant le symptôme ; consigner des pannes comme maintenance planifiée | Récurrence dans une fenêtre ; impact déclaré par les utilisateurs après l'heure de rétablissement ; part des incidents requalifiés après coup |
| Temps de résolution | Déplacer les tickets vers « en attente du client » ou « en pause » ; clore après une seule tentative de contact ; scinder un incident en enfants pour clore le parent plus tôt | Part du temps passée dans les états de suspension ; taux de réouverture ; âge du plus ancien incident ouvert ; lire un échantillon de notes de clôture |
| Âge du plus ancien incident ouvert | Clore et recréer le plus ancien ticket ; le requalifier en problème ou en demande pour le retirer de la liste | Lier les doublons aux originaux et rapporter l'âge lié ; compte des incidents convertis en problèmes ou en demandes à chaque période |
| Part de temps actif | Consigner un travail bref et sans signification pour marquer le temps comme actif ; passer à des états actifs sans effort | Comparer le temps actif avec des résultats comme le temps de rétablissement ; échantillon de notes de travail |
| Nombre de réaffectations | Rouvrir sous la même équipe au lieu de transmettre ; passer le travail par un canal latéral pour que l'outil ne montre aucune transmission | Temps de rétablissement et satisfaction des utilisateurs ; observation périodique de la circulation du travail entre équipes |

Une lecture saine montre des médianes et des percentiles de queue qui évoluent ensemble, une part de temps suspendu petite et stable, peu d'incidents d'abord signalés par les utilisateurs, une récurrence en baisse et des commentaires d'enquête qui concordent avec les données de tickets. Traitez une amélioration de titre qui arrive seule comme une invitation à une revue de détournement.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Temps moyen de rétablissement | Familier ; un seul chiffre ; facile à suivre dans le temps | Dominé par quelques longs incidents ; cache le changement réel ; médiocre pour de petits échantillons |
| Médiane plus un percentile élevé | Décrit l'expérience typique et celle des malchanceux ; résiste aux valeurs aberrantes | Exige assez d'incidents ; deux chiffres à expliquer |
| Tracer chaque incident | Montre la forme complète et les valeurs aberrantes ; honnête à faible volume | Plus difficile à lire à fort volume ; demande un animateur |
| Objectifs par priorité | Attentes claires ; soutient les contrats et l'escalade | Invite au reclassement et à la suspension de l'horloge ; peut pousser l'effort vers la frontière de l'objectif |
| Mesures d'horloge de ticket | Peu coûteuses, disponibles dans tout outil ITSM | Mesurent le ticket, non l'expérience de l'utilisateur ; sensibles au flux de statuts |
| Mesures fondées sur l'impact | Proches de ce que ressentent les utilisateurs ; résistent aux astuces de ticket | Exigent des données de supervision et un champ de début d'impact ; plus difficiles à auditer |

La réponse pragmatique est de garder l'horloge du ticket parce que tout outil l'a, d'ajouter un horodatage de rétablissement fondé sur l'impact là où la supervision le permet et d'employer des distributions pour les deux. La moyenne est acceptable comme description approximative d'un seul grand ensemble stable d'incidents semblables, et elle ne devrait jamais être le seul chiffre de la page.

## Questions à discuter avec votre équipe

**1. Quelle étape d'un incident prend le plus de temps chez nous, et comment le savons-nous ?**
Dessinez la chronologie d'un incident sur un tableau avec les étapes du début d'impact à la clôture. Prenez les dix derniers incidents et notez la durée de chaque étape, à l'aide des données de l'outil et de la mémoire des intervenants. L'animateur doit chercher l'étape où le temps se concentre, qui est souvent l'attente d'une transmission ou d'une décision, non le travail technique. Convenez de l'étape qui mérite l'attention en premier.

**2. Où notre horloge démarre-t-elle et s'arrête-t-elle, et qui l'a décidé ?**
Demandez à chaque personne de dire quand elle croit qu'un incident a « commencé » et quand il a « fini ». Les réponses différeront, et les différences sont le constat. Comparez-les avec les champs de l'outil et le flux de statuts. Consignez les définitions convenues dans le registre des métriques et notez où l'outil ne peut pas encore les soutenir.

**3. Que montreraient nos médianes et nos 95e percentiles que cache notre moyenne ?**
Avant la réunion, calculez la moyenne, la médiane et le 95e percentile des incidents du dernier trimestre par priorité. Montrez-les côte à côte et tracez les durées. Demandez ce que l'équipe conclurait de chacun. L'animateur doit remarquer si un ou deux incidents déplacent la moyenne et discuter de la question de savoir si l'équipe croit que la médiane représente l'attente d'un utilisateur typique.

**4. Combien de temps passons-nous à attendre plutôt qu'à travailler, et pourquoi ?**
Choisissez trois longs incidents et retracez leur historique de statuts. Comptez les heures dans les états actifs et les heures dans les états d'attente, et notez qui ou quoi était attendu. Demandez quelles attentes pourraient être raccourcies par une décision, un chemin d'escalade plus clair ou une astreinte partagée.

**5. Si on nous demandait de réduire d'un quart le temps de résolution, comment le ferions-nous sans aider les utilisateurs ?**
C'est la revue de détournement en miniature. Listez chaque manœuvre qui améliorerait le chiffre sans améliorer le service, comme suspendre l'horloge, clore tôt ou rebaptiser des priorités. Pour chaque manœuvre, demandez si un garde-fou l'attraperait. La liste est le début de votre colonne de vecteurs de détournement et montre où les définitions doivent être resserrées.

**6. Comment savons-nous qu'un rétablissement plus rapide était réel ?**
Demandez des preuves : récurrence, réouverture, commentaires d'utilisateurs et tout incident ultérieur au même symptôme. Regardez une amélioration récente et demandez si elle a tenu un mois plus tard. L'animateur doit orienter le groupe vers des correctifs durables. Terminez en décidant quelle mesure de durabilité rejoint le tableau de bord.

## Quatre perspectives

### Équipes produit et livraison

Les équipes produit qui exploitent leurs propres services voient le temps d'incident comme un coût du travail non planifié qui déplace le travail planifié. Suivez la part de chaque période de flux prise par les incidents, et traitez les incidents répétés comme des éléments de backlog pour l'équipe responsable. Les pratiques de publication qui rendent l'annulation rapide raccourcissent le rétablissement ; le temps d'incident est donc en partie une mesure de livraison (voir le sujet 2.9, Travail opérationnel et travail non planifié).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent les horloges et ressentent la pression des objectifs. Elles devraient publier la fiche d'horloge, auditer l'usage des états de suspension, rapporter des médianes et des percentiles de queue par priorité et tenir chaque semaine une liste des plus anciens incidents ouverts. La charge d'astreinte et la qualité des alertes façonnent les temps d'accusé de réception et de détection ; regardez-les donc ensemble (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

### Direction et gouvernance

Les dirigeants devraient demander quelle étape est la plus lente et ce qu'on y fait, non pourquoi un chiffre est rouge. Ils devraient attendre un reporting par percentiles, une mesure de durabilité à côté de toute mesure de vitesse et une explication quand les définitions changent. Le financement de la supervision, des guides d'exploitation et du travail sur les problèmes rapporte souvent plus que la pression sur les intervenants, parce qu'il réduit le retard que les intervenants ne peuvent pas contrôler.

### Clients et utilisateurs

Les utilisateurs vivent l'attente, la qualité de la communication et le fait que le problème revienne ou non. Ils voient rarement les noms d'étapes. Donnez-leur une première réponse honnête, dites-leur à quoi s'attendre et tenez-les informés selon un calendrier. Leurs commentaires d'enquête et leurs contacts répétés sont le meilleur contrôle pour savoir si l'horloge du ticket dit la vérité.

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite une plateforme de commandes, un service de comptes clients et un système d'entrepôt interne. Les équipes produit détiennent leurs services et partagent une rotation d'astreinte avec un petit groupe d'exploitation. Tous les chiffres de cet exemple sont illustratifs.

La direction fixe un objectif de « temps moyen de résolution inférieur à quatre heures » pour les incidents de priorité 2. Au premier trimestre, le tableau de bord montre une moyenne de 3,8 heures, et l'objectif paraît atteint. Le personnel de l'entrepôt dit que certaines pannes semblent durer toute la journée. La responsable de l'exploitation trace les 41 incidents de priorité 2 (illustratif) du trimestre et trouve une médiane de 1,5 heure et un 95e percentile de 11 heures. Trois incidents expliquent l'essentiel de la longue queue.

Elle retrace les trois longs incidents. Chacun a passé l'essentiel de son temps en « en attente du fournisseur » ou « en attente du client ». Dans deux d'entre eux, le ticket avait été clos puis recréé comme un nouvel incident lorsque l'original « dépassait », ce qui remettait l'horloge à zéro. Un troisième impliquait quatre réaffectations entre équipes sur deux jours. Un échantillon de notes de clôture montre que 6 des 30 tickets examinés (illustratif) avaient été clos après une seule tentative de joindre l'utilisateur.

L'équipe fait quatre changements. Elle ajoute un champ de début d'impact et un horodatage de rétablissement au formulaire d'incident. Elle rapporte la médiane, les 85e et 95e percentiles par priorité, et les plus anciens incidents ouverts chaque semaine. Elle montre sur la même page la part du temps passée dans les états de suspension et le taux de récurrence. Et elle relie les tickets recréés à leurs originaux pour que l'âge se reporte.

À la revue suivante, la moyenne de titre est montée à 4,6 heures parce que les tickets recréés comptent désormais en entier. L'équipe explique la hausse à la direction comme une correction. Le 95e percentile et le plus ancien ticket ouvert sont maintenant les chiffres sur lesquels elle travaille, et le nombre de réaffectations désigne une lacune d'acheminement entre le service de commandes et le système d'entrepôt. Elle convient d'ajouter un alias d'astreinte partagé et de revoir l'effet au cours du trimestre suivant plutôt que de fixer immédiatement un nouvel objectif.

## Perspective sectorielle

**Startup.** Le volume est faible ; les percentiles sont donc bruités et un tracé de chaque incident vaut mieux qu'une synthèse. Une personne détecte, répond et rétablit souvent, de sorte que la séparation des étapes compte moins qu'une chronologie écrite de chaque incident. Ajoutez une note de début d'impact à chaque compte rendu post-incident et calculez de simples médianes quand il y aura assez d'incidents.

**Petite entreprise.** Un prestataire de services gérés ou un généraliste informatique unique peut traiter les incidents, et le contrat du prestataire peut définir des cibles de réponse et de résolution. Lisez attentivement les horloges du contrat, car elles diffèrent souvent de l'expérience de vos utilisateurs. Tenez un court journal du début d'impact et du rétablissement des incidents qui comptent, et demandez au prestataire les enregistrements sous-jacents, car un chiffre de synthèse cache les horloges.

**Grande entreprise.** De nombreuses équipes, fournisseurs et schémas de priorité rendent la comparaison tentante et trompeuse. Standardisez les définitions d'horloges et le sens des priorités dans toute l'organisation, publiez des distributions plutôt que des moyennes et segmentez par service. Guettez la dérive des états de suspension et le reclassement, qui croissent avec le nombre de couches de reporting.

**Gouvernement et secteur public.** Les contrats, le reporting légal et l'audit peuvent fixer les horloges et les définitions de priorité. Respectez ces obligations telles qu'écrites, et gardez à côté une seconde vue orientée utilisateur, pour que la conformité ne cache pas une mauvaise expérience. Soyez ouvert sur les définitions et sur les corrections quand une règle d'horloge change (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût de ce sujet est surtout de la conception et de la discipline. Il faut quelques heures pour écrire des fiches d'horloge, un peu de configuration pour ajouter un champ de début d'impact et un horodatage de rétablissement, et un effort modeste pour construire des rapports par percentiles. Là où l'outil ITSM ou une plateforme de supervision détient déjà les horodatages, l'extraction est une tâche ponctuelle. Le coût récurrent est une revue mensuelle et un échantillon trimestriel d'incidents clos.

Le retour vient de meilleures décisions et de moins de reprises. Le reporting par distributions montre si une amélioration a fonctionné, et le reporting par étapes oriente l'effort vers le vrai retard, comme les transmissions, les lacunes de détection ou les attentes de fournisseurs. Les mesures de durabilité évitent la fausse économie des rustines rapides qui reviennent sous forme d'incidents répétés. Mesurez votre propre ligne de base pendant un trimestre, faites un changement et comparez les distributions.

## Antimodèles et pièges

- **Un seul MTTR sur le tableau de bord de direction.** La moyenne de données asymétriques induit en erreur. Montrez la médiane, un percentile élevé et le plus ancien incident ouvert, et dites combien d'incidents se trouvent derrière chaque point.
- **Mélanger priorités et services.** Un glissement du mélange ressemble à un changement de performance. Segmentez par priorité et par service, et montrez le mélange.
- **Arrêter l'horloge avec des états de suspension.** Le temps disparaît dans « en attente » et « en pause ». Listez les états autorisés, exigez des motifs et rapportez la part de temps dans chacun.
- **Clore et recréer des tickets.** Cela remet l'âge à zéro et cache le long incident. Reliez les tickets recréés à leurs originaux et rapportez l'âge lié.
- **Employer un seul horodatage pour le rétablissement et la clôture.** Les équipes sont alors récompensées pour la clôture prématurée ou pénalisées pour un suivi soigneux. Consignez les deux et rapportez les deux.
- **Classer les agents ou les ingénieurs par temps de résolution.** Cela récompense les tickets faciles et le tri sélectif, et décourage l'entraide et l'escalade. Rapportez par équipe et par service seulement.
- **Des objectifs sans mesures de durabilité.** Une rustine rapide qui échoue demain ressemble à un succès. Montrez la récurrence et le taux de réouverture à côté de chaque objectif.
- **Traiter de petits échantillons comme des tendances.** Un 95e percentile tiré d'une poignée d'incidents est une devinette. Tracez les incidents individuels et attendez plus de données avant de tracer une ligne.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Chacun mesure différemment ; un seul « temps de résolution » | Horloges écrites pour certaines équipes ; étapes partiellement séparées | Une fiche d'horloge pour toutes les étapes, avec les états de suspension listés | Définitions revues et changements consignés avec leurs motifs | Définitions alignées avec les fournisseurs et les clients, révisées quand elles cessent d'éclairer les décisions |
| Qualité des données | Notes manuelles ; début d'impact inconnu | Horodatages d'outil pour ticket enregistré et clos | Début d'impact et rétablissement consignés pour les incidents prioritaires | Données auditées par échantillonnage ; estimations signalées | Données de supervision et d'ITSM jointes automatiquement et dignes de confiance entre équipes |
| Pratique statistique | Moyenne seulement | Moyenne et médiane montrées | Médiane et percentile élevé nommé par priorité et service | Limites de contrôle employées ; mesures de durabilité associées | Distributions reliées à l'expérience des utilisateurs et employées pour décider où investir |
| Usage dans l'amélioration | Chiffres employés pour courir après des individus | L'équipe voit ses propres chiffres | L'équipe revoit chaque mois les temps d'étape et l'attente | Les étapes lentes mènent à un travail d'amélioration financé | L'amélioration est partagée entre équipes et fournisseurs et les mesures évoluent |

## Liste de vérification

- [ ] Chaque étape (détection, accusé de réception, réponse, rétablissement, résolution) a une règle écrite de début, de fin et de suspension.
- [ ] Le début d'impact et l'heure de rétablissement sont consignés dans des champs séparés pour les incidents prioritaires.
- [ ] Les rapports montrent la médiane et un percentile élevé, par priorité et par service.
- [ ] Le nombre d'incidents derrière chaque point rapporté est montré.
- [ ] Les plus anciens incidents ouverts sont listés chaque semaine.
- [ ] Les états de suspension sont une courte liste nommée et leur part de temps est rapportée.
- [ ] Le taux de réouverture et la récurrence sont montrés à côté de chaque mesure de temps.
- [ ] Les tickets recréés sont reliés à leurs originaux pour que l'âge se reporte.
- [ ] Aucune mesure de temps n'est employée pour classer des agents ou des ingénieurs individuels.
- [ ] Un échantillon d'incidents clos est lu chaque trimestre pour en vérifier l'honnêteté.
- [ ] Les commentaires d'enquête des clients sont lus à côté des données de tickets.

## Prompts d'IA

**Comparez la moyenne et les percentiles de nos durées d'incidents.**

```text
Je vais coller des enregistrements d'incidents de [service or team] couvrant
[period]. Champs : [list fields such as logged time, impact start, restore
time, closed time, priority, status history]. Calculez la médiane, le 85e
percentile, le 95e percentile et la moyenne de [stage name, for example time to
restore] par [priority], et montrez combien d'incidents se trouvent derrière
chaque chiffre. Décrivez de combien la moyenne diffère de la médiane et quels
incidents expliquent cette différence. N'inventez ni données ni valeurs de
référence. Énumérez vos hypothèses, les lignes que vous avez exclues et tout ce
que les données n'ont pas pu vous dire.

[paste incident data with personal data removed]
```

**Rédigez une fiche d'horloge pour nos mesures de temps d'incident.**

```text
Rédigez une fiche d'horloge pour [team name] couvrant le temps de détection,
d'accusé de réception, jusqu'à la première réponse, de rétablissement et de
résolution. Notre outil ITSM est [tool name], notre supervision est [monitoring
tool] et notre flux de statuts est [list of statuses]. Pour chaque étape, donnez
l'événement de départ, l'événement d'arrêt, les états de suspension, la base de
temps ([calendar or business hours]), les exclusions et un vecteur de
détournement avec un garde-fou. Marquez chaque élément que vous avez dû supposer
et listez les questions auxquelles je dois répondre pour compléter la fiche.
N'inventez pas d'objectifs.
```

**Trouvez où va le temps écoulé dans quelques longs incidents.**

```text
Voici l'historique de statuts de [number] longs incidents de [service]. Pour
chaque incident, listez le temps passé dans chaque statut, marquez les états
actifs et d'attente selon cette règle : [which statuses count as active], et
notez chaque réaffectation entre [teams or groups]. Rapportez des schémas entre
incidents, non des individus, et suggérez quelle étape mérite l'attention en
premier. Ne devinez pas des causes que les données ne montrent pas. Énumérez vos
hypothèses et les champs supplémentaires qui aideraient.

[paste status histories with personal data removed]
```

**Menez une revue de détournement de nos objectifs de temps d'incident.**

```text
Nous rapportons [metric name] pour [priority or service], défini comme
[definition with start and stop events]. L'objectif est [target] et le public
est [audience]. Énumérez les façons réalistes dont le chiffre pourrait
s'améliorer sans aider les utilisateurs, comme la suspension de l'horloge, la
clôture précoce, le rebaptême ou la recréation de tickets. Pour chaque façon,
proposez une mesure ou pratique de garde-fou qui la révélerait, et dites
comment ce garde-fou pourrait lui-même être détourné. N'inventez ni références
ni statistiques. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets apparentés et les garde-fous associés d'une mesure de temps d'incident que vous êtes sur le point de rapporter.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un changement de ce sujet garde cohérents le gabarit, le tableau de détournement et les renvois.

## Points clés à retenir

- Un incident a des étapes, et chaque étape a sa propre horloge, son responsable et son remède. Nommez l'étape que vous mesurez.
- Les durées d'incidents sont asymétriques, de sorte que la moyenne induit en erreur. Rapportez la médiane, un percentile élevé et l'âge du plus ancien incident ouvert.
- Écrivez où chaque horloge démarre et s'arrête, consignez le début d'impact et le rétablissement séparément de la clôture du ticket, et limitez les états de suspension.
- Associez chaque mesure de vitesse à une mesure de durabilité comme la récurrence et le taux de réouverture.
- Décrivez des équipes et des services, jamais des agents individuels, et lisez un échantillon d'incidents clos pour vérifier que les chiffres sont honnêtes.

## Références et lectures complémentaires

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
