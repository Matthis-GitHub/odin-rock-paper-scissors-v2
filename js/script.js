const body = document.querySelector("body");
const announceWinner = document.querySelector(".announceWinner");
const roundResult = document.querySelector(".roundResult");
const score = document.querySelector(".score");
const containerButtons = document.querySelectorAll(".container button");

containerButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.textContent, getComputerChoice());
  });
});

//----------------------------------------------------------------------------

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLocaleLowerCase();

  if (humanChoice === computerChoice) {
    roundResult.textContent = "It's a draw! Go again.";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
    score.textContent = `Score: ${humanScore} / ${computerScore}`;
  } else {
    roundResult.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
    score.textContent = `Score: ${humanScore} / ${computerScore}`;
  }

  if (computerScore === 5) {
    announceWinner.textContent = "The Computer won the game!";
    // add restartGame to DOM so player can start new round
    createRestartGameButton();
  }
  if (humanScore === 5) {
    announceWinner.textContent = "You won the game!";
    // add restartGame to DOM so player can start new round
    createRestartGameButton();
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
  }

  return computerChoice;
}

function createRestartGameButton() {
  const restartGame = document.createElement("button");
  restartGame.textContent = "Restart Game";
  body.append(restartGame);

  restartGame.addEventListener("click", function reset(event) {
    computerScore = 0;
    humanScore = 0;
    score.textContent = `Score: ${humanScore} / ${computerScore}`;
    roundResult.textContent =
      "Get ready to lose against this awesome computer!";
    announceWinner.textContent = "";
    restartGame.remove();
  });
}
