# Métriques de libre-service et d'automatisation

**Mesurez le libre-service à ce que les gens ont obtenu ce dont ils avaient besoin sans aide, et l'automatisation au travail qu'elle supprime et aux échecs qu'elle crée, car un contact qui n'est jamais arrivé n'est un succès que si le problème a été résolu.**

## Résumé et motivation

Le libre-service et l'automatisation sont les deux principaux moyens par lesquels une organisation de service décharge ses équipes du travail courant. Le [libre-service](https://en.wikipedia.org/wiki/Self-service_software) permet à un utilisateur de résoudre un problème ou d'obtenir quelque chose seul, par un portail, un article de connaissance, une page de réinitialisation de mot de passe ou un [agent conversationnel](https://en.wikipedia.org/wiki/Chatbot). L'[automatisation](https://en.wikipedia.org/wiki/Automation) permet à un système d'exécuter les étapes qu'une personne exécutait, comme créer un compte, redémarrer un service ou clore un ticket une fois qu'une supervision confirme le rétablissement. Les deux visent le même résultat : moins de tâches répétitives pour les personnes, des résultats plus rapides pour les utilisateurs et plus de temps pour le travail qui demande du jugement.

Les idées s'inscrivent dans les deux traditions. Dans [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratique de gestion des demandes de service attend que les demandes bien comprises et répétables soient traitées par des flux standard avec autant d'automatisation que raisonnable, et les pratiques de gestion des incidents et de gestion des connaissances attendent que de bonnes informations soient disponibles pour les utilisateurs et pour le personnel de soutien au plus tôt utile. La pratique agile et DevOps arrive au même endroit par un autre chemin : l'[infrastructure en tant que code](https://en.wikipedia.org/wiki/Infrastructure_as_code), les chaînes de livraison et la discipline de suppression des tâches répétitives, que les livres d'ingénierie de la fiabilité des sites de Google définissent comme un travail manuel, répétitif et automatisable qui croît avec le service. L'idée commune est souvent appelée « décaler vers la gauche » : rapprocher la résolution d'un problème de l'utilisateur, ou du point le moins coûteux et le plus précoce de la chaîne de soutien, et l'éloigner de la file des spécialistes.

Le langage du décalage vers la gauche invite à une erreur de mesure. Les équipes voient qu'un contact évité est peu coûteux et comptent alors les contacts évités comme un succès. Le compte est facile à produire, car une visite du portail qui n'a pas abouti à un ticket ressemble exactement à une visite où l'utilisateur a abandonné. Ce sujet part donc du résultat de l'utilisateur. Il définit ce que signifie le succès du libre-service, comment estimer le désengorgement sans s'attribuer le mérite des abandons, comment mesurer la couverture et la fiabilité de l'automatisation, et comment voir l'effet du décalage vers la gauche sur le volume et la complexité. Les mesures apparentées de volume et de priorité sont au sujet 3.2, Volume et priorité des incidents, le côté des demandes est au sujet 3.5, Métriques de traitement des demandes de service, et le côté des connaissances est au sujet 3.6, Métriques de gestion des connaissances.

Termes employés dans ce sujet :

- **Niveau 0 (ou palier de libre-service)** : résolution par l'utilisateur sans contacter le personnel. Le niveau 1 est la première ligne de soutien, généralement le centre de services, et les niveaux 2 et 3 sont les paliers de spécialistes et d'ingénierie.
- **Désengorgement** : un contact qui aurait autrement atteint le personnel et qui a été résolu au niveau 0 à la place. Il ne peut pas être observé directement ; c'est donc toujours une estimation.
- **Chute vers le personnel** : un utilisateur qui a essayé le libre-service, n'a pas réussi, puis a contacté le personnel à propos du même besoin.
- **Guide d'exploitation** (runbook) : une procédure documentée pour une tâche d'exploitation courante. Un [guide d'exploitation](https://en.wikipedia.org/wiki/Runbook) est la première étape habituelle vers son automatisation.
- **Tâches répétitives** (toil) : travail manuel, répétitif et automatisable sans valeur durable (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).
- **Catalogue de services** : la liste des services et des demandes standard offerts aux utilisateurs. ITIL l'appelle « service catalogue ».

## Principes clés

- **Compter les résultats, non les contacts évités.** Une session de portail sans ticket n'est un succès que si le besoin de l'utilisateur a été satisfait. Définissez le succès du côté de l'utilisateur et vérifiez-le par un signal de suivi.
- **Le désengorgement est une estimation ; étiquetez-le comme tel.** Énoncez la méthode, la comparaison employée et l'incertitude. Ne présentez jamais un chiffre de désengorgement estimé comme un fait mesuré.
- **Mesurer le chemin de chute.** Le chemin d'une tentative de libre-service échouée vers un contact avec le personnel est l'endroit où vit l'essentiel de l'échec caché. Rapportez-le à côté de chaque chiffre de succès.
- **L'automatisation a un côté coût.** Chaque flux automatisé exige un entretien, une supervision et un moyen d'échouer sans danger. Mesurez ensemble la couverture et la fiabilité, et comptez l'effort dépensé à maintenir l'automatisation en vie.
- **Le décalage vers la gauche change le mélange autant que le volume.** Quand le travail facile quitte la file, le travail restant est en moyenne plus difficile et plus lent. Lisez le temps de résolution et le temps de traitement en en tenant compte (voir le sujet 3.3, Temps de réponse et de résolution des incidents).
- **Les métriques décrivent des services et des flux.** Rapportez par élément de catalogue, famille d'articles ou flux d'automatisation. Ne classez jamais les agents selon le nombre d'utilisateurs qu'ils ont poussés vers le libre-service.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de succès du libre-service | Part des sessions de libre-service où le besoin de l'utilisateur a été satisfait sans contact avec le personnel | Sessions terminées par un résultat accompli (demande soumise et traitée, article marqué utile, réinitialisation terminée) sans contact avec le personnel sur le même besoin dans les 7 jours, divisées par toutes les sessions qui ont démarré une tâche. L'horloge démarre à la première action significative dans le portail, s'arrête à l'achèvement ou à l'abandon. Exclut le trafic de robots, les comptes de test et la simple navigation | Pourcentage | Journaux du portail et de l'identité, système de tickets, analyse des sessions | Gestion des demandes de service ; gestion des connaissances | Boucle de rétroaction client ; critères d'acceptation fondés sur les résultats | Mensuelle |
| Taux de désengorgement estimé | Part estimée de la demande résolue au niveau 0 qui aurait autrement atteint le personnel | Comparez le taux de contacts pour 1 000 utilisateurs actifs d'un service avant et après un changement de libre-service, ou avec un groupe témoin, ajusté pour les variations de demande connues. Énoncé comme une estimation avec la méthode nommée. Exclut les contacts qui sont passés à un autre canal | Pourcentage (estimation) | Système de tickets, comptes de population d'utilisateurs, données d'expérience ou de cohorte | Centre de services ; gestion des incidents | Expérience avec un groupe de contrôle ; test A/B | Trimestrielle |
| Taux de chute vers le personnel | Part des tentatives de libre-service échouées qui se terminent par un contact avec le personnel sur le même besoin | Contacts avec le personnel ouverts dans les 7 jours suivant une session de libre-service abandonnée ou infructueuse du même utilisateur sur le même sujet, divisés par les sessions infructueuses. L'horloge démarre à la fin de la session. Exclut les contacts sans rapport | Pourcentage | Journaux du portail joints au système de tickets sur l'utilisateur et le sujet | Centre de services ; gestion des connaissances | Chemin d'escalade dans une définition de terminé ; retour du soutien | Mensuelle |
| Adoption du libre-service (part portail d'abord) | Part des demandes et des signalements d'incidents éligibles soulevés par les canaux de libre-service | Éléments créés par portail, agent conversationnel ou API, divisés par tous les éléments des entrées de catalogue qui offrent une voie de libre-service. Exclut les éléments pour lesquels aucune voie de libre-service n'existe | Pourcentage | Champ de canal du système de tickets, configuration du catalogue | Gestion des demandes de service ; gestion du catalogue de services | Suivi de l'adoption après une version | Mensuelle |
| Couverture de l'automatisation | Part du travail répétable éligible accomplie par automatisation sans étape manuelle | Éléments accomplis par un flux automatisé de bout en bout, divisés par tous les éléments des types jugés automatisables. Ne compte le type comme automatisable que si une liste écrite de candidats le nomme. Exclut le travail ponctuel et les éléments que l'automatisation a rejetés | Pourcentage | Système de tickets, journaux de la plateforme d'automatisation, liste de candidats | Gestion des demandes de service ; gestion des déploiements | Automatisation de la définition de terminé ; chaîne de livraison en tant que code | Mensuelle |
| Taux d'échec et de reprise de l'automatisation | Part des exécutions automatisées qui ont échoué, ont exigé une réparation manuelle ou ont produit un résultat corrigé plus tard | Exécutions automatisées qui ont causé une erreur, ont été annulées ou ont été suivies d'une correction manuelle dans les 7 jours, divisées par toutes les exécutions automatisées. L'horloge démarre au début de l'exécution. Exclut les essais à blanc planifiés | Pourcentage | Journaux de la plateforme d'automatisation, système de tickets, enregistrements de changements | Maîtrise des changements ; gestion des incidents | Taux d'échec des changements ; stabilité de la construction et des tests | Hebdomadaire |
| Temps d'intervention manuelle par type de demande | Effort du personnel dépensé sur un type de demande candidat à l'automatisation | Minutes de travail effectif consignées par le personnel sur les éléments du type dans la période, résumées en médiane et 85e percentile par élément. Estimé par échantillonnage là où le temps n'est pas consigné. Exclut le temps d'attente | Minutes par élément | Échantillonnage du temps, journaux de travail des tickets | Gestion des demandes de service | Suivi des tâches répétitives ; gaspillage du flux de valeur | Trimestrielle |
| Répartition par niveau (part décalée vers la gauche) | Où dans la chaîne de soutien les éléments sont résolus | Éléments résolus à chaque niveau (0, 1, 2, 3) divisés par tous les éléments résolus de la période. Le niveau est le palier le plus élevé qui a fait un travail effectif. Exclut les éléments annulés avant le tri | Pourcentage par niveau | Groupe de résolution et historique d'affectation du système de tickets | Gestion des incidents ; centre de services | Travail en essaim et schémas d'escalade ; équipes pluridisciplinaires | Mensuelle |

Toutes ces mesures sont prises par service, élément de catalogue ou flux, jamais par personne. Les mesures de temps devraient être montrées en médiane plus un percentile élevé, comme l'explique l'introduction du sujet sur la culture statistique (voir le sujet 1.6, Culture statistique pour les métriques de service).

## Recommandations

### Définir le succès du côté de l'utilisateur

**1. Écrivez ce que signifie « j'ai obtenu ce dont j'avais besoin » pour chaque voie de libre-service.** Pour une réinitialisation de mot de passe, c'est une réinitialisation accomplie et une connexion réussie. Pour une demande, c'est le traitement, non la soumission. Pour un article, c'est un utilisateur qui n'a pas recontacté le personnel au sujet du même besoin. Une définition qui s'arrête à « a consulté la page » mesure le trafic.

**2. Joignez les sessions de libre-service aux contacts ultérieurs.** La preuve la plus forte d'un échec est un contact avec le personnel sur le même sujet peu après une session. Reliez les deux sur l'utilisateur et le sujet là où les règles de confidentialité le permettent, et là où elles ne le permettent pas, employez des comptes agrégés par sujet et par jour. La jointure transforme une vague histoire de satisfaction en un taux de chute que vous pouvez améliorer.

**3. Interrogez les utilisateurs par une seule question au moment de la sortie.** Une invite à une question telle que « Cela a-t-il résolu votre problème ? » donne un signal direct que les journaux ne peuvent pas donner. Traitez les réponses comme un échantillon, lisez les commentaires libres et comparez les répondants aux non-répondants pour que les utilisateurs les plus satisfaits ne définissent pas le résultat (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

### Estimer honnêtement le désengorgement

**4. Préférez une comparaison à un compteur.** L'estimation la plus propre vient d'un groupe témoin, d'un déploiement par phases ou d'une vue avant-après des contacts pour 1 000 utilisateurs actifs du service concerné. Compter les « sessions qui n'ont pas abouti à des tickets » surestime l'effet, car beaucoup de ces utilisateurs n'ont jamais eu un besoin que le personnel aurait vu. Énoncez la méthode et l'incertitude à côté du chiffre.

**5. Normalisez le volume par rapport à l'usage.** Une baisse du nombre de tickets peut suivre une baisse du nombre d'utilisateurs, un cycle de versions calme ou un changement saisonnier. Divisez par les utilisateurs actifs ou par les transactions avant de tirer des conclusions (voir le sujet 3.2, Volume et priorité des incidents). Annotez le graphique avec les versions, les campagnes et les changements de portail.

**6. Gardez le désengorgement hors des objectifs.** Un objectif de désengorgement récompense le fait de cacher la voie de contact, d'enterrer le numéro de téléphone et de clore tôt les sessions de discussion. Employez le désengorgement comme une estimation d'apprentissage et laissez l'objectif porter sur les résultats des utilisateurs, comme le taux de succès du libre-service et le plus ancien élément non résolu.

### Mesurer l'automatisation comme un produit, non comme un projet

**7. Tenez une liste de candidats et mesurez la couverture par rapport à elle.** La couverture de « tout le travail » est une mauvaise mesure, car la plupart du travail n'est pas automatisable. Tenez une courte liste écrite des types de demandes et d'incidents répétables, bien compris et fréquents, classez-la par temps d'intervention manuelle et par volume, et rapportez la couverture par rapport à cette liste. Revoyez la liste chaque trimestre pour que le dénominateur reste honnête.

**8. Associez la couverture à la fiabilité.** Un flux automatisé qui échoue une exécution sur dix, ou qui produit silencieusement le mauvais résultat, peut coûter plus que la tâche manuelle qu'il a remplacée. Suivez le taux d'échec et de reprise, le temps pour détecter une exécution échouée et la fréquence à laquelle une personne doit réparer le résultat. Employez les pratiques de gestion des erreurs que décrit la communauté de l'ingénierie de la fiabilité des sites : étapes idempotentes, alertes claires et repli manuel sûr (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

**9. Comptez l'entretien.** Les automatisations ont besoin de responsables, de gestion de versions, de tests et de mises à jour quand les systèmes autour d'elles changent. Consignez le temps passé à entretenir chaque flux et comparez-le au temps d'intervention manuelle qu'il a supprimé. Une automatisation qui coûte plus à maintenir qu'elle n'économise est candidate au retrait, ce qui est un résultat normal, non un échec.

### Surveiller l'effet du décalage vers la gauche

**10. Attendez-vous à ce que le travail restant soit plus difficile.** Quand les contacts courants quittent le centre de services, le temps de traitement moyen et la résolution au premier contact au niveau 1 se dégradent souvent même si le service est meilleur. Rapportez la répartition par niveau et le mélange de catégories à côté de ces mesures, et convenez à l'avance avec la direction qu'une hausse du temps de traitement après un désengorgement réussi est attendue (voir le sujet 3.1, Métriques du centre de services).

**11. Bouclez la boucle vers la connaissance et la gestion des problèmes.** Chaque chute est la preuve d'un article manquant ou médiocre, d'un formulaire déroutant ou d'un défaut non corrigé. Acheminez les principaux sujets de chute vers les responsables des connaissances et, là où la cause est un défaut, vers la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes). Passez la liste en revue chaque mois et rapportez combien d'éléments ont été corrigés.

**12. Partagez la capacité que vous libérez.** Si l'automatisation et le libre-service suppriment du travail, décidez ce que le temps libéré achète : travail d'amélioration, corrections proactives ou formation. Les équipes qui ne voient aucun bénéfice de l'automatisation cessent de la proposer. Suivez dans le temps la part planifiée de capacité pour l'amélioration (voir le sujet 2.9, Travail opérationnel et travail non planifié).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de succès du libre-service | Compter tout formulaire rempli ou toute page vue comme un succès ; retirer l'invite « cela a-t-il aidé » quand les scores baissent ; exclure les sujets difficiles du dénominateur | Taux de chute et échantillon de sessions closes lues par une personne ; rapporter les règles du dénominateur |
| Taux de désengorgement estimé | Cacher la voie de contact ; ajouter des étapes avant le contact ; classer toute baisse de tickets comme désengorgement quelle qu'en soit la cause | Contacts pour 1 000 utilisateurs actifs, satisfaction des utilisateurs sur le service concerné, et méthode écrite à côté du chiffre |
| Taux de chute vers le personnel | Définir la fenêtre d'appariement si courte que les retours tombent dehors ; clore le contact de suivi comme doublon | Taux de contacts répétés sur tous les canaux ; revue d'un échantillon de contacts revenus |
| Adoption du libre-service (part portail d'abord) | Forcer toutes les demandes dans le portail quelle que soit l'adéquation ; requalifier les tickets créés par téléphone en tickets de portail | Taux de succès du libre-service et effort de l'utilisateur ; part des demandes sans voie de portail praticable |
| Couverture de l'automatisation | Choisir des éléments faciles pour la liste de candidats ; grossir le dénominateur de tâches triviales ; compter comme automatisés des flux en partie manuels | Liste écrite de candidats revue chaque trimestre ; taux d'échec et de reprise de l'automatisation ; temps d'intervention manuelle des éléments restants |
| Taux d'échec et de reprise de l'automatisation | Exclure les réparations manuelles du compte ; laisser les exécutions échouées se relancer en silence jusqu'à réussir ; étiqueter les échecs comme « essais à blanc planifiés » | Enregistrements d'incidents et d'alertes liés aux flux ; temps de détection d'une exécution échouée ; audit par échantillon des résultats |
| Temps d'intervention manuelle par type de demande | Ne pas consigner le temps des éléments qui paraissent manuels ; attribuer le temps à une autre catégorie ; n'échantillonner que les jours calmes | Plan d'échantillonnage écrit et revu ; comparer au temps de cycle et à l'âge de la file pour le même type |
| Répartition par niveau (part décalée vers la gauche) | Relever la part résolue au niveau 1 en requalifiant des escalades, ou en clôturant des éléments au niveau 1 et en les rouvrant au niveau 2 comme nouveaux éléments | Taux de réouverture et taux de tickets liés ; échantillon de qualité de résolution ; satisfaction des clients par niveau |

Une lecture saine montre un succès du libre-service qui monte avec un taux de chute stable ou en baisse, un désengorgement estimé énoncé avec sa méthode, une couverture de l'automatisation qui monte par rapport à une liste de candidats revue tandis que l'échec et la reprise restent bas, et une répartition par niveau qui déplace le travail plus tôt sans relever les taux de réouverture ni abaisser la satisfaction. Si un chiffre s'améliore pendant que son garde-fou empire, traitez l'amélioration comme non prouvée.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Libre-service d'abord | Résultats immédiats pour les utilisateurs, coût marginal plus bas, disponible à toute heure | Les utilisateurs aux besoins complexes ou inhabituels peuvent se sentir abandonnés ; un contenu faible crée plus de contacts qu'il n'en supprime |
| Contact avec le personnel d'abord | Aide personnelle, jugement et chance de remarquer des problèmes inhabituels | Plus lent, coûteux et dépendant de la disponibilité du personnel |
| Estimer le désengorgement avec un groupe témoin | Preuve crédible de l'effet | Exige un travail de conception et la tolérance d'un groupe qui ne reçoit pas le changement |
| Compter les sessions sans tickets | Peu coûteux et toujours disponible | Surestime le succès ; invite au détournement ; ne distingue pas le succès de l'abandon |
| Automatisation large | Exécution cohérente et moins de tâches répétitives | Charge d'entretien, modes d'échec qui passent à l'échelle et compétences qui peuvent s'éroder dans l'équipe |
| Automatisation sélective de flux stables | Meilleur retour pour l'effort et moins de surprises | Laisse en place du travail manuel, qui demande sa propre attention |

La réponse en prose est d'automatiser ce qui est fréquent, stable et bien compris, et de garder une personne disponible là où le besoin est flou ou les enjeux élevés. Le libre-service devrait être jugé à ce que les gens ont été aidés, la voie avec personnel restant visible. Les économies du décalage vers la gauche ne sont réelles que si le résultat pour l'utilisateur tient ; comptez donc les deux côtés.

## Questions à discuter avec votre équipe

**1. Quand un utilisateur ouvre le portail et repart sans ouvrir de ticket, que supposons-nous qu'il s'est passé, et comment le découvririons-nous ?**
Demandez au groupe de lister les histoires possibles : l'utilisateur a trouvé la réponse, a abandonné, a appelé à la place ou a demandé à un collègue. Regardez quelles données les distingueraient, comme un contact de suivi, une invite de sortie ou un échantillon de sessions. L'animateur doit consigner quelle hypothèse figure actuellement dans le tableau de bord et qui s'y fie. Concluez en convenant d'un changement qui remplacerait une hypothèse par une preuve.

**2. Comment estimons-nous actuellement le désengorgement, et défendrions-nous la méthode devant un partenaire financier sceptique ?**
Parcourez le calcul pas à pas, y compris le groupe de comparaison et les ajustements pour les variations de demande. Demandez ce qui a changé d'autre pendant la période, comme des versions, des pannes ou des changements de personnel. Notez la plage de valeurs plausibles autant que le chiffre de titre. La discussion devrait se terminer par un énoncé clair de la méthode qui peut figurer à côté du chiffre.

**3. Lesquelles de nos automatisations éteindrions-nous demain si nous connaissions leur vrai coût ?**
Listez les flux automatisés avec leurs responsables, la date du dernier changement, le nombre d'exécutions, les taux d'échec et l'effort d'entretien. Demandez lesquels personne ne regretterait, et lesquels les gens ont peur de toucher. L'animateur doit traiter le retrait comme un résultat légitime. Les réponses révèlent souvent des flux sans responsable.

**4. Qu'arrive-t-il à un utilisateur dont la tentative de libre-service échoue, et combien de temps met-il à atteindre une personne ?**
Demandez à quelqu'un de parcourir le chemin comme le ferait un utilisateur, y compris trouver la voie de contact. Chronométrez-le et notez chaque étape qui pourrait être raccourcie. Comparez l'expérience avec l'intention affichée du portail. Le groupe devrait décider si la voie est aussi facile à trouver que la voie de libre-service.

**5. À quoi ressemblait le mélange de travail du centre de services il y a un an, et à quoi ressemble-t-il maintenant ?**
Passez en revue le mélange de catégories et la répartition par niveau dans le temps. Discutez de la raison pour laquelle le temps de traitement ou la résolution au premier contact ont bougé, et si cela reflète un mélange plus difficile. Demandez si la direction a été informée que c'est attendu. Convenez de la manière de présenter la tendance pour qu'une hausse du temps de traitement après un décalage vers la gauche réussi ne soit pas lue comme un déclin.

**6. Que ferions-nous de la capacité que l'automatisation libère, et qui décide ?**
Estimez les heures retirées du travail manuel et nommez ce qu'elles devaient acheter. Demandez si le temps est allé au travail d'amélioration ou a été absorbé par une nouvelle demande. Discutez de la façon dont l'équipe le saurait. L'animateur doit pousser vers un engagement concret, comme une part de capacité réservée à corriger les principaux sujets de chute.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent une grande part de ce qui fait réussir le libre-service : messages d'erreur clairs, formulaires utilisables, aide intégrée au produit et possibilité d'accomplir des tâches sans ouvrir de ticket. Elles détiennent aussi l'automatisation qui vit dans les chaînes de livraison et le code d'infrastructure. Leurs mesures utiles sont le succès du libre-service sur leurs propres fonctions et les étapes manuelles restantes dans le travail de publication et d'environnement, traitées comme des tâches répétitives à supprimer (voir le sujet 2.8, Métriques DORA). Elles devraient lire les sujets de chute comme un backlog de produit.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent le parc d'automatisation et le repli avec personnel. Elles devraient suivre la fiabilité de l'automatisation, la charge d'entretien et le temps d'intervention manuelle qui reste, et surveiller la répartition par niveau sans être pénalisées pour le travail plus difficile qui demeure. Les agents devraient être consultés sur les demandes qui sont de bons candidats à l'automatisation, car ils savent où se trouve la vraie friction. Rapportez par flux et par type de demande, jamais par agent.

### Direction et gouvernance

Les dirigeants sont tentés de traiter le désengorgement comme un chiffre d'économies. Une meilleure demande porte sur le résultat pour l'utilisateur, la méthode derrière toute estimation et la fiabilité de l'automatisation. La gouvernance devrait attendre une liste de candidats, un responsable pour chaque flux automatisé et une règle de retrait. Les dirigeants devraient aussi protéger la voie avec personnel contre le fait d'être cachée pour atteindre un objectif (voir le sujet 11.3, Déployer les métriques sans semer la peur).

### Clients et utilisateurs

Les utilisateurs veulent continuer leur travail. Beaucoup préfèrent le libre-service quand il fonctionne, et presque tous détestent s'y trouver piégés quand il ne fonctionne pas. Leur expérience se saisit au mieux par des questions d'effort et de résultat au moment de la sortie, et par le fait qu'une tentative échouée a mené vite à une personne (voir le sujet 6.4, Expérience des utilisateurs et des employés). Les utilisateurs ayant des besoins d'accessibilité ou peu de confiance sont un signal d'alerte précoce pour les portails qui ne fonctionnent que pour l'utilisateur moyen.

## En pratique : un exemple d'ITIL agile

Le service informatique d'un détaillant en ligne de taille moyenne exploite un centre de services, une équipe de plateforme et plusieurs équipes produit. Les chiffres de cet exemple sont illustratifs.

Le service lance un portail repensé avec réinitialisation guidée de mot de passe, un flux de demande d'accès à un logiciel et un agent conversationnel pour les questions courantes. Trois mois plus tard, le rapport du portail montre que 62 pour cent des sessions se terminent sans ticket, et un responsable propose d'appeler cela « désengorgement » et de fixer un objectif de 70 pour cent. Le responsable du centre de services est mal à l'aise, car les agents rapportent que les gens qui appellent disent avoir « d'abord essayé le portail ».

L'équipe revoit les mesures. Elle définit le succès du libre-service comme un résultat accompli sans contact avec le personnel sur le même sujet dans les 7 jours. Selon cette définition, le taux de succès est de 48 pour cent, non de 62, et le taux de chute du flux de demande d'accès est de 31 pour cent. En lisant un échantillon de 40 contacts de chute, elle constate que la plupart des utilisateurs ne savaient pas lequel de deux éléments de catalogue semblables choisir, et que l'agent conversationnel répondait à une question sur un outil retiré.

L'équipe prend trois décisions. D'abord, la mesure de titre devient le succès du libre-service, le désengorgement estimé n'étant montré que comme une estimation trimestrielle fondée sur les contacts pour 1 000 utilisateurs actifs, et aucun objectif n'est fixé sur le désengorgement. Ensuite, les deux éléments de catalogue semblables sont fusionnés, le contenu de l'agent conversationnel est corrigé et les deux principaux sujets de chute sont ajoutés au backlog d'amélioration avec un responsable. Enfin, un processus manuel de création d'environnements de test, qui prend aux ingénieurs de plateforme une médiane de 25 minutes (illustratif) et survient environ 40 fois par mois (illustratif), est ajouté à la liste de candidats à l'automatisation.

L'équipe de plateforme automatise le flux d'environnement dans le trimestre. Un risque de détournement apparaît vite : le chiffre de couverture du flux monte, mais le taux d'échec et de reprise montre qu'une exécution sur huit (illustratif) exige une réparation manuelle et que les réparations étaient consignées comme « maintenance planifiée ». L'équipe ajoute les exécutions réparées au compte des échecs, relie les exécutions à l'enregistrement d'incident et convient de revoir le flux chaque mois. À la revue suivante, le taux de succès est monté à 57 pour cent (illustratif), le taux de chute a baissé, et le temps de traitement du centre de services a légèrement monté parce que les contacts restants sont plus difficiles. La directrice informatique convient de présenter le temps de traitement avec la répartition par niveau, pour éviter de lire la hausse comme un déclin.

## Perspective sectorielle

**Startup.** Les fondateurs peuvent souvent corriger une mauvaise voie de libre-service en parlant à l'utilisateur. Mesurez le succès par une seule question de sortie et quelques lectures de sessions réelles, et automatisez les deux ou trois tâches qui interrompent le plus de monde. Évitez de construire un agent conversationnel avant que les réponses écrites soient bonnes.

**Petite entreprise.** Une seule personne peut gérer l'informatique pour tous ; le libre-service signifie donc surtout de bons guides courts et un formulaire de demande partagé. L'automatisation de la création de comptes et des réinitialisations de mots de passe se rentabilise vite, à condition que quelqu'un détienne chaque flux. Gardez la voie avec personnel évidente, car le personnel du propriétaire contournera sinon le système.

**Grande entreprise.** L'échelle accroît à la fois le bénéfice et le détournement. Standardisez les définitions entre unités d'affaires, tenez une liste centrale de candidats et un registre d'automatisation, et rapportez par service et par élément de catalogue. Méfiez-vous de la comparaison d'unités qui servent des populations d'utilisateurs très différentes.

**Gouvernement et secteur public.** L'accessibilité, l'accès linguistique et l'obligation de servir les personnes qui ne peuvent pas employer les canaux numériques sont des apports de conception, non des suppléments. Gardez disponibles et mesurées les voies assistées, documentez les décisions automatisées qui touchent des personnes, et attendez-vous à des questions d'audit sur le responsable de chaque flux automatisé (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les motivations sont moins de contacts répétitifs, des résultats plus rapides pour les utilisateurs, une exécution plus régulière des tâches courantes et plus de capacité pour le travail d'amélioration. Le côté coût comprend la construction et l'entretien du portail et du contenu, le travail d'intégration et de données pour joindre les sessions aux tickets, la plateforme d'automatisation, et le temps d'écrire, de tester et de détenir chaque flux automatisé. Les échantillons de temps du personnel et une courte enquête de sortie coûtent peu, et ils fournissent l'essentiel des preuves dont vous avez besoin.

Le retour devrait être argumenté à partir de vos propres données. Employez le temps d'intervention manuelle et le volume pour estimer l'effort qu'une automatisation supprime, soustrayez l'entretien et le coût des échecs, et rapportez le résultat comme une plage avec ses hypothèses. Pour le libre-service, employez le taux de chute et les résultats échantillonnés pour montrer la part de contacts évités parce que les utilisateurs ont été aidés, et pas seulement éconduits. N'importez pas de pourcentages de désengorgement ou d'économies de fournisseurs ou d'enquêtes ; mesurez d'abord votre propre ligne de base. Le coût total de possession d'une automatisation inclut les changements dont elle aura besoin à mesure que les systèmes autour d'elle évoluent ; prévoyez-les donc au budget.

## Antimodèles et pièges

- **Compter les sessions sans tickets comme un succès.** Cela ne distingue pas l'aide de l'abandon. Définissez le succès par le résultat et vérifiez-le par la chute et les retours de sortie.
- **Des objectifs sur le désengorgement.** Ils récompensent le fait de cacher la voie de contact. Employez le désengorgement comme une estimation et fixez les objectifs sur les résultats des utilisateurs.
- **Cacher le numéro de téléphone ou la discussion.** Les utilisateurs qui ne peuvent pas joindre une personne augmentent leur effort et perdent confiance. Gardez la voie avec personnel visible et mesurez le temps qu'il faut pour l'atteindre.
- **Automatiser avant de comprendre le processus.** Le flux encode la confusion à grande vitesse. Documentez et simplifiez d'abord le guide d'exploitation, puis automatisez la version stable.
- **Une automatisation sans responsables.** Les flux sans responsable se dégradent en silence et échouent aux mauvais moments. Donnez à chaque flux un responsable, un test, une supervision et une règle de retrait.
- **Ignorer le coût de l'échec.** Un chiffre de couverture élevé avec une reprise non mesurée est un passif caché. Rapportez le taux d'échec et de reprise avec la couverture.
- **Lire une hausse du temps de traitement comme un déclin.** Après un décalage vers la gauche réussi, le travail restant est plus difficile. Montrez la répartition par niveau et le mélange de catégories à côté des mesures de temps.
- **Classer les agents par contacts désengorgés.** Cela produit des utilisateurs repoussés et gâte les données. Rapportez seulement par service et par flux.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Succès du libre-service et désengorgement | Visites du portail et comptes de tickets rapportés ; pas de définition de résultat | Succès défini pour certaines voies ; désengorgement cité sans méthode | Une définition écrite du succès ; chute mesurée ; désengorgement étiqueté comme estimation | Succès et chute suivis dans le temps avec les retours de sortie ; désengorgement estimé par comparaison | Résultats partagés avec les équipes produit et les fournisseurs ; les sujets de chute pilotent des corrections financées |
| Couverture et fiabilité de l'automatisation | Automatisation improvisée ; pas de liste de candidats | Certains flux automatisés par des équipes individuelles ; échecs traités de façon informelle | Liste de candidats, responsables et mesures d'échec définis pour chaque flux automatisé | Couverture, taux d'échec et effort d'entretien revus et financés selon un rythme | Automatisation coordonnée entre équipes et fournisseurs ; flux retirés et révisés couramment |
| Effet du décalage vers la gauche et usage | Volume rapporté sans contexte | Répartition par niveau suivie par quelques équipes | Répartition par niveau et mélange de catégories rapportés à côté du temps de traitement | Capacité libérée planifiée et suivie ; la direction lit correctement les effets de mélange | Capacité et apprentissage retournent dans les services et la conception du catalogue dans toute l'organisation |

## Liste de vérification

- [ ] Le succès du libre-service est défini par le résultat, avec un début, une fin et des exclusions écrits.
- [ ] Le taux de chute est mesuré pour les principales voies de libre-service.
- [ ] Tout chiffre de désengorgement énonce sa méthode et est étiqueté comme estimation.
- [ ] Aucun objectif n'est fixé sur le désengorgement.
- [ ] Une invite de sortie à une question ou un retour équivalent existe pour les voies clés.
- [ ] Une liste écrite de candidats à l'automatisation existe et est revue chaque trimestre.
- [ ] Chaque flux automatisé a un responsable, une supervision et une mesure d'échec et de reprise.
- [ ] Le temps d'intervention manuelle est échantillonné pour les principaux types de demandes.
- [ ] La répartition par niveau est montrée à côté du temps de traitement et de la résolution au premier contact.
- [ ] La voie avec personnel est visible et son temps d'accès est vérifié.
- [ ] Les principaux sujets de chute sont revus chaque mois et acheminés vers des responsables.
- [ ] Aucune métrique de ce sujet n'est rapportée ni ciblée par agent.

## Prompts d'IA

**Vérifiez comment nous estimons le désengorgement.**

```text
Nous exploitons [type of service] pour [number] utilisateurs actifs. Nous
rapportons le désengorgement ainsi : [describe current calculation], à partir de
données de [tools]. Changements dans la période : [releases, campaigns, outages,
staffing changes]. Examinez la méthode et expliquez où elle peut surestimer ou
sous-estimer l'effet. Suggérez une meilleure comparaison, comme un groupe témoin
ou les contacts pour 1 000 utilisateurs actifs, en n'employant que les données
que je décris. N'inventez ni valeurs de référence ni objectifs. Énumérez vos
hypothèses et les données dont vous auriez besoin pour affermir l'estimation.
```

**Analysez les sujets de chute à partir d'un échantillon.**

```text
Ci-dessous figurent [number] contacts avec le personnel de [service] qui ont
suivi une tentative de libre-service sur le même sujet, avec les champs [list
fields] et la description de l'utilisateur. Regroupez-les par cause probable
(lacune de contenu, formulaire déroutant, défaut, accès manquant, préférence de
l'utilisateur) et rapportez des schémas, non des individus. Suggérez quels
groupes de causes remettre aux responsables des connaissances, aux équipes
produit ou à la gestion des problèmes. Ne devinez pas au-delà du texte fourni.
Énumérez vos hypothèses et ce que vous n'avez pas pu juger.

[paste contacts with personal data removed]
```

**Classez les candidats à l'automatisation.**

```text
Voici une liste de types de demandes et d'incidents pour [team] : [type, monthly
volume, median manual minutes, variability, risk if wrong]. Proposez un
classement des candidats à l'automatisation et expliquez le raisonnement pour
chacun, y compris la charge d'entretien et l'impact d'un échec. Signalez les
éléments qui devraient rester manuels. N'employez que les chiffres que j'ai
fournis et n'inventez pas de chiffres d'économies. Énumérez vos hypothèses et
les questions auxquelles je devrais répondre avant de m'engager.
```

**Concevez les garde-fous d'un flux automatisé.**

```text
Nous automatisons [flow name] pour [service]. Processus manuel actuel : [steps].
Outillage : [automation platform]. Proposez les métriques à suivre (couverture,
échec et reprise, temps de détection d'une exécution échouée, effort
d'entretien), une façon dont chacune pourrait être détournée et un garde-fou
pour chacune. Incluez un repli manuel sûr et un critère de retrait. N'inventez
ni seuils ni références. Énumérez vos hypothèses et tout ce que vous devez
savoir de notre environnement.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet apparenté et le garde-fou d'une métrique de libre-service ou d'automatisation que vous prévoyez d'introduire.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent chaque métrique associée à un vecteur de détournement et à un garde-fou.

## Points clés à retenir

- Le succès du libre-service est un résultat pour l'utilisateur ; définissez-le donc de son côté et vérifiez-le par la chute et les retours de sortie.
- Le désengorgement est une estimation ; énoncez donc la méthode et gardez-le hors des objectifs.
- La couverture de l'automatisation ne signifie pas grand-chose sans fiabilité, entretien et liste de candidats revue.
- Le décalage vers la gauche rend plus difficile le travail restant ; lisez donc le temps de traitement avec la répartition par niveau et le mélange de catégories.
- Mesurez des flux, des services et des éléments de catalogue, jamais des agents, et gardez visible la voie avec personnel.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
