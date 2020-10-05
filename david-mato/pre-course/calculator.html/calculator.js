let active;
let stop;
let keyboard;
let result;
let parenthesis;
let parenthCount = 0;

let buttons = document.getElementsByClassName('button');
let input = document.getElementById('main-input');
let uppInp = document.getElementById('upper-input');

const whiteSpace = [buttons['addi'].innerHTML, buttons['subt'].innerHTML, buttons['mult'].innerHTML, buttons['div'].innerHTML]
const noDisplay = [buttons['arrow'], buttons['AC'], buttons['equal']];

const display = () => {
    uppInp.innerHTML = '';
    if (keyboard) {
        if (input.innerHTML === '0' || input.innerHTML === 'Infinity' || input.innerHTML === '-Infinity' || input.innerHTML === 'Error') {
            if (!whiteSpace.includes(event.key)) {
                if (event.key !== buttons['parenth2'].innerHTML) {
                    input.innerHTML = event.key;
                } 
            } else {
                if (input.innerHTML === 'Error') {
                    input.innerHTML = `0 ${event.key} `;
                } else {
                    input.innerHTML += ` ${event.key} `;
                }
            }
            if (event.key === '(') {
                parenthCount += 1; 
            } 
        } else {
            if (whiteSpace.includes(event.key)) {
                if (event.key === buttons['subt'] && (input.innerHTML[input.innerHTML.length - 1] === ' ' || input.innerHTML[input.innerHTML.length - 1] === '(')) {
                    input.innerHTML += '-';
                } else if (input.innerHTML[input.innerHTML.length - 1] !== ' ' && input.innerHTML[input.innerHTML.length - 1] !== '-' && input.innerHTML[input.innerHTML.length - 1] !== '(' && input.innerHTML !== '.' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== ' .' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '(.' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '-.') {
                    input.innerHTML += ` ${event.key} `;
                } else if (input.innerHTML[input.innerHTML.length - 1] === ' ') {
                    input.innerHTML = input.innerHTML.slice(0, -3) + ` ${event.key} `;
                }
            } else {
                if (event.key === buttons['point'].innerHTML) {
                    if (input.innerHTML[input.innerHTML.length - 1] !== ')') {
                        var lastSpace = input.innerHTML.lastIndexOf(' ');
                        var lastParenth = input.innerHTML.lastIndexOf('(');
                        if (lastParenth > lastSpace) {
                            if (!input.innerHTML.slice(lastParenth + 1, input.innerHTML.length).includes('.')) {
                                input.innerHTML += event.key;
                            }
                        } else if (lastParenth < lastSpace) {
                            if (!input.innerHTML.slice(lastSpace + 1, input.innerHTML.length).includes('.')) {
                                input.innerHTML += event.key;
                            }
                        } else if (!input.innerHTML.includes('.')) {
                            input.innerHTML += event.key;
                        }
                    }
                } else if (event.key === buttons['parenth1'].innerHTML) {
                    if (input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== ' .' && input.innerHTML !== '.' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '-.') {
                        input.innerHTML += event.key;
                        parenthCount += 1;
                    }
                } else if (event.key === buttons['parenth2'].innerHTML) {
                    if (input.innerHTML[input.innerHTML.length - 1] !== '(' && input.innerHTML[input.innerHTML.length - 1] !== ' ' && parenthCount > 0 && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== ' .' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '(.' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '-.') {
                        input.innerHTML += event.key;
                        parenthCount -= 1;
                    }
                } else if (input.innerHTML[input.innerHTML.length - 1] !== ')') {
                    input.innerHTML += event.key;
                }
            }
        }
    } else {
        if (input.innerHTML === '0' || input.innerHTML === 'Infinity' || input.innerHTML === '-Infinity' || input.innerHTML === 'Error') {
            if (whiteSpace.includes(event.target.innerHTML)) {
                if (event.target === buttons['subt']) {
                    if (input.innerHTML === 'Infinity' || input.innerHTML === '-Infinity') {
                        input.innerHTML += ` ${event.target.innerHTML} `;
                    } else {
                        input.innerHTML = '-';
                    }
                } else {
                    if (input.innerHTML === 'Error') {
                        input.innerHTML = `0 ${event.target.innerHTML} `;
                } else {
                        input.innerHTML += ` ${event.target.innerHTML} `;
                    }
                }
            } else if (event.target !== buttons['parenth2']) {
                input.innerHTML = event.target.innerHTML;
                if (event.target.innerHTML === '(') {
                    parenthCount += 1; 
                }
            }
        } else {
            if (whiteSpace.includes(event.target.innerHTML)) {
                if (event.target === buttons['subt'] && (input.innerHTML[input.innerHTML.length - 1] === ' ' || input.innerHTML[input.innerHTML.length - 1] === '(')) {
                    input.innerHTML += '-';
                } else if (input.innerHTML[input.innerHTML.length - 1] !== ' ' && input.innerHTML[input.innerHTML.length - 1] !== '-' && input.innerHTML[input.innerHTML.length - 1] !== '(' && input.innerHTML !== '.' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== ' .' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '(.' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '-.') {
                    input.innerHTML += ` ${event.target.innerHTML} `;
                } else if (input.innerHTML[input.innerHTML.length - 1] === ' ') {
                    input.innerHTML = input.innerHTML.slice(0, -3) + ` ${event.target.innerHTML} `;
                }
            } else {
                if (event.target === buttons['point']) {
                    if (input.innerHTML[input.innerHTML.length - 1] !== ')') {
                        var lastSpace = input.innerHTML.lastIndexOf(' ');
                        var lastParenth = input.innerHTML.lastIndexOf('(');
                        if (lastParenth > lastSpace) {
                            if (!input.innerHTML.slice(lastParenth + 1, input.innerHTML.length).includes('.')) {
                                input.innerHTML += event.target.innerHTML;
                            }
                        } else if (lastParenth < lastSpace) {
                            if (!input.innerHTML.slice(lastSpace + 1, input.innerHTML.length).includes('.')) {
                                input.innerHTML += event.target.innerHTML;
                            }
                        } else if (!input.innerHTML.includes('.')) {
                            input.innerHTML += event.target.innerHTML;
                        }
                    }
                } else if (event.target === buttons['parenth1']) {
                    if (input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== ' .' && input.innerHTML !== '.' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '-.') {
                    input.innerHTML += event.target.innerHTML;
                    parenthCount += 1;
                    }
                } else if (event.target === buttons['parenth2']) {
                    if (input.innerHTML[input.innerHTML.length - 1] !== '(' && input.innerHTML[input.innerHTML.length - 1] !== ' ' && parenthCount > 0 && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== ' .' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '(.' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '-.') {
                        input.innerHTML += event.target.innerHTML;
                        parenthCount -= 1;
                    }
                } else if (input.innerHTML[input.innerHTML.length - 1] !== ')') {
                    input.innerHTML += event.target.innerHTML;
                }
            }
        }
    }
}

const deleteConditions = () => {
    if (input.innerHTML[input.innerHTML.length - 1] === '(') {
        parenthCount -= 1;
    } else if (input.innerHTML[input.innerHTML.length - 1] === ')') {
        parenthCount += 1;
    }
    if (input.innerHTML !== '0') {
        if (input.innerHTML === 'Infinity' || input.innerHTML === '-Infinity' || input.innerHTML === 'Error') {
            input.innerHTML = '0';
        } else {
            input.innerHTML[input.innerHTML.length - 1] === ' ' ? input.innerHTML = input.innerHTML.slice(0, -3) : input.innerHTML = input.innerHTML.slice(0, -1);
        }
    }
    if (input.innerHTML.length < 1) {
        input.innerHTML = '0';
    }
}

const deleteMore = () => {
    if (active) {
        return;
    } else {
        active = true;
        var intervalId = setInterval(() => {
            if (stop) {
                active = false;
                keyboard ? document.removeEventListener('keyup', e => {if (e.key === "Backspace") {stop = true}}) : document.removeEventListener('mouseup', () => stop = true);
                clearInterval(intervalId);
            } else {
                deleteConditions(); 
                }
            }, 100);
    }
}

const deleteOne = () => {
    uppInp.innerHTML = '';
    stop = false;
    if (!keyboard) {
        window.addEventListener('mouseup', () => stop = true);
    }
    deleteConditions();
    var timeoutId = setTimeout(() => stop ? clearTimeout(timeoutId) : deleteMore(), 600);
}

const showHistory = () => {
    if (document.getElementById('history').style.visibility === "visible") {
        document.getElementById('history').style.visibility = "hidden";
        document.getElementById('history').style.width = "302px";
        document.getElementById('history').style.height = "266px";
    } else {
        document.getElementById('history').style.visibility = "visible";
    }
}

const displayBack = () => {
    uppInp.innerHTML = '';
    input.innerHTML = event.target.innerHTML;
    showHistory();
}

const results = () => {
    if (parenthCount%2 === 0 && input.innerHTML[input.innerHTML.length - 1] !== ' ' && (input.innerHTML.includes(' ') || input.innerHTML.includes('(')) && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== ' .' && input.innerHTML.slice(input.innerHTML.length - 2, input.innerHTML.length) !== '-.' && input.innerHTML[input.innerHTML.length - 1] !== '-') {
        input.style.bottom = "-40px"
        uppInp.style.top = "37px";
        uppInp.style.right = "0";
        uppInp.style.fontSize = "40px";
        uppInp.style.color = "black";
        uppInp.style.maxWidth = "none";
        uppInp.innerHTML = input.innerHTML + ' = ';
        var inputBott = -40;
        var uppTop = 37;
        var uppRight = 0;
        var uppSize = 40;
        var intervalId = setInterval(() => {
            if (input.style.bottom === "5px") {
                uppInp.style.color = "rgb(102, 88, 86)";
                clearInterval(intervalId);
            } else {
                if (uppInp.style.top === "30.18px") {
                    uppInp.style.maxWidth = "91.5%";
                }      
                inputBott += 0.45;
                uppTop -= 0.22;
                uppRight += 0.02;
                uppSize -= 0.2;
                input.style.bottom = inputBott + "px";
                uppInp.style.top = uppTop + "px";
                uppInp.style.right = uppRight + "px";
                uppInp.style.fontSize = uppSize + "px";
            }
        }, 1)

        const calculate = () => {
            const arrayOfCalc = inputCopy.split(' ');
            const originalLength = arrayOfCalc.length;
            while (arrayOfCalc.length > 1) {    
                let findSymbol = arrayOfCalc.find(element => element === 'x' || element === '÷');
                findSymbol ? findSymbol: findSymbol = arrayOfCalc.find(element => element === '+' || element === '–');
                var symbolIndex = arrayOfCalc.indexOf(findSymbol);
                
                switch(findSymbol) {
                    case '+':
                        result = Number(arrayOfCalc[symbolIndex - 1]) + Number(arrayOfCalc[symbolIndex + 1]);
                        arrayOfCalc.splice(symbolIndex - 1, 3, result);
                        break;
                    case '–':
                        result = Number(arrayOfCalc[symbolIndex - 1]) - Number(arrayOfCalc[symbolIndex + 1]);
                        arrayOfCalc.splice(symbolIndex - 1, 3, result);
                        break;
                    case 'x':
                        result = Number(arrayOfCalc[symbolIndex - 1]) * Number(arrayOfCalc[symbolIndex + 1]);
                        arrayOfCalc.splice(symbolIndex - 1, 3, result);
                        break;
                    case '÷':
                        result = Number(arrayOfCalc[symbolIndex - 1]) / Number(arrayOfCalc[symbolIndex + 1]);
                        arrayOfCalc.splice(symbolIndex - 1, 3, result);
                        break;
                }
            }
            if (typeof result === 'undefined' || (originalLength === 1 && parenthesis)) {
                result = inputCopy;
            } else {
                result = +(Number(result).toFixed(10));
            }
            if (!parenthesis) {
                input.innerHTML = result === 0 ? result : isNaN(result) ? 'Error' : result ? result : input.innerHTML;
            }
        }

        var inputCopy = input.innerHTML;
        
        while(input.innerHTML.includes('(')) {
            var inputCopy = input.innerHTML;
            var chopped = '';
            var indexOfParenth1;
            var indexOfParenth2;
            do {
                chopped += inputCopy.slice(0, inputCopy.indexOf('(') + 1);
                indexOfParenth1 = chopped.lastIndexOf('(');
                inputCopy = inputCopy.slice(inputCopy.indexOf('(') + 1, inputCopy.length);
                indexOfParenth2 = chopped.length + inputCopy.indexOf(')');
            } while (inputCopy.includes('('))
            inputCopy = inputCopy.slice(0, inputCopy.indexOf(')'));
            parenthesis = true;
            calculate();
            parenthesis = false;
            if (input.innerHTML[indexOfParenth1 - 1] === " " || input.innerHTML[indexOfParenth1 - 1] === "(" || indexOfParenth1 === 0 || input.innerHTML[indexOfParenth1 - 1] === "-") {
                if (indexOfParenth1 === 0) {
                    input.innerHTML = result + input.innerHTML.slice(indexOfParenth2 + 1, input.innerHTML.length);
                } else {
                    input.innerHTML = input.innerHTML.slice(0, indexOfParenth1) + result + input.innerHTML.slice(indexOfParenth2 + 1, input.innerHTML.length);
                }
            } else if (!isNaN(Number(input.innerHTML[indexOfParenth1 - 1])) || input.innerHTML[indexOfParenth1 - 1] === ')' || input.innerHTML[indexOfParenth1 - 1] === '.') {
                input.innerHTML = input.innerHTML.slice(0, indexOfParenth1) + ' x ' + result + input.innerHTML.slice(indexOfParenth2 + 1, input.innerHTML.length);
            }
            inputCopy = input.innerHTML;
        } 
        calculate();
        let uppWithOutEqual = uppInp.innerHTML.slice(0, -3);
        var parentDiv = document.getElementById('past-operations');
        var div = document.createElement("div");
        div.setAttribute('class', 'operation');
        var firstPara = document.createElement("p");
        firstPara.setAttribute('class', 'operation-segment');
        var operationLeft = document.createTextNode(uppWithOutEqual);
        firstPara.appendChild(operationLeft);
        var secondPara = document.createElement("p");
        secondPara.setAttribute('class', 'equals');
        var equals = document.createTextNode(' = ');
        secondPara.appendChild(equals);
        var thirdPara = document.createElement("p");
        thirdPara.setAttribute('class', 'operation-segment');
        var operationRight = document.createTextNode(input.innerHTML);
        thirdPara.appendChild(operationRight);
        div.appendChild(firstPara);
        div.appendChild(secondPara);
        div.appendChild(thirdPara);
        parentDiv.appendChild(div);
        let returnButtons = document.getElementsByClassName('operation-segment');
        for (var i = 0; i < returnButtons.length; i++) {
            if (returnButtons[i].innerHTML === 'Error') {
                returnButtons[i].style.background = 'rgb(209, 199, 199)';
                returnButtons[i].style.color = 'rgba(0, 0, 0, 0.65)';
                returnButtons[i].style.border = '0.5px solid rgba(0, 0, 0, 0.2)';
                returnButtons[i].style.cursor = 'auto';
                continue;
            } else {
                returnButtons[i].addEventListener('click', displayBack); 
            }
        }
    }
}

for (var i = 0; i < buttons.length; i++) {
    if (!noDisplay.includes(buttons[i])) {
        buttons[i].addEventListener('mousedown', display) ; 
    }
}
buttons['arrow'].addEventListener('mousedown', deleteOne);
buttons['AC'].addEventListener('click', () => {input.innerHTML = '0'; uppInp.innerHTML = '';});
buttons['equal'].addEventListener('mousedown', results);
document.getElementById('return').addEventListener('click', showHistory);
document.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        results();
    } else if (e.code === "Slash" && !whiteSpace.includes(e.key)) {
        if (input.innerHTML[input.innerHTML.length - 1] === ' ' || input.innerHTML === '0' || input.innerHTML[input.innerHTML.length - 1] === '(') {
            keyboard = true;
            display();
            keyboard = false;
        }
    } else if (e.key === "Backspace") {
        document.addEventListener('keyup', e => {
            if (e.key === "Backspace") {
                stop = true;
            }
        })
        keyboard = true;
        deleteOne()
        keyboard = false;
    } else {
        for (var i = 0; i < buttons.length; i++) {
            if (!noDisplay.includes(buttons[i])) {
                if (buttons[i].innerHTML === ` ${e.key} ` ||  buttons[i].innerHTML === e.key) {
                    keyboard = true;
                    display();
                    keyboard = false;
                }
            }
        }
    }
})