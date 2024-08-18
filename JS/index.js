import { Receta } from './Receta.js';
 
//Crear contenedor de recetas
const recetasContainer = document.getElementById('recetas-container');
let recetas = JSON.parse(localStorage.getItem('recetas') || '[]');

// Fetch de las recetas
fetch('./DB/DBRecetas.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((receta, index) => {
            const recetaItem = new Receta(index, receta.nombre, receta.ingredientes, receta.preparacion);
            recetas.push(recetaItem);
        });
    })
    .catch(error => console.error('Error:', error));

// Renderizar las recetas
renderRecetas(recetas);

function crearReceta(recetaItem) {
        const card = document.createElement('div');
        card.className = 'bg-white px-8 rounded-lg shadow-md border-2 border-[#007542]';
        card.setAttribute('data-id', recetaItem.id);
    
        // Crear el título de la receta
        const titulo = document.createElement('h3');
        titulo.className = 'text-xl font-semibold mt-4 mb-2 text-center';
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
        const botonEliminar = document.createElement('button');
        botonEliminar.className = "w-full text-slate-700 px-4 py-2 mx-auto mt-4 mb-2 rounded-lg shadow-md border-2 border-[#007542] hover:bg-[#007542] hover:text-white";
        botonEliminar.id = 'eliminar-receta';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarReceta(recetaItem.id));
        card.appendChild(botonEliminar);
    
        // Agregar la tarjeta al contenedor de recetas
        recetasContainer.appendChild(card);
}

function renderRecetas(recetas) {
    recetasContainer.innerHTML = ''; 
    recetas.forEach(receta => {
        crearReceta(receta);
    });
}

function eliminarReceta(id) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007542',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado',
                'La receta ha sido eliminada',
                'success'
            );

            const card = document.querySelector(`[data-id='${id}']`);
            if (card) {
                card.remove();
            }
        
            const nuevasRecetas = recetas.filter(receta => receta.id !== id);
            recetas.splice(recetas.indexOf(recetas.find(r => r.id === id)), 1);
            localStorage.setItem('recetas', JSON.stringify(nuevasRecetas));
        }
    });
}

const btnAgregarReceta = document.getElementById('agregar-receta');
btnAgregarReceta.addEventListener('click', agregarReceta);

function agregarReceta() {
    // Crear la receta)
    swal.fire({
        title: 'Agregar receta',
        text: 'Ingrega los datos de la receta:',
        html: `
            <input id="nombre-receta" class="swal2-input" placeholder="Nombre de la receta">
            <textarea id="ingredientes-receta" class="swal2-textarea" placeholder="Ingredientes (separe mediante comas)"></textarea>
            <textarea id="preparacion-receta" class="swal2-textarea" placeholder="Preparación (separe mendiante comas)"></textarea>
        `,
        confirmButtonText: 'Agregar',
        preConfirm: () => {
            const nombre = document.getElementById('nombre-receta').value;
            const ingredientes = document.getElementById('ingredientes-receta').value.split(',');	
            const preparacion = document.getElementById('preparacion-receta').value.split(',');

            // Validar los campos
            if (!nombre || !ingredientes || !preparacion) {
                Swal.showValidationMessage('Todos los campos son requeridos');
                return false;
            }
            // Validar si la receta ya existe
            if (recetas.some(receta => receta.nombre === nombre)) {
                Swal.showValidationMessage('La receta ya existe');
                return false;
            } else {
                // Crear la receta
                const nuevaReceta = new Receta(null, nombre, ingredientes, preparacion);
                recetas.push(nuevaReceta);
                // Guardar la receta en el localStorage
                localStorage.setItem('recetas', JSON.stringify(recetas));
                // Crear la tarjeta
                crearReceta(nuevaReceta);
            }
        }
    });
}

function buscarRecetas() {
    const inputBuscar = document.getElementById('search-input').value.toLowerCase();
    const recetasFiltradas = recetas.filter(receta => receta.nombre.toLowerCase().includes(inputBuscar));
    renderRecetas(recetasFiltradas);
}

// Añadir listener al campo de búsqueda
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', buscarRecetas);