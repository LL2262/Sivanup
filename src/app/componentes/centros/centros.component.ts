import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Centros } from '../../models/centros';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  providers: [SivanupService]
})
export class CentrosComponent{

public titulo: string;
public data;
public buscador: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
  {
    this.titulo = "Lista de Centros";
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "4000",
      }
  }

  ngOnInit() 
  {
    this.getCentros();
  }

  getCentros()
    {
        this._sivanupService.getCentros().subscribe(
            result => {
                this.data = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    OnDeleteCentro(id)
    {
            this._sivanupService.deleteCentro(id).subscribe(
                response => {
                    if (response.code == 200) {
                        console.log(response);
                        toastr["success"]("Centro eliminado correctamente", "");
                        this.getCentros();
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
