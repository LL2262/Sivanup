import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';

@Component({
    selector: 'personas-encuestas',
    templateUrl: './personas-encuestas.component.html',
    providers: [SivanupService]
  })

  export class PersonasEncuestas{

    public titulo: string;
    public editar: boolean;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Cargar Afiliado";
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
    }

    ngOnInit()
    {
        this.editar = false;
    }


}