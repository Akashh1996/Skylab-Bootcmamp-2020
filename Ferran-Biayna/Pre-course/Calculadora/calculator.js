'use strict'

function calculadora(n1,n2=undefined) {
    if (n2===undefined) {
        if (entero(Math.sqrt(n1))==true) {
            return Math.sqrt(n1);
        } else {
            return Math.sqrt(n1).toFixed(3);
        }
    } else {
        var resultSum=n1+n2;
        var resultRest=n1-n2;
        var resultMult=n1*n2;
        var resultDiv=n1/n2;
        if (entero(resultSum)==false) {
            resultSum=(n1+n2).toFixed(3);
        } if (entero(resultRest)==false) {
            resultRest=(n1-n2).toFixed(3);
        } if (entero(resultMult)==false) {
            resultMult=(n1*n2).toFixed(3);
        } if (entero(resultDiv)==false) {
            resultDiv=(n1/n2).toFixed(3);
        }
        var results=[`Suma --> ${n1}+${n2}=${resultSum}`,`Resta --> ${n1}-${n2}=${resultRest}`,`Multiplicación --> ${n1}*${n2}=${resultMult}`,`División --> ${n1}/${n2}=${resultDiv}`];
        return results;
    }
}
function entero(n) {
    if (n%1==0) {
        return true;
    } else {
        return false;
    }
}

console.log("\t-- CALCULADORA --\t");
while (true) {
    var n=parseInt(prompt("\n¿Cuántos números quieres introducir? (Elige entre 1 y 2): ",""));
    if (n!=1 && n!=2) {
        console.log("\nLa opción introducida no es correcta. Vuelve a intentarlo");
    } else if (n==1) {
        while (true) {
            var n1=parseFloat(prompt("\nIntroduce el número: "));
            if (isNaN(n1)==false) {
                console.log(calculadora(n1));
                break
            } else {
                console.log("\nLa opción introducida no es correcta. Vuelve a intentarlo");
            }
        }
        break
    } else {
        while (true) {
            var n1=parseFloat(prompt("\nIntroduce el primer número: "));
            var n2=parseFloat(prompt("Introduce el segundo número: "));
                if (isNaN(n1)==false && isNaN(n2)==false) {
                    console.log(calculadora(n1,n2));
                    break
                } else {
                    console.log("\nLa opción introducida no es correcta. Vuelve a intentarlo");
                }
        }
        break
    }
}