import { Component } from '@angular/core';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
})

export class PrivadoComponent{

  public titulo: string;

  constructor() 
  { 
    this.titulo="Privado"
  }

  ngOnInit() {
  }

}
