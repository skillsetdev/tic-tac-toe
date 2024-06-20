let games = 0;
let users = [];
let cells = [];
var currentTurnUser;
var gamesCount;
function createGrid() {
  const gameField = document.querySelector("#game-field");
  gameField.innerHTML = "";
  for (let i = 1; i < 10; i++) {
    var gameCell = document.createElement("div");
    gameCell.className = "game-cell";
    gameCell.id = `cell${i}`;
    gameCell.textContent = `${i}`;
    gameCell.addEventListener("click", tickTheCell(e));
    gameField.appendChild(gameCell);
    cells.push(gameCell);
  }
}
function tickTheCell(e) {
  if (currentTurnUser.typeX === true) {
    e.currentTarget.textContent = "X";
    switchUser();
  } else {
    e.currentTarget.textContent = "O";
    switchUser();
  }
}
switchUser(){
currentTurnUser = 
}

function createGame(name1, name2) {
  games = games + 1;
  createGrid();
  createUser(name1);
  createUser(name2);
}
function createUser(name) {
  if (users.length < 2) {
    let typeX;
    switch (users.length) {
      case 0:
        typeX = true; //x
        break;
      case 1:
        typeX = false; //x
        break;
    }
    return { name, typeX, wins };
  }
}

createGrid();
