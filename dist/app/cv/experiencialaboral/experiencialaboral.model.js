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
var ExperienciaLaboral = /** @class */ (function (_super) {
    __extends(ExperienciaLaboral, _super);
    function ExperienciaLaboral() {
        var _this = _super.call(this) || this;
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Sector", "Sector");
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Rol", "Rol");
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Descripció", "Descripció");
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologies");
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Clients", "Clients");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Sector", "Sector");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Rol", "Rol");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Descripció", "Descripción");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologías");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Clients", "Clientes");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Sector", "Sector");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Rol", "Rol");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Descripció", "Description");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologies");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Clients", "Clients");
        return _this;
    }
    return ExperienciaLaboral;
}(Base));
export { ExperienciaLaboral };
//# sourceMappingURL=experiencialaboral.model.js.map