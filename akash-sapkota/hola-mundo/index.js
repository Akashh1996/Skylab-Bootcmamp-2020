let time = document.querySelector(".time")
let greet = document.querySelector(".greet")
let button = document.querySelector("button")

button.addEventListener("click",()=> time.innerHTML = Date())

function sayHi(){
    let name = prompt("whats your name")
    name = name.trim()
    if(name === ""){
        greet.innerHTML = `hello human without name`

    }else
    greet.innerHTML = `hello ${name}`
    name = ""

}
async function loadData(){
    const response = await fetch("heroes.txt")
        const text = await response.text()
            document.querySelector(".data").innerHTML = text
}