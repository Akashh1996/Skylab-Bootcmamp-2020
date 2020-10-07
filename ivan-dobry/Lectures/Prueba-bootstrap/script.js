function showDate () {
    document.getElementById('date').innerHTML = Date();
}

function sayHi () {
    const name = prompt('write your name');
    name = name.trim();
    document.getElementById('hi').innerHTML = `Hola ${name}`;
    
}

async function loadData() {
   const response = await fetch('heroes.txt');
   const text = await response.text();
   document.getElementById('data').innerText = text;
}