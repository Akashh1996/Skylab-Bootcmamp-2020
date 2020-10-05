function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return parseFloat((num1 / num2).toFixed(3));
}

function calculator(num1, num2 = undefined) {
    if(typeof num1 !== 'number' && typeof num2 !== 'number') {
        console.log('Se necesita mínimo un número');
    } else if (typeof num2 !== 'number') {
        console.log(`La raíz cuadrada de ${num1} es ${parseFloat(Math.sqrt(num1).toFixed(3))}`);
    } else {
        var answer = []
        answer.push('Suma: ' + sum(num1, num2));
        answer.push('resta: ' + subtract(num1, num2)); 
        answer.push('multiplicacion: ' + multiply(num1, num2));
        answer.push('division: ' + divide(num1, num2));
        
        console.log(`Numeros: ${num1} y ${num2}`);
        for (var i = 0; i < answer.length; i++) {
            console.log(answer[i]);
        }
    }
}

calculator(4, 8);