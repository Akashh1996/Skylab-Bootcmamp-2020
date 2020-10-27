function isHappy(n, pow) {
    let a=n.toString()
    let first=n

    let sum=0;
    let array=[first]

    let i=true;

    while (i=true) {
        for (let i=0; i<a.length; i++) {
            sum+=Math.pow(Number(a[i]),pow)
        }
        array[array.length]=sum
        if (first===sum) {
            return array
        } else if (sum===1) {
            return [1]
        } else {
            a=sum.toString();
            sum=0;
        }
    }
}

module.exports = isHappy;