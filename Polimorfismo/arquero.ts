import { Personaje } from "./personaje";
// Clase Arquero derivada de Personaje
export class Arquero extends Personaje {
    private precision: number = 70;

    public constructor(nombre: string) {
        super(nombre);
    }
    
    //Metodo get
    public getPrecision(): number {
        return this.precision;
    }

    // Metodos set
    public atacar() {
        console.log(`${this.nombre} está disparando una flecha`);
    }

    public defender() {
        console.log(`${this.nombre} está esquivando el ataque.`);
    }

    public nuevoAtaque() {
        console.log(`${this.nombre} ha aprendido un nuevo ataque con flechas.`);
    }

    public dispararFlecha() {
        console.log(`${this.nombre} está disparando una flecha con precisión ${this.precision}.`);
    }

    public setPresicion(precision: number): void {
        this.precision = precision;
    }
}