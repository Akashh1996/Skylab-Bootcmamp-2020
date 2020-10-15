const myArray = {};

function myFilter(obj, callback) {
    let newObj = {}
    let objArray = Object.values(obj);
    for (let i = 0; i < objArray.length; i++) {
        if (callback(objArray[i])) {
            newObj[i] = objArray[i];
        }
    }
    return newObj;
};

let obj = {
    0: "Amarillo",
    1: "Rojo",
    2: "Violeta",
    3: "Azul",
    4: "Avadakedabra",
    5: "Parece que funciona",
    length: 6
};

const result = myFilter(obj, (value) => {
    return value.length > 6;
});

console.log(result);