var oneBtn = document.getElementById('one')
var twoBtn = document.getElementById('two')
var threeBtn = document.getElementById('three')
var fourBtn = document.getElementById('four')
var fiveBtn = document.getElementById('five')
var sixBtn = document.getElementById('six')
var sevenBtn = document.getElementById('seven')
var eightBtn = document.getElementById('eight')
var nineBtn = document.getElementById('nine')
var zeroBtn = document.getElementById('zero')

var dotBtn = document.getElementById('dot')
var clearBtn = document.getElementById('clear')
var reloadBtn = document.getElementById('reload')
var displayScreen = document.getElementById('display')

var displayVal = '0';
var displayResult = 0;
var operatorCount;

var state = {
    oldVal: 0,
    newval: 0,    
    op: '',
}

var calcNumBtns = document.querySelectorAll(".numbers");
var calcOperatorsBtns =  document.querySelectorAll(".operators");

var updateDisplayScreen = (clickthis) => {
    var btnText = clickthis.target.innerText;    
    operatorCount= 0;
    if(displayVal === '0'){
        displayVal = '';
    }    
    displayVal += btnText;
    displayScreen.innerText = displayVal;    
    state.newval = parseFloat(displayVal);    
    console.log({oldval : state.oldVal, newval: state.newval, op:state.op})
}

var performOperation = (clickthis) => {
    var btnOp = clickthis.target.innerText;
    displayVal = '0';
    operatorCount++;
    if (operatorCount < 2) {
        switch(state.op) {
            case '+':
            state.oldVal += state.newval
            break;
            case '-':
            state.oldVal -= state.newval
            break;
            case '/':
            state.oldVal /= state.newval     
            break;
            case '*':
            state.oldVal *= state.newval
            break;            
        }
        displayResult = state.oldVal
        displayScreen.innerText = displayResult
    }
    console.log(btnOp)    
    state.op = clickthis.target.getAttribute("operator");
    switch(btnOp) { //TODO: MAYBE MOVE OUT OF OPERATORS
        case '=':
            displayResult = state.oldVal
            displayScreen.innerText = displayResult
            break
    }
    console.log({oldval : state.oldVal, newval: state.newval, op:state.op})
}

calcNumBtns.forEach((button)=> {
    button.addEventListener('click', updateDisplayScreen, false)
});

calcOperatorsBtns.forEach((button)=> {
    button.addEventListener('click', performOperation, false)
});

clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayScreen.innerHTML = displayVal;
    state = {
        oldVal: 0,
        op: "",
        newval: 0,
    }
    console.log(state)
}

reloadBtn.onclick = () => {
    var displayValLength = displayVal.length;
    displayVal = displayVal.slice(0, displayValLength-1)
    
    if(displayVal === '')
    displayVal = 0;
    
    displayScreen.innerText = displayVal;
}

dotBtn.onclick = () => {
    if(!displayVal.includes('.'))
    displayVal =+ '.';
    
    displayScreen.innerText = displayVal;
}