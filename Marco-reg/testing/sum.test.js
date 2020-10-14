
const sum= require('./sum');

xtest('sum 1 +2 equals 3',() =>{
    expect(sum(1, 2)).toBe(3);
})