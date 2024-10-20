import { Classe } from "./classe";
import { Etudiant } from "./etudiant";
import { Groupe } from "./groupe";
import { Prof } from "./prof";
import { Tache } from "./tache";

export class Matiere {
    id_Matiere?: number; 
    libelle: string;
    professeurs: number[]; 
    classes: Classe[]; 
    classeIds: number[];  
    semestre: string;  
    taches: Tache[];
    groupes: Groupe[];


    constructor() {
        this.libelle = '';
        this.professeurs = [];
        this.classes = [];
        this.classeIds = [];  
        this.semestre = '';  
        this.taches = [];
        this.groupes = [];
    }

    // getEtudiants(): Etudiant[] {
    //     const etudiants: Etudiant[] = [];
    //     this.classes.forEach(classe => {
    //         etudiants.push(...classe.etudiants); 
    //     });
    //     return etudiants;
    // }
}
