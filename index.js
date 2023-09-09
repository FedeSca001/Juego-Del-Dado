// Seleccionar elementos del DOM
const CajaDado = document.querySelector('.cajaDado');
const btn = document.querySelector('.btnGenerar');
const numerosForm = document.getElementById('numerosForm');
const cantidadDeIntentos = document.querySelector('.cantintentos');
let numero = 0;

// Agregar evento al botón
btn.addEventListener('click', () => {
    // Obtener el número seleccionado por el usuario
    const numeroSeleccionado = document.querySelector('input[name="numeros"]:checked');

    // Verificar si se ha seleccionado un número
    if (!numeroSeleccionado) {
        CajaDado.innerHTML = '<p class="mensaje">Por favor, selecciona un número antes de generar.</p>';
        return;
    }

    // Autorizacion del contador de cantidades
    console.log(Number(cantidadDeIntentos.textContent));
    if (Number(cantidadDeIntentos.textContent) === 0) {
        // cancelar boton
        CajaDado.innerHTML = '<p class="mensaje">Ya se agotaron los intentos</p>';
        return
    }

    // Disminuir la cantidad de intentos en la interfaz
    cantidadDeIntentos.innerHTML = Number(cantidadDeIntentos.textContent) - 1;


    // Convertir el número seleccionado a entero
    let numeroSelect = parseInt(numeroSeleccionado.value, 10);

    // Generar un número aleatorio
    numero = Math.floor(Math.random() * 6) + 1;

// Función para mostrar la animación de los dados
const mostrarDado = () => {
    let i = 1;
    const interval = setInterval(() => {
        if (i < 7) {
            // Mostrar una imagen del dado con un mensaje de espera
            CajaDado.innerHTML = `<img src="./img/${numero}.png" class="imgDado" alt="dado${numero}">`;
            CajaDado.innerHTML += '<p class="mensaje">Espere...</p>';
            numero = Math.floor(Math.random() * 6) + 1;
            i++;
        } else {
            clearInterval(interval); // Detener la animación
            numero = Math.floor(Math.random() * 6) + 1;
            // Mostrar el resultado después de 3 segundos
            setTimeout(() => {
                if (numeroSelect === numero) {
                    // Mostrar imagen y mensaje de "Ganaste"
                    CajaDado.innerHTML = `<img src="./img/${numero}.png" class="imgDado" alt="dado${numero}">`;
                    CajaDado.innerHTML += '<p class="mensaje">Ganaste</p>';
                } else {
                    // Mostrar imagen y mensaje de "Sigue participando"
                    CajaDado.innerHTML = `<img src="./img/${numero}.png" class="imgDado" alt="dado${numero}">`;
                    CajaDado.innerHTML += '<p class="mensaje">Sigue participando</p>';
                }
            }, 300);
        }
    }, 200); // Esperar 0.2 segundos entre cada número
};

    // Comenzar la animación de los dados
    mostrarDado(1);
});
