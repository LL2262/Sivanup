import { Component } from '@angular/core';
import { Personas } from '../../models/personas';
import { Encuestas } from '../../models/encuestas';
import { SivanupService } from '../../servicios/sivanup.service';

@Component({
  selector: 'app-error',
  templateUrl: './consultar-afiliados.component.html',
  providers:[SivanupService]
})

export class ConsultarAfiliados{

  public titulo: string;

  public data: any;
  public enfermedadesXafiliados: any;
  public id: number = 0;

  constructor(private _sivanupService: SivanupService) 
  {
    this.titulo="Lista de Afiliados"
  }

  ngOnInit() {

    this.traerAfiliadosEncuestas();
    this.traerEnfermedadesXfiliados();
  }

  traerAfiliadosEncuestas()
  {
      this._sivanupService.traerAfiliadosYEncuesta().subscribe(
          result => {
              this.data = result.data;
          },
          error => {
          }
      );
  }

  traerEnfermedadesXfiliados()
  {
    this._sivanupService.traerEnfermedadesXafiliados().subscribe(
      result => {
          this.enfermedadesXafiliados = result.data;
          console.log(this.enfermedadesXafiliados);
      },
      error => {
          console.log(<any>error);
      }
  );
  }

  // OnDeleteCentro(id)
  // {
  //         this._sivanupService.deleteCentro(id).subscribe(
  //             response => {
  //                 if (response.code == 200) {
  //                     console.log(response);
  //                     toastr["success"]("Centro eliminado correctamente", "");
  //                     this.getCentros();
  //                 } else {
  //                     console.log(response);
  //                 }
  //             },
  //             error => {
  //                 console.log(<any>error);
  //             }
  //         );
  // }

}
