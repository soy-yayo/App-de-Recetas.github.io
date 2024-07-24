let recetaPrueba1 = {
    nombre: 'Tacos',
    ingredientes: ['Tortilla', 'Carne', 'Salsa'],
    preparacion: '\n1.Cocinar la carne\n2.Calentar la tortilla\n3.Agregar la carne a la tortilla\n4.Agregar salsa al gusto'
}
let recetaPrueba2 = {
    nombre: 'Enchiladas',
    ingredientes: ['Tortilla', 'Pollo', 'Salsa'],
    preparacion: '\n1.Freir la tortilla\n2.Agregar el pollo, la salsa\n3.Preparar con queso y crema al gusto.'
}
let recetaPrueba3 = {
    nombre: 'Pasta',
    ingredientes: ['Pasta', 'Salsa', 'Queso'],
    preparacion: '\n1.Hervir la pasta\n2.Agregar la salsa y el queso derretido.'
}

let recetas = [recetaPrueba1, recetaPrueba2, recetaPrueba3];


function renderRecetas(recetas) {
    const container = document.getElementById('recetas-container');
    container.innerHTML = '';
    recetas.forEach(receta => {
        const card = document.createElement("div");
        card.className = 'bg-white p-4 rounded-lg shadow-md p-2 border-2 border-[#007542]';
        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${receta.nombre}</h3>
            <ul class="mb-2">
                ${receta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
            </ul>
            <p>${receta.preparacion.replace(/\n/g, '<br>')}</p>
        `;
        container.appendChild(card);
    });
}

function filtrarRecetas(termino) {
    return recetas.filter(receta => 
        receta.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        receta.ingredientes.some(ingrediente => ingrediente.toLowerCase().includes(termino.toLowerCase()))
    );
}

document.getElementById('search-form').addEventListener('submit', function(e) {
    const termino = document.getElementById('search-input').value;
    const recetasFiltradas = filtrarRecetas(termino);
    renderRecetas(recetasFiltradas);
});

renderRecetas(recetas);


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
