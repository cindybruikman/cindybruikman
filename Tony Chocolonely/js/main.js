const audio = new Audio();
audio.src = "./sounds/sound2.mp3";

let scoreElement = document.getElementById("score");
let tonyElement = document.getElementById("tony1")


//variable
let score = 0;

//events
tonyElement.addEventListener("click", function () {
    this.style.left = Math.floor(Math.random() * 900) + "px";
    this.style.top = Math.floor(Math.random() * 600) + "px";
    score++;
    scoreElement.innerHTML = score + " punten";
});

let scoreElement2 = document.getElementById("score2");
let tonyElement2 = document.getElementById("tony2");

//variable
let score2 = 0;

//events
tonyElement2.addEventListener("click", function () {
    this.style.left = Math.floor(Math.random() * 900) + "px";
    this.style.top = Math.floor(Math.random() * 600) + "px";
    score2++;
    scoreElement2.innerHTML = score2 + " punten";
});

console.log(scoreElement);
console.log(tonyElement);   

const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownElement = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60; 

    countdownElement.innerHTML = '${minutes} : ${seconds}';
    time--;
}
