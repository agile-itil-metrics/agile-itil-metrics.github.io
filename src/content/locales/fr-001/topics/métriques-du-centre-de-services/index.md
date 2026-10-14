# Métriques du centre de services

**Mesurez le centre de services par sa capacité à aider les gens à reprendre le travail et par ce qu'il enseigne au reste de l'organisation, car les comptes d'appels et les minutes au téléphone récompensent la vitesse et le volume aux dépens des deux.**

## Résumé et motivation

Pour la plupart des utilisateurs, le centre de services est le service. Ils rencontrent rarement les ingénieurs ou ne voient pas la chaîne ; ils rencontrent celui ou celle qui répond quand quelque chose va mal. Un [centre d'assistance](https://en.wikipedia.org/wiki/Help_desk) (help desk) est le service ou la personne qui donne de l'aide et de l'information, généralement sur des problèmes informatiques. Dans l'usage de la [gestion des services informatiques (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), le centre de services est le point de contact unique entre le fournisseur et ses utilisateurs, qui traite à la fois des incidents (perturbations non planifiées ou potentielles d'un service) et des demandes de service (demandes courantes de quelque chose que le service fournit normalement). Dans [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratique du centre de services se place à côté de la gestion des incidents et de la gestion des demandes de service, et elle est décrite par son but et ses résultats, non par une liste fixe de mesures. Ce sujet offre donc des conseils pratiques, non une exigence de cadre.

Les mesures qui se sont développées autour du centre viennent en grande partie de la tradition du [centre d'appels](https://en.wikipedia.org/wiki/Call_centre) : combien de contacts sont arrivés, combien de temps les gens ont attendu, combien ont renoncé, combien de temps a duré chaque contact et combien ont été résolus du premier coup. Ces mesures sont utiles et peu coûteuses, et ce sont aussi les plus faciles du livre à transformer en objectifs qui nuisent au service. Les appels courts paraissent efficaces jusqu'à ce que le même utilisateur rappelle trois fois. Un faible abandon paraît attentionné jusqu'à ce que les agents répondent vite et ne résolvent rien. Le travail de ce sujet est de décrire chaque mesure, d'énoncer ses horloges et de dire ce qu'elle récompense et ce qu'elle cache.

La vision agile ajoute un second but. Chaque contact est une preuve de ce que les utilisateurs trouvent déroutant, de ce qui casse et de ce qu'ils souhaiteraient que le service fasse. Une équipe agile qui publie souvent a besoin de cette preuve rapidement et au niveau d'un service, non d'un ticket. Le centre est donc mesuré deux fois : comme une exploitation qui répond bien aux gens, et comme un capteur qui alimente le backlog. Le volume est le pont entre les deux. Une hausse du compte peut signifier une croissance, une mauvaise version, un article manquant ou un nouveau canal, et la métrique seule ne peut pas dire lequel (voir le sujet 3.2, Volume et priorité des incidents, pour savoir lire les comptes par catégorie et par priorité).

Termes clés : la [résolution au premier appel](https://en.wikipedia.org/wiki/First_call_resolution) est la part des contacts résolus au premier contact ; un [distributeur automatique d'appels](https://en.wikipedia.org/wiki/Automatic_call_distributor) achemine les appels entrants vers le personnel disponible ; un [accord de niveau de service (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) est un engagement entre fournisseur et client ; un [percentile](https://en.wikipedia.org/wiki/Percentile) est la valeur en deçà de laquelle tombe une part donnée d'observations, de sorte que le 85e percentile du temps de traitement est la durée dans laquelle 85 pour cent des contacts se terminent ; et la [satisfaction de la clientèle](https://en.wikipedia.org/wiki/Customer_satisfaction) (voir le sujet 6.1, Métriques de satisfaction de la clientèle) est la mesure dans laquelle un service répond aux attentes des utilisateurs.

Les termes « contact » et « ticket » ne sont pas la même chose. Un contact est une tentative d'une personne de joindre le centre par un canal comme le téléphone, la discussion, le courriel, le portail, le guichet ou la messagerie. Un ticket (aussi appelé enregistrement) est ce que l'outil ITSM crée pour suivre le travail. Un ticket peut impliquer de nombreux contacts, et certains contacts, comme une réinitialisation de mot de passe traitée sur-le-champ, ne créent un ticket que pour la trace. Mélanger les deux est la source de confusion la plus courante dans le reporting du centre ; les définitions ci-dessous les comptent donc séparément.

## Principes clés

- **Compter séparément contacts et tickets, et définir les deux.** Un contact est une tentative de joindre le centre ; un ticket est un enregistrement de travail. Les rapports qui les mêlent ne peuvent pas être rapprochés.
- **Rapporter les temps sous forme de distributions.** Montrez la médiane et un percentile élevé comme le 85e ou le 95e, jamais seulement une moyenne, car quelques contacts très longs ou très courts faussent la moyenne.
- **Associer chaque mesure de vitesse à une mesure de résultat.** La rapidité de réponse, l'abandon et le temps de traitement décrivent l'effort. La résolution et le recontact décrivent si l'utilisateur a été aidé.
- **Normaliser le volume par rapport à l'usage.** Un compte qui monte parce que la base d'utilisateurs a grandi est une autre histoire que celui qui monte par utilisateur.
- **Mesurer des canaux et des services, non des personnes.** Ces métriques décrivent un centre, une file, un service et un canal. Elles ne servent jamais à classer ou à sanctionner des agents individuels.
- **Traiter le centre comme un capteur.** Chaque métrique devrait mener à une question pour les équipes de livraison sur ce qu'il faut corriger, documenter ou automatiser en amont.

## Définitions des métriques

Le tableau liste sept mesures que la plupart des centres de services peuvent collecter à partir de leur plateforme de téléphonie et de leur outil ITSM. Les seuils et les objectifs sont à fixer et à écrire par chaque centre ; ce sujet ne donne aucune valeur de référence.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume de contacts | Nombre de contacts reçus par le centre, par canal et par période | nombre de contacts créés dans la période, par canal ; les contacts de test internes, les réponses automatiques de courriel en double et les appels sortants passés par le centre sont exclus | nombre | Journal de la plateforme de téléphonie ou de discussion ; enregistrements de contacts de l'outil ITSM | Centre de services | Signal de demande dans l'affinage du backlog | Hebdomadaire |
| Taux de contacts | Contacts relativement à la taille de la population servie, pour que la croissance ne soit pas prise pour un problème | contacts de la période / utilisateurs actifs ou comptes actifs de la période, ramené à 100 utilisateurs ; le nombre d'utilisateurs est pris dans la même période et la définition d'« actif » est écrite | contacts pour 100 utilisateurs | Enregistrements de contacts et système d'identité ou de licences | Centre de services ; gestion des niveaux de service | Demande ajustée à l'usage dans la revue produit | Mensuelle |
| Temps de réponse | Attente entre le moment où un contact entre dans la file et celui où une personne ou un moteur de réponse automatique s'engage | l'horloge démarre quand le contact est mis en file et s'arrête à la première réponse humaine ; les contacts abandonnés sont exclus de cette mesure et comptés dans l'abandon ; rapportez la médiane et le 85e percentile | secondes (téléphone, discussion) ; minutes ou heures (courriel, portail) | Plateforme de téléphonie ; plateforme de discussion ; horodatages de l'outil ITSM | Centre de services | Accord de travail sur la réactivité | Quotidienne pendant les fenêtres de revue, hebdomadaire en tendance |
| Taux d'abandon | Part des contacts qui prennent fin avant que quiconque s'engage, du fait de l'utilisateur | contacts terminés par l'utilisateur avant la première réponse humaine / contacts mis en file ; les contacts terminés dans un court délai de grâce (indiqué dans la définition, par exemple cinq secondes) sont exclus comme accidentels | pourcentage | Plateforme de téléphonie ; plateforme de discussion | Centre de services | Signal de coût du retard dans la revue de service | Hebdomadaire |
| Temps de traitement | Temps que le centre passe sur un contact | l'horloge démarre quand une personne s'engage et s'arrête quand elle termine le contact, y compris le travail de documentation après contact ; l'attente de l'utilisateur n'est incluse que si la définition le dit ; rapportez la médiane et le 85e percentile, ventilés par type de contact | minutes | Plateforme de téléphonie ; plateforme de discussion ; journal de travail de l'outil ITSM | Centre de services ; gestion des incidents | Signal d'effort dans l'affinage et la planification de la capacité | Hebdomadaire |
| Taux de résolution au premier contact | Part des contacts résolus au premier contact sans contact ultérieur sur la même affaire | contacts résolus pendant le contact et non suivis d'un recontact sur le même problème par le même utilisateur dans la fenêtre de recontact / contacts éligibles ; les appels qui n'exigent qu'un renvoi et ceux que le centre n'est pas censé résoudre sont exclus | pourcentage | Champs de résolution et de liaison de l'outil ITSM ; confirmation de l'utilisateur là où elle est recueillie | Centre de services ; gestion des incidents | Contrôle de la définition de terminé, résolu au premier toucher | Mensuelle |
| Taux de recontact | Part des contacts résolus suivis d'un autre contact sur la même affaire | contacts suivis dans la fenêtre de recontact (par exemple sept jours, fixée dans la définition) d'un autre contact du même utilisateur sur le même service ou problème / contacts résolus de la période antérieure ; les contacts sur un nouveau problème sont exclus | pourcentage | Liaison et historique de réouverture de l'outil ITSM ; enregistrements de contacts | Centre de services ; gestion des incidents | Taux de défauts échappés | Mensuelle |

La résolution au premier contact a plus d'une définition défendable ; la définition fait donc partie de la métrique. Certains centres comptent un contact comme résolu quand l'agent clôt le ticket pendant l'appel. D'autres ne le comptent que si l'utilisateur ne revient pas dans une fenêtre. La seconde est plus difficile à collecter et plus difficile à détourner, et c'est celle qu'on emploie ici. Indiquez la fenêtre, indiquez ce qui compte comme « la même affaire » et appliquez les deux de la même façon à chaque période.

## Recommandations

### Séparer dès le départ les contacts des tickets

**Donnez aux contacts et aux tickets leurs propres définitions, identifiants et comptages.** Un contact est un enregistrement d'une tentative de joindre le centre, et un ticket est un enregistrement de travail. Reliez-les dans l'outil pour qu'un recontact sur la même affaire soit visible. Les rapports qui mêlent les deux donnent un chiffre de volume que personne ne peut rapprocher de la plateforme de téléphonie.

### Rapporter le volume par canal, par catégorie et en taux normalisé

**Montrez le volume total, le volume par canal, le volume par catégorie et le taux de contacts pour 100 utilisateurs.** Les totaux seuls confondent croissance et ennuis. Une baisse du volume téléphonique peut être un passage à la discussion, et une hausse des contacts par le portail peut être un succès délibéré du libre-service. Tracez les séries sur au moins un an pour que la saisonnalité, comme les rentrées et les fins d'exercice, soit visible.

### Utiliser des distributions pour chaque mesure de temps

**Rapportez la médiane et un percentile élevé pour le temps de réponse et le temps de traitement.** La moyenne d'une distribution asymétrique ne décrit presque l'expérience de personne. La médiane montre le contact typique, et le 85e ou le 95e percentile montre la gravité de la queue lente. Dites sur combien de contacts repose le chiffre, et marquez la lecture comme peu fiable quand une file ne traite qu'une poignée de contacts dans la période (voir le sujet 1.6, Culture statistique pour les métriques de service).

### Traiter l'abandon comme un signal de demande et de dotation

**Lisez l'abandon à côté du temps de réponse et des schémas d'arrivée.** Les gens abandonnent quand l'attente dépasse ce qu'ils attendaient ; le taux monte donc avec l'attente, et l'attente monte quand les arrivées dépassent la capacité. La [théorie des files d'attente](https://en.wikipedia.org/wiki/Queueing_theory) explique pourquoi l'attente grandit fortement quand une file approche de la pleine utilisation, ce qui est la raison pour laquelle un centre occupé à près de 100 pour cent a toujours de longues attentes et un fort abandon. Dotez selon les schémas d'arrivée par heure et par jour plutôt que selon une moyenne mensuelle, et montrez l'abandon par heure de la journée (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

### Définir soigneusement la résolution au premier contact, puis la mesurer du côté de l'utilisateur

**Employez une définition fondée sur le recontact et confirmez-la par une courte question aux utilisateurs.** Ne compter que les contacts qui ne reviennent pas dans une fenêtre indiquée est plus difficile à gonfler qu'un indicateur posé par l'agent à la clôture. Ajoutez un contrôle à une question, comme « votre problème est-il résolu ? », et comparez-le avec le chiffre de recontact. Quand les deux divergent, la réponse de l'utilisateur est le meilleur guide, et l'écart désigne où la clôture est prématurée.

### Employer le temps de traitement pour la planification, non pour des objectifs

**Traitez le temps de traitement comme un intrant de capacité et un outil de diagnostic, et ne fixez jamais d'objectif à battre pour les agents.** Un objectif sur le temps de traitement paie pour la précipitation, les transferts prématurés et la documentation mince. Servez-vous de la distribution par type de contact pour planifier les effectifs et trouver les contacts qui prennent bien plus de temps que des contacts semblables, ce qui désigne souvent un article manquant, un outil maladroit ou un processus flou. Visez les causes du système, non les agents.

### Relier les métriques du centre au travail de livraison

**Passez en revue les principales catégories de contacts avec les équipes qui détiennent les services.** Chaque mois, prenez les cinq catégories qui ont généré le plus de contacts pour 100 utilisateurs et demandez quel changement en amont les supprimerait : un correctif, un article, un meilleur message d'erreur ou une voie de libre-service. Consignez les réponses dans le backlog de l'équipe responsable. Cela transforme les chiffres du centre en travail d'amélioration et c'est l'usage agile le plus clair des données (voir le sujet 3.6, Métriques de gestion des connaissances, et le sujet 3.7, Métriques de libre-service et d'automatisation).

### Inclure chaque canal dans les mêmes définitions

**Appliquez les mêmes règles d'horloge et de comptage au téléphone, à la discussion, au courriel, au portail, au guichet et à la messagerie.** Les canaux asynchrones n'ont pas de file en direct ; le temps de réponse signifie donc autre chose dans chacun. Définissez l'horloge par canal et rapportez chacun séparément avant de les combiner. Un centre qui ne publie que son meilleur canal cache l'expérience de tous les autres.

### Relier les métriques à l'expérience de l'utilisateur

**Associez les mesures opérationnelles à une question de satisfaction après contact et à une invite de texte libre.** Une réponse rapide à un contact grossier ou inutile est un mauvais résultat, et les horloges ne peuvent pas le voir. Montrez le taux de réponse et la composition des répondants à côté du score, car seule une partie autosélectionnée des utilisateurs répond (voir le sujet 1.5, Sources de données et instrumentation). Lisez les commentaires avec les personnes qui répondent aux contacts, dans un cadre d'équipe.

### Garder les métriques au niveau de l'équipe et de la file

**Rapportez par file, canal, service et équipe, et gardez les données au niveau de l'agent pour les conversations d'accompagnement auxquelles l'agent participe.** Classer les agents individuels sur le temps de traitement ou le taux de résolution pousse à choisir les contacts faciles et à éviter les difficiles. Cela nuit aussi à la confiance dans les données, et les utilisateurs en ressentent le résultat dans la qualité de l'aide. Servez-vous des chiffres d'équipe pour demander ce dont le système a besoin.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Volume de contacts | Les agents découragent l'enregistrement en redirigeant les utilisateurs vers des canaux non comptés, ou fractionnent un contact en plusieurs pour faire paraître une file occupée ; les responsables visent un volume plus bas | Taux de contacts pour 100 utilisateurs et rapprochement périodique des comptes de téléphonie avec les comptes de tickets ; règle fixe selon laquelle chaque canal est compté |
| Taux de contacts | Le dénominateur est choisi après coup (par exemple une définition large d'« actif ») pour que le taux paraisse meilleur | Une définition écrite et datée des « utilisateurs actifs » et les comptes bruts montrés à côté du taux |
| Temps de réponse | Les contacts reçoivent un message d'accueil automatique ou un transfert vers une file calme, ou l'appel est décroché puis mis en attente ; le courriel reçoit une réponse automatique qui compte comme une réponse | Définir l'horloge comme la première réponse humaine, et suivre à côté l'abandon et le recontact |
| Taux d'abandon | Les appelants sont lâchés avant d'être mis en file, le délai de grâce est étiré, ou une offre de rappel est comptée comme un contact traité | Percentiles du temps de réponse, taux d'achèvement des rappels et délai de grâce publié |
| Temps de traitement | Les appels sont bâclés, transférés tôt ou terminés avant que le problème soit résolu ; les notes sont laissées minces ; le travail est déplacé dans le temps après contact que l'horloge exclut | Résolution au premier contact, taux de recontact et revue par échantillon de la qualité de la documentation par l'équipe |
| Taux de résolution au premier contact | Les tickets sont clos pendant l'appel quel que soit le résultat, « la même affaire » est lu étroitement, ou les contacts difficiles sont classés comme « non censés être résolus » | Taux de recontact, confirmation à une question par l'utilisateur et audits périodiques des exclusions par l'équipe |
| Taux de recontact | On demande aux utilisateurs d'ouvrir un nouveau ticket pour un suivi, ou les suivis sont consignés sous une autre catégorie pour ne pas être liés | Règles de liaison dans l'outil, audit par échantillon des contacts répétés non liés et résolution déclarée par l'utilisateur |

Une lecture saine est un ensemble de chiffres qui concordent entre eux. Le temps de réponse et l'abandon évoluent ensemble, le temps de traitement varie avec le type de contact et non avec l'objectif du jour, la résolution au premier contact et le recontact sont des images en miroir dont la somme est proche du plafond, et la réponse de l'utilisateur à « votre problème est-il résolu ? » concorde avec le chiffre de recontact. Un chiffre qui s'améliore fortement tandis que les autres restent plats est une raison d'examiner comment il est collecté avant de se réjouir. Un centre détourné montre généralement les symptômes dans le recontact, les catégories répétées dans le volume et les plaintes croissantes.

## Compromis : avantages et inconvénients

| Choix | Avantage | Coût ou risque |
| --- | --- | --- |
| Temps de traitement moyen comme titre | Simple, disponible dans toutes les plateformes, facile à expliquer | Récompense la précipitation, cache la queue et invite à des objectifs qui nuisent à la résolution |
| Médiane et 85e percentile pour les temps | Décrit le cas typique et la queue lente | Exige assez de contacts pour être stable et un peu plus d'explication |
| Résolution au premier contact par indicateur de clôture de l'agent | Facile à collecter | Facile à gonfler et difficile à comparer entre centres |
| Résolution au premier contact par fenêtre de recontact | Difficile à détourner et plus proche de l'expérience de l'utilisateur | Exige une bonne liaison dans l'outil et attend que la fenêtre passe avant de pouvoir être rapportée |
| Abandon avec délai de grâce | Supprime les raccrochages accidentels | Le délai de grâce peut être étiré pour flatter le chiffre |
| Taux de contacts pour 100 utilisateurs | Sépare la croissance des ennuis | Dépend d'un nombre d'utilisateurs fiable et d'une définition claire d'« actif » |
| Enquête après contact | Capte ce que les horloges ne peuvent pas | Taux de réponse bas et inégal, et biais vers les utilisateurs aux sentiments forts |
| Reporting par équipe et par file seulement | Protège la confiance et se concentre sur le système | Donne moins de détail pour l'accompagnement individuel, qui demande un processus différent et privé |

Aucun ensemble de mesures ne supprime la tension entre vitesse et soin. Un centre qui répond à chaque contact en quelques secondes et résout peu a une bonne file et un mauvais service, et un centre qui prend le temps de résoudre correctement montrera des temps de traitement et d'attente plus longs. La voie consiste à convenir du résultat qui compte le plus ce trimestre, à rendre l'arbitrage explicite et à revoir la paire de métriques qui le tient en équilibre. Plus vite n'est mieux que tant que la résolution tient.

## Questions à discuter avec votre équipe

**1. Que veut dire « contact » ici, et notre compte correspond-il à ce que rapportent chacun la plateforme de téléphonie et l'outil ITSM ?**
Demandez au groupe de suivre une journée de contacts à travers tous les canaux et de comparer les comptes des deux systèmes. Notez les contacts qui ne deviennent jamais des tickets et les tickets qui ne commencent jamais comme des contacts. L'animateur doit s'attendre à un écart au départ et le traiter comme un constat sur les définitions, non comme une faute des personnes. Convenez d'une règle pour le prochain rapport et de qui en est responsable.

**2. Quand nous disons qu'un contact a été résolu au premier contact, comment savons-nous que l'utilisateur serait d'accord ?**
Passez en revue dix contacts récents marqués comme résolus au premier contact et vérifiez si l'un des utilisateurs est revenu sur la même affaire. Demandez ce que l'agent aurait pu faire différemment pour ceux qui sont revenus. La discussion montre généralement où la clôture a lieu avant que l'utilisateur soit prêt. Décidez d'ajouter ou non une confirmation à une question et quelle devrait être la fenêtre de recontact.

**3. Que devient la personne en attente, et quand abandonne-t-elle ?**
Regardez la courbe d'abandon selon le temps attendu. La plupart des centres trouvent un point au-delà duquel les gens partent en grand nombre, et ce point est la limite pratique de la file. Demandez quelles options de rappel, de discussion ou de réponse automatisée sont offertes, et si certaines sont comptées comme traitées quand le problème n'est pas résolu. L'animateur peut s'en servir pour ouvrir une discussion sur la dotation par heure, non par mois.

**4. Lesquels de nos chiffres de temps de traitement changeraient si nous prêtions attention au travail après contact et à l'attente ?**
Listez ce que l'horloge inclut et ce qu'elle laisse de côté. Demandez si quelqu'un a ressenti une pression pour raccourcir les appels, et ce qu'il a fait. Cette question est plus facile à traiter en équipe que dans un rapport ; donnez donc aux gens l'occasion de s'exprimer sans attribution. Convenez d'une définition et du fait que le temps de traitement ne servira qu'à la planification.

**5. Quelles cinq catégories ont généré le plus de contacts pour 100 utilisateurs le dernier trimestre, et qui détient le correctif de chacune ?**
Apportez à la même table les données de catégories et les responsables des services sous-jacents. Pour chaque catégorie, demandez si la meilleure réponse est un correctif, un article, un meilleur message ou une voie de libre-service. Le but est de repartir avec des éléments dans un backlog et des responsables nommés. Revoyez la liste le trimestre suivant pour voir lesquelles ont bougé.

**6. Rapportons-nous cela au niveau de l'équipe et de la file, et quelqu'un s'en sert-il pour comparer des individus ?**
Demandez directement au groupe si l'un de ces chiffres a servi à juger une personne, et quel en a été l'effet. Discutez de ce que le centre cesserait de faire si la comparaison individuelle prenait fin, et de ce qu'il commencerait à faire. L'animateur doit consigner les exemples et les porter au responsable des métriques pour une décision sur la politique. Le but est un engagement écrit que les données décrivent le système.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison obtiennent du centre la meilleure vue de leur propre service. Les contacts pour 100 utilisateurs après une version montrent vite si un changement a dérouté les gens, et les catégories montrent quoi corriger ensuite. Les équipes devraient s'attendre à une revue mensuelle des principales catégories et les traiter comme intrants de backlog, sans reproche au centre pour avoir rapporté ce que les utilisateurs lui disent. Demandez au centre des échantillons de contacts autant que des comptes, car les mots que les utilisateurs emploient révèlent souvent un problème d'étiquetage ou de conception.

### Équipes de service et d'exploitation

Le personnel du centre et ses responsables ont besoin de chiffres qui les aident à planifier et à s'améliorer sans se transformer en objectifs. La dotation par heure à partir des schémas d'arrivée, les revues de recontact et les demandes d'articles sont les productions les plus utiles. Le personnel devrait avoir son mot à dire sur la façon de définir les métriques, car il sait où les horloges induisent en erreur. Il devrait voir d'abord les chiffres de sa propre équipe et pouvoir les contester.

### Direction et gouvernance

Les dirigeants ont besoin d'un court ensemble de chiffres qui concordent entre eux : volume et taux de contacts, temps de réponse et abandon, résolution au premier contact et recontact, et un score de satisfaction des utilisateurs avec son taux de réponse. Ils devraient demander des distributions et des notes sur les changements de définition, et résister à la fixation d'un objectif unique sur le temps de traitement ou sur le volume. Les objectifs sur la seule vitesse invitent au détournement décrit ci-dessus. La gouvernance devrait consigner qui détient chaque définition (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

### Clients et utilisateurs

Les utilisateurs se soucient de savoir s'ils ont été joints, s'ils ont été bien traités et si le problème est resté corrigé. Ils ne se soucient pas du temps de traitement. Leur dire ce que mesure le centre et agir sur leurs retours bâtit la confiance, tout comme s'assurer que les canaux qu'ils préfèrent sont mesurés et dotés. Les clients qui achètent le service sont servis par des engagements clairs dans un SLA ou un accord d'expérience (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA, et le sujet 6.2, Accords de niveau d'expérience).

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional exploite un centre de services d'une douzaine de personnes pour environ 4 000 utilisateurs cliniques et administratifs. Les chiffres ci-dessous sont illustratifs et ne viennent d'aucune organisation réelle.

La vue hebdomadaire de l'équipe montre 1 900 contacts (illustratif), soit un taux de contacts de 47,5 contacts pour 100 utilisateurs (illustratif). Le temps de réponse téléphonique a une médiane de 40 secondes et un 85e percentile de 6 minutes (illustratif). L'abandon est de 14 pour cent (illustratif) et monte fortement les matins de semaine entre 08:00 et 09:30. Le temps de traitement médian est de 7 minutes, et le 85e percentile de 22 minutes (illustratif). La résolution au premier contact par fenêtre de recontact est de 61 pour cent (illustratif), et le taux de recontact à sept jours de 19 pour cent (illustratif).

Lors de la revue mensuelle, la responsable du centre et l'équipe des applications cliniques examinent les catégories. Les problèmes de connexion et de badge représentent une grande part des contacts du matin, et un récent changement dans la connexion à l'application clinique a produit un pic de contacts sur le même message d'erreur. Le centre et l'équipe des applications décident de faire trois choses. Ils changeront le message d'erreur et ajouteront un lien vers l'article, ils ajouteront une option de rappel pour le pic du matin et ils avanceront d'une heure le début d'un poste pour couvrir le schéma d'arrivée de 08:00. Ils revoiront l'abandon, le recontact et le taux de contacts de cette catégorie après quatre semaines.

En cours de trimestre, un responsable propose un objectif de temps de traitement de 5 minutes pour réduire la file. L'équipe montre que les contacts du 85e percentile sont les lents qui comptent le plus et qu'un objectif pousserait les agents à terminer les appels trop tôt. Elle remarque aussi que le chiffre de résolution au premier contact est monté à 78 pour cent (illustratif) en une semaine pendant que le taux de recontact montait à 27 pour cent (illustratif). Un examen révèle que quelques postes avaient commencé à clore les tickets pendant l'appel avec une note disant à l'utilisateur de rappeler, ce qui comptait comme une résolution au premier contact. L'équipe rétablit la définition fondée sur le recontact, ajoute la question de confirmation à l'utilisateur et abandonne l'objectif de temps de traitement. L'abandon, le temps de réponse et le recontact sont rapportés ensemble à partir de là.

## Perspective sectorielle

**Startup.** Le centre est souvent une boîte partagée ou un canal de discussion tenu par la personne libre. Comptez les contacts par canal, étiquetez la catégorie et regardez chaque mois les cinq premières avec les personnes qui construisent le produit. N'achetez pas de plateforme de centre d'appels avant que le volume ne le justifie, et ne fixez pas d'objectifs de vitesse quand deux personnes répondent à tous les contacts.

**Petite entreprise.** Une personne ou un prestataire externalisé gère généralement un centre de services hébergé. Utilisez les rapports standard de l'outil, demandez par écrit au fournisseur ses définitions de contact, de résolution et d'abandon et exportez de temps en temps les données brutes. Une courte question récurrente aux utilisateurs, comme « votre problème est-il résolu ? », apporte plus de compréhension qu'un long tableau de bord.

**Grande entreprise.** De nombreuses files, langues, outils et fournisseurs mènent à des définitions différentes du même mot. Convenez d'une définition partagée du contact, de la résolution au premier contact et du recontact, et d'un ensemble commun de canaux. Rapportez par file et par service, avec une vue standard pour la direction, et utilisez les données de gestion des effectifs pour doter selon les schémas d'arrivée. Ne comparez les files qu'après avoir vérifié qu'elles emploient les mêmes définitions.

**Gouvernement et secteur public.** Les enregistrements peuvent être soumis à des obligations de conservation, d'accès, d'audit et de vie privée, et un contrat peut fixer les métriques et les objectifs d'un centre externalisé. Lisez les métriques du contrat d'un œil critique et ajoutez au reporting les mesures de garde-fou même si elles ne sont pas exigées. Conservez la piste d'audit des changements de définition, et évitez de collecter des données personnelles inutiles. Les services publics servent souvent des utilisateurs au choix de canal limité ; l'accessibilité de chaque canal fait donc partie du tableau (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation de meilleures métriques de centre est un service moins coûteux et meilleur, et le retour vient de trois endroits. D'abord, moins de contacts répétés : chaque recontact est du travail que le centre n'aurait pas dû faire et du temps que l'utilisateur n'aurait pas voulu passer. Ensuite, des correctifs en amont : les données de catégories du centre peuvent supprimer des classes entières de contacts quand les équipes de livraison agissent dessus. Enfin, une meilleure dotation : les données de schémas d'arrivée permettent aux responsables de placer les gens quand les utilisateurs en ont besoin, ce qui réduit à la fois l'abandon et le temps d'inactivité.

Le coût de collecte est modeste là où la plateforme de téléphonie et l'outil ITSM consignent déjà les événements. Les principaux coûts sont le temps de convenir des définitions, de corriger la liaison entre contacts et tickets, d'ajouter une courte question après contact et de revoir les données avec les équipes de livraison.

Aucun chiffre de retour n'est offert ici, car les chiffres publiés varient selon l'organisation et sa méthode, et aucun n'a été vérifié pour ce sujet. Estimez le retour à partir de vos propres données. Prenez le nombre de recontacts et un temps de traitement mesuré, multipliez par le coût d'une heure d'agent et comparez au coût du correctif. Décrivez le résultat comme une estimation avec ses hypothèses, et revoyez-le après le changement (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Viser le temps de traitement moyen.** Cela récompense la précipitation et les transferts prématurés. Servez-vous de la distribution par type de contact pour la planification, et associez-la à la résolution au premier contact et au recontact.
- **Compter comme résolution au premier contact un indicateur de clôture posé par l'agent.** Il peut être posé quel que soit le résultat. Employez une fenêtre de recontact et une confirmation de l'utilisateur.
- **Classer les agents individuels.** Cela pousse à choisir les contacts faciles et à des comportements défensifs. Rapportez par équipe et par file, et gardez les conversations individuelles privées et bienveillantes.
- **Rapporter une moyenne tous canaux qui cache le canal le plus faible.** Le téléphone, la discussion et le courriel se comportent différemment. Rapportez chaque canal séparément avant de les combiner.
- **Lire le volume sans dénominateur.** Une hausse peut être de la croissance. Montrez les contacts pour 100 utilisateurs et la composition par catégorie.
- **Laisser le centre hors des décisions de livraison.** Des comptes rapportés à un tableau de bord et jamais discutés avec l'équipe produit sont gaspillés. Tenez une revue mensuelle des principales catégories avec leurs responsables.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Chaque personne compte les contacts différemment | Quelques définitions sont écrites pour certaines files | Une définition écrite par métrique, avec début et fin d'horloge et exclusions | Changements de définition consignés et revus selon un calendrier | Définitions partagées avec les fournisseurs et les clients, et révisées quand elles cessent d'éclairer les décisions |
| Capture et qualité des données | Comptes assemblés à la main à partir d'exports | Données de téléphonie et d'ITSM rapportées séparément | Contacts et tickets liés, avec capture automatisée sur tous les canaux | Liaison, complétude et rapprochement mesurés et suivis dans le temps | Données de contacts partagées entre équipes et fournisseurs par des interfaces convenues |
| Usage dans l'amélioration | Chiffres rapportés mais rarement discutés | Revue occasionnelle des périodes chargées | Revue mensuelle des principales catégories avec les responsables de service | Améliorations planifiées, financées et vérifiées au regard du recontact et du volume | Les données du centre pilotent les priorités de backlog entre équipes produit et fournisseurs |
| Garde-fous et confiance | Objectifs de vitesse appliqués à des individus | Un peu de conscience du détournement | Mesures associées rapportées ensemble et aucun classement individuel | Contrôles de détournement audités par l'équipe et confirmation de l'utilisateur en usage | Utilisateurs et personnel aident à fixer les mesures et voient les résultats |

## Liste de vérification

- [ ] Les contacts et les tickets sont définis et comptés séparément, et les comptes concordent.
- [ ] Chaque canal a une horloge écrite pour le temps de réponse et une façon énoncée de traiter les réponses automatiques.
- [ ] Les mesures de temps sont rapportées sous forme de médiane et de percentile élevé avec la taille de l'échantillon.
- [ ] L'abandon a un délai de grâce écrit et est montré avec le temps de réponse.
- [ ] La résolution au premier contact emploie une fenêtre de recontact et un sens énoncé de « la même affaire ».
- [ ] Une confirmation à une question de l'utilisateur est recueillie, avec son taux de réponse affiché.
- [ ] Le taux de contacts pour 100 utilisateurs est rapporté, avec une définition écrite d'« utilisateur actif ».
- [ ] Aucun objectif de temps de traitement n'est fixé pour les agents, et aucune métrique ne classe des individus.
- [ ] Les principales catégories de contacts sont revues chaque mois avec les équipes responsables, et les actions vont dans un backlog.
- [ ] Les définitions sont versionnées et chaque changement est daté.

## Prompts d'IA

**Rédigez des définitions précises des mesures de base du centre.**

```text
J'écris des définitions pour ces mesures du centre de services : [list of
measures, for example contact volume, time to answer, abandonment, handle time,
first contact resolution, recontact]. Nos canaux sont [list channels] et nos
outils sont [telephony or chat platform and ITSM tool]. Pour chaque mesure,
rédigez la définition, la formule, le début et la fin de l'horloge, les
inclusions et exclusions, l'unité et la source de données. Employez les mêmes
termes partout et n'inventez ni valeurs de référence ni objectifs. Énumérez vos
hypothèses et les questions auxquelles je dois répondre pour terminer.
```

**Examinez un ensemble de chiffres du centre à la recherche de détournements.**

```text
Voici les chiffres de notre centre de services pour [period] : [paste figures
such as volume, time to answer percentiles, abandonment, handle time
percentiles, first contact resolution, recontact]. Nos définitions sont [paste
definitions]. Cherchez des schémas qui suggèrent qu'un chiffre s'est amélioré à
cause de la façon dont il est collecté et non parce que le service s'est
amélioré, et suggérez ce qu'il faut vérifier dans les données pour chacun.
N'accusez pas d'individus et n'inventez pas de seuils. Énumérez vos hypothèses
et ce que vous n'avez pas pu déterminer à partir des données fournies.
```

**Préparez une revue mensuelle des principales catégories de contacts.**

```text
Je prépare une revue mensuelle des catégories de contacts du centre de services
pour [service or team]. J'ai [category counts and contacts per 100 users for the
last three months]. Rédigez un ordre du jour, un modèle de tableau court et une
liste de questions à poser à chaque responsable de service sur les causes, les
correctifs, les articles et les options de libre-service. Suggérez comment
consigner les actions dans un backlog. N'inventez ni chiffres ni causes.
Énumérez vos hypothèses et les données que je devrais apporter.
```

**Concevez une courte enquête après contact.**

```text
Je veux mesurer si les utilisateurs se sont sentis aidés après avoir contacté le
[service desk name] par [channel]. Rédigez [number] questions neutres, dont une
sur la résolution du problème, un plan pour savoir quand les envoyer, et
comment rapporter le taux de réponse et la composition des répondants. Signalez
les formulations qui pourraient biaiser les réponses et notez les considérations
de vie privée sachant que les données seront conservées dans [tool]. N'inventez
pas de taux de réponse de référence. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet définit une métrique apparentée et le garde-fou qui doit se trouver à côté d'une mesure du centre.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent chaque métrique associée à un vecteur de détournement et à un garde-fou.

## Points clés à retenir

- Comptez séparément contacts et tickets, définissez les deux et normalisez le volume par rapport à la taille de la base d'utilisateurs.
- Rapportez les temps sous forme de médiane et de percentile élevé, et dites sur combien de contacts repose chaque chiffre.
- Lisez la rapidité de réponse, l'abandon et le temps de traitement comme des signes d'effort, et associez-les à la résolution au premier contact et au recontact comme signes de résultat.
- Définissez la résolution au premier contact selon que l'utilisateur revient ou non, et confirmez-la par un contrôle à une question.
- Utilisez le centre comme capteur : passez en revue chaque mois les principales catégories avec les équipes qui détiennent les services.
- Mesurez des files, des canaux et des services, et ne classez jamais les agents individuels.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
