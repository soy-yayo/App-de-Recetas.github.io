let recetaPrueba1 = {
    nombre: 'Tacos',
    ingredientes: ['Tortilla', 'Carne', 'Salsa'],
    preparacion: 'Calentar la tortilla, agregar la carne y la salsa'
}
let recetaPrueba2 = {
    nombre: 'Enchiladas',
    ingredientes: ['Tortilla', 'Pollo', 'Salsa'],
    preparacion: 'Freir la tortilla, agregar el pollo, la salsa, queso y crema.'
}
let recetaPrueba3 = {
    nombre: 'Pasta',
    ingredientes: ['Pasta', 'Salsa', 'Queso'],
    preparacion: 'Hervir la pasta, agregar la salsa y el queso.'
}
let recetas = [recetaPrueba1, recetaPrueba2, recetaPrueba3];
let init = confirm('Bienvenido a la aplicacion de recetas, desea continuar?');

function menu() {
    console.log('|------Menu------|\n1. Buscar Receta\n2. Agregar Receta\n3. Modificar Receta\n4. Eliminar Receta\n5. Salir\n|----------------|');
    op = parseInt(prompt('Ingrese una opcion: '));
    return op
}
let op = menu();

if (init == true) {
    op = menu();
    switch (op) {
        case 1:
            console.log('Buscar Receta');
            break;
        case 2:
            console.log('Agregar Receta');
            break;
        case 3:
            console.log('Modificar Receta');
            break;
        case 4:
            console.log('Eliminar Receta');
            break;
        case 5:
            console.log('Adios');
            break;
        default:
            console.log('Opcion invalida');
    }
} else {
    console.log('Adios');
}