function areNumbers(num1,num2) {
    if ( !isNaN(num1) && !isNaN(num2) ) {
        return true;
    }
}

function calculator(num1,num2) {
    
    if(arguments.length === 1 && !isNaN(num1)) {
       console.log(redondeo(Math.sqrt(num1))); 

    } else if(arguments.length === 2 && areNumbers(num1,num2)) {
        let sum = redondeo(suma(num1,num2)); 
        let subs = redondeo(resta(num1,num2)); 
        let mul = redondeo(multiplica(num1,num2)); 
        let div = redondeo(divide(num1,num2));
        let resultados = [sum, subs, mul, div];
        
        let mostrarSum = num1 + '+' + num2 + '=' + sum;
        let mostrarResta = num1 + '-' + num2 + '='+ subs;
        let mostrarMul = num1 + '*'+ num2 + '=' + mul;
        let mostrarDiv = num1 + '/'+ num2 + '='+ div;


        console.log(mostrarSum +','+ mostrarResta +','+ mostrarMul+','+ mostrarDiv);
      
    }else {
          console.log('Ingrese dos numeros');
      }

    
}

function suma(num1, num2) {
    let adicion= num1 + num2
    return redondeo(adicion);
}

function resta(num1, num2) {
    let diferencia= num1 - num2;
    return redondeo(diferencia);
}

function multiplica(num1, num2) {
    let producto= num1 * num2;
    return redondeo(producto);
}

function divide(num1, num2) {
    let cociente= num1 / num2;
    return redondeo(cociente);
}

function esEntero(num){
    if (num % 1 == 0) {
        return true;
    }else {
        return false;
    }
}

function redondeo(num) {
    if(esEntero(num)) {
        return num;
    } else {
        return num.toLocaleString(undefined, {maximumFractionDigits: 3});
    }
}
