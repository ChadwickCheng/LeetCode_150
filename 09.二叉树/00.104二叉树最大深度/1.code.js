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
var maxDepth = function(root) {
  if(root===null){
    return 0;
  }else{
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight,rightHeight)+1;
  }
};
/*
时间复杂度是O(n)，其中n是二叉树的节点数
空间复杂度是O(h)，其中h是二叉树的高度。因为我们需要使用递归栈，递归栈的深度等于二叉树的高度。
*/