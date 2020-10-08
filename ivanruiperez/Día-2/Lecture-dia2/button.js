function ShowDate(){
    document.getElementById('demo').innerHTML = Date();
}
function sayHi(){
    let name = prompt("Introduce nombre");
    document.getElementById('saludo').innerHTML = name;
}
async function loadData(){
    const response = await fetch('heroes.txt')
        const text = await response.text()
            document.getElementById('data').innerText = text;
    
}