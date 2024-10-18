import { Arquero } from "./arquero";
// Clase ArqueroLegendario derivada de Arquero
export class ArqueroLegendario extends Arquero {
    private tipoFlecha: string;

    public constructor(nombre: string) {
        super(nombre);
    }
    
    //Metodo get
    public getTipoFlecha(): string {
        return this.tipoFlecha;
    }

    // Metodos set
    public disparaFlechaEspecial() {
        console.log(`${this.nombre} está disparando una flecha ${this.tipoFlecha}`);
    }

    public setTipoFlecha(tipoFlecha : string): void {
        this.tipoFlecha = tipoFlecha;
    }
}