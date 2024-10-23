/* create a function that randomly chose between rock/paper/scissor
create a function that take user choice and returns it
create a variable that keep tracks of the player score
write the logic to play a single round 
write the logic to play best of five game
*/

//function to generate a random choice 

function ComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate random number between 1 and 100

    if (randomNumber == 0) {
        return "Scissor"; // Return "Scissor"
    } else if (randomNumber == 1) {
        return "Paper"; // Return "Paper"
    } else {
        return "Rock"; // Return "Rock"
    }
}

// function to determine who wins 

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    } else if
        (playerChoice === "rock" && computerChoice === "scissor") {
        return "You win!"
    }
    else if (playerChoice === "scissor" && computerChoice === "paper") {
        return "You win!"
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win!"
    }
    else {
        return "Computer wins!"
    }
}

const playerChoice = prompt("Make your choice: rock, paper, or scissor").toLowerCase();
const choices = ["rock", "paper", "scissor"];
if (!choices.includes(playerChoice)) {
    console.log("invalid choice, please enter rock,paper or scissor");
}
else {
}
const computerChoice = getComputerChoice()


