import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Enfermedades } from '../../models/enfermedades';
import * as toastr from 'toastr';

@Component({
    selector: 'enfermedades-editar',
    templateUrl: './enfermedad-editar.component.html',
    providers: [SivanupService]
  })

  export class EnfermedadEditar{

    public titulo: string;
    public enfermedad: Enfermedades;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Editar Enfermedad";
        this.enfermedad = new Enfermedades('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = true;
        this.getEnfermedad();
    }

    
    getEnfermedad() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._sivanupService.getEnfermedad(id).subscribe(
                response => {
                    if (response.code == 200) {
                        this.enfermedad = response.data;
                    } else {
                        this._router.navigate(['/enfermedad']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

    updateEnfermedad() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._sivanupService.editEnfermedad(id, this.enfermedad).subscribe(
                response => {
                    if (response.code == 200) {
                        toastr["success"]("Enfermedad modificada correctamente", "");
                        this._router.navigate(['/enfermedades']);
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