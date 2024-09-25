//Clase de creación de registro del automotor
import { Vehiculo } from "./vehiculos";
export class RegistroAutomotor {
    private nombre: string; //Nombre del Registro
    private vehiculos: Vehiculo[] = []; //Arreglo de Objetos vehículos

    //Construcción del objeto
    public constructor(nombre: string) {
        this.nombre = nombre;
    }
    // Funciones de información
    public obtenerNombreRegistro(): string {
        return this.nombre
    }

    public obtenerVehiculo(indice: number): Vehiculo | undefined {
       return this.vehiculos[indice];
    }

     //Funciones de modificaciones
    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public modificarVehiculo(indice: number, nuevoVehiculo: Vehiculo): void {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos[indice] = nuevoVehiculo;
        }
    }
    public darDeBaja(patente: string): void {
        this.vehiculos = this.vehiculos.filter(vehiculos => vehiculos.getPatente() !== patente);
    }
}

