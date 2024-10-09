"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registro_1 = require("./registro");
// Creación de nuevo registro automotor
var registro = new registro_1.RegistroAutomotor("Registro Olavarría");
//Ingresos de vehiculos 1 = MOTO, 2= AUTO Y 3 = CAMION //El último parámetro si es "APTO", es opcional, por defecto "true"
registro.agregarVehiculo(1, "XBV 432", "Honda", "CBR", 2020);
registro.agregarVehiculo(2, "XCV 553", "Toyota", "Corolla", 2019, true);
registro.agregarVehiculo(3, "PAC 323", "Ford", "1114", 1970, true);
registro.agregarVehiculo(1, "AZF 543", "Zanella", "MX 150", 2021);
registro.agregarVehiculo(3, "DDR 768", "Scania", "113 Topline", 2016);
//Función determinar tipo de vehículo
function tipoListado(tipoVehiculo) {
    switch (tipoVehiculo) {
        case 1:
            return "Motos";
        case 2:
            return "Autos";
        case 3:
            return "Camiones";
    }
}
//Función de Impresion de vehículos del registro
function imprimirVehiculos(tipoVehiculo, indexInicio, indexFinal, imprimirRegistro) {
    if (imprimirRegistro != undefined && imprimirRegistro) { //Imrpime el titulo del registro según convenga
        console.log(registro.obtenerNombreRegistro()); //Titulo del informe
    }
    console.log("Listado de " + tipoListado(tipoVehiculo) + " del Registro desde " + (indexInicio + 1) + " hasta " + indexFinal);
    for (var index = indexInicio; index < indexFinal; index++) {
        if (registro.obtenerVehiculo(tipoVehiculo, index) != undefined) {
            console.log(JSON.stringify(registro.obtenerVehiculo(tipoVehiculo, index)));
        }
    }
}
//Imprimo vehiculos para comprobación inicial
imprimirVehiculos(1, 0, 4, true);
imprimirVehiculos(2, 0, 4);
imprimirVehiculos(3, 0, 4);
//Modificación de una moto
registro.modificarVehiculo(1, 1, "XBV 555");
imprimirVehiculos(1, 0, 4, true);
//Baja de una moto
registro.darDeBajaVehiculo(1, "XBV 432");
//Verificación
imprimirVehiculos(1, 0, 4, true);
