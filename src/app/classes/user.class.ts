import { IAdress, Iuser } from "../models/iuser.interface";

export class User implements Iuser {
    id!: string | number;
    name!: string;
    email!: string;
    adress?: IAdress | undefined;
    

    constructor(){
        this.id = Date.now();
        this.name = '';
        this.email = '';
    }

}
