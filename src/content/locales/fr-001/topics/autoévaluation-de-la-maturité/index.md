# Autoévaluation de la maturité

Une autoévaluation consolidée pour une équipe. Elle emploie l'échelle commune à cinq niveaux (Initier, Développer, Standardiser, Gérer, Orchestrer) en deux vues : les six dimensions d'un programme de métriques et les domaines de métriques couverts par les parties 2 à 10. Elle prend environ une heure. C'est un outil de conversation et non une certification, et elle n'est pas la même que les échelles de maturité des processus d'ITIL, de l'ISO/IEC 33000 ou du Capability Maturity Model. Les résultats restent auprès de l'équipe (voir le sujet 11.4, Modèle de maturité des programmes de métriques).

## Comment la mener

1. **Réunissez l'équipe pendant une heure** avec un animateur qui n'est pas le gestionnaire de l'équipe. Montrez l'échelle ci-dessous.
2. **Marquez en privé.** Chaque personne marque, seule, le niveau où elle pense que l'équipe se trouve, pour chaque ligne.
3. **Comparez et discutez.** Les différences révèlent des expériences différentes de la même pratique. Demandez un exemple pour chaque niveau revendiqué (« Quelle décision le dernier trimestre ? »).
4. **Convenez d'une vue d'équipe** et écrivez les preuves qui la fondent.
5. **Choisissez une ou deux petites prochaines étapes,** chacune pouvant être achevée en un trimestre, avec un responsable et une date. Mettez-les dans le registre d'amélioration (voir le sujet 9.5, Métriques d'amélioration continue).
6. **Gardez le résultat auprès de l'équipe.** Ne partagez que des plages et des thèmes agrégés au-delà de l'équipe. Ne moyennez jamais les lignes en un seul score, et ne classez jamais les équipes.

Réévaluez environ deux fois par an et après une réorganisation, un changement d'outil ou une violation de la charte de métriques. Attendez-vous à ce que certaines lignes reculent, et traitez cela comme de l'information.

## L'échelle

| Niveau | Nom | À quoi cela ressemble |
| --- | --- | --- |
| 1 | **Initier** | L'équipe reconnaît la pratique mais n'a pas de façon cohérente de la mener. Le travail est improvisé, dépend des individus et est surtout non documenté. |
| 2 | **Développer** | Certaines équipes ont des pratiques qui fonctionnent, mais elles diffèrent d'une équipe à l'autre. Des outils, modèles et habitudes précoces existent mais ne sont ni partagés ni attendus. |
| 3 | **Standardiser** | Une approche commune et légère est écrite et employée entre les équipes. Les rôles sont clairs. L'approche est un point de départ que les équipes peuvent adapter avec une raison énoncée. |
| 4 | **Gérer** | Les résultats sont mesurés et revus. Les lacunes mènent à un travail d'amélioration planifié et doté de ressources. |
| 5 | **Orchestrer** | La pratique est coordonnée entre équipes, fournisseurs et clients, et elle est adaptée continuellement à mesure que les conditions changent. L'amélioration est routinière et vient de tous. |

Plus haut n'est pas toujours mieux. Choisissez le niveau qui convient à votre taille, à votre risque et à vos besoins, et écrivez pourquoi.

## Vue 1 : le programme de métriques

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Questions et but | Mesures recueillies parce que les données existent | Certaines équipes énoncent les questions qu'elles posent | Publics et questions écrits ; mesures reliées à eux | Couverture des questions revue ; les questions sans réponse suscitent de nouvelles mesures | Les publics, y compris clients et fournisseurs, façonnent les mesures |
| Définitions et responsabilité | Les définitions varient selon la personne | Certaines écrites ; responsables informels | Catalogue avec définition, source, responsable et limites | Exhaustivité des définitions et contestations gérées | Définitions codétenues entre équipes et fournisseurs |
| Données et outillage | Manuels et fragiles | Quelques flux automatisés | Chaînes de données testées, stock partagé, données portables | Fiabilité, rapprochement et préparation à la sortie gérés | Chaînes de données fédérées avec contrats partagés |
| Usage dans les décisions | Chiffres affichés, rarement employés | Employés dans certaines revues | Revues régulières qui consignent les décisions | Preuve de décision suivie et suivie d'action | Décisions reliées aux résultats entre équipes |
| Confiance et sécurité | Peur ou indifférence | Assurances verbales | Charte écrite ; vues individuelles désactivées ; sondage de sécurité | Violations examinées au grand jour ; signaux de franchise gérés | Confiance routinière ; programme façonné par le personnel et les partenaires |
| Revue et évolution | Aucune | Nettoyage occasionnel | Revue périodique avec les équipes ; règle de retrait | Étapes d'évaluation financées et achevées | Le programme s'améliore continuellement grâce à tous |

## Vue 2 : les domaines de métriques

Pour chaque domaine, marquez le niveau qui décrit le mieux la manière dont votre équipe le mesure et l'emploie aujourd'hui. Sautez les domaines qui ne s'appliquent pas. Les invitations sont des exemples de ce qu'une équipe de niveau 3 peut dire.

| Domaine | Partie d'origine | Une équipe de niveau 3 peut dire |
| --- | --- | --- |
| Flux et livraison continue | Partie 2 | Nous connaissons nos délais de livraison et temps de cycle comme des distributions, nous limitons le travail en cours et nous lisons la vitesse de livraison à côté de la stabilité (voir le sujet 2.8, Métriques DORA). |
| Centre de services, incidents et demandes | Partie 3 | Nous mesurons le temps jusqu'à une résolution utile avec les contacts de retour, et nos incidents majeurs ont une revue standard (voir le sujet 3.4, Métriques des incidents majeurs). |
| Problèmes, changements et mises en production | Partie 4 | Nos changements suivent une voie proportionnée au risque, et nous suivons la reprise et le coût des erreurs connues (voir le sujet 4.3, Métriques de maîtrise des changements). |
| Niveaux de service, disponibilité et fiabilité | Partie 5 | Nos niveaux de service sont définis à partir des résultats pour les utilisateurs, avec un budget d'erreur employé dans les décisions (voir le sujet 5.2, SLI, SLO et budgets d'erreur). |
| Clients et expérience | Partie 6 | Nous interrogeons les utilisateurs sur leur expérience d'une façon qui ne les lasse pas, et nous agissons sur les réponses (voir le sujet 6.2, Accords de niveau d'expérience). |
| Actifs, configuration et finances | Partie 7 | Nous savons ce que nous possédons et exploitons, ainsi que le coût par unité d'usage de nos services (voir le sujet 7.5, Coût du service et économie unitaire). |
| Sécurité, risque, conformité et fournisseurs | Partie 8 | Nos preuves de risque et de contrôle sont réelles, nos fournisseurs sont mesurés sur les résultats, et rien de cela n'est détourné pour l'audit (voir le sujet 8.2, Métriques des risques et des contrôles). |
| Personnes, équipes et amélioration | Partie 9 | Nous écoutons nos gens sur le rythme et le bien-être, et nous suivons le travail d'amélioration jusqu'aux résultats (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs). |
| Les métriques à l'ère de l'IA | Partie 10 | Nous comparons le travail assisté par l'IA à une ligne de base, échantillonnons les productions pour leur utilité et enregistrons nos usages de l'IA (voir le sujet 10.1, L'IA dans la mesure de la gestion des services). |

## Consigner le résultat

```text
Équipe : [nom]   Date : [date]   Animateur : [nom]
Participants : [rôles]

Vue 1
| Dimension | Vue de l'équipe | Preuves | Prochaine étape (responsable, date) |
| [ligne] | [1-5] | [exemple] | [étape] |

Vue 2
| Domaine | Vue de l'équipe | Preuves | Prochaine étape |
| [ligne] | [1-5 ou s.o.] | [exemple] | [étape] |

Différences qui nous ont surpris : [notes]
À quoi nous ne servirons jamais de ceci : [classement, financement, évaluations de performance]
Prochaine évaluation : [date]
```

## Lire le profil

- **Cherchez la ligne limitante.** La confiance et les définitions limitent souvent les autres. Un petit gain là peut débloquer le reste.
- **Comparez les lignes, non les équipes.** La question utile est de savoir où votre équipe est plus forte ou plus faible, non comment elle se compare à une autre.
- **Demandez ce qui a changé.** Une hausse après un trimestre devrait s'appuyer sur une décision, une habitude ou un résultat que vous pouvez nommer. Une hausse sans preuve suggère que le marquage était optimiste.
- **Arrêtez-vous à assez bon.** Une équipe peut raisonnablement rester au niveau 3 dans certaines lignes pendant des années.
