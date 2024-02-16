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
var isValidBST = function(root) {
  let queue = [];
  queue = inOrder(root,queue);
  for(let i=0;i<queue.length-1;i++){
    if(queue[i+1]-queue[i]<=0) return false;
  }
  return true;
};

const inOrder = (root,queue)=>{
  if(!root) return queue;
  inOrder(root.left,queue);
  queue.push(root.val);
  inOrder(root.right,queue);
  return queue;
}

/*
时间复杂度是 O(N)，空间复杂度是 O(N)，其中 N 是二叉树中的节点数量。
*/