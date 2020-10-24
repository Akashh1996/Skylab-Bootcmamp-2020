let _hans;
let token;
const cliend_id = '6dc64ac2d3f84d2cab497f3dba195f86';
const _cliend_secret_id = '32202c2adbf843f5bb110005a3fe725f';

let questions = [{
    index: 1,
    title: "¿Con cuál de las siguientes películas asociarías esta BSO?",
    answers: ['Gladiator', 'Inception', 'Interstellar', 'The Last Samurai'],
    correct: 1
  },
  {
    index: 2,
    title: "¿Con cuál de las siguientes películas asociarías esta BSO?",
    answers: ['Inception', 'The Dark Knigth Rises', 'Interstellar', 'The Dark Knight'],
    correct: 2
  },
  {
    index: 9,
    title: "¿Con cuál de las siguientes películas asociarías esta BSO?",
    answers: ['Batman Begins', 'Dunkerque', 'Blade Runner 2049', 'Pirates of the Caribbean'],
    correct: 2
  },
  {
    index: 13,
    title: "¿Con cuál de las siguientes películas asociarías esta BSO?",
    answers: ['The Last Samurai', 'Interstellar', 'Gladiator', 'Blade Runner 2049'],
    correct: 0
  },
  {
    index: 15,
    title: "¿Con cuál de las siguientes películas asociarías esta BSO?",
    answers: ['Dunkerque', 'The Da Vinci Code', 'The Lion King', 'The Dark Knight'],
    correct: 3
  },
  {
    index: 21,
    title: "¿Con cuál de las siguientes películas asociarías esta BSO?",
    answers: ['Inception', 'Inferno', 'Angels & Demons', 'The Da Vinci Code'],
    correct: 0
  },
  {
    index: 26,
    title: "¿Con cuál de los siguientes personajes asociarías esta BSO?",
    answers: ['Harvey Dent', 'Batman', 'Joker', 'Gilberto Cao'],
    correct: 1
  },
  {
    index: 30,
    title: "¿Con cuál de los siguientes personajes asociarías esta BSO?",
    answers: ['Harvey Dent', 'Batman', 'Joker', 'Gilberto Cao'],
    correct: 2
  },
  {
    index: 41,
    title: "¿Con cuál de las siguientes películas asociarías esta BSO?",
    answers: ['Dunkerque', 'The Last Samurai', 'Gladiator', 'Inferno'],
    correct: 1
  },
  {
    index: 58,
    title: "¿Con cuál de los siguientes videojuegos asociarías esta BSO?",
    answers: ['Fifa 2007', 'Call of Duty: Modern Warfare 2', 'Tetris', 'Fifa 2008'],
    correct: 1
  },
];

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
		    return (token = data.access_token);
        } catch (error) {
            console.log('Invalid token')
        }
    }

    async loadPlaylist () {
        try {
            const response = await fetch(`https://api.spotify.com/v1/playlists/37i9dQZF1DWWF3yivn1m3D/tracks?access_token=${token}`)
            const hans = await response.json()
            return _hans = hans
        } catch(error) {
            console.log('error')
        }
    }

    loadQuestion (playlist, turn) {
        let inputs='';
        for (let index=0; index < questions[turn].answers.length; index++) {
            inputs+=`<input type="radio" id="${questions[turn].answers[index]}" name="${questions[turn]}" value="${questions[turn].answers.indexOf(questions[turn].answers[index])}"><label for="${questions[turn].answers[index]}">${questions[turn].answers[index]}</label><br>`
        }
        return `<h2>Pregunta ${turn+1} - ${questions[turn].title}</h2><audio id="track" controls><source src="${playlist.items[questions[turn].index].track.preview_url}" type="audio/mpeg">
      </audio><p>Pista: ${playlist.items[questions[turn].index].track.name}</p><form>${inputs}</form>`
    }
    
    checkAnswer(value, turn) {
        
    }

}

const store = new Store();

module.exports = store;