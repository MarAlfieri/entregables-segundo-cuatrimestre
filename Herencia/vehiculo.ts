//Clase de cración de vehiculos de diferentes tipos
export class Vehiculo {
    private patente: string;
    private marca: string;
    private modelo: string;
    private año: number;
    
    //Construcción del objeto
    public constructor(patente: string, marca: string, modelo: string, año: number) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Funciones de información
    public getPatente(): string {
        return this.patente;
    }

    public getMarca(): string {
        return this.marca;
    }
    
    public getModelo(): string {
        return this.modelo;
    }
    
    public getAño(): number {
        return this.año;
    }
    
    //Funciones de modificaciones
    public setPatente(nuevaPatente: string): void {
        this.patente = nuevaPatente;
    }
    
    public setMarca(nuevaMarca: string): void {
        this.marca = nuevaMarca;
    }

    public setModelo(nuevoModelo: string): void {
        this.modelo = nuevoModelo;
    }

    public setAño(nuevoAño: number): void {
        this.año = nuevoAño;
    }
}