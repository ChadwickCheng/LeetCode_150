// 邻接矩阵：一个二维数组，其中的元素表示两个节点之间是否存在边。例如：
let graph = [
  [0, 1, 0, 0],
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 0]
];
// 在这个邻接矩阵中，graph[i][j] 是 1 表示节点 i 和节点 j 之间存在边，是 0 表示不存在边。

// 邻接表：一个数组，其中的元素是列表，表示与一个节点相邻的所有节点。例如：
let graph1 = [
  [1],
  [0, 2, 3],
  [1, 3],
  [1, 2]
];
// 在这个邻接表中，graph[i] 是一个列表，包含了所有与节点 i 相邻的节点。

// 邻接表比邻接矩阵更节省空间，特别是对于稀疏图（即边的数量远小于节点的数量的平方）。但是，邻接矩阵可以更快地检查两个节点之间是否存在边。

let edges = [[0, 1], [1, 2], [2, 0]];
let numNodes = Math.max(...edges.flat()) + 1;

// 创建邻接表
let adjList = Array.from({length: numNodes}, () => []);
for (let [src, dest] of edges) {
    adjList[src].push(dest);
    adjList[dest].push(src); // 如果是无向图，需要添加这一行
}

// 创建邻接矩阵
let adjMatrix = Array.from({length: numNodes}, () => Array(numNodes).fill(0));
for (let [src, dest] of edges) {
    adjMatrix[src][dest] = 1;
    adjMatrix[dest][src] = 1; // 如果是无向图，需要添加这一行
}

// 邻接矩阵
// BFS
function bfs(graph, start) {
  let visited = new Array(graph.length).fill(false);
  let queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
      let node = queue.shift();
      console.log(node);

      for (let i = 0; i < graph[node].length; i++) {
          if (graph[node][i] === 1 && !visited[i]) {
              queue.push(i);
              visited[i] = true;
          }
      }
  }
}

// DFS
function dfs(graph, start) {
  let visited = new Array(graph.length).fill(false);
  let stack = [start];

  while (stack.length > 0) {
      let node = stack.pop();
      if (!visited[node]) {
          console.log(node);
          visited[node] = true;

          for (let i = 0; i < graph[node].length; i++) {
              if (graph[node][i] === 1) {
                  stack.push(i);
              }
          }
      }
  }
}

// 邻接表
// BFS
function bfs(graph, start) {
  let visited = new Array(graph.length).fill(false);
  let queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
      let node = queue.shift();
      console.log(node);

      for (let i = 0; i < graph[node].length; i++) {
          let neighbor = graph[node][i];
          if (!visited[neighbor]) {
              queue.push(neighbor);
              visited[neighbor] = true;
          }
      }
  }
}

// DFS
function dfs(graph, start) {
  let visited = new Array(graph.length).fill(false);
  let stack = [start];

  while (stack.length > 0) {
      let node = stack.pop();
      if (!visited[node]) {
          console.log(node);
          visited[node] = true;

          for (let i = 0; i < graph[node].length; i++) {
              let neighbor = graph[node][i];
              stack.push(neighbor);
          }
      }
  }
}