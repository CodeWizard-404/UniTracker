import { Etudiant } from "./etudiant";
import { Matiere } from "./matiere";

export class Classe {
    public id_Classe?: number;
    public nom_Classe: string;              
    public annee_Classe: number;            
    public num_Classe: number;              
    public etudiants: Etudiant[];
    public matiereIds: Matiere[];
    public nombreMatieres?: number;  
    public nombreProfesseurs?: number; 
    public nombreEtudiants?: number;  

    constructor() {
        this.nom_Classe = '';               
        this.annee_Classe = 0;              
        this.num_Classe = 0;                
        this.etudiants = [];
        this.matiereIds = [];
    }
}
