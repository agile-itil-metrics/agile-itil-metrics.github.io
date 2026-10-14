# Coût du service et économie unitaire

**Savoir ce qu'un service coûte, et ce qu'il coûte par unité de quelque chose que les utilisateurs apprécient, permet à une équipe de faire des choix honnêtes sur la qualité, la vitesse et la dépense, à condition que les règles d'affectation soient équitables, visibles et jamais employées pour punir les personnes qui exploitent le service.**

## Résumé et motivation

Chaque service informatique coûte de l'argent : personnes, nuage et hébergement, licences, matériel, fournisseurs et part des plateformes partagées qu'il emploie. Les dirigeants demandent ce qu'un service coûte, s'il en vaut la peine et ce qui change si la demande double. Les équipes posent les mêmes questions de l'autre côté : que pouvons-nous nous permettre de faire, et à quoi renonçons-nous ? Sans chiffres, ces conversations tournent à la dispute sur le budget de qui est qui.

La [comptabilité analytique](https://en.wikipedia.org/wiki/Cost_accounting) est la pratique qui mesure, consigne et analyse les coûts. Pour une organisation de service, les tâches centrales sont d'attribuer les coûts aux services, de les exprimer par unité de quelque chose de significatif et de prévoir comment le coût change avec le volume. La pratique ITIL de gestion financière des services couvre le même terrain, et la pratique FinOps pour la dépense en nuage la prolonge (voir le sujet 7.6, Métriques FinOps et de coûts du nuage).

Les visions agile et ITIL du coût diffèrent, et la différence est utile.

- **La vision par projet** finance un effort temporaire avec un budget et une date de livraison. Le coût est ce que le projet a dépensé, et le succès est la livraison à temps et dans le budget. Le projet se termine, l'équipe se disperse, et le service qu'il a créé est remis à quelqu'un d'autre.
- **La vision par produit ou par service** finance une équipe pérenne pour construire et exploiter un service sur sa vie. Le coût est le coût stable de l'équipe et de ses plateformes, et la question est de savoir si la valeur livrée justifie cette dépense. Cela correspond aux buts agiles de livraison continue et de construction autour de personnes motivées qui connaissent le service. Cela correspond aussi au souci d'ITIL pour le coût d'un service tout au long de son cycle de vie.

Les mesures de coût peuvent induire en erreur aussi facilement qu'elles informent. Trois problèmes reviennent.

- **L'affectation est un choix.** Les coûts partagés, comme les réseaux, la sécurité et les plateformes, doivent être répartis entre les services selon une règle, et des règles différentes donnent des réponses différentes. L'[affectation des coûts](https://en.wikipedia.org/wiki/Cost_allocation) devrait suivre un [inducteur de coût](https://en.wikipedia.org/wiki/Cost_driver), un facteur qui fait varier le coût, comme les utilisateurs, les requêtes ou le stockage. La [méthode des coûts par activité](https://en.wikipedia.org/wiki/Activity-based_costing) formalise cela en rattachant les coûts aux activités qui consomment des ressources.
- **Les coûts fixes et variables se comportent différemment.** Un [coût fixe](https://en.wikipedia.org/wiki/Fixed_cost) reste le même quand le volume change dans une plage, et un [coût variable](https://en.wikipedia.org/wiki/Variable_cost) monte avec le volume. Le [coût unitaire](https://en.wikipedia.org/wiki/Unit_cost) d'un service baisse quand le volume croît si les coûts fixes dominent, un schéma lié aux [économies d'échelle](https://en.wikipedia.org/wiki/Economies_of_scale). Regarder le coût unitaire sans savoir quels coûts sont fixes mène à de mauvaises prévisions.
- **Le coût n'est pas la valeur.** Le service le moins cher n'est pas le meilleur. Le coût par ticket baisse si vous clôturez des tickets sans résoudre les problèmes. Les mesures de coût ont besoin d'une compagne de qualité ou de résultat, que les parties précédentes de ce livre fournissent (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

Les classifications comptables comptent aussi. Les [dépenses d'investissement](https://en.wikipedia.org/wiki/Capital_expenditure) achètent des actifs durables, et les charges d'exploitation couvrent le fonctionnement quotidien. Les services de nuage et d'abonnement déplacent la dépense de la première sorte vers la seconde, ce qui change l'aspect des budgets sans changer ce que coûtent les services. Les collègues de la finance détiennent ces règles, et les métriques ici devraient être bâties avec eux.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique fortement à l'argent. Un objectif de coût tend à produire des réductions là où il est le plus facile de cacher les dégâts, comme l'entretien, la qualité et le temps d'apprentissage. Les mesures ci-dessous sont donc associées à des indicateurs de santé du service et à un énoncé des règles d'affectation (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Rendre explicites les règles d'affectation et les lier à des inducteurs.** Les gens acceptent les chiffres qu'ils peuvent suivre.
- **Séparer le coût fixe du coût variable.** Les prévisions dépendent de ce qui est quoi.
- **Rapporter le coût unitaire avec sa compagne de qualité.** Moins cher n'est mieux que si le service reste bon.
- **Employer des plages et des tendances, non une fausse précision.** L'affectation comporte du jugement.
- **Financer des équipes pérennes autour des services là où c'est possible.** Les équipes stables apprennent et s'améliorent ; les temporaires se dissolvent.
- **Partager les coûts avec les personnes qui peuvent les changer.** La visibilité sans influence n'est que du blâme.
- **Ne jamais classer des personnes ou des équipes par coût.** Les services diffèrent, et leurs contraintes aussi.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Coût par service | Coût annuel complet d'un service nommé, selon des règles d'affectation documentées | coûts directs + coûts partagés affectés au service dans la période | monnaie par an | Grand livre, données de centres de coûts, factures de nuage et de licences, données de temps ou d'activité | Gestion financière des services ; gestion du catalogue de services | Coût d'une équipe produit pérenne et de ses plateformes | Trimestrielle |
| Coût unitaire | Coût par unité de quelque chose que les utilisateurs apprécient, comme par utilisateur actif, par transaction ou par demande résolue | coût par service dans la période / unités livrées dans la période | monnaie par unité | Coût par service et données de volume | Gestion financière des services ; gestion des niveaux de service | Coût de service par résultat | Trimestrielle |
| Couverture de l'affectation | Part de la dépense informatique attribuée à un service nommé ou déclarée comme frais généraux partagés | dépense attribuée aux services ou déclarée en frais généraux / dépense informatique totale | pourcentage | Grand livre et modèle d'affectation | Gestion financière des services | Coût visible du travail de chaque équipe | Trimestrielle |
| Répartition entre exploitation, changement et amélioration | Part de la dépense ou de la capacité allant à l'exploitation des services, à leur changement et à leur amélioration | dépense ou capacité de chaque catégorie / total | pourcentage | Étiquettes du grand livre, types de travail du suivi du travail | Gestion financière des services ; amélioration continue | Allocation de capacité par type de travail | Trimestrielle |
| Écart de prévision | Différence entre le coût prévu et le coût réel, par service | (réel moins prévu) / prévu | pourcentage | Journal des prévisions et grand livre | Gestion financière des services | Exactitude des prévisions | Mensuelle |
| Taux de contestation de la rétrofacturation informative | Part des lignes de rétrofacturation informative ou de refacturation que les responsables de services ont contestées et qui ont été modifiées | lignes modifiées après contestation / lignes émises | pourcentage | Système de rétrofacturation informative et journal des contestations | Gestion financière des services | Rétrospective sur les coûts partagés | Trimestrielle |
| Part de financement des équipes pérennes | Part de la dépense de livraison et d'exploitation financée comme capacité d'équipe stable pour un service | dépense sur les équipes de service pérennes / dépense totale de livraison et d'exploitation | pourcentage | Grand livre et organigramme | Gestion financière des services ; changement organisationnel | Équipes bâties autour des services et de personnes motivées | Annuelle |

Définissez la période, la monnaie et les types de coûts de chaque mesure, et consignez dans le registre des métriques les règles d'affectation : quels coûts sont directs, lesquels sont partagés et quel inducteur répartit chaque coût partagé. Le coût unitaire a besoin d'une unité que les utilisateurs et l'équipe acceptent tous deux, et la définition de l'unité reste fixe sur la tendance. L'écart de prévision se compare à la prévision telle qu'elle était au début de la période, non à une prévision révisée.

## Recommandations

### Bâtir le tableau des coûts

**1. Commencez par le grand livre et la liste des services.** Prenez la dépense informatique totale du grand livre, listez les services du catalogue et décidez quelle part de chaque coût appartient à quel service. Commencez par les coûts directs faciles : l'équipe qui exploite le service, ses licences, son hébergement. Les coûts partagés viennent en second. Un premier tableau approximatif, partagé avec les personnes concernées, vaut mieux qu'un tableau précis bâti en privé.

**2. Choisissez des inducteurs de coût que les gens peuvent suivre.** Pour chaque coût partagé, choisissez un inducteur lié à ce qui le cause réellement : les utilisateurs pour une plateforme de collaboration, le stockage pour une plateforme de données, les requêtes pour une passerelle, les appareils pour la gestion des postes de travail. Expliquez la règle en une phrase. Des inducteurs que personne ne peut vérifier invitent aux disputes, et des inducteurs que personne ne peut influencer rendent la rétrofacturation informative sans objet.

**3. Séparez le coût fixe du coût variable.** Pour chaque service, marquez quels coûts bougent avec le volume et lesquels non. Un service qui est surtout un coût fixe a un coût unitaire qui baisse avec la croissance, et un service surtout variable n'en a pas. Cette répartition est la base de toute prévision et de toute conversation sur le passage à l'échelle.

**4. Montrez des plages là où l'affectation comporte du jugement.** Si deux règles d'affectation raisonnables donnent des résultats différents de 20 pour cent, montrez les deux ou montrez la plage. Un seul nombre précis tiré d'une règle arbitraire déclenche des querelles que les données ne peuvent pas régler.

### Mesurer par unité, avec la qualité à côté

**5. Choisissez une unité qui reflète la valeur.** Le coût par utilisateur actif, par transaction accomplie, par demande résolue ou par déploiement peut tous être utile. Choisissez l'unité qui se rattache à la raison d'être du service, convenez-en avec le responsable du service et gardez-la stable. Le coût par ticket est une unité risquée, car il baisse quand les tickets sont clos tôt et monte quand vous évitez des tickets par un bon libre-service.

**6. Associez chaque coût unitaire à une mesure de qualité.** Montrez le coût unitaire à côté de la disponibilité, de la satisfaction ou du taux de réouverture. Un coût unitaire qui baisse pendant que la qualité baisse est un transfert de coût aux utilisateurs. Un coût unitaire qui reste stable pendant que la qualité monte est un gain. Présentez-les ensemble ou pas du tout (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

**7. Suivez la tendance, pas seulement le niveau.** Le coût unitaire dans le temps, avec des notes sur ce qui a changé, raconte une histoire qu'un seul trimestre ne peut pas raconter. Marquez sur le graphique les changements de règles d'affectation ou d'unités pour que les tendances ne soient pas mal lues. Comparez un service avec son propre historique avant de le comparer avec d'autres.

### Partager le coût avec les personnes qui peuvent le changer

**8. Employez la rétrofacturation informative avant la refacturation.** La rétrofacturation informative (showback) rapporte les coûts aux responsables de services sans les leur facturer, et la refacturation (chargeback) transfère le coût sur leurs budgets. Commencez par la rétrofacturation informative, qui bâtit la compréhension et la confiance, et ne passez à la refacturation que là où elle change les décisions et où les règles sont acceptées. Les deux dépendent de règles que les responsables aident à façonner.

**9. Laissez les responsables contester les chiffres.** Un processus de contestation est un signe de santé, tant qu'il est rapide et que ses résultats sont consignés. Passez en revue le taux de contestation : un taux élevé montre des règles auxquelles personne ne fait confiance, et zéro peut montrer que personne ne lit les rapports. Corrigez la règle, pas seulement la ligne.

**10. Passez le coût en revue avec toute l'équipe de service.** Incluez les ingénieurs et les exploitants autant que les responsables dans une revue régulière des coûts. Les personnes qui exploitent un service savent souvent où le gaspillage se cache : environnements inactifs, ressources surdimensionnées, outils en double. Traitez leurs constats comme des améliorations à partager et non comme des critiques.

### Financer la stabilité et l'apprentissage

**11. Préférez des équipes pérennes financées autour des services.** Là où c'est possible, financez une équipe stable pour détenir un service dans la durée, au lieu de monter une équipe de projet et de la dissoudre. Les équipes pérennes accumulent de la connaissance, bâtissent de meilleures relations avec les utilisateurs et portent le coût des mauvaises décisions. Cela reflète le but agile de bâtir autour d'individus motivés et le souci d'ITIL pour le cycle de vie du service. Le changement de financement est une décision organisationnelle importante ; associez tôt la finance et la direction. Le livre *Project to Product* de Mik Kersten traite de ce déplacement.

**12. Réservez de la capacité à l'amélioration.** Les coûts qui réduisent les coûts futurs, comme l'automatisation, les corrections de fiabilité et la suppression d'outils en double, ont besoin d'un financement protégé sinon ils perdent à chaque fois face au travail sur les fonctions. Suivez la part d'amélioration dans la répartition entre exploitation, changement et amélioration, et regardez les retours qu'elle produit (voir le sujet 4.6, Dette technique et erreurs connues).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Coût par service | Déplacer des coûts vers d'autres services par la règle d'affectation ; laisser non affectés les coûts défavorables | Couverture de l'affectation ; règles publiées et revues par les responsables ; comparer les totaux avec le grand livre |
| Coût unitaire | Gonfler le dénominateur avec des unités de faible valeur ; couper la qualité pour couper le coût ; changer l'unité | Mesure de qualité associée ; définition d'unité fixe ; contrôles de résultat |
| Couverture de l'affectation | Déclarer de grands montants en frais généraux partagés pour éviter l'attribution | Part de frais généraux rapportée ; revue de ce qui est déclaré frais généraux et pourquoi |
| Répartition entre exploitation, changement et amélioration | Requalifier du travail d'exploitation en amélioration ou en changement ; étiqueter en fin de période | Étiqueter à l'accueil ; échantillonner les éléments pour leur type ; comparer avec les données d'incidents et de demandes |
| Écart de prévision | Gonfler les prévisions ; réviser la prévision tard dans la période | Prévision consignée au début ; comparer les plages de prévision avec les valeurs réelles dans le temps |
| Taux de contestation de la rétrofacturation informative | Décourager les contestations ; modifier des lignes sans changement de règle | Revoir les contestations et leurs résultats ; vérifier si les règles ont changé après des contestations répétées |
| Part de financement des équipes pérennes | Rebaptiser des projets en équipes pérennes sans changer le financement ou la responsabilité | Vérifier la stabilité des équipes et la responsabilité dans le temps ; mesures de santé du service |

Une lecture saine est un tableau des coûts que les responsables de services reconnaissent, des coûts unitaires qui bougent pour des causes expliquées pendant que la qualité tient, des erreurs de prévision qui diminuent et un travail d'amélioration qui apparaît dans les chiffres.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Financement par projet | Périmètre et fin clairs | Les équipes se dissolvent ; connaissance perdue ; service remis à d'autres |
| Financement d'équipes pérennes | Apprentissage, responsabilité, coût stable | Exige confiance et un processus de planification mûr ; le périmètre peut dériver |
| Rétrofacturation informative | Bâtit la compréhension avec peu de friction | Peut être ignorée si personne n'est redevable |
| Refacturation | Crée redevabilité et signaux de prix | Contestations ; incitations à éviter les services partagés |
| Règles d'affectation simples | Faciles à expliquer | Peuvent être grossières |
| Affectation par activité | Plus exacte | Coûteuse à entretenir ; fausse précision |
| Coût par unité | Relie le coût à la valeur | Sensible au choix de l'unité et au volume |
| Coût total seulement | Simple | Cache les tendances et l'efficience |

La réponse en prose est de commencer par des règles simples et la rétrofacturation informative, d'ajouter de la précision là où les décisions en dépendent et d'aller vers le financement d'équipes pérennes à mesure que croissent la confiance et la maturité de planification. Gardez une mesure de qualité à côté de chaque mesure de coût.

## Questions à discuter avec votre équipe

**1. Que coûte notre principal service par an, et qui serait d'accord avec le chiffre ?**
Demandez à la finance et au responsable du service de produire des estimations indépendantes. Comparez-les. L'animateur doit noter où elles diffèrent et pourquoi : règles d'affectation, périmètre ou coûts manquants. Convenez d'une seule règle documentée pour le trimestre suivant.

**2. Quelle est l'unité que nos utilisateurs reconnaîtraient, et que coûte-t-elle ?**
Listez les unités possibles pour le service et choisissez-en une. Calculez son coût et discutez de ce qui la ferait monter ou baisser. Demandez ce que l'unité cache. Ajoutez une mesure de qualité à côté.

**3. Lesquels de nos coûts partagés sont répartis par une règle que personne ne peut expliquer ?**
Listez les coûts partagés et leurs inducteurs. Pour chacun, demandez si l'inducteur se rattache à ce qui cause le coût. Remplacez-en un qui ne le fait pas. Discutez de qui peut influencer l'inducteur, car des données de coût sans influence ne sont que du blâme.

**4. Quelle part de notre capacité va à l'exploitation, au changement et à l'amélioration du service ?**
Passez en revue un trimestre de travail terminé par type, comme dans le sujet de planification (voir le sujet 2.5, Métriques de prévision et de planification de la livraison). Comparez avec ce que pensent les dirigeants. Décidez de ce que devrait être la part d'amélioration, et de ce qui la protégerait.

**5. Qu'est-ce qui changerait si nous financions une équipe pérenne pour ce service ?**
Imaginez le financement, la responsabilité et les mesures. Demandez quels risques et bénéfices la finance, l'équipe et les utilisateurs verraient. Identifiez une étape dans cette direction, comme une liste d'équipe stable et une vue budgétaire partagée du service.

**6. Quand un chiffre de coût a-t-il causé une dispute pour la dernière fois, et qu'avons-nous appris ?**
Rappelez-vous une contestation de rétrofacturation informative ou de budget. Portait-elle sur le chiffre ou sur la règle ? Discutez de la façon dont une règle plus claire ou un meilleur processus de contestation aurait aidé.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison voient le coût comme le prix de leur temps, de leurs plateformes et de leurs outils. Elles devraient connaître le coût et le coût unitaire de leur service, repérer tôt le gaspillage et employer les chiffres pour plaider en faveur du travail d'amélioration et d'un financement stable. Elles devraient éviter d'optimiser le chiffre en coupant la qualité, et contester les règles d'affectation qu'elles ne peuvent pas suivre.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent le coût d'exploitation des services et détiennent souvent les plateformes partagées. Elles devraient publier la manière dont les coûts partagés sont pilotés, répondre aux questions de rétrofacturation informative et partager des idées d'économies issues de l'expérience. Elles devraient s'attendre à une pression pour couper les coûts d'exploitation, et elles devraient montrer le côté qualité et risque de toute coupe.

### Direction et gouvernance

Les dirigeants posent des questions sur le coût et la valeur et fixent le modèle de financement. Ils devraient demander des coûts unitaires avec des compagnes de qualité, soutenir le financement d'équipes pérennes là où il convient et éviter de classer les équipes par coût. La gouvernance devrait attendre que les règles d'affectation soient documentées, revues et appliquées de façon cohérente, et regarder la part d'amélioration.

### Clients et utilisateurs

Les utilisateurs qui paient par refacturation veulent comprendre la facture et l'influencer. Les autres voient le coût dans la qualité et l'étendue des services offerts. Des coûts unitaires clairs et une voix dans l'arbitrage entre prix et service rendent la relation plus saine, et leurs retours font partie de la compagne de qualité de chaque coût unitaire.

## En pratique : un exemple d'ITIL agile

Le service informatique central d'une université de taille moyenne fournit environ 25 services à 18 000 étudiants et employés. Les chiffres ci-dessous sont illustratifs.

Le bureau des finances veut savoir pourquoi le budget informatique a crû plus vite que les inscriptions. Le partenaire financier de l'informatique bâtit un tableau des coûts avec les responsables de services. Sur la dépense informatique totale, 72 pour cent sont directs vers des services nommés, 18 pour cent sont des plateformes partagées (réseau, identité, outillage de sécurité) affectées par des inducteurs, et 10 pour cent sont déclarés en frais généraux. La couverture de l'affectation est donc de 90 pour cent. La plateforme d'apprentissage coûte l'équivalent de 41 dollars américains par utilisateur actif et par an, contre 36 auparavant, alors que la satisfaction et la disponibilité sont stables. Le centre de services montre un coût par demande résolue qui a baissé de 12 pour cent en deux ans. Le responsable du service fait remarquer que la baisse a coïncidé avec une hausse des tickets rouverts de 4 à 9 pour cent, et la compagne de qualité montre que l'économie est en partie un transfert d'effort aux utilisateurs.

L'équipe fait quatre changements. Elle publie les règles d'affectation sur une page, avec les inducteurs de chaque coût partagé et la date de la dernière revue. Elle remplace le coût par demande par le coût par demande résolue au premier contact, montré à côté du taux de réouverture. Elle fait passer la plateforme d'apprentissage et le service d'identité à un financement d'équipes pérennes avec une liste stable de membres. Elle réserve 15 pour cent de la capacité au travail d'amélioration pour chacun des deux plus grands services, et suit ce que ce travail rapporte.

Un an plus tard, le coût unitaire de la plateforme d'apprentissage est de 38 dollars américains à mesure que l'usage a crû, le taux de réouverture est tombé à 5 pour cent et l'écart de prévision des deux services à équipe pérenne est inférieur à 4 pour cent, contre 11 pour cent pour le travail financé par projet. Le taux de contestation de la rétrofacturation informative est passé de 22 à 8 pour cent après le changement de deux règles. Le bureau des finances demande un objectif annuel de réduction de 5 pour cent du coût unitaire pour chaque service. Le partenaire financier de l'informatique propose des objectifs uniquement là où un service a un levier d'efficience clair, montré avec la compagne de qualité, et explique qu'un objectif général récompenserait la réduction de l'entretien. La décision est consignée, avec une revue des règles chaque année.

## Perspective sectorielle

**Startup.** Le coût est surtout le nuage, les outils et les salaires. Suivez dès le début la principale dépense de nuage et d'outils par service, étiquetez les ressources et calculez tôt le coût par client actif. Résistez à une affectation élaborée, car l'équipe est petite.

**Petite entreprise.** Une poignée de fournisseurs et une ou deux personnes constituent l'essentiel des coûts. Gardez un simple tableau annuel, le coût par utilisateur des principaux outils et une vue de ce qui est payé et inutilisé. Demandez aux fournisseurs des factures détaillées.

**Grande entreprise.** L'échelle apporte des plateformes partagées et de nombreuses unités d'affaires. Employez un modèle d'affectation documenté avec des inducteurs, un processus de contestation et un partenaire financier intégré à l'informatique. Méfiez-vous d'une refacturation qui décourage l'usage de services partagés profitant à tous.

**Gouvernement et secteur public.** Les budgets sont annuels et votés, avec des règles sur les dépenses d'investissement et d'exploitation, et la transparence des coûts peut être exigée. Alignez le calcul des coûts de service sur les règles de finances publiques, documentez les méthodes d'affectation pour l'audit et envisagez un financement pluriannuel pour les équipes de service pérennes là où la loi le permet. Rapportez les coûts unitaires avec des mesures de résultat (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort de bâtir le modèle d'affectation, le temps de la finance et des responsables de services pour convenir des règles, et le travail courant de rapport mensuel et de traitement des contestations. La plupart des organisations ont déjà le grand livre et les données de facturation du nuage. Un petit modèle dans un tableur peut lancer le travail, et l'outillage vient plus tard.

Les retours sont de meilleures décisions et moins de disputes. Les équipes qui voient leurs coûts trouvent du gaspillage : environnements inactifs, licences inutilisées et outils en double. Les dirigeants peuvent comparer des options en connaissant les inducteurs de coût, planifier la croissance avec les coûts fixes et variables séparés et financer l'amélioration avec la preuve de son retour. Bâtissez le dossier à partir de vos propres chiffres : le gaspillage trouvé lors de la première revue, le temps passé en disputes budgétaires et l'écart de prévision avant et après. Évitez les affirmations externes sur la dépense informatique moyenne en pourcentage du chiffre d'affaires à moins de pouvoir retracer la source et la méthode, car les définitions varient largement. Le dernier sujet de cette partie rassemble en un seul endroit le dossier financier (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Répartir également le coût partagé.** Cela punit les petits utilisateurs et cache les vrais inducteurs. Employez des inducteurs qui reflètent la consommation.
- **Le coût par ticket comme objectif.** Il récompense la clôture précoce des tickets. Employez le coût par demande résolue avec une compagne de qualité.
- **La précision sans confiance.** Un beau modèle auquel les responsables ne croient pas ne vaut rien. Bâtissez les règles avec eux.
- **La refacturation d'abord.** Elle déclenche des querelles avant qu'il y ait compréhension. Commencez par la rétrofacturation informative.
- **Couper ce qui est difficile à voir.** L'entretien, l'apprentissage et le travail de fiabilité sont coupés en premier et coûtent plus cher plus tard. Protégez la capacité d'amélioration.
- **Comparer les équipes par coût.** Les services diffèrent par leurs contraintes et leurs risques. Comparez chacun à son propre historique.
- **Changer les règles et la tendance en même temps.** Marquez les changements de règles sur les graphiques et rétablissez l'historique là où c'est possible.
- **Traiter le coût comme appartenant à la finance.** Les personnes qui exploitent le service savent d'où vient le coût. Incluez-les.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Tableau des coûts | Budget par département seulement | Coût par service pour quelques services, affectation approximative | Règles d'affectation documentées avec inducteurs ; couverture suivie | Coûts unitaires avec compagnes de qualité ; répartition fixe et variable | Coûts partagés de façon transparente avec les partenaires métier ; inducteurs influencés conjointement |
| Usage du coût | Réductions de coûts en pourcentage | Rétrofacturation informative à certains responsables | Rétrofacturation informative pour tous les services ; processus de contestation | L'écart de prévision et les tendances de coût unitaire pilotent les décisions | Coût, qualité et valeur arbitrés ouvertement dans tout le portefeuille |
| Modèle de financement | Budgets de projets annuels | Quelques équipes stables | Équipes pérennes pour les services clés | Le financement suit les résultats des services et l'apprentissage | Financement souple entre services avec investissement de plateforme partagé |

## Liste de vérification

- [ ] La dépense informatique totale est attribuée aux services ou déclarée en frais généraux, la couverture étant suivie.
- [ ] Les règles d'affectation et les inducteurs sont écrits et revus avec les responsables de services.
- [ ] Les coûts fixes et variables sont séparés pour chaque service important.
- [ ] Les coûts unitaires emploient des unités convenues et stables et se tiennent à côté de mesures de qualité.
- [ ] Les prévisions sont consignées au début de la période et comparées aux valeurs réelles.
- [ ] La rétrofacturation informative est disponible pour chaque responsable de service, avec un processus de contestation.
- [ ] La dépense ou la capacité d'exploitation, de changement et d'amélioration est rapportée.
- [ ] Une part de la capacité est protégée pour l'amélioration.
- [ ] Les changements de règles et d'unités sont marqués sur les graphiques de tendance.
- [ ] Aucune équipe ni personne n'est classée selon le coût.

## Prompts d'IA

**Proposez des inducteurs de coût pour les services partagés.**

```text
Nos services partagés et leurs coûts annuels sont : [list]. Nos services qui les
emploient sont : [list], avec des données d'usage disponibles pour : [list of
drivers like users, requests, storage]. Proposez un inducteur de coût pour
chaque service partagé, expliquez comment vérifier que l'inducteur reflète ce
qui cause le coût et décrivez les limites. N'inventez pas de coûts. Énumérez vos
hypothèses et ce que la finance devrait confirmer.
```

**Concevez un coût unitaire et sa compagne de qualité.**

```text
Pour le service [name] dans [type of organization], suggérez trois unités
possibles pour le coût unitaire (par exemple par utilisateur actif, par
transaction, par demande résolue) et, pour chacune, une mesure de qualité à
montrer à côté et une façon dont la paire pourrait être détournée. Recommandez-en
une avec les raisons. N'inventez pas de chiffres. Énumérez vos hypothèses et vos
questions pour le responsable du service.
```

**Préparez une revue de rétrofacturation informative.**

```text
Rédigez un ordre du jour et un résumé d'une page pour une revue trimestrielle de
rétrofacturation informative avec le responsable de [service]. Données : coût de
ce trimestre [figures], trimestre précédent [figures], volume [figures], mesures
de qualité [figures] et contestations [list]. Incluez des questions qui aident le
responsable à trouver du gaspillage et à contester l'affectation. Employez un
langage clair. Énumérez vos hypothèses et marquez toute affirmation qui demande
vérification.
```

**Planifiez le passage au financement d'équipes pérennes.**

```text
Nous finançons actuellement le travail par projets : [describe]. Nous envisageons
de financer des équipes pérennes pour [services]. Décrivez les étapes,
l'information que la finance et la direction voudront, les risques et les
mesures à suivre pour savoir si le changement aide (par exemple écart de
prévision, stabilité des équipes, part d'amélioration et santé du service).
N'affirmez pas de résultats d'autres organisations. Énumérez vos hypothèses et
les décisions qui demandent un apport de la direction.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de coût ou d'économie unitaire.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de coût énonce sa règle d'affectation, son vecteur de détournement et sa compagne de qualité.

## Points clés à retenir

- Attribuez le coût aux services avec des inducteurs que les gens peuvent suivre, et montrez les règles.
- Séparez le coût fixe du coût variable, et associez chaque coût unitaire à une mesure de qualité.
- Commencez par la rétrofacturation informative et un processus de contestation, et n'ajoutez la refacturation que si elle change les décisions.
- Financez des équipes pérennes autour des services là où vous le pouvez, et protégez la capacité d'amélioration.
- Rapportez des plages et des tendances, et marquez sur les graphiques les changements de règles.
- Ne classez jamais des personnes ou des équipes par coût.

## Références et lectures complémentaires

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
