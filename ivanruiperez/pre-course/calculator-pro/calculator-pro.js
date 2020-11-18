//calculator-pro
let keepUsingCalculator = true;
function introducir(){ 
    let keepIntroducingNumbers = true;
    let currentNumber = null;
    let numbersIntroduced = [];
    while(keepIntroducingNumbers === true){
        currentNumber = prompt("Introduce un número.");
        if (isNaN(currentNumber) || currentNumber === ""){
        console.log("Solo números");
        } else {
            numbersIntroduced.push(currentNumber)
        }  
        keepIntroducingNumbers = confirm("Quieres añadir más números?");
    }
    return numbersIntroduced;
}
           
function calculator(numbers){
        console.log("Has introducido: "+ numbers);
        if (numbers.length < 2){
            console.log("La raíz cuadrada de " + numbers +" es: " + Math.sqrt(numbers));
        } else {
        let sum = parseFloat(numbers[0]);
        let res = parseFloat(numbers[0]);
        let mul = parseFloat(numbers[0]);
        let div = parseFloat(numbers[0]);
   
        for (b=1; b < numbers.length; b++){
            sum += parseFloat(numbers[b]);
            res -= parseFloat(numbers[b]);
            mul *= parseFloat(numbers[b]);
            div /= parseFloat(numbers[b]);
        }
        console.log("El resultado de la suma es: "+ sum.toFixed(3));
        console.log("El resultado de la resta es: "+ res.toFixed(3));
        console.log("El resultado de la multiplicación es: "+ mul.toFixed(3));
        console.log("El resultado de la división es: "+ div.toFixed(3));
    }

}

while(keepUsingCalculator === true){
    const numbersToOperate = introducir();
    if (numbersToOperate.length > 0){
        calculator(numbersToOperate);
    }
    keepUsingCalculator = confirm("Quieres hacer otra operación?");
}
