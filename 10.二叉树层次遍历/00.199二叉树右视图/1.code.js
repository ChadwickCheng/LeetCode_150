/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root) return [];
  let queue = [root];
  let ans = [];
  while(queue.length>0){
    let len = queue.length;
    for(let i=0;i<len;i++){
      let node = queue.shift();
      i===len-1?ans.push(node.val):null;
      node.left?queue.push(node.left):null;
      node.right?queue.push(node.right):null;
    }
  }
  return ans;
};
/*
本质就是通过层序遍历找到每一层最右侧的节点

时间复杂度是 O(N) 的原因是我们可能需要访问二叉树中的所有节点来找到每一层的最右侧的节点。
空间复杂度是 O(N) 的原因是在最坏的情况下，我们需要存储整个二叉树的所有节点。这种情况会发生在二叉树退化为链表的情况下，此时队列的大小等于二叉树的节点数量。
*/