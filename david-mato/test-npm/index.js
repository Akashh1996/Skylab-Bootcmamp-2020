function sayHi(name) {
  const greetName = name || 'stranger';

  debugger;

  console.log('*********************');
  console.log(`Hi ${greetName}, welcome to Skylab!`);
  console.log('*********************');
}

module.exports = sayHi;
