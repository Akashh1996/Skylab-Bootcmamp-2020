const path = require('path');
const fs = require('fs');

const files = ['Home.html'];

files.forEach((filesname) => {
  try {
    // construir o path do ficheiro
    const filePath = `${__dirname}/${filesname}`;
    // ler o conteudo do ficheiro
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    // mostrar o conteudo do ficheiro
    console.log(data);
  } catch (error) {
    const errorPath = error.path.split('/');
    console.log(`There was an ${error.code} error on file ${errorPath[errorPath.length - 1]}`);
  }
});
