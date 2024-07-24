class Receta {
    constructor(nombre, ingredientes, preparacion) {
      this.nombre = nombre;
      this.ingredientes = ingredientes;
      this.preparacion = preparacion;
    }
  }
  
  
  let recetaPrueba1 = new Receta("Tacos", ['Tortilla', 'Carne', 'Salsa'], ['Cocinar la carne', 'Calentar la tortilla', 'Agregar la carne a la tortilla', 'Agregar salsa al gusto']);
  let recetaPrueba2 = new Receta("Enchiladas", ['Tortilla', 'Pollo', 'Salsa'], ['Freir la tortilla', 'Agregar el pollo, la salsa', 'Preparar con queso y crema al gusto']);
  let recetaPrueba3 = new Receta("Pasta", ['Pasta', 'Salsa', 'Queso'], ['Hervir la pasta', 'Agregar la salsa y el queso derretido.']);
  
  
recetas = [recetaPrueba1, recetaPrueba2, recetaPrueba3];
  
  
  

function añadirReceta() {
    let nombre = prompt('Ingrese el nombre de la receta: ');
    let ingredientes = prompt('Ingrese los ingredientes de la receta: (Separados por coma)');
    let preparacion = prompt('Ingrese la preparacion de la receta: (Separe los pasos por coma)');

    let receta = new Receta(nombre, ingredientes.split(','), preparacion.split(','));
    
    recetas.push(receta);
    localStorage.setItem('recetas', JSON.stringify(recetas));
    renderRecetas(recetas);

}

const btn = document.getElementById('addReceta');
btn.addEventListener('click', añadirReceta);

let storageRecetas = localStorage.getItem('recetas');
if (storageRecetas) {
    recetas = JSON.parse(storageRecetas);
}
const container = document.getElementById('recetas-container');

function renderRecetas(recetas) {
    container.innerHTML = '';
    recetas.forEach(receta => {
        const card = document.createElement("div");
        card.className = 'bg-white p-4 rounded-lg shadow-md p-2 border-2 border-[#007542]';
        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${receta.nombre}</h3>
            <ul class="mb-2 list-disc">
                ${receta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
            </ul>
            <ol class="list-decimal">
            ${receta.preparacion.map(paso => `<li>${paso}</li>`).join('')}
            </ol>    
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
const formRecetas = document.getElementById('search-form');

formRecetas.addEventListener('submit', (event) => {
    event.preventDefault();
    const termino = document.getElementById('search-input').value;
    const recetasFiltradas = filtrarRecetas(termino);
    if (recetasFiltradas.length === 0) {
        alert('No se encontraron recetas');
    } else {
        renderRecetas(recetasFiltradas);
    }
});

renderRecetas(recetas);


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

const btnDelete = document.getElementById('deleteReceta');
btnDelete.addEventListener('click', (event) => {
    const nombreReceta = prompt('Ingrese el nombre de la receta que desea eliminar: ');
    eliminarReceta(nombreReceta);
    renderRecetas(recetas);
});

function eliminarReceta(nombreReceta) {
    let receta = recetas.find(receta => receta.nombre == nombreReceta);
    if (receta) {
        let index = recetas.indexOf(receta);
        recetas.splice(index, 1);
        console.log('Receta eliminada correctamente');
    } else {
        console.log('Receta no encontrada');
    }
}
