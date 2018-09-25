import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';
import { Personas } from '../../models/personas';
import { DatePipe } from '@angular/common';
import { Encuestadores } from '../../models/encuestadores';
import { Dptos } from '../../models/dptos';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'personas-encuestas',
    templateUrl: './personas-encuestas.component.html',
    providers: [SivanupService, DatePipe]
  })

  export class PersonasEncuestas{

    public titulo: string;
    public titulo2: string;
    public editar: boolean;
    public afiliado: Personas;

    public date: Date;
    public today: string;
    public encuestadores: Encuestadores;
    public dptos: Array<Dptos>;
    
    public validacionPositiva: boolean;


    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService, public datepipe: DatePipe)
    {
        this.validacionPositiva = false;

        this.titulo = "Datos Personales";

        this.titulo2 = "Datos de Encuesta";
        
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
        }

        this.date=new Date();
        this.today = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        
        this.afiliado = new Personas('','','','','',null,this.today,null,null,false,'',null,'','','','',null,null);
    }

    ngOnInit()
    {
        this.editar = false;
        console.log(this.datepipe.transform(this.date, 'dd-MM-yyyy'));
        this.getEncuestadores();
        this.getDptos();
    }

    enviar(){
      
        console.log(this.afiliado.Dpto);
    }

    getEncuestadores()
    {
        this._sivanupService.getEncuestadores().subscribe(
            result => {
                this.encuestadores = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getDptos()
    {
        this._sivanupService.getDptos().subscribe(
            result => {
                this.dptos = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

}