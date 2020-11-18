    let num1 = parseFloat(prompt("Cual es el primero numero?"));
    let num2 = parseFloat(prompt("Cual es el segundo numero?"));


    if (isNaN(num1) && isNaN(num2)) {
        alert("Por favor introducir numeros");
    } else if(isNaN(num1) && !isNaN(num2)) {
        alert("La raíz cuadrada de " + num2 + " es: " + + Math.sqrt(num2).toFixed(3));
    } else if(isNaN(num2) && !isNaN(num1)) {
        alert("La raíz cuadrada de " + num1 + " es: " + + Math.sqrt(num1).toFixed(3));
    } else {
        var sum = (num1 + num2).toFixed(3);
        var sub = (num1 - num2).toFixed(3);
        var product = (num1 * num2).toFixed(3);
        var divi = (num1 / num2).toFixed(3);
    }


    




    let operaciones = [sum, sub, product, divi];
    let resultados = "La suma es: " + operaciones[0] + "\nLa resta es: " + operaciones[1] + "\nLa multiplicacion es: " + operaciones[2] + "\nLa division es: " + operaciones[3];
    

  

alert(resultados);