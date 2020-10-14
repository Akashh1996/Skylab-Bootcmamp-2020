/*Write a function called strictEquals(a, b) that returns the same value as a === b. 
Your implementatio must not use the === or !== operators.*/

function strictEquals(a, b) {
    if (isNaN(a) && isNaN(b)) {
        return false
    }
    if (Object.is(a, 0) || Object.is(b, -0) || Object.is(a, -0) || Object.is(b, 0)) {
        return true
    }
    return (Object.is(a, b))
}

/* console.log(strictEquals(1, 1))
console.log(strictEquals(NaN, NaN))
console.log(strictEquals(0, -0))
console.log(strictEquals(-0, 0))
console.log(strictEquals(1, '1'))
console.log(strictEquals(true, false))
console.log(strictEquals(false, false))
console.log(strictEquals('water', 'oil')) */



// Create a function that clones an object without mutation.

function clone(object) {
    const objectClone = {}
    for (property in object) {
        objectClone[property] = object[property]
    }
    return objectClone
}

const bootcamp = { name: 'Skylab', city: 'Barcelona' }

const cloneBootcamp = clone(bootcamp)

/* {name: "Skylab", city: "Barcelona"}
cloneBootcamp
{name: "Skylab", city: "Barcelona"}
bootcamp
{name: "Skylab", city: "Barcelona"}
cloneBootcamp.ranking = 1
1
cloneBootcamp
{name: "Skylab", city: "Barcelona", ranking: 1}
bootcamp
{name: "Skylab", city: "Barcelona"}
 */


