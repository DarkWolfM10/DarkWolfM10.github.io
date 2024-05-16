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
        pregunta: '¿Cuál es el instrumento principal en una banda de jazz?',
        respuestas: ['Saxofón', 'Trompeta', 'Piano', 'Bajo', 'Batería'],
        respuestaCorrecta: 'Saxofón'
    },
];

let currentQuestionIndex = 0;
let currentTopic = "";

gameButton.addEventListener("click", () => {
    configContainer.style.display = "block";
});

configForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(configForm);
    const selectedTopic = formData.get("topic");
    const numQuestions = formData.get("numQuestions");
    startGame(selectedTopic, numQuestions);
});

function startGame(topic, numQuestions) {
    currentQuestionIndex = 0;
    currentTopic = topic;
    gameContainer.innerHTML = "";
    configContainer.style.display = "none";
    playerInfoContainer.style.display = "block";

    const shuffledQuestions = shuffle(questions[topic]).slice(0, numQuestions);

    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            <li><button class="answer-btn" data-answer="a">${question.answers.a}</button></li>
            <li><button class="answer-btn" data-answer="b">${question.answers.b}</button></li>
            <li><button class="answer-btn" data-answer="c">${question.answers.c}</button></li>
        </ul>
    `;
    gameContainer.appendChild(questionElement);

    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", () => {
            checkAnswer(question, button.dataset.answer);
        });
    });
}

function checkAnswer(question, selectedAnswer) {
    const correctAnswer = question.correctAnswer;
    const feedbackElement = document.createElement("p");
    if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = "¡Respuesta correcta!";
    } else {
        feedbackElement.textContent = "Respuesta incorrecta. La respuesta correcta es: " + question.answers[correctAnswer];
    }
    gameContainer.appendChild(feedbackElement);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTopic].length) {
        setTimeout(() => {
            gameContainer.removeChild(feedbackElement);
            showQuestion(questions[currentTopic][currentQuestionIndex]);
        }, 1500);
    } else {
        setTimeout(() => {
            endGame();
        }, 1500);
    }
}

function endGame() {
    gameContainer.innerHTML = "";
    const endMessage = document.createElement("p");
    endMessage.textContent = "¡Fin del juego!";
    gameContainer.appendChild(endMessage);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
;

// Función para seleccionar preguntas aleatorias
function seleccionarPreguntasAleatorias(cantidadPreguntas) {
    const preguntasAleatorias = [];
    const copiaPreguntas = preguntasPredeterminadas.slice(); // Copia las preguntas predeterminadas para no modificar el original

    for (let i = 0; i < cantidadPreguntas; i++) {
        const index = Math.floor(Math.random() * copiaPreguntas.length);
        preguntasAleatorias.push(copiaPreguntas[index]);
        copiaPreguntas.splice(index, 1); // Elimina la pregunta seleccionada para no repetirla
    }

    return preguntasAleatorias;
}

// Función para mostrar opciones de tema al inicio del juego
function mostrarOpcionesTema() {
    gameContainer.innerHTML = ''; // Limpiar el contenedor del juego

    const themeOptionsContainer = document.createElement('div');
    themeOptionsContainer.classList.add('theme-options-container');

    const themes = obtenerTemasDisponibles();

    themes.forEach((theme) => {
        const themeButton = document.createElement('button');
        themeButton.textContent = theme;
        themeButton.classList.add('theme-option');
        themeButton.addEventListener('click', () => {
            comenzarRonda(theme);
        });
        themeOptionsContainer.appendChild(themeButton);
    });

    gameContainer.appendChild(themeOptionsContainer);
}

// Función para obtener una lista de temas disponibles
function obtenerTemasDisponibles() {
    const temas = new Set();
    preguntasPredeterminadas.forEach((pregunta) => {
        temas.add(pregunta.tema);
    });
    return Array.from(temas);
}

// Función para comenzar una nueva ronda con un tema específico
function comenzarRonda(theme) {
    gameContainer.innerHTML = ''; // Limpiar el contenedor del juego

    const preguntasTema = preguntasPredeterminadas.filter((pregunta) => pregunta.tema === theme);
    const preguntasAleatorias = seleccionarPreguntasAleatorias(3); // Seleccionar 3 preguntas aleatorias

    preguntasAleatorias.forEach((pregunta, index) => {
        const preguntaElement = document.createElement('div');
        preguntaElement.classList.add('question');
        preguntaElement.innerHTML = `
            <div class="question-header">${index + 1}. ${pregunta.pregunta}</div>
            <div class="answers">
                ${pregunta.respuestas.map((respuesta) => `
                    <button class="answer">${respuesta}</button>
                `).join('')}
            </div>
        `;

        // Agregar evento de clic a cada respuesta
        preguntaElement.querySelectorAll('.answer').forEach((button) => {
            button.addEventListener('click', () => {
                verificarRespuesta(pregunta, button.textContent);
            });
        });

        gameContainer.appendChild(preguntaElement);
    });
}

// Función para verificar si una respuesta es correcta
function verificarRespuesta(pregunta, respuestaSeleccionada) {
    const respuestaCorrecta = pregunta.respuestaCorrecta;

    if (respuestaSeleccionada === respuestaCorrecta) {
        players[currentPlayerIndex].correctAnswers++;
        alert('Respuesta correcta!');
    } else {
        players[currentPlayerIndex].incorrectAnswers++;
        alert(`Respuesta incorrecta. La respuesta correcta es: ${respuestaCorrecta}`);
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length; // Pasar al siguiente jugador
    if (currentPlayerIndex === 0) {
        currentRound++; // Incrementar el número de ronda cuando todos los jugadores hayan respondido
    }

    if (currentRound <= parseInt(roundsInput.value)) {
        // Si quedan rondas, mostrar la información actualizada de los jugadores y continuar con la siguiente ronda
        displayPlayerInfo();
    } else {
        // Si se completaron todas las rondas, mostrar el resultado final
        mostrarResultadoFinal();
    }
}

// Función para mostrar el resultado final del juego
function mostrarResultadoFinal() {
    gameContainer.innerHTML = ''; // Limpiar el contenedor del juego

    const resultadoFinalContainer = document.createElement('div');
    resultadoFinalContainer.classList.add('final-result-container');

    const resultadosTitulo = document.createElement('h2');
    resultadosTitulo.textContent = 'Resultados finales';
    resultadoFinalContainer.appendChild(resultadosTitulo);

    players.forEach((player) => {
        const playerResult = document.createElement('div');
        playerResult.textContent = `${player.name}: ${player.correctAnswers} respuestas correctas, ${player.incorrectAnswers} respuestas incorrectas`;
        resultadoFinalContainer.appendChild(playerResult);
    });

    gameContainer.appendChild(resultadoFinalContainer);
}
