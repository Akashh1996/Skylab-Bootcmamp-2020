function quitarDecimales(num){
    return parseFloat(num.toFixed(3))
}

function suma(numero){
    let sumaTotal = 0
    for (let index = 0; index < numero.length; index++) {
        sumaTotal = sumaTotal + numero[index]
        
    }
    return quitarDecimales(sumaTotal)
}
function mult(numero){
    let multTotal = 1
    for (let index = 0; index < numero.length; index++) {
        multTotal = multTotal * numero[index]
        
    }
    return quitarDecimales(multTotal)
}

function resta(numero){
    let restaTotal = numero[0]
    for (let index = 1; index < numero.length; index++) {
        restaTotal = restaTotal - numero[index]
        
    }
    return quitarDecimales(restaTotal)
}
function div(numero){
    let divTotal = numero[0]
    for (let index = 1; index < numero.length; index++) {
        divTotal = divTotal / numero[index]
        
    }
    return quitarDecimales(divTotal)
}
function askUser(){
    var user = confirm("quieres volver a realizar otras operaciones ?")
    if(user === true){
        calculatorPro()
    }else if(user === false){
        console.log("bye");
    }
}

function calculatorPro(...args){
    let resultados = []
    if(args.length === 1){
        console.log(`Raiz cuadrada de ${args} es ${Math.sqrt(args)}`);
    }else if(args.length >1 ){
         resultados.push(`la suma de los numeros ${args} es : ${suma(args)}`)
         resultados.push(`la resta de los numeros ${args} es :${resta(args)}`)
         resultados.push(`la division de los numeros ${args} es :${div(args)}`)
         resultados.push(`y la multiplicacion de los numeros ${args} es :${mult(args)}`)
        console.log(resultados);
    }
    askUser()

}

calculatorPro(2,3,5)
 //[ 10, -6, 0.133, 30 ]