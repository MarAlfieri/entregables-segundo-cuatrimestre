"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
//Clase de cración de vehiculos de diferentes tipos
var Vehiculo = /** @class */ (function () {
    //Construcción del objeto
    function Vehiculo(tipo, marca, modelo, año) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    // Funciones de información
    Vehiculo.prototype.getTipo = function () {
        return this.tipo;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAño = function () {
        return this.año;
    };
    //Funciones de modificaciones
    Vehiculo.prototype.setTipo = function (nuevoTipo) {
        this.tipo = nuevoTipo;
    };
    Vehiculo.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Vehiculo.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Vehiculo.prototype.setAño = function (nuevoAño) {
        this.año = nuevoAño;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
