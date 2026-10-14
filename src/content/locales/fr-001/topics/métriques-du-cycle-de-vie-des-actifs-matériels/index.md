# Métriques du cycle de vie des actifs matériels

**Les appareils sont les outils quotidiens de personnes motivées et un flux de coûts, de risques et de déchets ; planifiez donc le renouvellement comme un flux régulier plutôt que comme un à-coup périodique, mesurez l'âge et les pannes à partir de vos propres données, et traitez la mise au rebut sécurisée et le réemploi comme une partie du travail.**

## Résumé et motivation

Derrière chaque service se trouvent des choses physiques : ordinateurs portables, téléphones, serveurs, équipements réseau, imprimantes, et les câbles et les baies qui les tiennent ensemble. Le matériel a un cycle de vie que le logiciel n'a pas. Il est acheté, expédié, préparé, distribué, réparé, déplacé, retiré, effacé et recyclé, et chaque étape a un coût et un risque. Un ordinateur portable qui tombe en panne pendant un appel client coûte plus que l'ordinateur portable. Un serveur retiré qui quitte le bâtiment avec des données sur ses disques coûte bien plus que sa valeur de revente. Un tiroir de téléphones inutilisés est du capital qui ne fait rien.

L'objectif agile de bâtir les projets autour d'individus motivés, avec l'environnement et le soutien dont ils ont besoin, s'applique directement. Les gens ne peuvent pas faire leur meilleur travail sur un appareil lent, défaillant ou manquant. La tradition ITIL apporte la vue du cycle de vie et les enregistrements qui l'accompagnent, couverts dans le sujet précédent sur la gestion des actifs informatiques (voir le sujet 7.1, Métriques de gestion des actifs informatiques). Ce sujet ajoute les mesures propres à l'équipement physique : quel âge il a, à quelle fréquence il tombe en panne, dans quelle mesure il est employé et comment il part.

La planification du matériel se fait souvent en grands cycles : tout remplacer tous les quelques ans, en un seul gros achat, puis vivre avec les conséquences. Une alternative plus régulière, dans l'esprit de la livraison continue, est de renouveler en continu une fraction du parc. Cela lisse la dépense, répartit la charge de préparation et de remise et permet d'apprendre de chaque lot avant d'acheter le suivant. Cela signifie aussi que vous avez besoin de données d'âge et de pannes pour décider quand chaque appareil doit partir.

Trois idées organisent les mesures.

- **Âge et pannes.** Le [taux de défaillance](https://en.wikipedia.org/wiki/Failure_rate) d'une population d'appareils change au cours de sa vie, et le [temps moyen entre pannes](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) est un résumé courant pour les éléments réparables. Les moyennes cachent beaucoup : un lot avec un composant défectueux peut tomber en panne tôt alors que le reste va bien. Regardez les pannes par modèle, par lot et par tranche d'âge, et employez votre propre historique, non les chiffres des fabricants, pour planifier.
- **Utilisation.** Un appareil que personne n'emploie est un gaspillage, et un appareil surchargé est une source de friction. Mesurez si l'équipement est employé et s'il convient au travail.
- **Sortie responsable.** Un équipement retiré peut contenir des données sensibles, des matériaux précieux et dangereux, et ajouter aux déchets électroniques. Les [déchets électroniques](https://en.wikipedia.org/wiki/Electronic_waste) sont une préoccupation environnementale croissante, et de nombreuses juridictions réglementent la manière dont ils doivent être traités. L'[effacement sécurisé des données](https://en.wikipedia.org/wiki/Data_erasure) et le réemploi ou le recyclage certifiés sont la fin du cycle de vie, non une réflexion après coup. Une approche d'[économie circulaire](https://en.wikipedia.org/wiki/Circular_economy) garde les produits et les matériaux en usage aussi longtemps que possible.

Les métriques de matériel sont exposées à une distorsion familière. Une équipe récompensée pour un âge moyen d'appareil bas peut renouveler des appareils qui vont bien. Une équipe récompensée pour une dépense basse peut étirer les durées de vie jusqu'à ce que les pannes perturbent les gens. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique ; chaque mesure est donc associée à un contrôle que les gens et la planète s'en trouvent mieux, et pas seulement le chiffre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Planifier un flux régulier.** Renouvelez une part du parc à chaque période, et apprenez de chaque lot.
- **Décider sur preuves.** Employez vos propres données de pannes, d'âge et d'usage pour choisir quand remplacer.
- **Regarder la distribution.** Les moyennes cachent la queue des appareils vieux, défaillants et inactifs.
- **Compter le coût total.** Le prix d'achat est une part du coût d'un appareil sur sa vie (voir le sujet 7.5, Coût du service et économie unitaire).
- **Protéger les données jusqu'au bout.** Un appareil n'est pas retiré tant que ses données ne sont pas effacées et que la preuve n'est pas consignée.
- **Préférer le réemploi et la réparation.** Gardez l'équipement en service tant qu'il sert bien les gens.
- **Traiter l'équipement comme une partie de l'environnement de travail.** Les gens ont besoin d'appareils qui fonctionnent.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Profil d'âge | Distribution de l'âge des appareils par classe, et part au-delà de la durée de vie planifiée | âge médian et âge au 85e percentile ; part des appareils plus vieux que la durée de vie planifiée de la classe | années ; pourcentage | Dates d'achat et de déploiement du registre des actifs | Gestion des actifs informatiques ; gestion de la capacité et de la performance | Revue de santé technique | Trimestrielle |
| Taux de renouvellement dans les délais | Part des appareils arrivés au remplacement planifié qui ont été remplacés dans la fenêtre planifiée | appareils remplacés dans la fenêtre / appareils arrivés au remplacement planifié dans la période | pourcentage | Registre des actifs et plan de renouvellement | Gestion des actifs informatiques ; gestion des demandes de service | Entretien planifié de l'environnement de travail | Trimestrielle |
| Taux de pannes par modèle | Pannes pour 100 appareils par an, par modèle et par tranche d'âge | pannes matérielles dans la période / appareils moyens en service, ramenés à l'année, fois 100 | pannes pour 100 par an | Enregistrements d'incidents et de réparations joints au registre | Gestion des incidents ; gestion des actifs informatiques | Défauts de l'environnement de travail | Trimestrielle |
| Part d'appareils inactifs | Part des appareils délivrés sans activité dans une période fixée | appareils sans connexion ni activité réseau en 60 jours / appareils délivrés | pourcentage | Journaux de gestion des postes de travail, agrégés par classe | Gestion des actifs informatiques ; gestion financière | Réduction du gaspillage | Mensuelle |
| Délai de remplacement | Temps pour remplacer un appareil défaillant ou perdu par un appareil fonctionnel | médiane et 85e percentile des heures ou jours entre le signalement et le moment où l'utilisateur a un appareil fonctionnel | jours | Enregistrements d'incidents et de demandes | Gestion des incidents ; gestion des demandes de service | Temps pour débloquer un membre de l'équipe | Mensuelle |
| Achèvement de la mise au rebut sécurisée | Part des appareils retirés ayant une preuve consignée d'effacement ou de destruction des données | appareils retirés avec preuve d'effacement ou de destruction / appareils retirés | pourcentage | Enregistrements de mise au rebut et certificats d'effacement | Gestion de la sécurité de l'information ; gestion des actifs informatiques | Définition de terminé pour retirer de l'équipement | Mensuelle |
| Taux de réemploi et de recyclage | Part des appareils retirés qui ont été réemployés, remis à neuf ou recyclés par un canal approuvé | appareils réemployés, remis à neuf ou recyclés par un canal approuvé / appareils retirés | pourcentage | Enregistrements de mise au rebut et de partenaires | Gestion des actifs informatiques ; gestion des fournisseurs | Objectif de durabilité dans la planification | Trimestrielle |

Définissez les classes d'appareils (par exemple ordinateur portable standard, poste de travail de développeur, téléphone mobile, serveur, commutateur réseau), chacune avec sa propre durée de vie planifiée. Le taux de pannes ne compte que les défauts matériels, et exclut les défauts logiciels, les dommages causés par l'utilisateur codés séparément et la perte. L'horloge du délai de remplacement démarre au signalement et s'arrête quand l'utilisateur confirme un appareil fonctionnel, non quand un appareil est expédié. La part d'appareils inactifs exclut les appareils intentionnellement de réserve, qui sont comptés comme une classe séparée.

## Recommandations

### Planifier le flux

**1. Fixez une durée de vie planifiée pour chaque classe, et traitez-la comme une hypothèse.** Partez de la garantie du fournisseur et de votre propre expérience, et révisez à mesure que les données arrivent. Une durée de vie planifiée de quelques années pour les ordinateurs portables, plus longue pour les équipements réseau et plus courte pour les appareils très employés est typique, mais le bon chiffre pour votre parc vient de vos propres données de pannes et d'usage. Écrivez la justification dans le registre.

**2. Renouvelez en continu par petits lots.** Remplacez chaque mois ou chaque trimestre une part régulière d'appareils, ordonnés selon l'âge, l'historique de pannes et le besoin. De petits lots lissent le coût, répartissent le travail de préparation et de remise et permettent de tester un nouveau modèle avec quelques utilisateurs avant de s'engager. Un seul grand renouvellement tous les quelques ans concentre le risque et l'effort.

**3. Gardez une modeste réserve de pièces de rechange.** Un petit bassin d'appareils prêts raccourcit le délai de remplacement pour les pannes, les pertes et les nouveaux arrivants. Dimensionnez la réserve à partir de votre propre historique de pannes et d'embauches, et revoyez-la chaque trimestre. Comptez les appareils de réserve comme leur propre classe afin qu'ils ne faussent pas l'utilisation.

**4. Planifiez avec la finance, pas contre elle.** Convenez de la façon dont les appareils sont inscrits à l'actif et amortis, et de la manière dont un renouvellement régulier apparaît au budget. Les règles d'[amortissement](https://en.wikipedia.org/wiki/Depreciation) influencent le moment où un remplacement est le moins cher sur le papier, et elles ne devraient pas pousser à remplacer des appareils qui servent encore bien les gens. Gardez une vue partagée du plan et de ses hypothèses.

### Apprendre de vos propres données

**5. Étudiez les pannes par modèle, par lot et par âge.** Joignez les enregistrements de réparations et d'incidents au registre et regardez les pannes pour 100 appareils par an par modèle et par tranche d'âge. Cherchez les lots qui tombent en panne tôt, les modèles qui tombent en panne d'une manière particulière et l'âge auquel les pannes commencent à monter. Servez-vous des constats pour choisir les modèles et pour fixer le moment du remplacement. Soyez prudent avec les petits échantillons, et dites quand un modèle compte trop peu d'appareils pour qu'on en juge (voir le sujet 1.6, Culture statistique pour les métriques de service).

**6. Employez à bon escient la garantie et la réparation.** Sachez ce que couvre la [garantie](https://en.wikipedia.org/wiki/Warranty) et pour combien de temps, consignez les réclamations et comparez le coût de la réparation à celui du remplacement. La réparation garde l'équipement en usage et hors du flux de déchets, et le droit à la réparation des pièces et de l'information est un sujet de politique actif dans plusieurs endroits. Favorisez les modèles qui peuvent être réparés et mis à niveau, à égalité des autres éléments.

**7. Mesurez l'usage pour trouver ce qui est inactif et ce qui est sollicité à l'excès.** Agrégez les données d'activité par classe, et cherchez les appareils jamais employés et ceux qui sont constamment saturés. Les appareils inactifs peuvent être réaffectés ou retirés. Les appareils sollicités à l'excès sont de la friction, et les utilisateurs la sentiront (voir le sujet 6.4, Expérience des utilisateurs et des employés). Respectez la confidentialité : rapportez par classe et par groupe, jamais par personne, et employez le minimum de données.

**8. Suivez le délai de remplacement comme un service.** Mesurez le temps qu'il faut à une personne pour obtenir un appareil fonctionnel après une panne ou une perte, et incluez les étapes : signalement, approbation, stock, préparation, livraison et remise. Le 85e percentile vous dit à quel point les cas malchanceux sont mauvais. Corrigez d'abord l'étape la plus lente.

### Bien gérer les appareils

**9. Gérez les appareils de façon centralisée et cohérente.** La [gestion des appareils mobiles](https://en.wikipedia.org/wiki/Mobile_device_management) et les outils semblables permettent d'inscrire, de configurer, de mettre à jour et d'effacer des appareils à distance, ce qui réduit le travail manuel et le risque. Employez-les pour garder le registre exact, pour pousser les mises à jour en respectant la concentration des gens et pour soutenir la réponse à la perte d'un appareil.

**10. Faites de la mise au rebut sécurisée un processus défini.** Suivez une norme reconnue d'assainissement des supports, comme les recommandations publiées par le National Institute of Standards and Technology des États-Unis, ou l'équivalent dans votre juridiction. Consignez la méthode, la date et la preuve pour chaque appareil, et employez des partenaires certifiés pour la destruction et le recyclage. Une étape de mise au rebut sans preuve est une lacune.

**11. Préférez le réemploi, puis le recyclage.** Là où les appareils fonctionnent encore, redéployez-les en interne, donnez-les par un partenaire approuvé ou revendez-les après effacement. Employez des recycleurs certifiés pour le reste. Mesurez la part des appareils retirés qui va à chaque canal et les raisons de ceux qui vont directement aux déchets. Les règlements sur les déchets électroniques varient selon la juridiction et sont appliqués ; associez donc vos collègues du service juridique et de la durabilité.

**12. Passez le cycle de vie en revue avec les gens qui l'emploient.** Une fois par trimestre, réunissez la finance, la sécurité, les achats, le centre de services et quelques utilisateurs pour regarder l'âge, les pannes, le délai et la mise au rebut. Demandez ce qui fonctionne et ce qui agace les gens. C'est une collaboration continue autour de l'environnement de travail, et elle garde le plan réaliste.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Profil d'âge | Remplacer des appareils sains pour abaisser la moyenne ; exclure les vieux appareils en les requalifiant en réserve | Taux de pannes par tranche d'âge ; part d'appareils inactifs ; revue des requalifications |
| Taux de renouvellement dans les délais | Élargir la fenêtre planifiée ; reporter les dates planifiées en modifiant le plan | Changements de plan consignés avec leurs motifs ; comparer avec les pannes et les retours des utilisateurs |
| Taux de pannes par modèle | Coder des pannes comme dommages causés par l'utilisateur ou défauts logiciels ; retarder les enregistrements de réparation | Échantillonner le codage des pannes ; comparer les enregistrements de réparation avec les enregistrements d'incidents |
| Part d'appareils inactifs | Compter l'activité de fond planifiée comme usage ; réaffecter les appareils inactifs à des utilisateurs fantômes | Employer la connexion humaine comme signal d'activité ; vérifier par échantillon les affectations |
| Délai de remplacement | Arrêter l'horloge à l'expédition ; clore la demande avant que l'utilisateur ait un appareil fonctionnel | L'horloge se termine à la confirmation de l'utilisateur ; enquête sur les remplacements récents |
| Achèvement de la mise au rebut sécurisée | Consigner l'effacement sans preuve ; certificats non appariés aux numéros de série | Apparier les certificats aux numéros de série ; auditer un échantillon avec le partenaire de mise au rebut |
| Taux de réemploi et de recyclage | Compter comme recyclés des appareils envoyés à un courtier dont le traitement en aval est inconnu | Exiger des partenaires certifiés et un rapport en aval ; audits par échantillon |

Une lecture saine est un profil d'âge avec une queue vieille mince, des taux de pannes qui guident les achats, des délais de remplacement courts, une preuve complète de mise au rebut et une part décroissante d'équipement envoyé aux déchets.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Renouvellement à cycle fixe | Budget prévisible et règles simples | Remplace des appareils qui vont bien ; crée un grand pic de travail |
| Renouvellement continu par lots | Coût et charge de travail lissés ; apprentissage entre les lots | Exige de bonnes données et de la discipline |
| Fonctionner jusqu'à la panne | Coût d'achat le plus bas | Perturbe les gens ; coût imprévu ; risque de sécurité des vieux systèmes |
| Courte durée de vie planifiée | Plus récent, plus rapide, mieux soutenu | Coût plus élevé et plus de déchets |
| Longue durée de vie planifiée | Coût plus bas et moins de déchets | Plus de pannes et d'exposition de sécurité en queue |
| Réparation et réemploi en interne | Garde les appareils en usage ; moins de déchets | Exige des compétences et des pièces |
| Mise au rebut externalisée | Traitement spécialisé | Exige une supervision de la chaîne en aval |

La réponse en prose est de renouveler en continu par petits lots, selon l'âge, les pannes et le besoin, de réparer et de réemployer là où cela sert les gens, et de tenir la chaîne de mise au rebut à une norme que vous pouvez prouver.

## Questions à discuter avec votre équipe

**1. À quoi ressemble le tableau d'âge et de pannes de nos appareils, et qui détient les plus vieux ?**
Montrez la distribution des âges et le taux de pannes par tranche. Regardez qui détient les plus vieux appareils et si ce sont les personnes qui ont le plus besoin d'un équipement fiable. L'animateur doit demander ce que l'équipe changerait à l'ordre de renouvellement d'après ce tableau.

**2. Combien de temps faut-il à quelqu'un pour obtenir un appareil fonctionnel après que le sien est tombé en panne ?**
Retracez les trois derniers remplacements du signalement à un appareil fonctionnel. Notez les attentes. Demandez quelle étape pourrait être supprimée ou automatisée. Convenez d'un changement et d'un moyen de mesurer l'effet.

**3. Quels modèles nous causent le plus d'ennuis, et comment le savons-nous ?**
Listez les modèles aux plus hauts taux de pannes ou de tickets. Vérifiez si l'échantillon est assez grand pour juger. Demandez comment les constats influencent le prochain achat. Si ce n'est pas le cas, décidez comment les remonter aux achats.

**4. Que ferions-nous si un appareil retiré réapparaissait avec des données dessus ?**
Parcourez le chemin de mise au rebut et la preuve gardée à chaque étape. Demandez où est le maillon le plus faible et qui vérifie le partenaire en aval. Convenez d'un contrôle par échantillon de la preuve de mise au rebut le trimestre suivant.

**5. Où notre équipement est-il inactif, et pourquoi ?**
Regardez les appareils sans usage en 60 jours et les appareils de réserve. Demandez s'ils devraient être réaffectés, retirés ou gardés. La conversation révèle aussi des écarts entre ce que les gens ont reçu et ce dont ils ont besoin.

**6. Que faudrait-il pour réemployer ou réparer davantage de ce que nous retirons ?**
Listez les obstacles : compétences, pièces, politique ou partenaires. Demandez à quoi ressemblerait un projet pilote avec une classe d'appareils et comment il serait mesuré. Incluez les points de vue de la durabilité et de la finance.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison dépendent de machines et d'appareils de test fiables, et elles ressentent directement les constructions lentes et les ordinateurs portables défaillants. Elles devraient signaler l'équipement qui les ralentit, participer au choix des modèles pour leurs rôles et s'attendre à un chemin de remplacement rapide. Les équipes qui testent sur des appareils physiques, comme des téléphones, devraient traiter ces appareils comme des actifs avec des responsables et un plan de renouvellement.

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent la chaîne d'approvisionnement : achat, réception, préparation, déploiement, réparation et mise au rebut. Elles devraient tenir les enregistrements à jour, surveiller les schémas de pannes, garder un bassin de pièces de rechange raisonnable et conserver la preuve de mise au rebut. Elles portent le travail physique, et leur capacité limite la vitesse du renouvellement.

### Direction et gouvernance

Les dirigeants veulent un coût prévisible, un faible risque et un récit de durabilité. Ils devraient financer un renouvellement régulier, demander des données d'âge et de pannes plutôt qu'un simple âge moyen et exiger la preuve de mise au rebut. La gouvernance devrait vérifier que les obligations environnementales et de protection des données sont respectées et que le plan est revisité à mesure que les conditions changent.

### Clients et utilisateurs

Les utilisateurs veulent un appareil qui fonctionne, rapidement remplacé quand il ne fonctionne plus. Ils détiennent aussi une part du résultat : signaler tôt les problèmes, rendre l'équipement et dire à l'informatique quand ils déménagent. Leur point de vue sur l'équipement et sur le processus de remplacement est le retour le plus direct disponible. Associez-les au choix des modèles pour leur travail.

## En pratique : un exemple d'ITIL agile

Le service informatique d'un gouvernement de comté soutient 3 800 employés sur 40 sites, avec un mélange d'appareils de bureau, de terrain et partagés. Les chiffres ci-dessous sont illustratifs.

Tous les quatre ans, le comté remplaçait tous les ordinateurs portables en un seul marché, et le dernier cycle s'est terminé par un pic de pannes l'année précédant le remplacement et des mois de travail de préparation l'année du remplacement. Le responsable des actifs propose un renouvellement régulier et bâtit un tableau à partir du registre et des enregistrements de réparations. L'âge médian d'un ordinateur portable est de 3,2 ans et le 85e percentile de 5,1 ans. Les pannes pour 100 ordinateurs portables par an passent d'environ 6 pour les appareils de moins de trois ans à environ 19 pour ceux de plus de cinq ans. Un modèle acheté en un seul lot montre 24 pannes pour 100 par an à deux ans d'âge, causées par un défaut de batterie. Le délai médian de remplacement est de 5 jours, avec un 85e percentile de 12 jours, surtout dans l'attente de la préparation. La part d'appareils inactifs est de 7 pour cent, surtout des appareils de réserve et ceux du personnel en congé prolongé. Sur 410 ordinateurs portables retirés l'an dernier, 366 ont un certificat d'effacement consigné, soit un taux d'achèvement de 89 pour cent, et 12 pour cent sont allés à un recycleur sans rapport en aval.

L'équipe fait quatre changements. Elle passe à un renouvellement trimestriel d'environ 6 pour cent des ordinateurs portables, ordonnés selon l'âge et l'historique de pannes, le personnel de terrain et les plus vieux appareils d'abord. Elle négocie avec le fournisseur au titre de la garantie pour le lot défectueux. Elle garde un bassin de pièces de rechange de 2 pour cent du parc, préchargé avec l'image standard, ce qui réduit l'attente de la préparation. Elle exige un certificat apparié au numéro de série pour chaque appareil mis au rebut, et passe à un recycleur qui rend compte du traitement en aval. Elle lance aussi un petit projet pilote pour remettre à neuf et redéployer les appareils de moins de quatre ans.

Deux trimestres plus tard, le 85e percentile du délai de remplacement est de 4 jours, la part d'appareils de plus de cinq ans est passée de 22 à 13 pour cent, l'achèvement de la preuve de mise au rebut est de 99 pour cent et le taux de réemploi et de recyclage par des canaux approuvés est de 94 pour cent. Le bureau des finances demande un objectif unique pour l'âge moyen des appareils, et la responsable des actifs propose de suivre ensemble le profil d'âge et le taux de pannes, expliquant qu'un âge moyen bas peut s'acheter en remplaçant des appareils sains. La décision est consignée dans le journal des décisions, avec une revue dans six mois.

## Perspective sectorielle

**Startup.** Les appareils sont achetés au besoin et souvent par la personne qui les emploiera. Gardez une simple liste avec les dates d'achat, effacez les appareils au départ et évitez de trop acheter. Employez tôt un outil d'inscription géré, car c'est moins cher que d'adapter après coup.

**Petite entreprise.** Le coût d'un appareil défaillant retombe sur quelques personnes. Gardez un ou deux appareils de réserve, consignez les dates de garantie et ayez une routine d'effacement et de mise au rebut. Les recycleurs et les remetteurs à neuf locaux peuvent être de bons partenaires. Une liste de contrôle de mise au rebut de trois lignes vaut mieux que rien.

**Grande entreprise.** L'échelle rend importants le comportement des lots et la gestion des fournisseurs. Servez-vous des données de pannes pour négocier avec les fournisseurs, standardisez quelques modèles par classe et menez un renouvellement continu avec un soutien logistique. Alignez-vous sur le rapport de durabilité, car le matériel domine souvent l'empreinte de l'informatique.

**Gouvernement et secteur public.** Les règles de marchés, la conservation des archives et la protection stricte des données façonnent le cycle de vie. Documentez l'assainissement selon une norme reconnue, gardez la preuve de mise au rebut pendant la période exigée et considérez les engagements publics de durabilité et de réparation. Les organismes publics peuvent être tenus de rapporter les déchets électroniques (voir le sujet 8.3, Métriques de conformité et d'audit).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort de joindre le registre, les réparations et les données des postes de travail ; un peu d'outillage de gestion d'appareils s'il n'est pas déjà présent ; le bassin de pièces de rechange ; et le travail de processus de mise au rebut avec preuve. Les économies et les bénéfices apparaissent dans moins de pannes perturbatrices, un budget plus lisse, moins d'équipement gaspillé et un risque plus bas d'incident de données.

Bâtissez le dossier à partir de vos propres données. Comparez le coût de faire fonctionner un appareil au-delà de sa durée de vie planifiée, y compris l'effort de soutien et le temps de travail perdu par panne, avec le coût de le remplacer plus tôt. Comparez le coût du bassin de pièces de rechange avec les jours de travail perdus évités par panne. Comptez le nombre d'appareils retirés sans preuve d'effacement, et le coût d'un incident de données qui s'ensuivrait. Évitez de citer des durées de vie moyennes d'appareils ou des chiffres de déchets électroniques tirés de sources publiées sans vérifier leur méthode et leur date. Le coût total de possession rassemble ces parties (voir le sujet 7.5, Coût du service et économie unitaire), et le [coût total de possession](https://en.wikipedia.org/wiki/Total_cost_of_ownership) complet d'un appareil inclut l'achat, le soutien, l'énergie, la perturbation et la mise au rebut.

## Antimodèles et pièges

- **Tout remplacer selon un calendrier.** Cela gaspille des appareils fonctionnels et crée un pic de charge de travail. Employez l'âge, les pannes et le besoin.
- **Fonctionner jusqu'à la panne.** Le coût imprévu et la perturbation dépassent l'économie. Surveillez la queue d'âge.
- **Employer l'âge moyen comme objectif.** Il peut être atteint en remplaçant des appareils sains. Montrez le profil et le taux de pannes.
- **Se fier aux chiffres de fiabilité des fabricants.** Votre usage diffère. Employez vos propres données de pannes.
- **Mettre au rebut sans preuve.** Un effacement non consigné est un risque dont vous ne pouvez pas montrer la maîtrise.
- **Envoyer les appareils au recycleur le moins cher.** Le traitement en aval compte. Employez des partenaires certifiés.
- **Suivre les gens à travers leurs appareils.** Rapportez par classe et par groupe, et jamais par individu.
- **Ignorer la réparation et le réemploi.** Garder l'équipement en service est moins cher et meilleur pour l'environnement.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Planification | Acheter quand ça casse | Renouvellement périodique selon le calendrier | Durée de vie planifiée par classe ; renouvellement régulier par lots | Renouvellement cadencé selon l'âge, les pannes et le besoin ; réserve dimensionnée à partir des données | Renouvellement coordonné avec les fournisseurs, la finance et les objectifs de durabilité entre sites |
| Apprendre des données | Aucun enregistrement de pannes | Enregistrements de réparations tenus | Taux de pannes par modèle et par âge suivi | Les constats changent les achats et le calendrier ; délai géré | Données de pannes et d'usage partagées avec les fournisseurs pour améliorer la conception et les conditions |
| Sortie | Les appareils disparaissent | Effacement informel | Processus de mise au rebut avec preuve pour chaque appareil | Preuve auditée ; réemploi et recyclage suivis | Pratiques circulaires avec des partenaires certifiés et rapport public |

## Liste de vérification

- [ ] Les classes d'appareils et les durées de vie planifiées sont définies, la justification étant consignée.
- [ ] Un plan de renouvellement régulier existe et est revu avec la finance.
- [ ] Le profil d'âge, le taux de pannes par modèle et le délai de remplacement sont rapportés.
- [ ] Un bassin de pièces de rechange est dimensionné à partir des données de pannes et d'embauches.
- [ ] Les appareils inactifs sont identifiés par classe, avec des règles de confidentialité en place.
- [ ] Les réclamations de garantie et les réparations sont consignées et employées dans les décisions d'achat.
- [ ] Chaque appareil retiré a une méthode d'assainissement et une preuve consignées.
- [ ] Les partenaires de mise au rebut sont certifiés et rendent compte du traitement en aval.
- [ ] Les taux de réemploi et de recyclage sont suivis.
- [ ] Une revue trimestrielle inclut la finance, la sécurité, les achats, le centre de services et les utilisateurs.

## Prompts d'IA

**Analysez les données de pannes par modèle et par âge.**

```text
Voici un résumé des pannes matérielles de [device class] sur [period] : modèle,
nombre en service, tranche d'âge et nombre de pannes : [paste table]. Décrivez
les schémas par modèle et par âge, signalez les lots ou modèles qui paraissent
inhabituels, dites où l'échantillon est trop petit pour juger et suggérez ce
qu'il faut vérifier ensuite. N'appliquez pas de chiffres de fabricants et
n'inventez pas de valeurs de référence. Énumérez vos hypothèses.
```

**Concevez un plan de renouvellement continu.**

```text
Nous avons [number] appareils dans ces classes : [list with age profile].
Données de pannes et de réparations : [summary]. Contraintes budgétaires :
[summary]. Proposez un plan de renouvellement trimestriel qui remplace une part
régulière, ordonne les remplacements selon l'âge, l'historique de pannes et le
besoin des utilisateurs, et garde un bassin de pièces de rechange. Expliquez les
compromis face à un renouvellement à cycle fixe et ce qu'il faut mesurer.
N'inventez pas de prix. Énumérez vos hypothèses.
```

**Examinez un processus de mise au rebut.**

```text
Notre processus de mise au rebut des [device types] retirés est : [describe
steps, partners, and records]. Examinez-le pour les lacunes d'assainissement des
données, de preuve, de chaîne de traçabilité et de traitement environnemental, et
suggérez des améliorations et des contrôles par échantillon. Mentionnez que les
exigences varient selon la juridiction et devraient être vérifiées avec des
spécialistes juridiques et de sécurité. Ne donnez pas de conclusions juridiques.
Énumérez vos hypothèses.
```

**Réduisez le délai de remplacement.**

```text
Remplacer un appareil défaillant prend actuellement ces étapes et ces attentes
typiques : [list]. Identifiez les étapes les plus lentes, suggérez des
changements (par exemple pièces de rechange préchargées, inscription à distance
ou approbation simplifiée) et décrivez comment mesurer l'effet sur la médiane et
le 85e percentile. Ne supposez pas d'outillage que nous n'avons pas décrit.
Énumérez vos hypothèses et vos risques.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de cycle de vie du matériel.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de matériel porte son vecteur de détournement, son garde-fou et sa règle de preuve.

## Points clés à retenir

- Renouvelez en continu une part régulière d'appareils, à partir de vos propres données d'âge, de pannes et d'usage.
- Regardez la distribution des âges et les pannes par modèle, non la moyenne.
- Gardez rapide le remplacement avec un bassin de pièces de rechange et un chemin court et mesuré.
- Traitez la mise au rebut sécurisée avec preuve comme la fin du cycle de vie, et préférez la réparation, le réemploi et le recyclage certifié.
- Rapportez par classe d'appareils et par groupe, et ne suivez jamais des individus à travers leur équipement.
- Passez le cycle de vie en revue avec la finance, la sécurité, les achats et les utilisateurs ensemble.

## Références et lectures complémentaires

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
