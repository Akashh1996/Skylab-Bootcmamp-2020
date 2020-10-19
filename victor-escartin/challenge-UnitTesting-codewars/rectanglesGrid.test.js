const largestRectangleInGrid=require('./rectanglesGrid');

describe('largestRectangleInGrid',    () => {
    test('should return the area of the largest rectangle which can be placed on top of a group of adjacent 1s)', ()=>{
        //arrange       
        const example0 = 
            [
            [1,0,1,1,1],
            [0,1,1,0,1],
            [0,1,1,0,1],
            [0,1,1,0,1]
            ]
        //act
        const response=largestRectangleInGrid(example0);
        //assert
        expect(response).toBe(5) 
    })
})