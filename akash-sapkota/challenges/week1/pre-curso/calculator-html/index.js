const numbers = document.querySelectorAll(".numbers")
const display = document.querySelector(".display")
let prevNum = ""
currentNum = ""
let currentOperation = ""

for (let index = 9; index >= 0 ; index--) {
    numbers[index].addEventListener("click",function (e){
       currentNum +=  e.target.innerHTML
       display.innerHTML = currentNum
    })
}
 
for (let index = 3; index >= 0; index--) {
    document.querySelectorAll(".operations")[index].addEventListener("click",function(e){
        prevNum = currentNum
        currentNum = ""
        display.innerHTML = e.target.innerHTML
        currentOperation = e.target.innerHTML        
    })
}

document.querySelector(".result").addEventListener("click",function (){
    let pre = Number(prevNum), cur = Number(currentNum)
    if(currentOperation === "+"){
        display.innerHTML = pre + cur
    }else if(currentOperation === "-"){
        display.innerHTML = pre - cur
    }else if(currentOperation === "/"){
        display.innerHTML = pre / cur
    }else if(currentOperation === "*"){
        display.innerHTML = pre + cur
    }
})

document.querySelector(".dot").addEventListener("click",()=>{ currentNum+= "."
    display.innerHTML = currentNum
})

document.querySelector(".reset").addEventListener("click",() => {
    currentNum = "",prevNum = "",currentOperation = "", display.innerHTML = 0
})