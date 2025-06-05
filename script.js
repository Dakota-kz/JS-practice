function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase(); 
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
            humanScore++;
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (humanChoice === computerChoice) {
            alert("It's a tie!");
        } else {
            computerScore++;
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
}

function playGame() {
    for (let i = 0; i < 3; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice)
    }
    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (computerScore > humanScore) {
        return "You lose the game!"
    } else {
        return "It's draw, mb try again."
    }
}

alert(playGame());
