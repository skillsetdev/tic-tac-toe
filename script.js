const nameRiley = "Riley";
const nameBob = "Bob";

let users = [];
let cells = [];
var currentTurnUser;
var gamesCount = 0;
function createGrid() {
  const gameField = document.querySelector("#game-field");
  gameField.innerHTML = "";
  //cleared
  for (let i = 1; i < 10; i++) {
    var gameCell = document.createElement("div");
    gameCell.className = "game-cell";
    gameCell.id = `cell${i}`;
    gameCell.textContent = `${i}`;
    gameCell.addEventListener("click", tickTheCell);
    gameField.appendChild(gameCell);
    cells.push(gameCell);
  }
}
function tickTheCell(e) {
  if (currentTurnUser.typeX === true) {
    e.currentTarget.textContent = "X";
  } else {
    e.currentTarget.textContent = "O";
  }
  checkForWin();
  switchUser();
}
function switchUser() {
  if (currentTurnUser === users[0]) {
    currentTurnUser = users[1];
    console.log(`Now it is ${currentTurnUser.name}'s turn`);
  } else if (currentTurnUser === users[1]) {
    currentTurnUser = users[0];
    console.log(`Now it is ${currentTurnUser.name}'s turn`);
  } else {
    console.log(`Now it is noone's turn`);
  }
}
function checkForWin() {
  const cellTextContents = [];
  cells.forEach((cell) => {
    cellTextContents.push(cell.textContent);
  });

  // Define winning combinations
  const winningCombinations = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  // Check for win
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cellTextContents[a] &&
      cellTextContents[a] === cellTextContents[b] &&
      cellTextContents[a] === cellTextContents[c]
    ) {
      console.log(`Player with ${cellTextContents[a]} wins!`);
      return true;
    }
    // No winner found
    return false;
  }
}
function createGame(name1, name2) {
  users = [];
  cells = [];
  currentTurnUser = undefined;
  //cleared
  gamesCount = gamesCount + 1;
  createGrid();
  createUser(name1);
  createUser(name2);
  currentTurnUser = users[0];
  //
  console.log(
    `Game started, the users are: ${users[0].name} and ${users[1].name}. Current user is ${currentTurnUser.name}`
  );
}
function createUser(name) {
  if (users.length < 2) {
    let typeX;
    let wins = 0;
    switch (users.length) {
      case 0:
        typeX = true; //x
        break;
      case 1:
        typeX = false; //x
        break;
    }
    const newUser = { name, typeX, wins };
    users.push(newUser);
    console.log(`New user created:`);
    console.log(newUser);
  }
}

createGame(nameRiley, nameBob);
