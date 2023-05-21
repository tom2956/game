const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log("Error invalid choice");
  }
};

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "This game is a tie";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    return "The computer has won";
  } else {
    return "You win";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    return "You win";
  } else {
    return "You lose";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    return "You win";
  } else {
    return "You lose";
  }
  if (userInput === 'bomb'){
    return 'You Win !!'
  }
}

function playGame() {
  const userChoice = getUserChoice("rock"); // replace "rock" with prompt("Enter rock, paper, or scissors:");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
