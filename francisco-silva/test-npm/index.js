function sayHi(name) {
  const greetName = name || 'stranger';
  console.log('***************************');
  console.log(`Hi ${greetName}, welcome to skylab`);
  console.log('***************************');
}
debugger;
function sayBye(name) {
  if (!name) {
    name = 'stranger';
  }
  console.log('***************************');
  console.log(`Bye ${name}, see you soon`);
  console.log('***************************');
}

module.exports = sayHi;

module.exports = sayBye;
