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
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';

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

    public fecha: string;

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        todayBtnTxt: 'Hoy',
        editableDateField: false,
        dateFormat: 'dd/mm/yyyy',
        dayLabels: {su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab'},
        disableDateRanges: [{begin: {year: this.today.getFullYear(), month: this.today.getMonth()+1, day: this.today.getDate()+1}, end: {year: 9999, month: 12, day: 20}}]
    };

    public fechaComienzo: string; 


    constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService, public datepipe: DatePipe)
    {
        this.validacionPositiva = false;

        this.titulo = "Datos Personales";

        this.titulo2 = "Datos de Encuesta";
        
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": "5000",
        }
        
        this.afiliado = new Personas('','','',null,'',null,'',null,null,false,'',null,'','','','',null,null);
        this.encuesta = new Encuestas('','0','0','0','0','0','0','0','0','0','0',this.afiliado,false,'','');

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
    }

    onDateChanged(event: IMyDateModel) {
        this.fechaComienzo = event.formatted;
    }

    enviar(){
        this.encuesta.Total='';

        this.afiliado.FechaComienzo=this.fechaComienzo;

        this.estadoNutriconal();

        this.riesgoPantorrillaCintura();
        
        this._sivanupService.addAfiliadoEncuesta(this.encuesta).subscribe(
            result => {
                if (result.code == 300) {
                    console.log(result);
                    toastr["error"]("El afiliado que intenta guardar ya existe", "Error");
                } else {
                    if (result.code == 500) {
                        console.log(result);
                        toastr["error"]("El afiliado que intenta guardar existe como baja", "Error");
                    }else{
                        if (result.code == 404) {
                            console.log(result);
                            toastr["success"]("El afiliado no se caro correctamente", "");
                        }else{
                            if(result.code == 408){
                                console.log(result);
                                toastr["success"]("El afiliado no se caro correctamente", "");
                            }else{
                                if(result.code == 407){
                                    console.log(result);
                                    toastr["success"]("El afiliado no se caro correctamente", "");
                                }else{
                                    if(result.code == 200){
                                        toastr["success"]("Afiliado cargado correctamente", "");
                                        this._router.navigate(['/afiliados']);
                                    }
                                    else{
                                        console.log(result);
                                        toastr["success"]("El afiliado no se caro correctamente", "");
                                    }
                                }
                            }
                        }
                        
                    }
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    estadoNutriconal()
    {
        this.encuesta.Total+=parseInt(this.encuesta.Preg1)+parseInt(this.encuesta.Preg2)+parseInt(this.encuesta.Preg3)+parseInt(this.encuesta.Preg4)+parseInt(this.encuesta.Preg5)+parseInt(this.encuesta.Preg6)+parseInt(this.encuesta.Preg7)+parseInt(this.encuesta.Preg8)+parseInt(this.encuesta.Preg9)+parseInt(this.encuesta.Preg10);

        if(parseInt(this.encuesta.Total) <= 2){this.encuesta.Est_Nutr = 'SIN RIESGO'}
        if(parseInt(this.encuesta.Total) >= 3 && parseInt(this.encuesta.Total) <= 5 ){this.encuesta.Est_Nutr = 'RIESGO MODERADO'}
        if(parseInt(this.encuesta.Total) >= 6){this.encuesta.Est_Nutr = 'ALTO RIESGO'}
    }

    riesgoPantorrillaCintura()
    {
        if(this.encuesta.IdPersona.Sexo === 'F')
        {
            //PANTORRILLA FEMENINA
            if(parseInt(this.encuesta.IdPersona.Pantorrilla) < 31)
            {
                this.encuesta.IdPersona.RiesgoPantorrilla = "CON RIESGO";
            }

            if(parseInt(this.encuesta.IdPersona.Pantorrilla) >= 31 && parseInt(this.encuesta.IdPersona.Pantorrilla) <= 33)
            {
                this.encuesta.IdPersona.RiesgoPantorrilla = "NORMAL";
            }

            if(parseInt(this.encuesta.IdPersona.Pantorrilla) > 33)
            {
                this.encuesta.IdPersona.RiesgoPantorrilla = "AUMENTADA";
            }

            if(parseInt(this.encuesta.IdPersona.Pantorrilla) == 0)
            {
                this.encuesta.IdPersona.RiesgoPantorrilla = "NO REGISTRA MEDICIÓN";
            }

            //CINTURA FEMENINA
            if(parseInt(this.encuesta.IdPersona.Cintura) < 81)
            {
                this.encuesta.IdPersona.RiesgoCintura = "SIN RIESGO";
            }

            if(parseInt(this.encuesta.IdPersona.Cintura) >= 81 && parseInt(this.encuesta.IdPersona.Cintura) <= 87)
            {
                this.encuesta.IdPersona.RiesgoCintura = "RIESGO MEDIO";
            }

            if(parseInt(this.encuesta.IdPersona.Cintura) > 87)
            {
                this.encuesta.IdPersona.RiesgoCintura = "ALTO RIESGO";
            }

            if(parseInt(this.encuesta.IdPersona.Cintura) == 0)
            {
                this.encuesta.IdPersona.RiesgoCintura = "NO REGISTRA MEDICIÓN";
            }

        }
        else
        {
            //PANTORRILLA MASCULINA
            if(parseInt(this.encuesta.IdPersona.Pantorrilla) < 31)
            {
                this.encuesta.IdPersona.RiesgoPantorrilla = "CON RIESGO";
            }

            if(parseInt(this.encuesta.IdPersona.Pantorrilla) >= 31 && parseInt(this.encuesta.IdPersona.Pantorrilla) <= 33)
            {
                this.encuesta.IdPersona.RiesgoPantorrilla = "NORMAL";
            }

            if(parseInt(this.encuesta.IdPersona.Pantorrilla) > 33)
            {
                this.encuesta.IdPersona.RiesgoPantorrilla = "AUMENTADA";
            }

            if(parseInt(this.encuesta.IdPersona.Pantorrilla) == 0)
            {
                this.encuesta.IdPersona.RiesgoPantorrilla = "NO REGISTRA MEDICIÓN";
            }

            //CINTURA MASCULINA
            if(parseInt(this.encuesta.IdPersona.Cintura) < 95)
            {
                this.encuesta.IdPersona.RiesgoCintura = "SIN RIESGO";
            }

            if(parseInt(this.encuesta.IdPersona.Cintura) >= 95 && parseInt(this.encuesta.IdPersona.Cintura) <= 101)
            {
                this.encuesta.IdPersona.RiesgoCintura = "RIESGO MEDIO";
            }

            if(parseInt(this.encuesta.IdPersona.Cintura) > 101)
            {
                this.encuesta.IdPersona.RiesgoCintura = "ALTO RIESGO";
            }

            if(parseInt(this.encuesta.IdPersona.Cintura) == 0)
            {
                this.encuesta.IdPersona.RiesgoCintura = "NO REGISTRA MEDICIÓN";
            }

        }
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