function ShowDate() {
    document.getElementById("demo").innerHTML = Date();
}

function sayHi() {
    const nombre = prompt("Introduzca su nombre: ");
    if(nombre === " "){
        sayHi();
    }else{
        document.getElementById("saludo").innerHTML = `Hello, + $(nombre)`;
    }
}

async function loadData(){
    const response = await fetch('heroes.txt');
    const text = await response.text();
        document.getElementById("saludo").innerHTML = text;

}