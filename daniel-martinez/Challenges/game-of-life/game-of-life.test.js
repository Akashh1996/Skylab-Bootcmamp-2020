const game = require('./game-of-life');

describe('game-of-life', ()=>{
    test('3-block vertical line should return 3-block horizontal line', ()=>{
        //arrange
        const initialState = [
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0]
        ];
        //act
        response = game(initialState, 3, 6);
        //assert
        expect(response).toEqual([
            [0,0,0,0,0,0],
            [0,1,1,1,0,0],
            [0,0,0,0,0,0]
        ]) 
    });
    test('4-block square should return 4-block square', ()=>{
        //arrange
        const initialState = [
            [0,0,0,0,0,0],
            [0,0,1,1,0,0],
            [0,0,1,1,0,0]
        ];
        //act
        response = game(initialState, 3, 6);
        //assert
        expect(response).toEqual([
            [0,0,0,0,0,0],
            [0,0,1,1,0,0],
            [0,0,1,1,0,0]
        ]) 
    });
    test('2 4-block squares should return 2 4-block squares whitout 2 blocks', ()=>{
        //arrange
        const initialState = [
            [1,1,0,0,0,0],
            [1,1,0,0,0,0],
            [0,0,1,1,0,0],
            [0,0,1,1,0,0]
        ];
        //act
        response = game(initialState, 4, 6);
        //assert
        expect(response).toEqual([
            [1,1,0,0,0,0],
            [1,0,0,0,0,0],
            [0,0,0,1,0,0],
            [0,0,1,1,0,0]
        ]) 
    });
});