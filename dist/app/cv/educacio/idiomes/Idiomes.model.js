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
var Idiomes = /** @class */ (function (_super) {
    __extends(Idiomes, _super);
    function Idiomes() {
        var _this = _super.call(this) || this;
        _this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Idioma", "Idioma");
        _this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Escriptura", "Escriptura");
        _this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Lectura", "Lectura");
        _this.AddLiteral("[es-ES]-" + "Literal.idiomes.Idioma", "Idioma");
        _this.AddLiteral("[es-ES]-" + "Literal.idiomes.Escriptura", "Escritura");
        _this.AddLiteral("[es-ES]-" + "Literal.idiomes.Lectura", "Lectura");
        _this.AddLiteral("[en-GB]-" + "Literal.idiomes.Idioma", "Language");
        _this.AddLiteral("[en-GB]-" + "Literal.idiomes.Escriptura", "Write");
        _this.AddLiteral("[en-GB]-" + "Literal.idiomes.Lectura", "Read");
        return _this;
    }
    return Idiomes;
}(Base));
export { Idiomes };
//# sourceMappingURL=idiomes.model.js.map