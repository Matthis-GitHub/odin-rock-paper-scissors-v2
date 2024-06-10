let computerScore = 0;
let humanScore = 0;

playGame();

function playGame() {
  for (let index = 0; index < 5; index++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  let result;
  if (humanScore === computerScore) {
    result = `It's a draw! Your score: ${humanScore} / ${computerScore} :Computer score`;
  } else {
    result =
      humanScore > computerScore
        ? console.log(
            `You win! Your score: ${humanScore} / ${computerScore} :Computer score`
          )
        : console.log(
            `You lose! Your score: ${humanScore} / ${computerScore} :Computer score`
          );
  }
  console.log(result);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw! Go again.");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
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

function getHumanChoice() {
  let humanChoice = prompt("Choose between Rock Paper and Scissors");
  humanChoice = humanChoice.toLocaleLowerCase();

  switch (humanChoice) {
    case "rock":
    case "paper":
    case "scissors":
      return humanChoice;
    default:
      return getHumanChoice();
  }
}
