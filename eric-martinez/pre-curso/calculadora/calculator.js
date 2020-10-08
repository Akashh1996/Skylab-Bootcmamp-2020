function calculadora (num1, num2){
    if(num1 === undefined && num2 === undefined){
      console.log("Introduzca mÃ­nimo 1 nÃºmero.");
    }else if(num2 === undefined && !isNaN(num1)){
      return("La raÃ­z cuadrada de " + num1 + " es = " + Math.sqrt(num1).toFixed(3));
    }else{
      let suma = num1 + num2;
      let resta = num1 - num2;
      let multi = num1 * num2;
      let division = num1 / num2;
  
      let arrayResults = [suma, resta, multi, division.toFixed(3)];
  
      let results = "La suma es = " + arrayResults[0] + "\nLa resta es = " + arrayResults[1] + "\nLa multiplicaciÃ³n es = " + 
      arrayResults[2] + "\nLa divisiÃ³n es = " + arrayResults[3];
      
      return results;
    }
  }
  console.log(calculadora(9,3));