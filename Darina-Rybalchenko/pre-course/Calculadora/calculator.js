
function calculator (num1, num2) {
  if (isNaN(num1)) {
    return "Introduzca el numero"
  }
  if (num2 !== undefined && isNaN(num2)) {
    return "Introduzca el numero"
  }
  
  if (num1 == undefined || num2 == undefined) {
    const squareRoot = Math.sqrt(num1);
    return "Su raiz cuadrada es " + squareRoot.toFixed(3) 
  } 
  
  let sum = num1 + num2;
  let sub = num1 - num2;
  let mult = num1 * num2;
  let div = num1 / num2;
  
 
  return "El resultado de sumar es " + sum.toFixed(3) + "." + " El resultado de restar es " + sub.toFixed(3) + "." + " El resultado de multiplicar es " + mult.toFixed(3) + "." + " El resultado de dividir es " + div.toFixed(3) ; 
};

console.log(calculator(2,3));