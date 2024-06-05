//esercizio1
let stringa1 = "Ciao Mondo!";
console.log(stringa1);

let stringa2 = 'Mio zio viene dalla città di l\'Aquila';
console.log(stringa2);

let backtick = `${stringa1} 
${stringa2}`;

console.log(backtick);

//esercizio2
let CIAO_MONDO = stringa1.toUpperCase();
console.log(CIAO_MONDO);


//esercizio3
let inputUtente = prompt ('A cosa stai pensando?');
console.log(inputUtente); //CORNETTO

let inputUtenteLowerCase = inputUtente.toLowerCase();
console.log(inputUtenteLowerCase); //cornetto


//esercizio quattro
let numero = prompt ('scegli un numero da uno a dieci');
console.log(numero);

let numerouno = 6;

if(numerouno>5){
    console.log("hai vinto!")
}
else {
    console.log("hai perso!")
};

let numerodue = 'scegli un numero da uno a dieci';
console.log(numerodue);

let numerotre = 5;

if (numerotre > 7){
    console.log("hai vinto!")
};