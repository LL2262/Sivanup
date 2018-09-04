import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Territorios } from '../../models/territorios';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-territorios',
  templateUrl: './territorios.component.html',
  providers: [SivanupService]
})
export class TerritoriosComponent{

public titulo: string;
public data;
public buscador: string;
public loading: boolean;

  constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
  {
    this.loading= true;
    this.titulo = "Lista de Territorios";
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "4000",
      }
  }

  ngOnInit() 
  {
    this.getTerritorios();
  }

  getTerritorios()
    {
        this._sivanupService.getTerritorios().subscribe(
            result => {
                this.data = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    OnDeleteTerritorio(id)
    {
            this._sivanupService.deleteTerritorio(id).subscribe(
                response => {
                    if (response.code == 200) {
                        console.log(response);
                        toastr["success"]("Territorio eliminado correctamente", "");
                        this.getTerritorios();
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
