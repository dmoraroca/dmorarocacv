var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { DataService } from '../../../data.service';
import { Globals } from '../../../globals';
import { Client } from './client.model';
var Tag = /** @class */ (function () {
    function Tag(text) {
        this.text = "";
        this.text = text;
    }
    return Tag;
}());
export { Tag };
var ClientComponent = /** @class */ (function () {
    function ClientComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.clients = [];
        this.clase_clients = new Array();
        this.literal = new Client();
        this.Console = console;
        var that = this;
        this.cultura = globals.cultura;
        data.cargarDades(new Client()).then(function (res) {
            _this.clients = new Array();
            var items = [];
            res.forEach(function (item) {
                var obj = new Client();
                obj.Id = item["Id"];
                obj.Cultura = item["Cultura"];
                obj.Empresa = item["Empresa"];
                obj.EmpresaId = item["EmpresaId"];
                obj.EsClient = item["EsClient"];
                obj.Empresa = item["Client"];
                obj.Sector = item["Sector"];
                obj.Rol = item["Rol"];
                obj.Descripcio = item["Descripcio"];
                obj.Tecnologies = item["Tecnologies"];
                obj.FromClient = item["FromClient"];
                obj.NomClient = item["Client"];
                if (item["EmpresaId"] == _this.empresaid) {
                    items.push(obj);
                }
            });
            items.forEach(function (item) {
                var obj = Object.assign(item);
                obj["Tags"] = [];
                obj.Tecnologies.split(',').forEach(function (item) {
                    obj["Tags"].push({ text: item });
                });
                that.clients.push(obj);
            });
        });
    }
    ClientComponent.prototype.Panel_ClickEvent = function (pos) {
        this.clase_clients[pos] = !this.clase_clients[pos];
    };
    ClientComponent.prototype.close_click = function (ev) {
    };
    ClientComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ClientComponent.prototype, "empresa", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ClientComponent.prototype, "empresaid", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ClientComponent.prototype, "fromClient", void 0);
    ClientComponent = __decorate([
        Component({
            selector: 'app-client',
            templateUrl: './client.component.html',
            styleUrls: ['./client.component.scss'],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, Globals])
    ], ClientComponent);
    return ClientComponent;
}());
export { ClientComponent };
//# sourceMappingURL=client.component.js.map