/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(head==null || head.next==null) return head;
  let dummy = new ListNode(0,head);
  let cur = dummy;
  while(cur.next&&cur.next.next){
    if(cur.next.val===cur.next.next.val){
      let val = cur.next.val;
      while(cur.next&&cur.next.val===val) cur.next = cur.next.next;
    }else{
      cur = cur.next;
    }
  }
  return dummy.next;
};
/*
时间复杂度是O(n)，其中n是链表的长度
空间复杂度是O(1)
*/