let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    });
});

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    if (humanChoice === computerChoice) {
        results.textContent = "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        results.textContent =
            `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        results.textContent =
            `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    score.textContent =
        `Current score: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5) {
        winner.textContent = "You won the game!";
    } else if (computerScore === 5) {
        winner.textContent = "Computer won the game!";
    }
}

function getComputerChoice() {
    const randomInt = Math.floor(Math.random()* 3);
    if (randomInt === 0) {
        return "paper";
    } else if (randomInt === 1) {
        return "rock";
    } else {
        return "scissors";
    }
}
