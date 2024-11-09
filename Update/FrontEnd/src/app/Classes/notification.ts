export class Notification {
    constructor(
        public id?:number,
        public message?:string,
        public dateCreation?:Date,
        public read?: boolean
    ){}
}
