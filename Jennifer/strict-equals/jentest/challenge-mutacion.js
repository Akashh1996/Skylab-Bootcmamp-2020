var silla = {
    patas : 4,
    color: "marron",
    material: "madera"
}

let sillaCopia = copyObject(silla);

function copyObject(object){
    let newObject = {};

    if(typeof object !== "object" || object === null){
        return object;
    }

    let keysObject = Object.keys(object);
    let valuesObject = Object.values(object);   
    for(let i = 0; i<keysObject.length; i++){
        newObject[keysObject[i]] = copyObject(valuesObject[i]);
    }
    return newObject;
}

module.exports = copyObject


