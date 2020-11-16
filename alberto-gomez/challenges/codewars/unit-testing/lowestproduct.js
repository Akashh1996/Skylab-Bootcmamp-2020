function lowestProduct(input) {
    let result = 9999;
    let mult = 1;
    let counter = 0;
    let x = input.split('').map(Number);
    if (x.length < 4) {
        return 'Number is too small';
    } else {
        for (i = 0; i < x.length; i++) {
            mult += x[i];
            counter++;
            if (counter % 4 === 0) {
                if (result > mult) {
                    result = mult;
                    mult = 1;
                }
            }
        }
        return result;
    }
}

module.exports = lowestProduct;