// Start with getting the X and O from the array into the HTML, 
// Module
const gameBoard = (() => {
    let gameboard = ["O", "X", "0",
                    "X", "O", "X",
                    "O", "X", "O" ]

})();

const Player = (name, points) => {
    const getName = () => name;
    const getPoints = () => points;


}

const displayController = (() => {

})


function renderBoard (rows, cols) {
    let grid = document.getElementById("container");
    for(i=0; i <rows * cols; i++) {
        let singleGrid = document.createElement("div");
        grid.appendChild(singleGrid).className = "single-grid";
        

        
    }

}
renderBoard(3,3)