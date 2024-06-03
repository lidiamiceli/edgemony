//esercizio1
const coder = {
    firstName: 'Luca', 
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

for (const skill of coder.skills) {
    console.log(skill);
}


//esercizio2
//chiedo all'utente di inserire country e street tramite prompt
const country = prompt('Insert your country:');
const street = prompt('Insert your street:');


//esercizio3
//aggiungo le proprietà all'obj coder.address
coder.address.country = country;
coder.address.street = street;

//quando vogliamo cambiare un valore che esiste
coder.address.city= 'Palermo';

console.log(coder);


//esercizio4
//dichiaro variabile con tutte le chiavi nel mio obj coder
const keys = Object.keys(coder);

//stampo ogni chiave presente nel mio obj
for (const key of keys) {
    console.log(`"${key}"`);
}


//esercizio5
//controllo se la prima lettera è una vocale
function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
}

for (const key of Object.keys(coder)) {
    if (isVowel(key[0])) {
        console.log(`${key}: ${coder[key]}`);
    }
}


//esercizio6
//chiedo all'utente di inserire la chiave e il valore tramite prompt
const key = prompt("Insert more info you want to share:");
const value = prompt("Insert yours" + key + ":");

//aggiungi la nuova proprietà all'obj coder
coder[key] = value;

//stampa l'obj coder per verificare che tutto sia corretto
console.log(coder);


//lezione21maggio

//functions
//servono a definire porzioni di codice eseguibile. 
//si possono riusare quante volte di vuole:

// keyword function che identifica il costrutto
// nome della funzione
// spazio dedicato ai parametri : dati che possiamo passare alla funzione che saranno disponibili al suo interno
//corpo della function messo tra {}
// "return" da alla function la possibilità di tornare un dato usabile da altre parti
function sum(a, b){
   const result = a + b;
    
   return result; //il dato che viene ritornato è quello che sarà l'output della function
   //se non ho il return la function torna di default "undefined"
}

//Posso eseguire una function solo tramite le ()
const mySum = sum(1,2); // qui si "invoca" la function sum

console.log(sum); //torna il valore della function
console.log(sum()); // qui eseguo la function ed assegno a = undefined e b = undefined
console.log(sum(1));// qui eseguo la function ed assegno a = 1 e b = undefined
console.log(sum(1,2)); // qui eseguo la function ed assegno a = 1 e b = 2

//function di log
function log(message){
    console.log(message);
}
//non ho un return quindi il return è implicitamente "undefined"


log; //leggi la function che si chiama log, ma non fare nulla
log(log(log));
log('Ciao Mondo!');

function calcolaTeoremaPitagora(lato1, lato2){
    const lato1AlQuadrato= lato1 * lato1;
    const lato2AlQuadrato= lato2 * lato2;
    const risultato = Math.sqrt(lato1AlQuadrato + lato2AlQuadrato);

    console.log('lato1AlQuadrato', lato1AlQuadrato);
    console.log('lato2AlQuadrato', lato2AlQuadrato);
    console.log(risultato);
}

const ipotenusa = calcolaTeoremaPitagora (3, 4);

console.log('ipotenusa', ipotenusa);

//concateniamo due stringhe:
function concat(prefix, suffix){
    if(typeof prefix !== 'string' || typeof suffix !== 'string'){
        console.error ('mi vuoi prendere in giro??')
        return 'Bip Bup errore';
    }
    //cost risultato = prefix + suffix;
    const risultato= `${prefix}${suffix}`;
    
    return risultato;

}

const dueStringhe = concat('Ciao', 'mondo');
console.log(dueStringhe);

const dueStringhe2 = concat('O bella', 'ciao');
console.log(dueStringhe2);

const error = concat(1, null);
console.log(error);


//ricorsività
function countdown(start){
    
    if(start === 0){
        return console.log(`🎉`)
    }

    console.log(start);
    return countdown(start-1);
}

countdown(1); // 1 -> 🎉
countdown(2); // 2-> 1 -> 🎉
countdown(10);// 10-> 9 -> ... -> 2 -> 1 🎉

function sommaRicorsiva(count){
    if(count===0){
        return 0;
    }
    return sommaRicorsiva(count-1) + count;
}

console.log(sommaRicorsiva(10));