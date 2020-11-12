
const fs = require('fs');

const files = ['Home.html', 'Empty.html', 'asdasdasd']

files.forEach(filename => {
    try {
        const filepath = `${__dirname}\\${filename}`;
        const data = fs.readFileSync(filepath, {encoding: 'utf-8'});
        console.log(data)
        
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log('File is missing');
        } else if (error.code === 'ERR_INVALID_OPT_VALUE_ENCODING') {
            console.log('Coding exception');
        } else {
            const errorPath = error.path.split('/');
            console.log(`There was an ${error.code} error on file ${errorPath && errorPath[errorPath.length - 1]}!`)

        }
    }
    // construir el path del fichero
    // leer el contenido de ese fichero
    // mostrar el contenido del fichero
})