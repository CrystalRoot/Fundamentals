/*Function call. Adds an event listener to run the generateFaces function when the window loads. The load event has inconsistent results when used on the body, and this method permits the entire page to load before running scripts.*/
window.addEventListener("load", generateFaces);
/*Declare global variable that will be reassigned.*/
let numberOfFaces = 5;
/*Declare global constant that will not be reassigned.*/
const theLeftSide = document.getElementById("leftSide");
/*Declare global constant that will not be reassigned.*/
const theRightSide = document.getElementById("rightSide");

function generateFaces() {
    /*For loop. Initialize iterator to 0. While iterator is smaller than the value held in numberOfFaces, run the loop and then increment iterator.*/
    for (let i = 0; i < numberOfFaces; i++) {
        /*Creates a new img element and assigns it to "face".*/
        let face = document.createElement("img");
        /*sets face source property*/
        face.src = "images/smile.png";
        /*Create random number between 1 - 400*/
        let randomTop = Math.floor((Math.random() * 400) + 1);
        /*Create random number between 1 - 400*/
        let randomLeft = Math.floor((Math.random() * 400) + 1);
        /*Assign the random # held in randomTop to the face.style.top property. This sets the vertical position of the img to a random # between 1 - 400.*/
        face.style.top = randomTop + "px";
        /*Assign the random # held in randomLeft to the face.style.left property. This sets the horizontal position of the img to a random # between 1 - 400.*/
        face.style.left = randomLeft + "px";
        /*Add the newly created img as a child of theLeftSide node.*/
        theLeftSide.appendChild(face);
    };
    /*Declare a variable whose value will not be reassigned. Assign to it the value of the entire theLeftSide div node, including all child nodes. cloneNode() creates a copy of a node and returns this copy (clone). Including the param of "true" also copies any child nodes. */
    const leftSideImages = theLeftSide.cloneNode(true);
    /*Removes the last element child of leftSideImages. This creates one fewer smiley face on the right side.*/
    leftSideImages.removeChild(leftSideImages.lastElementChild);
    /*Add leftSideImages as a child of theRightSide div.*/
    theRightSide.appendChild(leftSideImages);
    /*The extra smiley face on the left side is always the last child of theLeftSide node. Adds an event listener to listen for a click on this node. Clicking on this node will cause the function nextLevel to run. */
    theLeftSide.lastElementChild.addEventListener("click", nextLevel);
    /*Adds an event listener to the body element to listen for a click on anything other than the node specified above. */
    document.body.addEventListener("click", gameOver);
};

function nextLevel(event) {
    /*Propagation is when something bubbles up to parent elements or down to child elements. The stopPropagation method prevents this behavior.*/
    event.stopPropagation();
    /*Increments the # held in numberOfFaces by 5.*/
    numberOfFaces += 5;
    /*Remove all child nodes of theLeftSide, so a new set of faces (image nodes) can be generated.*/
    while (theLeftSide.hasChildNodes()) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    };
    /*Remove all child nodes of theRightSide, so a new set of faces (image nodes) can be generated.*/
    while (theRightSide.hasChildNodes()) {
        theRightSide.removeChild(theRightSide.firstChild);
    };
    /*Calls the generateFaces() function once again, generating a new set of smiley faces. Each time there will be 5 more than before, due to the previous line.*/
    generateFaces();
};

function gameOver() {
    /*Alert the player that the game has ended.*/
    alert("Game over");
    /**/
    document.body.removeEventListener("click", gameOver);
    /**/
    theLeftSide.lastElementChild.removeEventListener("click", nextLevel);
};