/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;

  const dfs = (i,j)=>{
    if(i<0||j<0||i>=grid.length||j>=grid[0].length||grid[i][j]==='0') return;
    grid[i][j] = '0';
    dfs(i-1,j);
    dfs(i+1,j);
    dfs(i,j-1);
    dfs(i,j+1);
  }

  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
      if(grid[i][j]==='1'){
        count++;
        dfs(i,j)
      }
    }
  }
  return count;
};

/*
1. 初始化岛屿数量为0。
2. 遍历二维网格的每个点。
3. 如果当前点是陆地（'1'），则将岛屿数量加一，并执行深度优先搜索来标记所有相邻的陆地。
4. 在深度优先搜索中，如果当前点是陆地，我们将其标记为已访问（例如，将其值改为'0'），并对其四个方向（上、下、左、右）的点进行深度优先搜索。
5. 返回岛屿数量。


时间复杂度：在最坏的情况下，我们可能需要访问网格中的所有单元格，因此时间复杂度是 O(MN)。
空间复杂度：深度优先搜索的最大深度就是网格的大小，因此最坏情况下的空间复杂度也是 O(MN)。
*/