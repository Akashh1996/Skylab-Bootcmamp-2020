const disemvowel = require("./unit-testing");

xdescribe('disemvowel', () => {
	test('should... Disemvowel Trolls', () => {
		//arrenge
        const str = "This website is for losers LOL";

        //act
        const response = disemvowel(str);

        //assets
        expect(response).toBe("Ths wbst s fr lsrs LL");
	});
}); 

const highAndLow = require("./unit-testing");

describe('highAndLow', () => {
	test('should... highAndLow', () => {
		//arrenge
        const numbers = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
  
        //act
        const response = highAndLow(numbers);

        //assets
        expect(response).toBe("542 -214");
	});
}); 


const findOdd = require("./unit-testing");

xdescribe('findOdd', () => {
	test('should... findOdd', () => {
		//arrenge
        const numbers = ([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);

        //act
        const response = findOdd(numbers);

        //assets
        expect(response).toBe(5);
	});
}); 