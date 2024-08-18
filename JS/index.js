import { Receta } from './Receta.js';
//Crear contenedor de recetas
const recetasContainer = document.getElementById('recetas-container');

// Fetch de las recetas
fetch('./DB/DBRecetas.json')
    .then(response => response.json())
    .then(recetas => {
        recetas.forEach(receta => {
            const recetaItem = new Receta(receta.nombre, receta.ingredientes, receta.preparacion);

            // Crear la tarjeta
            const card = document.createElement('div');
            card.className = 'bg-white px-8 rounded-lg shadow-md border-2 border-[#007542]';

            // Crear el título de la receta
            const titulo = document.createElement('h3');
            titulo.className = 'text-xl font-semibold mb-2 text-center';
            titulo.textContent = recetaItem.nombre;
            card.appendChild(titulo);

            // Crear la lista de ingredientes
            const tituloIngredientes = document.createElement('h4');
            tituloIngredientes.className = 'text-lg font-semibold mb-2';
            tituloIngredientes.textContent = 'Ingredientes:';
            card.appendChild(tituloIngredientes);

            const ingredientesList = document.createElement('ul');
            ingredientesList.className = 'mb-2 list-disc';

            recetaItem.ingredientes.forEach(ingrediente => {
                const ingredienteItem = document.createElement('li');
                ingredienteItem.textContent = ingrediente;
                ingredientesList.appendChild(ingredienteItem);
            });
            card.appendChild(ingredientesList);

            // Crear la lista de pasos
            const tituloPasos = document.createElement('h4');
            tituloPasos.className = 'text-lg font-semibold mb-2';
            tituloPasos.textContent = 'Preparación:';
            card.appendChild(tituloPasos);

            const pasosList = document.createElement('ol');
            pasosList.className = 'list-decimal';

            recetaItem.preparacion.forEach(paso => {
                const pasoItem = document.createElement('li');
                pasoItem.textContent = paso;
                pasosList.appendChild(pasoItem);
            });
            card.appendChild(pasosList);

            // Crear botón de eliminar
            const botonEliminar = document.createElement('a');
            botonEliminar.className = 'bg-red-500 text-white px-4 py-2 rounded-md mt-4';
            botonEliminar.textContent = 'Eliminar';
            card.appendChild(botonEliminar);


            // Agregar la tarjeta al contenedor de recetas
            recetasContainer.appendChild(card);
        });
    });

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
}

let storageRecetas = localStorage.getItem('recetas');
if (storageRecetas) {
    recetas = JSON.parse(storageRecetas);
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
