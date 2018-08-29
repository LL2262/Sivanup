import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dptos } from '../../models/dptos';
import * as toastr from 'toastr';

@Component({
    selector: 'dpto-nuevo',
    templateUrl: './dpto-nuevo.component.html',
    providers: [SivanupService]
  })

  export class DptoNuevo{

    public titulo: string;
    public dpto: Dptos;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Nuevo Departamento";
        this.dpto = new Dptos('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = false;
    }

    saveDpto() {
        this._sivanupService.addDpto(this.dpto).subscribe(
            response => {
                if (response.code == 300) {
                    console.log(response);
                    toastr["error"]("El departamento que intenta guardar ya existe", "Error");
                } else {
                    if (response.code == 500) {
                        console.log(response);
                        toastr["error"]("El departamento que intenta guardar existe como baja", "Error");
                    }else{
                        if (response.code == 200) {
                            console.log(response);
                            toastr["success"]("departamento cargado correctamente", "");
                            this._router.navigate(['/departamentos']);
                        }else{
                            console.log(response);
                            toastr["error"]("El departamento no se cargo correctamente", "Error");
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