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
const formAgregarReceta = document.getElementById('recipe-form');
formAgregarReceta.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('recipe-name').value;
    const ingredientes = document.getElementById('recipe-ingredients').value.split(',');
    const preparacion = document.getElementById('recipe-preparation').value.split(',');

    agregarReceta(nombre, ingredientes, preparacion);
    renderRecetas(recetas);

    document.getElementById('recipe-form').reset();
});

function agregarReceta(nombre, ingredientes, preparacion) {
    recetas.push({ nombre, ingredientes, preparacion });
    localStorage.setItem('recetas', JSON.stringify(recetas));
   // console.log('Receta agregada correctamente');
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
            `;
            container.appendChild(card);
        });
    }
    
    const formRecetas = document.getElementById('search-form');
    formRecetas.addEventListener('submit', buscarRecetas);
    
    function filtrarRecetas(termino) {
        return recetas.filter(receta => 
            receta.nombre.toLowerCase().includes(termino.toLowerCase()) ||
            receta.ingredientes.some(ingrediente => ingrediente.toLowerCase().includes(termino.toLowerCase()))
        );
    }
    
    function buscarRecetas(event) {
        event.preventDefault();
        const termino = document.getElementById('search-input').value;
        const recetasFiltradas = filtrarRecetas(termino);
        renderRecetas(recetasFiltradas);
        // if (recetasFiltradas.length === 0) {
        //     alert('No se encontraron recetas');
        // } else {
        //     renderRecetas(recetasFiltradas);
        // }
    }

    
const deleteRecipe = document.getElementById('recipe-form-dl');
const recipeName = document.getElementById('recipe-name-dl')

deleteRecipe.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = recipeName.value;
    eliminarReceta(nombre);
    renderRecetas(recetas);

});

function eliminarReceta(nombreReceta) { 
    let receta = recetas.find(receta => receta.nombre === nombreReceta);
    if (receta) {
        recetas = recetas.filter(receta => receta.nombre !== nombreReceta);
        localStorage.setItem('recetas', JSON.stringify(recetas));
    }
}

// btnDelete.addEventListener('click', (event) => { 
//     const nombreReceta = event.target.dataset.recipeName;               
//     eliminarReceta(nombreReceta);
//     renderRecetas(recetas);
// });
    
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
                //     }// }

renderRecetas(recetas); 