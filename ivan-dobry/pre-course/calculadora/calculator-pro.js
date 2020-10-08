var arrayNum = [];
var final = [];
var total;
var checkNum = [];

function calculatorPro() {
  let answer;

  answer = prompt ("Desea realizar nuevos calculos? (y/n)");

  if (answer == "y") {
    return getNumbers();

  } else {
    console.log ("Bye!");
  }

}


function getNumbers() {

let i = 0;
let num;

  while (i >= 0) {
	  num = prompt ("type a number");
    if (num == null) {
     i = -1
    } else if (isNaN(num)) {
      console.log("Solo introducir numeros!");
      i++;
    } else {
      arrayNum.push(Number(num));
      i++;
    }
   
  }

  if (arrayNum.length == 1) {
    total = Math.sqrt(arrayNum).toFixed(3);
    final.push("La raiz cuadrada del numero es: " + total);
    return results();
  } else {
    return calcs();
  }
 
}


function calcs (){
  
  let sum = 0;
  let subs = arrayNum[0];
  let mult = 1;
  let div = arrayNum[0];


  for (var j = 0; j < arrayNum.length; j++) {
    sum += arrayNum[j];
    mult *= arrayNum[j];
  }

  for (var l = 1; l < arrayNum.length; l++) {
    subs -= arrayNum[l];
    div /= arrayNum[l];
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

calculatorPro();

