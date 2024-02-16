/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const graph = {};
  for(let i=0;i<equations.length;i++){
    let [a,b] = equations[i];
    let value = values[i];
    if(!graph[a]) graph[a] = {};
    if(!graph[b]) graph[b] = {};
    graph[a][b] = value;
    graph[b][a] = 1/value;
  }

  const dfs = (start,end,visited)=>{
    if(!graph[start]) return -1.0;
    if(graph[start][end]!==undefined) return graph[start][end];
    visited.add(start);
    for(let next in graph[start]){
      if(visited.has(next)) continue;
      let value = dfs(next,end,visited);
      if(value!==-1.0){
        return value*graph[start][next];
      }
    }
    return -1.0;
  }

  let res = [];
  for(let [start,end] of queries) res.push(dfs(start,end,new Set()));
  return res;
};

/*
这个问题可以使用图的深度优先搜索（DFS）或广度优先搜索（BFS）来解决。我们可以将每个等式视为图中的一条边，其中两个变量是两个节点，而值是边的权重。然后，对于每个查询，我们尝试找到从 Cj 到 Dj 的路径，并将路径上的所有边的权重相乘，得到的结果就是答案。

以下是实现这个算法的步骤：

创建一个图，其中每个节点是一个变量，每条边的权重是等式的值。
对于每个查询，使用深度优先搜索或广度优先搜索找到从 Cj 到 Dj 的路径，并将路径上的所有边的权重相乘。
时间复杂度：我们需要遍历所有的等式来构建图，这需要 O(E) 的时间。然后，对于每个查询，我们可能需要遍历图中的所有节点，这需要 O(E) 的时间。因此，总的时间复杂度是 O(E + Q)。

空间复杂度：我们需要一个图来存储所有的等式，这需要 O(E) 的空间。然后，对于每个查询，我们需要一个集合来存储已经访问过的节点，这需要 O(E) 的空间。因此，总的空间复杂度是 O(E + Q)。
*/