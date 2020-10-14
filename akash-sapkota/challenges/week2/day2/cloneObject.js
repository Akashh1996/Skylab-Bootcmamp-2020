const cloneObject = (myObject) => {
    const newObjectCloned = {
        ...myObject
    }
    newObjectCloned.student = "akash"
    return newObjectCloned
}

const skylab = {
    teacher: "gilberto",
    manager: "diana",
    godfather: "david"
}

console.log(cloneObject(skylab));
console.log(skylab)