function menu() {
    console.log('|------Menu------|\n1. Buscar Receta\n2. Agregar Receta\n3. Modificar Receta\n4. Eliminar Receta\n5. Salir\n|----------------|');
    op = parseInt(prompt('Ingrese una opcion: '));
    return op
}
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