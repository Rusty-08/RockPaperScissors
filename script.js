// add title and button[play] to onload
// create animation to make an introduction in the game
// Welcome messgae, title, choices, and scrore board
// create a function to to match the player choice to computer choice
// return results who win the round or tie
// increament the score to score board
// put some emote reactions each scoreboard after the result of the round
// if user || computer score is 5 declare winner
// display message and add button to ask user if he/she want to play again

const playStartTitle = document.getElementById("play-text")
const titleContainer = document.getElementById("title-container")

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

const playTextType = 'ROCK, PAPER & SCISSORS';
const typingSpeed = 70;

typewriterAnimation(playTextType, typingSpeed, playStartTitle);

const play = document.getElementById("play-container");
const playBtn = document.getElementById("playBtn");

playBtn.disabled = true;

const hideTrasition = (btn, content) => {
    btn.addEventListener("click", () => {
        content.classList.add('hide-container');
        typewriterAnimation(playTextType, 80, titleContainer)
    });
}

function enableButton() {
    playBtn.disabled = false;
}

setTimeout(enableButton, 2000);

hideTrasition(playBtn, play);