if (!matrix.length) return 0;
  const state = Array(matrix[0].length).fill(0);
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let i2 = 0; i2 < row.length; i2++) {
      const n = matrix[i][i2];
      if (n) {
        state[i2]++;
      } else {
        state[i2] = 0;
      }
    }
    let seq = [];
    state.forEach((n, i) => {
      if (n) seq.push(n);
      if (!n || i === state.length - 1) {
        if (seq.length) {
          const set = new Set(seq);
          Array.from(set).forEach(number => {
            let sum = 0;
            seq.forEach((n, i2) => {
             if (n >= number) sum += number;
             if (n < number || i2 === seq.length - 1) {
               if (sum > max) max = sum;
               sum = 0;
             }
            });
          })
        }
        seq = [];
      }
    });
  }
  return max;