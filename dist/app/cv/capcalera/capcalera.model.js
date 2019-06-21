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
import { Base } from '../base.model';
var Capcalera = /** @class */ (function (_super) {
    __extends(Capcalera, _super);
    function Capcalera() {
        var _this = _super.call(this) || this;
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.NIF", "NIF");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Mòvil", "Mòvil");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Direcció", "Direcció");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.E-mail", "E-mail");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.UsuariSkype", "Usuari Skype");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.DataNaixament", "Data Naixament");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Nacionalitat", "Nacionalitat");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.NIF", "NIF");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.Mòvil", "Móbil");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.Direcció", "Dirección");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.E-mail", "E-mail");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.UsuariSkype", "Usuario Skype");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.DataNaixament", "Fecha Nacimiento");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.Nacionalitat", "Nacionalidad");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.NIF", "NIF");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.Mòvil", "Mobile");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.Direcció", "Address");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.E-mail", "E-mail");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.UsuariSkype", " Skype's User");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.DataNaixament", "Birthday");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.Nacionalitat", "Nationality");
        return _this;
    }
    return Capcalera;
}(Base));
export { Capcalera };
//# sourceMappingURL=capcalera.model.js.map