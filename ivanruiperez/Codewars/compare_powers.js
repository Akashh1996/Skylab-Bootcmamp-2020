function comparePowers(n1, n2) {
  let a = n1[0];
  let b = n1[1];
  let f = Math.log(a) * b;
  let x = n2[0];
  let y = n2[1];
  let s = Math.log(x) * y;
  return f === s ? 0 : f > s ? -1 : 1;
}
module.exports = comparePowers;
