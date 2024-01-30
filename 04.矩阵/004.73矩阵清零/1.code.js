/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let height = matrix.length;
  let width = matrix[0].length;
  let row = new Array(height).fill(false);
  let col = new Array(width).fill(false);

  for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
      if(matrix[i][j]===0){
        row[i] = true;
        col[j] = true;
      }
    }
  }
  for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
      if(row[i]||col[j]) matrix[i][j]=0;
    }
  }
};

/*
一个标记数组用来记录每一行是否有零，另一个标记数组用来记录每一列是否有零。然后我们再次遍历矩阵，如果一个元素所在的行或列有零，我们就将这个元素设为零

时间复杂度是 O(m*n)，其中 m 是矩阵的行数，n 是矩阵的列数
空间复杂度是 O(m+n)，因为我们需要两个数组来记录每一行和每一列是否有零
*/