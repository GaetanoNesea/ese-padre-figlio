export interface Iuser {
    id: string | number;
    name: string;
    email: string;
    adress?: IAdress;
}

export interface IAdress {
    via: string;
    numero: number;
}
