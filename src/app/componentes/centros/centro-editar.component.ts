import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Centros } from '../../models/centros';
import * as toastr from 'toastr';

@Component({
    selector: 'centros-editar',
    templateUrl: './centro-nuevo.component.html',
    providers: [SivanupService]
  })

  export class CentroEditar{

    public titulo: string;
    public centro: Centros;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Editar Centro";
        this.centro = new Centros('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = true;
        this.getCentro();
    }

    
    getCentro() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._sivanupService.getCentro(id).subscribe(
                response => {
                    if (response.code == 200) {
                        this.centro = response.data;
                    } else {
                        this._router.navigate(['/centro']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

    updateCentro() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._sivanupService.editCentro(id, this.centro).subscribe(
                response => {
                    if (response.code == 200) {
                        toastr["success"]("Centro modificado correctamente", "");
                        this._router.navigate(['/centros']);
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