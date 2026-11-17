# Métriques de gestion des actifs informatiques

**On ne peut pas soutenir, sécuriser ou payer raisonnablement ce qu'on ne peut pas trouver ; mesurez donc l'exactitude, la complétude et l'actualité de vos enregistrements d'actifs, et prenez l'habitude d'enregistrer les actifs comme un sous-produit du travail quotidien plutôt que lors d'un nettoyage annuel.**

## Résumé et motivation

Chaque service repose sur des choses : ordinateurs portables, serveurs, licences, comptes de nuage, équipements réseau, ainsi que les données et les contrats qui leur sont attachés. La [gestion des actifs informatiques](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) est l'ensemble des pratiques d'affaires qui réunissent les fonctions financières, contractuelles et d'inventaire pour soutenir la gestion du cycle de vie et la prise de décisions stratégiques pour l'environnement informatique. Elle répond à des questions dont d'autres pratiques dépendent. Que possédons-nous ? Où est-ce ? Qui en est responsable ? Que cela coûte-t-il ? Quand cela doit-il être renouvelé, corrigé ou remplacé ?

La livraison continue et ITIL se rencontrent maladroitement sur ce terrain. Les équipes qui livrent du logiciel en continu créent et détruisent de l'infrastructure tout le temps : conteneurs, machines virtuelles, environnements de test et comptes de nuage apparaissent en quelques minutes. Un tableur trimestriel ne peut pas suivre. L'ITAM de la tradition ITIL insiste sur les enregistrements, les responsables et les cycles de vie, et cette insistance est juste, car les actifs non gérés sont l'endroit où croissent les failles de sécurité, l'argent gaspillé et les manquements de conformité. L'apport agile est la collaboration continue entre achats, finance, sécurité et exploitation, et l'habitude pratique d'enregistrer automatiquement les actifs à mesure qu'ils sont créés, par les chaînes de livraison et l'infrastructure en tant que code, afin que l'enregistrement soit un sous-produit du travail.

Trois termes reviennent dans ce sujet.

- **Actif :** un élément de valeur pour l'organisation qui est géré à travers un cycle de vie. En ITAM, cela inclut le matériel, les logiciels, les ressources de nuage, les abonnements et parfois les données.
- **Enregistrement d'actif :** l'entrée qui décrit un actif : ce que c'est, qui le détient, où il se trouve, dans quel état il est, ce qu'il coûte et à quoi il est lié.
- **Cycle de vie :** les étapes que traverse un actif, typiquement demandé, acheté, reçu, déployé, en usage, entretenu, retiré et mis au rebut. La pensée du [cycle de vie d'un produit](https://en.wikipedia.org/wiki/Product_lifecycle) s'applique à chaque classe d'actifs, avec des étapes différentes pour un ordinateur portable et pour un abonnement de nuage.

L'ITAM recoupe la gestion de la configuration, qui suit les relations entre composants afin de comprendre l'impact du changement, et les sujets suivants traitent tour à tour du logiciel, du matériel et de la configuration (voir le sujet 7.2, Métriques des actifs logiciels et des licences, le sujet 7.3, Métriques du cycle de vie des actifs matériels, et le sujet 7.4, Métriques de qualité de la configuration et de la CMDB). La différence est une affaire de but : la gestion des actifs met l'accent sur la responsabilité, le coût et le cycle de vie, tandis que la gestion de la configuration met l'accent sur la structure et la dépendance. Le même inventaire alimente souvent les deux.

La norme que citent la plupart des programmes ITAM est ISO/IEC 19770, une famille de normes pour les systèmes de gestion des actifs informatiques. Citez-la par son nom et son périmètre, et lisez-la auprès de l'organisme de normalisation avant de vous fier à tout détail. Ce sujet ne reproduit pas son texte.

Les métriques d'actifs sont faciles à transformer en objectifs, et les objectifs sont faciles à atteindre sur le papier. Un inventaire peut afficher 100 pour cent d'exactitude parce qu'il n'enregistre que ce qui était déjà connu. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : mesurez l'exactitude au regard d'une preuve indépendante, et traitez un nombre parfait comme une raison de regarder plus attentivement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Enregistrer au moment du changement.** Les actifs devraient entrer dans l'enregistrement et en sortir dans le cadre du travail qui les crée ou les supprime.
- **Mesurer au regard d'une preuve indépendante.** L'exactitude signifie l'accord avec la réalité, vérifié par une méthode autre que l'enregistrement lui-même.
- **Chaque actif a un responsable.** Un actif que personne ne détient ne sera pas corrigé, payé raisonnablement ni retiré.
- **Garder l'enregistrement aussi petit que possible.** Capturez les champs dont les décisions ont besoin, et pas plus.
- **Combiner les sources.** Les outils de découverte, les achats, la finance, l'identité et la facturation du nuage voient chacun une partie du parc.
- **Collaborer entre fonctions.** Les achats, la finance, la sécurité et l'exploitation partagent l'enregistrement et sa qualité.
- **Traiter les écarts comme de l'information.** Un actif introuvable est un constat à comprendre, non un échec à cacher.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Exactitude de l'inventaire | Part des actifs échantillonnés dont l'enregistrement correspond à ce qui est trouvé | actifs échantillonnés dont l'enregistrement correspond à la preuve physique ou technique sur tous les champs convenus / actifs échantillonnés | pourcentage | Échantillon d'audit comparé au registre des actifs et aux données de découverte | Gestion des actifs informatiques ; gestion de la configuration | La définition de terminé inclut l'enregistrement de l'actif | Trimestrielle |
| Couverture de la découverte | Part des actifs attendus vus par la découverte dans la période | actifs vus par au moins une source de découverte dans les 30 derniers jours / actifs du registre que la découverte peut voir | pourcentage | Rapports de l'outil de découverte joints au registre | Gestion des actifs informatiques ; supervision et gestion des événements | L'état de l'infrastructure en tant que code correspond à la réalité | Mensuelle |
| Taux de réconciliation | Part des actifs appariés entre sources indépendantes | actifs appariés dans le registre et dans une seconde source (par exemple achats, identité ou facturation du nuage) / actifs dans l'une ou l'autre source | pourcentage | Exports du registre, des achats, de l'identité et de la facturation du nuage | Gestion des actifs informatiques ; gestion des fournisseurs | Source unique de vérité pour les environnements | Mensuelle |
| Part d'actifs sans responsable | Part des actifs sans responsable valide nommé | actifs sans responsable ou dont le responsable est parti / actifs du registre | pourcentage | Registre joint à l'annuaire des personnes | Gestion des actifs informatiques ; gestion de la sécurité de l'information | Responsabilité claire des services et des composants | Mensuelle |
| Complétude de l'étape du cycle de vie | Part des actifs ayant une étape de cycle de vie à jour et les dates que cette étape exige | actifs avec l'étape et les dates requises consignées / actifs du registre | pourcentage | Registre | Gestion des actifs informatiques ; gestion des versions et des déploiements | Cycle de vie de l'environnement suivi dans la chaîne de livraison | Mensuelle |
| Délai d'enregistrement | Retard entre un changement d'actif et sa mise à jour dans le registre | médiane et 85e percentile des heures ou jours entre l'événement de changement et la mise à jour du registre | jours | Événements de changement, d'achat ou de chaîne de livraison comparés aux horodatages du registre | Gestion des actifs informatiques ; maîtrise des changements | Enregistrement automatisé dans la chaîne de livraison | Mensuelle |
| Taux d'actifs introuvables | Part des actifs attendus qui ne peuvent être localisés ou expliqués à l'audit | actifs attendus mais non trouvés, et non expliqués par une mise au rebut approuvée / actifs attendus | pourcentage | Résultats d'audit | Gestion des actifs informatiques ; gestion de la sécurité de l'information | Constat de rétrospective sur des éléments perdus | Par audit |

Énoncez le périmètre d'« actif » pour chaque classe. Un ordinateur portable, une machine virtuelle, un abonnement et une licence sont différents, et les champs d'enregistrement et les preuves diffèrent. Le délai d'enregistrement démarre à l'événement qui a créé le changement, comme la réception de marchandises, un passage de chaîne de livraison ou le début d'un abonnement, et s'arrête quand le registre le reflète. Excluez les actifs volontairement hors périmètre, comme les conteneurs de test de courte durée, et listez-les comme une classe d'exclusion dans le registre.

## Recommandations

### Décider de ce que vous gérez

**1. Listez les classes d'actifs qui comptent et pourquoi.** Commencez par celles qui portent un coût, un risque ou une obligation légale : appareils d'utilisateurs finaux, serveurs et comptes de nuage, équipements réseau, licences et abonnements logiciels, et entrepôts de données critiques. Pour chaque classe, écrivez les décisions que l'enregistrement doit soutenir : correction, renouvellement, audit, renouvellement du parc, mise au rebut. Laissez de côté les classes dont aucune décision n'a besoin.

**2. Définissez les champs minimaux.** Pour chaque classe, choisissez les quelques champs dont les décisions ont besoin : identifiant, type, responsable, emplacement ou compte, état, dates d'acquisition et de fin, centre de coûts et liens vers le service soutenu. Un enregistrement court et exact vaut plus qu'un enregistrement long et périmé. Consignez la définition dans le registre des métriques.

**3. Attribuez un responsable à chaque classe et à chaque actif.** Le responsable de classe conçoit l'enregistrement et le processus. Le responsable d'actif est la personne ou l'équipe responsable de l'actif en usage. Employez une équipe, non un individu, quand un actif est partagé, et tenez l'annuaire à jour pour que les départs n'orphelinent pas d'actifs.

### Saisir les actifs à mesure que le travail se fait

**4. Enregistrez les actifs dans la chaîne de livraison.** Là où l'infrastructure est créée par du code, faites écrire la chaîne de livraison dans le registre à la création et au retrait. Cela rend le délai d'enregistrement proche de zéro et fait concorder le registre avec le code. La pratique agile de livrer le changement en continu le soutient : si chaque déploiement met l'enregistrement à jour, l'enregistrement est rarement faux.

**5. Liez les achats et le registre.** Pour le matériel et les logiciels achetés, faites du bon de commande ou de la création d'abonnement le déclencheur d'un enregistrement, et de la réception des marchandises ou de l'activation le déclencheur d'un changement d'état. La pratique de la [gestion des stocks](https://en.wikipedia.org/wiki/Inventory_management) pour les biens physiques offre des schémas utiles pour recevoir, stocker et délivrer des articles. Là où des achats se font hors des achats, comme les cartes de crédit d'équipe pour des abonnements, ajoutez un contrôle mensuel des données de dépenses.

**6. Employez la découverte comme un contrôle, non comme l'enregistrement.** Les outils de découverte balaient les réseaux et les comptes de nuage et rapportent ce qu'ils trouvent. Ils sont bons pour dire ce qui existe et mauvais pour dire qui le détient ou pourquoi. Employez-les pour détecter les actifs manquants et inconnus et pour comparer avec le registre. L'étape qui consiste à apparier une source avec une autre est une forme de [réconciliation](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), la même idée que celle qu'emploient les comptables pour comparer deux jeux d'enregistrements.

**7. Étiquetez à la création.** Exigez un responsable et une étiquette de service sur chaque ressource de nuage et une étiquette sur chaque appareil physique. Les méthodes de [suivi des actifs](https://en.wikipedia.org/wiki/Asset_tracking) comme les codes-barres et les étiquettes radiofréquence aident pour les éléments physiques dans les entrepôts et les bureaux. Les ressources sans étiquette sont des constats pour l'équipe du responsable, traités comme une partie normale de l'exploitation.

### Mesurer honnêtement

**8. Auditez avec un échantillon aléatoire.** Chaque trimestre, tirez un échantillon aléatoire d'actifs du registre et vérifiez-les au regard de la preuve : trouvez l'appareil, inspectez la ressource, confirmez le responsable. Tirez ensuite un échantillon dans l'autre sens, à partir des résultats de découverte et des données d'achat, et vérifiez que chacun figure dans le registre. Les deux sens révèlent des écarts différents. Rapportez l'exactitude séparément pour chaque classe.

**9. Surveillez la qualité des données dans le temps.** La complétude, l'exactitude et l'actualité des enregistrements sont des aspects de la [qualité des données](https://en.wikipedia.org/wiki/Data_quality). Suivez la tendance par champ et par classe, et regardez quels champs dérivent le plus vite. La dérive du responsable et de l'emplacement est normale et vous dit où automatiser.

**10. Rapportez les écarts.** Montrez les actifs introuvables, la part sans responsable et les éléments non réconciliés autant que l'exactitude de titre. Un rapport qui cache ses exceptions est un rapport sur le rapport. Nommez un responsable et une date pour chaque classe d'écart.

### Boucler la boucle

**11. Retirez les actifs aussi délibérément que vous les créez.** La mise au rebut a aussi besoin d'enregistrements : la date, la méthode et, pour les appareils qui contenaient des données, la preuve que les données ont été effacées. Un enregistrement de [chaîne de traçabilité](https://en.wikipedia.org/wiki/Chain_of_custody) montre qui a manipulé un actif et quand. Les actifs retirés encore au registre gonflent les coûts et brouillent les audits.

**12. Employez l'enregistrement dans les décisions quotidiennes.** La correction, les renouvellements, la réponse en sécurité et le budget devraient lire dans le registre. Quand les gens l'emploient, ils le corrigent. Quand le registre ne sert qu'aux audits, il se dégrade. Passez en revue l'usage du registre avec les équipes qui en dépendent, et corrigez d'abord les champs dont elles se plaignent.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Exactitude de l'inventaire | Échantillonner les actifs faciles ; auditer seulement après un nettoyage ; compter une correspondance sur moins de champs | Échantillon aléatoire tiré par quelqu'un d'extérieur à l'équipe ; liste de champs fixe ; échantillon dans les deux sens |
| Couverture de la découverte | Rétrécir les « actifs attendus » à ce que la découverte peut voir ; exclure les réseaux difficiles à balayer | Documenter les exclusions ; comparer avec les achats et la facturation du nuage |
| Taux de réconciliation | Choisir une seconde source dérivée de la première ; appariement automatique sur des clés faibles | Employer des sources vraiment indépendantes ; vérifier à la main des appariements par échantillon |
| Part d'actifs sans responsable | Attribuer une équipe fourre-tout comme responsable ; saisir une personne fictive | Compte des actifs détenus par des équipes fourre-tout ; échantillon de confirmation des responsables |
| Complétude de l'étape du cycle de vie | Remplir des dates par défaut ; mettre chaque actif à « en usage » | Comparer l'étape avec la preuve à l'audit ; regarder la distribution des âges |
| Délai d'enregistrement | Antidater des événements de changement ; consigner l'heure de l'événement comme heure de l'enregistrement | Comparer avec les horodatages du système source ; piste d'audit des modifications |
| Taux d'actifs introuvables | Passer des actifs en pertes sans approbation ; les requalifier en mis au rebut | Taux d'approbation et de preuve de mise au rebut ; comparer les passages en pertes avec les enregistrements de la finance |

Une lecture saine est un chiffre d'exactitude qui reste sous 100 pour cent pour de bonnes raisons, avec des écarts visibles qui rétrécissent, des responsables qui confirment leurs actifs quand on le leur demande, et un enregistrement que les gens emploient pour décider.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Enregistrement automatisé | Rapide, cohérent, peu d'effort | Exige de l'ingénierie ; manque ce qui est hors de la chaîne de livraison |
| Enregistrement manuel | Souple, fonctionne pour tout | Lent, sujet aux erreurs, se dégrade |
| Piloté par la découverte | Trouve l'inconnu | Ne peut fournir ni responsabilité ni but |
| Piloté par les achats | Capture le coût et le contrat | Manque les achats parallèles et les niveaux gratuits |
| Contrôle étroit des achats | Enregistrement solide | Ralentit les équipes ; encourage les contournements |
| Contrôle léger avec vérifications | Rapide ; repose sur la confiance | Plus d'écarts à trouver et à corriger |
| Grand schéma d'enregistrement | Rapports riches | Difficile à garder exact |
| Petit schéma d'enregistrement | Facile à entretenir | Analyse limitée |

La réponse en prose est d'automatiser l'enregistrement là où l'infrastructure est du code, d'employer la découverte et les données de facturation comme contrôles indépendants et de garder l'enregistrement petit. Faites confiance aux équipes pour créer ce dont elles ont besoin, demandez-leur de l'étiqueter et vérifiez par échantillonnage.

## Questions à discuter avec votre équipe

**1. Si nous devions trouver demain tous les actifs liés à notre service le plus important, combien de temps cela prendrait-il ?**
Choisissez un service et retracez ses actifs à partir du registre et d'autres sources. Chronométrez l'exercice et notez les écarts. L'animateur doit consigner quelles sources concordaient et lesquelles non. Le résultat montre si le registre est un outil de travail ou un document.

**2. Quels actifs sont créés sans que personne dans cette salle le sache ?**
Pensez aux comptes de nuage, aux abonnements, aux environnements de test et aux appareils achetés hors des achats. Demandez comment ceux-ci apparaîtraient. La conversation trouve les fuites. Convenez d'une source de preuve indépendante à ajouter à la réconciliation ce trimestre.

**3. Qui détient les actifs que nous avons aujourd'hui, et comment savons-nous qu'ils sont toujours là ?**
Prenez un échantillon d'actifs et demandez aux responsables nommés de confirmer. Notez combien de responsables ont changé de rôle ou sont partis. Décidez comment l'annuaire et le registre resteront alignés, par exemple par un contrôle automatisé quand quelqu'un part.

**4. Comment auditons-nous notre propre registre sans corriger nos propres devoirs ?**
Discutez de qui tire l'échantillon et de qui le vérifie. Demandez ce qui arriverait si le résultat était mauvais. L'animateur doit explorer si les gens se sentent en sécurité pour rapporter un mauvais chiffre, car un audit peu sûr produit de bons chiffres.

**5. Que consignons-nous que personne n'emploie ?**
Listez les champs du registre et demandez quelles décisions emploient chacun. Les champs sans utilisateur sont candidats au retrait. Les champs employés mais peu fiables sont candidats à l'automatisation. Convenez de deux changements.

**6. Que se passe-t-il pour un actif entre « n'est plus nécessaire » et « parti » ?**
Retracez un appareil retiré ou un service mis hors service. Qui confirme que les données ont été effacées ? Quand l'enregistrement est-il clos ? Les lacunes de ce chemin sont là où s'accumulent coûts, risques et constats d'audit.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison créent la plupart des nouveaux actifs, et elles ressentent la tenue des enregistrements comme de la friction à moins qu'elle soit automatique. Elles devraient traiter l'enregistrement d'actif comme une partie de la définition de terminé d'un environnement, laisser les chaînes de livraison enregistrer ce qu'elles créent et étiqueter les ressources avec des responsables. Elles profitent d'un enregistrement exact quand elles doivent trouver des coûts, corriger ou retirer un environnement.

### Équipes de service et d'exploitation

Les équipes d'exploitation dépendent du registre pour la correction, la réponse aux incidents et la capacité. Elles devraient réconcilier la découverte avec le registre, poursuivre les actifs sans responsable et rapporter les écarts comme des constats. Elles détiennent aussi la manipulation physique : réception, préparation, stockage et mise au rebut, où les enregistrements de chaîne de traçabilité comptent.

### Direction et gouvernance

Les dirigeants et les auditeurs s'appuient sur les données d'actifs pour la maîtrise des coûts, l'assurance de sécurité et la conformité. Ils devraient demander la méthode d'exactitude et la liste des écarts, pas seulement le chiffre de titre, et financer l'automatisation de l'enregistrement. La gouvernance devrait attendre que le registre serve dans les décisions et traiter un 100 pour cent rapporté avec soupçon.

### Clients et utilisateurs

Les utilisateurs vivent la gestion des actifs quand un appareil arrive prêt, qu'une licence est là quand il le faut et qu'un ordinateur portable perdu est bien traité. Leurs retours sur l'accueil et l'équipement sont la preuve du fonctionnement du processus en pratique (voir le sujet 6.4, Expérience des utilisateurs et des employés). Ils ont aussi un rôle : dire à l'informatique quand un équipement bouge ou part.

## En pratique : un exemple d'ITIL agile

Le service informatique d'une entreprise de logistique de taille moyenne soutient environ 2 400 employés et exploite une plateforme de produit sur une infrastructure en nuage. Les chiffres ci-dessous sont illustratifs.

Un audit interne demande le nombre d'appareils et de ressources de nuage que possède l'entreprise. Le registre montre 3 100 appareils d'utilisateurs finaux et 1 850 ressources de nuage. La responsable des actifs décide de tester les chiffres avant de les rapporter. Elle tire un échantillon aléatoire de 100 appareils du registre et en trouve 87 qui correspondent sur les quatre champs convenus, soit une exactitude de 87 pour cent. Dans l'autre sens, elle tire 100 appareils de l'outil de gestion des postes de travail et en trouve 94 dans le registre. La couverture de la découverte du parc en nuage est de 82 pour cent, parce que trois comptes créés par des équipes de projet ne sont pas connectés à l'outil de découverte. Réconcilier l'export de facturation du nuage avec le registre apparie 71 pour cent des ressources facturées, et celles qui ne sont pas appariées sont surtout des environnements de test sans étiquette. La part d'actifs sans responsable est de 9 pour cent, dont un tiers détenus par des personnes parties.

L'équipe fait quatre changements avec les équipes produit et la finance. Les gabarits de la chaîne de livraison enregistrent maintenant chaque nouvel environnement et exigent un responsable et une étiquette de service. La facture mensuelle du nuage est réconciliée avec le registre, les ressources sans étiquette étant rapportées aux titulaires de comptes. Un contrôle mensuel compare l'annuaire des personnes avec les responsables d'actifs et envoie une liste aux responsables quand quelqu'un part. La réception des marchandises à l'entrepôt déclenche une mise à jour du registre le jour même. Elle change aussi la façon de rapporter : le résumé d'audit montre l'exactitude des deux sens d'échantillonnage, la liste des écarts et la part sans responsable.

Après deux trimestres, l'exactitude de l'échantillon du registre est de 93 pour cent, la réconciliation du parc en nuage de 90 pour cent et la part sans responsable de 3 pour cent. Le chef de la finance demande un seul chiffre d'« exactitude de l'inventaire » pour le conseil. La responsable des actifs donne le chiffre avec la méthode et la liste des écarts, et refuse de rapporter un objectif de 100 pour cent, expliquant que le but est de garder les écarts visibles et en diminution. La décision est consignée, et l'équipe note que le chiffre plus bas issu d'une meilleure méthode est plus utile que le chiffre antérieur non vérifié.

## Perspective sectorielle

**Startup.** Il peut n'y avoir aucun registre formel, seulement des comptes de nuage et quelques ordinateurs portables. Gardez une simple liste avec des responsables, étiquetez les ressources de nuage dès le départ et passez la liste en revue chaque mois. Évitez d'acheter une plateforme avant de savoir à quelles questions vous devez répondre.

**Petite entreprise.** Un seul administrateur peut tout gérer. Un tableur avec quelques champs peut fonctionner, si quelqu'un le vérifie deux fois par an au regard des achats. Portez attention aux licences et aux abonnements, faciles à perdre de vue, et à la mise au rebut des appareils qui contenaient des données.

**Grande entreprise.** L'échelle exige de l'automatisation, des responsables de classe clairs et une réconciliation entre plusieurs sources. Attendez-vous à ce que les acquisitions apportent des parcs inconnus, et prévoyez une manière standard de les placer sous le même enregistrement. Alignez-vous avec la finance sur la comptabilité des actifs, y compris la manière dont les [immobilisations](https://en.wikipedia.org/wiki/Fixed_asset) sont inscrites à l'actif et amorties, et convenez de l'endroit où le registre informatique et le grand livre de la finance doivent concorder.

**Gouvernement et secteur public.** Les organismes publics font face à l'audit, aux règles de marchés et aux obligations d'archivage, et détiennent souvent des données sensibles sur des appareils. Gardez les preuves de mise au rebut, documentez la chaîne de traçabilité et alignez le registre sur les rapports d'actifs exigés. Traitez le registre comme une partie de la preuve pour les audits (voir le sujet 8.3, Métriques de conformité et d'audit).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts comprennent le temps de concevoir l'enregistrement, l'outillage de découverte et de réconciliation si vous n'en avez pas, l'effort d'ingénierie pour enregistrer les actifs dans les chaînes de livraison et l'effort courant d'échantillonnage et de correction. Beaucoup d'organisations possèdent déjà des outils de découverte et de gestion des postes. Une équipe modeste peut mener un programme, et le coût courant est faible une fois l'enregistrement automatisé.

Les retours sont du gaspillage évité et du risque réduit. Des enregistrements exacts réduisent le paiement d'abonnements et de ressources inutilisés, accélèrent la réponse aux incidents et la correction parce que vous savez ce qui existe, et réduisent l'effort d'audit. Évitez d'affirmer des économies en pourcentage précises tirées d'études publiées. Mesurez votre propre ligne de base : le nombre de ressources de nuage sans responsable et leur coût mensuel, le temps pour répondre à une question d'audit et les licences payées mais inutilisées. Comptez aussi le coût du risque : un serveur inconnu est une exposition de sécurité, et un appareil perdu avec des données a un coût de notification. Le traitement financier des coûts est couvert plus loin dans cette partie (voir le sujet 7.5, Coût du service et économie unitaire).

## Antimodèles et pièges

- **Le nettoyage annuel.** Un grand effort une fois par an se dégrade en quelques semaines. Enregistrez en continu et échantillonnez chaque trimestre.
- **N'auditer que le registre.** Cela prouve que le registre concorde avec lui-même. Échantillonnez à partir d'une preuve indépendante dans les deux sens.
- **Un score parfait.** Un chiffre de 100 pour cent signifie généralement un périmètre étroit ou une preuve faible. Regardez ce qui a été exclu.
- **Des champs de responsable remplis d'une équipe fourre-tout.** Cela paraît complet et c'est inutile. Comptez la responsabilité fourre-tout comme un écart.
- **Trop de champs.** Les gens les remplissent de valeurs par défaut. Gardez l'enregistrement à ce dont les décisions ont besoin.
- **L'outil d'abord, le processus ensuite.** Une plateforme de découverte sans règles de responsabilité et de cycle de vie produit un plus grand désordre. Décidez d'abord des questions.
- **Pénaliser les équipes pour les écarts.** Elles cachent des actifs. Traitez les écarts comme des constats et corrigez la cause.
- **Oublier la mise au rebut.** Des actifs retirés qui restent au registre ou partent sans enregistrement d'effacement créent coût et risque.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Saisie | Tableurs mis à jour quand on s'en souvient | Registre pour les classes principales, surtout manuel | Enregistrement lié aux achats et aux chaînes de livraison | Enregistrement automatisé ; délai d'enregistrement mesuré | Actifs enregistrés entre équipes et fournisseurs à partir d'un seul flux d'événements |
| Exactitude | Inconnue | Comptages occasionnels | Échantillonnage indépendant trimestriel dans les deux sens | Exactitude et écarts suivis par classe et alimentant l'amélioration | Contrôles indépendants partagés entre informatique, finance et sécurité |
| Usage | Registre employé pour les audits seulement | Employé par quelques équipes | Correction, renouvellement et budget lisent dans le registre | Usage revu ; champs ajustés aux décisions | Le registre pilote des décisions automatisées sous supervision humaine |

## Liste de vérification

- [ ] Les classes d'actifs et les décisions que soutient chaque enregistrement sont listées.
- [ ] Les champs minimaux par classe sont définis et consignés dans le registre des métriques.
- [ ] Chaque classe et chaque actif a un responsable nommé, tenu à jour au regard de l'annuaire.
- [ ] Les chaînes de livraison enregistrent la nouvelle infrastructure avec un responsable et une étiquette de service.
- [ ] Les achats et la création d'abonnements déclenchent des enregistrements d'actifs.
- [ ] Les données de découverte et de facturation sont réconciliées avec le registre chaque mois.
- [ ] Un échantillon aléatoire est audité chaque trimestre dans les deux sens.
- [ ] Les listes d'écarts avec responsables et dates sont publiées avec les chiffres d'exactitude.
- [ ] La mise au rebut a une méthode consignée et une preuve d'effacement des données.
- [ ] Les champs inutilisés sont retirés ; le registre est employé dans les décisions quotidiennes.

## Prompts d'IA

**Concevez un enregistrement d'actif minimal.**

```text
Nous gérons ces classes d'actifs informatiques dans [type of organization] :
[list]. Les décisions que nos données d'actifs doivent soutenir sont : [list, for
example patching, renewal, audit, refresh, disposal]. Pour chaque classe,
proposez les champs minimaux de l'enregistrement, quelle source devrait fournir
chaque champ et comment chacun pourrait être vérifié de façon indépendante.
N'inventez pas d'exigences réglementaires. Énumérez vos hypothèses et tout ce
que je devrais confirmer avec la finance, la sécurité ou le service juridique.
```

**Planifiez un échantillon d'audit dans les deux sens.**

```text
Notre registre contient [number] actifs répartis en [classes]. Nous avons aussi
des données de découverte, d'achats et de facturation du nuage. Concevez un audit
trimestriel avec des échantillons aléatoires tirés du registre et des autres
sources, dites quelle taille devrait avoir chaque échantillon pour une lecture
utile (expliquez le raisonnement sans surestimer la précision), ce qu'il faut
consigner et comment rapporter honnêtement l'exactitude et les écarts. Énumérez
vos hypothèses.
```

**Analysez un résultat de réconciliation.**

```text
Nous avons réconcilié notre registre avec [source] et trouvé : appariés
[number], dans le registre seulement [number], dans la source seulement
[number]. Voici des exemples de chaque groupe avec les champs que nous détenons :
[paste anonymized examples]. Suggérez des raisons probables de chaque écart,
lesquelles sont rapides à corriger, lesquelles exigent un changement de
processus et ce qu'il faut vérifier d'abord. Ne supposez pas de causes que les
données ne peuvent pas étayer. Énumérez vos hypothèses.
```

**Rédigez un contrôle des départs et des mutations.**

```text
Rédigez un processus mensuel simple pour trouver les actifs dont les
responsables sont partis ou ont changé de rôle, à partir de l'annuaire des
personnes et du registre des actifs. Incluez les étapes, qui reçoit la liste, le
délai accordé pour réaffecter, ce qui se passe si personne ne répond et comment
consigner le résultat. Contexte : [tools and team size]. Énumérez vos hypothèses
et les considérations de confidentialité que je devrais vérifier.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique d'actifs avant de la rapporter.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'actifs porte son vecteur de détournement, son garde-fou et sa règle de preuve indépendante.

## Points clés à retenir

- Enregistrez les actifs au moment du changement, de préférence par les chaînes de livraison et les achats, pour que le registre soit un sous-produit du travail.
- Mesurez l'exactitude au regard d'une preuve indépendante, en échantillonnant dans les deux sens.
- Chaque actif a besoin d'un responsable, et les actifs sans responsable sont des constats.
- Gardez l'enregistrement petit et rendez-le utile dans les décisions quotidiennes.
- Rapportez les écarts, pas seulement le chiffre de titre, et méfiez-vous d'un score parfait.
- Planifiez la mise au rebut aussi soigneusement que la création.

## Références et lectures complémentaires

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
