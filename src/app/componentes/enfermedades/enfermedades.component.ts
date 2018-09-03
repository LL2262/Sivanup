import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Enfermedades } from '../../models/enfermedades';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  providers: [SivanupService]
})
export class EnfermedadesComponent{

public titulo: string;
public data;
public buscador: string;
public loading: boolean;

  constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
  {
    this.loading= true;
    this.titulo = "Lista de Enfermedades";
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "4000",
      }
  }

  ngOnInit() 
  {
    this.getEnfermedades();
  }

  getEnfermedades()
    {
        this._sivanupService.getEnfermedades().subscribe(
            result => {
                this.data = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    OnDeleteEnfermedad(id)
    {
            this._sivanupService.deleteEnfermedad(id).subscribe(
                response => {
                    if (response.code == 200) {
                        console.log(response);
                        toastr["success"]("Enfermedad eliminada correctamente", "");
                        this.getEnfermedades();
                    } else {
                        console.log(response);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
    }

}
