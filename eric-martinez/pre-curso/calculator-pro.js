var aNums = [];
var question = true;

while(question == true){
    introducirNumeros();
    if(aNums.length>0){
        calcPro();
        aNums = [];
        question = confirm("Â¿Desea aÃ±adir mÃ¡s nÃºmeros?");
    }
}
if(question == false){
    console.log("Â¡Bye!");
}

function introducirNumeros (){
    while(question == true){
        var num = prompt("Introduce un nÃºmero o dale a Cancelar");
        if(isNaN(num)){
            alert("No se admiten letras, solo se admiten nÃºmeros.");
        }else if(num !== ""){
            aNums.push(parseInt(num));
        }
        question = confirm("Â¿Deseas introducir mÃ¡s nÃºmeros?");
    }
}

function calcPro (){
    var numRaiz = aNums[0];
    if(numRaiz.lenght === 1){
        console.log("La raiz cuadrada de " + numRaiz + "es = " + Math.sqrt(numRaiz));
    }else {
        let suma = aNums[0];
        let resta = aNums[0];
        let multi = aNums[0];
        let division = aNums[0];

        for (var i = 1; i<aNums.length; i++){
            suma += aNums[i];
            resta -= aNums[i];
            multi *= aNums[i];
            division /= aNums[i];
        }
        let resDiv = parseFloat((division).toFixed(3));

        let results = console.log("La suma es = " + suma + "\nLa resta es = " + resta + "\nLa multiplicaciÃ³n es = " + 
        multi + "\nLa divisiÃ³n es = " + resDiv);
    }
}