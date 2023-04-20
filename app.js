let cells = document.querySelectorAll(".cell");
let player1Button = document.querySelector("#player1");
let player2Button = document.querySelector("#player2");
let resetButton = document.querySelector("#reset");

let currentPlayer = "X";
setPlayerTurn(currentPlayer);

cells.forEach(cell => {
cell.addEventListener("click", () => {
    if (cell.innerHTML === "") {
    cell.innerHTML = currentPlayer;
      checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    setPlayerTurn(currentPlayer);
    }
});
});

player1Button.addEventListener("click", () => {
currentPlayer = "X";
setPlayerTurn(currentPlayer);
});

player2Button.addEventListener("click", () => {
currentPlayer = "O";
setPlayerTurn(currentPlayer);
});

resetButton.addEventListener("click", resetGame);

function setPlayerTurn(player) {
const playerTurn = document.querySelector("#player-turn");
playerTurn.textContent = `Ходит игрок: ${player}`;
}

function checkWin() {
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let winner = null;

for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    const a = cells[combo[0]].innerHTML;
    const b = cells[combo[1]].innerHTML;
    const c = cells[combo[2]].innerHTML;
    if (a !== "" && a === b && b === c) {
    winner = a;
    break;
    }
}
if (winner) {
    alert(`Player win: ${winner}`);
    resetGame();
} else if (isDraw()) { 
    alert("Draw!");
    resetGame();
}
}

function isDraw() {
let isBoardFull = true;
for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
    isBoardFull = false;
    break;
}
}
    return isBoardFull;
}

   
function resetGame() {
    cells.forEach(cell => {
    cell.innerHTML = "";
});
    currentPlayer = "X";
    setPlayerTurn(currentPlayer);
};
