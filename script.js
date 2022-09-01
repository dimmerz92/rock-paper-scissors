// a console game of rock paper scissors

function getComputerChoice() {
    //generates a random number between 0-2 and uses a switch statement to determine rock, paper, scissors
    switch(Math.floor(Math.random() * 3)) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    //plays a single round of rock, paper, scissors against the computer by taking in a player and computer argument
    let winString = `You win! ${playerChoice} beats ${computerChoice}`;
    let loseString = `You lose! ${computerChoice} beats ${playerChoice}`;
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock" && computerChoice == "scissors") {
        return winString;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return winString;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return winString;
    } else if (playerChoice == computerChoice) {
        return `It's a draw! You both chose ${computerChoice}`;
    } else {
        return loseString;
    }
}

function game() {
    //plays a 5 round game of rock, paper, scissors and keeps and reports the score at the end
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(prompt("Enter a choice of rock, paper, or scissors"), getComputerChoice());
        if (round.includes("You win!")) {
            playerWinCount++;
        } else if (round.includes("You lose!")) {
            computerWinCount++;
        }
    }
    if (playerWinCount > computerWinCount) {
        return `You won! You got ${playerWinCount} and the computer got ${computerWinCount}`;
    } else if (playerWinCount < computerWinCount) {
        return `You lost! You got ${playerWinCount} and the computer got ${computerWinCount}`;
    } else {
        return "It appears to have been a draw!"
    }
}