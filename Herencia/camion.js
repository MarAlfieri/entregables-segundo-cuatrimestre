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
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
//Clase de cración de autos
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    //Construcción del objeto
    function Camion(patente, marca, modelo, año, apto) {
        var _this = _super.call(this, patente, marca, modelo, año) || this;
        _this.apto = true;
        if (apto != undefined) {
            _this.apto = apto;
        }
        return _this;
    }
    // Funciones de información
    Camion.prototype.getApto = function () {
        return this.apto;
    };
    //Funciones de modificaciones
    Camion.prototype.setApto = function (apto) {
        this.apto = apto;
    };
    return Camion;
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
