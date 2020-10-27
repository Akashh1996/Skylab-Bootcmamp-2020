function comparePowers([a, b], [x, y]) {
	let f = Math.log(a) * b;
	let s = Math.log(x) * y;
	return f === s ? 0 : f > s ? -1 : 1;
}
    
    
      module.exports=comparePowers;


