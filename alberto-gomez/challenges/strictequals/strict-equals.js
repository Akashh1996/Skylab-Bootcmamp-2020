// STRICT EQUALS

function strictEquals (a, b) {
  if (isNaN(a) && isNaN(b)) {
    result = false;
  } else if (!a && !b) {
    result = true;
  } else {
    result = Object.is(a, b);
  }
  return result
}

module.exports = strictEquals;