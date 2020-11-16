/* eslint-disable no-console */
const fs = require('fs');

const files = ['asfaj', 'empty.html', 'home.html'];

files.forEach((filename) => {
  try {
    const filePath = `${__dirname}\\${filename}`;
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    console.log(data);
  } catch (error) {
    const errorPath = error.path.split('\\');
    console.log(`There was an error: ${error.code} in file ${errorPath[errorPath.length - 1]}`);
  }
});
