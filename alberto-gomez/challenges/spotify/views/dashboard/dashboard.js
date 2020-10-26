function drawDash() {
	const quizContainer = document.getElementById('quiz-container');
	for (question = 0; question < 10; question++) {
		let createQuestion = document.createElement('li');
		createQuestion.innerHTML = `<a href="../detail/detail.html?artistId=${_songsForQuiz[question].track.artists[0].id}"class="question-button">${_songsForQuiz[question].track.artists[0].name}</a>`;
		quizContainer.appendChild(createQuestion);
	}
}

(async () => {
	await store.getToken();
	await store.getPlaylist();
	store.getSongs(_playlist.tracks.items);
	/* 	debugger; */
	console.log(_songsForQuiz);
	drawDash();
})();
