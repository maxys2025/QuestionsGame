const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("question");
const randomQuestionButton = document.getElementById("randomQuestionButton");
let questions = [];

// Carica le domande dal file JSON
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data; // Assegna le domande caricate all'array
    })
    .catch(error => console.error('Errore nel caricamento delle domande:', error));

randomQuestionButton.addEventListener("click", () => {
    if (questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const selectedQuestion = questions[randomIndex].question;
        questionText.textContent = selectedQuestion;

        // Cambia colore del box
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        questionBox.style.backgroundColor = randomColor;
    } else {
        questionText.textContent = "Caricamento domande...";
    }
});
