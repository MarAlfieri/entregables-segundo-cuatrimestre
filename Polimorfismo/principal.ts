import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";

// Secuencia de juego
const mago1 = new Mago("Merlín");
mago1.atacar();
mago1.defender();
mago1.nuevoAtaque();

const luchador1 = new Luchador("Hércules");
luchador1.atacar();
luchador1.defender();
luchador1.nuevoAtaque();
luchador1.lanzarPuñoHierro();

const arquero1 = new Arquero("Legolas");
arquero1.atacar();
arquero1.defender();
arquero1.dispararFlecha();
arquero1.nuevoAtaque();