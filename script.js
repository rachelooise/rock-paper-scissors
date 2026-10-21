let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {

    const rounds = 5;

    for(let i=0; i<5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        //console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

    console.log(`Final score: You ${humanScore} - Computer ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a draw!");
    }

}

function getComputerChoice() {
    let randomInt = Math.floor(Math.random()* 3);
    if(randomInt === 0) {
        return "paper";
    }else if(randomInt === 1) {
        return "rock";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
     return prompt("Paper, Rock, Scissors?")
        ?.trim()
        .toLowerCase();
}