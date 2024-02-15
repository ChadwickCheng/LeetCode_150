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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let queue = [root];
  let res = [];
  while(queue.length>0){
    let len = queue.length;
    let level = [];
    for(let i=0;i<len;i++){
      let node = queue.shift();
      level.push(node.val);
      node.left?queue.push(node.left):null;
      node.right?queue.push(node.right):null;
    }
    res.push(average(level));
  }
  return res;
};

const average = nums=>{
  let sum = nums.reduce((a,b)=>a+b,0)
  return sum/nums.length;
}

/*
时间复杂度是 O(N) 的原因是我们需要访问二叉树中的所有节点来计算每一层的平均值。
空间复杂度是 O(N) 的原因是在最坏的情况下，我们需要存储整个二叉树的所有节点。这种情况会发生在二叉树退化为链表的情况下，此时队列的大小等于二叉树的节点数量。
*/
