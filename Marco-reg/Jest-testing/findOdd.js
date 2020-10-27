function findOdd(A) {
    let counter= 0;
    for(let i = 0; i < A.length; i++) {
      
      for(let k = 0; k < A.length; k++) {
            if(A[i] == A[k]) {
              counter++;
            }
          }
      if (counter% 2 !== 0) {
          return A[i];
      }
    }
    counter= 0;
  }
  module.exports=findOdd;