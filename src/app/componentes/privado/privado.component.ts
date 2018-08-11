import { Component} from '@angular/core';


@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
})

export class PrivadoComponent{

  public titulo: string;
  public primerLogueo: boolean;

  constructor() 
  {  
    this.titulo = "Privado";
  }

  ngOnInit() 
  {
  }

}
