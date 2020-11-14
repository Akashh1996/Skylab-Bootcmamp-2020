const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
// const axios = require('axios');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1240;

const testRoute = require('./routes/routes')
app.use('/', testRoute)

const pokeRoutes = require('./routes/pokeRoutes')();
app.use('/pokemons', pokeRoutes)

// app.get('/', (req, res) => {
//     console.log(req);
//     res.end('Skylab mola!!');
// })

// app.post('/post', (req, res) => {
//     res.send('send1');
// })

// app.put('/put', (req, res) => {
//     res.send('hola');
// })

app.listen(port, () => {
    console.log(`Esto funciona en el puerto ${port}`)
})

// axios.post('http://localhost:1240/post')