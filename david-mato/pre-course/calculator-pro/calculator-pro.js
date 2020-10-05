const resultsArr = [];

const sum = (...theArgs) => {    
    return theArgs.reduce((acc, cur) => {
        return +(acc + cur).toFixed(3);
    })
}

const subtr = (...theArgs) => {    
    return theArgs.reduce((acc, cur) => {
        return +(acc - cur).toFixed(3);
    })
}

const mult = (...theArgs) => {    
    return theArgs.reduce((acc, cur) => {
        return +(acc * cur).toFixed(3);
    })
}

const div = (...theArgs) => {    
    return theArgs.reduce((acc, cur) => {
        return +(acc / cur).toFixed(3);
    })
}

const calculatorPro = (...theArgs) => {

    if (theArgs.length == 1) {

        console.log(`La raíz cuadrada de ${theArgs} es ${+Math.sqrt(theArgs).toFixed(3)}`);
        moreCalc();

    } else if (theArgs.length > 1) {

        var num = resultsArr.length / 4 + 1;
        resultsArr.push(`Suma ${num}: ${sum(...theArgs)}`,`Resta ${num}: ${subtr(...theArgs)}`, `Multiplicación ${num}: ${mult(...theArgs)}`,`División ${num}: ${div(...theArgs)}`);
        
        console.log(`El resultado de la suma ${num} es ${sum(...theArgs)}
El resultado de la resta ${num} es ${subtr(...theArgs)}
El resultado de la multiplicación ${num} es ${mult(...theArgs)}
El resultado de la división ${num} es ${div(...theArgs)}`);

        moreCalc();

    } else {

        getNumbers();

    } 
} 

function getNumbers () {

    const numbers = [];

    do {
        var calc = prompt("Introduce un número o dale a cancelar");
        if (isNaN(Number(calc))) {
            alert("No se admiten letras, solo números");
        } else if (calc !== ""){
        numbers.push(Number(calc));
        }
    } while (calc !== null);

    if (calc === null) {
        numbers.pop();
        if (numbers.length < 1) {
            return alert("¡Adiós!");
        }
    }

    calculatorPro(...numbers);
}

function moreCalc() {

    do { 
        var askUser = prompt("¿Nuevos números? s/n");
        if (askUser !== null) {
            askUser = askUser.toLowerCase();
        } 
    } while (askUser !== 's' && askUser !== 'n' && askUser !== null);

    switch(askUser) {
        case 's':
            getNumbers();
            break;
        case 'n':
            alert('¡Adiós!');
            break;
        default:
            alert('¡Adiós!');
            break;
    }
}

calculatorPro();
