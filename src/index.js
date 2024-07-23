// let recetaPrueba1 = {
//     nombre: 'Tacos',
//     ingredientes: ['Tortilla', 'Carne', 'Salsa'],
//     preparacion: '\n1.Cocinar la carne\n2.Calentar la tortilla\n3.Agregar la carne a la tortilla\n4.Agregar salsa al gusto'
// }
// let recetaPrueba2 = {
//     nombre: 'Enchiladas',
//     ingredientes: ['Tortilla', 'Pollo', 'Salsa'],
//     preparacion: '\n1.Freir la tortilla\n2.Agregar el pollo, la salsa\n3.Preparar con queso y crema al gusto.'
// }
// let recetaPrueba3 = {
//     nombre: 'Pasta',
//     ingredientes: ['Pasta', 'Salsa', 'Queso'],
//     preparacion: '\n1.Hervir la pasta\n2.Agregar la salsa y el queso derretido.'
// }

// let recetas = [recetaPrueba1, recetaPrueba2, recetaPrueba3];
// let init = confirm('Bienvenido a la aplicacion de recetas, desea continuar?');
// let nombreReceta;

// function menu() {
//     console.log('|------Menu------|\n1. Buscar Receta\n2. Modificar Receta\n3. Eliminar Receta\n4. Añadir Receta\n5. Salir\n|----------------|');
//     op = parseInt(prompt('Ingrese una opcion: '));
//     return op
// }

// function buscarReceta(nombreReceta) {
//     let receta = recetas.find(receta => receta.nombre == nombreReceta);
//     if (receta) {
//         console.log('Nombre: ' + receta.nombre + '\nIngredientes: ' + receta.ingredientes + '\nPreparacion: ' + receta.preparacion);
//     } else {
//         console.log('Receta no encontrada');
//     }
// }

// function modificarReceta(nombreReceta) {
//     let receta = recetas.find(receta => receta.nombre == nombreReceta);
//     if (receta) {
//         console.log(receta);
//         let nombre = prompt('Ingrese el nuevo nombre de la receta: ');
//         let ingredientes = prompt('Ingrese los ingredientes de la receta: ');
//         let preparacion = prompt('Ingrese la preparacion de la receta: ');
//         receta.nombre = nombre;
//         receta.ingredientes = ingredientes.split(',');
//         receta.preparacion = preparacion;
//         console.log('Receta modificada correctamente');
//     } else {
//         console.log('Receta no encontrada');
//     }
// }

// function añadirReceta() {
//     let nombre = prompt('Ingrese el nombre de la receta: ');
//     let ingredientes = prompt('Ingrese los ingredientes de la receta: (Separados por coma)');
//     let preparacion = prompt('Ingrese la preparacion de la receta: ');
//     let receta = {
//         nombre: nombre,
//         ingredientes: ingredientes.split(','),
//         preparacion: preparacion
//     }
//     recetas.push(receta);
//     console.log('Receta añadida correctamente');
// }

// function eliminarReceta(nombreReceta) {
//     let receta = recetas.find(receta => receta.nombre == nombreReceta);
//     if (receta) {
//         let index = recetas.indexOf(receta);
//         recetas.splice(index, 1);
//         console.log('Receta eliminada correctamente');
//     } else {
//         console.log('Receta no encontrada');
//     }
// }

// while (init) {
//     op = menu();
//     switch (op) {
//         case 1:
//             nombreReceta = prompt('Ingrese el nombre de la receta: ');
//             buscarReceta(nombreReceta);
//             break;
//         case 2:
//             nombreReceta = prompt('Ingrese el nombre de la receta: ');
//             modificarReceta(nombreReceta);
//             break;
//         case 3:
//             nombreReceta = prompt('Ingrese el nombre de la receta: ');
//             eliminarReceta(nombreReceta);
//             break;
//         case 4:
//             añadirReceta();
//             break;
//         case 5:
//             init = false;
//             break;
//         default:
//             console.log('Opcion no valida');
//             break;
//     }
// }