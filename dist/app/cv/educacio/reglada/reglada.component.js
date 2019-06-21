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
import { Reglada } from "./reglada.model";
import { DataService } from "../../../data.service";
import { Globals } from '../../../globals';
var RegladaComponent = /** @class */ (function () {
    function RegladaComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.reglada = new Array();
        this.console = console;
        data.cargarDades(new Reglada()).then(function (res) {
            var items = JSON.parse(JSON.stringify(res));
            for (var i = 0; i < items.length; i++) {
                var obj = Object.assign({}, items[i]);
                _this.reglada.push(obj);
            }
        });
    }
    RegladaComponent.prototype.ngOnInit = function () {
    };
    RegladaComponent = __decorate([
        Component({
            selector: 'app-reglada',
            templateUrl: './reglada.component.html',
            styleUrls: ['./reglada.component.css'],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, Globals])
    ], RegladaComponent);
    return RegladaComponent;
}());
export { RegladaComponent };
//# sourceMappingURL=reglada.component.js.map