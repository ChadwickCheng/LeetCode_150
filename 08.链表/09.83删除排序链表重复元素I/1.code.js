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
  let pre = head, cur = head.next;
  while(cur!=null){
    if(pre.val==cur.val){
      cur = cur.next;
      if(cur.next==null){
        pre.next=null;
      }
    }else{
      pre.next = cur;
      pre = cur;
      cur = cur.next;
    }
  }
  return head;
};

/*
时间复杂度：O(n)
空间复杂度：O(1)
*/