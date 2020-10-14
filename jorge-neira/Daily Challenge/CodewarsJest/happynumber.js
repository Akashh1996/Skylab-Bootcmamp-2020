function isHappy(n, pow) {
	n = n.toString().split('');
	if (n.length === 1) {
		return isHappy(n * pow);
	} else if (n.length > 1) {
    n.forEach(numArray => {
      return 
    });
  }
}

export default isHappy;
