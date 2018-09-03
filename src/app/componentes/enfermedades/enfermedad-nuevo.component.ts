import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Enfermedades } from '../../models/enfermedades';
import * as toastr from 'toastr';

@Component({
    selector: 'enfermedad-nuevo',
    templateUrl: './enfermedad-nuevo.component.html',
    providers: [SivanupService]
  })

  export class EnfermedadNuevo{

    public titulo: string;
    public enfermedad: Enfermedades;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Nueva Enfermedad";
        this.enfermedad = new Enfermedades('0', '','', false);
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = false;
    }

    saveEnfermedad() {
        this._sivanupService.addEnfermedad(this.enfermedad).subscribe(
            response => {
                if (response.code == 300) {
                    console.log(response);
                    toastr["error"]("La enfermedad que intenta guardar ya existe", "Error");
                } else {
                    if (response.code == 500) {
                        console.log(response);
                        toastr["error"]("La enfermedad que intenta guardar existe como baja", "Error");
                    }else{
                        if (response.code == 200) {
                            console.log(response);
                            toastr["success"]("La enfermedad se ha cargado correctamente", "");
                            this._router.navigate(['/enfermedades']);
                        }else{
                            console.log(response);
                            toastr["error"]("La enfermedad no se cargo correctamente", "Error");
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