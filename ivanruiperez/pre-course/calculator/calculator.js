//Calculadora
let num1 = prompt("Introduce el primer número");
let num2 = prompt("Introduce el segundo número");
let calc = [];
 if (isNaN(num1) || isNaN(num2)){
    console.log("Introduce solo números");
} else if (num1 === null || num1 === ""){
    console.log("La raíz cuadrada de " + num2 +" es: " + Math.sqrt(num2).toFixed(3));
} else if (num2 === null || num2 === ""){
    console.log("La raíz cuadrada de " + num1 +" es: " + Math.sqrt(num1).toFixed(3));
}else{
    let sum = parseFloat(num1) + parseFloat(num2);
    calc.push(sum.toFixed(3))
    let res = parseFloat(num1) - parseFloat(num2);
    calc.push(res.toFixed(3))
    let mul = parseFloat(num1) * parseFloat(num2);
    calc.push(mul.toFixed(3))
    let div = parseFloat(num1) / parseFloat(num2);
    calc.push(div.toFixed(3))
    console.log("Los resultados de la suma, resta, multiplicación y división son estos: " + calc);
}
