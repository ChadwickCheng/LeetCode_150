/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(root===null) return null;
  let queue = [root];
  while(queue.length>0){
    let size = queue.length;
    for(let i=0;i<size;i++){
      let node = queue.shift();
      if(i<size-1) node.next = queue[0];
      if(node.left!=null) queue.push(node.left);
      if(node.right!=null) queue.push(node.right);
    }
  }
  return root;
};
/*
通过层次遍历（也称为广度优先遍历）的方式解决。我们可以使用一个队列来存储每一层的节点，然后在遍历每一层的节点时，将每个节点的 next 指针指向它的下一个节点。
时间复杂度是O(n)，其中n是二叉树的节点数。因为我们需要遍历每个节点一次。
空间复杂度是O(n)，因为在最坏的情况下，我们可能需要在队列中存储所有的节点。
*/