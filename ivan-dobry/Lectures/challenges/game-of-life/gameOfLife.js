let startingArray = [];
let finalArray = [];
let arrGrid;
let interval; 

function life (array) {
    let neigbours = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++){
            neigbours = countNeigbours(i, j);
            console.log(neigbours)
           if (array[i][j] === 0 && neigbours === 3) {
                finalArray[i][j] = 1;
           } else if (array[i][j] === 1 && neigbours > 3) {
                finalArray[i][j] = 0;
           } else if (array[i][j] === 1 && neigbours < 2) {
                 finalArray[i][j] = 0;
           } else if (array[i][j] === 1 && neigbours === 2 || array[i][j] === 1 && neigbours === 3) {
                finalArray[i][j] = 1;
           } else {
                finalArray[i][j] = 0;
           }
        }
    }
    console.log(startingArray);
    console.log(finalArray);
    copyArray();
    updateGridArray ();
    displayGrid ();
    reInitializeFinal ();
}

function countNeigbours (i, j) {
    let neigbours = 0;
    if (i === 0 && j === 0) {
        if (startingArray [i][j +1] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j] === 1) {
            neigbours ++;
        }if (startingArray [i +1][j +1] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (i === 0 && j === startingArray.length -1) {
        if (startingArray [i][j -1] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j -1] === 1) {
            neigbours ++;
        }if (startingArray [i +1][j] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (i === 0) {
        if (startingArray [i][j -1] === 1) {
            neigbours ++;
        }if (startingArray [i][j +1] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j -1] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j +1] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (i === startingArray.length -1 && j === 0) {
        if (startingArray [i-1][j] === 1) {
            neigbours ++;
        }
        if (startingArray [i -1][j+1] === 1) {
            neigbours ++;
        }if (startingArray [i][j +1] === 1) {
            neigbours ++;
        }
        return neigbours;
    }

    if (i === startingArray.length -1 && j === startingArray.length -1) {
        if (startingArray [i][j-1] === 1) {
            neigbours ++;
        }
        if (startingArray [i -1][j-1] === 1) {
            neigbours ++;
        }if (startingArray [i-1][j] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (j === 0) {
        if (startingArray [i-1][j] === 1) {
            neigbours ++;
        }if (startingArray [i -1][j +1] === 1) {
            neigbours ++;
        }
        if (startingArray [i][j +1] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j +1] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (i === startingArray.length -1) {
        if (startingArray [i][j -1] === 1) {
            neigbours ++;
        }if (startingArray [i -1][j -1] === 1) {
            neigbours ++;
        }
        if (startingArray [i -1][j] === 1) {
            neigbours ++;
        }
        if (startingArray [i -1][j +1] === 1) {
            neigbours ++;
        }
        if (startingArray [i][j +1] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (j === startingArray.length -1) {
        if (startingArray [i -1][j] === 1) {
            neigbours ++;
        }if (startingArray [i -1][j -1] === 1) {
            neigbours ++;
        }
        if (startingArray [i][j-1] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j -1] === 1) {
            neigbours ++;
        }
        if (startingArray [i +1][j] === 1) {
            neigbours ++;
        }
        return neigbours;
    }


    if (startingArray [i -1][j -1] === 1) {
        neigbours ++;
    }
    if (startingArray [i -1][j] === 1) {
        neigbours ++;
    }
    if (startingArray [i -1][j +1] === 1) {
        neigbours ++;
    }
    if (startingArray [i][j -1] === 1) {
        neigbours ++;
    }
    if (startingArray [i][j +1] === 1) {
        neigbours ++;
    }
    if (startingArray [i +1][j -1] === 1) {
        neigbours ++;
    }
    if (startingArray [i +1][j] === 1) {
        neigbours ++;
    }
    if (startingArray [i +1][j +1] === 1) {
        neigbours ++;
    }
    return neigbours;
}

function reInitializeFinal () {
    for (let i= 0; i < finalArray.length; i++){
        for (let j = 0; j < finalArray[i].length; j++){
            finalArray[i][j] = 0;
        }
    }
}

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.value = 0;
  };
};

makeRows(40, 40)

function makeGrid (){
    let input = document.getElementById('input__box').value;
    $( ".grid-item" ).remove();
    makeRows(+input, +input);
    makeArrays(input);
}

function makeArrays (input) {
    let k = 0;
    let gridItems = document.getElementsByClassName('grid-item');
    arrGrid = jQuery.makeArray( gridItems );
    console.log(arrGrid);

    startingArray = [];
    for (let i=0;i<input;i++)
    {
    let data = [];
    for (var j=0;j<input;j++)
    {
        data.push(arrGrid[k].value);
    }
    startingArray.push(data);
    }
    
    for (let i=0;i<input;i++)
    {
    let data = [];
    for (var j=0;j<input;j++)
    {
        data.push(arrGrid[k].value);
    }
    finalArray.push(data);
    }
    console.log (finalArray)

}

//Event listener

const keys = document.querySelector('.grid-game');
keys.addEventListener('click', (event) => {

    if (event.target.className === 'grid-item' && event.target.style.backgroundColor === "black") {
        event.target.style.backgroundColor = "white";
        event.target.value = 0;
		return;
	}

	if (event.target.className === 'grid-item' ) {
        event.target.style.backgroundColor = "black";
        event.target.value = 1;
		return;
    }
});

function updateArray () {
    let k = 0;
    for (let i = 0; i < startingArray.length; i++ ) {
        for (let j = 0; j < startingArray[i].length; j++) {
            if (arrGrid[k].value === 1) {
                startingArray[i][j] = 1;
            }
            if (arrGrid[k].value === 0) {
                startingArray[i][j] = 0;
            }
            k++;
        }
    }
    life(startingArray);
    console.log(startingArray);
}

function copyArray () {
    for (let i = 0; i < startingArray.length; i++ ) {
        for (let j = 0; j < startingArray[i].length; j++) {
            startingArray[i][j] = finalArray[i][j];
        }
    }
}

function updateGridArray () {
    let k = 0;
    for (let i = 0; i < startingArray.length; i++ ) {
        for (let j = 0; j < startingArray[i].length; j++) {
            arrGrid[k].value = startingArray[i][j];
            k++;
        }
    }
}

function displayGrid () {
    for (let i = 0; i <arrGrid.length; i++) {
        if (arrGrid[i].value === 1) {
            arrGrid[i].style.backgroundColor = 'black';
        } else {
            arrGrid[i].style.backgroundColor = 'white';
        }
    }
}

function startInterval () { 
    interval = setInterval(function updateArray () {
        let k = 0;
        for (let i = 0; i < startingArray.length; i++ ) {
            for (let j = 0; j < startingArray[i].length; j++) {
                if (arrGrid[k].value === 1) {
                    startingArray[i][j] = 1;
                }
                if (arrGrid[k].value === 0) {
                    startingArray[i][j] = 0;
                }
                k++;
            }
        }
        life(startingArray);
        console.log(startingArray);
    }, 200)
}

function stopInterval() {
    clearInterval(interval);
  }

