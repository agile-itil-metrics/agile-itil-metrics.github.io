# Métriques de capacité et de performance

**Mesurez à quel point un service est plein, à quel point ses requêtes les plus lentes sont lentes et combien de marge il reste avant que les utilisateurs le remarquent, puis prévoyez la demande par des plages afin que la capacité arrive avant le besoin et non après la plainte.**

## Résumé et motivation

La disponibilité dit si un service répond. La capacité et la performance disent avec quelle qualité il répond, et combien de temps il continuera de le faire à mesure que la demande croît. Une page de paiement qui répond en huit secondes est « en service » selon la plupart des définitions de la disponibilité et « cassée » selon la définition de tout client. Une base de données remplie à 95 pour cent de son stockage est saine aujourd'hui et une panne le mois prochain. Ce sujet couvre les mesures qui comblent ces écarts.

La [planification de la capacité](https://en.wikipedia.org/wiki/Capacity_planning) est la pratique qui détermine les ressources dont un service a besoin pour répondre à une demande changeante. Dans ITIL 4, elle relève de la pratique de gestion de la capacité et de la performance, qui vise à s'assurer que les services atteignent la performance convenue et attendue et satisfont la demande actuelle et future à un coût raisonnable. La pratique la décrit à trois niveaux : l'entreprise (ce que l'organisation demandera à ses services), le service (comment un service se comporte sous charge) et le composant (comment chaque serveur, base de données, lien réseau ou file se comporte). Les mesures de ce sujet travaillent surtout aux niveaux du service et du composant, et elles ont besoin d'apports du niveau de l'entreprise pour prévoir quoi que ce soit.

L'[ingénierie de la fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) traite la latence, le trafic, les erreurs et la saturation comme les quatre signaux à surveiller sur tout système orienté utilisateur, et elle relie les cibles de performance aux objectifs de niveau de service (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Les équipes agiles rencontrent la capacité comme une question de livraison : la prochaine version peut-elle porter la charge attendue, et qui détient la réponse ? Traiter la performance comme un critère d'acceptation, vérifié dans la chaîne de livraison, déplace la conversation plus tôt.

Plusieurs termes reviennent dans ce sujet. L'**utilisation** est la part de la capacité d'une ressource qui est employée sur un intervalle, par exemple la part du temps de processeur occupé. La **saturation** est la quantité de travail qui attend parce qu'une ressource est pleinement employée, par exemple la longueur d'une file d'exécution ou d'un arriéré de requêtes. L'utilisation dit à quel point une ressource est occupée. La saturation dit si du travail fait la queue pour elle, et ce sont les files que les utilisateurs ressentent. La **[latence](https://en.wikipedia.org/wiki/Latency_(engineering))** est le temps entre une requête et sa réponse. Le **[débit](https://en.wikipedia.org/wiki/Throughput)** est le rythme auquel un service accomplit du travail, par exemple des requêtes par seconde. La **marge** est l'écart entre la charge de pointe actuelle et la charge à laquelle le service cesse de respecter ses objectifs. La **demande** est le travail que les utilisateurs et l'entreprise demandent au service, ce qui n'est pas la même chose que le travail qu'il accomplit : un service surchargé accomplit moins que ce qui a été demandé.

Une propriété des files d'attente explique pourquoi ces mesures se comportent ainsi. La [théorie des files d'attente](https://en.wikipedia.org/wiki/Queueing_theory) montre que, pour un service aux arrivées aléatoires, le temps d'attente croît lentement tant que l'utilisation est modérée, puis monte fortement quand l'utilisation approche le plein emploi. La [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law) relie le nombre moyen de requêtes dans un système au rythme d'arrivée et au temps moyen que chacune y passe. Une ressource à forte utilisation moyenne est proche d'une falaise. La forme exacte de la courbe dépend du service ; trouvez-la donc en testant votre propre système par des [tests de charge](https://en.wikipedia.org/wiki/Load_testing) au lieu d'emprunter un seuil à un article général.

La latence demande un soin particulier parce que la moyenne cache l'expérience qui compte. Un [percentile](https://en.wikipedia.org/wiki/Percentile) énonce la valeur en dessous de laquelle tombe une part donnée des observations : le 95e percentile (p95) est la latence que 95 pour cent des requêtes battent. La [latence de queue](https://en.wikipedia.org/wiki/Tail_latency) tend à dominer dans les systèmes où une action d'utilisateur se démultiplie en de nombreux appels internes. Rapportez des percentiles plutôt que la seule moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service, et le sujet 3.3, Temps de réponse et de résolution des incidents, qui fait le même argument pour le temps de résolution).

Enfin, la capacité dépend de la [prévision](https://en.wikipedia.org/wiki/Forecasting) de la demande, et la demande a des schémas : cycles quotidiens, cycles hebdomadaires et [saisonnalité](https://en.wikipedia.org/wiki/Seasonality) liée au calendrier, aux campagnes et aux lancements de produits. L'[adaptation automatique de la capacité](https://en.wikipedia.org/wiki/Autoscaling) change la sensation, puisque les plateformes en nuage peuvent ajouter des ressources en quelques minutes, mais elle ne supprime pas le sujet. Elle a des limites, un délai, un coût et des dépendances qui ne passent pas à l'échelle, comme une base de données ou une interface tierce. Le côté coût relève du FinOps (voir le sujet 7.6, Métriques FinOps et de coûts du nuage).

Les sujets voisins couvrent l'arithmétique de la disponibilité (voir le sujet 5.3, Métriques de disponibilité), la conception des alertes (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) et la charge de rotation (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte). Ici, le sujet est les propres ressources du service et ses temps de réponse.

## Principes clés

- **Mesurer la saturation autant que l'utilisation.** L'utilisation montre à quel point une ressource est occupée, et la saturation montre si du travail attend. Les utilisateurs vivent l'attente.
- **Rapporter la latence comme une distribution.** Employez des percentiles par opération orientée utilisateur, et gardez la queue lente visible. Une moyenne d'une distribution asymétrique ne décrit presque personne.
- **Relier les cibles à l'expérience des utilisateurs.** Un seuil a un sens quand il remonte à quelque chose qui compte pour un utilisateur ou l'entreprise, non à ce qu'un outil se trouve à tracer.
- **Planifier avec des plages et les revoir.** Une prévision est une plage avec des hypothèses énoncées. Comparez-la avec ce qui s'est passé et apprenez de l'erreur.
- **Connaître ses limites par des tests.** La capacité est une hypothèse tant qu'un test de charge réaliste ne la confirme pas. Répétez le test après les changements qui comptent.
- **Décrire des systèmes, jamais des personnes.** Ces mesures appartiennent à des services, des composants et des équipes. Ce ne sont jamais une fiche de notes pour des individus.
- **Peser le coût contre le risque.** La capacité de réserve coûte de l'argent, et la capacité manquante coûte des clients. Rendez l'arbitrage visible afin qu'il soit choisi, non subi.

## Définitions des métriques

Le tableau liste sept mesures. Les horloges et les frontières sont énoncées dans chaque formule. Les mesures par percentile emploient une fenêtre fixe, énoncée dans le registre, et sont calculées à partir d'observations brutes ou d'histogrammes, jamais comme une moyenne de moyennes.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Utilisation des ressources | Part de la capacité d'une ressource employée sur un intervalle, rapportée comme un percentile élevé de la série d'intervalles | capacité occupée / capacité totale, par intervalle de 1 à 5 minutes ; rapportez la médiane et le 95e percentile sur la fenêtre de revue ; les fenêtres de maintenance où la ressource est vidée sont exclues | pourcentage | Supervision de l'infrastructure et métriques de la plateforme en nuage | Gestion de la capacité et de la performance ; supervision et gestion des événements | Critères d'acceptation opérationnelle dans la définition de terminé ; signaux de ressources SRE | Hebdomadaire |
| Saturation | Quantité de travail en attente d'une ressource pleinement employée | longueur de file, file d'exécution, requêtes en attente ou requêtes bridées, par intervalle ; rapportez le 95e percentile et la part d'intervalles avec une attente quelconque ; les intervalles sans demande sont exclus | nombre, ou pourcentage d'intervalles | Télémétrie de l'application et de l'infrastructure | Gestion de la capacité et de la performance ; supervision et gestion des événements | Signal de saturation SRE ; limite de travail en cours sur une file de service | Hebdomadaire |
| Percentile de latence | Temps pris pour répondre à une requête d'une opération orientée utilisateur, rapporté à la médiane, au p95 et au p99 | temps de réponse de la requête reçue en périphérie au dernier octet envoyé, par requête réussie ; les requêtes échouées sont rapportées comme erreurs, non comme réponses rapides ; mesure sur une fenêtre glissante | millisecondes | Journaux de l'équilibreur de charge ou de la passerelle, traçage, supervision des utilisateurs réels | Gestion des niveaux de service ; gestion de la capacité et de la performance | Indicateur de latence SRE et objectif de niveau de service | Continue, revue hebdomadaire |
| Marge | Charge restante qu'un service peut porter avant de manquer ses objectifs | (charge de rupture testée ou modélisée - charge de pointe actuelle) / charge de pointe actuelle ; la pointe est l'heure la plus chargée de la fenêtre ; la charge de rupture est la charge à laquelle l'objectif de latence est d'abord manqué lors d'un test, non le maximum matériel | pourcentage, ou jours au rythme de croissance actuel | Résultats de tests de charge et télémétrie du trafic | Gestion de la capacité et de la performance ; gestion des niveaux de service | Exigences non fonctionnelles et tests de performance dans la chaîne de livraison | Mensuelle, et avant les lancements importants |
| Erreur de prévision | Différence entre la demande prévue et la demande réelle pour une période | valeur absolue de (pointe prévue - pointe réelle) / pointe réelle, pour un horizon énoncé ; la prévision est gelée au début de l'horizon et non révisée ensuite ; les événements ponctuels non prévus sont listés, non retirés | pourcentage | Registre des prévisions et télémétrie du trafic | Gestion de la capacité et de la performance ; planification liée à la demande dans la gestion financière des services | Prévision de version et de feuille de route ; prévision de la demande SRE | Trimestrielle |
| Délai de mise à disposition de la capacité | Temps nécessaire pour mettre en service de la nouvelle capacité une fois le besoin accepté | l'horloge démarre quand la demande de capacité est approuvée et s'arrête quand la capacité porte du trafic de production ; rapportez la médiane et le 85e percentile ; les demandes annulées sont exclues | jours | Enregistrements de demandes de l'outil ITSM, enregistrements de changements, journaux de provisionnement | Gestion de la capacité et de la performance ; gestion des demandes de service ; maîtrise des changements | Délai de livraison d'un élément de backlog de plateforme (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Trimestrielle |
| Couverture par tests de performance | Part des services critiques ayant un test de charge récent et réaliste | services critiques ayant un test de charge réussi d'un âge inférieur à un âge énoncé, sur un environnement et une charge de travail représentatifs / services critiques du registre ; la limite d'âge est écrite | pourcentage | Stockage des résultats de tests et registre des services | Gestion de la capacité et de la performance ; gestion des versions | Tests non fonctionnels dans la chaîne de livraison continue | Trimestrielle |

Ensemble, elles répondent à quatre questions : à quel point est-ce plein, à quel point est-ce lent, combien de marge reste-t-il et à quelle vitesse pouvons-nous réagir quand la réponse change.

## Recommandations

### Commencer par l'utilisateur, puis la ressource

**1. Choisissez les quelques opérations qui comptent pour les utilisateurs, et mesurez-les.** Un service a des centaines de points d'accès et une poignée de parcours qui comptent, comme se connecter, chercher, payer et télécharger un relevé. Convenez-en avec les responsables de produit et les clients, et fixez une attente de latence pour chacun. Ils se relient naturellement aux indicateurs de niveau de service (voir le sujet 5.2, SLI, SLO et budgets d'erreur).

**2. Associez chaque graphique de ressource à un graphique de saturation.** Montrer seule l'utilisation du processeur invite au faux confort de « il n'a atteint que 70 pour cent ». Ajoutez la file, les requêtes en attente ou le compte de requêtes bridées à côté. Quand la saturation apparaît avant que l'utilisation paraisse alarmante, vous avez trouvé la vraie contrainte, et cette contrainte n'est souvent pas la ressource que vous surveilliez, comme un réservoir de connexions, une limite de fils d'exécution ou une limite de débit sur une interface de partenaire.

**3. Préférez la queue chargée à la moyenne calme.** Les moyennes sur une journée mêlent le cœur de la nuit et la pointe du déjeuner. Regardez la période la plus chargée et consignez la date et la cause des pires intervalles. La question de planification est de savoir comment le service se comporte à sa pire heure attendue.

### Rapporter honnêtement la latence

**4. Publiez des percentiles par opération, et nommez la fenêtre.** Énoncez la médiane, le p95 et le p99 de chaque opération importante sur une fenêtre glissante, et dites quelles requêtes sont incluses. Ne faites jamais la moyenne de percentiles entre serveurs ou entre opérations, car le résultat ne correspond à l'expérience d'aucun utilisateur réel ; combinez plutôt les histogrammes ou les observations brutes. Si l'échantillon est petit, dites-le, car un p99 tiré de quelques centaines de requêtes est un chiffre bruité (voir le sujet 1.6, Culture statistique pour les métriques de service).

**5. Mesurez là où est l'utilisateur, autant que là où est le serveur.** Les temps côté serveur laissent de côté le réseau, le navigateur et l'appareil. Ajoutez la supervision des utilisateurs réels ou des contrôles synthétiques pour pouvoir distinguer un arrière-plan lent d'un dernier kilomètre lent.

**6. Comptez les erreurs et les dépassements de délai avec la latence, non à sa place.** Un service qui échoue vite paraît rapide dans un graphique de latence, et un service qui dépasse son délai paraît lent pour la mauvaise raison. Rapportez le taux d'erreur avec le percentile de latence afin qu'un échec rapide ne puisse pas flatter le résultat.

### Trouver les limites, puis laisser de la marge

**7. Testez le point de rupture exprès.** Menez des tests de charge qui rejouent un mélange réaliste d'opérations, faites monter la charge et notez où l'objectif de latence est d'abord manqué et quelle ressource sature en premier. Testez sur un environnement qui ressemble à la production sur les points qui comptent, et écrivez les points où il n'y ressemble pas. Un test échoué dans un endroit sûr est l'incident le moins cher que vous aurez (voir le sujet 4.5, Métriques des versions et des déploiements, pour placer des contrôles dans la chaîne de livraison).

**8. Fixez la marge comme une politique et revoyez-la comme un arbitrage.** Décidez de la marge qu'un service garde au-dessus de sa pointe attendue, et pourquoi. Les services critiques orientés client en justifient plus, les services internes par lots moins. Le chiffre est un choix métier sur le coût et le risque ; consignez donc le raisonnement et revisitez-le quand le coût d'une panne ou le prix de la capacité change. Ne copiez pas un nombre d'une autre organisation.

### Prévoir la demande avec les personnes qui la connaissent

**9. Demandez à l'entreprise ce qui s'en vient, et écrivez la prévision.** Les campagnes marketing, les nouveaux clients, les échéances réglementaires et les événements saisonniers changent la demande bien avant que le trafic le montre. Tenez un court registre des prévisions avec la date, les hypothèses, la plage, le responsable et la source de chaque apport. Une prévision donnée comme une plage, avec un cas bas, attendu et haut, est plus honnête qu'un seul nombre et plus utile pour décider combien acheter.

**10. Notez la prévision et employez l'erreur pour l'améliorer.** Après chaque période, comparez la prévision gelée avec ce qui s'est passé, à l'aide de l'erreur de prévision, et listez les causes des gros écarts. Les causes courantes sont une campagne non annoncée, un changement de comportement des utilisateurs et une dépendance qui a bougé. Le but n'est pas une erreur nulle, ce qui est inatteignable, mais d'apprendre quels apports sont fiables et d'élargir la plage là où ils ne le sont pas.

### Faciliter l'ajout de capacité

**11. Raccourcissez le délai de mise à disposition de la capacité avant de poursuivre l'exactitude.** Si la nouvelle capacité met des semaines à arriver, vous devez prévoir loin à l'avance et porter plus de réserve. Si elle met des minutes, vous pouvez tourner plus près du besoin. Regardez les étapes entre « approuvé » et « porte du trafic », comme l'achat, l'approbation, le provisionnement, la configuration et les tests, et supprimez d'abord les plus longues attentes (voir le sujet 4.3, Métriques de maîtrise des changements). En termes ITIL, c'est un choix de stratégie de capacité : devancer la demande, la suivre ou la traîner ; choisissez consciemment, service par service.

**12. Traitez l'adaptation automatique comme un système à mesurer.** Consignez à quelle fréquence l'adaptation se déclenche, combien de temps la nouvelle capacité met à devenir utile, à quelle fréquence elle atteint son maximum configuré et ce qu'elle coûte. Un adaptateur bloqué à sa limite est un plan de capacité qui a déjà échoué. Passez ces points en revue avec la vue des coûts afin que la performance et la dépense soient discutées ensemble (voir le sujet 7.5, Coût du service et économie unitaire).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Utilisation des ressources | Faire la moyenne sur de longs intervalles pour cacher les pointes ; compter la capacité réservée inactive comme « employée » ; ne rapporter que les ressources les plus calmes | 95e percentile en heure de pointe à côté de la moyenne ; mesure de saturation ; liste des ressources concernées revue au regard de la carte des services |
| Saturation | Relever les limites de file pour que rien ne soit rapporté comme rejeté ou bridé ; déplacer l'attente vers une autre file non mesurée | Percentile de latence et taux d'erreur pour la même opération ; temps de file de bout en bout, non une seule étape ; revue de toutes les files du chemin |
| Percentile de latence | Ne rapporter que la moyenne ou la médiane ; retirer de l'échantillon les requêtes lentes ou échouées ; mesurer depuis un emplacement interne rapide ; exclure des « valeurs aberrantes » | p95 et p99 toujours montrés ; taux d'erreur et de dépassement de délai montrés à côté de la latence ; supervision des utilisateurs réels comparée au temps côté serveur ; taille brute de l'échantillon montrée |
| Marge | Choisir une charge de test douce ; tester un environnement plus grand que la production ; définir le point de rupture comme le maximum matériel | Charge de test revue au regard de la forme du trafic de production ; liste écrite des différences entre test et production ; marge retestée après les changements pertinents |
| Erreur de prévision | Réviser la prévision après coup ; fixer de très larges plages pour que tout résultat soit « dans la plage » ; retirer les mois à surprises comme « événements non prévus » | Prévision gelée et datée dans le registre ; largeur de la plage rapportée avec l'erreur ; chaque événement exclu listé et revu |
| Délai de mise à disposition de la capacité | Démarrer l'horloge plus tard en retardant les enregistrements d'approbation ; clore les demandes quand la commande est passée plutôt que quand la capacité porte du trafic ; scinder les demandes | Horloge définie de l'approbation au trafic porté ; échantillon de demandes closes comparé aux journaux de provisionnement ; nombre de demandes rouvertes |
| Couverture par tests de performance | Mener un test trivial pour revendiquer la couverture ; rétrécir la liste des services critiques ; garder à l'inventaire un vieux test réussi | Âge du test et réalisme de la charge consignés ; liste des services critiques revue au regard du catalogue de services et de l'historique des incidents ; tests échoués rapportés autant que les réussis |

Une lecture saine montre une utilisation avec des cycles quotidiens visibles et de la marge, une saturation qui apparaît rarement et brièvement, des percentiles de latence stables ou en amélioration aux heures les plus chargées, et une erreur de prévision connue et qui diminue lentement. Le signe sain est que les surprises sont discutées avec leurs causes. Des chiffres parfaits devraient éveiller le soupçon, car ils signifient généralement que la mesure est douce.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Tourner avec une marge généreuse | Absorbe les surprises ; protège la latence et la disponibilité | Coût plus élevé ; cache l'inefficacité et une prévision faible |
| Tourner au plus juste avec une adaptation automatique rapide | Coût plus bas ; la capacité suit la demande | Dépend de la vitesse et des limites d'adaptation ; les dépendances peuvent ne pas s'adapter ; plus difficile à raisonner pendant un incident |
| Cibles de latence par percentile | Reflètent ce que ressentent les requêtes lentes ; résistent aux astuces de moyenne | Exigent plus de données et de plus grands échantillons ; bruitées à haut percentile pour les services à faible trafic |
| Latence moyenne ou médiane seulement | Simple et stable | Cache la queue qui pilote les plaintes et le départ des clients |
| Tests de charge synthétiques | Contrôlés, répétables, sûrs | Aussi réalistes que le modèle de charge et l'environnement |
| Télémétrie de production comme base | Reflète le comportement réel et le mélange réel | Ne révèle les limites qu'une fois atteintes ; ne peut pas sonder au-delà de la demande actuelle |
| Modèles de prévision détaillés | Capturent la saisonnalité et la croissance | Exigent des données et de la compétence ; fausse impression de précision quand les apports sont faibles |
| Plages simples convenues avec l'entreprise | Faciles à expliquer et à mettre à jour ; se concentrent sur les hypothèses | Plus grossières ; dépendent d'un apport honnête de l'entreprise |

Choisissez la méthode la plus légère qui soutient la décision. Pour la plupart des services, un regard hebdomadaire sur l'utilisation en heure de pointe, la saturation et les percentiles de latence, un test de charge avant les changements importants et une revue trimestrielle des prévisions suffisent. Ajoutez de la modélisation là où le coût de se tromper est grand.

## Questions à discuter avec votre équipe

**1. Quels trois parcours utilisateur comptent le plus, et quel temps de réponse les utilisateurs attendent-ils pour chacun ?**
Demandez au groupe de nommer les parcours, puis comparez avec ce que tracent les tableaux de bord. L'animateur doit insister pour obtenir une attente qui remonte à un utilisateur ou à un client, non une préférence d'ingénierie.

**2. Où notre service est-il proche d'une falaise, et comment le savons-nous ?**
Cherchez des ressources comme les réservoirs de connexions, les limites de fils d'exécution ou une limite de débit d'un partenaire. Demandez quand chacune a été testée pour la dernière fois jusqu'à son point de rupture. Si personne ne le sait, c'est le premier travail à faire.

**3. Comment rapportons-nous la latence aujourd'hui, et que dirait le centile le plus lent des utilisateurs ?**
Affichez côte à côte la moyenne, la médiane, le p95 et le p99 d'une opération et discutez de l'écart. Demandez quelles requêtes sont exclues et pourquoi, et si les requêtes échouées sont comptées.

**4. Quelle marge gardons-nous, qui l'a choisie et quand avons-nous revisité le choix pour la dernière fois ?**
Discutez du coût de la marge et du coût d'une panne le jour le plus chargé. Convenez d'une date de revue et des preuves qui changeraient la marge.

**5. Dans quelle mesure nos trois dernières prévisions de demande étaient-elles bonnes, et qu'avons-nous appris ?**
Comparez les prévisions datées avec les valeurs réelles et les causes des gros écarts. Demandez ce que l'entreprise savait et que l'exploitation n'a pas reçu. Décidez d'un apport à ajouter au registre des prévisions, comme le calendrier marketing ou un calendrier de lancements.

**6. Si nous avions besoin du double de capacité le mois prochain, qu'est-ce qui nous arrêterait ?**
Listez chaque étape de la demande au trafic de production et marquez où elle attend. Incluez l'achat, les approbations, les licences et les dépendances qui ne passent pas à l'échelle. L'animateur doit chercher la plus longue attente qui n'est pas technique, car c'est souvent une approbation ou un contrat. Convenez d'une étape à raccourcir et mesurez l'effet par le délai de mise à disposition de la capacité.

## Quatre perspectives

### Équipes produit et livraison

Incluez une attente de performance dans les critères d'acceptation des fonctions qui touchent des chemins chargés, menez un test de charge dans la chaîne de livraison là où c'est praticable et informez tôt l'exploitation des lancements. Méfiez-vous de l'habitude de traiter la performance comme une tâche de « durcissement » ultérieure, qui se transforme en travail non planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent la télémétrie, le plan de capacité et la réponse quand une limite est atteinte. Elles ont besoin de la saturation et de la latence de queue sur les tableaux de bord qu'elles emploient réellement, d'un registre de prévisions partagé avec l'entreprise et de résultats de tests auxquels on fait confiance. Elles devraient consigner chaque incident lié à la capacité avec sa cause (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 3.4, Métriques des incidents majeurs).

### Direction et gouvernance

Les dirigeants décident du risque et du coût que l'organisation accepte, et la politique de marge est l'endroit où cette décision apparaît. Demandez des percentiles de latence et la marge par service critique, avec l'erreur de prévision à côté, et traitez les demandes de capacité comme des décisions d'investissement qui portent des preuves. Les instances de gouvernance devraient résister à un objectif d'utilisation unique pour toute l'organisation, qui pousse chaque service au même point de la falaise.

### Clients et utilisateurs

Les clients ressentent la lenteur comme de la non-fiabilité, bien avant qu'un chiffre de disponibilité change. Énoncez la performance en termes de percentiles à une charge donnée, et partagez la manière dont le service traite les périodes de pointe (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA, et le sujet 6.2, Accords de niveau d'expérience).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite une vitrine, un service de paiement et un service de commandes, chacun détenu par une équipe produit, avec une équipe de plateforme qui fournit l'infrastructure partagée. Tous les chiffres de cet exemple sont illustratifs.

La revue hebdomadaire de l'équipe de plateforme montre une recherche de la vitrine avec une latence médiane de 180 millisecondes et un p95 de 420 millisecondes, tous deux dans l'objectif, et une utilisation du processeur à un 95e percentile en heure de pointe de 58 pour cent. Trois semaines avant des soldes planifiés, un responsable du soutien rapporte que des clients disent que le site « rampe » pendant les campagnes du soir. Le tableau de bord est vert.

L'équipe regarde le p99 de la recherche à l'heure la plus chargée des soldes précédents et trouve 3,1 secondes, contre un objectif de p99 de 1,5 seconde. La saturation raconte le reste : le réservoir de connexions vers la base de données de produits montre des requêtes en attente dans 14 pour cent des intervalles d'une minute pendant la pointe, alors que l'utilisation du processeur n'a jamais dépassé 60 pour cent. La contrainte n'a jamais été le processeur. C'était une limite de réservoir fixée quand le trafic était le tiers d'aujourd'hui.

Le responsable de produit et le chef de la plateforme mènent un test de charge à 1,5 fois la pointe de l'an dernier, avec le mélange d'opérations de la production. Le test montre que l'objectif de p99 est manqué à 1,15 fois la pointe de l'an dernier ; la marge est donc de 15 pour cent contre une politique de 40 pour cent pour les services orientés client. Le calendrier marketing suggère une demande de 1,6 fois la pointe de l'an dernier le jour d'ouverture. L'ancienne prévision, gelée dans le registre, avait fixé la plage de 1,2 à 1,4, et l'erreur par rapport aux soldes de l'an dernier était de 22 pour cent, surtout à cause d'une campagne de courriels non annoncée.

La décision, consignée dans le journal des décisions, a quatre parties. D'abord, relever la limite du réservoir et ajouter des réplicas en lecture, puis retester. Ensuite, ajouter une liste de contrôle de préparation aux soldes au processus de mise en production afin que les campagnes atteignent le registre des prévisions au moins six semaines à l'avance. Puis ajouter le p99 et la saturation du réservoir à la revue hebdomadaire. Enfin, convenir avec la finance du coût de la capacité supplémentaire pour la fenêtre des soldes, à l'aide d'une adaptation planifiée plutôt que d'une réserve toute l'année.

Après les changements, un second test montre l'objectif de p99 tenu jusqu'à 1,8 fois la pointe de l'an dernier. Le risque de détournement est apparu pendant la revue. Un prestataire avait proposé un « gain rapide » : exclure du rapport de latence les requêtes plus lentes que 5 secondes, au motif que c'étaient des valeurs aberrantes. L'équipe a refusé : les requêtes exclues étaient exactement les clients qui se plaignaient. Le garde-fou a été de garder les taux d'erreur et de dépassement de délai à côté de chaque percentile de latence et de consigner la taille de l'échantillon. Pendant les soldes, le p99 culmine à 1,2 seconde, la saturation du réservoir reste sous 1 pour cent des intervalles et l'erreur de prévision est de 9 pour cent, consignée dans le registre avec la raison de l'écart restant.

## Perspective sectorielle

**Startup.** Le trafic est faible et la croissance incertaine ; les mesures peu coûteuses valent donc mieux que les mesures élaborées. Suivez les percentiles de latence des deux ou trois parcours qui rapportent de l'argent, surveillez la saturation de la base de données et menez un simple test de charge avant les lancements. Fixez une alerte de dépense pour qu'un bogue ou un pic de trafic ne devienne pas une facture.

**Petite entreprise.** Les services sont souvent hébergés ou achetés ; la capacité est donc une affaire de fournisseur. Demandez par écrit au fournisseur des rapports de performance et de capacité, apprenez ce que dit le contrat sur les périodes de pointe et surveillez la vue du client avec quelques contrôles synthétiques. Suivez la marge sur le seul système dont l'entreprise ne peut se passer.

**Grande entreprise.** De nombreux services partagent l'infrastructure ; les problèmes de capacité apparaissent donc au mauvais endroit. Investissez dans une carte des services reliant les services aux composants qu'ils emploient, dans un processus de prévision partagé avec les unités d'affaires et dans des définitions communes des percentiles de latence entre équipes. Fixez la politique de marge selon la criticité du service.

**Gouvernement et secteur public.** La demande est façonnée par des échéances fixées par la loi, comme les dates de déclaration d'impôts, les demandes de prestations et les élections, et l'échec à ces dates est public. Les prévisions devraient employer le calendrier légal, et la capacité pour la pointe peut devoir être contractée des mois à l'avance. Les délais des marchés allongent le délai de mise à disposition de la capacité ; mesurez-les donc et planifiez en conséquence. Les rapports publics de performance de service devraient énoncer le percentile et les conditions de charge (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût a quatre parties. La première est l'instrumentation : la télémétrie et son stockage. La deuxième est les tests : un environnement représentatif et des modèles de charge qui demandent un entretien. La troisième est la routine de planification : tenir le registre des prévisions et revoir l'erreur chaque trimestre. La quatrième est la capacité de réserve elle-même, qui est souvent le plus grand coût et celui qui vaut le plus la peine d'être rendu explicite.

Le retour vient de moins d'incidents liés à la capacité, de meilleures décisions sur le moment d'acheter et de ne pas acheter, et de dépenses évitées sur une capacité que les données montrent inutile. Ne promettez pas à l'avance un pourcentage d'économie. Mesurez plutôt votre propre schéma : le nombre d'incidents à cause de capacité par trimestre, la part des pointes qui ont exigé une action d'urgence, la dépense en capacité inactive par rapport à la politique de marge convenue, et la tendance de l'erreur de prévision. Le livre SRE de Google traite la fiabilité comme une décision économique.

Le coût total de possession est dominé par les personnes et l'environnement de test. Une petite équipe peut commencer avec la supervision existante, une revue hebdomadaire et un test de charge pour le parcours le plus important.

## Antimodèles et pièges

- **Rapporter l'utilisation moyenne comme l'histoire de la capacité.** La moyenne cache la pointe et la falaise. Rapportez le percentile élevé en heure de pointe et la mesure de saturation.
- **La latence moyenne sur le tableau de bord de direction.** La queue pilote les plaintes. Montrez le p95 et le p99, avec les taux d'erreur et la taille de l'échantillon.
- **Exclure des « valeurs aberrantes » de la latence.** Les requêtes les plus lentes sont de vrais utilisateurs. Gardez-les et enquêtez sur la cause au lieu de rogner les données.
- **Faire la moyenne de percentiles entre serveurs.** Le résultat ne décrit personne. Combinez les histogrammes ou les observations brutes avant de calculer le percentile.
- **Des plans de capacité bâtis sur le seul trafic de l'an dernier.** La demande dépend des événements de l'entreprise. Incluez le calendrier de l'entreprise et revoyez l'erreur de prévision.
- **Tester dans un environnement différent de la production.** Un résultat positif donne une fausse confiance. Consignez les différences et corrigez-les, ou testez en production en sécurité.
- **Employer des métriques de capacité pour classer des ingénieurs ou des équipes.** L'utilisation et la latence décrivent des systèmes. Revoyez-les en termes de conception de service et de demande, et gardez les individus hors du tableau.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Mesure de l'utilisation, de la saturation et de la latence | Moyennes de quelques serveurs ; alertes sur forte utilisation du processeur | Certaines équipes tracent des percentiles de latence et des files | Définitions partagées : percentiles par opération clé, saturation à côté de l'utilisation, fenêtres écrites | Suivi dans le temps au regard des objectifs, associé aux taux d'erreur, revu chaque semaine | Définitions révisées conjointement avec les fournisseurs et les clients ; vues côté utilisateur et côté serveur réconciliées |
| Limites et marge | Limites inconnues jusqu'à une panne | Tests de charge occasionnels avant les grands lancements | Tests de charge sur les services critiques au regard d'une politique de marge écrite | Marge suivie par service et retestée après les changements pertinents | Politique de marge ajustée à partir des données de coût, de risque et d'incidents entre équipes et fournisseurs |
| Prévision | Estimations ad hoc au moment d'une demande | Les équipes individuelles gardent leurs prévisions en tête ou dans des tableurs | Un registre partagé de prévisions avec plages et responsables, alimenté par le calendrier de l'entreprise | Erreur de prévision notée et revue, avec les causes des écarts | Prévisions bâties avec l'entreprise et les fournisseurs ; apports améliorés couramment |
| Mise à disposition de la capacité | Capacité ajoutée après un incident | Demandes standard pour les cas courants | Voie documentée de l'approbation au trafic de production, avec délai de mise à disposition mesuré | Plus longues attentes ciblées par une amélioration financée | Capacité ajoutée automatiquement dans la politique ; comportement d'adaptation et coût revus ensemble |

## Liste de vérification

- [ ] Les parcours utilisateur critiques sont nommés, chacun avec une attente de latence convenue avec son responsable.
- [ ] La latence est rapportée en médiane, p95 et p99 par opération, avec la fenêtre et la taille de l'échantillon énoncées.
- [ ] Les percentiles sont calculés à partir d'histogrammes ou d'observations brutes, jamais moyennés entre serveurs.
- [ ] Chaque graphique d'utilisation a un graphique de saturation à côté.
- [ ] Les taux d'erreur et de dépassement de délai sont montrés à côté de chaque percentile de latence.
- [ ] Chaque service critique a un test de charge, avec les différences de charge et d'environnement écrites.
- [ ] Une politique de marge existe par criticité de service, avec le raisonnement consigné.
- [ ] Un registre daté des prévisions contient les plages, les hypothèses et les responsables, et est alimenté par le calendrier de l'entreprise.
- [ ] L'erreur de prévision est revue chaque trimestre, avec les causes des gros écarts consignées.
- [ ] Le délai de mise à disposition de la capacité est mesuré de l'approbation au trafic porté.
- [ ] Les limites, le délai et le coût de l'adaptation automatique sont revus avec le responsable du service.
- [ ] Aucune mesure de capacité ou de performance n'est rapportée par individu.

## Prompts d'IA

**Examinez un rapport de latence à la recherche de distorsions cachées.**

```text
Voici comment nous rapportons la latence de [operation or service] :
[description of the measurement point, the window, the statistics shown, and
which requests are included or excluded]. Nos utilisateurs se soucient de [user
journey or expectation]. Identifiez les façons dont ce rapport pourrait sous-
estimer l'expérience des utilisateurs les plus lents, comme la moyenne, les
règles d'exclusion, l'échantillonnage ou l'emplacement de la mesure. Suggérez ce
qu'il faut montrer à la place et quelles données supplémentaires il me faudrait.
N'inventez ni valeurs de référence ni seuils ; demandez-moi ceux dont vous avez
besoin. Énumérez vos hypothèses.
```

**Rédigez un plan de test de charge pour un service.**

```text
J'ai besoin d'un plan de test de charge pour [service name]. Ses principaux
parcours utilisateur sont [journeys], ses dépendances sont [dependencies], et
son mélange de trafic de production est à peu près [description of mix].
L'environnement de test diffère de la production ainsi : [differences].
Proposez un modèle de charge, un profil de montée, les mesures à consigner
(percentiles de latence, taux d'erreur, utilisation, saturation), les conditions
d'arrêt et les questions auxquelles les résultats devraient répondre. Ne
supposez pas de fonctions d'outil et n'inventez pas de valeurs cibles. Énumérez
vos hypothèses et les risques du test.
```

**Structurez une prévision de demande avec l'entreprise.**

```text
Je prépare une prévision de capacité pour [service] couvrant [horizon]. Apports
connus : [historical traffic description], [business events and dates] et
[planned changes]. Rédigez une disposition de registre de prévisions avec des
cas bas, attendu et haut, les hypothèses derrière chacun, le responsable de
chaque apport et une routine de revue qui note l'erreur de prévision. Suggérez
des questions à poser à [business stakeholders]. N'inventez ni taux de
croissance ni facteurs saisonniers. Énumérez vos hypothèses.
```

**Trouvez la vraie contrainte à partir des symptômes.**

```text
Un service montre ces symptômes pendant la charge de pointe : [symptoms, for
example slow p99, queue growth, error types]. Données d'utilisation : [summary of
resource utilization]. Données de saturation : [summary of queues, pools,
throttling]. Notes d'architecture : [short description]. Listez les ressources et
les limites qui pourraient être la contrainte, les preuves qui permettraient de
les distinguer et le test suivant le moins coûteux pour chacune. Ne prétendez
pas à une cause que les données n'étayent pas. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une mesure de capacité ou de performance, ses horloges et le garde-fou qui doit se trouver à côté.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de capacité ou de performance modifié garde chaque métrique associée à un vecteur de détournement et à un garde-fou.

## Points clés à retenir

- Mesurez la saturation avec l'utilisation, car les utilisateurs ressentent la file, non le pourcentage.
- Rapportez la latence en percentiles par opération, avec les taux d'erreur et la taille de l'échantillon, et ne faites jamais la moyenne de percentiles.
- Trouvez les limites par des tests et fixez la marge comme une politique consignée qui pèse le coût contre le risque.
- Prévoyez la demande par des plages avec l'entreprise, gelez la prévision et apprenez de l'erreur.
- Raccourcissez le délai de mise à disposition de la capacité et mesurez l'adaptation automatique, afin que la capacité suive le besoin.
- Décrivez des services et des systèmes, jamais des personnes, et traitez des chiffres qui paraissent parfaits comme une invitation à vérifier la mesure.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
