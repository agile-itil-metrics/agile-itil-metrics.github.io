# Métriques des risques et des contrôles

**Le travail sur les risques est une conversation continue sur ce qui pourrait mal tourner et sur ce que nous faisons à ce sujet ; gardez donc le registre court et vivant, testez les contrôles qui comptent et méfiez-vous de tout chiffre qui fait paraître l'incertitude bien rangée.**

## Résumé et motivation

Chaque changement apporté à un service comporte un risque, et le laisser tel quel aussi. La [gestion des risques](https://en.wikipedia.org/wiki/Risk_management) est l'identification, l'évaluation et la priorisation des risques, suivies d'une action coordonnée pour les réduire, les accepter, les transférer ou les éviter. ITIL traite le risque comme un fil qui traverse chaque pratique : la maîtrise des changements décide de l'examen que mérite un changement, la continuité de service prépare les perturbations, la sécurité de l'information protège contre les menaces. Les façons de travailler agiles et DevOps réduisent le risque autrement. Des petits changements livrés en continu, avec un retour rapide et la capacité de revenir en arrière, rendent chaque changement moins dangereux et font apparaître plus tôt les problèmes.

Les deux visions se rencontrent dans les métriques. Une équipe qui livre en continu a quand même besoin de connaître ses principaux risques, leurs responsables et si les contrôles sur lesquels elle compte fonctionnent. Une fonction de risque qui insiste sur une lourde approbation a quand même besoin de preuves que ses contrôles réduisent les dommages et ne se contentent pas de ralentir les gens. Ce sujet donne les mesures pour les deux, et il s'appuie sur les pratiques décrites dans les sujets voisins sur la sécurité et l'audit (voir le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités, et le sujet 8.3, Métriques de conformité et d'audit).

Quatre termes reviennent.

- **Risque :** un événement ou une condition incertains qui, s'ils se produisent, affectent les objectifs. Il a une cause, un événement et une conséquence, ainsi qu'une probabilité et un impact qui sont d'ordinaire estimés, non connus.
- **Registre des risques :** la liste des risques identifiés avec leurs responsables, leurs cotations et leurs réponses. Un [registre des risques](https://en.wikipedia.org/wiki/Risk_register) est un outil de travail quand il est à jour et lu, et un artefact de conformité quand il ne l'est pas.
- **Contrôle :** une action ou un mécanisme qui réduit un risque, comme une revue, un test automatisé, une approbation, une séparation des tâches ou une alerte de supervision. L'ensemble des contrôles sur lesquels une organisation compte est son système de [contrôle interne](https://en.wikipedia.org/wiki/Internal_control).
- **Indicateur clé de risque (KRI) :** une mesure qui signale un changement du niveau d'un risque avant que la perte survienne. Un [indicateur clé de risque](https://en.wikipedia.org/wiki/Key_risk_indicator) est utile quand il précède un événement et que quelqu'un agit dessus.

La quantification du risque a des faiblesses bien connues. Une [matrice de risques](https://en.wikipedia.org/wiki/Risk_matrix), qui place la probabilité contre l'impact sur une grille de cellules colorées, est largement employée et largement critiquée : les cotations sont subjectives, des risques différents peuvent tomber dans la même cellule pour des raisons différentes, et l'arithmétique qui multiplie des scores ordinaux n'a pas de base solide. Les événements rares et graves, parfois décrits par la [théorie du cygne noir](https://en.wikipedia.org/wiki/Black_swan_theory), sont particulièrement difficiles à coter. La réponse honnête est d'employer la matrice comme aide à la conversation, de montrer des plages et de l'appuyer sur des preuves au sujet des contrôles et des incidents. Le cadre des trois lignes de défense, qui sépare les équipes qui détiennent le risque, celles qui le supervisent et l'assurance indépendante, offre une structure pour les rôles, et il fonctionne mieux quand la première ligne, les équipes de livraison et d'exploitation, détient réellement ses risques.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique de façon particulière aux rapports de risque. Quand une cotation rouge attire l'examen, les gens cotent les risques en orange. Quand un risque clos est un succès, les gens closent des risques sans les traiter (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Garder le registre court et à jour.** Quelques risques bien détenus et revus valent mieux que des centaines qui ne le sont pas.
- **Faire détenir ses risques par la première ligne.** Les personnes les plus proches du travail le connaissent le mieux.
- **Tester les contrôles sur lesquels on compte.** Un contrôle qui n'a jamais été testé est un espoir.
- **Préférer les indicateurs avancés sur lesquels quelqu'un agit.** Un indicateur sans plan de réponse est de la décoration.
- **Montrer des plages et des preuves, non une fausse précision.** Les cotations sont des estimations.
- **Réduire le risque en rendant le changement petit et réversible.** La livraison continue avec retour arrière rapide est un contrôle.
- **Parler du risque sans blâme.** Le signalement honnête est la matière première de toute la pratique.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Actualité des revues de risques | Part des risques ouverts revue par leur responsable dans l'intervalle convenu | risques revus dans l'intervalle / risques ouverts | pourcentage | Dates de revue du registre des risques | Gestion des risques ; amélioration continue | Risques revus dans les conversations de planification et de revue | Mensuelle |
| Couverture des responsables | Part des risques ouverts dotés d'un responsable nommé et actuel qui a accepté la responsabilité | risques avec un responsable actuel confirmé / risques ouverts | pourcentage | Registre des risques joint à l'annuaire des personnes | Gestion des risques | Risques détenus par l'équipe dans le backlog | Mensuelle |
| Couverture des tests de contrôles | Part des contrôles clés dont le fonctionnement est testé dans le cycle requis | contrôles clés testés dans le cycle / contrôles clés | pourcentage | Registre des contrôles et enregistrements de tests | Gestion des risques ; gestion de la sécurité de l'information | Contrôles automatisés dans la chaîne de livraison | Trimestrielle |
| Taux d'efficacité des contrôles | Part des contrôles testés jugés fonctionner comme conçu | contrôles jugés efficaces / contrôles testés | pourcentage | Résultats de tests | Gestion des risques ; amélioration continue | Tests automatisés qui réussissent pour les bonnes raisons | Trimestrielle |
| Délai de réponse au dépassement d'un KRI | Temps entre le franchissement de son seuil par un indicateur clé de risque et une décision consignée | médiane et 85e percentile des heures ou jours entre le dépassement et la décision | heures ou jours | Supervision des KRI et journal des décisions | Gestion des risques ; supervision et gestion des événements | Réaction à un signal de production | Mensuelle |
| Ponctualité des plans de traitement | Part des traitements de risques achevés à leur date promise | traitements achevés à la date / traitements échus dans la période | pourcentage | Registre des risques et suivi des actions | Gestion des risques ; amélioration continue | Actions d'amélioration livrées | Trimestrielle |
| Part des changements fondés sur le risque | Part des changements approuvés par des voies fondées sur le risque avec les preuves de contrôle jointes | changements approuvés par une voie fondée sur le risque avec les preuves requises / changements de la période | pourcentage | Enregistrements de changements | Maîtrise des changements ; gestion des risques | Changements livrés en continu avec des contrôles automatisés | Mensuelle |

Définissez l'intervalle de revue et la liste des contrôles clés dans le registre. Un contrôle n'est « testé » que lorsque le test examine des preuves de fonctionnement, non seulement la conception. L'horloge du KRI démarre quand l'indicateur franchit son seuil, tel que consigné par le système de supervision, et s'arrête à une décision écrite, qui peut être d'agir, d'accepter ou de changer le seuil. N'excluez du dénominateur les risques en cours de retrait qu'après une décision de clôture consignée.

## Recommandations

### Garder vivante la conversation sur les risques

**1. Gardez le registre court et écrivez chaque risque sous une forme standard.** Employez une phrase de la forme « En raison de [cause], [événement] peut se produire, entraînant [conséquence]. » Limitez le registre aux risques qui changeraient une décision ou un plan. Fusionnez les doublons, scindez les risques vagues et retirez ceux qui sont passés. Une liste de quelques dizaines de risques dont les gens discutent vaut plus que mille que personne ne lit.

**2. Attribuez chaque risque à un responsable qui peut agir.** Le responsable est la personne qui a autorité sur la réponse, d'ordinaire dans l'équipe de livraison ou d'exploitation, non dans la fonction de risque. Confirmez la responsabilité avec la personne, et revoyez-la quand les gens changent de rôle. La couverture des responsables mesure cela, et un risque sans responsable est un constat.

**3. Passez les risques en revue dans les conversations qui ont déjà lieu.** Soulevez les principaux risques en planification, en revue et dans les revues d'incidents, au lieu de créer une réunion distincte. L'habitude agile de réfléchir régulièrement à la manière de devenir plus efficace est un foyer naturel pour la question « qu'est-ce qui pourrait nous nuire ensuite ? » Consignez le résultat dans le registre.

**4. Associez les cotations à des preuves et à des plages.** Pour chaque risque important, consignez ce qui vous fait penser qu'il est probable ou grave : incidents, quasi-incidents, résultats de tests, historique de fournisseurs. Donnez une plage de probabilité et d'impact là où vous le pouvez, et dites votre degré d'incertitude. Ne combinez pas des scores ordinaux en un nombre unique pour le traiter comme une mesure. Si vous employez une matrice, servez-vous-en pour lancer une discussion (voir le sujet 1.6, Culture statistique pour les métriques de service).

### Tester les contrôles

**5. Nommez les contrôles clés et ce à quoi chacun sert.** Pour chaque risque majeur, listez les quelques contrôles sur lesquels vous comptez, et à quoi ressemblerait la défaillance de chacun. Un registre de contrôles qui liste des centaines d'activités mineures cache ceux qui comptent. Incluez les contrôles automatisés de la chaîne de livraison, comme les tests, les vérifications de politique et les portes d'approbation.

**6. Testez le fonctionnement, pas seulement la conception.** Une revue de conception demande si le contrôle fonctionnerait s'il était exploité. Un test de fonctionnement demande s'il a été exploité et a fonctionné dans la période, en examinant des échantillons de preuves. Planifiez les tests sur un cycle qui correspond au risque, consignez les résultats et donnez suite aux échecs. Là où c'est possible, automatisez les preuves, pour que les tests aient lieu en continu.

**7. Traitez les défaillances de contrôles comme de l'information.** Un test échoué est le système de contrôle qui fonctionne. Consignez l'échec, demandez pourquoi et corrigez la cause. Le taux d'efficacité des contrôles devrait se lire avec le suivi : des échecs trouvés et corrigés rapidement sont plus sains qu'un taux parfait issu de tests faibles.

**8. Employez l'assurance indépendante là où elle ajoute de la valeur.** L'audit interne ou un examinateur indépendant peut tester les contrôles que la première ligne détient et que la deuxième supervise. L'indépendance protège contre le fait de noter son propre travail. Coordonnez-vous pour que les équipes ne soient pas testées par trois groupes pour la même chose.

### Bien employer les indicateurs et les décisions

**9. Choisissez quelques indicateurs avancés par risque majeur.** Un indicateur clé de risque devrait être peu coûteux à mesurer, lié à une cause et associé à un seuil et à une réponse. Par exemple, l'âge de la plus ancienne vulnérabilité critique signale le risque de sécurité, et la part des changements nécessitant un traitement d'urgence signale le risque de changement. Définissez qui regarde l'indicateur et ce qu'il fera au seuil (voir le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités).

**10. Consignez la décision à chaque dépassement.** Quand un indicateur franchit un seuil, quelqu'un décide : agir, accepter ou ajuster le seuil. Écrivez la décision et la raison. Cela bâtit un historique qui montre si les seuils sont bien fixés et si la réponse est opportune.

**11. Faites de l'approbation fondée sur le risque la valeur par défaut du changement.** Dans un contexte de livraison continue, remplacez les comités d'approbation généralisée par des voies fondées sur le risque : contrôles automatisés et revue par les pairs pour les changements standard à faible risque, et revue plus complète pour les quelques changements à haut risque (voir le sujet 4.3, Métriques de maîtrise des changements). Joignez la preuve que les contrôles ont tourné. Cela réduit ensemble le risque et le retard, car de petits changements avec des preuves automatisées sont plus sûrs que de gros changements avec une signature.

**12. Apprenez des pertes et des quasi-incidents.** Après les incidents et les frôlements, mettez à jour le registre : le risque y était-il, était-il bien coté, le contrôle a-t-il fonctionné ? Employez les réponses pour améliorer les deux. La boucle entre les événements et le registre est ce qui garde le registre honnête (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Actualité des revues de risques | Marquer des risques comme revus sans discussion ; changer l'intervalle | Échantillonner les revues pour leur substance ; intervalle fixe dans le registre |
| Couverture des responsables | Attribuer des responsables à leur insu ; nommer une personne haut placée sans autorité | Confirmation du responsable ; vérifier que les responsables peuvent agir sur la réponse |
| Couverture des tests de contrôles | Tester les contrôles faciles ; compter des revues de conception comme des tests de fonctionnement | Liste des contrôles clés fixée par un tiers ; type de test consigné |
| Taux d'efficacité des contrôles | Tester de petits échantillons ; choisir des échantillons qui réussissent | Méthode d'échantillonnage indépendante du responsable ; taille d'échantillon consignée |
| Délai de réponse au dépassement d'un KRI | Changer le seuil après un dépassement ; consigner une décision sans contenu | Journal des changements de seuil ; échantillon du contenu des décisions |
| Ponctualité des plans de traitement | Fixer des dates faciles ; redéfinir l'achèvement | Dates convenues avec le responsable à l'approbation ; vérifier que la cotation du risque a bougé |
| Part des changements fondés sur le risque | Classer des changements comme à faible risque pour éviter la revue ; joindre des preuves qui n'ont pas été produites par des contrôles | Échantillonner la classification au regard des règles ; preuves automatisées issues de la chaîne de livraison |

Une lecture saine est un registre court dont les gens débattent, des responsables qui connaissent leurs risques, des contrôles testés dont certains échecs sont trouvés et corrigés, des indicateurs qui mènent à de vraies décisions et moins d'approbations lourdes pour les petits changements.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Matrice de risques | Rapide, visuelle, point de départ de conversation | Subjective ; fausse précision ; arithmétique ordinale |
| Plages quantifiées | Plus honnête sur l'incertitude | Exige des données et de la compétence ; effort |
| Lourds comités d'approbation | Contrôle visible | Lents ; encouragent le regroupement des changements |
| Contrôles automatisés fondés sur le risque | Rapides et cohérents | Exigent de l'ingénierie ; les contrôles automatisés peuvent se tromper |
| La fonction centrale de risque détient les risques | Cohérence | Éloignée du travail ; responsables désengagés |
| Responsabilité de la première ligne | Connaissance et redevabilité | Qualité variable ; exige une supervision |
| Tests périodiques des contrôles | Efficaces pour les contrôles stables | Manquent la dérive entre les tests |
| Supervision continue des contrôles | Preuves opportunes | Effort d'outillage ; bruit |

La réponse en prose est de placer la responsabilité auprès des équipes, d'appliquer une supervision centrale légère et des tests indépendants, d'automatiser les preuves là où c'est possible et d'employer les cotations comme invitations à la conversation.

## Questions à discuter avec votre équipe

**1. Quels sont les trois risques les plus susceptibles de nuire à ce service l'an prochain, et qui détient chacun ?**
Demandez à chaque membre d'écrire trois risques en privé, puis comparez. Le recoupement et les différences sont tous deux instructifs. L'animateur doit consigner qui agirait sur chaque risque. Convenez des trois premiers et confirmez les responsables.

**2. De quel contrôle dépendons-nous le plus, et quand avons-nous vérifié pour la dernière fois qu'il fonctionne ?**
Choisissez un contrôle, comme une règle de revue de code, une sauvegarde ou une étape d'approbation. Retracez la dernière fois qu'une preuve de son fonctionnement a été examinée. Si personne ne le sait, planifiez un test. La conversation montre la différence entre conception et fonctionnement.

**3. Qu'est-ce qui nous ferait passer une cotation d'orange à rouge, et qui le remarquerait ?**
Discutez des indicateurs et des seuils. Demandez si l'équipe a déjà rétrogradé une cotation pour éviter l'attention, et quelle pression l'a causé. Convenez de quelles preuves justifieraient un changement, et de la façon de faire du rouge une chose sûre à dire.

**4. Quelles approbations ralentissent nos changements sans réduire le risque ?**
Listez les approbations qu'un changement typique exige, et pour chacune demandez quel risque elle traite et si elle a jamais arrêté un changement. Proposez d'en remplacer une par un contrôle automatisé. Convenez des preuves qui montreraient que le changement est sûr.

**5. Quand un contrôle a échoué, comment l'avons-nous appris, et qu'avons-nous fait ?**
Rappelez une défaillance récente. A-t-elle été trouvée par un test, par un incident ou par un auditeur ? Discutez de ce que serait une boucle plus solide. Incluez la façon dont la personne qui l'a trouvée a été traitée.

**6. Quels risques avons-nous acceptés, et quand revoyons-nous cette décision ?**
Listez les risques acceptés et les dates de revue. Vérifiez que chacun a un responsable et une raison. Un risque accepté sans date de revue est un risque que personne ne surveille.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent la plupart des risques opérationnels. Elles devraient tenir une courte liste de leurs propres risques, en discuter en planification et en revue, et intégrer des contrôles à la chaîne de livraison pour que les preuves soient automatiques. Elles gagnent à des voies de changement fondées sur le risque qui laissent couler les changements à faible risque, et elles devraient être honnêtes sur ce qui pourrait mal tourner.

### Équipes de service et d'exploitation

Les équipes d'exploitation font fonctionner les contrôles : sauvegardes, supervision, revues d'accès et tests de rétablissement. Elles devraient conserver les preuves de fonctionnement, tester les contrôles sur un cycle régulier et signaler tôt les dépassements d'indicateurs. Elles supportent le coût des contrôles lourds et devraient dire lesquels apportent peu.

### Direction et gouvernance

Les dirigeants fixent l'appétit pour le risque et décident de la friction acceptable. Ils devraient demander une courte liste des principaux risques avec responsables et preuves, accueillir les cotations rouges, financer les tests de contrôles et soutenir l'assurance indépendante. La gouvernance devrait vérifier que le registre reflète les incidents et les quasi-incidents, et ne devrait pas récompenser les rapports d'apparence ordonnée.

### Clients et utilisateurs

Les utilisateurs supportent les conséquences des risques qui se matérialisent, et les connaissent souvent avant le registre. Ils devraient avoir un moyen de signaler leurs préoccupations, et être informés des risques qui les touchent, dans les limites de la confidentialité. Leur expérience des incidents et des changements est une preuve pour les revues de risques.

## En pratique : un exemple d'ITIL agile

Le groupe numérique d'une compagnie nationale d'énergie exploite la facturation des clients, une application mobile et des intégrations avec les opérations du réseau. Les chiffres ci-dessous sont illustratifs.

Le registre des risques du groupe compte 340 entrées, dernièrement nettoyées il y a trois ans. L'actualité des revues de risques est de 22 pour cent, et 61 risques ont des responsables qui sont partis. La matrice montre 85 risques en rouge, et personne ne lit le rapport. La nouvelle responsable de l'assurance de service propose une remise à zéro. Avec les équipes de livraison, elle réduit le registre aux risques qui changeraient une décision, pour finir avec 38. Elle attribue chacun à un responsable nommé dans l'équipe qui peut agir, et ceux-ci confirment. Elle choisit 12 contrôles clés et teste le fonctionnement de chacun, au lieu de revoir la conception. Cinq échouent : deux restaurations de sauvegardes n'avaient jamais été testées, une revue d'accès avait été sautée, et deux approbations de changements avaient été signées sans preuve de test.

L'équipe corrige les échecs et remplace le comité d'approbation des changements pour les changements standard par des voies fondées sur le risque. Les tests automatisés et la revue par les pairs sont les contrôles, et la chaîne de livraison joint les preuves à l'enregistrement du changement. Chaque risque majeur reçoit un ou deux indicateurs avancés avec seuils et réponses. Pour le risque d'une longue panne de facturation, les indicateurs sont l'âge de la plus ancienne vulnérabilité critique et le nombre de restaurations de sauvegardes échouées dans le trimestre. Le premier trimestre montre des responsables qui confirment les 38 risques, une actualité des revues de 91 pour cent, un taux d'efficacité des contrôles de 7 sur 12 au premier test et de 12 sur 12 après corrections, et un délai médian de réponse aux dépassements de KRI de 2 jours. La part des changements passant par des voies fondées sur le risque est de 64 pour cent.

Le directeur des risques demande que le nombre de risques rouges baisse de moitié en un an. La responsable de l'assurance de service propose de suivre la ponctualité des plans de traitement et l'efficacité des contrôles, et explique que le nombre de risques rouges peut baisser par reclassement, et qu'elle préfère voir des cotations rouges honnêtes. La décision est consignée, et le rapport du trimestre suivant inclut les décisions échantillonnées derrière chaque rétrogradation.

## Perspective sectorielle

**Startup.** Les risques tiennent surtout à l'épuisement de l'argent, à la perte de personnes clés et à une grosse panne. Tenez une liste d'une page des cinq principaux, revoyez-la chaque mois et testez les sauvegardes et les restaurations. Intégrez les contrôles à la chaîne de livraison dès le début, car c'est moins cher que de les ajouter après coup.

**Petite entreprise.** Une poignée de risques dominent : dépendance envers une personne clé, fournisseur unique, rançongiciel et perte de données. Tenez une courte liste avec des responsables, testez les restaurations et gardez à jour l'assurance et les coordonnées. Résistez aux cadres lourds, et empruntez-leur ce qui convient.

**Grande entreprise.** L'échelle appelle une taxonomie commune, un outillage léger pour le registre et les trois lignes de défense en pratique. Faites détenir ses risques à la première ligne, gardez la deuxième ligne petite et consultative, et rendez efficaces les tests indépendants. Évitez les tests dupliqués entre audit, risque et conformité.

**Gouvernement et secteur public.** La gestion des risques est souvent une obligation formelle avec des cadres standard, des comités d'audit et des rapports publics. Alignez-vous sur le cadre exigé, documentez les énoncés d'appétit pour le risque et gardez les preuves. La redevabilité publique rend les cotations rouges honnêtes plus précieuses, et aussi plus difficiles (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le temps des responsables pour revoir les risques, l'effort pour définir les contrôles clés et les tester, l'outillage du registre et de la supervision des indicateurs s'il n'existe pas déjà, et le coût de l'assurance indépendante. Automatiser la collecte des preuves demande un effort d'ingénierie, puis réduit un coût récurrent.

Les retours sont moins de surprises, une approbation des changements plus rapide et plus légère, et une assurance plus crédible. Un registre élagué et des voies de changement fondées sur le risque économisent le temps que consommaient de grands organes d'approbation. Des tests de contrôles échoués trouvés avant un incident préviennent des pertes difficiles à chiffrer. Bâtissez le dossier à partir de vos propres données : le temps passé par approbation de changement avant et après, le nombre de défaillances de contrôles trouvées par des tests plutôt que par des incidents ou des auditeurs, et le coût des incidents passés qu'un contrôle aurait évités. Évitez de citer des statistiques de pertes du secteur sans source et méthode traçables.

## Antimodèles et pièges

- **Un registre qui grossit sans fin.** Personne ne le lit. Élaguez-le jusqu'aux risques qui comptent.
- **Des cotations sans preuves.** Ce sont des opinions en couleur. Joignez preuves et plages.
- **Des responsables de nom seulement.** Le risque repose sur quelqu'un qui ne peut pas agir. Confirmez la responsabilité avec les bonnes personnes.
- **Tester la conception et appeler cela de l'assurance.** Un contrôle qui pourrait fonctionner n'a peut-être pas fonctionné. Testez le fonctionnement.
- **Ne rapporter que le nombre de risques rouges.** Les décomptes baissent par reclassement. Regardez les traitements et les résultats des contrôles.
- **Des comités d'approbation pour chaque changement.** Ils ralentissent les petits changements et enseignent le regroupement. Employez des voies fondées sur le risque.
- **Punir les cotations rouges.** Les risques sont alors cachés. Récompensez l'alerte précoce.
- **Des cultures de risque et de livraison séparées.** Un travail sur le risque fait aux équipes, non avec elles, produit du théâtre de conformité.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Registre et responsabilité | Longue liste périmée | Un registre existe, en partie détenu | Registre court avec responsables de première ligne confirmés et dates de revue | Revues dans les conversations d'équipe ; preuves et plages jointes | Risques partagés entre équipes et fournisseurs avec responsables conjoints |
| Contrôles | Supposés fonctionner | Conception documentée | Contrôles clés nommés ; tests de fonctionnement sur un cycle | Échecs suivis ; preuves automatisées là où c'est possible | Supervision continue des contrôles avec supervision humaine et assurance indépendante |
| Décisions et changement | Approbations par comité | Quelques changements standard préapprouvés | Voies fondées sur le risque avec preuves jointes | Indicateurs avec seuils et décisions consignées ; voies ajustées selon les résultats | Décisions de risque intégrées aux chaînes de livraison dans toute l'organisation et la chaîne d'approvisionnement |

## Liste de vérification

- [ ] Le registre est court, les risques étant écrits sous la forme cause, événement et conséquence.
- [ ] Chaque risque a un responsable de première ligne confirmé qui peut agir.
- [ ] Les risques sont revus dans les conversations régulières de l'équipe.
- [ ] Les contrôles clés sont nommés et testés pour leur fonctionnement sur un cycle énoncé.
- [ ] Les défaillances de contrôles sont consignées, expliquées et corrigées.
- [ ] Chaque risque majeur a un ou deux indicateurs avancés avec seuils et réponses.
- [ ] Les décisions aux dépassements d'indicateurs sont consignées.
- [ ] Des voies de changement fondées sur le risque existent, avec preuves jointes automatiquement là où c'est possible.
- [ ] Les risques acceptés ont un responsable, une raison et une date de revue.
- [ ] Les incidents et les quasi-incidents mettent à jour le registre.

## Prompts d'IA

**Réécrivez des risques sous une forme standard.**

```text
Voici [number] entrées de notre registre des risques : [paste, with sensitive
details removed]. Réécrivez chacune sous la forme « En raison de [cause],
[événement] peut se produire, entraînant [conséquence]. » Signalez les entrées
vagues, en double ou qui sont en réalité des problèmes déjà survenus. Suggérez
lesquelles pourraient être fusionnées ou retirées. Ne les cotez pas. Énumérez
vos hypothèses et ce qu'il faut confirmer avec les responsables.
```

**Concevez un test de contrôle.**

```text
Pour le contrôle [describe, for example quarterly access review for the billing
system], concevez un test de fonctionnement. Incluez les preuves à examiner,
comment choisir un échantillon sans biais, ce qui compte comme réussite ou
échec, comment consigner les résultats et comment automatiser la collecte des
preuves avec le temps. Ne supposez pas d'outils précis. Énumérez vos hypothèses
et les risques de la conception du test.
```

**Proposez des indicateurs avancés pour un risque.**

```text
Risque : [describe in cause, event, consequence form]. Proposez jusqu'à trois
indicateurs avancés peu coûteux à mesurer et liés à la cause, avec une réponse
suggérée à un dépassement de seuil et la façon dont chaque indicateur pourrait
induire en erreur. N'inventez pas de valeurs de seuil ; décrivez comment nous
devrions les calibrer à partir de nos propres données. Énumérez vos hypothèses.
```

**Revoyez un processus d'approbation des changements.**

```text
Notre processus d'approbation des changements pour [type of change] est :
[describe steps, approvers, and typical delays]. Repérez les étapes qui ajoutent
du retard sans réduire le risque, proposez une solution de rechange fondée sur le
risque avec des contrôles et des preuves automatisés, et dites ce que nous
devrions mesurer pour savoir si le risque a monté ou baissé. Ne revendiquez pas
de résultats de recherche. Énumérez vos hypothèses et les décisions qui
demandent l'apport de la direction.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de risque ou de contrôle.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de risque porte son vecteur de détournement, son garde-fou et sa règle de preuve.

## Points clés à retenir

- Gardez le registre des risques court, détenu par les équipes qui peuvent agir et revu dans les conversations qui existent déjà.
- Testez que les contrôles clés fonctionnent, traitez les échecs comme de l'information utile et automatisez les preuves.
- Employez quelques indicateurs avancés avec seuils, réponses et décisions consignées.
- Remplacez l'approbation généralisée par des voies de changement fondées sur le risque appuyées par des preuves automatisées.
- Montrez des plages et des preuves au lieu d'une fausse précision, et employez les matrices pour lancer des conversations.
- Rendez les cotations rouges sûres à donner, et apprenez des pertes et des quasi-incidents.

## Références et lectures complémentaires

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
