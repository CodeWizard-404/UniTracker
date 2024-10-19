import { Classe } from "./classe";
import { Etudiant } from "./etudiant";
import { Prof } from "./prof";

export class Matiere {
    id_Matiere?: number; 
    libelle: string;
    professeurs: Prof[]; 
    classes: Classe[]; 
    semestre: string;  

    constructor() {
        this.libelle = '';
        this.professeurs = [];
        this.classes = [];
        this.semestre = '';  
    }
    getEtudiants(): Etudiant[] {
        const etudiants: Etudiant[] = [];
        this.classes.forEach(classe => {
            etudiants.push(...classe.etudiants); 
        });
        return etudiants;
    }

}
