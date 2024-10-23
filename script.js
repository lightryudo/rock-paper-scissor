/* create a function that randomly chose between rock/paper/scissor
create a function that take user choice and returns it
create a variable that keep tracks of the player score
write the logic to play a single round 
write the logic to play best of five game
*/

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate random number between 1 and 100

    if (randomNumber == 0) {
        return "Scissor"; // Return "Scissor"
    } else if (randomNumber == 1) {
        return "Paper"; // Return "Paper"
    } else {
        return "Rock"; // Return "Rock"
    }
}
//function to generate a random choice 

console.log(getComputerChoice());



