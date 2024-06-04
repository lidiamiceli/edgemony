const div = document.querySelector('.counter');
const p = document.createElement('p');
const stopButton = document.createElement('button');
const startButton = document.createElement('button');

stopButton.className = 'stop';
startButton.className ='start';
startButton.textContent = 'Start';
stopButton.textContent = 'Stop';

p.textContent = new Date();

div.append(p, startButton, stopButton);

const id = setInterval(() => {
    p.textContent = new Date();
    console.log(p.textContent)
}, 1000)

let intervalId = runInterval();

startButton.addEventListener('click', ()=>{
    clearInterval(intervalId)
    intervalId = runInterval
});

stopButton.addEventListener('click', () => {
    console.log(intervalId);
    clearInterval(intervalId)
});

div.appendChild(p);