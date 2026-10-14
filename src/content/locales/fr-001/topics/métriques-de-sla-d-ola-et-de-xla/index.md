# Métriques de SLA, d'OLA et de XLA

**Un accord de niveau de service dit à un client ce qui a été promis, un accord de niveau opérationnel dit aux équipes internes ce qu'elles se doivent les unes aux autres, et un accord de niveau d'expérience dit si les personnes qui utilisent le service s'en trouvent réellement mieux ; il vous faut donc les trois, et il faut les rapporter honnêtement plutôt que comme un mur de vert.**

## Résumé et motivation

Un [accord de niveau de service (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) est un engagement documenté entre un fournisseur de services et un client sur ce que le service livrera : ses heures, sa disponibilité, la rapidité avec laquelle le fournisseur répond aux incidents et les résout, et la vitesse à laquelle il traite les demandes. Dans ITIL 4 (l'édition 2019 du cadre publié par son propriétaire, aujourd'hui AXELOS sous PeopleCert), la pratique de [gestion des niveaux de service](https://en.wikipedia.org/wiki/ITIL) définit ces cibles, les surveille et en rend compte. Un [accord de niveau opérationnel (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) est la contrepartie interne : un accord entre des équipes d'une même organisation, par exemple entre le centre de services et l'équipe réseau, sur ce que chacune fera et à quelle vitesse pour que le SLA tourné vers le client puisse être tenu. Un contrat de soutien joue le même rôle pour un fournisseur externe (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

Un accord de niveau d'expérience (XLA) est le plus récent des trois. Il consigne un résultat convenu en termes de la manière dont les gens vivent le service, comme la facilité avec laquelle ils ont accompli leur travail, ce qu'ils ont ressenti de l'interaction et si le service les a aidés à atteindre leur but. L'idée s'est développée dans la pratique de la gestion des services parce qu'un SLA peut être tenu pendant que les utilisateurs sont mécontents. Ce sujet détient les trois accords et leur rapport. La profondeur sur la façon de mesurer l'expérience relève du sujet 6.2, Accords de niveau d'expérience, et les contreparties d'ingénierie des cibles relèvent du sujet 5.2, SLI, SLO et budgets d'erreur.

Trois concepts agiles et de fiabilité se tiennent à côté de ces accords. Un [indicateur de niveau de service (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) est une propriété mesurée d'un service, comme la part des requêtes servies avec succès. Un [objectif de niveau de service (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) est la cible interne pour un SLI, généralement plus stricte que tout ce qui est promis à un client. La pratique d'[ingénierie de la fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) traite le SLO, et le budget d'erreur qui en découle, comme un outil de décision partagé entre le produit et l'exploitation. Le SLA est le contrat ; le SLO est la visée d'ingénierie ; le SLI est la mesure. Garder les trois séparés évite une confusion courante où une clause de pénalité contractuelle sert à orienter les décisions d'ingénierie quotidiennes.

La famille a un échec bien connu, appelé rapport « pastèque » : un rapport vert à l'extérieur et rouge à l'intérieur. Chaque ligne de SLA apparaît comme tenue, et pourtant les clients sont frustrés, parce que les mesures ont été choisies pour ce que le fournisseur pouvait atteindre de façon fiable plutôt que pour ce qui importe au client, ou parce que les moyennes cachent la mauvaise queue, ou parce que l'horloge a été suspendue pendant le pire de l'attente. Le remède est en partie technique (percentiles, horloges honnêtes, indicateurs centrés sur l'utilisateur) et en partie social (accords négociés comme une conversation, revus selon un rythme et lus comme une question sur le service, non comme un verdict sur une équipe). La mise en garde plus large sur les mesures qui deviennent des objectifs est au sujet 1.2, Loi de Goodhart et psychologie des métriques.

Les équipes agiles pensent en objectifs et en budgets ; les responsables ITIL des niveaux de service pensent en accords et en revues. Les visions s'accordent : l'accord énonce le résultat, les objectifs et les indicateurs sont la manière dont l'équipe tient la promesse, et les mesures d'expérience confirment que cela a compté.

Un dernier terme : un [percentile](https://en.wikipedia.org/wiki/Percentile) est la valeur en dessous de laquelle tombe une part donnée des observations. Le 85e percentile du temps de résolution est le temps dans lequel 85 pour cent des tickets ont été résolus. La plupart des cibles de SLA sont écrites comme un percentile ou une part ; la façon dont le percentile est calculé et ce qu'il inclut sont donc le cœur du sujet (voir le sujet 1.6, Culture statistique pour les métriques de service).

## Principes clés

- **Convenir des résultats avec le client, puis les mesurer.** Un accord est un énoncé négocié de ce dont le client a besoin et que le fournisseur peut soutenir, écrit avec les mots du client et revu ensemble.
- **Rapporter des distributions et des parts, jamais une moyenne unique.** Un temps de résolution moyen qui atteint la cible peut reposer sur une longue queue de travail très en retard. Énoncez le percentile, la population et le comptage.
- **Rendre l'horloge honnête.** Chaque cible a un événement de départ, un événement d'arrêt et une liste de conditions de suspension. Publiez les règles de l'horloge et rapportez à quelle fréquence chaque suspension est employée.
- **Superposer les accords.** Le SLA repose sur des OLA et des contrats de fournisseurs, et les objectifs fixés à l'intérieur de l'équipe devraient être plus serrés que les promesses faites à l'extérieur. Une lacune à n'importe quelle couche apparaît comme un manquement au sommet.
- **Associer chaque mesure opérationnelle à une mesure d'expérience.** Une cible tenue avec une mauvaise expérience, ou l'inverse, est le signal le plus utile du rapport.
- **Compter les quasi-manquements.** Le travail qui a fini juste dans la limite en dit plus sur le risque que le travail qui a fini bien en deçà.
- **Rapporter sur des équipes et des services, jamais sur des personnes.** Les accords décrivent ce à quoi s'engage un service ou une équipe. Ce n'est pas un moyen de classer les individus.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de respect du SLA | Part des éléments mesurés (incidents, demandes ou fenêtres de temps) qui ont atteint une cible de SLA énoncée dans la période | Éléments qui ont atteint la cible divisés par les éléments mesurés. L'horloge démarre à l'heure consignée définie dans l'accord (par exemple la création du ticket) et s'arrête à l'événement d'arrêt défini (par exemple le rétablissement confirmé). Exclus : les éléments annulés comme doublons et le temps inclus dans des exclusions convenues comme la maintenance programmée. Rapportez le comptage à côté de la part | Pourcentage, avec n | Horodatages de l'outil ITSM ; données de supervision pour les cibles fondées sur le temps | Gestion des niveaux de service ; gestion des incidents ; gestion des demandes de service | Respect de l'objectif de niveau de service sur une fenêtre glissante (voir le sujet 5.2, SLI, SLO et budgets d'erreur) | Mensuelle, avec une vue interne hebdomadaire |
| Part de quasi-manquements | Part des éléments qui ont atteint la cible mais ont fini dans le dernier dixième du temps alloué | Éléments terminés à 90 pour cent ou plus du temps cible et encore dans la limite, divisés par les éléments qui ont atteint la cible. Même horloge que le SLA. Sans objet pour les fenêtres de temps (elle s'applique seulement aux mesures de temps jusqu'à la cible) | Pourcentage | Horodatages de l'outil ITSM | Gestion des niveaux de service | Proportion de travail proche de l'attente de niveau de service sur un graphique de flux (voir le sujet 2.1, Mesures de flux) | Mensuelle |
| Part de suspension de l'horloge | Part du temps écoulé total des tickets passée dans des états qui suspendent l'horloge du SLA | Temps de suspension total divisé par le temps écoulé total du début à l'arrêt, pour les éléments concernés. Exclut les éléments où aucun état de suspension n'a été employé. Rapportez par état de suspension | Pourcentage | Historique des statuts de l'outil ITSM | Gestion des niveaux de service ; gestion des incidents | Temps bloqué et temps d'attente dans une vue de flux (voir le sujet 2.4, Métriques de flux de valeur) | Mensuelle |
| Taux de respect de l'OLA | Part des transmissions internes qui ont atteint la cible de l'OLA entre deux équipes | Transmissions accomplies dans la cible de l'OLA divisées par les transmissions reçues. L'horloge démarre quand l'équipe destinataire est affectée et s'arrête quand elle renvoie ou clôt l'élément. Exclus : les éléments réaffectés par erreur, comptés séparément | Pourcentage, avec n | Historique d'affectation de l'outil ITSM | Gestion des niveaux de service ; gestion des incidents | Temps d'attente de transmission et travail bloqué entre équipes (voir le sujet 9.3, Métriques de collaboration et de transmission) | Mensuelle |
| Temps d'attente de transmission (85e percentile) | Temps qu'un élément attend dans la file d'une équipe destinataire avant que le travail commence | 85e percentile du temps entre l'affectation à l'équipe destinataire et la première action consignée par cette équipe. Exclus : les éléments en attente du client | Heures ou minutes | Historique d'affectation et d'activité de l'outil ITSM | Gestion des niveaux de service ; gestion des incidents | Temps de file dans une vue de flux (voir le sujet 2.3, Travail en cours et théorie des files d'attente) | Hebdomadaire |
| Score d'expérience par parcours | Note du client ou de l'utilisateur sur la manière dont le service a soutenu un parcours défini, comme obtenir un nouvel ordinateur portable ou se remettre d'une panne | Moyenne et distribution des notes d'enquête sur une échelle fixe pour les parcours terminés dans la période. Rapportez le taux de réponse et la composition des répondants. Exclus : les enquêtes partielles. Pas une moyenne seule ; montrez donc la distribution | Échelle de notation, avec taux de réponse | Courte enquête après interaction ; événements de parcours de l'outil ITSM | Gestion des niveaux de service ; pratiques de satisfaction de la clientèle (voir le sujet 6.1, Métriques de satisfaction de la clientèle) | Retour des clients et mesures de résultat | Mensuelle, chaque vague étant montrée |
| Écart pastèque | Part des périodes de rapport ou des services où le SLA se lit comme tenu alors que la mesure d'expérience ou une mesure d'impact sur les utilisateurs se lit comme médiocre | Services (ou périodes) avec un respect du SLA à la cible ou au-dessus et une expérience sous son niveau convenu, divisés par les services (ou périodes) avec un respect du SLA à la cible ou au-dessus. Le niveau d'expérience doit être convenu avant que la période soit notée | Pourcentage des services verts | Respect du SLA et score d'expérience ensemble | Gestion des niveaux de service ; amélioration continue | Rétrospective des résultats au regard des effets | Trimestrielle |
| Couverture et actualité des accords | Part des services en production dont le SLA, les OLA et les contrats de fournisseurs existent et ont été revus dans l'intervalle convenu | Services dont les trois couches sont documentées et revues dans l'intervalle, divisés par les services en production du catalogue de services. L'intervalle est fixé par l'organisation. Exclus : les services en cours de retrait | Pourcentage | Catalogue de services (« service catalogue » dans l'orthographe propre d'ITIL) et registre des accords | Gestion des niveaux de service ; gestion du catalogue de services ; gestion des fournisseurs | Accords de travail et chartes d'équipe revus selon un rythme régulier | Trimestrielle |

## Recommandations

### Mettre en place les accords

**1. Écrivez chaque SLA avec les mots du client et rattachez-le à un résultat.** Partez de ce dont le client a besoin, comme « un employé verrouillé hors de son compte travaille de nouveau rapidement », puis choisissez la mesure. Un court accord avec une poignée de cibles significatives vaut mieux qu'un long accord que personne ne lit. Écrivez l'horloge de chaque cible : l'événement de départ, l'événement d'arrêt et les conditions de suspension (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

**2. Énoncez les cibles comme des percentiles ou des parts, avec une population énoncée.** « 90 pour cent des incidents de priorité 2 rétablis en quatre heures » dit plus que « rétablissement moyen inférieur à deux heures ». Convenez de ce qui compte : quelles priorités, quelles heures, quels types de demandes. Montrez le comptage avec chaque pourcentage afin qu'un mois de huit incidents ne soit pas lu comme un mois de huit cents.

**3. Dérivez les OLA du SLA, et donnez à chacun une équipe responsable nommée.** Travaillez à rebours depuis la cible du client : si le client se voit promettre un rétablissement en quatre heures, les OLA doivent laisser de la place pour la détection, le tri, les transmissions et la correction. Écrivez chaque OLA comme un court accord mutuel avec une équipe destinataire, un temps de réponse attendu et une voie de règlement des différends. Un OLA existe pour aider les équipes à planifier ; gardez-le donc aussi léger que la relation le permet.

**4. Gardez les objectifs plus serrés que la promesse.** Fixez le SLO interne à un niveau plus strict que le SLA pour qu'une mauvaise semaine soit remarquée et corrigée avant un manquement visible du client (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Traitez le SLA comme un plancher qui importe à la finance et au service juridique et le SLO comme le chiffre sur lequel les ingénieurs se guident. Employez le budget d'erreur comme le moyen par lequel le produit et l'exploitation arbitrent entre travail sur les fonctions et travail de fiabilité.

### Mesurer honnêtement

**5. Publiez les règles de l'horloge et rapportez les suspensions.** La route la plus courante vers un rapport vert est un état de suspension généreux, comme « en attente du client » employé quand c'est le fournisseur qui attend. Rapportez la part de suspension de l'horloge par état de suspension, échantillonnez chaque mois quelques tickets suspendus et demandez si le client conviendrait que l'horloge aurait dû s'arrêter. Gardez courte la liste des motifs de suspension autorisés et écrivez-la dans l'accord.

**6. Montrez toute la distribution à côté de la cible.** Placez la médiane, le 85e ou le 95e percentile et le pire décile à côté du taux de respect. Un respect constant de 95 pour cent peut cacher une queue de travail qui a pris des jours (voir le sujet 1.6, Culture statistique pour les métriques de service).

**7. Suivez les quasi-manquements et les causes de manquement.** La part de quasi-manquements vous dit quelle part de chance il y a dans le chiffre vert. Quand un manquement survient, consignez la catégorie de cause et s'il s'agissait d'un problème de capacité, de transmission, de fournisseur ou de définition. Reliez les plus grandes catégories à la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes).

**8. Mesurez la file de l'OLA, pas seulement le respect.** Le temps d'attente de transmission au 85e percentile montre où le travail cale, bien avant qu'un manquement au SLA apparaisse. Partagez-le avec l'équipe émettrice et l'équipe destinataire, et décrivez-le comme une propriété du flux entre elles. La conversation porte sur la file, jamais sur les personnes qui s'y trouvent (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

### Ajouter l'expérience et combler l'écart

**9. Associez chaque SLA à une mesure d'expérience pour le même parcours.** Posez aux utilisateurs une courte question après l'interaction pour savoir si cela a fonctionné et si c'était difficile, et rapportez le taux de réponse et la composition des répondants. Convenez à l'avance du niveau qui compte comme assez bon, afin qu'un XLA soit un résultat négocié et non un chiffre inventé après coup (voir le sujet 6.2, Accords de niveau d'expérience, et le sujet 6.1, Métriques de satisfaction de la clientèle).

**10. Rapportez l'écart pastèque et traitez-le comme un constat.** Suivez à quelle fréquence un SLA est tenu alors que l'expérience est médiocre. Un écart croissant vous dit que les mesures du SLA s'éloignent de ce qui compte pour les utilisateurs, et la bonne réponse est de réviser la mesure, non d'expliquer la divergence. Revoyez-le chaque trimestre en présence du représentant du client.

**11. Passez les accords en revue selon un calendrier et retirez ceux que personne n'emploie.** Vérifiez chaque accord au regard du catalogue de services, des contrats de fournisseurs et du travail réel. Un plus petit ensemble d'accords vivants est plus facile à rapporter et plus difficile à détourner.

**12. Rapportez chaque service en une vue qui combine les trois couches.** Montrez sur une page le respect du SLA, la distribution, les temps d'attente de transmission des OLA, le score d'expérience et le travail d'amélioration ouvert pour chaque service. Dérivez l'état des données, non d'une couleur choisie par le responsable du service. Rendez la page ouverte au client et aux équipes (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de respect du SLA | Choisir une cible facile ; clore tôt des tickets et les rouvrir plus tard ; rétrograder la priorité ; exclure des cas difficiles comme « hors périmètre » | Taux de réouverture et taux de requalification de priorité ; échantillon de tickets clos lu avec le client ; revue de la liste d'exclusions chaque trimestre |
| Part de quasi-manquements | Arrêter l'horloge une minute avant la limite, puis poursuivre le travail hors enregistrement ; scinder un ticket en deux plus courts | Temps entre le dernier contact avec le client et le rétablissement confirmé ; nombre de tickets liés ou enfants par incident |
| Part de suspension de l'horloge | Employer des états de suspension sur des tickets qui n'attendent pas le client ; déplacer le travail vers un état qui n'est pas compté | Motifs de suspension audités sur un échantillon ; part des suspensions annulées par le client ; score d'expérience des tickets suspendus |
| Taux de respect de l'OLA | Renvoyer les transmissions à l'émetteur pour relancer l'horloge ; marquer des éléments comme acceptés sans commencer le travail | Nombre de renvois par élément et temps total jusqu'au rétablissement entre équipes ; résultat du SLA de bout en bout |
| Temps d'attente de transmission (85e percentile) | Affecter à une personne plutôt qu'à la file de l'équipe pour cacher l'attente ; consigner une première action symbolique | Qualité de la première action échantillonnée ; temps entre l'affectation et la première mise à jour visible du client |
| Score d'expérience par parcours | N'envoyer les enquêtes qu'aux utilisateurs satisfaits ; poser des questions orientées ; coacher les intervenants pour qu'ils obtiennent de hautes notes | Composition des répondants au regard de la population ; taux de réponse montré à côté du score ; commentaires libres lus lors de la revue |
| Écart pastèque | Fixer le niveau d'expérience bas pour que l'écart reste petit ; changer la mesure d'expérience quand elle baisse | Niveau d'expérience convenu à l'avance et changements consignés avec leurs motifs ; tendance de toute la distribution |
| Couverture et actualité des accords | Marquer un accord comme revu sans vraie revue ; compter un document squelette comme un SLA | Preuve de la revue (participants, changements, décisions) ; échantillon d'accords lus pour leur contenu réel et la signature du client |

Une lecture saine montre un respect qui bouge pour des raisons compréhensibles, des quasi-manquements peu nombreux et expliqués, des suspensions qui restent dans la liste convenue, des temps d'attente de transmission discutés par les équipes qui les détiennent et une mesure d'expérience qui concorde en grande partie avec le SLA. Là où les deux divergent, l'équipe a déjà une note de la cause et un élément d'amélioration.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| SLA contractuels avec pénalités | Clairs, exécutoires, reconnus en droit | Encouragent les jeux d'horloge et le rapport défensif ; les pénalités peuvent aigrir la relation |
| SLA sans pénalités, avec revue régulière | Bâtissent la confiance et des données honnêtes ; se concentrent sur l'apprentissage | Moins de levier quand un fournisseur manque constamment ses cibles |
| OLA détaillés entre toutes les équipes | Attentes claires et moins de différends | Bureaucratie ; les équipes optimisent leur propre horloge au lieu de celle du client |
| OLA légers avec une cible de bout en bout partagée | Encouragent la coopération ; moins de paperasse | Exigent de la confiance et une bonne visibilité des files pour régler les différends |
| Ajouter des XLA aux SLA | Montre si le service aide les gens | Les données d'enquête sont plus bruitées et plus lentes ; l'attribution est plus difficile |

Gardez l'accord petit, rapportez la distribution et employez les données d'expérience pour vérifier les données opérationnelles. Dépensez l'effort sur les règles de l'horloge et les transmissions, là où naît l'essentiel du désaccord sur un chiffre.

## Questions à discuter avec votre équipe

**1. Si notre rapport de SLA est tout vert, que nous attendrions-nous à entendre des utilisateurs sur le service ?**
Demandez au groupe de nommer un service qui est vert depuis plusieurs mois, puis recueillez ce que les utilisateurs disent réellement dans leurs commentaires et plaintes. Comparez les deux. L'animateur doit chercher les écarts entre la mesure et l'expérience vécue, et noter quelles mesures ont été choisies parce qu'elles étaient faciles à atteindre.

**2. Où notre horloge s'arrête-t-elle, et qui l'a décidé ?**
Parcourez les règles de début, d'arrêt et de suspension d'une cible importante et demandez qui a écrit chacune. Regardez la part de tickets dans un état de suspension, et demandez si les clients seraient d'accord. Convenez d'une règle à resserrer ou à clarifier.

**3. Lesquels de nos OLA aident les équipes à planifier, et lesquels ne font que distribuer le blâme ?**
Listez les accords internes et demandez qui lit chacun et quand. Discutez de ce qui se passe après un OLA manqué : une conversation sur la file, ou une chasse au fautif. Le but est de déplacer la discussion vers le flux de travail entre équipes. Choisissez un OLA à simplifier ou à retirer.

**4. Quelle part de notre vert est de la chance ?**
Montrez la part de quasi-manquements pour la cible la plus importante. Discutez de ce qui arriverait si le mois suivant comportait quelques cas difficiles de plus ou quelques personnes disponibles de moins. Demandez si l'équipe a de la marge, et où elle se trouve.

**5. Que voudrait le client que nous promettions et que nous ne mesurons pas aujourd'hui ?**
Invitez le représentant du client ou un utilisateur à décrire ce qui compte pour lui avec ses propres mots, comme pouvoir joindre une personne ou obtenir un ordinateur portable avant le premier jour. Capturez deux ou trois résultats. Décidez lesquels pourraient devenir une courte question d'enquête ou un événement déjà dans les données, et comment le groupe conviendrait d'un bon niveau.

**6. Comment saurions-nous si les mesures de notre SLA s'étaient éloignées de ce qui compte pour les utilisateurs ?**
Discutez de l'écart pastèque comme d'un signal et demandez qui le regarde. Considérez à quelle fréquence les accords sont revus et si le client y assiste. Convenez d'une date de revue et des preuves à apporter, y compris un échantillon de tickets et les derniers résultats d'expérience.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison qui exploitent aussi leurs services respectent le SLA par leurs propres objectifs et budgets d'erreur, et elles ressentent le coût quand une pénalité de SLA ou une escalade de client interrompt le travail planifié. Elles devraient garder les SLO plus serrés que les SLA et traiter le SLA comme un plancher de sécurité, non comme la cible quotidienne (voir le sujet 5.2, SLI, SLO et budgets d'erreur).

### Équipes de service et d'exploitation

Les équipes d'exploitation portent les horloges. Elles ont besoin de règles claires pour les conditions de départ, d'arrêt et de suspension, d'OLA partagés qui nomment la file destinataire et de visibilité sur les temps d'attente de transmission. Elles devraient rapporter clairement les causes de manquement et les employer comme apport au travail sur les problèmes et la capacité (voir le sujet 4.1, Métriques de gestion des problèmes). Elles devraient résister à la pression d'expliquer un résultat par l'horloge au lieu d'en corriger la cause.

### Direction et gouvernance

Les dirigeants emploient les rapports de SLA pour voir si les engagements sont tenus et où investir. Ils devraient demander des distributions, la part de suspension de l'horloge, la part de quasi-manquements et l'écart pastèque, et traiter une série ininterrompue de vert avec curiosité. Financer le travail d'amélioration qui suit une analyse de manquement, et protéger le rapport honnête contre le blâme, compte plus que la cible elle-même (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

### Clients et utilisateurs

Les clients veulent que l'accord décrive ce qu'ils ressentent : la rapidité avec laquelle le problème est corrigé, la fréquence à laquelle il revient et la possibilité de joindre quelqu'un qui aide. Ils devraient faire partie de la revue des accords et avoir un moyen de dire quand un rapport vert ne correspond pas à leur expérience. Un résumé lisible d'une page, avec les raisons de tout manquement et la correction prévue, bâtit plus de confiance qu'un long tableau de respect.

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional soutient un système de planification clinique utilisé par le personnel des services. Le responsable du service, le centre de services, l'équipe applicative et l'équipe d'infrastructure se réunissent chaque mois. Tous les chiffres ci-dessous sont illustratifs.

Le SLA promet que 90 pour cent des incidents de priorité 2 (perte partielle de fonction touchant un service de soins) sont rétablis en quatre heures, mesurées à partir de la création du ticket, dans un service ouvert 24 heures sur 24, sept jours sur sept. Le rapport mensuel montre un respect de 94 pour cent sur 36 incidents (illustratif), nettement vert. L'enquête d'expérience, envoyée après chaque clôture de priorité 2, a un taux de réponse de 41 pour cent (illustratif) et une note médiane de 3 sur une échelle de cinq points, bien en dessous du niveau de 4 que le responsable du service et les cadres de santé avaient convenu comme XLA. L'écart pastèque est visible pour le troisième mois de suite.

L'équipe regarde la distribution. Le rétablissement médian est de 1 heure 40 minutes (illustratif), mais le 95e percentile est de 3 heures 50 minutes (illustratif), et la part de quasi-manquements est de 31 pour cent (illustratif) : près d'un tiers des incidents « tenus » ont fini dans le dernier dixième du temps alloué. Elle regarde la part de suspension de l'horloge et constate que 22 pour cent (illustratif) du temps écoulé est passé dans l'état « en attente du client ». Un échantillon de dix tickets suspendus en montre quatre où le service de soins avait répondu et où le ticket est resté suspendu jusqu'à l'équipe suivante, et trois autres où l'équipe applicative attendait l'équipe d'infrastructure. Le temps d'attente de transmission au 85e percentile pour la file d'infrastructure est de 2 heures 10 minutes (illustratif) contre un OLA de 30 minutes (illustratif), et le taux de respect de l'OLA pour cette transmission est de 58 pour cent (illustratif).

La décision est pratique. Elle change la règle de l'horloge pour que « en attente du client » ne puisse être employé qu'après une demande documentée au client, et l'horloge reprend à la réponse suivante. Elle ajoute une voie d'astreinte pour la file d'infrastructure pendant les heures des services de soins et convient d'un OLA plus petit, avec une revue dans un mois. Elle ajoute la mesure d'expérience et l'écart pastèque au rapport mensuel d'une page et invite un cadre de santé à la revue. Elle abaisse aussi le SLO interne à un rétablissement plus strict de quatre heures pour 95 pour cent des incidents, afin que l'équipe remarque les ennuis avant que le SLA soit en danger.

Un risque de détournement apparaît le deuxième mois. Après le changement de règle de suspension, le respect tombe à 89 pour cent (illustratif), et un responsable demande au centre de services de « revérifier les priorités ». L'équipe repère un pic de rétrogradations de la priorité 2 vers la priorité 3, associe le respect aux taux de requalification et de réouverture, et exige un motif dans l'enregistrement pour tout changement de priorité. Le troisième mois, le respect est de 91 pour cent (illustratif), le 95e percentile est plus bas, la part de quasi-manquements a baissé et la note d'expérience médiane est montée à 3,8 (illustratif). L'écart se réduit parce que le travail s'est amélioré, et les chiffres sont crédibles.

## Perspective sectorielle

**Startup.** Une petite entreprise n'a souvent aucun SLA formel, seulement une promesse informelle à quelques premiers clients. Écrivez une page qui nomme les heures de service, une cible de réponse et une cible de rétablissement énoncée comme un percentile, et gardez un SLO à l'intérieur de l'équipe. Les conversations avec les clients tiennent lieu de XLA ; écrivez donc ce que disent chaque mois les trois clients les plus importants.

**Petite entreprise.** Une petite équipe informatique dépend généralement beaucoup de fournisseurs externes ; les contrats de soutien comptent donc plus que les OLA internes. Vérifiez que l'engagement de chaque fournisseur est au moins aussi strict que le SLA que vous donnez à vos propres utilisateurs, et suivez la performance réelle du fournisseur (voir le sujet 8.4, Métriques des fournisseurs et des contrats). Une simple page mensuelle, avec le respect, les quasi-manquements et une courte enquête auprès des utilisateurs, suffit.

**Grande entreprise.** Les grandes organisations ont besoin d'un registre des accords et d'une métrique de couverture. Standardisez les règles d'horloge et les définitions entre services pour que les consolidations aient un sens (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Méfiez-vous de l'effet pastèque dans les consolidations de gestion, où des centaines de lignes vertes cachent quelques services à la douleur grave pour les utilisateurs.

**Gouvernement et secteur public.** Les organismes publics ont souvent des normes de service légales, des règles de marchés qui fixent les SLA dans les contrats et un devoir de publier les résultats. Gardez clair et vérifiable le chiffre publié, conservez les règles d'horloge et les preuves pour l'audit, et traitez les citoyens comme des clients ayant voix à la revue (voir le sujet 8.5, Rapports réglementaires et gouvernementaux). Là où le contrat est rigide, ajoutez une mesure d'expérience à côté sans changer le libellé du contrat.

## Dossier d'affaires : motivations, ROI et TCO

Le dossier en faveur de meilleures métriques d'accords est un dossier de confiance et d'évitement d'efforts gaspillés. Des rapports qui correspondent à ce que ressentent les utilisateurs réduisent les escalades et les litiges, raccourcissent la dispute mensuelle sur le chiffre qui est le bon et permettent aux dirigeants de financer le travail qui compte. Des OLA clairs réduisent les retards de transmission, qui sont parmi les plus grands contributeurs aux longs rétablissements. Un écart pastèque, attrapé tôt, évite le coût plus grand d'une relation client ou d'un renouvellement de contrat qui tourne mal.

Les coûts sont modestes : le temps d'écrire et de revoir les accords, des données fiables d'horloge et de transmission (voir le sujet 1.5, Sources de données et instrumentation), une courte enquête et une revue mensuelle. Le coût total croît avec le nombre d'accords ; moins d'accords et plus simples sont donc moins chers à détenir.

Le retour apparaît sous forme de manquements moins surprenants, de moins de temps passé à expliquer des rapports et de choix d'investissement mieux informés. Traitez cela comme des schémas à observer et à comparer dans le temps, non comme un calcul. Comparez l'effort d'une revue mensuelle avec le coût d'un litige escaladé ou d'un renouvellement perdu dans votre propre organisation, avec vos propres données (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Ne rapporter que des moyennes.** Une moyenne cache une longue queue de travail en retard. Rapportez des percentiles, la part de quasi-manquements et le comptage.
- **Écrire le SLA autour de ce qui est facile à atteindre.** Une cible choisie pour le confort donne un rapport toujours vert. Partez de ce dont le client a besoin et montrez ouvertement l'écart.
- **Suspendre l'horloge pour améliorer le chiffre.** Des états de suspension généreux transforment le SLA en fiction. Publiez les règles de suspension, auditez des échantillons et rapportez la part de suspension.
- **Les OLA comme arme.** Un OLA employé pour blâmer l'équipe suivante apprend aux équipes à renvoyer le travail. Traitez les manquements comme de l'information sur la file et corrigez le flux.
- **Le rapport dicté par les pénalités.** De lourdes pénalités encouragent la classification défensive et les disputes sur l'horloge. Employez les pénalités avec parcimonie et associez-les aux taux de réouverture et de requalification.
- **Des données d'expérience sans taux de réponse.** Un score élevé tiré d'un petit échantillon auto-sélectionné induit en erreur. Montrez le taux de réponse et la composition des répondants à côté de chaque résultat.
- **Des accords que personne ne revoit.** Des accords périmés décrivent un service qui n'existe plus. Planifiez des revues et retirez ce qui n'est pas employé.
- **Des objectifs individuels tirés d'accords d'équipe.** Scinder un SLA d'équipe en quotas personnels mène à des clôtures précipitées et à des classements. Gardez l'accord au niveau du service et de l'équipe.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Conception des accords | Promesses verbales ou modèles copiés ; cibles choisies par habitude | Quelques SLA écrits ; OLA rares ; horloges différentes entre équipes | Un court gabarit avec des cibles fondées sur les résultats, des percentiles et des règles d'horloge écrites | Accords revus selon un rythme, avec le client et reliés aux SLO | Couches de SLA, d'OLA, de contrat de fournisseur et de SLO ajustées ensemble quand les conditions changent |
| Qualité de la mesure | Comptes manuels ; moyennes ; suspensions non documentées | Respect fondé sur l'outil pour certains services ; usage des suspensions non revu | Une définition et une source de données ; distributions et part de suspension montrées | Quasi-manquements, causes de manquement et temps d'attente de transmission suivis dans le temps et échantillonnés | Données entre équipes et fournisseurs réconciliées ; définitions révisées quand elles cessent d'éclairer les décisions |
| Lien avec l'expérience | Aucun retour d'utilisateurs lié au SLA | Enquêtes ponctuelles pour certains services | Une courte enquête pour les parcours clés, avec le taux de réponse montré | Cibles d'expérience convenues avec les clients et écart pastèque rapporté | Les mesures d'expérience et opérationnelles pilotent un travail d'amélioration partagé avec les clients |
| Usage dans l'amélioration | Rapporté après une plainte | Manquements discutés en réunion d'équipe | Revue mensuelle avec responsables et actions | Les causes de manquement alimentent un travail d'amélioration et de problèmes financé | Clients, fournisseurs et équipes planifient l'amélioration ensemble à partir de la même vue |

## Liste de vérification

- [ ] Chaque SLA énonce son résultat, sa cible comme percentile ou part, et sa population.
- [ ] L'événement de départ, l'événement d'arrêt et les conditions de suspension permises sont écrits pour chaque cible.
- [ ] Chaque SLA tourné vers le client a des OLA ou des contrats de fournisseurs qui s'y inscrivent, chacun avec une équipe responsable nommée.
- [ ] Les objectifs internes sont plus stricts que les cibles de SLA promises.
- [ ] Les rapports montrent la distribution, le comptage, la part de quasi-manquements et la part de suspension de l'horloge.
- [ ] Un échantillon de tickets suspendus et clos est lu chaque mois.
- [ ] Chaque service clé a une mesure d'expérience avec un niveau convenu, et le taux de réponse est montré.
- [ ] L'écart pastèque est suivi et revu avec un représentant du client.
- [ ] Les accords sont revus selon un calendrier et retirés quand ils ne sont pas employés.
- [ ] Aucune métrique d'accord n'est employée pour classer des individus.

## Prompts d'IA

**Examinez un SLA à la recherche de problèmes d'horloge et de formulation.**

```text
Voici le texte de notre SLA pour [service] : [paste agreement text]. Les cibles
sont [list of targets], mesurées dans [tool]. Identifiez les ambiguïtés dans
l'événement de départ, l'événement d'arrêt et les conditions de suspension, les
endroits où une moyenne pourrait cacher une longue queue, et les formulations
qu'un client pourrait lire différemment de nous. Suggérez une formulation plus
claire et les questions que je devrais poser au client. N'inventez ni valeurs de
référence ni conclusions juridiques. Énumérez vos hypothèses.
```

**Rédigez un OLA entre deux équipes.**

```text
J'ai besoin d'un court accord de niveau opérationnel entre [sending team] et
[receiving team] pour soutenir notre SLA de [SLA target] pour [service]. La
transmission typique est [description], et la file est [queue name or tool].
Rédigez un OLA d'une page avec le but, la réponse attendue, les règles de
l'horloge, un moyen de régler les différends et une date de revue. Gardez un ton
coopératif et ne suggérez pas de pénalités sauf si je le demande. N'inventez pas
de valeurs cibles ; demandez-les-moi. Énumérez vos hypothèses.
```

**Cherchez un écart pastèque dans nos données.**

```text
Voici un résumé du respect du SLA et d'une mesure d'expérience pour [list of
services] sur [period] : [paste the table]. Identifiez les services où le SLA se
lit comme tenu et l'expérience comme médiocre, et suggérez des explications
possibles à examiner, comme des suspensions d'horloge, une requalification de
priorité ou une mesure mal choisie. Proposez des questions et un petit
échantillon de tickets à lire pour chacun. Ne supposez pas de causes et
n'inventez pas de seuils. Énumérez vos hypothèses.
```

**Concevez une courte enquête d'expérience pour un XLA.**

```text
Nous voulons ajouter une mesure d'expérience pour [journey, for example getting
a new laptop] pour [audience]. Rédigez [number] questions neutres, un plan pour
savoir quand et comment les envoyer et comment rapporter le taux de réponse et
la composition des répondants. Signalez les formulations qui pourraient biaiser
les réponses et suggérez comment convenir du niveau cible avec [customer
representative role]. N'inventez pas de scores de référence. Énumérez vos
hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet définit la métrique derrière une ligne de SLA et le garde-fou qui doit se trouver à côté.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent en accord le gabarit, les règles d'horloge et le tableau de détournement.

## Points clés à retenir

- Un SLA est une promesse au client, un OLA est une promesse entre équipes et un XLA est un résultat d'expérience convenu ; chacun a besoin de sa propre mesure et de son responsable.
- Rapportez des percentiles, des comptages, des quasi-manquements et la part de suspension de l'horloge, car les moyennes et les suspensions silencieuses produisent des rapports verts sur un service médiocre.
- Dérivez les OLA du SLA et gardez les objectifs internes plus serrés que la promesse.
- Associez chaque SLA à une mesure d'expérience pour le même parcours, et rapportez l'écart pastèque comme un constat sur lequel agir.
- Passez les accords en revue selon un calendrier avec le client dans la salle, et retirez ce que personne n'emploie.
- Gardez chaque métrique d'accord au niveau des services et des équipes, jamais des individus.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
