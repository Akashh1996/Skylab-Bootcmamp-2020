const express = require('express');

const app = express();

const port = process.env.PORT || 1240;

app.get('/user', (req, res) => {
	console.log(req);
	res.end('skylab mola');
});

app.post('/post', (req, res) => {
	res.send('send 1');
	res.send('send 2');
	res.end('send 3');
});

app.listen(port, () => {
	console.log(`esto funciona en el puresto ${port}`);
});
