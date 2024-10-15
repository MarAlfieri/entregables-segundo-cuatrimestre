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
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
// Clase Arquero derivada de Personaje
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.precision = 70;
        return _this;
    }
    //Metodo get
    Arquero.prototype.getPrecision = function () {
        return this.precision;
    };
    // Metodos set
    Arquero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " est\u00E1 disparando una flecha"));
    };
    Arquero.prototype.defender = function () {
        console.log("".concat(this.nombre, " est\u00E1 esquivando el ataque."));
    };
    Arquero.prototype.nuevoAtaque = function () {
        console.log("".concat(this.nombre, " ha aprendido un nuevo ataque con flechas."));
    };
    Arquero.prototype.dispararFlecha = function () {
        console.log("".concat(this.nombre, " est\u00E1 disparando una flecha con precisi\u00F3n ").concat(this.precision, "."));
    };
    Arquero.prototype.setPresicion = function (precision) {
        this.precision = precision;
    };
    return Arquero;
}(personaje_1.Personaje));
exports.Arquero = Arquero;
