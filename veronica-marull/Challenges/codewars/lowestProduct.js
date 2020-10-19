function lowestProduct(input) { 
    let numbers = input;
    let acc = 1;
    let products= [];
    let counter = 0;
    let lowestPro;
    
    if(numbers.length < 4) {
      return "Number is too small";
    }

    for (let indexNumber=0; indexNumber < numbers.length -4; indexNumber++) {

        for (let index= indexNumber ; counter < 4; index++) {
            acc = acc * Number(numbers[index]); 
            counter++;
            products.push(acc);
          
        }
        

    }
    lowestPro = Math.min(...products);
    return lowestPro;
  
  
    
    
  }  

  module.exports = lowestProduct;