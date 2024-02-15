/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(!root) return null;
  if(root===p || root===q) return root;
  let left = lowestCommonAncestor(root.left,p,q);
  let right = lowestCommonAncestor(root.right,p,q);
  if(left!==null&&right!==null){
    return root;
  }
  if(left!==null){
    return left;
  }
  if(right!==null){
    return right;
  }
  return null;
};

/*
* 从根节点开始，如果当前节点是p或q的话，我们就返回当前节点给上一层的父节点。父节点会检查它的左右子节点是否都有返回值，如果都有，那么就说明当前的父节点就是最近公共祖先。
* 首先检查当前节点是否为空，如果为空则返回null。然后检查当前节点是否是p或q，如果是的话就返回当前节点。接着递归地在左右子树中查找p和q，如果在左右子树中都找到了，那么就说明当前节点是最近公共祖先。如果只在左子树或右子树中找到，那么就返回找到的节点。如果都没有找到，就返回null。

时间复杂度是 O(N) 的原因是我们可能需要访问二叉树中的所有节点来找到最近公共祖先。
空间复杂度是 O(N) 的原因是在最坏的情况下，我们需要存储整个二叉树的所有节点。这种情况会发生在二叉树退化为链表的情况下，此时递归的深度等于二叉树的节点数量。
*/