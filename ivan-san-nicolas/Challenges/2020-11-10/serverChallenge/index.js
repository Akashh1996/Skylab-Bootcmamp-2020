const express = require ('express');

const app = express();

const port = process.env.PORT || 3838;

app.get('', (req, res) => {
    res.end('Skylab mola');
});

app.post('/post', (req, res) => {
    res.end('este es el post');
});

app.put('/post', (req, res) => {
    res.end('este es el put');
});

app.listen(port, () => {
    console.log(`Server running in the port ${port}`);
});