let seed = [];
let rows = document.getElementById("grid-size").value;
let cols = rows * 2.9;
let translate = 240;
let opacity = 0;
let startButtonOpacity = 0;
let instructionsButtonOpacity = 0;
let instructionsOpacity = 0;
let initialSeedInterval;
let seedInterval;
let iterationSpeed = 400;

const resetMode = () => {
    if (document.getElementById('night-or-day-mode').checked) {
        document.getElementsByClassName('slider')[0].style.backgroundColor = "white";
        document.getElementsByClassName('slider')[0].style.setProperty('--switchbackground', 'url(imgs/night-mode.png) no-repeat 0 0')
        document.querySelector('body').style.background = 'linear-gradient(95deg, rgb(27, 27, 27), rgb(34, 33, 33))';
        document.getElementsByClassName('h1')[0].style.setProperty('--h1background', 'linear-gradient(65deg, rgb(37, 36, 35), rgba(77, 66, 59, 0.9))')
        document.getElementById('grid-container').style.background = ' rgb(87, 77, 77)'
        for (let i = 0; i < document.getElementsByClassName('cell').length; i++) {
            document.getElementsByClassName('cell')[i].style.backgroundColor = 'rgb(0, 0, 0)'
        }
    } else {
        for (let i = 0; i < document.getElementsByClassName('cell').length; i++) {
            document.getElementsByClassName('cell')[i].style.backgroundColor = 'rgb(253, 248, 248)'
        }
        document.getElementsByClassName('slider')[0].style.backgroundColor = "#ccc";
        document.getElementsByClassName('slider')[0].style.setProperty('--switchbackground', 'url(imgs/day-mode.png) no-repeat 0 0')
        document.querySelector('body').style.background = 'linear-gradient(95deg, rgb(219, 126, 126), rgb(206, 98, 98))';
        document.getElementsByClassName('h1')[0].style.setProperty('--h1background', 'linear-gradient(65deg,rgb(230, 162, 110),rgba(224, 115, 31, 0.9))')
        document.getElementById('grid-container').style.background = 'rgb(161, 149, 149)'
    }
}

const selectingLiveCells = () => {
    for (let i = 0; i < seed.length; i++) {
        for (let j = 0; j < seed[i].length; j++) {
            document.getElementById(`${[i]}-${[j]}`).addEventListener('click', event => {
                document.getElementById('grid-size').setAttribute('disabled', 'disabled')
                document.getElementById('grid-size').style.cursor = 'not-allowed'
                document.getElementById('night-or-day-mode').setAttribute('disabled', 'disabled')
                document.getElementsByClassName('slider')[0].style.cursor = 'not-allowed'
                let regexResult = event.target.id.match(/(\d+)-(\d+)/);
                seed[regexResult[1]][regexResult[2]] = 1;
                if (document.getElementById('night-or-day-mode').checked) {
                    event.target.style.background = 'rgb(253, 248, 248)';
                } else {
                    event.target.style.background = 'black';
                }
            })
        }
    }
}

const gridDisplay = (opacity = '1') => {
    seed = [];
    document.getElementById('grid-container').remove();
    let table = document.createElement('table');
    table.id = 'grid-container';
    document.getElementsByTagName('main')[0].appendChild(table)
    for (let i = 0; i <= rows; i++) {
        seed.push([])
        let tableRow = document.createElement('tr');
        for (let j = 0; j <= cols; j++) {
            seed[i].push(0)
            let cell = document.createElement('td');
            cell.className = 'cell';
            cell.id = `${[i]}-${[j]}`;
            tableRow.appendChild(cell);
        }
        table.appendChild(tableRow)
    }
    table.style.opacity = opacity;
    if (document.getElementById('night-or-day-mode').checked) {
        resetMode();
    }
    if (+opacity) {
        document.getElementById('grid-container').style.cursor = "pointer";
        selectingLiveCells()
    }
};

gridDisplay('0');

const gameOfLife = arr => {
    const gridCopy = arr.map(el => el.slice());
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const aliveOrDead = []
            const aliveCellsAround = () => {
                if (j) {
                    if (arr[i][j - 1]) {
                        aliveOrDead.push('alive')
                    }
                }
                if (i) {
                    if (j) {
                        if (arr[i - 1][j - 1]) {
                            aliveOrDead.push('alive')
                        }
                    }
                    if (arr[i - 1][j]) {
                        aliveOrDead.push('alive')
                    }
                    if (j !== arr[i].length - 1) {
                        if (arr[i - 1][j + 1]) {
                            aliveOrDead.push('alive')
                        }
                    }
                }
                if (j !== arr[i].length - 1) {
                    if (arr[i][j + 1]) {
                        aliveOrDead.push('alive')
                    }
                }
                if (i !== arr.length - 1) {
                    if (j !== arr[i].length - 1) {
                        if (arr[i + 1][j + 1]) {
                            aliveOrDead.push('alive')
                        }
                    }
                    if (arr[i + 1][j]) {
                        aliveOrDead.push('alive')
                    }
                    if (j) {
                        if (arr[i + 1][j - 1]) {
                            aliveOrDead.push('alive')
                        }
                    }
                }
            }
            if(arr[i][j]) {
                aliveCellsAround()
                if (aliveOrDead.length === 2 || aliveOrDead.length === 3) {
                    gridCopy[i][j] = 1;
                } else {
                    gridCopy[i][j] = 0;
                    if (document.getElementById('night-or-day-mode').checked) {
                        document.getElementById(`${[i]}-${[j]}`).style.background = 'black'
                    } else {
                        document.getElementById(`${[i]}-${[j]}`).style.background = 'rgb(253, 248, 248)'
                    }
                }
            } else {
                aliveCellsAround()
                if (aliveOrDead.length === 3) {
                    gridCopy[i][j] = 1;
                    if (document.getElementById('night-or-day-mode').checked) {
                        document.getElementById(`${[i]}-${[j]}`).style.background = 'rgb(253, 248, 248)'
                    } else {
                        document.getElementById(`${[i]}-${[j]}`).style.background = 'black'
                    }
                } else {
                    gridCopy[i][j] = 0;
                }
            }
        }
    }
    return gridCopy;
}

for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
        if (!i && (j === 1 || j % 7 === 1)) {
            document.getElementById(`${[i]}-${[j]}`).style.background = "black"
            document.getElementById(`${[i + 1]}-${[j + 1]}`).style.background = "black"
            document.getElementById(`${[i + 2]}-${[j - 1]}`).style.background = "black"
            document.getElementById(`${[i + 2]}-${[j]}`).style.background = "black"
            document.getElementById(`${[i + 2]}-${[j + 1]}`).style.background = "black"
            seed[i][j] = 1
            seed[i + 1][j + 1] = 1
            seed[i + 2][j - 1] = 1
            seed[i + 2][j] = 1
            seed[i + 2][j + 1] = 1
        }
        if (i === seed.length - 1 && j > 3 && j % 7 === 0 && j < 38) {
            document.getElementById(`${[i]}-${[j - 3]}`).style.background = "black"
            document.getElementById(`${[i - 1]}-${[j - 3]}`).style.background = "black"
            document.getElementById(`${[i - 1]}-${[j - 2]}`).style.background = "black"
            document.getElementById(`${[i]}-${[j - 2]}`).style.background = "black"
            seed[i][j - 3] = 1
            seed[i - 1][j - 3] = 1
            seed[i - 2][j - 2] = 1
            seed[i][j - 2] = 1
        }
    }
}

let titleTranslationInterval = setInterval(() => {
    if (translate === 100) {
        clearInterval(titleTranslationInterval);
    }
    document.getElementsByClassName('title-container')[0].style.transform = `translate(0, -${translate}%)`
    translate -= 2.5;
}, 23)

let gridAppearanceInterval = setInterval(() => {
    if (opacity.toFixed(2) === '1.00') {
        clearInterval(gridAppearanceInterval)
    }
    document.getElementById('grid-container').style.opacity = opacity;
    document.getElementById('grid-size').style.opacity = opacity;
    document.getElementsByClassName('switch')[0].style.opacity = opacity;
    opacity += 0.02
}, 23)

setTimeout(() => {
    let countingIntervalExecutions = 0
    initialSeedInterval = setInterval(() => {
        if (countingIntervalExecutions > 45) {
            startButtonOpacity += 0.1;
            document.getElementsByClassName('start-button')[0].style.visibility = 'visible';
            document.getElementsByClassName('start-button')[0].style.opacity = `${startButtonOpacity}`;
        }
        if (countingIntervalExecutions > 95) {
            instructionsButtonOpacity += 0.1;
            document.getElementsByClassName('instructions-button')[0].style.visibility = 'visible';
            document.getElementsByClassName('instructions-button')[0].style.opacity = `${instructionsButtonOpacity}`;
        }
        seed = gameOfLife(seed);
        countingIntervalExecutions += 1;
    }, 65)
}, 150)

document.getElementById('grid-size').addEventListener('click', () => {
    seed = [];
    rows = document.getElementById('grid-size').value;
    cols = (rows * 2.9).toFixed()
    gridDisplay()
})

document.getElementById('night-or-day-mode').addEventListener('click', resetMode);

const seedIntervalFn = () => {
    seedInterval = setInterval(() => {
        console.log(iterationSpeed)
        seed = gameOfLife(seed);
    }, iterationSpeed)
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        seedIntervalFn()
	} else if (e.key === '+') {
        clearInterval(seedInterval);
        if (iterationSpeed > 100) {
            iterationSpeed -= 100;
        } else if (iterationSpeed > 60) {
            iterationSpeed -= 40;
        }
        seedIntervalFn()
    } else if (e.key === '-') {
        clearInterval(seedInterval);
        if (iterationSpeed === 60) {
            iterationSpeed += 40;
        } else {
            iterationSpeed += 100;
        }
        seedIntervalFn()
    } else if (e.key === 'r') {
        clearInterval(seedInterval)
        iterationSpeed = 400;
        document.getElementById('grid-size').setAttribute('disabled', 'disabled')
        document.getElementById('grid-size').style.cursor = 'not-allowed'
        document.getElementById('night-or-day-mode').setAttribute('disabled', 'disabled')
        document.getElementsByClassName('slider')[0].style.cursor = 'not-allowed'
        for (let i = 0; i <= rows; i++) {
            for (let j = 0; j <= cols; j++) {
                let cellState = Math.floor(Math.random() * 2);
                seed[i][j] = cellState;
                if (document.getElementById('night-or-day-mode').checked) {
                    if (cellState) {
                        document.getElementById(`${[i]}-${[j]}`).style.background = "rgb(253, 248, 248)"
                    } else {
                        document.getElementById(`${[i]}-${[j]}`).style.background = "black";
                    }
                } else {if (cellState) {
                    document.getElementById(`${[i]}-${[j]}`).style.background = "black"
                } else {
                    document.getElementById(`${[i]}-${[j]}`).style.background = "rgb(253, 248, 248)";
                }}
            }
        }
    } else if (e.key === 'Backspace') {
        clearInterval(seedInterval)
        iterationSpeed = 400;
        document.getElementById('grid-size').removeAttribute('disabled');
        document.getElementById('grid-size').style.cursor = "grab";
        document.getElementById('night-or-day-mode').removeAttribute('disabled');
        document.getElementsByClassName('slider')[0].style.cursor = "pointer";
        gridDisplay()
    } else if (e.key === 's') {
        clearInterval(seedInterval)
    }
})

document.getElementsByClassName('instructions-button')[0].addEventListener('click', () => {
    if (instructionsOpacity) {
        let decreasingInstructionsOpacityInterval = setInterval(() => {
            if (instructionsOpacity.toFixed(2) === '0.00') {
                instructionsOpacity = 0;
                document.getElementsByClassName('instructions-list')[0].style.visibility = 'hidden';
                document.getElementsByClassName('instructions-list')[0].style.opacity = `${instructionsOpacity}`
                clearInterval(decreasingInstructionsOpacityInterval);
            } else {
                document.getElementsByClassName('instructions-list')[0].style.opacity = `${instructionsOpacity}`
                instructionsOpacity -= 0.1
            }
        }, 20);
    } else {
        document.getElementsByClassName('instructions-list')[0].style.visibility = 'visible';
        let increasingIntructionsOpacityInterval = setInterval(() => {
            if (instructionsOpacity.toFixed(2) === "1.00") {
                instructionsOpacity = 1;
                clearInterval(increasingIntructionsOpacityInterval);
            } else {
                document.getElementsByClassName('instructions-list')[0].style.opacity = `${instructionsOpacity}`
                instructionsOpacity += 0.1
            }
        }, 30);
    }
})

document.getElementsByClassName('start-button')[0].addEventListener('click', () => {
    clearInterval(initialSeedInterval);
    iterationSpeed = 400;
    document.getElementsByClassName('start-button')[0].style.visibility = "hidden";
    document.getElementsByClassName('instructions-button')[0].style.visibility = "hidden";
    document.getElementsByClassName('instructions-list')[0].style.visibility = "hidden";
    document.getElementById('grid-size').removeAttribute('disabled');
    document.getElementById('grid-size').style.cursor = "grab";
    document.getElementById('night-or-day-mode').removeAttribute('disabled');
    document.getElementsByClassName('slider')[0].style.cursor = "pointer";
    gridDisplay()
})
