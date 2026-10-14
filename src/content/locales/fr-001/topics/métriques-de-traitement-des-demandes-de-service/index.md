# Métriques de traitement des demandes de service

**Mesurez combien de temps prennent les demandes courantes du point de vue de l'utilisateur, quelle part de ce temps est de l'attente, quels éléments du catalogue pilotent la demande et quelle part du travail est automatisée, puis servez-vous du tableau pour repenser les demandes fréquentes au lieu de pousser les personnes qui les traitent.**

## Résumé et motivation

Une **demande de service** est une demande courante d'un utilisateur pour quelque chose qu'un service est conçu pour fournir : un compte, l'accès à un dossier, un ordinateur portable, une licence logicielle, une information. Elle diffère d'un **incident**, qui est une perturbation non planifiée d'un service (voir le sujet 3.2, Volume et priorité des incidents), et d'un **changement**, qui modifie un service et exige un nouveau jugement sur le risque (voir le sujet 4.3, Métriques de maîtrise des changements). Dans [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, ce travail est couvert par la pratique de gestion des demandes de service, et il est généralement décrit comme un **modèle de demande** répétable : les informations nécessaires, les approbations, les étapes et le temps attendu. ITIL écrit le mot « fulfilment » ; le corps de ce sujet emploie « traitement » (en anglais « fulfillment ») conformément à l'orthographe du livre.

Les demandes comptent pour les métriques parce qu'elles sont une demande prévisible. Un incident est une surprise ; une demande d'ordinateur portable pour un nouvel arrivant tombe chaque mois et suit les mêmes étapes. Cette prévisibilité fait des demandes le meilleur candidat à la conception, à la standardisation et à l'[automatisation des processus](https://en.wikipedia.org/wiki/Process_automation). Cela signifie aussi que les retards sont rarement causés par la difficulté. Ils sont causés par les files, les approbations et les transmissions ; la question utile est donc de savoir où la demande attend, non à quelle vitesse quelqu'un tape.

L'unité d'analyse est l'**élément de catalogue** : une chose nommée que l'utilisateur peut demander dans le [catalogue de services](https://en.wikipedia.org/wiki/Service_catalog) (le terme d'ITIL est « service catalogue » ; le reste de ce sujet dit « catalogue de services »). Les mesures par élément sont bien plus utiles qu'un chiffre mélangé unique, parce qu'une demande de réinitialisation de mot de passe et une demande de construction de serveur ont des horloges différentes, des responsables différents et des cibles raisonnables différentes. Une moyenne mélangée cache les deux.

Les visions agile et ITIL se rencontrent ici avec peu de friction. ITIL demande si le service livre le résultat convenu dans le temps convenu. La pratique agile du flux demande combien de temps le travail met à circuler de la demande au terminé, quelle part reste dans des files et combien de travail est en cours à la fois. Une demande est un élément de travail qui circule dans un flux de travail ; les outils de la mesure du flux, comme le temps de cycle et l'ancienneté des éléments de travail, s'appliquent donc directement (voir le sujet 2.1, Mesures de flux). Le vocabulaire diffère. L'arithmétique est la même.

Trois termes reviennent. Le **délai de traitement** est le temps écoulé entre le moment où l'utilisateur soumet la demande et celui où l'utilisateur confirme, ou le système consigne, que la chose a été livrée. Le **temps de travail effectif** est le temps pendant lequel quelqu'un travaille activement sur la demande, et le **temps d'attente** est tout le reste, y compris les approbations et l'attente de l'utilisateur. La différence entre eux est ce qu'un modèle de demande devrait réduire. La **part d'automatisation** est la portion des demandes traitées sans qu'une personne y touche après la soumission.

Les mesures de temps demandent du soin. Les délais de traitement sont asymétriques : la plupart des demandes se terminent vite et quelques-unes prennent très longtemps. Une moyenne est tirée dans tous les sens par ces quelques-unes ; rapportez donc la médiane et un [percentile](https://en.wikipedia.org/wiki/Percentile) élevé comme le 85e ou le 95e (voir le sujet 1.6, Culture statistique pour les métriques de service). Les cibles convenues avec les clients, comme celles d'un [accord de niveau de service (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), devraient être énoncées de la même façon : « 85 pour cent des demandes d'ordinateur portable traitées en 5 jours ouvrés » dit plus que « moyenne de 3 jours ».

Enfin, un avertissement venu de la psychologie de la mesure. Quand une équipe est jugée sur la clôture rapide des demandes, la façon la moins coûteuse d'améliorer le chiffre est de changer ce qui compte comme clos, ou de suspendre l'horloge. La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique pleinement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Chaque métrique ci-dessous est donc associée à un garde-fou, et aucune ne décrit un agent individuel.

## Principes clés

- **Mesurer par élément de catalogue.** Chaque élément a son propre modèle de demande, son responsable et sa cible raisonnable ; les chiffres mélangés induisent donc en erreur.
- **Démarrer l'horloge quand l'utilisateur demande et l'arrêter quand l'utilisateur a la chose.** Les jalons internes sont de bons diagnostics, mais ils ne sont pas l'expérience du client.
- **Séparer le temps d'attente du temps de travail effectif.** L'écart entre eux montre où la refonte paie, et ce n'est que rarement dans le travail lui-même.
- **Rapporter des distributions, non des moyennes.** Une médiane et un 95e percentile décrivent ce que vivent les utilisateurs.
- **Traiter la demande comme un signal.** Le volume par élément montre ce dont les utilisateurs ont besoin, ce qui est confus et ce qui mérite l'automatisation ou le libre-service.
- **Automatiser d'abord le stable et le fréquent.** La part d'automatisation est un résultat d'une bonne conception des demandes, non un but à poursuivre pour lui-même.
- **Mesurer l'équipe et le service, jamais la personne.** Les demandes circulent à travers des systèmes, et la variation entre agents reflète surtout le mélange de travail.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai de traitement de la demande | Temps écoulé pour livrer une demande, montré en médiane et en 95e percentile par élément de catalogue | l'horloge démarre quand l'utilisateur soumet la demande, s'arrête quand l'utilisateur confirme la livraison ou que la livraison est consignée ; les demandes annulées par l'utilisateur sont exclues ; le temps d'attente de l'utilisateur est rapporté séparément, non retiré | jours ouvrés ou heures | Historique des demandes de l'outil ITSM | Gestion des demandes de service | Temps de cycle sur le tableau de l'équipe (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Hebdomadaire, suivi mensuel |
| Traitement dans la cible | Part des demandes livrées dans la cible convenue pour leur élément de catalogue | demandes traitées dans la cible / demandes traitées dans la période ; horloge comme ci-dessus, les éléments encore ouverts sont exclus et comptés dans l'âge du backlog | pourcentage | Historique des demandes de l'outil ITSM ; table des cibles par élément de catalogue | Gestion des niveaux de service | Attente de niveau de service | Mensuelle |
| Backlog et âge des demandes | Nombre de demandes ouvertes et ancienneté des plus anciennes, par élément de catalogue | demandes ouvertes en fin de période (comptage) ; âge de chaque demande ouverte = date du rapport moins date de soumission ; rapportez le comptage, l'âge médian et l'âge le plus ancien | nombre et jours | File des demandes ouvertes de l'outil ITSM | Gestion des demandes de service | Travail en cours et éléments de travail vieillissants (voir le sujet 2.3, Travail en cours et théorie des files d'attente) | Hebdomadaire |
| Temps d'attente d'approbation | Temps qu'une demande passe à attendre une approbation | l'horloge démarre quand l'approbation est demandée, s'arrête quand elle est accordée ou refusée ; les demandes sans étape d'approbation sont exclues | heures | Journal d'approbation de l'outil ITSM | Gestion des demandes de service ; maîtrise des changements | Temps bloqué ou colonne « en attente » sur le tableau | Mensuelle |
| Volume de demandes par élément de catalogue | Nombre de demandes soumises pour chaque élément, avec sa part de toutes les demandes | demandes soumises par élément dans la période ; les demandes soumises à nouveau comme doublons, si elles sont identifiées, sont exclues ; rapportez le comptage et la part du total | nombre et pourcentage | Enregistrements de demandes de l'outil ITSM | Gestion du catalogue de services | Analyse de la demande pour façonner le backlog | Mensuelle |
| Part d'automatisation | Portion des demandes traitées sans étape manuelle après la soumission | demandes traitées de bout en bout par automatisation / demandes traitées dans la période ; une demande touchée par une personne pour une étape de traitement quelconque est comptée comme manuelle ; les approbations par une personne ne comptent pas comme étapes manuelles de traitement si la politique les exige | pourcentage | Enregistrements de traitement de l'outil ITSM et journaux de la plateforme d'automatisation | Gestion des demandes de service ; automatisation au sein de la chaîne de valeur du service | Automatisation dans la définition de terminé | Mensuelle |
| Taux de réouverture des demandes | Part des demandes traitées que l'utilisateur rouvre ou soumet à nouveau parce que le résultat était faux ou incomplet | demandes rouvertes ou soumises à nouveau pour le même élément par le même utilisateur dans les 7 jours suivant le traitement / demandes traitées dans la période ; la fenêtre de 7 jours est un exemple que l'équipe écrit | pourcentage | Historique des demandes de l'outil ITSM | Gestion des demandes de service | Taux de reprise ; défauts échappés | Mensuelle |

Le délai de traitement ne compte le temps ouvré que si l'équipe a convenu d'un calendrier et l'a consigné ; sinon, employez des heures écoulées et dites-le. La métrique de backlog porte trois nombres à dessein, parce qu'un comptage seul ne dit rien de l'attente. La définition de la part d'automatisation laisse les approbations humaines hors du décompte « manuel », car beaucoup d'approbations sont une décision de politique et non un coût de traitement ; le temps d'attente d'approbation est mesuré séparément pour que le retard reste visible.

## Recommandations

### Définir les horloges et l'unité

**1. Mesurez par élément de catalogue, et publiez la liste des éléments.** Commencez par les dix premiers éléments par volume, qui couvrent généralement une grande part des demandes, et ajoutez des éléments à mesure que les données le permettent. Donnez à chaque élément un responsable, une cible déclarée et une définition d'une ligne de « livré ». La liste d'éléments est le dénominateur de tout le reste ; gardez-la donc dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**2. Écrivez le début et la fin de l'horloge pour chaque élément.** Pour la plupart des éléments, l'horloge démarre à la soumission et s'arrête quand l'utilisateur peut se servir de ce qu'il a demandé, non quand un ticket est clos. Un ordinateur portable est livré quand il est dans les mains de l'utilisateur, non quand le coursier est réservé.

**3. Décidez une fois de la façon dont l'attente de l'utilisateur est traitée.** Certaines demandes calent parce que l'utilisateur n'a pas répondu à une question. Suspendre l'horloge pour cela est raisonnable, mais c'est aussi le levier le plus facile à abuser. Consignez la suspension comme un état séparé avec un motif, rapportez le temps suspendu comme son propre chiffre et revoyez le taux de suspension par élément (voir le sujet 1.5, Sources de données et instrumentation).

### Rapporter ce que vivent les utilisateurs

**4. Montrez la médiane et le 95e percentile, avec un comptage.** Mettez les deux sur un même graphique par élément, avec le nombre de demandes derrière chaque point. Une médiane de deux jours avec un 95e percentile de vingt vous dit que la plupart des utilisateurs sont bien servis et qu'une queue demande une enquête, ce qu'une moyenne de quatre jours cache. Quand le comptage est petit, dites-le et montrez plutôt les demandes individuelles qu'un percentile.

**5. Rendez visible l'âge des demandes ouvertes.** Le délai de traitement n'est connu qu'une fois la demande terminée ; il est donc en retard. Une liste des plus anciennes demandes ouvertes par élément, triée par âge, dit à une équipe où regarder aujourd'hui. En termes de flux, c'est l'ancienneté de l'élément de travail au regard du temps de cycle habituel de l'élément, et c'est la vue la plus actionnable qu'une file de demandes puisse avoir.

**6. Scindez le temps écoulé en temps de travail effectif, d'approbation et d'attente de l'utilisateur.** Prenez un échantillon de demandes traitées pour un élément et décomposez chacune en temps passé dans chaque état. La plupart des équipes constatent que le travail actif est une petite part du temps écoulé. Ce constat fait passer la conversation d'amélioration de « travaillons plus vite » à « supprimons la file entre les étapes », idée centrale de l'étude des files d'attente et du flux (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

### Se servir de la demande pour façonner le service

**7. Lisez le volume par élément comme un message des utilisateurs.** Un volume croissant pour un élément peut signifier un besoin grandissant, un produit déroutant ou une défaillance ailleurs, comme un processus cassé qui renvoie les gens redemander. Un élément à très faible volume peut être candidat à un retrait du catalogue. Comparez le volume aux données d'adoption (voir le sujet 6.3, Métriques d'adoption des services et de catalogue).

**8. Classez les candidats à l'automatisation par volume, stabilité et temps de travail effectif.** Les meilleurs premiers candidats sont à fort volume, varient rarement et portent un temps de travail effectif notable. Commencez par l'élément dont les étapes sont déjà identiques à chaque fois, comme l'accès à un groupe standard, et automatisez les étapes avant de toucher aux exceptions. Suivez la part d'automatisation par élément pour que le progrès soit visible, et renvoyez les questions de libre-service et de désengorgement à leur propre sujet (voir le sujet 3.7, Métriques de libre-service et d'automatisation).

**9. Repensez les approbations avant d'ajouter des personnes.** L'attente d'approbation domine souvent le temps écoulé. Demandez pour chaque approbation si la politique l'exige, si une demande standard préapprouvée suffirait et si l'approbateur peut être un rôle avec un suppléant plutôt qu'une personne. Préapprouver les demandes à faible risque et bien comprises reprend l'idée des changements standard de la maîtrise des changements, et supprime des files sans supprimer le contrôle.

### Garder les chiffres honnêtes

**10. Associez toujours la vitesse à la qualité.** Rapportez le délai de traitement à côté du taux de réouverture et d'un signal de satisfaction des utilisateurs pour le même élément (voir le sujet 6.1, Métriques de satisfaction de la clientèle). Une demande plus rapide qui revient rouverte est plus lente qu'elle ne paraît. Si la vitesse s'améliore et que le taux de réouverture monte avec elle, traitez le gain de vitesse comme non prouvé.

**11. Gardez séparés dans les données les demandes, les incidents et les changements.** Les mélanger fausse les trois. Une réinitialisation de mot de passe qui est en réalité le symptôme d'un service de connexion défectueux est un incident, et une demande de modifier le fonctionnement d'un service est un changement. Classez à l'accueil avec une règle courte, échantillonnez chaque trimestre les éléments mal classés et comparez côte à côte les volumes de demandes et d'incidents (voir le sujet 3.1, Métriques du centre de services).

**12. Passez le tableau des éléments en revue avec l'équipe qui fait le travail.** Réunissez-vous chaque mois pendant trente minutes autour du tableau par élément : volume, médiane et 95e percentile, demande ouverte la plus ancienne, part d'automatisation, taux de réouverture. Choisissez un élément et un changement à essayer, et regardez le même tableau le mois suivant pour voir ce qui s'est passé.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Délai de traitement de la demande | Suspendre l'horloge pour « en attente de l'utilisateur » que l'utilisateur en soit la cause ou non ; clore des demandes avant la livraison et les rouvrir comme nouvelles ; fractionner une demande en plusieurs petites | Part de temps suspendu par élément, avec un audit par échantillon des motifs de suspension ; taux de réouverture ; confirmation de la livraison par l'utilisateur avant la clôture |
| Traitement dans la cible | Redéfinir la cible pour qu'elle soit plus facile ; ne compter que les demandes qui se terminent et ignorer les vieilles encore ouvertes ; choisir les éléments rapides pour l'ensemble des cibles | Âge du backlog pour les demandes ouvertes ; changements de cibles consignés dans le registre des métriques avec un motif ; l'ensemble des cibles couvre tous les éléments par volume |
| Backlog et âge des demandes | Clore de vieilles demandes comme « sans réponse » ou « périmées » ; déplacer des demandes vers une autre file ou catégorie pour qu'elles quittent la file comptée | Compte des demandes closes sans livraison, par motif ; transferts de catégorie et de file revus lors de la réunion mensuelle |
| Temps d'attente d'approbation | Les approbateurs approuvent sans lire pour garder leur temps bas ; les demandeurs relancent les approbateurs hors du système, de sorte que l'attente consignée est courte | Revue par échantillon de demandes approuvées au regard de la politique ; taux de réouverture et exceptions de sécurité pour les éléments approuvés ; nombre d'étapes d'approbation par élément |
| Volume de demandes par élément de catalogue | Réduire le volume en rendant le catalogue plus difficile à trouver ou en décourageant les demandes ; requalifier des demandes en incidents ou en « demandes générales » | Satisfaction des utilisateurs pour le catalogue ; part des contacts classés « autre » ; données d'adoption du service (voir le sujet 6.3, Métriques d'adoption des services et de catalogue) |
| Part d'automatisation | Automatiser les éléments triviaux pour relever le pourcentage ; compter comme automatisée une demande scriptée qu'une personne vérifie encore à la main ; cacher les étapes manuelles dans un ticket séparé | Part pondérée par le volume de demandes et par le temps de travail effectif retiré ; taux d'échec de l'automatisation et de repli vers le manuel ; échantillon de demandes « automatisées » suivies de bout en bout |
| Taux de réouverture des demandes | Décourager la réouverture en la rendant difficile ; dire aux utilisateurs d'ouvrir une nouvelle demande, ce qui remet le compteur à zéro | Demandes répétées du même utilisateur pour le même élément dans la fenêtre ; satisfaction des utilisateurs par élément ; réouverture permise depuis la notification |

Une lecture saine ressemble à ceci. La médiane et le 95e percentile baissent ensemble, ou le 95e percentile baisse alors que la médiane tient. La plus ancienne demande ouverte n'est pas beaucoup plus ancienne que le 95e percentile des demandes traitées. Le taux de réouverture et la satisfaction restent stables ou s'améliorent pendant que la vitesse s'améliore. La part d'automatisation monte sur les éléments qui comptent par le volume, et le volume lui-même change pour des raisons que l'équipe sait expliquer. Si un chiffre s'améliore fortement pendant que son garde-fou dérive dans l'autre sens, allez regarder les demandes sous-jacentes.

## Compromis : avantages et inconvénients

| Choix | Avantages | Inconvénients |
| --- | --- | --- |
| Mesure par élément | Les cibles correspondent au travail ; montre où la refonte paie | Plus de données à entretenir ; les petits éléments ont peu de points de données |
| Médiane et 95e percentile plutôt que moyenne | Décrit ce que vivent les utilisateurs ; résiste aux valeurs aberrantes | Plus difficile à expliquer aux dirigeants habitués à un seul chiffre ; instable pour les éléments à faible volume |
| Suspendre l'horloge en attente de l'utilisateur | Équitable envers l'équipe quand l'utilisateur cause le retard | Facilement abusée ; cache l'effet de formulaires peu clairs et d'une mauvaise communication |
| Compter la part d'automatisation | Rend visible le progrès de l'automatisation et le relie au coût | Récompense les automatisations faciles ; ne dit rien de la qualité si elle n'est pas associée au taux d'échec |
| Mesurer de la soumission de l'utilisateur à sa confirmation | Correspond à l'expérience du client | Dépend de la confirmation de l'utilisateur, souvent absente ; demande une règle par défaut |
| Séparation stricte des demandes et des incidents | Données plus propres et meilleures cibles | Demande de la discipline à l'accueil et des discussions sur les cas limites |

L'arbitrage central est entre un chiffre propre et un chiffre équitable. Une horloge stricte qui ne se suspend jamais est simple et difficile à détourner, mais elle pénalise l'équipe quand l'utilisateur est lent. Une horloge flexible est plus équitable mais demande un audit. La plupart des équipes font bien de commencer strictes, d'ajouter un état suspendu explicite avec un motif et de rapporter ouvertement la part suspendue.

## Questions à discuter avec votre équipe

**1. Quels trois éléments de catalogue causent le plus d'attente à nos utilisateurs, et comment le savons-nous ?**
Apportez le tableau par élément du volume, de la médiane et du 95e percentile du délai de traitement. Demandez au groupe de choisir les éléments selon l'attente totale (volume fois attente typique), non selon l'agacement ressenti. Comparez la réponse avec le premier instinct des gens. L'animateur doit noter où les données et l'instinct diffèrent.

**2. Où notre horloge démarre-t-elle et s'arrête-t-elle, et un utilisateur serait-il d'accord ?**
Choisissez un élément courant et parcourez son parcours tel que le voit l'utilisateur, du premier clic au moment où il peut se servir du résultat. Marquez où le statut de notre ticket dit « terminé » et où l'utilisateur dirait « terminé ». Tout écart entre les deux est de l'attente invisible. Convenez d'un changement de l'événement d'arrêt et écrivez-le dans le registre des métriques.

**3. Quelle part de notre temps écoulé est du travail de personnes, et quelle part de l'attente ?**
Échantillonnez dix demandes traitées pour un élément et décomposez chacune en temps de travail effectif, d'approbation et d'attente de l'utilisateur. Montrez le résultat sous forme de barre empilée. Demandez ce qui devrait être vrai pour que l'attente soit divisée par deux. Cette question fait généralement passer la salle de « il nous faut plus de personnel » à « il nous faut moins de transmissions ».

**4. Lesquelles de nos approbations pourraient être remplacées par une règle préconvenue ?**
Listez les approbations des principaux éléments et la raison de politique de chacune. Là où personne ne se souvient du dernier refus, l'approbation est peut-être un rituel.

**5. Si nous automatisions le prochain élément de catalogue, le chiffre monterait-il pour la bonne raison ?**
Discutez de la façon dont la part d'automatisation peut monter grâce à des éléments faciles ou à faible volume sans que les utilisateurs voient de différence. Demandez ce que l'équipe mesurerait pour confirmer qu'une automatisation a aidé : temps de travail effectif retiré, taux d'échec, taux de réouverture et satisfaction. Décidez quel élément automatiser ensuite selon le volume et le temps de travail effectif, non la seule facilité.

**6. Que ferions-nous si un chiffre de cette page empirait, et qui serait blâmé ?**
Menez l'expérience de pensée ouvertement. Demandez ce que l'équipe serait tentée de changer dans les données avant de changer le service. Convenez que la première réaction à un chiffre qui empire est de regarder les demandes qui le sous-tendent.

## Quatre perspectives

### Équipes produit et livraison

Les équipes produit génèrent des demandes à propos de leurs propres services : accès aux environnements, nouvelles chaînes, données de test, clés de licence. De longs délais de traitement pour celles-ci apparaissent comme du travail inactif dans le flux propre de l'équipe ; la mesure a donc sa place sur leur tableau comme état bloqué. Les équipes qui détiennent un service devraient publier leurs propres éléments de demande et cibles, et traiter les demandes répétées comme des candidates au backlog (voir le sujet 2.6, Métriques du backlog et de son affinage). Là où une demande est en réalité une capacité de plateforme manquante, la demande répétée est l'argument pour la construire.

### Équipes de service et d'exploitation

Pour les personnes qui traitent les demandes, le tableau par élément est une carte de l'endroit où va l'effort. Elles savent quelles étapes sont manuelles, quelles approbations calent et quels formulaires produisent des saisies vagues. Elles devraient détenir les modèles de demande, le backlog d'automatisation et la revue mensuelle, et être le premier public des données. Les chiffres décrivent la file et le processus ; précisez donc explicitement que personne n'est classé et que la variation entre les personnes reflète surtout le mélange de demandes qu'elles prennent.

### Direction et gouvernance

Les dirigeants ont besoin d'une vue courte : médiane et 95e percentile des principaux éléments, part traitée dans la cible, plus anciennes demandes ouvertes, et tendance de la part d'automatisation et du coût par demande (voir le sujet 7.5, Coût du service et économie unitaire). La tâche de gouvernance est de demander ce qui a changé, non qui est lent. Les dirigeants approuvent aussi le volet politique des approbations ; ils détiennent donc le levier qui réduit le plus l'attente.

### Clients et utilisateurs

Les utilisateurs se soucient de trois choses : combien de temps, quelle prévisibilité et combien d'effort. Ils se soucient rarement des états internes. Montrez-leur une cible claire par élément (« ordinateurs portables en cinq jours ouvrés »), dites-leur où en est leur demande et demandez-leur de confirmer la livraison. Recueillez un signal de satisfaction à une question à la clôture et lisez les commentaires.

## En pratique : un exemple d'ITIL agile

Le service informatique d'une université régionale (une organisation fictive) exploite un centre de services et une petite équipe de plateforme. Les chiffres ci-dessous sont illustratifs, non issus d'une organisation réelle.

À la revue mensuelle, l'équipe regarde le tableau par élément. Toutes demandes confondues, le délai de traitement moyen est de 3,1 jours ouvrés, ce qui paraît acceptable et n'a presque pas bougé depuis un an. Par élément, le tableau est différent. « Accès à un lecteur partagé » a une médiane de 0,4 jour et un 95e percentile de 2 jours. « Licence logicielle départementale » a une médiane de 2 jours et un 95e percentile de 11 jours. « Ordinateur portable pour nouvel arrivant » a une médiane de 6 jours et un 95e percentile de 15 jours. Les trois premiers éléments par volume sont l'accès à un lecteur partagé, les demandes de licences et les ordinateurs portables de nouveaux arrivants, avec des parts illustratives de 32, 21 et 9 pour cent de toutes les demandes.

L'équipe échantillonne dix demandes d'ordinateur portable et décompose le temps. Résultat illustratif : environ 0,5 jour de travail effectif, 2,5 jours d'attente de l'approbation d'un chef de ligne, 1,5 jour d'attente de la confirmation du stock, et le reste dans une file de coursier. L'attente d'approbation est la plus grande part.

La décision découle des données. L'équipe propose, avec le responsable des finances et le responsable de la sécurité, que les ordinateurs portables du catalogue standard soient préapprouvés quand le rôle du nouvel arrivant est confirmé par les ressources humaines, le chef étant notifié plutôt que sollicité. Elle relie aussi la vérification du stock au système d'inventaire. Elle fixe l'expérience pour un trimestre et convient de ce qui comptera comme un succès : le 95e percentile des ordinateurs portables baisse, et le taux de réouverture et le score de satisfaction restent stables.

Un risque de détournement apparaît au deuxième mois. La médiane des licences chute fortement, de 2 jours à moins de 1. La revue remarque que la part de temps suspendu « en attente de l'utilisateur » de l'élément est passée d'un 5 pour cent illustratif à 40 pour cent, et que le taux de réouverture a monté. Un échantillon montre que les agents suspendaient les demandes avec un message générique dès qu'une licence demandait la moindre vérification, ce qui arrêtait l'horloge. L'équipe ne blâme pas les agents. Elle voit que la cible rendait la suspension attrayante et que le champ du motif de suspension était un texte libre. Elle remplace le motif de suspension par une courte liste, exige une question précise à l'utilisateur et ajoute la part de temps suspendu comme colonne permanente à côté de la médiane. La médiane des licences revient près de son niveau antérieur, le taux de réouverture baisse, et l'équipe emploie le temps de discussion épargné à repenser le formulaire de licence, qui produisait les demandes peu claires.

Après le trimestre (illustratif), le 95e percentile des ordinateurs portables passe de 15 à 9 jours et la part d'automatisation de l'accès au lecteur partagé atteint 70 pour cent. L'équipe consigne les deux changements et choisit le formulaire de licence comme expérience suivante.

## Perspective sectorielle

**Startup.** Une startup a peu de types de demandes et pas de catalogue formel, et les mêmes personnes traitent les demandes et construisent le produit. Mesurez les trois ou quatre demandes qui bloquent les nouveaux arrivants, comme les comptes et l'équipement, et suivez la plus ancienne demande ouverte. Automatisez tôt l'accueil des nouveaux arrivants, car chaque embauche le répète.

**Petite entreprise.** Une petite entreprise s'appuie souvent sur une personne informatique ou un prestataire externe. Utilisez un simple tableau partagé avec une colonne par état et suivez l'âge et le volume des demandes par type. Demandez au prestataire le volume mensuel par élément et la plus ancienne demande ouverte.

**Grande entreprise.** Une grande entreprise a des centaines d'éléments de catalogue, de nombreux groupes de traitement et des approbations en couches. Concentrez-vous sur les premiers éléments par volume et sur les éléments à plus longue attente par attente totale. Standardisez la définition de l'horloge entre groupes de traitement avant de les comparer, et rapportez séparément les transmissions entre groupes (voir le sujet 9.3, Métriques de collaboration et de transmission). Les délais de traitement des fournisseurs ont leur place dans la même vue, mesurés à partir de la demande du client, non de la réception par le fournisseur.

**Gouvernement et secteur public.** Les organismes publics ajoutent des approbations obligatoires, des règles de marchés et des obligations d'archivage ; une partie du temps d'attente est donc de la politique et devrait être étiquetée comme telle plutôt que comptée comme un retard à supprimer. Publiez les cibles par élément en langage clair là où les engagements de service sont publics. Rapportez d'une manière qu'un régulateur ou un organe de contrôle puisse reproduire, avec les définitions écrites.

## Dossier d'affaires : motivations, ROI et TCO

Les demandes sont une part importante et répétitive du travail qui atteint un centre de services ; même une refonte modeste a donc un effet étendu. Les principales motivations sont des attentes plus courtes et plus prévisibles pour les utilisateurs, un moindre effort de traitement par demande, moins de contacts répétés et de la capacité libérée pour le travail sur les problèmes et l'amélioration.

Le côté coût est surtout ponctuel et modeste. Définir les éléments de catalogue, convenir des horloges et s'assurer que l'outil consigne les états nécessaires représente quelques jours de travail par groupe, plus un petit effort continu pour garder la chaîne correcte (voir le sujet 1.5, Sources de données et instrumentation). L'automatisation a son propre coût de construction et d'entretien, qui inclut la supervision des automatismes, le traitement des échecs et la mise à jour quand les systèmes cibles changent. Comptez cela dans le coût total de possession au-delà de la licence ou du temps de construction.

Le retour devrait être estimé à partir de vos propres données et non d'une référence générale. Pour un élément, multipliez le volume mensuel par le temps de travail effectif économisé et par le coût chargé du temps, puis soustrayez le coût de construction et d'exploitation du changement. Ajoutez la valeur de l'attente supprimée pour les utilisateurs, avec une méthode que vous pouvez défendre, et montrez-la séparément car c'est une estimation d'une autre sorte. Aucun chiffre de ce sujet n'est une référence, et les nombres de l'exemple sont illustratifs. Reliez le dossier d'affaires au coût unitaire par demande là où les données financières existent (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Une seule moyenne mélangée pour toutes les demandes.** Elle cache à la fois les gains rapides et la longue queue. Rapportez par élément, avec une médiane et un 95e percentile.
- **Clore le ticket et appeler cela livré.** L'utilisateur peut encore n'avoir rien. Définissez la livraison du côté de l'utilisateur et demandez une confirmation.
- **Des états de suspension en texte libre.** Un statut « en attente » sans motif laisse l'horloge être arrêtée pour n'importe quelle cause. Employez une courte liste de motifs et rapportez la part suspendue.
- **Compter l'automatisation par nombre d'éléments.** Dix éléments rares automatisés peuvent relever le pourcentage sans aider personne. Pondérez par le volume et le temps de travail effectif.
- **Classer les agents par demandes closes.** Cela récompense le tri des tickets faciles et punit ceux qui prennent les difficiles. Rapportez seulement au niveau de l'équipe et de l'élément.
- **Cacher la demande pour paraître efficace.** Rendre le catalogue difficile à employer baisse le volume et augmente la frustration. Associez le volume à des données de satisfaction et d'adoption.
- **Traiter les approbations comme intouchables.** Les approbations sont souvent le plus grand retard et sont rarement revues. Demandez ce que chacune protège et si une règle peut faire le travail.
- **Mélanger demandes et incidents.** Cela fausse les deux jeux de chiffres. Classez à l'accueil et échantillonnez la classification.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Les demandes sont comptées comme des tickets ; la fin de l'horloge est ce que veut dire « clos » | Certaines équipes définissent le début et la fin par élément ; les définitions diffèrent | Une définition d'horloge écrite par élément de catalogue, partagée entre équipes | Définitions revues selon un rythme et changements consignés avec leurs motifs | Définitions qui suivent la vue du client entre fournisseurs et révisées quand elles cessent d'éclairer les décisions |
| Données et reporting | Comptes tirés à la main de l'outil | Rapports pour certains éléments à partir de l'outil ITSM ; temps moyens | Médiane et 95e percentile par élément à partir d'une source de données unique | Tendances, âge du backlog et part de temps suspendu revus avec leurs garde-fous | Données de traitement des équipes internes et des fournisseurs combinées et reliées aux résultats pour les utilisateurs |
| Demande et automatisation | Demandes traitées une par une ; aucune vue de la demande répétée | Principaux éléments identifiés de façon informelle ; quelques scripts | Modèles de demande documentés pour les principaux éléments ; backlog d'automatisation classé par volume et temps de travail effectif | Part d'automatisation et taux d'échec suivis ; approbations repensées sur preuves | Demande, libre-service et automatisation planifiés ensemble dans toute l'organisation et adaptés en continu |
| Usage dans l'amélioration | Chiffres rapportés vers le haut, non employés | Corrections occasionnelles après des plaintes | Revue mensuelle par l'équipe qui fait le travail | Améliorations financées reliées aux résultats par élément | Les idées d'amélioration viennent des équipes, des utilisateurs et des fournisseurs, et les résultats alimentent la conception du catalogue |

## Liste de vérification

- [ ] Chaque élément de catalogue concerné a un responsable, une définition d'une ligne de « livré » et une cible déclarée.
- [ ] Les événements de début et de fin de l'horloge de traitement sont écrits pour chaque élément.
- [ ] L'attente de l'utilisateur est un état séparé avec une courte liste de motifs, et le temps suspendu est rapporté.
- [ ] Les rapports montrent la médiane et le 95e percentile par élément, avec le nombre de demandes derrière chacun.
- [ ] Les plus anciennes demandes ouvertes sont visibles de l'équipe chaque semaine.
- [ ] Le temps de travail effectif, d'approbation et d'attente a été échantillonné pour les principaux éléments.
- [ ] Le volume par élément est revu chaque mois et comparé aux données d'adoption ou de satisfaction.
- [ ] La part d'automatisation est pondérée par le volume et associée aux taux d'échec et de repli.
- [ ] Chaque métrique de vitesse est associée au taux de réouverture et à un signal de satisfaction des utilisateurs.
- [ ] Les demandes, les incidents et les changements sont classés à l'accueil, et la classification est échantillonnée.
- [ ] Aucun rapport ne classe les agents individuels.

## Prompts d'IA

**Rédigez un modèle de demande et une définition d'horloge pour un élément de catalogue.**

```text
Je définis la mesure de cet élément de catalogue : [catalog item name]. Les
étapes actuelles sont [list steps and who does each], les approbations sont
[list approvals] et notre outil est [ITSM tool]. Rédigez un modèle de demande
avec les informations requises, les événements de début et de fin de l'horloge
de traitement, les états dans lesquels l'horloge peut se suspendre et les motifs
autorisés, et une liste d'horodatages que l'outil doit consigner. N'inventez ni
valeurs de référence ni fonctions d'outil. Énumérez vos hypothèses et les
questions auxquelles je dois répondre pour terminer la définition.
```

**Décomposez le temps écoulé en temps de travail effectif et d'attente.**

```text
Voici un échantillon de [number] demandes traitées pour [catalog item] avec les
heures de changement d'état : [paste anonymized state history, no names].
Calculez, pour chaque demande et pour l'échantillon, le temps de travail
effectif, l'attente d'approbation et le temps d'attente de l'utilisateur, et
montrez la médiane et la plage. Signalez quel état retient le plus de temps et
quelles questions je devrais poser à l'équipe à ce sujet. N'inférez pas de
causes sans preuve et ne comparez pas des individus. Énumérez vos hypothèses.
```

**Classez les candidats à l'automatisation.**

```text
Voici un tableau d'éléments de catalogue avec le volume mensuel, le temps de
travail effectif médian, la variation des étapes et les systèmes touchés par
chacun : [paste table]. Suggérez une façon de classer les candidats à
l'automatisation selon le volume, la stabilité et le temps de travail effectif,
et expliquez le classement des [number] premiers éléments. Signalez les éléments
où l'automatisation pourrait créer un risque de sécurité ou de qualité, et
listez ce que je devrais d'abord vérifier avec [control owner role]. N'inventez
ni économies ni valeurs de référence. Énumérez vos hypothèses.
```

**Examinez un tableau de bord de traitement à la recherche de risques de détournement.**

```text
Voici notre tableau de bord de traitement des demandes : [describe metrics,
definitions, and targets]. Pour chaque métrique, énumérez comment elle pourrait
être détournée ou mal lue, le signe observable dans les données et une métrique
ou pratique de garde-fou associée. Vérifiez que rien ne classe des individus, et
suggérez des changements de formulation qui réduisent la pression sur l'équipe.
N'inventez pas de seuils ; demandez-moi ceux dont vous avez besoin. Énumérez vos
hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver la définition, le vecteur de détournement et le garde-fou d'une métrique de demande, et les sujets voisins qui lui sont associés.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent intacts le gabarit, les horloges et les associations de garde-fous.

## Points clés à retenir

- Mesurez le traitement par élément de catalogue, de la soumission de l'utilisateur à sa confirmation, et rapportez la médiane et un percentile élevé.
- L'essentiel du temps écoulé est de l'attente ; séparez donc le temps de travail effectif, d'approbation et d'attente de l'utilisateur avant de décider quoi corriger.
- Lisez le volume par élément comme un message des utilisateurs, et automatisez d'abord les éléments fréquents et stables.
- Associez chaque chiffre de vitesse au taux de réouverture et à un signal de satisfaction, et rapportez ouvertement le temps suspendu.
- Décrivez la file et le processus, jamais la personne.

## Références et lectures complémentaires

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
