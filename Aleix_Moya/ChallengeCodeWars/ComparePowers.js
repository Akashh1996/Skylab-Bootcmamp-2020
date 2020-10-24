function comparePowers(n1,n2){
    let f = Math.log(n1[0]) * n1[1];
     let s = Math.log(n2[0]) * n2[1];
     return f === s ? 0 : f > s ? -1 : 1;
 }