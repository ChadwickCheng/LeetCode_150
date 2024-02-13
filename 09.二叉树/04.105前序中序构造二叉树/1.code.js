/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(!preorder.length||!inorder.length) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let i = inorder.indexOf(rootVal);
  root.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i));
  root.right = buildTree(preorder.slice(i+1),inorder.slice(i+1));
  return root;
};

/*
时间复杂度是O(n^2)，其中n是二叉树的节点数。这是因为我们需要遍历每个节点一次，而每次遍历都需要在中序遍历的数组中查找根节点的位置。
空间复杂度是O(n)，因为我们需要存储递归调用的栈，递归的深度可能达到n。
*/