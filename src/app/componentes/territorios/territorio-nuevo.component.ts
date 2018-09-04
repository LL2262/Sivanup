import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Territorios } from '../../models/territorios';
import * as toastr from 'toastr';

@Component({
    selector: 'territorio-nuevo',
    templateUrl: './territorio-nuevo.component.html',
    providers: [SivanupService]
  })

  export class TerritorioNuevo{

    public titulo: string;
    public territorio: Territorios;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Nuevo Territorio";
        this.territorio = new Territorios('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = false;
    }

    saveTerritorio() {
        this._sivanupService.addTerritorio(this.territorio).subscribe(
            response => {
                if (response.code == 300) {
                    console.log(response);
                    toastr["error"]("El territorio que intenta guardar ya existe", "Error");
                } else {
                    if (response.code == 500) {
                        console.log(response);
                        toastr["error"]("El territorio que intenta guardar existe como baja", "Error");
                    }else{
                        if (response.code == 200) {
                            console.log(response);
                            toastr["success"]("Territorio cargado correctamente", "");
                            this._router.navigate(['/territorios']);
                        }else{
                            console.log(response);
                            toastr["error"]("El territorio no se cargo correctamente", "Error");
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