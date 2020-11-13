/* eslint-disable no-console */
// function(exports, require, __filename, __dirname)

function dynamicArgs(...args) {
  console.log(args);
}

dynamicArgs(1, 2, 3, 4, 5, 1, 7);

const fileName = __filename.split('/');

console.log('__filename: ', fileName);
