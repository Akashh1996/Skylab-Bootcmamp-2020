let randomNumCard
let randomNum

let card = []
function generateNums(){
    for (let index = 0; index < 5; index++) {
        randomNumCard = Math.floor(Math.random() * 20) + 1;
        if(card.includes(randomNumCard)){
            index--
            continue
        }else{
            card.push(randomNumCard)
        }
    }
}


function showCard(){
    let cardMessage = "your card is --->"
    for (let index = 0; index < card.length; index++) {
       cardMessage = cardMessage + " " +  card[index] + " "
        
    }
    console.log(cardMessage);
}
function getRandom(){
    randomNum = Math.floor(Math.random() * 20) + 1; 
    console.log("your number is " + randomNum)

}
function updateCard(){
    for (let index = 0; index < card.length; index++) {
        if(randomNum === card[index]){
            card[index] = "X"
        }
        
    }
}


let tot = 0
function bingo(){
    let continueGame = true
    let user = prompt("write your name")
if(user === "" ){
    alert("you must enter your name")
    bingo()
    }else if(isFinite(user) && user !== null){
    alert("you cant insert number as your name")
    bingo()
    
    }else if(user !== "" && user !== null){
    alert("Welcome to skylab bingo " + user + " Lets start the game !!")
 
    }else if(user === null){
    return
    }
    generateNums()

        while(continueGame){
            showCard()
            let ask = confirm("Do you want to Continue the game ")
            if(ask === true){
            getRandom()
            updateCard()
            tot++
            let check = card.every(numbers=>  numbers === "X")
                if(check){
                    console.log("............and its BINGO !!! " + card);
                     alert("Congratulations!! you won the game with " + tot + "times")
                        card = []
                        continueGame = false   
                        let startAgain = confirm("start again")
                        if(startAgain){
                            bingo()
                        }else{
                            alert("hasta ptonto " + user.toUpperCase())
                            return
                        }

                }
            
            }else{
            continueGame = false
        }
    }
    
}

bingo() 