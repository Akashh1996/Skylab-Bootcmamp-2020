var continuar = true;
let arrayNumeros = [];
var numero;
function comprobarNumeros(){
    while(continuar === true){
        numero = prompt("Introduce un número");
        if(isNaN(numero)){
            console.log(numero + " no es un número");        
        }else{
            arrayNumeros.push(parseInt(numero));
        }
        continuar = confirm("Deseas continuar?");
    }
}

function calculadoraPro(){
    var primerNumero = arrayNumeros[0];
    if(arrayNumeros.length === 1){
        console.log("La raiz cuadrada es = " + Math.sqrt(primerNumero));
        
    }else{
        var contSuma = primerNumero;
        var contResta = primerNumero;
        var contMult = primerNumero;
        var contDiv = primerNumero;
        
        for(var i = 1; i<arrayNumeros.length; i++){
            contSuma += arrayNumeros[i];
            contResta -= arrayNumeros[i];
            contMult *= arrayNumeros[i];
            contDiv /= arrayNumeros[i]; 

        }
        contSuma = "Resultado suma = " + contSuma;
        contResta = "Resultado resta = " + contResta;
        contMult = "Resultado multiplicación = " + contMult;
        contDiv = "Resultado división = " + parseFloat((contDiv).toFixed(3));;

        let resultados = [contSuma,contResta,contMult,contDiv];
         console.log(resultados);
    }
}

while(continuar === true){
    comprobarNumeros();
    if(arrayNumeros.length > 0){
        calculadoraPro();
    }
    arrayNumeros = [];
    continuar = confirm("Deseas realizar mas operaciones?");
}

