// Function for the computer's choice. No parameters, returns either
// rock, paper, or scissors.
function getComputerChoice() {
  //the choices the computer has
  const compChoiceList = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  //choosing one of the choices from compChoiceList based on a
  //randomized index.
  return compChoice = compChoiceList[random];
}


// Function for a single round of rock, paper, scissors
function playRound(playerSelection = prompt("Rock, Paper, Scissors, Go!"), computerSelection = getComputerChoice()) {
  //make it so that player's choice is not case sensitive
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  //determine who wins the round

  if (computerSelection === "Rock") {
    switch (playerSelection) {
      case "Rock":
        outcome = "It's a tie!";
        break;
      
      case "Paper":
        outcome = "You win! Paper beats Rock.";
        break;

      case "Scissors":
        outcome = "You lose! Rock beats Scissors.";
        break;

      default:
        outcome = "Hmm, not a valid entry. Please try again with 'Rock', 'Paper', or 'Scissors' only, please.";
    }
  } else if (computerSelection = "Paper") {
    switch (playerSelection) {
      case "Rock":
        outcome = "You lose! Paper beats Rock.";
        break;
      
      case "Paper":
        outcome = "It's a tie!";
        break;

      case "Scissors":
        outcome = "You win! Scissors beats Paper.";
        break;

      default:
        outcome = "Hmm, not a valid entry. Please try again with 'Rock', 'Paper', or 'Scissors' only, please.";        
    }
  } else if (computerSelection = "Scissors") {
    switch (playerSelection) {
      case "Rock":
        outcome = "You win! Rock beats Scissors.";
        break;
      
      case "Paper":
        outcome = "You lose! Scissors beats Paper.";
        break;

      case "Scissors":
        outcome = "It's a tie!";
        break;

      default:
        outcome = "Hmm, not a valid entry. Please try again with 'Rock', 'Paper', or 'Scissors' only, please.";
    }
  }
  return outcome;
}

//function to play the game for multiple rounds
function game(num_rounds = 5) {
  winners = []
  for (let i = 1; i <= num_rounds; i++) {
    round_outcome = playRound();
//determine the winner of the round. If player has invalid input,
//outputing a tie.
    let round_winner = round_outcome.includes("win") ? "Player" :
      round_outcome.includes("lose") ? "Computer" : "Tie";
//add the winner to a list of winners, so that we a list of who won each round
    winners.push(round_winner);
//report the winner for the round
    console.log(round_outcome);
  }
//determine how many wins the player and computer have
  let winner_count = {};
  for (const string of winners) {
    winner_count[string] = winner_count[string] ? winner_count[string] + 1 : 1;
  }

  player_wins = winner_count['Player'];
  comp_wins = winner_count['Computer'];
//determine overall winner and tell the player
  if (player_wins > comp_wins) {
    console.log("You won the game! Congratulations!");
  } else if (player_wins < comp_wins) {
    console.log("Sorry, you lost! Looks like the computer was luckier this time.")
  } else {
    console.log("Wow, a tie! Spooky.");
  }
}

game(5);