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
    startButton.style.opacity = "0.5";
    startButton.disabled = true;

    resetButton.style.opacity = "1";
    resetButton.disabled = false;

    let choice = createRandomChoice();
    currentlyPlaying = true;

    rockButton.onclick = () => {
        if (!currentlyPlaying) {
            alert("Error, please press start button.");
            currentlyPlaying = false;
            return -1;
        }

        rockButton.style.opacity = "0.5";

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

        paperButton.style.opacity = "0.5";

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

        scissorsButton.style.opacity = "0.5";

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
    startButton.style.opacity = "1";

    resetButton.disabled = true;
    resetButton.style.opacity = "0.5";

    rockButton.style.opacity = "1";
    paperButton.style.opacity = "1";
    scissorsButton.style.opacity = "1";

    currentlyPlaying = false;
}

startButton.addEventListener("click", startGame);
resetButton.style.opacity = "0.5";
resetButton.disabled = true;
resetButton.addEventListener("click", reset);