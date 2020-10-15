

function strictEquals(a, b) {
  if (((a == 0 && b == -0) || (a == -0 && b == 0)) && (typeof (a) == 'number' && typeof (b) == 'number')) {
    return true;
  }
  if (isNaN(a) && isNaN(b) && typeof (a) == 'number' && typeof (b) == 'number') {
    return false;
  }
  let c = Object.is(a, b);
  return c;
}


module.exports = strictEquals

/*
function strictEquals(a, b) {
    if (isNaN(a) && isNaN(b)) {
        return false;
    } else if (!Object.is(a, b) && isNaN(a / b)) {
        return true;
    } else {
        return Object.is(a, b);
    }

/*
function strictEquals(a, b) {
  if (Object.is(a, NaN) || Object.is(NaN, b)) {
    return false;
  } else if (Object.is(a, -0) || Object.is(-0, b)) {
    return true;
  } else if (Object.is(-0, b) || Object.is(a, -0)) {
    return true;
  } else {
    let c = Object.is(a, b);
    return c;
  }
}


strictEquals(1, 1); //true
//strictEquals(NaN ,NaN);//false // Rule Exception
//strictEquals(0 ,-0);//true // Rule Exception
//strictEquals(-0 ,0);//true // Rule Exception
//strictEquals(1 ,'1');//false
//strictEquals(true ,false);//false
//strictEquals(false ,false);//true
//strictEquals('water' ,'oil');//false
*/