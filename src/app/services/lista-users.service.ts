import { Injectable } from '@angular/core';
import { User } from '../classes/user.class';
import { Iuser } from '../models/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaUsersService {


  // Posso creare proprietà della stessa

  private _users: Iuser[] = [
    new User('Jessica','email@jessica',0),
    new User('Chiara','email@chiara'),
    new User('Ilenia','email@ilenia'),
    new User('Fabio','email@fabio'),
    new User('Matteo', 'email@matteo'),
  ];

  getUsers(){
    return this._users;
  }

  addUser(user: Iuser){
    this._users.push(user);
  }

  constructor() { }

  // Posso creare metodi

}
