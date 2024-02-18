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
var sortList = function(head) {
  if(head===null||head.next===null) return head;
  let slow = head,fast = head.next;
  while(fast!==null&&fast.next!==null){
    slow = slow.next;
    fast = fast.next.next;
  }
  const mid = slow.next;
  slow.next = null;
  let left = sortList(head);
  let right = sortList(mid);
  let h = new ListNode(0);
  let res = h;
  while(left!==null&&right!==null){
    if(left.val<right.val){
      h.next = left;
      left = left.next;
    }else{
      h.next = right;
      right = right.next;
    }
    h = h.next;
  }
  h.next = left!==null?left:right;
  return res.next;
};

/*
时间复杂度：O(n log n)，其中 n 是链表的长度。这是因为我们使用了归并排序的思想，归并排序的时间复杂度为 O(n log n)。在这个过程中，我们首先将链表分解为两个子链表，然后对每个子链表进行排序，最后将两个已排序的子链表合并。这个过程需要对链表的每个节点进行常数次操作，因此总的时间复杂度为 O(n log n)。

空间复杂度：O(log n)，其中 n 是链表的长度。这是因为我们使用了递归，递归的深度等于链表的深度，对于一棵平衡的二叉树，其深度为 log n。因此，我们需要 O(log n) 的空间来保存递归栈。注意，这里我们没有考虑输出的链表所占用的空间，因为它不是额外使用的空间。
*/