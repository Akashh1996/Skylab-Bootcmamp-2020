function sayHi(name) {
  const greetName = name || 'stranger';

  console.log('**************');
  console.log(`Hi ${greetName}, welcome to Skylab!`);
  console.log('*******');
}

module.exports = sayHi;
