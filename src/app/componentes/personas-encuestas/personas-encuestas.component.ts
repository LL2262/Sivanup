import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';
import { Personas } from '../../models/personas';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'personas-encuestas',
    templateUrl: './personas-encuestas.component.html',
    providers: [SivanupService]
  })

  export class PersonasEncuestas{

    public titulo: string;
    public titulo2: string;
    public editar: boolean;
    public afiliado: Personas;

    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
    {
        this.titulo = "Datos Personales";
        this.titulo2 = "Datos de Encuesta";
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
          }
        this.afiliado = new Personas('','','','','',0,null,null,null,null,false,'','',0,'',0,'',null,null);
    }

    ngOnInit()
    {
        this.editar = false;

    }


}