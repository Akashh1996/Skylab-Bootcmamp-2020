function sayHi(name) {
  const greetName = name || 'stranger';

  console.log('*****************************');
  console.log(
    `Hi ${greetName}, welcome to Skylab the best bootcamp in th fucking world!`,
  );
  console.log('*****************************');
}

module.exports = sayHi;
