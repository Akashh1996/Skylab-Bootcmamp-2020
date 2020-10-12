function showDate() {
    document.getElementById("demo").innerHTML = Date();
}

function sayHi(){
    var nombre = prompt("¿Cual es tu nombre?");
    document.getElementById('nombre').innerHTML = `Hi ${nombre}!`;
}


//same functions:

function loadData(){
    const data = fetch("heroes.txt").then((response) => {
        const text = response.text().then((value) => {
            document.getElementById("data").innerHTML = value;
        })
    })
}

async function loadData2(){
    const response = await fetch("heroes.txt");
    const text = await response.text();
    document.getElementById("data").innerHTML = text;       
}