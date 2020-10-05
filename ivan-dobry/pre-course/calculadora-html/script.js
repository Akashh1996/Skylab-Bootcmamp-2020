const actualDisplay = document.getElementById('display');
actualDisplay.innerHTML = '0';
let firstOp = '';
let secondOp='';
let operator;

const keys = document.querySelector('.calculator');
keys.addEventListener ('click', (event) => {

    if (!event.target.matches ('button')) {

        return;
    }

    if (event.target.className === 'num') {
        addNum (event.target.value);
        return;
    }

    if (event.target.className === 'operator') {
        takeOperator(event.target.value);
        return;
    }
    
    if (event.target.className === 'equal') {
        calculations();
        updateDisplay();
        return;
    }

    if (event.target.className === 'all-clear') {
        allClear();
        return;
    }
}) 

function addNum (num) {
    if (num ==='.' && firstOp.includes('.')) {
        return;
    }
    firstOp += num;
    updateDisplay()
}

function updateDisplay () {
    actualDisplay.innerHTML = firstOp;
}

function takeOperator (op) {
    if (secondOp!== '') {
        calculations();
    } 
    secondOp = firstOp;
    firstOp = '';
    operator = op;
}

function calculations () {
    let first = parseFloat(firstOp);
    let second = parseFloat(secondOp);
    let result;

    if ( isNaN(first) || isNaN(second)) {
        return;
    }

    if ( operator === '+') {
        result = second + first;
    } else if (operator === '-') {
        result = second - first; 
    } else if ( operator === '*') {
        result = second * first; 
    } else if ( operator === '/') {
        result = second / first;
    }

    firstOp = result.toString();
    actualDisplay.innerHTML = result;
    secondOp = '';
}

function allClear () {
    actualDisplay.innerHTML = '0';
    firstOp = '';
    secondOp='';
    operator;
}