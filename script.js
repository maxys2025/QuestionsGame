let questions = [];

// Carica il file JSON
fetch('questions.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        questions = data;
        displayRandomQuestion();
    })
    .catch(error => console.error('Errore nel caricamento delle domande:', error));

// Funzione per visualizzare una domanda casuale
function displayRandomQuestion() {
    if (questions.length === 0) {
        document.getElementById('question').innerText = "Nessuna domanda disponibile.";
        return;
    }
    
    const questionBox = document.getElementById('question');
    const categoryBox = document.getElementById('category');
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    
    categoryBox.innerText = selectedQuestion.category; // Mostra la categoria
    questionBox.innerText = selectedQuestion.question; // Mostra la domanda
}

// Aggiungi un evento al pulsante
document.getElementById('random-button').addEventListener('click', displayRandomQuestion);
