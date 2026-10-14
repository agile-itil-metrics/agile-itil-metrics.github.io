# Métriques de continuité de service

**Un plan de rétablissement est une hypothèse tant qu'un exercice ne l'a pas mis à l'épreuve ; les métriques de continuité devraient donc compter ce qui a réellement été rétabli, à quelle vitesse et quelle quantité de données est revenue, et jamais le nombre de plans sur une étagère.**

## Résumé et motivation

La plupart des mesures d'incidents décrivent la mauvaise journée ordinaire : un déploiement échoué, une base de données saturée, un voisin bruyant. La continuité de service décrit la journée rare et grave, quand une région tombe, qu'un entrepôt de données est corrompu, qu'un fournisseur disparaît ou qu'un rançongiciel chiffre tout le parc. La [planification de la continuité d'activité](https://en.wikipedia.org/wiki/Business_continuity_planning) est la discipline qui prépare une organisation à continuer de livrer à des niveaux acceptables à travers de tels événements. Dans ITIL 4, la pratique s'appelle la gestion de la continuité de service, et elle est la vue des services informatiques de ce but plus vaste (voir le sujet correspondant du guide d'accompagnement *Agile ITIL Guide*).

Deux termes portent l'essentiel du poids. L'[objectif de temps de rétablissement](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) est le temps acceptable pour rétablir un service après une perturbation. L'[objectif de point de rétablissement](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) est la quantité acceptable de perte de données, exprimée comme une durée : un RPO d'une heure signifie que perdre la dernière heure d'écritures est tolérable et que perdre plus ne l'est pas. Les deux viennent d'une [analyse d'impact sur l'activité](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), la méthode qui identifie quelles activités comptent le plus, ce qui dépend de quoi et ce que coûte une perturbation. Les objectifs sont des décisions métier avec un prix, car des objectifs plus serrés exigent plus de redondance, plus d'automatisation et plus de temps d'exercice.

La difficulté est qu'un objectif est une promesse sur un événement futur qui n'a pas eu lieu. La preuve honnête est un test. L'équipe a-t-elle rétabli le service dans le RTO lors du dernier exercice ? Les données rétablies respectaient-elles le RPO ? Les étapes du plan étaient-elles les étapes que l'équipe a réellement suivies ? Une métrique de continuité est donc surtout une mesure d'exercices, et la qualité de la mesure dépend du réalisme de l'exercice.

Les équipes agiles et d'ingénierie de la fiabilité des sites (SRE) apportent des habitudes utiles. Leurs systèmes changent chaque semaine ; un plan écrit une fois et classé devient donc périmé en quelques mois. La réponse agile est de garder le rétablissement sous forme de code (par exemple avec l'[infrastructure en tant que code](https://en.wikipedia.org/wiki/Infrastructure_as_code)), de le répéter souvent et de traiter chaque répétition comme une source d'éléments de backlog. L'[ingénierie du chaos](https://en.wikipedia.org/wiki/Chaos_engineering) et les exercices de simulation appliquent la même idée à plus petite échelle : provoquer une panne exprès, de façon contrôlée, et observer ce qui se passe. La vision SRE est décrite dans le livre *Site Reliability Engineering* de Google, et le domaine plus large est résumé dans l'article sur l'[ingénierie de la fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### En quoi les visions diffèrent

- **Vision ITIL.** La gestion de la continuité de service est une pratique qui fixe des objectifs de rétablissement à partir de la BIA, conçoit des plans et les prouve par des tests. Ses produits sont des plans, des rapports d'exercice et des constats consignés. La norme [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) décrit un système de management de la continuité d'activité. À la date d'octobre 2026, vérifiez directement l'édition en vigueur si un client ou un régulateur exige la conformité.
- **Vision agile.** La capacité de rétablissement est une propriété du produit dans la définition de terminé. Une histoire qui ajoute un entrepôt de données n'est pas terminée tant que son chemin de restauration n'a pas été essayé.
- **Vision SRE.** Le travail de fiabilité est budgété et mesuré. Les basculements, les exercices de restauration et les exercices de simulation sont du travail planifié avec des responsables et des constats qui entrent dans le backlog.

Ce sujet couvre sept mesures : le rétablissement au regard des objectifs de temps et de données dans les tests, la couverture et l'actualité des exercices, les restaurations de sauvegardes, la clôture des constats et l'actualité des plans. Les vraies pannes relèvent des métriques d'incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs) et des métriques de disponibilité (voir le sujet 5.3, Métriques de disponibilité). Les objectifs exprimés comme des cibles orientées utilisateur relèvent du sujet sur les indicateurs et les budgets (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Le « temps de rétablissement après un déploiement échoué » du programme de recherche DORA est une horloge bien plus petite (voir le sujet 2.8, Métriques DORA). Les causes profondes révélées par les tests relèvent des sujets sur les problèmes et l'apprentissage (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

Un **palier** est une classe de services regroupés selon la rapidité à laquelle ils doivent revenir. Un **exercice sur table** est une répétition fondée sur la discussion, sans aucun changement de système. Un **exercice de simulation** (game day) est une répétition pratique dans laquelle une équipe provoque ou simule une panne et observe la réponse. Un **constat** est un écart consigné entre le plan et ce qui s'est passé. L'**actualité d'un plan** est la mesure dans laquelle un plan reflète le service tel qu'il est aujourd'hui.

## Principes clés

- **Tester, puis affirmer.** Un RTO ou un RPO n'est validé que par un rétablissement réellement effectué et chronométré. Rapportez côte à côte l'objectif et le dernier résultat démontré.
- **Mesurer le réalisme, pas seulement le succès.** Une restauration d'une base de test vide réussie en quelques minutes dit peu d'une restauration à l'échelle de la production. Consignez à côté du résultat le périmètre et les conditions de chaque exercice.
- **Répartir le parc en paliers et dépenser l'effort selon le palier.** Les services critiques reçoivent des tests fréquents et réalistes. Les services de palier bas reçoivent des contrôles plus légers. Un seul objectif de fréquence pour tout gaspille de l'effort ou manque du risque.
- **Traiter les constats comme le produit d'un exercice.** Le produit précieux d'un exercice de simulation est une liste close d'écarts. Un test sans constat est soit excellent, soit trop doux, et vous devriez savoir lequel.
- **Décrire des services et des rotations, jamais des individus.** Les résultats d'exercice décrivent le système et le plan. Personne n'est classé selon la rapidité avec laquelle il a rétabli un exercice.
- **Montrer chaque exercice comme sa propre ligne.** Il y a peu de tests par service et par an ; les moyennes induisent donc en erreur (voir le sujet 1.6, Culture statistique pour les métriques de service).

## Définitions des métriques

Chaque métrique liste l'horloge ou le comptage, ce qui est exclu et la source de données. Chaque ligne a besoin d'une règle écrite avant qu'on s'y fie. Un « service de palier 1 » ci-dessous désigne un service du plus haut palier de rétablissement défini par votre propre BIA.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de respect du RTO | Part des exercices de rétablissement dans lesquels le service a été rétabli dans son RTO énoncé | exercices avec un temps de rétablissement <= RTO / exercices menés. L'horloge démarre au début déclaré de la panne de l'exercice (heure d'injection ou déclaration du scénario) et s'arrête quand le service passe son contrôle de santé convenu pour des utilisateurs réels ou synthétiques. Les exercices sur table et les exercices sans rétablissement chronométré sont exclus et comptés séparément | pourcentage, avec le nombre d'exercices montré | Rapport d'exercice, chronologie de la supervision, registre des services avec RTO | Gestion de la continuité de service ; gestion de la disponibilité | Résultat d'un exercice de simulation ; temps de rétablissement dans les métriques de livraison | Par exercice ; consolidée chaque trimestre |
| Taux de respect du RPO | Part des exercices de rétablissement dans lesquels la perte de données est restée dans le RPO énoncé | exercices avec une durée de perte de données mesurée <= RPO / exercices qui restaurent des données. La durée de perte de données est le temps entre la dernière écriture présente après le rétablissement et le moment de la panne. Les exercices qui ne restaurent aucun état sont exclus | pourcentage, avec le nombre d'exercices montré | Rapport d'exercice, comparaison des données restaurées avec la source ou le journal d'écritures | Gestion de la continuité de service ; gestion de la sécurité de l'information | Exercice de restauration dans la définition de terminé | Par exercice ; consolidée chaque trimestre |
| Couverture du rétablissement testé | Part des services de palier 1 et de palier 2 qui ont eu un test de rétablissement pratique dans leur intervalle de test convenu | services avec un test qualifiant dans l'intervalle / services concernés. Un test qualifiant est pratique (pas seulement sur table) et rétablit le service dans l'environnement de test ou de production. L'intervalle est fixé par palier | pourcentage, par palier | Registre des services, calendrier et rapports d'exercices | Gestion de la continuité de service ; gestion du catalogue de services | Calendrier des exercices de simulation | Mensuelle |
| Jours depuis le dernier test de rétablissement réussi | Âge du plus récent test de rétablissement réussi pour chaque service critique | date du rapport moins date du dernier test qui a respecté à la fois le RTO et le RPO. Un test échoué ne remet pas l'horloge à zéro. Les services jamais testés sont montrés comme « jamais » et non comme zéro | jours, par service, le plus ancien étant mis en évidence | Rapports d'exercices, registre des services | Gestion de la continuité de service | Calendrier des exercices de simulation ; ancienneté de l'élément de travail | Mensuelle |
| Taux de réussite des restaurations de sauvegarde | Part des restaurations tentées à partir d'une sauvegarde qui se sont terminées avec des données vérifiées et utilisables | restaurations terminées qui ont passé un contrôle de vérification des données / restaurations tentées, sur les tests de restauration automatisés et manuels. Le seul succès de la tâche de sauvegarde est exclu, car une tâche exécutée n'est pas une restauration qui a fonctionné | pourcentage, par palier de données | Journaux du système de sauvegarde, résultats de vérification automatisée des restaurations | Gestion de la continuité de service ; gestion de l'infrastructure et de la plateforme | Exercice de restauration ; critères d'exploitabilité dans la définition de terminé | Hebdomadaire pour les tests automatisés ; mensuelle en revue |
| Taux de clôture des constats d'exercice | Part des constats des exercices de rétablissement clos dans leur délai convenu, répartis par gravité | constats clos dans la cible / constats arrivés à échéance dans la période. L'horloge démarre quand le constat est consigné dans le rapport d'exercice et s'arrête à la correction vérifiée, c'est-à-dire un nouveau test ou une revue qui la confirme. Les constats acceptés comme risques par un responsable nommé sont comptés séparément | pourcentage, avec le nombre de constats en retard | Rapport d'exercice, gestionnaire de tickets | Gestion de la continuité de service ; amélioration continue | Actions de rétrospective ; ancienneté des éléments de backlog | Mensuelle |
| Actualité des plans | Part des plans de continuité et des guides d'exploitation revus après le dernier changement important de leur service, ou dans leur intervalle de revue | plans avec une date de revue postérieure au dernier changement important et dans l'intervalle / plans concernés. Un changement important est un enregistrement de changement marqué comme modifiant l'architecture, les entrepôts de données, les dépendances ou les fournisseurs | pourcentage, avec l'âge du plus ancien plan non revu | Dépôt des plans (contrôle de versions), enregistrements de changements, registre des services | Gestion de la continuité de service ; maîtrise des changements | La définition de terminé inclut la mise à jour du guide d'exploitation | Trimestrielle |

L'horloge du RTO dans un exercice diffère de l'horloge d'une vraie panne, qui démarre à l'impact (voir le sujet 3.4, Métriques des incidents majeurs) ; comparez donc les exercices avec les exercices. Un exercice étroitement scénarisé mesure la vitesse de répétition ; consignez donc la part de surprise qu'il contenait.

## Recommandations

### Fixer des objectifs qui peuvent être testés

**1. Dérivez le RTO et le RPO d'une analyse d'impact sur l'activité, et écrivez-les à côté du service.** La BIA demande à l'entreprise ce que coûtent une heure, un jour et une semaine de panne et quelles données elle peut se permettre de perdre. Consignez les réponses dans le registre des services pour que chaque test puisse être comparé à un objectif énoncé. Des objectifs choisis par les seuls ingénieurs tendent à être soit inabordables, soit sans rapport avec ce dont les clients ont besoin.

**2. Répartissez les services en paliers et fixez les intervalles de test par palier.** Un petit nombre de paliers, peut-être trois ou quatre, est plus facile à gérer qu'une règle différente pour chaque service. Donnez au palier supérieur les tests les plus fréquents et les plus réalistes, et au palier le plus bas un contrôle léger comme une restauration périodique d'un échantillon. Écrivez les intervalles et revoyez-les quand la BIA change.

**3. Vérifiez que l'objectif correspond à l'architecture.** Un RPO de cinq minutes avec une sauvegarde nocturne est une contradiction qu'un test exposera au pire moment. Comparez chaque objectif avec la conception des sauvegardes, de la réplication et du basculement avant le premier exercice, et consignez tout écart comme un constat.

### Tester de façons qui révèlent quelque chose

**4. Mêlez exercices sur table, exercices de restauration et exercices de simulation.** Un exercice sur table est peu coûteux et trouve des lacunes dans les rôles, les contacts et les décisions. Un exercice de restauration pratique trouve des lacunes dans les procédures, les permissions et les données. Un exercice de simulation, qui provoque une panne et observe la réponse, trouve des lacunes dans la supervision, les guides d'exploitation et la coordination. Rapportez séparément chaque type pour qu'une série d'exercices sur table faciles ne ressemble pas à une preuve de rétablissement.

**5. Chronométrez la restauration sur des données à l'échelle de la production.** Une restauration qui fonctionne sur une petite copie peut échouer sur le volume réel à cause de limites de débit ou de stockage. Là où les tests à pleine échelle sont trop coûteux pour être menés souvent, menez-en un périodiquement et énoncez toute extrapolation. Consignez la taille des données avec le résultat.

**6. Vérifiez que les données restaurées sont utilisables.** Ajoutez un contrôle automatisé après la restauration, comme un compte de lignes, une somme de contrôle ou une transaction synthétique. Ne comptez une restauration comme réussie que si ce contrôle passe.

**7. Ajoutez progressivement de la surprise.** Les premiers exercices peuvent être annoncés et scénarisés. Les suivants devraient retenir des détails de la panne et inclure des dépendances comme des identifiants expirés ou un fournisseur injoignable. Consignez le niveau de surprise pour que les résultats se lisent dans leur contexte.

### Transformer les constats en changement

**8. Consignez chaque constat avec un responsable, une gravité et une échéance.** Un exercice de simulation produit une liste : une permission manquante, une étape de guide d'exploitation qui ne correspond plus à l'outil, une supervision qui ne s'est jamais déclenchée. Mettez chacun dans le backlog de l'équipe avec la même visibilité que le travail sur les fonctions. Suivez l'âge des constats ouverts et la part close à temps, et confirmez la clôture par un nouveau test là où c'est praticable.

**9. Liez les constats à la gestion des problèmes et à l'apprentissage.** Un constat qui revient d'un exercice à l'autre est un problème au sens ITIL (voir le sujet 4.1, Métriques de gestion des problèmes). Passez chaque exercice en revue sans reproche, comme vous le feriez d'une analyse post-incident, et suivez les actions jusqu'à leur clôture (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

### Garder les plans vivants

**10. Gardez les plans et les guides d'exploitation sous contrôle de versions, et liez-les au changement.** Quand un enregistrement de changement modifie l'architecture, un entrepôt de données ou un fournisseur, exigez que le plan concerné soit revu dans le même travail (voir le sujet 4.3, Métriques de maîtrise des changements). Mesurez l'actualité des plans au regard du dernier changement important et pas seulement du calendrier. Un plan revu chaque trimestre qui ignore la migration du mois dernier n'est à jour que de nom.

**11. Gardez honnête la carte des dépendances.** L'ordre de rétablissement dépend de services partagés comme l'identité, la résolution de noms et le stockage des secrets. Réconciliez la carte avec les enregistrements de configuration et corrigez les lacunes que révèlent les exercices (voir le sujet 7.4, Métriques de qualité de la configuration et de la CMDB).

**12. Incluez les fournisseurs, et faites tourner la charge des exercices.** Demandez à chaque fournisseur critique ses propres preuves de tests et convenez de la manière d'exercer les étapes conjointes (voir le sujet 8.4, Métriques des fournisseurs et des contrats). Les exercices consomment du temps ; partagez donc la charge dans une rotation et comptez-la comme charge opérationnelle (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

## Vecteurs de détournement et garde-fous

Les chiffres de continuité sont faciles à flatter parce que peu de gens regardent un exercice de près et que le vrai test a lieu rarement. Le tableau associe chaque métrique à une façon dont elle est détournée et au contrôle qui l'attrape. Les associations suivent la forme exposée au sujet 1.2 (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de respect du RTO | Choisir un petit jeu de données de test, un scénario facile ou un script répété ; démarrer l'horloge tard, après que l'équipe a commencé ; relâcher le contrôle de santé pour que « rétabli » arrive plus vite ; fixer un RTO généreux pour que tous les tests passent | Consigner la taille des données, la surprise du scénario et la définition du contrôle de santé avec chaque résultat ; comparer le RTO avec la BIA ; montrer chaque exercice comme sa propre ligne, échecs compris |
| Taux de respect du RPO | Ne mesurer la perte que pour la table principale et non pour tout l'état ; tester une réplique synchronisée parce qu'aucune charge ne tourne ; redéfinir le RPO après un résultat manqué | Vérifier la perte de données au regard du journal d'écritures dans tous les entrepôts de données concernés ; tester sous une charge d'écriture réaliste ; tenir un journal des changements d'objectifs avec leurs motifs |
| Couverture du rétablissement testé | Compter les discussions sur table comme des tests ; tester un service trivialement petit pour relever le pourcentage ; rétrécir la liste concernée en requalifiant des services dans un palier plus bas | Exiger des tests pratiques pour le compte du palier 1 ; rapporter la couverture pondérée par la criticité des services ; auditer les changements de palier au regard de la BIA |
| Jours depuis le dernier test de rétablissement réussi | Relancer un test facile pour remettre l'âge à zéro ; étiqueter un test partiel comme réussi ; remettre la date à zéro après une revue sur papier | Montrer le périmètre du dernier test réussi ; montrer l'âge le plus ancien et les services jamais testés ; exiger que le RTO et le RPO aient tous deux été respectés |
| Taux de réussite des restaurations de sauvegarde | Rapporter le succès de la tâche de sauvegarde comme succès de restauration ; ne tester que les sauvegardes réputées bonnes ; vérifier avec un contrôle qui ne peut pas échouer | Suivre les restaurations de sauvegardes échantillonnées au hasard ; exiger un résultat de vérification des données ; revoir le contrôle lui-même à chaque audit |
| Taux de clôture des constats d'exercice | Clore des constats sans correction ; rétrograder la gravité pour relâcher l'échéance ; scinder un constat en plusieurs faciles ; consigner peu de constats au départ | Vérifier la clôture par un nouveau test ; rapporter les constats par exercice à côté du taux de clôture, car un compte en baisse peut signifier des exercices plus doux ; revoir les changements de gravité |
| Actualité des plans | Mettre à jour une date de revue sans lire le plan ; marquer des changements comme non importants ; bourrer le plan de texte générique qui ne devient jamais périmé | Échantillonner des plans et les parcourir avec quelqu'un qui ne les a pas écrits ; comparer le taux de marquage de changement important avec l'historique des changements d'architecture ; relier l'actualité aux résultats de tests |

Une lecture saine montre une poignée de tests par trimestre avec une variation honnête : certains réussis du premier coup, d'autres échoués puis répétés, et les constats de chacun apparaissent dans le backlog et se closent dans le délai énoncé. Des scores parfaits année après année sont une raison de demander à quel point les exercices sont difficiles.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Tests de restauration automatisés, petits et fréquents | Preuve continue et peu coûteuse ; attrape tôt une défaillance silencieuse de sauvegarde | Ne teste ni la coordination, ni les personnes, ni le rétablissement à pleine échelle |
| Exercice annuel de basculement à pleine échelle | Réaliste ; exerce ensemble les personnes, les fournisseurs et les dépendances | Coûteux et rare ; difficile à répéter après une correction ; porte un risque s'il est mené en production |
| Exercices sur table | Peu coûteux ; trouve des lacunes dans les rôles et les décisions ; bon pour la formation | Ne prouve pas que la technologie fonctionne ; facile à mener sans rien apprendre |
| Exercices de simulation en production avec panne provoquée | Réalisme maximal ; teste la supervision et les guides d'exploitation tels qu'ils sont | Exige des garde-fous mûrs et le soutien de la direction ; peut nuire aux clients s'il est mené sans soin |
| Objectifs par paliers | Dépense l'effort là où est le risque | Les affectations de palier peuvent dériver et ont besoin d'un responsable |

La réponse pratique est un programme en couches : des contrôles de restauration automatisés bon marché en permanence, des exercices pratiques pour chaque service de palier 1 à intervalle fixe, un exercice plus vaste selon un cycle plus long et des exercices sur table pour les décisions et la communication. Énoncez les intervalles pour que le lecteur puisse juger de l'actualité des preuves.

## Questions à discuter avec votre équipe

**1. Quand avons-nous restauré pour la dernière fois notre service le plus important, et qu'avons-nous exactement prouvé ?**
Demandez la date, la taille des données, le scénario et le résultat, et écrivez-les sur un tableau. L'animateur doit résister à juger et se concentrer sur l'écart entre l'affirmation et la preuve. Terminez en convenant d'un test qui comblerait le plus grand écart.

**2. Qui a choisi notre RTO et notre RPO, et l'entreprise les choisirait-elle encore aujourd'hui ?**
Remontez chaque objectif à une analyse d'impact sur l'activité ou à une décision. Demandez si l'architecture pourrait respecter l'objectif sur le papier, et si le coût de le respecter a jamais été énoncé. Convenez de qui confirmera les objectifs des principaux services avec l'entreprise et pour quand.

**3. Que nous coûterait un exercice échoué en réputation, et cela façonne-t-il la difficulté de nos exercices ?**
Cette question fait ressortir la pression qui rend les exercices doux. Demandez si un test échoué est traité comme un échec de l'équipe ou comme un succès de l'exercice.

**4. Lesquels des constats de notre dernier exercice sont encore ouverts, et pourquoi ?**
Lisez la liste à voix haute avec les âges et les responsables. Pour chaque élément en retard, demandez ce qui le bloque : travail concurrent, responsabilité floue, coût ou croyance que le risque est acceptable. Le but est qu'aucun constat ne reste sans responsable.

**5. Que suppose notre plan qui n'est plus vrai ?**
Choisissez un plan et lisez-le avec une personne qui ne l'a pas écrit. Cherchez des outils retirés, des comptes renommés et des fournisseurs partis. Demandez comment le plan serait mis à jour quand le service change, et qui remarque quand il ne l'est pas. Reliez la réponse au processus de changement.

**6. Quelle dépendance arrêterait tout, et avons-nous jamais testé sans elle ?**
Les services partagés comme l'identité, la résolution de noms, les secrets et le système d'appel lui-même sont des points uniques de défaillance courants. Demandez à l'équipe de les nommer et de décrire la dernière fois où chacun a été indisponible exprès.

## Quatre perspectives

### Équipes produit et livraison

Les équipes produit détiennent la conception qui rend le rétablissement possible ; elles rencontrent donc la continuité dans la définition de terminé des services critiques : un chemin de sauvegarde, une procédure de restauration et un guide d'exploitation qui fonctionne. Elles devraient mener des exercices de restauration dans leur propre cadence, garder le code de rétablissement avec le service et traiter un exercice échoué comme un élément de backlog.

### Équipes de service et d'exploitation

Les équipes d'exploitation mènent la plupart des exercices et portent la charge de les préparer. Elles devraient tenir le calendrier des exercices, consigner les chronologies pendant le déroulement de l'exercice et écrire les constats le jour même. Les résultats décrivent le service et le plan, et personne n'est classé selon la rapidité avec laquelle un individu a rétabli un exercice.

### Direction et gouvernance

Les dirigeants fixent les objectifs avec l'entreprise et décident de la quantité de rétablissement qui vaut la peine d'être achetée. Ils devraient demander à voir le dernier résultat démontré à côté de chaque objectif, l'âge de la preuve et les constats ouverts, et éviter de récompenser une fiche vierge. Les instances de gouvernance devraient attendre un petit ensemble stable de mesures de continuité, relié au registre des risques et aux rapports réglementés là où cela s'applique (voir le sujet 8.2, Métriques des risques et des contrôles, et le sujet 8.5, Rapports réglementaires et gouvernementaux).

### Clients et utilisateurs

Les clients voient rarement la continuité avant qu'elle compte, et ils la jugent alors entièrement au résultat : combien de temps ils ont été sans le service et si leurs données ont survécu. Ils gagnent à des énoncés clairs de ce qui est promis, en termes qu'ils peuvent comprendre, et à une communication honnête quand un incident déclenche le plan. Là où les contrats incluent des engagements de rétablissement, partagez sur demande les preuves d'exercice (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional exploite un système de planification des patients, une archive d'imagerie médicale et un service de messagerie du personnel. Une équipe produit de huit personnes maintient la planification, et une équipe d'exploitation exploite la plateforme. Tous les chiffres de cet exemple sont illustratifs.

Le registre du service place la planification au palier 1 avec un RTO de 2 heures et un RPO de 15 minutes. Son rapport trimestriel affiche « taux de respect du RTO : 100 pour cent sur 4 exercices » et « couverture du rétablissement testé : 100 pour cent ». Un nouveau chef de l'exploitation lit les rapports d'exercice derrière les chiffres. Trois des quatre exercices étaient des exercices sur table, et la seule restauration pratique employait une copie de la base de données contenant environ un dixième des données de production. Personne n'avait restauré une sauvegarde dans un environnement propre depuis 14 mois.

L'équipe décide de changer ce qui est mesuré et testé. Elle redéfinit la couverture du rétablissement testé pour ne compter que les tests pratiques, ce qui fait tomber le chiffre à 33 pour cent pour les trois services de palier 1. Elle planifie une restauration à l'échelle de la production pour la planification, avec une vérification automatisée des comptes de lignes et une transaction synthétique de réservation. L'essai prend 3 heures 40 minutes contre un RTO de 2 heures, et les données restaurées ont 40 minutes de retard sur le point de panne contre un RPO de 15 minutes, parce que l'expédition des journaux avait été suspendue pendant une migration et jamais reprise. L'exercice de simulation produit 9 constats : 2 de gravité haute, 5 moyenne et 2 basse.

La décision consignée dans le journal est de traiter l'écart comme le résultat le plus précieux de l'année. L'équipe ouvre du travail pour reprendre l'expédition des journaux avec une alerte sur son retard, paralléliser la restauration et déplacer un volume de données vers un stockage plus rapide. Le RTO reste à 2 heures, et l'équipe ajoute un repli manuel documenté pour la planification. Le taux de clôture des constats pour les 60 premiers jours est de 7 sur 9 à temps, les deux autres étant acceptés comme risques par des responsables nommés.

Le risque de détournement attrapé ici était subtil. Personne n'a falsifié un chiffre : un compte généreux d'exercices sur table et un petit jeu de données de test ont rendu le rapport vert. Les garde-fous qui ont fonctionné ont été de consigner la taille des données et le type d'exercice avec chaque résultat, et la pratique de lire les rapports d'exercice sous-jacents. Au rapport suivant, l'équipe montre chaque exercice comme sa propre ligne, l'essai échoué inclus.

## Perspective sectorielle

**Startup.** Il y a généralement un seul environnement de production, une petite équipe et un fournisseur de nuage géré. La mesure la plus précieuse est la plus simple : restaurer chaque mois la base de données de production à partir d'une sauvegarde dans un environnement propre, la chronométrer et vérifier le résultat. Écrivez le RTO et le RPO sur une page.

**Petite entreprise.** L'informatique est souvent externalisée ou tenue par une ou deux personnes sur des services hébergés. Demandez par écrit au fournisseur à quel rétablissement il s'engage et quelles preuves il peut montrer, et testez une restauration de vos propres données chaque trimestre. Gardez un plan d'une page là où il peut être lu quand les systèmes principaux sont en panne.

**Grande entreprise.** De nombreux services, de nombreux fournisseurs et des plateformes partagées rendent essentiels les paliers et une carte des dépendances. Investissez dans un registre central des services avec objectifs, un calendrier d'exercices, une vérification automatisée des restaurations et un rapport cohérent pour que les résultats se comparent entre équipes.

**Gouvernement et secteur public.** Les devoirs de continuité peuvent découler de la loi, de l'audit ou de la politique, et un service public peut devoir continuer à fonctionner pendant les urgences. Les preuves de test sont souvent revues de l'extérieur ; gardez donc les rapports d'exercice, les constats et les enregistrements de clôture sous une forme qu'un auditeur peut lire. Les marchés peuvent figer des dispositions de rétablissement ; incluez donc dans les contrats des droits d'exercice et des preuves (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les raisons d'investir sont le coût d'une panne grave qui dure plus longtemps que ce que l'entreprise peut supporter, la perte de données qui ne peuvent être recréées et les obligations envers les clients, les régulateurs et les assureurs qui demandent des preuves de préparation. Le travail de continuité est une assurance ; le retour est donc la perte évitée et la confiance des décideurs, et il est difficile à exprimer en chiffre sans en inventer un. Décrivez-le par des schémas observables : l'écart entre le temps de rétablissement énoncé et démontré, le nombre de constats de haute gravité trouvés dans des exercices plutôt que dans de vrais événements, et le temps de réponse à une demande de preuve d'un client ou d'un auditeur.

Les coûts viennent en trois groupes : la redondance et l'outillage que les objectifs exigent, le temps des personnes pour planifier, mener et revoir les exercices, et l'effort de tenir à jour les plans et les cartes de dépendances.

Le coût total de possession est dominé par les personnes et par les paliers les plus serrés. Passer d'un RTO de 24 heures à un RTO de 2 heures change la conception et la facture ; rendez donc cet arbitrage explicite avec l'entreprise. De petits tests automatisés et fréquents tendent à coûter moins qu'un grand événement annuel, parce que les défauts surgissent pendant qu'ils sont peu coûteux à corriger.

## Antimodèles et pièges

- **Le plan sur l'étagère.** Un document compte comme préparation et personne ne l'a essayé. Rapportez plutôt la date et le résultat du dernier test pratique à côté de chaque objectif.
- **Le succès de la sauvegarde pris pour un succès de restauration.** Les tâches rapportent du vert alors que les données ne peuvent pas être restaurées. Testez plutôt régulièrement les restaurations et vérifiez les données avant de compter un succès.
- **Le théâtre répété.** L'exercice est scénarisé et mené par les auteurs du plan. Ajoutez plutôt progressivement de la surprise.
- **Un objectif pour tout.** Chaque service a un RTO de quatre heures parce que le gabarit le disait. Répartissez plutôt les services en paliers à partir d'une analyse d'impact sur l'activité et fixez des objectifs qui conviennent.
- **Des constats qui ne se closent jamais.** Le rapport d'exercice liste des écarts et le backlog ne les voit jamais. Donnez plutôt à chaque constat un responsable et une échéance, et vérifiez la clôture par un nouveau test.
- **Pénaliser le test échoué.** Une équipe blâmée pour un RTO manqué cessera de mener des tests difficiles. Convenez plutôt d'emblée qu'un exercice échoué avec de bons constats est un bon résultat, et revoyez-le sans reproche.
- **Des plans périmés après un changement rapide.** Le calendrier pilote la revue et les changements d'architecture passent entre les mailles. Reliez plutôt la revue du plan aux enregistrements de changements importants et mesurez l'actualité des plans à leur regard.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Objectifs et paliers | RTO et RPO non écrits ou copiés d'un gabarit | Objectifs écrits pour quelques services clés | Paliers et objectifs issus d'une analyse d'impact sur l'activité et inscrits dans le registre des services | Objectifs revus au regard des résultats démontrés et de l'architecture | Objectifs convenus conjointement avec l'entreprise et les fournisseurs, et ajustés à mesure que les services changent |
| Tests et preuves | Rétablissement jamais testé, ou testé une fois après un incident | Tests de restauration ad hoc par certaines équipes ; résultats gardés dans des notes personnelles | Intervalles de test par palier avec périmètre, chronologie et résultat consignés | Résultats suivis dans le temps, exercices sur table, exercices de restauration et exercices de simulation rapportés séparément | Exercices entre équipes et avec les fournisseurs, avec surprise, planifiés à partir du risque |
| Constats et apprentissage | Lacunes remarquées de façon informelle | Constats listés après certains exercices | Chaque constat a un responsable, une gravité et une échéance | Taux de clôture et âge revus, un nouveau test confirmant la clôture | Les constats alimentent les plateformes partagées, les contrats de fournisseurs et les normes de conception |
| Actualité des plans | Plans écrits une fois | Plans mis à jour après les incidents | Plans sous contrôle de versions avec un intervalle de revue | Revue liée aux changements importants et mesurée | Plans et guides d'exploitation testés comme du code et générés à partir de la définition du service quand c'est possible |

## Liste de vérification

- [ ] Chaque service de palier 1 a un RTO et un RPO écrits issus d'une analyse d'impact sur l'activité.
- [ ] Le registre des services montre le palier, les objectifs et l'intervalle de test de chaque service.
- [ ] Les horloges du RTO et du RPO, le contrôle de santé et les exclusions sont écrits (voir le sujet 1.5, Sources de données et instrumentation).
- [ ] Les tests de rétablissement pratiques, les exercices sur table et les exercices de simulation sont rapportés comme des types distincts.
- [ ] Chaque test de rétablissement consigne la taille des données, le scénario, le niveau de surprise, et le temps de rétablissement et la perte de données mesurés.
- [ ] Les restaurations de sauvegardes sont testées automatiquement, et un contrôle de vérification des données décide du succès.
- [ ] Chaque constat d'exercice a un responsable, une gravité, une échéance et une place dans le backlog.
- [ ] La revue des plans est liée aux enregistrements de changements importants, et le plus ancien plan non revu est visible.
- [ ] La carte des dépendances inclut les services partagés, et au moins un scénario retire l'un d'eux.
- [ ] Chaque métrique de ce sujet a un garde-fou nommé et un responsable dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).
- [ ] La charge des exercices tourne, et le temps qu'elle prend est compté comme charge opérationnelle.

## Prompts d'IA

**Concevez un test de rétablissement et les mesures qui l'accompagnent.**

```text
Je veux tester le rétablissement de [service name], un service de [tier] avec un
RTO énoncé de [RTO] et un RPO de [RPO]. Ses principaux composants sont [list:
data stores, queues, compute, shared services] et ses fournisseurs sont [list].
Rédigez un plan de test avec un scénario réaliste, l'événement qui démarre
l'horloge, le contrôle de santé qui l'arrête, comment mesurer la perte de données
au regard du RPO, la taille des données à employer, ce qu'il faut consigner et
les garde-fous pour éviter de nuire à la production. N'inventez pas de temps de
référence et ne prétendez pas qu'un objectif est atteignable. Énumérez vos
hypothèses et les questions auxquelles je devrais répondre pour terminer le
plan.
```

**Examinez des rapports d'exercice à la recherche de preuves flatteuses.**

```text
Voici des résumés de nos [number] derniers exercices de rétablissement : [paste
for each: type, date, scope, data size, restore time, data loss, findings
count]. Nos objectifs sont [RTO and RPO per tier]. Identifiez où les résultats
rapportés pourraient surestimer la capacité réelle de rétablissement, comme de
petits jeux de données, des scénarios scénarisés, une couverture par exercices
sur table seulement ou des contrôles de santé lâches. Suggérez quelles
informations supplémentaires consigner et quelles métriques de garde-fou
associer à chaque résultat. N'inventez pas de valeurs de référence et ne
supposez pas de faits que je ne vous ai pas donnés. Énumérez vos hypothèses.
```

**Transformez des notes d'exercice de simulation en constats et en éléments de backlog.**

```text
Voici les notes brutes d'un exercice de simulation sur [service] : [paste notes
and timeline]. Extrayez chaque écart entre le plan et ce qui s'est passé comme un
constat distinct avec un titre court, une description, une gravité suggérée
selon cette échelle [severity scale], un rôle de responsable candidat (pas une
personne nommée) et la manière dont nous pourrions vérifier la correction.
Regroupez les constats qui peuvent partager une cause profonde. N'inventez pas
d'événements absents des notes. Énumérez vos hypothèses et tout ce qui demande
des éclaircissements.
```

**Vérifiez l'actualité d'un plan au regard des changements récents.**

```text
Voici le plan de continuité de [service] revu pour la dernière fois le [date] :
[paste plan or outline]. Voici les changements importants depuis : [list changes
to architecture, data stores, dependencies, suppliers, and tooling]. Identifiez
les étapes, contacts, outils et dépendances du plan que les changements ont pu
rendre faux, et listez les questions qu'un relecteur devrait poser. N'inventez
pas de détails sur nos systèmes. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique de continuité, de rétablissement ou d'exercice, et le garde-fou à lui associer.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique de continuité modifiée énonce ses horloges, ses exclusions et son vecteur de détournement.

## Points clés à retenir

- Un objectif de rétablissement est une promesse, et seul un exercice chronométré et réaliste montre si elle peut être tenue.
- Rapportez le dernier résultat démontré et son âge à côté de chaque RTO et RPO, et montrez chaque exercice comme sa propre ligne.
- Testez les restaurations, non les sauvegardes : une restauration ne compte que lorsque les données ont été vérifiées comme utilisables.
- Le produit d'un exercice est une liste close de constats ; suivez donc leur âge et confirmez la clôture par un nouveau test.
- Gardez les plans sous contrôle de versions et liez leur revue aux changements importants, pas seulement au calendrier.
- Mesurez des services et des plans, jamais des personnes, et faites d'un exercice échoué avec de bons constats un résultat sûr et respecté.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
