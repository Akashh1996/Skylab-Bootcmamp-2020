const disemvowel = require('./disemvowel')

test('print frase without vowels', () => {
    const result = disemvowel('This website is for losers LOL!')
    expect(result).toBe("Ths wbst s fr lsrs LL!")
});
