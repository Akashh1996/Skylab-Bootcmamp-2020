



var silla = {
    patas : 4,
    color: "marron",
    material: "madera"
}

let sillaCopia = copyObject(silla);
console.log(sillaCopia);

sillaCopia.patas = 10;

console.log(sillaCopia);
console.log(silla);





// Funciones

function copyObject(object){
    let newObject = {};
    let keysObject = Object.keys(object);
    let valuesObject = Object.values(object);

    for(let i = 0; i<keysObject.length; i++){
        // Object.defineProperty(copyObject, keysObject[i], {value: valuesObject[i]});
        newObject[keysObject[i]] = valuesObject[i];
    }

    // copyObject.patas = 5;
    return newObject;
}





