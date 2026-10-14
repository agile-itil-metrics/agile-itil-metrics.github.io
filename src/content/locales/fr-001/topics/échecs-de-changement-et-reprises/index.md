# Échecs de changement et reprises

**Définissez une fois par écrit ce qu'est un « changement échoué », reliez chaque échec au changement qui l'a causé, et lisez l'échec et la reprise avec la vitesse, afin qu'un chiffre plus bas signifie un changement plus sûr et jamais simplement moins de signalements.**

## Résumé et motivation

Chaque changement apporté à un service en production comporte une certaine chance de dégrader les choses. Les questions pratiques sont : à quelle fréquence cela arrive, combien de travail non planifié cela crée et à quelle vitesse l'équipe se rétablit. Ce sujet couvre les mesures qui y répondent : la part de changements qui échouent, la part qui passent par une voie d'urgence, les taux de retour en arrière et de correctifs urgents, et la reprise qui suit un mauvais changement. Il couvre aussi la partie la moins glorieuse du sujet, qui est de convenir de ce qui compte comme un échec.

Quelques termes d'abord. Dans [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratique appelée maîtrise des changements couvre l'ajout, la modification ou le retrait de tout ce qui pourrait affecter un service. Un **changement** est donc plus large qu'un déploiement de code : il inclut une modification de configuration, un renouvellement de certificat, une règle de pare-feu ou une migration de base de données. Un **changement standard** est préautorisé et à faible risque, un **changement normal** passe par une évaluation, et un **changement d'urgence** est fait d'urgence, généralement pour rétablir un service ou combler une vulnérabilité grave. Un **déploiement** est l'acte de mettre une version d'un logiciel dans un environnement, tandis qu'une **mise en production** rend une capacité disponible aux utilisateurs. Les équipes qui emploient une [bascule de fonctionnalité](https://en.wikipedia.org/wiki/Feature_toggle) peuvent déployer du code sans le mettre en production (voir le sujet 4.5, Métriques des versions et des déploiements).

Un **échec de changement** est un changement qui entraîne une dégradation du service ou exige une remédiation. La remédiation prend plusieurs formes. Un [retour en arrière](https://en.wikipedia.org/wiki/Rollback_(data_management)) ramène le système à son état antérieur. Un [correctif urgent](https://en.wikipedia.org/wiki/Hotfix) est un correctif urgent appliqué hors du rythme normal des versions. Une correction en avant livre un nouveau changement par-dessus le changement défectueux. La [reprise](https://en.wikipedia.org/wiki/Rework) est l'effort non planifié consacré à refaire ou réparer quelque chose qui était censé être terminé. Dans un cadre de [livraison continue](https://en.wikipedia.org/wiki/Continuous_delivery), où de petits changements vont souvent en production, ces mesures sont la principale preuve de savoir si la vitesse coûte de la stabilité.

Les deux traditions regardent le même événement différemment. La vision ITIL s'organise autour de l'enregistrement de changement : le changement a-t-il été autorisé, a-t-il réussi et le résultat a-t-il été consigné ? Un changement qui réussit sur le papier peut quand même causer un incident une heure plus tard. La vision agile s'organise autour de l'élément de travail et du déploiement : la définition de terminé de l'équipe a-t-elle tenu, et le changement a-t-il causé du travail non planifié peu après ? Aucune vision n'est complète seule. La recherche derrière le programme DORA traite le taux d'échec des changements et le taux de reprise des déploiements comme les deux mesures d'« instabilité » à côté des mesures de débit (voir le sujet 2.8, Métriques DORA, qui les définit au niveau du programme). Ce sujet va plus loin sur la mécanique : comment définir l'échec, comment rattacher les incidents aux changements, comment le travail d'urgence est compté et comment les chiffres sont détournés.

Un avertissement s'applique dès le début. Ces mesures décrivent une équipe, un service ou une chaîne de livraison. Elles ne décrivent jamais une personne. Un taux d'échec des changements attaché à un ingénieur individuel apprend aux gens à éviter le travail risqué et précieux, à scinder les changements jusqu'à ce que les comptes paraissent bons et à cesser de signaler les problèmes (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) mord fort ici, car « moins d'échecs » s'obtient facilement en consignant moins d'échecs.

Le calendrier des incidents relève du sujet 3.3, Temps de réponse et de résolution des incidents, les pires incidents du sujet 3.4, Métriques des incidents majeurs, le flux d'approbation et la part de changements standard du sujet 4.3, Métriques de maîtrise des changements, les causes profondes du sujet 4.1, Métriques de gestion des problèmes, et la revue écrite du sujet 4.2, Métriques des analyses post-incident et de l'apprentissage.

## Principes clés

- **L'échec exige une seule définition écrite.** Les équipes qui décident au cas par cas produisent des chiffres qui ne peuvent être ni suivis dans le temps ni comparés, et la discussion sur la définition remplace la discussion sur le travail.
- **Un échec doit être traçable jusqu'à son changement.** Sans lien consigné entre un incident, un retour en arrière ou un correctif urgent et le changement qui l'a causé, le taux d'échec est une devinette.
- **Compter chaque voie de remédiation.** Retour en arrière, correctif urgent, correction en avant et contournement manuel sont quatre routes vers le même événement. Une métrique qui n'en compte qu'une récompense les équipes qui en choisissent une autre.
- **Lire l'échec à côté de la vitesse et du rétablissement.** Un taux d'échec des changements isolé peut être amélioré en changeant moins souvent, ce qui est rarement le but. Associez-le au délai de livraison, à la fréquence de déploiement et au temps de rétablissement.
- **Les petits échantillons demandent des comptes, pas seulement des pourcentages.** Une équipe avec huit changements dans un mois et un échec a un taux d'échec de 12,5 pour cent qui ne dit presque rien ; montrez donc les comptes et employez une fenêtre plus longue (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **L'urgence est un signal, non un péché.** Une part régulière et expliquée de changements d'urgence est normale. Une part en hausse désigne généralement des problèmes de qualité en amont, de planification ou de détection.

## Définitions des métriques

Les mesures d'échec et de reprise dépendent de la jointure de l'enregistrement de changement, du journal de déploiement et de l'outil d'incidents. Chaque définition ci-dessous énonce ce qui est compté, ce qui est exclu et où l'horloge démarre et s'arrête. Les équipes devraient copier les définitions dans leur registre des métriques et les ajuster avec un motif énoncé.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux d'échec des changements | Part des changements en production qui causent une dégradation du service ou exigent une remédiation | changements ayant exigé un retour en arrière, un correctif urgent, une correction en avant ou un incident lié dans la fenêtre d'échec / tous les changements en production accomplis dans la période ; la fenêtre démarre à l'achèvement du changement et s'arrête après un nombre fixe de jours (par exemple 7), écrit dans le registre des métriques ; les changements encore dans la fenêtre sont rapportés séparément et exclus du taux jusqu'à la fermeture de la fenêtre | pourcentage | Enregistrements de changements ou journal de déploiement joints à l'outil d'incidents et à la liste des correctifs urgents | Maîtrise des changements ; gestion des incidents | Définition de terminé ; défauts échappés | Mensuelle, sur une fenêtre glissante de 90 jours |
| Part de changements d'urgence | Part des changements faits par la voie d'urgence | changements consignés comme d'urgence / tous les changements accomplis dans la période ; urgence signifie que l'évaluation normale a été contournée ou raccourcie pour cause d'urgence, et les changements standard préautorisés sont exclus des deux comptes | pourcentage | Champ de type de l'enregistrement de changement | Maîtrise des changements | Travail non planifié et classe de service accélérée | Mensuelle |
| Taux de retour en arrière | Part des changements qui ont été annulés pour revenir à une version antérieure | changements annulés après avoir atteint la production / tous les changements en production de la période ; un retour en arrière fait avant que le changement ait atteint un utilisateur (par exemple un déploiement canari arrêté à sa première étape) est compté séparément | pourcentage | Journal de déploiement et outil de mise en production | Gestion des versions ; gestion des déploiements | Pratiques de chaîne de livraison et de mise en production | Mensuelle |
| Taux de correctifs urgents | Part des changements qui sont des correctifs urgents appliqués hors du flux normal de mise en production | changements étiquetés ou branchés comme correctif urgent / tous les changements en production de la période ; le dénominateur inclut les correctifs urgents eux-mêmes | pourcentage | Branches ou étiquettes du contrôle de versions et journal de déploiement | Maîtrise des changements ; gestion des incidents | Travail non planifié ; accéléré | Mensuelle |
| Taux de reprise des déploiements | Part des déploiements qui étaient des corrections non planifiées d'un problème d'un déploiement antérieur | déploiements en production qui corrigent un défaut ou un échec d'un déploiement antérieur récent, dans la même fenêtre d'échec / tous les déploiements en production de la période ; le travail de suivi planifié de la feuille de route est exclu | pourcentage | Journal de déploiement avec un lien ou une étiquette « corrige », et le suivi du travail | Maîtrise des changements ; amélioration continue | Reprise ; défauts échappés ; demande d'échec | Mensuelle |
| Taux de liaison changement-incident | Part des incidents résolus qui consignent si un changement les a causés, et lequel | incidents avec un champ « causé par un changement » rempli (oui ou non, plus l'identifiant du changement si oui) / incidents résolus dans la période ; l'horloge s'arrête à la clôture de l'incident | pourcentage | Outil d'incidents et enregistrements de changements | Gestion des incidents ; maîtrise des changements | Revue post-incident ; définition de terminé | Mensuelle |
| Concordance sur la définition d'échec | Accord entre deux relecteurs sur la question de savoir si un échantillon de changements a échoué | changements échantillonnés pour lesquels deux relecteurs indépendants parviennent au même verdict d'échec en employant la définition écrite / changements échantillonnés ; un échantillon d'au moins 20 changements tirés au hasard chaque trimestre | pourcentage | Feuille de revue d'échantillon gardée avec le registre des métriques | Amélioration continue ; mesure et rapport | Rétrospective | Trimestrielle |

Deux remarques sur le tableau. Le taux d'échec et le taux de reprise se recoupent mais diffèrent : un échec annulé sans nouveau déploiement compte dans le taux d'échec et non dans le taux de reprise. Et l'unité est le changement ou le déploiement, non l'incident, parce qu'un changement peut causer trois incidents et qu'un incident peut venir de trois changements.

## Recommandations

### Écrire la définition de l'échec avant de collecter des données

**Convenez de ce que « échoué » veut dire et mettez-le dans le registre des métriques.** Une définition praticable est qu'un changement a échoué si, dans une fenêtre énoncée après son achèvement, il a été annulé, a exigé un correctif urgent ou une correction en avant, ou a été lié à un incident d'une gravité énoncée ou supérieure. Énoncez la fenêtre (7 jours est courant, et la bonne valeur dépend de la rapidité avec laquelle vos services montrent des problèmes), le seuil de gravité de l'incident et qui tranche en cas de litige. Écrivez au moins cinq exemples travaillés, y compris des cas délicats comme un changement qui a dégradé les performances sans aucune panne. Revoyez la définition chaque année et consignez les changements avec leurs motifs, afin qu'une courbe de tendance puisse être rétablie si la règle bouge.

### Lier les échecs aux changements dans l'enregistrement d'incident

**Ajoutez un champ obligatoire à l'enregistrement d'incident : causé par un changement, oui ou non, et l'identifiant du changement si oui.** Le champ devrait être rempli pendant la résolution et vérifié dans la revue post-incident (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). Suivez le taux de liaison comme sa propre métrique. Si la moitié seulement des incidents portent le champ, le taux d'échec sous-estime la vérité d'une quantité inconnue, et vous devriez le dire à côté du chiffre. Automatisez la première hypothèse là où vous le pouvez, par exemple en listant les changements accomplis sur le service touché dans les heures précédant le début de l'incident, et laissez un humain la confirmer.

### Compter toutes les voies de remédiation, pas une seule

**Définissez un échec à partir de plusieurs signaux.** Tirez les retours en arrière de l'outil de déploiement, les correctifs urgents du contrôle de versions ou du journal des versions, les corrections en avant du lien « corrige » et les incidents de l'outil d'incidents, puis dédupliquez par changement. Une équipe qui ne compte que les retours en arrière verra les échecs disparaître le jour où elle passera à la correction en avant. Gardez aussi chaque voie comme ventilation séparée, car le mélange raconte une histoire : beaucoup de correctifs urgents et peu de retours en arrière suggèrent que le retour en arrière est difficile, ce qui vaut d'être corrigé en soi.

### Traiter la part de changements d'urgence comme une question, non comme un score

**Passez en revue les changements d'urgence en groupe, non comme un objectif.** Chaque trimestre, lisez-les tous et classez les raisons : rétablir un service, combler une vulnérabilité, une demande tardive de l'entreprise, une étape de planification manquée ou une voie d'approbation trop lente pour le travail ordinaire. Les deux dernières sont des problèmes de système qui devraient être corrigés en améliorant la voie standard, afin que les gens n'aient pas besoin de la contourner (voir le sujet 4.3, Métriques de maîtrise des changements). Une part nulle est suspecte, car de véritables urgences surviennent. Une part qui monte régulièrement mérite un enregistrement de problème (voir le sujet 4.1, Métriques de gestion des problèmes).

### Mesurer la reprise comme une demande d'échec

**Suivez la reprise comme le travail créé par un échec antérieur.** L'idée de demande d'échec vient de la conception de services : une demande qui existe parce que quelque chose n'a pas été bien fait du premier coup. En termes de livraison, comptez les déploiements et les éléments de travail dont le seul but est de corriger un changement récent. Cela se rattache directement à la répartition entre travail planifié et non planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié). Employez la part de capacité dépensée en reprise comme point de départ de la conversation avec le responsable de produit, car elle transforme un taux abstrait en arbitrage sur ce qu'il faut travailler ensuite.

### Rapporter les taux avec des comptes, des distributions et une fenêtre

**Montrez les comptes à côté des pourcentages, et employez une fenêtre glissante.** Un taux d'échec mensuel pour une équipe qui déploie dix fois est bruité. Employez une fenêtre glissante de 90 jours, montrez le nombre de changements et d'échecs derrière le taux et donnez une idée approximative de l'incertitude (voir le sujet 1.6, Culture statistique pour les métriques de service). Pour le rétablissement, montrez la médiane et le 85e percentile du temps entre l'échec et la restauration plutôt qu'une moyenne. Quand un service a très peu de changements, racontez l'histoire avec une liste des échecs réels plutôt qu'avec un taux.

### Associer l'échec à la vitesse pour que l'amélioration ne puisse se cacher dans aucun des deux

**Affichez toujours le taux d'échec des changements à côté du délai de livraison et de la fréquence de déploiement.** Si le taux d'échec baisse pendant que la fréquence de déploiement baisse aussi fortement et que le délai s'allonge, l'équipe regroupe peut-être les changements, ce qui augmente le risque de chacun. Si la vitesse monte et que le taux d'échec tient, le système s'améliore en matière de changement. L'association est la principale défense contre le détournement et contre la croyance confortable que moins de déploiements en font des plus sûrs (voir le sujet 2.8, Métriques DORA).

### Se servir des chiffres pour améliorer le changement lui-même

**Transformez les données d'échec en expériences d'ingénierie.** Regardez les traits communs des changements échoués : taille, heure du jour, type, nombre de personnes impliquées, s'ils touchaient des composants partagés et si la couverture de tests était mince. Puis essayez une petite expérience réversible comme des lots plus petits, des [tests de régression](https://en.wikipedia.org/wiki/Regression_testing) automatisés pour un domaine risqué, une [mise en production canari](https://en.wikipedia.org/wiki/Canary_release) pour le prochain changement risqué ou une bascule de fonctionnalité qui sépare le déploiement de la mise en production. Mesurez de nouveau après une fenêtre complète. Le but est un meilleur changement, et une métrique améliorée n'en est que la preuve.

### Passer les métriques en revue ensemble dans un forum sans reproche

**Tenez chaque mois une revue des changements échoués avec les personnes qui les ont faits.** L'ordre du jour comporte trois points : les comptes et la tendance, deux ou trois changements échoués choisis pour étude et une action d'amélioration avec un responsable. Employez la pratique de revue sans reproche, afin que les gens décrivent ce qu'ils savaient à l'époque. Publiez les notes de revue avec les métriques. Si les gens hésitent à signaler des échecs à cause de la manière dont les chiffres sont employés, corrigez cela avant de changer quoi que ce soit d'autre (voir le sujet 11.3, Déployer les métriques sans semer la peur).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux d'échec des changements | Rétrécir la fenêtre d'échec ; ne pas lier les incidents aux changements ; classer un mauvais changement comme « demande de service » ou « maintenance » ; corriger en avant et l'appeler un nouveau changement ; regrouper de nombreuses modifications en un changement pour qu'un échec les couvre toutes | Taux de liaison changement-incident ; audit trimestriel par échantillon au regard de la liste des incidents ; concordance sur la définition d'échec ; délai de livraison et fréquence de déploiement à côté |
| Part de changements d'urgence | Acheminer un travail urgent par la voie standard avec une fausse note de risque ; acheminer un travail ordinaire comme urgent pour éviter l'approbation ; scinder une urgence en plusieurs changements normaux | Lecture trimestrielle de tous les changements d'urgence ; raisons classées et revues ; part de changements standard et délai d'approbation (voir le sujet 4.3, Métriques de maîtrise des changements) |
| Taux de retour en arrière | Corriger en avant pour éviter de consigner un retour en arrière ; garder en ligne une version défectueuse ; retenir des changements hors de la production pour qu'il n'y ait rien à annuler | Taux de correctifs urgents et taux de reprise à côté ; distribution du temps de rétablissement ; échantillon d'incidents au regard du journal de déploiement |
| Taux de correctifs urgents | Ne pas étiqueter les correctifs urgents ; les faire passer par la branche normale ; appeler un correctif urgent « une petite amélioration » | Taux de reprise des déploiements ; audit des branches et des étiquettes ; part de travail non planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié) |
| Taux de reprise des déploiements | Ne pas lier les corrections au déploiement d'origine ; étiqueter une correction comme « planifiée » ; regrouper la correction avec de nouvelles fonctions | Lien « corrige » obligatoire sur les déploiements correctifs ; revue par échantillon des déploiements étiquetés planifiés ; taux d'échec des changements à côté |
| Taux de liaison changement-incident | Remplir le champ par « non » sans vérifier ; laisser le champ par défaut à « non » ; clore des incidents en bloc pour relever le pourcentage | Vérification par échantillon des réponses « non » dans la revue post-incident ; pas de valeur par défaut ; commentaires de relecteurs sur un échantillon |
| Concordance sur la définition d'échec | Choisir des exemples faciles pour l'échantillon ; des relecteurs qui sont les personnes mesurées ; assouplir la définition pour que tous s'accordent | Échantillon aléatoire tiré par quelqu'un d'extérieur à l'équipe ; inclure exprès des cas limites ; publier les désaccords et corriger la définition |

Une lecture saine ressemble à ceci : le taux d'échec se situe dans une plage que l'équipe comprend et explique, le taux de liaison est assez élevé pour qu'on puisse se fier au taux d'échec, les changements d'urgence sont peu nombreux et expliqués, et les retours en arrière et les correctifs urgents sont courts et répétés. Les échecs sont signalés vite et discutés sans reproche. Un taux d'échec anormalement bas avec un faible taux de liaison, une fréquence de déploiement en baisse et des tailles de lots croissantes est un avertissement, non un succès. Traitez toute amélioration soudaine comme une invitation à vérifier d'abord l'instrument (voir le sujet 1.5, Sources de données et instrumentation).

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Définition stricte et automatisée de l'échec | Cohérente, peu coûteuse à répéter, facile à suivre dans le temps | Manque les dégradations subtiles ; peut compter des retours en arrière bénins comme des échecs |
| Revue fondée sur le jugement de chaque changement | Capture le contexte et la gravité | Lente, subjective, ouverte à la pression et à la dérive |
| Longue fenêtre d'échec (semaines) | Attrape les échecs tardifs | Brouille la cause et l'effet ; les changements récents ne peuvent pas encore être rapportés |
| Compter toutes les voies de remédiation | Difficile à détourner en changeant de voie | Exige de joindre soigneusement plusieurs sources de données |

Employez une définition automatisée comme base, ajoutez une revue humaine par échantillon et améliorez la jointure entre changements et incidents avant de construire quoi que ce soit d'autre.

## Questions à discuter avec votre équipe

**1. Qu'est-ce qui compte exactement comme un changement échoué ici, et deux d'entre nous pourraient-ils être en désaccord sur le même changement ?**
Prenez cinq changements récents et demandez à chaque personne de voter pour dire s'ils ont échoué. Comparez les votes et les raisons. Les désaccords montrent où la définition écrite est mince. Convenez d'une règle pour les cas délicats, comme une baisse de performance sans panne, et écrivez-la avec un exemple.

**2. Comment savons-nous quels incidents ont été causés par un changement ?**
Demandez comment le lien est consigné aujourd'hui, et qui le renseigne. Passez en revue dix incidents récents et voyez combien ont un changement attaché, et combien devraient l'avoir. Discutez de la question de savoir si le champ est facultatif, s'il vaut « non » par défaut et qui le vérifie. L'animateur doit viser une amélioration concrète de l'enregistrement, comme un champ obligatoire sans valeur par défaut.

**3. Quelles voies de remédiation employons-nous, et toutes sont-elles comptées ?**
Listez retour en arrière, correctif urgent, correction en avant, contournement manuel et bascule de fonctionnalité désactivée. Pour chacune, demandez où l'événement est consigné et s'il alimente le taux d'échec. Remarquez les voies qui ne laissent aucune trace. La discussion révèle souvent que la voie préférée de l'équipe est celle que la métrique ne peut pas voir.

**4. Quand a eu lieu notre dernier changement d'urgence, et aurait-il pu être évité ?**
Parcourez les trois ou quatre derniers. Demandez ce qui a rendu chacun urgent, ce qui était connu plus tôt et à quoi aurait ressemblé une meilleure voie standard. Séparez les vraies urgences des découvertes tardives et des approbations lentes. Convenez d'une correction de la voie ordinaire qui supprimerait une raison récurrente d'urgence.

**5. Quelle part de notre semaine va à corriger des changements récents ?**
Estimez la part de capacité dépensée en reprise au cours des quatre dernières semaines, en vous servant du suivi plutôt que de la mémoire. Comparez l'estimation avec le suivi. Parlez de ce que le chiffre coûte en travail planifié et de la manière dont le responsable de produit s'en servirait. Choisissez un schéma d'échec et une expérience pour le réduire.

**6. Si notre taux d'échec baissait de moitié le trimestre prochain, le croirions-nous ?**
Imaginez le titre et demandez ce qui devrait aussi être vrai : taux de liaison stable, fréquence de déploiement stable, rétablissement rapide et pas de nouvelles catégories de « maintenance ». Discutez de celles de ces vérifications que l'équipe fait déjà et de celles qui manquent. Convenez de la manière dont une amélioration soudaine sera examinée avant d'être célébrée.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent les changements ; elles détiennent donc la définition de l'échec et les corrections. Partez du travail : regardez les changements échoués dans la revue, trouvez les traits communs et essayez de plus petits lots, de meilleurs tests ou des bascules. Suivez la reprise sur le tableau, afin que les corrections non planifiées soient visibles à côté du travail planifié. Gardez les chiffres pour l'apprentissage de l'équipe elle-même, et résistez à partager des données au niveau individuel. Si une métrique est montrée aux dirigeants, l'équipe devrait pouvoir expliquer chaque changement qu'elle contient.

### Équipes de service et d'exploitation

Les équipes d'exploitation voient les conséquences du changement dans la file d'incidents et sont les mieux placées pour maintenir le lien entre incidents et changements. Elles peuvent ajouter le champ obligatoire, le vérifier à l'étape de résolution et transmettre les résultats à l'équipe de livraison sans reproche. L'exploitation détient aussi la voie d'urgence et devrait passer en revue son usage. Partagez l'information sur les voies de rétablissement et répétez les retours en arrière avec les équipes de livraison, car le meilleur moyen de réduire le coût de l'échec est une habitude partagée de rendre le changement réversible (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Direction et gouvernance

Les dirigeants devraient demander des tendances par service, les deux sortes de mesures d'instabilité avec la vitesse et les expériences d'amélioration derrière elles. Évitez les objectifs fixes comme « taux d'échec inférieur à 5 pour cent », qui invitent à la redéfinition, et évitez d'employer les chiffres dans les évaluations individuelles. Les instances de gouvernance peuvent employer les données comme preuve qu'une voie d'approbation plus légère est sûre, en vérifiant que l'échec et le rétablissement sont restés stables quand les contrôles ont été relâchés. Une tendance à la hausse des changements d'urgence est un signal pour regarder la planification et la conception des approbations, non pour blâmer les ingénieurs d'astreinte.

### Clients et utilisateurs

Les clients se moquent du taux d'échec. Ils se soucient de savoir si le service tombe en panne après une mise à jour et à quelle vitesse il revient. Les données d'échec soutiennent une communication honnête : préavis des changements risqués, messages d'état clairs quand un changement cause des ennuis et engagement visible d'apprendre. Là où les utilisateurs dépendent d'un service pour des tâches critiques, convenez à l'avance avec eux de fenêtres de maintenance et d'attentes de retour en arrière (voir le sujet 3.4, Métriques des incidents majeurs).

## En pratique : un exemple d'ITIL agile

Le service informatique d'un prestataire de santé régional exploite un service de planification des patients. Une équipe produit de sept personnes met en production des changements plusieurs fois par semaine, et une équipe d'exploitation de cinq personnes traite les incidents et le processus de changement. Tous les chiffres de cet exemple sont illustratifs.

Sur un trimestre, le rapport mensuel montre un taux d'échec des changements de 4 pour cent, contre 11 pour cent le trimestre précédent. Le directeur des systèmes d'information est content. La responsable de la plateforme n'est pas convaincue, car l'équipe d'astreinte dit que ses nuits ne se sont pas améliorées. Elle demande à l'équipe de mener l'audit par échantillon prévu dans le registre des métriques.

L'audit prend 30 changements au hasard et deux relecteurs appliquent la définition écrite. Ils s'accordent sur 24 des 30 verdicts, de sorte que la concordance sur la définition d'échec est de 80 pour cent (illustratif). Ils comparent ensuite l'échantillon avec la liste des incidents. Sur 22 incidents résolus dans le trimestre, 9 seulement portent le champ « causé par un changement », soit un taux de liaison de 41 pour cent. En lisant les 13 autres à la main, les relecteurs en trouvent 5 qui ont commencé dans la journée suivant un changement. Le compte corrigé relève le taux d'échec à environ 9 pour cent, et l'audit trouve pourquoi le chiffre paraissait bon : une nouvelle habitude de déployer des corrections sous l'étiquette « maintenance », que le rapport excluait du dénominateur comme du numérateur.

Le risque de détournement est l'étiquette, et personne ne l'avait planifié. On avait dit à l'équipe que les échecs étaient une préoccupation, et « maintenance » évitait une conversation. L'équipe prend trois décisions. Le champ « causé par un changement » devient obligatoire sans valeur par défaut, et la revue post-incident le vérifie. L'étiquette « maintenance » est retirée, et les déploiements correctifs doivent porter un lien vers le changement qu'ils corrigent, ce qui alimente le taux de reprise. La définition de l'échec est réécrite avec six exemples travaillés, dont une régression de requête lente qui n'avait jamais causé de panne.

Le trimestre suivant montre un taux d'échec rétabli de 8 pour cent et un taux de liaison de 90 pour cent (illustratif). Le rapport de la direction montre maintenant les comptes, le taux de liaison et le taux de reprise à côté du délai de livraison, et le directeur des systèmes d'information cesse de citer un pourcentage unique.

## Perspective sectorielle

**Startup.** Les changements sont petits et fréquents, et l'équipe connaît souvent chaque échec par cœur. Gardez la définition à un paragraphe, étiquetez les retours en arrière et les correctifs urgents dans l'outil de déploiement et passez en revue les échecs à la rétrospective hebdomadaire. Un taux d'échec sur 20 changements est bruité ; employez donc une liste d'échecs comme preuve principale. Le risque est l'informalité : sans définition écrite, le taux change selon la personne qui compte.

**Petite entreprise.** Les mêmes personnes déploient, exploitent et soutiennent ; la reprise concurrence donc directement le travail planifié. Consignez les échecs dans l'outil que vous employez déjà, ajoutez un champ obligatoire à l'enregistrement d'incident et passez en revue les changements d'urgence chaque trimestre. Évitez une lourde approbation uniquement pour améliorer les chiffres. Une liste de contrôle partagée de retour en arrière vaut plus qu'un comité des changements.

**Grande entreprise.** De nombreuses équipes, fournisseurs et outils signifient de nombreuses définitions. Standardisez la définition de l'échec et le champ de liaison entre équipes, publiez-les dans le catalogue des métriques et calculez les taux par service avant de consolider. Employez des audits par échantillon pour trouver les divergences, et traitez les enregistrements de changements de chaque fournisseur comme une autre source avec sa propre qualité (voir le sujet 1.5, Sources de données et instrumentation). Veillez à ce que les consolidations ne se transforment jamais en classements d'équipes.

**Gouvernement et secteur public.** Les enregistrements de changements servent l'audit et la redevabilité, et les retours en arrière peuvent être contraints par la loi, les marchés ou des plateformes partagées. Gardez l'enregistrement formel et ajoutez-y le lien d'échec. Expliquez soigneusement les chiffres aux organes de contrôle, avec des comptes et du contexte, car un seul échec dans un service critique peut attirer une attention disproportionnée. Employez les données pour justifier des voies plus légères pour le changement à faible risque, avec la preuve que l'échec et le rétablissement sont restés stables.

## Dossier d'affaires : motivations, ROI et TCO

La motivation est le coût du changement échoué : travail d'incident, reprise, éléments de feuille de route retardés et perte de confiance des utilisateurs. Beaucoup d'organisations ne peuvent pas dire quelle part de leur effort va à réparer des changements récents, et une mesure de reprise fournit la première réponse honnête. Il y a aussi un bénéfice indirect. Les équipes qui peuvent montrer que le changement est sûr peuvent défendre une approbation plus légère, ce qui raccourcit le délai de livraison. La recherche DORA rapporte une association entre l'approbation externe lourde et une moins bonne performance de livraison (voir le sujet 4.3, Métriques de maîtrise des changements), et les données d'échec sont le moyen par lequel une équipe teste cette affirmation au regard de son propre historique.

Le coût de collecte est modeste si les bases existent : un champ obligatoire dans l'enregistrement d'incident, des déploiements correctifs étiquetés, une jointure de trois sources de données et une revue mensuelle. Le coût le plus grand est l'attention, car quelqu'un doit détenir la définition, mener les audits et agir sur les constats. Évitez d'acheter un outil avant que la définition et le lien fonctionnent à la main.

Le retour se voit dans moins d'échecs répétés, un rétablissement plus court, moins de travail non planifié et de meilleures conversations avec la gouvernance. Ne promettez pas de pourcentage. Estimez plutôt votre propre ligne de base : comptez les heures passées en reprise et en réponse aux incidents liées aux changements sur un trimestre, évaluez-les au taux interne habituel et comparez après les améliorations. Énoncez les hypothèses, et rapportez le résultat comme une plage plutôt que comme un chiffre unique. Comparez-le avec le coût du programme et le coût d'un seul échec grave dans un service critique.

## Antimodèles et pièges

- **Fixer un objectif pour le taux d'échec.** Il invite à la redéfinition et aux échecs cachés. Fixez plutôt un objectif d'apprentissage, comme terminer chaque revue et clore chaque action corrective, et surveillez le taux pour les tendances.
- **Classer les équipes ou les personnes selon l'échec.** Cela détruit le signalement et punit les équipes qui prennent du travail risqué et précieux. Comparez une équipe à son propre passé et discutez du contexte.
- **Ne compter que les incidents comme échecs.** Les échecs attrapés tôt et annulés disparaissent. Incluez chaque voie de remédiation, et employez les incidents comme un signal parmi d'autres.
- **Traiter les changements d'urgence comme mauvais.** La pression mène à des urgences déguisées. Passez-les en revue pour leurs raisons et corrigez la voie ordinaire.
- **Laisser le lien d'incident à « non » par défaut.** La valeur par défaut produit un chiffre flatteur et faux. Rendez le champ obligatoire et vérifiez un échantillon.
- **Rapporter un taux sans comptes.** Les petits échantillons oscillent fortement. Montrez les comptes et une fenêtre glissante.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition de l'échec | Décidée au cas par cas par la personne interrogée | Certaines équipes écrivent une définition ; les équipes diffèrent | Une définition écrite avec exemples travaillés et fenêtre énoncée | Définition testée par des audits par échantillon et concordance mesurée | Définition révisée avec les fournisseurs et les clients quand elle cesse d'éclairer les décisions |
| Liaison des changements et des incidents | Lien dont les gens se souviennent, si tant est qu'ils s'en souviennent | Champ facultatif employé par certaines équipes | Champ obligatoire sans valeur par défaut, vérifié dans la revue post-incident | Taux de liaison suivi et revu, les lacunes étant traitées | Liens partagés entre équipes et fournisseurs par des interfaces convenues |
| Remédiation et traitement des urgences | Retours en arrière et correctifs urgents traités ad hoc et non consignés | Retours en arrière et correctifs urgents étiquetés par certaines équipes | Toutes les voies de remédiation consignées ; critère d'urgence écrit | Changements d'urgence revus chaque trimestre ; retours en arrière répétés | Voies de rétablissement conçues dans les services et testées conjointement entre équipes |
| Usage dans l'amélioration | Chiffres cités dans les rapports sans suivi | Échecs discutés après les incidents majeurs | Revue mensuelle sans reproche des changements échoués avec des actions | Échec et reprise associés à la vitesse ; expériences planifiées et financées | Amélioration routinière et partagée entre équipes, l'apprentissage étant publié |

## Liste de vérification

- [ ] Une définition écrite de l'échec de changement existe, avec une fenêtre énoncée et au moins cinq exemples travaillés.
- [ ] L'unité de comptage (changement, déploiement ou mise en production) est nommée dans le registre des métriques.
- [ ] L'enregistrement d'incident a un champ « causé par un changement » obligatoire sans valeur par défaut.
- [ ] Les retours en arrière, les correctifs urgents et les corrections en avant sont étiquetés dans les outils de déploiement ou de contrôle de versions.
- [ ] Les déploiements correctifs portent un lien vers le changement qu'ils corrigent.
- [ ] Le changement d'urgence a un court critère écrit, et chaque changement d'urgence est revu dans un nombre de jours fixé.
- [ ] Les taux sont montrés avec des comptes et une fenêtre glissante, jamais comme un pourcentage nu.
- [ ] Le taux d'échec des changements est toujours affiché à côté du délai de livraison, de la fréquence de déploiement et du temps de rétablissement.
- [ ] Un audit trimestriel par échantillon vérifie les verdicts d'échec et le lien d'incident.
- [ ] Une revue mensuelle sans reproche des changements échoués a lieu, avec un responsable pour chaque action.
- [ ] Aucune métrique de ce sujet n'est employée pour classer ou évaluer des individus.

## Prompts d'IA

**Rédigez une définition écrite de l'échec de changement.**

```text
Nous exploitons [service or product type] avec [team size] personnes et mettons
en production [frequency, for example several times a week]. Nos outils sont
[change tool, deployment tool, incident tool]. Rédigez une définition d'une page
de « changement échoué » qui énonce l'unité (changement, déploiement ou mise en
production), la fenêtre d'échec, les voies de remédiation qui comptent (retour
en arrière, correctif urgent, correction en avant, incident lié) et les
exclusions. Incluez [number] exemples travaillés, y compris des cas limites.
N'inventez ni valeurs de référence ni seuils ; demandez-moi ceux dont vous avez
besoin. Énumérez vos hypothèses.
```

**Concevez le lien changement-incident.**

```text
Voici notre gabarit d'enregistrement d'incident : [fields]. Voici notre gabarit
d'enregistrement de changement : [fields]. Suggérez comment consigner quel
changement a causé quel incident, y compris un champ obligatoire, des valeurs
permises, qui le remplit et comment une revue devrait le vérifier. Proposez un
moyen de suggérer automatiquement des changements candidats à partir de
[available data, for example deploy times and service names]. Ne devinez pas
comment nos outils sont configurés. Énumérez vos hypothèses et les questions
auxquelles je devrais répondre.
```

**Analysez une liste de changements échoués à la recherche de schémas.**

```text
Ci-dessous figurent [number] changements échoués de [period], avec ces champs :
[list fields, for example size, type, day and time, service, remediation route,
time to restore]. Trouvez des schémas et des facteurs contributifs possibles, et
suggérez jusqu'à [number] petites expériences réversibles pour réduire les
échecs. Gardez l'analyse au niveau des équipes et des services, et ne classez
pas d'individus. N'inventez ni statistiques ni valeurs de référence. Indiquez le
degré de confiance de chaque schéma compte tenu de la taille de l'échantillon,
et énumérez vos hypothèses.
```

**Vérifiez un tableau de bord d'échecs à la recherche de risques de détournement.**

```text
Notre tableau de bord montre [list of metrics, for example change fail rate,
emergency share, rollback rate, hotfix rate, rework rate] avec ces définitions :
[definitions]. Pour chaque métrique, listez les façons plausibles dont le chiffre
pourrait s'améliorer sans que le service s'améliore, et un garde-fou pour chacune.
Suggérez deux contrôles d'audit qu'une équipe de [team size] personnes pourrait
mener chaque trimestre. N'inventez ni valeurs de référence ni affirmations de
conformité. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet définit une métrique apparentée, comme le délai de livraison ou la durée d'incident, et le garde-fou à placer à côté du taux d'échec.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique d'échec nouvelle ou modifiée énonce son horloge, sa source et son vecteur de détournement.

## Points clés à retenir

- Un taux d'échec des changements ne vaut que par sa définition ; écrivez-en donc une, avec une fenêtre, des exemples travaillés et une unité nommée.
- Liez chaque échec à son changement par un champ obligatoire dans l'enregistrement d'incident, et mesurez le taux de liaison.
- Comptez ensemble les retours en arrière, les correctifs urgents, les corrections en avant et les incidents liés, afin que les équipes ne puissent esquiver la métrique en changeant de voie.
- Lisez la part de changements d'urgence et la reprise comme des signaux sur la planification et la voie ordinaire, non comme des scores.
- Montrez toujours l'échec à côté de la vitesse et du rétablissement, avec des comptes et une fenêtre glissante, et ne classez jamais les personnes.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
