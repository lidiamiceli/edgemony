//Esercizio1
//seleziona l'elemento con id "heading"
const headingElement = document.querySelector('#heading');

//stampa l'elemento nel console log
console.log(headingElement);


// Seleziona tutti gli elementi button nella pagina
const buttonEls = document.querySelectorAll('button');

const scriptEls = document.body.querySelectorAll('script');

// itera attraverso ogni elemento button
for (const button of buttonEls) {
    // stampa il testo del button nel console log
    console.log(button.textContent);
}

//Esercizio2
// seleziona il pulsante con id "resetBtn" e salva nella variabile resetBtn
const resetBtn = document.getElementById('resetBtn');
        
// Seleziona il pulsante con id "clickBtn" e salva nella variabile clickBtn
const clickBtn = document.getElementById('clickBtn');


console.log(resetBtn);
console.log(clickBtn);

//
        
// aggiungo un evento onclick al pulsante clickBtn
clickBtn.onclick = function() {
    // il valore attuale di innerHTML
    let currentValue = clickBtn.innerHTML;
    
    // converto il valore a numero, se NaN portalo a 0
    let numericValue = parseInt(currentValue, 10);
    if (isNaN(numericValue)) {
        numericValue = 0;
    }
    
    // incrementa il valore precedente
    numericValue++;
    
    // salva il nuovo valore in innerHTML
    clickBtn.innerHTML = numericValue;
};

//
 // aggiungi un evento onclick al pulsante resetBtn
 resetBtn.onclick = function() {
    
    // imposto innerHTML di clickBtn a "0"
    clickBtn.innerHTML = "0";
};

// aggiungo un evento onclick al pulsante clickBtn
clickBtn.onclick = function() {

    // leggo il valore attuale di innerHTML
    let currentValue = clickBtn.innerHTML;
    
    // converto il valore a numero, se NaN portalo a 0
    let numericValue = parseInt(currentValue, 10);
    if (isNaN(numericValue)) {
        numericValue = 0;
    }
    
    // incremento il valore precedente
    numericValue++;
    
    // salvo il nuovo valore in innerHTML
    clickBtn.innerHTML = numericValue;
};

//lezione 24
//reset della pagina

const containerEl = query ('container');
containerEl.remove();

const appEl = document.querySelector('#app');


//questo sostituisce tutto, vorrei aggiungere solo degli elementi mantenendo quelli di prima
//appEl.innerHTML = `<div>
//<h1> Ecco la mia pagina </h1>
//</div>`;

appEl.insertAdjacentHTML('afterbegin', `
<div>
  <h1>Ecco la pagina</h1>
  <p> ciao </p>
  </div>
  `);

  consth1El = appEl.querySelector  ('h1');

  h1El.style.fontSize= '1.5rem';

  //creare un elemento da 0
  const newH2El = document.createElement ('h2');
  newH2El.classname = 'text-big';

  h1El.insertAdjacentElement('afterend', newH2El);

    h1El.append(newH2El);

  newH2El.onclick = function(){
    console.log(this.innerHTML);
  }

  //Form

  const FormEl = document.querySelector('form');
  const inputEl = document.querySelector ('input');

  let nome= '';

  inputEl.oninput = function(){
    console.log('stai digitando', this.value);
    nome = this.value;
    preview.innerHTML = nome.toUpperCase() + '' + cognome;
  }


