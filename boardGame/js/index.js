const boardSize = 10;
const gameBoard = document.getElementById("gameBoard");
let playerPosition = { x: 0, y: 0 };
let exitPosition = { x: boardSize - 1, y: boardSize - 1 };

let maze = Array.from({ length: boardSize }, () =>
  Array.from({ length: boardSize }, () => (Math.random() < 0.3 ? 1 : 0))
);

maze[playerPosition.y][playerPosition.x] = 0;
maze[exitPosition.y][exitPosition.x] = 0;

function renderBoard() {
  gameBoard.innerHTML = "";
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (maze[y][x] === 1) {
        cell.classList.add("wall");
      }
      if (x === playerPosition.x && y === playerPosition.y) {
        cell.textContent = "🙂";
        cell.classList.add("player");
      } else if (x === exitPosition.x && y === exitPosition.y) {
        cell.textContent = "🏁";
        cell.classList.add("exit");
      }
      gameBoard.appendChild(cell);
    }
  }
}

function movePlayer(dx, dy) {
  const newX = playerPosition.x + dx;
  const newY = playerPosition.y + dy;
  if (
    newX >= 0 &&
    newX < boardSize &&
    newY >= 0 &&
    newY < boardSize &&
    maze[newY][newX] === 0
  ) {
    playerPosition = { x: newX, y: newY };
    if (newX === exitPosition.x && newY === exitPosition.y) {
      alert("축하합니다! 출구에 도착했습니다!");
    }
  }
  renderBoard();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") movePlayer(0, -1);
  else if (e.key === "ArrowDown") movePlayer(0, 1);
  else if (e.key === "ArrowLeft") movePlayer(-1, 0);
  else if (e.key === "ArrowRight") movePlayer(1, 0);
});

renderBoard();
