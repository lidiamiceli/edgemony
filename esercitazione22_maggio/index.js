//esercizio1
function contaIndicazioni(...directions){
    const check =["su", "giu", "sinistra", "destra"];

    console.log(directions);

    for(let i=0; i< directions.length; i++ ){

        const direction = directions [i];
        const isValidDirection = check.includes(direction);

        if(['su', 'sinistra'].includes(direction)){

        }

        if (isValidDirection){
            console.log(`is "${direction}" in "${check}"`, isValidDirection);
        }
    }
}


//esercizio2
function Indicazioni(...directions){
    const map = {
        su: 0,
        giù: 0,
        sinistra: 0,
        destra: 0

    }
   
    for (let i=0; i< directions.length; i++){
        const direction = direction [i];
        const isValid = check.includes(direction);

        console.log(direction, 'is valid:', isValid);
    }

    if(isValid){
        map [direction] ??= 0;
        map [direction] += 1;
    }

    return map;
}

//esercizio3

let count = 0
const countClick = () => {
    console.log(count++);
}

document.body.onclick = countClick;

//esercizio4
const alphabet = 'abcdefghijklmnopqrstuvwyz';

function alphaberPosition(string = ''){
    let output = '';
    string = string.toLowerCase();

    for(let char of string){
        const indexOfChar = alphabet.indexOf(char);

        if(indexOfChar > -1){
            output += indexOfChar;
        } else{
            output += char;
        }
    }
    return output;
}

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'));
alohabetPosition();

