let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

let sample1 = compareGuesses(2, 3, 5);
let sample2 = compareGuesses(4, 4, 5);
let sample3 = compareGuesses(8, 2, 9);
console.log(sample1);
console.log(sample2);
console.log(sample3);

function compareGuesses(human, computer, secretTarget) {
  const humanDifference = Math.abs(secretTarget - human);
  const computerDifference = Math.abs(secretTarget - computer);
  if (humanDifference < computerDifference) {
    return true;
  } else {
    return false;
  }
}

updateScore('human');
updateScore('computer');
console.log(humanScore);
console.log(computerScore);

function updateScore(winner) {
  switch (winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
}

function advanceRound() {
  currentRoundNumber++;
}

// You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
// Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field.
