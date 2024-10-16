import { Personaje } from "./personaje";
// Clase derivada Luchador
export class Luchador extends Personaje {
    private fuerza: number = 50;

    public constructor(nombre: string) {
        super(nombre);
    }
  
    //Metodo get
    public getFuerza(): number {
        return this.fuerza;
    }
    
    // Metodos set
    public atacar() {
        console.log(`${this.nombre} está atacando con fuerza ${this.fuerza}.`);
    }

    public defender() {
        console.log(`${this.nombre} está defendiendo con su escudo de hierro.`);
    }

    public nuevoAtaque() {
        console.log(`${this.nombre} ha aprendido un nuevo ataque físico.`);
    }

    public lanzarPuñoHierro() {
        console.log(`${this.nombre} está lanzando un Puño de hierro.`);
    }
    
    public setFuerza(fuerza: number): void {
        this.fuerza = fuerza;
    }
}