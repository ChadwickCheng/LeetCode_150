/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = 0;
  let cols = new Set();
  let diag1 = new Set();
  let diag2 = new Set();

  const solve = (row) => {
      if (row === n) {
          res++;
          return;
      }
      for (let col = 0; col < n; col++) {
          if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) {
              continue;
          }
          cols.add(col);
          diag1.add(row + col);
          diag2.add(row - col);
          solve(row + 1);
          cols.delete(col);
          diag1.delete(row + col);
          diag2.delete(row - col);
      }
  };

  solve(0);
  return res;
};