let questions = [];
let currentQuestionIndex = 0;

async function loadQuestions() {
    try {
        const response = await fetch('questions.json'); // Carica il file JSON
        questions = await response.json();
        displayQuestion(); // Mostra la prima domanda
    } catch (error) {
        console.error('Errore nel caricamento delle domande:', error);
    }
}

function displayQuestion() {
    if (questions.length > 0) {
        const questionBox = document.getElementById('question-box');
        const question = questions[currentQuestionIndex];
        
        questionBox.textContent = question.text;

        // Cambia colore del box in base al tipo
        if (question.type === "personal") {
            questionBox.style.backgroundColor = "#FFD700"; // Giallo per le domande personali
        } else if (question.type === "general") {
            questionBox.style.backgroundColor = "#ADD8E6"; // Azzurro per le domande generali
        } else {
            questionBox.style.backgroundColor = "#f0f0f0"; // Colore di default
        }
    }
}

document.getElementById('next-question-btn').addEventListener('click', () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Cicla le domande
    displayQuestion();
});

loadQuestions(); // Inizia caricando le domande
