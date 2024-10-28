document.addEventListener("DOMContentLoaded", function () {
    // Exercise 1 - Layout the board
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
        square.classList.add("square");
    });
