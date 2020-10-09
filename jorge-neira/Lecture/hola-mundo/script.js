function sayHi() {
  let name = window.prompt('Escribe tu Nombre');
  name = name.trim();
	if (name === "") {
		document.getElementById(
			'displayGreeting'
		).textContent = `Que pena, no has puesto nada!`;
	} else {
		document.getElementById(
			'displayGreeting'
		).textContent = `Buenos dias ${name}`;
	}
}

// function loadData() {
//   const data = fetch("heroes.txt").then((response) => {
//     const text = response.text().then(value => {
//       document.getElementById("data").innerText = value;
//     })
//   })
// }

async function loadData() {
  const response = await fetch("heroes.txt")
  const text = await response.text();
      document.getElementById("data").innerText = text;

}


