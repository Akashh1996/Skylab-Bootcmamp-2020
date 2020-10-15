
function isHappy(n, pow) {
    let arrayResultado = [];
    arrayResultado.push(n);
    let isDone = false;
    while(!isDone){
      let numSplit = arrayResultado[arrayResultado.length - 1].toString().split("");
      let numsElevados = [];
      for(let i = 0; i < numSplit.length; i++){
        numsElevados.push(Math.pow(parseInt(numSplit[i]), pow));
      }
      let resultadoSuma = 0;
      for(let i = 0; i < numsElevados.length; i++){
        resultadoSuma += numsElevados[i];
      }
      arrayResultado.push(resultadoSuma);
      if(resultadoSuma === n){
        isDone = true;
        return arrayResultado;
      }
      if(resultadoSuma === 1){
        return [1];
      }
    }
  }


  mmodule.exports = isHappy