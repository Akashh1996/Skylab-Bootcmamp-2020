function areNumbers(numbers) {
    let isANumber = false;

    for(n of numbers){ 
        if(typeof n === 'number' && !isNaN(n)){
            isANumber = true; 
        }else {
            return false;
        }
    }
    return isANumber;
}


function ingresarNumeros() {
    let newNumbers = window.prompt('Ingrese nuevos numeros separados por un espacio');
    let numbers = [];
                
    if(newNumbers === null){
        return numbers
    } else {
        numbers = newNumbers.split(' ').map(function(x){
            return parseFloat(x)});
    }
    return numbers
}

function calculator() {
    let numbers = Array.from(arguments);
    let continuar = true;
    let resultados = [];

    while (continuar) {

        if(numbers.length === 1 && areNumbers(numbers)){
             
            console.log(redondeo(Math.sqrt(numbers[0])));


        } else if (areNumbers(numbers)) {
            
            let sum = redondeo(suma(numbers)); 
            let subs = redondeo(resta(numbers)); 
            let mul = redondeo(multiplica(numbers)); 
            let div = redondeo(divide(numbers));
            
            resultados.push('SUMA:' + sum);
            resultados.push('RESTA:' + subs);
            resultados.push('MULTIPLICACION:' + mul);
            resultados.push('DIVISION:' + div);
        
            console.log(resultados.join());
        

            


        } else {
            window.alert('No ha ingresado numeros validos.');
            
        }

        continuar = window.confirm('Desea realizar otra operacion?');

        if(continuar) {
            numbers = ingresarNumeros();
        }



    }
    console.log('Adios! Espero verlo nuevamente por aqui!');
}



function suma(numbers) {
    let adicion= 0;
    for (n in numbers){
        adicion += numbers[n];
    }
    return adicion;
    

}

function resta(numbers) {
    let diferencia = 0;
    for (n  in numbers){
        if(n == 0) {
            diferencia = numbers[n];
            
        }else if(n > 0){
            diferencia -= numbers[n];
            
            
        }
        
    }
    return diferencia;
}




function multiplica(numbers) {
    let producto= 1;
    for (n in numbers){
        producto *= numbers[n];
    }
    return producto;
}

function divide(numbers) {
    let cociente= 0;
    for (n in numbers){
        if(n == 0) {
            cociente = numbers[n];
            
        }else if(n > 0){
            cociente /= numbers[n];
        }
            
            
    }
    return cociente;
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





 