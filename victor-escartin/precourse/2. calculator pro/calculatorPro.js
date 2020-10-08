/* Haz una calculadora. Un único programa al que le pasarás dos parámetros y 
el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 
El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier 
cosa que no sean números.

Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, 
si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre

Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario

Podrías hacer que la calculadora realizara operaciones sea cual sea el número de argumentos 
pasados a la función?

Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver 
a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.*/



var finalResults=[];


function startCalculator(){  //Nos permite conocer si debemos almacenar nuevos resultados
    var option=prompt("¿Deseas introducir una nueva operación? Indica Y o N");
    option= option.toUpperCase();
    
    switch (option){
        case "Y":
            getNumbers();          
            startCalculator(); 
            break;
        case "N":
            alert("Bye!");
            for (var i=0; i<finalResults.length; i++){
                console.log(finalResults[i]);
            };
            break;
        default:
            alert("Por favor indica Y/N");
            startCalculator();

    }
}

function getNumbers() {  //Nos permite obtener los valores a tratar

    var values =[];
    var askNumber=true;
    var num;
    while(askNumber===true){
        num= Number(prompt('Por favor,introduce un número'));
        if(isNaN(num) ){
            alert('No has introducido un número')
            askNumber=confirm('Quieres seguir introduciendo números?')
            }else{
                values.push(num);
                askNumber=confirm('Quieres seguir introduciendo números?');
                }
    }

    if (values.length==1){
        return squareRoot(values);
    } else if (values.length>1) {
        return calculatorPro(values);
    }
}

function squareRoot(num1) {     //Realiza la raiz cuadrada cuando se introduce un solo valor
    var raizCuad = Math.sqrt(num1).toFixed(2);
    return finalResults.push("La raíz cuadrada de "+ num1 + " es "+ raizCuad);
}

function calculatorPro(args){ 
    
    function sum(...arguments) {  //Realiza la suma de cualquier cantidad de valores introducidos
        return arguments.reduce(function(acc,cur){
            return acc+cur;
        })
    }
    
    function subt(...arguments) {   //Realiza la resta de cualquier cantidad de valores introducidos
        return arguments.reduce(function(acc,cur){
            return acc-cur;
        })
    }
    
    function multi(...arguments) {  //Realiza la multiplicación de cualquier cantidad de valores introducidos
        return arguments.reduce(function(acc,cur){
            return acc*cur;
        })
    }
    
    function div(...arguments) {    //Realiza la division de cualquier cantidad de valores introducidos
        return arguments.reduce(function(acc,cur){
            return (acc/cur).toFixed(2);
        })
    }//Realiza el tratamiento de los valores introducidos por el usuario
    
    return finalResults.push("SUMA= "+sum(...args), "RESTA= "+subt(...args), "MULTIPLICACIÓN= "+multi(...args), "DIVISIÓN= "+div(...args));
}

         

startCalculator();
