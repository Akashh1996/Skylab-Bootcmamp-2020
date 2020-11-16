// const path = require('path');
const fs = require('fs');

const files = ['Home.html'];

console.log(__dirname);

files.forEach((filename) => {
  try {
    const filePath = `${__dirname}/${filename}`;
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    console.log(data);
  } catch (error) {
    const pathError = error.path.split('/');
    console.log(`There was an error ${error.code} on file ${pathError[pathError.length - 1]}!`);
  }
});
