import { Tache } from "./task";

export class Completion {
    public etudiant_id: number;
    public tache_id: number;
    public marquer: boolean;
    public complexite: String;
    public etudiant: number;
    public tache: Tache;

    constructor(etudiant_id:number,tache_id: number, marquer: boolean, complexite: String, etudiant: number, tache: Tache) {
      this.etudiant_id = etudiant_id; 
      this.tache_id = tache_id;
        this.marquer = marquer;
        this.complexite = complexite;
        this.etudiant = etudiant;
        this.tache = tache;
      }
    
}
