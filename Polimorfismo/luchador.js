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
exports.Luchador = void 0;
var personaje_1 = require("./personaje");
// Clase derivada Luchador
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.fuerza = 50;
        return _this;
    }
    //Metodo get
    Luchador.prototype.getFuerza = function () {
        return this.fuerza;
    };
    // Metodos set
    Luchador.prototype.atacar = function () {
        console.log("".concat(this.nombre, " est\u00E1 atacando con fuerza ").concat(this.fuerza, "."));
    };
    Luchador.prototype.defender = function () {
        console.log("".concat(this.nombre, " est\u00E1 defendiendo con su escudo de hierro."));
    };
    Luchador.prototype.nuevoAtaque = function () {
        console.log("".concat(this.nombre, " ha aprendido un nuevo ataque f\u00EDsico."));
    };
    Luchador.prototype.lanzarPuñoHierro = function () {
        console.log("".concat(this.nombre, " est\u00E1 lanzando un Pu\u00F1o de hierro."));
    };
    Luchador.prototype.setFuerza = function (fuerza) {
        this.fuerza = fuerza;
    };
    return Luchador;
}(personaje_1.Personaje));
exports.Luchador = Luchador;
