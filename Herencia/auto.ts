import { Vehiculo } from "./vehiculo";

//Clase de cración de autos
export class Auto extends Vehiculo{
    private tieneBaul: boolean = false;
        
    //Construcción del objeto
    public constructor(patente: string, marca: string, modelo: string, año: number, tieneBaul?: boolean) {
        super(patente, marca, modelo, año);
        if (tieneBaul != undefined) {
            this.tieneBaul = tieneBaul;
        }        
    }

    // Funciones de información
    
    public getTieneBaul(): boolean {
        return this.tieneBaul;
    }
    
    //Funciones de modificaciones
    public setApto(tieneBaul: boolean){
        this.tieneBaul = tieneBaul;
    }
}