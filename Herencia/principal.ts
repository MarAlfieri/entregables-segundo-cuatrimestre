import { RegistroAutomotor } from "./registro";
import { Vehiculo } from "./vehiculo";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

// Creación de nuevo registro automotor
const registro = new RegistroAutomotor("Registro Olavarría");

// Creación de vehiculos (Motos, Autos y Camiones)
const auto1 = new Vehiculo("XBV 432", "Toyota", "Corolla", 2020);
const moto1 = new Vehiculo("XCV 553", "Honda", "CBR", 2019);
const camion1 = new Vehiculo("PAC 323", "Ford", "1114", 1970);

//Ingresos de vehiculos
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

//Función de Impresion de vehículos del registro
function imprimirVehiculos( indexInicio: number, indexFinal: number) {
    console.log(registro.obtenerNombreRegistro()); //Titulo del informe
    console.log("Listado de vehiculos del Registro desde "+(indexInicio+1) +" hasta "+ indexFinal)
    for (let index = indexInicio; index < indexFinal; index++) {
        console.log(JSON.stringify(registro.obtenerVehiculo(index)));
    }
}

//Imprimo vehiculos para comprobación inicial

imprimirVehiculos(0,3); 

//Cambio Nombre "auto1"
auto1.setMarca("Nissan");
auto1.setModelo("Versa");
registro.modificarVehiculo(0, auto1); //lo modifico en el registro
imprimirVehiculos(0,1); // Imprime el auto1 modificado


//Dar de baja un vehiculo por patente y comprobar
registro.darDeBaja("XBV 432");
console.log("Comprobación de que el vehiculo con patente <XBV 432> haya sido dado de baja del Registro");
imprimirVehiculos(0,3); 
