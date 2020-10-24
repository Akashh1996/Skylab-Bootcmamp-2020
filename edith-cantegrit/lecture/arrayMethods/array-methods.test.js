const { TestScheduler } = require('jest');
const {customArray} = require('./array-methods');

describe('array-methods', () => {
    describe('length', () => {
        test('should have a default length equals to 0')
    })

    describe('push', () => {
        beforeEach(()=>{
            customArray
            console.log('antes de cada test');
        });
  
        test('should have a default length equals to 0', () => {
            customArray.push('skylab');
            expect(customArray[0].toBe('bootcamp'))
        });
    })
});