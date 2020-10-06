var calculatorResults = [];

function calculator(num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    console.log("Please only write numbers"); 
    login()
  } else if(num2 == 0){
    square(num1);
    console.log("The square value of this number is: " + calculatorResults[4].toString());
    login()
  } else {
    sum(num1, num2);
    rest(num1, num2);
    multiply(num1, num2);
    divide(num1, num2);
    console.log("For the numbers you entered, the sum is: " + calculatorResults[0].toString() + " - the subtraction is: " + calculatorResults[1].toString() + " - the multiplication: " + calculatorResults[2].toString() + " - and at last, the division: " + calculatorResults[3].toString() + " - You're welcome!");
    login()
  }
} 

function sum(num1, num2){
  var resultSum = num1 + num2; 
  calculatorResults[0] = resultSum.toFixed(3);
}
function rest(num1, num2){
  var resultRest = num1 - num2; 
  calculatorResults[1] = resultRest.toFixed(3);
}
function multiply(num1, num2){
  var resultMultiply = num1 * num2; 
  calculatorResults[2] = resultMultiply.toFixed(3);
}
function divide(num1, num2){
  var resultDivide = num1 / num2; 
  calculatorResults[3] = resultDivide.toFixed(3);
}
function square(num1){
  var resultSquare = Math.sqrt(num1);
  calculatorResults[4] = resultSquare.toFixed(3);
}


function login() {
  var start = confirm("Do you want to use our calculator?");
  if(start) {
    var firstNum = Number(window.prompt("Enter a first number"));
    var secondNum = Number(window.prompt("Enter a second number or let it empty"));
    calculator(firstNum, secondNum);
  } else {alert("Thank you for using the calculator");}
}

login();





