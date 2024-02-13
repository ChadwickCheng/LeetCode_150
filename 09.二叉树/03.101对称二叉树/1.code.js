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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isMirror(root,root);
};

var isMirror = function(node1,node2){
  if(node1===null&&node2===null){
    return true;
  }
  if(node1===null || node2===null){
    return false;
  }
  return (node1.val===node2.val)&&isMirror(node1.left,node2.right)&&isMirror(node1.right,node2.left);
}
/*
时间复杂度是O(n)，其中n是二叉树的节点数
空间复杂度是O(h)，其中h是二叉树的高度
*/