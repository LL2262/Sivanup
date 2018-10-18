import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import * as toastr from 'toastr';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-error',
  templateUrl: './consultar-afiliados.component.html',
  providers:[SivanupService]
})

export class ConsultarAfiliados{

  public titulo: string;

  public data;
  public enfermedadesXafiliados;
  public excel;

  constructor(private _sivanupService: SivanupService) 
  {
    this.titulo="Lista de Afiliados"
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "5000",
      }
  }

  ngOnInit() {

    this.traerAfiliadosEncuestas();
    this.traerEnfermedadesXfiliados();
  }

  traerAfiliadosEncuestas()
  {
      this._sivanupService.traerAfiliadosYEncuesta().subscribe(
          result => {
              this.data = result.data;
          },
          error => {
            console.log(<any>error);
          }
      );
  }

  traerEnfermedadesXfiliados()
  {
    this._sivanupService.traerEnfermedadesXafiliados().subscribe(
      result => {
          this.enfermedadesXafiliados = result.data;
      },
      error => {
          console.log(<any>error);
      }
  );
  }

  OnDeleteAfiliado(id)
  {
          this._sivanupService.deleteAfiliado(id).subscribe(
              response => {
                  if (response.code == 200) {
                      console.log(response);
                      toastr["success"]("Afiliado eliminado correctamente", "");
                      this.traerAfiliadosEncuestas();
                      this.traerEnfermedadesXfiliados();
                  } else {
                      console.log(response);
                  }
              },
              error => {
                  console.log(<any>error);
              }
          );
  }



  exportExcel(){
    //console.log("primmero");
    this._sivanupService.afiliadoExcel().subscribe(
        result => {
            this.excel = result.data;
 
            for(let i in this.excel){
                this.excel[i]['Enfermedades'] = "";
                for(let item of this.enfermedadesXafiliados){
                    if(this.excel[i]['IdPersona']==item['IdPersona']){
                        this.excel[i]['Enfermedades'] += item['NombreEnfermedad'] + ", ";
                    }
                }
            }

            var today = new Date();
            var dia = today.getDate();
            var mes = today.getMonth()+1;
            var ano = today.getFullYear();

            const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.excel);
            const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

            workbook.Sheets['data']['A1'] = {t:'s', v:'IDENTIFICADOR'}
            workbook.Sheets['data']['B1'] = {t:'s', v:'CENTRO'}
            workbook.Sheets['data']['C1'] = {t:'s', v:'APELLIDO Y NOMBRE'}
            workbook.Sheets['data']['D1'] = {t:'s', v:'EDAD'}
            workbook.Sheets['data']['E1'] = {t:'s', v:'SEXO'}
            workbook.Sheets['data']['F1'] = {t:'s', v:'NRO. AFILIADO'}
            workbook.Sheets['data']['G1'] = {t:'s', v:'PROGRAMA'}
            workbook.Sheets['data']['R1'] = {t:'s', v:'ESTADO NUTRICIONAL'}
            workbook.Sheets['data']['S1'] = {t:'s', v:'COMENTARIO'}
            workbook.Sheets['data']['T1'] = {t:'s', v:'ENCUESTADOR'}
            workbook.Sheets['data']['U1'] = {t:'s', v:'TERRITORIO'}
            workbook.Sheets['data']['V1'] = {t:'s', v:'DEPARTAMENTO'}
            workbook.Sheets['data']['W1'] = {t:'s', v:'CINTURA'}
            workbook.Sheets['data']['X1'] = {t:'s', v:'RIESGO CINTURA'}
            workbook.Sheets['data']['Y1'] = {t:'s', v:'PANTORRILLA'}
            workbook.Sheets['data']['Z1'] = {t:'s', v:'RIESGO PANTORRILLA'}
            workbook.Sheets['data']['AA1'] = {t:'s', v:'ENFERMEDADES'}


            XLSX.writeFile(workbook, 'Listado-de-afiliados_'+dia+'-'+mes+'-'+ano+'.xlsx', { bookType: 'xlsx', type: 'buffer', cellStyles: true  });

        },
        error => {
            console.log(<any>error);
        }
    );



    //const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.excel);
    //const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    // workbook.Sheets['data']['A1'] = {t:'s', v:'IDENTIFICADOR'};
    // workbook.Sheets['data']['B1'] = {t:'s', v:'NRO. DE AFILIADO'};
     
     
    //XLSX.writeFile(workbook, 'Listado-de-afiliados_'+dia+'-'+mes+'-'+ano+'.xls', { bookType: 'xls', type: 'buffer' });
 }

//  exportExcel(){
//     const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
//     const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//     XLSX.writeFile(workbook, 'Listado_de_afiliados_.xls', { bookType: 'xls', type: 'buffer' });
//  }


}
