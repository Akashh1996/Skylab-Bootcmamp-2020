const path = require('path');
const fs = require('fs');

const files = ['Homa.html'];

files.forEach((filename) => {
  const filePath = `${__dirname}/${filename}`;

  const data = fs.readFileSync(filePath, { encoding: 'utf-8' });

  console.log(data);
});
