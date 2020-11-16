/* eslint-disable no-console */
// function(exports, module, require, __filename, __dirname){}

function dynamicArgs(...args) {
  console.log(args);
}

dynamicArgs(1, 2, 3, 1, 5, 6, 2, 7);

const fileName = __filename.split('\\');
console.log(fileName);
console.log(fileName.slice(0, fileName.length - 1));
console.log(fileName[fileName.length - 1]);

const g = 1;

exports.a = 42;
module.exports.b = g;
