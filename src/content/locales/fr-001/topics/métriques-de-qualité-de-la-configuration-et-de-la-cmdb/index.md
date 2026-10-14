# Métriques de qualité de la configuration et de la CMDB

**Une base de données de configuration ne justifie son existence que lorsque les gens lui font assez confiance pour l'employer lors d'un changement ou d'un incident ; mesurez donc sa qualité à la façon dont elle répond à de vraies questions, et laissez les équipes qui détiennent les services tenir leurs propres enregistrements à jour.**

## Résumé et motivation

Quand un serveur de base de données tombe en panne à trois heures du matin, quelqu'un demande quels services en dépendent. Quand une équipe planifie un changement, quelqu'un demande ce qui d'autre pourrait casser. Les réponses devraient venir d'un enregistrement des choses qui composent vos services et de la façon dont elles se connectent. Cet enregistrement est le sujet de la gestion de la configuration, et la base de données qui le porte est la base de données de gestion des configurations, généralement abrégée en CMDB.

Un [élément de configuration](https://en.wikipedia.org/wiki/Configuration_item) (CI) est tout composant qui doit être géré pour livrer un service informatique : un serveur, une application, une base de données, un équipement réseau, un compte de nuage, un contrat. Une [base de données de gestion des configurations](https://en.wikipedia.org/wiki/Configuration_management_database) stocke de l'information sur les CI, leurs attributs et les relations entre eux. Là où la gestion des actifs demande ce que vous avez, qui le détient et ce que cela coûte (voir le sujet 7.1, Métriques de gestion des actifs informatiques), la gestion de la configuration demande comment les parties s'agencent et ce qui dépend de quoi.

Les CMDB ont une réputation mitigée, et elle est méritée. Beaucoup ont été bâties comme des cartes exhaustives, remplies de données qui se dégradaient plus vite que quiconque pouvait les corriger, puis abandonnées. Les traditions agile et DevOps offrent un meilleur point de départ. Les équipes qui décrivent leur infrastructure sous forme de code disposent d'une définition faisant autorité et versionnée de ce qu'elles exploitent, et elles peuvent la publier automatiquement dans l'enregistrement partagé. L'[infrastructure en tant que code](https://en.wikipedia.org/wiki/Infrastructure_as_code) transforme l'enregistrement en sous-produit de la livraison. ITIL 4 décrit la pratique comme la gestion de la configuration des services et met l'accent sur l'information nécessaire pour soutenir les décisions, non sur l'exhaustivité pour elle-même.

La qualité d'un enregistrement de configuration comporte plusieurs parties, qui correspondent à l'idée plus large d'[intégrité des données](https://en.wikipedia.org/wiki/Data_integrity) :

- **Complétude :** les CI et les attributs qui comptent sont présents.
- **Exactitude :** ce que dit l'enregistrement correspond à la réalité.
- **Actualité :** les changements apparaissent dans l'enregistrement assez tôt pour être utiles.
- **Cohérence :** la même chose n'est pas enregistrée deux fois sous des noms différents. Apparier des enregistrements qui désignent la même chose est le problème de la [résolution d'entités](https://en.wikipedia.org/wiki/Entity_resolution).
- **Qualité des relations :** les dépendances entre CI sont présentes et justes. C'est là que se trouvent la plus grande valeur, et la plus grande dégradation.

Le test le plus profond d'une CMDB est l'usage. Un enregistrement que les gens consultent lors des incidents et des changements, et corrigent quand il est faux, est sain. Un enregistrement qui n'est qu'audité ne l'est pas. Les mesures ci-dessous associent donc des mesures de qualité à des mesures d'usage.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique avec un tour particulier : la complétude est facile à gonfler avec des valeurs par défaut, et l'exactitude est facile à revendiquer sans vérifier. Insistez sur une preuve indépendante et sur des mesures d'usage (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Partir des questions.** Décidez de ce que vous avez besoin que l'enregistrement réponde, et ne construisez que cela.
- **Préférer un enregistrement plus petit et fiable à un enregistrement plus grand et douteux.** Le périmètre grandit quand la confiance est gagnée.
- **Laisser la source de vérité alimenter l'enregistrement.** Les chaînes de livraison, les API de nuage et la découverte devraient y écrire, non des gens avec des tableurs.
- **Laisser les équipes de service détenir les enregistrements de leurs services.** Elles connaissent leurs dépendances et ressentent le coût des erreurs.
- **Mesurer par l'usage autant que par la qualité.** Un bon enregistrement est consulté.
- **Vérifier au regard de la réalité.** Testez l'enregistrement en demandant s'il prédit ce qui se passe.
- **Corriger à la source.** Un enregistrement faux est un symptôme. Trouvez le processus qui l'a laissé dériver.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Complétude des CI | Part des CI concernés dont tous les attributs requis sont renseignés avec des valeurs valides | CI concernés avec chaque attribut requis valide / CI concernés | pourcentage | CMDB, règles d'attributs | Gestion de la configuration des services ; gestion des actifs informatiques | La définition de terminé inclut la description du service | Mensuelle |
| Exactitude des CI | Part des CI échantillonnés dont l'enregistrement correspond à la preuve sur les attributs requis | CI échantillonnés correspondant sur tous les attributs requis / CI échantillonnés | pourcentage | Échantillon d'audit comparé au système en production | Gestion de la configuration des services | L'état de l'infrastructure en tant que code correspond à la réalité | Trimestrielle |
| Couverture des dépendances | Part des services critiques dont les dépendances en amont et en aval sont cartographiées et revues | services critiques avec une carte de dépendances revue dans les 90 derniers jours / services critiques | pourcentage | Relations de la CMDB et enregistrements de revue | Gestion de la configuration des services ; gestion de la disponibilité | Revue de l'architecture et de la responsabilité des services | Trimestrielle |
| Taux de réussite de la prédiction d'impact | Part des incidents et des changements où les services réellement touchés figuraient dans l'impact prédit par la CMDB | incidents ou changements où tous les services touchés avaient été prédits / incidents ou changements revus | pourcentage | Revues post-incident et enregistrements de changements comparés aux requêtes de la CMDB | Gestion des incidents ; maîtrise des changements | Constat de revue sans reproche sur des dépendances manquantes | Trimestrielle |
| Taux de CI en double | Part des CI qui en dupliquent un autre | CI signalés comme doublons par les règles d'appariement et confirmés en revue / CI concernés | pourcentage | Rapport d'appariement de la CMDB et échantillon de revue | Gestion de la configuration des services | Source unique de vérité | Mensuelle |
| Délai de mise à jour | Retard entre un changement d'un CI dans le monde réel et sa mise à jour dans la CMDB | médiane et 85e percentile des heures ou jours entre l'événement de changement et la mise à jour de la CMDB | heures ou jours | Événements de changement et de chaîne de livraison comparés aux horodatages de la CMDB | Gestion de la configuration des services ; maîtrise des changements | Enregistrement automatisé dans la chaîne de livraison | Mensuelle |
| Taux d'usage de la CMDB | Part des incidents et des changements qui référencent des CI, et, parmi eux, part où les utilisateurs rapportent que l'enregistrement a aidé | enregistrements référençant un CI valide / incidents et changements de la période ; plus part des enregistrements revus où les données du CI ont aidé | pourcentage | Outil ITSM, courte invite de retour | Gestion des incidents ; maîtrise des changements | Équipes qui emploient l'enregistrement partagé dans leur travail | Mensuelle |

Définissez et consignez le périmètre d'un « CI concerné » par classe et par criticité. Un CI n'est exact que sur les attributs que vous nommez comme requis. Le délai de mise à jour démarre à l'événement réel, comme un déploiement ou un achat, et s'arrête quand la CMDB le reflète. Le taux de réussite de la prédiction d'impact exige une étape de revue qui consigne quels services ont été réellement touchés, et il n'est aussi fiable que cette revue.

## Recommandations

### Décider à quoi sert l'enregistrement

**1. Écrivez les questions auxquelles la CMDB doit répondre.** Les questions typiques sont : de quoi dépend ce composant, qui détient ce service, qu'est-ce qui a changé récemment, qu'affecterait une panne ici et qu'est-ce qui n'est plus soutenu. Pour chaque question, nommez les classes de CI, les attributs et les relations nécessaires. Tout ce qui n'est pas nécessaire pour répondre à une question est candidat à être laissé de côté.

**2. Commencez par les services qui comptent le plus.** Choisissez la poignée de services critiques, cartographiez-les de bout en bout et réussissez cela avant d'en ajouter. Une carte fiable de dix services aide plus qu'une carte douteuse de mille. Élargissez à mesure que la confiance et l'usage croissent.

**3. Définissez simplement les classes, les attributs et les types de relations.** Une courte liste de classes de CI (service, application, base de données, hôte, réseau, ressource de nuage) et de types de relations (dépend de, s'exécute sur, se connecte à, détenu par) couvre l'essentiel des besoins. Un modèle qui essaie de tout capturer est difficile à remplir et plus difficile à interroger. Gardez un modèle écrit et modifiez-le délibérément.

### Alimenter l'enregistrement à la source

**4. Publiez depuis les chaînes de livraison et le code.** Là où l'infrastructure et les applications sont définies comme du code, faites créer, mettre à jour et retirer les CI par la chaîne de livraison à chaque changement, y compris les informations de responsabilité et de dépendance déclarées à côté du code. Traitez la déclaration comme une partie de la définition de terminé d'un service. Cela rend le délai de mise à jour proche de zéro et garde l'enregistrement aligné sur ce qui fonctionne.

**5. Employez la découverte comme second avis.** La [découverte de services](https://en.wikipedia.org/wiki/Service_discovery) réseau et de nuage trouve ce qui fonctionne réellement et comment cela se connecte. Comparez-la avec l'enregistrement déclaré. Les différences sont des constats : soit la déclaration manque quelque chose, soit quelque chose fonctionne qui ne devrait pas. La découverte seule produit des données bruitées sans responsabilité ; employez-la donc pour vérifier, non pour rédiger.

**6. Employez des identifiants stables et des règles d'appariement.** Les doublons surviennent quand des sources différentes nomment différemment la même chose. Convenez d'un identifiant unique pour chaque classe de CI, consignez les identifiants de source et faites tourner des règles d'appariement pour trouver et fusionner les doublons. Passez en revue un échantillon d'appariements à la main, car la fusion automatique peut combiner des choses différentes.

**7. Donnez à chaque équipe de service la responsabilité de sa tranche.** L'équipe qui construit et exploite un service est la mieux placée pour connaître ses dépendances et remarquer les erreurs. Facilitez-lui la tâche : un gabarit, une courte revue à la planification et un retour quand ses données servent. Les équipes centrales détiennent le modèle, les outils et les contrôles, non chaque enregistrement.

### Mesurer la qualité et l'usage

**8. Auditez l'exactitude par échantillonnage.** Chaque trimestre, tirez un échantillon aléatoire de CI et vérifiez-les au regard des systèmes en production, et un second échantillon tiré des systèmes en production pour vérifier qu'ils figurent dans l'enregistrement. Rapportez l'exactitude par classe et montrez les principales sources d'erreur. Gardez fixe la méthode d'échantillonnage pour que les tendances signifient quelque chose.

**9. Testez la carte au regard des incidents.** Après un incident ou un changement important, comparez les services réellement touchés avec ce que la CMDB avait prédit. Consignez les écarts et corrigez les dépendances manquantes. C'est le test d'exactitude le plus significatif, car il vérifie l'enregistrement au regard d'événements, et le taux de réussite s'améliore à mesure que la carte est corrigée. Employez des revues sans reproche pour que les gens signalent volontiers les écarts (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

**10. Suivez l'usage et demandez si cela a aidé.** Comptez à quelle fréquence les incidents et les changements référencent des CI, et posez aux intervenants et aux approbateurs une courte question sur l'utilité de l'enregistrement. Un taux d'usage en hausse avec des réponses positives est le signe le plus clair de valeur. Un faible taux d'usage signifie que les gens ne font pas confiance à l'enregistrement ou ne savent pas qu'il existe, et les deux se corrigent.

**11. Passez régulièrement en revue les cartes de dépendances avec les responsables.** Les dépendances changent à mesure que le logiciel évolue. Demandez aux responsables des services critiques de confirmer leurs cartes chaque trimestre, idéalement dans une conversation de planification ou d'architecture. Employez la date de confirmation comme attribut et montrez les cartes en retard.

### Rester honnête et proportionné

**12. Retirez ce que personne n'emploie.** Supprimez les classes de CI et les attributs dont aucune question n'a besoin et que personne ne consulte. Moins de champs, mieux tenus, relèvent l'exactitude. Passez le modèle en revue chaque année et consignez ce qui a été retiré et pourquoi. Un enregistrement plus petit est moins à garder vrai, et il rend les mesures de qualité plus faciles à atteindre honnêtement.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Complétude des CI | Remplir les attributs requis de valeurs par défaut ou de texte de remplissage ; rétrécir la liste requise | Compter les valeurs par défaut et de remplissage ; liste requise fixe ; échantillon d'exactitude |
| Exactitude des CI | Échantillonner les classes faciles ; auditer après un nettoyage | Échantillon aléatoire tiré indépendamment dans les deux sens ; méthode fixe |
| Couverture des dépendances | Marquer des cartes comme revues sans les lire ; ne cartographier que des dépendances triviales | Taux de réussite de la prédiction d'impact ; vérifier par échantillon une carte au regard du trafic réel |
| Taux de réussite de la prédiction d'impact | Choisir les incidents qui se sont bien passés ; consigner étroitement les services touchés | Revoir tous les incidents importants ; relecteurs extérieurs à l'équipe responsable |
| Taux de CI en double | Fusionner des CI distincts pour baisser le taux ; relâcher les règles d'appariement | Échantillonner les fusions pour leur justesse ; consigner les règles de fusion |
| Délai de mise à jour | Antidater des événements de changement ; ne compter que les mises à jour automatisées | Comparer les horodatages d'événement et de mise à jour des systèmes sources ; piste d'audit |
| Taux d'usage de la CMDB | Ajouter des références de CI par formalité ; rendre le champ obligatoire avec n'importe quelle valeur | Vérifier que les CI référencés sont pertinents ; la question de retour sur l'utilité |

Une lecture saine est un enregistrement plus petit avec une exactitude mesurée élevée, des cartes de dépendances qui prédisent les vrais incidents, un délai de mise à jour proche de zéro pour les classes automatisées et des gens qui disent employer l'enregistrement parce qu'il aide.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| CMDB exhaustive | Vue large ; soutient de nombreux cas d'usage | Coûteuse à garder vraie ; se dégrade |
| CMDB minimale, pilotée par les questions | Fiable et peu coûteuse | Lacunes ; exige de la discipline de croissance |
| Alimentation pilotée par la découverte | Trouve l'inconnu ; peu d'effort manuel | Bruitée ; sans responsabilité ni but |
| Alimentation pilotée par la chaîne de livraison | Exacte ; faible délai | Limitée à ce qui est construit par des chaînes de livraison |
| Responsabilité centrale des enregistrements | Cohérence | Lente ; éloignée de la connaissance |
| Responsabilité des enregistrements par l'équipe | Exacte et rapide | Variation ; exige des gabarits et des contrôles |
| Modèle de type graphe | Naturel pour les relations et les requêtes d'impact | Exige des compétences et de l'outillage |
| Modèle de tables relationnelles | Familier et simple | Peu commode pour les requêtes de dépendances profondes |

La réponse en prose est de commencer petit et piloté par les questions, d'alimenter depuis les chaînes de livraison avec la découverte comme second avis et de mettre les équipes de service aux commandes de leurs enregistrements. Une [base de données de graphes](https://en.wikipedia.org/wiki/Graph_database) peut rendre naturelles les questions de dépendances, bien qu'une base de données classique fonctionne si le modèle reste simple.

## Questions à discuter avec votre équipe

**1. Quelle est la dernière question à laquelle nous aurions voulu que la CMDB réponde, et pouvait-elle le faire ?**
Rappelez-vous un incident ou un changement récent où quelqu'un a cherché des dépendances. Qu'a-t-il trouvé, et que a-t-il fait à la place ? L'animateur doit consigner la question et si l'enregistrement a été consulté. Le résultat est le premier candidat au but de l'enregistrement.

**2. Si notre service le plus important tombait en panne maintenant, quelle confiance avons-nous dans l'impact prédit ?**
Demandez l'impact prédit par la CMDB et comparez-le avec ce que croient les personnes qui connaissent le service. Notez les différences. Convenez de la dépendance à vérifier d'abord et de qui la vérifiera.

**3. Qui détient l'enregistrement de chaque service, et le sait-il ?**
Listez les services critiques et les responsables de leurs entrées de CMDB. Demandez si les responsables le savent et les ont revues récemment. Là où le responsable est « l'équipe de la CMDB », discutez de la façon de transférer la responsabilité à l'équipe de service.

**4. Que remplissons-nous seulement pour satisfaire un champ obligatoire ?**
Cherchez les valeurs par défaut et les textes de remplissage. Ils montrent où le modèle demande plus que ce que quiconque sait. Décidez s'il faut retirer le champ, l'automatiser ou trouver la vraie source.

**5. Où notre enregistrement diverge-t-il de ce qui fonctionne ?**
Comparez le résultat de la découverte avec l'enregistrement pour un service. Pour chaque différence, demandez si c'est l'enregistrement ou la réalité qui devrait changer. La conversation tend à trouver à la fois des données périmées et des composants non autorisés.

**6. Qu'arrêterions-nous de consigner ?**
Listez les classes, les attributs et les relations que personne n'a employés depuis six mois. Demandez ce qui arriverait si chacun disparaissait. Convenez d'en retirer deux et d'observer si quelqu'un le remarque.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent la connaissance de ce dont dépendent leurs services et sont les mieux placées pour garder l'enregistrement vrai. Elles devraient déclarer la responsabilité et les dépendances à côté de leur code, les revoir quand la conception change et employer l'enregistrement pour planifier les changements. Une définition de terminé qui inclut la mise à jour de la description du service garde l'enregistrement près du travail.

### Équipes de service et d'exploitation

Les équipes d'exploitation consultent l'enregistrement pendant les incidents et les changements ; elles en ressentent donc d'abord les erreurs. Elles devraient signaler les écarts en revue, mener des contrôles de découverte, entretenir les règles d'appariement et donner un retour aux responsables. Elles exploitent aussi l'outillage et les échantillons d'audit.

### Direction et gouvernance

Les dirigeants veulent voir l'impact et le risque, et ils parrainent souvent de grands programmes de CMDB qui déçoivent. Ils devraient demander des preuves d'usage et d'exactitude plutôt que des comptes d'enregistrements, financer l'intégration des chaînes de livraison et accepter un périmètre plus petit bien tenu. La gouvernance devrait s'attendre à voir le taux de réussite de la prédiction d'impact et la liste des écarts.

### Clients et utilisateurs

Les utilisateurs gagnent quand les incidents sont diagnostiqués plus vite et que les changements risquent moins de casser les services dépendants. Ils voient rarement la CMDB, mais ils en voient les effets dans une communication qui nomme correctement les services touchés et dans moins de surprises après les changements. Leurs retours après les incidents montrent si l'image de l'impact était juste.

## En pratique : un exemple d'ITIL agile

Le groupe technologique d'une compagnie aérienne nationale exploite environ 300 applications et une plateforme de réservation pour les clients. Les chiffres ci-dessous sont illustratifs.

La CMDB contient 180 000 CI et a été alimentée par un outil de découverte il y a cinq ans. La cheffe de la gestion des services veut savoir si elle vaut la peine d'être gardée. Elle demande à une petite équipe de la tester. Pour la qualité, ils auditent 150 CI échantillonnés et les trouvent exacts à 71 pour cent sur les cinq attributs requis. Pour la carte, ils passent en revue les 20 derniers incidents importants et comparent les services réellement touchés avec ce que la CMDB avait prédit : elle avait prédit tous les services touchés dans 6 cas sur 20, soit un taux de réussite de 30 pour cent. Pour l'usage, 12 pour cent des incidents du dernier trimestre référençaient un CI, et dans une courte enquête auprès des intervenants, la plupart ont dit s'appuyer sur une page de wiki séparée. Les CI en double représentent 9 pour cent du total.

L'équipe prend quatre décisions avec les responsables de services. Elle réduit le périmètre aux 40 services qui portent le plus de clients, avec cinq classes de CI et quatre types de relations. Elle demande à chaque équipe de service de déclarer le responsable, les dépendances et l'emplacement d'exécution dans un court fichier gardé avec son code, que la chaîne de livraison publie dans la CMDB à chaque version. Elle fait tourner chaque semaine la découverte et rapporte les différences aux responsables. Elle ajoute un champ à la revue d'incident, « la prédiction de la CMDB était-elle juste ? », et corrige chaque écart dans les deux semaines.

Deux trimestres plus tard, la CMDB réduite compte 14 000 CI, l'exactitude sur l'ensemble échantillonné est de 92 pour cent, le délai de mise à jour de la version à l'enregistrement est inférieur à une heure pour les services dans la chaîne de livraison, et le taux de réussite sur les 12 derniers incidents est de 75 pour cent. L'usage de la CMDB dans les incidents est monté à 58 pour cent, et les intervenants disent que la page de wiki n'est plus nécessaire. Le directeur des opérations demande un plan pour faire entrer d'un coup les 260 autres applications. La cheffe de la gestion des services propose d'ajouter dix services par trimestre, après que chacun a obtenu un taux de réussite supérieur à un niveau convenu sur un incident de test, et explique que l'ancien enregistrement large n'avait jamais été digne de confiance. La décision est consignée, avec une revue chaque trimestre.

## Perspective sectorielle

**Startup.** Il y a peu de besoin d'une CMDB au-delà d'un catalogue de services et du code d'infrastructure. Gardez les responsables de services et les dépendances dans le dépôt, et générez-en une carte. N'ajoutez une base de données que lorsque les questions dépassent les fichiers.

**Petite entreprise.** Un simple schéma et une liste de systèmes avec responsables et fournisseurs peuvent suffire. Mettez-le à jour après chaque changement important. Résistez à acheter une plateforme pour un petit parc, mais gardez le schéma à jour, car il est précieux lors d'une panne.

**Grande entreprise.** L'échelle exige un modèle, une responsabilité fédérée et une intégration avec plusieurs sources, y compris les acquisitions. Standardisez les identifiants et le modèle de base, laissez les équipes l'étendre dans des règles et mesurez l'usage et l'exactitude par domaine. Attendez-vous à mener une fonction permanente d'appariement et de nettoyage.

**Gouvernement et secteur public.** Les services reposent souvent sur des systèmes de longue durée, des sous-traitants et une infrastructure partagée, et l'impact d'un incident peut toucher le public. Cartographiez explicitement les dépendances envers les fournisseurs et les plateformes partagées, gardez des enregistrements pour les audits et alignez-vous sur la planification de la continuité (voir le sujet 5.6, Métriques de continuité de service).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort de modélisation et de gouvernance, l'intégration des chaînes de livraison et de la découverte, un peu d'outillage et l'effort des audits et des corrections. Beaucoup d'organisations possèdent déjà la plateforme. L'alimentation par la chaîne de livraison est peu coûteuse une fois le gabarit en place. Les grands programmes visant à tout alimenter d'un coup ont été coûteux et ont souvent échoué.

Les retours sont des incidents plus courts, des changements plus sûrs et moins de temps passé à chercher de l'information. Bâtissez le dossier à partir de vos propres preuves : le temps que les intervenants passent à trouver des dépendances dans un incident typique, la part des incidents où l'absence d'information de dépendance a retardé le diagnostic, et les changements qui ont causé un impact inattendu. Le taux de réussite de la prédiction d'impact est une mesure directe du fait que l'enregistrement aurait aidé. Évitez les affirmations publiées sur le pourcentage d'incidents causés par le changement ou sur le coût des pannes à moins de pouvoir retracer leur source. Comptez les coûts de garder un enregistrement large et douteux face à la valeur d'un enregistrement petit et fiable.

## Antimodèles et pièges

- **Tout alimenter d'abord.** Un énorme enregistrement périmé détruit la confiance. Commencez par les services critiques.
- **La découverte comme seule source.** Elle ne peut pas dire pourquoi quelque chose existe ni qui le détient. Combinez avec des déclarations.
- **Auditer la complétude et l'appeler qualité.** Complet et faux est pire qu'incomplet et juste. Échantillonnez l'exactitude.
- **Des équipes centrales qui détiennent toutes les données.** Elles ne les connaissent pas. Donnez la responsabilité aux équipes de service.
- **Des champs obligatoires avec valeurs par défaut.** Ils paraissent complets et ne portent aucune information. Retirez-les ou automatisez-les.
- **Mesurer par le nombre de CI.** Plus n'est pas mieux. Mesurez l'exactitude, le taux de réussite et l'usage.
- **Ignorer les relations.** Sans dépendances, une CMDB est un inventaire. Investissez dans la carte des services critiques.
- **Blâmer les gens pour les écarts.** Ils cessent de les signaler. Traitez une dépendance manquée comme un constat.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Périmètre et modèle | Ce que la découverte a trouvé | Modèle défini ; périmètre large | Modèle piloté par les questions ; services critiques cartographiés | Le périmètre croît quand le taux de réussite et l'usage le justifient | Modèle fédéré entre équipes et fournisseurs ; identifiants partagés |
| Alimentation et qualité | Chargement manuel ou unique | Découverte et imports planifiés | Les chaînes de livraison publient depuis le code ; découverte comme contrôle ; audits par échantillonnage | Exactitude, délai et doublons mesurés et suivis dans le temps | Flux en temps réel avec réconciliation automatisée et confirmation par les responsables |
| Usage | Rarement consultée | Employée par quelques équipes | Référencée dans les incidents et les changements comme pratique standard | Prédiction d'impact testée au regard des incidents ; usage et utilité suivis | L'enregistrement éclaire des décisions automatisées et des cartes partagées avec les fournisseurs |

## Liste de vérification

- [ ] Les questions auxquelles la CMDB doit répondre sont écrites.
- [ ] Le périmètre est limité aux services critiques, avec une règle de croissance définie.
- [ ] Le modèle a un petit ensemble de classes, d'attributs et de types de relations.
- [ ] Chaque service critique a un responsable qui a confirmé son enregistrement au dernier trimestre.
- [ ] Les chaînes de livraison publient les changements de CI pour les services construits comme du code.
- [ ] Les résultats de la découverte sont comparés à l'enregistrement et les différences sont revues.
- [ ] Un échantillon aléatoire d'exactitude est audité chaque trimestre dans les deux sens.
- [ ] Les revues d'incidents consignent si l'impact prédit était juste.
- [ ] L'usage de la CMDB dans les incidents et les changements est suivi, avec une question d'utilité.
- [ ] Les classes et attributs inutilisés sont retirés selon un calendrier.

## Prompts d'IA

**Définissez les questions et le périmètre.**

```text
Nous exploitons [type of organization and services]. Situations typiques où
nous avons besoin d'information de configuration : [list incidents, changes,
audits]. Rédigez une liste des questions auxquelles notre CMDB devrait
répondre, des classes de CI, des attributs et des relations nécessaires pour
chacune, et un périmètre de départ minimal des services les plus critiques.
N'inventez pas d'outillage. Énumérez vos hypothèses et ce qu'il faut confirmer
avec les responsables de services.
```

**Analysez un écart de prédiction d'impact.**

```text
Après l'incident [description], la CMDB avait prédit ces services touchés :
[list], et les services réellement touchés étaient : [list]. Expliquez les
raisons possibles de chaque différence (dépendance manquante, relation fausse,
données périmées, dépendance indirecte), suggérez comment vérifier chacune et
proposez une correction à la source. Ne supposez pas de causes que
l'information ne peut pas étayer. Énumérez vos hypothèses.
```

**Concevez un fichier de déclaration pour les équipes de service.**

```text
Proposez une courte déclaration lisible par un humain qu'une équipe de service
garde avec son code pour décrire le service à la CMDB : responsable, contact de
soutien, palier, dépendances, emplacement d'exécution et classification des
données. Incluez des règles de validation que la chaîne de livraison pourrait
appliquer et un exemple minimal pour [type of service]. Tenez-vous-en à ce que
les questions de [paste questions] exigent. Énumérez vos hypothèses et les
champs à revoir avec la sécurité.
```

**Planifiez un audit trimestriel d'exactitude.**

```text
Notre CMDB contient [number] CI dans ces classes : [list]. Concevez un audit
trimestriel avec des échantillons aléatoires tirés dans les deux sens (de la
CMDB vers la réalité, et de la réalité vers la CMDB), dites quoi vérifier pour
chaque classe, comment rapporter honnêtement l'exactitude et les sources
d'erreur, et comment éviter de corriger nos propres devoirs. Ne surestimez pas la
précision statistique. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de qualité de la configuration.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de CMDB porte son vecteur de détournement, son garde-fou et sa règle de preuve indépendante.

## Points clés à retenir

- Bâtissez la CMDB pour répondre à des questions nommées sur les services qui comptent le plus, et faites-la grandir à mesure que la confiance grandit.
- Alimentez-la depuis les chaînes de livraison et le code, employez la découverte comme second avis et laissez les équipes de service détenir leurs enregistrements.
- Testez la qualité au regard d'événements : comparez l'impact prédit avec ce qui s'est réellement passé lors des incidents.
- Mesurez l'usage et l'utilité, non le nombre de CI.
- Échantillonnez l'exactitude à partir d'une preuve indépendante dans les deux sens.
- Retirez ce que personne n'emploie, et corrigez les erreurs à leur source.

## Références et lectures complémentaires

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
