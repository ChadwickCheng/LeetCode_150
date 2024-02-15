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
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  const maxGain = node=>{
    if(!node) return 0;
    let leftGain = Math.max(maxGain(node.left),0);
    let rightGain = Math.max(maxGain(node.right),0);
    let priceNewPath = node.val+leftGain+rightGain;
    maxSum = Math.max(maxSum,priceNewPath);
    return node.val+Math.max(leftGain,rightGain);
  }

  maxGain(root);
  return maxSum;
};
/*
我们需要计算每个节点作为路径的一部分时，能提供的最大贡献值，然后更新全局的最大路径和。

时间复杂度是O(n)，其中n是二叉树的节点数
空间复杂度是O(h)，其中h是二叉树的高度
*/