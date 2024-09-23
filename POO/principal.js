"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registro_1 = require("./registro");
var vehiculos_1 = require("./vehiculos");
// Creación de nuevo registro automotor
var registro = new registro_1.RegistroAutomotor("Registro Olavarría");
// Creación de vehiculos (Motos, Autos y Camiones)
var auto1 = new vehiculos_1.Vehiculo("XBV 432", "Auto", "Toyota", "Corolla", 2020);
var moto1 = new vehiculos_1.Vehiculo("XCV 553", "Moto", "Honda", "CBR", 2019);
var camion1 = new vehiculos_1.Vehiculo("PAC 323", "Camión", "Ford", "1114", 1970);
//Ingresos de vehiculos
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
//Función de Impresion de vehículos del registro
function imprimirVehiculos(indexInicio, indexFinal) {
    console.log(registro.nombreRegistro()); //Titulo del informe
    console.log("Listado de vehiculos del Registro desde " + (indexInicio + 1) + " hasta " + indexFinal);
    for (var index = indexInicio; index < indexFinal; index++) {
        console.log(JSON.stringify(registro.obtenerVehiculo(index)));
    }
}
//Imprimo vehiculos para comprobación inicial
imprimirVehiculos(0, 3);
//Cambio Nombre "auto1"
auto1.setMarca("Nissan");
auto1.setModelo("Versa");
registro.modificarVehiculo(0, auto1); //lo modifico en el registro
imprimirVehiculos(0, 1); // Imprime el auto1 modificado
//Dar de baja un vehiculo por patente y comprobar
registro.darDeBaja("XBV 432");
console.log("Comprobación de que el vehiculo con patente <XBV 432> haya sido dado de baja del Registro");
imprimirVehiculos(0, 3);
