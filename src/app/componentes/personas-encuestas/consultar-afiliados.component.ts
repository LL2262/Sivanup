import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './consultar-afiliados.component.html',
})

export class ConsultarAfiliados{

  public titulo: string;

  constructor() 
  {
    this.titulo="Lista de Afiliados"
  }

  ngOnInit() {
  }

}
