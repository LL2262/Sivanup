import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-encuestadores',
  templateUrl: './encuestadores.component.html',
  providers: [SivanupService]
})
export class EncuestadoresComponent{

public titulo: string;
public data;
public buscador: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
  {
    this.titulo = "Lista de Encuestadores";
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "4000",
      }
  }

  ngOnInit() 
  {
    this.getEncuestadores();
  }

  getEncuestadores()
    {
        this._sivanupService.getEncuestadores().subscribe(
            result => {
                this.data = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    OnDeleteEncuestador(id)
    {
            this._sivanupService.deleteEncuestador(id).subscribe(
                response => {
                    if (response.code == 200) {
                        console.log(response);
                        toastr["success"]("Encuestador eliminado correctamente", "");
                        this.getEncuestadores();
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