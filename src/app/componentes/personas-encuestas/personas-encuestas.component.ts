import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as toastr from 'toastr';
import { Personas } from '../../models/personas';
import { DatePipe } from '@angular/common';
import { Encuestadores } from '../../models/encuestadores';
import { Dptos } from '../../models/dptos';
import { Centros } from '../../models/centros';
import { Programas } from '../../models/programas';
import { Territorios } from '../../models/territorios';
import { Enfermedades } from '../../models/enfermedades';
import { Encuestas } from '../../models/encuestas';

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
    public encuesta: Encuestas;

    public date: Date;
    public today: string;
    public encuestadores: Encuestadores;
    public dptos: Dptos;
    public centros: Centros;
    public programas: Programas;
    public territorios: Territorios;
    public enfermedades: Enfermedades;
    
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
        this.encuesta = new Encuestas('',0,0,0,0,0,0,0,0,0,0,this.afiliado,false,'',0,'');
    }

    ngOnInit()
    {
        this.editar = false;
        console.log(this.datepipe.transform(this.date, 'dd-MM-yyyy'));
        this.getEncuestadores();
        this.getDptos();
        this.getCentros();
        this.getProgramas();
        this.getTerritorios();
        this.getEnfermedades();
    }

    enviar(){
      
        console.log(this.afiliado);
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

    getCentros()
    {
        this._sivanupService.getCentros().subscribe(
            result => {
                this.centros = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getProgramas()
    {
        this._sivanupService.getProgramas().subscribe(
            result => {
                this.programas = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getTerritorios()
    {
        this._sivanupService.getTerritorios().subscribe(
            result => {
                this.territorios = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getEnfermedades()
    {
        this._sivanupService.getEnfermedades().subscribe(
            result => {
                this.enfermedades = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

}