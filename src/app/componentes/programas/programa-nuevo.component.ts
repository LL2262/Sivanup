import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Programas } from '../../models/programas';
import * as toastr from 'toastr';

@Component({
    selector: 'programa-nuevo',
    templateUrl: './programa-nuevo.component.html',
    providers: [SivanupService]
  })

  export class ProgramaNuevo{

    public titulo: string;
    public programa: Programas;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Nuevo Programa";
        this.programa = new Programas('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = false;
    }

    savePrograma() {
        this._sivanupService.addPrograma(this.programa).subscribe(
            response => {
                if (response.code == 300) {
                    console.log(response);
                    toastr["error"]("El programa que intenta guardar ya existe", "Error");
                } else {
                    if (response.code == 500) {
                        console.log(response);
                        toastr["error"]("El programa que intenta guardar existe como baja", "Error");
                    }else{
                        if (response.code == 200) {
                            console.log(response);
                            toastr["success"]("programa cargado correctamente", "");
                            this._router.navigate(['/programas']);
                        }else{
                            console.log(response);
                            toastr["error"]("El programa no se cargo correctamente", "Error");
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