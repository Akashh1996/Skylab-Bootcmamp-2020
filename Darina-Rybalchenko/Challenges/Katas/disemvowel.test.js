const disemvowel = require('./disemvowel')

test('print frase without vowels', () => {
    const result = disemvowel('Hello Manel')
    expect(result).toBe("Hll Mnl")
});
