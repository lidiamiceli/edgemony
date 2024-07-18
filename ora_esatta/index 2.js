//let number = 0; 

//const loggerFn = (arg) => {
    
 //   console.log("loggerFn", arg)
//}

//loggerFn(number)

//loggerFn('primo log')

//loggerFn('secondo log')

//loggerFn('terzo log')


//setIntervalID(()=> { 
//    number = ++number;
//   loggerFn(`dentro interval${number}`)
//}, 5000)


//loggerFn(`log di const interval ${intervalID}`)

//set timeout è un metodo ed esegue qualcosa dopo il tempo specificato
// e lo esegue solo una volta a differenza di interval che lo esegue a intervalli

//setTimeOut(() =>{
//  clearInterval(intervalID)
//}, 10000)



//COUNTER

console.log('counter');
let number = 0;
const div = document.querySelector('.counter');
const p = document.querySelector ('p');
const stopButton = document.createElement('button'). classList.add('stop');
const startButton = document.createElement('button');
stopButton.className = 'stop';
startButton.className = 'start';

console.log(startButton)

p.textContent = newDate();
div.append(startButton, stopButton);

const runInterval = () => {
    const id = setInterval(() => {
        p.textContent =newDate();
        console.log(p.textContent)
    }, 1000)

    return id;
}
let intervalId = runInterval(); //riassegno nuovo id per stoppare timer

startButton.addEventListener['click', () => {
    intervalId = runInterval();
}];

stopButton.addEventListener('click', () => {
    clearInterval(intervalId)
});

// const intervalId = setInterval(() => {
//     number = ++number;
//     p.textContent = number;
//     console.log(p.textContent)
// }, 1000)

// setTimeout(() => {
//     p.textContent= `Timeout ${newDate()}`;
//     clearInterval(intervalId);
// }, 10000)


// div.appendChild(p);
// console.log(p)


//DATA
//console.log('counter');
//const div = document.querySelector('.counter');
//const p = document.querySelector ('p');

//const intervalId = setInterval(() => {
//    number = ++number;
//    p.textContent = new Date();
//    console.log(p.textContent)
//}, 1000)

//p.textContent = number;
//div.appendChild(p);
//console.log(p)