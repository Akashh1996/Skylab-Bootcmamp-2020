function lowestProduct(num) { 
    let total = 1;
    let i = 0;
  if (num.length < 4) {
      return "Number is too small";
  } else {
    let newArr = num.split('').map(x=>+x);
    
    return total;
  }
}

module.exports = lowestProduct;