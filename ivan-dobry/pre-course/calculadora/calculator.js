function calculadora(num1, num2){

    var result = [];
    var total;

    if ( arguments.length === 1) {
        if (typeof arguments [0] != "number"){
            console.log("Only numbers, please");
        } else {
            result.push(Math.sqrt(num1).toFixed(3));
            total = "la raiz cuadrada del numero es: " + result;
            
        }
    } else if ( arguments.length === 2) {
        if (typeof arguments [0] == "number" && typeof arguments [1] == "number" ) {
            result.push (num1 + num2, num1 - num2, num1 * num2, num1 / num2);

            for ( var i = 0; i < result.length; i++) {
                if (result[i] % 1 != 0) {
                  result[i] = result[i].toFixed(3);
                }
            }
            
            total = "el resultado de la suma es: " + result[0] + " resultado de la resta: " + result[1] + " resultado de la multiplicacíon: " + result[2] + " resultado de la división: " + result[3];
       
        } else {
            console.log("Only numbers, please");
            
        }
    }  else {
        console.log ("Solo añadir dos numeros");
    }

    return total;
}

calculadora(5,6);