
const name = prompt("Inserisci il tuo nome:");
console.log('Nome inserito');

const surname = prompt("Inserisci il tuo cognome:");
console.log('Cognome inserito')


const firstName = 'Lidia';
const nameLenght = firstName.lenght;
const firstLetter = firstName[0];
const OK_CHARS = 'ABCDEFGHILMNOPQRSTUVZ';
const isFirstLetterUppercase = OK_CHARS.includes(firstLetter);
const isFirstLetterUppercase2 = firstLetter == firstLetter.toUpperCase();

console.clear();
console.log('firstNAme', firstName);
console.log('firstLetter,firstLetter');
console.log('isFirstLetterUppercase', isFirstLetterUppercase);
console.log('isFirstLetterUpperCase2', isfirstLetterUppercase2, `${firstLetter} == ${firstLetter.toUpperCase()}`);

if(nameLength < 3){
    console.log('Il nome non è valido. Inserire un nome di almeno 3 caratteri');
} else if(isNotFirstLetterUppercase){
    console.log('La prima lettera deve essere una maiuscola!');
} else{
    console.log(`Ciao ${firstName}!`);
}



//esercizio2
let score = 0;

const question1 = 'Qual è la capitale della Francia?';
const question2 = 'Quanti giorni ci sono in un anno bisestile?';
const question3 = 'Chi scrisse I Promessi Sposi?';
const question4 = 'Qual è l\'elemento chimico con simbolo \'Mg?\'';


const correctAnswer1 = "Parigi";
const correctAnswer2 = "366";
const correctAnswer3 = "Alessandro Manzoni";
const correctAnswer4 = "Magnesio";

let answer1 = prompt(question1);
let answer2 = prompt(question2);
let answer3 = prompt(question3);
let answer4 = prompt(question4);


if (answer1 === correctAnswer1) {
    score += 3;
} else {
    score -= 1;
}

if (answer2 === correctAnswer2) {
    score += 3;
} else {
    score -= 1;
}

if (answer3 === correctAnswer3) {
    score += 3;
} else {
    score -= 1;
}

if (answer4 === correctAnswer4) {
    score += 3;
} else {
    score -= 1;
}

alert("Il tuo punteggio complessivo è: " + score);

if (score === 12) {
    alert("Sei il nuovo campione!");
}
