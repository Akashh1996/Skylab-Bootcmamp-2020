function copyFile(original) {
    debugger;
    let copy = {
        id: original.id,
        meta: {...original.meta},
        meta: Object.assign({}.original.meta),
        }
    ​
    copy.meta.title = 'copy of ' + original.meta.title;
    ​
    return copy;
}
    ​
const myFile = {
    id: 1,
    meta: {
        title: 'JS Mola'
    }
}

copyFile(myFile);
    



let tree = {};
let stone = {};
let water = tree;

// challenge de hoy** 

// Write a function that calls strictEquals (a,b) that returns the same value as a===b. Your implementation must not use  the === or !== operators.

function strictEquals (a,b) {
    let c;

    if (Object.is(a, NaN) || Object.is(NaN, b)) {
        c = false;
        return c;
    } else if (Object.is(a,-0) || Object.is(-0,b)) {
        c = true;
        return c;
    } else {
        c = (Object.is(a,b));
        return c;    
    }

}

console.log(strictEquals(1,1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(-0,0));
console.log(strictEquals(0,-0));
console.log(strictEquals(false, true));
console.log(strictEquals(false,false));

// Create a function that clones an object without mutation.

function clone(object) {
    let cloneObject = Object.assign({},object,{spain:'Sevilla'});
    return cloneObject;
};

let cityCountries = {spain: 'Barcelona', usa: 'New York'};
console.log(clone(cityCountries));
console.log(cityCountries);
clone(cityCountries);



















function clone(object) {
    if (typeof object === 'object') {
        let cloneObject = {};
        for (const key in object) {
            cloneObject[key] = clone(object[key]);
        }
        return cloneObject;
    } else {
        return object;
    }
};





let singer = { surname: 'Turner'};
let pilot = { surname: 'Kamal'}
[singer.surname, pilot.surname] = [pilot.surname, singer.surname];
console.log(singer.surname); // 'Kamal'
console.log(pilot.surname); // 'Turner'

let singer = { surname: 'Turner'};
let pilot = { surname: 'Kamal'}
let cobra = { surname: 'Turner'}  // cobra = singer.surname;
singer.surname = pilot.surname;
pilot.surname = cobra.surname;
console.log(singer.surname); // 'Kamal'
console.log(pilot.surname); // 'Turner'


let president = { name: 'pooh'};
president.next = president;