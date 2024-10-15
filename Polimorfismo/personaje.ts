// Clase base Personaje
export abstract class Personaje {
    protected nombre: string;
    private nivel: number = 1;
    private puntosDeVida: number = 100;

    public constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract atacar(): void;
    abstract defender(): void;
    abstract nuevoAtaque(): void; // Método abstracto para nuevo ataque

    //Metodos get de propiedades privadas
    public getNivel(): number {
        return this.nivel;
    }
    public getPuntosDeVida(): number {
        return this.puntosDeVida;
    }
    
    //Metodos set para modificar propiedades privadas
    public setNivel(nivel): void {
        this.nivel = nivel;
    }
    public setPuntosDeVida(puntosDeVida): void{
        this.puntosDeVida = puntosDeVida;
    }
}