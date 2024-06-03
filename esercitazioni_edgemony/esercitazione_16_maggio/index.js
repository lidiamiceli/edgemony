//esercizio1
//variabile score con punteggio di partenza
let score = 0;
//variabile dove salviamo la prima risposta
let answer1 = prompt('Quanto fa 4+4?: 8,9,7,5');

//primo switch sulla prima domanda
//nel primo caso mettiamo la risposta esatta dove darà 1pt
//il default invece considera tutte le altre risposte sbagliate assegnando -1pt
switch (answer1) {
        case "8":
        score += 1;
        break;
        default:
            score -= 1;
}

let answer2 = prompt('Qual è la capitale della Francia? : Parigi, Roma, Barcellona, Bruxelles');

switch (answer2) {
        case "Francia":
        score += 1;
        break;
        default:
            score -= 1;
}

let answer3 = prompt('Chi ha dipinto la Gioconda?: Leonardo Da Vinci, Raffaello, Caravaggio, Michelangelo');

switch (answer3) {
        case "Leonardo Da Vinci":
        score += 1;
        break;
        default:
            score -= 1;
}

let answer4 = prompt('Qual è il simbolo del Magnesio?: Mg, Mn, Ms, Ma');

switch (answer4) {
        case "Mg":
        score += 1;
        break;
        default:
            score -= 1;
}


// esercizio 2
//dichiaro variabile 
let firstWord = prompt ('INSERISCI UNA PAROLA');
//dichiaro variabile contenenti le vocali
let vowels = 'aeiou';
//dichiaro variabile dove chiede se la prima lettera della variabile è una vocale o una consonante
//nella ariabile vowels
let firstLetter = firstWord [0];
let isVocal = vowels.includes(firstLetter);
//dichiaro variabile risultato dove chiedo se la prima lettera è una vocale o consonante
//il messaggio lo otteniamo con il console.log 
let isVocalOrCons = (isVocal) ? 'vocale' : 'consonante';
alert(`${isVocalOrCons}`);
console.log(isVocalOrCons);

let secondWord = prompt ('INSERISCI UNA PAROLA');
firstLetter = secondWord [0];
isVocal = vowels.includes(firstLetter);
isVocalOrCons = (isVocal) ? 'vocale' : 'consonante';
alert(`${isVocalOrCons}`);
console.log(isVocalOrCons);

let thirdWord = prompt ('INSERISCI UNA PAROLA');
firstLetter = thirdWord [0];
isVocal = vowels.includes(firstLetter);
isVocalOrCons = (isVocal) ? 'vocale' : 'consonante';
alert(`${isVocalOrCons}`);
console.log(isVocalOrCons);

//esercizio3
//dichiaro una variabile
const string = "lidia";
console.log(string);
//dichiaro una seconda variabile dove viene utilizzato lo split nella prima variabile
//per separare le lettere mettiamo una stringa vuota (' ')
const stringSplit = string.split ('');
console.log(stringSplit);
//in stringSplit ci sarà un array con le lettere separate
const reversString = stringSplit.reverse();
console.log(reversString);

