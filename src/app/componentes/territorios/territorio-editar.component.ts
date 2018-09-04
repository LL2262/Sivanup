import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Territorios } from '../../models/territorios';
import * as toastr from 'toastr';

@Component({
    selector: 'territorio-editar',
    templateUrl: './territorio-nuevo.component.html',
    providers: [SivanupService]
  })

  export class TerritorioEditar{

    public titulo: string;
    public territorio: Territorios;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Editar Territorio";
        this.territorio = new Territorios('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = true;
        this.getTerritorio();
    }

    
    getTerritorio() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._sivanupService.getTerritorio(id).subscribe(
                response => {
                    if (response.code == 200) {
                        this.territorio = response.data;
                    } else {
                        this._router.navigate(['/territorio']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

    updateTerritorio() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._sivanupService.editTerritorio(id, this.territorio).subscribe(
                response => {
                    if (response.code == 200) {
                        toastr["success"]("Territorio modificado correctamente", "");
                        this._router.navigate(['/territorios']);
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