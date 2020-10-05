let bingoCard = [];
let line;
let numRandom;
let allNum;
let discountNum = [];
let turnCount = 0;

pushName()
function pushName(){
let name = prompt("Escriba su nombre");
if (name === undefined || name === "" || name === null || !isNaN(name)){
    alert ("Introduce un nombre");
    pushName();
}else {
    alert ("Bienvenido/a "+name);
    generateBingo();
}
}

function generateBingo(){
    line = 0;
    allNum = [];
    for (g=1; g<100; g++){
        allNum.push(g);
    }
firstTurn();
}

function firstTurn(){
let firstLine= [];
for(f=0; f<5; f++){
    firstLine.push(Math.floor((Math.random()*99)+1));
}
let secondLine = [];
for(s=0; s<5; s++){
        secondLine.push(Math.floor((Math.random()*99)+1));
}
let thirdLine = [];
for(t=0; t<5; t++){
    thirdLine.push(Math.floor((Math.random()*99)+1));
    }
bingoCard[0] = firstLine;
bingoCard[1] = secondLine;
bingoCard[2] = thirdLine;
console.log("Tu carton es:\n"+bingoCard[0]+"\n"+bingoCard[1]+"\n"+bingoCard[2]);
nextTurn()
}

function nextTurn(){
    numRandom = (Math.floor((Math.random()*99)+1));
    if (allNum.includes(numRandom)){
        alert ("Ha salido el númer: "+numRandom);
        console.log(numRandom);
        for (x=0; x<bingoCard.length; x++){
            for (y=0; y<bingoCard[x].length; y++){
                if (numRandom === bingoCard[x][y]){
                bingoCard[x][y] = "X";
                alert("Tienes el "+numRandom+"!!");
                }       
            }
        }
    } else {
        nextTurn();}
let d = allNum.indexOf(numRandom);
discountNum = allNum.splice(d, 1);
turnCount += 1;
singLine()
}

function singLine(){
        if (line === 0 && bingoCard[0].every(elem => elem === "X")){
            alert("Línea!!!");
            line = 1;
            singBingo();
        } else if (line === 0 && bingoCard[1].every(elem => elem === "X")){
            alert("Línea!!!");
            line = 1;
            singBingo();
        } else if (line === 0 && bingoCard[2].every(elem => elem === "X")){
            alert("Línea!!!");
            line = 1;
            singBingo();
        }else {
            singBingo();
        }
}

function askPlayer(){
    console.log("Tu carton es:\n"+bingoCard[0]+"\n"+bingoCard[1]+"\n"+bingoCard[2]);
    let ask = confirm("Desea seguir jugando?")
    if (ask === true){
        nextTurn();
    } else {
        alert ("Gracias por jugar");
    } 
}
function singBingo(){
    if (bingoCard[0].every(elem => elem === "X") && bingoCard[1].every(elem => elem === "X") && bingoCard[2].every(elem => elem === "X")){
        alert("BINGOOO!!!");
        alert("Has tardado "+turnCount+" turnos en hacer bingo!")
        anotherGame();
    } else {
        askPlayer();
    }
}
function anotherGame(){
    let another = true;
    another = confirm("Quiere jugar otra partida?");
    if (another === true){
        generateBingo();
    } else {
        console.log("Hasta pronto");
    }
}








