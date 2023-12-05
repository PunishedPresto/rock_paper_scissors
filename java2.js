let playerSelection = "";
let computerSelection = "";
let playerWinCounter = 0;
let computerWinCounter = 0;

const playerCompSelections = document.getElementById('choices');

const playerScoreText = document.getElementById('playerScoreText');
    playerScoreText.textContent = `You have KO\'d ${playerWinCounter} of your opponents pokemon!`

const computerScoreText = document.getElementById('computerScoreText');
    computerScoreText.textContent = `Your opponent has KO\'d ${computerWinCounter} of your pokemon!`

const roundText = document.getElementById('roundResults');

const wrapper = document.getElementById('wrapper');

const results = document.getElementById('results');

const restart = document.getElementById('restart')
restart.style.visibility = "hidden"



wrapper.addEventListener('click', (event) => {
    playerSelection = event.target.id;
    console.log(playerSelection);

    computerSelection = getComputerChoice();
    console.log(computerSelection)

    scoreCheck(playRound(playerSelection))
    console.log(playerWinCounter)
    console.log(computerWinCounter)

    })

    //Try making strings a <p> object, then appending them all as children to a <div>
const string1 = document.createElement("p")
const span1 = document.createElement("span");
const string2 = document.createElement("p")
const span2 = document.createElement("span");
const string3 = document.createElement("p")


results.appendChild(string1)
results.appendChild(span1)
results.appendChild(string2)
results.appendChild(span2)
results.appendChild(string3)


function playRound(){

    roundManager()

   

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

    if (playerWinCounter === 6) {
        roundText.textContent = "You won the battle!";
        gameEnd()
    }

    if (computerWinCounter === 6) {
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
    wrapper.style.visibility = "hidden";
    restart.style.visibility = "visible"
    restart.addEventListener('click', (reset))
    
}

//Currently resets score after first round- Fix later
function reset() {
    restart.style.visibility = "hidden"
    playerWinCounter = 0;
    computerWinCounter = 0;
    playerScoreText.textContent = `You have KO\'d ${playerWinCounter} of your opponents pokemon!`
    computerScoreText.textContent = `Your opponent has KO\'d ${computerWinCounter} of your pokemon!`
    restart.removeEventListener('click', (reset))
    wrapper.style.visibility = "visible";
}


function roundManager() {
    string1.textContent = "You chose a ";
    span1.setAttribute ('id',playerSelection);
    span1.innerHTML = (playerSelection)
    string2.textContent = " type, while the opponent chose a ";
    span2.setAttribute ('id',computerSelection);
    span2.innerHTML = (computerSelection)
    string3.textContent = " type.";
}
