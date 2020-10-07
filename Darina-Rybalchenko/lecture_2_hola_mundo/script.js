function ShowDate() {
    document.getElementById('demo').innerHTML = Date()
}

/* function ShowDate() {
    const nav = document.getElementById('list')
    document.getElementById('demo').appendChild(nav)
} */

let displayName = document.getElementById('displayName')

function sayHi() {
    let name = prompt('Como te llamas?')
    name = name.trim()
    if (name === '') {
        sayHi()
    }
    displayName.innerHTML = `Hola ${name}`
}

function loadData() {
    const data = fetch('heroes.txt').then((response) => {
        const text = response.text().then((value) => {
            document.getElementById('data').innerText = value
        })
    })
}

/* async function loadData() { 
const response = await fetch('heroes.txt')
const text = await response.text()
document.getElementById('data').innerText = text
} */