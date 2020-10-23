function lowestProduct(input) {
    if (input.length < 4) {
        return 'Number is too small';
    }

    const products = [];

    for (let i = 0; i < input.length - 3; i++) {
        products.push(input[i] * input[i + 1] * input[i + 2] * input[i + 3] * 1);
    }

    return Math.min(...products);
}

module.exports = lowestProduct;