import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent{

  public titulo: string;

  constructor() 
  { 
    this.titulo = "REGISTRO"
  }

  ngOnInit() {
  }

}
