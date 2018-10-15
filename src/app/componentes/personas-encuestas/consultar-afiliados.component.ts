import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import * as toastr from 'toastr';

@Component({
  selector: 'app-error',
  templateUrl: './consultar-afiliados.component.html',
  providers:[SivanupService]
})

export class ConsultarAfiliados{

  public titulo: string;

  public data;
  public enfermedadesXafiliados;

  constructor(private _sivanupService: SivanupService) 
  {
    this.titulo="Lista de Afiliados"
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "5000",
      }
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
            console.log(<any>error);
          }
      );
  }

  traerEnfermedadesXfiliados()
  {
    this._sivanupService.traerEnfermedadesXafiliados().subscribe(
      result => {
          this.enfermedadesXafiliados = result.data;
      },
      error => {
          console.log(<any>error);
      }
  );
  }

  OnDeleteAfiliado(id)
  {
          this._sivanupService.deleteAfiliado(id).subscribe(
              response => {
                  if (response.code == 200) {
                      console.log(response);
                      toastr["success"]("Afiliado eliminado correctamente", "");
                      this.traerAfiliadosEncuestas();
                      this.traerEnfermedadesXfiliados();
                  } else {
                      console.log(response);
                  }
              },
              error => {
                  console.log(<any>error);
              }
          );
  }

}
