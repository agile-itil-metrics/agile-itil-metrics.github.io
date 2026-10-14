# Métriques de satisfaction et de bien-être

**Les personnes qui se sentent en sécurité, en confiance et capables de tenir leur rythme travaillent mieux plus longtemps ; interrogez donc sur le bien-être avec soin, gardez les réponses anonymes et agrégées, et traitez ce que vous apprenez comme un appel à changer le travail, jamais comme un jugement sur la personne.**

## Résumé et motivation

Les principes du Manifeste agile disent que les processus agiles favorisent un développement soutenable : les commanditaires, les développeurs et les utilisateurs devraient pouvoir maintenir indéfiniment un rythme constant. Ils disent aussi de bâtir les projets autour d'individus motivés et de leur faire confiance pour accomplir le travail. Une organisation de service qui dépend de personnes pour faire fonctionner de systèmes complexes pendant les nuits, les fins de semaine et les crises doit se demander si sa façon de travailler peut vraiment être soutenue. Les mesures de satisfaction et de bien-être sont la manière de poser la question.

Ces mesures sont plus sensibles que toutes les autres de ce livre. Elles touchent à ce que les gens ressentent à l'égard de leur travail, de leurs collègues et de leur santé. Mal faites, elles envahissent la vie privée, créent la peur et produisent de fausses réponses. Bien faites, elles donnent aux équipes et aux dirigeants un avertissement précoce de problèmes qui surgiraient autrement sous forme de démissions, d'erreurs et d'incidents. Ce sujet porte donc autant sur l'éthique et la méthode que sur les métriques, et il suit le sujet précédent sur les conditions de l'équipe (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs).

Trois idées le cadrent.

- **La satisfaction n'est pas le bien-être, et l'engagement non plus.** La [satisfaction au travail](https://en.wikipedia.org/wiki/Job_satisfaction) est le sentiment d'une personne à l'égard de son emploi, l'[engagement des employés](https://en.wikipedia.org/wiki/Employee_engagement) est une implication énergique dans le travail, et le bien-être est un état plus large de santé et d'épanouissement. Une personne peut être satisfaite d'un emploi qui l'use. En mesurer un ne vous renseigne pas sur les autres.
- **La motivation vient de conditions que l'on peut bâtir.** La [théorie de l'autodétermination](https://en.wikipedia.org/wiki/Self-determination_theory), développée par Edward Deci et Richard Ryan, propose que la [motivation intrinsèque](https://en.wikipedia.org/wiki/Intrinsic_motivation) des gens soit soutenue quand trois besoins sont satisfaits : l'autonomie, un sentiment de contrôle sur son travail ; la compétence, un sentiment d'efficacité et de progrès ; et l'appartenance, un sentiment de lien avec les autres. Cela correspond à l'appel agile à des individus motivés à qui l'on donne l'environnement et la confiance dont ils ont besoin.
- **La sécurité de parler est une condition préalable.** La [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety), concept développé par Amy Edmondson, est la croyance partagée qu'une équipe est un lieu sûr pour prendre des risques interpersonnels. Sans elle, les gens cachent erreurs, inquiétudes et épuisement, et chaque sondage mesure ce que les gens osent dire, non ce qu'ils ressentent.

Les mesures de bien-être comportent des dangers particuliers. Les répondants peuvent donner les réponses qu'ils croient attendues, un schéma connu sous le nom de [biais de désirabilité sociale](https://en.wikipedia.org/wiki/Social_desirability_bias). L'épuisement professionnel est une affaire sérieuse, et la classification de l'Organisation mondiale de la santé décrit le burn-out comme un phénomène lié au travail résultant d'un stress chronique au travail qui n'a pas été géré avec succès. Ce n'est pas un diagnostic médical posé par un sondage. Les chercheurs décrivent l'épuisement par la fatigue, le cynisme et l'efficacité réduite ([épuisement professionnel](https://en.wikipedia.org/wiki/Occupational_burnout) est le terme général), et les employeurs devraient offrir du soutien et corriger les conditions, non diagnostiquer des individus. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) prend ici un visage humain : quand un score de bien-être devient un objectif pour un gestionnaire, les gens apprennent à dire qu'ils vont bien (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Une dernière mise en garde : ce sujet décrit une pratique de mesure et ne donne pas de conseil médical, psychologique ou juridique. Associez des professionnels qualifiés, comme la santé au travail, les ressources humaines et les représentants des employés, et suivez le droit de la vie privée et de l'emploi qui s'applique là où vos gens travaillent.

## Principes clés

- **La participation est volontaire et les réponses sont anonymes.** Personne ne devrait se sentir contraint de révéler ce qu'il ressent.
- **Ne rapporter qu'en groupes.** Employez une taille minimale de groupe, et supprimez tout ce qui pourrait identifier une personne.
- **Ne jamais employer ces mesures pour évaluer des individus.** Elles décrivent le travail et l'équipe.
- **Ne jamais diagnostiquer.** Les sondages peuvent montrer des conditions, et le jugement clinique appartient aux professionnels qualifiés.
- **Corriger les conditions.** La réponse à un mauvais résultat est de changer la charge de travail, le processus ou les priorités.
- **Viser un rythme que l'équipe peut soutenir.** De courtes pointes sont acceptables, l'urgence permanente ne l'est pas.
- **Agir là où les gens peuvent le voir.** Un changement visible bâtit la confiance dont les réponses honnêtes ont besoin.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cote de rythme soutenable | Cote donnée par l'équipe de la possibilité de tenir indéfiniment le rythme actuel | cote moyenne et dispersion sur une échelle convenue pour l'énoncé « nous pourrions continuer à travailler à ce rythme indéfiniment » | points d'échelle | Sondage éclair anonyme d'équipe | Amélioration continue ; gestion de la main-d'œuvre et des talents | Rythme constant indéfiniment | Mensuelle |
| Cote de sécurité psychologique | Cote donnée par l'équipe de la sécurité à soulever des problèmes et à prendre des risques interpersonnels | cote moyenne sur un court ensemble validé d'énoncés, par équipe | points d'échelle | Sondage éclair anonyme d'équipe | Amélioration continue ; gestion de la main-d'œuvre et des talents | Confiance et réflexion ouverte | Trimestrielle |
| Cote de soutien des besoins | Cote donnée par l'équipe de l'autonomie, de la compétence et de l'appartenance au travail | cote moyenne de chacun de trois énoncés, par équipe | points d'échelle | Sondage éclair anonyme d'équipe | Gestion de la main-d'œuvre et des talents ; amélioration continue | Individus motivés dotés de l'environnement dont ils ont besoin | Trimestrielle |
| Cote de tension de la charge de travail | Cote donnée par l'équipe de l'exigence de la charge de travail par rapport à la capacité | cote moyenne et dispersion, et part jugeant la charge insoutenable | points d'échelle ; pourcentage | Sondage éclair anonyme d'équipe | Gestion de la capacité et de la performance ; gestion de la main-d'œuvre et des talents | Développement soutenable | Mensuelle |
| Semaines prolongées soutenues | Part des semaines où la rotation ou l'équipe a travaillé bien au-delà de ses heures normales, comptée au niveau de la rotation ou de l'équipe | semaines de la période avec heures prolongées au niveau de l'équipe / semaines de la période | pourcentage | Registres de rotation et journaux d'astreinte agrégés par équipe ; déclaré par l'équipe, sur base volontaire | Gestion des incidents ; gestion de la capacité et de la performance | Heures supplémentaires comme signal de surcharge | Mensuelle |
| Départs volontaires et thèmes de départ | Part des membres d'équipe quittant volontairement dans une période, avec des thèmes issus des entretiens de départ | départs volontaires / effectif moyen ; décompte des thèmes auprès des partants consentants | pourcentage ; décomptes | Dossiers des ressources humaines, entretiens de départ | Gestion de la main-d'œuvre et des talents | Rétention des personnes expérimentées | Trimestrielle |
| Délai d'action sur les retours de bien-être | Temps entre le moment où une équipe soulève une préoccupation de bien-être et une réponse consignée | médiane et 85e percentile des jours entre la préoccupation et la décision ou l'action consignée | jours | Journal des retours d'équipe | Amélioration continue | Réponse rapide à la réflexion de l'équipe | Trimestrielle |

Définissez dans le registre la taille minimale du groupe de rapport, par exemple aucun résultat pour un groupe de moins de sept personnes, et appliquez-la à chaque tableau, graphique et commentaire. Les cotes viennent de courts sondages éclairs anonymes, la participation étant volontaire. Les semaines prolongées sont calculées à partir des registres de rotation et d'astreinte pour l'équipe dans son ensemble, et aucune donnée d'heures au niveau individuel n'est jamais collectée à cette fin. Les départs ne sont rapportés que là où le groupe est assez grand, et les thèmes de départ seulement auprès de personnes qui y consentent. Aucune de ces métriques ne fait partie de l'évaluation d'un individu.

## Recommandations

### Fixer d'abord les règles de base

**1. Écrivez les règles avant de demander.** Énoncez le but, ce qui est collecté, qui voit quoi, la taille minimale du groupe, la durée de conservation des données et ce qui ne sera jamais fait avec, y compris qu'aucune réponse individuelle ne sera employée dans les évaluations, les promotions ou la discipline. Partagez l'ébauche avec les représentants des employés, là où ils existent, et avec vos spécialistes de la vie privée et des ressources humaines. Publiez les règles finales là où tout le monde peut les lire.

**2. Rendez la participation volontaire et les réponses anonymes.** Ne poursuivez pas les personnes qui n'ont pas répondu. N'exigez pas de champs d'identification. Employez une méthode de sondage qui ne peut être retracée jusqu'à une personne, et mettez honnêtement cette affirmation à l'épreuve : dans une petite équipe, des questions démographiques peuvent identifier des personnes. Dites aux gens ce que vous faites pour les protéger, et pensez-le.

**3. Associez la santé au travail et le soutien aux employés.** Les sondages ne remplacent pas le soutien. Assurez-vous qu'un programme d'aide aux employés ou un équivalent existe, que les gens savent comment y accéder et que les gestionnaires savent répondre avec bienveillance si quelqu'un révèle un problème. Un programme de bien-être qui repère la détresse et n'offre rien est pire que pas de programme.

### Bien poser les questions

**4. Employez peu de questions, claires et validées.** Un court ensemble d'énoncés, cotés sur une échelle cohérente, sert mieux qu'un long formulaire. Employez des formulations établies de la littérature de recherche pour la sécurité psychologique et pour les trois besoins de la théorie de l'autodétermination, et gardez votre propre formulation stable pour que les tendances aient un sens. Ajoutez un commentaire ouvert, et lisez les commentaires en entier.

**5. Interrogez davantage sur les conditions que sur les sentiments.** « Je peux tenir ce rythme pendant un an » et « j'ai ce qu'il me faut pour faire mon meilleur travail » renvoient au travail. « À quel point êtes-vous stressé ? » renvoie à la personne. Les deux ont leur place, et les questions de conditions sont plus faciles à répondre honnêtement et plus faciles à traiter.

**6. Gardez une cadence légère.** Un sondage éclair mensuel de trois questions sur le rythme et la charge, et un sondage trimestriel sur la sécurité et les besoins suffisent à la plupart des équipes. La fatigue des sondages est réelle, et un long sondage annuel est lent à traiter. Variez modestement les questions pour que les gens ne répondent pas en pilote automatique, et gardez le noyau stable.

**7. Lisez d'abord les résultats avec l'équipe.** Partagez les propres résultats de l'équipe avec elle avant quiconque, et laissez-la les interpréter. Les dirigeants voient les tendances entre équipes et les obstacles pour lesquels les équipes demandent de l'aide, non un classement. Cette approche est plus exacte, puisque les équipes connaissent le contexte, et plus respectueuse.

### Regarder le travail autant que les sentiments

**8. Associez la perception à des faits de charge de travail au niveau de l'équipe.** Comparez les cotes de rythme et de tension avec la charge de rotation et d'astreinte, la part de travail imprévu et le backlog d'obstacles (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte, et le sujet 2.9, Travail opérationnel et travail non planifié). Quand les cotes baissent pendant que le travail imprévu monte, vous avez trouvé une cause que vous pouvez corriger. Agrégez les données d'heures au niveau de l'équipe ou de la rotation, et ne suivez jamais des individus.

**9. Traitez la surcharge soutenue comme un problème de système.** Une série de semaines prolongées signifie que le plan, les effectifs ou les priorités ne correspondent pas à la réalité. Réagissez en réduisant le périmètre, en ajoutant des personnes, en retirant du travail ou en corrigeant les causes d'incidents, non en demandant aux individus d'être plus résilients. De courtes pointes choisies sont différentes d'une urgence sans fin, et l'équipe peut dire de laquelle il s'agit.

**10. Surveillez les départs pour y trouver des schémas, avec soin.** Les départs volontaires sont un signal tardif. Regardez-les par équipe et sur une longue période, et combinez-les avec des thèmes d'entretiens de départ que les partants acceptent. Les petits nombres oscillent largement et peuvent identifier des personnes ; supprimez donc les petits groupes et évitez de lire un départ isolé comme une preuve.

### Agir et apprendre

**11. Répondez dans un délai énoncé, et dites aux gens ce qui s'est passé.** Engagez-vous à répondre aux préoccupations de bien-être dans un court délai, et rapportez les actions et leurs résultats. Le délai d'action mesure cela. Une réponse visible, même si elle est « nous ne pouvons pas changer cela maintenant, et voici pourquoi », garde la confiance vivante.

**12. Apprenez de ce qui ne fonctionne pas.** Si les scores ne s'améliorent pas après une intervention, demandez pourquoi. Écoutez l'équipe avant d'essayer de nouveau. Évitez les ajouts de mieux-être, comme une application de méditation ou une activité sociale, comme substitut au changement d'une charge de travail trop élevée. Le bien-être est en grande partie une propriété de l'organisation du travail.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Cote de rythme soutenable | Des gestionnaires qui pressent pour de bons scores ; des équipes qui rapportent ce qui est attendu | Règles d'anonymat et de taille de groupe ; comparer aux faits de charge de travail ; lire les commentaires |
| Cote de sécurité psychologique | Ne sonder que les équipes sûres ; changements de formulation qui relèvent les scores | Journal des formulations fixes ; taux et composition des réponses ; comparer aux taux de signalement d'incidents et d'erreurs |
| Cote de soutien des besoins | Redéfinir les énoncés ; coacher les réponses | Formulation stable ; interprétation détenue par l'équipe ; commentaires |
| Cote de tension de la charge de travail | Abaisser la tension rapportée pour éviter l'examen ; ajuster le périmètre sur le papier | Comparer au travail imprévu et à la charge de rotation ; chercher le travail caché |
| Semaines prolongées soutenues | Ne pas consigner les heures ; sortir le travail des registres de rotation | Comparer aux journaux d'incidents et aux commentaires de l'équipe ; permettre de rapporter sans pénalité |
| Départs volontaires et thèmes de départ | Reclasser des démissions en départs involontaires ; orienter les entretiens de départ | Règles de classification claires ; entretiens de départ indépendants ; regarder de longues périodes |
| Délai d'action sur les retours de bien-être | Consigner une réponse sans action ; clore rapidement les préoccupations | L'équipe confirme que la réponse est significative ; suivre si les cotes changent |

Une lecture saine est une cote de rythme stable ou en amélioration qui correspond aux faits de charge de travail, une sécurité psychologique assez élevée pour que les mauvaises nouvelles circulent, une tension de la charge qui baisse après le changement des conditions, des semaines prolongées rares et expliquées, et des équipes qui disent voir leurs retours employés.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Sondages éclairs anonymes | Honnêtes, peu coûteux, opportuns | Impossible de faire un suivi avec les individus ; les petits groupes limitent l'anonymat |
| Sondages nominatifs | Permettent le suivi | Les gens se retiennent ; risque pour la vie privée |
| Questions centrées sur les conditions | Pointent vers des causes corrigibles | Manquent les circonstances personnelles |
| Questions centrées sur le ressenti | Saisissent l'expérience vécue | Plus faciles à mal employer ; plus difficiles à traiter |
| Données de charge de travail au niveau de l'équipe | Objectives, reliées aux causes | Peuvent glisser vers la surveillance sans règles fortes |
| Entretiens individuels avec le gestionnaire | Personnels, peuvent répondre aux besoins individuels | Dépendent du gestionnaire ; non agrégeables |
| Sondage annuel d'engagement | Comparable dans le temps | Lent ; faible taux d'action |
| Courts sondages éclairs fréquents | Opportuns | Fatigue s'ils sont mal employés |

La réponse en prose est d'employer des sondages éclairs anonymes centrés sur les conditions avec des règles strictes de taille de groupe, de les combiner avec des faits de charge de travail au niveau de l'équipe et de s'appuyer sur les gestionnaires et les professionnels pour le soutien individuel. Traitez toute donnée de bien-être au niveau individuel comme hors du champ des métriques.

## Questions à discuter avec votre équipe

**1. Pourrions-nous continuer à travailler au rythme actuel pendant un an, et que faudrait-il changer sinon ?**
Demandez des réponses honnêtes. L'animateur doit consigner les causes sans assigner de blâme : périmètre, effectifs, interruptions, incidents. Convenez d'un changement du travail qui réduirait la tension. Si la réponse est oui, demandez ce qui protège le rythme.

**2. Quand quelqu'un d'ici a-t-il soulevé un problème ou une erreur pour la dernière fois, et comment cela a-t-il été reçu ?**
Recueillez des histoires. Remarquez si la réponse était de la curiosité ou du blâme. Discutez de ce qui rend cela sûr ou non. Convenez d'une habitude qui rendrait plus facile de soulever un problème, comme remercier la personne qui l'a fait.

**3. Quelles règles nous feraient faire confiance à un sondage de bien-être ?**
Rédigez les règles ensemble : qui voit quoi, taille minimale de groupe et ce qui ne sera jamais fait. Demandez ce qui vous ferait douter de la promesse. Le résultat est la première ébauche des règles du programme, à revoir avec les représentants.

**4. Lesquelles de nos pratiques dépendent de personnes qui font des heures supplémentaires, et pourquoi ?**
Listez-les : mises en production, relèves, astreinte. Demandez si chacune est vraiment nécessaire, et ce qui la supprimerait. Choisissez-en une à corriger par l'automatisation, le processus ou les effectifs.

**5. Que faisons-nous quand un collègue semble en difficulté ?**
Discutez du soutien qui existe, de la façon d'y accéder et de ce que chacun peut faire. L'animateur doit être prêt avec l'information sur l'aide aux employés et préciser que l'équipe ne remplace pas une aide professionnelle.

**6. Qu'avons-nous changé en réponse à la dernière série de retours ?**
Vérifiez le registre. Si rien n'a changé, discutez de pourquoi : manque de responsabilité, manque d'autorité ou peur. Convenez d'une action avec un responsable et une date, et de la manière dont elle sera rapportée.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison portent la pression des échéances et de la demande. Elles devraient fixer leurs propres questions de sondage éclair, en discuter les résultats ensemble et soulever ouvertement le rythme et la charge en planification. Elles sont les mieux placées pour dire quels engagements sont soutenables, et elles méritent des dirigeants qui écoutent.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent l'astreinte, les incidents et le travail de nuit. Elles devraient suivre la charge de rotation au niveau de l'équipe, exiger la correction des causes récurrentes et employer les règles de repos et de relève comme protections. Elles ont besoin de cultures qui traitent l'épuisement comme un risque pour le service, non comme un signe de dévouement.

### Direction et gouvernance

Les dirigeants fixent les attentes et approuvent les plans qui créent la charge. Ils devraient protéger les règles de confidentialité, répondre aux signaux au niveau de l'équipe par des changements de périmètre, d'effectifs ou de priorités et résister à la tentation de classer les équipes. La gouvernance devrait vérifier que les services de soutien existent, que les obligations légales sur le temps de travail et la santé sont respectées et qu'aucune donnée individuelle n'est employée pour l'évaluation.

### Clients et utilisateurs

Les utilisateurs gagnent à des équipes reposées, qui apprennent et qui sont stables, car la qualité du service, la patience et la continuité en dépendent. Ils sont aussi touchés quand les équipes sont débordées : réponses plus lentes, plus d'erreurs, perte de personnel expérimenté. Une communication honnête sur la capacité et les priorités fait partie du respect dû aux personnes qui les servent.

## En pratique : un exemple d'ITIL agile

Le groupe d'exploitation des services d'un opérateur régional de télécommunications compte huit équipes qui exploitent jour et nuit des réseaux, la facturation et des systèmes de soutien à la clientèle. Les chiffres ci-dessous sont illustratifs.

Après trois démissions dans une équipe, le directeur demande un tableau de bord du moral qui liste le score de chaque équipe. La responsable des personnes et de la culture propose une approche différente et travaille avec les représentants des employés à rédiger les règles du programme : sondages éclairs volontaires et anonymes, groupe minimal de rapport de sept, aucune donnée individuelle et aucun usage dans les évaluations. Les équipes reçoivent un sondage éclair mensuel de trois questions sur le rythme, la charge et le sentiment d'avoir ce qu'il leur faut, et un sondage trimestriel sur la sécurité psychologique et les trois besoins de la théorie de l'autodétermination. Les résultats vont d'abord à chaque équipe.

Le premier trimestre montre que l'équipe d'exploitation de la plateforme cote le rythme soutenable à 2,3 sur 5, 62 pour cent jugeant la charge insoutenable. Les registres de rotation montrent que l'équipe a travaillé en heures prolongées pendant 9 des 13 dernières semaines, du fait d'incidents répétés d'un composant vieillissant de facturation, et qu'un quart de sa capacité va au travail imprévu. La cote de sécurité psychologique de l'équipe est plus basse que celle des autres, et les commentaires disent que soulever des inquiétudes sur le composant a valu de s'entendre dire d'être patient. Les autres équipes cotent le rythme entre 3,4 et 4,1.

Le directeur et l'équipe conviennent de quatre actions. Le remplacement du composant de facturation est monté dans la liste des priorités, et l'équipe reçoit deux ingénieurs temporaires d'une équipe disposant de capacité. La rotation ajoute un jour de repos après tout incident de nuit, les gestionnaires étant chargés de le protéger. Les préoccupations sur le composant sont consignées et reçoivent une réponse en deux semaines, avec des raisons. Les dirigeants cessent de demander des classements d'équipes. En deux trimestres, la cote de rythme de l'équipe monte à 3,6, les semaines prolongées tombent à 2 sur 13, et la sécurité psychologique monte. Le délai d'action sur les retours a une médiane de 11 jours. Le directeur demande un score de mieux-être pour toute l'entreprise à publier au conseil. La responsable des personnes et de la culture explique qu'un score unique invite les gestionnaires à gérer le chiffre, et offre un rapport des actions entreprises et des conditions changées, avec le consentement des équipes. La décision est consignée. Une équipe demande que ses résultats ne soient pas partagés au-delà de l'équipe, et cette demande est accordée.

## Perspective sectorielle

**Startup.** L'intensité est courante, et le risque aussi que les pointes deviennent la norme. Les fondateurs peuvent incarner un rythme soutenable et remarquer quand l'équipe tourne à plein régime. Fiez-vous à la conversation et à un très court sondage éclair anonyme une fois l'équipe assez grande pour protéger l'anonymat.

**Petite entreprise.** Les équipes sont assez petites pour que rien ne soit anonyme. Ne menez pas de sondages de bien-être qui prétendent le contraire. Employez des entretiens individuels réguliers et honnêtes, donnez accès à du soutien et guettez la surcharge dans le schéma de travail, comme des incidents chroniques hors des heures de travail.

**Grande entreprise.** L'échelle permet des mesures anonymes et l'analyse des tendances. Elle apporte aussi la pression de comparer. Fournissez un ensemble commun de questions de base, laissez les équipes ajouter les leurs, protégez les règles de taille de groupe et associez les représentants des employés. Rendez les services de soutien visibles et faciles à employer.

**Gouvernement et secteur public.** Les protections de l'emploi, les comités d'entreprise et les syndicats ont souvent des rôles formels dans les sondages et la surveillance. Associez-les dès le début, suivez les règles sur le temps de travail et la santé, et traitez les données sensibles avec grand soin. Les agents publics sont souvent motivés par le sens de leur mission, et les organisations ne devraient pas abuser de cette bonne volonté en acceptant une surcharge permanente (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont modestes : le temps des équipes pour de courts sondages éclairs, un outillage de sondage qui préserve l'anonymat, le temps de spécialistes pour l'examen de la vie privée et l'interprétation des résultats, et le vrai coût d'agir, qui peut signifier des effectifs, une réduction de périmètre ou un investissement pour corriger des causes récurrentes. Les services de soutien comme l'aide aux employés coûtent aussi de l'argent et valent la peine d'exister.

Le retour passe par la fidélisation, moins d'erreurs, un meilleur service et moins de crises. Remplacer un ingénieur expérimenté coûte du recrutement, de l'accueil et de la connaissance perdue. Les équipes en surcharge chronique commettent plus d'erreurs et causent plus d'incidents. Bâtissez le dossier à partir de vos propres données : les départs volontaires par équipe sur plusieurs années, le coût de recruter et d'accueillir des remplaçants et les schémas d'incidents dans les équipes surchargées. Évitez de citer des études sur le coût de l'épuisement à moins de pouvoir retracer la source et la pertinence. Soyez honnête : les bénéfices sont réels et difficiles à isoler, et l'argument éthique ne dépend pas de l'argument financier (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Classer les équipes par scores de bien-être.** Les gestionnaires gèrent alors le chiffre. Rapportez les conditions et les actions.
- **Sondages nominatifs.** Les gens se retiennent. Employez l'anonymat et des règles de taille de groupe.
- **Diagnostiquer des individus à partir de données de sondage.** C'est contraire à l'éthique et peu fiable. Offrez du soutien et laissez le diagnostic aux professionnels.
- **Des ajouts de mieux-être au lieu d'un changement de charge.** Ils traitent le symptôme. Corrigez la charge.
- **Collecter les heures par personne.** C'est de la surveillance. Employez la rotation et des faits au niveau de l'équipe.
- **Des sondages sans action.** Les gens cessent de répondre. Réagissez visiblement et rapidement.
- **Employer les résultats dans les évaluations de performance.** Cela met fin à l'honnêteté. Interdisez-le par écrit.
- **Traiter la surcharge comme une formation à la résilience.** Cela fait peser le fardeau sur les individus. Changez le système.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Éthique et vie privée | Aucune règle | Soin informel | Règles écrites, anonymat, taille minimale de groupe, aucun usage individuel | Règles revues avec les représentants ; conformité vérifiée | Règles et pratique auditées indépendamment ; les équipes contrôlent le partage |
| Mesures | Sondage annuel, s'il y en a un | Bilans d'équipe occasionnels | Courts sondages éclairs mensuels et trimestriels sur le rythme, la charge, la sécurité et les besoins | Perception combinée à des faits de charge de travail au niveau de l'équipe ; tendances surveillées | Tableau entre équipes avec les partenaires ; l'alerte précoce pilote la planification |
| Action | Plaintes sans suite | Corrections ponctuelles | Réponses consignées et chronométrées ; changements visibles | Conditions changées, suivies et reliées aux résultats | Charge de travail et rythme intégrés à la planification et au financement dans toute l'organisation |

## Liste de vérification

- [ ] Des règles écrites énoncent le but, l'accès, la taille de groupe, la conservation et l'interdiction d'usage individuel.
- [ ] Les représentants des employés et les spécialistes de la vie privée ont revu les règles.
- [ ] La participation est volontaire et les réponses sont anonymes.
- [ ] Une taille minimale de groupe de rapport s'applique à toutes les productions.
- [ ] Des services de soutien sont en place et connus de tout le personnel.
- [ ] Les sondages éclairs emploient quelques questions stables et claires et un commentaire ouvert.
- [ ] Les équipes lisent d'abord leurs propres résultats.
- [ ] Les faits de charge de travail au niveau de l'équipe sont comparés à la perception, jamais les heures individuelles.
- [ ] Les réponses aux préoccupations ont un délai énoncé et sont rapportées en retour.
- [ ] Aucune donnée de bien-être n'est employée dans les évaluations de performance, les promotions ou la discipline.

## Prompts d'IA

**Rédigez des règles pour un programme de bien-être.**

```text
Rédigez en langage clair les règles d'un programme de sondages éclairs de
bien-être du personnel dans [type of organization] en [jurisdiction or sector].
Couvrez le but, la participation volontaire, l'anonymat, la taille minimale du
groupe de rapport [number], qui voit les résultats, la conservation, une
interdiction claire d'usage dans les évaluations, le soutien disponible et la
manière dont le personnel peut soulever des préoccupations. Signalez ce qu'il
faut revoir avec les spécialistes de la vie privée, les représentants des
employés et la santé au travail. Ne donnez pas de conclusions juridiques.
Énumérez vos hypothèses.
```

**Revoyez des questions de sondage éclair.**

```text
Voici nos questions de sondage éclair sur le rythme, la charge, la sécurité
psychologique et la motivation : [paste]. Examinez-les pour y trouver une
formulation tendancieuse ou à double sens, la sensibilité et le risque
d'identifier des individus dans les petits groupes. Suggérez un ensemble plus
court centré sur des conditions que nous pouvons changer. Ne revendiquez pas la
validation d'une formulation à moins de citer exactement la source publiée.
Énumérez vos hypothèses et vos mises en garde.
```

**Analysez les commentaires en toute sécurité.**

```text
Voici [number] commentaires anonymisés d'un sondage éclair pour [team type] :
[paste with any identifying details removed]. Regroupez-les en thèmes sur les
conditions du travail, comptez chaque thème et suggérez quelles conditions
pourraient être changées par l'équipe, ses dirigeants ou d'autres groupes. Ne
déduisez la santé de personne et n'identifiez pas d'individus. Dites-moi ce
qu'une personne devrait vérifier avant d'agir. Énumérez vos hypothèses.
```

**Planifiez une réponse à un signal de surcharge.**

```text
La cote de rythme d'une équipe est [value], les semaines prolongées sont [number]
sur [number] et le travail imprévu est [share]. Causes dans les commentaires :
[summary]. Proposez une réponse qui change le travail (périmètre, effectifs,
rotation, corrections des causes profondes), ce qu'il faut dire à l'équipe et
comment mesurer si cela a aidé sans suivre d'individus. Énumérez vos hypothèses
et les compromis pour la direction.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou et les règles de confidentialité associés à une métrique de bien-être.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de bien-être porte son vecteur de détournement, son garde-fou et sa règle d'anonymat.

## Points clés à retenir

- Interrogez sur les conditions, comme le rythme, la charge, la sécurité et le soutien, plus que sur les sentiments, et gardez les réponses anonymes et agrégées.
- Écrivez et publiez d'abord les règles, y compris l'interdiction d'employer les résultats pour juger des individus.
- Traitez la surcharge soutenue comme un problème de système à corriger par le périmètre, les effectifs et les causes, non par la résilience.
- Comparez la perception avec des faits de charge de travail au niveau de l'équipe, jamais avec des heures individuelles.
- Répondez visiblement et dans un délai énoncé, et dites aux gens ce qui a changé.
- Offrez de vrais services de soutien, et laissez le diagnostic aux professionnels.

## Références et lectures complémentaires

1. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
2. Deci, E. L., and Ryan, R. M., "The 'what' and 'why' of goal pursuits: Human needs and the self-determination of behavior," *Psychological Inquiry*, 11(4), 2000.
3. Maslach, C., and Leiter, M. P., "Understanding the burnout experience: recent research and its implications for psychiatry," *World Psychiatry*, 15(2), 2016.
4. World Health Organization, *International Classification of Diseases, 11th Revision (ICD-11)*, entry on burn-out as an occupational phenomenon.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Job satisfaction](https://en.wikipedia.org/wiki/Job_satisfaction).
8. Wikipedia, [Employee engagement](https://en.wikipedia.org/wiki/Employee_engagement).
9. Wikipedia, [Self-determination theory](https://en.wikipedia.org/wiki/Self-determination_theory).
10. Wikipedia, [Intrinsic motivation](https://en.wikipedia.org/wiki/Intrinsic_motivation).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Social desirability bias](https://en.wikipedia.org/wiki/Social_desirability_bias).
13. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
