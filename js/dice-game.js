function rollDice() {
    /*Declare variable goldCoins and initialize to number 0. */
    let goldCoins = 0
    /*For loop. Declare iterator initialized to 0. While iterator is less than 10, perform the tasks in the code block, then increment the iterator by one (i++). */
    for (i = 0; i < 10; i++) {
        /*Declare const variable and assign to it the result of calling Math.floor on (Math.random * 6 - 1), which results in a whole number between 1 - 6. This represents the 6 sides of a standard die. */
        const roll = Math.floor(Math.random() * 6) + 1;
        alert("You have rolled a " + roll + ". Click OK to roll again.");
        /*Set of conditional statements containing directions for what to do with each possible result. */
        /*If "roll" is 1, alert the player that the game is over, then use a break statement to break out of the for loop, thus ending the game. The code below the for loop will then execute, which in this case is a single alert to the player. */
        if (roll === 1) {
            alert("Game over! No more rolls!");
            break;
        };
        /*If "roll" is 2 or 3 (as condition for 1 has already been covered), the continue statement will cause all code below the "continue" to be skipped, though the iterator does still increment.   */
        if (roll < 4) {
            continue;
        };
        /*If "roll" is 4, then we use a nested if statement to check whether the current value of goldCoins is greater than 0. If so, 1 is subtracted from that value and an appropriate alert is triggered. I initially planned to add an else statement for  when goldCoins = 0, but as the natural behavior of the function is to continue, an else block containing just a continue statement is redundant. And informing the player that they should have lost a coin but were too poor to afford it seems rude.  */
        if (roll === 4) {
            if (goldCoins > 0) {
                goldCoins = goldCoins - roll;
                alert("You lose 1 gold coin! You have a total of " + goldCoins + " gold coins.");
            };
        };
        /*If "roll" is 5, first increase goldCoins by "roll", then give the player an appropriate alert with the amount of coins they have won and a running total of coins. Doing this in the opposite order would alert the player to the amount of coins they had BEFORE this roll, as tasks are generally run in written order unless otherwise specified. */
        if (roll === 5) {
            goldCoins = goldCoins + roll;
            alert("Congratulations! You win 5 gold coins! You have won a total of " + goldCoins + " gold coins!");
        };
        /*If "roll" is 6, first increase goldCoins by roll, then give the player an appropriate alert. */
        if (roll === 6) {
            goldCoins = goldCoins + roll;
            alert("Congratulations! You win 6 gold coins! You have won a total of " + goldCoins + " gold coins!");
        };
    };
    /*After the loop has executed 10 times (condition set in the declaration) it will exit and only then will the final alert run.*/
    alert("Game over. You have won " + goldCoins + " gold coins!")
};