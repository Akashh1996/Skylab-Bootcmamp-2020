const myArray = {};

function myFilter(obj, callback) {
    let newObj = {}
    for (let i in obj) {
        if (callback(obj[i])) {
            newObj[i] = obj[i];
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