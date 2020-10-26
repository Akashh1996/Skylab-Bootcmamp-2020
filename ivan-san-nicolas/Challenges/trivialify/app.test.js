const endGame = require('./app')


describe('Stop button', () => {
    test('should hide game-body and show game-end', () => {
        // arrange
        let gameBody = {
            style: {
                display: 'flex'
            }
        }
        let gameEnd = {
            style: {
                display: 'none'
            }
        }
        // act
        endGame(gameBody, gameEnd);
        // assert
        expect(gameBody.style.display).toBe('none');
        expect(gameEnd.style.display).toBe('flex')
    });
});

describe('Reset player', () => {
    test('should reset all player properties to 0', () => {
        // arrange
        let player = {
            points: 1,
            correctAnswers: 1,
            incorrectAnswers: 1
        }
        let finalPlayer = {
            points: 0,
            correctAnswers: 0,
            incorrectAnswers: 0
        }
        // act
        const resetedPlayer = resetPlayer(player);
        // assert
        expect(resetedPlayer).toEqual(finalPlayer);
    })
})

describe('Play Again', () => {
    test('should reset the player and change the elements display', () => {
        // arrange
        // act
        // assert
    })
})