const path = require('path');
const fs = require('fs');

const files = ['Home.html', 'asfsfg'];

files.forEach((filename) => {
  try {
    // construir el path del fichero
    const filePath = `${__dirname}/${filename}`; // __dirname nos indica la ruta al módulo
    // leer el contenido de ese fichero
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    // mostrar el contenido del fichero
    console.log(data);
  } catch (error) {
    const errorPath = error.path.split('/');
    console.log(`There was an ${error.code} error on file ${errorPath[errorPath.length - 1]}!`);
  }
});
