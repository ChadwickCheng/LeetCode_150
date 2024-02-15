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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(!root) return false;
  if(!root.left && !root.right) return targetSum === root.val;
  return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val);
};
/*
时间复杂度是O(n)，其中n是二叉树的节点数。
空间复杂度是O(h)，其中h是二叉树的高度
*/