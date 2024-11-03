let questions = [];

// Definisci i colori per le categorie
const categoryColors = {
    "Passato e ricordi": "#FFDDC1",  // Colore chiaro
    "Valori e credenze": "#C1E1FF",  // Colore azzurro
    "Stili di vita e preferenze": "#C1FFD5",  // Colore verde chiaro
    "Sogni e obiettivi": "#FFC1C1",  // Colore rosa chiaro
    "Sesso e intimità": "#E1C1FF"  // Colore lavanda
};

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
    const container = document.getElementById('container');
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    
    categoryBox.innerText = selectedQuestion.category; // Mostra la categoria
    questionBox.innerText = selectedQuestion.question; // Mostra la domanda
    
    // Cambia il colore del box in base alla categoria
    container.style.backgroundColor = categoryColors[selectedQuestion.category] || "#FFFFFF"; // Colore di default bianco
}

// Aggiungi un evento al pulsante
document.getElementById('random-button').addEventListener('click', displayRandomQuestion);
