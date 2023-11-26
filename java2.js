let playerSelection = "";
let comptuerSelection = "";
let playerWinCounter = 0;
let computerWinCounter = 0;

const playerChoiceText = document.getElementById('playerChoiceText');
const computerChoiceText = document.getElementById('computerChoiceText');
const playerScoreText = document.getElementById('playerScoreText');
const computerScoreText = document.getElementById('computerScoreText');
let roundText = document.getElementById('roundDescription');

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
    playerSelection = event.target.className;
    console.log(playerSelection);

    computerSelection = getComputerChoice();
    console.log(computerSelection)

    scoreCheck(playRound(playerSelection))
    console.log(playerWinCounter)
    console.log(computerWinCounter)

    })



function playRound(){
    playRound

    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    }

    else if (playerSelection === "fire") {
        if (computerSelection === "water") {
            computerWin()
        }
        else {
            playerWin()
        }
    }

    else if (playerSelection === "water") {
        if (computerSelection === "grass") {
            computerWin()
        }
        else {
            playerWin()
        }
    }

    else if (playerSelection === "grass") {
        if (computerSelection === "fire") {
            computerWin()
        }
        else {
            playerWin()
        }
    }
}

//Collect a random choice for the computer to play
function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber <= .33) {
        return ("fire")
    }
    else if (randomNumber > .66) {
        return ("water")
    }
    else {
        return ("grass")
    }
}

function scoreCheck(score) {
    if (score === "playerWin") {
        ++playerWinCounter;
    }

    else if (score === "computerWin") {
        ++computerWinCounter;
    }

    if (playerWinCounter === 3) {
        console.log("You won the battle!");
        playerWinCounter = 0;
        computerWinCounter = 0;
    }

    if (computerWinCounter === 3) {
        console.log("You lost the battle...");
        playerWinCounter = 0;
        computerWinCounter = 0;
    }
}

function computerWin() {
    console.log ("Your pokemon has fainted!")
    roundText.textContent = "Your pokemon has fainted!";
    return ("computerWin")
}

function playerWin() {
    console.log ("The enemy pokemon has fainted!")
    roundText.textContent = "The enemy pokemon has fainted!";
    return ("playerWin")
}