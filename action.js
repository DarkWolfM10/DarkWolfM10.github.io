// Definición de preguntas por tema
const preguntas = {
    matematica: [
        "¿Cuánto es 2 + 2?",
        "¿Cuál es la fórmula para calcular el área de un círculo?",
        // Agrega más preguntas de matemática aquí
    ],
    biologia: [
        "¿Qué es la mitosis?",
        "¿Cuál es la función de los glóbulos rojos?",
        // Agrega más preguntas de biología aquí
    ],
    quimica: [
        "¿Cuál es la tabla periódica de los elementos químicos?",
        "¿Cuál es el símbolo químico del agua?",
        // Agrega más preguntas de química aquí
    ],
    lengua: [
        "¿Qué es un adjetivo?",
        "¿Quién escribió 'Don Quijote de la Mancha'?",
        // Agrega más preguntas de lengua y literatura aquí
    ],
    musica: [
        "¿Qué es un acorde?",
        "¿Quién compuso la 'Sinfonía n.º 9'?",
        // Agrega más preguntas de música aquí
    ],
    eca: [
        "¿Qué significa ECA?",
        "¿Cuál es la importancia del arte en la sociedad?",
        // Agrega más preguntas de ECA aquí
    ],
    cultura: [
        "¿Cuál es la capital de Francia?",
        "¿Qué es la Mona Lisa?",
        // Agrega más preguntas de cultura general aquí
    ],
    historia: [
        "¿Cuál fue la primera civilización conocida?",
        "¿Quién fue el primer presidente de Estados Unidos?",
        // Agrega más preguntas de historia aquí
    ]
};

// Función para cargar las preguntas según la temática seleccionada
function cargarPreguntas() {
    const temaSeleccionado = document.getElementById("theme").value;
    const preguntasContainer = document.getElementById("questions");
    preguntasContainer.innerHTML = ""; // Limpiar las preguntas anteriores

    // Obtener las preguntas del tema seleccionado
    const preguntasTema = preguntas[temaSeleccionado];

    // Agregar las preguntas al contenedor
    preguntasTema.forEach((pregunta, index) => {
        const preguntaElement = document.createElement("p");
        preguntaElement.textContent = `Pregunta ${index + 1}: ${pregunta}`;
        preguntasContainer.appendChild(preguntaElement);
    });
}

// Listener para el cambio en la selección del tema
document.getElementById("theme").addEventListener("change", cargarPreguntas);

// Cargar las preguntas por defecto al cargar la página
cargarPreguntas();

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
