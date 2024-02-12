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
var reverseKGroup = function(head, k) {
  let cur = head;
  let count = 0;
  while(cur!=null&&count!=k){
    cur = cur.next;
    count+=1;
  }
  if(count==k){
    cur = reverseKGroup(cur,k);
    while(count-- >0){
      let temp = head.next;
      head.next = cur;
      cur = head;
      head = temp;
    }
    head = cur;
  }
  return head;
};

/*
时间复杂度是O(n)，其中n是链表的长度
空间复杂度是O(n/k)，因为我们使用了递归，递归深度是n/k
*/