"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
//Clase de creación de registro del automotor
var moto_1 = require("./moto");
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var RegistroAutomotor = /** @class */ (function () {
    //Construcción del objeto
    function RegistroAutomotor(nombre) {
        this.motos = []; //Arreglo de Motos
        this.autos = []; //Arreglo de Autos
        this.camiones = []; //Arreglo de Camiones
        this.nombre = nombre;
    }
    // Funciones de información
    RegistroAutomotor.prototype.obtenerNombreRegistro = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.obtenerVehiculo = function (tipoVehiculo, indice) {
        switch (tipoVehiculo) {
            case 1:
                return this.motos[indice];
            case 2:
                return this.autos[indice];
            case 3:
                return this.camiones[indice];
        }
    };
    /*Funciones de modificaciones */
    //Creo el vehículos segun el tipo y lo agrego al arreglo correspondiente
    RegistroAutomotor.prototype.agregarVehiculo = function (tipoVehiculo, patente, marca, modelo, año, particularidad) {
        switch (tipoVehiculo) {
            case 1:
                var moto = new moto_1.Moto(patente, marca, modelo, año, particularidad);
                this.motos.push(moto);
                break;
            case 2:
                var auto = new auto_1.Auto(patente, marca, modelo, año, particularidad);
                this.autos.push(auto);
                break;
            case 3:
                var camion = new camion_1.Camion(patente, marca, modelo, año, particularidad);
                this.camiones.push(camion);
                break;
        }
    };
    //Modifico el vehículos segun el tipo. En este caso, solo modifico Patente
    RegistroAutomotor.prototype.modificarVehiculo = function (tipoVehiculo, indice, modificarPatente) {
        if (indice >= 0 && modificarPatente.length === 7) {
            switch (tipoVehiculo) {
                case 1:
                    if (indice <= this.motos.length) {
                        this.motos[indice].setPatente(modificarPatente);
                    }
                    break;
                case 2:
                    if (indice <= this.autos.length) {
                        this.autos[indice].setPatente(modificarPatente);
                    }
                    break;
                case 3:
                    if (indice <= this.camiones.length) {
                        this.camiones[indice].setPatente(modificarPatente);
                    }
                    break;
            }
        }
    };
    RegistroAutomotor.prototype.darDeBajaVehiculo = function (tipoVehiculo, patente) {
        switch (tipoVehiculo) {
            case 1:
                this.motos = this.motos.filter(function (Moto) { return Moto.getPatente() !== patente; });
                break;
            case 2:
                this.autos = this.autos.filter(function (Auto) { return Auto.getPatente() !== patente; });
                break;
            case 3:
                this.camiones = this.camiones.filter(function (Camion) { return Camion.getPatente() !== patente; });
                break;
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
