/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = Array(m).fill(0).map(()=>Array(n).fill(false));
  const directions = [[-1,0],[1,0],[0,-1],[0,1]];

  const check = (i,j,k)=>{
    if(board[i][j]!==word[k]) return false;
    else if(k===word.length-1) return true;
    visited[i][j] = true;
    let res = false;
    for(const [dx,dy] of directions){
      let newi = i+dx,newj = j+dy;
      if(newi>=0&&newi<m&&newj>=0&&newj<n){
        if(!visited[newi][newj]){
          if(check(newi,newj,k+1)){
            res = true;
            break;
          }
        }
      }
    }
    visited[i][j] = false;
    return res;
  };

  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(check(i,j,0)){
        return true;
      }
    }
  }
  return false;
};

/*
这段代码的时间复杂度和空间复杂度如下：

时间复杂度：在最坏的情况下，我们需要遍历整个网格，对于网格中的每个位置，都可能需要进行深度优先搜索。因此，时间复杂度为 O(mn * 4^k)，其中 m 和 n 是网格的行数和列数，k 是单词的长度。这里的 4 是由于每个位置有四个方向可以搜索。

空间复杂度：这主要取决于递归的深度和用于存储访问状态的二维数组。在最坏的情况下，递归的深度为 k，二维数组的大小为 mn，因此空间复杂度为 O(mn + k)。
*/