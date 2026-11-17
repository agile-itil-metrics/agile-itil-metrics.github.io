# Métriques de compétences et d'apprentissage

**Une équipe qui continue d'apprendre garde ses services en bonne santé ; protégez donc le temps d'apprentissage dans un rythme soutenable, mesurez si les compétences sont réparties et employées, et traitez les certificats et les décomptes de cours comme des indices, jamais comme des preuves de compétence.**

## Résumé et motivation

Les services survivent aux personnes qui les ont bâtis, et la technologie qui les sous-tend change constamment. La capacité d'une équipe à suivre dépend de ce qu'elle sait et de la vitesse à laquelle elle apprend. Les principes du Manifeste agile incluent une attention continue à l'excellence technique et une réflexion régulière sur la manière de devenir plus efficace. Les pratiques ITIL d'amélioration continue et de gestion des connaissances décrivent le même besoin du côté de l'organisation. Les mesures de compétences et d'apprentissage demandent si la capacité d'exploiter et de changer les services existe, si elle est répartie assez largement pour survivre à une absence, et si l'organisation donne aux gens le temps et le soutien de grandir.

L'apprentissage est facile à compter et difficile à bien mesurer. Les heures de formation, les cours terminés et les certificats sont visibles, et aucun ne montre si quelqu'un peut faire quelque chose de nouveau au travail. Une [certification professionnelle](https://en.wikipedia.org/wiki/Professional_certification) montre qu'une personne a satisfait à une norme d'évaluation à un moment donné. C'est une preuve utile, surtout pour les rôles réglementés et les points d'entrée comme les fondations d'ITIL ou de l'agile, et ce n'est pas une mesure de la compétence actuelle ou du jugement de la personne. Ce sujet s'appuie donc sur des mesures de capacité en usage : qui peut exploiter et changer quoi, la rapidité avec laquelle les nouveaux deviennent utiles, et si l'apprentissage se retrouve dans le travail.

Plusieurs idées façonnent l'approche.

- **Beaucoup de connaissances précieuses sont [tacites](https://en.wikipedia.org/wiki/Tacit_knowledge).** Michael Polanyi a observé que nous savons plus que nous ne pouvons dire. Exploiter un service complexe suppose un jugement difficile à mettre par écrit, qui se transmet surtout en travaillant aux côtés des autres. La documentation aide, et elle ne peut remplacer une pratique partagée comme la [programmation en binôme](https://en.wikipedia.org/wiki/Pair_programming), l'observation en doublure et la revue.
- **Largeur et profondeur comptent toutes deux.** Les [compétences en T](https://en.wikipedia.org/wiki/T-shaped_skills) décrivent une personne qui a de la profondeur dans un domaine et une largeur de travail dans d'autres. Des équipes de personnes en T peuvent couvrir les absences et collaborer au-delà des frontières. La [formation croisée](https://en.wikipedia.org/wiki/Cross-training_(business)) bâtit délibérément cette largeur.
- **L'apprentissage est social.** Une [communauté de pratique](https://en.wikipedia.org/wiki/Community_of_practice) est un groupe de personnes qui partagent un métier et apprennent les unes des autres. Le [mentorat](https://en.wikipedia.org/wiki/Mentorship) associe des personnes moins expérimentées à des personnes plus expérimentées. Les deux répandent la connaissance au-delà des frontières d'équipes.
- **Les organisations peuvent apprendre.** Une [organisation apprenante](https://en.wikipedia.org/wiki/Learning_organization), terme popularisé par Peter Senge, se transforme continuellement par l'apprentissage de ses membres. Des pratiques comme les revues d'incidents sans reproche sont la manière dont les organisations apprennent de l'expérience (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

Les mesures d'apprentissage ont leurs propres distorsions. Les budgets de formation sont dépensés pour des cours que personne n'applique. Le temps d'apprentissage est promis puis consommé par les incidents. Les individus sont classés selon des inventaires de compétences, ce qui les pousse à cacher ce qu'ils ne savent pas. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : quand les heures d'apprentissage sont un objectif, les gens assistent à des séances, et quand les certificats sont un objectif, les gens en collectionnent (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Un rythme soutenable compte ici aussi. L'apprentissage comprimé dans les soirées et les fins de semaine est un coût pour les gens, et ce n'est pas le signe d'une organisation saine. Les mesures ci-dessous regardent le temps protégé à l'intérieur de la semaine de travail.

## Principes clés

- **Mesurer la capacité en usage, non la présence aux cours.** Regardez ce que les gens peuvent faire et ce qu'ils font.
- **Protéger le temps d'apprentissage dans un rythme soutenable.** Ne faites pas de l'apprentissage un supplément non rémunéré.
- **Répandre la connaissance à dessein.** Les points uniques de connaissance sont un risque pour le service et un fardeau pour la personne.
- **Traiter les certificats comme des preuves, non comme des démonstrations.** Ils comptent pour certains rôles et disent peu de la compétence actuelle.
- **Apprendre du travail.** Les incidents, les revues et le travail en binôme enseignent plus que la plupart des cours.
- **Garder les données de compétences au niveau de l'équipe.** Les individus ne devraient pas être classés selon un inventaire.
- **Laisser les gens façonner leur propre apprentissage.** Les personnes motivées choisissent bien quand on leur donne du temps et du soutien.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Part du temps d'apprentissage protégé | Part de la capacité de l'équipe mise de côté et réellement employée pour l'apprentissage | heures ou part de capacité employées à l'apprentissage pendant le temps de travail / capacité de travail totale, au niveau de l'équipe | pourcentage | Plan de capacité de l'équipe et type de travail du suivi | Gestion de la main-d'œuvre et des talents ; amélioration continue | Temps de réflexion et d'excellence technique | Mensuelle |
| Profondeur de la formation croisée | Part des tâches critiques exécutées par au moins deux personnes dans la dernière période | tâches critiques exécutées par deux personnes ou plus dans la période / tâches critiques | pourcentage | Carte des tâches et des responsabilités de l'équipe, validée par le travail récent | Gestion des connaissances ; gestion de la continuité de service | Propriété collective du travail | Trimestrielle |
| Délai avant la première contribution | Temps pour qu'un nouveau membre de l'équipe achève son premier vrai changement ou cas résolu | médiane et 85e percentile des jours entre la date de début et le premier élément de travail réel achevé en production | jours | Suivi de l'accueil et suivi du travail | Gestion de la main-d'œuvre et des talents ; gestion des connaissances | Temps pour qu'un nouveau membre fasse un premier changement | Par embauche, revu chaque trimestre |
| Participation aux communautés | Part des membres de l'équipe qui participent à une communauté de pratique dans la période, selon leur choix | membres ayant assisté, contribué ou présenté dans la période / membres de l'équipe, au niveau de l'équipe | pourcentage | Enregistrements de la communauté, volontaires | Gestion des connaissances ; amélioration continue | Communautés de pratique | Trimestrielle |
| Taux d'application de la formation | Part des expériences de formation dont l'apprenant ou son équipe rapporte l'usage dans le travail dans les 90 jours | expériences d'apprentissage rapportées comme appliquées / expériences d'apprentissage achevées | pourcentage | Court suivi auprès de l'apprenant, anonymisé au niveau de l'équipe | Gestion de la main-d'œuvre et des talents ; amélioration continue | Apprentissage appliqué au travail | Trimestrielle |
| Couverture des certifications pertinentes | Part des rôles exigeant une certification pour des raisons légales, contractuelles ou d'entrée où l'exigence est satisfaite | rôles dont la certification exigée est détenue / rôles exigeant une certification | pourcentage | Registre des exigences de rôle, enregistrements de certificats | Gestion de la main-d'œuvre et des talents ; gouvernance | Satisfaire des exigences contractuelles ou réglementaires d'entrée | Annuelle |
| Leçons partagées entre équipes | Nombre de leçons tirées d'incidents ou d'améliorations qui ont été partagées hors de l'équipe d'origine et employées par une autre équipe | leçons partagées avec un usage consigné par une autre équipe dans la période | nombre | Registre des leçons et notes de revue | Gestion des connaissances ; amélioration continue | Apprentissage partagé entre équipes | Trimestrielle |

Définissez dans le registre les tâches critiques, les rôles et les types d'apprentissage. Le temps d'apprentissage protégé ne compte que le temps employé à apprendre, non le temps offert et perdu au profit du travail urgent, et il exclut l'apprentissage hors des heures de travail. La profondeur de la formation croisée compte les personnes qui ont réellement exécuté la tâche dans la période, non celles qui le pourraient en théorie. Le taux d'application de la formation emploie des déclarations personnelles et est agrégé par équipe, avec une taille minimale de groupe. La couverture des certifications ne vaut que pour les rôles ayant une exigence véritable, et elle n'est jamais employée pour coter la compétence d'un individu.

## Recommandations

### Protéger le temps et le rendre réel

**1. Planifiez le temps d'apprentissage dans la capacité.** Mettez de côté une part de la capacité de chaque équipe pour l'apprentissage, comme un bloc régulier chaque semaine, et inscrivez-la dans le plan de capacité. Un plan qui suppose que tout le monde travaille à pleine utilisation sur la livraison n'a pas de place pour apprendre. Suivez la part réellement employée, et regardez pourquoi elle est insuffisante : incidents, échéances ou culture. Cela se relie aux sujets de planification et de charge de travail (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

**2. Laissez les gens choisir, avec des conseils.** Les personnes motivées savent ce qu'elles ont besoin d'apprendre. Offrez un budget et du temps, un menu d'options et des conversations sur les besoins de l'équipe. Demandez aux gens de partager avec l'équipe ce qu'ils apprennent, ce qui multiplie la valeur. Évitez l'apprentissage obligatoire sans rapport avec le travail.

**3. Faites de l'apprentissage une partie du travail.** Le travail en binôme, la rotation, l'observation en doublure, la revue de code, les exposés internes et les revues d'incidents sans reproche enseignent dans le contexte de vrais problèmes. Comptez-les comme de l'apprentissage dans le plan de capacité. Une équipe qui apprend en livrant a besoin de moins de temps loin de la livraison.

### Répandre la connaissance

**4. Cartographiez les tâches critiques et qui les a exécutées.** Listez les tâches qui doivent être faites de façon fiable : restaurer une base de données, renouveler une clé, traiter un incident majeur, déployer un changement risqué. Pour chacune, consignez qui l'a exécutée récemment. La carte montre les points uniques de connaissance. Validez-la avec des preuves de travail récent, car un inventaire de compétences fondé sur l'autoévaluation s'éloigne de la réalité (voir le sujet 9.3, Métriques de collaboration et de transmission).

**5. Formez de façon croisée délibérément.** Planifiez le travail en binôme et la rotation pour que chaque tâche critique ait au moins deux personnes qui l'ont faite récemment. Pratiquez avec des exercices et des exercices de simulation (game days) là où c'est possible. Le but est la résilience et une astreinte soutenable, et cela décharge les experts d'être les seuls à pouvoir aider.

**6. Soutenez les communautés de pratique et le mentorat.** Encouragez des groupes volontaires autour de métiers comme la fiabilité, les tests, la sécurité ou la gestion des services, et faites-leur de la place. Offrez du mentorat entre équipes. Mesurez la participation de façon légère, au niveau de l'équipe, et demandez ce que les communautés ont produit : pratiques partagées, outils, leçons.

### Bien accueillir

**7. Mesurez le délai avant la première contribution.** Suivez le temps que mettent les nouveaux membres à achever un vrai travail en production, et ce qui les ralentit : accès, documentation, installation de l'environnement ou responsabilité floue. Corrigez les causes, et demandez leur avis aux personnes récemment arrivées. Un début rapide et soutenu donne le ton et réduit le risque (voir le sujet 6.4, Expérience des utilisateurs et des employés).

**8. Donnez tôt aux nouveaux un vrai travail, avec du soutien.** Commencez par de petites tâches réelles et un parrain nommé. Passez les progrès en revue régulièrement et ajustez. Apprendre en faisant, avec des filets de sécurité, est plus rapide qu'une longue période de lecture.

### Évaluer honnêtement l'apprentissage

**9. Demandez si la formation a été appliquée.** Après un cours ou un événement, demandez à l'apprenant et à son équipe, quelques semaines plus tard, s'ils l'ont employée et comment. Agrégez les réponses. Les cours que personne n'applique devraient être changés ou abandonnés. Le modèle de Kirkpatrick à quatre niveaux d'évaluation de la formation, de la réaction à l'apprentissage, au comportement puis aux résultats, offre un vocabulaire pour cela, bien que de simples questions de suivi soient un bon début.

**10. Employez les certifications pour ce à quoi elles servent.** Là où la loi, un contrat ou la norme d'entrée d'un rôle exige une certification, suivez la couverture. Ailleurs, traitez la certification comme un signal d'effort et de connaissance parmi d'autres. N'érigez pas les décomptes de certificats en objectifs, et ne rémunérez ni ne promouvez sur cette seule base.

**11. Partagez les leçons entre équipes.** Tenez un registre léger des leçons tirées d'incidents, de revues et d'améliorations, et suivez lesquelles ont été employées par une autre équipe que l'équipe d'origine. Une leçon qui reste dans l'équipe qui l'a apprise n'a été apprise qu'à moitié par l'organisation. Passez le registre en revue dans les communautés de pratique.

**12. Gardez les données individuelles hors des classements.** Ne publiez pas d'inventaires de compétences par personne, et ne classez jamais des gens selon les heures de formation, les certificats ou les compétences autoévaluées. Agrégez au niveau de l'équipe, et laissez les gens voir leurs propres données. Les individus cacheront leurs lacunes si les lacunes comptent contre eux.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Part du temps d'apprentissage protégé | Consigner le travail ordinaire comme de l'apprentissage ; planifier du temps qui est ensuite annulé | Ne compter que le temps employé ; comparer aux enregistrements de type de travail et aux commentaires de l'équipe |
| Profondeur de la formation croisée | Lister des gens qui n'ont jamais fait la tâche ; compter une seule observation | Preuve de travail récent ; résultats d'exercices |
| Délai avant la première contribution | Compter des changements triviaux ; démarrer l'horloge tard | Définir le « vrai » travail dans le registre ; demander au nouveau membre et à son parrain |
| Participation aux communautés | Imposer la présence ; compter les inscriptions | Volontaire seulement ; demander ce que la communauté a produit |
| Taux d'application de la formation | Presser les apprenants de dire qu'ils l'ont appliquée ; ne demander qu'aux enthousiastes | Agrégat anonyme ; suivi au niveau de l'équipe ; regarder les changements observables |
| Couverture des certifications pertinentes | Collectionner des certificats pour des rôles qui n'en ont pas besoin ; traiter la certification comme une compétence | Se limiter aux exigences véritables ; vérifier la capacité pratique par d'autres preuves |
| Leçons partagées entre équipes | Partager des leçons triviales ; compter les messages | Exiger un usage consigné par une autre équipe ; revoir la qualité |

Une lecture saine est un temps d'apprentissage protégé et employé, des tâches critiques connues de plusieurs personnes, des nouveaux membres qui font vite de vraies contributions, des communautés qui produisent une pratique partagée, une formation que les gens appliquent et des leçons qui voyagent entre les équipes.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Cours formels et certification | Structurés, reconnus, utiles pour l'entrée et les rôles réglementés | Coût ; peuvent ne pas se transférer au travail |
| Apprentissage en cours d'emploi | Pertinent et immédiat | Inégal ; dépend des mentors et du temps |
| Temps protégé | Rend l'apprentissage réel | Concurrence le travail urgent ; exige de la discipline |
| Apprentissage sur son temps personnel | Aucun coût pour la livraison | Insoutenable ; injuste ; heures supplémentaires cachées |
| Inventaire de compétences | Montre les lacunes et les risques | Subjectif ; peut devenir un classement |
| Preuve de travail récent | Fiable | Plus d'effort à entretenir |
| Programme de formation centralisé | Cohérence | Lent ; peut ne pas convenir aux équipes |
| Apprentissage choisi par l'équipe | Pertinent ; motivé | Qualité variable ; exige des conseils |

La réponse en prose est de protéger le temps d'apprentissage dans la semaine de travail, d'apprendre surtout par le travail avec quelques cours formels là où ils aident, de fonder la carte des compétences sur des preuves récentes et d'éviter tout usage des données pour classer les gens.

## Questions à discuter avec votre équipe

**1. Qu'avons-nous chacun appris au travail le trimestre dernier, et comment l'avons-nous appris ?**
Partagez brièvement. Remarquez si l'essentiel de l'apprentissage est venu de cours, du travail ou de collègues. L'animateur doit demander ce qui l'a rendu possible et ce qui a gêné. Convenez d'un changement qui augmenterait l'apprentissage utile.

**2. Quelles tâches critiques seuls un ou deux d'entre nous pourraient accomplir, et que se passerait-il en leur absence ?**
Listez-les. Choisissez la plus risquée et planifiez comment répandre la connaissance : travail en binôme, exercice, guide d'exploitation, rotation. Confirmez que le plan n'ajoute pas d'heures supplémentaires cachées pour les experts.

**3. Combien de temps notre dernier nouveau collègue a-t-il mis à faire quelque chose de réel, et qu'est-ce qui l'a ralenti ?**
Demandez-le-lui. Retracez les étapes depuis son premier jour. Discutez de l'accès, de l'environnement, de la documentation et du soutien. Convenez de deux corrections qui aideraient la personne suivante.

**4. Quand un cours ou un certificat a-t-il changé notre façon de travailler ?**
Rappelez des exemples. Demandez ce qui a fait la différence. Si peu viennent à l'esprit, discutez de pourquoi. Décidez quel apprentissage vaut la peine de continuer et lequel abandonner.

**5. Quelle leçon d'un incident récent une autre équipe a-t-elle réellement employée ?**
Regardez le registre des leçons. Si rien n'a voyagé, demandez comment partager plus efficacement : une communauté, un court exposé, un changement de norme. Choisissez une leçon à partager ce mois-ci.

**6. Notre temps d'apprentissage est-il réel, et qu'est-ce qui le protège ?**
Comparez le plan avec ce qui s'est passé. Discutez de ce qui le prend : incidents, échéances, attentes. Convenez d'une règle pour le protéger, comme traiter une demande urgente comme une escalade vers un décideur.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison apprennent surtout en construisant. Elles devraient planifier le temps d'apprentissage, travailler en binôme et en rotation sur le travail critique, partager ce qu'elles apprennent et participer aux communautés de pratique. Elles devraient demander le temps et les outils dont elles ont besoin et traiter l'apprentissage comme faisant partie du bien livrer.

### Équipes de service et d'exploitation

Les équipes d'exploitation ont besoin de largeur, car elles couvrent les absences et les incidents à toute heure. Elles devraient former de façon croisée sur les tâches critiques, employer des exercices et des exercices de simulation, et consigner ce qu'elles apprennent dans des guides d'exploitation et des revues. Leur rythme d'astreinte doit laisser de la place au repos et à l'apprentissage.

### Direction et gouvernance

Les dirigeants décident si l'apprentissage est une priorité ou une après-pensée. Ils devraient protéger le temps d'apprentissage dans les plans, financer les corrections que révèle l'accueil, éviter les objectifs d'heures de formation ou de certificats et soutenir les communautés. La gouvernance devrait ne suivre la certification que là où elle est exigée et regarder la preuve de capacité en usage.

### Clients et utilisateurs

Les utilisateurs gagnent à des équipes qui connaissent profondément leurs services et suivent le changement : corrections plus rapides, moins d'erreurs répétées et meilleurs conseils. Ils remarquent quand les personnes qui les aident semblent nouvelles dans le système ou quand le même problème revient. Ils peuvent aussi enseigner aux équipes leur propre travail, et leur implication est une forme d'apprentissage.

## En pratique : un exemple d'ITIL agile

Le groupe d'exploitation technologique d'une banque régionale compte six équipes qui font tourner les services bancaires de base, les paiements et les canaux numériques. Les chiffres ci-dessous sont illustratifs.

Le tableau de bord de formation du groupe montre une moyenne de 24 heures de formation par personne l'an dernier et 70 certificats obtenus, et le directeur de la formation est satisfait. La responsable de l'exploitation pose une autre question : les équipes peuvent-elles s'en sortir quand des personnes clés sont absentes ? Elle demande à chaque équipe de cartographier ses tâches critiques et qui a exécuté chacune au cours des six derniers mois. Sur 46 tâches critiques, seules 19 avaient été exécutées par deux personnes ou plus, soit une profondeur de formation croisée de 41 pour cent. Quatorze tâches n'avaient été faites que par une seule personne. Le délai avant la première contribution des huit dernières embauches a une médiane de 41 jours, avec un 85e percentile de 67, passés surtout à attendre les accès et à chercher la documentation. Un court suivi auprès de 38 personnes ayant terminé des cours a révélé que 31 pour cent disaient avoir appliqué l'apprentissage dans les 90 jours. Les équipes rapportent que le temps d'apprentissage est d'ordinaire la première chose annulée dans une semaine chargée, et que le temps protégé réellement employé est d'environ 3 pour cent de la capacité.

Le groupe apporte quatre changements avec les équipes. Chaque équipe planifie un bloc d'apprentissage permanent d'environ 8 pour cent de la capacité, et une règle selon laquelle une annulation doit être convenue avec le responsable de l'équipe et consignée. Des plans de travail en binôme et de rotation visent les 14 tâches à personne unique, en commençant par les cinq plus critiques, avec des exercices chaque trimestre. Une liste de vérification d'accueil et un parrain nommé réduisent le retard d'accès, et le plan de la première semaine inclut un petit changement réel. Les cours sont choisis par les équipes dans une liste restreinte, et une question de suivi part après 60 jours. Une communauté interéquipes sur la fiabilité se réunit chaque mois, et les leçons des revues d'incidents y sont partagées avec une note de qui les a employées.

Un an plus tard, la profondeur de la formation croisée est de 78 pour cent, le délai médian avant la première contribution est de 19 jours, le taux d'application de la formation est de 64 pour cent et le temps d'apprentissage protégé employé est d'environ 7 pour cent de la capacité. Six leçons tirées de revues ont été adoptées par d'autres équipes. Le directeur de la formation demande un objectif de 40 heures de formation par personne. La responsable de l'exploitation offre à la place des mesures de profondeur de formation croisée, d'application et de délai avant la première contribution, expliquant que les heures peuvent être atteintes par des séances dont personne ne se sert. La décision est consignée, et le tableau de bord abandonne les heures moyennes de formation. La couverture des certifications n'est suivie que pour les rôles où les régulateurs l'exigent.

## Perspective sectorielle

**Startup.** Les gens portent plusieurs casquettes et apprennent vite sous pression. Protégez un peu de temps pour l'apprentissage, faites du travail en binôme la valeur par défaut et guettez les points uniques de connaissance. Embaucher des généralistes aide. Ne bâtissez pas trop tôt un service de formation.

**Petite entreprise.** Les budgets sont serrés, et une seule personne peut couvrir beaucoup. Employez un apprentissage peu coûteux : documentation des fournisseurs, événements communautaires, mentorat d'un conseiller externe de confiance et formation croisée là où c'est possible. Assurez-vous qu'au moins une autre personne peut traiter les tâches critiques, même grossièrement.

**Grande entreprise.** L'échelle permet des programmes formels, des communautés et des parcours de carrière. Elle invite aussi à des exigences uniformes qui ne conviennent à personne. Fournissez un budget et une plateforme d'apprentissage communs, laissez les équipes choisir, soutenez les communautés internes et mesurez la capacité par équipe. Alignez la certification sur des besoins réels.

**Gouvernement et secteur public.** Les pénuries de compétences, les règles de marchés publics et les cadres de la fonction publique façonnent le développement. La certification peut être une exigence formelle pour certains rôles. Investissez dans l'apprentissage en alternance et la mobilité interne, conservez la connaissance quand les contrats se terminent et employez des communautés entre organismes pour partager la pratique (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le temps lui-même, qui est le coût principal, plus les budgets pour les cours et les événements, l'effort d'entretien de la carte des compétences, le temps de mentorat et un peu d'outillage pour les communautés. Le travail en binôme et la rotation coûtent du débit à court terme.

Les retours sont la résilience face à l'absence et au roulement, un accueil plus rapide, moins d'erreurs répétées, une résolution plus rapide des problèmes et une meilleure fidélisation des gens qui grandissent. Bâtissez le dossier à partir de vos propres données : le nombre de tâches critiques connues d'une seule personne, les jours que les nouvelles recrues mettent à devenir productives et le coût de ce temps, les incidents prolongés par des experts absents et le roulement parmi le personnel qui dit n'avoir aucune place pour grandir. Évitez de citer des estimations publiées du rendement de la formation à moins de pouvoir retracer leur méthode et leur adéquation. Le coût de ne pas apprendre apparaît tard, sous forme de compétences périmées et de services fragiles (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Les heures de formation comme objectif.** Cela achète la présence. Mesurez l'application et la capacité.
- **Les certificats comme preuve de compétence.** Ils montrent une évaluation à un moment donné. Employez d'autres preuves.
- **Apprendre sur son temps personnel.** Cela cache des heures supplémentaires et c'est injuste. Protégez le temps dans la semaine de travail.
- **Des inventaires de compétences autoévalués employés pour classer.** Les gens gonflent ou cachent. Fondez les cartes sur le travail récent et gardez-les au niveau de l'équipe.
- **Experts héroïques.** Une personne qui sait tout est un risque et un fardeau. Répandez la connaissance.
- **Des cours choisis de façon centrale pour tous.** Ils conviennent à peu de gens. Laissez les équipes choisir avec des conseils.
- **Annuler l'apprentissage en premier.** Cela enseigne que l'apprentissage est optionnel. Protégez-le et traitez les exceptions comme des décisions.
- **Des leçons qui restent locales.** L'organisation répète ses erreurs. Partagez-les et suivez leur usage.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Temps et soutien | Apprentissage sur son temps personnel | Budget de formation occasionnel | Temps protégé dans le plan de capacité ; apprentissage choisi par l'équipe | Temps employé suivi ; annulations traitées comme des décisions ; budgets suivant les besoins des équipes | Temps d'apprentissage et parcours de croissance coordonnés entre équipes et partenaires |
| Répandre la connaissance | Les experts portent le travail | Une documentation existe | Tâches critiques cartographiées selon des preuves récentes ; travail en binôme et exercices | Profondeur de formation croisée gérée ; accueil mesuré et amélioré | La connaissance circule librement entre équipes, fournisseurs et communautés |
| Évaluer l'apprentissage | La présence compte | Cotes de satisfaction des cours | Suivis d'application ; certification là où elle est exigée | Leçons partagées et employées entre équipes ; formation changée selon les résultats | Résultats d'apprentissage reliés aux résultats de service et partagés avec les partenaires |

## Liste de vérification

- [ ] Le temps d'apprentissage est planifié dans la capacité de l'équipe et suivi comme employé.
- [ ] Les tâches critiques sont listées, avec qui a exécuté chacune récemment.
- [ ] Chaque tâche critique a un plan pour atteindre au moins deux personnes exercées.
- [ ] Le délai avant la première contribution est mesuré pour les nouveaux membres et traité.
- [ ] Les communautés de pratique et le mentorat sont soutenus et volontaires.
- [ ] La formation est suivie d'une question sur l'application.
- [ ] La certification n'est suivie que pour les rôles ayant une exigence véritable.
- [ ] Un registre de leçons consigne le partage et l'usage entre équipes.
- [ ] Les données de compétences sont gardées au niveau de l'équipe et jamais employées pour classer des individus.
- [ ] L'apprentissage ne dépend jamais d'heures non rémunérées.

## Prompts d'IA

**Bâtissez une carte des tâches critiques.**

```text
Notre équipe exploite [services]. Listez les tâches critiques qui doivent être
faites de façon fiable (par exemple restaurer à partir d'une sauvegarde,
renouveler des identifiants, coordonner un incident majeur, déploiements
risqués) et suggérez des preuves que nous pouvons employer pour consigner qui a
fait chacune au cours des six derniers mois. Proposez un tableau simple et une
façon de le revoir avec l'équipe sans classer les gens. N'inventez pas nos
tâches au-delà de ce que je décris. Énumérez vos hypothèses.
```

**Concevez un plan d'accueil.**

```text
Concevez un plan d'accueil pour les 30 premiers jours d'un nouveau [role] qui
rejoint une équipe qui exploite [services]. Incluez la mise en place des accès,
un parrain nommé, un petit changement réel d'ici la fin de la première semaine,
des points de suivi réguliers et ce qu'il faut mesurer (délai avant la première
contribution et ce qui l'a ralenti). Gardez-le soutenant et réaliste. Énumérez
vos hypothèses et les éléments à adapter à notre contexte.
```

**Faites le suivi d'une formation.**

```text
Rédigez un court ensemble de questions de suivi à envoyer aux gens 60 jours
après qu'ils ont terminé [course or event]. Demandez s'ils l'ont appliquée et
comment, ce qui a gêné et ce qui aiderait, d'une manière qui peut être agrégée
au niveau de l'équipe sans identifier d'individus. Suggérez comment lire les
réponses et ce qu'il faut changer. Énumérez vos hypothèses.
```

**Planifiez un effort de diffusion des connaissances.**

```text
La tâche [description] n'est faite que par [one or two people] dans notre
équipe. Proposez un plan pour la répandre par le travail en binôme, un exercice
et de la documentation, avec un calendrier réaliste qui protège la charge de ces
personnes. Suggérez comment nous saurons que le plan a fonctionné, à l'aide de
preuves de travail récent. Énumérez vos hypothèses et vos risques.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de compétences ou d'apprentissage.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'apprentissage mesure la capacité en usage et porte son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Mesurez la capacité en usage : qui a fait récemment les tâches critiques, et la rapidité avec laquelle les nouveaux contribuent.
- Protégez le temps d'apprentissage dans la semaine de travail, à l'intérieur d'un rythme qui peut être soutenu.
- Répandez la connaissance à dessein par le travail en binôme, la rotation, les exercices et les communautés.
- Faites le suivi de l'application de la formation, et traitez les certificats comme des preuves, non comme des démonstrations.
- Partagez les leçons entre équipes et suivez leur usage.
- Gardez les données de compétences au niveau de l'équipe, et ne classez jamais les individus.

## Références et lectures complémentaires

1. Senge, P. M., *The Fifth Discipline: The Art and Practice of the Learning Organization*, Doubleday, 1990.
2. Wenger, E., *Communities of Practice: Learning, Meaning, and Identity*, Cambridge University Press, 1998.
3. Polanyi, M., *The Tacit Dimension*, Doubleday, 1966.
4. Ericsson, K. A., Krampe, R. T., and Tesch-Römer, C., "The role of deliberate practice in the acquisition of expert performance," *Psychological Review*, 100(3), 1993.
5. Kirkpatrick, D. L., and Kirkpatrick, J. D., *Evaluating Training Programs: The Four Levels*, 3rd ed., Berrett-Koehler, 2006.
6. Skelton, M., and Pais, M., *Team Topologies*, IT Revolution, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Professional certification](https://en.wikipedia.org/wiki/Professional_certification).
9. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
10. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
11. Wikipedia, [T-shaped skills](https://en.wikipedia.org/wiki/T-shaped_skills).
12. Wikipedia, [Cross-training (business)](https://en.wikipedia.org/wiki/Cross-training_(business)).
13. Wikipedia, [Community of practice](https://en.wikipedia.org/wiki/Community_of_practice).
14. Wikipedia, [Mentorship](https://en.wikipedia.org/wiki/Mentorship).
15. Wikipedia, [Learning organization](https://en.wikipedia.org/wiki/Learning_organization).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
