# Retour sur investissement et dossier d'affaires

**Un dossier d'affaires est une prévision ; rédigez-le donc avec des plages et des hypothèses énoncées, financez le travail par étapes à mesure que les preuves arrivent, et comparez la prévision à ce qui s'est passé pour que le prochain dossier soit plus honnête que le dernier.**

## Résumé et motivation

Améliorer la façon dont les services informatiques sont livrés et exploités demande de l'argent et de l'attention, et chaque proposition entre en concurrence avec d'autres. Une nouvelle plateforme, un changement d'effectifs, un programme d'automatisation et une initiative de qualité promettent tous un avenir meilleur. Les dirigeants ont besoin d'un moyen de les comparer, et les équipes d'un moyen de plaider pour le travail qui compte. Le dossier d'affaires est l'outil traditionnel, et le retour sur investissement en est le chiffre le plus connu.

Un [dossier d'affaires](https://en.wikipedia.org/wiki/Business_case) est une justification d'un projet ou d'une entreprise proposés, qui expose d'ordinaire le problème, les options, les coûts, les bénéfices et les risques. Le [retour sur investissement](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) compare le gain d'un investissement à son coût. Le [coût total de possession](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO) compte tout ce qu'un actif ou un service coûte sur sa vie, y compris l'achat, l'exploitation, le soutien et la mise au rebut. Les sujets précédents de cette partie fournissent les intrants : le coût des actifs, des logiciels, des enregistrements de configuration, des services et des ressources de nuage (voir le sujet 7.5, Coût du service et économie unitaire, et le sujet 7.6, Métriques FinOps et de coûts du nuage), et le sujet sur les bénéfices donne la preuve des résultats (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

Deux tensions rendent les dossiers d'affaires difficiles à bien faire.

- **Les dossiers d'affaires sont des prévisions, écrites par des gens qui veulent une approbation.** L'auteur veut souvent que la proposition réussisse, et l'incitation à gonfler les bénéfices et à rogner les coûts est forte. Le [biais d'optimisme](https://en.wikipedia.org/wiki/Optimism_bias) est la tendance à attendre de meilleurs résultats que ce qui est probable, et il est bien documenté en planification de projets. Le correctif est la [prévision par classe de référence](https://en.wikipedia.org/wiki/Reference_class_forecasting), qui fonde les estimations sur les résultats réels de projets passés semblables au lieu d'un récit bâti du bas vers le haut. Votre propre historique de dossiers passés est la meilleure classe de référence dont vous disposez.
- **La livraison continue change ce qu'un dossier d'affaires peut promettre.** L'approche agile suppose que les exigences et la valeur se découvrent à mesure que le travail avance. Un périmètre, un prix et un ensemble de bénéfices fixés un an à l'avance entrent en conflit avec cela. La réponse agile est de financer par étapes : une petite première étape pour apprendre, puis un financement supplémentaire à mesure que les preuves arrivent. Cela correspond au but de livraison continue et de collaboration continue avec les parties prenantes, et à une fonction financière qui veut du contrôle. Cela signifie aussi que le dossier d'affaires est un document vivant, revisité à mesure que les hypothèses sont mises à l'épreuve (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

Quelques idées de la finance aident. La [valeur temporelle de l'argent](https://en.wikipedia.org/wiki/Time_value_of_money) dit qu'une unité monétaire aujourd'hui vaut plus qu'une unité plus tard, de sorte que les bénéfices plus lointains comptent moins. La [valeur actualisée nette](https://en.wikipedia.org/wiki/Net_present_value) (VAN) convertit un flux de coûts et de bénéfices futurs en une seule valeur d'aujourd'hui à l'aide d'un taux d'actualisation. Le [délai de récupération](https://en.wikipedia.org/wiki/Payback_period) est le temps nécessaire pour récupérer la mise de fonds initiale. Chacun est un résumé et chacun cache des hypothèses ; énoncez-les donc. Le [coût d'opportunité](https://en.wikipedia.org/wiki/Opportunity_cost) rappelle que le coût de choisir une option est la valeur de la meilleure solution de rechange abandonnée. Un [coût irrécupérable](https://en.wikipedia.org/wiki/Sunk_cost) est de l'argent déjà dépensé qui ne peut être recouvré et ne devrait pas guider la décision de continuer.

Chaque nombre d'un dossier d'affaires peut être détourné, en choisissant une période généreuse, un taux d'actualisation favorable ou des bénéfices difficiles à vérifier. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique au dossier lui-même : quand l'approbation dépend d'un ROI affiché, les auteurs apprennent à le produire (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Les mesures ci-dessous comprennent donc un contrôle de la qualité des prévisions passées.

## Principes clés

- **Traiter le dossier comme une prévision avec une plage.** Montrez les résultats bas, attendu et haut, et énoncez les hypothèses de chacun.
- **Compter le coût complet.** Incluez l'exploitation, le soutien, la formation, l'effort de changement et la mise au rebut autant que la construction.
- **Être explicite sur les bénéfices et leurs preuves.** Séparez les économies de coûts, les coûts évités, les revenus et la réduction des risques, et dites comment chacun sera mesuré.
- **Financer par étapes.** Libérez l'argent à mesure que les hypothèses sont mises à l'épreuve et que le tableau s'améliore.
- **Comparer avec les solutions de rechange, y compris ne rien faire.** Le coût de rester sur place fait partie du dossier.
- **Apprendre de votre propre historique.** Comparez les prévisions aux résultats et ajustez.
- **Ignorer les coûts irrécupérables.** Décidez sur ce qui reste à venir.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Retour sur investissement | Gain net rapporté au coût sur une période énoncée | (bénéfices totaux moins coûts totaux) / coûts totaux sur la période | pourcentage | Dossier d'affaires, grand livre, registre des bénéfices | Gestion financière des services ; amélioration continue | Revue des résultats au regard du financement | À la décision et à chaque revue |
| Coût total de possession | Coût sur toute la vie d'un service ou d'un actif sur une période énoncée | coûts d'acquisition + d'exploitation + de soutien + de changement + de formation + de mise au rebut sur la période | monnaie | Grand livre, modèles de coûts, contrats de fournisseurs | Gestion financière des services ; gestion des actifs informatiques | Coût d'une équipe pérenne et de ses plateformes | À la décision et chaque année |
| Délai de récupération | Temps pour que les bénéfices nets cumulés égalent l'investissement initial | moment où les bénéfices cumulés moins les coûts cumulés atteignent zéro | mois | Flux de trésorerie du dossier d'affaires | Gestion financière des services | Temps jusqu'à la première valeur, étendu à la récupération des coûts | À la décision et à chaque revue |
| Valeur actualisée nette | Valeur actuelle des bénéfices attendus moins valeur actuelle des coûts, à un taux d'actualisation énoncé | somme sur les périodes de (bénéfice moins coût) / (1 + taux d'actualisation) à la puissance de la période | monnaie | Flux de trésorerie du dossier d'affaires, politique financière sur le taux d'actualisation | Gestion financière des services | Priorisation fondée sur la valeur | À la décision |
| Exactitude des estimations de coût | Rapport du coût réel au coût estimé pour les initiatives terminées | coût réel / coût estimé à l'approbation, par initiative et sous forme de distribution | ratio | Enregistrements de dossiers d'affaires et grand livre | Gestion financière des services ; amélioration continue | Exactitude des prévisions | Trimestrielle |
| Exactitude des estimations de bénéfices | Rapport du bénéfice réalisé au bénéfice attendu pour les initiatives terminées, selon les règles de preuve des bénéfices | bénéfice réalisé / bénéfice attendu à l'approbation, par initiative et sous forme de distribution | ratio | Enregistrements de dossiers d'affaires et registre des bénéfices | Amélioration continue ; gouvernance du système de valeur de service | Revue des résultats avec les parties prenantes | Trimestrielle |
| Taux d'arrêts fondés sur les preuves | Part des initiatives financées qui ont été arrêtées ou remodelées à une porte d'étape parce que les preuves ont changé le tableau | initiatives arrêtées ou remodelées sur preuves à une porte / initiatives arrivées à une porte | pourcentage | Journal des décisions aux portes d'étape | Amélioration continue ; gouvernance du portefeuille | Apprentissage à partir du travail livré | Trimestrielle |

Énoncez pour chaque chiffre la période, le taux d'actualisation et ce qui compte comme coût ou bénéfice, et consignez-les avec le dossier. Le ROI et la VAN en dépendent fortement ; deux dossiers ne sont donc comparables que s'ils emploient les mêmes règles. L'exactitude des coûts et des bénéfices se montre sous forme de distributions, par exemple le ratio médian et la dispersion, sur les initiatives passées, non comme une moyenne unique. Un faible taux d'arrêts fondés sur les preuves peut signifier une bonne sélection, ou des portes qui ne disent jamais non ; lisez-le donc avec les mesures d'exactitude.

## Recommandations

### Rédiger honnêtement le dossier

**1. Commencez par le problème et les options.** Décrivez le problème, qui le subit et ce qu'il coûte maintenant. Listez au moins trois options : ne rien faire, un pas minimal et le changement proposé, plus toute solution de rechange sérieuse. « Ne rien faire » a des coûts, comme la continuation des incidents ou un risque croissant, et les inclure rend la comparaison équitable.

**2. Comptez le coût total de possession sur la vie du changement.** Incluez la construction, les licences, l'hébergement, l'exploitation, le soutien, la formation, la migration, le temps des personnes qui l'utiliseront et la mise au rebut. Les coûts qui arrivent après le lancement sont ceux qu'on omet le plus souvent. Employez une période qui correspond à la vie du bénéfice, et dites laquelle.

**3. Décrivez chaque bénéfice et la façon dont il sera mesuré.** Séparez les sortes. Les économies de coûts réduisent la dépense réelle. Les coûts évités préviennent une dépense qui aurait eu lieu autrement, et sont plus difficiles à vérifier. Les bénéfices de revenus dépendent du comportement du marché. La réduction des risques abaisse la probabilité ou l'impact d'une perte, et s'énonce au mieux en termes d'un scénario précis. Pour chacun, nommez l'indicateur, la ligne de base et le responsable (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

**4. Donnez des plages, et dites ce qui les pilote.** Pour les coûts et les bénéfices, donnez une estimation basse, attendue et haute, avec les principales hypothèses. Une [analyse de sensibilité](https://en.wikipedia.org/wiki/Sensitivity_analysis) montre comment le résultat change quand une hypothèse change, et lesquelles comptent le plus. Si le dossier ne fonctionne que lorsque toutes les hypothèses sont généreuses, dites-le. La simulation peut combiner des plages, mais elle peut aussi donner un faux réconfort si les intrants sont des devinettes.

### Corriger l'optimisme

**5. Employez votre propre historique comme classe de référence.** Regardez les résultats réels de coûts et de bénéfices de vos initiatives semblables passées, et comparez-les à ce qui avait été prévu. Si les initiatives passées ont coûté en moyenne 30 pour cent de plus que l'estimation, une nouvelle estimation qui l'ignore répétera probablement l'erreur. Ajustez, ou au moins montrez l'ajustement. Les mesures d'exactitude des coûts et des bénéfices ci-dessus bâtissent ce registre.

**6. Faites relire le dossier par quelqu'un d'extérieur à l'équipe.** Un collègue de la finance ou d'une autre équipe, sans intérêt dans le résultat, lit le dossier pour y trouver des coûts manquants, des bénéfices généreux et des hypothèses non éprouvées. Rendez la revue routinière et constructive. Un dossier qui la survit est plus solide.

**7. Séparez, si possible, ceux qui estiment de ceux qui plaident.** Les équipes de livraison sont bonnes pour estimer l'effort, et les commanditaires pour juger la valeur. Quand la même personne veut l'approbation, les estimations dérivent. Consignez qui a produit quels chiffres.

### Financer par étapes

**8. Libérez le financement par étapes liées aux preuves.** Financez une petite première étape pour éprouver l'hypothèse la plus risquée : bâtir une tranche mince, mener un projet pilote ou mesurer la ligne de base. Définissez à l'avance quelles preuves justifieraient l'étape suivante, lesquelles feraient remodeler le travail et lesquelles feraient arrêter. C'est l'approche agile du risque appliquée à l'argent, et elle plafonne le coût de se tromper.

**9. Décidez à chaque étape sur ce qui reste à venir.** L'argent déjà dépensé est un coût irrécupérable, et il ne devrait pas peser sur la décision de continuer. Demandez si le coût restant est justifié par le bénéfice attendu restant, compte tenu de ce que vous avez appris. Donnez aux équipes la permission d'arrêter, et traitez un arrêt bien étayé comme un bon résultat.

**10. Gardez les parties prenantes dans la boucle.** Passez le dossier en revue avec le commanditaire et le responsable des bénéfices à chaque étape. La collaboration avec les parties prenantes tout au long est un but agile essentiel, et elle empêche le dossier de devenir un document que personne ne lit après l'approbation.

### Vérifier et apprendre

**11. Comparez le résultat au dossier.** Aux points de revue convenus, comparez le coût réel et le bénéfice réalisé à la prévision. Consignez les ratios, les raisons des différences et ce que vous changeriez dans le prochain dossier. Rendez la revue sans reproche et factuelle, car l'honnêteté des rapports en dépend.

**12. Rapportez la distribution de l'exactitude aux décideurs.** Montrez, sur les initiatives passées, comment les prévisions se comparent aux résultats. Un portefeuille où les bénéfices manquent régulièrement leur cible d'une marge semblable dit aux dirigeants quelle confiance accorder à un nouveau dossier, et donne aux auteurs une raison d'être honnêtes. Associez-la au taux d'arrêts fondés sur les preuves pour voir si les portes fonctionnent.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Retour sur investissement | Choisir une longue période ou compter des bénéfices intangibles ; omettre le coût d'exploitation | Règles fixes de période et de périmètre des coûts ; qualité des preuves des bénéfices ; revue indépendante |
| Coût total de possession | Omettre le soutien, la formation, l'effort de changement ou la mise au rebut ; employer des volumes optimistes | Liste de vérification des catégories de coûts ; comparer au TCO réel de travaux passés semblables |
| Délai de récupération | Définir le début tard ; compter des bénéfices non réalisés | Définition de l'horloge fixée ; comparer à l'exactitude des bénéfices réalisés |
| Valeur actualisée nette | Choisir un taux d'actualisation bas ; allonger l'horizon | Taux d'actualisation fixé par la politique financière ; analyse de sensibilité montrée |
| Exactitude des estimations de coût | Réviser l'estimation de base après coup ; exclure les dépassements comme changements de périmètre | Estimation figée à l'approbation ; consigner les changements de périmètre avec approbation ; montrer le coût total à l'achèvement |
| Exactitude des estimations de bénéfices | Compter des bénéfices non mesurés ; redéfinir le bénéfice | Règles du registre des bénéfices ; un responsable extérieur à l'équipe de livraison confirme |
| Taux d'arrêts fondés sur les preuves | Arrêter du travail de faible valeur pour gonfler le taux ; ne jamais rien arrêter | Lire avec les mesures d'exactitude ; revoir les raisons des arrêts et des poursuites |

Une lecture saine est un portefeuille doté d'un historique : des prévisions un peu optimistes d'une façon connue, des dossiers qui comprennent des plages et une sensibilité, et des portes qui arrêtent parfois du travail sur preuves.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Grand dossier d'affaires initial | Engagement et contrôle clairs | Fige les hypothèses ; invite à l'optimisme |
| Financement par étapes | Limite le coût de se tromper ; apprend tôt | Exige de la discipline aux portes ; moins de certitude pour la planification |
| Chiffre de ROI unique | Simple à comparer | Cache les hypothèses ; facile à détourner |
| Plage avec sensibilité | Honnête sur l'incertitude | Plus difficile à comparer ; peut sembler vague |
| Dossier qualitatif | Saisit les raisons stratégiques et de risque | Difficile à comparer et à vérifier |
| Dossier quantitatif | Comparable et vérifiable | Fausse précision ; omet ce qui ne se compte pas |
| Classe de référence externe | Corrige l'optimisme | Peut ne pas convenir à votre contexte |
| Classe de référence de votre historique | Convient à votre contexte | Exige un registre ; petits échantillons |

La réponse en prose est d'employer le financement par étapes, les plages et votre propre historique, avec un court récit qualitatif de ce que les chiffres manquent. Employez le ROI, la VAN et le délai de récupération comme résumés, non comme verdicts.

## Questions à discuter avec votre équipe

**1. À quel point nos cinq derniers dossiers d'affaires se sont-ils trompés, et dans quel sens ?**
Rassemblez les coûts et bénéfices prévus et réels des initiatives récentes. Calculez les ratios. Regardez la dispersion et si les erreurs penchent d'un côté. L'animateur doit résister aux explications au premier passage et simplement consigner le schéma. Discutez ensuite de ce qu'il implique pour le prochain dossier.

**2. Quelle est l'hypothèse la plus risquée de notre proposition actuelle, et à quel faible coût pourrions-nous l'éprouver ?**
Listez les hypothèses et classez-les selon la dépendance du dossier envers chacune et notre incertitude. Pour la première, concevez un petit essai. La réponse façonne la première étape de financement.

**3. Que coûte ne rien faire, et l'avons-nous mis dans le dossier ?**
Décrivez la trajectoire probable si la proposition n'est pas approuvée : coûts d'incidents qui se poursuivent, entretien croissant, risque grandissant. Estimez-la avec une plage. Vérifiez que le dossier se compare équitablement avec elle.

**4. Quels coûts apparaissent toujours tard dans nos projets ?**
Pensez à l'exploitation, à la formation, à la migration et au démantèlement. Vérifiez le dossier pour chacun. Ajoutez au modèle une liste de vérification standard des catégories de coûts.

**5. Qui, à l'extérieur de l'équipe, a contesté nos chiffres, et qu'a-t-il dit ?**
Passez en revue la dernière revue indépendante. S'il n'y en a pas eu, décidez de qui devrait faire la prochaine. La conversation doit établir clairement que la revue est un service rendu au dossier, non une attaque.

**6. Quand avons-nous arrêté quelque chose pour la dernière fois parce que les preuves avaient changé, et comment cela s'est-il passé ?**
Rappelez-vous une initiative arrêtée ou remodelée. Discutez de la façon dont elle a été reçue et de ce qu'elle a fait pour la confiance. Convenez de la manière de faire ressentir le prochain arrêt comme un apprentissage.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison fournissent les estimations de coûts et apprennent des étapes de financement. Elles devraient estimer par plages, consigner les coûts réels et parler quand des hypothèses se brisent. Le financement par étapes leur permet de se concentrer sur l'apprentissage de ce qui compte le plus, et un arrêt fondé sur les preuves devrait compter comme un succès.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent une grande part du coût après le lancement et sont souvent laissées hors du dossier. On devrait leur demander les coûts de fonctionnement, l'effort de soutien et les risques, et elles devraient vérifier les bénéfices qui dépendent de leur travail, comme la baisse des incidents. Elles peuvent vérifier les affirmations d'économies en exploitation à partir de leurs propres données.

### Direction et gouvernance

Les dirigeants décident de ce qui est financé et fixent le climat d'honnêteté. Ils devraient demander des plages et des hypothèses, passer en revue l'historique des prévisions, financer par étapes et accepter un arrêt comme un résultat normal. La gouvernance devrait exiger une revue indépendante des gros dossiers et une vérification après mise en œuvre, et regarder le portefeuille de résultats.

### Clients et utilisateurs

Les utilisateurs et les responsables métier portent les bénéfices et la perturbation. Ils devraient faire partie du dossier, aider à définir le problème et le bénéfice, et être informés de ce qui a été décidé et pourquoi. Leur expérience après la livraison est le meilleur test pour savoir si le dossier avait raison.

## En pratique : un exemple d'ITIL agile

Le groupe informatique d'une agence provinciale de santé propose un programme pour automatiser les demandes d'accès courantes et réduire le traitement manuel. Les chiffres ci-dessous sont illustratifs.

La première ébauche de la proposition affirme un ROI de 240 pour cent sur cinq ans, fondé sur 18 000 demandes par an, un coût moyen de traitement manuel et l'automatisation complète de 80 pour cent des demandes. La partenaire financière suggère d'appliquer l'historique du groupe lui-même. Elle sort huit initiatives passées : le coût réel valait en médiane 1,35 fois l'estimation, avec une plage de 1,0 à 1,9, et le bénéfice réalisé valait en médiane 0,6 du bénéfice attendu. Le groupe constate aussi que le chiffre du volume de demandes provenait d'une seule année chargée, et que l'estimation des coûts omettait la formation et le temps du personnel qui examine les exceptions.

L'équipe réécrit le dossier avec des plages. Avec l'historique des coûts, le coût attendu augmente d'un tiers. Avec l'historique des bénéfices, le bénéfice attendu est réduit d'environ la moitié. Le dossier révisé montre un ROI dans une plage allant d'un peu négatif à environ 70 pour cent, un délai de récupération entre 20 et 40 mois et une VAN positive dans les cas médian et attendu au taux d'actualisation de la politique financière, mais négative dans le cas bas. L'analyse de sensibilité montre que la part des demandes pouvant être automatisées compte le plus. La proposition est remodelée en étapes. La première étape automatise les trois types de demandes les plus courants, avec un budget d'environ un cinquième du total, pour éprouver la part d'automatisation et mesurer le temps de traitement de base. Les critères de la deuxième étape sont écrits : au moins 50 pour cent de ces types de demandes entièrement automatisés, et le temps de traitement par demande réduit d'un montant énoncé, le responsable des bénéfices confirmant.

Après la première étape, 58 pour cent des trois types de demandes sont automatisés, et les exceptions prennent plus de temps que prévu. L'équipe remodèle la deuxième étape pour améliorer le traitement des exceptions avant d'étendre à d'autres types. Le conseil d'administration de l'agence demande pourquoi le chiffre de ROI a baissé. La directrice explique que le chiffre précédent supposait une automatisation complète et aucun historique de dépassement, et que la nouvelle plage est plus honnête. La décision est consignée. Le remodelage de la deuxième étape fondé sur les preuves est journalisé, et les tableaux d'exactitude des coûts et des bénéfices du portefeuille sont mis à jour.

## Perspective sectorielle

**Startup.** Les ressources sont rares et la vitesse d'apprentissage compte. Employez un dossier d'une page avec l'hypothèse la plus risquée et un essai peu coûteux, financez par petites étapes et évitez les modèles financiers élaborés. L'autonomie financière, non la VAN, est souvent la contrainte qui lie.

**Petite entreprise.** Le propriétaire est à la fois le commanditaire et la fonction financière. Concentrez-vous sur le délai de récupération et la trésorerie, incluez le temps du personnel et comparez avec les options de ne rien faire et d'acheter. Méfiez-vous des calculateurs de ROI fournis par les vendeurs, qui tendent à être généreux.

**Grande entreprise.** La gouvernance de portefeuille, la politique financière sur les taux d'actualisation et de nombreuses propositions concurrentes rendent la cohérence importante. Employez un modèle standard avec des catégories de coûts obligatoires, une revue indépendante des gros dossiers et une revue après mise en œuvre. Tenez un registre de l'exactitude des prévisions par commanditaire et par type d'initiative comme outil de portefeuille, non comme classement de personnes.

**Gouvernement et secteur public.** Les organismes publics suivent souvent des lignes directrices formelles d'évaluation, comme le Green Book du Royaume-Uni, qui expose comment évaluer les options, traiter le biais d'optimisme et considérer l'optimisation des ressources y compris les bénéfices non financiers. Les bénéfices peuvent être sociaux et difficiles à monétiser, et la transparence et l'audit comptent. Employez les lignes directrices qui s'appliquent à vous, documentez les hypothèses et consignez les preuves des bénéfices (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Ce sujet porte lui-même sur le dossier d'affaires ; le point est donc le coût de bien le faire. Rédiger un dossier soigné prend des jours, non des heures, et la revue indépendante en prend davantage. Suivre l'exactitude des coûts et des bénéfices exige un simple registre de la prévision et du résultat de chaque initiative, ce qui manque à beaucoup d'organisations. Le financement par étapes ajoute des réunions de gouvernance.

Le retour est une meilleure allocation d'un argent rare et moins de grands échecs. Des dossiers honnêtes réduisent les surprises qui suivent les dossiers optimistes. Un historique permet aux dirigeants de décompter à juste titre les nouveaux dossiers, ce qui rend tout le portefeuille plus fiable. Bâtissez l'argument à partir de votre propre historique : les ratios du coût et du bénéfice réels aux estimations, l'argent dépensé en initiatives abandonnées par la suite et le coût de la revue comparé aux dépassements qu'elle a évités. Évitez de citer des études de taux d'échec de projets à moins de pouvoir retracer la méthode et sa pertinence pour votre type de travail.

## Antimodèles et pièges

- **Un seul chiffre de ROI présenté comme un fait.** Il cache les hypothèses. Montrez des plages et de la sensibilité.
- **Omettre le coût d'exploitation.** La construction n'est qu'une fraction du coût sur la vie. Comptez toute la vie.
- **Compter les bénéfices intangibles comme tangibles.** Les coûts évités et les affirmations de productivité demandent des preuves. Étiquetez-les et éprouvez-les.
- **Prévoir seulement du bas vers le haut.** Cela répète l'optimisme. Comparez à votre propre historique.
- **Tout le financement d'emblée.** Il fige des devinettes. Financez par étapes avec des portes de preuves.
- **Continuer à cause de l'argent déjà dépensé.** Décidez sur ce qui reste à venir.
- **Corriger ses propres copies.** Faites revoir coûts et bénéfices par un lecteur indépendant.
- **Ne jamais revisiter le dossier.** Sans revues de résultats, rien ne s'améliore. Comparez les prévisions aux résultats.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Rédaction du dossier | Argumentaire informel avec un chiffre phare | Modèle avec coûts et bénéfices | Modèle standard avec liste de vérification du TCO, plages et sensibilité | Ajustement par l'historique appliqué ; revue indépendante | Dossiers conçus avec les responsables métier et la finance ; hypothèses partagées dans le portefeuille |
| Financement | Tout d'emblée | Jalons | Financement par étapes avec critères de preuve | Les portes remodèlent ou arrêtent couramment le travail sur preuves | Le financement du portefeuille se déplace entre initiatives selon les preuves |
| Apprentissage | Aucun suivi | Revue occasionnelle | Revue après mise en œuvre au regard du dossier | Exactitude des coûts et des bénéfices suivie en distributions et employée dans les nouveaux dossiers | Apprentissage partagé dans l'organisation et avec les partenaires ; la méthode s'améliore |

## Liste de vérification

- [ ] Le dossier liste des options, y compris ne rien faire.
- [ ] Le coût total de possession couvre la construction, l'exploitation, le soutien, la formation, le changement et la mise au rebut.
- [ ] Chaque bénéfice a un type, un indicateur, une ligne de base et un responsable.
- [ ] Les coûts et bénéfices sont donnés en plages avec leurs inducteurs énoncés.
- [ ] Une analyse de sensibilité montre quelles hypothèses comptent le plus.
- [ ] Les estimations sont comparées à votre propre historique d'initiatives semblables.
- [ ] Un relecteur indépendant a lu le dossier.
- [ ] Le financement est échelonné, avec des critères de preuve pour continuer, remodeler ou arrêter.
- [ ] Les résultats sont comparés au dossier à des dates convenues.
- [ ] L'exactitude des coûts et des bénéfices sur les initiatives passées est rapportée aux décideurs.

## Prompts d'IA

**Mettez un dossier d'affaires à l'épreuve.**

```text
Voici un résumé de notre dossier d'affaires pour [initiative] : coûts [list with
ranges], bénéfices [list with types and ranges], période [years], taux
d'actualisation [rate set by finance] et hypothèses [list]. Repérez les
catégories de coûts manquantes, les bénéfices qui demandent des preuves plus
solides, les hypothèses qui dominent le résultat et les risques d'optimisme.
Suggérez une analyse de sensibilité et une structure de financement par étapes.
N'inventez pas de chiffres. Énumérez vos hypothèses et les questions auxquelles
je devrais répondre.
```

**Bâtissez une classe de référence à partir de notre historique.**

```text
Nous avons ces initiatives passées avec coût et bénéfice prévus et réels :
[paste a table]. Calculez les ratios du réel au prévu, décrivez la médiane et la
dispersion, commentez tout schéma par type d'initiative et suggérez comment
employer cela pour estimer une nouvelle initiative. Avertissez-moi là où
l'échantillon est trop petit pour qu'on s'y fie. N'employez pas de repères
externes. Énumérez vos hypothèses.
```

**Concevez des portes d'étape.**

```text
Pour [initiative], proposez trois étapes de financement. Pour chacune, énoncez
l'hypothèse la plus risquée à éprouver, les preuves qui justifieraient de
passer à la suite, les preuves qui nous feraient remodeler le travail et les
preuves qui nous feraient arrêter. Gardez chaque étape petite et peu coûteuse.
Ne supposez aucune méthode de livraison particulière. Énumérez vos hypothèses et
les décisions qui demandent l'apport de la direction.
```

**Rédigez une revue après mise en œuvre.**

```text
Rédigez une revue après mise en œuvre d'une page pour [initiative]. Intrants :
le dossier d'origine [summary], le coût réel [figures], le bénéfice réalisé et
les preuves [summary] et ce qui a changé en cours de route [list]. Incluez les
ratios de coûts et de bénéfices, les raisons des différences, ce que nous
changerions dans le prochain dossier et des questions pour le responsable des
bénéfices. Gardez un ton factuel et sans reproche. Énumérez vos hypothèses et
toute affirmation à vérifier.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de dossier d'affaires ou de ROI.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique financière énonce sa période, ses hypothèses, son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Un dossier d'affaires est une prévision : montrez des plages, des hypothèses et de la sensibilité.
- Comptez le coût total de possession sur la vie du changement, et comparez avec ne rien faire.
- Corrigez l'optimisme à l'aide de votre propre historique de prévisions et de résultats.
- Financez par étapes, décidez sur ce qui reste à venir et traitez un arrêt fondé sur les preuves comme un succès.
- Comparez les résultats au dossier et rapportez l'exactitude aux décideurs.
- Employez le ROI, la VAN et le délai de récupération comme résumés avec des règles énoncées, non comme verdicts.

## Références et lectures complémentaires

1. HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, United Kingdom, latest edition.
2. Flyvbjerg, B., "From Nobel Prize to project management: Getting risks right," *Project Management Journal*, 37(3), 2006.
3. Kahneman, D., and Lovallo, D., "Timid choices and bold forecasts: A cognitive perspective on risk taking," *Management Science*, 39(1), 1993.
4. Brealey, R. A., Myers, S. C., and Allen, F., *Principles of Corporate Finance*, McGraw-Hill (latest edition).
5. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
6. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Business case](https://en.wikipedia.org/wiki/Business_case).
9. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
10. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
11. Wikipedia, [Optimism bias](https://en.wikipedia.org/wiki/Optimism_bias).
12. Wikipedia, [Reference class forecasting](https://en.wikipedia.org/wiki/Reference_class_forecasting).
13. Wikipedia, [Time value of money](https://en.wikipedia.org/wiki/Time_value_of_money).
14. Wikipedia, [Net present value](https://en.wikipedia.org/wiki/Net_present_value).
15. Wikipedia, [Payback period](https://en.wikipedia.org/wiki/Payback_period).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Sunk cost](https://en.wikipedia.org/wiki/Sunk_cost).
18. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
19. Wikipedia, [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis).
