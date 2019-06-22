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
import { Idiomes } from './idiomes.model';
import { DataService } from '../../../data.service';
import { Globals } from '../../../globals';
var IdiomesComponent = /** @class */ (function () {
    function IdiomesComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.idiomes = new Array();
        this.literal = new Idiomes();
        this.cultura = globals.cultura;
        data.cargarDades(new Idiomes()).then(function (res) {
            var items = JSON.parse(JSON.stringify(res));
            for (var i = 0; i < items.length; i++) {
                var obj = Object.assign({}, items[i]);
                _this.idiomes.push(obj);
            }
        });
    }
    IdiomesComponent.prototype.ngOnInit = function () {
    };
    IdiomesComponent = __decorate([
        Component({
            selector: 'app-idiomes',
            templateUrl: './idiomes.component.html',
            styleUrls: ['./idiomes.component.css'],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, Globals])
    ], IdiomesComponent);
    return IdiomesComponent;
}());
export { IdiomesComponent };
//# sourceMappingURL=idiomes.component.js.map