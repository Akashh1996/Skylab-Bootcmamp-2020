function bingo() {

    let newNum;

    let carton = {
        linea1: [1, 4, 9, 20, 25],
        mostrarCarton () {
            console.log(this.linea1);
        }
    }

    function randomNumber () {
        newNum = Math.floor((Math.random() * 100) + 1);
    }

    function newTurn () {

        randomNumber();

        console.log("El nuevo numero es: " + newNum);

        for (let i = 0; i < carton.linea1.length; i++) {
            if (newNum == carton.linea1[i]) {
                carton.linea1[i] = "X";
            }
        }

        askNewTurn();

    }

    function askNewTurn () {
        carton.mostrarCarton ();
        let answerNewTurn = prompt ("Desea realizar un nuevo turno?");

        if (answerNewTurn == "si") {

            return newTurn()

        } else {

            console.log("Bye!");

        }

    }

askNewTurn();

}

bingo();





