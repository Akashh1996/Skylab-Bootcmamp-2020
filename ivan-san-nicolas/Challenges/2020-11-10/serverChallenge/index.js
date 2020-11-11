const express = require('express');
const testRoute = require('./routes/routes')();
const cors = require('cors')

const app = express();
app.use(cors());

const port = process.env.PORT || 3838;

app.use('/', testRoute);

app.listen(port, () => {
    console.log(`Server running in the port ${port}`);
});