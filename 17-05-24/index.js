//esercizio1
let array = [-1, -2, -10, 2, 5];

for (let i = 0; i < array.length; i++) {
    const item = array[1];
    if (item > 0) {
    }
    console.log(array[i]);
}


for (let i = 0; i < array.length; i++) {
    if (item > 0) {
        console.log("Il primo numero positivo è:", item);
        break; 
    }
}





// prendo una parola dall'utente tramite prompt
let firstWord = prompt("Inserisci una parola:");

// scompongo la parola in un array di caratteri
let arrayWord = firstWord.split("");

// ciclo for per controllare se la parola è palindroma
for (let i = 0; i < arrayWord.length; i++) {

    // controllo se il carattere corrente è uguale al suo elemento
    if (arrayWord[i] !== arrayWord[arrayWord.length - 1 - i]) {
        console.log("Non è un palindromo!");
        break;
    }

    // controllo se è l'ultimo elemento dell'array
    let isLast = i === arrayWord.length - 1;

    if (isLast || i === Math.floor(arrayWord.length / 2) - 1) {
        console.log("Successo! È un palindromo!");
    }
}


//LEZIONE 20/05
// Object
// Sono un tipo di dato che trova il suo utilizzo nel raggruppare valori tramite chiavi
const object = {}; //

const lidia = {
    firstName: 'Lidia', //coppia chiave-valore: "firstname" - "Lidia"
    lastName: 'Miceli',
    age: 28,
    skills: ['Javascript'],
    adress:{                
        city: 'Cattolica Eraclea',
        zipCode: '92011'
    }
};

console.log(lidia); // { firstName, lastName, age, skillss..}
console.log(lidia['firstName']); //lidia
console.log(lidia, firstName); //lidia


console.log(lidia['address']);
//se voglio leggere lo zip code?
console.log(address['zipCode']);
//or
console.log(lidia['address']['zipCode']);
//or
console.log(lidia.address.zipCode);


//se voglio leggere l'array dentro l'object?
const skills = lidia.skills;

//or
const firstSkill = lidia.skills.at(0);
const luca = {skilld: 'Front-end'};
const leo = {skills: 'Back-end'};

console.log(luca.skills.at(0));
console.log(leo.skills.at(0));

//
const prop = 'firstName';
console.log(lidia[prop]);


//se ho un oggetto vuoto posso modificarlo dentro? si
const obj = {}; //oggetto è lo spazio di memoria occupato dalle chiavi di valori
obj['firstName'] = 'Pippo';
obj['lastName'] = 'Baudo';
console.log('obj', obj); //breve riassunto che si trova dentro l'oggetto quando andiamo a cliccare console.log

obj.currentlyInActivity = true; 

if(!obj.currentlyInActivity){
    obj.currentlyInActivity = true;
}

console.log('has obj a property "age"?', obj.hasOwnProperty('age'));

obj.age = 'matusalemme';
console.log('has obj a property "age")?', obj.hasOwnProperty('age'));
console.log('has obj a property "age"?', 'age' in obj); //in controlla se 'age' esiste dentro obj, torna booleano

console.log(array);
console.log(1 in array); //controllo se array ha un indice 1

// per cancellare proprietà 
delete obj.age; //obj.age -> undefined
obj.age = undefined; //semanticamente non corretto, ma funziona uguale

//for....in  //vorrei stampare la chiave
for(let key in lidia){
    console.log('chiave', key);
    console.log(`${key}: ${lidia[key]}`);
}

//For...in/of si usano dentro gli array
for(let value of array){
    console.log(value);
}

