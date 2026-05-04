let humanScore = 0, computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 1/3) {
        return 'rock';
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getUserChoice() {
    return prompt('Please make your choice between rock, paper, scissors: ');
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    alert('Your choice: ' + humanChoice);
    alert('Computer\'s Choice: ' + computerChoice);


    if (humanChoice == computerChoice) {
        alert('Tie!');
    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
                (humanChoice == 'paper' && computerChoice == 'rock') || 
                (humanChoice == 'scissors' && computerChoice == 'paper')) {
        alert('You win!');
        humanScore++;
    } else {
        alert('Computer wins!');
        computerScore++;
    }

    

}


function playGame(){
    
    
    humanScore = 0;
    computerScore = 0;
    
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        alert('Your score: ' + humanScore + ' Computer score: ' + computerScore);
    }

}

playGame();