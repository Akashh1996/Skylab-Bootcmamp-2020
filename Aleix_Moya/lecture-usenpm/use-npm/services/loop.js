/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-template */

const fs = require('fs');

const files = ['home.html'];

files.forEach((filename) => {
  // construir el path del fichero
  try {
    const filePath = `${__dirname}\\${filename}`; //dirname es la direccion hasta la carpeta actual como queremos usar home.html y esta en la misma carpeta, nos sirve
    console.log(filePath);
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' }); //readFileSync sirve para leer ficheros, encoding utf-8;
    // es para codificarlo a utf-8 que es como todas las web se codifican, si el filename (el files) no existiera;
    // haria un throw de error, por eso el try cathc;
    console.log(data);
  } catch (error) {
    const errorPath = error.path.split('/');
    console.log(`There was an error ${error.code} on file ${errorPath[errorPath.length - 1]}`); //Esto muestra en que archivo esta el error y de que tipo es;
  }
  // leer el contenido de ese fichero
  // mostrar el contenido del fichero
});
