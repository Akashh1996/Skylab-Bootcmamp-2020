const { response } = require('express');
const express = require('express');

const app = express();

const port = process.env.PORT || 1240;

app.get('/', (req, res) => {
	res.end('Skylab mola');
});

app.post('/post', (req, res) => {
	res.end('Skylab mola');
});

app.put('/put',(req,res)=>{
	res.end('Este es el PUT')
})

app.listen(port, () => {
	console.log(`server up and running in port ${port}`);
});
