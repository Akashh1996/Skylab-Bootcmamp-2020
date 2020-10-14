const sum = require('./sum');

describe("Sum", () => {
    
test('should 1+2 equals 3', ()=> {
    expect(sum(1,2)).toBe(3)
})

test('should 3+5 equals 8', ()=> {
    expect(sum(3,5)).toBe(8)
})

test('should 10+5 equals 15', ()=> {
    expect(sum(10,5)).toBe(15)
})
})