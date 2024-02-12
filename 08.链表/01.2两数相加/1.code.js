/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1;
  let q = l2;
  let curr = dummyHead;
  let carry = 0;
  while(p!=null||q!=null){
    let x = (p!=null)?p.val:0;
    let y = (q!=null)?q.val:0;
    let sum = carry+x+y;
    carry = Math.floor(sum/10);
    curr.next = new ListNode(sum%10);
    curr = curr.next;
    if(p!=null) p=p.next;
    if(q!=null) q=q.next;
  }
  if(carry>0) curr.next = new ListNode(carry);
  return dummyHead.next;
};

/*
时间复杂度：O(max(m, n))。这是因为代码中有一个 while 循环，该循环会遍历两个链表 l1 和 l2。在每次迭代中，执行的操作（包括创建新节点和更新指针）的时间复杂度都是 O(1)。因此，整个函数的时间复杂度是 O(max(m, n))，其中 m 和 n 分别是链表 l1 和 l2 的长度。
空间复杂度：O(max(m, n))。这是因为在最坏的情况下，如果链表 l1 和 l2 的长度相同，那么我们需要创建一个新的链表，其长度和 l1 和 l2 的长度相同。因此，空间复杂度是 O(max(m, n))。
*/