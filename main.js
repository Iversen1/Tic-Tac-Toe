// 2. You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
// Your players are also going to be stored in objects… and you’re probably going to want an object 
// to control the flow of the game itself.
// 2.1 Your main goal here is to have as little global code as possible.
//     Try tucking everything away inside of a module or factory. 
//     Rule of thumb: if you only ever need ONE of something (gameBoard, ), use a module. 
//     If you need multiples of something (players!), create them with factories.

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