//esercizio1
function clear() {
    console.clear();
}

console.log('funzione');
clear(); //cancello la console

//esercizio2

//controllo se l'input è una stringa vuota
function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return '';
    }
    //utilizzo charAt(0) per ottenere il primo carattere della stringa e lo converto in maiuscolo 
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); // slice(1) per ottenere il resto della stringa a partire dal secondo carattere e lo converto in minuscolo
}

console.log(capitalize('ciao')); 
console.log(capitalize('mondo')); 
console.log(capitalize('Mondo')); 
console.log(capitalize('TEST'));   



//esercizio3
let number1 = Number(prompt("insert a number"));
let number2 = Number(prompt('insert another number'));


function numberMin(number1, number2) {
    //verifico se i parametri sono numeri. se uno dei due parametri non è un numero restituisce un messaggio di errore
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        console.log ('inserisci valori validi. entrambi devono essere numeri')
    }
    if(number1<number2){
        return number1;

    } else{
        return number2;
    }
}

console.log("il numero minore tra i due inseriti è:" , numberMin(number1, number2));

//esercizio4
function potenza(base, esponente) {
    let risultato = 1;
    for (let i = 0; i < esponente; i++) {
        risultato *= base;
    }
    return risultato;
}

console.log(potenza(4, 2));    // output: 16
console.log(potenza(5, 3));    // output: 125
console.log(potenza(1, 100));  // output: 1


//lezione 22/05
//possiamo scrivere una function in fondo al file ed usarla su
//hoisting: la capacità di js di portare in cim al file le dichiarazioni di var/functions
function checkType(input, type){
    if(type of input === type){
        return true;
    }

    throw new Error(`{$input} deve essere di tipo ${type}`);
    return false;
}

clear()

//Approfondimento Functions

//possiamo salvare una "funzione anonima" dentro una variabile
const funct = function(){
    console.log('funzione anonima');
}

console.log(funct); //log della variabile che ha dentro una function

funct(); // invocando la function dentro la mia variabile

//self calling function
(function(){

    console.log(string);
    const funct = 'ciao';
    console.log('funct', funct);

    console.log('funzione anonima');

})(); //invocando una function dentro la mia variabile

//arguments
//(funtion(){

    function log (){
        
        console.log(arguments);

        const messages = Array.from(arguments); //array from converte un iterabile ad array
        console.log(messages.join(''));
    }

    console.log('ciao', 'mondo', '!');
    log('ciao', 'mondo', '!');

//})();

function sum(a, b, c){

    return a+ b + c;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))
