/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length===0) return [];
  let height = matrix.length,width=matrix[0].length;
  let top = 0,bottom=height-1,left=0,right=width-1;
  let direction = 0;// 0: right, 1: down, 2: left, 3: up
  let res = [];

  while(top<=bottom&&left<=right){
    switch (direction) {
      case 0:// move right
        for(let i=left;i<=right;i++) res.push(matrix[top][i]);
        top++;
        break;
      case 1:// move down
        for(let i=top;i<=bottom;i++) res.push(matrix[i][right]);
        right--;
        break;
      case 2:// move left
        for(let i=right;i>=left;i--) res.push(matrix[bottom][i]);
        bottom--;
        break;
      case 3:// move up
        for(let i=bottom;i>=top;i--) res.push(matrix[i][left]);
        left++;
        break;
    }
    direction = (direction+1)%4// switch direction
  }
  return res;
};

/*
时间复杂度是 O(m*n)，其中 m 是矩阵的行数，n 是矩阵的列数
空间复杂度是 O(1)

模拟螺旋路径 定义四个边界，然后按照右下左上的顺序遍历矩阵。
*/