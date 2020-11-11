const express = require('express');
const app = express();
const port = process.env.PORT || 1240;

const testRoute = require('./routes/routes')()

app.use('/', testRoute)

app.listen(port, () => {
    console.log(`Esto funciona  en el puerto ${port}`);
});

