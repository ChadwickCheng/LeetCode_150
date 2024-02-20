/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  const pjds = [];
  for(let i=0;i<profits.length;i++) pjds.push([capital[i],profits[i]])
  pjds.sort((a,b)=>a[0]-b[0]);
  const maxHeap = new MaxHeap();
  let i=0;
  while(k-- > 0){
    while(i<pjds.length&&pjds[i][0]<=w){
      maxHeap.offer(pjds[i][1]);
      i++;
    }
    if(maxHeap.size()>0){
      w+=maxHeap.poll();
    }else{
      break;
    }
  }
  return w;
};

class MaxHeap {
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

  size() {
      return this.heap.length;
  }

  siftUp(index) {
      let parent = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[parent] < this.heap[index]) {
          [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
          index = parent;
          parent = Math.floor((index - 1) / 2);
      }
  }

  siftDown(index) {
      let child = index * 2 + 1;
      while (child < this.heap.length) {
          let rightChild = index * 2 + 2;
          if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[child]) {
              child = rightChild;
          }
          if (this.heap[child] <= this.heap[index]) {
              break;
          }
          [this.heap[child], this.heap[index]] = [this.heap[index], this.heap[child]];
          index = child;
          child = index * 2 + 1;
      }
  }
}