function lowestProduct(input) { 

    var x=parseInt(input);
    if (x<999){
    return "Number is too small";}
    var products = []; 
    for(var i = 0; i < input.length -3; i++) { 
    products.push(input[i] * input[i + 1] * input[i + 2] * input[i + 3]); 
    } return Math.min.apply(null, products); 
    }