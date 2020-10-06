const display = document.getElementById('screen')
let displayNumber = ''
let numberAccumulator = []
let currentOperation = ''

div.addEventListener('click', function () {
    currentOperation = "div"
    divNumberInDisplay()
    initiateDisplayNumber()
})

mult.addEventListener('click', function () {
    currentOperation = 'mult'
    multNumberInDisplay()
    initiateDisplayNumber()
})

sub.addEventListener('click', function () {
    currentOperation = 'sub'
    subNumberInDisplay()
    initiateDisplayNumber()
})

add.addEventListener('click', function () {
    currentOperation = 'add'
    sumNumberInDisplay()
    initiateDisplayNumber()
})

result.addEventListener('click', function () {
    switch (currentOperation) {
        case 'add':
            sumNumberInDisplay()
            break;
        case 'sub':
            subNumberInDisplay()
            break;
        case "div":
            divNumberInDisplay()
            break;
        case 'mult':
            multNumberInDisplay()
            break;
        default: 
            break
    }
    numberAccumulator = []
    initiateDisplayNumber()
})

comma.addEventListener('click', function () {
    if (displayNumber.includes('.')) return
    displayNumber += '.'
    showDisplayNumber()
})

clear.addEventListener('click', function () {
    initiateDisplayNumber()
    showDisplayNumber()
})

minus.addEventListener('click', function () {
    if (displayNumber.includes('-')) return
    displayNumber = Math.abs(displayNumber) * -1
    showDisplayNumber()
})

squareRoot.addEventListener('click', function () {
    displayNumber = Math.sqrt(displayNumber).toFixed(5)
    showDisplayNumber()
})

function initiateDisplayNumber() {
    displayNumber = ''
}

function showDisplayNumber() {
    display.innerHTML = displayNumber
}

function printNumber(number) {
    displayNumber += number
    showDisplayNumber()
}

for (let i = 0; i <= 9; i++) {
    const box = document.getElementById(`number${i}`)
    box.addEventListener('click', function (event) {
        printNumber(event.target.innerText)
    })
}

function divNumberInDisplay() {
    numberAccumulator.push(parseFloat(displayNumber))
    displayNumber = numberAccumulator.reduce((a, b) => a / b)
    showDisplayNumber()
}

function multNumberInDisplay() {
    numberAccumulator.push(parseFloat(displayNumber))
    displayNumber = numberAccumulator.reduce((a, b) => a * b)
    showDisplayNumber()
}

function subNumberInDisplay() {
    numberAccumulator.push(parseFloat(displayNumber))
    displayNumber = numberAccumulator.reduce((a, b) => a - b)
    showDisplayNumber()
}

function sumNumberInDisplay() {
    numberAccumulator.push(parseFloat(displayNumber))
    displayNumber = numberAccumulator.reduce((a, b) => a + b)
    showDisplayNumber()
}




