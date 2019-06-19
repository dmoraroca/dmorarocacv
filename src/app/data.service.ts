
import { Injectable, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Globals } from './globals';
import { Response } from './response';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';

@Injectable()
export class DataService {
    public _this = this;
    private _Resposta: Response;

  
    constructor(public globals: Globals, public http: HttpClient) {
    }

    
    private _prepararUrl(obj: any): string {       
        // preparo la url.

        var url: string = "{host}/data/{cultura}/{coleccio}/{esproduccio}";
        var esProduccio: boolean = environment.production;
        var clase: any = obj;
        var coleccio: string = clase.constructor.name.toLowerCase();
        //var host = (environment.production)?"http://dmoraroca.somee.com":"http://localhost:8080";
        var host = "http://127.0.0.1:8080"; // DEBUG

        //if (environment.production) {
        //    host = "http://dmoraroca.somee.com";
        //}
        
        
        // Preparo l'url
        //url = url.replace("{host}", host);
        url = url.replace("{host}", host);
        url = url.replace("{cultura}", this.globals.cultura);
        //url = url.replace("{esproduccio}", (!esProduccio)? "true": "false");
        url = url.replace("{esproduccio}", "true");        
        url = url.replace("{coleccio}", coleccio);
        
        return url;
    }
    
    cargarDades(obj: any): Promise<any> {      
        return new Promise((resolve, reject) => {
            var headers = new HttpHeaders();
            
            headers.append('Content-Type', 'application/json');
            

            let res = this.http.get(this._prepararUrl(obj), {headers: headers})
            .toPromise()
            //.then(res => res.json())
            .then(function (Response) {                
                if (!Response["ok"]) 
                {
                    if (Response["data"].errorLabels != null) 
                    {
                        Response["data"].errorLabels.forEach(element => 
                        {
                            alert(Response["data"].name + ": " + element);    
                        });
                        
                    }
                    else 
                    {
                        alert(Response["data"]);
                    }
                    return;
                }
                else resolve(Response["data"]);     
            })
            .catch(
                ex => { 
                    console.log(ex);
                }
            );       
                
            return res;
        });        
    }

    private _salvarACSV(obj: any, taula: boolean): any {
        // recullo la informació.

        // // this._Papa.unparse(this._prepararUrl(obj, taula), {
        // //     worker: false,
        // //     download: true,            
        // //     complete: function (result) {

        // //         console.log(result);
        // //     }
        // // });

    } 

    public inserir<T>(entity: T)
    {
    }

    public canviar<T>(entitat: T): boolean
    {
        return false;
    }

    public esborrar<T>(id: number): boolean
    {
        return false;
    }
    
    public llistar<T>(): Observable<T[]>
    {
        //  var data = this._cargarFitxer<T>();

              
        return null;
    }
}
