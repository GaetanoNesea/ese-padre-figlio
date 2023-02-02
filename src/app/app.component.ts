import { Component, OnInit } from '@angular/core';
import { ListaUsersService } from './services/lista-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'input-output';

  constructor(
    private readonly service: ListaUsersService
  ){}

  ngOnInit(): void {
    console.log(this.service.getUsers());
    
  }


}
