var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Base } from '../../base.model';
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        var _this = _super.call(this) || this;
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Sector", "Sector");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Rol", "Rol");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Descripció", "Descripció");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Tecnologies", "Tecnologies");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clients");
        _this.AddLiteral("[es-ES]-" + "Literal.clients.Sector", "Sector");
        _this.AddLiteral("[es-ES]-" + "Literal.clients.Rol", "Rol");
        _this.AddLiteral("[es-ES]-" + "Literal.clients.Descripció", "Descripción");
        _this.AddLiteral("[es-ES]-" + "Literal.clients.Tecnologies", "Tecnologías");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clientes");
        _this.AddLiteral("[en-GB]-" + "Literal.clients.Sector", "Sector");
        _this.AddLiteral("[en-GB]-" + "Literal.clients.Rol", "Rol");
        _this.AddLiteral("[en-GB]-" + "Literal.clients.Descripció", "Description");
        _this.AddLiteral("[en-GB]-" + "Literal.clients.Tecnologies", "Tecnologies");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clients");
        return _this;
    }
    return Client;
}(Base));
export { Client };
//# sourceMappingURL=client.model.js.map