/* Haz una calculadora. Un único programa al que le pasarás dos parámetros y 
el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 
El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier 
cosa que no sean números.*/

/*Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, 
si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre*/

/*Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario*/

function sum (num1,num2) {
    var resultSum=Math.round((num1+num2)*1000)/1000;
    return resultSum;
}

function rest (num1,num2) {
    var resultRest=Math.round((num1-num2)*1000)/1000;
    return resultRest;
} 

function multi (num1,num2) {
    var resultMult=Math.round((num1*num2)*1000)/1000;
    return resultMult;
}

function div (num1,num2) {
    var resultDiv=Math.round((num1/num2)*1000)/1000;
    return resultDiv;
}

function calculadora(num1,num2){
    var results=[];
    var raizCuad = 0;
    
    if (num1 && num2){
        results=["Operación "+num1+ " y "+num2+ ": SUMA= "+ sum(num1,num2) +", RESTA= "+ rest(num1,num2) + ", MULTIPLICACIÓN= "+ multi(num1,num2) + " y DIVISIÓN= "+ div(num1,num2)];
        console.log(results);
        } else if (num1 && !num2) {
            raizCuad = Math.sqrt(num1);8
            results=["La raíz cuadrada de "+ num1 + " es "+ raizCuad];
            console.log(results);        
            } else if (!num1 && !num2) {
                alert("Debe introducir como mínimo un número");
                }
}


/*function calculatorPro(args){     //Realiza el tratamiento de los valores introducidos y los almacena en un array
    
    var finalResults=[];
    var results=[];

    for (var i=0; i<args.length; i++){
        if (i<0) {
            alert("Debe introducir como mínimo un número")
            } else if (i=0) {
                results=squareRoot(args);
                finalResults.push(results);
                results=[];

                } else {
                    results="Operación "+args+ ": SUMA= "+ sum(args) +", RESTA= "+ subt(args) + ", MULTIPLICACIÓN= "+ multi(args) + " y DIVISIÓN= "+ div(args);
                    finalResults.push(results);
                    results=[];
                }  
            
        
        console.log(finalResults);
        //startCalculator();
        }
        
}*/
/*var final = [];

function calcs (){
  
    let sum = 0;
    let subs = arguments[0];
    let mult = 1;
    let div = arguments[0];
    var checkNum = [];
    

  
    for (var j = 0; j < arguments.length; j++) {
      sum += arguments[j];
      mult *= arguments[j];
    }
  
    for (var l = 1; l < arguments.length; l++) {
      subs -= arguments[l];
      div /= arguments[l];
    }
  
    checkNum.push(sum, subs, mult, div);
  
    for ( var k = 0; k < checkNum.length; k++) {
      if (checkNum[k] % 1 != 0) {
        checkNum[k] = checkNum[k].toFixed(3);
      }
    }
  
    final.push("la suma de los numeros es: " + checkNum[0], " la resta de los numeros es: " + checkNum[1], "La multiplicación de los numeros es: " + checkNum[2], " La división de los numeros es: " + checkNum[3]);
    return results();
  }
  
  function results() {
    
    console.log(final);
    checkNum = [];
    return calculatorPro();
  }
/*



