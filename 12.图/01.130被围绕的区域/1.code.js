/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if(board.length === 0) return;
  let m = board.length,n = board[0].length;

  const dfs = (i,j)=>{
    if(i<0||j<0||i>=m||j>=n||board[i][j]!=='O') return;
    board[i][j] = 'poko';
    dfs(i-1,j);
    dfs(i+1,j);
    dfs(i,j-1);
    dfs(i,j+1);
  };

  for(let i=0;i<m;i++){
    dfs(i,0);
    dfs(i,n-1);
  }
  for(let i=0;i<n;i++){
    dfs(0,i);
    dfs(m-1,i);
  }

  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      board[i][j]==='O'?board[i][j]='X':null;
      board[i][j]==='poko'?board[i][j]='O':null;
    }
  }

};

/*
1. 遍历矩阵的四个边界，如果找到 'O'，则从该点开始进行深度优先搜索或广度优先搜索，将所有与边界上的 'O' 相连的 'O' 都标记为 'B'。
2. 遍历整个矩阵，将 'O' 变为 'X'，将 'B' 变回 'O'。

时间复杂度：在最坏的情况下，我们可能需要访问网格中的所有单元格，因此时间复杂度是 O(MN)。
空间复杂度：深度优先搜索的最大深度就是网格的大小，因此最坏情况下的空间复杂度也是 O(MN)。
*/