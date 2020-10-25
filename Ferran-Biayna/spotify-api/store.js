let _hans;
let token;
const cliend_id = '6dc64ac2d3f84d2cab497f3dba195f86';
const _cliend_secret_id = '32202c2adbf843f5bb110005a3fe725f';

class Store {

	async getToken() {
		try {
			const response = await fetch('https://accounts.spotify.com/api/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: 'Basic ' + btoa(cliend_id + ':' + _cliend_secret_id)
				},
				body: 'grant_type=client_credentials'
            });
            const data = await response.json();
            console.log(data.access_token)
			return (token = data.access_token);
		} catch (error) {
			return 'Invalid token';
		}
	}

	async loadPlaylist() {
		try {
			const response = await fetch(
				`https://api.spotify.com/v1/playlists/37i9dQZF1DWWF3yivn1m3D/tracks?access_token=${token}`
			);
			const hans = await response.json();
			return (_hans = hans);
		} catch (error) {
			return 'error';
		}
	}

    loadQuestion(playlist, turn, questions) {
		let inputs = '';
		for (let index = 0; index < questions[turn].answers.length; index++) {
			inputs += `<input type="radio" id="${questions[turn].answers[index]}" name="answer" value="${questions[turn].answers[index]}"><label for="${questions[turn].answers[index]}">${questions[turn].answers[index]}</label><br>`;
		}
		return `<h2>Pregunta ${turn + 1} - ${questions[turn].title}</h2><audio id="track" controls><source src="${playlist.items[questions[turn].index].track.preview_url}" type="audio/mpeg"></audio><p>Pista: ${playlist.items[questions[turn].index].track.name}</p><form id="form">${inputs}<br><button type="button" id="submit">Responder</button><button id="next" style="display:none">Siguiente</button></form><p id="answer" style="display:none"></p>`;
	}
}

const store = new Store();

module.exports = store;
