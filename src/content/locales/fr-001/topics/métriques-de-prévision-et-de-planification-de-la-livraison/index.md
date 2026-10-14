# Métriques de prévision et de planification de la livraison

**Les équipes qui livrent du logiciel en continu et exploitent aussi des services en production ont besoin de prévisions honnêtes, non d'engagements arrachés à des estimations ; planifiez donc à partir du flux de travail terminé, donnez des fourchettes plutôt que des dates, et gardez tout chiffre de planification propre à l'équipe hors des comparaisons et hors des objectifs.**

## Résumé et motivation

Les parties prenantes posent deux questions à chaque équipe de livraison : « Quand ce sera fini ? » et « Combien pouvez-vous en prendre ? » La réponse agile part des visées des principes du Manifeste agile : livrer en continu du logiciel utile, collaborer chaque jour avec les parties prenantes, réfléchir et s'améliorer régulièrement, et bâtir le travail autour de personnes motivées à qui l'on fait confiance pour le mener à bien. Une prévision au service de ces visées est une conversation entre parties prenantes sur les résultats probables et le risque. Ce n'est pas une promesse extorquée sous pression.

Les équipes qui exploitent des services en production ont une difficulté supplémentaire. Leur capacité est partagée entre changements planifiés, travail d'incident non planifié, demandes de service et amélioration. Un plan qui ignore la charge opérationnelle échouera pour des raisons que personne n'avait planifiées (voir le sujet 2.9, Travail opérationnel et travail non planifié). La gestion des services informatiques (ITSM), telle que codifiée par ITIL, traite cela comme une question de capacité et de demande. La [planification de la capacité](https://en.wikipedia.org/wiki/Capacity_planning) est le processus qui détermine la capacité dont une organisation a besoin pour répondre à une demande changeante. La pratique agile de planifier au regard de ce que l'équipe peut réellement terminer est la même idée à l'échelle de l'équipe.

Il y a deux grandes façons de prévoir la livraison :

- **À partir d'estimations.** L'équipe dimensionne les éléments dans une unité, additionne les tailles et divise par un rythme. Beaucoup d'équipes emploient un dimensionnement relatif comme les [points de récit](https://en.wikipedia.org/wiki/Story_point), et le rythme s'appelle la [vélocité](https://en.wikipedia.org/wiki/Velocity_(software_development)). C'est rapide à démarrer, cela dépend des habitudes d'estimation de l'équipe et cela n'a de sens qu'à l'intérieur d'une seule équipe.
- **À partir des données de flux.** L'équipe utilise son propre historique de travail terminé : combien d'éléments elle termine par semaine (débit) et combien de temps les éléments prennent du début à la fin (temps de cycle). Comme ce sont des comptages et des temps écoulés, non des opinions, ils résistent à la dérive et peuvent se combiner avec la simulation pour donner une fourchette de résultats. Cette approche vient de la tradition du flux, dont fait partie le Kanban Guide, et fonctionne avec toute façon d'organiser le travail, y compris les équipes qui livrent en continu sans période de planification fixe.

Ce sujet penche vers la seconde approche, parce que la livraison logicielle continue produit un flux régulier d'éléments terminés que les données de flux décrivent directement (voir le sujet 2.1, Mesures de flux, et le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). Il couvre quand même la première, parce que beaucoup d'équipes emploient des estimations, et parce que le mauvais usage de la vélocité est l'une des façons les plus courantes dont les métriques de livraison tournent mal.

Les prévisions sont des [prévisions](https://en.wikipedia.org/wiki/Forecasting) d'un avenir incertain, et l'incertitude est le point central. L'idée du [cône d'incertitude](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) dit que les premières estimations sont les moins certaines. Le [biais de planification](https://en.wikipedia.org/wiki/Planning_fallacy) dit que les gens sous-estiment le temps que prendront leurs propres plans même quand ils savent que des plans similaires ont pris du retard. Les bonnes mesures de prévision le nomment et mesurent à quelle fréquence les prévisions tombent juste.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) compte ici, parce que les prévisions et les plans deviennent facilement des promesses, puis des objectifs. Dès qu'une équipe est jugée sur le respect d'une date, elle cache les risques, rogne la qualité ou sous-estime délibérément (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Prévoir à partir du travail terminé.** Ce que l'équipe a livré est une meilleure preuve que ce que quiconque croit qu'elle livrera.
- **Donner une fourchette avec une probabilité.** « Probablement d'ici la fin du mois prochain, très probablement d'ici la fin du suivant » vaut mieux qu'une date unique.
- **Planifier au regard de la capacité réelle.** Incluez le travail opérationnel, gardez du temps pour l'amélioration et ne planifiez pas à pleine utilisation.
- **Garder les estimations locales.** Toute unité de dimensionnement est un outil de planification privé d'une équipe, jamais une base de comparaison.
- **Mesurer la qualité des prévisions, pas seulement la livraison.** Une prévision juste pour de mauvaises raisons est de la chance.
- **Traiter la prévision comme partagée.** Les parties prenantes et l'équipe la construisent ensemble et la révisent quand les faits changent.
- **Faire confiance à l'équipe.** Les personnes à qui l'on fait confiance et que l'on soutient donnent des prévisions honnêtes.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de réussite des prévisions | Part des prévisions dont le résultat réel est tombé dans la fourchette indiquée | prévisions dont le résultat réel était dans la fourchette indiquée / prévisions faites | pourcentage | Journal des prévisions et enregistrements de livraison | Gestion de la capacité et de la performance ; amélioration continue | Exactitude des prévisions dans les conversations de planification | Mensuelle |
| Largeur de la fourchette de prévision | Largeur de la fourchette indiquée, relative à la prévision médiane | (borne supérieure moins borne inférieure) / prévision médiane | ratio | Journal des prévisions | Gestion de la capacité et de la performance | Resserrement du cône d'incertitude | Mensuelle |
| Réussite des objectifs de livraison | Part des objectifs de livraison énoncés qui ont été atteints pour la période, jugés au résultat | objectifs atteints / objectifs fixés | pourcentage | Enregistrements d'objectifs convenus avec les parties prenantes | Gestion des niveaux de service ; amélioration continue | Revue des résultats avec les parties prenantes | Mensuelle ou à chaque livraison d'un objectif |
| Taux de changement de périmètre | Part du travail engagé qui a été ajoutée, retirée ou redimensionnée après la prévision | éléments ajoutés ou retirés après la prévision / éléments de la prévision d'origine | pourcentage | Historique des changements du gestionnaire de tickets | Maîtrise des changements ; gestion des niveaux de service | Adaptation du backlog aux retours | Mensuelle |
| Répartition de la capacité | Part de la capacité de l'équipe consacrée au changement, au travail opérationnel et à l'amélioration | éléments ou heures terminés dans chaque catégorie / tous les éléments ou heures terminés | pourcentage | Gestionnaire de tickets avec type de travail | Gestion de la capacité et de la performance ; gestion des incidents | Répartition des types de travail | Mensuelle |
| Stabilité du débit | Variation du débit hebdomadaire | écart type du débit hebdomadaire / moyenne du débit hebdomadaire | ratio | Gestionnaire de tickets | Gestion de la capacité et de la performance | Prévisibilité du flux | Mensuelle |
| Vélocité locale | Travail terminé d'une seule équipe dans sa propre unité de dimensionnement par période de planification | somme des estimations des éléments qui respectent la définition de terminé dans la période | points définis par l'équipe | Gestionnaire de tickets | Gestion de la capacité et de la performance | Aide à la planification de la capacité de l'équipe | Par période de planification |

Définissez les horloges. Une prévision est « faite » quand elle est consignée et partagée avec les parties prenantes, et « tenue » quand le résultat est publié et en usage, non quand le code est fusionné. Le débit compte les éléments qui respectent la définition de terminé, les éléments de types différents étant comptés dans des séries distinctes si leur taille diffère beaucoup. La vélocité locale n'est montrée qu'à l'équipe qui la détient.

## Recommandations

### Prévoir à partir du flux

**1. Construisez la prévision à partir du débit et du temps de cycle.** Comptez les éléments terminés chaque semaine sur les 12 à 26 dernières semaines. Servez-vous de cet historique pour prévoir combien d'éléments seront terminés à une date donnée, ou quand un ensemble d'éléments sera probablement terminé. Une simulation par [méthode de Monte-Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), qui échantillonne des milliers de fois l'historique propre de l'équipe, transforme l'historique en fourchette de probabilités. De simples tableurs ou de petits scripts le font bien. Indiquez la fenêtre d'historique et la date de la prévision.

**2. Rapportez des percentiles de résultats.** Dites « probable à 50 pour cent pour le 14 mars, à 85 pour cent pour le 4 avril, à 95 pour cent pour le 18 avril ». Chaque percentile est un énoncé honnête du risque, et les parties prenantes peuvent choisir la marge dont elles ont besoin. Une date unique cache ce choix (voir le sujet 1.6, Culture statistique pour les métriques de service).

**3. Utilisez des percentiles de temps de cycle pour des éléments isolés.** Pour un élément, le 85e percentile des temps de cycle passés répond à « combien de temps cela pourrait-il prendre ? » mieux que n'importe quelle estimation. Montrez-le sur le tableau, comme une ligne à laquelle comparer l'âge des éléments en cours (voir le sujet 2.1, Mesures de flux).

**4. Gardez des tailles d'éléments à peu près égales.** La prévision fondée sur le débit fonctionne le mieux quand les éléments sont petits et assez semblables pour être comptés. Les équipes y arrivent en découpant le travail en plus petit morceau qui livre encore de la valeur, une habitude de la livraison logicielle continue en soi. Si les éléments varient largement, suivez des séries séparées pour les différents types de travail.

**5. Actualisez la prévision chaque fois que les faits changent.** Une prévision est une vue vivante. Quand le périmètre change, que la taille de l'équipe change ou qu'un gros incident consomme une semaine, relancez-la et prévenez les parties prenantes. Versionnez les prévisions pour pouvoir les juger plus tard.

### Planifier au regard de la capacité réelle

**6. Répartissez la capacité par type de travail.** Consignez quelle part du travail terminé de l'équipe était du changement planifié, du travail opérationnel non planifié, des demandes de service et de l'amélioration. Planifiez pour la part que montre l'expérience, non pour un idéal. Les équipes qui exploitent des services en production constatent souvent qu'un tiers ou plus de leur capacité va au travail opérationnel, et le chiffre est à mesurer par elles, non à emprunter (voir le sujet 2.9, Travail opérationnel et travail non planifié).

**7. Réservez de la capacité pour l'amélioration.** L'amélioration continue est une part permanente du travail ; prévoyez-y donc du temps dans la répartition, et protégez-le. Les équipes qui l'évincent à chaque période chargée voient leur charge opérationnelle monter, ce qui l'évince davantage. Suivez la part d'amélioration et l'effet des améliorations sur la part opérationnelle.

**8. Ne planifiez pas à pleine utilisation.** Une équipe planifiée à 100 pour cent n'a aucune marge pour la variation, et les files grandissent à mesure que l'utilisation approche de la limite (voir le sujet 2.3, Travail en cours et théorie des files d'attente). Laissez de la marge pour l'imprévu, et traitez-la comme un choix de conception et non comme du gaspillage.

### Employer les estimations avec soin si on les emploie

**9. Traitez la vélocité comme une aide de planification locale.** Si une équipe dimensionne le travail en points de récit, sa vélocité peut l'aider à décider combien prendre à sa prochaine conversation de planification, et elle ne devrait être comparée qu'au passé récent de cette même équipe. Ne comparez jamais des équipes, ne fixez pas d'objectif de vélocité et ne rapportez pas la vélocité vers le haut comme une mesure de productivité. Les points n'ont pas d'unité commune entre équipes, et la pression pour relever le chiffre gonfle les estimations sans livrer davantage.

**10. Comparez de temps en temps les estimations aux temps de cycle réels.** Tracez les estimations en regard du temps que les éléments ont pris. Si les grosses estimations ne prennent pas plus de temps que les petites, l'effort d'estimation n'achète pas grand-chose, et compter les éléments peut servir l'équipe aussi bien. S'il y a une corrélation, les estimations portent une information qui mérite d'être gardée. Laissez l'équipe décider avec les données.

### Mesurer si cela fonctionne

**11. Consignez chaque prévision et notez-la.** Consignez la prévision, la fourchette et le résultat réel, puis calculez le taux de réussite. Une prévision au 85e percentile bien calibrée devrait se réaliser environ 85 pour cent du temps. Si les réussites sont bien au-dessus ou en dessous, ajustez la méthode. Partagez le journal avec les parties prenantes, car la confiance dans la prévision se construit à partir de l'historique de résultats.

**12. Jugez les objectifs de livraison au résultat.** Un objectif comme « les clients peuvent payer sur facture » est atteint quand les clients peuvent le faire, non quand les tâches sont closes. Convenez des objectifs avec les parties prenantes en mots simples, revoyez-les ensemble et consignez le résultat. Cela garde la planification liée à la collaboration continue, et décourage la livraison de travail que personne n'utilise (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de réussite des prévisions | Énoncer des fourchettes très larges pour que chaque prévision tombe juste ; reprévoir après coup | Largeur de la fourchette de prévision ; conserver la prévision d'origine dans le journal ; comparer les fourchettes à l'historique des pairs |
| Largeur de la fourchette de prévision | Resserrer les fourchettes pour paraître sûr de soi | Taux de réussite des prévisions ; exiger que la fourchette soit construite à partir d'un historique consigné |
| Réussite des objectifs de livraison | Fixer des objectifs faciles ; redéfinir un objectif après coup ; compter la production comme un résultat | Les parties prenantes jugent le résultat ; formulation des objectifs conservée dans un journal ; vérifier les données d'usage du changement livré |
| Taux de changement de périmètre | Figer le périmètre en refusant des changements valables ; cacher un changement de périmètre en redimensionnant des éléments | Satisfaction des parties prenantes quant à la réactivité ; raisons des changements consignées |
| Répartition de la capacité | Mal étiqueter le travail opérationnel comme de l'amélioration ; cacher la charge opérationnelle en travaillant hors du tableau | Rapprocher des enregistrements d'incidents et de demandes ; échantillonner les éléments pour en vérifier le type |
| Stabilité du débit | Fractionner les éléments en morceaux triviaux pour relever le compte ; clore des éléments sans les terminer | Distribution des tailles d'éléments ; taux de réouverture ; échantillon pour vérifier la valeur livrée |
| Vélocité locale | Gonfler les estimations ; fractionner des récits pour s'attribuer des points ; comparer des équipes | La garder privée à l'équipe ; la comparer au débit et au temps de cycle ; ne jamais fixer d'objectif |

Une lecture saine montre des prévisions qui se réalisent à peu près au taux annoncé, des objectifs que les parties prenantes reconnaissent comme atteints, un tableau de capacité qui correspond à ce que vit l'équipe, et un chiffre de vélocité qui, s'il existe, est utilisé par l'équipe et personne d'autre.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Prévision fondée sur le flux | Emploie des données réelles, résiste à l'inflation, donne des fourchettes | Exige un historique régulier et des éléments de taille semblable |
| Prévision fondée sur les estimations | Rapide à démarrer, encourage la discussion du travail | Subjective, s'infle sous pression, non comparable entre équipes |
| Engagement à date unique | Simple à communiquer | Cache le risque ; punit l'honnêteté |
| Fourchette avec probabilité | Honnête sur l'incertitude | Plus difficile à lire au début pour certaines parties prenantes |
| Planification à pleine utilisation | Paraît efficace | Les files grandissent ; aucune place pour les incidents ni l'apprentissage |
| Marge planifiée | Absorbe la variation et soutient l'amélioration | Ressemble à de la capacité inutilisée pour les non-convaincus |

La réponse en prose est de partir des données de flux, de n'ajouter des estimations que là où elles aident l'équipe et de parler en fourchettes. Là où un contrat exige une date, donnez la date que soutient le 85e ou le 95e percentile et dites ce qui la changerait.

## Questions à discuter avec votre équipe

**1. Que dirions-nous si une partie prenante demandait « quand ce sera fini » et voulait une réponse honnête ?**
Demandez à l'équipe de répondre pour un vrai travail, d'abord avec une date unique, puis avec une fourchette. Notez la différence de confort de chaque réponse. L'animateur doit noter ce dont l'équipe aurait besoin pour donner la fourchette honnêtement, comme l'historique, la taille des éléments et les risques connus.

**2. Quelle part de notre capacité va réellement au changement planifié, et comment le savons-nous ?**
Regardez les trois derniers mois de travail terminé par type. Comparez avec le plan que l'équipe avait fait. La conversation révèle souvent que le travail opérationnel est plus grand que prévu, et que le travail d'amélioration est plus petit. Convenez de ce que devrait être la répartition, et de la décision qui la changerait.

**3. Où nos estimations nous aident-elles, et où ne font-elles que coûter du temps ?**
Tracez un échantillon d'estimations en regard des temps de cycle réels. Discutez de la question de savoir si les plus grosses estimations étaient réellement plus lentes. Si le lien est faible, demandez ce que l'équipe ferait de différent si elle ne comptait que des éléments. Décidez de continuer, de simplifier ou d'arrêter d'estimer pour une période d'essai.

**4. Qui voit les chiffres de planification de notre équipe, et qu'en advient-il ?**
Suivez chaque chiffre de planification de l'équipe jusqu'à son public. Demandez si quelqu'un s'en sert pour comparer des équipes ou fixer des objectifs. Si oui, discutez de la manière d'y mettre fin et de ce qu'il faut offrir à la place. L'animateur doit être prêt à expliquer que les chiffres locaux perdent leur valeur quand ils voyagent.

**5. Quand l'une de nos prévisions a-t-elle échoué, et qu'avons-nous appris ?**
Choisissez un échec et retracez-le. Était-ce un changement de périmètre, un gros incident, une dépendance ou une hypothèse erronée ? Qu'est-ce qui l'aurait signalé plus tôt ? Convenez d'un changement à la pratique de prévision, comme consigner les dépendances ou actualiser la prévision chaque semaine.

**6. Quels objectifs avons-nous atteints le dernier trimestre, et qui l'a dit ?**
Listez les objectifs de livraison et qui a jugé chacun. Si l'équipe a jugé ses propres objectifs, discutez de la manière d'y associer les parties prenantes. La conversation appuie la collaboration continue, et elle montre si les objectifs portent sur des résultats ou sur des tâches.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent la prévision et les données de flux qui la soutiennent. Elles devraient publier des fourchettes, garder les éléments petits et reprévoir quand les faits changent. Les équipes qui choisissent de dimensionner le travail en points devraient garder les chiffres à l'intérieur de l'équipe. Le but est un flux régulier de travail terminé et précieux, et une prévision à laquelle les parties prenantes font confiance parce qu'elle a un historique de résultats.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent la demande qui perturbe les plans. Elles devraient partager la charge d'incidents et de demandes avec les équipes de livraison, pour que les plans de capacité partent de chiffres réels. Les équipes d'exploitation qui livrent aussi du changement peuvent employer la même prévision fondée sur le flux pour leur propre travail. La planification conjointe du changement et de l'exploitation est un bon endroit pour la collaboration continue entre les deux groupes.

### Direction et gouvernance

Les dirigeants décident si une prévision est un énoncé de risque ou une promesse. Ils devraient demander des fourchettes, financer la marge et l'amélioration, et résister à l'usage de la vélocité ou du débit pour comparer des équipes. Les instances de gouvernance devraient regarder le taux de réussite des prévisions dans le temps et les résultats des objectifs, et traiter les échecs répétés comme un signal sur le système, comme les dépendances et la charge opérationnelle, non sur les personnes.

### Clients et utilisateurs

Les utilisateurs se soucient de savoir quand ils verront le changement et s'il les aidera. Une fourchette avec une confiance déclarée les sert mieux qu'une date qui glisse. Ils devraient être associés au jugement sur l'atteinte des objectifs, puisque ce sont eux qui ressentent le résultat. Prévenir les utilisateurs quand une prévision change, et pourquoi, fait partie du fait de les traiter en collaborateurs.

## En pratique : un exemple d'ITIL agile

L'équipe numérique d'un fournisseur régional d'énergie construit un portail de facturation pour les clients et l'exploite en production. Les chiffres ci-dessous sont illustratifs.

Les parties prenantes ont demandé à l'équipe une date pour une nouvelle fonction de plan de paiement composée de 22 éléments. Le trimestre dernier, l'équipe a donné une date ferme fondée sur ses estimations, l'a manquée de cinq semaines à cause de deux incidents majeurs et a perdu la confiance des parties prenantes. Cette fois, la responsable de la livraison extrait le débit des 20 dernières semaines, qui va de 3 à 9 éléments par semaine avec une médiane de 6, et note que le travail opérationnel a pris environ 35 pour cent des éléments terminés.

Elle lance une simulation à partir de l'historique. Elle montre que 22 éléments se terminent en 4 semaines environ une fois sur deux, en 6 semaines environ 85 pour cent du temps et en 8 semaines environ 95 pour cent du temps. Elle présente ces trois dates aux parties prenantes, avec les hypothèses : taille de l'équipe inchangée, charge opérationnelle semblable à celle des 20 dernières semaines et aucun nouveau périmètre. Un responsable produit demande un lancement pour une date de facturation précise dans huit semaines. L'équipe et les parties prenantes conviennent de planifier pour la date à 85 pour cent, de garder les deux dernières semaines comme tampon et de fixer un point d'étape toutes les deux semaines pour reprévoir.

Au premier point d'étape, une panne de la passerelle de paiement a pris trois jours et la simulation déplace d'une semaine la date à 85 pour cent. L'équipe en informe les parties prenantes le jour même, avec la raison, et elles conviennent de retirer un élément de faible valeur. La fonction est mise en production à la date du tampon. L'objectif de livraison, « les clients peuvent mettre en place un plan de paiement sans appeler », est jugé par le responsable produit et un panel de clients après trois semaines. Il est atteint pour la plupart des clients, et un thème de commentaires montre une confusion sur un écran, qui rejoint le backlog. L'équipe consigne que son taux de réussite des prévisions pour le trimestre est de quatre sur cinq. Les parties prenantes demandent à la responsable de la livraison d'apporter des fourchettes de prévision à la prochaine séance de planification, et l'équipe abandonne l'usage des points de récit parce que compter les éléments donnait la même réponse.

## Perspective sectorielle

**Startup.** Les priorités changent vite ; gardez donc des prévisions courtes et approximatives. Suivez le débit dès le début, puisque cela ne coûte rien, et donnez des fourchettes aux fondateurs. Résistez à l'importation d'un système de planification conçu pour de grandes équipes.

**Petite entreprise.** Une ou deux personnes font parfois ensemble le changement et l'exploitation, sans capacité de réserve. Soyez explicite sur la répartition, et dites au propriétaire quand un incident va repousser une date. Un simple comptage hebdomadaire des éléments terminés suffit.

**Grande entreprise.** De nombreuses équipes et dépendances font dépendre les prévisions du flux d'autres équipes. Prévoyez chaque équipe à partir de ses propres données, rendez les dépendances visibles et combinez les fourchettes avec précaution, car additionner les meilleurs cas donne un total trompeur. Évitez les consolidations qui comparent les équipes par la vélocité.

**Gouvernement et secteur public.** Les budgets fixes, les marchés publics et les dates légales créent une pression pour des engagements à date unique. Énoncez la date qu'appuie le percentile choisi, expliquez les hypothèses et consignez ouvertement les arbitrages de périmètre. Là où une date obligatoire existe, planifiez le périmètre pour qu'il y tienne (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est faible. Les données de débit et de temps de cycle existent généralement dans le gestionnaire de tickets de l'équipe. Un tableur de prévision ou un petit script se construit en une journée, et une prévision se met à jour en quelques minutes. Le coût récurrent est le temps de consigner les prévisions et les résultats et de tenir une courte conversation d'étape avec les parties prenantes.

Le retour vient de moins de surprises et de meilleures décisions. Les parties prenantes qui comprennent le risque peuvent choisir un tampon, ajuster le périmètre ou réordonner le travail tôt. Les équipes passent moins de temps en cérémonies d'estimation si compter les éléments fait aussi bien l'affaire. Les conflits de dates manquées et les raccourcis de qualité qu'ils provoquent diminuent. Construisez le dossier à partir de votre propre historique : la part des prévisions qui ont tenu, le temps passé à estimer et les changements de périmètre faits tôt plutôt que tard. N'empruntez pas de chiffres de prévisibilité à d'autres organisations.

## Antimodèles et pièges

- **Traiter une prévision comme un engagement.** Cela en fait un objectif, et l'honnêteté devient coûteuse. Présentez des fourchettes et révisez-les.
- **Comparer les équipes par la vélocité.** Les points sont locaux, et la comparaison les gonfle. Comparez une équipe seulement à son propre passé.
- **Planifier à pleine utilisation.** La variation se transforme en retard. Laissez de la marge.
- **Ignorer le travail opérationnel.** Les plans échouent sur la charge que personne n'avait planifiée. Mesurez et planifiez la répartition.
- **Utiliser une date unique pour tout.** Employez des percentiles et dites lequel vous avez choisi.
- **Estimer avec plus de précision que ne le soutiennent les données.** Les estimations détaillées du travail lointain sont les moins fiables. Prévoyez grossièrement le travail lointain.
- **Fixer un objectif de vélocité ou de débit.** Le chiffre montera et la valeur non.
- **Ne jamais noter les prévisions.** Sans historique de résultats, la confiance ne peut pas croître.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Méthode de prévision | Devinettes à date unique | Estimations additionnées à la main | Fourchettes fondées sur le flux avec percentiles | Prévisions consignées et notées ; méthode réglée d'après le taux de réussite | Prévisions combinées entre équipes et dépendances, partagées en direct avec les parties prenantes |
| Planification de la capacité | Les plans ignorent le travail opérationnel | Charge opérationnelle connue grossièrement | Capacité répartie par type de travail à partir de données | Répartition revue au regard des résultats ; temps d'amélioration protégé | Capacité planifiée conjointement avec les fournisseurs et l'exploitation entre services |
| Objectifs et usage des chiffres | Les objectifs sont des listes de tâches | Objectifs écrits | Objectifs jugés au résultat avec les parties prenantes | Échecs analysés comme signaux du système ; chiffres locaux gardés privés | Objectifs fixés et jugés en collaboration avec les utilisateurs ; apprentissage partagé entre équipes |

## Liste de vérification

- [ ] Les prévisions sont construites à partir de l'historique de débit et de temps de cycle de l'équipe.
- [ ] Les prévisions sont données sous forme de fourchettes avec percentiles, hypothèses énoncées.
- [ ] Chaque prévision est consignée avec sa fourchette et son résultat réel.
- [ ] Le taux de réussite des prévisions et la largeur de la fourchette sont revus chaque mois.
- [ ] La capacité est répartie par type de travail, y compris le travail opérationnel et l'amélioration.
- [ ] L'utilisation planifiée laisse de la marge pour la variation et les incidents.
- [ ] Toute unité de dimensionnement ou vélocité est privée à l'équipe et ne porte aucun objectif.
- [ ] Les objectifs de livraison sont écrits comme des résultats et jugés avec les parties prenantes.
- [ ] Les changements de périmètre sont consignés avec leurs raisons.
- [ ] Les prévisions sont actualisées quand les faits changent, et les parties prenantes sont prévenues.

## Prompts d'IA

**Construisez une prévision fondée sur le débit.**

```text
Notre équipe a terminé ces nombres d'éléments chacune des [number] dernières
semaines : [paste weekly counts]. Nous voulons savoir quand [number] éléments
seront probablement terminés. Expliquez comment produire une fourchette de
probabilités à partir de notre propre historique, donnez un exemple détaillé
d'une méthode de simulation simple et décrivez les hypothèses qu'elle fait.
N'inventez ni historique ni valeurs de référence. Énumérez vos hypothèses et les
conditions dans lesquelles la prévision ne s'appliquerait pas.
```

**Examinez la façon dont nous employons les estimations.**

```text
Nous dimensionnons les éléments en [unit] et employons [practice] pour planifier.
Voici un échantillon de [number] éléments terminés avec leurs estimations et
leurs temps de cycle réels en jours : [paste data]. Décrivez si les estimations
prédisent le temps de cycle dans cet échantillon, ce que cela implique quant à
l'effort que mérite l'estimation et ce que nous pourrions essayer à la place. Ne
prétendez pas de résultats au-delà des données. Énumérez vos hypothèses.
```

**Planifiez la capacité entre changement et exploitation.**

```text
Sur les [period] écoulés, notre équipe a terminé [counts] éléments de ces
types : [planned change, incidents, requests, improvement]. Proposez une
répartition de la capacité pour les [period] suivants qui laisse de la marge, et
décrivez comment l'expliquer aux parties prenantes. Suggérez comment détecter
si le travail opérationnel est mal étiqueté. N'inventez pas de ratios sectoriels.
Énumérez vos hypothèses.
```

**Rédigez une revue de prévision avec les parties prenantes.**

```text
Rédigez un ordre du jour et une synthèse d'une page pour un point d'étape de
prévision sur [piece of work]. Données : prévision d'origine [range], état
actuel [description], changements depuis le dernier point d'étape [list]. Incluez
la fourchette mise à jour, ce qui l'a changée, les options de périmètre ou de
calendrier et les questions auxquelles nous avons besoin que les parties
prenantes répondent. Employez un langage clair. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de prévision ou de planification.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de planification révisée conserve son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Prévoyez à partir du flux de travail terminé, et donnez des fourchettes avec des probabilités plutôt que des dates uniques.
- Planifiez au regard de la capacité réelle, y compris le travail opérationnel, le temps d'amélioration et la marge.
- Traitez toute unité d'estimation ou vélocité comme une aide privée pour une équipe, jamais comme un objectif ni une comparaison.
- Notez vos prévisions : le taux de réussite bâtit la confiance.
- Jugez les objectifs de livraison au résultat, avec les parties prenantes et les utilisateurs.
- Faites confiance à l'équipe et soutenez-la : les prévisions honnêtes viennent de personnes qu'on ne punit pas pour leur incertitude.

## Références et lectures complémentaires

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
