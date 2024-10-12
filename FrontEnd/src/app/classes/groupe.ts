import { Etudiant } from "./etudiant";

export class Groupe {
    constructor(
        public etudiants: Etudiant[],
        public libelle_Groupe:string,
        public id_groupe?:number,
    ){}
}
