/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;

  // 主对角
  for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // 垂直中线
  for(let i=0;i<n;i++){
    for(let j=0;j<n/2;j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n-j-1];
      matrix[i][n-j-1] = temp;
    }
  }
};

/*
首先沿主对角线翻转矩阵，然后沿垂直中线翻转矩阵

时间复杂度是 O(n^2)
空间复杂度是 O(1)
*/