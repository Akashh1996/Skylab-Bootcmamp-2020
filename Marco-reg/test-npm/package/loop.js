const path = require('path');
const fs = require('fs');

const files = ['home.html'];

files.forEach((filename) => {
  // contruir el path
  const filePath = `${__dirname}/${filename}`;
  // leer el contenido de ese fichero
  const data = fs.readFileSync(filePath);
  // mostar el contenido del fichero
});
