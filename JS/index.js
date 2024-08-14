import { Receta } from "./Receta";

const recetas = [];

const receta_1 = new Receta("Tacos", ['Tortilla', 'Carne', 'Salsa'], ['Cocinar la carne', 'Calentar la tortilla', 'Agregar la carne a la tortilla', 'Agregar salsa al gusto']);

recetas.push(receta_1);

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

renderRecetas(recetas); 