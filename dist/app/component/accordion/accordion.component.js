var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var NgbdAccordionBasic = /** @class */ (function () {
    function NgbdAccordionBasic() {
    }
    NgbdAccordionBasic.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ;
    NgbdAccordionBasic = __decorate([
        Component({
            selector: 'ngbd-accordion-basic',
            templateUrl: 'accordion.component.html'
        })
    ], NgbdAccordionBasic);
    return NgbdAccordionBasic;
}());
export { NgbdAccordionBasic };
//# sourceMappingURL=accordion.component.js.map