
/*function showDate(){
    get.document.getElementById('demo').innerHTML = Date();
}
function diHola(){
    const myName = window.prompt("Hola buenos dias, cual es tu nombre?");
    console.log(myName);
    document.getElementById('greeting').innerText = 'Hello, ${myName}';
    debugger;
}
*/
function loadData(){
    fetch('heroes.txt', {mode:'no-cors'}).then((response) => {
        debugger
        response.txt().then((value) => {
            debugger
            document.getElementById('data').innerText = value;
        });
    }); 
    }