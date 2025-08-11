// Creación de arreglo que va a almacenar los nombres.
// Se declara global para que las funciones tengan acceso.
let arregloNombres = [];


function agregarAmigo(){
    let obtenerNombre = document.querySelector('.input-name').value;
    arregloNombres.push(obtenerNombre);
    actualizarAmigos(arregloNombres)
    limpiarInput();
}
function limpiarInput(){
    arregloNombres = [];
    document.querySelector('.input-name').value = '';
}

function actualizarAmigos(){
    let elementoLista = document.querySelector('.name-list');
    arregloNombres.forEach(elemento => {
    let item = document.createElement('li');
    item.textContent = elemento;
    elementoLista.appendChild(item);
    });

}



