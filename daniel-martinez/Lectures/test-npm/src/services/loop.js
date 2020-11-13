const fs = require('fs');

const files = ['Home.html'];

files.forEach((filename) => {
  try {
    const filePath = `${__dirname}/${filename}`;
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    console.log(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File is missing');
    } else {
      const errorPath = error.path.split('/');
      console.log(`There was an ${error.code} error on file ${errorPath && errorPath[errorPath.length - 1]}!`);
    }
  }
});
