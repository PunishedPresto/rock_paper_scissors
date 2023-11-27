let playerSelection = "";
let comptuerSelection = "";
let playerWinCounter = 0;
let computerWinCounter = 0;

const playerCompSelections = document.getElementById('choices');

const playerScoreText = document.getElementById('playerScoreText');
    playerScoreText.textContent = `You have KO\'d ${playerWinCounter} of your opponents pokemon!`

const computerScoreText = document.getElementById('computerScoreText');
    computerScoreText.textContent = `Your opponent has KO\'d ${computerWinCounter} of your pokemon!`

const roundText = document.getElementById('roundResults');

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

    playerCompSelections.textContent = `You chose a ${playerSelection} type, while the opponent chose a ${computerSelection} type.`

    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
        roundText.textContent = "Both pokemon are still standing!"
    }

    else if (playerSelection === "fire") {
        if (computerSelection === "water") {
            return computerWin()
        }
        else {
            return playerWin()
        }
    }

    else if (playerSelection === "water") {
        if (computerSelection === "grass") {
            return computerWin()
        }
        else {
            return playerWin()
        }
    }

    else if (playerSelection === "grass") {
        if (computerSelection === "fire") {
            return computerWin()
        }
        else {
            return playerWin()
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
        playerScoreText.textContent = `You have KO\'d ${playerWinCounter} of your opponents pokemon!`
    }

    else if (score === "computerWin") {
        ++computerWinCounter;
        computerScoreText.textContent = `Your opponent has KO\'d ${computerWinCounter} of your pokemon!`
    }

    if (playerWinCounter === 3) {
        roundText.textContent = "You won the battle!";
        gameEnd()
    }

    if (computerWinCounter === 3) {
        roundText.textContent = "You lost the battle...";
        gameEnd()
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

function gameEnd() {
    wrapper.addEventListener('click', (reset))
    
}

//Currently resets score after first round- Fix later
function reset() {
    playerWinCounter = 0;
    computerWinCounter = 0;
    playerScoreText.textContent = `You have KO\'d ${playerWinCounter} of your opponents pokemon!`
    computerScoreText.textContent = `Your opponent has KO\'d ${computerWinCounter} of your pokemon!`
    wrapper.removeEventListener('click', (reset))
}
