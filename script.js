// Function for the computer's choice. No parameters, returns either
// rock, paper, or scissors.
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const options = [rock, paper, scissors];
const roundResults = document.querySelector('.roundResults');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const finalResults = document.querySelector('.finalResults');
const resetBtn = document.getElementById('reset');

let playerWins = 0;
let compWins = 0;
playerScore.textContent = `Player score: ${playerWins}`;
computerScore.textContent = `Computer score: ${compWins}`;

function getComputerChoice() {
  //the choices the computer has
  const compChoiceList = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  //choosing one of the choices from compChoiceList based on a
  //randomized index.
  return compChoice = compChoiceList[random];
}

function getPlayerChoice(e) {
  let playerChoice = e.target.id;
  if (playerWins < 5 && compWins < 5) {
    playRound(playerChoice);
  } else {
    resetBtn.style.backgroundColor = 'yellow';
  }
}

//connecting getPlayerChoice to the buttons
options.forEach(option => {
  option.addEventListener('click', getPlayerChoice);
});

// Function for a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection = getComputerChoice()) {
  //make it so that player's choice is not case sensitive
  //determine who wins the round
  if (computerSelection === "rock") {
    switch (playerSelection) {
      case "rock":
        outcome = "It's a tie!";
        break;
      
      case "paper":
        outcome = "You win! Paper beats Rock.";
        break;

      case "scissors":
        outcome = "You lose! Rock beats Scissors.";
        break;

      default:
        outcome = "Hmm, not a valid entry. Please try again with 'Rock', 'Paper', or 'Scissors' only, please.";
    }
  } else if (computerSelection = "paper") {
    switch (playerSelection) {
      case "rock":
        outcome = "You lose! Paper beats Rock.";
        break;
      
      case "paper":
        outcome = "It's a tie!";
        break;

      case "scissors":
        outcome = "You win! Scissors beats Paper.";
        break;

      default:
        outcome = "Hmm, not a valid entry. Please try again with 'Rock', 'Paper', or 'Scissors' only, please.";        
    }
  } else if (computerSelection = "scissors") {
    switch (playerSelection) {
      case "rock":
        outcome = "You win! Rock beats Scissors.";
        break;
      
      case "paper":
        outcome = "You lose! Scissors beats Paper.";
        break;

      case "scissors":
        outcome = "It's a tie!";
        break;

      default:
        outcome = "Hmm, not a valid entry. Please try again with 'Rock', 'Paper', or 'Scissors' only, please.";
    }
  }
  roundResults.textContent = outcome;

  let roundWinner = outcome.includes('win') ? 'player' :
    outcome.includes('lose') ? 'computer' : 'tie';

  if (roundWinner === 'player') {
    playerWins++;
    playerScore.textContent = `Player score: ${playerWins}`;
    } else if (roundWinner === 'computer') {
      compWins++;
      computerScore.textContent = `Computer score: ${compWins}`;
  }

  getWinner();

}

function getWinner() {
  if (playerWins === 5) {
    finalResults.textContent = 'You won the game! Congratulations!';
  } else if (compWins === 5) {
    finalResults.textContent = 'Sorry, you lost! Looks like the computer was luckier this time.';
  }
}

resetBtn.addEventListener('click', reset);

function reset() {
  roundResults.textContent = '';
  playerWins = 0;
  compWins = 0;
  playerScore.textContent = `Player score: ${playerWins}`;
  computerScore.textContent = `Computer score: ${compWins}`;
  finalResults.textContent = '';
  resetBtn.style.backgroundColor = '';
}