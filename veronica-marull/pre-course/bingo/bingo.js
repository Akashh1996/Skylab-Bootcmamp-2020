function bingo() {
    let name = '';
    
    let counterRounds = 0;

    let start = window.confirm('Desea comenzar el juego?');

    let players = [];


    while(start) {

        showScoringSystem();

        name = getPlayerName(); 
        if(name === null || name.length === 0 || isANumber(Number(name))) {
            return window.alert('Ha decidido abandonar la partida.') 
        }

        let actualPlayer = new Player(name)
        players.push(actualPlayer);
        
        let newCard = generateCard();
        showCard(newCard);
        let acceptCard = window.prompt('Si desea continuar con este carton responda: Yes, si desea generar otro ingrese: No.');
        
        while(acceptCard !== 'Yes' && acceptCard !== 'No') {

            window.alert('Ha ingresado una respuesta inválida. Debe ingresar: Yes o No');
            acceptCard = window.prompt('Si desea continuar con este carton responda Yes, si desea generar otro ingrese No.');
        }
        
        while(acceptCard === 'No') {
            newCard = generateCard();
            showCard(newCard);
            acceptCard = window.prompt('Si desea continuar con este carton responda Yes, si desea generar otro ingrese No.');
            while(acceptCard !== 'Yes' && acceptCard !== 'No') {

                window.alert('Ha ingresado una respuesta inválida. Debe ingresar: Yes o No');
                acceptCard = window.prompt('Si desea continuar con este carton responda Yes, si desea generar otro ingrese No.');
            }
        }


        counterRounds++;
        let ball = drawBall();
        let next = nextRound(ball);
        let existeLinea = false;

        while(next) {
            counterRounds++;
            if(isMatched(newCard, ball)) { 
                
                markNumber(newCard, ball); 
                showCard(newCard);
                console.log('El número encontrado es el ' + ball);

                if(!existeLinea) {

                    let line = isLine(newCard);
                    if(line) {
                        window.alert('Linea!');
                        existeLinea = true;
                    }

                }

                let bingo = isBingo(newCard);                
                if(bingo){ 

                    console.log('Fin del juego!');
                    console.log('El cartón se ha completado en ' + counterRounds + ' turnos.')

                    score(actualPlayer, counterRounds);
                    
                    console.log('Su puntuación es de ' + actualPlayer.points + ' puntos.');
                    
                    showScorePlayer(players);


                    next = false;

                }

            }

            showCard(newCard);
            if(next) {

                ball = drawBall();
                next = nextRound(ball);

            }
            

        }

        start = window.confirm('Desea comenzar una nueva partida?');

    }

    return 'Adios!'


}

function isBingo(card) {

    let completeCard = false;
    for (e of card) {
        if(e.number === 'X'){
            completeCard = true;
        }else {
            return false;
        }
    }
    return completeCard;
}


function lines(card){

    let firstLine = [];
    let secondLine = [];
    let thirdLine = [];
    let divCardEnLineas = redondeo(card.length / 3);

    for (e of card){
        if(firstLine.length < divCardEnLineas) {

            firstLine.push(e);
        
        }else if(secondLine.length < divCardEnLineas){
            secondLine.push(e);
        
        }else{

            thirdLine.push(e);
        }
    }

    return [firstLine, secondLine, thirdLine];


}

function isLine(card) { 

    let linesArray = lines(card);

    
    let matchedArray = [];
    let result = false;

    for (e1 of linesArray) {
        for (e2 of e1) {

            matchedArray.push(e2.matched);

        } 
        
        result = matchedArray.includes(false);
        if(!result) {
            return true;
        }
        matchedArray = [];
    }
    
    return false;
    
}

function esEntero(num){
    if (num % 1 == 0) {
        return true;
    }else {
        return false;
    }
}

function redondeo(num) {
    if(esEntero(num)) {
        return num;
    } else {
        return num.toLocaleString(undefined, {maximumFractionDigits: 0});
      }
}

function isMatched(card, num) {

    for (e of card) {
        if(e.number === num){
            return true;
        }
    }
    return false;

}

function markNumber(card, num) {

    for (e of card) {
        if(e.number === num){
            e.number = 'X';
            e.matched = true;
        }
    }

}


function getPlayerName(){

    let name = window.prompt('Ingrese su nombre');
    
    while(name === null || name.length === 0 || isANumber(Number(name))) {
        
        let yesOrNot = false;
        if(name === null) {

            return name;
        }
        else if(name.length === 0){

            yesOrNot =  window.confirm('No ha ingresado un nombre válido. Si desea continuar, seleccione Aceptar e ingrese su nombre, si desea salir, seleccione Cancelar.')
            
            if(yesOrNot) {

                name = window.prompt('Ingrese su nombre');

            }else {

                return name;

            }
        }else {

            window.alert('No se pueden ingresar numeros como nombre.');
            yesOrNot =  window.confirm('Si desea continuar, seleccione Aceptar e ingrese su nombre, si desea salir, seleccione Cancelar.')
            if(yesOrNot) {

                name = window.prompt('Ingrese su nombre');

            }else {
                return name;
            }

        }
    }
    return name;
}


function nextRound(num) {
    
    let follow = window.confirm('El número sorteado es el: ' + num + ' Desea pasar al siguiente turno?');
    return follow;
}

function drawBall() {
    let ball = getRandomInt(1,99); 
    return ball;
} 

function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min)) + min;

}


function generateCard(){
    
    var bingoCard = [

        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },

        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },

        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false },
    
        { number: getRandomInt(1, 99), matched: false }
        

    
    ]
    return bingoCard;

}


function showCard(card){

    let lineArray = lines(card);

    let firstLine = lineArray[0];  
    let secondLine = lineArray[1];
    let thirdLine = lineArray[2];
    let = numbers1 = [];
    let = numbers2 = [];
    let = numbers3 = [];

    for(e of firstLine) {
        
        numbers1.push(e.number);
        
    }
    console.log(numbers1);

    for(e of secondLine) {
        
        numbers2.push(e.number);
        
    }
    console.log(numbers2);

    for(e of thirdLine) {
        
        numbers3.push(e.number);
        
    }
    console.log(numbers3);

  
}

function isANumber(n) {

    let esUnNumero = false;
    
        if(typeof n === 'number' && !isNaN(n)){

            esUnNumero = true; 

        }else {

            return false;
        }
    
    return esUnNumero;
}


function Player(name){

    this.name = name,
    this.points = 0
}

function score(player, rounds) {

    if(rounds <= 100) {

        player.points = 30;

    }else if(rounds > 100 && rounds <= 200){

        player.points = 20

    }else {
        player.points = 10;

    }

}

function showScorePlayer(players) {

    for (e of players) {

        console.log(e.name + ' '+ e.points + ' puntos.');

    }

}

function showScoringSystem() {

    console.log('Si completa el cartón en 100 turnos o menos, obtiene 30 puntos.');
    console.log('Si completa el cartón en mas de 100 turnos y menos de 200 (o 200) turnos, obtiene 20 puntos.');
    console.log('Si completa el cartón en mas de 200 turnos, obtiene 10 puntos.');
}