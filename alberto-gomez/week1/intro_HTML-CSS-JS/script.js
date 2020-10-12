/*$("#myModal").on("shown.bs.modal", function () {
	$("#myInput").trigger("focus");
});*/

const fecha = document.getElementById("fecha");
let showDate = document.getElementById("showDate");
let greetings = document.getElementById("greetings");

fecha.addEventListener("click", () => {
	debugger;
	showDate.innerHTML = Date();
});

function sayHi() {
	let yourName = prompt("¿Cuál es tu nombre?");
	greetings.innerHTML = `Hello, ${yourName}`;
}

async function loadData() {
	const response = await fetch("heroes.txt");
	const text = await response.text();
	document.getElementById("data").innerText = text;
}
