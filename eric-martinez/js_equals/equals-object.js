/* Strict equals function*/

function strictEquals(a, b) {
    if (Object.is(a, 0) && Object.is(-0, b) || Object.is(0, b) && Object.is(-a, -0)) {
        return true;
    } else if (Object.is(a, NaN)) {
        return false;
    } else if (Object.is(a, b)) {
        return true;
    } 
    else {
        return false
    }
}





/* Object function*/

let x={id:10,name:'Eric',adress:300}
function noMutate (a) {
let b = Object.assign({},a);
return b;
}
let y= noMutate(x);
x.adress = 500