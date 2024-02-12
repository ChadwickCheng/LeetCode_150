/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(list1==null){
    return list2;
  }
  if(list2==null){
    return list1;
  }
  let dummyHead = new ListNode(0);
  let p = list1;
  let q = list2;
  let cur = dummyHead;
  while(p!=null&&q!=null){
    if(p.val<=q.val){
      cur.next = p
      cur = cur.next
      p=p.next
    }else{
      cur.next = q;
      cur = cur.next;
      q=q.next;
    }
  }
  if(q==null){
    cur.next = p;
  }
  if(p==null){
    cur.next = q;
  }
  return dummyHead.next;
};
/*
时间复杂度：O(n + m)，其中 n 和 m 分别是两个输入链表的长度。这是因为在最坏的情况下，我们可能需要遍历两个链表中的每个节点一次才能合并它们。

空间复杂度：O(1)。我们只使用了几个指针变量，所以空间复杂度是常数。
*/