//CALCULATOR
function calculator(num1, num2) {   //Array for the messages (it's a sum, its a division...)
  var messages = [
    'The sum of ' + num1 + ' and ' + num2 + ' is ',
    'The substraction of ' + num1 + ' and ' + num2 + ' is ',
    'The multiplication of ' + num1 + ' and ' + num2 + ' is ',
    'The division of ' + num1 + ' and ' + num2 + ' is ',
    'The square root of ' + num1 + ' is ',
    'The square root of ' + num2 + ' is ',
  ];  
  var results = [];   //Array to get the results
  if (typeof num1 === 'number' && typeof num2 === 'number') {    //Check the easy first
    var sum = Math.round((num1 + num2) * 1000) / 1000;
    results.push(sum);
    var sub = Math.round((num1 - num2) * 1000) / 1000;
    results.push(sub);
    var mult = Math.round((num1 * num2) * 1000) / 1000;
    results.push(mult);
    var div = Math.round((num1 / num2) * 1000) / 1000;
    results.push(div);
    for (var i = 0; i < messages.length - 2; i++) {  // -2 because there are 2 sqrt messages too...
      console.log(messages[i] + results[i]);
    }
  } 
  else if (typeof num1 === 'number' && typeof num2 !== 'number') {    //If num1 is a number but num2 isn't  --> sqrt
    console.log(messages[4] + Math.round(Math.sqrt(num1) * 1000) / 1000);
  }
  else if (typeof num1 !== 'number' && typeof num2 === 'number') {    //If num2 is a number but num1 isn't  --> sqrt
    console.log(messages[5] +  Math.round(Math.sqrt(num2) * 1000) / 1000);
  }
  else {    //If none of nums is a number  --> "Enter a number"
    console.log("Please, enter at least 1 number.")   
  }
}
//CHANGE THIS----
calculator(4.567,2);
//CHANGE THIS----