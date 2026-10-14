# Métriques des analyses post-incident et de l'apprentissage

**Une revue écrite, classée puis oubliée n'a rien enseigné à personne ; mesurez donc si les revues ont lieu, si elles sont bonnes, si leurs actions aboutissent et si les mêmes causes cessent de revenir, et gardez toute la pratique sans reproche pour que les gens continuent de dire la vérité.**

## Résumé et motivation

Tout service tombe en panne un jour ou l'autre. Ce qui sépare une équipe qui s'améliore régulièrement d'une équipe qui répète sa pire semaine, c'est ce qui se passe dans les jours qui suivent la panne. Une [analyse post-incident](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem) est un compte rendu écrit d'un incident ou d'un quasi-accident : ce qui s'est passé, comment cela a été détecté et traité, quelles conditions l'ont rendu possible et ce que l'équipe va changer. ITIL appelle l'activité une revue post-incident, et ce sujet emploie les deux noms de façon interchangeable. Une réflexion régulière de l'équipe en est un proche parent qui porte sur le travail ordinaire plutôt que sur une panne.

Ce sujet couvre les mesures qui disent si cette boucle d'apprentissage fonctionne. Il pose quatre questions. Les revues qui devraient avoir lieu ont-elles réellement lieu ? Sont-elles assez bonnes pour trouver quelque chose de réel ? Les actions qu'elles produisent aboutissent-elles ? Et la même cause continue-t-elle quand même de revenir ? Une cinquième question court sous les autres : les gens se sentent-ils assez en sécurité pour décrire ce qui s'est réellement passé ?

Le sujet se place entre deux voisins et évite de les répéter. Les métriques des incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs) mesurent la ponctualité de la revue et le suivi de ses actions pour les incidents majeurs déclarés, et elles sont le lieu de ces deux mesures dans ce cadre étroit. Les métriques de gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes) détiennent l'enregistrement de problème, l'erreur connue et le délai de correction permanente. Ce sujet élargit la vue à tous les niveaux de gravité d'incident, aux quasi-accidents et aux rétrospectives d'équipe, et il détient la qualité de l'apprentissage lui-même : couverture, profondeur, clôture des actions toutes sources confondues, récurrence des causes et signaux d'absence de reproche qui gardent les données honnêtes.

### Termes employés dans ce sujet

- **Analyse post-incident ou revue post-incident :** un examen structuré et sans reproche d'un incident après le rétablissement du service, qui se termine par un enregistrement écrit.
- **Quasi-accident :** un événement qui aurait pu causer un incident ou un dommage mais ne l'a pas fait, par exemple un déploiement échoué attrapé dans un environnement de test ou une alerte déclenchée quelques minutes avant que les utilisateurs remarquent.
- **Action :** un changement précis avec une équipe responsable nommée, une date d'échéance et un moyen de savoir quand il est terminé.
- **Facteur contributif :** une condition qui a rendu l'incident possible ou pire. La plupart des incidents en ont plusieurs. Une seule « cause profonde » est souvent une simplification, et l'[analyse des causes profondes](https://en.wikipedia.org/wiki/Root_cause_analysis) se traite mieux comme une recherche de conditions, non d'un coupable.
- **Classe de cause :** une étiquette stable tirée d'une courte liste convenue (par exemple « limite de capacité », « dérive de configuration », « supervision manquante », « responsabilité floue ») employée pour repérer la récurrence. Elle décrit une condition du système, jamais une personne.
- **Sans reproche :** un style de revue qui demande comment le système a permis à une personne raisonnable d'agir comme elle l'a fait, et ne demande pas qui punir. C'est une pratique, liée à l'idée de [culture juste](https://en.wikipedia.org/wiki/Just_culture), dans laquelle les erreurs honnêtes sont traitées comme de l'apprentissage et les actes imprudents restent traités séparément.
- **Information Technology Infrastructure Library (ITIL) :** le cadre largement utilisé de gestion des services informatiques (ITSM). Ce sujet renvoie aux pratiques telles que décrites dans ITIL 4 (2019), et le livre dans son ensemble est daté d'octobre 2026. Voir [ITIL](https://en.wikipedia.org/wiki/ITIL).

### En quoi les visions agile et ITIL diffèrent

ITIL apporte la structure. Dans ITIL 4, la gestion des incidents rétablit le service, la gestion des problèmes réduit la probabilité et l'impact des incidents en trouvant et en gérant les causes, et l'amélioration continue transforme ce qui est appris en changement financé. La revue est la charnière entre les deux premières et la troisième. ITIL tend à demander si la revue a eu lieu, si un enregistrement de problème a été ouvert là où il le fallait et si l'amélioration a été inscrite.

Les traditions agile et d'[ingénierie de la fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) apportent des habitudes. Les revues sont sans reproche, courtes, écrites pour des lecteurs au-delà de l'équipe et largement partagées. La réflexion régulière de l'équipe, habitude d'amélioration continue, demande ce qu'il faut changer ensuite, et la préférence [agile](https://en.wikipedia.org/wiki/Agile_software_development) pour de petits ajustements fréquents remplace le grand programme d'amélioration unique. Le livre *Site Reliability Engineering* de Google consacre un chapitre à la culture de l'analyse post-incident et soutient qu'un processus de revue ne vaut que par la culture qui l'entoure.

Employées ensemble, les deux visions sont fortes. ITIL donne les règles de couverture et un endroit où l'action peut vivre. Les habitudes agiles et SRE donnent l'honnêteté et la vitesse. Mesurées ensemble, elles montrent si la boucle se referme.

## Principes clés

- **L'apprentissage est le produit, non le document.** Une revue a réussi quand quelque chose change dans le système, le processus ou la compréhension partagée. Comptez le changement, non la paperasse.
- **L'absence de reproche est une condition préalable à de bonnes données.** Si les gens craignent d'être blâmés, la chronologie sera mince, les facteurs contributifs seront bien rangés et le même incident reviendra. Protégez la franchise avant de mesurer quoi que ce soit d'autre.
- **Mesurer le suivi et la récurrence, non le volume.** Le nombre de revues dit peu. La part d'actions terminées et la part de causes qui restent disparues disent beaucoup.
- **Tenir les métriques au niveau de l'équipe et du système.** Une revue porte sur des conditions. Ne comptez jamais revues, actions ou erreurs par personne, et n'employez jamais ces chiffres dans des conversations de performance.
- **Dimensionner la revue.** Tous les événements ne méritent pas un long document. Fixez les déclencheurs selon l'impact et la valeur d'apprentissage, et laissez un petit événement recevoir une courte revue.
- **Laisser les actions concourir honnêtement.** Une action est du travail. Elle appartient au même backlog que les autres travaux, classée face à eux, et elle peut être déclinée avec un motif consigné.
- **Lire les revues.** Les chiffres localisent le problème. Un humain qui lit un échantillon dit si les revues valent quelque chose.

## Définitions des métriques

Les métriques ci-dessous décrivent la boucle d'apprentissage d'un service ou d'un groupe d'équipes. Chacune énonce ce qui est compté, où les horloges démarrent et s'arrêtent et ce qui est exclu. Les mesures de temps devraient être montrées en médiane et en percentile élevé (par exemple le 85e) avec l'âge de l'élément ouvert le plus ancien, non en moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service).

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des revues | Part des événements qualifiants qui ont reçu une revue terminée | Événements qualifiants avec une revue publiée dans la fenêtre convenue / événements qualifiants clos dans la période. Les événements qualifiants sont ceux qui répondent aux déclencheurs écrits. Les événements encore dans la fenêtre à la fin de la période sont exclus. | pourcentage | Enregistrements d'incidents de l'outil ITSM joints au dépôt des revues | Gestion des incidents ; gestion des problèmes | Réflexion régulière de l'équipe ; accords de travail de l'équipe | Mensuelle |
| Score de qualité des revues | Si une revue publiée répond à une courte norme écrite | Revues d'un échantillon qui répondent à au moins [agreed number] éléments de la liste de contrôle / revues de l'échantillon. L'échantillon est un nombre fixe de revues tirées au hasard chaque trimestre, notées par quelqu'un d'extérieur à l'équipe responsable. | pourcentage | Échantillon trimestriel du dépôt des revues avec une grille de notation | Amélioration continue ; gestion des problèmes | Définition de terminé pour une revue | Trimestrielle |
| Taux de clôture des actions | Part des actions de revue accomplies à leur échéance | Actions accomplies ou formellement déclinées (avec un motif) à l'échéance / actions échues dans la période. L'horloge démarre à la publication de la revue et s'arrête quand l'équipe responsable marque l'action comme faite et qu'un relecteur le confirme. Les actions closes comme « ne sera pas fait » sont comptées séparément et rapportées. | pourcentage | Backlog de l'équipe ou registre d'amélioration de l'ITSM, lié à la revue | Amélioration continue ; gestion des problèmes | Backlog de l'équipe ; actions d'amélioration | Mensuelle |
| Âge des actions ouvertes | Âge des actions de revue encore ouvertes | Pour chaque action ouverte, aujourd'hui moins la date de publication de sa revue. Rapportez la médiane, le 85e percentile et la plus ancienne. | jours | Backlog de l'équipe ou registre d'amélioration | Amélioration continue | Ancienneté de l'élément de travail ; travail en cours vieillissant | Mensuelle |
| Taux de récurrence des causes | Part des événements dont la classe de cause correspond à un événement antérieur du même service | Événements de la période dont la classe de cause principale correspond à une revue close dans les douze mois précédents pour le même service / événements de la période ayant une classe de cause consignée. Les événements sans classe de cause consignée sont exclus et comptés séparément. | pourcentage | Champ de classe de cause du dépôt des revues joint aux enregistrements d'incidents | Gestion des problèmes ; gestion des incidents | Analyse des défauts échappés ; thèmes de rétrospective | Trimestrielle |
| Taux de signalement des quasi-accidents | Volume de quasi-accidents et de signaux faibles que les gens choisissent de signaler | Quasi-accidents consignés dans la période / services actifs, montré comme une tendance par service et jamais par personne. Le taux est censé monter tôt dans un programme sain, puis se stabiliser. | nombre par service | Journal des quasi-accidents, ou champ étiqueté dans le gestionnaire de tickets | Gestion des incidents ; gestion des risques | Bilan de santé de l'équipe ; tableau des obstacles | Mensuelle |
| Portée de l'apprentissage | Jusqu'où une revue voyage au-delà de l'équipe qui l'a écrite | Revues présentées ou discutées hors de l'équipe responsable (un forum partagé, une séance entre équipes ou une lecture documentée par une équipe dépendante) dans [agreed number] jours après la publication / revues publiées dans la période | pourcentage | Comptes rendus de forums ou de réunions et dépôt des revues | Amélioration continue ; gestion des connaissances | Revue des parties prenantes ; communautés de pratique | Trimestrielle |
| Report des actions de rétrospective | Part des actions de rétrospective d'équipe terminées avant la rétrospective suivante | Actions de rétrospective accomplies avant la rétrospective suivante / actions de rétrospective convenues à la précédente. Les actions délibérément abandonnées avec un motif sont retirées des deux comptes. | pourcentage | Notes ou tableau de rétrospective, gardés dans le backlog de l'équipe | Amélioration continue | Réflexion régulière de l'équipe | Par période de revue, revu chaque trimestre |
| Pouls de la liberté de parole | Si les gens croient pouvoir décrire des erreurs sans reproche | Part des réponses au niveau [agreed level] ou au-dessus sur un court ensemble de questions anonymes (par exemple « je peux décrire une erreur dans une revue sans crainte d'être blâmé ») / réponses reçues. Le pouls n'est rapporté que pour des groupes assez grands pour protéger l'anonymat. | pourcentage | Enquête anonyme de pouls | Amélioration continue ; changement organisationnel | Bilan de santé de l'équipe ; vérification de la sécurité psychologique | Trimestrielle |

Une revue est « publiée » quand elle est visible des lecteurs visés, non enregistrée comme brouillon. Une classe de cause est consignée par le groupe de revue à partir de la revue elle-même, à partir d'une courte liste convenue, jamais par celui qui a clos le ticket.

## Recommandations

### Décider de ce qui mérite une revue

**1. Écrivez les déclencheurs et publiez-les.** Une règle telle que « chaque incident majeur, chaque incident des deux plus hauts niveaux de gravité, tout événement avec perte de données de clients et tout quasi-accident que l'équipe juge instructif » supprime la discussion et rend la couverture mesurable. Sans déclencheurs écrits, les revues suivent l'humeur et la charge de travail, et le chiffre de couverture ne veut rien dire.

**2. Dimensionnez la revue à l'événement.** Un petit événement peut avoir une revue d'une demi-page écrite en trente minutes, alors qu'un incident majeur peut mériter une chronologie complète et une séance animée. Une voie légère garde la couverture élevée sans faire de la pratique un fardeau.

### Juger la qualité en lisant

**3. Échantillonnez et lisez des revues chaque trimestre.** Tirez un petit échantillon aléatoire, et faites lire chaque revue par quelqu'un d'extérieur à l'équipe responsable au regard d'une courte liste de contrôle. Les éléments utiles comprennent une chronologie qui montre les décisions et l'information disponible quand elles ont été prises, plus d'un facteur contributif, une description de ce qui a bien marché, des actions avec responsables et dates, et un langage qui décrit le système et non l'individu. Rapportez la part qui répond à la norme, et transmettez les constats aux rédacteurs comme accompagnement.

**4. Enseignez l'art de mener des revues.** Le [biais rétrospectif](https://en.wikipedia.org/wiki/Hindsight_bias) fait paraître les événements évidents après coup et pousse les auteurs vers « quelqu'un aurait dû remarquer ». Demandez aux animateurs de reconstituer ce que les gens savaient à chaque moment, et employez les [cinq pourquoi](https://en.wikipedia.org/wiki/Five_whys) comme une incitation à poser des questions, non comme une recette pour une réponse unique.

### Faire aboutir les actions

**5. Mettez les actions dans le vrai backlog.** Une action qui ne vit que dans un document de revue est invisible à la planification. Créez un élément de travail dans le gestionnaire de tickets de l'équipe responsable, liez-le à la revue et laissez-le concourir pour la capacité comme n'importe quel autre travail. Rapportez la clôture par équipe et par service afin qu'une action bloquée devienne visible aux personnes qui peuvent la débloquer.

**6. Autorisez un honnête « ne sera pas fait », et consignez pourquoi.** Certaines actions s'avèrent trop coûteuses ou n'ont plus de pertinence. Les clore avec un motif énoncé est plus sain que de les laisser ouvertes pendant un an ou de les marquer faites sans les faire. Rapportez la part déclinée, car une part très élevée suggère que le processus de revue propose des actions que personne ne financera.

**7. Suivez l'âge des actions ouvertes, autant que le taux de clôture.** Le 85e percentile de l'âge des actions ouvertes et la plus ancienne action ouverte montrent ce qui est bloqué. Passez en revue les plus anciennes à la réunion qui revoit la fiabilité du service.

### Guetter les répétitions

**8. Gardez une courte liste de classes de causes, et étiquetez chaque revue.** Une liste de huit à quinze classes suffit. Revoyez la liste quand plus d'une petite part des événements tombe dans une classe « autre ». L'étiquetage permet de répondre à la question « l'avons-nous déjà vu ? » avec des données, et alimente la gestion des problèmes avec des schémas qu'aucune revue isolée ne montre (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 4.6, Dette technique et erreurs connues).

**9. Traitez la récurrence comme un signal sur l'action, non sur les personnes.** Quand une classe de cause revient, demandez si les actions antérieures ont été terminées, si c'étaient les bonnes actions et si la classe est trop large. Une récurrence après la clôture de toutes les actions signifie que les actions n'ont pas fonctionné, ce qui est une nouvelle utile.

### Protéger l'honnêteté

**10. Gardez les revues sans reproche et rendez-le visible.** Énoncez dans le gabarit que la revue décrit des conditions et des décisions et n'attribue pas de faute, et faites remercier les auteurs par les dirigeants pour leur franchise. La [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety), dans la recherche d'Amy Edmondson sur les équipes de travail, est la croyance partagée que l'équipe est un lieu sûr pour la prise de risques interpersonnels (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

**11. Récompensez les signalements de quasi-accidents, et lisez d'abord un compte en hausse comme une bonne nouvelle.** Une équipe qui commence à signaler des quasi-accidents verra le compte grimper, parce que les événements se produisaient depuis toujours. Dites-le à l'avance, suivez la part des quasi-accidents qui ont produit un changement et publiez les histoires avec le consentement de l'équipe.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des revues | Rétrécir les déclencheurs ; rétrograder la gravité pour que les événements tombent hors d'eux ; déposer une « revue » d'une ligne pour cocher la case | Score de qualité des revues ; comparer les comptes de gravité des incidents à l'impact signalé par les clients ; auditer les rétrogradations |
| Score de qualité des revues | Écrire pour la liste de contrôle avec du texte passe-partout ; notation par l'équipe responsable ; un échantillon prévisible | Notateur extérieur ; échantillon aléatoire ; lire deux revues à voix haute chaque trimestre ; suivre si les actions des revues bien notées aboutissent |
| Taux de clôture des actions | Fixer des échéances lointaines ; scinder les actions en morceaux triviaux ; clore des actions sans vérification ; déclarer « ne sera pas fait » pour vider la liste | Âge des actions ouvertes ; part déclinée avec motifs ; confirmation par un relecteur que le changement fonctionne ; taux de récurrence des causes |
| Âge des actions ouvertes | Clore et rouvrir ou recréer une action pour remettre son âge à zéro ; déplacer des actions vers une liste séparée d'« idées » | Lier les nouvelles actions à la revue d'origine et garder la première date ; compte des actions déplacées vers les idées |
| Taux de récurrence des causes | Consigner des classes de causes vagues ou changeantes pour que rien ne corresponde ; employer une large classe « autre » ; lier une répétition à une classe différente | Part des événements dans « autre » ; relecture périodique des revues par classe ; revue de la liste des classes elle-même |
| Taux de signalement des quasi-accidents | Demander des signalements pour atteindre un chiffre ; consigner des événements triviaux ; ou, dans l'autre sens, lire le chiffre comme un échec et supprimer les signalements | Part des quasi-accidents qui ont mené à un changement ; aucun objectif sur le compte ; retour du pouls de la liberté de parole |
| Portée de l'apprentissage | Ajouter des noms à une liste de diffusion ; présenter à des séances peu suivies ; compter un lien comme une lecture | Présence ou notes de discussion réelles ; demander aux équipes dépendantes ce qu'elles ont changé après la dernière revue |
| Report des actions de rétrospective | Ne convenir que d'actions triviales faciles à finir ; sauter la rétrospective ; marquer des éléments comme terminés | Impact des actions tel que jugé par l'équipe ; taux de tenue des rétrospectives ; si le même thème apparaît pendant plusieurs semaines |
| Pouls de la liberté de parole | Faire pression sur les répondants ; n'interroger que les personnes confiantes ; rapporter une moyenne qui cache un groupe à faible score | Taux de réponse et composition des répondants ; taille minimale de groupe ; commentaires libres lus en entier ; si le langage des revues change |

Une lecture saine montre des revues pour les événements qui comptent, une norme de qualité que la plupart respectent, des actions qui aboutissent ou sont honnêtement déclinées, une poignée de vieilles actions que les dirigeants peuvent nommer, des classes de causes qui diminuent en fréquence après avoir été traitées, et un compte de quasi-accidents qui a monté puis s'est stabilisé. Le pouls reste stable ou s'améliore quand un incident difficile survient. Un schéma trop propre est lui-même un signe qu'il faut lire un échantillon.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Revoir chaque incident | Couverture complète ; pas de discussion sur les déclencheurs | Lourd ; les revues deviennent superficielles ; les équipes finissent par détester le processus |
| Revoir selon des déclencheurs écrits | Concentre l'effort sur l'impact et la valeur d'apprentissage | Les déclencheurs demandent de l'entretien ; les événements limites passent entre les mailles |
| Étiquetage des classes de causes | Trouve des schémas entre revues | Les classes sont une simplification ; les vraies causes sont souvent plusieurs choses à la fois |
| Pouls anonyme sur la sécurité | Signal honnête sur une question sensible | Grossier ; les petites équipes peuvent être identifiables ; fatigue des enquêtes |

La réponse en prose est de garder la boucle courte et les chiffres peu nombreux : déclencheurs écrits, petit échantillon de qualité, un seul suivi d'actions et une liste de classes de causes, le pouls de sécurité s'ajoutant une fois que l'équipe a confiance dans le reste. Aucune mesure ici ne prouve que l'apprentissage a eu lieu. Ensemble, elles montrent si les conditions pour qu'il ait lieu sont réunies.

## Questions à discuter avec votre équipe

**1. Lesquels de nos cinq derniers incidents ont reçu une revue, et quelqu'un a-t-il changé quelque chose grâce à elle ?**
Partez de la liste des incidents, non du dossier des revues, afin que les revues manquantes deviennent visibles. Pour chaque revue, demandez ce qui est différent aujourd'hui dans le système ou le processus. Si la réponse est « rien », demandez pourquoi la revue a été tenue et qui l'a lue. L'animateur doit consigner les réponses sans juger, car elles montrent si la pratique produit du changement ou de la paperasse.

**2. Qu'est-ce qui rendrait plus difficile ici de dire la vérité dans une revue ?**
Demandez des exemples précis : la réaction d'un chef, une évaluation de performance, une escalade de client, un ton dans un courriel. Invitez d'abord les gens à écrire leurs réponses anonymement. Cherchez des conditions qui peuvent être changées, comme qui assiste, qui lit et ce que disent les dirigeants à voix haute. C'est la conversation qui protège tous les autres chiffres du sujet.

**3. Quelles actions sont ouvertes depuis le plus longtemps, et qu'est-ce qui les arrête ?**
Affichez les cinq plus anciennes. Pour chacune, demandez si l'action est toujours la bonne, si elle a un responsable disposant de capacité et si elle devrait être faite, replanifiée ou déclinée. Gardez l'accent sur le système de travail et non sur le responsable. Convenez d'une décision pour chacune avant la fin de la séance.

**4. Quand le même genre de problème est-il revenu, et que cela dit-il de la correction antérieure ?**
Employez les étiquettes de classes de causes pour trouver une répétition, et lisez la revue antérieure et ses actions. Demandez si les actions ont été terminées, si elles traitaient les facteurs contributifs et si la classe a été tracée trop largement. Le but est une meilleure action, non une explication.

**5. Signalons-nous les quasi-accidents, et que se passe-t-il quand quelqu'un le fait ?**
Demandez un exemple récent et retracez ce qui a suivi. Si rien n'a suivi, demandez pourquoi les gens signaleraient de nouveau. Si le compte est bas, demandez ce que les gens craignent. L'animateur doit expliquer qu'un compte en hausse est attendu au début, et convenir de la façon dont l'équipe répondra au prochain signalement afin que signaler paraisse utile.

**6. Comment saurions-nous qu'une revue était bonne si nous ne pouvions regarder aucun chiffre ?**
Cela demande à l'équipe de décrire la qualité avec ses propres mots. Les réponses courantes comprennent « quelqu'un d'extérieur à l'équipe a appris quelque chose », « la correction a tenu » et « l'auteur n'avait pas peur ». Transformez les réponses en liste de contrôle pour l'échantillon trimestriel, et revoyez-la après deux trimestres.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison écrivent beaucoup de revues et portent la plupart des actions ; elles ressentent donc d'abord le coût d'un processus maladroit. Elles bénéficient de gabarits courts, d'une règle claire de déclenchement et d'un lien visible entre une action et un élément du backlog de l'équipe. La réflexion régulière de l'équipe mérite la même discipline de suivi qu'une revue d'incident, et une équipe qui termine ses actions de rétrospective pratique la même habitude à plus petite échelle. Gardez-vous de voir les actions évincées par la pression des fonctions, et portez ce compromis ouvertement devant le responsable de produit (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent les preuves (chronologies, alertes, journaux de discussion) et sont les mieux placées pour étiqueter les classes de causes de façon cohérente et remarquer une répétition avant qu'elle devienne une panne. Elles ont besoin de temps protégé pour écrire, car les revues écrites à la fin d'un long quart sont minces. Liez chaque revue à tout enregistrement de problème qu'elle alimente (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Direction et gouvernance

Les dirigeants fixent le ton de chaque revue par ce qu'ils demandent ensuite. « Qui a fait ça ? » met fin aux revues honnêtes, et « qu'avons-nous appris, et qu'est-ce que nous changeons ? » les invite. Les instances de gouvernance devraient attendre la couverture, la qualité, l'âge des actions et la récurrence à la revue de fiabilité, financer les actions qui demandent un investissement et ne jamais comparer les équipes selon le nombre de leurs incidents ou de leurs revues.

### Clients et utilisateurs

Les clients voient rarement la revue, mais ils en ressentent le résultat : la même panne qui cesse de revenir, et un compte rendu honnête quand elle revient. Là où les contrats le permettent, publiez un résumé en langage clair après un incident important (voir le sujet 3.4, Métriques des incidents majeurs). Un contact répété sur le même problème est le signal côté client que l'apprentissage n'a pas pris (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite une vitrine destinée aux clients, un service de paiement et une plateforme d'inventaire interne. Cinq équipes produit construisent et exploitent ces services, et un petit groupe de gestion des services tient le processus d'incidents et de problèmes. Les chiffres de cet exemple sont illustratifs.

Au cours d'un trimestre, le détaillant a 41 incidents dans les deux plus hauts niveaux de gravité. Les déclencheurs écrits les qualifient tous pour une revue, et 36 revues sont publiées dans les dix jours ouvrés, de sorte que la couverture est d'environ 88 pour cent. La direction est contente. Le groupe de gestion des services tire un échantillon aléatoire de huit revues, demande à une équipe d'un autre domaine produit de les noter et constate que trois seulement répondent à la norme convenue. La lacune courante est que la chronologie liste ce qui s'est passé mais non ce que les gens savaient quand ils ont pris chaque décision, et que la section des facteurs contributifs nomme une cause unique.

Le même échantillon montre que, sur 74 actions échues dans le trimestre, 51 ont été accomplies à leur échéance, soit un taux de clôture d'environ 69 pour cent. La plus ancienne action ouverte, vieille de 210 jours, est un seuil d'alerte de capacité sur la base de données de paiement, reporté six semaines de suite. L'étiquetage des causes montre « limite de capacité » dans 9 des 36 revues, dont 4 pour le service de paiement. Le pouls anonyme, auquel ont répondu 58 des 70 personnes invitées, est plus bas dans le groupe d'astreinte, où plusieurs commentaires disent que des cadres supérieurs posent des questions pointues sur des personnes nommées.

L'équipe prend trois décisions. D'abord, elle tient une courte séance avec les cadres supérieurs qui assistent aux revues et convient d'une règle : les questions posées en salle portent sur des conditions et des décisions, et tout suivi concernant une personne passe par le chef d'équipe. Ensuite, elle place la plus ancienne action de capacité en tête de la prochaine ronde de planification de l'équipe de paiement, classée face au travail sur les fonctions par le responsable de produit, et rapporte le résultat à la revue de fiabilité. Enfin, elle ajoute deux éléments de liste de contrôle au gabarit de revue (ce que les gens savaient à chaque décision, et au moins deux facteurs contributifs) et mène une séance d'accompagnement des rédacteurs à l'aide d'une revue anonymisée.

Le risque de détournement apparaît le trimestre suivant. La couverture des revues monte à 97 pour cent, mais la part de revues de moins de 300 mots double, et quelques équipes ont rétrogradé des incidents de la gravité deux à trois, juste sous le déclencheur. L'échantillon de qualité et un audit des changements de gravité l'attrapent. Le groupe demande pourquoi les rétrogradations ont eu lieu, apprend que les équipes sentaient qu'une revue était une punition et assouplit l'attente de longueur pour les petits événements tout en gardant le déclencheur de gravité deux.

## Perspective sectorielle

**Startup.** Une petite équipe peut apprendre vite, car tout le monde a assisté à l'incident. Le risque est que rien ne soit écrit et que la leçon parte avec la prochaine embauche. Gardez un gabarit d'une page, tenez une revue pour tout ce qui réveille quelqu'un la nuit et ne suivez que la clôture des actions et les causes répétées. Protégez la franchise en faisant lire les revues aux fondateurs sans commentaire sur les individus.

**Petite entreprise.** La personne qui a réglé le problème est souvent la seule à le comprendre. Employez un bref gabarit et passez en revue chaque mois la plus ancienne action ouverte.

**Grande entreprise.** Standardisez le gabarit, le déclencheur et la liste des classes de causes, et laissez les équipes adapter la profondeur. Fournissez un endroit où chercher les revues, un forum entre équipes et un notateur extérieur. Méfiez-vous des classements d'équipes selon le nombre d'incidents ou de revues, car ils punissent la transparence.

**Gouvernement et secteur public.** Les revues peuvent être soumises à des obligations légales, à l'audit ou à des demandes d'accès à l'information, ce qui rend les auteurs prudents. Séparez la revue d'apprentissage de tout rapport formel destiné au contrôle, et consignez les actions bloquées avec leur dépendance (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût de cette pratique est surtout du temps. Les auteurs passent des heures sur chaque revue et beaucoup de personnes passent une heure en séance. Un échantillon trimestriel de qualité prend quelques heures à un lecteur extérieur. L'étiquetage des causes et le suivi des actions demandent un peu d'outillage, qui peut être un tableur et un champ dans les outils existants de tickets et de backlog. Il y a un coût plus grand et moins visible dans le comportement de la direction, car le programme échoue si les dirigeants réagissent mal à des revues franches.

Le retour vient de causes qui cessent de se reproduire et d'incidents plus courts parce que l'équipe en a vu de semblables. Moins d'incidents répétés libèrent de la capacité d'ingénierie et d'exploitation, réduisent les escalades et abaissent le coût de la perturbation pour les clients. Une bibliothèque partagée de revues raccourcit la courbe d'apprentissage du nouveau personnel et réduit la dépendance à quelques personnes expérimentées. Ne citez pas de pourcentage d'une autre organisation. Mesurez votre propre ligne de base de récurrence des causes, d'âge des actions ouvertes et de contacts répétés avant de commencer, et comparez après deux ou trois trimestres.

La limite honnête est que l'apprentissage est difficile à attribuer : une baisse de la récurrence peut venir d'une meilleure revue, d'un changement d'architecture sans rapport ou de la chance. Pour un traitement plus large, voir le sujet 7.7, Retour sur investissement et dossier d'affaires.

## Antimodèles et pièges

- **Le théâtre des revues.** Les revues satisfont une règle et personne ne les lit. Échantillonnez et lisez plutôt les revues, et jugez-les au changement qu'elles ont produit.
- **La recherche de la cause profonde sous forme de personne.** La revue nomme une erreur individuelle et s'arrête. Demandez plutôt ce qui a rendu l'erreur probable, et listez plusieurs facteurs contributifs.
- **L'inflation d'actions.** Les revues produisent de longues listes que l'équipe ne peut pas financer. Limitez plutôt chaque revue à quelques actions classées et déclinez le reste avec un motif.
- **Des actions hors du backlog.** Elles vivent dans un document et ne sont jamais planifiées. Créez plutôt des éléments de travail dans le gestionnaire de tickets de l'équipe responsable et liez-les à la revue.
- **La clôture sans vérification.** L'action est marquée faite et la cause revient. Faites plutôt confirmer par un relecteur que le changement fonctionne et surveillez la récurrence de la classe de cause.
- **Employer des comptes pour comparer les équipes.** Une équipe avec plus de revues ou de quasi-accidents paraît pire. Lisez plutôt un compte élevé comme de l'ouverture, et comparez chaque équipe à son propre historique.
- **Punir le messager.** Un dirigeant interroge une personne après une revue franche. Convenez plutôt d'une norme sur la façon dont les dirigeants réagissent, et vérifiez le pouls après les incidents difficiles.
- **Traiter les métriques comme une preuve d'apprentissage.** Un tableau de bord propre est pris pour la preuve que l'organisation apprend. Continuez plutôt de lire un échantillon de revues et d'interroger les personnes qui les ont écrites.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Déclencheurs et couverture | Les revues dépendent de qui est disponible et de la gravité ressentie | Certaines équipes tiennent des revues pour les incidents graves | Déclencheurs écrits et gabarit commun ; couverture comptée par gravité | Couverture suivie dans le temps et auditée au regard des rétrogradations ; voies légère et complète | Déclencheurs adaptés avec les clients et les fournisseurs ; revues partagées pour les incidents conjoints |
| Qualité et honnêteté | Les revues nomment une personne ou une cause unique | Certaines équipes écrivent des revues sans reproche | Norme de liste de contrôle ; langage sans reproche attendu | Échantillon trimestriel extérieur ; pouls revu ; accompagnement des rédacteurs | Revues rédigées avec les fournisseurs et les utilisateurs ; la lecture entre équipes est routinière |
| Actions et récurrence | Les actions vivent dans des documents et sont rarement terminées | Actions suivies par certaines équipes ; la clôture varie | Actions dans le vrai backlog avec responsables, dates et refus honnête | Clôture, âge et récurrence des causes revus, avec amélioration financée | Actions coordonnées entre équipes et fournisseurs ; classes de causes révisées à mesure que les schémas évoluent |
| Partage et apprentissage | Les leçons restent dans l'équipe | Revues affichées pour l'équipe | Revues consultables et partagées à un forum régulier | Portée mesurée ; les équipes dépendantes rapportent les changements faits | L'apprentissage alimente la conception, l'accueil et les contrats avec les fournisseurs |

## Liste de vérification

- [ ] Des déclencheurs écrits disent quels événements reçoivent une revue, y compris les quasi-accidents de grande valeur d'apprentissage.
- [ ] Un court gabarit existe, avec une voie légère pour les petits événements.
- [ ] Les revues sont sans reproche par le gabarit et par le comportement de la direction.
- [ ] Chaque action est un élément de travail dans le backlog de l'équipe responsable, avec un responsable et une date.
- [ ] Les actions peuvent être déclinées, et le motif est consigné et rapporté.
- [ ] Une courte liste de classes de causes existe, et chaque revue est étiquetée.
- [ ] Un lecteur extérieur note chaque trimestre un échantillon aléatoire de revues.
- [ ] Les plus anciennes actions ouvertes sont revues avec la fiabilité du service.
- [ ] L'âge des actions ouvertes est rapporté en médiane, en percentile élevé et en plus ancienne.
- [ ] Une voie de signalement des quasi-accidents existe, et l'équipe sait ce qui se passe après un signalement.
- [ ] Aucune métrique de ce sujet n'est rapportée ni employée par personne.
- [ ] Un pouls de la liberté de parole n'est mené que pour des groupes assez grands pour protéger l'anonymat.

## Prompts d'IA

**Examinez la qualité d'un projet d'analyse post-incident.**

```text
Voici un projet d'analyse post-incident pour [incident description] sur
[service]. Vérifiez-le au regard de cette norme : [paste your review
checklist]. Pour chaque élément, dites si le projet y répond, citez les lignes
qui étayent votre jugement et signalez le langage qui attribue une faute à une
personne au lieu de décrire des conditions. N'ajoutez pas de faits absents du
texte. Énumérez vos hypothèses et tout ce que vous n'avez pas pu juger à partir
de ce que j'ai fourni.

[paste the draft, with personal data removed]
```

**Proposez des classes de causes à partir de revues passées.**

```text
Ci-dessous figurent des résumés de [number] revues passées pour [service or
group of services]. Proposez une courte liste de classes de causes, entre
[minimum] et [maximum], qui décrivent des conditions du système et jamais des
personnes. Pour chaque classe, donnez une définition d'une ligne, les revues qui
y correspondent et les revues ambiguës. N'inventez pas de causes que le texte
n'étaye pas. Énumérez vos hypothèses et les revues que vous n'avez pas pu
classer.

[paste summaries]
```

**Analysez les actions ouvertes à la recherche de schémas de blocage.**

```text
Voici un export des actions de revue de [team or service] : équipe responsable,
date de création, échéance, statut et description d'une ligne. Rapportez la
médiane, le 85e percentile et l'âge maximal des actions ouvertes, puis regroupez
les plus anciennes par raison probable de blocage (par exemple périmètre flou,
dépendance envers une autre équipe, pas de capacité ou faible valeur).
Rapportez les schémas par équipe et par service, jamais par personne. Ne
devinez pas des raisons que les données n'étayent pas. Énumérez vos hypothèses
et les champs supplémentaires qui aideraient.

[paste export with personal data removed]
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet correspondant, les définitions et le garde-fou associé d'une métrique de revue ou d'apprentissage que vous êtes sur le point de rapporter.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique d'apprentissage révisée porte toujours ses horloges, son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Une revue vaut ce qu'elle change ; mesurez donc la couverture, la qualité, la clôture des actions et la récurrence des causes, et lisez un échantillon des revues elles-mêmes.
- L'absence de reproche est la condition préalable de données honnêtes, et les dirigeants la protègent par la façon dont ils répondent à une revue franche.
- Mettez les actions dans le vrai backlog, limitez leur nombre, autorisez le refus honnête et surveillez l'âge des plus anciennes.
- Étiquetez les revues avec une courte liste de classes de causes pour que les causes répétées deviennent visibles et alimentent la gestion des problèmes.
- Lisez d'abord un compte de quasi-accidents en hausse comme un signe d'ouverture, et ne classez jamais les personnes ou les équipes selon le volume de revues.
- Associez chaque chiffre ici à un garde-fou, car la boucle d'apprentissage est elle-même un objectif qui peut être détourné.

## Références et lectures complémentaires

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
