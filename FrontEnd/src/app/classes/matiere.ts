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
    classesIds: number[];
    semestre: string;  



    constructor() {
        this.libelle = '';
        this.professeurs = [];
        this.classes = [];
        this.classesIds = []; 
        this.semestre = '';  
   

    }
}

