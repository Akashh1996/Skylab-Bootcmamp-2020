function sayHi(name = 'Cunt') {
  console.log('*****************');
  console.log(`Hi ${name},welcome to Skylab`);
  console.log('*****************');
}
module.exports = sayHi;

function dynamicArgs(...args) {
  // eslint-disable-next-line no-console
  console.log(args);
}

dynamicArgs(1, 2, 3, 4, 6, 7);
