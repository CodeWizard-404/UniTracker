import { Completion } from "./completion";
import { Matiere } from "./matiere";
import { Prof } from "./prof";

export class Tache {
    constructor(
        public id_Tache:number,
        public titre:string,
        public description:string,
        public dateLimite:Date,
        public complexite:string,
        public professeur :Prof,
        public completions:Completion[],

    ){}
}
