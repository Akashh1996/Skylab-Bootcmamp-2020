let player = {
    points: 0,
    correctAnswers: 0,
    incorrectAnswers: 0
}

function endGame(gameBody, gameEnd) {
    gameBody.style.display = 'none';
    gameEnd.style.display = 'flex';
    return gameBody, gameEnd;
}

function resetPlayer(player) {
    player.points = 0;
    player.correctAnswers = 0;
    player.incorrectAnswers = 0;
}

function playAgain(player, resetPlayer) {
    resetPlayer(player);
    gameEnd.style.display = 'none';
    gameBody.style.display = 'flex';
}

module.exports = player, endGame, resetPlayer, playAgain;