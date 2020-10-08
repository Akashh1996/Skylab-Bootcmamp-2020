

function ShowDate() {
    document.getElementById("demo").innerHTML = Date();
}

function sayHi(){
    let nombre = prompt("Como te llamas?");
    debugger;
    if(nombre === "") {
        document.getElementById("greeting").innerHTML = `Que pena no has puesto un nombre`;
    } else {
        document.getElementById("greeting").innerHTML = `Hello, ${nombre.trim()}`;
    }

}

// function loadData() {
//     const data = fetch("heroes.txt").then((response => {
//         const text = response.text().then((value) => {
//             document.getElementById("data").innerText = value;
          
//         });
       
//     }));
    
// }

async function loadData() {
        const response = await fetch('heroes.txt');
        const text = await response.tect();
        document.getElementById('data').innerText = text;
}