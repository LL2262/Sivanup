import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Programas } from '../../models/programas';
import * as toastr from 'toastr';

@Component({
    selector: 'programas-editar',
    templateUrl: './programa-editar.component.html',
    providers: [SivanupService]
  })

  export class ProgramaEditar{

    public titulo: string;
    public programa: Programas;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Editar Programa";
        this.programa = new Programas('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = true;
        this.getPrograma();
    }

    
    getPrograma() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._sivanupService.getPrograma(id).subscribe(
                response => {
                    if (response.code == 200) {
                        this.programa = response.data;
                    } else {
                        this._router.navigate(['/programa']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

    updatePrograma() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._sivanupService.editPrograma(id, this.programa).subscribe(
                response => {
                    if (response.code == 200) {
                        toastr["success"]("Programa modificado correctamente", "");
                        this._router.navigate(['/programas']);
                    } else {
                        console.log(response);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

}