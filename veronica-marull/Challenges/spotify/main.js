const artistName = document.getElementById('artist_name');
const artistFoto = document.getElementById('artist_foto');
const albumsOptions = document.getElementById('albums_options');

const startbtn = document.getElementById('start-btn');

const btn_next = document.getElementById('btn_next');
const gameRules = document.getElementById('game-rules');

startbtn.addEventListener('click', function () {
	startbtn.classList.add('hidden');
	artistName.classList.remove('hidden');
	artistFoto.classList.remove('hidden');
	albumsOptions.classList.remove('hidden');
	btn_next.classList.remove('hidden');
	gameRules.classList.add('hidden');

	startGame();
});

btn_next.addEventListener('click', function () {
	if (indexQuestion < questions.length && questionAnswered) {
		startGame();
		questionAnswered = false;
	} else if (questionAnswered === false) {
		alert('no ha seleccionado ninguna opción.');
	} else if (indexQuestion === 10) {
		artistFoto.classList.add('hidden');
		albumsOptions.classList.add('hidden');
		btn_next.classList.add('hidden');
		artistName.innerText = 'Game Over'; //poner puntacion
	}
});

let questions;
let currentQuestion;
let indexQuestion = 0;

async function startGame() {
	questions = await createGame();
	console.log(questions);

	artistName.innerText = questions[indexQuestion].artist.name;
	artistFoto.innerHTML = `<img src=${questions[indexQuestion].artist.photo}>`;

	let fourOptions = '';
	console.log(questions[indexQuestion].artist);

	currentQuestion = questions[indexQuestion];

	for (index in currentQuestion.options) {
		fourOptions += ` <input type="button" id="${index}" class = "options" value="${currentQuestion.options[index]}" 
		onclick= "checkAnswer(${index})"></input> `;
	}
	albumsOptions.innerHTML = fourOptions;
	indexQuestion++;
}

let questionAnswered = false;
function checkAnswer(index) {
	if (currentQuestion.artist.album === currentQuestion.options[index]) {
		document.getElementById(index).classList.add('rightAnswer');
	} else {
		document.getElementById(index).classList.add('wrongAnswer');
	}
	document.getElementById(0).disabled = true;
	document.getElementById(1).disabled = true;
	document.getElementById(2).disabled = true;
	document.getElementById(3).disabled = true;
	questionAnswered = true;
}
