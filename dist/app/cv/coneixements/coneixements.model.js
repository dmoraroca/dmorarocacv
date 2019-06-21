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
var Coneixements = /** @class */ (function (_super) {
    __extends(Coneixements, _super);
    function Coneixements() {
        var _this = _super.call(this) || this;
        _this.rowSpan = 0;
        _this.td = "odd";
        _this.ordre = 0;
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Categoria", "Categoria");
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Llenguatge", "Llenguatge");
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Experiencia", "Experiència");
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Nivell", "Nivell");
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Versio", "Versió");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Categoria", "Categoría");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Llenguatge", "Llenguaje");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Experiencia", "Experiencia");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Nivell", "Nivel");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Versio", "Versión");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Categoria", "Category");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Llenguatge", "Language");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Experiencia", "Experience");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Nivell", "Level");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Versio", "Version");
        return _this;
    }
    return Coneixements;
}(Base));
export { Coneixements };
//# sourceMappingURL=coneixements.model.js.map