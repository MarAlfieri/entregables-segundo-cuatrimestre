"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    //Construcción del objeto
    function RegistroAutomotor(nombre) {
        this.vehiculos = []; //Arreglo de Objetos vehículos
        this.nombre = nombre;
    }
    // Funciones de información
    RegistroAutomotor.prototype.nombreRegistro = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.obtenerVehiculo = function (indice) {
        return this.vehiculos[indice];
    };
    //Funciones de modificaciones
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (indice, nuevoVehiculo) {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos[indice] = nuevoVehiculo;
        }
    };
    RegistroAutomotor.prototype.darDeBaja = function (patente) {
        this.vehiculos = this.vehiculos.filter(function (vehiculos) { return vehiculos.getPatente() !== patente; });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
