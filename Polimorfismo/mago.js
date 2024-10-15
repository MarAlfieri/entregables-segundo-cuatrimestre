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
exports.Mago = void 0;
var personaje_1 = require("./personaje");
// Clase Mago
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.mana = 100;
        return _this;
    }
    //Metodo get
    Mago.prototype.getMana = function () {
        return this.mana;
    };
    // Metodos set
    Mago.prototype.atacar = function () {
        console.log("".concat(this.nombre, " est\u00E1 lanzando un hechizo."));
    };
    Mago.prototype.defender = function () {
        console.log("".concat(this.nombre, " est\u00E1 defendiendo con un escudo m\u00E1gico."));
    };
    Mago.prototype.nuevoAtaque = function () {
        console.log("".concat(this.nombre, " ha aprendido un nuevo ataque m\u00E1gico."));
    };
    Mago.prototype.lanzarHechizoDeFuego = function () {
        console.log("".concat(this.nombre, " est\u00E1 lanzando un hechizo de fuego."));
    };
    Mago.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
