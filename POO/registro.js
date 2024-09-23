"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    //Construcción del objeto
    function RegistroAutomotor(nombre) {
        this.vehiculos = [];
        this.nombre = nombre;
    }
    RegistroAutomotor.prototype.nombreRegistro = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.obtenerVehiculo = function (indice) {
        return this.vehiculos[indice];
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (indice, nuevoVehiculo) {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos[indice] = nuevoVehiculo;
        }
    };
    RegistroAutomotor.prototype.darDeBaja = function (indice) {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos.splice(indice, 1);
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
