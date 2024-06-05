//CREAZIONE ELEMENTI
    document.body.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    // creo un nuovo elemento h1
    const newH1 = document.createElement('h1');
    newH1.textContent = 'Benvenuti nel mio mondo';

    // inserisco il nuovo h1 prima del contenuto del container
    container.insertAdjacentElement('afterbegin', newH1);

    // creo un nuovo elemento p
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Hey ciao. Benvenuto nel mio blog. Sono Lidia';

    // aggiungo il nuovo paragrafo alla fine del container
    container.append(newParagraph);
});


//BUTTON CONTATORE DINAMICO

    document.body.addEventListener('DOMContentLoaded', function() {
    const container = document.body.getElementById('container');

    // seleziono il paragrafo esistente
    const paragraph = container.querySelector('p');

    // crea un nuovo elemento button
    const newButton = document.body.createElement('btt');
    newButton.textContent = '0';

    // aggiungo il bottone dopo il paragrafo
    paragraph.insertAdjacentElement('afterend', newButton);

    // cambio lo stile del bottone
    newButton.onmouseenter = function() {
        newButton.style.backgroundColor = 'lightblue';
        newButton.style.color = 'white';
        newButton.style.border = '2px solid darkblue';
    };

    // riprisrtno lo stile originale
    newButton.onmouseleave = function() {
        newButton.style.backgroundColor = '';
        newButton.style.color = '';
        newButton.style.border = '';
    };

    //  incremento il numero nel bottone
    newButton.onclick = function() {
        let currentNumber = parseInt(newButton.textContent);
        newButton.textContent = currentNumber + 2;
    };
});




//LISTA DI NOMI
// seleziono gli elementi del form e dell'input
const formEl = document.getElementById('myForm');
const inputEl = document.getElementById('myInput');
const listEl = document.querySelector('.list');

formEl.onsubmit = function(event) {
    event.preventDefault();

    const inputValue = inputEl.value;

    // controllo che sia una stringa valida e che abbia almeno uno spazio
    if (typeof inputValue === 'string' && inputValue.includes(' ')) {
        // creo un nuovo elemento
        const newItem = document.createElement('div');
        newItem.textContent = inputValue;
        newItem.classList.add('list-item'); 

        // aggiungo una funzione al onclick del nuovo elemento
        newItem.onclick = function() {
            console.log(`Hai cliccato su: ${newItem.textContent}`);
        };

        // inserisco il nuovo elemento dentro l'elemento .list
        listEl.append(newItem);

        inputEl.value = '';
    } else {
        alert('Il testo deve essere una stringa valida con almeno uno spazio.');
    }
};
