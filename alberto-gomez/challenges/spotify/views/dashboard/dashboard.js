let songsForQuiz = [];

function getSongs(songItems) {
	console.log(songItems);
	for (song = 0; song < 10; song++) {
		songIndex = Math.round(Math.random() * songItems.length);
		songsForQuiz.push(songItems[songIndex]);
		songItems.splice(songIndex, 1);
	}
}

function drawDash() {
	const quizContainer = document.getElementById('quiz-container');
	for (question = 0; question < 10; question++) {
		let createQuestion = document.createElement('li');
		createQuestion.innerHTML = `<a href=""class="question-button">${songsForQuiz[question].track.artists[0].name}</a>`;
		quizContainer.appendChild(createQuestion);
	}
}

(async () => {
	await store.getToken();
	await store.getPlaylist();
	getSongs(_playlist.tracks.items);
	drawDash();
})();
