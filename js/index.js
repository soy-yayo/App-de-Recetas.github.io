function menuPrincipal(){
    console.log('Bienvenido a la cocina de la abuela\nPulse 1 para continuar: ');
    op = parseInt(prompt('Ingrese una opcion: '));
    return op
}

function menu() {
    console.log('|------Menu------|');
    console.log('1. Buscar Receta');
    console.log('2. Agregar Receta');
    console.log('3. Modificar Receta');
    console.log('4. Eliminar Receta');
    console.log('5. Salir');
    console.log('|----------------|');
    op = parseInt(prompt('Ingrese una opcion: '));
    return op  
}


