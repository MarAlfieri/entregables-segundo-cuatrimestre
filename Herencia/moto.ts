import { Vehiculo } from "./vehiculo";

//Clase de cración de autos
export class Moto extends Vehiculo{
    private apto: boolean;
        
    //Construcción del objeto
    public constructor(patente: string, marca: string, modelo: string, año: number, apto: boolean) {
        super(patente, marca, modelo, año);
        this.apto = this.apto;
        
    }

    // Funciones de información
    
    public getApto(): boolean {
        return this.apto;
    }
    
    //Funciones de modificaciones
    public setApto(apto: boolean){
        this.apto = apto
    }
}