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
exports.Moto = void 0;
var vehiculo_1 = require("./vehiculo");
//Clase de cración de autos
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    //Construcción del objeto
    function Moto(patente, marca, modelo, año, tieneBaulera) {
        var _this = _super.call(this, patente, marca, modelo, año) || this;
        _this.tieneBaulera = false;
        if (tieneBaulera != undefined) {
            _this.tieneBaulera = tieneBaulera;
        }
        return _this;
    }
    // Funciones de información
    Moto.prototype.getTieneBaulera = function () {
        return this.tieneBaulera;
    };
    //Funciones de modificaciones
    Moto.prototype.setTieneBaulera = function (tieneBaulera) {
        this.tieneBaulera = tieneBaulera;
    };
    return Moto;
}(vehiculo_1.Vehiculo));
exports.Moto = Moto;
