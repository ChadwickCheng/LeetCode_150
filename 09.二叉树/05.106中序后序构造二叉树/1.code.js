/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(!inorder.length||!postorder.length) return null;
  let rootVal = postorder[postorder.length-1];
  let root = new TreeNode(rootVal);
  let i = inorder.indexOf(rootVal);
  root.left = buildTree(inorder.slice(0,i),postorder.slice(0,i));
  root.right = buildTree(inorder.slice(i+1),postorder.slice(i,postorder.length-1))
  return root;
};

/*
时间复杂度：O(n^2)，其中 n 是二叉树的节点数。这是因为我们需要遍历每个节点一次，而每次遍历都需要在中序遍历的数组中查找根节点的位置，这个查找操作的时间复杂度是 O(n)。
空间复杂度：O(n)，因为我们需要存储递归调用的栈，递归的深度可能达到 n。此外，我们还需要存储输入的中序遍历和后序遍历的数组。
*/