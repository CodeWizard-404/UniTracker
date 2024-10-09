import { Classe } from "./classe";
import { Etudiant } from "./etudiant";
import { Prof } from "./prof";

export class Matiere {
    id_Matiere?: number; 
    libelle: string;
    professeurs: Prof[]; 
    classes: Classe[]; 

    constructor() {
        this.libelle = '';
        this.professeurs = [];
        this.classes = [];
    }
    getEtudiants(): Etudiant[] {
        // Récupérer tous les étudiants des classes associées
        const etudiants: Etudiant[] = [];
        this.classes.forEach(classe => {
            etudiants.push(...classe.etudiants); // Ajouter les étudiants de chaque classe
        });
        return etudiants;
    }

}
