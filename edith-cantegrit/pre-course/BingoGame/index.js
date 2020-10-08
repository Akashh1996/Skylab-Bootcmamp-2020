//Run in HTML index + Console

var bingoGame = Object.create(null);

bingoGame.sortedNumBall = [];
bingoGame.sortedNumBoard = [];
bingoGame.turn = 0;
bingoGame.ball = 0;
bingoGame.numLineMatched = 0;
bingoGame.firstLine = true;

bingoGame.board = [
    [{},{},{},{},{}],
    [{},{},{},{},{}],
    [{},{},{},{},{}]
];

bingoGame.boardSort = function(){  
    let tempNum = Math.floor((Math.random() * 100) + 1);
    if(bingoGame.sortedNumBoard.includes(tempNum) == false) {
        this.sortedNumBoard.push(tempNum);
        return tempNum
    }else {  
       return bingoGame.boardSort();
    }
};

bingoGame.boardSetting = bingoGame.board.map(function(subarray){
    return subarray.map(function() {
        return { 
            num: bingoGame.boardSort(), matched: false
        };
    })
})

bingoGame.printButton = function() {
    var body = document.getElementsByTagName('body')[0];
    var srtBtn = document.createElement('button');
    var txtBtn = document.createTextNode("Sort a number");
    srtBtn.setAttribute("onclick", "bingoGame.ballSort()");
    srtBtn.appendChild(txtBtn);
    body.appendChild(srtBtn);
}

bingoGame.printBoard = function() {
    var myTable = document.getElementById("mytable");
    if (myTable) myTable.remove();
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    tbl.setAttribute("id", "mytable");
    var tbdy = document.createElement('tbody');
    bingoGame.boardSetting.forEach((line) => {
        var row = document.createElement('tr');
        line.forEach((item)=>{            
            var textNum = item.num
            var cell = document.createElement('td')
            var cellText = document.createTextNode(textNum);
            cell.appendChild(cellText)
            row.appendChild(cell)
            
        })
        tbdy.appendChild(row);
    })
    tbl.appendChild(tbdy);
    body.appendChild(tbl) 
    tbl.setAttribute("border", "2");
}

bingoGame.ballSort = function() {
    let tempBall = Math.floor((Math.random() * 100) + 1);
    if(this.sortedNumBall.includes(tempBall) == true) {
        bingoGame.ballSort();
    }
    else if(this.sortedNumBall.includes(tempBall) == false) {
        var confirmation = confirm("Please click OK if you want to sort a number");
        if(confirmation) {
            this.ball = tempBall;
            this.sortedNumBall.push(this.ball);
            console.log("The number your sorted is " + this.ball);
            this.turn++
            bingoGame.match();
        }
        if(confirmation == false) {exitGame()}
    }
};


bingoGame.match = function() {
    let luck;
    this.boardSetting.forEach((square) => {
        square.forEach((data) => { 
            // console.log(data.num);
            if (data.num == this.ball){
                luck = true;
                console.log("It matched with one of your numbers!")
                data.matched = true;
                data.num = "X";
                bingoGame.printBoard();
                bingoGame.line();
            } 
        });
    });
    if (luck !== true) {console.log("No luck for that time!")};
};

bingoGame.line = function() {
    let isLineMAtched;
    this.boardSetting.forEach((line) => {
        isLineMAtched = line.every(function(item){
        return item.matched == true;
    });
        if(isLineMAtched == true){
            this.numLineMatched ++;
            line.forEach((item) => {item.matched = false})
        }  
    }); 

    if(this.numLineMatched === 1 && bingoGame.firstLine == true) {
        bingoGame.firstLine = false; 
        console.log("Well done! You got a line!")
        alert("Well done! You got a line!")
    }      
    if(this.numLineMatched === 3) {
        alert("BINGO!! You end the game in " + this.turn + " turns !");
        exitGame();
    }; 
};


function login() {
    var userName = prompt("Please enter your name");
    console.log("Hello " + userName + "! Here is your Bingo card! ");
    var newPerson = Object.create(bingoGame)
    newPerson.printButton()
    newPerson.printBoard()
    
};

function exitGame() {
    var exit = confirm("Do you want to play another one?")
    if(exit) {window.location.reload()} else {alert("Thank you for playing!")} 
}

login();
