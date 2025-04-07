const choices = ["rock", "paper", "scissors"];
let currentlyPlaying = false;

let startButton = document.getElementById("startButton");
let resetButton = document.getElementById("resetButton");

let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");

function createRandomChoice() {
    return choices[Math.floor(Math.random() * 2)];
}

function startGame() {
    alert("Game started!");
    startButton.disabled = true;
    resetButton.disabled = false;
    let choice = createRandomChoice();
    currentlyPlaying = true;

    rockButton.onclick = () => {
        if (!currentlyPlaying) {
            alert("Error, please press start button.");
            currentlyPlaying = false;
            return -1;
        }

        if (choice === "rock") {
            alert("Tie!");
        }

        if (choice === "paper") {
            alert("You lose.");
        }

        if (choice === "scissors") {
            alert("You win!");
        }

        currentlyPlaying = false;
    }

    paperButton.onclick = () => {
        if (!currentlyPlaying) {
            alert("Error, please press start button.");
            currentlyPlaying = false;
            return -1;
        }

        if (choice === "rock") {
            alert("You win!");
        }

        if (choice === "paper") {
            alert("Tie!");
        }

        if (choice === "scissors") {
            alert("You lose.");
        }

        currentlyPlaying = false;
    };

    scissorsButton.onclick = () => {
        if (!currentlyPlaying) {
            alert("Error, please press start button.");
            currentlyPlaying = false;
            return -1;
        }

        if (choice === "rock") {
            alert("You lose.");
        }

        if (choice === "paper") {
            alert("You win!");
        }

        if (choice === "scissors") {
            alert("Tie!");
        }

        currentlyPlaying = false;
    };

}

function reset() {
    startButton.disabled = false;
    resetButton.disabled = true;

    currentlyPlaying = false;
}

startButton.addEventListener("click", startGame);
resetButton.disabled = true;
resetButton.addEventListener("click", reset);