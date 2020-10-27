const {mathodsArray, obj} = require ('./arrayMethods');

describe('array-methods', () => {
    
        test('should return every element modified', () => {
            //arange
            //act
           obj.map(obj, (element) => {

                return element * 2;
           })
            //assert
            expect(obj.map).toBe({ 

                0: 2,
                1: 4,
                2: 6,
                3: 4,
                length: 4,
                __proto__: methodsArray
            });
        });

        test('should return the object with properties that meet a condition', () => {
            //arange
            //act
           obj.filter(obj, (element) => {
                if(element > 1) {
                    return element;
                }
           })
            //assert
            expect(obj.filter).toBe({ 

                1: 2,
                2: 3,
                3: 2,
                length: 3,
                __proto__: methodsArray
            });
        });

        test('should return the first property that meets the condition', () => {
            //arange
            //act
           obj.find(obj, (element) => {
                if(element > 1) {
                    return element;
                }
           })
            //assert
            expect(obj.find).toBe({ 

                1: 2,
                length: 1,
                __proto__: methodsArray
            });
        });

        test('should return the index of the first property that meets the condition', () => {
            //arange
            //act
           obj.findIndex(obj, (element) => {
                if(element > 1) {
                    return element;
                }
           })
            //assert
            expect(obj.findIndex).toBe(1);
        });

        test('should return all elements modified by a static value, from start index to end index', () => {
            //arange
            let value = 8;
            let startIndex = 1;
            let endIndex = 3;
            //act
           obj.fill(obj, value, startIndex, endIndex);
            //assert
            expect(obj.fill).toBe({ 

                0: 2,
                1: 8,
                2: 8,
                3: 4,
                length: 4,
                __proto__: methodsArray
            });
        });

        test('should return true if at least one property meets the condition', () => {
            //arange
            //act
           obj.some(obj, (element) => {
                if(element > 1) {
                    return true;
                }
           })
            //assert
            expect(obj.some).toBe(true);
        });

        test('should return true if all properties meets the condition', () => {
            //arange
            //act
           obj.every(obj, (element) => {
                if(element > 1) {
                    return true;
                }
           })
            //assert
            expect(obj.every).toBe(false);
        });
    

    
})