const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 1240;

app.use(cors());

app.get('/', (request, response) => {
	console.log(request);
	response.end('Server is up and working!');
});

app.post('/post', (request, response) => {
	response.send('send 2');
});

app.put('/post', (request, response) => {
	response.send('send 3');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
