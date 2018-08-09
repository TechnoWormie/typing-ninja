function playAgain() {

    location.reload();
}

const levels = {

    easy: 5,
    medium: 3,
    hard: 1
}

//Change level

let currentLevel = levels.medium;


let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");


const words = [
    
     'call of duty', 'clash of clans', 'god of war', 'don bradman cricket',
     'infamous second son', 'last of us', 'lara croft go', 'plants vs zombies', 'candy crush saga', 'grand theft auto', 'sea of thieves', 'gears of war', 'horizon zero dawn',
     'a way out'
];


function init() {

    showWord(words);

    wordInput.addEventListener('input', startMatch); //Start Match Input
    
    setInterval(countDown, 1000); //Countdown every sec
    
    setInterval(checkStatus, 100); // Check game status
     
    document.getElementById('word-input').focus();

}

function startMatch() {

    if(matchWords()) {

        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    scoreDisplay.innerHTML = score;
}

//Match Word

function matchWords() {

    if(wordInput.value === currentWord.innerHTML) {

        message.innerHTML = "Correct :)"
        return true;
    } else {

        message.innerHTML = '';
        return false;
    }
}

function showWord(words) {

    const randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex];
}

function countDown() {

    if(time > 0) {

        time--;
    } else if (time === 0) {

        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkStatus() {

    if(!isPlaying && time === 0) {

        message.innerHTML = "GAME OVER !";

        document.getElementById("word-input").disabled = true;

    }
}


//Typing effect 
var i = 0;
var txt = 'TYPING NINJA';
var speed = 40;

(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}());