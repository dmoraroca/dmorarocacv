var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Globals } from './globals';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(globals, http) {
        this.globals = globals;
        this.http = http;
        this._this = this;
    }
    DataService.prototype._prepararUrl = function (obj) {
        // preparo la url.
        var url = "{host}/data/{cultura}/{coleccio}/{esproduccio}";
        var esProduccio = environment.production;
        var clase = obj;
        var coleccio = clase.constructor.name.toLowerCase();
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
    };
    DataService.prototype.cargarDades = function (obj) {
        var _this_1 = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            headers.append('Content-Type', 'application/json');
            var res = _this_1.http.get(_this_1._prepararUrl(obj), { headers: headers })
                .toPromise()
                //.then(res => res.json())
                .then(function (Response) {
                if (!Response["ok"]) {
                    if (Response["data"].errorLabels != null) {
                        Response["data"].errorLabels.forEach(function (element) {
                            alert(Response["data"].name + ": " + element);
                        });
                    }
                    else {
                        alert(Response["data"]);
                    }
                    return;
                }
                else
                    resolve(Response["data"]);
            })
                .catch(function (ex) {
                console.log(ex);
            });
            return res;
        });
    };
    DataService.prototype._salvarACSV = function (obj, taula) {
        // recullo la informació.
        // // this._Papa.unparse(this._prepararUrl(obj, taula), {
        // //     worker: false,
        // //     download: true,            
        // //     complete: function (result) {
        // //         console.log(result);
        // //     }
        // // });
    };
    DataService.prototype.inserir = function (entity) {
    };
    DataService.prototype.canviar = function (entitat) {
        return false;
    };
    DataService.prototype.esborrar = function (id) {
        return false;
    };
    DataService.prototype.llistar = function () {
        //  var data = this._cargarFitxer<T>();
        return null;
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Globals, HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map