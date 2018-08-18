import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, XHRBackend } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Centros } from '../models/centros';

@Injectable()
export class SivanupService{

    public url: string;

    constructor(public _http: Http)
    {
        this.url = 'http://localhost/Sivanup-backend/index.php/' 
    }

    getCentros()
    {
        return this._http.get(this.url+'centros').map(res=>res.json());
    }

    // getProducto(id)
    // {
    //     return this._http.get(this.url+'producto/'+id).map(res=>res.json());
    // }

    // addProducto(producto: Producto)
    // {
    //     let json = JSON.stringify(producto);
    //     let params = 'json=' + json;
    //     let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    //     return this._http.post(this.url+'productos', params, {headers: headers}).map(res=>res.json());
    // }

    // editProducto(id, producto: Producto)
    // {
    //     let json = JSON.stringify(producto);
    //     let params = 'json=' + json;
    //     let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    //     return this._http.post(this.url+'update-producto/'+id, params, {headers: headers}).map(res=>res.json());
    // }

    // deleteProducto(id)
    // {
    //     return this._http.get(this.url+'delete-producto/'+id).map(res=>res.json());
    // }

    // makeFileRequest(url: string, paramms: Array<string>, files: Array<File>)
    // {
    //     return new Promise((resolve, reject) => {
    //         var formData: any = new FormData();
    //         var xhr = new XMLHttpRequest();

    //         for(var i = 0; i < files.length; i++)
    //         {
    //             formData.append('uploads[]', files[i], files[i].name);
    //         }

    //         xhr.onreadystatechange = function()
    //         {
    //             if(xhr.readyState == 4)
    //             {
    //                 if(xhr.status == 200)
    //                 {
    //                     resolve(JSON.parse(xhr.response));
    //                 }
    //                 else
    //                 {
    //                     reject(xhr.response);
    //                 }
    //             }
    //         };

    //         xhr.open("POST", url, true);
    //         xhr.send(formData);
    //     });
    // }
}