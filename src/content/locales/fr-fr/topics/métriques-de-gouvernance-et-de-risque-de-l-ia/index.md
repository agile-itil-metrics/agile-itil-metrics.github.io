# Métriques de gouvernance et de risque de l'IA

**L'usage de l'IA exige la même discipline que tout changement apporté à un service en production : savoir où elle se trouve, qui la détient, quel risque elle comporte, comment elle est testée et changée, et ce qui se passe quand elle tourne mal, avec une supervision que les gens peuvent réellement exercer.**

## Résumé et motivation

L'IA entre dans une organisation par bien des portes. Une équipe adopte un assistant de codage. Un vendeur ajoute une fonction générative à un produit déjà en usage. Un membre du personnel colle un document dans un outil public. Un service bâtit un modèle pour noter des demandes. Chacun est un usage de l'IA avec ses propres bénéfices et risques, et peu sont visibles au même endroit. La gouvernance est l'ensemble des structures, politiques et pratiques qui rendent ces usages connus, redevables et assez sûrs. Les métriques de risque vous disent si la gouvernance fonctionne.

ITIL a les éléments de base : gouvernance du système de valeur de service, gestion des risques, maîtrise des changements, gestion de la sécurité de l'information, gestion des fournisseurs et amélioration continue. Les façons de travailler agiles et DevOps apportent l'habitude du changement petit, contrôlé et réversible, et des contrôles automatisés dans la chaîne de livraison. La gouvernance de l'IA n'a pas besoin d'un univers séparé. Elle a besoin de ces pratiques appliquées à des choses qui se comportent autrement que le logiciel classique.

Qu'est-ce qui est différent avec l'IA ?

- **Le comportement est statistique et peut changer sans changement de code.** Un modèle peut se comporter autrement après une mise à jour du vendeur, un changement de ses entrées ou un changement de l'instruction. Les données qu'il voit en production peuvent s'écarter de celles sur lesquelles il a été testé, un phénomène connu en apprentissage automatique sous le nom de dérive. Un système peut se dégrader silencieusement.
- **Les productions ne sont pas entièrement prévisibles.** Les tests ne peuvent pas couvrir chaque entrée ; l'évaluation se fait donc par échantillonnage et par tests ciblés, non par preuve. Les systèmes peuvent échouer de façons que leurs constructeurs n'avaient pas prévues.
- **Les préjudices peuvent être diffus et inégaux.** Le [biais algorithmique](https://en.wikipedia.org/wiki/Algorithmic_bias) est une erreur systématique qui mène à des résultats injustes pour certains groupes. Il peut venir des données, de la conception ou de l'usage, et peut ne pas apparaître dans les chiffres d'exactitude globale.
- **De nouvelles surfaces d'attaque apparaissent.** L'[injection d'instructions](https://en.wikipedia.org/wiki/Prompt_injection) est une attaque où des instructions cachées dans des données d'entrée manipulent un modèle de langage vers un comportement non voulu. Des modèles peuvent être amenés à révéler des données ou à entreprendre des actions que leurs propriétaires n'avaient pas voulues.
- **La dépendance envers les fournisseurs est profonde.** Beaucoup de capacités d'IA viennent de fournisseurs externes, avec une visibilité limitée sur la manière dont elles sont construites ou changées. Les mesures de fournisseurs comptent davantage (voir le sujet 8.4, Métriques des fournisseurs et des contrats).
- **Les règles émergent et diffèrent selon les lieux.** Les lois, normes et orientations sur l'IA se développent rapidement. La [loi sur l'intelligence artificielle](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) de l'Union européenne adopte une approche fondée sur le risque, avec des obligations qui s'appliquent par phases, et d'autres juridictions suivent des voies différentes. Des normes comme l'ISO/IEC 42001 sur les systèmes de management de l'IA et le cadre de gestion des risques de l'IA du NIST offrent des structures. Les énoncés de ce sujet sur des règles précises sont datés d'octobre 2026 et devraient être revérifiés, et des conseils juridiques devraient guider vos obligations. Le domaine plus large est diversement décrit comme [IA responsable](https://en.wikipedia.org/wiki/Responsible_AI) ou IA digne de confiance, et la question de la façon dont le droit devrait traiter l'IA est l'objet de la [réglementation de l'intelligence artificielle](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

La gouvernance peut échouer de deux façons opposées. Elle peut être si lourde que les équipes l'évitent, et l'usage de l'IA passe dans la clandestinité comme [informatique fantôme](https://en.wikipedia.org/wiki/Shadow_IT). Ou elle peut être un exercice sur le papier, avec une politique et un registre qui ne reflètent pas la pratique. Les buts agiles suggèrent la voie moyenne : implication continue des parties prenantes dans la fixation des règles, approbations petites et rapides pour les usages à faible risque, examen plus profond là où un préjudice est possible, et amélioration continue des contrôles à mesure que l'expérience croît. Des personnes motivées, avec des limites claires et à qui l'on fait confiance pour exercer leur jugement à l'intérieur, signaleront les problèmes. Des gens qui craignent la punition ne le feront pas.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique aux mesures de gouvernance : quand le « pourcentage d'usages de l'IA enregistrés » est un objectif, les registres se remplissent d'entrées que personne ne lit, et les usages réels restent hors de vue (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet s'appuie sur les sujets de risque, de conformité et de sécurité de la partie 8, et sur les sujets précédents de cette partie.

## Principes clés

- **Savoir où l'IA est employée.** Un registre des usages, y compris ceux intégrés aux produits et ceux que le personnel adopte de lui-même, est la fondation.
- **Faire correspondre l'examen au risque.** Léger pour les usages à faible risque, plus profond pour ceux qui ont des conséquences.
- **Traiter les changements de modèles et d'instructions comme des changements.** Ils demandent des tests, une approbation proportionnée au risque et la capacité de revenir en arrière.
- **Évaluer avant et pendant l'usage.** Testez sur des cas réalistes, et continuez de tester en production.
- **Garder une supervision humaine significative.** Une personne doit pouvoir comprendre, questionner et passer outre, et avoir le temps et l'autorité de le faire.
- **Apprendre des incidents sans blâme.** Les défaillances de l'IA sont nouvelles, et le signalement est la manière dont l'organisation apprend.
- **Rendre l'approbation rapide pour les cas sûrs.** Une gouvernance lente chasse l'usage hors de vue.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture du registre des usages de l'IA | Part des usages de l'IA trouvés par des moyens indépendants qui figurent au registre avec un responsable et une classe de risque | usages au registre avec responsable et classe de risque / usages trouvés par découverte indépendante (achats, dépenses, identité, réseau et déclarations du personnel) | pourcentage | Registre, données d'achats et de dépenses, journaux d'identité, sondages | Gouvernance ; gestion des actifs informatiques ; gestion des risques | Travail visible et responsabilité claire | Trimestrielle |
| Actualité de l'évaluation des risques | Part des usages à risque moyen et élevé dotés d'une évaluation des risques dans le cycle requis | usages évalués dans le cycle / usages à risque moyen et élevé | pourcentage | Évaluations des risques | Gestion des risques ; gestion de la sécurité de l'information | Réflexion régulière sur les risques | Trimestrielle |
| Couverture de la maîtrise des changements | Part des changements apportés aux modèles, instructions, outils et sources de données en production qui ont suivi la maîtrise des changements avec les tests requis | changements avec enregistrement de changement, tests et approbation proportionnée au risque / changements détectés | pourcentage | Enregistrements de changements comparés à l'historique des versions et aux notes de version des vendeurs | Maîtrise des changements ; gestion des mises en production et des déploiements | Changements petits, contrôlés et réversibles | Mensuelle |
| Actualité de l'évaluation | Part des usages en production dotés d'une évaluation à jour (exactitude, sécurité et équité là où c'est pertinent) et dont les résultats sont dans la tolérance | usages avec une évaluation dans le cycle et des résultats acceptables / usages en production visés | pourcentage | Enregistrements d'évaluations | Assurance qualité ; gestion des risques | Définition de terminé pour le comportement | Trimestrielle |
| Taux de preuves de supervision humaine | Part des productions ou décisions lourdes de conséquences échantillonnées dotées d'une revue humaine substantielle consignée | éléments échantillonnés avec revue documentée qui aurait pu changer le résultat / éléments échantillonnés | pourcentage | Enregistrements de décisions échantillonnés | Gestion des risques ; gouvernance | Revue avant la mise en production | Mensuelle |
| Taux d'incidents d'IA et délai de confinement | Incidents impliquant l'IA (production préjudiciable, exposition de données, action dangereuse) par usage et temps pour les contenir | incidents par usage en production par trimestre ; médiane et 85e percentile des heures entre la détection et le confinement | incidents ; heures | Enregistrements d'incidents étiquetés IA | Gestion des incidents ; gestion de la sécurité de l'information | Réponse et apprentissage sans reproche | Trimestrielle |
| Actualité de la diligence raisonnable sur l'IA des fournisseurs | Part des fournisseurs offrant des fonctions d'IA dans des services critiques dont l'évaluation propre à l'IA est à jour | fournisseurs avec évaluation de l'IA à jour / fournisseurs critiques ayant des fonctions d'IA | pourcentage | Évaluations des fournisseurs | Gestion des fournisseurs ; gestion des risques | Revue régulière des dépendances | Trimestrielle |

Définissez largement l'« usage de l'IA » dans le registre : modèles que vous construisez, services que vous achetez, fonctions dans des produits et outils employés par le personnel. Les classes de risque et les cycles sont fixés dans la politique. La couverture du registre se mesure par rapport à la découverte indépendante, non par rapport au registre lui-même. La couverture de la maîtrise des changements exige un moyen de détecter les changements : contrôle de version, avis des vendeurs, supervision de la configuration. Les preuves de supervision humaine exigent que la revue ait pu changer le résultat, non qu'un bouton ait été cliqué. Les taux d'incidents décrivent des usages et des systèmes et ne servent pas à coter des personnes.

## Recommandations

### Connaître et classer

**1. Bâtissez le registre en trouvant autant qu'en demandant.** Commencez par un sondage et une politique, puis vérifiez avec les enregistrements d'achats et de dépenses, les journaux d'identité et d'accès, les données de facturation du réseau et du nuage, et les mises à jour de produits des vendeurs. Incluez les fonctions d'IA intégrées à des outils que vous possédez déjà. Attendez-vous à des surprises : les gens emploient des outils que vous n'avez pas approuvés, souvent pour de bonnes raisons. Traitez-les comme de l'information (voir le sujet 7.2, Métriques des actifs logiciels et des licences).

**2. Attribuez un responsable et une classe de risque à chaque usage.** Le responsable est la personne redevable de l'usage et de ses résultats. La classe de risque reflète le dommage si le système défaille : qui est touché, si des décisions sur des personnes sont en jeu, s'il agit de lui-même, quelles données il touche et dans quelle mesure les effets sont réversibles. Employez peu de classes avec des règles claires. Appuyez-vous sur des cadres reconnus, comme le cadre de gestion des risques de l'IA du NIST, l'ISO/IEC 42001 et le droit applicable, et adaptez-les à votre contexte.

**3. Rendez l'approbation proportionnée.** Pour les usages à faible risque, un rapide enregistrement en libre-service avec quelques questions suffit. Pour les usages lourds de conséquences, exigez une évaluation des risques, des résultats d'évaluation, une conception de supervision humaine définie et une validation. Une voie rapide pour la majorité sûre garde les gens à l'intérieur du système, et une voie plus lente pour les quelques cas dangereux leur donne l'examen qui convient.

### Tester et contrôler le changement

**4. Évaluez sur des cas réalistes, avant et pendant l'usage.** Bâtissez un ensemble de cas d'essai qui reflètent de vraies entrées, y compris des cas difficiles et contradictoires, et notez les productions selon des critères écrits. Incluez des contrôles de sécurité et d'équité là où des personnes pourraient être touchées. Relancez les évaluations selon un calendrier et chaque fois que le modèle, l'instruction ou les données changent. Une équipe d'attaque simulée (red team), un groupe qui attaque délibérément le système pour en trouver les faiblesses, est une pratique utile pour les usages à haut risque. Voyez les pratiques d'échantillonnage pour le travail assisté (voir le sujet 10.2, Mesurer le travail assisté par l'IA).

**5. Placez les modèles, les instructions et les outils sous maîtrise des changements.** Versionnez les instructions et les configurations comme du code. Exigez des tests et une approbation proportionnée au risque pour les changements, consignez-les et gardez la capacité de revenir en arrière. Suivez les mises à jour de modèles pilotées par les vendeurs, qui peuvent changer le comportement sans préavis, et convenez avec les fournisseurs de la manière dont vous serez informé. Traitez une mise à niveau de modèle comme un changement qui demande un contrôle (voir le sujet 4.3, Métriques de maîtrise des changements).

**6. Supervisez en production.** Guettez la dérive des entrées et des sorties, la hausse des taux d'erreurs et de modifications, et les schémas inhabituels. Fixez des seuils qui déclenchent une revue. Pour les systèmes qui entreprennent des actions, supervisez les journaux d'actions. La supervision est la manière de trouver les problèmes que les tests ont manqués.

### Garder réelle la supervision humaine

**7. Concevez une supervision qui peut fonctionner.** Une personne qui revoit chaque production d'un système rapide ne peut pas suivre, et une personne à qui l'on demande d'approuver ce qu'elle ne peut pas comprendre n'exerce pas de supervision. Définissez ce que fait l'humain, quelle information il a, combien de temps et quelle autorité de passer outre. Échantillonnez les revues pour vérifier qu'elles sont substantielles. Soyez attentif au biais d'automatisation, la tendance à accepter la production de la machine (voir le sujet 10.1, L'IA dans la mesure de la gestion des services).

**8. Gardez des pistes d'audit.** Consignez les entrées, sorties, versions, décisions et actions de façon à permettre l'enquête, sous réserve des règles de confidentialité et des limites de conservation. Une [piste d'audit](https://en.wikipedia.org/wiki/Audit_trail) vous permet de répondre à ce qui s'est passé et pourquoi. Pour les décisions lourdes de conséquences sur des personnes, considérez quelle explication vous pouvez donner et quelle voie de recours existe (voir le sujet 8.3, Métriques de conformité et d'audit).

**9. Protégez les données et résistez à la manipulation.** Contrôlez les données que les systèmes d'IA peuvent voir et envoyer. Testez l'injection d'instructions et la fuite de données, surtout pour les systèmes qui lisent du contenu externe ou qui ont accès à des outils. Appliquez les principes de moindre privilège employés pour les agents qui agissent (voir le sujet 10.3, Métriques des agents d'IA et des agents conversationnels, et le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités). Considérez la vie privée dès la conception, et associez des spécialistes de la protection des données.

### Réagir et apprendre

**10. Traitez les incidents d'IA comme des incidents.** Définissez ce qui compte : productions préjudiciables ou biaisées, exposition de données, actions dangereuses, erreurs significatives qui atteignent les utilisateurs. Employez votre processus normal d'incidents avec l'étiquette IA, revoyez sans reproche et renvoyez les leçons vers les évaluations et les contrôles. Rendez le signalement facile pour le personnel et les utilisateurs. Le temps de confinement compte autant que pour tout incident (voir le sujet 3.4, Métriques des incidents majeurs).

**11. Gérez l'IA des fournisseurs.** Demandez aux fournisseurs quelles fonctions d'IA ils emploient, comment elles sont testées et changées, comment les données sont traitées et comment les incidents sont signalés. Ajoutez aux contrats des conditions propres à l'IA là où c'est important, y compris l'avis de changements matériels de modèle. Réévaluez les fournisseurs critiques selon un cycle (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

**12. Revoyez la gouvernance elle-même.** Chaque trimestre, vérifiez ce que montrent les mesures : où des usages n'ont pas été enregistrés, quelles approbations ont été trop lentes, quels contrôles n'ont pas attrapé les problèmes. Ajustez la politique et les voies. Associez le personnel et les utilisateurs à la revue. Gardez les règles courtes, claires et à jour, et retirez les contrôles qui ne méritent pas leur coût.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture du registre des usages de l'IA | Enregistrer des usages triviaux pour relever le pourcentage ; dénominateurs limités à ce qui est enregistré | Découverte indépendante pour le dénominateur ; échantillonner la qualité des entrées du registre ; amnistie pour les usages non enregistrés |
| Actualité de l'évaluation des risques | Évaluations superficielles qui réussissent toujours ; évaluer des usages à faible risque | Revoir la profondeur des évaluations ; vérifier que la classe de risque correspond aux critères |
| Couverture de la maîtrise des changements | Ne pas détecter les changements des vendeurs ; consigner les changements après coup | Détection par l'historique des versions et les avis des vendeurs ; enregistrements de changements horodatés avant la mise en production |
| Actualité de l'évaluation | Évaluations sur des cas faciles ; choisir les tolérances après avoir vu les résultats | Ensembles d'essai revus par un tiers indépendant ; seuils fixés d'avance |
| Taux de preuves de supervision humaine | Cliquer sur approuver sans lire ; documenter une revue qui ne pouvait pas changer le résultat | Échantillonner les revues pour leur substance ; erreurs connues semées ; charge des relecteurs |
| Taux d'incidents d'IA et délai de confinement | Ne pas signaler les incidents ; rétrécir la définition | Signalement facile et sans reproche ; comparer aux plaintes des utilisateurs et aux constats d'audit |
| Actualité de la diligence raisonnable sur l'IA des fournisseurs | Questionnaires remplis par le marketing ; évaluations sans preuves | Exigences de preuves pour les fournisseurs critiques ; vérification indépendante |

Une lecture saine est un registre que la découverte indépendante confirme, des évaluations qui correspondent au risque, des changements qui passent par le contrôle, des évaluations tenues à jour, une supervision qui trouve de vraies erreurs, des incidents facilement signalés et rapidement contenus, et des fournisseurs qui partagent ce qu'ils changent.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Approbation centrale de chaque usage de l'IA | Contrôle, cohérence | Lente ; chasse l'usage dans la clandestinité |
| Enregistrement en libre-service avec paliers de risque | Rapide pour la majorité sûre | Exige de bons critères et des vérifications ponctuelles |
| Interdiction des outils publics | Réduit l'exposition des données | Usage clandestin ; bénéfices perdus |
| Outils approuvés avec orientations | Usage visible et gérable | Exige fourniture et soutien |
| Documentation lourde | Preuves pour l'audit | Fardeau ; peut ne pas refléter la pratique |
| Évaluation automatisée dans la chaîne de livraison | Continue, cohérente | Exige de bons ensembles d'essai ; peut manquer de nouvelles défaillances |
| Revue humaine de tout | Sécurité | Ne passe pas à l'échelle ; fatigue |
| Échantillonnage fondé sur le risque | Praticable | Certaines défaillances passent |

La réponse en prose est d'offrir des outils approuvés et une voie rapide pour les usages à faible risque, de concentrer l'examen sur ceux qui ont des conséquences, d'automatiser l'évaluation et la supervision et de garder la supervision humaine là où elle peut vraiment fonctionner.

## Questions à discuter avec votre équipe

**1. Où employons-nous aujourd'hui l'IA sans qu'elle soit sur aucune liste ?**
Demandez honnêtement à l'équipe, et offrez une amnistie. Regardez les outils employés pour rédiger, résumer, coder et analyser, y compris ceux intégrés aux produits. L'animateur doit consigner les usages sans jugement. Convenez de qui les enregistrera et de ceux qui demandent un examen plus attentif.

**2. Si notre usage de l'IA le plus lourd de conséquences commettait une erreur préjudiciable, comment le saurions-nous et que ferions-nous ?**
Parcourez la détection, le confinement, la communication et l'apprentissage. Notez les lacunes de supervision, de responsabilité et d'autorité pour l'éteindre. Convenez d'une amélioration.

**3. Qu'est-ce qui peut changer sous nos pieds sans que personne l'approuve ?**
Listez les modèles, instructions, sources de données et mises à jour de vendeurs. Pour chacun, demandez comment nous saurions qu'il a changé et comment nous le testerions. Convenez d'où ajouter une détection ou un test.

**4. La personne qui revoit la production de l'IA dans notre processus pourrait-elle réalistement attraper une erreur grave ?**
Regardez le volume, l'information, le temps et l'autorité. Testez avec une erreur semée. Si la revue ne peut pas fonctionner, repensez le processus avant d'ajouter davantage d'IA.

**5. Lesquelles de nos règles un collègue occupé trouverait-il faciles à suivre, et lesquelles contournerait-il ?**
Listez les règles actuelles et éprouvez-les sur de vrais flux de travail. Discutez de pourquoi les règles sont contournées. Convenez de changements qui font de la voie sûre la voie facile.

**6. Qu'est-ce que nos fournisseurs nous ont dit de leur IA, et qu'est-ce que nous n'avons pas demandé ?**
Vérifiez les questionnaires et les contrats récents. Repérez les fournisseurs critiques ayant des fonctions d'IA et les lacunes d'information. Convenez de questions pour la prochaine revue.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison bâtissent et adoptent des fonctions d'IA, et elles ressentent la gouvernance comme une friction ou comme une aide. Elles devraient enregistrer tôt les usages, tester sur des cas réalistes, placer les instructions et les modèles sous contrôle de version et concevoir une supervision qui fonctionne. Elles gagnent à une approbation rapide pour les usages à faible risque.

### Équipes de service et d'exploitation

Les équipes d'exploitation font tourner l'IA en production et répondent à ses incidents. Elles devraient superviser la dérive, tenir des journaux d'actions, étiqueter les incidents d'IA, et avoir l'autorité et les moyens d'éteindre un système. Elles emploient aussi l'IA elles-mêmes et devraient suivre les mêmes règles.

### Direction et gouvernance

Les dirigeants fixent l'appétit pour le risque et sont redevables des résultats. Ils devraient financer le registre, l'évaluation et la supervision, accepter que certains usages de l'IA ne passeront pas, demander une découverte indépendante des usages, et suivre les incidents et le délai de confinement. Les organes de gouvernance devraient garder les règles courtes, les revoir régulièrement et veiller à ce que le personnel et les utilisateurs aient une voix.

### Clients et utilisateurs

Les utilisateurs sont touchés par les décisions et les productions de l'IA, souvent sans le savoir. Ils méritent de savoir quand l'IA intervient dans des affaires qui les touchent, de joindre une personne et de contester les décisions. Les plaintes et les recours sont des preuves essentielles de la façon dont la gouvernance fonctionne en pratique.

## En pratique : un exemple d'ITIL agile

La division de technologie et d'exploitation d'une banque régionale adopte une politique d'IA après qu'un membre du personnel a collé des détails de clients dans un outil public. L'équipe de conformité publie un registre et attend que chaque usage y soit listé. Les chiffres ci-dessous sont illustratifs.

Trois mois plus tard, le registre liste 38 usages de l'IA. La responsable du risque technologique vérifie par des moyens indépendants : données d'achats et de dépenses, journaux d'identité montrant des connexions à des services d'IA, données de réseau et un sondage anonyme du personnel. La découverte trouve 94 usages, de sorte que la couverture du registre est de 40 pour cent. Dix-sept sont des fonctions dans des outils que la banque détient déjà sous licence, et douze sont des outils publics employés par le personnel. Sur les 38 usages enregistrés, seuls 14 ont une classe de risque, et les trois usages à plus haut risque, un modèle qui note les alertes de fraude, un agent conversationnel pour les clients et un outil qui résume les plaintes, n'ont eu aucune évaluation depuis un an. Les changements à la configuration du modèle de fraude et aux instructions de l'agent conversationnel sont faits directement par les équipes, et les enregistrements de changements du dernier trimestre couvrent 21 pour cent des changements trouvés dans l'historique des versions. Un échantillon de 60 alertes de fraude écartées par le modèle montre une revue humaine consignée pour 52 d'entre elles, mais un ensemble semé de cinq erreurs connues n'a été attrapé que par un seul relecteur, parce que chaque relecteur traite plusieurs centaines d'alertes par jour. Un incident, où l'agent conversationnel a donné un montant de frais périmé à des clients, a été découvert par une plainte, et il a fallu six jours pour le contenir parce que personne n'avait l'autorité de l'éteindre.

La responsable du risque technologique repense la gouvernance avec les équipes. Un court enregistrement en libre-service de cinq questions place les usages à faible risque au registre en quelques minutes, et une période d'amnistie encourage le personnel à lister les outils qu'il emploie. Les classes de risque reposent sur le préjudice, les données et l'autonomie. Les usages à plus haut risque demandent une évaluation, une évaluation sur des cas réalistes et contradictoires, et une conception de supervision définie. Les modèles, instructions et outils passent sous maîtrise des changements avec des tests proportionnés au risque, et les instructions de l'agent conversationnel sont versionnées avec retour arrière. Le processus d'alertes de fraude est repensé pour que les relecteurs traitent moins d'alertes, mieux priorisées, et des erreurs semées testent leur détection. Un responsable nommé pour chaque usage à haut risque a l'autorité de l'éteindre, et la réponse aux incidents couvre l'IA. Les fournisseurs de nuage et d'IA de la banque sont interrogés sur les fonctions d'IA qu'ils emploient et sur la manière dont les changements sont notifiés.

Deux trimestres plus tard, la couverture du registre par découverte indépendante est de 88 pour cent, tous les usages à haut risque sont évalués et testés dans le cycle, la couverture de la maîtrise des changements est de 84 pour cent, la détection des erreurs semées par les relecteurs monte à 4 sur 5 et le délai médian de confinement d'un incident d'IA est de 3 heures. Le personnel emploie des outils approuvés pour la plupart des tâches. Un cadre supérieur demande un objectif de 100 pour cent de couverture du registre. La responsable du risque technologique propose de suivre la couverture par rapport à la découverte indépendante, l'actualité des évaluations et le traitement des incidents, et explique qu'un registre sans découverte peut atteindre 100 pour cent et manquer quand même le risque. La décision est consignée.

## Perspective sectorielle

**Startup.** La vitesse compte et les risques tiennent surtout à l'exposition des données et aux productions peu fiables. Gardez une courte liste d'outils et d'usages avec des responsables, fixez quelques règles claires sur les données qui peuvent être employées où et versionnez les instructions. Revisitez à mesure que croissent les exigences d'assurance des clients.

**Petite entreprise.** Le personnel emploiera des outils publics. Fournissez une option approuvée, rédigez une règle d'une page sur les données et passez en revue la manière dont les outils sont employés. Interrogez les fournisseurs sur leurs fonctions d'IA, et gardez une trace des cas où l'IA prend des décisions sur des clients ou du personnel.

**Grande entreprise.** L'échelle exige un modèle d'exploitation : registre, paliers de risque, normes d'évaluation, maîtrise des changements et processus d'incidents, intégrés aux fonctions existantes de risque et de sécurité. Employez la découverte indépendante, automatisez l'évaluation dans les chaînes de livraison et alignez-vous sur les normes. Donnez aux équipes une voie rapide.

**Gouvernement et secteur public.** Les décisions qui touchent les citoyens entraînent des obligations de transparence, d'équité et de recours, et les cadres de marchés publics et juridiques façonnent ce qui est permis. Tenez des registres publics des usages à fort impact là où c'est exigé, évaluez l'impact sur les droits, gardez les humains dans la boucle de façon significative et vérifiez le droit et les orientations en vigueur (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts comprennent l'effort pour bâtir et entretenir le registre, l'outillage ou l'analyse de découverte, les évaluations des risques, les ensembles d'évaluation et leurs exécutions, la maîtrise des changements pour les instructions et les modèles, la supervision, la formation et la capacité de réponse aux incidents. La gouvernance ajoute aussi un certain retard pour les usages à plus haut risque. Ces coûts croissent avec le nombre et le risque des usages, ce qui est une raison de garder légère l'approbation des usages à faible risque.

Les retours comprennent les préjudices et expositions évités, moins de surprises dans les audits et les examens réglementaires, une adoption sûre plus rapide grâce à des règles claires, et la confiance des clients et du personnel. Bâtissez le dossier à partir de vos propres données : le nombre d'usages trouvés hors du registre et les données qu'ils touchent, les incidents et leur coût, le temps passé en approbations ponctuelles avant et après, et les constats d'audit. Évitez de citer des statistiques publiées sur les incidents ou les amendes liés à l'IA sans source traçable ni pertinence pour votre contexte. Incluez le coût de ne pas gouverner, qui inclut la possibilité d'atteintes juridiques et de réputation importantes (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Un registre que personne ne vérifie.** La couverture paraît élevée et manque les usages réels. Employez la découverte indépendante.
- **Interdictions générales.** Elles chassent l'usage dans la clandestinité. Offrez des outils approuvés et une voie rapide.
- **Traiter les instructions et les modèles comme une configuration que personne ne détient.** Le comportement change sans qu'on le remarque. Placez-les sous maîtrise des changements.
- **Évaluer une seule fois.** Les systèmes dérivent et changent. Relancez selon un calendrier et lors des changements.
- **Une supervision de nom seulement.** Les relecteurs ne peuvent pas attraper ce qu'ils ne voient pas. Testez avec des erreurs semées et corrigez la charge.
- **Aucune autorité pour éteindre.** Le confinement prend des jours. Nommez des responsables ayant le pouvoir d'arrêter un système.
- **Ignorer l'IA des fournisseurs.** Votre risque inclut le leur. Demandez, contractualisez et réévaluez.
- **Des règles que personne ne peut suivre.** Elles sont contournées. Gardez-les courtes et rendez facile la voie sûre.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Connaître et classer | Aucune vue de l'usage de l'IA | Politique et liste partielle | Registre avec responsable et classe de risque ; découverte indépendante employée pour la couverture | Couverture, actualité des évaluations et délais d'approbation gérés | Vue de registre partagée entre unités et fournisseurs ; classes revues avec les régulateurs et les utilisateurs |
| Tester et changer | Improvisé | Quelques évaluations pour certains usages | Évaluation sur des cas réalistes ; instructions et modèles sous maîtrise des changements | Évaluation continue et supervision de la dérive ; couverture gérée | Évaluation et changement automatisés et fondés sur le risque dans les chaînes de livraison, audités indépendamment |
| Supervision et apprentissage | Confiance en la confiance | Une revue existe en principe | Supervision conçue et échantillonnée ; incidents d'IA étiquetés et revus sans reproche | Tests d'erreurs semées, délai de confinement et évaluations des fournisseurs gérés | Supervision, apprentissage tiré des incidents et politique élaborés avec le personnel, les utilisateurs et les partenaires |

## Liste de vérification

- [ ] Un registre liste les usages de l'IA avec un responsable et une classe de risque, vérifiés par rapport à une découverte indépendante.
- [ ] Une voie rapide existe pour les usages à faible risque, et une voie plus profonde pour ceux qui ont des conséquences.
- [ ] Les usages à plus haut risque ont une évaluation des risques à jour et une conception de supervision définie.
- [ ] Les évaluations sur des cas réalistes et contradictoires sont à jour et relancées lors des changements.
- [ ] Les instructions, modèles, outils et sources de données sont versionnés et sous maîtrise des changements.
- [ ] La supervision en production guette la dérive, les erreurs, les modifications et les actions inhabituelles.
- [ ] La supervision est testée avec des erreurs semées, et la charge des relecteurs est réaliste.
- [ ] Les pistes d'audit permettent l'enquête dans le respect des règles de confidentialité et de conservation.
- [ ] Les incidents d'IA sont étiquetés, revus sans reproche, et les responsables peuvent éteindre les systèmes.
- [ ] Les fournisseurs ayant des fonctions d'IA sont évalués et tenus de notifier les changements matériels.

## Prompts d'IA

**Rédigez une classification des risques pour les usages de l'IA.**

```text
Proposez une classification simple des risques (trois ou quatre niveaux) pour
les usages de l'IA dans [type of organization] fondée sur le préjudice en cas
d'erreur, qui est touché, la participation de décisions sur des personnes,
l'autonomie des actions, la sensibilité des données et la réversibilité. Pour
chaque niveau, énoncez des exemples d'usages, les approbations et preuves
requises et le cycle de revue. N'énoncez pas de conclusions juridiques.
Énumérez vos hypothèses et les points à confirmer avec les spécialistes du
juridique, du risque et de la sécurité.
```

**Concevez un formulaire d'enregistrement.**

```text
Concevez un court formulaire d'enregistrement en libre-service pour les
nouveaux usages de l'IA, de huit questions au plus, qui attribue
automatiquement une classe de risque initiale et achemine les usages à plus haut
risque vers la revue. Couvrez le but, les données, les utilisateurs touchés,
l'autonomie, le vendeur et le responsable. Expliquez comment le garder rapide
pour les cas à faible risque. Énumérez vos hypothèses et les risques de
mauvaise classification.
```

**Planifiez un ensemble d'évaluation.**

```text
Nous employons l'IA pour [task] dans [process]. Aidez à concevoir un ensemble
d'évaluation : types de cas réalistes, cas difficiles et contradictoires,
critères écrits de productions correctes et sûres, contrôles d'équité là où des
personnes sont touchées, taille d'ensemble praticable, fréquence de relance et
changements qui devraient déclencher une relance. Ne prétendez pas qu'un
ensemble est suffisant. Énumérez vos hypothèses et vos limites.
```

**Revoyez un incident d'IA.**

```text
Voici la description d'un incident lié à l'IA : [paste, without personal data].
Rédigez une revue sans reproche : chronologie, comment il a été détecté,
facteurs contributifs (données, instruction, modèle, supervision, fournisseur,
processus), impact, ce qui l'a contenu et actions avec responsables. Suggérez
des changements à l'évaluation, à la supervision et à la maîtrise des
changements. N'imputez de blâme à aucun individu. Énumérez vos hypothèses et vos
questions ouvertes.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de gouvernance ou de risque de l'IA.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de gouvernance de l'IA emploie des preuves indépendantes et porte son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Bâtissez le registre de l'IA par découverte indépendante, et faites correspondre l'examen au risque avec une voie rapide pour les usages sûrs.
- Traitez les modèles, instructions, outils et sources de données comme des changements qui demandent test, approbation et retour arrière.
- Évaluez avant l'usage et pendant l'usage, sur des cas réalistes et contradictoires.
- Concevez une supervision humaine qui peut fonctionner, et testez-la avec des erreurs semées.
- Traitez les incidents d'IA comme les autres incidents, avec revue sans reproche, et donnez aux responsables le pouvoir d'éteindre les systèmes.
- Interrogez les fournisseurs sur leur IA, et gardez les règles courtes et la voie sûre facile.

## Références et lectures complémentaires

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
