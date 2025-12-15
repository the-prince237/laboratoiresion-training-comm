import type { ModuleProps } from '@/types'

export const modules: ModuleProps[] = [
  {
    semaine: 1,
    slug: 'fondations-laboratoire-environnement',
    titre: "Fondations : Laboratoire & Environnement",
    doc: "https://takeout-download-drive-eu.usercontent.google.com/download/module1-20251210T123511Z-3-001.zip?j=d2b9439c-939e-4f0b-89bd-daaaa821e6cb&i=0&user=169098638449&authuser=0",
    lecons: [
      {
        numero: 1,
        titre: "Introduction au laboratoire - Services et spécificités",
        duree: "2h",
        objectifs: [
          "Maîtriser l'offre complète de services du laboratoire",
          "Comprendre les avantages compétitifs",
          "Connaître le manuel de prélèvement"
        ],
        contenu: [
          "Biologie médicale : moléculaire, microbiologie, sérologie, biochimie, hématologie",
          "Imagerie : radiographie, échographie",
          "Exploration fonctionnelle : ECG, échographie cardiaque, débitmétrie",
          "Partenariat Cerba Pasteur",
          "Mini-arguments de vente associés à chaque service"
        ],
        strategie: "Présentation interactive + Quiz + Distribution manuel de prélèvement",
        tp: "Visite guidée du laboratoire (30 min) - Observation des différents services"
      },
      {
        numero: 2,
        titre: "Normes, qualité et éthique professionnelle + Système de santé locale",
        duree: "2h",
        objectifs: [
          "Comprendre les normes ISO 15189 et accréditations",
          "Intégrer les exigences de confidentialité",
          "Adopter une posture éthique irréprochable",
          "Identifier les différents types de prescripteurs",
          "Comprendre le parcours de soins local",
          "Cartographier les structures de santé"
        ],
        contenu: [
          "Normes et accréditations (ISO 15189)",
          "Bonnes pratiques de laboratoire",
          "Confidentialité et traçabilité",
          "Responsabilité éthique du commercial",
          "Transformer la qualité en argument de vente",
          "Médecins généralistes et infirmiers : besoins et contraintes",
          "Spécialistes par discipline : cardiologie, pneumologie, infectiologie, dermatologie, gynécologie, etc.",
          "Structures de soins : hôpitaux, cliniques, centres de santé",
          "Flux des patients et points de décision",
          "Contraintes administratives et assurances"
        ],
        strategie: "Étude de cas réels + Vidéos + Discussion interactive",
        tp: "Atelier : Rédiger 3 arguments de vente basés sur la qualité et les normes"
      },
    ],
    facilitateurs: [1, 2, 3, 4, 5]
  },
  {
    semaine: 2,
    titre: "Analyse de la Concurrence & Techniques de Vente",
    slug: 'analyse-concurrence-techniques-vente',
    doc: "https://docs.google.com/presentation/d/14l60ghWOPgFwqAjuaDyH8swCl0m_z7H2/edit?usp=drive_link&ouid=104681755187227163642&rtpof=true&sd=true",
    lecons: [
      {
        numero: 4,
        titre: "Étude de la concurrence et positionnement",
        duree: "2h",
        objectifs: [
          "Connaître les principaux concurrents du marché",
          "Identifier leurs forces et faiblesses",
          "Développer des arguments de différenciation"
        ],
        contenu: [
          "Cartographie des concurrents locaux",
          "Analyse SWOT comparative (forces, faiblesses, opportunités, menaces)",
          "Nos avantages compétitifs réels",
          "Gérer les comparaisons directes avec la concurrence",
          "Recentrer sur nos forces quand notre plus-value semble faible"
        ],
        strategie: "Tableaux comparatifs + Discussion stratégique + Benchmarking",
        tp: "Atelier : Construire 5 réponses face à des objections type 'concurrent X est moins cher'"
      },
      {
        numero: 5,
        titre: "Construction d'argumentaires et profil SONCASE",
        duree: "2h",
        objectifs: [
          "Construire des argumentaires centrés sur la valeur ajoutée",
          "Maîtriser le profil SONCASE",
          "Adapter son discours selon la motivation du prescripteur"
        ],
        contenu: [
          "Caractéristiques techniques → avantages concrets",
          "Qualité, rapidité, innovation, facilité de prise en charge",
          "Profil SONCASE : Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie, Écologie",
          "Adapter le discours scientifique au profil détecté",
          "Mini-arguments de vente par service médical"
        ],
        strategie: "Présentation théorique + Exercices d'identification + Cas pratiques",
        tp: "Atelier : Préparer 3 pitchs de 2 minutes pour 3 profils SONCASE différents"
      },
      {
        numero: 6,
        titre: "Techniques d'entretien commercial - Partie 1",
        duree: "2h",
        objectifs: [
          "Maîtriser les techniques d'approche",
          "Pratiquer le questionnement et l'écoute active",
          "Créer un climat de confiance"
        ],
        contenu: [
          "Préparation avant la visite (recherche, objectif)",
          "Techniques d'approche et premiers contacts",
          "Questionnement ouvert et ciblé",
          "Écoute active et reformulation",
          "Détection des besoins implicites"
        ],
        strategie: "Démonstration + Exercices pratiques + Enregistrement vidéo",
        tp: "Jeu de rôle : Simulation d'entretien avec médecin généraliste (débriefing collectif)"
      },
    ],
    facilitateurs: [6, 7, 8]
  },
  {
    semaine: 3,
    titre: "Objections, Négociation & Dimension Spirituelle",
    slug: 'objections-negociation-dimension-spirituelle',
    lecons: [
      {
        numero: 7,
        titre: "Gestion des objections et relance (Avec Dimension Spirituelle)",
        duree: "2h",
        objectifs: [
          "Identifier les objections classiques",
          "Développer des réponses personnalisées",
          "Maintenir le dialogue après une objection"
        ],
        contenu: [
          "Objections fréquentes : coût, délais, habitudes, confiance",
          "Techniques de reformulation de l'objection",
          "Arguments personnalisés et preuves (témoignages, données)",
          "Proposer des alternatives sans forcer",
          "Questions de relance pour maintenir l'échange",
          "Gérer les situations où notre plus-value semble faible"
        ],
        strategie: "Liste d'objections réelles + Brainstorming + Jeux de rôle",
        tp: "Simulation intensive : 10 objections en cascade - chaque commercial doit répondre"
      },
      {
        numero: 8,
        titre: "Techniques de négociation et conclusion (Avec Dimension Spirituelle)",
        duree: "2h",
        objectifs: [
          "Maîtriser les techniques de négociation",
          "Savoir conclure une vente",
          "Obtenir un engagement du prescripteur"
        ],
        contenu: [
          "Concessions stratégiques limitées",
          "Valorisation des services différenciants",
          "Techniques de closing (résumé, prochaine étape)",
          "Obtenir un engagement formel ou symbolique",
          "Éviter les erreurs de conclusion"
        ],
        strategie: "Démonstration + Analyse de vidéos de ventes réussies + Exercices",
        tp: "Jeu de rôle complet : De l'approche à la conclusion avec un médecin spécialiste difficile"
      },
      {
        numero: 9,
        titre: "Le Saint-Esprit dans l'action commerciale",
        duree: "2h",
        objectifs: [
          "Intégrer la dimension spirituelle dans l'activité professionnelle",
          "Développer la prière comme soutien à l'action",
          "Agir avec intégrité et discernement spirituel"
        ],
        contenu: [
          "Prière avant et après les visites commerciales",
          "Discernement spirituel dans les décisions",
          "L'intégrité chrétienne en contexte commercial",
          "La sagesse du Saint-Esprit face aux situations difficiles",
          "Équilibre entre performance et valeurs spirituelles",
          "Témoignages de commerciaux chrétiens performants"
        ],
        strategie: "Enseignement biblique + Témoignages + Temps de prière collective + Discussion",
        tp: "Atelier pratique : Rédiger une prière personnelle pour son activité commerciale"
      }
    ],
    facilitateurs: [6, 7, 16]
  },
  {
    semaine: 4,
    titre: "Approfondissement Scientifique & Application Terrain",
    slug: "approfondissement-scientifuqe-application-terrain",
    lecons: [
      {
        numero: 10,
        titre: "Biologie moléculaire et microbiologie - Approche commerciale",
        duree: "2h",
        objectifs: [
          "Comprendre les techniques PCR et génétique",
          "Maîtriser les arguments de vente liés",
          "Identifier les prescripteurs cibles"
        ],
        contenu: [
          "PCR, détection ADN/ARN : principes simplifiés",
          "Microbiologie : parasitologie, mycologie, bactériologie",
          "Arguments de vente : rapidité + sensibilité",
          "Applications cliniques concrètes",
          "Prescripteurs concernés : infectiologues, pneumologues, etc."
        ],
        strategie: "Présentation simplifiée + Exemples cliniques + Conversion en arguments",
        tp: "Visite accompagnée chez un prescripteur 'scientifique' avec débriefing"
      },
      {
        numero: 11,
        titre: "Sérologie, immunologie et allergologie commerciale",
        duree: "2h",
        objectifs: [
          "Comprendre les tests sérologiques et immunologiques",
          "Développer les arguments spécifiques",
          "Cibler les allergologues et immunologues"
        ],
        contenu: [
          "Détection anticorps/antigènes : principe",
          "Tests allergologiques et auto-immuns",
          "Arguments : précision diagnostique, suivi thérapeutique",
          "Applications : allergies, maladies auto-immunes, infections",
          "Discours adapté aux allergologues, rhumatologues, dermatologues"
        ],
        strategie: "Cas cliniques + Conversion scientifique → commercial",
        tp: "Préparer et présenter un pitch de 3 minutes pour un allergologue (évaluation par les pairs)"
      },
      {
        numero: 12,
        titre: "Biochimie, hématologie et explorations fonctionnelles",
        duree: "2h",
        objectifs: [
          "Maîtriser les analyses biochimiques et hématologiques",
          "Comprendre les explorations fonctionnelles",
          "Construire des argumentaires ciblés"
        ],
        contenu: [
          "Biochimie : enzymes, électrolytes, métabolites",
          "Hématologie : NFS, analyses cellulaires",
          "ECG, échographie cardiaque, débitmétrie urinaire",
          "Arguments : qualité, réactivité, suivi des maladies chroniques",
          "Ciblage : cardiologues, endocrinologues, néphrologues, généralistes"
        ],
        strategie: "Démonstration équipements + Cas patients + Arguments de vente",
        tp: "Simulation : Convaincre un cardiologue de prescrire nos bilans cardiaques complets"
      }
    ],
    facilitateurs: [1, 2, 10]
  },
  {
    semaine: 5,
    titre: "Fidélisation, Outils & Développement Personnel",
    slug: "fidelisation-outils-developpement-personnel",
    lecons: [
      {
        numero: 13,
        titre: "Relation client et fidélisation",
        duree: "2h",
        objectifs: [
          "Mettre en place un suivi personnalisé",
          "Développer la fidélisation des prescripteurs",
          "Créer une relation de confiance durable"
        ],
        contenu: [
          "Outils de suivi : appels, emails, invitations",
          "Programmes de récompense et reconnaissance",
          "Développer une relation au-delà de la transaction",
          "Utilisation du CRM pour personnaliser",
          "Organisation d'événements relationnels",
          "Communication multicanal"
        ],
        strategie: "Démonstration CRM + Exemples de programmes + Planning type",
        tp: "Exercice : Créer un plan de suivi sur 3 mois pour 5 prescripteurs types"
      },
      {
        numero: 14,
        titre: "Outils commerciaux et digitaux",
        duree: "2h",
        objectifs: [
          "Maîtriser les outils commerciaux",
          "Utiliser efficacement le CRM",
          "Exploiter les supports numériques"
        ],
        contenu: [
          "Brochures, fiches produits, argumentaires",
          "Formation CRM : saisie, suivi, reporting",
          "Applications mobiles et outils digitaux",
          "Accès aux résultats et interfaces prescripteurs",
          "Rédaction de rapports de visite efficaces"
        ],
        strategie: "Formation pratique sur ordinateur + Manipulation réelle",
        tp: "Mise en situation : Saisir 3 comptes rendus de visite complets dans le CRM"
      },
      {
        numero: 15,
        titre: "Développement personnel et gestion du stress",
        duree: "2h",
        objectifs: [
          "Connaître son profil de personnalité",
          "Gérer son stress et ses émotions",
          "Optimiser son organisation personnelle"
        ],
        contenu: [
          "Test de profil de personnalité (DISC, MBTI ou similaire)",
          "Gestion du stress et des émotions",
          "Prévention du burnout",
          "Organisation personnelle et gestion du temps",
          "Priorisation des tâches commerciales",
          "Techniques de récupération et d'équilibre"
        ],
        strategie: "Tests personnalisés + Coaching + Outils pratiques",
        tp: "Atelier : Créer son planning hebdomadaire optimal et identifier ses pics d'énergie"
      }
    ],
    facilitateurs: [11, 12, 13]
  },
  {
    semaine: 6,
    titre: "Intelligence Émotionnelle & Pratique Intensive",
    slug: "intelligence-emotionnelle-pratique-intensive",
    lecons: [
      {
        numero: 16,
        titre: "Intelligence émotionnelle et communication interpersonnelle",
        duree: "2h",
        objectifs: [
          "Développer son intelligence émotionnelle",
          "Renforcer l'empathie et l'écoute active",
          "Pratiquer l'assertivité"
        ],
        contenu: [
          "Compréhension et maîtrise de ses émotions",
          "Empathie authentique avec les prescripteurs",
          "Écoute active avancée",
          "Assertivité : s'exprimer clairement avec respect",
          "Gestion des personnalités difficiles",
          "Communication non-verbale"
        ],
        strategie: "Exercices pratiques + Feedback vidéo + Mises en situation",
        tp: "Jeu de rôle filmé : Gérer un prescripteur agressif ou méfiant (analyse collective)"
      },
      {
        numero: 17,
        titre: "Motivation, objectifs et apprentissage continu",
        duree: "2h",
        objectifs: [
          "Identifier ses motivations profondes",
          "Fixer des objectifs SMART personnels",
          "Développer une posture d'apprentissage continu"
        ],
        contenu: [
          "Motivations intrinsèques et extrinsèques",
          "Objectifs SMART : Spécifiques, Mesurables, Atteignables, Réalistes, Temporels",
          "Techniques d'automotivation",
          "Adaptation aux changements du marché",
          "Culture de l'apprentissage permanent",
          "Résilience face aux échecs"
        ],
        strategie: "Travail individuel + Partage en groupe + Plan d'action personnel",
        tp: "Atelier : Définir ses 3 objectifs SMART pour les 3 prochains mois avec plan d'action"
      },
      {
        numero: 18,
        titre: "Simulations intensives multi-prescripteurs",
        duree: "2h",
        objectifs: [
          "Intégrer toutes les compétences acquises",
          "S'entraîner face à différents profils",
          "Recevoir des feedbacks constructifs"
        ],
        contenu: [
          "Jeux de rôle : généraliste pressé, spécialiste exigeant, prescripteur fidèle à un concurrent",
          "Situations difficiles : objections multiples, refus catégorique, négociation serrée",
          "Évaluation par les formateurs et les pairs",
          "Débriefing collectif et partage de bonnes pratiques"
        ],
        strategie: "Rotations de jeux de rôle + Évaluation croisée + Vidéo",
        tp: "Chaque commercial passe 3 simulations de 15 minutes avec débriefing immédiat"
      }
    ],
    facilitateurs: [11, 14, 15]
  },
  {
    semaine: 7,
    titre: "Imagerie, Anatomopathologie & Partenariats",
    slug: "imagerie-anatomopathologie-partenariats",
    lecons: [
      {
        numero: 19,
        titre: "Imagerie médicale et exploration fonctionnelle approfondie",
        duree: "2h",
        objectifs: [
          "Maîtriser l'offre d'imagerie du laboratoire",
          "Développer des arguments spécifiques",
          "Cibler les prescripteurs concernés"
        ],
        contenu: [
          "Radiographie standard et spécialisée",
          "Échographie standard et spécialisée",
          "Explorations fonctionnelles : ECG, écho cardiaque, débitmétrie",
          "Arguments : accessibilité, qualité d'image, rapidité de compte-rendu",
          "Prescripteurs : cardiologues, rhumatologues, médecins du sport, urologues"
        ],
        strategie: "Visite du service d'imagerie + Démonstration + Arguments de vente",
        tp: "Préparer un argumentaire complet pour un médecin du sport ou un cardiologue"
      },
      {
        numero: 20,
        titre: "Anatomopathologie et partenariat Cerba Pasteur",
        duree: "2h",
        objectifs: [
          "Comprendre l'anatomopathologie et son importance",
          "Maîtriser le partenariat Cerba Pasteur",
          "Valoriser l'extension des analyses spécialisées"
        ],
        contenu: [
          "Anatomopathologie : biopsies, cytologie, histologie",
          "Importance dans le diagnostic des cancers",
          "Partenariat Cerba Pasteur : examens spécialisés externalisés",
          "Arguments : accès à des analyses de pointe, réseau national, expertise",
          "Prescripteurs cibles : oncologues, chirurgiens, gynécologues"
        ],
        strategie: "Présentation + Cas cliniques + Processus de sous-traitance",
        tp: "Simulation : Expliquer à un oncologue notre chaîne complète d'analyses spécialisées"
      },
      {
        numero: 21,
        titre: "Analyse de cas réels et retours d'expérience",
        duree: "2h",
        objectifs: [
          "Analyser des situations commerciales réelles",
          "Identifier les bonnes pratiques et erreurs",
          "Apprendre des succès et échecs"
        ],
        contenu: [
          "Étude de 5 cas réels : succès et échecs",
          "Analyse collective des stratégies utilisées",
          "Identification des facteurs de réussite",
          "Erreurs à éviter",
          "Partage d'expériences des commerciaux seniors"
        ],
        strategie: "Présentation de cas + Discussion + Brainstorming collectif",
        tp: "Travail en groupe : Proposer 3 stratégies alternatives pour un cas d'échec présenté"
      }
    ],
    facilitateurs: [4, 10, 16]
  },
  {
    semaine: 8,
    titre: "Consolidation, Évaluation & Lancement Terrain",
    slug: "consolidation-evaluation-lancement-terrain",
    lecons: [
      {
        numero: 22,
        titre: "Révision générale et création du Carnet du Délégué",
        duree: "2h",
        objectifs: [
          "Consolider toutes les connaissances acquises",
          "Créer son outil personnel de référence",
          "Préparer le déploiement terrain"
        ],
        contenu: [
          "Révision des points clés du programme",
          "Construction personnalisée du 'Carnet du Délégué' incluant :",
          "  - Points clés scientifiques et commerciaux",
          "  - Arguments par service et par prescripteur",
          "  - Réponses aux objections",
          "  - Fiches prescripteurs types",
          "  - Check-lists de visite",
          "Format transportable, éditable et évolutif"
        ],
        strategie: "Atelier collaboratif + Templates fournis + Personnalisation",
        tp: "Finaliser son Carnet du Délégué complet et le présenter (5 min par commercial)"
      },
      {
        numero: 23,
        titre: "Évaluation finale pratique et théorique",
        duree: "2h",
        objectifs: [
          "Évaluer les compétences acquises",
          "Identifier les points à renforcer",
          "Valider la préparation au terrain"
        ],
        contenu: [
          "Test théorique écrit (30 min) : connaissances produits, techniques de vente, profil SONCASE",
          "Évaluations pratiques (1h30) :",
          "  - 2 jeux de rôle complets (généraliste + spécialiste)",
          "  - Gestion d'objections en direct",
          "  - Présentation d'un argumentaire complet",
          "Feedback individualisé immédiat",
          "Identification des axes de progrès personnels"
        ],
        strategie: "Évaluation individuelle + Grille de notation + Feedback constructif",
        tp: "Évaluation complète avec notation et plan de progression individuel"
      },
      {
        numero: 24,
        titre: "Lancement terrain, planification et engagement",
        duree: "2h",
        objectifs: [
          "Planifier les premières visites terrain",
          "S'engager sur des objectifs concrets",
          "Comprendre le suivi post-formation"
        ],
        contenu: [
          "Planification des premières visites (semaine 1 et 2)",
          "Attribution des zones et prescripteurs prioritaires",
          "Fixation d'objectifs individuels pour le 1er trimestre",
          "Présentation du système de suivi et coaching mensuel",
          "Révisions mensuelles programmées",
          "Remise des Carnets du Délégué finalisés",
          "Cérémonie de clôture et engagement collectif",
          "Prière collective de lancement"
        ],
        strategie: "Séance motivationnelle + Planification concrète + Engagement formel + Célébration",
        tp: "Chaque commercial présente son plan d'action pour la 1ère semaine terrain (3 min chacun)"
      }
    ],
    facilitateurs: [5, 6, 7, 11]
  }
];
export const facilitateurs = [
  {
    id: 1,
    nom: "M. Tsayem",
    titre: "Directeur De la recherche scientifique et de l'innovation",
    slug: "m-tsayem",
    modules: [1, 4]
  },
  {
    id: 2,
    nom: "M. Firmin SIBEFO",
    titre: "Directeur Technique",
    slug: "m-firmin-sibefro",
    modules: [1, 4]
  },
  {
    id: 3,
    nom: "M. Noubissi Fabrice",
    titre: "Commercial Senior",
    slug: "m-noubissi-fabrice",
    modules: [1]
  },
  {
    id: 4,
    nom: "Mme SOFFACK MADELLE",
    titre: "Responsable Qualité",
    slug: "mme-soffack-madelle",
    modules: [1, 7]
  },
  {
    id: 5,
    nom: "M. FOKOUE Hermann",
    titre: "Ressources Humaines",
    slug: "m-fokoue-hermann",
    modules: [1, 8]
  },
  {
    id: 6,
    nom: "Dr. Ngouana",
    titre: "PDG",
    slug: "dr-ngouana",
    modules: [2, 3, 8]
  },
  {
    id: 7,
    nom: "M. Noubissi",
    titre: "Commerciel Senior",
    slug: "m-noubissi",
    modules: [2, 3, 8]
  },
  {
    id: 8,
    nom: "M. FONDA Marion",
    titre: "Expert Marketing",
    slug: "m-fonda-marion",
    modules: [2]
  },
  {
    id: 10,
    nom: "MME TCHAMALEU STELLE",
    slug: "mme-tchamaleu-stelle",
    modules: [4, 7]
  },
  {
    id: 11,
    nom: "M. TASONDOCK DURIN",
    slug: "m-tasondock-durin",
    modules: [5, 6, 8]
  },
  {
    id: 12,
    nom: "M. NJIKE ACHILLE",
    slug: "m-njike-achille",
    modules: [5]
  },
  {
    id: 13,
    nom: "MME BOUCHE LANCE",
    titre: "Commerciale, Superviseur Région Du Centre",
    slug: "mme-bouche-lance",
    modules: [5]
  },
  {
    id: 14,
    nom: "M. AMOUR NDONGONLA",
    titre: "Commerciale",
    slug: "m-amour-ndongonla",
    modules: [6]
  },
  {
    id: 15,
    nom: "M. TONLEU STEPHANE",
    titre: "Commercial",
    slug: "m-tonleu-stephane",
    modules: [6]
  },
  {
    id: 16,
    nom: "MME MBALLA BLANDINE",
    titre: "Superviseur imagerie Yaundé",
    slug: "mme-mballa-blandine",
    modules: [7]
  },
];



export const ressources = [
    { categorie: "Livres Recommandés - Communication & Vente", titres: [
      "Comment se faire des amis - Dale Carnegie",
      "Influence et Manipulation - Robert Cialdini",
      "The Challenger Sale - Matthew Dixon & Brent Adamson",
      "Getting to Yes - Roger Fisher & William Ury",
      "SPIN Selling - Neil Rackham"
    ]},
    { categorie: "Outils à Développer", items: [
      "Carnet du Délégué (format papier + digital)",
      "Manuel de prélèvement",
      "Brochures par service",
      "Fiches prescripteurs types",
      "CRM personnalisé",
      "Application mobile de suivi"
    ]},
    { categorie: "Matériel de Formation", items: [
      "Vidéoprojecteur et écran",
      "Caméras pour enregistrements",
      "Ordinateurs pour formation CRM",
      "Badges d'identification",
      "Supports imprimés",
      "Tests de personnalité"
    ]}
];
