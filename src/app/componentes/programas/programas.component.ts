import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Programas } from '../../models/programas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  providers: [SivanupService]
})
export class ProgramasComponent{

public titulo: string;
public data;
public buscador: string;
public loading: boolean;

  constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
  {
    this.loading= true;
    this.titulo = "Lista de Programas";
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "4000",
      }
  }

  ngOnInit() 
  {
    this.getProgramas();
  }

  getProgramas()
    {
        this._sivanupService.getProgramas().subscribe(
            result => {
                this.data = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    OnDeletePrograma(id)
    {
            this._sivanupService.deletePrograma(id).subscribe(
                response => {
                    if (response.code == 200) {
                        console.log(response);
                        toastr["success"]("Programa eliminado correctamente", "");
                        this.getProgramas();
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
