import { Component } from '@angular/core';
import { SivanupService } from '../../servicios/sivanup.service';
import { Centros } from '../../models/centros';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  providers: [SivanupService]
})
export class CentrosComponent{

public titulo: string;
public centros: Centros[];

  constructor(private _route: ActivatedRoute, private _router: Router, private _sivanupService: SivanupService)
  {
    this.titulo="Lista de Centros"
  }

  ngOnInit() 
  {
    this.getCentros();
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

    // onDeleteProducto(id)
    // {
    //         this._productoService.deleteProducto(id).subscribe(
    //             response => {
    //                 if (response.code == 200) {
    //                     this.getProductos();
    //                 } else {
    //                     console.log(response);
    //                 }
    //             },
    //             error => {
    //                 console.log(<any>error);
    //             }
    //         );
    // }

}
