import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Encuestadores } from '../../models/encuestadores';
import * as toastr from 'toastr';

@Component({
    selector: 'encuestador-editar',
    templateUrl: './encuestadores-editar.component.html',
    providers: [SivanupService]
  })

  export class EncuestadorEditar{

    public titulo: string;
    public encuestador: Encuestadores;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Editar Encuestador";
        this.encuestador = new Encuestadores('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = true;
        this.getEncuestador();
    }

    
    getEncuestador() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._sivanupService.getEncuestador(id).subscribe(
                response => {
                    if (response.code == 200) {
                        this.encuestador = response.data;
                    } else {
                        this._router.navigate(['/encuestadores']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

    updateEncuestador() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._sivanupService.editEncuestador(id, this.encuestador).subscribe(
                response => {
                    if (response.code == 200) {
                        toastr["success"]("Encuestador modificado correctamente", "");
                        this._router.navigate(['/encuestadores']);
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