// STRICT EQUAL SIN === o !==
function strictEquals(a,b){
    if(Object.is(a,-0)||Object.is(-0,b)) {
        return true;
        } else if(Object.is(NaN,b)||Object.is(a,NaN)){
                return false;
                }  else {
                    let c= Object.is(a,b)
                    return c;
                }
}

console.log(strictEquals(NaN,NaN));//false
console.log(strictEquals(1,1));//true
console.log(strictEquals(true,false));//true
console.log(strictEquals(0,-0));//true
console.log(strictEquals(NaN,NaN));//false

// NO MUTAR

function noMutate (a) {
    let b = Object.assign({},a);
    return b;
}

let obj={id:10,name:3,adress:3}
let newObj= noMutate(obj);

obj={id:1,name:3,adress:3}

console.log(obj);
console.log(newObj);
