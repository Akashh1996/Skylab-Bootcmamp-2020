let results = [];
let numbers = [];

function newOperation() {
  let question = prompt('Quiere realizar una operación? Y/N');
    if ((question === 'Y') || (question === 'y')) {
      getNumbers();
    } else if ((question === 'N') || (question === 'n')){
      console.log('Bye!');
    } else if (question === null) {
      return;
    } else {
      console.log('Debes introducir Y o N.');
    }
}

function getNumbers() {
  let quantity = prompt('Cuantos números desea introducir?');
  if (isNaN(quantity)) {
    console.log('Debes introducir un número.')
    getNumbers();
  } else if (quantity === null) {
    return;
  } else if (quantity > 1) {
    let quantityCount = 0;
    while (quantityCount < quantity) {
      number = prompt('introduce el número.');
      if (isNaN(number)) {
        console.log('Debes introducir un número.');
        getNumbers();
      } else {
        numbers.push(parseFloat(number));
        quantityCount++;
      }
    }
  calculatorPro();  
  } else {
    let number = prompt('Introduzca un número.');
    if (isNaN(number)) {
      console.log('Debes introducir un número.');
      getNumbers();
    } else {
      numbers.push(number);
      console.log(`Se ha introducido únicamente un número, su raíz cuadrada es: ${Math.round(Math.sqrt(numbers) * 1000) / 1000}`);
      continu();
    }
  }
}

function calculatorPro() {
  let accsum = 0;
  let accrest = numbers[0];
  let accmult = 1;
  let accdiv = numbers[0];
  
  for (let i = 0; i < numbers.length; i++) {
    accsum += numbers[i];
    accmult *= numbers[i];
  }

  for (let j = 1; j < numbers.length; j++) {
    accrest -= numbers[j];
    accdiv /= numbers[j];
  } 

  accsum = Math.round((accsum) * 1000) / 1000;
  results.push(accsum);
    
  accrest = Math.round((accrest) * 1000) / 1000;
  results.push(accrest);
    
  accmult = Math.round((accmult) * 1000) / 1000;
  results.push(accmult);
    
  accdiv = Math.round((accdiv) * 1000) / 1000;
  results.push(accdiv);
    
  console.log(`La suma de ${numbers} es: ${results[0]} \nLa resta de ${numbers} es: ${results[1]} \nLa multiplicación de ${numbers} es: ${results[2]} \nLa división de ${numbers} es: ${results[3]}`);    
  
  continu();
}

function continu() {
  let continuee = prompt('Quiere realizar otra operación? Y/N');
  if ((continuee === 'Y') || (continuee === 'y')) {
    results = [];
    numbers = [];
    getNumbers();
  } else if ((continuee === 'N') || (continuee === 'n')){
    console.log('Bye!'); 
  } else if (continuee === null) {
    return;
  } else {
    console.log('Debes introducir Y o N.');
    continu();
  }
}

newOperation();