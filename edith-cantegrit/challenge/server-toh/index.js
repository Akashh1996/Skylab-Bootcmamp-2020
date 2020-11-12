const express = require('express');
const app = express();
const port = process.env.PORT || 1240;

app.listen(port, () => {
	console.log(`Esto funciona en el puerto ${port}`);
});

app.get(`/user`, (req, res) => {
	res.send('skylab');
});

app.post(`/post`, (req, res) => {
	res.send('send 1');
});
