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
import { NoReglada } from './noreglada.model';
import { DataService } from '../../../data.service';
import { Globals } from '../../../globals';
import * as Enumerable from "linq-es2015";
var NoRegladaComponent = /** @class */ (function () {
    function NoRegladaComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.noreglada = new Array();
        data.cargarDades(new NoReglada()).then(function (res) {
            var items = Enumerable.asEnumerable(JSON.parse(JSON.stringify(res))).OrderByDescending(function (x) { return x["Any"]; }).ToArray();
            for (var i = 0; i < items.length; i++) {
                var obj = Object.assign({}, items[i]);
                switch (globals.cultura) {
                    case "ca-ES":
                        obj.LiteralHores = "hora";
                        if (obj.Hores > 1)
                            obj.LiteralHores = "hores";
                        break;
                    case "es-ES":
                        obj.LiteralHores = "hora";
                        if (obj.Hores > 1)
                            obj.LiteralHores = "horas";
                        break;
                    case "en-GB":
                        obj.LiteralHores = "hour";
                        if (obj.Hores > 1)
                            obj.LiteralHores = "hours";
                        break;
                }
                _this.noreglada.push(obj);
            }
        });
    }
    NoRegladaComponent.prototype.ngOnInit = function () {
    };
    NoRegladaComponent = __decorate([
        Component({
            selector: 'app-noreglada',
            templateUrl: './noreglada.component.html',
            styleUrls: ['./noreglada.component.css'],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, Globals])
    ], NoRegladaComponent);
    return NoRegladaComponent;
}());
export { NoRegladaComponent };
//# sourceMappingURL=noreglada.component.js.map