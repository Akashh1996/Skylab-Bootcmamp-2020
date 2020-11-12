const fs = require('fs')

const files = ['Home.html'];

files.forEach(filename => {
  try {
    const filePath = `${__dirname}/${filename}`
    const data =  fs.readFileSync(filePath, {encoding: 'utf-8'})
  } catch (error) {
    if (error.code === 'ENOEN>T') {
      console.log('File is Missing!');
    } else {
      const errorPath = error && error.path && error.path.split('/')
      console.log(`There was an ${error.code} error on file ${errorPath && errorPath[errorPath && errorPath.length - 1]}!`);
    }
  }
 
})
