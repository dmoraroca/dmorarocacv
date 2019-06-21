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
import { Coneixements } from './coneixements.model';
import { DataService } from '../../data.service';
import { Globals } from '../../globals';
import * as Enumerable from "linq-es2015";
var ConeixementsComponent = /** @class */ (function () {
    function ConeixementsComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.literal = new Coneixements();
        this.coneixements = new Array();
        this.cultura = globals.cultura;
        data.cargarDades(new Coneixements()).then(function (res) {
            var items = Enumerable.asEnumerable(JSON.parse(JSON.stringify(res))).ToArray();
            for (var i = 0; i < items.length; i++) {
                var obj = Object.assign({}, items[i]);
                var obj = new Coneixements();
                obj.cultura = items[i].cultura;
                obj.categoria = items[i].categoria;
                obj.descripcio = items[i].descripcio;
                obj.experiencia = items[i].experiencia;
                obj.temps = items[i].temps;
                obj.nivell = items[i].nivell;
                obj.versio = items[i].versio;
                obj.rowSpan = items[i].rowSpan;
                obj.td = items[i].td;
                obj.ordre = items[i].ordre;
                if (obj.experiencia != 1) {
                    switch (globals.cultura) {
                        case "ca-ES":
                            if (obj.temps == "any")
                                obj.temps += "s";
                            else
                                obj.temps += "os";
                            break;
                        case "es-ES":
                            if (obj.temps == "año")
                                obj.temps += "s";
                            else
                                obj.temps += "es";
                            break;
                        case "en-GB":
                            obj.temps += "s";
                            break;
                    }
                }
                _this.coneixements.push(obj);
            }
            globals.load = true;
        });
    }
    ConeixementsComponent.prototype.ngOnInit = function () {
    };
    ConeixementsComponent = __decorate([
        Component({
            selector: 'app-coneixements',
            templateUrl: './coneixements.component.html',
            styleUrls: ['./coneixements.component.css'],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, Globals])
    ], ConeixementsComponent);
    return ConeixementsComponent;
}());
export { ConeixementsComponent };
//# sourceMappingURL=coneixements.component.js.map