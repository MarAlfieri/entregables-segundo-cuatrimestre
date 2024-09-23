//Clase de creación de registro del automotor
import { Vehiculo } from "./vehiculos";
export class RegistroAutomotor {
    private nombre: string; //Nombre del Registro
    private vehiculos: Vehiculo[] = []; //Arreglo de Objetos vehículos

    //Construcción del objeto
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    // Funciones de información
    nombreRegistro(): string {
        return this.nombre
    }

    obtenerVehiculo(indice: number): Vehiculo | undefined {
       return this.vehiculos[indice];
    }

     //Funciones de modificaciones
    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    modificarVehiculo(indice: number, nuevoVehiculo: Vehiculo): void {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos[indice] = nuevoVehiculo;
        }
    }
    darDeBaja(patente: string): void {
        this.vehiculos = this.vehiculos.filter(vehiculos => vehiculos.getPatente() !== patente);
    }
}

