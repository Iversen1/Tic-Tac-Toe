// check if the current cell has a marker
// place players marker
// check for win
// Switch players 



// Start with setting the computers O, make a random number from the grid items and check for a marker
// Possible solution: 
// after each mark, add the target board value number to the players own score by array
// Then compare this to the winconditions array




const gameBoard = (() => {

    let gameboard = ["O", "X", "0",
                    "X", "O", "X",
                    "O", "X", "O" ]

    const renderBoard = () =>  {
        let grid = document.getElementById("container");
        for(i=1; i<10; i++) {
            let singleGrid = document.createElement("div");
            grid.appendChild(singleGrid).className = "single-grid";
            singleGrid.setAttribute("id", "grid" + i);
        }
    }

    const addMark = () => {
        var elements = document.getElementsByClassName("single-grid");
        let singleGrid = document.getElementById("grid1");

        for ( i= 0; i< elements.length; i++) {
            elements[i].addEventListener("click", function(evt) {
            let currentSquare = evt.target;
        
            if(currentSquare.textContent === "0"|| currentSquare.textContent === "X") {
                console.log("already taken")
            } 
            else {
                for (i=0; i <gameboard.length; i++) {
                
                currentSquare.textContent = "X";
                currentSquare.style.fontSize = "xx-large"
                currentSquare.setAttribute("name", "x")

                    // singleGrid.textContent = "0";
                    // singleGrid.style.fontSize = "xx-large"
                }
            }
    });
         }}
         
         
        
    

    return { renderBoard, addMark };

})();

// const Player = (name, points) => {
//     const getName = () => name;
//     const getPoints = () => points;

// }


// Players created by using factory functions
const Person = (name) => {
    const sayName = () => console.log("my name is " + name)
    return {sayName}
}



const displayController = (() => {
})


gameBoard.renderBoard();
gameBoard.addMark();



const game = (() => {

    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const test = [2,4,6];

    const checkWin = () => {
            if (test == winnConditions) {
                console.log("winner")
            }
    } 


})();



// Array.from(document.getElementsByClassName("single-grid")).forEach((element) => 
//     addEventListener("click", function() {
//         console.log(element)
//     }) );


// const addMark = () => {
//     var elements = document.getElementsByClassName("single-grid");
//     let singleGrid = document.getElementById("grid1");
//     for ( i= 0; i< elements.length; i++) {
//         elements[i].addEventListener("click", function(evt) {
//         let currentSquare = evt.target;
//         if(currentSquare.textContent === "0" || currentSquare.textContent === "X") {
//           } 
//         else {
//             for (i=0; i <gameLetters.length; i++) {
//                 let number = [];
//                 if ( gameLetters) 
//                 number += [i]; 
//                 console.log(number[i])
            
//             currentSquare.textContent = "X";
//             currentSquare.style.fontSize = "xx-large"
//             }
//         }
// });
//      }}
     