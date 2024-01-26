const table = document.getElementById("myTable");
let tableau2D = [
    ['m','m','m','m','m','m','m','m','m','m','m','m','m','d','m','m','m','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','s','m','m','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','s','s','m','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','s','s','m','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','s','d','t','s','s','s','s','s','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','t','s','s','s','s','s','s','s','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','s','s','s','s','s','t','s','s','s','s','m'],
    ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','d','s','m','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','m','m','m','t','s','m','m','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','s','s','s','s','s','s','s','s','s','s','s','m','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','d','s','t','s','s','d','s','s','s','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','s','s','s','s','s','s','s','m','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','m','s','s','s','s','s','s','t','m','m','m','m','m','m','m'],
    ['m','m','m','m','m','m','m','m','m','m','m','m','j','m','m','m','m','m','m','m','m','m','m','m','m'],
  ];

const playerPosition = { x: 12, y: 13 };
const treasureCount = tableau2D.flat().filter((cell) => cell === 't').length;
let score = 0;

function afficherTableau() {
    for (let i = 0; i < tableau2D.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < tableau2D[i].length; j++) {
            let cell = document.createElement("td");

            if (tableau2D[i][j] !== 'm' && tableau2D[i][j] !== 's' && tableau2D[i][j] !== 'd' && tableau2D[i][j] !== 'j' && tableau2D[i][j] !== 't') {
                cell.textContent = tableau2D[i][j];
            }

            if (tableau2D[i][j] === 'm') {
                cell.classList.add('m');
            } else if (tableau2D[i][j] === 's') {
                cell.classList.add('s');
            } else if (tableau2D[i][j] === 'd') {
                cell.classList.add('d');
            } else if (tableau2D[i][j] === 'j') {
                cell.classList.add('j');
            } else if (tableau2D[i][j] === 't') {
                cell.classList.add('t');
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function updateDisplay() {
    table.innerHTML = '';
    afficherTableau();
    updateScore(); 
}

function updateScore() {
    document.getElementById("score").textContent = "Score : " + score;
}

function resetGame() {
    score = 0;
    playerPosition.x = 12;
    playerPosition.y = 13;
    tableau2D = [
        ['m','m','m','m','m','m','m','m','m','m','m','m','m','d','m','m','m','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','s','m','m','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','s','s','m','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','s','s','m','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','s','d','t','s','s','s','s','s','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','t','s','s','s','s','s','s','s','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','s','s','s','s','s','t','s','s','s','s','m'],
        ['m','m','m','m','m','m','m','m','m','m','m','m','s','s','d','s','m','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','m','m','m','t','s','m','m','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','s','s','s','s','s','s','s','s','s','s','s','m','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','d','s','t','s','s','d','s','s','s','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','s','s','s','s','s','s','s','m','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','m','s','s','s','s','s','s','t','m','m','m','m','m','m','m'],
        ['m','m','m','m','m','m','m','m','m','m','m','m','j','m','m','m','m','m','m','m','m','m','m','m','m'],
      ];
    updateDisplay();
    updateScore();
    enableButtons();
}

function checkWinCondition() {
    if (score === treasureCount) {
        alert("Félicitations ! La partie est gagnée !");
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("upButton").disabled = true;
    document.getElementById("downButton").disabled = true;
    document.getElementById("leftButton").disabled = true;
    document.getElementById("rightButton").disabled = true;
}

function enableButtons() {
    document.getElementById("upButton").disabled = false;
    document.getElementById("downButton").disabled = false;
    document.getElementById("leftButton").disabled = false;
    document.getElementById("rightButton").disabled = false;
}

function movePlayer(direction) {
    const { x, y } = playerPosition;
    let newX = x;
    let newY = y;

    switch (direction) {
        case 'up':
            newY = y - 1;
            break;
        case 'down':
            newY = y + 1;
            break;
        case 'left':
            newX = x - 1;
            break;
        case 'right':
            newX = x + 1;
            break;
        default:
            return;
    }

    if (newX >= 0 && newX < tableau2D[0].length && newY >= 0 && newY < tableau2D.length) {
        const newPositionValue = tableau2D[newY][newX];

        if (newPositionValue === 'm') {
            return;
        } else if (newPositionValue === 't') {
            score += 1;
            updateScore();
            tableau2D[newY][newX] = 's';
            updateDisplay();
            checkWinCondition();
        } else if (newPositionValue === 'd') {
            alert("ECHEC ! La partie est terminée.");
            disableButtons();
            return;
       
        }

        tableau2D[y][x] = 's';
        tableau2D[newY][newX] = 'j';
        playerPosition.x = newX;
        playerPosition.y = newY;

        updateDisplay();
        moveMonsters();
    }
}

function moveMonsters() {
    const directions = ["vertical", "horizontal"]; 

    for (let i = 0; i < tableau2D.length; i++) {
        for (let j = 0; j < tableau2D[i].length; j++) {
            if (tableau2D[i][j] === "d") {
                const randomDirectionIndex = Math.floor(Math.random() * directions.length);
                const direction = directions[randomDirectionIndex];

                let newX = j;
                let newY = i;

                if (direction === "vertical") {
                    if (Math.random() < 0.5) {
                        newY = i - 1;  
                    } else {
                        newY = i + 1;  
                    }
                } else if (direction === "horizontal") {
                    if (Math.random() < 0.5) {
                        newX = j - 1;  
                    } else {
                        newX = j + 1;  
                    }
                }

                if (newX >= 0 && newX < tableau2D[i].length && tableau2D[i][newX] !== "m" && tableau2D[i][newX] !== "t") {
                    tableau2D[i][j] = "s";
                    tableau2D[i][newX] = "d";
                } else if (newY >= 0 && newY < tableau2D.length && tableau2D[newY][j] !== "m" && tableau2D[newY][j] !== "t") {
                    tableau2D[i][j] = "s";
                    tableau2D[newY][j] = "d";
                }
            }
        }
    }

    updateDisplay();
}


document.getElementById("upButton").addEventListener("click", () => movePlayer("up"));
document.getElementById("downButton").addEventListener("click", () => movePlayer("down"));
document.getElementById("leftButton").addEventListener("click", () => movePlayer("left"));
document.getElementById("rightButton").addEventListener("click", () => movePlayer("right"));

document.getElementById("resetButton").addEventListener("click", resetGame);

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "ArrowUp") {
        movePlayer("up");
    } else if (key === "ArrowDown") {
        movePlayer("down");
    } else if (key === "ArrowLeft") {
        movePlayer("left");
    } else if (key === "ArrowRight") {
        movePlayer("right");
    }
});

afficherTableau();
updateScore();
