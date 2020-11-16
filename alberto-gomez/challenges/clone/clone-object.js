// CLONE WITHOUT MUTATION

function deepClone (objx) {
  if (Object.is(objx, undefined)) {
    objResult = undefined;
  } else {
    objResult = JSON.parse(JSON.stringify(objx));
  }
  return objResult;
}

module.exports = deepClone;