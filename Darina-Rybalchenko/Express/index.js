const express = require('express');
const app = express();
const port = 3000;
const countries = [];

app.get('/', (req, res) => {
    res.send(countries);
});

app.post('/add/:country', (req, res) => {
    const { country } = req.params;
    countries.push({ id: countries.length + 1, name: country })
})

app.put('/update/:id/:name', (req, res) => {
    countries.forEach((country) => {
        if (country.id === +req.params.id) {
            country.name = req.params.name
        }
    })
})

app.delete('/delete/:id/:name', (req, res) => {
    console.log(req.params)
    countries.filter((country) => country.id !== +req.params.id)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

