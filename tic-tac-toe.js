document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
        square.classList.add("square");
    });

    let currentPlayer = "X";
    const gameState = Array(9).fill(null);

    squares.forEach((square, index) => {
        square.addEventListener("click", function () {
            if (!gameState[index]) {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                checkWinner();
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });

        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        winningCombinations.some(combination => {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                const status = document.getElementById("status");
                status.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                status.classList.add("you-won");
                return true;
            }
        });
    }

    const resetButton = document.getElementById("new-game");
    resetButton.addEventListener("click", function () {
        gameState.fill(null);
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
        document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");
        currentPlayer = "X";
    });
});
