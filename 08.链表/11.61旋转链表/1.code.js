/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head==null||head.next==null||k==0) return head;
  let oldTail = head;
  let n = 1;
  while(oldTail.next){
    oldTail = oldTail.next;
    n++;
  }
  let moves = k % n;
  if(moves==0) return head;
  let newTail = head;
  for(let i=0;i<n-moves-1;i++) newTail = newTail.next;
  let newHead = newTail.next;
  newTail.next = null;
  oldTail.next = head;
  return newHead;
};

/*
时间复杂度：O(n)
空间复杂度：O(1)
*/