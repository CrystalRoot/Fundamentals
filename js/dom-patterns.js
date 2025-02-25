function showPattern() {
    const colorsArr = ["green", "lime", "forest green", "moss green", "medium sea green", "sea green", "olive", "yellow green", "spring green", "pale green", "dark green"];
    /*Set initial values for CSS attributes to be used later*/
    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;

    /*While loop with a condition that ensures it will run, as we have hard-coded the initial value of "width" to 500, which satisfies this condition. This means I must ensure this condition will at some point not be met, so this does not become an infinite loop. */
    while (width > 50) {
        /*Declare variable to hold a randomly generated index number from the hard-coded array above. */
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        /*Declare variable to hold a reference to a new node in the DOM*/
        const newDiv = document.createElement("div");
        /*Set style properties of new element, initially to the values hard-coded above. These values will change with each iteration (lines 22 - 25). The first div will be a 500x500 square positioned 25px from the top and 25px from the left.*/
        newDiv.style.top = topPosition + "px";
        newDiv.style.left = leftPosition + "px";
        newDiv.style.width = width + "px";
        newDiv.style.height = height + "px";
        /*Optional: 2nd way to turn the square into a circle (1st in HTML file).*/
        // newDiv.style.borderRadius = "50%";
        /*Colors the background of the new div whatever color is held in the current iteration of the randomColorIdx variable. Because my array contains multi-word colors and my browser has had issues with that in the past, I have used regex to delete any whitespace characters that might be within each item.*/
        newDiv.style.background = colorsArr[randomColorIdx].replace(/\s/g, "");
        /*Attach the new div to the document.*/
        document.body.appendChild(newDiv);
        /*Add 10px to the topPosition and leftPosition*/
        topPosition += 10;
        leftPosition += 10;
        /*Decrement width & height by 20px. This will ensure that eventually width < 50 and the loop will exit.*/
        width -= 20;
        height -= 20;
    };
};