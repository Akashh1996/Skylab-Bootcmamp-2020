 let cell = document.querySelectorAll(".cell")
let row = document.querySelectorAll(".row")
let colorTurn = document.querySelector("#colorTurn")
let rowIndex
let currentPlayer = 1
let colIndex
let gameOn = true
let reset = document.querySelector("#resetButton")
let player1Name = document.querySelector(".player1Name")
let player2Name = document.querySelector(".player2Name")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let winnerName = document.querySelector(".winnerName")

player1 = "akash"
player2 = "robert"


cell.forEach((everyCell)=> everyCell.style.backgroundColor = "white")
player1Name.innerHTML = player1
player2Name.innerHTML = player2
color1.style.backgroundColor = "red"



cell.forEach((allCells)=>{
  allCells.addEventListener("click",(e)=>{
    let rowDowntoTop = []
    rowIndex = e.target.id[4]
    colIndex = e.target.id[5]

      for (let index = 5; index > -1; index--) {
        if(row[index].children[colIndex].style.backgroundColor === "white" && gameOn === true){
          rowDowntoTop.push(row[index].children[colIndex])
          if(currentPlayer === 1){
            rowDowntoTop[0].style.backgroundColor = "red"
            if(verticalCheck() || horizontalCheck() ||diagonalCheck1() || diagonalCheck2()){
              color1.style.backgroundColor = "red"
              color2.style.backgroundColor = "white"
              winnerName.innerHTML = "you won " + player1

                gameOn = false
            }else if(draws()){
                colorTurn.innerHTML = "draawww"
                console.log("fukkcckkjnkjnjjnbnj");
            }else{
            color1.style.backgroundColor = "white"
            color2.style.backgroundColor = "yellow"
            return currentPlayer = 2
          
          }
  
          }else{
  
          rowDowntoTop[0].style.backgroundColor = "yellow"
  
          if(verticalCheck() || horizontalCheck() ||diagonalCheck1() || diagonalCheck2()){
            color2.style.backgroundColor = "yellow"
            color1.style.backgroundColor = "white"
            winnerName.innerHTML = "you won " + player2


              gameOn = false
          }else if(draws()){
            colorTurn.innerHTML = "draawww"
          }else{

            color2.style.backgroundColor = "white"
            color1.style.backgroundColor = "red"
          
       
          return currentPlayer = 1  
          }
          }
        }
        
      }
  
  
    }
    
  )
})

function borderAndRadius(cell,cell1,cell2,cell3){
  cell.style.borderRadius = "0",cell1.style.borderRadius = "0",cell2.style.borderRadius = "0",cell3.style.borderRadius = "0"
  cell.style.border = "3px solid black",cell1.style.border = "3px solid black",cell2.style.border = "3px solid black",cell3.style.border = "3px solid black"
}

function colorMatch(one, two,three,four){
  return (one === two && one === three && one === four && one !== "white")

} 

function horizontalCheck(){
  for (let myrow = 0; myrow < row.length; myrow++) {
    for (let col = 0; col < 4; col++) {
      if(colorMatch(row[myrow].children[col].style.backgroundColor, row[myrow].children[col+1].style.backgroundColor,row[myrow].children[col+2].style.backgroundColor,
         row[myrow].children[col+3].style.backgroundColor)){
              borderAndRadius(row[myrow].children[col], row[myrow].children[col+1],row[myrow].children[col+2],
                row[myrow].children[col+3])
           return true
        }
      
    }
    
  }

} 

function verticalCheck(){
  for (let col = 0; col < 7; col++) {
    for (let myrow = 0; myrow < 3; myrow++) {
      if(colorMatch(row[myrow].children[col].style.backgroundColor, row[myrow+1].children[col].style.backgroundColor,row[myrow+2].children[col].style.backgroundColor,
         row[myrow+3].children[col].style.backgroundColor)){
              borderAndRadius(row[myrow].children[col], row[myrow+1].children[col],row[myrow+2].children[col],
              row[myrow+3].children[col])
            return true
        }
      
    }
    
  }
}  

function diagonalCheck1(){
  for(let col = 0; col < 4; col++){
      for (let myrow = 0; myrow < 3; myrow++){
          if (colorMatch(row[myrow].children[col].style.backgroundColor, row[myrow+1].children[col+1].style.backgroundColor,
              row[myrow+2].children[col+2].style.backgroundColor,row[myrow+3].children[col+3].style.backgroundColor)){
                borderAndRadius(row[myrow].children[col], row[myrow+1].children[col+1],
                  row[myrow+2].children[col+2],row[myrow+3].children[col+3])
                  return true;
              }
          }
      }

}

function diagonalCheck2(){
  for(let col = 0; col < 4; col++){
      for (let myrow = 5; myrow > 2; myrow--){
          if (colorMatch(row[myrow].children[col].style.backgroundColor, row[myrow-1].children[col+1].style.backgroundColor,
              row[myrow-2].children[col+2].style.backgroundColor,row[myrow-3].children[col+3].style.backgroundColor)){
                borderAndRadius(row[myrow].children[col], row[myrow-1].children[col+1],
                  row[myrow-2].children[col+2],row[myrow-3].children[col+3])
                  return true;
          }
      }
  }
}

function draws(){
  let allCells = []
  for (let i = 0; i < cell.length; i++) {
    if(cell[i].style.backgroundColor !== "white"){
      allCells.push(i)
    }
    
  }
  if(allCells.length === 42){
    return true
  }
}

/* reset.addEventListener("click",()=> {
  cell.forEach((everyCell)=> {
    everyCell.style.backgroundColor = "white"
    everyCell.style.borderRadius = "50%"
    everyCell.style.border = "0"
  })

})
 
 */