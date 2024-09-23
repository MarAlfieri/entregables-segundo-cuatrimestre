import { RegistroAutomotor } from "./registro";
import { Vehiculo } from "./vehiculos";


// Creación de nuevo registro automotor
const registro = new RegistroAutomotor("Registro Olavarría");
// Creación de vehiculos (Motos, Autos y Camiones)
const auto1 = new Vehiculo("XBV 432", "Auto", "Toyota", "Corolla", 2020);
const moto1 = new Vehiculo("XCV 553", "Moto", "Honda", "CBR", 2019);
const camion1 = new Vehiculo("PAC 323", "Camión", "Ford", "1114", 1970);

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
for (let index = 0; index < 3; index++) {
    console.log(registro.obtenerVehiculo(index));
}

