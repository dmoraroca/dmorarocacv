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
import { Router } from '@angular/router';
var CVComponent = /** @class */ (function () {
    function CVComponent(router) {
        this.router = router;
        //@ViewChild('view') vista:ViewsComponent;
        this.clase_activa_educacio = true;
        this.clase_activa_experiencia = true;
        this.clase_activa_taula_coneixements = true;
        if (this.router.url === '/cv') {
            this.router.navigate(['/']);
        }
    }
    CVComponent.prototype.Panel_ClickEvent = function (objecte) {
        switch (objecte) {
            case "educacio":
                this.clase_activa_educacio = !this.clase_activa_educacio;
                break;
            case "experiencia":
                this.clase_activa_experiencia = !this.clase_activa_experiencia;
                break;
            case "taula_coneixements":
                this.clase_activa_taula_coneixements = !this.clase_activa_taula_coneixements;
                break;
        }
    };
    CVComponent.prototype.ngOnInit = function () {
    };
    CVComponent.prototype.ngAfterViewInit = function () { };
    CVComponent = __decorate([
        Component({
            selector: 'app-cv',
            templateUrl: './cv.component.html',
            styleUrls: ['./cv.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], CVComponent);
    return CVComponent;
}());
export { CVComponent };
//# sourceMappingURL=cv.component.js.map