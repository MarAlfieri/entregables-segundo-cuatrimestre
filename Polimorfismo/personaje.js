"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
// Clase base Personaje
var Personaje = /** @class */ (function () {
    function Personaje(nombre) {
        this.nivel = 1;
        this.puntosDeVida = 100;
        this.nombre = nombre;
    }
    //Metodos get de propiedades privadas
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.getPuntosDeVida = function () {
        return this.puntosDeVida;
    };
    //Metodos set para modificar propiedades privadas
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personaje.prototype.setPuntosDeVida = function (puntosDeVida) {
        this.puntosDeVida = puntosDeVida;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
