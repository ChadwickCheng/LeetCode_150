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
var sumNumbers = function(root) {
  return dfs(root,0);
};

const dfs = (node,prevSum) => {
  if(!node) return 0;
  let sum = prevSum*10+node.val;
  if(!node.right&&!node.left){
    return sum;
  }else{
    return dfs(node.left,sum)+dfs(node.right,sum);
  }
}
/*
时间复杂度是O(n)，其中n是二叉树的节点数
空间复杂度是O(h)，其中h是二叉树的高度。
*/