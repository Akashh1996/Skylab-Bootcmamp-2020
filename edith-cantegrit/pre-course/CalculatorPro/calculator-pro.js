

var calculatorResults = [];

function calculatorPro(...theArgs){
    suma(...theArgs);
    resta(...theArgs);
    multiply(...theArgs);
    divide(...theArgs);
    console.log("For the numbers you entered, the sum is: " + calculatorResults[0].toString() + " - the subtraction is: " + calculatorResults[1].toString() + " - the multiplication is: " + calculatorResults[2].toString() + " - and at last the division: " + calculatorResults[3].toString() + " -  You're welcome!");
    login();
} 

function suma(...theArgs){
  var resultSum = theArgs.reduce((num1, num2) => num1 + num2); 
  calculatorResults[0] = resultSum.toFixed(3);
}
function resta(...theArgs){
  var resultRest = theArgs.reduce((num1, num2) => num1 - num2); 
  calculatorResults[1] = resultRest.toFixed(3);
}
function multiply(...theArgs){
  var resultMultiply = theArgs.reduce((num1, num2) => num1 * num2);
  calculatorResults[2] = resultMultiply.toFixed(3);
}
function divide(...theArgs){
  var resultDivide = theArgs.reduce((num1, num2) => num1 / num2);
  calculatorResults[3] = resultDivide.toFixed(3);
}


function login() {
  var numbers = []
  var start = confirm("Do you want to use our calculator?");
  if(start) {
    let ask = true
    let value;
      while(ask) {
        value = prompt("Enter the numbers you want to calculate, finish with cancel");
        let valueNum = parseFloat(value); 
        if (value === null ) {
          ask = false
        } else if (isNaN(valueNum)){
          console.log("Please only numbers are allowed")
        } else {
          numbers.push(valueNum);
        }
      }
    if(numbers.length !== 0) {calculatorPro(...numbers)};
  };
}

login();
