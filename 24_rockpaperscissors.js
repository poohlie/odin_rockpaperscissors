const options = ["rock","paper","scissors"];

const computerPlay = () => (options[Math.floor(Math.random()*3)]);

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === "rock") {
        if(computerSelection === "rock"){
            return "It's a draw...";
        }
        else if(computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection === "paper") {
            return "It's a draw...";
        }
        else {
            return "You Lose! Scissors beats Paper";
        }
    }
    else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        }
        else if(computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "It's a draw...";
        }
    }
}

const play = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Please enter your selection: ");
        playerSelection = playerSelection.toLowerCase();
        while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            let playerSelection = prompt("Please enter your selection: ");
            playerSelection = playerSelection.toLowerCase();
        }

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.slice(0,7) === "You Win") {
            playerScore ++;
        } 
        else if (result.slice(0,8) === "You Lose") {
            computerScore ++;
        }
    }
    if(playerScore >= 3) {
        return "You Win!";
    } else if(computerScore >= 3) {
        return "Computer Wins!";
    } else {
        return "Draw!";
    }
}

console.log(play());