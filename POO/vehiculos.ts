//Clase de cración de vehiculos de diferentes tipos
export class Vehiculo {
    private patente: string;
    private tipo: string;
    private marca: string;
    private modelo: string;
    private año: number;
    
    //Construcción del objeto
    constructor(patente: string, tipo: string, marca: string, modelo: string, año: number) {
        this.patente = patente;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Funciones de información
    getPatente(): string {
        return this.patente;
    }

    getTipo(): string {
        return this.tipo;
    }
    
    getMarca(): string {
        return this.marca;
    }
    
    getModelo(): string {
        return this.modelo;
    }
    
    getAño(): number {
        return this.año;
    }
    
    //Funciones de modificaciones
    setPatente(nuevaPatente: string): void {
        this.patente = nuevaPatente;
    }
    setTipo(nuevoTipo: string): void {
        this.tipo = nuevoTipo;
    }
    
    setMarca(nuevaMarca: string): void {
        this.marca = nuevaMarca;
    }

    setModelo(nuevoModelo: string): void {
        this.modelo = nuevoModelo;
    }

    setAño(nuevoAño: number): void {
        this.año = nuevoAño;
    }
}