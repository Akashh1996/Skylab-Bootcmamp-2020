function showDate() {
    document.getElementById('demo').innerHTML = Date();
}

function sayHi() {
    let userName = window.prompt('Whast is your name?');
    userName = userName.trim();
    if(userName === ''){
        document.getElementById('greeting').innerHTML = `Que pena no has puesto el nombre`;
    } else {
        document.getElementById('greeting').innerHTML = `Hello, ${userName}`;
    }
}
/*
function loadData() {
    const data = fetch('heroes.txt').then((response) => {
        const text = response.text().then((value) => {
            document.getElementById('data').innerText = value;
        })
    });
}*/

async function loadData() {
    const response = await fetch('heroes.txt');
    const text = await response.text();
    document.getElementById('data').innerText = text;
}


