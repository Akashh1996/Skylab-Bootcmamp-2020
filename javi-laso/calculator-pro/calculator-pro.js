function calculator() {
    var numbers = [];
    var isIntroducing = true;
    var nextNumber;

    console.log(numbers[0]);

    while (numbers.length === 0) {
        nextNumber = parseInt(prompt('Introduce a number to start'));
        if (!Number.isNaN(nextNumber)) {
            numbers.push(nextNumber);
        }
    }

    while (isIntroducing) {
        nextNumber = prompt("Introduce another number, if you want to stop introduce 'stop'");

        if (!nextNumber || nextNumber.toLowerCase() === 'stop') {
            isIntroducing = false;
        } else {
            nextNumber = parseInt(nextNumber);
            if (!Number.isNaN(nextNumber)) {
                numbers.push(nextNumber);
            } else {
                isIntroducing = false;
                console.log("It needs a number");
            }
        }
    }

    if (numbers.length === 1) {
        results.push({ 'Operation number': id, 'Number': numbers[0], 'Square root': parseFloat(Math.sqrt(numbers[0].toFixed(3))) });
    } else {
        var sum = 0;
        var subtract = numbers[0];
        var multiply = 1;
        var divide = numbers[0];

        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
            multiply *= numbers[i];
        }

        for (var i = 1; i < numbers.length; i++) {
            subtract -= numbers[i];
            divide /= numbers[i];
        }

        results.push( {'Operation number': id, 'Numbers': numbers, 'Sum': sum, 'Subtraction': subtract, 'Multiplication': multiply, 'Division': parseFloat(divide.toFixed(3))} );
    }

    id++;
}

var isOperating = true;
var question;
var results = [];
var id = 1;

while (isOperating) {
    question = window.confirm('Do you want to calculate another batch of numbers?');

    if (question) {
        calculator();
    } else {
        console.log('Adios!');
        isOperating = false;
    }
}

for (var i = 0; i < results.length; i++) {
    if (results[i]['Square root']) {
        console.log('Operation number: ' + results[i]['Operation number'] + ', Square root: ' + results[i]['Square root'] + '.');
    } else {
        console.log('Operation number: ' + results[i]['Operation number'] + ', Sum: ' + results[i]['Sum'] + ', Subtraction: ' + 
        results[i]['Subtraction'] + ', Multiplication: ' + results[i]['Multiplication'] + ', Division:' + results[i]['Division'] + '.');
    }
    
}