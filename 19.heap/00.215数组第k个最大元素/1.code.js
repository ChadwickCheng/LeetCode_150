/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const heap = new MinHeap();
  for (let num of nums) {
      if (heap.size() < k) {
          heap.offer(num);
      } else if (num > heap.peek()) {
          heap.poll();
          heap.offer(num);
      }
  }
  return heap.peek();
};

class MinHeap {
  constructor() {
      this.heap = [];
  }

  offer(val) {
      this.heap.push(val);
      this.siftUp(this.heap.length - 1);
  }

  poll() {
      const result = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = end;
          this.siftDown(0);
      }
      return result;
  }

  peek() {
      return this.heap[0];
  }

  size() {
      return this.heap.length;
  }

  siftUp(index) {
      let parent = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[parent] > this.heap[index]) {
          [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
          index = parent;
          parent = Math.floor((index - 1) / 2);
      }
  }

  siftDown(index) {
      let child = index * 2 + 1;
      while (child < this.heap.length) {
          let rightChild = index * 2 + 2;
          if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[child]) {
              child = rightChild;
          }
          if (this.heap[child] >= this.heap[index]) {
              break;
          }
          [this.heap[child], this.heap[index]] = [this.heap[index], this.heap[child]];
          index = child;
          child = index * 2 + 1;
      }
  }
}