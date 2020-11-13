const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/heroes', (req, res) => {
  res.send('Welcome to heroes');
});

app.get('/profile', (req, res) => {
  res.send('Welcome to profile');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
