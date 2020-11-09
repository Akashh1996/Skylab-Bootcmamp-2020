const equals=require('./strict-equals');
describe('equals',()=>{
    test('should return true when arguments are the same',()=>{
        expect(equals(1,1)).toBe(true);
    });
    
    test('should return true when arguments are -0,0',()=>{
        expect(equals(-0,0)).toBe(true);
    });
    test('should return true when arguments are 0 -0',()=>{
        expect(equals(0,-0)).toBe(true);
    });
    test("should return false when arguments are 1 '1'",()=>{
        expect(equals(1,-'1')).toBe(false);
    });
    test("should return false when arguments are true and false",()=>{
        expect(equals(true,false)).toBe(false);
    });
    test("should return true when arguments are false and false",()=>{
        expect(equals(false,false)).toBe(true);
    });
    test("should return true when arguments are 'water'and 'oil'",()=>{
        expect(equals('water', 'oil')).toBe(false);
    });
    test('should return false when passed NaN',()=>{
        expect(equals(NaN,NaN)).toBe(false);
    });


});
