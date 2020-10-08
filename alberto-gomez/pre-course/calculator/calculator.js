let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let output = [];

if (isNaN(num1) && isNaN(num2)) {
    alert("Ninguno de los valores introducidos es un número.");
} else if (isNaN(num1) && isFinite(num2)) {
    console.log(Math.sqrt(num2).toFixed(3));
} else if (isFinite(num1) && isNaN(num2)) {
    console.log(Math.sqrt(num1).toFixed(3));
} else {
    output.push(num1+num2, num1-num2, num1*num2, num1/num2);
    console.log(`${num1} + ${num2} = ${parseFloat(output[0].toFixed(3))} ; ${num1} - ${num2} = ${parseFloat(output[1].toFixed(3))} ; ${num1} * ${num2} = ${parseFloat(output[2].toFixed(3))} ; ${num1} / ${num2} = ${parseFloat(output[3].toFixed(3))}`);
}

// Agradecería comentarios acerca de si es posible optimizar el código a partir del 'else' final. Gracias de antemano.