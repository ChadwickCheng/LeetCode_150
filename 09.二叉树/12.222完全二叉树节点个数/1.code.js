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
 * @return {number}
 */
var countNodes = function(root) {
  let queue = [];
  queue = postOrder(root,queue);
  return queue.length;
};

const postOrder = (root,queue)=>{
  if(!root) return queue;
  postOrder(root.left,queue);
  postOrder(root.right,queue);
  queue.push(root);
  return queue;
}
/*
时间复杂度为O(n)，其中n是二叉树中的节点数量。
由于使用了一个队列来存储所有的节点，所以空间复杂度也为O(n)。

这种方法并不是计算二叉树节点数量的最优方法。如果二叉树是完全二叉树，我们可以利用其特性，通过二分查找和位运算来得到更好的时间复杂度。
*/