var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService, modalService2) {
        this.modalService = modalService;
        this.modalService2 = modalService2;
    }
    NgbdModalBasic.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasic.prototype.open = function (content) {
        this.modalService2.open(content, { windowClass: 'dark-modal' });
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = __decorate([
        Component({
            selector: 'ngbd-modal',
            templateUrl: './modal.component.html',
            encapsulation: ViewEncapsulation.None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #009efb;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;   \n    }\n  "]
        }),
        __metadata("design:paramtypes", [NgbModal, NgbModal])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());
export { NgbdModalBasic };
//# sourceMappingURL=modal.component.js.map