// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

let firstCard = 4
let secondCard = 7

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Draw a new card?");
} else if (sum === 21){
    console.log("Congrats you won the game!");
} else {
    console.log("You're out!");
}

