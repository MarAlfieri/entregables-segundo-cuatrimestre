import { Vehiculo } from "./vehiculo";

//Clase de cración de autos
export class Moto extends Vehiculo{
    private tieneBaulera: boolean = false;
        
    //Construcción del objeto
    public constructor(patente: string, marca: string, modelo: string, año: number, tieneBaulera?: boolean) {
        super(patente, marca, modelo, año);
        if (tieneBaulera != undefined) {
            this.tieneBaulera = tieneBaulera;
        }
    }

    // Funciones de información
    
    public getTieneBaulera(): boolean {
        return this.tieneBaulera;
    }
    
    //Funciones de modificaciones
    public setTieneBaulera(tieneBaulera: boolean){
        this.tieneBaulera = tieneBaulera;
    }
}