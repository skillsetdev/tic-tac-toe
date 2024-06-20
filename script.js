function createGrid() {
  const gameField = document.querySelector("#game-field");
  for (let i = 1; i < 10; i++) {
    var gameCell = document.createElement("div");
    gameCell.className = "game-cell";
    gameCell.id = `cell${i}`;
    gameCell.textContent = `${i}`;
    gameField.appendChild(gameCell);
  }
}
createGrid();
