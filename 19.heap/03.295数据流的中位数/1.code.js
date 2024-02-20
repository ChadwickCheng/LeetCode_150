
var MedianFinder = function() {
  this.low = new MaxHeap(); // 最大堆存储较小的一半元素
  this.high = new MinHeap(); // 最小堆存储较大的一半元素
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.low.add(num);
  this.high.add(this.low.poll());
  if (this.low.size() < this.high.size()) {
      this.low.add(this.high.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.low.size() > this.high.size()) {
    return this.low.peek();
  } else {
      return (this.low.peek() + this.high.peek()) / 2.0;
  }
};

class MaxHeap {
  constructor() {
      this.heap = [];
  }

  add(val) {
      this.heap.push(val);
      this.heapifyUp(this.heap.length - 1);
  }

  poll() {
      let max = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown(0);
      return max;
  }

  peek() {
      return this.heap[0];
  }

  size() {
      return this.heap.length;
  }

  heapifyUp(i) {
      while (i > 0 && this.heap[Math.floor((i - 1) / 2)] < this.heap[i]) {
          [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [this.heap[Math.floor((i - 1) / 2)], this.heap[i]];
          i = Math.floor((i - 1) / 2);
      }
  }

  heapifyDown(i) {
      while (2 * i + 1 < this.heap.length) {
          let max = 2 * i + 1;
          if (2 * i + 2 < this.heap.length && this.heap[2 * i + 2] > this.heap[2 * i + 1]) {
              max = 2 * i + 2;
          }
          if (this.heap[i] >= this.heap[max]) break;
          [this.heap[i], this.heap[max]] = [this.heap[max], this.heap[i]];
          i = max;
      }
  }
}

class MinHeap {
  constructor() {
      this.heap = [];
  }

  add(val) {
      this.heap.push(val);
      this.heapifyUp(this.heap.length - 1);
  }

  poll() {
      let min = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown(0);
      return min;
  }

  peek() {
      return this.heap[0];
  }

  size() {
      return this.heap.length;
  }

  heapifyUp(i) {
      while (i > 0 && this.heap[Math.floor((i - 1) / 2)] > this.heap[i]) {
          [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [this.heap[Math.floor((i - 1) / 2)], this.heap[i]];
          i = Math.floor((i - 1) / 2);
      }
  }

  heapifyDown(i) {
      while (2 * i + 1 < this.heap.length) {
          let min = 2 * i + 1;
          if (2 * i + 2 < this.heap.length && this.heap[2 * i + 2] < this.heap[2 * i + 1]) {
              min = 2 * i + 2;
          }
          if (this.heap[i] <= this.heap[min]) break;
          [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
          i = min;
      }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */