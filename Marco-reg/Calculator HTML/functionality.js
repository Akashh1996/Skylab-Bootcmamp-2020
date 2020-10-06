const numbers=document.querySelectorAll(".number");
const display=document.querySelector(".display");

let previousNumber="";
let currentNum="";
let currentOp="";



function numberWithCommas(x) {
    var parts = x.toString().split(".");
    //jeroglífico pero basicamente me separa el display en grupos de tres (expresión regular).
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return parts.join(".");
}

function clicks(e){
    
    currentNum +=  e.target.innerHTML
    display.innerHTML = numberWithCommas(currentNum);
     
}

function operators(e){
    previousNumber = currentNum
    currentNum = ""
    display.innerHTML = e.target.innerHTML
    currentOp = e.target.innerHTML   

}
function dot(e){
    currentNum+= "."
    display.innerHTML = numberWithCommas(currentNum);

}
function allClear(e){
    currentNum = "",previousNumber = "",currentOp = "", display.innerHTML = ""

}
function deleteOne(e){
    
    currentNum = display.innerHTML
    display.innerHTML = numberWithCommas(currentNum.substring(0,currentNum.length-1).replaceAll(',',''));
    //alert(currentNum.substring(0,currentNum.length-1).replace(',',''))
    currentNum=currentNum.substring(0,currentNum.length-1).replaceAll(',','')

}
function equal(e){
    let aft = Number(previousNumber)
    let frw = Number(currentNum)
    if(currentOp === "+"){
        display.innerHTML = numberWithCommas(Math.round((aft + frw)*100000)/100000)
        currentNum= aft + frw;
    }else if(currentOp === "-"){
        display.innerHTML = numberWithCommas(Math.round((aft - frw)*100000)/100000)
        currentNum= aft - frw;
    }else if(currentOp === "÷"){
        display.innerHTML = numberWithCommas(Math.round((aft / frw)*100000)/100000)
        currentNum= aft / frw;
    }else if(currentOp === "x"){
        display.innerHTML = numberWithCommas(Math.round((aft * frw)*100000)/100000)
        currentNum= aft * frw;
    }

}

for (let i = 0; i <= 9 ; i++) {
    numbers[i].addEventListener("click",clicks)
}
for (let i = 0; i <= 3; i++) {
    document.querySelectorAll(".op")[i].addEventListener("click",operators)
}

document.querySelector(".equal").addEventListener("click",equal);
document.querySelector(".dot").addEventListener("click",dot);
document.querySelector(".ac").addEventListener("click",allClear);
document.querySelector(".return").addEventListener("click",deleteOne);
       









