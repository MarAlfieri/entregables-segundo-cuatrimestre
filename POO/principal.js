"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registro_1 = require("./registro");
var vehiculos_1 = require("./vehiculos");
// Creación de nuevo registro automotor
var registro = new registro_1.RegistroAutomotor("Registro Olavarría");
// Creación de vehiculos (Motos, Autos y Camiones)
var auto1 = new vehiculos_1.Vehiculo("Auto", "Toyota", "Corolla", 2020);
var moto1 = new vehiculos_1.Vehiculo("Moto", "Honda", "CBR", 2019);
var camion1 = new vehiculos_1.Vehiculo("Camión", "Ford", "1114", 1970);
//Ingresos de vehiculos
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
//Impresion de vehículos
console.log(registro.obtenerVehiculo(0)); // Imprime el auto1
console.log(registro.obtenerVehiculo(1)); // Imprime la moto1
console.log(registro.obtenerVehiculo(2)); // Imprime el camion1
auto1.setMarca("Nissan");
registro.modificarVehiculo(1, auto1);
console.log(registro.nombreRegistro());
console.log(registro.obtenerVehiculo(0)); // Imprime el auto1 modificado
registro.darDeBaja(-1);
console.log("Comprobación de vehiculo dado de baja Vehiculo dado de baja");
for (var index = 0; index < 3; index++) {
    console.log(registro.obtenerVehiculo(index));
}
