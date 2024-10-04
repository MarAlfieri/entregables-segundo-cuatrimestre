//Clase de creación de registro del automotor
import { Moto } from "./moto";
import { Auto } from "./auto";
import { Camion } from "./camion";

export class RegistroAutomotor {
    private nombre: string; //Nombre del Registro
    private motos: Moto[] = []; //Arreglo de Motos
    private autos: Auto[] = []; //Arreglo de Autos
    private camiones: Camion[] = []; //Arreglo de Camiones
    
    //Construcción del objeto
    public constructor(nombre: string) {
        this.nombre = nombre;
    }
    // Funciones de información
    public obtenerNombreRegistro(): string {
        return this.nombre
    }

    public obtenerVehiculo(tipoVehiculo: number, indice: number): Moto | Auto | Camion | undefined {
        switch (tipoVehiculo) {
            case 1:
                return this.motos[indice];
            case 2:
                return this.autos[indice];
            case 3:
                return this.camiones[indice];
        }
        
     }

    /*Funciones de modificaciones */

    //Creo el vehículos segun el tipo y lo agrego al arreglo correspondiente
    public agregarVehiculo(tipoVehiculo: number, patente: string, marca: string, modelo: string, año: number, apto?: boolean): void {
        switch (tipoVehiculo) {
            case 1:
                const moto = new Moto(patente, marca, modelo, año, apto);
                this.motos.push(moto);
                break;
            case 2:
                const auto = new Auto(patente, marca, modelo, año, apto);
                this.autos.push(auto);
                break;
            case 3:
                const camion = new Camion(patente, marca, modelo, año, apto);
                this.camiones.push(camion);
                break;
        }
    }
    //Modifico el vehículos segun el tipo. En este caso, solo modifico Patente
    public modificarVehiculo(tipoVehiculo: number, indice: number, modificarPatente: string): void {
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
    }
    
    public darDeBajaVehiculo(tipoVehiculo: number, patente: string): void {
        let index: number;
        let motoBusqueda: Moto
        switch (tipoVehiculo) {
            case 1:
                this.motos = this.motos.filter(Moto => Moto.getPatente() !== patente);
                break;
            case 2:
                this.autos= this.autos.filter(Auto => Auto.getPatente() !== patente);
                break;
            case 3:
                this.camiones = this.camiones.filter(Camion => Camion.getPatente() !== patente);
                break;
        }
    }
}

