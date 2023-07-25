// add title and button[play] to onload
// create animation to make an introduction in the game
// Welcome message, title, choices, and scrore board
// create a function to to match the player choice to computer choice
// return results who win the round or tie
// increament the score to score board
// put some emote reactions each scoreboard after the result of the round
// if user || computer score is 5 declare winner
// display message and add button to ask user if he/she want to play again

const playAgainTitle = document.getElementById("play-again-header")
const titleContainer = document.getElementById("title-container")
const scoreBoard = document.getElementById("score-board")
const choices = document.getElementById("choices")
const gameRace = document.getElementById("game-race")
const play = document.getElementById("play-container")
const playBtn = document.getElementById("playBtn")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const clickedChoice = document.querySelectorAll([".rock", ".paper", ".scissor"])
const date = document.getElementById("current-date");

// simple typewrite animation
function typewriterAnimation(text, speed, playTextType) {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            playTextType.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval)
        }
    }, speed);
}

let playTextType = 'ROCK, PAPER & SCISSORS';
let raceText = 'The Game is Race to 5 . . .'
let typingSpeed = 50;

typewriterAnimation(playTextType, typingSpeed, titleContainer);

window.onload = setTimeout(() => {
    typewriterAnimation(raceText, typingSpeed, gameRace)
    gameRace.style.color = '#FFF9C9';
}, 1500);

window.onload = setTimeout(() => {
    choices.classList.add('shrink-circles')
}, 3000);

window.onload = setTimeout(() => {
    scoreBoard.classList.add('show-score-board')
}, 3200);

const playAgain = (content) => {
    content.classList.add('play-again');

    playBtn.addEventListener('click', () => {
        content.classList.remove('play-again');
        gameRace.innerHTML = 'Ganbatte!';
        gameRace.style.color = '#FFD6A5';
        restartGame();
    })
}

const choice = ['rock', 'paper', 'scissor'];

let playerPoint = 0;
let computerPoint = 0;

playerScore.innerText = playerPoint
computerScore.innerText = computerPoint

const playRound = (userChoice, computerChoice) => {

    if((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissor') || (userChoice == 'scissor' && computerChoice == 'rock')) {
        gameRace.innerHTML = 'COMPUTER WIN';
        gameRace.style.color = '#EF6262';
        computerPoint++;
        computerScore.innerText = computerPoint
    }else if((userChoice == 'rock' && computerChoice == 'scissor') || (userChoice == 'paper' && computerChoice == 'rock') || (userChoice == 'scissor' && computerChoice == 'paper')) {
        gameRace.innerHTML = 'YOU WIN';
        gameRace.style.color = '#CECE5A';
        playerPoint++;
        playerScore.innerText = playerPoint
    }else if(userChoice == computerChoice){
        gameRace.innerHTML = "IT'S A TIE";
        gameRace.style.color = '#FFD6A5';
    }

    if(playerPoint == 5 && playerPoint > computerPoint) {
        playAgain(play);
        playAgainTitle.innerHTML = "YOU WIN THE GAME!";
    }else if(computerPoint == 5 && computerPoint > playerPoint){
        playAgain(play);
        playAgainTitle.innerHTML = "THE COMPUTER WIN THE GAME!";
    }
}

clickedChoice.forEach((btn) => {
    btn.addEventListener('click', () => {
        let computer = choice[Math.floor(Math.random() * choice.length)];
        const player = btn.getAttribute('data-value');
        playRound(player, computer);
    });
});

function restartGame() {
    playerPoint = 0;
    playerScore.innerText = playerPoint
    computerPoint = 0;
    computerScore.innerText = computerPoint
}

const currentDate = new Date();
date.innerHTML = currentDate.getFullYear();