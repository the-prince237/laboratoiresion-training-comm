import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Laboratoires SION | Programme de Formation des Commerciaux",
  description:
    "Programme complet de formation sur 8 semaines (24 leçons, 48h) pour développer les compétences commerciales, scientifiques, relationnelles et spirituelles des délégués médicaux.",
  keywords: [
    "formation commerciale",
    "délégué médical",
    "laboratoire",
    "biologie médicale",
    "CRM",
    "vente médicale",
    "programme de formation",
    "analyse de la concurrence",
    "SONCASE",
    "fidélisation",
    "intelligence émotionnelle"
  ],

  openGraph: {
    title: "Programme de Formation des Commerciaux",
    description:
      "Programme intensif de 8 semaines pour former des commerciaux performants et operationnels en laboratoire médical.",
    type: "website",
    url: "https://votre-domaine.com/formation",
    siteName: "Laboratoire d'Analyses Médicales",
    locale: "fr_FR",
    images: [
      {
        url: "https://votre-domaine.com/images/formation-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Programme de Formation des Commerciaux"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Programme de Formation des Commerciaux",
    description:
      "Programme intensif de 8 semaines pour délégués médicaux, incluant vente, science, CRM, fidélisation et dimension spirituelle.",
    images: ["https://votre-domaine.com/images/formation-cover.jpg"]
  },

  alternates: {
    canonical: "https://votre-domaine.com/formation"
  },

  // Custom data for your application
  other: {
    programme: {
      titre: "Programme de Formation des Commerciaux",
      dureeSemaines: 8,
      dureeTotalHeures: 48,
      leconsTotal: 24,
      rythmeHebdo: "12h/semaine",
      objectifGlobal:
        "Rendre les commerciaux opérationnels en 1 mois, puis assurer un suivi continu."
    },

    modules: [
      { semaine: 1, titre: "Fondations : Laboratoire & Environnement", lecons: [1, 2, 3] },
      { semaine: 2, titre: "Analyse de la Concurrence & Techniques de Vente", lecons: [4, 5, 6] },
      { semaine: 3, titre: "Objections, Négociation & Dimension Spirituelle", lecons: [7, 8, 9] },
      { semaine: 4, titre: "Fidélisation, Outils & Développement Personnel", lecons: [10, 11, 12] },
      { semaine: 5, titre: "Approfondissement Scientifique & Application Terrain", lecons: [13, 14, 15] },
      { semaine: 6, titre: "Intelligence Émotionnelle & Pratique Intensive", lecons: [16, 17, 18] },
      { semaine: 7, titre: "Imagerie, Anatomopathologie & Partenariats", lecons: [19, 20, 21] },
      { semaine: 8, titre: "Consolidation, Évaluation & Lancement Terrain", lecons: [22, 23, 24] }
    ],

    facilitateurs: [
      "Directeur Général",
      "Directeur Commercial",
      "Dr Responsable Technique",
      "Responsable Qualité",
      "Responsable RH",
      "Responsable Marketing",
      "Responsable IT",
      "Commercial Senior",
      "Formateur Commercial Externe",
      "Dr Biologiste",
      "Dr Immunologiste",
      "Dr Cardiologue",
      "Radiologue",
      "Dr Anatomopathologiste",
      "Responsable Partenariats",
      "Psychologue / Coach Professionnel",
      "Pasteur / Conseiller Spirituel"
    ],

    ressources: {
      livres: [
        "Comment se faire des amis",
        "Influence et Manipulation",
        "The Challenger Sale",
        "Getting to Yes",
        "SPIN Selling"
      ],
      outils: [
        "Carnet du Délégué",
        "Manuel de prélèvement",
        "Fiches prescripteurs",
        "CRM",
        "Application mobile"
      ],
      materiel: [
        "Vidéoprojecteur",
        "Caméras",
        "Ordinateurs CRM",
        "Badges",
        "Supports imprimés",
        "Tests de personnalité"
      ]
    }
  } as  { [key: string]: any }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color='#67c42a' height={5} showSpinner={false} />
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 lg:p-6">
          <div className="max-w-7xl mx-auto font-primary">
            {children}
            <footer className="mt-8 bg-purple-900 text-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-lg font-semibold mb-2">
                Formation intensive suivie d'un accompagnement continu tout au long de l'année
              </p>
              <p className="text-purple-200 text-sm">
                Objectif : Des commerciaux compétents, confiants et performants dès la fin du mois 1
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
