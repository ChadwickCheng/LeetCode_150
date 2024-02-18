/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  const mid = Math.floor(nums.length/2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0,mid));
  root.right = sortedArrayToBST(nums.slice(mid+1));
  return root;
};

/*
时间复杂度：O(n)，其中 n 是数组的长度。这是因为我们需要访问数组中的每个元素一次，每个元素都会被用来创建一个新的树节点。

空间复杂度：O(log n)，其中 n 是数组的长度。这是因为我们需要使用递归栈来保存中间状态，递归的深度等于二叉搜索树的高度，对于一棵高度平衡的二叉搜索树，其高度不会超过 log n。此外，如果考虑输出的二叉搜索树所占用的空间，那么空间复杂度为 O(n)。
*/