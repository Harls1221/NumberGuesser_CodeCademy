let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = ()=> {
    return Math.floor(Math.random() * 10);
}

/*Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.

This function:

Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.

Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.

Return true if the human player wins, and false if the computer player wins.

*/

const getAbsoluteDistance = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
}

//Checks to make sure user inputs only numbers 1-10

const compareGuesses = (humanGuess)=>{
    if(humanGuess > 10 || humanGuess < 1){
        return alert("Please type in a number between 1 & 10! ")
    }
}


/*
Create an updateScore() function. This function will be used to correctly increase the winner’s score after each round.

This function:

-Has a single parameter. This parameter will be a string value representing the winner.

-Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. 
The string passed in will be either 'human' or 'computer'.

-Does not need to return any value.

*/
/*
const updateScore = winner => {
    if(winner === 'human'){
        humanScore++;
    }else if (winner === 'computer'){
        computerScore++;
    }
}
*/
const updateScore = winner =>{
    winner ==='human' ? humanScore++ : computerScore++;
}



/*Step 6: 
Create an advanceRound() function. This function will be used to update the round number after each round.

advanceRound() should increase the value of currentRoundNumber by 1.

After completing advanceRound(), your Number Guesser game should be fully operational. 
You should be able to make guesses, see your or the computer score increase correctly, move to the next round, and see the correct round displayed. */


const advanceRound = () => currentRoundNumber++;

updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);

//END PROGRAM/
