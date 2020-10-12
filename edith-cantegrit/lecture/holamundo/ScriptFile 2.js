function showDate() {
    document.getElementById('date').append(Date());
};

function sayHi() {
    const yourname = prompt("Before, tell me, what is your name?")
    // yourname = yourname.trim();
        document.getElementById('person').innerText = `Hello, ${yourname}`;
}

function loadData() {
    const data = fetch('heroes.txt').then((response) => {
        const text = response.text().then((value) => {
            document.getElementById("data").innerText = value;
        })
    });
}