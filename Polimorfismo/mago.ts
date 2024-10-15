import { Personaje } from "./personaje";
// Clase Mago
export class Mago extends Personaje {
    private mana: number = 100;

    public constructor(nombre: string) {
        super(nombre);
    }
    //Metodo get
    public getMana(): number {
        return this.mana;
    }
    // Metodos set
    public atacar() {
        console.log(`${this.nombre} está lanzando un hechizo.`);
    }

    public defender() {
        console.log(`${this.nombre} está defendiendo con un escudo mágico.`);
    }

    public nuevoAtaque() {
        console.log(`${this.nombre} ha aprendido un nuevo ataque mágico.`);
    }

    public lanzarHechizoDeFuego() {
        console.log(`${this.nombre} está lanzando un hechizo de fuego.`);
    }
    public setMana(mana: number): void {
        this.mana = mana;
    }
}
