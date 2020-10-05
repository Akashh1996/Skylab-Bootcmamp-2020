var nombreJugador;
nombreJugador = prompt("Introduzca el nombre del Jugador: ")

var cartonJ1 = [];
var volverJugar;
var numerosPremiados = [];
var sorteo;
var volverJugar = true;
var liniaOk = false;
var bingo = 0;

function startGame() {
    sorteo = true;
    cartonJ1 = [];
    numerosPremiados = [];
    liniaOk = false;
    bingo = 0;
}

function randomNum(){
    var generateNum = Math.floor(Math.random() * 100) + 1;
    var repetido = false;

    while(!repetido){
        if(numerosPremiados.includes(generateNum)){
            generateNum = Math.floor(Math.random() * 100) +1;
        }else{
            numerosPremiados.push(generateNum);
            repetido = true;
        }
    }
    return generateNum;
}

function crearCarton(){
    var fila = [];

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 5; j++){
            var numero = randomNum();
            fila.push(
                {
                    numCarton: numero,
                    acertado: false
                }
            );
        }
        cartonJ1.push(fila);
        fila = [];
    }
    showCarton();
}

function showCarton(){
    console.log("CartÃ³n: ");
    for(var i = 0; i < cartonJ1.length; i++){
        var mostrarFila = " ";
        for(var j = 0; j < cartonJ1[i].length; j++){
            if(cartonJ1[i][j].acertado){
            mostrarFila += "X ";
            }else{
                mostrarFila += cartonJ1[i][j].numCarton + " ";
            }
        }
        console.log(mostrarFila);
    }
    console.log("\n");
}

function partida(){
    var numPartida = randomNum();
    console.log("Ha salido el nÃºmero : " + numPartida);
    verificarNumero(numPartida);
    if(!liniaOk){
        verificarLinia();
    }
    volverJugar = confirm("Â¿Desea sacar la siguiente bola?");
}

function verificarNumero(numPartida){
    for(var i = 0; i < cartonJ1.length; i++){
        for(var j = 0; j < cartonJ1[i].length; j++){
            if(cartonJ1[i][j].numCarton === numPartida){
                console.log("Numero encontrado en su cartÃ³n: " + numPartida);
                cartonJ1[i][j].acertado = true;
                bingo++;
                cartonJ1[i][j].numCarton = "X";
                return
            }
        }
    }
}

function verificarLinia(){
    var linias;

    for(var i = 0; i < cartonJ1.length; i++){
        linias = 0;
        for(var j = 0; j < cartonJ1[i].length; j++){
            if(cartonJ1[i][j].acertado){
                linias++;
            }
        }
        if(linias === 5){
            liniaOk = true;
            console.log("Â¡HAS CANTADO LÃNEA!");
            return;
        }
    }
}

function verificarBingo(){
    if(bingo === 15){
        console.log("Â¡Felicidades, has cantado bingo!");
        sorteo = false;
        return;
    }
}

while (volverJugar){
    startGame();
    crearCarton();
    numerosPremiados = [];
    showCarton();
    sorteo = confirm("Pulse Aceptar para sacar la siguiente bola: ");
    while(sorteo){
        partida();
        showCarton();
        verificarBingo();
    }
    volverJugar = confirm("Â¿Desea volver a jugar?");
}

console.log("Â¡AdiÃ³s!");