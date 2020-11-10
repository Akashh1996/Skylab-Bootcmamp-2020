const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');

uuidv4();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.get('/users', (req, res) => {
	return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
	return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
	return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
	return res.send('DELETE HTTP method on user resource');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.put('/users/:userId', (req, res) => {
	return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
	return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

app.get('/users', (req, res) => {
	return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
	return res.send(users[req.params.userId]);
});

app.post('/messages', (req, res) => {
	const id = uuidv4();
	const message = {
		id,
		text: req.body.text
	};

	messages[id] = message;

	return res.send(message);
});
