function dynamicArgs(...args) {
    // eslint-disable-next-line no-console
  console.log(args),
}

dynamicArgs(1, 2, 3, 4, 5, 1, 7)

console.log('__filename ', fileName);
const fileName = __filename.split('/');
console.log('__filename ', fileName[fileName.length - 1]);