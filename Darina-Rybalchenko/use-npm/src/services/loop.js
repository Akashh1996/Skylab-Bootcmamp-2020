/* eslint-disable no-console */
const fs = require('fs');

const files = ['Home.html', 'jhjhj'];
files.forEach((filename) => {
  try {
    const filePath = `${__dirname}/${filename}`;
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    console.log(data);
  } catch (error) {
    console.log('there was an error', error);
  }
});
