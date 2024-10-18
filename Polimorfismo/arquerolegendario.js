"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArqueroLegendario = void 0;
var arquero_1 = require("./arquero");
var ArqueroLegendario = /** @class */ (function (_super) {
    __extends(ArqueroLegendario, _super);
    function ArqueroLegendario(nombre) {
        return _super.call(this, nombre) || this;
    }
    //Metodo get
    ArqueroLegendario.prototype.getTipoFlecha = function () {
        return this.tipoFlecha;
    };
    // Metodos set
    ArqueroLegendario.prototype.disparaFlechaEspecial = function () {
        console.log("".concat(this.nombre, " est\u00E1 disparando una flecha ").concat(this.tipoFlecha));
    };
    ArqueroLegendario.prototype.setTipoFlecha = function (tipoFlecha) {
        this.tipoFlecha = tipoFlecha;
    };
    return ArqueroLegendario;
}(arquero_1.Arquero));
exports.ArqueroLegendario = ArqueroLegendario;
