/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  let dy = [-1, -1, -1, 0, 0, 1, 1, 1];
  let m = board.length;
  let n = board[0].length;

  // 遍历每个细胞
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          let live = 0;
          // 计算八个方向的活细胞数量
          for (let k = 0; k < 8; k++) {
              let nx = i + dx[k];
              let ny = j + dy[k];
              if (nx >= 0 && nx < m && ny >= 0 && ny < n && Math.abs(board[nx][ny]) === 1) {
                  live++;
              }
          }
          // 根据规则更新细胞状态
          if (board[i][j] === 1 && (live < 2 || live > 3)) {
              board[i][j] = -1;
          }
          if (board[i][j] === 0 && live === 3) {
              board[i][j] = 2;
          }
      }
  }

  // 遍历每个细胞，将临时状态转换为最终状态
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          board[i][j] = board[i][j] > 0 ? 1 : 0;
      }
  }
};

/*
时间复杂度是 O(m*n)，其中 m 是面板的行数，n 是面板的列数。
空间复杂度是 O(1)
*/