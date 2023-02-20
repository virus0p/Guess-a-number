let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNumber = Math.random() * 100;
let yup = Math.ceil(randomNumber);

function checkGuess() {
    let val = parseInt(userInput.value);
    if (val === yup) {
        gameResult.textContent = "Congratulation! You got it right !";
        gameResult.style.backgroundColor = "green";
        gameResult.style.color = "black";
    } else if (val < yup) {
        gameResult.textContent = "Too low! Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (val > yup) {
        gameResult.textContent = "Too high! Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else {
        gameResult.textContent = "Invalid Input!!";
    }
}