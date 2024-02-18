/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let dummy = new ListNode(0);
  let node = dummy;
  let queue = new MyPriorityQueue((a,b)=>a.val-b.val);
  for(let list of lists) list?queue.enqueue(list):null;

  while(!queue.isEmpty()){
    let minNode = queue.dequeue();
    node.next = minNode;
    node = node.next;
    minNode.next?queue.enqueue(minNode.next):null;
  }

  return dummy.next;
};

class MyPriorityQueue {
  constructor(comparator){
    this.array = [];
    this.comparator = comparator;
  }
  enqueue(v){
    this.array.push(v);
    this.array.sort(this.comparator);
  }
  dequeue(){
    return this.array.shift();
  }
  isEmpty(){
    return this.array.length === 0;
  }
}

/*
这段代码的时间复杂度和空间复杂度如下：

时间复杂度：O(n log k)，其中 n 是所有链表中元素的总数目，k 是链表的数目。每次从优先队列中取出元素需要 O(log k) 的时间，总共需要取出 n 个元素，所以总的时间复杂度是 O(n log k)。

空间复杂度：O(k)，优先队列中最多有 k 个元素，所以空间复杂度是 O(k)。
*/