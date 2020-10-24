

let _pruebas;
let newToken;

class Prueba {
	async _getToken() {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization:
					'Basic ' +
					btoa(
						'1ab978dbc11f4ec1a57242474134a007' +
							':' +
							'fa2bc6e91e6c4c2b90420a2565b26669'
					)
			},
			body: 'grant_type=client_credentials'
		});

		const data = await response.json();
		return (newToken = data.access_token);
	}

	async getTest() {
		const response = await fetch(
			'https://api.spotify.com/v1/search?q=classical&type=track&market=US',
			{
				method: 'GET',
				headers: { Authorization: 'Bearer ' + newToken }
			}
		);
		const result = await response.json();
		return (_pruebas = result.tracks);
	}
}

let test = new Prueba();

(async () => {
	await test._getToken();
	await test.getTest();
	console.log(newToken);
	console.log(_pruebas);
})();
