const cloneObject = (myObject, any) => {
    any = {
        ...myObject
    }
    /*     any.student = "akash"
     */
    return any
}

module.exports = cloneObject;