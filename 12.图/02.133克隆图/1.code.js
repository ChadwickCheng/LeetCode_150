/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const map = new Map();

  const dfs = (node)=>{
    if(!node) return null;
    if(map.has(node)) return map.get(node);
    let clone = new Node(node.val);
    map.set(node,clone);
    for(let neighbor of node.neighbors) clone.neighbors.push(dfs(neighbor));
    return clone;
  }

  return dfs(node);
};

/*
时间复杂度：我们需要遍历图中的每一个节点，因此时间复杂度是 O(N)。

空间复杂度：我们需要使用一个哈希表来存储已经复制的节点，最坏情况下，我们需要存储所有的节点，因此空间复杂度也是 O(N)。
*/