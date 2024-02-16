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
var getMinimumDifference = function(root) {
  let queue = [];
  queue = postOrder(root,queue);
  let res = Infinity;
  for(let i=0;i<queue.length;i++){
    for(let j=i+1;j<queue.length;j++){
      res = Math.min(res,Math.abs(queue[i]-queue[j]))
    }
  }
  return res;
};

const postOrder = (root,queue)=>{
  if(!root) return queue;
  postOrder(root.left,queue);
  postOrder(root.right,queue);
  queue.push(root.val);
  return queue;
}