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

// CLONE WITHOUT MUTATION

function cloneObject (objx) {
  objResult = {};
  Object.assign(objResult, objx);
  return objResult;
}