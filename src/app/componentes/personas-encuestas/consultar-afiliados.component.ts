import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import * as toastr from 'toastr';
import * as XLSX from 'xlsx';
const { read, write, utils } = XLSX;

@Component({
  selector: 'app-error',
  templateUrl: './consultar-afiliados.component.html',
  providers:[SivanupService]
})

export class ConsultarAfiliados{

  public titulo: string;

  public data;
  public enfermedadesXafiliados;

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

  ordenarcClave(){
    
    let objeto = { 
        gratificacionZona:7500,
        leyNoDocente:"28000", 
        sueldoBase:50000, //Primero
        sueldoGeneral:0, //Segundo
        sueldoPIE:0,   //Tercero
        sueldoSEP:0  //Cuarto
      }
      console.log(objeto)
      
      objeto = {
        sueldoBase:objeto.sueldoBase, //Primero
        sueldoGeneral:objeto.sueldoGeneral, //Segundo
        sueldoPIE:objeto.sueldoPIE,   //Tercero
        sueldoSEP:objeto.sueldoSEP,  //Cuarto
        ...objeto
      }
      
      console.log(objeto)
  }

  exportExcel(){
      
    for(let i in this.data){
        this.data[i]['Enfermedades'] = "";
        for(let item of this.enfermedadesXafiliados){
            if(this.data[i]['IdPersona']==item['IdPersona']){
                this.data[i]['Enfermedades'] += item['NombreEnfermedad'] + ", ";
            }
        }
    }
    var today = new Date();
    var dia = today.getDate();
    var mes = today.getMonth()+1;
    var ano = today.getFullYear();

    this.ordenarcClave();


    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    workbook.Sheets['data']['A1'] = {t:'s', v:'IDENTIFICADOR'};
    workbook.Sheets['data']['B1'] = {t:'s', v:'NRO. DE AFILIADO'};
     
     
    XLSX.writeFile(workbook, 'Listado-de-afiliados_'+dia+'-'+mes+'-'+ano+'.xls', { bookType: 'xls', type: 'buffer' });
 }

//  exportExcel(){
//     const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
//     const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//     XLSX.writeFile(workbook, 'Listado_de_afiliados_.xls', { bookType: 'xls', type: 'buffer' });
//  }

}
