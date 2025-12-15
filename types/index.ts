export type ModuleProps = {
  semaine: number;
  slug: string;
  titre: string;
  facilitateurs: number[];
  lecons: Lecon[];
  doc?: string;
};

export type Lecon = {
  numero: number;
  titre: string;
  duree: string;
  objectifs: string[];
  contenu: string[];
  strategie: string;
  tp: string;
};

export type Facilitateur = {
  id: string;
  nom: string;
  bio: string;
  photoUrl: string;
};

export type Ressources = {
  livres: string[];
  outils: string[];
  materiel: string[];
};

export type TrainingData = {
  modules: ModuleProps[];
  facilitateurs: Facilitateur[];
  ressources: Ressources;
};

export const trainingData: TrainingData = {
  modules: [],
  facilitateurs: [],
  ressources: {
    livres: [],
    outils: [],
    materiel: []
  }
};