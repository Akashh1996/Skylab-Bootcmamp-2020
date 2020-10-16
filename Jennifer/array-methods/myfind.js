const skylabArray = {
    0: 5,
    1: 10,
    2: 3,
    length: 3
};


function myFind(object, callback){
        const returnObject = {};
        Object.entries(object).forEach((property)=>{
            if(returnObject.length === 1) {
                returnObject[property[0]] = callback(property[1]);
                return true; 
            }
        });
    return 
}



console.log(myFind(skylabArray, result));
