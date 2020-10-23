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

module.exports=strictEquals;