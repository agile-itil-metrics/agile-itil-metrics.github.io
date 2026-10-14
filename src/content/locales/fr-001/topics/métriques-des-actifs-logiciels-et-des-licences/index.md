# Métriques des actifs logiciels et des licences

**Un logiciel s'achète, s'abonne, se construit et s'emprunte, et chaque voie crée des obligations et des coûts ; mesurez donc ce à quoi vous avez droit, ce que vous employez réellement et ce dont vous dépendez, et facilitez aux équipes le choix d'outils sans créer de surprises plus tard.**

## Résumé et motivation

Le logiciel est la classe d'actifs qui change le plus vite et qui est la plus difficile à voir. Un développeur ajoute une bibliothèque en quelques minutes. Une équipe s'inscrit à un outil logiciel en tant que service avec une carte de l'entreprise. Un fournisseur change son modèle de tarification entre deux renouvellements. Un contrat autorise 500 utilisateurs et 700 ont des comptes. La [gestion des actifs logiciels](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) est la pratique d'affaires qui gère et optimise l'achat, le déploiement, l'entretien, l'usage et la mise au rebut des logiciels au sein d'une organisation. Elle s'inscrit dans la pratique plus large de gestion des actifs informatiques (voir le sujet 7.1, Métriques de gestion des actifs informatiques) et partage sa discipline d'enregistrements, de responsables et de cycles de vie.

La livraison continue et la gestion des actifs logiciels tirent dans des directions différentes sur la vitesse. Les équipes qui livrent en continu doivent choisir et adopter des outils rapidement, et elles bâtissent sur des composants libres par centaines. La gestion des actifs logiciels veut savoir ce qui est employé, à quelles conditions, à quel coût et avec quel risque. Les deux ont raison. La voie est la collaboration continue entre les équipes, les achats, le service juridique, la sécurité et la finance : rendre rapide le chemin approuvé, rendre facile à trouver le catalogue d'outils approuvés et rendre les contrôles automatiques. Ralentir les équipes par un long processus d'approbation produit de l'[informatique fantôme](https://en.wikipedia.org/wiki/Shadow_IT), l'opposé de la visibilité que tout le monde veut.

Quatre sortes de logiciels comptent, et les métriques diffèrent entre elles.

- **Logiciel sous licence** installé sur des appareils ou des serveurs, régi par une [licence logicielle](https://en.wikipedia.org/wiki/Software_license) qui dit qui peut l'employer, combien de personnes le peuvent et à quelles conditions. Les droits peuvent être par utilisateur, par appareil, par cœur ou par site, et l'unité décide de la façon de compter.
- **Logiciel en tant que service.** Le [logiciel en tant que service](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) est accessible par un réseau et payé par abonnement, souvent par siège ou par usage. Il est facile à adopter et facile à oublier. Les outils qui se chevauchent et les sièges inutilisés s'accumulent.
- **Composants libres.** Les [logiciels libres](https://en.wikipedia.org/wiki/Open-source_software) sont disponibles sous des licences qui accordent de larges droits assortis de conditions. Certaines licences, dites [copyleft](https://en.wikipedia.org/wiki/Copyleft), exigent que le travail dérivé soit partagé aux mêmes conditions. La conformité dépend de la façon dont un composant est employé et distribué, et l'interprétation d'une licence est une question juridique.
- **Logiciel que vous construisez.** Votre propre code est un actif, et il dépend de nombreux composants. Une [nomenclature logicielle](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) est la liste des composants d'un logiciel. Elle aide à répondre à la question de savoir lesquels de vos services emploient une bibliothèque donnée quand une vulnérabilité ou un problème de licence apparaît.

Les métriques d'actifs logiciels sont exposées à la distorsion habituelle. Une position de licences peut paraître saine parce que l'inventaire est incomplet. Le coût des licences inutilisées peut paraître bas parce que les contrats ont été raccourcis avant la revue. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique ; chaque mesure ici est donc associée à un contrôle indépendant (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Une mise en garde sur le droit : les conditions de licence et les droits d'audit sont des questions juridiques. Ce sujet décrit une pratique de mesure. Il n'interprète aucune licence, et il ne remplace pas l'avis d'un conseiller juridique qualifié pour votre situation et votre juridiction.

## Principes clés

- **Mesurer les droits au regard de l'usage.** Savoir ce que vous pouvez employer et ce que vous employez est la comparaison centrale.
- **Compter selon l'unité qu'emploie la licence.** Utilisateurs, appareils, cœurs et abonnements sont différents, et les mélanger cache la réponse.
- **Faire du chemin approuvé le chemin rapide.** Un catalogue visible et une approbation rapide réduisent l'adoption parallèle.
- **Inclure les composants autant que les produits.** Les bibliothèques libres et leurs licences font partie du parc.
- **Revoir avant le renouvellement.** Le meilleur moment pour couper le gaspillage est avant la date du contrat.
- **Garder le service juridique dans la conversation.** L'interprétation appartient aux personnes qualifiées pour la donner.
- **Partager l'image avec les équipes.** Les équipes qui voient leur propre usage et leur propre coût font de meilleurs choix.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Position effective des licences | Comparaison entre les droits détenus et l'usage trouvé, par produit, dans l'unité de comptage propre à la licence | droits détenus moins déploiements ou utilisateurs trouvés, par produit | unités (excédent positif, déficit négatif) | Enregistrements de droits, outil de découverte, système d'identité | Gestion des actifs informatiques ; gestion des fournisseurs | Catalogue visible et données d'usage pour les équipes | Mensuelle pour les produits clés ; trimestrielle pour les autres |
| Taux d'utilisation des licences | Part des droits payés qui sont en usage actif | droits avec activité dans les 90 derniers jours / droits payés | pourcentage | Rapports d'usage du fournisseur, journaux d'identité, enregistrements de droits | Gestion des actifs informatiques ; gestion financière | Rétrospective sur la valeur de l'outil | Mensuelle |
| Coût des licences inutilisées | Coût annuel des droits payés et inutilisés | somme de (droits inutilisés fois coût unitaire) | monnaie par an | Enregistrements de droits, données d'usage, factures | Gestion des actifs informatiques ; gestion financière | Réduction du gaspillage dans la chaîne d'outils | Trimestrielle |
| Nombre d'applications non sanctionnées | Nombre d'applications logicielles en usage qui ne sont pas dans le catalogue approuvé | applications vues dans les données de dépenses, les journaux d'authentification unique ou les données réseau qui ne sont pas dans le catalogue | nombre | Notes de frais, fournisseur d'identité, données réseau et de postes de travail | Gestion des actifs informatiques ; gestion de la sécurité de l'information | Équipes qui choisissent des outils avec un soutien visible | Mensuelle |
| Préparation aux renouvellements | Part des renouvellements qui ont eu une revue d'usage avant la date de préavis | renouvellements avec une revue d'usage terminée au moins 90 jours avant la date de préavis / renouvellements arrivant à échéance dans la période | pourcentage | Registre des contrats et enregistrements de revue | Gestion des fournisseurs ; gestion financière | Planifier à l'avance le changement | Trimestrielle |
| Couverture par SBOM | Part des services de production ayant une nomenclature logicielle à jour | services avec une SBOM générée au dernier cycle de version / services de production | pourcentage | Sorties de la chaîne de construction, catalogue de services | Gestion des actifs informatiques ; gestion de la sécurité de l'information | La définition de terminé inclut la visibilité des dépendances | Mensuelle |
| Couverture de la revue des composants libres | Part des composants en production avec une identification de licence et une décision de politique consignées | composants avec licence et décision consignées / composants trouvés dans les SBOM | pourcentage | Outil d'analyse de la composition logicielle, registre des politiques | Gestion des actifs informatiques ; gestion des fournisseurs | Revue des dépendances dans la chaîne de livraison | Mensuelle |

Énoncez l'unité de comptage de chaque produit dans le registre. L'utilisation compte l'activité à partir d'un événement défini, comme la connexion, et d'une fenêtre énoncée. N'excluez les comptes de service et de test des comptes d'utilisateurs que si les conditions de la licence le permettent, et consignez la règle. Le coût est le prix unitaire du contrat net des remises convenues, et la date du prix est consignée.

## Recommandations

### Savoir ce que vous détenez et ce que vous employez

**1. Tenez un enregistrement de droits pour chaque produit qui coûte de l'argent ou porte des obligations.** L'enregistrement devrait contenir le fournisseur, le produit, le type de licence, l'unité de comptage, la quantité, la durée, le prix, les dates de renouvellement et de préavis, les restrictions et le responsable. Conservez le contrat ou un lien vers lui. La métrique dépend de cet enregistrement, et l'enregistrement n'existe souvent pas pour les abonnements achetés hors des achats.

**2. Mesurez l'usage avec l'unité du fournisseur.** Les licences par siège comptent des utilisateurs nommés, et les licences par processeur comptent des cœurs. Une utilisation calculée sur la mauvaise unité donne un faux confort. Là où les conditions sont complexes, demandez une fois aux achats et au service juridique de décrire la règle de comptage en langage clair, et consignez-la.

**3. Combinez trois sources de données d'usage.** La console d'administration du fournisseur, les journaux de connexion de votre fournisseur d'identité et vos outils de découverte voient chacun une partie. Là où ils divergent, trouvez pourquoi. Un siège attribué mais jamais employé est candidat à la reprise, et un utilisateur qui apparaît dans un journal et pas dans un autre peut être un problème de données.

**4. Reprenez par défaut les sièges inutilisés.** Fixez une règle, comme retirer l'accès après 90 jours sans usage et le rétablir sur demande. Rendez le rétablissement facile pour que la règle ne frustre pas les gens. La reprise est une pratique continue, non un projet, et elle fonctionne le mieux quand elle est automatisée et annoncée.

### Faire du bon chemin le chemin facile

**5. Publiez un catalogue d'outils approuvés.** Listez ce que les équipes peuvent employer, ce que cela coûte, qui le soutient et comment demander l'accès. Ajoutez une voie rapide pour proposer un nouvel outil, avec une courte revue de sécurité, de confidentialité et de coût. Un catalogue qui aide les gens à trouver l'outil existant évite les achats en double (voir le sujet 6.3, Métriques d'adoption des services et de catalogue).

**6. Surveillez la prolifération sans la punir.** Employez les données de dépenses, les journaux d'authentification unique et les données réseau pour trouver les applications qui ne sont pas dans le catalogue. Traitez chacune comme une conversation : de quoi l'équipe a-t-elle besoin, et un outil approuvé pourrait-il servir ? Comptez les applications non sanctionnées et suivez la tendance, et visez à placer les utiles sous gestion, non à les écraser.

**7. Donnez aux équipes la visibilité de leur propre usage et coût.** Une vue mensuelle des sièges, de l'usage et du coût par équipe leur permet de nettoyer leurs propres abonnements. La visibilité fonctionne mieux que la police, et elle respecte la préférence agile pour des équipes auto-organisées dotées de l'information dont elles ont besoin.

### Planifier les renouvellements et gérer la dépendance

**8. Passez l'usage en revue avant chaque renouvellement important.** Fixez une revue 90 à 120 jours avant la date de préavis, avec le responsable, les achats et la finance. Apportez l'utilisation, le coût des licences inutilisées, les alternatives et les retours de l'équipe. La préparation aux renouvellements est la part des renouvellements qui atteignent cette revue à temps. Une date de préavis manquée est un coût avec une cause.

**9. Guettez l'enfermement chez un fournisseur.** L'[enfermement chez un fournisseur](https://en.wikipedia.org/wiki/Vendor_lock-in) rend coûteux de changer de fournisseur. Consignez la voie de sortie pour les produits importants : formats d'export des données, conditions du contrat à la résiliation et effort de remplacement. Vous n'avez pas à éviter la dépendance, mais vous devriez en connaître le prix.

**10. Générez une SBOM à chaque version.** L'outillage de construction peut produire automatiquement une SBOM dans le cadre de la chaîne de livraison, de sorte que l'information reste à jour sans effort courant. Stockez-la avec la version et rendez-la interrogeable pour pouvoir répondre à la question de savoir quels services emploient un composant. Cela soutient aussi bien l'octroi de licences que la réponse en sécurité.

**11. Passez les licences libres en revue dans la chaîne de livraison.** Les outils d'[analyse de la composition logicielle](https://en.wikipedia.org/wiki/Software_composition_analysis) identifient les composants et leurs licences. Convenez avec le service juridique d'une courte politique : quelles licences sont approuvées, lesquelles demandent une revue et lesquelles ne sont pas permises pour votre usage, et faites signaler les exceptions par la chaîne de livraison. Gardez les décisions de politique dans un registre. L'outil identifie les licences, et une personne qualifiée pour les interpréter tranche les cas difficiles.

### Se préparer calmement aux audits

**12. Gardez les preuves prêtes, sans précipitation.** Un [audit de logiciels](https://en.wikipedia.org/wiki/Software_audit) par un fournisseur ou un régulateur vous demande de démontrer que votre usage correspond à vos droits. Si les enregistrements de droits et les données d'usage sont déjà réconciliés chaque mois, un audit est une demande de routine. Associez tôt le service juridique et les achats, répondez par un seul canal et ne déclarez pas de conclusions que vous n'avez pas revues avec eux.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Position effective des licences | Compter dans une unité favorable ; laisser des déploiements parallèles hors de la découverte | Compter dans l'unité propre à la licence ; comparer avec les données de dépenses et d'identité ; revue juridique de la règle de comptage |
| Taux d'utilisation des licences | Raccourcir la fenêtre d'activité ; compter comme usage les connexions de robots ou de comptes de service | Fenêtre fixe dans le registre ; exclure les comptes non humains ; comparer avec le rapport d'usage du fournisseur |
| Coût des licences inutilisées | Renégocier ou annuler juste avant la revue pour réduire le chiffre ; ignorer les abonnements sur cartes | Inclure toutes les sources de dépenses ; suivre le coût au début de la fenêtre de préavis |
| Nombre d'applications non sanctionnées | Tout approuver dans le catalogue pour réduire le compte ; cacher l'usage par des comptes personnels | Critères de revue du catalogue ; regarder les données de dépenses et d'identité ; demander aux équipes ce dont elles ont besoin |
| Préparation aux renouvellements | Tenir une revue pour la forme ; fixer plus tard la date de préavis | Liste de contrôle de revue avec apports requis ; dates de contrat détenues par les achats |
| Couverture par SBOM | Générer des SBOM qui omettent les dépendances transitives ; compter la sortie de construction qui n'est pas mise en production | Définir la profondeur dans le registre ; vérifier par échantillon une SBOM au regard de l'artefact déployé |
| Couverture de la revue des composants libres | Marquer des composants comme revus sans décision ; accepter des licences « inconnues » | Compter les composants à licence inconnue ; revoir un échantillon de décisions |

Une lecture saine est une position de licences qui correspond à la preuve indépendante, un taux d'utilisation qui monte parce que des sièges sont repris et non parce que la définition a changé, un nombre d'applications non sanctionnées qui baisse à mesure que le catalogue s'améliore, et des renouvellements qui arrivent avec une revue.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Approbation centrale de tous les outils | Contrôle fort, vue unique | Lente ; encourage l'informatique fantôme |
| Choix par l'équipe dans des garde-fous | Rapide ; convient aux besoins de l'équipe | Plus de variété ; exige visibilité et revue |
| Reprise agressive des sièges | Économise du coût | Peut frustrer les utilisateurs si le rétablissement est lent |
| Attribution généreuse de sièges | Peu de friction | Le gaspillage s'accumule |
| Accords d'entreprise | Coût unitaire plus bas, plus simple | Enfermement ; paiement d'une ampleur inutile |
| Paiement à l'usage | Fait correspondre le coût à l'usage | Factures imprévisibles |
| Analyse automatisée des licences | Cohérente et rapide | Exige un jugement humain pour les cas limites |
| Revue manuelle des composants | Soigneuse | Ne passe pas à l'échelle pour de grands arbres de dépendances |

La réponse en prose est de donner aux équipes le choix dans des garde-fous clairs, d'automatiser les contrôles et de dépenser l'attention humaine sur les gros contrats et les questions de licence difficiles. Gardez une voie rapide pour les nouveaux outils et une voie facile pour rétablir l'accès repris.

## Questions à discuter avec votre équipe

**1. Quels trois produits nous coûtent le plus, et savons-nous combien de personnes les emploient ?**
Listez les plus gros contrats et l'unité de comptage de chacun. Comparez avec les données d'usage. L'animateur doit chercher les produits dont personne ne connaît l'unité ou pour lesquels les données d'usage n'existent pas. Convenez de recueillir les données d'un produit avant le prochain renouvellement.

**2. Comment un nouvel outil est-il adopté ici, et combien de temps cela prend-il ?**
Retracez un exemple récent de la demande à l'accès. Demandez combien d'équipes ont sauté le chemin, et pourquoi. La réponse montre si le chemin approuvé est rapide. Convenez d'une amélioration du chemin et d'un moyen de savoir si elle a fonctionné.

**3. Que se passerait-il si un fournisseur nous demandait de prouver notre position de licences le mois prochain ?**
Parcourez qui répondrait, quels enregistrements existent et quelles lacunes il y a. La conversation ne doit pas viser à trouver des conclusions juridiques, seulement à identifier les enregistrements manquants. Nommez les personnes du service juridique et des achats qui seraient impliquées et comment l'équipe les joindrait.

**4. Où reprenons-nous des sièges inutilisés, et où ne le faisons-nous pas ?**
Passez en revue les règles de reprise des principaux produits. Demandez ce qui arriverait si une règle était appliquée aux autres. Discutez de la façon de rendre indolore le rétablissement de l'accès, car c'est ce qui rend la règle acceptable.

**5. Pouvons-nous dire lesquels de nos services emploient une bibliothèque libre donnée ?**
Choisissez une bibliothèque bien connue et essayez de répondre. Si cela prend plus de quelques minutes, discutez de la raison. Convenez de l'étape de la chaîne de livraison qui pourrait produire une SBOM et de l'endroit où stocker les résultats.

**6. De quoi dépendons-nous qui serait difficile à quitter ?**
Listez les produits dont les données ou le flux de travail sont profondément liés à un seul fournisseur. Demandez ce que coûterait le départ et comment vous commenceriez. L'animateur peut consigner la réponse comme apport à la planification des renouvellements.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison choisissent des outils et des bibliothèques chaque jour. Elles devraient employer le catalogue approuvé là où il les sert, proposer des ajouts avec une courte note et laisser la chaîne de livraison générer des SBOM et signaler les problèmes de licence. Elles ont besoin de réponses rapides : une politique claire sur les licences courantes et une voie pour poser des questions sur les inhabituelles. Une équipe qui voit ses propres données de sièges et de dépenses les nettoiera sans qu'on le lui dise.

### Équipes de service et d'exploitation

Les équipes d'exploitation mènent la découverte, gèrent les accès et traitent renouvellements et audits. Elles devraient réconcilier les données d'usage avec les droits, reprendre les sièges inutilisés selon un calendrier et tenir à jour le registre des contrats. Elles portent aussi la charge de soutien des outils non gérés, ce qui est une bonne raison de placer les utiles sous gestion.

### Direction et gouvernance

Les dirigeants veulent éviter les coûts imprévus et l'exposition juridique sans ralentir les équipes. Ils devraient financer l'automatisation, demander la preuve indépendante derrière les affirmations de position de licences et garder le service juridique et les achats dans la boucle. La gouvernance devrait attendre que les renouvellements soient revus à temps et que la politique de logiciels libres soit appliquée dans la chaîne de livraison.

### Clients et utilisateurs

Les utilisateurs veulent que l'outil dont ils ont besoin fonctionne du premier coup, sans longue attente. Ils remarquent quand un accès disparaît sans préavis ou quand deux outils font le même travail. On devrait leur dire quand des sièges seront repris, leur donner une voie facile pour demander l'accès et les consulter quand un outil est remplacé.

## En pratique : un exemple d'ITIL agile

Le groupe technologique d'une organisation de presse régionale soutient 900 employés et exploite une plateforme de publication d'environ 40 services. Les chiffres ci-dessous sont illustratifs.

Le directeur financier demande pourquoi les coûts logiciels ont crû plus vite que l'effectif. Le responsable des actifs logiciels rassemble les données. Les enregistrements de droits couvrent 61 produits. Les journaux de connexion et les rapports des fournisseurs montrent que la suite de conception a 220 sièges et 140 utilisateurs actifs dans les 90 derniers jours, soit un taux d'utilisation de 64 pour cent, les sièges inutilisés coûtant à peu près autant que le salaire d'un ingénieur. Les données de dépenses montrent 37 applications qui ne sont pas dans le catalogue, surtout des outils de collaboration et d'analyse achetés par des équipes. Trois des plus gros renouvellements avaient des dates de préavis qui sont passées sans revue d'usage.

L'équipe fait quatre changements avec les équipes produit. Une règle de reprise des sièges retire l'accès après 90 jours sans usage, avec une demande en un clic pour le rétablir. Une page de catalogue liste les outils approuvés, leur coût et un responsable, avec une voie de deux jours pour proposer un nouvel outil. Les revues de renouvellement commencent 100 jours avant la date de préavis, avec une liste de contrôle d'utilisation, d'alternatives et de retours de l'équipe. La chaîne de construction de la plateforme de publication génère maintenant une SBOM à chaque version, et une analyse de licences signale les composants à licence inconnue ou restreinte pour une revue par le service juridique.

Trois mois plus tard, l'utilisation de la suite de conception est de 86 pour cent après la reprise de 60 sièges, et un renouvellement est renégocié à un nombre de sièges inférieur. Le nombre d'applications non sanctionnées passe de 37 à 24, l'équipe ajoutant quatre outils utiles au catalogue et retirant des doublons. La couverture par SBOM est de 70 pour cent des services de production. L'analyse trouve un composant à licence inconnue dans un service rarement employé, que le service juridique examine et que l'équipe remplace. Un fournisseur demande une vérification de licence pour un autre produit, et les enregistrements produits pour l'audit concordent, avec une correction. Le directeur demande la promesse de 100 pour cent d'utilisation, et la responsable explique qu'un chiffre sain laisse une marge pour les nouveaux arrivants et les changements, et elle propose une plage comme repère, non comme objectif. La décision est consignée.

## Perspective sectorielle

**Startup.** Les outils sont choisis vite et payés par carte. Gardez une liste d'une page des abonnements avec responsables et dates de renouvellement, passez-la en revue chaque trimestre et employez les niveaux gratuits délibérément. Portez attention aux licences libres avant de distribuer un logiciel ou de lever des fonds, car les investisseurs peuvent poser la question.

**Petite entreprise.** Une poignée de produits porte l'essentiel du coût. Suivez à la main le nombre de sièges, mettez des rappels de calendrier pour les renouvellements et demandez des rapports d'usage aux fournisseurs. Méfiez-vous des abonnements à renouvellement automatique et des licences liées à une personne qui est partie.

**Grande entreprise.** Des contrats complexes, des fusions et de nombreuses unités d'affaires rendent difficiles les enregistrements de droits. Investissez dans un modèle de données qui contienne les unités de comptage, automatisez les flux de découverte et d'identité et donnez au service juridique et aux achats une place dans la chaîne de livraison pour la politique de logiciels libres. Attendez-vous à des audits de fournisseurs et préparez les preuves à l'avance.

**Gouvernement et secteur public.** Les règles de marchés, les licences d'intérêt public et les exigences de souveraineté façonnent les choix. Documentez les raisons des achats, gardez les enregistrements de contrats pendant la période exigée et considérez les normes ouvertes et les voies de sortie comme des exigences. La transparence sur les dépenses logicielles peut être un devoir légal (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le temps de bâtir l'enregistrement de droits, l'outillage d'analyse d'usage et de composition, et l'effort de revoir les renouvellements. Certains outils sont déjà sous licence dans le cadre de plateformes d'identité ou de postes de travail. Le coût courant est de quelques heures par mois pour un petit parc et plus pour un grand. Automatiser la reprise et la génération de SBOM l'abaisse.

Le retour vient de dépenses évitées et de surprises évitées. Les sièges inutilisés sont des économies directes au renouvellement. Des revues de renouvellement précoces permettent de négocier en connaissance de cause. Connaître vos dépendances raccourcit la réponse aux vulnérabilités et aux questions de licence. Évitez de citer des pourcentages d'économies sectoriels que vous ne pouvez pas retracer. Mesurez votre propre ligne de base : sièges inutilisés fois coût unitaire, nombre de renouvellements revus tardivement, temps pour répondre à « quels services emploient ce composant » et coût de tout constat d'audit passé. Incluez le coût du programme lui-même, et ne comptez l'exposition juridique évitée que là où vous pouvez décrire un risque précis réduit. Les sujets suivants sur le coût prolongent la vue financière (voir le sujet 7.5, Coût du service et économie unitaire).

## Antimodèles et pièges

- **Compter dans la mauvaise unité.** Un compte de sièges pour une licence vendue par cœur induit en erreur. Consignez l'unité.
- **Traiter le rapport du fournisseur comme toute la vérité.** Combinez-le avec vos propres journaux.
- **Bloquer les outils par défaut.** Les équipes contournent le blocage. Rendez rapide le chemin approuvé.
- **Reprendre sans moyen de retour.** Les utilisateurs perdent confiance. Rendez le rétablissement facile et rapide.
- **Revoir les renouvellements après la date de préavis.** Le levier a disparu. Commencez tôt.
- **Analyser les licences et ignorer les résultats.** Une analyse sans politique ni responsable de décision est du bruit.
- **Interpréter les licences dans l'équipe de livraison.** Les cas difficiles relèvent du service juridique.
- **Traiter les SBOM comme de la paperasse.** Si personne ne les interroge, elles se dégradent. Employez-les dans des exercices de réponse.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Droits et usage | Contrats dans les courriels ; aucune donnée d'usage | Enregistrements pour les principaux produits ; contrôles d'usage occasionnels | Enregistrements de droits avec unités de comptage ; usage tiré de l'identité et des données des fournisseurs | Position des licences et utilisation revues chaque mois ; sièges repris automatiquement | Usage et dépenses partagés avec les équipes ; les données d'achat et d'usage circulent entre fournisseurs et organisation |
| Chemin d'adoption | Les équipes achètent ce qu'elles aiment | Une liste d'outils approuvés | Voie rapide de catalogue avec responsables et critères de revue | Applications non sanctionnées suivies et absorbées ou retirées | Choix d'outils co-conçu avec les équipes ; services communs réemployés dans l'organisation |
| Composants et dépendances | Inconnus | Listes manuelles de composants pour certains services | SBOM générée à la version ; politique de licences convenue avec le service juridique | Couverture suivie ; exceptions revues ; exercices de réponse menés | SBOM et politique partagées avec fournisseurs et clients ; voies de sortie planifiées |

## Liste de vérification

- [ ] Chaque produit payant ou porteur d'obligations a un enregistrement de droits avec unité, quantité, durée et responsable.
- [ ] L'usage provient d'au moins deux sources, comparées chaque mois pour les produits clés.
- [ ] La reprise des sièges a une règle, un préavis et un moyen facile de revenir en arrière.
- [ ] Un catalogue d'outils approuvés existe avec une voie rapide pour proposer un nouvel outil.
- [ ] Les données de dépenses et d'identité sont vérifiées pour repérer les applications non sanctionnées.
- [ ] Les revues de renouvellement commencent au moins 90 jours avant la date de préavis.
- [ ] Les SBOM sont générées et stockées pour chaque version des services de production.
- [ ] Une politique de licences convenue avec le service juridique signale les exceptions dans la chaîne de livraison.
- [ ] Les voies de sortie des fournisseurs sont consignées pour les produits importants.
- [ ] Les contacts du service juridique et des achats pour les audits sont nommés et connus des équipes.

## Prompts d'IA

**Construisez un gabarit d'enregistrement de droits.**

```text
Rédigez un gabarit pour consigner les droits logiciels de [type of
organization], couvrant ces types de produits : [licensed, SaaS, open-source,
built]. Les champs devraient inclure l'unité de comptage, la quantité, la durée,
le prix, la date de préavis, les restrictions, le responsable, la source d'usage
et les notes de sortie. Suggérez comment remplir chaque champ à partir des
sources existantes : [list]. N'interprétez aucune condition de licence.
Énumérez vos hypothèses et les champs qui demandent un apport juridique ou des
achats.
```

**Préparez une revue de renouvellement.**

```text
Nous avons un renouvellement pour [product] avec une date de préavis du [date].
Faits : droits [number] [units], usage actif [number] dans les 90 derniers
jours, coût annuel [amount] et retours de l'équipe [summary]. Rédigez une revue
de renouvellement d'une page avec les questions à poser, les options (renouveler
tel quel, réduire, remplacer, renégocier) et les informations qui nous manquent
encore. N'inventez pas de prix de marché. Énumérez vos hypothèses.
```

**Concevez une règle de reprise de sièges.**

```text
Proposez une politique de reprise de sièges pour [product] employé par [number]
personnes dans [type of organization]. Incluez la fenêtre d'inactivité, le
préavis aux utilisateurs, comment rétablir l'accès, les exceptions (par exemple
congé ou usage saisonnier) et comment mesurer si cela aide sans agacer les
utilisateurs. Contexte : [tools available]. Énumérez vos hypothèses et vos
risques.
```

**Triez un résultat d'analyse de licences.**

```text
Notre analyse de [service] a trouvé ces composants et licences : [paste list
with license identifiers]. Notre politique : approuvées [list], revue nécessaire
[list], non permises [list]. Triez les composants dans ces trois groupes,
signalez les cas inconnus ou ambigus et suggérez ce qu'il faut demander au
service juridique pour chaque élément signalé. Ne donnez pas de conclusions
juridiques. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique d'actifs logiciels ou de licences.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique logicielle énonce son unité de comptage, son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Comparez les droits avec l'usage réel, compté dans l'unité propre à la licence.
- Faites du chemin approuvé le chemin rapide, afin que les équipes n'aient pas besoin de cacher ce qu'elles emploient.
- Passez l'usage en revue avant les dates de préavis de renouvellement, et reprenez les sièges inutilisés selon une règle visible.
- Générez des SBOM dans la chaîne de livraison et signalez les licences au regard d'une politique convenue avec le service juridique.
- Gardez le service juridique et les achats impliqués dans l'interprétation et les audits.
- Donnez aux équipes la visibilité de leur propre usage et coût.

## Références et lectures complémentaires

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
