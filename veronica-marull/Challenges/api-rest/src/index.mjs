import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

/*app.get('/', (req, res) => {
	res.send('Hello World!');
});*/

app.get('/', (req, res) => {
	return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
	return res.send('Received a POST HTTP method');
});

app.put('/users/:userId', (req, res) => {
	return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
	return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

let users = {
	1: {
		id: '1',
		username: 'Robin Wieruch'
	},
	2: {
		id: '2',
		username: 'Dave Davids'
	}
};

let messages = {
	1: {
		id: '1',
		text: 'Hello World',
		userId: '1'
	},
	2: {
		id: '2',
		text: 'By World',
		userId: '2'
	}
};

app.get('/users', (req, res) => {
	return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
	return res.send(users[req.params.userId]);
});

app.post('/messages', (req, res) => {
	const id = uuidv4();
	const message = {
		id
	};

	messages[id] = message;

	return res.send(message);
});

app.listen('3001', () =>
	console.log(`Example app listening on port ${process.env.PORT}!`)
);
