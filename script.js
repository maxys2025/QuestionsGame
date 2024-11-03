let questions = [];

// Carica il file JSON
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        displayRandomQuestion();
    })
    .catch(error => console.error('Errore nel caricamento delle domande:', error));

// Funzione per visualizzare una domanda casuale
function displayRandomQuestion() {
    const questionBox = document.getElementById('question');
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionBox.innerText = questions[randomIndex].question; // Assicurati che il tuo JSON abbia questa struttura
}

// Aggiungi un evento al pulsante
document.getElementById('random-button').addEventListener('click', displayRandomQuestion);
