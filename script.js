/* create a function that randomly chose between rock/paper/scissor
create a function that take user choice and returns it
create a variable that keep tracks of the player score
write the logic to play a single round 
write the logic to play best of five game
*/

//variables to store scores
let humanScore = 0
let computerScore = 0


//function to generate a random choice 

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate random number between 1 and 100

    if (randomNumber == 0) {
        return "scissor";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "rock";
    }
}

// function to determine who wins 

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    } else if
        (playerChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        return "You win!"
    }
    else if (playerChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        return "You win!"
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win!"
    }
    else {
        computerScore++;
        return "Computer wins!"
    }
}

function playGameRound(roundNumber) {
    const playerChoice = prompt(`Round ${roundNumber + 1}: Make your choice (rock, paper, or scissor):`).toLowerCase();
    const choices = ["rock", "paper", "scissor"];

    // Validate the player's choice
    if (!choices.includes(playerChoice)) {
        console.log("Invalid choice, please enter rock, paper, or scissor.");
        return; // End the function if the input is invalid
    }

    const computerChoice = getComputerChoice(); // Get computer's choice
    console.log(`Computer chose: ${computerChoice}`);
    console.log(playRound(computerChoice, playerChoice)); // Play the round
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`); // Display the current scores
}
function playGame() {
    playGameRound(0);
    playGameRound(1);
    playGameRound(2);
    playGameRound(3);
    playGameRound(4);

    // Declare the winner
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a draw! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();