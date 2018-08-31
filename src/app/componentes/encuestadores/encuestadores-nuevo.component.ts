import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Encuestadores } from '../../models/encuestadores';
import * as toastr from 'toastr';

@Component({
    selector: 'encuestador-nuevo',
    templateUrl: './encuestadores-nuevo.component.html',
    providers: [SivanupService]
  })

  export class EncuestadorNuevo{

    public titulo: string;
    public encuestador: Encuestadores;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Nuevo Encuestador";
        this.encuestador = new Encuestadores('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = false;
    }

    saveEncuestador() {
        this._sivanupService.addEncuestador(this.encuestador).subscribe(
            response => {
                if (response.code == 300) {
                    console.log(response);
                    toastr["error"]("El encuestador que intenta guardar ya existe", "Error");
                } else {
                    if (response.code == 500) {
                        console.log(response);
                        toastr["error"]("El encuestador que intenta guardar existe como baja", "Error");
                    }else{
                        if (response.code == 200) {
                            console.log(response);
                            toastr["success"]("Encuestador cargado correctamente", "");
                            this._router.navigate(['/encuestadores']);
                        }else{
                            console.log(response);
                            toastr["error"]("El encuestador no se cargo correctamente", "Error");
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