//Play Command:
//game(playRound(getPlayerChoice(), getComputerChoice()))

let playerWins = 0
let compWins = 0
let timer = 5

function playRound(playerSelection, computerSelection) {
    console.log('You chose ' + playerSelection + ' and the computer chose ' + computerSelection)

    //Check for Tie
    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    }
    //Check for spelling error
    else if (playerSelection === undefined) {
        
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log ("You Lose!")
            return ("computerWin")
        }
        else {
            console.log ("You Won!")
            return ("playerWin")
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log ("You Lose!")
            return ("computerWin")
        }
        else {
            console.log ("You Won!")
            return ("playerWin")
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log ("You Lose!")
            return ("computerWin")
        }
        else {
            console.log ("You Won!")
            return ("playerWin")
        }
    }
}
// Display the results of each round, triggering gameEnd() the game after 5 rounds
function game(result) {
    if (result === "playerWin") {
    ++playerWins
    --timer
    console.log("You have won= " + playerWins + " times.")
    console.log("The Computer has won= " + compWins + " times.")
    console.log("Timer= " + timer + " rounds left")
        if (timer === 0) {
            gameEnd()
        }
    }
    else if (result === "computerWin") {
    --timer
    ++compWins
    console.log("You have won= " + playerWins + " times.")
    console.log("The Computer has won= " + compWins + " times.")
    console.log("Timer= " + timer + " rounds left")
        if (timer === 0) {
            gameEnd()
    }
    }
}

//Compares scores and resets win counters and timer
function gameEnd() {
    if (playerWins > compWins) {
        console.log("You have won!")
    }
    else {
        console.log("You have lost...")
    }
    timer = 5
    playerWins = 0
    compWins = 0
}

//Collect players choice, and check it's spelling
function getPlayerChoice() {
    choice = prompt("Rock, Paper, or Scissors?")
    choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice
        }
        else {
            console.log("Double check your spelling!")
    }
    
}
//Collect a random choice for the computer to play
function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber <= .33) {
        return ("rock")
    }
    else if (randomNumber > .66) {
        return ("paper")
    }
    else {
        return ("scissors")
    }
}


