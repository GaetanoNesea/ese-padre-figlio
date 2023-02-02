import { Injectable } from '@angular/core';
import { User } from '../classes/user.class';
import { Iuser } from '../models/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaUsersService {


  // Posso creare proprietà della stessa

  private _users: Iuser[] = [
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
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
