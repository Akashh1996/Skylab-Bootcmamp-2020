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