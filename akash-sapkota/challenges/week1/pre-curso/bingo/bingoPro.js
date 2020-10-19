let randomCardNumber
let randomPlayerNUmber
let initialRandomPlayerNumber = []
let cardNumber = []
let line1 = []
let line2 = []
let line3 = []
let total = 0
let playerNames = []
let player

function generateCard(){
    for (let index = 0; index < 15; index++) {
        randomCardNumber = Math.floor(Math.random() * 15 +1)
        if(cardNumber.indexOf(randomCardNumber) === -1){
            cardNumber.push(randomCardNumber)
        }else index--

    }
    console.log("Play with thsese numbers ?" + cardNumber.join("---"));
    
}

function createCard(){
    generateCard()
    for (let index = 0; index < cardNumber.length-10; index++) {
       line1.push(cardNumber[index])
        
    }
    for (let index = 5; index < cardNumber.length-5; index++) {
       line2.push(cardNumber[index])
        
    }
    for (let index = 10; index < cardNumber.length; index++) {
       line3.push(cardNumber[index])
        
    }
}

function showCard(){
    console.log(`         This is your card number 

                ${line1.join( "----")}

                ${line2.join( "----")}

                ${line3.join("----")}`);
}


function randomNumber(){
    randomPlayerNUmber = Math.floor(Math.random() * 15 +1)
    console.log("your number is " + randomPlayerNUmber);
    
    
}
function updateNumbers(lines){
    for (let index = 0; index < lines.length; index++) {
        if(lines[index] === randomPlayerNUmber){
            lines[index] = "X"
        }
        
    }
}

function updateCard(){
    updateNumbers(line1)
    updateNumbers(line2)
    updateNumbers(line3)
}

function greetings(){
    player = prompt("write your name","player")
    if(player === "" ){
    alert("you must enter your name")
    greetings()
    }else if(isFinite(player) && player !== null){
    alert("you cant insert number as your name")
    greetings()
    }else if(player !== "" && player !== null){
    alert("Weclome to skyLab BINGO game, " + " " + player)
    }else if(player === null){
    return
    }
    playerNames.push(player)
   
}
function clearCard(){
    cardNumber=[]
    line1 =[]
    line2 =[]
    line3 =[]
}
function checkLines(lines){
     return lines.every(numbers =>{
         return numbers === "X"
     })
}
function bingo(){
    createCard()
    let game = true
    let chooseCard = confirm("Do you want to play with the same card or change?")
    if(chooseCard){
    while(game){
        total ++ 
        showCard()
        let x = confirm("Continue the game?")
             if(x){
                 randomNumber()
                 updateCard()
                        if(checkLines(line1) === true && checkLines(line2) === true && checkLines(line3) === true){
                        showCard()
                        game = false
                        alert("You won the game !! " + " for " + total + "times")
                            let playAgain = confirm("wanna more?")
                                if(playAgain){
                                    clearCard()
                                    greetings()
                                    bingo()

                            }else if(playAgain === false){
                            game = false
                            return
                        }
                }
            }else{
                game = false
        }
    }
    }else if(chooseCard === false){
        clearCard()
        bingo()
    }
}
greetings()
if(player){
bingo()
}else{
    alert(" hasta pronto !!!")
}
console.log(playerNames);

 
