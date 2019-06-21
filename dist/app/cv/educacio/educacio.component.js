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
var EducacioComponent = /** @class */ (function () {
    function EducacioComponent() {
        this.clase_noreglada = true;
        this.clase_reglada = true;
        this.clase_idioma = true;
    }
    EducacioComponent.prototype.Panel_ClickEvent = function (objecte) {
        switch (objecte) {
            case "reglada":
                this.clase_reglada = !this.clase_reglada;
                break;
            case "noreglada":
                this.clase_noreglada = !this.clase_noreglada;
                break;
            case "idiomes":
                this.clase_idioma = !this.clase_idioma;
                break;
        }
    };
    EducacioComponent.prototype.ngOnInit = function () {
    };
    EducacioComponent = __decorate([
        Component({
            selector: 'app-educacio',
            templateUrl: './educacio.component.html',
            styleUrls: ['./educacio.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], EducacioComponent);
    return EducacioComponent;
}());
export { EducacioComponent };
//# sourceMappingURL=educacio.component.js.map