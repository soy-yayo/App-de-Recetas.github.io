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
const container = document.getElementById('recetas-container');
   
const btn = document.getElementById('addReceta');
document.getElementById('recipe-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const nombre = document.getElementById('recipe-name').value;
    const ingredientes = document.getElementById('recipe-ingredients').value.split(',');
    const preparacion = document.getElementById('recipe-preparation').value.split(',');

    agregarReceta(nombre, ingredientes, preparacion);
    renderRecetas(recetas);

    // Clear the form fields
    document.getElementById('recipe-form').reset();
});

function agregarReceta(nombre, ingredientes, preparacion) {
    recetas.push({ nombre, ingredientes, preparacion });
    localStorage.setItem('recetas', JSON.stringify(recetas));
    console.log('Receta agregada correctamente');
}

let storageRecetas = localStorage.getItem('recetas');
if (storageRecetas) {
    recetas = JSON.parse(storageRecetas);
}

function renderRecetas(recetas) {
    container.innerHTML = '';
    recetas.forEach(receta => {
        const card = document.createElement("div");
        card.className = 'bg-white px-8 rounded-lg shadow-md border-2 border-[#007542] ';
        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2 text-center">${receta.nombre}</h3>
            <ul class="mb-2 list-disc">
                ${receta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
            </ul>
            <ol class="list-decimal">
            ${receta.preparacion.map(paso => `<li>${paso}</li>`).join('')}
            </ol>
            <button id="eliminated-recipe" data-recipe-name="${receta.nombre}">
                <svg 
                width="44" 
                height="44" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="#2c3e50" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 5a2 2 0 0 1 1.995 1.85l.005 .15v10a2 2 0 0 1 -1.85 1.995l-.15 .005h-11a1 1 0 0 1 -.608 -.206l-.1 -.087l-5.037 -5.04c-.809 -.904 -.847 -2.25 -.083 -3.23l.12 -.144l5 -5a1 1 0 0 1 .577 -.284l.131 -.009h11zm-7.489 4.14a1 1 0 0 0 -1.301 1.473l.083 .094l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.403 -1.403l-.094 .083l-1.293 1.292l-1.293 -1.292l-.094 -.083l-.102 -.07z" stroke-width="0" fill="currentColor" />
                </svg>
            </button>   
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

function buscarRecetas(event) {
    event.preventDefault();
    const termino = document.getElementById('search-input').value;
    const recetasFiltradas = filtrarRecetas(termino);
    if (recetasFiltradas.length === 0) {
        alert('No se encontraron recetas');
    } else {
        renderRecetas(recetasFiltradas);
    }
}

formRecetas.addEventListener('submit', buscarRecetas);


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
            renderRecetas(recetas);
            
            const btnDelete = document.getElementById('eliminated-recipe');
            btnDelete.addEventListener('click', (event) => {
                const nombreReceta = event.target.dataset.recipeName;
                eliminarReceta(nombreReceta);
                renderRecetas(recetas);
            });
            
function eliminarReceta(nombreReceta) {
    let receta = recetas.find(receta => receta.nombre.toLowerCase === nombreReceta.t);
    if (receta) {
        recetas = recetas.filter(receta => receta.nombre !== nombreReceta);
        console.log('Receta eliminada correctamente');
    } else {
        console.log('Receta no encontrada');
    }
}
