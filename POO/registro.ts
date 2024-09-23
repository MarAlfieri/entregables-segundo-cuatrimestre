//Clase de creación de registro del automotor
import { Vehiculo } from "./vehiculos";
export class RegistroAutomotor {
    private nombre: string;
    private vehiculos: Vehiculo[] = [];

    //Construcción del objeto
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    nombreRegistro(): string {
        return this.nombre
    }

    obtenerVehiculo(indice: number): Vehiculo | undefined {
       return this.vehiculos[indice];
    }

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    modificarVehiculo(indice: number, nuevoVehiculo: Vehiculo): void {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos[indice] = nuevoVehiculo;
        }
    }

    darDeBaja(indice: number): void {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos.splice(indice, 1);
        }
    }
}
