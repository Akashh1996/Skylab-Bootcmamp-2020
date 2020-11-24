const strictEquals =require('./strict-equals');

describe('strictEquals',    () => {
    test('should return true if are the same, false if not( and exceptions)', ()=>{
        //arrange       
        const a=1;
        const b=1;
        //act
        const response=strictEquals(a,b);
        //assert
        expect(response).toBe(true) 
    })
    test('should return true if are the same, false if not( and exceptions)', ()=>{
        //arrange       
        const a=NaN;
        const b=NaN;
        //act
        const response=strictEquals(a,b);
        //assert
        expect(response).toBe(false) 
    })
    test('should return true if are the same, false if not( and exceptions)', ()=>{
        //arrange       
        const a=0;
        const b=-0;
        //act
        const response=strictEquals(a,b);
        //assert
        expect(response).toBe(true) 
    })
    test('should return true if are the same, false if not( and exceptions)', ()=>{
        //arrange       
        const a=-0;
        const b=0;
        //act
        const response=strictEquals(a,b);
        //assert
        expect(response).toBe(true) 
    })
    test('should return true if are the same, false if not( and exceptions)', ()=>{
        //arrange       
        const a=1;
        const b='1';
        //act
        const response=strictEquals(a,b);
        //assert
        expect(response).toBe(false) 
    })
    test('should return true if are the same, false if not( and exceptions)', ()=>{
        //arrange       
        const a=true;
        const b=false;
        //act
        const response=strictEquals(a,b);
        //assert
        expect(response).toBe(false) 
    })
    test('should return true if are the same, false if not( and exceptions)', ()=>{
        //arrange       
        const a=false;
        const b=false;
        //act
        const response=strictEquals(a,b);
        //assert
        expect(response).toBe(true) 
    })
    test('should return true if are the same, false if not( and exceptions)', ()=>{
        //arrange       
        const a='Water';
        const b='Oil';
        //act
        const response=strictEquals(a,b);
        //assert
        expect(response).toBe(false) 
    })
    test('should handle multiple conditions',()=>{
        //arrange
        const values=[1,'a',0,-0,[1,2],{},false,true,undefined,null];
        
        //act
        for (let index = 0; index < values.length; index++) {
            const response = strictEquals(values[index],values[index]);
           //assert
            expect(response).toBe(true)
        }
        
        
    })
})


