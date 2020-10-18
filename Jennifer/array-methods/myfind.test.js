const myfindIndex = require('./myfind')

describe('devuelve el indice de la coicidencia o undefined', () => {
    test("devuelve undefined si no encuentra coincidencias",() =>{
        //arrange
        const skylabArray = {
            0: 5,
            1: 10,
            2: 2,
            length: 3,
            __proto__: mySkylabMethod
        };

        //act

        resultado =myfindIndex(skylabArray,callback);
            

        //asert
          expect(result).toBe(2);
      });
});
