// Importamos express
const express = require('express');
const cors = require('cors');
// Creamos el servidor
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { v4: uuidv4 } = require('uuid');

// NO FUNCIONA
/* const date = Date.parse(req.body.date);
const count = Number(req.body.count); */

// CUSTOM MIDDLEWARE

app.use((req, res, next) => {
	req.me = users[1];
	next();
});

const PORT = process.env.PORT || 3000;

// DATABASE //

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

app.use(cors());
// Configuramos el comportamiento del servidor cuando le llega una "GET" request

// USERS
app.get('/users', (req, res) => {
	return res.send(Object.values(users));
});
app.get('/users/:userId', (req, res) => {
	return res.send(users[req.params.userId]);
});
// MESSAGES
app.get('/messages', (req, res) => {
	return res.send(Object.values(messages));
});
app.get('/messages/:messageId', (req, res) => {
	return res.send(messages[req.params.messageId]);
});

app.post('/messages', (req, res) => {
	const id = uuidv4();
	const message = {
		id,
		text: req.body.text,
		userId: req.me.id
	};

	messages[id] = message;
	return res.send(message);
});

app.delete('/messages/:messageId', (req, res) => {
	const { [req.params.messageId]: message, ...otherMessages } = messages;

	messages = otherMessages;

	return res.send(message);
});

app.get('/session', (req, res) => {
	return res.send(users[req.me.id]);
});

/*

PRINCIPIO DEL TUTORIAL 

app.get('/users', (req, res) => {
	res.send('Received a GET HTTP method on user resource');
});
app.post('/users', (req, res) => {
	res.send('Received a POST HTTP method on user resource');
});
app.put('/users/:userId', (req, res) => {
	res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});
app.delete('/users', (req, res) => {
	res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

app.get('/example', (req, res) => {
	res.send("That's an example!");
});

*/

// Ponemos el servidor a escuchar en el puerto 3000 y le decimos que cuando se levante imprima el console.log
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
