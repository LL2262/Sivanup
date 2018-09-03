import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, XHRBackend } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Centros } from '../models/centros';
import { Usuarios } from '../models/usuarios';
import { Dptos } from '../models/dptos';
import { Encuestadores } from '../models/encuestadores';
import { Enfermedades } from '../models/enfermedades';
import { Programas } from '../models/programas';

@Injectable()
export class SivanupService{

    public url: string;

    constructor(public _http: Http)
    {
        this.url = 'http://localhost/Sivanup-backend/index.php/' 
    }

    addUsuario(usuario: Usuarios)
    {
        let json = JSON.stringify(usuario);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'usuario', params, {headers: headers}).map(res=>res.json());
    }

    getUsuario(email)
    {
        return this._http.get(this.url+'usuarioLog/'+email).map(res=>res.json());
    }

    getCentros()
    {
        return this._http.get(this.url+'centros').map(res=>res.json());
    }

    getCentro(id)
    {
        return this._http.get(this.url+'centro/'+id).map(res=>res.json());
    }

    addCentro(centro: Centros)
    {
        let json = JSON.stringify(centro);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'centro', params, {headers: headers}).map(res=>res.json());
    }

    editCentro(id, centro: Centros)
    {
        let json = JSON.stringify(centro);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'update-centro/'+id, params, {headers: headers}).map(res=>res.json());
    }

    deleteCentro(id)
    {
        return this._http.get(this.url+'delete-centro/'+id).map(res=>res.json());
    }

    getDptos()
    {
        return this._http.get(this.url+'departamentos').map(res=>res.json());
    }

    getDpto(id)
    {
        return this._http.get(this.url+'departamento/'+id).map(res=>res.json());
    }

    addDpto(dpto: Dptos)
    {
        let json = JSON.stringify(dpto);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'departamento', params, {headers: headers}).map(res=>res.json());
    }

    editDpto(id, dpto: Dptos)
    {
        let json = JSON.stringify(dpto);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'update-dpto/'+id, params, {headers: headers}).map(res=>res.json());
    }

    deleteDpto(id)
    {
        return this._http.get(this.url+'delete-dpto/'+id).map(res=>res.json());
    }

    getEncuestadores()
    {
        return this._http.get(this.url+'encuestadores').map(res=>res.json());
    }

    getEncuestador(id)
    {
        return this._http.get(this.url+'encuestador/'+id).map(res=>res.json());
    }

    addEncuestador(encuestador: Encuestadores)
    {
        let json = JSON.stringify(encuestador);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'encuestador', params, {headers: headers}).map(res=>res.json());
    }

    editEncuestador(id, encuestador: Encuestadores)
    {
        let json = JSON.stringify(encuestador);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'update-encuestador/'+id, params, {headers: headers}).map(res=>res.json());
    }

    deleteEncuestador(id)
    {
        return this._http.get(this.url+'delete-encuestador/'+id).map(res=>res.json());
    }

    getEnfermedades()
    {
        return this._http.get(this.url+'enfermedades').map(res=>res.json());
    }

    getEnfermedad(id)
    {
        return this._http.get(this.url+'enfermedad/'+id).map(res=>res.json());
    }

    addEnfermedad(enfermedad: Enfermedades)
    {
        let json = JSON.stringify(enfermedad);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'enfermedad', params, {headers: headers}).map(res=>res.json());
    }

    editEnfermedad(id, enfermedad: Enfermedades)
    {
        let json = JSON.stringify(enfermedad);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'update-enfermedad/'+id, params, {headers: headers}).map(res=>res.json());
    }

    deleteEnfermedad(id)
    {
        return this._http.get(this.url+'delete-enfermedad/'+id).map(res=>res.json());
    }

    getProgramas()
    {
        return this._http.get(this.url+'programas').map(res=>res.json());
    }

    getPrograma(id)
    {
        return this._http.get(this.url+'programa/'+id).map(res=>res.json());
    }

    addPrograma(programa: Programas)
    {
        let json = JSON.stringify(programa);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'programa', params, {headers: headers}).map(res=>res.json());
    }

    editPrograma(id, programa: Programas)
    {
        let json = JSON.stringify(programa);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'update-programa/'+id, params, {headers: headers}).map(res=>res.json());
    }

    deletePrograma(id)
    {
        return this._http.get(this.url+'delete-programa/'+id).map(res=>res.json());
    }

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