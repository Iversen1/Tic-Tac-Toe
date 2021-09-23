// Start with getting the X and O from the array into the HTML, 
// find each square in the html
// 
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

function renderBoard () {
    let grid = document.getElementById("container");
    for(i=1; i<10; i++) {
        let singleGrid = document.createElement("div");
        grid.appendChild(singleGrid).className = "single-grid";
        singleGrid.setAttribute("id", "grid" + i);
        singleGrid.innerHTML = i;    
    }
}
renderBoard()

var elements = document.getElementsByClassName("single-grid");

for ( i= 0; i< elements.length; i++) {
    elements[i].addEventListener("click", function() {
        console.log("button"+ "clicked")
    })

}

// Array.from(document.getElementsByClassName("single-grid")).forEach((element) => 
//     addEventListener("click", function() {
//         console.log(event.target)
//     }) );