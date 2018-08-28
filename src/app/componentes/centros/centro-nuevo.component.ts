import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Centros } from '../../models/centros';
import * as toastr from 'toastr';

@Component({
    selector: 'centros-nuevo',
    templateUrl: './centro-nuevo.component.html',
    providers: [SivanupService]
  })

  export class CentroNuevo{

    public titulo: string;
    public centro: Centros;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Nuevo Centro";
        this.centro = new Centros('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = false;
    }

    saveCentro() {
        this._sivanupService.addCentro(this.centro).subscribe(
            response => {
                if (response.code == 300) {
                    console.log(response);
                    toastr["error"]("El centro que intenta guardar ya existe", "Error");
                } else {
                    if (response.code == 500) {
                        console.log(response);
                        toastr["error"]("El centro que intenta guardar existe como baja", "Error");
                    }else{
                        if (response.code == 200) {
                            console.log(response);
                            toastr["success"]("Centro cargado correctamente", "");
                            this._router.navigate(['/centros']);
                        }else{
                            console.log(response);
                            toastr["error"]("El centro no se cargo correctamente", "Error");
                        }
                    }
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }


}