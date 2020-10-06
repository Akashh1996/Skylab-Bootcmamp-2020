
//CALCULADORA


//HACEMOS UNA COMPROBACIÓN DE LOS NÚMEROS QUE LE PASAREMOS A LA FUNCIÓN ANTES DE EJECUTARLA
function comprobarNumeros(num1 = undefined, num2 = undefined){
    if(num1 === undefined && num2 === undefined){
        //Comprueba si han pasado algún parametro
        console.log("Mínimo 1 parametro.");
    }else if(num2 === undefined){
        //Comprueba si solo pasan un parámetro a la función
        console.log("Raiz cuadrada de " + num1 +" = " + Math.sqrt(num1).toFixed(3));
    }else if(isNaN(num1) || isNaN(num2)){
        //Comprueba si alguno de los dos parámetros no es un número
        console.log("Solo se pueden introducir números");
    }else{
        //Si los dos parámetros son números entonces llamamos a la función calculadora
        calculadora(num1,num2);
    }
}



function calculadora(num1, num2){

   let suma = num1 + num2;
   let resta = num1 - num2;
   let mult = num1 * num2;
   let div = num1 / num2;

   let resultados = ["Resultado suma --> "+ suma, "Resultado resta --> "+ resta, "Resultado multiplicación --> "+ mult, "Resultado división --> "+ parseFloat( div.toFixed(3))];
   console.log(resultados);
}

comprobarNumeros(20,40);

