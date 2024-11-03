document.addEventListener('DOMContentLoaded', () => {
    const domandaElement = document.getElementById('domanda');
    const categoriaElement = document.getElementById('categoria');
    const button = document.getElementById('button');
    
    let domande = [];

    // Carica il file JSON
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            domande = data;
            // Seleziona una domanda casuale all'inizio
            scegliDomandaCasuale();
        })
        .catch(error => console.error('Errore nel caricamento del file JSON:', error));

    // Funzione per scegliere una domanda casuale
    function scegliDomandaCasuale() {
        const indiceCasuale = Math.floor(Math.random() * domande.length);
        const domandaSelezionata = domande[indiceCasuale];

        // Aggiorna il contenuto e i colori
        domandaElement.textContent = domandaSelezionata.text;
        categoriaElement.textContent = domandaSelezionata.category;
        document.body.style.backgroundColor = domandaSelezionata.backgroundColor;
        domandaElement.style.color = domandaSelezionata.textColor;
        categoriaElement.style.color = domandaSelezionata.textColor;
    }

    // Event listener per il pulsante
    button.addEventListener('click', scegliDomandaCasuale);
});
