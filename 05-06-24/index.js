
const divParent = document.querySelector(".container");
const buttonOneEl = document.querySelector(".button1");
const buttonTwoEl = document.querySelector(".button2");
const buttonThreeEl = document.querySelector(".button3");
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const timer = document.getElementById("timer")


document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        switch (event.target.id) {
            case 'button1':
                console.log('Hai cliccato il button1');
                break;
            case 'button2':
                console.log('Hai cliccato il button2');
                break;
            case 'button3':
                console.log('Hai cliccato il button3');
                break;
            default:
                console.log('Non hai cliccato nessun button');
        }
    }
});


//APERTURA MODALE
openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";

    let countdown = 5;
            timer.textContent = `Questa finestra si chiuderà tra ${countdown} secondi`;

            const countdownInterval = setInterval(function() {
                countdown--;
                if (countdown >= 0) {
                    timer.textContent = `This modal will close in ${countdown} seconds`;
                }
                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    modal.style.display = "none";
                }
            }, 1000);

    setTimeout(function() {
        modal.style.display = "none";
    }, 5000);
});

//CHIUSURA MODALE
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

yesBtn.addEventListener("click", function() {
    console.log("Hai cliccato si");
    modal.style.display = "none";
});

noBtn.addEventListener("click", function() {
    console.log("Hai cliccato no");
    modal.style.display = "none";
});

