function lowestProduct(input) {
    if (input.length < 4) {
        return 'Number is too small';
    }

    const products = [];

    for (let i = 0; i < input.length - 3; i++) {
        products.push(parseInt(input[i]) * parseInt(input[i + 1]) * parseInt(input[i + 2]) * parseInt(input[i + 3]));
    }

    return Math.min(...products);
}

module.exports = lowestProduct;