# Métriques DORA

**Les métriques DORA décrivent avec quelle rapidité et quelle sûreté les changements logiciels d'une équipe parviennent en production ; lisez donc ensemble les mesures de vitesse et de stabilité, calculez-les à partir des événements de la chaîne et des incidents, et servez-vous-en pour amorcer des conversations sur un système de livraison, jamais pour classer des équipes ou des personnes.**

## Résumé et motivation

Les métriques DORA viennent du programme de recherche de [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), une étude de longue durée sur la façon dont les pratiques de livraison logicielle se rapportent aux résultats des équipes et des organisations. Nicole Forsgren, Jez Humble et Gene Kim ont présenté les premiers résultats dans le livre [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) en 2018, et le programme s'est poursuivi chez Google Cloud avec un rapport annuel. La recherche demandait quels aspects mesurables de la livraison prédisent de bons résultats, et a retenu un petit ensemble de mesures de performance de livraison logicielle qui peuvent être calculées à partir de la chaîne de livraison et du registre des incidents.

En octobre 2026, le site de DORA décrit cinq métriques de performance de livraison logicielle, réparties en deux groupes. Trois décrivent le **débit**, c'est-à-dire la vitesse à laquelle les changements avancent : le délai de livraison des changements, la fréquence de déploiement et le temps de rétablissement après un déploiement raté. Deux décrivent l'**instabilité**, c'est-à-dire la fréquence à laquelle une version cause des ennuis : le taux d'échec des changements et le taux de reprise des déploiements. Des publications plus anciennes décrivaient quatre métriques, avec le « temps de rétablissement du service » à la place du temps de rétablissement après un déploiement raté et sans le taux de reprise. Les définitions ont été affinées au fil des ans ; indiquez donc toujours quelle édition de la recommandation vous suivez et la date de votre dernière vérification.

Le résultat de recherche qui a rendu les métriques célèbres est que la vitesse et la stabilité tendent à évoluer ensemble d'une équipe à l'autre. Les équipes qui déployaient souvent et avaient de courts délais de livraison ne payaient pas cela, en moyenne, par davantage d'échecs. Cela renverse l'ancienne hypothèse selon laquelle aller plus vite signifie casser davantage. C'est un schéma dans les données d'enquête et de chaîne, non une loi, et il vaut pour les équipes qui ont investi dans des pratiques comme la [livraison continue](https://en.wikipedia.org/wiki/Continuous_delivery), les petits lots, les tests automatisés et la rétroaction rapide. Les métriques sont des signaux de ces capacités sous-jacentes. Elles ne sont pas les capacités elles-mêmes.

Les termes ci-dessous reviennent dans ce sujet.

- Un **déploiement** est l'acte de mettre une version du logiciel dans un environnement donné. Ce sujet entend la production sauf indication contraire.
- Un **changement** est un ensemble de modifications du logiciel, généralement une ou plusieurs validations qui partent ensemble. Dans ITIL 4, le mot a un sens plus large, couvrant tout ajout, modification ou retrait qui pourrait affecter des services, et la pratique [ITIL](https://en.wikipedia.org/wiki/ITIL) qui le gouverne est la maîtrise des changements.
- Un **déploiement raté** est un déploiement qui cause un service dégradé ou une panne en production et exige une remédiation, comme un correctif urgent, une annulation ou un correctif. Votre équipe écrit la règle exacte, car la recherche la laisse à la définition locale.
- Une **annulation** (rollback) est l'acte de ramener la production à la dernière version saine connue.
- Un **percentile** est une valeur en dessous de laquelle tombe une part indiquée d'observations. Le 85e percentile du délai de livraison est le nombre que 85 pour cent des changements battent.

Les points de vue agile et ITIL se rencontrent sur ce terrain. Une équipe agile voit ces chiffres comme une rétroaction sur sa pratique d'ingénierie et ses accords de travail. Un praticien ITIL les voit comme des preuves de résultat pour la maîtrise des changements, la gestion des versions, la gestion des déploiements et la gestion des incidents. La tension tient généralement au contrôle. Un comité d'approbation des changements traditionnel cherche à réduire l'échec en inspectant chaque changement avant sa mise en production. La recherche DORA a constaté qu'une lourde approbation externe n'était pas associée à une meilleure stabilité, alors que la revue par les pairs, les tests automatisés et les petits changements l'étaient. Dans ITIL 4, la maîtrise des changements en tient compte en distinguant les changements standard, normaux et d'urgence et en laissant des changements à faible risque être préautorisés (voir le sujet 4.3, Métriques de maîtrise des changements).

Les métriques ont aussi des limites que la recherche énonce elle-même, et les conseils pratiques de ce sujet s'appuient sur elles. Elles décrivent un système de livraison pour une application ou un service, elles sont destinées aux conversations d'amélioration et elles ne disent rien de la valeur du travail livré. Une équipe peut afficher d'excellents chiffres tout en livrant la mauvaise chose. Pour cette raison, ce sujet se place à côté, et non au-dessus, des mesures de flux (voir le sujet 2.1, Mesures de flux), des mesures de fiabilité du service (voir le sujet 5.2, SLI, SLO et budgets d'erreur) et des mesures de résultat (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

Enfin, les métriques invitent la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) dès l'instant où elles paraissent sur un tableau de bord de direction. La fréquence de déploiement est la plus facile à gonfler et les comptes de déploiements ratés sont les plus faciles à cacher. Chaque recommandation ci-dessous associe donc une mesure à un contrôle de la manière dont elle pourrait être pliée (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Calculer à partir d'événements, non de mémoire.** Les déploiements viennent de la chaîne, les échecs et les rétablissements du registre des incidents, et le délai de livraison du contrôle de version joint à la chaîne (voir le sujet 1.5, Sources de données et instrumentation).
- **Lire la vitesse et la stabilité comme un seul tableau.** Une équipe rapide aux échecs croissants, ou une équipe stable qui livre chaque trimestre, vous dit quelque chose qu'aucune des deux moitiés ne montre seule.
- **Mesurer un service ou une application, non une personne.** L'unité d'analyse est un système de livraison. Les individus ne déploient pas seuls, et les classer détruit les données.
- **Comparer une équipe à son propre passé, non à une autre équipe.** Le contexte diffère fortement entre un service de paiement, une plateforme de données et une application mobile, et la recherche elle-même met en garde contre l'usage des métriques comme tableau de classement.
- **Utiliser des distributions pour les temps.** Le délai de livraison et le temps de rétablissement ont de longues queues ; rapportez donc la médiane et un percentile élevé (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **Traiter les métriques comme des symptômes.** Quand un chiffre bouge, cherchez la cause dans les capacités qui le sous-tendent, comme la taille des lots, l'automatisation des tests, la pratique de revue et l'architecture, puis menez une expérience.
- **Écrire les définitions.** L'échec, le déploiement et le « début du travail » sont des jugements. Consignez le choix et gardez-le stable pour que la tendance ait un sens.

## Définitions des métriques

Les cinq métriques ci-dessous suivent la recommandation DORA en octobre 2026. Les formules indiquent les horloges et les exclusions que votre équipe devrait écrire. Là où la recherche laisse une frontière ouverte, le tableau montre une valeur par défaut raisonnable et les recommandations expliquent le choix.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai de livraison des changements | Temps pour qu'un changement validé parvienne en production | L'horloge démarre à la première validation du changement (ou à sa fusion dans la branche principale, si la définition l'indique) et s'arrête quand le déploiement en production se termine avec succès ; rapportez la médiane et le 85e percentile des changements déployés dans la période ; les changements jamais déployés sont exclus et rapportés séparément comme travail en cours | Heures ou jours | Contrôle de version joint à la chaîne de déploiement | Gestion des déploiements ; gestion des versions ; maîtrise des changements | Temps de cycle ; délai jusqu'à la production | Hebdomadaire ou par version, revu chaque mois |
| Fréquence de déploiement | Fréquence à laquelle une équipe déploie en production | Nombre de déploiements en production réussis de l'application dans la période / jours de la période ; les déploiements ratés ou annulés sont exclus du compte des réussites ; les déploiements vers les environnements de test sont exclus | Déploiements par jour ou par semaine | Journal d'événements de la chaîne de déploiement | Gestion des déploiements ; gestion des versions | Livraison continue ; publication à la fin de chaque incrément | Hebdomadaire |
| Temps de rétablissement après un déploiement raté | Combien de temps il faut pour se rétablir quand un déploiement cause un échec en production | L'horloge démarre quand l'échec est détecté ou signalé (la même règle à chaque fois) et s'arrête quand le service est rétabli pour les utilisateurs ; rapportez la médiane et le 85e percentile pour les déploiements ratés de la période ; les incidents non causés par un déploiement sont exclus | Minutes ou heures | Registre des incidents joint aux événements de déploiement et aux alertes de supervision | Gestion des incidents ; gestion de la continuité des services | Temps de rétablissement ; travail de restauration | Par échec, revu chaque mois |
| Taux d'échec des changements | Part des déploiements en production qui causent un échec exigeant une remédiation | Déploiements ayant exigé un correctif urgent, une annulation, un correctif ou une réponse à incident / tous les déploiements en production de la période ; la règle qui relie un échec à son déploiement est écrite et appliquée de la même façon à chaque fois | Pourcentage | Événements de déploiement joints aux incidents, annulations et déploiements de correctifs urgents | Maîtrise des changements ; gestion des incidents | Définition de terminé ; défauts échappés | Mensuelle |
| Taux de reprise des déploiements | Part des déploiements en production qui étaient non planifiés et faits pour corriger un problème visible des utilisateurs | Déploiements non planifiés faits en réponse à un problème de production / tous les déploiements en production de la période ; les déploiements planifiés qui contiennent par hasard un correctif sont exclus ; la règle de « non planifié » est écrite | Pourcentage | Journal de la chaîne étiqueté par raison de déploiement, relié aux enregistrements d'incidents ou de défauts | Maîtrise des changements ; gestion des problèmes | Travail non planifié ; correctif publié hors du plan | Mensuelle |

Deux remarques sur le tableau. D'abord, le taux d'échec des changements et le taux de reprise des déploiements se chevauchent sans être la même chose : un échec que l'équipe remarque et annule sans aucun nouveau déploiement compte dans le taux d'échec des changements mais pas dans le taux de reprise, tandis qu'un correctif planifié que l'équipe programme ne compte dans aucun des deux. Ensuite, la recherche traite le **déploiement** comme l'unité et compte par application ; une plateforme de cinquante services a donc cinquante jeux de chiffres, non un seul.

## Recommandations

### Commencer par les définitions et les horloges

**1. Écrivez une définition d'une page pour chaque métrique avant de la tracer.** Indiquez ce qui compte comme un déploiement, quel environnement est la production, où l'horloge démarre pour le délai de livraison et comment un échec est relié à un déploiement. Mettez la page dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Une définition qui ne vit que dans la tête de quelqu'un dérivera dès que l'outil ou l'équipe changera.

**2. Choisissez un début de délai de livraison et tenez-vous-y.** Les choix les plus courants sont la première validation du changement, la fusion dans la branche principale et la création d'un ticket. La première validation mesure le système de livraison et ignore le temps que le travail a passé dans un backlog. Le début au ticket mesure davantage de l'attente du client mais y mêle la priorisation (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). Employez-en un de façon cohérente et dites lequel sur chaque graphique.

**3. Attribuez les échecs selon une règle déclarée.** Un échec appartient à un déploiement quand, par exemple, un incident s'ouvre dans une fenêtre indiquée après le déploiement et que son analyse de cause désigne ce changement, ou quand une annulation ou un correctif urgent lui est rattaché. Choisissez une règle que les gens peuvent appliquer sans dispute, revoyez un échantillon de cas chaque trimestre et gardez la règle identique assez longtemps pour voir une tendance.

### Instrumenter à partir de la chaîne

**4. Prenez les événements de déploiement dans la chaîne, non dans un tableur.** Un système de [CI/CD](https://en.wikipedia.org/wiki/CI/CD) qui consigne chaque déploiement en production avec un horodatage, une version et un résultat vous donne la fréquence de déploiement et l'arrêt de l'horloge du délai de livraison sans aucune saisie humaine. Les comptes saisis à la main sont tardifs et incohérents, et ils invitent aux problèmes d'antidatage décrits au sujet 1.5, Sources de données et instrumentation. Le projet libre Four Keys de l'équipe DORA est un exemple concret de collecte de ces événements, mais n'importe quelle chaîne équivalente de votre cru fera l'affaire.

**5. Joignez le registre des incidents aux déploiements.** Les mesures d'échec et de rétablissement demandent deux sources : le journal des déploiements et l'outil d'incidents. Ajoutez au registre des incidents un champ « causé par un déploiement » et l'identifiant du déploiement, rempli pendant la résolution et vérifié lors de l'analyse post-incident (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). Sans la jointure, le taux d'échec des changements devient une devinette.

**6. Étiquetez la raison de chaque déploiement.** Le taux de reprise doit séparer les déploiements planifiés des corrections non planifiées. Une simple étiquette sur l'exécution de la chaîne, comme « changement planifié » ou « correctif d'un problème de production », suffit. Gardez la liste d'étiquettes courte pour que les gens n'aient pas à réfléchir sous pression.

### Rapporter les chiffres honnêtement

**7. Rapportez des distributions et des comptages, non une moyenne unique.** Montrez la médiane et le 85e percentile du délai de livraison et du temps de rétablissement, avec le nombre d'observations derrière chacun. Une semaine avec deux déploiements et un échec a un taux d'échec des changements de 50 pour cent qui ne signifie presque rien ; montrez donc les comptages à côté du pourcentage et préférez une fenêtre plus longue pour les taux (voir le sujet 1.6, Culture statistique pour les métriques de service).

**8. Montrez côte à côte le groupe du débit et celui de l'instabilité.** Mettez les trois métriques de débit et les deux métriques d'instabilité sur une même vue, par service, avec la tendance sur au moins un trimestre. Ne publiez jamais la fréquence de déploiement sans les mesures d'échec à côté. Si un dirigeant demande un chiffre unique, expliquez qu'il n'existe pas de score DORA unique et offrez la vue à deux groupes.

**9. Gardez les comparaisons dans l'historique propre d'une équipe.** Une équipe qui fait passer son délai de livraison médian de neuf jours à cinq a appris quelque chose. La classer contre une autre équipe d'architecture, de charge réglementaire ou de train de versions différents prouve peu et apprend aux deux équipes à protéger leurs chiffres. Quand vous devez consolider pour la gouvernance, montrez la dispersion entre services et la tendance d'amélioration, pas un tableau de classement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

### Améliorer le système que décrivent les chiffres

**10. Réduisez d'abord la taille des lots.** De petits changements raccourcissent le délai de livraison, rendent les échecs plus faciles à diagnostiquer et abaissent le coût d'une annulation. Les techniques incluent les [bascules de fonctionnalité](https://en.wikipedia.org/wiki/Feature_toggle), le travail sur tronc commun et le découpage du travail pour que chaque incrément puisse partir seul (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code). Suivez la taille médiane des changements à côté du délai de livraison pour voir si le lot rétrécit réellement.

**11. Investissez dans la détection rapide et la réversibilité rapide.** Le temps de rétablissement baisse quand l'équipe peut voir un échec en quelques minutes, et quand elle peut [annuler](https://en.wikipedia.org/wiki/Rollback_(data_management)) ou désactiver un changement sans nouvelle construction. Une [version canari](https://en.wikipedia.org/wiki/Canary_release), une bascule de fonctionnalité et une annulation automatisée raccourcissent chacune l'intervalle entre l'échec et la restauration. Mesurez séparément le temps entre le déploiement et la détection, car une détection lente se cache dans un chiffre de temps de rétablissement (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

**12. Utilisez les chiffres pour choisir une capacité à améliorer.** Choisissez une métrique faible, demandez pourquoi elle est faible et sélectionnez dans la liste de capacités de la recherche une pratique qui traite la cause, comme l'automatisation des tests, l'architecture faiblement couplée ou l'approbation légère des changements. Menez le changement pendant un trimestre et regardez la tendance. Associez l'expérience à un sujet de rétrospective pour que l'équipe s'approprie l'amélioration (voir le sujet 9.5, Métriques d'amélioration continue).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Délai de livraison des changements | Reporter le début de l'horloge, par exemple démarrer à la fusion plutôt qu'à la première validation ; fusionner tôt dans une branche de longue durée ; exclure les changements difficiles comme « pas du code » ; faire passer des changements triviaux dans la chaîne pour tirer la médiane vers le bas | Percentile et âge du travail en cours ; début d'horloge écrit et fixe ; échantillon des 10 pour cent de changements les plus lents chaque trimestre ; distribution des tailles de changements |
| Fréquence de déploiement | Fractionner un changement en de nombreux déploiements triviaux ; redéployer des constructions inchangées ; compter les déploiements vers la préproduction ou les changements de configuration vides | Taille de changement par déploiement ; part des déploiements contenant un changement visible des utilisateurs ; taux d'échec des changements et taux de reprise à côté |
| Temps de rétablissement après un déploiement raté | Démarrer l'horloge tard ou clore tôt les incidents ; reclasser un échec en nouvel incident après un correctif partiel ; relever le seuil de gravité d'un « échec » | Récurrence du même incident dans une fenêtre indiquée ; début d'horloge tiré des alertes de supervision ; durée d'impact déclarée par les clients |
| Taux d'échec des changements | Ne pas relier les incidents aux déploiements ; ne compter que les échecs qui causent une panne complète ; élargir la fenêtre pour que les échecs en sortent ; corriger en avant et appeler cela un nouveau changement | Examiner chaque trimestre un échantillon d'incidents au regard du journal des déploiements ; suivre la proportion d'incidents dont le lien de déploiement est consigné ; taux de reprise des déploiements |
| Taux de reprise des déploiements | Étiqueter les correctifs comme travail planifié ; regrouper un correctif dans une version programmée ; éviter les déploiements de correctifs en retardant la correction | Comptes de défauts et de défauts échappés du gestionnaire de tickets ; âge des défauts de production ouverts ; audit des étiquettes sur un échantillon de déploiements |

Une lecture saine montre un délai de livraison et un temps de rétablissement en baisse ou stables à un bas niveau, une fréquence de déploiement stable ou en hausse avec de petits changements, et des taux d'échec et de reprise plats ou en baisse, avec des comptages assez grands pour qu'on s'y fie. Les lectures suspectes incluent un saut soudain de la fréquence de déploiement sans changement du travail, un taux d'échec qui tombe à zéro en un mois et un temps de rétablissement qui baisse alors que les plaintes des clients restent les mêmes. Chacune appelle un examen de l'instrument avant toute célébration.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Utiliser les cinq métriques DORA par service | Fondées sur la recherche, équilibrent vitesse et stabilité, calculées à partir d'événements objectifs | Demandent une chaîne et un registre d'incidents qui se joignent proprement ; muettes sur la valeur du travail |
| Ne rapporter que la fréquence de déploiement et le délai de livraison | Faciles à collecter dans la chaîne | Récompensent la seule vitesse et invitent au détournement exact que les mesures de stabilité attrapent |
| Définitions locales par équipe | Conviennent à l'architecture et au style de publication de l'équipe | Les équipes ne peuvent pas être comparées, et les consolidations sont peu fiables |
| Une définition unique à l'échelle de l'organisation | Reporting cohérent ; gouvernance simple | Convient mal à certains systèmes, comme les grands systèmes avec fenêtres de traitement par lots ou les publications réglementées |
| Comparer les équipes à des bandes de performance publiées | Donne aux dirigeants un aperçu rapide de leur position | Ignore le contexte, et la recherche prévient que les bandes ne sont pas des objectifs pour chaque équipe |
| Utiliser les métriques pour l'auto-amélioration de l'équipe | Bâtit l'appropriation ; soutient des données honnêtes | Offre moins de confort aux dirigeants qui veulent un score unique |

La tension centrale est entre comparabilité et honnêteté. Plus un chiffre sert à juger des équipes, plus les données se plient, et moins il aide l'équipe qui le détient. Employez d'abord les métriques à l'appui de l'amélioration, acceptez une comparabilité imparfaite et gardez les vues de niveau direction aux tendances et à la dispersion. Là où le reporting réglementé exige une définition standard, documentez-la et gardez séparée la vue d'amélioration au niveau de l'équipe.

## Questions à discuter avec votre équipe

**1. Lesquels de nos cinq chiffres DORA viennent d'événements, et lesquels viennent du souvenir de quelqu'un ?**
Remontez chaque métrique à sa source. Notez où une personne saisit une date ou décide si quelque chose compte comme un échec. L'animateur doit aider le groupe à classer les étapes manuelles selon l'ampleur dont elles pourraient fausser le chiffre, et à convenir de celle à automatiser d'abord.

**2. Où exactement notre horloge de délai de livraison démarre-t-elle et s'arrête-t-elle, et tout le monde est-il d'accord ?**
Demandez à trois personnes de décrire le début et la fin de l'horloge pour le dernier changement livré. Comparez les réponses. Les différences apparaissent généralement autour de la première validation, de la fusion, d'un ticket et de l'étape d'approbation. Convenez d'une définition et écrivez-la, et discutez du temps d'attente que la définition choisie cache.

**3. Qu'est-ce qui compte pour nous comme un déploiement raté, et qui décide ?**
Parcourez les cinq derniers incidents de production et demandez si chacun appartient à un déploiement. Les désaccords montrent où la règle est floue. Discutez de ce qu'il advient d'un échec corrigé par un changement de configuration, une annulation ou un correctif rapide, et décidez comment chacun est consigné.

**4. Si la fréquence de déploiement doublait le trimestre prochain, que vérifierions-nous avant d'y voir une bonne nouvelle ?**
Invitez le groupe à nommer les façons dont le chiffre pourrait monter sans livrer plus de valeur. Regardez la taille des changements, la part des déploiements avec un changement visible des utilisateurs et les taux d'échec et de reprise. L'animateur doit noter quels contrôles existent déjà sur le tableau de bord et lesquels sont à ajouter.

**5. Comment ces chiffres sont-ils utilisés par des gens extérieurs à l'équipe ?**
Demandez qui les voit, sous quelle forme, et ce qu'ils en font. Écoutez la comparaison avec d'autres équipes, les objectifs fixés de l'extérieur et l'usage dans les évaluations individuelles. Discutez de ce que l'équipe aurait besoin de voir changer dans cet usage avant de pouvoir se fier à ses propres données, et de qui a l'autorité de faire le changement.

**6. Quelle capacité améliorerait le plus notre chiffre le plus faible, et quelle petite expérience essayer ?**
Choisissez la métrique la plus faible et parlez de ses causes probables, comme les gros lots, la revue lente, les tests instables ou une étape de publication manuelle. Choisissez une cause et concevez une expérience de quatre à six semaines avec un moyen d'en voir l'effet. Convenez d'une date pour revoir le résultat et de qui apportera les données.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent les capacités qui commandent ces chiffres : petits changements, tests automatisés, chaîne rapide et habitude de relire le travail les unes des autres. Elles devraient se servir des métriques comme d'un miroir de leur propre pratique d'ingénierie, fixer leurs propres objectifs d'amélioration et résister à la pression de rapporter un chiffre unique vers le haut. Elles décident aussi des définitions, et portent donc le devoir de les garder honnêtes (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent le registre des incidents dont dépendent les mesures d'échec et de rétablissement. Elles aident l'équipe de livraison en étiquetant les incidents avec le déploiement qui les a causés, en fournissant une supervision qui détecte vite les échecs et en participant à la revue de chaque déploiement raté. Elles devraient veiller à ce que la vitesse de livraison n'achète pas une instabilité qu'elles absorbent sous forme de charge d'astreinte (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte), et demander les investissements d'annulation et de détection qui réduisent le temps de rétablissement.

### Direction et gouvernance

Les dirigeants devraient demander les tendances et la dispersion entre services, les deux groupes de métriques ensemble et les expériences d'amélioration qui les sous-tendent. Ils devraient éviter les objectifs qui verrouillent un chiffre, comme « déployer chaque jour », et éviter d'employer les métriques dans les évaluations individuelles. Les instances de gouvernance peuvent se servir des chiffres comme preuve qu'une voie d'approbation des changements plus légère est sûre, ou comme raison de la reconsidérer, en montrant si la stabilité est restée constante quand le processus a changé (voir le sujet 4.4, Échecs de changement et reprises).

### Clients et utilisateurs

Les clients se soucient rarement des comptes de déploiements. Ils se soucient de la rapidité avec laquelle un correctif ou une fonction leur parvient, de la rareté avec laquelle une version casse quelque chose sur quoi ils comptent et de la vitesse à laquelle le service revient quand cela arrive. Utilisez les métriques DORA comme preuve interne que ces résultats sont probables, et complétez-les par des mesures destinées aux clients comme la disponibilité et la satisfaction (voir le sujet 5.3, Métriques de disponibilité, et le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite un service de paiement détenu par une équipe produit, soutenue par une équipe de plateforme et le centre de services. Tous les chiffres ci-dessous sont illustratifs.

L'équipe a déployé en production environ deux fois par semaine, avec un délai de livraison (de la première validation à la production) d'une médiane de 11 jours et d'un 85e percentile de 26 jours. Au cours du trimestre précédent, 6 des 24 déploiements (25 pour cent, illustratif) ont été suivis d'une annulation ou d'un incident. Le temps de rétablissement médian de ces échecs était de 3 heures. Le comité d'approbation des changements se réunit chaque semaine et passe en revue chaque changement du service de paiement.

L'équipe propose un plan. Elle découpera les gros changements, ajoutera des contrôles automatisés dans la chaîne, mettra les nouveaux comportements derrière des bascules de fonctionnalité et demandera au comité de préautoriser comme changements standard les changements à faible risque qui passent les contrôles. Le responsable des changements est méfiant ; l'équipe convient donc de rapporter les cinq métriques chaque mois et d'arrêter l'expérience si le taux d'échec monte deux mois de suite.

Après un trimestre, les chiffres (illustratifs) sont de 19 déploiements par mois, un délai de livraison médian de 3 jours avec un 85e percentile de 8 jours, un taux d'échec des changements de 8 pour cent, un temps de rétablissement médian de 40 minutes et un taux de reprise de 5 pour cent. L'équipe est contente, et un responsable régional demande de comparer la fréquence de déploiement de l'équipe de paiement avec celle des autres équipes produit et de fixer un objectif commun.

Le chef d'équipe apporte à la revue la ventilation des reprises et des échecs et remarque un risque de détournement. La fréquence de déploiement a été aidée par un certain nombre de minuscules déploiements de configuration que la chaîne compte, et la taille médiane des changements rétrécit plus vite que le travail réel. Pire, deux incidents du mois dernier ont été corrigés par un changement de configuration que la chaîne a consigné comme un déploiement normal étiqueté « planifié » ; le taux de reprise était donc sous-estimé. Le taux d'échec des changements paraissait bon en partie parce que ces deux incidents n'avaient pas été reliés à leurs déploiements d'origine.

La décision, consignée dans le journal des décisions, comporte quatre volets. Les déploiements de configuration seule sont comptés séparément et montrés à côté du chiffre principal. L'étiquette de raison de déploiement est auditée chaque mois sur un échantillon de 10 déploiements. L'outil d'incidents exige désormais l'identifiant du déploiement quand la cause est un changement. Et l'équipe décline l'objectif commun de fréquence de déploiement, offrant plutôt une vue partagée qui montre la tendance de chaque service et son taux d'échec. Le responsable des changements accepte de garder la préautorisation des changements standard, avec une revue à la fin du trimestre suivant.

## Perspective sectorielle

**Startup.** Une petite équipe déploie souvent de nombreuses fois par jour et a des registres d'incidents minces ; la fréquence de déploiement et le délai de livraison sont donc faciles, mais les données d'échec sont lacunaires. Commencez par étiqueter chaque annulation et chaque correctif urgent dans la chaîne, et par tenir un simple journal d'incidents avec l'identifiant du déploiement. Ne laissez pas une fréquence élevée vous convaincre que la stabilité est bonne sans vérifier le taux d'échec.

**Petite entreprise.** Une plateforme hébergée ou un développeur externalisé peut ne déployer que chaque mois, avec peu d'outillage. Comptez à la main ce que vous pouvez pendant quelques mois, demandez par écrit au fournisseur les dates de déploiement et d'incident, et concentrez-vous sur le délai de livraison et le taux d'échec. Utilisez les chiffres pour décider si de plus petits changements livrés en continu réduiraient le risque, non pour courir après une bande.

**Grande entreprise.** De nombreuses équipes, plusieurs styles de publication et un mélange de systèmes modernes et hérités rendent les définitions cohérentes difficiles. Convenez d'une définition minimale commune pour chaque métrique, publiez-la et laissez une équipe en ajouter de plus strictes avec une raison déclarée. Consolidez en montrant la dispersion et la tendance par service plutôt qu'une moyenne, et gardez le détail au niveau de l'équipe visible seulement de l'équipe responsable et des groupes qui la soutiennent.

**Gouvernement et secteur public.** Les fenêtres de publication, les règles d'audit et les contrats de marchés façonnent ce qui est possible, et certains systèmes sont exploités par des fournisseurs. Incluez dans les contrats des droits sur les données de livraison et d'incidents afin que les métriques puissent être calculées. Employez les chiffres comme preuve qu'un programme de modernisation raccourcit les délais de livraison sans relever les taux d'échec, et rapportez toutes les métriques ensemble pour que les résultats ne soient pas sélectionnés (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est de raccourcir le temps entre une idée et son usage tout en gardant la production stable. Le coût du programme a trois parts : l'instrumentation (événements de la chaîne, étiquettes de déploiement et jointure avec les incidents), la routine de revue (un coup d'œil mensuel aux tendances et un échantillon trimestriel de cas d'échec et de reprise) et le travail d'amélioration vers lequel pointent les chiffres, comme l'automatisation des tests ou une chaîne plus rapide. Les deux premières sont modestes. La troisième est celle où se trouve la vraie dépense, et elle est consacrée à la capacité d'ingénierie, non à la mesure.

Le retour vient de décisions que les chiffres facilitent. Une équipe peut montrer à un comité des changements que les petits changements sont sûrs, et ainsi retirer une étape d'approbation. Un groupe de plateforme peut voir quels services ont des chaînes lentes ou une mauvaise annulation et placer son investissement en conséquence. Une équipe d'exploitation peut plaider à l'aide de données pour un meilleur outil de détection. Décrivez le retour par des schémas que vous pouvez observer vous-même, comme le temps entre la validation et la production, la part des versions qui demandent un correctif et la charge d'astreinte par version, avant et après un changement. Évitez de citer comme retour attendu des chiffres de référence d'autres organisations, car votre contexte différera. Le coût total de possession est dominé par le temps des personnes ; gardez donc l'ensemble de métriques petit et automatisez sa collecte (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Traiter les métriques comme un tableau de score de performance pour des individus.** Cela brise le fondement de la recherche et corrompt les données. Rapportez uniquement au niveau du service et de l'équipe.
- **Fixer des objectifs comme « déployer chaque jour » ou « délai de livraison inférieur à un jour ».** L'objectif remplace le but. Fixez une direction d'amélioration et une expérience, et gardez le chiffre comme un signal.
- **Classer les équipes les unes contre les autres ou contre des bandes publiées.** Le contexte diffère et le détournement suit. Comparez une équipe à sa propre tendance, et n'employez les bandes que comme orientation lâche.
- **Rapporter la vitesse sans la stabilité.** La paire est le point central. Montrez toujours ensemble les groupes de débit et d'instabilité.
- **Laisser les définitions dériver.** L'échec, le déploiement et le début du délai de livraison changent discrètement avec l'outil. Consignez chaque changement de définition avec son motif et marquez-le sur le graphique.
- **Compter les déploiements de n'importe quoi.** Les poussées de configuration, les publications en environnement de test et les redéploiements d'une même construction gonflent le compte. Définissez un déploiement en production, et montrez séparément les autres sortes.
- **Ignorer ce qui est livré.** De bons chiffres peuvent cacher un travail qui ne compte pas. Lisez-les à côté des mesures de flux et de résultat (voir le sujet 2.9, Travail opérationnel et travail non planifié).
- **Courir après la métrique plutôt qu'après la capacité.** Le délai de livraison baisse le plus sûrement quand les lots rétrécissent et que les tests s'accélèrent. Améliorez la pratique et laissez le chiffre suivre.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Chacun définit différemment le déploiement et l'échec | Quelques équipes documentent leurs définitions | Une définition écrite par métrique, avec horloges et exclusions, dans le registre des métriques | Changements de définition consignés et marqués sur les graphiques ; échantillons vérifiés chaque trimestre | Définitions révisées conjointement avec les fournisseurs et la gouvernance quand elles cessent d'éclairer les décisions |
| Capture des données | Comptes assemblés à la main à partir de tickets | Données de chaîne pour certains services ; incidents reliés à la main | Déploiements, raisons et liens d'incidents capturés automatiquement pour la plupart des services | Qualité des données (taux de liaison, audit des étiquettes) mesurée et suivie dans le temps | Événements partagés entre équipes et fournisseurs par des interfaces convenues |
| Usage des chiffres | Rapportés vers le haut comme un score unique | Les équipes regardent parfois leurs propres graphiques | Groupes de débit et d'instabilité revus ensemble chaque mois par l'équipe responsable | Les tendances alimentent des expériences d'amélioration financées avec un garde-fou | Dispersion et tendances qui éclairent l'investissement dans la plateforme et la politique de changement dans toute l'organisation |
| Garde-fous contre le détournement | Aucun | Conscience informelle | Garde-fous associés listés pour chaque métrique | Garde-fous et échantillons revus, cas de détournement consignés | Garde-fous réglés en continu à mesure que les équipes et les outils changent |

## Liste de vérification

- [ ] Les cinq métriques sont définies par écrit, avec horloges, exclusions, et la date et l'édition de la recommandation DORA suivie.
- [ ] Les déploiements en production sont consignés par la chaîne avec un horodatage, une version et un résultat.
- [ ] Le début du délai de livraison (première validation, fusion ou autre) est indiqué et appliqué de façon cohérente.
- [ ] Les incidents portent un champ pour le déploiement qui les a causés, rempli pendant la résolution.
- [ ] Chaque déploiement porte une étiquette de raison, et un échantillon est audité chaque mois.
- [ ] Les temps sont rapportés sous forme de médiane et de percentile élevé, avec les comptages.
- [ ] Les métriques de débit et d'instabilité sont montrées ensemble pour chaque service.
- [ ] La taille des changements est suivie à côté de la fréquence de déploiement et du délai de livraison.
- [ ] Les chiffres ne sont pas utilisés dans les évaluations individuelles ni pour classer des équipes.
- [ ] Un responsable nommé revoit les métriques chaque mois et consigne tout changement de définition.
- [ ] Une expérience d'amélioration, liée à la métrique la plus faible, est en cours avec une date de revue.

## Prompts d'IA

**Rédigez un jeu de définitions d'une page pour les cinq métriques.**

```text
Je définis les métriques DORA de livraison logicielle pour [service or
application name]. Nos outils sont [version control host, CI/CD system, incident
tool, ITSM tool]. Notre style de publication est [continuous, weekly, monthly,
or other]. Pour le délai de livraison des changements, la fréquence de
déploiement, le temps de rétablissement après un déploiement raté, le taux
d'échec des changements et le taux de reprise des déploiements, rédigez une
définition avec l'endroit où l'horloge démarre et s'arrête, ce qui est compté et
exclu, la source de données et un risque d'ambiguïté. N'inventez pas de valeurs
de référence et ne prétendez pas que notre pratique correspond à une bande de
performance publiée. Énumérez vos hypothèses et les questions auxquelles je dois
répondre pour terminer les définitions.
```

**Vérifiez les risques de détournement d'un ensemble de métriques.**

```text
Voici comment nous calculons actuellement nos métriques de livraison :
[description of each metric, its data source, and how it is reported]. Le public
est [team, leadership, or governance body]. Pour chaque métrique, énumérez les
façons plausibles dont le chiffre pourrait être gonflé, caché ou déformé sans
amélioration réelle, et suggérez un garde-fou associé (métrique ou pratique) qui
l'attraperait. N'inventez pas de statistiques. Énumérez vos hypothèses et les
informations dont vous auriez besoin pour être plus précis.
```

**Analysez un export de données de déploiements et d'incidents.**

```text
Je vais coller un petit export de [number] déploiements en production et de
[number] incidents avec ces champs : [list fields, for example deployment id,
timestamp, result, reason tag, incident id, opened time, resolved time,
deployment link]. Calculez la médiane et le 85e percentile du temps de
rétablissement, le taux d'échec des changements et le taux de reprise, en
montrant les comptages derrière chacun. Signalez les enregistrements aux liens
manquants ou aux horodatages suspects. N'extrapolez pas au-delà des données et
ne comparez pas le résultat avec des références extérieures. Énumérez vos
hypothèses et les problèmes de qualité des données qui limitent les conclusions.
```

**Planifiez une expérience d'amélioration.**

```text
Notre métrique de livraison la plus faible est [metric name], actuellement
[value as reported, with date range and counts]. Les causes probables dont
l'équipe a discuté sont [list]. Nos contraintes sont [constraints, for example
regulated releases, shared test environment]. Proposez trois petites expériences
de quatre à six semaines, chacune avec une hypothèse, un moyen d'observer
l'effet, une métrique de garde-fou et un risque. N'inventez pas de chiffres
d'amélioration attendue. Énumérez vos hypothèses et ce que nous devrions
vérifier avant de commencer.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets apparentés de changement, de version et d'incident et le garde-fou qui doit se trouver à côté de chaque métrique DORA.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une version révisée de ce sujet garde cohérents ses horloges, ses vecteurs de détournement et ses renvois.

## Points clés à retenir

- Les métriques DORA sont cinq mesures de la livraison logicielle, trois de débit et deux d'instabilité, et elles sont plus utiles lues ensemble pour un même service.
- Calculez-les à partir d'événements de la chaîne et des incidents avec des définitions écrites, car l'échec et le début du délai de livraison sont des jugements.
- Servez-vous-en pour apprendre sur un système de livraison et comparer une équipe à son propre historique, jamais pour classer des personnes ou des équipes.
- Rapportez des médianes, des percentiles élevés et des comptages, et associez chaque métrique à un garde-fou qui attrape son détournement.
- Améliorez les capacités sous-jacentes, comme les petits lots, la détection rapide et l'annulation facile, et laissez les chiffres suivre.
- Indiquez l'édition et la date de la recommandation que vous suivez, car les définitions ont été affinées au fil du temps.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
