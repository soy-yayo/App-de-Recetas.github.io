export class Receta {
  constructor(nombre, ingredientes, preparacion) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
  }
}

const recetaPrueba1 = new Receta("Tacos", ['Tortilla', 'Carne', 'Salsa'], ['Cocinar la carne', 'Calentar la tortilla', 'Agregar la carne a la tortilla', 'Agregar salsa al gusto']);
const recetaPrueba2 = new Receta("Enchiladas", ['Tortilla', 'Pollo', 'Salsa'], ['Freir la tortilla', 'Agregar el pollo, la salsa', 'Preparar con queso y crema al gusto']);
const recetaPrueba3 = new Receta("Pasta", ['Pasta', 'Salsa', 'Queso'], ['Hervir la pasta', 'Agregar la salsa y el queso derretido.']);



export const recetas = [recetaPrueba1, recetaPrueba2, recetaPrueba3];