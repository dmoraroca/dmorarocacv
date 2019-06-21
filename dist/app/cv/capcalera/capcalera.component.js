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
import { DataService } from "../../data.service";
import { Capcalera } from "./capcalera.model";
import { Globals } from '../../globals';
var CapcaleraComponent = /** @class */ (function () {
    function CapcaleraComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.capcalera = new Capcalera();
        this.literal = new Capcalera();
        this.cultura = globals.cultura;
        data.cargarDades(new Capcalera()).then(function (res) {
            _this.capcalera = Object.assign({}, res.data, _this.capcalera);
        });
    }
    CapcaleraComponent.prototype.ngOnInit = function () {
    };
    CapcaleraComponent = __decorate([
        Component({
            selector: 'app-capcalera',
            templateUrl: './capcalera.component.html',
            styleUrls: ['./capcalera.component.css'],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, Globals])
    ], CapcaleraComponent);
    return CapcaleraComponent;
}());
export { CapcaleraComponent };
//# sourceMappingURL=capcalera.component.js.map