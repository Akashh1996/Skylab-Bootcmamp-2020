const GoLState = 0;

var gameOfLife = Object.create(null);

gameOfLife.board = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

gameOfLife.boardSetting = gameOfLife.board.map(function(subarray){
    return subarray.map(function (item) { return item + 1});
})

gameOfLife.printBoard = function() {
    var myTable = document.getElementById("mytable");
    if (myTable) myTable.remove();
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '70px';
    tbl.setAttribute('border', '1');
    tbl.setAttribute("id", "mytable");
    var tbdy = document.createElement('tbody');
    gameOfLife.boardSetting.forEach((line) => {
        var row = document.createElement('tr');
        line.forEach((item)=>{            
            var textNum = item;
            var cell = document.createElement('td')
            var cellText = document.createTextNode(textNum);
            cell.appendChild(cellText)
            row.appendChild(cell)
            
        })
        tbdy.appendChild(row);
    })
    tbl.appendChild(tbdy);
    body.appendChild(tbl) 
    tbl.setAttribute("border", "1");
}

gameOfLife.printBoard();



