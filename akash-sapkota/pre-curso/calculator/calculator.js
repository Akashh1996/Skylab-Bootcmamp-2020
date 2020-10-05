 calculadora = (num1,num2) => {
    let resultArray = []
    let suma,resta,mult,div
    if(isNaN(num1) || isNaN (num2) && (num1 !== undefined && num2 !== undefined)){
        console.log("Error: Introduzca los numeros ");
    }else if(num1 === undefined || num2 === undefined ){
        console.log(`raiz cuadrada de ${num1} es ` + parseFloat(Math.sqrt(num1).toFixed(3)));
    }else{
        suma =   parseFloat((num1+num2).toFixed(3)) 
        resta = parseFloat((num1-num2).toFixed(3))
        mult = parseFloat((num1*num2).toFixed(3))
        div = parseFloat((num1/num2).toFixed(3))
        resultArray.push(`${num1} + ${num2} = ${suma}, ${num1} - ${num2} = ${resta}, ${num1} * ${num2} = ${mult}, ${num1} / ${num2} = ${div}`)
        console.log(resultArray);

    }
}

calculadora(3,4) //[ '3 + 4 = 7, 3 - 4 = -1, 3 * 4 = 12, 3 / 4 = 0.75' ]
calculadora(4) //raiz cuadrada de 3 es 9
calculadora(3,"ñ") //Error: Introduzca los numeros





