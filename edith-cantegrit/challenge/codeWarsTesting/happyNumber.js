function digitPowerSum(n, pow) {
    var s = 0;
    
    while (n > 0) {
      s += Math.pow(n % 10, pow);
      n = n / 10 | 0;
    }
    
    return s;
  }
  
  function isHappy(n, pow) {
    var i = -1, seen = [n];
    
    while (n !== 1 && i === -1) {
      n = digitPowerSum(n, pow);
      i = seen.indexOf(n);
      seen.push(n);
    }
    
    return n === 1 ? [1] : seen.slice(i);
    
  }