import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dptos } from '../../models/dptos';
import * as toastr from 'toastr';

@Component({
    selector: 'dpto-editar',
    templateUrl: './dpto-nuevo.component.html',
    providers: [SivanupService]
  })

  export class DptoEditar{

    public titulo: string;
    public dpto: Dptos;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Editar Departamento";
        this.dpto = new Dptos('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = true;
        this.getDpto();
    }

    
    getDpto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._sivanupService.getDpto(id).subscribe(
                response => {
                    if (response.code == 200) {
                        this.dpto = response.data;
                    } else {
                        this._router.navigate(['/departamentos']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

    updateDpto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._sivanupService.editDpto(id, this.dpto).subscribe(
                response => {
                    if (response.code == 200) {
                        toastr["success"]("Departamento modificado correctamente", "");
                        this._router.navigate(['/departamentos']);
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