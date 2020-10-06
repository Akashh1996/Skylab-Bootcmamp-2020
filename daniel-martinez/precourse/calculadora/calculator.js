function calculator (num1,num2){
    if (typeof num1 === "number" && typeof num2 === "number"){ //Si ambos parámetros son números:
        var resultSum = num1 + num2;
        var resultRest = num1 - num2;
        var resultMult = num1 * num2;
        var resultDiv = num1 / num2;
        //Los 4 resultados se almacenan en un array:
        var resultarr = [resultSum,resultRest,resultMult,resultDiv];
        //La función devuelve los resultados de forma cómoda:
        return "La suma de los dos números es igual a "+parseFloat(resultarr[0].toFixed(3))+"\nLa resta del primer número menos el segundo es igual a "+
        parseFloat(resultarr[1].toFixed(3))+"\nEl producto de los dos números es igual a "+parseFloat(resultarr[2].toFixed(3))+
        "\nEl cociente del primer número entre el segundo es igual a "+parseFloat(resultarr[0].toFixed(3));
    } else if (!num2) { //En el caso que solo tengamos un parámetro:
        return "La raíz cuadrada es igual a "+parseFloat(Math.sqrt(num1).toFixed(3));
    } else { //En el caso que algún parámetro no sea un número:
        return("Los parámetros a introducir deben ser números.");
    }
}