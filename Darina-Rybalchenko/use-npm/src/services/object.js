function greet() {
  return 'hola mundo';
}

function top() {
  return greet;
}

exports.top = top;

exports.language = 'English';
exports.address = 'Barcelona';
exports.bootcamp = 'SkyLab';

/* module.exports = {
  language: 'English',
  address: 'Barcelona',
  bootcamp: 'SkyLab',

}; */
