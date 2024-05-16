// Elementos del DOM
const gameContainer = document.querySelector('.game-container');
const playButton = document.getElementById('game-button');
const configContainer = document.getElementById('config-container');
const configForm = document.getElementById('config-form');
const playerCountSelect = document.getElementById('player-count');
const roundsInput = document.getElementById('rounds');
const startGameButton = document.getElementById('start-game-button');

// Datos del juego
let players = [];
let currentPlayerIndex = 0; // Índice del jugador actual
let currentRound = 1; // Número de ronda actual

// Función para mostrar el contenedor de configuración al hacer clic en el botón "Play"
playButton.addEventListener('click', () => {
    gameContainer.style.pointerEvents = 'none'; // Deshabilita la interacción con el botón "Play"
    configContainer.style.display = 'block';
    setTimeout(() => {
        configContainer.classList.add('show'); // Agrega la clase 'show' después de un breve retraso para permitir la transición
    }, 10);
    playButton.classList.add('clicked');
});

// Escuchar el evento submit del formulario de configuración
configForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener los valores seleccionados
    const playerCount = parseInt(playerCountSelect.value);
    const rounds = parseInt(roundsInput.value);

    // Ocultar el contenedor de configuración
    configContainer.style.display = 'none';

    // Mostrar mensajes para que los jugadores ingresen sus nombres
    for (let i = 1; i <= playerCount; i++) {
        const playerName = prompt(`Ingresa el nombre del jugador ${i}:`);
        players.push({
            name: playerName || `Jugador ${i}`,
            correctAnswers: 0,
            incorrectAnswers: 0
        });
    }

    // Llamar a la función para mostrar la información de los jugadores
    displayPlayerInfo();

    // Imprimir los datos de configuración en la consola para verificar
    console.log('Número de jugadores:', playerCount);
    console.log('Número de rondas:', rounds);
    console.log('Jugadores:', players);
});

// Función para mostrar la información de los jugadores y la ronda
function displayPlayerInfo() {
    const playerInfoContainer = document.createElement('div');
    playerInfoContainer.classList.add('player-info-container');

    // Crear el elemento para mostrar la ronda
    const roundInfo = document.createElement('div');
    roundInfo.classList.add('round-info');
    roundInfo.textContent = `Ronda ${currentRound}`;
    playerInfoContainer.appendChild(roundInfo);

    // Crear elementos para cada jugador
    players.forEach((player, index) => {
        const playerElement = document.createElement('div');
        playerElement.classList.add('player-info');
        playerElement.textContent = `${player.name}: ${player.correctAnswers} correctas, ${player.incorrectAnswers} incorrectas`;
        playerInfoContainer.appendChild(playerElement);
    });

    // Agregar el contenedor de información de jugador al contenedor del juego
    gameContainer.appendChild(playerInfoContainer);

    // Mostrar el contenedor de información de jugador con una transición
    setTimeout(() => {
        playerInfoContainer.style.display = 'block';
        // Mostrar el botón de inicio del juego después de un breve retraso
        setTimeout(() => {
            startGameButton.style.display = 'block';
        }, 100);
    }, 100);
}

// Agregar un evento de clic al botón para iniciar el juego
startGameButton.addEventListener('click', () => {
    mostrarOpcionesTema();
});

// Función para mostrar las opciones de tema como botones
function mostrarOpcionesTema() {
    // Ocultar el botón "Start Game"
    startGameButton.style.display = 'none';

    // Crear contenedor para las opciones de tema
    const temaOptionsContainer = document.createElement('div');
    temaOptionsContainer.classList.add('tema-options');

    // Mostrar las opciones de temas disponibles como botones
    const temasDisponibles = ['Matemáticas', 'Inglés', 'Lengua y literatura', 'Biología', 'Química', 'Música', 'ECA', 'Cultura general', 'Historia'];
    temasDisponibles.forEach(tema => {
        const temaButton = document.createElement('button');
        temaButton.classList.add('tema-option');
        temaButton.textContent = tema;
        
        // Agregar el botón al contenedor de opciones de tema
        temaOptionsContainer.appendChild(temaButton);
    });

    // Agregar contenedor de opciones de tema al contenedor del juego
    gameContainer.appendChild(temaOptionsContainer);

    // Agregar un manejador de eventos de clic al contenedor de opciones de tema
    temaOptionsContainer.addEventListener('click', (event) => {
        const temaSeleccionado = event.target.textContent;
        if (temaSeleccionado) {
            // Seleccionar un tema aleatorio
            const preguntasTema = preguntasPredeterminadas.filter(pregunta => pregunta.tema === temaSeleccionado);
            const preguntaAleatoria = preguntasTema[Math.floor(Math.random() * preguntasTema.length)];

            // Ocultar el contenedor de las opciones de tema
        temaOptionsContainer.style.display = 'none';
        
            // Mostrar la pregunta aleatoria en la interfaz
            mostrarPregunta(preguntaAleatoria);

            // Eliminar las opciones de tema
            temaOptionsContainer.remove();
        }
    });
    
    // Crear un párrafo para indicar al usuario que seleccione el tema
    const instrucciones = document.createElement('p');
    instrucciones.textContent = 'Seleccione el tema de esta ronda';
    instrucciones.classList.add('instrucciones');
    
    // Agregar las instrucciones al contenedor de opciones de tema
    temaOptionsContainer.appendChild(instrucciones);

    // Agregar contenedor de opciones de tema al contenedor del juego
    gameContainer.appendChild(temaOptionsContainer);
}

// Preguntas predeterminadas
const preguntasPredeterminadas = [
    // Matemáticas
    {
        tema: 'Matemáticas',
        pregunta: '¿Cuál es el resultado de 2 + 2?',
        respuestas: ['3', '4', '5', '6', '7'],
        respuestaCorrecta: '4'
    },
    {
        tema: 'Matemáticas',
        pregunta: '¿Cuánto es 5 x 5?',
        respuestas: ['20', '25', '30', '35', '40'],
        respuestaCorrecta: '25'
    },
    {
        tema: 'Matemáticas',
        pregunta: '¿Cuál es la raíz cuadrada de 81?',
        respuestas: ['7', '8', '9', '10', '11'],
        respuestaCorrecta: '9'
    },
    {
        tema: 'Matemáticas',
        pregunta: '¿Cuál es el valor de π (pi)?',
        respuestas: ['3.14', '3.141', '3.1416', '3.14159', '3.141592'],
        respuestaCorrecta: '3.14159'
    },
    {
        tema: 'Matemáticas',
        pregunta: '¿Cuántos lados tiene un cuadrado?',
        respuestas: ['3', '4', '5', '6', '7'],
        respuestaCorrecta: '4'
    },

    // Inglés
    {
        tema: 'Inglés',
        pregunta: '¿Cuál es la palabra en inglés para "casa"?',
        respuestas: ['House', 'Car', 'Tree', 'Book', 'Apple'],
        respuestaCorrecta: 'House'
    },
    {
        tema: 'Inglés',
        pregunta: '¿Qué significa "dog" en inglés?',
        respuestas: ['Perro', 'Gato', 'Vaca', 'Pájaro', 'Oso'],
        respuestaCorrecta: 'Perro'
    },
    {
        tema: 'Inglés',
        pregunta: '¿Cuál es el pasado simple del verbo "to eat"?',
        respuestas: ['Eat', 'Eats', 'Ate', 'Eaten', 'Eating'],
        respuestaCorrecta: 'Ate'
    },
    {
        tema: 'Inglés',
        pregunta: '¿Cuál es la palabra en inglés para "rojo"?',
        respuestas: ['Red', 'Blue', 'Green', 'Yellow', 'Orange'],
        respuestaCorrecta: 'Red'
    },
    {
        tema: 'Inglés',
        pregunta: '¿Cuál es la traducción de "hello" al español?',
        respuestas: ['Hola', 'Adiós', 'Por favor', 'Gracias', 'Buenos días'],
        respuestaCorrecta: 'Hola'
    },

    // Lengua y literatura
    {
        tema: 'Lengua y literatura',
        pregunta: '¿Quién escribió "Don Quijote de la Mancha"?',
        respuestas: ['Miguel de Cervantes', 'Gabriel García Márquez', 'Pablo Neruda', 'Jorge Luis Borges', 'William Shakespeare'],
        respuestaCorrecta: 'Miguel de Cervantes'
    },
    {
        tema: 'Lengua y literatura',
        pregunta: '¿Cuál es el género literario de "Cien años de soledad"?',
        respuestas: ['Novela', 'Poesía', 'Teatro', 'Ensayo', 'Cuento'],
        respuestaCorrecta: 'Novela'
    },
    {
        tema: 'Lengua y literatura',
        pregunta: '¿Quién escribió "Romeo y Julieta"?',
        respuestas: ['William Shakespeare', 'Friedrich Nietzsche', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
        respuestaCorrecta: 'William Shakespeare'
    },
    {
        tema: 'Lengua y literatura',
        pregunta: '¿Cuál es el género literario de "La Odisea"?',
        respuestas: ['Épica', 'Tragedia', 'Comedia', 'Drama', 'Romance'],
        respuestaCorrecta: 'Épica'
    },
    {
        tema: 'Lengua y literatura',
        pregunta: '¿Quién escribió "El principito"?',
        respuestas: ['Antoine de Saint-Exupéry', 'Jorge Luis Borges', 'Julio Cortázar', 'Albert Camus', 'Franz Kafka'],
        respuestaCorrecta: 'Antoine de Saint-Exupéry'
    },

    // Biología
    {
        tema: 'Biología',
        pregunta: '¿Cuál es el órgano responsable de bombear sangre en el cuerpo humano?',
        respuestas: ['Corazón', 'Hígado', 'Riñón', 'Pulmón', 'Cerebro'],
        respuestaCorrecta: 'Corazón'
    },
    {
        tema: 'Biología',
        pregunta: '¿Cuál es la función principal de los pulmones?',
        respuestas: ['Respiración', 'Digestión', 'Circulación', 'Excreción', 'Reproducción'],
        respuestaCorrecta: 'Respiración'
    },
    {
        tema: 'Biología',
        pregunta: '¿Cuántos huesos tiene el cuerpo humano?',
        respuestas: ['206', '200', '300', '100', '400'],
        respuestaCorrecta: '206'
    },
    {
        tema: 'Biología',
        pregunta: '¿Qué parte del cuerpo humano es responsable de producir insulina?',
        respuestas: ['Páncreas', 'Hígado', 'Riñón', 'Estómago', 'Cerebro'],
        respuestaCorrecta: 'Páncreas'
    },
    {
        tema: 'Biología',
        pregunta: '¿Cuál es la unidad básica de la vida?',
        respuestas: ['Célula', 'Átomo', 'Molécula', 'Organelo', 'Proteína'],
        respuestaCorrecta: 'Célula'
    },

    // Química
    {
        tema: 'Química',
        pregunta: '¿Cuál es el símbolo químico del agua?',
        respuestas: ['H2O', 'CO2', 'O2', 'NaCl', 'HCl'],
        respuestaCorrecta: 'H2O'
    },
    {
        tema: 'Química',
        pregunta: '¿Qué gas es necesario para la combustión?',
        respuestas: ['Oxígeno', 'Nitrógeno', 'Dióxido de carbono', 'Hidrógeno', 'Helio'],
        respuestaCorrecta: 'Oxígeno'
    },
    {
        tema: 'Química',
        pregunta: '¿Cuál es el elemento más abundante en la corteza terrestre?',
        respuestas: ['Oxígeno', 'Carbono', 'Hierro', 'Aluminio', 'Silicio'],
        respuestaCorrecta: 'Oxígeno'
    },
    {
        tema: 'Química',
        pregunta: '¿Cuál es el pH del agua pura?',
        respuestas: ['7', '5', '8', '9', '6'],
        respuestaCorrecta: '7'
    },
    {
        tema: 'Química',
        pregunta: '¿Qué gas es conocido como "gas de la risa"?',
        respuestas: ['Óxido nitroso', 'Dióxido de carbono', 'Oxígeno', 'Hidrógeno', 'Helio'],
        respuestaCorrecta: 'Óxido nitroso'
    },

    // Música
    {
        tema: 'Música',
        pregunta: '¿Quién compuso la "Quinta sinfonía"?',
        respuestas: ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Franz Schubert', 'Pyotr Ilyich Tchaikovsky'],
        respuestaCorrecta: 'Ludwig van Beethoven'
    },
    {
        tema: 'Música',
        pregunta: '¿Cuál es el instrumento musical más grande de la orquesta?',
        respuestas: ['Contrabajo', 'Trombón', 'Tuba', 'Timbal', 'Corno'],
        respuestaCorrecta: 'Tuba'
    },
    {
        tema: 'Música',
        pregunta: '¿Cuál es el nombre del director de una orquesta?',
        respuestas: ['Director de orquesta', 'Conductor', 'Maestro', 'Músico', 'Director musical'],
        respuestaCorrecta: 'Director de orquesta'
    },
    {
        tema: 'Música',
        pregunta: '¿Cuál es la parte de una guitarra que produce el sonido amplificado?',
        respuestas: ['Cuerdas', 'Caja de resonancia', 'Trastes', 'Mástil', 'Pastillas'],
        respuestaCorrecta: 'Caja de resonancia'
    },
    {
        tema: 'Música',
        pregunta: '¿Cuál es el instrumento musical principal de una banda sinfónica?',
        respuestas: ['Flauta', 'Clarinete', 'Saxofón', 'Trompeta', 'Oboe'],
        respuestaCorrecta: 'Clarinete'
    },

    // ECA (Educación Cívica y Aprovechamiento del Tiempo Libre)
    {
        tema: 'ECA',
        pregunta: '¿Cuál es el objetivo principal de la educación cívica?',
        respuestas: ['Formar ciudadanos responsables', 'Enseñar matemáticas', 'Promover el deporte', 'Desarrollar habilidades artísticas', 'Prevenir la contaminación'],
        respuestaCorrecta: 'Formar ciudadanos responsables'
    },
    {
        tema: 'ECA',
        pregunta: '¿Cuál de las siguientes actividades fomenta la convivencia y el trabajo en equipo?',
        respuestas: ['Jugar fútbol', 'Leer un libro', 'Escuchar música', 'Pintar un cuadro', 'Realizar un proyecto grupal'],
        respuestaCorrecta: 'Realizar un proyecto grupal'
    },
    {
        tema: 'ECA',
        pregunta: '¿Qué significa la sigla "ECA"?',
        respuestas: ['Educación Cívica y Aprovechamiento del Tiempo Libre', 'Educación Continua y Aprendizaje', 'Estudio de las Ciencias Aplicadas', 'Escuela de Ciencias Ambientales', 'Espacio de Creación Artística'],
        respuestaCorrecta: 'Educación Cívica y Aprovechamiento del Tiempo Libre'
    },
    {
        tema: 'ECA',
        pregunta: '¿Cuál es la importancia del respeto en la convivencia social?',
        respuestas: ['Favorece la armonía y la paz', 'Genera competencia', 'Estimula la agresión', 'Fomenta la indiferencia', 'Crea desconfianza'],
        respuestaCorrecta: 'Favorece la armonía y la paz'
    },
    {
        tema: 'ECA',
        pregunta: '¿Qué se entiende por "aprovechamiento del tiempo libre"?',
        respuestas: ['Realizar actividades recreativas y culturales de forma productiva', 'Dedicar tiempo exclusivamente al trabajo', 'No hacer nada en particular', 'Perder el tiempo', 'Dedicarse al estudio todo el tiempo'],
        respuestaCorrecta: 'Realizar actividades recreativas y culturales de forma productiva'
    },

    // Cultura general
    {
        tema: 'Cultura general',
        pregunta: '¿Dónde se encuentra la Torre Eiffel?',
        respuestas: ['París, Francia', 'Londres, Reino Unido', 'Roma, Italia', 'Madrid, España', 'Berlín, Alemania'],
        respuestaCorrecta: 'París, Francia'
    },
    {
        tema: 'Cultura general',
        pregunta: '¿Cuál es la capital de Japón?',
        respuestas: ['Tokio', 'Pekín', 'Seúl', 'Bangkok', 'Singapur'],
        respuestaCorrecta: 'Tokio'
    },
    {
        tema: 'Cultura general',
        pregunta: '¿Quién pintó la Mona Lisa?',
        respuestas: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet', 'Salvador Dalí'],
        respuestaCorrecta: 'Leonardo da Vinci'
    },
    {
        tema: 'Cultura general',
        pregunta: '¿En qué país se encuentra la Gran Barrera de Coral?',
        respuestas: ['Australia', 'Brasil', 'México', 'Canadá', 'Egipto'],
        respuestaCorrecta: 'Australia'
    },
    {
        tema: 'Cultura general',
        pregunta: '¿Quién escribió la obra "Romeo y Julieta"?',
        respuestas: ['William Shakespeare', 'Miguel de Cervantes', 'Friedrich Nietzsche', 'Gabriel García Márquez', 'Jorge Luis Borges'],
        respuestaCorrecta: 'William Shakespeare'
    },

    // Historia
    {
        tema: 'Historia',
        pregunta: '¿Quién fue el primer presidente de los Estados Unidos?',
        respuestas: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John F. Kennedy', 'Bill Clinton'],
        respuestaCorrecta: 'George Washington'
    },
    {
        tema: 'Historia',
        pregunta: '¿En qué año comenzó la Primera Guerra Mundial?',
        respuestas: ['1914', '1918', '1939', '1945', '1879'],
        respuestaCorrecta: '1914'
    },
    {
        tema: 'Historia',
        pregunta: '¿Cuál fue la civilización que construyó las pirámides de Giza?',
        respuestas: ['Egipto', 'Grecia', 'Roma', 'China', 'India'],
        respuestaCorrecta: 'Egipto'
    },
    {
        tema: 'Historia',
        pregunta: '¿Quién fue el líder de la Revolución Rusa de 1917?',
        respuestas: ['Vladimir Lenin', 'Joseph Stalin', 'Leon Trotsky', 'Mikhail Gorbachev', 'Nikita Khrushchev'],
        respuestaCorrecta: 'Vladimir Lenin'
    },
    {
        tema: 'Historia',
        pregunta: '¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?',
        respuestas: ['1776', '1789', '1804', '1821', '1865'],
        respuestaCorrecta: '1776'
    }
];
