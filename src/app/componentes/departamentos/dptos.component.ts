import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-dptos',
  templateUrl: './dptos.component.html',
  providers: [SivanupService]
})
export class DptosComponent{

public titulo: string;
public data;
public buscador: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
  {
    this.titulo = "Lista de Departamentos";
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "4000",
      }
  }

  ngOnInit() 
  {
    this.getDptos();
  }

  getDptos()
    {
        this._sivanupService.getDptos().subscribe(
            result => {
                this.data = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    OnDeleteDpto(id)
    {
            this._sivanupService.deleteDpto(id).subscribe(
                response => {
                    if (response.code == 200) {
                        console.log(response);
                        toastr["success"]("Departamento eliminado correctamente", "");
                        this.getDptos();
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