const clone=require('./deep-copy');
test('should clone a object without changing the original one',()=>{
    expect(clone({wheels:4, color:"red",passangers:3})).toStrictEqual({wheels:5, color:"blue",passangers:2})
})