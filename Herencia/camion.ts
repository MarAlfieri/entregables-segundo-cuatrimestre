import { Vehiculo } from "./vehiculo";

//Clase de cración de autos
export class Camion extends Vehiculo{
    private tieneCaja: boolean = false;
        
    //Construcción del objeto
    public constructor(patente: string, marca: string, modelo: string, año: number, tieneCaja?: boolean) {
        super(patente, marca, modelo, año);
        if (tieneCaja != undefined) {
            this.tieneCaja = tieneCaja;
        }
    }

    // Funciones de información
    
    public getTieneCaja(): boolean {
        return this.tieneCaja;
    }
    
    //Funciones de modificaciones
    public setTieneCaja(tieneCaja: boolean){
        this.tieneCaja = tieneCaja;
    }
}