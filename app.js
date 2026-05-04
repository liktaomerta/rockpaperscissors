let humanScore = 0, computerScore = 0;

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

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

function playRound(humanChoice, computerChoice) {

    alert('Your choice: ' + humanChoice);
    alert('Computer\'s Choice: ' + computerChoice);


    if (humanChoice == computerChoice) {
        alert('Tie!');
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') || 
                (humanChoice === 'scissors' && computerChoice === 'paper')) {
        alert('You win!');
        humanScore++;
    } else {
        alert('Computer wins!');
        computerScore++;
    }

    alert('Your score: ' + humanScore + ' | Computer score: ' + computerScore);

}

function playGame(){
    
    
    humanScore = 0;
    computerScore = 0;
    
    
        
        rockBtn.addEventListener('click', () => {
            const computerChoice = getComputerChoice();
            playRound('rock', computerChoice);
        });
        paperBtn.addEventListener('click', () => {
            const computerChoice = getComputerChoice();
            playRound('paper', computerChoice);
        });
        scissorsBtn.addEventListener('click', () => {
            const computerChoice = getComputerChoice();
            playRound('scissors', computerChoice);
        });
        
        alert('Your score: ' + humanScore + ' Computer score: ' + computerScore);
    }

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));