import { Etudiant } from "./etudiant";
import { Tache } from "./tache";

export class Completion {
    public etudiant_id: number;
    public tache_id: number;
    public marquer: boolean;
    public complexite: String;
    public etudiant: number;
    public tache: Tache;
    public commentaires:String[];

    constructor(etudiant_id:number,tache_id: number, marquer: boolean, complexite: String, etudiant: number, tache: Tache,commentaires:String[]) {
      this.etudiant_id = etudiant_id; 
      this.tache_id = tache_id;
        this.marquer = marquer;
        this.complexite = complexite;
        this.etudiant = etudiant;
        this.tache = tache;
        this.commentaires=[];
      }
    
}
