let ball;
var card = [];
let user;

function userName() {
    user = prompt("Como te llamas?");
    if(user === null) {
        alert("Hasta pronto!")
    } else if(user === "") {
        alert("Introduz un nombre valido!");
        userName();
    } else if(isFinite(user)) {
        alert("No puedes introducir numeros!");
        userName();
    } else {
        alert(`Bienvenido ${user}!\nEmpecemos.`);
    }
};

function createCard(){
    for (i=0; i < 5; i++) {
        numAleatorio = Math.floor(Math.random() * 20) + 1;
        if(card.includes(numAleatorio)){
            i--
        }else{
            card.push(numAleatorio);
        }
    }
};

function showCard() {
    for (i=0; i < card.length; i++) {
        console.log(`Tu carton es ${card}`)  
    }
};

function randomNumber() {
        ball = Math.floor(Math.random() * 20) + 1;
        alert(`La bola sorteada es ${ball}`);
};

function match(){
    for(let i=0; i<card.length;i++){
        if(card[i]=== ball){
            card[i] = "X"
        } 
    }
};

function bingo() {
    createCard();
    let continueGame = true;
    while(continueGame) {
    showCard();
    let seguir = confirm("Desea seguir?");
    if(seguir) {
        randomNumber();
        match();
        let check = card.every(numbers=> numbers === "X");
        if(check) {
            alert("Has ganado!!");
            showCard();
            continueGame = false
            let seguir2 = confirm("Quieres jugar otra vez?");
            if(seguir2) {
                card = [];
                bingo();
            } else if(!seguir2) {
                alert("Adios!!!");
            }
        }
        } else if(!seguir) {
            continueGame = false;
            alert("Adios!!!");
        }
    }
};
userName();
if(user) {
    bingo();
} else {
    alert("Hasta pronto!")
}