//CALCULATOR

function calculatorPro() {
  var results = [];
  var numbers = [];
  var messages = [
    'The total sum is ',
    'The total subtraction is ',
    'The total multiplication is ',
    'The total division is ',
  ];
  var sum, sub, mult, div, sqrt;

  operation();

  function operation() {
    results = [];
    numbers = [];
    if (window.confirm('Do you want to do some operations?')) {
      //console.log('choice = yes');
      getNumbers();
    } else alert('Bye!');
  }

  function getNumbers() {
    var number = prompt('Insert a number. Insert a character to stop.'); // !!!Prompts are strings!!!
    if (isNaN(number)) {
      //isNan tells if it's a number even if the prompt still string. If true, means no more numbers, so start calculating...
      getResults();
    } else {
      number = parseFloat(number); //Parse in order to change the type to floating number
      numbers.push(number);
      sum = numbers[0];
      sub = numbers[0];
      mult = numbers[0];
      div = numbers[0];
      getNumbers();
    }
  }

  function getResults() {
    if (numbers.length > 1) {
      //If numbers < 1, show all four operations
      console.log('The numbers are:');
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
      }
      for (let i = 1; i < numbers.length; i++) {
        sum += numbers[i];
        sub -= numbers[i];
        mult *= numbers[i];
        div /= numbers[i];
      }
      sum = Math.round(sum * 1000) / 1000;
      results.push(sum);
      sub = Math.round(sub * 1000) / 1000;
      results.push(sub);
      mult = Math.round(mult * 1000) / 1000;
      results.push(mult);
      div = Math.round(div * 1000) / 1000;
      results.push(div);
      alert('Done!');
      for (let i = 0; i < messages.length; i++) {
        console.log(messages[i] + results[i]);
      }
    } else {
      //If number = 1, show the square root
      if (typeof (numbers[0]) === "number") {
        console.log('The square root of ' + numbers[0] + ' is:');
        sqrt = Math.round(Math.sqrt(numbers[0]) * 1000) / 1000;
        console.log(sqrt);
      }
    }
    operation();
  }
}
calculatorPro();