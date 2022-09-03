// a console game of rock paper scissors

function getComputerChoice() {
    //generates random number between 0-2, uses switch statement to determine outcome
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
    //plays a single round, takes a player and computer arg, returns a string and state
    const winString = `You win! ${playerChoice} beats ${computerChoice}`;
    const loseString = `You lose! ${computerChoice} beats ${playerChoice}`;
    const drawString = `It's a draw! You both chose ${computerChoice}`;
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock" && computerChoice == "scissors") {
        return [winString, true];
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return [winString, true];
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return [winString, true];
    } else if (playerChoice == computerChoice) {
        return [drawString, "draw"];
    } else {
        return [loseString, true];
    }
}

let playerWinCount = 0;
let computerWinCount = 0;

const selections = document.querySelectorAll(".selection");
selections.forEach(selection => {
    selection.addEventListener("click", function game() {
        const [winnerText, score] = playRound(selection.id, getComputerChoice());
        const result = document.getElementById("result");
        const tally = document.getElementById("tally");
        //ends game after 5 rounds
        if (playerWinCount == 5 || computerWinCount == 5) {
            selection.removeEventListener("click", game);
            return;
        }
        //returns outcome of round and increments scores
        if (score == "draw") {
            result.textContent = winnerText;
        } else if (score && playerWinCount < 4) {
            playerWinCount++;
            result.textContent = winnerText;
        } else if (score && playerWinCount == 4) {
            playerWinCount++;
            result.textContent = `You bested the computer! You won ${playerWinCount} to ${computerWinCount}`;
        } else if (!score && computerWinCount < 4) {
            computerWinCount++;
            result.textContent = winnerText;
        } else {
            computerWinCount++;
            result.textContent = `The computer bested you! You lost ${computerWinCount} to ${playerWinCount}`
        }
        tally.textContent = `Your score: ${playerWinCount}  Computer's score ${computerWinCount}`;
    });
});