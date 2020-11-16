// function(exports, module, require, __filename, __dirname){

function dynamicArgs(...args) {
  console.log(args);
}

dynamicArgs(1, 2, 3, 5, 7);

const fileName = __filename.split('/');

console.log('__filename', fileName[fileName.length - 1]);

// }
