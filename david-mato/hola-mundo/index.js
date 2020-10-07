const showDate = () => document.getElementsByClassName('modal-body')[0].innerHTML = Date();

const sayHi = () => {
    let userName = prompt('Introduce tu nombre');
    document.getElementById('greeting').innerHTML = `¡Hola, ${userName}!`;
}

function loadData() {
    fetch('heroes.txt').then(response => {
        response.text().then(value => {
            document.getElementById('data').innerHTML = value;
        })
    })

}