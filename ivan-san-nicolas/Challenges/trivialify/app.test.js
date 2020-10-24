describe('Stop button', () => {
    test('should hide game-body and show game-end', () => {
        // act
        const result = endGame(gameBody, gameEnd);
        // assert
        expect(gameBody.style.display).toBe('none');
        expect(gameEnd.style.display).toBe('flex')
    });
});