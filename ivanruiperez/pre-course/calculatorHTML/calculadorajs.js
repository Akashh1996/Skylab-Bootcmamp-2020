let num1;
let num2;
let operator = "";

function calculator(){
let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let n3 = document.getElementById("num3");
let n4 = document.getElementById("num4");
let n5 = document.getElementById("num5");
let n6 = document.getElementById("num6");
let n7 = document.getElementById("num7");
let n8 = document.getElementById("num8");
let n9 = document.getElementById("num9");
let n0 = document.getElementById("num0");
let div = document.getElementById("op/");
let mul = document.getElementById("opx");
let res = document.getElementById("op-");
let sum = document.getElementById("op+");
let equ = document.getElementById("equal");
let dot = document.getElementById("dot");
let del = document.getElementById("delete");
let bac = document.getElementById("back");

n1.onclick = function(){
    result.textContent = result.textContent + "1";
}
n2.onclick = function(){
    result.textContent = result.textContent + "2";
}
n3.onclick = function(){
    result.textContent = result.textContent + "3";
}
n4.onclick = function(){
    result.textContent = result.textContent + "4";
}
n5.onclick = function(){
    result.textContent = result.textContent + "5";
}
n6.onclick = function(){
    result.textContent = result.textContent + "6";
}
n7.onclick = function(){
    result.textContent = result.textContent + "7";
}
n8.onclick = function(){
    result.textContent = result.textContent + "8";
}
n9.onclick = function(){
    result.textContent = result.textContent + "9";
}
n0.onclick = function(){
    result.textContent = result.textContent + "0";
}
div.onclick = function(){
    num1 = result.textContent;
    operator = "/";
    clear();
}
mul.onclick = function(){
    num1 = result.textContent;
    operator = "*";
    clear();
}
res.onclick = function(){
    num1 = result.textContent;
    operator = "-";
    clear();
}
sum.onclick = function(){
    num1 = result.textContent;
    operator = "+";
    clear();
}
bac.onclick = function(){
    clear();
}
del.onclick = function (){
    reset();
}
dot.onclick = function(){
    result.textContent = result.textContent + ".";
}
equ.onclick = function(){
    num2 = result.textContent;
    equal();
}
}

function clear(){
    result.textContent = "";
}
function reset(){
    result.textContent = "";
    num1 = 0;
    num2 = 0;
    operator = "";
}
function equal(){
    let done = 0;
    switch(operator){
        case "+":
            done = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            done = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            done = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            done = parseFloat(num1) / parseFloat(num2);
            break;
        
    }
    reset();
    result.textContent = done;
}