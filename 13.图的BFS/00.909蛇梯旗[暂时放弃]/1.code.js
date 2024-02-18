/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  const n = board.length;
  const visited = new Array(n * n + 1).fill(false);
  const queue = [[1, 0]];

  while (queue.length) {
      const [s, step] = queue.shift();
      if (visited[s]) continue;
      visited[s] = true;
      if (s === n * n) return step;
      for (let i = 1; i <= 6 && s + i <= n * n; ++i) {
          let ns = s + i;
          let [x, y] = getCoordinate(ns, n);
          if (board[x][y] !== -1) {
              ns = board[x][y];
          }
          queue.push([ns, step + 1]);
      }
  }
  return -1;
};

function getCoordinate(s, n) {
  const quot = Math.floor((s - 1) / n), rem = (s - 1) % n;
  const x = n - 1 - quot, y = quot % 2 === 0 ? rem : n - 1 - rem;
  return [x, y];
}