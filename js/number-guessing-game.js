/*Expansive comments are for my own educational purposes and not due to a misunderstanding of standards. */

function runGame() {
    /*Initialize variables for later use. */
    /*Declare variable, initialize to empty string*/
    let guessString = "";
    /*Declare variable, initialize to 0 */
    let guessNumber = 0;
    /*Declare variable, initialize to boolean false */
    let correct = false;
    /*Declare variable, initialize to 0 */
    let numTries = 0;

    /*Declare variable ranNum and assign to it the value resulting from calling the floor method of the math object on the random method of the math object multiplied by 100, then adding 1. This generates a random number between 0 and 1, then increases the upper bound to 99.99, then constrains it to whole numbers, and finally adds one to increase the upper bound to 100.*/
    const ranNum = Math.floor((Math.random() * 100) + 1);
    do {
        /* Reassigns guessString to whatever the player enters in response to the provided prompt. Escape sequence \n is a line break. Can double just as <br> in html. */
        guessString = prompt("I am thinking of a number from 1 - 100. \nCan you guess the number?")
        /*Corrects error where clicking the cancel button is interpreted as entering 0. Clicking 'cancel' causes the return value of the prompt function to be null, which Javascript then automatically uses type coercion to convert to 0, which is outside the range set for the game. Checking for this and simply returning breaks out of the loop and ends the game. */
        if (guessString === null) {
            return;
        }
        /*the + is a unary operator to perform numeric conversion to the string value held in guessString*/
        guessNumber = +guessString
        /* Takes the return value of the checkGuess function (either true or false), passing in params guessNumber from the line above and the ranNum constant, and returns a Boolean value of true/false depending on whether or not they match. */
        correct = checkGuess(guessNumber, ranNum);
        /*Increments the value of this variable by 1 with each loop iteration. */
        numTries +=1;
        /* Instructions for when to end the DO loop. While the "correct" variable evaluates as false, continue the loop. When it evaluates as true, exit the loop. */
    } while (!correct);
    alert("Correct! I was thinking of the number " + ranNum + "!\nIt took you " + numTries + " tries to guess!");
}

function checkGuess(guessNumber, ranNum) {
    /*Local variable which sets the return value of the function.*/
    let result = false; 
    /*If the value stored in guessNumber is not a number, this alert will be triggered.*/
    if (isNaN(guessNumber)) {
        alert("You have not entered a valid number.\nPlease enter a number.")
    /* Checks for whether the value entered is a whole number. Uses the modulus operator. Modulus divides the first operand by the second, then returns the remainder. Only whole numbers will have a remainder of 0 when divided by 1. Therefore, if guessNumber divided by 1 has a remainder of something other than zero, guessNumber is not a whole number and the alert is triggered. */
    } else if (guessNumber % 1 !=0) {
        alert("You have not entered a whole number.\nPlease enter a whole number between 1 and 100.")
    /* Checks for two conditions. If the value entered by the player is smaller than 1 OR bigger than 100, the alert is triggered. */
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("You have entered a number outside the specified range.\nPlease enter a whole number between 1 and 100.")
    /* Checks whether the value entered by the player is bigger than the ranNum. */
    } else if (guessNumber > ranNum) {
        alert("Your guess is too big!\nTry again!")
    /* Checks whether the value entered by the player is smaller than the ranNum. */
    } else if (guessNumber < ranNum) {
        alert("Your guess is too small!\nTry again!")
    /* Final else statement will only occur if no previous conditions are met. In this case, that means the guess must be correct. In this case, the game will reset the value of "result" to true. */
    } else {
        result = true;
    }
    /* Regardless of which conditional statement is met, the value held in the "result" variable (initialized to FALSE and only reset if the final ELSE statement is met) is returned, and this is the value passed to the runGame function */
    return result;
}