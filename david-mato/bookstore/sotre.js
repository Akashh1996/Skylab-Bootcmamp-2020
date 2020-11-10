const cliend_id = '323438652554-je67c7n0cfuunoa59tu4qr1sv324bh5i.apps.googleusercontent.com';
const _cliend_secret_id = '02GXAvWk_A10bl9G7--BuEZD';
let token;
class SpotifyStore {
	async getToken() {
		const response = await fetch('https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3?key=yourAPIKey', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(cliend_id + ':' + _cliend_secret_id)
			},
			body: 'grant_type=client_credentials'
		});
		const data = await response.json();
		return (token = data.access_token);
	}