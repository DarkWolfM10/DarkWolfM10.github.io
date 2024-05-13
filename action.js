// Obtenemos el botón de "Play" y le añadimos un event listener para detectar clics
document.getElementById("game-button").addEventListener("click", function() {
    // Llamamos a la función de personalización del juego
    personalizarJuego();
});

// Función de personalización del juego
function personalizarJuego() {
    // Solicitar al usuario el número de jugadores y almacenar la información
    var numJugadores = prompt("Ingresa el número de jugadores (entre 2 y 5):");
    
    // Validar que el número de jugadores esté dentro del rango establecido
    if (numJugadores >= 2 && numJugadores <= 5) {
        // Creamos un array para almacenar la información de los jugadores
        var jugadores = [];

        // Iteramos para solicitar el nombre de cada jugador
        for (var i = 1; i <= numJugadores; i++) {
            var nombre = prompt("Ingresa el nombre del jugador " + i + ":");
            // Almacenamos el nombre en el array de jugadores
            jugadores.push(nombre);
        }

        // Mostramos los jugadores en pantalla
        mostrarJugadores(jugadores);
    } else {
        // Si el número de jugadores no está dentro del rango, mostramos un mensaje de error
        alert("Número de jugadores no válido. Por favor, ingresa un número entre 2 y 5.");
    }
}

// Función para mostrar los jugadores en pantalla
function mostrarJugadores(jugadores) {
    // Obtenemos el elemento donde mostraremos los jugadores
    var jugadoresElement = document.getElementById("jugadores");

    // Limpiamos el contenido previo en caso de que hubiera
    jugadoresElement.innerHTML = "";

    // Iteramos sobre el array de jugadores para crear elementos y mostrarlos en pantalla
    jugadores.forEach(function(jugador) {
        var jugadorElement = document.createElement("p");
        jugadorElement.textContent = jugador;
        jugadoresElement.appendChild(jugadorElement);
    });
}

// Event listener para el botón de confirmar temática
document.getElementById("tematica-button").addEventListener("click", function() {
    // Obtenemos la temática seleccionada
    var tematica = document.getElementById("tematica-select").value;

    // Aquí puedes hacer lo que necesites con la temática seleccionada
    // Por ahora, simplemente la mostraremos en la consola
    console.log("Temática seleccionada:", tematica);
});