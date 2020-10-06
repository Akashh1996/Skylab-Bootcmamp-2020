let bingoCard = [];
let line;
let numRandom;
let allNum;
let discountNum = [];
let turnCount;
let points;
let name;
let ranking = [];

pushName()
function pushName(){
line = 0;
turnCount = 0;
points = 100;
name = prompt("Escriba su nombre");
if (name === undefined || name === "" || name === null || !isNaN(name)){
    alert ("Introduce un nombre");
    pushName();
}else {
    alert ("Bienvenido/a "+name);
    alert ("Reglas:\n Empiezas con 100 puntos y pierdes 1 punto por turno.\n Completa el juego lo antes posible. Suerte!");
    generateBingo();}
}

function generateBingo(){
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
let card = prompt("Te gusta el cartón generado? Yes/No");
if (card === "Yes" || card === "yes" || card === "YES"){
    nextTurn();
} else {
    firstTurn();
    }
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
        nextTurn();
    }
let d = allNum.indexOf(numRandom);
discountNum = allNum.splice(d, 1);
turnCount += 1;
points -= 1;
singLine();
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

function singBingo(){
    if (line === 1 && bingoCard[0].every(elem => elem === "X") && bingoCard[1].every(elem => elem === "X") && bingoCard[2].every(elem => elem === "X")){
        line += 1;
        alert("BINGOOO!!!");
        alert("Has tardado "+turnCount+" turnos en hacer bingo! "+points+" puntos conseguidos!");
        rankingPlayers();
    } else {
        askPlayer();
    }
}

function askPlayer(){
    let ask = true;
    console.log("Tu carton es:\n"+bingoCard[0]+"\n"+bingoCard[1]+"\n"+bingoCard[2]);
    ask = confirm("Desea seguir jugando?");
    if (ask === true){
        nextTurn();
    } else {
        exit();
    } 
}

function rankingPlayers(){
let rank = {n: String, p: Number};
rank.n = name;
rank.p = points;
ranking.push(rank);
ranking.sort(function(a,b){
    if (a.p < b.p){
        return 1;
    }else if (a.p > b.p){
        return -1;
    } return 0;
});
console.log("Este es el ranking actual:\n");
    for (a=0; a<ranking.length; a++){
    console.log(`Player: ${ranking[a].n} Points: ${ranking[a].p}\n`);
    }
anotherGame();
}

function anotherGame(){
    let another = true;
    another = confirm("Quiere jugar otra partida?");
    if (another === true){
        pushName();
    } else {
        exit();
    }
}
function exit(){
    console.log("Gracias por jugar!");
}
