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
import {IMyDpOptions, IMyDateModel, IMyDayLabels} from 'mydatepicker';

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
    public encuestadores: Encuestadores;
    public dptos: Dptos;
    public centros: Centros;
    public programas: Programas;
    public territorios: Territorios;
    public enfermedades: Enfermedades; 
    public validacionPositiva: boolean;

    public today = new Date();

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        todayBtnTxt: 'Hoy',
        editableDateField: false,
        dateFormat: 'dd/mm/yyyy',
        dayLabels: {su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab'},
        disableDateRanges: [{begin: {year: this.today.getFullYear(), month: this.today.getMonth()+1, day: this.today.getDay()+1}, end: {year: 9999, month: 12, day: 20}}]
    };

    public fechaComienzo: string; 


    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService, public datepipe: DatePipe)
    {
        this.validacionPositiva = false;

        this.titulo = "Datos Personales";

        this.titulo2 = "Datos de Encuesta";
        
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "4000",
        }

        // this.today = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        
        this.afiliado = new Personas('','','','','',null,'',null,null,false,null,null,'','','','',null,null);
        this.encuesta = new Encuestas('','0','0','0','0','0','0','0','0','0','0',this.afiliado,false,'','','');

    }

    ngOnInit()
    {
        $('.input-number').on('input', function () { 
            this.value = this.value.replace(/[^0-9]/g,'');
            });

        this.editar = false;
        this.getEncuestadores();
        this.getDptos();
        this.getCentros();
        this.getProgramas();
        this.getTerritorios();
        this.getEnfermedades();
        console.log(this.today);
    }

    onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
        this.fechaComienzo=event.formatted;
    }

    enviar(){
        this.afiliado.FechaComienzo=this.fechaComienzo;
        this.encuesta.Total+=parseInt(this.encuesta.Preg1)+parseInt(this.encuesta.Preg2)+parseInt(this.encuesta.Preg3)+parseInt(this.encuesta.Preg4)+parseInt(this.encuesta.Preg5)+parseInt(this.encuesta.Preg6)+parseInt(this.encuesta.Preg7)+parseInt(this.encuesta.Preg8)+parseInt(this.encuesta.Preg9)+parseInt(this.encuesta.Preg10);
        console.log(this.encuesta);
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