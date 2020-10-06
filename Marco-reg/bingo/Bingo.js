

let newNum;
var board =[[],[],[]];
let turnCount=[];
var existingNumbers=[];
var existingBalls=[];
const NUM_LINES = 3;
const NUM_NUMBERS = 5;
let line=false;
bingo();
        
function bingo(){
    existingNumbers=[];
    existingBalls=[];
    line=false;
    let name=null;
         name=window.prompt('Por favor introduzca un nombre para empezar a jugar la Partida');
        
        if(name==''){
            console.log('Por favor Introduzca un nombre para iniciar.');
            
            bingo();

        }else if(name==null){
            console.log('Hasta otra');

        }else {
            console.log('Bienvenido '+ name+' ahora dara comienzo la partida de bingo');
            menuCarton();
        }
}
function menuCarton(){
    let options=window.prompt('Seleccione entre las las dos opciones. \n 1.Obtener cartón \n 2. Salir');
    if(existingNumbers.length>=100){
        console.log('Se han acabado las bolas');
        bingo();
    }
    else if(options==1){
    
        fillBoard();
        printBoard(board);
        let isBingo = false;
        for(let i=100;i>=0;i--){
            
            let generateNewBall=window.prompt('Desea sacar otra bola: \n 1. Yes \n 2. No')
            if(generateNewBall==1){
          
                getNewBall();
                if(!line){
                    checkForLine();
                }
                isBingo = checkForBingo();
                if(isBingo){
                    console.log('Bingo');  
                }
                
                printBoard(board);
        
            }
            if(isBingo || generateNewBall == 2)
            {
                if(isBingo){
                    console.log('Bingo');
                }
                console.log('Finaliza la partida,volvemos al menu principal');

                break;
            }
        }
        bingo();
        
        
    }else if(options==2||options==null){
        console.log('Hasta pronto');
        bingo();
    }else{
        console.log('Debes seleccionar una de las opciones, por favor');
        menuCarton();
    }
}

function generateRandomNumber() {
    
    const newNumber= Math.floor((Math.random() * 100) + 1);
    
    if(existingNumbers.includes(newNumber)){
        
        return generateRandomNumber();
    }
    else{
        existingNumbers.push(newNumber);
        return newNumber;
    }
    
   
}

 function fillBoard(){
     
    for(let i=0;i<NUM_LINES;i++){
        for(let k=0;k<NUM_NUMBERS;k++){
            let number = generateRandomNumber();
            board[i][k] = number;
        }
    }
 }
 function printBoard(board){
    for(let i=0;i<board.length;i++){
        printLine(board[i]);
    }

}
function printLine(boardLine){
    console.log('|'+boardLine.join('|')+'|');
}
function generateRandomBall() {
    
    const newNumber= Math.floor((Math.random() * 100) + 1);
    
    if(existingBalls.includes(newNumber)){
        
        return generateRandomBall();
    }
    else{
        existingBalls.push(newNumber);
        return newNumber;
    }
    
   
}




function getNewBall(){
    var newBall= generateRandomBall();
    console.log('Esta es la nueva bola:'+newBall);
    if(existingNumbers.includes(newBall)){
      for(let i=0;i<NUM_LINES;i++){
          for(let k=0;k<NUM_NUMBERS;k++){
              if(board[i][k]==newBall)
                  board[i][k] ='X';
                  
          }
      }
        
    }
        
}
function checkForLine(){
    let count1X=0;
    let count2X=0;
    let count3X=0;
    for(let i=0;i<NUM_NUMBERS;i++){
        if(board[0][i]=='X'){
            count1X+=1;
        }
    }
    for(let i=0;i<NUM_NUMBERS;i++){
        if(board[1][i]=='X'){
            count2X+=1;
        }
    }
    for(let i=0;i<NUM_NUMBERS;i++){
        if(board[2][i]=='X'){
            count3X+=1;
        }
    }
    if(count1X==5||count2X==5||count3X==5){
        console.log('LINEA');
        line=true;
    }

}
function checkForBingo(){
    countX=0;
    for(let i=0;i<NUM_LINES;i++){
        for(let k=0;k<NUM_NUMBERS;k++){
            if(board[i][k]=='X'){
                countX+=1;
            }
                
        }
    }
    if(countX==15){

        return true;
    }
    return false;

}