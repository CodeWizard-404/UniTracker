import { Etudiant } from "./etudiant";
import { Matiere } from "./matiere";

export class Classe {
    public id_Classe?: number;
    public libelle_Classe: string;
    public etudiants: Etudiant[];
    public matieres: Matiere[];
    public nombreMatieres?: number; // Propriété optionnelle
    public nombreProfesseurs?: number; // Propriété optionnelle
    public nombreEtudiants?: number; // Propriété optionnelle
  
    constructor() {
      this.libelle_Classe = '';
      this.etudiants = [];
      this.matieres = [];
    }
}
