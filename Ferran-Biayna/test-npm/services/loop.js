const fs = require('fs');

const files = ['faf', 'Home.html'];

files.forEach((filename) => {
  try {
    const filePath = `${__dirname}/${filename}`; // construir el path del fichero
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' }); // leer el contenido de ese fichero
    console.log(data); // mostrar el contenido del fichero
  } catch (error) {
    const errorPath = error.path.split('/');
    console.log(`There was an ${error.code} error - ${error} - on file ${errorPath[errorPath.length - 1]}`);
  }
});
