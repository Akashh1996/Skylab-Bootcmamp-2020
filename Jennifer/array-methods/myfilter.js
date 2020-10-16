const skylabArray = {
    0: 5,
    1: 10,
    2: 3,
    length: 3
};



const myFilter = function (object, callback){
    const returnObject = {};
    let contador = 0;
    Object.entries(object).forEach((property)=>{
        const elementPassTest = callback(property[1]);
        if(elementPassTest){
            returnObject[property[0]]=property[1]
            contador++;
        }
        returnObject["length"] = contador;
    })

    return returnObject;
}


const result = myFilter(skylabArray, (property) => {
    if(property > 3){
        return true;
    }
});

Object.prototype.myFilterConNombreMio = myFilter;


const result2 = Object.prototype.myFilterConNombreMio(skylabArray, (value) => {
    return value > 3;
})

console.log(result2);