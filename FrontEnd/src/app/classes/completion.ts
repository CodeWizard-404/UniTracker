import { Etudiant } from "./etudiant";
import { Tache } from "./tache";

export class Completion {
    public id_Completion: number;
    public marquer: boolean;
    public complexite: String;
    public etudiant: number;
    public tache: Tache;

    constructor(id_Completion: number, marquer: boolean, complexite: String, etudiant: number, tache: Tache) {
        this.id_Completion = id_Completion;
        this.marquer = marquer;
        this.complexite = complexite;
        this.etudiant = etudiant;
        this.tache = tache;
      }
    
}
