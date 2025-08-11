// Creación de arreglo que va a almacenar los nombres.
// Se declara global para que las funciones tengan acceso.
let arregloNombres = [];


function agregarAmigo(){
    let obtenerNombre = document.querySelector('.input-name').value;
    arregloNombres.push(obtenerNombre);
    limpiarInput();
}
function limpiarInput(){
    document.querySelector('.input-name').value = '';
}




