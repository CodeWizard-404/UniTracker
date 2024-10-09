import { Etudiant } from "./etudiant";
import { Matiere } from "./matiere";

export class Classe {
    id_Classe?: number;
    libelle_Classe: string;
    etudiants: Etudiant[];
    matieres: Matiere[];
    nombreMatieres?: number; // Propriété optionnelle
    nombreProfesseurs?: number; // Propriété optionnelle
    nombreEtudiants?: number; // Propriété optionnelle
  
    constructor() {
      this.libelle_Classe = '';
      this.etudiants = [];
      this.matieres = [];
    }
}
