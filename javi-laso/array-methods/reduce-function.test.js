const reduceFunction = require('./reduce-function');

let skylabArray;

describe('Reduce function, tests with numbers', () => {
        beforeEach(() => {        
            skylabArray = {0: 1, 1: 2, 2:3, 3:4, length: 4};
        });

        test('Should return 10', () => {
            //assign
            const reducer = (accumulator, currentValue) => {return accumulator + currentValue};
            //add
            const response = skylabArray.reduceFunction(reducer);
            //expect
            expect(response).toBe(10);
        });

        test('Should return 24', () => {
            //assign
            const reducer = (accumulator, currentValue) => {return accumulator * currentValue};
            //add
            const response = skylabArray.reduceFunction(reducer);
            //expect
            expect(response).toBe(24);
        });

        test('Should return -8', () => {
            //assign
            const reducer = (accumulator, currentValue) => {return accumulator - currentValue};
            //add
            const response = skylabArray.reduceFunction(reducer);
            //expect
            expect(response).toBe(-8);
        });
        
        test('Should return 15', () => {
            //assign
            const reducer = (accumulator, currentValue) => {return accumulator + currentValue};
            //add
            const response = skylabArray.reduceFunction(reducer, 5);
            //expect
            expect(response).toBe(15);
        });

        test('Should return 48', () => {
            //assign
            const reducer = (accumulator, currentValue) => {return accumulator * currentValue};
            //add
            const response = skylabArray.reduceFunction(reducer, 2);
            //expect
            expect(response).toBe(48);
        });

        test('Should return -24', () => {
            //assign
            const reducer = (accumulator, currentValue) => {return accumulator * currentValue};
            //add
            const response = skylabArray.reduceFunction(reducer, -1);
            //expect
            expect(response).toBe(-24);
        });
});

describe('Reduce function, tests with words', () => {
    beforeEach(() => {        
        skylabArray = {0: 'How', 1: 'to', 2:'find', 3:'freedom', length: 4};
    });

    test('Should return "How to find freedom"', () => {
        //assign
        const reducer = (accumulator, currentValue) => {return accumulator + ' ' + currentValue};
        //add
        const response = skylabArray.reduceFunction(reducer);
        //expect
        expect(response).toBe('How to find freedom');
    });

    test('Should return "First point: How to find freedom"', () => {
        //assign
        const reducer = (accumulator, currentValue) => {return accumulator + ' ' + currentValue};
        //add
        const response = skylabArray.reduceFunction(reducer, 'First point:');
        //expect
        expect(response).toBe('First point: How to find freedom');
    });
});