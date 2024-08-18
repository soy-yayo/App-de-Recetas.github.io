export class Receta {
  static actualId = 0;
  constructor(id, nombre, ingredientes, preparacion) {
    this.id = Receta.actualId++;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.preparacion = preparacion;
  }
}