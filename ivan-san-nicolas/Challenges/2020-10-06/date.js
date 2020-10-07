function showDate() {
    document.getElementById("date").innerHTML = Date();
}

function sayHi() {
    var name = window.prompt('Introduce tu nombre');
    name.trim();
    if (name === "" || name === null) {
        document.getElementById("salute").innerHTML = "Hola desconocido!";
    } else {
        document.getElementById("salute").innerHTML = "Hola " + name + "!";
    }
}

function loadData() {
    const data = fetch('heroes.txt').then(response => {
        const text = response.text().then(value => {
            document.getElementById("data").innerHTML = value;
        });
    })
}

async function loadData() {
    const response = await fetch(heroes.txt);
    const text = await response.txt();
    document.getElementById("data").innerHTML = text;
}