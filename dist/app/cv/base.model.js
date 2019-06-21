import { Dictionary } from './utils/dictionary';
var Base = /** @class */ (function () {
    function Base() {
        this.rss = null;
        this.rss = new Dictionary();
    }
    Base.prototype.AddLiteral = function (key, value) {
        this.rss.Add(key, value);
    };
    Base.prototype.GetLiteral = function (cultura, key) {
        var cadena = "[" + cultura + "]-" + "Literal." + key;
        return this.rss.Item(cadena);
    };
    return Base;
}());
export { Base };
//# sourceMappingURL=base.model.js.map