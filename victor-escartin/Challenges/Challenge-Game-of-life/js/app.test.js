const newGeneration=require('./app');

describe('newGenerationCells', ()=>{
    test('should return de new state of cells with neighbors', ()=>{
        //arrange
        const initialState = [
            [0,0,0,0,0,
             0,0,1,0,0,
             0,0,1,0,0,
             0,0,1,0,0,
             0,0,0,0,0
            ]];
        //act
        const response=newGeneration(initialState)
        //assert
        expect(response).toEqual(
            [0,0,0,0,0,
             0,0,0,0,0,
             0,1,1,1,0,
             0,0,0,0,0,
             0,0,0,0,0
            ])
    })
})