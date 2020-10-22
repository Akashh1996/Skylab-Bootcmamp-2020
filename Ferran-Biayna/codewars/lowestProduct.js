function lowestProduct(input) {
    let array = input.split("")
    debugger
    if (array.length<4) {
        return "Number is too small"
    }
    let c=1;
    let n=0;
    for (let i=0; i<array.length; i++) {
        for(let j=i; j<(i+4); j++) {
            c*=array[j]
        }
        if (c<n || i===0) {
            n=c
        }
        c=1;
    }
    return n;
}

module.exports = lowestProduct;