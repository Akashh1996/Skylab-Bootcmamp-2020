let player = {
    points: 0,
    correctAnswers: 0,
    incorrectAnswers: 0
}

function endGame(gameBody, gameEnd) {
    gameBody.style.display = 'none';
    gameEnd.style.display = 'flex';
}

function playAgain(player) {
    player.points = 0;
    player.correctAnswers = 0;
    player.incorrectAnswers = 0;
    gameEnd.style.display = 'none';
    gameBody.style.display = 'flex';
}