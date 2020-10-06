let results = [];

function calculator(num1, num2) {
  if (isNaN(num1) && num2 === undefined) {
    console.log('Debes introducir dos números.');
  } else if ( num2 === undefined) {
    console.log(`Se ha introducido únicamente un número, su raíz cuadrada es: ${Math.round(Math.sqrt(num1) * 1000) / 1000}`);
  } else if (isNaN(num1) || isNaN(num2)) {
    console.log('Debes introducir dos números.');
  } else {
    let sum = Math.round((num1 + num2) * 1000) / 1000;
    results.push(sum)
    
    let rest = Math.round((num1 - num2) * 1000) / 1000;
    results.push(rest)
    
    let mult = Math.round((num1 * num2) * 1000) / 1000;
    results.push(mult)
    
    let div = Math.round((num1 / num2) * 1000) / 1000;
    results.push(div)
    
    console.log(`La suma de ${num1} + ${num2} es: ${results[0]} \nLa resta de ${num1} - ${num2} es: ${results[1]} \nLa multiplicación de ${num1} * ${num2} es: ${results[2]} \nLa división de ${num1} / ${num2} es: ${results[3]}`);
  }
  results = [];
}


calculator(3,4);



