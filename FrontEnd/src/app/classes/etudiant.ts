import { Classe } from "./classe";
import { Groupe } from "./groupe";

export class Etudiant {
        constructor(
            public id_Etudiant:number,
            public nom_Etd:string,
            public prenom_Etd:string,
            public email_Etd:string,
            public adresse_Etd:string,
            public redoublant:boolean,
            public date_de_naissance_Etd:Date,
            public sexe_Etd:string,
            public telephone_Etd:string,
            public mot_de_passe_Etd:string,
            public cin_Etd:string,
            public classe:Classe,
            public groupes: Groupe[]
        ) {}
    }
    

