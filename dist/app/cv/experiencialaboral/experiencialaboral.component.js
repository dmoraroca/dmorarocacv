var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Globals } from '../../globals';
import { ExperienciaLaboral } from './experiencialaboral.model';
import * as Enumerable from "linq-es2015";
var ExperienciaLaboralComponent = /** @class */ (function () {
    function ExperienciaLaboralComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.experiencialaboral = new Array();
        this.clase_experiencialaboral_titol = new Array();
        this.clase_experiencialaboral_panell = new Array();
        this.tags = [];
        this.literal = new ExperienciaLaboral();
        this.itemsAsObjects = [{ value: 0, display: 'Angular' }, { value: 1, display: 'React' }];
        var that = this;
        this.cultura = globals.cultura;
        data.cargarDades(new ExperienciaLaboral()).then(function (res) {
            for (var i = 0; i < res.length; i++) {
                var obj = res[i];
                obj["newMesFinal"] = new Date(obj["MesFinal"]);
            }
            var items = Enumerable.asEnumerable(JSON.parse(JSON.stringify(res))).OrderByDescending(function (x) { return x["newMesFinal"]; }).ToArray();
            var _loop_1 = function () {
                var obj = items[i];
                obj.EsClient = obj.EsClient;
                //obj.MesInicial = new Date(obj.MesInicial);
                //obj.MesFinal = new Date(obj.MesFinal);
                if (obj.Tecnologies) {
                    obj.Tags = [];
                    obj.Tecnologies.split(',').forEach(function (item) {
                        obj.Tags.push({ text: item });
                    });
                }
                _this.experiencialaboral.push(obj);
                console.log(_this.experiencialaboral);
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1();
            }
            _this.experiencialaboral.forEach(function (obj, index) {
                that.clase_experiencialaboral_titol.push("noactiu_experiencialaboral_" + index);
                that.clase_experiencialaboral_panell.push("obrir_experiencialaboral_" + index);
            });
        });
    }
    ExperienciaLaboralComponent.prototype.Panel_ClickEvent_Titol = function (index) {
        if (this.clase_experiencialaboral_titol[index].indexOf("noactiu_experiencialaboral_" + index) >= 0) {
            this.clase_experiencialaboral_titol[index] = "actiu_experiencialaboral_" + index;
            this.clase_experiencialaboral_panell[index] = "tancar_experiencialaboral_" + index;
        }
        else {
            this.clase_experiencialaboral_titol[index] = "noactiu_experiencialaboral_" + index;
            this.clase_experiencialaboral_panell[index] = "obrir_experiencialaboral_" + index;
        }
    };
    ExperienciaLaboralComponent.prototype.ngOnInit = function () {
    };
    ExperienciaLaboralComponent = __decorate([
        Component({
            selector: 'app-experiencialaboral',
            templateUrl: './experiencialaboral.component.html',
            styleUrls: ['./experiencialaboral.component.scss'],
            providers: [DataService],
        }),
        __metadata("design:paramtypes", [DataService, Globals])
    ], ExperienciaLaboralComponent);
    return ExperienciaLaboralComponent;
}());
export { ExperienciaLaboralComponent };
//# sourceMappingURL=experiencialaboral.component.js.map