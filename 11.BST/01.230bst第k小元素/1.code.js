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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let queue = [];
  queue = inOrder(root,queue);
  return queue[k-1];
};

const inOrder = (root,queue)=>{
  if(!root) return queue;
  inOrder(root.left,queue);
  queue.push(root.val);
  inOrder(root.right,queue);
  return queue;
}

/*
时间复杂度是 O(N) 的原因是我们需要遍历数组中的所有元素来找出最小的差值。
空间复杂度是 O(1) 的原因是我们只使用了常数个额外的变量，这个空间需求不随数组的大小变化。

*/