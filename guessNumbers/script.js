let guesses = 0;
let target = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    
    let guess = Number(guessInput.value);

    if (guessInput.value.trim() === "") {
        message.textContent = "Please enter a valid number.";
        return;
    }

    if (guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    guesses++;
    
    attemptsDisplay.textContent = `Attempts: ${guesses}`;

    if (guess < target) {
        message.textContent = "Too low! Try again.";
    } else if (guess > target) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `🎉 Congratulations! You guessed the number in ${guesses} attempts.`;
        guessInput.disabled = true;
    }
    guessInput.value = '';
}

function restartGame() {
    guesses = 0;
    target = Math.floor(Math.random() * 100) + 1;
    
    const guessInput = document.getElementById("guess-input");
    guessInput.value = '';
    guessInput.disabled = false;
    
    document.getElementById("message").textContent = "Let's play!";
    document.getElementById("attempts").textContent = "Attempts: 0";
}