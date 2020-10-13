let preResult = [];
let result = [];
let finalResult = "";

function simpleCalculator(num1, num2) {

    preResult = [];
    result = [];
    // Primero verificamos cuantos argumentos se han pasado a la funcion
    if (arguments.length === 1 && typeof arguments[0] == "number") {

        result.push(Number(Math.sqrt(arguments[0]).toFixed(2)));
        finalResult = `La raiz cuadrada de num1 es: ${result}`;
    // En el caso de que se pasen mas de 2 arguments, nos dara un mensaje de error
    } else if (arguments.length >= 3) {
        
        throw TypeError(`Maximo 2 Numeros!`);
    // Si tenemos los 2 arguments, verificamos que ambos sean "Numeros"
    } else if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
        preResult.push((num1 + num2), (num1 - num2), (num1 * num2), (num1 / num2));
        
        for (let i = 0; i < preResult.length; i++) {
            const arrCheckDecimal = preResult[i];
            //En este apartado, redondeamos el valor a un maximo de 2 decimales en el caso de que sea necesario
            arrCheckDecimal - Math.floor(arrCheckDecimal) == 0 ? result.push(arrCheckDecimal) : result.push(Number(arrCheckDecimal.toFixed(2)));
        }
        
        finalResult = `Aqui tenemos el resultado de las operaciones (Suma, Resta, Multiplicacion, Division):\n\tSuma: ${num1} + ${num2} = ${result[0]}\n\tResta: ${num1} - ${num2} = ${result[1]}\n\tMultiplicacion: ${num1} * ${num2} = ${result[2]}\n\tDivision: ${num1} / ${num2} = ${result[3]}\n`;
        
    } else {
        throw TypeError(`Solo se aceptan Numeros`);
    }

    return finalResult;
}
console.log(simpleCalculator(2));

//Prueba git
