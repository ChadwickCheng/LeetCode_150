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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(root===null) return null;
  let queue = [];
  let preQueue = preorder(root,queue);
  for(let i=0;i<preQueue.length;i++){
    if(i===preQueue.length-1){
      preQueue[i].right = null;
      preQueue[i].left = null;
    }else{
      preQueue[i].right = preQueue[i+1];
      preQueue[i].left = null;
    }
  }
  return root;
};

const preorder = (root,queue)=>{
  if(!root) return;
  queue.push(root)
  preorder(root.left,queue);
  preorder(root.right,queue)
  return queue
}
/*
时间复杂度：O(n)，其中 n 是二叉树的节点数。这是因为我们需要遍历每个节点一次。
空间复杂度：O(n)，因为我们需要存储先序遍历的结果，即所有的节点。在最坏的情况下，如果二叉树退化为链表，那么递归调用的栈空间也会达到 O(n)。所以总的空间复杂度是 O(n)。
*/