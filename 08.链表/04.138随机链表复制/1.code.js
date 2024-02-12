/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if(head===null){
    return null;
  }
  const map =  new Map();
  let node = head;
  while(node!==null){
    map.set(node,new Node(node.val,null,null));
    node = node.next;
  }
  node = head;
  while(node!==null){
    map.get(node).next = map.get(node.next)||null;
    map.get(node).random = map.get(node.random)||null;
    node = node.next;
  }
  return map.get(head);
};

/*
时间复杂度是O(n)，其中n是链表的长度。
空间复杂度也是O(n)，因为我们需要存储原节点到复制节点的映射。
*/