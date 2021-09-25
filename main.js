// Start with getting the X and O from the array into the HTML, 
// Have added x to each mark
// continue finding out if this should be InnerHTML or some other way of putting a mark on the board

// 
// Module
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
            currentSquare.textContent = "X";
            currentSquare.style.fontSize = "xx-large"
             });
         }}
                
    return { renderBoard, addMark };

})();

const Player = (name, points) => {
    const getName = () => name;
    const getPoints = () => points;
}

const displayController = (() => {
})


gameBoard.renderBoard();
gameBoard.addMark();




// Array.from(document.getElementsByClassName("single-grid")).forEach((element) => 
//     addEventListener("click", function() {
//         console.log(element)
//     }) );