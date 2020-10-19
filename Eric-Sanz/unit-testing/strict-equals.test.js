const strictEquals = require('./strict-equals');

describe ('strictEquals', () => {

    test.skip('should compare...', () => {
        //arrange
        const a = 0;
        const b = -0;
        
        //act
        const response = strictEquals(a,b);

        //assert
        expect(respone).toBe(false);
    })

    test.skip('should return true for the same value', () => {
        //arrange
        let values = [
            1,
            'a',
            0,
            -0,
            NaN,
            [1,2],
            {},
            false,
            true,
            undefined,
            null
        ];

        for (let index = 0; index < values.length; index++) {
            //act
            const respone = strictEquals(values[index], values[index]);
            //assert
            expect(respone).toBe(true);
        }
    });
    
    test('should compare NaN & NaN and return false', () => {
        expect(strictEquals(NaN,NaN)).toBe(false);
    });

    test('should compare 1 & 1 and return true', () => {
        expect(strictEquals(1,1)).toBe(true);
    });

    test('should compare 1 & "1" and return false', () => {
        expect(strictEquals(1,'1')).toBe(false);
    });

    test('should compare 0 & -0 and return true', () => {
        expect(strictEquals(0,-0)).toBe(true);
    });

    test('should compare -0 & 0 and return true', () => {
        expect(strictEquals(-0,0)).toBe(true);
    });

    test('should compare true & false and return false', () => {
        expect(strictEquals(true,false)).toBe(false);
    });

    test('should compare false & false and return true', () => {
        expect(strictEquals(false,false)).toBe(true);
    });

    test('should compare "water" & "oil" and return false', () => {
        expect(strictEquals('water','oil')).toBe(false);
    });
    
});