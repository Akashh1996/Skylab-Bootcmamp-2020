function showDate() {
    document.getElementById("date").innerHTML = Date();
}

function sayHi() {
    const name = prompt('Dime tu nombre');
    name = name.trim();
    if (name === '') {
        document.getElementById("greetings").innerHTML = `Hola!`;
    }
    //window.alert('Hola, ' + name + '!');
    document.getElementById("greetings").innerHTML = `Hola, ${name}!`;
}

async function loadData() {
    const response = await fetch('heroes.txt');
    const text = await response.text();
    document.getElementById("datos").innerText = text;
}