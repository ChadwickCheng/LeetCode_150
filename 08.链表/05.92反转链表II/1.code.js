/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let pre = dummyNode;
  for(let i=0;i<left-1;i++){
    pre = pre.next;
  };
  let cur = pre.next;
  for(let i=0;i<right-left;i++){
    let next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  };
  return dummyNode.next;
};
/*
时间复杂度是O(n)，其中n是链表的长度。因为我们需要遍历链表一次。
空间复杂度是O(1)，因为我们只使用了常数个额外的变量。我们没有使用任何与输入规模相关的额外空间，所以空间复杂度是常数。
*/