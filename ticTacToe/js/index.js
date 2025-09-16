const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let board = Array(16).fill(null);
let currentPlayer = "X";
let gameActive = true;

function renderBoard() {
  boardElement.innerHTML = "";
  board.forEach((value, index) => {
    const btn = document.createElement("button");
    btn.className = "cell";
    btn.textContent = value ? value : "";
    btn.disabled = value || !gameActive;
    btn.addEventListener("click", () => handleCellClick(index));
    boardElement.appendChild(btn);
  });
}

// 승리 조건
const winPatterns = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 4, 8, 12],
  [2, 4, 6, 14],
];

function checkWinner() {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.includes(null) ? null : "Draw";
}

function handleCellClick(index) {
  if (!gameActive || board[index]) {
    return;
  }
  board[index] = currentPlayer;
  renderBoard();

  const winner = checkWinner();
  if (winner) {
    gameActive = false;
    statusElement.textContent =
      winner === "Draw" ? "무승부!" : `플레이어 ${winner} 승리!`;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusElement.textContent = `플레이어 ${currentPlayer} 차례`;
  }
}

resetBtn.addEventListener("click", () => {
  board = Array(16).fill(null);
  currentPlayer = "X";
  gameActive = true;
  statusElement.textContent = `플레이어 ${currentPlayer} 차례`;
  renderBoard();
});

renderBoard();
