const myFunct = () => {
    console.log()
}

Object.prototype.myFunctInsideProto = myFunct


const myArr = [1, 2, 3]

myArr.myFunctInsideProto();