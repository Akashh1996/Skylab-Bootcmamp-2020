/* Strict equals function*/

function strictEquals (a, b) {
    if (Object.is(a,NaN) || Object.is(NaN,b)) {
        return false;
    } else if (Object.is(a,-0) || Object.is(b,-0)) {
        return true;
    } else if ((Object.is(a,0) || Object.is(b,0))) {
        return true;
    } else {
        return Object.is(a, b)
    }
}
//module.exports = strictEquals;


/* Suma function*/
function sum (a, b){
    return a + b;
}
//module.exports = sum;


/* Object function*/
/* let x={id:10,name:'Eric',adress:300}
function deepClone (a) {
let b = Object.assign({},a);
return b;
}
let y= deepClone(x);
x.adress = 500 */

function deepClone (original){
    if(!original){
        return original;
    }else{
        if(typeof original === 'object') {

        }else {
            return {...original};
        }
        return original;
    }
}

module.exports = deepClone;