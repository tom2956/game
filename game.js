console.log('this thing on ??');

function rockSel() {
  let userChoice = "rock";
  playGame(userChoice);
}

function paperSel() {
  let userChoice = "paper";
  playGame(userChoice);
}

function scissorsSel() {
  let userChoice = "scissors";
  playGame(userChoice);
}

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
  let outcome;
  if (userChoice === computerChoice) {
    outcome = "This game is a tie";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    outcome = "The computer has won";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    outcome = "The computer has won";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    outcome = "The computer has won";
  } else if (userChoice === 'bomb') {
    outcome = 'You Win !!';
  } else {
    outcome = "You win";
  }
  document.querySelector('#outcome').innerText = outcome;
  document.querySelector('#computerChoice').innerText = `The computer chose ${computerChoice}`;

}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  determineWinner(userChoice, computerChoice);
}

document.querySelector('#rock').addEventListener('click', rockSel);
document.querySelector('#paper').addEventListener('click', paperSel);
document.querySelector('#sci').addEventListener('click', scissorsSel);
