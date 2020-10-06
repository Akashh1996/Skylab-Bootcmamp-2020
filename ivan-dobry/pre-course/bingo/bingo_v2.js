function bingo() {

    let newNum, name;
    let carton = [[],[],[]]; 
    let randomNumberCount = [];
    let randomCartonCount = [];
    let notLine = true;
    let score = 100;
    let turns = 1;
    let highScore = [ { name: "Tommy", score: 80}, { name: "Janis", score: 60}, { name: "Sharon", score: 58}, { name: "Lenon", score: 33}, { name: "Ozzy", score: 20}]

    function bienvenida() {

        name = prompt ("Introduzca su nombre");

        if ( name == "") {

            console.log("Introduzca un nombre, porfavor!");
            return bienvenida();

        } else if ( name == null) {

            console.log ("Adios!");

        } else {

            console.log("BIENVENIDO AL JUEGO DEL BINGO " + name + " !!! \nComplete el carton para ganar la partida \nEmpieza con una puntuación de 100 puntos, cada turno restará uno a su puntuación total y cantar linea le otorgará 50.");
            return firstMenu();

        }

    }

    function firstMenu () {
  
        let firstChoice = prompt("Presione : \n1.-Iniciar Partida \n2.-Salir");

        if (firstChoice == 1) {

            return getCarton();

        } else if (firstChoice == 2 || firstChoice == null) {

            console.log("Adios!")

        } else {

            console.log ("Presione 1 o 2!!")
            return firstMenu();

        }
    }

    function getCarton () {
        
        randomCarton();

        console.log("Este es su nuevo carton: ");
        for(let k=0; k < carton.length; k++){
            console.log(carton[k][0], carton[k][1], carton[k][2], carton[k][3], carton[k][4]);
        }

        let chooseCarton = prompt("Desea: \n1.-Continuar \n2.-Elegir nuevo carton \n3.-Salir");

        if (chooseCarton == 1) {

            return getRandomNumber();

        } else if (chooseCarton == 2) {

            carton = [[],[],[]];
            randomCartonCount = [];
            return getCarton();

        } else if (chooseCarton == 3 || chooseCarton == null) {

            console.log("Adios!");

        } else {

            console.log("Elija una opción!");
            return getCarton();

        }

    }

    function randomNumber () {
        newNum = Math.floor((Math.random() * 100) + 1);
    }

    function newTurn () {

        console.log("El nuevo numero es: " + newNum);

        for (let i = 0; i < carton.length; i++) {
            for (let l = 0; l < carton[i].length; l++) {
                if (newNum == carton[i][l]) {
                    carton[i][l] = "X";
                }
            }
        }

        for(let k=0; k < carton.length; k++){
            console.log(carton[k][0], carton[k][1], carton[k][2], carton[k][3], carton[k][4]);
        }

        return checkLine();

    }

    function askNewTurn () {
        
        let answerNewTurn = prompt ("Desea realizar un nuevo turno? \n1.-Si \n2.-No");

        if (answerNewTurn == 1) {

            score -= 1;
            turns += 1;
            return getRandomNumber();

        } else if (answerNewTurn == 2 || answerNewTurn == null) {

            console.log("Adios!");

        } else {

            console.log("Escriba 1 o 2");
            return askNewTurn();
        }

    }

    function getRandomNumber () {

        randomNumber();

        for (let i = 0; i < randomNumberCount.length; i++) {
            if (newNum == randomNumberCount[i]) {
                return getRandomNumber();
            }        
        }

        randomNumberCount.push(newNum);
        return newTurn();
        
    }

    function checkLine () {

        for (let i = 0; i < carton.length; i++) {
            if (carton[i][0] == "X" && carton[i][1] == "X" && carton[i][2] == "X" && carton[i][3] == "X" && carton[i][4] == "X" && notLine) {
                console.log("Linea!!!!");
                score = score + 50;
                notLine = false;
                console.log("Puntuacion: " + score);
                return askNewTurn();
            }
        }

        for (let j = 0; j < carton.length; j++) {
            for (let l = 0; l < carton[j].length; l++) {
                if (carton[j][l] != "X") {
                    console.log("Puntuacion: " + score);
                    return askNewTurn();                    
                }
            }
        }

        return winerMenu();

    }

    function winerMenu () {

        console.log("BINGO!!!!!!!!!!! \nSu puntuación final es de: " + score + "\nHa completado el carton en " + turns + " turnos.")

        for ( let i = 0; i < highScore.length; i++) {
            if (score > highScore[i].score) {
                highScore.splice(i,0, {name: name , score: score});
                break;
            }
        }
        
        console.log("Mejores puntuaciones: ");

        for (let j = 0; j < highScore.length; j++) {
            console.log ("Nombre: " + highScore[j].name + " Puntuacion: " + highScore[j].score);
        }

        return rePlayMenu();

    }

    function rePlayMenu() {

        let rePlayChoice = prompt ("Desea Jugar de nuevo? \n1.-Si \n2.-No");

        if (rePlayChoice == 1) {

            carton = [[],[],[]];
            randomCartonCount = [];
            randomNumberCount = [];
            notLine = true;
            score = 100;
            turns = 1;            
            return getCarton();

        } else if (rePlayChoice == 2 || rePlayChoice == null) {

            console.log ("Adios!");

        } else {

            console.log ("Escriba 1 o 2!");
            return rePlayMenu();

        }

    }

    function randomCarton() {
        
        let j = 0;
        let l = 0;

        randomNumber();
            
        for (let k = 0; k < 15; k++){
            for (let i = 0; i < randomCartonCount.length; i++) {
                if (newNum == randomCartonCount[i]) {
                    randomNumber();
                }      
            }
            randomCartonCount.push(newNum);
            randomNumber();
        }

        while (j<3) {
            for (let i = 0; i < 5; i++) {
                carton[j].push(randomCartonCount[l]);
                l ++;
            }
            j ++;
        
        }
        
    }

bienvenida();

}

bingo();