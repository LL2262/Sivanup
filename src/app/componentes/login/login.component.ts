import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent{

  public titulo: string;

  constructor()
  {
    this.titulo="LOGIN"
  }

  ngOnInit() {
  }

}
